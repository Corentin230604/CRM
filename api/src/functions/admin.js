import { app } from '@azure/functions';
import { randomBytes } from 'node:crypto';
import { cfg } from '../lib/config.js';
import { graph } from '../lib/graph.js';
import { HttpError, handler, json, readJson } from '../lib/http.js';
import { colorFor, mapPresence } from '../lib/mapping.js';
import { listUsers, publicUser, updateUsers } from '../lib/people.js';
import { requireAdmin, requireUser } from '../lib/session.js';
import { emptyLayout, readLayout, updateJson } from '../lib/store.js';
import { forgetTokens, graphToken } from '../lib/tokens.js';
import { cleanUserPatch } from '../lib/validate.js';

// POST /api/users : un administrateur ajoute une personne avant sa première connexion.
app.http('userCreate', {
  methods: ['POST'], authLevel: 'anonymous', route: 'users',
  handler: handler(async (request) => {
    requireAdmin(await requireUser(request));
    const patch = cleanUserPatch(await readJson(request));
    if (!patch.name) throw new HttpError(400, 'Indiquez au moins un nom.');
    const id = `m-${randomBytes(6).toString('hex')}`;
    const user = await updateUsers((d) => {
      if (patch.email && d.users.some((u) => u.email === patch.email)) throw new HttpError(409, 'Cette adresse e-mail est déjà utilisée.');
      const u = { id, title: '', team: 'Sans équipe', role: 'user', color: colorFor(id), createdAt: new Date().toISOString(), ...patch };
      d.users.push(u);
      return { ...u };
    });
    return json(201, { user: publicUser(user) });
  }),
});

// PUT /api/users/{id} : modifier nom, fonction, équipe, e-mail ou rôle.
app.http('userUpdate', {
  methods: ['PUT'], authLevel: 'anonymous', route: 'users/{id}',
  handler: handler(async (request) => {
    const me = await requireUser(request);
    requireAdmin(me);
    const patch = cleanUserPatch(await readJson(request));
    const id = request.params.id;
    const user = await updateUsers((d) => {
      const u = d.users.find((x) => x.id === id);
      if (!u) throw new HttpError(404, 'Personne introuvable.');
      if (patch.role === 'user' && u.role === 'admin' && d.users.filter((x) => x.role === 'admin').length === 1) {
        throw new HttpError(400, 'Il faut au moins un administrateur.');
      }
      if (patch.email && d.users.some((x) => x.id !== id && x.email === patch.email)) throw new HttpError(409, 'Cette adresse e-mail est déjà utilisée.');
      Object.assign(u, patch);
      return { ...u };
    });
    return json(200, { user: publicUser(user) });
  }),
});

// DELETE /api/users/{id} : retirer une personne (et ses jetons, et son poste).
app.http('userDelete', {
  methods: ['DELETE'], authLevel: 'anonymous', route: 'users/{id}',
  handler: handler(async (request) => {
    const me = await requireUser(request);
    requireAdmin(me);
    const id = request.params.id;
    if (id === me.id) throw new HttpError(400, 'Vous ne pouvez pas retirer votre propre compte.');
    await updateUsers((d) => { d.users = d.users.filter((u) => u.id !== id); });
    await updateJson('layout.json', emptyLayout(), (l) => { for (const it of l.items || []) if (it.user === id) it.user = null; });
    await forgetTokens(id);
    return json(200, { ok: true });
  }),
});

// GET /api/health : diagnostic pour l'onglet « Connexions ».
app.http('health', {
  methods: ['GET'], authLevel: 'anonymous', route: 'health',
  handler: handler(async (request) => {
    const me = await requireUser(request);
    requireAdmin(me);
    const checks = [];
    const run = async (name, fn) => {
      try { checks.push({ name, ok: true, detail: (await fn()) || 'OK' }); } catch (err) { checks.push({ name, ok: false, detail: err.message }); }
    };
    await run('Stockage', async () => { const { layout } = await readLayout(); return `${layout.rooms.length} pièces, ${layout.items.length} éléments`; });
    await run('Personnes', async () => { const u = await listUsers(); return `${u.length} personnes, dont ${u.filter((x) => x.connected).length} avec Teams et Outlook connectés`; });
    await run('Application Microsoft', async () => `ID ${cfg.clientId.slice(0, 8)}…, comptes acceptés : ${cfg.tenant === 'organizations' ? 'tout compte professionnel' : 'votre organisation'}`);
    if (me.connected) {
      await run('Votre Teams et Outlook', async () => {
        const token = await graphToken(me.id);
        if (!token) throw new Error('Accès expiré ou retiré : reconnectez Teams et Outlook.');
        const p = mapPresence(await graph('/me/presence', { token }));
        return `Statut lu : ${p.st}${p.wl !== 'unspecified' ? `, lieu : ${p.wl}` : ', lieu de travail non déclaré'}`;
      });
    } else {
      checks.push({ name: 'Votre Teams et Outlook', ok: false, detail: 'Non connectés : utilisez « Connecter Teams et Outlook ».' });
    }
    return json(200, { checks });
  }),
});

