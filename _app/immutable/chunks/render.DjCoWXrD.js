import{l as C,m as F,a8 as I,n as c,a9 as H,W as T,y as _,o as g,z as l,P as L,aa as R,ab as E,q as M,Q as Y,ac as j,ad as S,M as V,w as W,ae as $,B as q,p as z,F as B,a as P,d as Q}from"./runtime.CpBx-6D-.js";import{j as G,r as N,k as v,l as J,m as K}from"./disclose-version.dBpMyF9U.js";let r;function U(){r=void 0}function ee(a){let e=null,t=c;var o;if(c){for(e=l,r===void 0&&(r=L(document.head));r!==null&&(r.nodeType!==8||r.data!==H);)r=T(r);r===null?_(!1):r=g(T(r))}c||(o=document.head.appendChild(C()));try{F(()=>a(o),I)}finally{t&&(_(!0),r=l,g(e))}}let b=!0;function ae(a){b=a}function te(a,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=t,a.nodeValue=t==null?"":t+"")}function X(a,e){return O(a,e)}function ne(a,e){R(),e.intro=e.intro??!1;const t=e.target,o=c,y=l;try{for(var n=L(t);n&&(n.nodeType!==8||n.data!==H);)n=T(n);if(!n)throw E;_(!0),g(n),M();const f=O(a,{...e,anchor:n});if(l===null||l.nodeType!==8||l.data!==Y)throw j(),E;return _(!1),f}catch(f){if(f===E)return e.recover===!1&&S(),R(),V(t),_(!1),X(a,e);throw f}finally{_(o),g(y),U()}}const u=new Map;function O(a,{target:e,anchor:t,props:o={},events:y,context:n,intro:f=!0}){R();var m=new Set,w=i=>{for(var s=0;s<i.length;s++){var d=i[s];if(!m.has(d)){m.add(d);var h=K(d);e.addEventListener(d,v,{passive:h});var D=u.get(d);D===void 0?(document.addEventListener(d,v,{passive:h}),u.set(d,1)):u.set(d,D+1)}}};w(W(G)),N.add(w);var p=void 0,k=$(()=>{var i=t??e.appendChild(C());return q(()=>{if(n){z({});var s=Q;s.c=n}y&&(o.$$events=y),c&&J(i,null),b=f,p=a(i,o)||{},b=!0,c&&(B.nodes_end=l),n&&P()}),()=>{var h;for(var s of m){e.removeEventListener(s,v);var d=u.get(s);--d===0?(document.removeEventListener(s,v),u.delete(s)):u.set(s,d)}N.delete(w),A.delete(p),i!==t&&((h=i.parentNode)==null||h.removeChild(i))}});return A.set(p,k),p}let A=new WeakMap;function re(a){const e=A.get(a);e&&e()}export{ee as a,ae as b,b as c,ne as h,X as m,te as s,re as u};
