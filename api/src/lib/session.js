// Session : jeton signé dans un cookie HttpOnly. Aucune donnée Microsoft n'est exposée au navigateur.
import { SignJWT, jwtVerify } from 'jose';
import { key } from './config.js';
import { HttpError } from './http.js';
import { getUser } from './people.js';

export const SESSION_COOKIE = 'etage_session';
export const STATE_COOKIE = 'etage_oauth';
const MAX_AGE = 14 * 24 * 3600;

export function readCookies(request) {
  const out = {};
  for (const part of (request.headers.get('cookie') || '').split(/;\s*/)) {
    const i = part.indexOf('=');
    if (i > 0) out[part.slice(0, i)] = decodeURIComponent(part.slice(i + 1));
  }
  return out;
}

export const cookie = (name, value, maxAge) => ({ name, value, path: '/', httpOnly: true, secure: true, sameSite: 'Lax', maxAge });

export async function sessionCookie(user) {
  const token = await new SignJWT({ name: user.name })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(user.id)
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE}s`)
    .sign(key('session'));
  return cookie(SESSION_COOKIE, token, MAX_AGE);
}

export const clearedSession = () => cookie(SESSION_COOKIE, '', 0);

export async function readSession(request) {
  const token = readCookies(request)[SESSION_COOKIE];
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, key('session'), { algorithms: ['HS256'] });
    return payload.sub || null;
  } catch {
    return null;
  }
}

/** Utilisateur connecté, ou erreur 401 (le site bascule alors sur la démo). */
export async function requireUser(request) {
  const id = await readSession(request);
  if (!id) throw new HttpError(401, 'Connexion requise.');
  const user = await getUser(id);
  if (!user) throw new HttpError(401, 'Compte introuvable : reconnectez-vous.');
  return user;
}

export function requireAdmin(user) {
  if (user.role !== 'admin') throw new HttpError(403, 'Action réservée aux administrateurs d\'Étage.');
}
