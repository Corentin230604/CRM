import test from 'node:test';
import assert from 'node:assert/strict';
import { locate, matchNames } from '../src/locate.js';

const rooms = { r1: 'Salle Fourvière', r2: 'Salle Croix-Rousse' };
const base = (o) => ({ u: { id: 'c' }, t: 635, events: [], hints: [], desk: { id: 'd1' }, breakRoom: 'cafe', roomName: (id) => rooms[id], ...o });

test('salle réservée au nom de la personne pendant sa réunion sans lieu', () => {
  const L = locate(base({
    p: { st: 'meeting', loc: 'office' },
    events: [{ s: '10:15', e: '11:00', t: 'Point avocat', k: 'meeting', room: null }],
    hints: [{ room: 'r1', s: '10:15', e: '11:00', who: ['c'] }],
  }));
  assert.equal(L.kind, 'room');
  assert.equal(L.room, 'r1');
  assert.equal(L.level, 'Probable');
  assert.ok(L.reasons.some((r) => r.includes('réservée à son nom')));
});

test('réunion avec salle confirmée par le calendrier de la salle : sûr', () => {
  const L = locate(base({ p: { st: 'meeting', loc: 'office' }, events: [{ s: '10:30', e: '11:00', t: 'Daily', k: 'meeting', room: 'r2' }], hints: [{ room: 'r2', s: '10:30', e: '11:00', who: ['c'] }] }));
  assert.deepEqual([L.kind, L.room, L.level], ['room', 'r2', 'Sûr']);
});

test('réunion Teams sans salle : à son poste', () => {
  const L = locate(base({ p: { st: 'meeting', loc: 'office' }, events: [{ s: '10:00', e: '11:00', t: 'Point client', k: 'meeting', room: null }] }));
  assert.equal(L.kind, 'desk');
});

test('télétravail déclaré, congé, hors ligne', () => {
  assert.equal(locate(base({ p: { st: 'available', loc: 'remote' } })).kind, 'remote');
  assert.equal(locate(base({ p: { st: 'ooo', loc: 'away' } })).kind, 'away');
  assert.equal(locate(base({ p: { st: 'offline', loc: 'none' } })).kind, 'none');
});

test('lieu non déclaré : poste seulement supposé', () => {
  const L = locate(base({ p: { st: 'available', loc: 'unknown' } }));
  assert.deepEqual([L.kind, L.level], ['desk', 'Supposé']);
});

test('pause déjeuner au bureau : salle de pause probable', () => {
  const L = locate(base({ t: 760, p: { st: 'away', loc: 'office' }, events: [{ s: '12:00', e: '13:00', t: 'Pause déjeuner', k: 'lunch' }] }));
  assert.deepEqual([L.kind, L.room], ['break', 'cafe']);
});

test('noms dans un objet de réservation', () => {
  const users = [{ id: 'c', name: 'Claire Morel' }, { id: 'l', name: 'Léa Mercier' }];
  assert.deepEqual(matchNames('Claire Morel', users), ['c']);
  assert.deepEqual(matchNames('Réservé par MERCIER Lea', users), ['l']);
  assert.deepEqual(matchNames('Comité', users), []);
});
