import{S as s,i as r,s as e,e as a,t as o,k as t,c as n,a as c,g as l,d as f,n as i,b as d,f as h,E as u,h as m,G as p}from"../chunks/vendor-b580bf66.js";function v(s){let r,e,v,g,C,E,k;return{c(){r=a("div"),e=a("p"),v=o("Error "),g=o(s[0]),C=t(),E=a("p"),k=o(s[1]),this.h()},l(a){r=n(a,"DIV",{class:!0});var o=c(r);e=n(o,"P",{class:!0});var t=c(e);v=l(t,"Error "),g=l(t,s[0]),t.forEach(f),C=i(o),E=n(o,"P",{class:!0});var d=c(E);k=l(d,s[1]),d.forEach(f),o.forEach(f),this.h()},h(){d(e,"class","svelte-rf8tkn"),d(E,"class","svelte-rf8tkn"),d(r,"class","error svelte-rf8tkn")},m(s,a){h(s,r,a),u(r,e),u(e,v),u(e,g),u(r,C),u(r,E),u(E,k)},p(s,[r]){1&r&&m(g,s[0]),2&r&&m(k,s[1])},i:p,o:p,d(s){s&&f(r)}}}function g({error:s,status:r}){return{props:{errorCode:r,message:s.message.toLowerCase()}}}function C(s,r,e){let{errorCode:a}=r,{message:o}=r;return s.$$set=s=>{"errorCode"in s&&e(0,a=s.errorCode),"message"in s&&e(1,o=s.message)},[a,o]}export default class extends s{constructor(s){super(),r(this,s,C,v,e,{errorCode:0,message:1})}}export{g as load};
