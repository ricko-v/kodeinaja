(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3,5],{297:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{path:""}},mounted:function(){this.path=this.$route.fullPath}},l=n(66),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{staticClass:"shadow-sm",attrs:{toggleable:"lg",type:"light",variant:"white"}},[n("div",{staticClass:"container"},[n("b-navbar-brand",{staticClass:"font-weight-bold",attrs:{to:"/"}},[t._v("KodeInaja")]),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{to:"/showcase"}},[n("span",{class:["/showcase"==t.path?"text-dark":""]},[t._v("Showcase")])]),t._v(" "),n("b-nav-item",{attrs:{to:"/ngoding"}},[n("span",{class:["/ngoding"==t.path?"text-dark":""]},[t._v("Ngoding")])]),t._v(" "),n("b-nav-item",{attrs:{to:"/arsip"}},[n("span",{class:["/arsip"==t.path?"text-dark":""]},[t._v("Arsip")])]),t._v(" "),n("b-nav-item",{attrs:{to:"/kategori"}},[n("span",{class:["/kategori"==t.path?"text-dark":""]},[t._v("Kategori")])]),t._v(" "),n("b-nav-item",{attrs:{to:"/tag"}},[n("span",{class:["/tag"==t.path?"text-dark":""]},[t._v("Tag")])]),t._v(" "),n("b-nav-item",{attrs:{to:"/cari"}},[n("span",{class:["/cari"==t.path?"text-dark":""]},[t._v("Cari")])])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},298:function(t,e,n){"use strict";n.r(e);var o=n(66),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid py-3 bg-silver text-center"},[n("small",{staticClass:"text-secondary"},[t._v("©2022 KodeInaja - Made with 💖 by ricko-v")])])}],!1,null,null,null);e.default=component.exports},309:function(t,e,n){var content=n(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("613d0846",content,!0,{sourceMap:!1})},334:function(t,e,n){"use strict";n(309)},335:function(t,e,n){var o=n(68)(!1);o.push([t.i,".fix-pt[data-v-6aa35230]{margin-top:-1rem!important;margin-bottom:-1rem!important}.my-editor[data-v-6aa35230]{background:#212529;font-family:Fira code,Fira Mono,Consolas,Menlo,Courier,monospace;font-size:14px;line-height:1.5;padding:10px;caret-color:#fff}.prism-editor__textarea[data-v-6aa35230]:focus{outline:none}",""]),t.exports=o},354:function(t,e,n){"use strict";n.r(e);var o=n(301),l=(n(302),n(303)),r=(n(304),n(305),n(306),n(307),n(308),{components:{PrismEditor:o.a},data:()=>({html:"",css:"",js:""}),head:()=>({title:"Latihan Ngoding - Kodeinaja",meta:[{hid:"description",name:"description",content:"Latihan ngoding di website KodeInaja."},{hid:"og:title",property:"og:title",content:"Latihan ngoding di website KodeInaja."},{hid:"og:description",property:"og:description",content:"Latihan ngoding di website KodeInaja."},{hid:"twitter:title",name:"twitter:title",content:"Latihan ngoding di website KodeInaja."},{hid:"twitter:description",name:"twitter:description",content:"Latihan ngoding di website KodeInaja."}]}),methods:{debug(){document.getElementById("hasil").remove(),document.getElementById("nav-hasil").innerHTML="<iframe id='hasil' class='hasil border-0 w-100 min-vh-100' style='margin-bottom: -5px;'></iframe>";let iframe=document.getElementById("hasil").contentWindow.document,html=this.html,t=`\n<!doctype html>\n<html lang="en">\n\t<head>\n    \t<meta charset="utf-8" />\n    \t<meta name="viewport" content="width=device-width, initial-scale=1" />\n    \t<title>Latihan Ngoding</title>\n  \t</head>\n    ${"<style>"+this.css+"</style>"}\n  \t<body>\n    \t${html}\n        ${"<script>"+this.js+"<\/script>"}\n  \t</body>\n</html>\n`;iframe.open(),iframe.write(t),iframe.close()},highlighter:code=>Object(l.highlight)(code,{...l.languages.markup,...l.languages.js,...l.languages.css},"markup")},mounted(){localStorage.html||(this.html='<!doctype html>\n<html lang="en">\n    <head>\n    \t<meta charset="utf-8" />\n    \t<meta name="viewport" content="width=device-width, initial-scale=1" />\n    \t<title>Latihan Ngoding</title>\n  \t</head>\n  \t<body>\n      <h3 class=\'welcome\'>Ayo Mengkoding...</h3>\n  \t</body>\n</html>'),localStorage.css||(this.css=".welcome {\n    color: red;\n}"),localStorage.js||(this.js="// kode javascript")}}),c=(n(334),n(66)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._v(" "),n("div",{staticClass:"min-vh-100 bg-silver"},[n("div",{staticClass:"py-5 container"},[t._m(0),t._v(" "),n("client-only",[n("b-tabs",{staticClass:"bg-white shadow-sm rounded",attrs:{"content-class":"mt-3"}},[n("b-tab",{attrs:{title:"HTML",active:""}},[n("prism-editor",{staticClass:"my-editor shadow-sm min-vh-100",attrs:{highlight:t.highlighter},model:{value:t.html,callback:function(e){t.html=e},expression:"html"}})],1),t._v(" "),n("b-tab",{attrs:{title:"CSS"}},[n("prism-editor",{staticClass:"my-editor shadow-sm min-vh-100",attrs:{highlight:t.highlighter},model:{value:t.css,callback:function(e){t.css=e},expression:"css"}})],1),t._v(" "),n("b-tab",{attrs:{title:"JS"}},[n("prism-editor",{staticClass:"my-editor shadow-sm min-vh-100",attrs:{highlight:t.highlighter},model:{value:t.js,callback:function(e){t.js=e},expression:"js"}})],1),t._v(" "),n("b-tab",{staticClass:"fix-pt",attrs:{title:"HASIL"},on:{click:t.debug}},[n("div",{attrs:{id:"nav-hasil"}},[n("iframe",{staticClass:"hasil border-0 w-100 min-vh-100",staticStyle:{"margin-bottom":"-5px"},attrs:{id:"hasil"}})])])],1)],1)],1)]),t._v(" "),n("Footer")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card p-3 shadow-sm mb-5"},[n("h3",{staticClass:"font-weight-bold"},[t._v("Latihan Ngoding </>")]),t._v(" "),n("span",[t._v("Text Editor sederhana yang bisa membantumu dalam belajar pemrograman website statis.")])])}],!1,null,"6aa35230",null);e.default=component.exports;installComponents(component,{Navbar:n(297).default,Footer:n(298).default})}}]);