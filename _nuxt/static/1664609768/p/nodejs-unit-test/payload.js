__NUXT_JSONP__("/p/nodejs-unit-test", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw){return {data:[{posts:[{slug:"nodejs-unit-test",description:"Cara membuat kode program yang baik dengan  unit test",title:P,tag:["nodejs",Q],category:["tutorial"],username:"mancode77",createdAt:"2022-07-27T17:00:00.000Z",toc:[{id:R,depth:m,text:S},{id:T,depth:m,text:U},{id:V,depth:m,text:W},{id:X,depth:m,text:v},{id:Y,depth:m,text:v},{id:Z,depth:m,text:_},{id:$,depth:m,text:v},{id:aa,depth:m,text:ab},{id:ac,depth:m,text:ad},{id:ae,depth:m,text:af},{id:ag,depth:m,text:ah},{id:ai,depth:m,text:aj}],body:{type:"root",children:[{type:b,tag:o,props:{},children:[{type:a,value:"Pada postingan kali ini akan membahas NodeJS Unit Test. Materi ini dari chanel youtube "},{type:b,tag:g,props:{href:"https:\u002F\u002Fwww.youtube.com\u002Fplaylist?list=UU14ZKB9XsDZbnHVmr4AmUpQ",rel:[z,A,B],target:C},children:[{type:a,value:"Programmer Zaman Now"}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Sebelum belajar "},{type:b,tag:D,props:{},children:[{type:a,value:P}]},{type:a,value:" disarankan untuk mempelajari "},{type:b,tag:g,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002F",rel:[z,A,B],target:C},children:[{type:a,value:"Javascript"}]},{type:a,value:" dan "},{type:b,tag:g,props:{href:"https:\u002F\u002Fnodejs.org\u002F",rel:[z,A,B],target:C},children:[{type:a,value:"NodeJS"}]},{type:a,value:" dasar terlebih dahulu!."}]},{type:a,value:e},{type:b,tag:n,props:{id:R},children:[{type:b,tag:g,props:{href:"#pengenalan-software-testing",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:S}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Software testing adalah salah satu disiplin ilmu dalam software testing. Tujuan utama dari software testing adalah memastikan kualitas kode aplikasi baik. Ilmu untuk software testing sangat luas, pada materi ini kita hanya akan fokus ke unit testing."}]},{type:a,value:e},{type:b,tag:H,props:{id:Q},children:[{type:b,tag:g,props:{href:"#unit-test",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:"Unit Test"}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Unit Test adalah proses pengujian kode program terkecil, untuk meningkatkan kualitas kode program, sebagai contoh biasanya menguji sebuah method."}]},{type:a,value:e},{type:b,tag:n,props:{id:T},children:[{type:b,tag:g,props:{href:"#pengenalan-jest",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:U}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Jest adalah salah satu library untuk unit test NodeJS yang sangat populer. Jest sendiri dibuat oleh Facebook. Jest terintegrasi sangat baik dengan banyak teknologi seperti NodeJS, ReactJS, VueJS, dan lain-lain. Jest fokus pada kesederhanaan, sehingga penggunaannya sangat mudah untuk pemula yang ingin mencoba unit test."}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fjestjs.io\u002F",rel:[z,A,B],target:C},children:[{type:a,value:"Jest"}]}]},{type:a,value:e},{type:b,tag:n,props:{id:V},children:[{type:b,tag:g,props:{href:"#membuat-project",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:W}]},{type:a,value:e},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,u]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"$ npm init\n"}]}]}]},{type:a,value:e},{type:b,tag:n,props:{id:X},children:[{type:b,tag:g,props:{href:"#kode-packagejson",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:v}]},{type:a,value:e},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,u]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"{\n \"name\": \"belajar-nodejs-unit-test\",\n \"version\": \"1.0.0\",\n \"description\": \"Belajar\",\n \"main\": \".\u002Fsrc\u002Findex.js\",\n \"type\": \"module\",\n \"scripts\": {\n     \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\"\n },\n \"author\": \"author\",\n \"licenses\": \"ISC\"\n}\n"}]}]}]},{type:a,value:e},{type:b,tag:H,props:{id:"menginstall-jest"},children:[{type:b,tag:g,props:{href:"#menginstall-jest",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:"Menginstall Jest"}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Jest digunakan untuk membuat unit test saja, sehingga kita tidak perlu menambahkan sebagai dependency production. Kita cukup tambahkan sebagai development dependency. Kita bisa tambahkan di package.json atau gunakan perintah :"}]},{type:a,value:e},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,u]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"$ npm install jest --save-dev\n"}]}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fjest",rel:[z,A,B],target:C},children:[{type:a,value:"Jest-pacakge"}]}]},{type:a,value:e},{type:b,tag:n,props:{id:Y},children:[{type:b,tag:g,props:{href:"#kode-packagejson-1",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:v}]},{type:a,value:e},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,u]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"{\n \"name\": \"belajar-nodejs-unit-test\",\n \"version\": \"1.0.0\",\n \"description\": \"Belajar\",\n \"main\": \".\u002Fsrc\u002Findex.js\",\n \"type\": \"module\",\n \"scripts\": {\n     \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\"\n },\n \"author\": \"author\",\n \"licenses\": \"ISC\",\n \"devDepedencies\": {\n     \"jest\": \"^28.1.0\"\n }\n}\n"}]}]}]},{type:a,value:e},{type:b,tag:n,props:{id:Z},children:[{type:b,tag:g,props:{href:"#program-jest",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:_}]},{type:a,value:e},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,u]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"belajar-nodejs-unit-test\n|   node_modules\n│\n└───.bin\n    │   ....\n    │   ....\n    |   ....\n    │   jest\n"}]}]}]},{type:a,value:e},{type:b,tag:H,props:{id:"menjalankan-unit-test"},children:[{type:b,tag:g,props:{href:"#menjalankan-unit-test",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:"Menjalankan Unit Test"}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Untuk menjalankan unit test menggunakan Jest, kita bisa jalankan file jest yang ada di "},{type:b,tag:D,props:{},children:[{type:a,value:"node_modules\u002F.bin\u002Fjest"}]},{type:a,value:J}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Tapi kita bisa permudah menggunakan script di package, cukup ketikkan kode program nya saja di bagian "},{type:b,tag:D,props:{},children:[{type:a,value:"script test"}]},{type:a,value:J}]},{type:a,value:e},{type:b,tag:n,props:{id:$},children:[{type:b,tag:g,props:{href:"#kode-packagejson-2",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:v}]},{type:a,value:e},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,u]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"{\n \"name\": \"belajar-nodejs-unit-test\",\n \"version\": \"1.0.0\",\n \"description\": \"Belajar\",\n \"main\": \".\u002Fsrc\u002Findex.js\",\n \"type\": \"module\",\n \"scripts\": {\n     \"test\": \"jest\"\n },\n \"author\": \"author\",\n \"licenses\": \"ISC\",\n \"devDepedencies\": {\n     \"jest\": \"^28.1.0\"\n }\n}\n"}]}]}]},{type:a,value:e},{type:b,tag:n,props:{id:aa},children:[{type:b,tag:g,props:{href:"#kode-menjalankan-unit-test",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:ab}]},{type:a,value:e},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,u]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"\u003E \u003Cspan style=\"color:green\"\u003Ebelajar-nodejs-unit-test\u003C\u002Fspan\u003E npm test\n\n\n\u003E belajar-nodejs-unit-test@1.0.0 test\n\u003E jest\n\n\n\u003Cspan style=\"font-weight: 700\"\u003ENo test found, exiting with code 1\u003C\u002Fspan\u003E\nRun with `passWithNoTest` to exit with code 0\nIn \u002Fhome\u002Fuser\u002FDocuments\u002Fbelajar\u002Fnodejs\u002Fbelajar-nodejs-unit-test\n  2 files checked\n  testMatch: \u003Cspan style=\"color: gold\"\u003E**\u002F__test__\u002F**\u002F*.[jt]s?(x), **\u002F?(*.)+(spec|test).[tj]s?(x)\u003C\u002Fspan\u003E - 0 matches\n  testPathIgnorePatterns: \u003Cspan style=\"color: gold\"\u003E\u002Fnode_modules\u002F\u003C\u002Fspan\u003E - 2 matches\n  testRegex: - 0 matches\nPattern: - 0 matches\n\u003E \u003Cspan style=\"color:green\"\u003Ebelajar-nodejs-unit-test\u003C\u002Fspan\u003E\n"}]}]}]},{type:a,value:e},{type:b,tag:H,props:{id:"membuat-unit-test"},children:[{type:b,tag:g,props:{href:"#membuat-unit-test",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:"Membuat Unit Test"}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Jest sudah menyediakan function yang diintegrasikan secara global bernama "},{type:b,tag:D,props:{},children:[{type:a,value:ak}]},{type:a,value:", function tersebut digunakan untuk membuat unit test. Function "},{type:b,tag:D,props:{},children:[{type:a,value:ak}]},{type:a,value:" memiliki parameter nama unit test dan juga function yang berisi kode unit test nya."}]},{type:a,value:e},{type:b,tag:n,props:{id:ac},children:[{type:b,tag:g,props:{href:"#struktur-folder-tanpa-unit-test",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:ad}]},{type:a,value:e},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,u]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"belajar-nodejs-unit-test\n│   node_modules\n└───src\n|    |   sum.js\n|\n│   package.json\n|   package-lock.json\n"}]}]}]},{type:a,value:e},{type:b,tag:n,props:{id:ae},children:[{type:b,tag:g,props:{href:"#kode-sum-function",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:af}]},{type:a,value:e},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,al]},children:[{type:b,tag:t,props:{},children:[{type:a,value:am},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:an}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,w,K]},children:[{type:a,value:"export"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:ap}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,"function-variable",E]},children:[{type:a,value:aq}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:ar}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:"first"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:as}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,at,F]},children:[{type:a,value:au}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,w,"control-flow"]},children:[{type:a,value:"return"}]},{type:a,value:" first "},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"+"}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:n,props:{id:ag},children:[{type:b,tag:g,props:{href:"#struktur-folder-dengan-unit-test",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:ah}]},{type:a,value:e},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,u]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"belajar-nodejs-unit-test\n│   node_modules\n└───src\n|   |   sum.js\n|\n└───test\n|   |   sum.test.js\n|\n│   package.json\n|   package-lock.json\n"}]}]}]},{type:a,value:e},{type:b,tag:n,props:{id:ai},children:[{type:b,tag:g,props:{href:"#kode-test-sum-function",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:aj}]},{type:a,value:e},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,al]},children:[{type:b,tag:t,props:{},children:[{type:a,value:am},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:an}]},{type:a,value:"\n    \n    "},{type:b,tag:c,props:{className:[d,w,K]},children:[{type:a,value:"import"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,"imports"]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:" sum "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,w,K]},children:[{type:a,value:"from"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"'.\u002F..\u002Fsrc\u002Fsum.js'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"test"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"'sum(1, 2) mus be 3'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,at,F]},children:[{type:a,value:au}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:ap}]},{type:a,value:" result "},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:ar}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:"1"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:"2"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:"\n\n        "},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"expect"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:"result"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,"method",E,"property-access"]},children:[{type:a,value:"toBe"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:"3"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:e}]}]}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fnodejs-unit-test",extension:".md",updatedAt:"2022-08-17T01:32:56.101Z"}]}],fetch:{},mutations:void 0}}("text","element","span","token","\n","punctuation","a","true",-1,"icon","icon-link"," ",2,"h2","p","div","nuxt-content-highlight","pre","line-numbers","code","language-text","Kode: package.json","keyword","(",")","nofollow","noopener","noreferrer","_blank","strong","function","operator",";","h1","string",".","module",",","{","}","number","NodeJS Unit Test","unit-test","pengenalan-software-testing","Pengenalan Software Testing","pengenalan-jest","Pengenalan Jest","membuat-project","Membuat Project","kode-packagejson","kode-packagejson-1","program-jest","Program Jest","kode-packagejson-2","kode-menjalankan-unit-test","Kode: Menjalankan Unit Test","struktur-folder-tanpa-unit-test","Struktur Folder Tanpa Unit Test","kode-sum-function","Kode: Sum Function","struktur-folder-dengan-unit-test","Struktur Folder Dengan Unit Test","kode-test-sum-function","Kode: Test Sum Function","test()","language-js","    ","'use strict'","\n\n    ","const","sum","="," second","arrow","=\u003E","\n        ","\n    ")));