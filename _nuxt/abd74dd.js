(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3,5,6],{335:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{path:""}},mounted:function(){this.path=this.$route.fullPath}},o=n(70),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("b-navbar",{staticClass:"shadow-sm",attrs:{toggleable:"lg",type:"light",variant:"white"}},[e("div",{staticClass:"container"},[e("b-navbar-brand",{staticClass:"font-weight-bold",attrs:{to:"/"}},[t._v("KodeInaja")]),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{attrs:{to:"/showcase"}},[e("span",{class:["/showcase"==t.path?"text-dark":""]},[t._v("Showcase")])]),t._v(" "),e("b-nav-item",{attrs:{to:"/ngoding"}},[e("span",{class:["/ngoding"==t.path?"text-dark":""]},[t._v("Ngoding")])]),t._v(" "),e("b-nav-item",{attrs:{to:"/arsip"}},[e("span",{class:["/arsip"==t.path?"text-dark":""]},[t._v("Arsip")])]),t._v(" "),e("b-nav-item",{attrs:{to:"/kategori"}},[e("span",{class:["/kategori"==t.path?"text-dark":""]},[t._v("Kategori")])]),t._v(" "),e("b-nav-item",{attrs:{to:"/tag"}},[e("span",{class:["/tag"==t.path?"text-dark":""]},[t._v("Tag")])]),t._v(" "),e("b-nav-item",{attrs:{to:"/cari"}},[e("span",{class:["/cari"==t.path?"text-dark":""]},[t._v("Cari")])])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},336:function(t,e,n){"use strict";n.r(e);var r=n(70),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"container-fluid py-3 bg-silver text-center"},[t("small",{staticClass:"text-secondary"},[this._v("©2022 KodeInaja - Made with 💖 by ricko-v")])])}],!1,null,null,null);e.default=component.exports},337:function(t,e,n){"use strict";n.r(e);var r={props:{tanggal:{type:String}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("id",{year:"numeric",month:"long",day:"numeric"})}}},o=n(70),component=Object(o.a)(r,(function(){var t=this;return(0,t._self._c)("span",{staticClass:"text-secondary"},[t._v(t._s(t.formatDate(t.tanggal)))])}),[],!1,null,null,null);e.default=component.exports},399:function(t,e,n){"use strict";n.r(e);n(89),n(1),n(4),n(56);var r=n(24),o=(n(55),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("posts").only(["title","slug","createdAt","username","description","category","tag"]).sortBy("createdAt","desc").fetch();case 3:for(i in o=e.sent,c=[],1,o)o[i].category.find((function(t){return t==r.kategori}))&&c.push(0);return c=0==c.length,e.abrupt("return",{posts:o,kosong:c,n:1});case 9:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Kategori ".concat(this.$route.params.kategori," - Kodeinaja"),meta:[{hid:"description",name:"description",content:"Daftar postingan kategori ".concat(this.$route.params.kategori)},{hid:"og:title",property:"og:title",content:"Kategori ".concat(this.$route.params.kategori," - Kodeinaja")},{hid:"og:description",property:"og:description",content:"Daftar postingan kategori ".concat(this.$route.params.kategori)},{hid:"twitter:title",name:"twitter:title",content:"Kategori ".concat(this.$route.params.kategori," - Kodeinaja")},{hid:"twitter:description",name:"twitter:description",content:"Daftar postingan kategori ".concat(this.$route.params.kategori)}]}},methods:{gachaWarna:function(){var t=["dark","warning","danger","success"];return t[Math.floor(Math.random()*t.length)]}}}),c=n(70),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("Navbar"),t._v(" "),e("div",{staticClass:"container-fluid min-vh-100 bg-silver pt-5"},[e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2"}),t._v(" "),t.kosong?t._e():e("div",{staticClass:"col-lg-8 p-0 mb-5"},[e("div",{staticClass:"card shadow-sm p-3"},[e("h3",[e("span",{staticClass:"font-weight-bold"},[t._v("Kategori Post")]),t._v(" -\n              "+t._s(t.$route.params.kategori)+"\n            ")])]),t._v(" "),t._m(0),t._v(" "),t._l(t.posts,(function(p){return p.category.find((function(e){return e==t.$route.params.kategori}))?e("div",{key:p.title,staticClass:"card shadow-sm p-3 mt-5"},[e("NuxtLink",{attrs:{to:"/p/"+p.slug}},[e("h4",{staticClass:"font-weight-bold"},[t._v(t._s(p.title))])]),t._v(" "),e("div",{staticClass:"d-flex overflow-auto mt-1"},t._l(p.tag,(function(n){return e("NuxtLink",{key:n,staticClass:"px-2 mr-2 pb-1 text-white rounded",class:"bg-"+t.gachaWarna(),attrs:{to:"/tag/"+n}},[e("small",{staticClass:"font-weight-bold"},[t._v(t._s(n))])])})),1),t._v(" "),e("span",{staticClass:"text-secondary mt-2"},[t._v(t._s(p.description))]),t._v(" "),e("div",{staticClass:"m-0 pt-2"},[e("small",[e("Tanggal",{attrs:{tanggal:p.createdAt}}),t._v("\n                |\n                "),e("NuxtLink",{staticClass:"text-secondary",attrs:{to:"/user/"+p.username}},[t._v(t._s(p.username))])],1)])],1):t._e()}))],2),t._v(" "),t.kosong?e("div",{staticClass:"col-lg-8 p-0 mb-5"},[e("div",{staticClass:"card shadow-sm p-3"},[e("h3",{},[t._v("Kategori tidak ada")]),t._v(" "),e("NuxtLink",{attrs:{to:"/kategori"}},[t._v("Kembali")])],1)]):t._e(),t._v(" "),e("div",{staticClass:"col-lg-2"})])])]),t._v(" "),e("Footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"mt-5 pt-5"},[t("hr",{staticClass:"border border-secondary"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(335).default,Tanggal:n(337).default,Footer:n(336).default})}}]);