import{s as R,a as f,p as P,t as A,o as O,d as ue}from"../chunks/disclose-version.YvjSV2cQ.js";import{m as fe,ax as me,B as pe,n as be,z as xe,av as he,O as ye,p as N,aH as _e,aC as U,aD as re,c as l,t as E,r as i,s as u,a as W,ab as L,j as B,i as k,aE as se,as as ke,aB as Ce,f as G,aG as V,aF as Y,aM as we,k as Z}from"../chunks/runtime.B594wgG9.js";import{s as F,a as Se}from"../chunks/render.BFaWTK7R.js";import{e as ie,i as le}from"../chunks/each.BQE6HRiL.js";import{s as Pe,a as Ae}from"../chunks/store.DfD9aKHC.js";import{i as oe,o as je}from"../chunks/index-client.CCwQiEa9.js";import"../chunks/legacy.DLOX7paW.js";import{s as H,e as de,b as D,t as $,a as J,B as De}from"../chunks/Button.BGNuAS0n.js";import{a as ne}from"../chunks/attributes.BcRZtPkA.js";import{i as ve}from"../chunks/lifecycle.pkW0KwAm.js";import{l as K,p as y,a as ee}from"../chunks/props.7IDepqaG.js";import{w as ce,g as te}from"../chunks/entry.CZUeJftT.js";import{p as Be}from"../chunks/stores.CyZLCIT0.js";import{V as Me}from"../chunks/video.ZeFRrL8u.js";import{M as Ge}from"../chunks/Modal.iFepYoQB.js";function Q(x,e,...o){var p=x,r=he,s;fe(()=>{r!==(r=e())&&(s&&(ye(s),s=null),s=pe(()=>r(p,...o)))},me),be&&(p=xe)}var Ie=A('<div class="hidden tab_content_placeholder"><div><!></div></div>'),Te=A('<li role="presentation"><button><!></button> <!></li>');function Ee(x,e){const o=K(e,["children","$$slots","$$events","$$legacy"]),p=K(o,["open","title","activeClasses","inactiveClasses","defaultClass","divClass"]);N(e,!1);let r=y(e,"open",12,!1),s=y(e,"title",8,"Tab title"),d=y(e,"activeClasses",24,()=>{}),v=y(e,"inactiveClasses",24,()=>{}),n=y(e,"defaultClass",8,"inline-block text-sm font-medium text-center disabled:cursor-not-allowed"),c=y(e,"divClass",8,"");const b=_e("ctx")??{},_=b.selected??ce();function C(a){return _.set(a),{destroy:_.subscribe(h=>{h!==a&&r(!1)})}}let w=se();U(()=>(B(n()),B(r()),B(d()),B(v())),()=>{L(w,$(n(),r()?d()??b.activeClasses:v()??b.inactiveClasses,r()&&"active"))}),re(),ve();var S=Te();const g=ke(()=>$("group",o.class));var t=l(S);let j;var I=l(t);H(I,e,"title",{},a=>{var m=R();E(()=>F(m,s())),f(a,m)}),i(t);var T=u(t,2);oe(T,r,a=>{var m=Ie(),h=l(m),M=l(h);H(M,e,"default",{},null),i(h),de(h,z=>C(z)),i(m),E(()=>J(h,c())),f(a,m)}),i(S),E(()=>{J(S,k(g)),j=ne(t,j,{type:"button",role:"tab",...p,class:k(w)})}),P("click",t,()=>r(!0)),P("blur",t,function(a){D.call(this,e,a)}),P("click",t,function(a){D.call(this,e,a)}),P("contextmenu",t,function(a){D.call(this,e,a)}),P("focus",t,function(a){D.call(this,e,a)}),P("keydown",t,function(a){D.call(this,e,a)}),P("keypress",t,function(a){D.call(this,e,a)}),P("keyup",t,function(a){D.call(this,e,a)}),P("mouseenter",t,function(a){D.call(this,e,a)}),P("mouseleave",t,function(a){D.call(this,e,a)}),P("mouseover",t,function(a){D.call(this,e,a)}),f(x,S),W()}var Le=A('<div class="h-px bg-gray-200 dark:bg-gray-700"></div>'),ze=A('<ul><!></ul> <!> <div role="tabpanel" aria-labelledby="id-tab"></div>',1);function Re(x,e){const o=K(e,["children","$$slots","$$events","$$legacy"]),p=K(o,["tabStyle","defaultClass","contentClass","divider","activeClasses","inactiveClasses"]);N(e,!1);const r=se();let s=y(e,"tabStyle",8,"none"),d=y(e,"defaultClass",8,"flex flex-wrap space-x-2 rtl:space-x-reverse"),v=y(e,"contentClass",8,"p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4"),n=y(e,"divider",12,!0),c=y(e,"activeClasses",8,"p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500"),b=y(e,"inactiveClasses",8,"p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300");const _={full:"p-4 w-full group-first:rounded-s-lg group-last:rounded-e-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:bg-gray-700 dark:text-white",pill:"py-3 px-4 text-white bg-primary-600 rounded-lg",underline:"p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500",none:""},C={full:"p-4 w-full group-first:rounded-s-lg group-last:rounded-e-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",pill:"py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",underline:"p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400",none:""},w={activeClasses:_[s()]||c(),inactiveClasses:C[s()]||b(),selected:ce()};Ce("ctx",w);function S(m){return{destroy:w.selected.subscribe(M=>{M&&m.replaceChildren(M)})}}U(()=>(B(n()),B(s())),()=>{n(["full","pill"].includes(s())?!1:n())}),U(()=>(B(d()),B(s()),B(o)),()=>{L(r,$(d(),s()==="underline"&&"-mb-px",o.class))}),re(),ve();var g=ze(),t=G(g);let j;var I=l(t);H(I,e,"default",{get tabStyle(){return s()}},null),i(t);var T=u(t,2);oe(T,n,m=>{var h=O(),M=G(h);H(M,e,"divider",{},z=>{var q=Le();f(z,q)}),f(m,h)});var a=u(T,2);de(a,m=>S(m)),E(()=>{j=ne(t,j,{...p,class:k(r)}),J(a,v())}),f(x,g),W()}var Ve=A('<div class="border-gray-600 border bg-blue-900 text-white h-full grow p-4"><div class="text-xl font-semibold"> </div> <div> </div></div>'),Fe=A('<div class="bg-amber-700 py-2 px-8 text-3xl text-white flex justify-between items-center"><div>Livestock Guardian Dogs</div> <div class="text-base">Rehoming fee applies</div> <div class="flex flex-col text-xs text-right"><div>Contact:</div> <div>joelhickok@gmail.com</div> <div>435-210-1544</div></div></div> <div class="bg-slate-800 text-gray-100 py-4 "><div class="pb-3 pr-8 grid grid-cols-2 gap-5 items-end"><div class="text-center"><div class="text-3xl font-bold text-lime-100">Anatolian Shepherd Mix Puppies</div> <div class="font-bold text-yellow-400 uppercase mb-3">for family protection, companionship,<br> general property defense or livestock protection</div> <div class="text-xl">Currently 11 weeks old</div> <div class="text-xl font-semibold">Located in Bayfield, Colorado</div></div> <div class="text-left">Breed Ratios: <div class="flex gap-3"></div></div></div></div>',1);function He(x){const e=[{label:"Anatolian Shepherd",mix:"62.5% or 5/8"},{label:"Great Pyrenees",mix:"25% or 2/8"},{label:"Karakachan",mix:"12.5% or 1/8"}];var o=Fe(),p=u(G(o),2),r=l(p),s=u(l(r),2),d=u(l(s));ie(d,5,()=>e,le,(v,n)=>{var c=Ve(),b=l(c),_=l(b,!0);i(b);var C=u(b,2),w=l(C,!0);i(C),i(c),E(()=>{F(_,k(n).label),F(w,k(n).mix)}),f(v,c)}),i(d),i(s),i(r),i(p),f(x,o)}var Ke=A('<div><!></div> <div class="flex justify-center"><!></div>',1);function ae(x,e){N(e,!0);let o=y(e,"toggle",15);function p(){o(!1)}Ge(x,{get open(){return o()},set open(r){o(r)},autoclose:!0,outsideclose:!0,size:"lg",children:(r,s)=>{var d=Ke(),v=G(d),n=l(v);Q(n,()=>e.title),i(v);var c=u(v,2),b=l(c);Q(b,()=>e.image),i(c),f(r,d)},$$slots:{default:!0,footer:(r,s)=>{De(r,{$$events:{click:()=>p()},children:(d,v)=>{V();var n=R("Close");f(d,n)},$$slots:{default:!0}})}}}),W()}var Ne=A('<img src="/images/Sire-and-Dame.jpeg" alt="Sire and dame" style="width: 1024px;">'),We=A('<img src="/images/Sire.jpeg" alt="Sire and dame">'),qe=(x,e)=>L(e,!0),Oe=(x,e)=>L(e,!0),Ue=A('<!> <!> <div class="text-gray-200 flex flex-col gap-8"><div class="mt-5"><div class="text-center font-semibold">Video: <a href="/video">Click for large screen</a></div> <!></div> <div class="relative"><div class="text-center font-semibold">Sire &amp; Dame</div> <button class="underline text-blue-100"><span class="absolute bottom-1 right-1 uppercase text-red-100 font-bold" style="">Click to enlarge</span> <img src="/images/Sire-and-Dame.jpeg" alt="Sire and dame"></button></div> <div class="relative"><div class="text-center font-semibold">Sire</div> <button class="underline text-blue-100"><span class="absolute bottom-1 right-1 uppercase text-red-100 font-bold" style="">Click to enlarge</span> <img src="/images/Sire.jpeg" alt="Sire and dame"></button></div></div>',1);function $e(x){let e=Y(!1),o=Y(!1);var p=Ue(),r=G(p);ae(r,{get toggle(){return k(e)},set toggle(g){L(e,ee(g))},title:g=>{V();var t=R("Sire & Dame Late Summer 2024");f(g,t)},image:g=>{var t=Ne();f(g,t)},$$slots:{title:!0,image:!0}});var s=u(r,2);ae(s,{get toggle(){return k(o)},set toggle(g){L(o,ee(g))},title:g=>{V();var t=R("Sire Early Winter 2024");f(g,t)},image:g=>{var t=We();f(g,t)},$$slots:{title:!0,image:!0}});var d=u(s,2),v=l(d),n=u(l(v),2);Me(n,{height:"255"}),i(v);var c=u(v,2),b=u(l(c),2);b.__click=[qe,e],i(c);var _=u(c,2),C=u(l(_),2);C.__click=[Oe,o],i(_),i(d),f(x,p)}ue(["click"]);var Je=A('<div class="h-full w-full m-auto bg-white"><!> <div class="flex gap-5 "><div class="m-3 grow"><!> <div class="text-xs mt-8"><small> </small></div> <div class="text-xs mt-8"><small><a href="https://puppies-opal.vercel.app">https://puppies-opal.vercel.app</a></small> <small><a href="https://joelhickok.github.io">https://joelhickok.github.io</a></small></div></div> <div class="bg-gray-500 px-3 py-3" style="min-width: 340px; max-width: 340px;"><!></div></div></div>');function gt(x,e){N(e,!0);const o=Pe(),p=()=>Ae(Be,"$page",o),r=[{title:"Meet the Puppies",path:"/"},{title:"General Info",path:"/info"},{title:"Watch Video",path:"/video"},{title:"Gallery",path:"/gallery"}],s=t=>{te(t)};je(()=>{const t=localStorage.getItem("path");t&&(localStorage.removeItem("path"),te(t));const j="Sorry, this page is not supported on a mobile device.  It will not display correctly.  Use a desktop or laptop.";(/(iPhone|iPod|iPad)/.test(navigator.userAgent)||/Android/.test(navigator.userAgent)||/(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent))&&alert(j)});var d=Je();Se(t=>{we.title="Livestock Guardian Dogs LGD Colorado Anatolian/Pyrenees/Karakachan"});var v=l(d);He(v);var n=u(v,2),c=l(n),b=l(c);Re(b,{tabStyle:"full",defaultClass:"flex rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700",children:(t,j)=>{var I=O(),T=G(I);ie(T,17,()=>r,le,(a,m,h)=>{var M=Z(()=>p().url.pathname===k(m).path),z=Z(()=>`bg-amber-600 h-full w-full text-white ${(h===0?"rounded-s-lg":h===r.length-1?"rounded-e-lg":"")??""}`);Ee(a,{get title(){return k(m).title},onclick:()=>s(k(m).path),get open(){return k(M)},class:"w-full",get activeClasses(){return k(z)},children:(q,Qe)=>{var X=O(),ge=G(X);Q(ge,()=>e.children),f(q,X)},$$slots:{default:!0}})}),f(t,I)},$$slots:{default:!0}});var _=u(b,2),C=l(_),w=l(C);i(C),i(_),V(2),i(c);var S=u(c,2),g=l(S);$e(g),i(S),i(n),i(d),E(()=>F(w,`Build: ${new Date("1734539447"*1e3)??""}`)),f(x,d),W()}export{gt as component};
