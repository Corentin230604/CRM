(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ba="149",Sc=0,Ga=1,Tc=2,Sl=1,Tl=2,os=3,Vn=0,Gt=1,Tn=2,Un=0,Ni=1,Va=2,Ha=3,Wa=4,Ec=5,Ii=100,Ac=101,Cc=102,qa=103,ja=104,Lc=200,Dc=201,Pc=202,Rc=203,El=204,Al=205,Ic=206,zc=207,kc=208,Fc=209,Nc=210,Oc=0,Uc=1,Bc=2,ia=3,Gc=4,Vc=5,Hc=6,Wc=7,ya=0,qc=1,jc=2,En=0,Xc=1,Yc=2,Zc=3,$c=4,Jc=5,Cl=300,Bi=301,Gi=302,sa=303,ra=304,sr=306,aa=1e3,nn=1001,oa=1002,Ct=1003,Xa=1004,_r=1005,jt=1006,Kc=1007,hs=1008,hi=1009,Qc=1010,eu=1011,Ll=1012,tu=1013,ri=1014,ai=1015,fs=1016,nu=1017,iu=1018,Oi=1020,su=1021,sn=1023,ru=1024,au=1025,li=1026,Vi=1027,ou=1028,lu=1029,cu=1030,uu=1031,du=1033,vr=33776,br=33777,yr=33778,Mr=33779,Ya=35840,Za=35841,$a=35842,Ja=35843,hu=36196,Ka=37492,Qa=37496,eo=37808,to=37809,no=37810,io=37811,so=37812,ro=37813,ao=37814,oo=37815,lo=37816,co=37817,uo=37818,ho=37819,fo=37820,po=37821,wr=36492,fu=36283,mo=36284,go=36285,xo=36286,fi=3e3,Xe=3001,pu=3200,mu=3201,Dl=0,gu=1,ln="srgb",ps="srgb-linear",Sr=7680,xu=519,_o=35044,vo="300 es",la=1035;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tr=Math.PI/180,bo=180/Math.PI;function Es(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function Ot(i,e,t){return Math.max(e,Math.min(t,i))}function _u(i,e){return(i%e+e)%e}function Er(i,e,t){return(1-t)*i+t*e}function yo(i){return(i&i-1)===0&&i!==0}function ca(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ls(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],p=s[0],f=s[3],_=s[6],b=s[1],v=s[4],M=s[7],w=s[2],L=s[5],C=s[8];return r[0]=o*p+a*b+c*w,r[3]=o*f+a*v+c*L,r[6]=o*_+a*M+c*C,r[1]=l*p+u*b+h*w,r[4]=l*f+u*v+h*L,r[7]=l*_+u*M+h*C,r[2]=d*p+m*b+g*w,r[5]=d*f+m*v+g*L,r[8]=d*_+m*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,m=l*r-o*c,g=t*h+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(s*l-u*n)*p,e[2]=(a*n-s*o)*p,e[3]=d*p,e[4]=(u*t-s*c)*p,e[5]=(s*r-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ar.makeScale(e,t)),this}rotate(e){return this.premultiply(Ar.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ar.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ar=new Ut;function Pl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Cr={[ln]:{[ps]:ci},[ps]:{[ln]:$s}},Tt={legacyMode:!0,get workingColorSpace(){return ps},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Cr[e]&&Cr[e][t]!==void 0){const n=Cr[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},st={r:0,g:0,b:0},Zt={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Lr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Ps(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Tt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Tt.workingColorSpace){if(e=_u(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lr(o,r,e+1/3),this.g=Lr(o,r,e),this.b=Lr(o,r,e-1/3)}return Tt.toWorkingColorSpace(this,s),this}setStyle(e,t=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Tt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Tt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Tt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Tt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ln){const n=Rl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Tt.fromWorkingColorSpace(Ps(this,st),e),Ot(st.r*255,0,255)<<16^Ot(st.g*255,0,255)<<8^Ot(st.b*255,0,255)<<0}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(Ps(this,st),t);const n=st.r,s=st.g,r=st.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(Ps(this,st),t),e.r=st.r,e.g=st.g,e.b=st.b,e}getStyle(e=ln){return Tt.fromWorkingColorSpace(Ps(this,st),e),e!==ln?`color(${e} ${st.r} ${st.g} ${st.b})`:`rgb(${st.r*255|0},${st.g*255|0},${st.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Zt),Zt.h+=e,Zt.s+=t,Zt.l+=n,this.setHSL(Zt.h,Zt.s,Zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zt),e.getHSL(Ds);const n=Er(Zt.h,Ds.h,t),s=Er(Zt.s,Ds.s,t),r=Er(Zt.l,Ds.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Be.NAMES=Rl;let vi;class Il{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vi===void 0&&(vi=ms("canvas")),vi.width=e.width,vi.height=e.height;const n=vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class zl{constructor(e=null){this.isSource=!0,this.uuid=Es(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dr(s[o].image)):r.push(Dr(s[o]))}else r=Dr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vu=0;class Pt extends ji{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=nn,s=nn,r=jt,o=hs,a=sn,c=hi,l=Pt.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Es(),this.name="",this.source=new zl(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case aa:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case aa:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Cl;Pt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],p=c[2],f=c[6],_=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,M=(m+1)/2,w=(_+1)/2,L=(u+d)/4,C=(h+p)/4,x=(g+f)/4;return v>M&&v>w?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=L/n,r=C/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=L/s,r=x/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=x/r),this.set(n,s,r,t),this}let b=Math.sqrt((f-g)*(f-g)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(f-g)/b,this.y=(h-p)/b,this.z=(d-u)/b,this.w=Math.acos((l+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pi extends ji{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Pt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kl extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bu extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],m=r[o+1],g=r[o+2],p=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(h!==p||c!==d||l!==m||u!==g){let f=1-a;const _=c*d+l*m+u*g+h*p,b=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const w=Math.sqrt(v),L=Math.atan2(w,_*b);f=Math.sin(f*L)/w,a=Math.sin(a*L)/w}const M=a*b;if(c=c*f+d*M,l=l*f+m*M,u=u*f+g*M,h=h*f+p*M,f===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=w,l*=w,u*=w,h*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*m-l*d,e[t+1]=c*g+u*d+l*h-a*m,e[t+2]=l*g+u*m+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*s-a*n,u=c*n+a*t-r*s,h=c*s+r*n-o*t,d=-r*t-o*n-a*s;return this.x=l*c+d*-r+u*-a-h*-o,this.y=u*c+d*-o+h*-r-l*-a,this.z=h*c+d*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pr.copy(this).projectOnVector(e),this.sub(Pr)}reflect(e){return this.sub(Pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pr=new R,Mo=new As;class Xi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],d=e[c+2];u<t&&(t=u),h<n&&(n=h),d<s&&(s=d),u>r&&(r=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),d=e.getZ(c);u<t&&(t=u),h<n&&(n=h),d<s&&(s=d),u>r&&(r=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Kn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Kn)}else n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox),Rr.applyMatrix4(e.matrixWorld),this.union(Rr);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),Rs.subVectors(this.max,es),bi.subVectors(e.a,es),yi.subVectors(e.b,es),Mi.subVectors(e.c,es),Dn.subVectors(yi,bi),Pn.subVectors(Mi,yi),Qn.subVectors(bi,Mi);let t=[0,-Dn.z,Dn.y,0,-Pn.z,Pn.y,0,-Qn.z,Qn.y,Dn.z,0,-Dn.x,Pn.z,0,-Pn.x,Qn.z,0,-Qn.x,-Dn.y,Dn.x,0,-Pn.y,Pn.x,0,-Qn.y,Qn.x,0];return!Ir(t,bi,yi,Mi,Rs)||(t=[1,0,0,0,1,0,0,0,1],!Ir(t,bi,yi,Mi,Rs))?!1:(Is.crossVectors(Dn,Pn),t=[Is.x,Is.y,Is.z],Ir(t,bi,yi,Mi,Rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Kn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new R,new R,new R,new R,new R,new R,new R,new R],Kn=new R,Rr=new Xi,bi=new R,yi=new R,Mi=new R,Dn=new R,Pn=new R,Qn=new R,es=new R,Rs=new R,Is=new R,ei=new R;function Ir(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ei.fromArray(i,r);const a=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),c=e.dot(ei),l=t.dot(ei),u=n.dot(ei);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const yu=new Xi,ts=new R,zr=new R;class rr{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const t=ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ts,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(zr)),this.expandByPoint(ts.copy(e.center).sub(zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new R,kr=new R,zs=new R,Rn=new R,Fr=new R,ks=new R,Nr=new R;class Ma{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.direction).multiplyScalar(t).add(this.origin),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){kr.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(kr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(zs),a=Rn.dot(this.direction),c=-Rn.dot(zs),l=Rn.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const p=1/u;h*=p,d*=p,m=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(zs).multiplyScalar(d).add(kr),m}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,s,r){Fr.subVectors(t,e),ks.subVectors(n,e),Nr.crossVectors(Fr,ks);let o=this.direction.dot(Nr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rn.subVectors(this.origin,e);const c=a*this.direction.dot(ks.crossVectors(Rn,ks));if(c<0)return null;const l=a*this.direction.dot(Fr.cross(Rn));if(l<0||c+l>o)return null;const u=-a*Rn.dot(Nr);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,o,a,c,l,u,h,d,m,g,p,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=u,_[10]=h,_[14]=d,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/wi.setFromMatrixColumn(e,0).length(),r=1/wi.setFromMatrixColumn(e,1).length(),o=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,m=o*h,g=a*u,p=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=d-p*l,t[9]=-a*c,t[2]=p-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,g=l*u,p=l*h;t[0]=d+p*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=p+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,g=l*u,p=l*h;t[0]=d-p*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=p-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*h,g=a*u,p=a*h;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+p,t[1]=c*h,t[5]=p*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*u,t[4]=p-d*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+g,t[10]=d-p*h}else if(e.order==="XZY"){const d=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+p,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mu,e,wu)}lookAt(e,t,n){const s=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),In.crossVectors(n,Ft),In.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),In.crossVectors(n,Ft)),In.normalize(),Fs.crossVectors(Ft,In),s[0]=In.x,s[4]=Fs.x,s[8]=Ft.x,s[1]=In.y,s[5]=Fs.y,s[9]=Ft.y,s[2]=In.z,s[6]=Fs.z,s[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],p=n[6],f=n[10],_=n[14],b=n[3],v=n[7],M=n[11],w=n[15],L=s[0],C=s[4],x=s[8],T=s[12],D=s[1],W=s[5],q=s[9],k=s[13],I=s[2],H=s[6],$=s[10],K=s[14],X=s[3],ne=s[7],te=s[11],fe=s[15];return r[0]=o*L+a*D+c*I+l*X,r[4]=o*C+a*W+c*H+l*ne,r[8]=o*x+a*q+c*$+l*te,r[12]=o*T+a*k+c*K+l*fe,r[1]=u*L+h*D+d*I+m*X,r[5]=u*C+h*W+d*H+m*ne,r[9]=u*x+h*q+d*$+m*te,r[13]=u*T+h*k+d*K+m*fe,r[2]=g*L+p*D+f*I+_*X,r[6]=g*C+p*W+f*H+_*ne,r[10]=g*x+p*q+f*$+_*te,r[14]=g*T+p*k+f*K+_*fe,r[3]=b*L+v*D+M*I+w*X,r[7]=b*C+v*W+M*H+w*ne,r[11]=b*x+v*q+M*$+w*te,r[15]=b*T+v*k+M*K+w*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],p=e[7],f=e[11],_=e[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*m-n*c*m)+p*(+t*c*m-t*l*d+r*o*d-s*o*m+s*l*u-r*c*u)+f*(+t*l*h-t*a*m-r*o*h+n*o*m+r*a*u-n*l*u)+_*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],p=e[13],f=e[14],_=e[15],b=h*f*l-p*d*l+p*c*m-a*f*m-h*c*_+a*d*_,v=g*d*l-u*f*l-g*c*m+o*f*m+u*c*_-o*d*_,M=u*p*l-g*h*l+g*a*m-o*p*m-u*a*_+o*h*_,w=g*h*c-u*p*c-g*a*d+o*p*d+u*a*f-o*h*f,L=t*b+n*v+s*M+r*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=b*C,e[1]=(p*d*r-h*f*r-p*s*m+n*f*m+h*s*_-n*d*_)*C,e[2]=(a*f*r-p*c*r+p*s*l-n*f*l-a*s*_+n*c*_)*C,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*m-n*c*m)*C,e[4]=v*C,e[5]=(u*f*r-g*d*r+g*s*m-t*f*m-u*s*_+t*d*_)*C,e[6]=(g*c*r-o*f*r-g*s*l+t*f*l+o*s*_-t*c*_)*C,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*m+t*c*m)*C,e[8]=M*C,e[9]=(g*h*r-u*p*r-g*n*m+t*p*m+u*n*_-t*h*_)*C,e[10]=(o*p*r-g*a*r+g*n*l-t*p*l-o*n*_+t*a*_)*C,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*m-t*a*m)*C,e[12]=w*C,e[13]=(u*p*s-g*h*s+g*n*d-t*p*d-u*n*f+t*h*f)*C,e[14]=(g*a*s-o*p*s-g*n*c+t*p*c+o*n*f-t*a*f)*C,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,m=r*u,g=r*h,p=o*u,f=o*h,_=a*h,b=c*l,v=c*u,M=c*h,w=n.x,L=n.y,C=n.z;return s[0]=(1-(p+_))*w,s[1]=(m+M)*w,s[2]=(g-v)*w,s[3]=0,s[4]=(m-M)*L,s[5]=(1-(d+_))*L,s[6]=(f+b)*L,s[7]=0,s[8]=(g+v)*C,s[9]=(f-b)*C,s[10]=(1-(d+p))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=wi.set(s[0],s[1],s[2]).length();const o=wi.set(s[4],s[5],s[6]).length(),a=wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$t.copy(this);const l=1/r,u=1/o,h=1/a;return $t.elements[0]*=l,$t.elements[1]*=l,$t.elements[2]*=l,$t.elements[4]*=u,$t.elements[5]*=u,$t.elements[6]*=u,$t.elements[8]*=h,$t.elements[9]*=h,$t.elements[10]*=h,t.setFromRotationMatrix($t),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o){const a=this.elements,c=2*r/(t-e),l=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),d=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o){const a=this.elements,c=1/(t-e),l=1/(n-s),u=1/(o-r),h=(t+e)*c,d=(n+s)*l,m=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wi=new R,$t=new nt,Mu=new R(0,0,0),wu=new R(1,1,1),In=new R,Fs=new R,Ft=new R,wo=new nt,So=new As;class ar{constructor(e=0,t=0,n=0,s=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return So.setFromEuler(this),this.setFromQuaternion(So,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class wa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Su=0;const To=new R,Si=new As,yn=new nt,Ns=new R,ns=new R,Tu=new R,Eu=new As,Eo=new R(1,0,0),Ao=new R(0,1,0),Co=new R(0,0,1),Au={type:"added"},Lo={type:"removed"};class gt extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new R,t=new ar,n=new As,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Ut}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(Eo,e)}rotateY(e){return this.rotateOnAxis(Ao,e)}rotateZ(e){return this.rotateOnAxis(Co,e)}translateOnAxis(e,t){return To.copy(e).applyQuaternion(this.quaternion),this.position.add(To.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eo,e)}translateY(e){return this.translateOnAxis(Ao,e)}translateZ(e){return this.translateOnAxis(Co,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ns.copy(e):Ns.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(ns,Ns,this.up):yn.lookAt(Ns,ns,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(yn),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Au)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Lo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,e,Tu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,Eu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}gt.DEFAULT_UP=new R(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new R,Mn=new R,Or=new R,wn=new R,Ti=new R,Ei=new R,Do=new R,Ur=new R,Br=new R,Gr=new R;class Sn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jt.subVectors(e,t),s.cross(Jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jt.subVectors(s,t),Mn.subVectors(n,t),Or.subVectors(e,t);const o=Jt.dot(Jt),a=Jt.dot(Mn),c=Jt.dot(Or),l=Mn.dot(Mn),u=Mn.dot(Or),h=o*l-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,m=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wn),wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,wn),c.set(0,0),c.addScaledVector(r,wn.x),c.addScaledVector(o,wn.y),c.addScaledVector(a,wn.z),c}static isFrontFacing(e,t,n,s){return Jt.subVectors(n,t),Mn.subVectors(e,t),Jt.cross(Mn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Jt.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Sn.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ti.subVectors(s,n),Ei.subVectors(r,n),Ur.subVectors(e,n);const c=Ti.dot(Ur),l=Ei.dot(Ur);if(c<=0&&l<=0)return t.copy(n);Br.subVectors(e,s);const u=Ti.dot(Br),h=Ei.dot(Br);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ti,o);Gr.subVectors(e,r);const m=Ti.dot(Gr),g=Ei.dot(Gr);if(g>=0&&m<=g)return t.copy(r);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ei,a);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return Do.subVectors(r,s),a=(h-u)/(h-u+(m-g)),t.copy(s).addScaledVector(Do,a);const _=1/(f+p+d);return o=p*_,a=d*_,t.copy(n).addScaledVector(Ti,o).addScaledVector(Ei,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Cu=0;class Yi extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=Ni,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=El,this.blendDst=Al,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mi extends Yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new R,Os=new Fe;class hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_o,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_o&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Fl extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nl extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $e extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lu=0;const qt=new nt,Vr=new gt,Ai=new R,Nt=new Xi,is=new Xi,ft=new R;class Rt extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pl(e)?Nl:Fl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return Vr.lookAt(e),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];is.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Nt.min,is.min),Nt.expandByPoint(ft),ft.addVectors(Nt.max,is.max),Nt.expandByPoint(ft)):(Nt.expandByPoint(is.min),Nt.expandByPoint(is.max))}Nt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ft));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ft.fromBufferAttribute(a,l),c&&(Ai.fromBufferAttribute(e,l),ft.add(Ai)),s=Math.max(s,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let D=0;D<a;D++)l[D]=new R,u[D]=new R;const h=new R,d=new R,m=new R,g=new Fe,p=new Fe,f=new Fe,_=new R,b=new R;function v(D,W,q){h.fromArray(s,D*3),d.fromArray(s,W*3),m.fromArray(s,q*3),g.fromArray(o,D*2),p.fromArray(o,W*2),f.fromArray(o,q*2),d.sub(h),m.sub(h),p.sub(g),f.sub(g);const k=1/(p.x*f.y-f.x*p.y);isFinite(k)&&(_.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(k),b.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(k),l[D].add(_),l[W].add(_),l[q].add(_),u[D].add(b),u[W].add(b),u[q].add(b))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let D=0,W=M.length;D<W;++D){const q=M[D],k=q.start,I=q.count;for(let H=k,$=k+I;H<$;H+=3)v(n[H+0],n[H+1],n[H+2])}const w=new R,L=new R,C=new R,x=new R;function T(D){C.fromArray(r,D*3),x.copy(C);const W=l[D];w.copy(W),w.sub(C.multiplyScalar(C.dot(W))).normalize(),L.crossVectors(x,W);const k=L.dot(u[D])<0?-1:1;c[D*4]=w.x,c[D*4+1]=w.y,c[D*4+2]=w.z,c[D*4+3]=k}for(let D=0,W=M.length;D<W;++D){const q=M[D],k=q.start,I=q.count;for(let H=k,$=k+I;H<$;H+=3)T(n[H+0]),T(n[H+1]),T(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,u=new R,h=new R;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let p=0,f=c.length;p<f;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let _=0;_<u;_++)d[g++]=l[m++]}return new hn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Po=new nt,Ci=new Ma,Hr=new rr,ss=new R,rs=new R,as=new R,Wr=new R,Us=new R,Bs=new Fe,Gs=new Fe,Vs=new Fe,qr=new R,Hs=new R;class Je extends gt{constructor(e=new Rt,t=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Us.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Wr.fromBufferAttribute(h,e),o?Us.addScaledVector(Wr,u):Us.addScaledVector(Wr.sub(t),u))}t.add(Us)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),e.ray.intersectsSphere(Hr)===!1)||(Po.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(Po),n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,h=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,g=h.length;m<g;m++){const p=h[m],f=s[p.materialIndex],_=Math.max(p.start,d.start),b=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=_,M=b;v<M;v+=3){const w=a.getX(v),L=a.getX(v+1),C=a.getX(v+2);o=Ws(this,f,e,Ci,l,u,w,L,C),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=m,f=g;p<f;p+=3){const _=a.getX(p),b=a.getX(p+1),v=a.getX(p+2);o=Ws(this,s,e,Ci,l,u,_,b,v),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(s))for(let m=0,g=h.length;m<g;m++){const p=h[m],f=s[p.materialIndex],_=Math.max(p.start,d.start),b=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let v=_,M=b;v<M;v+=3){const w=v,L=v+1,C=v+2;o=Ws(this,f,e,Ci,l,u,w,L,C),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let p=m,f=g;p<f;p+=3){const _=p,b=p+1,v=p+2;o=Ws(this,s,e,Ci,l,u,_,b,v),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Du(i,e,t,n,s,r,o,a){let c;if(e.side===Gt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Vn,a),c===null)return null;Hs.copy(a),Hs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Hs);return l<t.near||l>t.far?null:{distance:l,point:Hs.clone(),object:i}}function Ws(i,e,t,n,s,r,o,a,c){i.getVertexPosition(o,ss),i.getVertexPosition(a,rs),i.getVertexPosition(c,as);const l=Du(i,e,t,n,ss,rs,as,qr);if(l){s&&(Bs.fromBufferAttribute(s,o),Gs.fromBufferAttribute(s,a),Vs.fromBufferAttribute(s,c),l.uv=Sn.getUV(qr,ss,rs,as,Bs,Gs,Vs,new Fe)),r&&(Bs.fromBufferAttribute(r,o),Gs.fromBufferAttribute(r,a),Vs.fromBufferAttribute(r,c),l.uv2=Sn.getUV(qr,ss,rs,as,Bs,Gs,Vs,new Fe));const u={a:o,b:a,c,normal:new R,materialIndex:0};Sn.getNormal(ss,rs,as,u.normal),l.face=u}return l}class xi extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(h,2));function g(p,f,_,b,v,M,w,L,C,x,T){const D=M/C,W=w/x,q=M/2,k=w/2,I=L/2,H=C+1,$=x+1;let K=0,X=0;const ne=new R;for(let te=0;te<$;te++){const fe=te*W-k;for(let N=0;N<H;N++){const Y=N*D-q;ne[p]=Y*b,ne[f]=fe*v,ne[_]=I,l.push(ne.x,ne.y,ne.z),ne[p]=0,ne[f]=0,ne[_]=L>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(N/C),h.push(1-te/x),K+=1}}for(let te=0;te<x;te++)for(let fe=0;fe<C;fe++){const N=d+fe+H*te,Y=d+fe+H*(te+1),re=d+(fe+1)+H*(te+1),ae=d+(fe+1)+H*te;c.push(N,Y,ae),c.push(Y,re,ae),X+=6}a.addGroup(m,X,T),m+=X,d+=K}}static fromJSON(e){return new xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=Hi(i[t]);for(const s in n)e[s]=n[s]}return e}function Pu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ol(i){return i.getRenderTarget()===null&&i.outputEncoding===Xe?ln:ps}const Ru={clone:Hi,merge:Et};var Iu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iu,this.fragmentShader=zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Pu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ul extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class en extends Ul{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Di=1;class ku extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new en(Li,Di,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new en(Li,Di,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new en(Li,Di,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new en(Li,Di,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new en(Li,Di,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new en(Li,Di,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=En,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Bl extends Pt{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fu extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Bl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xi(5,5,5),r=new gi({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Un});r.uniforms.tEquirect.value=t;const o=new Je(s,r),a=t.minFilter;return t.minFilter===hs&&(t.minFilter=jt),new ku(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const jr=new R,Nu=new R,Ou=new Ut;class zn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=jr.subVectors(n,t).cross(Nu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(jr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ou.getNormalMatrix(e),s=this.coplanarPoint(jr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new rr,qs=new R;class Sa{constructor(e=new zn,t=new zn,n=new zn,s=new zn,r=new zn,o=new zn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],m=n[9],g=n[10],p=n[11],f=n[12],_=n[13],b=n[14],v=n[15];return t[0].setComponents(a-s,h-c,p-d,v-f).normalize(),t[1].setComponents(a+s,h+c,p+d,v+f).normalize(),t[2].setComponents(a+r,h+l,p+m,v+_).normalize(),t[3].setComponents(a-r,h-l,p-m,v-_).normalize(),t[4].setComponents(a-o,h-u,p-g,v-b).normalize(),t[5].setComponents(a+o,h+u,p+g,v+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(qs.x=s.normal.x>0?e.max.x:e.min.x,qs.y=s.normal.y>0?e.max.y:e.min.y,qs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gl(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Uu(i,e){const t=e.isWebGL2,n=new WeakMap;function s(l,u){const h=l.array,d=l.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const d=u.array,m=u.updateRange;i.bindBuffer(h,l),m.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,s(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class gs extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,m=[],g=[],p=[],f=[];for(let _=0;_<u;_++){const b=_*d-o;for(let v=0;v<l;v++){const M=v*h-r;g.push(M,-b,0),p.push(0,0,1),f.push(v/a),f.push(1-_/c)}}for(let _=0;_<c;_++)for(let b=0;b<a;b++){const v=b+l*_,M=b+l*(_+1),w=b+1+l*(_+1),L=b+1+l*_;m.push(v,M,L),m.push(M,w,L)}this.setIndex(m),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(p,3)),this.setAttribute("uv",new $e(f,2))}static fromJSON(e){return new gs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ju="vec3 transformed = vec3( position );",Xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Zu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$u=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ad=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,od=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",fd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ld=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,kd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Od=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ud=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Jd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,eh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,th=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ih=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,rh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ah=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,oh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,lh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ch=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,dh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ph=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xh=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_h=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,wh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Th=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ah=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ch=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Dh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ph=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Rh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ih=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,zh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,kh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Fh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Nh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Oh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$h=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,af=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,of=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,xf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Re={alphamap_fragment:Bu,alphamap_pars_fragment:Gu,alphatest_fragment:Vu,alphatest_pars_fragment:Hu,aomap_fragment:Wu,aomap_pars_fragment:qu,begin_vertex:ju,beginnormal_vertex:Xu,bsdfs:Yu,iridescence_fragment:Zu,bumpmap_pars_fragment:$u,clipping_planes_fragment:Ju,clipping_planes_pars_fragment:Ku,clipping_planes_pars_vertex:Qu,clipping_planes_vertex:ed,color_fragment:td,color_pars_fragment:nd,color_pars_vertex:id,color_vertex:sd,common:rd,cube_uv_reflection_fragment:ad,defaultnormal_vertex:od,displacementmap_pars_vertex:ld,displacementmap_vertex:cd,emissivemap_fragment:ud,emissivemap_pars_fragment:dd,encodings_fragment:hd,encodings_pars_fragment:fd,envmap_fragment:pd,envmap_common_pars_fragment:md,envmap_pars_fragment:gd,envmap_pars_vertex:xd,envmap_physical_pars_fragment:Ld,envmap_vertex:_d,fog_vertex:vd,fog_pars_vertex:bd,fog_fragment:yd,fog_pars_fragment:Md,gradientmap_pars_fragment:wd,lightmap_fragment:Sd,lightmap_pars_fragment:Td,lights_lambert_fragment:Ed,lights_lambert_pars_fragment:Ad,lights_pars_begin:Cd,lights_toon_fragment:Dd,lights_toon_pars_fragment:Pd,lights_phong_fragment:Rd,lights_phong_pars_fragment:Id,lights_physical_fragment:zd,lights_physical_pars_fragment:kd,lights_fragment_begin:Fd,lights_fragment_maps:Nd,lights_fragment_end:Od,logdepthbuf_fragment:Ud,logdepthbuf_pars_fragment:Bd,logdepthbuf_pars_vertex:Gd,logdepthbuf_vertex:Vd,map_fragment:Hd,map_pars_fragment:Wd,map_particle_fragment:qd,map_particle_pars_fragment:jd,metalnessmap_fragment:Xd,metalnessmap_pars_fragment:Yd,morphcolor_vertex:Zd,morphnormal_vertex:$d,morphtarget_pars_vertex:Jd,morphtarget_vertex:Kd,normal_fragment_begin:Qd,normal_fragment_maps:eh,normal_pars_fragment:th,normal_pars_vertex:nh,normal_vertex:ih,normalmap_pars_fragment:sh,clearcoat_normal_fragment_begin:rh,clearcoat_normal_fragment_maps:ah,clearcoat_pars_fragment:oh,iridescence_pars_fragment:lh,output_fragment:ch,packing:uh,premultiplied_alpha_fragment:dh,project_vertex:hh,dithering_fragment:fh,dithering_pars_fragment:ph,roughnessmap_fragment:mh,roughnessmap_pars_fragment:gh,shadowmap_pars_fragment:xh,shadowmap_pars_vertex:_h,shadowmap_vertex:vh,shadowmask_pars_fragment:bh,skinbase_vertex:yh,skinning_pars_vertex:Mh,skinning_vertex:wh,skinnormal_vertex:Sh,specularmap_fragment:Th,specularmap_pars_fragment:Eh,tonemapping_fragment:Ah,tonemapping_pars_fragment:Ch,transmission_fragment:Lh,transmission_pars_fragment:Dh,uv_pars_fragment:Ph,uv_pars_vertex:Rh,uv_vertex:Ih,uv2_pars_fragment:zh,uv2_pars_vertex:kh,uv2_vertex:Fh,worldpos_vertex:Nh,background_vert:Oh,background_frag:Uh,backgroundCube_vert:Bh,backgroundCube_frag:Gh,cube_vert:Vh,cube_frag:Hh,depth_vert:Wh,depth_frag:qh,distanceRGBA_vert:jh,distanceRGBA_frag:Xh,equirect_vert:Yh,equirect_frag:Zh,linedashed_vert:$h,linedashed_frag:Jh,meshbasic_vert:Kh,meshbasic_frag:Qh,meshlambert_vert:ef,meshlambert_frag:tf,meshmatcap_vert:nf,meshmatcap_frag:sf,meshnormal_vert:rf,meshnormal_frag:af,meshphong_vert:of,meshphong_frag:lf,meshphysical_vert:cf,meshphysical_frag:uf,meshtoon_vert:df,meshtoon_frag:hf,points_vert:ff,points_frag:pf,shadow_vert:mf,shadow_frag:gf,sprite_vert:xf,sprite_frag:_f},se={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ut},uv2Transform:{value:new Ut},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}}},un={basic:{uniforms:Et([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Et([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Be(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Et([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Et([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Et([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Be(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Et([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Et([se.points,se.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Et([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Et([se.common,se.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Et([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Et([se.sprite,se.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Et([se.common,se.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Et([se.lights,se.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};un.physical={uniforms:Et([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const js={r:0,b:0,g:0};function vf(i,e,t,n,s,r,o){const a=new Be(0);let c=r===!0?0:1,l,u,h=null,d=0,m=null;function g(f,_){let b=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const M=i.xr,w=M.getSession&&M.getSession();w&&w.environmentBlendMode==="additive"&&(v=null),v===null?p(a,c):v&&v.isColor&&(p(v,1),b=!0),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===sr)?(u===void 0&&(u=new Je(new xi(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Hi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=v.encoding!==Xe,(h!==v||d!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Je(new gs(2,2),new gi({name:"BackgroundMaterial",uniforms:Hi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=v.encoding!==Xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,_){f.getRGB(js,Ol(i)),n.buffers.color.setClear(js.r,js.g,js.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(f,_=1){a.set(f),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,p(a,c)},render:g}}function bf(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=f(null);let l=c,u=!1;function h(I,H,$,K,X){let ne=!1;if(o){const te=p(K,$,H);l!==te&&(l=te,m(l.object)),ne=_(I,K,$,X),ne&&b(I,K,$,X)}else{const te=H.wireframe===!0;(l.geometry!==K.id||l.program!==$.id||l.wireframe!==te)&&(l.geometry=K.id,l.program=$.id,l.wireframe=te,ne=!0)}X!==null&&t.update(X,34963),(ne||u)&&(u=!1,x(I,H,$,K),X!==null&&i.bindBuffer(34963,t.get(X).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function p(I,H,$){const K=$.wireframe===!0;let X=a[I.id];X===void 0&&(X={},a[I.id]=X);let ne=X[H.id];ne===void 0&&(ne={},X[H.id]=ne);let te=ne[K];return te===void 0&&(te=f(d()),ne[K]=te),te}function f(I){const H=[],$=[],K=[];for(let X=0;X<s;X++)H[X]=0,$[X]=0,K[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:K,object:I,attributes:{},index:null}}function _(I,H,$,K){const X=l.attributes,ne=H.attributes;let te=0;const fe=$.getAttributes();for(const N in fe)if(fe[N].location>=0){const re=X[N];let ae=ne[N];if(ae===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),re===void 0||re.attribute!==ae||ae&&re.data!==ae.data)return!0;te++}return l.attributesNum!==te||l.index!==K}function b(I,H,$,K){const X={},ne=H.attributes;let te=0;const fe=$.getAttributes();for(const N in fe)if(fe[N].location>=0){let re=ne[N];re===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(re=I.instanceColor));const ae={};ae.attribute=re,re&&re.data&&(ae.data=re.data),X[N]=ae,te++}l.attributes=X,l.attributesNum=te,l.index=K}function v(){const I=l.newAttributes;for(let H=0,$=I.length;H<$;H++)I[H]=0}function M(I){w(I,0)}function w(I,H){const $=l.newAttributes,K=l.enabledAttributes,X=l.attributeDivisors;$[I]=1,K[I]===0&&(i.enableVertexAttribArray(I),K[I]=1),X[I]!==H&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,H),X[I]=H)}function L(){const I=l.newAttributes,H=l.enabledAttributes;for(let $=0,K=H.length;$<K;$++)H[$]!==I[$]&&(i.disableVertexAttribArray($),H[$]=0)}function C(I,H,$,K,X,ne){n.isWebGL2===!0&&($===5124||$===5125)?i.vertexAttribIPointer(I,H,$,X,ne):i.vertexAttribPointer(I,H,$,K,X,ne)}function x(I,H,$,K){if(n.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const X=K.attributes,ne=$.getAttributes(),te=H.defaultAttributeValues;for(const fe in ne){const N=ne[fe];if(N.location>=0){let Y=X[fe];if(Y===void 0&&(fe==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),fe==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),Y!==void 0){const re=Y.normalized,ae=Y.itemSize,O=t.get(Y);if(O===void 0)continue;const Le=O.buffer,ge=O.type,xe=O.bytesPerElement;if(Y.isInterleavedBufferAttribute){const de=Y.data,je=de.stride,Pe=Y.offset;if(de.isInstancedInterleavedBuffer){for(let Ee=0;Ee<N.locationSize;Ee++)w(N.location+Ee,de.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ee=0;Ee<N.locationSize;Ee++)M(N.location+Ee);i.bindBuffer(34962,Le);for(let Ee=0;Ee<N.locationSize;Ee++)C(N.location+Ee,ae/N.locationSize,ge,re,je*xe,(Pe+ae/N.locationSize*Ee)*xe)}else{if(Y.isInstancedBufferAttribute){for(let de=0;de<N.locationSize;de++)w(N.location+de,Y.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let de=0;de<N.locationSize;de++)M(N.location+de);i.bindBuffer(34962,Le);for(let de=0;de<N.locationSize;de++)C(N.location+de,ae/N.locationSize,ge,re,ae*xe,ae/N.locationSize*de*xe)}}else if(te!==void 0){const re=te[fe];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(N.location,re);break;case 3:i.vertexAttrib3fv(N.location,re);break;case 4:i.vertexAttrib4fv(N.location,re);break;default:i.vertexAttrib1fv(N.location,re)}}}}L()}function T(){q();for(const I in a){const H=a[I];for(const $ in H){const K=H[$];for(const X in K)g(K[X].object),delete K[X];delete H[$]}delete a[I]}}function D(I){if(a[I.id]===void 0)return;const H=a[I.id];for(const $ in H){const K=H[$];for(const X in K)g(K[X].object),delete K[X];delete H[$]}delete a[I.id]}function W(I){for(const H in a){const $=a[H];if($[I.id]===void 0)continue;const K=$[I.id];for(const X in K)g(K[X].object),delete K[X];delete $[I.id]}}function q(){k(),u=!0,l!==c&&(l=c,m(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:q,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:W,initAttributes:v,enableAttribute:M,disableUnusedAttributes:L}}function yf(i,e,t,n){const s=n.isWebGL2;let r;function o(l){r=l}function a(l,u){i.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let d,m;if(s)d=i,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,l,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Mf(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),d=i.getParameter(35660),m=i.getParameter(3379),g=i.getParameter(34076),p=i.getParameter(34921),f=i.getParameter(36347),_=i.getParameter(36348),b=i.getParameter(36349),v=d>0,M=o||e.has("OES_texture_float"),w=v&&M,L=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:L}}function wf(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new zn,a=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,_=i.get(h);if(!s||g===null||g.length===0||r&&!f)r?u(null):l();else{const b=r?0:n,v=b*4;let M=_.clippingState||null;c.value=M,M=u(g,d,v,m);for(let w=0;w!==v;++w)M[w]=t[w];_.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const p=h!==null?h.length:0;let f=null;if(p!==0){if(f=c.value,g!==!0||f===null){const _=m+p*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(f===null||f.length<_)&&(f=new Float32Array(_));for(let v=0,M=m;v!==p;++v,M+=4)o.copy(h[v]).applyMatrix4(b,a),o.normal.toArray(f,M),f[M+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function Sf(i){let e=new WeakMap;function t(o,a){return a===sa?o.mapping=Bi:a===ra&&(o.mapping=Gi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===sa||a===ra)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Fu(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ta extends Ul{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ki=4,Ro=[.125,.215,.35,.446,.526,.582],ni=20,Xr=new Ta,Io=new Be;let Yr=null;const ti=(1+Math.sqrt(5))/2,Ri=1/ti,zo=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,ti,Ri),new R(0,ti,-Ri),new R(Ri,0,ti),new R(-Ri,0,ti),new R(ti,Ri,0),new R(-ti,Ri,0)];class ko{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Yr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=No(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yr),e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:fs,format:sn,encoding:fi,depthBuffer:!1},s=Fo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tf(r)),this._blurMaterial=Ef(r,e,t)}return s}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,Xr)}_sceneToCubeUV(e,t,n,s){const a=new en(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Io),u.toneMapping=En,u.autoClear=!1;const m=new mi({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new Je(new xi,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Io),p=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):b===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const v=this._cubeSize;Xs(s,b*v,_>2?v:0,v,v),u.setRenderTarget(s),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Bi||e.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=No());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Xs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Xr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=zo[(s-1)%zo.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Je(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ni-1),p=r/g,f=isFinite(r)?1+Math.floor(u*p):ni;f>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ni}`);const _=[];let b=0;for(let C=0;C<ni;++C){const x=C/p,T=Math.exp(-x*x/2);_.push(T),C===0?b+=T:C<f&&(b+=2*T)}for(let C=0;C<_.length;C++)_[C]=_[C]/b;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const M=this._sizeLods[s],w=3*M*(s>v-ki?s-v+ki:0),L=4*(this._cubeSize-M);Xs(t,w,L,3*M,2*M),c.setRenderTarget(t),c.render(h,Xr)}}function Tf(i){const e=[],t=[],n=[];let s=i;const r=i-ki+1+Ro.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ki?c=Ro[o-i+ki-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,f=2,_=1,b=new Float32Array(p*g*m),v=new Float32Array(f*g*m),M=new Float32Array(_*g*m);for(let L=0;L<m;L++){const C=L%3*2/3-1,x=L>2?0:-1,T=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];b.set(T,p*g*L),v.set(d,f*g*L);const D=[L,L,L,L,L,L];M.set(D,_*g*L)}const w=new Rt;w.setAttribute("position",new hn(b,p)),w.setAttribute("uv",new hn(v,f)),w.setAttribute("faceIndex",new hn(M,_)),e.push(w),s>ki&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fo(i,e,t){const n=new pi(i,e,t);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ef(i,e,t){const n=new Float32Array(ni),s=new R(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function No(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Oo(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Af(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===sa||c===ra,u=c===Bi||c===Gi;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new ko(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new ko(i));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Cf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lf(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let f=0,_=p.length;f<_;f++)e.update(p[f],34962)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const b=m.array;p=m.version;for(let v=0,M=b.length;v<M;v+=3){const w=b[v+0],L=b[v+1],C=b[v+2];d.push(w,L,L,C,C,w)}}else{const b=g.array;p=g.version;for(let v=0,M=b.length/3-1;v<M;v+=3){const w=v+0,L=v+1,C=v+2;d.push(w,L,L,C,C,w)}}const f=new(Pl(d)?Nl:Fl)(d,1);f.version=p;const _=r.get(h);_&&e.remove(_),r.set(h,f)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Df(i,e,t,n){const s=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,m){i.drawElements(r,m,a,d*c),t.update(m,r,1)}function h(d,m,g){if(g===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,m,a,d*c,g),t.update(m,r,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function Pf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rf(i,e){return i[0]-e[0]}function If(i,e){return Math.abs(e[1])-Math.abs(i[1])}function zf(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new pt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h,d){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==f){let $=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",$)};var g=$;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let D=0;M===!0&&(D=1),w===!0&&(D=2),L===!0&&(D=3);let W=u.attributes.position.count*D,q=1;W>e.maxTextureSize&&(q=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const k=new Float32Array(W*q*4*f),I=new kl(k,W,q,f);I.type=ai,I.needsUpdate=!0;const H=D*4;for(let K=0;K<f;K++){const X=C[K],ne=x[K],te=T[K],fe=W*q*4*K;for(let N=0;N<X.count;N++){const Y=N*H;M===!0&&(o.fromBufferAttribute(X,N),k[fe+Y+0]=o.x,k[fe+Y+1]=o.y,k[fe+Y+2]=o.z,k[fe+Y+3]=0),w===!0&&(o.fromBufferAttribute(ne,N),k[fe+Y+4]=o.x,k[fe+Y+5]=o.y,k[fe+Y+6]=o.z,k[fe+Y+7]=0),L===!0&&(o.fromBufferAttribute(te,N),k[fe+Y+8]=o.x,k[fe+Y+9]=o.y,k[fe+Y+10]=o.z,k[fe+Y+11]=te.itemSize===4?o.w:1)}}_={count:f,texture:I,size:new Fe(W,q)},r.set(u,_),u.addEventListener("dispose",$)}let b=0;for(let M=0;M<m.length;M++)b+=m[M];const v=u.morphTargetsRelative?1:1-b;d.getUniforms().setValue(i,"morphTargetBaseInfluence",v),d.getUniforms().setValue(i,"morphTargetInfluences",m),d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let f=n[u.id];if(f===void 0||f.length!==p){f=[];for(let w=0;w<p;w++)f[w]=[w,0];n[u.id]=f}for(let w=0;w<p;w++){const L=f[w];L[0]=w,L[1]=m[w]}f.sort(If);for(let w=0;w<8;w++)w<p&&f[w][1]?(a[w][0]=f[w][0],a[w][1]=f[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(Rf);const _=u.morphAttributes.position,b=u.morphAttributes.normal;let v=0;for(let w=0;w<8;w++){const L=a[w],C=L[0],x=L[1];C!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+w)!==_[C]&&u.setAttribute("morphTarget"+w,_[C]),b&&u.getAttribute("morphNormal"+w)!==b[C]&&u.setAttribute("morphNormal"+w,b[C]),s[w]=x,v+=x):(_&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),b&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),s[w]=0)}const M=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function kf(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Vl=new Pt,Hl=new kl,Wl=new bu,ql=new Bl,Uo=[],Bo=[],Go=new Float32Array(16),Vo=new Float32Array(9),Ho=new Float32Array(4);function Zi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Uo[s];if(r===void 0&&(r=new Float32Array(s),Uo[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function or(i,e){let t=Bo[e];t===void 0&&(t=new Int32Array(e),Bo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ff(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function Uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function Bf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Ho.set(n),i.uniformMatrix2fv(this.addr,!1,Ho),ct(t,n)}}function Gf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Vo.set(n),i.uniformMatrix3fv(this.addr,!1,Vo),ct(t,n)}}function Vf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Go.set(n),i.uniformMatrix4fv(this.addr,!1,Go),ct(t,n)}}function Hf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function Xf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function Zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function $f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function Jf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||Vl,s)}function Kf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wl,s)}function Qf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ql,s)}function ep(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hl,s)}function tp(i){switch(i){case 5126:return Ff;case 35664:return Nf;case 35665:return Of;case 35666:return Uf;case 35674:return Bf;case 35675:return Gf;case 35676:return Vf;case 5124:case 35670:return Hf;case 35667:case 35671:return Wf;case 35668:case 35672:return qf;case 35669:case 35673:return jf;case 5125:return Xf;case 36294:return Yf;case 36295:return Zf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return Qf;case 36289:case 36303:case 36311:case 36292:return ep}}function np(i,e){i.uniform1fv(this.addr,e)}function ip(i,e){const t=Zi(e,this.size,2);i.uniform2fv(this.addr,t)}function sp(i,e){const t=Zi(e,this.size,3);i.uniform3fv(this.addr,t)}function rp(i,e){const t=Zi(e,this.size,4);i.uniform4fv(this.addr,t)}function ap(i,e){const t=Zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function op(i,e){const t=Zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lp(i,e){const t=Zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cp(i,e){i.uniform1iv(this.addr,e)}function up(i,e){i.uniform2iv(this.addr,e)}function dp(i,e){i.uniform3iv(this.addr,e)}function hp(i,e){i.uniform4iv(this.addr,e)}function fp(i,e){i.uniform1uiv(this.addr,e)}function pp(i,e){i.uniform2uiv(this.addr,e)}function mp(i,e){i.uniform3uiv(this.addr,e)}function gp(i,e){i.uniform4uiv(this.addr,e)}function xp(i,e,t){const n=this.cache,s=e.length,r=or(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ct(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Vl,r[o])}function _p(i,e,t){const n=this.cache,s=e.length,r=or(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ct(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Wl,r[o])}function vp(i,e,t){const n=this.cache,s=e.length,r=or(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ct(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ql,r[o])}function bp(i,e,t){const n=this.cache,s=e.length,r=or(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ct(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hl,r[o])}function yp(i){switch(i){case 5126:return np;case 35664:return ip;case 35665:return sp;case 35666:return rp;case 35674:return ap;case 35675:return op;case 35676:return lp;case 5124:case 35670:return cp;case 35667:case 35671:return up;case 35668:case 35672:return dp;case 35669:case 35673:return hp;case 5125:return fp;case 36294:return pp;case 36295:return mp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return xp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return bp}}class Mp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=tp(t.type)}}class wp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=yp(t.type)}}class Sp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Zr=/(\w+)(\])?(\[|\.)?/g;function Wo(i,e){i.seq.push(e),i.map[e.id]=e}function Tp(i,e,t){const n=i.name,s=n.length;for(Zr.lastIndex=0;;){const r=Zr.exec(n),o=Zr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Wo(t,l===void 0?new Mp(a,i,e):new wp(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Sp(a),Wo(t,h)),t=h}}}class Js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Tp(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function qo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Ep=0;function Ap(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Cp(i){switch(i){case fi:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function jo(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ap(i.getShaderSource(e),o)}else return s}function Lp(i,e){const t=Cp(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Dp(i,e){let t;switch(e){case Xc:t="Linear";break;case Yc:t="Reinhard";break;case Zc:t="OptimizedCineon";break;case $c:t="ACESFilmic";break;case Jc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ls).join(`
`)}function Rp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ip(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ls(i){return i!==""}function Xo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ua(i){return i.replace(zp,kp)}function kp(i,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ua(t)}const Fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zo(i){return i.replace(Fp,Np)}function Np(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $o(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Op(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===os&&(e="SHADOWMAP_TYPE_VSM"),e}function Up(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bi:case Gi:e="ENVMAP_TYPE_CUBE";break;case sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:e="ENVMAP_MODE_REFRACTION";break}return e}function Gp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ya:e="ENVMAP_BLENDING_MULTIPLY";break;case qc:e="ENVMAP_BLENDING_MIX";break;case jc:e="ENVMAP_BLENDING_ADD";break}return e}function Vp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hp(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Op(t),l=Up(t),u=Bp(t),h=Gp(t),d=Vp(t),m=t.isWebGL2?"":Pp(t),g=Rp(r),p=s.createProgram();let f,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(ls).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(ls).join(`
`),_.length>0&&(_+=`
`)):(f=[$o(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),_=[m,$o(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Re.tonemapping_pars_fragment:"",t.toneMapping!==En?Dp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,Lp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),o=ua(o),o=Xo(o,t),o=Yo(o,t),a=ua(a),a=Xo(a,t),a=Yo(a,t),o=Zo(o),a=Zo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=b+f+o,M=b+_+a,w=qo(s,35633,v),L=qo(s,35632,M);if(s.attachShader(p,w),s.attachShader(p,L),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p),i.debug.checkShaderErrors){const T=s.getProgramInfoLog(p).trim(),D=s.getShaderInfoLog(w).trim(),W=s.getShaderInfoLog(L).trim();let q=!0,k=!0;if(s.getProgramParameter(p,35714)===!1){q=!1;const I=jo(s,w,"vertex"),H=jo(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+I+`
`+H)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||W==="")&&(k=!1);k&&(this.diagnostics={runnable:q,programLog:T,vertexShader:{log:D,prefix:f},fragmentShader:{log:W,prefix:_}})}s.deleteShader(w),s.deleteShader(L);let C;this.getUniforms=function(){return C===void 0&&(C=new Js(s,p)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=Ip(s,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Ep++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=L,this}let Wp=0;class qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jp(e),t.set(e,n)),n}}class jp{constructor(e){this.id=Wp++,this.code=e,this.usedTimes=0}}function Xp(i,e,t,n,s,r,o){const a=new wa,c=new qp,l=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,T,D,W,q){const k=W.fog,I=q.geometry,H=x.isMeshStandardMaterial?W.environment:null,$=(x.isMeshStandardMaterial?t:e).get(x.envMap||H),K=$&&$.mapping===sr?$.image.height:null,X=g[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const ne=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,te=ne!==void 0?ne.length:0;let fe=0;I.morphAttributes.position!==void 0&&(fe=1),I.morphAttributes.normal!==void 0&&(fe=2),I.morphAttributes.color!==void 0&&(fe=3);let N,Y,re,ae;if(X){const je=un[X];N=je.vertexShader,Y=je.fragmentShader}else N=x.vertexShader,Y=x.fragmentShader,c.update(x),re=c.getVertexShaderID(x),ae=c.getFragmentShaderID(x);const O=i.getRenderTarget(),Le=x.alphaTest>0,ge=x.clearcoat>0,xe=x.iridescence>0;return{isWebGL2:u,shaderID:X,shaderName:x.type,vertexShader:N,fragmentShader:Y,defines:x.defines,customVertexShaderID:re,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:d,outputEncoding:O===null?i.outputEncoding:O.isXRRenderTarget===!0?O.texture.encoding:fi,map:!!x.map,matcap:!!x.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:K,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===gu,tangentSpaceNormalMap:x.normalMapType===Dl,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Xe,clearcoat:ge,clearcoatMap:ge&&!!x.clearcoatMap,clearcoatRoughnessMap:ge&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ge&&!!x.clearcoatNormalMap,iridescence:xe,iridescenceMap:xe&&!!x.iridescenceMap,iridescenceThicknessMap:xe&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Ni,alphaMap:!!x.alphaMap,alphaTest:Le,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!I.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!k,useFog:x.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:fe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:En,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Tn,flipSided:x.side===Gt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)T.push(D),T.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(_(T,x),b(T,x),T.push(i.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function _(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.combine),x.push(T.vertexUvs),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),x.push(a.mask)}function v(x){const T=g[x.type];let D;if(T){const W=un[T];D=Ru.clone(W.uniforms)}else D=x.uniforms;return D}function M(x,T){let D;for(let W=0,q=l.length;W<q;W++){const k=l[W];if(k.cacheKey===T){D=k,++D.usedTimes;break}}return D===void 0&&(D=new Hp(i,T,x,r),l.push(D)),D}function w(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),x.destroy()}}function L(x){c.remove(x)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:v,acquireProgram:M,releaseProgram:w,releaseShaderCache:L,programs:l,dispose:C}}function Yp(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ko(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,m,g,p,f){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:f},i[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=f),e++,_}function a(h,d,m,g,p,f){const _=o(h,d,m,g,p,f);m.transmission>0?n.push(_):m.transparent===!0?s.push(_):t.push(_)}function c(h,d,m,g,p,f){const _=o(h,d,m,g,p,f);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function l(h,d){t.length>1&&t.sort(h||Zp),n.length>1&&n.sort(d||Jo),s.length>1&&s.sort(d||Jo)}function u(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function $p(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ko,i.set(n,[o])):s>=r.length?(o=new Ko,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Be};break;case"SpotLight":t={position:new R,direction:new R,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Kp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Qp=0;function em(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tm(i,e){const t=new Jp,n=Kp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new R);const r=new R,o=new nt,a=new nt;function c(u,h){let d=0,m=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let p=0,f=0,_=0,b=0,v=0,M=0,w=0,L=0,C=0,x=0;u.sort(em);const T=h!==!0?Math.PI:1;for(let W=0,q=u.length;W<q;W++){const k=u[W],I=k.color,H=k.intensity,$=k.distance,K=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=I.r*H*T,m+=I.g*H*T,g+=I.b*H*T;else if(k.isLightProbe)for(let X=0;X<9;X++)s.probe[X].addScaledVector(k.sh.coefficients[X],H);else if(k.isDirectionalLight){const X=t.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity*T),k.castShadow){const ne=k.shadow,te=n.get(k);te.shadowBias=ne.bias,te.shadowNormalBias=ne.normalBias,te.shadowRadius=ne.radius,te.shadowMapSize=ne.mapSize,s.directionalShadow[p]=te,s.directionalShadowMap[p]=K,s.directionalShadowMatrix[p]=k.shadow.matrix,M++}s.directional[p]=X,p++}else if(k.isSpotLight){const X=t.get(k);X.position.setFromMatrixPosition(k.matrixWorld),X.color.copy(I).multiplyScalar(H*T),X.distance=$,X.coneCos=Math.cos(k.angle),X.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),X.decay=k.decay,s.spot[_]=X;const ne=k.shadow;if(k.map&&(s.spotLightMap[C]=k.map,C++,ne.updateMatrices(k),k.castShadow&&x++),s.spotLightMatrix[_]=ne.matrix,k.castShadow){const te=n.get(k);te.shadowBias=ne.bias,te.shadowNormalBias=ne.normalBias,te.shadowRadius=ne.radius,te.shadowMapSize=ne.mapSize,s.spotShadow[_]=te,s.spotShadowMap[_]=K,L++}_++}else if(k.isRectAreaLight){const X=t.get(k);X.color.copy(I).multiplyScalar(H),X.halfWidth.set(k.width*.5,0,0),X.halfHeight.set(0,k.height*.5,0),s.rectArea[b]=X,b++}else if(k.isPointLight){const X=t.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity*T),X.distance=k.distance,X.decay=k.decay,k.castShadow){const ne=k.shadow,te=n.get(k);te.shadowBias=ne.bias,te.shadowNormalBias=ne.normalBias,te.shadowRadius=ne.radius,te.shadowMapSize=ne.mapSize,te.shadowCameraNear=ne.camera.near,te.shadowCameraFar=ne.camera.far,s.pointShadow[f]=te,s.pointShadowMap[f]=K,s.pointShadowMatrix[f]=k.shadow.matrix,w++}s.point[f]=X,f++}else if(k.isHemisphereLight){const X=t.get(k);X.skyColor.copy(k.color).multiplyScalar(H*T),X.groundColor.copy(k.groundColor).multiplyScalar(H*T),s.hemi[v]=X,v++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=se.LTC_FLOAT_1,s.rectAreaLTC2=se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=se.LTC_HALF_1,s.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;const D=s.hash;(D.directionalLength!==p||D.pointLength!==f||D.spotLength!==_||D.rectAreaLength!==b||D.hemiLength!==v||D.numDirectionalShadows!==M||D.numPointShadows!==w||D.numSpotShadows!==L||D.numSpotMaps!==C)&&(s.directional.length=p,s.spot.length=_,s.rectArea.length=b,s.point.length=f,s.hemi.length=v,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=L+C-x,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=x,D.directionalLength=p,D.pointLength=f,D.spotLength=_,D.rectAreaLength=b,D.hemiLength=v,D.numDirectionalShadows=M,D.numPointShadows=w,D.numSpotShadows=L,D.numSpotMaps=C,s.version=Qp++)}function l(u,h){let d=0,m=0,g=0,p=0,f=0;const _=h.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const M=u[b];if(M.isDirectionalLight){const w=s.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),d++}else if(M.isSpotLight){const w=s.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const w=s.rectArea[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(_),a.identity(),o.copy(M.matrixWorld),o.premultiply(_),a.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const w=s.point[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(_),m++}else if(M.isHemisphereLight){const w=s.hemi[f];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(_),f++}}}return{setup:c,setupView:l,state:s}}function Qo(i,e){const t=new tm(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function nm(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Qo(i,e),t.set(r,[c])):o>=a.length?(c=new Qo(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}class im extends Yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sm extends Yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,am=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function om(i,e,t){let n=new Sa;const s=new Fe,r=new Fe,o=new pt,a=new im({depthPacking:mu}),c=new sm,l={},u=t.maxTextureSize,h={[Vn]:Gt,[Gt]:Vn,[Tn]:Tn},d=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:rm,fragmentShader:am}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Rt;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Je(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sl,this.render=function(M,w,L){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;const C=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Un),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let W=0,q=M.length;W<q;W++){const k=M[W],I=k.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const H=I.getFrameExtents();if(s.multiply(H),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,I.mapSize.y=r.y)),I.map===null){const K=this.type!==os?{minFilter:Ct,magFilter:Ct}:{};I.map=new pi(s.x,s.y,K),I.map.texture.name=k.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const $=I.getViewportCount();for(let K=0;K<$;K++){const X=I.getViewport(K);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),D.viewport(o),I.updateMatrices(k,K),n=I.getFrustum(),v(w,L,I.camera,k,this.type)}I.isPointLightShadow!==!0&&this.type===os&&_(I,L),I.needsUpdate=!1}f.needsUpdate=!1,i.setRenderTarget(C,x,T)};function _(M,w){const L=e.update(p);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new pi(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,L,d,p,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,L,m,p,null)}function b(M,w,L,C,x,T){let D=null;const W=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(W!==void 0)D=W;else if(D=L.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const q=D.uuid,k=w.uuid;let I=l[q];I===void 0&&(I={},l[q]=I);let H=I[k];H===void 0&&(H=D.clone(),I[k]=H),D=H}return D.visible=w.visible,D.wireframe=w.wireframe,T===os?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:h[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,L.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(L.matrixWorld),D.nearDistance=C,D.farDistance=x),D}function v(M,w,L,C,x){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===os)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);const W=e.update(M),q=M.material;if(Array.isArray(q)){const k=W.groups;for(let I=0,H=k.length;I<H;I++){const $=k[I],K=q[$.materialIndex];if(K&&K.visible){const X=b(M,K,C,L.near,L.far,x);i.renderBufferDirect(L,null,W,X,M,$)}}}else if(q.visible){const k=b(M,q,C,L.near,L.far,x);i.renderBufferDirect(L,null,W,k,M,null)}}const D=M.children;for(let W=0,q=D.length;W<q;W++)v(D[W],w,L,C,x)}}function lm(i,e,t){const n=t.isWebGL2;function s(){let P=!1;const U=new pt;let J=null;const ue=new pt(0,0,0,0);return{setMask:function(me){J!==me&&!P&&(i.colorMask(me,me,me,me),J=me)},setLocked:function(me){P=me},setClear:function(me,He,dt,_t,Yn){Yn===!0&&(me*=_t,He*=_t,dt*=_t),U.set(me,He,dt,_t),ue.equals(U)===!1&&(i.clearColor(me,He,dt,_t),ue.copy(U))},reset:function(){P=!1,J=null,ue.set(-1,0,0,0)}}}function r(){let P=!1,U=null,J=null,ue=null;return{setTest:function(me){me?Le(2929):ge(2929)},setMask:function(me){U!==me&&!P&&(i.depthMask(me),U=me)},setFunc:function(me){if(J!==me){switch(me){case Oc:i.depthFunc(512);break;case Uc:i.depthFunc(519);break;case Bc:i.depthFunc(513);break;case ia:i.depthFunc(515);break;case Gc:i.depthFunc(514);break;case Vc:i.depthFunc(518);break;case Hc:i.depthFunc(516);break;case Wc:i.depthFunc(517);break;default:i.depthFunc(515)}J=me}},setLocked:function(me){P=me},setClear:function(me){ue!==me&&(i.clearDepth(me),ue=me)},reset:function(){P=!1,U=null,J=null,ue=null}}}function o(){let P=!1,U=null,J=null,ue=null,me=null,He=null,dt=null,_t=null,Yn=null;return{setTest:function(Ze){P||(Ze?Le(2960):ge(2960))},setMask:function(Ze){U!==Ze&&!P&&(i.stencilMask(Ze),U=Ze)},setFunc:function(Ze,xn,Wt){(J!==Ze||ue!==xn||me!==Wt)&&(i.stencilFunc(Ze,xn,Wt),J=Ze,ue=xn,me=Wt)},setOp:function(Ze,xn,Wt){(He!==Ze||dt!==xn||_t!==Wt)&&(i.stencilOp(Ze,xn,Wt),He=Ze,dt=xn,_t=Wt)},setLocked:function(Ze){P=Ze},setClear:function(Ze){Yn!==Ze&&(i.clearStencil(Ze),Yn=Ze)},reset:function(){P=!1,U=null,J=null,ue=null,me=null,He=null,dt=null,_t=null,Yn=null}}}const a=new s,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,p=[],f=null,_=!1,b=null,v=null,M=null,w=null,L=null,C=null,x=null,T=!1,D=null,W=null,q=null,k=null,I=null;const H=i.getParameter(35661);let $=!1,K=0;const X=i.getParameter(7938);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=K>=2);let ne=null,te={};const fe=i.getParameter(3088),N=i.getParameter(2978),Y=new pt().fromArray(fe),re=new pt().fromArray(N);function ae(P,U,J){const ue=new Uint8Array(4),me=i.createTexture();i.bindTexture(P,me),i.texParameteri(P,10241,9728),i.texParameteri(P,10240,9728);for(let He=0;He<J;He++)i.texImage2D(U+He,0,6408,1,1,0,6408,5121,ue);return me}const O={};O[3553]=ae(3553,3553,1),O[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Le(2929),c.setFunc(ia),xt(!1),Ht(Ga),Le(2884),wt(Un);function Le(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function ge(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function xe(P,U){return m[P]!==U?(i.bindFramebuffer(P,U),m[P]=U,n&&(P===36009&&(m[36160]=U),P===36160&&(m[36009]=U)),!0):!1}function de(P,U){let J=p,ue=!1;if(P)if(J=g.get(U),J===void 0&&(J=[],g.set(U,J)),P.isWebGLMultipleRenderTargets){const me=P.texture;if(J.length!==me.length||J[0]!==36064){for(let He=0,dt=me.length;He<dt;He++)J[He]=36064+He;J.length=me.length,ue=!0}}else J[0]!==36064&&(J[0]=36064,ue=!0);else J[0]!==1029&&(J[0]=1029,ue=!0);ue&&(t.isWebGL2?i.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function je(P){return f!==P?(i.useProgram(P),f=P,!0):!1}const Pe={[Ii]:32774,[Ac]:32778,[Cc]:32779};if(n)Pe[qa]=32775,Pe[ja]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Pe[qa]=P.MIN_EXT,Pe[ja]=P.MAX_EXT)}const Ee={[Lc]:0,[Dc]:1,[Pc]:768,[El]:770,[Nc]:776,[kc]:774,[Ic]:772,[Rc]:769,[Al]:771,[Fc]:775,[zc]:773};function wt(P,U,J,ue,me,He,dt,_t){if(P===Un){_===!0&&(ge(3042),_=!1);return}if(_===!1&&(Le(3042),_=!0),P!==Ec){if(P!==b||_t!==T){if((v!==Ii||L!==Ii)&&(i.blendEquation(32774),v=Ii,L=Ii),_t)switch(P){case Ni:i.blendFuncSeparate(1,771,1,771);break;case Va:i.blendFunc(1,1);break;case Ha:i.blendFuncSeparate(0,769,0,1);break;case Wa:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ni:i.blendFuncSeparate(770,771,1,771);break;case Va:i.blendFunc(770,1);break;case Ha:i.blendFuncSeparate(0,769,0,1);break;case Wa:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,w=null,C=null,x=null,b=P,T=_t}return}me=me||U,He=He||J,dt=dt||ue,(U!==v||me!==L)&&(i.blendEquationSeparate(Pe[U],Pe[me]),v=U,L=me),(J!==M||ue!==w||He!==C||dt!==x)&&(i.blendFuncSeparate(Ee[J],Ee[ue],Ee[He],Ee[dt]),M=J,w=ue,C=He,x=dt),b=P,T=!1}function Vt(P,U){P.side===Tn?ge(2884):Le(2884);let J=P.side===Gt;U&&(J=!J),xt(J),P.blending===Ni&&P.transparent===!1?wt(Un):wt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);const ue=P.stencilWrite;l.setTest(ue),ue&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),We(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Le(32926):ge(32926)}function xt(P){D!==P&&(P?i.frontFace(2304):i.frontFace(2305),D=P)}function Ht(P){P!==Sc?(Le(2884),P!==W&&(P===Ga?i.cullFace(1029):P===Tc?i.cullFace(1028):i.cullFace(1032))):ge(2884),W=P}function it(P){P!==q&&($&&i.lineWidth(P),q=P)}function We(P,U,J){P?(Le(32823),(k!==U||I!==J)&&(i.polygonOffset(U,J),k=U,I=J)):ge(32823)}function gn(P){P?Le(3089):ge(3089)}function Yt(P){P===void 0&&(P=33984+H-1),ne!==P&&(i.activeTexture(P),ne=P)}function E(P,U,J){J===void 0&&(ne===null?J=33984+H-1:J=ne);let ue=te[J];ue===void 0&&(ue={type:void 0,texture:void 0},te[J]=ue),(ue.type!==P||ue.texture!==U)&&(ne!==J&&(i.activeTexture(J),ne=J),i.bindTexture(P,U||O[P]),ue.type=P,ue.texture=U)}function y(){const P=te[ne];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function G(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(P){Y.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Y.copy(P))}function _e(P){re.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),re.copy(P))}function Ge(P,U){let J=h.get(U);J===void 0&&(J=new WeakMap,h.set(U,J));let ue=J.get(P);ue===void 0&&(ue=i.getUniformBlockIndex(U,P.name),J.set(P,ue))}function Ye(P,U){const ue=h.get(U).get(P);u.get(U)!==ue&&(i.uniformBlockBinding(U,ue,P.__bindingPointIndex),u.set(U,ue))}function ut(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ne=null,te={},m={},g=new WeakMap,p=[],f=null,_=!1,b=null,v=null,M=null,w=null,L=null,C=null,x=null,T=!1,D=null,W=null,q=null,k=null,I=null,Y.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Le,disable:ge,bindFramebuffer:xe,drawBuffers:de,useProgram:je,setBlending:wt,setMaterial:Vt,setFlipSided:xt,setCullFace:Ht,setLineWidth:it,setPolygonOffset:We,setScissorTest:gn,activeTexture:Yt,bindTexture:E,unbindTexture:y,compressedTexImage2D:G,compressedTexImage3D:Q,texImage2D:Te,texImage3D:pe,updateUBOMapping:Ge,uniformBlockBinding:Ye,texStorage2D:j,texStorage3D:we,texSubImage2D:ie,texSubImage3D:le,compressedTexSubImage2D:Ae,compressedTexSubImage3D:ce,scissor:Se,viewport:_e,reset:ut}}function cm(i,e,t,n,s,r,o){const a=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,y){return _?new OffscreenCanvas(E,y):ms("canvas")}function v(E,y,G,Q){let ie=1;if((E.width>Q||E.height>Q)&&(ie=Q/Math.max(E.width,E.height)),ie<1||y===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const le=y?ca:Math.floor,Ae=le(ie*E.width),ce=le(ie*E.height);p===void 0&&(p=b(Ae,ce));const j=G?b(Ae,ce):p;return j.width=Ae,j.height=ce,j.getContext("2d").drawImage(E,0,0,Ae,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Ae+"x"+ce+")."),j}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function M(E){return yo(E.width)&&yo(E.height)}function w(E){return a?!1:E.wrapS!==nn||E.wrapT!==nn||E.minFilter!==Ct&&E.minFilter!==jt}function L(E,y){return E.generateMipmaps&&y&&E.minFilter!==Ct&&E.minFilter!==jt}function C(E){i.generateMipmap(E)}function x(E,y,G,Q,ie=!1){if(a===!1)return y;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le=y;return y===6403&&(G===5126&&(le=33326),G===5131&&(le=33325),G===5121&&(le=33321)),y===33319&&(G===5126&&(le=33328),G===5131&&(le=33327),G===5121&&(le=33323)),y===6408&&(G===5126&&(le=34836),G===5131&&(le=34842),G===5121&&(le=Q===Xe&&ie===!1?35907:32856),G===32819&&(le=32854),G===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function T(E,y,G){return L(E,G)===!0||E.isFramebufferTexture&&E.minFilter!==Ct&&E.minFilter!==jt?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function D(E){return E===Ct||E===Xa||E===_r?9728:9729}function W(E){const y=E.target;y.removeEventListener("dispose",W),k(y),y.isVideoTexture&&g.delete(y)}function q(E){const y=E.target;y.removeEventListener("dispose",q),H(y)}function k(E){const y=n.get(E);if(y.__webglInit===void 0)return;const G=E.source,Q=f.get(G);if(Q){const ie=Q[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&I(E),Object.keys(Q).length===0&&f.delete(G)}n.remove(E)}function I(E){const y=n.get(E);i.deleteTexture(y.__webglTexture);const G=E.source,Q=f.get(G);delete Q[y.__cacheKey],o.memory.textures--}function H(E){const y=E.texture,G=n.get(E),Q=n.get(y);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)i.deleteFramebuffer(G.__webglFramebuffer[ie]),G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[ie]);else{if(i.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ie=0;ie<G.__webglColorRenderbuffer.length;ie++)G.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[ie]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ie=0,le=y.length;ie<le;ie++){const Ae=n.get(y[ie]);Ae.__webglTexture&&(i.deleteTexture(Ae.__webglTexture),o.memory.textures--),n.remove(y[ie])}n.remove(y),n.remove(E)}let $=0;function K(){$=0}function X(){const E=$;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),$+=1,E}function ne(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.encoding),y.join()}function te(E,y){const G=n.get(E);if(E.isVideoTexture&&gn(E),E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(G,E,y);return}}t.bindTexture(3553,G.__webglTexture,33984+y)}function fe(E,y){const G=n.get(E);if(E.version>0&&G.__version!==E.version){ge(G,E,y);return}t.bindTexture(35866,G.__webglTexture,33984+y)}function N(E,y){const G=n.get(E);if(E.version>0&&G.__version!==E.version){ge(G,E,y);return}t.bindTexture(32879,G.__webglTexture,33984+y)}function Y(E,y){const G=n.get(E);if(E.version>0&&G.__version!==E.version){xe(G,E,y);return}t.bindTexture(34067,G.__webglTexture,33984+y)}const re={[aa]:10497,[nn]:33071,[oa]:33648},ae={[Ct]:9728,[Xa]:9984,[_r]:9986,[jt]:9729,[Kc]:9985,[hs]:9987};function O(E,y,G){if(G?(i.texParameteri(E,10242,re[y.wrapS]),i.texParameteri(E,10243,re[y.wrapT]),(E===32879||E===35866)&&i.texParameteri(E,32882,re[y.wrapR]),i.texParameteri(E,10240,ae[y.magFilter]),i.texParameteri(E,10241,ae[y.minFilter])):(i.texParameteri(E,10242,33071),i.texParameteri(E,10243,33071),(E===32879||E===35866)&&i.texParameteri(E,32882,33071),(y.wrapS!==nn||y.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,10240,D(y.magFilter)),i.texParameteri(E,10241,D(y.minFilter)),y.minFilter!==Ct&&y.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Ct||y.minFilter!==_r&&y.minFilter!==hs||y.type===ai&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===fs&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Le(E,y){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",W));const Q=y.source;let ie=f.get(Q);ie===void 0&&(ie={},f.set(Q,ie));const le=ne(y);if(le!==E.__cacheKey){ie[le]===void 0&&(ie[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[le].usedTimes++;const Ae=ie[E.__cacheKey];Ae!==void 0&&(ie[E.__cacheKey].usedTimes--,Ae.usedTimes===0&&I(y)),E.__cacheKey=le,E.__webglTexture=ie[le].texture}return G}function ge(E,y,G){let Q=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=35866),y.isData3DTexture&&(Q=32879);const ie=Le(E,y),le=y.source;t.bindTexture(Q,E.__webglTexture,33984+G);const Ae=n.get(le);if(le.version!==Ae.__version||ie===!0){t.activeTexture(33984+G),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const ce=w(y)&&M(y.image)===!1;let j=v(y.image,ce,!1,u);j=Yt(y,j);const we=M(j)||a,Te=r.convert(y.format,y.encoding);let pe=r.convert(y.type),Se=x(y.internalFormat,Te,pe,y.encoding,y.isVideoTexture);O(Q,y,we);let _e;const Ge=y.mipmaps,Ye=a&&y.isVideoTexture!==!0,ut=Ae.__version===void 0||ie===!0,P=T(y,j,we);if(y.isDepthTexture)Se=6402,a?y.type===ai?Se=36012:y.type===ri?Se=33190:y.type===Oi?Se=35056:Se=33189:y.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===li&&Se===6402&&y.type!==Ll&&y.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ri,pe=r.convert(y.type)),y.format===Vi&&Se===6402&&(Se=34041,y.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Oi,pe=r.convert(y.type))),ut&&(Ye?t.texStorage2D(3553,1,Se,j.width,j.height):t.texImage2D(3553,0,Se,j.width,j.height,0,Te,pe,null));else if(y.isDataTexture)if(Ge.length>0&&we){Ye&&ut&&t.texStorage2D(3553,P,Se,Ge[0].width,Ge[0].height);for(let U=0,J=Ge.length;U<J;U++)_e=Ge[U],Ye?t.texSubImage2D(3553,U,0,0,_e.width,_e.height,Te,pe,_e.data):t.texImage2D(3553,U,Se,_e.width,_e.height,0,Te,pe,_e.data);y.generateMipmaps=!1}else Ye?(ut&&t.texStorage2D(3553,P,Se,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,Te,pe,j.data)):t.texImage2D(3553,0,Se,j.width,j.height,0,Te,pe,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ye&&ut&&t.texStorage3D(35866,P,Se,Ge[0].width,Ge[0].height,j.depth);for(let U=0,J=Ge.length;U<J;U++)_e=Ge[U],y.format!==sn?Te!==null?Ye?t.compressedTexSubImage3D(35866,U,0,0,0,_e.width,_e.height,j.depth,Te,_e.data,0,0):t.compressedTexImage3D(35866,U,Se,_e.width,_e.height,j.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(35866,U,0,0,0,_e.width,_e.height,j.depth,Te,pe,_e.data):t.texImage3D(35866,U,Se,_e.width,_e.height,j.depth,0,Te,pe,_e.data)}else{Ye&&ut&&t.texStorage2D(3553,P,Se,Ge[0].width,Ge[0].height);for(let U=0,J=Ge.length;U<J;U++)_e=Ge[U],y.format!==sn?Te!==null?Ye?t.compressedTexSubImage2D(3553,U,0,0,_e.width,_e.height,Te,_e.data):t.compressedTexImage2D(3553,U,Se,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(3553,U,0,0,_e.width,_e.height,Te,pe,_e.data):t.texImage2D(3553,U,Se,_e.width,_e.height,0,Te,pe,_e.data)}else if(y.isDataArrayTexture)Ye?(ut&&t.texStorage3D(35866,P,Se,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,Te,pe,j.data)):t.texImage3D(35866,0,Se,j.width,j.height,j.depth,0,Te,pe,j.data);else if(y.isData3DTexture)Ye?(ut&&t.texStorage3D(32879,P,Se,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,Te,pe,j.data)):t.texImage3D(32879,0,Se,j.width,j.height,j.depth,0,Te,pe,j.data);else if(y.isFramebufferTexture){if(ut)if(Ye)t.texStorage2D(3553,P,Se,j.width,j.height);else{let U=j.width,J=j.height;for(let ue=0;ue<P;ue++)t.texImage2D(3553,ue,Se,U,J,0,Te,pe,null),U>>=1,J>>=1}}else if(Ge.length>0&&we){Ye&&ut&&t.texStorage2D(3553,P,Se,Ge[0].width,Ge[0].height);for(let U=0,J=Ge.length;U<J;U++)_e=Ge[U],Ye?t.texSubImage2D(3553,U,0,0,Te,pe,_e):t.texImage2D(3553,U,Se,Te,pe,_e);y.generateMipmaps=!1}else Ye?(ut&&t.texStorage2D(3553,P,Se,j.width,j.height),t.texSubImage2D(3553,0,0,0,Te,pe,j)):t.texImage2D(3553,0,Se,Te,pe,j);L(y,we)&&C(Q),Ae.__version=le.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function xe(E,y,G){if(y.image.length!==6)return;const Q=Le(E,y),ie=y.source;t.bindTexture(34067,E.__webglTexture,33984+G);const le=n.get(ie);if(ie.version!==le.__version||Q===!0){t.activeTexture(33984+G),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const Ae=y.isCompressedTexture||y.image[0].isCompressedTexture,ce=y.image[0]&&y.image[0].isDataTexture,j=[];for(let U=0;U<6;U++)!Ae&&!ce?j[U]=v(y.image[U],!1,!0,l):j[U]=ce?y.image[U].image:y.image[U],j[U]=Yt(y,j[U]);const we=j[0],Te=M(we)||a,pe=r.convert(y.format,y.encoding),Se=r.convert(y.type),_e=x(y.internalFormat,pe,Se,y.encoding),Ge=a&&y.isVideoTexture!==!0,Ye=le.__version===void 0||Q===!0;let ut=T(y,we,Te);O(34067,y,Te);let P;if(Ae){Ge&&Ye&&t.texStorage2D(34067,ut,_e,we.width,we.height);for(let U=0;U<6;U++){P=j[U].mipmaps;for(let J=0;J<P.length;J++){const ue=P[J];y.format!==sn?pe!==null?Ge?t.compressedTexSubImage2D(34069+U,J,0,0,ue.width,ue.height,pe,ue.data):t.compressedTexImage2D(34069+U,J,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(34069+U,J,0,0,ue.width,ue.height,pe,Se,ue.data):t.texImage2D(34069+U,J,_e,ue.width,ue.height,0,pe,Se,ue.data)}}}else{P=y.mipmaps,Ge&&Ye&&(P.length>0&&ut++,t.texStorage2D(34067,ut,_e,j[0].width,j[0].height));for(let U=0;U<6;U++)if(ce){Ge?t.texSubImage2D(34069+U,0,0,0,j[U].width,j[U].height,pe,Se,j[U].data):t.texImage2D(34069+U,0,_e,j[U].width,j[U].height,0,pe,Se,j[U].data);for(let J=0;J<P.length;J++){const me=P[J].image[U].image;Ge?t.texSubImage2D(34069+U,J+1,0,0,me.width,me.height,pe,Se,me.data):t.texImage2D(34069+U,J+1,_e,me.width,me.height,0,pe,Se,me.data)}}else{Ge?t.texSubImage2D(34069+U,0,0,0,pe,Se,j[U]):t.texImage2D(34069+U,0,_e,pe,Se,j[U]);for(let J=0;J<P.length;J++){const ue=P[J];Ge?t.texSubImage2D(34069+U,J+1,0,0,pe,Se,ue.image[U]):t.texImage2D(34069+U,J+1,_e,pe,Se,ue.image[U])}}}L(y,Te)&&C(34067),le.__version=ie.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function de(E,y,G,Q,ie){const le=r.convert(G.format,G.encoding),Ae=r.convert(G.type),ce=x(G.internalFormat,le,Ae,G.encoding);n.get(y).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,ce,y.width,y.height,y.depth,0,le,Ae,null):t.texImage2D(ie,0,ce,y.width,y.height,0,le,Ae,null)),t.bindFramebuffer(36160,E),We(y)?d.framebufferTexture2DMultisampleEXT(36160,Q,ie,n.get(G).__webglTexture,0,it(y)):(ie===3553||ie>=34069&&ie<=34074)&&i.framebufferTexture2D(36160,Q,ie,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function je(E,y,G){if(i.bindRenderbuffer(36161,E),y.depthBuffer&&!y.stencilBuffer){let Q=33189;if(G||We(y)){const ie=y.depthTexture;ie&&ie.isDepthTexture&&(ie.type===ai?Q=36012:ie.type===ri&&(Q=33190));const le=it(y);We(y)?d.renderbufferStorageMultisampleEXT(36161,le,Q,y.width,y.height):i.renderbufferStorageMultisample(36161,le,Q,y.width,y.height)}else i.renderbufferStorage(36161,Q,y.width,y.height);i.framebufferRenderbuffer(36160,36096,36161,E)}else if(y.depthBuffer&&y.stencilBuffer){const Q=it(y);G&&We(y)===!1?i.renderbufferStorageMultisample(36161,Q,35056,y.width,y.height):We(y)?d.renderbufferStorageMultisampleEXT(36161,Q,35056,y.width,y.height):i.renderbufferStorage(36161,34041,y.width,y.height),i.framebufferRenderbuffer(36160,33306,36161,E)}else{const Q=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ie=0;ie<Q.length;ie++){const le=Q[ie],Ae=r.convert(le.format,le.encoding),ce=r.convert(le.type),j=x(le.internalFormat,Ae,ce,le.encoding),we=it(y);G&&We(y)===!1?i.renderbufferStorageMultisample(36161,we,j,y.width,y.height):We(y)?d.renderbufferStorageMultisampleEXT(36161,we,j,y.width,y.height):i.renderbufferStorage(36161,j,y.width,y.height)}}i.bindRenderbuffer(36161,null)}function Pe(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),te(y.depthTexture,0);const Q=n.get(y.depthTexture).__webglTexture,ie=it(y);if(y.depthTexture.format===li)We(y)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ie):i.framebufferTexture2D(36160,36096,3553,Q,0);else if(y.depthTexture.format===Vi)We(y)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ie):i.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function Ee(E){const y=n.get(E),G=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Pe(y.__webglFramebuffer,E)}else if(G){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]=i.createRenderbuffer(),je(y.__webglDepthbuffer[Q],E,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),je(y.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function wt(E,y,G){const Q=n.get(E);y!==void 0&&de(Q.__webglFramebuffer,E,E.texture,36064,3553),G!==void 0&&Ee(E)}function Vt(E){const y=E.texture,G=n.get(E),Q=n.get(y);E.addEventListener("dispose",q),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=y.version,o.memory.textures++);const ie=E.isWebGLCubeRenderTarget===!0,le=E.isWebGLMultipleRenderTargets===!0,Ae=M(E)||a;if(ie){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)G.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(G.__webglFramebuffer=i.createFramebuffer(),le)if(s.drawBuffers){const ce=E.texture;for(let j=0,we=ce.length;j<we;j++){const Te=n.get(ce[j]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&We(E)===!1){const ce=le?y:[y];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let j=0;j<ce.length;j++){const we=ce[j];G.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(36161,G.__webglColorRenderbuffer[j]);const Te=r.convert(we.format,we.encoding),pe=r.convert(we.type),Se=x(we.internalFormat,Te,pe,we.encoding,E.isXRRenderTarget===!0),_e=it(E);i.renderbufferStorageMultisample(36161,_e,Se,E.width,E.height),i.framebufferRenderbuffer(36160,36064+j,36161,G.__webglColorRenderbuffer[j])}i.bindRenderbuffer(36161,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),je(G.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,Q.__webglTexture),O(34067,y,Ae);for(let ce=0;ce<6;ce++)de(G.__webglFramebuffer[ce],E,y,36064,34069+ce);L(y,Ae)&&C(34067),t.unbindTexture()}else if(le){const ce=E.texture;for(let j=0,we=ce.length;j<we;j++){const Te=ce[j],pe=n.get(Te);t.bindTexture(3553,pe.__webglTexture),O(3553,Te,Ae),de(G.__webglFramebuffer,E,Te,36064+j,3553),L(Te,Ae)&&C(3553)}t.unbindTexture()}else{let ce=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?ce=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,Q.__webglTexture),O(ce,y,Ae),de(G.__webglFramebuffer,E,y,36064,ce),L(y,Ae)&&C(ce),t.unbindTexture()}E.depthBuffer&&Ee(E)}function xt(E){const y=M(E)||a,G=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,ie=G.length;Q<ie;Q++){const le=G[Q];if(L(le,y)){const Ae=E.isWebGLCubeRenderTarget?34067:3553,ce=n.get(le).__webglTexture;t.bindTexture(Ae,ce),C(Ae),t.unbindTexture()}}}function Ht(E){if(a&&E.samples>0&&We(E)===!1){const y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],G=E.width,Q=E.height;let ie=16384;const le=[],Ae=E.stencilBuffer?33306:36096,ce=n.get(E),j=E.isWebGLMultipleRenderTargets===!0;if(j)for(let we=0;we<y.length;we++)t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+we,36161,null),t.bindFramebuffer(36160,ce.__webglFramebuffer),i.framebufferTexture2D(36009,36064+we,3553,null,0);t.bindFramebuffer(36008,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ce.__webglFramebuffer);for(let we=0;we<y.length;we++){le.push(36064+we),E.depthBuffer&&le.push(Ae);const Te=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Te===!1&&(E.depthBuffer&&(ie|=256),E.stencilBuffer&&(ie|=1024)),j&&i.framebufferRenderbuffer(36008,36064,36161,ce.__webglColorRenderbuffer[we]),Te===!0&&(i.invalidateFramebuffer(36008,[Ae]),i.invalidateFramebuffer(36009,[Ae])),j){const pe=n.get(y[we]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,pe,0)}i.blitFramebuffer(0,0,G,Q,0,0,G,Q,ie,9728),m&&i.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let we=0;we<y.length;we++){t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+we,36161,ce.__webglColorRenderbuffer[we]);const Te=n.get(y[we]).__webglTexture;t.bindFramebuffer(36160,ce.__webglFramebuffer),i.framebufferTexture2D(36009,36064+we,3553,Te,0)}t.bindFramebuffer(36009,ce.__webglMultisampledFramebuffer)}}function it(E){return Math.min(h,E.samples)}function We(E){const y=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function gn(E){const y=o.render.frame;g.get(E)!==y&&(g.set(E,y),E.update())}function Yt(E,y){const G=E.encoding,Q=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===la||G!==fi&&(G===Xe?a===!1?e.has("EXT_sRGB")===!0&&Q===sn?(E.format=la,E.minFilter=jt,E.generateMipmaps=!1):y=Il.sRGBToLinear(y):(Q!==sn||ie!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),y}this.allocateTextureUnit=X,this.resetTextureUnits=K,this.setTexture2D=te,this.setTexture2DArray=fe,this.setTexture3D=N,this.setTextureCube=Y,this.rebindTextures=wt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=de,this.useMultisampledRTT=We}function um(i,e,t){const n=t.isWebGL2;function s(r,o=null){let a;if(r===hi)return 5121;if(r===nu)return 32819;if(r===iu)return 32820;if(r===Qc)return 5120;if(r===eu)return 5122;if(r===Ll)return 5123;if(r===tu)return 5124;if(r===ri)return 5125;if(r===ai)return 5126;if(r===fs)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===su)return 6406;if(r===sn)return 6408;if(r===ru)return 6409;if(r===au)return 6410;if(r===li)return 6402;if(r===Vi)return 34041;if(r===la)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ou)return 6403;if(r===lu)return 36244;if(r===cu)return 33319;if(r===uu)return 33320;if(r===du)return 36249;if(r===vr||r===br||r===yr||r===Mr)if(o===Xe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===vr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===vr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===br)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ya||r===Za||r===$a||r===Ja)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ya)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Za)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$a)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ja)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ka||r===Qa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ka)return o===Xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Qa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===eo||r===to||r===no||r===io||r===so||r===ro||r===ao||r===oo||r===lo||r===co||r===uo||r===ho||r===fo||r===po)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===eo)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===to)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===no)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===io)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===so)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ro)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ao)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===oo)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lo)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===co)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===uo)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ho)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fo)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===po)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===wr)return o===Xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===fu||r===mo||r===go||r===xo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===wr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===mo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===go)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Oi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class dm extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class an extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hm={type:"move"};class $r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n),_=this._getHandJoint(l,p);f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fm extends Pt{constructor(e,t,n,s,r,o,a,c,l,u){if(u=u!==void 0?u:li,u!==li&&u!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===li&&(n=ri),n===void 0&&u===Vi&&(n=Oi),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=c!==void 0?c:Ct,this.flipY=!1,this.generateMipmaps=!1}}class pm extends ji{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null;const p=t.getContextAttributes();let f=null,_=null;const b=[],v=[],M=new Set,w=new Map,L=new en;L.layers.enable(1),L.viewport=new pt;const C=new en;C.layers.enable(2),C.viewport=new pt;const x=[L,C],T=new dm;T.layers.enable(1),T.layers.enable(2);let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let Y=b[N];return Y===void 0&&(Y=new $r,b[N]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(N){let Y=b[N];return Y===void 0&&(Y=new $r,b[N]=Y),Y.getGripSpace()},this.getHand=function(N){let Y=b[N];return Y===void 0&&(Y=new $r,b[N]=Y),Y.getHandSpace()};function q(N){const Y=v.indexOf(N.inputSource);if(Y===-1)return;const re=b[Y];re!==void 0&&re.dispatchEvent({type:N.type,data:N.inputSource})}function k(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",I);for(let N=0;N<b.length;N++){const Y=v[N];Y!==null&&(v[N]=null,b[N].disconnect(Y))}D=null,W=null,e.setRenderTarget(f),m=null,d=null,h=null,s=null,_=null,fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",k),s.addEventListener("inputsourceschange",I),p.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:m}),_=new pi(m.framebufferWidth,m.framebufferHeight,{format:sn,type:hi,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let Y=null,re=null,ae=null;p.depth&&(ae=p.stencil?35056:33190,Y=p.stencil?Vi:li,re=p.stencil?Oi:ri);const O={colorFormat:32856,depthFormat:ae,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(O),s.updateRenderState({layers:[d]}),_=new pi(d.textureWidth,d.textureHeight,{format:sn,type:hi,depthTexture:new fm(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const Le=e.properties.get(_);Le.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(N){for(let Y=0;Y<N.removed.length;Y++){const re=N.removed[Y],ae=v.indexOf(re);ae>=0&&(v[ae]=null,b[ae].disconnect(re))}for(let Y=0;Y<N.added.length;Y++){const re=N.added[Y];let ae=v.indexOf(re);if(ae===-1){for(let Le=0;Le<b.length;Le++)if(Le>=v.length){v.push(re),ae=Le;break}else if(v[Le]===null){v[Le]=re,ae=Le;break}if(ae===-1)break}const O=b[ae];O&&O.connect(re)}}const H=new R,$=new R;function K(N,Y,re){H.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(re.matrixWorld);const ae=H.distanceTo($),O=Y.projectionMatrix.elements,Le=re.projectionMatrix.elements,ge=O[14]/(O[10]-1),xe=O[14]/(O[10]+1),de=(O[9]+1)/O[5],je=(O[9]-1)/O[5],Pe=(O[8]-1)/O[0],Ee=(Le[8]+1)/Le[0],wt=ge*Pe,Vt=ge*Ee,xt=ae/(-Pe+Ee),Ht=xt*-Pe;Y.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ht),N.translateZ(xt),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const it=ge+xt,We=xe+xt,gn=wt-Ht,Yt=Vt+(ae-Ht),E=de*xe/We*it,y=je*xe/We*it;N.projectionMatrix.makePerspective(gn,Yt,E,y,it,We)}function X(N,Y){Y===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Y.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;T.near=C.near=L.near=N.near,T.far=C.far=L.far=N.far,(D!==T.near||W!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,W=T.far);const Y=N.parent,re=T.cameras;X(T,Y);for(let O=0;O<re.length;O++)X(re[O],Y);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),N.matrix.copy(T.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const ae=N.children;for(let O=0,Le=ae.length;O<Le;O++)ae[O].updateMatrixWorld(!0);re.length===2?K(T,L,C):T.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(N){c=N,d!==null&&(d.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)},this.getPlanes=function(){return M};let ne=null;function te(N,Y){if(u=Y.getViewerPose(l||o),g=Y,u!==null){const re=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let ae=!1;re.length!==T.cameras.length&&(T.cameras.length=0,ae=!0);for(let O=0;O<re.length;O++){const Le=re[O];let ge=null;if(m!==null)ge=m.getViewport(Le);else{const de=h.getViewSubImage(d,Le);ge=de.viewport,O===0&&(e.setRenderTargetTextures(_,de.colorTexture,d.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(_))}let xe=x[O];xe===void 0&&(xe=new en,xe.layers.enable(O),xe.viewport=new pt,x[O]=xe),xe.matrix.fromArray(Le.transform.matrix),xe.projectionMatrix.fromArray(Le.projectionMatrix),xe.viewport.set(ge.x,ge.y,ge.width,ge.height),O===0&&T.matrix.copy(xe.matrix),ae===!0&&T.cameras.push(xe)}}for(let re=0;re<b.length;re++){const ae=v[re],O=b[re];ae!==null&&O!==void 0&&O.update(ae,Y,l||o)}if(ne&&ne(N,Y),Y.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let re=null;for(const ae of M)Y.detectedPlanes.has(ae)||(re===null&&(re=[]),re.push(ae));if(re!==null)for(const ae of re)M.delete(ae),w.delete(ae),n.dispatchEvent({type:"planeremoved",data:ae});for(const ae of Y.detectedPlanes)if(!M.has(ae))M.add(ae),w.set(ae,Y.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ae});else{const O=w.get(ae);ae.lastChangedTime>O&&(w.set(ae,ae.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ae}))}}g=null}const fe=new Gl;fe.setAnimationLoop(te),this.setAnimationLoop=function(N){ne=N},this.dispose=function(){}}}function mm(i,e){function t(p,f){f.color.getRGB(p.fogColor.value,Ol(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,_,b,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),l(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,v)):f.isMeshMatcapMaterial?(s(p,f),m(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),g(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,_,b):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Gt&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Gt&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const M=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*M}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let b;f.map?b=f.map:f.specularMap?b=f.specularMap:f.displacementMap?b=f.displacementMap:f.normalMap?b=f.normalMap:f.bumpMap?b=f.bumpMap:f.roughnessMap?b=f.roughnessMap:f.metalnessMap?b=f.metalnessMap:f.alphaMap?b=f.alphaMap:f.emissiveMap?b=f.emissiveMap:f.clearcoatMap?b=f.clearcoatMap:f.clearcoatNormalMap?b=f.clearcoatNormalMap:f.clearcoatRoughnessMap?b=f.clearcoatRoughnessMap:f.iridescenceMap?b=f.iridescenceMap:f.iridescenceThicknessMap?b=f.iridescenceThicknessMap:f.specularIntensityMap?b=f.specularIntensityMap:f.specularColorMap?b=f.specularColorMap:f.transmissionMap?b=f.transmissionMap:f.thicknessMap?b=f.thicknessMap:f.sheenColorMap?b=f.sheenColorMap:f.sheenRoughnessMap&&(b=f.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let v;f.aoMap?v=f.aoMap:f.lightMap&&(v=f.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uv2Transform.value.copy(v.matrix))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,_,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=b*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Gt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function gm(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function c(b,v){const M=v.program;n.uniformBlockBinding(b,M)}function l(b,v){let M=s[b.id];M===void 0&&(g(b),M=u(b),s[b.id]=M,b.addEventListener("dispose",f));const w=v.program;n.updateUBOMapping(b,w);const L=e.render.frame;r[b.id]!==L&&(d(b),r[b.id]=L)}function u(b){const v=h();b.__bindingPointIndex=v;const M=i.createBuffer(),w=b.__size,L=b.usage;return i.bindBuffer(35345,M),i.bufferData(35345,w,L),i.bindBuffer(35345,null),i.bindBufferBase(35345,v,M),M}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const v=s[b.id],M=b.uniforms,w=b.__cache;i.bindBuffer(35345,v);for(let L=0,C=M.length;L<C;L++){const x=M[L];if(m(x,L,w)===!0){const T=x.__offset,D=Array.isArray(x.value)?x.value:[x.value];let W=0;for(let q=0;q<D.length;q++){const k=D[q],I=p(k);typeof k=="number"?(x.__data[0]=k,i.bufferSubData(35345,T+W,x.__data)):k.isMatrix3?(x.__data[0]=k.elements[0],x.__data[1]=k.elements[1],x.__data[2]=k.elements[2],x.__data[3]=k.elements[0],x.__data[4]=k.elements[3],x.__data[5]=k.elements[4],x.__data[6]=k.elements[5],x.__data[7]=k.elements[0],x.__data[8]=k.elements[6],x.__data[9]=k.elements[7],x.__data[10]=k.elements[8],x.__data[11]=k.elements[0]):(k.toArray(x.__data,W),W+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,T,x.__data)}}i.bindBuffer(35345,null)}function m(b,v,M){const w=b.value;if(M[v]===void 0){if(typeof w=="number")M[v]=w;else{const L=Array.isArray(w)?w:[w],C=[];for(let x=0;x<L.length;x++)C.push(L[x].clone());M[v]=C}return!0}else if(typeof w=="number"){if(M[v]!==w)return M[v]=w,!0}else{const L=Array.isArray(M[v])?M[v]:[M[v]],C=Array.isArray(w)?w:[w];for(let x=0;x<L.length;x++){const T=L[x];if(T.equals(C[x])===!1)return T.copy(C[x]),!0}}return!1}function g(b){const v=b.uniforms;let M=0;const w=16;let L=0;for(let C=0,x=v.length;C<x;C++){const T=v[C],D={boundary:0,storage:0},W=Array.isArray(T.value)?T.value:[T.value];for(let q=0,k=W.length;q<k;q++){const I=W[q],H=p(I);D.boundary+=H.boundary,D.storage+=H.storage}if(T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,C>0){L=M%w;const q=w-L;L!==0&&q-D.boundary<0&&(M+=w-L,T.__offset=M)}M+=D.storage}return L=M%w,L>0&&(M+=w-L),b.__size=M,b.__cache={},this}function p(b){const v={boundary:0,storage:0};return typeof b=="number"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function f(b){const v=b.target;v.removeEventListener("dispose",f);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function _(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:_}}function xm(){const i=ms("canvas");return i.style.display="block",i}function jl(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:xm(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",l=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=fi,this.physicallyCorrectLights=!1,this.toneMapping=En,this.toneMappingExposure=1;const p=this;let f=!1,_=0,b=0,v=null,M=-1,w=null;const L=new pt,C=new pt;let x=null,T=e.width,D=e.height,W=1,q=null,k=null;const I=new pt(0,0,T,D),H=new pt(0,0,T,D);let $=!1;const K=new Sa;let X=!1,ne=!1,te=null;const fe=new nt,N=new Fe,Y=new R,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return v===null?W:1}let O=t;function Le(S,F){for(let B=0;B<S.length;B++){const z=S[B],V=e.getContext(z,F);if(V!==null)return V}return null}try{const S={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ba}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",Ge,!1),O===null){const F=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&F.shift(),O=Le(F,S),O===null)throw Le(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ge,xe,de,je,Pe,Ee,wt,Vt,xt,Ht,it,We,gn,Yt,E,y,G,Q,ie,le,Ae,ce,j,we;function Te(){ge=new Cf(O),xe=new Mf(O,ge,i),ge.init(xe),ce=new um(O,ge,xe),de=new lm(O,ge,xe),je=new Pf,Pe=new Yp,Ee=new cm(O,ge,de,Pe,xe,ce,je),wt=new Sf(p),Vt=new Af(p),xt=new Uu(O,xe),j=new bf(O,ge,xt,xe),Ht=new Lf(O,xt,je,j),it=new kf(O,Ht,xt,je),ie=new zf(O,xe,Ee),y=new wf(Pe),We=new Xp(p,wt,Vt,ge,xe,j,y),gn=new mm(p,Pe),Yt=new $p,E=new nm(ge,xe),Q=new vf(p,wt,Vt,de,it,u,o),G=new om(p,it,xe),we=new gm(O,je,xe,de),le=new yf(O,ge,je,xe),Ae=new Df(O,ge,je,xe),je.programs=We.programs,p.capabilities=xe,p.extensions=ge,p.properties=Pe,p.renderLists=Yt,p.shadowMap=G,p.state=de,p.info=je}Te();const pe=new pm(p,O);this.xr=pe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const S=ge.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ge.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(T,D,!1))},this.getSize=function(S){return S.set(T,D)},this.setSize=function(S,F,B){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=S,D=F,e.width=Math.floor(S*W),e.height=Math.floor(F*W),B!==!1&&(e.style.width=S+"px",e.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(T*W,D*W).floor()},this.setDrawingBufferSize=function(S,F,B){T=S,D=F,W=B,e.width=Math.floor(S*B),e.height=Math.floor(F*B),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(I)},this.setViewport=function(S,F,B,z){S.isVector4?I.set(S.x,S.y,S.z,S.w):I.set(S,F,B,z),de.viewport(L.copy(I).multiplyScalar(W).floor())},this.getScissor=function(S){return S.copy(H)},this.setScissor=function(S,F,B,z){S.isVector4?H.set(S.x,S.y,S.z,S.w):H.set(S,F,B,z),de.scissor(C.copy(H).multiplyScalar(W).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(S){de.setScissorTest($=S)},this.setOpaqueSort=function(S){q=S},this.setTransparentSort=function(S){k=S},this.getClearColor=function(S){return S.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(S=!0,F=!0,B=!0){let z=0;S&&(z|=16384),F&&(z|=256),B&&(z|=1024),O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",Ge,!1),Yt.dispose(),E.dispose(),Pe.dispose(),wt.dispose(),Vt.dispose(),it.dispose(),j.dispose(),we.dispose(),We.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ue),pe.removeEventListener("sessionend",me),te&&(te.dispose(),te=null),He.stop()};function Se(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const S=je.autoReset,F=G.enabled,B=G.autoUpdate,z=G.needsUpdate,V=G.type;Te(),je.autoReset=S,G.enabled=F,G.autoUpdate=B,G.needsUpdate=z,G.type=V}function Ge(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ye(S){const F=S.target;F.removeEventListener("dispose",Ye),ut(F)}function ut(S){P(S),Pe.remove(S)}function P(S){const F=Pe.get(S).programs;F!==void 0&&(F.forEach(function(B){We.releaseProgram(B)}),S.isShaderMaterial&&We.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,B,z,V,Me){F===null&&(F=re);const Ce=V.isMesh&&V.matrixWorld.determinant()<0,Ie=bc(S,F,B,z,V);de.setMaterial(z,Ce);let ze=B.index,Ve=1;z.wireframe===!0&&(ze=Ht.getWireframeAttribute(B),Ve=2);const Ne=B.drawRange,Oe=B.attributes.position;let Qe=Ne.start*Ve,It=(Ne.start+Ne.count)*Ve;Me!==null&&(Qe=Math.max(Qe,Me.start*Ve),It=Math.min(It,(Me.start+Me.count)*Ve)),ze!==null?(Qe=Math.max(Qe,0),It=Math.min(It,ze.count)):Oe!=null&&(Qe=Math.max(Qe,0),It=Math.min(It,Oe.count));const _n=It-Qe;if(_n<0||_n===1/0)return;j.setup(V,z,Ie,B,ze);let Zn,et=le;if(ze!==null&&(Zn=xt.get(ze),et=Ae,et.setIndex(Zn)),V.isMesh)z.wireframe===!0?(de.setLineWidth(z.wireframeLinewidth*ae()),et.setMode(1)):et.setMode(4);else if(V.isLine){let Ue=z.linewidth;Ue===void 0&&(Ue=1),de.setLineWidth(Ue*ae()),V.isLineSegments?et.setMode(1):V.isLineLoop?et.setMode(2):et.setMode(3)}else V.isPoints?et.setMode(0):V.isSprite&&et.setMode(4);if(V.isInstancedMesh)et.renderInstances(Qe,_n,V.count);else if(B.isInstancedBufferGeometry){const Ue=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,pr=Math.min(B.instanceCount,Ue);et.renderInstances(Qe,_n,pr)}else et.render(Qe,_n)},this.compile=function(S,F){function B(z,V,Me){z.transparent===!0&&z.side===Tn&&z.forceSinglePass===!1?(z.side=Gt,z.needsUpdate=!0,Wt(z,V,Me),z.side=Vn,z.needsUpdate=!0,Wt(z,V,Me),z.side=Tn):Wt(z,V,Me)}d=E.get(S),d.init(),g.push(d),S.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights(p.physicallyCorrectLights),S.traverse(function(z){const V=z.material;if(V)if(Array.isArray(V))for(let Me=0;Me<V.length;Me++){const Ce=V[Me];B(Ce,S,z)}else B(V,S,z)}),g.pop(),d=null};let U=null;function J(S){U&&U(S)}function ue(){He.stop()}function me(){He.start()}const He=new Gl;He.setAnimationLoop(J),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(S){U=S,pe.setAnimationLoop(S),S===null?He.stop():He.start()},pe.addEventListener("sessionstart",ue),pe.addEventListener("sessionend",me),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(F),F=pe.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,F,v),d=E.get(S,g.length),d.init(),g.push(d),fe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(fe),ne=this.localClippingEnabled,X=y.init(this.clippingPlanes,ne),h=Yt.get(S,m.length),h.init(),m.push(h),dt(S,F,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(q,k),X===!0&&y.beginShadows();const B=d.state.shadowsArray;if(G.render(B,S,F),X===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(h,S),d.setupLights(p.physicallyCorrectLights),F.isArrayCamera){const z=F.cameras;for(let V=0,Me=z.length;V<Me;V++){const Ce=z[V];_t(h,S,Ce,Ce.viewport)}}else _t(h,S,F);v!==null&&(Ee.updateMultisampleRenderTarget(v),Ee.updateRenderTargetMipmap(v)),S.isScene===!0&&S.onAfterRender(p,S,F),j.resetDefaultState(),M=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function dt(S,F,B,z){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){z&&Y.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);const Ce=it.update(S),Ie=S.material;Ie.visible&&h.push(S,Ce,Ie,B,Y.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==je.render.frame&&(S.skeleton.update(),S.skeleton.frame=je.render.frame),!S.frustumCulled||K.intersectsObject(S))){z&&Y.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);const Ce=it.update(S),Ie=S.material;if(Array.isArray(Ie)){const ze=Ce.groups;for(let Ve=0,Ne=ze.length;Ve<Ne;Ve++){const Oe=ze[Ve],Qe=Ie[Oe.materialIndex];Qe&&Qe.visible&&h.push(S,Ce,Qe,B,Y.z,Oe)}}else Ie.visible&&h.push(S,Ce,Ie,B,Y.z,null)}}const Me=S.children;for(let Ce=0,Ie=Me.length;Ce<Ie;Ce++)dt(Me[Ce],F,B,z)}function _t(S,F,B,z){const V=S.opaque,Me=S.transmissive,Ce=S.transparent;d.setupLightsView(B),X===!0&&y.setGlobalState(p.clippingPlanes,B),Me.length>0&&Yn(V,F,B),z&&de.viewport(L.copy(z)),V.length>0&&Ze(V,F,B),Me.length>0&&Ze(Me,F,B),Ce.length>0&&Ze(Ce,F,B),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Yn(S,F,B){const z=xe.isWebGL2;te===null&&(te=new pi(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?fs:hi,minFilter:hs,samples:z&&r===!0?4:0})),p.getDrawingBufferSize(N),z?te.setSize(N.x,N.y):te.setSize(ca(N.x),ca(N.y));const V=p.getRenderTarget();p.setRenderTarget(te),p.clear();const Me=p.toneMapping;p.toneMapping=En,Ze(S,F,B),p.toneMapping=Me,Ee.updateMultisampleRenderTarget(te),Ee.updateRenderTargetMipmap(te),p.setRenderTarget(V)}function Ze(S,F,B){const z=F.isScene===!0?F.overrideMaterial:null;for(let V=0,Me=S.length;V<Me;V++){const Ce=S[V],Ie=Ce.object,ze=Ce.geometry,Ve=z===null?Ce.material:z,Ne=Ce.group;Ie.layers.test(B.layers)&&xn(Ie,F,B,ze,Ve,Ne)}}function xn(S,F,B,z,V,Me){S.onBeforeRender(p,F,B,z,V,Me),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(p,F,B,z,S,Me),V.transparent===!0&&V.side===Tn&&V.forceSinglePass===!1?(V.side=Gt,V.needsUpdate=!0,p.renderBufferDirect(B,F,z,V,S,Me),V.side=Vn,V.needsUpdate=!0,p.renderBufferDirect(B,F,z,V,S,Me),V.side=Tn):p.renderBufferDirect(B,F,z,V,S,Me),S.onAfterRender(p,F,B,z,V,Me)}function Wt(S,F,B){F.isScene!==!0&&(F=re);const z=Pe.get(S),V=d.state.lights,Me=d.state.shadowsArray,Ce=V.state.version,Ie=We.getParameters(S,V.state,Me,F,B),ze=We.getProgramCacheKey(Ie);let Ve=z.programs;z.environment=S.isMeshStandardMaterial?F.environment:null,z.fog=F.fog,z.envMap=(S.isMeshStandardMaterial?Vt:wt).get(S.envMap||z.environment),Ve===void 0&&(S.addEventListener("dispose",Ye),Ve=new Map,z.programs=Ve);let Ne=Ve.get(ze);if(Ne!==void 0){if(z.currentProgram===Ne&&z.lightsStateVersion===Ce)return Oa(S,Ie),Ne}else Ie.uniforms=We.getUniforms(S),S.onBuild(B,Ie,p),S.onBeforeCompile(Ie,p),Ne=We.acquireProgram(Ie,ze),Ve.set(ze,Ne),z.uniforms=Ie.uniforms;const Oe=z.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Oe.clippingPlanes=y.uniform),Oa(S,Ie),z.needsLights=Mc(S),z.lightsStateVersion=Ce,z.needsLights&&(Oe.ambientLightColor.value=V.state.ambient,Oe.lightProbe.value=V.state.probe,Oe.directionalLights.value=V.state.directional,Oe.directionalLightShadows.value=V.state.directionalShadow,Oe.spotLights.value=V.state.spot,Oe.spotLightShadows.value=V.state.spotShadow,Oe.rectAreaLights.value=V.state.rectArea,Oe.ltc_1.value=V.state.rectAreaLTC1,Oe.ltc_2.value=V.state.rectAreaLTC2,Oe.pointLights.value=V.state.point,Oe.pointLightShadows.value=V.state.pointShadow,Oe.hemisphereLights.value=V.state.hemi,Oe.directionalShadowMap.value=V.state.directionalShadowMap,Oe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Oe.spotShadowMap.value=V.state.spotShadowMap,Oe.spotLightMatrix.value=V.state.spotLightMatrix,Oe.spotLightMap.value=V.state.spotLightMap,Oe.pointShadowMap.value=V.state.pointShadowMap,Oe.pointShadowMatrix.value=V.state.pointShadowMatrix);const Qe=Ne.getUniforms(),It=Js.seqWithValue(Qe.seq,Oe);return z.currentProgram=Ne,z.uniformsList=It,Ne}function Oa(S,F){const B=Pe.get(S);B.outputEncoding=F.outputEncoding,B.instancing=F.instancing,B.skinning=F.skinning,B.morphTargets=F.morphTargets,B.morphNormals=F.morphNormals,B.morphColors=F.morphColors,B.morphTargetsCount=F.morphTargetsCount,B.numClippingPlanes=F.numClippingPlanes,B.numIntersection=F.numClipIntersection,B.vertexAlphas=F.vertexAlphas,B.vertexTangents=F.vertexTangents,B.toneMapping=F.toneMapping}function bc(S,F,B,z,V){F.isScene!==!0&&(F=re),Ee.resetTextureUnits();const Me=F.fog,Ce=z.isMeshStandardMaterial?F.environment:null,Ie=v===null?p.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:fi,ze=(z.isMeshStandardMaterial?Vt:wt).get(z.envMap||Ce),Ve=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ne=!!z.normalMap&&!!B.attributes.tangent,Oe=!!B.morphAttributes.position,Qe=!!B.morphAttributes.normal,It=!!B.morphAttributes.color,_n=z.toneMapped?p.toneMapping:En,Zn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,et=Zn!==void 0?Zn.length:0,Ue=Pe.get(z),pr=d.state.lights;if(X===!0&&(ne===!0||S!==w)){const zt=S===w&&z.id===M;y.setState(z,S,zt)}let ht=!1;z.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==pr.state.version||Ue.outputEncoding!==Ie||V.isInstancedMesh&&Ue.instancing===!1||!V.isInstancedMesh&&Ue.instancing===!0||V.isSkinnedMesh&&Ue.skinning===!1||!V.isSkinnedMesh&&Ue.skinning===!0||Ue.envMap!==ze||z.fog===!0&&Ue.fog!==Me||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==y.numPlanes||Ue.numIntersection!==y.numIntersection)||Ue.vertexAlphas!==Ve||Ue.vertexTangents!==Ne||Ue.morphTargets!==Oe||Ue.morphNormals!==Qe||Ue.morphColors!==It||Ue.toneMapping!==_n||xe.isWebGL2===!0&&Ue.morphTargetsCount!==et)&&(ht=!0):(ht=!0,Ue.__version=z.version);let $n=Ue.currentProgram;ht===!0&&($n=Wt(z,F,V));let Ua=!1,Qi=!1,mr=!1;const St=$n.getUniforms(),Jn=Ue.uniforms;if(de.useProgram($n.program)&&(Ua=!0,Qi=!0,mr=!0),z.id!==M&&(M=z.id,Qi=!0),Ua||w!==S){if(St.setValue(O,"projectionMatrix",S.projectionMatrix),xe.logarithmicDepthBuffer&&St.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),w!==S&&(w=S,Qi=!0,mr=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const zt=St.map.cameraPosition;zt!==void 0&&zt.setValue(O,Y.setFromMatrixPosition(S.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&St.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||V.isSkinnedMesh)&&St.setValue(O,"viewMatrix",S.matrixWorldInverse)}if(V.isSkinnedMesh){St.setOptional(O,V,"bindMatrix"),St.setOptional(O,V,"bindMatrixInverse");const zt=V.skeleton;zt&&(xe.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),St.setValue(O,"boneTexture",zt.boneTexture,Ee),St.setValue(O,"boneTextureSize",zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const gr=B.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0&&xe.isWebGL2===!0)&&ie.update(V,B,z,$n),(Qi||Ue.receiveShadow!==V.receiveShadow)&&(Ue.receiveShadow=V.receiveShadow,St.setValue(O,"receiveShadow",V.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Jn.envMap.value=ze,Jn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Qi&&(St.setValue(O,"toneMappingExposure",p.toneMappingExposure),Ue.needsLights&&yc(Jn,mr),Me&&z.fog===!0&&gn.refreshFogUniforms(Jn,Me),gn.refreshMaterialUniforms(Jn,z,W,D,te),Js.upload(O,Ue.uniformsList,Jn,Ee)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Js.upload(O,Ue.uniformsList,Jn,Ee),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&St.setValue(O,"center",V.center),St.setValue(O,"modelViewMatrix",V.modelViewMatrix),St.setValue(O,"normalMatrix",V.normalMatrix),St.setValue(O,"modelMatrix",V.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const zt=z.uniformsGroups;for(let xr=0,wc=zt.length;xr<wc;xr++)if(xe.isWebGL2){const Ba=zt[xr];we.update(Ba,$n),we.bind(Ba,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function yc(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Mc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(S,F,B){Pe.get(S.texture).__webglTexture=F,Pe.get(S.depthTexture).__webglTexture=B;const z=Pe.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,F){const B=Pe.get(S);B.__webglFramebuffer=F,B.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,B=0){v=S,_=F,b=B;let z=!0,V=null,Me=!1,Ce=!1;if(S){const ze=Pe.get(S);ze.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),z=!1):ze.__webglFramebuffer===void 0?Ee.setupRenderTarget(S):ze.__hasExternalTextures&&Ee.rebindTextures(S,Pe.get(S.texture).__webglTexture,Pe.get(S.depthTexture).__webglTexture);const Ve=S.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const Ne=Pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(V=Ne[F],Me=!0):xe.isWebGL2&&S.samples>0&&Ee.useMultisampledRTT(S)===!1?V=Pe.get(S).__webglMultisampledFramebuffer:V=Ne,L.copy(S.viewport),C.copy(S.scissor),x=S.scissorTest}else L.copy(I).multiplyScalar(W).floor(),C.copy(H).multiplyScalar(W).floor(),x=$;if(de.bindFramebuffer(36160,V)&&xe.drawBuffers&&z&&de.drawBuffers(S,V),de.viewport(L),de.scissor(C),de.setScissorTest(x),Me){const ze=Pe.get(S.texture);O.framebufferTexture2D(36160,36064,34069+F,ze.__webglTexture,B)}else if(Ce){const ze=Pe.get(S.texture),Ve=F||0;O.framebufferTextureLayer(36160,36064,ze.__webglTexture,B||0,Ve)}M=-1},this.readRenderTargetPixels=function(S,F,B,z,V,Me,Ce){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){de.bindFramebuffer(36160,Ie);try{const ze=S.texture,Ve=ze.format,Ne=ze.type;if(Ve!==sn&&ce.convert(Ve)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ne===fs&&(ge.has("EXT_color_buffer_half_float")||xe.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Ne!==hi&&ce.convert(Ne)!==O.getParameter(35738)&&!(Ne===ai&&(xe.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-z&&B>=0&&B<=S.height-V&&O.readPixels(F,B,z,V,ce.convert(Ve),ce.convert(Ne),Me)}finally{const ze=v!==null?Pe.get(v).__webglFramebuffer:null;de.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(S,F,B=0){const z=Math.pow(2,-B),V=Math.floor(F.image.width*z),Me=Math.floor(F.image.height*z);Ee.setTexture2D(F,0),O.copyTexSubImage2D(3553,B,0,0,S.x,S.y,V,Me),de.unbindTexture()},this.copyTextureToTexture=function(S,F,B,z=0){const V=F.image.width,Me=F.image.height,Ce=ce.convert(B.format),Ie=ce.convert(B.type);Ee.setTexture2D(B,0),O.pixelStorei(37440,B.flipY),O.pixelStorei(37441,B.premultiplyAlpha),O.pixelStorei(3317,B.unpackAlignment),F.isDataTexture?O.texSubImage2D(3553,z,S.x,S.y,V,Me,Ce,Ie,F.image.data):F.isCompressedTexture?O.compressedTexSubImage2D(3553,z,S.x,S.y,F.mipmaps[0].width,F.mipmaps[0].height,Ce,F.mipmaps[0].data):O.texSubImage2D(3553,z,S.x,S.y,Ce,Ie,F.image),z===0&&B.generateMipmaps&&O.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(S,F,B,z,V=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=S.max.x-S.min.x+1,Ce=S.max.y-S.min.y+1,Ie=S.max.z-S.min.z+1,ze=ce.convert(z.format),Ve=ce.convert(z.type);let Ne;if(z.isData3DTexture)Ee.setTexture3D(z,0),Ne=32879;else if(z.isDataArrayTexture)Ee.setTexture2DArray(z,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,z.flipY),O.pixelStorei(37441,z.premultiplyAlpha),O.pixelStorei(3317,z.unpackAlignment);const Oe=O.getParameter(3314),Qe=O.getParameter(32878),It=O.getParameter(3316),_n=O.getParameter(3315),Zn=O.getParameter(32877),et=B.isCompressedTexture?B.mipmaps[0]:B.image;O.pixelStorei(3314,et.width),O.pixelStorei(32878,et.height),O.pixelStorei(3316,S.min.x),O.pixelStorei(3315,S.min.y),O.pixelStorei(32877,S.min.z),B.isDataTexture||B.isData3DTexture?O.texSubImage3D(Ne,V,F.x,F.y,F.z,Me,Ce,Ie,ze,Ve,et.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ne,V,F.x,F.y,F.z,Me,Ce,Ie,ze,et.data)):O.texSubImage3D(Ne,V,F.x,F.y,F.z,Me,Ce,Ie,ze,Ve,et),O.pixelStorei(3314,Oe),O.pixelStorei(32878,Qe),O.pixelStorei(3316,It),O.pixelStorei(3315,_n),O.pixelStorei(32877,Zn),V===0&&z.generateMipmaps&&O.generateMipmap(Ne),de.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ee.setTextureCube(S,0):S.isData3DTexture?Ee.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ee.setTexture2DArray(S,0):Ee.setTexture2D(S,0),de.unbindTexture()},this.resetState=function(){_=0,b=0,v=null,de.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class _m extends jl{}_m.prototype.isWebGL1Renderer=!0;class vm extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Aa extends Yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const el=new R,tl=new R,nl=new nt,Jr=new Ma,Ys=new rr;class Xl extends gt{constructor(e=new Rt,t=new Aa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)el.fromBufferAttribute(t,s-1),tl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=el.distanceTo(tl);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),Ys.radius+=r,e.ray.intersectsSphere(Ys)===!1)return;nl.copy(s).invert(),Jr.copy(e.ray).applyMatrix4(nl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new R,u=new R,h=new R,d=new R,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let v=_,M=b-1;v<M;v+=m){const w=g.getX(v),L=g.getX(v+1);if(l.fromBufferAttribute(f,w),u.fromBufferAttribute(f,L),Jr.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),b=Math.min(f.count,o.start+o.count);for(let v=_,M=b-1;v<M;v+=m){if(l.fromBufferAttribute(f,v),u.fromBufferAttribute(f,v+1),Jr.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const il=new R,sl=new R;class bm extends Xl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)il.fromBufferAttribute(t,s),sl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+il.distanceTo(sl);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ym extends Xl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class lr extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],m=[];let g=0;const p=[],f=n/2;let _=0;b(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(m,2));function b(){const M=new R,w=new R;let L=0;const C=(t-e)/n;for(let x=0;x<=r;x++){const T=[],D=x/r,W=D*(t-e)+e;for(let q=0;q<=s;q++){const k=q/s,I=k*c+a,H=Math.sin(I),$=Math.cos(I);w.x=W*H,w.y=-D*n+f,w.z=W*$,h.push(w.x,w.y,w.z),M.set(H,C,$).normalize(),d.push(M.x,M.y,M.z),m.push(k,1-D),T.push(g++)}p.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const D=p[T][x],W=p[T+1][x],q=p[T+1][x+1],k=p[T][x+1];u.push(D,W,k),u.push(W,q,k),L+=6}l.addGroup(_,L,0),_+=L}function v(M){const w=g,L=new Fe,C=new R;let x=0;const T=M===!0?e:t,D=M===!0?1:-1;for(let q=1;q<=s;q++)h.push(0,f*D,0),d.push(0,D,0),m.push(.5,.5),g++;const W=g;for(let q=0;q<=s;q++){const I=q/s*c+a,H=Math.cos(I),$=Math.sin(I);C.x=T*$,C.y=f*D,C.z=T*H,h.push(C.x,C.y,C.z),d.push(0,D,0),L.x=H*.5+.5,L.y=$*.5*D+.5,m.push(L.x,L.y),g++}for(let q=0;q<s;q++){const k=w+q,I=W+q;M===!0?u.push(I,I+1,k):u.push(I+1,I,k),x+=3}l.addGroup(_,x,M===!0?1:2),_+=x}}static fromJSON(e){return new lr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ca extends Rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const v=new R,M=new R,w=new R;for(let L=0;L<t.length;L+=3)m(t[L+0],v),m(t[L+1],M),m(t[L+2],w),c(v,M,w,b)}function c(b,v,M,w){const L=w+1,C=[];for(let x=0;x<=L;x++){C[x]=[];const T=b.clone().lerp(M,x/L),D=v.clone().lerp(M,x/L),W=L-x;for(let q=0;q<=W;q++)q===0&&x===L?C[x][q]=T:C[x][q]=T.clone().lerp(D,q/W)}for(let x=0;x<L;x++)for(let T=0;T<2*(L-x)-1;T++){const D=Math.floor(T/2);T%2===0?(d(C[x][D+1]),d(C[x+1][D]),d(C[x][D])):(d(C[x][D+1]),d(C[x+1][D+1]),d(C[x+1][D]))}}function l(b){const v=new R;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(b),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function u(){const b=new R;for(let v=0;v<r.length;v+=3){b.x=r[v+0],b.y=r[v+1],b.z=r[v+2];const M=f(b)/2/Math.PI+.5,w=_(b)/Math.PI+.5;o.push(M,1-w)}g(),h()}function h(){for(let b=0;b<o.length;b+=6){const v=o[b+0],M=o[b+2],w=o[b+4],L=Math.max(v,M,w),C=Math.min(v,M,w);L>.9&&C<.1&&(v<.2&&(o[b+0]+=1),M<.2&&(o[b+2]+=1),w<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function m(b,v){const M=b*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function g(){const b=new R,v=new R,M=new R,w=new R,L=new Fe,C=new Fe,x=new Fe;for(let T=0,D=0;T<r.length;T+=9,D+=6){b.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),L.set(o[D+0],o[D+1]),C.set(o[D+2],o[D+3]),x.set(o[D+4],o[D+5]),w.copy(b).add(v).add(M).divideScalar(3);const W=f(w);p(L,D+0,b,W),p(C,D+2,v,W),p(x,D+4,M,W)}}function p(b,v,M,w){w<0&&b.x===1&&(o[v]=b.x-1),M.x===0&&M.z===0&&(o[v]=w/2/Math.PI+.5)}function f(b){return Math.atan2(b.z,-b.x)}function _(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}static fromJSON(e){return new Ca(e.vertices,e.indices,e.radius,e.details)}}class nr extends Ca{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new nr(e.radius,e.detail)}}class La extends Rt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=e;const d=(t-e)/s,m=new R,g=new Fe;for(let p=0;p<=s;p++){for(let f=0;f<=n;f++){const _=r+f/n*o;m.x=h*Math.cos(_),m.y=h*Math.sin(_),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let p=0;p<s;p++){const f=p*(n+1);for(let _=0;_<n;_++){const b=_+f,v=b,M=b+n+1,w=b+n+2,L=b+1;a.push(v,M,L),a.push(M,w,L)}}this.setIndex(a),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(u,2))}static fromJSON(e){return new La(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ui extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new R,d=new R,m=[],g=[],p=[],f=[];for(let _=0;_<=n;_++){const b=[],v=_/n;let M=0;_==0&&o==0?M=.5/t:_==n&&c==Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const L=w/t;h.x=-e*Math.cos(s+L*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(s+L*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),p.push(d.x,d.y,d.z),f.push(L+M,1-v),b.push(l++)}u.push(b)}for(let _=0;_<n;_++)for(let b=0;b<t;b++){const v=u[_][b+1],M=u[_][b],w=u[_+1][b],L=u[_+1][b+1];(_!==0||o>0)&&m.push(v,M,L),(_!==n-1||c<Math.PI)&&m.push(M,w,L)}this.setIndex(m),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(p,3)),this.setAttribute("uv",new $e(f,2))}static fromJSON(e){return new Ui(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ks extends Yi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const rl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Mm{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const wm=new Mm;class Yl{constructor(e){this.manager=e!==void 0?e:wm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Sm extends Yl{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=rl.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ms("img");function c(){u(),rl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Tm extends Yl{constructor(e){super(e)}load(e,t,n,s){const r=new Pt,o=new Sm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Zl extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Em extends Zl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Kr=new nt,al=new R,ol=new R;class Am{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;al.setFromMatrixPosition(e.matrixWorld),t.position.copy(al),ol.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ol),t.updateMatrixWorld(),Kr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cm extends Am{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lm extends Zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Cm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dm{constructor(e,t,n=0,s=1/0){this.ray=new Ma(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return da(e,this,n,t),n.sort(ll),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)da(e[s],this,n,t);return n.sort(ll),n}}function ll(i,e){return i.distance-e.distance}function da(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)da(s[r],e,t,!0)}}class Pm extends bm{constructor(e=10,t=10,n=4473924,s=8947848){n=new Be(n),s=new Be(s);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,m=0,g=-a;d<=t;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const p=d===r?n:s;p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3}const u=new Rt;u.setAttribute("position",new $e(c,3)),u.setAttribute("color",new $e(l,3));const h=new Aa({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);const ir=i=>String(i).padStart(2,"0"),ke=i=>{const[e,t]=String(i).split(":").map(Number);return e*60+(t||0)},ot=i=>ir(Math.floor(i/60))+":"+ir(Math.round(i%60)),$l=i=>i.getFullYear()+"-"+ir(i.getMonth()+1)+"-"+ir(i.getDate()),cs=()=>$l(new Date),dn=i=>{const[e,t,n]=i.split("-").map(Number);return new Date(e,t-1,n)},Wi=(i,e)=>{const t=dn(i);return t.setDate(t.getDate()+e),$l(t)},Hn=i=>(dn(i).getDay()+6)%7,Jl=i=>Wi(i,-Hn(i)),Rm=()=>{const i=new Date;return i.getHours()*60+i.getMinutes()},ha=["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],Im=["lun.","mar.","mer.","jeu.","ven.","sam.","dim."],zm=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],km=i=>Im[Hn(i)]+" "+dn(i).getDate(),xs=i=>{const e=dn(i);return zm[Hn(i)]+" "+e.getDate()+" "+ha[e.getMonth()]},An=i=>i+"-"+Math.random().toString(36).slice(2,8),cl="etage-demo-v3",ul={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,e){try{localStorage.setItem(i,e)}catch{}}},Fm={"r-fourviere":[[0,"09:00","10:00","Comité de direction","u-claire"],[2,"14:00","16:00","Atelier conception","u-hugo"],[3,"10:00","11:30","Revue de projet Alpina","u-antoine"],[4,"11:00","12:00","Point commercial","u-antoine"]],"r-croix":[[-1,"10:30","11:00","Daily projet","u-hugo"],[1,"15:00","16:00","Point trésorerie","u-emma"],[3,"14:00","15:00","Entretien de recrutement","u-manon"]]},Nm=[{room:"r-fourviere",s:"10:15",e:"11:00",t:"Claire Morel"}],Om=i=>i+"-"+Math.random().toString(36).slice(2,8);function dl(){const i=[{id:"r-plateau",name:"Plateau Projets",type:"open",x:1,z:1,w:16,d:10},{id:"r-fourviere",name:"Salle Fourvière",type:"meeting",x:18,z:1,w:8,d:6,capacity:8,mailbox:"salle.fourviere@atelier-demo.fr"},{id:"r-croix",name:"Salle Croix-Rousse",type:"meeting",x:27,z:1,w:8,d:5,capacity:4,mailbox:"salle.croixrousse@atelier-demo.fr"},{id:"r-compta",name:"Comptabilité",type:"office",x:18,z:8,w:8,d:6},{id:"r-direction",name:"Direction",type:"office",x:27,z:7,w:8,d:7},{id:"r-support",name:"Support client",type:"open",x:1,z:12,w:12,d:10},{id:"r-cafe",name:"Cafétéria",type:"break",x:14,z:15,w:12,d:7},{id:"r-accueil",name:"Accueil",type:"reception",x:27,z:15,w:8,d:7},{id:"r-wc",name:"Sanitaires",type:"wc",x:14,z:11,w:4,d:4,doors:[{side:"s",at:.5}]}],e=(g,p,f,_,b)=>({id:g,type:"desk",x:p,z:f,rot:_,user:b||null}),t=[e("d1",4,4,180,"u-hugo"),e("d2",5.5,4,180,"u-ines"),e("d3",4,4.7,0,"u-lucas"),e("d4",5.5,4.7,0,"u-sarah"),e("d5",11,4,180,"u-thomas"),e("d6",12.5,4,180,"u-antoine"),e("d7",11,4.7,0,"u-paul"),e("d8",12.5,4.7,0,null),{id:"p1",type:"plant",x:1.6,z:1.6,rot:0},{id:"p2",type:"plant",x:16.4,z:1.6,rot:0},{id:"p3",type:"plant",x:8.2,z:4.3,rot:0},{id:"rt1",type:"round",x:8.5,z:8.5,rot:0},{id:"m1",type:"meeting",x:22,z:3.8,rot:0,seats:8},{id:"p4",type:"plant",x:25.3,z:1.7,rot:0},{id:"m2",type:"meeting",x:31,z:3.4,rot:0,seats:4},e("d9",20.5,10.4,0,"u-emma"),e("d10",23.5,10.4,0,"u-nathan"),{id:"p5",type:"plant",x:25.3,z:8.7,rot:0},e("d11",31,9.2,0,"u-claire"),{id:"m3",type:"meeting",x:31,z:12.2,rot:0,seats:4},{id:"p6",type:"plant",x:34.3,z:7.7,rot:0},e("s1",4,15,180,"u-lea"),e("s2",5.5,15,180,"u-julien"),e("s3",7,15,180,"u-camille"),e("s4",4,15.7,0,"u-maxime"),e("s5",5.5,15.7,0,null),e("s6",7,15.7,0,null),{id:"p7",type:"plant",x:1.6,z:21.3,rot:0},{id:"p8",type:"plant",x:12.3,z:12.7,rot:0},{id:"rt4",type:"round",x:9.5,z:19.5,rot:0},{id:"k1",type:"counter",x:16.8,z:16,rot:0},{id:"rt2",type:"round",x:19.8,z:18.8,rot:0},{id:"rt3",type:"round",x:22.6,z:17.6,rot:0},{id:"pp1",type:"pingpong",x:17.6,z:20.4,rot:0},{id:"so1",type:"sofa",x:23.8,z:20.8,rot:180},{id:"p9",type:"plant",x:25.3,z:15.7,rot:0},e("a1",31,17.4,180,"u-chloe"),{id:"wc1",type:"wc",x:14.9,z:11.4,rot:0},{id:"wc2",type:"wc",x:17.1,z:11.4,rot:0},{id:"wcw",type:"wall",x:16,z:11,x2:16,z2:12.6,rot:0},{id:"sk1",type:"sink",x:14.8,z:14.6,rot:180},{id:"sk2",type:"sink",x:17.2,z:14.6,rot:180},{id:"tv1",type:"tv",x:22,z:1.15,rot:0},{id:"wb1",type:"whiteboard",x:18.15,z:4,rot:90},{id:"pr1",type:"printer",x:16.3,z:10.3,rot:270},{id:"lk1",type:"lockers",x:9,z:21.6,rot:180},{id:"fr1",type:"fridge",x:14.5,z:16,rot:0},{id:"so2",type:"sofa",x:30,z:20.8,rot:180},{id:"p10",type:"plant",x:34.3,z:21.3,rot:0}],n=(g,p,f,_,b)=>({s:g,e:p,t:f,k:_,room:b||null}),s=(g,p,f,_,b,v,M,w,L,C,x)=>({id:g,name:p,title:f,team:_,email:b,role:v,day:M,in:w,out:L,color:C,events:x}),r=n("09:00","10:00","Comité de direction","meeting","r-fourviere"),o=n("10:30","11:00","Daily projet","meeting","r-croix"),a=n("14:00","15:30","Atelier conception","meeting","r-fourviere"),c=n("14:00","15:30","Point client Alpina","meeting"),l=n("14:00","14:30","Revue des tickets","meeting"),u=n("15:00","16:00","Point trésorerie","meeting","r-croix"),h=n("16:00","17:00","Entretien de recrutement","meeting","r-croix"),d=(g,p)=>n(g,p,"Pause déjeuner","lunch"),m=[s("u-claire","Claire Morel","Directrice générale","Direction","claire.morel@atelier-demo.fr","admin","office","08:30","18:30","#3D5A80",[r,n("10:15","11:00","Point avocat","meeting"),n("11:00","12:00","Revue budget","focus"),d("12:30","13:30"),c,h]),s("u-hugo","Hugo Lambert","Chef de projet","Projets","hugo.lambert@atelier-demo.fr","user","office","08:45","18:00","#C0603B",[r,o,d("12:00","13:00"),a]),s("u-ines","Inès Barbier","Développeuse","Projets","ines.barbier@atelier-demo.fr","user","remote","09:00","17:30","#6A4C93",[n("10:30","11:00","Daily projet","meeting"),d("12:30","13:30"),n("14:00","16:00","Développement","focus")]),s("u-lucas","Lucas Fontaine","Développeur","Projets","lucas.fontaine@atelier-demo.fr","user","office","09:15","18:15","#2A9D8F",[o,d("12:00","13:00"),a,n("16:00","17:30","Mise en production","busy")]),s("u-sarah","Sarah Perrin","Designer UX","Projets","sarah.perrin@atelier-demo.fr","user","office","09:00","17:30","#E07A5F",[o,d("12:30","13:30"),a]),s("u-thomas","Thomas Girard","Data analyst","Projets","thomas.girard@atelier-demo.fr","user","ooo","09:00","17:30","#577590",[]),s("u-emma","Emma Rousseau","Responsable comptable","Finance","emma.rousseau@atelier-demo.fr","user","office","08:30","17:30","#8D6A9F",[r,n("11:00","12:00","Clôture mensuelle","focus"),d("12:00","13:00"),u]),s("u-nathan","Nathan Chevalier","Comptable","Finance","nathan.chevalier@atelier-demo.fr","user","office","09:00","17:00","#4D908E",[n("11:00","12:30","Rapprochements bancaires","busy"),d("12:30","13:30"),u]),s("u-lea","Léa Mercier","Responsable support","Support","lea.mercier@atelier-demo.fr","user","office","08:00","16:30","#B5651D",[r,d("12:00","13:00"),l]),s("u-julien","Julien Faure","Conseiller support","Support","julien.faure@atelier-demo.fr","user","office","08:00","16:00","#43AA8B",[d("12:00","13:00"),l]),s("u-camille","Camille Roux","Conseillère support","Support","camille.roux@atelier-demo.fr","user","remote","09:00","17:00","#C44569",[d("12:30","13:30"),l]),s("u-maxime","Maxime André","Conseiller support","Support","maxime.andre@atelier-demo.fr","user","office","10:00","18:30","#386641",[d("13:00","14:00"),n("16:00","17:00","Formation outil","busy")]),s("u-chloe","Chloé Garnier","Office manager","Accueil","chloe.garnier@atelier-demo.fr","user","office","08:00","17:00","#9C6644",[d("12:00","13:00"),h]),s("u-antoine","Antoine Lefèvre","Commercial","Ventes","antoine.lefevre@atelier-demo.fr","user","unknown","09:00","18:00","#264653",[n("09:30","10:30","Prospection téléphonique","busy"),d("12:30","13:30"),c]),s("u-manon","Manon Dupuis","Chargée RH","RH","manon.dupuis@atelier-demo.fr","user","remote","09:00","17:00","#A05195",[d("12:00","13:00"),n("16:00","17:00","Entretien de recrutement","meeting")]),s("u-paul","Paul Henry","Stagiaire développement","Projets","paul.henry@atelier-demo.fr","user","unknown","09:30","17:30","#6D597A",[o,d("12:00","13:00")])];return{org:"Atelier Démo · Lyon 7e",floor:{w:36,d:23},rooms:i,items:t,users:m,bookings:[],settings:{agenda:"subject",tenant:"",client:""}}}function Um(){let i=null;const e=cs(),t=s=>i.rooms.find(r=>r.id===s),n={mode:"demo",async load(){try{i=JSON.parse(ul.get(cl)||"null")}catch{i=null}return(!i||!i.rooms)&&(i=dl()),i.bookings||(i.bookings=[]),i},reset(){return i=dl(),n.saveLayout(),i},saveLayout(){return ul.set(cl,JSON.stringify(i)),Promise.resolve({ok:!0})},accounts(){return[i.users.find(s=>s.role==="admin"),...i.users.filter(s=>s.role!=="admin").slice(0,3)].filter(Boolean)},eventsOf(s){return s.events.concat(i.bookings.filter(r=>r.date===e&&r.people.includes(s.id)).map(r=>({s:r.s,e:r.e,t:r.t,k:"meeting",room:r.room})))},presence(s,r){if(s.day==="ooo")return{st:"ooo",loc:"away"};const o=ke(s.in),a=ke(s.out);if(r<o||r>=a)return{st:"offline",loc:"none",before:r<o};const c=s.day==="remote"?"remote":s.day==="unknown"?"unknown":"office",l=n.eventsOf(s).find(u=>r>=ke(u.s)&&r<ke(u.e));return l?{st:{meeting:"meeting",focus:"dnd",busy:"busy",lunch:"away"}[l.k]||"busy",loc:c,ev:l}:{st:"available",loc:c}},roomBookings(s,r){const o=[];if(r===e){const a=new Map;for(const c of Nm)c.room===s.id&&o.push({id:"rt-"+c.room+"-"+c.s.replace(":",""),s:c.s,e:c.e,t:c.t,org:null,people:[],src:"outlook"});for(const c of i.users)if(c.day!=="ooo")for(const l of c.events){if(l.room!==s.id)continue;const u=l.s+l.t;a.has(u)||a.set(u,{id:"ev-"+s.id+"-"+l.s.replace(":",""),s:l.s,e:l.e,t:l.t,org:c.id,people:[],src:"outlook"}),a.get(u).people.push(c.id)}o.push(...a.values())}else if(Hn(r)<5)for(const[a,c,l,u,h]of Fm[s.id]||[])(a===-1||a===Hn(r))&&o.push({id:"tp-"+s.id+"-"+r+"-"+c.replace(":",""),s:c,e:l,t:u,org:h,people:[h],src:"outlook"});for(const a of i.bookings)a.room===s.id&&a.date===r&&o.push({...a,src:"etage"});return o.sort((a,c)=>ke(a.s)-ke(c.s))},ensureDates(){},hasDates(){return!0},canCancel(s,r){return s.src==="etage"&&(s.org===r.id||r.role==="admin")},async book(s){const r=n.roomBookings(t(s.room),s.date).find(o=>ke(o.s)<ke(s.e)&&ke(o.e)>ke(s.s));return r?{ok:!1,error:"La salle vient d'être réservée de "+r.s+" à "+r.e+"."}:(i.bookings.push({id:Om("b"),...s}),n.saveLayout(),{ok:!0})},async cancel(s){return i.bookings=i.bookings.filter(r=>r.id!==s.id),n.saveLayout(),{ok:!0}},warnings(){return[]}};return n}function Bm(){let i=null,e=null,t=null,n={presence:{},events:{},hints:[],warnings:[]};const s=new Map,r=new Set;let o=()=>{},a=()=>{},c=null;async function l(d,m={}){const g=m.method&&m.method!=="GET",p=await fetch(d,{credentials:"same-origin",...m,headers:{...m.body?{"Content-Type":"application/json"}:{},...g?{"x-etage":"1"}:{},...m.headers||{}}}),f=await p.json().catch(()=>({}));if(!p.ok)throw Object.assign(new Error(f.error||`Le serveur a répondu ${p.status}.`),{status:p.status});return f}const u=(d,m,g)=>l(d,{method:m,body:g===void 0?void 0:JSON.stringify(g)}),h={mode:"live",available:!1,set onChange(d){o=d},set onError(d){a=d},async init(){try{return t=(await l("/api/me")).user,h.available=!0,!0}catch(d){return h.available=d.status===401,!1}},login(){window.location.href="/api/auth/login"},connect(){window.location.href="/api/auth/login?connect=1"},async logout(){await u("/api/auth/logout","POST").catch(()=>{}),window.location.href="/"},async disconnect(){t=(await u("/api/me/disconnect","POST")).user,Object.assign(h.me(),t),await h.refresh().catch(()=>{})},async setStatus(d){t=(await u("/api/me/status","PUT",{loc:d})).user;const m=h.me();t.status?m.status=t.status:delete m.status,await h.refresh().catch(()=>{})},async load(){const d=await l("/api/state");return e=d.etag||null,i={org:d.org,floor:d.floor,rooms:d.rooms,items:d.items,users:d.users,bg:d.bg,settings:{agenda:"busy",guess:"all",...d.settings||{}},outlookRooms:[],bookings:[]},await h.refresh(),i},me(){return i.users.find(d=>d.id===t.id)||{...t}},async refresh(){return n=await l("/api/live"),s.delete(cs()),n},warnings(){return n.warnings||[]},connectedCount(){return n.connectedCount||0},eventsOf(d){return n.events[d.id]||[]},presence(d,m){const g=n.presence[d.id]||{st:"unknown",loc:"unknown"},p=h.eventsOf(d).find(f=>m>=ke(f.s)&&m<ke(f.e));return{st:g.st,loc:g.loc,ev:p}},roomHints(){return n.hints||[]},roomBookings(d,m){const g=s.get(m);return g?g[d.id]||[]:(h.ensureDates([m]),[])},hasDates(d){return d.every(m=>s.has(m))},ensureDates(d){const m=d.filter(g=>!s.has(g)&&!r.has(g)).sort();m.length&&(m.forEach(g=>r.add(g)),l(`/api/rooms/schedule?start=${m[0]}&end=${m[m.length-1]}`).then(g=>{for(const p of m){const f={};for(const[_,b]of Object.entries(g.rooms||{}))f[_]=b[p]||[];s.set(p,f)}}).catch(g=>a(`Planning des salles indisponible : ${g.message}`)).finally(()=>{m.forEach(g=>r.delete(g)),o()}))},canCancel(d,m){return d.src==="etage"&&(d.org===m.id||m.role==="admin")},async book(d){try{return await u("/api/bookings","POST",{roomId:d.room,date:d.date,s:d.s,e:d.e,subject:d.t,people:d.people}),s.delete(d.date),d.date===cs()&&await h.refresh().catch(()=>{}),h.ensureDates([d.date]),{ok:!0}}catch(m){return{ok:!1,error:m.message}}},async cancel(d){try{return await u(`/api/bookings/${encodeURIComponent(d.id)}`,"DELETE"),s.delete(d.date),d.date===cs()&&await h.refresh().catch(()=>{}),h.ensureDates([d.date]),{ok:!0}}catch(m){return{ok:!1,error:m.message}}},saveLayout(){return clearTimeout(c),new Promise(d=>{c=setTimeout(async()=>{try{const{org:m,floor:g,rooms:p,items:f,settings:_,bg:b}=i;e=(await u("/api/layout","PUT",{layout:{org:m,floor:g,rooms:p,items:f,settings:_,bg:b},etag:e})).etag,d({ok:!0})}catch(m){a(`Plan non enregistré : ${m.message}`),d({ok:!1,error:m.message})}},700)})},async addUser(d){const{user:m}=await u("/api/users","POST",d);return i.users.push(m),m},async updateUser(d,m){const{user:g}=await u(`/api/users/${encodeURIComponent(d)}`,"PUT",m);return Object.assign(i.users.find(p=>p.id===d),g),g},async deleteUser(d){await u(`/api/users/${encodeURIComponent(d)}`,"DELETE"),i.users=i.users.filter(m=>m.id!==d);for(const m of i.items)m.user===d&&(m.user=null)},health(){return l("/api/health")}};return h}const hl=i=>String(i||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9@ ]+/g," ").replace(/\s+/g," ").trim();function Gm(i,e){const t=" "+hl(i)+" ";if(t.trim().length<4)return[];const n=[];for(const s of e){const r=hl(s.name);if(!r||r.indexOf(" ")<0)continue;const o=r.split(" "),a=o.slice(1).join(" ")+" "+o[0];(t.includes(" "+r+" ")||t.includes(" "+a+" "))&&n.push(s.id)}return n}function Vm(i){return i>=.8?"Sûr":i>=.55?"Probable":"Supposé"}function Hm(i){const{u:e,p:t,t:n}=i,s=C=>{const[x,T]=String(C).split(":").map(Number);return x*60+(T||0)},r=C=>n>=s(C.s)&&n<s(C.e),o=(C,x,T,D)=>(x=Math.max(0,Math.min(1,x)),{kind:C,room:D||null,conf:x,level:Vm(x),reasons:T.filter(Boolean)}),a=C=>i.roomName?i.roomName(C):C,c=C=>C.via?"dans l'agenda de "+C.via:"dans son agenda",l=i.events||[];if(t.st==="ooo"||t.loc==="away")return o("away",.95,["Absent du bureau (Teams ou réponse automatique Outlook)"]);const u=l.find(C=>r(C)&&C.k!=="lunch"&&C.k!=="ooo"),h=l.find(C=>r(C)&&C.k==="lunch"),d=(i.hints||[]).find(C=>r(C)&&(C.who||[]).includes(e.id));if(t.loc==="remote")return o("remote",.9,["Lieu de travail déclaré : télétravail",d?"Pourtant, "+a(d.room)+" est réservée à son nom ("+d.s+"–"+d.e+")":""]);if(t.st==="unknown"&&t.loc!=="office"&&!d&&!(u&&u.room))return o("unknown",.15,["Teams et Outlook non connectés, aucune présence déclarée"]);const m={meeting:"Teams : en réunion",busy:"Teams : occupé",available:"Teams : disponible",away:"Teams : absent",dnd:"Teams : ne pas déranger",offline:"Teams : hors ligne"}[t.st]||"",g=t.loc==="office",p=t.loc==="unknown",f=g?"Lieu de travail déclaré : au bureau":p?"Lieu de travail non déclaré":"",_=[],b=(C,x,T,D)=>_.push({kind:C,score:x,reasons:T,room:D}),v=new Map;if(u&&u.room&&v.set(u.room,{score:.5,why:["« "+u.t+" » ("+u.s+"–"+u.e+") "+c(u)+", lieu : "+a(u.room)]}),d){const C=v.get(d.room),x=a(d.room)+" réservée à son nom au même moment ("+d.s+"–"+d.e+")";C?(C.score+=.3,C.why.push(x)):v.set(d.room,{score:u?.42:.35,why:[u?"« "+u.t+" » ("+u.s+"–"+u.e+") "+c(u)+", sans salle indiquée":"",x]})}for(const[C,x]of v){let T=x.score+(g?.12:0)-(p?.2:0);const D=x.why.concat([f]);t.st==="meeting"||t.st==="busy"||t.st==="dnd"?(T+=.15,D.push(m)):t.st==="available"?(T-=.15,D.push(m+" : la réunion est peut-être finie")):t.st==="offline"&&(T-=.2,D.push("Teams : hors ligne (ordinateur fermé ?)")),b("room",T,D,C)}if(t.st==="offline"&&!_.length)return o("none",.85,["Teams : hors ligne"]);if(h||t.st==="away"&&n>=705&&n<=840){const C=[h?"Pause déjeuner dans son agenda ("+h.s+"–"+h.e+")":"Teams : absent à l'heure du déjeuner",f];i.breakRoom?b("break",.45+(g?.12:0)+(h?.1:0),C,i.breakRoom):b("out",.5,C)}if(u&&u.k==="meeting"&&!u.room&&!d&&b(i.desk?"desk":"flex",.5+(g?.12:0)-(p?.15:0)+(t.st==="meeting"?.1:0),["« "+u.t+" » ("+u.s+"–"+u.e+") sans salle : réunion en ligne",f,m]),t.st!=="offline"&&!(t.st==="unknown"&&!g)){let C=g?.7:.32;(t.st==="available"||t.st==="busy"||t.st==="dnd")&&(C+=.05),t.st==="meeting"&&!(u&&!u.room&&!d)&&(C-=.12),t.st==="away"&&(C-=.15),i.desk?b("desk",C,[m,f,"Poste attribué"]):b("flex",C-.15,[m,f,"Pas de poste attribué"])}if(!_.length)return o("unknown",.2,["Pas assez d'indices"]);_.sort((C,x)=>x.score-C.score);const M=_[0],w=_[1];let L=M.score;return w&&M.score-w.score<.1&&(L-=.08),o(M.kind,L,M.reasons,M.room)}const Bn=Bm();let qe=Um(),Kl=!1;const mt=cs(),De=i=>document.querySelector(i),oe=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Dt=(i,e=.5)=>Math.round(i/e)*e,Ql=i=>getComputedStyle(document.documentElement).getPropertyValue(i).trim(),Wm=i=>i.split(/\s+/).map(e=>e[0]).slice(0,2).join("").toUpperCase(),Da={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,e){try{localStorage.setItem(i,e)}catch{}},del(i){try{localStorage.removeItem(i)}catch{}}};let Z=null;const kn=()=>qe.saveLayout(Z),A={plan:null,me:null,tab:"live",t:635,sel:null,tool:"select",filter:"all",q:"",playing:!1,names:!0,menu:!1,peopleCollapsed:window.innerWidth<860};{const i=Rm();A.t=i>=480&&i<=1140?Math.round(i/5)*5:635}const fn={available:{label:"Disponible",v:"--ok"},busy:{label:"Occupé",v:"--busy"},meeting:{label:"En réunion",v:"--busy"},dnd:{label:"Ne pas déranger",v:"--busy"},away:{label:"Absent",v:"--away"},ooo:{label:"Absent du bureau",v:"--ooo"},offline:{label:"Hors ligne",v:"--off"},unknown:{label:"Non connecté",v:"--off"}},Lt=i=>Z.users.find(e=>e.id===i),Ke=i=>Z.rooms.find(e=>e.id===i),Xt=i=>Z.items.find(e=>e.id===i),$i=i=>Z.items.find(e=>e.type==="desk"&&e.user===i.id),pn=(i,e)=>{let t=null;for(const n of Z.rooms)i>=n.x&&i<=n.x+n.w&&e>=n.z&&e<=n.z+n.d&&(!t||n.w*n.d<t.w*t.d)&&(t=n);return t},mn=(i,e)=>qe.presence(i,e);function ec(i,e){const t=qi(i);if(t.kind==="room"&&Ke(t.room))return{kind:"room",room:t.room};if(t.kind==="break"&&Ke(t.room))return{kind:"break",room:t.room};if(t.kind==="desk"){const n=$i(i);if(n)return{kind:"desk",desk:n.id,room:(pn(n.x,n.z)||{}).id}}return t.kind==="flex"||t.kind==="desk"?{kind:"flex"}:null}function cr(i,e){const t=qi(i);if(t.kind==="away")return e.st==="ooo"?"Congés":"Absent";if(t.kind==="remote")return"Télétravail";if(t.kind==="none")return e.before&&i.in?"Hors ligne · arrivée habituelle "+i.in:"Hors ligne";if(t.kind==="unknown")return"Lieu incertain";if(t.kind==="out")return"En pause, sans doute hors du bureau";const n=t.level==="Sûr"?"":t.level==="Probable"?" (probable)":" (supposé)",s=ec(i);if(s&&s.room){const r=Ke(s.room);return"Au bureau · "+(r?r.name:"")+n}return"Au bureau"+n}const zi=i=>Z.settings.agenda==="subject"?i.t:i.k==="lunch"?"Absent":"Occupé",Ji=(i,e)=>qe.roomBookings(i,e||mt),_s=i=>qe.eventsOf(i),ur=(i,e)=>Ji(i).find(t=>e>=ke(t.s)&&e<ke(t.e));function tc(){if(qe.roomHints)return qe.roomHints();const i=[];for(const e of Z.rooms.filter(t=>t.type==="meeting"))for(const t of Ji(e,mt))i.push({room:e.id,s:t.s,e:t.e,who:[...new Set([...t.people||[],...Gm(t.t,Z.users)])]});return i}let fa=new Map;function nc(i,e){const t=mn(i,A.t),n=Z.rooms.find(r=>r.type==="break"||r.type==="kitchen"),s=Hm({u:i,p:t,t:A.t,events:_s(i),hints:e||tc(),desk:$i(i),breakRoom:n&&n.id,roomName:r=>(Ke(r)||{}).name||"une salle"});return Z.settings.guess==="probable"&&s.conf<.55&&["room","break","desk","flex"].includes(s.kind)&&(s.kind="unknown",s.reasons.push("Position trop incertaine : masquée (réglage « seulement les probables »)")),s}const qi=i=>fa.get(i.id)||nc(i),ic=new Set(["room","break","desk","flex"]);function qm(i,e){let t=e,n=!0;for(;n;){n=!1;for(const s of _s(i))s.k!=="lunch"&&t>=ke(s.s)&&t<ke(s.e)&&(t=ke(s.e),n=!0)}return t}const Wn=De("#stage"),on=new jl({antialias:!0,preserveDrawingBuffer:!0});on.setPixelRatio(Math.min(window.devicePixelRatio||1,2));on.shadowMap.enabled=!0;on.shadowMap.type=Tl;Wn.appendChild(on.domElement);const _i=new vm,Qt=new Ta(-10,10,10,-10,-200,400),jm=new Em(16777215,10134428,.75);_i.add(jm);const qn=new Lm(16777215,.62);qn.castShadow=!0;qn.shadow.mapSize.set(2048,2048);Object.assign(qn.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:1,far:150});qn.shadow.bias=-8e-4;_i.add(qn);_i.add(qn.target);const rt=new an;_i.add(rt);const oi=new an;_i.add(oi);const ye={T:new R(18,0,11.5),az:Math.PI/4,el:.64,viewH:30,zoom:1,anim:null};let ee;function sc(){ee=window.getComputedStyle(document.documentElement).colorScheme.includes("dark")||Ql("--panel").toLowerCase()==="#1b211f"?{bg:1185557,ground:2830381,out:1711900,wall:4739148,wallTop:7042159,glass:8366294,floor:{open:4865843,meeting:3029831,office:4931121,break:3359535,reception:4602422,kitchen:4867126,wc:3424330,phone:3029831,storage:3947061,corridor:3814702},wood:10254930,dark:1382425,chair:5923434,plant:6267738,pot:11563342,sofa:5925560,table:3110289,counter:14275787,skin:14922895,sel:8231935,porcelain:13225163,metal:9081238,locker:5202547}:{bg:15133414,ground:16052457,out:14475996,wall:16777215,wallTop:13219740,glass:10273766,floor:{open:15127475,meeting:14082796,office:14797222,break:13886924,reception:15391698,kitchen:15590351,wc:14477034,phone:14082796,storage:14539475,corridor:15722975},wood:13608563,dark:2764595,chair:4080973,plant:6200154,pot:12745050,sofa:5793448,table:3108494,counter:16777215,skin:15251860,sel:2772934,porcelain:16250869,metal:12107458,locker:8229800},_i.background=new Be(ee.bg)}const Qs=new Map;function vs(i,e){const t=i+JSON.stringify(e||{});return Qs.has(t)||Qs.set(t,new Ks(Object.assign({color:i},e||{}))),Qs.get(t)}function he(i,e,t,n,s,r,o,a,c){const l=new Je(new xi(e,t,n),vs(s,c));return l.position.set(r,o,a),l.castShadow=!(c&&c.transparent),l.receiveShadow=!0,i.add(l),l}function Kt(i,e,t,n,s,r,o,a,c){const l=new Je(new lr(e,t,n,c||16),vs(s));return l.position.set(r,o,a),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}function Zs(i,e,t,n){const s=new an;return he(s,.48,.07,.48,ee.chair,0,.46,0),he(s,.48,.46,.06,ee.chair,0,.72,.22),Kt(s,.04,.04,.4,ee.dark,0,.24,0,8),Kt(s,.24,.24,.04,ee.dark,0,.03,0,10),s.position.set(e,0,t),s.rotation.y=n,i.add(s),s}const fl={desk(i){return he(i,1.4,.05,.7,ee.wood,0,.74,0),he(i,.05,.72,.66,ee.wood,-.67,.36,0),he(i,.05,.72,.66,ee.wood,.67,.36,0),he(i,1.3,.4,.03,ee.wood,0,.5,-.32),he(i,.6,.36,.04,ee.dark,0,1,-.2),he(i,.06,.2,.06,ee.dark,0,.84,-.22),he(i,.42,.02,.14,ee.dark,0,.775,.08),Zs(i,0,.72,0),[{x:0,z:.72,ry:0}]},meeting(i,e){const t=e.seats||6,n=Math.ceil(t/2),s=Math.max(1.8,n*.85),r=1.15;he(i,s,.06,r,ee.wood,0,.74,0),he(i,.12,.7,.5,ee.dark,-s/2+.4,.36,0),he(i,.12,.7,.5,ee.dark,s/2-.4,.36,0),he(i,.4,.03,.25,ee.dark,0,.785,0);const o=[];for(let a=0;a<n;a++){const c=-s/2+s/n*(a+.5);o.push({x:c,z:-r/2-.35,ry:Math.PI}),Zs(i,c,-r/2-.35,Math.PI),o.length<t&&(o.push({x:c,z:r/2+.35,ry:0}),Zs(i,c,r/2+.35,0))}return o},round(i){Kt(i,.55,.55,.05,ee.wood,0,.74,0,24),Kt(i,.05,.05,.7,ee.dark,0,.37,0,8),Kt(i,.3,.3,.03,ee.dark,0,.02,0,16);const e=[];for(let t=0;t<3;t++){const n=t*Math.PI*2/3+.4,s=Math.sin(n)*.9,r=Math.cos(n)*.9;Zs(i,s,r,n),e.push({x:s,z:r,ry:n})}return e},sofa(i){return he(i,2,.38,.85,ee.sofa,0,.22,0),he(i,2,.5,.2,ee.sofa,0,.55,-.33),he(i,.18,.5,.85,ee.sofa,-.91,.33,0),he(i,.18,.5,.85,ee.sofa,.91,.33,0),[{x:-.45,z:.05,ry:0},{x:.45,z:.05,ry:0}]},plant(i){Kt(i,.2,.15,.4,ee.pot,0,.2,0,12);const e=new Je(new nr(.42,0),vs(ee.plant));e.position.set(0,.82,0),e.castShadow=!0,i.add(e);const t=new Je(new nr(.28,0),vs(ee.plant));return t.position.set(.1,1.2,.05),t.castShadow=!0,i.add(t),[]},pingpong(i){he(i,2.74,.05,1.52,ee.table,0,.76,0),he(i,2.74,.005,.03,16777215,0,.79,0),he(i,.02,.15,1.6,15658734,0,.86,0);for(const e of[-1,1])for(const t of[-1,1])he(i,.06,.74,.06,ee.dark,e*1.2,.37,t*.65);return[]},wc(i){return he(i,.42,.36,.2,ee.porcelain,0,.5,-.2),Kt(i,.19,.15,.4,ee.porcelain,0,.2,.08,16),he(i,.4,.03,.45,ee.porcelain,0,.41,.08),[]},sink(i){return he(i,.56,.1,.42,ee.porcelain,0,.82,0),Kt(i,.07,.09,.78,ee.porcelain,0,.39,-.05,10),he(i,.5,.62,.03,ee.glass,0,1.32,-.2),he(i,.04,.14,.04,ee.metal,0,.94,-.15),[]},shower(i){return he(i,.9,.06,.9,ee.porcelain,0,.03,0),he(i,.9,1.6,.03,ee.glass,0,.83,.44,{transparent:!0,opacity:.35}),he(i,.03,1.6,.9,ee.glass,.44,.83,0,{transparent:!0,opacity:.35}),Kt(i,.08,.08,.03,ee.metal,-.2,1.75,-.3,12),[]},kitchen(i){return he(i,2.4,.88,.62,ee.counter,0,.44,0),he(i,2.44,.05,.66,ee.wood,0,.905,0),he(i,.5,.02,.38,ee.metal,-.55,.935,0),he(i,.55,.02,.45,ee.dark,.55,.935,0),he(i,2.4,.6,.34,ee.counter,0,1.75,-.14),[]},fridge(i){return he(i,.66,1.8,.64,ee.porcelain,0,.9,0),he(i,.03,.5,.03,ee.metal,.25,1.15,.33),he(i,.67,.01,.65,ee.metal,0,1.25,0),[]},printer(i){return he(i,.6,.5,.5,ee.counter,0,.25,0),he(i,.58,.42,.48,ee.metal,0,.71,0),he(i,.4,.02,.25,ee.dark,0,.93,.05),[]},lockers(i){he(i,1.8,1.8,.45,ee.locker,0,.9,0);for(const e of[-.3,.3])he(i,.015,1.76,.46,ee.dark,e,.9,0);return he(i,1.8,.015,.46,ee.dark,0,.9,0),[]},whiteboard(i){return he(i,1.8,1.05,.04,ee.porcelain,0,1.35,0),he(i,1.86,.04,.08,ee.metal,0,.82,.02),[]},tv(i){return he(i,1.3,.75,.06,ee.dark,0,1.4,0),he(i,.3,.05,.12,ee.dark,0,1,0),[]},booth(i){return he(i,1.1,.04,.4,ee.wood,0,1.05,-.2),Kt(i,.18,.18,.05,ee.chair,0,.65,.25,14),Kt(i,.03,.03,.62,ee.dark,0,.32,.25,6),[{x:0,z:.25,ry:0}]},wall(i,e){const t=e.x2-e.x,n=e.z2-e.z,s=Math.max(.1,Math.hypot(t,n)),r=e.glass?1.35:1.05,o=Math.atan2(-n,t),a=e.glass?{transparent:!0,opacity:.32}:null,c=he(i,s,r,.1,e.glass?ee.glass:ee.wall,t/2,r/2,n/2,a);c.rotation.y=o;const l=he(i,s+.02,.04,.12,e.glass?ee.dark:ee.wallTop,t/2,r+.02,n/2);return l.rotation.y=o,[]},counter(i){return he(i,3,.88,.7,ee.counter,0,.44,0),he(i,3.04,.05,.74,ee.wood,0,.905,0),he(i,.35,.42,.32,ee.dark,-.9,1.14,-.1),he(i,.3,.25,.3,11747135,.7,1.05,-.1),[]}},dr={desk:"Bureau",meeting:"Table de réunion",round:"Table ronde",sofa:"Canapé",plant:"Plante",pingpong:"Ping-pong",counter:"Comptoir café",wc:"WC",sink:"Lavabo",shower:"Douche",kitchen:"Kitchenette",fridge:"Réfrigérateur",printer:"Imprimante",lockers:"Casiers",whiteboard:"Tableau blanc",tv:"Écran",booth:"Tablette d'appel",wall:"Cloison"},Xm=["desk","meeting","round","sofa","plant","lockers","printer","whiteboard","tv","kitchen","counter","fridge","wc","sink","shower","pingpong","booth"],bs={open:"Open space",meeting:"Salle de réunion",office:"Bureau fermé",break:"Salle de pause",kitchen:"Cuisine",wc:"Sanitaires",phone:"Bulle d'appel",reception:"Accueil",storage:"Local technique",corridor:"Couloir"},Cs={meeting:1,office:1,break:1,kitchen:1,wc:1,phone:1,storage:1};let us=[],ys=new Map,pa=new Map,ma=new Map,Fn=null,tn=null;function Qr(i){const e=ma.get(i.id)||[],t=i.rot*Math.PI/180,n=Math.cos(t),s=Math.sin(t);return e.map(r=>({x:i.x+r.x*n+r.z*s,z:i.z-r.x*s+r.z*n,ry:r.ry+t}))}function Ym(i){return i==="meeting"||i==="phone"?{h:1.35,glass:!0}:i==="break"||i==="kitchen"?{h:.85}:{h:1.05}}function Zm(i){return{n:{L:i.w,p:e=>[e,0],horiz:!0,inward:1},s:{L:i.w,p:e=>[e,i.d],horiz:!0,inward:-1},w:{L:i.d,p:e=>[0,e],horiz:!1,inward:1},e:{L:i.d,p:e=>[i.w,e],horiz:!1,inward:-1}}}const Fi=.9;function $m(i,e,t){return(i.doors||[]).filter(n=>n.side===e).map(n=>{const s=Math.min(t-Fi/2-.05,Math.max(Fi/2+.05,n.at*t));return[s-Fi/2,s+Fi/2]}).sort((n,s)=>n[0]-s[0])}function Jm(i,e){if(!Cs[e.type])return;const t=Ym(e.type),n=t.h,s=.1,r=t.glass?ee.glass:ee.wall,o=t.glass?{transparent:!0,opacity:.32}:null;for(const[a,c]of Object.entries(Zm(e))){const l=$m(e,a,c.L);let u=0;const h=[];for(const[d,m]of l)d>u&&h.push([u,d]),u=Math.max(u,m);u<c.L&&h.push([u,c.L]);for(const[d,m]of h){const g=m-d;if(g<.05)continue;const[p,f]=c.p((d+m)/2),_=c.horiz?g:s,b=c.horiz?s:g;he(i,_,n,b,r,p,n/2,f,o),he(i,_+.02,t.glass?.05:.04,b+.02,t.glass?ee.dark:ee.wallTop,p,n+(t.glass?0:.02),f)}for(const[d]of l){const[m,g]=c.p(d),p=new an;p.position.set(m,0,g),he(p,Fi-.06,n-.04,.04,ee.wood,(Fi-.06)/2,(n-.04)/2,0),p.rotation.y=c.horiz?-c.inward*1.2:-Math.PI/2+c.inward*1.2,i.add(p)}}}let pl=null,ml=null;function Gn(){for(const s of Z.rooms)Cs[s.type]&&!s.doors&&(s.doors=[{side:"s",at:.5}]);sc(),Qs.clear(),rt.clear(),us=[],ys.clear(),pa.clear(),ma.clear();const i=Z.floor.w,e=Z.floor.d,t=new Je(new gs(400,400),vs(ee.out));t.rotation.x=-Math.PI/2,t.position.set(i/2,-.06,e/2),t.receiveShadow=!0,rt.add(t);const n=he(rt,i,.1,e,ee.ground,i/2,-.05,e/2);if(n.userData={kind:"ground"},he(rt,i+.3,1.9,.3,ee.wall,i/2,.95,-.15),he(rt,.3,1.9,e,ee.wall,-.15,.95,e/2),he(rt,i+.3,.06,.32,ee.wallTop,i/2,1.92,-.15),he(rt,.32,.06,e,ee.wallTop,-.15,1.92,e/2),Z.bg&&Z.bg.src&&A.tab==="edit"){ml!==Z.bg.src&&(pl=new Tm().load(Z.bg.src),ml=Z.bg.src);const s=Z.bg.w*Z.bg.ar,r=new Je(new gs(Z.bg.w,s),new mi({map:pl,transparent:!0,opacity:Z.bg.op,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.set(Z.bg.x+Z.bg.w/2,.04,Z.bg.z+s/2),r.renderOrder=3,rt.add(r)}if(A.tab==="edit"){const s=new Pm(Math.max(i,e),Math.max(i,e),ee.wallTop,ee.wallTop);s.position.set(Math.max(i,e)/2,.011,Math.max(i,e)/2),s.material.opacity=.35,s.material.transparent=!0,rt.add(s)}for(const s of Z.rooms){const r=new an;r.position.set(s.x,0,s.z);const o=he(r,s.w,.03,s.d,ee.floor[s.type]||ee.floor.open,s.w/2,.015,s.d/2);o.userData={kind:"room",id:s.id},us.push(o),Jm(r,s),rt.add(r),pa.set(s.id,r)}for(const s of Z.items){const r=new an;r.position.set(s.x,0,s.z),r.rotation.y=s.rot*Math.PI/180;const o=(fl[s.type]||fl.plant)(r,s);ma.set(s.id,o),r.traverse(a=>{a.isMesh&&(a.userData={kind:"item",id:s.id})}),us.push(r),rt.add(r),ys.set(s.id,r)}Bt(),eg(),rn(!0)}function Bt(){if(Fn&&(rt.remove(Fn),Fn=null),!A.sel)return;let i;if(A.sel.kind==="room"){const t=Ke(A.sel.id);if(!t)return;i={x0:t.x,z0:t.z,x1:t.x+t.w,z1:t.z+t.d}}else{const t=A.sel.kind==="item"?A.sel.id:A.sel.kind==="person"?($i(Lt(A.sel.id))||{}).id:null,n=ys.get(t);if(!n)return;const s=new Xi().setFromObject(n);i={x0:s.min.x-.1,z0:s.min.z-.1,x1:s.max.x+.1,z1:s.max.z+.1}}const e=[[i.x0,i.z0],[i.x1,i.z0],[i.x1,i.z1],[i.x0,i.z1]].map(([t,n])=>new R(t,.06,n));Fn=new ym(new Rt().setFromPoints(e),new Aa({color:ee.sel})),rt.add(Fn)}const ii=new Map;function Km(i){const e=new an,t=new Be(i.color),n=new Je(new lr(.19,.25,.56,14),new Ks({color:t.getHex(),transparent:!0}));n.position.y=.76,n.castShadow=!0,e.add(n);const s=new Je(new Ui(.16,16,12),new Ks({color:ee.skin,transparent:!0}));s.position.y=1.2,s.castShadow=!0,e.add(s);const r=new Je(new Ui(.165,16,8,0,Math.PI*2,0,Math.PI/2.2),new Ks({color:new Be(i.color).multiplyScalar(.45).getHex(),transparent:!0}));r.position.y=1.22,e.add(r);const o=new Je(new Ui(.075,12,8),new mi({color:3055195}));o.position.y=1.55,e.add(o);const a=new Je(new La(.38,.48,28),new mi({color:3055195,transparent:!0,opacity:.85,side:Tn}));return a.rotation.x=-Math.PI/2,a.position.y=.035,e.add(a),e.traverse(c=>{c.isMesh&&(c.userData={kind:"person",id:i.id})}),oi.add(e),{g:e,dot:o,ring:a,body:n,head:s,hair:r,target:null,ry:0,on:!1}}const ea=new Map;function gl(i){return new Be(Ql(fn[i].v)||"#999").getHex()}let Cn=new Map;function Qm(){Cn=new Map,fa=new Map;const i=tc(),e=A.t,t=new Map,n=new Map;for(const s of Z.users){const r=mn(s,e),o=nc(s,i);fa.set(s.id,o);const a=ec(s);if(!a){const l=$i(s);if(l){const u=Qr(l)[0];u&&Cn.set(s.id,{x:u.x,z:u.z,ry:u.ry,onsite:!1,p:r,L:o})}continue}let c=null;if(a.kind==="desk"){const l=Xt(a.desk);c=Qr(l)[0]}else if(a.kind==="room"||a.kind==="break"){const l=Ke(a.room),h=Z.items.filter(g=>(g.type==="meeting"||g.type==="round"||g.type==="sofa"||g.type==="booth")&&pn(g.x,g.z)===l).flatMap(Qr),d=a.kind==="room"?t:n,m=d.get(l.id)||0;d.set(l.id,m+1),c=h[m]||{x:l.x+1+m%Math.max(1,l.w-2),z:l.z+l.d-1.2-Math.floor(m/Math.max(1,l.w-2)),ry:0}}if(!c){const l=Z.rooms.find(u=>u.type==="open")||{x:1,z:1};c={x:l.x+1,z:l.z+1,ry:0}}Cn.set(s.id,{x:c.x,z:c.z,ry:c.ry,onsite:!0,p:r,L:o})}}function rn(i){Qm();for(const[e,t]of ii)Lt(e)||(oi.remove(t.g),ii.delete(e));for(const[e,t]of ea)oi.remove(t),ea.delete(e);for(const e of Z.users){const t=Cn.get(e.id);let n=ii.get(e.id);if(i&&n&&(oi.remove(n.g),ii.delete(e.id),n=null),t&&t.onsite){n||(n=Km(e),ii.set(e.id,n),n.g.position.set(t.x,0,t.z),n.g.rotation.y=t.ry),n.target={x:t.x,z:t.z,ry:t.ry},n.on=!0,n.g.visible=!0;const s=gl(t.p.st);n.dot.material.color.setHex(s),n.ring.material.color.setHex(s);const r=t.L&&t.L.conf<.55;for(const a of[n.body,n.head,n.hair])a.material.opacity=r?.42:1;n.ring.material.opacity=r?.3:.85;const o=A.sel&&A.sel.kind==="person"&&A.sel.id===e.id;n.ring.scale.setScalar(o?1.35:1)}else if(n&&(n.on=!1,n.g.visible=!1),t){const s=new Je(new Ui(.11,12,8),new mi({color:gl(t.p.st),transparent:!0,opacity:t.L&&t.L.kind==="remote"?.95:.45}));s.position.set(t.x,.98,t.z),s.userData={kind:"person",id:e.id},oi.add(s),ea.set(e.id,s)}}Ms()}const hr=De("#labels");let ds=[],er=[];function eg(){ds.forEach(i=>i.el.remove()),ds=[];for(const i of Z.rooms){const e=document.createElement("div");e.className="rl",i.type==="meeting"&&(e.dataset.room=i.id),hr.appendChild(e),ds.push({el:e,r:i})}jn()}function jn(){for(const{el:i,r:e}of ds){let t="",n="rl";if(e.type==="meeting"){const s=ur(e,A.t);if(s)n+=" busy",t="Occupée · "+oe(zi(s))+" → "+s.e;else{n+=" free";const r=Ji(e).find(o=>ke(o.s)>A.t);t="Libre"+(r?" jusqu'à "+r.s:" toute la journée")}}else{const s=Z.items.filter(o=>o.type==="desk"&&pn(o.x,o.z)===e),r=[...Cn.values()].filter(o=>o.onsite&&pn(o.x,o.z)===e).length;t=s.length?r+" présent"+(r>1?"s":"")+" · "+s.length+" poste"+(s.length>1?"s":""):r?r+" présent"+(r>1?"s":""):bs[e.type]}e.type==="meeting"&&A.tab==="live"&&(n+=" click"),i.className=n,i.innerHTML="<b>"+oe(e.name)+'</b><span class="s">'+t+"</span>"+(e.type==="meeting"&&A.tab==="live"?'<span class="cta">Planning et réservation</span>':"")}}function Ms(){if(er.forEach(i=>i.el.remove()),er=[],!(!A.names||A.tab==="edit"))for(const i of Z.users){const e=Cn.get(i.id);if(!e)continue;const t=document.createElement("div");t.className="nl"+(e.onsite?e.L&&e.L.conf<.55?" guess":"":" remote"),t.innerHTML='<span class="dot" style="background:var('+fn[e.p.st].v+')"></span>'+oe(i.name.split(" ")[0])+(e.onsite?e.L&&e.L.conf<.55?' <span class="q">?</span>':"":" · "+({remote:"télétravail",away:e.p.st==="ooo"?"congés":"absent",none:"hors ligne",unknown:"lieu ?",out:"en pause"}[e.L&&e.L.kind]||"absent")),hr.appendChild(t),er.push({el:t,u:i})}}hr.addEventListener("click",i=>{const e=i.target.closest("[data-room]");e&&A.tab==="live"&&Ss(e.dataset.room)});const ta=new R;function xl(i,e,t){ta.set(i,e,t).project(Qt);const n=on.domElement;return{x:(ta.x+1)/2*n.clientWidth,y:(1-ta.y)/2*n.clientHeight}}function tg(){const i=on.domElement.clientWidth,e=on.domElement.clientHeight;for(const{el:t,r:n}of ds){const s=xl(n.x+n.w/2,n.type==="meeting"?1.9:1.6,n.z+.6);t.style.left=s.x+"px",t.style.top=s.y+"px",t.style.display=s.x<-80||s.x>i+80||s.y<0||s.y>e+40||ye.zoom<(A.fitZoom||1)*(i<860?1.3:.7)?"none":""}for(const{el:t,u:n}of er){const s=ii.get(n.id);let r,o,a;if(s&&s.on)r=s.g.position.x,a=s.g.position.z,o=1.75;else{const l=Cn.get(n.id);if(!l)continue;r=l.x,a=l.z,o=1.25}const c=xl(r,o,a);t.style.left=c.x+"px",t.style.top=c.y+"px",t.style.display=ye.zoom<(A.fitZoom||1)*1.45||c.x<-40||c.x>i+40||c.y<0||c.y>e?"none":""}}function ui(){const i=Wn.clientWidth||1,e=Wn.clientHeight||1,t=i/e,n=ye.viewH;Qt.left=-n*t/2,Qt.right=n*t/2,Qt.top=n/2,Qt.bottom=-n/2,Qt.zoom=ye.zoom;const s=80;Qt.position.set(ye.T.x+s*Math.cos(ye.el)*Math.sin(ye.az),s*Math.sin(ye.el),ye.T.z+s*Math.cos(ye.el)*Math.cos(ye.az)),Qt.lookAt(ye.T),Qt.updateProjectionMatrix(),qn.position.set(ye.T.x+18,34,ye.T.z+12),qn.target.position.copy(ye.T)}function Pa(i){const e=Z.floor.w,t=Z.floor.d,n=Wn.clientWidth||1,s=Wn.clientHeight||1,r=n>860?332:0,o=n>860&&A.sel?356:0,a=Math.max(200,n-r-o-24),c=(e+t)*.72,l=Math.max((e+t)*.44,c*s/a),u=ye.viewH/l;A.fitZoom=u;const h=l/s,d=(r-o)/2*h,m=new R(e/2-Math.cos(ye.az)*d,0,t/2+Math.sin(ye.az)*d);i?Ki(m,u):(ye.T.copy(m),ye.zoom=u)}function Ki(i,e,t){ye.anim={t0:performance.now(),dur:650,fT:ye.T.clone(),tT:i.clone(),fZ:ye.zoom,tZ:e??ye.zoom,fA:ye.az,tA:t??ye.az}}function ng(i){const e=ye.anim;if(!e)return;let t=Math.min(1,(i-e.t0)/e.dur);t=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,ye.T.lerpVectors(e.fT,e.tT,t),ye.zoom=e.fZ+(e.tZ-e.fZ)*t,ye.az=e.fA+(e.tA-e.fA)*t,t>=1&&(ye.anim=null)}function rc(){const i=Wn.clientWidth,e=Wn.clientHeight;on.setSize(i,e),ui()}new ResizeObserver(rc).observe(Wn);const Ra=new Dm,_l=new Fe,ig=new zn(new R(0,1,0),0);function ac(i){const e=on.domElement.getBoundingClientRect();_l.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),Ra.setFromCamera(_l,Qt)}function Nn(i){ac(i);const e=new R;return Ra.ray.intersectPlane(ig,e)?e:null}function Ia(i){ac(i);const e=A.tab==="edit"?us:[...oi.children,...us],t=Ra.intersectObjects(e,!0);for(const n of t){let s=n.object;for(;s&&!(s.userData&&s.userData.kind);)s=s.parent;if(s&&s.userData.kind&&s.userData.kind!=="ground")return s.userData}return null}let ve=null;const di=new Map,Ln=on.domElement;Ln.addEventListener("contextmenu",i=>i.preventDefault());Ln.addEventListener("pointerdown",i=>{if(Ln.setPointerCapture(i.pointerId),di.set(i.pointerId,{x:i.clientX,y:i.clientY}),di.size===2){const[n,s]=[...di.values()];ve={mode:"pinch",d0:Math.hypot(n.x-s.x,n.y-s.y),z0:ye.zoom};return}const e=Nn(i),t={x:i.clientX,y:i.clientY};if(ye.anim=null,i.button===2||i.shiftKey&&A.tab!=="edit"){ve={mode:"rotate",start:t,az0:ye.az};return}if(A.tab==="edit"){if(A.tool==="room"&&e){ve={mode:"room",start:t,a:{x:Dt(e.x,1),z:Dt(e.z,1)},b:null};return}if(A.tool==="wall"&&e){ve={mode:"wall",start:t,a:{x:Dt(e.x,.5),z:Dt(e.z,.5)},b:null};return}if(A.tool==="select"){const n=Ia(i);if(n&&(n.kind==="item"||n.kind==="room")&&e){const s=n.kind==="item"?Xt(n.id):Ke(n.id),r=n.kind==="room"?Z.items.filter(o=>o.x>=s.x&&o.x<=s.x+s.w&&o.z>=s.z&&o.z<=s.z+s.d).map(o=>({i:o,dx:o.x-s.x,dz:o.z-s.z,dx2:(o.x2||0)-s.x,dz2:(o.z2||0)-s.z})):[];ve={mode:"move",start:t,hit:n,obj:s,off:{x:s.x-e.x,z:s.z-e.z},inside:r,moved:!1};return}}}ve={mode:"pan",start:t,grab:e}});Ln.addEventListener("pointermove",i=>{var t,n;if(di.has(i.pointerId)&&di.set(i.pointerId,{x:i.clientX,y:i.clientY}),!ve){ug(i);return}const e=Math.hypot(i.clientX-((t=ve.start)==null?void 0:t.x),i.clientY-((n=ve.start)==null?void 0:n.y));if(ve.mode==="pinch"){const[s,r]=[...di.values()];s&&r&&(ye.zoom=Math.min(5,Math.max(.35,ve.z0*Math.hypot(s.x-r.x,s.y-r.y)/ve.d0)),ui());return}if(ve.mode==="rotate"){ye.az=ve.az0-(i.clientX-ve.start.x)*.008,ui();return}if(ve.mode==="pan"&&ve.grab){const s=Nn(i);s&&(ye.T.x+=ve.grab.x-s.x,ye.T.z+=ve.grab.z-s.z,ui());return}if(ve.mode==="room"){const s=Nn(i);if(!s)return;ve.b={x:Dt(s.x,1),z:Dt(s.z,1)},vl(ve.a,ve.b);return}if(ve.mode==="wall"){const s=Nn(i);if(!s)return;const r=Dt(s.x,.5),o=Dt(s.z,.5);ve.b=Math.abs(r-ve.a.x)>=Math.abs(o-ve.a.z)?{x:r,z:ve.a.z}:{x:ve.a.x,z:o},vl(ve.a,ve.b);return}if(ve.mode==="move"&&e>3){const s=Nn(i);if(!s)return;ve.moved=!0;const r=ve.hit.kind==="room"?1:.25,o=Dt(s.x+ve.off.x,r),a=Dt(s.z+ve.off.z,r);if(ve.hit.kind==="item")ve.obj.type==="wall"&&(ve.obj.x2+=o-ve.obj.x,ve.obj.z2+=a-ve.obj.z),ve.obj.x=o,ve.obj.z=a,ys.get(ve.obj.id).position.set(o,0,a);else{ve.obj.x=o,ve.obj.z=a,pa.get(ve.obj.id).position.set(o,0,a);for(const c of ve.inside)c.i.x=o+c.dx,c.i.z=a+c.dz,c.i.type==="wall"&&(c.i.x2=o+c.dx2,c.i.z2=a+c.dz2),ys.get(c.i.id).position.set(c.i.x,0,c.i.z)}Fn&&(rt.remove(Fn),Fn=null)}});function oc(i){if(di.delete(i.pointerId),!ve)return;const e=ve;ve=null;const t=e.start?Math.hypot(i.clientX-e.start.x,i.clientY-e.start.y)>4:!0;if(e.mode==="room"){if(tn&&(rt.remove(tn),tn=null),e.b){const n=Math.min(e.a.x,e.b.x),s=Math.min(e.a.z,e.b.z),r=Math.abs(e.a.x-e.b.x),o=Math.abs(e.a.z-e.b.z);if(r>=2&&o>=2){const a={id:An("r"),name:"Nouvelle salle",type:"meeting",x:n,z:s,w:r,d:o,capacity:6,mailbox:"",doors:[{side:"s",at:.5}]};Z.rooms.push(a),A.sel={kind:"room",id:a.id},A.tool="select",at()}}return}if(e.mode==="wall"){tn&&(rt.remove(tn),tn=null),e.b&&Math.hypot(e.b.x-e.a.x,e.b.z-e.a.z)>=.5&&(Z.items.push({id:An("w"),type:"wall",x:e.a.x,z:e.a.z,x2:e.b.x,z2:e.b.z,rot:0,glass:!1}),at());return}if(e.mode==="move"){e.moved?at():(A.sel={kind:e.hit.kind,id:e.hit.id},be(),Bt());return}e.mode==="pan"&&!t&&sg(i)}Ln.addEventListener("pointerup",oc);Ln.addEventListener("pointercancel",oc);Ln.addEventListener("wheel",i=>{i.preventDefault(),ye.anim=null,ye.zoom=Math.min(5,Math.max(.35,ye.zoom*Math.pow(1.0015,-i.deltaY))),ui()},{passive:!1});function sg(i){if(A.tab==="edit"&&A.tool.startsWith("place:")){const t=Nn(i);if(!t)return;const n=A.tool.slice(6),s={id:An("i"),type:n,x:Dt(t.x,.25),z:Dt(t.z,.25),rot:0};n==="meeting"&&(s.seats=6),n==="desk"&&(s.user=null),Z.items.push(s),A.sel={kind:"item",id:s.id},at();return}if(A.tab==="edit"&&A.tool.startsWith("tpl:")){const t=Nn(i);t&&rg(A.tool.slice(4),t);return}if(A.tab==="edit"&&A.tool==="door"){const t=Nn(i);t&&og(t);return}const e=Ia(i);if(!e){A.sel=null,be(),Bt();return}if(A.tab==="edit"){A.sel={kind:e.kind==="person"?"item":e.kind,id:e.id},be(),Bt();return}if(e.kind==="person")ga(e.id,!1);else if(e.kind==="item"){const t=Xt(e.id);if(t.type==="desk"&&t.user)ga(t.user,!1);else if(t.type==="desk")A.sel={kind:"item",id:t.id};else{const n=pn(t.x,t.z);if(n&&n.type==="meeting"){Ss(n.id);return}A.sel=n?{kind:"room",id:n.id}:null}be(),Bt()}else if(e.kind==="room"){const t=Ke(e.id);if(t.type==="meeting"){Ss(t.id);return}A.sel={kind:"room",id:e.id},be(),Bt()}}const za={meet4:{label:"Salle de réunion · 4 pl.",icon:"meeting",room:{type:"meeting",name:"Salle de réunion",w:5,d:4,capacity:4},items:[["meeting",2.5,2,0,{seats:4}],["tv",2.5,.12,0],["plant",4.45,.55,0]]},meet8:{label:"Salle de réunion · 8 pl.",icon:"meeting",room:{type:"meeting",name:"Grande salle",w:8,d:6,capacity:8},items:[["meeting",4,3,0,{seats:8}],["tv",4,.12,0],["whiteboard",.12,3,90],["plant",7.45,.55,0]]},open8:{label:"Open space · 8 postes",icon:"desk",room:{type:"open",name:"Open space",w:12,d:8},items:[["desk",3.3,3,180],["desk",4.8,3,180],["desk",3.3,3.7,0],["desk",4.8,3.7,0],["desk",7.8,3,180],["desk",9.3,3,180],["desk",7.8,3.7,0],["desk",9.3,3.7,0],["printer",11.3,6.8,270],["lockers",6.3,7.6,180],["plant",.6,.6,0],["plant",11.4,.6,0]]},office:{label:"Bureau individuel",icon:"desk",room:{type:"office",name:"Bureau",w:4,d:4},items:[["desk",2,1.3,0],["plant",3.45,.55,0],["lockers",.35,2.5,90]]},wc:{label:"Sanitaires",icon:"wc",room:{type:"wc",name:"Sanitaires",w:5,d:4},items:[["wc",.85,.4,0],["wc",2.5,.4,0],["wc",4.15,.4,0],["wall",1.67,0,0,{x2:1.67,z2:1.6}],["wall",3.33,0,0,{x2:3.33,z2:1.6}],["sink",.9,3.6,180],["sink",4.1,3.6,180]]},kitchen:{label:"Cuisine",icon:"kitchen",room:{type:"kitchen",name:"Cuisine",w:5,d:4},items:[["kitchen",1.9,.35,0],["fridge",4.3,.4,0],["round",2.5,2.4,0]]},break:{label:"Salle de pause",icon:"sofa",room:{type:"break",name:"Salle de pause",w:8,d:6},items:[["sofa",1.6,5.45,180],["round",2.6,2.3,0],["round",5.4,2.3,0],["counter",6.3,5.5,180],["tv",4,.12,0],["plant",7.45,.55,0]]},phone:{label:"Bulle d'appel",icon:"booth",room:{type:"phone",name:"Bulle",w:2,d:2},items:[["booth",1,.6,0]]}};function rg(i,e){const t=za[i];if(!t)return;const n=Dt(e.x-t.room.w/2,1),s=Dt(e.z-t.room.d/2,1),r=Z.rooms.filter(a=>a.name===t.room.name||a.name.startsWith(t.room.name+" ")).length,o={id:An("r"),...t.room,name:t.room.name+(r?" "+(r+1):""),x:n,z:s};Cs[o.type]&&(o.doors=[{side:"s",at:.5}]),o.type==="meeting"&&(o.mailbox=""),Z.rooms.push(o);for(const[a,c,l,u,h]of t.items){const d={id:An("i"),type:a,x:n+c,z:s+l,rot:u};a==="wall"?(d.x2=n+h.x2,d.z2=s+h.z2,d.glass=!1):h&&Object.assign(d,h),a==="desk"&&(d.user=null),Z.items.push(d)}A.sel={kind:"room",id:o.id},at()}function ag(i){let e=null;for(const t of Z.rooms)if(Cs[t.type])for(const[n,s,r,o]of[["n",i.x-t.x,Math.abs(i.z-t.z),t.w],["s",i.x-t.x,Math.abs(i.z-(t.z+t.d)),t.w],["w",i.z-t.z,Math.abs(i.x-t.x),t.d],["e",i.z-t.z,Math.abs(i.x-(t.x+t.w)),t.d]])s<.3||s>o-.3||r>.7||(!e||r<e.dist)&&(e={r:t,side:n,along:s,L:o,dist:r});return e}function og(i){const e=ag(i);if(!e){Mt("Cliquez sur le mur d'une pièce fermée (salle, bureau, sanitaires…).");return}const t=e.r;t.doors=t.doors||[];const n=t.doors.findIndex(s=>s.side===e.side&&Math.abs(s.at*e.L-e.along)<.8);n>=0?(t.doors.splice(n,1),Mt("Porte retirée : "+t.name+".")):(t.doors.push({side:e.side,at:Math.round(e.along/e.L*100)/100}),Mt("Porte ajoutée : "+t.name+".")),at()}function lc(){if(A.sel){if(A.sel.kind==="room"){const i=Ke(A.sel.id);if(!i)return;const e=i.w+1,t={...JSON.parse(JSON.stringify(i)),id:An("r"),x:i.x+e,name:i.name+" (copie)"};t.mailbox&&(t.mailbox=""),delete t.outlookName,Z.rooms.push(t);for(const n of Z.items.filter(s=>s.x>=i.x&&s.x<=i.x+i.w&&s.z>=i.z&&s.z<=i.z+i.d)){const s={...n,id:An("i"),x:n.x+e};s.type==="wall"&&(s.x2=n.x2+e),s.type==="desk"&&(s.user=null),Z.items.push(s)}A.sel={kind:"room",id:t.id}}else if(A.sel.kind==="item"){const i=Xt(A.sel.id);if(!i)return;const e={...i,id:An("i"),x:i.x+1};e.type==="wall"&&(e.x2=i.x2+1),e.type==="desk"&&(e.user=null),Z.items.push(e),A.sel={kind:"item",id:e.id}}at()}}function lg(i,e){if(A.sel){if(A.sel.kind==="item"){const t=Xt(A.sel.id);if(!t)return;t.x+=i,t.z+=e,t.type==="wall"&&(t.x2+=i,t.z2+=e)}else if(A.sel.kind==="room"){const t=Ke(A.sel.id);if(!t)return;for(const n of Z.items.filter(s=>s.x>=t.x&&s.x<=t.x+t.w&&s.z>=t.z&&s.z<=t.z+t.d))n.x+=i,n.z+=e,n.type==="wall"&&(n.x2+=i,n.z2+=e);t.x+=i,t.z+=e}at()}}function cg(i){const e=new FileReader;e.onload=()=>{const t=new Image;t.onload=()=>{const n=Math.min(1,1800/Math.max(t.width,t.height)),s=document.createElement("canvas");s.width=Math.round(t.width*n),s.height=Math.round(t.height*n);const r=s.getContext("2d");r.fillStyle="#fff",r.fillRect(0,0,s.width,s.height),r.drawImage(t,0,0,s.width,s.height),Z.bg={src:s.toDataURL("image/jpeg",.82),ar:t.height/t.width,x:0,z:0,w:Z.floor.w,op:.6},at(),Mt("Plan importé. Indiquez sa largeur réelle pour le mettre à l'échelle, puis décalquez les pièces.")},t.onerror=()=>Mt("Image illisible. Utilisez un fichier JPG ou PNG."),t.src=e.result},e.readAsDataURL(i)}function Mt(i){const e=De("#toast");e&&(e.textContent=i,e.hidden=!1,clearTimeout(Mt.tm),Mt.tm=setTimeout(()=>{e.hidden=!0},5e3))}function vl(i,e){tn&&rt.remove(tn);const t=Math.min(i.x,e.x),n=Math.min(i.z,e.z),s=Math.max(.1,Math.abs(i.x-e.x)),r=Math.max(.1,Math.abs(i.z-e.z));tn=new Je(new xi(s,.05,r),new mi({color:ee.sel,transparent:!0,opacity:.35})),tn.position.set(t+s/2,.04,n+r/2),rt.add(tn)}const si=De("#tip");let bl=0;function ug(i){const e=performance.now();if(e-bl<40)return;bl=e;const t=Ia(i);let n="";if(t){if(t.kind==="person"){const r=Lt(t.id),o=mn(r,A.t);n=r.name+" · "+fn[o.st].label+" · "+cr(r,o)}else if(t.kind==="item"){const r=Xt(t.id);if(r.type==="desk"){const o=r.user&&Lt(r.user);n=o?"Bureau de "+o.name:"Bureau libre (flex)"}else n=dr[r.type]||""}else if(t.kind==="room"){const r=Ke(t.id);n=r.name+" · "+(r.type==="meeting"&&A.tab==="live"?"cliquer pour ouvrir le planning":bs[r.type])}}if(Ln.style.cursor=t?"pointer":A.tab==="edit"&&A.tool!=="select"?"crosshair":"grab",!n){si.hidden=!0;return}const s=De("#main").getBoundingClientRect();si.hidden=!1,si.textContent=n,si.style.left=i.clientX-s.left+"px",si.style.top=i.clientY-s.top+"px"}Ln.addEventListener("pointerleave",()=>{si.hidden=!0});document.addEventListener("keydown",i=>{if(!i.target.matches("input,select,textarea")){if(A.plan&&i.key==="Escape"){A.plan.sel||A.plan.view?(A.plan.sel=null,A.plan.view=null):A.plan=null,be();return}if(A.tab==="edit"){if(i.key==="Escape"&&(A.tool="select",A.sel=null,be(),Bt()),(i.key==="Delete"||i.key==="Backspace")&&A.sel&&(cc(),i.preventDefault()),(i.key==="r"||i.key==="R")&&A.sel&&A.sel.kind==="item"&&uc(),(i.key==="d"||i.key==="D")&&A.sel){lc();return}const e={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]};if(e[i.key]&&A.sel){const n=i.shiftKey?1:.5;lg(e[i.key][0]*n,e[i.key][1]*n),i.preventDefault();return}const t=tr.find(n=>n.key&&n.key.toLowerCase()===i.key.toLowerCase());t&&!(i.key==="r"||i.key==="R")&&(A.tool=t.id,be())}else i.key==="Escape"&&(A.sel=null,be(),Bt())}});function ga(i,e){if(A.sel={kind:"person",id:i},be(),Bt(),rn(!1),e){const t=Cn.get(i);t&&Ki(new R(t.x,0,t.z),Math.max(ye.zoom,2.2))}}function cc(){A.sel&&(A.sel.kind==="item"&&(Z.items=Z.items.filter(i=>i.id!==A.sel.id)),A.sel.kind==="room"&&(Z.rooms=Z.rooms.filter(i=>i.id!==A.sel.id)),A.sel=null,at())}function uc(){const i=Xt(A.sel.id);if(i){if(i.type==="wall"){const e=i.x2-i.x,t=i.z2-i.z;i.x2=i.x+t,i.z2=i.z-e}else i.rot=(i.rot+90)%360;at()}}function at(){kn(),Gn(),be()}const dg={select:'<path d="M4 3l11 6-5 1.5L8 16z" fill="currentColor"/>',room:'<rect x="3" y="4" width="13" height="11" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="2.5 2"/>',desk:'<rect x="3" y="7" width="13" height="3" rx=".6" fill="currentColor"/><path d="M5 10v5M14 10v5" stroke="currentColor" stroke-width="1.6"/><rect x="8" y="3.5" width="4" height="3" rx=".4" fill="currentColor"/>',meeting:'<rect x="4" y="7" width="11" height="5" rx="1" fill="currentColor"/><circle cx="6" cy="4.5" r="1.3" fill="currentColor"/><circle cx="13" cy="4.5" r="1.3" fill="currentColor"/><circle cx="6" cy="14.5" r="1.3" fill="currentColor"/><circle cx="13" cy="14.5" r="1.3" fill="currentColor"/>',round:'<circle cx="9.5" cy="9.5" r="4" fill="currentColor"/><circle cx="9.5" cy="3" r="1.3" fill="currentColor"/><circle cx="3.5" cy="13" r="1.3" fill="currentColor"/><circle cx="15.5" cy="13" r="1.3" fill="currentColor"/>',sofa:'<path d="M3 9h13v5H3zM4 6h11v3H4z" fill="currentColor"/>',plant:'<path d="M7 12h5l-1 4H8z" fill="currentColor"/><circle cx="9.5" cy="7" r="4" fill="currentColor"/>',pingpong:'<rect x="2.5" y="6" width="14" height="7" rx=".6" fill="currentColor"/><path d="M9.5 5v9" stroke="var(--panel)" stroke-width="1.2"/>',counter:'<rect x="2.5" y="8" width="14" height="7" fill="currentColor"/><rect x="4" y="4" width="3" height="4" fill="currentColor"/>',wall:'<path d="M3 15L16 4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',door:'<path d="M4 16V3h7v13" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M11 3l4 2v11l-4-1z" fill="currentColor"/>',wc:'<rect x="6" y="2.5" width="7" height="4" rx="1" fill="currentColor"/><ellipse cx="9.5" cy="11.5" rx="4" ry="4.5" fill="currentColor"/>',sink:'<rect x="3" y="7" width="13" height="5" rx="2.5" fill="currentColor"/><path d="M9.5 3v4" stroke="currentColor" stroke-width="1.6"/>',shower:'<circle cx="7" cy="5" r="2.5" fill="currentColor"/><path d="M9 7l5 5M7 9l1 2M10 7l2 1M5 10l1 3M12 10l2 3" stroke="currentColor" stroke-width="1.2"/>',kitchen:'<rect x="2.5" y="8" width="14" height="8" fill="currentColor"/><circle cx="12" cy="5" r="1.6" fill="currentColor"/><circle cx="6" cy="5" r="1.6" fill="currentColor"/>',fridge:'<rect x="5" y="2" width="9" height="15" rx="1" fill="currentColor"/><path d="M5 8h9" stroke="var(--panel)" stroke-width="1"/>',printer:'<rect x="3" y="7" width="13" height="6" rx="1" fill="currentColor"/><rect x="6" y="3" width="7" height="4" fill="currentColor"/><rect x="6" y="12" width="7" height="4" fill="none" stroke="currentColor" stroke-width="1.2"/>',lockers:'<rect x="2.5" y="3" width="14" height="13" fill="currentColor"/><path d="M7 3v13M12 3v13" stroke="var(--panel)" stroke-width="1"/>',whiteboard:'<rect x="2" y="3" width="15" height="10" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M5 16l2-3M14 16l-2-3" stroke="currentColor" stroke-width="1.4"/>',tv:'<rect x="2" y="3.5" width="15" height="9.5" rx="1" fill="currentColor"/><path d="M7 16h5" stroke="currentColor" stroke-width="1.6"/>',booth:'<rect x="4" y="2.5" width="11" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="9.5" cy="10" r="2" fill="currentColor"/>',image:'<rect x="2.5" y="3.5" width="14" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M4 14l4-5 3 3 2-2 3 4" fill="none" stroke="currentColor" stroke-width="1.4"/>'},xa=(i,e)=>'<svg viewBox="0 0 19 19" aria-hidden="true">'+(dg[i]||"")+"</svg>",tr=[{id:"select",label:"Sélectionner / déplacer",icon:"select",key:"V"},{id:"room",label:"Dessiner une pièce",icon:"room",key:"P"},{id:"wall",label:"Cloison",icon:"wall",key:"C"},{id:"door",label:"Porte",icon:"door",key:"O"},...Object.entries(za).map(([i,e])=>({id:"tpl:"+i,label:e.label,icon:e.icon,group:"tpl"})),...Xm.map(i=>({id:"place:"+i,label:dr[i],icon:i,key:{desk:"B",meeting:"T"}[i],group:"item"}))],yt={chat:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.5 3.5h11v7h-6l-3 2.5v-2.5h-2z"/></svg>',cal:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2.5" y="3.5" width="11" height="10" rx="1"/><path d="M2.5 6.5h11M5.5 2v3M10.5 2v3"/></svg>',x:'<svg viewBox="0 0 16 16" stroke="currentColor" stroke-width="1.6"><path d="M4 4l8 8M12 4l-8 8"/></svg>',rot:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 7a5 5 0 1 0-1.5 4.5"/><path d="M13 3v4H9"/></svg>',del:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.7 9h5.6l.7-9"/></svg>'};function Xn(i,e,t){return'<span class="av'+(t?" lg":"")+'" style="background:'+oe(i.color)+'">'+oe(Wm(i.name))+(e?'<span class="b" style="background:var('+fn[e].v+')"></span>':"")+"</span>"}const _a=()=>A.me&&A.me.role==="admin";function ws(){De("#orgname").textContent=Z.org;const i=De("#demoPill");i.hidden=Kl,i.textContent=Bn.available?"Démo · se connecter":"Démo",i.disabled=!Bn.available;const e=_a()?[["live","Plan vivant"],["edit","Modéliser"],["people","Personnes"],["cx","Connexions"]]:[["live","Plan vivant"]];De("#tabs").innerHTML=e.map(([s,r])=>'<button data-tab="'+s+'" aria-pressed="'+(A.tab===s)+'">'+r+"</button>").join("");const t=A.me,n=mn(t,A.t);De("#me").innerHTML='<button class="me" style="border:0;padding:0;background:none;display:flex;gap:8px;align-items:center" id="meBtn" aria-haspopup="true" aria-expanded="'+A.menu+'">'+Xn(t,n.st)+'<span style="display:grid;text-align:left;line-height:1.15"><span style="font-weight:600;font-size:13px">'+oe(t.name.split(" ")[0])+'</span><span class="role">'+(_a()?"Admin":"Utilisateur")+"</span></span></button>"+(A.menu?'<div class="menu" role="menu"><button data-act="names">'+(A.names?"Masquer":"Afficher")+" les prénoms sur le plan</button>"+((Bn.available?'<button data-act="login">Se connecter avec Microsoft</button>':"")+`<button data-act="switch">Changer de compte de démo</button><hr><button data-act="reset">Réinitialiser les données d'exemple</button>`)+"</div>":""),De("#clockT").textContent=ot(A.t),De("#clockR").value=A.t}function hg(){const i={all:0,office:0,remote:0,meeting:0,absent:0};for(const e of Z.users){const t=mn(e,A.t),n=qi(e);i.all++,ic.has(n.kind)&&i.office++,n.kind==="remote"&&i.remote++,t.st==="meeting"&&i.meeting++,(t.st==="offline"||t.st==="ooo")&&i.absent++}return i}function fg(){const i=A.q.trim().toLowerCase();return Z.users.filter(e=>{const t=mn(e,A.t);return i&&!(e.name+" "+e.team+" "+e.title).toLowerCase().includes(i)?!1:A.filter==="office"?ic.has(qi(e).kind):A.filter==="remote"?qi(e).kind==="remote":A.filter==="meeting"?t.st==="meeting":A.filter==="absent"?t.st==="offline"||t.st==="ooo":!0})}function pg(){const i=hg(),e=fg(),t=[...new Set(e.map(a=>a.team))],n=[["all","Tous",i.all],["office","Au bureau",i.office],["remote","Télétravail",i.remote],["meeting","En réunion",i.meeting],["absent","Absents",i.absent]],s=Z.rooms.filter(a=>a.type==="meeting"),r=s.filter(a=>ur(a,A.t)).length;let o='<section class="panel" id="people" data-collapsed="'+A.peopleCollapsed+'"><div class="ph"><div style="display:flex;align-items:center;gap:8px"><h2>Qui est là ?</h2><button class="btn" style="margin-left:auto;padding:5px 10px;font-size:12.5px" data-open-plan="all" title="'+r+"/"+s.length+" salles occupées à "+ot(A.t)+'">'+yt.cal+'Réserver une salle</button><button class="iconbtn mobile-only" id="pcol" aria-label="Afficher la liste">'+(A.peopleCollapsed?"+":"–")+'</button></div><input class="search" id="q" type="search" placeholder="Chercher une personne, une équipe…" value="'+oe(A.q)+'" aria-label="Chercher">'+(qe.warnings().length?qe.warnings().map(a=>'<div class="warn mid">'+oe(a)+"</div>").join(""):"")+'<div class="chips">'+n.map(([a,c,l])=>'<button class="chip" data-f="'+a+'" aria-pressed="'+(A.filter===a)+'">'+c+' <span class="n">'+l+"</span></button>").join("")+'</div></div><div class="plist">';for(const a of t){o+='<div class="group-h">'+oe(a)+"</div>";for(const c of e.filter(l=>l.team===a)){const l=mn(c,A.t);o+='<button class="prow" data-person="'+c.id+'" aria-current="'+(A.sel&&A.sel.kind==="person"&&A.sel.id===c.id)+'">'+Xn(c,l.st)+'<span class="txt"><span class="nm" style="display:block">'+oe(c.name)+'</span><span class="sub" style="display:block">'+oe(fn[l.st].label)+" · "+oe(cr(c,l).replace("Au bureau · ",""))+"</span></span></button>"}}return e.length||(o+='<p class="note" style="padding:12px">Personne ne correspond à ce filtre à '+ot(A.t)+".</p>"),o+="</div></section>",o+='<div class="legend">'+["available","meeting","away","ooo","offline"].map(a=>'<span><i class="dot" style="background:var('+fn[a].v+')"></i>'+fn[a].label+"</span>").join("")+"<span>· pastille = hors du bureau · translucide = position supposée</span></div>",Z.rooms.length||(o+='<div class="hint" style="top:auto;bottom:70px">'+(_a()?"Le plan est vide : ouvrez « Modéliser » pour dessiner vos pièces et poser les postes.":"Le plan des bureaux n'a pas encore été dessiné par un administrateur.")+"</div>"),o+=dc(),A.plan&&(o+=Mg()),o}function mg(i,e){const t=qi(i),n=["none","away","remote"].includes(t.kind);return'<div class="sec"><h4>Où est '+oe(i.name.split(" ")[0])+" ? "+(n?"":'<em class="lvl lvl-'+t.level.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()+'">'+t.level+" · "+Math.round(t.conf*100)+" %</em>")+'</h4><div style="font-weight:600">'+oe(cr(i,e))+'</div><ul class="why">'+t.reasons.map(s=>"<li>"+oe(s)+"</li>").join("")+"</ul>"+(n?"":'<p class="note" style="margin:0">Position déduite automatiquement, sans géolocalisation.</p>')+"</div>"}function yl(i,e){const s=o=>Math.max(0,Math.min(100,(o-480)/660*100)),r={meeting:"var(--busy)",focus:"var(--busy)",busy:"var(--busy)",lunch:"var(--away)",ooo:"var(--ooo)"};return'<div class="timeline" aria-hidden="true">'+i.map(o=>'<span class="ev" style="left:'+s(ke(o.s))+"%;width:"+(s(ke(o.e))-s(ke(o.s)))+"%;background:"+(r[o.k]||"var(--accent)")+";opacity:"+(o.k==="lunch"?.55:.8)+'"></span>').join("")+'<span class="now" style="left:'+s(e)+'%"></span></div><div class="tl-axis"><span>08h</span><span>11h</span><span>14h</span><span>17h</span><span>19h</span></div>'}function dc(){if(!A.sel)return"";const i=A.t;if(A.sel.kind==="person"){const e=Lt(A.sel.id);if(!e)return"";const t=mn(e,i),n=$i(e),s=n&&pn(n.x,n.z);let r="";if(t.st==="ooo")r="Absent du bureau toute la journée (réponse automatique active).";else if(t.st==="offline")r=t.before?"Pas encore connecté. Journée habituelle : "+e.in+" – "+e.out+".":"Journée terminée.";else if(t.ev&&t.ev.k!=="lunch")r=oe(zi(t.ev))+" jusqu'à "+t.ev.e+". Libre à partir de "+ot(qm(e,i))+".";else if(t.ev)r="En pause jusqu'à "+t.ev.e+".";else{const a=_s(e).filter(c=>ke(c.s)>i&&c.k!=="lunch").sort((c,l)=>ke(c.s)-ke(l.s))[0];r=a?"Libre jusqu'à "+a.s+" ("+oe(zi(a))+").":"Libre le reste de la journée."}const o=e.day==="ooo"?[{s:"08:00",e:"19:00",t:"Congés",k:"ooo"}]:_s(e).sort((a,c)=>ke(a.s)-ke(c.s));return'<aside class="panel" id="drawer" aria-label="Fiche"><div class="dh">'+Xn(e,t.st,!0)+'<div style="min-width:0"><h3>'+oe(e.name)+"</h3><p>"+oe(e.title)+" · "+oe(e.team)+'</p></div><button class="iconbtn close" data-close aria-label="Fermer">'+yt.x+'</button></div><div class="sec"><h4>Maintenant <em class="mono">'+ot(i)+'</em></h4><span class="pill"><i class="dot" style="background:var('+fn[t.st].v+')"></i>'+fn[t.st].label+"</span><div>"+oe(cr(e,t))+'</div><div class="note" style="color:var(--ink)">'+r+'</div><div class="src"><i>Teams</i> statut et lieu de travail · <i>Outlook</i> agenda</div></div>'+mg(e,t)+'<div class="sec"><h4>Agenda du jour <em>'+(Z.settings.agenda==="subject"?"objet visible":"libre / occupé")+"</em></h4>"+yl(o,i)+'<div class="evlist">'+(o.length?o.map(a=>{const c=i>=ke(a.s)&&i<ke(a.e),l=a.room&&Ke(a.room);return'<div class="evr'+(c?" cur":"")+'"><span class="mono">'+a.s+" – "+a.e+"</span><span>"+oe(zi(a))+(Z.settings.agenda==="subject"?"<small>"+(l?oe(l.name):a.k==="meeting"?"Réunion Teams":a.k==="focus"?"Concentration":"")+"</small>":"")+"</span></div>"}).join(""):`<p class="note">Aucun événement aujourd'hui.</p>`)+'</div></div><div class="sec"><h4>Poste</h4><dl class="kv"><dt>Bureau</dt><dd>'+(n?oe(s?s.name:"Poste attribué"):"Pas de poste attribué (flex)")+'</dd><dt>E-mail</dt><dd style="word-break:break-all">'+oe(e.email)+'</dd></dl><div class="btns"><a class="btn pri" target="_blank" rel="noopener" href="https://teams.microsoft.com/l/chat/0/0?users='+encodeURIComponent(e.email)+'">'+yt.chat+'Écrire sur Teams</a><a class="btn" target="_blank" rel="noopener" href="https://teams.microsoft.com/l/meeting/new?attendees='+encodeURIComponent(e.email)+'">'+yt.cal+"Proposer une réunion</a></div></div></aside>"}if(A.sel.kind==="room"){const e=Ke(A.sel.id);if(!e)return"";if(A.tab==="edit")return gg(e);const t=Ji(e),n=ur(e,i),s=[...Cn.entries()].filter(([r,o])=>o.onsite&&pn(o.x,o.z)===e).map(([r])=>Lt(r));return'<aside class="panel" id="drawer"><div class="dh"><div style="min-width:0"><h3>'+oe(e.name)+"</h3><p>"+bs[e.type]+(e.capacity?" · "+e.capacity+" places":"")+'</p></div><button class="iconbtn close" data-close aria-label="Fermer">'+yt.x+"</button></div>"+(e.type==="meeting"?'<div class="sec"><h4>Maintenant <em class="mono">'+ot(i)+'</em></h4><span class="pill"><i class="dot" style="background:var('+(n?"--busy":"--ok")+')"></i>'+(n?"Occupée jusqu'à "+n.e:"Libre")+"</span>"+(n?"<div>"+oe(zi(n))+"</div>":"")+'<div class="src"><i>Outlook</i> calendrier de la salle '+(e.mailbox?"· "+oe(e.mailbox):"")+'</div></div><div class="sec"><h4>Réservations du jour</h4>'+yl(t.map(r=>({...r,k:"meeting"})),i)+'<div class="evlist">'+(t.length?t.map(r=>'<div class="evr'+(i>=ke(r.s)&&i<ke(r.e)?" cur":"")+'"><span class="mono">'+r.s+" – "+r.e+"</span><span>"+oe(zi(r))+"<small>"+r.people.length+" participant"+(r.people.length>1?"s":"")+"</small></span></div>").join(""):'<p class="note">Aucune réservation.</p>')+'</div><div class="btns"><button class="btn pri" data-book="'+e.id+'">'+yt.cal+'Réserver 30 min maintenant</button></div><div class="note" id="bookmsg"></div></div>':"")+'<div class="sec"><h4>Présents dans la pièce <em>'+s.length+"</em></h4>"+(s.length?s.map(r=>{const o=mn(r,i);return'<button class="prow" data-person="'+r.id+'">'+Xn(r,o.st)+'<span class="txt"><span class="nm" style="display:block">'+oe(r.name)+'</span><span class="sub" style="display:block">'+fn[o.st].label+"</span></span></button>"}).join(""):'<p class="note">Personne pour le moment.</p>')+"</div></aside>"}if(A.sel.kind==="item"){const e=Xt(A.sel.id);return e?A.tab==="edit"?xg(e):'<aside class="panel" id="drawer"><div class="dh"><div><h3>Bureau libre</h3><p>Poste en flex · '+oe((pn(e.x,e.z)||{}).name||"")+'</p></div><button class="iconbtn close" data-close aria-label="Fermer">'+yt.x+`</button></div><div class="sec"><p class="note" style="margin:0">Ce poste n'est attribué à personne. Dans la version connectée, les collaborateurs pourront le réserver pour la journée.</p></div></aside>`:""}return""}function gg(i){return'<aside class="panel" id="drawer"><div class="dh"><div><h3>Pièce</h3><p>'+bs[i.type]+'</p></div><button class="iconbtn close" data-close aria-label="Fermer">'+yt.x+'</button></div><div class="sec"><div class="field"><label for="pf-name">Nom</label><input id="pf-name" data-rp="name" value="'+oe(i.name)+'"></div><div class="field"><label for="pf-type">Type</label><select id="pf-type" data-rp="type">'+Object.entries(bs).map(([e,t])=>'<option value="'+e+'"'+(i.type===e?" selected":"")+">"+t+"</option>").join("")+'</select></div><div class="row2"><div class="field"><label for="pf-w">Largeur (m)</label><input id="pf-w" type="number" min="2" max="40" data-rp="w" value="'+i.w+'"></div><div class="field"><label for="pf-d">Profondeur (m)</label><input id="pf-d" type="number" min="2" max="40" data-rp="d" value="'+i.d+'"></div></div>'+(i.type==="meeting"?'<div class="field"><label for="pf-cap">Capacité</label><input id="pf-cap" type="number" min="1" max="60" data-rp="capacity" value="'+(i.capacity||6)+'"></div>'+('<div class="field"><label for="pf-mb">Boîte aux lettres de la salle (Outlook)</label><input id="pf-mb" data-rp="mailbox" placeholder="salle@entreprise.fr" value="'+oe(i.mailbox||"")+'"></div>')+`<p class="note" style="margin:0">L'occupation de la salle sera lue dans ce calendrier de ressource.</p>`:"")+(Cs[i.type]?'<p class="note" style="margin:0">'+((i.doors||[]).length||"Aucune")+" porte"+((i.doors||[]).length>1?"s":"")+". Outil « Porte » (O) : cliquez sur un mur pour en ajouter ou en retirer.</p>":"")+'</div><div class="sec"><div class="btns"><button class="btn" data-dup>Dupliquer <span class="note">D</span></button><button class="btn danger" data-del>'+yt.del+'Supprimer la pièce</button></div><p class="note" style="margin:0">Glissez la pièce ou utilisez les flèches pour la déplacer : son mobilier suit.</p></div></aside>'}function xg(i){const e=Z.users.map(t=>{const n=Z.items.find(s=>s.type==="desk"&&s.user===t.id&&s.id!==i.id);return'<option value="'+t.id+'"'+(i.user===t.id?" selected":"")+">"+oe(t.name)+(n?" (a déjà un poste)":"")+"</option>"}).join("");return'<aside class="panel" id="drawer"><div class="dh"><div><h3>'+dr[i.type]+"</h3><p>"+oe((pn(i.x,i.z)||{}).name||"Hors pièce")+'</p></div><button class="iconbtn close" data-close aria-label="Fermer">'+yt.x+'</button></div><div class="sec">'+(i.type==="desk"?'<div class="field"><label for="pf-user">Attribué à</label><select id="pf-user" data-ip="user"><option value="">Personne (poste flex)</option>'+e+"</select></div>":"")+(i.type==="meeting"?'<div class="field"><label for="pf-seats">Nombre de places</label><select id="pf-seats" data-ip="seats">'+[4,6,8,10,12].map(t=>"<option"+((i.seats||6)===t?" selected":"")+">"+t+"</option>").join("")+"</select></div>":"")+(i.type==="wall"?'<label class="check"><input type="checkbox" id="pf-glass" data-ip="glass"'+(i.glass?" checked":"")+'> Cloison vitrée</label><p class="note" style="margin:0">Longueur : '+Math.round(Math.hypot(i.x2-i.x,i.z2-i.z)*10)/10+" m</p>":"")+'<div class="btns"><button class="btn" data-rot>'+yt.rot+'Pivoter 90° <span class="note">R</span></button><button class="btn" data-dup>Dupliquer <span class="note">D</span></button><button class="btn danger" data-del>'+yt.del+"Supprimer</button></div></div></aside>"}function _g(){const i=Z.bg;let e='<section class="panel" id="tools" aria-label="Outils"><div class="tl-h">Outils</div>'+tr.filter(s=>!s.group).map(na).join("")+'<div class="tl-h">Pièces prêtes à poser</div>'+tr.filter(s=>s.group==="tpl").map(na).join("")+'<div class="tl-h">Mobilier</div>'+tr.filter(s=>s.group==="item").map(na).join("")+'<div class="tl-h">Étage</div><div class="tl-f"><label for="fl-w">Largeur (m)<input type="number" id="fl-w" data-floor="w" min="6" max="200" value="'+Z.floor.w+'"></label><label for="fl-d">Profondeur (m)<input type="number" id="fl-d" data-floor="d" min="6" max="200" value="'+Z.floor.d+'"></label></div><button class="tool" id="bgPick">'+xa("image")+"<span>"+(i?"Remplacer le plan de fond":"Importer un plan (image)")+'</span></button><input type="file" id="bgFile" accept="image/*" hidden>'+(i?'<div class="tl-f"><label for="bg-w">Largeur réelle (m)<input type="number" id="bg-w" data-bg="w" step="0.5" min="1" value="'+i.w+'"></label><label for="bg-x">Décalage X<input type="number" id="bg-x" data-bg="x" step="0.5" value="'+i.x+'"></label><label for="bg-z">Décalage Y<input type="number" id="bg-z" data-bg="z" step="0.5" value="'+i.z+'"></label><label for="bg-op">Opacité<input type="range" id="bg-op" data-bg="op" min="0.1" max="1" step="0.05" value="'+i.op+'"></label></div><button class="tool" id="bgDel">'+xa("image")+"<span>Retirer le plan de fond</span></button>":`<p class="note" style="margin:2px 8px 6px">Photo ou scan du plan (plan d'évacuation, plan d'architecte) : il s'affiche par-dessus le sol pour décalquer les pièces.</p>`)+"</section>";const t={select:"Cliquez un élément pour le modifier, glissez-le pour le déplacer. D duplique, les flèches ajustent.",room:"Tracez un rectangle sur le sol pour créer une pièce.",wall:"Glissez sur le sol pour tracer une cloison droite. Échap pour arrêter.",door:"Cliquez sur un mur de pièce pour ajouter une porte, sur une porte pour la retirer."},n=A.tool.startsWith("place:")?"Cliquez sur le sol pour poser : "+dr[A.tool.slice(6)].toLowerCase()+". Les poses s'enchaînent ; Échap pour arrêter.":A.tool.startsWith("tpl:")?"Cliquez sur le sol pour poser « "+za[A.tool.slice(4)].label+" », déjà meublée. Échap pour arrêter.":t[A.tool];return e+='<div class="hint">'+n+"</div>",e+=dc(),e}const na=i=>'<button class="tool" data-tool="'+i.id+'" aria-pressed="'+(A.tool===i.id)+'">'+xa(i.icon)+"<span>"+i.label+"</span>"+(i.key?"<kbd>"+i.key+"</kbd>":"")+"</button>";function vg(){const i=Z.items.filter(n=>n.type==="desk"),e=n=>{const s=pn(n.x,n.z);return(s?s.name:"Poste")+" · "+n.id.toUpperCase()};return`<section class="panel sheet"><div class="sheet-in"><div style="display:flex;gap:16px;align-items:flex-end;flex-wrap:wrap"><div><h2>Personnes</h2><p class="lead">Les comptes, leur rôle et leur poste. Dans la version connectée, la liste est importée depuis l'annuaire Microsoft (Entra ID) : vous n'ajoutez à la main que les exceptions.</p></div><div class="spacer"></div><button class="btn pri" id="addUser">+ Ajouter une personne</button></div><div class="tbl-wrap"><table><thead><tr><th>Nom</th><th>E-mail Microsoft 365</th><th>Équipe</th><th>Rôle</th><th>Poste attribué</th><th>Journée (démo)</th><th></th></tr></thead><tbody>`+Z.users.map(n=>{const s=$i(n);return'<tr data-row="'+n.id+'"><td style="min-width:200px"><div style="display:flex;gap:10px;align-items:center">'+Xn(n)+'<input aria-label="Nom" data-up="name" value="'+oe(n.name)+'"></div></td><td><input aria-label="E-mail" data-up="email" value="'+oe(n.email)+'" style="min-width:220px"></td><td><input aria-label="Équipe" data-up="team" value="'+oe(n.team)+'"></td><td><select aria-label="Rôle" data-up="role"><option value="user"'+(n.role==="user"?" selected":"")+'>Utilisateur</option><option value="admin"'+(n.role==="admin"?" selected":"")+'>Admin</option></select></td><td><select aria-label="Poste" data-up="desk"><option value="">Flex</option>'+i.map(r=>'<option value="'+r.id+'"'+(s&&s.id===r.id?" selected":"")+">"+oe(e(r))+(r.user&&r.user!==n.id?" (occupé)":"")+"</option>").join("")+'</select></td><td><select aria-label="Journée simulée" data-up="day"><option value="office"'+(n.day==="office"?" selected":"")+'>Au bureau</option><option value="remote"'+(n.day==="remote"?" selected":"")+'>Télétravail</option><option value="unknown"'+(n.day==="unknown"?" selected":"")+'>Lieu non déclaré</option><option value="ooo"'+(n.day==="ooo"?" selected":"")+'>Congés</option></select></td><td><button class="iconbtn" data-udel="'+n.id+'" aria-label="Retirer '+oe(n.name)+'"'+(n.id===A.me.id?" disabled":"")+">"+yt.del+"</button></td></tr>"}).join("")+'</tbody></table></div><p class="note">Rôle « Admin » : peut modéliser le plan, gérer les personnes et les connexions. Rôle « Utilisateur » : consulte le plan vivant. La colonne « Journée » remplace, dans le prototype, ce que Teams et Outlook fourniront.</p></div></section>'}function bg(){const i=Z.settings;return'<section class="panel sheet"><div class="sheet-in"><div><h2>Connexions</h2><p class="lead">Étage lit la présence Teams et les agendas Outlook via Microsoft Graph. Il ne lit ni les messages, ni le contenu des réunions, ni les applications ouvertes.</p></div><div class="cards"><div class="card"><h3><svg viewBox="0 0 21 21" width="18" height="18" aria-hidden="true"><rect x="1" y="1" width="9" height="9" fill="#F25022"/><rect x="11" y="1" width="9" height="9" fill="#7FBA00"/><rect x="1" y="11" width="9" height="9" fill="#00A4EF"/><rect x="11" y="11" width="9" height="9" fill="#FFB900"/></svg>Microsoft 365<span class="status warn">Mode démo</span></h3><div class="field"><label for="cx-t">ID du locataire (tenant)</label><input id="cx-t" data-cx="tenant" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" value="'+oe(i.tenant)+`"></div><div class="field"><label for="cx-c">ID de l'application (client)</label><input id="cx-c" data-cx="client" placeholder="Créé dans Entra ID › Inscriptions d'applications" value="`+oe(i.client)+`"></div><div class="btns"><button class="btn pri" id="cxTest">Tester la connexion</button><button class="btn" id="cxSync">Importer l'annuaire</button></div><div class="msg" id="cxMsg" hidden></div></div><div class="card"><h3>Autorisations demandées</h3><div class="perm"><code>User.Read.All</code><span>Lister les collaborateurs de l'annuaire</span><code>Presence.Read.All</code><span>Statut Teams : disponible, en réunion, absent…</span><code>Calendars.ReadBasic</code><span>Créneaux de l'agenda Outlook (sans le corps des invitations)</span><code>Place.Read.All</code><span>Salles de réunion déclarées dans Outlook</span></div><p class="note" style="margin:0">Autorisations de type « application », validées une fois par un administrateur Microsoft 365. Le secret reste côté serveur, jamais dans le navigateur.</p></div><div class="card"><h3>Confidentialité de l'agenda</h3><p class="note" style="margin:0">Ce que les collègues voient de l'agenda des autres.</p><div class="seg" role="group" aria-label="Détail de l'agenda"><button data-agenda="busy" aria-pressed="`+(i.agenda==="busy")+'">Libre / occupé seulement</button><button data-agenda="subject" aria-pressed="'+(i.agenda==="subject")+`">Objet et lieu</button></div><p class="note" style="margin:0">Les réunions marquées « privé » dans Outlook restent affichées « Occupé » quel que soit ce réglage.</p></div><div class="card"><h3>Positions devinées</h3><p class="note" style="margin:0">Quand une position n'est pas déclarée, Étage la déduit de l'agenda, des salles réservées à son nom et du statut Teams. Les positions incertaines apparaissent translucides.</p><div class="seg" role="group" aria-label="Positions devinées"><button data-guess="all" aria-pressed="`+(i.guess!=="probable")+'">Toutes les afficher</button><button data-guess="probable" aria-pressed="'+(i.guess==="probable")+'">Seulement les probables</button></div></div><div class="card"><h3>Actualisation</h3><dl class="kv"><dt>Présence Teams</dt><dd>Abonnement aux changements (quasi temps réel), relevé toutes les 60 s en secours</dd><dt>Agendas</dt><dd>Toutes les 5 min</dd><dt>Annuaire</dt><dd>Chaque nuit</dd></dl></div></div></div></section>'}const cn=24,bt=480,On=1140,fr=()=>Z.rooms.filter(i=>i.type==="meeting"),ka=(i,e)=>i<mt||i===mt&&e<Math.floor(A.t/30)*30,va=(i,e)=>{let t=Wi(i,e);for(;Hn(t)>4;)t=Wi(t,e);return t};function Ss(i,e){const t=fr();if(!t.length)return;let n=mt;Hn(n)>4&&(n=va(n,1)),A.plan={mode:e||"room",room:i||t[0].id,date:n,sel:null,form:null,view:null,msg:"",scroll:!0},A.sel=null,si.hidden=!0,be(),Bt()}let Ts=new Map;function hc(i){return Z.settings.agenda==="subject"||i.org===A.me.id||(i.people||[]).includes(A.me.id)}function yg(){const i=A.plan;if(i.mode==="room"){const e=Jl(i.date);return[0,1,2,3,4].map(t=>{const n=Wi(e,t);return{date:n,room:i.room,label:km(n),sub:n===mt?"Aujourd'hui":""}})}return fr().map(e=>{let t=(e.capacity||"?")+" places";if(i.date===mt){const n=ur(e,A.t);t=n?'<span class="busy">Occupée → '+n.e+"</span>":'<span class="free">Libre maintenant</span>'}return{date:i.date,room:e.id,label:oe(e.name),sub:t,raw:!0}})}function Mg(){const i=A.plan,e=fr(),t=Ke(i.room)||e[0],n=yg();Ts=new Map;const s=[...new Set(n.map(u=>u.date))];qe.ensureDates(s);const r=!qe.hasDates(s),o=Jl(i.date),a=Wi(o,4),c=i.mode==="room"?dn(o).getDate()+(dn(o).getMonth()!==dn(a).getMonth()?" "+ha[dn(o).getMonth()]:"")+" – "+dn(a).getDate()+" "+ha[dn(a).getMonth()]:xs(i.date);let l='<section class="panel plan" aria-label="Planning des salles"><div class="plan-h"><div style="min-width:0"><h2>'+(i.mode==="room"?oe(t.name):"Salles de réunion")+"</h2><p>"+(i.mode==="room"?(t.capacity||"?")+" places · calendrier Outlook "+(t.mailbox?oe(t.mailbox):"non renseigné"):"Toutes les salles, "+xs(i.date))+'</p></div><div class="seg" role="group" aria-label="Affichage"><button data-plan-mode="room" aria-pressed="'+(i.mode==="room")+`">Semaine d'une salle</button><button data-plan-mode="all" aria-pressed="`+(i.mode==="all")+'">Toutes les salles</button></div>'+(i.mode==="room"?'<select id="plRoom" class="search" style="width:auto" aria-label="Salle">'+e.map(u=>'<option value="'+u.id+'"'+(u.id===t.id?" selected":"")+">"+oe(u.name)+"</option>").join("")+"</select>":"")+'<div class="navd"><button class="iconbtn" data-plan-nav="-1" aria-label="Précédent"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 3L5 8l5 5"/></svg></button><span class="lbl">'+c+`</span><button class="iconbtn" data-plan-nav="1" aria-label="Suivant"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3l5 5-5 5"/></svg></button><button class="btn" data-plan-today style="padding:6px 10px">Aujourd'hui</button></div>`+(r?'<span class="note">Chargement des agendas…</span>':"")+'<button class="iconbtn" data-plan-close aria-label="Fermer le planning" style="margin-left:auto">'+yt.x+"</button></div>";l+='<div class="plan-b"><div class="cal-wrap" id="calWrap"><div class="cal" style="--cols:'+n.length+'"><div class="cal-head"><div></div>'+n.map(u=>'<div class="ch'+(u.date===mt&&i.mode==="room"?" today":"")+'">'+u.label+"<small>"+(u.sub||"&nbsp;")+"</small></div>").join("")+'</div><div class="cal-body"><div class="gutter">';for(let u=bt;u<=On;u+=60)l+='<span style="top:'+(u-bt)/30*cn+'px">'+ot(u)+"</span>";l+="</div>";for(const u of n){const h=Ke(u.room),d=Ji(h,u.date);if(l+='<div class="col'+(u.date===mt?" today":"")+'" data-date="'+u.date+'" data-room="'+u.room+'">',u.date<mt)l+='<div class="past" style="bottom:0"></div>';else if(u.date===mt){const m=Math.min(On,Math.max(bt,Math.floor(A.t/30)*30));m>bt&&(l+='<div class="past" style="height:'+(m-bt)/30*cn+'px"></div>'),A.t>bt&&A.t<On&&(l+='<div class="nowl" style="top:'+(A.t-bt)/30*cn+'px"></div>')}for(const m of d){Ts.set(m.id,{...m,room:u.room,date:u.date});const g=Math.max(bt,ke(m.s)),p=Math.min(On,ke(m.e));if(p<=g)continue;const f=m.org===A.me.id,_=hc(m)?m.t:"Occupé",b=(p-g)/30*cn-2;l+='<button class="blk '+(f?"mine":"other")+(i.view===m.id?" on":"")+'" data-bk="'+oe(m.id)+'" style="top:'+((g-bt)/30*cn+1)+"px;height:"+b+'px" title="'+oe(m.s+"–"+m.e+" · "+_)+'"><b>'+oe(_)+"</b>"+(b>30?'<span class="tm">'+m.s+" – "+m.e+"</span>":"")+"</button>"}i.sel&&i.sel.date===u.date&&i.sel.room===u.room&&(l+='<div class="selbox" style="top:'+(i.sel.s-bt)/30*cn+"px;height:"+((i.sel.e-i.sel.s)/30*cn-2)+'px">'+ot(i.sel.s)+" – "+ot(i.sel.e)+"</div>"),l+="</div>"}return l+='</div></div></div><aside class="plan-side'+(i.sel||i.view?"":" idle")+'">'+wg()+"</aside></div></section>",l}function Ml(i,e,t){let n="";for(let s=e;s<=t;s+=30)n+='<option value="'+s+'"'+(s===i?" selected":"")+">"+ot(s)+"</option>";return n}function fc(){const i=A.plan,e=i.sel,t=i.form,n=Ke(e.room),s=[];e.e<=e.s&&s.push(["bad","L'heure de fin doit être après l'heure de début."]),ka(e.date,e.s)&&s.push(["bad","Ce créneau est déjà passé."]);const r=Ji(n,e.date).find(o=>ke(o.s)<e.e&&ke(o.e)>e.s);if(r&&s.push(["bad",oe(n.name)+" est déjà réservée de "+r.s+" à "+r.e+"."]),n.capacity&&t.people.length>n.capacity&&s.push(["mid",t.people.length+" participants pour "+n.capacity+" places."]),e.date===mt)for(const o of t.people){if(o===A.me.id)continue;const a=Lt(o);if(!a)continue;const c=mn(a,A.t);if(c.st==="ooo"){s.push(["mid",oe(a.name)+" est absent du bureau aujourd'hui."]);continue}const l=_s(a).find(u=>u.k!=="lunch"&&ke(u.s)<e.e&&ke(u.e)>e.s);l?s.push(["mid",oe(a.name)+" est déjà pris : "+oe(Z.settings.agenda==="subject"?l.t:"occupé")+" ("+l.s+"–"+l.e+")."]):c.loc==="remote"&&s.push(["mid",oe(a.name)+" est en télétravail : pensez au lien Teams."])}return s}function wg(){const i=A.plan;if(i.sel){const e=i.sel,t=i.form,n=Ke(e.room),s=fc(),r=s.some(a=>a[0]==="bad"),o=Z.users.filter(a=>!t.people.includes(a.id));return'<h3>Nouvelle réservation</h3><div class="field"><label for="bkT">Objet</label><input id="bkT" value="'+oe(t.t)+'" maxlength="80"></div><div class="field"><label for="bkRoom">Salle</label><select id="bkRoom">'+fr().map(a=>'<option value="'+a.id+'"'+(a.id===n.id?" selected":"")+">"+oe(a.name)+" · "+(a.capacity||"?")+" places</option>").join("")+'</select></div><div class="field"><label>Date</label><div style="font-weight:600">'+xs(e.date)+'</div></div><div class="row2"><div class="field"><label for="bkS">Début</label><select id="bkS">'+Ml(e.s,bt,On-30)+'</select></div><div class="field"><label for="bkE">Fin</label><select id="bkE">'+Ml(e.e,bt+30,On)+'</select></div></div><div class="field"><label for="bkAdd">Participants · '+t.people.length+'</label><div class="pchips">'+t.people.map(a=>{const c=Lt(a);return c?'<span class="pchip">'+Xn(c)+oe(c.name)+(a!==A.me.id?'<button data-pdel="'+a+'" aria-label="Retirer '+oe(c.name)+'">×</button>':' <span class="note">(vous)</span>&nbsp;')+"</span>":""}).join("")+'</div><select id="bkAdd"><option value="">+ Ajouter un participant</option>'+o.map(a=>'<option value="'+a.id+'">'+oe(a.name)+" · "+oe(a.team)+"</option>").join("")+'</select></div><label class="check"><input type="checkbox" id="bkTeams"'+(t.teams?" checked":"")+"> Ajouter un lien de réunion Teams</label>"+(i.err?'<div class="warn bad">'+oe(i.err)+"</div>":"")+(s.length?s.map(a=>'<div class="warn '+a[0]+'">'+a[1]+"</div>").join(""):'<div class="warn good">Salle libre sur ce créneau'+(e.date===mt&&t.people.length>1?", participants disponibles":"")+".</div>")+'<div class="btns"><button class="btn pri" id="bkSave"'+(r||i.busy?' disabled style="opacity:.5;cursor:not-allowed"':"")+">"+(i.busy?"Réservation en cours…":"Réserver "+ot(e.s)+" – "+ot(e.e))+`</button><button class="btn" id="bkCancel">Annuler</button></div><p class="note" style="margin:0">Version connectée : la réservation crée l'événement dans Outlook, invite la salle et les participants, et apparaît dans leur agenda.</p>`}if(i.view&&Ts.has(i.view)){const e=Ts.get(i.view),t=Ke(e.room),n=Lt(e.org),s=hc(e),r=qe.canCancel(e,A.me);return"<h3>"+oe(s?e.t:"Occupé")+'</h3><dl class="kv"><dt>Salle</dt><dd>'+oe(t.name)+"</dd><dt>Quand</dt><dd>"+xs(e.date)+", "+e.s+" – "+e.e+"</dd>"+(n?"<dt>Organisateur</dt><dd>"+oe(n.name)+"</dd>":"")+"<dt>Source</dt><dd>"+(e.src==="etage"?"Réservée dans Étage":e.src==="mine"?"Votre réunion Outlook":"Calendrier Outlook de la salle")+(e.pending?" · en attente de confirmation de la salle":"")+"</dd></dl>"+(s&&e.people&&e.people.length?'<div class="field"><label>Participants · '+e.people.length+'</label><div class="pchips">'+e.people.map(o=>{const a=Lt(o);return a?'<span class="pchip">'+Xn(a)+oe(a.name)+"&nbsp;</span>":""}).join("")+"</div></div>":"")+(e.teams?'<a class="btn" target="_blank" rel="noopener" href="https://teams.microsoft.com/">'+yt.chat+"Rejoindre sur Teams</a>":"")+(i.err?'<div class="warn bad">'+oe(i.err)+"</div>":"")+(r?'<div class="btns"><button class="btn danger" data-bkdel="'+oe(e.id)+'"'+(i.busy?" disabled":"")+">"+yt.del+(i.busy?"Annulation…":"Annuler la réservation")+"</button></div>":"")+'<button class="btn" data-plan-back style="justify-self:start">Retour</button>'}return(i.msg?'<div class="warn good">'+oe(i.msg)+"</div>":"")+`<h3>Réserver un créneau</h3><ol class="steps"><li>Glissez sur une plage libre du planning (ou cliquez pour 30 min).</li><li>Ajustez l'objet, les horaires et les participants.</li><li>Validez : la salle passe en « occupée » sur le plan.</li></ol><div class="legend" style="position:static;display:flex"><span><i class="dot" style="background:color-mix(in srgb,var(--busy) 40%,var(--panel));border-radius:3px"></i>Réservée</span><span><i class="dot" style="background:var(--accent);border-radius:3px"></i>Vos réservations</span><span><i class="dot" style="background:var(--muted);opacity:.4;border-radius:3px"></i>Passé</span></div><p class="note" style="margin:0">Créneaux de 30 min, de 08:00 à 19:00. Les réservations existantes viennent du calendrier Outlook de chaque salle`+(Z.settings.agenda==="subject"?"":" ; leur objet est masqué selon le réglage de confidentialité")+".</p>"}let At=null;function pc(i,e){return bt+Math.max(0,Math.min((On-bt)/30-1,Math.floor(e/cn)))*30}function mc(){const i=At;let e=i.col.querySelector(".selbox");e||(e=document.createElement("div"),e.className="selbox",i.col.appendChild(e)),e.style.top=(i.a-bt)/30*cn+"px",e.style.height=(i.b-i.a)/30*cn-2+"px",e.textContent=ot(i.a)+" – "+ot(i.b)}document.addEventListener("pointerdown",i=>{const e=i.target.closest&&i.target.closest(".plan .col");if(!e||i.target.closest(".blk"))return;const t=e.getBoundingClientRect(),n=pc(e,i.clientY-t.top),s=e.dataset.date;if(ka(s,n)){A.plan.sel=null,A.plan.view=null,A.plan.msg="",be();const r=document.querySelector(".plan-side");r&&r.insertAdjacentHTML("afterbegin",'<div class="warn bad">Ce créneau est passé. Choisissez une plage après '+ot(s===mt?Math.floor(A.t/30)*30:bt)+".</div>");return}i.preventDefault();try{e.setPointerCapture(i.pointerId)}catch{}document.querySelectorAll(".plan .selbox").forEach(r=>r.remove()),At={col:e,rect:t,s0:n,a:n,b:n+30,date:s,room:e.dataset.room},mc()});document.addEventListener("pointermove",i=>{if(!At)return;const e=pc(At.col,i.clientY-At.rect.top);let t=Math.min(At.s0,e);ka(At.date,t)&&(t=At.s0),At.a=t,At.b=Math.max(At.s0,e)+30,mc()});document.addEventListener("pointerup",()=>{if(!At)return;const i=At;At=null;const e=A.plan;e.sel={date:i.date,room:i.room,s:i.a,e:i.b},e.form={t:"Réunion",people:[A.me.id],teams:!0},e.view=null,e.msg="",e.err="",be();const t=De("#bkT");t&&window.innerWidth>860&&(t.focus(),t.select())});function Sg(i){const e=A.plan;if(!e)return!1;if(i.dataset.planMode)return e.mode=i.dataset.planMode,e.sel=null,e.view=null,be(),!0;if(i.dataset.planNav){const t=+i.dataset.planNav;return e.date=e.mode==="room"?Wi(e.date,7*t):va(e.date,t),e.sel=null,e.view=null,be(),!0}if(i.hasAttribute("data-plan-today"))return e.date=Hn(mt)>4?va(mt,1):mt,e.sel=null,e.view=null,be(),!0;if(i.hasAttribute("data-plan-close"))return A.plan=null,be(),!0;if(i.hasAttribute("data-plan-back"))return e.view=null,be(),!0;if(i.dataset.bk)return e.view=i.dataset.bk,e.sel=null,e.msg="",e.err="",be(),!0;if(i.dataset.pdel)return e.form.people=e.form.people.filter(t=>t!==i.dataset.pdel),be(),!0;if(i.id==="bkCancel")return e.sel=null,e.err="",be(),!0;if(i.id==="bkSave"){if(e.busy||fc().some(s=>s[0]==="bad"))return!0;const t=e.sel,n=e.form;return e.busy=!0,e.err="",be(),qe.book({room:t.room,date:t.date,s:ot(t.s),e:ot(t.e),t:(n.t||"Réunion").trim()||"Réunion",org:A.me.id,people:n.people.slice(),teams:!!n.teams}).then(s=>{e.busy=!1,A.plan===e&&(s.ok?(e.sel=null,e.view=null,e.msg="Réservé : "+Ke(t.room).name+", "+xs(t.date)+" de "+ot(t.s)+" à "+ot(t.e)+"."):e.err=s.error,rn(!1),jn(),be())}),!0}if(i.dataset.bkdel){const t=Ts.get(i.dataset.bkdel);return!t||e.busy||(e.busy=!0,e.err="",be(),qe.cancel(t).then(n=>{e.busy=!1,A.plan===e&&(n.ok?(e.view=null,e.msg="Réservation annulée."):e.err=n.error,rn(!1),jn(),be())})),!0}return!1}function gc(i){const e=A.plan;if(!e)return!1;if(i.id==="plRoom")return e.room=i.value,e.sel=null,e.view=null,be(),!0;if(!e.sel)return!1;if(i.id==="bkT")return e.form.t=i.value,!0;if(i.id==="bkS"){const t=+i.value,n=e.sel.e-e.sel.s;return e.sel.s=t,e.sel.e<=t&&(e.sel.e=Math.min(On,t+Math.max(30,n))),be(),!0}return i.id==="bkE"?(e.sel.e=+i.value,be(),!0):i.id==="bkRoom"?(e.sel.room=i.value,be(),!0):i.id==="bkAdd"?(i.value&&e.form.people.push(i.value),be(),!0):i.id==="bkTeams"?(e.form.teams=i.checked,!0):!1}const Tg=De("#overlay");function be(){if(!A.me)return;ws();let i="";A.tab==="live"?i=pg():A.tab==="edit"?i=_g():A.tab==="people"?i=vg():i=bg();const e=document.activeElement,t=e&&e.id,n=e&&e.selectionStart,s=De("#calWrap"),r=s?[s.scrollLeft,s.scrollTop]:null;Tg.innerHTML=i;const o=De("#calWrap");if(o&&r&&(o.scrollLeft=r[0],o.scrollTop=r[1]),o&&A.plan&&A.plan.scroll&&(A.plan.scroll=!1,o.scrollTop=Math.max(0,(A.t-90-480)/30*24),A.plan.mode==="room")){const a=o.querySelector(".col.today");a&&window.innerWidth<860&&(o.scrollLeft=Math.max(0,a.offsetLeft-60))}if(t){const a=document.getElementById(t);if(a&&a!==document.body){a.focus();try{n!=null&&a.setSelectionRange(n,n)}catch{}}}document.querySelector(".mapctl").hidden=A.tab==="people"||A.tab==="cx",hr.hidden=A.tab==="people"||A.tab==="cx",jn()}document.addEventListener("click",i=>{const e=i.target.closest("button,a");if(e){if(e.dataset.openPlan){Ss(null,e.dataset.openPlan);return}if(!(e.closest(".plan")&&Sg(e))){if(e.dataset.tab){const t=A.tab;A.tab=e.dataset.tab,A.sel=null,A.plan=null,A.tool="select",A.menu=!1,t==="edit"!=(A.tab==="edit")?Gn():Ms(),be(),Bt();return}if(e.id==="meBtn"){A.menu=!A.menu,ws();return}if(e.dataset.act){if(A.menu=!1,e.dataset.act==="names"&&(A.names=!A.names,Ms()),e.dataset.act==="switch"){A.me=null,Da.del("etage-me"),vc();return}if(e.dataset.act==="logout"){qe.logout();return}if(e.dataset.act==="login"){Bn.login();return}if(e.dataset.act==="connect"){Bn.connect();return}if(e.dataset.act==="disconnect"){qe.disconnect().then(()=>{A.me=qe.me(),rn(!1),be(),Mt("Teams et Outlook déconnectés : Étage n'y a plus accès.")}).catch(t=>Mt(t.message));return}e.dataset.act==="reset"&&(Z=qe.reset(),A.sel=null,A.me=Lt(A.me.id)||Z.users[0],Gn(),Pa(!0)),be();return}if(A.menu&&!e.closest(".menu")&&(A.menu=!1,ws()),e.dataset.f){A.filter=e.dataset.f,be();return}if(e.id==="pcol"){A.peopleCollapsed=!A.peopleCollapsed,be();return}if(e.dataset.person){ga(e.dataset.person,!0),window.innerWidth<860&&(A.peopleCollapsed=!0,be());return}if(e.hasAttribute("data-close")){A.sel=null,be(),Bt(),rn(!1);return}if(e.dataset.tool){A.tool=e.dataset.tool,A.sel=null,be(),Bt();return}if(e.hasAttribute("data-del")){cc();return}if(e.hasAttribute("data-rot")){uc();return}if(e.hasAttribute("data-dup")){lc();return}if(e.id==="bgPick"){De("#bgFile").click();return}if(e.id==="bgDel"){delete Z.bg,at();return}if(e.dataset.udel){Z.items.forEach(t=>{t.user===e.dataset.udel&&(t.user=null)}),Z.users=Z.users.filter(t=>t.id!==e.dataset.udel),at();return}if(e.id==="addUser"){const t=["#3D5A80","#C0603B","#2A9D8F","#8D6A9F","#B5651D","#386641"],n={id:An("u"),name:"Nouvelle personne",title:"Poste",team:"Équipe",email:"prenom.nom@atelier-demo.fr",role:"user",day:"office",in:"09:00",out:"17:30",color:t[Z.users.length%t.length],events:[Eg("12:30","13:30","Pause déjeuner","lunch")]};Z.users.push(n),at();const s=document.querySelector('tr[data-row="'+n.id+'"] input');s&&(s.focus(),s.select());return}if(e.dataset.guess){Z.settings.guess=e.dataset.guess,kn(),rn(!1),be();return}if(e.dataset.agenda){Z.settings.agenda=e.dataset.agenda,kn(),be();return}if(e.id==="cxHealth"){A.health={loading:!0},be(),qe.health().then(t=>{A.health=t}).catch(t=>{A.health={error:t.message}}).finally(()=>be());return}if(e.id==="msLogin"||e.id==="demoPill"){Bn.login();return}if(e.dataset.mystatus){const n=(A.me.status&&A.me.status.date===mt?A.me.status.loc:null)===e.dataset.mystatus?null:e.dataset.mystatus;qe.setStatus(n).then(()=>{A.me=qe.me(),rn(!1),jn(),be()}).catch(s=>Mt(s.message));return}if(e.dataset.ludel){qe.deleteUser(e.dataset.ludel).then(()=>{rn(!0),be(),Mt("Personne retirée.")}).catch(t=>Mt(t.message));return}if(e.id==="cxTest"||e.id==="cxSync"){const t=De("#cxMsg");t.hidden=!1;const n=Z.settings;t.textContent=!n.tenant||!n.client?"Renseignez l'ID du locataire et l'ID de l'application, puis faites valider les autorisations par un administrateur Microsoft 365.":"Identifiants enregistrés. Ce prototype ne contacte pas Microsoft : la connexion réelle se fera depuis le serveur de la version complète.";return}}}});const Eg=(i,e,t,n)=>({s:i,e,t,k:n,room:null});document.addEventListener("input",i=>{const e=i.target;if(e.id==="bkT"&&A.plan){gc(e);return}if(e.id==="q"){A.q=e.value,be();return}if(e.id==="clockR"){Fa(+e.value);return}if(e.dataset.floor){Z.floor[e.dataset.floor]=Math.max(6,Math.min(200,+e.value||6)),kn(),Gn();return}if(e.dataset.bg&&Z.bg){const t=+e.value;Number.isFinite(t)&&(Z.bg[e.dataset.bg]=e.dataset.bg==="w"?Math.max(1,t):t),kn(),Gn();return}if(e.dataset.rp){const t=Ke(A.sel.id);let n=e.value;if(["w","d","capacity"].includes(e.dataset.rp)&&(n=Math.max(1,+n||1)),t[e.dataset.rp]=n,kn(),e.dataset.rp==="name"||e.dataset.rp==="mailbox"){jn();return}Gn(),e.dataset.rp==="type"&&be();return}if(e.dataset.cx){Z.settings[e.dataset.cx]=e.value.trim(),kn();return}if(e.dataset.up&&e.tagName==="INPUT"){const t=Lt(e.closest("tr").dataset.row);t[e.dataset.up]=e.value,kn(),e.dataset.up==="name"&&Ms();return}});document.addEventListener("submit",i=>{if(i.target.id!=="nuForm")return;i.preventDefault();const e={name:De("#nu-name").value.trim(),email:De("#nu-email").value.trim(),team:De("#nu-team").value.trim()||void 0};qe.addUser(e).then(()=>{rn(!0),be(),Mt(e.name+" ajouté(e).")}).catch(t=>Mt(t.message))});document.addEventListener("change",i=>{const e=i.target;if(e.dataset.lu){const t=e.closest("tr").dataset.row;qe.updateUser(t,{[e.dataset.lu]:e.value}).then(n=>{t===A.me.id&&(A.me=qe.me()),Ms(),ws()}).catch(n=>{Mt(n.message),be()});return}if(!(e.closest(".plan")&&e.id!=="bkT"&&gc(e))){if(e.dataset.mbsel){const t=Ke(A.sel.id),n=Z.outlookRooms.find(s=>s.email===e.value);t.mailbox=n?n.email:"",t.outlookName=n?n.name:"",n&&n.capacity&&(t.capacity=n.capacity),at();return}if(e.dataset.ip==="user"){const t=Xt(A.sel.id),n=e.value||null;n&&Z.items.forEach(s=>{s.type==="desk"&&s.user===n&&(s.user=null)}),t.user=n,at();return}if(e.id==="bgFile"){e.files&&e.files[0]&&cg(e.files[0]);return}if(e.dataset.ip==="glass"){Xt(A.sel.id).glass=e.checked,at();return}if(e.dataset.ip==="seats"){Xt(A.sel.id).seats=+e.value,at();return}if(e.dataset.up&&e.tagName==="SELECT"){const t=Lt(e.closest("tr").dataset.row),n=e.dataset.up;if(n==="desk"){if(Z.items.forEach(s=>{s.type==="desk"&&s.user===t.id&&(s.user=null)}),e.value){const s=Xt(e.value);s.user=t.id}}else t[n]=e.value;if(t.id===A.me.id&&n==="role"&&e.value!=="admin"){t.role="admin",e.value="admin";return}at();return}}});function Fa(i){A.t=i,rn(!1),jn(),A.tab==="live"?be():ws()}let wl=null;De("#play").addEventListener("click",()=>{A.playing=!A.playing,De("#play").innerHTML=A.playing?'<svg viewBox="0 0 16 16" fill="currentColor"><rect x="4" y="3" width="3" height="10"/><rect x="9" y="3" width="3" height="10"/></svg>':'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4 2.5v11l9-5.5z"/></svg>',De("#play").setAttribute("aria-label",A.playing?"Mettre en pause":"Lancer la simulation"),clearInterval(wl),A.playing&&(wl=setInterval(()=>{Fa(A.t>=1200?420:A.t+5)},350))});De("#rotL").onclick=()=>Ki(ye.T,ye.zoom,ye.az+Math.PI/2);De("#rotR").onclick=()=>Ki(ye.T,ye.zoom,ye.az-Math.PI/2);De("#zoomI").onclick=()=>Ki(ye.T,Math.min(5,ye.zoom*1.35));De("#zoomO").onclick=()=>Ki(ye.T,Math.max(.35,ye.zoom/1.35));De("#fit").onclick=()=>Pa(!0);const xc=()=>{Gn()};try{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",xc)}catch{}new MutationObserver(xc).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});function _c(i){ng(i),ui();for(const e of ii.values()){if(!e.on||!e.target)continue;const t=e.g.position;t.x+=(e.target.x-t.x)*.12,t.z+=(e.target.z-t.z)*.12;let n=e.target.ry-e.g.rotation.y;n=Math.atan2(Math.sin(n),Math.cos(n)),e.g.rotation.y+=n*.15}on.render(_i,Qt),tg(),requestAnimationFrame(_c)}function vc(i){De("#app").hidden=!0,De("#login").hidden=!1;const e=De("#msLogin");e.disabled=!Bn.available,De("#msNote").textContent=Bn.available?"":"(disponible une fois le site déployé)",De("#accounts").innerHTML=qe.accounts().map(t=>'<button class="acc" data-login="'+t.id+'">'+Xn(t)+'<span class="txt"><span class="nm" style="display:block">'+oe(t.name)+'</span><span class="sub" style="display:block">'+(t.role==="admin"?"Administratrice · modélise le plan, gère les comptes":oe(t.title)+" · consulte le plan")+'</span></span><span class="tag'+(t.role==="admin"?" admin":"")+'">'+(t.role==="admin"?"Admin":"Utilisateur")+"</span></button>").join(""),De("#loginErr").hidden=!i,De("#loginErr").textContent=i||""}De("#accounts").addEventListener("click",i=>{const e=i.target.closest("[data-login]");e&&Na(e.dataset.login)});function Ag(){A.tab="live",A.sel=null,De("#login").hidden=!0,De("#app").hidden=!1;for(const i of[De("#play"),De("#clockR")])i.hidden=Kl;De("#clockMode").textContent="Simulation",requestAnimationFrame(()=>{rc(),Gn(),Pa(!1),ui(),be()})}function Na(i){A.me=Lt(i),Da.set("etage-me",i),Ag()}function Cg(){qe.onChange=()=>{jn(),!At&&A.me&&be()},qe.onError=i=>Mt(i)}async function Lg(){sc(),requestAnimationFrame(_c);const i=new URLSearchParams(location.search),e=i.get("auth_error"),t=i.has("connected");(e||t)&&history.replaceState(null,"",location.pathname),Cg(),Z=await qe.load();const n=Da.get("etage-me");n&&Lt(n)&&!e?Na(n):vc(e)}Lg();window.__etage={S:A,DATA:()=>Z,login:Na,setTime:Fa,openPlanning:Ss,get SRC(){return qe}};
