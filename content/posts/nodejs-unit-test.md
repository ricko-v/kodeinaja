---
title: NodeJS Unit Test
description: Cara membuat kode program yang baik dengan  unit test
tag: ["nodejs", "unit-test"]
category: ["tutorial"]
username: mancode77
createdAt: 2022-7-29
---

Pada postingan kali ini akan membahas NodeJS Unit Test. Materi ini dari chanel youtube [Programmer Zaman Now](https://www.youtube.com/playlist?list=UU14ZKB9XsDZbnHVmr4AmUpQ)

Sebelum belajar **NodeJS Unit Test** disarankan untuk mempelajari [Javascript](https://developer.mozilla.org/) dan [NodeJS](https://nodejs.org/) dasar terlebih dahulu!.

# Pengenalan Software Testing
Software testing adalah salah satu disiplin ilmu dalam software testing. Tujuan utama dari software testing adalah memastikan kualitas kode aplikasi baik. Ilmu untuk software testing sangat luas, pada materi ini kita hanya akan fokus ke unit testing.

# Unit Test
Unit Test adalah proses pengujian kode program terkecil, untuk meningkatkan kualitas kode program, sebagai contoh biasanya menguji sebuah method.

# Pengenalan Jest
Jest adalah salah satu library untuk unit test NodeJS yang sangat populer. Jest sendiri dibuat oleh Facebook. Jest terintegrasi sangat baik dengan banyak teknologi seperti NodeJS, ReactJS, VueJS, dan lain-lain. Jest fokus pada kesederhanaan, sehingga penggunaannya sangat mudah untuk pemula yang ingin mencoba unit test.

[Jest](https://jestjs.io/)

# Membuat Project
```
$ npm init
```

## Kode: package.json
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
 "licenses": "ISC"
}
```

# Menginstall Jest
Jest digunakan untuk membuat unit test saja, sehingga kita tidak perlu menambahkan sebagai dependency production. Kita cukup tambahkan sebagai development dependency. Kita bisa tambahkan di package.json atau gunakan perintah : 

```
$ npm install jest --save-dev
```

[Jest-pacakge](https://www.npmjs.com/package/jest 
)

## Kode: package.json
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

## Program Jest
```
belajar-nodejs-unit-test
|   node_modules
│
└───.bin
    │   ....
    │   ....
    |   ....
    │   jest
```

# Menjalankan Unit Test
Untuk menjalankan unit test menggunakan Jest, kita bisa jalankan file jest yang ada di **node_modules/.bin/jest**. 

Tapi kita bisa permudah menggunakan script di package, cukup ketikkan kode program nya saja di bagian **script test**.

## Kode: package.json
```JSON
{
 "name": "belajar-nodejs-unit-test",
 "version": "1.0.0",
 "description": "Belajar",
 "main": "./src/index.js",
 "type": "module",
 "scripts": {
     "test": "jest"
 },
 "author": "author",
 "licenses": "ISC",
 "devDepedencies": {
     "jest": "^28.1.0"
 }
}
```

## Kode: Menjalankan Unit Test
```
> <span style="color:green">belajar-nodejs-unit-test</span> npm test


> belajar-nodejs-unit-test@1.0.0 test
> jest


<span style="font-weight: 700">No test found, exiting with code 1</span>
Run with `passWithNoTest` to exit with code 0
In /home/user/Documents/belajar/nodejs/belajar-nodejs-unit-test
  2 files checked
  testMatch: <span style="color: gold">**/__test__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x)</span> - 0 matches
  testPathIgnorePatterns: <span style="color: gold">/node_modules/</span> - 2 matches
  testRegex: - 0 matches
Pattern: - 0 matches
> <span style="color:green">belajar-nodejs-unit-test</span>
```

# Membuat Unit Test
Jest sudah menyediakan function yang diintegrasikan secara global bernama **test()**, function tersebut digunakan untuk membuat unit test. Function **test()** memiliki parameter nama unit test dan juga function yang berisi kode unit test nya.

## Struktur Folder Tanpa Unit Test
```
belajar-nodejs-unit-test
│   node_modules
└───src
|    |   sum.js
|
│   package.json
|   package-lock.json
```

## Kode: Sum Function
```js
    'use strict'

    export const sum = (first, second) => {
        return first + second;
    }
```

## Struktur Folder Dengan Unit Test
```
belajar-nodejs-unit-test
│   node_modules
└───src
|   |   sum.js
|
└───test
|   |   sum.test.js
|
│   package.json
|   package-lock.json
```

## Kode: Test Sum Function
```js
    'use strict'
    
    import { sum } from './../src/sum.js';

    test('sum(1, 2) mus be 3', () => {
        const result = sum(1, 2);

        expect(result).toBe(3);
    });
```