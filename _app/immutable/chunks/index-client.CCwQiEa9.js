import{m as k,A as _,B as d,C as h,n as u,q as m,ax as p,H as b,x as S,o as g,y as v,z as R,ay as q,az as C,e as E,D,a7 as N,d as l,aA as T,ao as z,b as B,v as F}from"./runtime.B594wgG9.js";function O(s,a,n,i=null,t=!1){u&&m();var e=s,r=null,f=null,c=null,x=t?p:0;k(()=>{if(c===(c=!!a()))return;let o=!1;if(u){const A=e.data===b;c===A&&(e=S(),g(e),v(!1),o=!0)}c?(r?_(r):r=d(()=>n(e)),f&&h(f,()=>{f=null})):(f?_(f):i&&(f=d(()=>i(e))),r&&h(r,()=>{r=null})),o&&v(!0)},x),u&&(e=R)}function y(s,a){return s===a||(s==null?void 0:s[N])===a}function P(s={},a,n,i){return q(()=>{var t,e;return C(()=>{t=e,e=[],E(()=>{s!==n(...e)&&(a(s,...e),t&&y(n(...t),s)&&a(null,...t))})}),()=>{D(()=>{e&&y(n(...e),s)&&a(null,...e)})}}),s}function Y(s){l===null&&T(),z&&l.l!==null?L(l).m.push(s):B(()=>{const a=E(s);if(typeof a=="function")return a})}function H(s,a,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(s,{detail:a,bubbles:n,cancelable:i})}function $(){const s=l;return s===null&&T(),(a,n,i)=>{var e;const t=(e=s.s.$$events)==null?void 0:e[a];if(t){const r=F(t)?t.slice():[t],f=H(a,n,i);for(const c of r)c.call(s.x,f);return!f.defaultPrevented}return!0}}function L(s){var a=s.l;return a.u??(a.u={a:[],b:[],m:[]})}export{P as b,$ as c,O as i,Y as o};
