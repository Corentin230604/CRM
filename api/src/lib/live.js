// Vue d'ensemble « en direct » : assemble les données des personnes qui ont connecté Teams et Outlook,
// les présences déclarées à la main, et les réservations faites dans Étage.
import { cached, invalidate } from './cache.js';
import { cfg } from './config.js';
import { graph, graphAll, pool } from './graph.js';
import {
  addDays, calendarItems, daysBetween, derivedEvents, hintsFromItems, mapPresence, nowIn, ownEvents, roomDays,
} from './mapping.js';
import { listUsers, updateUsers } from './people.js';
import { readJson, readLayout } from './store.js';
import { graphToken } from './tokens.js';

const LOST = { lost: true };

function presenceOf(u) {
  return cached(`pres:${u.id}`, 60_000, async () => {
    const token = await graphToken(u.id);
    return token ? graph('/me/presence', { token }) : LOST;
  });
}

function calendarOf(u, start, endExcl) {
  return cached(`cal:${u.id}:${start}:${endExcl}`, 3 * 60_000, async () => {
    const token = await graphToken(u.id);
    if (!token) return LOST;
    // Fenêtre élargie d'un jour de chaque côté : les heures sont ensuite lues en heure locale.
    const from = addDays(start, -1), to = addDays(endExcl, 1);
    return {
      events: await graphAll(
        `/me/calendarView?startDateTime=${from}T00:00:00Z&endDateTime=${to}T00:00:00Z&$select=subject,start,end,location,locations,attendees,organizer,sensitivity,showAs,isCancelled&$top=250`,
        { token, headers: { Prefer: `outlook.timezone="${cfg.windowsTz}"` } },
      ),
    };
  });
}

/** Les personnes dont l'accès a expiré ou a été retiré repassent en « non connectées ». */
async function markLost(ids) {
  if (!ids.length) return;
  await updateUsers((d) => { for (const u of d.users) if (ids.includes(u.id)) u.connected = false; }).catch(() => {});
}

async function gather(start, endExcl) {
  const users = await listUsers();
  const connected = users.filter((u) => u.connected);
  const { layout } = await readLayout();
  const rooms = layout.rooms.filter((r) => r.type === 'meeting');
  const usersByEmail = new Map(users.filter((u) => u.email).map((u) => [u.email, u]));
  const lost = [];
  const items = [];
  await pool(connected, 4, async (u) => {
    try {
      const c = await calendarOf(u, start, endExcl);
      if (c.lost) lost.push(u.id);
      else items.push(...calendarItems(c.events, { rooms, usersByEmail, ownerId: u.id }));
    } catch { /* agenda momentanément illisible : ignoré */ }
  });
  await markLost(lost);
  return { users, connected: connected.filter((u) => !lost.includes(u.id)), layout, rooms, items };
}

async function bookings() {
  return (await readJson('bookings.json', { bookings: [] })).data.bookings;
}

/** Présence, agenda du jour et indices de salle de chaque personne. */
export async function today() {
  const now = nowIn(cfg.ianaTz);
  const date = now.date;
  const { users, connected, layout, items } = await gather(date, addDays(date, 1));
  const show = layout.settings?.agenda === 'subject';
  const names = Object.fromEntries(users.map((u) => [u.id, String(u.name || '').split(' ')[0]]));

  const pres = new Map();
  const lost = [];
  await pool(connected, 6, async (u) => {
    try {
      const p = await presenceOf(u);
      if (p.lost) lost.push(u.id); else pres.set(u.id, p);
    } catch { /* statut momentanément illisible */ }
  });
  await markLost(lost);

  const presence = {};
  const events = {};
  for (const u of users) {
    const declared = u.status && u.status.date === date ? u.status.loc : null;
    const p = pres.get(u.id);
    if (p) {
      const m = mapPresence(p);
      presence[u.id] = { st: m.st, loc: declared || m.loc };
    } else {
      presence[u.id] = { st: 'unknown', loc: declared || 'unknown' };
    }
    if (pres.has(u.id) || connected.some((c) => c.id === u.id)) events[u.id] = ownEvents(items.filter((i) => i.owner === u.id), date, show);
  }
  for (const [id, evs] of Object.entries(derivedEvents(items, date, show, names))) if (!events[id]) events[id] = evs;

  const hints = hintsFromItems(items, date);
  for (const b of (await bookings()).filter((x) => x.date === date)) {
    hints.push({ room: b.room, s: b.s, e: b.e, who: [...b.people] });
    for (const id of b.people) {
      const list = (events[id] ||= []);
      if (!list.some((e) => e.s === b.s && e.room === b.room)) list.push({ s: b.s, e: b.e, t: b.t, k: 'meeting', room: b.room, ...(id !== b.org ? { via: names[b.org] } : {}) });
    }
  }
  for (const list of Object.values(events)) list.sort((a, b) => a.s.localeCompare(b.s));

  const warnings = connected.length ? [] : ['Personne n\'a encore connecté Teams et Outlook : les positions reposent sur les présences déclarées.'];
  return { date, now: now.min, presence, events, hints, warnings, connectedCount: connected.length };
}

/** Occupation des salles sur une période : agendas des personnes connectées + réservations faites dans Étage. */
export async function roomSchedule(start, end, viewerId) {
  const dates = daysBetween(start, end);
  const { layout, rooms, items } = await gather(start, addDays(end, 1));
  const out = roomDays(items, dates, layout.settings?.agenda === 'subject', rooms);
  for (const b of await bookings()) {
    const day = out[b.room]?.[b.date];
    if (!day) continue;
    day.push({ id: b.id, s: b.s, e: b.e, t: b.t, org: b.org, people: b.people, src: 'etage', mine: b.org === viewerId });
  }
  for (const r of Object.values(out)) for (const d of Object.values(r)) d.sort((a, b) => a.s.localeCompare(b.s));
  return out;
}

export const forgetCachedUser = (id) => { invalidate(`pres:${id}`); invalidate(`cal:${id}:`); };
