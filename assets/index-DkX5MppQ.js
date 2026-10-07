(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ya="170",En={ROTATE:0,DOLLY:1,PAN:2},zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yc=0,yo=1,qc=2,Yl=1,ql=2,_n=3,Vn=0,De=1,vn=2,kn=0,Ci=1,bo=2,To=3,Ao=4,jc=5,ei=100,Zc=101,Kc=102,$c=103,Jc=104,Qc=200,th=201,eh=202,nh=203,Qr=204,ta=205,ih=206,sh=207,rh=208,ah=209,oh=210,lh=211,ch=212,hh=213,uh=214,ea=0,na=1,ia=2,Ii=3,sa=4,ra=5,aa=6,oa=7,jl=0,dh=1,fh=2,Hn=0,ph=1,mh=2,_h=3,Zl=4,gh=5,xh=6,vh=7,Kl=300,Ni=301,Fi=302,la=303,ca=304,ar=306,ls=1e3,ii=1001,ha=1002,$e=1003,Mh=1004,Es=1005,nn=1006,xr=1007,si=1008,bn=1009,$l=1010,Jl=1011,cs=1012,qa=1013,ri=1014,Mn=1015,ms=1016,ja=1017,Za=1018,Oi=1020,Ql=35902,tc=1021,ec=1022,Ke=1023,nc=1024,ic=1025,Pi=1026,zi=1027,sc=1028,Ka=1029,rc=1030,$a=1031,Ja=1033,Ys=33776,qs=33777,js=33778,Zs=33779,ua=35840,da=35841,fa=35842,pa=35843,ma=36196,_a=37492,ga=37496,xa=37808,va=37809,Ma=37810,Sa=37811,Ea=37812,ya=37813,ba=37814,Ta=37815,Aa=37816,wa=37817,Ra=37818,Ca=37819,Pa=37820,Da=37821,Ks=36492,La=36494,Ua=36495,ac=36283,Ia=36284,Na=36285,Fa=36286,Sh=3200,Eh=3201,oc=0,yh=1,On="",we="srgb",Gi="srgb-linear",or="linear",Jt="srgb",ui=7680,wo=519,bh=512,Th=513,Ah=514,lc=515,wh=516,Rh=517,Ch=518,Ph=519,Ro=35044,Co="300 es",Sn=2e3,Qs=2001;class li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Po=1234567;const ss=Math.PI/180,hs=180/Math.PI;function Vi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]).toLowerCase()}function ye(n,t,e){return Math.max(t,Math.min(e,n))}function Qa(n,t){return(n%t+t)%t}function Dh(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Lh(n,t,e){return n!==t?(e-n)/(t-n):0}function rs(n,t,e){return(1-e)*n+e*t}function Uh(n,t,e,i){return rs(n,t,1-Math.exp(-e*i))}function Ih(n,t=1){return t-Math.abs(Qa(n,t*2)-t)}function Nh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Fh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Oh(n,t){return n+Math.floor(Math.random()*(t-n+1))}function zh(n,t){return n+Math.random()*(t-n)}function Bh(n){return n*(.5-Math.random())}function kh(n){n!==void 0&&(Po=n);let t=Po+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hh(n){return n*ss}function Gh(n){return n*hs}function Vh(n){return(n&n-1)===0&&n!==0}function Wh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yh(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),f=r((t-i)/2),d=a((t-i)/2),m=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ai(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Te(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const to={DEG2RAD:ss,RAD2DEG:hs,generateUUID:Vi,clamp:ye,euclideanModulo:Qa,mapLinear:Dh,inverseLerp:Lh,lerp:rs,damp:Uh,pingpong:Ih,smoothstep:Nh,smootherstep:Fh,randInt:Oh,randFloat:zh,randFloatSpread:Bh,seededRandom:kh,degToRad:Hh,radToDeg:Gh,isPowerOfTwo:Vh,ceilPowerOfTwo:Wh,floorPowerOfTwo:Xh,setQuaternionFromProperEuler:Yh,normalize:Te,denormalize:Ai};class Pt{constructor(t=0,e=0){Pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,i,s,r,a,o,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],_=i[8],g=s[0],p=s[3],h=s[6],b=s[1],T=s[4],S=s[7],N=s[2],w=s[5],A=s[8];return r[0]=a*g+o*b+l*N,r[3]=a*p+o*T+l*w,r[6]=a*h+o*S+l*A,r[1]=c*g+u*b+f*N,r[4]=c*p+u*T+f*w,r[7]=c*h+u*S+f*A,r[2]=d*g+m*b+_*N,r[5]=d*p+m*T+_*w,r[8]=d*h+m*S+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,d=o*l-u*r,m=c*r-a*l,_=e*f+i*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(s*c-u*i)*g,t[2]=(o*i-s*a)*g,t[3]=d*g,t[4]=(u*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=m*g,t[7]=(i*l-c*e)*g,t[8]=(a*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(vr.makeScale(t,e)),this}rotate(t){return this.premultiply(vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vr=new It;function cc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function tr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qh(){const n=tr("canvas");return n.style.display="block",n}const Do={};function es(n){n in Do||(Do[n]=!0,console.warn(n))}function jh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Zh(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Kh(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Jt&&(n.r=yn(n.r),n.g=yn(n.g),n.b=yn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Jt&&(n.r=Di(n.r),n.g=Di(n.g),n.b=Di(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===On?or:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Di(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Lo=[.64,.33,.3,.6,.15,.06],Uo=[.2126,.7152,.0722],Io=[.3127,.329],No=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fo=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Gi]:{primaries:Lo,whitePoint:Io,transfer:or,toXYZ:No,fromXYZ:Fo,luminanceCoefficients:Uo,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:Lo,whitePoint:Io,transfer:Jt,toXYZ:No,fromXYZ:Fo,luminanceCoefficients:Uo,outputColorSpaceConfig:{drawingBufferColorSpace:we}}});let di;class $h{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{di===void 0&&(di=tr("canvas")),di.width=t.width,di.height=t.height;const i=di.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=tr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(yn(e[i]/255)*255):e[i]=yn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jh=0;class hc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mr(s[a].image)):r.push(Mr(s[a]))}else r=Mr(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Mr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$h.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qh=0;class Re extends li{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,i=ii,s=ii,r=nn,a=si,o=Ke,l=bn,c=Re.DEFAULT_ANISOTROPY,u=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Vi(),this.name="",this.source=new hc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ls:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ls:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=Kl;Re.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],_=l[9],g=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,S=(m+1)/2,N=(h+1)/2,w=(u+d)/4,A=(f+g)/4,I=(_+p)/4;return T>S&&T>N?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=w/i,r=A/i):S>N?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=w/s,r=I/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=A/r,s=I/r),this.set(i,s,r,e),this}let b=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(f-g)/b,this.z=(d-u)/b,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tu extends li{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Re(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends tu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class uc extends Re{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class eu extends Re{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[a+0],m=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==d||c!==m||u!==_){let p=1-o;const h=l*d+c*m+u*_+f*g,b=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const N=Math.sqrt(T),w=Math.atan2(N,h*b);p=Math.sin(p*w)/N,o=Math.sin(o*w)/N}const S=o*b;if(l=l*p+d*S,c=c*p+m*S,u=u*p+_*S,f=f*p+g*S,p===1-o){const N=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=N,c*=N,u*=N,f*=N}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+u*f+l*m-c*d,t[e+1]=l*_+u*d+c*f-o*m,t[e+2]=c*_+u*m+o*d-l*f,t[e+3]=u*_-o*f-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),d=l(i/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"YZX":this._x=d*u*f+c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f-d*m*_;break;case"XZY":this._x=d*u*f-c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Sr.copy(this).projectOnVector(t),this.sub(Sr)}reflect(t){return this.sub(Sr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sr=new P,Oo=new oi;class _s{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ye):Ye.fromBufferAttribute(r,a),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ys.copy(i.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zi),bs.subVectors(this.max,Zi),fi.subVectors(t.a,Zi),pi.subVectors(t.b,Zi),mi.subVectors(t.c,Zi),Pn.subVectors(pi,fi),Dn.subVectors(mi,pi),jn.subVectors(fi,mi);let e=[0,-Pn.z,Pn.y,0,-Dn.z,Dn.y,0,-jn.z,jn.y,Pn.z,0,-Pn.x,Dn.z,0,-Dn.x,jn.z,0,-jn.x,-Pn.y,Pn.x,0,-Dn.y,Dn.x,0,-jn.y,jn.x,0];return!Er(e,fi,pi,mi,bs)||(e=[1,0,0,0,1,0,0,0,1],!Er(e,fi,pi,mi,bs))?!1:(Ts.crossVectors(Pn,Dn),e=[Ts.x,Ts.y,Ts.z],Er(e,fi,pi,mi,bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new P,new P,new P,new P,new P,new P,new P,new P],Ye=new P,ys=new _s,fi=new P,pi=new P,mi=new P,Pn=new P,Dn=new P,jn=new P,Zi=new P,bs=new P,Ts=new P,Zn=new P;function Er(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Zn.fromArray(n,r);const o=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),l=t.dot(Zn),c=e.dot(Zn),u=i.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const nu=new _s,Ki=new P,yr=new P;class lr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):nu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ki.subVectors(t,this.center);const e=Ki.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ki,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ki.copy(t.center).add(yr)),this.expandByPoint(Ki.copy(t.center).sub(yr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new P,br=new P,As=new P,Ln=new P,Tr=new P,ws=new P,Ar=new P;class cr{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){br.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(br);const r=t.distanceTo(e)*.5,a=-this.direction.dot(As),o=Ln.dot(this.direction),l=-Ln.dot(As),c=Ln.lengthSq(),u=Math.abs(1-a*a);let f,d,m,_;if(u>0)if(f=a*l-o,d=a*o-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(br).addScaledVector(As,d),m}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const i=dn.dot(this.direction),s=dn.dot(dn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,i,s,r){Tr.subVectors(e,t),ws.subVectors(i,t),Ar.crossVectors(Tr,ws);let a=this.direction.dot(Ar),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,t);const l=o*this.direction.dot(ws.crossVectors(Ln,ws));if(l<0)return null;const c=o*this.direction.dot(Tr.cross(Ln));if(c<0||l+c>a)return null;const u=-o*Ln.dot(Ar);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,i,s,r,a,o,l,c,u,f,d,m,_,g,p){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,f,d,m,_,g,p)}set(t,e,i,s,r,a,o,l,c,u,f,d,m,_,g,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=_,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/_i.setFromMatrixColumn(t,0).length(),r=1/_i.setFromMatrixColumn(t,1).length(),a=1/_i.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*u,m=a*f,_=o*u,g=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=m+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,m=l*f,_=c*u,g=c*f;e[0]=d+g*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=m*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,m=l*f,_=c*u,g=c*f;e[0]=d-g*o,e[4]=-a*f,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*u,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,m=a*f,_=o*u,g=o*f;e[0]=l*u,e[4]=_*c-m,e[8]=d*c+g,e[1]=l*f,e[5]=g*c+d,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-d*f,e[8]=_*f+m,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*f+_,e[10]=d-g*f}else if(t.order==="XZY"){const d=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+g,e[5]=a*u,e[9]=m*f-_,e[2]=_*f-m,e[6]=o*u,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iu,t,su)}lookAt(t,e,i){const s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),Un.crossVectors(i,Ue),Un.lengthSq()===0&&(Math.abs(i.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),Un.crossVectors(i,Ue)),Un.normalize(),Rs.crossVectors(Ue,Un),s[0]=Un.x,s[4]=Rs.x,s[8]=Ue.x,s[1]=Un.y,s[5]=Rs.y,s[9]=Ue.y,s[2]=Un.z,s[6]=Rs.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],_=i[2],g=i[6],p=i[10],h=i[14],b=i[3],T=i[7],S=i[11],N=i[15],w=s[0],A=s[4],I=s[8],E=s[12],M=s[1],R=s[5],k=s[9],B=s[13],Y=s[2],$=s[6],X=s[10],Q=s[14],G=s[3],rt=s[7],dt=s[11],Et=s[15];return r[0]=a*w+o*M+l*Y+c*G,r[4]=a*A+o*R+l*$+c*rt,r[8]=a*I+o*k+l*X+c*dt,r[12]=a*E+o*B+l*Q+c*Et,r[1]=u*w+f*M+d*Y+m*G,r[5]=u*A+f*R+d*$+m*rt,r[9]=u*I+f*k+d*X+m*dt,r[13]=u*E+f*B+d*Q+m*Et,r[2]=_*w+g*M+p*Y+h*G,r[6]=_*A+g*R+p*$+h*rt,r[10]=_*I+g*k+p*X+h*dt,r[14]=_*E+g*B+p*Q+h*Et,r[3]=b*w+T*M+S*Y+N*G,r[7]=b*A+T*R+S*$+N*rt,r[11]=b*I+T*k+S*X+N*dt,r[15]=b*E+T*B+S*Q+N*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],m=t[14],_=t[3],g=t[7],p=t[11],h=t[15];return _*(+r*l*f-s*c*f-r*o*d+i*c*d+s*o*m-i*l*m)+g*(+e*l*m-e*c*d+r*a*d-s*a*m+s*c*u-r*l*u)+p*(+e*c*f-e*o*m-r*a*f+i*a*m+r*o*u-i*c*u)+h*(-s*o*u-e*l*f+e*o*d+s*a*f-i*a*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],m=t[11],_=t[12],g=t[13],p=t[14],h=t[15],b=f*p*c-g*d*c+g*l*m-o*p*m-f*l*h+o*d*h,T=_*d*c-u*p*c-_*l*m+a*p*m+u*l*h-a*d*h,S=u*g*c-_*f*c+_*o*m-a*g*m-u*o*h+a*f*h,N=_*f*l-u*g*l-_*o*d+a*g*d+u*o*p-a*f*p,w=e*b+i*T+s*S+r*N;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=b*A,t[1]=(g*d*r-f*p*r-g*s*m+i*p*m+f*s*h-i*d*h)*A,t[2]=(o*p*r-g*l*r+g*s*c-i*p*c-o*s*h+i*l*h)*A,t[3]=(f*l*r-o*d*r-f*s*c+i*d*c+o*s*m-i*l*m)*A,t[4]=T*A,t[5]=(u*p*r-_*d*r+_*s*m-e*p*m-u*s*h+e*d*h)*A,t[6]=(_*l*r-a*p*r-_*s*c+e*p*c+a*s*h-e*l*h)*A,t[7]=(a*d*r-u*l*r+u*s*c-e*d*c-a*s*m+e*l*m)*A,t[8]=S*A,t[9]=(_*f*r-u*g*r-_*i*m+e*g*m+u*i*h-e*f*h)*A,t[10]=(a*g*r-_*o*r+_*i*c-e*g*c-a*i*h+e*o*h)*A,t[11]=(u*o*r-a*f*r-u*i*c+e*f*c+a*i*m-e*o*m)*A,t[12]=N*A,t[13]=(u*g*s-_*f*s+_*i*d-e*g*d-u*i*p+e*f*p)*A,t[14]=(_*o*s-a*g*s-_*i*l+e*g*l+a*i*p-e*o*p)*A,t[15]=(a*f*s-u*o*s+u*i*l-e*f*l-a*i*d+e*o*d)*A,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,d=r*c,m=r*u,_=r*f,g=a*u,p=a*f,h=o*f,b=l*c,T=l*u,S=l*f,N=i.x,w=i.y,A=i.z;return s[0]=(1-(g+h))*N,s[1]=(m+S)*N,s[2]=(_-T)*N,s[3]=0,s[4]=(m-S)*w,s[5]=(1-(d+h))*w,s[6]=(p+b)*w,s[7]=0,s[8]=(_+T)*A,s[9]=(p-b)*A,s[10]=(1-(d+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=_i.set(s[0],s[1],s[2]).length();const a=_i.set(s[4],s[5],s[6]).length(),o=_i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qe.copy(this);const c=1/r,u=1/a,f=1/o;return qe.elements[0]*=c,qe.elements[1]*=c,qe.elements[2]*=c,qe.elements[4]*=u,qe.elements[5]*=u,qe.elements[6]*=u,qe.elements[8]*=f,qe.elements[9]*=f,qe.elements[10]*=f,e.setFromRotationMatrix(qe),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Sn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s);let m,_;if(o===Sn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Qs)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Sn){const l=this.elements,c=1/(e-t),u=1/(i-s),f=1/(a-r),d=(e+t)*c,m=(i+s)*u;let _,g;if(o===Sn)_=(a+r)*f,g=-2*f;else if(o===Qs)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const _i=new P,qe=new ie,iu=new P(0,0,0),su=new P(1,1,1),Un=new P,Rs=new P,Ue=new P,zo=new ie,Bo=new oi;class rn{constructor(t=0,e=0,i=0,s=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return zo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class eo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ru=0;const ko=new P,gi=new oi,fn=new ie,Cs=new P,$i=new P,au=new P,ou=new oi,Ho=new P(1,0,0),Go=new P(0,1,0),Vo=new P(0,0,1),Wo={type:"added"},lu={type:"removed"},xi={type:"childadded",child:null},wr={type:"childremoved",child:null};class pe extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new P,e=new rn,i=new oi,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new It}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(Ho,t)}rotateY(t){return this.rotateOnAxis(Go,t)}rotateZ(t){return this.rotateOnAxis(Vo,t)}translateOnAxis(t,e){return ko.copy(t).applyQuaternion(this.quaternion),this.position.add(ko.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ho,t)}translateY(t){return this.translateOnAxis(Go,t)}translateZ(t){return this.translateOnAxis(Vo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Cs.copy(t):Cs.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt($i,Cs,this.up):fn.lookAt(Cs,$i,this.up),this.quaternion.setFromRotationMatrix(fn),s&&(fn.extractRotation(s.matrixWorld),gi.setFromRotationMatrix(fn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wo),xi.child=t,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lu),wr.child=t,this.dispatchEvent(wr),wr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wo),xi.child=t,this.dispatchEvent(xi),xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,t,au),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,ou,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}pe.DEFAULT_UP=new P(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new P,pn=new P,Rr=new P,mn=new P,vi=new P,Mi=new P,Xo=new P,Cr=new P,Pr=new P,Dr=new P,Lr=new he,Ur=new he,Ir=new he;class Ze{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),je.subVectors(t,e),s.cross(je);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){je.subVectors(s,e),pn.subVectors(i,e),Rr.subVectors(t,e);const a=je.dot(je),o=je.dot(pn),l=je.dot(Rr),c=pn.dot(pn),u=pn.dot(Rr),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,m=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Lr.setScalar(0),Ur.setScalar(0),Ir.setScalar(0),Lr.fromBufferAttribute(t,e),Ur.fromBufferAttribute(t,i),Ir.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Lr,r.x),a.addScaledVector(Ur,r.y),a.addScaledVector(Ir,r.z),a}static isFrontFacing(t,e,i,s){return je.subVectors(i,e),pn.subVectors(t,e),je.cross(pn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),je.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;vi.subVectors(s,i),Mi.subVectors(r,i),Cr.subVectors(t,i);const l=vi.dot(Cr),c=Mi.dot(Cr);if(l<=0&&c<=0)return e.copy(i);Pr.subVectors(t,s);const u=vi.dot(Pr),f=Mi.dot(Pr);if(u>=0&&f<=u)return e.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(vi,a);Dr.subVectors(t,r);const m=vi.dot(Dr),_=Mi.dot(Dr);if(_>=0&&m<=_)return e.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Mi,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return Xo.subVectors(r,s),o=(f-u)/(f-u+(m-_)),e.copy(s).addScaledVector(Xo,o);const h=1/(p+g+d);return a=g*h,o=d*h,e.copy(i).addScaledVector(vi,a).addScaledVector(Mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Nr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Yt.workingColorSpace){if(t=Qa(t,1),e=ye(e,0,1),i=ye(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Nr(a,r,t+1/3),this.g=Nr(a,r,t),this.b=Nr(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=we){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){const i=dc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return Yt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(ye(Ee.r*255,0,255))*65536+Math.round(ye(Ee.g*255,0,255))*256+Math.round(ye(Ee.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ee.copy(this),e);const i=Ee.r,s=Ee.g,r=Ee.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=we){Yt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,i=Ee.g,s=Ee.b;return t!==we?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(Ps);const i=rs(In.h,Ps.h,e),s=rs(In.s,Ps.s,e),r=rs(In.l,Ps.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Vt;Vt.NAMES=dc;let cu=0;class Wi extends li{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Vi(),this.name="",this.blending=Ci,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=ta,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(i.blending=this.blending),this.side!==Vn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qr&&(i.blendSrc=this.blendSrc),this.blendDst!==ta&&(i.blendDst=this.blendDst),this.blendEquation!==ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class er extends Wi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new P,Ds=new Pt;class sn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ro,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ds.fromBufferAttribute(this,e),Ds.applyMatrix3(t),this.setXY(e,Ds.x,Ds.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Te(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ro&&(t.usage=this.usage),t}}class fc extends sn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class pc extends sn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class be extends sn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let hu=0;const Be=new ie,Fr=new pe,Si=new P,Ie=new _s,Ji=new _s,ge=new P;class Fe extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cc(t)?pc:fc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new It().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,i){return Be.makeTranslation(t,e,i),this.applyMatrix4(Be),this}scale(t,e,i){return Be.makeScale(t,e,i),this.applyMatrix4(Be),this}lookAt(t){return Fr.lookAt(t),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new be(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ie.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Ie.min,Ji.min),Ie.expandByPoint(ge),ge.addVectors(Ie.max,Ji.max),Ie.expandByPoint(ge)):(Ie.expandByPoint(Ji.min),Ie.expandByPoint(Ji.max))}Ie.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ge));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ge.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(t,c),ge.add(Si)),s=Math.max(s,i.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new P,l[I]=new P;const c=new P,u=new P,f=new P,d=new Pt,m=new Pt,_=new Pt,g=new P,p=new P;function h(I,E,M){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),d.fromBufferAttribute(r,I),m.fromBufferAttribute(r,E),_.fromBufferAttribute(r,M),u.sub(c),f.sub(c),m.sub(d),_.sub(d);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(R),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(R),o[I].add(g),o[E].add(g),o[M].add(g),l[I].add(p),l[E].add(p),l[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let I=0,E=b.length;I<E;++I){const M=b[I],R=M.start,k=M.count;for(let B=R,Y=R+k;B<Y;B+=3)h(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const T=new P,S=new P,N=new P,w=new P;function A(I){N.fromBufferAttribute(s,I),w.copy(N);const E=o[I];T.copy(E),T.sub(N.multiplyScalar(N.dot(E))).normalize(),S.crossVectors(w,E);const R=S.dot(l[I])<0?-1:1;a.setXYZW(I,T.x,T.y,T.z,R)}for(let I=0,E=b.length;I<E;++I){const M=b[I],R=M.start,k=M.count;for(let B=R,Y=R+k;B<Y;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,f=new P;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let h=0;h<u;h++)d[_++]=c[m++]}return new sn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=t(d,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yo=new ie,Kn=new cr,Ls=new lr,qo=new P,Us=new P,Is=new P,Ns=new P,Or=new P,Fs=new P,jo=new P,Os=new P;class xe extends pe{constructor(t=new Fe,e=new er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Or.fromBufferAttribute(f,t),a?Fs.addScaledVector(Or,u):Fs.addScaledVector(Or.sub(e),u))}e.add(Fs)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(r),Kn.copy(t.ray).recast(t.near),!(Ls.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Ls,qo)===null||Kn.origin.distanceToSquared(qo)>(t.far-t.near)**2))&&(Yo.copy(r).invert(),Kn.copy(t.ray).applyMatrix4(Yo),!(i.boundingBox!==null&&Kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],h=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,N=T;S<N;S+=3){const w=o.getX(S),A=o.getX(S+1),I=o.getX(S+2);s=zs(this,h,t,i,c,u,f,w,A,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const b=o.getX(p),T=o.getX(p+1),S=o.getX(p+2);s=zs(this,a,t,i,c,u,f,b,T,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],h=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,N=T;S<N;S+=3){const w=S,A=S+1,I=S+2;s=zs(this,h,t,i,c,u,f,w,A,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const b=p,T=p+1,S=p+2;s=zs(this,a,t,i,c,u,f,b,T,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function uu(n,t,e,i,s,r,a,o){let l;if(t.side===De?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Vn,o),l===null)return null;Os.copy(o),Os.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Os);return c<e.near||c>e.far?null:{distance:c,point:Os.clone(),object:n}}function zs(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Us),n.getVertexPosition(l,Is),n.getVertexPosition(c,Ns);const u=uu(n,t,e,i,Us,Is,Ns,jo);if(u){const f=new P;Ze.getBarycoord(jo,Us,Is,Ns,f),s&&(u.uv=Ze.getInterpolatedAttribute(s,o,l,c,f,new Pt)),r&&(u.uv1=Ze.getInterpolatedAttribute(r,o,l,c,f,new Pt)),a&&(u.normal=Ze.getInterpolatedAttribute(a,o,l,c,f,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};Ze.getNormal(Us,Is,Ns,d.normal),u.face=d,u.barycoord=f}return u}class on extends Fe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(f,2));function _(g,p,h,b,T,S,N,w,A,I,E){const M=S/A,R=N/I,k=S/2,B=N/2,Y=w/2,$=A+1,X=I+1;let Q=0,G=0;const rt=new P;for(let dt=0;dt<X;dt++){const Et=dt*R-B;for(let Ot=0;Ot<$;Ot++){const te=Ot*M-k;rt[g]=te*b,rt[p]=Et*T,rt[h]=Y,c.push(rt.x,rt.y,rt.z),rt[g]=0,rt[p]=0,rt[h]=w>0?1:-1,u.push(rt.x,rt.y,rt.z),f.push(Ot/A),f.push(1-dt/I),Q+=1}}for(let dt=0;dt<I;dt++)for(let Et=0;Et<A;Et++){const Ot=d+Et+$*dt,te=d+Et+$*(dt+1),j=d+(Et+1)+$*(dt+1),nt=d+(Et+1)+$*dt;l.push(Ot,te,nt),l.push(te,j,nt),G+=6}o.addGroup(m,G,E),m+=G,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ae(n){const t={};for(let e=0;e<n.length;e++){const i=Bi(n[e]);for(const s in i)t[s]=i[s]}return t}function du(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function mc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const fu={clone:Bi,merge:Ae};var pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Wi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pu,this.fragmentShader=mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=du(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class _c extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new P,Zo=new Pt,Ko=new Pt;class Ve extends _c{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,Zo,Ko),e.subVectors(Ko,Zo)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ss*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ei=-90,yi=1;class _u extends pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ve(Ei,yi,t,e);s.layers=this.layers,this.add(s);const r=new Ve(Ei,yi,t,e);r.layers=this.layers,this.add(r);const a=new Ve(Ei,yi,t,e);a.layers=this.layers,this.add(a);const o=new Ve(Ei,yi,t,e);o.layers=this.layers,this.add(o);const l=new Ve(Ei,yi,t,e);l.layers=this.layers,this.add(l);const c=new Ve(Ei,yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Sn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,d,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class gc extends Re{constructor(t,e,i,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ni,super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gu extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new gc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new on(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:Bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:De,blending:kn});r.uniforms.tEquirect.value=e;const a=new xe(s,r),o=e.minFilter;return e.minFilter===si&&(e.minFilter=nn),new _u(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const zr=new P,xu=new P,vu=new It;class xn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=zr.subVectors(i,e).cross(xu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(zr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||vu.getNormalMatrix(t),s=this.coplanarPoint(zr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new lr,Bs=new P;class no{constructor(t=new xn,e=new xn,i=new xn,s=new xn,r=new xn,a=new xn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Sn){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],m=s[8],_=s[9],g=s[10],p=s[11],h=s[12],b=s[13],T=s[14],S=s[15];if(i[0].setComponents(l-r,d-c,p-m,S-h).normalize(),i[1].setComponents(l+r,d+c,p+m,S+h).normalize(),i[2].setComponents(l+a,d+u,p+_,S+b).normalize(),i[3].setComponents(l-a,d-u,p-_,S-b).normalize(),i[4].setComponents(l-o,d-f,p-g,S-T).normalize(),e===Sn)i[5].setComponents(l+o,d+f,p+g,S+T).normalize();else if(e===Qs)i[5].setComponents(o,f,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Bs.x=s.normal.x>0?t.max.x:t.min.x,Bs.y=s.normal.y>0?t.max.y:t.min.y,Bs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xc(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Mu(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<f.length;m++){const _=f[d],g=f[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,f[d]=g)}f.length=d+1;for(let m=0,_=f.length;m<_;m++){const g=f[m];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class ci extends Fe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=t/o,d=e/l,m=[],_=[],g=[],p=[];for(let h=0;h<u;h++){const b=h*d-a;for(let T=0;T<c;T++){const S=T*f-r;_.push(S,-b,0),g.push(0,0,1),p.push(T/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const T=b+c*h,S=b+c*(h+1),N=b+1+c*(h+1),w=b+1+c*h;m.push(T,S,w),m.push(S,N,w)}this.setIndex(m),this.setAttribute("position",new be(_,3)),this.setAttribute("normal",new be(g,3)),this.setAttribute("uv",new be(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.width,t.height,t.widthSegments,t.heightSegments)}}var Su=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ru=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Du=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Iu=`#ifdef USE_IRIDESCENCE
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
#endif`,Nu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wu=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Yu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ku=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$u="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ju=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ed=`#ifdef USE_ENVMAP
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
#endif`,nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,od=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ld=`#ifdef USE_GRADIENTMAP
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
}`,cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,fd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,md=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Md=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ud=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Id=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ef=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,af=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hf=`#ifdef USE_SKINNING
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
#endif`,uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_f=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ef=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Rf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Pf=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,zf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,kf=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Wf=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Yf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,jf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Su,alphahash_pars_fragment:Eu,alphamap_fragment:yu,alphamap_pars_fragment:bu,alphatest_fragment:Tu,alphatest_pars_fragment:Au,aomap_fragment:wu,aomap_pars_fragment:Ru,batching_pars_vertex:Cu,batching_vertex:Pu,begin_vertex:Du,beginnormal_vertex:Lu,bsdfs:Uu,iridescence_fragment:Iu,bumpmap_pars_fragment:Nu,clipping_planes_fragment:Fu,clipping_planes_pars_fragment:Ou,clipping_planes_pars_vertex:zu,clipping_planes_vertex:Bu,color_fragment:ku,color_pars_fragment:Hu,color_pars_vertex:Gu,color_vertex:Vu,common:Wu,cube_uv_reflection_fragment:Xu,defaultnormal_vertex:Yu,displacementmap_pars_vertex:qu,displacementmap_vertex:ju,emissivemap_fragment:Zu,emissivemap_pars_fragment:Ku,colorspace_fragment:$u,colorspace_pars_fragment:Ju,envmap_fragment:Qu,envmap_common_pars_fragment:td,envmap_pars_fragment:ed,envmap_pars_vertex:nd,envmap_physical_pars_fragment:fd,envmap_vertex:id,fog_vertex:sd,fog_pars_vertex:rd,fog_fragment:ad,fog_pars_fragment:od,gradientmap_pars_fragment:ld,lightmap_pars_fragment:cd,lights_lambert_fragment:hd,lights_lambert_pars_fragment:ud,lights_pars_begin:dd,lights_toon_fragment:pd,lights_toon_pars_fragment:md,lights_phong_fragment:_d,lights_phong_pars_fragment:gd,lights_physical_fragment:xd,lights_physical_pars_fragment:vd,lights_fragment_begin:Md,lights_fragment_maps:Sd,lights_fragment_end:Ed,logdepthbuf_fragment:yd,logdepthbuf_pars_fragment:bd,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:Ad,map_fragment:wd,map_pars_fragment:Rd,map_particle_fragment:Cd,map_particle_pars_fragment:Pd,metalnessmap_fragment:Dd,metalnessmap_pars_fragment:Ld,morphinstance_vertex:Ud,morphcolor_vertex:Id,morphnormal_vertex:Nd,morphtarget_pars_vertex:Fd,morphtarget_vertex:Od,normal_fragment_begin:zd,normal_fragment_maps:Bd,normal_pars_fragment:kd,normal_pars_vertex:Hd,normal_vertex:Gd,normalmap_pars_fragment:Vd,clearcoat_normal_fragment_begin:Wd,clearcoat_normal_fragment_maps:Xd,clearcoat_pars_fragment:Yd,iridescence_pars_fragment:qd,opaque_fragment:jd,packing:Zd,premultiplied_alpha_fragment:Kd,project_vertex:$d,dithering_fragment:Jd,dithering_pars_fragment:Qd,roughnessmap_fragment:tf,roughnessmap_pars_fragment:ef,shadowmap_pars_fragment:nf,shadowmap_pars_vertex:sf,shadowmap_vertex:rf,shadowmask_pars_fragment:af,skinbase_vertex:of,skinning_pars_vertex:lf,skinning_vertex:cf,skinnormal_vertex:hf,specularmap_fragment:uf,specularmap_pars_fragment:df,tonemapping_fragment:ff,tonemapping_pars_fragment:pf,transmission_fragment:mf,transmission_pars_fragment:_f,uv_pars_fragment:gf,uv_pars_vertex:xf,uv_vertex:vf,worldpos_vertex:Mf,background_vert:Sf,background_frag:Ef,backgroundCube_vert:yf,backgroundCube_frag:bf,cube_vert:Tf,cube_frag:Af,depth_vert:wf,depth_frag:Rf,distanceRGBA_vert:Cf,distanceRGBA_frag:Pf,equirect_vert:Df,equirect_frag:Lf,linedashed_vert:Uf,linedashed_frag:If,meshbasic_vert:Nf,meshbasic_frag:Ff,meshlambert_vert:Of,meshlambert_frag:zf,meshmatcap_vert:Bf,meshmatcap_frag:kf,meshnormal_vert:Hf,meshnormal_frag:Gf,meshphong_vert:Vf,meshphong_frag:Wf,meshphysical_vert:Xf,meshphysical_frag:Yf,meshtoon_vert:qf,meshtoon_frag:jf,points_vert:Zf,points_frag:Kf,shadow_vert:$f,shadow_frag:Jf,sprite_vert:Qf,sprite_frag:tp},it={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},en={basic:{uniforms:Ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ae([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ae([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ae([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ae([it.points,it.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ae([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ae([it.common,it.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ae([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ae([it.sprite,it.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ae([it.common,it.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ae([it.lights,it.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};en.physical={uniforms:Ae([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const ks={r:0,b:0,g:0},Jn=new rn,ep=new ie;function np(n,t,e,i,s,r,a){const o=new Vt(0);let l=r===!0?0:1,c,u,f=null,d=0,m=null;function _(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?e:t).get(T)),T}function g(b){let T=!1;const S=_(b);S===null?h(o,l):S&&S.isColor&&(h(S,1),T=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,T){const S=_(T);S&&(S.isCubeTexture||S.mapping===ar)?(u===void 0&&(u=new xe(new on(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Bi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Jn.copy(T.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ep.makeRotationFromEuler(Jn)),u.material.toneMapped=Yt.getTransfer(S.colorSpace)!==Jt,(f!==S||d!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new xe(new ci(2,2),new Wn({name:"BackgroundMaterial",uniforms:Bi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(S.colorSpace)!==Jt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,T){b.getRGB(ks,mc(n)),i.buffers.color.setClear(ks.r,ks.g,ks.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(b,T=1){o.set(b),l=T,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(o,l)},render:g,addToRenderList:p}}function ip(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(M,R,k,B,Y){let $=!1;const X=f(B,k,R);r!==X&&(r=X,c(r.object)),$=m(M,B,k,Y),$&&_(M,B,k,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(M,R,k,B),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,R,k){const B=k.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let $=Y[R.id];$===void 0&&($={},Y[R.id]=$);let X=$[B];return X===void 0&&(X=d(l()),$[B]=X),X}function d(M){const R=[],k=[],B=[];for(let Y=0;Y<e;Y++)R[Y]=0,k[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:B,object:M,attributes:{},index:null}}function m(M,R,k,B){const Y=r.attributes,$=R.attributes;let X=0;const Q=k.getAttributes();for(const G in Q)if(Q[G].location>=0){const dt=Y[G];let Et=$[G];if(Et===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Et=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Et=M.instanceColor)),dt===void 0||dt.attribute!==Et||Et&&dt.data!==Et.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function _(M,R,k,B){const Y={},$=R.attributes;let X=0;const Q=k.getAttributes();for(const G in Q)if(Q[G].location>=0){let dt=$[G];dt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));const Et={};Et.attribute=dt,dt&&dt.data&&(Et.data=dt.data),Y[G]=Et,X++}r.attributes=Y,r.attributesNum=X,r.index=B}function g(){const M=r.newAttributes;for(let R=0,k=M.length;R<k;R++)M[R]=0}function p(M){h(M,0)}function h(M,R){const k=r.newAttributes,B=r.enabledAttributes,Y=r.attributeDivisors;k[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),Y[M]!==R&&(n.vertexAttribDivisor(M,R),Y[M]=R)}function b(){const M=r.newAttributes,R=r.enabledAttributes;for(let k=0,B=R.length;k<B;k++)R[k]!==M[k]&&(n.disableVertexAttribArray(k),R[k]=0)}function T(M,R,k,B,Y,$,X){X===!0?n.vertexAttribIPointer(M,R,k,Y,$):n.vertexAttribPointer(M,R,k,B,Y,$)}function S(M,R,k,B){g();const Y=B.attributes,$=k.getAttributes(),X=R.defaultAttributeValues;for(const Q in $){const G=$[Q];if(G.location>=0){let rt=Y[Q];if(rt===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){const dt=rt.normalized,Et=rt.itemSize,Ot=t.get(rt);if(Ot===void 0)continue;const te=Ot.buffer,j=Ot.type,nt=Ot.bytesPerElement,vt=j===n.INT||j===n.UNSIGNED_INT||rt.gpuType===qa;if(rt.isInterleavedBufferAttribute){const at=rt.data,wt=at.stride,Dt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let zt=0;zt<G.locationSize;zt++)h(G.location+zt,at.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let zt=0;zt<G.locationSize;zt++)p(G.location+zt);n.bindBuffer(n.ARRAY_BUFFER,te);for(let zt=0;zt<G.locationSize;zt++)T(G.location+zt,Et/G.locationSize,j,dt,wt*nt,(Dt+Et/G.locationSize*zt)*nt,vt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<G.locationSize;at++)h(G.location+at,rt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<G.locationSize;at++)p(G.location+at);n.bindBuffer(n.ARRAY_BUFFER,te);for(let at=0;at<G.locationSize;at++)T(G.location+at,Et/G.locationSize,j,dt,Et*nt,Et/G.locationSize*at*nt,vt)}}else if(X!==void 0){const dt=X[Q];if(dt!==void 0)switch(dt.length){case 2:n.vertexAttrib2fv(G.location,dt);break;case 3:n.vertexAttrib3fv(G.location,dt);break;case 4:n.vertexAttrib4fv(G.location,dt);break;default:n.vertexAttrib1fv(G.location,dt)}}}}b()}function N(){I();for(const M in i){const R=i[M];for(const k in R){const B=R[k];for(const Y in B)u(B[Y].object),delete B[Y];delete R[k]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const k in R){const B=R[k];for(const Y in B)u(B[Y].object),delete B[Y];delete R[k]}delete i[M.id]}function A(M){for(const R in i){const k=i[R];if(k[M.id]===void 0)continue;const B=k[M.id];for(const Y in B)u(B[Y].object),delete B[Y];delete k[M.id]}}function I(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:N,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:p,disableUnusedAttributes:b}}function sp(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];e.update(m,i,1)}function l(c,u,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g]*d[g];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rp(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Ke&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const I=A===ms&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==bn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mn&&!I)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:N,maxSamples:w}}function ap(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new xn,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||s;return s=d,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const b=r?0:i,T=b*4;let S=h.clippingState||null;l.value=S,S=u(_,d,T,m);for(let N=0;N!==T;++N)S[N]=e[N];h.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,m,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const h=m+g*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let T=0,S=m;T!==g;++T,S+=4)a.copy(f[T]).applyMatrix4(b,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function op(n){let t=new WeakMap;function e(a,o){return o===la?a.mapping=Ni:o===ca&&(a.mapping=Fi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===la||o===ca)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new gu(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class io extends _c{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ri=4,$o=[.125,.215,.35,.446,.526,.582],ni=20,Br=new io,Jo=new Vt;let kr=null,Hr=0,Gr=0,Vr=!1;const ti=(1+Math.sqrt(5))/2,bi=1/ti,Qo=[new P(-ti,bi,0),new P(ti,bi,0),new P(-bi,0,ti),new P(bi,0,ti),new P(0,ti,-bi),new P(0,ti,bi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class tl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){kr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kr,Hr,Gr),this._renderer.xr.enabled=Vr,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ms,format:Ke,colorSpace:Gi,depthBuffer:!1},s=el(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=el(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(r)),this._blurMaterial=cp(r,t,e)}return s}_compileMaterial(t){const e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,Br)}_sceneToCubeUV(t,e,i,s){const o=new Ve(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Jo),u.toneMapping=Hn,u.autoClear=!1;const m=new er({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),_=new xe(new on,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(Jo),g=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):b===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const T=this._cubeSize;Hs(s,b*T,h>2?T:0,T,T),u.setRenderTarget(s),g&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ni||t.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new xe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Hs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Br)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qo[(s-r-1)%Qo.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new xe(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ni-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):ni;p>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ni}`);const h=[];let b=0;for(let A=0;A<ni;++A){const I=A/g,E=Math.exp(-I*I/2);h.push(E),A===0?b+=E:A<p&&(b+=2*E)}for(let A=0;A<h.length;A++)h[A]=h[A]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-i;const S=this._sizeLods[s],N=3*S*(s>T-Ri?s-T+Ri:0),w=4*(this._cubeSize-S);Hs(e,N,w,3*S,2*S),l.setRenderTarget(e),l.render(f,Br)}}function lp(n){const t=[],e=[],i=[];let s=n;const r=n-Ri+1+$o.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-Ri?l=$o[a-n+Ri-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,g=3,p=2,h=1,b=new Float32Array(g*_*m),T=new Float32Array(p*_*m),S=new Float32Array(h*_*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,I=w>2?0:-1,E=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];b.set(E,g*_*w),T.set(d,p*_*w);const M=[w,w,w,w,w,w];S.set(M,h*_*w)}const N=new Fe;N.setAttribute("position",new sn(b,g)),N.setAttribute("uv",new sn(T,p)),N.setAttribute("faceIndex",new sn(S,h)),t.push(N),s>Ri&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function el(n,t,e){const i=new ai(n,t,e);return i.texture.mapping=ar,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function cp(n,t,e){const i=new Float32Array(ni),s=new P(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:so(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function nl(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function il(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function so(){return`

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
	`}function hp(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===la||l===ca,u=l===Ni||l===Fi;if(c||u){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new tl(n)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new tl(n)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function up(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&es("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function dp(n,t,e,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,h=g.length;p<h;p++)t.remove(g[p])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,h=g.length;p<h;p++)t.update(g[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let T=0,S=b.length;T<S;T+=3){const N=b[T+0],w=b[T+1],A=b[T+2];d.push(N,w,w,A,A,N)}}else if(_!==void 0){const b=_.array;g=_.version;for(let T=0,S=b.length/3-1;T<S;T+=3){const N=T+0,w=T+1,A=T+2;d.push(N,w,w,A,A,N)}}else return;const p=new(cc(d)?pc:fc)(d,1);p.version=g;const h=r.get(f);h&&t.remove(h),r.set(f,p)}function u(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function fp(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){n.drawElements(i,m,r,d*a),e.update(m,i,1)}function c(d,m,_){_!==0&&(n.drawElementsInstanced(i,m,r,d*a,_),e.update(m,i,_))}function u(d,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,_);let p=0;for(let h=0;h<_;h++)p+=m[h];e.update(p,i,1)}function f(d,m,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/a,m[h],g[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,g,0,_);let h=0;for(let b=0;b<_;b++)h+=m[b]*g[b];e.update(h,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function pp(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function mp(n,t,e){const i=new WeakMap,s=new he;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let M=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let N=o.attributes.position.count*S,w=1;N>t.maxTextureSize&&(w=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const A=new Float32Array(N*w*4*f),I=new uc(A,N,w,f);I.type=Mn,I.needsUpdate=!0;const E=S*4;for(let R=0;R<f;R++){const k=h[R],B=b[R],Y=T[R],$=N*w*4*R;for(let X=0;X<k.count;X++){const Q=X*E;_===!0&&(s.fromBufferAttribute(k,X),A[$+Q+0]=s.x,A[$+Q+1]=s.y,A[$+Q+2]=s.z,A[$+Q+3]=0),g===!0&&(s.fromBufferAttribute(B,X),A[$+Q+4]=s.x,A[$+Q+5]=s.y,A[$+Q+6]=s.z,A[$+Q+7]=0),p===!0&&(s.fromBufferAttribute(Y,X),A[$+Q+8]=s.x,A[$+Q+9]=s.y,A[$+Q+10]=s.z,A[$+Q+11]=Y.itemSize===4?s.w:1)}}d={count:f,texture:I,size:new Pt(N,w)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function _p(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class vc extends Re{constructor(t,e,i,s,r,a,o,l,c,u=Pi){if(u!==Pi&&u!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Pi&&(i=ri),i===void 0&&u===zi&&(i=Oi),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Mc=new Re,sl=new vc(1,1),Sc=new uc,Ec=new eu,yc=new gc,rl=[],al=[],ol=new Float32Array(16),ll=new Float32Array(9),cl=new Float32Array(4);function Xi(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=rl[s];if(r===void 0&&(r=new Float32Array(s),rl[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function _e(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function hr(n,t){let e=al[t];e===void 0&&(e=new Int32Array(t),al[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function gp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function xp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2fv(this.addr,t),_e(e,t)}}function vp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;n.uniform3fv(this.addr,t),_e(e,t)}}function Mp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4fv(this.addr,t),_e(e,t)}}function Sp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(me(e,i))return;cl.set(i),n.uniformMatrix2fv(this.addr,!1,cl),_e(e,i)}}function Ep(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(me(e,i))return;ll.set(i),n.uniformMatrix3fv(this.addr,!1,ll),_e(e,i)}}function yp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(me(e,i))return;ol.set(i),n.uniformMatrix4fv(this.addr,!1,ol),_e(e,i)}}function bp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Tp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2iv(this.addr,t),_e(e,t)}}function Ap(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3iv(this.addr,t),_e(e,t)}}function wp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4iv(this.addr,t),_e(e,t)}}function Rp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Cp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2uiv(this.addr,t),_e(e,t)}}function Pp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3uiv(this.addr,t),_e(e,t)}}function Dp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4uiv(this.addr,t),_e(e,t)}}function Lp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(sl.compareFunction=lc,r=sl):r=Mc,e.setTexture2D(t||r,s)}function Up(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ec,s)}function Ip(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||yc,s)}function Np(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Sc,s)}function Fp(n){switch(n){case 5126:return gp;case 35664:return xp;case 35665:return vp;case 35666:return Mp;case 35674:return Sp;case 35675:return Ep;case 35676:return yp;case 5124:case 35670:return bp;case 35667:case 35671:return Tp;case 35668:case 35672:return Ap;case 35669:case 35673:return wp;case 5125:return Rp;case 36294:return Cp;case 36295:return Pp;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Np}}function Op(n,t){n.uniform1fv(this.addr,t)}function zp(n,t){const e=Xi(t,this.size,2);n.uniform2fv(this.addr,e)}function Bp(n,t){const e=Xi(t,this.size,3);n.uniform3fv(this.addr,e)}function kp(n,t){const e=Xi(t,this.size,4);n.uniform4fv(this.addr,e)}function Hp(n,t){const e=Xi(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Gp(n,t){const e=Xi(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Vp(n,t){const e=Xi(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Wp(n,t){n.uniform1iv(this.addr,t)}function Xp(n,t){n.uniform2iv(this.addr,t)}function Yp(n,t){n.uniform3iv(this.addr,t)}function qp(n,t){n.uniform4iv(this.addr,t)}function jp(n,t){n.uniform1uiv(this.addr,t)}function Zp(n,t){n.uniform2uiv(this.addr,t)}function Kp(n,t){n.uniform3uiv(this.addr,t)}function $p(n,t){n.uniform4uiv(this.addr,t)}function Jp(n,t,e){const i=this.cache,s=t.length,r=hr(e,s);me(i,r)||(n.uniform1iv(this.addr,r),_e(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Mc,r[a])}function Qp(n,t,e){const i=this.cache,s=t.length,r=hr(e,s);me(i,r)||(n.uniform1iv(this.addr,r),_e(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ec,r[a])}function tm(n,t,e){const i=this.cache,s=t.length,r=hr(e,s);me(i,r)||(n.uniform1iv(this.addr,r),_e(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||yc,r[a])}function em(n,t,e){const i=this.cache,s=t.length,r=hr(e,s);me(i,r)||(n.uniform1iv(this.addr,r),_e(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Sc,r[a])}function nm(n){switch(n){case 5126:return Op;case 35664:return zp;case 35665:return Bp;case 35666:return kp;case 35674:return Hp;case 35675:return Gp;case 35676:return Vp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return Yp;case 35669:case 35673:return qp;case 5125:return jp;case 36294:return Zp;case 36295:return Kp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}class im{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Fp(e.type)}}class sm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nm(e.type)}}class rm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Wr=/(\w+)(\])?(\[|\.)?/g;function hl(n,t){n.seq.push(t),n.map[t.id]=t}function am(n,t,e){const i=n.name,s=i.length;for(Wr.lastIndex=0;;){const r=Wr.exec(i),a=Wr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hl(e,c===void 0?new im(o,n,t):new sm(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new rm(o),hl(e,f)),e=f}}}class $s{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);am(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function ul(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const om=37297;let lm=0;function cm(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const dl=new It;function hm(n){Yt._getMatrix(dl,Yt.workingColorSpace,n);const t=`mat3( ${dl.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case or:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function fl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+cm(n.getShaderSource(t),a)}else return s}function um(n,t){const e=hm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dm(n,t){let e;switch(t){case ph:e="Linear";break;case mh:e="Reinhard";break;case _h:e="Cineon";break;case Zl:e="ACESFilmic";break;case xh:e="AgX";break;case vh:e="Neutral";break;case gh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gs=new P;function fm(){Yt.getLuminanceCoefficients(Gs);const n=Gs.x.toFixed(4),t=Gs.y.toFixed(4),e=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function mm(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function _m(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ns(n){return n!==""}function pl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ml(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oa(n){return n.replace(gm,vm)}const xm=new Map;function vm(n,t){let e=Ft[t];if(e===void 0){const i=xm.get(t);if(i!==void 0)e=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Oa(e)}const Mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(n){return n.replace(Mm,Sm)}function Sm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gl(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Em(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ql?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function ym(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ni:case Fi:t="ENVMAP_TYPE_CUBE";break;case ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function Tm(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jl:t="ENVMAP_BLENDING_MULTIPLY";break;case dh:t="ENVMAP_BLENDING_MIX";break;case fh:t="ENVMAP_BLENDING_ADD";break}return t}function Am(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function wm(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Em(e),c=ym(e),u=bm(e),f=Tm(e),d=Am(e),m=pm(e),_=mm(r),g=s.createProgram();let p,h,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ns).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ns).join(`
`),h.length>0&&(h+=`
`)):(p=[gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),h=[gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Hn?dm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,um("linearToOutputTexel",e.outputColorSpace),fm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ns).join(`
`)),a=Oa(a),a=pl(a,e),a=ml(a,e),o=Oa(o),o=pl(o,e),o=ml(o,e),a=_l(a),o=_l(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===Co?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Co?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=b+p+a,S=b+h+o,N=ul(s,s.VERTEX_SHADER,T),w=ul(s,s.FRAGMENT_SHADER,S);s.attachShader(g,N),s.attachShader(g,w),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(R){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(g).trim(),B=s.getShaderInfoLog(N).trim(),Y=s.getShaderInfoLog(w).trim();let $=!0,X=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,N,w);else{const Q=fl(s,N,"vertex"),G=fl(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+Q+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||Y==="")&&(X=!1);X&&(R.diagnostics={runnable:$,programLog:k,vertexShader:{log:B,prefix:p},fragmentShader:{log:Y,prefix:h}})}s.deleteShader(N),s.deleteShader(w),I=new $s(s,g),E=_m(s,g)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,om)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=N,this.fragmentShader=w,this}let Rm=0;class Cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Pm(t),e.set(t,i)),i}}class Pm{constructor(t){this.id=Rm++,this.code=t,this.usedTimes=0}}function Dm(n,t,e,i,s,r,a){const o=new eo,l=new Cm,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,M,R,k,B){const Y=k.fog,$=B.geometry,X=E.isMeshStandardMaterial?k.environment:null,Q=(E.isMeshStandardMaterial?e:t).get(E.envMap||X),G=Q&&Q.mapping===ar?Q.image.height:null,rt=_[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const dt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Et=dt!==void 0?dt.length:0;let Ot=0;$.morphAttributes.position!==void 0&&(Ot=1),$.morphAttributes.normal!==void 0&&(Ot=2),$.morphAttributes.color!==void 0&&(Ot=3);let te,j,nt,vt;if(rt){const Kt=en[rt];te=Kt.vertexShader,j=Kt.fragmentShader}else te=E.vertexShader,j=E.fragmentShader,l.update(E),nt=l.getVertexShaderID(E),vt=l.getFragmentShaderID(E);const at=n.getRenderTarget(),wt=n.state.buffers.depth.getReversed(),Dt=B.isInstancedMesh===!0,zt=B.isBatchedMesh===!0,oe=!!E.map,Wt=!!E.matcap,ue=!!Q,U=!!E.aoMap,Oe=!!E.lightMap,Bt=!!E.bumpMap,kt=!!E.normalMap,Tt=!!E.displacementMap,se=!!E.emissiveMap,yt=!!E.metalnessMap,y=!!E.roughnessMap,x=E.anisotropy>0,F=E.clearcoat>0,Z=E.dispersion>0,J=E.iridescence>0,q=E.sheen>0,Mt=E.transmission>0,ot=x&&!!E.anisotropyMap,ft=F&&!!E.clearcoatMap,Xt=F&&!!E.clearcoatNormalMap,tt=F&&!!E.clearcoatRoughnessMap,pt=J&&!!E.iridescenceMap,At=J&&!!E.iridescenceThicknessMap,Rt=q&&!!E.sheenColorMap,mt=q&&!!E.sheenRoughnessMap,Ht=!!E.specularMap,Nt=!!E.specularColorMap,ee=!!E.specularIntensityMap,C=Mt&&!!E.transmissionMap,st=Mt&&!!E.thicknessMap,H=!!E.gradientMap,K=!!E.alphaMap,ut=E.alphaTest>0,lt=!!E.alphaHash,Lt=!!E.extensions;let ce=Hn;E.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ce=n.toneMapping);const Me={shaderID:rt,shaderType:E.type,shaderName:E.name,vertexShader:te,fragmentShader:j,defines:E.defines,customVertexShaderID:nt,customFragmentShaderID:vt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:zt,batchingColor:zt&&B._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&B.instanceColor!==null,instancingMorph:Dt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Gi,alphaToCoverage:!!E.alphaToCoverage,map:oe,matcap:Wt,envMap:ue,envMapMode:ue&&Q.mapping,envMapCubeUVHeight:G,aoMap:U,lightMap:Oe,bumpMap:Bt,normalMap:kt,displacementMap:d&&Tt,emissiveMap:se,normalMapObjectSpace:kt&&E.normalMapType===yh,normalMapTangentSpace:kt&&E.normalMapType===oc,metalnessMap:yt,roughnessMap:y,anisotropy:x,anisotropyMap:ot,clearcoat:F,clearcoatMap:ft,clearcoatNormalMap:Xt,clearcoatRoughnessMap:tt,dispersion:Z,iridescence:J,iridescenceMap:pt,iridescenceThicknessMap:At,sheen:q,sheenColorMap:Rt,sheenRoughnessMap:mt,specularMap:Ht,specularColorMap:Nt,specularIntensityMap:ee,transmission:Mt,transmissionMap:C,thicknessMap:st,gradientMap:H,opaque:E.transparent===!1&&E.blending===Ci&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:ut,alphaHash:lt,combine:E.combine,mapUv:oe&&g(E.map.channel),aoMapUv:U&&g(E.aoMap.channel),lightMapUv:Oe&&g(E.lightMap.channel),bumpMapUv:Bt&&g(E.bumpMap.channel),normalMapUv:kt&&g(E.normalMap.channel),displacementMapUv:Tt&&g(E.displacementMap.channel),emissiveMapUv:se&&g(E.emissiveMap.channel),metalnessMapUv:yt&&g(E.metalnessMap.channel),roughnessMapUv:y&&g(E.roughnessMap.channel),anisotropyMapUv:ot&&g(E.anisotropyMap.channel),clearcoatMapUv:ft&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:At&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(E.sheenRoughnessMap.channel),specularMapUv:Ht&&g(E.specularMap.channel),specularColorMapUv:Nt&&g(E.specularColorMap.channel),specularIntensityMapUv:ee&&g(E.specularIntensityMap.channel),transmissionMapUv:C&&g(E.transmissionMap.channel),thicknessMapUv:st&&g(E.thicknessMap.channel),alphaMapUv:K&&g(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(kt||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(oe||K),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:wt,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:oe&&E.map.isVideoTexture===!0&&Yt.getTransfer(E.map.colorSpace)===Jt,decodeVideoTextureEmissive:se&&E.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(E.emissiveMap.colorSpace)===Jt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===vn,flipSided:E.side===De,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Lt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&E.extensions.multiDraw===!0||zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function h(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)M.push(R),M.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(b(M,E),T(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function T(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const M=_[E.type];let R;if(M){const k=en[M];R=fu.clone(k.uniforms)}else R=E.uniforms;return R}function N(E,M){let R;for(let k=0,B=u.length;k<B;k++){const Y=u[k];if(Y.cacheKey===M){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new wm(n,M,E,r),u.push(R)),R}function w(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:N,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:I}}function Lm(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Um(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function xl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function vl(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f,d,m,_,g,p){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},n[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=g,h.group=p),t++,h}function o(f,d,m,_,g,p){const h=a(f,d,m,_,g,p);m.transmission>0?i.push(h):m.transparent===!0?s.push(h):e.push(h)}function l(f,d,m,_,g,p){const h=a(f,d,m,_,g,p);m.transmission>0?i.unshift(h):m.transparent===!0?s.unshift(h):e.unshift(h)}function c(f,d){e.length>1&&e.sort(f||Um),i.length>1&&i.sort(d||xl),s.length>1&&s.sort(d||xl)}function u(){for(let f=t,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Im(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new vl,n.set(i,[a])):s>=r.length?(a=new vl,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Nm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Vt};break;case"SpotLight":e={position:new P,direction:new P,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function Fm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Om=0;function zm(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Bm(n){const t=new Nm,e=Fm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const s=new P,r=new ie,a=new ie;function o(c){let u=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,_=0,g=0,p=0,h=0,b=0,T=0,S=0,N=0,w=0,A=0;c.sort(zm);for(let E=0,M=c.length;E<M;E++){const R=c[E],k=R.color,B=R.intensity,Y=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=k.r*B,f+=k.g*B,d+=k.b*B;else if(R.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(R.sh.coefficients[X],B);A++}else if(R.isDirectionalLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Q=R.shadow,G=e.get(R);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=R.shadow.matrix,b++}i.directional[m]=X,m++}else if(R.isSpotLight){const X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(k).multiplyScalar(B),X.distance=Y,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,i.spot[g]=X;const Q=R.shadow;if(R.map&&(i.spotLightMap[N]=R.map,N++,Q.updateMatrices(R),R.castShadow&&w++),i.spotLightMatrix[g]=Q.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,i.spotShadow[g]=G,i.spotShadowMap[g]=$,S++}g++}else if(R.isRectAreaLight){const X=t.get(R);X.color.copy(k).multiplyScalar(B),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=X,p++}else if(R.isPointLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const Q=R.shadow,G=e.get(R);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=R.shadow.matrix,T++}i.point[_]=X,_++}else if(R.isHemisphereLight){const X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(B),X.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[h]=X,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==m||I.pointLength!==_||I.spotLength!==g||I.rectAreaLength!==p||I.hemiLength!==h||I.numDirectionalShadows!==b||I.numPointShadows!==T||I.numSpotShadows!==S||I.numSpotMaps!==N||I.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=g,i.rectArea.length=p,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+N-w,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,I.directionalLength=m,I.pointLength=_,I.spotLength=g,I.rectAreaLength=p,I.hemiLength=h,I.numDirectionalShadows=b,I.numPointShadows=T,I.numSpotShadows=S,I.numSpotMaps=N,I.numLightProbes=A,i.version=Om++)}function l(c,u){let f=0,d=0,m=0,_=0,g=0;const p=u.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){const T=c[h];if(T.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(T.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(T.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function Ml(n){const t=new Bm(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function km(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ml(n),t.set(s,[o])):r>=a.length?(o=new Ml(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Hm extends Wi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gm extends Wi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wm=`uniform sampler2D shadow_pass;
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
}`;function Xm(n,t,e){let i=new no;const s=new Pt,r=new Pt,a=new he,o=new Hm({depthPacking:Eh}),l=new Gm,c={},u=e.maxTextureSize,f={[Vn]:De,[De]:Vn,[vn]:vn},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:Vm,fragmentShader:Wm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Fe;_.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new xe(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let h=this.type;this.render=function(w,A,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),k=n.state;k.setBlending(kn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=h!==_n&&this.type===_n,Y=h===_n&&this.type!==_n;for(let $=0,X=w.length;$<X;$++){const Q=w[$],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const rt=G.getFrameExtents();if(s.multiply(rt),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,G.mapSize.y=r.y)),G.map===null||B===!0||Y===!0){const Et=this.type!==_n?{minFilter:$e,magFilter:$e}:{};G.map!==null&&G.map.dispose(),G.map=new ai(s.x,s.y,Et),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const dt=G.getViewportCount();for(let Et=0;Et<dt;Et++){const Ot=G.getViewport(Et);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),k.viewport(a),G.updateMatrices(Q,Et),i=G.getFrustum(),S(A,I,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===_n&&b(G,I),G.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(E,M,R)};function b(w,A){const I=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ai(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,I,d,g,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,I,m,g,null)}function T(w,A,I,E){let M=null;const R=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)M=R;else if(M=I.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=M.uuid,B=A.uuid;let Y=c[k];Y===void 0&&(Y={},c[k]=Y);let $=Y[B];$===void 0&&($=M.clone(),Y[B]=$,A.addEventListener("dispose",N)),M=$}if(M.visible=A.visible,M.wireframe=A.wireframe,E===_n?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=n.properties.get(M);k.light=I}return M}function S(w,A,I,E,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===_n)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const B=t.update(w),Y=w.material;if(Array.isArray(Y)){const $=B.groups;for(let X=0,Q=$.length;X<Q;X++){const G=$[X],rt=Y[G.materialIndex];if(rt&&rt.visible){const dt=T(w,rt,E,M);w.onBeforeShadow(n,w,A,I,B,dt,G),n.renderBufferDirect(I,null,B,dt,w,G),w.onAfterShadow(n,w,A,I,B,dt,G)}}}else if(Y.visible){const $=T(w,Y,E,M);w.onBeforeShadow(n,w,A,I,B,$,null),n.renderBufferDirect(I,null,B,$,w,null),w.onAfterShadow(n,w,A,I,B,$,null)}}const k=w.children;for(let B=0,Y=k.length;B<Y;B++)S(k[B],A,I,E,M)}function N(w){w.target.removeEventListener("dispose",N);for(const I in c){const E=c[I],M=w.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Ym={[ea]:na,[ia]:aa,[sa]:oa,[Ii]:ra,[na]:ea,[aa]:ia,[oa]:sa,[ra]:Ii};function qm(n,t){function e(){let C=!1;const st=new he;let H=null;const K=new he(0,0,0,0);return{setMask:function(ut){H!==ut&&!C&&(n.colorMask(ut,ut,ut,ut),H=ut)},setLocked:function(ut){C=ut},setClear:function(ut,lt,Lt,ce,Me){Me===!0&&(ut*=ce,lt*=ce,Lt*=ce),st.set(ut,lt,Lt,ce),K.equals(st)===!1&&(n.clearColor(ut,lt,Lt,ce),K.copy(st))},reset:function(){C=!1,H=null,K.set(-1,0,0,0)}}}function i(){let C=!1,st=!1,H=null,K=null,ut=null;return{setReversed:function(lt){if(st!==lt){const Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const ce=ut;ut=null,this.setClear(ce)}st=lt},getReversed:function(){return st},setTest:function(lt){lt?at(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function(lt){H!==lt&&!C&&(n.depthMask(lt),H=lt)},setFunc:function(lt){if(st&&(lt=Ym[lt]),K!==lt){switch(lt){case ea:n.depthFunc(n.NEVER);break;case na:n.depthFunc(n.ALWAYS);break;case ia:n.depthFunc(n.LESS);break;case Ii:n.depthFunc(n.LEQUAL);break;case sa:n.depthFunc(n.EQUAL);break;case ra:n.depthFunc(n.GEQUAL);break;case aa:n.depthFunc(n.GREATER);break;case oa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=lt}},setLocked:function(lt){C=lt},setClear:function(lt){ut!==lt&&(st&&(lt=1-lt),n.clearDepth(lt),ut=lt)},reset:function(){C=!1,H=null,K=null,ut=null,st=!1}}}function s(){let C=!1,st=null,H=null,K=null,ut=null,lt=null,Lt=null,ce=null,Me=null;return{setTest:function(Kt){C||(Kt?at(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(Kt){st!==Kt&&!C&&(n.stencilMask(Kt),st=Kt)},setFunc:function(Kt,We,cn){(H!==Kt||K!==We||ut!==cn)&&(n.stencilFunc(Kt,We,cn),H=Kt,K=We,ut=cn)},setOp:function(Kt,We,cn){(lt!==Kt||Lt!==We||ce!==cn)&&(n.stencilOp(Kt,We,cn),lt=Kt,Lt=We,ce=cn)},setLocked:function(Kt){C=Kt},setClear:function(Kt){Me!==Kt&&(n.clearStencil(Kt),Me=Kt)},reset:function(){C=!1,st=null,H=null,K=null,ut=null,lt=null,Lt=null,ce=null,Me=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,m=[],_=null,g=!1,p=null,h=null,b=null,T=null,S=null,N=null,w=null,A=new Vt(0,0,0),I=0,E=!1,M=null,R=null,k=null,B=null,Y=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=Q>=2);let rt=null,dt={};const Et=n.getParameter(n.SCISSOR_BOX),Ot=n.getParameter(n.VIEWPORT),te=new he().fromArray(Et),j=new he().fromArray(Ot);function nt(C,st,H,K){const ut=new Uint8Array(4),lt=n.createTexture();n.bindTexture(C,lt),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<H;Lt++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(st,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,ut):n.texImage2D(st+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ut);return lt}const vt={};vt[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),vt[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),vt[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(n.DEPTH_TEST),a.setFunc(Ii),Bt(!1),kt(yo),at(n.CULL_FACE),U(kn);function at(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function wt(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function Dt(C,st){return f[C]!==st?(n.bindFramebuffer(C,st),f[C]=st,C===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=st),C===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=st),!0):!1}function zt(C,st){let H=m,K=!1;if(C){H=d.get(st),H===void 0&&(H=[],d.set(st,H));const ut=C.textures;if(H.length!==ut.length||H[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Lt=ut.length;lt<Lt;lt++)H[lt]=n.COLOR_ATTACHMENT0+lt;H.length=ut.length,K=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,K=!0);K&&n.drawBuffers(H)}function oe(C){return _!==C?(n.useProgram(C),_=C,!0):!1}const Wt={[ei]:n.FUNC_ADD,[Zc]:n.FUNC_SUBTRACT,[Kc]:n.FUNC_REVERSE_SUBTRACT};Wt[$c]=n.MIN,Wt[Jc]=n.MAX;const ue={[Qc]:n.ZERO,[th]:n.ONE,[eh]:n.SRC_COLOR,[Qr]:n.SRC_ALPHA,[oh]:n.SRC_ALPHA_SATURATE,[rh]:n.DST_COLOR,[ih]:n.DST_ALPHA,[nh]:n.ONE_MINUS_SRC_COLOR,[ta]:n.ONE_MINUS_SRC_ALPHA,[ah]:n.ONE_MINUS_DST_COLOR,[sh]:n.ONE_MINUS_DST_ALPHA,[lh]:n.CONSTANT_COLOR,[ch]:n.ONE_MINUS_CONSTANT_COLOR,[hh]:n.CONSTANT_ALPHA,[uh]:n.ONE_MINUS_CONSTANT_ALPHA};function U(C,st,H,K,ut,lt,Lt,ce,Me,Kt){if(C===kn){g===!0&&(wt(n.BLEND),g=!1);return}if(g===!1&&(at(n.BLEND),g=!0),C!==jc){if(C!==p||Kt!==E){if((h!==ei||S!==ei)&&(n.blendEquation(n.FUNC_ADD),h=ei,S=ei),Kt)switch(C){case Ci:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bo:n.blendFunc(n.ONE,n.ONE);break;case To:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ao:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Ci:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case To:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ao:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}b=null,T=null,N=null,w=null,A.set(0,0,0),I=0,p=C,E=Kt}return}ut=ut||st,lt=lt||H,Lt=Lt||K,(st!==h||ut!==S)&&(n.blendEquationSeparate(Wt[st],Wt[ut]),h=st,S=ut),(H!==b||K!==T||lt!==N||Lt!==w)&&(n.blendFuncSeparate(ue[H],ue[K],ue[lt],ue[Lt]),b=H,T=K,N=lt,w=Lt),(ce.equals(A)===!1||Me!==I)&&(n.blendColor(ce.r,ce.g,ce.b,Me),A.copy(ce),I=Me),p=C,E=!1}function Oe(C,st){C.side===vn?wt(n.CULL_FACE):at(n.CULL_FACE);let H=C.side===De;st&&(H=!H),Bt(H),C.blending===Ci&&C.transparent===!1?U(kn):U(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const K=C.stencilWrite;o.setTest(K),K&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),se(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(C){M!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),M=C)}function kt(C){C!==Yc?(at(n.CULL_FACE),C!==R&&(C===yo?n.cullFace(n.BACK):C===qc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),R=C}function Tt(C){C!==k&&(X&&n.lineWidth(C),k=C)}function se(C,st,H){C?(at(n.POLYGON_OFFSET_FILL),(B!==st||Y!==H)&&(n.polygonOffset(st,H),B=st,Y=H)):wt(n.POLYGON_OFFSET_FILL)}function yt(C){C?at(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function y(C){C===void 0&&(C=n.TEXTURE0+$-1),rt!==C&&(n.activeTexture(C),rt=C)}function x(C,st,H){H===void 0&&(rt===null?H=n.TEXTURE0+$-1:H=rt);let K=dt[H];K===void 0&&(K={type:void 0,texture:void 0},dt[H]=K),(K.type!==C||K.texture!==st)&&(rt!==H&&(n.activeTexture(H),rt=H),n.bindTexture(C,st||vt[C]),K.type=C,K.texture=st)}function F(){const C=dt[rt];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Mt(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xt(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pt(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function At(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Rt(C){te.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),te.copy(C))}function mt(C){j.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),j.copy(C))}function Ht(C,st){let H=c.get(st);H===void 0&&(H=new WeakMap,c.set(st,H));let K=H.get(C);K===void 0&&(K=n.getUniformBlockIndex(st,C.name),H.set(C,K))}function Nt(C,st){const K=c.get(st).get(C);l.get(st)!==K&&(n.uniformBlockBinding(st,K,C.__bindingPointIndex),l.set(st,K))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},rt=null,dt={},f={},d=new WeakMap,m=[],_=null,g=!1,p=null,h=null,b=null,T=null,S=null,N=null,w=null,A=new Vt(0,0,0),I=0,E=!1,M=null,R=null,k=null,B=null,Y=null,te.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:wt,bindFramebuffer:Dt,drawBuffers:zt,useProgram:oe,setBlending:U,setMaterial:Oe,setFlipSided:Bt,setCullFace:kt,setLineWidth:Tt,setPolygonOffset:se,setScissorTest:yt,activeTexture:y,bindTexture:x,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:pt,texImage3D:At,updateUBOMapping:Ht,uniformBlockBinding:Nt,texStorage2D:Xt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:Mt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:Rt,viewport:mt,reset:ee}}function Sl(n,t,e,i){const s=jm(i);switch(e){case tc:return n*t;case nc:return n*t;case ic:return n*t*2;case sc:return n*t/s.components*s.byteLength;case Ka:return n*t/s.components*s.byteLength;case rc:return n*t*2/s.components*s.byteLength;case $a:return n*t*2/s.components*s.byteLength;case ec:return n*t*3/s.components*s.byteLength;case Ke:return n*t*4/s.components*s.byteLength;case Ja:return n*t*4/s.components*s.byteLength;case Ys:case qs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case js:case Zs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case da:case pa:return Math.max(n,16)*Math.max(t,8)/4;case ua:case fa:return Math.max(n,8)*Math.max(t,8)/2;case ma:case _a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ya:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ba:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case wa:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Da:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ks:case La:case Ua:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ac:case Ia:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Na:case Fa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jm(n){switch(n){case bn:case $l:return{byteLength:1,components:1};case cs:case Jl:case ms:return{byteLength:2,components:1};case ja:case Za:return{byteLength:2,components:4};case ri:case qa:case Mn:return{byteLength:4,components:1};case Ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Zm(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,x){return m?new OffscreenCanvas(y,x):tr("canvas")}function g(y,x,F){let Z=1;const J=yt(y);if((J.width>F||J.height>F)&&(Z=F/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const q=Math.floor(Z*J.width),Mt=Math.floor(Z*J.height);f===void 0&&(f=_(q,Mt));const ot=x?_(q,Mt):f;return ot.width=q,ot.height=Mt,ot.getContext("2d").drawImage(y,0,0,q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+Mt+")."),ot}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),y;return y}function p(y){return y.generateMipmaps}function h(y){n.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(y,x,F,Z,J=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let q=x;if(x===n.RED&&(F===n.FLOAT&&(q=n.R32F),F===n.HALF_FLOAT&&(q=n.R16F),F===n.UNSIGNED_BYTE&&(q=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.R8UI),F===n.UNSIGNED_SHORT&&(q=n.R16UI),F===n.UNSIGNED_INT&&(q=n.R32UI),F===n.BYTE&&(q=n.R8I),F===n.SHORT&&(q=n.R16I),F===n.INT&&(q=n.R32I)),x===n.RG&&(F===n.FLOAT&&(q=n.RG32F),F===n.HALF_FLOAT&&(q=n.RG16F),F===n.UNSIGNED_BYTE&&(q=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RG8UI),F===n.UNSIGNED_SHORT&&(q=n.RG16UI),F===n.UNSIGNED_INT&&(q=n.RG32UI),F===n.BYTE&&(q=n.RG8I),F===n.SHORT&&(q=n.RG16I),F===n.INT&&(q=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RGB8UI),F===n.UNSIGNED_SHORT&&(q=n.RGB16UI),F===n.UNSIGNED_INT&&(q=n.RGB32UI),F===n.BYTE&&(q=n.RGB8I),F===n.SHORT&&(q=n.RGB16I),F===n.INT&&(q=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),F===n.UNSIGNED_INT&&(q=n.RGBA32UI),F===n.BYTE&&(q=n.RGBA8I),F===n.SHORT&&(q=n.RGBA16I),F===n.INT&&(q=n.RGBA32I)),x===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),x===n.RGBA){const Mt=J?or:Yt.getTransfer(Z);F===n.FLOAT&&(q=n.RGBA32F),F===n.HALF_FLOAT&&(q=n.RGBA16F),F===n.UNSIGNED_BYTE&&(q=Mt===Jt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(y,x){let F;return y?x===null||x===ri||x===Oi?F=n.DEPTH24_STENCIL8:x===Mn?F=n.DEPTH32F_STENCIL8:x===cs&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ri||x===Oi?F=n.DEPTH_COMPONENT24:x===Mn?F=n.DEPTH_COMPONENT32F:x===cs&&(F=n.DEPTH_COMPONENT16),F}function N(y,x){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==$e&&y.minFilter!==nn?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function w(y){const x=y.target;x.removeEventListener("dispose",w),I(x),x.isVideoTexture&&u.delete(x)}function A(y){const x=y.target;x.removeEventListener("dispose",A),M(x)}function I(y){const x=i.get(y);if(x.__webglInit===void 0)return;const F=y.source,Z=d.get(F);if(Z){const J=Z[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(y),Object.keys(Z).length===0&&d.delete(F)}i.remove(y)}function E(y){const x=i.get(y);n.deleteTexture(x.__webglTexture);const F=y.source,Z=d.get(F);delete Z[x.__cacheKey],a.memory.textures--}function M(y){const x=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let J=0;J<x.__webglFramebuffer[Z].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[Z][J]);else n.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[Z]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=y.textures;for(let Z=0,J=F.length;Z<J;Z++){const q=i.get(F[Z]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(F[Z])}i.remove(y)}let R=0;function k(){R=0}function B(){const y=R;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),R+=1,y}function Y(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function $(y,x){const F=i.get(y);if(y.isVideoTexture&&Tt(y),y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){const Z=y.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,y,x);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function X(y,x){const F=i.get(y);if(y.version>0&&F.__version!==y.version){j(F,y,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function Q(y,x){const F=i.get(y);if(y.version>0&&F.__version!==y.version){j(F,y,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function G(y,x){const F=i.get(y);if(y.version>0&&F.__version!==y.version){nt(F,y,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const rt={[ls]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[ha]:n.MIRRORED_REPEAT},dt={[$e]:n.NEAREST,[Mh]:n.NEAREST_MIPMAP_NEAREST,[Es]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[xr]:n.LINEAR_MIPMAP_NEAREST,[si]:n.LINEAR_MIPMAP_LINEAR},Et={[bh]:n.NEVER,[Ph]:n.ALWAYS,[Th]:n.LESS,[lc]:n.LEQUAL,[Ah]:n.EQUAL,[Ch]:n.GEQUAL,[wh]:n.GREATER,[Rh]:n.NOTEQUAL};function Ot(y,x){if(x.type===Mn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===nn||x.magFilter===xr||x.magFilter===Es||x.magFilter===si||x.minFilter===nn||x.minFilter===xr||x.minFilter===Es||x.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,rt[x.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,rt[x.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,rt[x.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,dt[x.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,dt[x.minFilter]),x.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Et[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===$e||x.minFilter!==Es&&x.minFilter!==si||x.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function te(y,x){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",w));const Z=x.source;let J=d.get(Z);J===void 0&&(J={},d.set(Z,J));const q=Y(x);if(q!==y.__cacheKey){J[q]===void 0&&(J[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[q].usedTimes++;const Mt=J[y.__cacheKey];Mt!==void 0&&(J[y.__cacheKey].usedTimes--,Mt.usedTimes===0&&E(x)),y.__cacheKey=q,y.__webglTexture=J[q].texture}return F}function j(y,x,F){let Z=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=n.TEXTURE_3D);const J=te(y,x),q=x.source;e.bindTexture(Z,y.__webglTexture,n.TEXTURE0+F);const Mt=i.get(q);if(q.version!==Mt.__version||J===!0){e.activeTexture(n.TEXTURE0+F);const ot=Yt.getPrimaries(Yt.workingColorSpace),ft=x.colorSpace===On?null:Yt.getPrimaries(x.colorSpace),Xt=x.colorSpace===On||ot===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let tt=g(x.image,!1,s.maxTextureSize);tt=se(x,tt);const pt=r.convert(x.format,x.colorSpace),At=r.convert(x.type);let Rt=T(x.internalFormat,pt,At,x.colorSpace,x.isVideoTexture);Ot(Z,x);let mt;const Ht=x.mipmaps,Nt=x.isVideoTexture!==!0,ee=Mt.__version===void 0||J===!0,C=q.dataReady,st=N(x,tt);if(x.isDepthTexture)Rt=S(x.format===zi,x.type),ee&&(Nt?e.texStorage2D(n.TEXTURE_2D,1,Rt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,Rt,tt.width,tt.height,0,pt,At,null));else if(x.isDataTexture)if(Ht.length>0){Nt&&ee&&e.texStorage2D(n.TEXTURE_2D,st,Rt,Ht[0].width,Ht[0].height);for(let H=0,K=Ht.length;H<K;H++)mt=Ht[H],Nt?C&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,At,mt.data):e.texImage2D(n.TEXTURE_2D,H,Rt,mt.width,mt.height,0,pt,At,mt.data);x.generateMipmaps=!1}else Nt?(ee&&e.texStorage2D(n.TEXTURE_2D,st,Rt,tt.width,tt.height),C&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,At,tt.data)):e.texImage2D(n.TEXTURE_2D,0,Rt,tt.width,tt.height,0,pt,At,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Nt&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,st,Rt,Ht[0].width,Ht[0].height,tt.depth);for(let H=0,K=Ht.length;H<K;H++)if(mt=Ht[H],x.format!==Ke)if(pt!==null)if(Nt){if(C)if(x.layerUpdates.size>0){const ut=Sl(mt.width,mt.height,x.format,x.type);for(const lt of x.layerUpdates){const Lt=mt.data.subarray(lt*ut/mt.data.BYTES_PER_ELEMENT,(lt+1)*ut/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,lt,mt.width,mt.height,1,pt,Lt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,tt.depth,pt,mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,Rt,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?C&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,tt.depth,pt,At,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,H,Rt,mt.width,mt.height,tt.depth,0,pt,At,mt.data)}else{Nt&&ee&&e.texStorage2D(n.TEXTURE_2D,st,Rt,Ht[0].width,Ht[0].height);for(let H=0,K=Ht.length;H<K;H++)mt=Ht[H],x.format!==Ke?pt!==null?Nt?C&&e.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,H,Rt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?C&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,At,mt.data):e.texImage2D(n.TEXTURE_2D,H,Rt,mt.width,mt.height,0,pt,At,mt.data)}else if(x.isDataArrayTexture)if(Nt){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,st,Rt,tt.width,tt.height,tt.depth),C)if(x.layerUpdates.size>0){const H=Sl(tt.width,tt.height,x.format,x.type);for(const K of x.layerUpdates){const ut=tt.data.subarray(K*H/tt.data.BYTES_PER_ELEMENT,(K+1)*H/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,pt,At,ut)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,At,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,tt.width,tt.height,tt.depth,0,pt,At,tt.data);else if(x.isData3DTexture)Nt?(ee&&e.texStorage3D(n.TEXTURE_3D,st,Rt,tt.width,tt.height,tt.depth),C&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,At,tt.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,tt.width,tt.height,tt.depth,0,pt,At,tt.data);else if(x.isFramebufferTexture){if(ee)if(Nt)e.texStorage2D(n.TEXTURE_2D,st,Rt,tt.width,tt.height);else{let H=tt.width,K=tt.height;for(let ut=0;ut<st;ut++)e.texImage2D(n.TEXTURE_2D,ut,Rt,H,K,0,pt,At,null),H>>=1,K>>=1}}else if(Ht.length>0){if(Nt&&ee){const H=yt(Ht[0]);e.texStorage2D(n.TEXTURE_2D,st,Rt,H.width,H.height)}for(let H=0,K=Ht.length;H<K;H++)mt=Ht[H],Nt?C&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,pt,At,mt):e.texImage2D(n.TEXTURE_2D,H,Rt,pt,At,mt);x.generateMipmaps=!1}else if(Nt){if(ee){const H=yt(tt);e.texStorage2D(n.TEXTURE_2D,st,Rt,H.width,H.height)}C&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,At,tt)}else e.texImage2D(n.TEXTURE_2D,0,Rt,pt,At,tt);p(x)&&h(Z),Mt.__version=q.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function nt(y,x,F){if(x.image.length!==6)return;const Z=te(y,x),J=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+F);const q=i.get(J);if(J.version!==q.__version||Z===!0){e.activeTexture(n.TEXTURE0+F);const Mt=Yt.getPrimaries(Yt.workingColorSpace),ot=x.colorSpace===On?null:Yt.getPrimaries(x.colorSpace),ft=x.colorSpace===On||Mt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Xt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let K=0;K<6;K++)!Xt&&!tt?pt[K]=g(x.image[K],!0,s.maxCubemapSize):pt[K]=tt?x.image[K].image:x.image[K],pt[K]=se(x,pt[K]);const At=pt[0],Rt=r.convert(x.format,x.colorSpace),mt=r.convert(x.type),Ht=T(x.internalFormat,Rt,mt,x.colorSpace),Nt=x.isVideoTexture!==!0,ee=q.__version===void 0||Z===!0,C=J.dataReady;let st=N(x,At);Ot(n.TEXTURE_CUBE_MAP,x);let H;if(Xt){Nt&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,st,Ht,At.width,At.height);for(let K=0;K<6;K++){H=pt[K].mipmaps;for(let ut=0;ut<H.length;ut++){const lt=H[ut];x.format!==Ke?Rt!==null?Nt?C&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,lt.width,lt.height,Rt,lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Ht,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,lt.width,lt.height,Rt,mt,lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Ht,lt.width,lt.height,0,Rt,mt,lt.data)}}}else{if(H=x.mipmaps,Nt&&ee){H.length>0&&st++;const K=yt(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,st,Ht,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Nt?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pt[K].width,pt[K].height,Rt,mt,pt[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,pt[K].width,pt[K].height,0,Rt,mt,pt[K].data);for(let ut=0;ut<H.length;ut++){const Lt=H[ut].image[K].image;Nt?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Lt.width,Lt.height,Rt,mt,Lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Ht,Lt.width,Lt.height,0,Rt,mt,Lt.data)}}else{Nt?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,mt,pt[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,Rt,mt,pt[K]);for(let ut=0;ut<H.length;ut++){const lt=H[ut];Nt?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Rt,mt,lt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Ht,Rt,mt,lt.image[K])}}}p(x)&&h(n.TEXTURE_CUBE_MAP),q.__version=J.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function vt(y,x,F,Z,J,q){const Mt=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),ft=T(F.internalFormat,Mt,ot,F.colorSpace),Xt=i.get(x),tt=i.get(F);if(tt.__renderTarget=x,!Xt.__hasExternalTextures){const pt=Math.max(1,x.width>>q),At=Math.max(1,x.height>>q);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,q,ft,pt,At,x.depth,0,Mt,ot,null):e.texImage2D(J,q,ft,pt,At,0,Mt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),kt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,J,tt.__webglTexture,0,Bt(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,J,tt.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(y,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,y),x.depthBuffer){const Z=x.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,q=S(x.stencilBuffer,J),Mt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=Bt(x);kt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,q,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,y)}else{const Z=x.textures;for(let J=0;J<Z.length;J++){const q=Z[J],Mt=r.convert(q.format,q.colorSpace),ot=r.convert(q.type),ft=T(q.internalFormat,Mt,ot,q.colorSpace),Xt=Bt(x);F&&kt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,ft,x.width,x.height):kt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xt,ft,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ft,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function wt(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const J=Z.__webglTexture,q=Bt(x);if(x.depthTexture.format===Pi)kt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(x.depthTexture.format===zi)kt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Dt(y){const x=i.get(y),F=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){const Z=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=Z}if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");wt(x.__webglFramebuffer,y)}else if(F){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=n.createRenderbuffer(),at(x.__webglDepthbuffer[Z],y,!1);else{const J=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),at(x.__webglDepthbuffer,y,!1);else{const Z=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,J)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(y,x,F){const Z=i.get(y);x!==void 0&&vt(Z.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Dt(y)}function oe(y){const x=y.texture,F=i.get(y),Z=i.get(x);y.addEventListener("dispose",A);const J=y.textures,q=y.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=x.version,a.memory.textures++),q){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let ft=0;ft<x.mipmaps.length;ft++)F.__webglFramebuffer[ot][ft]=n.createFramebuffer()}else F.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)F.__webglFramebuffer[ot]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let ot=0,ft=J.length;ot<ft;ot++){const Xt=i.get(J[ot]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&kt(y)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const ft=J[ot];F.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);const Xt=r.convert(ft.format,ft.colorSpace),tt=r.convert(ft.type),pt=T(ft.internalFormat,Xt,tt,ft.colorSpace,y.isXRRenderTarget===!0),At=Bt(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,pt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),at(F.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ot(n.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)vt(F.__webglFramebuffer[ot][ft],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else vt(F.__webglFramebuffer[ot],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(x)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ot=0,ft=J.length;ot<ft;ot++){const Xt=J[ot],tt=i.get(Xt);e.bindTexture(n.TEXTURE_2D,tt.__webglTexture),Ot(n.TEXTURE_2D,Xt),vt(F.__webglFramebuffer,y,Xt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),p(Xt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ot=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),Ot(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)vt(F.__webglFramebuffer[ft],y,x,n.COLOR_ATTACHMENT0,ot,ft);else vt(F.__webglFramebuffer,y,x,n.COLOR_ATTACHMENT0,ot,0);p(x)&&h(ot),e.unbindTexture()}y.depthBuffer&&Dt(y)}function Wt(y){const x=y.textures;for(let F=0,Z=x.length;F<Z;F++){const J=x[F];if(p(J)){const q=b(y),Mt=i.get(J).__webglTexture;e.bindTexture(q,Mt),h(q),e.unbindTexture()}}}const ue=[],U=[];function Oe(y){if(y.samples>0){if(kt(y)===!1){const x=y.textures,F=y.width,Z=y.height;let J=n.COLOR_BUFFER_BIT;const q=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(y),ot=x.length>1;if(ot)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);const Xt=i.get(x[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xt,0)}n.blitFramebuffer(0,0,F,Z,0,0,F,Z,J,n.NEAREST),l===!0&&(ue.length=0,U.length=0,ue.push(n.COLOR_ATTACHMENT0+ft),y.depthBuffer&&y.resolveDepthBuffer===!1&&(ue.push(q),U.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);const Xt=i.get(x[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Xt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const x=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Bt(y){return Math.min(s.maxSamples,y.samples)}function kt(y){const x=i.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(y){const x=a.render.frame;u.get(y)!==x&&(u.set(y,x),y.update())}function se(y,x){const F=y.colorSpace,Z=y.format,J=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==Gi&&F!==On&&(Yt.getTransfer(F)===Jt?(Z!==Ke||J!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function yt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=zt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=kt}function Km(n,t){function e(i,s=On){let r;const a=Yt.getTransfer(s);if(i===bn)return n.UNSIGNED_BYTE;if(i===ja)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Za)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ql)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$l)return n.BYTE;if(i===Jl)return n.SHORT;if(i===cs)return n.UNSIGNED_SHORT;if(i===qa)return n.INT;if(i===ri)return n.UNSIGNED_INT;if(i===Mn)return n.FLOAT;if(i===ms)return n.HALF_FLOAT;if(i===tc)return n.ALPHA;if(i===ec)return n.RGB;if(i===Ke)return n.RGBA;if(i===nc)return n.LUMINANCE;if(i===ic)return n.LUMINANCE_ALPHA;if(i===Pi)return n.DEPTH_COMPONENT;if(i===zi)return n.DEPTH_STENCIL;if(i===sc)return n.RED;if(i===Ka)return n.RED_INTEGER;if(i===rc)return n.RG;if(i===$a)return n.RG_INTEGER;if(i===Ja)return n.RGBA_INTEGER;if(i===Ys||i===qs||i===js||i===Zs)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ua||i===da||i===fa||i===pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ma||i===_a||i===ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ma||i===_a)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ga)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xa||i===va||i===Ma||i===Sa||i===Ea||i===ya||i===ba||i===Ta||i===Aa||i===wa||i===Ra||i===Ca||i===Pa||i===Da)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===va)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ma)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ea)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ya)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ba)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ta)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Aa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ra)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ca)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Da)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ks||i===La||i===Ua)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ks)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ac||i===Ia||i===Na||i===Fa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ks)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ia)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Oi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class $m extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $t extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jm={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,i),h=this._getHandJoint(c,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new $t;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class e0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Re,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Wn({vertexShader:Qm,fragmentShader:t0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new ci(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n0 extends li{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,_=null;const g=new e0,p=e.getContextAttributes();let h=null,b=null;const T=[],S=[],N=new Pt;let w=null;const A=new Ve;A.viewport=new he;const I=new Ve;I.viewport=new he;const E=[A,I],M=new $m;let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let nt=T[j];return nt===void 0&&(nt=new Xr,T[j]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(j){let nt=T[j];return nt===void 0&&(nt=new Xr,T[j]=nt),nt.getGripSpace()},this.getHand=function(j){let nt=T[j];return nt===void 0&&(nt=new Xr,T[j]=nt),nt.getHandSpace()};function B(j){const nt=S.indexOf(j.inputSource);if(nt===-1)return;const vt=T[nt];vt!==void 0&&(vt.update(j.inputSource,j.frame,c||a),vt.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",$);for(let j=0;j<T.length;j++){const nt=S[j];nt!==null&&(S[j]=null,T[j].disconnect(nt))}R=null,k=null,g.reset(),t.setRenderTarget(h),m=null,d=null,f=null,s=null,b=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){const nt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new ai(m.framebufferWidth,m.framebufferHeight,{format:Ke,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let nt=null,vt=null,at=null;p.depth&&(at=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=p.stencil?zi:Pi,vt=p.stencil?Oi:ri);const wt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(wt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new ai(d.textureWidth,d.textureHeight,{format:Ke,type:bn,depthTexture:new vc(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(j){for(let nt=0;nt<j.removed.length;nt++){const vt=j.removed[nt],at=S.indexOf(vt);at>=0&&(S[at]=null,T[at].disconnect(vt))}for(let nt=0;nt<j.added.length;nt++){const vt=j.added[nt];let at=S.indexOf(vt);if(at===-1){for(let Dt=0;Dt<T.length;Dt++)if(Dt>=S.length){S.push(vt),at=Dt;break}else if(S[Dt]===null){S[Dt]=vt,at=Dt;break}if(at===-1)break}const wt=T[at];wt&&wt.connect(vt)}}const X=new P,Q=new P;function G(j,nt,vt){X.setFromMatrixPosition(nt.matrixWorld),Q.setFromMatrixPosition(vt.matrixWorld);const at=X.distanceTo(Q),wt=nt.projectionMatrix.elements,Dt=vt.projectionMatrix.elements,zt=wt[14]/(wt[10]-1),oe=wt[14]/(wt[10]+1),Wt=(wt[9]+1)/wt[5],ue=(wt[9]-1)/wt[5],U=(wt[8]-1)/wt[0],Oe=(Dt[8]+1)/Dt[0],Bt=zt*U,kt=zt*Oe,Tt=at/(-U+Oe),se=Tt*-U;if(nt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(se),j.translateZ(Tt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),wt[10]===-1)j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const yt=zt+Tt,y=oe+Tt,x=Bt-se,F=kt+(at-se),Z=Wt*oe/y*yt,J=ue*oe/y*yt;j.projectionMatrix.makePerspective(x,F,Z,J,yt,y),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function rt(j,nt){nt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(nt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let nt=j.near,vt=j.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),M.near=I.near=A.near=nt,M.far=I.far=A.far=vt,(R!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,k=M.far),A.layers.mask=j.layers.mask|2,I.layers.mask=j.layers.mask|4,M.layers.mask=A.layers.mask|I.layers.mask;const at=j.parent,wt=M.cameras;rt(M,at);for(let Dt=0;Dt<wt.length;Dt++)rt(wt[Dt],at);wt.length===2?G(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),dt(j,M,at)};function dt(j,nt,vt){vt===null?j.matrix.copy(nt.matrixWorld):(j.matrix.copy(vt.matrixWorld),j.matrix.invert(),j.matrix.multiply(nt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=hs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let Et=null;function Ot(j,nt){if(u=nt.getViewerPose(c||a),_=nt,u!==null){const vt=u.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let at=!1;vt.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let Dt=0;Dt<vt.length;Dt++){const zt=vt[Dt];let oe=null;if(m!==null)oe=m.getViewport(zt);else{const ue=f.getViewSubImage(d,zt);oe=ue.viewport,Dt===0&&(t.setRenderTargetTextures(b,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(b))}let Wt=E[Dt];Wt===void 0&&(Wt=new Ve,Wt.layers.enable(Dt),Wt.viewport=new he,E[Dt]=Wt),Wt.matrix.fromArray(zt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(zt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(oe.x,oe.y,oe.width,oe.height),Dt===0&&(M.matrix.copy(Wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(Wt)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const Dt=f.getDepthInformation(vt[0]);Dt&&Dt.isValid&&Dt.texture&&g.init(t,Dt,s.renderState)}}for(let vt=0;vt<T.length;vt++){const at=S[vt],wt=T[vt];at!==null&&wt!==void 0&&wt.update(at,nt,c||a)}Et&&Et(j,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),_=null}const te=new xc;te.setAnimationLoop(Ot),this.setAnimationLoop=function(j){Et=j},this.dispose=function(){}}}const Qn=new rn,i0=new ie;function s0(n,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,mc(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,b,T,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),f(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,S)):h.isMeshMatcapMaterial?(r(p,h),_(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),g(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,b,T):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===De&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===De&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=t.get(h),T=b.envMap,S=b.envMapRotation;T&&(p.envMap.value=T,Qn.copy(S),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),p.envMapRotation.value.setFromMatrix4(i0.makeRotationFromEuler(Qn)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,T){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=T*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===De&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const b=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function r0(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const S=T.program;i.uniformBlockBinding(b,S)}function c(b,T){let S=s[b.id];S===void 0&&(_(b),S=u(b),s[b.id]=S,b.addEventListener("dispose",p));const N=T.program;i.updateUBOMapping(b,N);const w=t.render.frame;r[b.id]!==w&&(d(b),r[b.id]=w)}function u(b){const T=f();b.__bindingPointIndex=T;const S=n.createBuffer(),N=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,N,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const T=s[b.id],S=b.uniforms,N=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let w=0,A=S.length;w<A;w++){const I=Array.isArray(S[w])?S[w]:[S[w]];for(let E=0,M=I.length;E<M;E++){const R=I[E];if(m(R,w,E,N)===!0){const k=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let $=0;$<B.length;$++){const X=B[$],Q=g(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,k+Y,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,T,S,N){const w=b.value,A=T+"_"+S;if(N[A]===void 0)return typeof w=="number"||typeof w=="boolean"?N[A]=w:N[A]=w.clone(),!0;{const I=N[A];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return N[A]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function _(b){const T=b.uniforms;let S=0;const N=16;for(let A=0,I=T.length;A<I;A++){const E=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,R=E.length;M<R;M++){const k=E[M],B=Array.isArray(k.value)?k.value:[k.value];for(let Y=0,$=B.length;Y<$;Y++){const X=B[Y],Q=g(X),G=S%N,rt=G%Q.boundary,dt=G+rt;S+=rt,dt!==0&&N-dt<Q.storage&&(S+=N-dt),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=Q.storage}}}const w=S%N;return w>0&&(S+=N-w),b.__size=S,b.__cache={},this}function g(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function p(b){const T=b.target;T.removeEventListener("dispose",p);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function h(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class a0{constructor(t={}){const{canvas:e=qh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,h=null;const b=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=we,this.toneMapping=Hn,this.toneMappingExposure=1;const S=this;let N=!1,w=0,A=0,I=null,E=-1,M=null;const R=new he,k=new he;let B=null;const Y=new Vt(0);let $=0,X=e.width,Q=e.height,G=1,rt=null,dt=null;const Et=new he(0,0,X,Q),Ot=new he(0,0,X,Q);let te=!1;const j=new no;let nt=!1,vt=!1;const at=new ie,wt=new ie,Dt=new P,zt=new he,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function ue(){return I===null?G:1}let U=i;function Oe(v,D){return e.getContext(v,D)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ya}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",lt,!1),U===null){const D="webgl2";if(U=Oe(D,v),U===null)throw Oe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Bt,kt,Tt,se,yt,y,x,F,Z,J,q,Mt,ot,ft,Xt,tt,pt,At,Rt,mt,Ht,Nt,ee,C;function st(){Bt=new up(U),Bt.init(),Nt=new Km(U,Bt),kt=new rp(U,Bt,t,Nt),Tt=new qm(U,Bt),kt.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),se=new pp(U),yt=new Lm,y=new Zm(U,Bt,Tt,yt,kt,Nt,se),x=new op(S),F=new hp(S),Z=new Mu(U),ee=new ip(U,Z),J=new dp(U,Z,se,ee),q=new _p(U,J,Z,se),Rt=new mp(U,kt,y),tt=new ap(yt),Mt=new Dm(S,x,F,Bt,kt,ee,tt),ot=new s0(S,yt),ft=new Im,Xt=new km(Bt),At=new np(S,x,F,Tt,q,m,l),pt=new Xm(S,q,kt),C=new r0(U,se,kt,Tt),mt=new sp(U,Bt,se),Ht=new fp(U,Bt,se),se.programs=Mt.programs,S.capabilities=kt,S.extensions=Bt,S.properties=yt,S.renderLists=ft,S.shadowMap=pt,S.state=Tt,S.info=se}st();const H=new n0(S,U);this.xr=H,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const v=Bt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Bt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize(X,Q,!1))},this.getSize=function(v){return v.set(X,Q)},this.setSize=function(v,D,O=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,Q=D,e.width=Math.floor(v*G),e.height=Math.floor(D*G),O===!0&&(e.style.width=v+"px",e.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(X*G,Q*G).floor()},this.setDrawingBufferSize=function(v,D,O){X=v,Q=D,G=O,e.width=Math.floor(v*O),e.height=Math.floor(D*O),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(Et)},this.setViewport=function(v,D,O,z){v.isVector4?Et.set(v.x,v.y,v.z,v.w):Et.set(v,D,O,z),Tt.viewport(R.copy(Et).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(Ot)},this.setScissor=function(v,D,O,z){v.isVector4?Ot.set(v.x,v.y,v.z,v.w):Ot.set(v,D,O,z),Tt.scissor(k.copy(Ot).multiplyScalar(G).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(v){Tt.setScissorTest(te=v)},this.setOpaqueSort=function(v){rt=v},this.setTransparentSort=function(v){dt=v},this.getClearColor=function(v){return v.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(v=!0,D=!0,O=!0){let z=0;if(v){let L=!1;if(I!==null){const et=I.texture.format;L=et===Ja||et===$a||et===Ka}if(L){const et=I.texture.type,ct=et===bn||et===ri||et===cs||et===Oi||et===ja||et===Za,_t=At.getClearColor(),gt=At.getClearAlpha(),Ct=_t.r,Ut=_t.g,xt=_t.b;ct?(_[0]=Ct,_[1]=Ut,_[2]=xt,_[3]=gt,U.clearBufferuiv(U.COLOR,0,_)):(g[0]=Ct,g[1]=Ut,g[2]=xt,g[3]=gt,U.clearBufferiv(U.COLOR,0,g))}else z|=U.COLOR_BUFFER_BIT}D&&(z|=U.DEPTH_BUFFER_BIT),O&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ft.dispose(),Xt.dispose(),yt.dispose(),x.dispose(),F.dispose(),q.dispose(),ee.dispose(),C.dispose(),Mt.dispose(),H.dispose(),H.removeEventListener("sessionstart",mo),H.removeEventListener("sessionend",_o),qn.stop()};function K(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const v=se.autoReset,D=pt.enabled,O=pt.autoUpdate,z=pt.needsUpdate,L=pt.type;st(),se.autoReset=v,pt.enabled=D,pt.autoUpdate=O,pt.needsUpdate=z,pt.type=L}function lt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Lt(v){const D=v.target;D.removeEventListener("dispose",Lt),ce(D)}function ce(v){Me(v),yt.remove(v)}function Me(v){const D=yt.get(v).programs;D!==void 0&&(D.forEach(function(O){Mt.releaseProgram(O)}),v.isShaderMaterial&&Mt.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,O,z,L,et){D===null&&(D=oe);const ct=L.isMesh&&L.matrixWorld.determinant()<0,_t=Vc(v,D,O,z,L);Tt.setMaterial(z,ct);let gt=O.index,Ct=1;if(z.wireframe===!0){if(gt=J.getWireframeAttribute(O),gt===void 0)return;Ct=2}const Ut=O.drawRange,xt=O.attributes.position;let qt=Ut.start*Ct,ne=(Ut.start+Ut.count)*Ct;et!==null&&(qt=Math.max(qt,et.start*Ct),ne=Math.min(ne,(et.start+et.count)*Ct)),gt!==null?(qt=Math.max(qt,0),ne=Math.min(ne,gt.count)):xt!=null&&(qt=Math.max(qt,0),ne=Math.min(ne,xt.count));const re=ne-qt;if(re<0||re===1/0)return;ee.setup(L,z,_t,O,gt);let Ce,jt=mt;if(gt!==null&&(Ce=Z.get(gt),jt=Ht,jt.setIndex(Ce)),L.isMesh)z.wireframe===!0?(Tt.setLineWidth(z.wireframeLinewidth*ue()),jt.setMode(U.LINES)):jt.setMode(U.TRIANGLES);else if(L.isLine){let St=z.linewidth;St===void 0&&(St=1),Tt.setLineWidth(St*ue()),L.isLineSegments?jt.setMode(U.LINES):L.isLineLoop?jt.setMode(U.LINE_LOOP):jt.setMode(U.LINE_STRIP)}else L.isPoints?jt.setMode(U.POINTS):L.isSprite&&jt.setMode(U.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)jt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))jt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const St=L._multiDrawStarts,hn=L._multiDrawCounts,Zt=L._multiDrawCount,Xe=gt?Z.get(gt).bytesPerElement:1,hi=yt.get(z).currentProgram.getUniforms();for(let Le=0;Le<Zt;Le++)hi.setValue(U,"_gl_DrawID",Le),jt.render(St[Le]/Xe,hn[Le])}else if(L.isInstancedMesh)jt.renderInstances(qt,re,L.count);else if(O.isInstancedBufferGeometry){const St=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,hn=Math.min(O.instanceCount,St);jt.renderInstances(qt,re,hn)}else jt.render(qt,re)};function Kt(v,D,O){v.transparent===!0&&v.side===vn&&v.forceSinglePass===!1?(v.side=De,v.needsUpdate=!0,Ss(v,D,O),v.side=Vn,v.needsUpdate=!0,Ss(v,D,O),v.side=vn):Ss(v,D,O)}this.compile=function(v,D,O=null){O===null&&(O=v),h=Xt.get(O),h.init(D),T.push(h),O.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),v!==O&&v.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),h.setupLights();const z=new Set;return v.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const et=L.material;if(et)if(Array.isArray(et))for(let ct=0;ct<et.length;ct++){const _t=et[ct];Kt(_t,O,L),z.add(_t)}else Kt(et,O,L),z.add(et)}),T.pop(),h=null,z},this.compileAsync=function(v,D,O=null){const z=this.compile(v,D,O);return new Promise(L=>{function et(){if(z.forEach(function(ct){yt.get(ct).currentProgram.isReady()&&z.delete(ct)}),z.size===0){L(v);return}setTimeout(et,10)}Bt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let We=null;function cn(v){We&&We(v)}function mo(){qn.stop()}function _o(){qn.start()}const qn=new xc;qn.setAnimationLoop(cn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(v){We=v,H.setAnimationLoop(v),v===null?qn.stop():qn.start()},H.addEventListener("sessionstart",mo),H.addEventListener("sessionend",_o),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,D,I),h=Xt.get(v,T.length),h.init(D),T.push(h),wt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),j.setFromProjectionMatrix(wt),vt=this.localClippingEnabled,nt=tt.init(this.clippingPlanes,vt),p=ft.get(v,b.length),p.init(),b.push(p),H.enabled===!0&&H.isPresenting===!0){const et=S.xr.getDepthSensingMesh();et!==null&&gr(et,D,-1/0,S.sortObjects)}gr(v,D,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(rt,dt),Wt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Wt&&At.addToRenderList(p,v),this.info.render.frame++,nt===!0&&tt.beginShadows();const O=h.state.shadowsArray;pt.render(O,v,D),nt===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,L=p.transmissive;if(h.setupLights(),D.isArrayCamera){const et=D.cameras;if(L.length>0)for(let ct=0,_t=et.length;ct<_t;ct++){const gt=et[ct];xo(z,L,v,gt)}Wt&&At.render(v);for(let ct=0,_t=et.length;ct<_t;ct++){const gt=et[ct];go(p,v,gt,gt.viewport)}}else L.length>0&&xo(z,L,v,D),Wt&&At.render(v),go(p,v,D);I!==null&&(y.updateMultisampleRenderTarget(I),y.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(S,v,D),ee.resetDefaultState(),E=-1,M=null,T.pop(),T.length>0?(h=T[T.length-1],nt===!0&&tt.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function gr(v,D,O,z){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||j.intersectsSprite(v)){z&&zt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(wt);const ct=q.update(v),_t=v.material;_t.visible&&p.push(v,ct,_t,O,zt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||j.intersectsObject(v))){const ct=q.update(v),_t=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),zt.copy(v.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),zt.copy(ct.boundingSphere.center)),zt.applyMatrix4(v.matrixWorld).applyMatrix4(wt)),Array.isArray(_t)){const gt=ct.groups;for(let Ct=0,Ut=gt.length;Ct<Ut;Ct++){const xt=gt[Ct],qt=_t[xt.materialIndex];qt&&qt.visible&&p.push(v,ct,qt,O,zt.z,xt)}}else _t.visible&&p.push(v,ct,_t,O,zt.z,null)}}const et=v.children;for(let ct=0,_t=et.length;ct<_t;ct++)gr(et[ct],D,O,z)}function go(v,D,O,z){const L=v.opaque,et=v.transmissive,ct=v.transparent;h.setupLightsView(O),nt===!0&&tt.setGlobalState(S.clippingPlanes,O),z&&Tt.viewport(R.copy(z)),L.length>0&&Ms(L,D,O),et.length>0&&Ms(et,D,O),ct.length>0&&Ms(ct,D,O),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function xo(v,D,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[z.id]===void 0&&(h.state.transmissionRenderTarget[z.id]=new ai(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?ms:bn,minFilter:si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const et=h.state.transmissionRenderTarget[z.id],ct=z.viewport||R;et.setSize(ct.z,ct.w);const _t=S.getRenderTarget();S.setRenderTarget(et),S.getClearColor(Y),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),Wt&&At.render(O);const gt=S.toneMapping;S.toneMapping=Hn;const Ct=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),h.setupLightsView(z),nt===!0&&tt.setGlobalState(S.clippingPlanes,z),Ms(v,O,z),y.updateMultisampleRenderTarget(et),y.updateRenderTargetMipmap(et),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let xt=0,qt=D.length;xt<qt;xt++){const ne=D[xt],re=ne.object,Ce=ne.geometry,jt=ne.material,St=ne.group;if(jt.side===vn&&re.layers.test(z.layers)){const hn=jt.side;jt.side=De,jt.needsUpdate=!0,vo(re,O,z,Ce,jt,St),jt.side=hn,jt.needsUpdate=!0,Ut=!0}}Ut===!0&&(y.updateMultisampleRenderTarget(et),y.updateRenderTargetMipmap(et))}S.setRenderTarget(_t),S.setClearColor(Y,$),Ct!==void 0&&(z.viewport=Ct),S.toneMapping=gt}function Ms(v,D,O){const z=D.isScene===!0?D.overrideMaterial:null;for(let L=0,et=v.length;L<et;L++){const ct=v[L],_t=ct.object,gt=ct.geometry,Ct=z===null?ct.material:z,Ut=ct.group;_t.layers.test(O.layers)&&vo(_t,D,O,gt,Ct,Ut)}}function vo(v,D,O,z,L,et){v.onBeforeRender(S,D,O,z,L,et),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),L.onBeforeRender(S,D,O,z,v,et),L.transparent===!0&&L.side===vn&&L.forceSinglePass===!1?(L.side=De,L.needsUpdate=!0,S.renderBufferDirect(O,D,z,L,v,et),L.side=Vn,L.needsUpdate=!0,S.renderBufferDirect(O,D,z,L,v,et),L.side=vn):S.renderBufferDirect(O,D,z,L,v,et),v.onAfterRender(S,D,O,z,L,et)}function Ss(v,D,O){D.isScene!==!0&&(D=oe);const z=yt.get(v),L=h.state.lights,et=h.state.shadowsArray,ct=L.state.version,_t=Mt.getParameters(v,L.state,et,D,O),gt=Mt.getProgramCacheKey(_t);let Ct=z.programs;z.environment=v.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(v.isMeshStandardMaterial?F:x).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Ct===void 0&&(v.addEventListener("dispose",Lt),Ct=new Map,z.programs=Ct);let Ut=Ct.get(gt);if(Ut!==void 0){if(z.currentProgram===Ut&&z.lightsStateVersion===ct)return So(v,_t),Ut}else _t.uniforms=Mt.getUniforms(v),v.onBeforeCompile(_t,S),Ut=Mt.acquireProgram(_t,gt),Ct.set(gt,Ut),z.uniforms=_t.uniforms;const xt=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(xt.clippingPlanes=tt.uniform),So(v,_t),z.needsLights=Xc(v),z.lightsStateVersion=ct,z.needsLights&&(xt.ambientLightColor.value=L.state.ambient,xt.lightProbe.value=L.state.probe,xt.directionalLights.value=L.state.directional,xt.directionalLightShadows.value=L.state.directionalShadow,xt.spotLights.value=L.state.spot,xt.spotLightShadows.value=L.state.spotShadow,xt.rectAreaLights.value=L.state.rectArea,xt.ltc_1.value=L.state.rectAreaLTC1,xt.ltc_2.value=L.state.rectAreaLTC2,xt.pointLights.value=L.state.point,xt.pointLightShadows.value=L.state.pointShadow,xt.hemisphereLights.value=L.state.hemi,xt.directionalShadowMap.value=L.state.directionalShadowMap,xt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,xt.spotShadowMap.value=L.state.spotShadowMap,xt.spotLightMatrix.value=L.state.spotLightMatrix,xt.spotLightMap.value=L.state.spotLightMap,xt.pointShadowMap.value=L.state.pointShadowMap,xt.pointShadowMatrix.value=L.state.pointShadowMatrix),z.currentProgram=Ut,z.uniformsList=null,Ut}function Mo(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=$s.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function So(v,D){const O=yt.get(v);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Vc(v,D,O,z,L){D.isScene!==!0&&(D=oe),y.resetTextureUnits();const et=D.fog,ct=z.isMeshStandardMaterial?D.environment:null,_t=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Gi,gt=(z.isMeshStandardMaterial?F:x).get(z.envMap||ct),Ct=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ut=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),xt=!!O.morphAttributes.position,qt=!!O.morphAttributes.normal,ne=!!O.morphAttributes.color;let re=Hn;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(re=S.toneMapping);const Ce=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,jt=Ce!==void 0?Ce.length:0,St=yt.get(z),hn=h.state.lights;if(nt===!0&&(vt===!0||v!==M)){const ze=v===M&&z.id===E;tt.setState(z,v,ze)}let Zt=!1;z.version===St.__version?(St.needsLights&&St.lightsStateVersion!==hn.state.version||St.outputColorSpace!==_t||L.isBatchedMesh&&St.batching===!1||!L.isBatchedMesh&&St.batching===!0||L.isBatchedMesh&&St.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&St.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&St.instancing===!1||!L.isInstancedMesh&&St.instancing===!0||L.isSkinnedMesh&&St.skinning===!1||!L.isSkinnedMesh&&St.skinning===!0||L.isInstancedMesh&&St.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&St.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&St.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&St.instancingMorph===!1&&L.morphTexture!==null||St.envMap!==gt||z.fog===!0&&St.fog!==et||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==tt.numPlanes||St.numIntersection!==tt.numIntersection)||St.vertexAlphas!==Ct||St.vertexTangents!==Ut||St.morphTargets!==xt||St.morphNormals!==qt||St.morphColors!==ne||St.toneMapping!==re||St.morphTargetsCount!==jt)&&(Zt=!0):(Zt=!0,St.__version=z.version);let Xe=St.currentProgram;Zt===!0&&(Xe=Ss(z,D,L));let hi=!1,Le=!1,qi=!1;const ae=Xe.getUniforms(),Qe=St.uniforms;if(Tt.useProgram(Xe.program)&&(hi=!0,Le=!0,qi=!0),z.id!==E&&(E=z.id,Le=!0),hi||M!==v){Tt.buffers.depth.getReversed()?(at.copy(v.projectionMatrix),Zh(at),Kh(at),ae.setValue(U,"projectionMatrix",at)):ae.setValue(U,"projectionMatrix",v.projectionMatrix),ae.setValue(U,"viewMatrix",v.matrixWorldInverse);const Rn=ae.map.cameraPosition;Rn!==void 0&&Rn.setValue(U,Dt.setFromMatrixPosition(v.matrixWorld)),kt.logarithmicDepthBuffer&&ae.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ae.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Le=!0,qi=!0)}if(L.isSkinnedMesh){ae.setOptional(U,L,"bindMatrix"),ae.setOptional(U,L,"bindMatrixInverse");const ze=L.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ae.setValue(U,"boneTexture",ze.boneTexture,y))}L.isBatchedMesh&&(ae.setOptional(U,L,"batchingTexture"),ae.setValue(U,"batchingTexture",L._matricesTexture,y),ae.setOptional(U,L,"batchingIdTexture"),ae.setValue(U,"batchingIdTexture",L._indirectTexture,y),ae.setOptional(U,L,"batchingColorTexture"),L._colorsTexture!==null&&ae.setValue(U,"batchingColorTexture",L._colorsTexture,y));const ji=O.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&Rt.update(L,O,Xe),(Le||St.receiveShadow!==L.receiveShadow)&&(St.receiveShadow=L.receiveShadow,ae.setValue(U,"receiveShadow",L.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Qe.envMap.value=gt,Qe.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(Qe.envMapIntensity.value=D.environmentIntensity),Le&&(ae.setValue(U,"toneMappingExposure",S.toneMappingExposure),St.needsLights&&Wc(Qe,qi),et&&z.fog===!0&&ot.refreshFogUniforms(Qe,et),ot.refreshMaterialUniforms(Qe,z,G,Q,h.state.transmissionRenderTarget[v.id]),$s.upload(U,Mo(St),Qe,y)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&($s.upload(U,Mo(St),Qe,y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ae.setValue(U,"center",L.center),ae.setValue(U,"modelViewMatrix",L.modelViewMatrix),ae.setValue(U,"normalMatrix",L.normalMatrix),ae.setValue(U,"modelMatrix",L.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const ze=z.uniformsGroups;for(let Rn=0,Cn=ze.length;Rn<Cn;Rn++){const Eo=ze[Rn];C.update(Eo,Xe),C.bind(Eo,Xe)}}return Xe}function Wc(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function Xc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,D,O){yt.get(v.texture).__webglTexture=D,yt.get(v.depthTexture).__webglTexture=O;const z=yt.get(v);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,D){const O=yt.get(v);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,O=0){I=v,w=D,A=O;let z=!0,L=null,et=!1,ct=!1;if(v){const gt=yt.get(v);if(gt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(U.FRAMEBUFFER,null),z=!1;else if(gt.__webglFramebuffer===void 0)y.setupRenderTarget(v);else if(gt.__hasExternalTextures)y.rebindTextures(v,yt.get(v.texture).__webglTexture,yt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const xt=v.depthTexture;if(gt.__boundDepthTexture!==xt){if(xt!==null&&yt.has(xt)&&(v.width!==xt.image.width||v.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(v)}}const Ct=v.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ct=!0);const Ut=yt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ut[D])?L=Ut[D][O]:L=Ut[D],et=!0):v.samples>0&&y.useMultisampledRTT(v)===!1?L=yt.get(v).__webglMultisampledFramebuffer:Array.isArray(Ut)?L=Ut[O]:L=Ut,R.copy(v.viewport),k.copy(v.scissor),B=v.scissorTest}else R.copy(Et).multiplyScalar(G).floor(),k.copy(Ot).multiplyScalar(G).floor(),B=te;if(Tt.bindFramebuffer(U.FRAMEBUFFER,L)&&z&&Tt.drawBuffers(v,L),Tt.viewport(R),Tt.scissor(k),Tt.setScissorTest(B),et){const gt=yt.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,gt.__webglTexture,O)}else if(ct){const gt=yt.get(v.texture),Ct=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,gt.__webglTexture,O||0,Ct)}E=-1},this.readRenderTargetPixels=function(v,D,O,z,L,et,ct){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){Tt.bindFramebuffer(U.FRAMEBUFFER,_t);try{const gt=v.texture,Ct=gt.format,Ut=gt.type;if(!kt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-z&&O>=0&&O<=v.height-L&&U.readPixels(D,O,z,L,Nt.convert(Ct),Nt.convert(Ut),et)}finally{const gt=I!==null?yt.get(I).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(v,D,O,z,L,et,ct){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){const gt=v.texture,Ct=gt.format,Ut=gt.type;if(!kt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=v.width-z&&O>=0&&O<=v.height-L){Tt.bindFramebuffer(U.FRAMEBUFFER,_t);const xt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.bufferData(U.PIXEL_PACK_BUFFER,et.byteLength,U.STREAM_READ),U.readPixels(D,O,z,L,Nt.convert(Ct),Nt.convert(Ut),0);const qt=I!==null?yt.get(I).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,qt);const ne=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await jh(U,ne,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,et),U.deleteBuffer(xt),U.deleteSync(ne),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,D=null,O=0){v.isTexture!==!0&&(es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,v=arguments[1]);const z=Math.pow(2,-O),L=Math.floor(v.image.width*z),et=Math.floor(v.image.height*z),ct=D!==null?D.x:0,_t=D!==null?D.y:0;y.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,O,0,0,ct,_t,L,et),Tt.unbindTexture()},this.copyTextureToTexture=function(v,D,O=null,z=null,L=0){v.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,v=arguments[1],D=arguments[2],L=arguments[3]||0,O=null);let et,ct,_t,gt,Ct,Ut,xt,qt,ne;const re=v.isCompressedTexture?v.mipmaps[L]:v.image;O!==null?(et=O.max.x-O.min.x,ct=O.max.y-O.min.y,_t=O.isBox3?O.max.z-O.min.z:1,gt=O.min.x,Ct=O.min.y,Ut=O.isBox3?O.min.z:0):(et=re.width,ct=re.height,_t=re.depth||1,gt=0,Ct=0,Ut=0),z!==null?(xt=z.x,qt=z.y,ne=z.z):(xt=0,qt=0,ne=0);const Ce=Nt.convert(D.format),jt=Nt.convert(D.type);let St;D.isData3DTexture?(y.setTexture3D(D,0),St=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(y.setTexture2DArray(D,0),St=U.TEXTURE_2D_ARRAY):(y.setTexture2D(D,0),St=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const hn=U.getParameter(U.UNPACK_ROW_LENGTH),Zt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Xe=U.getParameter(U.UNPACK_SKIP_PIXELS),hi=U.getParameter(U.UNPACK_SKIP_ROWS),Le=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,re.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,re.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,gt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ct),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ut);const qi=v.isDataArrayTexture||v.isData3DTexture,ae=D.isDataArrayTexture||D.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const Qe=yt.get(v),ji=yt.get(D),ze=yt.get(Qe.__renderTarget),Rn=yt.get(ji.__renderTarget);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,ze.__webglFramebuffer),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let Cn=0;Cn<_t;Cn++)qi&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(v).__webglTexture,L,Ut+Cn),v.isDepthTexture?(ae&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(D).__webglTexture,L,ne+Cn),U.blitFramebuffer(gt,Ct,et,ct,xt,qt,et,ct,U.DEPTH_BUFFER_BIT,U.NEAREST)):ae?U.copyTexSubImage3D(St,L,xt,qt,ne+Cn,gt,Ct,et,ct):U.copyTexSubImage2D(St,L,xt,qt,ne+Cn,gt,Ct,et,ct);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ae?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(St,L,xt,qt,ne,et,ct,_t,Ce,jt,re.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(St,L,xt,qt,ne,et,ct,_t,Ce,re.data):U.texSubImage3D(St,L,xt,qt,ne,et,ct,_t,Ce,jt,re):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,L,xt,qt,et,ct,Ce,jt,re.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,L,xt,qt,re.width,re.height,Ce,re.data):U.texSubImage2D(U.TEXTURE_2D,L,xt,qt,et,ct,Ce,jt,re);U.pixelStorei(U.UNPACK_ROW_LENGTH,hn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Zt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Xe),U.pixelStorei(U.UNPACK_SKIP_ROWS,hi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Le),L===0&&D.generateMipmaps&&U.generateMipmap(St),Tt.unbindTexture()},this.copyTextureToTexture3D=function(v,D,O=null,z=null,L=0){return v.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,z=arguments[1]||null,v=arguments[2],D=arguments[3],L=arguments[4]||0),es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,O,z,L)},this.initRenderTarget=function(v){yt.get(v).__webglFramebuffer===void 0&&y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?y.setTextureCube(v,0):v.isData3DTexture?y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?y.setTexture2DArray(v,0):y.setTexture2D(v,0),Tt.unbindTexture()},this.resetState=function(){w=0,A=0,I=null,Tt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class o0 extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class us extends Wi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const nr=new P,ir=new P,El=new ie,Qi=new cr,Vs=new lr,Yr=new P,yl=new P;class ro extends pe{constructor(t=new Fe,e=new us){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)nr.fromBufferAttribute(e,s-1),ir.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=nr.distanceTo(ir);t.setAttribute("lineDistance",new be(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(s),Vs.radius+=r,t.ray.intersectsSphere(Vs)===!1)return;El.copy(s).invert(),Qi.copy(t.ray).applyMatrix4(El);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=c){const h=u.getX(g),b=u.getX(g+1),T=Ws(this,t,Qi,l,h,b);T&&e.push(T)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(m),h=Ws(this,t,Qi,l,g,p);h&&e.push(h)}}else{const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=c){const h=Ws(this,t,Qi,l,g,g+1);h&&e.push(h)}if(this.isLineLoop){const g=Ws(this,t,Qi,l,_-1,m);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ws(n,t,e,i,s,r){const a=n.geometry.attributes.position;if(nr.fromBufferAttribute(a,s),ir.fromBufferAttribute(a,r),e.distanceSqToSegment(nr,ir,Yr,yl)>i)return;Yr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Yr);if(!(l<t.near||l>t.far))return{distance:l,point:yl.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const bl=new P,Tl=new P;class l0 extends ro{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)bl.fromBufferAttribute(e,s),Tl.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+bl.distanceTo(Tl);t.setAttribute("lineDistance",new be(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class c0 extends ro{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ao extends Re{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oo extends Fe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],m=[];let _=0;const g=[],p=i/2;let h=0;b(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(m,2));function b(){const S=new P,N=new P;let w=0;const A=(e-t)/i;for(let I=0;I<=r;I++){const E=[],M=I/r,R=M*(e-t)+t;for(let k=0;k<=s;k++){const B=k/s,Y=B*l+o,$=Math.sin(Y),X=Math.cos(Y);N.x=R*$,N.y=-M*i+p,N.z=R*X,f.push(N.x,N.y,N.z),S.set($,A,X).normalize(),d.push(S.x,S.y,S.z),m.push(B,1-M),E.push(_++)}g.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){const M=g[E][I],R=g[E+1][I],k=g[E+1][I+1],B=g[E][I+1];(t>0||E!==0)&&(u.push(M,R,B),w+=3),(e>0||E!==r-1)&&(u.push(R,k,B),w+=3)}c.addGroup(h,w,0),h+=w}function T(S){const N=_,w=new Pt,A=new P;let I=0;const E=S===!0?t:e,M=S===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,p*M,0),d.push(0,M,0),m.push(.5,.5),_++;const R=_;for(let k=0;k<=s;k++){const Y=k/s*l+o,$=Math.cos(Y),X=Math.sin(Y);A.x=E*X,A.y=p*M,A.z=E*$,f.push(A.x,A.y,A.z),d.push(0,M,0),w.x=$*.5+.5,w.y=X*.5*M+.5,m.push(w.x,w.y),_++}for(let k=0;k<s;k++){const B=N+k,Y=R+k;S===!0?u.push(Y,Y+1,B):u.push(Y+1,Y,B),I+=3}c.addGroup(h,I,S===!0?1:2),h+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lo extends Fe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new P,d=new P,m=[],_=[],g=[],p=[];for(let h=0;h<=i;h++){const b=[],T=h/i;let S=0;h===0&&a===0?S=.5/e:h===i&&l===Math.PI&&(S=-.5/e);for(let N=0;N<=e;N++){const w=N/e;f.x=-t*Math.cos(s+w*r)*Math.sin(a+T*o),f.y=t*Math.cos(a+T*o),f.z=t*Math.sin(s+w*r)*Math.sin(a+T*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),p.push(w+S,1-T),b.push(c++)}u.push(b)}for(let h=0;h<i;h++)for(let b=0;b<e;b++){const T=u[h][b+1],S=u[h][b],N=u[h+1][b],w=u[h+1][b+1];(h!==0||a>0)&&m.push(T,S,w),(h!==i-1||l<Math.PI)&&m.push(S,N,w)}this.setIndex(m),this.setAttribute("position",new be(_,3)),this.setAttribute("normal",new be(g,3)),this.setAttribute("uv",new be(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gt extends Wi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class h0 extends us{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class bc extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class u0 extends bc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qr=new ie,Al=new P,wl=new P;class d0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new no,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Al.setFromMatrixPosition(t.matrixWorld),e.position.copy(Al),wl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wl),e.updateMatrixWorld(),qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class f0 extends d0{constructor(){super(new io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class p0 extends bc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new f0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Rl=new ie;class m0{constructor(t,e,i=0,s=1/0){this.ray=new cr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Rl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rl),this}intersectObject(t,e=!0,i=[]){return za(t,this,i,e),i.sort(Cl),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)za(t[s],this,i,e);return i.sort(Cl),i}}function Cl(n,t){return n.distance-t.distance}function za(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)za(r[a],t,e,!0)}}class Pl{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _0 extends li{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);const Dl={type:"change"},co={type:"start"},Tc={type:"end"},Xs=new cr,Ll=new xn,g0=Math.cos(70*to.DEG2RAD),fe=new P,Pe=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jr=1e-6;class Ac extends _0{constructor(t,e=null){super(t,e),this.state=Qt.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:En.ROTATE,MIDDLE:En.DOLLY,RIGHT:En.PAN},this.touches={ONE:zn.ROTATE,TWO:zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new oi,this._lastTargetPosition=new P,this._quat=new oi().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pl,this._sphericalDelta=new Pl,this._scale=1,this._panOffset=new P,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new P,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=v0.bind(this),this._onPointerDown=x0.bind(this),this._onPointerUp=M0.bind(this),this._onContextMenu=w0.bind(this),this._onMouseWheel=y0.bind(this),this._onKeyDown=b0.bind(this),this._onTouchStart=T0.bind(this),this._onTouchMove=A0.bind(this),this._onMouseDown=S0.bind(this),this._onMouseMove=E0.bind(this),this._interceptControlDown=R0.bind(this),this._interceptControlUp=C0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dl),this.update(),this.state=Qt.NONE}update(t=null){const e=this.object.position;fe.copy(e).sub(this.target),fe.applyQuaternion(this._quat),this._spherical.setFromVector3(fe),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Pe:i>Math.PI&&(i-=Pe),s<-Math.PI?s+=Pe:s>Math.PI&&(s-=Pe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(fe.setFromSpherical(this._spherical),fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=fe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Xs.origin.copy(this.object.position),Xs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xs.direction))<g0?this.object.lookAt(this.target):(Ll.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xs.intersectPlane(Ll,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>jr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jr||this._lastTargetPosition.distanceToSquared(this.target)>jr?(this.dispatchEvent(Dl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pe/60*this.autoRotateSpeed*t:Pe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){fe.setFromMatrixColumn(e,0),fe.multiplyScalar(-t),this._panOffset.add(fe)}_panUp(t,e){this.screenSpacePanning===!0?fe.setFromMatrixColumn(e,1):(fe.setFromMatrixColumn(e,0),fe.crossVectors(this.object.up,fe)),fe.multiplyScalar(t),this._panOffset.add(fe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;fe.copy(s).sub(this.target);let r=fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Pe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Pe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Pe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Pe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function x0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function v0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function M0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tc),this.state=Qt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function S0(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case En.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Qt.DOLLY;break;case En.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Qt.ROTATE}break;case En.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(co)}function E0(n){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function y0(n){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(n.preventDefault(),this.dispatchEvent(co),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Tc))}function b0(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function T0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case zn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Qt.TOUCH_ROTATE;break;case zn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case zn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Qt.TOUCH_DOLLY_PAN;break;case zn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(co)}function A0(n){switch(this._trackPointer(n),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Qt.NONE}}function w0(n){this.enabled!==!1&&n.preventDefault()}function R0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function C0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class P0 extends pe{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Pt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const Ti=new P,Ul=new ie,Il=new ie,Nl=new P,Fl=new P;class D0{constructor(t={}){const e=this;let i,s,r,a;const o={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(_,g){_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),Ul.copy(g.matrixWorldInverse),Il.multiplyMatrices(g.projectionMatrix,Ul),u(_,_,g),m(_)},this.setSize=function(_,g){i=_,s=g,r=i/2,a=s/2,l.style.width=_+"px",l.style.height=g+"px"};function c(_){_.isCSS2DObject&&(_.element.style.display="none");for(let g=0,p=_.children.length;g<p;g++)c(_.children[g])}function u(_,g,p){if(_.visible===!1){c(_);return}if(_.isCSS2DObject){Ti.setFromMatrixPosition(_.matrixWorld),Ti.applyMatrix4(Il);const h=Ti.z>=-1&&Ti.z<=1&&_.layers.test(p.layers)===!0,b=_.element;b.style.display=h===!0?"":"none",h===!0&&(_.onBeforeRender(e,g,p),b.style.transform="translate("+-100*_.center.x+"%,"+-100*_.center.y+"%)translate("+(Ti.x*r+r)+"px,"+(-Ti.y*a+a)+"px)",b.parentNode!==l&&l.appendChild(b),_.onAfterRender(e,g,p));const T={distanceToCameraSquared:f(p,_)};o.objects.set(_,T)}for(let h=0,b=_.children.length;h<b;h++)u(_.children[h],g,p)}function f(_,g){return Nl.setFromMatrixPosition(_.matrixWorld),Fl.setFromMatrixPosition(g.matrixWorld),Nl.distanceToSquared(Fl)}function d(_){const g=[];return _.traverseVisible(function(p){p.isCSS2DObject&&g.push(p)}),g}function m(_){const g=d(_).sort(function(h,b){if(h.renderOrder!==b.renderOrder)return b.renderOrder-h.renderOrder;const T=o.objects.get(h).distanceToCameraSquared,S=o.objects.get(b).distanceToCameraSquared;return T-S}),p=g.length;for(let h=0,b=g.length;h<b;h++)g[h].element.style.zIndex=p-h}}}const ts=new P;function ke(n,t,e,i,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;ts.copy(t),ts[i]=0,ts.normalize();const c=.5*a/(a+o),u=1-ts.angleTo(n)/l;return Math.sign(ts[e])===1?u*c:o/(a+o)+c+c*(1-u)}class L0 extends on{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new P,l=new P,c=new P(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,m=u.length/6,_=new P,g=.5/s;for(let p=0,h=0;p<u.length;p+=3,h+=2)switch(o.fromArray(u,p),l.copy(o),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[p+0]=c.x*Math.sign(o.x)+l.x*r,u[p+1]=c.y*Math.sign(o.y)+l.y*r,u[p+2]=c.z*Math.sign(o.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/m)){case 0:_.set(1,0,0),d[h+0]=ke(_,l,"z","y",r,i),d[h+1]=1-ke(_,l,"y","z",r,e);break;case 1:_.set(-1,0,0),d[h+0]=1-ke(_,l,"z","y",r,i),d[h+1]=1-ke(_,l,"y","z",r,e);break;case 2:_.set(0,1,0),d[h+0]=1-ke(_,l,"x","z",r,t),d[h+1]=ke(_,l,"z","x",r,i);break;case 3:_.set(0,-1,0),d[h+0]=1-ke(_,l,"x","z",r,t),d[h+1]=1-ke(_,l,"z","x",r,i);break;case 4:_.set(0,0,1),d[h+0]=1-ke(_,l,"x","y",r,t),d[h+1]=1-ke(_,l,"y","x",r,e);break;case 5:_.set(0,0,-1),d[h+0]=ke(_,l,"x","y",r,t),d[h+1]=1-ke(_,l,"y","x",r,e);break}}}function wi(n,t,e=!1){const i=document.createElement("canvas");i.width=i.height=256;const s=i.getContext("2d");s.fillStyle=n,s.fillRect(0,0,256,256);let r=7;const a=()=>(r=r*16807%2147483647)/2147483647;if(e)for(let l=0;l<90;l++)s.fillStyle=`rgba(${a()<.5?"0,0,0":"255,255,255"},${.03+a()*t})`,s.fillRect(0,a()*256,256,1+a()*3);else for(let l=0;l<260;l++)s.fillStyle=`rgba(${a()<.5?"0,0,0":"255,255,255"},${a()*t})`,s.beginPath(),s.arc(a()*256,a()*256,6+a()*26,0,Math.PI*2),s.fill();const o=new ao(i);return o.wrapS=o.wrapT=ls,o.colorSpace=we,o}const wc=wi("#7a7c7f",.035);wc.repeat.set(3,3);const W={fabric:new Gt({map:wc,roughness:.95}),foot:new Gt({color:"#1d1d1f",roughness:.6}),white:new Gt({color:"#f1f1ee",roughness:.55}),appliance:new Gt({color:"#f4f4f2",roughness:.35,metalness:.05}),plastic:new Gt({color:"#9ea2a6",roughness:.5}),dark:new Gt({color:"#2a2b2e",roughness:.7}),wood:new Gt({map:wi("#b9ad9c",.08,!0),roughness:.75}),woodBack:new Gt({map:wi("#a89c8a",.07,!0),roughness:.8}),counter:new Gt({color:"#d9d9d6",roughness:.4}),metal:new Gt({color:"#c4c6c8",roughness:.3,metalness:.8}),glass:new Gt({color:"#b8c8cc",roughness:.05,transparent:!0,opacity:.25}),wire:new Gt({color:"#d0d0d0",roughness:.4,metalness:.6}),generic:new Gt({color:"#c9b79c",roughness:.8}),blackGloss:new Gt({color:"#17181a",roughness:.15,metalness:.1}),darkWood:new Gt({map:wi("#3a332c",.07,!0),roughness:.6}),lightWood:new Gt({map:wi("#d8c7a6",.08,!0),roughness:.65}),chrome:new Gt({color:"#cfd2d4",roughness:.2,metalness:.9}),blackMetal:new Gt({color:"#232427",roughness:.35,metalness:.7}),mattress:new Gt({map:wi("#f5f3ee",.03),roughness:.85}),mesh:new Gt({color:"#2b2d30",roughness:.8}),mirror:new Gt({color:"#9fb4bb",roughness:.05,metalness:.6})},sr=["#2f3e5c","#7a2b2b","#2e5a4a","#c9a13b","#e8e2d4","#4a4a4a","#8a5a3b","#3b6f8a","#d9d2c0"];function V(n,t,e,i,s,r,a,o,l=0){const c=i-e,u=r-s,f=o-a;if(c<=0||u<=0||f<=0)return null;const d=Math.min(l,c/2-.001,u/2-.001,f/2-.001),m=d>.002?new L0(c,u,f,3,d):new on(c,u,f),_=new xe(m,t);return _.position.set((e+i)/2,(s+r)/2,(a+o)/2),_.castShadow=_.receiveShadow=!0,n.add(_),_}function Tn(n,t,e,i,s,r,a){const o=new xe(new oo(e,e*.85,i,12),t);return o.position.set(s,r+i/2,a),o.castShadow=!0,n.add(o),o}function U0(n){let t=n;return()=>(t=t*16807%2147483647)/2147483647}function Zr(n,t,e,i){const s=new $t,r=.06,a=Math.min(.24,n*.2),o=Math.min(.64,e*.68),l=Math.min(.46,e*.5),c=-n/2,u=n/2,f=-t/2,d=t/2,m=c+a,_=u-a;for(const h of[c+.08,u-.08])for(const b of[f+.08,d-.08])Tn(s,W.foot,.03,r,h,0,b);V(s,W.fabric,m-.01,_+.01,r,l-.17,f+.1,d-.02,.03);for(const[h,b]of[[c,m],[_,u]])V(s,W.fabric,h+.01,b-.01,r,o-.1,f+.05,d-.03,.04),V(s,W.fabric,h,b,o-.16,o,f+.06,d,.07);const g=.2;V(s,W.fabric,m,_,r,e-.12,f,f+g,.04);const p=(_-m)/i;for(let h=0;h<i;h++){const b=m+h*p+.005,T=m+(h+1)*p-.005;V(s,W.fabric,b,T,l-.17,l,f+g+.1,d-.01,.05);const S=V(s,W.fabric,b,T,l-.02,e-.22,f+g-.02,f+g+.14,.05);S&&(S.rotation.x=-.1),V(s,W.fabric,b,T,e-.26,e,f+.02,f+g+.1,.08)}return s}function I0(n,t,e){const i=new $t,s=-n/2,r=n/2,a=-t/2,o=t/2;for(const l of[s+.05,r-.05])for(const c of[a+.05,o-.05])Tn(i,W.plastic,.02,.02,l,0,c);return V(i,W.appliance,s,r,.02,e-.07,a,o,.015),V(i,W.appliance,s-.005,r+.005,e-.07,e,a-.005,o+.005,.015),V(i,W.plastic,-n*.28,n*.28,e-.1,e-.06,o,o+.035,.01),V(i,W.dark,n*.18,n*.36,.05,.16,o,o+.006),V(i,W.dark,n*.1,n*.26,e*.62,e*.66,o,o+.004),i}function N0(n,t,e){const i=new $t,s=.018,r=.07,a=-n/2,o=n/2,l=-t/2,c=t/2;V(i,W.white,a,a+s,0,e,l,c),V(i,W.white,o-s,o,0,e,l,c),V(i,W.white,a+s,o-s,e-s,e,l,c),V(i,W.white,a+s,o-s,0,r,c-.03,c-.01),V(i,W.white,a+s,o-s,r,r+s,l,c),V(i,W.white,a+s,o-s,0,e,l,l+.006);const u=Math.max(2,Math.round((e-r)/.35)),f=(e-r-s)/u,d=U0(Math.round(n*1e3+e*100)||3);for(let m=0;m<u;m++){const _=r+s+m*f;if(m>0&&V(i,W.white,a+s,o-s,_-s,_,l,c-.005),m===0)continue;let g=a+s+.005;for(;g<o-s-.03;){const p=.015+d()*.03;if(g+p>o-s-.005)break;const h=Math.min(f-.03,.16+d()*.1),b=new Gt({color:sr[Math.floor(d()*sr.length)],roughness:.8});V(i,b,g,g+p,_,_+h,l+.03,Math.min(c-.02,l+.03+.15+d()*.05)),g+=p+.002}}return i}function F0(n,t,e){const i=new $t,s=.018,r=-n/2,a=n/2,o=-t/2,l=t/2,c=Math.min(.86,e*.47),u=Math.min(.32,t*.75),f=c+Math.min(.38,e*.2),d=r+n*.45;V(i,W.dark,r+.02,a-.02,0,.05,o+.02,l-.04),V(i,W.woodBack,r,a,.05,c-.02,o,l-.02),V(i,W.counter,r-.01,a+.01,c-.02,c+.01,o,l+.01);const m=l-.02,_=.004,g=r+n*.5;V(i,W.wood,r+s,g-_,.06,c-.03,m,m+.018),V(i,W.wood,g+_,a-s,c-.2,c-.03,m,m+.018),V(i,W.wood,g+_,a-s,.06,c-.2-_,m,m+.018);for(const[N,w]of[[g-.04,c-.12],[g+.04,c-.26],[(g+a)/2,c-.1]]){const A=new xe(new lo(.014,10,8),W.white);A.position.set(N,w,m+.03),i.add(A)}const p=o,h=o+u;V(i,W.woodBack,r,a,c+.01,e-.04,o,o+.012),V(i,W.wood,r,r+s,c+.01,e-.04,p,h),V(i,W.wood,a-s,a,c+.01,e-.04,p,h),V(i,W.wood,d,d+s,f,e-.04,p,h),V(i,W.plastic,r-.02,a+.02,e-.04,e,p,h+.03),V(i,W.wood,r+s,a-s,f-s,f,p,h);const b=e-.04-f;V(i,W.wood,r+s,d,f+b*.55,f+b*.55+s,p,h),V(i,W.wire,r+s,d,f+.02,f+.03,h-.01,h);const T=(d+a)/2,S=h;for(const[N,w,A]of[[d+s,T-_,W.glass],[T+_,a-s,W.white]])V(i,W.wood,N,w,f,f+.04,S,S+.016),V(i,W.wood,N,w,e-.08,e-.04,S,S+.016),V(i,W.wood,N,N+.04,f,e-.04,S,S+.016),V(i,W.wood,w-.04,w,f,e-.04,S,S+.016),V(i,A,N+.04,w-.04,f+.04,e-.08,S+.006,S+.01);return V(i,W.wood,d+s,a-s,f+b*.45,f+b*.45+s,p,h-.01),V(i,W.metal,T-.03,T-.018,f+b*.3,f+b*.6,S+.016,S+.03),V(i,W.metal,T+.018,T+.03,f+b*.3,f+b*.6,S+.016,S+.03),i}function O0(n,t,e){const i=new $t,s=-n/2,r=n/2,a=-t/2,o=t/2,l=.15,c=.32,u=W.white;for(const p of[s+.04,r-.04])for(const h of[a+.04,o-.04])V(i,u,p-.03,p+.03,0,l,h-.03,h+.03);V(i,u,s,r,l,c,a,o-.06,.02),V(i,W.mattress,s+.03,r-.03,c,c+.18,a+.03,o-.08,.03);const f=e,d=.06;V(i,u,s-.02,s+.06,0,f,a-.04,a+d),V(i,u,r-.06,r+.02,0,f,a-.04,a+d),V(i,u,s,r,f-.08,f,a-.04,a+d,.015),V(i,u,s,r,0,.16,a-.04,a+d);const m=Math.max(4,Math.round(n/.12)),_=(n-.2)/m;for(let p=0;p<m;p++){const h=s+.1+p*_;V(i,u,h+.01,h+_-.01,.2,f-.1,a-.03,a+d-.01)}const g=Math.min(.5,n*.42);for(const p of[s+n*.28,r-n*.28])V(i,W.mattress,p-g/2,p+g/2,c+.18,c+.3,a+.1,a+.4,.06);return i}function Ol(n,t,e){const i=new $t,s=-n/2,r=n/2,a=-t/2,o=t/2,l=.28;for(const[u,f]of[[s+.02,e],[r-.02,e]])for(const d of[a+.02,o-.02])Tn(i,W.white,.018,f,u,0,d);for(const u of[a+.02,o-.02])V(i,W.white,s,r,e-.03,e,u-.018,u+.018,.01);V(i,W.white,s,r,l-.03,l,a,o,.015),V(i,W.mattress,s+.03,r-.03,l,l+.18,a+.03,o-.03,.03);const c=Math.min(.5,n*.42);for(const u of[s+n*.28,r-n*.28])V(i,W.mattress,u-c/2,u+c/2,l+.18,l+.3,a+.08,a+.36,.06);return i}function z0(n,t,e){const i=new $t,s=.02,r=-n/2,a=n/2,o=-t/2,l=t/2;V(i,W.white,r,a,0,e,o,l,.01);const c=6,u=.01,f=(e-.04)/c;for(let d=0;d<c;d++){const m=.02+d*f,_=m+f-u;V(i,W.white,r+s,a-s,m,_,l-.01,l+.02,.006),V(i,W.dark,r+n*.5-n*.12,r+n*.5+n*.12,_-.025,_-.012,l+.018,l+.024)}return i}function B0(n,t,e){const i=new $t,s=.016,r=-n/2,a=n/2,o=-t/2,l=t/2;for(const m of[r+.02,a-.02])for(const _ of[o+.02,l-.02])Tn(i,W.dark,.016,.03,m,0,_);V(i,W.white,r,a,.05,e,o,l,.01);const c=4,u=.012,f=.05,d=(e-f-.02)/c;for(let m=0;m<c;m++){const _=f+m*d,g=_+d-u;V(i,W.white,r+s,a-s,_,g,l-.01,l+.018,.006)}return i}function k0(n,t,e){const i=new $t,s=-n/2,r=n/2,a=-t/2,o=t/2,l=Math.min(.72,e*.5),c=.04,u=n*.32;V(i,W.white,s,r,l-.03,l,a,o,.01),V(i,W.white,s,s+c,0,l-.03,a,o*.85),V(i,W.white,r-u,r,0,l-.03,a,o),V(i,W.dark,r-u*.6,r-u*.4,l*.4,l*.5,o+.005,o+.012);const f=l+.06,d=t*.55;V(i,W.white,s,s+.02,f,e,a,a+d),V(i,W.white,r-.02,r,f,e,a,a+d),V(i,W.white,s,r,e-.02,e,a,a+d);const m=f+(e-f)*.45;return V(i,W.white,s+.02,r-.02,m,m+.018,a,a+d,.005),V(i,W.white,s+.02,r-u+.02,e-.22,e-.2,a,a+d),i}function H0(n,t,e){const i=new $t,s=e*.42;V(i,W.dark,-n*.22,n*.22,0,.03,-t*.4,t*.4,.01);for(const r of[-t*.36,t*.36])V(i,W.dark,-.025,.025,0,.03,r-.03,r+.03);Tn(i,W.dark,.11,.05,0,.02,-t*.28),V(i,W.blackMetal,-.02,.02,.03,s*.55,-t*.1,-t*.1+.04,.01),V(i,W.blackMetal,-.02,.02,s*.5,e*.95,-t*.45,-t*.4,.01),V(i,W.dark,-n*.22,n*.22,s*.46,s*.56,-t*.18,t*.02,.04),V(i,W.dark,-n*.19,n*.19,e*.62,e*.92,-t*.48,-t*.36,.05),Tn(i,W.chrome,.015,e*.5,n*.26,s*.4,-t*.25);for(const r of[-1,1])V(i,W.plastic,r*.16-.04,r*.16+.04,.06,.1,-t*.3,-t*.2);return V(i,W.dark,-.05,.05,s*.5,s*.62,-t*.3,-t*.26,.01),i}function G0(n,t,e){const i=new $t,s=-n/2,r=n/2,a=-t/2,o=t/2,l=.08;for(const c of[s+.05,r-.05])for(const u of[a+.08,o-.1])Tn(i,W.darkWood,.025,l,c,0,u);return V(i,W.fabric,s,r,l,e*.42,a+.1,o,.05),V(i,W.fabric,s,s+.14,l,e*.75,a+.04,o,.06),V(i,W.fabric,r-.14,r,l,e*.75,a+.04,o,.06),V(i,W.fabric,s+.1,r-.1,e*.2,e,a,a+.22,.07),V(i,W.fabric,s+.14,r-.14,e*.4,e*.56,a+.18,o-.04,.05),i}function V0(n,t,e){const i=new $t,s=e*.46;Tn(i,W.blackMetal,.02,s*.85,0,0,0);for(let r=0;r<5;r++){const a=r/5*Math.PI*2;V(i,W.blackMetal,-.02,.02,0,.03,-.02,.02).position.set(Math.cos(a)*n*.4,.015,Math.sin(a)*n*.4),Tn(i,W.dark,.025,.025,Math.cos(a)*n*.42,0,Math.sin(a)*n*.42)}return V(i,W.dark,-n*.35,n*.35,s,s+.08,-t*.35,t*.35,.04),V(i,W.mesh,-n*.32,n*.32,s+.08,e,-t*.42,-t*.3,.04),V(i,W.blackMetal,-n*.5,-n*.3,s*.9,s*.9+.03,-t*.1,t*.2,.01),V(i,W.blackMetal,n*.3,n*.5,s*.9,s*.9+.03,-t*.1,t*.2,.01),i}function W0(n,t,e){const i=new $t,s=.018,r=-n/2,a=n/2,o=-t/2,l=t/2;V(i,W.white,r,r+s,0,e,o,l),V(i,W.white,a-s,a,0,e,o,l),V(i,W.white,r+s,a-s,e-s,e,o,l),V(i,W.white,r+s,a-s,0,s,o,l);const c=5,u=.015,f=(e-.03)/c,d=["#e8e4dd","#e8e4dd","#e8e4dd","#2a2b2e","#3e6fa8"];for(let m=0;m<c;m++){const _=.02+m*f,g=new Gt({color:d[m%d.length],roughness:.4,transparent:d[m%d.length]==="#e8e4dd",opacity:.85});V(i,g,r+s+u,a-s-u,_,_+f-u,o+.01,l-.01,.015)}return i}function X0(n,t,e){const i=new $t,s=-n/2,r=n/2,a=-t/2,o=t/2,l=e,c=e*.82,u=n*.32;V(i,W.white,s,r,l-.03,l,a,o,.01);for(const f of[-1,1]){const d=f<0?s:r-u,m=f<0?s+u:r;V(i,W.white,d,m,0,c,a,o,.01),V(i,W.dark,(d+m)/2-.12,(d+m)/2+.12,c*.45,c*.5,o+.002,o+.01)}return V(i,W.woodBack,s+u,r-u,0,.03,a,o,.005),i}function Y0(n,t,e){const i=new $t,s=-n/2,r=n/2,a=-t/2,o=t/2,l=e*.6;V(i,W.white,s,r,0,l,a,o,.01);const c=0;V(i,W.dark,c-.015,c+.015,l*.15,l*.85,o+.002,o+.01,.005);for(const f of[s+n*.2,r-n*.2])V(i,W.white,f-.012,f+.012,l*.42,l*.5,o+.012,o+.024,.006);const u=new xe(new on(n*.42,n*.42,.02),W.mirror);return u.position.set(0,l+n*.3,a+.01),u.rotation.z=Math.PI/4,u.castShadow=!0,i.add(u),i}function q0(n,t,e){const i=new $t,s=.02,r=-n/2,a=n/2,o=-t/2,l=t/2,c=W.darkWood,u=W.blackGloss;V(i,c,r,r+s,0,e,o,l),V(i,c,a-s,a,0,e,o,l),V(i,c,r,a,e-s,e,o,l),V(i,c,r,a,0,.03,o,l),V(i,W.white,r+s,a-s,.03,e-s,o,o+.01);const f=(n-2*s)/2+.02;V(i,u,r+s,r+s+f,.03,e-s,l-.03,l-.01,.01),V(i,u,a-s-f,a-s,.03,e-s,l-.05,l-.03,.01),V(i,W.chrome,r+n*.3,a-n*.3,e*.78,e*.78+.012,o+.05,o+.1);for(let d=0;d<4;d++){const m=r+n*.32+d*(n*.1);V(i,new Gt({color:sr[(d+2)%sr.length],roughness:.8}),m,m+.04,e*.3,e*.78-.02,o+.04,o+.11)}return i}function j0(n,t,e){const i=new $t,s=-n/2,r=n/2,a=-t/2,o=t/2,l=.035;V(i,W.plastic,s,r,e-.03,e,a,o,.015);for(const d of[s+.03,r-.03])for(const m of[a+.03,o-.03])V(i,W.plastic,d-l/2,d+l/2,0,e-.03,m-l/2,m+l/2);const c=n*.5,u=r+c*.5+.08,f=e*.55;V(i,W.wood,u-c/2,u+c/2,f-.03,f,a,a+t*.5,.01),V(i,W.wood,u-c/2,u+c/2,f,f+e*.4,a,a+.03,.01);for(const d of[u-c/2+.02,u+c/2-.02])for(const m of[a+.02,a+t*.5-.02])V(i,W.wood,d-.012,d+.012,0,f-.03,m-.012,m+.012);return i}function Z0(n,t,e){const i=new $t,s=4;for(let r=0;r<s;r++){const a=e*.2+r*(e*.75)/(s-1);V(i,W.lightWood,-n/2,n/2,a-.01,a+.01,-.01,.01,.005)}for(const r of[-1,1])V(i,W.lightWood,r*n/2-.015,r*n/2+.015,0,e,-.015,.015,.006),V(i,W.lightWood,r*n/2-.015,r*n*.35,0,.02,-t/2,.02,.006);return i}function K0(n,t,e){const i=new $t,s=e*.4;for(const a of[-1,1]){const o=V(i,W.lightWood,a*n*.48-.02,a*n*.48+.02,0,e,-t*.4,t*.42,.01);o&&(o.rotation.x=-.25)}V(i,W.fabric,-n*.42,n*.42,s,s+.08,-t*.3,t*.32,.05);const r=V(i,W.fabric,-n*.4,n*.4,s,e*.95,-t*.42,-t*.28,.06);return r&&(r.rotation.x=-.3),i}function $0(n,t,e){const i=new $t;return V(i,W.generic,-n/2,n/2,0,e,-t/2,t/2,.02),V(i,W.dark,-n*.3,n*.3,e*.45,e*.55,t/2,t/2+.005),i}const Ge={sofa3:{name:"3-seater sofa",w:200,d:92,h:95,zone:{front:60,back:0},build:(n,t,e)=>Zr(n,t,e,3)},sofa2:{name:"2-seater sofa",w:152,d:70,h:91,zone:{front:60,back:0},build:(n,t,e)=>Zr(n,t,e,2)},recliner:{name:"Recliner",w:98,d:95,h:100,zone:{front:65,back:15},build:(n,t,e)=>Zr(n,t,e,1)},freezer:{name:"Chest freezer",w:56,d:53,h:85,zone:{front:60,back:10},build:I0},bookcase:{name:"Bookcase",w:40,d:28,h:202,zone:{front:50,back:0},build:N0},pantry:{name:"Pantry cabinet",w:120,d:42,h:190,zone:{front:70,back:0},build:F0},bedHemnesKing:{name:"Hemnes bed (king)",w:180,d:200,h:100,zone:{front:70,back:0},build:O0},bedMetalQueen:{name:"Bed (metal frame, queen)",w:160,d:200,h:100,zone:{front:70,back:0},build:Ol},bedMetalSingle:{name:"Bed (metal frame, single)",w:90,d:190,h:90,zone:{front:60,back:0},build:Ol},malm6:{name:"Malm 6-drawer dresser",w:80,d:48,h:123,zone:{front:70,back:0},build:z0},alexCart:{name:"Alex drawer unit",w:36,d:58,h:70,zone:{front:40,back:0},build:B0},mickeDesk:{name:"Micke desk + hutch",w:100,d:50,h:148,zone:{front:60,back:0},build:k0},exerciseBike:{name:"Exercise bike",w:50,d:110,h:110,zone:{front:50,back:20},build:H0},fabricRecliner:{name:"Fabric recliner/rocker",w:78,d:90,h:100,zone:{front:65,back:15},build:G0},officeChair:{name:"Office chair",w:60,d:60,h:110,zone:{front:50,back:0},build:V0},binTower:{name:"Bin storage tower",w:40,d:45,h:160,zone:{front:50,back:0},build:W0},console:{name:"Console table",w:120,d:45,h:75,zone:{front:40,back:0},build:X0},hallCabinet:{name:"Hall cabinet + mirror",w:75,d:38,h:85,zone:{front:50,back:0},build:Y0},wardrobe:{name:"Sliding-door wardrobe",w:180,d:60,h:220,zone:{front:90,back:0},build:q0},kidsTable:{name:"Kids' table + chair",w:60,d:60,h:50,zone:{front:40,back:40},build:j0},dryingRack:{name:"Drying rack",w:60,d:50,h:95,zone:{front:20,back:0},build:Z0},accentChair:{name:"Accent chair",w:68,d:82,h:95,zone:{front:40,back:0},build:K0},box:{name:"Custom item",w:100,d:60,h:75,zone:{front:0,back:0},build:$0}};function J0(n,t,e,i){return(Ge[n]||Ge.box).build(t/100,e/100,i/100)}const Rc={a1:{name:"Type A1 · 4R2B + balcony",parts:[{id:"a1"}]},b1:{name:"Type B1 · 3R2B + balcony",parts:[{id:"b1"}]},terrace:{name:"Terrace house · both floors",parts:[{id:"tg",title:"Ground floor"},{id:"tf",title:"1st floor"}]}},zl=1.5,Q0={a1:[["sofa3",-.2,-2.4,270],["sofa2",-1.45,-.47,180],["recliner",-2.25,-3.05,135],["bookcase",-2.94,-1.45,90],["pantry",-3.98,2.54,180],["freezer",-3.65,1,270]],b1:[["sofa3",-.5,-2.2,90],["recliner",-3.75,-1.9,90],["bookcase",5.35,-3.9,270],["pantry",-1.9,3.9,0],["freezer",1,.3,90]],tg:[["sofa3",0,-1.1,0],["sofa2",-2.32,.99,90],["recliner",.8,.99,270],["bookcase",-3.36,-2.07,90],["pantry",-4.26,-5.77,90],["freezer",-.71,-8.22,180]]},Kr=new Map;function Bl(n){return new Promise((t,e)=>{const i=new Image;i.onload=()=>t(i),i.onerror=()=>e(new Error(`could not load ${n}`)),i.src=n})}async function t_(n){if(Kr.has(n))return Kr.get(n);const t=await(await fetch(`plans/${n}.json`)).json(),[e,i]=await Promise.all([Bl(t.floor),Bl(t.drawing).catch(()=>null)]),s=document.createElement("canvas");s.width=e.width,s.height=e.height;const r=s.getContext("2d");r.drawImage(e,0,0);const a=r.getImageData(0,0,s.width,s.height),o=r.createImageData(s.width,s.height);for(let c=0;c<a.data.length;c+=4)o.data[c+3]=a.data[c];r.putImageData(o,0,0);const l={...t,id:n,mask:s,drawing:i,maskData:a};return Kr.set(n,l),l}async function e_(n){const t=Rc[n],e=await Promise.all(t.parts.map(o=>t_(o.id))),i=e.reduce((o,l)=>o+l.w,0)+zl*(e.length-1),s=Math.max(...e.map(o=>o.d));let r=-i/2;const a=e.map((o,l)=>{const c={plan:o,title:t.parts[l].title,dx:r+o.w/2,dz:-s/2+o.d/2};return r+=o.w+zl,c});return{id:n,name:t.name,w:i,d:s,parts:a}}function n_(n){return n.parts.flatMap(({plan:t,dx:e,dz:i})=>(Q0[t.id]||[]).map(([s,r,a,o])=>[s,r+e,a+i,o]))}function i_(n,t,e){return n.parts.some(({plan:i,dx:s,dz:r})=>s_(i,t-s,e-r))}function s_(n,t,e){const{width:i,height:s,data:r}=n.maskData,a=Math.floor((t+n.w/2)/n.w*i),o=Math.floor((e+n.d/2)/n.d*s);return a<0||o<0||a>=i||o>=s?!1:r[(o*i+a)*4]>127}function r_(n,t){const i=Math.round(2048*n.d/n.w),s=document.createElement("canvas");s.width=2048,s.height=i;const r=s.getContext("2d");r.fillStyle="#efede8",r.fillRect(0,0,2048,i);const a=.6/n.w*2048;r.strokeStyle="#dcd8d0",r.lineWidth=1.5,r.beginPath();for(let l=0;l<2048;l+=a)r.moveTo(l,0),r.lineTo(l,i);for(let l=0;l<i;l+=a)r.moveTo(0,l),r.lineTo(2048,l);r.stroke(),t&&n.drawing&&(r.globalAlpha=.6,r.globalCompositeOperation="multiply",r.drawImage(n.drawing,0,0,2048,i)),r.globalAlpha=1,r.globalCompositeOperation="destination-in",r.drawImage(n.mask,0,0,2048,i);const o=new ao(s);return o.colorSpace=we,o.anisotropy=8,o}const $r={wall:"#e8e3da",hackable:"#efe3c4",fence:"#d9d4ca"},kl={wall:"#3f454c",hackable:"#c9a24e",fence:"#8a857c"},a_=1.5,Jr=new Gt({color:"#a9c6d3",roughness:.05,transparent:!0,opacity:.35,depthWrite:!1}),Hl=new Gt({color:"#8d9296",roughness:.4,metalness:.5}),Gl=new Gt({color:"#d6d2cb",roughness:.5}),o_=new Gt({color:"#8f8a83",roughness:.35}),l_=new Gt({color:"#2b2e33",roughness:1});function He(n,t,e,i,s,r,a){const o=new xe(new on(t-n,i-e,r-s),a);return o.position.set((n+t)/2,(e+i)/2,(s+r)/2),o.castShadow=o.receiveShadow=!0,o}function Vl(n,t){const e=new Gt({color:n,roughness:.9}),i=new Gt({color:t,roughness:.9});return[e,e,i,e,e,e]}function c_(n,t,e){for(const{plan:i,dx:s,dz:r,title:a}of t.parts){const o=new $t;if(o.position.set(s,0,r),h_(o,i,e),a){const l=e.label(a,"lbl dim");l.position.set(0,0,-i.d/2-.5),o.add(l)}n.add(o)}}function h_(n,t,{wallH:e,showDrawing:i,label:s}){const r=new xe(new ci(t.w,t.d),new Gt({map:r_(t,i),roughness:.6,alphaTest:.5}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r);const a=Object.fromEntries(Object.keys($r).map(l=>[l,Vl($r[l],kl[l])]));for(const l of t.walls){const c=l.kind==="fence"?Math.min(a_,e):e;n.add(He(l.x0,l.x1,0,c,l.z0,l.z1,a[l.kind]||a.wall))}const o=Vl($r.wall,kl.wall);for(const l of t.openings){const c=l.x1-l.x0>l.z1-l.z0,u=c?(l.z0+l.z1)/2:(l.x0+l.x1)/2,f=(_,g)=>c?He(l.x0,l.x1,_,g,u-.01,u+.01,Jr):He(u-.01,u+.01,_,g,l.z0,l.z1,Jr),d=(_,g)=>c?He(l.x0,l.x1,_,g,u-.025,u+.025,Hl):He(u-.025,u+.025,_,g,l.z0,l.z1,Hl),m=Math.min(l.head,e);if(l.sill>0&&n.add(He(l.x0,l.x1,0,Math.min(l.sill,e),l.z0,l.z1,o)),m>l.sill){const _=f(l.sill,m);_.castShadow=!1,n.add(_)}l.kind==="railing"?n.add(d(l.head-.04,l.head)):e>l.head&&n.add(He(l.x0,l.x1,l.head,e,l.z0,l.z1,o))}for(const l of t.fixtures||[])if(l.kind==="stairs"){const c=Math.max(2,Math.round(l.h/.18)),u=(l.z1-l.z0)/c;for(let f=0;f<c;f++)n.add(He(l.x0,l.x1,0,(f+1)*l.h/c,l.z1-(f+1)*u,l.z1-f*u,Gl))}else if(l.kind==="void"){const c=He(l.x0,l.x1,0,.012,l.z0,l.z1,l_);c.receiveShadow=!1,n.add(c);const u=.01;for(const[f,d,m,_]of[[l.x0,l.x1,l.z0,l.z0+u],[l.x0,l.x1,l.z1-u,l.z1],[l.x0,l.x0+u,l.z0,l.z1],[l.x1-u,l.x1,l.z0,l.z1]]){const g=He(f,d,0,l.h,m,_,Jr);g.castShadow=!1,n.add(g)}}else n.add(He(l.x0,l.x1,0,l.h-.03,l.z0,l.z1,Gl)),n.add(He(l.x0,l.x1,l.h-.03,l.h,l.z0,l.z1,o_));for(const l of t.rooms){const c=s(l.name,"lbl room");c.position.set(l.x,.01,l.z),n.add(c)}}function u_(n){return n.parts.flatMap(({plan:t,dx:e,dz:i})=>[...t.walls,...t.openings,...t.fixtures||[]].map(s=>({x0:s.x0+e,x1:s.x1+e,z0:s.z0+i,z1:s.z1+i})))}const Cc="home-planner-v1",d_=2.7,tn=.12,bt=n=>document.getElementById(n);let ht=f_()||{hall:{w:14,d:10},items:[]};ht.layout||="hall";ht.stash||={};ht.lowWalls??=!0;ht.drawing??=!0;let ve=null,ds=[],ho=ht.items.reduce((n,t)=>Math.max(n,t.id),0)+1,le=null,Xn="3d";function f_(){try{const n=JSON.parse(localStorage.getItem(Cc));return n?.hall&&Array.isArray(n.items)?n:null}catch{return null}}function uo(){localStorage.setItem(Cc,JSON.stringify(ht))}const ur=bt("stage"),an=new a0({antialias:!0});an.setPixelRatio(Math.min(devicePixelRatio,2));an.shadowMap.enabled=!0;an.shadowMap.type=ql;an.toneMapping=Zl;ur.prepend(an.domElement);const dr=new D0;Object.assign(dr.domElement.style,{position:"absolute",inset:"0",pointerEvents:"none"});ur.appendChild(dr.domElement);const An=new o0;An.background=new Vt("#e4e2dd");An.add(new u0("#ffffff","#b9b3a8",1.6));const Gn=new p0("#fff6e8",1.8);Gn.castShadow=!0;Gn.shadow.mapSize.set(2048,2048);Gn.shadow.bias=-5e-4;An.add(Gn,Gn.target);const ki=new Ve(45,1,.1,400),Hi=new io(-1,1,1,-1,.1,400);let Li=ki;const Ne=an.domElement;Ne.addEventListener("pointerdown",w_);Ne.addEventListener("pointermove",R_);Ne.addEventListener("pointerup",Oc);Ne.addEventListener("pointercancel",Oc);const Yn=new Ac(ki,Ne);Yn.enableDamping=!0;Yn.maxPolarAngle=Math.PI/2-.05;Yn.minDistance=1.5;const ln=new Ac(Hi,Ne);ln.enableRotate=!1;ln.screenSpacePanning=!0;ln.mouseButtons={LEFT:En.PAN,MIDDLE:En.DOLLY,RIGHT:En.PAN};ln.touches={ONE:zn.PAN,TWO:zn.DOLLY_PAN};ln.enabled=!1;const Fn=new $t;An.add(Fn);const Ba=[];function p_(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d");t.fillStyle="#efede8",t.fillRect(0,0,128,128),t.strokeStyle="#d8d4cc",t.lineWidth=2,t.strokeRect(0,0,128,128);const e=new ao(n);return e.wrapS=e.wrapT=ls,e.colorSpace=we,e.anisotropy=8,e}const m_=p_();function gs(n){n.traverse(t=>{t.isCSS2DObject&&t.element.remove(),t.geometry?.dispose()})}const fr=()=>ve?{w:ve.w,d:ve.d}:ht.hall;function pr(){gs(Fn),Fn.clear(),Ba.length=0;const{w:n,d:t}=fr(),e=Math.max(n,t)*.75;Gn.position.set(-n*.08,14,t*.12),Object.assign(Gn.shadow.camera,{left:-e,right:e,top:e,bottom:-e,near:1,far:40}),Gn.shadow.camera.updateProjectionMatrix();const i=ht.lowWalls?1:d_;if(ve){c_(Fn,ve,{wallH:i,showDrawing:ht.drawing,label:as}),ds=u_(ve);return}const s=m_.clone();s.needsUpdate=!0,s.repeat.set(n/.6,t/.6);const r=new xe(new ci(n,t),new Gt({map:s,roughness:.6}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,Fn.add(r);const a=[];for(let d=Math.ceil(-n/2);d<=n/2;d++)a.push(d,.002,-t/2,d,.002,t/2);for(let d=Math.ceil(-t/2);d<=t/2;d++)a.push(-n/2,.002,d,n/2,.002,d);const o=new l0(new Fe().setAttribute("position",new be(a,3)),new us({color:"#b8b2a7",transparent:!0,opacity:.5}));Fn.add(o);const l=new Gt({color:"#cfc6ba",roughness:.9}),c=[{sx:n+2*tn,sz:tn,x:0,z:-t/2-tn/2,outside:d=>d.z<-t/2},{sx:n+2*tn,sz:tn,x:0,z:t/2+tn/2,outside:d=>d.z>t/2},{sx:tn,sz:t,x:-n/2-tn/2,z:0,outside:d=>d.x<-n/2},{sx:tn,sz:t,x:n/2+tn/2,z:0,outside:d=>d.x>n/2}];for(const d of c){const m=new xe(new on(d.sx,i,d.sz),l);m.position.set(d.x,i/2,d.z),m.receiveShadow=!0,m.userData.outside=d.outside,Fn.add(m),Ba.push(m)}const u=as(`${n.toFixed(2)} m`,"lbl dim");u.position.set(0,0,t/2+.45);const f=as(`${t.toFixed(2)} m`,"lbl dim");f.position.set(n/2+.45,0,0),Fn.add(u,f),ds=c.map(d=>({x0:d.x-d.sx/2,x1:d.x+d.sx/2,z0:d.z-d.sz/2,z1:d.z+d.sz/2}))}function as(n,t="lbl"){const e=document.createElement("div");return e.className=t,e.textContent=n,new P0(e)}const fs=new $t;An.add(fs);const Je=new Map,ka={ok:new er({color:"#3d7ce0",transparent:!0,opacity:.16,depthWrite:!1}),bad:new er({color:"#e0962d",transparent:!0,opacity:.35,depthWrite:!1})},Ha={sel:new us({color:"#3d7ce0"}),bad:new us({color:"#d6453d"})};function __(n,t,e,i,s){const r=new Fe().setFromPoints([new P(n,s,e),new P(t,s,e),new P(t,s,i),new P(n,s,i)]);return new c0(r,Ha.sel)}function Pc(n){const t=n.w/200,e=n.d/200,i=[];return n.zoneFront>0&&i.push([e,e+n.zoneFront/100]),n.zoneBack>0&&i.push([-e-n.zoneBack/100,-e]),i.map(([s,r])=>({hw:t,z0:s,z1:r}))}function mr(n){const t=Je.get(n.id);t&&(gs(t.group),fs.remove(t.group));const e=new $t;e.userData.id=n.id;const i=J0(n.type,n.w,n.d,n.h);i.traverse(o=>{o.userData.id=n.id}),e.add(i);const s=Pc(n).map(o=>{const l=new xe(new ci(o.hw*2,o.z1-o.z0),ka.ok);return l.rotation.x=-Math.PI/2,l.position.set(0,.004,(o.z0+o.z1)/2),l.renderOrder=1,e.add(l),l}),r=__(-n.w/200,n.w/200,-n.d/200,n.d/200,.008);e.add(r);const a=as(n.name);a.position.set(0,n.h/100+.12,0),e.add(a),fs.add(e),Je.set(n.id,{group:e,model:i,zones:s,outline:r,nameLabel:a}),xs(n)}function xs(n){const t=Je.get(n.id);t.group.position.set(n.x,0,n.z),t.group.rotation.y=to.degToRad(n.rot),t.nameLabel.position.y=Xn==="top"?0:n.h/100+.12}function Dc(n,t,e,i){const s=to.degToRad(n.rot),r=Math.cos(s),a=Math.sin(s);return[[-t,e],[t,e],[t,i],[-t,i]].map(([o,l])=>[n.x+o*r+l*a,n.z-o*a+l*r])}const os=n=>Dc(n,n.w/200,-n.d/200,n.d/200),Ga=n=>Pc(n).map(t=>Dc(n,t.hw,t.z0,t.z1));function ps(n,t){for(const e of[n,t])for(let i=0;i<e.length;i++){const[s,r]=e[i],[a,o]=e[(i+1)%e.length],l=o-r,c=s-a,u=Math.hypot(l,c),f=_=>_.map(([g,p])=>(g*l+p*c)/u),d=f(n),m=f(t);if(Math.max(...d)<=Math.min(...m)+.005||Math.max(...m)<=Math.min(...d)+.005)return!1}return!0}function Va(n){if(!ve){const{w:s,d:r}=ht.hall;return n.some(([a,o])=>Math.abs(a)>s/2+.005||Math.abs(o)>r/2+.005)}const[t,e,,i]=n;for(let s=0;s<=4;s++)for(let r=0;r<=4;r++){const a=s/4,o=r/4,l=t[0]+(e[0]-t[0])*a+(i[0]-t[0])*o,c=t[1]+(e[1]-t[1])*a+(i[1]-t[1])*o;if(!i_(ve,l,c))return!0}return!1}const Lc=()=>ds.map(n=>[[n.x0,n.z0],[n.x1,n.z0],[n.x1,n.z1],[n.x0,n.z1]]),Wa=(n,t)=>t.some(e=>ps(n,e));function g_(){const n=ht.items.map(i=>({it:i,p:os(i)})),t=Lc(),e=new Map;for(const{it:i,p:s}of n){let r=Va(s)||Wa(s,t);for(const l of n)!r&&l.it!==i&&ps(s,l.p)&&(r=!0);const a=Ga(i).map(l=>Va(l)||Wa(l,t)||n.some(c=>c.it!==i&&ps(l,c.p)));e.set(i.id,r?"bad":a.some(Boolean)?"warn":"ok");const o=Je.get(i.id);o.zones.forEach((l,c)=>{l.material=a[c]?ka.bad:ka.ok}),o.outline.material=r?Ha.bad:Ha.sel,o.outline.visible=r||i.id===le,o.nameLabel.element.className=r?"lbl bad":"lbl"}return e}const Js=new $t;An.add(Js);const x_=new h0({color:"#26282c",dashSize:.08,gapSize:.05});function v_(){gs(Js),Js.clear();const n=ht.items.find(h=>h.id===le);if(!n)return;const t=os(n),e=t.map(h=>h[0]),i=t.map(h=>h[1]),s=Math.min(...e),r=Math.max(...e),a=Math.min(...i),o=Math.max(...i),l=.02,c=.01,u=ds.filter(h=>h.z0<=n.z&&h.z1>=n.z),f=ds.filter(h=>h.x0<=n.x&&h.x1>=n.x),d=Math.max(...u.filter(h=>h.x1<=s+c).map(h=>h.x1)),m=Math.min(...u.filter(h=>h.x0>=r-c).map(h=>h.x0)),_=Math.max(...f.filter(h=>h.z1<=a+c).map(h=>h.z1)),g=Math.min(...f.filter(h=>h.z0>=o-c).map(h=>h.z0)),p=[[[d,n.z],[s,n.z]],[[r,n.z],[m,n.z]],[[n.x,_],[n.x,a]],[[n.x,o],[n.x,g]]].filter(h=>h.flat().every(Number.isFinite));for(const[[h,b],[T,S]]of p){const N=Math.hypot(T-h,S-b);if(N<.01)continue;const w=new ro(new Fe().setFromPoints([new P(h,l,b),new P(T,l,S)]),x_);w.computeLineDistances();const A=as(`${Math.round(N*100)} cm`,"lbl dim");A.position.set((h+T)/2,l,(b+S)/2),Js.add(w,A)}}function wn({list:n=!0}={}){const t=g_();v_(),n&&b_(t),y_(),uo()}function M_(n,t={}){const e=Ge[n];return{id:ho++,type:n,name:e.name,w:e.w,d:e.d,h:e.h,zoneFront:e.zone.front,zoneBack:e.zone.back,x:0,z:0,rot:0,...t}}function S_(n,t=!0){const e=t?[os(n),...Ga(n)]:[os(n)],i=Lc();return e.some(s=>Va(s)||Wa(s,i))?!1:ht.items.every(s=>s.id===n.id||!e.some(r=>ps(r,os(s))||Ga(s).some(a=>ps(r,a))))}function Uc(n){const{w:t,d:e}=fr();for(const i of[!0,!1])for(let s=0;s<=Math.max(t,e);s+=.25){const r=s===0?1:Math.ceil(2*Math.PI*s/.25);for(let a=0;a<r;a++){const o=a/r*Math.PI*2;if(n.x=rr(s*Math.cos(o)),n.z=rr(s*Math.sin(o)),S_(n,i))return}}n.x=n.z=0}function gn(n,t){const e=M_(n,t);return(!t||t.x===void 0)&&Uc(e),ht.items.push(e),mr(e),Yi(e.id),e}function fo(n){const t=Je.get(n);t&&(gs(t.group),fs.remove(t.group),Je.delete(n)),ht.items=ht.items.filter(e=>e.id!==n),le===n&&(le=null),wn()}function Ic(n){const t=ht.items.find(r=>r.id===n);if(!t)return;const{id:e,...i}=t,s={...i,id:ho++};Uc(s),ht.items.push(s),mr(s),Yi(s.id)}function Ui(n,t){const e=ht.items.find(i=>i.id===n);e&&(e.rot=((e.rot+t)%360+360)%360,xs(e),wn())}function E_(){const n=ve?n_(ve):[];if(n.length){for(const[u,f,d,m]of n)gn(u,{x:f,z:d,rot:m});return}const{w:t,d:e}=ht.hall;if(ve||t<7||e<5){for(const u of["sofa3","sofa2","recliner","bookcase","pantry","freezer"])gn(u);return}const i=-t/2,s=-e/2,r=t/2,a=Ge.sofa3,o=Ge.sofa2,l=Ge.recliner,c=i+.5+o.d/200+.8+a.w/200;gn("sofa3",{x:c,z:s+a.d/200+.05,rot:0}),gn("sofa2",{x:i+o.d/200+.3,z:s+a.d/100+.6+o.w/200,rot:90}),gn("recliner",{x:c+a.w/200+.5+l.d/200,z:s+a.d/100+.9+l.w/200,rot:270}),gn("bookcase",{x:c+a.w/200+.5,z:s+Ge.bookcase.d/200,rot:0}),gn("pantry",{x:r-Ge.pantry.d/200,z:s+1.2,rot:270}),gn("freezer",{x:r-Ge.freezer.d/200-.1,z:s+1.2+Ge.pantry.w/200+.1+Ge.freezer.w/200,rot:270})}function Yi(n){le=n,wn()}const Nc={selName:"name",selW:"w",selD:"d",selH:"h",selZF:"zoneFront",selZB:"zoneBack"};function y_(){const n=ht.items.find(t=>t.id===le);if(bt("selection").hidden=!n,!!n){for(const[t,e]of Object.entries(Nc))document.activeElement!==bt(t)&&(bt(t).value=n[e]);bt("selRot").textContent=Math.round(n.rot)}}for(const[n,t]of Object.entries(Nc))bt(n).addEventListener("input",()=>{const e=ht.items.find(i=>i.id===le);if(e){if(t==="name")e.name=bt(n).value,Je.get(e.id).nameLabel.element.textContent=e.name;else{const i=parseFloat(bt(n).value);if(!Number.isFinite(i)||i<(t.startsWith("zone")?0:5))return;e[t]=i,mr(e)}wn()}});function b_(n){const t=bt("list");t.innerHTML="",bt("count").textContent=ht.items.length?`(${ht.items.length})`:"";for(const e of ht.items){const i=document.createElement("li");e.id===le&&(i.className="sel");const s=n.get(e.id);i.innerHTML=`<span class="dot ${s==="ok"?"":s}"></span><span></span><small>${e.w}×${e.d}</small>`,i.children[1].textContent=e.name,i.title=s==="bad"?"Overlapping another item or outside the hall":s==="warn"?"Its needed space is blocked":"",i.onclick=()=>{Yi(e.id),T_(e)},t.appendChild(i)}}function T_(n){const t=Xn==="top"?ln:Yn,e=new P(n.x,0,n.z).sub(t.target);t.target.add(e),t.object.position.add(e)}const _r=new m0,Wl=new Pt,A_=new xn(new P(0,1,0),0);let Bn=null,is=null;function Xa(n){const t=Ne.getBoundingClientRect();Wl.set((n.clientX-t.left)/t.width*2-1,-((n.clientY-t.top)/t.height)*2+1),_r.setFromCamera(Wl,Li)}function Fc(){return _r.ray.intersectPlane(A_,new P)}function rr(n){const t=parseFloat(bt("snap").value)/100;return t>0?Math.round(n/t)*t:n}function w_(n){if(n.button!==0)return;Xa(n),is={x:n.clientX,y:n.clientY};const t=_r.intersectObjects([...Je.values()].map(s=>s.model),!0)[0];if(!t)return;const e=ht.items.find(s=>s.id===t.object.userData.id),i=Fc();!e||!i||(Yn.enabled=ln.enabled=!1,Bn={id:e.id,dx:e.x-i.x,dz:e.z-i.z,pointerId:n.pointerId},Ne.setPointerCapture(n.pointerId),Ne.style.cursor="grabbing",le!==e.id&&Yi(e.id))}function R_(n){if(!Bn){if(n.buttons===0){Xa(n);const i=_r.intersectObjects([...Je.values()].map(s=>s.model),!0).length>0;Ne.style.cursor=i?"grab":""}return}Xa(n);const t=Fc();if(!t)return;const e=ht.items.find(i=>i.id===Bn.id);e.x=rr(t.x+Bn.dx),e.z=rr(t.z+Bn.dz),xs(e),wn({list:!1})}function Oc(n){Bn?(Ne.releasePointerCapture(Bn.pointerId),Bn=null,Ne.style.cursor="grab",vs(Xn),wn()):is&&Math.hypot(n.clientX-is.x,n.clientY-is.y)<4&&le!==null&&Yi(null),is=null}addEventListener("keydown",n=>{if(n.target.matches("input, select, textarea"))return;const t=n.key.toLowerCase();if(t==="t"&&vs(Xn==="3d"?"top":"3d"),le!==null){if(t==="q")Ui(le,-15);else if(t==="e")Ui(le,15);else if(t==="r")Ui(le,n.shiftKey?-90:90);else if(t==="delete"||t==="backspace")fo(le);else if(t==="d"&&(n.metaKey||n.ctrlKey))n.preventDefault(),Ic(le);else if(t==="escape")Yi(null);else if(t.startsWith("arrow")){n.preventDefault();const e=ht.items.find(s=>s.id===le),i=n.shiftKey?.1:.01;t==="arrowleft"&&(e.x-=i),t==="arrowright"&&(e.x+=i),t==="arrowup"&&(e.z-=i),t==="arrowdown"&&(e.z+=i),xs(e),wn()}}});function zc(){const{w:n,d:t}=fr(),e=Math.max(n,t);Yn.target.set(0,0,0),ki.position.set(0,e*.85,e*.95),ln.target.set(0,0,0),Hi.position.set(0,50,.001),Hi.zoom=1,Bc()}function vs(n){Xn=n,Li=n==="top"?Hi:ki,Yn.enabled=n==="3d",ln.enabled=n==="top",bt("view3d").classList.toggle("on",n==="3d"),bt("viewTop").classList.toggle("on",n==="top");for(const t of ht.items)xs(t)}function Bc(){const{clientWidth:n,clientHeight:t}=ur;an.setSize(n,t),dr.setSize(n,t),ki.aspect=n/t,ki.updateProjectionMatrix();const{w:e,d:i}=fr(),s=Math.max((e+2)/2/(n/t),(i+3.5)/2);Object.assign(Hi,{left:-s*(n/t),right:s*(n/t),top:s,bottom:-s}),Hi.updateProjectionMatrix()}new ResizeObserver(Bc).observe(ur);for(const[n,t]of Object.entries(Ge)){const e=document.createElement("button");e.innerHTML=`${t.name}<small>${t.w} × ${t.d} × ${t.h} cm</small>`,e.onclick=()=>gn(n),bt("catalog").appendChild(e)}bt("addAll").onclick=E_;bt("rotL").onclick=()=>Ui(le,-15);bt("rotR").onclick=()=>Ui(le,15);bt("rot90").onclick=()=>Ui(le,90);bt("dup").onclick=()=>Ic(le);bt("del").onclick=()=>fo(le);bt("view3d").onclick=()=>vs("3d");bt("viewTop").onclick=()=>vs("top");for(const n of["w","d"]){const t=bt(n==="w"?"hallW":"hallD");t.value=ht.hall[n],t.addEventListener("change",()=>{const e=parseFloat(t.value);if(!Number.isFinite(e)||e<2){t.value=ht.hall[n];return}ht.hall[n]=e,pr(),zc(),wn()})}for(const[n,t]of Object.entries(Rc))bt("layout").add(new Option(t.name,n));bt("layout").onchange=()=>{const n={...ht,stash:{...ht.stash,[ht.layout]:ht.items}};n.layout=bt("layout").value,n.items=n.stash[n.layout]||[],delete n.stash[n.layout],po(n)};bt("lowWalls").onchange=()=>{ht.lowWalls=bt("lowWalls").checked,pr(),uo()};bt("drawing").onchange=()=>{ht.drawing=bt("drawing").checked,pr(),uo()};bt("reset").onclick=()=>{if(!(!ht.items.length||!confirm("Remove all furniture from the hall?")))for(const n of[...ht.items])fo(n.id)};bt("export").onclick=()=>{const n=document.createElement("a");n.href=URL.createObjectURL(new Blob([JSON.stringify(ht,null,2)],{type:"application/json"})),n.download="home-layout.json",n.click(),URL.revokeObjectURL(n.href)};bt("import").onclick=()=>bt("importFile").click();bt("importFile").onchange=async n=>{const t=n.target.files[0];if(n.target.value="",!!t)try{const e=JSON.parse(await t.text());if(!e?.hall||!Array.isArray(e.items))throw new Error("not a layout file");po(e)}catch(e){alert(`Could not import: ${e.message}`)}};const kc="home-planner-about-seen";function Hc(){bt("aboutOverlay").hidden=!1}function Gc(){bt("aboutOverlay").hidden=!0,bt("aboutDontShow").checked&&localStorage.setItem(kc,"1")}bt("aboutBtn").onclick=Hc;bt("aboutClose").onclick=Gc;bt("aboutOverlay").onclick=n=>{n.target===bt("aboutOverlay")&&Gc()};localStorage.getItem(kc)||Hc();bt("shot").onclick=()=>{an.render(An,Li);const n=document.createElement("a");n.href=Ne.toDataURL("image/png"),n.download=`home-layout-${Xn}.png`,n.click()};function C_(){const n=ht.terraceMigrate||{};for(const t of["tg","tf"]){const e=ht.layout===t?ht.items:ht.stash[t];e?.length&&(n[t]=[...n[t]||[],...e]),delete ht.stash[t]}(ht.layout==="tg"||ht.layout==="tf")&&(ht.layout="terrace",ht.items=ht.stash.terrace||[],delete ht.stash.terrace),Object.keys(n).length&&(ht.terraceMigrate=n)}async function po(n){for(const e of Je.values())gs(e.group),fs.remove(e.group);if(Je.clear(),ht={layout:"hall",stash:{},lowWalls:!0,drawing:!0,...n},C_(),ho=[...ht.items,...Object.values(ht.stash).flat(),...Object.values(ht.terraceMigrate||{}).flat()].reduce((e,i)=>Math.max(e,i.id),0)+1,le=null,bt("hallW").value=ht.hall.w,bt("hallD").value=ht.hall.d,bt("layout").value=ht.layout,bt("lowWalls").checked=ht.lowWalls,bt("drawing").checked=ht.drawing,ve=ht.layout==="hall"?null:await e_(ht.layout),ve?.id==="terrace"&&ht.terraceMigrate){for(const e of ve.parts)for(const i of ht.terraceMigrate[e.plan.id]||[])ht.items.push({...i,x:i.x+e.dx,z:i.z+e.dz});delete ht.terraceMigrate}bt("hallSection").hidden=!!ve,bt("drawingToggle").hidden=!ve||!ve.parts.some(e=>e.plan.drawing),pr();for(const e of ht.items)mr(e);zc(),wn()}const Xl=new P;an.setAnimationLoop(()=>{(Xn==="top"?ln:Yn).update(),Li.getWorldPosition(Xl);for(const n of Ba){const t=n.geometry.parameters.height;n.scale.y=Xn==="3d"&&n.userData.outside(Xl)?.1/t:1,n.position.y=t*n.scale.y/2}an.render(An,Li),dr.render(An,Li)});po(ht).then(()=>{vs("3d")});
