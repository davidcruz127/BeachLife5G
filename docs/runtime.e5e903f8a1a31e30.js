(()=>{"use strict";var e,v={},m={};function a(e){var f=m[e];if(void 0!==f)return f.exports;var r=m[e]={exports:{}};return v[e].call(r.exports,r,r.exports,a),r.exports}a.m=v,e=[],a.O=(f,r,n,b)=>{if(!r){var t=1/0;for(d=0;d<e.length;d++){for(var[r,n,b]=e[d],u=!0,c=0;c<r.length;c++)(!1&b||t>=b)&&Object.keys(a.O).every(p=>a.O[p](r[c]))?r.splice(c--,1):(u=!1,b<t&&(t=b));if(u){e.splice(d--,1);var o=n();void 0!==o&&(f=o)}}return f}b=b||0;for(var d=e.length;d>0&&e[d-1][2]>b;d--)e[d]=e[d-1];e[d]=[r,n,b]},a.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return a.d(f,{a:f}),f},a.d=(e,f)=>{for(var r in f)a.o(f,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:f[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((f,r)=>(a.f[r](e,f),f),[])),a.u=e=>(8592===e?"common":e)+"."+{74:"80636b92d2a7835f",552:"41c56e604796cec5",650:"d70796d2d71174d9",1042:"05b90c0d58cac060",1122:"a6af59157d6bb98b",1191:"7792fecd87c7615d",1252:"90c4fbd8a49dabe9",1270:"c5370c96b501f1f6",1312:"2fad3daed2781a4a",1331:"db1a65748aaf6c82",1435:"cf7adfd1ce4072c1",1567:"13e7fea813658670",2360:"107f47c5715ee4b0",2394:"bb4b7de017bf0fa4",2413:"d45e2ac907050c9c",2947:"79c6721340523a0a",2955:"d431e1235034df36",3259:"73baa7d194ccd64e",3454:"5462e7cdd0b10e82",3632:"faf9aaf88123f248",3722:"4758d3b61a56653a",3737:"c2dd180055639fc4",4055:"3cc9f4f3948b7b32",4104:"b7dafe8ccde85e1f",4262:"70859af9a8436e41",4675:"1ad5223e0362fb78",5167:"13464977b24b411b",5186:"e64dfc2bb119258a",5821:"315d7a14fd4a29e8",5919:"4fa85deca9ca6d13",6022:"fc04ad8e9dd7e9b8",6136:"2e85deeb0da67234",6645:"ce545099eca33762",7048:"c6a1974856be271f",7203:"4f1ae9a3796e47cc",7804:"bfbb8addf404f781",7853:"6f50e6cbb2a340de",8195:"13b812ae6ab97606",8206:"021771c6d7ac6a63",8336:"118bdfbfea5e02bd",8592:"fc6348f3d4a24bf2",8600:"6a335a211a765733",8617:"ad50fce6d021da58",8668:"e1763c4641fc0ecc",9059:"ea0f21294f411841",9252:"062444a0837edcd8",9502:"44bf4e3932bb90b2",9552:"91b2598637555e67"}[e]+".js",a.miniCssF=e=>{},a.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="sakai-ng:";a.l=(r,n,b,d)=>{if(e[r])e[r].push(n);else{var t,u;if(void 0!==b)for(var c=document.getElementsByTagName("script"),o=0;o<c.length;o++){var i=c[o];if(i.getAttribute("src")==r||i.getAttribute("data-webpack")==f+b){t=i;break}}t||(u=!0,(t=document.createElement("script")).type="module",t.charset="utf-8",t.timeout=120,a.nc&&t.setAttribute("nonce",a.nc),t.setAttribute("data-webpack",f+b),t.src=a.tu(r)),e[r]=[n];var l=(g,p)=>{t.onerror=t.onload=null,clearTimeout(s);var _=e[r];if(delete e[r],t.parentNode&&t.parentNode.removeChild(t),_&&_.forEach(h=>h(p)),g)return g(p)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),u&&document.head.appendChild(t)}}})(),a.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="",(()=>{var e={3666:0};a.f.j=(n,b)=>{var d=a.o(e,n)?e[n]:void 0;if(0!==d)if(d)b.push(d[2]);else if(3666!=n){var t=new Promise((i,l)=>d=e[n]=[i,l]);b.push(d[2]=t);var u=a.p+a.u(n),c=new Error;a.l(u,i=>{if(a.o(e,n)&&(0!==(d=e[n])&&(e[n]=void 0),d)){var l=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;c.message="Loading chunk "+n+" failed.\n("+l+": "+s+")",c.name="ChunkLoadError",c.type=l,c.request=s,d[1](c)}},"chunk-"+n,n)}else e[n]=0},a.O.j=n=>0===e[n];var f=(n,b)=>{var c,o,[d,t,u]=b,i=0;if(d.some(s=>0!==e[s])){for(c in t)a.o(t,c)&&(a.m[c]=t[c]);if(u)var l=u(a)}for(n&&n(b);i<d.length;i++)a.o(e,o=d[i])&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},r=self.webpackChunksakai_ng=self.webpackChunksakai_ng||[];r.forEach(f.bind(null,0)),r.push=f.bind(null,r.push.bind(r))})()})();