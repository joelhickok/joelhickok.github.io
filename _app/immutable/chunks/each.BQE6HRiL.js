import{l as j,m as ee,E as P,n as w,o as b,q as ae,v as re,w as Q,H as ne,x as z,y as k,z as H,I as S,A as W,B as X,C as fe,D as ie,F,G as L,J as G,K as O,L as le,M as se,N as ue,O as te,P as ve,Q as de,R as _e,S as oe,T as ce,U as J,V as he,W as Ee}from"./runtime.B594wgG9.js";function xe(l,e){return e}function pe(l,e,a,t){for(var v=[],_=e.length,u=0;u<_;u++)le(e[u].e,v,!0);var o=_>0&&v.length===0&&a!==null;if(o){var A=a.parentNode;se(A),A.append(a),t.clear(),m(l,e[0].prev,e[_-1].next)}ue(v,()=>{for(var h=0;h<_;h++){var d=e[h];o||(t.delete(d.k),m(l,d.prev,d.next)),te(d.e,!o)}})}function me(l,e,a,t,v,_=null){var u=l,o={flags:e,items:new Map,first:null},A=(e&P)!==0;if(A){var h=l;u=w?b(ve(h)):h.appendChild(j())}w&&ae();var d=null,C=!1;ee(()=>{var r=a(),s=re(r)?r:r==null?[]:Q(r),i=s.length;if(C&&i===0)return;C=i===0;let I=!1;if(w){var E=u.data===ne;E!==(i===0)&&(u=z(),b(u),k(!1),I=!0)}if(w){for(var p=null,T,c=0;c<i;c++){if(H.nodeType===8&&H.data===de){u=H,I=!0,k(!1);break}var n=s[c],f=t(n,c);T=Z(H,o,p,null,n,f,c,v,e),o.items.set(f,T),p=T}i>0&&b(z())}if(!w){var D=_e;Ae(s,o,u,v,e,(D.f&S)!==0,t)}_!==null&&(i===0?d?W(d):d=X(()=>_(u)):d!==null&&fe(d,()=>{d=null})),I&&k(!0),a()}),w&&(u=H)}function Ae(l,e,a,t,v,_,u){var V,q,B,U;var o=(v&oe)!==0,A=(v&(L|O))!==0,h=l.length,d=e.items,C=e.first,r=C,s,i=null,I,E=[],p=[],T,c,n,f;if(o)for(f=0;f<h;f+=1)T=l[f],c=u(T,f),n=d.get(c),n!==void 0&&((V=n.a)==null||V.measure(),(I??(I=new Set)).add(n));for(f=0;f<h;f+=1){if(T=l[f],c=u(T,f),n=d.get(c),n===void 0){var D=r?r.e.nodes_start:a;i=Z(D,e,i,i===null?e.first:i.next,T,c,f,t,v),d.set(c,i),E=[],p=[],r=i.next;continue}if(A&&Te(n,T,f,v),n.e.f&S&&(W(n.e),o&&((q=n.a)==null||q.unfix(),(I??(I=new Set)).delete(n))),n!==r){if(s!==void 0&&s.has(n)){if(E.length<p.length){var R=p[0],x;i=R.prev;var y=E[0],M=E[E.length-1];for(x=0;x<E.length;x+=1)K(E[x],R,a);for(x=0;x<p.length;x+=1)s.delete(p[x]);m(e,y.prev,M.next),m(e,i,y),m(e,M,R),r=R,i=M,f-=1,E=[],p=[]}else s.delete(n),K(n,r,a),m(e,n.prev,n.next),m(e,n,i===null?e.first:i.next),m(e,i,n),i=n;continue}for(E=[],p=[];r!==null&&r.k!==c;)(_||!(r.e.f&S))&&(s??(s=new Set)).add(r),p.push(r),r=r.next;if(r===null)continue;n=r}E.push(n),i=n,r=n.next}if(r!==null||s!==void 0){for(var N=s===void 0?[]:Q(s);r!==null;)(_||!(r.e.f&S))&&N.push(r),r=r.next;var g=N.length;if(g>0){var $=v&P&&h===0?a:null;if(o){for(f=0;f<g;f+=1)(B=N[f].a)==null||B.measure();for(f=0;f<g;f+=1)(U=N[f].a)==null||U.fix()}pe(e,N,$,d)}}o&&ie(()=>{var Y;if(I!==void 0)for(n of I)(Y=n.a)==null||Y.apply()}),F.first=e.first&&e.first.e,F.last=i&&i.e}function Te(l,e,a,t){t&L&&G(l.v,e),t&O?G(l.i,a):l.i=a}function Z(l,e,a,t,v,_,u,o,A){var h=(A&L)!==0,d=(A&he)===0,C=h?d?ce(v):J(v):v,r=A&O?J(u):u,s={i:r,v:C,k:_,a:null,e:null,prev:a,next:t};try{return s.e=X(()=>o(l,C,r),w),s.e.prev=a&&a.e,s.e.next=t&&t.e,a===null?e.first=s:(a.next=s,a.e.next=s.e),t!==null&&(t.prev=s,t.e.prev=s.e),s}finally{}}function K(l,e,a){for(var t=l.next?l.next.e.nodes_start:a,v=e?e.e.nodes_start:a,_=l.e.nodes_start;_!==t;){var u=Ee(_);v.before(_),_=u}}function m(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{me as e,xe as i};