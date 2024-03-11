import{i as y,E as r}from"./chunk.vendor_domelementtype.js";class p{constructor(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}get parentNode(){return this.parent}set parentNode(t){this.parent=t}get previousSibling(){return this.prev}set previousSibling(t){this.prev=t}get nextSibling(){return this.next}set nextSibling(t){this.next=t}cloneNode(t=!1){return N(this,t)}}class c extends p{constructor(t){super(),this.data=t}get nodeValue(){return this.data}set nodeValue(t){this.data=t}}class o extends c{constructor(){super(...arguments),this.type=r.Text}get nodeType(){return 3}}class f extends c{constructor(){super(...arguments),this.type=r.Comment}get nodeType(){return 8}}class x extends c{constructor(t,s){super(s),this.name=t,this.type=r.Directive}get nodeType(){return 1}}class d extends p{constructor(t){super(),this.children=t}get firstChild(){var t;return(t=this.children[0])!==null&&t!==void 0?t:null}get lastChild(){return this.children.length>0?this.children[this.children.length-1]:null}get childNodes(){return this.children}set childNodes(t){this.children=t}}class m extends d{constructor(){super(...arguments),this.type=r.CDATA}get nodeType(){return 4}}class h extends d{constructor(){super(...arguments),this.type=r.Root}get nodeType(){return 9}}class g extends d{constructor(t,s,n=[],i=t==="script"?r.Script:t==="style"?r.Style:r.Tag){super(n),this.name=t,this.attribs=s,this.type=i}get nodeType(){return 1}get tagName(){return this.name}set tagName(t){this.name=t}get attributes(){return Object.keys(this.attribs).map(t=>{var s,n;return{name:t,value:this.attribs[t],namespace:(s=this["x-attribsNamespace"])===null||s===void 0?void 0:s[t],prefix:(n=this["x-attribsPrefix"])===null||n===void 0?void 0:n[t]}})}}function b(e){return y(e)}function I(e){return e.type===r.CDATA}function w(e){return e.type===r.Text}function C(e){return e.type===r.Comment}function T(e){return e.type===r.Directive}function v(e){return e.type===r.Root}function D(e){return Object.prototype.hasOwnProperty.call(e,"children")}function N(e,t=!1){let s;if(w(e))s=new o(e.data);else if(C(e))s=new f(e.data);else if(b(e)){const n=t?l(e.children):[],i=new g(e.name,{...e.attribs},n);n.forEach(a=>a.parent=i),e.namespace!=null&&(i.namespace=e.namespace),e["x-attribsNamespace"]&&(i["x-attribsNamespace"]={...e["x-attribsNamespace"]}),e["x-attribsPrefix"]&&(i["x-attribsPrefix"]={...e["x-attribsPrefix"]}),s=i}else if(I(e)){const n=t?l(e.children):[],i=new m(n);n.forEach(a=>a.parent=i),s=i}else if(v(e)){const n=t?l(e.children):[],i=new h(n);n.forEach(a=>a.parent=i),e["x-mode"]&&(i["x-mode"]=e["x-mode"]),s=i}else if(T(e)){const n=new x(e.name,e.data);e["x-name"]!=null&&(n["x-name"]=e["x-name"],n["x-publicId"]=e["x-publicId"],n["x-systemId"]=e["x-systemId"]),s=n}else throw new Error(`Not implemented yet: ${e.type}`);return s.startIndex=e.startIndex,s.endIndex=e.endIndex,e.sourceCodeLocation!=null&&(s.sourceCodeLocation=e.sourceCodeLocation),s}function l(e){const t=e.map(s=>N(s,!0));for(let s=1;s<t.length;s++)t[s].prev=t[s-1],t[s-1].next=t[s];return t}const u={withStartIndices:!1,withEndIndices:!1,xmlMode:!1};class E{constructor(t,s,n){this.dom=[],this.root=new h(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof s=="function"&&(n=s,s=u),typeof t=="object"&&(s=t,t=void 0),this.callback=t??null,this.options=s??u,this.elementCB=n??null}onparserinit(t){this.parser=t}onreset(){this.dom=[],this.root=new h(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null}onend(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))}onerror(t){this.handleCallback(t)}onclosetag(){this.lastNode=null;const t=this.tagStack.pop();this.options.withEndIndices&&(t.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(t)}onopentag(t,s){const n=this.options.xmlMode?r.Tag:void 0,i=new g(t,s,void 0,n);this.addNode(i),this.tagStack.push(i)}ontext(t){const{lastNode:s}=this;if(s&&s.type===r.Text)s.data+=t,this.options.withEndIndices&&(s.endIndex=this.parser.endIndex);else{const n=new o(t);this.addNode(n),this.lastNode=n}}oncomment(t){if(this.lastNode&&this.lastNode.type===r.Comment){this.lastNode.data+=t;return}const s=new f(t);this.addNode(s),this.lastNode=s}oncommentend(){this.lastNode=null}oncdatastart(){const t=new o(""),s=new m([t]);this.addNode(s),t.parent=s,this.lastNode=t}oncdataend(){this.lastNode=null}onprocessinginstruction(t,s){const n=new x(t,s);this.addNode(n)}handleCallback(t){if(typeof this.callback=="function")this.callback(t,this.dom);else if(t)throw t}addNode(t){const s=this.tagStack[this.tagStack.length-1],n=s.children[s.children.length-1];this.options.withStartIndices&&(t.startIndex=this.parser.startIndex),this.options.withEndIndices&&(t.endIndex=this.parser.endIndex),s.children.push(t),n&&(t.prev=n,n.next=t),t.parent=s,this.lastNode=null}}export{f as C,h as D,g as E,x as P,o as T,v as a,C as b,N as c,w as d,I as e,E as f,T as g,D as h,b as i};
