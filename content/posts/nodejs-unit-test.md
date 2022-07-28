---
title: NodeJS Unit Test
description: Cara membuat kode program yang baik dengan  unit test
tag: ["nodejs", "unit-test"]
category: ["tutorial"]
username: mancode77
createdAt: 2022-7-28
---

Pada postingan kali ini akan membahas NodeJS Unit Test. Materi ini dari chanel youtube [Programmer Zaman Now](https://www.youtube.com/playlist?list=UU14ZKB9XsDZbnHVmr4AmUpQ)

Sebelum belajar **NodeJS Unit Test** disarankan untuk mempelajari [Javascript](https://developer.mozilla.org/) dan [NodeJS](https://nodejs.org/) dasar terlebih dahulu!.

## Pengenalan Software Testing
Software testing adalah salah satu disiplin ilmu dalam software testing. Tujuan utama dari software testing adalah memastikan kualitas kode aplikasi baik. Ilmu untuk software testing sangat luas, pada materi ini kita hanya akan fokus ke unit testing.

## Pengenalan Jest
Jest adalah salah satu library untuk unit test NodeJS yang sangat populer. Jest sendiri dibuat oleh Facebook. Jest terintegrasi sangat baik dengan banyak teknologi seperti NodeJS, ReactJS, VueJS, dan lain-lain. Jest fokus pada kesederhanaan, sehingga penggunaannya sangat mudah untuk pemula yang ingin mencoba unit test.

[Jest](https://jestjs.io/)

## Membuat Project

```
$ npm init
```

## Menginstall Jest

Jest digunakan untuk membuat unit test saja, sehingga kita tidak perlu menambahkan sebagai dependency production. Kita cukup tambahkan sebagai development dependency. Kita bisa tambahkan di package.json atau gunakan perintah : 

```
$ npm install jest --save-dev
```

[Jest-pacakge](https://www.npmjs.com/package/jest 
)

### Kode package.json

```JSON
{
 "name": "belajar-nodejs-unit-test",
 "version": "1.0.0",
 "description": "Belajar",
 "main": "./src/index.js",
 "type": "module",
 "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
 },
 "author": "author",
 "licenses": "ISC",
 "devDepedencies": {
     "jest": "^28.1.0"
 }
}
```
next....
