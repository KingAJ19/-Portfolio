(function(e){function t(t){for(var a,r,i=t[0],u=t[1],l=t[2],s=0,f=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-a790c2a6":"d9d0f31d","chunk-b479c606":"d40fe656","chunk-fdc578d6":"a67e7108","chunk-01931032":"9dbe2b12","chunk-17ff751e":"79136a57","chunk-42df61ae":"1521e0e6","chunk-dfa6c9ce":"12cfc183"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-a790c2a6":1,"chunk-b479c606":1,"chunk-fdc578d6":1,"chunk-01931032":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-a790c2a6":"1a8c21ff","chunk-b479c606":"b289f98e","chunk-fdc578d6":"f35acf98","chunk-01931032":"b2ab5990","chunk-17ff751e":"31d6cfe0","chunk-42df61ae":"31d6cfe0","chunk-dfa6c9ce":"31d6cfe0"}[e]+".css",o=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===a||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"19f5":function(e,t,n){"use strict";n("4ed0")},"4ed0":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Nav"),n("v-content",{staticClass:"mx-15 mb-15"},[n("router-view")],1)],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("v-toolbar",{attrs:{flat:"",app:"",dark:""}},[n("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(t){e.drawer=!e.drawer}}},[n("v-icon",[e._v("mdi-menu")])],1),n("v-toolbar-title",{staticClass:"grey--text"},[n("span",{staticClass:"font-weight-bold"},[e._v("Anele Sokwane")])]),n("v-spacer")],1),n("v-navigation-drawer",{staticClass:"black",attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-layout",{attrs:{column:"","align-center":""}},[n("v-flex",{staticClass:"mt-5"},[n("v-avatar",{attrs:{size:"150"}},[n("img",{attrs:{src:"/Sokwane.png",alt:"Anele"}})]),n("p",{staticClass:"white--text font-weight-bold subheading mt-1"},[e._v(" Anele Sokwane ")])],1)],1),n("v-list",e._l(e.links,(function(t){return n("v-list-item",{key:t.text,attrs:{router:"",to:t.route}},[n("v-list-item-action",[n("v-icon",{staticClass:"white--text"},[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"white--text"},[e._v(e._s(t.text))])],1)],1)})),1)],1)],1)},i=[],u={data:function(){return{drawer:!1,links:[{text:"Home",icon:"mdi-home-city",route:"/"},{text:"About",icon:"mdi-account",route:"/about"},{text:"Contact",icon:"mdi-account-box",route:"/contact"},{text:"Skills",icon:"mdi-web",route:"/skills"},{text:"Projects",icon:"mdi-folder",route:"/projects"},{text:"Languages",icon:"mdi-devices",route:"/languages"},{text:"Testimonials",icon:"mdi-chat",route:"/testimonials"}]}}},l=u,s=n("2877"),f=n("6544"),d=n.n(f),p=n("5bc1"),h=n("8212"),m=n("0e8f"),v=n("132d"),b=n("a722"),g=n("8860"),k=n("da13"),w=n("1800"),y=n("5d23"),x=n("f774"),_=n("2fa4"),C=n("71d9"),A=n("2a7f"),j=Object(s["a"])(l,c,i,!1,null,null,null),S=j.exports;d()(j,{VAppBarNavIcon:p["a"],VAvatar:h["a"],VFlex:m["a"],VIcon:v["a"],VLayout:b["a"],VList:g["a"],VListItem:k["a"],VListItemAction:w["a"],VListItemContent:y["a"],VListItemTitle:y["b"],VNavigationDrawer:x["a"],VSpacer:_["a"],VToolbar:C["a"],VToolbarTitle:A["a"]});var V={name:"App",components:{Nav:S}},P=V,T=n("7496"),O=n("a75b"),E=Object(s["a"])(P,r,o,!1,null,"ce2dbc54",null),L=E.exports;d()(E,{VApp:T["a"],VContent:O["a"]});var N=n("f309");a["a"].use(N["a"]);var I=new N["a"]({}),M=(n("d3b7"),n("8c4f")),$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container col-lg-8 col-md-12 col-sm-8 col-xs-9 ",staticStyle:{"text-align":"center"}},[n("v-flex",{staticClass:"mt-2"},[n("v-avatar",{attrs:{size:"220"}},[n("img",{attrs:{src:"/Anele.jpg",alt:"Anele"}})])],1),n("br"),e._m(0),n("br"),n("br"),e._m(1)],1)},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[e._v("My name is "),n("h2",{staticClass:"underline"},[e._v("Anele Sokwane")]),e._v(" I am a Junior Web Developer and a "),n("span",{staticClass:"txt"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"line"},[n("a",{attrs:{href:"https://www.youtube.com/channel/UC1Wr5ovgllU0JZXdx8YXhiQ",target:"_blank"}},[n("h2",{staticClass:"lineUp"},[e._v("Subscribe To My YouTube Channel!")])])])}],D={name:"Home"},H=D,J=(n("19f5"),Object(s["a"])(H,$,B,!1,null,"21914faa",null)),U=J.exports;d()(J,{VAvatar:h["a"],VFlex:m["a"]}),a["a"].use(M["a"]);var F=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:function(){return Promise.all([n.e("chunk-fdc578d6"),n.e("chunk-01931032")]).then(n.bind(null,"f820"))}},{path:"/projects",name:"Projects",component:function(){return Promise.all([n.e("chunk-fdc578d6"),n.e("chunk-17ff751e")]).then(n.bind(null,"acca"))}},{path:"/contact",name:"Contact",component:function(){return n.e("chunk-a790c2a6").then(n.bind(null,"b8fa"))}},{path:"/skills",name:"Skills",component:function(){return n.e("chunk-b479c606").then(n.bind(null,"ad83"))}},{path:"/languages",name:"Languages",component:function(){return Promise.all([n.e("chunk-fdc578d6"),n.e("chunk-dfa6c9ce")]).then(n.bind(null,"6759"))}},{path:"/testimonials",name:"Testimonials",component:function(){return Promise.all([n.e("chunk-fdc578d6"),n.e("chunk-42df61ae")]).then(n.bind(null,"66d9"))}}],q=new M["a"]({mode:"history",base:"/",routes:F}),z=q,W=n("080a"),X=n.n(W);n("c4ca");a["a"].use(X.a),a["a"].config.productionTip=!1,new a["a"]({vuetify:I,router:z,render:function(e){return e(L)}}).$mount("#app")}});
//# sourceMappingURL=app.c1a59663.js.map