import{m,A as _,B as d,C as h,n as u,q as p,aA as x,H as b,x as S,o as g,y as v,z as q,aB as C,aC as D,e as E,D as R,a9 as B,d as l,aD as T,aq as N,b as F,v as H}from"./runtime.BNhdsZZD.js";function P(s,a,n,i=null,t=!1){u&&p();var e=s,r=null,f=null,c=null,A=t?x:0;m(()=>{if(c===(c=!!a()))return;let o=!1;if(u){const k=e.data===b;c===k&&(e=S(),g(e),v(!1),o=!0)}c?(r?_(r):r=d(()=>n(e)),f&&h(f,()=>{f=null})):(f?_(f):i&&(f=d(()=>i(e))),r&&h(r,()=>{r=null})),o&&v(!0)},A),u&&(e=q)}function y(s,a){return s===a||(s==null?void 0:s[B])===a}function Y(s={},a,n,i){return C(()=>{var t,e;return D(()=>{t=e,e=[],E(()=>{s!==n(...e)&&(a(s,...e),t&&y(n(...t),s)&&a(null,...t))})}),()=>{R(()=>{e&&y(n(...e),s)&&a(null,...e)})}}),s}function $(s){l===null&&T(),N&&l.l!==null?M(l).m.push(s):F(()=>{const a=E(s);if(typeof a=="function")return a})}function L(s,a,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(s,{detail:a,bubbles:n,cancelable:i})}function w(){const s=l;return s===null&&T(),(a,n,i)=>{var e;const t=(e=s.s.$$events)==null?void 0:e[a];if(t){const r=H(t)?t.slice():[t],f=L(a,n,i);for(const c of r)c.call(s.x,f);return!f.defaultPrevented}return!0}}function M(s){var a=s.l;return a.u??(a.u={a:[],b:[],m:[]})}export{Y as b,w as c,P as i,$ as o};
