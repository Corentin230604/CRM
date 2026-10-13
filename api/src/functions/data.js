import { app } from '@azure/functions';
import { cfg } from '../lib/config.js';
import { HttpError, handler, json, readJson } from '../lib/http.js';
import { roomSchedule, today } from '../lib/live.js';
import { addDays, daysBetween, nowIn, overlaps, toMin } from '../lib/mapping.js';
import { listUsers, publicUser } from '../lib/people.js';
import { requireAdmin, requireUser } from '../lib/session.js';
import { readLayout, updateJson, writeLayout } from '../lib/store.js';
import { cleanBooking, cleanLayout } from '../lib/validate.js';
import { randomBytes } from 'node:crypto';

const DATE = /^\d{4}-\d{2}-\d{2}$/;

// GET /api/state : plan des bureaux, personnes, réglages.
app.http('state', {
  methods: ['GET'], authLevel: 'anonymous', route: 'state',
  handler: handler(async (request) => {
    const user = await requireUser(request);
    const [{ layout, etag }, users] = await Promise.all([readLayout(), listUsers()]);
    return json(200, {
      org: layout.org || cfg.orgName,
      floor: layout.floor, rooms: layout.rooms, items: layout.items, settings: layout.settings,
      ...(layout.bg ? { bg: layout.bg } : {}),
      users: users.map(publicUser), etag, me: { id: user.id },
    });
  }),
});

// GET /api/live : la vue « en direct ».
app.http('live', {
  methods: ['GET'], authLevel: 'anonymous', route: 'live',
  handler: handler(async (request) => {
    await requireUser(request);
    return json(200, await today());
  }),
});

// GET /api/rooms/schedule?start=&end= : occupation des salles.
app.http('roomsSchedule', {
  methods: ['GET'], authLevel: 'anonymous', route: 'rooms/schedule',
  handler: handler(async (request) => {
    const user = await requireUser(request);
    const start = request.query.get('start') || '';
    const end = request.query.get('end') || start;
    if (!DATE.test(start) || !DATE.test(end) || end < start) throw new HttpError(400, 'Période invalide.');
    if (daysBetween(start, end).length > 31) throw new HttpError(400, 'Période trop longue (31 jours au maximum).');
    return json(200, { rooms: await roomSchedule(start, end, user.id) });
  }),
});

// POST /api/bookings : réserver une salle dans Étage.
app.http('bookingCreate', {
  methods: ['POST'], authLevel: 'anonymous', route: 'bookings',
  handler: handler(async (request) => {
    const user = await requireUser(request);
    const b = cleanBooking(await readJson(request));
    const { layout } = await readLayout();
    const room = layout.rooms.find((r) => r.id === b.roomId && r.type === 'meeting');
    if (!room) throw new HttpError(404, 'Salle introuvable dans le plan.');
    const now = nowIn(cfg.ianaTz);
    if (b.date < now.date || (b.date === now.date && toMin(b.e) <= now.min)) throw new HttpError(400, 'Ce créneau est déjà passé.');
    const day = (await roomSchedule(b.date, b.date, user.id))[room.id]?.[b.date] || [];
    const clash = day.find((x) => overlaps(toMin(x.s), toMin(x.e), toMin(b.s), toMin(b.e)));
    if (clash) throw new HttpError(409, `${room.name} est déjà réservée de ${clash.s} à ${clash.e}.`);
    const booking = {
      id: `b-${randomBytes(6).toString('hex')}`, room: room.id, date: b.date, s: b.s, e: b.e, t: b.subject,
      org: user.id, people: [...new Set([user.id, ...b.people])], createdAt: new Date().toISOString(),
    };
    await updateJson('bookings.json', { bookings: [] }, (d) => {
      const keepFrom = addDays(now.date, -31);
      d.bookings = d.bookings.filter((x) => x.date >= keepFrom); // purge des réservations de plus d'un mois
      if (d.bookings.some((x) => x.room === booking.room && x.date === booking.date && overlaps(toMin(x.s), toMin(x.e), toMin(b.s), toMin(b.e)))) {
        throw new HttpError(409, `${room.name} vient d'être réservée sur ce créneau.`);
      }
      d.bookings.push(booking);
    });
    return json(201, { booking });
  }),
});

// DELETE /api/bookings/{id} : annuler (organisateur ou administrateur).
app.http('bookingCancel', {
  methods: ['DELETE'], authLevel: 'anonymous', route: 'bookings/{id}',
  handler: handler(async (request) => {
    const user = await requireUser(request);
    const id = request.params.id;
    await updateJson('bookings.json', { bookings: [] }, (d) => {
      const b = d.bookings.find((x) => x.id === id);
      if (!b) throw new HttpError(404, 'Réservation introuvable.');
      if (b.org !== user.id && user.role !== 'admin') throw new HttpError(403, 'Seul l\'organisateur peut annuler cette réservation.');
      d.bookings = d.bookings.filter((x) => x.id !== id);
    });
    return json(200, { ok: true });
  }),
});

// PUT /api/layout : enregistrer le plan (administrateurs).
app.http('layoutSave', {
  methods: ['PUT'], authLevel: 'anonymous', route: 'layout',
  handler: handler(async (request) => {
    const user = await requireUser(request);
    requireAdmin(user);
    const body = await readJson(request, 6 * 1024 * 1024);
    return json(200, { etag: await writeLayout(cleanLayout(body.layout), body.etag || null) });
  }),
});
