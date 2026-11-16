(()=>{var Hd=0,qh=1,zd=2;var Yh=1,Vd=2,Li=3,ui=0,rn=1,an=2,ns=0,Ys=1,tn=2,jh=3,Kh=4,Gd=5,vs=100,Wd=101,Xd=102,qd=103,Yd=104,jd=200,Kd=201,Jd=202,Zd=203,pc=204,mc=205,$d=206,Qd=207,ep=208,tp=209,np=210,ip=211,sp=212,rp=213,ap=214,Uc=0,Fc=1,Nc=2,js=3,Oc=4,kc=5,Bc=6,Hc=7,Jh=0,op=1,cp=2,is=0,lp=1,hp=2,up=3,zc=4,fp=5,dp=6,pp=7,Nh="attached",mp="detached",Zh=300,lr=301,hr=302,Vc=303,Gc=304,go=306,fi=1e3,Mi=1001,Vr=1002,nn=1003,Wc=1004;var ur=1005;var _n=1006,na=1007;var di=1008;var pi=1009,$h=1010,Qh=1011,ia=1012,Xc=1013,Cs=1014,Zn=1015,sa=1016,qc=1017,Yc=1018,ra=1020,eu=35902,tu=1021,nu=1022,Hn=1023,Gr=1026,aa=1027,jc=1028,Kc=1029,iu=1030,Jc=1031;var Zc=1033,bo=33776,xo=33777,yo=33778,_o=33779,$c=35840,Qc=35841,el=35842,tl=35843,nl=36196,il=37492,sl=37496,rl=37808,al=37809,ol=37810,cl=37811,ll=37812,hl=37813,ul=37814,fl=37815,dl=37816,pl=37817,ml=37818,gl=37819,bl=37820,xl=37821,vo=36492,yl=36494,_l=36495,su=36283,vl=36284,Ml=36285,Sl=36286,Mo=2200,So=2201,gp=2202,Ks=2300,Js=2301,dc=2302,Ws=2400,Xs=2401,Va=2402,El=2500,Eo=2501,ru=0,wo=1,oa=2,bp=3200,xp=3201;var au=0,yp=1,ss="",Mt="srgb",sn="srgb-linear",Ga="linear",xt="srgb";var Gs=7680;var Oh=519,_p=512,vp=513,Mp=514,ou=515,Sp=516,Ep=517,wp=518,Tp=519,gc=35044,ca=35048;var cu="300 es",Si=2e3,Wa=2001;var wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=1234567,Ha=Math.PI/180,Zs=180/Math.PI;function hi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function lu(i,e){return(i%e+e)%e}function W0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function X0(i,e,t){return i!==e?(t-i)/(e-i):0}function za(i,e,t){return(1-t)*i+t*e}function q0(i,e,t,n){return za(i,e,1-Math.exp(-t*n))}function Y0(i,e=1){return e-Math.abs(lu(i,e*2)-e)}function j0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function K0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function J0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Z0(i,e){return i+Math.random()*(e-i)}function $0(i){return i*(.5-Math.random())}function Q0(i){i!==void 0&&(ed=i);let e=ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function eg(i){return i*Ha}function tg(i){return i*Zs}function ng(i){return(i&i-1)===0&&i!==0}function ig(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Se={DEG2RAD:Ha,RAD2DEG:Zs,generateUUID:hi,clamp:Qe,euclideanModulo:lu,mapLinear:W0,inverseLerp:X0,lerp:za,damp:q0,pingpong:Y0,smoothstep:j0,smootherstep:K0,randInt:J0,randFloat:Z0,randFloatSpread:$0,seededRandom:Q0,degToRad:eg,radToDeg:tg,isPowerOfTwo:ng,ceilPowerOfTwo:ig,floorPowerOfTwo:sg,setQuaternionFromProperEuler:rg,normalize:bt,denormalize:li},Pe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(u!==y||c!==f||l!==p||h!==g){let m=1-o,d=c*f+l*p+h*g+u*y,_=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let b=Math.sqrt(E),S=Math.atan2(b,d*_);m=Math.sin(m*S)/b,o=Math.sin(o*S)/b}let x=o*_;if(c=c*m+f*x,l=l*m+p*x,h=h*m+g*x,u=u*m+y*x,m===1-o){let b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*p-l*f,e[t+1]=c*g+h*f+l*u-o*p,e[t+2]=l*g+h*p+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(td.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ch.copy(this).projectOnVector(e),this.sub(ch)}reflect(e){return this.sub(ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ch=new R,td=new Lt,Ye=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],y=s[0],m=s[3],d=s[6],_=s[1],E=s[4],x=s[7],b=s[2],S=s[5],A=s[8];return r[0]=a*y+o*_+c*b,r[3]=a*m+o*E+c*S,r[6]=a*d+o*x+c*A,r[1]=l*y+h*_+u*b,r[4]=l*m+h*E+u*S,r[7]=l*d+h*x+u*A,r[2]=f*y+p*_+g*b,r[5]=f*m+p*E+g*S,r[8]=f*d+p*x+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,p=l*r-a*c,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*l-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=f*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(lh.makeScale(e,t)),this}rotate(e){return this.premultiply(lh.makeRotation(-e)),this}translate(e,t){return this.premultiply(lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lh=new Ye;function hu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ap(){let i=Wr("canvas");return i.style.display="block",i}var nd={};function $s(i){i in nd||(nd[i]=!0,console.warn(i))}function Rp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Cp(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Pp(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var id=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ag(){let i={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=zr(s.r),s.g=zr(s.g),s.b=zr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?Ga:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sn]:{primaries:e,whitePoint:n,transfer:Ga,toXYZ:id,fromXYZ:sd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:id,fromXYZ:sd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}var st=ag();function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Sr,bc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Sr===void 0&&(Sr=Wr("canvas")),Sr.width=e.width,Sr.height=e.height;let s=Sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Sr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ji(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},og=0,Xr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(hh(s[a].image)):r.push(hh(s[a]))}else r=hh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function hh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cg=0,uh=new R,Jt=class i extends wi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Mi,s=Mi,r=_n,a=di,o=Hn,c=pi,l=i.DEFAULT_ANISOTROPY,h=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=hi(),this.name="",this.source=new Xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uh).x}get height(){return this.source.getSize(uh).y}get depth(){return this.source.getSize(uh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fi:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case Vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fi:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case Vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Zh;Jt.DEFAULT_ANISOTROPY=1;var lt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],y=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,x=(p+1)/2,b=(d+1)/2,S=(h+f)/4,A=(u+y)/4,C=(g+m)/4;return E>x&&E>b?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=S/n,r=A/n):x>b?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=C/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=C/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-y)/_,this.z=(f-h)/_,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xc=class extends wi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Jt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Xr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends xc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xa=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yc=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ai):ai.fromBufferAttribute(r,a),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ho.copy(n.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ca),zo.subVectors(this.max,Ca),Er.subVectors(e.a,Ca),wr.subVectors(e.b,Ca),Tr.subVectors(e.c,Ca),ms.subVectors(wr,Er),gs.subVectors(Tr,wr),Bs.subVectors(Er,Tr);let t=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Bs.z,Bs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Bs.z,0,-Bs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Bs.y,Bs.x,0];return!fh(t,Er,wr,Tr,zo)||(t=[1,0,0,0,1,0,0,0,1],!fh(t,Er,wr,Tr,zo))?!1:(Vo.crossVectors(ms,gs),t=[Vo.x,Vo.y,Vo.z],fh(t,Er,wr,Tr,zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gi=[new R,new R,new R,new R,new R,new R,new R,new R],ai=new R,Ho=new vn,Er=new R,wr=new R,Tr=new R,ms=new R,gs=new R,Bs=new R,Ca=new R,zo=new R,Vo=new R,Hs=new R;function fh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hs.fromArray(i,r);let o=s.x*Math.abs(Hs.x)+s.y*Math.abs(Hs.y)+s.z*Math.abs(Hs.z),c=e.dot(Hs),l=t.dot(Hs),h=n.dot(Hs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var lg=new vn,Pa=new R,dh=new R,An=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):lg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);let t=Pa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Pa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(dh)),this.expandByPoint(Pa.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Wi=new R,ph=new R,Go=new R,bs=new R,mh=new R,Wo=new R,gh=new R,Ms=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ph.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),bs.copy(this.origin).sub(ph);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Go),o=bs.dot(this.direction),c=-bs.dot(Go),l=bs.lengthSq(),h=Math.abs(1-a*a),u,f,p,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ph).addScaledVector(Go,f),p}intersectSphere(e,t){Wi.subVectors(e.center,this.origin);let n=Wi.dot(this.direction),s=Wi.dot(Wi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,n,s,r){mh.subVectors(t,e),Wo.subVectors(n,e),gh.crossVectors(mh,Wo);let a=this.direction.dot(gh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bs.subVectors(this.origin,e);let c=o*this.direction.dot(Wo.crossVectors(bs,Wo));if(c<0)return null;let l=o*this.direction.dot(mh.cross(bs));if(l<0||c+l>a)return null;let h=-o*bs.dot(gh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,f,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,f,p,g,y,m)}set(e,t,n,s,r,a,o,c,l,h,u,f,p,g,y,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ar.setFromMatrixColumn(e,0).length(),r=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*u,g=o*h,y=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-y*l,t[9]=-o*c,t[2]=y-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,g=l*h,y=l*u;t[0]=f+y*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=y+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,g=l*h,y=l*u;t[0]=f-y*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=y-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,p=a*u,g=o*h,y=o*u;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+y,t[1]=c*u,t[5]=y*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,g=o*c,y=o*l;t[0]=c*h,t[4]=y-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+g,t[10]=f-y*u}else if(e.order==="XZY"){let f=a*c,p=a*l,g=o*c,y=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+y,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hg,e,ug)}lookAt(e,t,n){let s=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),xs.crossVectors(n,kn),xs.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),xs.crossVectors(n,kn)),xs.normalize(),Xo.crossVectors(kn,xs),s[0]=xs.x,s[4]=Xo.x,s[8]=kn.x,s[1]=xs.y,s[5]=Xo.y,s[9]=kn.y,s[2]=xs.z,s[6]=Xo.z,s[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],y=n[6],m=n[10],d=n[14],_=n[3],E=n[7],x=n[11],b=n[15],S=s[0],A=s[4],C=s[8],v=s[12],M=s[1],I=s[5],B=s[9],U=s[13],O=s[2],W=s[6],H=s[10],K=s[14],Y=s[3],he=s[7],ge=s[11],Ae=s[15];return r[0]=a*S+o*M+c*O+l*Y,r[4]=a*A+o*I+c*W+l*he,r[8]=a*C+o*B+c*H+l*ge,r[12]=a*v+o*U+c*K+l*Ae,r[1]=h*S+u*M+f*O+p*Y,r[5]=h*A+u*I+f*W+p*he,r[9]=h*C+u*B+f*H+p*ge,r[13]=h*v+u*U+f*K+p*Ae,r[2]=g*S+y*M+m*O+d*Y,r[6]=g*A+y*I+m*W+d*he,r[10]=g*C+y*B+m*H+d*ge,r[14]=g*v+y*U+m*K+d*Ae,r[3]=_*S+E*M+x*O+b*Y,r[7]=_*A+E*I+x*W+b*he,r[11]=_*C+E*B+x*H+b*ge,r[15]=_*v+E*U+x*K+b*Ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],y=e[7],m=e[11],d=e[15];return g*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*p-n*c*p)+y*(+t*c*p-t*l*f+r*a*f-s*a*p+s*l*h-r*c*h)+m*(+t*l*u-t*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+d*(-s*o*h-t*c*u+t*o*f+s*a*u-n*a*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],y=e[13],m=e[14],d=e[15],_=u*m*l-y*f*l+y*c*p-o*m*p-u*c*d+o*f*d,E=g*f*l-h*m*l-g*c*p+a*m*p+h*c*d-a*f*d,x=h*y*l-g*u*l+g*o*p-a*y*p-h*o*d+a*u*d,b=g*u*c-h*y*c-g*o*f+a*y*f+h*o*m-a*u*m,S=t*_+n*E+s*x+r*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/S;return e[0]=_*A,e[1]=(y*f*r-u*m*r-y*s*p+n*m*p+u*s*d-n*f*d)*A,e[2]=(o*m*r-y*c*r+y*s*l-n*m*l-o*s*d+n*c*d)*A,e[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*p-n*c*p)*A,e[4]=E*A,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*A,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*d-t*c*d)*A,e[7]=(a*f*r-h*c*r+h*s*l-t*f*l-a*s*p+t*c*p)*A,e[8]=x*A,e[9]=(g*u*r-h*y*r-g*n*p+t*y*p+h*n*d-t*u*d)*A,e[10]=(a*y*r-g*o*r+g*n*l-t*y*l-a*n*d+t*o*d)*A,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*p-t*o*p)*A,e[12]=b*A,e[13]=(h*y*s-g*u*s+g*n*f-t*y*f-h*n*m+t*u*m)*A,e[14]=(g*o*s-a*y*s-g*n*c+t*y*c+a*n*m-t*o*m)*A,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*f+t*o*f)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,p=r*h,g=r*u,y=a*h,m=a*u,d=o*u,_=c*l,E=c*h,x=c*u,b=n.x,S=n.y,A=n.z;return s[0]=(1-(y+d))*b,s[1]=(p+x)*b,s[2]=(g-E)*b,s[3]=0,s[4]=(p-x)*S,s[5]=(1-(f+d))*S,s[6]=(m+_)*S,s[7]=0,s[8]=(g+E)*A,s[9]=(m-_)*A,s[10]=(1-(f+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ar.set(s[0],s[1],s[2]).length(),a=Ar.set(s[4],s[5],s[6]).length(),o=Ar.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],oi.copy(this);let l=1/r,h=1/a,u=1/o;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,t.setFromRotationMatrix(oi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Si){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(o===Si)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Wa)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Si){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),f=(t+e)*l,p=(n+s)*h,g,y;if(o===Si)g=(a+r)*u,y=-2*u;else if(o===Wa)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ar=new R,oi=new We,hg=new R(0,0,0),ug=new R(1,1,1),xs=new R,Xo=new R,kn=new R,rd=new We,ad=new Lt,Rn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ad.setFromEuler(this),this.setFromQuaternion(ad,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fg=0,od=new R,Rr=new Lt,Xi=new We,qo=new R,Ia=new R,dg=new R,pg=new Lt,cd=new R(1,0,0),ld=new R(0,1,0),hd=new R(0,0,1),ud={type:"added"},mg={type:"removed"},Cr={type:"childadded",child:null},bh={type:"childremoved",child:null},yt=class i extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new Rn,n=new Lt,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new Ye}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(cd,e)}rotateY(e){return this.rotateOnAxis(ld,e)}rotateZ(e){return this.rotateOnAxis(hd,e)}translateOnAxis(e,t){return od.copy(e).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cd,e)}translateY(e){return this.translateOnAxis(ld,e)}translateZ(e){return this.translateOnAxis(hd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qo.copy(e):qo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Ia,qo,this.up):Xi.lookAt(qo,Ia,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),Rr.setFromRotationMatrix(Xi),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ud),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mg),bh.child=e,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ud),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,e,dg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,pg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};yt.DEFAULT_UP=new R(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ci=new R,qi=new R,xh=new R,Yi=new R,Pr=new R,Ir=new R,fd=new R,yh=new R,_h=new R,vh=new R,Mh=new lt,Sh=new lt,Eh=new lt,Ki=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ci.subVectors(e,t),s.cross(ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ci.subVectors(s,t),qi.subVectors(n,t),xh.subVectors(e,t);let a=ci.dot(ci),o=ci.dot(qi),c=ci.dot(xh),l=qi.dot(qi),h=qi.dot(xh),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yi.x),c.addScaledVector(a,Yi.y),c.addScaledVector(o,Yi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Mh.setScalar(0),Sh.setScalar(0),Eh.setScalar(0),Mh.fromBufferAttribute(e,t),Sh.fromBufferAttribute(e,n),Eh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Mh,r.x),a.addScaledVector(Sh,r.y),a.addScaledVector(Eh,r.z),a}static isFrontFacing(e,t,n,s){return ci.subVectors(n,t),qi.subVectors(e,t),ci.cross(qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),ci.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Pr.subVectors(s,n),Ir.subVectors(r,n),yh.subVectors(e,n);let c=Pr.dot(yh),l=Ir.dot(yh);if(c<=0&&l<=0)return t.copy(n);_h.subVectors(e,s);let h=Pr.dot(_h),u=Ir.dot(_h);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Pr,a);vh.subVectors(e,r);let p=Pr.dot(vh),g=Ir.dot(vh);if(g>=0&&p<=g)return t.copy(r);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ir,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return fd.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(fd,o);let d=1/(m+y+f);return a=y*d,o=f*d,t.copy(n).addScaledVector(Pr,a).addScaledVector(Ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function wh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=lu(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=wh(a,r,e+1/3),this.g=wh(a,r,e),this.b=wh(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=Ip[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return st.workingToColorSpace(un.copy(this),e),Math.round(Qe(un.r*255,0,255))*65536+Math.round(Qe(un.g*255,0,255))*256+Math.round(Qe(un.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(un.copy(this),t);let n=un.r,s=un.g,r=un.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Mt){st.workingToColorSpace(un.copy(this),e);let t=un.r,n=un.g,s=un.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(Yo);let n=za(ys.h,Yo.h,t),s=za(ys.s,Yo.s,t),r=za(ys.l,Yo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new Te;Te.NAMES=Ip;var gg=0,Mn=class extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Ys,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pc&&(n.blendSrc=this.blendSrc),this.blendDst!==mc&&(n.blendDst=this.blendDst),this.blendEquation!==vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Wt=class extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var qt=new R,jo=new Pe,bg=0,wt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gc,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jo.fromBufferAttribute(this,t),jo.applyMatrix3(e),this.setXY(t,jo.x,jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),e}};var qa=class extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ya=class extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var pt=class extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},xg=0,jn=new We,Th=new yt,Lr=new R,Bn=new vn,La=new vn,en=new R,Dt=class i extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hu(e)?Ya:qa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return Th.lookAt(e),Th.updateMatrix(),this.applyMatrix4(Th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];La.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Bn.min,La.min),Bn.expandByPoint(en),en.addVectors(Bn.max,La.max),Bn.expandByPoint(en)):(Bn.expandByPoint(La.min),Bn.expandByPoint(La.max))}Bn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)en.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(en));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)en.fromBufferAttribute(o,l),c&&(Lr.fromBufferAttribute(e,l),en.add(Lr)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new R,c[C]=new R;let l=new R,h=new R,u=new R,f=new Pe,p=new Pe,g=new Pe,y=new R,m=new R;function d(C,v,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),p.sub(f),g.sub(f);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),o[C].add(y),o[v].add(y),o[M].add(y),c[C].add(m),c[v].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,v=_.length;C<v;++C){let M=_[C],I=M.start,B=M.count;for(let U=I,O=I+B;U<O;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let E=new R,x=new R,b=new R,S=new R;function A(C){b.fromBufferAttribute(s,C),S.copy(b);let v=o[C];E.copy(v),E.sub(b.multiplyScalar(b.dot(v))).normalize(),x.crossVectors(S,v);let I=x.dot(c[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,I)}for(let C=0,v=_.length;C<v;++C){let M=_[C],I=M.start,B=M.count;for(let U=I,O=I+B;U<O;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new wt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dd=new We,zs=new Ms,Ko=new An,pd=new R,Jo=new R,Zo=new R,$o=new R,Ah=new R,Qo=new R,md=new R,ec=new R,ke=class extends yt{constructor(e=new Dt,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Qo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Ah.fromBufferAttribute(u,e),a?Qo.addScaledVector(Ah,h):Qo.addScaledVector(Ah.sub(t),h))}t.add(Qo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(r),zs.copy(e.ray).recast(e.near),!(Ko.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Ko,pd)===null||zs.origin.distanceToSquared(pd)>(e.far-e.near)**2))&&(dd.copy(r).invert(),zs.copy(e.ray).applyMatrix4(dd),!(n.boundingBox!==null&&zs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,b=E;x<b;x+=3){let S=o.getX(x),A=o.getX(x+1),C=o.getX(x+2);s=tc(this,d,e,n,l,h,u,S,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){let _=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);s=tc(this,a,e,n,l,h,u,_,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,b=E;x<b;x+=3){let S=x,A=x+1,C=x+2;s=tc(this,d,e,n,l,h,u,S,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){let _=m,E=m+1,x=m+2;s=tc(this,a,e,n,l,h,u,_,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function yg(i,e,t,n,s,r,a,o){let c;if(e.side===rn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ui,o),c===null)return null;ec.copy(o),ec.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ec);return l<t.near||l>t.far?null:{distance:l,point:ec.clone(),object:i}}function tc(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Jo),i.getVertexPosition(c,Zo),i.getVertexPosition(l,$o);let h=yg(i,e,t,n,Jo,Zo,$o,md);if(h){let u=new R;Ki.getBarycoord(md,Jo,Zo,$o,u),s&&(h.uv=Ki.getInterpolatedAttribute(s,o,c,l,u,new Pe)),r&&(h.uv1=Ki.getInterpolatedAttribute(r,o,c,l,u,new Pe)),a&&(h.normal=Ki.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new R,materialIndex:0};Ki.getNormal(Jo,Zo,$o,f.normal),h.face=f,h.barycoord=u}return h}var Kn=class i extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(u,2));function g(y,m,d,_,E,x,b,S,A,C,v){let M=x/A,I=b/C,B=x/2,U=b/2,O=S/2,W=A+1,H=C+1,K=0,Y=0,he=new R;for(let ge=0;ge<H;ge++){let Ae=ge*I-U;for(let qe=0;qe<W;qe++){let St=qe*M-B;he[y]=St*_,he[m]=Ae*E,he[d]=O,l.push(he.x,he.y,he.z),he[y]=0,he[m]=0,he[d]=S>0?1:-1,h.push(he.x,he.y,he.z),u.push(qe/A),u.push(1-ge/C),K+=1}}for(let ge=0;ge<C;ge++)for(let Ae=0;Ae<A;Ae++){let qe=f+Ae+W*ge,St=f+Ae+W*(ge+1),Z=f+(Ae+1)+W*(ge+1),re=f+(Ae+1)+W*ge;c.push(qe,St,re),c.push(St,Z,re),Y+=6}o.addGroup(p,Y,v),p+=Y,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function fr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=fr(i[t]);for(let s in n)e[s]=n[s]}return e}function _g(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var Lp={clone:fr,merge:fn},vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vg,this.fragmentShader=Mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=_g(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ja=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_s=new R,gd=new Pe,bd=new Pe,Yt=class extends ja{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_s.x,_s.y).multiplyScalar(-e/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-e/_s.z)}getViewSize(e,t){return this.getViewBounds(e,gd,bd),t.subVectors(bd,gd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ha*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Dr=-90,Ur=1,_c=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Yt(Dr,Ur,e,t);s.layers=this.layers,this.add(s);let r=new Yt(Dr,Ur,e,t);r.layers=this.layers,this.add(r);let a=new Yt(Dr,Ur,e,t);a.layers=this.layers,this.add(a);let o=new Yt(Dr,Ur,e,t);o.layers=this.layers,this.add(o);let c=new Yt(Dr,Ur,e,t);c.layers=this.layers,this.add(c);let l=new Yt(Dr,Ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ka=class extends Jt{constructor(e=[],t=lr,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vc=class extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ka(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kn(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ns});r.uniforms.tEquirect.value=t;let a=new ke(s,r),o=t.minFilter;return t.minFilter===di&&(t.minFilter=_n),new _c(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Gt=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sg={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),d=this._getHandJoint(l,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Qs=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},er=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gc,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new R,Ss=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=li(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ct=class extends Mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fr,Da=new R,Nr=new R,Or=new R,kr=new Pe,Ua=new Pe,Dp=new We,nc=new R,Fa=new R,ic=new R,xd=new Pe,Rh=new Pe,yd=new Pe,Ut=class extends yt{constructor(e=new Ct){if(super(),this.isSprite=!0,this.type="Sprite",Fr===void 0){Fr=new Dt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new er(t,5);Fr.setIndex([0,1,2,0,2,3]),Fr.setAttribute("position",new Ss(n,3,0,!1)),Fr.setAttribute("uv",new Ss(n,2,3,!1))}this.geometry=Fr,this.material=e,this.center=new Pe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Nr.setFromMatrixScale(this.matrixWorld),Dp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Nr.multiplyScalar(-Or.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;sc(nc.set(-.5,-.5,0),Or,a,Nr,s,r),sc(Fa.set(.5,-.5,0),Or,a,Nr,s,r),sc(ic.set(.5,.5,0),Or,a,Nr,s,r),xd.set(0,0),Rh.set(1,0),yd.set(1,1);let o=e.ray.intersectTriangle(nc,Fa,ic,!1,Da);if(o===null&&(sc(Fa.set(-.5,.5,0),Or,a,Nr,s,r),Rh.set(0,1),o=e.ray.intersectTriangle(nc,ic,Fa,!1,Da),o===null))return;let c=e.ray.origin.distanceTo(Da);c<e.near||c>e.far||t.push({distance:c,point:Da.clone(),uv:Ki.getInterpolation(Da,nc,Fa,ic,xd,Rh,yd,new Pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function sc(i,e,t,n,s,r){kr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ua.x=r*kr.x-s*kr.y,Ua.y=s*kr.x+r*kr.y):Ua.copy(kr),i.copy(e),i.x+=Ua.x,i.y+=Ua.y,i.applyMatrix4(Dp)}var _d=new R,vd=new lt,Md=new lt,Eg=new R,Sd=new We,rc=new R,Ch=new An,Ed=new We,Ph=new Ms,Ja=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nh,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rc),this.boundingBox.expandByPoint(rc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new An),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rc),this.boundingSphere.expandByPoint(rc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ch.copy(this.boundingSphere),Ch.applyMatrix4(s),e.ray.intersectsSphere(Ch)!==!1&&(Ed.copy(s).invert(),Ph.copy(e.ray).applyMatrix4(Ed),!(this.boundingBox!==null&&Ph.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ph)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;vd.fromBufferAttribute(s.attributes.skinIndex,e),Md.fromBufferAttribute(s.attributes.skinWeight,e),_d.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Md.getComponent(r);if(a!==0){let o=vd.getComponent(r);Sd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Eg.copy(_d).applyMatrix4(Sd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},jr=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Za=class extends Jt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=nn,h=nn,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wd=new We,wg=new We,$a=class i{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:wg;wd.multiplyMatrices(o,t[r]),wd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Za(t,e,e,Hn,Zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new jr),this.bones.push(a),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Es=class extends wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Br=new We,Td=new We,ac=[],Ad=new vn,Tg=new We,Na=new ke,Oa=new An,tr=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Es(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Br),Ad.copy(e.boundingBox).applyMatrix4(Br),this.boundingBox.union(Ad)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Br),Oa.copy(e.boundingSphere).applyMatrix4(Br),this.boundingSphere.union(Oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Na.geometry=this.geometry,Na.material=this.material,Na.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oa.copy(this.boundingSphere),Oa.applyMatrix4(n),e.ray.intersectsSphere(Oa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Br),Td.multiplyMatrices(n,Br),Na.matrixWorld=Td,Na.raycast(e,ac);for(let a=0,o=ac.length;a<o;a++){let c=ac[a];c.instanceId=r,c.object=this,t.push(c)}ac.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Za(new Float32Array(s*this.count),s,this.count,jc,Zn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ih=new R,Ag=new R,Rg=new Ye,yn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ih.subVectors(n,t).cross(Ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ih),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rg.getNormalMatrix(e),s=this.coplanarPoint(Ih).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vs=new An,Cg=new Pe(.5,.5),oc=new R,Kr=class{constructor(e=new yn,t=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Si){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],y=s[10],m=s[11],d=s[12],_=s[13],E=s[14],x=s[15];if(n[0].setComponents(c-r,f-l,m-p,x-d).normalize(),n[1].setComponents(c+r,f+l,m+p,x+d).normalize(),n[2].setComponents(c+a,f+h,m+g,x+_).normalize(),n[3].setComponents(c-a,f-h,m-g,x-_).normalize(),n[4].setComponents(c-o,f-u,m-y,x-E).normalize(),t===Si)n[5].setComponents(c+o,f+u,m+y,x+E).normalize();else if(t===Wa)n[5].setComponents(o,u,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);let t=Cg.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(oc.x=s.normal.x>0?e.max.x:e.min.x,oc.y=s.normal.y>0?e.max.y:e.min.y,oc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var nr=class extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Mc=new R,Sc=new R,Rd=new We,ka=new Ms,cc=new An,Lh=new R,Cd=new R,Ai=class extends yt{constructor(e=new Dt,t=new nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Mc.fromBufferAttribute(t,s-1),Sc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Mc.distanceTo(Sc);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(s),cc.radius+=r,e.ray.intersectsSphere(cc)===!1)return;Rd.copy(s).invert(),ka.copy(e.ray).applyMatrix4(Rd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=l){let d=h.getX(y),_=h.getX(y+1),E=lc(this,e,ka,c,d,_,y);E&&t.push(E)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(p),d=lc(this,e,ka,c,y,m,g-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=l){let d=lc(this,e,ka,c,y,y+1,y);d&&t.push(d)}if(this.isLineLoop){let y=lc(this,e,ka,c,g-1,p,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lc(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Mc.fromBufferAttribute(o,s),Sc.fromBufferAttribute(o,r),t.distanceSqToSegment(Mc,Sc,Lh,Cd)>n)return;Lh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Lh);if(!(l<e.near||l>e.far))return{distance:l,point:Cd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Pd=new R,Id=new R,Qa=class extends Ai{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Pd.fromBufferAttribute(t,s),Id.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pd.distanceTo(Id);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},eo=class extends Ai{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Jr=class extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ld=new We,kh=new Ms,hc=new An,uc=new R,ws=class extends yt{constructor(e=new Dt,t=new Jr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hc.copy(n.boundingSphere),hc.applyMatrix4(s),hc.radius+=r,e.ray.intersectsSphere(hc)===!1)return;Ld.copy(s).invert(),kh.copy(e.ray).applyMatrix4(Ld);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=f,y=p;g<y;g++){let m=l.getX(g);uc.fromBufferAttribute(u,m),Dd(uc,m,c,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,y=p;g<y;g++)uc.fromBufferAttribute(u,g),Dd(uc,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Dd(i,e,t,n,s,r,a){let o=kh.distanceSqToPoint(i);if(o<t){let c=new R;kh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Jn=class extends Jt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},to=class extends Jt{constructor(e,t,n=Cs,s,r,a,o=nn,c=nn,l,h=Gr,u=1){if(h!==Gr&&h!==aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Zr=class i extends Dt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,y=[],m=n/2,d=0;_(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(f,3)),this.setAttribute("uv",new pt(p,2));function _(){let x=new R,b=new R,S=0,A=(t-e)/n;for(let C=0;C<=r;C++){let v=[],M=C/r,I=M*(t-e)+e;for(let B=0;B<=s;B++){let U=B/s,O=U*c+o,W=Math.sin(O),H=Math.cos(O);b.x=I*W,b.y=-M*n+m,b.z=I*H,u.push(b.x,b.y,b.z),x.set(W,A,H).normalize(),f.push(x.x,x.y,x.z),p.push(U,1-M),v.push(g++)}y.push(v)}for(let C=0;C<s;C++)for(let v=0;v<r;v++){let M=y[v][C],I=y[v+1][C],B=y[v+1][C+1],U=y[v][C+1];(e>0||v!==0)&&(h.push(M,I,U),S+=3),(t>0||v!==r-1)&&(h.push(I,B,U),S+=3)}l.addGroup(d,S,0),d+=S}function E(x){let b=g,S=new Pe,A=new R,C=0,v=x===!0?e:t,M=x===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;let I=g;for(let B=0;B<=s;B++){let O=B/s*c+o,W=Math.cos(O),H=Math.sin(O);A.x=v*H,A.y=m*M,A.z=v*W,u.push(A.x,A.y,A.z),f.push(0,M,0),S.x=W*.5+.5,S.y=H*.5*M+.5,p.push(S.x,S.y),g++}for(let B=0;B<s;B++){let U=b+B,O=I+B;x===!0?h.push(O,O+1,U):h.push(O+1,O,U),C+=3}l.addGroup(d,C,x===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},no=class i extends Zr{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},io=class i extends Dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(r.slice(),3)),this.setAttribute("uv",new pt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let E=new R,x=new R,b=new R;for(let S=0;S<t.length;S+=3)p(t[S+0],E),p(t[S+1],x),p(t[S+2],b),c(E,x,b,_)}function c(_,E,x,b){let S=b+1,A=[];for(let C=0;C<=S;C++){A[C]=[];let v=_.clone().lerp(x,C/S),M=E.clone().lerp(x,C/S),I=S-C;for(let B=0;B<=I;B++)B===0&&C===S?A[C][B]=v:A[C][B]=v.clone().lerp(M,B/I)}for(let C=0;C<S;C++)for(let v=0;v<2*(S-C)-1;v++){let M=Math.floor(v/2);v%2===0?(f(A[C][M+1]),f(A[C+1][M]),f(A[C][M])):(f(A[C][M+1]),f(A[C+1][M+1]),f(A[C+1][M]))}}function l(_){let E=new R;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(_),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function h(){let _=new R;for(let E=0;E<r.length;E+=3){_.x=r[E+0],_.y=r[E+1],_.z=r[E+2];let x=m(_)/2/Math.PI+.5,b=d(_)/Math.PI+.5;a.push(x,1-b)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let E=a[_+0],x=a[_+2],b=a[_+4],S=Math.max(E,x,b),A=Math.min(E,x,b);S>.9&&A<.1&&(E<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),b<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function p(_,E){let x=_*3;E.x=e[x+0],E.y=e[x+1],E.z=e[x+2]}function g(){let _=new R,E=new R,x=new R,b=new R,S=new Pe,A=new Pe,C=new Pe;for(let v=0,M=0;v<r.length;v+=9,M+=6){_.set(r[v+0],r[v+1],r[v+2]),E.set(r[v+3],r[v+4],r[v+5]),x.set(r[v+6],r[v+7],r[v+8]),S.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),C.set(a[M+4],a[M+5]),b.copy(_).add(E).add(x).divideScalar(3);let I=m(b);y(S,M+0,_,I),y(A,M+2,E,I),y(C,M+4,x,I)}}function y(_,E,x,b){b<0&&_.x===1&&(a[E]=_.x-1),x.x===0&&x.z===0&&(a[E]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},so=class i extends io{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var $r=class i extends io{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ir=class i extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,p=[],g=[],y=[],m=[];for(let d=0;d<h;d++){let _=d*f-a;for(let E=0;E<l;E++){let x=E*u-r;g.push(x,-_,0),y.push(0,0,1),m.push(E/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let _=0;_<o;_++){let E=_+l*d,x=_+l*(d+1),b=_+1+l*(d+1),S=_+1+l*d;p.push(E,x,S),p.push(x,b,S)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(y,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ts=class i extends Dt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,f=(t-e)/s,p=new R,g=new Pe;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let d=r+m/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let y=0;y<s;y++){let m=y*(n+1);for(let d=0;d<n;d++){let _=d+m,E=_,x=_+n+1,b=_+n+2,S=_+1;o.push(E,x,S),o.push(x,b,S)}}this.setIndex(o),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var sr=class i extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new R,f=new R,p=[],g=[],y=[],m=[];for(let d=0;d<=n;d++){let _=[],E=d/n,x=0;d===0&&a===0?x=.5/t:d===n&&c===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let S=b/t;u.x=-e*Math.cos(s+S*r)*Math.sin(a+E*o),u.y=e*Math.cos(a+E*o),u.z=e*Math.sin(s+S*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(S+x,1-E),_.push(l++)}h.push(_)}for(let d=0;d<n;d++)for(let _=0;_<t;_++){let E=h[d][_+1],x=h[d][_],b=h[d+1][_],S=h[d+1][_+1];(d!==0||a>0)&&p.push(E,x,S),(d!==n-1||c<Math.PI)&&p.push(x,b,S)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(y,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rr=class i extends Dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new R,u=new R,f=new R;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let y=g/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let y=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,_=(s+1)*p+g;a.push(y,m,_),a.push(m,d,_)}this.setIndex(a),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ht=class extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=au,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zt=class extends ht{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ec=class extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wc=class extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Qr=class extends nr{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function qs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Up(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fp(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Bh(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function fu(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function Pg(i,e,t,n,s=30){let r=i.clone();r.name=e;let a=[];for(let c=0;c<r.tracks.length;++c){let l=r.tracks[c],h=l.getValueSize(),u=[],f=[];for(let p=0;p<l.times.length;++p){let g=l.times[p]*s;if(!(g<t||g>=n)){u.push(l.times[p]);for(let y=0;y<h;++y)f.push(l.values[p*h+y])}}u.length!==0&&(l.times=qs(u,l.times.constructor),l.values=qs(f,l.values.constructor),a.push(l))}r.tracks=a;let o=1/0;for(let c=0;c<r.tracks.length;++c)o>r.tracks[c].times[0]&&(o=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*o);return r.resetDuration(),r}function Ig(i,e=0,t=i,n=30){n<=0&&(n=30);let s=t.tracks.length,r=e/n;for(let a=0;a<s;++a){let o=t.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;let l=i.tracks.find(function(d){return d.name===o.name&&d.ValueTypeName===c});if(l===void 0)continue;let h=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0,p=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);let g=o.times.length-1,y;if(r<=o.times[0]){let d=h,_=u-h;y=o.values.slice(d,_)}else if(r>=o.times[g]){let d=g*u+h,_=d+u-h;y=o.values.slice(d,_)}else{let d=o.createInterpolant(),_=h,E=u-h;d.evaluate(r),y=d.resultBuffer.slice(_,E)}c==="quaternion"&&new Lt().fromArray(y).normalize().conjugate().toArray(y);let m=l.times.length;for(let d=0;d<m;++d){let _=d*p+f;if(c==="quaternion")Lt.multiplyQuaternionsFlat(l.values,_,y,0,l.values,_);else{let E=p-f*2;for(let x=0;x<E;++x)l.values[_+x]-=y[x]}}}return i.blendMode=Eo,i}var As=class{static convertArray(e,t){return qs(e,t)}static isTypedArray(e){return Up(e)}static getKeyframeOrder(e){return Fp(e)}static sortedArray(e,t,n){return Bh(e,t,n)}static flattenJSON(e,t,n,s){fu(e,t,n,s)}static subclip(e,t,n,s,r=30){return Pg(e,t,n,s,r)}static makeClipAdditive(e,t=0,n=e,s=30){return Ig(e,t,n,s)}},Zi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Tc=class extends Zi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ws,endingEnd:Ws}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xs:r=e,o=2*t-n;break;case Va:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Xs:a=e,c=2*n-t;break;case Va:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,d=-f*m+2*f*y-f*g,_=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,E=(-1-p)*m+(1.5+p)*y+.5*g,x=p*m-p*y;for(let b=0;b!==o;++b)r[b]=d*a[h+b]+_*a[l+b]+E*a[c+b]+x*a[u+b];return r}},ro=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},Ac=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qs(t,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qs(e.times,Array),values:qs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ks:t=this.InterpolantFactoryMethodDiscrete;break;case Js:t=this.InterpolantFactoryMethodLinear;break;case dc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return Js;case this.InterpolantFactoryMethodSmooth:return dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Up(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===dc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[f+g]||y!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Js;var $i=class extends Pn{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Ks;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};ao.prototype.ValueTypeName="color";var Ri=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};Ri.prototype.ValueTypeName="number";var Rc=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Lt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ci=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Rc(this.times,this.values,this.getValueSize(),e)}};Ci.prototype.ValueTypeName="quaternion";Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Pn{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Ks;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};Pi.prototype.ValueTypeName="vector";var ar=class{constructor(e="",t=-1,n=[],s=El){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=hi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Dg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Pn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Fp(c);c=Bh(c,1,h),l=Bh(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Ri(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,g,y){if(p.length!==0){let m=[],d=[];fu(p,m,d,g),m.length!==0&&y.push(new u(f,m,d))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let y=0;y<f[g].morphTargets.length;y++)p[f[g].morphTargets[y]]=-1;for(let y in p){let m=[],d=[];for(let _=0;_!==f[g].morphTargets.length;++_){let E=f[g];m.push(E.time),d.push(E.morphTarget===y?1:0)}s.push(new Ri(".morphTargetInfluence["+y+"]",m,d))}c=p.length*a}else{let p=".bones["+t[u].name+"]";n(Pi,p+".position",f,"pos",s),n(Ci,p+".quaternion",f,"rot",s),n(Pi,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Lg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ri;case"vector":case"vector2":case"vector3":case"vector4":return Pi;case"color":return ao;case"quaternion":return Ci;case"bool":case"boolean":return $i;case"string":return Qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Dg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Lg(i.type);if(i.times===void 0){let t=[],n=[];fu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ei={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Cc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Np=new Cc,Ii=class{constructor(e){this.manager=e!==void 0?e:Np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji={},Hh=class extends Error{constructor(e,t){super(e),this.response=t}},ea=class extends Ii{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ei.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ji[e]!==void 0){ji[e].push({onLoad:t,onProgress:n,onError:s});return}ji[e]=[],ji[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ji[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,y=0,m=new ReadableStream({start(d){_();function _(){u.read().then(({done:E,value:x})=>{if(E)d.close();else{y+=x.byteLength;let b=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let S=0,A=h.length;S<A;S++){let C=h[S];C.onProgress&&C.onProgress(b)}d.enqueue(x),_()}},E=>{d.error(E)})}}});return new Response(m)}else throw new Hh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Ei.add(`file:${e}`,l);let h=ji[e];delete ji[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=ji[e];if(h===void 0)throw this.manager.itemError(e),l;delete ji[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Hr=new WeakMap,Pc=class extends Ii{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ei.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Hr.get(a);u===void 0&&(u=[],Hr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Wr("img");function c(){h(),t&&t(this);let u=Hr.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onLoad&&p.onLoad(this)}Hr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Ei.remove(`image:${e}`);let f=Hr.get(this)||[];for(let p=0;p<f.length;p++){let g=f[p];g.onError&&g.onError(u)}Hr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ei.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var oo=class extends Ii{constructor(e){super(e)}load(e,t,n,s){let r=new Jt,a=new Pc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},or=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},co=class extends or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Dh=new We,Ud=new R,Fd=new R,lo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kr,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ud),Fd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fd),t.updateMatrixWorld(),Dh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zh=class extends lo{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Zs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ho=class extends or{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new zh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Nd=new We,Ba=new R,Uh=new R,Vh=class extends lo{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ba.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ba),Uh.copy(n.position),Uh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Uh),n.updateMatrixWorld(),s.makeTranslation(-Ba.x,-Ba.y,-Ba.z),Nd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nd)}},es=class extends or{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},cr=class extends ja{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gh=class extends lo{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rs=class extends or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Gh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ts=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Fh=new WeakMap,uo=class extends Ii{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ei.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(Fh.has(a)===!0)s&&s(Fh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ei.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Fh.set(c,l),Ei.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ei.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}};var Ic=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},fo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Lc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){Lt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;Lt.multiplyQuaternionsFlat(e,a,e,t,e,n),Lt.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},du="\\[\\]\\.:\\/",Ug=new RegExp("["+du+"]","g"),pu="[^"+du+"]",Fg="[^"+du.replace("\\.","")+"]",Ng=/((?:WC+[\/:])*)/.source.replace("WC",pu),Og=/(WCOD+)?/.source.replace("WCOD",Fg),kg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pu),Bg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pu),Hg=new RegExp("^"+Ng+Og+kg+Bg+"$"),zg=["material","materials","bones","map"],Wh=class{constructor(e,t,n){let s=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ug,"")}static parseTrackName(e){let t=Hg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);zg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=Wh;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dc=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Ws,endingEnd:Ws};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=So,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Eo:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case El:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===gp;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===Mo){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Xs,s.endingEnd=Xs):(e?s.endingStart=this.zeroSlopeAtStart?Xs:Ws:s.endingStart=Va,t?s.endingEnd=this.zeroSlopeAtEnd?Xs:Ws:s.endingEnd=Va)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},Vg=new Float32Array(1),po=class extends wi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let f=s[u],p=f.name,g=h[p];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}let y=t&&t._propertyBindings[u].binding.parsedPath;g=new Lc(vt.create(n,p,y),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ro(new Float32Array(2),new Float32Array(2),1,Vg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?ar.findByName(s,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=El),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new Dc(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?ar.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Od=new We,ta=class{constructor(e,t,n=0,s=1/0){this.ray=new Ms(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Od.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Od),this}intersectObject(e,t=!0,n=[]){return Xh(e,this,n,t),n.sort(kd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Xh(e[s],this,n,t);return n.sort(kd),n}};function kd(i,e){return i.distance-e.distance}function Xh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Xh(r[a],e,t,!0)}}var Bd=new R,fc=new R,mo=class{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Bd.subVectors(e,this.start),fc.subVectors(this.end,this.start);let n=fc.dot(fc),r=fc.dot(Bd)/n;return t&&(r=Qe(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function mu(i,e,t,n){let s=Gg(n);switch(t){case tu:return i*e;case jc:return i*e/s.components*s.byteLength;case Kc:return i*e/s.components*s.byteLength;case iu:return i*e*2/s.components*s.byteLength;case Jc:return i*e*2/s.components*s.byteLength;case nu:return i*e*3/s.components*s.byteLength;case Hn:return i*e*4/s.components*s.byteLength;case Zc:return i*e*4/s.components*s.byteLength;case bo:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yo:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qc:case tl:return Math.max(i,16)*Math.max(e,8)/4;case $c:case el:return Math.max(i,8)*Math.max(e,8)/2;case nl:case il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case hl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vo:case yl:case _l:return Math.ceil(i/4)*Math.ceil(e/4)*16;case su:case vl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ml:case Sl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gg(i){switch(i){case pi:case $h:return{byteLength:1,components:1};case ia:case Qh:case sa:return{byteLength:2,components:1};case qc:case Yc:return{byteLength:2,components:4};case Cs:case Xc:case Zn:return{byteLength:4,components:1};case eu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"178"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="178");function am(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Xg(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let y=u[p];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yg=`#ifdef USE_ALPHAHASH
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
#endif`,jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$g=`#ifdef USE_AOMAP
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
#endif`,Qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eb=`#ifdef USE_BATCHING
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
#endif`,tb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ib=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rb=`#ifdef USE_IRIDESCENCE
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
#endif`,ab=`#ifdef USE_BUMPMAP
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
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mb=`#define PI 3.141592653589793
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
} // validated`,gb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bb=`vec3 transformedNormal = objectNormal;
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
#endif`,xb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eb=`#ifdef USE_ENVMAP
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
#endif`,wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rb=`#ifdef USE_ENVMAP
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
#endif`,Cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ib=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Db=`#ifdef USE_GRADIENTMAP
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
}`,Ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ob=`uniform bool receiveShadow;
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
#endif`,kb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gb=`PhysicalMaterial material;
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
#endif`,Wb=`struct PhysicalMaterial {
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
}`,Xb=`
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
#endif`,qb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$b=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ex=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tx=`#if defined( USE_POINTS_UV )
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
#endif`,nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ox=`#ifdef USE_MORPHTARGETS
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
#endif`,cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,px=`#ifdef USE_NORMALMAP
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
#endif`,mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Px=`float getShadowMask() {
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
}`,Ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ux=`#ifdef USE_SKINNING
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
#endif`,Fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bx=`#ifdef USE_TRANSMISSION
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
#endif`,Hx=`#ifdef USE_TRANSMISSION
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qx=`uniform sampler2D t2D;
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`#include <common>
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
}`,$x=`#if DEPTH_PACKING == 3200
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
}`,Qx=`#define DISTANCE
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
}`,ey=`#define DISTANCE
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
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`uniform float scale;
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
}`,sy=`uniform vec3 diffuse;
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
}`,ry=`#include <common>
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
}`,ay=`uniform vec3 diffuse;
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
}`,oy=`#define LAMBERT
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
}`,cy=`#define LAMBERT
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
}`,ly=`#define MATCAP
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
}`,hy=`#define MATCAP
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
}`,uy=`#define NORMAL
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
}`,fy=`#define NORMAL
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
}`,dy=`#define PHONG
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
}`,py=`#define PHONG
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
}`,my=`#define STANDARD
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
}`,gy=`#define STANDARD
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
}`,by=`#define TOON
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
}`,xy=`#define TOON
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
}`,yy=`uniform float size;
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
}`,_y=`uniform vec3 diffuse;
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
}`,vy=`#include <common>
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
}`,My=`uniform vec3 color;
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
}`,Sy=`uniform float rotation;
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
}`,Ey=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:qg,alphahash_pars_fragment:Yg,alphamap_fragment:jg,alphamap_pars_fragment:Kg,alphatest_fragment:Jg,alphatest_pars_fragment:Zg,aomap_fragment:$g,aomap_pars_fragment:Qg,batching_pars_vertex:eb,batching_vertex:tb,begin_vertex:nb,beginnormal_vertex:ib,bsdfs:sb,iridescence_fragment:rb,bumpmap_pars_fragment:ab,clipping_planes_fragment:ob,clipping_planes_pars_fragment:cb,clipping_planes_pars_vertex:lb,clipping_planes_vertex:hb,color_fragment:ub,color_pars_fragment:fb,color_pars_vertex:db,color_vertex:pb,common:mb,cube_uv_reflection_fragment:gb,defaultnormal_vertex:bb,displacementmap_pars_vertex:xb,displacementmap_vertex:yb,emissivemap_fragment:_b,emissivemap_pars_fragment:vb,colorspace_fragment:Mb,colorspace_pars_fragment:Sb,envmap_fragment:Eb,envmap_common_pars_fragment:wb,envmap_pars_fragment:Tb,envmap_pars_vertex:Ab,envmap_physical_pars_fragment:kb,envmap_vertex:Rb,fog_vertex:Cb,fog_pars_vertex:Pb,fog_fragment:Ib,fog_pars_fragment:Lb,gradientmap_pars_fragment:Db,lightmap_pars_fragment:Ub,lights_lambert_fragment:Fb,lights_lambert_pars_fragment:Nb,lights_pars_begin:Ob,lights_toon_fragment:Bb,lights_toon_pars_fragment:Hb,lights_phong_fragment:zb,lights_phong_pars_fragment:Vb,lights_physical_fragment:Gb,lights_physical_pars_fragment:Wb,lights_fragment_begin:Xb,lights_fragment_maps:qb,lights_fragment_end:Yb,logdepthbuf_fragment:jb,logdepthbuf_pars_fragment:Kb,logdepthbuf_pars_vertex:Jb,logdepthbuf_vertex:Zb,map_fragment:$b,map_pars_fragment:Qb,map_particle_fragment:ex,map_particle_pars_fragment:tx,metalnessmap_fragment:nx,metalnessmap_pars_fragment:ix,morphinstance_vertex:sx,morphcolor_vertex:rx,morphnormal_vertex:ax,morphtarget_pars_vertex:ox,morphtarget_vertex:cx,normal_fragment_begin:lx,normal_fragment_maps:hx,normal_pars_fragment:ux,normal_pars_vertex:fx,normal_vertex:dx,normalmap_pars_fragment:px,clearcoat_normal_fragment_begin:mx,clearcoat_normal_fragment_maps:gx,clearcoat_pars_fragment:bx,iridescence_pars_fragment:xx,opaque_fragment:yx,packing:_x,premultiplied_alpha_fragment:vx,project_vertex:Mx,dithering_fragment:Sx,dithering_pars_fragment:Ex,roughnessmap_fragment:wx,roughnessmap_pars_fragment:Tx,shadowmap_pars_fragment:Ax,shadowmap_pars_vertex:Rx,shadowmap_vertex:Cx,shadowmask_pars_fragment:Px,skinbase_vertex:Ix,skinning_pars_vertex:Lx,skinning_vertex:Dx,skinnormal_vertex:Ux,specularmap_fragment:Fx,specularmap_pars_fragment:Nx,tonemapping_fragment:Ox,tonemapping_pars_fragment:kx,transmission_fragment:Bx,transmission_pars_fragment:Hx,uv_pars_fragment:zx,uv_pars_vertex:Vx,uv_vertex:Gx,worldpos_vertex:Wx,background_vert:Xx,background_frag:qx,backgroundCube_vert:Yx,backgroundCube_frag:jx,cube_vert:Kx,cube_frag:Jx,depth_vert:Zx,depth_frag:$x,distanceRGBA_vert:Qx,distanceRGBA_frag:ey,equirect_vert:ty,equirect_frag:ny,linedashed_vert:iy,linedashed_frag:sy,meshbasic_vert:ry,meshbasic_frag:ay,meshlambert_vert:oy,meshlambert_frag:cy,meshmatcap_vert:ly,meshmatcap_frag:hy,meshnormal_vert:uy,meshnormal_frag:fy,meshphong_vert:dy,meshphong_frag:py,meshphysical_vert:my,meshphysical_frag:gy,meshtoon_vert:by,meshtoon_frag:xy,points_vert:yy,points_frag:_y,shadow_vert:vy,shadow_frag:My,sprite_vert:Sy,sprite_frag:Ey},oe={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Di={basic:{uniforms:fn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:fn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:fn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:fn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:fn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:fn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:fn([oe.points,oe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:fn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:fn([oe.common,oe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:fn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:fn([oe.sprite,oe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:fn([oe.common,oe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:fn([oe.lights,oe.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Di.physical={uniforms:fn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var wl={r:0,b:0,g:0},dr=new Rn,wy=new We;function Ty(i,e,t,n,s,r,a){let o=new Te(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function y(E){let x=!1,b=g(E);b===null?d(o,c):b&&b.isColor&&(d(b,1),x=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,x){let b=g(x);b&&(b.isCubeTexture||b.mapping===go)?(h===void 0&&(h=new ke(new Kn(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:fr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),dr.copy(x.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wy.makeRotationFromEuler(dr)),h.material.toneMapped=st.getTransfer(b.colorSpace)!==xt,(u!==b||f!==b.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ke(new ir(2,2),new Cn({name:"BackgroundMaterial",uniforms:fr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=st.getTransfer(b.colorSpace)!==xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,x){E.getRGB(wl,uu(i)),n.buffers.color.setClear(wl.r,wl.g,wl.b,x,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),c=x,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(o,c)},render:y,addToRenderList:m,dispose:_}}function Ay(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(M,I,B,U,O){let W=!1,H=u(U,B,I);r!==H&&(r=H,l(r.object)),W=p(M,U,B,O),W&&g(M,U,B,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,x(M,I,B,U),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,I,B){let U=B.wireframe===!0,O=n[M.id];O===void 0&&(O={},n[M.id]=O);let W=O[I.id];W===void 0&&(W={},O[I.id]=W);let H=W[U];return H===void 0&&(H=f(c()),W[U]=H),H}function f(M){let I=[],B=[],U=[];for(let O=0;O<t;O++)I[O]=0,B[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:U,object:M,attributes:{},index:null}}function p(M,I,B,U){let O=r.attributes,W=I.attributes,H=0,K=B.getAttributes();for(let Y in K)if(K[Y].location>=0){let ge=O[Y],Ae=W[Y];if(Ae===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor)),ge===void 0||ge.attribute!==Ae||Ae&&ge.data!==Ae.data)return!0;H++}return r.attributesNum!==H||r.index!==U}function g(M,I,B,U){let O={},W=I.attributes,H=0,K=B.getAttributes();for(let Y in K)if(K[Y].location>=0){let ge=W[Y];ge===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor));let Ae={};Ae.attribute=ge,ge&&ge.data&&(Ae.data=ge.data),O[Y]=Ae,H++}r.attributes=O,r.attributesNum=H,r.index=U}function y(){let M=r.newAttributes;for(let I=0,B=M.length;I<B;I++)M[I]=0}function m(M){d(M,0)}function d(M,I){let B=r.newAttributes,U=r.enabledAttributes,O=r.attributeDivisors;B[M]=1,U[M]===0&&(i.enableVertexAttribArray(M),U[M]=1),O[M]!==I&&(i.vertexAttribDivisor(M,I),O[M]=I)}function _(){let M=r.newAttributes,I=r.enabledAttributes;for(let B=0,U=I.length;B<U;B++)I[B]!==M[B]&&(i.disableVertexAttribArray(B),I[B]=0)}function E(M,I,B,U,O,W,H){H===!0?i.vertexAttribIPointer(M,I,B,O,W):i.vertexAttribPointer(M,I,B,U,O,W)}function x(M,I,B,U){y();let O=U.attributes,W=B.getAttributes(),H=I.defaultAttributeValues;for(let K in W){let Y=W[K];if(Y.location>=0){let he=O[K];if(he===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){let ge=he.normalized,Ae=he.itemSize,qe=e.get(he);if(qe===void 0)continue;let St=qe.buffer,Z=qe.type,re=qe.bytesPerElement,Ie=Z===i.INT||Z===i.UNSIGNED_INT||he.gpuType===Xc;if(he.isInterleavedBufferAttribute){let me=he.data,Le=me.stride,ut=he.offset;if(me.isInstancedInterleavedBuffer){for(let He=0;He<Y.locationSize;He++)d(Y.location+He,me.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let He=0;He<Y.locationSize;He++)m(Y.location+He);i.bindBuffer(i.ARRAY_BUFFER,St);for(let He=0;He<Y.locationSize;He++)E(Y.location+He,Ae/Y.locationSize,Z,ge,Le*re,(ut+Ae/Y.locationSize*He)*re,Ie)}else{if(he.isInstancedBufferAttribute){for(let me=0;me<Y.locationSize;me++)d(Y.location+me,he.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let me=0;me<Y.locationSize;me++)m(Y.location+me);i.bindBuffer(i.ARRAY_BUFFER,St);for(let me=0;me<Y.locationSize;me++)E(Y.location+me,Ae/Y.locationSize,Z,ge,Ae*re,Ae/Y.locationSize*me*re,Ie)}}else if(H!==void 0){let ge=H[K];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(Y.location,ge);break;case 3:i.vertexAttrib3fv(Y.location,ge);break;case 4:i.vertexAttrib4fv(Y.location,ge);break;default:i.vertexAttrib1fv(Y.location,ge)}}}}_()}function b(){C();for(let M in n){let I=n[M];for(let B in I){let U=I[B];for(let O in U)h(U[O].object),delete U[O];delete I[B]}delete n[M]}}function S(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let B in I){let U=I[B];for(let O in U)h(U[O].object),delete U[O];delete I[B]}delete n[M.id]}function A(M){for(let I in n){let B=n[I];if(B[M.id]===void 0)continue;let U=B[M.id];for(let O in U)h(U[O].object),delete U[O];delete B[M.id]}}function C(){v(),a=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:v,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function Ry(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*f[y];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Cy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Hn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let C=A===sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==pi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Zn&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:b,maxSamples:S}}function Py(i){let e=this,t=null,n=0,s=!1,r=!1,a=new yn,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,E=_*4,x=d.clippingState||null;c.value=x,x=h(g,f,E,p);for(let b=0;b!==E;++b)x[b]=t[b];d.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let d=p+y*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,x=p;E!==y;++E,x+=4)a.copy(u[E]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Iy(i){let e=new WeakMap;function t(a,o){return o===Vc?a.mapping=lr:o===Gc&&(a.mapping=hr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Vc||o===Gc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new vc(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ha=4,Op=[.125,.215,.35,.446,.526,.582],gr=20,gu=new cr,kp=new Te,bu=null,xu=0,yu=0,_u=!1,mr=(1+Math.sqrt(5))/2,la=1/mr,Bp=[new R(-mr,la,0),new R(mr,la,0),new R(-la,0,mr),new R(la,0,mr),new R(0,mr,-la),new R(0,mr,la),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Ly=new R,fa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ly}=r;bu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,xu,yu),this._renderer.xr.enabled=_u,e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:sa,format:Hn,colorSpace:sn,depthBuffer:!1},s=Hp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hp(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dy(r)),this._blurMaterial=Uy(r,e,t)}return s}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,gu)}_sceneToCubeUV(e,t,n,s,r){let c=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(kp),u.toneMapping=is,u.autoClear=!1;let g=new Wt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),y=new ke(new Kn,g),m=!1,d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,m=!0):(g.color.copy(kp),m=!0);for(let _=0;_<6;_++){let E=_%3;E===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[_],r.y,r.z)):E===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[_]));let x=this._cubeSize;Tl(s,E*x,_>2?x:0,x,x),u.setRenderTarget(s),m&&u.render(y,c),u.render(e,c)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===lr||e.mapping===hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Tl(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,gu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bp[(s-r-1)%Bp.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ke(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*gr-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):gr;m>gr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gr}`);let d=[],_=0;for(let A=0;A<gr;++A){let C=A/y,v=Math.exp(-C*C/2);d.push(v),A===0?_+=v:A<m&&(_+=2*v)}for(let A=0;A<d.length;A++)d[A]=d[A]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;let x=this._sizeLods[s],b=3*x*(s>E-ha?s-E+ha:0),S=4*(this._cubeSize-x);Tl(t,b,S,3*x,2*x),c.setRenderTarget(t),c.render(u,gu)}};function Dy(i){let e=[],t=[],n=[],s=i,r=i-ha+1+Op.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-ha?c=Op[a-i+ha-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,d=1,_=new Float32Array(y*g*p),E=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let S=0;S<p;S++){let A=S%3*2/3-1,C=S>2?0:-1,v=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];_.set(v,y*g*S),E.set(f,m*g*S);let M=[S,S,S,S,S,S];x.set(M,d*g*S)}let b=new Dt;b.setAttribute("position",new wt(_,y)),b.setAttribute("uv",new wt(E,m)),b.setAttribute("faceIndex",new wt(x,d)),e.push(b),s>ha&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hp(i,e,t){let n=new Ti(i,e,t);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Uy(i,e,t){let n=new Float32Array(gr),s=new R(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function zp(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Vp(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Pu(){return`

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
	`}function Fy(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Vc||c===Gc,h=c===lr||c===hr;if(l||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new fa(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new fa(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ny(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&$s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Oy(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(u){let f=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let _=p.array;y=p.version;for(let E=0,x=_.length;E<x;E+=3){let b=_[E+0],S=_[E+1],A=_[E+2];f.push(b,S,S,A,A,b)}}else if(g!==void 0){let _=g.array;y=g.version;for(let E=0,x=_.length/3-1;E<x;E+=3){let b=E+0,S=E+1,A=E+2;f.push(b,S,S,A,A,b)}}else return;let m=new(hu(f)?Ya:qa)(f,1);m.version=y;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function ky(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function u(f,p,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,y,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_]*y[_];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function By(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Hy(i,e,t){let n=new WeakMap,s=new lt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let v=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let x=o.attributes.position.count*E,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let S=new Float32Array(x*b*4*u),A=new Xa(S,x,b,u);A.type=Zn,A.needsUpdate=!0;let C=E*4;for(let M=0;M<u;M++){let I=m[M],B=d[M],U=_[M],O=x*b*4*M;for(let W=0;W<I.count;W++){let H=W*C;p===!0&&(s.fromBufferAttribute(I,W),S[O+H+0]=s.x,S[O+H+1]=s.y,S[O+H+2]=s.z,S[O+H+3]=0),g===!0&&(s.fromBufferAttribute(B,W),S[O+H+4]=s.x,S[O+H+5]=s.y,S[O+H+6]=s.z,S[O+H+7]=0),y===!0&&(s.fromBufferAttribute(U,W),S[O+H+8]=s.x,S[O+H+9]=s.y,S[O+H+10]=s.z,S[O+H+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new Pe(x,b)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function zy(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var om=new Jt,Gp=new to(1,1),cm=new Xa,lm=new yc,hm=new Ka,Wp=[],Xp=[],qp=new Float32Array(16),Yp=new Float32Array(9),jp=new Float32Array(4);function da(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Wp[s];if(r===void 0&&(r=new Float32Array(s),Wp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Cl(i,e){let t=Xp[e];t===void 0&&(t=new Int32Array(e),Xp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Qt(t,e)}}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Qt(t,e)}}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Qt(t,e)}}function qy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if($t(t,n))return;jp.set(n),i.uniformMatrix2fv(this.addr,!1,jp),Qt(t,n)}}function Yy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if($t(t,n))return;Yp.set(n),i.uniformMatrix3fv(this.addr,!1,Yp),Qt(t,n)}}function jy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if($t(t,n))return;qp.set(n),i.uniformMatrix4fv(this.addr,!1,qp),Qt(t,n)}}function Ky(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Qt(t,e)}}function Zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Qt(t,e)}}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Qt(t,e)}}function Qy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Qt(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Qt(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Qt(t,e)}}function i_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gp.compareFunction=ou,r=Gp):r=om,t.setTexture2D(e||r,s)}function s_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||lm,s)}function r_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||hm,s)}function a_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||cm,s)}function o_(i){switch(i){case 5126:return Vy;case 35664:return Gy;case 35665:return Wy;case 35666:return Xy;case 35674:return qy;case 35675:return Yy;case 35676:return jy;case 5124:case 35670:return Ky;case 35667:case 35671:return Jy;case 35668:case 35672:return Zy;case 35669:case 35673:return $y;case 5125:return Qy;case 36294:return e_;case 36295:return t_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return a_}}function c_(i,e){i.uniform1fv(this.addr,e)}function l_(i,e){let t=da(e,this.size,2);i.uniform2fv(this.addr,t)}function h_(i,e){let t=da(e,this.size,3);i.uniform3fv(this.addr,t)}function u_(i,e){let t=da(e,this.size,4);i.uniform4fv(this.addr,t)}function f_(i,e){let t=da(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function d_(i,e){let t=da(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function p_(i,e){let t=da(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function m_(i,e){i.uniform1iv(this.addr,e)}function g_(i,e){i.uniform2iv(this.addr,e)}function b_(i,e){i.uniform3iv(this.addr,e)}function x_(i,e){i.uniform4iv(this.addr,e)}function y_(i,e){i.uniform1uiv(this.addr,e)}function __(i,e){i.uniform2uiv(this.addr,e)}function v_(i,e){i.uniform3uiv(this.addr,e)}function M_(i,e){i.uniform4uiv(this.addr,e)}function S_(i,e,t){let n=this.cache,s=e.length,r=Cl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||om,r[a])}function E_(i,e,t){let n=this.cache,s=e.length,r=Cl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||lm,r[a])}function w_(i,e,t){let n=this.cache,s=e.length,r=Cl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||hm,r[a])}function T_(i,e,t){let n=this.cache,s=e.length,r=Cl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||cm,r[a])}function A_(i){switch(i){case 5126:return c_;case 35664:return l_;case 35665:return h_;case 35666:return u_;case 35674:return f_;case 35675:return d_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return b_;case 35669:case 35673:return x_;case 5125:return y_;case 36294:return __;case 36295:return v_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return T_}}var Mu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=o_(t.type)}},Su=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A_(t.type)}},Eu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},vu=/(\w+)(\])?(\[|\.)?/g;function Kp(i,e){i.seq.push(e),i.map[e.id]=e}function R_(i,e,t){let n=i.name,s=n.length;for(vu.lastIndex=0;;){let r=vu.exec(n),a=vu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Kp(t,l===void 0?new Mu(o,i,e):new Su(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Eu(o),Kp(t,u)),t=u}}}var ua=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);R_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Jp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var C_=37297,P_=0;function I_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Zp=new Ye;function L_(i){st._getMatrix(Zp,st.workingColorSpace,i);let e=`mat3( ${Zp.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case Ga:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $p(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+I_(i.getShaderSource(e),a)}else return s}function D_(i,e){let t=L_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U_(i,e){let t;switch(e){case lp:t="Linear";break;case hp:t="Reinhard";break;case up:t="Cineon";break;case zc:t="ACESFilmic";break;case dp:t="AgX";break;case pp:t="Neutral";break;case fp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Al=new R;function F_(){st.getLuminanceCoefficients(Al);let i=Al.x.toFixed(4),e=Al.y.toFixed(4),t=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function O_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function k_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function To(i){return i!==""}function Qp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function em(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var B_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(i){return i.replace(B_,z_)}var H_=new Map;function z_(i,e){let t=Je[e];if(t===void 0){let n=H_.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wu(t)}var V_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tm(i){return i.replace(V_,G_)}function G_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function W_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function X_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lr:case hr:e="ENVMAP_TYPE_CUBE";break;case go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function Y_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jh:e="ENVMAP_BLENDING_MULTIPLY";break;case op:e="ENVMAP_BLENDING_MIX";break;case cp:e="ENVMAP_BLENDING_ADD";break}return e}function j_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function K_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=W_(t),l=X_(t),h=q_(t),u=Y_(t),f=j_(t),p=N_(t),g=O_(r),y=s.createProgram(),m,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(To).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(To).join(`
`),d.length>0&&(d+=`
`)):(m=[nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),d=[nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==is?"#define TONE_MAPPING":"",t.toneMapping!==is?Je.tonemapping_pars_fragment:"",t.toneMapping!==is?U_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,D_("linearToOutputTexel",t.outputColorSpace),F_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),a=wu(a),a=Qp(a,t),a=em(a,t),o=wu(o),o=Qp(o,t),o=em(o,t),a=tm(a),o=tm(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=_+m+a,x=_+d+o,b=Jp(s,s.VERTEX_SHADER,E),S=Jp(s,s.FRAGMENT_SHADER,x);s.attachShader(y,b),s.attachShader(y,S),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(I){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(y).trim(),U=s.getShaderInfoLog(b).trim(),O=s.getShaderInfoLog(S).trim(),W=!0,H=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,b,S);else{let K=$p(s,b,"vertex"),Y=$p(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+K+`
`+Y)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(U===""||O==="")&&(H=!1);H&&(I.diagnostics={runnable:W,programLog:B,vertexShader:{log:U,prefix:m},fragmentShader:{log:O,prefix:d}})}s.deleteShader(b),s.deleteShader(S),C=new ua(s,y),v=k_(s,y)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,C_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=S,this}var J_=0,Tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Au(e),t.set(e,n)),n}},Au=class{constructor(e){this.id=J_++,this.code=e,this.usedTimes=0}};function Z_(i,e,t,n,s,r,a){let o=new qr,c=new Tu,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,M,I,B,U){let O=B.fog,W=U.geometry,H=v.isMeshStandardMaterial?B.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),Y=K&&K.mapping===go?K.image.height:null,he=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let ge=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ae=ge!==void 0?ge.length:0,qe=0;W.morphAttributes.position!==void 0&&(qe=1),W.morphAttributes.normal!==void 0&&(qe=2),W.morphAttributes.color!==void 0&&(qe=3);let St,Z,re,Ie;if(he){let gt=Di[he];St=gt.vertexShader,Z=gt.fragmentShader}else St=v.vertexShader,Z=v.fragmentShader,c.update(v),re=c.getVertexShaderID(v),Ie=c.getFragmentShaderID(v);let me=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),ut=U.isInstancedMesh===!0,He=U.isBatchedMesh===!0,kt=!!v.map,Bt=!!v.matcap,ft=!!K,L=!!v.aoMap,gn=!!v.lightMap,dt=!!v.bumpMap,Rt=!!v.normalMap,we=!!v.displacementMap,ot=!!v.emissiveMap,Ue=!!v.metalnessMap,Ke=!!v.roughnessMap,Kt=v.anisotropy>0,P=v.clearcoat>0,w=v.dispersion>0,z=v.iridescence>0,J=v.sheen>0,Q=v.transmission>0,j=Kt&&!!v.anisotropyMap,Re=P&&!!v.clearcoatMap,ce=P&&!!v.clearcoatNormalMap,Me=P&&!!v.clearcoatRoughnessMap,Ce=z&&!!v.iridescenceMap,ee=z&&!!v.iridescenceThicknessMap,be=J&&!!v.sheenColorMap,Oe=J&&!!v.sheenRoughnessMap,Ne=!!v.specularMap,ae=!!v.specularColorMap,Ge=!!v.specularIntensityMap,D=Q&&!!v.transmissionMap,ue=Q&&!!v.thicknessMap,te=!!v.gradientMap,ye=!!v.alphaMap,ne=v.alphaTest>0,$=!!v.alphaHash,_e=!!v.extensions,Xe=is;v.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Xe=i.toneMapping);let Pt={shaderID:he,shaderType:v.type,shaderName:v.name,vertexShader:St,fragmentShader:Z,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:Ie,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:He,batchingColor:He&&U._colorsTexture!==null,instancing:ut,instancingColor:ut&&U.instanceColor!==null,instancingMorph:ut&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:sn,alphaToCoverage:!!v.alphaToCoverage,map:kt,matcap:Bt,envMap:ft,envMapMode:ft&&K.mapping,envMapCubeUVHeight:Y,aoMap:L,lightMap:gn,bumpMap:dt,normalMap:Rt,displacementMap:f&&we,emissiveMap:ot,normalMapObjectSpace:Rt&&v.normalMapType===yp,normalMapTangentSpace:Rt&&v.normalMapType===au,metalnessMap:Ue,roughnessMap:Ke,anisotropy:Kt,anisotropyMap:j,clearcoat:P,clearcoatMap:Re,clearcoatNormalMap:ce,clearcoatRoughnessMap:Me,dispersion:w,iridescence:z,iridescenceMap:Ce,iridescenceThicknessMap:ee,sheen:J,sheenColorMap:be,sheenRoughnessMap:Oe,specularMap:Ne,specularColorMap:ae,specularIntensityMap:Ge,transmission:Q,transmissionMap:D,thicknessMap:ue,gradientMap:te,opaque:v.transparent===!1&&v.blending===Ys&&v.alphaToCoverage===!1,alphaMap:ye,alphaTest:ne,alphaHash:$,combine:v.combine,mapUv:kt&&y(v.map.channel),aoMapUv:L&&y(v.aoMap.channel),lightMapUv:gn&&y(v.lightMap.channel),bumpMapUv:dt&&y(v.bumpMap.channel),normalMapUv:Rt&&y(v.normalMap.channel),displacementMapUv:we&&y(v.displacementMap.channel),emissiveMapUv:ot&&y(v.emissiveMap.channel),metalnessMapUv:Ue&&y(v.metalnessMap.channel),roughnessMapUv:Ke&&y(v.roughnessMap.channel),anisotropyMapUv:j&&y(v.anisotropyMap.channel),clearcoatMapUv:Re&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:be&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&y(v.sheenRoughnessMap.channel),specularMapUv:Ne&&y(v.specularMap.channel),specularColorMapUv:ae&&y(v.specularColorMap.channel),specularIntensityMapUv:Ge&&y(v.specularIntensityMap.channel),transmissionMapUv:D&&y(v.transmissionMap.channel),thicknessMapUv:ue&&y(v.thicknessMap.channel),alphaMapUv:ye&&y(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Rt||Kt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(kt||ye),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Le,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:qe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:kt&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===xt,decodeVideoTextureEmissive:ot&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)===xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===an,flipSided:v.side===rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function d(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)M.push(I),M.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(_(M,v),E(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function _(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function E(v,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function x(v){let M=g[v.type],I;if(M){let B=Di[M];I=Lp.clone(B.uniforms)}else I=v.uniforms;return I}function b(v,M){let I;for(let B=0,U=h.length;B<U;B++){let O=h[B];if(O.cacheKey===M){I=O,++I.usedTimes;break}}return I===void 0&&(I=new K_(i,M,v,r),h.push(I)),I}function S(v){if(--v.usedTimes===0){let M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),v.destroy()}}function A(v){c.remove(v)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:b,releaseProgram:S,releaseShaderCache:A,programs:h,dispose:C}}function $_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Q_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function im(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,p,g,y,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=y,d.group=m),e++,d}function o(u,f,p,g,y,m){let d=a(u,f,p,g,y,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,g,y,m){let d=a(u,f,p,g,y,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||Q_),n.length>1&&n.sort(f||im),s.length>1&&s.sort(f||im)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function ev(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new sm,i.set(n,[a])):s>=r.length?(a=new sm,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function tv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Te};break;case"SpotLight":t={position:new R,direction:new R,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function nv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var iv=0;function sv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rv(i){let e=new tv,t=nv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let s=new R,r=new We,a=new We;function o(l){let h=0,u=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,y=0,m=0,d=0,_=0,E=0,x=0,b=0,S=0,A=0;l.sort(sv);for(let v=0,M=l.length;v<M;v++){let I=l[v],B=I.color,U=I.intensity,O=I.distance,W=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=B.r*U,u+=B.g*U,f+=B.b*U;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],U);A++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,Y=t.get(I);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=I.shadow.matrix,_++}n.directional[p]=H,p++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(B).multiplyScalar(U),H.distance=O,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[y]=H;let K=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,K.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[y]=K.matrix,I.castShadow){let Y=t.get(I);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,n.spotShadow[y]=Y,n.spotShadowMap[y]=W,x++}y++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(B).multiplyScalar(U),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=H,m++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let K=I.shadow,Y=t.get(I);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=H,g++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(U),H.groundColor.copy(I.groundColor).multiplyScalar(U),n.hemi[d]=H,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==y||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==_||C.numPointShadows!==E||C.numSpotShadows!==x||C.numSpotMaps!==b||C.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+b-S,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=y,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=_,C.numPointShadows=E,C.numSpotShadows=x,C.numSpotMaps=b,C.numLightProbes=A,n.version=iv++)}function c(l,h){let u=0,f=0,p=0,g=0,y=0,m=h.matrixWorldInverse;for(let d=0,_=l.length;d<_;d++){let E=l[d];if(E.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(E.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let x=n.hemi[y];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:o,setupView:c,state:n}}function rm(i){let e=new rv(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function av(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new rm(i),e.set(s,[o])):r>=a.length?(o=new rm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cv=`uniform sampler2D shadow_pass;
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
}`;function lv(i,e,t){let n=new Kr,s=new Pe,r=new Pe,a=new lt,o=new Ec({depthPacking:xp}),c=new wc,l={},h=t.maxTextureSize,u={[ui]:rn,[rn]:ui,[an]:an},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:ov,fragmentShader:cv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Dt;g.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ke(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yh;let d=this.type;this.render=function(S,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let v=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ns),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let U=d!==Li&&this.type===Li,O=d===Li&&this.type!==Li;for(let W=0,H=S.length;W<H;W++){let K=S[W],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let he=Y.getFrameExtents();if(s.multiply(he),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,Y.mapSize.y=r.y)),Y.map===null||U===!0||O===!0){let Ae=this.type!==Li?{minFilter:nn,magFilter:nn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ti(s.x,s.y,Ae),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let ge=Y.getViewportCount();for(let Ae=0;Ae<ge;Ae++){let qe=Y.getViewport(Ae);a.set(r.x*qe.x,r.y*qe.y,r.x*qe.z,r.y*qe.w),B.viewport(a),Y.updateMatrices(K,Ae),n=Y.getFrustum(),x(A,C,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===Li&&_(Y,C),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(v,M,I)};function _(S,A){let C=e.update(y);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ti(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,C,f,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,C,p,y,null)}function E(S,A,C,v){let M=null,I=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)M=I;else if(M=C.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let B=M.uuid,U=A.uuid,O=l[B];O===void 0&&(O={},l[B]=O);let W=O[U];W===void 0&&(W=M.clone(),O[U]=W,A.addEventListener("dispose",b)),M=W}if(M.visible=A.visible,M.wireframe=A.wireframe,v===Li?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let B=i.properties.get(M);B.light=C}return M}function x(S,A,C,v,M){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Li)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);let U=e.update(S),O=S.material;if(Array.isArray(O)){let W=U.groups;for(let H=0,K=W.length;H<K;H++){let Y=W[H],he=O[Y.materialIndex];if(he&&he.visible){let ge=E(S,he,v,M);S.onBeforeShadow(i,S,A,C,U,ge,Y),i.renderBufferDirect(C,null,U,ge,S,Y),S.onAfterShadow(i,S,A,C,U,ge,Y)}}}else if(O.visible){let W=E(S,O,v,M);S.onBeforeShadow(i,S,A,C,U,W,null),i.renderBufferDirect(C,null,U,W,S,null),S.onAfterShadow(i,S,A,C,U,W,null)}}let B=S.children;for(let U=0,O=B.length;U<O;U++)x(B[U],A,C,v,M)}function b(S){S.target.removeEventListener("dispose",b);for(let C in l){let v=l[C],M=S.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}var hv={[Uc]:Fc,[Nc]:Bc,[Oc]:Hc,[js]:kc,[Fc]:Uc,[Bc]:Nc,[Hc]:Oc,[kc]:js};function uv(i,e){function t(){let D=!1,ue=new lt,te=null,ye=new lt(0,0,0,0);return{setMask:function(ne){te!==ne&&!D&&(i.colorMask(ne,ne,ne,ne),te=ne)},setLocked:function(ne){D=ne},setClear:function(ne,$,_e,Xe,Pt){Pt===!0&&(ne*=Xe,$*=Xe,_e*=Xe),ue.set(ne,$,_e,Xe),ye.equals(ue)===!1&&(i.clearColor(ne,$,_e,Xe),ye.copy(ue))},reset:function(){D=!1,te=null,ye.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,te=null,ye=null,ne=null;return{setReversed:function($){if(ue!==$){let _e=e.get("EXT_clip_control");$?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),ue=$;let Xe=ne;ne=null,this.setClear(Xe)}},getReversed:function(){return ue},setTest:function($){$?me(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function($){te!==$&&!D&&(i.depthMask($),te=$)},setFunc:function($){if(ue&&($=hv[$]),ye!==$){switch($){case Uc:i.depthFunc(i.NEVER);break;case Fc:i.depthFunc(i.ALWAYS);break;case Nc:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case Oc:i.depthFunc(i.EQUAL);break;case kc:i.depthFunc(i.GEQUAL);break;case Bc:i.depthFunc(i.GREATER);break;case Hc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=$}},setLocked:function($){D=$},setClear:function($){ne!==$&&(ue&&($=1-$),i.clearDepth($),ne=$)},reset:function(){D=!1,te=null,ye=null,ne=null,ue=!1}}}function s(){let D=!1,ue=null,te=null,ye=null,ne=null,$=null,_e=null,Xe=null,Pt=null;return{setTest:function(gt){D||(gt?me(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(gt){ue!==gt&&!D&&(i.stencilMask(gt),ue=gt)},setFunc:function(gt,ri,Vi){(te!==gt||ye!==ri||ne!==Vi)&&(i.stencilFunc(gt,ri,Vi),te=gt,ye=ri,ne=Vi)},setOp:function(gt,ri,Vi){($!==gt||_e!==ri||Xe!==Vi)&&(i.stencilOp(gt,ri,Vi),$=gt,_e=ri,Xe=Vi)},setLocked:function(gt){D=gt},setClear:function(gt){Pt!==gt&&(i.clearStencil(gt),Pt=gt)},reset:function(){D=!1,ue=null,te=null,ye=null,ne=null,$=null,_e=null,Xe=null,Pt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,y=!1,m=null,d=null,_=null,E=null,x=null,b=null,S=null,A=new Te(0,0,0),C=0,v=!1,M=null,I=null,B=null,U=null,O=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,K=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=K>=2);let he=null,ge={},Ae=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),St=new lt().fromArray(Ae),Z=new lt().fromArray(qe);function re(D,ue,te,ye){let ne=new Uint8Array(4),$=i.createTexture();i.bindTexture(D,$),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<te;_e++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(ue+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return $}let Ie={};Ie[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),Ie[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ie[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(js),dt(!1),Rt(qh),me(i.CULL_FACE),L(ns);function me(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Le(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function ut(D,ue){return u[D]!==ue?(i.bindFramebuffer(D,ue),u[D]=ue,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function He(D,ue){let te=p,ye=!1;if(D){te=f.get(ue),te===void 0&&(te=[],f.set(ue,te));let ne=D.textures;if(te.length!==ne.length||te[0]!==i.COLOR_ATTACHMENT0){for(let $=0,_e=ne.length;$<_e;$++)te[$]=i.COLOR_ATTACHMENT0+$;te.length=ne.length,ye=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,ye=!0);ye&&i.drawBuffers(te)}function kt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let Bt={[vs]:i.FUNC_ADD,[Wd]:i.FUNC_SUBTRACT,[Xd]:i.FUNC_REVERSE_SUBTRACT};Bt[qd]=i.MIN,Bt[Yd]=i.MAX;let ft={[jd]:i.ZERO,[Kd]:i.ONE,[Jd]:i.SRC_COLOR,[pc]:i.SRC_ALPHA,[np]:i.SRC_ALPHA_SATURATE,[ep]:i.DST_COLOR,[$d]:i.DST_ALPHA,[Zd]:i.ONE_MINUS_SRC_COLOR,[mc]:i.ONE_MINUS_SRC_ALPHA,[tp]:i.ONE_MINUS_DST_COLOR,[Qd]:i.ONE_MINUS_DST_ALPHA,[ip]:i.CONSTANT_COLOR,[sp]:i.ONE_MINUS_CONSTANT_COLOR,[rp]:i.CONSTANT_ALPHA,[ap]:i.ONE_MINUS_CONSTANT_ALPHA};function L(D,ue,te,ye,ne,$,_e,Xe,Pt,gt){if(D===ns){y===!0&&(Le(i.BLEND),y=!1);return}if(y===!1&&(me(i.BLEND),y=!0),D!==Gd){if(D!==m||gt!==v){if((d!==vs||x!==vs)&&(i.blendEquation(i.FUNC_ADD),d=vs,x=vs),gt)switch(D){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tn:i.blendFunc(i.ONE,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,E=null,b=null,S=null,A.set(0,0,0),C=0,m=D,v=gt}return}ne=ne||ue,$=$||te,_e=_e||ye,(ue!==d||ne!==x)&&(i.blendEquationSeparate(Bt[ue],Bt[ne]),d=ue,x=ne),(te!==_||ye!==E||$!==b||_e!==S)&&(i.blendFuncSeparate(ft[te],ft[ye],ft[$],ft[_e]),_=te,E=ye,b=$,S=_e),(Xe.equals(A)===!1||Pt!==C)&&(i.blendColor(Xe.r,Xe.g,Xe.b,Pt),A.copy(Xe),C=Pt),m=D,v=!1}function gn(D,ue){D.side===an?Le(i.CULL_FACE):me(i.CULL_FACE);let te=D.side===rn;ue&&(te=!te),dt(te),D.blending===Ys&&D.transparent===!1?L(ns):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ye=D.stencilWrite;o.setTest(ye),ye&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ot(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function Rt(D){D!==Hd?(me(i.CULL_FACE),D!==I&&(D===qh?i.cullFace(i.BACK):D===zd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),I=D}function we(D){D!==B&&(H&&i.lineWidth(D),B=D)}function ot(D,ue,te){D?(me(i.POLYGON_OFFSET_FILL),(U!==ue||O!==te)&&(i.polygonOffset(ue,te),U=ue,O=te)):Le(i.POLYGON_OFFSET_FILL)}function Ue(D){D?me(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function Ke(D){D===void 0&&(D=i.TEXTURE0+W-1),he!==D&&(i.activeTexture(D),he=D)}function Kt(D,ue,te){te===void 0&&(he===null?te=i.TEXTURE0+W-1:te=he);let ye=ge[te];ye===void 0&&(ye={type:void 0,texture:void 0},ge[te]=ye),(ye.type!==D||ye.texture!==ue)&&(he!==te&&(i.activeTexture(te),he=te),i.bindTexture(D,ue||Ie[D]),ye.type=D,ye.texture=ue)}function P(){let D=ge[he];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(D){St.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),St.copy(D))}function Oe(D){Z.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Z.copy(D))}function Ne(D,ue){let te=l.get(ue);te===void 0&&(te=new WeakMap,l.set(ue,te));let ye=te.get(D);ye===void 0&&(ye=i.getUniformBlockIndex(ue,D.name),te.set(D,ye))}function ae(D,ue){let ye=l.get(ue).get(D);c.get(ue)!==ye&&(i.uniformBlockBinding(ue,ye,D.__bindingPointIndex),c.set(ue,ye))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},he=null,ge={},u={},f=new WeakMap,p=[],g=null,y=!1,m=null,d=null,_=null,E=null,x=null,b=null,S=null,A=new Te(0,0,0),C=0,v=!1,M=null,I=null,B=null,U=null,O=null,St.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:me,disable:Le,bindFramebuffer:ut,drawBuffers:He,useProgram:kt,setBlending:L,setMaterial:gn,setFlipSided:dt,setCullFace:Rt,setLineWidth:we,setPolygonOffset:ot,setScissorTest:Ue,activeTexture:Ke,bindTexture:Kt,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:z,texImage2D:Ce,texImage3D:ee,updateUBOMapping:Ne,uniformBlockBinding:ae,texStorage2D:ce,texStorage3D:Me,texSubImage2D:J,texSubImage3D:Q,compressedTexSubImage2D:j,compressedTexSubImage3D:Re,scissor:be,viewport:Oe,reset:Ge}}function fv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pe,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return p?new OffscreenCanvas(P,w):Wr("canvas")}function y(P,w,z){let J=1,Q=Kt(P);if((Q.width>z||Q.height>z)&&(J=z/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let j=Math.floor(J*Q.width),Re=Math.floor(J*Q.height);u===void 0&&(u=g(j,Re));let ce=w?g(j,Re):u;return ce.width=j,ce.height=Re,ce.getContext("2d").drawImage(P,0,0,j,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Re+")."),ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){i.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(P,w,z,J,Q=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=w;if(w===i.RED&&(z===i.FLOAT&&(j=i.R32F),z===i.HALF_FLOAT&&(j=i.R16F),z===i.UNSIGNED_BYTE&&(j=i.R8)),w===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.R8UI),z===i.UNSIGNED_SHORT&&(j=i.R16UI),z===i.UNSIGNED_INT&&(j=i.R32UI),z===i.BYTE&&(j=i.R8I),z===i.SHORT&&(j=i.R16I),z===i.INT&&(j=i.R32I)),w===i.RG&&(z===i.FLOAT&&(j=i.RG32F),z===i.HALF_FLOAT&&(j=i.RG16F),z===i.UNSIGNED_BYTE&&(j=i.RG8)),w===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RG8UI),z===i.UNSIGNED_SHORT&&(j=i.RG16UI),z===i.UNSIGNED_INT&&(j=i.RG32UI),z===i.BYTE&&(j=i.RG8I),z===i.SHORT&&(j=i.RG16I),z===i.INT&&(j=i.RG32I)),w===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGB8UI),z===i.UNSIGNED_SHORT&&(j=i.RGB16UI),z===i.UNSIGNED_INT&&(j=i.RGB32UI),z===i.BYTE&&(j=i.RGB8I),z===i.SHORT&&(j=i.RGB16I),z===i.INT&&(j=i.RGB32I)),w===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),z===i.UNSIGNED_INT&&(j=i.RGBA32UI),z===i.BYTE&&(j=i.RGBA8I),z===i.SHORT&&(j=i.RGBA16I),z===i.INT&&(j=i.RGBA32I)),w===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),w===i.RGBA){let Re=Q?Ga:st.getTransfer(J);z===i.FLOAT&&(j=i.RGBA32F),z===i.HALF_FLOAT&&(j=i.RGBA16F),z===i.UNSIGNED_BYTE&&(j=Re===xt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(P,w){let z;return P?w===null||w===Cs||w===ra?z=i.DEPTH24_STENCIL8:w===Zn?z=i.DEPTH32F_STENCIL8:w===ia&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Cs||w===ra?z=i.DEPTH_COMPONENT24:w===Zn?z=i.DEPTH_COMPONENT32F:w===ia&&(z=i.DEPTH_COMPONENT16),z}function b(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==_n?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function S(P){let w=P.target;w.removeEventListener("dispose",S),C(w),w.isVideoTexture&&h.delete(w)}function A(P){let w=P.target;w.removeEventListener("dispose",A),M(w)}function C(P){let w=n.get(P);if(w.__webglInit===void 0)return;let z=P.source,J=f.get(z);if(J){let Q=J[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(P),Object.keys(J).length===0&&f.delete(z)}n.remove(P)}function v(P){let w=n.get(P);i.deleteTexture(w.__webglTexture);let z=P.source,J=f.get(z);delete J[w.__cacheKey],a.memory.textures--}function M(P){let w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let Q=0;Q<w.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(w.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)i.deleteFramebuffer(w.__webglFramebuffer[J]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let z=P.textures;for(let J=0,Q=z.length;J<Q;J++){let j=n.get(z[J]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(z[J])}n.remove(P)}let I=0;function B(){I=0}function U(){let P=I;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),I+=1,P}function O(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function W(P,w){let z=n.get(P);if(P.isVideoTexture&&Ue(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){let J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(z,P,w);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+w)}function H(P,w){let z=n.get(P);if(P.version>0&&z.__version!==P.version){Ie(z,P,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+w)}function K(P,w){let z=n.get(P);if(P.version>0&&z.__version!==P.version){Ie(z,P,w);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+w)}function Y(P,w){let z=n.get(P);if(P.version>0&&z.__version!==P.version){me(z,P,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+w)}let he={[fi]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[Vr]:i.MIRRORED_REPEAT},ge={[nn]:i.NEAREST,[Wc]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},Ae={[_p]:i.NEVER,[Tp]:i.ALWAYS,[vp]:i.LESS,[ou]:i.LEQUAL,[Mp]:i.EQUAL,[wp]:i.GEQUAL,[Sp]:i.GREATER,[Ep]:i.NOTEQUAL};function qe(P,w){if(w.type===Zn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===_n||w.magFilter===na||w.magFilter===ur||w.magFilter===di||w.minFilter===_n||w.minFilter===na||w.minFilter===ur||w.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,he[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,he[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,he[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ge[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ge[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ae[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===nn||w.minFilter!==ur&&w.minFilter!==di||w.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function St(P,w){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",S));let J=w.source,Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));let j=O(w);if(j!==P.__cacheKey){Q[j]===void 0&&(Q[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[j].usedTimes++;let Re=Q[P.__cacheKey];Re!==void 0&&(Q[P.__cacheKey].usedTimes--,Re.usedTimes===0&&v(w)),P.__cacheKey=j,P.__webglTexture=Q[j].texture}return z}function Z(P,w,z){return Math.floor(Math.floor(P/z)/w)}function re(P,w,z,J){let j=P.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,z,J,w.data);else{j.sort((ee,be)=>ee.start-be.start);let Re=0;for(let ee=1;ee<j.length;ee++){let be=j[Re],Oe=j[ee],Ne=be.start+be.count,ae=Z(Oe.start,w.width,4),Ge=Z(be.start,w.width,4);Oe.start<=Ne+1&&ae===Ge&&Z(Oe.start+Oe.count-1,w.width,4)===ae?be.count=Math.max(be.count,Oe.start+Oe.count-be.start):(++Re,j[Re]=Oe)}j.length=Re+1;let ce=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let ee=0,be=j.length;ee<be;ee++){let Oe=j[ee],Ne=Math.floor(Oe.start/4),ae=Math.ceil(Oe.count/4),Ge=Ne%w.width,D=Math.floor(Ne/w.width),ue=ae,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ge,D,ue,te,z,J,w.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ce),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function Ie(P,w,z){let J=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=i.TEXTURE_3D);let Q=St(P,w),j=w.source;t.bindTexture(J,P.__webglTexture,i.TEXTURE0+z);let Re=n.get(j);if(j.version!==Re.__version||Q===!0){t.activeTexture(i.TEXTURE0+z);let ce=st.getPrimaries(st.workingColorSpace),Me=w.colorSpace===ss?null:st.getPrimaries(w.colorSpace),Ce=w.colorSpace===ss||ce===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ee=y(w.image,!1,s.maxTextureSize);ee=Ke(w,ee);let be=r.convert(w.format,w.colorSpace),Oe=r.convert(w.type),Ne=E(w.internalFormat,be,Oe,w.colorSpace,w.isVideoTexture);qe(J,w);let ae,Ge=w.mipmaps,D=w.isVideoTexture!==!0,ue=Re.__version===void 0||Q===!0,te=j.dataReady,ye=b(w,ee);if(w.isDepthTexture)Ne=x(w.format===aa,w.type),ue&&(D?t.texStorage2D(i.TEXTURE_2D,1,Ne,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Ne,ee.width,ee.height,0,be,Oe,null));else if(w.isDataTexture)if(Ge.length>0){D&&ue&&t.texStorage2D(i.TEXTURE_2D,ye,Ne,Ge[0].width,Ge[0].height);for(let ne=0,$=Ge.length;ne<$;ne++)ae=Ge[ne],D?te&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,be,Oe,ae.data):t.texImage2D(i.TEXTURE_2D,ne,Ne,ae.width,ae.height,0,be,Oe,ae.data);w.generateMipmaps=!1}else D?(ue&&t.texStorage2D(i.TEXTURE_2D,ye,Ne,ee.width,ee.height),te&&re(w,ee,be,Oe)):t.texImage2D(i.TEXTURE_2D,0,Ne,ee.width,ee.height,0,be,Oe,ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){D&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ne,Ge[0].width,Ge[0].height,ee.depth);for(let ne=0,$=Ge.length;ne<$;ne++)if(ae=Ge[ne],w.format!==Hn)if(be!==null)if(D){if(te)if(w.layerUpdates.size>0){let _e=mu(ae.width,ae.height,w.format,w.type);for(let Xe of w.layerUpdates){let Pt=ae.data.subarray(Xe*_e/ae.data.BYTES_PER_ELEMENT,(Xe+1)*_e/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Xe,ae.width,ae.height,1,be,Pt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ae.width,ae.height,ee.depth,be,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Ne,ae.width,ae.height,ee.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ae.width,ae.height,ee.depth,be,Oe,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Ne,ae.width,ae.height,ee.depth,0,be,Oe,ae.data)}else{D&&ue&&t.texStorage2D(i.TEXTURE_2D,ye,Ne,Ge[0].width,Ge[0].height);for(let ne=0,$=Ge.length;ne<$;ne++)ae=Ge[ne],w.format!==Hn?be!==null?D?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,be,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Ne,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?te&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,be,Oe,ae.data):t.texImage2D(i.TEXTURE_2D,ne,Ne,ae.width,ae.height,0,be,Oe,ae.data)}else if(w.isDataArrayTexture)if(D){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ne,ee.width,ee.height,ee.depth),te)if(w.layerUpdates.size>0){let ne=mu(ee.width,ee.height,w.format,w.type);for(let $ of w.layerUpdates){let _e=ee.data.subarray($*ne/ee.data.BYTES_PER_ELEMENT,($+1)*ne/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,be,Oe,_e)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,be,Oe,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,ee.width,ee.height,ee.depth,0,be,Oe,ee.data);else if(w.isData3DTexture)D?(ue&&t.texStorage3D(i.TEXTURE_3D,ye,Ne,ee.width,ee.height,ee.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,be,Oe,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,ee.width,ee.height,ee.depth,0,be,Oe,ee.data);else if(w.isFramebufferTexture){if(ue)if(D)t.texStorage2D(i.TEXTURE_2D,ye,Ne,ee.width,ee.height);else{let ne=ee.width,$=ee.height;for(let _e=0;_e<ye;_e++)t.texImage2D(i.TEXTURE_2D,_e,Ne,ne,$,0,be,Oe,null),ne>>=1,$>>=1}}else if(Ge.length>0){if(D&&ue){let ne=Kt(Ge[0]);t.texStorage2D(i.TEXTURE_2D,ye,Ne,ne.width,ne.height)}for(let ne=0,$=Ge.length;ne<$;ne++)ae=Ge[ne],D?te&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,be,Oe,ae):t.texImage2D(i.TEXTURE_2D,ne,Ne,be,Oe,ae);w.generateMipmaps=!1}else if(D){if(ue){let ne=Kt(ee);t.texStorage2D(i.TEXTURE_2D,ye,Ne,ne.width,ne.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,Oe,ee)}else t.texImage2D(i.TEXTURE_2D,0,Ne,be,Oe,ee);m(w)&&d(J),Re.__version=j.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function me(P,w,z){if(w.image.length!==6)return;let J=St(P,w),Q=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+z);let j=n.get(Q);if(Q.version!==j.__version||J===!0){t.activeTexture(i.TEXTURE0+z);let Re=st.getPrimaries(st.workingColorSpace),ce=w.colorSpace===ss?null:st.getPrimaries(w.colorSpace),Me=w.colorSpace===ss||Re===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Ce=w.isCompressedTexture||w.image[0].isCompressedTexture,ee=w.image[0]&&w.image[0].isDataTexture,be=[];for(let $=0;$<6;$++)!Ce&&!ee?be[$]=y(w.image[$],!0,s.maxCubemapSize):be[$]=ee?w.image[$].image:w.image[$],be[$]=Ke(w,be[$]);let Oe=be[0],Ne=r.convert(w.format,w.colorSpace),ae=r.convert(w.type),Ge=E(w.internalFormat,Ne,ae,w.colorSpace),D=w.isVideoTexture!==!0,ue=j.__version===void 0||J===!0,te=Q.dataReady,ye=b(w,Oe);qe(i.TEXTURE_CUBE_MAP,w);let ne;if(Ce){D&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ge,Oe.width,Oe.height);for(let $=0;$<6;$++){ne=be[$].mipmaps;for(let _e=0;_e<ne.length;_e++){let Xe=ne[_e];w.format!==Hn?Ne!==null?D?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,Xe.width,Xe.height,Ne,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,Ge,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,Xe.width,Xe.height,Ne,ae,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,Ge,Xe.width,Xe.height,0,Ne,ae,Xe.data)}}}else{if(ne=w.mipmaps,D&&ue){ne.length>0&&ye++;let $=Kt(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ge,$.width,$.height)}for(let $=0;$<6;$++)if(ee){D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,be[$].width,be[$].height,Ne,ae,be[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,be[$].width,be[$].height,0,Ne,ae,be[$].data);for(let _e=0;_e<ne.length;_e++){let Pt=ne[_e].image[$].image;D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,Pt.width,Pt.height,Ne,ae,Pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,Ge,Pt.width,Pt.height,0,Ne,ae,Pt.data)}}else{D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ne,ae,be[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,Ne,ae,be[$]);for(let _e=0;_e<ne.length;_e++){let Xe=ne[_e];D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,Ne,ae,Xe.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,Ge,Ne,ae,Xe.image[$])}}}m(w)&&d(i.TEXTURE_CUBE_MAP),j.__version=Q.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Le(P,w,z,J,Q,j){let Re=r.convert(z.format,z.colorSpace),ce=r.convert(z.type),Me=E(z.internalFormat,Re,ce,z.colorSpace),Ce=n.get(w),ee=n.get(z);if(ee.__renderTarget=w,!Ce.__hasExternalTextures){let be=Math.max(1,w.width>>j),Oe=Math.max(1,w.height>>j);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,Me,be,Oe,w.depth,0,Re,ce,null):t.texImage2D(Q,j,Me,be,Oe,0,Re,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ot(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Q,ee.__webglTexture,0,we(w)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Q,ee.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(P,w,z){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){let J=w.depthTexture,Q=J&&J.isDepthTexture?J.type:null,j=x(w.stencilBuffer,Q),Re=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=we(w);ot(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,j,w.width,w.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,j,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,j,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,P)}else{let J=w.textures;for(let Q=0;Q<J.length;Q++){let j=J[Q],Re=r.convert(j.format,j.colorSpace),ce=r.convert(j.type),Me=E(j.internalFormat,Re,ce,j.colorSpace),Ce=we(w);z&&ot(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Me,w.width,w.height):ot(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,Me,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Me,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function He(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(w.depthTexture);J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);let Q=J.__webglTexture,j=we(w);if(w.depthTexture.format===Gr)ot(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(w.depthTexture.format===aa)ot(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function kt(P){let w=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let J=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){let Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=J}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let J=P.texture.mipmaps;J&&J.length>0?He(w.__webglFramebuffer[0],P):He(w.__webglFramebuffer,P)}else if(z){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=i.createRenderbuffer(),ut(w.__webglDepthbuffer[J],P,!1);else{let Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,j)}}else{let J=P.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ut(w.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(P,w,z){let J=n.get(P);w!==void 0&&Le(J.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&kt(P)}function ft(P){let w=P.texture,z=n.get(P),J=n.get(w);P.addEventListener("dispose",A);let Q=P.textures,j=P.isWebGLCubeRenderTarget===!0,Re=Q.length>1;if(Re||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=w.version,a.memory.textures++),j){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[ce]=[];for(let Me=0;Me<w.mipmaps.length;Me++)z.__webglFramebuffer[ce][Me]=i.createFramebuffer()}else z.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let ce=0;ce<w.mipmaps.length;ce++)z.__webglFramebuffer[ce]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Re)for(let ce=0,Me=Q.length;ce<Me;ce++){let Ce=n.get(Q[ce]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&ot(P)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){let Me=Q[ce];z.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ce]);let Ce=r.convert(Me.format,Me.colorSpace),ee=r.convert(Me.type),be=E(Me.internalFormat,Ce,ee,Me.colorSpace,P.isXRRenderTarget===!0),Oe=we(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,be,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,z.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),qe(i.TEXTURE_CUBE_MAP,w);for(let ce=0;ce<6;ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)Le(z.__webglFramebuffer[ce][Me],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me);else Le(z.__webglFramebuffer[ce],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(w)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ce=0,Me=Q.length;ce<Me;ce++){let Ce=Q[ce],ee=n.get(Ce);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),qe(i.TEXTURE_2D,Ce),Le(z.__webglFramebuffer,P,Ce,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),m(Ce)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,J.__webglTexture),qe(ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)Le(z.__webglFramebuffer[Me],P,w,i.COLOR_ATTACHMENT0,ce,Me);else Le(z.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,ce,0);m(w)&&d(ce),t.unbindTexture()}P.depthBuffer&&kt(P)}function L(P){let w=P.textures;for(let z=0,J=w.length;z<J;z++){let Q=w[z];if(m(Q)){let j=_(P),Re=n.get(Q).__webglTexture;t.bindTexture(j,Re),d(j),t.unbindTexture()}}}let gn=[],dt=[];function Rt(P){if(P.samples>0){if(ot(P)===!1){let w=P.textures,z=P.width,J=P.height,Q=i.COLOR_BUFFER_BIT,j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(P),ce=w.length>1;if(ce)for(let Ce=0;Ce<w.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let Me=P.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ce=0;Ce<w.length;Ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);let ee=n.get(w[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,z,J,0,0,z,J,Q,i.NEAREST),c===!0&&(gn.length=0,dt.length=0,gn.push(i.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(gn.push(j),dt.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Ce=0;Ce<w.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);let ee=n.get(w[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function we(P){return Math.min(s.maxSamples,P.samples)}function ot(P){let w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ue(P){let w=a.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function Ke(P,w){let z=P.colorSpace,J=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==sn&&z!==ss&&(st.getTransfer(z)===xt?(J!==Hn||Q!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function Kt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Bt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=ot}function dv(i,e){function t(n,s=ss){let r,a=st.getTransfer(s);if(n===pi)return i.UNSIGNED_BYTE;if(n===qc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$h)return i.BYTE;if(n===Qh)return i.SHORT;if(n===ia)return i.UNSIGNED_SHORT;if(n===Xc)return i.INT;if(n===Cs)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===sa)return i.HALF_FLOAT;if(n===tu)return i.ALPHA;if(n===nu)return i.RGB;if(n===Hn)return i.RGBA;if(n===Gr)return i.DEPTH_COMPONENT;if(n===aa)return i.DEPTH_STENCIL;if(n===jc)return i.RED;if(n===Kc)return i.RED_INTEGER;if(n===iu)return i.RG;if(n===Jc)return i.RG_INTEGER;if(n===Zc)return i.RGBA_INTEGER;if(n===bo||n===xo||n===yo||n===_o)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$c||n===Qc||n===el||n===tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nl||n===il||n===sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nl||n===il)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rl||n===al||n===ol||n===cl||n===ll||n===hl||n===ul||n===fl||n===dl||n===pl||n===ml||n===gl||n===bl||n===xl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===al)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ol)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ll)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ul)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ml)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vo||n===yl||n===_l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vo)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===su||n===vl||n===Ml||n===Sl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ml)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ra?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mv=`
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

}`,Ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Jt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Cn({vertexShader:pv,fragmentShader:mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cu=class extends wi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,y=new Ru,m=t.getContextAttributes(),d=null,_=null,E=[],x=[],b=new Pe,S=null,A=new Yt;A.viewport=new lt;let C=new Yt;C.viewport=new lt;let v=[A,C],M=new Ic,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=E[Z];return re===void 0&&(re=new Yr,E[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=E[Z];return re===void 0&&(re=new Yr,E[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=E[Z];return re===void 0&&(re=new Yr,E[Z]=re),re.getHandSpace()};function U(Z){let re=x.indexOf(Z.inputSource);if(re===-1)return;let Ie=E[re];Ie!==void 0&&(Ie.update(Z.inputSource,Z.frame,l||a),Ie.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",W);for(let Z=0;Z<E.length;Z++){let re=x[Z];re!==null&&(x[Z]=null,E[Z].disconnect(re))}I=null,B=null,y.reset(),e.setRenderTarget(d),p=null,f=null,u=null,s=null,_=null,St.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,me=null,Le=null;m.depth&&(Le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=m.stencil?aa:Gr,me=m.stencil?ra:Cs);let ut={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(ut),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Ti(f.textureWidth,f.textureHeight,{format:Hn,type:pi,depthTexture:new to(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ti(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),St.setContext(s),St.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(Z){for(let re=0;re<Z.removed.length;re++){let Ie=Z.removed[re],me=x.indexOf(Ie);me>=0&&(x[me]=null,E[me].disconnect(Ie))}for(let re=0;re<Z.added.length;re++){let Ie=Z.added[re],me=x.indexOf(Ie);if(me===-1){for(let ut=0;ut<E.length;ut++)if(ut>=x.length){x.push(Ie),me=ut;break}else if(x[ut]===null){x[ut]=Ie,me=ut;break}if(me===-1)break}let Le=E[me];Le&&Le.connect(Ie)}}let H=new R,K=new R;function Y(Z,re,Ie){H.setFromMatrixPosition(re.matrixWorld),K.setFromMatrixPosition(Ie.matrixWorld);let me=H.distanceTo(K),Le=re.projectionMatrix.elements,ut=Ie.projectionMatrix.elements,He=Le[14]/(Le[10]-1),kt=Le[14]/(Le[10]+1),Bt=(Le[9]+1)/Le[5],ft=(Le[9]-1)/Le[5],L=(Le[8]-1)/Le[0],gn=(ut[8]+1)/ut[0],dt=He*L,Rt=He*gn,we=me/(-L+gn),ot=we*-L;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ot),Z.translateZ(we),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Le[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let Ue=He+we,Ke=kt+we,Kt=dt-ot,P=Rt+(me-ot),w=Bt*kt/Ke*Ue,z=ft*kt/Ke*Ue;Z.projectionMatrix.makePerspective(Kt,P,w,z,Ue,Ke),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function he(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let re=Z.near,Ie=Z.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(Ie=y.depthFar)),M.near=C.near=A.near=re,M.far=C.far=A.far=Ie,(I!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,B=M.far),A.layers.mask=Z.layers.mask|2,C.layers.mask=Z.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;let me=Z.parent,Le=M.cameras;he(M,me);for(let ut=0;ut<Le.length;ut++)he(Le[ut],me);Le.length===2?Y(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),ge(Z,M,me)};function ge(Z,re,Ie){Ie===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(Ie.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Zs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let Ae=null;function qe(Z,re){if(h=re.getViewerPose(l||a),g=re,h!==null){let Ie=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let me=!1;Ie.length!==M.cameras.length&&(M.cameras.length=0,me=!0);for(let He=0;He<Ie.length;He++){let kt=Ie[He],Bt=null;if(p!==null)Bt=p.getViewport(kt);else{let L=u.getViewSubImage(f,kt);Bt=L.viewport,He===0&&(e.setRenderTargetTextures(_,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(_))}let ft=v[He];ft===void 0&&(ft=new Yt,ft.layers.enable(He),ft.viewport=new lt,v[He]=ft),ft.matrix.fromArray(kt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(kt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),He===0&&(M.matrix.copy(ft.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),me===!0&&M.cameras.push(ft)}let Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){let He=u.getDepthInformation(Ie[0]);He&&He.isValid&&He.texture&&y.init(e,He,s.renderState)}}for(let Ie=0;Ie<E.length;Ie++){let me=x[Ie],Le=E[Ie];me!==null&&Le!==void 0&&Le.update(me,re,l||a)}Ae&&Ae(Z,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}let St=new am;St.setAnimationLoop(qe),this.setAnimationLoop=function(Z){Ae=Z},this.dispose=function(){}}},pr=new Rn,gv=new We;function bv(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,uu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,_,E,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,_,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===rn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===rn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _=e.get(d),E=_.envMap,x=_.envMapRotation;E&&(m.envMap.value=E,pr.copy(x),pr.x*=-1,pr.y*=-1,pr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),m.envMapRotation.value.setFromMatrix4(gv.makeRotationFromEuler(pr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,_,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===rn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,E){let x=E.program;n.uniformBlockBinding(_,x)}function l(_,E){let x=s[_.id];x===void 0&&(g(_),x=h(_),s[_.id]=x,_.addEventListener("dispose",m));let b=E.program;n.updateUBOMapping(_,b);let S=e.render.frame;r[_.id]!==S&&(f(_),r[_.id]=S)}function h(_){let E=u();_.__bindingPointIndex=E;let x=i.createBuffer(),b=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,b,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let E=s[_.id],x=_.uniforms,b=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let S=0,A=x.length;S<A;S++){let C=Array.isArray(x[S])?x[S]:[x[S]];for(let v=0,M=C.length;v<M;v++){let I=C[v];if(p(I,S,v,b)===!0){let B=I.__offset,U=Array.isArray(I.value)?I.value:[I.value],O=0;for(let W=0;W<U.length;W++){let H=U[W],K=y(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,B+O,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,O),O+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,E,x,b){let S=_.value,A=E+"_"+x;if(b[A]===void 0)return typeof S=="number"||typeof S=="boolean"?b[A]=S:b[A]=S.clone(),!0;{let C=b[A];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return b[A]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(_){let E=_.uniforms,x=0,b=16;for(let A=0,C=E.length;A<C;A++){let v=Array.isArray(E[A])?E[A]:[E[A]];for(let M=0,I=v.length;M<I;M++){let B=v[M],U=Array.isArray(B.value)?B.value:[B.value];for(let O=0,W=U.length;O<W;O++){let H=U[O],K=y(H),Y=x%b,he=Y%K.boundary,ge=Y+he;x+=he,ge!==0&&b-ge<K.storage&&(x+=b-ge),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=K.storage}}}let S=x%b;return S>0&&(x+=b-S),_.__size=x,_.__cache={},this}function y(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),E}function m(_){let E=_.target;E.removeEventListener("dispose",m);let x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Rl=class{constructor(e={}){let{canvas:t=Ap(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),y=new Int32Array(4),m=null,d=null,_=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=is,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,b=!1;this._outputColorSpace=Mt;let S=0,A=0,C=null,v=-1,M=null,I=new lt,B=new lt,U=null,O=new Te(0),W=0,H=t.width,K=t.height,Y=1,he=null,ge=null,Ae=new lt(0,0,H,K),qe=new lt(0,0,H,K),St=!1,Z=new Kr,re=!1,Ie=!1,me=new We,Le=new We,ut=new R,He=new lt,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function ft(){return C===null?Y:1}let L=n;function gn(T,F){return t.getContext(T,F)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"178"}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",$,!1),L===null){let F="webgl2";if(L=gn(F,T),L===null)throw gn(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let dt,Rt,we,ot,Ue,Ke,Kt,P,w,z,J,Q,j,Re,ce,Me,Ce,ee,be,Oe,Ne,ae,Ge,D;function ue(){dt=new Ny(L),dt.init(),ae=new dv(L,dt),Rt=new Cy(L,dt,e,ae),we=new uv(L,dt),Rt.reverseDepthBuffer&&f&&we.buffers.depth.setReversed(!0),ot=new By(L),Ue=new $_,Ke=new fv(L,dt,we,Ue,Rt,ae,ot),Kt=new Iy(x),P=new Fy(x),w=new Xg(L),Ge=new Ay(L,w),z=new Oy(L,w,ot,Ge),J=new zy(L,z,w,ot),be=new Hy(L,Rt,Ke),Me=new Py(Ue),Q=new Z_(x,Kt,P,dt,Rt,Ge,Me),j=new bv(x,Ue),Re=new ev,ce=new av(dt),ee=new Ty(x,Kt,P,we,J,p,c),Ce=new lv(x,J,Rt),D=new xv(L,ot,Rt,we),Oe=new Ry(L,dt,ot),Ne=new ky(L,dt,ot),ot.programs=Q.programs,x.capabilities=Rt,x.extensions=dt,x.properties=Ue,x.renderLists=Re,x.shadowMap=Ce,x.state=we,x.info=ot}ue();let te=new Cu(x,L);this.xr=te,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=dt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=dt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(H,K,!1))},this.getSize=function(T){return T.set(H,K)},this.setSize=function(T,F,G=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,K=F,t.width=Math.floor(T*Y),t.height=Math.floor(F*Y),G===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(H*Y,K*Y).floor()},this.setDrawingBufferSize=function(T,F,G){H=T,K=F,Y=G,t.width=Math.floor(T*G),t.height=Math.floor(F*G),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Ae)},this.setViewport=function(T,F,G,X){T.isVector4?Ae.set(T.x,T.y,T.z,T.w):Ae.set(T,F,G,X),we.viewport(I.copy(Ae).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(qe)},this.setScissor=function(T,F,G,X){T.isVector4?qe.set(T.x,T.y,T.z,T.w):qe.set(T,F,G,X),we.scissor(B.copy(qe).multiplyScalar(Y).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(T){we.setScissorTest(St=T)},this.setOpaqueSort=function(T){he=T},this.setTransparentSort=function(T){ge=T},this.getClearColor=function(T){return T.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,G=!0){let X=0;if(T){let N=!1;if(C!==null){let se=C.texture.format;N=se===Zc||se===Jc||se===Kc}if(N){let se=C.texture.type,fe=se===pi||se===Cs||se===ia||se===ra||se===qc||se===Yc,ve=ee.getClearColor(),xe=ee.getClearAlpha(),ze=ve.r,Ve=ve.g,De=ve.b;fe?(g[0]=ze,g[1]=Ve,g[2]=De,g[3]=xe,L.clearBufferuiv(L.COLOR,0,g)):(y[0]=ze,y[1]=Ve,y[2]=De,y[3]=xe,L.clearBufferiv(L.COLOR,0,y))}else X|=L.COLOR_BUFFER_BIT}F&&(X|=L.DEPTH_BUFFER_BIT),G&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",$,!1),ee.dispose(),Re.dispose(),ce.dispose(),Ue.dispose(),Kt.dispose(),P.dispose(),J.dispose(),Ge.dispose(),D.dispose(),Q.dispose(),te.dispose(),te.removeEventListener("sessionstart",Yf),te.removeEventListener("sessionend",jf),Os.stop()};function ye(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let T=ot.autoReset,F=Ce.enabled,G=Ce.autoUpdate,X=Ce.needsUpdate,N=Ce.type;ue(),ot.autoReset=T,Ce.enabled=F,Ce.autoUpdate=G,Ce.needsUpdate=X,Ce.type=N}function $(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function _e(T){let F=T.target;F.removeEventListener("dispose",_e),Xe(F)}function Xe(T){Pt(T),Ue.remove(T)}function Pt(T){let F=Ue.get(T).programs;F!==void 0&&(F.forEach(function(G){Q.releaseProgram(G)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,G,X,N,se){F===null&&(F=kt);let fe=N.isMesh&&N.matrixWorld.determinant()<0,ve=k0(T,F,G,X,N);we.setMaterial(X,fe);let xe=G.index,ze=1;if(X.wireframe===!0){if(xe=z.getWireframeAttribute(G),xe===void 0)return;ze=2}let Ve=G.drawRange,De=G.attributes.position,it=Ve.start*ze,_t=(Ve.start+Ve.count)*ze;se!==null&&(it=Math.max(it,se.start*ze),_t=Math.min(_t,(se.start+se.count)*ze)),xe!==null?(it=Math.max(it,0),_t=Math.min(_t,xe.count)):De!=null&&(it=Math.max(it,0),_t=Math.min(_t,De.count));let zt=_t-it;if(zt<0||zt===1/0)return;Ge.setup(N,X,ve,G,xe);let It,Et=Oe;if(xe!==null&&(It=w.get(xe),Et=Ne,Et.setIndex(It)),N.isMesh)X.wireframe===!0?(we.setLineWidth(X.wireframeLinewidth*ft()),Et.setMode(L.LINES)):Et.setMode(L.TRIANGLES);else if(N.isLine){let Fe=X.linewidth;Fe===void 0&&(Fe=1),we.setLineWidth(Fe*ft()),N.isLineSegments?Et.setMode(L.LINES):N.isLineLoop?Et.setMode(L.LINE_LOOP):Et.setMode(L.LINE_STRIP)}else N.isPoints?Et.setMode(L.POINTS):N.isSprite&&Et.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)$s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))Et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Fe=N._multiDrawStarts,Ht=N._multiDrawCounts,ct=N._multiDrawCount,Nn=xe?w.get(xe).bytesPerElement:1,Mr=Ue.get(X).currentProgram.getUniforms();for(let On=0;On<ct;On++)Mr.setValue(L,"_gl_DrawID",On),Et.render(Fe[On]/Nn,Ht[On])}else if(N.isInstancedMesh)Et.renderInstances(it,zt,N.count);else if(G.isInstancedBufferGeometry){let Fe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ht=Math.min(G.instanceCount,Fe);Et.renderInstances(it,zt,Ht)}else Et.render(it,zt)};function gt(T,F,G){T.transparent===!0&&T.side===an&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,Bo(T,F,G),T.side=ui,T.needsUpdate=!0,Bo(T,F,G),T.side=an):Bo(T,F,G)}this.compile=function(T,F,G=null){G===null&&(G=T),d=ce.get(G),d.init(F),E.push(d),G.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),T!==G&&T.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();let X=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let se=N.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){let ve=se[fe];gt(ve,G,N),X.add(ve)}else gt(se,G,N),X.add(se)}),d=E.pop(),X},this.compileAsync=function(T,F,G=null){let X=this.compile(T,F,G);return new Promise(N=>{function se(){if(X.forEach(function(fe){Ue.get(fe).currentProgram.isReady()&&X.delete(fe)}),X.size===0){N(T);return}setTimeout(se,10)}dt.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let ri=null;function Vi(T){ri&&ri(T)}function Yf(){Os.stop()}function jf(){Os.start()}let Os=new am;Os.setAnimationLoop(Vi),typeof self<"u"&&Os.setContext(self),this.setAnimationLoop=function(T){ri=T,te.setAnimationLoop(T),T===null?Os.stop():Os.start()},te.addEventListener("sessionstart",Yf),te.addEventListener("sessionend",jf),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(F),F=te.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,F,C),d=ce.get(T,E.length),d.init(F),E.push(d),Le.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Z.setFromProjectionMatrix(Le),Ie=this.localClippingEnabled,re=Me.init(this.clippingPlanes,Ie),m=Re.get(T,_.length),m.init(),_.push(m),te.enabled===!0&&te.isPresenting===!0){let se=x.xr.getDepthSensingMesh();se!==null&&ah(se,F,-1/0,x.sortObjects)}ah(T,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(he,ge),Bt=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Bt&&ee.addToRenderList(m,T),this.info.render.frame++,re===!0&&Me.beginShadows();let G=d.state.shadowsArray;Ce.render(G,T,F),re===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,N=m.transmissive;if(d.setupLights(),F.isArrayCamera){let se=F.cameras;if(N.length>0)for(let fe=0,ve=se.length;fe<ve;fe++){let xe=se[fe];Jf(X,N,T,xe)}Bt&&ee.render(T);for(let fe=0,ve=se.length;fe<ve;fe++){let xe=se[fe];Kf(m,T,xe,xe.viewport)}}else N.length>0&&Jf(X,N,T,F),Bt&&ee.render(T),Kf(m,T,F);C!==null&&A===0&&(Ke.updateMultisampleRenderTarget(C),Ke.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(x,T,F),Ge.resetDefaultState(),v=-1,M=null,E.pop(),E.length>0?(d=E[E.length-1],re===!0&&Me.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function ah(T,F,G,X){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){X&&He.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Le);let fe=J.update(T),ve=T.material;ve.visible&&m.push(T,fe,ve,G,He.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){let fe=J.update(T),ve=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),He.copy(T.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),He.copy(fe.boundingSphere.center)),He.applyMatrix4(T.matrixWorld).applyMatrix4(Le)),Array.isArray(ve)){let xe=fe.groups;for(let ze=0,Ve=xe.length;ze<Ve;ze++){let De=xe[ze],it=ve[De.materialIndex];it&&it.visible&&m.push(T,fe,it,G,He.z,De)}}else ve.visible&&m.push(T,fe,ve,G,He.z,null)}}let se=T.children;for(let fe=0,ve=se.length;fe<ve;fe++)ah(se[fe],F,G,X)}function Kf(T,F,G,X){let N=T.opaque,se=T.transmissive,fe=T.transparent;d.setupLightsView(G),re===!0&&Me.setGlobalState(x.clippingPlanes,G),X&&we.viewport(I.copy(X)),N.length>0&&ko(N,F,G),se.length>0&&ko(se,F,G),fe.length>0&&ko(fe,F,G),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Jf(T,F,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new Ti(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?sa:pi,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));let se=d.state.transmissionRenderTarget[X.id],fe=X.viewport||I;se.setSize(fe.z*x.transmissionResolutionScale,fe.w*x.transmissionResolutionScale);let ve=x.getRenderTarget(),xe=x.getActiveCubeFace(),ze=x.getActiveMipmapLevel();x.setRenderTarget(se),x.getClearColor(O),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Bt&&ee.render(G);let Ve=x.toneMapping;x.toneMapping=is;let De=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),re===!0&&Me.setGlobalState(x.clippingPlanes,X),ko(T,G,X),Ke.updateMultisampleRenderTarget(se),Ke.updateRenderTargetMipmap(se),dt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let _t=0,zt=F.length;_t<zt;_t++){let It=F[_t],Et=It.object,Fe=It.geometry,Ht=It.material,ct=It.group;if(Ht.side===an&&Et.layers.test(X.layers)){let Nn=Ht.side;Ht.side=rn,Ht.needsUpdate=!0,Zf(Et,G,X,Fe,Ht,ct),Ht.side=Nn,Ht.needsUpdate=!0,it=!0}}it===!0&&(Ke.updateMultisampleRenderTarget(se),Ke.updateRenderTargetMipmap(se))}x.setRenderTarget(ve,xe,ze),x.setClearColor(O,W),De!==void 0&&(X.viewport=De),x.toneMapping=Ve}function ko(T,F,G){let X=F.isScene===!0?F.overrideMaterial:null;for(let N=0,se=T.length;N<se;N++){let fe=T[N],ve=fe.object,xe=fe.geometry,ze=fe.group,Ve=fe.material;Ve.allowOverride===!0&&X!==null&&(Ve=X),ve.layers.test(G.layers)&&Zf(ve,F,G,xe,Ve,ze)}}function Zf(T,F,G,X,N,se){T.onBeforeRender(x,F,G,X,N,se),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(x,F,G,X,T,se),N.transparent===!0&&N.side===an&&N.forceSinglePass===!1?(N.side=rn,N.needsUpdate=!0,x.renderBufferDirect(G,F,X,N,T,se),N.side=ui,N.needsUpdate=!0,x.renderBufferDirect(G,F,X,N,T,se),N.side=an):x.renderBufferDirect(G,F,X,N,T,se),T.onAfterRender(x,F,G,X,N,se)}function Bo(T,F,G){F.isScene!==!0&&(F=kt);let X=Ue.get(T),N=d.state.lights,se=d.state.shadowsArray,fe=N.state.version,ve=Q.getParameters(T,N.state,se,F,G),xe=Q.getProgramCacheKey(ve),ze=X.programs;X.environment=T.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(T.isMeshStandardMaterial?P:Kt).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,ze===void 0&&(T.addEventListener("dispose",_e),ze=new Map,X.programs=ze);let Ve=ze.get(xe);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===fe)return Qf(T,ve),Ve}else ve.uniforms=Q.getUniforms(T),T.onBeforeCompile(ve,x),Ve=Q.acquireProgram(ve,xe),ze.set(xe,Ve),X.uniforms=ve.uniforms;let De=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=Me.uniform),Qf(T,ve),X.needsLights=H0(T),X.lightsStateVersion=fe,X.needsLights&&(De.ambientLightColor.value=N.state.ambient,De.lightProbe.value=N.state.probe,De.directionalLights.value=N.state.directional,De.directionalLightShadows.value=N.state.directionalShadow,De.spotLights.value=N.state.spot,De.spotLightShadows.value=N.state.spotShadow,De.rectAreaLights.value=N.state.rectArea,De.ltc_1.value=N.state.rectAreaLTC1,De.ltc_2.value=N.state.rectAreaLTC2,De.pointLights.value=N.state.point,De.pointLightShadows.value=N.state.pointShadow,De.hemisphereLights.value=N.state.hemi,De.directionalShadowMap.value=N.state.directionalShadowMap,De.directionalShadowMatrix.value=N.state.directionalShadowMatrix,De.spotShadowMap.value=N.state.spotShadowMap,De.spotLightMatrix.value=N.state.spotLightMatrix,De.spotLightMap.value=N.state.spotLightMap,De.pointShadowMap.value=N.state.pointShadowMap,De.pointShadowMatrix.value=N.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function $f(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=ua.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Qf(T,F){let G=Ue.get(T);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function k0(T,F,G,X,N){F.isScene!==!0&&(F=kt),Ke.resetTextureUnits();let se=F.fog,fe=X.isMeshStandardMaterial?F.environment:null,ve=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:sn,xe=(X.isMeshStandardMaterial?P:Kt).get(X.envMap||fe),ze=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ve=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!G.morphAttributes.position,it=!!G.morphAttributes.normal,_t=!!G.morphAttributes.color,zt=is;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(zt=x.toneMapping);let It=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Et=It!==void 0?It.length:0,Fe=Ue.get(X),Ht=d.state.lights;if(re===!0&&(Ie===!0||T!==M)){let bn=T===M&&X.id===v;Me.setState(X,T,bn)}let ct=!1;X.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Ht.state.version||Fe.outputColorSpace!==ve||N.isBatchedMesh&&Fe.batching===!1||!N.isBatchedMesh&&Fe.batching===!0||N.isBatchedMesh&&Fe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Fe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Fe.instancing===!1||!N.isInstancedMesh&&Fe.instancing===!0||N.isSkinnedMesh&&Fe.skinning===!1||!N.isSkinnedMesh&&Fe.skinning===!0||N.isInstancedMesh&&Fe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Fe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Fe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Fe.instancingMorph===!1&&N.morphTexture!==null||Fe.envMap!==xe||X.fog===!0&&Fe.fog!==se||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Me.numPlanes||Fe.numIntersection!==Me.numIntersection)||Fe.vertexAlphas!==ze||Fe.vertexTangents!==Ve||Fe.morphTargets!==De||Fe.morphNormals!==it||Fe.morphColors!==_t||Fe.toneMapping!==zt||Fe.morphTargetsCount!==Et)&&(ct=!0):(ct=!0,Fe.__version=X.version);let Nn=Fe.currentProgram;ct===!0&&(Nn=Bo(X,F,N));let Mr=!1,On=!1,Ra=!1,Ft=Nn.getUniforms(),qn=Fe.uniforms;if(we.useProgram(Nn.program)&&(Mr=!0,On=!0,Ra=!0),X.id!==v&&(v=X.id,On=!0),Mr||M!==T){we.buffers.depth.getReversed()?(me.copy(T.projectionMatrix),Cp(me),Pp(me),Ft.setValue(L,"projectionMatrix",me)):Ft.setValue(L,"projectionMatrix",T.projectionMatrix),Ft.setValue(L,"viewMatrix",T.matrixWorldInverse);let Tn=Ft.map.cameraPosition;Tn!==void 0&&Tn.setValue(L,ut.setFromMatrixPosition(T.matrixWorld)),Rt.logarithmicDepthBuffer&&Ft.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ft.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,On=!0,Ra=!0)}if(N.isSkinnedMesh){Ft.setOptional(L,N,"bindMatrix"),Ft.setOptional(L,N,"bindMatrixInverse");let bn=N.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ft.setValue(L,"boneTexture",bn.boneTexture,Ke))}N.isBatchedMesh&&(Ft.setOptional(L,N,"batchingTexture"),Ft.setValue(L,"batchingTexture",N._matricesTexture,Ke),Ft.setOptional(L,N,"batchingIdTexture"),Ft.setValue(L,"batchingIdTexture",N._indirectTexture,Ke),Ft.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&Ft.setValue(L,"batchingColorTexture",N._colorsTexture,Ke));let Yn=G.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&be.update(N,G,Nn),(On||Fe.receiveShadow!==N.receiveShadow)&&(Fe.receiveShadow=N.receiveShadow,Ft.setValue(L,"receiveShadow",N.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(qn.envMap.value=xe,qn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(qn.envMapIntensity.value=F.environmentIntensity),On&&(Ft.setValue(L,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&B0(qn,Ra),se&&X.fog===!0&&j.refreshFogUniforms(qn,se),j.refreshMaterialUniforms(qn,X,Y,K,d.state.transmissionRenderTarget[T.id]),ua.upload(L,$f(Fe),qn,Ke)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ua.upload(L,$f(Fe),qn,Ke),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ft.setValue(L,"center",N.center),Ft.setValue(L,"modelViewMatrix",N.modelViewMatrix),Ft.setValue(L,"normalMatrix",N.normalMatrix),Ft.setValue(L,"modelMatrix",N.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let bn=X.uniformsGroups;for(let Tn=0,oh=bn.length;Tn<oh;Tn++){let ks=bn[Tn];D.update(ks,Nn),D.bind(ks,Nn)}}return Nn}function B0(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function H0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,F,G){let X=Ue.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Ue.get(T.texture).__webglTexture=F,Ue.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:G,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let G=Ue.get(T);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};let z0=L.createFramebuffer();this.setRenderTarget=function(T,F=0,G=0){C=T,S=F,A=G;let X=!0,N=null,se=!1,fe=!1;if(T){let xe=Ue.get(T);if(xe.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(xe.__webglFramebuffer===void 0)Ke.setupRenderTarget(T);else if(xe.__hasExternalTextures)Ke.rebindTextures(T,Ue.get(T.texture).__webglTexture,Ue.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let De=T.depthTexture;if(xe.__boundDepthTexture!==De){if(De!==null&&Ue.has(De)&&(T.width!==De.image.width||T.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(T)}}let ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(fe=!0);let Ve=Ue.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[F])?N=Ve[F][G]:N=Ve[F],se=!0):T.samples>0&&Ke.useMultisampledRTT(T)===!1?N=Ue.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?N=Ve[G]:N=Ve,I.copy(T.viewport),B.copy(T.scissor),U=T.scissorTest}else I.copy(Ae).multiplyScalar(Y).floor(),B.copy(qe).multiplyScalar(Y).floor(),U=St;if(G!==0&&(N=z0),we.bindFramebuffer(L.FRAMEBUFFER,N)&&X&&we.drawBuffers(T,N),we.viewport(I),we.scissor(B),we.setScissorTest(U),se){let xe=Ue.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,G)}else if(fe){let xe=Ue.get(T.texture),ze=F;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.__webglTexture,G,ze)}else if(T!==null&&G!==0){let xe=Ue.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xe.__webglTexture,G)}v=-1},this.readRenderTargetPixels=function(T,F,G,X,N,se,fe,ve=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){we.bindFramebuffer(L.FRAMEBUFFER,xe);try{let ze=T.textures[ve],Ve=ze.format,De=ze.type;if(!Rt.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-X&&G>=0&&G<=T.height-N&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve),L.readPixels(F,G,X,N,ae.convert(Ve),ae.convert(De),se))}finally{let ze=C!==null?Ue.get(C).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(T,F,G,X,N,se,fe,ve=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe)if(F>=0&&F<=T.width-X&&G>=0&&G<=T.height-N){we.bindFramebuffer(L.FRAMEBUFFER,xe);let ze=T.textures[ve],Ve=ze.format,De=ze.type;if(!Rt.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,it),L.bufferData(L.PIXEL_PACK_BUFFER,se.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve),L.readPixels(F,G,X,N,ae.convert(Ve),ae.convert(De),0);let _t=C!==null?Ue.get(C).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,_t);let zt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Rp(L,zt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,it),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,se),L.deleteBuffer(it),L.deleteSync(zt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,G=0){let X=Math.pow(2,-G),N=Math.floor(T.image.width*X),se=Math.floor(T.image.height*X),fe=F!==null?F.x:0,ve=F!==null?F.y:0;Ke.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,fe,ve,N,se),we.unbindTexture()};let V0=L.createFramebuffer(),G0=L.createFramebuffer();this.copyTextureToTexture=function(T,F,G=null,X=null,N=0,se=null){se===null&&(N!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=N,N=0):se=0);let fe,ve,xe,ze,Ve,De,it,_t,zt,It=T.isCompressedTexture?T.mipmaps[se]:T.image;if(G!==null)fe=G.max.x-G.min.x,ve=G.max.y-G.min.y,xe=G.isBox3?G.max.z-G.min.z:1,ze=G.min.x,Ve=G.min.y,De=G.isBox3?G.min.z:0;else{let Yn=Math.pow(2,-N);fe=Math.floor(It.width*Yn),ve=Math.floor(It.height*Yn),T.isDataArrayTexture?xe=It.depth:T.isData3DTexture?xe=Math.floor(It.depth*Yn):xe=1,ze=0,Ve=0,De=0}X!==null?(it=X.x,_t=X.y,zt=X.z):(it=0,_t=0,zt=0);let Et=ae.convert(F.format),Fe=ae.convert(F.type),Ht;F.isData3DTexture?(Ke.setTexture3D(F,0),Ht=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ke.setTexture2DArray(F,0),Ht=L.TEXTURE_2D_ARRAY):(Ke.setTexture2D(F,0),Ht=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);let ct=L.getParameter(L.UNPACK_ROW_LENGTH),Nn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Mr=L.getParameter(L.UNPACK_SKIP_PIXELS),On=L.getParameter(L.UNPACK_SKIP_ROWS),Ra=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,It.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,It.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ve),L.pixelStorei(L.UNPACK_SKIP_IMAGES,De);let Ft=T.isDataArrayTexture||T.isData3DTexture,qn=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let Yn=Ue.get(T),bn=Ue.get(F),Tn=Ue.get(Yn.__renderTarget),oh=Ue.get(bn.__renderTarget);we.bindFramebuffer(L.READ_FRAMEBUFFER,Tn.__webglFramebuffer),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,oh.__webglFramebuffer);for(let ks=0;ks<xe;ks++)Ft&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.get(T).__webglTexture,N,De+ks),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.get(F).__webglTexture,se,zt+ks)),L.blitFramebuffer(ze,Ve,fe,ve,it,_t,fe,ve,L.DEPTH_BUFFER_BIT,L.NEAREST);we.bindFramebuffer(L.READ_FRAMEBUFFER,null),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(N!==0||T.isRenderTargetTexture||Ue.has(T)){let Yn=Ue.get(T),bn=Ue.get(F);we.bindFramebuffer(L.READ_FRAMEBUFFER,V0),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,G0);for(let Tn=0;Tn<xe;Tn++)Ft?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Yn.__webglTexture,N,De+Tn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Yn.__webglTexture,N),qn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bn.__webglTexture,se,zt+Tn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bn.__webglTexture,se),N!==0?L.blitFramebuffer(ze,Ve,fe,ve,it,_t,fe,ve,L.COLOR_BUFFER_BIT,L.NEAREST):qn?L.copyTexSubImage3D(Ht,se,it,_t,zt+Tn,ze,Ve,fe,ve):L.copyTexSubImage2D(Ht,se,it,_t,ze,Ve,fe,ve);we.bindFramebuffer(L.READ_FRAMEBUFFER,null),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else qn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Ht,se,it,_t,zt,fe,ve,xe,Et,Fe,It.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Ht,se,it,_t,zt,fe,ve,xe,Et,It.data):L.texSubImage3D(Ht,se,it,_t,zt,fe,ve,xe,Et,Fe,It):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,se,it,_t,fe,ve,Et,Fe,It.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,se,it,_t,It.width,It.height,Et,It.data):L.texSubImage2D(L.TEXTURE_2D,se,it,_t,fe,ve,Et,Fe,It);L.pixelStorei(L.UNPACK_ROW_LENGTH,ct),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Nn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mr),L.pixelStorei(L.UNPACK_SKIP_ROWS,On),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ra),se===0&&F.generateMipmaps&&L.generateMipmap(Ht),we.unbindTexture()},this.copyTextureToTexture3D=function(T,F,G=null,X=null,N=0){return $s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,G,X,N)},this.initRenderTarget=function(T){Ue.get(T).__webglFramebuffer===void 0&&Ke.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ke.setTextureCube(T,0):T.isData3DTexture?Ke.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ke.setTexture2DArray(T,0):Ke.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){S=0,A=0,C=null,we.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};function Iu(i,e){if(e===ru)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===oa||e===wo){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===oa)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Pl=class extends Ii{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ku(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new $u(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=ts.extractUrlBase(e);a=ts.resolveURL(l,this.path)}else a=ts.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ea(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===mm){try{a[nt.KHR_BINARY_GLTF]=new Qu(e)}catch(u){s&&s(u);return}r=JSON.parse(a[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new of(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:a[u]=new Nu;break;case nt.KHR_DRACO_MESH_COMPRESSION:a[u]=new ef(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:a[u]=new tf;break;case nt.KHR_MESH_QUANTIZATION:a[u]=new nf;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function _v(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Fu=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Te(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],sn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Rs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new es(h),l.distance=u;break;case"spot":l=new ho(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),rs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Nu=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Wt}extendParams(e,t,n){let s=[];e.color=new Te(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],sn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Mt))}return Promise.all(s)}},Ou=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},ku=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Pe(o,o)}return Promise.all(r)}},Bu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Hu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},zu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],sn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Mt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Vu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Gu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(o[0],o[1],o[2],sn),Promise.all(r)}},Wu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Xu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(o[0],o[1],o[2],sn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Mt)),Promise.all(r)}},qu=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Yu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},ju=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ku=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Ju=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Zu=class{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},$u=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==$n.TRIANGLES&&l.mode!==$n.TRIANGLE_STRIP&&l.mode!==$n.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,p=[];for(let g of u){let y=new We,m=new R,d=new Lt,_=new R(1,1,1),E=new tr(g.geometry,g.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,x),c.SCALE&&_.fromBufferAttribute(c.SCALE,x),E.setMatrixAt(x,y.compose(m,d,_));for(let x in c)if(x==="_COLOR_0"){let b=c[x];E.instanceColor=new Es(b.array,b.itemSize,b.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);yt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),p.push(E)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},mm="glTF",Ao=12,um={JSON:1313821514,BIN:5130562},Qu=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ao),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==mm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ao,r=new DataView(e,Ao),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===um.JSON){let l=new Uint8Array(e,Ao+a,o);this.content=n.decode(l)}else if(c===um.BIN){let l=Ao+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ef=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=rf[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=rf[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],p=pa[f.componentType];l[u]=p.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let g in p.attributes){let y=p.attributes[g],m=c[g];m!==void 0&&(y.normalized=m)}u(p)},o,l,sn,f)})})}},tf=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},nf=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}},Il=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,f=u*u,p=f*u,g=e*l,y=g-l,m=-2*p+3*f,d=p-f,_=1-m,E=d-f+u;for(let x=0;x!==o;x++){let b=a[y+x+o],S=a[y+x+c]*h,A=a[g+x+o],C=a[g+x]*h;r[x]=_*b+E*S+m*A+d*C}return r}},vv=new Lt,sf=class extends Il{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return vv.fromArray(r).normalize().toArray(r),r}},$n={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},pa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fm={9728:nn,9729:_n,9984:Wc,9985:na,9986:ur,9987:di},dm={33071:Mi,33648:Vr,10497:fi},Lu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Mv={CUBICSPLINE:void 0,LINEAR:Js,STEP:Ks},Du={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Sv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ht({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),i.DefaultMaterial}function br(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function rs(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ev(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function wv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Tv(i){let e,t=i.extensions&&i.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Uu(t.attributes):e=i.indices+":"+Uu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Uu(i.targets[n]);return e}function Uu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function af(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Av(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Rv=new We,of=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new _v,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new oo(this.options.manager):this.textureLoader=new uo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ea(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return br(r,o,s),rs(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(ts.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Lu[s.type],o=pa[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new wt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Lu[s.type],l=pa[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,m;if(p&&p!==u){let d=Math.floor(f/p),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,E=t.cache.get(_);E||(y=new l(o,d*p,s.count*p/h),E=new er(y,p/h),t.cache.add(_,E)),m=new Ss(E,c,f%p/h,g)}else o===null?y=new l(s.count*c):y=new l(o,f,s.count*c),m=new wt(y,c,g);if(s.sparse!==void 0){let d=Lu.SCALAR,_=pa[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,b=new _(a[1],E,s.sparse.count*d),S=new l(a[2],x,s.sparse.count*c);o!==null&&(m=new wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,C=b.length;A<C;A++){let v=b[A];if(m.setX(v,S[A*c]),c>=2&&m.setY(v,S[A*c+1]),c>=3&&m.setZ(v,S[A*c+2]),c>=4&&m.setW(v,S[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=fm[f.magFilter]||_n,h.minFilter=fm[f.minFilter]||di,h.wrapS=dm[f.wrapS]||fi,h.wrapT=dm[f.wrapT]||fi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==nn&&h.minFilter!==_n,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(y){let m=new Jt(y);m.needsUpdate=!0,f(m)}),t.load(ts.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),rs(u,a),u.userData.mimeType=a.mimeType||Av(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Jr,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new nr,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ht}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[nt.KHR_MATERIALS_UNLIT]){let u=s[nt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],sn),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Mt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=an);let h=r.alphaMode||Du.OPAQUE;if(h===Du.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Du.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Wt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Pe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Wt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Wt){let u=r.emissiveFactor;o.emissive=new Te().setRGB(u[0],u[1],u[2],sn)}return r.emissiveTexture!==void 0&&a!==Wt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Mt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),rs(u,r),t.associations.set(u,{materials:e}),r.extensions&&br(s,u,r),u})}createUniqueName(e){let t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return pm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Tv(l),u=s[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=pm(new Dt,l,t),s[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Sv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){let y=h[p],m=a[p],d,_=l[p];if(m.mode===$n.TRIANGLES||m.mode===$n.TRIANGLE_STRIP||m.mode===$n.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new Ja(y,_):new ke(y,_),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===$n.TRIANGLE_STRIP?d.geometry=Iu(d.geometry,wo):m.mode===$n.TRIANGLE_FAN&&(d.geometry=Iu(d.geometry,oa));else if(m.mode===$n.LINES)d=new Qa(y,_);else if(m.mode===$n.LINE_STRIP)d=new Ai(y,_);else if(m.mode===$n.LINE_LOOP)d=new eo(y,_);else if(m.mode===$n.POINTS)d=new ws(y,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&wv(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),rs(d,r),m.extensions&&br(s,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&br(s,u[0],r),u[0];let f=new Gt;r.extensions&&br(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=u.length;p<g;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(Se.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new cr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),rs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let f=new We;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new $a(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],g=s.samplers[p.sampler],y=p.target,m=y.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],g=u[2],y=u[3],m=u[4],d=[];for(let _=0,E=f.length;_<E;_++){let x=f[_],b=p[_],S=g[_],A=y[_],C=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let v=n._createAnimationTracks(x,b,S,A,C);if(v)for(let M=0;M<v.length;M++)d.push(v[M])}return new ar(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Rv)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new jr:l.length>1?h=new Gt:l.length===1?h=l[0]:h=new yt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),rs(h,r),r.extensions&&br(n,h,r),r.matrix!==void 0){let u=new We;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Gt;n.name&&(r.name=s.createUniqueName(n.name)),rs(r,n),n.extensions&&br(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof Mn||f instanceof Jt)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];Ps[r.path]===Ps.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(Ps[r.path]){case Ps.weights:l=Ri;break;case Ps.rotation:l=Ci;break;case Ps.translation:case Ps.scale:l=Pi;break;default:switch(n.itemSize){case 1:l=Ri;break;case 2:case 3:default:l=Pi;break}break}let h=s.interpolation!==void 0?Mv[s.interpolation]:Js,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let g=new l(c[f]+"."+Ps[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=af(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ci?sf:Il;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Cv(i,e,t){let n=e.attributes,s=new vn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),o.normalized){let h=af(pa[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,c=new R;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let y=af(pa[f.componentType]);c.multiplyScalar(y)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new An;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function pm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=rf[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return st.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),rs(i,e),Cv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Ev(i,e.targets,t):i})}var gm=(function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(d){r=d.instance,r.exports.__wasm_call_ctors()});function o(d){for(var _=new Uint8Array(d.length),E=0;E<d.length;++E){var x=d.charCodeAt(E);_[E]=x>96?x-97:x>64?x-39:x+4}for(var b=0,E=0;E<d.length;++E)_[b++]=_[E]<60?n[_[E]]:(_[E]-60)*64+_[++E];return _.buffer.slice(0,b)}function c(d,_,E,x,b,S){var A=r.exports.sbrk,C=E+3&-4,v=A(C*x),M=A(b.length),I=new Uint8Array(r.exports.memory.buffer);I.set(b,M);var B=d(v,E,x,M,b.length);if(B==0&&S&&S(v,C,x),_.set(I.subarray(v,v+E*x)),A(v-A(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function p(d){var _={object:new Worker(d),pending:0,requests:{}};return _.object.onmessage=function(E){var x=E.data;_.pending-=x.count,_.requests[x.id][x.action](x.value),delete _.requests[x.id]},_}function g(d){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),E=new Blob([_],{type:"text/javascript"}),x=URL.createObjectURL(E),b=0;b<d;++b)u[b]=p(x);URL.revokeObjectURL(x)}function y(d,_,E,x,b){for(var S=u[0],A=1;A<u.length;++A)u[A].pending<S.pending&&(S=u[A]);return new Promise(function(C,v){var M=new Uint8Array(E),I=f++;S.pending+=d,S.requests[I]={resolve:C,reject:v},S.object.postMessage({id:I,count:d,size:_,source:M,mode:x,filter:b},[M.buffer])})}function m(d){a.then(function(){var _=d.data;try{var E=new Uint8Array(_.count*_.size);c(r.exports[_.mode],E,_.count,_.size,_.source,r.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:E},[E.buffer])}catch(x){self.postMessage({id:_.id,count:_.count,action:"reject",value:x})}})}return{ready:a,supported:!0,useWorkers:function(d){g(d)},decodeVertexBuffer:function(d,_,E,x,b){c(r.exports.meshopt_decodeVertexBuffer,d,_,E,x,r.exports[l[b]])},decodeIndexBuffer:function(d,_,E,x){c(r.exports.meshopt_decodeIndexBuffer,d,_,E,x)},decodeIndexSequence:function(d,_,E,x){c(r.exports.meshopt_decodeIndexSequence,d,_,E,x)},decodeGltfBuffer:function(d,_,E,x,b,S){c(r.exports[h[b]],d,_,E,x,r.exports[l[S]])},decodeGltfBufferAsync:function(d,_,E,x,b){return u.length>0?y(d,_,E,h[x],l[b]):a.then(function(){var S=new Uint8Array(d*_);return c(r.exports[h[x]],S,d,_,E,r.exports[l[b]]),S})}}})();var Ll=class extends Qs{constructor(){super();let e=new Kn;e.deleteAttribute("uv");let t=new ht({side:rn}),n=new ht,s=new es(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ke(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new tr(e,n,6),o=new yt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new ke(e,ma(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ke(e,ma(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new ke(e,ma(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new ke(e,ma(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new ke(e,ma(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new ke(e,ma(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ma(i){let e=new Wt;return e.color.setScalar(i),e}var us=24,Pf=2.1,Bl=2.2,_i={idle:{a:660,b:740,loop:!0},lick:{a:170,b:220},walk:{a:230,b:277,loop:!0},jump:{a:290,b:340},rear:{a:350,b:418},shake:{a:430,b:470},roll:{a:480,b:560},petIn:{a:570,b:582},pet:{a:582,b:630,loop:!0},petOut:{a:630,b:644},leap:{a:300,b:318},catchMouth:{a:760,b:790},catchPaw:{a:800,b:870},catchTwo:{a:880,b:960},pickup:{a:970,b:1004},drop:{a:1010,b:1040},sitDown:{a:1070,b:1098},sit:{a:1098,b:1146,loop:!0},sitUp:{a:1146,b:1166},belly:{a:1230,b:1326}},Pv=()=>0,Iv=i=>{let e=t=>(t=Math.min(1,Math.max(0,t)),t*t*(3-2*t));return i<=1250||i>=1304?1:i<1256?1-.6*e((i-1250)/6):i<=1298?.4:.4+.6*e((i-1298)/6)},xf=[],Lv=3,Dv={a:1170,b:1194,ref:1168},Uv={a:1200,b:1215,ref:1198},bm=.34,$e=i=>document.querySelector(i),cn=$e("#canvas"),Fs={s1:$e("#s1"),s2:$e("#s2"),s3:$e("#s3")},xi=$e("#flash"),jm=$e("#hint");function eh(i){for(let e in Fs)Fs[e].classList.toggle("show",e===i);document.body.classList.toggle("on-card",i==="s3")}var Ta=matchMedia("(pointer: coarse)").matches;function Fv(){let i=document.getElementById("gCoachTip");i&&(i.textContent=Ta?"\u0421\u0432\u0430\u0439\u043F\u0430\u0439 \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u044B, \u0447\u0442\u043E\u0431\u044B \u0434\u0432\u0438\u0433\u0430\u0442\u044C \u041E\u0440\u0438":"\u0414\u0432\u0438\u0433\u0430\u0439 \u043C\u044B\u0448\u044C\u044E \u0438\u043B\u0438 \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438 \u2190 \u2192"),document.body.classList.add("coach")}function Hl(){document.body.classList.remove("coach")}var Fn=new Rl({canvas:cn,antialias:!0,alpha:!0,powerPreference:"high-performance"});Fn.setClearColor(0,0);Fn.setPixelRatio(Math.min(devicePixelRatio||1,Ta?1.5:2));Fn.outputColorSpace=Mt;Fn.toneMapping=zc;Fn.toneMappingExposure=.82;var pe=new Qs,Ot=new Yt(32,1,.1,100),Nv=new fa(Fn);pe.environment=Nv.fromScene(new Ll,.04).texture;pe.environmentIntensity=.45;var Km=new Rs(16777215,1.15);Km.position.set(2.5,4,3);pe.add(Km);var Jm=new Rs(13227775,1.2);Jm.position.set(-3,2,-3);pe.add(Jm);var Ov=new co(11122400,1710640,.55);pe.add(Ov);var Zm=new es(15003647,1.2,5,1.6);Zm.position.set(0,-.55,.9);pe.add(Zm);function $m(i,e,t,n){let s=new Dt,r=new Float32Array(i*3),a=new Float32Array(i);for(let l=0;l<i;l++)r[l*3]=(Math.random()-.5)*e,r[l*3+1]=(Math.random()-.5)*e,r[l*3+2]=-3-Math.random()*12,a[l]=Math.random()*Math.PI*2;s.setAttribute("position",new wt(r,3)),s.setAttribute("phase",new wt(a,1));let o=new Cn({transparent:!0,depthWrite:!1,blending:tn,uniforms:{uTime:{value:0},uSize:{value:t},uColor:{value:new Te(n)},uPR:{value:Fn.getPixelRatio()}},vertexShader:`attribute float phase; varying float vA; uniform float uTime,uSize,uPR;
      void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); float tw=.55+.45*sin(uTime*1.3+phase*7.); vA=tw;
      gl_PointSize=uSize*uPR*(0.6+0.8*tw)*(6./-mv.z); gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying float vA; uniform vec3 uColor; void main(){ vec2 d=gl_PointCoord-.5; float r=length(d);
      float a=smoothstep(.5,.05,r); float core=smoothstep(.18,0.,r); gl_FragColor=vec4(uColor+core*.4,(a*vA)*0.9); }`}),c=new ws(s,o);return c.frustumCulled=!1,c}var _r=$m(380,26,5,"#dfe7ff");pe.add(_r);var Uo=$m(70,14,9,"#ffffff");pe.add(Uo);var fs=new Gt;{let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d"),t=e.createRadialGradient(128,128,0,128,128,128);t.addColorStop(0,"rgba(8,10,20,.55)"),t.addColorStop(.55,"rgba(8,10,20,.25)"),t.addColorStop(1,"rgba(8,10,20,0)"),e.fillStyle=t,e.fillRect(0,0,256,256);let n=new Jn(i),s=new ke(new ir(2.2,1.6),new Wt({map:n,transparent:!0,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.002;let r=new ke(new Ts(.62,.66,128),new Wt({color:14283659,transparent:!0,opacity:.9,depthWrite:!1,side:an}));r.rotation.x=-Math.PI/2,r.position.y=.004,r.scale.set(1,.72,1);let a=new ke(new Ts(.55,.9,128),new Wt({color:14283659,transparent:!0,opacity:.12,depthWrite:!1,side:an}));a.rotation.x=-Math.PI/2,a.position.y=.003,a.scale.set(1,.72,1),fs.add(s,a,r),pe.add(fs)}var Sa=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(236,244,255,.9)"),t.addColorStop(1,"rgba(228,239,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.fillStyle="rgba(255,255,255,.95)",e.beginPath();for(let s=0;s<8;s++){let r=s*Math.PI/4,a=s%2?12:40;e.lineTo(64+Math.cos(r)*a,64+Math.sin(r)*a)}e.closePath(),e.fill();let n=new Jn(i);return n.colorSpace=Mt,n})(),Co=1024,Qn={pos:new Float32Array(Co*3),col:new Float32Array(Co*3),size:new Float32Array(Co),alpha:new Float32Array(Co)},Ns=new Dt;Ns.setAttribute("position",new wt(Qn.pos,3).setUsage(ca));Ns.setAttribute("color",new wt(Qn.col,3).setUsage(ca));Ns.setAttribute("size",new wt(Qn.size,1).setUsage(ca));Ns.setAttribute("alpha",new wt(Qn.alpha,1).setUsage(ca));Ns.setDrawRange(0,0);var If=new Cn({uniforms:{map:{value:null},pxPerUnit:{value:1e3}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vCol; varying float vA;
    uniform float pxPerUnit;
    void main() { vCol = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * pxPerUnit / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D map; varying vec3 vCol; varying float vA;
    void main() { vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vCol * t.rgb, t.a * vA);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    }`,transparent:!0,depthWrite:!1,blending:tn});If.uniforms.map.value=Sa;var Lf=new ws(Ns,If);Lf.frustumCulled=!1;Lf.renderOrder=5;pe.add(Lf);var Fi=[],yf=[],Dl=null;function mt(i,e,t,n,s,r){if(Fi.length>=Co)return yf[0]||{position:new R,material:{color:new Te},userData:{}};let a=yf.pop()||{position:new R,material:{color:new Te,opacity:1},userData:{}};return a.position.set(i,e,t),a.material.color.setRGB(1,1,1),a.material.opacity=1,a.size=s,a.userData.v=n,a.userData.life=r,a.userData.t=0,a.userData.fin=0,Fi.push(a),a}var zn=(i,e)=>{let t=i*e*60;return Math.floor(t)+(Math.random()<t%1?1:0)},ga=(i,e)=>1-Math.pow(1-i,e*60);function kv(i){let e=0;for(let t=Fi.length-1;t>=0;t--){let n=Fi[t],s=n.userData;s.t+=i,n.position.addScaledVector(s.v,i),s.t>s.life&&(Fi[t]=Fi[Fi.length-1],Fi.pop(),yf.push(n))}for(let t of Fi){let n=t.userData,s=e*3;Qn.pos[s]=t.position.x,Qn.pos[s+1]=t.position.y,Qn.pos[s+2]=t.position.z,Qn.col[s]=t.material.color.r,Qn.col[s+1]=t.material.color.g,Qn.col[s+2]=t.material.color.b,Qn.size[e]=t.size,Qn.alpha[e]=Math.max(0,1-n.t/n.life)*(n.fin?Math.min(1,n.t/n.fin):1),e++}if(Ns.setDrawRange(0,e),e)for(let t of["position","color","size","alpha"])Ns.attributes[t].needsUpdate=!0}var ei,k,zi;var ls,Dn,ln={},pn=null,jt={v:1.3,target:1.3,min:.75,max:2.2,pinch:0},de={mode:!1,pos:null,yaw:null,ball:null,sparks:[]},ie={on:!1,v:new R,vy:0,bounds:{x:1.55,zMin:-1.7,zMax:1.35},grab:null,chase:!1},_f=.072,QE=new yn(new R(0,1,0),0),ya=new ta,rt={pupils:[],glints:[],irises:[],scleras:[],pivots:[],gaze:new Pe,target:new Pe,sacc:0};function Bv(){for(let i of["L","R"]){let e=rt.irises.find(y=>y.side===i);if(!e)continue;let t=e.node.geometry.attributes.position,n=[],s=[];for(let y=0;y<t.count;y+=3){let m=t.getX(y),d=t.getY(y),_=t.getZ(y);n.push([2*m,2*d,2*_,1]),s.push(m*m+d*d+_*_)}let r=4,a=Array.from({length:r},()=>new Array(r).fill(0)),o=new Array(r).fill(0);for(let y=0;y<n.length;y++)for(let m=0;m<r;m++){o[m]+=n[y][m]*s[y];for(let d=0;d<r;d++)a[m][d]+=n[y][m]*n[y][d]}for(let y=0;y<r;y++){let m=y;for(let d=y+1;d<r;d++)Math.abs(a[d][y])>Math.abs(a[m][y])&&(m=d);if([a[y],a[m]]=[a[m],a[y]],[o[y],o[m]]=[o[m],o[y]],!(Math.abs(a[y][y])<1e-12))for(let d=0;d<r;d++){if(d===y)continue;let _=a[d][y]/a[y][y];for(let E=y;E<r;E++)a[d][E]-=_*a[y][E];o[d]-=_*o[y]}}let c=o[0]/a[0][0],l=o[1]/a[1][1],h=o[2]/a[2][2],u=new R(c,l,h),f=e.node.localToWorld(u.clone()),p=e.node.parent,g=new Gt;g.name="EYEBALL_"+i,p.add(g),g.position.copy(p.worldToLocal(f.clone()));for(let y of[e,...rt.pupils.filter(m=>m.side===i),...rt.glints.filter(m=>m.side===i)])g.attach(y.node);rt.pivots.push({node:g,side:i})}}var xm={L:{px:new R(.87777,.03979,-.47743),py:new R(.05253,-.99853,.01336)},R:{px:new R(.8752,-.04017,.4821),py:new R(-.0598,-.99789,.0254)}},Be={y:0,x:0,vy:0,dragging:!1,lastX:0,lastY:0,moved:0},gi={bones:[],amp:14,speed:2,gains:[.292,.364,.436,.508,.58],lags:[.55,1.1,1.65,2.2,2.75]},ym=new Lt,_m=new Lt,vm=new Lt,Mm=new Lt,Hv=new R(1,0,0),zv=new R(0,0,1),Sm=new fo,Em=new Rn,wm=new Lt,Tm={},zl=new Map,Vv=new Lt;function Gv(){for(let[i,e]of zl)i.quaternion.multiply(Vv.copy(e).invert());zl.clear()}function Us(i,e){i.quaternion.multiply(e);let t=zl.get(i);t?t.multiply(e):zl.set(i,e.clone())}function et(i,e,t,n){let s=Tm[i]||(Tm[i]=ei&&ei.getObjectByName(i));s&&(Em.set(e,t,n),wm.setFromEuler(Em),Us(s,wm))}var Wv=.43;function Xv(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}function qv(i){i.traverse(e=>{if(!e.isMesh)return;e.frustumCulled=!1;let t=e.material;if(!t)return;let n=(t.name||"").replace(/\.\d+$/,"");if(n==="WEB_body"){let s=new Zt({map:t.map,color:15000046,roughness:.36,metalness:0,emissive:16777215,emissiveMap:t.emissiveMap,emissiveIntensity:1,clearcoat:.45,clearcoatRoughness:.25,iridescence:.35,iridescenceIOR:1.5,iridescenceThicknessRange:[150,400],sheen:.15,sheenRoughness:.5,sheenColor:new Te(14270463),envMapIntensity:.9});s.onBeforeCompile=r=>{r.uniforms.uTime={value:0},s.userData.uni=r.uniforms,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
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
           #endif`)},s.name=n,e.material=s}else n==="WEB_lid"?(e.material=new Zt({color:15262962,roughness:.34,metalness:0,clearcoat:.45,clearcoatRoughness:.25,sheen:.2,sheenRoughness:.5,sheenColor:new Te(14270463),envMapIntensity:.9}),e.material.name=n,e.renderOrder=2):n==="WEB_mouth"?e.material=new ht({vertexColors:!0,roughness:.55,metalness:0}):n==="WEB_lens"?(e.material=new Zt({color:16777215,transparent:!0,opacity:.14,roughness:.05,metalness:0,clearcoat:1,depthWrite:!1}),e.renderOrder=3):n==="WEB_glint"?(e.material=new Wt({color:16777215}),e.renderOrder=4):n==="WEB_iris"?(t.emissiveIntensity=.35,t.roughness=.4):n==="WEB_sclera"?t.emissiveIntensity=.5:n==="WEB_ink"?(e.material=new ht({color:1975606,roughness:.85}),e.renderOrder=2):n==="WEB_teeth"&&(t.color.set(16250367),t.roughness=.3)})}function Yv(i,e){let{a:t,b:n,loop:s}=_i[e],r=As.subclip(i,e,t,n,us),a=zi.clipAction(r);return a.setLoop(s?So:Mo,1/0),a.clampWhenFinished=!s,a}function at(i,{fade:e=.25,onDone:t,speed:n=1}={}){let s=ln[i];if(s&&(pn&&pn!==s&&pn.fadeOut(e),s.reset().setEffectiveTimeScale(n).setEffectiveWeight(1).fadeIn(e).play(),pn=s,t)){let r=a=>{a.action===s&&(zi.removeEventListener("finished",r),t())};zi.addEventListener("finished",r)}}async function jv(){let i=()=>fetch("assets/ori.glb"+(window.ORI_GLB_V?"?v="+window.ORI_GLB_V:"")).then(t=>{if(!t.ok)throw new Error("ori.glb "+t.status);return t.arrayBuffer()}),e=window.ORI_GLB?Xv(window.ORI_GLB):await(window.ORI_GLB_P||i()).catch(i);return new Promise((t,n)=>{let s=new Pl;s.setMeshoptDecoder(gm),s.parse(e,"",r=>{ei=r.scene,ei.scale.setScalar(Wv),qv(ei),ei.traverse(h=>{h.isBone&&(h.name==="head"&&(ls=h),h.name==="jaw"&&(Dn=h),(h.name==="lidL"||h.name==="lidR")&&Nt.bones.push(h),/^tail[1-5]$/.test(h.name)&&(gi.bones[+h.name[4]-1]=h)),h.isMesh&&h.morphTargetDictionary&&h.morphTargetDictionary.Flat!==void 0&&xf.push(h);let u=h.name||"";(u==="LID_L"||u==="LID_R")&&(Nt.groups.push(h),h.visible=!1),/^PUPIL_[LR]/.test(u)&&rt.pupils.push({node:h,side:u[6],base:h.position.clone()}),/^GLINT_[LR]/.test(u)&&rt.glints.push({node:h,side:u[6],base:h.position.clone()}),/^IRIS_[LR]/.test(u)&&h.isMesh&&rt.irises.push({node:h,side:u[5],base:h.position.clone()}),/^SCLERA_[LR]/.test(u)&&h.isMesh&&rt.scleras.push({node:h,side:u[7]})}),Bv(),k=new Gt,k.add(ei),pe.add(k);let o=new vn().setFromObject(ei).getCenter(new R);ei.position.set(-o.x,0,-o.z),zi=new po(ei);let c=r.animations[0];for(let h in _i)ln[h]=Yv(c,h);let l=(h,u,f)=>{let p=As.subclip(c,h,u.a,u.b,us);p.tracks=p.tracks.filter(y=>f.test(y.name));let g=As.subclip(c,h+"Ref",u.ref,u.ref+1,us);return g.tracks=g.tracks.filter(y=>f.test(y.name)),As.makeClipAdditive(p,0,g,us),zi.clipAction(p,void 0,Eo)};Vt.action=l("pant",Dv,/^(jaw|tongue[123]|chest|spine|head)\./),Vt.action.setLoop(So,1/0),Vt.action.setEffectiveWeight(0),Vt.action.play(),ds.action=l("catchLick",Uv,/^(jaw|tongue[123]|head)\./),ds.action.setLoop(Mo,1),ds.action.clampWhenFinished=!1,t()},n)})}var mi={pos:new R(0,.9,4.6),look:new R(0,.75,0),tPos:new R,tLook:new R},th={s1:{pos:[0,1,5.3],look:[0,.62,0],model:[0,-.22,0]},s2:{pos:[0,1.1,5.4],look:[0,.85,0],model:[0,.05,0]},s3:{pos:[0,.45,6.8],look:[0,-.3,0],model:[0,-1.14,0]},game:{pos:[0,1.55,7.6],look:[0,1.2,0],model:[0,-.35,0]}},mn="s1";function Aa(i){mn=i}function bi(){return(k?k.position.y:0)+_f}var Vl=(()=>{let i=new Date,e=t=>String(t).padStart(2,"0");return`${i.getFullYear()}-${e(i.getMonth()+1)}-${e(i.getDate())}`})(),Ea={get(){try{return JSON.parse(localStorage.getItem("ori_star")||"null")}catch{return null}},set(i){try{localStorage.setItem("ori_star",JSON.stringify(i))}catch{}},clear(){try{localStorage.removeItem("ori_star")}catch{}}};function Kv(){let i=window.ORI_PHRASES,e=Ea.get()&&Ea.get().used||[],t=i.filter(s=>!e.includes(s)),n=t.length?t:i;return n[Math.floor(Math.random()*n.length)]}var At=!1,Un=!1;var Nt={bones:[],groups:[],next:2.5,t:-1,cur:0,squint:0},Am=.001,Jv=1;function Zv(i){if(!Nt.bones.length)return;let e=0;if(Nt.t>=0){Nt.t+=i;let r=.07,a=.03,o=.11;Nt.t<r?e=Nt.t/r:Nt.t<r+a?e=1:Nt.t<r+a+o?e=1-(Nt.t-r-a)/o:(e=0,Nt.t=-1,Nt.next=2.2+Math.random()*3.6)}else Nt.next-=i,Nt.next<=0&&(Nt.t=0);let t=Un?.5:0;Nt.squint+=(t-Nt.squint)*(1-Math.pow(.02,i)),Nt.cur=Math.max(e,Nt.squint);let n=Am+(Jv-Am)*Nt.cur;for(let r of Nt.bones)r.scale.set(1,n,n);let s=Nt.cur>.04;for(let r of Nt.groups)r.visible=s}var Po=null;function Qm(){let i=new Gt,e=new Ut(new Ct({map:Sa,transparent:!0,depthWrite:!1,blending:tn,color:16777215}));e.scale.setScalar(.5),i.add(e);let t=new Ut(new Ct({map:Sa,transparent:!0,depthWrite:!1,blending:tn,color:14283659,opacity:.55}));return t.scale.setScalar(1.1),i.add(t),i.userData={core:e,glow:t,trail:[]},i}function cf(i){for(let e=0;e<2;e++)mt(i.x+(Math.random()-.5)*.08,i.y+(Math.random()-.5)*.08,i.z,new R((Math.random()-.5)*.3,-.25,0),.1+Math.random()*.12,.55).material.color.set(Math.random()<.5?16777215:14283659)}function $v(){de.ball&&(ie.on=!1,ie.v.set(0,0,0),ie.vy=0,de.ball.parent!==pe&&pe.attach(de.ball),de.ball.visible=!1)}function e0(){de.ball&&(de.ball.position.set(k.position.x+.42,bi(),k.position.z+.5),de.ball.visible=!0)}var _a=new R;function Wn(){if(!Dn)return new R(0,.9,.6);let i=new R(0,.36,.01);return Dn.localToWorld(i),i}var yi=!1;function Df(){if(!ls)return null;ls.getWorldPosition(_a),_a.z+=.1;let i=_a.clone().project(Ot);return{x:(i.x+1)/2*innerWidth,y:(1-i.y)/2*innerHeight}}var Rm=[{name:"\u041A\u043E\u0432\u0448",pts:[[8,14],[21,18],[33,24],[45,31],[48,47],[67,50],[70,33]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,3]]},{name:"\u0421\u0435\u0440\u0434\u0446\u0435",pts:[[50,55],[33,41],[25,25],[36,11],[50,21],[64,11],[75,25],[67,41]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0]]},{name:"\u0420\u0430\u043A\u0435\u0442\u0430",pts:[[50,5],[41,19],[59,19],[41,40],[59,40],[31,55],[69,55]],lines:[[0,1],[0,2],[1,3],[2,4],[3,4],[3,5],[4,6]]},{name:"\u041A\u043E\u043F\u0438\u043B\u043A\u0430",pts:[[20,34],[30,18],[52,14],[72,22],[84,32],[70,46],[40,48]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]]}];function Qv(){let i=0;for(let e of Vl)i=(i*31+e.charCodeAt(0))%9973;return Rm[i%Rm.length]}var si=$e("#game"),lf=$e("#gSky"),t0=$e("#gBar"),vf=$e("#gHint"),eM=$e("#gName"),Gl=$e("#gX2"),V={on:!1},Cm=new ta,Pm=new yn(new R(0,0,1),0),Im=new Pe;function tM(i){let e=cn.clientWidth||innerWidth;return Math.min(i,i*250/(e/2))}function va(i,e,t=0){Pm.constant=-t,Im.set(i,e),Cm.setFromCamera(Im,Ot);let n=new R;return Cm.ray.intersectPlane(Pm,n)?n:new R}function n0(i,e=0){return va(i/innerWidth*2-1,0,e).x}function on(i){let e=i.clone().project(Ot);return{x:(e.x+1)/2*innerWidth,y:(1-e.y)/2*innerHeight}}var Wl=.4;var i0={from:2.5,series:6,seriesLen:3,fall:.8,hitHalfW:.33,stun:.45,invuln:1.1,rush:3},s0=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,60,8,64,64,60);t.addColorStop(0,"#46527a"),t.addColorStop(.62,"#303B57"),t.addColorStop(.8,"#FF0032"),t.addColorStop(1,"rgba(255,0,50,0)"),e.fillStyle=t,e.beginPath(),e.arc(64,64,60,0,Math.PI*2),e.fill(),e.fillStyle="rgba(20,26,44,.55)";for(let[s,r,a]of[[48,50,9],[78,70,7],[60,82,5]])e.beginPath(),e.arc(s,r,a,0,Math.PI*2),e.fill();let n=new Jn(i);return n.colorSpace=Mt,n})();function nM(i){let e="http://www.w3.org/2000/svg";lf.innerHTML="",V.lineEls=i.lines.map(([t,n])=>{let s=document.createElementNS(e,"line");return s.setAttribute("class","ln"),s.setAttribute("x1",i.pts[t][0]),s.setAttribute("y1",i.pts[t][1]),s.setAttribute("x2",i.pts[n][0]),s.setAttribute("y2",i.pts[n][1]),lf.appendChild(s),{a:t,b:n,el:s}}),V.ptEls=i.pts.map(([t,n])=>{let s=document.createElementNS(e,"circle");return s.setAttribute("class","pt"),s.setAttribute("cx",t),s.setAttribute("cy",n),s.setAttribute("r",1.7),lf.appendChild(s),s}),V.litSet=new Set,V.shown=new Set}var Ni=1;function r0(){let i=new Set;V.ptEls.forEach((e,t)=>{let n=0;for(let s=0;s<Ni;s++)V.shown.has(Ni*t+s)&&n++;e.classList.toggle("lit",n===Ni),e.classList.toggle("half",n>0&&n<Ni),e.setAttribute("r",n===Ni?2.2:n>0?1.7+.35*n/Ni:1.7),n===Ni&&i.add(t)}),V.litSet=i;for(let e of V.lineEls)e.el.classList.toggle("lit",i.has(e.a)&&i.has(e.b))}function iM(i){V.shown.add(i),r0()}function a0(i,e){let t=document.createElement("div");t.className="g-fly",t.style.left=i.x+"px",t.style.top=i.y+"px",document.body.appendChild(t);let n=V.ptEls[Math.floor(e/Ni)].getBoundingClientRect();setTimeout(()=>{t.style.transform=`translate(${n.left+n.width/2-i.x}px, ${n.top+n.height/2-i.y}px) scale(.45)`},20),setTimeout(()=>{t.remove(),V.on&&e<V.lit&&iM(e)},640)}function sM(i){V.shown.delete(i),r0();let e=V.ptEls[Math.floor(i/Ni)];e.classList.remove("lost"),e.getBBox(),e.classList.add("lost")}function Xl(i){V.x2=i,Gl.classList.toggle("on",i)}function ql(i){let e=V.meteors[i];pe.remove(e.sp),e.sp.material.dispose(),e.ring&&(pe.remove(e.ring),e.ring.geometry.dispose(),e.ring.material.dispose()),V.meteors.splice(i,1)}function Bi(i,e,t){for(let n=0;n<e;n++){let s=Math.random()*Math.PI,r=.5+Math.random()*(t?1.4:.8);mt(i.x,i.y,i.z,new R(Math.cos(s)*r,Math.sin(s)*r*.8,0),.05+Math.random()*.05,.5).material.color.set(Math.random()<(t?.6:.3)?16711730:9081773)}}function tt(i,e,t){if(!(!t&&e&&e<=1200&&(V.clock||0)<(V.tipUntil||0))&&(t&&(V.tipUntil=(V.clock||0)+e/1e3),vf.textContent=i,V.sayUntil=(V.clock||0)+(e||0)/1e3,e)){let n=Symbol();V.sayToken=n,setTimeout(()=>{V.sayToken===n&&V.on&&!V.finale&&(vf.textContent=V.baseHint)},e)}}function rM(i){let e=new Ut(new Ct({map:Sa,transparent:!0,depthWrite:!1,blending:tn}));return i==="blue"&&e.material.color.set(10471679),i==="comet"&&e.material.color.set(14283659),e.scale.setScalar(i==="comet"?.36:i==="blue"?.27:i==="white"?.42:.23),pe.add(e),V.stars.push(e),e}function nh(i,e){let t=V.stars[i];if(e)for(let n=0;n<5;n++){let s=Math.random()*Math.PI;mt(t.position.x,t.position.y,t.position.z,new R(Math.cos(s)*.6,Math.sin(s)*.5,0),.05,.45).material.color.copy(t.material.color)}t.userData.glow&&(pe.remove(t.userData.glow),t.userData.glow.material.dispose()),pe.remove(t),t.material.dispose(),V.stars.splice(i,1)}var je=(()=>{let i=null,e=null,t=!1;try{t=localStorage.getItem("ori-muted")==="1"}catch{}let n=()=>{if(i)return i.state==="suspended"&&i.resume().catch(()=>{}),!0;let l=window.AudioContext||window.webkitAudioContext;return l?(i=new l,e=i.createGain(),e.gain.value=t?0:.6,e.connect(i.destination),!0):!1},s=()=>i.currentTime,r=(l,{type:h="sine",f1:u=l,t:f=.2,a:p=.005,vol:g=.5,delay:y=0}={})=>{let m=i.createOscillator(),d=i.createGain(),_=s()+y;m.type=h,m.frequency.setValueAtTime(l,_),u!==l&&m.frequency.exponentialRampToValueAtTime(Math.max(20,u),_+f),d.gain.setValueAtTime(1e-4,_),d.gain.exponentialRampToValueAtTime(g,_+p),d.gain.exponentialRampToValueAtTime(1e-4,_+f),m.connect(d),d.connect(e),m.start(_),m.stop(_+f+.02)},a=({t:l=.2,vol:h=.4,f:u=1200,q:f=.7,type:p="lowpass",delay:g=0,f1:y}={})=>{let m=Math.floor(i.sampleRate*l),d=i.createBuffer(1,m,i.sampleRate),_=d.getChannelData(0);for(let S=0;S<m;S++)_[S]=(Math.random()*2-1)*(1-S/m);let E=i.createBufferSource();E.buffer=d;let x=i.createBiquadFilter();x.type=p,x.frequency.value=u,x.Q.value=f,y&&x.frequency.exponentialRampToValueAtTime(y,s()+g+l);let b=i.createGain();b.gain.value=h,E.connect(x),x.connect(b),b.connect(e),E.start(s()+g)};return{play:(l,h)=>{if(!(t||!n()))try{switch(l){case"bounce":{let u=Math.min(1.6,Math.max(.6,h||1));r(180*u,{type:"triangle",f1:330*u,t:.14,vol:.35}),a({t:.05,vol:.12,f:600});break}case"yip":r(640,{type:"sawtooth",f1:400,t:.1,vol:.22}),r(980,{type:"triangle",f1:620,t:.08,vol:.14}),a({t:.06,vol:.14,f:1500,type:"bandpass",q:1.2});break;case"weak":r(150,{type:"triangle",f1:120,t:.16,vol:.28});break;case"perfect":r(880,{t:.12,vol:.25}),r(1320,{t:.18,vol:.22,delay:.06});break;case"star":{let u=Math.min(4,h||1);r(1046*Math.pow(1.06,u),{t:.16,vol:.28}),r(1568*Math.pow(1.06,u),{t:.22,vol:.18,delay:.05});break}case"meteor":a({t:.35,vol:.7,f:400,f1:80}),r(120,{type:"square",f1:40,t:.3,vol:.3});break;case"warn":r(660,{type:"square",t:.07,vol:.12}),r(660,{type:"square",t:.07,vol:.12,delay:.14});break;case"crack":a({t:.18,vol:.5,f:3200,q:1.5,type:"bandpass"}),a({t:.1,vol:.3,f:5e3,type:"highpass",delay:.06});break;case"shatter":a({t:.5,vol:.6,f:2600,q:1.2,type:"bandpass"});for(let u=0;u<5;u++)r(1800+Math.random()*2200,{t:.12,vol:.12,delay:u*.05});break;case"hot":a({t:.5,vol:.45,f:4500,type:"highpass"}),r(500,{type:"sawtooth",f1:900,t:.12,vol:.15});break;case"hole":r(500,{type:"sawtooth",f1:45,t:.7,vol:.3}),a({t:.7,vol:.35,f:900,f1:100});break;case"sling":r(300,{type:"triangle",f1:1400,t:.35,vol:.3});break;case"rescue":r(392,{t:.12,vol:.25}),r(523,{t:.12,vol:.25,delay:.1}),r(659,{t:.22,vol:.25,delay:.2});break;case"lose":r(440,{type:"triangle",f1:110,t:.8,vol:.3});break;case"level":[523,659,784,1046].forEach((u,f)=>r(u,{t:.18,vol:.22,delay:f*.08}));break;case"dash":r(200,{type:"sawtooth",f1:1600,t:.4,vol:.25}),a({t:.3,vol:.2,f:2e3,type:"highpass"});break;case"ring":r(600,{type:"triangle",f1:1500,t:.3,vol:.3});break;case"bonus":r(784,{t:.1,vol:.25}),r(1046,{t:.1,vol:.25,delay:.08}),r(1318,{t:.2,vol:.25,delay:.16});break;case"mult":r(660,{t:.1,vol:.22}),r(880,{t:.16,vol:.22,delay:.07});break;case"day":[523,659,784,1046,1318,1568].forEach((u,f)=>r(u,{t:.5,vol:.2,delay:f*.09})),a({t:1.2,vol:.12,f:6e3,type:"highpass"});break;case"cash":[1046,1318,1568,2093].forEach((u,f)=>r(u,{t:.25,vol:.2,delay:f*.06}));break;case"bubble":r(900,{f1:300,t:.25,vol:.25}),a({t:.15,vol:.2,f:3e3,type:"highpass"});break;case"wind":a({t:1.4,vol:.18,f:700,q:.5,type:"bandpass"});break}}catch{}},ensure:n,setMuted:l=>{t=l;try{localStorage.setItem("ori-muted",l?"1":"0")}catch{}e&&(e.gain.value=l?0:.6)},get muted(){return t}}})(),o0=Symbol("quit"),ti=async i=>{let e=V.run;if(await Xt(i),V.run!==e)throw o0},Uf=i=>async(...e)=>{try{return await i(...e)}catch(t){if(t!==o0)throw t}},ih=Uf(aM);async function aM(){if(Tt.state!=="stand"){vr(ih);return}if(At||V.on||!k)return;At=!0,Un=!1,yi=!1,$v(),jm.style.opacity=0;let i=Qv();V.run=Symbol("run"),V.backScreen=Object.keys(Fs).find(e=>Fs[e].classList.contains("show"))||"s1",Object.assign(V,{mode:yM,meteors:[],meteorIn:i0.from,combo:0,bestCombo:0,x2:!1,stun:0,invuln:0,hits:0,dodged:0,rush:!1,wag:0,slow:0,hero:null,heroRing:null,heroPerfect:!1,newRecord:!1,plats:[],bonuses:[],holes:[],bank:0,best:0,alt:0,vy:0,noShine:!1,dayStar:!1,mouthOff:null}),Gl.textContent="",c0.textContent="",si.classList.add("jump"),Xl(!1),Object.assign(V,{on:!0,t:0,dur:25,stars:[],lit:0,need:i.pts.length*Ni,caught:0,snap:0,leap:null,anim:"",finale:!1,lockAnim:!1,helped:!1,targetX:0,airT:0,airDur:1,airK:0,squash:0,lean:0,earA:0,earV:0,baseY:th.game.model[1],mouthY0:0,drag:null,tapped:null,tapWindow:!1,playing:!1,hero:null,heroPhase:null,shape:i}),nM(i),eM.textContent=i.name,t0.style.transform="scaleX(1)",V.baseHint="\u0412\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u2014 \u041E\u0440\u0438 \u043F\u0440\u044B\u0433\u0430\u0435\u0442 \u043F\u043E \u043F\u043B\u0430\u043D\u0435\u0442\u0430\u043C",eh(null),Aa("game"),jt.target=1.5,Be.y=Be.x=Be.vy=0,BM(),Gn(),document.body.classList.add("night","gaming"),si.classList.remove("done"),si.classList.add("show"),tt(`\u0414\u043E\u043F\u0440\u044B\u0433\u043D\u0438 \u0434\u043E \u0437\u0432\u0435\u0437\u0434\u044B \u0434\u043D\u044F \u2014 \u043E\u043D\u0430 \u043D\u0430 ${le.goal} \u043C`),at("idle",{fade:.3}),await ti(1100),V.mouthY0=Wn().y,V.mouthOff=Wn().sub(k.position),tt(V.baseHint),V.playing=!0,Fv(),Ls(le.v0)}var Is={fallV:.72,leapUp:.42,leapH:1,down:.4},oM=Uf(cM);async function cM(){let i=V;if(i.finale)return;i.finale=!0,i.playing=!1,Rf.classList.remove("show"),Ze.recShow=!1;for(let r=i.stars.length-1;r>=0;r--)nh(r,!0);for(let r=i.meteors.length-1;r>=0;r--)Bi(i.meteors[r].sp.position,5,!1),ql(r);Xl(!1),i.stun=0,t0.style.transform="scaleX(0)";{A0(),i.rocket=0,i.wind=0,i.slip=0,Xl(!1),fs.visible=!0,k.position.set(k.position.x,vi().top+.5,0),i.vy=0,i.targetX=0,await ti(1400);let r=Math.floor(i.best),a=kf();i.newRecord=r>a,i.newRecord&&vM(r);let o=g0();if(i.newStarRecord=i.bank>o,i.newStarRecord&&_M(i.bank),i.result=i.dayStar?i.dayShine?"":`\u0414\u043E \u0441\u0438\u044F\u043D\u0438\u044F \u043D\u0435 \u0445\u0432\u0430\u0442\u0438\u043B\u043E \u0442\u043E\u0447\u0435\u043A \u0441\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u044F: ${i.need-i.lit}`:`\u0414\u043E \u0437\u0432\u0435\u0437\u0434\u044B \u0434\u043D\u044F \u043D\u0435 \u0445\u0432\u0430\u0442\u0438\u043B\u043E ${Ma(le.goal-r)} \u043C`,!i.result&&i.waveAlt!=null&&!i.supernova&&(i.result=`\u0414\u043E \u043A\u043E\u043D\u0446\u0430 \u0421\u0432\u0435\u0440\u0445\u043D\u043E\u0432\u043E\u0439 \u043D\u0435 \u0445\u0432\u0430\u0442\u0438\u043B\u043E ${Math.max(1,Math.ceil(f0()-i.best))} \u043C`),!i.result&&!i.newRecord&&a-r>0&&a-r<=10&&(i.result=`\u0414\u043E \u0440\u0435\u043A\u043E\u0440\u0434\u0430 \u043D\u0435 \u0445\u0432\u0430\u0442\u0438\u043B\u043E ${a-r} \u043C`),tt(`${i.newRecord?"\u041D\u043E\u0432\u044B\u0439 \u0440\u0435\u043A\u043E\u0440\u0434":"\u0412\u044B\u0441\u043E\u0442\u0430"}: ${Ma(r)} \u043C \xB7 ${i.newStarRecord?"\u0440\u0435\u043A\u043E\u0440\u0434 \u0437\u0432\u0451\u0437\u0434":"\u0437\u0432\u0451\u0437\u0434\u044B"}: \u2605 ${i.bank}`+(i.result?` \xB7 ${i.result}`:i.newRecord?"":` \xB7 \u0440\u0435\u043A\u043E\u0440\u0434 ${Ma(Math.max(a,r))} \u043C`)),await ti(2600),i.dayStar){si.classList.add("done"),await ti(600),await Dm(i.dayShine);return}i.noShine=!0}if(i.lit<i.need)for(i.helped=!0,tt("\u041E\u0440\u0438 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0434\u043E\u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u0435");i.lit<i.need;){let r=i.lit++;a0(on(Wn()),r),await ti(90)}await ti(800),si.classList.add("done"),tt("\u0421\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u0435 \u0441\u043E\u0431\u0440\u0430\u043D\u043E!"),await ti(900),i.targetX=0;let e=performance.now();for(;(Math.abs(k.position.x)>.05||k.position.y>i.baseY+.02)&&performance.now()-e<1800;)await ti(40);await ti(250),tt("\u0422\u0430\u043F\u043D\u0438\u0442\u0435, \u043A\u043E\u0433\u0434\u0430 \u0437\u0432\u0435\u0437\u0434\u0430 \u0432 \u043A\u043E\u043B\u044C\u0446\u0435!"),i.lockAnim=!0,at("idle",{fade:.3});let t=Qm();pe.add(t),i.hero=t;let n=va(0,1.1,Wl);t.position.set(.35,n.y,Wl);let s=new ke(new Ts(.24,.29,48),new Wt({color:14283659,transparent:!0,opacity:.5,depthWrite:!1}));pe.add(s),i.heroRing=s,i.tapped=null,await new Promise(r=>{i.heroPhase={stage:"fall",t:0,topY:n.y,done:r}}),await Dm(i.heroPerfect&&!i.noShine)}function lM(i){let e=V,t=e.heroPhase,n=e.hero;e.slow>0&&(e.slow-=i);let s=e.slow>0?.3:1;zi.timeScale=s;let r=i*s;t.t+=r;let a=e.baseY,o=Wn(),c=n.userData.core,l=n.userData.glow;if(e.heroRing){let u=a+(e.mouthOff?e.mouthOff.y:o.y-a)+Is.leapH;e.heroRing.position.set(k.position.x,u,Wl),e.heroRing.material.opacity=t.stage==="fall"?t.perfectNow?.95:.45+.15*Math.sin(t.t*8):Math.max(0,e.heroRing.material.opacity-r*3),e.heroRing.scale.setScalar(t.perfectNow?1.12:1)}let h=()=>{n.position.copy(Wn()),n.position.z+=.18,n.position.y-=.03};if(t.stage==="fall"){n.position.y=t.topY-t.t*Is.fallV,n.position.x=k.position.x+.35*Math.cos(t.t*1.6)*Math.max(0,1-t.t/2.8),n.rotation.z+=2.4*r,cf(n.position);let u=e.heroRing.position.y,f=n.position.y-Is.fallV*Is.leapUp;t.perfectNow=Math.abs(f-u)<.2,e.tapWindow=t.perfectNow,e.tapped?(e.heroPerfect=t.perfectNow,t.stage="leap",t.t=0,t.s0=n.position.clone(),at("leap",{fade:.06,speed:1.1})):(n.position.y<o.y+.12||t.t>8)&&(e.heroPerfect=!1,t.stage="snap",t.t=0,t.s0=n.position.clone())}else if(t.stage==="leap"){let u=Math.min(1,t.t/Is.leapUp),f=1-(1-u)*(1-u);k.position.y=a+Is.leapH*f;let p=t.s0.clone();p.y-=Is.fallV*t.t;let g=Math.max(0,(u-.35)/.65);n.position.lerpVectors(p,Wn(),g*g*(3-2*g)),cf(n.position),u>=1&&Lm(t)}else if(t.stage==="snap"){let u=Math.min(1,t.t/.3);n.position.lerpVectors(t.s0,Wn(),u),u>=1&&Lm(t)}else if(t.stage==="down"){let u=Math.min(1,t.t/Is.down);k.position.y=a+(t.y0-a)*(1-u*u),h(),u>=1&&(k.position.y=a,t.stage="rear",t.t=0,at("rear",{fade:.18,speed:1.25}),e.wag=3)}else if(t.stage==="rear")h(),l.scale.setScalar(.28+.05*Math.sin(t.t*9)),t.t>(_i.rear.b-_i.rear.a)/us/1.25*.92&&(t.stage="rise",t.t=0,t.s0=n.position.clone(),at("idle",{fade:.35}));else if(t.stage==="rise"){let u=Math.min(1,t.t/1),f=u*u*(3-2*u),p=va(0,.62,Wl);n.position.lerpVectors(t.s0,p,f),n.position.x+=Math.sin(u*Math.PI)*.25,c.scale.setScalar(.17+.6*f),l.scale.setScalar(.28+1.4*f),cf(n.position),u>=1&&(e.heroPhase=null,zi.timeScale=1,t.done())}}function Lm(i){let e=V,t=e.hero,n=Wn(),s=e.heroPerfect&&!e.noShine;for(let r=0;r<(s?30:16);r++){let a=Math.random()*Math.PI*2,o=1.4+Math.random()*1.8;mt(n.x,n.y,n.z,new R(Math.cos(a)*o,.4+Math.random()*1.6,Math.sin(a)*o*.5),.06+Math.random()*.08,.7).material.color.set(Math.random()<.45?14283659:16777215)}ds.action&&ds.action.reset().setEffectiveWeight(1).play(),t.userData.core.scale.setScalar(.17),t.userData.glow.scale.setScalar(.28),xi.style.opacity=s?.7:.35,setTimeout(()=>{xi.style.opacity=0},160),s?(e.slow=.7,tt("\u0421\u0438\u044F\u044E\u0449\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430!")):tt("\u041F\u043E\u0439\u043C\u0430\u043B!"),i.y0=k.position.y,i.stage=i.stage==="leap"?"down":"rear",i.t=0,i.stage==="rear"&&(at("rear",{fade:.18,speed:1.25}),e.wag=3)}var Dm=Uf(hM);async function hM(i){let e=V;e.heroRing&&(pe.remove(e.heroRing),e.heroRing.geometry.dispose(),e.heroRing=null),si.classList.remove("done"),si.offsetWidth,si.classList.add("done"),pe.remove(e.hero),e.hero=null,xi.style.opacity=1,await ti(240),xi.style.opacity=0;let t=Ea.get()||{used:[]},n=t.date===Vl&&t.phrase;Po=n?t.phrase:Kv();let s=!!i||!!(n&&t.shine),r=!!e.supernova||!!(n&&t.nova);Ea.set({date:Vl,phrase:Po,used:n?t.used||[]:[...t.used||[],Po].slice(-160),shine:s,nova:r,constellation:e.shape.name}),$e("#phrase").textContent=Po,l0(s,r),c0.textContent=s&&!i&&/сияния/.test(e.result||"")?"":e.result||"",await ti(500),h0(),Fs.s3.classList.remove("hidecard"),$e("#showCard").style.display="none",eh("s3"),Aa("s3"),at("pet",{fade:.3}),await ti(1400),at("idle",{fade:.5}),e0(),At=!1}var c0=$e("#gResult");function l0(i,e){let t=Fs.s3.querySelector(".card");t.classList.toggle("shine",!!i),t.classList.toggle("nova",!!e);let n=t.querySelector(".from");n.textContent=e?"\u041E\u0440\u0438 \u043F\u043E\u0439\u043C\u0430\u043B \u0434\u043B\u044F \u0432\u0430\u0441 \u0441\u0432\u0435\u0440\u0445\u043D\u043E\u0432\u0443\u044E \u0437\u0432\u0435\u0437\u0434\u0443":i?"\u041E\u0440\u0438 \u043F\u043E\u0439\u043C\u0430\u043B \u0434\u043B\u044F \u0432\u0430\u0441 \u0441\u0438\u044F\u044E\u0449\u0443\u044E \u0437\u0432\u0435\u0437\u0434\u0443":"\u041E\u0440\u0438 \u043F\u043E\u0439\u043C\u0430\u043B \u0434\u043B\u044F \u0432\u0430\u0441 \u0437\u0432\u0435\u0437\u0434\u0443"}function uM(){let i=V;i.on&&(i.run=Symbol("quit"),i.heroRing&&(pe.remove(i.heroRing),i.heroRing.geometry.dispose(),i.heroRing=null),i.hero&&(pe.remove(i.hero),i.hero=null),i.heroPhase=null,i.finale=!1,i.slow=0,i.lockAnim=!1,xi.style.opacity=0,h0(),eh(i.backScreen||"s1"),Aa(i.backScreen==="s3"?"s3":"s1"),at("idle",{fade:.3}),e0(),At=!1)}function h0(){zi.timeScale=1,si.classList.remove("jump"),b0(),A0(),fs.visible=!0,_r.position.y=0,Uo.position.y=0;for(let i=V.stars.length-1;i>=0;i--)nh(i,!1);for(let i=(V.meteors||[]).length-1;i>=0;i--)ql(i);Xl(!1),V.on=!1,V.playing=!1,si.classList.remove("show"),document.body.classList.remove("night","gaming","coach"),jt.target=1.3,vf.textContent="",k.scale.set(1,1,1),k.rotation.x=0,k.rotation.z=0}function u0(i){let e=V;if(e.heroPhase&&e.hero){lM(i),fs.position.set(k.position.x,e.baseY+.005,k.position.z);return}jM(i)}var le={g:10,v0:6.8,boost:1.75,dash:1.75,levelH:30,goal:150,maxGap:1.95,minGap:1.15,speed:3.6,orbitEvery:[4,5],perfect:.13,introRows:3,minSep:1.1,holeSep:1.45,missDrop:.45,landW:.46,foot:.14,bubble:[18,40],drift:.36,hop:5.2,edge:.78,trailRows:2},Hi=[{name:"\u041E\u0440\u0431\u0438\u0442\u0430",gap:[1.15,1.4],dx:[1,1.3],ring:.15,move:0,ice:0,orbit:!1,crumble:0,hot:0,hole:0,meteor:0,gust:0,star:.5,bonus:.03},{name:"\u041F\u043E\u044F\u0441 \u0430\u0441\u0442\u0435\u0440\u043E\u0438\u0434\u043E\u0432",gap:[1.3,1.55],dx:[1.3,1.6],ring:.06,move:0,ice:0,orbit:!1,crumble:[.3,.5],hot:0,hole:0,meteor:[8,6],gust:0,star:.45,bonus:.04},{name:"\u041B\u0435\u0434\u044F\u043D\u0430\u044F \u0442\u0443\u043C\u0430\u043D\u043D\u043E\u0441\u0442\u044C",gap:[1.4,1.65],dx:[1.5,1.8],ring:.06,move:[.25,.4],ice:[.25,.45],orbit:!1,crumble:0,hot:0,hole:0,meteor:0,gust:0,star:.45,bonus:.045},{name:"\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0439 \u0432\u0435\u0442\u0435\u0440",gap:[1.45,1.75],dx:[1.6,1.9],ring:.06,move:0,ice:0,orbit:!1,crumble:0,hot:[.3,.5],hole:0,meteor:0,gust:6.5,star:.4,bonus:.05},{name:"\u0427\u0451\u0440\u043D\u044B\u0435 \u0434\u044B\u0440\u044B",gap:[1.5,1.8],dx:[1.6,2],ring:.06,move:0,ice:0,orbit:!0,crumble:0,hot:0,hole:[.3,.45],meteor:0,gust:0,star:.4,bonus:.05},{name:"\u0413\u043B\u0443\u0431\u043E\u043A\u0438\u0439 \u043A\u043E\u0441\u043C\u043E\u0441",gap:[1.55,1.85],dx:[1.8,2],ring:.08,move:.35,ice:.2,orbit:!0,crumble:.3,hot:.25,hole:.15,meteor:5.5,gust:7,star:.35,bonus:.05},{name:"\u041F\u043B\u0430\u043D\u0435\u0442\u0430 \u043F\u0440\u0438\u0448\u0435\u043B\u044C\u0446\u0435\u0432",gap:[1.55,1.85],dx:[1.8,2],ring:.06,move:0,ice:0,orbit:!1,crumble:0,hot:0,hole:0,meteor:0,gust:0,alien:[.35,.55],visit:[.3,.45],star:.4,bonus:.05},{name:"\u041A\u043E\u043B\u044C\u0446\u0430 \u0433\u0438\u0433\u0430\u043D\u0442\u0430",gap:[1.5,1.8],dx:[1.5,1.8],ring:0,move:0,ice:0,orbit:!1,crumble:0,hot:0,hole:0,meteor:0,gust:0,belt:[.4,.6],star:.45,bonus:.05,tip:"\u041E\u0431\u043B\u043E\u043C\u043A\u0438 \u043A\u043E\u043B\u044C\u0446\u0430 \u0443\u0437\u043A\u0438\u0435 \u2014 \u0446\u0435\u043B\u044C\u0441\u044F \u0442\u043E\u0447\u043D\u043E"},{name:"\u0413\u0440\u043E\u0437\u043E\u0432\u0430\u044F \u0442\u0443\u043C\u0430\u043D\u043D\u043E\u0441\u0442\u044C",gap:[1.6,1.9],dx:[1.7,2],ring:0,move:0,ice:0,orbit:!1,crumble:0,hot:0,hole:0,meteor:0,gust:0,bolt:[5,3.6],star:.45,bonus:.05,tip:"\u041E\u0431\u043B\u0430\u043A\u0430 \u043F\u0440\u0443\u0436\u0438\u043D\u044F\u0442 \u2014 \u043F\u043E\u0434\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u044E\u0442 \u0432\u044B\u0448\u0435"},{name:"\u041A\u043B\u0430\u0434\u0431\u0438\u0449\u0435 \u0441\u043F\u0443\u0442\u043D\u0438\u043A\u043E\u0432",gap:[1.55,1.85],dx:[1.7,2],ring:0,move:0,ice:0,orbit:!1,crumble:0,hot:0,hole:0,meteor:0,gust:0,spinner:[.3,.45],star:.45,bonus:.05,tip:"\u0421\u043F\u0443\u0442\u043D\u0438\u043A \u043A\u0440\u0435\u043D\u0438\u0442\u0441\u044F \u043F\u043E\u0434 \u043B\u0430\u043F\u0430\u043C\u0438 \u2014 \u0441\u0430\u0434\u0438\u0441\u044C \u043D\u0430 \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0443"},{name:"\u0421\u0432\u0435\u0440\u0445\u043D\u043E\u0432\u0430\u044F",title:"\u0421\u0443\u043F\u0435\u0440\u0443\u0440\u043E\u0432\u0435\u043D\u044C \xB7 \u0421\u0432\u0435\u0440\u0445\u043D\u043E\u0432\u0430\u044F",nova:!0,gap:[1.6,1.9],dx:[1.8,2],ring:.1,move:.15,ice:0,orbit:!1,crumble:.3,hot:.25,hole:.15,meteor:5,gust:7,star:.4,bonus:.06,tip:"\u0412\u043E\u043B\u043D\u0430 \u0441\u0432\u0435\u0442\u0430 \u0438\u0434\u0451\u0442 \u0441\u043D\u0438\u0437\u0443 \u2014 \u043D\u0435 \u043E\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0439\u0441\u044F. \u041F\u043B\u0430\u043D\u0435\u0442\u044B \u0441\u0433\u043E\u0440\u0430\u044E\u0442 \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u044B\u0436\u043A\u0430"}],In=(i,e)=>Array.isArray(i)?i[0]+(i[1]-i[0])*e:i,Um=[{name:"\u041C\u0435\u0442\u0435\u043E\u0440\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C",zone:1,meteor:2.8,meteorMin:2.2,crumble:.5,tip:"\u041C\u0435\u0442\u0435\u043E\u0440\u044B \u043B\u0435\u0442\u044F\u0442 \u0432\u0434\u0432\u043E\u0435 \u0447\u0430\u0449\u0435"},{name:"\u041B\u0435\u0434\u044F\u043D\u043E\u0439 \u0432\u0438\u0442\u043E\u043A",zone:2,ice:.75,iceRun:!0,move:.15,tip:"\u041F\u043E\u0447\u0442\u0438 \u0432\u0441\u0435 \u043F\u043B\u0430\u043D\u0435\u0442\u044B \u2014 \u043B\u0451\u0434"},{name:"\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u0431\u0443\u0440\u044F",zone:3,hot:.5,gust:3.2,tip:"\u0412\u0435\u0442\u0435\u0440 \u043F\u043E\u0447\u0442\u0438 \u043D\u0435 \u0441\u0442\u0438\u0445\u0430\u0435\u0442"},{name:"\u041F\u043E\u043B\u0435 \u0447\u0451\u0440\u043D\u044B\u0445 \u0434\u044B\u0440",zone:4,hole:.7,holeField:!0,orbit:!1,tip:"\u0414\u044B\u0440\u044B \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u0448\u0430\u0433\u0443 \u2014 \u043B\u043E\u0432\u0438 \u0433\u0440\u0430\u0432\u0438\u043C\u0430\u043D\u0451\u0432\u0440\u044B"},{name:"\u0417\u0432\u0451\u0437\u0434\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C",zone:0,rest:!0,starRain:!0,gap:[1.3,1.5],dx:[1.3,1.6],bonus:.12,tip:"\u041F\u0435\u0440\u0435\u0434\u044B\u0448\u043A\u0430: \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0432\u0451\u0437\u0434\u044B"}],hs=Hi.length-1;function Fo(i){if(i<=hs)return Hi[i];let e=Um[(i-hs-1)%Um.length];return e.def||(e.def={...Hi[e.zone],gap:Hi[hs].gap,dx:Hi[hs].dx,...e})}var Ul={wave:[1,1.4],lead:9,max:11,close:3},f0=()=>(hs+1)*le.levelH,Yl=i=>i<=hs?Hi[i].title||`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${i+1} \xB7 ${Hi[i].name}`:`\u0412\u0438\u0442\u043E\u043A ${i-hs} \xB7 ${Fo(i).name}`,jl=i=>i<=hs?i:Fo(i).zone,d0=[null,"ring","crumble","meteor","ice","move","hot","gust","hole","orbit",null,null,"alien","visit",null,"belt",null,"bolt",null,"spinner",null,null],Lo=Object.fromEntries(d0.map((i,e)=>[i,e/2]).filter(([i])=>i)),Fm=new Set(["ring","ice","move","orbit","visit","belt","spinner"]),fM=new Set(["ring","ice","move","orbit","crumble","hot","hole","alien","visit","belt","spinner"]),dM=["ring","crumble","ice","hot","hole",null,"alien",null,null,null,null],Ff={ring:"\u041F\u043B\u0430\u043D\u0435\u0442\u0430 \u0441 \u043A\u043E\u043B\u044C\u0446\u043E\u043C \u043F\u043E\u0434\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442 \u043D\u0430\u043C\u043D\u043E\u0433\u043E \u0432\u044B\u0448\u0435",move:"\u041F\u043B\u0430\u043D\u0435\u0442\u0430 \u0434\u0440\u0435\u0439\u0444\u0443\u0435\u0442 \u2014 \u043F\u0440\u044B\u0433\u0430\u0439, \u043A\u043E\u0433\u0434\u0430 \u043E\u043D\u0430 \u043F\u043E\u0434 \u0442\u043E\u0431\u043E\u0439",crumble:"\u041C\u0435\u0442\u0435\u043E\u0440\u0438\u0442 \u0432\u044B\u0434\u0435\u0440\u0436\u0438\u0442 \u043E\u0434\u0438\u043D \u043F\u0440\u044B\u0436\u043E\u043A \u2014 \u0432\u043D\u0443\u0442\u0440\u0438 \u0437\u0432\u0451\u0437\u0434\u044B",ice:"\u041B\u0451\u0434 \u0432\u044B\u0434\u0435\u0440\u0436\u0438\u0442 \u0442\u0440\u0438 \u043F\u0440\u044B\u0436\u043A\u0430, \u043F\u043E\u0442\u043E\u043C \u0440\u0430\u0441\u043A\u043E\u043B\u0435\u0442\u0441\u044F",orbit:"\u041F\u043B\u0430\u043D\u0435\u0442\u0430 \u0445\u043E\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D \u2014 \u0434\u043E\u0436\u0434\u0438\u0441\u044C \u0435\u0451",hot:"\u041A\u0440\u0430\u0441\u043D\u044B\u0439 \u043A\u0430\u0440\u043B\u0438\u043A \u043E\u0431\u0436\u0438\u0433\u0430\u0435\u0442 \u043B\u0430\u043F\u044B \u2014 \u043E\u0431\u0445\u043E\u0434\u0438 \u0435\u0433\u043E",hole:"\u0427\u0451\u0440\u043D\u0430\u044F \u0434\u044B\u0440\u0430 \u0437\u0430\u0442\u044F\u0433\u0438\u0432\u0430\u0435\u0442. \u041F\u0440\u043E\u043B\u0435\u0442\u0438 \u043F\u043E \u043A\u0440\u0430\u044E \u2014 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u0433\u043E\u043D",alien:"\u041F\u043B\u0430\u043D\u0435\u0442\u0430 \u0437\u0430\u043D\u044F\u0442\u0430 \u2014 \u043F\u0440\u0438\u0448\u0435\u043B\u0435\u0446 \u043E\u0442\u043F\u0438\u0445\u043D\u0451\u0442. \u0418\u0449\u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u0443\u044E",visit:"\u041F\u0440\u0438\u0448\u0435\u043B\u0435\u0446 \u043F\u0440\u0438\u043B\u0435\u0442\u0430\u0435\u0442 \u0438 \u0443\u043B\u0435\u0442\u0430\u0435\u0442 \u2014 \u043F\u0440\u044B\u0433\u0430\u0439, \u043F\u043E\u043A\u0430 \u043F\u043B\u0430\u043D\u0435\u0442\u0430 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u0430",belt:"\u041A\u043E\u043B\u044C\u0446\u043E \u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F: \u043E\u0431\u043B\u043E\u043C\u043A\u0438 \u043F\u043B\u044B\u0432\u0443\u0442 \u0432 \u043E\u0434\u043D\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0438 \u043D\u0435\u0441\u0443\u0442 \u041E\u0440\u0438 \u0441 \u0441\u043E\u0431\u043E\u0439",spinner:"\u0421\u043F\u0443\u0442\u043D\u0438\u043A \u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u2014 \u043F\u0440\u044B\u0433\u0430\u0439, \u043A\u043E\u0433\u0434\u0430 \u043F\u0430\u043D\u0435\u043B\u0438 \u043B\u0435\u0436\u0430\u0442 \u0440\u043E\u0432\u043D\u043E"};function Nm(i,e,t){let n=V;n.tipped[i]||n.alt<Lo[i]*le.levelH||e>t.top-.6||e<t.bot+.8||!(n.clock>(n.sayUntil||0))||(n.tipped[i]=!0,tt(Ff[i],2400,!0))}var Ui=(i,e,t,n,s)=>`${i.map(([r,a,o,c,l])=>`radial-gradient(${r}% ${a}% at ${o}% ${c}%,${l},transparent 70%)`).join(",")},radial-gradient(120% 55% at 50% -6%,${e} 0%,transparent 62%),linear-gradient(180deg,${t} 0%,${n} 55%,${s} 100%)`,Nf=[{accent:"#D9F38B",star:"#dfe7ff",bg:null,amb:null},{accent:"#FFC39A",star:"#ffe6d2",bg:Ui([[60,34,16,30,"rgba(190,140,110,.22)"],[70,30,86,68,"rgba(150,110,130,.18)"]],"#4f3d42","#2b2430","#1a1721","#0d0b12"),amb:{n:.22,col:[12167066,9274e3],v:[-.45,-.3],s:[.03,.06],life:5}},{accent:"#9FD8FF",star:"#cfeaff",bg:Ui([[70,36,82,28,"rgba(90,200,255,.24)"],[70,34,10,64,"rgba(120,150,255,.2)"]],"#2a5f80","#15304a","#0f1f38","#091122"),amb:{n:.4,col:[15136511,10473727],v:[.1,-.5],s:[.025,.05],life:5,sway:.5}},{accent:"#FF9A6B",star:"#ffe0c2",bg:Ui([[110,40,50,0,"rgba(255,120,60,.3)"],[60,30,12,72,"rgba(255,60,80,.16)"]],"#8a3d25","#3a1d22","#22131c","#100911"),amb:{n:.35,col:[16757575,16738877],v:[0,.85],s:[.025,.045],life:3.5,sway:.3}},{accent:"#B39CFF",star:"#d9ccff",bg:Ui([[70,36,18,26,"rgba(140,90,255,.26)"],[60,30,84,62,"rgba(217,243,139,.07)"]],"#3a2970","#1b1335","#0e0a21","#05040f"),amb:{n:.25,col:[11771135,8217560],v:[0,.22],s:[.03,.05],life:5}},{accent:"#D9F38B",star:"#e8fff4",bg:Ui([[70,34,78,30,"rgba(60,200,180,.12)"],[70,34,18,74,"rgba(120,100,255,.12)"]],"#16302f","#0b1317","#070a0f","#020306"),amb:{n:.12,col:[14283659,16777215],v:[0,-.08],s:[.02,.04],life:4}},{accent:"#8CFF9A",star:"#d6ffe0",bg:Ui([[70,36,20,28,"rgba(80,255,150,.2)"],[60,30,84,66,"rgba(60,200,220,.16)"]],"#1f5a45","#10302c","#0a1f22","#040d10"),amb:{n:.22,col:[9240474,14283659],v:[0,.3],s:[.025,.045],life:4,sway:.3}},{accent:"#FFD9A0",star:"#fff0d8",bg:Ui([[90,34,50,102,"rgba(255,190,110,.2)"],[60,30,86,20,"rgba(150,170,255,.12)"]],"#3a3040","#1b1a2c","#11111f","#07070f"),amb:{n:.4,col:[16777215,16769712],v:[.55,0],s:[.02,.045],life:4,sway:.1}},{accent:"#C7B8FF",star:"#e6dcff",bg:Ui([[95,40,28,22,"rgba(150,130,255,.24)"],[95,40,76,70,"rgba(90,110,200,.22)"]],"#3f3d70","#1f2040","#13142b","#080814"),amb:{n:.45,col:[13619455,10133728],v:[-.3,-1.1],s:[.02,.035],life:2.2,sway:.05}},{accent:"#7FF0E0",star:"#dff8ff",bg:Ui([[80,34,22,24,"rgba(90,220,230,.16)"],[80,34,80,60,"rgba(255,120,80,.1)"]],"#22404a","#111f2a","#0b141c","#04080c"),amb:{n:.22,col:[16777215,10479871,16760970],v:[-.22,-.05],s:[.02,.05],life:4,sway:.12}},{accent:"#FFE9A8",star:"#fff4d6",bg:Ui([[150,60,50,112,"rgba(255,225,150,.55)"],[90,40,50,-6,"rgba(255,120,60,.2)"]],"#6a4030","#2c1b22","#1c1220","#40280f"),amb:{n:.5,col:[16771496,16777215,16757575],v:[0,1.5],s:[.025,.05],life:2.2,sway:.4}}],Om=[...document.querySelectorAll("#zone i")],p0=new Te("#dfe7ff"),xr=-1,Fl=0;function Of(i){if(i===xr)return;xr=i;let e=Nf[i],t=Om[Fl],n=Om[1-Fl];t&&n&&(e&&e.bg?(n.style.background=e.bg,n.style.opacity=1,t.style.opacity=0,Fl=1-Fl):(t.style.opacity=0,n.style.opacity=0)),document.body.style.setProperty("--zone",e?e.accent:"#D9F38B"),p0.set(e?e.star:"#dfe7ff"),e||(_r.material.uniforms.uColor.value.set("#dfe7ff"),Ol.classList.remove("show"),Ze.gateShow=!1,Mf.className="",Ze.wind="",Sn&&(Sn.visible=!1,Sn.material.opacity=0),En&&(En.visible=!1,En.material.opacity=0))}var Sn=null;function pM(){let i=(t,n)=>t+Math.random()*(n-t),e=Xn((t,n)=>{let s=n/2,r=n*.33,a=l=>{t.save(),t.translate(s,s),t.rotate(-.35),t.scale(1,.26);for(let[h,u,f]of[[1.32,9,.5],[1.52,16,.36],[1.76,6,.3]])t.strokeStyle=`rgba(255,226,180,${f})`,t.lineWidth=u*n/512,t.beginPath(),t.arc(0,0,r*h,l?0:Math.PI,l?Math.PI:Math.PI*2),t.stroke();t.restore()};a(!1),t.save(),t.beginPath(),t.arc(s,s,r,0,7),t.clip(),t.translate(s,s),t.rotate(-.35);let o=["#e8c08a","#c9925c","#f0d6a8","#b87a52","#e0b47c","#9a6248","#eccb98","#c48a5a"];for(let l=-r,h=0;l<r;h++){let u=r*i(.1,.26);t.fillStyle=o[h%o.length],t.fillRect(-r,l,2*r,u+1),l+=u}t.rotate(.35);let c=t.createRadialGradient(-r*.45,-r*.45,r*.15,0,0,r*1.1);c.addColorStop(0,"rgba(255,255,255,.14)"),c.addColorStop(.55,"rgba(0,0,0,0)"),c.addColorStop(1,"rgba(8,8,24,.8)"),t.fillStyle=c,t.fillRect(-r,-r,2*r,2*r),t.restore(),a(!0)},512);Sn=new Ut(new Ct({map:e,transparent:!0,depthWrite:!1,opacity:0})),Sn.scale.setScalar(5.4),Sn.renderOrder=-2,Sn.visible=!1,pe.add(Sn)}var En=null;function mM(){let i=(t,n)=>t+Math.random()*(n-t),e=Xn((t,n)=>{let s=n/2,r=n*.42,a=t.createRadialGradient(s,s,r*.96,s,s,r*1.16);a.addColorStop(0,"rgba(120,220,255,.75)"),a.addColorStop(1,"rgba(120,220,255,0)"),t.fillStyle=a,t.beginPath(),t.arc(s,s,r*1.16,0,7),t.fill(),t.save(),t.beginPath(),t.arc(s,s,r,0,7),t.clip();let o=t.createRadialGradient(s,s-r*.5,r*.1,s,s,r);o.addColorStop(0,"#3f8fe0"),o.addColorStop(1,"#123a7a"),t.fillStyle=o,t.fillRect(0,0,n,n);for(let l=0;l<16;l++)t.fillStyle=Math.random()<.6?"#3f9a5a":"#a08a5a",t.globalAlpha=i(.6,.9),t.beginPath(),t.ellipse(i(s-r,s+r),i(s-r,s),i(18,60),i(10,30),i(0,3),0,7),t.fill();t.globalAlpha=.75,t.strokeStyle="#fff",t.lineCap="round";for(let l=0;l<16;l++){t.lineWidth=i(5,14);let h=i(s-r,s+r),u=i(s-r,s+r*.2);t.beginPath(),t.moveTo(h,u),t.bezierCurveTo(h+40,u-14,h+80,u+14,h+i(90,150),u+i(-10,10)),t.stroke()}t.globalAlpha=1;let c=t.createLinearGradient(0,s-r,0,s+r);c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(.5,"rgba(4,8,20,.45)"),c.addColorStop(1,"rgba(4,8,20,.9)"),t.fillStyle=c,t.fillRect(0,0,n,n),t.restore()},512);En=new Ut(new Ct({map:e,transparent:!0,depthWrite:!1,opacity:0})),En.scale.setScalar(12),En.renderOrder=-2,En.visible=!1,pe.add(En)}function gM(i,e){if(xr===9&&!En&&mM(),En){let r=xr===9?.75:0;En.material.opacity+=(r-En.material.opacity)*Math.min(1,1.2*i),En.visible=En.material.opacity>.01,En.position.set(.4,e.bot*2-3.4-(V.alt-9*le.levelH)*.03,-7)}if(xr===7&&!Sn&&pM(),Sn){let r=xr===7?.62:0;Sn.material.opacity+=(r-Sn.material.opacity)*Math.min(1,1.2*i),Sn.visible=Sn.material.opacity>.01,Sn.position.set(-1.3,e.bot+(e.top-e.bot)*.22-(V.alt-7*le.levelH)*.04,-7)}let t=V,n=Nf[xr];_r.material.uniforms.uColor.value.lerp(p0,Math.min(1,i));let s=n&&n.amb;if(s)for(let r=0,a=zn(s.n,i);r<a;r++){let o=mt((Math.random()*2-1)*(e.xm+1.2),e.bot+Math.random()*(e.top-e.bot+1.5),-1.2+Math.random()*1.7,new R(s.v[0]+(Math.random()-.5)*(s.sway||.15),s.v[1]*(.7+Math.random()*.6),0),s.s[0]+Math.random()*(s.s[1]-s.s[0]),s.life*(.7+Math.random()*.6));o.material.color.set(s.col[Math.random()<.5?0:1]),o.userData.fin=.8}}var Ol=$e("#gGate"),bM=$e("#gGate span"),Mf=$e("#gWind"),m0=$e("#gLvl");function xM(){let i=V,e=!1;for(let t of[i.level+1,i.level]){if(t<1)continue;let n=Math.round(on(_a.set(0,i.baseY+t*le.levelH-i.scrolled,0)).y);if(!(n<300||n>innerHeight-100)){e=!0,n!==Ze.gateY&&(Ze.gateY=n,Ol.style.transform=`translate(-50%, ${n}px)`),t!==Ze.gateN&&(Ze.gateN=t,bM.textContent=Yl(t),Ol.style.color=Nf[jl(t)].accent);break}}e!==Ze.gateShow&&(Ze.gateShow=e,Ol.classList.toggle("show",e))}var yM="jump";function kf(){try{return+localStorage.getItem("ori-record-jump")||0}catch{return 0}}function g0(){try{return+localStorage.getItem("ori-record-stars")||0}catch{return 0}}function _M(i){try{localStorage.setItem("ori-record-stars",String(i))}catch{}}function vM(i){try{localStorage.setItem("ori-record-jump",String(i))}catch{}}var Ma=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g," ");function b0(){let i=kf(),e=g0();document.querySelectorAll(".g-rec").forEach(t=>{t.textContent=i>0?`${Ma(i)} \u043C${e>0?" \xB7 \u2605 "+e:""}`:""}),document.querySelectorAll(".g-recchip").forEach(t=>{t.style.display=i>0?"":"none"})}b0();var hf=$e("#gScore"),ew=$e("#gAlt"),MM=$e("#gAltFill"),SM=$e("#gAltMe"),Nl=$e("#gAltStar");function Gn(){if(!hf)return;if(V.mode!=="jump"){hf.innerHTML=Ze.html="";return}let i=`${Ma(Math.floor(V.best||0))} \u043C<span>\u2605 ${V.bank}${V.bubble?' \xB7 <i class="bub"></i>':""}${V.hop?' \xB7 <b class="hop">\u2191 \u043F\u043E\u0434\u0441\u043A\u043E\u043A</b>':""}</span>`;i!==Ze.html&&(Ze.html=i,hf.innerHTML=i);let e=V.need?V.lit>=V.need?"\u2713":`${V.lit}/${V.need}`:"";e!==Ze.cnt&&(Ze.cnt=e,km.textContent=e,km.classList.toggle("full",e==="\u2713"));let t=V.dayStar&&!V.supernova,n=Math.max(0,V.alt||0),s=t?le.goal:V.dayStar?Math.floor(n/100)*100:0,r=t?f0()-le.goal:V.dayStar?100:le.goal,a=Se.clamp((n-s)/r,0,1),o=s?a:Se.clamp((V.best||0)/le.goal,0,1),c=t?"\u2739":s?String(s+100):"\u2605";t!==Ze.toNova&&(Ze.toNova=t,Nl.classList.toggle("nova",t)),c!==Ze.lab&&(Ze.lab=c,Nl.textContent=c,Nl.classList.toggle("num",!!s&&!t));let l=`scaleY(${o.toFixed(3)})`,h=`${(a*100).toFixed(1)}%`;l!==Ze.fill&&(Ze.fill=l,MM.style.transform=l),h!==Ze.me&&(Ze.me=h,SM.style.bottom=h),!!V.dayStar!==Ze.star&&(Ze.star=!!V.dayStar,Nl.classList.toggle("got",Ze.star))}var Ze={html:"",fill:"",me:"",star:null,cnt:null,lab:"\u2605",gateY:null,gateN:null,gateShow:!1,wind:""},km=$e("#gCount");function cs(){let i=V,e=i.series;Gl.textContent=e>=3?`\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E \xD7${e} \xB7 \u0437\u0432\u0451\u0437\u0434\u044B \xD72`:e>=1?`\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E \xD7${e}`:"",Gl.classList.toggle("on",e>=1)}function Vn(i,e,t){let n=document.createElement("div");n.className="g-pop"+(t?" bad":""),n.textContent=i,n.style.left=Math.max(20+i.length*5.5,Math.min(innerWidth-20-i.length*5.5,e.x))+"px",n.style.top=e.y+"px",document.body.appendChild(n),requestAnimationFrame(()=>n.classList.add("go")),setTimeout(()=>n.remove(),900)}function Bm(i,e){let t=document.createElement("canvas");t.width=256,t.height=128;let n=t.getContext("2d");n.fillStyle=i,n.fillRect(0,0,256,128);for(let r=0;r<7;r++){n.fillStyle=r%2?i:e,n.globalAlpha=.35+Math.random()*.3;let a=10+r*17+Math.random()*6;n.fillRect(0,a,256,5+Math.random()*9)}n.globalAlpha=.28,n.fillStyle=e;for(let r=0;r<9;r++)n.beginPath(),n.arc(Math.random()*256,20+Math.random()*88,4+Math.random()*9,0,Math.PI*2),n.fill();let s=new Jn(t);return s.colorSpace=Mt,s.wrapS=fi,s}function Hm(i){let e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d");if(t.fillStyle=i?"#000":"#303B57",t.fillRect(0,0,256,128),!i){t.fillStyle="rgba(20,26,44,.6)";for(let s=0;s<14;s++)t.beginPath(),t.arc(Math.random()*256,Math.random()*128,3+Math.random()*8,0,Math.PI*2),t.fill()}t.strokeStyle=i?"#FF0032":"#5a1020",t.lineWidth=i?2.2:3,t.lineCap="round";for(let s=0;s<9;s++){let r=Math.random()*256,a=Math.random()*128;t.beginPath(),t.moveTo(r,a);for(let o=0;o<5;o++)r+=(Math.random()-.5)*50,a+=(Math.random()-.5)*30,t.lineTo(r,a);t.stroke()}let n=new Jn(e);return n.colorSpace=Mt,n}function Xn(i,e=128){let t=document.createElement("canvas");t.width=t.height=e,i(t.getContext("2d"),e);let n=new Jn(t);return n.colorSpace=Mt,n}var x0=Xn((i,e)=>{let t=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,250,220,.55)"),t.addColorStop(.4,"rgba(255,240,180,.18)"),t.addColorStop(1,"rgba(255,240,180,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)});function zm(i){return Xn((e,t)=>{e.fillStyle="#000",e.fillRect(0,0,t,t),e.strokeStyle="#fff",e.lineCap="round";for(let n=0;n<i*5;n++){e.lineWidth=1.5+Math.random()*1.5;let s=t/2+(Math.random()-.5)*t*.4,r=t/2+(Math.random()-.5)*t*.4;e.beginPath(),e.moveTo(s,r);for(let a=0;a<4;a++)s+=(Math.random()-.5)*t*.35,r+=(Math.random()-.5)*t*.35,e.lineTo(s,r);e.stroke()}},256)}var y0=[null,zm(1),zm(2)],_0=Xn((i,e)=>{let t=i.createRadialGradient(e/2,e/2,e*.12,e/2,e/2,e/2);t.addColorStop(0,"#000"),t.addColorStop(.32,"#05060c"),t.addColorStop(.42,"#7d63d8"),t.addColorStop(.5,"#D9F38B"),t.addColorStop(.62,"rgba(125,99,216,.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.beginPath(),i.arc(e/2,e/2,e/2,0,Math.PI*2),i.fill()}),Bf=Xn((i,e)=>{let t=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,170,90,.9)"),t.addColorStop(.5,"rgba(255,60,40,.35)"),t.addColorStop(1,"rgba(255,0,50,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)}),v0=Xn((i,e)=>{i.strokeStyle="rgba(217,243,139,.9)",i.lineWidth=e*.03,i.beginPath(),i.arc(e/2,e/2,e*.45,0,Math.PI*2),i.stroke();let t=i.createRadialGradient(e*.38,e*.35,0,e/2,e/2,e*.45);t.addColorStop(0,"rgba(255,255,255,.35)"),t.addColorStop(1,"rgba(217,243,139,.08)"),i.fillStyle=t,i.fill()}),EM={rocket(i,e){let t=e/100;i.save(),i.translate(e/2,e/2),i.rotate(Math.PI/4),i.fillStyle="#FFB347",i.beginPath(),i.moveTo(-7*t,20*t),i.quadraticCurveTo(0,46*t,7*t,20*t),i.fill(),i.fillStyle="#FF0032";for(let n of[-1,1])i.beginPath(),i.moveTo(n*9*t,4*t),i.lineTo(n*22*t,25*t),i.lineTo(n*9*t,21*t),i.closePath(),i.fill();i.fillStyle="#FAFAFC",i.beginPath(),i.moveTo(0,-31*t),i.bezierCurveTo(16*t,-14*t,13*t,10*t,10*t,22*t),i.lineTo(-10*t,22*t),i.bezierCurveTo(-13*t,10*t,-16*t,-14*t,0,-31*t),i.fill(),i.fillStyle="#FF0032",i.beginPath(),i.moveTo(0,-31*t),i.bezierCurveTo(6*t,-25*t,9*t,-20*t,10.5*t,-14*t),i.lineTo(-10.5*t,-14*t),i.bezierCurveTo(-9*t,-20*t,-6*t,-25*t,0,-31*t),i.fill(),i.fillStyle="#1D2233",i.beginPath(),i.arc(0,-2*t,5.6*t,0,Math.PI*2),i.fill(),i.fillStyle="#D9F38B",i.beginPath(),i.arc(0,-2*t,3.4*t,0,Math.PI*2),i.fill(),i.restore()},bubble(i,e){let t=e/100;i.fillStyle="rgba(217,243,139,.18)",i.strokeStyle="#D9F38B",i.lineWidth=4*t,i.beginPath(),i.arc(e/2,e/2,22*t,0,Math.PI*2),i.fill(),i.stroke(),i.strokeStyle="#fff",i.lineWidth=3.5*t,i.lineCap="round",i.beginPath(),i.arc(e/2,e/2,14.5*t,Math.PI*1.08,Math.PI*1.45),i.stroke()},magnet(i,e){let t=e/100;i.save(),i.translate(e/2,e/2+3*t),i.lineWidth=13*t,i.lineCap="butt",i.strokeStyle="#FF0032",i.beginPath(),i.moveTo(-15*t,-24*t),i.lineTo(-15*t,3*t),i.arc(0,3*t,15*t,Math.PI,0,!0),i.lineTo(15*t,-24*t),i.stroke(),i.strokeStyle="#FAFAFC",i.beginPath(),i.moveTo(-15*t,-24*t),i.lineTo(-15*t,-13*t),i.moveTo(15*t,-24*t),i.lineTo(15*t,-13*t),i.stroke(),i.restore()}},M0=Object.fromEntries(Object.entries(EM).map(([i,e])=>[i,Xn((t,n)=>{t.fillStyle="rgba(29,34,51,.85)",t.beginPath(),t.arc(n/2,n/2,n*.46,0,Math.PI*2),t.fill(),t.strokeStyle="#D9F38B",t.lineWidth=n*.05,t.stroke(),e(t,n)},192)])),wa=.38,ni={planet:new sr(wa,40,28),rock:new so(.42,0),ring:new rr(.62,.045,10,48),belt:new rr(.66,.02,8,48)},Ln={planet:[["#cbb8ff","#9d86e8"],["#ffa3b1","#e0566d"],["#a9d4ff","#5f9be0"],["#b6f0d8","#4fbf98"],["#ffd2a8","#e8935a"],["#e6f7a8","#a9cf4c"],["#ffe6a0","#e0b247"],["#e4efff","#a2b3dc"]].map(([i,e])=>new ht({map:Bm(i,e),roughness:.55,metalness:.05,emissive:1843510,emissiveIntensity:.25})),rock:new ht({map:Hm(!1),roughness:.95,flatShading:!0,emissive:16777215,emissiveMap:Hm(!0),emissiveIntensity:1.2}),ice:new ht({color:12572927,roughness:.15,metalness:.1,transparent:!0,opacity:.82,emissive:7314687,emissiveIntensity:.25}),hot:new ht({map:Bm("#ff7a3d","#e0263a"),emissive:16730652,emissiveIntensity:.9,roughness:.5}),lime:new ht({color:14283659,emissive:14283659,emissiveIntensity:.55,roughness:.4}),belt:new ht({color:16448252,roughness:.5,transparent:!0,opacity:.6})};function vi(){let i=va(0,1,0).y,e=va(0,-1,0).y,t=Math.abs(va(tM(.82),0,0).x)-.35;return{top:i,bot:e,xm:t}}function ps(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new Jn(n);return s.colorSpace=Mt,s.wrapS=fi,s}var q=(i,e)=>i+Math.random()*(e-i);function uf(i,e,t){return new ht({map:ps(256,128,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r);for(let a=0;a<60;a++)n.globalAlpha=q(.08,.2),n.fillStyle=Math.random()<.5?e:t,n.beginPath(),n.ellipse(q(0,s),q(0,r),q(6,26),q(4,14),q(0,3),0,7),n.fill();for(let a=0;a<12;a++){let o=q(0,s),c=q(16,r-16),l=q(4,12);n.globalAlpha=.55,n.fillStyle=e,n.beginPath(),n.arc(o,c,l,0,7),n.fill(),n.globalAlpha=.5,n.strokeStyle=t,n.lineWidth=1.5,n.beginPath(),n.arc(o,c,l,Math.PI*.9,Math.PI*1.9),n.stroke()}}),roughness:.95,metalness:0,flatShading:!0,emissive:2760736,emissiveIntensity:.4})}function ff(i,e){return new ht({map:ps(256,128,(t,n,s)=>{let r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,i),r.addColorStop(.5,e),r.addColorStop(1,i),t.fillStyle=r,t.fillRect(0,0,n,s),t.fillStyle="rgba(30,70,150,.38)";for(let a=0;a<9;a++)t.beginPath(),t.ellipse(q(0,n),q(38,s-38),q(10,28),q(3,7),0,0,7),t.fill();t.strokeStyle="rgba(255,255,255,.8)",t.lineWidth=1.2;for(let a=0;a<14;a++){let o=q(0,n),c=q(30,s-30);t.beginPath(),t.moveTo(o,c);for(let l=0;l<4;l++)o+=q(-22,22),c+=q(-12,12),t.lineTo(o,c);t.stroke()}}),roughness:.5,metalness:.05,emissive:2775702,emissiveIntensity:.2})}function df(i){let e=[];for(let r=0;r<12;r++){let a=q(0,256),o=q(0,128),c=[[a,o]];for(let l=0;l<5;l++)a+=q(-34,34),o+=q(-20,20),c.push([a,o]);e.push(c)}let t=(r,a,o)=>{r.strokeStyle=a,r.lineWidth=o,r.lineCap=r.lineJoin="round";for(let c of e)r.beginPath(),c.forEach(([l,h],u)=>u?r.lineTo(l,h):r.moveTo(l,h)),r.stroke()},n=ps(256,128,(r,a,o)=>{r.fillStyle="#3c2628",r.fillRect(0,0,a,o);for(let c=0;c<40;c++)r.globalAlpha=q(.15,.4),r.fillStyle=Math.random()<.5?"#22151a":"#5a373a",r.beginPath(),r.ellipse(q(0,a),q(0,o),q(8,24),q(5,12),q(0,3),0,7),r.fill();r.globalAlpha=1,t(r,"#7a2a14",5)}),s=ps(256,128,(r,a,o)=>{r.fillStyle="#0c0606",r.fillRect(0,0,a,o),t(r,i,4.5),t(r,"#ffe2a8",1.5)});return new ht({map:n,emissiveMap:s,emissive:16777215,emissiveIntensity:1.15,roughness:.9})}function pf(i,e,t){let n=[];for(let a=0;a<4;a++)n.push([q(14,114),q(1.5,4)]);let s=ps(256,128,(a,o,c)=>{a.fillStyle=i,a.fillRect(0,0,o,c);for(let l=0;l<8;l++)a.globalAlpha=q(.3,.6),a.fillStyle=e,a.fillRect(0,q(0,c),o,q(4,14))}),r=ps(256,128,(a,o,c)=>{a.fillStyle="#0a0716",a.fillRect(0,0,o,c),a.fillStyle=t;for(let[l,h]of n)a.fillRect(0,l,o,h);a.fillStyle="#fff";for(let l=0;l<36;l++)a.fillRect(q(0,o),q(0,c),1.5,1.5)});return new ht({map:s,emissiveMap:r,emissive:16777215,emissiveIntensity:.95,roughness:.4,metalness:.2})}function mf(i,e,t){let n=[];for(let a=0;a<7;a++){let o=q(0,256),c=q(24,104);for(let l=0;l<7;l++)n.push([o+q(-12,12),c+q(-8,8),q(1.2,2.4)])}let s=ps(256,128,(a,o,c)=>{a.fillStyle=i,a.fillRect(0,0,o,c);for(let l=0;l<46;l++)a.globalAlpha=q(.2,.5),a.fillStyle=Math.random()<.6?e:"#7fd08a",a.beginPath(),a.ellipse(q(0,o),q(0,c),q(8,26),q(5,13),q(0,3),0,7),a.fill();a.globalAlpha=.75,a.fillStyle="#1c6f86";for(let l=0;l<5;l++)a.beginPath(),a.ellipse(q(0,o),q(26,c-26),q(7,15),q(4,7),0,0,7),a.fill()}),r=ps(256,128,(a,o,c)=>{a.fillStyle="#04120a",a.fillRect(0,0,o,c),a.fillStyle=t;for(let[l,h,u]of n)a.beginPath(),a.arc(l,h,u,0,7),a.fill()});return new ht({map:s,emissiveMap:r,emissive:16777215,emissiveIntensity:1,roughness:.7})}var wM=Xn((i,e)=>{let t=e/100;i.lineCap="round",i.strokeStyle="#2f9e4f",i.lineWidth=3*t,i.beginPath(),i.moveTo(50*t,30*t),i.lineTo(50*t,12*t),i.stroke(),i.fillStyle="#eaffb0",i.shadowColor="#d9f38b",i.shadowBlur=8*t,i.beginPath(),i.arc(50*t,10*t,5*t,0,7),i.fill(),i.shadowBlur=0,i.strokeStyle="#35b85a",i.lineWidth=6*t,i.beginPath(),i.moveTo(36*t,72*t),i.lineTo(21*t,60*t),i.moveTo(64*t,72*t),i.lineTo(79*t,60*t),i.stroke(),i.fillStyle="#2a9648",i.beginPath(),i.ellipse(41*t,95*t,8*t,4*t,0,0,7),i.fill(),i.beginPath(),i.ellipse(59*t,95*t,8*t,4*t,0,0,7),i.fill(),i.fillStyle="#35b85a",i.beginPath(),i.ellipse(50*t,78*t,17*t,18*t,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,.2)",i.beginPath(),i.ellipse(50*t,81*t,9*t,10*t,0,0,7),i.fill(),i.fillStyle="#4fd676",i.beginPath(),i.ellipse(50*t,45*t,27*t,21*t,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,.22)",i.beginPath(),i.ellipse(42*t,33*t,10*t,5*t,-.4,0,7),i.fill(),i.fillStyle="#0d1a12";for(let n of[-1,1])i.save(),i.translate((50+n*11)*t,46*t),i.rotate(n*.35),i.beginPath(),i.ellipse(0,0,7*t,10*t,0,0,7),i.fill(),i.restore();i.fillStyle="#fff";for(let n of[-1,1])i.beginPath(),i.arc((50+n*11-2)*t,42*t,2.4*t,0,7),i.fill();i.strokeStyle="#0d1a12",i.lineWidth=2*t,i.beginPath(),i.arc(50*t,57*t,5*t,.15*Math.PI,.85*Math.PI),i.stroke()},192),Kl=.64,Io=wa-.02+Kl*.44,Jl=[Ln.planet,[uf("#7c7078","#3f363c","#b3a59c"),uf("#86705f","#463a33","#c2a98f"),uf("#6a6f7c","#353a45","#a6adba")],[ff("#a9d8ff","#4f93d8"),ff("#b4ecf4","#48a8c4"),ff("#b9c6ff","#6478d6")],[df("#ff7a2a"),df("#ff5a2a"),df("#ffa23a")],[pf("#2a1f55","#45308a","#b39cff"),pf("#1f1a48","#3a2a78","#d9f38b"),pf("#33205c","#56308f","#ff8ad8")],null,[mf("#2f8a55","#1d5c3a","#8cff9a"),mf("#3a9a7a","#1f5f55","#d9f38b"),mf("#4a9a45","#2a6230","#aef0ff")],[new ht({color:11847390,roughness:.35,metalness:.2,flatShading:!0,emissive:3691132,emissiveIntensity:.35}),new ht({color:14272168,roughness:.5,metalness:.1,flatShading:!0,emissive:5916208,emissiveIntensity:.35}),new ht({color:15134975,roughness:.2,metalness:.25,flatShading:!0,emissive:4876960,emissiveIntensity:.4})]],Sf={landW:.5,top:.22,spring:1.16},Ef=[14080760,12896498,14868217].map(i=>new ht({color:i,roughness:1,metalness:0,emissive:5656744,emissiveIntensity:.5}));Jl.push(Ef);var yr={landW:.64,top:.12,hold:.3,slide:3.2,scale:1.2,lean:.5},ba={core:new ht({color:13805902,roughness:.45,metalness:.7,emissive:3811848,emissiveIntensity:.5}),steel:new ht({color:10135480,roughness:.5,metalness:.6,emissive:1712688,emissiveIntensity:.5}),panel:new ht({map:ps(128,64,(i,e,t)=>{i.fillStyle="#15306e",i.fillRect(0,0,e,t),i.strokeStyle="#7fc8ff",i.lineWidth=1.2;for(let n=0;n<=8;n++)i.beginPath(),i.moveTo(n*16,0),i.lineTo(n*16,t),i.stroke();for(let n=0;n<=4;n++)i.beginPath(),i.moveTo(0,n*16),i.lineTo(e,n*16),i.stroke();i.fillStyle="rgba(8,12,30,.7)";for(let n=0;n<5;n++)i.fillRect(Math.floor(q(0,8))*16+1,Math.floor(q(0,4))*16+1,14,14)}),roughness:.3,metalness:.4,emissive:2775728,emissiveIntensity:.45})};Jl.push([ba.core]);var Ro={core:new Kn(.24,.2,.22),panel:new Kn(1,.03,.26),arm:new Kn(.06,.03,.04),dish:new no(.1,.08,14,1,!0),mast:new Zr(.008,.008,.2,5)};function TM(){let i=new Gt,e=.085;i.add(new ke(Ro.core,ba.core));for(let r of[-1,1]){let a=Math.random()<.25?q(.2,.3):.4,o=new ke(Ro.panel,ba.panel);o.scale.x=a,o.position.set(r*(.17+a/2),e,0),i.add(o);let c=new ke(Ro.arm,ba.steel);c.position.set(r*.145,e,0),i.add(c)}let t=new ke(Ro.dish,ba.steel);t.position.set(.02,-.15,.06),t.rotation.x=.5,i.add(t);let n=new ke(Ro.mast,ba.steel);n.position.set(-.07,-.2,-.05),i.add(n);let s=new Ut(new Ct({map:S0,color:16724032,transparent:!0,depthWrite:!1,blending:tn,opacity:0}));return s.scale.setScalar(.16),s.position.set(.08,-.03,.13),i.add(s),i.userData.blink=s,i.scale.setScalar(yr.scale),i.rotation.x=yr.lean,i}var AM=new sr(1,18,12),S0=Xn((i,e)=>{let t=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,.9)"),t.addColorStop(.4,"rgba(255,255,255,.3)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)});function RM(){let i=new Gt,e=Ef[Math.floor(Math.random()*Ef.length)];for(let[n,s,r,a]of[[0,0,0,.3],[-.3,-.04,0,.23],[.3,-.03,0,.24],[-.15,.06,.06,.22],[.16,.07,-.04,.23],[.02,-.07,.14,.22],[-.44,-.09,.02,.15],[.45,-.08,.02,.15]]){let o=new ke(AM,e);o.position.set(n+q(-.03,.03),s*.8+q(-.02,.02),r),o.scale.set(a*q(.95,1.1),a*.78,a),i.add(o)}let t=new Ut(new Ct({map:S0,color:13285631,transparent:!0,depthWrite:!1,blending:tn,opacity:0}));return t.scale.set(1.5,.9,1),t.position.z=.32,i.add(t),i.userData.glow=t,i}var CM=Xn((i,e)=>{let t=i.createLinearGradient(0,0,e,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.5,"rgba(255,255,255,.85)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)},64),Vm=[0,1,2].map(()=>{let i=document.createElement("canvas");i.width=96,i.height=512;let e=i.getContext("2d"),t=[[48,0]];for(let r=28;r<512;r+=28)t.push([48+q(-30,30),r+q(-8,8)]);t.push([48+q(-10,10),512]);let n=(r,a)=>{e.strokeStyle=r,e.lineWidth=a,e.lineJoin="round",e.beginPath(),t.forEach(([o,c],l)=>l?e.lineTo(o,c):e.moveTo(o,c)),e.stroke()};n("rgba(170,150,255,.35)",18),n("rgba(210,200,255,.7)",8),n("#fff",3);let s=new Jn(i);return s.colorSpace=Mt,s}),wf={landW:.36,top:.12};ni.shard=(()=>{let i=new $r(1,2),e=i.attributes.position;for(let t=0;t<e.count;t++){let n=1+.16*Math.sin(e.getX(t)*7.3+e.getZ(t)*4.1)+.1*Math.sin(e.getZ(t)*9.7);e.setXYZ(t,e.getX(t)*.52*n,e.getY(t)*wf.top*(e.getY(t)>0?1:1.5),e.getZ(t)*.32*n)}return i.computeVertexNormals(),i})();ni.asteroid=new $r(wa*1.04,1);function gf(i){let n=wa,s=[],r=[];for(let o=0;o<=10;o++)for(let c=0;c<=44;c++){let l=c/44*Math.PI*2,h=.93+.2*Math.sin(3*l+i*2.1)+.11*Math.sin(7*l+i*5.3),u=o/10*h,f=n*(1.045+.15*Math.cos(u)**2)*(o===10?.985:1);s.push(f*Math.sin(u)*Math.cos(l),f*Math.cos(u),f*Math.sin(u)*Math.sin(l))}for(let o=0;o<10;o++)for(let c=0;c<44;c++){let l=o*45+c,h=l+44+1;r.push(l,l+1,h,l+1,h+1,h)}let a=new Dt;return a.setAttribute("position",new pt(s,3)),a.setIndex(r),a.computeVertexNormals(),a}var Gm=[gf(1),gf(2.7),gf(4.4)],PM=new ht({color:16777215,roughness:.75,metalness:0,emissive:12901631,emissiveIntensity:.32,side:an}),IM=Xn((i,e)=>{let t=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(.5,"rgba(255,255,255,0)"),t.addColorStop(.64,"rgba(255,255,255,.85)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)},256),LM=[[12570879,.3],[16759178,.28],[10478847,.45],[16738858,.8],[11111423,.75],[11111423,0],[8257440,.6],[16769712,0],[13089023,0],[8384736,0]].map(([i,e])=>new Ct({map:IM,color:i,opacity:e,transparent:!0,depthWrite:!1,blending:tn}));function Do(i,e,t){let n=new Gt,s;if(i==="crumble")s=new ke(ni.rock,Ln.rock),s.scale.setScalar(.9),s.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3);else if(i==="ice")s=new ke(ni.planet,Ln.ice.clone());else if(i==="ground")s=new yt;else if(i==="hot"){s=new ke(ni.planet,Ln.hot);let a=new Ut(new Ct({map:Bf,transparent:!0,depthWrite:!1,blending:tn}));a.scale.setScalar(1.15),n.add(a),n.userData.glow=a}else{let a=V.skinZone??0,o=a===10;(a===5||o)&&(a=Math.floor(Math.random()*5)),o&&i!=="rescue"&&(n.userData.nova=!0);let c=i==="rescue"?Ln.lime:Jl[a][Math.floor(Math.random()*Jl[a].length)],l=a===7&&i!=="rescue",h=a===8&&i!=="rescue",u=a===9&&i!=="rescue";if(u?(s=TM(),n.userData.skin=9,n.userData.flat=!0,n.userData.landW=yr.landW,n.userData.top=yr.top,n.userData.blink=s.userData.blink):h?(s=RM(),n.userData.skin=8,n.userData.flat=!0,n.userData.landW=Sf.landW,n.userData.top=Sf.top,n.userData.flick=s.userData.glow):s=new ke(l?ni.shard:a===1&&i!=="rescue"?ni.asteroid:ni.planet,c),!h&&!u&&s.rotation.set((Math.random()-.5)*.5,Math.random()*6,(Math.random()-.5)*.4),l)s.rotation.set(q(-.06,.06),q(-.25,.25),q(-.06,.06)),n.userData.skin=7,n.userData.flat=!0,n.userData.landW=wf.landW,n.userData.top=wf.top;else if(!(h||u)){if(i!=="rescue"){n.userData.skin=a;let f=new Ut(LM[a]);if(f.scale.setScalar(1.22),f.position.z=-.12,n.add(f),a===2){let p=new ke(Gm[Math.floor(Math.random()*Gm.length)],PM);p.rotation.set(q(-.1,.1),q(0,6.28),q(-.1,.1)),n.add(p),n.userData.cap=p}}}if(i==="move"||i==="orbit"){let f=new ke(ni.belt,Ln.belt);f.rotation.x=Math.PI/2-.25,n.add(f)}}if(n.add(s),i==="alien"||i==="visit"){let a=new Ut(new Ct({map:wM,transparent:!0,depthWrite:!1}));a.scale.setScalar(Kl),a.position.set(0,Io,.3),n.add(a),n.userData.alien=a}if(i==="orbit"){let a=vi().xm+wa,o=[];for(let l=0;l<=40;l++)o.push(new R(-a+l*2*a/40,0,-.1));let c=new Ai(new Dt().setFromPoints(o),new Qr({color:16448252,transparent:!0,opacity:.28,dashSize:.12,gapSize:.1}));c.computeLineDistances(),c.position.set(-e,0,0),n.add(c)}if(i==="ring"){let a=new ke(ni.ring,Ln.lime);a.rotation.x=Math.PI/2-.35,a.rotation.y=.25,n.add(a)}n.position.set(e,t,i==="ground"?0:-.55),pe.add(n);let r={grp:n,body:s,type:i,skin:n.userData.skin??-1,glow:n.userData.glow,cap:n.userData.cap,alien:n.userData.alien,occupied:i==="alien",visitT:Math.random()*4.8,flat:!!n.userData.flat,landW:n.userData.landW??le.landW,flick:n.userData.flick,nova:!!n.userData.nova,blink:n.userData.blink,rot:i==="spinner"?Math.random()*6.28:0,rotV:i==="spinner"?(Math.random()<.5?-1:1)*1.15:0,tilt:0,tiltV:0,x0:e,w:i==="ground"?1.4:.42,top:i==="ground"?0:i==="crumble"?.34:wa-.02,vx:0,alive:!0,gone:0};return i==="move"&&(r.vx=(Math.random()<.5?-1:1)*(.6+Math.random()*.5),r.swing=1.1),(i==="orbit"||i==="belt")&&(r.swing=99),r.flat&&(r.top=n.userData.top),V.plats.push(r),r}function No(i){let e=V.plats[i];pe.remove(e.grp),V.plats.splice(i,1)}function Hf(i=V.alt){let e=Math.floor(Math.max(0,i)/le.levelH);return{idx:Math.min(e,Hi.length-1),extra:Math.max(0,e-(Hi.length-1)),n:e}}function Oi(i,e,t="white"){let n=rM("white");n.position.set(i,e,.15),t==="key"&&(n.scale.setScalar(.66),n.material.color.set(14283659));let s=new Ut(new Ct({map:x0,transparent:!0,depthWrite:!1,blending:tn}));return s.position.set(i,e,.1),pe.add(s),n.userData={kind:t,spin:(Math.random()-.5)*2,base:n.scale.x,age:Math.random()*6,glow:s},n}function Tf(i,e,t=Math.random()<.5?"rocket":"magnet"){let n=new Ut(new Ct({map:M0[t],transparent:!0,depthWrite:!1}));n.scale.setScalar(.5),n.position.set(i,e,.2),pe.add(n),V.bonuses.push({sp:n,kind:t,t:Math.random()*6})}function DM(i,e){let t=new Ut(new Ct({map:_0,transparent:!0,depthWrite:!1}));t.scale.setScalar(1.25),t.position.set(i,e,-.05),pe.add(t);let n=new ke(new Ts(.78,.84,56),new Wt({color:14283659,transparent:!0,opacity:0,depthWrite:!1,side:an}));n.position.set(i,e,-.02),pe.add(n);let s={sp:t,ring:n,near:9,used:!1};return V.holes.push(s),s}function Oo(i,e,t,n=0){return Math.hypot(Math.max(0,Math.abs(e-i.x0)-n-(i.swing||0)),t-i.grp.position.y)}var sh=i=>i.type!=="ground"&&(i.alive||i.type==="ice");function Zl(i,e,t=0,n=le.minSep){return V.plats.every(s=>!sh(s)||Oo(s,i,e,t)>=n)&&V.holes.every(s=>Math.hypot(Math.max(0,Math.abs(i-s.sp.position.x)-t),e-s.sp.position.y)>=le.holeSep)}function E0(i,e,t=0){let n=V;for(let s=n.plats.length-1;s>=0;s--){let r=n.plats[s];sh(r)&&r.type!=="rescue"&&Oo(r,i,e,t)<le.minSep&&(Bi(r.grp.position.clone(),8,!1),No(s))}for(let s=n.holes.length-1;s>=0;s--){let r=n.holes[s];Math.hypot(Math.max(0,Math.abs(i-r.sp.position.x)-t),e-r.sp.position.y)<le.holeSep&&(pe.remove(r.sp),pe.remove(r.ring),n.holes.splice(s,1))}}function zf(){let i=V,{xm:e}=vi(),t=i.nextY-i.baseY+i.scrolled,n=Hf(t),s=Fo(n.n),r=s.rest?0:n.extra,a=Se.clamp((t-n.n*le.levelH)/le.levelH,0,1);i.skinZone=jl(n.n);let o=t/le.levelH,c=U=>o>=Lo[U],l=Math.floor(o*2);if(l>i.genStage){i.genStage=l;let U=d0[l]||null,O=fM.has(U)?U:null;l%2===0?(i.intro=O?[null,O]:[],i.introLeft=le.introRows):U&&(i.intro=O?[O]:[],i.introLeft=2)}let h=i.introLeft>0;h&&i.introLeft--;let u=i.intro.length?i.intro.shift():null,f=h?s.gap[0]-.1:In(s.gap,a)+r*.03;f=Se.clamp(f*(.92+Math.random()*.16),le.minGap,le.maxGap);let p=h?Math.max(.8,s.dx[0]-.2):In(s.dx,a),g=!h&&!u&&i.lit<i.need&&!i.keyOut&&t>=i.keyAt,y=g?dM[jl(n.n)]:null;y==="ring"&&!c("ring")&&(y=null);let m="planet";if(Fm.has(u))m=u;else if(y)m=y==="ring"||y==="ice"?y:"planet";else if(!h){let U=Math.random(),O=c("ring")?s.ring:0,W=In(s.ice,a),H=c("move")?In(s.move,a):0,K=c("visit")?In(s.visit||0,a):0,Y=c("belt")?In(s.belt||0,a):0;m=U<O?"ring":U<O+W?"ice":U<O+W+H?"move":U<O+W+H+K?"visit":U<O+W+H+K+Y?"belt":U<O+W+H+K+Y+(c("spinner")?In(s.spinner||0,a):0)?"spinner":"planet"}m==="visit"&&i.lastType==="visit"&&u!=="visit"&&(m="planet"),m==="belt"&&i.lastType==="belt"&&u!=="belt"&&(m="planet"),m==="spinner"&&i.lastType==="spinner"&&u!=="spinner"&&(m="planet"),m==="ice"&&i.lastType==="ice"&&!s.iceRun&&(m="planet");let d=c("hole")&&!h&&!u&&!y&&!i.holeRecent&&Math.random()<In(s.hole,a);d&&m==="move"&&(m="planet");let _=y||d;i.rowN++;let E=s.orbit&&c("orbit");E&&!h&&!g&&i.lastType!=="orbit"&&--i.orbitIn<=0&&(m="orbit",i.orbitIn=le.orbitEvery[0]+Math.floor(Math.random()*(le.orbitEvery[1]-le.orbitEvery[0]+1)));let x=E&&i.orbitIn<=1&&i.introLeft===0,b=i.nextY+f,S=0,A=m==="orbit"||m==="belt"?99:m==="move"?u?.7:1.1:0,C=!1;for(let U=0;U<40&&!C;U++)U&&U%10===0&&(m==="move"&&A>.5?A=.5:m==="move"||m==="orbit"||m==="belt"?(m="planet",A=0):b=Math.min(i.nextY+le.maxGap,b+.12)),S=m==="orbit"||m==="belt"?(Math.random()*2-1)*e:y==="hole"||y==="hot"||y==="alien"||d?(i.lastX>=0?1:-1)*e*(.8+.2*Math.random()):Se.clamp(i.lastX+(Math.random()*2-1)*p,-e,e),C=Zl(S,b,A);C||E0(S,b,A);let v=Do(m,S,b);if(m==="move"&&(v.swing=A,v.vx*=u?.75:1+r*.1),m==="spinner"&&u&&(v.rotV*=.7),m==="belt"){let U=e+.6,O=i.beltDir*(.85+r*.08)*(u?.7:1);v.vx=O,v.wrap=!0;let W=Do("belt",S>0?S-U:S+U,b);W.vx=O,W.wrap=!0}m==="orbit"&&(v.vx=(Math.random()<.5?-1:1)*(1.1+.2*Math.min(n.idx,4)+r*.1)*(u?.7:1)),Fm.has(u)&&m!==u&&i.intro.unshift(u);let M=U=>{let O=Math.random()<.5?-1:1,W=S+O*U;if(Math.abs(W)>e){let H=S-O*U;W=Math.abs(H)<=e?H:S>0?-e:e}return W},I=null,B=null;if(m!=="move"&&m!=="orbit"&&m!=="belt"&&!x){let U=null;if(u==="crumble"||u==="hot"||u==="alien")U=u;else if(y==="crumble"||y==="hot"||y==="alien")U=y;else if(!h&&!d){let O=Math.random(),W=In(s.crumble,a),H=In(s.hot,a),K=In(s.alien||0,a);U=O<W?"crumble":O<W+H?"hot":O<W+H+K?"alien":null}if(U)for(let O=0;O<(y?24:8)&&!I;O++){let W=M(1.2+Math.random()*.8),H=b+(Math.random()-.5)*.6;Zl(W,H)&&(I=Do(U,W,H),I.extra=!0)}if(!I&&(u==="crumble"||u==="hot"||u==="alien")&&i.intro.unshift(u),u==="hole"||y==="hole"||d){for(let O=0;O<(_?24:8);O++){let W=M(1.6+Math.random()*.6),H=b+f*(_?.3+Math.random()*.3:.45);if(i.plats.every(K=>!sh(K)||Oo(K,W,H)>=le.holeSep)){let K=B=DM(W,H);u==="hole"&&(K.intro=!0),i.holeRecent=s.holeField?1:2;break}}u==="hole"&&!i.holes.some(O=>O.intro)&&i.intro.unshift("hole")}else i.holeRecent&&i.holeRecent--}if((u==="crumble"||u==="hot"||u==="hole"||u==="alien")&&(m==="move"||m==="orbit"||x)&&i.intro[0]!==u&&i.intro.unshift(u),!g&&(i.rowN<=le.trailRows||s.starRain))for(let U of[.3,.55,.8])Oi(Se.lerp(i.lastX,S,U),Se.lerp(i.nextY,b,U)+.9+Math.sin(Math.PI*U));else if(g){let U=Se.clamp(S+(S>0?-.9:.9),-e,e),O=b+1.3;m==="ring"?(U=S,O=b+3):m==="ice"&&y==="ice"?(U=S,O=b+2.6):I&&I.type===y?(U=I.grp.position.x,O=I.grp.position.y+(y==="hot"?.95:y==="alien"?1.2:.75)):B&&(U=Se.clamp(B.sp.position.x+Math.sign(S-B.sp.position.x||1)*.9,-e,e),O=B.sp.position.y),Oi(U,O,"key"),i.keyOut=!0}else u==="crumble"&&I?Oi(I.grp.position.x,I.grp.position.y+.75):Math.random()<s.star&&(I&&I.type==="crumble"&&Math.random()<.55?Oi(I.grp.position.x,b+.75):I&&I.type==="hot"&&n.idx>3&&Math.random()<.4?Oi(I.grp.position.x,b+.85):Oi(Se.clamp(S+(Math.random()-.5)*1.8,-e,e),b-f*.5+.4));t>=i.bubbleAt&&m!=="orbit"&&!i.bubble&&!i.bonuses.some(U=>U.kind==="bubble")?(Tf(Se.clamp(S+(Math.random()-.5)*.8,-e,e),b+.9,"bubble"),i.bubbleAt=t+le.bubble[1]*(1+Math.random()*.5)):!h&&Math.random()<s.bonus&&Tf(Se.clamp(S+(Math.random()-.5)*1.4,-e,e),b+.9),i.nextY=b,i.lastX=S,i.lastType=m}var UM=Xn((i,e)=>{let t=i.createLinearGradient(0,0,0,e);t.addColorStop(0,"rgba(255,220,140,0)"),t.addColorStop(.1,"rgba(255,200,110,.35)"),t.addColorStop(.16,"rgba(255,240,190,.95)"),t.addColorStop(.24,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,1)"),i.fillStyle=t,i.fillRect(0,0,e,e)},128),dn=null;function FM(i,e,t,n){let s=V,r=!!t.nova&&!s.supernova;if(r!==Ze.nova&&(Ze.nova=r,document.body.classList.toggle("nova",r)),!r){dn&&dn.visible&&(dn.material.opacity-=i*1.5,dn.position.y-=i*3,dn.material.opacity<=0&&(dn.visible=!1));return}s.waveAlt==null&&(s.waveAlt=s.alt-Ul.lead),s.waveAlt=Math.max(s.waveAlt+In(Ul.wave,n)*i,s.alt-Ul.max),s.invuln>0&&(s.waveAlt=Math.min(s.waveAlt,s.alt-5)),dn||(dn=new Ut(new Ct({map:UM,transparent:!0,depthWrite:!1})),dn.scale.set(16,10,1),dn.renderOrder=5,pe.add(dn));let a=s.baseY+s.waveAlt-s.scrolled;dn.visible=!0,dn.material.opacity=1,dn.position.set(0,a-5+1.6,.6);for(let c=0,l=zn(.9,i);c<l;c++)mt(q(-e.xm-1,e.xm+1),a+q(-.1,.4),.5,new R(q(-.3,.3),q(1,2.6),0),q(.04,.08),q(.4,.8)).material.color.set(Math.random()<.5?16777215:16767370);let o=s.alt-s.waveAlt;o<Ul.close&&s.clock>(s.waveWarn||0)&&(s.waveWarn=s.clock+2.5,tt("\u0412\u043E\u043B\u043D\u0430 \u0431\u043B\u0438\u0437\u043A\u043E \u2014 \u0432\u044B\u0448\u0435!",800),je.play("warn")),o<-.15&&s.rocket<=0&&(s.bubble?(xa("\u0432\u043E\u043B\u043D\u044B"),s.waveAlt=s.alt-7,s.vy=le.v0*1.3,ii(-1/0),s.invuln=1.2):(k.position.y=e.bot-1,Af("\u0421\u0432\u0435\u0440\u0445\u043D\u043E\u0432\u0430\u044F \u0434\u043E\u0433\u043D\u0430\u043B\u0430 \u041E\u0440\u0438.")))}function NM(){let i=V,e=vi(),t=!i.boltSeen,n=Se.clamp(k.position.x+q(-.45,.45),-e.xm,e.xm),s=e.top-e.bot+1,r=new Ut(new Ct({map:CM,color:13352447,transparent:!0,depthWrite:!1,blending:tn,opacity:0}));r.scale.set(.85,s,1),r.position.set(n,(e.top+e.bot)/2,.3),pe.add(r),t&&(i.boltSeen=!0,tt("\u0421\u0432\u0435\u0442\u044F\u0449\u0438\u0439\u0441\u044F \u0441\u0442\u043E\u043B\u0431 \u2014 \u0442\u0443\u0434\u0430 \u0443\u0434\u0430\u0440\u0438\u0442 \u043C\u043E\u043B\u043D\u0438\u044F. \u0423\u0439\u0434\u0438 \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u0443",2600,!0)),je.play("warn"),i.bolts.push({x:n,col:r,warn:t?2:1.15,strike:0,sp:null})}function w0(i){let e=V.bolts[i];pe.remove(e.col),e.col.material.dispose(),e.sp&&(pe.remove(e.sp),e.sp.material.dispose()),V.bolts.splice(i,1)}function OM(i){let e=V;for(let t=e.bolts.length-1;t>=0;t--){let n=e.bolts[t];if(n.warn>0){if(n.warn-=i,n.col.material.opacity=.34+.26*Math.abs(Math.sin(n.warn*18))+(n.warn<.3?.3:0),n.warn>0)continue;n.strike=.24,n.col.material.color.set(16777215),n.col.material.opacity=.9;let r=new Ut(new Ct({map:Vm[Math.floor(Math.random()*Vm.length)],transparent:!0,depthWrite:!1,blending:tn}));r.scale.set(1.2,n.col.scale.y,1),r.position.set(n.x,n.col.position.y,.35),pe.add(r),n.sp=r,xi.style.opacity=.28,setTimeout(()=>{xi.style.opacity=0},90),je.play("shatter");let a=Math.abs(k.position.x-n.x);if(a<.4&&!(e.invuln>0)&&e.rocket<=0)if(e.bubble)xa("\u043C\u043E\u043B\u043D\u0438\u0438");else{e.vy=Math.min(e.vy,.5),ii(-1/0),e.knock=.45,e.knockV=(k.position.x>=n.x?1:-1)*3.5,e.spinT=.45,e.invuln=1.2,e.hits++,e.series=0,e.dashReady=!1,cs();try{navigator.vibrate&&navigator.vibrate(80)}catch{}tt("\u041C\u043E\u043B\u043D\u0438\u044F \u0443\u0434\u0430\u0440\u0438\u043B\u0430 \u0432 \u041E\u0440\u0438!",1100),je.play("meteor")}else a<.85&&e.rocket<=0&&Vf(on(new R(k.position.x,k.position.y+1.5,0)));continue}n.strike-=i;let s=Math.max(0,n.strike/.24);n.col.material.opacity=.9*s,n.sp&&(n.sp.material.opacity=s),n.strike<=0&&w0(t)}}function kM(){let i=V,e=vi(),t=Math.random()<.5?1:-1,{extra:n}=Hf(),s=e.bot+(e.top-e.bot)*(.45+Math.random()*.4),r=new Ut(new Ct({map:s0,transparent:!0,depthWrite:!1}));r.scale.setScalar(.38),r.position.set(t>0?-e.xm-1.4:e.xm+1.4,s,.3),r.visible=!1,pe.add(r);let a=new Ut(new Ct({map:Bf,transparent:!0,depthWrite:!1,blending:tn}));a.material.color.set(16711730),a.scale.setScalar(.6),a.position.set(t>0?-e.xm-.15:e.xm+.15,s,.35),pe.add(a),je.play("warn");let o=!i.meteorSeen;o&&(i.meteorSeen=!0,tt("\u041A\u0440\u0430\u0441\u043D\u0430\u044F \u0432\u0441\u043F\u044B\u0448\u043A\u0430 \u043D\u0430 \u043A\u0440\u0430\u044E \u2014 \u0441\u0435\u0439\u0447\u0430\u0441 \u043F\u0440\u043E\u043B\u0435\u0442\u0438\u0442 \u043C\u0435\u0442\u0435\u043E\u0440",2400,!0)),i.meteors.push({sp:r,ring:a,t:0,warn:o?1.6:1,vx:t*(1.5+Math.random()*.7+n*.1)*(o?.6:1),vy:-.2,spin:(Math.random()-.5)*4})}function Ls(i,e=!0){let t=V;t.vy=i,t.slip=0,t.airT=0,t.airDur=2*i/le.g,t.earV+=3,e&&at("leap",{fade:.05,speed:i>le.v0*1.2?1:1.2+Math.random()*.3}),e&&je.play(i<le.v0*.9?"weak":"bounce",i/le.v0)}function T0(i){let e=V;for(let t of e.plats)t.grp.position.y-=i;for(let t of e.stars)t.position.y-=i,t.userData.glow&&(t.userData.glow.position.y-=i);for(let t of e.meteors)t.sp.position.y-=i,t.ring&&(t.ring.position.y-=i);for(let t of e.bonuses)t.sp.position.y-=i;for(let t of e.holes)t.sp.position.y-=i,t.ring&&(t.ring.position.y-=i);for(let t of Fi)t.position.y-=i;k.position.y-=i,e.nextY-=i,e.takeoffY-=i,e.scrolled+=i,e.dayY-=i,_r.position.y-=i*.03,Uo.position.y-=i*.08}function BM(){let i=V;Object.assign(i,{plats:[],bonuses:[],holes:[],vy:0,slip:0,alt:0,best:0,scrolled:0,level:0,bank:0,saves:0,series:0,bestSeries:0,bubbleAt:le.bubble[0]+Math.random()*12,hop:1,nearT:0,tipQ:[],recAt:kf(),recTip:!1,recPassed:!1,litTip:!1,litDone:!1,result:"",dashReady:!1,face:Math.random()<.5?-1:1,spinT:0,rocket:0,bubble:!1,magnet:0,wind:0,windT:0,gustIn:99,dayStar:!1,dayShine:!1,supernova:!1,waveAlt:null,waveWarn:0,holeRecent:0,perfects:0,knock:0,knockV:0,scald:0,vx:0,rowN:0,bolts:[],boltIn:2,boltSeen:!1,beltDir:Math.random()<.5?-1:1,orbitIn:4,tipped:{},genStage:0,keyAt:3,keyOut:!1,gustSeen:!1,gustOn:!1,windAmp:2.3,introLeft:0,intro:[],lastType:"planet",meteorSeen:!1,falling:!1,fallT:0}),i.takeoffY=i.baseY,i.nextY=i.baseY,i.lastX=0,i.meteorIn=99,i.dayY=i.baseY+le.goal,i.dayX=0,i.skinZone=0,Do("ground",0,i.baseY);let e=vi();for(;i.nextY<e.top+2;)zf();let t=Qm();pe.add(t),i.day=t,Ze.recShow=null,Ze.recY=null,Ze.gateY=null,Ze.gateN=null,Of(0),m0.textContent=Yl(0),i.bubbleSp||(i.bubbleSp=new Ut(new Ct({map:v0,transparent:!0,depthWrite:!1})),i.bubbleSp.scale.setScalar(1.7)),pe.add(i.bubbleSp),i.bubbleSp.visible=!1,cs(),Gn()}function A0(){let i=V;Of(-1);for(let e=(i.plats||[]).length-1;e>=0;e--)No(e);for(let e=(i.bolts||[]).length-1;e>=0;e--)w0(e);for(let e of i.bonuses||[])pe.remove(e.sp);for(let e of i.holes||[])pe.remove(e.sp),e.ring&&pe.remove(e.ring);i.bonuses=[],i.holes=[],i.day&&(pe.remove(i.day),i.day=null),i.bubbleSp&&(i.bubbleSp.visible=!1),dn&&(dn.visible=!1),document.body.classList.remove("nova"),Ze.nova=!1}function ii(i){let e=V;e.takeoffY=i,e.falling=!1,e.fallT=0}function HM(i,e){let t=i.top+.02,n=Math.max(0,Math.abs(e)-le.foot);return Math.sqrt(Math.max(0,t*t-n*n))-.02}function Af(i){let e=V;try{navigator.vibrate&&navigator.vibrate(90)}catch{}if(e.series=0,e.dashReady=!1,cs(),!e.bubble){je.play("lose"),tt(`${i?i+" ":""}\u0417\u0430\u0431\u0435\u0433 \u043E\u043A\u043E\u043D\u0447\u0435\u043D`,1800),e.playing=!1,oM();return}e.bubble=!1,e.bubbleSp.visible=!1,e.saves++,Gn();let t=vi(),n=t.bot+1,s=l=>e.plats.some(h=>h.alive&&(h.type==="hot"||h.type==="crumble"||h.type==="alien")&&Math.abs(h.grp.position.x-l)<1&&h.grp.position.y>n&&h.grp.position.y<n+3.6)||e.holes.some(h=>Math.abs(h.sp.position.x-l)<1.3&&h.sp.position.y>n&&h.sp.position.y<n+4),r=Se.clamp(k.position.x,-t.xm,t.xm),a=l=>{let h=null;for(let u=-t.xm;u<=t.xm+1e-6;u+=.2)l(u)&&(h===null||Math.abs(u-r)<Math.abs(h-r))&&(h=u);return h},o=a(l=>!s(l)&&Zl(l,n))??a(l=>Zl(l,n));o!==null?r=o:E0(r,n);let c=Do("rescue",r,n);k.position.set(r,c.grp.position.y+c.top,0),ii(k.position.y),k.rotation.z=0,Ls(le.v0*1.15),e.invuln=1.5,Bi(new R(r,c.grp.position.y+.6,.3),12,!1),Vn("\u041F\u0443\u0437\u044B\u0440\u044C!",on(c.grp.position)),je.play("bubble"),je.play("rescue"),tt(`${i?i+" ":""}\u041F\u0443\u0437\u044B\u0440\u044C \u043F\u043E\u0434\u0445\u0432\u0430\u0442\u0438\u043B \u041E\u0440\u0438`,1800)}function zM(i){let e=V,t=e.stars[i],n=on(t.position);ds.action&&ds.action.reset().setEffectiveWeight(1).play();let s=t.userData.kind==="key";nh(i,!0);let r=s?3:e.series>=3?2:1;if(e.bank+=r,e.wag=s?1.5:.7,e.caught++,!s){Vn(`+${r} \u2605`,n),Gn(),je.play("star",r);return}e.keyOut=!1,VM(1,n);let a=e.need-e.lit,o=.8*le.goal/e.need;e.keyAt=e.alt+Se.clamp((.8*le.goal-e.alt)/Math.max(1,a),4,o),Vn(`\u0421\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u0435 ${e.lit}/${e.need}`,n),Gn(),je.play("star",2),je.play("perfect")}function VM(i,e){let t=V;for(let n=0;n<i&&t.lit<t.need;n++){let s=t.lit++;a0(e,s)}t.lit<t.need||t.litDone||(t.litDone=!0,je.play("level"),t.dayStar&&!t.dayShine?(t.dayShine=!0,si.classList.add("done"),tt("\u0421\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u0435 \u0441\u043E\u0431\u0440\u0430\u043D\u043E \u2014 \u0437\u0432\u0435\u0437\u0434\u0430 \u0434\u043D\u044F \u0437\u0430\u0441\u0438\u044F\u043B\u0430!",2200)):t.dayStar||tt("\u0421\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u0435 \u0441\u043E\u0431\u0440\u0430\u043D\u043E! \u0422\u0435\u043F\u0435\u0440\u044C \u2014 \u043A \u0437\u0432\u0435\u0437\u0434\u0435 \u0434\u043D\u044F",1800))}function GM(i){let e=V,t=0;for(;t<i&&e.lit>0;t++)e.lit--,sM(e.lit);return e.lit<e.need&&(e.litDone=!1),t}function Wm(i,e,t=2600){let n=V;n.tipped[i]||(n.tipped[i]=!0,n.tipQ.push([e,t]))}function WM(){let i=V;if(i.tipQ.length&&i.clock>(i.sayUntil||0)){let[e,t]=i.tipQ.shift();tt(e,t,!0)}}function Vf(i){let e=V;e.clock<e.nearT||(e.nearT=e.clock+1.5,e.bank++,Vn("\u041D\u0430 \u0432\u043E\u043B\u043E\u0441\u043A\u0435! +1 \u2605",i),je.play("star",1),Gn())}function XM(i,e,t){let n=(s,r,a,o,c,l,h=0)=>{for(let u=0;u<s;u++){let f=mt(e+q(-.16,.16),t+q(0,.06),.25,new R(a(),o(),0),q(c[0],c[1]),q(l[0],l[1]));f.material.color.set(Array.isArray(r)?r[Math.floor(Math.random()*r.length)]:r),f.userData.fin=h}};if(i.skin===2)n(16,[16777215,14676735],()=>q(-1.5,1.5),()=>q(.3,1.5),[.05,.09],[.35,.6]),n(8,16777215,()=>q(-.5,.5),()=>q(-.35,-.1),[.035,.05],[.9,1.5],.15),i.cap&&(i.capSq=1);else if(i.skin===3)n(14,[16742954,16761418,16730652],()=>q(-1.7,1.7),()=>q(.5,2),[.035,.065],[.3,.55]),n(7,9404552,()=>q(-.45,.45),()=>q(.35,.8),[.1,.17],[.8,1.3],.15);else if(i.skin===1)n(16,[12167066,9274e3,13219490],()=>q(-1.5,1.5),()=>q(0,.45),[.08,.15],[.5,.9],.08),n(5,7301744,()=>q(-1,1),()=>q(.8,1.6),[.04,.06],[.4,.6]),i.spin=(e>i.grp.position.x?-1:1)*q(1.2,2.2);else if(i.skin===4)for(let s=0;s<18;s++){let r=s/18*Math.PI*2;mt(e+Math.cos(r)*.12,t+.05+Math.sin(r)*.05,.25,new R(Math.cos(r)*1.5,Math.sin(r)*.6,0),.05,.5).material.color.set(s%3?11771135:14283659)}else i.skin===9?n(12,[16777215,10479871,16765066],()=>q(-1.7,1.7),()=>q(.3,1.4),[.025,.05],[.25,.5]):i.skin===8?(n(12,[16777215,14080760,13285631],()=>q(-.9,.9),()=>q(.1,.7),[.1,.18],[.6,1],.12),i.sq=1,i.flickT=.5):i.skin===7?(n(12,[16777215,16769712,13623551],()=>q(-1.6,1.6),()=>q(.1,.8),[.03,.06],[.35,.6]),i.dip=1):i.skin===6?n(12,[9240474,14283659,16777215],()=>q(-1.2,1.2),()=>q(.3,1.3),[.04,.07],[.35,.6]):i.skin===0&&n(8,[16777215,14283659],()=>q(-1,1),()=>q(.2,.9),[.03,.05],[.3,.5])}function Xm(i,e){let t=V,n=k.position.x-i.grp.position.x;if(k.position.y=e,ii(e),XM(i,k.position.x,e),i.type==="ice")if(i.hp=(i.hp??3)-1,i.hp>0){if(i.body.material.emissiveMap=y0[3-i.hp],i.body.material.emissive.set(16777215),i.body.material.emissiveIntensity=.9,i.body.material.needsUpdate=!0,Bi(new R(k.position.x,e,.25),4,!1),i.hp===2&&!i.bait){i.bait=!0;let a=vi().xm;Oi(Se.clamp(i.grp.position.x+(i.grp.position.x>0?-.85:.85),-a,a),e+.45)}t.tipped.ice?tt(i.hp===2?"\u041B\u0451\u0434 \u0442\u0440\u0435\u0441\u043D\u0443\u043B":"\u041B\u0451\u0434 \u0432\u043E\u0442-\u0432\u043E\u0442 \u0440\u0430\u0441\u043A\u043E\u043B\u0435\u0442\u0441\u044F!",700):(t.tipped.ice=!0,tt(Ff.ice,2400,!0)),je.play("crack")}else tt("\u041B\u0451\u0434 \u0440\u0430\u0441\u043A\u043E\u043B\u043E\u043B\u0441\u044F!",800),je.play("shatter");if(Math.abs(n)<le.perfect&&i.type!=="ground"){t.series++,t.perfects++,t.bestSeries=Math.max(t.bestSeries,t.series);let a=!t.hop;a&&(t.hop=1,Gn()),Vn(a?"\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E! \u2191 \u043F\u043E\u0434\u0441\u043A\u043E\u043A":"\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E!",on(new R(k.position.x,e+1.5,0))),je.play("perfect"),t.series%5===0&&(t.dashNow=!0)}else i.type!=="ground"&&(t.series=0,Math.abs(n)>i.landW*le.edge&&i.type!=="rescue"&&Vf(on(new R(k.position.x,e+1.5,0))));cs();let r=le.v0;if(i.type==="ring"&&(r=le.v0*le.boost,je.play("ring")),i.skin===8&&(r=le.v0*Sf.spring),t.squash=1,t.earV+=4,t.dashNow){r=Math.max(r,le.v0*le.dash),t.dashNow=!1,t.spinT=.7,tt("5 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u2014 \u0440\u044B\u0432\u043E\u043A!",900),je.play("dash");for(let a=0;a<14;a++){let o=Math.random()*Math.PI;mt(k.position.x,e,.2,new R(Math.cos(o)*1.4,Math.sin(o)*1.2,0),.06,.5).material.color.set(14283659)}}if(i.type==="ring")for(let a=0;a<12;a++){let o=Math.random()*Math.PI;mt(i.grp.position.x,e,.2,new R(Math.cos(o)*1.2,Math.sin(o)*1.5,0),.06,.5).material.color.set(14283659)}if(Ls(r),i.nova&&i.alive){i.alive=!1,i.gone=.001,i.novaBurn=!0;for(let a=0;a<14;a++){let o=Math.random()*Math.PI*2;mt(i.grp.position.x+Math.cos(o)*.3,i.grp.position.y+Math.sin(o)*.3,.2,new R(Math.cos(o)*1.2,Math.sin(o)*1.2+.5,0),q(.05,.09),q(.4,.7)).material.color.set(Math.random()<.5?16771496:16742954)}}if(i.wrap&&(t.slip=i.vx*.9),i.skin===9){let a=n/i.landW,o=Math.max(0,Math.abs(a)-yr.hold)/(1-yr.hold);t.slip=Math.sign(a)*o*yr.slide+Math.sin(i.rot)*-1.6*Math.sign(Math.cos(i.rot)),i.tiltV-=a*7,o>.35&&tt("\u041F\u0430\u043D\u0435\u043B\u044C \u043D\u0430\u043A\u0440\u0435\u043D\u0438\u043B\u0430\u0441\u044C!",700)}return i.type==="ice"&&(t.slip=Se.clamp(t.vx*.35,-1.4,1.4)),Math.abs(t.targetX-k.position.x)<.15&&Math.random()<.4&&(t.face=-(t.face||1)),i.type==="ice"&&i.hp<=0&&(i.alive=!1,i.gone=.001,Bi(new R(i.grp.position.x,e,.25),12,!1)),!0}function qM(){let i=V,e=i.recAt,t=!1;if(e>=5&&!i.recPassed)if(i.best>e)i.recPassed=!0,Vn("\u041D\u043E\u0432\u044B\u0439 \u0440\u0435\u043A\u043E\u0440\u0434!",on(new R(k.position.x,k.position.y+1.3,0))),je.play("level");else{let n=Math.round(on(_a.set(0,i.baseY+e-i.scrolled,0)).y);n>130&&n<innerHeight-90&&(t=!0,n!==Ze.recY&&(Ze.recY=n,Rf.style.transform=`translate(-50%, ${n}px)`));let s=Math.ceil(e-i.best);!i.recTip&&s<=5&&(i.recTip=!0,tt(`\u0415\u0449\u0451 ${s} \u043C \u0434\u043E \u0440\u0435\u043A\u043E\u0440\u0434\u0430!`,1600))}t!==Ze.recShow&&(Ze.recShow=t,Rf.classList.toggle("show",t),t&&(YM.textContent=`\u0420\u0435\u043A\u043E\u0440\u0434 ${Ma(e)} \u043C`))}var Rf=$e("#gRecLine"),YM=$e("#gRecLine span");function xa(i){let e=V;e.bubble=!1,e.bubbleSp.visible=!1,je.play("bubble"),tt(`\u041F\u0443\u0437\u044B\u0440\u044C \u0441\u043F\u0430\u0441 \u043E\u0442 ${i}!`,900),Bi(k.position.clone().add(new R(0,.6,.2)),10,!1)}function jM(i){let e=V,t=vi();e.clock=(e.clock||0)+i,e.invuln>0&&(e.invuln-=i),e.wag>0&&(e.wag-=i);let n=Se.clamp(Se.clamp(e.targetX,-t.xm-.6,t.xm+.6)+(e.wind||0)*le.drift,-t.xm,t.xm),s=n-k.position.x,r=k.position.x;if(e.knock>0)e.knock-=i,k.position.x+=e.knockV*i,e.knockV*=Math.max(0,1-4*i);else{let x=e.scald>0?.5:e.falling?.3:1;k.position.x+=Math.sign(s)*Math.min(Math.abs(s),le.speed*x*i,Math.abs(s)*12*x*i)}e.scald>0&&(e.scald-=i);let a=i>0?(k.position.x-r)/i:0;e.vx=a,e.lean+=(Se.clamp(-a*.05,-.22,.22)-e.lean)*Math.min(1,6*i),e.airT+=i,e.squash>0&&(e.squash=Math.max(0,e.squash-i/.16));let o=e.playing?Math.sin(Math.PI*e.squash):0,c=e.playing&&e.vy>0?Math.min(1,e.vy/le.v0)*Math.max(0,1-e.airT/.3):0;k.scale.set(1+.11*o-.05*c,1-.22*o+.11*c,1+.11*o-.05*c),e.playing&&(k.position.x=Se.clamp(k.position.x+(e.wind+e.slip)*i,-t.xm-.3,t.xm+.3)),Math.abs(s)>.15&&(e.face=Math.sign(s));let l=!e.playing||e.rocket>0?0:(e.face||1)*(Math.abs(s)>.15?.8:.5);if(e.spinT>0)e.spinT-=i,l+=(1-e.spinT/.7)*Math.PI*2*(e.face||1),k.rotation.y=l;else{k.rotation.y=Math.atan2(Math.sin(k.rotation.y),Math.cos(k.rotation.y));let x=l-k.rotation.y;x=Math.atan2(Math.sin(x),Math.cos(x)),k.rotation.y+=x*Math.min(1,7*i)}if(k.rotation.x=0,k.rotation.z=e.playing?e.lean-(e.wind||0)*.085+(e.falling?-(e.face||1)*Math.min(1.1,e.fallT*2.2):0):0,k.position.z+=(0-k.position.z)*ga(.12,i),!e.playing){k.position.y>e.baseY+.001||e.vy>0?(e.vy-=le.g*i,k.position.y+=e.vy*i,k.position.y<=e.baseY&&(k.position.y=e.baseY,e.vy=0,at("idle",{fade:.2}))):k.position.y<e.baseY-.001&&(k.position.y=Math.min(e.baseY,k.position.y+(e.baseY-k.position.y)*Math.min(1,8*i)+.3*i)),fs.position.set(k.position.x,e.baseY+.005,0);return}let h=k.position.clone();if(h.y+=.55,e.clock>7&&Wm("hop","\u0422\u0430\u043F\u043D\u0438 \u0432 \u043F\u043E\u043B\u0451\u0442\u0435 \u2014 \u043F\u043E\u0434\u0441\u043A\u043E\u043A \u0432\u0432\u0435\u0440\u0445. \u0417\u0430\u0440\u044F\u0434 \u0434\u0430\u0451\u0442 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u0437\u0435\u043C\u043B\u0435\u043D\u0438\u0435"),WM(),qM(),xM(),gM(i,t),e.rocket>0){e.rocket-=i,e.vy=9;for(let x=0,b=zn(2,i);x<b;x++)mt(k.position.x+(Math.random()-.5)*.2,k.position.y,.2,new R((Math.random()-.5)*.6,-2.5,0),.07+Math.random()*.05,.4).material.color.set(Math.random()<.5?16711730:16757575);e.rocket<=0&&(e.vy=4,ii(-1/0))}let u=k.position.y;if(e.rocket<=0&&(e.vy-=le.g*(e.falling?1.5:1)*i),k.position.y+=e.vy*i,!e.falling&&e.vy<0&&e.rocket<=0&&k.position.y<e.takeoffY-le.missDrop&&(e.falling=!0,e.fallT=0,e.series=0,cs(),tt("\u041F\u0440\u043E\u043C\u0430\u0445!",1e3),je.play("weak")),e.falling&&(e.fallT+=i),e.vy<0&&e.rocket<=0&&!e.falling)for(let x of e.plats){if(!x.alive)continue;let b=k.position.x-x.grp.position.x,S=x.type==="ground";if(Math.abs(b)>=(S?x.w+.28:x.landW))continue;let A=x.grp.position.y+(S||x.flat?x.top:HM(x,b));if(!(A<e.takeoffY-le.missDrop||!S&&A<t.bot+.3)&&!(x.rotV&&Math.abs(Math.sin(x.rot))>.45)&&u>=A-.02&&k.position.y<=A){if(x.type==="crumble"){Xm(x,A),x.alive=!1,x.gone=.001,Bi(new R(x.grp.position.x,A,.2),12,!0);let C=x.grp.position.x;Oi(C,A+1.1),Oi(C-.55,A+.7),Oi(C+.55,A+.7),Math.random()<.25&&Tf(C,A+1.7),tt("\u041C\u0435\u0442\u0435\u043E\u0440\u0438\u0442 \u0440\u0430\u0441\u043A\u043E\u043B\u043E\u043B\u0441\u044F \u2014 \u0440\u0443\u0434\u0430!",900),je.play("shatter");try{navigator.vibrate&&navigator.vibrate(40)}catch{}break}if(x.type==="hot"&&!e.bubble){if(x.steam>0)continue;k.position.y=A,ii(A),e.series=0,e.dashReady=!1,cs(),Ls(le.v0*.95),e.squash=1,e.earV+=6,e.slip=(Math.random()<.5?-1:1)*(2.6+Math.random()*1.6),e.scald=.7,x.steam=1.2;for(let C=0;C<12;C++){let v=Math.random()*Math.PI;mt(k.position.x,A,.2,new R(Math.cos(v)*1.2,Math.sin(v)*1.2,0),.06,.45).material.color.set(Math.random()<.5?16730652:16757575)}tt("\u041E\u0439, \u0433\u043E\u0440\u044F\u0447\u043E! \u041B\u0430\u043F\u044B \u043E\u0431\u043E\u0436\u0436\u0435\u043D\u044B",900),je.play("hot");try{navigator.vibrate&&navigator.vibrate(40)}catch{}break}if(x.type==="hot"&&e.bubble){k.position.y=A,ii(A),xa("\u0436\u0430\u0440\u0430"),Ls(le.v0);break}if(x.occupied){if(k.position.y=A,ii(A),e.bubble){xa("\u043F\u0440\u0438\u0448\u0435\u043B\u044C\u0446\u0430"),Ls(le.v0);break}e.series=0,e.dashReady=!1,cs(),Ls(le.v0*.92),e.squash=1,e.earV+=6,e.slip=(b>=0?1:-1)*q(2.2,3),x.shove=1;for(let C=0;C<10;C++){let v=Math.random()*Math.PI;mt(k.position.x,A+.1,.25,new R(Math.cos(v)*1.3,Math.sin(v)*1.1,0),.05,.45).material.color.set(Math.random()<.6?9240474:14283659)}tt("\u0417\u0430\u043D\u044F\u0442\u043E! \u041F\u0440\u0438\u0448\u0435\u043B\u0435\u0446 \u043E\u0442\u043F\u0438\u0445\u043D\u0443\u043B \u041E\u0440\u0438",900),Vn("\u0417\u0430\u043D\u044F\u0442\u043E!",on(new R(x.grp.position.x,A+1,0)),!0),je.play("weak");try{navigator.vibrate&&navigator.vibrate(40)}catch{}break}if(Xm(x,A))break}}e.slip&&(e.slip*=Math.max(0,1-1.6*i));let f=t.bot+(t.top-t.bot)*.42;k.position.y>f&&T0(k.position.y-f),e.alt=e.scrolled+(k.position.y-e.baseY),e.alt>e.best&&(e.best=e.alt);let p=Hf();if(p.n>e.level){e.level=p.n;let x=Fo(p.n);if(Of(jl(p.n)),p.n===hs+1&&e.waveAlt!=null&&!e.supernova){e.supernova=!0,xi.style.opacity=.7,setTimeout(()=>{xi.style.opacity=0},220),je.play("day"),e.wag=3;for(let b=0;b<40;b++){let S=Math.random()*Math.PI*2,A=1.2+Math.random()*2.2;mt(k.position.x,k.position.y+.6,.3,new R(Math.cos(S)*A,Math.sin(S)*A,0),q(.06,.12),q(.6,1.1)).material.color.set(Math.random()<.5?16771496:16777215)}Vn("\u0421\u0432\u0435\u0440\u0445\u043D\u043E\u0432\u0430\u044F \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u0430!",on(new R(k.position.x,k.position.y+1.6,0))),e.tipQ.unshift(["\u0421\u0432\u0435\u0440\u0445\u043D\u043E\u0432\u0430\u044F \u043F\u043E\u0437\u0430\u0434\u0438 \u2014 \u041E\u0440\u0438 \u043D\u0435\u0441\u0451\u0442 \u0441\u0432\u0435\u0440\u0445\u043D\u043E\u0432\u0443\u044E \u0437\u0432\u0435\u0437\u0434\u0443!",2600]),Gn()}m0.textContent=Yl(p.n),tt(Yl(p.n),1800),x.tip&&e.tipQ.push([x.tip,2200]),e.meteorIn=Math.min(e.meteorIn,3),x.gust&&(e.gustIn=Math.min(e.gustIn,2.5)),je.play("level")}if(e.day){let x=Math.min(e.dayY,t.top-.35),b=Se.clamp((e.dayY-t.top)/40,0,1);if(e.day.position.set(e.dayX,x,.2),e.day.rotation.z+=i*1.5,e.day.userData.core.scale.setScalar(Se.lerp(.55,.22,b)),e.day.userData.glow.scale.setScalar(Se.lerp(1.3,.6,b)*(1+.08*Math.sin(e.alt))),e.dayY<t.top&&(e.dayX+=(k.position.x-e.dayX)*Math.min(1,2.5*i)),e.alt>=le.goal-.2||e.dayY<t.top-.3&&Math.abs(h.x-e.dayX)<1&&Math.abs(h.y-e.dayY)<.8){e.dayStar=!0,e.dayShine=e.lit>=e.need;let S=Wn();pe.remove(e.day),e.day=null,ds.action&&ds.action.reset().setEffectiveWeight(1).play();for(let A=0;A<30;A++){let C=Math.random()*Math.PI*2,v=1.4+Math.random()*1.8;mt(S.x,S.y,S.z,new R(Math.cos(C)*v,.4+Math.random()*1.6,Math.sin(C)*v*.5),.06+Math.random()*.08,.7).material.color.set(Math.random()<.45?14283659:16777215)}xi.style.opacity=.6,setTimeout(()=>{xi.style.opacity=0},180),e.dayShine&&si.classList.add("done"),e.wag=3,je.play("day"),tt(e.dayShine?"\u0421\u0438\u044F\u044E\u0449\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430 \u0434\u043D\u044F! \u0414\u0430\u043B\u044C\u0448\u0435 \u2014 \u0437\u0430 \u0440\u0435\u043A\u043E\u0440\u0434\u043E\u043C":`\u0417\u0432\u0435\u0437\u0434\u0430 \u0434\u043D\u044F! \u0414\u043E\u0441\u043E\u0431\u0435\u0440\u0438 \u0441\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u0435 \u2014 \u043E\u043D\u0430 \u0437\u0430\u0441\u0438\u044F\u0435\u0442 (\u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0442\u043E\u0447\u0435\u043A: ${e.need-e.lit})`,2600),Gn()}}Gn();for(let x=e.plats.length-1;x>=0;x--){let b=e.plats[x];if(b.wrap){let S=t.xm+.6;b.grp.position.x+=b.vx*i,b.grp.position.x>S?b.grp.position.x-=2*S:b.grp.position.x<-S&&(b.grp.position.x+=2*S)}else if(b.vx){b.grp.position.x+=b.vx*i;let S=b.swing??1.1;(Math.abs(b.grp.position.x)>t.xm||Math.abs(b.grp.position.x-b.x0)>S)&&(b.grp.position.x=Se.clamp(Se.clamp(b.grp.position.x,b.x0-S,b.x0+S),-t.xm,t.xm),b.vx=-b.vx)}if(b.alien){let S=b.alien;if(b.type==="visit"){b.visitT=(b.visitT+i)%4.8;let C=b.visitT;if(b.occupied=C>=3.2,C<2.4)S.material.opacity=Math.max(0,S.material.opacity-i*5),S.position.y=Io+.5*(1-S.material.opacity);else if(C<3.2){let v=(C-2.4)/.8;S.material.opacity=.25+.3*Math.abs(Math.sin(C*16)),S.position.y=Io+.7*(1-v)}else S.material.opacity=1,S.position.y=Io+.02*Math.sin(e.clock*4+b.x0*5)}else S.position.y=Io+.02*Math.sin(e.clock*4+b.x0*5);b.shove>0&&(b.shove=Math.max(0,b.shove-i/.35));let A=b.shove>0?Math.sin(Math.PI*b.shove):0;S.scale.set(Kl*(1+.35*A),Kl*(1-.12*A),1),S.material.rotation=Se.clamp((b.grp.position.x-k.position.x)*.12,-.22,.22)}if(b.capSq>0){b.capSq=Math.max(0,b.capSq-i/.32);let S=Math.sin(Math.PI*b.capSq);b.cap.scale.set(1+.07*S,1-.22*S,1+.07*S)}if(b.skin===9&&(b.tiltV+=(-42*b.tilt-5*b.tiltV)*i,b.tilt+=b.tiltV*i,b.rot+=b.rotV*i,b.body.rotation.z=b.rot+b.tilt,b.blink&&(b.blink.material.opacity=Math.sin(e.clock*3+b.x0*9)>.7?.95:0)),b.sq>0){b.sq=Math.max(0,b.sq-i/.4);let S=Math.sin(Math.PI*b.sq);b.body.scale.set(1+.14*S,1-.36*S,1),b.body.position.y=-.08*S}if(b.flick&&(!(b.flickT>0)&&Math.random()<i*.35&&(b.flickT=q(.15,.4)),b.flickT>0&&(b.flickT-=i),b.flick.material.opacity=b.flickT>0?.35+.5*Math.abs(Math.sin(b.flickT*40)):0),b.dip>0&&(b.dip=Math.max(0,b.dip-i/.3),b.body.position.y=-.07*Math.sin(Math.PI*b.dip)),b.spin&&(b.body.rotation.z+=b.spin*i,b.spin*=Math.max(0,1-2.5*i),Math.abs(b.spin)<.05&&(b.spin=0)),b.alive&&b.skin>0){let S=b.grp.position.x,A=b.grp.position.y;if(b.skin===3)for(let C=0,v=zn(.07,i);C<v;C++){let M=mt(S+q(-.22,.22),A+q(.2,.36),-.3,new R(q(-.1,.1)+e.wind*.5,q(.3,.55),0),q(.07,.13),q(1.2,2));M.material.color.set(9404552),M.userData.fin=.4}else if(b.skin===2)for(let C=0,v=zn(.05,i);C<v;C++){let M=mt(S+q(-.42,.42),A+q(-.1,.4),-.3,new R(q(-.08,.08),-q(.1,.25),0),q(.03,.045),q(1,1.8));M.material.color.set(15399167),M.userData.fin=.3}else if(b.skin===1)for(let C=0,v=zn(.025,i);C<v;C++){let M=mt(S+q(-.45,.45),A+q(-.3,.3),-.3,new R(q(-.2,.2),q(-.12,.05),0),q(.03,.05),q(1.2,2));M.material.color.set(12167066),M.userData.fin=.3}else if(b.skin===6)for(let C=0,v=zn(.04,i);C<v;C++){let M=mt(S+q(-.35,.35),A+q(.1,.4),-.3,new R(q(-.08,.08),q(.15,.35),0),q(.03,.05),q(1,1.8));M.material.color.set(9240474),M.userData.fin=.3}else if(b.skin===4)for(let C=0,v=zn(.045,i);C<v;C++){let M=q(0,6.28),I=mt(S+Math.cos(M)*.52,A+Math.sin(M)*.52,-.3,new R(-Math.sin(M)*.3,Math.cos(M)*.3,0),q(.03,.05),q(.8,1.4));I.material.color.set(Math.random()<.7?11771135:14283659),I.userData.fin=.3}}if(b.type==="hot"){b.glow&&b.glow.scale.setScalar(1.2+.1*Math.sin(e.clock*5+b.x0*7));for(let S=0,A=zn(.14,i);S<A;S++){let C=q(.3,2.84);mt(b.grp.position.x+Math.cos(C)*.36,b.grp.position.y+Math.sin(C)*.36,-.3,new R(Math.cos(C)*.25+e.wind*.45,.35+Math.sin(C)*.4,0),q(.05,.09),q(.5,.9)).material.color.set(Math.random()<.5?16730652:16757575)}if(b.body.rotation.y+=i*.6,b.steam>0){b.steam-=i;for(let S=0,A=zn(6,i);S<A;S++)mt(b.grp.position.x+(Math.random()-.5)*.6,b.grp.position.y+.3,.3,new R((Math.random()-.5)*.3,1.2+Math.random(),0),.07,.6).material.color.set(16766914)}}if(b.gone>0){if(b.gone+=i,b.type==="crumble"?(b.grp.position.y-=3*b.gone*i*10,b.grp.rotation.z+=3*i,b.body.scale.multiplyScalar(1-i*1.2)):b.novaBurn?b.grp.scale.multiplyScalar(Math.max(0,1-i*4)):(b.body.material.opacity=Math.max(0,.82-b.gone*2.2),b.body.scale.multiplyScalar(1-i*1.5)),b.type==="ice"&&b.gone>.7){b.body.visible=!1,b.gone>2.6&&(b.gone=0,b.alive=!0,b.hp=3,b.bait=!1,b.body.material.emissiveMap=null,b.body.material.emissive.set(7314687),b.body.material.emissiveIntensity=.25,b.body.material.needsUpdate=!0,b.body.visible=!0,b.body.scale.setScalar(1),b.body.material.opacity=.82,Bi(new R(b.grp.position.x,b.grp.position.y,.2),6,!1));continue}if(b.gone>.7){No(x);continue}}b.type in Ff&&Nm(b.type,b.grp.position.y,t),b.type==="ground"&&(fs.position.set(b.grp.position.x,b.grp.position.y+.005,0),fs.visible=b.grp.position.y>t.bot-1),b.grp.position.y<t.bot-1.5&&No(x)}for(;e.nextY<t.top+2;)zf();for(let x=e.stars.length-1;x>=0;x--){let b=e.stars[x],S=b.userData;if(S.age+=i,b.material.rotation+=S.spin*i,b.scale.setScalar(S.base*(1+.16*Math.sin(S.age*5))),S.glow&&(S.glow.position.copy(b.position),S.glow.scale.setScalar(S.base*(2.2+.5*Math.sin(S.age*3.1)))),e.magnet>0){let A=h.clone().sub(b.position);A.z=0;let C=A.length();if(C<3.6){b.position.addScaledVector(A.normalize(),Math.min(C,8*i));for(let v=0,M=zn(1.2,i);v<M;v++)mt(b.position.x,b.position.y,.1,new R(-A.x*.5,-A.y*.5,0),.05,.35)}}if(Math.hypot(b.position.x-h.x,b.position.y-h.y)<.65){zM(x);continue}S.kind==="key"&&b.position.y<t.top-.6&&Wm("key",`\u0411\u043E\u043B\u044C\u0448\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430 \u2014 \u0442\u043E\u0447\u043A\u0430 \u0441\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u044F. \u0421\u043E\u0431\u0435\u0440\u0438 \u0432\u0441\u0435 \u0434\u043E ${le.goal} \u043C, \u0438 \u0437\u0432\u0435\u0437\u0434\u0430 \u0434\u043D\u044F \u0437\u0430\u0441\u0438\u044F\u0435\u0442`),b.position.y<t.bot-1&&(S.kind==="key"&&(e.keyOut=!1,e.keyAt=e.alt+4,tt("\u0422\u043E\u0447\u043A\u0430 \u0441\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u044F \u043E\u0441\u0442\u0430\u043B\u0430\u0441\u044C \u0432\u043D\u0438\u0437\u0443 \u2014 \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442 \u0435\u0449\u0451 \u043E\u0434\u043D\u0430",1200)),nh(x,!1))}e.magnet>0&&(e.magnet-=i);for(let x=e.bonuses.length-1;x>=0;x--){let b=e.bonuses[x];if(b.t+=i,b.sp.position.y+=Math.sin(b.t*3)*.24*i,Math.hypot(b.sp.position.x-h.x,b.sp.position.y-h.y)<.6){let S=on(b.sp.position);pe.remove(b.sp),e.bonuses.splice(x,1),je.play("bonus"),b.kind==="rocket"&&(e.rocket=3,Vn("\u0420\u0430\u043A\u0435\u0442\u0430!",S),at("leap",{fade:.05,speed:.6})),b.kind==="bubble"&&(e.bubble=!0,Vn("\u041F\u0443\u0437\u044B\u0440\u044C!",S),Gn(),e.tipped.bubble||(e.tipped.bubble=!0,tt("\u041F\u0443\u0437\u044B\u0440\u044C \u043F\u043E\u0434\u0445\u0432\u0430\u0442\u0438\u0442, \u0435\u0441\u043B\u0438 \u0441\u043E\u0440\u0432\u0451\u0448\u044C\u0441\u044F. \u0418 \u0437\u0430\u0449\u0438\u0442\u0438\u0442 \u043E\u0442 \u0436\u0430\u0440\u0430 \u0438 \u043C\u0435\u0442\u0435\u043E\u0440\u0438\u0442\u0430",2800,!0))),b.kind==="magnet"&&(e.magnet=5,Vn("\u041C\u0430\u0433\u043D\u0438\u0442!",S));continue}b.sp.position.y<t.bot-1&&(b.kind==="bubble"&&!e.bubble&&(e.bubbleAt=Math.min(e.bubbleAt,e.nextY-e.baseY+e.scrolled+12)),pe.remove(b.sp),e.bonuses.splice(x,1))}e.bubbleSp&&(e.bubbleSp.visible=e.bubble,e.bubble&&e.bubbleSp.position.set(k.position.x,k.position.y+.6,.35));for(let x=e.holes.length-1;x>=0;x--){let b=e.holes[x];b.sp.material.rotation-=i*2;let S=b.sp.position.clone().sub(h);S.z=0;let A=S.length();if(A<1.8&&e.rocket<=0){let v=4.2/(A*A+.35);k.position.x+=S.x/A*v*i*.35,e.vy+=S.y/A*v*i}let C=b.used?0:Se.clamp((2-A)/1,0,1)*.42;if(b.ring.material.opacity+=(C-b.ring.material.opacity)*Math.min(1,6*i),b.ring.rotation.z+=i*.8,b.sp.scale.setScalar(1.25+.06*Math.sin(performance.now()*.004)),b.near=Math.min(b.near,A),Nm("hole",b.sp.position.y,t),A<.38&&e.rocket<=0){if(pe.remove(b.sp),pe.remove(b.ring),e.holes.splice(x,1),e.bubble){xa("\u0447\u0451\u0440\u043D\u043E\u0439 \u0434\u044B\u0440\u044B"),e.vy=le.v0,ii(k.position.y);continue}let v=null;for(let I of e.plats)I.alive&&I.type!=="hot"&&I.type!=="crumble"&&I.grp.position.y>t.bot+.3&&(!v||I.grp.position.y<v.grp.position.y)&&(v=I);if(!v){if(k.position.y=t.bot-1,Af("\u0427\u0451\u0440\u043D\u0430\u044F \u0434\u044B\u0440\u0430!"),!e.playing)return;continue}let M=GM(1);e.series=0,e.dashReady=!1,cs(),Gn(),Bi(h.clone(),10,!1),k.position.set(v.grp.position.x,v.grp.position.y+v.top,0),ii(k.position.y),Ls(le.v0),e.spinT=.7,e.invuln=1.5,Vn(M>0?"\u22121 \u0442\u043E\u0447\u043A\u0430 \u0441\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u044F":"\u0412\u044B\u043F\u043B\u044E\u043D\u0443\u043B\u043E!",on(k.position),!0),tt("\u0427\u0451\u0440\u043D\u0430\u044F \u0434\u044B\u0440\u0430 \u0432\u044B\u043F\u043B\u044E\u043D\u0443\u043B\u0430 \u041E\u0440\u0438 \u043D\u0438\u0436\u0435",1200),je.play("hole");try{navigator.vibrate&&navigator.vibrate(60)}catch{}continue}!b.used&&b.near<.95&&A>1.3&&(b.used=!0,e.vy=Math.max(e.vy,0)+4.5,tt("\u0413\u0440\u0430\u0432\u0438\u043C\u0430\u043D\u0451\u0432\u0440!",800),Vn("\u0420\u0430\u0437\u0433\u043E\u043D!",on(h)),je.play("sling")),b.sp.position.y<t.bot-1.5&&(pe.remove(b.sp),pe.remove(b.ring),e.holes.splice(x,1))}let g=Fo(p.n);if(g.gust&&e.alt>=Lo.gust*le.levelH&&(e.gustOn||(e.gustOn=!0,e.gustIn=2),e.gustIn-=i,e.gustIn<=0&&e.windT<=0&&(e.windDir=Math.random()<.5?-1:1,e.windT=2.6,e.gustIn=g.gust*(.8+Math.random()*.5),je.play("wind"),e.windAmp=e.gustSeen?2.3:1.3,e.gustSeen?tt(e.windDir>0?"\u0412\u0435\u0442\u0435\u0440 \u0432\u043F\u0440\u0430\u0432\u043E \u2192":"\u2190 \u0412\u0435\u0442\u0435\u0440 \u0432\u043B\u0435\u0432\u043E",900):(e.gustSeen=!0,tt(`\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0439 \u0432\u0435\u0442\u0435\u0440 \u0441\u043D\u043E\u0441\u0438\u0442 ${e.windDir>0?"\u0432\u043F\u0440\u0430\u0432\u043E \u2192":"\u2190 \u0432\u043B\u0435\u0432\u043E"} \u0420\u0443\u043B\u0438 \u043F\u0440\u043E\u0442\u0438\u0432 \u043D\u0435\u0433\u043E`,2400,!0)))),e.windT>0){e.windT-=i;let x=Math.min(1,(2.6-e.windT)/.9)*Math.min(1,e.windT/.4);e.wind=e.windDir*e.windAmp*Math.max(0,x);for(let S=0,A=zn(1.1,i);S<A;S++){let C=t.bot+Math.random()*(t.top-t.bot),v=q(-.6,.5),M=e.windDir*q(6,9),I=-e.windDir*(t.xm+1.4);for(let B=0;B<6;B++)mt(I-e.windDir*B*.09,C,v,new R(M,0,0),.05-B*.006,.55).material.color.set(B<2?16777215:14673919)}let b=e.windDir>0?"r":"l";Ze.wind!==b&&(Ze.wind=b,Mf.className="on "+b)}else e.wind=0,Ze.wind&&(Ze.wind="",Mf.className="");let y=Se.clamp((e.alt-p.n*le.levelH)/le.levelH,0,1),m=e.alt>=Lo.meteor*le.levelH?In(g.meteor,y):0;m>0&&(e.meteorIn-=i,e.meteorIn<=0&&(kM(),e.meteorIn=Math.max(g.meteorMin||4.5,m*Math.pow(.92,p.extra))*(.8+Math.random()*.4)));let d=new mo(k.position.clone().add(new R(0,.2,0)),k.position.clone().add(new R(0,1,0))),_=new R;for(let x=e.meteors.length-1;x>=0;x--){let b=e.meteors[x];if(b.warn>0){b.warn-=i,b.ring.scale.setScalar(.45+.35*Math.abs(Math.sin(b.warn*14))),b.ring.material.opacity=.5+.5*Math.abs(Math.sin(b.warn*14)),b.warn<=0&&(pe.remove(b.ring),b.ring.material.dispose(),b.ring=null,b.sp.visible=!0);continue}b.sp.position.x+=b.vx*i,b.sp.position.y+=b.vy*i,b.sp.material.rotation+=b.spin*i;for(let S=0,A=zn(.7,i);S<A;S++)mt(b.sp.position.x-Math.sign(b.vx)*.12,b.sp.position.y,.3,new R(-b.vx*.3,.2,0),.05+Math.random()*.04,.35).material.color.set(Math.random()<.5?16711730:5923976);if(!(e.invuln>0)&&e.rocket<=0){let S=b.sp.position.clone();if(S.z=0,d.closestPointToPoint(S,!0,_),_.distanceTo(S)<.38){let C=b.sp.position.clone();if(ql(x),Bi(C,14,!0),e.bubble){xa("\u043C\u0435\u0442\u0435\u043E\u0440\u0438\u0442\u0430");continue}e.vy=Math.min(e.vy,.5),ii(-1/0),e.knock=.45,e.knockV=Math.sign(b.vx)*5.5,e.spinT=.45,e.invuln=1.2,e.hits++,e.series=0,e.dashReady=!1,cs();try{navigator.vibrate&&navigator.vibrate(80)}catch{}tt("\u041C\u0435\u0442\u0435\u043E\u0440\u0438\u0442 \u0441\u0431\u0438\u043B \u041E\u0440\u0438 \u0441 \u043A\u0443\u0440\u0441\u0430!",1100),je.play("meteor");continue}let A=_.distanceTo(S);A<.75?b.close=!0:b.close&&!b.paid&&A>.9&&(b.paid=!0,Vf(on(b.sp.position)))}(Math.abs(b.sp.position.x)>t.xm+2||b.sp.position.y<t.bot-1)&&ql(x)}if(FM(i,t,g,y),!e.playing)return;let E=e.alt>=Lo.bolt*le.levelH?In(g.bolt||0,y):0;E>0&&(e.boltIn-=i,e.boltIn<=0&&(NM(),e.boltIn=Math.max(2.4,E*Math.pow(.92,p.extra))*(.8+Math.random()*.4))),OM(i),(k.position.y<t.bot-.6||e.falling&&e.fallT>1.2)&&Af("\u041F\u0440\u043E\u043C\u0430\u0445!")}/[?&]debug\b/.test(location.search)&&(window.__jump={game:V,JUMP:le,LEVELS:Hi,pivot:()=>k,bounds:vi,step:i=>u0(i),audit(i=600){let e=V,t=vi(),n=9,s=0,r=null,a={};for(let o=0;o<i;o++){let c=e.nextY;zf(),s=Math.max(s,e.nextY-c),a[e.lastType]=(a[e.lastType]||0)+1;let l=e.plats.filter(sh);for(let h=0;h<l.length;h++)for(let u=h+1;u<l.length;u++){let f=Oo(l[h],l[u].x0,l[u].grp.position.y,l[u].swing||0);f<n&&(n=f,r=[l[h].type,l[u].type,Math.round(e.scrolled)])}for(let h of e.holes)for(let u of l){let f=Oo(u,h.sp.position.x,h.sp.position.y);f<le.holeSep-1e-6&&(r=["hole",u.type,f])}T0(e.nextY-c);for(let h=e.plats.length-1;h>=0;h--)e.plats[h].grp.position.y<t.bot-1.5&&No(h);for(let h=e.holes.length-1;h>=0;h--)e.holes[h].sp.position.y<t.bot-1.5&&(pe.remove(e.holes[h].sp),pe.remove(e.holes[h].ring),e.holes.splice(h,1))}return{minD:+n.toFixed(3),maxGap:+s.toFixed(3),worst:r,types:a,reachedM:Math.round(e.scrolled)}}});var ki=new Lt,$l=new R(1,0,0),KM=new R(0,1,0);function JM(i){let e=V;if(e.playing&&!e.finale&&!window.__noPose){let t=e.rocket>0?0:1,n=Se.clamp(e.airT/Math.max(.3,e.airDur),0,1),s=(g,y,m)=>{let d=Se.clamp((m-g)/(y-g),0,1);return d*d*(3-2*d)},r=t*(1-s(.05,.32,n)),a=t*Math.sin(Math.PI*Se.clamp((n-.12)/.8,0,1)),o=t*s(.55,.92,n);et("spine",-.16*r-.04*o,0,0),et("chest",-.08*r-.03*o,0,0),et("neck",-.12*r+.03*o,0,0),et("head",-.22*r+.1*o,0,0);let c=.35*r+.22*a-.35*o,l=.7*r+.55*a+.3*o;et("f_upperL",c,0,0),et("f_upperR",c,0,0),et("f_lowerL",l,0,0),et("f_lowerR",l,0,0);let h=-.5*r+.28*a+.2*o,u=-.25*r+.5*a+.4*o;et("b_upperL",h,0,0),et("b_upperR",h,0,0),et("b_lowerL",u,0,0),et("b_lowerR",u,0,0);let f=t*Se.clamp(e.vy*.1,-.75,.75);e.earV+=(55*(f-e.earA)-7*e.earV)*i,e.earA+=e.earV*i,e.earA=Se.clamp(e.earA,-1.1,1.1);let p=.18*a;et("ear1L",e.earA,0,p),et("ear1R",e.earA,0,-p),et("ear2L",.6*e.earA,0,0),et("ear2R",.6*e.earA,0,0)}if(V.stun>0&&ls){let t=V.stun/i0.stun;ki.setFromAxisAngle(KM,.28*t*Math.sin(V.stun*40)),Us(ls,ki)}if(V.snap>0&&Dn&&ls){let t=Math.sin(Math.PI*(1-V.snap/.24));ki.setFromAxisAngle($l,.45*t),Us(Dn,ki),ki.setFromAxisAngle($l,-.16*t),Us(ls,ki),V.snap-=i}}function R0(){let i=V;if(i.finale){i.hero&&!i.tapped&&(i.tapped={inWindow:i.tapWindow});return}i.playing&&ZM()}function ZM(){let i=V;if(!(!i.hop||i.rocket>0||i.knock>0||i.airT<.12)){i.hop=0,i.tipped.hop=!0,i.vy=Math.max(i.vy,le.hop),ii(k.position.y),i.airT=0,i.airDur=2*i.vy/le.g,i.earV+=5,i.squash=.6,at("leap",{fade:.05,speed:1.4}),je.play("sling");for(let e=0;e<14;e++){let t=Math.PI+Math.random()*Math.PI;mt(k.position.x,k.position.y+.05,.25,new R(Math.cos(t)*1.3,Math.sin(t)*.6,0),.06,.4).material.color.set(14283659)}Gn()}}function $M(i){let e=Df(),t=0,n=0;if(rt.hold=Math.max(0,(rt.hold||0)-i),e&&Ee.look)if(Ee.look==="ball"&&de.ball){let h=on(de.ball.position);t=Se.clamp((h.x-e.x)/(innerWidth*.3),-1,1),n=Se.clamp((e.y-h.y)/(innerHeight*.25),-1,1)}else t=0,n=.1;else if(e&&wn.x>=0&&(!Ta||rt.hold>0))t=Se.clamp((wn.x-e.x)/(innerWidth*.35),-1,1),n=Se.clamp((e.y-wn.y)/(innerHeight*.3),-1,1);else{if(rt.sacc-=i,rt.sacc<=0){rt.sacc=.5+Math.random()*1.4;let h=Math.random()*Math.PI*2,u=.55+Math.random()*.45;rt.target.set(Math.cos(h)*u,Math.sin(h)*u*.6),Math.random()<.25&&rt.target.set(0,.15)}t=rt.target.x,n=rt.target.y}t-=Be.y*.6;let s=1-Math.pow(.001,i);rt.gaze.x+=(t-rt.gaze.x)*s,rt.gaze.y+=(n-rt.gaze.y)*s;let r=Math.max(1,Math.hypot(rt.gaze.x,rt.gaze.y)),a=rt.gaze.x/r,o=rt.gaze.y/r,c=new R,l=Se.degToRad(15);for(let h of rt.pivots){let u=xm[h.side];ym.setFromAxisAngle(u.py,-a*l),_m.setFromAxisAngle(u.px,-o*l),h.node.quaternion.copy(ym).multiply(_m)}if(!rt.pivots.length)for(let h of[...rt.irises,...rt.pupils,...rt.glints]){let u=xm[h.side];c.copy(u.px).multiplyScalar(a).addScaledVector(u.py,o).multiplyScalar(.038),h.node.position.copy(h.base).add(c)}}function Gf(){let i=new Gt,e=new ke(new sr(.072,32,24),new Zt({color:14283659,roughness:.75,sheen:1,sheenColor:new Te(16056258),sheenRoughness:.6})),t=new ke(new rr(.072,.006,8,64),new Wt({color:16448252}));t.rotation.x=Math.PI/2,t.scale.set(.99,.99,.99);let n=t.clone();return n.rotation.set(0,0,Math.PI/2),i.add(e,t,n),i}function bf(i,e){let t=new Pe(i/innerWidth*2-1,-(e/innerHeight)*2+1);ya.setFromCamera(t,Ot);let n=new R,s=new yn(new R(0,1,0),-(k?k.position.y:0));return ya.ray.intersectPlane(s,n)||ya.ray.at(6,n),n.y=k?k.position.y:0,n}function QM(i,e){let t=new Pe(i/innerWidth*2-1,-(e/innerHeight)*2+1);ya.setFromCamera(t,Ot);let n=new R,s=new yn(new R(0,1,0),-(k?k.position.y:0));ya.ray.intersectPlane(s,n)||ya.ray.at(6,n);let r=Math.hypot(n.x,n.z),a=1.7;return r>a&&(n.x*=a/r,n.z*=a/r),n.z=Se.clamp(n.z,-1.6,1.3),n.y=k?k.position.y:0,n}function C0(){if(Tt.state!=="stand"){vr(C0);return}At||(de.mode=!de.mode,N0(),jm.style.opacity=0)}var Ql=(i,e=.2)=>new Promise(t=>{let n=(_i[i].b-_i[i].a)/us*1e3+250,s=!1,r=()=>{s||(s=!0,t())};at(i,{fade:e,onDone:r}),setTimeout(r,n)});async function eS(i,e){if(!At)try{await tS(i,e)}catch(t){console.error(t)}finally{At=!1,yi=!1,de.pos=null,de.yaw=null,pn!==ln.idle&&at("idle",{fade:.4})}}async function tS(i,e){let t=QM(i,e);if(!t)return;de.mode=!1,N0(),At=!0,Un=!1,yi=!1,de.ball&&(pe.remove(de.ball),de.ball=null);let n=Gf();de.ball=n,pe.add(n);let s=Ot.position.clone().add(new R(.35,-.55,-.6));n.position.copy(s);let r=new R().fromArray(th[mn].model),a=new R().subVectors(t,r),o=a.length(),c=mn==="s1"?-.35:mn==="s3"?-.5:-.2,l=-(e/innerHeight)*2+1,h=Df(),f=h&&Math.hypot(i-h.x,e-h.y)<Math.min(innerWidth,innerHeight)*.16?"mouth":l>.15?"two":"paw";de.yaw=f==="mouth"||o<.35?0:Math.atan2(a.x,a.z)-c;let p=o>.35?t.clone().addScaledVector(a.clone().normalize(),-.3):r.clone();de.pos=p;let g=Se.clamp(o/Pf,.2,1.1);o>.4&&at("walk",{fade:.15,speed:Bl});let y={mouth:13/24,paw:11/24,two:18/24}[f],m=g+y,d=performance.now(),_=1+o*.25,E=!1,x={mouth:"catchMouth",paw:"catchPaw",two:"catchTwo"}[f],b=()=>{if(f==="mouth")return Wn();let W=k.position.clone(),H=k.rotation.y,K=new R(Math.sin(H),0,Math.cos(H));if(f==="paw"){let Y=new R(K.z,0,-K.x);return W.clone().addScaledVector(K,.45).addScaledVector(Y,.12).setY(k.position.y+.35)}return W.clone().addScaledVector(K,.35).setY(k.position.y+.95)},S=!1;await new Promise(W=>{let H=()=>{let K=Math.min(1,(performance.now()-d)/(m*1e3));!E&&K*m>=g&&(E=!0,de.pos=null,Ql(x,.12).then(()=>{S=!0})),n.position.lerpVectors(s,b(),K),n.position.y+=Math.sin(K*Math.PI)*_,n.rotation.x+=.12,n.rotation.z+=.07,K<1?requestAnimationFrame(H):W()};H()});let A=()=>{let W=n.getWorldPosition(new R);for(let H=0;H<8;H++){let K=Math.random()*Math.PI*2;mt(W.x,W.y,W.z,new R(Math.cos(K)*.9,.8+Math.random()*.8,Math.sin(K)*.9),.1,.6)}},C=()=>{yi=!0,Dn.attach(n);let W=Dn.worldToLocal(Wn());n.position.copy(W),n.rotation.set(0,0,0)};if(f==="mouth")C(),A();else{let W=b().setY(bi()),H=n.position.clone(),K=performance.now();await new Promise(ge=>{let Ae=()=>{let qe=Math.min(1,(performance.now()-K)/350);n.position.lerpVectors(H,W,qe),n.position.y=Se.lerp(H.y,W.y,qe*qe),qe<1?requestAnimationFrame(Ae):ge()};Ae()});let Y=f==="paw"?40/24:52/24,he=(performance.now()-d)/1e3-g;await Xt(Math.max(0,Y-he)*1e3),C(),A()}for(let W=0;W<60&&!S;W++)await Xt(50);let v=r.clone();de.pos=null,o>.35&&(de.yaw=Math.atan2(v.x-p.x,v.z-p.z)-c,at("walk",{fade:.2,speed:Bl}),await Xt(Math.max(450,g*1e3))),de.yaw=0,await L0(),Be.y=0,Be.x=0,Be.vy=0,de.yaw=null;let M=Ql("drop",.2);await Xt(13/24*1e3),yi=!1,pe.attach(n),ie.on=!1,ie.v.set(0,0,0),ie.vy=0;let I=n.position.clone(),B=Math.random()<.5?-1:1,U=new R(k.position.x+B*.38,bi(),k.position.z+.5),O=performance.now();await new Promise(W=>{let H=()=>{let K=Math.min(1,(performance.now()-O)/600);n.position.lerpVectors(I,U,K),n.position.y=Se.lerp(I.y,U.y,K*K)+(K>.7?Math.sin((K-.7)/.3*Math.PI)*.08:0),n.rotation.x+=.1,K<1?requestAnimationFrame(H):(n.position.copy(U),W())};H()}),await M,at("idle",{fade:.4}),At=!1}function P0(i,e){ie.on=!0,ie.v.copy(i),ie.vy=e!==void 0?e:1.6+i.length()*.25,ie.chase=!0,At||I0()}function nS(i){let e=de.ball;if(!e||!ie.on)return;ie.vy-=9.8*i,ie.vy*=Math.pow(.9,i),e.position.addScaledVector(ie.v,i),e.position.y+=ie.vy*i;let t=bi();e.position.y<t&&(e.position.y=t,Math.abs(ie.vy)>.6?ie.vy=-ie.vy*.45:ie.vy=0,ie.v.multiplyScalar(.985));let n=.06,s=e.position.clone().project(Ot),r=!1,a=new R().setFromMatrixColumn(Ot.matrixWorld,0).setY(0).normalize(),o=new R(0,1,0),c=new R().setFromMatrixColumn(Ot.matrixWorld,2).negate().setY(0).normalize(),l=ie.v.clone();if(l.y=ie.vy,s.x>1-n&&l.dot(a)>0||s.x<-1+n&&l.dot(a)<0){let u=l.dot(a);ie.v.addScaledVector(a,-u*1.8),r=!0}if(s.y>1-n-.08&&ie.vy>0&&(ie.vy=-ie.vy*.75,r=!0),s.y<-1+n+.02){let u=l.dot(c);u<0&&(ie.v.addScaledVector(c,-u*1.8),r=!0)}let h=e.position.clone().project(Ot);if(Math.abs(h.x)>1-n||h.y>1-n-.08||h.y<-1+n+.02){h.x=Se.clamp(h.x,-1+n,1-n),h.y=Se.clamp(h.y,-1+n+.02,1-n-.08);let f=h.unproject(Ot).sub(Ot.position).normalize(),p=(e.position.y-Ot.position.y)/f.y;if(isFinite(p)&&p>0){let g=Ot.position.clone().addScaledVector(f,p);e.position.x=g.x,e.position.z=g.z}}if(e.position.z<-1.2&&ie.v.z<0&&(e.position.z=-1.2,ie.v.z=-ie.v.z*.8,r=!0),e.position.z>1.3&&ie.v.z>0&&(e.position.z=1.3,ie.v.z=-ie.v.z*.8,r=!0),r){let u=e.position;for(let f=0;f<4;f++){let p=Math.random()*Math.PI*2;mt(u.x,u.y,u.z,new R(Math.cos(p)*.6,.6,Math.sin(p)*.6),.07,.4)}}e.position.y<=t+.001&&ie.v.multiplyScalar(Math.pow(.35,i)),e.rotation.x+=ie.v.z*i/_f,e.rotation.z-=ie.v.x*i/_f,e.position.y<=t+.001&&ie.v.length()<.05&&Math.abs(ie.vy)<.05?(ie.v.set(0,0,0),ie.vy=0,ie.on=!1):e.position.y>t+.001&&(ie.on=!0),ie.bounds.x=1.6,ie.bounds.zMin=-1.2,ie.bounds.zMax=1.3}async function I0(){At=!0,Un=!1,yi=!1;let i=de.ball,e=new R().fromArray(th[mn].model),t=mn==="s1"?-.35:mn==="s3"?-.5:-.2;try{at("walk",{fade:.15,speed:Bl});let n=Pf,s=!1,r=performance.now(),a=k.position.x,o=k.position.z,c=performance.now();for(;!s&&performance.now()-r<12e3;){performance.now()-r>6e3&&i.position.y>bi()+.3&&(ie.vy=-1);let A=i.position,C=k.position,v=new R(A.x-C.x,0,A.z-C.z),M=v.length();M>.05&&(de.yaw=Math.atan2(v.x,v.z)-t);let I=A.clone().sub(v.clone().normalize().multiplyScalar(.3));I.y=0,I.z=Se.clamp(I.z,ie.bounds.zMin,ie.bounds.zMax),de.pos=I;let B=ie.v.length();M<.5&&i.position.y<bi()+.3&&B<.9&&(s=!0),!ie.on&&M<.75&&(s=!0),performance.now()-r>2500&&M<.9&&i.position.y<bi()+.3&&(s=!0);let U=performance.now();Math.hypot(k.position.x-a,k.position.z-o)>.03?(a=k.position.x,o=k.position.z,c=U):!ie.on&&U-c>800&&(s=!0),await Xt(40)}if(de.pos=null,ie.on=!1,ie.v.set(0,0,0),ie.vy=0,!s){de.yaw=null;return}let l=ie.v.length()>.5,h=l?"catchPaw":"pickup",u=l?40/24:14/24,f=Ql(h,.15),p=i.position.clone(),g=performance.now();await new Promise(A=>{let C=()=>{let v=Math.min(1,(performance.now()-g)/(u*1e3)),M=k.rotation.y,I=k.position.clone().add(new R(Math.sin(M),0,Math.cos(M)).multiplyScalar(.36)).setY(bi());i.position.lerpVectors(p,I,v),v<1?requestAnimationFrame(C):A()};C()}),yi=!0,Dn.attach(i),i.position.copy(Dn.worldToLocal(Wn())),i.rotation.set(0,0,0);let y=Wn();for(let A=0;A<8;A++){let C=Math.random()*Math.PI*2;mt(y.x,y.y,y.z,new R(Math.cos(C)*.9,.8+Math.random()*.8,Math.sin(C)*.9),.1,.6)}await f;let m=k.position.clone(),d=e.clone().sub(m);if(d.y=0,d.length()>.25){de.yaw=Math.atan2(d.x,d.z)-t,de.pos=e.clone(),at("walk",{fade:.2,speed:Bl});let A=performance.now();for(;new Pe(k.position.x-e.x,k.position.z-e.z).length()>.06&&performance.now()-A<5e3;)await Xt(40)}de.pos=null,de.yaw=0,await L0(),Be.y=0,Be.x=0,Be.vy=0,de.yaw=null;let _=Ql("drop",.2);await Xt(13/24*1e3),yi=!1,pe.attach(i),ie.on=!1,ie.v.set(0,0,0),ie.vy=0;let E=i.position.clone(),x=Math.random()<.5?-1:1,b=new R(Se.clamp(k.position.x+x*.38,-ie.bounds.x,ie.bounds.x),bi(),Math.min(k.position.z+.5,ie.bounds.zMax)),S=performance.now();await new Promise(A=>{let C=()=>{let v=Math.min(1,(performance.now()-S)/600);i.position.lerpVectors(E,b,v),i.position.y=Se.lerp(E.y,b.y,v*v)+(v>.7?Math.sin((v-.7)/.3*Math.PI)*.08:0),v<1?requestAnimationFrame(C):(i.position.copy(b),A())};C()}),await _}catch(n){console.error(n)}finally{At=!1,yi=!1,de.pos=null,de.yaw=null,ie.chase=!1,at("idle",{fade:.4})}}async function L0(){let i=mn==="s1"?-.35:mn==="s3"?-.5:-.2,e=performance.now();for(;performance.now()-e<1200;){let t=i+(de.yaw||0)-k.rotation.y;if(t=Math.atan2(Math.sin(t),Math.cos(t)),Math.abs(t)<.06)break;await Xt(40)}}function D0(){Un&&(Un=!1,at("petOut",{fade:.2,onDone:()=>at("idle",{fade:.4})}))}var Vt={action:null,w:0,on:!1,t:0,next:4},ds={action:null};function iS(i){if(!Vt.action)return;let e=!At&&!V.on&&!de.mode&&!Un&&!yi&&(pn===ln.idle||pn===ln.sit);Vt.on?(Vt.t-=i,(Vt.t<=0||!e)&&(Vt.on=!1,Vt.next=5+Math.random()*7)):e&&(Vt.next-=i,Vt.next<=0&&(Vt.on=!0,Vt.t=2.5+Math.random()*2.5)),Vt.w+=((Vt.on?1:0)-Vt.w)*Math.min(1,i*(Vt.on?3:5)),Vt.action.setEffectiveWeight(Vt.w<.002?0:Vt.w)}var Tt={state:"stand",idle:0,pending:null};function sS(){return!At&&!Ee.on&&!V.on&&!de.mode&&!Un&&!ie.on&&!ie.grab&&!wn.down&&pn===ln.idle}function rS(i){if(Tt.state==="stand"){if(!sS()){Tt.idle=0;return}Tt.idle+=i,Tt.idle>=Lv&&(Tt.state="down",at("sitDown",{fade:.35,onDone:()=>{Tt.state==="down"&&pn===ln.sitDown&&(Tt.state="sitting",at("sit",{fade:.2}))}}))}}function vr(i){if(je.ensure(),Tt.idle=0,Tt.state==="stand")return i&&i(),!0;if(i&&(Tt.pending=i),Tt.state==="up")return!1;let e=()=>{Tt.state="stand",Tt.idle=0,(pn===ln.sitUp||pn===ln.sitDown)&&at("idle",{fade:.3});let t=Tt.pending;Tt.pending=null,t&&t()};return Tt.state==="down"&&ln.sitDown.time<(_i.sitDown.b-_i.sitDown.a)/us*.4?(Tt.state="up",at("idle",{fade:.35}),setTimeout(e,300),!1):(Tt.state="up",at("sitUp",{fade:.2,onDone:e}),!1)}var qm={first:7,again:12},Ee={idle:0,on:!1,stage:0,look:null,tilt:0,tiltTo:0,bow:0,bowTo:0,snap:0,cycles:0,tok:0,tap:0},Wf=$e("#begBubble"),aS=()=>!At&&!V.on&&!de.mode&&!Un&&!ie.on&&!ie.grab&&!wn.down&&(mn==="s1"||mn==="s3")&&!document.hidden&&(pn===ln.idle||pn===ln.sit||pn===ln.sitDown);function U0(){Ee.on=!1,Ee.stage=0,Ee.look=null,Ee.tiltTo=0,Ee.bowTo=0,Wf.classList.remove("on"),document.body.classList.remove("beg")}function Xf(){Ee.idle=0,Ee.on&&(Ee.tok++,Ee.stage===3&&!At&&(de.yaw=null),U0())}function Ym(){Ee.snap=.22,je.play("yip")}async function oS(){let i=++Ee.tok,e=()=>Ee.on&&Ee.tok===i;Ee.on=!0,Ee.idle=0,Ee.cycles++;try{if(Tt.state!=="stand"){for(vr();e()&&Tt.state!=="stand";)await Xt(60);await Xt(200)}if(!e())return;let t=de.ball&&de.ball.parent===pe?de.ball:null;if(!t){de.ball&&pe.remove(de.ball),t=Gf(),de.ball=t,pe.add(t);let o=Math.random()<.5?-1:1;if(t.position.set(o*1.3,bi(),k.position.z+.3),ie.on=!0,ie.v.set(-o*1.5,0,.05),ie.vy=0,ie.chase=!1,await Xt(600),!e())return}if((!(Math.hypot(t.position.x-k.position.x,t.position.z-k.position.z)<.7&&t.position.z>k.position.z+.2)||ie.on)&&(await I0(),await Xt(250)),!e())return;Ee.stage=2,document.body.classList.add("beg"),Wf.classList.add("on");for(let o=0;o<4&&e();o++){let c=o%2===1;Ee.look=c?"you":"ball",Ee.tiltTo=c?o===1?.3:-.3:0,await Xt(c?1500:900)}if(!e())return;Ee.stage=3,Ee.look="ball",Ee.tiltTo=0;let s=mn==="s1"?-.35:mn==="s3"?-.5:-.2,r=t.position.x-k.position.x,a=t.position.z-k.position.z;if(de.yaw=Math.atan2(r,a)-s,await Xt(450),!e()||(Ee.bowTo=1,await Xt(520),!e())||(!ie.on&&t.parent===pe&&(ie.on=!0,ie.chase=!1,ie.v.set(Math.sign(r||1)*.12,0,.3),ie.vy=.5),await Xt(650),!e())||(Ee.look="you",Ym(),await Xt(420),!e())||(Ym(),await Xt(1100),!e())||(Ee.bowTo=0,de.yaw=null,await Xt(600),!e()))return;Ee.tiltTo=.25,await Xt(2200)}catch(t){console.error("beg",t)}finally{Ee.tok===i&&(Ee.stage===3&&!At&&(de.yaw=null),U0(),Ee.idle=0)}}function cS(i){if(Ee.on){let e=Df();e&&(Wf.style.transform=`translate(${Math.round(e.x+34)}px, ${Math.round(e.y-96)}px)`);return}if(!aS()){(At||V.on||wn.down||de.mode)&&(Ee.idle=0);return}Ee.idle+=i,Ee.idle>=(Ee.cycles?qm.again:qm.first)&&oS()}function lS(i){Ee.tilt+=(Ee.tiltTo-Ee.tilt)*Math.min(1,i*5),Ee.bow+=(Ee.bowTo-Ee.bow)*Math.min(1,i*5);let e=Ee.tilt,t=Ee.bow;if(Math.abs(e)>.002&&(et("head",0,0,e),et("neck",0,0,e*.4)),Ee.look==="ball"&&t<.3&&(et("neck",.14,0,0),et("head",.16,0,0)),t>.002&&(et("spine",.3*t,0,0),et("chest",.34*t,0,0),et("neck",-.3*t,0,0),et("head",-.28*t,0,0),et("f_upperL",-1*t,0,0),et("f_upperR",-1*t,0,0),et("f_lowerL",.75*t,0,0),et("f_lowerR",.75*t,0,0),et("ear1L",-.25*t,0,0),et("ear1R",-.25*t,0,0)),Ee.snap>0&&Dn&&ls){let n=Math.sin(Math.PI*(1-Ee.snap/.22));ki.setFromAxisAngle($l,.5*n),Us(Dn,ki),ki.setFromAxisAngle($l,-.16*n),Us(ls,ki),Ee.snap-=i}}function qf(i){if(Tt.state!=="stand"&&i!=="reset"&&i!=="showcard"){vr(()=>qf(i));return}if(At)return;if(i==="reset"){Ea.clear(),location.reload();return}if(i==="showcard"){Fs.s3.classList.remove("hidecard"),$e("#showCard").style.display="none",Aa("s3");return}if(!ln[i])return;Un=!1,At=!0;let e=_i[i].loop;at(i,{fade:.25,onDone:e?void 0:()=>{At=!1,at("idle",{fade:.5})}}),e&&setTimeout(()=>{At=!1,at("idle",{fade:.5})},4e3)}$e("#catch").addEventListener("click",ih);$e("#again").addEventListener("click",ih);$e("#gQuit").addEventListener("click",uM);var Cf=$e("#gMute"),F0=()=>{Cf.textContent=je.muted?"\u{1F507}":"\u{1F50A}",Cf.setAttribute("aria-label",je.muted?"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A":"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A")};Cf.addEventListener("click",()=>{je.setMuted(!je.muted),F0(),je.muted||je.play("star",1)});F0();$e("#trainToggle").addEventListener("click",()=>{confirm("\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0434\u0435\u043D\u044C? \u0417\u0432\u0435\u0437\u0434\u0430 \u0438 \u0444\u0440\u0430\u0437\u0430 \u0434\u043D\u044F \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u0439\u043C\u0430\u043D\u044B \u0437\u0430\u043D\u043E\u0432\u043E.")&&qf("reset")});$e("#cardClose").addEventListener("click",()=>{Fs.s3.classList.add("hidecard"),$e("#showCard").style.display="",Aa("s1")});document.querySelectorAll("#throwBtn,[data-throw]").forEach(i=>i.addEventListener("click",C0));function N0(){document.querySelectorAll("#throwBtn,[data-throw]").forEach(i=>{i.classList.toggle("armed",de.mode),i.textContent=de.mode?"\u0422\u0430\u043F\u043D\u0438\u0442\u0435, \u043A\u0443\u0434\u0430 \u0431\u0440\u043E\u0441\u0438\u0442\u044C":"\u0411\u0440\u043E\u0441\u0438\u0442\u044C \u043C\u044F\u0447"})}document.querySelectorAll(".cmds").forEach(i=>i.addEventListener("click",e=>{let t=e.target.closest("button");t&&qf(t.dataset.cmd)}));document.querySelectorAll(".cmds").forEach(i=>{i.addEventListener("wheel",r=>{i.scrollWidth<=i.clientWidth||Math.abs(r.deltaY)<=Math.abs(r.deltaX)||(r.preventDefault(),i.scrollLeft+=r.deltaY)},{passive:!1});let e=!1,t=!1,n=0,s=0;i.addEventListener("pointerdown",r=>{r.pointerType!=="mouse"||r.button!==0||(e=!0,t=!1,n=r.clientX,s=i.scrollLeft)}),window.addEventListener("pointermove",r=>{if(!e)return;let a=r.clientX-n;!t&&Math.abs(a)>5&&(t=!0,i.style.scrollSnapType="none",i.classList.add("dragging")),t&&(i.scrollLeft=s-a)}),window.addEventListener("pointerup",()=>{e&&(e=!1,i.style.scrollSnapType="",i.classList.remove("dragging"))}),i.addEventListener("click",r=>{t&&(r.preventDefault(),r.stopPropagation(),t=!1)},!0)});var wn={x:-1,y:-1,down:!1};addEventListener("pointerdown",()=>{Ee.tap=Ee.on&&Ee.stage>=2&&!At?performance.now():0,Xf(),vr()},!0);addEventListener("keydown",()=>{Xf(),vr()},!0);addEventListener("wheel",()=>{Xf(),vr()},{capture:!0,passive:!0});addEventListener("pointermove",()=>{Tt.state==="stand"&&(Tt.idle=0)},!0);addEventListener("pointermove",i=>{if(V.on){V.drag&&V.drag.id===i.pointerId&&(V.drag.moved+=Math.abs(i.clientX-V.drag.lx),V.drag.lx=i.clientX,V.finale||(V.targetX=n0(i.clientX)),V.drag.moved>8&&Hl());return}if(ie.grab&&ie.grab.id===i.pointerId){ie.grab.pts.push([i.clientX,i.clientY,performance.now()]),ie.grab.pts.length>12&&ie.grab.pts.shift();return}if(wn.x=i.clientX,wn.y=i.clientY,Ta&&wn.down&&(rt.hold=4),Be.dragging){let e=i.clientX-Be.lastX,t=i.clientY-Be.lastY;Be.lastX=i.clientX,Be.lastY=i.clientY,Be.moved+=Math.abs(e)+Math.abs(t);let n=Se.clamp(i.timeStamp-(Be.lastT||i.timeStamp-16.7),4,50);Be.lastT=i.timeStamp,Be.y+=e*.006,Be.vy=e*.006*16.7/n,Be.x=Se.clamp(Be.x+t*.003,-.35,.35),Be.moved>12&&Un&&D0()}});cn.addEventListener("pointerdown",i=>{if(V.on&&V.playing&&(V.targetX=n0(i.clientX),Hl()),V.on){V.drag={id:i.pointerId,x:i.clientX,lx:i.clientX,t:performance.now(),moved:0};try{cn.setPointerCapture(i.pointerId)}catch{}return}if(de.ball&&!At&&!ie.on&&de.ball.parent===pe){let e=de.ball.position.clone().project(Ot),t=(e.x+1)/2*innerWidth,n=(1-e.y)/2*innerHeight;if(Math.hypot(i.clientX-t,i.clientY-n)<Math.min(innerWidth,innerHeight)*.12){ie.grab={id:i.pointerId,pts:[[i.clientX,i.clientY,performance.now()]]};try{cn.setPointerCapture(i.pointerId)}catch{}return}}wn.x=i.clientX,wn.y=i.clientY,wn.down=!0,rt.hold=4,Be.dragging=!0,Be.lastX=i.clientX,Be.lastY=i.clientY,Be.lastT=i.timeStamp,Be.moved=0;try{cn.setPointerCapture(i.pointerId)}catch{}});function O0(i){if(V.on){let t=V.drag;V.drag=null,t&&t.id===i.pointerId&&i.type==="pointerup"&&t.moved<10&&performance.now()-t.t<350&&R0();return}if(ie.grab&&ie.grab.id===i.pointerId){let t=ie.grab.pts;ie.grab=null;try{let n=t[0],s=t[t.length-1],r=t.length-1;for(;r>0&&s[2]-t[r-1][2]<120;)r--;let a=t[r],o=Math.max(16,s[2]-a[2])/1e3,c=bf(a[0],a[1]),l=bf(s[0],s[1]),h=bf(n[0],n[1]),u=l.clone().sub(c).divideScalar(o);u.y=0;let f=l.clone().sub(h);f.y=0;let p=n[1]-s[1],g=Se.clamp(Math.max(0,p)/(innerHeight*.35),0,1);if(u.z*=.35,f.z*=.35,i.pointerType==="touch"){let m=f.clone().multiplyScalar(6);m.length()>u.length()?u.copy(m):u.multiplyScalar(1.4)}else u.length()<.8&&f.length()>.15&&u.copy(f).multiplyScalar(4);g>.05&&(u.z-=g*2.2),(u.length()>.5||g>.05)&&(u.z=Se.clamp(u.z,-2.6,2),P0(u.clampLength(0,7.5),1.2+g*9))}catch(n){console.error("flick",n)}return}wn.down=!1,Be.dragging=!1;let e=Ee.tap&&performance.now()-Ee.tap<700;Ee.tap=0,i.type==="pointerup"&&(de.mode||e)&&Be.moved<10&&i.target===cn&&eS(i.clientX,i.clientY)}addEventListener("pointerup",O0);addEventListener("pointercancel",O0);addEventListener("keydown",i=>{V.on&&((i.code==="Space"||i.code==="ArrowUp")&&(i.preventDefault(),R0()),i.code==="ArrowLeft"&&(V.targetX=k.position.x-.6,Hl()),i.code==="ArrowRight"&&(V.targetX=k.position.x+.6,Hl()))});cn.addEventListener("dblclick",()=>{Be.y=0,Be.x=0,Be.vy=0,jt.target=1.3});cn.addEventListener("wheel",i=>{i.preventDefault(),jt.target=Se.clamp(jt.target*(1+Math.sign(i.deltaY)*.08),jt.min,jt.max)},{passive:!1});var Ds=new Map;cn.addEventListener("pointerdown",i=>{i.pointerType==="touch"&&!(ie.grab&&ie.grab.id===i.pointerId)&&Ds.set(i.pointerId,[i.clientX,i.clientY])});cn.addEventListener("pointermove",i=>{if(Ds.has(i.pointerId)&&(Ds.set(i.pointerId,[i.clientX,i.clientY]),Ds.size===2)){let[e,t]=[...Ds.values()],n=Math.hypot(e[0]-t[0],e[1]-t[1]);jt.pinch&&(jt.target=Se.clamp(jt.target*(jt.pinch/n),jt.min,jt.max)),jt.pinch=n,Be.dragging=!1}});addEventListener("pointerup",i=>{Ds.delete(i.pointerId),Ds.size<2&&(jt.pinch=0)});addEventListener("pointercancel",i=>{Ds.delete(i.pointerId),jt.pinch=0});addEventListener("pointerleave",()=>{wn.x=-1,Be.dragging=!1});cn.style.touchAction="none";cn.addEventListener("touchmove",i=>i.preventDefault(),{passive:!1});cn.addEventListener("touchstart",i=>{i.touches.length===1&&i.preventDefault()},{passive:!1});var Xt=i=>new Promise(e=>setTimeout(e,i)),hS=Ta?22e5:32e5,os=1;function rh(){let i=cn.clientWidth||innerWidth,e=cn.clientHeight||innerHeight,t=Math.min(devicePixelRatio||1,Ta?1.5:2,Math.sqrt(hS/(i*e)))*os;Fn.setPixelRatio(Math.max(.75,t)),Fn.setSize(i,e,!1),Ot.aspect=i/e,Ot.updateProjectionMatrix()}addEventListener("resize",rh);rh();window.ResizeObserver&&new ResizeObserver(rh).observe(cn);var as={acc:0,n:0,t:0};function uS(i){if(as.acc+=i,as.n++,as.t+=i,as.t<2)return;let e=as.acc/as.n;as.acc=as.n=as.t=0;let t=os;e>1/45&&os>.55?os=Math.max(.55,os-.15):e<1/58&&os<1&&(os=Math.min(1,os+.1)),os!==t&&rh()}function kl(i,e){let t=e!==void 0?e:Math.min(Sm.getDelta(),.05);e===void 0&&document.visibilityState==="visible"&&uS(t);let n=Sm.elapsedTime;_r.material.uniforms.uTime.value=n,Uo.material.uniforms.uTime.value=n,_r.rotation.z=n*.004,Uo.rotation.z=-n*.006;let s=th[mn];mi.tPos.fromArray(s.pos),mi.tLook.fromArray(s.look);let r=innerWidth/innerHeight<.62?1:.85;if(jt.v+=(jt.target-jt.v)*ga(.12,t),mi.tPos.sub(mi.tLook).multiplyScalar(jt.v*r).add(mi.tLook),mi.pos.lerp(mi.tPos,ga(.06,t)),mi.look.lerp(mi.tLook,ga(.06,t)),Ot.position.copy(mi.pos),Ot.lookAt(mi.look),ei){if(V.on)u0(t);else{if(de.pos){let g=de.pos.clone().sub(k.position);g.y=0;let y=g.length(),m=Math.min(y,Pf*t);y>1e-4&&k.position.addScaledVector(g.normalize(),m)}else k.position.lerp(_a.fromArray(s.model),ga(.06,t));if(fs.position.set(k.position.x,k.position.y+.005,k.position.z),!Be.dragging){let p=t*60;Be.y+=Be.vy*p,Be.vy*=Math.pow(.92,p),Be.x*=Math.pow(.95,p)}if(de.yaw!==null){let p=1-Math.pow(.02,t);Be.y-=Be.y*p,Be.x-=Be.x*p,Be.vy=0}let h=mn==="s1"?-.35:mn==="s3"?-.5:-.2,f=(de.yaw!==null?h+de.yaw:Math.sin(n*.35)*.06+h+Be.y)-k.rotation.y;f=Math.atan2(Math.sin(f),Math.cos(f)),k.rotation.y+=f*(de.yaw!==null?ga(.18,t):1),k.rotation.x=Be.x}if(Gv(),zi.update(t),xf.length){let h=ln.belly,u=h&&h.isRunning()?h.getEffectiveWeight():0,f=u>0?u*Pv(_i.belly.a+h.time*us):0;for(let p of xf)p.morphTargetInfluences[p.morphTargetDictionary.Flat]=f}if(V.on?JM(t):lS(t),yi&&Dn){let h=new Rn().setFromQuaternion(Dn.quaternion,"XYZ");h.x<bm&&(h.x=bm,Dn.quaternion.setFromEuler(h))}let a=ln.belly,c=(a&&a.isRunning()?Iv(_i.belly.a+a.time*us):1)*Se.degToRad(Un||Ee.on||V.on&&V.wag>0?gi.amp*2.2:Tt.state==="sitting"?gi.amp*.3:gi.amp),l=n*(Un||Ee.stage>=2?gi.speed*1.8:gi.speed)*Math.PI*2;for(let h=0;h<5;h++){let u=gi.bones[h];if(!u)continue;let f=c*gi.gains[h]*Math.sin(l-gi.lags[h]),p=c*.25*gi.gains[h]*Math.sin(l-gi.lags[h]+Math.PI/2);vm.setFromAxisAngle(zv,f),Mm.setFromAxisAngle(Hv,p),Us(u,vm),Us(u,Mm)}if(!At&&!de.mode){let h=Math.sin(n*2*Math.PI*.32);et("chest",.018*h,0,0),et("spine",-.012*h,0,0),et("neck",.02*Math.sin(n*1.1),.03*Math.sin(n*.7+1),.02*Math.sin(n*.9+2)),et("head",.025*Math.sin(n*.8+.5),.04*Math.sin(n*.55+2.3),.03*Math.sin(n*.65+4));let u=.04*Math.sin(n*1.6)+.02*h;et("ear1L",u,0,0),et("ear1R",u,0,0),et("ear2L",u*1.4,0,0),et("ear2R",u*1.4,0,0)}Dl||(Dl=[],ei.traverse(h=>{h.isMesh&&h.material.userData.uni&&Dl.push(h.material.userData.uni)}));for(let h of Dl)h.uTime.value=n;$M(t),Zv(t),rS(t),iS(t),cS(t),Un&&D0()}nS(t),de.ball&&de.ball.visible&&!ie.on&&de.ball.parent===pe&&!At&&(de.ball.position.y=bi()),kv(t),If.uniforms.pxPerUnit.value=Fn.domElement.height*.5*Ot.projectionMatrix.elements[5],e===void 0&&(Fn.render(pe,Ot),requestAnimationFrame(kl))}(async()=>{try{await jv()}catch(e){console.error(e),$e("#loading").textContent="\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u041E\u0440\u0438";return}try{await Fn.compileAsync(pe,Ot)}catch(e){console.error(e)}$e("#loading").style.opacity=0,setTimeout(()=>$e("#loading").remove(),500);let i=Ea.get();i&&i.date===Vl&&i.phrase&&(Po=i.phrase,$e("#phrase").textContent=i.phrase,l0(i.shine,i.nova),eh("s3"),Aa("s3")),at("idle"),window.__ori={beg:Ee,get actions(){return ln},get mixer(){return zi},play:at,game:V,tick:kl,sim:e=>kl(0,e),toScreen:on,startGame:ih,camera:Ot,renderer:Fn,eyes:rt,blink:Nt,spin:Be,pointer:wn,flick:(e,t)=>P0(new R(e,0,t)),get pivot(){return k},get ball(){return de.ball},scene:pe,phys:ie,sit:Tt,pant:Vt,get busy(){return At},get cur(){return pn&&pn.getClip().name},get pupil(){let e=rt.pupils[0];return e?[e.node.position.x-e.base.x,e.node.position.y-e.base.y,e.node.position.z-e.base.z]:null}},kl(),setTimeout(fS,800)})();function fS(){let i=new Gt,e=Ln.ice.clone();e.emissiveMap=y0[1],e.emissive.set(16777215);for(let t of[...Ln.planet,Ln.ice,e,Ln.hot,Ln.lime,Ln.belt])i.add(new ke(ni.planet,t));i.add(new ke(ni.rock,Ln.rock));for(let t of[Sa,x0,Bf,_0,v0,s0,M0.rocket])i.add(new Ut(new Ct({map:t,transparent:!0,depthWrite:!1})));i.add(new Ut(new Ct({map:Sa,transparent:!0,depthWrite:!1,blending:tn}))),i.add(new Ai(new Dt,new Qr({color:16448252,transparent:!0,opacity:.28}))),i.add(Gf()),Fn.compileAsync(i,Ot,pe).catch(t=>console.error(t))}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
