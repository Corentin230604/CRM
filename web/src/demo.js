// Source « démo » : données d'exemple et simulation de Teams/Outlook, sans connexion Microsoft.
import { toMin, todayKey, wdOf } from './model.js';

const KEY = 'etage-demo-v3';
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* stockage indisponible */ } },
};

// Réservations récurrentes des autres jours (simulent le calendrier Outlook des salles).
const TEMPLATES = {
  'r-fourviere': [[0, '09:00', '10:00', 'Comité de direction', 'u-claire'], [2, '14:00', '16:00', 'Atelier conception', 'u-hugo'], [3, '10:00', '11:30', 'Revue de projet Alpina', 'u-antoine'], [4, '11:00', '12:00', 'Point commercial', 'u-antoine']],
  'r-croix': [[-1, '10:30', '11:00', 'Daily projet', 'u-hugo'], [1, '15:00', '16:00', 'Point trésorerie', 'u-emma'], [3, '14:00', '15:00', 'Entretien de recrutement', 'u-manon']],
};

// Réservation visible seulement dans le calendrier de la salle : Exchange y inscrit le nom de l'organisateur.
const ROOM_TODAY = [{ room: 'r-fourviere', s: '10:15', e: '11:00', t: 'Claire Morel' }];

const uid = (p) => p + '-' + Math.random().toString(36).slice(2, 8);

export function seed(){
  const rooms=[
    {id:'r-plateau',name:'Plateau Projets',type:'open',x:1,z:1,w:16,d:10},
    {id:'r-fourviere',name:'Salle Fourvière',type:'meeting',x:18,z:1,w:8,d:6,capacity:8,mailbox:'salle.fourviere@atelier-demo.fr'},
    {id:'r-croix',name:'Salle Croix-Rousse',type:'meeting',x:27,z:1,w:8,d:5,capacity:4,mailbox:'salle.croixrousse@atelier-demo.fr'},
    {id:'r-compta',name:'Comptabilité',type:'office',x:18,z:8,w:8,d:6},
    {id:'r-direction',name:'Direction',type:'office',x:27,z:7,w:8,d:7},
    {id:'r-support',name:'Support client',type:'open',x:1,z:12,w:12,d:10},
    {id:'r-cafe',name:'Cafétéria',type:'break',x:14,z:15,w:12,d:7},
    {id:'r-accueil',name:'Accueil',type:'reception',x:27,z:15,w:8,d:7},
    {id:'r-wc',name:'Sanitaires',type:'wc',x:14,z:11,w:4,d:4,doors:[{side:'s',at:.5}]},
  ];
  const D=(id,x,z,rot,user)=>({id,type:'desk',x,z,rot,user:user||null});
  const items=[
    D('d1',4,4,180,'u-hugo'),D('d2',5.5,4,180,'u-ines'),D('d3',4,4.7,0,'u-lucas'),D('d4',5.5,4.7,0,'u-sarah'),
    D('d5',11,4,180,'u-thomas'),D('d6',12.5,4,180,'u-antoine'),D('d7',11,4.7,0,'u-paul'),D('d8',12.5,4.7,0,null),
    {id:'p1',type:'plant',x:1.6,z:1.6,rot:0},{id:'p2',type:'plant',x:16.4,z:1.6,rot:0},{id:'p3',type:'plant',x:8.2,z:4.3,rot:0},
    {id:'rt1',type:'round',x:8.5,z:8.5,rot:0},
    {id:'m1',type:'meeting',x:22,z:3.8,rot:0,seats:8},{id:'p4',type:'plant',x:25.3,z:1.7,rot:0},
    {id:'m2',type:'meeting',x:31,z:3.4,rot:0,seats:4},
    D('d9',20.5,10.4,0,'u-emma'),D('d10',23.5,10.4,0,'u-nathan'),{id:'p5',type:'plant',x:25.3,z:8.7,rot:0},
    D('d11',31,9.2,0,'u-claire'),{id:'m3',type:'meeting',x:31,z:12.2,rot:0,seats:4},{id:'p6',type:'plant',x:34.3,z:7.7,rot:0},
    D('s1',4,15,180,'u-lea'),D('s2',5.5,15,180,'u-julien'),D('s3',7,15,180,'u-camille'),
    D('s4',4,15.7,0,'u-maxime'),D('s5',5.5,15.7,0,null),D('s6',7,15.7,0,null),
    {id:'p7',type:'plant',x:1.6,z:21.3,rot:0},{id:'p8',type:'plant',x:12.3,z:12.7,rot:0},{id:'rt4',type:'round',x:9.5,z:19.5,rot:0},
    {id:'k1',type:'counter',x:16.8,z:16,rot:0},{id:'rt2',type:'round',x:19.8,z:18.8,rot:0},{id:'rt3',type:'round',x:22.6,z:17.6,rot:0},
    {id:'pp1',type:'pingpong',x:17.6,z:20.4,rot:0},{id:'so1',type:'sofa',x:23.8,z:20.8,rot:180},{id:'p9',type:'plant',x:25.3,z:15.7,rot:0},
    D('a1',31,17.4,180,'u-chloe'),
    {id:'wc1',type:'wc',x:14.9,z:11.4,rot:0},{id:'wc2',type:'wc',x:17.1,z:11.4,rot:0},{id:'wcw',type:'wall',x:16,z:11,x2:16,z2:12.6,rot:0},{id:'sk1',type:'sink',x:14.8,z:14.6,rot:180},{id:'sk2',type:'sink',x:17.2,z:14.6,rot:180},
    {id:'tv1',type:'tv',x:22,z:1.15,rot:0},{id:'wb1',type:'whiteboard',x:18.15,z:4,rot:90},{id:'pr1',type:'printer',x:16.3,z:10.3,rot:270},{id:'lk1',type:'lockers',x:9,z:21.6,rot:180},{id:'fr1',type:'fridge',x:14.5,z:16,rot:0},{id:'so2',type:'sofa',x:30,z:20.8,rot:180},{id:'p10',type:'plant',x:34.3,z:21.3,rot:0},
  ];
  const E=(s,e,t,k,room)=>({s,e,t,k,room:room||null});
  const U=(id,name,title,team,email,role,day,inn,out,color,events)=>({id,name,title,team,email,role,day,in:inn,out,color,events});
  const comite=E('09:00','10:00','Comité de direction','meeting','r-fourviere');
  const daily=E('10:30','11:00','Daily projet','meeting','r-croix');
  const atelier=E('14:00','15:30','Atelier conception','meeting','r-fourviere');
  const alpina=E('14:00','15:30','Point client Alpina','meeting');
  const tickets=E('14:00','14:30','Revue des tickets','meeting');
  const tresor=E('15:00','16:00','Point trésorerie','meeting','r-croix');
  const recrut=E('16:00','17:00','Entretien de recrutement','meeting','r-croix');
  const L=(s,e)=>E(s,e,'Pause déjeuner','lunch');
  const users=[
    U('u-claire','Claire Morel','Directrice générale','Direction','claire.morel@atelier-demo.fr','admin','office','08:30','18:30','#3D5A80',[comite,E('10:15','11:00','Point avocat','meeting'),E('11:00','12:00','Revue budget','focus'),L('12:30','13:30'),alpina,recrut]),
    U('u-hugo','Hugo Lambert','Chef de projet','Projets','hugo.lambert@atelier-demo.fr','user','office','08:45','18:00','#C0603B',[comite,daily,L('12:00','13:00'),atelier]),
    U('u-ines','Inès Barbier','Développeuse','Projets','ines.barbier@atelier-demo.fr','user','remote','09:00','17:30','#6A4C93',[E('10:30','11:00','Daily projet','meeting'),L('12:30','13:30'),E('14:00','16:00','Développement','focus')]),
    U('u-lucas','Lucas Fontaine','Développeur','Projets','lucas.fontaine@atelier-demo.fr','user','office','09:15','18:15','#2A9D8F',[daily,L('12:00','13:00'),atelier,E('16:00','17:30','Mise en production','busy')]),
    U('u-sarah','Sarah Perrin','Designer UX','Projets','sarah.perrin@atelier-demo.fr','user','office','09:00','17:30','#E07A5F',[daily,L('12:30','13:30'),atelier]),
    U('u-thomas','Thomas Girard','Data analyst','Projets','thomas.girard@atelier-demo.fr','user','ooo','09:00','17:30','#577590',[]),
    U('u-emma','Emma Rousseau','Responsable comptable','Finance','emma.rousseau@atelier-demo.fr','user','office','08:30','17:30','#8D6A9F',[comite,E('11:00','12:00','Clôture mensuelle','focus'),L('12:00','13:00'),tresor]),
    U('u-nathan','Nathan Chevalier','Comptable','Finance','nathan.chevalier@atelier-demo.fr','user','office','09:00','17:00','#4D908E',[E('11:00','12:30','Rapprochements bancaires','busy'),L('12:30','13:30'),tresor]),
    U('u-lea','Léa Mercier','Responsable support','Support','lea.mercier@atelier-demo.fr','user','office','08:00','16:30','#B5651D',[comite,L('12:00','13:00'),tickets]),
    U('u-julien','Julien Faure','Conseiller support','Support','julien.faure@atelier-demo.fr','user','office','08:00','16:00','#43AA8B',[L('12:00','13:00'),tickets]),
    U('u-camille','Camille Roux','Conseillère support','Support','camille.roux@atelier-demo.fr','user','remote','09:00','17:00','#C44569',[L('12:30','13:30'),tickets]),
    U('u-maxime','Maxime André','Conseiller support','Support','maxime.andre@atelier-demo.fr','user','office','10:00','18:30','#386641',[L('13:00','14:00'),E('16:00','17:00','Formation outil','busy')]),
    U('u-chloe','Chloé Garnier','Office manager','Accueil','chloe.garnier@atelier-demo.fr','user','office','08:00','17:00','#9C6644',[L('12:00','13:00'),recrut]),
    U('u-antoine','Antoine Lefèvre','Commercial','Ventes','antoine.lefevre@atelier-demo.fr','user','unknown','09:00','18:00','#264653',[E('09:30','10:30','Prospection téléphonique','busy'),L('12:30','13:30'),alpina]),
    U('u-manon','Manon Dupuis','Chargée RH','RH','manon.dupuis@atelier-demo.fr','user','remote','09:00','17:00','#A05195',[L('12:00','13:00'),E('16:00','17:00','Entretien de recrutement','meeting')]),
    U('u-paul','Paul Henry','Stagiaire développement','Projets','paul.henry@atelier-demo.fr','user','unknown','09:30','17:30','#6D597A',[daily,L('12:00','13:00')]),
  ];
  return {org:'Atelier Démo · Lyon 7e',floor:{w:36,d:23},rooms,items,users,bookings:[],settings:{agenda:'subject',tenant:'',client:''}};
}

export function createDemoSource() {
  let DATA = null;
  const TODAY = todayKey();
  const roomById = (id) => DATA.rooms.find((r) => r.id === id);
  const src = {
    mode: 'demo',
    async load() {
      try { DATA = JSON.parse(store.get(KEY) || 'null'); } catch (e) { DATA = null; }
      if (!DATA || !DATA.rooms) DATA = seed();
      if (!DATA.bookings) DATA.bookings = [];
      return DATA;
    },
    reset() { DATA = seed(); src.saveLayout(); return DATA; },
    saveLayout() { store.set(KEY, JSON.stringify(DATA)); return Promise.resolve({ ok: true }); },
    accounts() {
      return [DATA.users.find((u) => u.role === 'admin'), ...DATA.users.filter((u) => u.role !== 'admin').slice(0, 3)].filter(Boolean);
    },
    eventsOf(u) {
      return u.events.concat(DATA.bookings.filter((b) => b.date === TODAY && b.people.includes(u.id)).map((b) => ({ s: b.s, e: b.e, t: b.t, k: 'meeting', room: b.room })));
    },
    presence(u, t) {
      if (u.day === 'ooo') return { st: 'ooo', loc: 'away' };
      const a = toMin(u.in), b = toMin(u.out);
      if (t < a || t >= b) return { st: 'offline', loc: 'none', before: t < a };
      const loc = u.day === 'remote' ? 'remote' : (u.day === 'unknown' ? 'unknown' : 'office');
      const ev = src.eventsOf(u).find((e) => t >= toMin(e.s) && t < toMin(e.e));
      if (!ev) return { st: 'available', loc };
      return { st: ({ meeting: 'meeting', focus: 'dnd', busy: 'busy', lunch: 'away' })[ev.k] || 'busy', loc, ev };
    },
    roomBookings(r, date) {
      const out = [];
      if (date === TODAY) {
        const seen = new Map();
        for (const b of ROOM_TODAY) if (b.room === r.id) out.push({ id: 'rt-' + b.room + '-' + b.s.replace(':', ''), s: b.s, e: b.e, t: b.t, org: null, people: [], src: 'outlook' });
        for (const u of DATA.users) {
          if (u.day === 'ooo') continue;
          for (const e of u.events) {
            if (e.room !== r.id) continue;
            const k = e.s + e.t;
            if (!seen.has(k)) seen.set(k, { id: 'ev-' + r.id + '-' + e.s.replace(':', ''), s: e.s, e: e.e, t: e.t, org: u.id, people: [], src: 'outlook' });
            seen.get(k).people.push(u.id);
          }
        }
        out.push(...seen.values());
      } else if (wdOf(date) < 5) {
        for (const [d, s0, e0, t, org] of (TEMPLATES[r.id] || [])) {
          if (d === -1 || d === wdOf(date)) out.push({ id: 'tp-' + r.id + '-' + date + '-' + s0.replace(':', ''), s: s0, e: e0, t, org, people: [org], src: 'outlook' });
        }
      }
      for (const b of DATA.bookings) if (b.room === r.id && b.date === date) out.push({ ...b, src: 'etage' });
      return out.sort((a, b) => toMin(a.s) - toMin(b.s));
    },
    ensureDates() {},
    hasDates() { return true; },
    canCancel(b, me) { return b.src === 'etage' && (b.org === me.id || me.role === 'admin'); },
    async book(b) {
      const clash = src.roomBookings(roomById(b.room), b.date).find((x) => toMin(x.s) < toMin(b.e) && toMin(x.e) > toMin(b.s));
      if (clash) return { ok: false, error: 'La salle vient d\'être réservée de ' + clash.s + ' à ' + clash.e + '.' };
      DATA.bookings.push({ id: uid('b'), ...b });
      src.saveLayout();
      return { ok: true };
    },
    async cancel(b) {
      DATA.bookings = DATA.bookings.filter((x) => x.id !== b.id);
      src.saveLayout();
      return { ok: true };
    },
    warnings() { return []; },
  };
  return src;
}
