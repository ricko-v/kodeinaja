(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,5],{328:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{path:""}},mounted:function(){this.path=this.$route.fullPath}},r=n(70),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("b-navbar",{staticClass:"shadow-sm",attrs:{toggleable:"lg",type:"light",variant:"white"}},[e("div",{staticClass:"container"},[e("b-navbar-brand",{staticClass:"font-weight-bold",attrs:{to:"/"}},[t._v("KodeInaja")]),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{attrs:{to:"/showcase"}},[e("span",{class:["/showcase"==t.path?"text-dark":""]},[t._v("Showcase")])]),t._v(" "),e("b-nav-item",{attrs:{to:"/ngoding"}},[e("span",{class:["/ngoding"==t.path?"text-dark":""]},[t._v("Ngoding")])]),t._v(" "),e("b-nav-item",{attrs:{to:"/arsip"}},[e("span",{class:["/arsip"==t.path?"text-dark":""]},[t._v("Arsip")])]),t._v(" "),e("b-nav-item",{attrs:{to:"/kategori"}},[e("span",{class:["/kategori"==t.path?"text-dark":""]},[t._v("Kategori")])]),t._v(" "),e("b-nav-item",{attrs:{to:"/tag"}},[e("span",{class:["/tag"==t.path?"text-dark":""]},[t._v("Tag")])]),t._v(" "),e("b-nav-item",{attrs:{to:"/cari"}},[e("span",{class:["/cari"==t.path?"text-dark":""]},[t._v("Cari")])])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,n){"use strict";n.r(e);var l=n(70),component=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"container-fluid py-3 bg-silver text-center"},[t("small",{staticClass:"text-secondary"},[this._v("©2022 KodeInaja - Made with 💖 by ricko-v")])])}],!1,null,null,null);e.default=component.exports},341:function(t,e,n){},365:function(t,e,n){var map={"./contoh-html.js":366,"./struktur-html.js":367};function l(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}l.keys=function(){return Object.keys(map)},l.resolve=r,t.exports=l,l.id=365},366:function(t,e,n){"use strict";n.r(e),e.default={title:"Contoh HTML Sederhana",html:"<!DOCTYPE html>\n<html>\n<head>\n    <title>Judul Halaman</title>\n</head>\n<body>\n    <h1>Kota Solo</h1>\n    <p>Adalah sebuah kota yang terletak di Jawa Tengah...</p>\n</body>\n</html> \n",css:"",js:""}},367:function(t,e,n){"use strict";n.r(e),e.default={title:"Struktur Dasar HTML",html:'<!doctype html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1" />\n        <title>Struktur Dasar HTML</title>\n    </head>\n    <body>\n\n    </body>\n</html>\n',css:"",js:""}},368:function(t,e,n){"use strict";n(341)},389:function(t,e,n){"use strict";n.r(e);var l=n(332),r=(n(333),n(334)),o=(n(335),n(336),n(337),n(338),n(339),{components:{PrismEditor:l.a},async asyncData({$content:t,params:e,error:l}){try{let t=n(365)("./"+e.slug+".js").default;return{title:t.title,html:t.html,css:t.css,js:t.js}}catch(t){l({statusCode:404,message:"404 Not Found"})}},head(){return{title:`${this.title} - Latihan Ngoding`,meta:[{hid:"description",name:"description",content:"Latihan ngoding di website KodeInaja."},{hid:"og:title",property:"og:title",content:"Latihan ngoding di website KodeInaja."},{hid:"og:description",property:"og:description",content:"Latihan ngoding di website KodeInaja."},{hid:"twitter:title",name:"twitter:title",content:"Latihan ngoding di website KodeInaja."},{hid:"twitter:description",name:"twitter:description",content:"Latihan ngoding di website KodeInaja."}]}},methods:{debug(){document.getElementById("hasil").remove(),document.getElementById("nav-hasil").innerHTML="<iframe id='hasil' class='hasil border-0 w-100 min-vh-100' style='margin-bottom: -5px;'></iframe>";let iframe=document.getElementById("hasil").contentWindow.document,html=this.html,t=`\n<!doctype html>\n<html lang="en">\n\n<head>\n    \t<meta charset="utf-8" />\n    \t<meta name="viewport" content="width=device-width, initial-scale=1" />\n    \t<title>Latihan Ngoding</title>\n  \t</head>\n    ${" <style>"+this.css+" </style>"}\n  \t<body>\n    \t${html}\n        ${"<script>"+this.js+"<\/script>"}\n  \t</body>\n</html>\n`;iframe.open(),iframe.write(t),iframe.close()},highlighter:code=>Object(r.highlight)(code,{...r.languages.markup,...r.languages.js,...r.languages.css},"markup")}}),c=(n(368),n(70)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("Navbar"),t._v(" "),e("div",{staticClass:"min-vh-100 bg-silver"},[e("div",{staticClass:"py-5 container"},[e("div",{staticClass:"card p-3 shadow-sm mb-5"},[e("h3",{staticClass:"font-weight-bold"},[t._v(t._s(t.title))])]),t._v(" "),e("client-only",[e("b-tabs",{staticClass:"bg-white shadow-sm rounded",attrs:{"content-class":"mt-3"}},[e("b-tab",{attrs:{title:"HTML",active:""}},[e("prism-editor",{staticClass:"my-editor shadow-sm min-vh-100",attrs:{highlight:t.highlighter},model:{value:t.html,callback:function(e){t.html=e},expression:"html"}})],1),t._v(" "),e("b-tab",{attrs:{title:"CSS"}},[e("prism-editor",{staticClass:"my-editor shadow-sm min-vh-100",attrs:{highlight:t.highlighter},model:{value:t.css,callback:function(e){t.css=e},expression:"css"}})],1),t._v(" "),e("b-tab",{attrs:{title:"JS"}},[e("prism-editor",{staticClass:"my-editor shadow-sm min-vh-100",attrs:{highlight:t.highlighter},model:{value:t.js,callback:function(e){t.js=e},expression:"js"}})],1),t._v(" "),e("b-tab",{staticClass:"fix-pt",attrs:{title:"HASIL"},on:{click:t.debug}},[e("div",{attrs:{id:"nav-hasil"}},[e("iframe",{staticClass:"hasil border-0 w-100 min-vh-100",staticStyle:{"margin-bottom":"-5px"},attrs:{id:"hasil"}})])])],1)],1)],1)]),t._v(" "),e("Footer")],1)}),[],!1,null,"a62051ac",null);e.default=component.exports;installComponents(component,{Navbar:n(328).default,Footer:n(329).default})}}]);