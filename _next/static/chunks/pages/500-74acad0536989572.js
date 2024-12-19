(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{83965:function(e,i,t){"use strict";t.d(i,{Z:function(){return j}});var n=t(63366),r=t(87462),a=t(67294),s=t(86010),o=t(94780),d=t(71657),l=t(90948),c=t(1588),m=t(34867);function u(e){return(0,m.Z)("MuiCardMedia",e)}(0,c.Z)("MuiCardMedia",["root","media","img"]);var g=t(85893);let h=["children","className","component","image","src","style"],v=e=>{let{classes:i,isMediaComponent:t,isImageComponent:n}=e;return(0,o.Z)({root:["root",t&&"media",n&&"img"]},u,i)},f=(0,l.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,i)=>{let{ownerState:t}=e,{isMediaComponent:n,isImageComponent:r}=t;return[i.root,n&&i.media,r&&i.img]}})(({ownerState:e})=>(0,r.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),p=["video","audio","picture","iframe","img"],x=["picture","img"],Z=a.forwardRef(function(e,i){let t=(0,d.Z)({props:e,name:"MuiCardMedia"}),{children:a,className:o,component:l="div",image:c,src:m,style:u}=t,Z=(0,n.Z)(t,h),j=-1!==p.indexOf(l),w=!j&&c?(0,r.Z)({backgroundImage:`url("${c}")`},u):u,b=(0,r.Z)({},t,{component:l,isMediaComponent:j,isImageComponent:-1!==x.indexOf(l)}),P=v(b);return(0,g.jsx)(f,(0,r.Z)({className:(0,s.Z)(P.root,o),as:l,role:!j&&c?"img":void 0,ref:i,style:w,ownerState:b,src:j?c||m:void 0},Z,{children:a}))});var j=Z},40698:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/500",function(){return t(22771)}])},58823:function(e,i,t){"use strict";var n=t(85893),r=t(67294),a=t(9008),s=t.n(a),o=t(87357);let d=(0,r.forwardRef)((e,i)=>{let{children:t,title:r="",meta:a,...d}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"".concat(r," | React Material Admin Dashboard Template")}),a]}),(0,n.jsx)(o.Z,{ref:i,...d,children:t})]})});i.Z=d},61400:function(e,i,t){"use strict";var n=t(85893),r=t(67294),a=t(4305),s=t(99924);let o=r.forwardRef((e,i)=>{let t,r,{children:o,type:d,direction:l,offset:c,scale:m}=e;switch(l){case"up":case"left":t=c,r=0;break;default:t=0,r=c}let[u,g]=(0,a.n)(t,r),[h,v]=(0,a.n)(t,r);switch(d){case"rotate":return(0,n.jsx)(s.E.div,{ref:i,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:o});case"slide":if("up"===l||"down"===l)return(0,n.jsx)(s.E.div,{ref:i,animate:{y:void 0!==h?h:""},onHoverEnd:()=>v(),onHoverStart:()=>v(),children:o});return(0,n.jsx)(s.E.div,{ref:i,animate:{x:void 0!==u?u:""},onHoverEnd:()=>g(),onHoverStart:()=>g(),children:o});default:return"number"==typeof m&&(m={hover:m,tap:m}),(0,n.jsx)(s.E.div,{ref:i,whileHover:{scale:null==m?void 0:m.hover},whileTap:{scale:null==m?void 0:m.tap},children:o})}});o.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}},i.Z=o},22771:function(e,i,t){"use strict";t.r(i);var n=t(85893),r=t(97570),a=t(90948),s=t(2734),o=t(66242),d=t(44267),l=t(86886),c=t(83965),m=t(15861),u=t(83321),g=t(4372),h=t(7580),v=t(58823),f=t(38725),p=t(61400),x=t(196),Z=t(93384);let j=(0,a.ZP)("div")({maxWidth:720,margin:"0 auto",position:"relative"}),w=(0,a.ZP)("div")({maxWidth:350,margin:"0 auto",textAlign:"center"}),b=(0,a.ZP)(o.Z)({minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}),P=(0,a.ZP)("img")({position:"absolute",top:0,left:0,width:"100%",animation:"3s bounce ease-in-out infinite"}),y=(0,a.ZP)("img")({position:"absolute",top:0,left:0,width:"100%",animation:"15s wings ease-in-out infinite"}),k=(0,a.ZP)("img")({position:"absolute",top:0,left:0,width:"100%",animation:"12s wings ease-in-out infinite"}),E=()=>{let e=(0,s.Z)();return(0,n.jsx)(v.Z,{title:"Error 500",children:(0,n.jsx)(b,{children:(0,n.jsx)(d.Z,{children:(0,n.jsxs)(l.ZP,{container:!0,justifyContent:"center",spacing:x.dv,children:[(0,n.jsx)(l.ZP,{item:!0,xs:12,children:(0,n.jsxs)(j,{children:[(0,n.jsx)(c.Z,{component:"img",image:"dark"===e.palette.mode?"/assets/images/maintenance/img-error-bg-dark.svg":"/assets/images/maintenance/img-error-bg.svg",title:"Slider5 image"}),(0,n.jsx)(P,{src:"/assets/images/maintenance/img-error-text.svg",title:"Slider 1 image"}),(0,n.jsx)(y,{src:"/assets/images/maintenance/img-error-blue.svg",title:"Slider 2 image"}),(0,n.jsx)(k,{src:"/assets/images/maintenance/img-error-purple.svg",title:"Slider 3 image"})]})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,children:(0,n.jsx)(w,{children:(0,n.jsxs)(l.ZP,{container:!0,spacing:x.dv,children:[(0,n.jsx)(l.ZP,{item:!0,xs:12,children:(0,n.jsx)(m.Z,{variant:"h1",component:"div",children:"Something is wrong"})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,children:(0,n.jsx)(m.Z,{variant:"body2",children:"The page you are looking was moved, removed, renamed, or might never exist! "})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,children:(0,n.jsx)(p.Z,{children:(0,n.jsxs)(u.Z,{variant:"contained",size:"large",component:r.Z,href:f.tu,children:[(0,n.jsx)(Z.Z,{sx:{fontSize:"1.3rem",mr:.75}})," Home"]})})})]})})})]})})})})};E.getLayout=function(e){return(0,n.jsx)(h.Z,{variant:g.ZP.minimal,children:e})},i.default=E}},function(e){e.O(0,[834,207,580,774,888,179],function(){return e(e.s=40698)}),_N_E=e.O()}]);