var gt=Object.defineProperty;var mt=(e,n,t)=>n in e?gt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var x=(e,n,t)=>mt(e,typeof n!="symbol"?n+"":n,t);import{x as xe,A as yt}from"./scheduler.Cr3rLStw.js";import{w as we}from"./index.BgstnLE6.js";new URL("sveltekit-internal://");function wt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function _t(e){return e.split("%25").map(decodeURI).join("%25")}function vt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function ue({href:e}){return e.split("#")[0]}function bt(e,n,t,a=!1){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return f=>(t(f),i[s](f));n();const c=Reflect.get(i,s);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];a&&o.push("hash");for(const i of o)Object.defineProperty(r,i,{get(){return n(),e[i]},enumerable:!0,configurable:!0});return r}const kt="/__data.json",At=".html__data.json";function St(e){return e.endsWith(".html")?e.replace(/\.html$/,At):e.replace(/\/$/,"")+kt}function Et(...e){let n=5381;for(const t of e)if(typeof t=="string"){let a=t.length;for(;a;)n=n*33^t.charCodeAt(--a)}else if(ArrayBuffer.isView(t)){const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Rt(e){const n=atob(e),t=new Uint8Array(n.length);for(let a=0;a<n.length;a++)t[a]=n.charCodeAt(a);return t.buffer}const Me=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&M.delete(_e(e)),Me(e,n));const M=new Map;function It(e,n){const t=_e(e,n),a=document.querySelector(t);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&M.set(t,{body:r,init:o,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=Rt(r)),Promise.resolve(new Response(r,o))}return window.fetch(e,n)}function Ut(e,n,t){if(M.size>0){const a=_e(e,t),r=M.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(r.body,r.init);M.delete(a)}}return window.fetch(n,t)}function _e(e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${Et(...r)}"]`}return a}const Lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Tt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Pt(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return de(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return de(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=Lt.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return de(c)}).join("")}).join("")}/?$`),params:n}}function xt(e){return!/^\([^)]+\)$/.test(e)}function Pt(e){return e.slice(1).split("/").filter(xt)}function Ct(e,n,t){const a={},r=e.slice(1),o=r.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let f=r[s-i];if(c.chained&&c.rest&&i&&(f=r.slice(s-i,s+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){a[c.name]=f;const d=n[s+1],h=r[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(a).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function de(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ot({nodes:e,server_loads:n,dictionary:t,matchers:a}){const r=new Set(n);return Object.entries(t).map(([s,[c,f,d]])=>{const{pattern:h,params:y}=Tt(s),u={id:s,exec:g=>{const l=h.exec(g);if(l)return Ct(l,y,a)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...f||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[r.has(s),e[s]]}}function qe(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Pe(e,n,t=JSON.stringify){const a=t(n);try{sessionStorage[e]=a}catch{}}var Be;const T=((Be=globalThis.__sveltekit_1ge69kk)==null?void 0:Be.base)??"/flappy-bell";var Ge;const Nt=((Ge=globalThis.__sveltekit_1ge69kk)==null?void 0:Ge.assets)??T,$t="1736357354089",He="sveltekit:snapshot",Ke="sveltekit:scroll",We="sveltekit:states",jt="sveltekit:pageurl",D="sveltekit:history",H="sveltekit:navigation",z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},J=location.origin;function Ye(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function ve(){return{x:pageXOffset,y:pageYOffset}}function $(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Ce={...z,"":z.hover};function Je(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function ze(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Je(e)}}function ge(e,n,t){let a;try{a=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,o=!a||!!r||oe(a,n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(a==null?void 0:a.origin)===J&&e.hasAttribute("download");return{url:a,external:o,target:r,download:i}}function X(e){let n=null,t=null,a=null,r=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=$(s,"preload-code")),r===null&&(r=$(s,"preload-data")),n===null&&(n=$(s,"keepfocus")),t===null&&(t=$(s,"noscroll")),o===null&&(o=$(s,"reload")),i===null&&(i=$(s,"replacestate")),s=Je(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ce[a??"off"],preload_data:Ce[r??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Oe(e){const n=we(e);let t=!0;function a(){t=!0,n.update(i=>i)}function r(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:a,set:r,subscribe:o}}const Xe={v:()=>{}};function Dt(){const{set:e,subscribe:n}=we(!1);let t;async function a(){clearTimeout(t);try{const r=await fetch(`${Nt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==$t;return i&&(e(!0),Xe.v(),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:a}}function oe(e,n,t){return e.origin!==J||!e.pathname.startsWith(n)?!0:t?!(e.pathname===n+"/"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===n):!1}function Ne(e){const n=Vt(e),t=new ArrayBuffer(n.length),a=new DataView(t);for(let r=0;r<t.byteLength;r++)a.setUint8(r,n.charCodeAt(r));return t}const Ft="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Vt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,a=0;for(let r=0;r<e.length;r++)t<<=6,t|=Ft.indexOf(e[r]),a+=6,a===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=a=0);return a===12?(t>>=4,n+=String.fromCharCode(t)):a===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const Bt=-1,Gt=-2,Mt=-3,qt=-4,Ht=-5,Kt=-6;function Wt(e,n){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,a=Array(t.length);function r(o,i=!1){if(o===Bt)return;if(o===Mt)return NaN;if(o===qt)return 1/0;if(o===Ht)return-1/0;if(o===Kt)return-0;if(i)throw new Error("Invalid input");if(o in a)return a[o];const s=t[o];if(!s||typeof s!="object")a[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=n==null?void 0:n[c];if(f)return a[o]=f(r(s[1]));switch(c){case"Date":a[o]=new Date(s[1]);break;case"Set":const d=new Set;a[o]=d;for(let u=1;u<s.length;u+=1)d.add(r(s[u]));break;case"Map":const h=new Map;a[o]=h;for(let u=1;u<s.length;u+=2)h.set(r(s[u]),r(s[u+1]));break;case"RegExp":a[o]=new RegExp(s[1],s[2]);break;case"Object":a[o]=Object(s[1]);break;case"BigInt":a[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);a[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=r(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],l=Ne(g),p=new u(l);a[o]=p;break}case"ArrayBuffer":{const u=s[1],g=Ne(u);a[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);a[o]=c;for(let f=0;f<s.length;f+=1){const d=s[f];d!==Gt&&(c[f]=r(d))}}else{const c={};a[o]=c;for(const f in s){const d=s[f];c[f]=r(d)}}return a[o]}return r(0)}const Ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ze];const Yt=new Set([...Ze]);[...Yt];function Jt(e){return e.filter(n=>n!=null)}class se{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Qe{constructor(n,t){this.status=n,this.location=t}}class be extends Error{constructor(n,t,a){super(a),this.status=n,this.text=t}}const zt="x-sveltekit-invalidated",Xt="x-sveltekit-trailing-slash";function Z(e){return e instanceof se||e instanceof be?e.status:500}function Zt(e){return e instanceof be?e.text:"Internal Error"}let b,K,he;const Qt=xe.toString().includes("$$")||/function \w+\(\) \{\}/.test(xe.toString());Qt?(b={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},K={current:null},he={current:!1}):(b=new class{constructor(){x(this,"data",$state.raw({}));x(this,"form",$state.raw(null));x(this,"error",$state.raw(null));x(this,"params",$state.raw({}));x(this,"route",$state.raw({id:null}));x(this,"state",$state.raw({}));x(this,"status",$state.raw(-1));x(this,"url",$state.raw(new URL("https://example.com")))}},K=new class{constructor(){x(this,"current",$state.raw(null))}},he=new class{constructor(){x(this,"current",$state.raw(!1))}},Xe.v=()=>he.current=!0);function en(e){Object.assign(b,e)}const tn=new Set(["icon","shortcut icon","apple-touch-icon"]),N=qe(Ke)??{},W=qe(He)??{},C={url:Oe({}),page:Oe({}),navigating:we(null),updated:Dt()};function ke(e){N[e]=ve()}function nn(e,n){let t=e+1;for(;N[t];)delete N[t],t+=1;for(t=n+1;W[t];)delete W[t],t+=1}function V(e){return location.href=e.href,new Promise(()=>{})}async function et(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(T||"/");e&&await e.update()}}function $e(){}let ie,me,Q,P,ye,A;const tt=[],ee=[];let U=null;const nt=[],an=[];let j=[],w={branch:[],error:null,url:null},Ae=!1,te=!1,je=!0,Y=!1,B=!1,at=!1,Se=!1,Ee,I,L,ne;const q=new Set;async function vn(e,n,t){var r,o,i,s;document.URL!==location.href&&(location.href=location.href),A=e,await((o=(r=e.hooks).init)==null?void 0:o.call(r)),ie=Ot(e),P=document.documentElement,ye=n,me=e.nodes[0],Q=e.nodes[1],me(),Q(),I=(i=history.state)==null?void 0:i[D],L=(s=history.state)==null?void 0:s[H],I||(I=L=Date.now(),history.replaceState({...history.state,[D]:I,[H]:L},""));const a=N[I];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),t?await dn(ye,t):fn(location.href,{replaceState:!0}),un()}function rn(){tt.length=0,Se=!1}function rt(e){ee.some(n=>n==null?void 0:n.snapshot)&&(W[e]=ee.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function ot(e){var n;(n=W[e])==null||n.forEach((t,a)=>{var r,o;(o=(r=ee[a])==null?void 0:r.snapshot)==null||o.restore(t)})}function De(){ke(I),Pe(Ke,N),rt(L),Pe(He,W)}async function st(e,n,t,a){return G({type:"goto",url:Ye(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:a,accept:()=>{n.invalidateAll&&(Se=!0)}})}async function on(e){if(e.id!==(U==null?void 0:U.id)){const n={};q.add(n),U={id:e.id,token:n,promise:ct({...e,preload:n}).then(t=>(q.delete(n),t.type==="loaded"&&t.state.error&&(U=null),t))}}return U.promise}async function pe(e){const n=ie.find(t=>t.exec(lt(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function it(e,n,t){var o;w=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),Object.assign(b,e.props.page),Ee=new A.root({target:n,props:{...e.props,stores:C,components:ee},hydrate:t,sync:!1}),ot(L);const r={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(i=>i(r)),te=!0}function ae({url:e,params:n,branch:t,status:a,error:r,route:o,form:i}){let s="never";if(T&&(e.pathname===T||e.pathname===T+"/"))s="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=wt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:r,route:o},props:{constructors:Jt(t).map(u=>u.node.component),page:b}};i!==void 0&&(c.props.form=i);let f={},d=!b,h=0;for(let u=0;u<Math.max(t.length,w.branch.length);u+=1){const g=t[u],l=w.branch[u];(g==null?void 0:g.data)!==(l==null?void 0:l.data)&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!w.url||e.href!==w.url.href||w.error!==r||i!==void 0&&i!==b.form||d)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(e),form:i??null,data:d?f:b.data}),c}async function Re({loader:e,parent:n,url:t,params:a,route:r,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const p of l){const{href:k}=new URL(p,t);c.dependencies.add(k)}};const g={route:new Proxy(r,{get:(l,p)=>(s&&(c.route=!0),l[p])}),params:new Proxy(a,{get:(l,p)=>(s&&c.params.add(p),l[p])}),data:(o==null?void 0:o.data)??null,url:bt(t,()=>{s&&(c.url=!0)},l=>{s&&c.search_params.add(l)},A.hash),async fetch(l,p){let k;l instanceof Request?(k=l.url,p={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...p}):k=l;const E=new URL(k,t);return s&&u(E.href),E.origin===t.origin&&(k=E.href.slice(t.origin.length)),te?Ut(k,E.href,p):It(k,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(l){s=!1;try{return l()}finally{s=!0}}};i=await f.universal.load.call(null,g)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Fe(e,n,t,a,r,o){if(Se)return!0;if(!r)return!1;if(r.parent&&e||r.route&&n||r.url&&t)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(o[i]!==w.params[i])return!0;for(const i of r.dependencies)if(tt.some(s=>s(new URL(i))))return!0;return!1}function Ie(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function sn(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const a of t){const r=e.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(i=>o.includes(i))&&o.every(i=>r.includes(i))&&t.delete(a)}return t}function Ve({error:e,url:n,route:t,params:a}){return{type:"loaded",state:{error:e,url:n,route:t,params:a,branch:[]},props:{page:b,constructors:[]}}}async function ct({id:e,invalidating:n,url:t,params:a,route:r,preload:o}){if((U==null?void 0:U.id)===e)return q.delete(U.token),U.promise;const{errors:i,layouts:s,leaf:c}=r,f=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),f.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=w.url?e!==re(w.url):!1,y=w.route?r.id!==w.route.id:!1,u=sn(w.url,t);let g=!1;const l=f.map((m,v)=>{var O;const S=w.branch[v],R=!!(m!=null&&m[0])&&((S==null?void 0:S.loader)!==m[1]||Fe(g,y,h,u,(O=S.server)==null?void 0:O.uses,a));return R&&(g=!0),R});if(l.some(Boolean)){try{d=await dt(t,l)}catch(m){const v=await F(m,{url:t,params:a,route:{id:e}});return q.has(o)?Ve({error:v,url:t,params:a,route:r}):ce({status:Z(m),error:v,url:t,route:r})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let k=!1;const E=f.map(async(m,v)=>{var le;if(!m)return;const S=w.branch[v],R=p==null?void 0:p[v];if((!R||R.type==="skip")&&m[1]===(S==null?void 0:S.loader)&&!Fe(k,y,h,u,(le=S.universal)==null?void 0:le.uses,a))return S;if(k=!0,(R==null?void 0:R.type)==="error")throw R;return Re({loader:m[1],url:t,params:a,route:r,parent:async()=>{var Te;const Le={};for(let fe=0;fe<v;fe+=1)Object.assign(Le,(Te=await E[fe])==null?void 0:Te.data);return Le},server_data_node:Ie(R===void 0&&m[0]?{type:"skip"}:R??null,m[0]?S==null?void 0:S.server:void 0)})});for(const m of E)m.catch(()=>{});const _=[];for(let m=0;m<f.length;m+=1)if(f[m])try{_.push(await E[m])}catch(v){if(v instanceof Qe)return{type:"redirect",location:v.location};if(q.has(o))return Ve({error:await F(v,{params:a,url:t,route:{id:r.id}}),url:t,params:a,route:r});let S=Z(v),R;if(p!=null&&p.includes(v))S=v.status??S,R=v.error;else if(v instanceof se)R=v.body;else{if(await C.updated.check())return await et(),await V(t);R=await F(v,{params:a,url:t,route:{id:r.id}})}const O=await cn(m,_,i);return O?ae({url:t,params:a,branch:_.slice(0,O.idx).concat(O.node),status:S,error:R,route:r}):await ut(t,{id:r.id},R,S)}else _.push(void 0);return ae({url:t,params:a,branch:_,status:200,error:null,route:r,form:n?void 0:null})}async function cn(e,n,t){for(;e--;)if(t[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:e,error:n,url:t,route:a}){const r={};let o=null;if(A.server_loads[0]===0)try{const f=await dt(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==J||t.pathname!==location.pathname||Ae)&&await V(t)}const s=await Re({loader:me,url:t,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Ie(o)}),c={node:await Q(),loader:Q,universal:null,server:null,data:null};return ae({url:t,params:r,branch:[s,c],status:e,error:n,route:null})}function Ue(e,n){if(!e||oe(e,T,A.hash))return;let t;try{if(t=A.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const r=new URL(e);A.hash?r.hash=t:r.pathname=t,t=r}}catch{return}const a=lt(t);for(const r of ie){const o=r.exec(a);if(o)return{id:re(e),invalidating:n,route:r,params:vt(o),url:e}}}function lt(e){return _t(A.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(T.length))||"/"}function re(e){return(A.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function ft({url:e,type:n,intent:t,delta:a}){let r=!1;const o=pt(w,t,e,n);a!==void 0&&(o.navigation.delta=a);const i={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return Y||nt.forEach(s=>s(i)),r?null:o}async function G({type:e,url:n,popped:t,keepfocus:a,noscroll:r,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=$e,block:d=$e}){const h=Ue(n,!1),y=ft({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=I,g=L;f(),Y=!0,te&&C.navigating.set(K.current=y.navigation),ne=c;let l=h&&await ct(h);if(!l){if(oe(n,T,A.hash))return await V(n);l=await ut(n,{id:null},await F(new be(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,ne!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await ce({status:500,error:await F(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return st(new URL(l.location,n).href,{},s+1,c),!1;else l.props.page.status>=400&&await C.updated.check()&&(await et(),await V(n));if(rn(),ke(u),rt(g),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),i=t?t.state:i,!t){const _=o?0:1,m={[D]:I+=_,[H]:L+=_,[We]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||nn(I,L)}if(U=null,l.props.page.state=i,te){w=l.state,l.props.page&&(l.props.page.url=n);const _=(await Promise.all(an.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(_.length>0){let m=function(){j=j.filter(v=>!_.includes(v))};_.push(m),j.push(..._)}Ee.$set(l.props),en(l.props.page),at=!0}else it(l,ye,!1);const{activeElement:p}=document;await yt();const k=t?t.scroll:r?ve():null;if(je){const _=n.hash&&document.getElementById(decodeURIComponent(A.hash?n.hash.split("#")[2]??"":n.hash.slice(1)));k?scrollTo(k.x,k.y):_?_.scrollIntoView():scrollTo(0,0)}const E=document.activeElement!==p&&document.activeElement!==document.body;!a&&!E&&hn(),je=!0,l.props.page&&Object.assign(b,l.props.page),Y=!1,e==="popstate"&&ot(L),y.fulfil(void 0),j.forEach(_=>_(y.navigation)),C.navigating.set(K.current=null)}async function ut(e,n,t,a){return e.origin===J&&e.pathname===location.pathname&&!Ae?await ce({status:a,error:t,url:e,route:n}):await V(e)}function ln(){let e;P.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{a(i,2)},20)});function n(o){o.defaultPrevented||a(o.composedPath()[0],1)}P.addEventListener("mousedown",n),P.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(pe(new URL(i.target.href)),t.unobserve(i.target))},{threshold:0});function a(o,i){const s=ze(o,P);if(!s)return;const{url:c,external:f,download:d}=ge(s,T,A.hash);if(f||d)return;const h=X(s),y=c&&re(w.url)===re(c);if(!h.reload&&!y)if(i<=h.preload_data){const u=Ue(c,!1);u&&on(u)}else i<=h.preload_code&&pe(c)}function r(){t.disconnect();for(const o of P.querySelectorAll("a")){const{url:i,external:s,download:c}=ge(o,T,A.hash);if(s||c)continue;const f=X(o);f.reload||(f.preload_code===z.viewport&&t.observe(o),f.preload_code===z.eager&&pe(i))}}j.push(r),r()}function F(e,n){if(e instanceof se)return e.body;const t=Z(e),a=Zt(e);return A.hooks.handleError({error:e,event:n,status:t,message:a})??{message:a}}function fn(e,n={}){return e=new URL(Ye(e)),e.origin!==J?Promise.reject(new Error("goto: invalid URL")):st(e,n,0)}function un(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(De(),!Y){const r=pt(w,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};nt.forEach(i=>i(o))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&De()}),(n=navigator.connection)!=null&&n.saveData||ln(),P.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=ze(t.composedPath()[0],P);if(!a)return;const{url:r,external:o,target:i,download:s}=ge(a,T,A.hash);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=X(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||s)return;const[d,h]=(A.hash?r.hash.replace(/^#/,""):r.href).split("#"),y=d===ue(location);if(o||c.reload&&(!y||!h)){ft({url:r,type:"link"})?Y=!0:t.preventDefault();return}if(h!==void 0&&y){const[,u]=w.url.href.split("#");if(u===h){if(t.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=a.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(B=!0,ke(I),e(r),!c.replace_state)return;B=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),G({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),P.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const s=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(oe(s,T,!1))return;const c=t.target,f=X(c);if(f.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=r==null?void 0:r.getAttribute("name");h&&d.append(h,(r==null?void 0:r.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),G({type:"form",url:s,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var a;if((a=t.state)!=null&&a[D]){const r=t.state[D];if(ne={},r===I)return;const o=N[r],i=t.state[We]??{},s=new URL(t.state[jt]??location.href),c=t.state[H],f=ue(location)===ue(w.url);if(c===L&&(at||f)){e(s),N[I]=ve(),o&&scrollTo(o.x,o.y),i!==b.state&&(b.state=i,Ee.$set({page:b})),I=r;return}const h=r-I;await G({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{I=r,L=c},block:()=>{history.go(-h)},nav_token:ne})}else if(!B){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{B?(B=!1,history.replaceState({...history.state,[D]:++I,[H]:L},"",location.href)):A.hash&&w.url.hash===location.hash&&G({type:"goto",url:w.url})});for(const t of document.querySelectorAll("link"))tn.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&C.navigating.set(K.current=null)});function e(t){w.url=b.url=t,C.page.set({data:b.data,error:b.error,form:b.form,params:b.params,route:b.route,state:b.state,status:b.status,url:t}),C.page.notify()}}async function dn(e,{status:n=200,error:t,node_ids:a,params:r,route:o,data:i,form:s}){Ae=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=Ue(c,!1)||{});let f,d=!0;try{const h=a.map(async(g,l)=>{const p=i[l];return p!=null&&p.uses&&(p.uses=ht(p.uses)),Re({loader:A.nodes[g],url:c,params:r,route:o,parent:async()=>{const k={};for(let E=0;E<l;E+=1)Object.assign(k,(await h[E]).data);return k},server_data_node:Ie(p)})}),y=await Promise.all(h),u=ie.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let l=0;l<g.length;l++)g[l]||y.splice(l,0,void 0)}f=ae({url:c,params:r,branch:y,status:n,error:t,form:s,route:u??null})}catch(h){if(h instanceof Qe){await V(new URL(h.location,location.href));return}f=await ce({status:Z(h),error:await F(h,{url:c,params:r,route:o}),url:c,route:o}),e.textContent="",d=!1}f.props.page&&(f.props.page.state={}),it(f,e,d)}async function dt(e,n){var r;const t=new URL(e);t.pathname=St(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Xt,"1"),t.searchParams.append(zt,n.map(o=>o?"1":"0").join(""));const a=await Me(t.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new se(a.status,o)}return new Promise(async o=>{var h;const i=new Map,s=a.body.getReader(),c=new TextDecoder;function f(y){return Wt(y,{...A.decoders,Promise:u=>new Promise((g,l)=>{i.set(u,{fulfil:g,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const l=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=ht(p.uses),p.data=f(p.data))}),o(l);else if(l.type==="chunk"){const{id:p,data:k,error:E}=l,_=i.get(p);i.delete(p),E?_.reject(f(E)):_.fulfil(f(k))}}}})}function ht(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function hn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const i=r[o],s=a.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}a.removeAllRanges()}})}}}function pt(e,n,t,a){var c,f;let r,o;const i=new Promise((d,h)=>{r=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:a,complete:i},fulfil:r,reject:o}}export{vn as a,C as s};