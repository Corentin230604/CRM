import * as THREE from 'three';
import './styles.css';
import { createDemoSource } from './demo.js';
import { createLiveSource } from './live.js';
import { matchNames, locate } from './locate.js';
import { toMin, fmt, todayKey, parseKey, addDays, wdOf, weekStart, MONTHS, dayShort, dayLong, uid, nowMin } from './model.js';

const ENV = import.meta.env;
// Sans session : démonstration. Avec « Se connecter avec Microsoft » : la vraie version de l'entreprise.
const LIVE_SRC = createLiveSource();
let SRC = createDemoSource();
let LIVE = false;
const TODAY = todayKey();

/* ---------- helpers ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const snap=(v,s=0.5)=>Math.round(v/s)*s;
const cssVar=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const initials=n=>n.split(/\s+/).map(w=>w[0]).slice(0,2).join('').toUpperCase();
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}},del(k){try{localStorage.removeItem(k)}catch(e){}}};

let DATA=null;
const save=()=>SRC.saveLayout(DATA);

const S={plan:null,me:null,tab:'live',t:635,sel:null,tool:'select',filter:'all',q:'',playing:false,names:true,menu:false,peopleCollapsed:window.innerWidth<860};
{const m=nowMin();S.t=LIVE?m:((m>=480&&m<=1140)?Math.round(m/5)*5:635);}

/* ---------- presence model (simulation de Teams + Outlook) ---------- */
const STATUS={
  available:{label:'Disponible',v:'--ok'},busy:{label:'Occupé',v:'--busy'},meeting:{label:'En réunion',v:'--busy'},
  dnd:{label:'Ne pas déranger',v:'--busy'},away:{label:'Absent',v:'--away'},ooo:{label:'Absent du bureau',v:'--ooo'},offline:{label:'Hors ligne',v:'--off'},unknown:{label:'Non connecté',v:'--off'}};
const userById=id=>DATA.users.find(u=>u.id===id);
const roomById=id=>DATA.rooms.find(r=>r.id===id);
const itemById=id=>DATA.items.find(i=>i.id===id);
const deskOf=u=>DATA.items.find(i=>i.type==='desk'&&i.user===u.id);
const roomAt=(x,z)=>{let best=null;for(const r of DATA.rooms){if(x>=r.x&&x<=r.x+r.w&&z>=r.z&&z<=r.z+r.d){if(!best||r.w*r.d<best.w*best.d)best=r}}return best};
const presence=(u,t)=>SRC.presence(u,t);
function where(u,p){const L=locOf(u);
  if(L.kind==='room'&&roomById(L.room))return{kind:'room',room:L.room};
  if(L.kind==='break'&&roomById(L.room))return{kind:'break',room:L.room};
  if(L.kind==='desk'){const d=deskOf(u);if(d)return{kind:'desk',desk:d.id,room:(roomAt(d.x,d.z)||{}).id}}
  if(L.kind==='flex'||L.kind==='desk')return{kind:'flex'};
  return null;
}
function locLabel(u,p){const L=locOf(u);
  if(L.kind==='away')return p.st==='ooo'?'Congés':'Absent';
  if(L.kind==='remote')return'Télétravail';
  if(L.kind==='none')return p.before&&u.in?('Hors ligne · arrivée habituelle '+u.in):'Hors ligne';
  if(L.kind==='unknown')return'Lieu incertain';
  if(L.kind==='out')return'En pause, sans doute hors du bureau';
  const q=L.level==='Sûr'?'':(L.level==='Probable'?' (probable)':' (supposé)');
  const w=where(u,p);if(w&&w.room){const r=roomById(w.room);return'Au bureau · '+(r?r.name:'')+q}
  return'Au bureau'+q;
}
const evTitle=e=>DATA.settings.agenda==='subject'?e.t:(e.k==='lunch'?'Absent':'Occupé');
const roomBookings=(r,date)=>SRC.roomBookings(r,date||TODAY);
const eventsOf=u=>SRC.eventsOf(u);
const roomNow=(r,t)=>roomBookings(r).find(b=>t>=toMin(b.s)&&t<toMin(b.e));

function roomHints(){
  if(SRC.roomHints)return SRC.roomHints();
  const out=[];
  for(const r of DATA.rooms.filter(r=>r.type==='meeting'))for(const b of roomBookings(r,TODAY))out.push({room:r.id,s:b.s,e:b.e,who:[...new Set([...(b.people||[]),...matchNames(b.t,DATA.users)])]});
  return out;
}
let LOCS=new Map();
function computeLoc(u,hints){
  const p=presence(u,S.t);const br=DATA.rooms.find(r=>r.type==='break'||r.type==='kitchen');
  const L=locate({u,p,t:S.t,events:eventsOf(u),hints:hints||roomHints(),desk:deskOf(u),breakRoom:br&&br.id,roomName:id=>(roomById(id)||{}).name||'une salle'});
  if(DATA.settings.guess==='probable'&&L.conf<.55&&['room','break','desk','flex'].includes(L.kind)){L.kind='unknown';L.reasons.push('Position trop incertaine : masquée (réglage « seulement les probables »)')}
  return L;
}
const locOf=u=>LOCS.get(u.id)||computeLoc(u);
const ONSITE=new Set(['room','break','desk','flex']);
function nextFree(u,t){
  let end=t,changed=true;
  while(changed){changed=false;for(const e of eventsOf(u)){if(e.k==='lunch')continue;if(end>=toMin(e.s)&&end<toMin(e.e)){end=toMin(e.e);changed=true}}}
  return end;
}

/* ---------- three.js scene ---------- */
const stage=$('#stage');
const renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
stage.appendChild(renderer.domElement);
const scene=new THREE.Scene();
const cam=new THREE.OrthographicCamera(-10,10,10,-10,-200,400);
const hemi=new THREE.HemisphereLight(0xffffff,0x9aa39c,0.75);scene.add(hemi);
const sun=new THREE.DirectionalLight(0xffffff,0.62);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);
Object.assign(sun.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:1,far:150});sun.shadow.bias=-0.0008;
scene.add(sun);scene.add(sun.target);
const world=new THREE.Group();scene.add(world);
const avatarLayer=new THREE.Group();scene.add(avatarLayer);
const view={T:new THREE.Vector3(18,0,11.5),az:Math.PI/4,el:0.64,viewH:30,zoom:1,anim:null};

let PAL;
function palette(){
  const dark=window.getComputedStyle(document.documentElement).colorScheme.includes('dark')||cssVar('--panel').toLowerCase()==='#1b211f';
  PAL=dark?{
    bg:0x121715,ground:0x2B302D,out:0x1A1F1C,wall:0x48504C,wallTop:0x6B746F,glass:0x7FA8D6,
    floor:{open:0x4A3F33,meeting:0x2E3B47,office:0x4B3E31,break:0x33432F,reception:0x463A36,kitchen:0x4A4436,wc:0x34404A,phone:0x2E3B47,storage:0x3C3A35,corridor:0x3A352E},
    wood:0x9C7A52,dark:0x151819,chair:0x5A626A,plant:0x5FA35A,pot:0xB0714E,sofa:0x5A6AB8,table:0x2F7591,counter:0xD9D4CB,skin:0xE3B48F,sel:0x7D9BFF,porcelain:0xC9CCCB,metal:0x8A9196,locker:0x4F6273}
  :{
    bg:0xE6EAE6,ground:0xF4F0E9,out:0xDCE2DC,wall:0xFFFFFF,wallTop:0xC9B79C,glass:0x9CC3E6,
    floor:{open:0xE6D3B3,meeting:0xD6E2EC,office:0xE1C9A6,break:0xD3E5CC,reception:0xEADBD2,kitchen:0xEDE3CF,wc:0xDCE6EA,phone:0xD6E2EC,storage:0xDDDAD3,corridor:0xEFE9DF},
    wood:0xCFA673,dark:0x2A2F33,chair:0x3E454D,plant:0x5E9B5A,pot:0xC2795A,sofa:0x5866A8,table:0x2F6E8E,counter:0xFFFFFF,skin:0xE8B994,sel:0x2A4FC6,porcelain:0xF7F7F5,metal:0xB8BEC2,locker:0x7D93A8};
  scene.background=new THREE.Color(PAL.bg);
}
const matCache=new Map();
function mat(color,opts){const k=color+JSON.stringify(opts||{});if(!matCache.has(k))matCache.set(k,new THREE.MeshLambertMaterial(Object.assign({color},opts||{})));return matCache.get(k)}
function box(g,w,h,d,color,x,y,z,opts){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat(color,opts));m.position.set(x,y,z);m.castShadow=!(opts&&opts.transparent);m.receiveShadow=true;g.add(m);return m}
function cyl(g,rt,rb,h,color,x,y,z,seg){const m=new THREE.Mesh(new THREE.CylinderGeometry(rt,rb,h,seg||16),mat(color));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;g.add(m);return m}
function chair(g,x,z,rotY){const c=new THREE.Group();box(c,.48,.07,.48,PAL.chair,0,.46,0);box(c,.48,.46,.06,PAL.chair,0,.72,.22);cyl(c,.04,.04,.4,PAL.dark,0,.24,0,8);cyl(c,.24,.24,.04,PAL.dark,0,.03,0,10);c.position.set(x,0,z);c.rotation.y=rotY;g.add(c);return c}

/* item builders; each returns {group, seats:[{x,z,ry}]} in local coords */
const BUILD={
  desk(g){box(g,1.4,.05,.7,PAL.wood,0,.74,0);box(g,.05,.72,.66,PAL.wood,-.67,.36,0);box(g,.05,.72,.66,PAL.wood,.67,.36,0);box(g,1.3,.4,.03,PAL.wood,0,.5,-.32);
    box(g,.6,.36,.04,PAL.dark,0,1.0,-.2);box(g,.06,.2,.06,PAL.dark,0,.84,-.22);box(g,.42,.02,.14,PAL.dark,0,.775,.08);chair(g,0,.72,0);return[{x:0,z:.72,ry:0}]},
  meeting(g,it){const n=it.seats||6,per=Math.ceil(n/2),L=Math.max(1.8,per*.85),W=1.15;box(g,L,.06,W,PAL.wood,0,.74,0);box(g,.12,.7,.5,PAL.dark,-L/2+.4,.36,0);box(g,.12,.7,.5,PAL.dark,L/2-.4,.36,0);
    box(g,.4,.03,.25,PAL.dark,0,.785,0);const seats=[];for(let i=0;i<per;i++){const x=-L/2+L/per*(i+.5);seats.push({x,z:-W/2-.35,ry:Math.PI});chair(g,x,-W/2-.35,Math.PI);if(seats.length<n){seats.push({x,z:W/2+.35,ry:0});chair(g,x,W/2+.35,0)}}return seats},
  round(g){cyl(g,.55,.55,.05,PAL.wood,0,.74,0,24);cyl(g,.05,.05,.7,PAL.dark,0,.37,0,8);cyl(g,.3,.3,.03,PAL.dark,0,.02,0,16);const seats=[];for(let i=0;i<3;i++){const a=i*Math.PI*2/3+.4,x=Math.sin(a)*.9,z=Math.cos(a)*.9;chair(g,x,z,a);seats.push({x,z,ry:a})}return seats},
  sofa(g){box(g,2,.38,.85,PAL.sofa,0,.22,0);box(g,2,.5,.2,PAL.sofa,0,.55,-.33);box(g,.18,.5,.85,PAL.sofa,-.91,.33,0);box(g,.18,.5,.85,PAL.sofa,.91,.33,0);return[{x:-.45,z:.05,ry:0},{x:.45,z:.05,ry:0}]},
  plant(g){cyl(g,.2,.15,.4,PAL.pot,0,.2,0,12);const s=new THREE.Mesh(new THREE.IcosahedronGeometry(.42,0),mat(PAL.plant));s.position.set(0,.82,0);s.castShadow=true;g.add(s);const s2=new THREE.Mesh(new THREE.IcosahedronGeometry(.28,0),mat(PAL.plant));s2.position.set(.1,1.2,.05);s2.castShadow=true;g.add(s2);return[]},
  pingpong(g){box(g,2.74,.05,1.52,PAL.table,0,.76,0);box(g,2.74,.005,.03,0xffffff,0,.79,0);box(g,.02,.15,1.6,0xeeeeee,0,.86,0);for(const sx of[-1,1])for(const sz of[-1,1])box(g,.06,.74,.06,PAL.dark,sx*1.2,.37,sz*.65);return[]},
  wc(g){box(g,.42,.36,.2,PAL.porcelain,0,.5,-.2);cyl(g,.19,.15,.4,PAL.porcelain,0,.2,.08,16);box(g,.4,.03,.45,PAL.porcelain,0,.41,.08);return[]},
  sink(g){box(g,.56,.1,.42,PAL.porcelain,0,.82,0);cyl(g,.07,.09,.78,PAL.porcelain,0,.39,-.05,10);box(g,.5,.62,.03,PAL.glass,0,1.32,-.2);box(g,.04,.14,.04,PAL.metal,0,.94,-.15);return[]},
  shower(g){box(g,.9,.06,.9,PAL.porcelain,0,.03,0);box(g,.9,1.6,.03,PAL.glass,0,.83,.44,{transparent:true,opacity:.35});box(g,.03,1.6,.9,PAL.glass,.44,.83,0,{transparent:true,opacity:.35});cyl(g,.08,.08,.03,PAL.metal,-.2,1.75,-.3,12);return[]},
  kitchen(g){box(g,2.4,.88,.62,PAL.counter,0,.44,0);box(g,2.44,.05,.66,PAL.wood,0,.905,0);box(g,.5,.02,.38,PAL.metal,-.55,.935,0);box(g,.55,.02,.45,PAL.dark,.55,.935,0);box(g,2.4,.6,.34,PAL.counter,0,1.75,-.14);return[]},
  fridge(g){box(g,.66,1.8,.64,PAL.porcelain,0,.9,0);box(g,.03,.5,.03,PAL.metal,.25,1.15,.33);box(g,.67,.01,.65,PAL.metal,0,1.25,0);return[]},
  printer(g){box(g,.6,.5,.5,PAL.counter,0,.25,0);box(g,.58,.42,.48,PAL.metal,0,.71,0);box(g,.4,.02,.25,PAL.dark,0,.93,.05);return[]},
  lockers(g){box(g,1.8,1.8,.45,PAL.locker,0,.9,0);for(const x of[-.3,.3])box(g,.015,1.76,.46,PAL.dark,x,.9,0);box(g,1.8,.015,.46,PAL.dark,0,.9,0);return[]},
  whiteboard(g){box(g,1.8,1.05,.04,PAL.porcelain,0,1.35,0);box(g,1.86,.04,.08,PAL.metal,0,.82,.02);return[]},
  tv(g){box(g,1.3,.75,.06,PAL.dark,0,1.4,0);box(g,.3,.05,.12,PAL.dark,0,1.0,0);return[]},
  booth(g){box(g,1.1,.04,.4,PAL.wood,0,1.05,-.2);cyl(g,.18,.18,.05,PAL.chair,0,.65,.25,14);cyl(g,.03,.03,.62,PAL.dark,0,.32,.25,6);return[{x:0,z:.25,ry:0}]},
  wall(g,it){const dx=it.x2-it.x,dz=it.z2-it.z,len=Math.max(.1,Math.hypot(dx,dz)),h=it.glass?1.35:1.05,th=Math.atan2(-dz,dx);const o=it.glass?{transparent:true,opacity:.32}:null;
    const m=box(g,len,h,.1,it.glass?PAL.glass:PAL.wall,dx/2,h/2,dz/2,o);m.rotation.y=th;const c=box(g,len+.02,.04,.12,it.glass?PAL.dark:PAL.wallTop,dx/2,h+.02,dz/2);c.rotation.y=th;return[]},
  counter(g){box(g,3,.88,.7,PAL.counter,0,.44,0);box(g,3.04,.05,.74,PAL.wood,0,.905,0);box(g,.35,.42,.32,PAL.dark,-.9,1.14,-.1);box(g,.3,.25,.3,0xB33F3F,.7,1.05,-.1);return[]},
};
const ITEM_LABEL={desk:'Bureau',meeting:'Table de réunion',round:'Table ronde',sofa:'Canapé',plant:'Plante',pingpong:'Ping-pong',counter:'Comptoir café',wc:'WC',sink:'Lavabo',shower:'Douche',kitchen:'Kitchenette',fridge:'Réfrigérateur',printer:'Imprimante',lockers:'Casiers',whiteboard:'Tableau blanc',tv:'Écran',booth:'Tablette d\'appel',wall:'Cloison'};
const ITEM_ORDER=['desk','meeting','round','sofa','plant','lockers','printer','whiteboard','tv','kitchen','counter','fridge','wc','sink','shower','pingpong','booth'];
const ROOM_TYPES={open:'Open space',meeting:'Salle de réunion',office:'Bureau fermé',break:'Salle de pause',kitchen:'Cuisine',wc:'Sanitaires',phone:'Bulle d\'appel',reception:'Accueil',storage:'Local technique',corridor:'Couloir'};
const WALLED={meeting:1,office:1,break:1,kitchen:1,wc:1,phone:1,storage:1};

let pickables=[],itemGroups=new Map(),roomGroups=new Map(),seatsCache=new Map(),selOutline=null,draftMesh=null;
function seatsWorld(it){const loc=seatsCache.get(it.id)||[];const r=it.rot*Math.PI/180,c=Math.cos(r),s=Math.sin(r);return loc.map(p=>({x:it.x+p.x*c+p.z*s,z:it.z-p.x*s+p.z*c,ry:p.ry+r}))}

function wallStyle(type){if(type==='meeting'||type==='phone')return{h:1.35,glass:true};if(type==='break'||type==='kitchen')return{h:.85};return{h:1.05}}
function wallSides(r){return{n:{L:r.w,p:a=>[a,0],horiz:true,inward:1},s:{L:r.w,p:a=>[a,r.d],horiz:true,inward:-1},w:{L:r.d,p:a=>[0,a],horiz:false,inward:1},e:{L:r.d,p:a=>[r.w,a],horiz:false,inward:-1}}}
const DOOR_W=.9;
function doorGaps(r,k,L){return(r.doors||[]).filter(d=>d.side===k).map(d=>{const c=Math.min(L-DOOR_W/2-.05,Math.max(DOOR_W/2+.05,d.at*L));return[c-DOOR_W/2,c+DOOR_W/2]}).sort((a,b)=>a[0]-b[0])}
function buildWalls(g,r){
  if(!WALLED[r.type])return;const st=wallStyle(r.type),h=st.h,t=.1;const col=st.glass?PAL.glass:PAL.wall,o=st.glass?{transparent:true,opacity:.32}:null;
  for(const[k,sd]of Object.entries(wallSides(r))){
    const gaps=doorGaps(r,k,sd.L);let cur=0;const segs=[];
    for(const[a,b]of gaps){if(a>cur)segs.push([cur,a]);cur=Math.max(cur,b)}if(cur<sd.L)segs.push([cur,sd.L]);
    for(const[a,b]of segs){const len=b-a;if(len<.05)continue;const[mx,mz]=sd.p((a+b)/2);const W=sd.horiz?len:t,D=sd.horiz?t:len;
      box(g,W,h,D,col,mx,h/2,mz,o);box(g,W+.02,st.glass?.05:.04,D+.02,st.glass?PAL.dark:PAL.wallTop,mx,h+(st.glass?0:.02),mz)}
    for(const[a]of gaps){const[hx,hz]=sd.p(a);const leaf=new THREE.Group();leaf.position.set(hx,0,hz);
      box(leaf,DOOR_W-.06,h-.04,.04,PAL.wood,(DOOR_W-.06)/2,(h-.04)/2,0);
      leaf.rotation.y=sd.horiz?-sd.inward*1.2:-Math.PI/2+sd.inward*1.2;g.add(leaf)}
  }
}
let bgTex=null,bgSrc=null;
function buildScene(){
  for(const r of DATA.rooms)if(WALLED[r.type]&&!r.doors)r.doors=[{side:'s',at:.5}];
  palette();matCache.clear();
  world.clear();pickables=[];itemGroups.clear();roomGroups.clear();seatsCache.clear();
  const W=DATA.floor.w,D=DATA.floor.d;
  const out=new THREE.Mesh(new THREE.PlaneGeometry(400,400),mat(PAL.out));out.rotation.x=-Math.PI/2;out.position.set(W/2,-.06,D/2);out.receiveShadow=true;world.add(out);
  const ground=box(world,W,.1,D,PAL.ground,W/2,-.05,D/2);ground.userData={kind:'ground'};
  // exterior walls (cutaway: north + west)
  box(world,W+.3,1.9,.3,PAL.wall,W/2,.95,-.15);box(world,.3,1.9,D,PAL.wall,-.15,.95,D/2);
  box(world,W+.3,.06,.32,PAL.wallTop,W/2,1.92,-.15);box(world,.32,.06,D,PAL.wallTop,-.15,1.92,D/2);
  if(DATA.bg&&DATA.bg.src&&S.tab==='edit'){if(bgSrc!==DATA.bg.src){bgTex=new THREE.TextureLoader().load(DATA.bg.src);bgSrc=DATA.bg.src}const bh=DATA.bg.w*DATA.bg.ar;
    const bm=new THREE.Mesh(new THREE.PlaneGeometry(DATA.bg.w,bh),new THREE.MeshBasicMaterial({map:bgTex,transparent:true,opacity:DATA.bg.op,depthWrite:false}));bm.rotation.x=-Math.PI/2;bm.position.set(DATA.bg.x+DATA.bg.w/2,.04,DATA.bg.z+bh/2);bm.renderOrder=3;world.add(bm)}
  if(S.tab==='edit'){const gh=new THREE.GridHelper(Math.max(W,D),Math.max(W,D),PAL.wallTop,PAL.wallTop);gh.position.set(Math.max(W,D)/2,.011,Math.max(W,D)/2);gh.material.opacity=.35;gh.material.transparent=true;world.add(gh)}
  for(const r of DATA.rooms){
    const g=new THREE.Group();g.position.set(r.x,0,r.z);
    const fl=box(g,r.w,.03,r.d,PAL.floor[r.type]||PAL.floor.open,r.w/2,.015,r.d/2);fl.userData={kind:'room',id:r.id};pickables.push(fl);
    buildWalls(g,r);
    world.add(g);roomGroups.set(r.id,g);
  }
  for(const it of DATA.items){
    const g=new THREE.Group();g.position.set(it.x,0,it.z);g.rotation.y=it.rot*Math.PI/180;
    const seats=(BUILD[it.type]||BUILD.plant)(g,it);seatsCache.set(it.id,seats);
    g.traverse(o=>{if(o.isMesh)o.userData={kind:'item',id:it.id}});pickables.push(g);
    world.add(g);itemGroups.set(it.id,g);
  }
  drawSelection();buildRoomLabels();syncAvatars(true);
}
function drawSelection(){
  if(selOutline){world.remove(selOutline);selOutline=null}
  if(!S.sel)return;let b;
  if(S.sel.kind==='room'){const r=roomById(S.sel.id);if(!r)return;b={x0:r.x,z0:r.z,x1:r.x+r.w,z1:r.z+r.d}}
  else{const id=S.sel.kind==='item'?S.sel.id:(S.sel.kind==='person'?(deskOf(userById(S.sel.id))||{}).id:null);const g=itemGroups.get(id);if(!g)return;const bb=new THREE.Box3().setFromObject(g);b={x0:bb.min.x-.1,z0:bb.min.z-.1,x1:bb.max.x+.1,z1:bb.max.z+.1}}
  const pts=[[b.x0,b.z0],[b.x1,b.z0],[b.x1,b.z1],[b.x0,b.z1]].map(([x,z])=>new THREE.Vector3(x,.06,z));
  selOutline=new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineBasicMaterial({color:PAL.sel}));world.add(selOutline);
}

/* avatars */
const avatars=new Map(); // userId -> {g, ring, dot, target, visible}
function makeAvatar(u){
  const g=new THREE.Group();const col=new THREE.Color(u.color);
  const body=new THREE.Mesh(new THREE.CylinderGeometry(.19,.25,.56,14),new THREE.MeshLambertMaterial({color:col.getHex(),transparent:true}));body.position.y=.76;body.castShadow=true;g.add(body);
  const head=new THREE.Mesh(new THREE.SphereGeometry(.16,16,12),new THREE.MeshLambertMaterial({color:PAL.skin,transparent:true}));head.position.y=1.2;head.castShadow=true;g.add(head);
  const hair=new THREE.Mesh(new THREE.SphereGeometry(.165,16,8,0,Math.PI*2,0,Math.PI/2.2),new THREE.MeshLambertMaterial({color:new THREE.Color(u.color).multiplyScalar(.45).getHex(),transparent:true}));hair.position.y=1.22;g.add(hair);
  const dot=new THREE.Mesh(new THREE.SphereGeometry(.075,12,8),new THREE.MeshBasicMaterial({color:0x2e9e5b}));dot.position.y=1.55;g.add(dot);
  const ring=new THREE.Mesh(new THREE.RingGeometry(.38,.48,28),new THREE.MeshBasicMaterial({color:0x2e9e5b,transparent:true,opacity:.85,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=.035;g.add(ring);
  g.traverse(o=>{if(o.isMesh)o.userData={kind:'person',id:u.id}});
  avatarLayer.add(g);return{g,dot,ring,body,head,hair,target:null,ry:0,on:false};
}
const pucks=new Map();
function statusHex(st){return new THREE.Color(cssVar(STATUS[st].v)||'#999').getHex()}
let placed=new Map(); // userId -> {x,z,ry,onsite}
function computePlacements(){
  placed=new Map();LOCS=new Map();const hints=roomHints();const t=S.t;const roomUse=new Map(),breakUse=new Map();
  for(const u of DATA.users){
    const p=presence(u,t);const L=computeLoc(u,hints);LOCS.set(u.id,L);const w=where(u,p);
    if(!w){const d=deskOf(u);if(d){const s=seatsWorld(d)[0];if(s)placed.set(u.id,{x:s.x,z:s.z,ry:s.ry,onsite:false,p,L})}continue}
    let spot=null;
    if(w.kind==='desk'){const d=itemById(w.desk);spot=seatsWorld(d)[0]}
    else if(w.kind==='room'||w.kind==='break'){
      const r=roomById(w.room);const tables=DATA.items.filter(i=>(i.type==='meeting'||i.type==='round'||i.type==='sofa'||i.type==='booth')&&roomAt(i.x,i.z)===r);
      const seats=tables.flatMap(seatsWorld);const used=(w.kind==='room'?roomUse:breakUse);const n=used.get(r.id)||0;used.set(r.id,n+1);
      spot=seats[n]||{x:r.x+1+(n%Math.max(1,r.w-2)),z:r.z+r.d-1.2-Math.floor(n/Math.max(1,r.w-2)),ry:0};
    }
    if(!spot){const r=DATA.rooms.find(r=>r.type==='open')||{x:1,z:1};spot={x:r.x+1,z:r.z+1,ry:0}}
    placed.set(u.id,{x:spot.x,z:spot.z,ry:spot.ry,onsite:true,p,L});
  }
}
function syncAvatars(instant){
  computePlacements();
  for(const[id,a]of avatars){if(!userById(id)){avatarLayer.remove(a.g);avatars.delete(id)}}
  for(const[id,pk]of pucks){avatarLayer.remove(pk);pucks.delete(id)}
  for(const u of DATA.users){
    const pl=placed.get(u.id);let a=avatars.get(u.id);
    if(instant&&a){avatarLayer.remove(a.g);avatars.delete(u.id);a=null}
    if(pl&&pl.onsite){
      if(!a){a=makeAvatar(u);avatars.set(u.id,a);a.g.position.set(pl.x,0,pl.z);a.g.rotation.y=pl.ry}
      a.target={x:pl.x,z:pl.z,ry:pl.ry};a.on=true;a.g.visible=true;
      const hx=statusHex(pl.p.st);a.dot.material.color.setHex(hx);a.ring.material.color.setHex(hx);
      const low=pl.L&&pl.L.conf<.55;for(const m of[a.body,a.head,a.hair])m.material.opacity=low?.42:1;a.ring.material.opacity=low?.3:.85;
      const hl=S.sel&&S.sel.kind==='person'&&S.sel.id===u.id;a.ring.scale.setScalar(hl?1.35:1);
    }else{
      if(a){a.on=false;a.g.visible=false}
      if(pl){const pk=new THREE.Mesh(new THREE.SphereGeometry(.11,12,8),new THREE.MeshBasicMaterial({color:statusHex(pl.p.st),transparent:true,opacity:pl.L&&pl.L.kind==='remote'?.95:.45}));pk.position.set(pl.x,.98,pl.z);pk.userData={kind:'person',id:u.id};avatarLayer.add(pk);pucks.set(u.id,pk)}
    }
  }
  buildNameLabels();
}

/* ---------- labels overlay ---------- */
const labelsEl=$('#labels');let roomLabels=[],nameLabels=[];
function buildRoomLabels(){
  roomLabels.forEach(l=>l.el.remove());roomLabels=[];
  for(const r of DATA.rooms){const el=document.createElement('div');el.className='rl';if(r.type==='meeting')el.dataset.room=r.id;labelsEl.appendChild(el);roomLabels.push({el,r})}
  updateRoomLabels();
}
function updateRoomLabels(){
  for(const{el,r}of roomLabels){
    let sub='',cls='rl';
    if(r.type==='meeting'){const b=roomNow(r,S.t);if(b){cls+=' busy';sub='Occupée · '+esc(evTitle(b))+' → '+b.e}else{cls+=' free';const nx=roomBookings(r).find(x=>toMin(x.s)>S.t);sub='Libre'+(nx?' jusqu\'à '+nx.s:' toute la journée')}}
    else{const desks=DATA.items.filter(i=>i.type==='desk'&&roomAt(i.x,i.z)===r);const here=[...placed.values()].filter(p=>p.onsite&&roomAt(p.x,p.z)===r).length;sub=desks.length?here+' présent'+(here>1?'s':'')+' · '+desks.length+' poste'+(desks.length>1?'s':''):(here?here+' présent'+(here>1?'s':''):ROOM_TYPES[r.type])}
    if(r.type==='meeting'&&S.tab==='live')cls+=' click';el.className=cls;el.innerHTML='<b>'+esc(r.name)+'</b><span class="s">'+sub+'</span>'+(r.type==='meeting'&&S.tab==='live'?'<span class="cta">Planning et réservation</span>':'');
  }
}
function buildNameLabels(){
  nameLabels.forEach(l=>l.el.remove());nameLabels=[];
  if(!S.names||S.tab==='edit')return;
  for(const u of DATA.users){const pl=placed.get(u.id);if(!pl)continue;
    const el=document.createElement('div');el.className='nl'+(pl.onsite?(pl.L&&pl.L.conf<.55?' guess':''):' remote');
    el.innerHTML='<span class="dot" style="background:var('+STATUS[pl.p.st].v+')"></span>'+esc(u.name.split(' ')[0])+(pl.onsite?(pl.L&&pl.L.conf<.55?' <span class="q">?</span>':''):' · '+({remote:'télétravail',away:pl.p.st==='ooo'?'congés':'absent',none:'hors ligne',unknown:'lieu ?',out:'en pause'}[pl.L&&pl.L.kind]||'absent'));
    labelsEl.appendChild(el);nameLabels.push({el,u})}
}
labelsEl.addEventListener('click',e=>{const l=e.target.closest('[data-room]');if(l&&S.tab==='live')openPlanning(l.dataset.room)});
const v3=new THREE.Vector3();
function project(x,y,z){v3.set(x,y,z).project(cam);const r=renderer.domElement;return{x:(v3.x+1)/2*r.clientWidth,y:(1-v3.y)/2*r.clientHeight}}
function positionLabels(){
  const W=renderer.domElement.clientWidth,H=renderer.domElement.clientHeight;
  for(const{el,r}of roomLabels){const p=project(r.x+r.w/2,r.type==='meeting'?1.9:1.6,r.z+.6);el.style.left=p.x+'px';el.style.top=p.y+'px';el.style.display=(p.x<-80||p.x>W+80||p.y<0||p.y>H+40||(view.zoom<(S.fitZoom||1)*(W<860?1.3:.7)))?'none':''}
  for(const{el,u}of nameLabels){const a=avatars.get(u.id);let x,y,z;if(a&&a.on){x=a.g.position.x;z=a.g.position.z;y=1.75}else{const pl=placed.get(u.id);if(!pl)continue;x=pl.x;z=pl.z;y=1.25}
    const p=project(x,y,z);el.style.left=p.x+'px';el.style.top=p.y+'px';el.style.display=(view.zoom<(S.fitZoom||1)*1.45||p.x<-40||p.x>W+40||p.y<0||p.y>H)?'none':''}
}

/* ---------- camera ---------- */
function applyCam(){
  const w=stage.clientWidth||1,h=stage.clientHeight||1,a=w/h,vh=view.viewH;
  cam.left=-vh*a/2;cam.right=vh*a/2;cam.top=vh/2;cam.bottom=-vh/2;cam.zoom=view.zoom;
  const d=80;cam.position.set(view.T.x+d*Math.cos(view.el)*Math.sin(view.az),d*Math.sin(view.el),view.T.z+d*Math.cos(view.el)*Math.cos(view.az));
  cam.lookAt(view.T);cam.updateProjectionMatrix();
  sun.position.set(view.T.x+18,34,view.T.z+12);sun.target.position.copy(view.T);
}
function fitView(animate){
  const W=DATA.floor.w,D=DATA.floor.d,sw=stage.clientWidth||1,sh=stage.clientHeight||1;
  const sideL=sw>860?332:0,sideR=(sw>860&&S.sel)?356:0,free=Math.max(200,sw-sideL-sideR-24);
  const span=(W+D)*.72,vh=Math.max((W+D)*.44,span*sh/free);
  const zoom=view.viewH/vh;S.fitZoom=zoom;
  const wpp=vh/sh,shift=(sideL-sideR)/2*wpp;
  const T=new THREE.Vector3(W/2-Math.cos(view.az)*shift,0,D/2+Math.sin(view.az)*shift);
  if(animate)flyTo(T,zoom);else{view.T.copy(T);view.zoom=zoom}
}
function flyTo(T,zoom,az){view.anim={t0:performance.now(),dur:650,fT:view.T.clone(),tT:T.clone(),fZ:view.zoom,tZ:zoom??view.zoom,fA:view.az,tA:az??view.az}}
function stepAnim(now){
  const a=view.anim;if(!a)return;let k=Math.min(1,(now-a.t0)/a.dur);k=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;
  view.T.lerpVectors(a.fT,a.tT,k);view.zoom=a.fZ+(a.tZ-a.fZ)*k;view.az=a.fA+(a.tA-a.fA)*k;if(k>=1)view.anim=null;
}
function resize(){const w=stage.clientWidth,h=stage.clientHeight;renderer.setSize(w,h);applyCam()}
new ResizeObserver(resize).observe(stage);

/* ---------- interaction ---------- */
const ray=new THREE.Raycaster(),ndc=new THREE.Vector2(),groundPlane=new THREE.Plane(new THREE.Vector3(0,1,0),0);
function setNdc(e){const r=renderer.domElement.getBoundingClientRect();ndc.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(ndc,cam)}
function groundAt(e){setNdc(e);const p=new THREE.Vector3();return ray.ray.intersectPlane(groundPlane,p)?p:null}
function pick(e){setNdc(e);const objs=S.tab==='edit'?pickables:[...avatarLayer.children,...pickables];const hits=ray.intersectObjects(objs,true);
  for(const h of hits){let o=h.object;while(o&&!(o.userData&&o.userData.kind))o=o.parent;if(o&&o.userData.kind&&o.userData.kind!=='ground')return o.userData}return null}
let drag=null;const pointers=new Map();
const el=renderer.domElement;
el.addEventListener('contextmenu',e=>e.preventDefault());
el.addEventListener('pointerdown',e=>{
  el.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(pointers.size===2){const[a,b]=[...pointers.values()];drag={mode:'pinch',d0:Math.hypot(a.x-b.x,a.y-b.y),z0:view.zoom};return}
  const g=groundAt(e);const start={x:e.clientX,y:e.clientY};view.anim=null;
  if(e.button===2||e.shiftKey&&S.tab!=='edit'){drag={mode:'rotate',start,az0:view.az};return}
  if(S.tab==='edit'){
    if(S.tool==='room'&&g){drag={mode:'room',start,a:{x:snap(g.x,1),z:snap(g.z,1)},b:null};return}
    if(S.tool==='wall'&&g){drag={mode:'wall',start,a:{x:snap(g.x,.5),z:snap(g.z,.5)},b:null};return}
    if(S.tool==='select'){const hit=pick(e);
      if(hit&&(hit.kind==='item'||hit.kind==='room')&&g){
        const obj=hit.kind==='item'?itemById(hit.id):roomById(hit.id);
        const inside=hit.kind==='room'?DATA.items.filter(i=>i.x>=obj.x&&i.x<=obj.x+obj.w&&i.z>=obj.z&&i.z<=obj.z+obj.d).map(i=>({i,dx:i.x-obj.x,dz:i.z-obj.z,dx2:(i.x2||0)-obj.x,dz2:(i.z2||0)-obj.z})):[];
        drag={mode:'move',start,hit,obj,off:{x:obj.x-g.x,z:obj.z-g.z},inside,moved:false};return}
    }
  }
  drag={mode:'pan',start,grab:g};
});
el.addEventListener('pointermove',e=>{
  if(pointers.has(e.pointerId))pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(!drag){hover(e);return}
  const dist=Math.hypot(e.clientX-drag.start?.x,e.clientY-drag.start?.y);
  if(drag.mode==='pinch'){const[a,b]=[...pointers.values()];if(a&&b){view.zoom=Math.min(5,Math.max(.35,drag.z0*Math.hypot(a.x-b.x,a.y-b.y)/drag.d0));applyCam()}return}
  if(drag.mode==='rotate'){view.az=drag.az0-(e.clientX-drag.start.x)*.008;applyCam();return}
  if(drag.mode==='pan'&&drag.grab){const g=groundAt(e);if(g){view.T.x+=drag.grab.x-g.x;view.T.z+=drag.grab.z-g.z;applyCam()}return}
  if(drag.mode==='room'){const g=groundAt(e);if(!g)return;drag.b={x:snap(g.x,1),z:snap(g.z,1)};drawDraft(drag.a,drag.b);return}
  if(drag.mode==='wall'){const g=groundAt(e);if(!g)return;const bx=snap(g.x,.5),bz=snap(g.z,.5);drag.b=Math.abs(bx-drag.a.x)>=Math.abs(bz-drag.a.z)?{x:bx,z:drag.a.z}:{x:drag.a.x,z:bz};drawDraft(drag.a,drag.b);return}
  if(drag.mode==='move'&&dist>3){const g=groundAt(e);if(!g)return;drag.moved=true;
    const step=drag.hit.kind==='room'?1:.25;const nx=snap(g.x+drag.off.x,step),nz=snap(g.z+drag.off.z,step);
    if(drag.hit.kind==='item'){if(drag.obj.type==='wall'){drag.obj.x2+=nx-drag.obj.x;drag.obj.z2+=nz-drag.obj.z}drag.obj.x=nx;drag.obj.z=nz;itemGroups.get(drag.obj.id).position.set(nx,0,nz)}
    else{drag.obj.x=nx;drag.obj.z=nz;roomGroups.get(drag.obj.id).position.set(nx,0,nz);for(const c of drag.inside){c.i.x=nx+c.dx;c.i.z=nz+c.dz;if(c.i.type==='wall'){c.i.x2=nx+c.dx2;c.i.z2=nz+c.dz2}itemGroups.get(c.i.id).position.set(c.i.x,0,c.i.z)}}
    if(selOutline){world.remove(selOutline);selOutline=null}
  }
});
function endPointer(e){
  pointers.delete(e.pointerId);if(!drag)return;const d=drag;drag=null;
  const moved=d.start?Math.hypot(e.clientX-d.start.x,e.clientY-d.start.y)>4:true;
  if(d.mode==='room'){if(draftMesh){world.remove(draftMesh);draftMesh=null}
    if(d.b){const x=Math.min(d.a.x,d.b.x),z=Math.min(d.a.z,d.b.z),w=Math.abs(d.a.x-d.b.x),dd=Math.abs(d.a.z-d.b.z);
      if(w>=2&&dd>=2){const r={id:uid('r'),name:'Nouvelle salle',type:'meeting',x,z,w,d:dd,capacity:6,mailbox:'',doors:[{side:'s',at:.5}]};DATA.rooms.push(r);S.sel={kind:'room',id:r.id};S.tool='select';changed()}}
    return}
  if(d.mode==='wall'){if(draftMesh){world.remove(draftMesh);draftMesh=null}
    if(d.b&&Math.hypot(d.b.x-d.a.x,d.b.z-d.a.z)>=.5){DATA.items.push({id:uid('w'),type:'wall',x:d.a.x,z:d.a.z,x2:d.b.x,z2:d.b.z,rot:0,glass:false});changed()}
    return}
  if(d.mode==='move'){if(d.moved){changed()}else{S.sel={kind:d.hit.kind,id:d.hit.id};render();drawSelection()}return}
  if(d.mode==='pan'&&!moved){click(e)}
}
el.addEventListener('pointerup',endPointer);el.addEventListener('pointercancel',endPointer);
el.addEventListener('wheel',e=>{e.preventDefault();view.anim=null;view.zoom=Math.min(5,Math.max(.35,view.zoom*Math.pow(1.0015,-e.deltaY)));applyCam()},{passive:false});
function click(e){
  if(S.tab==='edit'&&S.tool.startsWith('place:')){const g=groundAt(e);if(!g)return;const type=S.tool.slice(6);
    const it={id:uid('i'),type,x:snap(g.x,.25),z:snap(g.z,.25),rot:0};if(type==='meeting')it.seats=6;if(type==='desk')it.user=null;
    DATA.items.push(it);S.sel={kind:'item',id:it.id};changed();return}
  if(S.tab==='edit'&&S.tool.startsWith('tpl:')){const g=groundAt(e);if(g)placeTemplate(S.tool.slice(4),g);return}
  if(S.tab==='edit'&&S.tool==='door'){const g=groundAt(e);if(g)toggleDoor(g);return}
  const hit=pick(e);
  if(!hit){S.sel=null;render();drawSelection();return}
  if(S.tab==='edit'){S.sel={kind:hit.kind==='person'?'item':hit.kind,id:hit.id};render();drawSelection();return}
  if(hit.kind==='person')selectPerson(hit.id,false);
  else if(hit.kind==='item'){const it=itemById(hit.id);if(it.type==='desk'&&it.user)selectPerson(it.user,false);else if(it.type==='desk')S.sel={kind:'item',id:it.id};else{const r=roomAt(it.x,it.z);if(r&&r.type==='meeting'){openPlanning(r.id);return}S.sel=r?{kind:'room',id:r.id}:null}render();drawSelection()}
  else if(hit.kind==='room'){const r=roomById(hit.id);if(r.type==='meeting'){openPlanning(r.id);return}S.sel={kind:'room',id:hit.id};render();drawSelection()}
}
const ROOM_TPL={
  meet4:{label:'Salle de réunion · 4 pl.',icon:'meeting',room:{type:'meeting',name:'Salle de réunion',w:5,d:4,capacity:4},items:[['meeting',2.5,2,0,{seats:4}],['tv',2.5,.12,0],['plant',4.45,.55,0]]},
  meet8:{label:'Salle de réunion · 8 pl.',icon:'meeting',room:{type:'meeting',name:'Grande salle',w:8,d:6,capacity:8},items:[['meeting',4,3,0,{seats:8}],['tv',4,.12,0],['whiteboard',.12,3,90],['plant',7.45,.55,0]]},
  open8:{label:'Open space · 8 postes',icon:'desk',room:{type:'open',name:'Open space',w:12,d:8},items:[['desk',3.3,3,180],['desk',4.8,3,180],['desk',3.3,3.7,0],['desk',4.8,3.7,0],['desk',7.8,3,180],['desk',9.3,3,180],['desk',7.8,3.7,0],['desk',9.3,3.7,0],['printer',11.3,6.8,270],['lockers',6.3,7.6,180],['plant',.6,.6,0],['plant',11.4,.6,0]]},
  office:{label:'Bureau individuel',icon:'desk',room:{type:'office',name:'Bureau',w:4,d:4},items:[['desk',2,1.3,0],['plant',3.45,.55,0],['lockers',.35,2.5,90]]},
  wc:{label:'Sanitaires',icon:'wc',room:{type:'wc',name:'Sanitaires',w:5,d:4},items:[['wc',.85,.4,0],['wc',2.5,.4,0],['wc',4.15,.4,0],['wall',1.67,0,0,{x2:1.67,z2:1.6}],['wall',3.33,0,0,{x2:3.33,z2:1.6}],['sink',.9,3.6,180],['sink',4.1,3.6,180]]},
  kitchen:{label:'Cuisine',icon:'kitchen',room:{type:'kitchen',name:'Cuisine',w:5,d:4},items:[['kitchen',1.9,.35,0],['fridge',4.3,.4,0],['round',2.5,2.4,0]]},
  break:{label:'Salle de pause',icon:'sofa',room:{type:'break',name:'Salle de pause',w:8,d:6},items:[['sofa',1.6,5.45,180],['round',2.6,2.3,0],['round',5.4,2.3,0],['counter',6.3,5.5,180],['tv',4,.12,0],['plant',7.45,.55,0]]},
  phone:{label:'Bulle d\'appel',icon:'booth',room:{type:'phone',name:'Bulle',w:2,d:2},items:[['booth',1,.6,0]]},
};
function placeTemplate(key,g){
  const T=ROOM_TPL[key];if(!T)return;const x=snap(g.x-T.room.w/2,1),z=snap(g.z-T.room.d/2,1);
  const same=DATA.rooms.filter(r=>r.name===T.room.name||r.name.startsWith(T.room.name+' ')).length;
  const r={id:uid('r'),...T.room,name:T.room.name+(same?' '+(same+1):''),x,z};if(WALLED[r.type])r.doors=[{side:'s',at:.5}];if(r.type==='meeting')r.mailbox='';
  DATA.rooms.push(r);
  for(const[type,ix,iz,rot,extra]of T.items){const it={id:uid('i'),type,x:x+ix,z:z+iz,rot};if(type==='wall'){it.x2=x+extra.x2;it.z2=z+extra.z2;it.glass=false}else if(extra)Object.assign(it,extra);if(type==='desk')it.user=null;DATA.items.push(it)}
  S.sel={kind:'room',id:r.id};changed();
}
function nearestWall(g){let best=null;
  for(const r of DATA.rooms){if(!WALLED[r.type])continue;
    for(const[side,along,dist,L]of[['n',g.x-r.x,Math.abs(g.z-r.z),r.w],['s',g.x-r.x,Math.abs(g.z-(r.z+r.d)),r.w],['w',g.z-r.z,Math.abs(g.x-r.x),r.d],['e',g.z-r.z,Math.abs(g.x-(r.x+r.w)),r.d]]){
      if(along<.3||along>L-.3||dist>.7)continue;if(!best||dist<best.dist)best={r,side,along,L,dist}}}
  return best;
}
function toggleDoor(g){const w=nearestWall(g);if(!w){toast('Cliquez sur le mur d\'une pièce fermée (salle, bureau, sanitaires…).');return}
  const r=w.r;r.doors=r.doors||[];const i=r.doors.findIndex(d=>d.side===w.side&&Math.abs(d.at*w.L-w.along)<.8);
  if(i>=0){r.doors.splice(i,1);toast('Porte retirée : '+r.name+'.')}else{r.doors.push({side:w.side,at:Math.round(w.along/w.L*100)/100});toast('Porte ajoutée : '+r.name+'.')}
  changed();
}
function dupSel(){
  if(!S.sel)return;
  if(S.sel.kind==='room'){const r=roomById(S.sel.id);if(!r)return;const off=r.w+1;const nr={...JSON.parse(JSON.stringify(r)),id:uid('r'),x:r.x+off,name:r.name+' (copie)'};if(nr.mailbox)nr.mailbox='';delete nr.outlookName;DATA.rooms.push(nr);
    for(const i of DATA.items.filter(i=>i.x>=r.x&&i.x<=r.x+r.w&&i.z>=r.z&&i.z<=r.z+r.d)){const c={...i,id:uid('i'),x:i.x+off};if(c.type==='wall')c.x2=i.x2+off;if(c.type==='desk')c.user=null;DATA.items.push(c)}
    S.sel={kind:'room',id:nr.id}}
  else if(S.sel.kind==='item'){const i=itemById(S.sel.id);if(!i)return;const c={...i,id:uid('i'),x:i.x+1};if(c.type==='wall')c.x2=i.x2+1;if(c.type==='desk')c.user=null;DATA.items.push(c);S.sel={kind:'item',id:c.id}}
  changed();
}
function nudge(dx,dz){
  if(!S.sel)return;
  if(S.sel.kind==='item'){const i=itemById(S.sel.id);if(!i)return;i.x+=dx;i.z+=dz;if(i.type==='wall'){i.x2+=dx;i.z2+=dz}}
  else if(S.sel.kind==='room'){const r=roomById(S.sel.id);if(!r)return;for(const i of DATA.items.filter(i=>i.x>=r.x&&i.x<=r.x+r.w&&i.z>=r.z&&i.z<=r.z+r.d)){i.x+=dx;i.z+=dz;if(i.type==='wall'){i.x2+=dx;i.z2+=dz}}r.x+=dx;r.z+=dz}
  changed();
}
function importBg(file){
  const fr=new FileReader();fr.onload=()=>{const img=new Image();img.onload=()=>{const k=Math.min(1,1800/Math.max(img.width,img.height));const c=document.createElement('canvas');c.width=Math.round(img.width*k);c.height=Math.round(img.height*k);
    const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.drawImage(img,0,0,c.width,c.height);
    DATA.bg={src:c.toDataURL('image/jpeg',.82),ar:img.height/img.width,x:0,z:0,w:DATA.floor.w,op:.6};changed();toast('Plan importé. Indiquez sa largeur réelle pour le mettre à l\'échelle, puis décalquez les pièces.')};
    img.onerror=()=>toast('Image illisible. Utilisez un fichier JPG ou PNG.');img.src=fr.result};
  fr.readAsDataURL(file);
}
function toast(msg){const t=$('#toast');if(!t)return;t.textContent=msg;t.hidden=false;clearTimeout(toast.tm);toast.tm=setTimeout(()=>{t.hidden=true},5000)}
function drawDraft(a,b){if(draftMesh)world.remove(draftMesh);const x=Math.min(a.x,b.x),z=Math.min(a.z,b.z),w=Math.max(.1,Math.abs(a.x-b.x)),d=Math.max(.1,Math.abs(a.z-b.z));
  draftMesh=new THREE.Mesh(new THREE.BoxGeometry(w,.05,d),new THREE.MeshBasicMaterial({color:PAL.sel,transparent:true,opacity:.35}));draftMesh.position.set(x+w/2,.04,z+d/2);world.add(draftMesh)}
const tip=$('#tip');let hoverT=0;
function hover(e){
  const now=performance.now();if(now-hoverT<40)return;hoverT=now;
  const hit=pick(e);let txt='';
  if(hit){if(hit.kind==='person'){const u=userById(hit.id);const p=presence(u,S.t);txt=u.name+' · '+STATUS[p.st].label+' · '+locLabel(u,p)}
    else if(hit.kind==='item'){const it=itemById(hit.id);if(it.type==='desk'){const u=it.user&&userById(it.user);txt=u?('Bureau de '+u.name):'Bureau libre (flex)'}else txt=ITEM_LABEL[it.type]||''}
    else if(hit.kind==='room'){const r=roomById(hit.id);txt=r.name+' · '+(r.type==='meeting'&&S.tab==='live'?'cliquer pour ouvrir le planning':ROOM_TYPES[r.type])}}
  el.style.cursor=hit?'pointer':(S.tab==='edit'&&S.tool!=='select'?'crosshair':'grab');
  if(!txt){tip.hidden=true;return}
  const r=$('#main').getBoundingClientRect();tip.hidden=false;tip.textContent=txt;tip.style.left=(e.clientX-r.left)+'px';tip.style.top=(e.clientY-r.top)+'px';
}
el.addEventListener('pointerleave',()=>{tip.hidden=true});
document.addEventListener('keydown',e=>{
  if(e.target.matches('input,select,textarea'))return;
  if(S.plan&&e.key==='Escape'){if(S.plan.sel||S.plan.view){S.plan.sel=null;S.plan.view=null}else S.plan=null;render();return}
  if(S.tab==='edit'){
    if(e.key==='Escape'){S.tool='select';S.sel=null;render();drawSelection()}
    if((e.key==='Delete'||e.key==='Backspace')&&S.sel){deleteSel();e.preventDefault()}
    if((e.key==='r'||e.key==='R')&&S.sel&&S.sel.kind==='item'){rotateSel()}
    if((e.key==='d'||e.key==='D')&&S.sel){dupSel();return}
    const arrows={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]};if(arrows[e.key]&&S.sel){const k=e.shiftKey?1:.5;nudge(arrows[e.key][0]*k,arrows[e.key][1]*k);e.preventDefault();return}
    const k=TOOLS.find(t=>t.key&&t.key.toLowerCase()===e.key.toLowerCase());if(k&&!(e.key==='r'||e.key==='R')){S.tool=k.id;render()}
  }else if(e.key==='Escape'){S.sel=null;render();drawSelection()}
});

function selectPerson(id,fly){
  S.sel={kind:'person',id};render();drawSelection();syncAvatars(false);
  if(fly){const pl=placed.get(id);if(pl)flyTo(new THREE.Vector3(pl.x,0,pl.z),Math.max(view.zoom,2.2))}
}
function deleteSel(){
  if(!S.sel)return;
  if(S.sel.kind==='item')DATA.items=DATA.items.filter(i=>i.id!==S.sel.id);
  if(S.sel.kind==='room')DATA.rooms=DATA.rooms.filter(r=>r.id!==S.sel.id);
  S.sel=null;changed();
}
function rotateSel(){const it=itemById(S.sel.id);if(!it)return;if(it.type==='wall'){const dx=it.x2-it.x,dz=it.z2-it.z;it.x2=it.x+dz;it.z2=it.z-dx}else it.rot=(it.rot+90)%360;changed()}
function changed(){save();buildScene();render()}

/* ---------- UI rendering ---------- */
const ICON={
  select:'<path d="M4 3l11 6-5 1.5L8 16z" fill="currentColor"/>',
  room:'<rect x="3" y="4" width="13" height="11" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="2.5 2"/>',
  desk:'<rect x="3" y="7" width="13" height="3" rx=".6" fill="currentColor"/><path d="M5 10v5M14 10v5" stroke="currentColor" stroke-width="1.6"/><rect x="8" y="3.5" width="4" height="3" rx=".4" fill="currentColor"/>',
  meeting:'<rect x="4" y="7" width="11" height="5" rx="1" fill="currentColor"/><circle cx="6" cy="4.5" r="1.3" fill="currentColor"/><circle cx="13" cy="4.5" r="1.3" fill="currentColor"/><circle cx="6" cy="14.5" r="1.3" fill="currentColor"/><circle cx="13" cy="14.5" r="1.3" fill="currentColor"/>',
  round:'<circle cx="9.5" cy="9.5" r="4" fill="currentColor"/><circle cx="9.5" cy="3" r="1.3" fill="currentColor"/><circle cx="3.5" cy="13" r="1.3" fill="currentColor"/><circle cx="15.5" cy="13" r="1.3" fill="currentColor"/>',
  sofa:'<path d="M3 9h13v5H3zM4 6h11v3H4z" fill="currentColor"/>',
  plant:'<path d="M7 12h5l-1 4H8z" fill="currentColor"/><circle cx="9.5" cy="7" r="4" fill="currentColor"/>',
  pingpong:'<rect x="2.5" y="6" width="14" height="7" rx=".6" fill="currentColor"/><path d="M9.5 5v9" stroke="var(--panel)" stroke-width="1.2"/>',
  counter:'<rect x="2.5" y="8" width="14" height="7" fill="currentColor"/><rect x="4" y="4" width="3" height="4" fill="currentColor"/>',
  wall:'<path d="M3 15L16 4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
  door:'<path d="M4 16V3h7v13" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M11 3l4 2v11l-4-1z" fill="currentColor"/>',
  wc:'<rect x="6" y="2.5" width="7" height="4" rx="1" fill="currentColor"/><ellipse cx="9.5" cy="11.5" rx="4" ry="4.5" fill="currentColor"/>',
  sink:'<rect x="3" y="7" width="13" height="5" rx="2.5" fill="currentColor"/><path d="M9.5 3v4" stroke="currentColor" stroke-width="1.6"/>',
  shower:'<circle cx="7" cy="5" r="2.5" fill="currentColor"/><path d="M9 7l5 5M7 9l1 2M10 7l2 1M5 10l1 3M12 10l2 3" stroke="currentColor" stroke-width="1.2"/>',
  kitchen:'<rect x="2.5" y="8" width="14" height="8" fill="currentColor"/><circle cx="12" cy="5" r="1.6" fill="currentColor"/><circle cx="6" cy="5" r="1.6" fill="currentColor"/>',
  fridge:'<rect x="5" y="2" width="9" height="15" rx="1" fill="currentColor"/><path d="M5 8h9" stroke="var(--panel)" stroke-width="1"/>',
  printer:'<rect x="3" y="7" width="13" height="6" rx="1" fill="currentColor"/><rect x="6" y="3" width="7" height="4" fill="currentColor"/><rect x="6" y="12" width="7" height="4" fill="none" stroke="currentColor" stroke-width="1.2"/>',
  lockers:'<rect x="2.5" y="3" width="14" height="13" fill="currentColor"/><path d="M7 3v13M12 3v13" stroke="var(--panel)" stroke-width="1"/>',
  whiteboard:'<rect x="2" y="3" width="15" height="10" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M5 16l2-3M14 16l-2-3" stroke="currentColor" stroke-width="1.4"/>',
  tv:'<rect x="2" y="3.5" width="15" height="9.5" rx="1" fill="currentColor"/><path d="M7 16h5" stroke="currentColor" stroke-width="1.6"/>',
  booth:'<rect x="4" y="2.5" width="11" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="9.5" cy="10" r="2" fill="currentColor"/>',
  image:'<rect x="2.5" y="3.5" width="14" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M4 14l4-5 3 3 2-2 3 4" fill="none" stroke="currentColor" stroke-width="1.4"/>',
};
const svg=(k,cls)=>'<svg viewBox="0 0 19 19" aria-hidden="true"'+(cls?' class="'+cls+'"':'')+'>'+(ICON[k]||'')+'</svg>';
const TOOLS=[{id:'select',label:'Sélectionner / déplacer',icon:'select',key:'V'},{id:'room',label:'Dessiner une pièce',icon:'room',key:'P'},{id:'wall',label:'Cloison',icon:'wall',key:'C'},{id:'door',label:'Porte',icon:'door',key:'O'},
  ...Object.entries(ROOM_TPL).map(([k,t])=>({id:'tpl:'+k,label:t.label,icon:t.icon,group:'tpl'})),
  ...ITEM_ORDER.map(k=>({id:'place:'+k,label:ITEM_LABEL[k],icon:k,key:({desk:'B',meeting:'T'})[k],group:'item'}))];
const LI={chat:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.5 3.5h11v7h-6l-3 2.5v-2.5h-2z"/></svg>',cal:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2.5" y="3.5" width="11" height="10" rx="1"/><path d="M2.5 6.5h11M5.5 2v3M10.5 2v3"/></svg>',
  x:'<svg viewBox="0 0 16 16" stroke="currentColor" stroke-width="1.6"><path d="M4 4l8 8M12 4l-8 8"/></svg>',rot:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 7a5 5 0 1 0-1.5 4.5"/><path d="M13 3v4H9"/></svg>',del:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.7 9h5.6l.7-9"/></svg>'};

function avHtml(u,st,lg){return '<span class="av'+(lg?' lg':'')+'" style="background:'+esc(u.color)+'">'+esc(initials(u.name))+(st?'<span class="b" style="background:var('+STATUS[st].v+')"></span>':'')+'</span>'}
const isAdmin=()=>S.me&&S.me.role==='admin';

function renderTop(){
  $('#orgname').textContent=DATA.org;
  const dp=$('#demoPill');dp.hidden=LIVE;dp.textContent=LIVE_SRC.available?'Démo · se connecter':'Démo';dp.disabled=!LIVE_SRC.available;
  const tabs=isAdmin()?[['live','Plan vivant'],['edit','Modéliser'],['people','Personnes'],['cx','Connexions']]:[['live','Plan vivant']];
  $('#tabs').innerHTML=tabs.map(([k,l])=>'<button data-tab="'+k+'" aria-pressed="'+(S.tab===k)+'">'+l+'</button>').join('');
  const u=S.me;const p=presence(u,S.t);
  $('#me').innerHTML='<button class="me" style="border:0;padding:0;background:none;display:flex;gap:8px;align-items:center" id="meBtn" aria-haspopup="true" aria-expanded="'+S.menu+'">'+avHtml(u,p.st)+'<span style="display:grid;text-align:left;line-height:1.15"><span style="font-weight:600;font-size:13px">'+esc(u.name.split(' ')[0])+'</span><span class="role">'+(isAdmin()?'Admin':'Utilisateur')+'</span></span></button>'+
    (S.menu?'<div class="menu" role="menu"><button data-act="names">'+(S.names?'Masquer':'Afficher')+' les prénoms sur le plan</button>'+(LIVE?(S.me.connected?'<button data-act="disconnect">Déconnecter Teams et Outlook</button>':'<button data-act="connect">Connecter Teams et Outlook</button>')+'<hr><button data-act="logout">Se déconnecter</button>':(LIVE_SRC.available?'<button data-act="login">Se connecter avec Microsoft</button>':'')+'<button data-act="switch">Changer de compte de démo</button><hr><button data-act="reset">Réinitialiser les données d\'exemple</button>')+'</div>':'');
  $('#clockT').textContent=fmt(S.t);$('#clockR').value=S.t;
}
function counts(){
  const c={all:0,office:0,remote:0,meeting:0,absent:0};
  for(const u of DATA.users){const p=presence(u,S.t);const L=locOf(u);c.all++;if(ONSITE.has(L.kind))c.office++;if(L.kind==='remote')c.remote++;if(p.st==='meeting')c.meeting++;if(p.st==='offline'||p.st==='ooo')c.absent++}
  return c;
}
function peopleFiltered(){
  const q=S.q.trim().toLowerCase();
  return DATA.users.filter(u=>{const p=presence(u,S.t);
    if(q&&!(u.name+' '+u.team+' '+u.title).toLowerCase().includes(q))return false;
    if(S.filter==='office')return ONSITE.has(locOf(u).kind);if(S.filter==='remote')return locOf(u).kind==='remote';if(S.filter==='meeting')return p.st==='meeting';if(S.filter==='absent')return p.st==='offline'||p.st==='ooo';return true});
}
function myPresenceHtml(){
  const me=S.me;const st=me.status&&me.status.date===TODAY?me.status.loc:null;
  return (me.connected?'':'<div class="connect-card"><div><b>Apparaissez en direct</b><span class="note">Connectez votre Teams et votre Outlook : votre statut et vos réunions s\'affichent, et les collègues que vous invitez sont placés dans la bonne salle.</span></div><button class="btn pri" data-act="connect">Connecter</button></div>')+
    '<div class="today"><span class="note">Aujourd\'hui, je suis</span><div class="seg" role="group" aria-label="Ma présence aujourd\'hui">'+[['office','Au bureau'],['remote','Télétravail'],['away','Absent']].map(([k,l])=>'<button data-mystatus="'+k+'" aria-pressed="'+(st===k)+'">'+l+'</button>').join('')+'</div></div>';
}
function renderLive(){
  const c=counts();const list=peopleFiltered();
  const teams=[...new Set(list.map(u=>u.team))];
  const chips=[['all','Tous',c.all],['office','Au bureau',c.office],['remote','Télétravail',c.remote],['meeting','En réunion',c.meeting],['absent','Absents',c.absent]];
  const meetingRooms=DATA.rooms.filter(r=>r.type==='meeting');const busy=meetingRooms.filter(r=>roomNow(r,S.t)).length;
  let html='<section class="panel" id="people" data-collapsed="'+S.peopleCollapsed+'"><div class="ph"><div style="display:flex;align-items:center;gap:8px"><h2>Qui est là ?</h2><button class="btn" style="margin-left:auto;padding:5px 10px;font-size:12.5px" data-open-plan="all" title="'+busy+'/'+meetingRooms.length+' salles occupées à '+fmt(S.t)+'">'+LI.cal+'Réserver une salle</button><button class="iconbtn mobile-only" id="pcol" aria-label="Afficher la liste">'+(S.peopleCollapsed?'+':'–')+'</button></div>'+
    (LIVE?myPresenceHtml():'')+'<input class="search" id="q" type="search" placeholder="Chercher une personne, une équipe…" value="'+esc(S.q)+'" aria-label="Chercher">'+
    (SRC.warnings().length?SRC.warnings().map(w=>'<div class="warn mid">'+esc(w)+'</div>').join(''):'')+'<div class="chips">'+chips.map(([k,l,n])=>'<button class="chip" data-f="'+k+'" aria-pressed="'+(S.filter===k)+'">'+l+' <span class="n">'+n+'</span></button>').join('')+'</div></div><div class="plist">';
  for(const t of teams){html+='<div class="group-h">'+esc(t)+'</div>';
    for(const u of list.filter(x=>x.team===t)){const p=presence(u,S.t);
      html+='<button class="prow" data-person="'+u.id+'" aria-current="'+(S.sel&&S.sel.kind==='person'&&S.sel.id===u.id)+'">'+avHtml(u,p.st)+'<span class="txt"><span class="nm" style="display:block">'+esc(u.name)+'</span><span class="sub" style="display:block">'+esc(STATUS[p.st].label)+' · '+esc(locLabel(u,p).replace('Au bureau · ',''))+'</span></span></button>'}}
  if(!list.length)html+='<p class="note" style="padding:12px">Personne ne correspond à ce filtre à '+fmt(S.t)+'.</p>';
  html+='</div></section>';
  html+='<div class="legend">'+['available','meeting','away','ooo','offline'].map(k=>'<span><i class="dot" style="background:var('+STATUS[k].v+')"></i>'+STATUS[k].label+'</span>').join('')+'<span>· pastille = hors du bureau · translucide = position supposée</span></div>';
  if(!DATA.rooms.length)html+='<div class="hint" style="top:auto;bottom:70px">'+(isAdmin()?'Le plan est vide : ouvrez « Modéliser » pour dessiner vos pièces et poser les postes.':'Le plan des bureaux n\'a pas encore été dessiné par un administrateur.')+'</div>';
  html+=renderDrawer();
  if(S.plan)html+=renderPlanning();
  return html;
}
function whereHtml(u,p){const L=locOf(u);const sure=['none','away','remote'].includes(L.kind);
  return '<div class="sec"><h4>Où est '+esc(u.name.split(' ')[0])+' ? '+(sure?'':'<em class="lvl lvl-'+L.level.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()+'">'+L.level+' · '+Math.round(L.conf*100)+' %</em>')+'</h4><div style="font-weight:600">'+esc(locLabel(u,p))+'</div><ul class="why">'+L.reasons.map(r=>'<li>'+esc(r)+'</li>').join('')+'</ul>'+(sure?'':'<p class="note" style="margin:0">Position déduite automatiquement, sans géolocalisation.</p>')+'</div>';
}
function timelineHtml(evs,t){
  const a=480,b=1140,pct=m=>Math.max(0,Math.min(100,(m-a)/(b-a)*100));
  const col={meeting:'var(--busy)',focus:'var(--busy)',busy:'var(--busy)',lunch:'var(--away)',ooo:'var(--ooo)'};
  return '<div class="timeline" aria-hidden="true">'+evs.map(e=>'<span class="ev" style="left:'+pct(toMin(e.s))+'%;width:'+(pct(toMin(e.e))-pct(toMin(e.s)))+'%;background:'+(col[e.k]||'var(--accent)')+';opacity:'+(e.k==='lunch'?.55:.8)+'"></span>').join('')+'<span class="now" style="left:'+pct(t)+'%"></span></div><div class="tl-axis"><span>08h</span><span>11h</span><span>14h</span><span>17h</span><span>19h</span></div>';
}
function renderDrawer(){
  if(!S.sel)return'';const t=S.t;
  if(S.sel.kind==='person'){
    const u=userById(S.sel.id);if(!u)return'';const p=presence(u,t);const d=deskOf(u);const dr=d&&roomAt(d.x,d.z);
    let now='';
    if(p.st==='ooo')now='Absent du bureau toute la journée (réponse automatique active).';
    else if(p.st==='offline')now=LIVE?'Hors ligne sur Teams.':(p.before?'Pas encore connecté. Journée habituelle : '+u.in+' – '+u.out+'.':'Journée terminée.');
    else if(p.ev&&p.ev.k!=='lunch'){now=esc(evTitle(p.ev))+' jusqu\'à '+p.ev.e+'. Libre à partir de '+fmt(nextFree(u,t))+'.'}
    else if(p.ev)now='En pause jusqu\'à '+p.ev.e+'.';
    else{const nx=eventsOf(u).filter(e=>toMin(e.s)>t&&e.k!=='lunch').sort((a,b)=>toMin(a.s)-toMin(b.s))[0];now=nx?'Libre jusqu\'à '+nx.s+' ('+esc(evTitle(nx))+').':'Libre le reste de la journée.'}
    const evs=u.day==='ooo'?[{s:'08:00',e:'19:00',t:'Congés',k:'ooo'}]:eventsOf(u).sort((a,b)=>toMin(a.s)-toMin(b.s));
    return '<aside class="panel" id="drawer" aria-label="Fiche"><div class="dh">'+avHtml(u,p.st,true)+'<div style="min-width:0"><h3>'+esc(u.name)+'</h3><p>'+esc(u.title)+' · '+esc(u.team)+'</p></div><button class="iconbtn close" data-close aria-label="Fermer">'+LI.x+'</button></div>'+
      '<div class="sec"><h4>Maintenant <em class="mono">'+fmt(t)+'</em></h4><span class="pill"><i class="dot" style="background:var('+STATUS[p.st].v+')"></i>'+STATUS[p.st].label+'</span><div>'+esc(locLabel(u,p))+'</div><div class="note" style="color:var(--ink)">'+now+'</div>'+
      '<div class="src"><i>Teams</i> statut et lieu de travail · <i>Outlook</i> agenda</div></div>'+
      whereHtml(u,p)+'<div class="sec"><h4>Agenda du jour <em>'+(DATA.settings.agenda==='subject'?'objet visible':'libre / occupé')+'</em></h4>'+timelineHtml(evs,t)+'<div class="evlist">'+
      (evs.length?evs.map(e=>{const cur=t>=toMin(e.s)&&t<toMin(e.e);const r=e.room&&roomById(e.room);return'<div class="evr'+(cur?' cur':'')+'"><span class="mono">'+e.s+' – '+e.e+'</span><span>'+esc(evTitle(e))+(DATA.settings.agenda==='subject'?'<small>'+(r?esc(r.name):(e.k==='meeting'?'Réunion Teams':(e.k==='focus'?'Concentration':'')))+'</small>':'')+'</span></div>'}).join(''):'<p class="note">Aucun événement aujourd\'hui.</p>')+'</div></div>'+
      '<div class="sec"><h4>Poste</h4><dl class="kv"><dt>Bureau</dt><dd>'+(d?esc(dr?dr.name:'Poste attribué'):'Pas de poste attribué (flex)')+'</dd><dt>E-mail</dt><dd style="word-break:break-all">'+esc(u.email)+'</dd></dl>'+
      '<div class="btns"><a class="btn pri" target="_blank" rel="noopener" href="https://teams.microsoft.com/l/chat/0/0?users='+encodeURIComponent(u.email)+'">'+LI.chat+'Écrire sur Teams</a><a class="btn" target="_blank" rel="noopener" href="https://teams.microsoft.com/l/meeting/new?attendees='+encodeURIComponent(u.email)+'">'+LI.cal+'Proposer une réunion</a></div></div></aside>';
  }
  if(S.sel.kind==='room'){
    const r=roomById(S.sel.id);if(!r)return'';
    if(S.tab==='edit')return roomProps(r);
    const bks=roomBookings(r);const cur=roomNow(r,t);
    const here=[...placed.entries()].filter(([id,p])=>p.onsite&&roomAt(p.x,p.z)===r).map(([id])=>userById(id));
    return '<aside class="panel" id="drawer"><div class="dh"><div style="min-width:0"><h3>'+esc(r.name)+'</h3><p>'+ROOM_TYPES[r.type]+(r.capacity?' · '+r.capacity+' places':'')+'</p></div><button class="iconbtn close" data-close aria-label="Fermer">'+LI.x+'</button></div>'+
      (r.type==='meeting'?'<div class="sec"><h4>Maintenant <em class="mono">'+fmt(t)+'</em></h4><span class="pill"><i class="dot" style="background:var('+(cur?'--busy':'--ok')+')"></i>'+(cur?'Occupée jusqu\'à '+cur.e:'Libre')+'</span>'+(cur?'<div>'+esc(evTitle(cur))+'</div>':'')+
        '<div class="src"><i>Outlook</i> calendrier de la salle '+(r.mailbox?'· '+esc(r.mailbox):'')+'</div></div>'+
        '<div class="sec"><h4>Réservations du jour</h4>'+timelineHtml(bks.map(b=>({...b,k:'meeting'})),t)+'<div class="evlist">'+(bks.length?bks.map(b=>'<div class="evr'+(t>=toMin(b.s)&&t<toMin(b.e)?' cur':'')+'"><span class="mono">'+b.s+' – '+b.e+'</span><span>'+esc(evTitle(b))+'<small>'+b.people.length+' participant'+(b.people.length>1?'s':'')+'</small></span></div>').join(''):'<p class="note">Aucune réservation.</p>')+'</div>'+
        '<div class="btns"><button class="btn pri" data-book="'+r.id+'">'+LI.cal+'Réserver 30 min maintenant</button></div><div class="note" id="bookmsg"></div></div>':'')+
      '<div class="sec"><h4>Présents dans la pièce <em>'+here.length+'</em></h4>'+(here.length?here.map(u=>{const p=presence(u,t);return'<button class="prow" data-person="'+u.id+'">'+avHtml(u,p.st)+'<span class="txt"><span class="nm" style="display:block">'+esc(u.name)+'</span><span class="sub" style="display:block">'+STATUS[p.st].label+'</span></span></button>'}).join(''):'<p class="note">Personne pour le moment.</p>')+'</div></aside>';
  }
  if(S.sel.kind==='item'){const it=itemById(S.sel.id);if(!it)return'';if(S.tab==='edit')return itemProps(it);
    return '<aside class="panel" id="drawer"><div class="dh"><div><h3>Bureau libre</h3><p>Poste en flex · '+esc((roomAt(it.x,it.z)||{}).name||'')+'</p></div><button class="iconbtn close" data-close aria-label="Fermer">'+LI.x+'</button></div><div class="sec"><p class="note" style="margin:0">Ce poste n\'est attribué à personne. Dans la version connectée, les collaborateurs pourront le réserver pour la journée.</p></div></aside>'}
  return'';
}
function roomProps(r){
  return '<aside class="panel" id="drawer"><div class="dh"><div><h3>Pièce</h3><p>'+ROOM_TYPES[r.type]+'</p></div><button class="iconbtn close" data-close aria-label="Fermer">'+LI.x+'</button></div><div class="sec">'+
    '<div class="field"><label for="pf-name">Nom</label><input id="pf-name" data-rp="name" value="'+esc(r.name)+'"></div>'+
    '<div class="field"><label for="pf-type">Type</label><select id="pf-type" data-rp="type">'+Object.entries(ROOM_TYPES).map(([k,l])=>'<option value="'+k+'"'+(r.type===k?' selected':'')+'>'+l+'</option>').join('')+'</select></div>'+
    '<div class="row2"><div class="field"><label for="pf-w">Largeur (m)</label><input id="pf-w" type="number" min="2" max="40" data-rp="w" value="'+r.w+'"></div><div class="field"><label for="pf-d">Profondeur (m)</label><input id="pf-d" type="number" min="2" max="40" data-rp="d" value="'+r.d+'"></div></div>'+
    (r.type==='meeting'?'<div class="field"><label for="pf-cap">Capacité</label><input id="pf-cap" type="number" min="1" max="60" data-rp="capacity" value="'+(r.capacity||6)+'"></div>'+(LIVE&&DATA.outlookRooms.length?'<div class="field"><label for="pf-mbs">Salle Outlook correspondante</label><select id="pf-mbs" data-mbsel="1"><option value="">Non reliée</option>'+DATA.outlookRooms.map(o=>'<option value="'+esc(o.email)+'"'+(o.email===r.mailbox?' selected':'')+'>'+esc(o.name)+(o.capacity?' · '+o.capacity+' places':'')+'</option>').join('')+'</select></div>':'<div class="field"><label for="pf-mb">Boîte aux lettres de la salle (Outlook)</label><input id="pf-mb" data-rp="mailbox" placeholder="salle@entreprise.fr" value="'+esc(r.mailbox||'')+'"></div>')+'<p class="note" style="margin:0">L\'occupation de la salle sera lue dans ce calendrier de ressource.</p>':'')+
    (WALLED[r.type]?'<p class="note" style="margin:0">'+((r.doors||[]).length||'Aucune')+' porte'+((r.doors||[]).length>1?'s':'')+'. Outil « Porte » (O) : cliquez sur un mur pour en ajouter ou en retirer.</p>':'')+'</div><div class="sec"><div class="btns"><button class="btn" data-dup>Dupliquer <span class="note">D</span></button><button class="btn danger" data-del>'+LI.del+'Supprimer la pièce</button></div><p class="note" style="margin:0">Glissez la pièce ou utilisez les flèches pour la déplacer : son mobilier suit.</p></div></aside>';
}
function itemProps(it){
  const opts=DATA.users.map(u=>{const other=DATA.items.find(i=>i.type==='desk'&&i.user===u.id&&i.id!==it.id);return'<option value="'+u.id+'"'+(it.user===u.id?' selected':'')+'>'+esc(u.name)+(other?' (a déjà un poste)':'')+'</option>'}).join('');
  return '<aside class="panel" id="drawer"><div class="dh"><div><h3>'+ITEM_LABEL[it.type]+'</h3><p>'+esc((roomAt(it.x,it.z)||{}).name||'Hors pièce')+'</p></div><button class="iconbtn close" data-close aria-label="Fermer">'+LI.x+'</button></div><div class="sec">'+
    (it.type==='desk'?'<div class="field"><label for="pf-user">Attribué à</label><select id="pf-user" data-ip="user"><option value="">Personne (poste flex)</option>'+opts+'</select></div>':'')+
    (it.type==='meeting'?'<div class="field"><label for="pf-seats">Nombre de places</label><select id="pf-seats" data-ip="seats">'+[4,6,8,10,12].map(n=>'<option'+((it.seats||6)===n?' selected':'')+'>'+n+'</option>').join('')+'</select></div>':'')+
    (it.type==='wall'?'<label class="check"><input type="checkbox" id="pf-glass" data-ip="glass"'+(it.glass?' checked':'')+'> Cloison vitrée</label><p class="note" style="margin:0">Longueur : '+(Math.round(Math.hypot(it.x2-it.x,it.z2-it.z)*10)/10)+' m</p>':'')+
    '<div class="btns"><button class="btn" data-rot>'+LI.rot+'Pivoter 90° <span class="note">R</span></button><button class="btn" data-dup>Dupliquer <span class="note">D</span></button><button class="btn danger" data-del>'+LI.del+'Supprimer</button></div></div></aside>';
}
function renderEdit(){
  const bg=DATA.bg;
  let html='<section class="panel" id="tools" aria-label="Outils"><div class="tl-h">Outils</div>'+TOOLS.filter(t=>!t.group).map(toolBtn).join('')+
    '<div class="tl-h">Pièces prêtes à poser</div>'+TOOLS.filter(t=>t.group==='tpl').map(toolBtn).join('')+
    '<div class="tl-h">Mobilier</div>'+TOOLS.filter(t=>t.group==='item').map(toolBtn).join('')+
    '<div class="tl-h">Étage</div><div class="tl-f"><label for="fl-w">Largeur (m)<input type="number" id="fl-w" data-floor="w" min="6" max="200" value="'+DATA.floor.w+'"></label><label for="fl-d">Profondeur (m)<input type="number" id="fl-d" data-floor="d" min="6" max="200" value="'+DATA.floor.d+'"></label></div>'+
    '<button class="tool" id="bgPick">'+svg('image')+'<span>'+(bg?'Remplacer le plan de fond':'Importer un plan (image)')+'</span></button><input type="file" id="bgFile" accept="image/*" hidden>'+
    (bg?'<div class="tl-f"><label for="bg-w">Largeur réelle (m)<input type="number" id="bg-w" data-bg="w" step="0.5" min="1" value="'+bg.w+'"></label><label for="bg-x">Décalage X<input type="number" id="bg-x" data-bg="x" step="0.5" value="'+bg.x+'"></label><label for="bg-z">Décalage Y<input type="number" id="bg-z" data-bg="z" step="0.5" value="'+bg.z+'"></label><label for="bg-op">Opacité<input type="range" id="bg-op" data-bg="op" min="0.1" max="1" step="0.05" value="'+bg.op+'"></label></div><button class="tool" id="bgDel">'+svg('image')+'<span>Retirer le plan de fond</span></button>'
      :'<p class="note" style="margin:2px 8px 6px">Photo ou scan du plan (plan d\'évacuation, plan d\'architecte) : il s\'affiche par-dessus le sol pour décalquer les pièces.</p>')+
    '</section>';
  const hints={select:'Cliquez un élément pour le modifier, glissez-le pour le déplacer. D duplique, les flèches ajustent.',room:'Tracez un rectangle sur le sol pour créer une pièce.',wall:'Glissez sur le sol pour tracer une cloison droite. Échap pour arrêter.',door:'Cliquez sur un mur de pièce pour ajouter une porte, sur une porte pour la retirer.'};
  const tl=S.tool.startsWith('place:')?'Cliquez sur le sol pour poser : '+ITEM_LABEL[S.tool.slice(6)].toLowerCase()+'. Les poses s\'enchaînent ; Échap pour arrêter.':(S.tool.startsWith('tpl:')?'Cliquez sur le sol pour poser « '+ROOM_TPL[S.tool.slice(4)].label+' », déjà meublée. Échap pour arrêter.':hints[S.tool]);
  html+='<div class="hint">'+tl+'</div>';
  html+=renderDrawer();return html;
}
const toolBtn=t=>'<button class="tool" data-tool="'+t.id+'" aria-pressed="'+(S.tool===t.id)+'">'+svg(t.icon)+'<span>'+t.label+'</span>'+(t.key?'<kbd>'+t.key+'</kbd>':'')+'</button>';
function renderPeopleAdmin(){
  if(LIVE)return renderPeopleLive();
  const desks=DATA.items.filter(i=>i.type==='desk');
  const deskLabel=d=>{const r=roomAt(d.x,d.z);return(r?r.name:'Poste')+' · '+d.id.toUpperCase()};
  let rows=DATA.users.map(u=>{const d=deskOf(u);return'<tr data-row="'+u.id+'"><td style="min-width:200px"><div style="display:flex;gap:10px;align-items:center">'+avHtml(u)+'<input aria-label="Nom" data-up="name" value="'+esc(u.name)+'"></div></td>'+
    '<td><input aria-label="E-mail" data-up="email" value="'+esc(u.email)+'" style="min-width:220px"></td><td><input aria-label="Équipe" data-up="team" value="'+esc(u.team)+'"></td>'+
    '<td><select aria-label="Rôle" data-up="role"><option value="user"'+(u.role==='user'?' selected':'')+'>Utilisateur</option><option value="admin"'+(u.role==='admin'?' selected':'')+'>Admin</option></select></td>'+
    '<td><select aria-label="Poste" data-up="desk"><option value="">Flex</option>'+desks.map(dk=>'<option value="'+dk.id+'"'+(d&&d.id===dk.id?' selected':'')+'>'+esc(deskLabel(dk))+(dk.user&&dk.user!==u.id?' (occupé)':'')+'</option>').join('')+'</select></td>'+
    '<td><select aria-label="Journée simulée" data-up="day"><option value="office"'+(u.day==='office'?' selected':'')+'>Au bureau</option><option value="remote"'+(u.day==='remote'?' selected':'')+'>Télétravail</option><option value="unknown"'+(u.day==='unknown'?' selected':'')+'>Lieu non déclaré</option><option value="ooo"'+(u.day==='ooo'?' selected':'')+'>Congés</option></select></td>'+
    '<td><button class="iconbtn" data-udel="'+u.id+'" aria-label="Retirer '+esc(u.name)+'"'+(u.id===S.me.id?' disabled':'')+'>'+LI.del+'</button></td></tr>'}).join('');
  return '<section class="panel sheet"><div class="sheet-in"><div style="display:flex;gap:16px;align-items:flex-end;flex-wrap:wrap"><div><h2>Personnes</h2><p class="lead">Les comptes, leur rôle et leur poste. Dans la version connectée, la liste est importée depuis l\'annuaire Microsoft (Entra ID) : vous n\'ajoutez à la main que les exceptions.</p></div><div class="spacer"></div><button class="btn pri" id="addUser">+ Ajouter une personne</button></div>'+
    '<div class="tbl-wrap"><table><thead><tr><th>Nom</th><th>E-mail Microsoft 365</th><th>Équipe</th><th>Rôle</th><th>Poste attribué</th><th>Journée (démo)</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div>'+
    '<p class="note">Rôle « Admin » : peut modéliser le plan, gérer les personnes et les connexions. Rôle « Utilisateur » : consulte le plan vivant. La colonne « Journée » remplace, dans le prototype, ce que Teams et Outlook fourniront.</p></div></section>';
}
function renderCx(){
  if(LIVE)return renderCxLive();
  const s=DATA.settings;
  return '<section class="panel sheet"><div class="sheet-in"><div><h2>Connexions</h2><p class="lead">Étage lit la présence Teams et les agendas Outlook via Microsoft Graph. Il ne lit ni les messages, ni le contenu des réunions, ni les applications ouvertes.</p></div>'+
  '<div class="cards"><div class="card"><h3><svg viewBox="0 0 21 21" width="18" height="18" aria-hidden="true"><rect x="1" y="1" width="9" height="9" fill="#F25022"/><rect x="11" y="1" width="9" height="9" fill="#7FBA00"/><rect x="1" y="11" width="9" height="9" fill="#00A4EF"/><rect x="11" y="11" width="9" height="9" fill="#FFB900"/></svg>Microsoft 365<span class="status warn">Mode démo</span></h3>'+
    '<div class="field"><label for="cx-t">ID du locataire (tenant)</label><input id="cx-t" data-cx="tenant" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" value="'+esc(s.tenant)+'"></div>'+
    '<div class="field"><label for="cx-c">ID de l\'application (client)</label><input id="cx-c" data-cx="client" placeholder="Créé dans Entra ID › Inscriptions d\'applications" value="'+esc(s.client)+'"></div>'+
    '<div class="btns"><button class="btn pri" id="cxTest">Tester la connexion</button><button class="btn" id="cxSync">Importer l\'annuaire</button></div><div class="msg" id="cxMsg" hidden></div></div>'+
  '<div class="card"><h3>Autorisations demandées</h3><div class="perm">'+
    '<code>User.Read.All</code><span>Lister les collaborateurs de l\'annuaire</span>'+
    '<code>Presence.Read.All</code><span>Statut Teams : disponible, en réunion, absent…</span>'+
    '<code>Calendars.ReadBasic</code><span>Créneaux de l\'agenda Outlook (sans le corps des invitations)</span>'+
    '<code>Place.Read.All</code><span>Salles de réunion déclarées dans Outlook</span></div>'+
    '<p class="note" style="margin:0">Autorisations de type « application », validées une fois par un administrateur Microsoft 365. Le secret reste côté serveur, jamais dans le navigateur.</p></div>'+
  '<div class="card"><h3>Confidentialité de l\'agenda</h3><p class="note" style="margin:0">Ce que les collègues voient de l\'agenda des autres.</p><div class="seg" role="group" aria-label="Détail de l\'agenda"><button data-agenda="busy" aria-pressed="'+(s.agenda==='busy')+'">Libre / occupé seulement</button><button data-agenda="subject" aria-pressed="'+(s.agenda==='subject')+'">Objet et lieu</button></div>'+
    '<p class="note" style="margin:0">Les réunions marquées « privé » dans Outlook restent affichées « Occupé » quel que soit ce réglage.</p></div>'+
  '<div class="card"><h3>Positions devinées</h3><p class="note" style="margin:0">Quand une position n\'est pas déclarée, Étage la déduit de l\'agenda, des salles réservées à son nom et du statut Teams. Les positions incertaines apparaissent translucides.</p><div class="seg" role="group" aria-label="Positions devinées"><button data-guess="all" aria-pressed="'+(s.guess!=='probable')+'">Toutes les afficher</button><button data-guess="probable" aria-pressed="'+(s.guess==='probable')+'">Seulement les probables</button></div></div>'+'<div class="card"><h3>Actualisation</h3><dl class="kv"><dt>Présence Teams</dt><dd>Abonnement aux changements (quasi temps réel), relevé toutes les 60 s en secours</dd><dt>Agendas</dt><dd>Toutes les 5 min</dd><dt>Annuaire</dt><dd>Chaque nuit</dd></dl></div></div></div></section>';
}
/* ---------- planning des salles ---------- */
const SLOT=24,DAY0=480,DAY1=1140;
const meetingRooms=()=>DATA.rooms.filter(r=>r.type==='meeting');
const nowSlot=()=>Math.ceil(S.t/30)*30;
const isPast=(date,startMin)=>date<TODAY||(date===TODAY&&startMin<Math.floor(S.t/30)*30);
const nextWeekday=(k,dir)=>{let d=addDays(k,dir);while(wdOf(d)>4)d=addDays(d,dir);return d};
function openPlanning(roomId,mode){
  const rooms=meetingRooms();if(!rooms.length)return;
  let date=TODAY;if(wdOf(date)>4)date=nextWeekday(date,1);
  S.plan={mode:mode||'room',room:roomId||rooms[0].id,date,sel:null,form:null,view:null,msg:'',scroll:true};S.sel=null;tip.hidden=true;render();drawSelection();
}
let shownBookings=new Map();
function canSeeTitle(b){return LIVE||DATA.settings.agenda==='subject'||b.org===S.me.id||(b.people||[]).includes(S.me.id)}
function planColumns(){
  const P=S.plan;
  if(P.mode==='room'){const ws=weekStart(P.date);return[0,1,2,3,4].map(i=>{const d=addDays(ws,i);return{date:d,room:P.room,label:dayShort(d),sub:d===TODAY?'Aujourd\'hui':''}})}
  return meetingRooms().map(r=>{let sub=(r.capacity||'?')+' places';if(P.date===TODAY){const c=roomNow(r,S.t);sub=c?'<span class="busy">Occupée → '+c.e+'</span>':'<span class="free">Libre maintenant</span>'}return{date:P.date,room:r.id,label:esc(r.name),sub,raw:true}});
}
function renderPlanning(){
  const P=S.plan;const rooms=meetingRooms();const room=roomById(P.room)||rooms[0];
  const cols=planColumns();shownBookings=new Map();const needDates=[...new Set(cols.map(c=>c.date))];SRC.ensureDates(needDates);const loading=!SRC.hasDates(needDates);
  const ws=weekStart(P.date),we=addDays(ws,4);
  const navLabel=P.mode==='room'?(parseKey(ws).getDate()+(parseKey(ws).getMonth()!==parseKey(we).getMonth()?' '+MONTHS[parseKey(ws).getMonth()]:'')+' – '+parseKey(we).getDate()+' '+MONTHS[parseKey(we).getMonth()]):dayLong(P.date);
  let h='<section class="panel plan" aria-label="Planning des salles"><div class="plan-h">'+
    '<div style="min-width:0"><h2>'+(P.mode==='room'?esc(room.name):'Salles de réunion')+'</h2><p>'+(P.mode==='room'?(room.capacity||'?')+' places · calendrier Outlook '+(room.mailbox?esc(room.mailbox):'non renseigné'):'Toutes les salles, '+dayLong(P.date))+'</p></div>'+
    '<div class="seg" role="group" aria-label="Affichage"><button data-plan-mode="room" aria-pressed="'+(P.mode==='room')+'">Semaine d\'une salle</button><button data-plan-mode="all" aria-pressed="'+(P.mode==='all')+'">Toutes les salles</button></div>'+
    (P.mode==='room'?'<select id="plRoom" class="search" style="width:auto" aria-label="Salle">'+rooms.map(r=>'<option value="'+r.id+'"'+(r.id===room.id?' selected':'')+'>'+esc(r.name)+'</option>').join('')+'</select>':'')+
    '<div class="navd"><button class="iconbtn" data-plan-nav="-1" aria-label="Précédent"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 3L5 8l5 5"/></svg></button><span class="lbl">'+navLabel+'</span><button class="iconbtn" data-plan-nav="1" aria-label="Suivant"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3l5 5-5 5"/></svg></button><button class="btn" data-plan-today style="padding:6px 10px">Aujourd\'hui</button></div>'+
    (loading?'<span class="note">Chargement des agendas…</span>':'')+'<button class="iconbtn" data-plan-close aria-label="Fermer le planning" style="margin-left:auto">'+LI.x+'</button></div>';
  h+='<div class="plan-b"><div class="cal-wrap" id="calWrap"><div class="cal" style="--cols:'+cols.length+'"><div class="cal-head"><div></div>'+
    cols.map(c=>'<div class="ch'+(c.date===TODAY&&P.mode==='room'?' today':'')+'">'+c.label+'<small>'+(c.sub||'&nbsp;')+'</small></div>').join('')+'</div><div class="cal-body"><div class="gutter">';
  for(let m=DAY0;m<=DAY1;m+=60)h+='<span style="top:'+((m-DAY0)/30*SLOT)+'px">'+fmt(m)+'</span>';
  h+='</div>';
  for(const c of cols){
    const r=roomById(c.room);const bks=roomBookings(r,c.date);
    h+='<div class="col'+(c.date===TODAY?' today':'')+'" data-date="'+c.date+'" data-room="'+c.room+'">';
    if(c.date<TODAY)h+='<div class="past" style="bottom:0"></div>';
    else if(c.date===TODAY){const pm=Math.min(DAY1,Math.max(DAY0,Math.floor(S.t/30)*30));if(pm>DAY0)h+='<div class="past" style="height:'+((pm-DAY0)/30*SLOT)+'px"></div>';
      if(S.t>DAY0&&S.t<DAY1)h+='<div class="nowl" style="top:'+((S.t-DAY0)/30*SLOT)+'px"></div>'}
    for(const b of bks){shownBookings.set(b.id,{...b,room:c.room,date:c.date});
      const a=Math.max(DAY0,toMin(b.s)),z=Math.min(DAY1,toMin(b.e));if(z<=a)continue;
      const mine=b.org===S.me.id;const title=canSeeTitle(b)?b.t:'Occupé';const ht=(z-a)/30*SLOT-2;
      h+='<button class="blk '+(mine?'mine':'other')+(P.view===b.id?' on':'')+'" data-bk="'+esc(b.id)+'" style="top:'+((a-DAY0)/30*SLOT+1)+'px;height:'+ht+'px" title="'+esc(b.s+'–'+b.e+' · '+title)+'"><b>'+esc(title)+'</b>'+(ht>30?'<span class="tm">'+b.s+' – '+b.e+'</span>':'')+'</button>'}
    if(P.sel&&P.sel.date===c.date&&P.sel.room===c.room)h+='<div class="selbox" style="top:'+((P.sel.s-DAY0)/30*SLOT)+'px;height:'+((P.sel.e-P.sel.s)/30*SLOT-2)+'px">'+fmt(P.sel.s)+' – '+fmt(P.sel.e)+'</div>';
    h+='</div>';
  }
  h+='</div></div></div><aside class="plan-side'+(P.sel||P.view?'':' idle')+'">'+planSide()+'</aside></div></section>';
  return h;
}
function timeOpts(sel,from,to){let o='';for(let m=from;m<=to;m+=30)o+='<option value="'+m+'"'+(m===sel?' selected':'')+'>'+fmt(m)+'</option>';return o}
function selChecks(){
  const P=S.plan,sel=P.sel,f=P.form,r=roomById(sel.room);const out=[];
  if(sel.e<=sel.s)out.push(['bad','L\'heure de fin doit être après l\'heure de début.']);
  if(isPast(sel.date,sel.s))out.push(['bad','Ce créneau est déjà passé.']);
  const clash=roomBookings(r,sel.date).find(b=>toMin(b.s)<sel.e&&toMin(b.e)>sel.s);
  if(clash)out.push(['bad',esc(r.name)+' est déjà réservée de '+clash.s+' à '+clash.e+'.']);
  if(r.capacity&&f.people.length>r.capacity)out.push(['mid',f.people.length+' participants pour '+r.capacity+' places.']);
  if(sel.date===TODAY){for(const id of f.people){if(id===S.me.id)continue;const u=userById(id);if(!u)continue;
    const pu=presence(u,S.t);if(pu.st==='ooo'){out.push(['mid',esc(u.name)+' est absent du bureau aujourd\'hui.']);continue}
    const ev=eventsOf(u).find(e=>e.k!=='lunch'&&toMin(e.s)<sel.e&&toMin(e.e)>sel.s);if(ev)out.push(['mid',esc(u.name)+' est déjà pris : '+esc(DATA.settings.agenda==='subject'?ev.t:'occupé')+' ('+ev.s+'–'+ev.e+').']);
    else if(pu.loc==='remote')out.push(['mid',esc(u.name)+' est en télétravail : pensez au lien Teams.'])}}
  return out;
}
function planSide(){
  const P=S.plan;
  if(P.sel){
    const sel=P.sel,f=P.form,r=roomById(sel.room);const checks=selChecks();const blocking=checks.some(c=>c[0]==='bad');
    const others=DATA.users.filter(u=>!f.people.includes(u.id));
    return '<h3>Nouvelle réservation</h3>'+
      '<div class="field"><label for="bkT">Objet</label><input id="bkT" value="'+esc(f.t)+'" maxlength="80"></div>'+
      '<div class="field"><label for="bkRoom">Salle</label><select id="bkRoom">'+meetingRooms().map(x=>'<option value="'+x.id+'"'+(x.id===r.id?' selected':'')+'>'+esc(x.name)+' · '+(x.capacity||'?')+' places</option>').join('')+'</select></div>'+
      '<div class="field"><label>Date</label><div style="font-weight:600">'+dayLong(sel.date)+'</div></div>'+
      '<div class="row2"><div class="field"><label for="bkS">Début</label><select id="bkS">'+timeOpts(sel.s,DAY0,DAY1-30)+'</select></div><div class="field"><label for="bkE">Fin</label><select id="bkE">'+timeOpts(sel.e,DAY0+30,DAY1)+'</select></div></div>'+
      '<div class="field"><label for="bkAdd">Participants · '+f.people.length+'</label><div class="pchips">'+f.people.map(id=>{const u=userById(id);if(!u)return'';return'<span class="pchip">'+avHtml(u)+esc(u.name)+(id!==S.me.id?'<button data-pdel="'+id+'" aria-label="Retirer '+esc(u.name)+'">×</button>':' <span class="note">(vous)</span>&nbsp;')+'</span>'}).join('')+'</div>'+
      '<select id="bkAdd"><option value="">+ Ajouter un participant</option>'+others.map(u=>'<option value="'+u.id+'">'+esc(u.name)+' · '+esc(u.team)+'</option>').join('')+'</select></div>'+
      '<label class="check"><input type="checkbox" id="bkTeams"'+(f.teams?' checked':'')+'> Ajouter un lien de réunion Teams</label>'+
      (P.err?'<div class="warn bad">'+esc(P.err)+'</div>':'')+(checks.length?checks.map(c=>'<div class="warn '+c[0]+'">'+c[1]+'</div>').join(''):'<div class="warn good">Salle libre sur ce créneau'+(sel.date===TODAY&&f.people.length>1?', participants disponibles':'')+'.</div>')+
      '<div class="btns"><button class="btn pri" id="bkSave"'+(blocking||P.busy?' disabled style="opacity:.5;cursor:not-allowed"':'')+'>'+(P.busy?'Réservation en cours…':'Réserver '+fmt(sel.s)+' – '+fmt(sel.e))+'</button><button class="btn" id="bkCancel">Annuler</button></div>'+
      '<p class="note" style="margin:0">'+(LIVE?'La réunion est créée dans votre agenda Outlook ; la salle et les participants reçoivent l\'invitation.':'Version connectée : la réservation crée l\'événement dans Outlook, invite la salle et les participants, et apparaît dans leur agenda.')+'</p>';
  }
  if(P.view&&shownBookings.has(P.view)){
    const b=shownBookings.get(P.view);const r=roomById(b.room);const org=userById(b.org);const vis=canSeeTitle(b);const canDel=SRC.canCancel(b,S.me);
    return '<h3>'+esc(vis?b.t:'Occupé')+'</h3><dl class="kv"><dt>Salle</dt><dd>'+esc(r.name)+'</dd><dt>Quand</dt><dd>'+dayLong(b.date)+', '+b.s+' – '+b.e+'</dd>'+(org?'<dt>Organisateur</dt><dd>'+esc(org.name)+'</dd>':'')+'<dt>Source</dt><dd>'+(b.src==='etage'?'Réservée dans Étage':(b.src==='mine'?'Votre réunion Outlook':'Calendrier Outlook de la salle'))+(b.pending?' · en attente de confirmation de la salle':'')+'</dd></dl>'+
      (vis&&b.people&&b.people.length?'<div class="field"><label>Participants · '+b.people.length+'</label><div class="pchips">'+b.people.map(id=>{const u=userById(id);return u?'<span class="pchip">'+avHtml(u)+esc(u.name)+'&nbsp;</span>':''}).join('')+'</div></div>':'')+
      (b.teams?'<a class="btn" target="_blank" rel="noopener" href="https://teams.microsoft.com/">'+LI.chat+'Rejoindre sur Teams</a>':'')+
      (P.err?'<div class="warn bad">'+esc(P.err)+'</div>':'')+(canDel?'<div class="btns"><button class="btn danger" data-bkdel="'+esc(b.id)+'"'+(P.busy?' disabled':'')+'>'+LI.del+(P.busy?'Annulation…':'Annuler la réservation')+'</button></div>':'')+
      '<button class="btn" data-plan-back style="justify-self:start">Retour</button>';
  }
  return (P.msg?'<div class="warn good">'+esc(P.msg)+'</div>':'')+'<h3>Réserver un créneau</h3><ol class="steps"><li>Glissez sur une plage libre du planning (ou cliquez pour 30 min).</li><li>Ajustez l\'objet, les horaires et les participants.</li><li>Validez : la salle passe en « occupée » sur le plan.</li></ol>'+
    '<div class="legend" style="position:static;display:flex"><span><i class="dot" style="background:color-mix(in srgb,var(--busy) 40%,var(--panel));border-radius:3px"></i>Réservée</span><span><i class="dot" style="background:var(--accent);border-radius:3px"></i>Vos réservations</span><span><i class="dot" style="background:var(--muted);opacity:.4;border-radius:3px"></i>Passé</span></div>'+
    '<p class="note" style="margin:0">Créneaux de 30 min, de 08:00 à 19:00. Les réservations existantes viennent du calendrier Outlook de chaque salle'+(DATA.settings.agenda==='subject'?'':' ; leur objet est masqué selon le réglage de confidentialité')+'.</p>';
}
let pSel=null;
function slotAt(col,y){return DAY0+Math.max(0,Math.min((DAY1-DAY0)/30-1,Math.floor(y/SLOT)))*30}
function drawSelBox(){const x=pSel;let box=x.col.querySelector('.selbox');if(!box){box=document.createElement('div');box.className='selbox';x.col.appendChild(box)}
  box.style.top=((x.a-DAY0)/30*SLOT)+'px';box.style.height=((x.b-x.a)/30*SLOT-2)+'px';box.textContent=fmt(x.a)+' – '+fmt(x.b)}
document.addEventListener('pointerdown',e=>{
  const col=e.target.closest&&e.target.closest('.plan .col');if(!col||e.target.closest('.blk'))return;
  const rect=col.getBoundingClientRect();const s0=slotAt(col,e.clientY-rect.top);const date=col.dataset.date;
  if(isPast(date,s0)){S.plan.sel=null;S.plan.view=null;S.plan.msg='';render();const side=document.querySelector('.plan-side');if(side)side.insertAdjacentHTML('afterbegin','<div class="warn bad">Ce créneau est passé. Choisissez une plage après '+fmt(date===TODAY?Math.floor(S.t/30)*30:DAY0)+'.</div>');return}
  e.preventDefault();try{col.setPointerCapture(e.pointerId)}catch(_){}
  document.querySelectorAll('.plan .selbox').forEach(b=>b.remove());
  pSel={col,rect,s0,a:s0,b:s0+30,date,room:col.dataset.room};drawSelBox();
});
document.addEventListener('pointermove',e=>{if(!pSel)return;const m=slotAt(pSel.col,e.clientY-pSel.rect.top);let a=Math.min(pSel.s0,m);if(isPast(pSel.date,a))a=pSel.s0;pSel.a=a;pSel.b=Math.max(pSel.s0,m)+30;drawSelBox()});
document.addEventListener('pointerup',()=>{if(!pSel)return;const x=pSel;pSel=null;const P=S.plan;
  P.sel={date:x.date,room:x.room,s:x.a,e:x.b};P.form={t:'Réunion',people:[S.me.id],teams:true};P.view=null;P.msg='';P.err='';render();const t=$('#bkT');if(t&&window.innerWidth>860){t.focus();t.select()}});
function planClick(t){
  const P=S.plan;if(!P)return false;
  if(t.dataset.planMode){P.mode=t.dataset.planMode;P.sel=null;P.view=null;render();return true}
  if(t.dataset.planNav){const d=+t.dataset.planNav;P.date=P.mode==='room'?addDays(P.date,7*d):nextWeekday(P.date,d);P.sel=null;P.view=null;render();return true}
  if(t.hasAttribute('data-plan-today')){P.date=wdOf(TODAY)>4?nextWeekday(TODAY,1):TODAY;P.sel=null;P.view=null;render();return true}
  if(t.hasAttribute('data-plan-close')){S.plan=null;render();return true}
  if(t.hasAttribute('data-plan-back')){P.view=null;render();return true}
  if(t.dataset.bk){P.view=t.dataset.bk;P.sel=null;P.msg='';P.err='';render();return true}
  if(t.dataset.pdel){P.form.people=P.form.people.filter(id=>id!==t.dataset.pdel);render();return true}
  if(t.id==='bkCancel'){P.sel=null;P.err='';render();return true}
  if(t.id==='bkSave'){if(P.busy||selChecks().some(c=>c[0]==='bad'))return true;const sel=P.sel,f=P.form;P.busy=true;P.err='';render();
    SRC.book({room:sel.room,date:sel.date,s:fmt(sel.s),e:fmt(sel.e),t:(f.t||'Réunion').trim()||'Réunion',org:S.me.id,people:f.people.slice(),teams:!!f.teams}).then(res=>{
      P.busy=false;if(S.plan!==P)return;
      if(res.ok){P.sel=null;P.view=null;P.msg='Réservé : '+roomById(sel.room).name+', '+dayLong(sel.date)+' de '+fmt(sel.s)+' à '+fmt(sel.e)+'.'}else P.err=res.error;
      syncAvatars(false);updateRoomLabels();render()});return true}
  if(t.dataset.bkdel){const b=shownBookings.get(t.dataset.bkdel);if(!b||P.busy)return true;P.busy=true;P.err='';render();
    SRC.cancel(b).then(res=>{P.busy=false;if(S.plan!==P)return;if(res.ok){P.view=null;P.msg='Réservation annulée.'}else P.err=res.error;syncAvatars(false);updateRoomLabels();render()});return true}
  return false;
}
function planInput(t){
  const P=S.plan;if(!P)return false;
  if(t.id==='plRoom'){P.room=t.value;P.sel=null;P.view=null;render();return true}
  if(!P.sel)return false;
  if(t.id==='bkT'){P.form.t=t.value;return true}
  if(t.id==='bkS'){const v=+t.value;const dur=P.sel.e-P.sel.s;P.sel.s=v;if(P.sel.e<=v)P.sel.e=Math.min(DAY1,v+Math.max(30,dur));render();return true}
  if(t.id==='bkE'){P.sel.e=+t.value;render();return true}
  if(t.id==='bkRoom'){P.sel.room=t.value;render();return true}
  if(t.id==='bkAdd'){if(t.value)P.form.people.push(t.value);render();return true}
  if(t.id==='bkTeams'){P.form.teams=t.checked;return true}
  return false;
}
function renderPeopleLive(){
  const desks=DATA.items.filter(i=>i.type==='desk');
  const deskLabel=d=>{const r=roomAt(d.x,d.z);return(r?r.name:'Poste')+' · '+d.id.slice(-4).toUpperCase()};
  const rows=DATA.users.map(u=>{const d=deskOf(u);const self=u.id===S.me.id;return'<tr data-row="'+u.id+'"><td style="min-width:210px"><div style="display:flex;gap:10px;align-items:center">'+avHtml(u)+'<input aria-label="Nom" data-lu="name" value="'+esc(u.name)+'"></div></td>'+
    '<td><input aria-label="E-mail" data-lu="email" value="'+esc(u.email)+'" style="min-width:210px"'+(u.id.startsWith('m-')?'':' disabled title="Adresse du compte Microsoft"')+'></td>'+
    '<td><input aria-label="Fonction" data-lu="title" value="'+esc(u.title||'')+'"></td><td><input aria-label="Équipe" data-lu="team" value="'+esc(u.team)+'"></td>'+
    '<td><select aria-label="Rôle" data-lu="role"><option value="user"'+(u.role!=='admin'?' selected':'')+'>Utilisateur</option><option value="admin"'+(u.role==='admin'?' selected':'')+'>Admin</option></select></td>'+
    '<td>'+(u.connected?'<span class="tag ok">Teams et Outlook</span>':(u.id.startsWith('m-')?'<span class="tag">Jamais connecté</span>':'<span class="tag">Compte seul</span>'))+'</td>'+
    '<td><select aria-label="Poste de '+esc(u.name)+'" data-up="desk"><option value="">Flex</option>'+desks.map(dk=>'<option value="'+dk.id+'"'+(d&&d.id===dk.id?' selected':'')+'>'+esc(deskLabel(dk))+(dk.user&&dk.user!==u.id?' (occupé)':'')+'</option>').join('')+'</select></td>'+
    '<td><button class="iconbtn" data-ludel="'+u.id+'" aria-label="Retirer '+esc(u.name)+'"'+(self?' disabled':'')+'>'+LI.del+'</button></td></tr>'}).join('');
  return '<section class="panel sheet"><div class="sheet-in"><div><h2>Personnes</h2><p class="lead">Chaque personne apparaît à sa première connexion avec Microsoft. Vous pouvez aussi l\'ajouter à l\'avance pour lui attribuer un poste : elle retrouvera sa fiche en se connectant avec la même adresse.</p></div>'+
    '<form class="addrow" id="nuForm"><input id="nu-name" placeholder="Prénom Nom" aria-label="Nom" required><input id="nu-email" type="email" placeholder="adresse@entreprise.fr" aria-label="E-mail"><input id="nu-team" placeholder="Équipe" aria-label="Équipe"><button class="btn pri" type="submit">+ Ajouter</button></form>'+
    '<div class="tbl-wrap"><table><thead><tr><th>Nom</th><th>E-mail</th><th>Fonction</th><th>Équipe</th><th>Rôle</th><th>Connexion</th><th>Poste</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div>'+
    '<p class="note">« Teams et Outlook » : la personne partage son statut et son agenda. « Compte seul » : elle s\'est connectée sans partager ; sa position vient de ce qu\'elle déclare ou des réunions où ses collègues l\'invitent.</p></div></section>';
}
function renderCxLive(){
  const s=DATA.settings;const H=S.health;const n=DATA.users.length,c=DATA.users.filter(u=>u.connected).length;
  const allOk=H&&H.checks&&H.checks.every(x=>x.ok);
  return '<section class="panel sheet"><div class="sheet-in"><div><h2>Connexions</h2><p class="lead">Chacun choisit de connecter son Teams et son Outlook. Étage lit alors son statut, son lieu de travail et son agenda, jamais ses messages. Les salles de réunion et la position des collègues invités se déduisent de ces agendas.</p></div>'+
  '<div class="cards"><div class="card"><h3>Teams et Outlook connectés<span class="status'+(c?'':' warn')+'">'+c+' / '+n+'</span></h3><div class="meter" aria-hidden="true"><span style="width:'+(n?Math.round(c/n*100):0)+'%"></span></div>'+
    '<p class="note" style="margin:0">Plus il y a de personnes connectées, plus le plan est juste : une salle réservée par quelqu\'un qui n\'est pas connecté n\'est visible que si elle a été réservée dans Étage.</p>'+
    '<div class="btns">'+(S.me.connected?'<button class="btn" data-act="disconnect">Déconnecter mon Teams et Outlook</button>':'<button class="btn pri" data-act="connect">Connecter mon Teams et Outlook</button>')+'</div></div>'+
  '<div class="card"><h3>Diagnostic'+(H&&H.checks?'<span class="status'+(allOk?'':' warn')+'">'+(allOk?'Tout fonctionne':H.checks.filter(x=>!x.ok).length+' point(s) à vérifier')+'</span>':'')+'</h3>'+
    (H&&H.checks?'<div class="evlist">'+H.checks.map(x=>'<div class="evr" style="grid-template-columns:20px 1fr"><span style="color:var('+(x.ok?'--ok':'--busy')+');font-weight:700">'+(x.ok?'✓':'✕')+'</span><span>'+esc(x.name)+'<small>'+esc(x.detail)+'</small></span></div>').join('')+'</div>':'<p class="note" style="margin:0">'+(H&&H.error?esc(H.error):'Vérifie le stockage, l\'application Microsoft et votre propre connexion.')+'</p>')+
    '<div class="btns"><button class="btn" id="cxHealth"'+(H&&H.loading?' disabled':'')+'>'+(H&&H.loading?'Diagnostic en cours…':'Lancer le diagnostic')+'</button></div></div>'+
  '<div class="card"><h3>Confidentialité de l\'agenda</h3><p class="note" style="margin:0">Ce que les collègues voient des réunions des autres.</p><div class="seg" role="group" aria-label="Détail de l\'agenda"><button data-agenda="busy" aria-pressed="'+(s.agenda!=='subject')+'">Libre / occupé seulement</button><button data-agenda="subject" aria-pressed="'+(s.agenda==='subject')+'">Objet et lieu</button></div>'+
    '<p class="note" style="margin:0">Les réunions marquées « privé » dans Outlook restent affichées « Privé ».</p></div>'+
  '<div class="card"><h3>Positions devinées</h3><p class="note" style="margin:0">Étage croise statut Teams, lieu déclaré, agendas et salles réservées. Les positions incertaines apparaissent translucides.</p><div class="seg" role="group" aria-label="Positions devinées"><button data-guess="all" aria-pressed="'+(s.guess!=='probable')+'">Toutes les afficher</button><button data-guess="probable" aria-pressed="'+(s.guess==='probable')+'">Seulement les probables</button></div></div>'+
  '<div class="card"><h3>Salles de réunion</h3><p class="note" style="margin:0">Pour qu\'une réunion Outlook occupe la bonne salle, son lieu doit contenir le nom de la salle tel qu\'écrit dans le plan, ou l\'adresse de la salle Exchange renseignée dans « Modéliser ».</p></div>'+
  '<div class="card"><h3>Actualisation</h3><dl class="kv"><dt>Statut Teams</dt><dd>Toutes les 60 s</dd><dt>Agendas</dt><dd>Toutes les 3 min</dd><dt>Réservations Étage</dt><dd>Immédiat</dd></dl></div></div></div></section>';
}
const overlay=$('#overlay');
function render(){
  if(!S.me)return;
  renderTop();
  let html='';
  if(S.tab==='live')html=renderLive();else if(S.tab==='edit')html=renderEdit();else if(S.tab==='people')html=renderPeopleAdmin();else html=renderCx();
  const ae=document.activeElement;const aid=ae&&ae.id;const selS=ae&&ae.selectionStart;
  const cw=$('#calWrap');const keep=cw?[cw.scrollLeft,cw.scrollTop]:null;
  overlay.innerHTML=html;
  const cw2=$('#calWrap');if(cw2&&keep){cw2.scrollLeft=keep[0];cw2.scrollTop=keep[1]}
  if(cw2&&S.plan&&S.plan.scroll){S.plan.scroll=false;cw2.scrollTop=Math.max(0,(S.t-90-480)/30*24);if(S.plan.mode==='room'){const tc=cw2.querySelector('.col.today');if(tc&&window.innerWidth<860)cw2.scrollLeft=Math.max(0,tc.offsetLeft-60)}}
  if(aid){const n=document.getElementById(aid);if(n&&n!==document.body){n.focus();try{if(selS!=null)n.setSelectionRange(selS,selS)}catch(e){}}}
  document.querySelector('.mapctl').hidden=S.tab==='people'||S.tab==='cx';
  labelsEl.hidden=S.tab==='people'||S.tab==='cx';
  updateRoomLabels();
}

/* ---------- events ---------- */
document.addEventListener('click',e=>{
  const t=e.target.closest('button,a');if(!t)return;
  if(t.dataset.openPlan){openPlanning(null,t.dataset.openPlan);return}
  if(t.closest('.plan')&&planClick(t))return;
  if(t.dataset.tab){const prev=S.tab;S.tab=t.dataset.tab;S.sel=null;S.plan=null;S.tool='select';S.menu=false;if((prev==='edit')!==(S.tab==='edit'))buildScene();else buildNameLabels();render();drawSelection();return}
  if(t.id==='meBtn'){S.menu=!S.menu;renderTop();return}
  if(t.dataset.act){S.menu=false;if(t.dataset.act==='names'){S.names=!S.names;buildNameLabels()}if(t.dataset.act==='switch'){S.me=null;store.del('etage-me');showLogin();return}if(t.dataset.act==='logout'){SRC.logout();return}if(t.dataset.act==='login'){LIVE_SRC.login();return}if(t.dataset.act==='connect'){LIVE_SRC.connect();return}if(t.dataset.act==='disconnect'){SRC.disconnect().then(()=>{S.me=SRC.me();syncAvatars(false);render();toast('Teams et Outlook déconnectés : Étage n\'y a plus accès.')}).catch(err=>toast(err.message));return}if(t.dataset.act==='reset'){DATA=SRC.reset();S.sel=null;S.me=userById(S.me.id)||DATA.users[0];buildScene();fitView(true)}render();return}
  if(S.menu&&!t.closest('.menu')){S.menu=false;renderTop()}
  if(t.dataset.f){S.filter=t.dataset.f;render();return}
  if(t.id==='pcol'){S.peopleCollapsed=!S.peopleCollapsed;render();return}
  if(t.dataset.person){selectPerson(t.dataset.person,true);if(window.innerWidth<860){S.peopleCollapsed=true;render()}return}
  if(t.hasAttribute('data-close')){S.sel=null;render();drawSelection();syncAvatars(false);return}
  if(t.dataset.tool){S.tool=t.dataset.tool;S.sel=null;render();drawSelection();return}
  if(t.hasAttribute('data-del')){deleteSel();return}
  if(t.hasAttribute('data-rot')){rotateSel();return}
  if(t.hasAttribute('data-dup')){dupSel();return}
  if(t.id==='bgPick'){$('#bgFile').click();return}
  if(t.id==='bgDel'){delete DATA.bg;changed();return}
  if(t.dataset.udel){DATA.items.forEach(i=>{if(i.user===t.dataset.udel)i.user=null});DATA.users=DATA.users.filter(u=>u.id!==t.dataset.udel);changed();return}
  if(t.id==='addUser'){const colors=['#3D5A80','#C0603B','#2A9D8F','#8D6A9F','#B5651D','#386641'];const u={id:uid('u'),name:'Nouvelle personne',title:'Poste',team:'Équipe',email:'prenom.nom@atelier-demo.fr',role:'user',day:'office',in:'09:00',out:'17:30',color:colors[DATA.users.length%colors.length],events:[E2('12:30','13:30','Pause déjeuner','lunch')]};DATA.users.push(u);changed();const inp=document.querySelector('tr[data-row="'+u.id+'"] input');if(inp){inp.focus();inp.select()}return}
  if(t.dataset.guess){DATA.settings.guess=t.dataset.guess;save();syncAvatars(false);render();return}
  if(t.dataset.agenda){DATA.settings.agenda=t.dataset.agenda;save();render();if(LIVE)toast('Réglage enregistré : il s\'applique à la prochaine actualisation des agendas.');return}
  if(t.id==='cxHealth'){S.health={loading:true};render();SRC.health().then(r=>{S.health=r}).catch(err=>{S.health={error:err.message}}).finally(()=>render());return}
  if(t.id==='msLogin'||t.id==='demoPill'){LIVE_SRC.login();return}
  if(t.dataset.mystatus){const cur=S.me.status&&S.me.status.date===TODAY?S.me.status.loc:null;const loc=cur===t.dataset.mystatus?null:t.dataset.mystatus;
    SRC.setStatus(loc).then(()=>{S.me=SRC.me();syncAvatars(false);updateRoomLabels();render()}).catch(err=>toast(err.message));return}
  if(t.dataset.ludel){SRC.deleteUser(t.dataset.ludel).then(()=>{syncAvatars(true);render();toast('Personne retirée.')}).catch(err=>toast(err.message));return}
  if(t.id==='cxTest'||t.id==='cxSync'){const m=$('#cxMsg');m.hidden=false;const s=DATA.settings;
    m.textContent=(!s.tenant||!s.client)?'Renseignez l\'ID du locataire et l\'ID de l\'application, puis faites valider les autorisations par un administrateur Microsoft 365.':'Identifiants enregistrés. Ce prototype ne contacte pas Microsoft : la connexion réelle se fera depuis le serveur de la version complète.';return}
});
const E2=(s,e,t,k)=>({s,e,t,k,room:null});
document.addEventListener('input',e=>{
  const t=e.target;
  if(t.id==='bkT'&&S.plan){planInput(t);return}
  if(t.id==='q'){S.q=t.value;render();return}
  if(t.id==='clockR'){setTime(+t.value);return}
  if(t.dataset.floor){DATA.floor[t.dataset.floor]=Math.max(6,Math.min(200,+t.value||6));save();buildScene();return}
  if(t.dataset.bg&&DATA.bg){const v=+t.value;if(Number.isFinite(v))DATA.bg[t.dataset.bg]=t.dataset.bg==='w'?Math.max(1,v):v;save();buildScene();return}
  if(t.dataset.rp){const r=roomById(S.sel.id);let v=t.value;if(['w','d','capacity'].includes(t.dataset.rp))v=Math.max(1,+v||1);r[t.dataset.rp]=v;save();if(t.dataset.rp==='name'||t.dataset.rp==='mailbox'){updateRoomLabels();return}buildScene();if(t.dataset.rp==='type')render();return}
  if(t.dataset.cx){DATA.settings[t.dataset.cx]=t.value.trim();save();return}
  if(t.dataset.up&&(t.tagName==='INPUT')){const u=userById(t.closest('tr').dataset.row);u[t.dataset.up]=t.value;save();if(t.dataset.up==='name')buildNameLabels();return}
});
document.addEventListener('submit',e=>{
  if(e.target.id!=='nuForm')return;e.preventDefault();
  const f={name:$('#nu-name').value.trim(),email:$('#nu-email').value.trim(),team:$('#nu-team').value.trim()||undefined};
  SRC.addUser(f).then(()=>{syncAvatars(true);render();toast(f.name+' ajouté(e).')}).catch(err=>toast(err.message));
});
document.addEventListener('change',e=>{
  const t=e.target;
  if(t.dataset.lu){const id=t.closest('tr').dataset.row;SRC.updateUser(id,{[t.dataset.lu]:t.value}).then(u=>{if(id===S.me.id)S.me=SRC.me();buildNameLabels();renderTop()}).catch(err=>{toast(err.message);render()});return}
  if(t.closest('.plan')&&t.id!=='bkT'&&planInput(t))return;
  if(t.dataset.mbsel){const r=roomById(S.sel.id);const o=DATA.outlookRooms.find(x=>x.email===t.value);r.mailbox=o?o.email:'';r.outlookName=o?o.name:'';if(o&&o.capacity)r.capacity=o.capacity;changed();return}
  if(t.dataset.ip==='user'){const it=itemById(S.sel.id);const v=t.value||null;if(v)DATA.items.forEach(i=>{if(i.type==='desk'&&i.user===v)i.user=null});it.user=v;changed();return}
  if(t.id==='bgFile'){if(t.files&&t.files[0])importBg(t.files[0]);return}
  if(t.dataset.ip==='glass'){itemById(S.sel.id).glass=t.checked;changed();return}
  if(t.dataset.ip==='seats'){itemById(S.sel.id).seats=+t.value;changed();return}
  if(t.dataset.up&&t.tagName==='SELECT'){const u=userById(t.closest('tr').dataset.row);const k=t.dataset.up;
    if(k==='desk'){DATA.items.forEach(i=>{if(i.type==='desk'&&i.user===u.id)i.user=null});if(t.value){const d=itemById(t.value);d.user=u.id}}else u[k]=t.value;
    if(u.id===S.me.id&&k==='role'&&t.value!=='admin'){u.role='admin';t.value='admin';return}
    changed();return}
});
function setTime(m){S.t=m;syncAvatars(false);updateRoomLabels();if(S.tab==='live')render();else renderTop()}
let playTimer=null;
$('#play').addEventListener('click',()=>{S.playing=!S.playing;$('#play').innerHTML=S.playing?'<svg viewBox="0 0 16 16" fill="currentColor"><rect x="4" y="3" width="3" height="10"/><rect x="9" y="3" width="3" height="10"/></svg>':'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4 2.5v11l9-5.5z"/></svg>';
  $('#play').setAttribute('aria-label',S.playing?'Mettre en pause':'Lancer la simulation');
  clearInterval(playTimer);if(S.playing)playTimer=setInterval(()=>{setTime(S.t>=1200?420:S.t+5)},350)});
$('#rotL').onclick=()=>flyTo(view.T,view.zoom,view.az+Math.PI/2);
$('#rotR').onclick=()=>flyTo(view.T,view.zoom,view.az-Math.PI/2);
$('#zoomI').onclick=()=>flyTo(view.T,Math.min(5,view.zoom*1.35));
$('#zoomO').onclick=()=>flyTo(view.T,Math.max(.35,view.zoom/1.35));
$('#fit').onclick=()=>fitView(true);

/* theme changes */
const themeRebuild=()=>{buildScene()};
try{window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',themeRebuild)}catch(e){}
new MutationObserver(themeRebuild).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});

/* ---------- loop ---------- */
function loop(now){
  stepAnim(now);applyCam();
  for(const a of avatars.values()){if(!a.on||!a.target)continue;const p=a.g.position;p.x+=(a.target.x-p.x)*.12;p.z+=(a.target.z-p.z)*.12;
    let dr=a.target.ry-a.g.rotation.y;dr=Math.atan2(Math.sin(dr),Math.cos(dr));a.g.rotation.y+=dr*.15}
  renderer.render(scene,cam);positionLabels();requestAnimationFrame(loop);
}

/* ---------- connexion et démarrage ---------- */
function showLogin(err){
  $('#app').hidden=true;$('#login').hidden=false;
  const ms=$('#msLogin');ms.disabled=!LIVE_SRC.available;$('#msNote').textContent=LIVE_SRC.available?'':'(disponible une fois le site déployé)';
  $('#accounts').innerHTML=SRC.accounts().map(u=>'<button class="acc" data-login="'+u.id+'">'+avHtml(u)+'<span class="txt"><span class="nm" style="display:block">'+esc(u.name)+'</span><span class="sub" style="display:block">'+(u.role==='admin'?'Administratrice · modélise le plan, gère les comptes':esc(u.title)+' · consulte le plan')+'</span></span><span class="tag'+(u.role==='admin'?' admin':'')+'">'+(u.role==='admin'?'Admin':'Utilisateur')+'</span></button>').join('');
  $('#loginErr').hidden=!err;$('#loginErr').textContent=err||'';
}
$('#accounts').addEventListener('click',e=>{const b=e.target.closest('[data-login]');if(!b)return;login(b.dataset.login)});
function enterApp(){S.tab='live';S.sel=null;$('#login').hidden=true;$('#app').hidden=false;
  for(const el of [$('#play'),$('#clockR')])el.hidden=LIVE;$('#clockMode').textContent=LIVE?'En direct':'Simulation';
  requestAnimationFrame(()=>{resize();buildScene();fitView(false);applyCam();render()})}
function login(id){S.me=userById(id);store.set('etage-me',id);enterApp()}
let pollTimer=null;
function startPolling(){
  clearInterval(pollTimer);
  pollTimer=setInterval(async()=>{
    S.t=nowMin();
    if(document.hidden)return;
    try{await SRC.refresh()}catch(err){if(err.status===401){location.reload();return}toast('Actualisation impossible : '+err.message)}
    syncAvatars(false);updateRoomLabels();
    const ae=document.activeElement;
    if(!pSel&&!(ae&&ae.matches('input:not([type=checkbox]),textarea')))render();else renderTop();
  },60000);
}
function bindSource(){SRC.onChange=()=>{updateRoomLabels();if(!pSel&&S.me)render()};SRC.onError=msg=>toast(msg)}
async function start(){
  palette();requestAnimationFrame(loop);
  const params=new URLSearchParams(location.search);const authErr=params.get('auth_error');const justConnected=params.has('connected');
  if(authErr||justConnected)history.replaceState(null,'',location.pathname);
  let signed=false;
  if(ENV.VITE_MODE!=='demo')signed=await LIVE_SRC.init();
  if(signed){
    SRC=LIVE_SRC;LIVE=true;bindSource();
    try{DATA=await SRC.load()}catch(err){SRC=createDemoSource();LIVE=false;bindSource();DATA=await SRC.load();showLogin('Étage ne répond pas : '+err.message);return}
    S.me=SRC.me();S.t=nowMin();enterApp();startPolling();
    if(justConnected)setTimeout(()=>toast('Teams et Outlook connectés : vous apparaissez en direct.'),700);
    if(authErr)setTimeout(()=>toast(authErr),700);
    return;
  }
  bindSource();DATA=await SRC.load();
  const remembered=store.get('etage-me');
  if(remembered&&userById(remembered)&&!authErr)login(remembered);else showLogin(authErr);
}
start();
window.__etage={S,DATA:()=>DATA,login,setTime,openPlanning,get SRC(){return SRC}};
