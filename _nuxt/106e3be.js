(window.webpackJsonp=window.webpackJsonp||[]).push([[17,5],{328:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{path:""}},mounted:function(){this.path=this.$route.fullPath}},r=n(70),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("b-navbar",{staticClass:"shadow-sm",attrs:{toggleable:"lg",type:"light",variant:"white"}},[e("div",{staticClass:"container"},[e("b-navbar-brand",{staticClass:"font-weight-bold",attrs:{to:"/"}},[t._v("KodeInaja")]),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{attrs:{to:"/showcase"}},[e("span",{class:["/showcase"==t.path?"text-dark":""]},[t._v("Showcase")])]),t._v(" "),e("b-nav-item",{attrs:{to:"/ngoding"}},[e("span",{class:["/ngoding"==t.path?"text-dark":""]},[t._v("Ngoding")])]),t._v(" "),e("b-nav-item",{attrs:{to:"/arsip"}},[e("span",{class:["/arsip"==t.path?"text-dark":""]},[t._v("Arsip")])]),t._v(" "),e("b-nav-item",{attrs:{to:"/kategori"}},[e("span",{class:["/kategori"==t.path?"text-dark":""]},[t._v("Kategori")])]),t._v(" "),e("b-nav-item",{attrs:{to:"/tag"}},[e("span",{class:["/tag"==t.path?"text-dark":""]},[t._v("Tag")])]),t._v(" "),e("b-nav-item",{attrs:{to:"/cari"}},[e("span",{class:["/cari"==t.path?"text-dark":""]},[t._v("Cari")])])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},387:function(t,e,n){"use strict";n.r(e);n(4),n(56),n(15),n(2),n(1),n(13),n(36);var o={data:function(){return{tipe:"",username:"",repository:"",tag:"",project:"",description:"",url:"",download:"",thumbnail:""}},methods:{kirim:function(){var t=new Date,e=t.getFullYear(),n=t.getDate(),o=t.getMonth()+1;t=e+"-"+o+"-"+n;var r="---\nusername: ".concat(this.username,"\nproject: ").concat(this.project,"\ndescription: ").concat(this.description,"\nlocal_thumbnail:\nexternal_thumbnail: ").concat(this.thumbnail,"\ntag: ").concat(this.generateArr(this.tag),"\nurl: ").concat(this.url,"\ndownload: ").concat(this.download,"\nrepository: ").concat(this.repository,"\ncreatedAt: ").concat(t,"\n---"),l="https://github.com/ricko-v/kodeinaja/new/master/content/showcase/new?filename=".concat(this.project,".md&value=").concat(encodeURIComponent(r));window.open(l,"_self")},generateArr:function(t){for(var a=t.split(","),b="[",i=0;i<a.length;i++)i==a.length-1?b+='"'.concat(a[i].trim(),'"]'):b+='"'.concat(a[i].trim(),'",');return b}}},r=n(70),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("Navbar"),t._v(" "),e("div",{staticClass:"container-fluid min-vh-100 bg-silver pt-5"},[e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2"}),t._v(" "),e("div",{staticClass:"col-lg-8 p-0 mb-5"},[e("div",{staticClass:"card shadow-sm p-3"},[t._m(0),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"mt-4"},[e("div",[e("label",[t._v("Username Github:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control shadow-none mb-3",domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),e("label",[t._v("Repositori Project:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.repository,expression:"repository"}],staticClass:"form-control shadow-none mb-3",domProps:{value:t.repository},on:{input:function(e){e.target.composing||(t.repository=e.target.value)}}}),t._v(" "),e("label",[t._v("Nama Project:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.project,expression:"project"}],staticClass:"form-control shadow-none mb-3",domProps:{value:t.project},on:{input:function(e){e.target.composing||(t.project=e.target.value)}}}),t._v(" "),e("label",[t._v("Deskripsi Project")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control shadow-none mb-3",domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),e("label",[t._v("Thumbnail Project:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.thumbnail,expression:"thumbnail"}],staticClass:"form-control shadow-none",domProps:{value:t.thumbnail},on:{input:function(e){e.target.composing||(t.thumbnail=e.target.value)}}}),t._v(" "),t._m(1),t._v(" "),e("label",[t._v("Tag Project:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tag,expression:"tag"}],staticClass:"form-control shadow-none",domProps:{value:t.tag},on:{input:function(e){e.target.composing||(t.tag=e.target.value)}}}),t._v(" "),t._m(2),t._v(" "),e("label",[t._v("Tipe Project:")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.tipe,expression:"tipe"}],staticClass:"form-control shadow-none mb-3",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.tipe=e.target.multiple?n:n[0]}}},[e("option",[t._v("Website")]),t._v(" "),e("option",[t._v("Aplikasi")]),t._v(" "),e("option",[t._v("Website & Aplikasi")])]),t._v(" "),"Website"==t.tipe||"Website & Aplikasi"==t.tipe?e("div",[e("label",[t._v("Demo Project:")]),t._v(" "),e("input",{staticClass:"form-control shadow-none mb-3"})]):t._e(),t._v(" "),"Aplikasi"==t.tipe||"Website & Aplikasi"==t.tipe?e("div",[e("label",[t._v("Link Aplikasi:")]),t._v(" "),e("input",{staticClass:"form-control shadow-none mb-3"})]):t._e()]),t._v(" "),e("div",[e("button",{staticClass:"btn btn-success shadow-none",on:{click:t.kirim}},[t._v("Kirim")])])])])])])])])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"d-flex justify-content-between"},[t("h3",{staticClass:"font-weight-bold"},[this._v("Showcase Project")])])},function(){var t=this._self._c;return t("p",[t("small",{staticClass:"text-secondary"},[this._v("Note: Link gambar")])])},function(){var t=this._self._c;return t("p",[t("small",{staticClass:"text-secondary"},[this._v("Contoh: flutter, game")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(328).default})}}]);