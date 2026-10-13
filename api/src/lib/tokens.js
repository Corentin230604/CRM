// Connexion Microsoft et jetons de chaque utilisateur.
// Chacun autorise Étage à lire SON statut Teams et SON agenda (autorisations déléguées).
// Les jetons sont chiffrés (AES-256-GCM) avant d'être stockés, un fichier par personne.
import { ConfidentialClientApplication } from '@azure/msal-node';
import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto';
import { cfg, key } from './config.js';
import { deleteBlob, readBlob, writeBlob } from './store.js';

/** Connexion simple : identité seulement. */
export const LOGIN_SCOPES = ['openid', 'profile', 'offline_access', 'User.Read'];
/** « Connecter Teams et Outlook » : statut Teams + lecture de l'agenda. */
export const CONNECT_SCOPES = ['openid', 'profile', 'offline_access', 'User.Read', 'Presence.Read', 'Calendars.Read'];
const GRAPH_SCOPES = ['Presence.Read', 'Calendars.Read'];

export function encrypt(text) {
  const iv = randomBytes(12);
  const c = createCipheriv('aes-256-gcm', key('tokens'), iv);
  const data = Buffer.concat([c.update(text, 'utf8'), c.final()]);
  return Buffer.concat([iv, c.getAuthTag(), data]).toString('base64');
}

export function decrypt(b64) {
  const buf = Buffer.from(b64, 'base64');
  const d = createDecipheriv('aes-256-gcm', key('tokens'), buf.subarray(0, 12));
  d.setAuthTag(buf.subarray(12, 28));
  return Buffer.concat([d.update(buf.subarray(28)), d.final()]).toString('utf8');
}

const blobName = (oid) => `tokens/${oid}.enc`;

function client(cachePlugin) {
  return new ConfidentialClientApplication({
    auth: { clientId: cfg.clientId, clientSecret: cfg.clientSecret, authority: `https://login.microsoftonline.com/${cfg.tenant}` },
    ...(cachePlugin ? { cache: { cachePlugin } } : {}),
  });
}

/** Cache de jetons MSAL propre à une personne, lu et écrit chiffré dans le stockage. */
const pluginFor = (oid) => ({
  async beforeCacheAccess(ctx) {
    const raw = await readBlob(blobName(oid));
    if (raw) ctx.tokenCache.deserialize(decrypt(raw));
  },
  async afterCacheAccess(ctx) {
    if (ctx.cacheHasChanged) await writeBlob(blobName(oid), encrypt(ctx.tokenCache.serialize()));
  },
});

export function authUrl({ redirectUri, state, connect, loginHint }) {
  return client().getAuthCodeUrl({
    redirectUri,
    state,
    scopes: connect ? CONNECT_SCOPES : LOGIN_SCOPES,
    prompt: connect ? undefined : 'select_account',
    loginHint,
    responseMode: 'query',
  });
}

const hasGraphScopes = (scopes) => GRAPH_SCOPES.every((s) => scopes.some((g) => g.toLowerCase().endsWith(s.toLowerCase())));

/** Échange le code de retour de Microsoft contre l'identité (et, si autorisé, les jetons Teams/Outlook). */
export async function redeem({ code, redirectUri, connect }) {
  const cca = client();
  const r = await cca.acquireTokenByCode({ code, redirectUri, scopes: connect ? CONNECT_SCOPES : LOGIN_SCOPES });
  const claims = r.idTokenClaims || {};
  const oid = claims.oid || r.account?.localAccountId;
  // Microsoft renvoie toutes les autorisations déjà accordées : une reconnexion simple garde Teams relié.
  const connected = hasGraphScopes(r.scopes || []);
  if (connected) await writeBlob(blobName(oid), encrypt(cca.getTokenCache().serialize()));
  return {
    oid,
    name: claims.name || r.account?.name || '',
    email: String(claims.preferred_username || claims.email || r.account?.username || '').toLowerCase(),
    connected,
  };
}

/** Jeton Microsoft Graph d'une personne connectée, renouvelé automatiquement ; null si l'accès a été retiré. */
export async function graphToken(oid) {
  const cca = client(pluginFor(oid));
  const accounts = await cca.getTokenCache().getAllAccounts();
  if (!accounts.length) return null;
  try {
    return (await cca.acquireTokenSilent({ account: accounts[0], scopes: GRAPH_SCOPES })).accessToken;
  } catch {
    return null;
  }
}

export const forgetTokens = (oid) => deleteBlob(blobName(oid));
