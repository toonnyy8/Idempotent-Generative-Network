const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingPreview-BIBU-lsd.js","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-B9MYQG8I.js","assets/modules/vue-Do7FyvQZ.js","assets/index-CH3FdAQn.js","assets/modules/shiki-DPKmmoyv.js","assets/modules/shiki-BPvBenZD.css","assets/index-BFIvU_8C.css"])))=>i.map(i=>d[i]);
import{d as m,z as o,R as E,ai as B,K as F,o as i,b as c,l as u,B as a,i as L,c as f,g as p,h as D,F as d,ag as R,e as _,f as G,D as M,O as V}from"../modules/vue-Do7FyvQZ.js";import{t as q}from"../modules/shiki-DPKmmoyv.js";import{r as b,v as W,w as j,x as g,y as I,z as k,A as K,B as O,a as w,c as $,C as T,D as N,E as h,F as H,G as X}from"../index-CH3FdAQn.js";import{G as J,S as Q,a as U}from"./SlideWrapper-C8v1VjEk.js";import{_ as Y}from"./PrintStyle.vue_vue_type_script_setup_true_lang-CWEVrKxj.js";function Z(s,t){if(!t||t==="all"||t==="*")return b(1,s+1);if(t==="none")return[];const n=[];for(const e of t.split(/[,;]/g))if(!e.includes("-"))n.push(+e);else{const[r,l]=e.split("-",2);n.push(...b(+r,l?+l+1:s+1))}return W(n).filter(e=>e<=s).sort((e,r)=>e-r)}const ee=["id"],P=m({__name:"PrintSlideClick",props:{nav:{}},setup(s){const t=o(()=>s.nav.currentSlideRoute.value),n=o(()=>({height:`${j.value}px`,width:`${g.value}px`})),e=E();I(()=>import("./DrawingPreview-BIBU-lsd.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(l=>e.value=l.default);const r=o(()=>`${t.value.no.toString().padStart(3,"0")}-${(s.nav.clicks.value+1).toString().padStart(2,"0")}`);return B(K,F({nav:s.nav,configs:k,themeConfigs:o(()=>k.themeConfig)})),(l,S)=>(i(),c("div",{id:r.value,class:"print-slide-container",style:D(n.value)},[u(a(J)),u(Q,{"clicks-context":l.nav.clicksContext.value,class:L(a(O)(t.value)),route:t.value},null,8,["clicks-context","class","route"]),e.value?(i(),f(a(e),{key:0,page:t.value.no},null,8,["page"])):p("v-if",!0),u(a(U))],12,ee))}}),te=m({__name:"PrintSlide",props:{route:{}},setup(s){const{isPrintWithClicks:t}=w(),n=$(s.route,t.value?0:T);return(e,r)=>(i(),c(d,null,[u(P,{"clicks-context":a(n),nav:a(N)(e.route,a(n))},null,8,["clicks-context","nav"]),a(t)?(i(),c(d,{key:0},[p(`
      clicks0.total can be any number >=0 when rendering.
      So total-clicksStart can be negative in intermediate states.
    `),(i(!0),c(d,null,R(Math.max(0,a(n).total-a(n).clicksStart),l=>(i(),f(P,{key:l,nav:a(N)(e.route,a($)(e.route,l+a(n).clicksStart))},null,8,["nav"]))),128))],64)):p("v-if",!0)],64))}}),ae={id:"print-content"},ne=m({__name:"PrintContainer",props:{width:{}},setup(s){const t=s,{slides:n,currentRoute:e}=w(),r=o(()=>t.width),l=o(()=>t.width/h.value),S=o(()=>r.value/l.value),z=o(()=>S.value<h.value?r.value/g.value:l.value*h.value/g.value);let v=n.value;e.value.query.range&&(v=Z(v.length,e.value.query.range).map(C=>v[C-1]));const A=o(()=>({"select-none":!k.selectable}));return B(H,z),(y,C)=>(i(),c("div",{id:"print-container",class:L(A.value)},[_("div",ae,[(i(!0),c(d,null,R(a(v),x=>(i(),f(te,{key:x.no,route:x},null,8,["route"]))),128))]),G(y.$slots,"controls")],2))}}),se={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},ue=m({__name:"print",setup(s){const{isPrintMode:t}=w();return M(()=>{t?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),V(()=>{q()}),(n,e)=>(i(),c(d,null,[a(t)?(i(),f(Y,{key:0})):p("v-if",!0),_("div",se,[u(ne,{class:"w-full h-full",style:{background:"var(--slidev-slide-container-background, black)"},width:a(X).width.value},null,8,["width"]),e[0]||(e[0]=_("div",{id:"twoslash-container"},null,-1))])],64))}});export{ue as default};
