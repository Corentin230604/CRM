import { app } from '@azure/functions';
import { randomBytes } from 'node:crypto';
import { cfg } from '../lib/config.js';
import { handler, json, origin, readJson, redirect } from '../lib/http.js';
import { forgetCachedUser } from '../lib/live.js';
import { nowIn } from '../lib/mapping.js';
import { patchUser, publicUser, recordLogin } from '../lib/people.js';
import { STATE_COOKIE, clearedSession, cookie, readCookies, requireUser, sessionCookie } from '../lib/session.js';
import { authUrl, forgetTokens, redeem } from '../lib/tokens.js';
import { cleanStatus } from '../lib/validate.js';

const callbackUrl = (request) => `${origin(request, cfg.publicUrl)}/api/auth/callback`;
const home = (request, query = '') => `${origin(request, cfg.publicUrl)}/${query}`;

// GET /api/auth/login[?connect=1] : redirige vers Microsoft.
// Sans « connect » : identité seulement. Avec : statut Teams et agenda Outlook en plus.
app.http('authLogin', {
  methods: ['GET'], authLevel: 'anonymous', route: 'auth/login',
  handler: handler(async (request) => {
    const connect = request.query.get('connect') === '1';
    const nonce = randomBytes(18).toString('base64url');
    const state = Buffer.from(JSON.stringify({ n: nonce, c: connect ? 1 : 0 })).toString('base64url');
    const url = await authUrl({ redirectUri: callbackUrl(request), state, connect });
    return redirect(url, [cookie(STATE_COOKIE, nonce, 600)]);
  }),
});

// GET /api/auth/callback : retour de Microsoft.
app.http('authCallback', {
  methods: ['GET'], authLevel: 'anonymous', route: 'auth/callback',
  handler: async (request, context) => {
    const fail = (msg) => redirect(home(request, `?auth_error=${encodeURIComponent(msg)}`), [cookie(STATE_COOKIE, '', 0)]);
    try {
      const err = request.query.get('error');
      if (err) {
        const desc = request.query.get('error_description') || '';
        if (err === 'consent_required' || /AADSTS65001|AADSTS90094/.test(desc)) {
          return fail('Votre organisation demande qu\'un administrateur approuve Étage avant de pouvoir connecter Teams et Outlook.');
        }
        if (err === 'access_denied') return fail('Connexion annulée.');
        return fail('Microsoft a refusé la connexion.');
      }
      let st;
      try { st = JSON.parse(Buffer.from(request.query.get('state') || '', 'base64url').toString()); } catch { st = null; }
      if (!st || st.n !== readCookies(request)[STATE_COOKIE]) return fail('La connexion a expiré. Réessayez.');
      const result = await redeem({ code: request.query.get('code'), redirectUri: callbackUrl(request), connect: !!st.c });
      if (!result.oid) return fail('Compte Microsoft non reconnu.');
      const user = await recordLogin(result);
      forgetCachedUser(user.id);
      return redirect(home(request, st.c ? (result.connected ? '?connected=1' : '?auth_error=' + encodeURIComponent('Teams et Outlook n\'ont pas été autorisés.')) : ''),
        [await sessionCookie(user), cookie(STATE_COOKIE, '', 0)]);
    } catch (e) {
      context.error(e);
      return fail('La connexion Microsoft a échoué. Réessayez dans un instant.');
    }
  },
});

// POST /api/auth/logout
app.http('authLogout', {
  methods: ['POST'], authLevel: 'anonymous', route: 'auth/logout',
  handler: handler(async () => json(200, { ok: true }, { cookies: [clearedSession()] })),
});

// GET /api/me : la personne connectée (401 : le site affiche la démo).
app.http('me', {
  methods: ['GET'], authLevel: 'anonymous', route: 'me',
  handler: handler(async (request) => json(200, { user: publicUser(await requireUser(request)) })),
});

// POST /api/me/disconnect : retire l'accès à Teams et Outlook et efface les jetons.
app.http('meDisconnect', {
  methods: ['POST'], authLevel: 'anonymous', route: 'me/disconnect',
  handler: handler(async (request) => {
    const user = await requireUser(request);
    await forgetTokens(user.id);
    forgetCachedUser(user.id);
    const u = await patchUser(user.id, (x) => { x.connected = false; });
    return json(200, { user: publicUser(u) });
  }),
});

// PUT /api/me/status : « aujourd'hui je suis au bureau / en télétravail / absent » (ou null pour effacer).
app.http('meStatus', {
  methods: ['PUT'], authLevel: 'anonymous', route: 'me/status',
  handler: handler(async (request) => {
    const user = await requireUser(request);
    const loc = cleanStatus(await readJson(request));
    const date = nowIn(cfg.ianaTz).date;
    const u = await patchUser(user.id, (x) => { if (loc) x.status = { date, loc }; else delete x.status; });
    return json(200, { user: publicUser(u) });
  }),
});

