// Outils partagés : dates, heures, statuts.
export const pad = (n) => String(n).padStart(2, '0');
export const toMin = (s) => { const [a, b] = String(s).split(':').map(Number); return a * 60 + (b || 0); };
export const fmt = (m) => pad(Math.floor(m / 60)) + ':' + pad(Math.round(m % 60));
export const dkey = (d) => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
export const todayKey = () => dkey(new Date());
export const parseKey = (k) => { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); };
export const addDays = (k, n) => { const d = parseKey(k); d.setDate(d.getDate() + n); return dkey(d); };
export const wdOf = (k) => (parseKey(k).getDay() + 6) % 7;
export const weekStart = (k) => addDays(k, -wdOf(k));
export const nowMin = () => { const n = new Date(); return n.getHours() * 60 + n.getMinutes(); };
export const MONTHS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
const DSHORT = ['lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.', 'dim.'];
const DLONG = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
export const dayShort = (k) => DSHORT[wdOf(k)] + ' ' + parseKey(k).getDate();
export const dayLong = (k) => { const d = parseKey(k); return DLONG[wdOf(k)] + ' ' + d.getDate() + ' ' + MONTHS[d.getMonth()]; };
export const uid = (p) => p + '-' + Math.random().toString(36).slice(2, 8);
