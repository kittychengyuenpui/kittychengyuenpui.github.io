import{u as t,o as e,n as o,g as n,a as r,i,b as l,c as u,r as s,w as c,d as a}from"./chunk-BB7IEB5B.js";function d(t){return!!n()&&(r(t),!0)}function f(e){return"function"==typeof e?e():t(e)}const v="undefined"!=typeof window&&"undefined"!=typeof document;"undefined"!=typeof WorkerGlobalScope&&(globalThis,WorkerGlobalScope);const h=Object.prototype.toString,m=()=>{};function p(t,e){return function(...o){return new Promise(((n,r)=>{Promise.resolve(t((()=>e.apply(this,o)),{fn:e,thisArg:this,args:o})).then(n).catch(r)}))}}function g(t,e=200,o={}){return p(function(t,e={}){let o,n,r=m;const i=t=>{clearTimeout(t),r(),r=m};return l=>{const u=f(t),s=f(e.maxWait);return o&&i(o),u<=0||void 0!==s&&s<=0?(n&&(i(n),n=null),Promise.resolve(l())):new Promise(((t,c)=>{r=e.rejectOnCancel?c:t,s&&!n&&(n=setTimeout((()=>{o&&i(o),n=null,t(l())}),s)),o=setTimeout((()=>{n&&i(n),n=null,t(l())}),u)}))}}(e,o),t)}function b(t,e=200,o=!1,n=!0,r=!1){return p(function(...t){let e,o,n,r,l,u,s=0,c=!0,a=m;i(t[0])||"object"!=typeof t[0]?[n,r=!0,l=!0,u=!1]=t:({delay:n,trailing:r=!0,leading:l=!0,rejectOnCancel:u=!1}=t[0]);const d=()=>{e&&(clearTimeout(e),e=void 0,a(),a=m)};return t=>{const i=f(n),v=Date.now()-s,h=()=>o=t();return d(),i<=0?(s=Date.now(),h()):(v>i&&(l||!c)?(s=Date.now(),h()):r&&(o=new Promise(((t,o)=>{a=u?o:t,e=setTimeout((()=>{s=Date.now(),c=!0,t(h()),d()}),Math.max(0,i-v))}))),l||e||(e=setTimeout((()=>c=!0),i)),c=!1,o)}}(e,o,n,r),t)}function w(t,n=!0,r){l()?e(t,r):n?t():o(t)}const y=v?window:void 0;function x(t){var e;const o=f(t);return null!=(e=null==o?void 0:o.$el)?e:o}function S(...t){let e,o,n,r;if("string"==typeof t[0]||Array.isArray(t[0])?([o,n,r]=t,e=y):[e,o,n,r]=t,!e)return m;Array.isArray(o)||(o=[o]),Array.isArray(n)||(n=[n]);const i=[],l=()=>{i.forEach((t=>t())),i.length=0},u=c((()=>[x(e),f(r)]),(([t,e])=>{if(l(),!t)return;const r=(u=e,"[object Object]"===h.call(u)?{...e}:e);var u;i.push(...o.flatMap((e=>n.map((o=>((t,e,o,n)=>(t.addEventListener(e,o,n),()=>t.removeEventListener(e,o,n)))(t,e,o,r))))))}),{immediate:!0,flush:"post"}),s=()=>{u(),l()};return d(s),s}function A(t){const o=function(){const t=s(!1),o=l();return o&&e((()=>{t.value=!0}),o),t}();return u((()=>(o.value,Boolean(t()))))}function T(t,e={width:0,height:0},o={}){const{window:n=y,box:r="content-box"}=o,i=u((()=>{var e,o;return null==(o=null==(e=x(t))?void 0:e.namespaceURI)?void 0:o.includes("svg")})),l=s(e.width),a=s(e.height),{stop:v}=function(t,e,o={}){const{window:n=y,...r}=o;let i;const l=A((()=>n&&"ResizeObserver"in n)),s=()=>{i&&(i.disconnect(),i=void 0)},a=u((()=>{const e=f(t);return Array.isArray(e)?e.map((t=>x(t))):[x(e)]})),v=c(a,(t=>{if(s(),l.value&&n){i=new ResizeObserver(e);for(const e of t)e&&i.observe(e,r)}}),{immediate:!0,flush:"post"}),h=()=>{s(),v()};return d(h),{isSupported:l,stop:h}}(t,(([e])=>{const o="border-box"===r?e.borderBoxSize:"content-box"===r?e.contentBoxSize:e.devicePixelContentBoxSize;if(n&&i.value){const e=x(t);if(e){const t=e.getBoundingClientRect();l.value=t.width,a.value=t.height}}else if(o){const t=Array.isArray(o)?o:[o];l.value=t.reduce(((t,{inlineSize:e})=>t+e),0),a.value=t.reduce(((t,{blockSize:e})=>t+e),0)}else l.value=e.contentRect.width,a.value=e.contentRect.height}),o);w((()=>{const o=x(t);o&&(l.value="offsetWidth"in o?o.offsetWidth:e.width,a.value="offsetHeight"in o?o.offsetHeight:e.height)}));const h=c((()=>x(t)),(t=>{l.value=t?e.width:0,a.value=t?e.height:0}));return{width:l,height:a,stop:function(){v(),h()}}}function E(t,e={}){const{throttle:o=0,idle:n=200,onStop:r=m,onScroll:i=m,offset:l={left:0,right:0,top:0,bottom:0},eventListenerOptions:c={capture:!1,passive:!0},behavior:d="auto",window:v=y,onError:h=t=>{}}=e,p=s(0),A=s(0),T=u({get:()=>p.value,set(t){j(t,void 0)}}),E=u({get:()=>A.value,set(t){j(void 0,t)}});function j(e,o){var n,r,i,l;if(!v)return;const u=f(t);if(!u)return;null==(i=u instanceof Document?v.document.body:u)||i.scrollTo({top:null!=(n=f(o))?n:E.value,left:null!=(r=f(e))?r:T.value,behavior:f(d)});const s=(null==(l=null==u?void 0:u.document)?void 0:l.documentElement)||(null==u?void 0:u.documentElement)||u;null!=T&&(p.value=s.scrollLeft),null!=E&&(A.value=s.scrollTop)}const z=s(!1),O=a({left:!0,right:!1,top:!0,bottom:!1}),W=a({left:!1,right:!1,top:!1,bottom:!1}),D=t=>{z.value&&(z.value=!1,W.left=!1,W.right=!1,W.top=!1,W.bottom=!1,r(t))},M=g(D,o+n),P=t=>{var e;if(!v)return;const o=(null==(e=null==t?void 0:t.document)?void 0:e.documentElement)||(null==t?void 0:t.documentElement)||x(t),{display:n,flexDirection:r}=getComputedStyle(o),i=o.scrollLeft;W.left=i<p.value,W.right=i>p.value;const u=Math.abs(i)<=(l.left||0),s=Math.abs(i)+o.clientWidth>=o.scrollWidth-(l.right||0)-1;"flex"===n&&"row-reverse"===r?(O.left=s,O.right=u):(O.left=u,O.right=s),p.value=i;let c=o.scrollTop;t!==v.document||c||(c=v.document.body.scrollTop),W.top=c<A.value,W.bottom=c>A.value;const a=Math.abs(c)<=(l.top||0),d=Math.abs(c)+o.clientHeight>=o.scrollHeight-(l.bottom||0)-1;"flex"===n&&"column-reverse"===r?(O.top=d,O.bottom=a):(O.top=a,O.bottom=d),A.value=c},R=t=>{var e;if(!v)return;const o=null!=(e=t.target.documentElement)?e:t.target;P(o),z.value=!0,M(t),i(t)};return S(t,"scroll",o?b(R,o,!0,!1):R,c),w((()=>{try{const e=f(t);if(!e)return;P(e)}catch(e){h(e)}})),S(t,"scrollend",D,c),{x:T,y:E,isScrolling:z,arrivedState:O,directions:W,measure(){const e=f(t);v&&e&&P(e)}}}export{T as a,E as u};
