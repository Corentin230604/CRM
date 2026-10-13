import { HttpError } from './http.js';

const ROOM_TYPES = new Set(['open', 'meeting', 'office', 'break', 'kitchen', 'wc', 'phone', 'reception', 'storage', 'corridor']);
const ITEM_TYPES = new Set(['desk', 'meeting', 'round', 'sofa', 'plant', 'pingpong', 'counter', 'wc', 'sink', 'shower', 'kitchen', 'fridge', 'printer', 'lockers', 'whiteboard', 'tv', 'booth', 'wall']);
const SIDES = new Set(['n', 's', 'e', 'w']);
const MAX_BG = 3_500_000; // plan de fond : image JPEG en data URL, réduite côté navigateur

const str = (v, max = 120) => (typeof v === 'string' ? v.slice(0, max) : '');
const num = (v, min, max, def = 0) => {
  const n = Number(v);
  return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : def;
};
const id = (v) => {
  const s = str(v, 64);
  if (!/^[A-Za-z0-9_-]{1,64}$/.test(s)) throw new HttpError(400, 'Identifiant invalide dans le plan.');
  return s;
};

/** Nettoie le plan envoyé par l'éditeur : seules les propriétés connues sont conservées. */
export function cleanLayout(body) {
  if (!body || typeof body !== 'object') throw new HttpError(400, 'Plan manquant.');
  const rooms = Array.isArray(body.rooms) ? body.rooms : [];
  const items = Array.isArray(body.items) ? body.items : [];
  if (rooms.length > 300 || items.length > 3000) throw new HttpError(400, 'Plan trop grand (300 pièces et 3 000 éléments au maximum).');
  const floor = { w: num(body.floor?.w, 6, 200, 36), d: num(body.floor?.d, 6, 200, 23) };
  return {
    org: str(body.org, 80),
    floor,
    rooms: rooms.map((r) => {
      if (!ROOM_TYPES.has(r.type)) throw new HttpError(400, `Type de pièce inconnu : ${str(r.type, 20)}`);
      return {
        id: id(r.id),
        name: str(r.name, 80) || 'Pièce',
        type: r.type,
        x: num(r.x, -50, 250), z: num(r.z, -50, 250), w: num(r.w, 1, 200, 4), d: num(r.d, 1, 200, 4),
        ...(Array.isArray(r.doors) ? { doors: r.doors.filter((d) => SIDES.has(d?.side)).slice(0, 12).map((d) => ({ side: d.side, at: num(d.at, 0, 1, 0.5) })) } : {}),
        ...(r.type === 'meeting' ? {
          capacity: Math.round(num(r.capacity, 1, 200, 6)),
          mailbox: str(r.mailbox, 254).trim().toLowerCase(),
          outlookName: str(r.outlookName, 120),
        } : {}),
      };
    }),
    items: items.map((it) => {
      if (!ITEM_TYPES.has(it.type)) throw new HttpError(400, `Type de mobilier inconnu : ${str(it.type, 20)}`);
      const rot = [0, 90, 180, 270].includes(Number(it.rot)) ? Number(it.rot) : 0;
      return {
        id: id(it.id),
        type: it.type,
        x: num(it.x, -50, 250), z: num(it.z, -50, 250), rot,
        ...(it.type === 'desk' ? { user: it.user ? id(it.user) : null } : {}),
        ...(it.type === 'meeting' ? { seats: Math.round(num(it.seats, 2, 30, 6)) } : {}),
        ...(it.type === 'wall' ? { x2: num(it.x2, -50, 250), z2: num(it.z2, -50, 250), glass: it.glass === true } : {}),
      };
    }),
    settings: {
      agenda: body.settings?.agenda === 'subject' ? 'subject' : 'busy',
      guess: body.settings?.guess === 'probable' ? 'probable' : 'all',
    },
    ...(cleanBackground(body.bg) ? { bg: cleanBackground(body.bg) } : {}),
  };
}

/** Plan de fond importé (image du plan d'évacuation ou d'architecte) pour décalquer les pièces. */
function cleanBackground(bg) {
  if (!bg || typeof bg.src !== 'string') return null;
  if (!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(bg.src)) throw new HttpError(400, 'Plan de fond invalide : utilisez une image JPEG ou PNG.');
  if (bg.src.length > MAX_BG) throw new HttpError(413, 'Plan de fond trop lourd (3,5 Mo au maximum).');
  return { src: bg.src, ar: num(bg.ar, 0.05, 20, 1), x: num(bg.x, -100, 300), z: num(bg.z, -100, 300), w: num(bg.w, 1, 400, 36), op: num(bg.op, 0.05, 1, 0.6) };
}

/** Réservation de salle faite dans Étage. */
export function cleanBooking(body) {
  const date = str(body?.date, 10);
  const s = str(body?.s, 5);
  const e = str(body?.e, 5);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new HttpError(400, 'Date invalide.');
  if (!/^\d{2}:\d{2}$/.test(s) || !/^\d{2}:\d{2}$/.test(e) || s >= e) throw new HttpError(400, 'Horaires invalides : la fin doit être après le début.');
  const people = [...new Set((Array.isArray(body?.people) ? body.people : []).filter((x) => typeof x === 'string').map(id))].slice(0, 60);
  return { roomId: id(body?.roomId), date, s, e, subject: str(body?.subject, 200).trim() || 'Réunion', people };
}

/** Fiche d'une personne modifiée par un administrateur. */
export function cleanUserPatch(body) {
  const out = {};
  if (typeof body?.name === 'string') out.name = str(body.name, 80).trim() || undefined;
  if (typeof body?.title === 'string') out.title = str(body.title, 80).trim();
  if (typeof body?.team === 'string') out.team = str(body.team, 60).trim() || 'Sans équipe';
  if (typeof body?.email === 'string') {
    const e = str(body.email, 254).trim().toLowerCase();
    if (e && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)) throw new HttpError(400, 'Adresse e-mail invalide.');
    out.email = e;
  }
  if (body?.role !== undefined) {
    if (!['admin', 'user'].includes(body.role)) throw new HttpError(400, 'Rôle inconnu.');
    out.role = body.role;
  }
  for (const k of Object.keys(out)) if (out[k] === undefined) delete out[k];
  return out;
}

/** Présence déclarée pour aujourd'hui par la personne elle-même. */
export function cleanStatus(body) {
  const loc = body?.loc ?? null;
  if (loc !== null && !['office', 'remote', 'away'].includes(loc)) throw new HttpError(400, 'Présence inconnue.');
  return loc;
}
