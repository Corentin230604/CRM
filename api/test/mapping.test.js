import test from 'node:test';
import assert from 'node:assert/strict';
import {
  mapPresence, splitByDay, matchRoom, overlaps, nowIn, addDays, daysBetween, matchNames,
  calendarItems, ownEvents, derivedEvents, hintsFromItems, roomDays,
} from '../src/lib/mapping.js';
import { cleanLayout, cleanBooking } from '../src/lib/validate.js';

test('présence Teams → statut et lieu', () => {
  assert.deepEqual(
    pick(mapPresence({ availability: 'Available', activity: 'Available', workLocation: { workLocationType: 'office', source: 'manual' } })),
    { st: 'available', loc: 'office' },
  );
  assert.deepEqual(pick(mapPresence({ availability: 'Busy', activity: 'InAMeeting', workLocation: { workLocationType: 'remote' } })), { st: 'meeting', loc: 'remote' });
  assert.deepEqual(pick(mapPresence({ availability: 'DoNotDisturb', activity: 'Presenting' })), { st: 'meeting', loc: 'unknown' });
  assert.deepEqual(pick(mapPresence({ availability: 'DoNotDisturb', activity: 'DoNotDisturb' })), { st: 'dnd', loc: 'unknown' });
  assert.deepEqual(pick(mapPresence({ availability: 'Away', activity: 'OutOfOffice' })), { st: 'ooo', loc: 'away' });
  assert.deepEqual(pick(mapPresence({ availability: 'BeRightBack', activity: 'BeRightBack', workLocation: { workLocationType: 'office' } })), { st: 'away', loc: 'office' });
  assert.deepEqual(pick(mapPresence({ availability: 'Offline', activity: 'Offline', workLocation: { workLocationType: 'office' } })), { st: 'offline', loc: 'none' });
  assert.deepEqual(pick(mapPresence({ availability: 'Available', workLocation: { workLocationType: 'timeOff' } })), { st: 'available', loc: 'away' });
  assert.deepEqual(pick(mapPresence(null)), { st: 'offline', loc: 'none' });
});
const pick = ({ st, loc }) => ({ st, loc });

test('découpage d\'un créneau sur plusieurs jours', () => {
  assert.deepEqual(splitByDay('2026-10-14T09:30:00.0000000', '2026-10-14T11:00:00.0000000'), [{ date: '2026-10-14', s: 570, e: 660 }]);
  assert.deepEqual(splitByDay('2026-10-14T22:00:00', '2026-10-15T02:00:00'), [{ date: '2026-10-14', s: 1320, e: 1440 }, { date: '2026-10-15', s: 0, e: 120 }]);
  assert.deepEqual(splitByDay('bad', '2026-10-15T02:00:00'), []);
});

test('rapprochement du lieu Outlook avec une salle du plan', () => {
  const rooms = [{ id: 'r1', name: 'Fourvière', outlookName: 'Salle Fourvière (8)', mailbox: 'fourviere@ex.fr' }];
  assert.equal(matchRoom('Salle Fourvière (8)', rooms), 'r1');
  assert.equal(matchRoom('Microsoft Teams; Salle Fourvière (8)', rooms), 'r1');
  assert.equal(matchRoom('fourviere@ex.fr', rooms), 'r1');
  assert.equal(matchRoom('Café du coin', rooms), null);
  assert.equal(matchRoom('', rooms), null);
});



test('chevauchements et dates', () => {
  assert.equal(overlaps(600, 660, 630, 690), true);
  assert.equal(overlaps(600, 660, 660, 720), false);
  assert.equal(addDays('2026-10-31', 1), '2026-11-01');
  assert.deepEqual(daysBetween('2026-12-30', '2027-01-02'), ['2026-12-30', '2026-12-31', '2027-01-01', '2027-01-02']);
  assert.deepEqual(nowIn('Europe/Paris', new Date('2026-10-13T08:15:00Z')), { date: '2026-10-13', min: 615 });
  assert.deepEqual(nowIn('Europe/Paris', new Date('2026-12-31T23:30:00Z')), { date: '2027-01-01', min: 30 });
});

test('nettoyage du plan envoyé par l\'éditeur', () => {
  const clean = cleanLayout({
    org: 'Test', floor: { w: 40, d: 'x' },
    rooms: [{ id: 'r-1', name: 'Salle A', type: 'meeting', x: 1, z: 2, w: 5, d: 4, capacity: 6, mailbox: ' SalleA@Ex.fr ', hack: 1 }],
    items: [{ id: 'd1', type: 'desk', x: 3, z: 3, rot: 45, user: '0b9d5d1e-1111-2222-3333-444455556666' }],
    settings: { agenda: 'subject', guess: 'probable' },
  });
  assert.equal(clean.floor.d, 23);
  assert.equal(clean.rooms[0].mailbox, 'sallea@ex.fr');
  assert.equal(clean.rooms[0].hack, undefined);
  assert.equal(clean.items[0].rot, 0);
  assert.equal(clean.settings.agenda, 'subject');
  assert.equal(clean.settings.guess, 'probable');
  assert.throws(() => cleanLayout({ rooms: [{ id: 'r', type: 'cave' }] }), /Type de pièce inconnu/);
  assert.throws(() => cleanLayout({ rooms: [{ id: 'bad id!', type: 'open' }] }), /Identifiant invalide/);
});

test('validation d\'une réservation', () => {
  const b = cleanBooking({ roomId: 'r-1', date: '2026-10-14', s: '10:00', e: '11:00', people: ['u-1', 'u-1', 'u-2', 42], subject: '' });
  assert.deepEqual(b.people, ['u-1', 'u-2']);
  assert.equal(b.subject, 'Réunion');
  assert.throws(() => cleanBooking({ roomId: 'r-1', date: '2026-10-14', s: '11:00', e: '10:00' }), /Horaires invalides/);
});

test('nouveaux éléments du plan : portes, cloisons, plan de fond', () => {
  const clean = cleanLayout({
    rooms: [{ id: 'wc', name: 'Sanitaires', type: 'wc', x: 0, z: 0, w: 4, d: 4, doors: [{ side: 's', at: 0.5 }, { side: 'x', at: 2 }, { side: 'e', at: 7 }] }],
    items: [{ id: 'w1', type: 'wall', x: 1, z: 0, x2: 1, z2: 1.6, glass: 'oui' }, { id: 't1', type: 'wc', x: 0.5, z: 0.4, rot: 0 }],
    bg: { src: 'data:image/jpeg;base64,AAAA', ar: 0.66, w: 30, op: 2 },
  });
  assert.deepEqual(clean.rooms[0].doors, [{ side: 's', at: 0.5 }, { side: 'e', at: 1 }]);
  assert.deepEqual([clean.items[0].x2, clean.items[0].z2, clean.items[0].glass], [1, 1.6, false]);
  assert.equal(clean.bg.op, 1);
  assert.throws(() => cleanLayout({ bg: { src: 'javascript:alert(1)' } }), /Plan de fond invalide/);
});

test('noms reconnus dans l\'objet d\'une réservation de salle', () => {
  const people = [{ id: 'c', name: 'Claire Morel' }, { id: 'h', name: 'Hugo Lambert' }, { id: 'e', name: 'Émilie Dubois-Martin' }, { id: 'x', name: 'Mono' }];
  assert.deepEqual(matchNames('Claire Morel', people), ['c']);
  assert.deepEqual(matchNames('MOREL Claire', people), ['c']);
  assert.deepEqual(matchNames('Réunion - Emilie Dubois-Martin', people), ['e']);
  assert.deepEqual(matchNames('Claire', people), []);
  assert.deepEqual(matchNames('Mono', people), []);
});


// --- Agendas des personnes connectées -------------------------------------------------
const rooms = [{ id: 'r1', name: 'Fourvière', outlookName: 'Salle Fourvière', mailbox: 'fourviere@ex.fr' }, { id: 'r2', name: 'Croix-Rousse', mailbox: '' }];
const users = [
  { id: 'c', name: 'Claire Morel', email: 'claire@ex.fr' },
  { id: 'h', name: 'Hugo Lambert', email: 'hugo@ex.fr' },
  { id: 'l', name: 'Léa Mercier', email: 'lea@ex.fr' },
];
const usersByEmail = new Map(users.map((u) => [u.email, u]));
const ev = (o) => ({ start: { dateTime: '2026-10-14T10:00:00.0000000' }, end: { dateTime: '2026-10-14T11:00:00.0000000' }, showAs: 'busy', attendees: [], ...o });
const claireCal = [
  ev({ subject: 'Comité', location: { displayName: 'Salle Fourvière' }, attendees: [{ type: 'required', emailAddress: { address: 'Hugo@ex.fr' } }, { type: 'required', emailAddress: { address: 'lea@ex.fr' }, status: { response: 'declined' } }, { type: 'resource', emailAddress: { address: 'fourviere@ex.fr' } }] }),
  ev({ subject: 'Point perso', sensitivity: 'private', start: { dateTime: '2026-10-14T12:00:00' }, end: { dateTime: '2026-10-14T13:00:00' } }),
  ev({ subject: 'Bloc libre', showAs: 'free' }),
  ev({ subject: 'Annulée', isCancelled: true }),
  ev({ subject: 'Daily', location: { displayName: 'Croix-Rousse' }, start: { dateTime: '2026-10-15T09:00:00' }, end: { dateTime: '2026-10-15T09:30:00' } }),
];

test('agenda Outlook → salle reconnue et invités identifiés (refus exclus)', () => {
  const items = calendarItems(claireCal, { rooms, usersByEmail, ownerId: 'c' });
  assert.equal(items.length, 3);
  assert.equal(items[0].room, 'r1');
  assert.deepEqual(items[0].people.sort(), ['c', 'h']);
  assert.equal(items[1].private, true);
  assert.equal(items[2].room, 'r2');
});

test('agenda du jour, réunions déduites pour les invités, indices et occupation des salles', () => {
  const items = calendarItems(claireCal, { rooms, usersByEmail, ownerId: 'c' });
  const own = ownEvents(items, '2026-10-14', false);
  assert.deepEqual(own.map((e) => [e.s, e.t, e.k, e.room]), [['10:00', 'Occupé', 'meeting', 'r1'], ['12:00', 'Privé', 'busy', null]]);
  assert.equal(ownEvents(items, '2026-10-14', true)[0].t, 'Comité');
  const derived = derivedEvents(items, '2026-10-14', true, { c: 'Claire' });
  assert.deepEqual(derived.h, [{ s: '10:00', e: '11:00', t: 'Comité', k: 'meeting', room: 'r1', via: 'Claire' }]);
  assert.equal(derived.l, undefined);
  assert.deepEqual(hintsFromItems(items, '2026-10-14'), [{ room: 'r1', s: '10:00', e: '11:00', who: ['c', 'h'] }]);
  const days = roomDays(items, ['2026-10-14', '2026-10-15'], false, rooms);
  assert.equal(days.r1['2026-10-14'][0].t, 'Réservée');
  assert.equal(days.r2['2026-10-15'][0].s, '09:00');
  assert.deepEqual(days.r2['2026-10-14'], []);
});

test('même réunion vue dans deux agendas connectés : une seule réservation', () => {
  const hugoCal = [ev({ subject: 'Comité', location: { displayName: 'Salle Fourvière' }, organizer: { emailAddress: { address: 'claire@ex.fr' } } })];
  const items = [...calendarItems(claireCal, { rooms, usersByEmail, ownerId: 'c' }), ...calendarItems(hugoCal, { rooms, usersByEmail, ownerId: 'h' })];
  const days = roomDays(items, ['2026-10-14'], true, rooms);
  assert.equal(days.r1['2026-10-14'].length, 1);
});
