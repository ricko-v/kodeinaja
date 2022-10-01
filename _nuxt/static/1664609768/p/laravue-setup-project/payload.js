__NUXT_JSONP__("/p/laravue-setup-project", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ){return {data:[{posts:[{slug:"laravue-setup-project",description:"Membuat projek dengan laravel 8 dan Vuejs 2",title:"LaraVue #1: Setup Project",tag:["laravel","vuejs"],category:["laravue"],username:"ricko-v",createdAt:"2022-07-21T17:00:00.000Z",toc:[{id:al,depth:P,text:am},{id:an,depth:P,text:ao},{id:ap,depth:P,text:aq},{id:ar,depth:P,text:as},{id:at,depth:P,text:au}],body:{type:"root",children:[{type:b,tag:n,props:{},children:[{type:a,value:"Halo teman-teman semua 👋 Bagaimana kabarnya?"}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Selamat datang di seri laravue (laravel dan vuejs). Pada postingan pertama ini akan membahas tentang cara membuat setup projectnya."}]},{type:a,value:f},{type:b,tag:Q,props:{id:al},children:[{type:b,tag:R,props:{ariaHidden:S,href:"#setup-project",tabIndex:T},children:[{type:b,tag:c,props:{className:[U,V]},children:[]}]},{type:a,value:am}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Hal yang harus ada:"}]},{type:a,value:f},{type:b,tag:"ol",props:{},children:[{type:a,value:f},{type:b,tag:av,props:{},children:[{type:a,value:"Composer"}]},{type:a,value:f},{type:b,tag:av,props:{},children:[{type:a,value:"PHP V 7.4+"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Untuk membuat projectnya, buka CMD dan tulis:"}]},{type:a,value:f},{type:b,tag:o,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,M]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"composer create-project laravel\u002Flaravel belajar-laravue\n"}]}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:b,tag:I,props:{},children:[{type:a,value:"catatan:"}]},{type:a,value:" belajar-laravue adalah nama project."}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"langkah selanjutnya masuk ke folder belajar-laravue dan tulis script berikut:"}]},{type:a,value:f},{type:b,tag:o,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,M]},children:[{type:b,tag:s,props:{},children:[{type:a,value:aw}]}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"langkah selanjutnya adalah menginstall vue-router dan vue-axios."}]},{type:a,value:f},{type:b,tag:o,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,M]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"npm install vue-router@3.4.2 vue-axios --save\n"}]}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"langkah selanjutnya adalah menginstall laravel\u002Fui melalui composer."}]},{type:a,value:f},{type:b,tag:o,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,M]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"composer require laravel\u002Fui\n"}]}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"langkah selanjutnya adalah menginstall vue ui."}]},{type:a,value:f},{type:b,tag:o,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,M]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"php artisan ui vue\n"}]}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"langkah selanjutnya adalah menginstall vuejs melalui npm."}]},{type:a,value:f},{type:b,tag:o,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,M]},children:[{type:b,tag:s,props:{},children:[{type:a,value:aw}]}]}]},{type:a,value:f},{type:b,tag:Q,props:{id:an},children:[{type:b,tag:R,props:{ariaHidden:S,href:"#setup-vuejs",tabIndex:T},children:[{type:b,tag:c,props:{className:[U,V]},children:[]}]},{type:a,value:ao}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Setelah mengikuti langkah-langkah diatas, sekarang kita akan mensetup vuejsnya."}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:$},{type:b,tag:s,props:{},children:[{type:a,value:"resources\u002Fjs"}]},{type:a,value:j}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:ax},{type:b,tag:I,props:{},children:[{type:a,value:"layouts"}]},{type:a,value:" dan file App.vue didalamnya. Lalu tulis script berikut:"}]},{type:a,value:f},{type:b,tag:o,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,aa]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:b,tag:c,props:{className:[d,ac]},children:[{type:a,value:r},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:X}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:ad}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:ax},{type:b,tag:I,props:{},children:[{type:a,value:az}]},{type:a,value:", file Home.vue dan notFound.vue didalam folder js. Lalu tulis script berikut."}]},{type:a,value:f},{type:b,tag:o,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,aa]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:b,tag:c,props:{className:[d,ac]},children:[{type:a,value:r},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:X}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:ad}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:o,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,aa]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"404 Not Found"},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:b,tag:c,props:{className:[d,ac]},children:[{type:a,value:r},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:X}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:ad}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Buat file router.js didalam folder js. Lalu tulis script berikut"}]},{type:a,value:f},{type:b,tag:o,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,aA]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,K]},children:[{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:ae}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\".\u002Fviews\u002FHome.vue\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"notFound"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\".\u002Fviews\u002FnotFound.vue\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:X}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:af}]},{type:a,value:" routes "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:O}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'\u002F'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'home'"}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:" notFound"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'*'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'404'"}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Lalu edit file app.js menjadi seperti berikut"}]},{type:a,value:f},{type:b,tag:o,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,aA]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'.\u002Fbootstrap'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,K]},children:[{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:W}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"dom","variable"]},children:[{type:a,value:"window"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,ag]},children:[{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:W}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:O}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,K]},children:[{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:aI}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'.\u002Flayouts\u002FApp.vue'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,K]},children:[{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:ah}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'vue-router'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,K]},children:[{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:aJ}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'vue-axios'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"axios"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'axios'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,K]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,l]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'.\u002Frouter'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,aK,F,ag]},children:[{type:a,value:aL}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,aK,F,ag]},children:[{type:a,value:aL}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:" axios"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:af}]},{type:a,value:" router "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:O}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aM}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aN]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:"mode"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'history'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:" routes\n"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:af}]},{type:a,value:" app "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:O}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aM}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aN]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:"el"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'#app'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:"router"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:" router"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,"function-variable",F]},children:[{type:a,value:"render"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:aO}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"arrow",k]},children:[{type:a,value:"=\u003E"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:aI}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:Q,props:{id:ap},children:[{type:b,tag:R,props:{ariaHidden:S,href:"#webphp",tabIndex:T},children:[{type:b,tag:c,props:{className:[U,V]},children:[]}]},{type:a,value:aq}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:$},{type:b,tag:I,props:{},children:[{type:a,value:ai}]},{type:a,value:" dan buka file web.php. Edit bagian router menjadi seperti berikut."}]},{type:a,value:f},{type:b,tag:o,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,aP]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,"scope"]},children:[{type:a,value:"Route"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"::"}]}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"get"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,m,aj]},children:[{type:a,value:"'\u002F{any}'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"return"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"view"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,m,ak]},children:[{type:a,value:"\"welcome\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"-\u003E"}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"where"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,m,aj]},children:[{type:a,value:"'any'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,m,aj]},children:[{type:a,value:"'.*'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:Q,props:{id:ar},children:[{type:b,tag:R,props:{ariaHidden:S,href:"#welcomebladephp",tabIndex:T},children:[{type:b,tag:c,props:{className:[U,V]},children:[]}]},{type:a,value:as}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:$},{type:b,tag:I,props:{},children:[{type:a,value:az}]},{type:a,value:" dan buka file welcome.blade.php dan edit bagian body menjadi:"}]},{type:a,value:f},{type:b,tag:o,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,aP]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:a,value:"div id"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,m,ak]},children:[{type:a,value:"\"app\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aQ}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:a,value:"script src"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,m,ak]},children:[{type:a,value:"\"{{ mix('js\u002Fapp.js') }}\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aQ}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:Q,props:{id:at},children:[{type:b,tag:R,props:{ariaHidden:S,href:"#running-project",tabIndex:T},children:[{type:b,tag:c,props:{className:[U,V]},children:[]}]},{type:a,value:au}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Buka CMD dan ketik "},{type:b,tag:I,props:{},children:[{type:a,value:"php artisan serve"}]},{type:a,value:Z}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Buka CMD lagi dan ketik "},{type:b,tag:I,props:{},children:[{type:a,value:"npm run dev"}]},{type:a,value:" atau bisa juga "},{type:b,tag:I,props:{},children:[{type:a,value:"npm run watch"}]},{type:a,value:". Apabila terjadi error, silahkan jalankan kembali npm nya."}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Flaravue-setup-project",extension:".md",updatedAt:"2022-08-01T04:43:34.422Z"}]}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","\n"," ","tag","keyword","\u003E","operator","module","string","p","div","\u003C",";","\n    ","code","nuxt-content-highlight","pre","line-numbers",",","\u003C\u002F","maybe-class-name",":","(",")","script","literal-property","property","function","{","}","strong","import","imports","from","language-md","template","=",2,"h2","a","true",-1,"icon","icon-link","Vue","export","h1",".","\n \n","Buka folder ","language-html","\n        ","language-javascript","default","Home","const","property-access","VueRouter","routes","single-quoted-string","double-quoted-string","setup-project","Setup Project","setup-vuejs","Setup Vuejs","webphp","web.php","welcomebladephp","welcome.blade.php","running-project","Running Project","li","npm install\n","Buat folder ","router-view","views","language-js","\n  ","component","path","name","  ","require","'vue'","App","VueAxios","method","use","new","class-name","h","language-php","\u002F")));