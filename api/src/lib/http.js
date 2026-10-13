export class HttpError extends Error {
  constructor(status, message, extra) {
    super(message);
    this.status = status;
    this.extra = extra;
  }
}

export const json = (status, body, extra = {}) => ({
  status,
  jsonBody: body,
  headers: { 'Cache-Control': 'no-store', ...(extra.headers || {}) },
  ...(extra.cookies ? { cookies: extra.cookies } : {}),
});

export const redirect = (location, cookies) => ({
  status: 302,
  headers: { Location: location, 'Cache-Control': 'no-store' },
  ...(cookies ? { cookies } : {}),
});

/**
 * Enveloppe chaque fonction : erreurs lisibles en français, jamais de trace technique côté client.
 * Les requêtes qui modifient des données doivent porter l'en-tête « x-etage: 1 » : un site tiers
 * ne peut pas l'ajouter sans autorisation CORS, ce qui protège la session (cookie) contre le CSRF.
 */
export function handler(fn) {
  return async (request, context) => {
    try {
      if (request.method !== 'GET' && request.headers.get('x-etage') !== '1') throw new HttpError(403, 'Requête refusée.');
      return await fn(request, context);
    } catch (err) {
      const status = err.status && err.status >= 400 && err.status < 600 ? err.status : 500;
      if (status >= 500) context.error(err);
      else context.warn(`${status} ${err.message}`);
      const message = status >= 500 && !(err instanceof HttpError) && !err.expose
        ? 'Erreur du serveur. Réessayez dans un instant ; si le problème persiste, consultez les journaux Azure.'
        : err.message;
      return json(status, { error: message, ...(err.extra || {}) });
    }
  };
}

export async function readJson(request, maxBytes = 256 * 1024) {
  const text = await request.text();
  if (text.length > maxBytes) throw new HttpError(413, 'Requête trop volumineuse.');
  try {
    return text ? JSON.parse(text) : {};
  } catch {
    throw new HttpError(400, 'Le corps de la requête n\'est pas un JSON valide.');
  }
}

/** Adresse publique du site, pour l'URL de retour de la connexion Microsoft. */
export function origin(request, configured) {
  if (configured) return configured;
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host') || 'localhost';
  const local = /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host);
  return `${local ? 'http' : 'https'}://${host}`;
}
