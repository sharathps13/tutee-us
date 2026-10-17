var Oh=0,kc=1,zh=2;var Jl=1,hc=2,mn=3,Fn=0,ge=1,An=2,Ln=0,Bi=1,ke=2,Gc=3,Vc=4,Hh=5,Jn=100,kh=101,Gh=102,Vh=103,Qh=104,Wh=200,Xh=201,Yh=202,qh=203,Ho=204,ko=205,Jh=206,Kh=207,Zh=208,jh=209,$h=210,tu=211,eu=212,nu=213,iu=214,Go=0,Vo=1,Qo=2,Li=3,Wo=4,Xo=5,Yo=6,qo=7,Kl=0,su=1,ru=2,Un=0,ou=1,au=2,cu=3,uc=4,lu=5,hu=6,uu=7;var Zl=300,Ui=301,Fi=302,Jo=303,Ko=304,Yr=306,Zo=1e3,Zn=1001,jo=1002,Ue=1003,fu=1004;var Ps=1005;var Ze=1006,ro=1007;var jn=1008;var _n=1009,jl=1010,$l=1011,ps=1012,fc=1013,$n=1014,nn=1015,Ts=1016,dc=1017,pc=1018,Ni=1020,th=35902,eh=1021,nh=1022,$e=1023,ih=1024,sh=1025,Pi=1026,Oi=1027,mc=1028,gc=1029,rh=1030,Ac=1031;var vc=1033,cr=33776,lr=33777,hr=33778,ur=33779,$o=35840,ta=35841,ea=35842,na=35843,ia=36196,sa=37492,ra=37496,oa=37808,aa=37809,ca=37810,la=37811,ha=37812,ua=37813,fa=37814,da=37815,pa=37816,ma=37817,ga=37818,Aa=37819,va=37820,_a=37821,fr=36492,xa=36494,ya=36495,oh=36283,Ma=36284,wa=36285,Ea=36286;var pr=2300,Sa=2301,oo=2302,Qc=2400,Wc=2401,Xc=2402;var du=3200,pu=3201;var ah=0,mu=1,In="",Le="srgb",zn="srgb-linear",_c="display-p3",qr="display-p3-linear",mr="linear",ie="srgb",gr="rec709",Ar="p3";var li=7680;var Yc=519,gu=512,Au=513,vu=514,ch=515,_u=516,xu=517,yu=518,Mu=519,ba=35044;var qc="300 es",vn=2e3,vr=2001,Nn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=1234567,cs=Math.PI/180,ms=180/Math.PI;function sn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function xc(i,t){return(i%t+t)%t}function wu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Eu(i,t,e){return i!==t?(e-i)/(t-i):0}function ls(i,t,e){return(1-e)*i+e*t}function Su(i,t,e,n){return ls(i,t,1-Math.exp(-e*n))}function bu(i,t=1){return t-Math.abs(xc(i,t*2)-t)}function Tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Cu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ru(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Bu(i,t){return i+Math.random()*(t-i)}function Pu(i){return i*(.5-Math.random())}function Iu(i){i!==void 0&&(Jc=i);let t=Jc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Du(i){return i*cs}function Lu(i){return i*ms}function Uu(i){return(i&i-1)===0&&i!==0}function Fu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ou(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),u=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*f,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Xe={DEG2RAD:cs,RAD2DEG:ms,generateUUID:sn,clamp:xe,euclideanModulo:xc,mapLinear:wu,inverseLerp:Eu,lerp:ls,damp:Su,pingpong:bu,smoothstep:Tu,smootherstep:Cu,randInt:Ru,randFloat:Bu,randFloatSpread:Pu,seededRandom:Iu,degToRad:Du,radToDeg:Lu,isPowerOfTwo:Uu,ceilPowerOfTwo:Fu,floorPowerOfTwo:Nu,setQuaternionFromProperEuler:Ou,normalize:jt,denormalize:je},at=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],_=s[4],y=s[7],B=s[2],C=s[5],S=s[8];return r[0]=o*x+a*M+c*B,r[3]=o*m+a*_+c*C,r[6]=o*p+a*y+c*S,r[1]=l*x+h*M+f*B,r[4]=l*m+h*_+f*C,r[7]=l*p+h*y+f*S,r[2]=u*x+d*M+g*B,r[5]=u*m+d*_+g*C,r[8]=u*p+d*y+g*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,u=a*c-h*r,d=l*r-o*c,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ao.makeScale(t,e)),this}rotate(t){return this.premultiply(ao.makeRotation(-t)),this}translate(t,e){return this.premultiply(ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ao=new kt;function lh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zu(){let i=_r("canvas");return i.style.display="block",i}var Kc={};function dr(i){i in Kc||(Kc[i]=!0,console.warn(i))}function Hu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ku(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zc=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jc=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zi={[zn]:{transfer:mr,primaries:gr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Le]:{transfer:ie,primaries:gr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[qr]:{transfer:mr,primaries:Ar,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(jc),fromReference:i=>i.applyMatrix3(Zc)},[_c]:{transfer:ie,primaries:Ar,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(jc),fromReference:i=>i.applyMatrix3(Zc).convertLinearToSRGB()}},Vu=new Set([zn,qr]),Kt={enabled:!0,_workingColorSpace:zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Vu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Zi[t].toReference,s=Zi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Zi[i].primaries},getTransfer:function(i){return i===In?mr:Zi[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Zi[t].luminanceCoefficients)}};function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function co(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hi,Ta=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hi===void 0&&(hi=_r("canvas")),hi.width=t.width,hi.height=t.height;let n=hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=_r("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ii(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ii(e[n]/255)*255):e[n]=Ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qu=0,xr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=sn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(lo(s[o].image)):r.push(lo(s[o]))}else r=lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function lo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ta.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wu=0,Fe=class i extends Nn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Zn,s=Zn,r=Ze,o=jn,a=$e,c=_n,l=i.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=sn(),this.name="",this.source=new xr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zo:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zo:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Zl;Fe.DEFAULT_ANISOTROPY=1;var ae=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,y=(d+1)/2,B=(p+1)/2,C=(h+u)/4,S=(f+x)/4,P=(g+m)/4;return _>y&&_>B?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=C/n,r=S/n):y>B?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=C/s,r=P/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=S/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-x)/M,this.z=(u-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ca=class extends Nn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Fe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new xr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends Ca{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},yr=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ra=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==u||l!==d||h!==g){let m=1-a,p=c*u+l*d+h*g+f*x,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let B=Math.sqrt(_),C=Math.atan2(B,p*M);m=Math.sin(m*C)/B,a=Math.sin(a*C)/B}let y=a*M;if(c=c*m+u*y,l=l*m+d*y,h=h*m+g*y,f=f*m+x*y,m===1-a){let B=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=B,l*=B,h*=B,f*=B}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-a*d,t[e+2]=l*g+h*d+a*u-c*f,t[e+3]=h*g-a*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),u=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($c.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($c.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ho.copy(this).projectOnVector(t),this.sub(ho)}reflect(t){return this.sub(ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ho=new R,$c=new rn,yn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qe):qe.fromBufferAttribute(r,o),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),Ds.subVectors(this.max,ji),ui.subVectors(t.a,ji),fi.subVectors(t.b,ji),di.subVectors(t.c,ji),bn.subVectors(fi,ui),Tn.subVectors(di,fi),Gn.subVectors(ui,di);let e=[0,-bn.z,bn.y,0,-Tn.z,Tn.y,0,-Gn.z,Gn.y,bn.z,0,-bn.x,Tn.z,0,-Tn.x,Gn.z,0,-Gn.x,-bn.y,bn.x,0,-Tn.y,Tn.x,0,-Gn.y,Gn.x,0];return!uo(e,ui,fi,di,Ds)||(e=[1,0,0,0,1,0,0,0,1],!uo(e,ui,fi,di,Ds))?!1:(Ls.crossVectors(bn,Tn),e=[Ls.x,Ls.y,Ls.z],uo(e,ui,fi,di,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},hn=[new R,new R,new R,new R,new R,new R,new R,new R],qe=new R,Is=new yn,ui=new R,fi=new R,di=new R,bn=new R,Tn=new R,Gn=new R,ji=new R,Ds=new R,Ls=new R,Vn=new R;function uo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Vn.fromArray(i,r);let a=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),c=t.dot(Vn),l=e.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Xu=new yn,$i=new R,fo=new R,On=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Xu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$i.subVectors(t,this.center);let e=$i.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($i.copy(t.center).add(fo)),this.expandByPoint($i.copy(t.center).sub(fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},un=new R,po=new R,Us=new R,Cn=new R,mo=new R,Fs=new R,go=new R,Mr=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){po.copy(t).add(e).multiplyScalar(.5),Us.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(po);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Us),a=Cn.dot(this.direction),c=-Cn.dot(Us),l=Cn.lengthSq(),h=Math.abs(1-o*o),f,u,d,g;if(h>0)if(f=o*c-a,u=o*a-c,g=r*h,f>=0)if(u>=-g)if(u<=g){let x=1/h;f*=x,u*=x,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(po).addScaledVector(Us,u),d}intersectSphere(t,e){un.subVectors(t.center,this.origin);let n=un.dot(this.direction),s=un.dot(un)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,n,s,r){mo.subVectors(e,t),Fs.subVectors(n,t),go.crossVectors(mo,Fs);let o=this.direction.dot(go),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,t);let c=a*this.direction.dot(Fs.crossVectors(Cn,Fs));if(c<0)return null;let l=a*this.direction.dot(mo.cross(Cn));if(l<0||c+l>o)return null;let h=-a*Cn.dot(go);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class i{constructor(t,e,n,s,r,o,a,c,l,h,f,u,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,f,u,d,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,f,u,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/pi.setFromMatrixColumn(t,0).length(),r=1/pi.setFromMatrixColumn(t,1).length(),o=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,g=a*h,x=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,g=l*h,x=l*f;e[0]=u+x*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,g=l*h,x=l*f;e[0]=u-x*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,d=o*f,g=a*h,x=a*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+x,e[1]=c*f,e[5]=x*l+u,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-x*f}else if(t.order==="XZY"){let u=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+x,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yu,t,qu)}lookAt(t,e,n){let s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Rn.crossVectors(n,ze),Rn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Rn.crossVectors(n,ze)),Rn.normalize(),Ns.crossVectors(ze,Rn),s[0]=Rn.x,s[4]=Ns.x,s[8]=ze.x,s[1]=Rn.y,s[5]=Ns.y,s[9]=ze.y,s[2]=Rn.z,s[6]=Ns.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],_=n[7],y=n[11],B=n[15],C=s[0],S=s[4],P=s[8],G=s[12],A=s[1],w=s[5],z=s[9],F=s[13],H=s[2],J=s[6],O=s[10],Z=s[14],L=s[3],nt=s[7],et=s[11],lt=s[15];return r[0]=o*C+a*A+c*H+l*L,r[4]=o*S+a*w+c*J+l*nt,r[8]=o*P+a*z+c*O+l*et,r[12]=o*G+a*F+c*Z+l*lt,r[1]=h*C+f*A+u*H+d*L,r[5]=h*S+f*w+u*J+d*nt,r[9]=h*P+f*z+u*O+d*et,r[13]=h*G+f*F+u*Z+d*lt,r[2]=g*C+x*A+m*H+p*L,r[6]=g*S+x*w+m*J+p*nt,r[10]=g*P+x*z+m*O+p*et,r[14]=g*G+x*F+m*Z+p*lt,r[3]=M*C+_*A+y*H+B*L,r[7]=M*S+_*w+y*J+B*nt,r[11]=M*P+_*z+y*O+B*et,r[15]=M*G+_*F+y*Z+B*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*f-s*l*f-r*a*u+n*l*u+s*a*d-n*c*d)+x*(+e*c*d-e*l*u+r*o*u-s*o*d+s*l*h-r*c*h)+m*(+e*l*f-e*a*d-r*o*f+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*f+e*a*u+s*o*f-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=f*m*l-x*u*l+x*c*d-a*m*d-f*c*p+a*u*p,_=g*u*l-h*m*l-g*c*d+o*m*d+h*c*p-o*u*p,y=h*x*l-g*f*l+g*a*d-o*x*d-h*a*p+o*f*p,B=g*f*c-h*x*c-g*a*u+o*x*u+h*a*m-o*f*m,C=e*M+n*_+s*y+r*B;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/C;return t[0]=M*S,t[1]=(x*u*r-f*m*r-x*s*d+n*m*d+f*s*p-n*u*p)*S,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*S,t[3]=(f*c*r-a*u*r-f*s*l+n*u*l+a*s*d-n*c*d)*S,t[4]=_*S,t[5]=(h*m*r-g*u*r+g*s*d-e*m*d-h*s*p+e*u*p)*S,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*S,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*d+e*c*d)*S,t[8]=y*S,t[9]=(g*f*r-h*x*r-g*n*d+e*x*d+h*n*p-e*f*p)*S,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*S,t[11]=(h*a*r-o*f*r-h*n*l+e*f*l+o*n*d-e*a*d)*S,t[12]=B*S,t[13]=(h*x*s-g*f*s+g*n*u-e*x*u-h*n*m+e*f*m)*S,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*S,t[15]=(o*f*s-h*a*s+h*n*c-e*f*c-o*n*u+e*a*u)*S,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,f=a+a,u=r*l,d=r*h,g=r*f,x=o*h,m=o*f,p=a*f,M=c*l,_=c*h,y=c*f,B=n.x,C=n.y,S=n.z;return s[0]=(1-(x+p))*B,s[1]=(d+y)*B,s[2]=(g-_)*B,s[3]=0,s[4]=(d-y)*C,s[5]=(1-(u+p))*C,s[6]=(m+M)*C,s[7]=0,s[8]=(g+_)*S,s[9]=(m-M)*S,s[10]=(1-(u+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=pi.set(s[0],s[1],s[2]).length(),o=pi.set(s[4],s[5],s[6]).length(),a=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Je.copy(this);let l=1/r,h=1/o,f=1/a;return Je.elements[0]*=l,Je.elements[1]*=l,Je.elements[2]*=l,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=f,Je.elements[9]*=f,Je.elements[10]*=f,e.setFromRotationMatrix(Je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=vn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),d,g;if(a===vn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===vr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=vn){let c=this.elements,l=1/(e-t),h=1/(n-s),f=1/(o-r),u=(e+t)*l,d=(n+s)*h,g,x;if(a===vn)g=(o+r)*f,x=-2*f;else if(a===vr)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},pi=new R,Je=new Xt,Yu=new R(0,0,0),qu=new R(1,1,1),Rn=new R,Ns=new R,ze=new R,tl=new Xt,el=new rn,Qe=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return el.setFromEuler(this),this.setFromQuaternion(el,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qe.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ju=0,nl=new R,mi=new rn,fn=new Xt,Os=new R,ts=new R,Ku=new R,Zu=new rn,il=new R(1,0,0),sl=new R(0,1,0),rl=new R(0,0,1),ol={type:"added"},ju={type:"removed"},gi={type:"childadded",child:null},Ao={type:"childremoved",child:null},Me=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new Qe,n=new rn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xt},normalMatrix:{value:new kt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(il,t)}rotateY(t){return this.rotateOnAxis(sl,t)}rotateZ(t){return this.rotateOnAxis(rl,t)}translateOnAxis(t,e){return nl.copy(t).applyQuaternion(this.quaternion),this.position.add(nl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(il,t)}translateY(t){return this.translateOnAxis(sl,t)}translateZ(t){return this.translateOnAxis(rl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Os.copy(t):Os.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(ts,Os,this.up):fn.lookAt(Os,ts,this.up),this.quaternion.setFromRotationMatrix(fn),s&&(fn.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(fn),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ol),gi.child=t,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ju),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ol),gi.child=t,this.dispatchEvent(gi),gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,Ku),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Zu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Me.DEFAULT_UP=new R(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=new R,dn=new R,vo=new R,pn=new R,Ai=new R,vi=new R,al=new R,_o=new R,xo=new R,yo=new R,Mo=new ae,wo=new ae,Eo=new ae,Dn=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),dn.subVectors(n,e),vo.subVectors(t,e);let o=Ke.dot(Ke),a=Ke.dot(dn),c=Ke.dot(vo),l=dn.dot(dn),h=dn.dot(vo),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pn.x),c.addScaledVector(o,pn.y),c.addScaledVector(a,pn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Mo.setScalar(0),wo.setScalar(0),Eo.setScalar(0),Mo.fromBufferAttribute(t,e),wo.fromBufferAttribute(t,n),Eo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Mo,r.x),o.addScaledVector(wo,r.y),o.addScaledVector(Eo,r.z),o}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),dn.subVectors(t,e),Ke.cross(dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Ke.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ai.subVectors(s,n),vi.subVectors(r,n),_o.subVectors(t,n);let c=Ai.dot(_o),l=vi.dot(_o);if(c<=0&&l<=0)return e.copy(n);xo.subVectors(t,s);let h=Ai.dot(xo),f=vi.dot(xo);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ai,o);yo.subVectors(t,r);let d=Ai.dot(yo),g=vi.dot(yo);if(g>=0&&d<=g)return e.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(vi,a);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return al.subVectors(r,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(al,a);let p=1/(m+x+u);return o=x*p,a=u*p,e.copy(n).addScaledVector(Ai,o).addScaledVector(vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function So(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=xc(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=So(o,r,t+1/3),this.g=So(o,r,t),this.b=So(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){let n=hh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=co(t.r),this.g=co(t.g),this.b=co(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return Kt.fromWorkingColorSpace(Se.copy(this),t),Math.round(xe(Se.r*255,0,255))*65536+Math.round(xe(Se.g*255,0,255))*256+Math.round(xe(Se.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Se.copy(this),e);let n=Se.r,s=Se.g,r=Se.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Le){Kt.fromWorkingColorSpace(Se.copy(this),t);let e=Se.r,n=Se.g,s=Se.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(zs);let n=ls(Bn.h,zs.h,e),s=ls(Bn.s,zs.s,e),r=ls(Bn.l,zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Se=new Et;Et.NAMES=hh;var $u=0,Mn=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=sn(),this.name="",this.type="Material",this.blending=Bi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=ko,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ho&&(n.blendSrc=this.blendSrc),this.blendDst!==ko&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},zi=class extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ue=new R,Hs=new at,le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ba,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hs.fromBufferAttribute(this,e),Hs.applyMatrix3(t),this.setXY(e,Hs.x,Hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=je(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=je(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=je(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=je(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ba&&(t.usage=this.usage),t}};var Er=class extends le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Sr=class extends le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends le{constructor(t,e,n){super(new Float32Array(t),e,n)}},tf=0,Ve=new Xt,bo=new Me,_i=new R,He=new yn,es=new yn,me=new R,$t=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lh(t)?Sr:Er)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return bo.lookAt(t),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];es.setFromBufferAttribute(a),this.morphTargetsRelative?(me.addVectors(He.min,es.min),He.expandByPoint(me),me.addVectors(He.max,es.max),He.expandByPoint(me)):(He.expandByPoint(es.min),He.expandByPoint(es.max))}He.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(me));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)me.fromBufferAttribute(a,l),c&&(_i.fromBufferAttribute(t,l),me.add(_i)),s=Math.max(s,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new le(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new R,c[P]=new R;let l=new R,h=new R,f=new R,u=new at,d=new at,g=new at,x=new R,m=new R;function p(P,G,A){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,G),f.fromBufferAttribute(n,A),u.fromBufferAttribute(r,P),d.fromBufferAttribute(r,G),g.fromBufferAttribute(r,A),h.sub(l),f.sub(l),d.sub(u),g.sub(u);let w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(w),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(w),a[P].add(x),a[G].add(x),a[A].add(x),c[P].add(m),c[G].add(m),c[A].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,G=M.length;P<G;++P){let A=M[P],w=A.start,z=A.count;for(let F=w,H=w+z;F<H;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let _=new R,y=new R,B=new R,C=new R;function S(P){B.fromBufferAttribute(s,P),C.copy(B);let G=a[P];_.copy(G),_.sub(B.multiplyScalar(B.dot(G))).normalize(),y.crossVectors(C,G);let w=y.dot(c[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,w)}for(let P=0,G=M.length;P<G;++P){let A=M[P],w=A.start,z=A.count;for(let F=w,H=w+z;F<H;F+=3)S(t.getX(F+0)),S(t.getX(F+1)),S(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,f=new R;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)u[g++]=l[d++]}return new le(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cl=new Xt,Qn=new Mr,ks=new On,ll=new R,Gs=new R,Vs=new R,Qs=new R,To=new R,Ws=new R,hl=new R,Xs=new R,te=class extends Me{constructor(t=new $t,e=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ws.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(To.fromBufferAttribute(f,t),o?Ws.addScaledVector(To,h):Ws.addScaledVector(To.sub(e),h))}e.add(Ws)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(ks.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(ks,ll)===null||Qn.origin.distanceToSquared(ll)>(t.far-t.near)**2))&&(cl.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(cl),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,B=_;y<B;y+=3){let C=a.getX(y),S=a.getX(y+1),P=a.getX(y+2);s=Ys(this,p,t,n,l,h,f,C,S,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let M=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=Ys(this,o,t,n,l,h,f,M,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,B=_;y<B;y+=3){let C=y,S=y+1,P=y+2;s=Ys(this,p,t,n,l,h,f,C,S,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let M=m,_=m+1,y=m+2;s=Ys(this,o,t,n,l,h,f,M,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function ef(i,t,e,n,s,r,o,a){let c;if(t.side===ge?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Fn,a),c===null)return null;Xs.copy(a),Xs.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Xs);return l<e.near||l>e.far?null:{distance:l,point:Xs.clone(),object:i}}function Ys(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Gs),i.getVertexPosition(c,Vs),i.getVertexPosition(l,Qs);let h=ef(i,t,e,n,Gs,Vs,Qs,hl);if(h){let f=new R;Dn.getBarycoord(hl,Gs,Vs,Qs,f),s&&(h.uv=Dn.getInterpolatedAttribute(s,a,c,l,f,new at)),r&&(h.uv1=Dn.getInterpolatedAttribute(r,a,c,l,f,new at)),o&&(h.normal=Dn.getInterpolatedAttribute(o,a,c,l,f,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new R,materialIndex:0};Dn.getNormal(Gs,Vs,Qs,u.normal),h.face=u,h.barycoord=f}return h}var we=class i extends $t{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2));function g(x,m,p,M,_,y,B,C,S,P,G){let A=y/S,w=B/P,z=y/2,F=B/2,H=C/2,J=S+1,O=P+1,Z=0,L=0,nt=new R;for(let et=0;et<O;et++){let lt=et*w-F;for(let It=0;It<J;It++){let Gt=It*A-z;nt[x]=Gt*M,nt[m]=lt*_,nt[p]=H,l.push(nt.x,nt.y,nt.z),nt[x]=0,nt[m]=0,nt[p]=C>0?1:-1,h.push(nt.x,nt.y,nt.z),f.push(It/S),f.push(1-et/P),Z+=1}}for(let et=0;et<P;et++)for(let lt=0;lt<S;lt++){let It=u+lt+J*et,Gt=u+lt+J*(et+1),Y=u+(lt+1)+J*(et+1),$=u+(lt+1)+J*et;c.push(It,Gt,$),c.push(Gt,Y,$),L+=6}a.addGroup(d,L,G),d+=L,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Hi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){let t={};for(let e=0;e<i.length;e++){let n=Hi(i[e]);for(let s in n)t[s]=n[s]}return t}function nf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var sf={clone:Hi,merge:Re},rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ae=class extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rf,this.fragmentShader=of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=nf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},br=class extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pn=new R,ul=new at,fl=new at,Be=class extends br{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,ul,fl),e.subVectors(fl,ul)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xi=-90,yi=1,Ba=class extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(xi,yi,t,e);s.layers=this.layers,this.add(s);let r=new Be(xi,yi,t,e);r.layers=this.layers,this.add(r);let o=new Be(xi,yi,t,e);o.layers=this.layers,this.add(o);let a=new Be(xi,yi,t,e);a.layers=this.layers,this.add(a);let c=new Be(xi,yi,t,e);c.layers=this.layers,this.add(c);let l=new Be(xi,yi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Tr=class extends Fe{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ui,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Pa=class extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Tr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ge,blending:Ln});r.uniforms.tEquirect.value=e;let o=new te(s,r),a=e.minFilter;return e.minFilter===jn&&(e.minFilter=Ze),new Ba(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Co=new R,af=new R,cf=new kt,gn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Co.subVectors(n,e).cross(af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Co),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cf.getNormalMatrix(t),s=this.coplanarPoint(Co).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wn=new On,qs=new R,gs=class{constructor(t=new gn,e=new gn,n=new gn,s=new gn,r=new gn,o=new gn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],u=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],M=s[13],_=s[14],y=s[15];if(n[0].setComponents(c-r,u-l,m-d,y-p).normalize(),n[1].setComponents(c+r,u+l,m+d,y+p).normalize(),n[2].setComponents(c+o,u+h,m+g,y+M).normalize(),n[3].setComponents(c-o,u-h,m-g,y-M).normalize(),n[4].setComponents(c-a,u-f,m-x,y-_).normalize(),e===vn)n[5].setComponents(c+a,u+f,m+x,y+_).normalize();else if(e===vr)n[5].setComponents(a,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(qs.x=s.normal.x>0?t.max.x:t.min.x,qs.y=s.normal.y>0?t.max.y:t.min.y,qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lf(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var wn=class i extends $t{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=t/a,u=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let M=p*u-o;for(let _=0;_<l;_++){let y=_*f-r;g.push(y,-M,0),x.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let _=M+l*p,y=M+l*(p+1),B=M+1+l*(p+1),C=M+1+l*p;d.push(_,y,C),d.push(y,B,C)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
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
#endif`,ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
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
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
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
#endif`,_f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ef=`#ifdef USE_BUMPMAP
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
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Df=`#define PI 3.141592653589793
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
} // validated`,Lf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uf=`vec3 transformedNormal = objectNormal;
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
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zf=`#ifdef USE_GRADIENTMAP
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
}`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ed=`uniform bool receiveShadow;
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
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ad=`PhysicalMaterial material;
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
#endif`,cd=`struct PhysicalMaterial {
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
}`,ld=`
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
#endif`,hd=`#if defined( RE_IndirectDiffuse )
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
#endif`,ud=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_d=`#if defined( USE_POINTS_UV )
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
#endif`,xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ed=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sd=`#ifdef USE_MORPHTARGETS
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
#endif`,bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Id=`#ifdef USE_NORMALMAP
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
#endif`,Dd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Od=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qd=`float getShadowMask() {
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
}`,Jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kd=`#ifdef USE_SKINNING
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
#endif`,Zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jd=`#ifdef USE_SKINNING
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
#endif`,$d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,np=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ip=`#ifdef USE_TRANSMISSION
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
#endif`,sp=`#ifdef USE_TRANSMISSION
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
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hp=`uniform sampler2D t2D;
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
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`#include <common>
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
}`,gp=`#if DEPTH_PACKING == 3200
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
}`,Ap=`#define DISTANCE
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
}`,vp=`#define DISTANCE
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`uniform float scale;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Sp=`#define LAMBERT
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
}`,bp=`#define LAMBERT
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
}`,Tp=`#define MATCAP
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
}`,Cp=`#define MATCAP
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
}`,Rp=`#define NORMAL
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
}`,Bp=`#define NORMAL
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
}`,Pp=`#define PHONG
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
}`,Ip=`#define PHONG
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
}`,Dp=`#define STANDARD
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
}`,Lp=`#define STANDARD
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
}`,Up=`#define TOON
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
}`,Fp=`#define TOON
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
}`,Np=`uniform float size;
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
}`,Op=`uniform vec3 diffuse;
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
}`,zp=`#include <common>
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
}`,Hp=`uniform vec3 color;
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
}`,kp=`uniform float rotation;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:hf,alphahash_pars_fragment:uf,alphamap_fragment:ff,alphamap_pars_fragment:df,alphatest_fragment:pf,alphatest_pars_fragment:mf,aomap_fragment:gf,aomap_pars_fragment:Af,batching_pars_vertex:vf,batching_vertex:_f,begin_vertex:xf,beginnormal_vertex:yf,bsdfs:Mf,iridescence_fragment:wf,bumpmap_pars_fragment:Ef,clipping_planes_fragment:Sf,clipping_planes_pars_fragment:bf,clipping_planes_pars_vertex:Tf,clipping_planes_vertex:Cf,color_fragment:Rf,color_pars_fragment:Bf,color_pars_vertex:Pf,color_vertex:If,common:Df,cube_uv_reflection_fragment:Lf,defaultnormal_vertex:Uf,displacementmap_pars_vertex:Ff,displacementmap_vertex:Nf,emissivemap_fragment:Of,emissivemap_pars_fragment:zf,colorspace_fragment:Hf,colorspace_pars_fragment:kf,envmap_fragment:Gf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:Qf,envmap_pars_vertex:Wf,envmap_physical_pars_fragment:nd,envmap_vertex:Xf,fog_vertex:Yf,fog_pars_vertex:qf,fog_fragment:Jf,fog_pars_fragment:Kf,gradientmap_pars_fragment:Zf,lightmap_pars_fragment:jf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:td,lights_pars_begin:ed,lights_toon_fragment:id,lights_toon_pars_fragment:sd,lights_phong_fragment:rd,lights_phong_pars_fragment:od,lights_physical_fragment:ad,lights_physical_pars_fragment:cd,lights_fragment_begin:ld,lights_fragment_maps:hd,lights_fragment_end:ud,logdepthbuf_fragment:fd,logdepthbuf_pars_fragment:dd,logdepthbuf_pars_vertex:pd,logdepthbuf_vertex:md,map_fragment:gd,map_pars_fragment:Ad,map_particle_fragment:vd,map_particle_pars_fragment:_d,metalnessmap_fragment:xd,metalnessmap_pars_fragment:yd,morphinstance_vertex:Md,morphcolor_vertex:wd,morphnormal_vertex:Ed,morphtarget_pars_vertex:Sd,morphtarget_vertex:bd,normal_fragment_begin:Td,normal_fragment_maps:Cd,normal_pars_fragment:Rd,normal_pars_vertex:Bd,normal_vertex:Pd,normalmap_pars_fragment:Id,clearcoat_normal_fragment_begin:Dd,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Ud,iridescence_pars_fragment:Fd,opaque_fragment:Nd,packing:Od,premultiplied_alpha_fragment:zd,project_vertex:Hd,dithering_fragment:kd,dithering_pars_fragment:Gd,roughnessmap_fragment:Vd,roughnessmap_pars_fragment:Qd,shadowmap_pars_fragment:Wd,shadowmap_pars_vertex:Xd,shadowmap_vertex:Yd,shadowmask_pars_fragment:qd,skinbase_vertex:Jd,skinning_pars_vertex:Kd,skinning_vertex:Zd,skinnormal_vertex:jd,specularmap_fragment:$d,specularmap_pars_fragment:tp,tonemapping_fragment:ep,tonemapping_pars_fragment:np,transmission_fragment:ip,transmission_pars_fragment:sp,uv_pars_fragment:rp,uv_pars_vertex:op,uv_vertex:ap,worldpos_vertex:cp,background_vert:lp,background_frag:hp,backgroundCube_vert:up,backgroundCube_frag:fp,cube_vert:dp,cube_frag:pp,depth_vert:mp,depth_frag:gp,distanceRGBA_vert:Ap,distanceRGBA_frag:vp,equirect_vert:_p,equirect_frag:xp,linedashed_vert:yp,linedashed_frag:Mp,meshbasic_vert:wp,meshbasic_frag:Ep,meshlambert_vert:Sp,meshlambert_frag:bp,meshmatcap_vert:Tp,meshmatcap_frag:Cp,meshnormal_vert:Rp,meshnormal_frag:Bp,meshphong_vert:Pp,meshphong_frag:Ip,meshphysical_vert:Dp,meshphysical_frag:Lp,meshtoon_vert:Up,meshtoon_frag:Fp,points_vert:Np,points_frag:Op,shadow_vert:zp,shadow_frag:Hp,sprite_vert:kp,sprite_frag:Gp},dt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},en={basic:{uniforms:Re([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Re([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Re([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Re([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Re([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Re([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Re([dt.points,dt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Re([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Re([dt.common,dt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Re([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Re([dt.sprite,dt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Re([dt.common,dt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Re([dt.lights,dt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};en.physical={uniforms:Re([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Js={r:0,b:0,g:0},Xn=new Qe,Vp=new Xt;function Qp(i,t,e,n,s,r,o){let a=new Et(0),c=r===!0?0:1,l,h,f=null,u=0,d=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function x(M){let _=!1,y=g(M);y===null?p(a,c):y&&y.isColor&&(p(y,1),_=!0);let B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===Yr)?(h===void 0&&(h=new te(new we(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:Hi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,C,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xn.copy(_.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vp.makeRotationFromEuler(Xn)),h.material.toneMapped=Kt.getTransfer(y.colorSpace)!==ie,(f!==y||u!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=y,u=y.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new te(new wn(2,2),new Ae({name:"BackgroundMaterial",uniforms:Hi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(y.colorSpace)!==ie,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,_){M.getRGB(Js,uh(i)),n.buffers.color.setClear(Js.r,Js.g,Js.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:x,addToRenderList:m}}function Wp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(A,w,z,F,H){let J=!1,O=f(F,z,w);r!==O&&(r=O,l(r.object)),J=d(A,F,z,H),J&&g(A,F,z,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,y(A,w,z,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function f(A,w,z){let F=z.wireframe===!0,H=n[A.id];H===void 0&&(H={},n[A.id]=H);let J=H[w.id];J===void 0&&(J={},H[w.id]=J);let O=J[F];return O===void 0&&(O=u(c()),J[F]=O),O}function u(A){let w=[],z=[],F=[];for(let H=0;H<e;H++)w[H]=0,z[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:z,attributeDivisors:F,object:A,attributes:{},index:null}}function d(A,w,z,F){let H=r.attributes,J=w.attributes,O=0,Z=z.getAttributes();for(let L in Z)if(Z[L].location>=0){let et=H[L],lt=J[L];if(lt===void 0&&(L==="instanceMatrix"&&A.instanceMatrix&&(lt=A.instanceMatrix),L==="instanceColor"&&A.instanceColor&&(lt=A.instanceColor)),et===void 0||et.attribute!==lt||lt&&et.data!==lt.data)return!0;O++}return r.attributesNum!==O||r.index!==F}function g(A,w,z,F){let H={},J=w.attributes,O=0,Z=z.getAttributes();for(let L in Z)if(Z[L].location>=0){let et=J[L];et===void 0&&(L==="instanceMatrix"&&A.instanceMatrix&&(et=A.instanceMatrix),L==="instanceColor"&&A.instanceColor&&(et=A.instanceColor));let lt={};lt.attribute=et,et&&et.data&&(lt.data=et.data),H[L]=lt,O++}r.attributes=H,r.attributesNum=O,r.index=F}function x(){let A=r.newAttributes;for(let w=0,z=A.length;w<z;w++)A[w]=0}function m(A){p(A,0)}function p(A,w){let z=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;z[A]=1,F[A]===0&&(i.enableVertexAttribArray(A),F[A]=1),H[A]!==w&&(i.vertexAttribDivisor(A,w),H[A]=w)}function M(){let A=r.newAttributes,w=r.enabledAttributes;for(let z=0,F=w.length;z<F;z++)w[z]!==A[z]&&(i.disableVertexAttribArray(z),w[z]=0)}function _(A,w,z,F,H,J,O){O===!0?i.vertexAttribIPointer(A,w,z,H,J):i.vertexAttribPointer(A,w,z,F,H,J)}function y(A,w,z,F){x();let H=F.attributes,J=z.getAttributes(),O=w.defaultAttributeValues;for(let Z in J){let L=J[Z];if(L.location>=0){let nt=H[Z];if(nt===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(nt=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(nt=A.instanceColor)),nt!==void 0){let et=nt.normalized,lt=nt.itemSize,It=t.get(nt);if(It===void 0)continue;let Gt=It.buffer,Y=It.type,$=It.bytesPerElement,pt=Y===i.INT||Y===i.UNSIGNED_INT||nt.gpuType===fc;if(nt.isInterleavedBufferAttribute){let ht=nt.data,Pt=ht.stride,Bt=nt.offset;if(ht.isInstancedInterleavedBuffer){for(let Lt=0;Lt<L.locationSize;Lt++)p(L.location+Lt,ht.meshPerAttribute);A.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Lt=0;Lt<L.locationSize;Lt++)m(L.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let Lt=0;Lt<L.locationSize;Lt++)_(L.location+Lt,lt/L.locationSize,Y,et,Pt*$,(Bt+lt/L.locationSize*Lt)*$,pt)}else{if(nt.isInstancedBufferAttribute){for(let ht=0;ht<L.locationSize;ht++)p(L.location+ht,nt.meshPerAttribute);A.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ht=0;ht<L.locationSize;ht++)m(L.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let ht=0;ht<L.locationSize;ht++)_(L.location+ht,lt/L.locationSize,Y,et,lt*$,lt/L.locationSize*ht*$,pt)}}else if(O!==void 0){let et=O[Z];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(L.location,et);break;case 3:i.vertexAttrib3fv(L.location,et);break;case 4:i.vertexAttrib4fv(L.location,et);break;default:i.vertexAttrib1fv(L.location,et)}}}}M()}function B(){P();for(let A in n){let w=n[A];for(let z in w){let F=w[z];for(let H in F)h(F[H].object),delete F[H];delete w[z]}delete n[A]}}function C(A){if(n[A.id]===void 0)return;let w=n[A.id];for(let z in w){let F=w[z];for(let H in F)h(F[H].object),delete F[H];delete w[z]}delete n[A.id]}function S(A){for(let w in n){let z=n[w];if(z[A.id]===void 0)continue;let F=z[A.id];for(let H in F)h(F[H].object),delete F[H];delete z[A.id]}}function P(){G(),o=!0,r!==s&&(r=s,l(r.object))}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:G,dispose:B,releaseStatesOfGeometry:C,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Xp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function a(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,n,1)}function c(l,h,f,u){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x];for(let x=0;x<u.length;x++)e.update(g,n,u[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Yp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==$e&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let P=S===Ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==_n&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==nn&&!P)}function c(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){let S=t.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:B,maxSamples:C}}function qp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new gn,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,_=M*4,y=p.clippingState||null;c.value=y,y=h(g,u,_,d);for(let B=0;B!==_;++B)y[B]=e[B];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=d;_!==x;++_,y+=4)o.copy(f[_]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Jp(i){let t=new WeakMap;function e(o,a){return a===Jo?o.mapping=Ui:a===Ko&&(o.mapping=Fi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Jo||a===Ko)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Pa(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Cr=class extends br{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ci=4,dl=[.125,.215,.35,.446,.526,.582],Kn=20,Ro=new Cr,pl=new Et,Bo=null,Po=0,Io=0,Do=!1,qn=(1+Math.sqrt(5))/2,Mi=1/qn,ml=[new R(-qn,Mi,0),new R(qn,Mi,0),new R(-Mi,0,qn),new R(Mi,0,qn),new R(0,qn,-Mi),new R(0,qn,Mi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Rr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Bo=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bo,Po,Io),this._renderer.xr.enabled=Do,t.scissorTest=!1,Ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bo=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Ts,format:$e,colorSpace:zn,depthBuffer:!1},s=gl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kp(r)),this._blurMaterial=Zp(r,t,e)}return s}_compileMaterial(t){let e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Ro)}_sceneToCubeUV(t,e,n,s){let a=new Be(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(pl),h.toneMapping=Un,h.autoClear=!1;let d=new zi({name:"PMREM.Background",side:ge,depthWrite:!1,depthTest:!1}),g=new te(new we,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(pl),x=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;Ks(s,M*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ui||t.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Al());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ks(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ro)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ml[(s-r-1)%ml.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new te(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Kn-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Kn;m>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);let p=[],M=0;for(let S=0;S<Kn;++S){let P=S/x,G=Math.exp(-P*P/2);p.push(G),S===0?M+=G:S<m&&(M+=2*G)}for(let S=0;S<p.length;S++)p[S]=p[S]/M;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;let y=this._sizeLods[s],B=3*y*(s>_-Ci?s-_+Ci:0),C=4*(this._cubeSize-y);Ks(e,B,C,3*y,2*y),c.setRenderTarget(e),c.render(f,Ro)}};function Kp(i){let t=[],e=[],n=[],s=i,r=i-Ci+1+dl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ci?c=dl[o-i+Ci-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*d),_=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let C=0;C<d;C++){let S=C%3*2/3-1,P=C>2?0:-1,G=[S,P,0,S+2/3,P,0,S+2/3,P+1,0,S,P,0,S+2/3,P+1,0,S,P+1,0];M.set(G,x*g*C),_.set(u,m*g*C);let A=[C,C,C,C,C,C];y.set(A,p*g*C)}let B=new $t;B.setAttribute("position",new le(M,x)),B.setAttribute("uv",new le(_,m)),B.setAttribute("faceIndex",new le(y,p)),t.push(B),s>Ci&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gl(i,t,e){let n=new xn(i,t,e);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Zp(i,t,e){let n=new Float32Array(Kn),s=new R(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Al(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function vl(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}function jp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Jo||c===Ko,h=c===Ui||c===Fi;if(l||h){let f=t.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Rr(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Rr(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function $p(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&dr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function tm(i,t,e,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(f){let u=f.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(f){let u=[],d=f.index,g=f.attributes.position,x=0;if(d!==null){let M=d.array;x=d.version;for(let _=0,y=M.length;_<y;_+=3){let B=M[_+0],C=M[_+1],S=M[_+2];u.push(B,C,C,S,S,B)}}else if(g!==void 0){let M=g.array;x=g.version;for(let _=0,y=M.length/3-1;_<y;_+=3){let B=_+0,C=_+1,S=_+2;u.push(B,C,C,S,S,B)}}else return;let m=new(lh(u)?Sr:Er)(u,1);m.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function em(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function l(u,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,u*o,g),e.update(d,n,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function f(u,d,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M];for(let M=0;M<x.length;M++)e.update(p,n,x[M])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function nm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function im(i,t,e){let n=new WeakMap,s=new ae;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let G=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",G)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],_=0;d===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,B=1;y>t.maxTextureSize&&(B=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let C=new Float32Array(y*B*4*f),S=new yr(C,y,B,f);S.type=nn,S.needsUpdate=!0;let P=_*4;for(let A=0;A<f;A++){let w=m[A],z=p[A],F=M[A],H=y*B*4*A;for(let J=0;J<w.count;J++){let O=J*P;d===!0&&(s.fromBufferAttribute(w,J),C[H+O+0]=s.x,C[H+O+1]=s.y,C[H+O+2]=s.z,C[H+O+3]=0),g===!0&&(s.fromBufferAttribute(z,J),C[H+O+4]=s.x,C[H+O+5]=s.y,C[H+O+6]=s.z,C[H+O+7]=0),x===!0&&(s.fromBufferAttribute(F,J),C[H+O+8]=s.x,C[H+O+9]=s.y,C[H+O+10]=s.z,C[H+O+11]=F.itemSize===4?s.w:1)}}u={count:f,texture:S,size:new at(y,B)},n.set(a,u),a.addEventListener("dispose",G)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function sm(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Br=class extends Fe{constructor(t,e,n,s,r,o,a,c,l,h=Pi){if(h!==Pi&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pi&&(n=$n),n===void 0&&h===Oi&&(n=Ni),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ue,this.minFilter=c!==void 0?c:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},dh=new Fe,_l=new Br(1,1),ph=new yr,mh=new Ra,gh=new Tr,xl=[],yl=[],Ml=new Float32Array(16),wl=new Float32Array(9),El=new Float32Array(4);function Xi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=xl[s];if(r===void 0&&(r=new Float32Array(s),xl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function de(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jr(i,t){let e=yl[t];e===void 0&&(e=new Int32Array(t),yl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2fv(this.addr,t),pe(e,t)}}function am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;i.uniform3fv(this.addr,t),pe(e,t)}}function cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4fv(this.addr,t),pe(e,t)}}function lm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(de(e,n))return;El.set(n),i.uniformMatrix2fv(this.addr,!1,El),pe(e,n)}}function hm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(de(e,n))return;wl.set(n),i.uniformMatrix3fv(this.addr,!1,wl),pe(e,n)}}function um(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(de(e,n))return;Ml.set(n),i.uniformMatrix4fv(this.addr,!1,Ml),pe(e,n)}}function fm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2iv(this.addr,t),pe(e,t)}}function pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3iv(this.addr,t),pe(e,t)}}function mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4iv(this.addr,t),pe(e,t)}}function gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2uiv(this.addr,t),pe(e,t)}}function vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3uiv(this.addr,t),pe(e,t)}}function _m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4uiv(this.addr,t),pe(e,t)}}function xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_l.compareFunction=ch,r=_l):r=dh,e.setTexture2D(t||r,s)}function ym(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||mh,s)}function Mm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gh,s)}function wm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ph,s)}function Em(i){switch(i){case 5126:return rm;case 35664:return om;case 35665:return am;case 35666:return cm;case 35674:return lm;case 35675:return hm;case 35676:return um;case 5124:case 35670:return fm;case 35667:case 35671:return dm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return Am;case 36295:return vm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return wm}}function Sm(i,t){i.uniform1fv(this.addr,t)}function bm(i,t){let e=Xi(t,this.size,2);i.uniform2fv(this.addr,e)}function Tm(i,t){let e=Xi(t,this.size,3);i.uniform3fv(this.addr,e)}function Cm(i,t){let e=Xi(t,this.size,4);i.uniform4fv(this.addr,e)}function Rm(i,t){let e=Xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bm(i,t){let e=Xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pm(i,t){let e=Xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Im(i,t){i.uniform1iv(this.addr,t)}function Dm(i,t){i.uniform2iv(this.addr,t)}function Lm(i,t){i.uniform3iv(this.addr,t)}function Um(i,t){i.uniform4iv(this.addr,t)}function Fm(i,t){i.uniform1uiv(this.addr,t)}function Nm(i,t){i.uniform2uiv(this.addr,t)}function Om(i,t){i.uniform3uiv(this.addr,t)}function zm(i,t){i.uniform4uiv(this.addr,t)}function Hm(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||dh,r[o])}function km(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||mh,r[o])}function Gm(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||gh,r[o])}function Vm(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ph,r[o])}function Qm(i){switch(i){case 5126:return Sm;case 35664:return bm;case 35665:return Tm;case 35666:return Cm;case 35674:return Rm;case 35675:return Bm;case 35676:return Pm;case 5124:case 35670:return Im;case 35667:case 35671:return Dm;case 35668:case 35672:return Lm;case 35669:case 35673:return Um;case 5125:return Fm;case 36294:return Nm;case 36295:return Om;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return km;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Vm}}var Ia=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Em(e.type)}},Da=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qm(e.type)}},La=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Lo=/(\w+)(\])?(\[|\.)?/g;function Sl(i,t){i.seq.push(t),i.map[t.id]=t}function Wm(i,t,e){let n=i.name,s=n.length;for(Lo.lastIndex=0;;){let r=Lo.exec(n),o=Lo.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Sl(e,l===void 0?new Ia(a,i,t):new Da(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new La(a),Sl(e,f)),e=f}}}var Di=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Wm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function bl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Xm=37297,Ym=0;function qm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Jm(i){let t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(i),n;switch(t===e?n="":t===Ar&&e===gr?n="LinearDisplayP3ToLinearSRGB":t===gr&&e===Ar&&(n="LinearSRGBToLinearDisplayP3"),i){case zn:case qr:return[n,"LinearTransferOETF"];case Le:case _c:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Tl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+qm(i.getShaderSource(t),o)}else return s}function Km(i,t){let e=Jm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Zm(i,t){let e;switch(t){case ou:e="Linear";break;case au:e="Reinhard";break;case cu:e="Cineon";break;case uc:e="ACESFilmic";break;case hu:e="AgX";break;case uu:e="Neutral";break;case lu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zs=new R;function jm(){Kt.getLuminanceCoefficients(Zs);let i=Zs.x.toFixed(4),t=Zs.y.toFixed(4),e=Zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $m(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function tg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function eg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function as(i){return i!==""}function Cl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(i){return i.replace(ng,sg)}var ig=new Map;function sg(i,t){let e=Ht[t];if(e===void 0){let n=ig.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ua(e)}var rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(i){return i.replace(rg,og)}function og(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pl(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ag(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===hc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(t="SHADOWMAP_TYPE_VSM"),t}function cg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ui:case Fi:t="ENVMAP_TYPE_CUBE";break;case Yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Fi&&(t="ENVMAP_MODE_REFRACTION"),t}function hg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kl:t="ENVMAP_BLENDING_MULTIPLY";break;case su:t="ENVMAP_BLENDING_MIX";break;case ru:t="ENVMAP_BLENDING_ADD";break}return t}function ug(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function fg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=ag(e),l=cg(e),h=lg(e),f=hg(e),u=ug(e),d=$m(e),g=tg(r),x=s.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),p.length>0&&(p+=`
`)):(m=[Pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),p=[Pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Un?Zm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Km("linearToOutputTexel",e.outputColorSpace),jm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(as).join(`
`)),o=Ua(o),o=Cl(o,e),o=Rl(o,e),a=Ua(a),a=Cl(a,e),a=Rl(a,e),o=Bl(o),a=Bl(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=M+m+o,y=M+p+a,B=bl(s,s.VERTEX_SHADER,_),C=bl(s,s.FRAGMENT_SHADER,y);s.attachShader(x,B),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function S(w){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(B).trim(),H=s.getShaderInfoLog(C).trim(),J=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,B,C);else{let Z=Tl(s,B,"vertex"),L=Tl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+Z+`
`+L)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||H==="")&&(O=!1);O&&(w.diagnostics={runnable:J,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(B),s.deleteShader(C),P=new Di(s,x),G=eg(s,x)}let P;this.getUniforms=function(){return P===void 0&&S(this),P};let G;this.getAttributes=function(){return G===void 0&&S(this),G};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(x,Xm)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ym++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=B,this.fragmentShader=C,this}var dg=0,Fa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Na(t),e.set(t,n)),n}},Na=class{constructor(t){this.id=dg++,this.code=t,this.usedTimes=0}};function pg(i,t,e,n,s,r,o){let a=new wr,c=new Fa,l=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,d=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(A){return l.add(A),A===0?"uv":`uv${A}`}function p(A,w,z,F,H){let J=F.fog,O=H.geometry,Z=A.isMeshStandardMaterial?F.environment:null,L=(A.isMeshStandardMaterial?e:t).get(A.envMap||Z),nt=L&&L.mapping===Yr?L.image.height:null,et=x[A.type];A.precision!==null&&(g=s.getMaxPrecision(A.precision),g!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));let lt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,It=lt!==void 0?lt.length:0,Gt=0;O.morphAttributes.position!==void 0&&(Gt=1),O.morphAttributes.normal!==void 0&&(Gt=2),O.morphAttributes.color!==void 0&&(Gt=3);let Y,$,pt,ht;if(et){let De=en[et];Y=De.vertexShader,$=De.fragmentShader}else Y=A.vertexShader,$=A.fragmentShader,c.update(A),pt=c.getVertexShaderID(A),ht=c.getFragmentShaderID(A);let Pt=i.getRenderTarget(),Bt=H.isInstancedMesh===!0,Lt=H.isBatchedMesh===!0,zt=!!A.map,K=!!A.matcap,T=!!L,ct=!!A.aoMap,st=!!A.lightMap,tt=!!A.bumpMap,ut=!!A.normalMap,bt=!!A.displacementMap,At=!!A.emissiveMap,b=!!A.metalnessMap,v=!!A.roughnessMap,I=A.anisotropy>0,W=A.clearcoat>0,q=A.dispersion>0,X=A.iridescence>0,vt=A.sheen>0,rt=A.transmission>0,ft=I&&!!A.anisotropyMap,Rt=W&&!!A.clearcoatMap,it=W&&!!A.clearcoatNormalMap,yt=W&&!!A.clearcoatRoughnessMap,Ft=X&&!!A.iridescenceMap,Nt=X&&!!A.iridescenceThicknessMap,Mt=vt&&!!A.sheenColorMap,Vt=vt&&!!A.sheenRoughnessMap,Ot=!!A.specularMap,ee=!!A.specularColorMap,D=!!A.specularIntensityMap,_t=rt&&!!A.transmissionMap,Q=rt&&!!A.thicknessMap,j=!!A.gradientMap,mt=!!A.alphaMap,xt=A.alphaTest>0,Wt=!!A.alphaHash,he=!!A.extensions,Ie=Un;A.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(Ie=i.toneMapping);let Yt={shaderID:et,shaderType:A.type,shaderName:A.name,vertexShader:Y,fragmentShader:$,defines:A.defines,customVertexShaderID:pt,customFragmentShaderID:ht,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:Lt,batchingColor:Lt&&H._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&H.instanceColor!==null,instancingMorph:Bt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Pt===null?i.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:zn,alphaToCoverage:!!A.alphaToCoverage,map:zt,matcap:K,envMap:T,envMapMode:T&&L.mapping,envMapCubeUVHeight:nt,aoMap:ct,lightMap:st,bumpMap:tt,normalMap:ut,displacementMap:d&&bt,emissiveMap:At,normalMapObjectSpace:ut&&A.normalMapType===mu,normalMapTangentSpace:ut&&A.normalMapType===ah,metalnessMap:b,roughnessMap:v,anisotropy:I,anisotropyMap:ft,clearcoat:W,clearcoatMap:Rt,clearcoatNormalMap:it,clearcoatRoughnessMap:yt,dispersion:q,iridescence:X,iridescenceMap:Ft,iridescenceThicknessMap:Nt,sheen:vt,sheenColorMap:Mt,sheenRoughnessMap:Vt,specularMap:Ot,specularColorMap:ee,specularIntensityMap:D,transmission:rt,transmissionMap:_t,thicknessMap:Q,gradientMap:j,opaque:A.transparent===!1&&A.blending===Bi&&A.alphaToCoverage===!1,alphaMap:mt,alphaTest:xt,alphaHash:Wt,combine:A.combine,mapUv:zt&&m(A.map.channel),aoMapUv:ct&&m(A.aoMap.channel),lightMapUv:st&&m(A.lightMap.channel),bumpMapUv:tt&&m(A.bumpMap.channel),normalMapUv:ut&&m(A.normalMap.channel),displacementMapUv:bt&&m(A.displacementMap.channel),emissiveMapUv:At&&m(A.emissiveMap.channel),metalnessMapUv:b&&m(A.metalnessMap.channel),roughnessMapUv:v&&m(A.roughnessMap.channel),anisotropyMapUv:ft&&m(A.anisotropyMap.channel),clearcoatMapUv:Rt&&m(A.clearcoatMap.channel),clearcoatNormalMapUv:it&&m(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&m(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&m(A.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&m(A.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&m(A.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&m(A.sheenRoughnessMap.channel),specularMapUv:Ot&&m(A.specularMap.channel),specularColorMapUv:ee&&m(A.specularColorMap.channel),specularIntensityMapUv:D&&m(A.specularIntensityMap.channel),transmissionMapUv:_t&&m(A.transmissionMap.channel),thicknessMapUv:Q&&m(A.thicknessMap.channel),alphaMapUv:mt&&m(A.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ut||I),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!O.attributes.uv&&(zt||mt),fog:!!J,useFog:A.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:H.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Gt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:zt&&A.map.isVideoTexture===!0&&Kt.getTransfer(A.map.colorSpace)===ie,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===An,flipSided:A.side===ge,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:he&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&A.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function M(A){let w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(let z in A.defines)w.push(z),w.push(A.defines[z]);return A.isRawShaderMaterial===!1&&(_(w,A),y(w,A),w.push(i.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function _(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function y(A,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),A.push(a.mask)}function B(A){let w=x[A.type],z;if(w){let F=en[w];z=sf.clone(F.uniforms)}else z=A.uniforms;return z}function C(A,w){let z;for(let F=0,H=h.length;F<H;F++){let J=h[F];if(J.cacheKey===w){z=J,++z.usedTimes;break}}return z===void 0&&(z=new fg(i,w,A,r),h.push(z)),z}function S(A){if(--A.usedTimes===0){let w=h.indexOf(A);h[w]=h[h.length-1],h.pop(),A.destroy()}}function P(A){c.remove(A)}function G(){c.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:B,acquireProgram:C,releaseProgram:S,releaseShaderCache:P,programs:h,dispose:G}}function mg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Il(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,u,d,g,x,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),t++,p}function a(f,u,d,g,x,m){let p=o(f,u,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(f,u,d,g,x,m){let p=o(f,u,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(f,u){e.length>1&&e.sort(f||gg),n.length>1&&n.sort(u||Il),s.length>1&&s.sort(u||Il)}function h(){for(let f=t,u=i.length;f<u;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Ag(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Dl,i.set(n,[o])):s>=r.length?(o=new Dl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Et};break;case"SpotLight":e={position:new R,direction:new R,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function _g(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var xg=0;function yg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Mg(i){let t=new vg,e=_g(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let s=new R,r=new Xt,o=new Xt;function a(l){let h=0,f=0,u=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,M=0,_=0,y=0,B=0,C=0,S=0;l.sort(yg);for(let G=0,A=l.length;G<A;G++){let w=l[G],z=w.color,F=w.intensity,H=w.distance,J=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=z.r*F,f+=z.g*F,u+=z.b*F;else if(w.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(w.sh.coefficients[O],F);S++}else if(w.isDirectionalLight){let O=t.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let Z=w.shadow,L=e.get(w);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,n.directionalShadow[d]=L,n.directionalShadowMap[d]=J,n.directionalShadowMatrix[d]=w.shadow.matrix,M++}n.directional[d]=O,d++}else if(w.isSpotLight){let O=t.get(w);O.position.setFromMatrixPosition(w.matrixWorld),O.color.copy(z).multiplyScalar(F),O.distance=H,O.coneCos=Math.cos(w.angle),O.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),O.decay=w.decay,n.spot[x]=O;let Z=w.shadow;if(w.map&&(n.spotLightMap[B]=w.map,B++,Z.updateMatrices(w),w.castShadow&&C++),n.spotLightMatrix[x]=Z.matrix,w.castShadow){let L=e.get(w);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,n.spotShadow[x]=L,n.spotShadowMap[x]=J,y++}x++}else if(w.isRectAreaLight){let O=t.get(w);O.color.copy(z).multiplyScalar(F),O.halfWidth.set(w.width*.5,0,0),O.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=O,m++}else if(w.isPointLight){let O=t.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),O.distance=w.distance,O.decay=w.decay,w.castShadow){let Z=w.shadow,L=e.get(w);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,L.shadowCameraNear=Z.camera.near,L.shadowCameraFar=Z.camera.far,n.pointShadow[g]=L,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=w.shadow.matrix,_++}n.point[g]=O,g++}else if(w.isHemisphereLight){let O=t.get(w);O.skyColor.copy(w.color).multiplyScalar(F),O.groundColor.copy(w.groundColor).multiplyScalar(F),n.hemi[p]=O,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==_||P.numSpotShadows!==y||P.numSpotMaps!==B||P.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+B-C,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=S,P.directionalLength=d,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=_,P.numSpotShadows=y,P.numSpotMaps=B,P.numLightProbes=S,n.version=xg++)}function c(l,h){let f=0,u=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let _=l[p];if(_.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(_.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(_.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Ll(i){let t=new Mg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function wg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ll(i),t.set(s,[a])):r>=o.length?(a=new Ll(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Oa=class extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},za=class extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
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
}`;function bg(i,t,e){let n=new gs,s=new at,r=new at,o=new ae,a=new Oa({depthPacking:pu}),c=new za,l={},h=e.maxTextureSize,f={[Fn]:ge,[ge]:Fn,[An]:An},u=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Eg,fragmentShader:Sg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new $t;g.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new te(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl;let p=this.type;this.render=function(C,S,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let G=i.getRenderTarget(),A=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Ln),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let F=p!==mn&&this.type===mn,H=p===mn&&this.type!==mn;for(let J=0,O=C.length;J<O;J++){let Z=C[J],L=Z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);let nt=L.getFrameExtents();if(s.multiply(nt),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,L.mapSize.y=r.y)),L.map===null||F===!0||H===!0){let lt=this.type!==mn?{minFilter:Ue,magFilter:Ue}:{};L.map!==null&&L.map.dispose(),L.map=new xn(s.x,s.y,lt),L.map.texture.name=Z.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();let et=L.getViewportCount();for(let lt=0;lt<et;lt++){let It=L.getViewport(lt);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),z.viewport(o),L.updateMatrices(Z,lt),n=L.getFrustum(),y(S,P,L.camera,Z,this.type)}L.isPointLightShadow!==!0&&this.type===mn&&M(L,P),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(G,A,w)};function M(C,S){let P=t.update(x);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new xn(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(S,null,P,u,x,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(S,null,P,d,x,null)}function _(C,S,P,G){let A=null,w=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)A=w;else if(A=P.isPointLight===!0?c:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let z=A.uuid,F=S.uuid,H=l[z];H===void 0&&(H={},l[z]=H);let J=H[F];J===void 0&&(J=A.clone(),H[F]=J,S.addEventListener("dispose",B)),A=J}if(A.visible=S.visible,A.wireframe=S.wireframe,G===mn?A.side=S.shadowSide!==null?S.shadowSide:S.side:A.side=S.shadowSide!==null?S.shadowSide:f[S.side],A.alphaMap=S.alphaMap,A.alphaTest=S.alphaTest,A.map=S.map,A.clipShadows=S.clipShadows,A.clippingPlanes=S.clippingPlanes,A.clipIntersection=S.clipIntersection,A.displacementMap=S.displacementMap,A.displacementScale=S.displacementScale,A.displacementBias=S.displacementBias,A.wireframeLinewidth=S.wireframeLinewidth,A.linewidth=S.linewidth,P.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let z=i.properties.get(A);z.light=P}return A}function y(C,S,P,G,A){if(C.visible===!1)return;if(C.layers.test(S.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===mn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);let F=t.update(C),H=C.material;if(Array.isArray(H)){let J=F.groups;for(let O=0,Z=J.length;O<Z;O++){let L=J[O],nt=H[L.materialIndex];if(nt&&nt.visible){let et=_(C,nt,G,A);C.onBeforeShadow(i,C,S,P,F,et,L),i.renderBufferDirect(P,null,F,et,C,L),C.onAfterShadow(i,C,S,P,F,et,L)}}}else if(H.visible){let J=_(C,H,G,A);C.onBeforeShadow(i,C,S,P,F,J,null),i.renderBufferDirect(P,null,F,J,C,null),C.onAfterShadow(i,C,S,P,F,J,null)}}let z=C.children;for(let F=0,H=z.length;F<H;F++)y(z[F],S,P,G,A)}function B(C){C.target.removeEventListener("dispose",B);for(let P in l){let G=l[P],A=C.target.uuid;A in G&&(G[A].dispose(),delete G[A])}}}var Tg={[Go]:Vo,[Qo]:Yo,[Wo]:qo,[Li]:Xo,[Vo]:Go,[Yo]:Qo,[qo]:Wo,[Xo]:Li};function Cg(i){function t(){let D=!1,_t=new ae,Q=null,j=new ae(0,0,0,0);return{setMask:function(mt){Q!==mt&&!D&&(i.colorMask(mt,mt,mt,mt),Q=mt)},setLocked:function(mt){D=mt},setClear:function(mt,xt,Wt,he,Ie){Ie===!0&&(mt*=he,xt*=he,Wt*=he),_t.set(mt,xt,Wt,he),j.equals(_t)===!1&&(i.clearColor(mt,xt,Wt,he),j.copy(_t))},reset:function(){D=!1,Q=null,j.set(-1,0,0,0)}}}function e(){let D=!1,_t=!1,Q=null,j=null,mt=null;return{setReversed:function(xt){_t=xt},setTest:function(xt){xt?pt(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(xt){Q!==xt&&!D&&(i.depthMask(xt),Q=xt)},setFunc:function(xt){if(_t&&(xt=Tg[xt]),j!==xt){switch(xt){case Go:i.depthFunc(i.NEVER);break;case Vo:i.depthFunc(i.ALWAYS);break;case Qo:i.depthFunc(i.LESS);break;case Li:i.depthFunc(i.LEQUAL);break;case Wo:i.depthFunc(i.EQUAL);break;case Xo:i.depthFunc(i.GEQUAL);break;case Yo:i.depthFunc(i.GREATER);break;case qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=xt}},setLocked:function(xt){D=xt},setClear:function(xt){mt!==xt&&(i.clearDepth(xt),mt=xt)},reset:function(){D=!1,Q=null,j=null,mt=null}}}function n(){let D=!1,_t=null,Q=null,j=null,mt=null,xt=null,Wt=null,he=null,Ie=null;return{setTest:function(Yt){D||(Yt?pt(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(Yt){_t!==Yt&&!D&&(i.stencilMask(Yt),_t=Yt)},setFunc:function(Yt,De,ln){(Q!==Yt||j!==De||mt!==ln)&&(i.stencilFunc(Yt,De,ln),Q=Yt,j=De,mt=ln)},setOp:function(Yt,De,ln){(xt!==Yt||Wt!==De||he!==ln)&&(i.stencilOp(Yt,De,ln),xt=Yt,Wt=De,he=ln)},setLocked:function(Yt){D=Yt},setClear:function(Yt){Ie!==Yt&&(i.clearStencil(Yt),Ie=Yt)},reset:function(){D=!1,_t=null,Q=null,j=null,mt=null,xt=null,Wt=null,he=null,Ie=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},f=new WeakMap,u=[],d=null,g=!1,x=null,m=null,p=null,M=null,_=null,y=null,B=null,C=new Et(0,0,0),S=0,P=!1,G=null,A=null,w=null,z=null,F=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,O=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Z)[1]),J=O>=1):Z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),J=O>=2);let L=null,nt={},et=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),It=new ae().fromArray(et),Gt=new ae().fromArray(lt);function Y(D,_t,Q,j){let mt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(D,xt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<Q;Wt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(_t+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return xt}let $={};$[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),pt(i.DEPTH_TEST),r.setFunc(Li),st(!1),tt(kc),pt(i.CULL_FACE),T(Ln);function pt(D){l[D]!==!0&&(i.enable(D),l[D]=!0)}function ht(D){l[D]!==!1&&(i.disable(D),l[D]=!1)}function Pt(D,_t){return h[D]!==_t?(i.bindFramebuffer(D,_t),h[D]=_t,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_t),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function Bt(D,_t){let Q=u,j=!1;if(D){Q=f.get(_t),Q===void 0&&(Q=[],f.set(_t,Q));let mt=D.textures;if(Q.length!==mt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Wt=mt.length;xt<Wt;xt++)Q[xt]=i.COLOR_ATTACHMENT0+xt;Q.length=mt.length,j=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,j=!0);j&&i.drawBuffers(Q)}function Lt(D){return d!==D?(i.useProgram(D),d=D,!0):!1}let zt={[Jn]:i.FUNC_ADD,[kh]:i.FUNC_SUBTRACT,[Gh]:i.FUNC_REVERSE_SUBTRACT};zt[Vh]=i.MIN,zt[Qh]=i.MAX;let K={[Wh]:i.ZERO,[Xh]:i.ONE,[Yh]:i.SRC_COLOR,[Ho]:i.SRC_ALPHA,[$h]:i.SRC_ALPHA_SATURATE,[Zh]:i.DST_COLOR,[Jh]:i.DST_ALPHA,[qh]:i.ONE_MINUS_SRC_COLOR,[ko]:i.ONE_MINUS_SRC_ALPHA,[jh]:i.ONE_MINUS_DST_COLOR,[Kh]:i.ONE_MINUS_DST_ALPHA,[tu]:i.CONSTANT_COLOR,[eu]:i.ONE_MINUS_CONSTANT_COLOR,[nu]:i.CONSTANT_ALPHA,[iu]:i.ONE_MINUS_CONSTANT_ALPHA};function T(D,_t,Q,j,mt,xt,Wt,he,Ie,Yt){if(D===Ln){g===!0&&(ht(i.BLEND),g=!1);return}if(g===!1&&(pt(i.BLEND),g=!0),D!==Hh){if(D!==x||Yt!==P){if((m!==Jn||_!==Jn)&&(i.blendEquation(i.FUNC_ADD),m=Jn,_=Jn),Yt)switch(D){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ke:i.blendFunc(i.ONE,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ke:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,M=null,y=null,B=null,C.set(0,0,0),S=0,x=D,P=Yt}return}mt=mt||_t,xt=xt||Q,Wt=Wt||j,(_t!==m||mt!==_)&&(i.blendEquationSeparate(zt[_t],zt[mt]),m=_t,_=mt),(Q!==p||j!==M||xt!==y||Wt!==B)&&(i.blendFuncSeparate(K[Q],K[j],K[xt],K[Wt]),p=Q,M=j,y=xt,B=Wt),(he.equals(C)===!1||Ie!==S)&&(i.blendColor(he.r,he.g,he.b,Ie),C.copy(he),S=Ie),x=D,P=!1}function ct(D,_t){D.side===An?ht(i.CULL_FACE):pt(i.CULL_FACE);let Q=D.side===ge;_t&&(Q=!Q),st(Q),D.blending===Bi&&D.transparent===!1?T(Ln):T(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);let j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),bt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(D){G!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),G=D)}function tt(D){D!==Oh?(pt(i.CULL_FACE),D!==A&&(D===kc?i.cullFace(i.BACK):D===zh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),A=D}function ut(D){D!==w&&(J&&i.lineWidth(D),w=D)}function bt(D,_t,Q){D?(pt(i.POLYGON_OFFSET_FILL),(z!==_t||F!==Q)&&(i.polygonOffset(_t,Q),z=_t,F=Q)):ht(i.POLYGON_OFFSET_FILL)}function At(D){D?pt(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function b(D){D===void 0&&(D=i.TEXTURE0+H-1),L!==D&&(i.activeTexture(D),L=D)}function v(D,_t,Q){Q===void 0&&(L===null?Q=i.TEXTURE0+H-1:Q=L);let j=nt[Q];j===void 0&&(j={type:void 0,texture:void 0},nt[Q]=j),(j.type!==D||j.texture!==_t)&&(L!==Q&&(i.activeTexture(Q),L=Q),i.bindTexture(D,_t||$[D]),j.type=D,j.texture=_t)}function I(){let D=nt[L];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function W(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(D){It.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),It.copy(D))}function Mt(D){Gt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Gt.copy(D))}function Vt(D,_t){let Q=c.get(_t);Q===void 0&&(Q=new WeakMap,c.set(_t,Q));let j=Q.get(D);j===void 0&&(j=i.getUniformBlockIndex(_t,D.name),Q.set(D,j))}function Ot(D,_t){let j=c.get(_t).get(D);a.get(_t)!==j&&(i.uniformBlockBinding(_t,j,D.__bindingPointIndex),a.set(_t,j))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},L=null,nt={},h={},f=new WeakMap,u=[],d=null,g=!1,x=null,m=null,p=null,M=null,_=null,y=null,B=null,C=new Et(0,0,0),S=0,P=!1,G=null,A=null,w=null,z=null,F=null,It.set(0,0,i.canvas.width,i.canvas.height),Gt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:pt,disable:ht,bindFramebuffer:Pt,drawBuffers:Bt,useProgram:Lt,setBlending:T,setMaterial:ct,setFlipSided:st,setCullFace:tt,setLineWidth:ut,setPolygonOffset:bt,setScissorTest:At,activeTexture:b,bindTexture:v,unbindTexture:I,compressedTexImage2D:W,compressedTexImage3D:q,texImage2D:yt,texImage3D:Ft,updateUBOMapping:Vt,uniformBlockBinding:Ot,texStorage2D:Rt,texStorage3D:it,texSubImage2D:X,texSubImage3D:vt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ft,scissor:Nt,viewport:Mt,reset:ee}}function Ul(i,t,e,n){let s=Rg(n);switch(e){case eh:return i*t;case ih:return i*t;case sh:return i*t*2;case mc:return i*t/s.components*s.byteLength;case gc:return i*t/s.components*s.byteLength;case rh:return i*t*2/s.components*s.byteLength;case Ac:return i*t*2/s.components*s.byteLength;case nh:return i*t*3/s.components*s.byteLength;case $e:return i*t*4/s.components*s.byteLength;case vc:return i*t*4/s.components*s.byteLength;case cr:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ta:case na:return Math.max(i,16)*Math.max(t,8)/4;case $o:case ea:return Math.max(i,8)*Math.max(t,8)/2;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ca:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ga:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fr:case xa:case ya:return Math.ceil(i/4)*Math.ceil(t/4)*16;case oh:case Ma:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wa:case Ea:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rg(i){switch(i){case _n:case jl:return{byteLength:1,components:1};case ps:case $l:case Ts:return{byteLength:2,components:1};case dc:case pc:return{byteLength:2,components:4};case $n:case fc:case nn:return{byteLength:4,components:1};case th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Bg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return d?new OffscreenCanvas(b,v):_r("canvas")}function x(b,v,I){let W=1,q=At(b);if((q.width>I||q.height>I)&&(W=I/Math.max(q.width,q.height)),W<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let X=Math.floor(W*q.width),vt=Math.floor(W*q.height);f===void 0&&(f=g(X,vt));let rt=v?g(X,vt):f;return rt.width=X,rt.height=vt,rt.getContext("2d").drawImage(b,0,0,X,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+X+"x"+vt+")."),rt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==Ue&&b.minFilter!==Ze}function p(b){i.generateMipmap(b)}function M(b,v,I,W,q=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=v;if(v===i.RED&&(I===i.FLOAT&&(X=i.R32F),I===i.HALF_FLOAT&&(X=i.R16F),I===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(X=i.R8UI),I===i.UNSIGNED_SHORT&&(X=i.R16UI),I===i.UNSIGNED_INT&&(X=i.R32UI),I===i.BYTE&&(X=i.R8I),I===i.SHORT&&(X=i.R16I),I===i.INT&&(X=i.R32I)),v===i.RG&&(I===i.FLOAT&&(X=i.RG32F),I===i.HALF_FLOAT&&(X=i.RG16F),I===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(X=i.RG8UI),I===i.UNSIGNED_SHORT&&(X=i.RG16UI),I===i.UNSIGNED_INT&&(X=i.RG32UI),I===i.BYTE&&(X=i.RG8I),I===i.SHORT&&(X=i.RG16I),I===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(X=i.RGB8UI),I===i.UNSIGNED_SHORT&&(X=i.RGB16UI),I===i.UNSIGNED_INT&&(X=i.RGB32UI),I===i.BYTE&&(X=i.RGB8I),I===i.SHORT&&(X=i.RGB16I),I===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),I===i.UNSIGNED_INT&&(X=i.RGBA32UI),I===i.BYTE&&(X=i.RGBA8I),I===i.SHORT&&(X=i.RGBA16I),I===i.INT&&(X=i.RGBA32I)),v===i.RGB&&I===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),v===i.RGBA){let vt=q?mr:Kt.getTransfer(W);I===i.FLOAT&&(X=i.RGBA32F),I===i.HALF_FLOAT&&(X=i.RGBA16F),I===i.UNSIGNED_BYTE&&(X=vt===ie?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function _(b,v){let I;return b?v===null||v===$n||v===Ni?I=i.DEPTH24_STENCIL8:v===nn?I=i.DEPTH32F_STENCIL8:v===ps&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===$n||v===Ni?I=i.DEPTH_COMPONENT24:v===nn?I=i.DEPTH_COMPONENT32F:v===ps&&(I=i.DEPTH_COMPONENT16),I}function y(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ue&&b.minFilter!==Ze?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function B(b){let v=b.target;v.removeEventListener("dispose",B),S(v),v.isVideoTexture&&h.delete(v)}function C(b){let v=b.target;v.removeEventListener("dispose",C),G(v)}function S(b){let v=n.get(b);if(v.__webglInit===void 0)return;let I=b.source,W=u.get(I);if(W){let q=W[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&P(b),Object.keys(W).length===0&&u.delete(I)}n.remove(b)}function P(b){let v=n.get(b);i.deleteTexture(v.__webglTexture);let I=b.source,W=u.get(I);delete W[v.__cacheKey],o.memory.textures--}function G(b){let v=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let q=0;q<v.__webglFramebuffer[W].length;q++)i.deleteFramebuffer(v.__webglFramebuffer[W][q]);else i.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)i.deleteFramebuffer(v.__webglFramebuffer[W]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let I=b.textures;for(let W=0,q=I.length;W<q;W++){let X=n.get(I[W]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(I[W])}n.remove(b)}let A=0;function w(){A=0}function z(){let b=A;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),A+=1,b}function F(b){let v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function H(b,v){let I=n.get(b);if(b.isVideoTexture&&ut(b),b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){let W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(I,b,v);return}}e.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+v)}function J(b,v){let I=n.get(b);if(b.version>0&&I.__version!==b.version){Gt(I,b,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+v)}function O(b,v){let I=n.get(b);if(b.version>0&&I.__version!==b.version){Gt(I,b,v);return}e.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+v)}function Z(b,v){let I=n.get(b);if(b.version>0&&I.__version!==b.version){Y(I,b,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+v)}let L={[Zo]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[jo]:i.MIRRORED_REPEAT},nt={[Ue]:i.NEAREST,[fu]:i.NEAREST_MIPMAP_NEAREST,[Ps]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[ro]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},et={[gu]:i.NEVER,[Mu]:i.ALWAYS,[Au]:i.LESS,[ch]:i.LEQUAL,[vu]:i.EQUAL,[yu]:i.GEQUAL,[_u]:i.GREATER,[xu]:i.NOTEQUAL};function lt(b,v){if(v.type===nn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ze||v.magFilter===ro||v.magFilter===Ps||v.magFilter===jn||v.minFilter===Ze||v.minFilter===ro||v.minFilter===Ps||v.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,L[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,L[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,L[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,nt[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,nt[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ue||v.minFilter!==Ps&&v.minFilter!==jn||v.type===nn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function It(b,v){let I=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",B));let W=v.source,q=u.get(W);q===void 0&&(q={},u.set(W,q));let X=F(v);if(X!==b.__cacheKey){q[X]===void 0&&(q[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),q[X].usedTimes++;let vt=q[b.__cacheKey];vt!==void 0&&(q[b.__cacheKey].usedTimes--,vt.usedTimes===0&&P(v)),b.__cacheKey=X,b.__webglTexture=q[X].texture}return I}function Gt(b,v,I){let W=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=i.TEXTURE_3D);let q=It(b,v),X=v.source;e.bindTexture(W,b.__webglTexture,i.TEXTURE0+I);let vt=n.get(X);if(X.version!==vt.__version||q===!0){e.activeTexture(i.TEXTURE0+I);let rt=Kt.getPrimaries(Kt.workingColorSpace),ft=v.colorSpace===In?null:Kt.getPrimaries(v.colorSpace),Rt=v.colorSpace===In||rt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let it=x(v.image,!1,s.maxTextureSize);it=bt(v,it);let yt=r.convert(v.format,v.colorSpace),Ft=r.convert(v.type),Nt=M(v.internalFormat,yt,Ft,v.colorSpace,v.isVideoTexture);lt(W,v);let Mt,Vt=v.mipmaps,Ot=v.isVideoTexture!==!0,ee=vt.__version===void 0||q===!0,D=X.dataReady,_t=y(v,it);if(v.isDepthTexture)Nt=_(v.format===Oi,v.type),ee&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Nt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Nt,it.width,it.height,0,yt,Ft,null));else if(v.isDataTexture)if(Vt.length>0){Ot&&ee&&e.texStorage2D(i.TEXTURE_2D,_t,Nt,Vt[0].width,Vt[0].height);for(let Q=0,j=Vt.length;Q<j;Q++)Mt=Vt[Q],Ot?D&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Mt.width,Mt.height,yt,Ft,Mt.data):e.texImage2D(i.TEXTURE_2D,Q,Nt,Mt.width,Mt.height,0,yt,Ft,Mt.data);v.generateMipmaps=!1}else Ot?(ee&&e.texStorage2D(i.TEXTURE_2D,_t,Nt,it.width,it.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,yt,Ft,it.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,it.width,it.height,0,yt,Ft,it.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ot&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Nt,Vt[0].width,Vt[0].height,it.depth);for(let Q=0,j=Vt.length;Q<j;Q++)if(Mt=Vt[Q],v.format!==$e)if(yt!==null)if(Ot){if(D)if(v.layerUpdates.size>0){let mt=Ul(Mt.width,Mt.height,v.format,v.type);for(let xt of v.layerUpdates){let Wt=Mt.data.subarray(xt*mt/Mt.data.BYTES_PER_ELEMENT,(xt+1)*mt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,xt,Mt.width,Mt.height,1,yt,Wt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Mt.width,Mt.height,it.depth,yt,Mt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Nt,Mt.width,Mt.height,it.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Mt.width,Mt.height,it.depth,yt,Ft,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Nt,Mt.width,Mt.height,it.depth,0,yt,Ft,Mt.data)}else{Ot&&ee&&e.texStorage2D(i.TEXTURE_2D,_t,Nt,Vt[0].width,Vt[0].height);for(let Q=0,j=Vt.length;Q<j;Q++)Mt=Vt[Q],v.format!==$e?yt!==null?Ot?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Mt.width,Mt.height,yt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Nt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?D&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Mt.width,Mt.height,yt,Ft,Mt.data):e.texImage2D(i.TEXTURE_2D,Q,Nt,Mt.width,Mt.height,0,yt,Ft,Mt.data)}else if(v.isDataArrayTexture)if(Ot){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Nt,it.width,it.height,it.depth),D)if(v.layerUpdates.size>0){let Q=Ul(it.width,it.height,v.format,v.type);for(let j of v.layerUpdates){let mt=it.data.subarray(j*Q/it.data.BYTES_PER_ELEMENT,(j+1)*Q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,yt,Ft,mt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,Ft,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,it.width,it.height,it.depth,0,yt,Ft,it.data);else if(v.isData3DTexture)Ot?(ee&&e.texStorage3D(i.TEXTURE_3D,_t,Nt,it.width,it.height,it.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,Ft,it.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,it.width,it.height,it.depth,0,yt,Ft,it.data);else if(v.isFramebufferTexture){if(ee)if(Ot)e.texStorage2D(i.TEXTURE_2D,_t,Nt,it.width,it.height);else{let Q=it.width,j=it.height;for(let mt=0;mt<_t;mt++)e.texImage2D(i.TEXTURE_2D,mt,Nt,Q,j,0,yt,Ft,null),Q>>=1,j>>=1}}else if(Vt.length>0){if(Ot&&ee){let Q=At(Vt[0]);e.texStorage2D(i.TEXTURE_2D,_t,Nt,Q.width,Q.height)}for(let Q=0,j=Vt.length;Q<j;Q++)Mt=Vt[Q],Ot?D&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,yt,Ft,Mt):e.texImage2D(i.TEXTURE_2D,Q,Nt,yt,Ft,Mt);v.generateMipmaps=!1}else if(Ot){if(ee){let Q=At(it);e.texStorage2D(i.TEXTURE_2D,_t,Nt,Q.width,Q.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Ft,it)}else e.texImage2D(i.TEXTURE_2D,0,Nt,yt,Ft,it);m(v)&&p(W),vt.__version=X.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Y(b,v,I){if(v.image.length!==6)return;let W=It(b,v),q=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+I);let X=n.get(q);if(q.version!==X.__version||W===!0){e.activeTexture(i.TEXTURE0+I);let vt=Kt.getPrimaries(Kt.workingColorSpace),rt=v.colorSpace===In?null:Kt.getPrimaries(v.colorSpace),ft=v.colorSpace===In||vt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Rt=v.isCompressedTexture||v.image[0].isCompressedTexture,it=v.image[0]&&v.image[0].isDataTexture,yt=[];for(let j=0;j<6;j++)!Rt&&!it?yt[j]=x(v.image[j],!0,s.maxCubemapSize):yt[j]=it?v.image[j].image:v.image[j],yt[j]=bt(v,yt[j]);let Ft=yt[0],Nt=r.convert(v.format,v.colorSpace),Mt=r.convert(v.type),Vt=M(v.internalFormat,Nt,Mt,v.colorSpace),Ot=v.isVideoTexture!==!0,ee=X.__version===void 0||W===!0,D=q.dataReady,_t=y(v,Ft);lt(i.TEXTURE_CUBE_MAP,v);let Q;if(Rt){Ot&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Vt,Ft.width,Ft.height);for(let j=0;j<6;j++){Q=yt[j].mipmaps;for(let mt=0;mt<Q.length;mt++){let xt=Q[mt];v.format!==$e?Nt!==null?Ot?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,0,0,xt.width,xt.height,Nt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,Vt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,0,0,xt.width,xt.height,Nt,Mt,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,Vt,xt.width,xt.height,0,Nt,Mt,xt.data)}}}else{if(Q=v.mipmaps,Ot&&ee){Q.length>0&&_t++;let j=At(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Vt,j.width,j.height)}for(let j=0;j<6;j++)if(it){Ot?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,yt[j].width,yt[j].height,Nt,Mt,yt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Vt,yt[j].width,yt[j].height,0,Nt,Mt,yt[j].data);for(let mt=0;mt<Q.length;mt++){let Wt=Q[mt].image[j].image;Ot?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,0,0,Wt.width,Wt.height,Nt,Mt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,Vt,Wt.width,Wt.height,0,Nt,Mt,Wt.data)}}else{Ot?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Nt,Mt,yt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Vt,Nt,Mt,yt[j]);for(let mt=0;mt<Q.length;mt++){let xt=Q[mt];Ot?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,0,0,Nt,Mt,xt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,Vt,Nt,Mt,xt.image[j])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),X.__version=q.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function $(b,v,I,W,q,X){let vt=r.convert(I.format,I.colorSpace),rt=r.convert(I.type),ft=M(I.internalFormat,vt,rt,I.colorSpace);if(!n.get(v).__hasExternalTextures){let it=Math.max(1,v.width>>X),yt=Math.max(1,v.height>>X);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?e.texImage3D(q,X,ft,it,yt,v.depth,0,vt,rt,null):e.texImage2D(q,X,ft,it,yt,0,vt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),tt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,q,n.get(I).__webglTexture,0,st(v)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,q,n.get(I).__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(b,v,I){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){let W=v.depthTexture,q=W&&W.isDepthTexture?W.type:null,X=_(v.stencilBuffer,q),vt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=st(v);tt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,X,v.width,v.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,b)}else{let W=v.textures;for(let q=0;q<W.length;q++){let X=W[q],vt=r.convert(X.format,X.colorSpace),rt=r.convert(X.type),ft=M(X.internalFormat,vt,rt,X.colorSpace),Rt=st(v);I&&tt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,ft,v.width,v.height):tt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,ft,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ft,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H(v.depthTexture,0);let W=n.get(v.depthTexture).__webglTexture,q=st(v);if(v.depthTexture.format===Pi)tt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0);else if(v.depthTexture.format===Oi)tt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Pt(b){let v=n.get(b),I=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){let W=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",q)};W.addEventListener("dispose",q),v.__depthDisposeCallback=q}v.__boundDepthTexture=W}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");ht(v.__webglFramebuffer,b)}else if(I){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=i.createRenderbuffer(),pt(v.__webglDepthbuffer[W],b,!1);else{let q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),pt(v.__webglDepthbuffer,b,!1);else{let W=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(b,v,I){let W=n.get(b);v!==void 0&&$(W.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Pt(b)}function Lt(b){let v=b.texture,I=n.get(b),W=n.get(v);b.addEventListener("dispose",C);let q=b.textures,X=b.isWebGLCubeRenderTarget===!0,vt=q.length>1;if(vt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=v.version,o.memory.textures++),X){I.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[rt]=[];for(let ft=0;ft<v.mipmaps.length;ft++)I.__webglFramebuffer[rt][ft]=i.createFramebuffer()}else I.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)I.__webglFramebuffer[rt]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(vt)for(let rt=0,ft=q.length;rt<ft;rt++){let Rt=n.get(q[rt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&tt(b)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let rt=0;rt<q.length;rt++){let ft=q[rt];I.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[rt]);let Rt=r.convert(ft.format,ft.colorSpace),it=r.convert(ft.type),yt=M(ft.internalFormat,Rt,it,ft.colorSpace,b.isXRRenderTarget===!0),Ft=st(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,yt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,I.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(I.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),lt(i.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)$(I.__webglFramebuffer[rt][ft],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft);else $(I.__webglFramebuffer[rt],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let rt=0,ft=q.length;rt<ft;rt++){let Rt=q[rt],it=n.get(Rt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),lt(i.TEXTURE_2D,Rt),$(I.__webglFramebuffer,b,Rt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),m(Rt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(rt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,W.__webglTexture),lt(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)$(I.__webglFramebuffer[ft],b,v,i.COLOR_ATTACHMENT0,rt,ft);else $(I.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,rt,0);m(v)&&p(rt),e.unbindTexture()}b.depthBuffer&&Pt(b)}function zt(b){let v=b.textures;for(let I=0,W=v.length;I<W;I++){let q=v[I];if(m(q)){let X=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(q).__webglTexture;e.bindTexture(X,vt),p(X),e.unbindTexture()}}}let K=[],T=[];function ct(b){if(b.samples>0){if(tt(b)===!1){let v=b.textures,I=b.width,W=b.height,q=i.COLOR_BUFFER_BIT,X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(b),rt=v.length>1;if(rt)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);let Rt=n.get(v[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,I,W,0,0,I,W,q,i.NEAREST),c===!0&&(K.length=0,T.length=0,K.push(i.COLOR_ATTACHMENT0+ft),b.depthBuffer&&b.resolveDepthBuffer===!1&&(K.push(X),T.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);let Rt=n.get(v[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function st(b){return Math.min(s.maxSamples,b.samples)}function tt(b){let v=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ut(b){let v=o.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function bt(b,v){let I=b.colorSpace,W=b.format,q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||I!==zn&&I!==In&&(Kt.getTransfer(I)===ie?(W!==$e||q!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),v}function At(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=w,this.setTexture2D=H,this.setTexture2DArray=J,this.setTexture3D=O,this.setTextureCube=Z,this.rebindTextures=Bt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=$,this.useMultisampledRTT=tt}function Pg(i,t){function e(n,s=In){let r,o=Kt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===dc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jl)return i.BYTE;if(n===$l)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===fc)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===Ts)return i.HALF_FLOAT;if(n===eh)return i.ALPHA;if(n===nh)return i.RGB;if(n===$e)return i.RGBA;if(n===ih)return i.LUMINANCE;if(n===sh)return i.LUMINANCE_ALPHA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===mc)return i.RED;if(n===gc)return i.RED_INTEGER;if(n===rh)return i.RG;if(n===Ac)return i.RG_INTEGER;if(n===vc)return i.RGBA_INTEGER;if(n===cr||n===lr||n===hr||n===ur)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===ta||n===ea||n===na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ia||n===sa||n===ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ia||n===sa)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ra)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===fa||n===da||n===pa||n===ma||n===ga||n===Aa||n===va||n===_a)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===aa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ca)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===la)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ha)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ua)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===da)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ma)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ga)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Aa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===va)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fr||n===xa||n===ya)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fr)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oh||n===Ma||n===wa||n===Ea)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ea)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ha=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ye=class extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ig={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ig)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lg=`
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

}`,ka=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ae({vertexShader:Dg,fragmentShader:Lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ga=class extends Nn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null,x=new ka,m=e.getContextAttributes(),p=null,M=null,_=[],y=[],B=new at,C=null,S=new Be;S.layers.enable(1),S.viewport=new ae;let P=new Be;P.layers.enable(2),P.viewport=new ae;let G=[S,P],A=new Ha;A.layers.enable(1),A.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=_[Y];return $===void 0&&($=new hs,_[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=_[Y];return $===void 0&&($=new hs,_[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=_[Y];return $===void 0&&($=new hs,_[Y]=$),$.getHandSpace()};function F(Y){let $=y.indexOf(Y.inputSource);if($===-1)return;let pt=_[$];pt!==void 0&&(pt.update(Y.inputSource,Y.frame,l||o),pt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let Y=0;Y<_.length;Y++){let $=y[Y];$!==null&&(y[Y]=null,_[Y].disconnect($))}w=null,z=null,x.reset(),t.setRenderTarget(p),d=null,u=null,f=null,s=null,M=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){let $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new xn(d.framebufferWidth,d.framebufferHeight,{format:$e,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,pt=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=m.stencil?Oi:Pi,pt=m.stencil?Ni:$n);let Pt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(Pt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new xn(u.textureWidth,u.textureHeight,{format:$e,type:_n,depthTexture:new Br(u.textureWidth,u.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(Y){for(let $=0;$<Y.removed.length;$++){let pt=Y.removed[$],ht=y.indexOf(pt);ht>=0&&(y[ht]=null,_[ht].disconnect(pt))}for(let $=0;$<Y.added.length;$++){let pt=Y.added[$],ht=y.indexOf(pt);if(ht===-1){for(let Bt=0;Bt<_.length;Bt++)if(Bt>=y.length){y.push(pt),ht=Bt;break}else if(y[Bt]===null){y[Bt]=pt,ht=Bt;break}if(ht===-1)break}let Pt=_[ht];Pt&&Pt.connect(pt)}}let O=new R,Z=new R;function L(Y,$,pt){O.setFromMatrixPosition($.matrixWorld),Z.setFromMatrixPosition(pt.matrixWorld);let ht=O.distanceTo(Z),Pt=$.projectionMatrix.elements,Bt=pt.projectionMatrix.elements,Lt=Pt[14]/(Pt[10]-1),zt=Pt[14]/(Pt[10]+1),K=(Pt[9]+1)/Pt[5],T=(Pt[9]-1)/Pt[5],ct=(Pt[8]-1)/Pt[0],st=(Bt[8]+1)/Bt[0],tt=Lt*ct,ut=Lt*st,bt=ht/(-ct+st),At=bt*-ct;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(At),Y.translateZ(bt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pt[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let b=Lt+bt,v=zt+bt,I=tt-At,W=ut+(ht-At),q=K*zt/v*b,X=T*zt/v*b;Y.projectionMatrix.makePerspective(I,W,q,X,b,v),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function nt(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let $=Y.near,pt=Y.far;x.texture!==null&&(x.depthNear>0&&($=x.depthNear),x.depthFar>0&&(pt=x.depthFar)),A.near=P.near=S.near=$,A.far=P.far=S.far=pt,(w!==A.near||z!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),w=A.near,z=A.far);let ht=Y.parent,Pt=A.cameras;nt(A,ht);for(let Bt=0;Bt<Pt.length;Bt++)nt(Pt[Bt],ht);Pt.length===2?L(A,S,P):A.projectionMatrix.copy(S.projectionMatrix),et(Y,A,ht)};function et(Y,$,pt){pt===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(pt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ms*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(A)};let lt=null;function It(Y,$){if(h=$.getViewerPose(l||o),g=$,h!==null){let pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let ht=!1;pt.length!==A.cameras.length&&(A.cameras.length=0,ht=!0);for(let Bt=0;Bt<pt.length;Bt++){let Lt=pt[Bt],zt=null;if(d!==null)zt=d.getViewport(Lt);else{let T=f.getViewSubImage(u,Lt);zt=T.viewport,Bt===0&&(t.setRenderTargetTextures(M,T.colorTexture,u.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(M))}let K=G[Bt];K===void 0&&(K=new Be,K.layers.enable(Bt),K.viewport=new ae,G[Bt]=K),K.matrix.fromArray(Lt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Lt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(zt.x,zt.y,zt.width,zt.height),Bt===0&&(A.matrix.copy(K.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ht===!0&&A.cameras.push(K)}let Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){let Bt=f.getDepthInformation(pt[0]);Bt&&Bt.isValid&&Bt.texture&&x.init(t,Bt,s.renderState)}}for(let pt=0;pt<_.length;pt++){let ht=y[pt],Pt=_[pt];ht!==null&&Pt!==void 0&&Pt.update(ht,$,l||o)}lt&&lt(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let Gt=new fh;Gt.setAnimationLoop(It),this.setAnimationLoop=function(Y){lt=Y},this.dispose=function(){}}},Yn=new Qe,Ug=new Xt;function Fg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),_=M.envMap,y=M.envMapRotation;_&&(m.envMap.value=_,Yn.copy(y),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(Yn)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ng(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,_){let y=_.program;n.uniformBlockBinding(M,y)}function l(M,_){let y=s[M.id];y===void 0&&(g(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",m));let B=_.program;n.updateUBOMapping(M,B);let C=t.render.frame;r[M.id]!==C&&(u(M),r[M.id]=C)}function h(M){let _=f();M.__bindingPointIndex=_;let y=i.createBuffer(),B=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,B,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let _=s[M.id],y=M.uniforms,B=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let C=0,S=y.length;C<S;C++){let P=Array.isArray(y[C])?y[C]:[y[C]];for(let G=0,A=P.length;G<A;G++){let w=P[G];if(d(w,C,G,B)===!0){let z=w.__offset,F=Array.isArray(w.value)?w.value:[w.value],H=0;for(let J=0;J<F.length;J++){let O=F[J],Z=x(O);typeof O=="number"||typeof O=="boolean"?(w.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,z+H,w.__data)):O.isMatrix3?(w.__data[0]=O.elements[0],w.__data[1]=O.elements[1],w.__data[2]=O.elements[2],w.__data[3]=0,w.__data[4]=O.elements[3],w.__data[5]=O.elements[4],w.__data[6]=O.elements[5],w.__data[7]=0,w.__data[8]=O.elements[6],w.__data[9]=O.elements[7],w.__data[10]=O.elements[8],w.__data[11]=0):(O.toArray(w.__data,H),H+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,_,y,B){let C=M.value,S=_+"_"+y;if(B[S]===void 0)return typeof C=="number"||typeof C=="boolean"?B[S]=C:B[S]=C.clone(),!0;{let P=B[S];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return B[S]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(M){let _=M.uniforms,y=0,B=16;for(let S=0,P=_.length;S<P;S++){let G=Array.isArray(_[S])?_[S]:[_[S]];for(let A=0,w=G.length;A<w;A++){let z=G[A],F=Array.isArray(z.value)?z.value:[z.value];for(let H=0,J=F.length;H<J;H++){let O=F[H],Z=x(O),L=y%B,nt=L%Z.boundary,et=L+nt;y+=nt,et!==0&&B-et<Z.storage&&(y+=B-et),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=Z.storage}}}let C=y%B;return C>0&&(y+=B-C),M.__size=y,M.__cache={},this}function x(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){let _=M.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Pr=class{constructor(t={}){let{canvas:e=zu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this.toneMapping=Un,this.toneMappingExposure=1;let _=this,y=!1,B=0,C=0,S=null,P=-1,G=null,A=new ae,w=new ae,z=null,F=new Et(0),H=0,J=e.width,O=e.height,Z=1,L=null,nt=null,et=new ae(0,0,J,O),lt=new ae(0,0,J,O),It=!1,Gt=new gs,Y=!1,$=!1,pt=new Xt,ht=new Xt,Pt=new R,Bt=new ae,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function K(){return S===null?Z:1}let T=n;function ct(E,U){return e.getContext(E,U)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),T===null){let U="webgl2";if(T=ct(U,E),T===null)throw ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let st,tt,ut,bt,At,b,v,I,W,q,X,vt,rt,ft,Rt,it,yt,Ft,Nt,Mt,Vt,Ot,ee,D;function _t(){st=new $p(T),st.init(),Ot=new Pg(T,st),tt=new Yp(T,st,t,Ot),ut=new Cg(T),tt.reverseDepthBuffer&&ut.buffers.depth.setReversed(!0),bt=new nm(T),At=new mg,b=new Bg(T,st,ut,At,tt,Ot,bt),v=new Jp(_),I=new jp(_),W=new lf(T),ee=new Wp(T,W),q=new tm(T,W,bt,ee),X=new sm(T,q,W,bt),Nt=new im(T,tt,b),it=new qp(At),vt=new pg(_,v,I,st,tt,ee,it),rt=new Fg(_,At),ft=new Ag,Rt=new wg(st),Ft=new Qp(_,v,I,ut,X,u,c),yt=new bg(_,X,tt),D=new Ng(T,bt,tt,ut),Mt=new Xp(T,st,bt),Vt=new em(T,st,bt),bt.programs=vt.programs,_.capabilities=tt,_.extensions=st,_.properties=At,_.renderLists=ft,_.shadowMap=yt,_.state=ut,_.info=bt}_t();let Q=new Ga(_,T);this.xr=Q,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(J,O,!1))},this.getSize=function(E){return E.set(J,O)},this.setSize=function(E,U,k=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,O=U,e.width=Math.floor(E*Z),e.height=Math.floor(U*Z),k===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(J*Z,O*Z).floor()},this.setDrawingBufferSize=function(E,U,k){J=E,O=U,Z=k,e.width=Math.floor(E*k),e.height=Math.floor(U*k),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(et)},this.setViewport=function(E,U,k,V){E.isVector4?et.set(E.x,E.y,E.z,E.w):et.set(E,U,k,V),ut.viewport(A.copy(et).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(lt)},this.setScissor=function(E,U,k,V){E.isVector4?lt.set(E.x,E.y,E.z,E.w):lt.set(E,U,k,V),ut.scissor(w.copy(lt).multiplyScalar(Z).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(E){ut.setScissorTest(It=E)},this.setOpaqueSort=function(E){L=E},this.setTransparentSort=function(E){nt=E},this.getClearColor=function(E){return E.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(E=!0,U=!0,k=!0){let V=0;if(E){let N=!1;if(S!==null){let ot=S.texture.format;N=ot===vc||ot===Ac||ot===gc}if(N){let ot=S.texture.type,gt=ot===_n||ot===$n||ot===ps||ot===Ni||ot===dc||ot===pc,wt=Ft.getClearColor(),St=Ft.getClearAlpha(),Dt=wt.r,Ut=wt.g,Tt=wt.b;gt?(d[0]=Dt,d[1]=Ut,d[2]=Tt,d[3]=St,T.clearBufferuiv(T.COLOR,0,d)):(g[0]=Dt,g[1]=Ut,g[2]=Tt,g[3]=St,T.clearBufferiv(T.COLOR,0,g))}else V|=T.COLOR_BUFFER_BIT}U&&(V|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),ft.dispose(),Rt.dispose(),At.dispose(),v.dispose(),I.dispose(),X.dispose(),ee.dispose(),D.dispose(),vt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Dc),Q.removeEventListener("sessionend",Lc),kn.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let E=bt.autoReset,U=yt.enabled,k=yt.autoUpdate,V=yt.needsUpdate,N=yt.type;_t(),bt.autoReset=E,yt.enabled=U,yt.autoUpdate=k,yt.needsUpdate=V,yt.type=N}function xt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Wt(E){let U=E.target;U.removeEventListener("dispose",Wt),he(U)}function he(E){Ie(E),At.remove(E)}function Ie(E){let U=At.get(E).programs;U!==void 0&&(U.forEach(function(k){vt.releaseProgram(k)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,k,V,N,ot){U===null&&(U=Lt);let gt=N.isMesh&&N.matrixWorld.determinant()<0,wt=Lh(E,U,k,V,N);ut.setMaterial(V,gt);let St=k.index,Dt=1;if(V.wireframe===!0){if(St=q.getWireframeAttribute(k),St===void 0)return;Dt=2}let Ut=k.drawRange,Tt=k.attributes.position,Zt=Ut.start*Dt,ne=(Ut.start+Ut.count)*Dt;ot!==null&&(Zt=Math.max(Zt,ot.start*Dt),ne=Math.min(ne,(ot.start+ot.count)*Dt)),St!==null?(Zt=Math.max(Zt,0),ne=Math.min(ne,St.count)):Tt!=null&&(Zt=Math.max(Zt,0),ne=Math.min(ne,Tt.count));let oe=ne-Zt;if(oe<0||oe===1/0)return;ee.setup(N,V,wt,k,St);let Ne,qt=Mt;if(St!==null&&(Ne=W.get(St),qt=Vt,qt.setIndex(Ne)),N.isMesh)V.wireframe===!0?(ut.setLineWidth(V.wireframeLinewidth*K()),qt.setMode(T.LINES)):qt.setMode(T.TRIANGLES);else if(N.isLine){let Ct=V.linewidth;Ct===void 0&&(Ct=1),ut.setLineWidth(Ct*K()),N.isLineSegments?qt.setMode(T.LINES):N.isLineLoop?qt.setMode(T.LINE_LOOP):qt.setMode(T.LINE_STRIP)}else N.isPoints?qt.setMode(T.POINTS):N.isSprite&&qt.setMode(T.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ct=N._multiDrawStarts,_e=N._multiDrawCounts,Jt=N._multiDrawCount,Ye=St?W.get(St).bytesPerElement:1,ci=At.get(V).currentProgram.getUniforms();for(let Oe=0;Oe<Jt;Oe++)ci.setValue(T,"_gl_DrawID",Oe),qt.render(Ct[Oe]/Ye,_e[Oe])}else if(N.isInstancedMesh)qt.renderInstances(Zt,oe,N.count);else if(k.isInstancedBufferGeometry){let Ct=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,_e=Math.min(k.instanceCount,Ct);qt.renderInstances(Zt,oe,_e)}else qt.render(Zt,oe)};function Yt(E,U,k){E.transparent===!0&&E.side===An&&E.forceSinglePass===!1?(E.side=ge,E.needsUpdate=!0,Bs(E,U,k),E.side=Fn,E.needsUpdate=!0,Bs(E,U,k),E.side=An):Bs(E,U,k)}this.compile=function(E,U,k=null){k===null&&(k=E),m=Rt.get(k),m.init(U),M.push(m),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),E!==k&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let V=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ot=N.material;if(ot)if(Array.isArray(ot))for(let gt=0;gt<ot.length;gt++){let wt=ot[gt];Yt(wt,k,N),V.add(wt)}else Yt(ot,k,N),V.add(ot)}),M.pop(),m=null,V},this.compileAsync=function(E,U,k=null){let V=this.compile(E,U,k);return new Promise(N=>{function ot(){if(V.forEach(function(gt){At.get(gt).currentProgram.isReady()&&V.delete(gt)}),V.size===0){N(E);return}setTimeout(ot,10)}st.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let De=null;function ln(E){De&&De(E)}function Dc(){kn.stop()}function Lc(){kn.start()}let kn=new fh;kn.setAnimationLoop(ln),typeof self!="undefined"&&kn.setContext(self),this.setAnimationLoop=function(E){De=E,Q.setAnimationLoop(E),E===null?kn.stop():kn.start()},Q.addEventListener("sessionstart",Dc),Q.addEventListener("sessionend",Lc),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(U),U=Q.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,U,S),m=Rt.get(E,M.length),m.init(U),M.push(m),ht.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Gt.setFromProjectionMatrix(ht),$=this.localClippingEnabled,Y=it.init(this.clippingPlanes,$),x=ft.get(E,p.length),x.init(),p.push(x),Q.enabled===!0&&Q.isPresenting===!0){let ot=_.xr.getDepthSensingMesh();ot!==null&&eo(ot,U,-1/0,_.sortObjects)}eo(E,U,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(L,nt),zt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,zt&&Ft.addToRenderList(x,E),this.info.render.frame++,Y===!0&&it.beginShadows();let k=m.state.shadowsArray;yt.render(k,E,U),Y===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=x.opaque,N=x.transmissive;if(m.setupLights(),U.isArrayCamera){let ot=U.cameras;if(N.length>0)for(let gt=0,wt=ot.length;gt<wt;gt++){let St=ot[gt];Fc(V,N,E,St)}zt&&Ft.render(E);for(let gt=0,wt=ot.length;gt<wt;gt++){let St=ot[gt];Uc(x,E,St,St.viewport)}}else N.length>0&&Fc(V,N,E,U),zt&&Ft.render(E),Uc(x,E,U);S!==null&&(b.updateMultisampleRenderTarget(S),b.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(_,E,U),ee.resetDefaultState(),P=-1,G=null,M.pop(),M.length>0?(m=M[M.length-1],Y===!0&&it.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function eo(E,U,k,V){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Gt.intersectsSprite(E)){V&&Bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ht);let gt=X.update(E),wt=E.material;wt.visible&&x.push(E,gt,wt,k,Bt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Gt.intersectsObject(E))){let gt=X.update(E),wt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Bt.copy(E.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Bt.copy(gt.boundingSphere.center)),Bt.applyMatrix4(E.matrixWorld).applyMatrix4(ht)),Array.isArray(wt)){let St=gt.groups;for(let Dt=0,Ut=St.length;Dt<Ut;Dt++){let Tt=St[Dt],Zt=wt[Tt.materialIndex];Zt&&Zt.visible&&x.push(E,gt,Zt,k,Bt.z,Tt)}}else wt.visible&&x.push(E,gt,wt,k,Bt.z,null)}}let ot=E.children;for(let gt=0,wt=ot.length;gt<wt;gt++)eo(ot[gt],U,k,V)}function Uc(E,U,k,V){let N=E.opaque,ot=E.transmissive,gt=E.transparent;m.setupLightsView(k),Y===!0&&it.setGlobalState(_.clippingPlanes,k),V&&ut.viewport(A.copy(V)),N.length>0&&Rs(N,U,k),ot.length>0&&Rs(ot,U,k),gt.length>0&&Rs(gt,U,k),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Fc(E,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new xn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Ts:_n,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let ot=m.state.transmissionRenderTarget[V.id],gt=V.viewport||A;ot.setSize(gt.z,gt.w);let wt=_.getRenderTarget();_.setRenderTarget(ot),_.getClearColor(F),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),zt&&Ft.render(k);let St=_.toneMapping;_.toneMapping=Un;let Dt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),Y===!0&&it.setGlobalState(_.clippingPlanes,V),Rs(E,k,V),b.updateMultisampleRenderTarget(ot),b.updateRenderTargetMipmap(ot),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Tt=0,Zt=U.length;Tt<Zt;Tt++){let ne=U[Tt],oe=ne.object,Ne=ne.geometry,qt=ne.material,Ct=ne.group;if(qt.side===An&&oe.layers.test(V.layers)){let _e=qt.side;qt.side=ge,qt.needsUpdate=!0,Nc(oe,k,V,Ne,qt,Ct),qt.side=_e,qt.needsUpdate=!0,Ut=!0}}Ut===!0&&(b.updateMultisampleRenderTarget(ot),b.updateRenderTargetMipmap(ot))}_.setRenderTarget(wt),_.setClearColor(F,H),Dt!==void 0&&(V.viewport=Dt),_.toneMapping=St}function Rs(E,U,k){let V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ot=E.length;N<ot;N++){let gt=E[N],wt=gt.object,St=gt.geometry,Dt=V===null?gt.material:V,Ut=gt.group;wt.layers.test(k.layers)&&Nc(wt,U,k,St,Dt,Ut)}}function Nc(E,U,k,V,N,ot){E.onBeforeRender(_,U,k,V,N,ot),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(_,U,k,V,E,ot),N.transparent===!0&&N.side===An&&N.forceSinglePass===!1?(N.side=ge,N.needsUpdate=!0,_.renderBufferDirect(k,U,V,N,E,ot),N.side=Fn,N.needsUpdate=!0,_.renderBufferDirect(k,U,V,N,E,ot),N.side=An):_.renderBufferDirect(k,U,V,N,E,ot),E.onAfterRender(_,U,k,V,N,ot)}function Bs(E,U,k){U.isScene!==!0&&(U=Lt);let V=At.get(E),N=m.state.lights,ot=m.state.shadowsArray,gt=N.state.version,wt=vt.getParameters(E,N.state,ot,U,k),St=vt.getProgramCacheKey(wt),Dt=V.programs;V.environment=E.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(E.isMeshStandardMaterial?I:v).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",Wt),Dt=new Map,V.programs=Dt);let Ut=Dt.get(St);if(Ut!==void 0){if(V.currentProgram===Ut&&V.lightsStateVersion===gt)return zc(E,wt),Ut}else wt.uniforms=vt.getUniforms(E),E.onBeforeCompile(wt,_),Ut=vt.acquireProgram(wt,St),Dt.set(St,Ut),V.uniforms=wt.uniforms;let Tt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Tt.clippingPlanes=it.uniform),zc(E,wt),V.needsLights=Fh(E),V.lightsStateVersion=gt,V.needsLights&&(Tt.ambientLightColor.value=N.state.ambient,Tt.lightProbe.value=N.state.probe,Tt.directionalLights.value=N.state.directional,Tt.directionalLightShadows.value=N.state.directionalShadow,Tt.spotLights.value=N.state.spot,Tt.spotLightShadows.value=N.state.spotShadow,Tt.rectAreaLights.value=N.state.rectArea,Tt.ltc_1.value=N.state.rectAreaLTC1,Tt.ltc_2.value=N.state.rectAreaLTC2,Tt.pointLights.value=N.state.point,Tt.pointLightShadows.value=N.state.pointShadow,Tt.hemisphereLights.value=N.state.hemi,Tt.directionalShadowMap.value=N.state.directionalShadowMap,Tt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Tt.spotShadowMap.value=N.state.spotShadowMap,Tt.spotLightMatrix.value=N.state.spotLightMatrix,Tt.spotLightMap.value=N.state.spotLightMap,Tt.pointShadowMap.value=N.state.pointShadowMap,Tt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ut,V.uniformsList=null,Ut}function Oc(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Di.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function zc(E,U){let k=At.get(E);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Lh(E,U,k,V,N){U.isScene!==!0&&(U=Lt),b.resetTextureUnits();let ot=U.fog,gt=V.isMeshStandardMaterial?U.environment:null,wt=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:zn,St=(V.isMeshStandardMaterial?I:v).get(V.envMap||gt),Dt=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ut=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Tt=!!k.morphAttributes.position,Zt=!!k.morphAttributes.normal,ne=!!k.morphAttributes.color,oe=Un;V.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(oe=_.toneMapping);let Ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,qt=Ne!==void 0?Ne.length:0,Ct=At.get(V),_e=m.state.lights;if(Y===!0&&($===!0||E!==G)){let Ge=E===G&&V.id===P;it.setState(V,E,Ge)}let Jt=!1;V.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==_e.state.version||Ct.outputColorSpace!==wt||N.isBatchedMesh&&Ct.batching===!1||!N.isBatchedMesh&&Ct.batching===!0||N.isBatchedMesh&&Ct.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ct.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ct.instancing===!1||!N.isInstancedMesh&&Ct.instancing===!0||N.isSkinnedMesh&&Ct.skinning===!1||!N.isSkinnedMesh&&Ct.skinning===!0||N.isInstancedMesh&&Ct.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ct.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ct.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ct.instancingMorph===!1&&N.morphTexture!==null||Ct.envMap!==St||V.fog===!0&&Ct.fog!==ot||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==it.numPlanes||Ct.numIntersection!==it.numIntersection)||Ct.vertexAlphas!==Dt||Ct.vertexTangents!==Ut||Ct.morphTargets!==Tt||Ct.morphNormals!==Zt||Ct.morphColors!==ne||Ct.toneMapping!==oe||Ct.morphTargetsCount!==qt)&&(Jt=!0):(Jt=!0,Ct.__version=V.version);let Ye=Ct.currentProgram;Jt===!0&&(Ye=Bs(V,U,N));let ci=!1,Oe=!1,no=!1,ce=Ye.getUniforms(),Sn=Ct.uniforms;if(ut.useProgram(Ye.program)&&(ci=!0,Oe=!0,no=!0),V.id!==P&&(P=V.id,Oe=!0),ci||G!==E){tt.reverseDepthBuffer?(pt.copy(E.projectionMatrix),ku(pt),Gu(pt),ce.setValue(T,"projectionMatrix",pt)):ce.setValue(T,"projectionMatrix",E.projectionMatrix),ce.setValue(T,"viewMatrix",E.matrixWorldInverse);let Ge=ce.map.cameraPosition;Ge!==void 0&&Ge.setValue(T,Pt.setFromMatrixPosition(E.matrixWorld)),tt.logarithmicDepthBuffer&&ce.setValue(T,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ce.setValue(T,"isOrthographic",E.isOrthographicCamera===!0),G!==E&&(G=E,Oe=!0,no=!0)}if(N.isSkinnedMesh){ce.setOptional(T,N,"bindMatrix"),ce.setOptional(T,N,"bindMatrixInverse");let Ge=N.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),ce.setValue(T,"boneTexture",Ge.boneTexture,b))}N.isBatchedMesh&&(ce.setOptional(T,N,"batchingTexture"),ce.setValue(T,"batchingTexture",N._matricesTexture,b),ce.setOptional(T,N,"batchingIdTexture"),ce.setValue(T,"batchingIdTexture",N._indirectTexture,b),ce.setOptional(T,N,"batchingColorTexture"),N._colorsTexture!==null&&ce.setValue(T,"batchingColorTexture",N._colorsTexture,b));let io=k.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0)&&Nt.update(N,k,Ye),(Oe||Ct.receiveShadow!==N.receiveShadow)&&(Ct.receiveShadow=N.receiveShadow,ce.setValue(T,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Sn.envMap.value=St,Sn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Sn.envMapIntensity.value=U.environmentIntensity),Oe&&(ce.setValue(T,"toneMappingExposure",_.toneMappingExposure),Ct.needsLights&&Uh(Sn,no),ot&&V.fog===!0&&rt.refreshFogUniforms(Sn,ot),rt.refreshMaterialUniforms(Sn,V,Z,O,m.state.transmissionRenderTarget[E.id]),Di.upload(T,Oc(Ct),Sn,b)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Di.upload(T,Oc(Ct),Sn,b),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ce.setValue(T,"center",N.center),ce.setValue(T,"modelViewMatrix",N.modelViewMatrix),ce.setValue(T,"normalMatrix",N.normalMatrix),ce.setValue(T,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Ge=V.uniformsGroups;for(let so=0,Nh=Ge.length;so<Nh;so++){let Hc=Ge[so];D.update(Hc,Ye),D.bind(Hc,Ye)}}return Ye}function Uh(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Fh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,U,k){At.get(E.texture).__webglTexture=U,At.get(E.depthTexture).__webglTexture=k;let V=At.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){let k=At.get(E);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,k=0){S=E,B=U,C=k;let V=!0,N=null,ot=!1,gt=!1;if(E){let St=At.get(E);if(St.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(T.FRAMEBUFFER,null),V=!1;else if(St.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(St.__hasExternalTextures)b.rebindTextures(E,At.get(E.texture).__webglTexture,At.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Tt=E.depthTexture;if(St.__boundDepthTexture!==Tt){if(Tt!==null&&At.has(Tt)&&(E.width!==Tt.image.width||E.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}let Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(gt=!0);let Ut=At.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?N=Ut[U][k]:N=Ut[U],ot=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?N=At.get(E).__webglMultisampledFramebuffer:Array.isArray(Ut)?N=Ut[k]:N=Ut,A.copy(E.viewport),w.copy(E.scissor),z=E.scissorTest}else A.copy(et).multiplyScalar(Z).floor(),w.copy(lt).multiplyScalar(Z).floor(),z=It;if(ut.bindFramebuffer(T.FRAMEBUFFER,N)&&V&&ut.drawBuffers(E,N),ut.viewport(A),ut.scissor(w),ut.setScissorTest(z),ot){let St=At.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,k)}else if(gt){let St=At.get(E.texture),Dt=U||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,St.__webglTexture,k||0,Dt)}P=-1},this.readRenderTargetPixels=function(E,U,k,V,N,ot,gt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(wt=wt[gt]),wt){ut.bindFramebuffer(T.FRAMEBUFFER,wt);try{let St=E.texture,Dt=St.format,Ut=St.type;if(!tt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-V&&k>=0&&k<=E.height-N&&T.readPixels(U,k,V,N,Ot.convert(Dt),Ot.convert(Ut),ot)}finally{let St=S!==null?At.get(S).__webglFramebuffer:null;ut.bindFramebuffer(T.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(E,U,k,V,N,ot,gt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(wt=wt[gt]),wt){let St=E.texture,Dt=St.format,Ut=St.type;if(!tt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-V&&k>=0&&k<=E.height-N){ut.bindFramebuffer(T.FRAMEBUFFER,wt);let Tt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Tt),T.bufferData(T.PIXEL_PACK_BUFFER,ot.byteLength,T.STREAM_READ),T.readPixels(U,k,V,N,Ot.convert(Dt),Ot.convert(Ut),0);let Zt=S!==null?At.get(S).__webglFramebuffer:null;ut.bindFramebuffer(T.FRAMEBUFFER,Zt);let ne=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Hu(T,ne,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Tt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ot),T.deleteBuffer(Tt),T.deleteSync(ne),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,k=0){E.isTexture!==!0&&(dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);let V=Math.pow(2,-k),N=Math.floor(E.image.width*V),ot=Math.floor(E.image.height*V),gt=U!==null?U.x:0,wt=U!==null?U.y:0;b.setTexture2D(E,0),T.copyTexSubImage2D(T.TEXTURE_2D,k,0,0,gt,wt,N,ot),ut.unbindTexture()},this.copyTextureToTexture=function(E,U,k=null,V=null,N=0){E.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let ot,gt,wt,St,Dt,Ut;k!==null?(ot=k.max.x-k.min.x,gt=k.max.y-k.min.y,wt=k.min.x,St=k.min.y):(ot=E.image.width,gt=E.image.height,wt=0,St=0),V!==null?(Dt=V.x,Ut=V.y):(Dt=0,Ut=0);let Tt=Ot.convert(U.format),Zt=Ot.convert(U.type);b.setTexture2D(U,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,U.unpackAlignment);let ne=T.getParameter(T.UNPACK_ROW_LENGTH),oe=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ne=T.getParameter(T.UNPACK_SKIP_PIXELS),qt=T.getParameter(T.UNPACK_SKIP_ROWS),Ct=T.getParameter(T.UNPACK_SKIP_IMAGES),_e=E.isCompressedTexture?E.mipmaps[N]:E.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,_e.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,_e.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,wt),T.pixelStorei(T.UNPACK_SKIP_ROWS,St),E.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,N,Dt,Ut,ot,gt,Tt,Zt,_e.data):E.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,N,Dt,Ut,_e.width,_e.height,Tt,_e.data):T.texSubImage2D(T.TEXTURE_2D,N,Dt,Ut,ot,gt,Tt,Zt,_e),T.pixelStorei(T.UNPACK_ROW_LENGTH,ne),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,oe),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ne),T.pixelStorei(T.UNPACK_SKIP_ROWS,qt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ct),N===0&&U.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(E,U,k=null,V=null,N=0){E.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0);let ot,gt,wt,St,Dt,Ut,Tt,Zt,ne,oe=E.isCompressedTexture?E.mipmaps[N]:E.image;k!==null?(ot=k.max.x-k.min.x,gt=k.max.y-k.min.y,wt=k.max.z-k.min.z,St=k.min.x,Dt=k.min.y,Ut=k.min.z):(ot=oe.width,gt=oe.height,wt=oe.depth,St=0,Dt=0,Ut=0),V!==null?(Tt=V.x,Zt=V.y,ne=V.z):(Tt=0,Zt=0,ne=0);let Ne=Ot.convert(U.format),qt=Ot.convert(U.type),Ct;if(U.isData3DTexture)b.setTexture3D(U,0),Ct=T.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)b.setTexture2DArray(U,0),Ct=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,U.unpackAlignment);let _e=T.getParameter(T.UNPACK_ROW_LENGTH),Jt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ye=T.getParameter(T.UNPACK_SKIP_PIXELS),ci=T.getParameter(T.UNPACK_SKIP_ROWS),Oe=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,oe.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,oe.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,St),T.pixelStorei(T.UNPACK_SKIP_ROWS,Dt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ut),E.isDataTexture||E.isData3DTexture?T.texSubImage3D(Ct,N,Tt,Zt,ne,ot,gt,wt,Ne,qt,oe.data):U.isCompressedArrayTexture?T.compressedTexSubImage3D(Ct,N,Tt,Zt,ne,ot,gt,wt,Ne,oe.data):T.texSubImage3D(Ct,N,Tt,Zt,ne,ot,gt,wt,Ne,qt,oe),T.pixelStorei(T.UNPACK_ROW_LENGTH,_e),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Jt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ye),T.pixelStorei(T.UNPACK_SKIP_ROWS,ci),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Oe),N===0&&U.generateMipmaps&&T.generateMipmap(Ct),ut.unbindTexture()},this.initRenderTarget=function(E){At.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),ut.unbindTexture()},this.resetState=function(){B=0,C=0,S=null,ut.reset(),ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===_c?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===qr?"display-p3":"srgb"}},Ir=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Dr=class extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Lr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ba,this.updateRanges=[],this.version=0,this.uuid=sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ce=new R,As=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=je(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=je(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=je(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=je(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vs=class extends Mn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},wi,ns=new R,Ei=new R,Si=new R,bi=new at,is=new at,Ah=new Xt,js=new R,ss=new R,$s=new R,Fl=new at,Uo=new at,Nl=new at,Ur=class extends Me{constructor(t=new vs){if(super(),this.isSprite=!0,this.type="Sprite",wi===void 0){wi=new $t;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lr(e,5);wi.setIndex([0,1,2,0,2,3]),wi.setAttribute("position",new As(n,3,0,!1)),wi.setAttribute("uv",new As(n,2,3,!1))}this.geometry=wi,this.material=t,this.center=new at(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ei.setFromMatrixScale(this.matrixWorld),Ah.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Si.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ei.multiplyScalar(-Si.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;tr(js.set(-.5,-.5,0),Si,o,Ei,s,r),tr(ss.set(.5,-.5,0),Si,o,Ei,s,r),tr($s.set(.5,.5,0),Si,o,Ei,s,r),Fl.set(0,0),Uo.set(1,0),Nl.set(1,1);let a=t.ray.intersectTriangle(js,ss,$s,!1,ns);if(a===null&&(tr(ss.set(-.5,.5,0),Si,o,Ei,s,r),Uo.set(0,1),a=t.ray.intersectTriangle(js,$s,ss,!1,ns),a===null))return;let c=t.ray.origin.distanceTo(ns);c<t.near||c>t.far||e.push({distance:c,point:ns.clone(),uv:Dn.getInterpolation(ns,js,ss,$s,Fl,Uo,Nl,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function tr(i,t,e,n,s,r){bi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(is.x=r*bi.x-s*bi.y,is.y=s*bi.x+r*bi.y):is.copy(bi),i.copy(t),i.x+=is.x,i.y+=is.y,i.applyMatrix4(Ah)}var Va=class extends Fe{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ue,h=Ue,f,u){super(null,o,a,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _s=class extends le{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ti=new Xt,Ol=new Xt,er=[],zl=new yn,Og=new Xt,rs=new te,os=new On,ti=class extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _s(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Og)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ti),zl.copy(t.boundingBox).applyMatrix4(Ti),this.boundingBox.union(zl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ti),os.copy(t.boundingSphere).applyMatrix4(Ti),this.boundingSphere.union(os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),os.copy(this.boundingSphere),os.applyMatrix4(n),t.ray.intersectsSphere(os)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ti),Ol.multiplyMatrices(n,Ti),rs.matrixWorld=Ol,rs.raycast(t,er);for(let o=0,a=er.length;o<a;o++){let c=er[o];c.instanceId=r,c.object=this,e.push(c)}er.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Va(new Float32Array(s*this.count),s,this.count,mc,nn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var on=class extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hl=new Xt,Qa=new Mr,nr=new On,ir=new R,an=class extends Me{constructor(t=new $t,e=new on){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(s),nr.radius+=r,t.ray.intersectsSphere(nr)===!1)return;Hl.copy(s).invert(),Qa.copy(t.ray).applyMatrix4(Hl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=u,x=d;g<x;g++){let m=l.getX(g);ir.fromBufferAttribute(f,m),kl(ir,m,c,s,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,x=d;g<x;g++)ir.fromBufferAttribute(f,g),kl(ir,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function kl(i,t,e,n,s,r,o){let a=Qa.distanceSqToPoint(i);if(a<e){let c=new R;Qa.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var xs=class extends Fe{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},We=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new at:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],o=[],a=new R,c=new Xt;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(xe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(xe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ys=class extends We{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new at){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wa=class extends ys{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Mc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+f)+(c-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var sr=new R,Fo=new Mc,No=new Mc,Oo=new Mc,ei=class extends We{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(sr.subVectors(s[0],s[1]).add(s[0]),l=sr);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(sr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=sr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Fo.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,x,m),No.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,x,m),Oo.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Fo.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),No.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),Oo.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(Fo.calc(c),No.calc(c),Oo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Gl(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function zg(i,t){let e=1-i;return e*e*t}function Hg(i,t){return 2*(1-i)*i*t}function kg(i,t){return i*i*t}function us(i,t,e,n){return zg(i,t)+Hg(i,e)+kg(i,n)}function Gg(i,t){let e=1-i;return e*e*e*t}function Vg(i,t){let e=1-i;return 3*e*e*i*t}function Qg(i,t){return 3*(1-i)*i*i*t}function Wg(i,t){return i*i*i*t}function fs(i,t,e,n,s){return Gg(i,t)+Vg(i,e)+Qg(i,n)+Wg(i,s)}var Fr=class extends We{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fs(t,s.x,r.x,o.x,a.x),fs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xa=class extends We{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fs(t,s.x,r.x,o.x,a.x),fs(t,s.y,r.y,o.y,a.y),fs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Nr=class extends We{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ya=class extends We{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends We{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(us(t,s.x,r.x,o.x),us(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ki=class extends We{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(us(t,s.x,r.x,o.x),us(t,s.y,r.y,o.y),us(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zr=class extends We{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Gl(a,c.x,l.x,h.x,f.x),Gl(a,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},Hr=Object.freeze({__proto__:null,ArcCurve:Wa,CatmullRomCurve3:ei,CubicBezierCurve:Fr,CubicBezierCurve3:Xa,EllipseCurve:ys,LineCurve:Nr,LineCurve3:Ya,QuadraticBezierCurve:Or,QuadraticBezierCurve3:ki,SplineCurve:zr}),qa=class extends We{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hr[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Hr[s.type]().fromJSON(s))}return this}},kr=class extends qa{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Nr(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Or(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Fr(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new zr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new ys(t,e,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Gr=class i extends $t{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new R,h=new at;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},cn=class i extends $t{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,x=[],m=n/2,p=0;M(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function M(){let y=new R,B=new R,C=0,S=(e-t)/n;for(let P=0;P<=r;P++){let G=[],A=P/r,w=A*(e-t)+t;for(let z=0;z<=s;z++){let F=z/s,H=F*c+a,J=Math.sin(H),O=Math.cos(H);B.x=w*J,B.y=-A*n+m,B.z=w*O,f.push(B.x,B.y,B.z),y.set(J,S,O).normalize(),u.push(y.x,y.y,y.z),d.push(F,1-A),G.push(g++)}x.push(G)}for(let P=0;P<s;P++)for(let G=0;G<r;G++){let A=x[G][P],w=x[G+1][P],z=x[G+1][P+1],F=x[G][P+1];t>0&&(h.push(A,w,F),C+=3),e>0&&(h.push(w,z,F),C+=3)}l.addGroup(p,C,0),p+=C}function _(y){let B=g,C=new at,S=new R,P=0,G=y===!0?t:e,A=y===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,m*A,0),u.push(0,A,0),d.push(.5,.5),g++;let w=g;for(let z=0;z<=s;z++){let H=z/s*c+a,J=Math.cos(H),O=Math.sin(H);S.x=G*O,S.y=m*A,S.z=G*J,f.push(S.x,S.y,S.z),u.push(0,A,0),C.x=J*.5+.5,C.y=O*.5*A+.5,d.push(C.x,C.y),g++}for(let z=0;z<s;z++){let F=B+z,H=w+z;y===!0?h.push(H,H+1,F):h.push(H+1,H,F),P+=3}l.addGroup(p,P,y===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ni=class i extends cn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ja=class i extends $t{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let _=new R,y=new R,B=new R;for(let C=0;C<e.length;C+=3)d(e[C+0],_),d(e[C+1],y),d(e[C+2],B),c(_,y,B,M)}function c(M,_,y,B){let C=B+1,S=[];for(let P=0;P<=C;P++){S[P]=[];let G=M.clone().lerp(y,P/C),A=_.clone().lerp(y,P/C),w=C-P;for(let z=0;z<=w;z++)z===0&&P===C?S[P][z]=G:S[P][z]=G.clone().lerp(A,z/w)}for(let P=0;P<C;P++)for(let G=0;G<2*(C-P)-1;G++){let A=Math.floor(G/2);G%2===0?(u(S[P][A+1]),u(S[P+1][A]),u(S[P][A])):(u(S[P][A+1]),u(S[P+1][A+1]),u(S[P+1][A]))}}function l(M){let _=new R;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(M),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let M=new R;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let y=m(M)/2/Math.PI+.5,B=p(M)/Math.PI+.5;o.push(y,1-B)}g(),f()}function f(){for(let M=0;M<o.length;M+=6){let _=o[M+0],y=o[M+2],B=o[M+4],C=Math.max(_,y,B),S=Math.min(_,y,B);C>.9&&S<.1&&(_<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),B<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,_){let y=M*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function g(){let M=new R,_=new R,y=new R,B=new R,C=new at,S=new at,P=new at;for(let G=0,A=0;G<r.length;G+=9,A+=6){M.set(r[G+0],r[G+1],r[G+2]),_.set(r[G+3],r[G+4],r[G+5]),y.set(r[G+6],r[G+7],r[G+8]),C.set(o[A+0],o[A+1]),S.set(o[A+2],o[A+3]),P.set(o[A+4],o[A+5]),B.copy(M).add(_).add(y).divideScalar(3);let w=m(B);x(C,A+0,M,w),x(S,A+2,_,w),x(P,A+4,y,w)}}function x(M,_,y,B){B<0&&M.x===1&&(o[_]=M.x-1),y.x===0&&y.z===0&&(o[_]=B/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Gi=class extends kr{constructor(t){super(t),this.uuid=sn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new kr().fromJSON(s))}return this}},Xg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=vh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,f,u,d;if(n&&(r=Zg(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)f=i[g],u=i[g+1],f<a&&(a=f),u<c&&(c=u),f>l&&(l=f),u>h&&(h=u);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Ms(r,o,e,a,c,d,0),o}};function vh(i,t,e,n,s){let r,o;if(s===cA(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Vl(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Vl(r,i[r],i[r+1],o);return o&&Kr(o,o.next)&&(Es(o),o=o.next),o}function ii(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Kr(e,e.next)||re(e.prev,e,e.next)===0)){if(Es(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ms(i,t,e,n,s,r,o){if(!i)return;!o&&r&&nA(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?qg(i,n,s,r):Yg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Es(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Jg(ii(i),t,e),Ms(i,t,e,n,s,r,2)):o===2&&Kg(i,t,e,n,s,r):Ms(ii(i),t,e,n,s,r,1);break}}}function Yg(i){let t=i.prev,e=i,n=i.next;if(re(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Ri(s,a,r,c,o,l,g.x,g.y)&&re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(re(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,u=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<f?h<u?h:u:f<u?f:u,x=a>c?a>l?a:l:c>l?c:l,m=h>f?h>u?h:u:f>u?f:u,p=Ka(d,g,t,e,n),M=Ka(x,m,t,e,n),_=i.prevZ,y=i.nextZ;for(;_&&_.z>=p&&y&&y.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ri(a,h,c,f,l,u,_.x,_.y)&&re(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ri(a,h,c,f,l,u,y.x,y.y)&&re(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ri(a,h,c,f,l,u,_.x,_.y)&&re(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ri(a,h,c,f,l,u,y.x,y.y)&&re(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Jg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Kr(s,r)&&_h(s,n,n.next,r)&&ws(s,r)&&ws(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Es(n),Es(n.next),n=i=r),n=n.next}while(n!==i);return ii(n)}function Kg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rA(o,a)){let c=xh(o,a);o=ii(o,o.next),c=ii(c,c.next),Ms(o,t,e,n,s,r,0),Ms(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Zg(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=vh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(sA(l));for(s.sort(jg),r=0;r<s.length;r++)e=$g(s[r],e);return e}function jg(i,t){return i.x-t.x}function $g(i,t){let e=tA(i,t);if(!e)return t;let n=xh(e,i);return ii(n,n.next),ii(e,e.next)}function tA(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ri(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),ws(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&eA(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function eA(i,t){return re(i.prev,i,t.prev)<0&&re(t.next,i,i.next)<0}function nA(i,t,e,n){let s=i;do s.z===0&&(s.z=Ka(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,iA(s)}function iA(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Ka(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function sA(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ri(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function rA(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!oA(i,t)&&(ws(i,t)&&ws(t,i)&&aA(i,t)&&(re(i.prev,i,t.prev)||re(i,t.prev,t))||Kr(i,t)&&re(i.prev,i,i.next)>0&&re(t.prev,t,t.next)>0)}function re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Kr(i,t){return i.x===t.x&&i.y===t.y}function _h(i,t,e,n){let s=or(re(i,t,e)),r=or(re(i,t,n)),o=or(re(e,n,i)),a=or(re(e,n,t));return!!(s!==r&&o!==a||s===0&&rr(i,e,t)||r===0&&rr(i,n,t)||o===0&&rr(e,i,n)||a===0&&rr(e,t,n))}function rr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function or(i){return i>0?1:i<0?-1:0}function oA(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&_h(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ws(i,t){return re(i.prev,i,i.next)<0?re(i,t,i.next)>=0&&re(i,i.prev,t)>=0:re(i,t,i.prev)<0||re(i,i.next,t)<0}function aA(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function xh(i,t){let e=new Za(i.i,i.x,i.y),n=new Za(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Vl(i,t,e,n){let s=new Za(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Es(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Za(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cA(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ds=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ql(t),Wl(n,t);let o=t.length;e.forEach(Ql);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Wl(n,e[c]);let a=Xg.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ql(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Wl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ss=class i extends $t{constructor(t=new Gi([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:lA,_,y=!1,B,C,S,P;p&&(_=p.getSpacedPoints(h),y=!0,u=!1,B=p.computeFrenetFrames(h,!1),C=new R,S=new R,P=new R),u||(m=0,d=0,g=0,x=0);let G=a.extractPoints(l),A=G.shape,w=G.holes;if(!ds.isClockWise(A)){A=A.reverse();for(let K=0,T=w.length;K<T;K++){let ct=w[K];ds.isClockWise(ct)&&(w[K]=ct.reverse())}}let F=ds.triangulateShape(A,w),H=A;for(let K=0,T=w.length;K<T;K++){let ct=w[K];A=A.concat(ct)}function J(K,T,ct){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(T,ct)}let O=A.length,Z=F.length;function L(K,T,ct){let st,tt,ut,bt=K.x-T.x,At=K.y-T.y,b=ct.x-K.x,v=ct.y-K.y,I=bt*bt+At*At,W=bt*v-At*b;if(Math.abs(W)>Number.EPSILON){let q=Math.sqrt(I),X=Math.sqrt(b*b+v*v),vt=T.x-At/q,rt=T.y+bt/q,ft=ct.x-v/X,Rt=ct.y+b/X,it=((ft-vt)*v-(Rt-rt)*b)/(bt*v-At*b);st=vt+bt*it-K.x,tt=rt+At*it-K.y;let yt=st*st+tt*tt;if(yt<=2)return new at(st,tt);ut=Math.sqrt(yt/2)}else{let q=!1;bt>Number.EPSILON?b>Number.EPSILON&&(q=!0):bt<-Number.EPSILON?b<-Number.EPSILON&&(q=!0):Math.sign(At)===Math.sign(v)&&(q=!0),q?(st=-At,tt=bt,ut=Math.sqrt(I)):(st=bt,tt=At,ut=Math.sqrt(I/2))}return new at(st/ut,tt/ut)}let nt=[];for(let K=0,T=H.length,ct=T-1,st=K+1;K<T;K++,ct++,st++)ct===T&&(ct=0),st===T&&(st=0),nt[K]=L(H[K],H[ct],H[st]);let et=[],lt,It=nt.concat();for(let K=0,T=w.length;K<T;K++){let ct=w[K];lt=[];for(let st=0,tt=ct.length,ut=tt-1,bt=st+1;st<tt;st++,ut++,bt++)ut===tt&&(ut=0),bt===tt&&(bt=0),lt[st]=L(ct[st],ct[ut],ct[bt]);et.push(lt),It=It.concat(lt)}for(let K=0;K<m;K++){let T=K/m,ct=d*Math.cos(T*Math.PI/2),st=g*Math.sin(T*Math.PI/2)+x;for(let tt=0,ut=H.length;tt<ut;tt++){let bt=J(H[tt],nt[tt],st);ht(bt.x,bt.y,-ct)}for(let tt=0,ut=w.length;tt<ut;tt++){let bt=w[tt];lt=et[tt];for(let At=0,b=bt.length;At<b;At++){let v=J(bt[At],lt[At],st);ht(v.x,v.y,-ct)}}}let Gt=g+x;for(let K=0;K<O;K++){let T=u?J(A[K],It[K],Gt):A[K];y?(S.copy(B.normals[0]).multiplyScalar(T.x),C.copy(B.binormals[0]).multiplyScalar(T.y),P.copy(_[0]).add(S).add(C),ht(P.x,P.y,P.z)):ht(T.x,T.y,0)}for(let K=1;K<=h;K++)for(let T=0;T<O;T++){let ct=u?J(A[T],It[T],Gt):A[T];y?(S.copy(B.normals[K]).multiplyScalar(ct.x),C.copy(B.binormals[K]).multiplyScalar(ct.y),P.copy(_[K]).add(S).add(C),ht(P.x,P.y,P.z)):ht(ct.x,ct.y,f/h*K)}for(let K=m-1;K>=0;K--){let T=K/m,ct=d*Math.cos(T*Math.PI/2),st=g*Math.sin(T*Math.PI/2)+x;for(let tt=0,ut=H.length;tt<ut;tt++){let bt=J(H[tt],nt[tt],st);ht(bt.x,bt.y,f+ct)}for(let tt=0,ut=w.length;tt<ut;tt++){let bt=w[tt];lt=et[tt];for(let At=0,b=bt.length;At<b;At++){let v=J(bt[At],lt[At],st);y?ht(v.x,v.y+_[h-1].y,_[h-1].x+ct):ht(v.x,v.y,f+ct)}}}Y(),$();function Y(){let K=s.length/3;if(u){let T=0,ct=O*T;for(let st=0;st<Z;st++){let tt=F[st];Pt(tt[2]+ct,tt[1]+ct,tt[0]+ct)}T=h+m*2,ct=O*T;for(let st=0;st<Z;st++){let tt=F[st];Pt(tt[0]+ct,tt[1]+ct,tt[2]+ct)}}else{for(let T=0;T<Z;T++){let ct=F[T];Pt(ct[2],ct[1],ct[0])}for(let T=0;T<Z;T++){let ct=F[T];Pt(ct[0]+O*h,ct[1]+O*h,ct[2]+O*h)}}n.addGroup(K,s.length/3-K,0)}function $(){let K=s.length/3,T=0;pt(H,T),T+=H.length;for(let ct=0,st=w.length;ct<st;ct++){let tt=w[ct];pt(tt,T),T+=tt.length}n.addGroup(K,s.length/3-K,1)}function pt(K,T){let ct=K.length;for(;--ct>=0;){let st=ct,tt=ct-1;tt<0&&(tt=K.length-1);for(let ut=0,bt=h+m*2;ut<bt;ut++){let At=O*ut,b=O*(ut+1),v=T+st+At,I=T+tt+At,W=T+tt+b,q=T+st+b;Bt(v,I,W,q)}}}function ht(K,T,ct){c.push(K),c.push(T),c.push(ct)}function Pt(K,T,ct){Lt(K),Lt(T),Lt(ct);let st=s.length/3,tt=M.generateTopUV(n,s,st-3,st-2,st-1);zt(tt[0]),zt(tt[1]),zt(tt[2])}function Bt(K,T,ct,st){Lt(K),Lt(T),Lt(st),Lt(T),Lt(ct),Lt(st);let tt=s.length/3,ut=M.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);zt(ut[0]),zt(ut[1]),zt(ut[3]),zt(ut[1]),zt(ut[2]),zt(ut[3])}function Lt(K){s.push(c[K*3+0]),s.push(c[K*3+1]),s.push(c[K*3+2])}function zt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return hA(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Hr[s.type]().fromJSON(s)),new i(n,t.options)}},lA={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new at(r,o),new at(a,c),new at(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new at(o,1-c),new at(l,1-f),new at(u,1-g),new at(x,1-p)]:[new at(a,1-c),new at(h,1-f),new at(d,1-g),new at(m,1-p)]}};function hA(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var bs=class i extends Ja{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var En=class i extends $t{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new R,u=new R,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let M=[],_=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let B=0;B<=e;B++){let C=B/e;f.x=-t*Math.cos(s+C*r)*Math.sin(o+_*a),f.y=t*Math.cos(o+_*a),f.z=t*Math.sin(s+C*r)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(C+y,1-_),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let _=h[p][M+1],y=h[p][M],B=h[p+1][M],C=h[p+1][M+1];(p!==0||o>0)&&d.push(_,y,C),(p!==n-1||c<Math.PI)&&d.push(y,B,C)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Vi=class i extends $t{constructor(t=new ki(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,c=new R,l=new at,h=new R,f=[],u=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function x(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),M(),p()}function m(_){h=t.getPointAt(_/e,h);let y=o.normals[_],B=o.binormals[_];for(let C=0;C<=s;C++){let S=C/s*Math.PI*2,P=Math.sin(S),G=-Math.cos(S);c.x=G*y.x+P*B.x,c.y=G*y.y+P*B.y,c.z=G*y.z+P*B.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let y=1;y<=s;y++){let B=(s+1)*(_-1)+(y-1),C=(s+1)*_+(y-1),S=(s+1)*_+y,P=(s+1)*(_-1)+y;g.push(B,C,P),g.push(C,S,P)}}function M(){for(let _=0;_<=e;_++)for(let y=0;y<=s;y++)l.x=_/e,l.y=y/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Hr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var be=class extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ar(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function uA(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Qi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ja=class extends Qi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wc:r=t,a=2*e-n;break;case Xc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wc:o=t,c=2*n-e;break;case Xc:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,M=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,_=(-1-d)*m+(1.5+d)*x+.5*g,y=d*m-d*x;for(let B=0;B!==a;++B)r[B]=p*o[h+B]+M*o[l+B]+_*o[c+B]+y*o[f+B];return r}},$a=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*f+o[c+u]*h;return r}},tc=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ar(e,this.TimeBufferType),this.values=ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ar(t.times,Array),values:ar(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ja(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case pr:e=this.InterpolantFactoryMethodDiscrete;break;case Sa:e=this.InterpolantFactoryMethodLinear;break;case oo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return Sa;case this.InterpolantFactoryMethodSmooth:return oo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&uA(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===oo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[u+g]||x!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=Sa;var si=class extends tn{constructor(t,e,n){super(t,e,n)}};si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=pr;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends tn{};ec.prototype.ValueTypeName="color";var nc=class extends tn{};nc.prototype.ValueTypeName="number";var ic=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)rn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Vr=class extends tn{InterpolantFactoryMethodLinear(t){return new ic(this.times,this.values,this.getValueSize(),t)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends tn{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=pr;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends tn{};sc.prototype.ValueTypeName="vector";var rc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},fA=new rc,oc=class{constructor(t){this.manager=t!==void 0?t:fA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};oc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qr=class extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Wr=class extends Qr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},zo=new Xt,Xl=new R,Yl=new R,ac=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xl),Yl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yl),e.updateMatrixWorld(),zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var cc=class extends ac{constructor(){super(new Cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wi=class extends Qr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new cc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Xr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ql(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=ql();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function ql(){return performance.now()}var wc="\\[\\]\\.:\\/",dA=new RegExp("["+wc+"]","g"),Ec="[^"+wc+"]",pA="[^"+wc.replace("\\.","")+"]",mA=/((?:WC+[\/:])*)/.source.replace("WC",Ec),gA=/(WCOD+)?/.source.replace("WCOD",pA),AA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ec),vA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ec),_A=new RegExp("^"+mA+gA+AA+vA+"$"),xA=["material","materials","bones","map"],lc=class{constructor(t,e,n){let s=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dA,"")}static parseTrackName(t){let e=_A.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xA.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=lc;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var GA=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function bc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new $t,l=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=i[u].attributes.position.count}c.setIndex(f)}for(let h in r){let f=yh(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][u]);let g=yh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function yh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new le(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let f=c/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){let x=h.getComponent(u,g);a.setComponent(u+f,g,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Tc(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},h=[],f=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let M=0,_=a.length;M<_;M++){let y=a[M],B=i.attributes[y];c[y]=new B.constructor(new B.array.constructor(B.count*B.itemSize),B.itemSize,B.normalized);let C=i.morphAttributes[y];C&&(l[y]||(l[y]=[]),C.forEach((S,P)=>{let G=new S.array.constructor(S.count*S.itemSize);l[y][P]=new S.constructor(G,S.itemSize,S.normalized)}))}let d=t*.5,g=Math.log10(1/t),x=Math.pow(10,g),m=d*x;for(let M=0;M<r;M++){let _=n?n.getX(M):M,y="";for(let B=0,C=a.length;B<C;B++){let S=a[B],P=i.getAttribute(S),G=P.itemSize;for(let A=0;A<G;A++)y+=`${~~(P[f[A]](_)*x+m)},`}if(y in e)h.push(e[y]);else{for(let B=0,C=a.length;B<C;B++){let S=a[B],P=i.getAttribute(S),G=i.morphAttributes[S],A=P.itemSize,w=c[S],z=l[S];for(let F=0;F<A;F++){let H=f[F],J=u[F];if(w[J](o,P[H](_)),G)for(let O=0,Z=G.length;O<Z;O++)z[O][J](o,G[O][H](_))}}e[y]=o,h.push(o),o++}}let p=i.clone();for(let M in i.attributes){let _=c[M];if(p.setAttribute(M,new _.constructor(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),M in l)for(let y=0;y<l[M].length;y++){let B=l[M][y];p.morphAttributes[M][y]=new B.constructor(B.array.slice(0,o*B.itemSize),B.itemSize,B.normalized)}}return p.setIndex(h),p}function ai(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var yA=ai(1776),Pe=new Uint8Array(512);{let i=Array.from({length:256},(t,e)=>e);for(let t=255;t>0;t--){let e=Math.floor(yA()*(t+1));[i[t],i[e]]=[i[e],i[t]]}for(let t=0;t<512;t++)Pe[t]=i[t&255]}var Cc=i=>i*i*i*(i*(i*6-15)+10),oi=(i,t,e)=>i+(t-i)*e,Hn=(i,t,e,n)=>{let s=i<8?t:e,r=i<4?e:i===12||i===14?t:n;return((i&1)===0?s:-s)+((i&2)===0?r:-r)};function Mh(i,t,e){let n=Math.floor(i)&255,s=Math.floor(t)&255,r=Math.floor(e)&255;i-=Math.floor(i),t-=Math.floor(t),e-=Math.floor(e);let o=Cc(i),a=Cc(t),c=Cc(e),l=Pe[n]+s,h=Pe[l]+r,f=Pe[l+1]+r,u=Pe[n+1]+s,d=Pe[u]+r,g=Pe[u+1]+r;return oi(oi(oi(Hn(Pe[h]&15,i,t,e),Hn(Pe[d]&15,i-1,t,e),o),oi(Hn(Pe[f]&15,i,t-1,e),Hn(Pe[g]&15,i-1,t-1,e),o),a),oi(oi(Hn(Pe[h+1]&15,i,t,e-1),Hn(Pe[d+1]&15,i-1,t,e-1),o),oi(Hn(Pe[f+1]&15,i,t-1,e-1),Hn(Pe[g+1]&15,i-1,t-1,e-1),o),a),c)}function Te(i,t,e,n=4){let s=0,r=.5,o=1;for(let a=0;a<n;a++)s+=r*Mh(i*o,t*o,e*o),o*=2.03,r*=.5;return s}function Zr(i,t,e,n=4){let s=0,r=.5,o=1;for(let a=0;a<n;a++){let c=1-Math.abs(Mh(i*o,t*o,e*o));s+=r*c*c,o*=2.1,r*=.5}return s}var Rc=3,MA=3.7,fe=160,ve=i=>new Et(i);function jr(i){let t=Math.cos(i),e=Math.sin(i);return Rc*(1+.075*Te(t*1.4+3.1,.7,e*1.4)+.03*Te(t*4.2,1.9,e*4.2))}function wA(i,t){let e=Math.cos(i),n=Math.sin(i),s=Math.pow(1-t,1.18)*(1+.14*Math.sin(t*Math.PI*.9)),r=1+.3*Te(e*1.5,t*2.2+4,n*1.5),o=.16*(Zr(e*2.6+1.3,t*4.5,n*2.6,4)-.35),a=.03*Math.tanh(4*Math.sin(t*27+3.5*Te(e*2,t*3,n*2))),c=jr(i)/Rc,l=Math.min(1,t/.06),h=Xe.lerp(c,r+o+a,l);return Rc*s*h}function EA(){let t=[],e=[],n=[],s=ve("#4a3526"),r=ve("#7d6a58"),o=ve("#a89580"),a=ve("#2a2420"),c=ve("#3f5a2a"),l=new Et;for(let f=0;f<=70;f++){let u=f/70;for(let d=0;d<fe;d++){let g=d/fe*Math.PI*2,x=Math.cos(g),m=Math.sin(g),p=wA(g,u),M=1+.45*Math.max(0,Te(x*2.1+9,.3,m*2.1))+.25*u*Te(x*5,2,m*5),_=-u*MA*M+(u<.02?.02:0),y=x*p,B=m*p,C=u<.04?0:Math.min(1,(u-.04)/.08),S=C*(.42*(Zr(y*.75+7,_*.9,B*.75,4)-.38)+.18*Te(y*2.2,_*2.6,B*2.2)),P=Math.max(.02,p+S*(1-u*.5));t.push(x*P,_+C*.12*Te(y*1.3,4.1,B*1.3),m*P);let G=.5+.5*Math.sin(_*9+2.5*Te(x*3,_*.6,m*3));l.copy(r).lerp(o,G*.55);let A=Te(x*6,_*2.2,m*6);l.lerp(a,Xe.clamp(u*.85+A*.6,0,.85)),u<.07&&l.lerp(s,1-u/.07),u<.22&&A>.08&&l.lerp(c,(.22-u)*2.2),e.push(l.r,l.g,l.b)}}for(let f=0;f<70;f++)for(let u=0;u<fe;u++){let d=f*fe+u,g=f*fe+(u+1)%fe,x=(f+1)*fe+u,m=(f+1)*fe+(u+1)%fe;n.push(d,x,g,g,x,m)}let h=new $t;return h.setAttribute("position",new Qt(t,3)),h.setAttribute("color",new Qt(e,3)),h.setIndex(n),h.computeVertexNormals(),h}var Yi={x:.15,z:-.75},Bc=.27;function wh(i,t){let e=Math.abs(i-Yi.x)-1.55,n=Math.abs(t-Yi.z)-.85,s=Math.max(e,n);return Xe.clamp(1-s/.35,0,1)}function qi(i,t){let e=Math.atan2(t,i),n=Math.hypot(i,t)/(jr(e)*1.012),s=.34*(1-Math.pow(Math.min(n,1),2.4))+.05*Te(i*.7+11,.2,t*.7);n>.93&&(s-=(n-.93)*1.4);let r=wh(i,t);return Xe.lerp(s,Bc,r*r*(3-2*r))}function Eh(i,t){return i>-.85&&i<1.15&&t>-.05&&t<1.7}function SA(){let t=[],e=[],n=[],s=ve("#3f6b25"),r=ve("#5f8f32"),o=ve("#7da844"),a=ve("#2c4a1b"),c=ve("#79a640"),l=ve("#6b9838"),h=new Et;t.push(Yi.x*0,qi(0,0),0),e.push(r.r,r.g,r.b);for(let u=1;u<=44;u++){let d=u/44;for(let g=0;g<fe;g++){let x=g/fe*Math.PI*2,m=jr(x)*1.012,p=Math.cos(x)*m*d,M=Math.sin(x)*m*d,_=u===44?-.035:qi(p,M);t.push(p,_,M);let y=Te(p*1.6,3.3,M*1.6);if(h.copy(s).lerp(r,.5+y).lerp(o,Math.max(0,Te(p*3.5,7,M*3.5))*.8),Eh(p,M)){let B=Math.sin((p-M*.15)*9)>0?c:l;h.lerp(B,.85)}d>.9&&h.lerp(a,(d-.9)*6),e.push(h.r,h.g,h.b)}}for(let u=0;u<fe;u++)n.push(0,1+(u+1)%fe,1+u);for(let u=1;u<44;u++)for(let d=0;d<fe;d++){let g=1+(u-1)*fe+d,x=1+(u-1)*fe+(d+1)%fe,m=1+u*fe+d,p=1+u*fe+(d+1)%fe;n.push(g,x,m,x,p,m)}let f=new $t;return f.setAttribute("position",new Qt(t,3)),f.setAttribute("color",new Qt(e,3)),f.setIndex(n),f.computeVertexNormals(),f}var Cs=new ei([new R(.55,0,2.95),new R(.75,0,2.2),new R(.25,0,1.45),new R(.15,0,.75),new R(.15,0,0)]);function bA(){let e=[],n=[],s=new R,r=new R;for(let l=0;l<=90;l++){let h=l/90;Cs.getPointAt(h,s),Cs.getTangentAt(h,r);let f=-r.z,u=r.x,d=Math.hypot(f,u)||1;for(let g of[-1,1]){let x=s.x+f/d*.13*g,m=s.z+u/d*.13*g;e.push(x,qi(x,m)+.014,m)}}for(let l=0;l<90;l++){let h=l*2;n.push(h,h+2,h+1,h+1,h+2,h+3)}let o=new $t;o.setAttribute("position",new Qt(e,3)),o.setIndex(n),o.computeVertexNormals();let a=new wn(1.9,.11,24,1);a.rotateX(-Math.PI/2);let c=a.attributes.position;for(let l=0;l<c.count;l++){let h=c.getX(l)+.15,f=c.getZ(l)+.75;c.setXYZ(l,h,qi(h,f)+.013,f)}return a.deleteAttribute("uv"),a.computeVertexNormals(),bc([o,a])}function TA(i){let t=new ye;t.position.set(Yi.x,Bc,Yi.z);let e=(p,M,_,y,B,C=!0)=>{let S=new te(p,M);return S.position.set(_,y,B),S.castShadow=C,S.receiveShadow=!0,t.add(S),S},{brick:n,stone:s,roof:r,dome:o,gold:a,glass:c}=i;e(new we(2.5,.08,1.25),s,0,.04,0);for(let p=0;p<3;p++)e(new we(.8-p*.08,.035,.12),s,0,.018+p*.035,.68-p*.07);e(new we(1.2,.62,.86),n,0,.39,-.05),e(new we(1.26,.05,.92),s,0,.72,-.05);let l=new cn(.032,.036,.56,12);for(let p=0;p<6;p++)e(l,s,-.4+p*.16,.36,.48);e(new we(.98,.05,.3),s,0,.665,.42);let h=new Gi;h.moveTo(-.52,0),h.lineTo(.52,0),h.lineTo(0,.2),h.closePath();let f=new Ss(h,{depth:.32,bevelEnabled:!1});e(f,s,0,.69,.26),e(new cn(.3,.32,.24,32),s,0,.86,-.1);let u=new cn(.012,.012,.18,6);for(let p=0;p<16;p++){let M=p/16*Math.PI*2;e(u,s,Math.cos(M)*.33,.86,-.1+Math.sin(M)*.33,!1)}e(new En(.31,40,20,0,Math.PI*2,0,Math.PI/2),o,0,.97,-.1),e(new cn(.05,.06,.12,12),s,0,1.33,-.1),e(new ni(.055,.12,12),a,0,1.45,-.1);for(let p of[-1,1]){e(new we(.62,.44,.7),n,p*.9,.3,-.12),e(new we(.66,.04,.74),s,p*.9,.53,-.12);let M=new Gi;M.moveTo(-.36,0),M.lineTo(.36,0),M.lineTo(0,.2),M.closePath();let _=new Ss(M,{depth:.62,bevelEnabled:!1});_.rotateY(Math.PI/2),e(_,r,p*.9-.31,.55,-.12),e(new we(.08,.12,.08),n,p*.9+.15,.68,-.2)}e(new we(.24,1.05,.24),n,1.42,.55,-.62),e(new we(.28,.05,.28),s,1.42,1.08,-.62),e(new we(.22,.2,.22),s,1.42,1.2,-.62),e(new ni(.18,.34,4),r,1.42,1.47,-.62).rotation.y=Math.PI/4,e(new Gr(.06,20),a,1.42,1.2,-.505,!1);let d=new wn(.07,.12),g=[];for(let p=0;p<2;p++){for(let M=0;M<6;M++)g.push([-.43+M*.17,.22+p*.24,.374]);for(let M of[-1,1])for(let _=0;_<3;_++)g.push([M*.9-.18+_*.18,.2+p*.18,.234])}for(let p=0;p<4;p++)g.push([1.42,.25+p*.2,-.499]);let x=new ti(d,c,g.length),m=new Xt;return g.forEach((p,M)=>{m.makeTranslation(p[0],p[1],p[2]),x.setMatrixAt(M,m)}),t.add(x),t}function CA(i){let t=new bs(1,2),e=t.attributes.position,n=new R;for(let r=0;r<e.count;r++){n.fromBufferAttribute(e,r);let o=1+.22*Te(n.x*1.8+i,n.y*1.8,n.z*1.8);n.multiplyScalar(o),n.y*=.92,e.setXYZ(r,n.x,n.y,n.z)}t.deleteAttribute("uv"),t.deleteAttribute("normal");let s=Tc(t);return s.computeVertexNormals(),s}function RA(i){let t=ai(42),e=new ye,n=new be({roughness:.85,metalness:0}),s=new be({color:"#4a3424",roughness:1}),r=CA(3.3),o=new ni(1,1.6,9);o.translate(0,.8,0);let a=new ni(.75,1.3,9);a.translate(0,1.45,0);let c=bc([o,a]),l=new cn(.06,.09,1,6);l.translate(0,.5,0);let h=[],f=i?46:78,u=0;for(;h.length<f&&u++<4e3;){let A=t()*Math.PI*2,w=Math.sqrt(.18+t()*.82),z=jr(A),F=Math.cos(A)*z*w*.93,H=Math.sin(A)*z*w*.93;if(wh(F,H)>.02||Eh(F,H))continue;let J=!1,O=new R;for(let Z=0;Z<=1;Z+=.05)if(Cs.getPointAt(Z,O),Math.hypot(O.x-F,O.z-H)<.32){J=!0;break}J||h.some(Z=>Math.hypot(Z.x-F,Z.z-H)<.27)||H>1&&Math.abs(F-.3)<1.3||h.push({x:F,z:H,rho:w})}let d=["#2f5a24","#3e6e2b","#4f7d30","#5b8a36","#355f2a"].map(ve),g=["#c4622d","#d98a3a","#a8432a"].map(ve),x=h.filter((A,w)=>w%3===0).length,m=new ti(r,n,h.length-x),p=new ti(c,n,x),M=new ti(l,s,h.length),_=new Xt,y=new rn,B=new R,C=new R,S=new Qe,P=0,G=0;h.forEach((A,w)=>{let z=qi(A.x,A.z),F=.13+t()*.09+(A.rho>.85?.03:0),H=w%3===0;if(S.set((t()-.5)*.1,t()*6.28,(t()-.5)*.1),y.setFromEuler(S),M.setMatrixAt(w,_.compose(C.set(A.x,z-.02,A.z),y,B.set(F*.9,F*(H?1:1.9),F*.9))),H)p.setMatrixAt(G,_.compose(C.set(A.x,z+F*.6,A.z),y,B.set(F*1.05,F*1.25,F*1.05))),p.setColorAt(G++,ve("#284d26").lerp(ve("#1f3d22"),t()));else{let J=F*2.6;m.setMatrixAt(P,_.compose(C.set(A.x,z+J,A.z),y,B.set(F*1.25,F*1.35,F*1.25)));let O=t()<.16?g[Math.floor(t()*g.length)]:d[Math.floor(t()*d.length)];m.setColorAt(P++,O.clone().offsetHSL(0,0,(t()-.5)*.06))}});for(let A of[m,p,M])A.castShadow=!0,A.receiveShadow=!0,e.add(A);return e}function BA(i){let t=new ye;new cn(.012,.014,.05,6).translate(0,.025,0);let n=new be({color:"#1d1d1d",roughness:.6,metalness:.4}),s=[],r=new R,o=new R;for(let l=.04;l<.95;l+=.11){Cs.getPointAt(l,r),Cs.getTangentAt(l,o);let h=-o.z,f=o.x,u=Math.hypot(h,f)||1;for(let d of[-1,1]){let g=r.x+h/u*.17*d,x=r.z+f/u*.17*d;s.push(new R(g,qi(g,x),x))}}let a=new $t().setFromPoints(s.map(l=>l.clone().setY(l.y+.055))),c=new on({map:i,size:.22,color:"#ffc27a",transparent:!0,depthWrite:!1,blending:ke,sizeAttenuation:!0});return t.add(new an(a,c)),t}function PA(){let i=ai(7),t=new be({vertexColors:!0,roughness:.95}),e=[],n=[[5.9,-.4,-1.6,.32],[6.6,-3.2,.9,.22],[1.6,-4.6,2.4,.2],[7.4,1.9,-4.5,.18]];for(let[s,r,o,a]of n){let c=new bs(1,3),l=c.attributes.position,h=new R,f=[],u=i()*10;for(let x=0;x<l.count;x++){h.fromBufferAttribute(l,x);let m=1+.35*Te(h.x*1.5+u,h.y*1.5,h.z*1.5)+.15*(Zr(h.x*2+u,h.y*2,h.z*2)-.4);h.multiplyScalar(m),h.y>.25&&(h.y=.25+(h.y-.25)*.25),h.y*=1.25,l.setXYZ(x,h.x,h.y,h.z);let M=h.y>.2?ve("#4b7a2c"):ve("#6e5c4b").lerp(ve("#2c2622"),Math.max(0,-h.y*.6));f.push(M.r,M.g,M.b)}c.setAttribute("color",new Qt(f,3)),c.deleteAttribute("uv"),c.deleteAttribute("normal");let d=Tc(c);d.computeVertexNormals();let g=new te(d,t);g.position.set(s,r,o),g.scale.setScalar(a),g.rotation.y=i()*6,g.userData={baseY:r,phase:i()*6.28,speed:.4+i()*.3},e.push(g)}return e}function Sh({isMobile:i,glowTex:t}){let e=new ye,n=EA(),s=new te(n,new be({vertexColors:!0,roughness:.96,metalness:0}));s.receiveShadow=!0,e.add(s);let r=new te(SA(),new be({vertexColors:!0,roughness:.92}));r.receiveShadow=!0,e.add(r);let o=new te(bA(),new be({color:"#e6dccb",roughness:.75}));o.receiveShadow=!0,e.add(o);let a={brick:new be({color:"#8a3326",roughness:.85}),stone:new be({color:"#efe6d6",roughness:.6}),roof:new be({color:"#3d4448",roughness:.7}),dome:new be({color:"#7fae9f",roughness:.38,metalness:.35}),gold:new be({color:"#d7a54a",roughness:.3,metalness:.9,emissive:"#5a3a0a",emissiveIntensity:.4}),glass:new be({color:"#ffd59a",emissive:"#ffb562",emissiveIntensity:1.35,roughness:.4})};e.add(TA(a)),e.add(RA(i)),e.add(BA(t));let c=PA();return{root:e,fragments:c,windowMat:a.glass}}var bh=new R(Yi.x,Bc+.02,.9);var Th="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LwGhAi8BrgQvAf37LwFcAS8BaQMvARgALwHG/C4BJQIuATIELgGB+y4B4AAuAe0CLgFK/C4BqQEtAbYDLQFkAC0BcQItAX8ELQHO+y0BLQEtAToDLQHo/ywB9QEsAQMELAGxACwBvgIsARr8LAF5ASsBhwMrATUAKwFCAisBTwQrAZ77KwH9ACsBCwMrAbn/KgFn/CoBxgEqAdMDKgGCACoBjwIqAZwEKgHr+yoBSgEpAVcDKQEGACkBEwIpASAEKQHOACkB2wIoATj8KAGXASgBpAMoAVIAKAFfAigBbQQoAbz7KAEbAScBKAMnAdb/JwHxAycBnwAnAawCJgG5BCYBCPwmAWcBJgF1AyYBIwAmAdH8JgEwAiYBPQQmAYz7JgHrACUB+QIlAaf/JQG0ASUBwQMlAW8AJQF9AiQBigQkAdn7JAE4ASQBRQMkAfP/JAEBAiQBDgQjAbwAIwHJAiMBd/8jASb8IwGFASMBkgMjAUAAIwFNAiIBWwQiAar7IgEJASIBFgMiAcT/IgHRASIB3wMhAY0AIQGaAiEBpwQhAfb7IQFVASEBYwMhAREAIQEeAiABKwQgAdkAIAHnAiABlf8gAUP8IAGiASABrwMfAV0AHwFrAh8BeAQfAcf7HwEmAR8BMwMfAeH/HgH8Ax4BqgAeAbcCHgEU/B4BcwEeAYADHQEuAB0BOwIdAUgEHQH3AB0BBAMdAbL/HAG/ARwBzAMcAXsAHAGIAhwBlQQcAeT7HAFDARwBUAMbAf//GwEMAhsBGQQbAccAGwHUAhsBMfwaAZABGgGdAxoBSwAaAVgCGgFmBBoBtfsaARQBGgEhAxkBz/8ZAdwBGQHqAxkBmAAZAaUCGQGyBBkBAfwYAWABGAFuAxgBHAAYAcr8GAEpAhgBNgQYAeQAGAHyAhcBoP8XAa0BFwG6AxcBaQAXAXYCFwGDBBYB0vsWATEBFgE+AxYB7f8WAQcEFgG1ABUBwgIVAR/8FQF+ARUBiwMVATkAFQFGAhUBVAQUAQIBFAEPAxQBvf8UAcoBFAHYAxQBhgATAZMCEwGgBBMB7/sTAU4BEwFcAxMBCgATARcCEwEkBBIB0gASAeACEgGO/xIBmwESAagDEgFWABIBZAIRAXEEEQHA+xEBHwERASwDEQHa/xEB6AERAfUDEAGjABABsAIQAQ38EAFsARABeQMQAScAEAHV/A8BQgQPAZH7DwHwAA8B/QIPAav/DwG4AQ8BxgMOAXQADgGBAg4BjgQOAd37DgE8AQ4BSgMOAfj/DQESBA0BwAANAc4CDQF8/w0BKvwNAYkBDQGWAwwBRAAMAVICDAFfBAwBDQEMARoDDAHI/wwB1gELAeMDCwGRAAsBngILAasECwH7+wsBZwMKARUACgEiAgoBLwQKAd4ACgHrAgoBmf8KAaYBCQGzAwkBYgAJAW8CCQF8BAkBy/sJASoBCQE3AwkB5v8IAfMBCAEABAgBrgAIAbsCCAEY/AgBdwEHAYQDBwEyAAcBPwIHAU0EBwGc+wcB+wAHAQgDBwG2/wYBwwEGAdEDBgF/AAYBjAIGAZkEBgHo+wYBRwEFAVUDBQEDAAUBHQQFAcsABQHZAgUBh/8EAZQBBAGhAwQBUAAEAV0CBAFqBAQBGAEDASUDAwHU/wMB4QEDAe4DAwGcAAMBqQICAQb8AgFyAwIBIAACATsEAgHpAAEB9gIBAaT/AQGxAQEBvwMBAW0AAQF6AgEBhwQBAdb7AAE1AQABQwMAAfH/AAH+AQABCwQAAbkAAAHHAv8Adf//ACP8/wCCAf8AjwP/AD0A/wBYBP8Ap/v+AAYB/gATA/4Awf/+AM8B/gDcA/4AigD9AKUE/QD0+/0AUwH9AGAD/QAOAP0AKQT9ANcA/ADkAvwAkv/8AJ8B/ACtA/wAWwD8AGgC+wB1BPsAxPv7ACMB+wAxA/sA3//7AOwB+wD5A/sApwD6ALUC+gDCBPoAEfz6AH0D+gArAPkARgT5APQA+QABA/kAr//5AL0B+QDKA/kAeAD4AJIE+ADi+/gAQQH4AE4D+AD8//gAFgT3AMUA9wDSAvcAgP/3AC789wCNAfcAmgP3AEkA9wD3/PYAYwT2ABEB9gAeA/YAzf/2ANoB9gDnA/UAlQD1AKIC9QD/+/UAXgH1AGsD9QAZAPUAJgL0ADQE9ADiAPQA7wL0AJ3/9ACqAfQAuAP0AGYA8wCABPMAz/vzAC4B8wA8A/MA6v/zAPcB8gAEBPIAsgDyAMAC8gBu//IAHPzyAIgD8gA3APEAUQTxAP8A8QAMA/EAu//xAMgB8ADVA/AAgwDwAO378ABMAfAAWQPwAAcA7wAUAu8AIgTvANAA7wDdAu8Ai//vAJgB7wCmA+4AVADuAG4E7gAcAe4AKgPuANj/7gDlAe0A8gPtAKAA7QCuAu0AuwTtAAr87QB2A+0AJADsADIC7AA/BOwA7QDsAPoC7ACo/+wAtgHrAMMD6wBxAOsAjATrANv76wA6AesARwPrAPX/6gACAuoAEATqAL4A6gDLAuoAef/qACf86gCGAekAlAPpAEIA6QBcBOkACgHpABgD6QDG/+gA0wHoAOAD6ACOAOgA+PvoAFcB6ABkA+cAEgDnACAC5wAtBOcA2wDnAOgC5wCW/+cApAHmALED5gBfAOYAeQTmACgB5gA1A+YA4//lAPAB5QD9A+UArADlALkC5QBn/+UAFfzkAIED5AAwAOQA3vzkAD0C5ABKBOQA+ADkAAUD5AC0/+MAwQHjAM4D4wB8AOMA5vvjAEUB4wBSA+IAAADiAA0C4gAbBOIAyQDiANYC4gCE/+IAkQHhAJ8D4QBNAOEAZwThABUB4QAjA+EA0f/gAN4B4ADrA+AAmQDgAAP84ABiAd8AbwPfAB4A3wArAt8AOATfAOYA3wDzAt8Aov/eAK8B3gC8A94AagDeADMB3gBAA90A7v/dAPsB3QAJBN0AtwDdAMQC3QBy/90AIPzcADsA3ADp/NwASALcAFUE3AADAdwAEQPbAL//2wDMAdsA2QPbAIcA2wDx+9sAUAHaAF0D2gALANoAGQLaACYE2gDUANoA4QLaAI//2QCdAdkAqgPZAFgA2QAhAdkALgPYANz/2ADpAdgA9wPYAKUA2ABg/9gADvzYAG0B1wApANcANgLXAPEA1wD/AtcArf/WALoB1gDHA9YAdQDWAD4B1QBLA9UA+f/VAAcC1QAUBNUAwgDVAM8C1QB9/9QAK/zUAIsB1ABGANQA9PzUAA8B1AAcA9MAyv/TANcB0wDkA9MAkwDTAPz70wBbAdIAFwDSACQC0gDfANIA7ALSAJv/0QCoAdEAtQPRAGMA0QAsAdAAOQPQAOf/0ACV/NAA9AHQAAIE0ACwANAAa//QABn8zwA0AM8AQQLPAE4EzwD8AM8ACgPOALj/zgDFAc4A0gPOAIAAzgDq+84ASQHNAFYDzQAFAM0AEgLNAB8EzQDNAM0A2gLNAIn/zACWAcwAowPMAFEAzAD//MwAGgHMACcDywDV/8sAg/zLAOIBywDwA8sAngDLAAf8ywBmAcoAIgDKAC8CygDqAMoA+ALKAKb/yQCzAckAwAPJAG4AyQA3AcgARAPIAPL/yAAAAsgADQTIALsAyAB2/8gAJfzHAD8AxwAIAccAFQPGAMP/xgDQAcYA3gPGAIwAxgA6/cYA6PnGAPX7xgBUAcUAEADFAB0CxQDYAMUA5gLFAJT/xAChAcQArgPEAFwAxAAlAcQAMgPDAOD/wwCO/MMA7gHDAPsDwwCpAMMAZP/DABL8wwByAcIALQDCADoCwgBHBMIA9gDCAAMDwgCx/8EAvgHBAMsDwQB6AMEAQgHBAE8DwAD+/8AACwLAABgEwADGAMAAgv/AADD8vwBKAL8AEwG/ACADvwDO/74AfPy+ANsBvgDpA74AlwC+AEX9vgAA/L4AXwG9ABsAvQAoAr0A4wC9APECvQCf/7wArAG8ALkDvABnALwAMAG8AD0DuwDs/7sA+QG7AAYEuwC0ALsAcP+7AB78ugA4ALoAAQG6AA4DugC8/7kAyQG5ANcDuQCFALkAM/25AE0BuAAJALgAFgK4ACMEuADRALgA3wK4AI3/uAA7/LcAVQC3AB4BtwArA7cA2f+2AIj8tgDnAbYA9AO2AKIAtgC9BLYADPy2AGsBtQAmALUAMwK1AO8AtQD8ArUAqv+1AFj8tQC3AbQAxQO0AHMAtAA7AbQA9/+zAAQCswARBLMAvwCzAHv/swAp/LIAQwCyAAwBsgAZA7IAx/+yAHX8sgDVAbEA4gOxAJAAsQBZAbEAFACwACECsADdALAA6gKwAJj/sABG/LAAsgOvAGEArwApAa8ANgOvAOX/rwDyAa4A/wOuAK0ArgBp/64AF/yuAHYBrgAxAK0A+gCtAAcDrQC1/60AY/ytAMIBrQDQA6wAfgCsAEYBrAACAKwADwKrABwEqwDKAKsAhv+rADT8qwBOAKoAFwGqACQDqgDT/6oAgfyqAOABqgDtA6kAmwCpALYEqQBkAakAHwCoAOgAqAD1AqgAo/+oAFH8qACwAagAvgOoAGwApwA0AacA8P+nAP0BpwAKBKYAuACmAHT/pgAi/KYAgQGmADwApQAFAaUAEgOlAMD/pQBv/KUAzgGlANsDpQCJAKQAUgGkAA0ApAAoBKMA1gCjAOMCowCR/6MAP/yjAFoAogAiAaIA3v+iAOsBogD4A6IApgChAGL/oQDBBKEAbwGhACoAoADzAKAAAAOgAK7/oABc/KAAvAGgAHcAnwBAAZ8A+/+fAKn8nwAIAp8AFQSfAMQAngB//54ASACdABABnQAdA50AzP+dAHr8nQDZAZ0A5gOdAJQAnABdAZwAGACcADMEnADhAJsA7gKbAJz/mwBlAJsALQGaAOn/mgCX/JoA9gGaAAMEmgCxAJoAbf+ZAHoBmQA1AJkA/gCZAAsDmAC6/5gAaPyYAMcBmADUA5gAggCYAEsBlwAGAJcAtPyXACEElwDPAJcAiv+WAFMAlgAbAZUA1/+VAIX8lQDkAZUA8QOVAJ8AlQBb/5UAugSVAGgBlAAjAJQAPgSUAOwAlAD5ApQAp/+TALUBkwBwAJMAOQGSAPT/kgCi/JIADwSSAL0AkgB4/5IAhQGRAEEAkQAJAZEAFwORAMX/kQBz/JAA0gGQAN8DkACNAJAAVgGQABEAjwC//I8ALASPANoAjwCV/44AXgCOACcBjgDi/44AkPyNAPwDjQCrAI0AZv+NAHMBjQAvAIwA9wCMAAQDjACz/4wAwAGLAHsAiwBEAYsA//+LAK38igAaBIoAyACKAIP/igCQAYoATACJABQBiQDQ/4kAfvyJAOoDiACYAIgAYQGIAB0AhwA3BIcA5QCHAPIChwCh/4cAaQCGADIBhgDt/4YAm/yGAAgEhgC2AIUAcf+FANAEhQB+AYUAOgCEAAIBhAAQA4QAvv+EAIYAgwBPAYMACgCDALn8gwAlBIMA0wCCAI7/ggCcAYIAVwCBACABgQDb/4EA9gOBAKQAgQBf/4AAvgSAAGwBgAAoAIAAQgSAAPAAfwD+An8ArP9/ALkBfwB0AH8APQF+APj/fgCm/H4AEwR+AMEAfgB8/30AigF9AEUAfQAOAX0AGwN8AMn/fADjA3wAkgB8AFoBewAWAHsAMAR7AN4AewCa/3oApwF6AGIAegArAXoA5v95AK8AeQBq/3kAdwF4ADMAeAD7AHgACQN4ALf/dwB/AHcALv13AEgBdwAEAHYAsvx2AB4EdgDMAHYAiP92AOcEdgCVAXUAUAB1ABkBdQDU/3QAnQB0AGUBdAAhAHMAOwRzAOkAcwD3AnMApf9zAG0AcgA2AXIA8f9yAP8BcgAMBHEAugBxAHX/cQCDAXEAPgBwAAcBcAAUA3AAwv9wAN0DcACLAG8AUwFvAA8AbwApBG8A1wBuAJP/bgCgAW4AWwBtACQBbQDf/20A7QFtAKgAbABxAWwALABsAPUA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";var Ch={chennai:[13.08,80.27],dubai:[25.2,55.27]},Rh={newYork:[40.71,-74],boston:[42.36,-71.06],chicago:[41.88,-87.63],austin:[30.27,-97.74],sanFrancisco:[37.77,-122.42],seattle:[47.61,-122.33]};function Ji(i,t,e=1){let n=Xe.degToRad(i),s=Xe.degToRad(t);return new R(Math.cos(n)*Math.cos(s)*e,Math.sin(n)*e,-Math.cos(n)*Math.sin(s)*e)}function IA(){let i=atob(Th),t=new Uint8Array(i.length);for(let e=0;e<i.length;e++)t[e]=i.charCodeAt(e);return new Int16Array(t.buffer)}var DA=`
  uniform float uSize; uniform float uPixelRatio;
  attribute float aSeed;
  varying float vFacing; varying float vSeed; varying float vLat;
  void main(){
    vec4 wp = modelMatrix * vec4(position,1.0);
    vec3 n = normalize(mat3(modelMatrix) * normalize(position));
    vec3 toCam = normalize(cameraPosition - wp.xyz);
    vFacing = dot(n,toCam);
    vSeed = aSeed; vLat = position.y;
    vec4 mv = viewMatrix * wp;
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPixelRatio * (1.0/ -mv.z) * (0.75 + 0.5*aSeed);
  }`,LA=`
  uniform vec3 uColA; uniform vec3 uColB; uniform float uTime;
  varying float vFacing; varying float vSeed; varying float vLat;
  void main(){
    vec2 c = gl_PointCoord - 0.5; float d = length(c);
    if(d>0.5) discard;
    float a = smoothstep(0.5,0.18,d);
    float facing = smoothstep(-0.05,0.35,vFacing);
    float tw = 0.75 + 0.25*sin(uTime*1.3 + vSeed*40.0);
    vec3 col = mix(uColA,uColB, smoothstep(-0.6,0.9,vLat)*0.6 + vSeed*0.2);
    gl_FragColor = vec4(col, a*facing*tw*0.95);
  }`,Bh=`
  varying vec3 vN; varying vec3 vV;
  void main(){
    vec4 wp = modelMatrix*vec4(position,1.0);
    vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition-wp.xyz);
    gl_Position = projectionMatrix*viewMatrix*wp;
  }`,UA=`
  uniform vec3 uCore; uniform vec3 uRim; uniform vec3 uSunDir;
  varying vec3 vN; varying vec3 vV;
  void main(){
    float f = pow(1.0 - max(dot(vN,vV),0.0), 2.6);
    float sun = pow(max(dot(vN, normalize(uSunDir)),0.0), 2.0);
    vec3 col = uCore + uRim*f*1.2 + vec3(1.0,0.72,0.45)*sun*0.18;
    gl_FragColor = vec4(col, 0.86 + f*0.14);
  }`,FA=`
  uniform vec3 uColor; varying vec3 vN; varying vec3 vV;
  void main(){
    float f = pow(0.72 - dot(vN,vV), 3.2);
    gl_FragColor = vec4(uColor, clamp(f,0.0,1.0)*0.38);
  }`,NA=`
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,OA=`
  uniform float uTime; uniform float uOffset; uniform vec3 uBase; uniform vec3 uHead; uniform float uReveal;
  varying vec2 vUv;
  void main(){
    float x = vUv.x;
    if(x > uReveal) discard;
    float t = mod(uTime*0.22 + uOffset, 1.35) - 0.15;
    float d = x - t;
    float trail = d < 0.0 ? exp(d*9.0) : exp(-d*120.0);
    float base = 0.38;
    vec3 col = mix(uBase, uHead, clamp(trail,0.0,1.0));
    gl_FragColor = vec4(col, clamp(base + trail*1.1, 0.0, 1.0));
  }`;function zA(i,t,e,n){let s=Ji(i[0],i[1],1),r=Ji(t[0],t[1],1),o=s.angleTo(r),a=[],c=64;for(let l=0;l<=c;l++){let h=l/c,f=new R().copy(s).lerp(r,h),u=Math.sin(o);f.copy(s).multiplyScalar(Math.sin((1-h)*o)/u).add(r.clone().multiplyScalar(Math.sin(h*o)/u));let d=1+n*Math.sin(Math.PI*h)*(.5+o/Math.PI);a.push(f.multiplyScalar(e*d))}return new ei(a)}function Ph({radius:i=1.4,pixelRatio:t=1,sunDir:e,dotTex:n,isMobile:s}){let r=new ye,o=new ye;r.add(o);let a=new te(new En(i*.985,64,48),new Ae({vertexShader:Bh,fragmentShader:UA,transparent:!0,uniforms:{uCore:{value:new Et("#123840")},uRim:{value:new Et("#7fb9bb")},uSunDir:{value:e.clone()}}}));o.add(a);let c=new te(new En(i*1.1,48,32),new Ae({vertexShader:Bh,fragmentShader:FA,transparent:!0,side:ge,depthWrite:!1,blending:ke,uniforms:{uColor:{value:new Et("#ffd9bd")}}}));r.add(c);let l=IA(),h=l.length/2,f=new Float32Array(h*3),u=new Float32Array(h);for(let L=0;L<h;L++){let nt=Ji(l[L*2]/10,l[L*2+1]/10,i);f.set([nt.x,nt.y,nt.z],L*3),u[L]=Math.random()}let d=new $t;d.setAttribute("position",new le(f,3)),d.setAttribute("aSeed",new le(u,1));let g=new Ae({vertexShader:DA,fragmentShader:LA,transparent:!0,depthWrite:!1,uniforms:{uSize:{value:s?34:30},uPixelRatio:{value:t},uTime:{value:0},uColA:{value:new Et("#f6e7cf")},uColB:{value:new Et("#ffd1a3")}}});o.add(new an(d,g));let x=[["chennai","newYork",0],["chennai","sanFrancisco",.35],["chennai","chicago",.7],["dubai","boston",.18],["dubai","austin",.55],["chennai","seattle",.9]],m=[];for(let[L,nt,et]of x){let lt=zA(Ch[L],Rh[nt],i,.16),It=new Ae({vertexShader:NA,fragmentShader:OA,transparent:!0,depthWrite:!1,blending:ke,uniforms:{uTime:{value:0},uOffset:{value:et},uReveal:{value:0},uBase:{value:new Et("#f4a26b")},uHead:{value:new Et("#fff4e2")}}});m.push(It),o.add(new te(new Vi(lt,96,s?.014:.011,6,!1),It))}let p=new on({map:n,color:"#ffcf9e",size:.2,transparent:!0,depthWrite:!1,blending:ke}),M=new on({map:n,color:"#ff8a4c",size:.32,transparent:!0,depthWrite:!1,blending:ke}),_=Object.values(Rh).map(([L,nt])=>Ji(L,nt,i*1.01)),y=Object.values(Ch).map(([L,nt])=>Ji(L,nt,i*1.01));o.add(new an(new $t().setFromPoints(_),p)),o.add(new an(new $t().setFromPoints(y),M));let B=Ji(57,-18,1).normalize(),C=new R(0,1,0),S=new Xt,P=new Xt,G=new R,A=new R,w=new R,z=new R,F=new R,H=new R;function J(L,nt){let et=B.clone().applyAxisAngle(C,nt);z.copy(et),F.copy(C).addScaledVector(z,-z.dot(C)).normalize(),H.crossVectors(F,z),G.copy(L).normalize(),A.set(0,1,0).addScaledVector(G,-G.dot(A.set(0,1,0))).normalize(),w.crossVectors(A,G),S.makeBasis(w,A,G),P.makeBasis(H,F,z).transpose(),o.quaternion.setFromRotationMatrix(S.multiply(P)),o.rotateOnWorldAxis(G,-.18)}function O(L,nt){g.uniforms.uTime.value=L;for(let et of m)et.uniforms.uTime.value=L,et.uniforms.uReveal.value=nt}function Z(){r.traverse(L=>{var nt,et,lt,It;(et=(nt=L.geometry)==null?void 0:nt.dispose)==null||et.call(nt),(It=(lt=L.material)==null?void 0:lt.dispose)==null||It.call(lt)})}return{group:r,spin:o,orient:J,update:O,dispose:Z,dotMat:g}}var $r=document.querySelector("[data-hero-stage]"),Ic=document.querySelector("[data-hero-canvas]"),Ih=document.querySelector("#home"),to=document.documentElement;function HA(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}var Ki=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!$r||!Ic||!HA())to.classList.add("no-webgl");else try{kA()}catch(i){console.error("[hero] 3D disabled:",i),to.classList.add("no-webgl")}function Dh(i="rgba(255,255,255,1)",t="rgba(255,220,180,0.35)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(.25,t),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new xs(e);return r.colorSpace=Le,r}function Pc(i){let t=ai(i),e=512,n=e/256,s=document.createElement("canvas");s.width=e,s.height=e;let r=s.getContext("2d");for(let c=0;c<140;c++){let l=t()*Math.PI,h=Math.pow(t(),.6)*92,f=e/2+Math.cos(l)*h*1.3*n,u=e*.6-Math.sin(l)*h*.62*n,d=(12+t()*30*(1-h/130))*n,g=r.createRadialGradient(f-d*.3,u-d*.4,0,f,u,d),x=238+Math.floor(t()*17);g.addColorStop(0,`rgba(${x},${x-4},${x-8},0.75)`),g.addColorStop(.55,`rgba(${x-28},${x-26},${x-22},0.45)`),g.addColorStop(1,"rgba(190,195,205,0)"),r.fillStyle=g,r.beginPath(),r.arc(f,u,d,0,Math.PI*2),r.fill()}let o=r.createLinearGradient(0,e*.42,0,e*.66);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(70,80,100,0.5)"),r.globalCompositeOperation="source-atop",r.fillStyle=o,r.fillRect(0,0,e,e);let a=new xs(s);return a.colorSpace=Le,a}function kA(){let i=window.matchMedia("(max-width: 760px)").matches,t=i||(navigator.hardwareConcurrency||8)<=4,e=Math.min(window.devicePixelRatio||1,t?1.5:1.8),n=new Pr({canvas:Ic,antialias:!t,powerPreference:"high-performance",alpha:!1});n.setPixelRatio(e),n.outputColorSpace=Le,n.toneMapping=uc,n.toneMappingExposure=1.08,n.shadowMap.enabled=!t,n.shadowMap.type=hc;let s=new Dr,r=new Et("#c3b8b2");s.fog=new Ir(r,.0105);let o=new Be(32,1,.1,400),a=new R(.55,.42,-.72).normalize(),c=new te(new En(180,48,24),new Ae({side:ge,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Et("#0b2131")},uMid:{value:new Et("#4a7088")},uHorizon:{value:new Et("#e9b994")},uBelow:{value:new Et("#b9b2b0")},uSun:{value:a},uSunCol:{value:new Et("#ffd7a8")}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:`
        uniform vec3 uTop,uMid,uHorizon,uBelow,uSun,uSunCol; varying vec3 vDir;
        void main(){
          float y = vDir.y;
          vec3 col = mix(uHorizon, uMid, smoothstep(-0.02,0.16,y));
          col = mix(col, uTop, smoothstep(0.14,0.5,y));
          col = mix(col, uBelow, smoothstep(0.0,-0.35,y));
          float s = max(dot(vDir, normalize(uSun)), 0.0);
          col += uSunCol * (pow(s, 8.0)*0.55 + pow(s, 120.0)*1.6);
          gl_FragColor = vec4(col,1.0);
        }`}));s.add(c),s.add(new Wr("#bcd3dc","#6b4a3a",.95));let l=new Wi("#ffd2a0",2.6);l.position.copy(a).multiplyScalar(14),l.castShadow=n.shadowMap.enabled,l.shadow.mapSize.set(1536,1536),Object.assign(l.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:1,far:30}),l.shadow.bias=-8e-4,l.shadow.normalBias=.02,s.add(l);let h=new Wi("#7fb3c4",.9);h.position.set(-6,2,-4),s.add(h);let f=new Wi("#f0a27a",.55);f.position.set(2,-6,4),s.add(f);let u=Dh(),d=new ye;s.add(d);let g=new ye;d.add(g);let{root:x,fragments:m,windowMat:p}=Sh({isMobile:i,glowTex:u});g.add(x),x.rotation.y=-.5,m.forEach(v=>d.add(v));let M=Ph({radius:1.35,pixelRatio:e,sunDir:a,dotTex:u,isMobile:i});d.add(M.group);let _=new Ae({transparent:!0,depthWrite:!1,blending:ke,uniforms:{uTime:{value:0},uReveal:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:`uniform float uTime; uniform float uReveal; varying vec2 vUv;
      void main(){ if(vUv.x>uReveal) discard;
        float p = fract(vUv.x*3.0 - uTime*0.45);
        float dash = smoothstep(0.0,0.08,p)*smoothstep(0.55,0.35,p);
        float a = 0.22 + dash*0.75;
        gl_FragColor = vec4(mix(vec3(0.96,0.55,0.32), vec3(1.0,0.92,0.8), dash), a*smoothstep(0.0,0.06,vUv.x)); }`}),y=new te(new $t,_);d.add(y);let B=[Pc(11),Pc(23),Pc(37)],C=[],S=ai(99),P=new wn(1,1),G=(v,I,W,q,X,vt,rt)=>{let ft=new zi({map:B[Math.floor(S()*3)],color:X,transparent:!0,opacity:vt,depthWrite:!1,fog:rt!=="front"}),Rt=new te(P,ft);Rt.position.set(v,I,W),Rt.scale.set(q*1.9,q,1),Rt.userData={base:Rt.position.clone(),drift:(S()-.5)*.12,phase:S()*6.28,layer:rt,baseOpacity:vt},Rt.renderOrder=rt==="front"?10:0,d.add(Rt),C.push(Rt)},A=t?9:16,w=t?7:12,z=t?2:4;for(let v=0;v<A;v++){let I=v%4===0;G(-34+S()*68,I?-6+S()*5:-9-S()*4,-24-S()*34,I?12+S()*8:14+S()*10,new Et("#f6dcc6").lerp(new Et("#9fb2bb"),.15+S()*.45),I?.9:.95,"back")}for(let v=0;v<w;v++){let I=v%2?1:-1;G(I*(1.5+S()*6)+1.5,-4.6-S()*1.8,-2.5-S()*4,3.5+S()*3.5,new Et("#fff3ea").lerp(new Et("#c8c5cc"),S()*.4),.92,"mid")}for(let v=0;v<z;v++)G((v%2?1:-1)*(6+S()*3),-3.6-S()*1.5,4.5+S()*2,4+S()*2,new Et("#ffffff"),.5,"front");let F=new Ur(new vs({map:Dh("rgba(255,236,210,1)","rgba(255,190,130,0.35)"),color:"#ffd6a6",transparent:!0,depthWrite:!1,blending:ke,fog:!1}));F.scale.setScalar(46),F.position.copy(a).multiplyScalar(120),s.add(F);let H=t?120:260,J=new Float32Array(H*3);for(let v=0;v<H;v++)J.set([(S()-.5)*22,(S()-.5)*12,-6+S()*16],v*3);let O=new $t;O.setAttribute("position",new le(J,3));let Z=new an(O,new on({map:u,size:.07,color:"#ffe2c0",transparent:!0,opacity:.7,depthWrite:!1,blending:ke}));d.add(Z);let L={islandPos:new R,globePos:new R,camBase:new R,look:new R,scale:1};function nt(v,I){let W=v/I;if(W<.8){let rt=W<.6?.7:.82;L.islandPos.set(0,2.85,0),L.globePos.set(.12,2.85+2.6*rt/.7*.92,-.4),L.camBase.set(0,5.4,20),L.look.set(0,.9,0),L.scale=rt}else W<1.25?(L.islandPos.set(1.6,-1.2,0),L.globePos.set(1.75,2.15,-.4),L.camBase.set(0,1.2,17.5),L.look.set(.6,.2,0),L.scale=.95):(L.islandPos.set(3.1,-1.05,0),L.globePos.set(3.25,2.45,-.45),L.camBase.set(0,1,15.2),L.look.set(1.15,.35,0),L.scale=1);g.position.copy(L.islandPos),g.scale.setScalar(L.scale),M.group.position.copy(L.globePos),M.group.scale.setScalar(L.scale);let q=L.globePos.clone().add(new R(-.55,-.85,.75).multiplyScalar(L.scale)),X=bh.clone().applyAxisAngle(new R(0,1,0),-.5).multiplyScalar(L.scale).add(L.islandPos),vt=q.clone().lerp(X,.5).add(new R(-.9,.2,.9));y.geometry.dispose(),y.geometry=new Vi(new ki(q,vt,X),60,.012,6,!1)}let et={x:0,y:0,tx:0,ty:0},lt=0,It=0,Gt=!0,Y=!1,$=0,pt=Ki?1:0,ht=new Xr,Pt=new R;function Bt(){let v=$r.clientWidth,I=$r.clientHeight;n.setSize(v,I,!1),o.aspect=v/I,o.fov=v/I<.8?40:32,o.updateProjectionMatrix(),nt(v,I)}function Lt(){if(Ki){It=0;return}let v=Ih.getBoundingClientRect(),I=Math.max(1,v.height-window.innerHeight);It=Xe.clamp(-v.top/I,0,1)}let zt=v=>1-Math.pow(1-v,3);function K(){let v=Math.min(ht.getDelta(),.05),I=ht.elapsedTime;Ki||(pt=Math.min(1,pt+v/2.6));let W=zt(pt);et.x+=(et.tx-et.x)*.045,et.y+=(et.ty-et.y)*.045,lt+=(It-lt)*.09;let q=lt,X=L.camBase;o.position.set(X.x+et.x*.9-q*.6,X.y+et.y*.5+(1-W)*1.6-q*2.8,X.z+(1-W)*4.5-q*3.2),o.lookAt(L.look.x+et.x*.15,L.look.y-q*1.6,L.look.z),g.position.y=L.islandPos.y+Math.sin(I*.55)*.08-(1-W)*.6,g.rotation.y=Math.sin(I*.12)*.05+q*.55+et.x*.06,g.rotation.z=Math.sin(I*.4)*.01;let vt=M.group;vt.position.y=L.globePos.y+Math.sin(I*.7+1)*.07+q*.9,Pt.copy(o.position).sub(vt.position).normalize(),M.orient(Pt,Math.sin(I*.09)*.22+q*.5);let rt=Xe.clamp((pt-.35)/.6,0,1);M.update(I,rt),_.uniforms.uTime.value=I,_.uniforms.uReveal.value=Xe.clamp((pt-.55)/.45,0,1),p.emissiveIntensity=1.2+Math.sin(I*1.7)*.08;for(let ft of m){let Rt=ft.userData;ft.position.y=Rt.baseY+Math.sin(I*Rt.speed+Rt.phase)*.12,ft.rotation.y+=v*.05}for(let ft of C){let Rt=ft.userData;ft.position.x=Rt.base.x+Math.sin(I*.05+Rt.phase)*.6+I*Rt.drift*.05,ft.quaternion.copy(o.quaternion),Rt.layer==="front"&&(ft.material.opacity=Rt.baseOpacity*(.35+q*1.1)),Rt.layer==="mid"&&(ft.position.y=Rt.base.y+q*1.4)}Z.rotation.y=I*.01,Z.position.y=Math.sin(I*.2)*.2,n.render(s,o)}function T(){Y&&(K(),$=requestAnimationFrame(T))}function ct(){Y||Ki||(Y=!0,ht.getDelta(),$=requestAnimationFrame(T))}function st(){Y=!1,cancelAnimationFrame($)}let tt=v=>{et.tx=(v.clientX/window.innerWidth-.5)*2,et.ty=-(v.clientY/window.innerHeight-.5)*2};!i&&!Ki&&window.addEventListener("pointermove",tt,{passive:!0});let ut=()=>Lt();window.addEventListener("scroll",ut,{passive:!0});let bt;new ResizeObserver(()=>{clearTimeout(bt),bt=setTimeout(()=>{Bt(),Y||K()},60)}).observe($r),new IntersectionObserver(([v])=>{Gt=v.isIntersecting,Gt&&!document.hidden?ct():st()},{rootMargin:"80px"}).observe(Ih),document.addEventListener("visibilitychange",()=>{document.hidden?st():Gt&&ct()}),Ic.addEventListener("webglcontextlost",v=>{v.preventDefault(),st(),to.classList.add("no-webgl")}),Bt(),Lt(),lt=It,K(),to.classList.add("hero-ready"),Ki?(pt=1,K()):ct(),window.__hero={renderer:n,scene:s,camera:o,frame:K,stop:st,start:ct,set intro(v){pt=v}}}
