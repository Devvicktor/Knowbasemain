(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],s=0,d=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-444785ab":"cf0e5e30","chunk-650bb419":"01e1def7","chunk-a01cee5a":"55913ee3","chunk-ada59c3e":"316e5e9c"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-650bb419":1,"chunk-a01cee5a":1,"chunk-ada59c3e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-444785ab":"31d6cfe0","chunk-650bb419":"2d561e0d","chunk-a01cee5a":"093e51ec","chunk-ada59c3e":"465f69d9"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===c))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===r||s===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"eventBus",(function(){return k}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"app"},c={class:"navbar navbar-expand navbar-dark bg-dark"},o=Object(r["e"])("Knowlegebase"),u={class:"navbar-nav mr-auto"},i={class:"nav-item"},l=Object(r["e"])("KBdocs"),s={class:"nav-item"},d=Object(r["e"])("Add"),f={class:"container mt-3"};function b(e,t,n,b,p,h){var v=Object(r["t"])("router-link"),m=Object(r["t"])("router-view");return Object(r["o"])(),Object(r["d"])("div",a,[Object(r["f"])("nav",c,[Object(r["f"])(v,{to:"/",class:"navbar-brand"},{default:Object(r["z"])((function(){return[o]})),_:1}),Object(r["f"])("div",u,[Object(r["f"])("li",i,[Object(r["f"])(v,{to:"/kbdocs",class:"nav-link"},{default:Object(r["z"])((function(){return[l]})),_:1})]),Object(r["f"])("li",s,[Object(r["f"])(v,{to:"/add",class:"nav-link"},{default:Object(r["z"])((function(){return[d]})),_:1})])])]),Object(r["f"])("div",f,[Object(r["f"])(m)])])}var p={name:"app"};p.render=b;var h=p,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),m=[{path:"/",alias:"/kbdocs",name:"kbdocs",component:function(){return Promise.all([n.e("chunk-444785ab"),n.e("chunk-a01cee5a")]).then(n.bind(null,"4400"))}},{path:"/kbdocs/:id",name:"Kbdocs-details",component:function(){return Promise.all([n.e("chunk-444785ab"),n.e("chunk-650bb419")]).then(n.bind(null,"9503"))}},{path:"/add",name:"add",component:function(){return Promise.all([n.e("chunk-444785ab"),n.e("chunk-ada59c3e")]).then(n.bind(null,"9ef7"))}}],O=Object(v["a"])({history:Object(v["b"])("/"),routes:m}),j=O,k=Object(r["c"])(h);Object(r["c"])(h).use(j).mount("#app")}});
//# sourceMappingURL=app.d056f21b.js.map