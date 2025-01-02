import{i as t}from"./chunk-Dq6ymT-8.js";import{r as n,m as e,e as s,t as o,c,i as a,f as r,h as i,j as u,w as f,d as p,k as l,g as h,a as d,n as y,l as b}from"./chunk-BB7IEB5B.js";
/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let v;const _=t=>v=t,m=Symbol();function j(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var g,O;function $(){const o=s(!0),c=o.run((()=>n({})));let a=[],r=[];const i=e({install(t){_(i),i._a=t,t.provide(m,i),t.config.globalProperties.$pinia=i,r.forEach((t=>a.push(t))),r=[]},use(n){return this._a||t?a.push(n):r.push(n),this},_p:a,_a:null,_e:o,_s:new Map,state:c});return i}(O=g||(g={})).direct="direct",O.patchObject="patch object",O.patchFunction="patch function";const S=()=>{};function P(t,n,e,s=S){t.push(n);const o=()=>{const e=t.indexOf(n);e>-1&&(t.splice(e,1),s())};return!e&&h()&&d(o),o}function w(t,...n){t.slice().forEach((t=>{t(...n)}))}const E=t=>t(),k=Symbol(),x=Symbol();function I(t,n){t instanceof Map&&n instanceof Map?n.forEach(((n,e)=>t.set(e,n))):t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const e in n){if(!n.hasOwnProperty(e))continue;const s=n[e],o=t[e];j(o)&&j(s)&&t.hasOwnProperty(e)&&!a(s)&&!r(s)?t[e]=I(o,s):t[e]=s}return t}const M=Symbol();const{assign:A}=Object;function F(t,e,c={},i,u,l){let h;const d=A({actions:{}},c),b={deep:!0};let v,m,O,$=[],F=[];const C=i.state.value[t];let J;function N(n){let e;v=m=!1,"function"==typeof n?(n(i.state.value[t]),e={type:g.patchFunction,storeId:t,events:O}):(I(i.state.value[t],n),e={type:g.patchObject,payload:n,storeId:t,events:O});const s=J=Symbol();y().then((()=>{J===s&&(v=!0)})),m=!0,w($,e,i.state.value[t])}l||C||(i.state.value[t]={}),n({});const W=l?function(){const{state:t}=c,n=t?t():{};this.$patch((t=>{A(t,n)}))}:S;const q=(n,e="")=>{if(k in n)return n[x]=e,n;const s=function(){_(i);const e=Array.from(arguments),o=[],c=[];let a;w(F,{args:e,name:s[x],store:B,after:function(t){o.push(t)},onError:function(t){c.push(t)}});try{a=n.apply(this&&this.$id===t?this:B,e)}catch(r){throw w(c,r),r}return a instanceof Promise?a.then((t=>(w(o,t),t))).catch((t=>(w(c,t),Promise.reject(t)))):(w(o,a),a)};return s[k]=!0,s[x]=e,s},z={_p:i,$id:t,$onAction:P.bind(null,F),$patch:N,$reset:W,$subscribe(n,e={}){const s=P($,n,e.detached,(()=>o())),o=h.run((()=>f((()=>i.state.value[t]),(s=>{("sync"===e.flush?m:v)&&n({storeId:t,type:g.direct,events:O},s)}),A({},b,e))));return s},$dispose:function(){h.stop(),$=[],F=[],i._s.delete(t)}},B=p(z);i._s.set(t,B);const D=(i._a&&i._a.runWithContext||E)((()=>i._e.run((()=>(h=s()).run((()=>e({action:q})))))));for(const n in D){const e=D[n];if(a(e)&&(!a(H=e)||!H.effect)||r(e))l||(!C||j(G=e)&&G.hasOwnProperty(M)||(a(e)?e.value=C[n]:I(e,C[n])),i.state.value[t][n]=e);else if("function"==typeof e){const t=q(e,n);D[n]=t,d.actions[n]=e}}var G,H;return A(B,D),A(o(B),D),Object.defineProperty(B,"$state",{get:()=>i.state.value[t],set:t=>{N((n=>{A(n,t)}))}}),i._p.forEach((t=>{A(B,h.run((()=>t({store:B,app:i._a,pinia:i,options:d}))))})),C&&l&&c.hydrate&&c.hydrate(B.$state,C),v=!0,m=!0,B}
/*! #__NO_SIDE_EFFECTS__ */function C(t,n,s){let o,a;const r="function"==typeof n;function i(t,s){const i=l();(t=t||(i?u(m,null):null))&&_(t),(t=v)._s.has(o)||(r?F(o,n,a,t):function(t,n,s){const{state:o,actions:a,getters:r}=n,i=s.state.value[t];let u;u=F(t,(function(){i||(s.state.value[t]=o?o():{});const n=b(s.state.value[t]);return A(n,a,Object.keys(r||{}).reduce(((n,o)=>(n[o]=e(c((()=>{_(s);const n=s._s.get(t);return r[o].call(n,n)}))),n)),{}))}),n,s,0,!0)}(o,a,t));return t._s.get(o)}return"string"==typeof t?(o=t,a=r?s:n):(a=t,o=t.id),i.$id=o,i}function J(t){{const n=o(t),e={};for(const s in n){const o=n[s];o.effect?e[s]=c({get:()=>t[s],set(n){t[s]=n}}):(a(o)||r(o))&&(e[s]=i(t,s))}return e}}export{$ as c,C as d,J as s};
