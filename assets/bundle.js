(()=>{var wd=0,Uh=1,Td=2;var Fh=1,Ad=2,wi=3,si=0,tn=1,nn=2,Yi=0,Hs=1,sn=2,Nh=3,Oh=4,Rd=5,fs=100,Cd=101,Pd=102,Id=103,Ld=104,Dd=200,Ud=201,Fd=202,Nd=203,ac=204,oc=205,Od=206,kd=207,Bd=208,Hd=209,zd=210,Vd=211,Gd=212,Wd=213,Xd=214,Tc=0,Ac=1,Rc=2,zs=3,Cc=4,Pc=5,Ic=6,Lc=7,kh=0,qd=1,Yd=2,ji=0,jd=1,Kd=2,Jd=3,Dc=4,Zd=5,$d=6,Qd=7,Eh="attached",ep="detached",Bh=300,nr=301,ir=302,Uc=303,Fc=304,ao=306,ri=1e3,mi=1001,Ur=1002,Qt=1003,Nc=1004;var sr=1005;var dn=1006,Yr=1007;var ai=1008;var oi=1009,Hh=1010,zh=1011,jr=1012,Oc=1013,vs=1014,Bn=1015,Kr=1016,kc=1017,Bc=1018,Jr=1020,Vh=35902,Gh=1021,Wh=1022,Pn=1023,Fr=1026,Zr=1027,Hc=1028,zc=1029,Xh=1030,Vc=1031;var Gc=1033,oo=33776,co=33777,lo=33778,ho=33779,Wc=35840,Xc=35841,qc=35842,Yc=35843,jc=36196,Kc=37492,Jc=37496,Zc=37808,$c=37809,Qc=37810,el=37811,tl=37812,nl=37813,il=37814,sl=37815,rl=37816,al=37817,ol=37818,cl=37819,ll=37820,hl=37821,uo=36492,ul=36494,fl=36495,qh=36283,dl=36284,pl=36285,ml=36286,fo=2200,po=2201,tp=2202,Vs=2300,Gs=2301,rc=2302,Os=2400,ks=2401,Ua=2402,gl=2500,mo=2501,Yh=0,go=1,$r=2,np=3200,ip=3201;var jh=0,sp=1,Ki="",xt="srgb",en="srgb-linear",Fa="linear",dt="srgb";var Ns=7680;var wh=519,rp=512,ap=513,op=514,Kh=515,cp=516,lp=517,hp=518,up=519,cc=35044,Qr=35048;var Jh="300 es",gi=2e3,Na=2001;var xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bf=1234567,La=Math.PI/180,Ws=180/Math.PI;function ii(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Zh(i,e){return(i%e+e)%e}function A0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function R0(i,e,t){return i!==e?(t-i)/(e-i):0}function Da(i,e,t){return(1-t)*i+t*e}function C0(i,e,t,n){return Da(i,e,1-Math.exp(-t*n))}function P0(i,e=1){return e-Math.abs(Zh(i,e*2)-e)}function I0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function L0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function D0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function U0(i,e){return i+Math.random()*(e-i)}function F0(i){return i*(.5-Math.random())}function N0(i){i!==void 0&&(Bf=i);let e=Bf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function O0(i){return i*La}function k0(i){return i*Ws}function B0(i){return(i&i-1)===0&&i!==0}function H0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function z0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function V0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ee={DEG2RAD:La,RAD2DEG:Ws,generateUUID:ii,clamp:Ze,euclideanModulo:Zh,mapLinear:A0,inverseLerp:R0,lerp:Da,damp:C0,pingpong:P0,smoothstep:I0,smootherstep:L0,randInt:D0,randFloat:U0,randFloatSpread:F0,seededRandom:N0,degToRad:O0,radToDeg:k0,isPowerOfTwo:B0,ceilPowerOfTwo:H0,floorPowerOfTwo:z0,setQuaternionFromProperEuler:V0,normalize:ft,denormalize:ni},Pe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==f||l!==p||h!==g){let m=1-o,d=c*f+l*p+h*g+u*b,_=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let x=Math.sqrt(E),w=Math.atan2(x,d*_);m=Math.sin(m*w)/x,o=Math.sin(o*w)/x}let y=o*_;if(c=c*m+f*y,l=l*m+p*y,h=h*m+g*y,u=u*m+b*y,m===1-o){let x=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=x,l*=x,h*=x,u*=x}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*p-l*f,e[t+1]=c*g+h*f+l*u-o*p,e[t+2]=l*g+h*p+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jl=new R,Hf=new At,qe=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],b=s[0],m=s[3],d=s[6],_=s[1],E=s[4],y=s[7],x=s[2],w=s[5],A=s[8];return r[0]=a*b+o*_+c*x,r[3]=a*m+o*E+c*w,r[6]=a*d+o*y+c*A,r[1]=l*b+h*_+u*x,r[4]=l*m+h*E+u*w,r[7]=l*d+h*y+u*A,r[2]=f*b+p*_+g*x,r[5]=f*m+p*E+g*w,r[8]=f*d+p*y+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,p=l*r-a*c,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(s*l-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=f*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=p*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zl.makeScale(e,t)),this}rotate(e){return this.premultiply(Zl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zl=new qe;function $h(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fp(){let i=Nr("canvas");return i.style.display="block",i}var zf={};function Xs(i){i in zf||(zf[i]=!0,console.warn(i))}function dp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function pp(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mp(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Vf=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gf=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function G0(){let i={enabled:!0,workingColorSpace:en,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(s.r=Dr(s.r),s.g=Dr(s.g),s.b=Dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ki?Fa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[en]:{primaries:e,whitePoint:n,transfer:Fa,toXYZ:Vf,fromXYZ:Gf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Vf,fromXYZ:Gf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),i}var et=G0();function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mr,lc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mr===void 0&&(mr=Nr("canvas")),mr.width=e.width,mr.height=e.height;let s=mr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=mr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Nr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},W0=0,Or=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($l(s[a].image)):r.push($l(s[a]))}else r=$l(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function $l(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var X0=0,Ql=new R,jt=class i extends xi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=mi,s=mi,r=dn,a=ai,o=Pn,c=oi,l=i.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=ii(),this.name="",this.source=new Or(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ri:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ri:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Bh;jt.DEFAULT_ANISOTROPY=1;var ot=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],b=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,y=(p+1)/2,x=(d+1)/2,w=(h+f)/4,A=(u+b)/4,C=(g+m)/4;return E>y&&E>x?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=A/n):y>x?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=C/s):x<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(x),n=A/r,s=C/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-b)/_,this.z=(f-h)/_,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hc=class extends xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new jt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Or(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends hc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Oa=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var uc=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(r,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lo.copy(n.boundingBox)),Lo.applyMatrix4(e.matrixWorld),this.union(Lo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),Do.subVectors(this.max,va),gr.subVectors(e.a,va),br.subVectors(e.b,va),xr.subVectors(e.c,va),as.subVectors(br,gr),os.subVectors(xr,br),Ls.subVectors(gr,xr);let t=[0,-as.z,as.y,0,-os.z,os.y,0,-Ls.z,Ls.y,as.z,0,-as.x,os.z,0,-os.x,Ls.z,0,-Ls.x,-as.y,as.x,0,-os.y,os.x,0,-Ls.y,Ls.x,0];return!eh(t,gr,br,xr,Do)||(t=[1,0,0,0,1,0,0,0,1],!eh(t,gr,br,xr,Do))?!1:(Uo.crossVectors(as,os),t=[Uo.x,Uo.y,Uo.z],eh(t,gr,br,xr,Do))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ui=[new R,new R,new R,new R,new R,new R,new R,new R],Qn=new R,Lo=new pn,gr=new R,br=new R,xr=new R,as=new R,os=new R,Ls=new R,va=new R,Do=new R,Uo=new R,Ds=new R;function eh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ds.fromArray(i,r);let o=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),c=e.dot(Ds),l=t.dot(Ds),h=n.dot(Ds);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var q0=new pn,Ma=new R,th=new R,yn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):q0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);let t=Ma.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ma,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(th)),this.expandByPoint(Ma.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fi=new R,nh=new R,Fo=new R,cs=new R,ih=new R,No=new R,sh=new R,ds=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){nh.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(nh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Fo),o=cs.dot(this.direction),c=-cs.dot(Fo),l=cs.lengthSq(),h=Math.abs(1-a*a),u,f,p,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let b=1/h;u*=b,f*=b,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nh).addScaledVector(Fo,f),p}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);let n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,n,s,r){ih.subVectors(t,e),No.subVectors(n,e),sh.crossVectors(ih,No);let a=this.direction.dot(sh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cs.subVectors(this.origin,e);let c=o*this.direction.dot(No.crossVectors(cs,No));if(c<0)return null;let l=o*this.direction.dot(ih.cross(cs));if(l<0||c+l>a)return null;let h=-o*cs.dot(sh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,f,p,g,b,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,f,p,g,b,m)}set(e,t,n,s,r,a,o,c,l,h,u,f,p,g,b,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=b,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/yr.setFromMatrixColumn(e,0).length(),r=1/yr.setFromMatrixColumn(e,1).length(),a=1/yr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-b*l,t[9]=-o*c,t[2]=b-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,g=l*h,b=l*u;t[0]=f+b*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=b+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,g=l*h,b=l*u;t[0]=f-b*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=b-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,p=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+b,t[1]=c*u,t[5]=b*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+g,t[10]=f-b*u}else if(e.order==="XZY"){let f=a*c,p=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+b,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=b*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y0,e,j0)}lookAt(e,t,n){let s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),ls.crossVectors(n,Rn),ls.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),ls.crossVectors(n,Rn)),ls.normalize(),Oo.crossVectors(Rn,ls),s[0]=ls.x,s[4]=Oo.x,s[8]=Rn.x,s[1]=ls.y,s[5]=Oo.y,s[9]=Rn.y,s[2]=ls.z,s[6]=Oo.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],b=n[6],m=n[10],d=n[14],_=n[3],E=n[7],y=n[11],x=n[15],w=s[0],A=s[4],C=s[8],M=s[12],v=s[1],I=s[5],W=s[9],U=s[13],k=s[2],X=s[6],H=s[10],K=s[14],q=s[3],le=s[7],pe=s[11],Te=s[15];return r[0]=a*w+o*v+c*k+l*q,r[4]=a*A+o*I+c*X+l*le,r[8]=a*C+o*W+c*H+l*pe,r[12]=a*M+o*U+c*K+l*Te,r[1]=h*w+u*v+f*k+p*q,r[5]=h*A+u*I+f*X+p*le,r[9]=h*C+u*W+f*H+p*pe,r[13]=h*M+u*U+f*K+p*Te,r[2]=g*w+b*v+m*k+d*q,r[6]=g*A+b*I+m*X+d*le,r[10]=g*C+b*W+m*H+d*pe,r[14]=g*M+b*U+m*K+d*Te,r[3]=_*w+E*v+y*k+x*q,r[7]=_*A+E*I+y*X+x*le,r[11]=_*C+E*W+y*H+x*pe,r[15]=_*M+E*U+y*K+x*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],b=e[7],m=e[11],d=e[15];return g*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*p-n*c*p)+b*(+t*c*p-t*l*f+r*a*f-s*a*p+s*l*h-r*c*h)+m*(+t*l*u-t*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+d*(-s*o*h-t*c*u+t*o*f+s*a*u-n*a*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],b=e[13],m=e[14],d=e[15],_=u*m*l-b*f*l+b*c*p-o*m*p-u*c*d+o*f*d,E=g*f*l-h*m*l-g*c*p+a*m*p+h*c*d-a*f*d,y=h*b*l-g*u*l+g*o*p-a*b*p-h*o*d+a*u*d,x=g*u*c-h*b*c-g*o*f+a*b*f+h*o*m-a*u*m,w=t*_+n*E+s*y+r*x;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return e[0]=_*A,e[1]=(b*f*r-u*m*r-b*s*p+n*m*p+u*s*d-n*f*d)*A,e[2]=(o*m*r-b*c*r+b*s*l-n*m*l-o*s*d+n*c*d)*A,e[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*p-n*c*p)*A,e[4]=E*A,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*A,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*d-t*c*d)*A,e[7]=(a*f*r-h*c*r+h*s*l-t*f*l-a*s*p+t*c*p)*A,e[8]=y*A,e[9]=(g*u*r-h*b*r-g*n*p+t*b*p+h*n*d-t*u*d)*A,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*d+t*o*d)*A,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*p-t*o*p)*A,e[12]=x*A,e[13]=(h*b*s-g*u*s+g*n*f-t*b*f-h*n*m+t*u*m)*A,e[14]=(g*o*s-a*b*s-g*n*c+t*b*c+a*n*m-t*o*m)*A,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*f+t*o*f)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,p=r*h,g=r*u,b=a*h,m=a*u,d=o*u,_=c*l,E=c*h,y=c*u,x=n.x,w=n.y,A=n.z;return s[0]=(1-(b+d))*x,s[1]=(p+y)*x,s[2]=(g-E)*x,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(f+d))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(g+E)*A,s[9]=(m-_)*A,s[10]=(1-(f+b))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=yr.set(s[0],s[1],s[2]).length(),a=yr.set(s[4],s[5],s[6]).length(),o=yr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ei.copy(this);let l=1/r,h=1/a,u=1/o;return ei.elements[0]*=l,ei.elements[1]*=l,ei.elements[2]*=l,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,t.setFromRotationMatrix(ei),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=gi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(o===gi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Na)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gi){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),f=(t+e)*l,p=(n+s)*h,g,b;if(o===gi)g=(a+r)*u,b=-2*u;else if(o===Na)g=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},yr=new R,ei=new Ve,Y0=new R(0,0,0),j0=new R(1,1,1),ls=new R,Oo=new R,Rn=new R,Wf=new Ve,Xf=new At,_n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xf.setFromEuler(this),this.setFromQuaternion(Xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},K0=0,qf=new R,_r=new At,Ni=new Ve,ko=new R,Sa=new R,J0=new R,Z0=new At,Yf=new R(1,0,0),jf=new R(0,1,0),Kf=new R(0,0,1),Jf={type:"added"},$0={type:"removed"},vr={type:"childadded",child:null},rh={type:"childremoved",child:null},pt=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new _n,n=new At,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new qe}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(Yf,e)}rotateY(e){return this.rotateOnAxis(jf,e)}rotateZ(e){return this.rotateOnAxis(Kf,e)}translateOnAxis(e,t){return qf.copy(e).applyQuaternion(this.quaternion),this.position.add(qf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yf,e)}translateY(e){return this.translateOnAxis(jf,e)}translateZ(e){return this.translateOnAxis(Kf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ko.copy(e):ko.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Sa,ko,this.up):Ni.lookAt(ko,Sa,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),_r.setFromRotationMatrix(Ni),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jf),vr.child=e,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($0),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jf),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,J0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,Z0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};pt.DEFAULT_UP=new R(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=new R,Oi=new R,ah=new R,ki=new R,Mr=new R,Sr=new R,Zf=new R,oh=new R,ch=new R,lh=new R,hh=new ot,uh=new ot,fh=new ot,Hi=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ti.subVectors(e,t),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ti.subVectors(s,t),Oi.subVectors(n,t),ah.subVectors(e,t);let a=ti.dot(ti),o=ti.dot(Oi),c=ti.dot(ah),l=Oi.dot(Oi),h=Oi.dot(ah),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ki)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ki.x),c.addScaledVector(a,ki.y),c.addScaledVector(o,ki.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return hh.setScalar(0),uh.setScalar(0),fh.setScalar(0),hh.fromBufferAttribute(e,t),uh.fromBufferAttribute(e,n),fh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(hh,r.x),a.addScaledVector(uh,r.y),a.addScaledVector(fh,r.z),a}static isFrontFacing(e,t,n,s){return ti.subVectors(n,t),Oi.subVectors(e,t),ti.cross(Oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ti.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Mr.subVectors(s,n),Sr.subVectors(r,n),oh.subVectors(e,n);let c=Mr.dot(oh),l=Sr.dot(oh);if(c<=0&&l<=0)return t.copy(n);ch.subVectors(e,s);let h=Mr.dot(ch),u=Sr.dot(ch);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Mr,a);lh.subVectors(e,r);let p=Mr.dot(lh),g=Sr.dot(lh);if(g>=0&&p<=g)return t.copy(r);let b=p*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Sr,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Zf.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Zf,o);let d=1/(m+b+f);return a=b*d,o=f*d,t.copy(n).addScaledVector(Mr,a).addScaledVector(Sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function dh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=Zh(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=dh(a,r,e+1/3),this.g=dh(a,r,e),this.b=dh(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=gp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return et.workingToColorSpace(on.copy(this),e),Math.round(Ze(on.r*255,0,255))*65536+Math.round(Ze(on.g*255,0,255))*256+Math.round(Ze(on.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(on.copy(this),t);let n=on.r,s=on.g,r=on.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=xt){et.workingToColorSpace(on.copy(this),e);let t=on.r,n=on.g,s=on.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(Bo);let n=Da(hs.h,Bo.h,t),s=Da(hs.s,Bo.s,t),r=Da(hs.l,Bo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Se;Se.NAMES=gp;var Q0=0,mn=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Hs,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=oc,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ac&&(n.blendSrc=this.blendSrc),this.blendDst!==oc&&(n.blendDst=this.blendDst),this.blendEquation!==fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Vt=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Gt=new R,Ho=new Pe,eg=0,vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cc,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ho.fromBufferAttribute(this,t),Ho.applyMatrix3(e),this.setXY(t,Ho.x,Ho.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cc&&(e.usage=this.usage),e}};var ka=class extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ba=class extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},tg=0,On=new Ve,ph=new pt,Er=new R,Cn=new pn,Ea=new pn,$t=new R,Pt=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($h(e)?Ba:ka)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ea.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Cn.min,Ea.min),Cn.expandByPoint($t),$t.addVectors(Cn.max,Ea.max),Cn.expandByPoint($t)):(Cn.expandByPoint(Ea.min),Cn.expandByPoint(Ea.max))}Cn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)$t.fromBufferAttribute(o,l),c&&(Er.fromBufferAttribute(e,l),$t.add(Er)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new R,c[C]=new R;let l=new R,h=new R,u=new R,f=new Pe,p=new Pe,g=new Pe,b=new R,m=new R;function d(C,M,v){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),p.sub(f),g.sub(f);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),o[C].add(b),o[M].add(b),o[v].add(b),c[C].add(m),c[M].add(m),c[v].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,M=_.length;C<M;++C){let v=_[C],I=v.start,W=v.count;for(let U=I,k=I+W;U<k;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let E=new R,y=new R,x=new R,w=new R;function A(C){x.fromBufferAttribute(s,C),w.copy(x);let M=o[C];E.copy(M),E.sub(x.multiplyScalar(x.dot(M))).normalize(),y.crossVectors(w,M);let I=y.dot(c[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,I)}for(let C=0,M=_.length;C<M;++C){let v=_[C],I=v.start,W=v.count;for(let U=I,k=I+W;U<k;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?p=c[b]*o.data.stride+o.offset:p=c[b]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new vt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$f=new Ve,Us=new ds,zo=new yn,Qf=new R,Vo=new R,Go=new R,Wo=new R,mh=new R,Xo=new R,ed=new R,qo=new R,We=class extends pt{constructor(e=new Pt,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Xo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(mh.fromBufferAttribute(u,e),a?Xo.addScaledVector(mh,h):Xo.addScaledVector(mh.sub(t),h))}t.add(Xo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(r),Us.copy(e.ray).recast(e.near),!(zo.containsPoint(Us.origin)===!1&&(Us.intersectSphere(zo,Qf)===null||Us.origin.distanceToSquared(Qf)>(e.far-e.near)**2))&&($f.copy(r).invert(),Us.copy(e.ray).applyMatrix4($f),!(n.boundingBox!==null&&Us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Us)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){let m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,x=E;y<x;y+=3){let w=o.getX(y),A=o.getX(y+1),C=o.getX(y+2);s=Yo(this,d,e,n,l,h,u,w,A,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=g,d=b;m<d;m+=3){let _=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=Yo(this,a,e,n,l,h,u,_,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){let m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,x=E;y<x;y+=3){let w=y,A=y+1,C=y+2;s=Yo(this,d,e,n,l,h,u,w,A,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let m=g,d=b;m<d;m+=3){let _=m,E=m+1,y=m+2;s=Yo(this,a,e,n,l,h,u,_,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ng(i,e,t,n,s,r,a,o){let c;if(e.side===tn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===si,o),c===null)return null;qo.copy(o),qo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(qo);return l<t.near||l>t.far?null:{distance:l,point:qo.clone(),object:i}}function Yo(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Vo),i.getVertexPosition(c,Go),i.getVertexPosition(l,Wo);let h=ng(i,e,t,n,Vo,Go,Wo,ed);if(h){let u=new R;Hi.getBarycoord(ed,Vo,Go,Wo,u),s&&(h.uv=Hi.getInterpolatedAttribute(s,o,c,l,u,new Pe)),r&&(h.uv1=Hi.getInterpolatedAttribute(r,o,c,l,u,new Pe)),a&&(h.normal=Hi.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new R,materialIndex:0};Hi.getNormal(Vo,Go,Wo,f.normal),h.face=f,h.barycoord=u}return h}var ps=class i extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(u,2));function g(b,m,d,_,E,y,x,w,A,C,M){let v=y/A,I=x/C,W=y/2,U=x/2,k=w/2,X=A+1,H=C+1,K=0,q=0,le=new R;for(let pe=0;pe<H;pe++){let Te=pe*I-U;for(let Xe=0;Xe<X;Xe++){let yt=Xe*v-W;le[b]=yt*_,le[m]=Te*E,le[d]=k,l.push(le.x,le.y,le.z),le[b]=0,le[m]=0,le[d]=w>0?1:-1,h.push(le.x,le.y,le.z),u.push(Xe/A),u.push(1-pe/C),K+=1}}for(let pe=0;pe<C;pe++)for(let Te=0;Te<A;Te++){let Xe=f+Te+X*pe,yt=f+Te+X*(pe+1),Z=f+(Te+1)+X*(pe+1),se=f+(Te+1)+X*pe;c.push(Xe,yt,se),c.push(yt,Z,se),q+=6}o.addGroup(p,q,M),p+=q,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function rr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=rr(i[t]);for(let s in n)e[s]=n[s]}return e}function ig(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var bp={clone:rr,merge:cn},sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sg,this.fragmentShader=rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=ig(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ha=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},us=new R,td=new Pe,nd=new Pe,Wt=class extends Ha{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,td,nd),t.subVectors(nd,td)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(La*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wr=-90,Tr=1,fc=class extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wt(wr,Tr,e,t);s.layers=this.layers,this.add(s);let r=new Wt(wr,Tr,e,t);r.layers=this.layers,this.add(r);let a=new Wt(wr,Tr,e,t);a.layers=this.layers,this.add(a);let o=new Wt(wr,Tr,e,t);o.layers=this.layers,this.add(o);let c=new Wt(wr,Tr,e,t);c.layers=this.layers,this.add(c);let l=new Wt(wr,Tr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Na)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},za=class extends jt{constructor(e=[],t=nr,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},dc=class extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new za(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ps(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Yi});r.uniforms.tEquirect.value=t;let a=new We(s,r),o=t.minFilter;return t.minFilter===ai&&(t.minFilter=dn),new fc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Xt=class extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ag={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),d=this._getHandJoint(l,b);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ag)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var qs=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ys=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cc,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},un=new R,ms=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ot=class extends mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ar,wa=new R,Rr=new R,Cr=new R,Pr=new Pe,Ta=new Pe,xp=new Ve,jo=new R,Aa=new R,Ko=new R,id=new Pe,gh=new Pe,sd=new Pe,Bt=class extends pt{constructor(e=new Ot){if(super(),this.isSprite=!0,this.type="Sprite",Ar===void 0){Ar=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ys(t,5);Ar.setIndex([0,1,2,0,2,3]),Ar.setAttribute("position",new ms(n,3,0,!1)),Ar.setAttribute("uv",new ms(n,2,3,!1))}this.geometry=Ar,this.material=e,this.center=new Pe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rr.setFromMatrixScale(this.matrixWorld),xp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rr.multiplyScalar(-Cr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Jo(jo.set(-.5,-.5,0),Cr,a,Rr,s,r),Jo(Aa.set(.5,-.5,0),Cr,a,Rr,s,r),Jo(Ko.set(.5,.5,0),Cr,a,Rr,s,r),id.set(0,0),gh.set(1,0),sd.set(1,1);let o=e.ray.intersectTriangle(jo,Aa,Ko,!1,wa);if(o===null&&(Jo(Aa.set(-.5,.5,0),Cr,a,Rr,s,r),gh.set(0,1),o=e.ray.intersectTriangle(jo,Ko,Aa,!1,wa),o===null))return;let c=e.ray.origin.distanceTo(wa);c<e.near||c>e.far||t.push({distance:c,point:wa.clone(),uv:Hi.getInterpolation(wa,jo,Aa,Ko,id,gh,sd,new Pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Jo(i,e,t,n,s,r){Pr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ta.x=r*Pr.x-s*Pr.y,Ta.y=s*Pr.x+r*Pr.y):Ta.copy(Pr),i.copy(e),i.x+=Ta.x,i.y+=Ta.y,i.applyMatrix4(xp)}var rd=new R,ad=new ot,od=new ot,og=new R,cd=new Ve,Zo=new R,bh=new yn,ld=new Ve,xh=new ds,Va=class extends We{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eh,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zo),this.boundingBox.expandByPoint(Zo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zo),this.boundingSphere.expandByPoint(Zo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bh.copy(this.boundingSphere),bh.applyMatrix4(s),e.ray.intersectsSphere(bh)!==!1&&(ld.copy(s).invert(),xh.copy(e.ray).applyMatrix4(ld),!(this.boundingBox!==null&&xh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Eh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ep?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;ad.fromBufferAttribute(s.attributes.skinIndex,e),od.fromBufferAttribute(s.attributes.skinWeight,e),rd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=od.getComponent(r);if(a!==0){let o=ad.getComponent(r);cd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(og.copy(rd).applyMatrix4(cd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Hr=class extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ga=class extends jt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Qt,h=Qt,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hd=new Ve,cg=new Ve,Wa=class i{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:cg;hd.multiplyMatrices(o,t[r]),hd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ga(t,e,e,Pn,Bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Hr),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},gs=class extends vt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ir=new Ve,ud=new Ve,$o=[],fd=new pn,lg=new Ve,Ra=new We,Ca=new yn,js=class extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),fd.copy(e.boundingBox).applyMatrix4(Ir),this.boundingBox.union(fd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),Ca.copy(e.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(Ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ra.geometry=this.geometry,Ra.material=this.material,Ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(n),e.ray.intersectsSphere(Ca)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ir),ud.multiplyMatrices(n,Ir),Ra.matrixWorld=ud,Ra.raycast(e,$o);for(let a=0,o=$o.length;a<o;a++){let c=$o[a];c.instanceId=r,c.object=this,t.push(c)}$o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ga(new Float32Array(s*this.count),s,this.count,Hc,Bn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},yh=new R,hg=new R,ug=new qe,fn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=yh.subVectors(n,t).cross(hg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(yh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ug.getNormalMatrix(e),s=this.coplanarPoint(yh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fs=new yn,fg=new Pe(.5,.5),Qo=new R,zr=class{constructor(e=new fn,t=new fn,n=new fn,s=new fn,r=new fn,a=new fn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],b=s[10],m=s[11],d=s[12],_=s[13],E=s[14],y=s[15];if(n[0].setComponents(c-r,f-l,m-p,y-d).normalize(),n[1].setComponents(c+r,f+l,m+p,y+d).normalize(),n[2].setComponents(c+a,f+h,m+g,y+_).normalize(),n[3].setComponents(c-a,f-h,m-g,y-_).normalize(),n[4].setComponents(c-o,f-u,m-b,y-E).normalize(),t===gi)n[5].setComponents(c+o,f+u,m+b,y+E).normalize();else if(t===Na)n[5].setComponents(o,u,b,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);let t=fg.distanceTo(e.center);return Fs.radius=.7071067811865476+t,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Qo.x=s.normal.x>0?e.max.x:e.min.x,Qo.y=s.normal.y>0?e.max.y:e.min.y,Qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ks=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pc=new R,mc=new R,dd=new Ve,Pa=new ds,ec=new yn,_h=new R,pd=new R,_i=class extends pt{constructor(e=new Pt,t=new Ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)pc.fromBufferAttribute(t,s-1),mc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=pc.distanceTo(mc);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ec.copy(n.boundingSphere),ec.applyMatrix4(s),ec.radius+=r,e.ray.intersectsSphere(ec)===!1)return;dd.copy(s).invert(),Pa.copy(e.ray).applyMatrix4(dd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=l){let d=h.getX(b),_=h.getX(b+1),E=tc(this,e,Pa,c,d,_,b);E&&t.push(E)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(p),d=tc(this,e,Pa,c,b,m,g-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=l){let d=tc(this,e,Pa,c,b,b+1,b);d&&t.push(d)}if(this.isLineLoop){let b=tc(this,e,Pa,c,g-1,p,g-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function tc(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(pc.fromBufferAttribute(o,s),mc.fromBufferAttribute(o,r),t.distanceSqToSegment(pc,mc,_h,pd)>n)return;_h.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(_h);if(!(l<e.near||l>e.far))return{distance:l,point:pd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var md=new R,gd=new R,Xa=class extends _i{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)md.fromBufferAttribute(t,s),gd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+md.distanceTo(gd);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},qa=class extends _i{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Vr=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bd=new Ve,Th=new ds,nc=new yn,ic=new R,bs=class extends pt{constructor(e=new Pt,t=new Vr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nc.copy(n.boundingSphere),nc.applyMatrix4(s),nc.radius+=r,e.ray.intersectsSphere(nc)===!1)return;bd.copy(s).invert(),Th.copy(e.ray).applyMatrix4(bd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=f,b=p;g<b;g++){let m=l.getX(g);ic.fromBufferAttribute(u,m),xd(ic,m,c,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,b=p;g<b;g++)ic.fromBufferAttribute(u,g),xd(ic,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xd(i,e,t,n,s,r,a){let o=Th.distanceSqToPoint(i);if(o<t){let c=new R;Th.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var kn=class extends jt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ya=class extends jt{constructor(e,t,n=vs,s,r,a,o=Qt,c=Qt,l,h=Fr,u=1){if(h!==Fr&&h!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Or(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var ja=class i extends Pt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Mt(r,3)),this.setAttribute("normal",new Mt(r.slice(),3)),this.setAttribute("uv",new Mt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let E=new R,y=new R,x=new R;for(let w=0;w<t.length;w+=3)p(t[w+0],E),p(t[w+1],y),p(t[w+2],x),c(E,y,x,_)}function c(_,E,y,x){let w=x+1,A=[];for(let C=0;C<=w;C++){A[C]=[];let M=_.clone().lerp(y,C/w),v=E.clone().lerp(y,C/w),I=w-C;for(let W=0;W<=I;W++)W===0&&C===w?A[C][W]=M:A[C][W]=M.clone().lerp(v,W/I)}for(let C=0;C<w;C++)for(let M=0;M<2*(w-C)-1;M++){let v=Math.floor(M/2);M%2===0?(f(A[C][v+1]),f(A[C+1][v]),f(A[C][v])):(f(A[C][v+1]),f(A[C+1][v+1]),f(A[C+1][v]))}}function l(_){let E=new R;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(_),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function h(){let _=new R;for(let E=0;E<r.length;E+=3){_.x=r[E+0],_.y=r[E+1],_.z=r[E+2];let y=m(_)/2/Math.PI+.5,x=d(_)/Math.PI+.5;a.push(y,1-x)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let E=a[_+0],y=a[_+2],x=a[_+4],w=Math.max(E,y,x),A=Math.min(E,y,x);w>.9&&A<.1&&(E<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),x<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function p(_,E){let y=_*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function g(){let _=new R,E=new R,y=new R,x=new R,w=new Pe,A=new Pe,C=new Pe;for(let M=0,v=0;M<r.length;M+=9,v+=6){_.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),w.set(a[v+0],a[v+1]),A.set(a[v+2],a[v+3]),C.set(a[v+4],a[v+5]),x.copy(_).add(E).add(y).divideScalar(3);let I=m(x);b(w,v+0,_,I),b(A,v+2,E,I),b(C,v+4,y,I)}}function b(_,E,y,x){x<0&&_.x===1&&(a[E]=_.x-1),y.x===0&&y.z===0&&(a[E]=x/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Ka=class i extends ja{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Gr=class i extends ja{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Js=class i extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,p=[],g=[],b=[],m=[];for(let d=0;d<h;d++){let _=d*f-a;for(let E=0;E<l;E++){let y=E*u-r;g.push(y,-_,0),b.push(0,0,1),m.push(E/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let _=0;_<o;_++){let E=_+l*d,y=_+l*(d+1),x=_+1+l*(d+1),w=_+1+l*d;p.push(E,y,w),p.push(y,x,w)}this.setIndex(p),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(b,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},xs=class i extends Pt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,f=(t-e)/s,p=new R,g=new Pe;for(let b=0;b<=s;b++){for(let m=0;m<=n;m++){let d=r+m/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let b=0;b<s;b++){let m=b*(n+1);for(let d=0;d<n;d++){let _=d+m,E=_,y=_+n+1,x=_+n+2,w=_+1;o.push(E,y,w),o.push(y,x,w)}}this.setIndex(o),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Zs=class i extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new R,f=new R,p=[],g=[],b=[],m=[];for(let d=0;d<=n;d++){let _=[],E=d/n,y=0;d===0&&a===0?y=.5/t:d===n&&c===Math.PI&&(y=-.5/t);for(let x=0;x<=t;x++){let w=x/t;u.x=-e*Math.cos(s+w*r)*Math.sin(a+E*o),u.y=e*Math.cos(a+E*o),u.z=e*Math.sin(s+w*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),b.push(f.x,f.y,f.z),m.push(w+y,1-E),_.push(l++)}h.push(_)}for(let d=0;d<n;d++)for(let _=0;_<t;_++){let E=h[d][_+1],y=h[d][_],x=h[d+1][_],w=h[d+1][_+1];(d!==0||a>0)&&p.push(E,y,w),(d!==n-1||c<Math.PI)&&p.push(y,x,w)}this.setIndex(p),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(b,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var $s=class i extends Pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new R,u=new R,f=new R;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let b=g/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(b),u.y=(e+t*Math.cos(m))*Math.sin(b),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let b=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,_=(s+1)*p+g;a.push(b,m,_),a.push(m,d,_)}this.setIndex(a),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var mt=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Kt=class extends mt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var gc=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bc=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Wr=class extends Ks{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Bs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function yp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _p(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ah(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function eu(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function dg(i,e,t,n,s=30){let r=i.clone();r.name=e;let a=[];for(let c=0;c<r.tracks.length;++c){let l=r.tracks[c],h=l.getValueSize(),u=[],f=[];for(let p=0;p<l.times.length;++p){let g=l.times[p]*s;if(!(g<t||g>=n)){u.push(l.times[p]);for(let b=0;b<h;++b)f.push(l.values[p*h+b])}}u.length!==0&&(l.times=Bs(u,l.times.constructor),l.values=Bs(f,l.values.constructor),a.push(l))}r.tracks=a;let o=1/0;for(let c=0;c<r.tracks.length;++c)o>r.tracks[c].times[0]&&(o=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*o);return r.resetDuration(),r}function pg(i,e=0,t=i,n=30){n<=0&&(n=30);let s=t.tracks.length,r=e/n;for(let a=0;a<s;++a){let o=t.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;let l=i.tracks.find(function(d){return d.name===o.name&&d.ValueTypeName===c});if(l===void 0)continue;let h=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0,p=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);let g=o.times.length-1,b;if(r<=o.times[0]){let d=h,_=u-h;b=o.values.slice(d,_)}else if(r>=o.times[g]){let d=g*u+h,_=d+u-h;b=o.values.slice(d,_)}else{let d=o.createInterpolant(),_=h,E=u-h;d.evaluate(r),b=d.resultBuffer.slice(_,E)}c==="quaternion"&&new At().fromArray(b).normalize().conjugate().toArray(b);let m=l.times.length;for(let d=0;d<m;++d){let _=d*p+f;if(c==="quaternion")At.multiplyQuaternionsFlat(l.values,_,b,0,l.values,_);else{let E=p-f*2;for(let y=0;y<E;++y)l.values[_+y]-=b[y]}}}return i.blendMode=mo,i}var ys=class{static convertArray(e,t){return Bs(e,t)}static isTypedArray(e){return yp(e)}static getKeyframeOrder(e){return _p(e)}static sortedArray(e,t,n){return Ah(e,t,n)}static flattenJSON(e,t,n,s){eu(e,t,n,s)}static subclip(e,t,n,s,r=30){return dg(e,t,n,s,r)}static makeClipAdditive(e,t=0,n=e,s=30){return pg(e,t,n,s)}},Vi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xc=class extends Vi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Os,endingEnd:Os}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ks:r=e,o=2*t-n;break;case Ua:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ks:a=e,c=2*n-t;break;case Ua:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),b=g*g,m=b*g,d=-f*m+2*f*b-f*g,_=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*g+1,E=(-1-p)*m+(1.5+p)*b+.5*g,y=p*m-p*b;for(let x=0;x!==o;++x)r[x]=d*a[h+x]+_*a[l+x]+E*a[c+x]+y*a[u+x];return r}},Ja=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},yc=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Mn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bs(t,this.TimeBufferType),this.values=Bs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Bs(e.times,Array),values:Bs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case Gs:t=this.InterpolantFactoryMethodLinear;break;case rc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return rc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&yp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===rc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let b=t[u+g];if(b!==t[f+g]||b!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Gs;var Gi=class extends Mn{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Vs;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends Mn{constructor(e,t,n,s){super(e,t,n,s)}};Za.prototype.ValueTypeName="color";var vi=class extends Mn{constructor(e,t,n,s){super(e,t,n,s)}};vi.prototype.ValueTypeName="number";var _c=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)At.slerpFlat(r,0,a,l-o,a,l,c);return r}},Mi=class extends Mn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new _c(this.times,this.values,this.getValueSize(),e)}};Mi.prototype.ValueTypeName="quaternion";Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Mn{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Vs;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends Mn{constructor(e,t,n,s){super(e,t,n,s)}};Si.prototype.ValueTypeName="vector";var Qs=class{constructor(e="",t=-1,n=[],s=gl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ii(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(gg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Mn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=_p(c);c=Ah(c,1,h),l=Ah(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new vi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,g,b){if(p.length!==0){let m=[],d=[];eu(p,m,d,g),m.length!==0&&b.push(new u(f,m,d))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let b=0;b<f[g].morphTargets.length;b++)p[f[g].morphTargets[b]]=-1;for(let b in p){let m=[],d=[];for(let _=0;_!==f[g].morphTargets.length;++_){let E=f[g];m.push(E.time),d.push(E.morphTarget===b?1:0)}s.push(new vi(".morphTargetInfluence["+b+"]",m,d))}c=p.length*a}else{let p=".bones["+t[u].name+"]";n(Si,p+".position",f,"pos",s),n(Mi,p+".quaternion",f,"rot",s),n(Si,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function mg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vi;case"vector":case"vector2":case"vector3":case"vector4":return Si;case"color":return Za;case"quaternion":return Mi;case"bool":case"boolean":return Gi;case"string":return Wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function gg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=mg(i.type);if(i.times===void 0){let t=[],n=[];eu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},vc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},vp=new vc,Ei=class{constructor(e){this.manager=e!==void 0?e:vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bi={},Rh=class extends Error{constructor(e,t){super(e),this.response=t}},Xr=class extends Ei{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=bi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Bi[e]!==void 0){Bi[e].push({onLoad:t,onProgress:n,onError:s});return}Bi[e]=[],Bi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Bi[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,b=0,m=new ReadableStream({start(d){_();function _(){u.read().then(({done:E,value:y})=>{if(E)d.close();else{b+=y.byteLength;let x=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:p});for(let w=0,A=h.length;w<A;w++){let C=h[w];C.onProgress&&C.onProgress(x)}d.enqueue(y),_()}},E=>{d.error(E)})}}});return new Response(m)}else throw new Rh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{bi.add(`file:${e}`,l);let h=Bi[e];delete Bi[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Bi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Bi[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Lr=new WeakMap,Mc=class extends Ei{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=bi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Lr.get(a);u===void 0&&(u=[],Lr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Nr("img");function c(){h(),t&&t(this);let u=Lr.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onLoad&&p.onLoad(this)}Lr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),bi.remove(`image:${e}`);let f=Lr.get(this)||[];for(let p=0;p<f.length;p++){let g=f[p];g.onError&&g.onError(u)}Lr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),bi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var $a=class extends Ei{constructor(e){super(e)}load(e,t,n,s){let r=new jt,a=new Mc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},er=class extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Qa=class extends er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},vh=new Ve,yd=new R,_d=new R,eo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(yd),_d.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_d),t.updateMatrixWorld(),vh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ch=class extends eo{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ws*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},to=class extends er{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ch}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},vd=new Ve,Ia=new R,Mh=new R,Ph=class extends eo{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ia.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ia),Mh.copy(n.position),Mh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Mh),n.updateMatrixWorld(),s.makeTranslation(-Ia.x,-Ia.y,-Ia.z),vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd)}},Xi=class extends er{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ph}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},tr=class extends Ha{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ih=class extends eo{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_s=class extends er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Ih}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var qi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Sh=new WeakMap,no=class extends Ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=bi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(Sh.has(a)===!0)s&&s(Sh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return bi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Sh.set(c,l),bi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});bi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}};var Sc=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},io=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Ec=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){At.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;At.multiplyQuaternionsFlat(e,a,e,t,e,n),At.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},tu="\\[\\]\\.:\\/",bg=new RegExp("["+tu+"]","g"),nu="[^"+tu+"]",xg="[^"+tu.replace("\\.","")+"]",yg=/((?:WC+[\/:])*)/.source.replace("WC",nu),_g=/(WCOD+)?/.source.replace("WCOD",xg),vg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),Mg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),Sg=new RegExp("^"+yg+_g+vg+Mg+"$"),Eg=["material","materials","bones","map"],Lh=class{constructor(e,t,n){let s=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bg,"")}static parseTrackName(e){let t=Sg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Eg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=Lh;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wc=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Os,endingEnd:Os};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=po,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case mo:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case gl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===tp;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===fo){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=ks,s.endingEnd=ks):(e?s.endingStart=this.zeroSlopeAtStart?ks:Os:s.endingStart=Ua,t?s.endingEnd=this.zeroSlopeAtEnd?ks:Os:s.endingEnd=Ua)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},wg=new Float32Array(1),so=class extends xi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let f=s[u],p=f.name,g=h[p];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}let b=t&&t._propertyBindings[u].binding.parsedPath;g=new Ec(bt.create(n,p,b),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ja(new Float32Array(2),new Float32Array(2),1,wg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?Qs.findByName(s,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=gl),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new wc(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Qs.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Md=new Ve,qr=class{constructor(e,t,n=0,s=1/0){this.ray=new ds(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Md.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Md),this}intersectObject(e,t=!0,n=[]){return Dh(e,this,n,t),n.sort(Sd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Dh(e[s],this,n,t);return n.sort(Sd),n}};function Sd(i,e){return i.distance-e.distance}function Dh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Dh(r[a],e,t,!0)}}var Ed=new R,sc=new R,ro=class{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ed.subVectors(e,this.start),sc.subVectors(this.end,this.start);let n=sc.dot(sc),r=sc.dot(Ed)/n;return t&&(r=Ze(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function iu(i,e,t,n){let s=Tg(n);switch(t){case Gh:return i*e;case Hc:return i*e/s.components*s.byteLength;case zc:return i*e/s.components*s.byteLength;case Xh:return i*e*2/s.components*s.byteLength;case Vc:return i*e*2/s.components*s.byteLength;case Wh:return i*e*3/s.components*s.byteLength;case Pn:return i*e*4/s.components*s.byteLength;case Gc:return i*e*4/s.components*s.byteLength;case oo:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lo:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xc:case Yc:return Math.max(i,16)*Math.max(e,8)/4;case Wc:case qc:return Math.max(i,8)*Math.max(e,8)/2;case jc:case Kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case uo:case ul:case fl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qh:case dl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pl:case ml:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tg(i){switch(i){case oi:case Hh:return{byteLength:1,components:1};case jr:case zh:case Kr:return{byteLength:2,components:1};case kc:case Bc:return{byteLength:2,components:4};case vs:case Oc:case Bn:return{byteLength:4,components:1};case Vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"178"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="178");function Xp(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Rg(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],b=u[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++f,u[f]=b)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let b=u[p];i.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pg=`#ifdef USE_ALPHAHASH
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
#endif`,Ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fg=`#ifdef USE_AOMAP
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
#endif`,Ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Og=`#ifdef USE_BATCHING
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
#endif`,kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vg=`#ifdef USE_IRIDESCENCE
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
#endif`,Gg=`#ifdef USE_BUMPMAP
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$g=`#define PI 3.141592653589793
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
} // validated`,Qg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eb=`vec3 transformedNormal = objectNormal;
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
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ab=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ob=`#ifdef USE_ENVMAP
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
#endif`,cb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lb=`#ifdef USE_ENVMAP
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
#endif`,hb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
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
#endif`,fb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,db=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gb=`#ifdef USE_GRADIENTMAP
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
}`,bb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_b=`uniform bool receiveShadow;
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
#endif`,vb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tb=`PhysicalMaterial material;
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
#endif`,Ab=`struct PhysicalMaterial {
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
}`,Rb=`
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
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ib=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Db=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kb=`#if defined( USE_POINTS_UV )
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
#endif`,Bb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`#ifdef USE_MORPHTARGETS
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
#endif`,Xb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zb=`#ifdef USE_NORMALMAP
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
#endif`,$b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ix=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ox=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dx=`float getShadowMask() {
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
}`,px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mx=`#ifdef USE_SKINNING
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
#endif`,gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bx=`#ifdef USE_SKINNING
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
#endif`,xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mx=`#ifdef USE_TRANSMISSION
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
#endif`,Sx=`#ifdef USE_TRANSMISSION
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cx=`uniform sampler2D t2D;
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
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ix=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`#include <common>
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
}`,Fx=`#if DEPTH_PACKING == 3200
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
}`,Nx=`#define DISTANCE
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
}`,Ox=`#define DISTANCE
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
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`uniform float scale;
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
}`,zx=`uniform vec3 diffuse;
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
}`,Vx=`#include <common>
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Wx=`#define LAMBERT
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
}`,Xx=`#define LAMBERT
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
}`,qx=`#define MATCAP
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
}`,Yx=`#define MATCAP
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
}`,jx=`#define NORMAL
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
}`,Kx=`#define NORMAL
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
}`,Jx=`#define PHONG
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
}`,Zx=`#define PHONG
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
}`,$x=`#define STANDARD
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
}`,Qx=`#define STANDARD
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
}`,ey=`#define TOON
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
}`,ty=`#define TOON
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
}`,ny=`uniform float size;
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
}`,iy=`uniform vec3 diffuse;
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
}`,sy=`#include <common>
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
}`,ry=`uniform vec3 color;
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
}`,ay=`uniform float rotation;
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
}`,oy=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Cg,alphahash_pars_fragment:Pg,alphamap_fragment:Ig,alphamap_pars_fragment:Lg,alphatest_fragment:Dg,alphatest_pars_fragment:Ug,aomap_fragment:Fg,aomap_pars_fragment:Ng,batching_pars_vertex:Og,batching_vertex:kg,begin_vertex:Bg,beginnormal_vertex:Hg,bsdfs:zg,iridescence_fragment:Vg,bumpmap_pars_fragment:Gg,clipping_planes_fragment:Wg,clipping_planes_pars_fragment:Xg,clipping_planes_pars_vertex:qg,clipping_planes_vertex:Yg,color_fragment:jg,color_pars_fragment:Kg,color_pars_vertex:Jg,color_vertex:Zg,common:$g,cube_uv_reflection_fragment:Qg,defaultnormal_vertex:eb,displacementmap_pars_vertex:tb,displacementmap_vertex:nb,emissivemap_fragment:ib,emissivemap_pars_fragment:sb,colorspace_fragment:rb,colorspace_pars_fragment:ab,envmap_fragment:ob,envmap_common_pars_fragment:cb,envmap_pars_fragment:lb,envmap_pars_vertex:hb,envmap_physical_pars_fragment:vb,envmap_vertex:ub,fog_vertex:fb,fog_pars_vertex:db,fog_fragment:pb,fog_pars_fragment:mb,gradientmap_pars_fragment:gb,lightmap_pars_fragment:bb,lights_lambert_fragment:xb,lights_lambert_pars_fragment:yb,lights_pars_begin:_b,lights_toon_fragment:Mb,lights_toon_pars_fragment:Sb,lights_phong_fragment:Eb,lights_phong_pars_fragment:wb,lights_physical_fragment:Tb,lights_physical_pars_fragment:Ab,lights_fragment_begin:Rb,lights_fragment_maps:Cb,lights_fragment_end:Pb,logdepthbuf_fragment:Ib,logdepthbuf_pars_fragment:Lb,logdepthbuf_pars_vertex:Db,logdepthbuf_vertex:Ub,map_fragment:Fb,map_pars_fragment:Nb,map_particle_fragment:Ob,map_particle_pars_fragment:kb,metalnessmap_fragment:Bb,metalnessmap_pars_fragment:Hb,morphinstance_vertex:zb,morphcolor_vertex:Vb,morphnormal_vertex:Gb,morphtarget_pars_vertex:Wb,morphtarget_vertex:Xb,normal_fragment_begin:qb,normal_fragment_maps:Yb,normal_pars_fragment:jb,normal_pars_vertex:Kb,normal_vertex:Jb,normalmap_pars_fragment:Zb,clearcoat_normal_fragment_begin:$b,clearcoat_normal_fragment_maps:Qb,clearcoat_pars_fragment:ex,iridescence_pars_fragment:tx,opaque_fragment:nx,packing:ix,premultiplied_alpha_fragment:sx,project_vertex:rx,dithering_fragment:ax,dithering_pars_fragment:ox,roughnessmap_fragment:cx,roughnessmap_pars_fragment:lx,shadowmap_pars_fragment:hx,shadowmap_pars_vertex:ux,shadowmap_vertex:fx,shadowmask_pars_fragment:dx,skinbase_vertex:px,skinning_pars_vertex:mx,skinning_vertex:gx,skinnormal_vertex:bx,specularmap_fragment:xx,specularmap_pars_fragment:yx,tonemapping_fragment:_x,tonemapping_pars_fragment:vx,transmission_fragment:Mx,transmission_pars_fragment:Sx,uv_pars_fragment:Ex,uv_pars_vertex:wx,uv_vertex:Tx,worldpos_vertex:Ax,background_vert:Rx,background_frag:Cx,backgroundCube_vert:Px,backgroundCube_frag:Ix,cube_vert:Lx,cube_frag:Dx,depth_vert:Ux,depth_frag:Fx,distanceRGBA_vert:Nx,distanceRGBA_frag:Ox,equirect_vert:kx,equirect_frag:Bx,linedashed_vert:Hx,linedashed_frag:zx,meshbasic_vert:Vx,meshbasic_frag:Gx,meshlambert_vert:Wx,meshlambert_frag:Xx,meshmatcap_vert:qx,meshmatcap_frag:Yx,meshnormal_vert:jx,meshnormal_frag:Kx,meshphong_vert:Jx,meshphong_frag:Zx,meshphysical_vert:$x,meshphysical_frag:Qx,meshtoon_vert:ey,meshtoon_frag:ty,points_vert:ny,points_frag:iy,shadow_vert:sy,shadow_frag:ry,sprite_vert:ay,sprite_frag:oy},oe={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Ti={basic:{uniforms:cn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:cn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Se(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:cn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:cn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:cn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Se(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:cn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:cn([oe.points,oe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:cn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:cn([oe.common,oe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:cn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:cn([oe.sprite,oe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:cn([oe.common,oe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:cn([oe.lights,oe.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Ti.physical={uniforms:cn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var bl={r:0,b:0,g:0},ar=new _n,cy=new Ve;function ly(i,e,t,n,s,r,a){let o=new Se(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function b(E){let y=!1,x=g(E);x===null?d(o,c):x&&x.isColor&&(d(x,1),y=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){let x=g(y);x&&(x.isCubeTexture||x.mapping===ao)?(h===void 0&&(h=new We(new ps(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:rr(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ar.copy(y.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cy.makeRotationFromEuler(ar)),h.material.toneMapped=et.getTransfer(x.colorSpace)!==dt,(u!==x||f!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new We(new Js(2,2),new vn({name:"BackgroundMaterial",uniforms:rr(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=et.getTransfer(x.colorSpace)!==dt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,y){E.getRGB(bl,Qh(i)),n.buffers.color.setClear(bl.r,bl.g,bl.b,y,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),c=y,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(o,c)},render:b,addToRenderList:m,dispose:_}}function hy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(v,I,W,U,k){let X=!1,H=u(U,W,I);r!==H&&(r=H,l(r.object)),X=p(v,U,W,k),X&&g(v,U,W,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(v,I,W,U),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,I,W){let U=W.wireframe===!0,k=n[v.id];k===void 0&&(k={},n[v.id]=k);let X=k[I.id];X===void 0&&(X={},k[I.id]=X);let H=X[U];return H===void 0&&(H=f(c()),X[U]=H),H}function f(v){let I=[],W=[],U=[];for(let k=0;k<t;k++)I[k]=0,W[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:U,object:v,attributes:{},index:null}}function p(v,I,W,U){let k=r.attributes,X=I.attributes,H=0,K=W.getAttributes();for(let q in K)if(K[q].location>=0){let pe=k[q],Te=X[q];if(Te===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(Te=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(Te=v.instanceColor)),pe===void 0||pe.attribute!==Te||Te&&pe.data!==Te.data)return!0;H++}return r.attributesNum!==H||r.index!==U}function g(v,I,W,U){let k={},X=I.attributes,H=0,K=W.getAttributes();for(let q in K)if(K[q].location>=0){let pe=X[q];pe===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(pe=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(pe=v.instanceColor));let Te={};Te.attribute=pe,pe&&pe.data&&(Te.data=pe.data),k[q]=Te,H++}r.attributes=k,r.attributesNum=H,r.index=U}function b(){let v=r.newAttributes;for(let I=0,W=v.length;I<W;I++)v[I]=0}function m(v){d(v,0)}function d(v,I){let W=r.newAttributes,U=r.enabledAttributes,k=r.attributeDivisors;W[v]=1,U[v]===0&&(i.enableVertexAttribArray(v),U[v]=1),k[v]!==I&&(i.vertexAttribDivisor(v,I),k[v]=I)}function _(){let v=r.newAttributes,I=r.enabledAttributes;for(let W=0,U=I.length;W<U;W++)I[W]!==v[W]&&(i.disableVertexAttribArray(W),I[W]=0)}function E(v,I,W,U,k,X,H){H===!0?i.vertexAttribIPointer(v,I,W,k,X):i.vertexAttribPointer(v,I,W,U,k,X)}function y(v,I,W,U){b();let k=U.attributes,X=W.getAttributes(),H=I.defaultAttributeValues;for(let K in X){let q=X[K];if(q.location>=0){let le=k[K];if(le===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),le!==void 0){let pe=le.normalized,Te=le.itemSize,Xe=e.get(le);if(Xe===void 0)continue;let yt=Xe.buffer,Z=Xe.type,se=Xe.bytesPerElement,Ce=Z===i.INT||Z===i.UNSIGNED_INT||le.gpuType===Oc;if(le.isInterleavedBufferAttribute){let de=le.data,Ie=de.stride,ct=le.offset;if(de.isInstancedInterleavedBuffer){for(let ke=0;ke<q.locationSize;ke++)d(q.location+ke,de.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ke=0;ke<q.locationSize;ke++)m(q.location+ke);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let ke=0;ke<q.locationSize;ke++)E(q.location+ke,Te/q.locationSize,Z,pe,Ie*se,(ct+Te/q.locationSize*ke)*se,Ce)}else{if(le.isInstancedBufferAttribute){for(let de=0;de<q.locationSize;de++)d(q.location+de,le.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let de=0;de<q.locationSize;de++)m(q.location+de);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let de=0;de<q.locationSize;de++)E(q.location+de,Te/q.locationSize,Z,pe,Te*se,Te/q.locationSize*de*se,Ce)}}else if(H!==void 0){let pe=H[K];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(q.location,pe);break;case 3:i.vertexAttrib3fv(q.location,pe);break;case 4:i.vertexAttrib4fv(q.location,pe);break;default:i.vertexAttrib1fv(q.location,pe)}}}}_()}function x(){C();for(let v in n){let I=n[v];for(let W in I){let U=I[W];for(let k in U)h(U[k].object),delete U[k];delete I[W]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;let I=n[v.id];for(let W in I){let U=I[W];for(let k in U)h(U[k].object),delete U[k];delete I[W]}delete n[v.id]}function A(v){for(let I in n){let W=n[I];if(W[v.id]===void 0)continue;let U=W[v.id];for(let k in U)h(U[k].object),delete U[k];delete W[v.id]}}function C(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:m,disableUnusedAttributes:_}}function uy(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let b=0;b<u;b++)g+=h[b]*f[b];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function fy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let C=A===Kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==oi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Bn&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:x,maxSamples:w}}function dy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new fn,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,E=_*4,y=d.clippingState||null;c.value=y,y=h(g,f,E,p);for(let x=0;x!==E;++x)y[x]=t[x];d.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let d=p+b*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,y=p;E!==b;++E,y+=4)a.copy(u[E]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function py(i){let e=new WeakMap;function t(a,o){return o===Uc?a.mapping=nr:o===Fc&&(a.mapping=ir),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Uc||o===Fc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new dc(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ta=4,Mp=[.125,.215,.35,.446,.526,.582],lr=20,su=new tr,Sp=new Se,ru=null,au=0,ou=0,cu=!1,cr=(1+Math.sqrt(5))/2,ea=1/cr,Ep=[new R(-cr,ea,0),new R(cr,ea,0),new R(-ea,0,cr),new R(ea,0,cr),new R(0,cr,-ea),new R(0,cr,ea),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],my=new R,ia=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=my}=r;ru=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ru,au,ou),this._renderer.xr.enabled=cu,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ru=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Kr,format:Pn,colorSpace:en,depthBuffer:!1},s=wp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wp(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gy(r)),this._blurMaterial=by(r,e,t)}return s}_compileMaterial(e){let t=new We(this._lodPlanes[0],e);this._renderer.compile(t,su)}_sceneToCubeUV(e,t,n,s,r){let c=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Sp),u.toneMapping=ji,u.autoClear=!1;let g=new Vt({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),b=new We(new ps,g),m=!1,d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,m=!0):(g.color.copy(Sp),m=!0);for(let _=0;_<6;_++){let E=_%3;E===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[_],r.y,r.z)):E===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[_]));let y=this._cubeSize;xl(s,E*y,_>2?y:0,y,y),u.setRenderTarget(s),m&&u.render(b,c),u.render(e,c)}b.geometry.dispose(),b.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===nr||e.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ap()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new We(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;xl(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,su)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ep[(s-r-1)%Ep.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new We(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*lr-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):lr;m>lr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);let d=[],_=0;for(let A=0;A<lr;++A){let C=A/b,M=Math.exp(-C*C/2);d.push(M),A===0?_+=M:A<m&&(_+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;let y=this._sizeLods[s],x=3*y*(s>E-ta?s-E+ta:0),w=4*(this._cubeSize-y);xl(t,x,w,3*y,2*y),c.setRenderTarget(t),c.render(u,su)}};function gy(i){let e=[],t=[],n=[],s=i,r=i-ta+1+Mp.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-ta?c=Mp[a-i+ta-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,b=3,m=2,d=1,_=new Float32Array(b*g*p),E=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let w=0;w<p;w++){let A=w%3*2/3-1,C=w>2?0:-1,M=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];_.set(M,b*g*w),E.set(f,m*g*w);let v=[w,w,w,w,w,w];y.set(v,d*g*w)}let x=new Pt;x.setAttribute("position",new vt(_,b)),x.setAttribute("uv",new vt(E,m)),x.setAttribute("faceIndex",new vt(y,d)),e.push(x),s>ta&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wp(i,e,t){let n=new yi(i,e,t);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function by(i,e,t){let n=new Float32Array(lr),s=new R(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xu(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Tp(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Ap(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function xu(){return`

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
	`}function xy(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Uc||c===Fc,h=c===nr||c===ir;if(l||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ia(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new ia(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function yy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Xs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _y(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(u){let f=[],p=u.index,g=u.attributes.position,b=0;if(p!==null){let _=p.array;b=p.version;for(let E=0,y=_.length;E<y;E+=3){let x=_[E+0],w=_[E+1],A=_[E+2];f.push(x,w,w,A,A,x)}}else if(g!==void 0){let _=g.array;b=g.version;for(let E=0,y=_.length/3-1;E<y;E+=3){let x=E+0,w=E+1,A=E+2;f.push(x,w,w,A,A,x)}}else return;let m=new($h(f)?Ba:ka)(f,1);m.version=b;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function vy(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function u(f,p,g,b){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],b[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,b,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_]*b[_];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function My(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sy(i,e,t){let n=new WeakMap,s=new ot;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),b===!0&&(E=3);let y=o.attributes.position.count*E,x=1;y>e.maxTextureSize&&(x=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*x*4*u),A=new Oa(w,y,x,u);A.type=Bn,A.needsUpdate=!0;let C=E*4;for(let v=0;v<u;v++){let I=m[v],W=d[v],U=_[v],k=y*x*4*v;for(let X=0;X<I.count;X++){let H=X*C;p===!0&&(s.fromBufferAttribute(I,X),w[k+H+0]=s.x,w[k+H+1]=s.y,w[k+H+2]=s.z,w[k+H+3]=0),g===!0&&(s.fromBufferAttribute(W,X),w[k+H+4]=s.x,w[k+H+5]=s.y,w[k+H+6]=s.z,w[k+H+7]=0),b===!0&&(s.fromBufferAttribute(U,X),w[k+H+8]=s.x,w[k+H+9]=s.y,w[k+H+10]=s.z,w[k+H+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new Pe(y,x)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let b=0;b<l.length;b++)p+=l[b];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ey(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var qp=new jt,Rp=new Ya(1,1),Yp=new Oa,jp=new uc,Kp=new za,Cp=[],Pp=[],Ip=new Float32Array(16),Lp=new Float32Array(9),Dp=new Float32Array(4);function sa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Cp[s];if(r===void 0&&(r=new Float32Array(s),Cp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vl(i,e){let t=Pp[e];t===void 0&&(t=new Int32Array(e),Pp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function Ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function Ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function Cy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,n))return;Dp.set(n),i.uniformMatrix2fv(this.addr,!1,Dp),Zt(t,n)}}function Py(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,n))return;Lp.set(n),i.uniformMatrix3fv(this.addr,!1,Lp),Zt(t,n)}}function Iy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,n))return;Ip.set(n),i.uniformMatrix4fv(this.addr,!1,Ip),Zt(t,n)}}function Ly(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function Uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function Fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function Ny(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function By(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function Hy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Rp.compareFunction=Kh,r=Rp):r=qp,t.setTexture2D(e||r,s)}function zy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||jp,s)}function Vy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Kp,s)}function Gy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yp,s)}function Wy(i){switch(i){case 5126:return wy;case 35664:return Ty;case 35665:return Ay;case 35666:return Ry;case 35674:return Cy;case 35675:return Py;case 35676:return Iy;case 5124:case 35670:return Ly;case 35667:case 35671:return Dy;case 35668:case 35672:return Uy;case 35669:case 35673:return Fy;case 5125:return Ny;case 36294:return Oy;case 36295:return ky;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return zy;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Gy}}function Xy(i,e){i.uniform1fv(this.addr,e)}function qy(i,e){let t=sa(e,this.size,2);i.uniform2fv(this.addr,t)}function Yy(i,e){let t=sa(e,this.size,3);i.uniform3fv(this.addr,t)}function jy(i,e){let t=sa(e,this.size,4);i.uniform4fv(this.addr,t)}function Ky(i,e){let t=sa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jy(i,e){let t=sa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zy(i,e){let t=sa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $y(i,e){i.uniform1iv(this.addr,e)}function Qy(i,e){i.uniform2iv(this.addr,e)}function e_(i,e){i.uniform3iv(this.addr,e)}function t_(i,e){i.uniform4iv(this.addr,e)}function n_(i,e){i.uniform1uiv(this.addr,e)}function i_(i,e){i.uniform2uiv(this.addr,e)}function s_(i,e){i.uniform3uiv(this.addr,e)}function r_(i,e){i.uniform4uiv(this.addr,e)}function a_(i,e,t){let n=this.cache,s=e.length,r=vl(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||qp,r[a])}function o_(i,e,t){let n=this.cache,s=e.length,r=vl(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||jp,r[a])}function c_(i,e,t){let n=this.cache,s=e.length,r=vl(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Kp,r[a])}function l_(i,e,t){let n=this.cache,s=e.length,r=vl(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Yp,r[a])}function h_(i){switch(i){case 5126:return Xy;case 35664:return qy;case 35665:return Yy;case 35666:return jy;case 35674:return Ky;case 35675:return Jy;case 35676:return Zy;case 5124:case 35670:return $y;case 35667:case 35671:return Qy;case 35668:case 35672:return e_;case 35669:case 35673:return t_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return l_}}var hu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wy(t.type)}},uu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=h_(t.type)}},fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},lu=/(\w+)(\])?(\[|\.)?/g;function Up(i,e){i.seq.push(e),i.map[e.id]=e}function u_(i,e,t){let n=i.name,s=n.length;for(lu.lastIndex=0;;){let r=lu.exec(n),a=lu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Up(t,l===void 0?new hu(o,i,e):new uu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new fu(o),Up(t,u)),t=u}}}var na=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);u_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Fp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var f_=37297,d_=0;function p_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Np=new qe;function m_(i){et._getMatrix(Np,et.workingColorSpace,i);let e=`mat3( ${Np.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Fa:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Op(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+p_(i.getShaderSource(e),a)}else return s}function g_(i,e){let t=m_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function b_(i,e){let t;switch(e){case jd:t="Linear";break;case Kd:t="Reinhard";break;case Jd:t="Cineon";break;case Dc:t="ACESFilmic";break;case $d:t="AgX";break;case Qd:t="Neutral";break;case Zd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yl=new R;function x_(){et.getLuminanceCoefficients(yl);let i=yl.x.toFixed(4),e=yl.y.toFixed(4),t=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function __(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function v_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function bo(i){return i!==""}function kp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var M_=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(i){return i.replace(M_,E_)}var S_=new Map;function E_(i,e){let t=je[e];if(t===void 0){let n=S_.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return du(t)}var w_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hp(i){return i.replace(w_,T_)}function T_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function A_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ad?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function R_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case nr:case ir:e="ENVMAP_TYPE_CUBE";break;case ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ir:e="ENVMAP_MODE_REFRACTION";break}return e}function P_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kh:e="ENVMAP_BLENDING_MULTIPLY";break;case qd:e="ENVMAP_BLENDING_MIX";break;case Yd:e="ENVMAP_BLENDING_ADD";break}return e}function I_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function L_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=A_(t),l=R_(t),h=C_(t),u=P_(t),f=I_(t),p=y_(t),g=__(r),b=s.createProgram(),m,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bo).join(`
`),d.length>0&&(d+=`
`)):(m=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),d=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?je.tonemapping_pars_fragment:"",t.toneMapping!==ji?b_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,g_("linearToOutputTexel",t.outputColorSpace),x_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bo).join(`
`)),a=du(a),a=kp(a,t),a=Bp(a,t),o=du(o),o=kp(o,t),o=Bp(o,t),a=Hp(a),o=Hp(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=_+m+a,y=_+d+o,x=Fp(s,s.VERTEX_SHADER,E),w=Fp(s,s.FRAGMENT_SHADER,y);s.attachShader(b,x),s.attachShader(b,w),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function A(I){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(b).trim(),U=s.getShaderInfoLog(x).trim(),k=s.getShaderInfoLog(w).trim(),X=!0,H=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,x,w);else{let K=Op(s,x,"vertex"),q=Op(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+K+`
`+q)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(U===""||k==="")&&(H=!1);H&&(I.diagnostics={runnable:X,programLog:W,vertexShader:{log:U,prefix:m},fragmentShader:{log:k,prefix:d}})}s.deleteShader(x),s.deleteShader(w),C=new na(s,b),M=v_(s,b)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(b,f_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d_++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=x,this.fragmentShader=w,this}var D_=0,pu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mu(e),t.set(e,n)),n}},mu=class{constructor(e){this.id=D_++,this.code=e,this.usedTimes=0}};function U_(i,e,t,n,s,r,a){let o=new kr,c=new pu,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,v,I,W,U){let k=W.fog,X=U.geometry,H=M.isMeshStandardMaterial?W.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),q=K&&K.mapping===ao?K.image.height:null,le=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let pe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Te=pe!==void 0?pe.length:0,Xe=0;X.morphAttributes.position!==void 0&&(Xe=1),X.morphAttributes.normal!==void 0&&(Xe=2),X.morphAttributes.color!==void 0&&(Xe=3);let yt,Z,se,Ce;if(le){let ut=Ti[le];yt=ut.vertexShader,Z=ut.fragmentShader}else yt=M.vertexShader,Z=M.fragmentShader,c.update(M),se=c.getVertexShaderID(M),Ce=c.getFragmentShaderID(M);let de=i.getRenderTarget(),Ie=i.state.buffers.depth.getReversed(),ct=U.isInstancedMesh===!0,ke=U.isBatchedMesh===!0,Ut=!!M.map,Ft=!!M.matcap,lt=!!K,L=!!M.aoMap,ln=!!M.lightMap,ht=!!M.bumpMap,Et=!!M.normalMap,Me=!!M.displacementMap,rt=!!M.emissiveMap,De=!!M.metalnessMap,Ye=!!M.roughnessMap,Yt=M.anisotropy>0,P=M.clearcoat>0,S=M.dispersion>0,O=M.iridescence>0,J=M.sheen>0,Q=M.transmission>0,Y=Yt&&!!M.anisotropyMap,Ae=P&&!!M.clearcoatMap,ce=P&&!!M.clearcoatNormalMap,ve=P&&!!M.clearcoatRoughnessMap,Re=O&&!!M.iridescenceMap,ee=O&&!!M.iridescenceThicknessMap,me=J&&!!M.sheenColorMap,Ne=J&&!!M.sheenRoughnessMap,Fe=!!M.specularMap,ae=!!M.specularColorMap,ze=!!M.specularIntensityMap,D=Q&&!!M.transmissionMap,he=Q&&!!M.thicknessMap,te=!!M.gradientMap,xe=!!M.alphaMap,ne=M.alphaTest>0,$=!!M.alphaHash,ye=!!M.extensions,Ge=ji;M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ge=i.toneMapping);let wt={shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:yt,fragmentShader:Z,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:Ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ke,batchingColor:ke&&U._colorsTexture!==null,instancing:ct,instancingColor:ct&&U.instanceColor!==null,instancingMorph:ct&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:en,alphaToCoverage:!!M.alphaToCoverage,map:Ut,matcap:Ft,envMap:lt,envMapMode:lt&&K.mapping,envMapCubeUVHeight:q,aoMap:L,lightMap:ln,bumpMap:ht,normalMap:Et,displacementMap:f&&Me,emissiveMap:rt,normalMapObjectSpace:Et&&M.normalMapType===sp,normalMapTangentSpace:Et&&M.normalMapType===jh,metalnessMap:De,roughnessMap:Ye,anisotropy:Yt,anisotropyMap:Y,clearcoat:P,clearcoatMap:Ae,clearcoatNormalMap:ce,clearcoatRoughnessMap:ve,dispersion:S,iridescence:O,iridescenceMap:Re,iridescenceThicknessMap:ee,sheen:J,sheenColorMap:me,sheenRoughnessMap:Ne,specularMap:Fe,specularColorMap:ae,specularIntensityMap:ze,transmission:Q,transmissionMap:D,thicknessMap:he,gradientMap:te,opaque:M.transparent===!1&&M.blending===Hs&&M.alphaToCoverage===!1,alphaMap:xe,alphaTest:ne,alphaHash:$,combine:M.combine,mapUv:Ut&&b(M.map.channel),aoMapUv:L&&b(M.aoMap.channel),lightMapUv:ln&&b(M.lightMap.channel),bumpMapUv:ht&&b(M.bumpMap.channel),normalMapUv:Et&&b(M.normalMap.channel),displacementMapUv:Me&&b(M.displacementMap.channel),emissiveMapUv:rt&&b(M.emissiveMap.channel),metalnessMapUv:De&&b(M.metalnessMap.channel),roughnessMapUv:Ye&&b(M.roughnessMap.channel),anisotropyMapUv:Y&&b(M.anisotropyMap.channel),clearcoatMapUv:Ae&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:ce&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:me&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&b(M.sheenRoughnessMap.channel),specularMapUv:Fe&&b(M.specularMap.channel),specularColorMapUv:ae&&b(M.specularColorMap.channel),specularIntensityMapUv:ze&&b(M.specularIntensityMap.channel),transmissionMapUv:D&&b(M.transmissionMap.channel),thicknessMapUv:he&&b(M.thicknessMap.channel),alphaMapUv:xe&&b(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Et||Yt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(Ut||xe),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Xe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ut&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===dt,decodeVideoTextureEmissive:rt&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===nn,flipSided:M.side===tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ye&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&M.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function d(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)v.push(I),v.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(v,M),E(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function _(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function E(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){let v=g[M.type],I;if(v){let W=Ti[v];I=bp.clone(W.uniforms)}else I=M.uniforms;return I}function x(M,v){let I;for(let W=0,U=h.length;W<U;W++){let k=h[W];if(k.cacheKey===v){I=k,++I.usedTimes;break}}return I===void 0&&(I=new L_(i,v,M,r),h.push(I)),I}function w(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function A(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:x,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:C}}function F_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function N_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Vp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,p,g,b,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=b,d.group=m),e++,d}function o(u,f,p,g,b,m){let d=a(u,f,p,g,b,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,g,b,m){let d=a(u,f,p,g,b,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||N_),n.length>1&&n.sort(f||Vp),s.length>1&&s.sort(f||Vp)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function O_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Gp,i.set(n,[a])):s>=r.length?(a=new Gp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function k_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Se};break;case"SpotLight":t={position:new R,direction:new R,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function B_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var H_=0;function z_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function V_(i){let e=new k_,t=B_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let s=new R,r=new Ve,a=new Ve;function o(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,b=0,m=0,d=0,_=0,E=0,y=0,x=0,w=0,A=0;l.sort(z_);for(let M=0,v=l.length;M<v;M++){let I=l[M],W=I.color,U=I.intensity,k=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=W.r*U,u+=W.g*U,f+=W.b*U;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],U);A++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,q=t.get(I);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=I.shadow.matrix,_++}n.directional[p]=H,p++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(W).multiplyScalar(U),H.distance=k,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[b]=H;let K=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,K.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[b]=K.matrix,I.castShadow){let q=t.get(I);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,n.spotShadow[b]=q,n.spotShadowMap[b]=X,y++}b++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(W).multiplyScalar(U),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=H,m++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let K=I.shadow,q=t.get(I);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=H,g++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(U),H.groundColor.copy(I.groundColor).multiplyScalar(U),n.hemi[d]=H,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==b||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==_||C.numPointShadows!==E||C.numSpotShadows!==y||C.numSpotMaps!==x||C.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=b,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=_,C.numPointShadows=E,C.numSpotShadows=y,C.numSpotMaps=x,C.numLightProbes=A,n.version=H_++)}function c(l,h){let u=0,f=0,p=0,g=0,b=0,m=h.matrixWorldInverse;for(let d=0,_=l.length;d<_;d++){let E=l[d];if(E.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(E.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let y=n.hemi[b];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:n}}function Wp(i){let e=new V_(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function G_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Wp(i),e.set(s,[o])):r>=a.length?(o=new Wp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var W_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X_=`uniform sampler2D shadow_pass;
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
}`;function q_(i,e,t){let n=new zr,s=new Pe,r=new Pe,a=new ot,o=new gc({depthPacking:ip}),c=new bc,l={},h=t.maxTextureSize,u={[si]:tn,[tn]:si,[nn]:nn},f=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:W_,fragmentShader:X_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new We(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let d=this.type;this.render=function(w,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=i.getRenderTarget(),v=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Yi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let U=d!==wi&&this.type===wi,k=d===wi&&this.type!==wi;for(let X=0,H=w.length;X<H;X++){let K=w[X],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let le=q.getFrameExtents();if(s.multiply(le),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,q.mapSize.y=r.y)),q.map===null||U===!0||k===!0){let Te=this.type!==wi?{minFilter:Qt,magFilter:Qt}:{};q.map!==null&&q.map.dispose(),q.map=new yi(s.x,s.y,Te),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let pe=q.getViewportCount();for(let Te=0;Te<pe;Te++){let Xe=q.getViewport(Te);a.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),W.viewport(a),q.updateMatrices(K,Te),n=q.getFrustum(),y(A,C,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===wi&&_(q,C),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,v,I)};function _(w,A){let C=e.update(b);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new yi(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,C,f,b,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,C,p,b,null)}function E(w,A,C,M){let v=null,I=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)v=I;else if(v=C.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let W=v.uuid,U=A.uuid,k=l[W];k===void 0&&(k={},l[W]=k);let X=k[U];X===void 0&&(X=v.clone(),k[U]=X,A.addEventListener("dispose",x)),v=X}if(v.visible=A.visible,v.wireframe=A.wireframe,M===wi?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let W=i.properties.get(v);W.light=C}return v}function y(w,A,C,M,v){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===wi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let U=e.update(w),k=w.material;if(Array.isArray(k)){let X=U.groups;for(let H=0,K=X.length;H<K;H++){let q=X[H],le=k[q.materialIndex];if(le&&le.visible){let pe=E(w,le,M,v);w.onBeforeShadow(i,w,A,C,U,pe,q),i.renderBufferDirect(C,null,U,pe,w,q),w.onAfterShadow(i,w,A,C,U,pe,q)}}}else if(k.visible){let X=E(w,k,M,v);w.onBeforeShadow(i,w,A,C,U,X,null),i.renderBufferDirect(C,null,U,X,w,null),w.onAfterShadow(i,w,A,C,U,X,null)}}let W=w.children;for(let U=0,k=W.length;U<k;U++)y(W[U],A,C,M,v)}function x(w){w.target.removeEventListener("dispose",x);for(let C in l){let M=l[C],v=w.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var Y_={[Tc]:Ac,[Rc]:Ic,[Cc]:Lc,[zs]:Pc,[Ac]:Tc,[Ic]:Rc,[Lc]:Cc,[Pc]:zs};function j_(i,e){function t(){let D=!1,he=new ot,te=null,xe=new ot(0,0,0,0);return{setMask:function(ne){te!==ne&&!D&&(i.colorMask(ne,ne,ne,ne),te=ne)},setLocked:function(ne){D=ne},setClear:function(ne,$,ye,Ge,wt){wt===!0&&(ne*=Ge,$*=Ge,ye*=Ge),he.set(ne,$,ye,Ge),xe.equals(he)===!1&&(i.clearColor(ne,$,ye,Ge),xe.copy(he))},reset:function(){D=!1,te=null,xe.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,te=null,xe=null,ne=null;return{setReversed:function($){if(he!==$){let ye=e.get("EXT_clip_control");$?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),he=$;let Ge=ne;ne=null,this.setClear(Ge)}},getReversed:function(){return he},setTest:function($){$?de(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function($){te!==$&&!D&&(i.depthMask($),te=$)},setFunc:function($){if(he&&($=Y_[$]),xe!==$){switch($){case Tc:i.depthFunc(i.NEVER);break;case Ac:i.depthFunc(i.ALWAYS);break;case Rc:i.depthFunc(i.LESS);break;case zs:i.depthFunc(i.LEQUAL);break;case Cc:i.depthFunc(i.EQUAL);break;case Pc:i.depthFunc(i.GEQUAL);break;case Ic:i.depthFunc(i.GREATER);break;case Lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=$}},setLocked:function($){D=$},setClear:function($){ne!==$&&(he&&($=1-$),i.clearDepth($),ne=$)},reset:function(){D=!1,te=null,xe=null,ne=null,he=!1}}}function s(){let D=!1,he=null,te=null,xe=null,ne=null,$=null,ye=null,Ge=null,wt=null;return{setTest:function(ut){D||(ut?de(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(ut){he!==ut&&!D&&(i.stencilMask(ut),he=ut)},setFunc:function(ut,$n,Di){(te!==ut||xe!==$n||ne!==Di)&&(i.stencilFunc(ut,$n,Di),te=ut,xe=$n,ne=Di)},setOp:function(ut,$n,Di){($!==ut||ye!==$n||Ge!==Di)&&(i.stencilOp(ut,$n,Di),$=ut,ye=$n,Ge=Di)},setLocked:function(ut){D=ut},setClear:function(ut){wt!==ut&&(i.clearStencil(ut),wt=ut)},reset:function(){D=!1,he=null,te=null,xe=null,ne=null,$=null,ye=null,Ge=null,wt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,b=!1,m=null,d=null,_=null,E=null,y=null,x=null,w=null,A=new Se(0,0,0),C=0,M=!1,v=null,I=null,W=null,U=null,k=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,K=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=K>=2);let le=null,pe={},Te=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),yt=new ot().fromArray(Te),Z=new ot().fromArray(Xe);function se(D,he,te,xe){let ne=new Uint8Array(4),$=i.createTexture();i.bindTexture(D,$),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<te;ye++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(he+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return $}let Ce={};Ce[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),de(i.DEPTH_TEST),a.setFunc(zs),ht(!1),Et(Uh),de(i.CULL_FACE),L(Yi);function de(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ie(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function ct(D,he){return u[D]!==he?(i.bindFramebuffer(D,he),u[D]=he,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=he),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=he),!0):!1}function ke(D,he){let te=p,xe=!1;if(D){te=f.get(he),te===void 0&&(te=[],f.set(he,te));let ne=D.textures;if(te.length!==ne.length||te[0]!==i.COLOR_ATTACHMENT0){for(let $=0,ye=ne.length;$<ye;$++)te[$]=i.COLOR_ATTACHMENT0+$;te.length=ne.length,xe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,xe=!0);xe&&i.drawBuffers(te)}function Ut(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let Ft={[fs]:i.FUNC_ADD,[Cd]:i.FUNC_SUBTRACT,[Pd]:i.FUNC_REVERSE_SUBTRACT};Ft[Id]=i.MIN,Ft[Ld]=i.MAX;let lt={[Dd]:i.ZERO,[Ud]:i.ONE,[Fd]:i.SRC_COLOR,[ac]:i.SRC_ALPHA,[zd]:i.SRC_ALPHA_SATURATE,[Bd]:i.DST_COLOR,[Od]:i.DST_ALPHA,[Nd]:i.ONE_MINUS_SRC_COLOR,[oc]:i.ONE_MINUS_SRC_ALPHA,[Hd]:i.ONE_MINUS_DST_COLOR,[kd]:i.ONE_MINUS_DST_ALPHA,[Vd]:i.CONSTANT_COLOR,[Gd]:i.ONE_MINUS_CONSTANT_COLOR,[Wd]:i.CONSTANT_ALPHA,[Xd]:i.ONE_MINUS_CONSTANT_ALPHA};function L(D,he,te,xe,ne,$,ye,Ge,wt,ut){if(D===Yi){b===!0&&(Ie(i.BLEND),b=!1);return}if(b===!1&&(de(i.BLEND),b=!0),D!==Rd){if(D!==m||ut!==M){if((d!==fs||y!==fs)&&(i.blendEquation(i.FUNC_ADD),d=fs,y=fs),ut)switch(D){case Hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sn:i.blendFunc(i.ONE,i.ONE);break;case Nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,E=null,x=null,w=null,A.set(0,0,0),C=0,m=D,M=ut}return}ne=ne||he,$=$||te,ye=ye||xe,(he!==d||ne!==y)&&(i.blendEquationSeparate(Ft[he],Ft[ne]),d=he,y=ne),(te!==_||xe!==E||$!==x||ye!==w)&&(i.blendFuncSeparate(lt[te],lt[xe],lt[$],lt[ye]),_=te,E=xe,x=$,w=ye),(Ge.equals(A)===!1||wt!==C)&&(i.blendColor(Ge.r,Ge.g,Ge.b,wt),A.copy(Ge),C=wt),m=D,M=!1}function ln(D,he){D.side===nn?Ie(i.CULL_FACE):de(i.CULL_FACE);let te=D.side===tn;he&&(te=!te),ht(te),D.blending===Hs&&D.transparent===!1?L(Yi):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let xe=D.stencilWrite;o.setTest(xe),xe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(D){v!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),v=D)}function Et(D){D!==wd?(de(i.CULL_FACE),D!==I&&(D===Uh?i.cullFace(i.BACK):D===Td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),I=D}function Me(D){D!==W&&(H&&i.lineWidth(D),W=D)}function rt(D,he,te){D?(de(i.POLYGON_OFFSET_FILL),(U!==he||k!==te)&&(i.polygonOffset(he,te),U=he,k=te)):Ie(i.POLYGON_OFFSET_FILL)}function De(D){D?de(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function Ye(D){D===void 0&&(D=i.TEXTURE0+X-1),le!==D&&(i.activeTexture(D),le=D)}function Yt(D,he,te){te===void 0&&(le===null?te=i.TEXTURE0+X-1:te=le);let xe=pe[te];xe===void 0&&(xe={type:void 0,texture:void 0},pe[te]=xe),(xe.type!==D||xe.texture!==he)&&(le!==te&&(i.activeTexture(te),le=te),i.bindTexture(D,he||Ce[D]),xe.type=D,xe.texture=he)}function P(){let D=pe[le];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(D){yt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),yt.copy(D))}function Ne(D){Z.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Z.copy(D))}function Fe(D,he){let te=l.get(he);te===void 0&&(te=new WeakMap,l.set(he,te));let xe=te.get(D);xe===void 0&&(xe=i.getUniformBlockIndex(he,D.name),te.set(D,xe))}function ae(D,he){let xe=l.get(he).get(D);c.get(he)!==xe&&(i.uniformBlockBinding(he,xe,D.__bindingPointIndex),c.set(he,xe))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,pe={},u={},f=new WeakMap,p=[],g=null,b=!1,m=null,d=null,_=null,E=null,y=null,x=null,w=null,A=new Se(0,0,0),C=0,M=!1,v=null,I=null,W=null,U=null,k=null,yt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:de,disable:Ie,bindFramebuffer:ct,drawBuffers:ke,useProgram:Ut,setBlending:L,setMaterial:ln,setFlipSided:ht,setCullFace:Et,setLineWidth:Me,setPolygonOffset:rt,setScissorTest:De,activeTexture:Ye,bindTexture:Yt,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:Re,texImage3D:ee,updateUBOMapping:Fe,uniformBlockBinding:ae,texStorage2D:ce,texStorage3D:ve,texSubImage2D:J,texSubImage3D:Q,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ae,scissor:me,viewport:Ne,reset:ze}}function K_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pe,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return p?new OffscreenCanvas(P,S):Nr("canvas")}function b(P,S,O){let J=1,Q=Yt(P);if((Q.width>O||Q.height>O)&&(J=O/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Y=Math.floor(J*Q.width),Ae=Math.floor(J*Q.height);u===void 0&&(u=g(Y,Ae));let ce=S?g(Y,Ae):u;return ce.width=Y,ce.height=Ae,ce.getContext("2d").drawImage(P,0,0,Y,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+Ae+")."),ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){i.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(P,S,O,J,Q=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=S;if(S===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),S===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),S===i.RGBA){let Ae=Q?Fa:et.getTransfer(J);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=Ae===dt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(P,S){let O;return P?S===null||S===vs||S===Jr?O=i.DEPTH24_STENCIL8:S===Bn?O=i.DEPTH32F_STENCIL8:S===jr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vs||S===Jr?O=i.DEPTH_COMPONENT24:S===Bn?O=i.DEPTH_COMPONENT32F:S===jr&&(O=i.DEPTH_COMPONENT16),O}function x(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Qt&&P.minFilter!==dn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function w(P){let S=P.target;S.removeEventListener("dispose",w),C(S),S.isVideoTexture&&h.delete(S)}function A(P){let S=P.target;S.removeEventListener("dispose",A),v(S)}function C(P){let S=n.get(P);if(S.__webglInit===void 0)return;let O=P.source,J=f.get(O);if(J){let Q=J[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(P),Object.keys(J).length===0&&f.delete(O)}n.remove(P)}function M(P){let S=n.get(P);i.deleteTexture(S.__webglTexture);let O=P.source,J=f.get(O);delete J[S.__cacheKey],a.memory.textures--}function v(P){let S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let Q=0;Q<S.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)i.deleteFramebuffer(S.__webglFramebuffer[J]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let O=P.textures;for(let J=0,Q=O.length;J<Q;J++){let Y=n.get(O[J]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(O[J])}n.remove(P)}let I=0;function W(){I=0}function U(){let P=I;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),I+=1,P}function k(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function X(P,S){let O=n.get(P);if(P.isVideoTexture&&De(P),P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){let J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(O,P,S);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+S)}function H(P,S){let O=n.get(P);if(P.version>0&&O.__version!==P.version){Ce(O,P,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+S)}function K(P,S){let O=n.get(P);if(P.version>0&&O.__version!==P.version){Ce(O,P,S);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+S)}function q(P,S){let O=n.get(P);if(P.version>0&&O.__version!==P.version){de(O,P,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+S)}let le={[ri]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[Ur]:i.MIRRORED_REPEAT},pe={[Qt]:i.NEAREST,[Nc]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},Te={[rp]:i.NEVER,[up]:i.ALWAYS,[ap]:i.LESS,[Kh]:i.LEQUAL,[op]:i.EQUAL,[hp]:i.GEQUAL,[cp]:i.GREATER,[lp]:i.NOTEQUAL};function Xe(P,S){if(S.type===Bn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===dn||S.magFilter===Yr||S.magFilter===sr||S.magFilter===ai||S.minFilter===dn||S.minFilter===Yr||S.minFilter===sr||S.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,le[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,le[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,le[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,pe[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,pe[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qt||S.minFilter!==sr&&S.minFilter!==ai||S.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function yt(P,S){let O=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",w));let J=S.source,Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));let Y=k(S);if(Y!==P.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[Y].usedTimes++;let Ae=Q[P.__cacheKey];Ae!==void 0&&(Q[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&M(S)),P.__cacheKey=Y,P.__webglTexture=Q[Y].texture}return O}function Z(P,S,O){return Math.floor(Math.floor(P/O)/S)}function se(P,S,O,J){let Y=P.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,O,J,S.data);else{Y.sort((ee,me)=>ee.start-me.start);let Ae=0;for(let ee=1;ee<Y.length;ee++){let me=Y[Ae],Ne=Y[ee],Fe=me.start+me.count,ae=Z(Ne.start,S.width,4),ze=Z(me.start,S.width,4);Ne.start<=Fe+1&&ae===ze&&Z(Ne.start+Ne.count-1,S.width,4)===ae?me.count=Math.max(me.count,Ne.start+Ne.count-me.start):(++Ae,Y[Ae]=Ne)}Y.length=Ae+1;let ce=i.getParameter(i.UNPACK_ROW_LENGTH),ve=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ee=0,me=Y.length;ee<me;ee++){let Ne=Y[ee],Fe=Math.floor(Ne.start/4),ae=Math.ceil(Ne.count/4),ze=Fe%S.width,D=Math.floor(Fe/S.width),he=ae,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,ze,D,he,te,O,J,S.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ce),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function Ce(P,S,O){let J=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=i.TEXTURE_3D);let Q=yt(P,S),Y=S.source;t.bindTexture(J,P.__webglTexture,i.TEXTURE0+O);let Ae=n.get(Y);if(Y.version!==Ae.__version||Q===!0){t.activeTexture(i.TEXTURE0+O);let ce=et.getPrimaries(et.workingColorSpace),ve=S.colorSpace===Ki?null:et.getPrimaries(S.colorSpace),Re=S.colorSpace===Ki||ce===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ee=b(S.image,!1,s.maxTextureSize);ee=Ye(S,ee);let me=r.convert(S.format,S.colorSpace),Ne=r.convert(S.type),Fe=E(S.internalFormat,me,Ne,S.colorSpace,S.isVideoTexture);Xe(J,S);let ae,ze=S.mipmaps,D=S.isVideoTexture!==!0,he=Ae.__version===void 0||Q===!0,te=Y.dataReady,xe=x(S,ee);if(S.isDepthTexture)Fe=y(S.format===Zr,S.type),he&&(D?t.texStorage2D(i.TEXTURE_2D,1,Fe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Fe,ee.width,ee.height,0,me,Ne,null));else if(S.isDataTexture)if(ze.length>0){D&&he&&t.texStorage2D(i.TEXTURE_2D,xe,Fe,ze[0].width,ze[0].height);for(let ne=0,$=ze.length;ne<$;ne++)ae=ze[ne],D?te&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,me,Ne,ae.data):t.texImage2D(i.TEXTURE_2D,ne,Fe,ae.width,ae.height,0,me,Ne,ae.data);S.generateMipmaps=!1}else D?(he&&t.texStorage2D(i.TEXTURE_2D,xe,Fe,ee.width,ee.height),te&&se(S,ee,me,Ne)):t.texImage2D(i.TEXTURE_2D,0,Fe,ee.width,ee.height,0,me,Ne,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Fe,ze[0].width,ze[0].height,ee.depth);for(let ne=0,$=ze.length;ne<$;ne++)if(ae=ze[ne],S.format!==Pn)if(me!==null)if(D){if(te)if(S.layerUpdates.size>0){let ye=iu(ae.width,ae.height,S.format,S.type);for(let Ge of S.layerUpdates){let wt=ae.data.subarray(Ge*ye/ae.data.BYTES_PER_ELEMENT,(Ge+1)*ye/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Ge,ae.width,ae.height,1,me,wt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ae.width,ae.height,ee.depth,me,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Fe,ae.width,ae.height,ee.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ae.width,ae.height,ee.depth,me,Ne,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Fe,ae.width,ae.height,ee.depth,0,me,Ne,ae.data)}else{D&&he&&t.texStorage2D(i.TEXTURE_2D,xe,Fe,ze[0].width,ze[0].height);for(let ne=0,$=ze.length;ne<$;ne++)ae=ze[ne],S.format!==Pn?me!==null?D?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,me,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Fe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?te&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,me,Ne,ae.data):t.texImage2D(i.TEXTURE_2D,ne,Fe,ae.width,ae.height,0,me,Ne,ae.data)}else if(S.isDataArrayTexture)if(D){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Fe,ee.width,ee.height,ee.depth),te)if(S.layerUpdates.size>0){let ne=iu(ee.width,ee.height,S.format,S.type);for(let $ of S.layerUpdates){let ye=ee.data.subarray($*ne/ee.data.BYTES_PER_ELEMENT,($+1)*ne/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,me,Ne,ye)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,me,Ne,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,ee.width,ee.height,ee.depth,0,me,Ne,ee.data);else if(S.isData3DTexture)D?(he&&t.texStorage3D(i.TEXTURE_3D,xe,Fe,ee.width,ee.height,ee.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,me,Ne,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,ee.width,ee.height,ee.depth,0,me,Ne,ee.data);else if(S.isFramebufferTexture){if(he)if(D)t.texStorage2D(i.TEXTURE_2D,xe,Fe,ee.width,ee.height);else{let ne=ee.width,$=ee.height;for(let ye=0;ye<xe;ye++)t.texImage2D(i.TEXTURE_2D,ye,Fe,ne,$,0,me,Ne,null),ne>>=1,$>>=1}}else if(ze.length>0){if(D&&he){let ne=Yt(ze[0]);t.texStorage2D(i.TEXTURE_2D,xe,Fe,ne.width,ne.height)}for(let ne=0,$=ze.length;ne<$;ne++)ae=ze[ne],D?te&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,me,Ne,ae):t.texImage2D(i.TEXTURE_2D,ne,Fe,me,Ne,ae);S.generateMipmaps=!1}else if(D){if(he){let ne=Yt(ee);t.texStorage2D(i.TEXTURE_2D,xe,Fe,ne.width,ne.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ne,ee)}else t.texImage2D(i.TEXTURE_2D,0,Fe,me,Ne,ee);m(S)&&d(J),Ae.__version=Y.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function de(P,S,O){if(S.image.length!==6)return;let J=yt(P,S),Q=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+O);let Y=n.get(Q);if(Q.version!==Y.__version||J===!0){t.activeTexture(i.TEXTURE0+O);let Ae=et.getPrimaries(et.workingColorSpace),ce=S.colorSpace===Ki?null:et.getPrimaries(S.colorSpace),ve=S.colorSpace===Ki||Ae===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Re=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,me=[];for(let $=0;$<6;$++)!Re&&!ee?me[$]=b(S.image[$],!0,s.maxCubemapSize):me[$]=ee?S.image[$].image:S.image[$],me[$]=Ye(S,me[$]);let Ne=me[0],Fe=r.convert(S.format,S.colorSpace),ae=r.convert(S.type),ze=E(S.internalFormat,Fe,ae,S.colorSpace),D=S.isVideoTexture!==!0,he=Y.__version===void 0||J===!0,te=Q.dataReady,xe=x(S,Ne);Xe(i.TEXTURE_CUBE_MAP,S);let ne;if(Re){D&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,ze,Ne.width,Ne.height);for(let $=0;$<6;$++){ne=me[$].mipmaps;for(let ye=0;ye<ne.length;ye++){let Ge=ne[ye];S.format!==Pn?Fe!==null?D?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,Ge.width,Ge.height,Fe,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,ze,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,Ge.width,Ge.height,Fe,ae,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,ze,Ge.width,Ge.height,0,Fe,ae,Ge.data)}}}else{if(ne=S.mipmaps,D&&he){ne.length>0&&xe++;let $=Yt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,ze,$.width,$.height)}for(let $=0;$<6;$++)if(ee){D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,me[$].width,me[$].height,Fe,ae,me[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ze,me[$].width,me[$].height,0,Fe,ae,me[$].data);for(let ye=0;ye<ne.length;ye++){let wt=ne[ye].image[$].image;D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,wt.width,wt.height,Fe,ae,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,ze,wt.width,wt.height,0,Fe,ae,wt.data)}}else{D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Fe,ae,me[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ze,Fe,ae,me[$]);for(let ye=0;ye<ne.length;ye++){let Ge=ne[ye];D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,Fe,ae,Ge.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,ze,Fe,ae,Ge.image[$])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Ie(P,S,O,J,Q,Y){let Ae=r.convert(O.format,O.colorSpace),ce=r.convert(O.type),ve=E(O.internalFormat,Ae,ce,O.colorSpace),Re=n.get(S),ee=n.get(O);if(ee.__renderTarget=S,!Re.__hasExternalTextures){let me=Math.max(1,S.width>>Y),Ne=Math.max(1,S.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,ve,me,Ne,S.depth,0,Ae,ce,null):t.texImage2D(Q,Y,ve,me,Ne,0,Ae,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),rt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Q,ee.__webglTexture,0,Me(S)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Q,ee.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(P,S,O){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){let J=S.depthTexture,Q=J&&J.isDepthTexture?J.type:null,Y=y(S.stencilBuffer,Q),Ae=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=Me(S);rt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,Y,S.width,S.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,P)}else{let J=S.textures;for(let Q=0;Q<J.length;Q++){let Y=J[Q],Ae=r.convert(Y.format,Y.colorSpace),ce=r.convert(Y.type),ve=E(Y.internalFormat,Ae,ce,Y.colorSpace),Re=Me(S);O&&rt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ve,S.width,S.height):rt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,ve,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ve,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);let Q=J.__webglTexture,Y=Me(S);if(S.depthTexture.format===Fr)rt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Zr)rt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ut(P){let S=n.get(P),O=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let J=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=J}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let J=P.texture.mipmaps;J&&J.length>0?ke(S.__webglFramebuffer[0],P):ke(S.__webglFramebuffer,P)}else if(O){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=i.createRenderbuffer(),ct(S.__webglDepthbuffer[J],P,!1);else{let Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else{let J=P.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ct(S.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(P,S,O){let J=n.get(P);S!==void 0&&Ie(J.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ut(P)}function lt(P){let S=P.texture,O=n.get(P),J=n.get(S);P.addEventListener("dispose",A);let Q=P.textures,Y=P.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=S.version,a.memory.textures++),Y){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let ve=0;ve<S.mipmaps.length;ve++)O.__webglFramebuffer[ce][ve]=i.createFramebuffer()}else O.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)O.__webglFramebuffer[ce]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let ce=0,ve=Q.length;ce<ve;ce++){let Re=n.get(Q[ce]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&rt(P)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){let ve=Q[ce];O.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);let Re=r.convert(ve.format,ve.colorSpace),ee=r.convert(ve.type),me=E(ve.internalFormat,Re,ee,ve.colorSpace,P.isXRRenderTarget===!0),Ne=Me(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,me,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(O.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)Ie(O.__webglFramebuffer[ce][ve],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ve);else Ie(O.__webglFramebuffer[ce],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(S)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ce=0,ve=Q.length;ce<ve;ce++){let Re=Q[ce],ee=n.get(Re);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),Xe(i.TEXTURE_2D,Re),Ie(O.__webglFramebuffer,P,Re,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),m(Re)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,J.__webglTexture),Xe(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)Ie(O.__webglFramebuffer[ve],P,S,i.COLOR_ATTACHMENT0,ce,ve);else Ie(O.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,ce,0);m(S)&&d(ce),t.unbindTexture()}P.depthBuffer&&Ut(P)}function L(P){let S=P.textures;for(let O=0,J=S.length;O<J;O++){let Q=S[O];if(m(Q)){let Y=_(P),Ae=n.get(Q).__webglTexture;t.bindTexture(Y,Ae),d(Y),t.unbindTexture()}}}let ln=[],ht=[];function Et(P){if(P.samples>0){if(rt(P)===!1){let S=P.textures,O=P.width,J=P.height,Q=i.COLOR_BUFFER_BIT,Y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(P),ce=S.length>1;if(ce)for(let Re=0;Re<S.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let ve=P.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Re=0;Re<S.length;Re++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Re]);let ee=n.get(S[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,O,J,0,0,O,J,Q,i.NEAREST),c===!0&&(ln.length=0,ht.length=0,ln.push(i.COLOR_ATTACHMENT0+Re),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ln.push(Y),ht.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ln))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Re=0;Re<S.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Re]);let ee=n.get(S[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Me(P){return Math.min(s.maxSamples,P.samples)}function rt(P){let S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function De(P){let S=a.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function Ye(P,S){let O=P.colorSpace,J=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||O!==en&&O!==Ki&&(et.getTransfer(O)===dt?(J!==Pn||Q!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Yt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=W,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=Ft,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=rt}function J_(i,e){function t(n,s=Ki){let r,a=et.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===kc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hh)return i.BYTE;if(n===zh)return i.SHORT;if(n===jr)return i.UNSIGNED_SHORT;if(n===Oc)return i.INT;if(n===vs)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Kr)return i.HALF_FLOAT;if(n===Gh)return i.ALPHA;if(n===Wh)return i.RGB;if(n===Pn)return i.RGBA;if(n===Fr)return i.DEPTH_COMPONENT;if(n===Zr)return i.DEPTH_STENCIL;if(n===Hc)return i.RED;if(n===zc)return i.RED_INTEGER;if(n===Xh)return i.RG;if(n===Vc)return i.RG_INTEGER;if(n===Gc)return i.RGBA_INTEGER;if(n===oo||n===co||n===lo||n===ho)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wc||n===Xc||n===qc||n===Yc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jc||n===Kc||n===Jc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jc||n===Kc)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zc||n===$c||n===Qc||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===cl||n===ll||n===hl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$c)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ll)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uo||n===ul||n===fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===uo)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qh||n===dl||n===pl||n===ml)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Jr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$_=`
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

}`,gu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new jt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new vn({vertexShader:Z_,fragmentShader:$_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new Js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bu=class extends xi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,b=new gu,m=t.getContextAttributes(),d=null,_=null,E=[],y=[],x=new Pe,w=null,A=new Wt;A.viewport=new ot;let C=new Wt;C.viewport=new ot;let M=[A,C],v=new Sc,I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=E[Z];return se===void 0&&(se=new Br,E[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=E[Z];return se===void 0&&(se=new Br,E[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=E[Z];return se===void 0&&(se=new Br,E[Z]=se),se.getHandSpace()};function U(Z){let se=y.indexOf(Z.inputSource);if(se===-1)return;let Ce=E[se];Ce!==void 0&&(Ce.update(Z.inputSource,Z.frame,l||a),Ce.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",X);for(let Z=0;Z<E.length;Z++){let se=y[Z];se!==null&&(y[Z]=null,E[Z].disconnect(se))}I=null,W=null,b.reset(),e.setRenderTarget(d),p=null,f=null,u=null,s=null,_=null,yt.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",k),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,de=null,Ie=null;m.depth&&(Ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=m.stencil?Zr:Fr,de=m.stencil?Jr:vs);let ct={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(ct),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new yi(f.textureWidth,f.textureHeight,{format:Pn,type:oi,depthTexture:new Ya(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ce),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new yi(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),yt.setContext(s),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function X(Z){for(let se=0;se<Z.removed.length;se++){let Ce=Z.removed[se],de=y.indexOf(Ce);de>=0&&(y[de]=null,E[de].disconnect(Ce))}for(let se=0;se<Z.added.length;se++){let Ce=Z.added[se],de=y.indexOf(Ce);if(de===-1){for(let ct=0;ct<E.length;ct++)if(ct>=y.length){y.push(Ce),de=ct;break}else if(y[ct]===null){y[ct]=Ce,de=ct;break}if(de===-1)break}let Ie=E[de];Ie&&Ie.connect(Ce)}}let H=new R,K=new R;function q(Z,se,Ce){H.setFromMatrixPosition(se.matrixWorld),K.setFromMatrixPosition(Ce.matrixWorld);let de=H.distanceTo(K),Ie=se.projectionMatrix.elements,ct=Ce.projectionMatrix.elements,ke=Ie[14]/(Ie[10]-1),Ut=Ie[14]/(Ie[10]+1),Ft=(Ie[9]+1)/Ie[5],lt=(Ie[9]-1)/Ie[5],L=(Ie[8]-1)/Ie[0],ln=(ct[8]+1)/ct[0],ht=ke*L,Et=ke*ln,Me=de/(-L+ln),rt=Me*-L;if(se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(rt),Z.translateZ(Me),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ie[10]===-1)Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let De=ke+Me,Ye=Ut+Me,Yt=ht-rt,P=Et+(de-rt),S=Ft*Ut/Ye*De,O=lt*Ut/Ye*De;Z.projectionMatrix.makePerspective(Yt,P,S,O,De,Ye),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let se=Z.near,Ce=Z.far;b.texture!==null&&(b.depthNear>0&&(se=b.depthNear),b.depthFar>0&&(Ce=b.depthFar)),v.near=C.near=A.near=se,v.far=C.far=A.far=Ce,(I!==v.near||W!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),I=v.near,W=v.far),A.layers.mask=Z.layers.mask|2,C.layers.mask=Z.layers.mask|4,v.layers.mask=A.layers.mask|C.layers.mask;let de=Z.parent,Ie=v.cameras;le(v,de);for(let ct=0;ct<Ie.length;ct++)le(Ie[ct],de);Ie.length===2?q(v,A,C):v.projectionMatrix.copy(A.projectionMatrix),pe(Z,v,de)};function pe(Z,se,Ce){Ce===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(Ce.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ws*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(v)};let Te=null;function Xe(Z,se){if(h=se.getViewerPose(l||a),g=se,h!==null){let Ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let de=!1;Ce.length!==v.cameras.length&&(v.cameras.length=0,de=!0);for(let ke=0;ke<Ce.length;ke++){let Ut=Ce[ke],Ft=null;if(p!==null)Ft=p.getViewport(Ut);else{let L=u.getViewSubImage(f,Ut);Ft=L.viewport,ke===0&&(e.setRenderTargetTextures(_,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(_))}let lt=M[ke];lt===void 0&&(lt=new Wt,lt.layers.enable(ke),lt.viewport=new ot,M[ke]=lt),lt.matrix.fromArray(Ut.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Ut.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),ke===0&&(v.matrix.copy(lt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),de===!0&&v.cameras.push(lt)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){let ke=u.getDepthInformation(Ce[0]);ke&&ke.isValid&&ke.texture&&b.init(e,ke,s.renderState)}}for(let Ce=0;Ce<E.length;Ce++){let de=y[Ce],Ie=E[Ce];de!==null&&Ie!==void 0&&Ie.update(de,se,l||a)}Te&&Te(Z,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}let yt=new Xp;yt.setAnimationLoop(Xe),this.setAnimationLoop=function(Z){Te=Z},this.dispose=function(){}}},or=new _n,Q_=new Ve;function ev(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Qh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,_,E,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),b(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,_,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===tn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===tn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _=e.get(d),E=_.envMap,y=_.envMapRotation;E&&(m.envMap.value=E,or.copy(y),or.x*=-1,or.y*=-1,or.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),m.envMapRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(or)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,_,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===tn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function b(m,d){let _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,E){let y=E.program;n.uniformBlockBinding(_,y)}function l(_,E){let y=s[_.id];y===void 0&&(g(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",m));let x=E.program;n.updateUBOMapping(_,x);let w=e.render.frame;r[_.id]!==w&&(f(_),r[_.id]=w)}function h(_){let E=u();_.__bindingPointIndex=E;let y=i.createBuffer(),x=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,x,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let E=s[_.id],y=_.uniforms,x=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,A=y.length;w<A;w++){let C=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,v=C.length;M<v;M++){let I=C[M];if(p(I,w,M,x)===!0){let W=I.__offset,U=Array.isArray(I.value)?I.value:[I.value],k=0;for(let X=0;X<U.length;X++){let H=U[X],K=b(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,W+k,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,k),k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,E,y,x){let w=_.value,A=E+"_"+y;if(x[A]===void 0)return typeof w=="number"||typeof w=="boolean"?x[A]=w:x[A]=w.clone(),!0;{let C=x[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return x[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(_){let E=_.uniforms,y=0,x=16;for(let A=0,C=E.length;A<C;A++){let M=Array.isArray(E[A])?E[A]:[E[A]];for(let v=0,I=M.length;v<I;v++){let W=M[v],U=Array.isArray(W.value)?W.value:[W.value];for(let k=0,X=U.length;k<X;k++){let H=U[k],K=b(H),q=y%x,le=q%K.boundary,pe=q+le;y+=le,pe!==0&&x-pe<K.storage&&(y+=x-pe),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=K.storage}}}let w=y%x;return w>0&&(y+=x-w),_.__size=y,_.__cache={},this}function b(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),E}function m(_){let E=_.target;E.removeEventListener("dispose",m);let y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}var _l=class{constructor(e={}){let{canvas:t=fp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),b=new Int32Array(4),m=null,d=null,_=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,x=!1;this._outputColorSpace=xt;let w=0,A=0,C=null,M=-1,v=null,I=new ot,W=new ot,U=null,k=new Se(0),X=0,H=t.width,K=t.height,q=1,le=null,pe=null,Te=new ot(0,0,H,K),Xe=new ot(0,0,H,K),yt=!1,Z=new zr,se=!1,Ce=!1,de=new Ve,Ie=new Ve,ct=new R,ke=new ot,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ft=!1;function lt(){return C===null?q:1}let L=n;function ln(T,F){return t.getContext(T,F)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"178"}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",$,!1),L===null){let F="webgl2";if(L=ln(F,T),L===null)throw ln(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ht,Et,Me,rt,De,Ye,Yt,P,S,O,J,Q,Y,Ae,ce,ve,Re,ee,me,Ne,Fe,ae,ze,D;function he(){ht=new yy(L),ht.init(),ae=new J_(L,ht),Et=new fy(L,ht,e,ae),Me=new j_(L,ht),Et.reverseDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),rt=new My(L),De=new F_,Ye=new K_(L,ht,Me,De,Et,ae,rt),Yt=new py(y),P=new xy(y),S=new Rg(L),ze=new hy(L,S),O=new _y(L,S,rt,ze),J=new Ey(L,O,S,rt),me=new Sy(L,Et,Ye),ve=new dy(De),Q=new U_(y,Yt,P,ht,Et,ze,ve),Y=new ev(y,De),Ae=new O_,ce=new G_(ht),ee=new ly(y,Yt,P,Me,J,p,c),Re=new q_(y,J,Et),D=new tv(L,rt,Et,Me),Ne=new uy(L,ht,rt),Fe=new vy(L,ht,rt),rt.programs=Q.programs,y.capabilities=Et,y.extensions=ht,y.properties=De,y.renderLists=Ae,y.shadowMap=Re,y.state=Me,y.info=rt}he();let te=new bu(y,L);this.xr=te,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=ht.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ht.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(H,K,!1))},this.getSize=function(T){return T.set(H,K)},this.setSize=function(T,F,V=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,K=F,t.width=Math.floor(T*q),t.height=Math.floor(F*q),V===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(H*q,K*q).floor()},this.setDrawingBufferSize=function(T,F,V){H=T,K=F,q=V,t.width=Math.floor(T*V),t.height=Math.floor(F*V),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Te)},this.setViewport=function(T,F,V,G){T.isVector4?Te.set(T.x,T.y,T.z,T.w):Te.set(T,F,V,G),Me.viewport(I.copy(Te).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(Xe)},this.setScissor=function(T,F,V,G){T.isVector4?Xe.set(T.x,T.y,T.z,T.w):Xe.set(T,F,V,G),Me.scissor(W.copy(Xe).multiplyScalar(q).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(T){Me.setScissorTest(yt=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){pe=T},this.getClearColor=function(T){return T.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,V=!0){let G=0;if(T){let N=!1;if(C!==null){let ie=C.texture.format;N=ie===Gc||ie===Vc||ie===zc}if(N){let ie=C.texture.type,ue=ie===oi||ie===vs||ie===jr||ie===Jr||ie===kc||ie===Bc,_e=ee.getClearColor(),ge=ee.getClearAlpha(),Be=_e.r,He=_e.g,Le=_e.b;ue?(g[0]=Be,g[1]=He,g[2]=Le,g[3]=ge,L.clearBufferuiv(L.COLOR,0,g)):(b[0]=Be,b[1]=He,b[2]=Le,b[3]=ge,L.clearBufferiv(L.COLOR,0,b))}else G|=L.COLOR_BUFFER_BIT}F&&(G|=L.DEPTH_BUFFER_BIT),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",$,!1),ee.dispose(),Ae.dispose(),ce.dispose(),De.dispose(),Yt.dispose(),P.dispose(),J.dispose(),ze.dispose(),D.dispose(),Q.dispose(),te.dispose(),te.removeEventListener("sessionstart",Lf),te.removeEventListener("sessionend",Df),Ps.stop()};function xe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let T=rt.autoReset,F=Re.enabled,V=Re.autoUpdate,G=Re.needsUpdate,N=Re.type;he(),rt.autoReset=T,Re.enabled=F,Re.autoUpdate=V,Re.needsUpdate=G,Re.type=N}function $(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ye(T){let F=T.target;F.removeEventListener("dispose",ye),Ge(F)}function Ge(T){wt(T),De.remove(T)}function wt(T){let F=De.get(T).programs;F!==void 0&&(F.forEach(function(V){Q.releaseProgram(V)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,V,G,N,ie){F===null&&(F=Ut);let ue=N.isMesh&&N.matrixWorld.determinant()<0,_e=v0(T,F,V,G,N);Me.setMaterial(G,ue);let ge=V.index,Be=1;if(G.wireframe===!0){if(ge=O.getWireframeAttribute(V),ge===void 0)return;Be=2}let He=V.drawRange,Le=V.attributes.position,Qe=He.start*Be,gt=(He.start+He.count)*Be;ie!==null&&(Qe=Math.max(Qe,ie.start*Be),gt=Math.min(gt,(ie.start+ie.count)*Be)),ge!==null?(Qe=Math.max(Qe,0),gt=Math.min(gt,ge.count)):Le!=null&&(Qe=Math.max(Qe,0),gt=Math.min(gt,Le.count));let kt=gt-Qe;if(kt<0||kt===1/0)return;ze.setup(N,G,_e,V,ge);let Tt,_t=Ne;if(ge!==null&&(Tt=S.get(ge),_t=Fe,_t.setIndex(Tt)),N.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*lt()),_t.setMode(L.LINES)):_t.setMode(L.TRIANGLES);else if(N.isLine){let Ue=G.linewidth;Ue===void 0&&(Ue=1),Me.setLineWidth(Ue*lt()),N.isLineSegments?_t.setMode(L.LINES):N.isLineLoop?_t.setMode(L.LINE_LOOP):_t.setMode(L.LINE_STRIP)}else N.isPoints?_t.setMode(L.POINTS):N.isSprite&&_t.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))_t.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ue=N._multiDrawStarts,Nt=N._multiDrawCounts,at=N._multiDrawCount,Tn=ge?S.get(ge).bytesPerElement:1,pr=De.get(G).currentProgram.getUniforms();for(let An=0;An<at;An++)pr.setValue(L,"_gl_DrawID",An),_t.render(Ue[An]/Tn,Nt[An])}else if(N.isInstancedMesh)_t.renderInstances(Qe,kt,N.count);else if(V.isInstancedBufferGeometry){let Ue=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Nt=Math.min(V.instanceCount,Ue);_t.renderInstances(Qe,kt,Nt)}else _t.render(Qe,kt)};function ut(T,F,V){T.transparent===!0&&T.side===nn&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,Io(T,F,V),T.side=si,T.needsUpdate=!0,Io(T,F,V),T.side=nn):Io(T,F,V)}this.compile=function(T,F,V=null){V===null&&(V=T),d=ce.get(V),d.init(F),E.push(d),V.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),T!==V&&T.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();let G=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ie=N.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){let _e=ie[ue];ut(_e,V,N),G.add(_e)}else ut(ie,V,N),G.add(ie)}),d=E.pop(),G},this.compileAsync=function(T,F,V=null){let G=this.compile(T,F,V);return new Promise(N=>{function ie(){if(G.forEach(function(ue){De.get(ue).currentProgram.isReady()&&G.delete(ue)}),G.size===0){N(T);return}setTimeout(ie,10)}ht.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let $n=null;function Di(T){$n&&$n(T)}function Lf(){Ps.stop()}function Df(){Ps.start()}let Ps=new Xp;Ps.setAnimationLoop(Di),typeof self<"u"&&Ps.setContext(self),this.setAnimationLoop=function(T){$n=T,te.setAnimationLoop(T),T===null?Ps.stop():Ps.start()},te.addEventListener("sessionstart",Lf),te.addEventListener("sessionend",Df),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(F),F=te.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,F,C),d=ce.get(T,E.length),d.init(F),E.push(d),Ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Z.setFromProjectionMatrix(Ie),Ce=this.localClippingEnabled,se=ve.init(this.clippingPlanes,Ce),m=Ae.get(T,_.length),m.init(),_.push(m),te.enabled===!0&&te.isPresenting===!0){let ie=y.xr.getDepthSensingMesh();ie!==null&&jl(ie,F,-1/0,y.sortObjects)}jl(T,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(le,pe),Ft=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ft&&ee.addToRenderList(m,T),this.info.render.frame++,se===!0&&ve.beginShadows();let V=d.state.shadowsArray;Re.render(V,T,F),se===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,N=m.transmissive;if(d.setupLights(),F.isArrayCamera){let ie=F.cameras;if(N.length>0)for(let ue=0,_e=ie.length;ue<_e;ue++){let ge=ie[ue];Ff(G,N,T,ge)}Ft&&ee.render(T);for(let ue=0,_e=ie.length;ue<_e;ue++){let ge=ie[ue];Uf(m,T,ge,ge.viewport)}}else N.length>0&&Ff(G,N,T,F),Ft&&ee.render(T),Uf(m,T,F);C!==null&&A===0&&(Ye.updateMultisampleRenderTarget(C),Ye.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(y,T,F),ze.resetDefaultState(),M=-1,v=null,E.pop(),E.length>0?(d=E[E.length-1],se===!0&&ve.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function jl(T,F,V,G){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){G&&ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ie);let ue=J.update(T),_e=T.material;_e.visible&&m.push(T,ue,_e,V,ke.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){let ue=J.update(T),_e=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ke.copy(T.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),ke.copy(ue.boundingSphere.center)),ke.applyMatrix4(T.matrixWorld).applyMatrix4(Ie)),Array.isArray(_e)){let ge=ue.groups;for(let Be=0,He=ge.length;Be<He;Be++){let Le=ge[Be],Qe=_e[Le.materialIndex];Qe&&Qe.visible&&m.push(T,ue,Qe,V,ke.z,Le)}}else _e.visible&&m.push(T,ue,_e,V,ke.z,null)}}let ie=T.children;for(let ue=0,_e=ie.length;ue<_e;ue++)jl(ie[ue],F,V,G)}function Uf(T,F,V,G){let N=T.opaque,ie=T.transmissive,ue=T.transparent;d.setupLightsView(V),se===!0&&ve.setGlobalState(y.clippingPlanes,V),G&&Me.viewport(I.copy(G)),N.length>0&&Po(N,F,V),ie.length>0&&Po(ie,F,V),ue.length>0&&Po(ue,F,V),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Ff(T,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new yi(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Kr:oi,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let ie=d.state.transmissionRenderTarget[G.id],ue=G.viewport||I;ie.setSize(ue.z*y.transmissionResolutionScale,ue.w*y.transmissionResolutionScale);let _e=y.getRenderTarget(),ge=y.getActiveCubeFace(),Be=y.getActiveMipmapLevel();y.setRenderTarget(ie),y.getClearColor(k),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),Ft&&ee.render(V);let He=y.toneMapping;y.toneMapping=ji;let Le=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),se===!0&&ve.setGlobalState(y.clippingPlanes,G),Po(T,V,G),Ye.updateMultisampleRenderTarget(ie),Ye.updateRenderTargetMipmap(ie),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let gt=0,kt=F.length;gt<kt;gt++){let Tt=F[gt],_t=Tt.object,Ue=Tt.geometry,Nt=Tt.material,at=Tt.group;if(Nt.side===nn&&_t.layers.test(G.layers)){let Tn=Nt.side;Nt.side=tn,Nt.needsUpdate=!0,Nf(_t,V,G,Ue,Nt,at),Nt.side=Tn,Nt.needsUpdate=!0,Qe=!0}}Qe===!0&&(Ye.updateMultisampleRenderTarget(ie),Ye.updateRenderTargetMipmap(ie))}y.setRenderTarget(_e,ge,Be),y.setClearColor(k,X),Le!==void 0&&(G.viewport=Le),y.toneMapping=He}function Po(T,F,V){let G=F.isScene===!0?F.overrideMaterial:null;for(let N=0,ie=T.length;N<ie;N++){let ue=T[N],_e=ue.object,ge=ue.geometry,Be=ue.group,He=ue.material;He.allowOverride===!0&&G!==null&&(He=G),_e.layers.test(V.layers)&&Nf(_e,F,V,ge,He,Be)}}function Nf(T,F,V,G,N,ie){T.onBeforeRender(y,F,V,G,N,ie),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(y,F,V,G,T,ie),N.transparent===!0&&N.side===nn&&N.forceSinglePass===!1?(N.side=tn,N.needsUpdate=!0,y.renderBufferDirect(V,F,G,N,T,ie),N.side=si,N.needsUpdate=!0,y.renderBufferDirect(V,F,G,N,T,ie),N.side=nn):y.renderBufferDirect(V,F,G,N,T,ie),T.onAfterRender(y,F,V,G,N,ie)}function Io(T,F,V){F.isScene!==!0&&(F=Ut);let G=De.get(T),N=d.state.lights,ie=d.state.shadowsArray,ue=N.state.version,_e=Q.getParameters(T,N.state,ie,F,V),ge=Q.getProgramCacheKey(_e),Be=G.programs;G.environment=T.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(T.isMeshStandardMaterial?P:Yt).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",ye),Be=new Map,G.programs=Be);let He=Be.get(ge);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===ue)return kf(T,_e),He}else _e.uniforms=Q.getUniforms(T),T.onBeforeCompile(_e,y),He=Q.acquireProgram(_e,ge),Be.set(ge,He),G.uniforms=_e.uniforms;let Le=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=ve.uniform),kf(T,_e),G.needsLights=S0(T),G.lightsStateVersion=ue,G.needsLights&&(Le.ambientLightColor.value=N.state.ambient,Le.lightProbe.value=N.state.probe,Le.directionalLights.value=N.state.directional,Le.directionalLightShadows.value=N.state.directionalShadow,Le.spotLights.value=N.state.spot,Le.spotLightShadows.value=N.state.spotShadow,Le.rectAreaLights.value=N.state.rectArea,Le.ltc_1.value=N.state.rectAreaLTC1,Le.ltc_2.value=N.state.rectAreaLTC2,Le.pointLights.value=N.state.point,Le.pointLightShadows.value=N.state.pointShadow,Le.hemisphereLights.value=N.state.hemi,Le.directionalShadowMap.value=N.state.directionalShadowMap,Le.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Le.spotShadowMap.value=N.state.spotShadowMap,Le.spotLightMatrix.value=N.state.spotLightMatrix,Le.spotLightMap.value=N.state.spotLightMap,Le.pointShadowMap.value=N.state.pointShadowMap,Le.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=He,G.uniformsList=null,He}function Of(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=na.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function kf(T,F){let V=De.get(T);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function v0(T,F,V,G,N){F.isScene!==!0&&(F=Ut),Ye.resetTextureUnits();let ie=F.fog,ue=G.isMeshStandardMaterial?F.environment:null,_e=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:en,ge=(G.isMeshStandardMaterial?P:Yt).get(G.envMap||ue),Be=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!V.morphAttributes.position,Qe=!!V.morphAttributes.normal,gt=!!V.morphAttributes.color,kt=ji;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(kt=y.toneMapping);let Tt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_t=Tt!==void 0?Tt.length:0,Ue=De.get(G),Nt=d.state.lights;if(se===!0&&(Ce===!0||T!==v)){let hn=T===v&&G.id===M;ve.setState(G,T,hn)}let at=!1;G.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Nt.state.version||Ue.outputColorSpace!==_e||N.isBatchedMesh&&Ue.batching===!1||!N.isBatchedMesh&&Ue.batching===!0||N.isBatchedMesh&&Ue.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ue.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ue.instancing===!1||!N.isInstancedMesh&&Ue.instancing===!0||N.isSkinnedMesh&&Ue.skinning===!1||!N.isSkinnedMesh&&Ue.skinning===!0||N.isInstancedMesh&&Ue.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ue.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ue.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ue.instancingMorph===!1&&N.morphTexture!==null||Ue.envMap!==ge||G.fog===!0&&Ue.fog!==ie||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ve.numPlanes||Ue.numIntersection!==ve.numIntersection)||Ue.vertexAlphas!==Be||Ue.vertexTangents!==He||Ue.morphTargets!==Le||Ue.morphNormals!==Qe||Ue.morphColors!==gt||Ue.toneMapping!==kt||Ue.morphTargetsCount!==_t)&&(at=!0):(at=!0,Ue.__version=G.version);let Tn=Ue.currentProgram;at===!0&&(Tn=Io(G,F,N));let pr=!1,An=!1,_a=!1,Ct=Tn.getUniforms(),Fn=Ue.uniforms;if(Me.useProgram(Tn.program)&&(pr=!0,An=!0,_a=!0),G.id!==M&&(M=G.id,An=!0),pr||v!==T){Me.buffers.depth.getReversed()?(de.copy(T.projectionMatrix),pp(de),mp(de),Ct.setValue(L,"projectionMatrix",de)):Ct.setValue(L,"projectionMatrix",T.projectionMatrix),Ct.setValue(L,"viewMatrix",T.matrixWorldInverse);let xn=Ct.map.cameraPosition;xn!==void 0&&xn.setValue(L,ct.setFromMatrixPosition(T.matrixWorld)),Et.logarithmicDepthBuffer&&Ct.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ct.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,An=!0,_a=!0)}if(N.isSkinnedMesh){Ct.setOptional(L,N,"bindMatrix"),Ct.setOptional(L,N,"bindMatrixInverse");let hn=N.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Ct.setValue(L,"boneTexture",hn.boneTexture,Ye))}N.isBatchedMesh&&(Ct.setOptional(L,N,"batchingTexture"),Ct.setValue(L,"batchingTexture",N._matricesTexture,Ye),Ct.setOptional(L,N,"batchingIdTexture"),Ct.setValue(L,"batchingIdTexture",N._indirectTexture,Ye),Ct.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&Ct.setValue(L,"batchingColorTexture",N._colorsTexture,Ye));let Nn=V.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&me.update(N,V,Tn),(An||Ue.receiveShadow!==N.receiveShadow)&&(Ue.receiveShadow=N.receiveShadow,Ct.setValue(L,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Fn.envMap.value=ge,Fn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Fn.envMapIntensity.value=F.environmentIntensity),An&&(Ct.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ue.needsLights&&M0(Fn,_a),ie&&G.fog===!0&&Y.refreshFogUniforms(Fn,ie),Y.refreshMaterialUniforms(Fn,G,q,K,d.state.transmissionRenderTarget[T.id]),na.upload(L,Of(Ue),Fn,Ye)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(na.upload(L,Of(Ue),Fn,Ye),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ct.setValue(L,"center",N.center),Ct.setValue(L,"modelViewMatrix",N.modelViewMatrix),Ct.setValue(L,"normalMatrix",N.normalMatrix),Ct.setValue(L,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let hn=G.uniformsGroups;for(let xn=0,Kl=hn.length;xn<Kl;xn++){let Is=hn[xn];D.update(Is,Tn),D.bind(Is,Tn)}}return Tn}function M0(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function S0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,F,V){let G=De.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),De.get(T.texture).__webglTexture=F,De.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let V=De.get(T);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};let E0=L.createFramebuffer();this.setRenderTarget=function(T,F=0,V=0){C=T,w=F,A=V;let G=!0,N=null,ie=!1,ue=!1;if(T){let ge=De.get(T);if(ge.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(ge.__webglFramebuffer===void 0)Ye.setupRenderTarget(T);else if(ge.__hasExternalTextures)Ye.rebindTextures(T,De.get(T.texture).__webglTexture,De.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Le=T.depthTexture;if(ge.__boundDepthTexture!==Le){if(Le!==null&&De.has(Le)&&(T.width!==Le.image.width||T.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(T)}}let Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ue=!0);let He=De.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(He[F])?N=He[F][V]:N=He[F],ie=!0):T.samples>0&&Ye.useMultisampledRTT(T)===!1?N=De.get(T).__webglMultisampledFramebuffer:Array.isArray(He)?N=He[V]:N=He,I.copy(T.viewport),W.copy(T.scissor),U=T.scissorTest}else I.copy(Te).multiplyScalar(q).floor(),W.copy(Xe).multiplyScalar(q).floor(),U=yt;if(V!==0&&(N=E0),Me.bindFramebuffer(L.FRAMEBUFFER,N)&&G&&Me.drawBuffers(T,N),Me.viewport(I),Me.scissor(W),Me.setScissorTest(U),ie){let ge=De.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,V)}else if(ue){let ge=De.get(T.texture),Be=F;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ge.__webglTexture,V,Be)}else if(T!==null&&V!==0){let ge=De.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ge.__webglTexture,V)}M=-1},this.readRenderTargetPixels=function(T,F,V,G,N,ie,ue,_e=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){Me.bindFramebuffer(L.FRAMEBUFFER,ge);try{let Be=T.textures[_e],He=Be.format,Le=Be.type;if(!Et.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-G&&V>=0&&V<=T.height-N&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_e),L.readPixels(F,V,G,N,ae.convert(He),ae.convert(Le),ie))}finally{let Be=C!==null?De.get(C).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,F,V,G,N,ie,ue,_e=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge)if(F>=0&&F<=T.width-G&&V>=0&&V<=T.height-N){Me.bindFramebuffer(L.FRAMEBUFFER,ge);let Be=T.textures[_e],He=Be.format,Le=Be.type;if(!Et.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.bufferData(L.PIXEL_PACK_BUFFER,ie.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_e),L.readPixels(F,V,G,N,ae.convert(He),ae.convert(Le),0);let gt=C!==null?De.get(C).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,gt);let kt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await dp(L,kt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ie),L.deleteBuffer(Qe),L.deleteSync(kt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,V=0){let G=Math.pow(2,-V),N=Math.floor(T.image.width*G),ie=Math.floor(T.image.height*G),ue=F!==null?F.x:0,_e=F!==null?F.y:0;Ye.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,ue,_e,N,ie),Me.unbindTexture()};let w0=L.createFramebuffer(),T0=L.createFramebuffer();this.copyTextureToTexture=function(T,F,V=null,G=null,N=0,ie=null){ie===null&&(N!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=N,N=0):ie=0);let ue,_e,ge,Be,He,Le,Qe,gt,kt,Tt=T.isCompressedTexture?T.mipmaps[ie]:T.image;if(V!==null)ue=V.max.x-V.min.x,_e=V.max.y-V.min.y,ge=V.isBox3?V.max.z-V.min.z:1,Be=V.min.x,He=V.min.y,Le=V.isBox3?V.min.z:0;else{let Nn=Math.pow(2,-N);ue=Math.floor(Tt.width*Nn),_e=Math.floor(Tt.height*Nn),T.isDataArrayTexture?ge=Tt.depth:T.isData3DTexture?ge=Math.floor(Tt.depth*Nn):ge=1,Be=0,He=0,Le=0}G!==null?(Qe=G.x,gt=G.y,kt=G.z):(Qe=0,gt=0,kt=0);let _t=ae.convert(F.format),Ue=ae.convert(F.type),Nt;F.isData3DTexture?(Ye.setTexture3D(F,0),Nt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ye.setTexture2DArray(F,0),Nt=L.TEXTURE_2D_ARRAY):(Ye.setTexture2D(F,0),Nt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);let at=L.getParameter(L.UNPACK_ROW_LENGTH),Tn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),pr=L.getParameter(L.UNPACK_SKIP_PIXELS),An=L.getParameter(L.UNPACK_SKIP_ROWS),_a=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Tt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Tt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Be),L.pixelStorei(L.UNPACK_SKIP_ROWS,He),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Le);let Ct=T.isDataArrayTexture||T.isData3DTexture,Fn=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let Nn=De.get(T),hn=De.get(F),xn=De.get(Nn.__renderTarget),Kl=De.get(hn.__renderTarget);Me.bindFramebuffer(L.READ_FRAMEBUFFER,xn.__webglFramebuffer),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,Kl.__webglFramebuffer);for(let Is=0;Is<ge;Is++)Ct&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,De.get(T).__webglTexture,N,Le+Is),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,De.get(F).__webglTexture,ie,kt+Is)),L.blitFramebuffer(Be,He,ue,_e,Qe,gt,ue,_e,L.DEPTH_BUFFER_BIT,L.NEAREST);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(N!==0||T.isRenderTargetTexture||De.has(T)){let Nn=De.get(T),hn=De.get(F);Me.bindFramebuffer(L.READ_FRAMEBUFFER,w0),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,T0);for(let xn=0;xn<ge;xn++)Ct?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Nn.__webglTexture,N,Le+xn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Nn.__webglTexture,N),Fn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,hn.__webglTexture,ie,kt+xn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,hn.__webglTexture,ie),N!==0?L.blitFramebuffer(Be,He,ue,_e,Qe,gt,ue,_e,L.COLOR_BUFFER_BIT,L.NEAREST):Fn?L.copyTexSubImage3D(Nt,ie,Qe,gt,kt+xn,Be,He,ue,_e):L.copyTexSubImage2D(Nt,ie,Qe,gt,Be,He,ue,_e);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Fn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Nt,ie,Qe,gt,kt,ue,_e,ge,_t,Ue,Tt.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Nt,ie,Qe,gt,kt,ue,_e,ge,_t,Tt.data):L.texSubImage3D(Nt,ie,Qe,gt,kt,ue,_e,ge,_t,Ue,Tt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ie,Qe,gt,ue,_e,_t,Ue,Tt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ie,Qe,gt,Tt.width,Tt.height,_t,Tt.data):L.texSubImage2D(L.TEXTURE_2D,ie,Qe,gt,ue,_e,_t,Ue,Tt);L.pixelStorei(L.UNPACK_ROW_LENGTH,at),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Tn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pr),L.pixelStorei(L.UNPACK_SKIP_ROWS,An),L.pixelStorei(L.UNPACK_SKIP_IMAGES,_a),ie===0&&F.generateMipmaps&&L.generateMipmap(Nt),Me.unbindTexture()},this.copyTextureToTexture3D=function(T,F,V=null,G=null,N=0){return Xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,V,G,N)},this.initRenderTarget=function(T){De.get(T).__webglFramebuffer===void 0&&Ye.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ye.setTextureCube(T,0):T.isData3DTexture?Ye.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ye.setTexture2DArray(T,0):Ye.setTexture2D(T,0),Me.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,Me.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};function yu(i,e){if(e===Yh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===$r||e===go){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===$r)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Ml=class extends Ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Tu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Hu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=qi.extractUrlBase(e);a=qi.resolveURL(l,this.path)}else a=qi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Xr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===em){try{a[$e.KHR_BINARY_GLTF]=new zu(e)}catch(u){s&&s(u);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new ju(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:a[u]=new Eu;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[u]=new Vu(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[u]=new Gu;break;case $e.KHR_MESH_QUANTIZATION:a[u]=new Wu;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function iv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Su=class{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Se(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],en);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new _s(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Xi(h),l.distance=u;break;case"spot":l=new to(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Ji(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Eu=class{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Vt}extendParams(e,t,n){let s=[];e.color=new Se(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],en),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,xt))}return Promise.all(s)}},wu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Tu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Pe(o,o)}return Promise.all(r)}},Au=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Ru=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Cu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],en)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,xt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Pu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Iu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(o[0],o[1],o[2],en),Promise.all(r)}},Lu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Du=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(o[0],o[1],o[2],en),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,xt)),Promise.all(r)}},Uu=class{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Fu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Nu=class{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ou=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},ku=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Bu=class{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},Hu=class{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Hn.TRIANGLES&&l.mode!==Hn.TRIANGLE_STRIP&&l.mode!==Hn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,p=[];for(let g of u){let b=new Ve,m=new R,d=new At,_=new R(1,1,1),E=new js(g.geometry,g.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,y),c.SCALE&&_.fromBufferAttribute(c.SCALE,y),E.setMatrixAt(y,b.compose(m,d,_));for(let y in c)if(y==="_COLOR_0"){let x=c[y];E.instanceColor=new gs(x.array,x.itemSize,x.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);pt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),p.push(E)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},em="glTF",xo=12,Jp={JSON:1313821514,BIN:5130562},zu=class{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==em)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-xo,r=new DataView(e,xo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Jp.JSON){let l=new Uint8Array(e,xo+a,o);this.content=n.decode(l)}else if(c===Jp.BIN){let l=xo+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Vu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=qu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=qu[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],p=ra[f.componentType];l[u]=p.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let g in p.attributes){let b=p.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(p)},o,l,en,f)})})}},Gu=class{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Wu=class{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}},Sl=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,f=u*u,p=f*u,g=e*l,b=g-l,m=-2*p+3*f,d=p-f,_=1-m,E=d-f+u;for(let y=0;y!==o;y++){let x=a[b+y+o],w=a[b+y+c]*h,A=a[g+y+o],C=a[g+y]*h;r[y]=_*x+E*w+m*A+d*C}return r}},sv=new At,Xu=class extends Sl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return sv.fromArray(r).normalize().toArray(r),r}},Hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ra={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zp={9728:Qt,9729:dn,9984:Nc,9985:Yr,9986:sr,9987:ai},$p={33071:mi,33648:Ur,10497:ri},_u={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rv={CUBICSPLINE:void 0,LINEAR:Gs,STEP:Vs},vu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function av(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new mt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:si})),i.DefaultMaterial}function hr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ji(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ov(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function cv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lv(i){let e,t=i.extensions&&i.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Mu(t.attributes):e=i.indices+":"+Mu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Mu(i.targets[n]);return e}function Mu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Yu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var uv=new Ve,ju=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new $a(this.options.manager):this.textureLoader=new no(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return hr(r,o,s),Ji(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(qi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=_u[s.type],o=ra[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new vt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=_u[s.type],l=ra[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,b,m;if(p&&p!==u){let d=Math.floor(f/p),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,E=t.cache.get(_);E||(b=new l(o,d*p,s.count*p/h),E=new Ys(b,p/h),t.cache.add(_,E)),m=new ms(E,c,f%p/h,g)}else o===null?b=new l(s.count*c):b=new l(o,f,s.count*c),m=new vt(b,c,g);if(s.sparse!==void 0){let d=_u.SCALAR,_=ra[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,x=new _(a[1],E,s.sparse.count*d),w=new l(a[2],y,s.sparse.count*c);o!==null&&(m=new vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,C=x.length;A<C;A++){let M=x[A];if(m.setX(M,w[A*c]),c>=2&&m.setY(M,w[A*c+1]),c>=3&&m.setZ(M,w[A*c+2]),c>=4&&m.setW(M,w[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=Zp[f.magFilter]||dn,h.minFilter=Zp[f.minFilter]||ai,h.wrapS=$p[f.wrapS]||ri,h.wrapT=$p[f.wrapT]||ri,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Qt&&h.minFilter!==dn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(b){let m=new jt(b);m.needsUpdate=!0,f(m)}),t.load(qi.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Ji(u,a),u.userData.mimeType=a.mimeType||hv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Vr,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ks,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return mt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){let u=s[$e.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],en),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,xt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=nn);let h=r.alphaMode||vu.OPAQUE;if(h===vu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===vu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Vt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Pe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Vt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Vt){let u=r.emissiveFactor;o.emissive=new Se().setRGB(u[0],u[1],u[2],en)}return r.emissiveTexture!==void 0&&a!==Vt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,xt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ji(u,r),t.associations.set(u,{materials:e}),r.extensions&&hr(s,u,r),u})}createUniqueName(e){let t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Qp(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=lv(l),u=s[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Qp(new Pt,l,t),s[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?av(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){let b=h[p],m=a[p],d,_=l[p];if(m.mode===Hn.TRIANGLES||m.mode===Hn.TRIANGLE_STRIP||m.mode===Hn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new Va(b,_):new We(b,_),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Hn.TRIANGLE_STRIP?d.geometry=yu(d.geometry,go):m.mode===Hn.TRIANGLE_FAN&&(d.geometry=yu(d.geometry,$r));else if(m.mode===Hn.LINES)d=new Xa(b,_);else if(m.mode===Hn.LINE_STRIP)d=new _i(b,_);else if(m.mode===Hn.LINE_LOOP)d=new qa(b,_);else if(m.mode===Hn.POINTS)d=new bs(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&cv(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Ji(d,r),m.extensions&&hr(s,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&hr(s,u[0],r),u[0];let f=new Xt;r.extensions&&hr(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=u.length;p<g;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(Ee.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new tr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ji(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let f=new Ve;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Wa(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],g=s.samplers[p.sampler],b=p.target,m=b.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],g=u[2],b=u[3],m=u[4],d=[];for(let _=0,E=f.length;_<E;_++){let y=f[_],x=p[_],w=g[_],A=b[_],C=m[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let M=n._createAnimationTracks(y,x,w,A,C);if(M)for(let v=0;v<M.length;v++)d.push(M[v])}return new Qs(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,uv)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Hr:l.length>1?h=new Xt:l.length===1?h=l[0]:h=new pt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ji(h,r),r.extensions&&hr(n,h,r),r.matrix!==void 0){let u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Xt;n.name&&(r.name=s.createUniqueName(n.name)),Ji(r,n),n.extensions&&hr(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof mn||f instanceof jt)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];Ms[r.path]===Ms.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(Ms[r.path]){case Ms.weights:l=vi;break;case Ms.rotation:l=Mi;break;case Ms.translation:case Ms.scale:l=Si;break;default:switch(n.itemSize){case 1:l=vi;break;case 2:case 3:default:l=Si;break}break}let h=s.interpolation!==void 0?rv[s.interpolation]:Gs,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let g=new l(c[f]+"."+Ms[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Yu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Mi?Xu:Sl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function fv(i,e,t){let n=e.attributes,s=new pn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),o.normalized){let h=Yu(ra[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,c=new R;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let b=Yu(ra[f.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new yn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Qp(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=qu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return et.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Ji(i,e),fv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ov(i,e.targets,t):i})}var tm=(function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(d){r=d.instance,r.exports.__wasm_call_ctors()});function o(d){for(var _=new Uint8Array(d.length),E=0;E<d.length;++E){var y=d.charCodeAt(E);_[E]=y>96?y-97:y>64?y-39:y+4}for(var x=0,E=0;E<d.length;++E)_[x++]=_[E]<60?n[_[E]]:(_[E]-60)*64+_[++E];return _.buffer.slice(0,x)}function c(d,_,E,y,x,w){var A=r.exports.sbrk,C=E+3&-4,M=A(C*y),v=A(x.length),I=new Uint8Array(r.exports.memory.buffer);I.set(x,v);var W=d(M,E,y,v,x.length);if(W==0&&w&&w(M,C,y),_.set(I.subarray(M,M+E*y)),A(M-A(0)),W!=0)throw new Error("Malformed buffer data: "+W)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function p(d){var _={object:new Worker(d),pending:0,requests:{}};return _.object.onmessage=function(E){var y=E.data;_.pending-=y.count,_.requests[y.id][y.action](y.value),delete _.requests[y.id]},_}function g(d){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),E=new Blob([_],{type:"text/javascript"}),y=URL.createObjectURL(E),x=0;x<d;++x)u[x]=p(y);URL.revokeObjectURL(y)}function b(d,_,E,y,x){for(var w=u[0],A=1;A<u.length;++A)u[A].pending<w.pending&&(w=u[A]);return new Promise(function(C,M){var v=new Uint8Array(E),I=f++;w.pending+=d,w.requests[I]={resolve:C,reject:M},w.object.postMessage({id:I,count:d,size:_,source:v,mode:y,filter:x},[v.buffer])})}function m(d){a.then(function(){var _=d.data;try{var E=new Uint8Array(_.count*_.size);c(r.exports[_.mode],E,_.count,_.size,_.source,r.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:E},[E.buffer])}catch(y){self.postMessage({id:_.id,count:_.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(d){g(d)},decodeVertexBuffer:function(d,_,E,y,x){c(r.exports.meshopt_decodeVertexBuffer,d,_,E,y,r.exports[l[x]])},decodeIndexBuffer:function(d,_,E,y){c(r.exports.meshopt_decodeIndexBuffer,d,_,E,y)},decodeIndexSequence:function(d,_,E,y){c(r.exports.meshopt_decodeIndexSequence,d,_,E,y)},decodeGltfBuffer:function(d,_,E,y,x,w){c(r.exports[h[x]],d,_,E,y,r.exports[l[w]])},decodeGltfBufferAsync:function(d,_,E,y,x){return u.length>0?b(d,_,E,h[y],l[x]):a.then(function(){var w=new Uint8Array(d*_);return c(r.exports[h[y]],w,d,_,E,r.exports[l[x]]),w})}}})();var El=class extends qs{constructor(){super();let e=new ps;e.deleteAttribute("uv");let t=new mt({side:tn}),n=new mt,s=new Xi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new We(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new js(e,n,6),o=new pt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new We(e,aa(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new We(e,aa(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new We(e,aa(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new We(e,aa(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new We(e,aa(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new We(e,aa(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function aa(i){let e=new Vt;return e.color.setScalar(i),e}var ns=24,yf=2.1,Cl=2.2,fi={idle:{a:660,b:740,loop:!0},lick:{a:170,b:220},walk:{a:230,b:277,loop:!0},jump:{a:290,b:340},rear:{a:350,b:418},shake:{a:430,b:470},roll:{a:480,b:560},petIn:{a:570,b:582},pet:{a:582,b:630,loop:!0},petOut:{a:630,b:644},leap:{a:300,b:318},catchMouth:{a:760,b:790},catchPaw:{a:800,b:870},catchTwo:{a:880,b:960},pickup:{a:970,b:1004},drop:{a:1010,b:1040},sitDown:{a:1070,b:1098},sit:{a:1098,b:1146,loop:!0},sitUp:{a:1146,b:1166},belly:{a:1230,b:1326}},dv=()=>0,pv=i=>{let e=t=>(t=Math.min(1,Math.max(0,t)),t*t*(3-2*t));return i<=1250||i>=1304?1:i<1256?1-.6*e((i-1250)/6):i<=1298?.4:.4+.6*e((i-1298)/6)},of=[],mv=3,gv={a:1170,b:1194,ref:1168},bv={a:1200,b:1215,ref:1198},nm=.34,Je=i=>document.querySelector(i),rn=Je("#canvas"),As={s1:Je("#s1"),s2:Je("#s2"),s3:Je("#s3")},rs=Je("#flash"),Dm=Je("#hint");function Vl(i){for(let e in As)As[e].classList.toggle("show",e===i);document.body.classList.toggle("on-card",i==="s3")}var ba=matchMedia("(pointer: coarse)").matches;function xv(){let i=document.getElementById("gCoachTip");i&&(i.textContent=ba?"\u0421\u0432\u0430\u0439\u043F\u0430\u0439 \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u044B, \u0447\u0442\u043E\u0431\u044B \u0434\u0432\u0438\u0433\u0430\u0442\u044C \u041E\u0440\u0438":"\u0414\u0432\u0438\u0433\u0430\u0439 \u043C\u044B\u0448\u044C\u044E \u0438\u043B\u0438 \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438 \u2190 \u2192"),document.body.classList.add("coach")}function Pl(){document.body.classList.remove("coach")}var wn=new _l({canvas:rn,antialias:!0,alpha:!0,powerPreference:"high-performance"});wn.setClearColor(0,0);wn.setPixelRatio(Math.min(devicePixelRatio||1,ba?1.5:2));wn.outputColorSpace=xt;wn.toneMapping=Dc;wn.toneMappingExposure=.82;var be=new qs,Dt=new Wt(32,1,.1,100),yv=new ia(wn);be.environment=yv.fromScene(new El,.04).texture;be.environmentIntensity=.45;var Um=new _s(16777215,1.15);Um.position.set(2.5,4,3);be.add(Um);var Fm=new _s(13227775,1.2);Fm.position.set(-3,2,-3);be.add(Fm);var _v=new Qa(11122400,1710640,.55);be.add(_v);var Nm=new Xi(15003647,1.2,5,1.6);Nm.position.set(0,-.55,.9);be.add(Nm);function Om(i,e,t,n){let s=new Pt,r=new Float32Array(i*3),a=new Float32Array(i);for(let l=0;l<i;l++)r[l*3]=(Math.random()-.5)*e,r[l*3+1]=(Math.random()-.5)*e,r[l*3+2]=-3-Math.random()*12,a[l]=Math.random()*Math.PI*2;s.setAttribute("position",new vt(r,3)),s.setAttribute("phase",new vt(a,1));let o=new vn({transparent:!0,depthWrite:!1,blending:sn,uniforms:{uTime:{value:0},uSize:{value:t},uColor:{value:new Se(n)},uPR:{value:wn.getPixelRatio()}},vertexShader:`attribute float phase; varying float vA; uniform float uTime,uSize,uPR;
      void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); float tw=.55+.45*sin(uTime*1.3+phase*7.); vA=tw;
      gl_PointSize=uSize*uPR*(0.6+0.8*tw)*(6./-mv.z); gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying float vA; uniform vec3 uColor; void main(){ vec2 d=gl_PointCoord-.5; float r=length(d);
      float a=smoothstep(.5,.05,r); float core=smoothstep(.18,0.,r); gl_FragColor=vec4(uColor+core*.4,(a*vA)*0.9); }`}),c=new bs(s,o);return c.frustumCulled=!1,c}var dr=Om(380,26,5,"#dfe7ff");be.add(dr);var To=Om(70,14,9,"#ffffff");be.add(To);var is=new Xt;{let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d"),t=e.createRadialGradient(128,128,0,128,128,128);t.addColorStop(0,"rgba(8,10,20,.55)"),t.addColorStop(.55,"rgba(8,10,20,.25)"),t.addColorStop(1,"rgba(8,10,20,0)"),e.fillStyle=t,e.fillRect(0,0,256,256);let n=new kn(i),s=new We(new Js(2.2,1.6),new Vt({map:n,transparent:!0,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.002;let r=new We(new xs(.62,.66,128),new Vt({color:14283659,transparent:!0,opacity:.9,depthWrite:!1,side:nn}));r.rotation.x=-Math.PI/2,r.position.y=.004,r.scale.set(1,.72,1);let a=new We(new xs(.55,.9,128),new Vt({color:14283659,transparent:!0,opacity:.12,depthWrite:!1,side:nn}));a.rotation.x=-Math.PI/2,a.position.y=.003,a.scale.set(1,.72,1),is.add(s,a,r),be.add(is)}var pa=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(236,244,255,.9)"),t.addColorStop(1,"rgba(228,239,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.fillStyle="rgba(255,255,255,.95)",e.beginPath();for(let s=0;s<8;s++){let r=s*Math.PI/4,a=s%2?12:40;e.lineTo(64+Math.cos(r)*a,64+Math.sin(r)*a)}e.closePath(),e.fill();let n=new kn(i);return n.colorSpace=xt,n})(),yo=1024,Gn={pos:new Float32Array(yo*3),col:new Float32Array(yo*3),size:new Float32Array(yo),alpha:new Float32Array(yo)},Rs=new Pt;Rs.setAttribute("position",new vt(Gn.pos,3).setUsage(Qr));Rs.setAttribute("color",new vt(Gn.col,3).setUsage(Qr));Rs.setAttribute("size",new vt(Gn.size,1).setUsage(Qr));Rs.setAttribute("alpha",new vt(Gn.alpha,1).setUsage(Qr));Rs.setDrawRange(0,0);var _f=new vn({uniforms:{map:{value:null},pxPerUnit:{value:1e3}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vCol; varying float vA;
    uniform float pxPerUnit;
    void main() { vCol = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * pxPerUnit / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D map; varying vec3 vCol; varying float vA;
    void main() { vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vCol * t.rgb, t.a * vA);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    }`,transparent:!0,depthWrite:!1,blending:sn});_f.uniforms.map.value=pa;var vf=new bs(Rs,_f);vf.frustumCulled=!1;vf.renderOrder=5;be.add(vf);var Ai=[],cf=[],wl=null;function St(i,e,t,n,s,r){if(Ai.length>=yo)return cf[0]||{position:new R,material:{color:new Se},userData:{}};let a=cf.pop()||{position:new R,material:{color:new Se,opacity:1},userData:{}};return a.position.set(i,e,t),a.material.color.setRGB(1,1,1),a.material.opacity=1,a.size=s,a.userData.v=n,a.userData.life=r,a.userData.t=0,a.userData.fin=0,Ai.push(a),a}var zn=(i,e)=>{let t=i*e*60;return Math.floor(t)+(Math.random()<t%1?1:0)},ca=(i,e)=>1-Math.pow(1-i,e*60);function vv(i){let e=0;for(let t=Ai.length-1;t>=0;t--){let n=Ai[t],s=n.userData;s.t+=i,n.position.addScaledVector(s.v,i),s.t>s.life&&(Ai[t]=Ai[Ai.length-1],Ai.pop(),cf.push(n))}for(let t of Ai){let n=t.userData,s=e*3;Gn.pos[s]=t.position.x,Gn.pos[s+1]=t.position.y,Gn.pos[s+2]=t.position.z,Gn.col[s]=t.material.color.r,Gn.col[s+1]=t.material.color.g,Gn.col[s+2]=t.material.color.b,Gn.size[e]=t.size,Gn.alpha[e]=Math.max(0,1-n.t/n.life)*(n.fin?Math.min(1,n.t/n.fin):1),e++}if(Rs.setDrawRange(0,e),e)for(let t of["position","color","size","alpha"])Rs.attributes[t].needsUpdate=!0}var Wn,B,Li;var ur,Kn,En={},In=null,qt={v:1.3,target:1.3,min:.75,max:2.2,pinch:0},we={mode:!1,pos:null,yaw:null,ball:null,sparks:[]},re={on:!1,v:new R,vy:0,bounds:{x:1.55,zMin:-1.7,zMax:1.35},grab:null,chase:!1},lf=.072,L1=new fn(new R(0,1,0),0),la=new qr,nt={pupils:[],glints:[],irises:[],scleras:[],pivots:[],gaze:new Pe,target:new Pe,sacc:0};function Mv(){for(let i of["L","R"]){let e=nt.irises.find(b=>b.side===i);if(!e)continue;let t=e.node.geometry.attributes.position,n=[],s=[];for(let b=0;b<t.count;b+=3){let m=t.getX(b),d=t.getY(b),_=t.getZ(b);n.push([2*m,2*d,2*_,1]),s.push(m*m+d*d+_*_)}let r=4,a=Array.from({length:r},()=>new Array(r).fill(0)),o=new Array(r).fill(0);for(let b=0;b<n.length;b++)for(let m=0;m<r;m++){o[m]+=n[b][m]*s[b];for(let d=0;d<r;d++)a[m][d]+=n[b][m]*n[b][d]}for(let b=0;b<r;b++){let m=b;for(let d=b+1;d<r;d++)Math.abs(a[d][b])>Math.abs(a[m][b])&&(m=d);if([a[b],a[m]]=[a[m],a[b]],[o[b],o[m]]=[o[m],o[b]],!(Math.abs(a[b][b])<1e-12))for(let d=0;d<r;d++){if(d===b)continue;let _=a[d][b]/a[b][b];for(let E=b;E<r;E++)a[d][E]-=_*a[b][E];o[d]-=_*o[b]}}let c=o[0]/a[0][0],l=o[1]/a[1][1],h=o[2]/a[2][2],u=new R(c,l,h),f=e.node.localToWorld(u.clone()),p=e.node.parent,g=new Xt;g.name="EYEBALL_"+i,p.add(g),g.position.copy(p.worldToLocal(f.clone()));for(let b of[e,...nt.pupils.filter(m=>m.side===i),...nt.glints.filter(m=>m.side===i)])g.attach(b.node);nt.pivots.push({node:g,side:i})}}var im={L:{px:new R(.87777,.03979,-.47743),py:new R(.05253,-.99853,.01336)},R:{px:new R(.8752,-.04017,.4821),py:new R(-.0598,-.99789,.0254)}},Oe={y:0,x:0,vy:0,dragging:!1,lastX:0,lastY:0,moved:0},li={bones:[],amp:14,speed:2,gains:[.292,.364,.436,.508,.58],lags:[.55,1.1,1.65,2.2,2.75]},sm=new At,rm=new At,am=new At,om=new At,Sv=new R(1,0,0),Ev=new R(0,0,1),cm=new io,lm=new _n,hm=new At,um={},Il=new Map,wv=new At;function Tv(){for(let[i,e]of Il)i.quaternion.multiply(wv.copy(e).invert());Il.clear()}function ha(i,e){i.quaternion.multiply(e);let t=Il.get(i);t?t.multiply(e):Il.set(i,e.clone())}function Lt(i,e,t,n){let s=um[i]||(um[i]=Wn&&Wn.getObjectByName(i));s&&(lm.set(e,t,n),hm.setFromEuler(lm),ha(s,hm))}var Av=.43;function Rv(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}function Cv(i){i.traverse(e=>{if(!e.isMesh)return;e.frustumCulled=!1;let t=e.material;if(!t)return;let n=(t.name||"").replace(/\.\d+$/,"");if(n==="WEB_body"){let s=new Kt({map:t.map,color:15000046,roughness:.36,metalness:0,emissive:16777215,emissiveMap:t.emissiveMap,emissiveIntensity:1,clearcoat:.45,clearcoatRoughness:.25,iridescence:.35,iridescenceIOR:1.5,iridescenceThicknessRange:[150,400],sheen:.15,sheenRoughness:.5,sheenColor:new Se(14270463),envMapIntensity:.9});s.onBeforeCompile=r=>{r.uniforms.uTime={value:0},s.userData.uni=r.uniforms,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRest;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRest = position;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
          varying vec3 vRest; uniform float uTime;
          float hsh(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
          float vnoise(vec3 p){ vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
            return mix(mix(mix(hsh(i), hsh(i+vec3(1,0,0)), f.x), mix(hsh(i+vec3(0,1,0)), hsh(i+vec3(1,1,0)), f.x), f.y),
                       mix(mix(hsh(i+vec3(0,0,1)), hsh(i+vec3(1,0,1)), f.x), mix(hsh(i+vec3(0,1,1)), hsh(i+vec3(1,1,1)), f.x), f.y), f.z); }
          float fbm(vec3 p){ float a = 0.0, w = 0.5; for (int k = 0; k < 4; k++) { a += w * vnoise(p); p *= 2.0; w *= 0.5; } return a; }`).replace("#include <emissivemap_fragment>",`#ifdef USE_EMISSIVEMAP
             // baked Blender emission (sRGB texture, decoded to linear here) gives the exact patch layout from the OPAL shader
             vec4 ec = texture2D( emissiveMap, vEmissiveMapUv );
             float lum = dot(ec.rgb, vec3(0.299, 0.587, 0.114));
             float spark = smoothstep(0.66, 0.9, lum);
             // patch mask from the baked luminance (linear: body median ~0.34, patch cores ~0.5-0.6), fine detail from live noise
             vec3 P = vRest * 2.3;
             float n2 = fbm(P * 2.6 + vec3(7.1, 3.3, uTime * 0.03));
             float pb = smoothstep(0.23, 0.50, lum + (n2 - 0.5) * 0.12);
             float mask = pb * (1.0 - spark);
             // patch colours: violet -> pink with a blue touch on the rims (restored at the user's request)
             float t = clamp((lum - 0.30) / 0.30 + (n2 - 0.5) * 0.5, 0.0, 1.0);
             vec3 ramp = t < 0.5 ? mix(vec3(0.42, 0.45, 1.0), vec3(0.62, 0.35, 1.0), t / 0.5) : mix(vec3(0.62, 0.35, 1.0), vec3(1.0, 0.48, 0.86), (t - 0.5) / 0.5);
             // patches replace the white albedo (so bright lights cannot wash them out) and glow a little
             diffuseColor.rgb = mix(diffuseColor.rgb, ramp * 0.85, mask * 0.95);
             totalEmissiveRadiance = ramp * mask * 0.6 + vec3(1.0) * spark * 1.3;
           #endif`)},s.name=n,e.material=s}else n==="WEB_lid"?(e.material=new Kt({color:15262962,roughness:.34,metalness:0,clearcoat:.45,clearcoatRoughness:.25,sheen:.2,sheenRoughness:.5,sheenColor:new Se(14270463),envMapIntensity:.9}),e.material.name=n,e.renderOrder=2):n==="WEB_mouth"?e.material=new mt({vertexColors:!0,roughness:.55,metalness:0}):n==="WEB_lens"?(e.material=new Kt({color:16777215,transparent:!0,opacity:.14,roughness:.05,metalness:0,clearcoat:1,depthWrite:!1}),e.renderOrder=3):n==="WEB_glint"?(e.material=new Vt({color:16777215}),e.renderOrder=4):n==="WEB_iris"?(t.emissiveIntensity=.35,t.roughness=.4):n==="WEB_sclera"?t.emissiveIntensity=.5:n==="WEB_ink"?(e.material=new mt({color:1975606,roughness:.85}),e.renderOrder=2):n==="WEB_teeth"&&(t.color.set(16250367),t.roughness=.3)})}function Pv(i,e){let{a:t,b:n,loop:s}=fi[e],r=ys.subclip(i,e,t,n,ns),a=Li.clipAction(r);return a.setLoop(s?po:fo,1/0),a.clampWhenFinished=!s,a}function st(i,{fade:e=.25,onDone:t,speed:n=1}={}){let s=En[i];if(s&&(In&&In!==s&&In.fadeOut(e),s.reset().setEffectiveTimeScale(n).setEffectiveWeight(1).fadeIn(e).play(),In=s,t)){let r=a=>{a.action===s&&(Li.removeEventListener("finished",r),t())};Li.addEventListener("finished",r)}}async function Iv(){let i=()=>fetch("assets/ori.glb"+(window.ORI_GLB_V?"?v="+window.ORI_GLB_V:"")).then(t=>{if(!t.ok)throw new Error("ori.glb "+t.status);return t.arrayBuffer()}),e=window.ORI_GLB?Rv(window.ORI_GLB):await(window.ORI_GLB_P||i()).catch(i);return new Promise((t,n)=>{let s=new Ml;s.setMeshoptDecoder(tm),s.parse(e,"",r=>{Wn=r.scene,Wn.scale.setScalar(Av),Cv(Wn),Wn.traverse(h=>{h.isBone&&(h.name==="head"&&(ur=h),h.name==="jaw"&&(Kn=h),(h.name==="lidL"||h.name==="lidR")&&It.bones.push(h),/^tail[1-5]$/.test(h.name)&&(li.bones[+h.name[4]-1]=h)),h.isMesh&&h.morphTargetDictionary&&h.morphTargetDictionary.Flat!==void 0&&of.push(h);let u=h.name||"";(u==="LID_L"||u==="LID_R")&&(It.groups.push(h),h.visible=!1),/^PUPIL_[LR]/.test(u)&&nt.pupils.push({node:h,side:u[6],base:h.position.clone()}),/^GLINT_[LR]/.test(u)&&nt.glints.push({node:h,side:u[6],base:h.position.clone()}),/^IRIS_[LR]/.test(u)&&h.isMesh&&nt.irises.push({node:h,side:u[5],base:h.position.clone()}),/^SCLERA_[LR]/.test(u)&&h.isMesh&&nt.scleras.push({node:h,side:u[7]})}),Mv(),B=new Xt,B.add(Wn),be.add(B);let o=new pn().setFromObject(Wn).getCenter(new R);Wn.position.set(-o.x,0,-o.z),Li=new so(Wn);let c=r.animations[0];for(let h in fi)En[h]=Pv(c,h);let l=(h,u,f)=>{let p=ys.subclip(c,h,u.a,u.b,ns);p.tracks=p.tracks.filter(b=>f.test(b.name));let g=ys.subclip(c,h+"Ref",u.ref,u.ref+1,ns);return g.tracks=g.tracks.filter(b=>f.test(b.name)),ys.makeClipAdditive(p,0,g,ns),Li.clipAction(p,void 0,mo)};Ht.action=l("pant",gv,/^(jaw|tongue[123]|chest|spine|head)\./),Ht.action.setLoop(po,1/0),Ht.action.setEffectiveWeight(0),Ht.action.play(),ss.action=l("catchLick",bv,/^(jaw|tongue[123]|head)\./),ss.action.setLoop(fo,1),ss.action.clampWhenFinished=!1,t()},n)})}var ci={pos:new R(0,.9,4.6),look:new R(0,.75,0),tPos:new R,tLook:new R},Gl={s1:{pos:[0,1,5.3],look:[0,.62,0],model:[0,-.22,0]},s2:{pos:[0,1.1,5.4],look:[0,.85,0],model:[0,.05,0]},s3:{pos:[0,.45,6.8],look:[0,-.3,0],model:[0,-1.14,0]},game:{pos:[0,1.55,7.6],look:[0,1.2,0],model:[0,-.35,0]}},Jn="s1";function xa(i){Jn=i}function Pi(){return(B?B.position.y:0)+lf}var Ll=(()=>{let i=new Date,e=t=>String(t).padStart(2,"0");return`${i.getFullYear()}-${e(i.getMonth()+1)}-${e(i.getDate())}`})(),ma={get(){try{return JSON.parse(localStorage.getItem("ori_star")||"null")}catch{return null}},set(i){try{localStorage.setItem("ori_star",JSON.stringify(i))}catch{}},clear(){try{localStorage.removeItem("ori_star")}catch{}}};function Lv(){let i=window.ORI_PHRASES,e=ma.get()&&ma.get().used||[],t=i.filter(s=>!e.includes(s)),n=t.length?t:i;return n[Math.floor(Math.random()*n.length)]}var zt=!1,Dn=!1;var It={bones:[],groups:[],next:2.5,t:-1,cur:0,squint:0},fm=.001,Dv=1;function Uv(i){if(!It.bones.length)return;let e=0;if(It.t>=0){It.t+=i;let r=.07,a=.03,o=.11;It.t<r?e=It.t/r:It.t<r+a?e=1:It.t<r+a+o?e=1-(It.t-r-a)/o:(e=0,It.t=-1,It.next=2.2+Math.random()*3.6)}else It.next-=i,It.next<=0&&(It.t=0);let t=Dn?.5:0;It.squint+=(t-It.squint)*(1-Math.pow(.02,i)),It.cur=Math.max(e,It.squint);let n=fm+(Dv-fm)*It.cur;for(let r of It.bones)r.scale.set(1,n,n);let s=It.cur>.04;for(let r of It.groups)r.visible=s}var _o=null;function km(){let i=new Xt,e=new Bt(new Ot({map:pa,transparent:!0,depthWrite:!1,blending:sn,color:16777215}));e.scale.setScalar(.5),i.add(e);let t=new Bt(new Ot({map:pa,transparent:!0,depthWrite:!1,blending:sn,color:14283659,opacity:.55}));return t.scale.setScalar(1.1),i.add(t),i.userData={core:e,glow:t,trail:[]},i}function Ku(i){for(let e=0;e<2;e++)St(i.x+(Math.random()-.5)*.08,i.y+(Math.random()-.5)*.08,i.z,new R((Math.random()-.5)*.3,-.25,0),.1+Math.random()*.12,.55).material.color.set(Math.random()<.5?16777215:14283659)}function Fv(){we.ball&&(re.on=!1,re.v.set(0,0,0),re.vy=0,we.ball.parent!==be&&be.attach(we.ball),we.ball.visible=!1)}function Bm(){we.ball&&(we.ball.position.set(B.position.x+.42,Pi(),B.position.z+.5),we.ball.visible=!0)}var ua=new R;function Ln(){if(!Kn)return new R(0,.9,.6);let i=new R(0,.36,.01);return Kn.localToWorld(i),i}var ui=!1;function Hm(){if(!ur)return null;ur.getWorldPosition(ua),ua.z+=.1;let i=ua.clone().project(Dt);return{x:(i.x+1)/2*innerWidth,y:(1-i.y)/2*innerHeight}}var dm=[{name:"\u041A\u043E\u0432\u0448",pts:[[8,14],[21,18],[33,24],[45,31],[48,47],[67,50],[70,33]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,3]]},{name:"\u0421\u0435\u0440\u0434\u0446\u0435",pts:[[50,55],[33,41],[25,25],[36,11],[50,21],[64,11],[75,25],[67,41]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0]]},{name:"\u0420\u0430\u043A\u0435\u0442\u0430",pts:[[50,5],[41,19],[59,19],[41,40],[59,40],[31,55],[69,55]],lines:[[0,1],[0,2],[1,3],[2,4],[3,4],[3,5],[4,6]]},{name:"\u041A\u043E\u043F\u0438\u043B\u043A\u0430",pts:[[20,34],[30,18],[52,14],[72,22],[84,32],[70,46],[40,48]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]]}];function Nv(){let i=0;for(let e of Ll)i=(i*31+e.charCodeAt(0))%9973;return dm[i%dm.length]}var Zn=Je("#game"),Ju=Je("#gSky"),zm=Je("#gBar"),hf=Je("#gHint"),Ov=Je("#gName"),Dl=Je("#gX2"),z={on:!1},pm=new qr,mm=new fn(new R(0,0,1),0),gm=new Pe;function kv(i){let e=rn.clientWidth||innerWidth;return Math.min(i,i*250/(e/2))}function fa(i,e,t=0){mm.constant=-t,gm.set(i,e),pm.setFromCamera(gm,Dt);let n=new R;return pm.ray.intersectPlane(mm,n)?n:new R}function Vm(i,e=0){return fa(i/innerWidth*2-1,0,e).x}function bn(i){let e=i.clone().project(Dt);return{x:(e.x+1)/2*innerWidth,y:(1-e.y)/2*innerHeight}}var Ul=.4;var Gm={from:2.5,series:6,seriesLen:3,fall:.8,hitHalfW:.33,stun:.45,invuln:1.1,rush:3},Wm=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,60,8,64,64,60);t.addColorStop(0,"#46527a"),t.addColorStop(.62,"#303B57"),t.addColorStop(.8,"#FF0032"),t.addColorStop(1,"rgba(255,0,50,0)"),e.fillStyle=t,e.beginPath(),e.arc(64,64,60,0,Math.PI*2),e.fill(),e.fillStyle="rgba(20,26,44,.55)";for(let[s,r,a]of[[48,50,9],[78,70,7],[60,82,5]])e.beginPath(),e.arc(s,r,a,0,Math.PI*2),e.fill();let n=new kn(i);return n.colorSpace=xt,n})();function Bv(i){let e="http://www.w3.org/2000/svg";Ju.innerHTML="",z.lineEls=i.lines.map(([t,n])=>{let s=document.createElementNS(e,"line");return s.setAttribute("class","ln"),s.setAttribute("x1",i.pts[t][0]),s.setAttribute("y1",i.pts[t][1]),s.setAttribute("x2",i.pts[n][0]),s.setAttribute("y2",i.pts[n][1]),Ju.appendChild(s),{a:t,b:n,el:s}}),z.ptEls=i.pts.map(([t,n])=>{let s=document.createElementNS(e,"circle");return s.setAttribute("class","pt"),s.setAttribute("cx",t),s.setAttribute("cy",n),s.setAttribute("r",1.7),Ju.appendChild(s),s}),z.litSet=new Set,z.shown=new Set}var Ri=1;function Xm(){let i=new Set;z.ptEls.forEach((e,t)=>{let n=0;for(let s=0;s<Ri;s++)z.shown.has(Ri*t+s)&&n++;e.classList.toggle("lit",n===Ri),e.classList.toggle("half",n>0&&n<Ri),e.setAttribute("r",n===Ri?2.2:n>0?1.7+.35*n/Ri:1.7),n===Ri&&i.add(t)}),z.litSet=i;for(let e of z.lineEls)e.el.classList.toggle("lit",i.has(e.a)&&i.has(e.b))}function Hv(i){z.shown.add(i),Xm()}function qm(i,e){let t=document.createElement("div");t.className="g-fly",t.style.left=i.x+"px",t.style.top=i.y+"px",document.body.appendChild(t);let n=z.ptEls[Math.floor(e/Ri)].getBoundingClientRect();setTimeout(()=>{t.style.transform=`translate(${n.left+n.width/2-i.x}px, ${n.top+n.height/2-i.y}px) scale(.45)`},20),setTimeout(()=>{t.remove(),z.on&&e<z.lit&&Hv(e)},640)}function zv(i){z.shown.delete(i),Xm();let e=z.ptEls[Math.floor(i/Ri)];e.classList.remove("lost"),e.getBBox(),e.classList.add("lost")}function Fl(i){z.x2=i,Dl.classList.toggle("on",i)}function Nl(i){let e=z.meteors[i];be.remove(e.sp),e.sp.material.dispose(),e.ring&&(be.remove(e.ring),e.ring.geometry.dispose(),e.ring.material.dispose()),z.meteors.splice(i,1)}function Ii(i,e,t){for(let n=0;n<e;n++){let s=Math.random()*Math.PI,r=.5+Math.random()*(t?1.4:.8);St(i.x,i.y,i.z,new R(Math.cos(s)*r,Math.sin(s)*r*.8,0),.05+Math.random()*.05,.5).material.color.set(Math.random()<(t?.6:.3)?16711730:9081773)}}function tt(i,e,t){if(!(!t&&e&&e<=1200&&(z.clock||0)<(z.tipUntil||0))&&(t&&(z.tipUntil=(z.clock||0)+e/1e3),hf.textContent=i,z.sayUntil=(z.clock||0)+(e||0)/1e3,e)){let n=Symbol();z.sayToken=n,setTimeout(()=>{z.sayToken===n&&z.on&&!z.finale&&(hf.textContent=z.baseHint)},e)}}function Vv(i){let e=new Bt(new Ot({map:pa,transparent:!0,depthWrite:!1,blending:sn}));return i==="blue"&&e.material.color.set(10471679),i==="comet"&&e.material.color.set(14283659),e.scale.setScalar(i==="comet"?.36:i==="blue"?.27:i==="white"?.42:.23),be.add(e),z.stars.push(e),e}function Wl(i,e){let t=z.stars[i];if(e)for(let n=0;n<5;n++){let s=Math.random()*Math.PI;St(t.position.x,t.position.y,t.position.z,new R(Math.cos(s)*.6,Math.sin(s)*.5,0),.05,.45).material.color.copy(t.material.color)}t.userData.glow&&(be.remove(t.userData.glow),t.userData.glow.material.dispose()),be.remove(t),t.material.dispose(),z.stars.splice(i,1)}var Ke=(()=>{let i=null,e=null,t=!1;try{t=localStorage.getItem("ori-muted")==="1"}catch{}let n=()=>{if(i)return i.state==="suspended"&&i.resume().catch(()=>{}),!0;let l=window.AudioContext||window.webkitAudioContext;return l?(i=new l,e=i.createGain(),e.gain.value=t?0:.6,e.connect(i.destination),!0):!1},s=()=>i.currentTime,r=(l,{type:h="sine",f1:u=l,t:f=.2,a:p=.005,vol:g=.5,delay:b=0}={})=>{let m=i.createOscillator(),d=i.createGain(),_=s()+b;m.type=h,m.frequency.setValueAtTime(l,_),u!==l&&m.frequency.exponentialRampToValueAtTime(Math.max(20,u),_+f),d.gain.setValueAtTime(1e-4,_),d.gain.exponentialRampToValueAtTime(g,_+p),d.gain.exponentialRampToValueAtTime(1e-4,_+f),m.connect(d),d.connect(e),m.start(_),m.stop(_+f+.02)},a=({t:l=.2,vol:h=.4,f:u=1200,q:f=.7,type:p="lowpass",delay:g=0,f1:b}={})=>{let m=Math.floor(i.sampleRate*l),d=i.createBuffer(1,m,i.sampleRate),_=d.getChannelData(0);for(let w=0;w<m;w++)_[w]=(Math.random()*2-1)*(1-w/m);let E=i.createBufferSource();E.buffer=d;let y=i.createBiquadFilter();y.type=p,y.frequency.value=u,y.Q.value=f,b&&y.frequency.exponentialRampToValueAtTime(b,s()+g+l);let x=i.createGain();x.gain.value=h,E.connect(y),y.connect(x),x.connect(e),E.start(s()+g)};return{play:(l,h)=>{if(!(t||!n()))try{switch(l){case"bounce":{let u=Math.min(1.6,Math.max(.6,h||1));r(180*u,{type:"triangle",f1:330*u,t:.14,vol:.35}),a({t:.05,vol:.12,f:600});break}case"weak":r(150,{type:"triangle",f1:120,t:.16,vol:.28});break;case"perfect":r(880,{t:.12,vol:.25}),r(1320,{t:.18,vol:.22,delay:.06});break;case"star":{let u=Math.min(4,h||1);r(1046*Math.pow(1.06,u),{t:.16,vol:.28}),r(1568*Math.pow(1.06,u),{t:.22,vol:.18,delay:.05});break}case"meteor":a({t:.35,vol:.7,f:400,f1:80}),r(120,{type:"square",f1:40,t:.3,vol:.3});break;case"warn":r(660,{type:"square",t:.07,vol:.12}),r(660,{type:"square",t:.07,vol:.12,delay:.14});break;case"crack":a({t:.18,vol:.5,f:3200,q:1.5,type:"bandpass"}),a({t:.1,vol:.3,f:5e3,type:"highpass",delay:.06});break;case"shatter":a({t:.5,vol:.6,f:2600,q:1.2,type:"bandpass"});for(let u=0;u<5;u++)r(1800+Math.random()*2200,{t:.12,vol:.12,delay:u*.05});break;case"hot":a({t:.5,vol:.45,f:4500,type:"highpass"}),r(500,{type:"sawtooth",f1:900,t:.12,vol:.15});break;case"hole":r(500,{type:"sawtooth",f1:45,t:.7,vol:.3}),a({t:.7,vol:.35,f:900,f1:100});break;case"sling":r(300,{type:"triangle",f1:1400,t:.35,vol:.3});break;case"rescue":r(392,{t:.12,vol:.25}),r(523,{t:.12,vol:.25,delay:.1}),r(659,{t:.22,vol:.25,delay:.2});break;case"lose":r(440,{type:"triangle",f1:110,t:.8,vol:.3});break;case"level":[523,659,784,1046].forEach((u,f)=>r(u,{t:.18,vol:.22,delay:f*.08}));break;case"dash":r(200,{type:"sawtooth",f1:1600,t:.4,vol:.25}),a({t:.3,vol:.2,f:2e3,type:"highpass"});break;case"ring":r(600,{type:"triangle",f1:1500,t:.3,vol:.3});break;case"bonus":r(784,{t:.1,vol:.25}),r(1046,{t:.1,vol:.25,delay:.08}),r(1318,{t:.2,vol:.25,delay:.16});break;case"mult":r(660,{t:.1,vol:.22}),r(880,{t:.16,vol:.22,delay:.07});break;case"day":[523,659,784,1046,1318,1568].forEach((u,f)=>r(u,{t:.5,vol:.2,delay:f*.09})),a({t:1.2,vol:.12,f:6e3,type:"highpass"});break;case"cash":[1046,1318,1568,2093].forEach((u,f)=>r(u,{t:.25,vol:.2,delay:f*.06}));break;case"bubble":r(900,{f1:300,t:.25,vol:.25}),a({t:.15,vol:.2,f:3e3,type:"highpass"});break;case"wind":a({t:1.4,vol:.18,f:700,q:.5,type:"bandpass"});break}}catch{}},ensure:n,setMuted:l=>{t=l;try{localStorage.setItem("ori-muted",l?"1":"0")}catch{}e&&(e.gain.value=l?0:.6)},get muted(){return t}}})(),Ym=Symbol("quit"),Xn=async i=>{let e=z.run;if(await ts(i),z.run!==e)throw Ym},Mf=i=>async(...e)=>{try{return await i(...e)}catch(t){if(t!==Ym)throw t}},Xl=Mf(Gv);async function Gv(){if(Rt.state!=="stand"){ya(Xl);return}if(zt||z.on||!B)return;zt=!0,Dn=!1,ui=!1,Fv(),Dm.style.opacity=0;let i=Nv();z.run=Symbol("run"),z.backScreen=Object.keys(As).find(e=>As[e].classList.contains("show"))||"s1",Object.assign(z,{mode:tM,meteors:[],meteorIn:Gm.from,combo:0,bestCombo:0,x2:!1,stun:0,invuln:0,hits:0,dodged:0,rush:!1,wag:0,slow:0,hero:null,heroRing:null,heroPerfect:!1,newRecord:!1,plats:[],bonuses:[],holes:[],bank:0,best:0,alt:0,vy:0,noShine:!1,dayStar:!1,mouthOff:null}),Dl.textContent="",jm.textContent="",Zn.classList.add("jump"),Fl(!1),Object.assign(z,{on:!0,t:0,dur:25,stars:[],lit:0,need:i.pts.length*Ri,caught:0,snap:0,leap:null,anim:"",finale:!1,lockAnim:!1,helped:!1,targetX:0,airT:0,airDur:1,airK:0,squash:0,lean:0,earA:0,earV:0,baseY:Gl.game.model[1],mouthY0:0,drag:null,tapped:null,tapWindow:!1,playing:!1,hero:null,heroPhase:null,shape:i}),Bv(i),Ov.textContent=i.name,zm.style.transform="scaleX(1)",z.baseHint="\u0412\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u2014 \u041E\u0440\u0438 \u043F\u0440\u044B\u0433\u0430\u0435\u0442 \u043F\u043E \u043F\u043B\u0430\u043D\u0435\u0442\u0430\u043C",Vl(null),xa("game"),qt.target=1.5,Oe.y=Oe.x=Oe.vy=0,yM(),jn(),document.body.classList.add("night","gaming"),Zn.classList.remove("done"),Zn.classList.add("show"),tt(`\u0414\u043E\u043F\u0440\u044B\u0433\u043D\u0438 \u0434\u043E \u0437\u0432\u0435\u0437\u0434\u044B \u0434\u043D\u044F \u2014 \u043E\u043D\u0430 \u043D\u0430 ${fe.goal} \u043C`),st("idle",{fade:.3}),await Xn(1100),z.mouthY0=Ln().y,z.mouthOff=Ln().sub(B.position),tt(z.baseHint),z.playing=!0,xv(),ws(fe.v0)}var Ss={fallV:.72,leapUp:.42,leapH:1,down:.4},Wv=Mf(Xv);async function Xv(){let i=z;if(i.finale)return;i.finale=!0,i.playing=!1,bf.classList.remove("show"),it.recShow=!1;for(let r=i.stars.length-1;r>=0;r--)Wl(r,!0);for(let r=i.meteors.length-1;r>=0;r--)Ii(i.meteors[r].sp.position,5,!1),Nl(r);Fl(!1),i.stun=0,zm.style.transform="scaleX(0)";{u0(),i.rocket=0,i.wind=0,i.slip=0,Fl(!1),is.visible=!0,B.position.set(B.position.x,di().top+.5,0),i.vy=0,i.targetX=0,await Xn(1400);let r=Math.floor(i.best),a=Tf();i.newRecord=r>a,i.newRecord&&iM(r);let o=t0();if(i.newStarRecord=i.bank>o,i.newStarRecord&&nM(i.bank),i.result=i.dayStar?i.dayShine?"":`\u0414\u043E \u0441\u0438\u044F\u043D\u0438\u044F \u043D\u0435 \u0445\u0432\u0430\u0442\u0438\u043B\u043E \u0442\u043E\u0447\u0435\u043A \u0441\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u044F: ${i.need-i.lit}`:`\u0414\u043E \u0437\u0432\u0435\u0437\u0434\u044B \u0434\u043D\u044F \u043D\u0435 \u0445\u0432\u0430\u0442\u0438\u043B\u043E ${da(fe.goal-r)} \u043C`,!i.result&&!i.newRecord&&a-r>0&&a-r<=10&&(i.result=`\u0414\u043E \u0440\u0435\u043A\u043E\u0440\u0434\u0430 \u043D\u0435 \u0445\u0432\u0430\u0442\u0438\u043B\u043E ${a-r} \u043C`),tt(`${i.newRecord?"\u041D\u043E\u0432\u044B\u0439 \u0440\u0435\u043A\u043E\u0440\u0434":"\u0412\u044B\u0441\u043E\u0442\u0430"}: ${da(r)} \u043C \xB7 ${i.newStarRecord?"\u0440\u0435\u043A\u043E\u0440\u0434 \u0437\u0432\u0451\u0437\u0434":"\u0437\u0432\u0451\u0437\u0434\u044B"}: \u2605 ${i.bank}`+(i.result?` \xB7 ${i.result}`:i.newRecord?"":` \xB7 \u0440\u0435\u043A\u043E\u0440\u0434 ${da(Math.max(a,r))} \u043C`)),await Xn(2600),i.dayStar){Zn.classList.add("done"),await Xn(600),await xm(i.dayShine);return}i.noShine=!0}if(i.lit<i.need)for(i.helped=!0,tt("\u041E\u0440\u0438 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0434\u043E\u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u0435");i.lit<i.need;){let r=i.lit++;qm(bn(Ln()),r),await Xn(90)}await Xn(800),Zn.classList.add("done"),tt("\u0421\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u0435 \u0441\u043E\u0431\u0440\u0430\u043D\u043E!"),await Xn(900),i.targetX=0;let e=performance.now();for(;(Math.abs(B.position.x)>.05||B.position.y>i.baseY+.02)&&performance.now()-e<1800;)await Xn(40);await Xn(250),tt("\u0422\u0430\u043F\u043D\u0438\u0442\u0435, \u043A\u043E\u0433\u0434\u0430 \u0437\u0432\u0435\u0437\u0434\u0430 \u0432 \u043A\u043E\u043B\u044C\u0446\u0435!"),i.lockAnim=!0,st("idle",{fade:.3});let t=km();be.add(t),i.hero=t;let n=fa(0,1.1,Ul);t.position.set(.35,n.y,Ul);let s=new We(new xs(.24,.29,48),new Vt({color:14283659,transparent:!0,opacity:.5,depthWrite:!1}));be.add(s),i.heroRing=s,i.tapped=null,await new Promise(r=>{i.heroPhase={stage:"fall",t:0,topY:n.y,done:r}}),await xm(i.heroPerfect&&!i.noShine)}function qv(i){let e=z,t=e.heroPhase,n=e.hero;e.slow>0&&(e.slow-=i);let s=e.slow>0?.3:1;Li.timeScale=s;let r=i*s;t.t+=r;let a=e.baseY,o=Ln(),c=n.userData.core,l=n.userData.glow;if(e.heroRing){let u=a+(e.mouthOff?e.mouthOff.y:o.y-a)+Ss.leapH;e.heroRing.position.set(B.position.x,u,Ul),e.heroRing.material.opacity=t.stage==="fall"?t.perfectNow?.95:.45+.15*Math.sin(t.t*8):Math.max(0,e.heroRing.material.opacity-r*3),e.heroRing.scale.setScalar(t.perfectNow?1.12:1)}let h=()=>{n.position.copy(Ln()),n.position.z+=.18,n.position.y-=.03};if(t.stage==="fall"){n.position.y=t.topY-t.t*Ss.fallV,n.position.x=B.position.x+.35*Math.cos(t.t*1.6)*Math.max(0,1-t.t/2.8),n.rotation.z+=2.4*r,Ku(n.position);let u=e.heroRing.position.y,f=n.position.y-Ss.fallV*Ss.leapUp;t.perfectNow=Math.abs(f-u)<.2,e.tapWindow=t.perfectNow,e.tapped?(e.heroPerfect=t.perfectNow,t.stage="leap",t.t=0,t.s0=n.position.clone(),st("leap",{fade:.06,speed:1.1})):(n.position.y<o.y+.12||t.t>8)&&(e.heroPerfect=!1,t.stage="snap",t.t=0,t.s0=n.position.clone())}else if(t.stage==="leap"){let u=Math.min(1,t.t/Ss.leapUp),f=1-(1-u)*(1-u);B.position.y=a+Ss.leapH*f;let p=t.s0.clone();p.y-=Ss.fallV*t.t;let g=Math.max(0,(u-.35)/.65);n.position.lerpVectors(p,Ln(),g*g*(3-2*g)),Ku(n.position),u>=1&&bm(t)}else if(t.stage==="snap"){let u=Math.min(1,t.t/.3);n.position.lerpVectors(t.s0,Ln(),u),u>=1&&bm(t)}else if(t.stage==="down"){let u=Math.min(1,t.t/Ss.down);B.position.y=a+(t.y0-a)*(1-u*u),h(),u>=1&&(B.position.y=a,t.stage="rear",t.t=0,st("rear",{fade:.18,speed:1.25}),e.wag=3)}else if(t.stage==="rear")h(),l.scale.setScalar(.28+.05*Math.sin(t.t*9)),t.t>(fi.rear.b-fi.rear.a)/ns/1.25*.92&&(t.stage="rise",t.t=0,t.s0=n.position.clone(),st("idle",{fade:.35}));else if(t.stage==="rise"){let u=Math.min(1,t.t/1),f=u*u*(3-2*u),p=fa(0,.62,Ul);n.position.lerpVectors(t.s0,p,f),n.position.x+=Math.sin(u*Math.PI)*.25,c.scale.setScalar(.17+.6*f),l.scale.setScalar(.28+1.4*f),Ku(n.position),u>=1&&(e.heroPhase=null,Li.timeScale=1,t.done())}}function bm(i){let e=z,t=e.hero,n=Ln(),s=e.heroPerfect&&!e.noShine;for(let r=0;r<(s?30:16);r++){let a=Math.random()*Math.PI*2,o=1.4+Math.random()*1.8;St(n.x,n.y,n.z,new R(Math.cos(a)*o,.4+Math.random()*1.6,Math.sin(a)*o*.5),.06+Math.random()*.08,.7).material.color.set(Math.random()<.45?14283659:16777215)}ss.action&&ss.action.reset().setEffectiveWeight(1).play(),t.userData.core.scale.setScalar(.17),t.userData.glow.scale.setScalar(.28),rs.style.opacity=s?.7:.35,setTimeout(()=>{rs.style.opacity=0},160),s?(e.slow=.7,tt("\u0421\u0438\u044F\u044E\u0449\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430!")):tt("\u041F\u043E\u0439\u043C\u0430\u043B!"),i.y0=B.position.y,i.stage=i.stage==="leap"?"down":"rear",i.t=0,i.stage==="rear"&&(st("rear",{fade:.18,speed:1.25}),e.wag=3)}var xm=Mf(Yv);async function Yv(i){let e=z;e.heroRing&&(be.remove(e.heroRing),e.heroRing.geometry.dispose(),e.heroRing=null),Zn.classList.remove("done"),Zn.offsetWidth,Zn.classList.add("done"),be.remove(e.hero),e.hero=null,rs.style.opacity=1,await Xn(240),rs.style.opacity=0;let t=ma.get()||{used:[]},n=t.date===Ll&&t.phrase;_o=n?t.phrase:Lv();let s=!!i||!!(n&&t.shine);ma.set({date:Ll,phrase:_o,used:n?t.used||[]:[...t.used||[],_o].slice(-160),shine:s,constellation:e.shape.name}),Je("#phrase").textContent=_o,Km(s),jm.textContent=s&&!i&&/сияния/.test(e.result||"")?"":e.result||"",await Xn(500),Jm(),As.s3.classList.remove("hidecard"),Je("#showCard").style.display="none",Vl("s3"),xa("s3"),st("pet",{fade:.3}),await Xn(1400),st("idle",{fade:.5}),Bm(),zt=!1}var jm=Je("#gResult");function Km(i){let e=As.s3.querySelector(".card");e.classList.toggle("shine",!!i);let t=e.querySelector(".from");t.textContent=i?"\u041E\u0440\u0438 \u043F\u043E\u0439\u043C\u0430\u043B \u0434\u043B\u044F \u0432\u0430\u0441 \u0441\u0438\u044F\u044E\u0449\u0443\u044E \u0437\u0432\u0435\u0437\u0434\u0443":"\u041E\u0440\u0438 \u043F\u043E\u0439\u043C\u0430\u043B \u0434\u043B\u044F \u0432\u0430\u0441 \u0437\u0432\u0435\u0437\u0434\u0443"}function jv(){let i=z;i.on&&(i.run=Symbol("quit"),i.heroRing&&(be.remove(i.heroRing),i.heroRing.geometry.dispose(),i.heroRing=null),i.hero&&(be.remove(i.hero),i.hero=null),i.heroPhase=null,i.finale=!1,i.slow=0,i.lockAnim=!1,rs.style.opacity=0,Jm(),Vl(i.backScreen||"s1"),xa(i.backScreen==="s3"?"s3":"s1"),st("idle",{fade:.3}),Bm(),zt=!1)}function Jm(){Li.timeScale=1,Zn.classList.remove("jump"),n0(),u0(),is.visible=!0,dr.position.y=0,To.position.y=0;for(let i=z.stars.length-1;i>=0;i--)Wl(i,!1);for(let i=(z.meteors||[]).length-1;i>=0;i--)Nl(i);Fl(!1),z.on=!1,z.playing=!1,Zn.classList.remove("show"),document.body.classList.remove("night","gaming","coach"),qt.target=1.3,hf.textContent="",B.scale.set(1,1,1),B.rotation.x=0,B.rotation.z=0}function Zm(i){let e=z;if(e.heroPhase&&e.hero){qv(i),is.position.set(B.position.x,e.baseY+.005,B.position.z);return}RM(i)}var fe={g:10,v0:6.8,boost:1.75,dash:1.75,levelH:30,goal:150,maxGap:1.95,minGap:1.15,speed:3.6,orbitEvery:[4,5],perfect:.13,introRows:3,minSep:1.1,holeSep:1.45,missDrop:.45,landW:.46,foot:.14,bubble:[18,40],drift:.36,hop:5.2,edge:.78,trailRows:2},es=[{name:"\u041E\u0440\u0431\u0438\u0442\u0430",gap:[1.15,1.4],dx:[1,1.3],ring:.15,move:0,ice:0,orbit:!1,crumble:0,hot:0,hole:0,meteor:0,gust:0,star:.5,bonus:.03},{name:"\u041F\u043E\u044F\u0441 \u0430\u0441\u0442\u0435\u0440\u043E\u0438\u0434\u043E\u0432",gap:[1.3,1.55],dx:[1.3,1.6],ring:.06,move:0,ice:0,orbit:!1,crumble:[.3,.5],hot:0,hole:0,meteor:[8,6],gust:0,star:.45,bonus:.04},{name:"\u041B\u0435\u0434\u044F\u043D\u0430\u044F \u0442\u0443\u043C\u0430\u043D\u043D\u043E\u0441\u0442\u044C",gap:[1.4,1.65],dx:[1.5,1.8],ring:.06,move:[.25,.4],ice:[.25,.45],orbit:!1,crumble:0,hot:0,hole:0,meteor:0,gust:0,star:.45,bonus:.045},{name:"\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0439 \u0432\u0435\u0442\u0435\u0440",gap:[1.45,1.75],dx:[1.6,1.9],ring:.06,move:0,ice:0,orbit:!1,crumble:0,hot:[.3,.5],hole:0,meteor:0,gust:6.5,star:.4,bonus:.05},{name:"\u0427\u0451\u0440\u043D\u044B\u0435 \u0434\u044B\u0440\u044B",gap:[1.5,1.8],dx:[1.6,2],ring:.06,move:0,ice:0,orbit:!0,crumble:0,hot:0,hole:[.3,.45],meteor:0,gust:0,star:.4,bonus:.05},{name:"\u0413\u043B\u0443\u0431\u043E\u043A\u0438\u0439 \u043A\u043E\u0441\u043C\u043E\u0441",gap:[1.55,1.85],dx:[1.8,2],ring:.08,move:.35,ice:.2,orbit:!0,crumble:.3,hot:.25,hole:.15,meteor:5.5,gust:7,star:.35,bonus:.05},{name:"\u041F\u043B\u0430\u043D\u0435\u0442\u0430 \u043F\u0440\u0438\u0448\u0435\u043B\u044C\u0446\u0435\u0432",gap:[1.55,1.85],dx:[1.8,2],ring:.06,move:0,ice:0,orbit:!1,crumble:0,hot:0,hole:0,meteor:0,gust:0,alien:[.35,.55],visit:[.3,.45],star:.4,bonus:.05},{name:"\u041A\u043E\u043B\u044C\u0446\u0430 \u0433\u0438\u0433\u0430\u043D\u0442\u0430",gap:[1.5,1.8],dx:[1.5,1.8],ring:0,move:0,ice:0,orbit:!1,crumble:0,hot:0,hole:0,meteor:0,gust:0,belt:[.4,.6],star:.45,bonus:.05,tip:"\u041E\u0431\u043B\u043E\u043C\u043A\u0438 \u043A\u043E\u043B\u044C\u0446\u0430 \u0443\u0437\u043A\u0438\u0435 \u2014 \u0446\u0435\u043B\u044C\u0441\u044F \u0442\u043E\u0447\u043D\u043E"},{name:"\u0413\u0440\u043E\u0437\u043E\u0432\u0430\u044F \u0442\u0443\u043C\u0430\u043D\u043D\u043E\u0441\u0442\u044C",gap:[1.6,1.9],dx:[1.7,2],ring:0,move:0,ice:0,orbit:!1,crumble:0,hot:0,hole:0,meteor:0,gust:0,bolt:[5,3.6],star:.45,bonus:.05,tip:"\u041E\u0431\u043B\u0430\u043A\u0430 \u043F\u0440\u0443\u0436\u0438\u043D\u044F\u0442 \u2014 \u043F\u043E\u0434\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u044E\u0442 \u0432\u044B\u0448\u0435"}],Vn=(i,e)=>Array.isArray(i)?i[0]+(i[1]-i[0])*e:i,ym=[{name:"\u041C\u0435\u0442\u0435\u043E\u0440\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C",zone:1,meteor:2.8,meteorMin:2.2,crumble:.5,tip:"\u041C\u0435\u0442\u0435\u043E\u0440\u044B \u043B\u0435\u0442\u044F\u0442 \u0432\u0434\u0432\u043E\u0435 \u0447\u0430\u0449\u0435"},{name:"\u041B\u0435\u0434\u044F\u043D\u043E\u0439 \u0432\u0438\u0442\u043E\u043A",zone:2,ice:.75,iceRun:!0,move:.15,tip:"\u041F\u043E\u0447\u0442\u0438 \u0432\u0441\u0435 \u043F\u043B\u0430\u043D\u0435\u0442\u044B \u2014 \u043B\u0451\u0434"},{name:"\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u0431\u0443\u0440\u044F",zone:3,hot:.5,gust:3.2,tip:"\u0412\u0435\u0442\u0435\u0440 \u043F\u043E\u0447\u0442\u0438 \u043D\u0435 \u0441\u0442\u0438\u0445\u0430\u0435\u0442"},{name:"\u041F\u043E\u043B\u0435 \u0447\u0451\u0440\u043D\u044B\u0445 \u0434\u044B\u0440",zone:4,hole:.7,holeField:!0,orbit:!1,tip:"\u0414\u044B\u0440\u044B \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u0448\u0430\u0433\u0443 \u2014 \u043B\u043E\u0432\u0438 \u0433\u0440\u0430\u0432\u0438\u043C\u0430\u043D\u0451\u0432\u0440\u044B"},{name:"\u0417\u0432\u0451\u0437\u0434\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C",zone:0,rest:!0,starRain:!0,gap:[1.3,1.5],dx:[1.3,1.6],bonus:.12,tip:"\u041F\u0435\u0440\u0435\u0434\u044B\u0448\u043A\u0430: \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0432\u0451\u0437\u0434\u044B"}],fr=es.length-1;function Ao(i){if(i<=fr)return es[i];let e=ym[(i-fr-1)%ym.length];return e.def||(e.def={...es[e.zone],gap:es[fr].gap,dx:es[fr].dx,...e})}var Ol=i=>i<=fr?`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${i+1} \xB7 ${es[i].name}`:`\u0412\u0438\u0442\u043E\u043A ${i-fr} \xB7 ${Ao(i).name}`,kl=i=>i<=fr?i:Ao(i).zone,$m=[null,"ring","crumble","meteor","ice","move","hot","gust","hole","orbit",null,null,"alien","visit",null,"belt",null,"bolt"],So=Object.fromEntries($m.map((i,e)=>[i,e/2]).filter(([i])=>i)),_m=new Set(["ring","ice","move","orbit","visit","belt"]),Kv=new Set(["ring","ice","move","orbit","crumble","hot","hole","alien","visit","belt"]),Jv=["ring","crumble","ice","hot","hole",null,"alien",null,null],Sf={ring:"\u041F\u043B\u0430\u043D\u0435\u0442\u0430 \u0441 \u043A\u043E\u043B\u044C\u0446\u043E\u043C \u043F\u043E\u0434\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442 \u043D\u0430\u043C\u043D\u043E\u0433\u043E \u0432\u044B\u0448\u0435",move:"\u041F\u043B\u0430\u043D\u0435\u0442\u0430 \u0434\u0440\u0435\u0439\u0444\u0443\u0435\u0442 \u2014 \u043F\u0440\u044B\u0433\u0430\u0439, \u043A\u043E\u0433\u0434\u0430 \u043E\u043D\u0430 \u043F\u043E\u0434 \u0442\u043E\u0431\u043E\u0439",crumble:"\u041C\u0435\u0442\u0435\u043E\u0440\u0438\u0442 \u0432\u044B\u0434\u0435\u0440\u0436\u0438\u0442 \u043E\u0434\u0438\u043D \u043F\u0440\u044B\u0436\u043E\u043A \u2014 \u0432\u043D\u0443\u0442\u0440\u0438 \u0437\u0432\u0451\u0437\u0434\u044B",ice:"\u041B\u0451\u0434 \u0432\u044B\u0434\u0435\u0440\u0436\u0438\u0442 \u0442\u0440\u0438 \u043F\u0440\u044B\u0436\u043A\u0430, \u043F\u043E\u0442\u043E\u043C \u0440\u0430\u0441\u043A\u043E\u043B\u0435\u0442\u0441\u044F",orbit:"\u041F\u043B\u0430\u043D\u0435\u0442\u0430 \u0445\u043E\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D \u2014 \u0434\u043E\u0436\u0434\u0438\u0441\u044C \u0435\u0451",hot:"\u041A\u0440\u0430\u0441\u043D\u044B\u0439 \u043A\u0430\u0440\u043B\u0438\u043A \u043E\u0431\u0436\u0438\u0433\u0430\u0435\u0442 \u043B\u0430\u043F\u044B \u2014 \u043E\u0431\u0445\u043E\u0434\u0438 \u0435\u0433\u043E",hole:"\u0427\u0451\u0440\u043D\u0430\u044F \u0434\u044B\u0440\u0430 \u0437\u0430\u0442\u044F\u0433\u0438\u0432\u0430\u0435\u0442. \u041F\u0440\u043E\u043B\u0435\u0442\u0438 \u043F\u043E \u043A\u0440\u0430\u044E \u2014 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u0433\u043E\u043D",alien:"\u041F\u043B\u0430\u043D\u0435\u0442\u0430 \u0437\u0430\u043D\u044F\u0442\u0430 \u2014 \u043F\u0440\u0438\u0448\u0435\u043B\u0435\u0446 \u043E\u0442\u043F\u0438\u0445\u043D\u0451\u0442. \u0418\u0449\u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u0443\u044E",visit:"\u041F\u0440\u0438\u0448\u0435\u043B\u0435\u0446 \u043F\u0440\u0438\u043B\u0435\u0442\u0430\u0435\u0442 \u0438 \u0443\u043B\u0435\u0442\u0430\u0435\u0442 \u2014 \u043F\u0440\u044B\u0433\u0430\u0439, \u043F\u043E\u043A\u0430 \u043F\u043B\u0430\u043D\u0435\u0442\u0430 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u0430",belt:"\u041A\u043E\u043B\u044C\u0446\u043E \u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F: \u043E\u0431\u043B\u043E\u043C\u043A\u0438 \u043F\u043B\u044B\u0432\u0443\u0442 \u0432 \u043E\u0434\u043D\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0438 \u043D\u0435\u0441\u0443\u0442 \u041E\u0440\u0438 \u0441 \u0441\u043E\u0431\u043E\u0439"};function vm(i,e,t){let n=z;n.tipped[i]||n.alt<So[i]*fe.levelH||e>t.top-.6||e<t.bot+.8||!(n.clock>(n.sayUntil||0))||(n.tipped[i]=!0,tt(Sf[i],2400,!0))}var Es=(i,e,t,n,s)=>`${i.map(([r,a,o,c,l])=>`radial-gradient(${r}% ${a}% at ${o}% ${c}%,${l},transparent 70%)`).join(",")},radial-gradient(120% 55% at 50% -6%,${e} 0%,transparent 62%),linear-gradient(180deg,${t} 0%,${n} 55%,${s} 100%)`,Ef=[{accent:"#D9F38B",star:"#dfe7ff",bg:null,amb:null},{accent:"#FFC39A",star:"#ffe6d2",bg:Es([[60,34,16,30,"rgba(190,140,110,.22)"],[70,30,86,68,"rgba(150,110,130,.18)"]],"#4f3d42","#2b2430","#1a1721","#0d0b12"),amb:{n:.22,col:[12167066,9274e3],v:[-.45,-.3],s:[.03,.06],life:5}},{accent:"#9FD8FF",star:"#cfeaff",bg:Es([[70,36,82,28,"rgba(90,200,255,.24)"],[70,34,10,64,"rgba(120,150,255,.2)"]],"#2a5f80","#15304a","#0f1f38","#091122"),amb:{n:.4,col:[15136511,10473727],v:[.1,-.5],s:[.025,.05],life:5,sway:.5}},{accent:"#FF9A6B",star:"#ffe0c2",bg:Es([[110,40,50,0,"rgba(255,120,60,.3)"],[60,30,12,72,"rgba(255,60,80,.16)"]],"#8a3d25","#3a1d22","#22131c","#100911"),amb:{n:.35,col:[16757575,16738877],v:[0,.85],s:[.025,.045],life:3.5,sway:.3}},{accent:"#B39CFF",star:"#d9ccff",bg:Es([[70,36,18,26,"rgba(140,90,255,.26)"],[60,30,84,62,"rgba(217,243,139,.07)"]],"#3a2970","#1b1335","#0e0a21","#05040f"),amb:{n:.25,col:[11771135,8217560],v:[0,.22],s:[.03,.05],life:5}},{accent:"#D9F38B",star:"#e8fff4",bg:Es([[70,34,78,30,"rgba(60,200,180,.12)"],[70,34,18,74,"rgba(120,100,255,.12)"]],"#16302f","#0b1317","#070a0f","#020306"),amb:{n:.12,col:[14283659,16777215],v:[0,-.08],s:[.02,.04],life:4}},{accent:"#8CFF9A",star:"#d6ffe0",bg:Es([[70,36,20,28,"rgba(80,255,150,.2)"],[60,30,84,66,"rgba(60,200,220,.16)"]],"#1f5a45","#10302c","#0a1f22","#040d10"),amb:{n:.22,col:[9240474,14283659],v:[0,.3],s:[.025,.045],life:4,sway:.3}},{accent:"#FFD9A0",star:"#fff0d8",bg:Es([[90,34,50,102,"rgba(255,190,110,.2)"],[60,30,86,20,"rgba(150,170,255,.12)"]],"#3a3040","#1b1a2c","#11111f","#07070f"),amb:{n:.4,col:[16777215,16769712],v:[.55,0],s:[.02,.045],life:4,sway:.1}},{accent:"#C7B8FF",star:"#e6dcff",bg:Es([[95,40,28,22,"rgba(150,130,255,.24)"],[95,40,76,70,"rgba(90,110,200,.22)"]],"#3f3d70","#1f2040","#13142b","#080814"),amb:{n:.45,col:[13619455,10133728],v:[-.3,-1.1],s:[.02,.035],life:2.2,sway:.05}}],Mm=[...document.querySelectorAll("#zone i")],Qm=new Se("#dfe7ff"),Eo=-1,Tl=0;function wf(i){if(i===Eo)return;Eo=i;let e=Ef[i],t=Mm[Tl],n=Mm[1-Tl];t&&n&&(e&&e.bg?(n.style.background=e.bg,n.style.opacity=1,t.style.opacity=0,Tl=1-Tl):(t.style.opacity=0,n.style.opacity=0)),document.body.style.setProperty("--zone",e?e.accent:"#D9F38B"),Qm.set(e?e.star:"#dfe7ff"),e||(dr.material.uniforms.uColor.value.set("#dfe7ff"),Al.classList.remove("show"),it.gateShow=!1,uf.className="",it.wind="",gn&&(gn.visible=!1,gn.material.opacity=0))}var gn=null;function Zv(){let i=(t,n)=>t+Math.random()*(n-t),e=pi((t,n)=>{let s=n/2,r=n*.33,a=l=>{t.save(),t.translate(s,s),t.rotate(-.35),t.scale(1,.26);for(let[h,u,f]of[[1.32,9,.5],[1.52,16,.36],[1.76,6,.3]])t.strokeStyle=`rgba(255,226,180,${f})`,t.lineWidth=u*n/512,t.beginPath(),t.arc(0,0,r*h,l?0:Math.PI,l?Math.PI:Math.PI*2),t.stroke();t.restore()};a(!1),t.save(),t.beginPath(),t.arc(s,s,r,0,7),t.clip(),t.translate(s,s),t.rotate(-.35);let o=["#e8c08a","#c9925c","#f0d6a8","#b87a52","#e0b47c","#9a6248","#eccb98","#c48a5a"];for(let l=-r,h=0;l<r;h++){let u=r*i(.1,.26);t.fillStyle=o[h%o.length],t.fillRect(-r,l,2*r,u+1),l+=u}t.rotate(.35);let c=t.createRadialGradient(-r*.45,-r*.45,r*.15,0,0,r*1.1);c.addColorStop(0,"rgba(255,255,255,.14)"),c.addColorStop(.55,"rgba(0,0,0,0)"),c.addColorStop(1,"rgba(8,8,24,.8)"),t.fillStyle=c,t.fillRect(-r,-r,2*r,2*r),t.restore(),a(!0)},512);gn=new Bt(new Ot({map:e,transparent:!0,depthWrite:!1,opacity:0})),gn.scale.setScalar(5.4),gn.renderOrder=-2,gn.visible=!1,be.add(gn)}function $v(i,e){if(Eo===7&&!gn&&Zv(),gn){let r=Eo===7?.62:0;gn.material.opacity+=(r-gn.material.opacity)*Math.min(1,1.2*i),gn.visible=gn.material.opacity>.01,gn.position.set(-1.3,e.bot+(e.top-e.bot)*.22-(z.alt-7*fe.levelH)*.04,-7)}let t=z,n=Ef[Eo];dr.material.uniforms.uColor.value.lerp(Qm,Math.min(1,i));let s=n&&n.amb;if(s)for(let r=0,a=zn(s.n,i);r<a;r++){let o=St((Math.random()*2-1)*(e.xm+1.2),e.bot+Math.random()*(e.top-e.bot+1.5),-1.2+Math.random()*1.7,new R(s.v[0]+(Math.random()-.5)*(s.sway||.15),s.v[1]*(.7+Math.random()*.6),0),s.s[0]+Math.random()*(s.s[1]-s.s[0]),s.life*(.7+Math.random()*.6));o.material.color.set(s.col[Math.random()<.5?0:1]),o.userData.fin=.8}}var Al=Je("#gGate"),Qv=Je("#gGate span"),uf=Je("#gWind"),e0=Je("#gLvl");function eM(){let i=z,e=!1;for(let t of[i.level+1,i.level]){if(t<1)continue;let n=Math.round(bn(ua.set(0,i.baseY+t*fe.levelH-i.scrolled,0)).y);if(!(n<300||n>innerHeight-100)){e=!0,n!==it.gateY&&(it.gateY=n,Al.style.transform=`translate(-50%, ${n}px)`),t!==it.gateN&&(it.gateN=t,Qv.textContent=Ol(t),Al.style.color=Ef[kl(t)].accent);break}}e!==it.gateShow&&(it.gateShow=e,Al.classList.toggle("show",e))}var tM="jump";function Tf(){try{return+localStorage.getItem("ori-record-jump")||0}catch{return 0}}function t0(){try{return+localStorage.getItem("ori-record-stars")||0}catch{return 0}}function nM(i){try{localStorage.setItem("ori-record-stars",String(i))}catch{}}function iM(i){try{localStorage.setItem("ori-record-jump",String(i))}catch{}}var da=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g," ");function n0(){let i=Tf(),e=t0();document.querySelectorAll(".g-rec").forEach(t=>{t.textContent=i>0?`${da(i)} \u043C${e>0?" \xB7 \u2605 "+e:""}`:""}),document.querySelectorAll(".g-recchip").forEach(t=>{t.style.display=i>0?"":"none"})}n0();var Zu=Je("#gScore"),D1=Je("#gAlt"),sM=Je("#gAltFill"),rM=Je("#gAltMe"),$u=Je("#gAltStar");function jn(){if(!Zu)return;if(z.mode!=="jump"){Zu.innerHTML=it.html="";return}let i=`${da(Math.floor(z.best||0))} \u043C<span>\u2605 ${z.bank}${z.bubble?' \xB7 <i class="bub"></i>':""}${z.hop?' \xB7 <b class="hop">\u2191 \u043F\u043E\u0434\u0441\u043A\u043E\u043A</b>':""}</span>`;i!==it.html&&(it.html=i,Zu.innerHTML=i);let e=z.need?z.lit>=z.need?"\u2713":`${z.lit}/${z.need}`:"";e!==it.cnt&&(it.cnt=e,Sm.textContent=e,Sm.classList.toggle("full",e==="\u2713"));let t=z.dayStar?Math.floor(Math.max(0,z.alt||0)/fe.goal)*fe.goal:0,n=Ee.clamp(((z.alt||0)-t)/fe.goal,0,1),s=t?n:Ee.clamp((z.best||0)/fe.goal,0,1),r=t?String(t+fe.goal):"\u2605";r!==it.lab&&(it.lab=r,$u.textContent=r,$u.classList.toggle("num",!!t));let a=`scaleY(${s.toFixed(3)})`,o=`${(n*100).toFixed(1)}%`;a!==it.fill&&(it.fill=a,sM.style.transform=a),o!==it.me&&(it.me=o,rM.style.bottom=o),!!z.dayStar!==it.star&&(it.star=!!z.dayStar,$u.classList.toggle("got",it.star))}var it={html:"",fill:"",me:"",star:null,cnt:null,lab:"\u2605",gateY:null,gateN:null,gateShow:!1,wind:""},Sm=Je("#gCount");function Qi(){let i=z,e=i.series;Dl.textContent=e>=3?`\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E \xD7${e} \xB7 \u0437\u0432\u0451\u0437\u0434\u044B \xD72`:e>=1?`\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E \xD7${e}`:"",Dl.classList.toggle("on",e>=1)}function Yn(i,e,t){let n=document.createElement("div");n.className="g-pop"+(t?" bad":""),n.textContent=i,n.style.left=Math.max(20+i.length*5.5,Math.min(innerWidth-20-i.length*5.5,e.x))+"px",n.style.top=e.y+"px",document.body.appendChild(n),requestAnimationFrame(()=>n.classList.add("go")),setTimeout(()=>n.remove(),900)}function Em(i,e){let t=document.createElement("canvas");t.width=256,t.height=128;let n=t.getContext("2d");n.fillStyle=i,n.fillRect(0,0,256,128);for(let r=0;r<7;r++){n.fillStyle=r%2?i:e,n.globalAlpha=.35+Math.random()*.3;let a=10+r*17+Math.random()*6;n.fillRect(0,a,256,5+Math.random()*9)}n.globalAlpha=.28,n.fillStyle=e;for(let r=0;r<9;r++)n.beginPath(),n.arc(Math.random()*256,20+Math.random()*88,4+Math.random()*9,0,Math.PI*2),n.fill();let s=new kn(t);return s.colorSpace=xt,s.wrapS=ri,s}function wm(i){let e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d");if(t.fillStyle=i?"#000":"#303B57",t.fillRect(0,0,256,128),!i){t.fillStyle="rgba(20,26,44,.6)";for(let s=0;s<14;s++)t.beginPath(),t.arc(Math.random()*256,Math.random()*128,3+Math.random()*8,0,Math.PI*2),t.fill()}t.strokeStyle=i?"#FF0032":"#5a1020",t.lineWidth=i?2.2:3,t.lineCap="round";for(let s=0;s<9;s++){let r=Math.random()*256,a=Math.random()*128;t.beginPath(),t.moveTo(r,a);for(let o=0;o<5;o++)r+=(Math.random()-.5)*50,a+=(Math.random()-.5)*30,t.lineTo(r,a);t.stroke()}let n=new kn(e);return n.colorSpace=xt,n}function pi(i,e=128){let t=document.createElement("canvas");t.width=t.height=e,i(t.getContext("2d"),e);let n=new kn(t);return n.colorSpace=xt,n}var i0=pi((i,e)=>{let t=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,250,220,.55)"),t.addColorStop(.4,"rgba(255,240,180,.18)"),t.addColorStop(1,"rgba(255,240,180,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)});function Tm(i){return pi((e,t)=>{e.fillStyle="#000",e.fillRect(0,0,t,t),e.strokeStyle="#fff",e.lineCap="round";for(let n=0;n<i*5;n++){e.lineWidth=1.5+Math.random()*1.5;let s=t/2+(Math.random()-.5)*t*.4,r=t/2+(Math.random()-.5)*t*.4;e.beginPath(),e.moveTo(s,r);for(let a=0;a<4;a++)s+=(Math.random()-.5)*t*.35,r+=(Math.random()-.5)*t*.35,e.lineTo(s,r);e.stroke()}},256)}var s0=[null,Tm(1),Tm(2)],r0=pi((i,e)=>{let t=i.createRadialGradient(e/2,e/2,e*.12,e/2,e/2,e/2);t.addColorStop(0,"#000"),t.addColorStop(.32,"#05060c"),t.addColorStop(.42,"#7d63d8"),t.addColorStop(.5,"#D9F38B"),t.addColorStop(.62,"rgba(125,99,216,.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.beginPath(),i.arc(e/2,e/2,e/2,0,Math.PI*2),i.fill()}),Af=pi((i,e)=>{let t=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,170,90,.9)"),t.addColorStop(.5,"rgba(255,60,40,.35)"),t.addColorStop(1,"rgba(255,0,50,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)}),a0=pi((i,e)=>{i.strokeStyle="rgba(217,243,139,.9)",i.lineWidth=e*.03,i.beginPath(),i.arc(e/2,e/2,e*.45,0,Math.PI*2),i.stroke();let t=i.createRadialGradient(e*.38,e*.35,0,e/2,e/2,e*.45);t.addColorStop(0,"rgba(255,255,255,.35)"),t.addColorStop(1,"rgba(217,243,139,.08)"),i.fillStyle=t,i.fill()}),aM={rocket(i,e){let t=e/100;i.save(),i.translate(e/2,e/2),i.rotate(Math.PI/4),i.fillStyle="#FFB347",i.beginPath(),i.moveTo(-7*t,20*t),i.quadraticCurveTo(0,46*t,7*t,20*t),i.fill(),i.fillStyle="#FF0032";for(let n of[-1,1])i.beginPath(),i.moveTo(n*9*t,4*t),i.lineTo(n*22*t,25*t),i.lineTo(n*9*t,21*t),i.closePath(),i.fill();i.fillStyle="#FAFAFC",i.beginPath(),i.moveTo(0,-31*t),i.bezierCurveTo(16*t,-14*t,13*t,10*t,10*t,22*t),i.lineTo(-10*t,22*t),i.bezierCurveTo(-13*t,10*t,-16*t,-14*t,0,-31*t),i.fill(),i.fillStyle="#FF0032",i.beginPath(),i.moveTo(0,-31*t),i.bezierCurveTo(6*t,-25*t,9*t,-20*t,10.5*t,-14*t),i.lineTo(-10.5*t,-14*t),i.bezierCurveTo(-9*t,-20*t,-6*t,-25*t,0,-31*t),i.fill(),i.fillStyle="#1D2233",i.beginPath(),i.arc(0,-2*t,5.6*t,0,Math.PI*2),i.fill(),i.fillStyle="#D9F38B",i.beginPath(),i.arc(0,-2*t,3.4*t,0,Math.PI*2),i.fill(),i.restore()},bubble(i,e){let t=e/100;i.fillStyle="rgba(217,243,139,.18)",i.strokeStyle="#D9F38B",i.lineWidth=4*t,i.beginPath(),i.arc(e/2,e/2,22*t,0,Math.PI*2),i.fill(),i.stroke(),i.strokeStyle="#fff",i.lineWidth=3.5*t,i.lineCap="round",i.beginPath(),i.arc(e/2,e/2,14.5*t,Math.PI*1.08,Math.PI*1.45),i.stroke()},magnet(i,e){let t=e/100;i.save(),i.translate(e/2,e/2+3*t),i.lineWidth=13*t,i.lineCap="butt",i.strokeStyle="#FF0032",i.beginPath(),i.moveTo(-15*t,-24*t),i.lineTo(-15*t,3*t),i.arc(0,3*t,15*t,Math.PI,0,!0),i.lineTo(15*t,-24*t),i.stroke(),i.strokeStyle="#FAFAFC",i.beginPath(),i.moveTo(-15*t,-24*t),i.lineTo(-15*t,-13*t),i.moveTo(15*t,-24*t),i.lineTo(15*t,-13*t),i.stroke(),i.restore()}},o0=Object.fromEntries(Object.entries(aM).map(([i,e])=>[i,pi((t,n)=>{t.fillStyle="rgba(29,34,51,.85)",t.beginPath(),t.arc(n/2,n/2,n*.46,0,Math.PI*2),t.fill(),t.strokeStyle="#D9F38B",t.lineWidth=n*.05,t.stroke(),e(t,n)},192)])),ga=.38,qn={planet:new Zs(ga,40,28),rock:new Ka(.42,0),ring:new $s(.62,.045,10,48),belt:new $s(.66,.02,8,48)},Sn={planet:[["#cbb8ff","#9d86e8"],["#ffa3b1","#e0566d"],["#a9d4ff","#5f9be0"],["#b6f0d8","#4fbf98"],["#ffd2a8","#e8935a"],["#e6f7a8","#a9cf4c"],["#ffe6a0","#e0b247"],["#e4efff","#a2b3dc"]].map(([i,e])=>new mt({map:Em(i,e),roughness:.55,metalness:.05,emissive:1843510,emissiveIntensity:.25})),rock:new mt({map:wm(!1),roughness:.95,flatShading:!0,emissive:16777215,emissiveMap:wm(!0),emissiveIntensity:1.2}),ice:new mt({color:12572927,roughness:.15,metalness:.1,transparent:!0,opacity:.82,emissive:7314687,emissiveIntensity:.25}),hot:new mt({map:Em("#ff7a3d","#e0263a"),emissive:16730652,emissiveIntensity:.9,roughness:.5}),lime:new mt({color:14283659,emissive:14283659,emissiveIntensity:.55,roughness:.4}),belt:new mt({color:16448252,roughness:.5,transparent:!0,opacity:.6})};function di(){let i=fa(0,1,0).y,e=fa(0,-1,0).y,t=Math.abs(fa(kv(.82),0,0).x)-.35;return{top:i,bot:e,xm:t}}function Cs(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new kn(n);return s.colorSpace=xt,s.wrapS=ri,s}var j=(i,e)=>i+Math.random()*(e-i);function Qu(i,e,t){return new mt({map:Cs(256,128,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r);for(let a=0;a<60;a++)n.globalAlpha=j(.08,.2),n.fillStyle=Math.random()<.5?e:t,n.beginPath(),n.ellipse(j(0,s),j(0,r),j(6,26),j(4,14),j(0,3),0,7),n.fill();for(let a=0;a<12;a++){let o=j(0,s),c=j(16,r-16),l=j(4,12);n.globalAlpha=.55,n.fillStyle=e,n.beginPath(),n.arc(o,c,l,0,7),n.fill(),n.globalAlpha=.5,n.strokeStyle=t,n.lineWidth=1.5,n.beginPath(),n.arc(o,c,l,Math.PI*.9,Math.PI*1.9),n.stroke()}}),roughness:.95,metalness:0,flatShading:!0,emissive:2760736,emissiveIntensity:.4})}function ef(i,e){return new mt({map:Cs(256,128,(t,n,s)=>{let r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,i),r.addColorStop(.5,e),r.addColorStop(1,i),t.fillStyle=r,t.fillRect(0,0,n,s),t.fillStyle="rgba(30,70,150,.38)";for(let a=0;a<9;a++)t.beginPath(),t.ellipse(j(0,n),j(38,s-38),j(10,28),j(3,7),0,0,7),t.fill();t.strokeStyle="rgba(255,255,255,.8)",t.lineWidth=1.2;for(let a=0;a<14;a++){let o=j(0,n),c=j(30,s-30);t.beginPath(),t.moveTo(o,c);for(let l=0;l<4;l++)o+=j(-22,22),c+=j(-12,12),t.lineTo(o,c);t.stroke()}}),roughness:.5,metalness:.05,emissive:2775702,emissiveIntensity:.2})}function tf(i){let e=[];for(let r=0;r<12;r++){let a=j(0,256),o=j(0,128),c=[[a,o]];for(let l=0;l<5;l++)a+=j(-34,34),o+=j(-20,20),c.push([a,o]);e.push(c)}let t=(r,a,o)=>{r.strokeStyle=a,r.lineWidth=o,r.lineCap=r.lineJoin="round";for(let c of e)r.beginPath(),c.forEach(([l,h],u)=>u?r.lineTo(l,h):r.moveTo(l,h)),r.stroke()},n=Cs(256,128,(r,a,o)=>{r.fillStyle="#3c2628",r.fillRect(0,0,a,o);for(let c=0;c<40;c++)r.globalAlpha=j(.15,.4),r.fillStyle=Math.random()<.5?"#22151a":"#5a373a",r.beginPath(),r.ellipse(j(0,a),j(0,o),j(8,24),j(5,12),j(0,3),0,7),r.fill();r.globalAlpha=1,t(r,"#7a2a14",5)}),s=Cs(256,128,(r,a,o)=>{r.fillStyle="#0c0606",r.fillRect(0,0,a,o),t(r,i,4.5),t(r,"#ffe2a8",1.5)});return new mt({map:n,emissiveMap:s,emissive:16777215,emissiveIntensity:1.15,roughness:.9})}function nf(i,e,t){let n=[];for(let a=0;a<4;a++)n.push([j(14,114),j(1.5,4)]);let s=Cs(256,128,(a,o,c)=>{a.fillStyle=i,a.fillRect(0,0,o,c);for(let l=0;l<8;l++)a.globalAlpha=j(.3,.6),a.fillStyle=e,a.fillRect(0,j(0,c),o,j(4,14))}),r=Cs(256,128,(a,o,c)=>{a.fillStyle="#0a0716",a.fillRect(0,0,o,c),a.fillStyle=t;for(let[l,h]of n)a.fillRect(0,l,o,h);a.fillStyle="#fff";for(let l=0;l<36;l++)a.fillRect(j(0,o),j(0,c),1.5,1.5)});return new mt({map:s,emissiveMap:r,emissive:16777215,emissiveIntensity:.95,roughness:.4,metalness:.2})}function sf(i,e,t){let n=[];for(let a=0;a<7;a++){let o=j(0,256),c=j(24,104);for(let l=0;l<7;l++)n.push([o+j(-12,12),c+j(-8,8),j(1.2,2.4)])}let s=Cs(256,128,(a,o,c)=>{a.fillStyle=i,a.fillRect(0,0,o,c);for(let l=0;l<46;l++)a.globalAlpha=j(.2,.5),a.fillStyle=Math.random()<.6?e:"#7fd08a",a.beginPath(),a.ellipse(j(0,o),j(0,c),j(8,26),j(5,13),j(0,3),0,7),a.fill();a.globalAlpha=.75,a.fillStyle="#1c6f86";for(let l=0;l<5;l++)a.beginPath(),a.ellipse(j(0,o),j(26,c-26),j(7,15),j(4,7),0,0,7),a.fill()}),r=Cs(256,128,(a,o,c)=>{a.fillStyle="#04120a",a.fillRect(0,0,o,c),a.fillStyle=t;for(let[l,h,u]of n)a.beginPath(),a.arc(l,h,u,0,7),a.fill()});return new mt({map:s,emissiveMap:r,emissive:16777215,emissiveIntensity:1,roughness:.7})}var oM=pi((i,e)=>{let t=e/100;i.lineCap="round",i.strokeStyle="#2f9e4f",i.lineWidth=3*t,i.beginPath(),i.moveTo(50*t,30*t),i.lineTo(50*t,12*t),i.stroke(),i.fillStyle="#eaffb0",i.shadowColor="#d9f38b",i.shadowBlur=8*t,i.beginPath(),i.arc(50*t,10*t,5*t,0,7),i.fill(),i.shadowBlur=0,i.strokeStyle="#35b85a",i.lineWidth=6*t,i.beginPath(),i.moveTo(36*t,72*t),i.lineTo(21*t,60*t),i.moveTo(64*t,72*t),i.lineTo(79*t,60*t),i.stroke(),i.fillStyle="#2a9648",i.beginPath(),i.ellipse(41*t,95*t,8*t,4*t,0,0,7),i.fill(),i.beginPath(),i.ellipse(59*t,95*t,8*t,4*t,0,0,7),i.fill(),i.fillStyle="#35b85a",i.beginPath(),i.ellipse(50*t,78*t,17*t,18*t,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,.2)",i.beginPath(),i.ellipse(50*t,81*t,9*t,10*t,0,0,7),i.fill(),i.fillStyle="#4fd676",i.beginPath(),i.ellipse(50*t,45*t,27*t,21*t,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,.22)",i.beginPath(),i.ellipse(42*t,33*t,10*t,5*t,-.4,0,7),i.fill(),i.fillStyle="#0d1a12";for(let n of[-1,1])i.save(),i.translate((50+n*11)*t,46*t),i.rotate(n*.35),i.beginPath(),i.ellipse(0,0,7*t,10*t,0,0,7),i.fill(),i.restore();i.fillStyle="#fff";for(let n of[-1,1])i.beginPath(),i.arc((50+n*11-2)*t,42*t,2.4*t,0,7),i.fill();i.strokeStyle="#0d1a12",i.lineWidth=2*t,i.beginPath(),i.arc(50*t,57*t,5*t,.15*Math.PI,.85*Math.PI),i.stroke()},192),Bl=.64,vo=ga-.02+Bl*.44,ff=[Sn.planet,[Qu("#7c7078","#3f363c","#b3a59c"),Qu("#86705f","#463a33","#c2a98f"),Qu("#6a6f7c","#353a45","#a6adba")],[ef("#a9d8ff","#4f93d8"),ef("#b4ecf4","#48a8c4"),ef("#b9c6ff","#6478d6")],[tf("#ff7a2a"),tf("#ff5a2a"),tf("#ffa23a")],[nf("#2a1f55","#45308a","#b39cff"),nf("#1f1a48","#3a2a78","#d9f38b"),nf("#33205c","#56308f","#ff8ad8")],null,[sf("#2f8a55","#1d5c3a","#8cff9a"),sf("#3a9a7a","#1f5f55","#d9f38b"),sf("#4a9a45","#2a6230","#aef0ff")],[new mt({color:11847390,roughness:.35,metalness:.2,flatShading:!0,emissive:3691132,emissiveIntensity:.35}),new mt({color:14272168,roughness:.5,metalness:.1,flatShading:!0,emissive:5916208,emissiveIntensity:.35}),new mt({color:15134975,roughness:.2,metalness:.25,flatShading:!0,emissive:4876960,emissiveIntensity:.4})]],df={landW:.5,top:.22,spring:1.16},pf=[14080760,12896498,14868217].map(i=>new mt({color:i,roughness:1,metalness:0,emissive:5656744,emissiveIntensity:.5}));ff.push(pf);var cM=new Zs(1,18,12),lM=pi((i,e)=>{let t=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,.9)"),t.addColorStop(.4,"rgba(255,255,255,.3)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)});function hM(){let i=new Xt,e=pf[Math.floor(Math.random()*pf.length)];for(let[n,s,r,a]of[[0,0,0,.3],[-.3,-.04,0,.23],[.3,-.03,0,.24],[-.15,.06,.06,.22],[.16,.07,-.04,.23],[.02,-.07,.14,.22],[-.44,-.09,.02,.15],[.45,-.08,.02,.15]]){let o=new We(cM,e);o.position.set(n+j(-.03,.03),s*.8+j(-.02,.02),r),o.scale.set(a*j(.95,1.1),a*.78,a),i.add(o)}let t=new Bt(new Ot({map:lM,color:13285631,transparent:!0,depthWrite:!1,blending:sn,opacity:0}));return t.scale.set(1.5,.9,1),t.position.z=.32,i.add(t),i.userData.glow=t,i}var uM=pi((i,e)=>{let t=i.createLinearGradient(0,0,e,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.5,"rgba(255,255,255,.85)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)},64),Am=[0,1,2].map(()=>{let i=document.createElement("canvas");i.width=96,i.height=512;let e=i.getContext("2d"),t=[[48,0]];for(let r=28;r<512;r+=28)t.push([48+j(-30,30),r+j(-8,8)]);t.push([48+j(-10,10),512]);let n=(r,a)=>{e.strokeStyle=r,e.lineWidth=a,e.lineJoin="round",e.beginPath(),t.forEach(([o,c],l)=>l?e.lineTo(o,c):e.moveTo(o,c)),e.stroke()};n("rgba(170,150,255,.35)",18),n("rgba(210,200,255,.7)",8),n("#fff",3);let s=new kn(i);return s.colorSpace=xt,s}),mf={landW:.36,top:.12};qn.shard=(()=>{let i=new Gr(1,2),e=i.attributes.position;for(let t=0;t<e.count;t++){let n=1+.16*Math.sin(e.getX(t)*7.3+e.getZ(t)*4.1)+.1*Math.sin(e.getZ(t)*9.7);e.setXYZ(t,e.getX(t)*.52*n,e.getY(t)*mf.top*(e.getY(t)>0?1:1.5),e.getZ(t)*.32*n)}return i.computeVertexNormals(),i})();qn.asteroid=new Gr(ga*1.04,1);function rf(i){let n=ga,s=[],r=[];for(let o=0;o<=10;o++)for(let c=0;c<=44;c++){let l=c/44*Math.PI*2,h=.93+.2*Math.sin(3*l+i*2.1)+.11*Math.sin(7*l+i*5.3),u=o/10*h,f=n*(1.045+.15*Math.cos(u)**2)*(o===10?.985:1);s.push(f*Math.sin(u)*Math.cos(l),f*Math.cos(u),f*Math.sin(u)*Math.sin(l))}for(let o=0;o<10;o++)for(let c=0;c<44;c++){let l=o*45+c,h=l+44+1;r.push(l,l+1,h,l+1,h+1,h)}let a=new Pt;return a.setAttribute("position",new Mt(s,3)),a.setIndex(r),a.computeVertexNormals(),a}var Rm=[rf(1),rf(2.7),rf(4.4)],fM=new mt({color:16777215,roughness:.75,metalness:0,emissive:12901631,emissiveIntensity:.32,side:nn}),dM=pi((i,e)=>{let t=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(.5,"rgba(255,255,255,0)"),t.addColorStop(.64,"rgba(255,255,255,.85)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)},256),pM=[[12570879,.3],[16759178,.28],[10478847,.45],[16738858,.8],[11111423,.75],[11111423,0],[8257440,.6],[16769712,0],[13089023,0]].map(([i,e])=>new Ot({map:dM,color:i,opacity:e,transparent:!0,depthWrite:!1,blending:sn}));function wo(i,e,t){let n=new Xt,s;if(i==="crumble")s=new We(qn.rock,Sn.rock),s.scale.setScalar(.9),s.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3);else if(i==="ice")s=new We(qn.planet,Sn.ice.clone());else if(i==="ground")s=new pt;else if(i==="hot"){s=new We(qn.planet,Sn.hot);let a=new Bt(new Ot({map:Af,transparent:!0,depthWrite:!1,blending:sn}));a.scale.setScalar(1.15),n.add(a),n.userData.glow=a}else{let a=z.skinZone??0;a===5&&(a=Math.floor(Math.random()*5));let o=i==="rescue"?Sn.lime:ff[a][Math.floor(Math.random()*ff[a].length)],c=a===7&&i!=="rescue",l=a===8&&i!=="rescue";if(l?(s=hM(),n.userData.skin=8,n.userData.flat=!0,n.userData.landW=df.landW,n.userData.top=df.top,n.userData.flick=s.userData.glow):s=new We(c?qn.shard:a===1&&i!=="rescue"?qn.asteroid:qn.planet,o),l||s.rotation.set((Math.random()-.5)*.5,Math.random()*6,(Math.random()-.5)*.4),c)s.rotation.set(j(-.06,.06),j(-.25,.25),j(-.06,.06)),n.userData.skin=7,n.userData.flat=!0,n.userData.landW=mf.landW,n.userData.top=mf.top;else if(!l){if(i!=="rescue"){n.userData.skin=a;let h=new Bt(pM[a]);if(h.scale.setScalar(1.22),h.position.z=-.12,n.add(h),a===2){let u=new We(Rm[Math.floor(Math.random()*Rm.length)],fM);u.rotation.set(j(-.1,.1),j(0,6.28),j(-.1,.1)),n.add(u),n.userData.cap=u}}}if(i==="move"||i==="orbit"){let h=new We(qn.belt,Sn.belt);h.rotation.x=Math.PI/2-.25,n.add(h)}}if(n.add(s),i==="alien"||i==="visit"){let a=new Bt(new Ot({map:oM,transparent:!0,depthWrite:!1}));a.scale.setScalar(Bl),a.position.set(0,vo,.3),n.add(a),n.userData.alien=a}if(i==="orbit"){let a=di().xm+ga,o=[];for(let l=0;l<=40;l++)o.push(new R(-a+l*2*a/40,0,-.1));let c=new _i(new Pt().setFromPoints(o),new Wr({color:16448252,transparent:!0,opacity:.28,dashSize:.12,gapSize:.1}));c.computeLineDistances(),c.position.set(-e,0,0),n.add(c)}if(i==="ring"){let a=new We(qn.ring,Sn.lime);a.rotation.x=Math.PI/2-.35,a.rotation.y=.25,n.add(a)}n.position.set(e,t,i==="ground"?0:-.55),be.add(n);let r={grp:n,body:s,type:i,skin:n.userData.skin??-1,glow:n.userData.glow,cap:n.userData.cap,alien:n.userData.alien,occupied:i==="alien",visitT:Math.random()*4.8,flat:!!n.userData.flat,landW:n.userData.landW??fe.landW,flick:n.userData.flick,x0:e,w:i==="ground"?1.4:.42,top:i==="ground"?0:i==="crumble"?.34:ga-.02,vx:0,alive:!0,gone:0};return i==="move"&&(r.vx=(Math.random()<.5?-1:1)*(.6+Math.random()*.5),r.swing=1.1),(i==="orbit"||i==="belt")&&(r.swing=99),r.flat&&(r.top=n.userData.top),z.plats.push(r),r}function Ro(i){let e=z.plats[i];be.remove(e.grp),z.plats.splice(i,1)}function Rf(i=z.alt){let e=Math.floor(Math.max(0,i)/fe.levelH);return{idx:Math.min(e,es.length-1),extra:Math.max(0,e-(es.length-1)),n:e}}function Ci(i,e,t="white"){let n=Vv("white");n.position.set(i,e,.15),t==="key"&&(n.scale.setScalar(.66),n.material.color.set(14283659));let s=new Bt(new Ot({map:i0,transparent:!0,depthWrite:!1,blending:sn}));return s.position.set(i,e,.1),be.add(s),n.userData={kind:t,spin:(Math.random()-.5)*2,base:n.scale.x,age:Math.random()*6,glow:s},n}function gf(i,e,t=Math.random()<.5?"rocket":"magnet"){let n=new Bt(new Ot({map:o0[t],transparent:!0,depthWrite:!1}));n.scale.setScalar(.5),n.position.set(i,e,.2),be.add(n),z.bonuses.push({sp:n,kind:t,t:Math.random()*6})}function mM(i,e){let t=new Bt(new Ot({map:r0,transparent:!0,depthWrite:!1}));t.scale.setScalar(1.25),t.position.set(i,e,-.05),be.add(t);let n=new We(new xs(.78,.84,56),new Vt({color:14283659,transparent:!0,opacity:0,depthWrite:!1,side:nn}));n.position.set(i,e,-.02),be.add(n);let s={sp:t,ring:n,near:9,used:!1};return z.holes.push(s),s}function Co(i,e,t,n=0){return Math.hypot(Math.max(0,Math.abs(e-i.x0)-n-(i.swing||0)),t-i.grp.position.y)}var ql=i=>i.type!=="ground"&&(i.alive||i.type==="ice");function Hl(i,e,t=0,n=fe.minSep){return z.plats.every(s=>!ql(s)||Co(s,i,e,t)>=n)&&z.holes.every(s=>Math.hypot(Math.max(0,Math.abs(i-s.sp.position.x)-t),e-s.sp.position.y)>=fe.holeSep)}function c0(i,e,t=0){let n=z;for(let s=n.plats.length-1;s>=0;s--){let r=n.plats[s];ql(r)&&r.type!=="rescue"&&Co(r,i,e,t)<fe.minSep&&(Ii(r.grp.position.clone(),8,!1),Ro(s))}for(let s=n.holes.length-1;s>=0;s--){let r=n.holes[s];Math.hypot(Math.max(0,Math.abs(i-r.sp.position.x)-t),e-r.sp.position.y)<fe.holeSep&&(be.remove(r.sp),be.remove(r.ring),n.holes.splice(s,1))}}function Cf(){let i=z,{xm:e}=di(),t=i.nextY-i.baseY+i.scrolled,n=Rf(t),s=Ao(n.n),r=s.rest?0:n.extra,a=Ee.clamp((t-n.n*fe.levelH)/fe.levelH,0,1);i.skinZone=kl(n.n);let o=t/fe.levelH,c=U=>o>=So[U],l=Math.floor(o*2);if(l>i.genStage){i.genStage=l;let U=$m[l]||null,k=Kv.has(U)?U:null;l%2===0?(i.intro=k?[null,k]:[],i.introLeft=fe.introRows):U&&(i.intro=k?[k]:[],i.introLeft=2)}let h=i.introLeft>0;h&&i.introLeft--;let u=i.intro.length?i.intro.shift():null,f=h?s.gap[0]-.1:Vn(s.gap,a)+r*.03;f=Ee.clamp(f*(.92+Math.random()*.16),fe.minGap,fe.maxGap);let p=h?Math.max(.8,s.dx[0]-.2):Vn(s.dx,a),g=!h&&!u&&i.lit<i.need&&!i.keyOut&&t>=i.keyAt,b=g?Jv[kl(n.n)]:null;b==="ring"&&!c("ring")&&(b=null);let m="planet";if(_m.has(u))m=u;else if(b)m=b==="ring"||b==="ice"?b:"planet";else if(!h){let U=Math.random(),k=c("ring")?s.ring:0,X=Vn(s.ice,a),H=c("move")?Vn(s.move,a):0,K=c("visit")?Vn(s.visit||0,a):0,q=c("belt")?Vn(s.belt||0,a):0;m=U<k?"ring":U<k+X?"ice":U<k+X+H?"move":U<k+X+H+K?"visit":U<k+X+H+K+q?"belt":"planet"}m==="visit"&&i.lastType==="visit"&&u!=="visit"&&(m="planet"),m==="belt"&&i.lastType==="belt"&&u!=="belt"&&(m="planet"),m==="ice"&&i.lastType==="ice"&&!s.iceRun&&(m="planet");let d=c("hole")&&!h&&!u&&!b&&!i.holeRecent&&Math.random()<Vn(s.hole,a);d&&m==="move"&&(m="planet");let _=b||d;i.rowN++;let E=s.orbit&&c("orbit");E&&!h&&!g&&i.lastType!=="orbit"&&--i.orbitIn<=0&&(m="orbit",i.orbitIn=fe.orbitEvery[0]+Math.floor(Math.random()*(fe.orbitEvery[1]-fe.orbitEvery[0]+1)));let y=E&&i.orbitIn<=1&&i.introLeft===0,x=i.nextY+f,w=0,A=m==="orbit"||m==="belt"?99:m==="move"?u?.7:1.1:0,C=!1;for(let U=0;U<40&&!C;U++)U&&U%10===0&&(m==="move"&&A>.5?A=.5:m==="move"||m==="orbit"||m==="belt"?(m="planet",A=0):x=Math.min(i.nextY+fe.maxGap,x+.12)),w=m==="orbit"||m==="belt"?(Math.random()*2-1)*e:b==="hole"||b==="hot"||b==="alien"||d?(i.lastX>=0?1:-1)*e*(.8+.2*Math.random()):Ee.clamp(i.lastX+(Math.random()*2-1)*p,-e,e),C=Hl(w,x,A);C||c0(w,x,A);let M=wo(m,w,x);if(m==="move"&&(M.swing=A,M.vx*=u?.75:1+r*.1),m==="belt"){let U=e+.6,k=i.beltDir*(.85+r*.08)*(u?.7:1);M.vx=k,M.wrap=!0;let X=wo("belt",w>0?w-U:w+U,x);X.vx=k,X.wrap=!0}m==="orbit"&&(M.vx=(Math.random()<.5?-1:1)*(1.1+.2*Math.min(n.idx,4)+r*.1)*(u?.7:1)),_m.has(u)&&m!==u&&i.intro.unshift(u);let v=U=>{let k=Math.random()<.5?-1:1,X=w+k*U;if(Math.abs(X)>e){let H=w-k*U;X=Math.abs(H)<=e?H:w>0?-e:e}return X},I=null,W=null;if(m!=="move"&&m!=="orbit"&&m!=="belt"&&!y){let U=null;if(u==="crumble"||u==="hot"||u==="alien")U=u;else if(b==="crumble"||b==="hot"||b==="alien")U=b;else if(!h&&!d){let k=Math.random(),X=Vn(s.crumble,a),H=Vn(s.hot,a),K=Vn(s.alien||0,a);U=k<X?"crumble":k<X+H?"hot":k<X+H+K?"alien":null}if(U)for(let k=0;k<(b?24:8)&&!I;k++){let X=v(1.2+Math.random()*.8),H=x+(Math.random()-.5)*.6;Hl(X,H)&&(I=wo(U,X,H),I.extra=!0)}if(!I&&(u==="crumble"||u==="hot"||u==="alien")&&i.intro.unshift(u),u==="hole"||b==="hole"||d){for(let k=0;k<(_?24:8);k++){let X=v(1.6+Math.random()*.6),H=x+f*(_?.3+Math.random()*.3:.45);if(i.plats.every(K=>!ql(K)||Co(K,X,H)>=fe.holeSep)){let K=W=mM(X,H);u==="hole"&&(K.intro=!0),i.holeRecent=s.holeField?1:2;break}}u==="hole"&&!i.holes.some(k=>k.intro)&&i.intro.unshift("hole")}else i.holeRecent&&i.holeRecent--}if((u==="crumble"||u==="hot"||u==="hole"||u==="alien")&&(m==="move"||m==="orbit"||y)&&i.intro[0]!==u&&i.intro.unshift(u),!g&&(i.rowN<=fe.trailRows||s.starRain))for(let U of[.3,.55,.8])Ci(Ee.lerp(i.lastX,w,U),Ee.lerp(i.nextY,x,U)+.9+Math.sin(Math.PI*U));else if(g){let U=Ee.clamp(w+(w>0?-.9:.9),-e,e),k=x+1.3;m==="ring"?(U=w,k=x+3):m==="ice"&&b==="ice"?(U=w,k=x+2.6):I&&I.type===b?(U=I.grp.position.x,k=I.grp.position.y+(b==="hot"?.95:b==="alien"?1.2:.75)):W&&(U=Ee.clamp(W.sp.position.x+Math.sign(w-W.sp.position.x||1)*.9,-e,e),k=W.sp.position.y),Ci(U,k,"key"),i.keyOut=!0}else u==="crumble"&&I?Ci(I.grp.position.x,I.grp.position.y+.75):Math.random()<s.star&&(I&&I.type==="crumble"&&Math.random()<.55?Ci(I.grp.position.x,x+.75):I&&I.type==="hot"&&n.idx>3&&Math.random()<.4?Ci(I.grp.position.x,x+.85):Ci(Ee.clamp(w+(Math.random()-.5)*1.8,-e,e),x-f*.5+.4));t>=i.bubbleAt&&m!=="orbit"&&!i.bubble&&!i.bonuses.some(U=>U.kind==="bubble")?(gf(Ee.clamp(w+(Math.random()-.5)*.8,-e,e),x+.9,"bubble"),i.bubbleAt=t+fe.bubble[1]*(1+Math.random()*.5)):!h&&Math.random()<s.bonus&&gf(Ee.clamp(w+(Math.random()-.5)*1.4,-e,e),x+.9),i.nextY=x,i.lastX=w,i.lastType=m}function gM(){let i=z,e=di(),t=!i.boltSeen,n=Ee.clamp(B.position.x+j(-.45,.45),-e.xm,e.xm),s=e.top-e.bot+1,r=new Bt(new Ot({map:uM,color:13352447,transparent:!0,depthWrite:!1,blending:sn,opacity:0}));r.scale.set(.85,s,1),r.position.set(n,(e.top+e.bot)/2,.3),be.add(r),t&&(i.boltSeen=!0,tt("\u0421\u0432\u0435\u0442\u044F\u0449\u0438\u0439\u0441\u044F \u0441\u0442\u043E\u043B\u0431 \u2014 \u0442\u0443\u0434\u0430 \u0443\u0434\u0430\u0440\u0438\u0442 \u043C\u043E\u043B\u043D\u0438\u044F. \u0423\u0439\u0434\u0438 \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u0443",2600,!0)),Ke.play("warn"),i.bolts.push({x:n,col:r,warn:t?2:1.15,strike:0,sp:null})}function l0(i){let e=z.bolts[i];be.remove(e.col),e.col.material.dispose(),e.sp&&(be.remove(e.sp),e.sp.material.dispose()),z.bolts.splice(i,1)}function bM(i){let e=z;for(let t=e.bolts.length-1;t>=0;t--){let n=e.bolts[t];if(n.warn>0){if(n.warn-=i,n.col.material.opacity=.34+.26*Math.abs(Math.sin(n.warn*18))+(n.warn<.3?.3:0),n.warn>0)continue;n.strike=.24,n.col.material.color.set(16777215),n.col.material.opacity=.9;let r=new Bt(new Ot({map:Am[Math.floor(Math.random()*Am.length)],transparent:!0,depthWrite:!1,blending:sn}));r.scale.set(1.2,n.col.scale.y,1),r.position.set(n.x,n.col.position.y,.35),be.add(r),n.sp=r,rs.style.opacity=.28,setTimeout(()=>{rs.style.opacity=0},90),Ke.play("shatter");let a=Math.abs(B.position.x-n.x);if(a<.4&&!(e.invuln>0)&&e.rocket<=0)if(e.bubble)Mo("\u043C\u043E\u043B\u043D\u0438\u0438");else{e.vy=Math.min(e.vy,.5),hi(-1/0),e.knock=.45,e.knockV=(B.position.x>=n.x?1:-1)*3.5,e.spinT=.45,e.invuln=1.2,e.hits++,e.series=0,e.dashReady=!1,Qi();try{navigator.vibrate&&navigator.vibrate(80)}catch{}tt("\u041C\u043E\u043B\u043D\u0438\u044F \u0443\u0434\u0430\u0440\u0438\u043B\u0430 \u0432 \u041E\u0440\u0438!",1100),Ke.play("meteor")}else a<.85&&e.rocket<=0&&Pf(bn(new R(B.position.x,B.position.y+1.5,0)));continue}n.strike-=i;let s=Math.max(0,n.strike/.24);n.col.material.opacity=.9*s,n.sp&&(n.sp.material.opacity=s),n.strike<=0&&l0(t)}}function xM(){let i=z,e=di(),t=Math.random()<.5?1:-1,{extra:n}=Rf(),s=e.bot+(e.top-e.bot)*(.45+Math.random()*.4),r=new Bt(new Ot({map:Wm,transparent:!0,depthWrite:!1}));r.scale.setScalar(.38),r.position.set(t>0?-e.xm-1.4:e.xm+1.4,s,.3),r.visible=!1,be.add(r);let a=new Bt(new Ot({map:Af,transparent:!0,depthWrite:!1,blending:sn}));a.material.color.set(16711730),a.scale.setScalar(.6),a.position.set(t>0?-e.xm-.15:e.xm+.15,s,.35),be.add(a),Ke.play("warn");let o=!i.meteorSeen;o&&(i.meteorSeen=!0,tt("\u041A\u0440\u0430\u0441\u043D\u0430\u044F \u0432\u0441\u043F\u044B\u0448\u043A\u0430 \u043D\u0430 \u043A\u0440\u0430\u044E \u2014 \u0441\u0435\u0439\u0447\u0430\u0441 \u043F\u0440\u043E\u043B\u0435\u0442\u0438\u0442 \u043C\u0435\u0442\u0435\u043E\u0440",2400,!0)),i.meteors.push({sp:r,ring:a,t:0,warn:o?1.6:1,vx:t*(1.5+Math.random()*.7+n*.1)*(o?.6:1),vy:-.2,spin:(Math.random()-.5)*4})}function ws(i,e=!0){let t=z;t.vy=i,t.slip=0,t.airT=0,t.airDur=2*i/fe.g,t.earV+=3,e&&st("leap",{fade:.05,speed:i>fe.v0*1.2?1:1.2+Math.random()*.3}),e&&Ke.play(i<fe.v0*.9?"weak":"bounce",i/fe.v0)}function h0(i){let e=z;for(let t of e.plats)t.grp.position.y-=i;for(let t of e.stars)t.position.y-=i,t.userData.glow&&(t.userData.glow.position.y-=i);for(let t of e.meteors)t.sp.position.y-=i,t.ring&&(t.ring.position.y-=i);for(let t of e.bonuses)t.sp.position.y-=i;for(let t of e.holes)t.sp.position.y-=i,t.ring&&(t.ring.position.y-=i);for(let t of Ai)t.position.y-=i;B.position.y-=i,e.nextY-=i,e.takeoffY-=i,e.scrolled+=i,e.dayY-=i,dr.position.y-=i*.03,To.position.y-=i*.08}function yM(){let i=z;Object.assign(i,{plats:[],bonuses:[],holes:[],vy:0,slip:0,alt:0,best:0,scrolled:0,level:0,bank:0,saves:0,series:0,bestSeries:0,bubbleAt:fe.bubble[0]+Math.random()*12,hop:1,nearT:0,tipQ:[],recAt:Tf(),recTip:!1,recPassed:!1,litTip:!1,litDone:!1,result:"",dashReady:!1,face:Math.random()<.5?-1:1,spinT:0,rocket:0,bubble:!1,magnet:0,wind:0,windT:0,gustIn:99,dayStar:!1,dayShine:!1,holeRecent:0,perfects:0,knock:0,knockV:0,scald:0,vx:0,rowN:0,bolts:[],boltIn:2,boltSeen:!1,beltDir:Math.random()<.5?-1:1,orbitIn:4,tipped:{},genStage:0,keyAt:3,keyOut:!1,gustSeen:!1,gustOn:!1,windAmp:2.3,introLeft:0,intro:[],lastType:"planet",meteorSeen:!1,falling:!1,fallT:0}),i.takeoffY=i.baseY,i.nextY=i.baseY,i.lastX=0,i.meteorIn=99,i.dayY=i.baseY+fe.goal,i.dayX=0,i.skinZone=0,wo("ground",0,i.baseY);let e=di();for(;i.nextY<e.top+2;)Cf();let t=km();be.add(t),i.day=t,it.recShow=null,it.recY=null,it.gateY=null,it.gateN=null,wf(0),e0.textContent=Ol(0),i.bubbleSp||(i.bubbleSp=new Bt(new Ot({map:a0,transparent:!0,depthWrite:!1})),i.bubbleSp.scale.setScalar(1.7)),be.add(i.bubbleSp),i.bubbleSp.visible=!1,Qi(),jn()}function u0(){let i=z;wf(-1);for(let e=(i.plats||[]).length-1;e>=0;e--)Ro(e);for(let e=(i.bolts||[]).length-1;e>=0;e--)l0(e);for(let e of i.bonuses||[])be.remove(e.sp);for(let e of i.holes||[])be.remove(e.sp),e.ring&&be.remove(e.ring);i.bonuses=[],i.holes=[],i.day&&(be.remove(i.day),i.day=null),i.bubbleSp&&(i.bubbleSp.visible=!1)}function hi(i){let e=z;e.takeoffY=i,e.falling=!1,e.fallT=0}function _M(i,e){let t=i.top+.02,n=Math.max(0,Math.abs(e)-fe.foot);return Math.sqrt(Math.max(0,t*t-n*n))-.02}function Cm(i){let e=z;try{navigator.vibrate&&navigator.vibrate(90)}catch{}if(e.series=0,e.dashReady=!1,Qi(),!e.bubble){Ke.play("lose"),tt(`${i?i+" ":""}\u0417\u0430\u0431\u0435\u0433 \u043E\u043A\u043E\u043D\u0447\u0435\u043D`,1800),e.playing=!1,Wv();return}e.bubble=!1,e.bubbleSp.visible=!1,e.saves++,jn();let t=di(),n=t.bot+1,s=l=>e.plats.some(h=>h.alive&&(h.type==="hot"||h.type==="crumble"||h.type==="alien")&&Math.abs(h.grp.position.x-l)<1&&h.grp.position.y>n&&h.grp.position.y<n+3.6)||e.holes.some(h=>Math.abs(h.sp.position.x-l)<1.3&&h.sp.position.y>n&&h.sp.position.y<n+4),r=Ee.clamp(B.position.x,-t.xm,t.xm),a=l=>{let h=null;for(let u=-t.xm;u<=t.xm+1e-6;u+=.2)l(u)&&(h===null||Math.abs(u-r)<Math.abs(h-r))&&(h=u);return h},o=a(l=>!s(l)&&Hl(l,n))??a(l=>Hl(l,n));o!==null?r=o:c0(r,n);let c=wo("rescue",r,n);B.position.set(r,c.grp.position.y+c.top,0),hi(B.position.y),B.rotation.z=0,ws(fe.v0*1.15),e.invuln=1.5,Ii(new R(r,c.grp.position.y+.6,.3),12,!1),Yn("\u041F\u0443\u0437\u044B\u0440\u044C!",bn(c.grp.position)),Ke.play("bubble"),Ke.play("rescue"),tt(`${i?i+" ":""}\u041F\u0443\u0437\u044B\u0440\u044C \u043F\u043E\u0434\u0445\u0432\u0430\u0442\u0438\u043B \u041E\u0440\u0438`,1800)}function vM(i){let e=z,t=e.stars[i],n=bn(t.position);ss.action&&ss.action.reset().setEffectiveWeight(1).play();let s=t.userData.kind==="key";Wl(i,!0);let r=s?3:e.series>=3?2:1;if(e.bank+=r,e.wag=s?1.5:.7,e.caught++,!s){Yn(`+${r} \u2605`,n),jn(),Ke.play("star",r);return}e.keyOut=!1,MM(1,n);let a=e.need-e.lit,o=.8*fe.goal/e.need;e.keyAt=e.alt+Ee.clamp((.8*fe.goal-e.alt)/Math.max(1,a),4,o),Yn(`\u0421\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u0435 ${e.lit}/${e.need}`,n),jn(),Ke.play("star",2),Ke.play("perfect")}function MM(i,e){let t=z;for(let n=0;n<i&&t.lit<t.need;n++){let s=t.lit++;qm(e,s)}t.lit<t.need||t.litDone||(t.litDone=!0,Ke.play("level"),t.dayStar&&!t.dayShine?(t.dayShine=!0,Zn.classList.add("done"),tt("\u0421\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u0435 \u0441\u043E\u0431\u0440\u0430\u043D\u043E \u2014 \u0437\u0432\u0435\u0437\u0434\u0430 \u0434\u043D\u044F \u0437\u0430\u0441\u0438\u044F\u043B\u0430!",2200)):t.dayStar||tt("\u0421\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u0435 \u0441\u043E\u0431\u0440\u0430\u043D\u043E! \u0422\u0435\u043F\u0435\u0440\u044C \u2014 \u043A \u0437\u0432\u0435\u0437\u0434\u0435 \u0434\u043D\u044F",1800))}function SM(i){let e=z,t=0;for(;t<i&&e.lit>0;t++)e.lit--,zv(e.lit);return e.lit<e.need&&(e.litDone=!1),t}function Pm(i,e,t=2600){let n=z;n.tipped[i]||(n.tipped[i]=!0,n.tipQ.push([e,t]))}function EM(){let i=z;if(i.tipQ.length&&i.clock>(i.sayUntil||0)){let[e,t]=i.tipQ.shift();tt(e,t,!0)}}function Pf(i){let e=z;e.clock<e.nearT||(e.nearT=e.clock+1.5,e.bank++,Yn("\u041D\u0430 \u0432\u043E\u043B\u043E\u0441\u043A\u0435! +1 \u2605",i),Ke.play("star",1),jn())}function wM(i,e,t){let n=(s,r,a,o,c,l,h=0)=>{for(let u=0;u<s;u++){let f=St(e+j(-.16,.16),t+j(0,.06),.25,new R(a(),o(),0),j(c[0],c[1]),j(l[0],l[1]));f.material.color.set(Array.isArray(r)?r[Math.floor(Math.random()*r.length)]:r),f.userData.fin=h}};if(i.skin===2)n(16,[16777215,14676735],()=>j(-1.5,1.5),()=>j(.3,1.5),[.05,.09],[.35,.6]),n(8,16777215,()=>j(-.5,.5),()=>j(-.35,-.1),[.035,.05],[.9,1.5],.15),i.cap&&(i.capSq=1);else if(i.skin===3)n(14,[16742954,16761418,16730652],()=>j(-1.7,1.7),()=>j(.5,2),[.035,.065],[.3,.55]),n(7,9404552,()=>j(-.45,.45),()=>j(.35,.8),[.1,.17],[.8,1.3],.15);else if(i.skin===1)n(16,[12167066,9274e3,13219490],()=>j(-1.5,1.5),()=>j(0,.45),[.08,.15],[.5,.9],.08),n(5,7301744,()=>j(-1,1),()=>j(.8,1.6),[.04,.06],[.4,.6]),i.spin=(e>i.grp.position.x?-1:1)*j(1.2,2.2);else if(i.skin===4)for(let s=0;s<18;s++){let r=s/18*Math.PI*2;St(e+Math.cos(r)*.12,t+.05+Math.sin(r)*.05,.25,new R(Math.cos(r)*1.5,Math.sin(r)*.6,0),.05,.5).material.color.set(s%3?11771135:14283659)}else i.skin===8?(n(12,[16777215,14080760,13285631],()=>j(-.9,.9),()=>j(.1,.7),[.1,.18],[.6,1],.12),i.sq=1,i.flickT=.5):i.skin===7?(n(12,[16777215,16769712,13623551],()=>j(-1.6,1.6),()=>j(.1,.8),[.03,.06],[.35,.6]),i.dip=1):i.skin===6?n(12,[9240474,14283659,16777215],()=>j(-1.2,1.2),()=>j(.3,1.3),[.04,.07],[.35,.6]):i.skin===0&&n(8,[16777215,14283659],()=>j(-1,1),()=>j(.2,.9),[.03,.05],[.3,.5])}function Im(i,e){let t=z,n=B.position.x-i.grp.position.x;if(B.position.y=e,hi(e),wM(i,B.position.x,e),i.type==="ice")if(i.hp=(i.hp??3)-1,i.hp>0){if(i.body.material.emissiveMap=s0[3-i.hp],i.body.material.emissive.set(16777215),i.body.material.emissiveIntensity=.9,i.body.material.needsUpdate=!0,Ii(new R(B.position.x,e,.25),4,!1),i.hp===2&&!i.bait){i.bait=!0;let a=di().xm;Ci(Ee.clamp(i.grp.position.x+(i.grp.position.x>0?-.85:.85),-a,a),e+.45)}t.tipped.ice?tt(i.hp===2?"\u041B\u0451\u0434 \u0442\u0440\u0435\u0441\u043D\u0443\u043B":"\u041B\u0451\u0434 \u0432\u043E\u0442-\u0432\u043E\u0442 \u0440\u0430\u0441\u043A\u043E\u043B\u0435\u0442\u0441\u044F!",700):(t.tipped.ice=!0,tt(Sf.ice,2400,!0)),Ke.play("crack")}else tt("\u041B\u0451\u0434 \u0440\u0430\u0441\u043A\u043E\u043B\u043E\u043B\u0441\u044F!",800),Ke.play("shatter");if(Math.abs(n)<fe.perfect&&i.type!=="ground"){t.series++,t.perfects++,t.bestSeries=Math.max(t.bestSeries,t.series);let a=!t.hop;a&&(t.hop=1,jn()),Yn(a?"\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E! \u2191 \u043F\u043E\u0434\u0441\u043A\u043E\u043A":"\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E!",bn(new R(B.position.x,e+1.5,0))),Ke.play("perfect"),t.series%5===0&&(t.dashNow=!0)}else i.type!=="ground"&&(t.series=0,Math.abs(n)>i.landW*fe.edge&&i.type!=="rescue"&&Pf(bn(new R(B.position.x,e+1.5,0))));Qi();let r=fe.v0;if(i.type==="ring"&&(r=fe.v0*fe.boost,Ke.play("ring")),i.skin===8&&(r=fe.v0*df.spring),t.squash=1,t.earV+=4,t.dashNow){r=Math.max(r,fe.v0*fe.dash),t.dashNow=!1,t.spinT=.7,tt("5 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u2014 \u0440\u044B\u0432\u043E\u043A!",900),Ke.play("dash");for(let a=0;a<14;a++){let o=Math.random()*Math.PI;St(B.position.x,e,.2,new R(Math.cos(o)*1.4,Math.sin(o)*1.2,0),.06,.5).material.color.set(14283659)}}if(i.type==="ring")for(let a=0;a<12;a++){let o=Math.random()*Math.PI;St(i.grp.position.x,e,.2,new R(Math.cos(o)*1.2,Math.sin(o)*1.5,0),.06,.5).material.color.set(14283659)}return ws(r),i.wrap&&(t.slip=i.vx*.9),i.type==="ice"&&(t.slip=Ee.clamp(t.vx*.35,-1.4,1.4)),Math.abs(t.targetX-B.position.x)<.15&&Math.random()<.4&&(t.face=-(t.face||1)),i.type==="ice"&&i.hp<=0&&(i.alive=!1,i.gone=.001,Ii(new R(i.grp.position.x,e,.25),12,!1)),!0}function TM(){let i=z,e=i.recAt,t=!1;if(e>=5&&!i.recPassed)if(i.best>e)i.recPassed=!0,Yn("\u041D\u043E\u0432\u044B\u0439 \u0440\u0435\u043A\u043E\u0440\u0434!",bn(new R(B.position.x,B.position.y+1.3,0))),Ke.play("level");else{let n=Math.round(bn(ua.set(0,i.baseY+e-i.scrolled,0)).y);n>130&&n<innerHeight-90&&(t=!0,n!==it.recY&&(it.recY=n,bf.style.transform=`translate(-50%, ${n}px)`));let s=Math.ceil(e-i.best);!i.recTip&&s<=5&&(i.recTip=!0,tt(`\u0415\u0449\u0451 ${s} \u043C \u0434\u043E \u0440\u0435\u043A\u043E\u0440\u0434\u0430!`,1600))}t!==it.recShow&&(it.recShow=t,bf.classList.toggle("show",t),t&&(AM.textContent=`\u0420\u0435\u043A\u043E\u0440\u0434 ${da(e)} \u043C`))}var bf=Je("#gRecLine"),AM=Je("#gRecLine span");function Mo(i){let e=z;e.bubble=!1,e.bubbleSp.visible=!1,Ke.play("bubble"),tt(`\u041F\u0443\u0437\u044B\u0440\u044C \u0441\u043F\u0430\u0441 \u043E\u0442 ${i}!`,900),Ii(B.position.clone().add(new R(0,.6,.2)),10,!1)}function RM(i){let e=z,t=di();e.clock=(e.clock||0)+i,e.invuln>0&&(e.invuln-=i),e.wag>0&&(e.wag-=i);let n=Ee.clamp(Ee.clamp(e.targetX,-t.xm-.6,t.xm+.6)+(e.wind||0)*fe.drift,-t.xm,t.xm),s=n-B.position.x,r=B.position.x;if(e.knock>0)e.knock-=i,B.position.x+=e.knockV*i,e.knockV*=Math.max(0,1-4*i);else{let y=e.scald>0?.5:e.falling?.3:1;B.position.x+=Math.sign(s)*Math.min(Math.abs(s),fe.speed*y*i,Math.abs(s)*12*y*i)}e.scald>0&&(e.scald-=i);let a=i>0?(B.position.x-r)/i:0;e.vx=a,e.lean+=(Ee.clamp(-a*.05,-.22,.22)-e.lean)*Math.min(1,6*i),e.airT+=i,e.squash>0&&(e.squash=Math.max(0,e.squash-i/.16));let o=e.playing?Math.sin(Math.PI*e.squash):0,c=e.playing&&e.vy>0?Math.min(1,e.vy/fe.v0)*Math.max(0,1-e.airT/.3):0;B.scale.set(1+.11*o-.05*c,1-.22*o+.11*c,1+.11*o-.05*c),e.playing&&(B.position.x=Ee.clamp(B.position.x+(e.wind+e.slip)*i,-t.xm-.3,t.xm+.3)),Math.abs(s)>.15&&(e.face=Math.sign(s));let l=!e.playing||e.rocket>0?0:(e.face||1)*(Math.abs(s)>.15?.8:.5);if(e.spinT>0)e.spinT-=i,l+=(1-e.spinT/.7)*Math.PI*2*(e.face||1),B.rotation.y=l;else{B.rotation.y=Math.atan2(Math.sin(B.rotation.y),Math.cos(B.rotation.y));let y=l-B.rotation.y;y=Math.atan2(Math.sin(y),Math.cos(y)),B.rotation.y+=y*Math.min(1,7*i)}if(B.rotation.x=0,B.rotation.z=e.playing?e.lean-(e.wind||0)*.085+(e.falling?-(e.face||1)*Math.min(1.1,e.fallT*2.2):0):0,B.position.z+=(0-B.position.z)*ca(.12,i),!e.playing){B.position.y>e.baseY+.001||e.vy>0?(e.vy-=fe.g*i,B.position.y+=e.vy*i,B.position.y<=e.baseY&&(B.position.y=e.baseY,e.vy=0,st("idle",{fade:.2}))):B.position.y<e.baseY-.001&&(B.position.y=Math.min(e.baseY,B.position.y+(e.baseY-B.position.y)*Math.min(1,8*i)+.3*i)),is.position.set(B.position.x,e.baseY+.005,0);return}let h=B.position.clone();if(h.y+=.55,e.clock>7&&Pm("hop","\u0422\u0430\u043F\u043D\u0438 \u0432 \u043F\u043E\u043B\u0451\u0442\u0435 \u2014 \u043F\u043E\u0434\u0441\u043A\u043E\u043A \u0432\u0432\u0435\u0440\u0445. \u0417\u0430\u0440\u044F\u0434 \u0434\u0430\u0451\u0442 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u0437\u0435\u043C\u043B\u0435\u043D\u0438\u0435"),EM(),TM(),eM(),$v(i,t),e.rocket>0){e.rocket-=i,e.vy=9;for(let y=0,x=zn(2,i);y<x;y++)St(B.position.x+(Math.random()-.5)*.2,B.position.y,.2,new R((Math.random()-.5)*.6,-2.5,0),.07+Math.random()*.05,.4).material.color.set(Math.random()<.5?16711730:16757575);e.rocket<=0&&(e.vy=4,hi(-1/0))}let u=B.position.y;if(e.rocket<=0&&(e.vy-=fe.g*(e.falling?1.5:1)*i),B.position.y+=e.vy*i,!e.falling&&e.vy<0&&e.rocket<=0&&B.position.y<e.takeoffY-fe.missDrop&&(e.falling=!0,e.fallT=0,e.series=0,Qi(),tt("\u041F\u0440\u043E\u043C\u0430\u0445!",1e3),Ke.play("weak")),e.falling&&(e.fallT+=i),e.vy<0&&e.rocket<=0&&!e.falling)for(let y of e.plats){if(!y.alive)continue;let x=B.position.x-y.grp.position.x,w=y.type==="ground";if(Math.abs(x)>=(w?y.w+.28:y.landW))continue;let A=y.grp.position.y+(w||y.flat?y.top:_M(y,x));if(!(A<e.takeoffY-fe.missDrop||!w&&A<t.bot+.3)&&u>=A-.02&&B.position.y<=A){if(y.type==="crumble"){Im(y,A),y.alive=!1,y.gone=.001,Ii(new R(y.grp.position.x,A,.2),12,!0);let C=y.grp.position.x;Ci(C,A+1.1),Ci(C-.55,A+.7),Ci(C+.55,A+.7),Math.random()<.25&&gf(C,A+1.7),tt("\u041C\u0435\u0442\u0435\u043E\u0440\u0438\u0442 \u0440\u0430\u0441\u043A\u043E\u043B\u043E\u043B\u0441\u044F \u2014 \u0440\u0443\u0434\u0430!",900),Ke.play("shatter");try{navigator.vibrate&&navigator.vibrate(40)}catch{}break}if(y.type==="hot"&&!e.bubble){if(y.steam>0)continue;B.position.y=A,hi(A),e.series=0,e.dashReady=!1,Qi(),ws(fe.v0*.95),e.squash=1,e.earV+=6,e.slip=(Math.random()<.5?-1:1)*(2.6+Math.random()*1.6),e.scald=.7,y.steam=1.2;for(let C=0;C<12;C++){let M=Math.random()*Math.PI;St(B.position.x,A,.2,new R(Math.cos(M)*1.2,Math.sin(M)*1.2,0),.06,.45).material.color.set(Math.random()<.5?16730652:16757575)}tt("\u041E\u0439, \u0433\u043E\u0440\u044F\u0447\u043E! \u041B\u0430\u043F\u044B \u043E\u0431\u043E\u0436\u0436\u0435\u043D\u044B",900),Ke.play("hot");try{navigator.vibrate&&navigator.vibrate(40)}catch{}break}if(y.type==="hot"&&e.bubble){B.position.y=A,hi(A),Mo("\u0436\u0430\u0440\u0430"),ws(fe.v0);break}if(y.occupied){if(B.position.y=A,hi(A),e.bubble){Mo("\u043F\u0440\u0438\u0448\u0435\u043B\u044C\u0446\u0430"),ws(fe.v0);break}e.series=0,e.dashReady=!1,Qi(),ws(fe.v0*.92),e.squash=1,e.earV+=6,e.slip=(x>=0?1:-1)*j(2.2,3),y.shove=1;for(let C=0;C<10;C++){let M=Math.random()*Math.PI;St(B.position.x,A+.1,.25,new R(Math.cos(M)*1.3,Math.sin(M)*1.1,0),.05,.45).material.color.set(Math.random()<.6?9240474:14283659)}tt("\u0417\u0430\u043D\u044F\u0442\u043E! \u041F\u0440\u0438\u0448\u0435\u043B\u0435\u0446 \u043E\u0442\u043F\u0438\u0445\u043D\u0443\u043B \u041E\u0440\u0438",900),Yn("\u0417\u0430\u043D\u044F\u0442\u043E!",bn(new R(y.grp.position.x,A+1,0)),!0),Ke.play("weak");try{navigator.vibrate&&navigator.vibrate(40)}catch{}break}if(Im(y,A))break}}e.slip&&(e.slip*=Math.max(0,1-1.6*i));let f=t.bot+(t.top-t.bot)*.42;B.position.y>f&&h0(B.position.y-f),e.alt=e.scrolled+(B.position.y-e.baseY),e.alt>e.best&&(e.best=e.alt);let p=Rf();if(p.n>e.level){e.level=p.n;let y=Ao(p.n);wf(kl(p.n)),e0.textContent=Ol(p.n),tt(Ol(p.n),1800),y.tip&&e.tipQ.push([y.tip,2200]),e.meteorIn=Math.min(e.meteorIn,3),y.gust&&(e.gustIn=Math.min(e.gustIn,2.5)),Ke.play("level")}if(e.day){let y=Math.min(e.dayY,t.top-.35),x=Ee.clamp((e.dayY-t.top)/40,0,1);if(e.day.position.set(e.dayX,y,.2),e.day.rotation.z+=i*1.5,e.day.userData.core.scale.setScalar(Ee.lerp(.55,.22,x)),e.day.userData.glow.scale.setScalar(Ee.lerp(1.3,.6,x)*(1+.08*Math.sin(e.alt))),e.dayY<t.top&&(e.dayX+=(B.position.x-e.dayX)*Math.min(1,2.5*i)),e.alt>=fe.goal-.2||e.dayY<t.top-.3&&Math.abs(h.x-e.dayX)<1&&Math.abs(h.y-e.dayY)<.8){e.dayStar=!0,e.dayShine=e.lit>=e.need;let w=Ln();be.remove(e.day),e.day=null,ss.action&&ss.action.reset().setEffectiveWeight(1).play();for(let A=0;A<30;A++){let C=Math.random()*Math.PI*2,M=1.4+Math.random()*1.8;St(w.x,w.y,w.z,new R(Math.cos(C)*M,.4+Math.random()*1.6,Math.sin(C)*M*.5),.06+Math.random()*.08,.7).material.color.set(Math.random()<.45?14283659:16777215)}rs.style.opacity=.6,setTimeout(()=>{rs.style.opacity=0},180),e.dayShine&&Zn.classList.add("done"),e.wag=3,Ke.play("day"),tt(e.dayShine?"\u0421\u0438\u044F\u044E\u0449\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430 \u0434\u043D\u044F! \u0414\u0430\u043B\u044C\u0448\u0435 \u2014 \u0437\u0430 \u0440\u0435\u043A\u043E\u0440\u0434\u043E\u043C":`\u0417\u0432\u0435\u0437\u0434\u0430 \u0434\u043D\u044F! \u0414\u043E\u0441\u043E\u0431\u0435\u0440\u0438 \u0441\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u0435 \u2014 \u043E\u043D\u0430 \u0437\u0430\u0441\u0438\u044F\u0435\u0442 (\u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0442\u043E\u0447\u0435\u043A: ${e.need-e.lit})`,2600),jn()}}jn();for(let y=e.plats.length-1;y>=0;y--){let x=e.plats[y];if(x.wrap){let w=t.xm+.6;x.grp.position.x+=x.vx*i,x.grp.position.x>w?x.grp.position.x-=2*w:x.grp.position.x<-w&&(x.grp.position.x+=2*w)}else if(x.vx){x.grp.position.x+=x.vx*i;let w=x.swing??1.1;(Math.abs(x.grp.position.x)>t.xm||Math.abs(x.grp.position.x-x.x0)>w)&&(x.grp.position.x=Ee.clamp(Ee.clamp(x.grp.position.x,x.x0-w,x.x0+w),-t.xm,t.xm),x.vx=-x.vx)}if(x.alien){let w=x.alien;if(x.type==="visit"){x.visitT=(x.visitT+i)%4.8;let C=x.visitT;if(x.occupied=C>=3.2,C<2.4)w.material.opacity=Math.max(0,w.material.opacity-i*5),w.position.y=vo+.5*(1-w.material.opacity);else if(C<3.2){let M=(C-2.4)/.8;w.material.opacity=.25+.3*Math.abs(Math.sin(C*16)),w.position.y=vo+.7*(1-M)}else w.material.opacity=1,w.position.y=vo+.02*Math.sin(e.clock*4+x.x0*5)}else w.position.y=vo+.02*Math.sin(e.clock*4+x.x0*5);x.shove>0&&(x.shove=Math.max(0,x.shove-i/.35));let A=x.shove>0?Math.sin(Math.PI*x.shove):0;w.scale.set(Bl*(1+.35*A),Bl*(1-.12*A),1),w.material.rotation=Ee.clamp((x.grp.position.x-B.position.x)*.12,-.22,.22)}if(x.capSq>0){x.capSq=Math.max(0,x.capSq-i/.32);let w=Math.sin(Math.PI*x.capSq);x.cap.scale.set(1+.07*w,1-.22*w,1+.07*w)}if(x.sq>0){x.sq=Math.max(0,x.sq-i/.4);let w=Math.sin(Math.PI*x.sq);x.body.scale.set(1+.14*w,1-.36*w,1),x.body.position.y=-.08*w}if(x.flick&&(!(x.flickT>0)&&Math.random()<i*.35&&(x.flickT=j(.15,.4)),x.flickT>0&&(x.flickT-=i),x.flick.material.opacity=x.flickT>0?.35+.5*Math.abs(Math.sin(x.flickT*40)):0),x.dip>0&&(x.dip=Math.max(0,x.dip-i/.3),x.body.position.y=-.07*Math.sin(Math.PI*x.dip)),x.spin&&(x.body.rotation.z+=x.spin*i,x.spin*=Math.max(0,1-2.5*i),Math.abs(x.spin)<.05&&(x.spin=0)),x.alive&&x.skin>0){let w=x.grp.position.x,A=x.grp.position.y;if(x.skin===3)for(let C=0,M=zn(.07,i);C<M;C++){let v=St(w+j(-.22,.22),A+j(.2,.36),-.3,new R(j(-.1,.1)+e.wind*.5,j(.3,.55),0),j(.07,.13),j(1.2,2));v.material.color.set(9404552),v.userData.fin=.4}else if(x.skin===2)for(let C=0,M=zn(.05,i);C<M;C++){let v=St(w+j(-.42,.42),A+j(-.1,.4),-.3,new R(j(-.08,.08),-j(.1,.25),0),j(.03,.045),j(1,1.8));v.material.color.set(15399167),v.userData.fin=.3}else if(x.skin===1)for(let C=0,M=zn(.025,i);C<M;C++){let v=St(w+j(-.45,.45),A+j(-.3,.3),-.3,new R(j(-.2,.2),j(-.12,.05),0),j(.03,.05),j(1.2,2));v.material.color.set(12167066),v.userData.fin=.3}else if(x.skin===6)for(let C=0,M=zn(.04,i);C<M;C++){let v=St(w+j(-.35,.35),A+j(.1,.4),-.3,new R(j(-.08,.08),j(.15,.35),0),j(.03,.05),j(1,1.8));v.material.color.set(9240474),v.userData.fin=.3}else if(x.skin===4)for(let C=0,M=zn(.045,i);C<M;C++){let v=j(0,6.28),I=St(w+Math.cos(v)*.52,A+Math.sin(v)*.52,-.3,new R(-Math.sin(v)*.3,Math.cos(v)*.3,0),j(.03,.05),j(.8,1.4));I.material.color.set(Math.random()<.7?11771135:14283659),I.userData.fin=.3}}if(x.type==="hot"){x.glow&&x.glow.scale.setScalar(1.2+.1*Math.sin(e.clock*5+x.x0*7));for(let w=0,A=zn(.14,i);w<A;w++){let C=j(.3,2.84);St(x.grp.position.x+Math.cos(C)*.36,x.grp.position.y+Math.sin(C)*.36,-.3,new R(Math.cos(C)*.25+e.wind*.45,.35+Math.sin(C)*.4,0),j(.05,.09),j(.5,.9)).material.color.set(Math.random()<.5?16730652:16757575)}if(x.body.rotation.y+=i*.6,x.steam>0){x.steam-=i;for(let w=0,A=zn(6,i);w<A;w++)St(x.grp.position.x+(Math.random()-.5)*.6,x.grp.position.y+.3,.3,new R((Math.random()-.5)*.3,1.2+Math.random(),0),.07,.6).material.color.set(16766914)}}if(x.gone>0){if(x.gone+=i,x.type==="crumble"?(x.grp.position.y-=3*x.gone*i*10,x.grp.rotation.z+=3*i,x.body.scale.multiplyScalar(1-i*1.2)):(x.body.material.opacity=Math.max(0,.82-x.gone*2.2),x.body.scale.multiplyScalar(1-i*1.5)),x.type==="ice"&&x.gone>.7){x.body.visible=!1,x.gone>2.6&&(x.gone=0,x.alive=!0,x.hp=3,x.bait=!1,x.body.material.emissiveMap=null,x.body.material.emissive.set(7314687),x.body.material.emissiveIntensity=.25,x.body.material.needsUpdate=!0,x.body.visible=!0,x.body.scale.setScalar(1),x.body.material.opacity=.82,Ii(new R(x.grp.position.x,x.grp.position.y,.2),6,!1));continue}if(x.gone>.7){Ro(y);continue}}x.type in Sf&&vm(x.type,x.grp.position.y,t),x.type==="ground"&&(is.position.set(x.grp.position.x,x.grp.position.y+.005,0),is.visible=x.grp.position.y>t.bot-1),x.grp.position.y<t.bot-1.5&&Ro(y)}for(;e.nextY<t.top+2;)Cf();for(let y=e.stars.length-1;y>=0;y--){let x=e.stars[y],w=x.userData;if(w.age+=i,x.material.rotation+=w.spin*i,x.scale.setScalar(w.base*(1+.16*Math.sin(w.age*5))),w.glow&&(w.glow.position.copy(x.position),w.glow.scale.setScalar(w.base*(2.2+.5*Math.sin(w.age*3.1)))),e.magnet>0){let A=h.clone().sub(x.position);A.z=0;let C=A.length();if(C<3.6){x.position.addScaledVector(A.normalize(),Math.min(C,8*i));for(let M=0,v=zn(1.2,i);M<v;M++)St(x.position.x,x.position.y,.1,new R(-A.x*.5,-A.y*.5,0),.05,.35)}}if(Math.hypot(x.position.x-h.x,x.position.y-h.y)<.65){vM(y);continue}w.kind==="key"&&x.position.y<t.top-.6&&Pm("key",`\u0411\u043E\u043B\u044C\u0448\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430 \u2014 \u0442\u043E\u0447\u043A\u0430 \u0441\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u044F. \u0421\u043E\u0431\u0435\u0440\u0438 \u0432\u0441\u0435 \u0434\u043E ${fe.goal} \u043C, \u0438 \u0437\u0432\u0435\u0437\u0434\u0430 \u0434\u043D\u044F \u0437\u0430\u0441\u0438\u044F\u0435\u0442`),x.position.y<t.bot-1&&(w.kind==="key"&&(e.keyOut=!1,e.keyAt=e.alt+4,tt("\u0422\u043E\u0447\u043A\u0430 \u0441\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u044F \u043E\u0441\u0442\u0430\u043B\u0430\u0441\u044C \u0432\u043D\u0438\u0437\u0443 \u2014 \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442 \u0435\u0449\u0451 \u043E\u0434\u043D\u0430",1200)),Wl(y,!1))}e.magnet>0&&(e.magnet-=i);for(let y=e.bonuses.length-1;y>=0;y--){let x=e.bonuses[y];if(x.t+=i,x.sp.position.y+=Math.sin(x.t*3)*.24*i,Math.hypot(x.sp.position.x-h.x,x.sp.position.y-h.y)<.6){let w=bn(x.sp.position);be.remove(x.sp),e.bonuses.splice(y,1),Ke.play("bonus"),x.kind==="rocket"&&(e.rocket=3,Yn("\u0420\u0430\u043A\u0435\u0442\u0430!",w),st("leap",{fade:.05,speed:.6})),x.kind==="bubble"&&(e.bubble=!0,Yn("\u041F\u0443\u0437\u044B\u0440\u044C!",w),jn(),e.tipped.bubble||(e.tipped.bubble=!0,tt("\u041F\u0443\u0437\u044B\u0440\u044C \u043F\u043E\u0434\u0445\u0432\u0430\u0442\u0438\u0442, \u0435\u0441\u043B\u0438 \u0441\u043E\u0440\u0432\u0451\u0448\u044C\u0441\u044F. \u0418 \u0437\u0430\u0449\u0438\u0442\u0438\u0442 \u043E\u0442 \u0436\u0430\u0440\u0430 \u0438 \u043C\u0435\u0442\u0435\u043E\u0440\u0438\u0442\u0430",2800,!0))),x.kind==="magnet"&&(e.magnet=5,Yn("\u041C\u0430\u0433\u043D\u0438\u0442!",w));continue}x.sp.position.y<t.bot-1&&(x.kind==="bubble"&&!e.bubble&&(e.bubbleAt=Math.min(e.bubbleAt,e.nextY-e.baseY+e.scrolled+12)),be.remove(x.sp),e.bonuses.splice(y,1))}e.bubbleSp&&(e.bubbleSp.visible=e.bubble,e.bubble&&e.bubbleSp.position.set(B.position.x,B.position.y+.6,.35));for(let y=e.holes.length-1;y>=0;y--){let x=e.holes[y];x.sp.material.rotation-=i*2;let w=x.sp.position.clone().sub(h);w.z=0;let A=w.length();if(A<1.8&&e.rocket<=0){let M=4.2/(A*A+.35);B.position.x+=w.x/A*M*i*.35,e.vy+=w.y/A*M*i}let C=x.used?0:Ee.clamp((2-A)/1,0,1)*.42;if(x.ring.material.opacity+=(C-x.ring.material.opacity)*Math.min(1,6*i),x.ring.rotation.z+=i*.8,x.sp.scale.setScalar(1.25+.06*Math.sin(performance.now()*.004)),x.near=Math.min(x.near,A),vm("hole",x.sp.position.y,t),A<.38&&e.rocket<=0){if(be.remove(x.sp),be.remove(x.ring),e.holes.splice(y,1),e.bubble){Mo("\u0447\u0451\u0440\u043D\u043E\u0439 \u0434\u044B\u0440\u044B"),e.vy=fe.v0,hi(B.position.y);continue}let M=null;for(let I of e.plats)I.alive&&I.type!=="hot"&&I.type!=="crumble"&&I.grp.position.y>t.bot+.3&&(!M||I.grp.position.y<M.grp.position.y)&&(M=I);if(!M){if(B.position.y=t.bot-1,Cm("\u0427\u0451\u0440\u043D\u0430\u044F \u0434\u044B\u0440\u0430!"),!e.playing)return;continue}let v=SM(1);e.series=0,e.dashReady=!1,Qi(),jn(),Ii(h.clone(),10,!1),B.position.set(M.grp.position.x,M.grp.position.y+M.top,0),hi(B.position.y),ws(fe.v0),e.spinT=.7,e.invuln=1.5,Yn(v>0?"\u22121 \u0442\u043E\u0447\u043A\u0430 \u0441\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u044F":"\u0412\u044B\u043F\u043B\u044E\u043D\u0443\u043B\u043E!",bn(B.position),!0),tt("\u0427\u0451\u0440\u043D\u0430\u044F \u0434\u044B\u0440\u0430 \u0432\u044B\u043F\u043B\u044E\u043D\u0443\u043B\u0430 \u041E\u0440\u0438 \u043D\u0438\u0436\u0435",1200),Ke.play("hole");try{navigator.vibrate&&navigator.vibrate(60)}catch{}continue}!x.used&&x.near<.95&&A>1.3&&(x.used=!0,e.vy=Math.max(e.vy,0)+4.5,tt("\u0413\u0440\u0430\u0432\u0438\u043C\u0430\u043D\u0451\u0432\u0440!",800),Yn("\u0420\u0430\u0437\u0433\u043E\u043D!",bn(h)),Ke.play("sling")),x.sp.position.y<t.bot-1.5&&(be.remove(x.sp),be.remove(x.ring),e.holes.splice(y,1))}let g=Ao(p.n);if(g.gust&&e.alt>=So.gust*fe.levelH&&(e.gustOn||(e.gustOn=!0,e.gustIn=2),e.gustIn-=i,e.gustIn<=0&&e.windT<=0&&(e.windDir=Math.random()<.5?-1:1,e.windT=2.6,e.gustIn=g.gust*(.8+Math.random()*.5),Ke.play("wind"),e.windAmp=e.gustSeen?2.3:1.3,e.gustSeen?tt(e.windDir>0?"\u0412\u0435\u0442\u0435\u0440 \u0432\u043F\u0440\u0430\u0432\u043E \u2192":"\u2190 \u0412\u0435\u0442\u0435\u0440 \u0432\u043B\u0435\u0432\u043E",900):(e.gustSeen=!0,tt(`\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0439 \u0432\u0435\u0442\u0435\u0440 \u0441\u043D\u043E\u0441\u0438\u0442 ${e.windDir>0?"\u0432\u043F\u0440\u0430\u0432\u043E \u2192":"\u2190 \u0432\u043B\u0435\u0432\u043E"} \u0420\u0443\u043B\u0438 \u043F\u0440\u043E\u0442\u0438\u0432 \u043D\u0435\u0433\u043E`,2400,!0)))),e.windT>0){e.windT-=i;let y=Math.min(1,(2.6-e.windT)/.9)*Math.min(1,e.windT/.4);e.wind=e.windDir*e.windAmp*Math.max(0,y);for(let w=0,A=zn(1.1,i);w<A;w++){let C=t.bot+Math.random()*(t.top-t.bot),M=j(-.6,.5),v=e.windDir*j(6,9),I=-e.windDir*(t.xm+1.4);for(let W=0;W<6;W++)St(I-e.windDir*W*.09,C,M,new R(v,0,0),.05-W*.006,.55).material.color.set(W<2?16777215:14673919)}let x=e.windDir>0?"r":"l";it.wind!==x&&(it.wind=x,uf.className="on "+x)}else e.wind=0,it.wind&&(it.wind="",uf.className="");let b=Ee.clamp((e.alt-p.n*fe.levelH)/fe.levelH,0,1),m=e.alt>=So.meteor*fe.levelH?Vn(g.meteor,b):0;m>0&&(e.meteorIn-=i,e.meteorIn<=0&&(xM(),e.meteorIn=Math.max(g.meteorMin||4.5,m*Math.pow(.92,p.extra))*(.8+Math.random()*.4)));let d=new ro(B.position.clone().add(new R(0,.2,0)),B.position.clone().add(new R(0,1,0))),_=new R;for(let y=e.meteors.length-1;y>=0;y--){let x=e.meteors[y];if(x.warn>0){x.warn-=i,x.ring.scale.setScalar(.45+.35*Math.abs(Math.sin(x.warn*14))),x.ring.material.opacity=.5+.5*Math.abs(Math.sin(x.warn*14)),x.warn<=0&&(be.remove(x.ring),x.ring.material.dispose(),x.ring=null,x.sp.visible=!0);continue}x.sp.position.x+=x.vx*i,x.sp.position.y+=x.vy*i,x.sp.material.rotation+=x.spin*i;for(let w=0,A=zn(.7,i);w<A;w++)St(x.sp.position.x-Math.sign(x.vx)*.12,x.sp.position.y,.3,new R(-x.vx*.3,.2,0),.05+Math.random()*.04,.35).material.color.set(Math.random()<.5?16711730:5923976);if(!(e.invuln>0)&&e.rocket<=0){let w=x.sp.position.clone();if(w.z=0,d.closestPointToPoint(w,!0,_),_.distanceTo(w)<.38){let C=x.sp.position.clone();if(Nl(y),Ii(C,14,!0),e.bubble){Mo("\u043C\u0435\u0442\u0435\u043E\u0440\u0438\u0442\u0430");continue}e.vy=Math.min(e.vy,.5),hi(-1/0),e.knock=.45,e.knockV=Math.sign(x.vx)*5.5,e.spinT=.45,e.invuln=1.2,e.hits++,e.series=0,e.dashReady=!1,Qi();try{navigator.vibrate&&navigator.vibrate(80)}catch{}tt("\u041C\u0435\u0442\u0435\u043E\u0440\u0438\u0442 \u0441\u0431\u0438\u043B \u041E\u0440\u0438 \u0441 \u043A\u0443\u0440\u0441\u0430!",1100),Ke.play("meteor");continue}let A=_.distanceTo(w);A<.75?x.close=!0:x.close&&!x.paid&&A>.9&&(x.paid=!0,Pf(bn(x.sp.position)))}(Math.abs(x.sp.position.x)>t.xm+2||x.sp.position.y<t.bot-1)&&Nl(y)}let E=e.alt>=So.bolt*fe.levelH?Vn(g.bolt||0,b):0;E>0&&(e.boltIn-=i,e.boltIn<=0&&(gM(),e.boltIn=Math.max(2.4,E*Math.pow(.92,p.extra))*(.8+Math.random()*.4))),bM(i),(B.position.y<t.bot-.6||e.falling&&e.fallT>1.2)&&Cm("\u041F\u0440\u043E\u043C\u0430\u0445!")}/[?&]debug\b/.test(location.search)&&(window.__jump={game:z,JUMP:fe,LEVELS:es,pivot:()=>B,bounds:di,step:i=>Zm(i),audit(i=600){let e=z,t=di(),n=9,s=0,r=null,a={};for(let o=0;o<i;o++){let c=e.nextY;Cf(),s=Math.max(s,e.nextY-c),a[e.lastType]=(a[e.lastType]||0)+1;let l=e.plats.filter(ql);for(let h=0;h<l.length;h++)for(let u=h+1;u<l.length;u++){let f=Co(l[h],l[u].x0,l[u].grp.position.y,l[u].swing||0);f<n&&(n=f,r=[l[h].type,l[u].type,Math.round(e.scrolled)])}for(let h of e.holes)for(let u of l){let f=Co(u,h.sp.position.x,h.sp.position.y);f<fe.holeSep-1e-6&&(r=["hole",u.type,f])}h0(e.nextY-c);for(let h=e.plats.length-1;h>=0;h--)e.plats[h].grp.position.y<t.bot-1.5&&Ro(h);for(let h=e.holes.length-1;h>=0;h--)e.holes[h].sp.position.y<t.bot-1.5&&(be.remove(e.holes[h].sp),be.remove(e.holes[h].ring),e.holes.splice(h,1))}return{minD:+n.toFixed(3),maxGap:+s.toFixed(3),worst:r,types:a,reachedM:Math.round(e.scrolled)}}});var oa=new At,Lm=new R(1,0,0),CM=new R(0,1,0);function PM(i){let e=z;if(e.playing&&!e.finale&&!window.__noPose){let t=e.rocket>0?0:1,n=Ee.clamp(e.airT/Math.max(.3,e.airDur),0,1),s=(g,b,m)=>{let d=Ee.clamp((m-g)/(b-g),0,1);return d*d*(3-2*d)},r=t*(1-s(.05,.32,n)),a=t*Math.sin(Math.PI*Ee.clamp((n-.12)/.8,0,1)),o=t*s(.55,.92,n);Lt("spine",-.16*r-.04*o,0,0),Lt("chest",-.08*r-.03*o,0,0),Lt("neck",-.12*r+.03*o,0,0),Lt("head",-.22*r+.1*o,0,0);let c=.35*r+.22*a-.35*o,l=.7*r+.55*a+.3*o;Lt("f_upperL",c,0,0),Lt("f_upperR",c,0,0),Lt("f_lowerL",l,0,0),Lt("f_lowerR",l,0,0);let h=-.5*r+.28*a+.2*o,u=-.25*r+.5*a+.4*o;Lt("b_upperL",h,0,0),Lt("b_upperR",h,0,0),Lt("b_lowerL",u,0,0),Lt("b_lowerR",u,0,0);let f=t*Ee.clamp(e.vy*.1,-.75,.75);e.earV+=(55*(f-e.earA)-7*e.earV)*i,e.earA+=e.earV*i,e.earA=Ee.clamp(e.earA,-1.1,1.1);let p=.18*a;Lt("ear1L",e.earA,0,p),Lt("ear1R",e.earA,0,-p),Lt("ear2L",.6*e.earA,0,0),Lt("ear2R",.6*e.earA,0,0)}if(z.stun>0&&ur){let t=z.stun/Gm.stun;oa.setFromAxisAngle(CM,.28*t*Math.sin(z.stun*40)),ha(ur,oa)}if(z.snap>0&&Kn&&ur){let t=Math.sin(Math.PI*(1-z.snap/.24));oa.setFromAxisAngle(Lm,.45*t),ha(Kn,oa),oa.setFromAxisAngle(Lm,-.16*t),ha(ur,oa),z.snap-=i}}function f0(){let i=z;if(i.finale){i.hero&&!i.tapped&&(i.tapped={inWindow:i.tapWindow});return}i.playing&&IM()}function IM(){let i=z;if(!(!i.hop||i.rocket>0||i.knock>0||i.airT<.12)){i.hop=0,i.tipped.hop=!0,i.vy=Math.max(i.vy,fe.hop),hi(B.position.y),i.airT=0,i.airDur=2*i.vy/fe.g,i.earV+=5,i.squash=.6,st("leap",{fade:.05,speed:1.4}),Ke.play("sling");for(let e=0;e<14;e++){let t=Math.PI+Math.random()*Math.PI;St(B.position.x,B.position.y+.05,.25,new R(Math.cos(t)*1.3,Math.sin(t)*.6,0),.06,.4).material.color.set(14283659)}jn()}}function LM(i){let e=Hm(),t=0,n=0;if(nt.hold=Math.max(0,(nt.hold||0)-i),e&&Un.x>=0&&(!ba||nt.hold>0))t=Ee.clamp((Un.x-e.x)/(innerWidth*.35),-1,1),n=Ee.clamp((e.y-Un.y)/(innerHeight*.3),-1,1);else{if(nt.sacc-=i,nt.sacc<=0){nt.sacc=.5+Math.random()*1.4;let h=Math.random()*Math.PI*2,u=.55+Math.random()*.45;nt.target.set(Math.cos(h)*u,Math.sin(h)*u*.6),Math.random()<.25&&nt.target.set(0,.15)}t=nt.target.x,n=nt.target.y}t-=Oe.y*.6;let s=1-Math.pow(.001,i);nt.gaze.x+=(t-nt.gaze.x)*s,nt.gaze.y+=(n-nt.gaze.y)*s;let r=Math.max(1,Math.hypot(nt.gaze.x,nt.gaze.y)),a=nt.gaze.x/r,o=nt.gaze.y/r,c=new R,l=Ee.degToRad(15);for(let h of nt.pivots){let u=im[h.side];sm.setFromAxisAngle(u.py,-a*l),rm.setFromAxisAngle(u.px,-o*l),h.node.quaternion.copy(sm).multiply(rm)}if(!nt.pivots.length)for(let h of[...nt.irises,...nt.pupils,...nt.glints]){let u=im[h.side];c.copy(u.px).multiplyScalar(a).addScaledVector(u.py,o).multiplyScalar(.038),h.node.position.copy(h.base).add(c)}}function d0(){let i=new Xt,e=new We(new Zs(.072,32,24),new Kt({color:14283659,roughness:.75,sheen:1,sheenColor:new Se(16056258),sheenRoughness:.6})),t=new We(new $s(.072,.006,8,64),new Vt({color:16448252}));t.rotation.x=Math.PI/2,t.scale.set(.99,.99,.99);let n=t.clone();return n.rotation.set(0,0,Math.PI/2),i.add(e,t,n),i}function af(i,e){let t=new Pe(i/innerWidth*2-1,-(e/innerHeight)*2+1);la.setFromCamera(t,Dt);let n=new R,s=new fn(new R(0,1,0),-(B?B.position.y:0));return la.ray.intersectPlane(s,n)||la.ray.at(6,n),n.y=B?B.position.y:0,n}function DM(i,e){let t=new Pe(i/innerWidth*2-1,-(e/innerHeight)*2+1);la.setFromCamera(t,Dt);let n=new R,s=new fn(new R(0,1,0),-(B?B.position.y:0));la.ray.intersectPlane(s,n)||la.ray.at(6,n);let r=Math.hypot(n.x,n.z),a=1.7;return r>a&&(n.x*=a/r,n.z*=a/r),n.z=Ee.clamp(n.z,-1.6,1.3),n.y=B?B.position.y:0,n}function p0(){if(Rt.state!=="stand"){ya(p0);return}zt||(we.mode=!we.mode,y0(),Dm.style.opacity=0)}var zl=(i,e=.2)=>new Promise(t=>{let n=(fi[i].b-fi[i].a)/ns*1e3+250,s=!1,r=()=>{s||(s=!0,t())};st(i,{fade:e,onDone:r}),setTimeout(r,n)});async function UM(i,e){if(!zt)try{await FM(i,e)}catch(t){console.error(t)}finally{zt=!1,ui=!1,we.pos=null,we.yaw=null,In!==En.idle&&st("idle",{fade:.4})}}async function FM(i,e){let t=DM(i,e);if(!t)return;we.mode=!1,y0(),zt=!0,Dn=!1,ui=!1,we.ball&&(be.remove(we.ball),we.ball=null);let n=d0();we.ball=n,be.add(n);let s=Dt.position.clone().add(new R(.35,-.55,-.6));n.position.copy(s);let r=new R().fromArray(Gl[Jn].model),a=new R().subVectors(t,r),o=a.length(),c=Jn==="s1"?-.35:Jn==="s3"?-.5:-.2,l=-(e/innerHeight)*2+1,h=Hm(),f=h&&Math.hypot(i-h.x,e-h.y)<Math.min(innerWidth,innerHeight)*.16?"mouth":l>.15?"two":"paw";we.yaw=f==="mouth"||o<.35?0:Math.atan2(a.x,a.z)-c;let p=o>.35?t.clone().addScaledVector(a.clone().normalize(),-.3):r.clone();we.pos=p;let g=Ee.clamp(o/yf,.2,1.1);o>.4&&st("walk",{fade:.15,speed:Cl});let b={mouth:13/24,paw:11/24,two:18/24}[f],m=g+b,d=performance.now(),_=1+o*.25,E=!1,y={mouth:"catchMouth",paw:"catchPaw",two:"catchTwo"}[f],x=()=>{if(f==="mouth")return Ln();let X=B.position.clone(),H=B.rotation.y,K=new R(Math.sin(H),0,Math.cos(H));if(f==="paw"){let q=new R(K.z,0,-K.x);return X.clone().addScaledVector(K,.45).addScaledVector(q,.12).setY(B.position.y+.35)}return X.clone().addScaledVector(K,.35).setY(B.position.y+.95)},w=!1;await new Promise(X=>{let H=()=>{let K=Math.min(1,(performance.now()-d)/(m*1e3));!E&&K*m>=g&&(E=!0,we.pos=null,zl(y,.12).then(()=>{w=!0})),n.position.lerpVectors(s,x(),K),n.position.y+=Math.sin(K*Math.PI)*_,n.rotation.x+=.12,n.rotation.z+=.07,K<1?requestAnimationFrame(H):X()};H()});let A=()=>{let X=n.getWorldPosition(new R);for(let H=0;H<8;H++){let K=Math.random()*Math.PI*2;St(X.x,X.y,X.z,new R(Math.cos(K)*.9,.8+Math.random()*.8,Math.sin(K)*.9),.1,.6)}},C=()=>{ui=!0,Kn.attach(n);let X=Kn.worldToLocal(Ln());n.position.copy(X),n.rotation.set(0,0,0)};if(f==="mouth")C(),A();else{let X=x().setY(Pi()),H=n.position.clone(),K=performance.now();await new Promise(pe=>{let Te=()=>{let Xe=Math.min(1,(performance.now()-K)/350);n.position.lerpVectors(H,X,Xe),n.position.y=Ee.lerp(H.y,X.y,Xe*Xe),Xe<1?requestAnimationFrame(Te):pe()};Te()});let q=f==="paw"?40/24:52/24,le=(performance.now()-d)/1e3-g;await ts(Math.max(0,q-le)*1e3),C(),A()}for(let X=0;X<60&&!w;X++)await ts(50);let M=r.clone();we.pos=null,o>.35&&(we.yaw=Math.atan2(M.x-p.x,M.z-p.z)-c,st("walk",{fade:.2,speed:Cl}),await ts(Math.max(450,g*1e3))),we.yaw=0,await g0(),Oe.y=0,Oe.x=0,Oe.vy=0,we.yaw=null;let v=zl("drop",.2);await ts(13/24*1e3),ui=!1,be.attach(n),re.on=!1,re.v.set(0,0,0),re.vy=0;let I=n.position.clone(),W=Math.random()<.5?-1:1,U=new R(B.position.x+W*.38,Pi(),B.position.z+.5),k=performance.now();await new Promise(X=>{let H=()=>{let K=Math.min(1,(performance.now()-k)/600);n.position.lerpVectors(I,U,K),n.position.y=Ee.lerp(I.y,U.y,K*K)+(K>.7?Math.sin((K-.7)/.3*Math.PI)*.08:0),n.rotation.x+=.1,K<1?requestAnimationFrame(H):(n.position.copy(U),X())};H()}),await v,st("idle",{fade:.4}),zt=!1}function m0(i,e){re.on=!0,re.v.copy(i),re.vy=e!==void 0?e:1.6+i.length()*.25,re.chase=!0,zt||OM()}function NM(i){let e=we.ball;if(!e||!re.on)return;re.vy-=9.8*i,re.vy*=Math.pow(.9,i),e.position.addScaledVector(re.v,i),e.position.y+=re.vy*i;let t=Pi();e.position.y<t&&(e.position.y=t,Math.abs(re.vy)>.6?re.vy=-re.vy*.45:re.vy=0,re.v.multiplyScalar(.985));let n=.06,s=e.position.clone().project(Dt),r=!1,a=new R().setFromMatrixColumn(Dt.matrixWorld,0).setY(0).normalize(),o=new R(0,1,0),c=new R().setFromMatrixColumn(Dt.matrixWorld,2).negate().setY(0).normalize(),l=re.v.clone();if(l.y=re.vy,s.x>1-n&&l.dot(a)>0||s.x<-1+n&&l.dot(a)<0){let u=l.dot(a);re.v.addScaledVector(a,-u*1.8),r=!0}if(s.y>1-n-.08&&re.vy>0&&(re.vy=-re.vy*.75,r=!0),s.y<-1+n+.02){let u=l.dot(c);u<0&&(re.v.addScaledVector(c,-u*1.8),r=!0)}let h=e.position.clone().project(Dt);if(Math.abs(h.x)>1-n||h.y>1-n-.08||h.y<-1+n+.02){h.x=Ee.clamp(h.x,-1+n,1-n),h.y=Ee.clamp(h.y,-1+n+.02,1-n-.08);let f=h.unproject(Dt).sub(Dt.position).normalize(),p=(e.position.y-Dt.position.y)/f.y;if(isFinite(p)&&p>0){let g=Dt.position.clone().addScaledVector(f,p);e.position.x=g.x,e.position.z=g.z}}if(e.position.z<-1.2&&re.v.z<0&&(e.position.z=-1.2,re.v.z=-re.v.z*.8,r=!0),e.position.z>1.3&&re.v.z>0&&(e.position.z=1.3,re.v.z=-re.v.z*.8,r=!0),r){let u=e.position;for(let f=0;f<4;f++){let p=Math.random()*Math.PI*2;St(u.x,u.y,u.z,new R(Math.cos(p)*.6,.6,Math.sin(p)*.6),.07,.4)}}e.position.y<=t+.001&&re.v.multiplyScalar(Math.pow(.35,i)),e.rotation.x+=re.v.z*i/lf,e.rotation.z-=re.v.x*i/lf,e.position.y<=t+.001&&re.v.length()<.05&&Math.abs(re.vy)<.05?(re.v.set(0,0,0),re.vy=0,re.on=!1):e.position.y>t+.001&&(re.on=!0),re.bounds.x=1.6,re.bounds.zMin=-1.2,re.bounds.zMax=1.3}async function OM(){zt=!0,Dn=!1,ui=!1;let i=we.ball,e=new R().fromArray(Gl[Jn].model),t=Jn==="s1"?-.35:Jn==="s3"?-.5:-.2;try{st("walk",{fade:.15,speed:Cl});let n=yf,s=!1,r=performance.now(),a=B.position.x,o=B.position.z,c=performance.now();for(;!s&&performance.now()-r<12e3;){performance.now()-r>6e3&&i.position.y>Pi()+.3&&(re.vy=-1);let A=i.position,C=B.position,M=new R(A.x-C.x,0,A.z-C.z),v=M.length();v>.05&&(we.yaw=Math.atan2(M.x,M.z)-t);let I=A.clone().sub(M.clone().normalize().multiplyScalar(.3));I.y=0,I.z=Ee.clamp(I.z,re.bounds.zMin,re.bounds.zMax),we.pos=I;let W=re.v.length();v<.5&&i.position.y<Pi()+.3&&W<.9&&(s=!0),!re.on&&v<.75&&(s=!0),performance.now()-r>2500&&v<.9&&i.position.y<Pi()+.3&&(s=!0);let U=performance.now();Math.hypot(B.position.x-a,B.position.z-o)>.03?(a=B.position.x,o=B.position.z,c=U):!re.on&&U-c>800&&(s=!0),await ts(40)}if(we.pos=null,re.on=!1,re.v.set(0,0,0),re.vy=0,!s){we.yaw=null;return}let l=re.v.length()>.5,h=l?"catchPaw":"pickup",u=l?40/24:14/24,f=zl(h,.15),p=i.position.clone(),g=performance.now();await new Promise(A=>{let C=()=>{let M=Math.min(1,(performance.now()-g)/(u*1e3)),v=B.rotation.y,I=B.position.clone().add(new R(Math.sin(v),0,Math.cos(v)).multiplyScalar(.36)).setY(Pi());i.position.lerpVectors(p,I,M),M<1?requestAnimationFrame(C):A()};C()}),ui=!0,Kn.attach(i),i.position.copy(Kn.worldToLocal(Ln())),i.rotation.set(0,0,0);let b=Ln();for(let A=0;A<8;A++){let C=Math.random()*Math.PI*2;St(b.x,b.y,b.z,new R(Math.cos(C)*.9,.8+Math.random()*.8,Math.sin(C)*.9),.1,.6)}await f;let m=B.position.clone(),d=e.clone().sub(m);if(d.y=0,d.length()>.25){we.yaw=Math.atan2(d.x,d.z)-t,we.pos=e.clone(),st("walk",{fade:.2,speed:Cl});let A=performance.now();for(;new Pe(B.position.x-e.x,B.position.z-e.z).length()>.06&&performance.now()-A<5e3;)await ts(40)}we.pos=null,we.yaw=0,await g0(),Oe.y=0,Oe.x=0,Oe.vy=0,we.yaw=null;let _=zl("drop",.2);await ts(13/24*1e3),ui=!1,be.attach(i),re.on=!1,re.v.set(0,0,0),re.vy=0;let E=i.position.clone(),y=Math.random()<.5?-1:1,x=new R(Ee.clamp(B.position.x+y*.38,-re.bounds.x,re.bounds.x),Pi(),Math.min(B.position.z+.5,re.bounds.zMax)),w=performance.now();await new Promise(A=>{let C=()=>{let M=Math.min(1,(performance.now()-w)/600);i.position.lerpVectors(E,x,M),i.position.y=Ee.lerp(E.y,x.y,M*M)+(M>.7?Math.sin((M-.7)/.3*Math.PI)*.08:0),M<1?requestAnimationFrame(C):(i.position.copy(x),A())};C()}),await _}catch(n){console.error(n)}finally{zt=!1,ui=!1,we.pos=null,we.yaw=null,re.chase=!1,st("idle",{fade:.4})}}async function g0(){let i=Jn==="s1"?-.35:Jn==="s3"?-.5:-.2,e=performance.now();for(;performance.now()-e<1200;){let t=i+(we.yaw||0)-B.rotation.y;if(t=Math.atan2(Math.sin(t),Math.cos(t)),Math.abs(t)<.06)break;await ts(40)}}function b0(){Dn&&(Dn=!1,st("petOut",{fade:.2,onDone:()=>st("idle",{fade:.4})}))}var Ht={action:null,w:0,on:!1,t:0,next:4},ss={action:null};function kM(i){if(!Ht.action)return;let e=!zt&&!z.on&&!we.mode&&!Dn&&!ui&&(In===En.idle||In===En.sit);Ht.on?(Ht.t-=i,(Ht.t<=0||!e)&&(Ht.on=!1,Ht.next=5+Math.random()*7)):e&&(Ht.next-=i,Ht.next<=0&&(Ht.on=!0,Ht.t=2.5+Math.random()*2.5)),Ht.w+=((Ht.on?1:0)-Ht.w)*Math.min(1,i*(Ht.on?3:5)),Ht.action.setEffectiveWeight(Ht.w<.002?0:Ht.w)}var Rt={state:"stand",idle:0,pending:null};function BM(){return!zt&&!z.on&&!we.mode&&!Dn&&!re.on&&!re.grab&&!Un.down&&In===En.idle}function HM(i){if(Rt.state==="stand"){if(!BM()){Rt.idle=0;return}Rt.idle+=i,Rt.idle>=mv&&(Rt.state="down",st("sitDown",{fade:.35,onDone:()=>{Rt.state==="down"&&In===En.sitDown&&(Rt.state="sitting",st("sit",{fade:.2}))}}))}}function ya(i){if(Ke.ensure(),Rt.idle=0,Rt.state==="stand")return i&&i(),!0;if(i&&(Rt.pending=i),Rt.state==="up")return!1;let e=()=>{Rt.state="stand",Rt.idle=0,(In===En.sitUp||In===En.sitDown)&&st("idle",{fade:.3});let t=Rt.pending;Rt.pending=null,t&&t()};return Rt.state==="down"&&En.sitDown.time<(fi.sitDown.b-fi.sitDown.a)/ns*.4?(Rt.state="up",st("idle",{fade:.35}),setTimeout(e,300),!1):(Rt.state="up",st("sitUp",{fade:.2,onDone:e}),!1)}function If(i){if(Rt.state!=="stand"&&i!=="reset"&&i!=="showcard"){ya(()=>If(i));return}if(zt)return;if(i==="reset"){ma.clear(),location.reload();return}if(i==="showcard"){As.s3.classList.remove("hidecard"),Je("#showCard").style.display="none",xa("s3");return}if(!En[i])return;Dn=!1,zt=!0;let e=fi[i].loop;st(i,{fade:.25,onDone:e?void 0:()=>{zt=!1,st("idle",{fade:.5})}}),e&&setTimeout(()=>{zt=!1,st("idle",{fade:.5})},4e3)}Je("#catch").addEventListener("click",Xl);Je("#again").addEventListener("click",Xl);Je("#gQuit").addEventListener("click",jv);var xf=Je("#gMute"),x0=()=>{xf.textContent=Ke.muted?"\u{1F507}":"\u{1F50A}",xf.setAttribute("aria-label",Ke.muted?"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A":"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A")};xf.addEventListener("click",()=>{Ke.setMuted(!Ke.muted),x0(),Ke.muted||Ke.play("star",1)});x0();Je("#trainToggle").addEventListener("click",()=>{confirm("\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0434\u0435\u043D\u044C? \u0417\u0432\u0435\u0437\u0434\u0430 \u0438 \u0444\u0440\u0430\u0437\u0430 \u0434\u043D\u044F \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u0439\u043C\u0430\u043D\u044B \u0437\u0430\u043D\u043E\u0432\u043E.")&&If("reset")});Je("#cardClose").addEventListener("click",()=>{As.s3.classList.add("hidecard"),Je("#showCard").style.display="",xa("s1")});document.querySelectorAll("#throwBtn,[data-throw]").forEach(i=>i.addEventListener("click",p0));function y0(){document.querySelectorAll("#throwBtn,[data-throw]").forEach(i=>{i.classList.toggle("armed",we.mode),i.textContent=we.mode?"\u0422\u0430\u043F\u043D\u0438\u0442\u0435, \u043A\u0443\u0434\u0430 \u0431\u0440\u043E\u0441\u0438\u0442\u044C":"\u0411\u0440\u043E\u0441\u0438\u0442\u044C \u043C\u044F\u0447"})}document.querySelectorAll(".cmds").forEach(i=>i.addEventListener("click",e=>{let t=e.target.closest("button");t&&If(t.dataset.cmd)}));document.querySelectorAll(".cmds").forEach(i=>{i.addEventListener("wheel",r=>{i.scrollWidth<=i.clientWidth||Math.abs(r.deltaY)<=Math.abs(r.deltaX)||(r.preventDefault(),i.scrollLeft+=r.deltaY)},{passive:!1});let e=!1,t=!1,n=0,s=0;i.addEventListener("pointerdown",r=>{r.pointerType!=="mouse"||r.button!==0||(e=!0,t=!1,n=r.clientX,s=i.scrollLeft)}),window.addEventListener("pointermove",r=>{if(!e)return;let a=r.clientX-n;!t&&Math.abs(a)>5&&(t=!0,i.style.scrollSnapType="none",i.classList.add("dragging")),t&&(i.scrollLeft=s-a)}),window.addEventListener("pointerup",()=>{e&&(e=!1,i.style.scrollSnapType="",i.classList.remove("dragging"))}),i.addEventListener("click",r=>{t&&(r.preventDefault(),r.stopPropagation(),t=!1)},!0)});var Un={x:-1,y:-1,down:!1};addEventListener("pointerdown",()=>ya(),!0);addEventListener("keydown",()=>ya(),!0);addEventListener("wheel",()=>ya(),{capture:!0,passive:!0});addEventListener("pointermove",()=>{Rt.state==="stand"&&(Rt.idle=0)},!0);addEventListener("pointermove",i=>{if(z.on){z.drag&&z.drag.id===i.pointerId&&(z.drag.moved+=Math.abs(i.clientX-z.drag.lx),z.drag.lx=i.clientX,z.finale||(z.targetX=Vm(i.clientX)),z.drag.moved>8&&Pl());return}if(re.grab&&re.grab.id===i.pointerId){re.grab.pts.push([i.clientX,i.clientY,performance.now()]),re.grab.pts.length>12&&re.grab.pts.shift();return}if(Un.x=i.clientX,Un.y=i.clientY,ba&&Un.down&&(nt.hold=4),Oe.dragging){let e=i.clientX-Oe.lastX,t=i.clientY-Oe.lastY;Oe.lastX=i.clientX,Oe.lastY=i.clientY,Oe.moved+=Math.abs(e)+Math.abs(t);let n=Ee.clamp(i.timeStamp-(Oe.lastT||i.timeStamp-16.7),4,50);Oe.lastT=i.timeStamp,Oe.y+=e*.006,Oe.vy=e*.006*16.7/n,Oe.x=Ee.clamp(Oe.x+t*.003,-.35,.35),Oe.moved>12&&Dn&&b0()}});rn.addEventListener("pointerdown",i=>{if(z.on&&z.playing&&(z.targetX=Vm(i.clientX),Pl()),z.on){z.drag={id:i.pointerId,x:i.clientX,lx:i.clientX,t:performance.now(),moved:0};try{rn.setPointerCapture(i.pointerId)}catch{}return}if(we.ball&&!zt&&!re.on&&we.ball.parent===be){let e=we.ball.position.clone().project(Dt),t=(e.x+1)/2*innerWidth,n=(1-e.y)/2*innerHeight;if(Math.hypot(i.clientX-t,i.clientY-n)<Math.min(innerWidth,innerHeight)*.12){re.grab={id:i.pointerId,pts:[[i.clientX,i.clientY,performance.now()]]};try{rn.setPointerCapture(i.pointerId)}catch{}return}}Un.x=i.clientX,Un.y=i.clientY,Un.down=!0,nt.hold=4,Oe.dragging=!0,Oe.lastX=i.clientX,Oe.lastY=i.clientY,Oe.lastT=i.timeStamp,Oe.moved=0;try{rn.setPointerCapture(i.pointerId)}catch{}});function _0(i){if(z.on){let e=z.drag;z.drag=null,e&&e.id===i.pointerId&&i.type==="pointerup"&&e.moved<10&&performance.now()-e.t<350&&f0();return}if(re.grab&&re.grab.id===i.pointerId){let e=re.grab.pts;re.grab=null;try{let t=e[0],n=e[e.length-1],s=e.length-1;for(;s>0&&n[2]-e[s-1][2]<120;)s--;let r=e[s],a=Math.max(16,n[2]-r[2])/1e3,o=af(r[0],r[1]),c=af(n[0],n[1]),l=af(t[0],t[1]),h=c.clone().sub(o).divideScalar(a);h.y=0;let u=c.clone().sub(l);u.y=0;let f=t[1]-n[1],p=Ee.clamp(Math.max(0,f)/(innerHeight*.35),0,1);if(h.z*=.35,u.z*=.35,i.pointerType==="touch"){let b=u.clone().multiplyScalar(6);b.length()>h.length()?h.copy(b):h.multiplyScalar(1.4)}else h.length()<.8&&u.length()>.15&&h.copy(u).multiplyScalar(4);p>.05&&(h.z-=p*2.2),(h.length()>.5||p>.05)&&(h.z=Ee.clamp(h.z,-2.6,2),m0(h.clampLength(0,7.5),1.2+p*9))}catch(t){console.error("flick",t)}return}Un.down=!1,Oe.dragging=!1,i.type==="pointerup"&&we.mode&&Oe.moved<10&&i.target===rn&&UM(i.clientX,i.clientY)}addEventListener("pointerup",_0);addEventListener("pointercancel",_0);addEventListener("keydown",i=>{z.on&&((i.code==="Space"||i.code==="ArrowUp")&&(i.preventDefault(),f0()),i.code==="ArrowLeft"&&(z.targetX=B.position.x-.6,Pl()),i.code==="ArrowRight"&&(z.targetX=B.position.x+.6,Pl()))});rn.addEventListener("dblclick",()=>{Oe.y=0,Oe.x=0,Oe.vy=0,qt.target=1.3});rn.addEventListener("wheel",i=>{i.preventDefault(),qt.target=Ee.clamp(qt.target*(1+Math.sign(i.deltaY)*.08),qt.min,qt.max)},{passive:!1});var Ts=new Map;rn.addEventListener("pointerdown",i=>{i.pointerType==="touch"&&!(re.grab&&re.grab.id===i.pointerId)&&Ts.set(i.pointerId,[i.clientX,i.clientY])});rn.addEventListener("pointermove",i=>{if(Ts.has(i.pointerId)&&(Ts.set(i.pointerId,[i.clientX,i.clientY]),Ts.size===2)){let[e,t]=[...Ts.values()],n=Math.hypot(e[0]-t[0],e[1]-t[1]);qt.pinch&&(qt.target=Ee.clamp(qt.target*(qt.pinch/n),qt.min,qt.max)),qt.pinch=n,Oe.dragging=!1}});addEventListener("pointerup",i=>{Ts.delete(i.pointerId),Ts.size<2&&(qt.pinch=0)});addEventListener("pointercancel",i=>{Ts.delete(i.pointerId),qt.pinch=0});addEventListener("pointerleave",()=>{Un.x=-1,Oe.dragging=!1});rn.style.touchAction="none";rn.addEventListener("touchmove",i=>i.preventDefault(),{passive:!1});rn.addEventListener("touchstart",i=>{i.touches.length===1&&i.preventDefault()},{passive:!1});var ts=i=>new Promise(e=>setTimeout(e,i)),zM=ba?22e5:32e5,$i=1;function Yl(){let i=rn.clientWidth||innerWidth,e=rn.clientHeight||innerHeight,t=Math.min(devicePixelRatio||1,ba?1.5:2,Math.sqrt(zM/(i*e)))*$i;wn.setPixelRatio(Math.max(.75,t)),wn.setSize(i,e,!1),Dt.aspect=i/e,Dt.updateProjectionMatrix()}addEventListener("resize",Yl);Yl();window.ResizeObserver&&new ResizeObserver(Yl).observe(rn);var Zi={acc:0,n:0,t:0};function VM(i){if(Zi.acc+=i,Zi.n++,Zi.t+=i,Zi.t<2)return;let e=Zi.acc/Zi.n;Zi.acc=Zi.n=Zi.t=0;let t=$i;e>1/45&&$i>.55?$i=Math.max(.55,$i-.15):e<1/58&&$i<1&&($i=Math.min(1,$i+.1)),$i!==t&&Yl()}function Rl(i,e){let t=e!==void 0?e:Math.min(cm.getDelta(),.05);e===void 0&&document.visibilityState==="visible"&&VM(t);let n=cm.elapsedTime;dr.material.uniforms.uTime.value=n,To.material.uniforms.uTime.value=n,dr.rotation.z=n*.004,To.rotation.z=-n*.006;let s=Gl[Jn];ci.tPos.fromArray(s.pos),ci.tLook.fromArray(s.look);let r=innerWidth/innerHeight<.62?1:.85;if(qt.v+=(qt.target-qt.v)*ca(.12,t),ci.tPos.sub(ci.tLook).multiplyScalar(qt.v*r).add(ci.tLook),ci.pos.lerp(ci.tPos,ca(.06,t)),ci.look.lerp(ci.tLook,ca(.06,t)),Dt.position.copy(ci.pos),Dt.lookAt(ci.look),Wn){if(z.on)Zm(t);else{if(we.pos){let g=we.pos.clone().sub(B.position);g.y=0;let b=g.length(),m=Math.min(b,yf*t);b>1e-4&&B.position.addScaledVector(g.normalize(),m)}else B.position.lerp(ua.fromArray(s.model),ca(.06,t));if(is.position.set(B.position.x,B.position.y+.005,B.position.z),!Oe.dragging){let p=t*60;Oe.y+=Oe.vy*p,Oe.vy*=Math.pow(.92,p),Oe.x*=Math.pow(.95,p)}if(we.yaw!==null){let p=1-Math.pow(.02,t);Oe.y-=Oe.y*p,Oe.x-=Oe.x*p,Oe.vy=0}let h=Jn==="s1"?-.35:Jn==="s3"?-.5:-.2,f=(we.yaw!==null?h+we.yaw:Math.sin(n*.35)*.06+h+Oe.y)-B.rotation.y;f=Math.atan2(Math.sin(f),Math.cos(f)),B.rotation.y+=f*(we.yaw!==null?ca(.18,t):1),B.rotation.x=Oe.x}if(Tv(),Li.update(t),of.length){let h=En.belly,u=h&&h.isRunning()?h.getEffectiveWeight():0,f=u>0?u*dv(fi.belly.a+h.time*ns):0;for(let p of of)p.morphTargetInfluences[p.morphTargetDictionary.Flat]=f}if(z.on&&PM(t),ui&&Kn){let h=new _n().setFromQuaternion(Kn.quaternion,"XYZ");h.x<nm&&(h.x=nm,Kn.quaternion.setFromEuler(h))}let a=En.belly,c=(a&&a.isRunning()?pv(fi.belly.a+a.time*ns):1)*Ee.degToRad(Dn||z.on&&z.wag>0?li.amp*2.2:Rt.state==="sitting"?li.amp*.3:li.amp),l=n*(Dn?li.speed*1.8:li.speed)*Math.PI*2;for(let h=0;h<5;h++){let u=li.bones[h];if(!u)continue;let f=c*li.gains[h]*Math.sin(l-li.lags[h]),p=c*.25*li.gains[h]*Math.sin(l-li.lags[h]+Math.PI/2);am.setFromAxisAngle(Ev,f),om.setFromAxisAngle(Sv,p),ha(u,am),ha(u,om)}if(!zt&&!we.mode){let h=Math.sin(n*2*Math.PI*.32);Lt("chest",.018*h,0,0),Lt("spine",-.012*h,0,0),Lt("neck",.02*Math.sin(n*1.1),.03*Math.sin(n*.7+1),.02*Math.sin(n*.9+2)),Lt("head",.025*Math.sin(n*.8+.5),.04*Math.sin(n*.55+2.3),.03*Math.sin(n*.65+4));let u=.04*Math.sin(n*1.6)+.02*h;Lt("ear1L",u,0,0),Lt("ear1R",u,0,0),Lt("ear2L",u*1.4,0,0),Lt("ear2R",u*1.4,0,0)}wl||(wl=[],Wn.traverse(h=>{h.isMesh&&h.material.userData.uni&&wl.push(h.material.userData.uni)}));for(let h of wl)h.uTime.value=n;LM(t),Uv(t),HM(t),kM(t),Dn&&b0()}NM(t),we.ball&&we.ball.visible&&!re.on&&we.ball.parent===be&&!zt&&(we.ball.position.y=Pi()),vv(t),_f.uniforms.pxPerUnit.value=wn.domElement.height*.5*Dt.projectionMatrix.elements[5],e===void 0&&(wn.render(be,Dt),requestAnimationFrame(Rl))}(async()=>{try{await Iv()}catch(e){console.error(e),Je("#loading").textContent="\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u041E\u0440\u0438";return}try{await wn.compileAsync(be,Dt)}catch(e){console.error(e)}Je("#loading").style.opacity=0,setTimeout(()=>Je("#loading").remove(),500);let i=ma.get();i&&i.date===Ll&&i.phrase&&(_o=i.phrase,Je("#phrase").textContent=i.phrase,Km(i.shine),Vl("s3"),xa("s3")),st("idle"),window.__ori={get actions(){return En},get mixer(){return Li},play:st,game:z,tick:Rl,sim:e=>Rl(0,e),toScreen:bn,startGame:Xl,camera:Dt,renderer:wn,eyes:nt,blink:It,spin:Oe,pointer:Un,flick:(e,t)=>m0(new R(e,0,t)),get pivot(){return B},get ball(){return we.ball},scene:be,phys:re,sit:Rt,pant:Ht,get busy(){return zt},get cur(){return In&&In.getClip().name},get pupil(){let e=nt.pupils[0];return e?[e.node.position.x-e.base.x,e.node.position.y-e.base.y,e.node.position.z-e.base.z]:null}},Rl(),setTimeout(GM,800)})();function GM(){let i=new Xt,e=Sn.ice.clone();e.emissiveMap=s0[1],e.emissive.set(16777215);for(let t of[...Sn.planet,Sn.ice,e,Sn.hot,Sn.lime,Sn.belt])i.add(new We(qn.planet,t));i.add(new We(qn.rock,Sn.rock));for(let t of[pa,i0,Af,r0,a0,Wm,o0.rocket])i.add(new Bt(new Ot({map:t,transparent:!0,depthWrite:!1})));i.add(new Bt(new Ot({map:pa,transparent:!0,depthWrite:!1,blending:sn}))),i.add(new _i(new Pt,new Wr({color:16448252,transparent:!0,opacity:.28}))),i.add(d0()),wn.compileAsync(i,Dt,be).catch(t=>console.error(t))}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
