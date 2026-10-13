// Source « connectée » : l'API Étage, avec une session par cookie (connexion Microsoft côté serveur).
import { toMin, todayKey } from './model.js';

export function createLiveSource() {
  let DATA = null;
  let etag = null;
  let me = null;
  let live = { presence: {}, events: {}, hints: [], warnings: [] };
  const roomCache = new Map(); // date -> { roomId: [réservations] }
  const pending = new Set();
  let onChange = () => {};
  let onError = () => {};
  let saveTimer = null;

  async function api(path, opts = {}) {
    const write = opts.method && opts.method !== 'GET';
    const res = await fetch(path, {
      credentials: 'same-origin',
      ...opts,
      headers: {
        ...(opts.body ? { 'Content-Type': 'application/json' } : {}),
        ...(write ? { 'x-etage': '1' } : {}),
        ...(opts.headers || {}),
      },
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw Object.assign(new Error(data.error || `Le serveur a répondu ${res.status}.`), { status: res.status });
    return data;
  }
  const send = (path, method, body) => api(path, { method, body: body === undefined ? undefined : JSON.stringify(body) });

  const src = {
    mode: 'live',
    available: false,
    set onChange(fn) { onChange = fn; },
    set onError(fn) { onError = fn; },

    /** Vrai si une session est ouverte. available = l'API répond (sinon le bouton de connexion est masqué). */
    async init() {
      try {
        me = (await api('/api/me')).user;
        src.available = true;
        return true;
      } catch (err) {
        src.available = err.status === 401;
        return false;
      }
    },
    login() { window.location.href = '/api/auth/login'; },
    connect() { window.location.href = '/api/auth/login?connect=1'; },
    async logout() {
      await send('/api/auth/logout', 'POST').catch(() => {});
      window.location.href = '/';
    },
    async disconnect() {
      me = (await send('/api/me/disconnect', 'POST')).user;
      Object.assign(src.me(), me);
      await src.refresh().catch(() => {});
    },
    async setStatus(loc) {
      me = (await send('/api/me/status', 'PUT', { loc })).user;
      const u = src.me();
      if (me.status) u.status = me.status; else delete u.status;
      await src.refresh().catch(() => {});
    },

    async load() {
      const st = await api('/api/state');
      etag = st.etag || null;
      DATA = {
        org: st.org, floor: st.floor, rooms: st.rooms, items: st.items, users: st.users, bg: st.bg,
        settings: { agenda: 'busy', guess: 'all', ...(st.settings || {}) },
        outlookRooms: [], bookings: [],
      };
      await src.refresh();
      return DATA;
    },
    me() { return DATA.users.find((u) => u.id === me.id) || { ...me }; },

    async refresh() {
      live = await api('/api/live');
      roomCache.delete(todayKey());
      return live;
    },
    warnings() { return live.warnings || []; },
    connectedCount() { return live.connectedCount || 0; },

    eventsOf(u) { return live.events[u.id] || []; },
    presence(u, t) {
      const p = live.presence[u.id] || { st: 'unknown', loc: 'unknown' };
      const ev = src.eventsOf(u).find((e) => t >= toMin(e.s) && t < toMin(e.e));
      return { st: p.st, loc: p.loc, ev };
    },
    roomHints() { return live.hints || []; },

    roomBookings(r, date) {
      const day = roomCache.get(date);
      if (!day) { src.ensureDates([date]); return []; }
      return day[r.id] || [];
    },
    hasDates(dates) { return dates.every((d) => roomCache.has(d)); },
    ensureDates(dates) {
      const missing = dates.filter((d) => !roomCache.has(d) && !pending.has(d)).sort();
      if (!missing.length) return;
      missing.forEach((d) => pending.add(d));
      api(`/api/rooms/schedule?start=${missing[0]}&end=${missing[missing.length - 1]}`)
        .then((res) => {
          for (const d of missing) {
            const per = {};
            for (const [rid, days] of Object.entries(res.rooms || {})) per[rid] = days[d] || [];
            roomCache.set(d, per);
          }
        })
        .catch((err) => onError(`Planning des salles indisponible : ${err.message}`))
        .finally(() => { missing.forEach((d) => pending.delete(d)); onChange(); });
    },
    canCancel(b, user) { return b.src === 'etage' && (b.org === user.id || user.role === 'admin'); },

    async book(b) {
      try {
        await send('/api/bookings', 'POST', { roomId: b.room, date: b.date, s: b.s, e: b.e, subject: b.t, people: b.people });
        roomCache.delete(b.date);
        if (b.date === todayKey()) await src.refresh().catch(() => {});
        src.ensureDates([b.date]);
        return { ok: true };
      } catch (err) {
        return { ok: false, error: err.message };
      }
    },
    async cancel(b) {
      try {
        await send(`/api/bookings/${encodeURIComponent(b.id)}`, 'DELETE');
        roomCache.delete(b.date);
        if (b.date === todayKey()) await src.refresh().catch(() => {});
        src.ensureDates([b.date]);
        return { ok: true };
      } catch (err) {
        return { ok: false, error: err.message };
      }
    },

    /** Enregistre le plan (administrateurs), regroupé pour ne pas envoyer chaque déplacement. */
    saveLayout() {
      clearTimeout(saveTimer);
      return new Promise((resolve) => {
        saveTimer = setTimeout(async () => {
          try {
            const { org, floor, rooms, items, settings, bg } = DATA;
            etag = (await send('/api/layout', 'PUT', { layout: { org, floor, rooms, items, settings, bg }, etag })).etag;
            resolve({ ok: true });
          } catch (err) {
            onError(`Plan non enregistré : ${err.message}`);
            resolve({ ok: false, error: err.message });
          }
        }, 700);
      });
    },

    // Administration des personnes
    async addUser(fields) { const { user } = await send('/api/users', 'POST', fields); DATA.users.push(user); return user; },
    async updateUser(id, fields) {
      const { user } = await send(`/api/users/${encodeURIComponent(id)}`, 'PUT', fields);
      Object.assign(DATA.users.find((u) => u.id === id), user);
      return user;
    },
    async deleteUser(id) {
      await send(`/api/users/${encodeURIComponent(id)}`, 'DELETE');
      DATA.users = DATA.users.filter((u) => u.id !== id);
      for (const it of DATA.items) if (it.user === id) it.user = null;
    },
    health() { return api('/api/health'); },
  };
  return src;
}
