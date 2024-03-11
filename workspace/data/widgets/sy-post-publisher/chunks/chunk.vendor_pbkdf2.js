import{c as i}from"./chunk.vendor_asn1-js.js";import{r as K}from"./chunk.vendor_safe-buffer.js";import{d as X}from"./chunk.vendor_vite-plugin-node-polyfills.js";import{a as J}from"./chunk.vendor_create-hash.js";import{r as Q}from"./chunk.vendor_ripemd160.js";import{r as W}from"./chunk.vendor_sha-js.js";var E={},D,U;function V(){if(U)return D;U=1;var u=Math.pow(2,30)-1;return D=function(s,h){if(typeof s!="number")throw new TypeError("Iterations not a number");if(s<0)throw new TypeError("Bad iterations");if(typeof h!="number")throw new TypeError("Key length not a number");if(h<0||h>u||h!==h)throw new TypeError("Bad key length")},D}var x,L;function Z(){if(L)return x;L=1;var u;if(i.process&&i.process.browser)u="utf-8";else if(i.process&&i.process.version){var s=parseInt(X.process.version.split(".")[0].slice(1),10);u=s>=6?"utf-8":"binary"}else u="utf-8";return x=u,x}var M,_;function j(){if(_)return M;_=1;var u=K().Buffer;return M=function(s,h,v){if(u.isBuffer(s))return s;if(typeof s=="string")return u.from(s,h);if(ArrayBuffer.isView(s))return u.from(s.buffer);throw new TypeError(v+" must be a string, a Buffer, a typed array or a DataView")},M}var z,C;function G(){if(C)return z;C=1;var u=J(),s=Q(),h=W(),v=K().Buffer,y=V(),w=Z(),m=j(),P=v.alloc(128),B={md5:16,sha1:20,sha224:28,sha256:32,sha384:48,sha512:64,rmd160:20,ripemd160:20};function q(o,n,t){var e=p(o),r=o==="sha512"||o==="sha384"?128:64;n.length>r?n=e(n):n.length<r&&(n=v.concat([n,P],r));for(var c=v.allocUnsafe(r+B[o]),a=v.allocUnsafe(r+B[o]),f=0;f<r;f++)c[f]=n[f]^54,a[f]=n[f]^92;var d=v.allocUnsafe(r+t+4);c.copy(d,0,0,r),this.ipad1=d,this.ipad2=c,this.opad=a,this.alg=o,this.blocksize=r,this.hash=e,this.size=B[o]}q.prototype.run=function(o,n){o.copy(n,this.blocksize);var t=this.hash(n);return t.copy(this.opad,this.blocksize),this.hash(this.opad)};function p(o){function n(e){return h(o).update(e).digest()}function t(e){return new s().update(e).digest()}return o==="rmd160"||o==="ripemd160"?t:o==="md5"?u:n}function b(o,n,t,e,r){y(t,e),o=m(o,w,"Password"),n=m(n,w,"Salt"),r=r||"sha1";var c=new q(r,o,n.length),a=v.allocUnsafe(e),f=v.allocUnsafe(n.length+4);n.copy(f,0,0,n.length);for(var d=0,l=B[r],A=Math.ceil(e/l),H=1;H<=A;H++){f.writeUInt32BE(H,n.length);for(var R=c.run(f,c.ipad1),T=R,F=1;F<t;F++){T=c.run(T,c.ipad2);for(var S=0;S<l;S++)R[S]^=T[S]}R.copy(a,d),d+=l}return a}return z=b,z}var I,N;function Y(){if(N)return I;N=1;var u=K().Buffer,s=V(),h=Z(),v=G(),y=j(),w,m=i.crypto&&i.crypto.subtle,P={sha:"SHA-1","sha-1":"SHA-1",sha1:"SHA-1",sha256:"SHA-256","sha-256":"SHA-256",sha384:"SHA-384","sha-384":"SHA-384","sha-512":"SHA-512",sha512:"SHA-512"},B=[];function q(t){if(i.process&&!i.process.browser||!m||!m.importKey||!m.deriveBits)return Promise.resolve(!1);if(B[t]!==void 0)return B[t];w=w||u.alloc(8);var e=o(w,w,10,128,t).then(function(){return!0}).catch(function(){return!1});return B[t]=e,e}var p;function b(){return p||(i.process&&i.process.nextTick?p=i.process.nextTick:i.queueMicrotask?p=i.queueMicrotask:i.setImmediate?p=i.setImmediate:p=i.setTimeout,p)}function o(t,e,r,c,a){return m.importKey("raw",t,{name:"PBKDF2"},!1,["deriveBits"]).then(function(f){return m.deriveBits({name:"PBKDF2",salt:e,iterations:r,hash:{name:a}},f,c<<3)}).then(function(f){return u.from(f)})}function n(t,e){t.then(function(r){b()(function(){e(null,r)})},function(r){b()(function(){e(r)})})}return I=function(t,e,r,c,a,f){typeof a=="function"&&(f=a,a=void 0),a=a||"sha1";var d=P[a.toLowerCase()];if(!d||typeof i.Promise!="function"){b()(function(){var l;try{l=v(t,e,r,c,a)}catch(A){return f(A)}f(null,l)});return}if(s(r,c),t=y(t,h,"Password"),e=y(e,h,"Salt"),typeof f!="function")throw new Error("No callback provided to pbkdf2");n(q(d).then(function(l){return l?o(t,e,r,c,d):v(t,e,r,c,a)}),f)},I}var O;function tr(){return O||(O=1,E.pbkdf2=Y(),E.pbkdf2Sync=G()),E}export{tr as r};