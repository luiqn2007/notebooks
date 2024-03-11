import{g as a}from"./chunk.vendor_asn1-js.js";import{c as l}from"./chunk.vendor_crypto-js.js";import{e as d}from"./chunk.vendor_events.js";import{j as y}from"./chunk.vendor_json-buffer.js";const m=d,h=y,g=f=>{const e={redis:"@keyv/redis",rediss:"@keyv/redis",mongodb:"@keyv/mongo",mongo:"@keyv/mongo",sqlite:"@keyv/sqlite",postgresql:"@keyv/postgres",postgres:"@keyv/postgres",mysql:"@keyv/mysql",etcd:"@keyv/etcd",offline:"@keyv/offline",tiered:"@keyv/tiered"};if(f.adapter||f.uri){const r=f.adapter||/^[^:+]*/.exec(f.uri)[0];return new(l(e[r]))(f)}return new Map},c=["sqlite","postgres","mysql","mongo","redis","tiered"];class v extends m{constructor(e,{emitErrors:r=!0,...o}={}){if(super(),this.opts={namespace:"keyv",serialize:h.stringify,deserialize:h.parse,...typeof e=="string"?{uri:e}:e,...o},!this.opts.store){const i={...this.opts};this.opts.store=g(i)}if(this.opts.compression){const i=this.opts.compression;this.opts.serialize=i.serialize.bind(i),this.opts.deserialize=i.deserialize.bind(i)}typeof this.opts.store.on=="function"&&r&&this.opts.store.on("error",i=>this.emit("error",i)),this.opts.store.namespace=this.opts.namespace;const n=i=>async function*(){for await(const[s,p]of typeof i=="function"?i(this.opts.store.namespace):i){const t=await this.opts.deserialize(p);if(!(this.opts.store.namespace&&!s.includes(this.opts.store.namespace))){if(typeof t.expires=="number"&&Date.now()>t.expires){this.delete(s);continue}yield[this._getKeyUnprefix(s),t.value]}}};typeof this.opts.store[Symbol.iterator]=="function"&&this.opts.store instanceof Map?this.iterator=n(this.opts.store):typeof this.opts.store.iterator=="function"&&this.opts.store.opts&&this._checkIterableAdaptar()&&(this.iterator=n(this.opts.store.iterator.bind(this.opts.store)))}_checkIterableAdaptar(){return c.includes(this.opts.store.opts.dialect)||c.findIndex(e=>this.opts.store.opts.url.includes(e))>=0}_getKeyPrefix(e){return`${this.opts.namespace}:${e}`}_getKeyPrefixArray(e){return e.map(r=>`${this.opts.namespace}:${r}`)}_getKeyUnprefix(e){return e.split(":").splice(1).join(":")}get(e,r){const{store:o}=this.opts,n=Array.isArray(e),i=n?this._getKeyPrefixArray(e):this._getKeyPrefix(e);if(n&&o.getMany===void 0){const s=[];for(const p of i)s.push(Promise.resolve().then(()=>o.get(p)).then(t=>typeof t=="string"?this.opts.deserialize(t):this.opts.compression?this.opts.deserialize(t):t).then(t=>{if(t!=null)return typeof t.expires=="number"&&Date.now()>t.expires?this.delete(p).then(()=>{}):r&&r.raw?t:t.value}));return Promise.allSettled(s).then(p=>{const t=[];for(const u of p)t.push(u.value);return t})}return Promise.resolve().then(()=>n?o.getMany(i):o.get(i)).then(s=>typeof s=="string"?this.opts.deserialize(s):this.opts.compression?this.opts.deserialize(s):s).then(s=>{if(s!=null){if(n){const p=[];for(let t of s){if(typeof t=="string"&&(t=this.opts.deserialize(t)),t==null){p.push(void 0);continue}typeof t.expires=="number"&&Date.now()>t.expires?(this.delete(e).then(()=>{}),p.push(void 0)):p.push(r&&r.raw?t:t.value)}return p}return typeof s.expires=="number"&&Date.now()>s.expires?this.delete(e).then(()=>{}):r&&r.raw?s:s.value}})}set(e,r,o){const n=this._getKeyPrefix(e);typeof o>"u"&&(o=this.opts.ttl),o===0&&(o=void 0);const{store:i}=this.opts;return Promise.resolve().then(()=>{const s=typeof o=="number"?Date.now()+o:null;return typeof r=="symbol"&&this.emit("error","symbol cannot be serialized"),r={value:r,expires:s},this.opts.serialize(r)}).then(s=>i.set(n,s,o)).then(()=>!0)}delete(e){const{store:r}=this.opts;if(Array.isArray(e)){const n=this._getKeyPrefixArray(e);if(r.deleteMany===void 0){const i=[];for(const s of n)i.push(r.delete(s));return Promise.allSettled(i).then(s=>s.every(p=>p.value===!0))}return Promise.resolve().then(()=>r.deleteMany(n))}const o=this._getKeyPrefix(e);return Promise.resolve().then(()=>r.delete(o))}clear(){const{store:e}=this.opts;return Promise.resolve().then(()=>e.clear())}has(e){const r=this._getKeyPrefix(e),{store:o}=this.opts;return Promise.resolve().then(async()=>typeof o.has=="function"?o.has(r):await o.get(r)!==void 0)}disconnect(){const{store:e}=this.opts;if(typeof e.disconnect=="function")return e.disconnect()}}var x=v;const z=a(x);export{z as K};
