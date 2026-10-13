// Moteur de localisation : devine où se trouve chaque personne. Généré depuis le prototype (scripts de portage).
/* LOCATE:BEGIN */
// Devine où se trouve chaque personne en croisant les indices disponibles. Fonctions pures, testées.
const locNorm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9@ ]+/g,' ').replace(/\s+/g,' ').trim();
/** Personnes dont le nom apparaît dans un texte (objet d'une réservation de salle, par ex. « Claire Morel »). */
function matchNames(text,users){
  const t=' '+locNorm(text)+' ';if(t.trim().length<4)return[];
  const out=[];
  for(const u of users){const n=locNorm(u.name);if(!n||n.indexOf(' ')<0)continue;const parts=n.split(' ');const rev=parts.slice(1).join(' ')+' '+parts[0];
    if(t.includes(' '+n+' ')||t.includes(' '+rev+' '))out.push(u.id)}
  return out;
}
function locLevel(c){return c>=.8?'Sûr':c>=.55?'Probable':'Supposé'}
/**
 * x = { u, p:{st,loc}, t (minutes), events:[{s,e,t,k,room}], hints:[{room,s,e,who:[ids]}], desk, breakRoom, roomName(id) }
 * Retourne { kind: room|break|desk|flex|out|remote|away|none|unknown, room, conf (0–1), level, reasons[] }
 */
function locate(x){
  const{u,p,t}=x;const tm=v=>{const[a,b]=String(v).split(':').map(Number);return a*60+(b||0)};
  const at=e=>t>=tm(e.s)&&t<tm(e.e);
  const out=(kind,conf,reasons,room)=>{conf=Math.max(0,Math.min(1,conf));return{kind,room:room||null,conf,level:locLevel(conf),reasons:reasons.filter(Boolean)}};
  const name=id=>x.roomName?x.roomName(id):id;
  const inAg=e=>e.via?'dans l\'agenda de '+e.via:'dans son agenda';
  const evs=x.events||[];
  if(p.st==='ooo'||p.loc==='away')return out('away',.95,['Absent du bureau (Teams ou réponse automatique Outlook)']);
  const ev=evs.find(e=>at(e)&&e.k!=='lunch'&&e.k!=='ooo');
  const lunch=evs.find(e=>at(e)&&e.k==='lunch');
  const hint=(x.hints||[]).find(h=>at(h)&&(h.who||[]).includes(u.id));
  if(p.loc==='remote')return out('remote',.9,['Lieu de travail déclaré : télétravail',hint?'Pourtant, '+name(hint.room)+' est réservée à son nom ('+hint.s+'–'+hint.e+')':'']);
  if(p.st==='unknown'&&p.loc!=='office'&&!hint&&!(ev&&ev.room))return out('unknown',.15,['Teams et Outlook non connectés, aucune présence déclarée']);
  const teams={meeting:'Teams : en réunion',busy:'Teams : occupé',available:'Teams : disponible',away:'Teams : absent',dnd:'Teams : ne pas déranger',offline:'Teams : hors ligne'}[p.st]||'';
  const office=p.loc==='office',unknown=p.loc==='unknown';
  const officeWhy=office?'Lieu de travail déclaré : au bureau':(unknown?'Lieu de travail non déclaré':'');
  const cands=[];const add=(kind,score,reasons,room)=>cands.push({kind,score,reasons,room});
  // 1. Réunion dans une salle du plan : lieu de l'événement et/ou salle réservée à son nom
  const rooms=new Map();
  if(ev&&ev.room)rooms.set(ev.room,{score:.5,why:['« '+ev.t+' » ('+ev.s+'–'+ev.e+') '+inAg(ev)+', lieu : '+name(ev.room)]});
  if(hint){const r=rooms.get(hint.room),why=name(hint.room)+' réservée à son nom au même moment ('+hint.s+'–'+hint.e+')';
    if(r){r.score+=.3;r.why.push(why)}else rooms.set(hint.room,{score:ev?.42:.35,why:[ev?'« '+ev.t+' » ('+ev.s+'–'+ev.e+') '+inAg(ev)+', sans salle indiquée':'',why]})}
  for(const[room,r]of rooms){let sc=r.score+(office?.12:0)-(unknown?.2:0);const why=r.why.concat([officeWhy]);
    if(p.st==='meeting'||p.st==='busy'||p.st==='dnd'){sc+=.15;why.push(teams)}
    else if(p.st==='available'){sc-=.15;why.push(teams+' : la réunion est peut-être finie')}
    else if(p.st==='offline'){sc-=.2;why.push('Teams : hors ligne (ordinateur fermé ?)')}
    add('room',sc,why,room)}
  if(p.st==='offline'&&!cands.length)return out('none',.85,['Teams : hors ligne']);
  // 2. Pause déjeuner
  if(lunch||(p.st==='away'&&t>=705&&t<=840)){const why=[lunch?'Pause déjeuner dans son agenda ('+lunch.s+'–'+lunch.e+')':'Teams : absent à l\'heure du déjeuner',officeWhy];
    if(x.breakRoom)add('break',.45+(office?.12:0)+(lunch?.1:0),why,x.breakRoom);else add('out',.5,why)}
  // 3. Réunion sans salle : en ligne, donc depuis son poste
  if(ev&&ev.k==='meeting'&&!ev.room&&!hint)add(x.desk?'desk':'flex',.5+(office?.12:0)-(unknown?.15:0)+(p.st==='meeting'?.1:0),['« '+ev.t+' » ('+ev.s+'–'+ev.e+') sans salle : réunion en ligne',officeWhy,teams]);
  // 4. Son poste
  if(p.st!=='offline'&&!(p.st==='unknown'&&!office)){let sc=office?.7:.32;if(p.st==='available'||p.st==='busy'||p.st==='dnd')sc+=.05;if(p.st==='meeting'&&!(ev&&!ev.room&&!hint))sc-=.12;if(p.st==='away')sc-=.15;
    if(x.desk)add('desk',sc,[teams,officeWhy,'Poste attribué']);else add('flex',sc-.15,[teams,officeWhy,'Pas de poste attribué'])}
  if(!cands.length)return out('unknown',.2,['Pas assez d\'indices']);
  cands.sort((a,b)=>b.score-a.score);
  const best=cands[0],second=cands[1];let conf=best.score;if(second&&best.score-second.score<.1)conf-=.08;
  return out(best.kind,conf,best.reasons,best.room);
}
/* LOCATE:END */
export { locNorm, matchNames, locLevel, locate };
