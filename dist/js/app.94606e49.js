(function(t){function e(e){for(var r,a,i=e[0],c=e[1],s=e[2],l=0,d=[];l<i.length;l++)a=i[l],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},u=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0d8bc113"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"16d33b46"}[t]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.request=r,delete a[t],f.parentNode.removeChild(f),n(u)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t),s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,u=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[t]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1925:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o});var r=n("b775");function a(t,e){return Object(r["a"])({url:"/query",method:"post",data:{keywd:t,page:e}})}function o(t,e){return Object(r["a"])({url:"/query_download",method:"post",data:{keywd:t,page:e}})}},2847:function(t,e,n){"use strict";var r=n("e1b6"),a=n.n(r);a.a},"30c2":function(t,e,n){"use strict";var r=n("64be"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("bb71");n("da64");r["a"].use(a["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[t.isRouterAlive?n("router-view"):t._e(),n("v-footer",{attrs:{height:"auto"}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{"py-1":"",white:"","text-xs-center":"","black--text":"",xs12:""}},[n("p",{staticClass:"footertext",attrs:{"pr-1":""}},[t._v("本站资源更新于"+t._s(t.date))])]),n("v-flex",{attrs:{white:"","py-1":"","text-xs-center":"","black--text":"",xs12:""}},[n("a",{staticClass:"footertext"},[t._v("本站提供优质影视聚合搜索服务，不提供任何资源存储服务"),n("br"),t._v("©2019 — "),n("strong",[t._v("爱影影视搜索")])])])],1)],1)],1)},u=[];n("3b2b"),n("a481");function i(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var r in n)if(new RegExp("(".concat(r,")")).test(e)){var a=n[r]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?a:c(a))}return e}function c(t){return("00"+t).substr(t.length)}var s={provide:function(){return{reload:this.reload}},data:function(){return{date:"",isRouterAlive:!0,icons:["fab fa-facebook","fab fa-twitter","fab fa-google-plus","fab fa-linkedin","fab fa-instagram"]}},mounted:function(){this.date=i(new Date,"yyyy-MM-dd")},methods:{reload:function(){this.isRouterAlive=!1,this.$nextTick(function(){this.isRouterAlive=!0})}}},l=s,d=(n("b54a"),n("2847"),n("2877")),f=n("6544"),p=n.n(f),h=n("7496"),b=n("0e8f"),m=n("553a"),g=n("a722"),v=Object(d["a"])(l,o,u,!1,null,null,null),y=v.exports;p()(v,{VApp:h["a"],VFlex:b["a"],VFooter:m["a"],VLayout:g["a"]});var x=n("8c4f"),w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("navbar"),r("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:"","pt-4":""}},[r("v-flex",{staticClass:"text-xs-center text-md-center text-lg-center"},[r("a",{on:{click:function(e){return t.gorouter("home")}}},[r("img",{attrs:{src:n("cf05"),height:"56",alt:"爱影——影视聚合搜索"}})])])],1),r("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:"","pt-4":""}},[r("v-flex",{staticClass:"max",attrs:{xs12:"",lg6:"",md7:""}},[r("v-combobox",{attrs:{items:t.items,loading:t.loading,"search-input":t.search,"append-icon":"search","hide-no-data":"",clearable:"","no-filter":"",placeholder:"请输入关键词(支持拼音、缩写)","hide-details":"","hide-selected":"",solo:""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},"click:append":function(e){return t.postQuery()}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.postQuery(e)}},model:{value:t.keywd,callback:function(e){t.keywd=e},expression:"keywd"}})],1)],1),r("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:"","pt-3":""}},[r("v-flex",{staticClass:"text-xs-center text-md-center text-lg-center max",attrs:{xs11:"",lg5:"",md7:""}},[r("p",[t._v("<热搜>")]),r("ul",{attrs:{id:"hotsearch"}},t._l(t.hotsearchs,function(e){return r("li",[r("a",{staticClass:"hotword",on:{click:function(n){return t.hotSearch(e.name)}}},[t._v(t._s(e.name)+"\n                  ")])])}),0)])],1)],1)},k=[],_=n("f499"),j=n.n(_),O=n("61b2"),E=n("1925"),S=n("e264"),P=n("323e"),T=n.n(P),A=(n("a5d8"),{components:{Navbar:O["a"]},data:function(){return{loading:!1,items:[],error1:!1,search:null,query_leixing:0,hotsearchs:{uid:"",name:""},keywd:"",page:1,gradient:"to top, #7B1FA2, #E1BEE7",states:[]}},watch:{search:function(t){t&&t!==this.keywd&&this.querykeywdions(t)}},created:function(){var t=this;Object(S["b"])().then(function(e){t.hotsearchs=e.data})},methods:{querykeywdions:function(t){var e=this;this.loading=!0,this.$jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",{wd:t,callbackQuery:"cb",callbackName:"sug"}).then(function(t){console.log("成功"),e.loading=!1,e.items=t.s,console.log(e.items)}).catch(function(t){})},sug:function(t){this.items=t.s},hotSearch:function(t){this.keywd=t,this.postQuery()},gorouter:function(t){this.$router.push({name:t})},postQuery:function(){var t=this;T.a.start(),this.keywd?Object(E["a"])(this.keywd,this.page).then(function(e){window.localStorage.setItem("pagedata",j()(e.data)),window.localStorage.setItem("keywd",j()(t.keywd)),window.localStorage.setItem("query_leixing",j()(t.query_leixing)),T.a.done(),t.$router.push({name:"Search_results",params:{pagedata:e.data,keywd:t.keywd}})}):T.a.done()}}}),C=A,M=(n("30c2"),n("2b5d")),V=n("a523"),$=Object(d["a"])(C,w,k,!1,null,"31479401",null),q=$.exports;p()($,{VCombobox:M["a"],VContainer:V["a"],VFlex:b["a"],VLayout:g["a"]}),r["a"].use(x["a"]);var R=new x["a"]({routes:[{path:"/",name:"home",component:q},{path:"/search_results",name:"Search_results",component:function(){return n.e("about").then(n.bind(null,"0c75"))}},{path:"/douban",name:"Douban",component:function(){return n.e("about").then(n.bind(null,"2289"))}},{path:"/test",name:"Test",component:function(){return n.e("about").then(n.bind(null,"78c1"))}},{path:"/maoyan",name:"Maoyan",component:function(){return n.e("about").then(n.bind(null,"6f2e"))}},{path:"/vipjx",name:"Vipjx",component:function(){return n.e("about").then(n.bind(null,"8675"))}}]}),F=n("ec7e"),N=n.n(F),I=n("6c39"),L=n.n(I),B=n("0284"),Q=n.n(B);r["a"].component("pagination",n("7211")),r["a"].component("vue-friendly-iframe",L.a),r["a"].use(N.a),r["a"].config.productionTip=!1,r["a"].use(Q.a,{id:"UA-135079816-1",router:R}),new r["a"]({router:R,render:function(t){return t(y)}}).$mount("#app")},"61b2":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isMobile?n("v-layout",{attrs:{"align-end":"","justify-end":"",row:"",wrap:"","pt-0":""}},[n("v-flex",{staticClass:"text-xs-right",attrs:{xs12:"",md12:"",lg12:""}},[n("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/douban"}},[t._v("豆瓣TOP250")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/maoyan"}},[t._v("猫眼TOP100")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/vipjx"}},[t._v("VIP在线解析")])],1)],1):n("Slide",{attrs:{right:""}},[n("a",{attrs:{id:"home"},on:{click:function(e){return t.gorouter("home")}}},[n("span",[t._v("首页")])]),n("a",{attrs:{id:"douban"},on:{click:function(e){return t.gorouter("Douban")}}},[n("span",[t._v("豆瓣TOP250")])]),n("a",{attrs:{id:"maoyan"},on:{click:function(e){return t.gorouter("Maoyan")}}},[n("span",[t._v("猫眼TOP100")])]),n("a",{attrs:{id:"vipjx"},on:{click:function(e){return t.gorouter("Vipjx")}}},[n("span",[t._v("VIP在线解析")])])])},a=[],o=n("db0f"),u={name:"Navbar",components:{Slide:o["Slide"]},data:function(){return{isMobile:!0}},created:function(){document.documentElement.clientWidth<=800&&(this.isMobile=!1),console.log(document.documentElement.clientWidth)},methods:{gorouter:function(t){this.$router.push({name:t})}}},i=u,c=n("2877"),s=n("6544"),l=n.n(s),d=n("0e8f"),f=n("a722"),p=Object(c["a"])(i,r,a,!1,null,null,null),h=p.exports;l()(p,{VFlex:d["a"],VLayout:f["a"]}),n.d(e,"a",function(){return h})},"64be":function(t,e,n){},a5b2:function(t,e,n){},b54a:function(t,e,n){"use strict";var r=n("a5b2"),a=n.n(r);a.a},b775:function(t,e,n){"use strict";var r=n("bc3a"),a=n.n(r),o=a.a.create({baseURL:"http://iying.online/api",timeout:5e3});e["a"]=o},cf05:function(t,e,n){t.exports=n.p+"img/logo.ebcaaf0a.png"},e1b6:function(t,e,n){},e264:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"d",function(){return o}),n.d(e,"c",function(){return u}),n.d(e,"b",function(){return i});var r=n("b775");function a(){return Object(r["a"])({url:"/doubanapi",method:"get"})}function o(){return Object(r["a"])({url:"/maoyanapi",method:"get"})}function u(){return Object(r["a"])({url:"/jiexiapi_query",method:"get"})}function i(){return Object(r["a"])({url:"/hotsearchs_query",method:"get"})}}});
//# sourceMappingURL=app.94606e49.js.map