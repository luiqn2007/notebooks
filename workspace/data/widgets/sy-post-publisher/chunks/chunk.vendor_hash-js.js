import{r as t0}from"./chunk.vendor_minimalistic-assert.js";import{r as P0}from"./chunk.vendor_inherits.js";var f0={},S={},z0;function N(){if(z0)return S;z0=1;var u=t0(),x=P0();S.inherits=x;function c(r,t){return(r.charCodeAt(t)&64512)!==55296||t<0||t+1>=r.length?!1:(r.charCodeAt(t+1)&64512)===56320}function d(r,t){if(Array.isArray(r))return r.slice();if(!r)return[];var e=[];if(typeof r=="string")if(t){if(t==="hex")for(r=r.replace(/[^a-z0-9]+/ig,""),r.length%2!==0&&(r="0"+r),n=0;n<r.length;n+=2)e.push(parseInt(r[n]+r[n+1],16))}else for(var i=0,n=0;n<r.length;n++){var a=r.charCodeAt(n);a<128?e[i++]=a:a<2048?(e[i++]=a>>6|192,e[i++]=a&63|128):c(r,n)?(a=65536+((a&1023)<<10)+(r.charCodeAt(++n)&1023),e[i++]=a>>18|240,e[i++]=a>>12&63|128,e[i++]=a>>6&63|128,e[i++]=a&63|128):(e[i++]=a>>12|224,e[i++]=a>>6&63|128,e[i++]=a&63|128)}else for(n=0;n<r.length;n++)e[n]=r[n]|0;return e}S.toArray=d;function h(r){for(var t="",e=0;e<r.length;e++)t+=f(r[e].toString(16));return t}S.toHex=h;function l(r){var t=r>>>24|r>>>8&65280|r<<8&16711680|(r&255)<<24;return t>>>0}S.htonl=l;function W(r,t){for(var e="",i=0;i<r.length;i++){var n=r[i];t==="little"&&(n=l(n)),e+=b(n.toString(16))}return e}S.toHex32=W;function f(r){return r.length===1?"0"+r:r}S.zero2=f;function b(r){return r.length===7?"0"+r:r.length===6?"00"+r:r.length===5?"000"+r:r.length===4?"0000"+r:r.length===3?"00000"+r:r.length===2?"000000"+r:r.length===1?"0000000"+r:r}S.zero8=b;function m(r,t,e,i){var n=e-t;u(n%4===0);for(var a=new Array(n/4),s=0,v=t;s<a.length;s++,v+=4){var y;i==="big"?y=r[v]<<24|r[v+1]<<16|r[v+2]<<8|r[v+3]:y=r[v+3]<<24|r[v+2]<<16|r[v+1]<<8|r[v],a[s]=y>>>0}return a}S.join32=m;function o(r,t){for(var e=new Array(r.length*4),i=0,n=0;i<r.length;i++,n+=4){var a=r[i];t==="big"?(e[n]=a>>>24,e[n+1]=a>>>16&255,e[n+2]=a>>>8&255,e[n+3]=a&255):(e[n+3]=a>>>24,e[n+2]=a>>>16&255,e[n+1]=a>>>8&255,e[n]=a&255)}return e}S.split32=o;function z(r,t){return r>>>t|r<<32-t}S.rotr32=z;function L(r,t){return r<<t|r>>>32-t}S.rotl32=L;function C(r,t){return r+t>>>0}S.sum32=C;function H(r,t,e){return r+t+e>>>0}S.sum32_3=H;function _(r,t,e,i){return r+t+e+i>>>0}S.sum32_4=_;function p(r,t,e,i,n){return r+t+e+i+n>>>0}S.sum32_5=p;function R(r,t,e,i){var n=r[t],a=r[t+1],s=i+a>>>0,v=(s<i?1:0)+e+n;r[t]=v>>>0,r[t+1]=s}S.sum64=R;function B(r,t,e,i){var n=t+i>>>0,a=(n<t?1:0)+r+e;return a>>>0}S.sum64_hi=B;function A(r,t,e,i){var n=t+i;return n>>>0}S.sum64_lo=A;function g(r,t,e,i,n,a,s,v){var y=0,q=t;q=q+i>>>0,y+=q<t?1:0,q=q+a>>>0,y+=q<a?1:0,q=q+v>>>0,y+=q<v?1:0;var F=r+e+n+s+y;return F>>>0}S.sum64_4_hi=g;function D(r,t,e,i,n,a,s,v){var y=t+i+a+v;return y>>>0}S.sum64_4_lo=D;function E(r,t,e,i,n,a,s,v,y,q){var F=0,k=t;k=k+i>>>0,F+=k<t?1:0,k=k+a>>>0,F+=k<a?1:0,k=k+v>>>0,F+=k<v?1:0,k=k+q>>>0,F+=k<q?1:0;var U=r+e+n+s+y+F;return U>>>0}S.sum64_5_hi=E;function M(r,t,e,i,n,a,s,v,y,q){var F=t+i+a+v+q;return F>>>0}S.sum64_5_lo=M;function P(r,t,e){var i=t<<32-e|r>>>e;return i>>>0}S.rotr64_hi=P;function K(r,t,e){var i=r<<32-e|t>>>e;return i>>>0}S.rotr64_lo=K;function I(r,t,e){return r>>>e}S.shr64_hi=I;function $(r,t,e){var i=r<<32-e|t>>>e;return i>>>0}return S.shr64_lo=$,S}var u0={},C0;function e0(){if(C0)return u0;C0=1;var u=N(),x=t0();function c(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}return u0.BlockHash=c,c.prototype.update=function(h,l){if(h=u.toArray(h,l),this.pending?this.pending=this.pending.concat(h):this.pending=h,this.pendingTotal+=h.length,this.pending.length>=this._delta8){h=this.pending;var W=h.length%this._delta8;this.pending=h.slice(h.length-W,h.length),this.pending.length===0&&(this.pending=null),h=u.join32(h,0,h.length-W,this.endian);for(var f=0;f<h.length;f+=this._delta32)this._update(h,f,f+this._delta32)}return this},c.prototype.digest=function(h){return this.update(this._pad()),x(this.pending===null),this._digest(h)},c.prototype._pad=function(){var h=this.pendingTotal,l=this._delta8,W=l-(h+this.padLength)%l,f=new Array(W+this.padLength);f[0]=128;for(var b=1;b<W;b++)f[b]=0;if(h<<=3,this.endian==="big"){for(var m=8;m<this.padLength;m++)f[b++]=0;f[b++]=0,f[b++]=0,f[b++]=0,f[b++]=0,f[b++]=h>>>24&255,f[b++]=h>>>16&255,f[b++]=h>>>8&255,f[b++]=h&255}else for(f[b++]=h&255,f[b++]=h>>>8&255,f[b++]=h>>>16&255,f[b++]=h>>>24&255,f[b++]=0,f[b++]=0,f[b++]=0,f[b++]=0,m=8;m<this.padLength;m++)f[b++]=0;return f},u0}var Q={},J={},B0;function I0(){if(B0)return J;B0=1;var u=N(),x=u.rotr32;function c(o,z,L,C){if(o===0)return d(z,L,C);if(o===1||o===3)return l(z,L,C);if(o===2)return h(z,L,C)}J.ft_1=c;function d(o,z,L){return o&z^~o&L}J.ch32=d;function h(o,z,L){return o&z^o&L^z&L}J.maj32=h;function l(o,z,L){return o^z^L}J.p32=l;function W(o){return x(o,2)^x(o,13)^x(o,22)}J.s0_256=W;function f(o){return x(o,6)^x(o,11)^x(o,25)}J.s1_256=f;function b(o){return x(o,7)^x(o,18)^o>>>3}J.g0_256=b;function m(o){return x(o,17)^x(o,19)^o>>>10}return J.g1_256=m,J}var c0,y0;function U0(){if(y0)return c0;y0=1;var u=N(),x=e0(),c=I0(),d=u.rotl32,h=u.sum32,l=u.sum32_5,W=c.ft_1,f=x.BlockHash,b=[1518500249,1859775393,2400959708,3395469782];function m(){if(!(this instanceof m))return new m;f.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}return u.inherits(m,f),c0=m,m.blockSize=512,m.outSize=160,m.hmacStrength=80,m.padLength=64,m.prototype._update=function(z,L){for(var C=this.W,H=0;H<16;H++)C[H]=z[L+H];for(;H<C.length;H++)C[H]=d(C[H-3]^C[H-8]^C[H-14]^C[H-16],1);var _=this.h[0],p=this.h[1],R=this.h[2],B=this.h[3],A=this.h[4];for(H=0;H<C.length;H++){var g=~~(H/20),D=l(d(_,5),W(g,p,R,B),A,C[H],b[g]);A=B,B=R,R=d(p,30),p=_,_=D}this.h[0]=h(this.h[0],_),this.h[1]=h(this.h[1],p),this.h[2]=h(this.h[2],R),this.h[3]=h(this.h[3],B),this.h[4]=h(this.h[4],A)},m.prototype._digest=function(z){return z==="hex"?u.toHex32(this.h,"big"):u.split32(this.h,"big")},c0}var x0,R0;function $0(){if(R0)return x0;R0=1;var u=N(),x=e0(),c=I0(),d=t0(),h=u.sum32,l=u.sum32_4,W=u.sum32_5,f=c.ch32,b=c.maj32,m=c.s0_256,o=c.s1_256,z=c.g0_256,L=c.g1_256,C=x.BlockHash,H=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function _(){if(!(this instanceof _))return new _;C.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=H,this.W=new Array(64)}return u.inherits(_,C),x0=_,_.blockSize=512,_.outSize=256,_.hmacStrength=192,_.padLength=64,_.prototype._update=function(R,B){for(var A=this.W,g=0;g<16;g++)A[g]=R[B+g];for(;g<A.length;g++)A[g]=l(L(A[g-2]),A[g-7],z(A[g-15]),A[g-16]);var D=this.h[0],E=this.h[1],M=this.h[2],P=this.h[3],K=this.h[4],I=this.h[5],$=this.h[6],r=this.h[7];for(d(this.k.length===A.length),g=0;g<A.length;g++){var t=W(r,o(K),f(K,I,$),this.k[g],A[g]),e=h(m(D),b(D,E,M));r=$,$=I,I=K,K=h(P,t),P=M,M=E,E=D,D=h(t,e)}this.h[0]=h(this.h[0],D),this.h[1]=h(this.h[1],E),this.h[2]=h(this.h[2],M),this.h[3]=h(this.h[3],P),this.h[4]=h(this.h[4],K),this.h[5]=h(this.h[5],I),this.h[6]=h(this.h[6],$),this.h[7]=h(this.h[7],r)},_.prototype._digest=function(R){return R==="hex"?u.toHex32(this.h,"big"):u.split32(this.h,"big")},x0}var o0,L0;function G0(){if(L0)return o0;L0=1;var u=N(),x=$0();function c(){if(!(this instanceof c))return new c;x.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}return u.inherits(c,x),o0=c,c.blockSize=512,c.outSize=224,c.hmacStrength=192,c.padLength=64,c.prototype._digest=function(h){return h==="hex"?u.toHex32(this.h.slice(0,7),"big"):u.split32(this.h.slice(0,7),"big")},o0}var v0,W0;function M0(){if(W0)return v0;W0=1;var u=N(),x=e0(),c=t0(),d=u.rotr64_hi,h=u.rotr64_lo,l=u.shr64_hi,W=u.shr64_lo,f=u.sum64,b=u.sum64_hi,m=u.sum64_lo,o=u.sum64_4_hi,z=u.sum64_4_lo,L=u.sum64_5_hi,C=u.sum64_5_lo,H=x.BlockHash,_=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function p(){if(!(this instanceof p))return new p;H.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=_,this.W=new Array(160)}u.inherits(p,H),v0=p,p.blockSize=1024,p.outSize=512,p.hmacStrength=192,p.padLength=128,p.prototype._prepareBlock=function(e,i){for(var n=this.W,a=0;a<32;a++)n[a]=e[i+a];for(;a<n.length;a+=2){var s=$(n[a-4],n[a-3]),v=r(n[a-4],n[a-3]),y=n[a-14],q=n[a-13],F=K(n[a-30],n[a-29]),k=I(n[a-30],n[a-29]),U=n[a-32],G=n[a-31];n[a]=o(s,v,y,q,F,k,U,G),n[a+1]=z(s,v,y,q,F,k,U,G)}},p.prototype._update=function(e,i){this._prepareBlock(e,i);var n=this.W,a=this.h[0],s=this.h[1],v=this.h[2],y=this.h[3],q=this.h[4],F=this.h[5],k=this.h[6],U=this.h[7],G=this.h[8],O=this.h[9],X=this.h[10],Y=this.h[11],Z=this.h[12],a0=this.h[13],i0=this.h[14],s0=this.h[15];c(this.k.length===n.length);for(var V=0;V<n.length;V+=2){var w=i0,j=s0,T=M(G,O),r0=P(G,O),_0=R(G,O,X,Y,Z),p0=B(G,O,X,Y,Z,a0),g0=this.k[V],m0=this.k[V+1],S0=n[V],H0=n[V+1],h0=L(w,j,T,r0,_0,p0,g0,m0,S0,H0),n0=C(w,j,T,r0,_0,p0,g0,m0,S0,H0);w=D(a,s),j=E(a,s),T=A(a,s,v,y,q),r0=g(a,s,v,y,q,F);var A0=b(w,j,T,r0),q0=m(w,j,T,r0);i0=Z,s0=a0,Z=X,a0=Y,X=G,Y=O,G=b(k,U,h0,n0),O=m(U,U,h0,n0),k=q,U=F,q=v,F=y,v=a,y=s,a=b(h0,n0,A0,q0),s=m(h0,n0,A0,q0)}f(this.h,0,a,s),f(this.h,2,v,y),f(this.h,4,q,F),f(this.h,6,k,U),f(this.h,8,G,O),f(this.h,10,X,Y),f(this.h,12,Z,a0),f(this.h,14,i0,s0)},p.prototype._digest=function(e){return e==="hex"?u.toHex32(this.h,"big"):u.split32(this.h,"big")};function R(t,e,i,n,a){var s=t&i^~t&a;return s<0&&(s+=4294967296),s}function B(t,e,i,n,a,s){var v=e&n^~e&s;return v<0&&(v+=4294967296),v}function A(t,e,i,n,a){var s=t&i^t&a^i&a;return s<0&&(s+=4294967296),s}function g(t,e,i,n,a,s){var v=e&n^e&s^n&s;return v<0&&(v+=4294967296),v}function D(t,e){var i=d(t,e,28),n=d(e,t,2),a=d(e,t,7),s=i^n^a;return s<0&&(s+=4294967296),s}function E(t,e){var i=h(t,e,28),n=h(e,t,2),a=h(e,t,7),s=i^n^a;return s<0&&(s+=4294967296),s}function M(t,e){var i=d(t,e,14),n=d(t,e,18),a=d(e,t,9),s=i^n^a;return s<0&&(s+=4294967296),s}function P(t,e){var i=h(t,e,14),n=h(t,e,18),a=h(e,t,9),s=i^n^a;return s<0&&(s+=4294967296),s}function K(t,e){var i=d(t,e,1),n=d(t,e,8),a=l(t,e,7),s=i^n^a;return s<0&&(s+=4294967296),s}function I(t,e){var i=h(t,e,1),n=h(t,e,8),a=W(t,e,7),s=i^n^a;return s<0&&(s+=4294967296),s}function $(t,e){var i=d(t,e,19),n=d(e,t,29),a=l(t,e,6),s=i^n^a;return s<0&&(s+=4294967296),s}function r(t,e){var i=h(t,e,19),n=h(e,t,29),a=W(t,e,6),s=i^n^a;return s<0&&(s+=4294967296),s}return v0}var d0,k0;function J0(){if(k0)return d0;k0=1;var u=N(),x=M0();function c(){if(!(this instanceof c))return new c;x.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}return u.inherits(c,x),d0=c,c.blockSize=1024,c.outSize=384,c.hmacStrength=192,c.padLength=128,c.prototype._digest=function(h){return h==="hex"?u.toHex32(this.h.slice(0,12),"big"):u.split32(this.h.slice(0,12),"big")},d0}var D0;function N0(){return D0||(D0=1,Q.sha1=U0(),Q.sha224=G0(),Q.sha256=$0(),Q.sha384=J0(),Q.sha512=M0()),Q}var b0={},F0;function O0(){if(F0)return b0;F0=1;var u=N(),x=e0(),c=u.rotl32,d=u.sum32,h=u.sum32_3,l=u.sum32_4,W=x.BlockHash;function f(){if(!(this instanceof f))return new f;W.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}u.inherits(f,W),b0.ripemd160=f,f.blockSize=512,f.outSize=160,f.hmacStrength=192,f.padLength=64,f.prototype._update=function(p,R){for(var B=this.h[0],A=this.h[1],g=this.h[2],D=this.h[3],E=this.h[4],M=B,P=A,K=g,I=D,$=E,r=0;r<80;r++){var t=d(c(l(B,b(r,A,g,D),p[z[r]+R],m(r)),C[r]),E);B=E,E=D,D=c(g,10),g=A,A=t,t=d(c(l(M,b(79-r,P,K,I),p[L[r]+R],o(r)),H[r]),$),M=$,$=I,I=c(K,10),K=P,P=t}t=h(this.h[1],g,I),this.h[1]=h(this.h[2],D,$),this.h[2]=h(this.h[3],E,M),this.h[3]=h(this.h[4],B,P),this.h[4]=h(this.h[0],A,K),this.h[0]=t},f.prototype._digest=function(p){return p==="hex"?u.toHex32(this.h,"little"):u.split32(this.h,"little")};function b(_,p,R,B){return _<=15?p^R^B:_<=31?p&R|~p&B:_<=47?(p|~R)^B:_<=63?p&B|R&~B:p^(R|~B)}function m(_){return _<=15?0:_<=31?1518500249:_<=47?1859775393:_<=63?2400959708:2840853838}function o(_){return _<=15?1352829926:_<=31?1548603684:_<=47?1836072691:_<=63?2053994217:0}var z=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],L=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],C=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],H=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11];return b0}var l0,E0;function Q0(){if(E0)return l0;E0=1;var u=N(),x=t0();function c(d,h,l){if(!(this instanceof c))return new c(d,h,l);this.Hash=d,this.blockSize=d.blockSize/8,this.outSize=d.outSize/8,this.inner=null,this.outer=null,this._init(u.toArray(h,l))}return l0=c,c.prototype._init=function(h){h.length>this.blockSize&&(h=new this.Hash().update(h).digest()),x(h.length<=this.blockSize);for(var l=h.length;l<this.blockSize;l++)h.push(0);for(l=0;l<h.length;l++)h[l]^=54;for(this.inner=new this.Hash().update(h),l=0;l<h.length;l++)h[l]^=106;this.outer=new this.Hash().update(h)},c.prototype.update=function(h,l){return this.inner.update(h,l),this},c.prototype.digest=function(h){return this.outer.update(this.inner.digest()),this.outer.digest(h)},l0}var K0;function Y0(){return K0||(K0=1,function(u){var x=u;x.utils=N(),x.common=e0(),x.sha=N0(),x.ripemd=O0(),x.hmac=Q0(),x.sha1=x.sha.sha1,x.sha256=x.sha.sha256,x.sha224=x.sha.sha224,x.sha384=x.sha.sha384,x.sha512=x.sha.sha512,x.ripemd160=x.ripemd.ripemd160}(f0)),f0}export{Y0 as r};
