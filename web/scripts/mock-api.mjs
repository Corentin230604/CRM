// API simulée : imite l'API Étage (session par cookie, connexion Teams/Outlook par personne)
// pour développer et tester l'interface sans Microsoft 365 ni Azure.
// Lancement : npm run dev:live-mock  (API sur :7071, interface sur :5173)
import http from 'node:http';
import { createDemoSource, seed } from '../src/demo.js';
import { nowMin, todayKey, toMin, addDays } from '../src/model.js';
import { matchNames } from '../src/locate.js';

const demo = createDemoSource();
const DATA = await demo.load();
const CONNECTED = new Set(['u-claire', 'u-hugo', 'u-lucas', 'u-emma', 'u-lea', 'u-ines']);
const users = DATA.users.map(({ id, name, title, team, email, color, role }) => ({ id, name, title, team, email, color, role, connected: CONNECTED.has(id) }));
let layout = (({ org, floor, rooms, items }) => ({ org, floor, rooms, items, settings: { agenda: 'subject', guess: 'all' } }))(seed());
let etag = '"1"';
let bookings = [];
const ME = 'u-claire';
const SESSION = 'etage_session=mock';

const send = (res, status, body, headers = {}) => { res.writeHead(status, { 'Content-Type': 'application/json', ...headers }); res.end(JSON.stringify(body)); };
const readBody = (req) => new Promise((r) => { let b = ''; req.on('data', (c) => { b += c; }); req.on('end', () => r(b ? JSON.parse(b) : {})); });
const pub = (u) => ({ ...u });
const user = (id) => users.find((u) => u.id === id);
const demoUser = (id) => DATA.users.find((u) => u.id === id);
const short = (id) => (user(id)?.name || '').split(' ')[0];

function roomDay(room, date) {
  const base = demo.roomBookings(room, date).filter((b) => b.src !== 'etage').map((b) => ({ id: b.id, s: b.s, e: b.e, t: layout.settings.agenda === 'subject' ? b.t : 'Réservée', people: b.people || [], src: 'outlook' }));
  const own = bookings.filter((b) => b.room === room.id && b.date === date).map((b) => ({ ...b, src: 'etage', mine: b.org === ME }));
  return [...base, ...own].sort((a, b) => a.s.localeCompare(b.s));
}

http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  const p = url.pathname;
  const signed = (req.headers.cookie || '').includes(SESSION);
  if (req.method !== 'GET' && req.headers['x-etage'] !== '1') return send(res, 403, { error: 'Requête refusée.' });
  try {
    if (p === '/api/auth/login') {
      if (url.searchParams.get('connect') === '1') user(ME).connected = true;
      res.writeHead(302, { Location: url.searchParams.get('connect') === '1' ? '/?connected=1' : '/', 'Set-Cookie': `${SESSION}; Path=/; HttpOnly; SameSite=Lax` });
      return res.end();
    }
    if (p === '/api/auth/logout') return send(res, 200, { ok: true }, { 'Set-Cookie': 'etage_session=; Path=/; Max-Age=0' });
    if (!signed) return send(res, 401, { error: 'Connexion requise.' });
    const t = nowMin();
    const today = todayKey();

    if (p === '/api/me') return send(res, 200, { user: pub(user(ME)) });
    if (p === '/api/me/disconnect') { user(ME).connected = false; return send(res, 200, { user: pub(user(ME)) }); }
    if (p === '/api/me/status') {
      const { loc } = await readBody(req);
      if (loc) user(ME).status = { date: today, loc }; else delete user(ME).status;
      return send(res, 200, { user: pub(user(ME)) });
    }
    if (p === '/api/state') return send(res, 200, { ...layout, org: `${layout.org} (API simulée)`, users: users.map(pub), etag, me: { id: ME } });
    if (p === '/api/live') {
      const presence = {}; const events = {};
      for (const u of users) {
        const d = demoUser(u.id);
        const declared = u.status?.date === today ? u.status.loc : null;
        if (u.connected && d) {
          const pr = demo.presence(d, t);
          presence[u.id] = { st: pr.st, loc: declared || pr.loc };
          events[u.id] = demo.eventsOf(d).map((e) => ({ s: e.s, e: e.e, t: layout.settings.agenda === 'subject' ? e.t : 'Occupé', k: e.k === 'lunch' || e.k === 'focus' ? 'busy' : e.k, room: e.room || null }));
        } else {
          presence[u.id] = { st: 'unknown', loc: declared || 'unknown' };
          // Réunions vues dans l'agenda d'un collègue connecté
          if (d) events[u.id] = d.events.filter((e) => e.room).map((e) => ({ s: e.s, e: e.e, t: e.t, k: 'meeting', room: e.room, via: short([...CONNECTED].find((id) => demoUser(id)?.events.some((x) => x.t === e.t && x.s === e.s)) || ME) }));
        }
      }
      const hints = [];
      for (const r of layout.rooms.filter((x) => x.type === 'meeting')) {
        for (const b of roomDay(r, today)) hints.push({ room: r.id, s: b.s, e: b.e, who: [...new Set([...(b.people || []), ...matchNames(b.t, users)])] });
      }
      const connectedCount = users.filter((u) => u.connected).length;
      return send(res, 200, { date: today, now: t, presence, events, hints, connectedCount, warnings: connectedCount ? [] : ['Personne n\'a encore connecté Teams et Outlook.'] });
    }
    if (p === '/api/rooms/schedule') {
      const start = url.searchParams.get('start'); const end = url.searchParams.get('end') || start;
      const dates = []; for (let d = start; d <= end; d = addDays(d, 1)) dates.push(d);
      const rooms = {};
      for (const r of layout.rooms.filter((x) => x.type === 'meeting')) rooms[r.id] = Object.fromEntries(dates.map((d) => [d, roomDay(r, d)]));
      return send(res, 200, { rooms });
    }
    if (req.method === 'POST' && p === '/api/bookings') {
      const b = await readBody(req);
      const room = layout.rooms.find((r) => r.id === b.roomId);
      if (!room) return send(res, 404, { error: 'Salle introuvable dans le plan.' });
      const clash = roomDay(room, b.date).find((x) => toMin(x.s) < toMin(b.e) && toMin(x.e) > toMin(b.s));
      if (clash) return send(res, 409, { error: `${room.name} est déjà réservée de ${clash.s} à ${clash.e}.` });
      const booking = { id: 'b-' + Math.random().toString(36).slice(2, 8), room: room.id, date: b.date, s: b.s, e: b.e, t: b.subject, org: ME, people: [...new Set([ME, ...(b.people || [])])] };
      bookings.push(booking);
      return send(res, 201, { booking });
    }
    if (req.method === 'DELETE' && p.startsWith('/api/bookings/')) {
      const id = decodeURIComponent(p.slice('/api/bookings/'.length));
      if (!bookings.some((b) => b.id === id)) return send(res, 404, { error: 'Réservation introuvable.' });
      bookings = bookings.filter((b) => b.id !== id);
      return send(res, 200, { ok: true });
    }
    if (req.method === 'PUT' && p === '/api/layout') {
      const b = await readBody(req);
      if (b.etag !== etag) return send(res, 409, { error: 'Le plan a été modifié par un autre administrateur entre-temps. Rechargez la page.' });
      layout = b.layout; etag = `"${Number(etag.replace(/"/g, '')) + 1}"`;
      return send(res, 200, { etag });
    }
    if (req.method === 'POST' && p === '/api/users') {
      const b = await readBody(req);
      const u = { id: 'm-' + Math.random().toString(36).slice(2, 8), name: b.name, email: b.email || '', team: b.team || 'Sans équipe', title: '', color: '#577590', role: 'user', connected: false };
      users.push(u);
      return send(res, 201, { user: u });
    }
    if (p.startsWith('/api/users/')) {
      const id = decodeURIComponent(p.slice('/api/users/'.length));
      const u = user(id);
      if (!u) return send(res, 404, { error: 'Personne introuvable.' });
      if (req.method === 'PUT') { Object.assign(u, await readBody(req)); return send(res, 200, { user: u }); }
      if (req.method === 'DELETE') { users.splice(users.indexOf(u), 1); return send(res, 200, { ok: true }); }
    }
    if (p === '/api/health') {
      return send(res, 200, { checks: [
        { name: 'Stockage', ok: true, detail: `${layout.rooms.length} pièces` },
        { name: 'Personnes', ok: true, detail: `${users.length} personnes, dont ${users.filter((u) => u.connected).length} avec Teams et Outlook connectés` },
        { name: 'Votre Teams et Outlook', ok: !!user(ME).connected, detail: user(ME).connected ? 'Statut lu : available, lieu : office' : 'Non connectés' },
      ] });
    }
    return send(res, 404, { error: 'Route inconnue.' });
  } catch (err) {
    return send(res, 500, { error: err.message });
  }
}).listen(7071, () => console.log('API simulée sur http://localhost:7071'));
