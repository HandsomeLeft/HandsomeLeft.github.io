(function(){"use strict";var t={4444:function(t,e,n){var r=n(144),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("maintabbar")],1)},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tabbar",[r("tabbar_item",{attrs:{path:"/home",active_color:"deeppink"}},[r("img",{attrs:{slot:"item-icon",src:n(9537),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n(996),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("tabbar_item",{attrs:{path:"/category",active_color:"deeppink"}},[r("img",{attrs:{slot:"item-icon",src:n(4166),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n(1488),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),r("tabbar_item",{attrs:{path:"/carts",active_color:"deeppink"}},[r("img",{attrs:{slot:"item-icon",src:n(720),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n(4150),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("tabbar_item",{attrs:{path:"/profile",active_color:"deeppink"}},[r("img",{attrs:{slot:"item-icon",src:n(8561),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n(5120),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tabbar"}},[t._t("default")],2)},l=[],u={},f=u,m=n(1001),p=(0,m.Z)(f,s,l,!1,null,null,null),d=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabbar_item",on:{click:t.item_click}},[t.is_active?n("div",[t._t("item-icon")],2):n("div",[t._t("item-icon-active")],2),n("div",{style:t.active_style},[t._t("item-text")],2)])},h=[],b={props:{path:String,active_color:{path:String,default:"red"}},data(){return{}},computed:{is_active(){return this.$route.path.indexOf(this.path)},active_style(){return this.is_active?{}:{color:this.active_color}}},methods:{item_click(){this.$router.replace(this.path)}}},g=b,_=(0,m.Z)(g,v,h,!1,null,null,null),y=_.exports,x={components:{tabbar:d,tabbar_item:y}},k=x,w=(0,m.Z)(k,a,c,!1,null,null,null),O=w.exports,E={components:{maintabbar:O},name:"App"},C=E,j=(0,m.Z)(C,i,o,!1,null,null,null),S=j.exports,A=n(8345);const P=()=>Promise.all([n.e(109),n.e(22),n.e(626)]).then(n.bind(n,2083)),T=()=>Promise.all([n.e(109),n.e(257)]).then(n.bind(n,3257)),Z=()=>n.e(379).then(n.bind(n,9379)),N=()=>Promise.all([n.e(22),n.e(844)]).then(n.bind(n,2316));r.Z.use(A.Z);const $=[{path:"",redirect:"/home"},{path:"/home",component:P},{path:"/category",component:T},{path:"/carts",component:Z},{path:"/profile",component:N}],L=new A.Z({routes:$});var F=L;r.Z.config.productionTip=!1,new r.Z({render:t=>t(S),router:F}).$mount("#app")},4166:function(t,e,n){t.exports=n.p+"img/category.c013644a.svg"},1488:function(t,e,n){t.exports=n.p+"img/category_active.7786da2b.svg"},9537:function(t,e,n){t.exports=n.p+"img/home.5a624b72.svg"},996:function(t,e,n){t.exports=n.p+"img/home_active.a082b0e2.svg"},8561:function(t,e,n){t.exports=n.p+"img/profile.7be837d1.svg"},5120:function(t,e,n){t.exports=n.p+"img/profile_active.958bdc69.svg"},720:function(t,e,n){t.exports=n.p+"img/shopcart.dbd5ea8b.svg"},4150:function(t,e,n){t.exports=n.p+"img/shopcart_active.c23baca4.svg"}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],o=t[u][2];for(var c=!0,s=0;s<r.length;s++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(c=!1,o<a&&(a=o));if(c){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{22:"24033dca",109:"835484c9",257:"05cbceb8",379:"5e33b009",626:"94c60eb8",844:"6c982780"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{257:"07fe10ae",626:"e15de139",844:"26ce84f5"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="supermall:";n.l=function(r,i,o,a){if(t[r])t[r].push(i);else{var c,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var f=l[u];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+o){c=f;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+o),c.src=r),t[r]=[i];var m=function(e,n){c.onerror=c.onload=null,clearTimeout(p);var i=t[r];if(delete t[r],c.parentNode&&c.parentNode.removeChild(c),i&&i.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t=function(t,e,n,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=function(o){if(i.onerror=i.onload=null,"load"===o.type)n();else{var a=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=c,i.parentNode.removeChild(i),r(s)}};return i.onerror=i.onload=o,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===t||o===e))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){i=a[r],o=i.getAttribute("data-href");if(o===t||o===e)return i}},r=function(r){return new Promise((function(i,o){var a=n.miniCssF(r),c=n.p+a;if(e(a,c))return i();t(r,c,i,o)}))},i={143:0};n.f.miniCss=function(t,e){var n={257:1,626:1,844:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=r(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=o);var a=n.p+n.u(e),c=new Error,s=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,i[1](c)}};n.l(a,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,a=r[0],c=r[1],s=r[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(s)var u=s(n)}for(e&&e(r);l<a.length;l++)o=a[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},r=self["webpackChunksupermall"]=self["webpackChunksupermall"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4444)}));r=n.O(r)})();
//# sourceMappingURL=app.3f0d13df.js.map