// Personnes d'Étage : créées à leur première connexion, ou à l'avance par un administrateur.
import { cfg } from './config.js';
import { HttpError } from './http.js';
import { colorFor } from './mapping.js';
import { emptyLayout, readJson, updateJson } from './store.js';

const FILE = 'users.json';
const EMPTY = { users: [] };

/** Ce qui est transmis au navigateur (jamais les dates techniques ni les jetons). */
export const publicUser = (u) => ({
  id: u.id,
  name: u.name,
  email: u.email || '',
  title: u.title || '',
  team: u.team || 'Sans équipe',
  color: u.color,
  role: u.role || 'user',
  connected: !!u.connected,
  ...(u.status ? { status: u.status } : {}),
});

export async function listUsers() {
  return (await readJson(FILE, EMPTY)).data.users;
}

export async function getUser(id) {
  return (await listUsers()).find((u) => u.id === id) || null;
}

export function updateUsers(mutate) {
  return updateJson(FILE, EMPTY, mutate);
}

export function patchUser(id, fn) {
  return updateUsers((d) => {
    const u = d.users.find((x) => x.id === id);
    if (!u) throw new HttpError(404, 'Personne introuvable.');
    fn(u, d);
    return { ...u };
  });
}

/**
 * Enregistre une connexion Microsoft. Si un administrateur avait créé la fiche à l'avance
 * (même e-mail), la personne la récupère, avec son poste attribué.
 */
export async function recordLogin({ oid, name, email, connected }) {
  let claimed = null;
  const now = new Date().toISOString();
  const user = await updateUsers((d) => {
    let u = d.users.find((x) => x.id === oid);
    if (!u && email) {
      const pre = d.users.find((x) => x.id.startsWith('m-') && x.email === email);
      if (pre) { claimed = pre.id; pre.id = oid; u = pre; }
    }
    if (!u) {
      u = { id: oid, name, email, title: '', team: 'Sans équipe', color: colorFor(oid), role: 'user', createdAt: now };
      d.users.push(u);
    }
    if (name) u.name = name;
    if (email) u.email = email;
    u.lastLogin = now;
    if (connected) { u.connected = true; u.connectedAt = now; }
    if (cfg.admins.includes(u.email) || !d.users.some((x) => x.role === 'admin')) u.role = 'admin';
    return { ...u };
  });
  if (claimed) {
    await updateJson('layout.json', emptyLayout(), (l) => {
      for (const it of l.items || []) if (it.user === claimed) it.user = oid;
    });
  }
  return user;
}
