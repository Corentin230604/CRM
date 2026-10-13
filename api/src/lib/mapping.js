// Fonctions pures : traduisent les réponses Microsoft Graph dans le modèle d'Étage.
// Testées dans test/mapping.test.js.

const MEETING_ACTIVITIES = new Set(['InACall', 'InAConferenceCall', 'InAMeeting', 'Presenting']);

/**
 * Présence Teams → statut Étage.
 * Statuts : available, busy, meeting, dnd, away, ooo, offline.
 * Lieu : office, remote, away (congé), unknown (non renseigné), none (hors ligne).
 */
export function mapPresence(p) {
  if (!p) return { st: 'offline', loc: 'none' };
  const availability = p.availability || 'PresenceUnknown';
  const activity = p.activity || '';
  let st;
  if (activity === 'OutOfOffice' || p.outOfOfficeSettings?.isOutOfOffice) st = 'ooo';
  else if (MEETING_ACTIVITIES.has(activity) || availability === 'InAMeeting' || availability === 'InACall') st = 'meeting';
  else if (availability === 'DoNotDisturb' || availability === 'Presenting' || availability === 'Focusing' || activity === 'Focusing') st = 'dnd';
  else if (availability === 'Busy' || availability === 'BusyIdle') st = 'busy';
  else if (availability === 'Away' || availability === 'BeRightBack' || availability === 'AvailableIdle') st = 'away';
  else if (availability === 'Available') st = 'available';
  else st = 'offline';

  const wl = p.workLocation?.workLocationType;
  let loc;
  if (st === 'ooo' || wl === 'timeOff') loc = 'away';
  else if (st === 'offline') loc = wl === 'office' ? 'office-offline' : 'none';
  else if (wl === 'office') loc = 'office';
  else if (wl === 'remote') loc = 'remote';
  else loc = 'unknown';
  if (loc === 'office-offline') loc = 'none';
  return { st, loc, wl: wl || 'unspecified', source: p.workLocation?.source || 'none' };
}

/** "2026-10-14T09:30:00.0000000" (heure locale grâce à l'en-tête Prefer) → { date, min } */
export function parseLocal(dt) {
  const m = /^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})/.exec(dt || '');
  if (!m) return null;
  return { date: m[1], min: Number(m[2]) * 60 + Number(m[3]) };
}

export const pad = (n) => String(n).padStart(2, '0');
export const fmtMin = (m) => `${pad(Math.floor(m / 60))}:${pad(m % 60)}`;

export function addDays(key, n) {
  const [y, mo, d] = key.split('-').map(Number);
  const dt = new Date(Date.UTC(y, mo - 1, d + n));
  return `${dt.getUTCFullYear()}-${pad(dt.getUTCMonth() + 1)}-${pad(dt.getUTCDate())}`;
}

export function daysBetween(start, end) {
  const out = [];
  for (let d = start; d <= end && out.length < 62; d = addDays(d, 1)) out.push(d);
  return out;
}

/** Découpe un créneau (éventuellement sur plusieurs jours) en morceaux par jour : [{date, s, e}] en minutes. */
export function splitByDay(startDt, endDt) {
  const a = parseLocal(startDt);
  const b = parseLocal(endDt);
  if (!a || !b) return [];
  const out = [];
  for (let d = a.date; d <= b.date && out.length < 62; d = addDays(d, 1)) {
    const s = d === a.date ? a.min : 0;
    const e = d === b.date ? b.min : 1440;
    if (e > s) out.push({ date: d, s, e });
  }
  return out;
}

const norm = (s) => String(s || '').trim().toLowerCase();

/**
 * Retrouve la salle Étage correspondant au lieu d'un événement Outlook.
 * rooms : [{ id, mailbox, outlookName, name }]
 */
export function matchRoom(location, rooms) {
  const l = norm(location);
  if (!l) return null;
  for (const r of rooms) {
    if (r.mailbox && l.includes(norm(r.mailbox))) return r.id;
    if (r.outlookName && (l === norm(r.outlookName) || l.split(/;\s*/).includes(norm(r.outlookName)))) return r.id;
    if (r.name && l === norm(r.name)) return r.id;
  }
  return null;
}

const nameNorm = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[^a-z0-9@ ]+/g, ' ').replace(/\s+/g, ' ').trim();

/**
 * Personnes dont le nom complet apparaît dans un texte, par exemple l'objet d'une réservation de salle :
 * par défaut, Exchange remplace l'objet par le nom de l'organisateur (« Claire Morel »).
 * Même algorithme que web/src/locate.js.
 */
export function matchNames(text, people) {
  const t = ` ${nameNorm(text)} `;
  if (t.trim().length < 4) return [];
  const out = [];
  for (const p of people) {
    const n = nameNorm(p.name);
    if (!n || !n.includes(' ')) continue;
    const parts = n.split(' ');
    const rev = `${parts.slice(1).join(' ')} ${parts[0]}`;
    if (t.includes(` ${n} `) || t.includes(` ${rev} `)) out.push(p.id);
  }
  return out;
}

/**
 * Événements Outlook d'une personne connectée (calendarView, heures locales grâce à l'en-tête Prefer)
 * → éléments normalisés : salle reconnue, personnes d'Étage présentes (organisateur et invités).
 */
export function calendarItems(evs, { rooms, usersByEmail, ownerId }) {
  const out = [];
  const mail = (v) => String(v || '').trim().toLowerCase();
  for (const ev of evs || []) {
    if (ev.isCancelled || ev.showAs === 'free' || ev.showAs === 'workingElsewhere') continue;
    const resources = [
      ...(ev.attendees || []).filter((a) => a.type === 'resource').map((a) => mail(a.emailAddress?.address)),
      ...(ev.locations || []).map((l) => mail(l.locationEmailAddress)),
      mail(ev.location?.locationEmailAddress),
    ].filter(Boolean);
    let room = rooms.find((r) => r.mailbox && resources.includes(r.mailbox))?.id || null;
    if (!room) room = matchRoom(ev.location?.displayName, rooms) || (ev.locations || []).map((l) => matchRoom(l.displayName, rooms)).find(Boolean) || null;
    const people = new Set([ownerId]);
    for (const a of ev.attendees || []) {
      if (a.type === 'resource' || a.status?.response === 'declined') continue;
      const u = usersByEmail.get(mail(a.emailAddress?.address));
      if (u) people.add(u.id);
    }
    const org = usersByEmail.get(mail(ev.organizer?.emailAddress?.address));
    if (org) people.add(org.id);
    out.push({
      start: ev.start?.dateTime, end: ev.end?.dateTime, subject: ev.subject || '',
      private: ev.sensitivity === 'private' || ev.sensitivity === 'confidential',
      oof: ev.showAs === 'oof', room, location: ev.location?.displayName || '', people: [...people], owner: ownerId,
    });
  }
  return out;
}

const titleOf = (it, show, fallback) => (it.private ? 'Privé' : (show && it.subject ? it.subject : fallback));

/** Agenda du jour d'une personne connectée. */
export function ownEvents(items, date, show) {
  const out = [];
  for (const it of items) {
    for (const p of splitByDay(it.start, it.end)) {
      if (p.date !== date) continue;
      const k = it.oof ? 'ooo' : (it.room || it.location ? 'meeting' : 'busy');
      out.push({ s: fmtMin(p.s), e: fmtMin(p.e), t: titleOf(it, show, it.oof ? 'Absent' : 'Occupé'), k, room: it.room });
    }
  }
  return out.sort((a, b) => a.s.localeCompare(b.s));
}

/**
 * Réunions vues dans l'agenda des personnes connectées, pour leurs invités :
 * « Hugo n'a pas connecté Outlook, mais il est invité à la réunion de Claire en salle Fourvière ».
 */
export function derivedEvents(items, date, show, names) {
  const out = {};
  for (const it of items) {
    if (it.oof || (!it.room && !it.location)) continue;
    for (const p of splitByDay(it.start, it.end)) {
      if (p.date !== date) continue;
      for (const id of it.people) {
        if (id === it.owner) continue;
        const list = (out[id] ||= []);
        const s = fmtMin(p.s), e = fmtMin(p.e);
        if (list.some((x) => x.s === s && x.e === e && x.room === it.room)) continue;
        list.push({ s, e, t: titleOf(it, show, 'Réunion'), k: 'meeting', room: it.room, via: names[it.owner] || 'un collègue' });
      }
    }
  }
  for (const id of Object.keys(out)) out[id].sort((a, b) => a.s.localeCompare(b.s));
  return out;
}

/** Indices de présence dans les salles pour une journée : [{ room, s, e, who: [ids] }]. */
export function hintsFromItems(items, date) {
  const map = new Map();
  for (const it of items) {
    if (!it.room) continue;
    for (const p of splitByDay(it.start, it.end)) {
      if (p.date !== date) continue;
      const key = `${it.room}|${p.s}|${p.e}`;
      const h = map.get(key) || { room: it.room, s: fmtMin(p.s), e: fmtMin(p.e), who: [] };
      for (const id of it.people) if (!h.who.includes(id)) h.who.push(id);
      map.set(key, h);
    }
  }
  return [...map.values()];
}

/** Occupation des salles, jour par jour, déduite des agendas connectés : { roomId: { date: [...] } }. */
export function roomDays(items, dates, show, rooms) {
  const out = Object.fromEntries(rooms.map((r) => [r.id, Object.fromEntries(dates.map((d) => [d, []]))]));
  for (const it of items) {
    if (!it.room || !out[it.room]) continue;
    for (const p of splitByDay(it.start, it.end)) {
      const day = out[it.room][p.date];
      if (!day) continue;
      const s = fmtMin(p.s), e = fmtMin(p.e);
      const hit = day.find((b) => b.s === s && b.e === e);
      if (hit) { for (const id of it.people) if (!hit.people.includes(id)) hit.people.push(id); continue; }
      day.push({ id: `o-${it.room}-${p.date}-${p.s}-${p.e}`, s, e, t: titleOf(it, show, 'Réservée'), people: [...it.people], src: 'outlook' });
    }
  }
  for (const r of Object.values(out)) for (const d of Object.values(r)) d.sort((a, b) => a.s.localeCompare(b.s));
  return out;
}

/** Vrai si [s1,e1) et [s2,e2) se chevauchent (minutes). */
export const overlaps = (s1, e1, s2, e2) => s1 < e2 && e1 > s2;

export const toMin = (hhmm) => {
  const [h, m] = String(hhmm).split(':').map(Number);
  return h * 60 + (m || 0);
};

/** Couleur stable par personne, à partir de son identifiant. */
export function colorFor(id) {
  const palette = ['#3D5A80', '#C0603B', '#6A4C93', '#2A9D8F', '#E07A5F', '#577590', '#8D6A9F', '#4D908E', '#B5651D', '#43AA8B', '#C44569', '#386641', '#9C6644', '#264653', '#A05195', '#6D597A'];
  let h = 0;
  for (const c of String(id)) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return palette[h % palette.length];
}

/** Date et heure courantes dans le fuseau de l'entreprise. */
export function nowIn(tz, at = new Date()) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', {
    timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(at).map((p) => [p.type, p.value]));
  return { date: `${parts.year}-${parts.month}-${parts.day}`, min: Number(parts.hour) * 60 + Number(parts.minute) };
}
