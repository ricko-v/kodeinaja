---
title: Membuat Tools MD5 Crack - Nodejs
description: Membuat tools md5 crack dengan nodejs.
category: ['tutorial']
tag: ['tools', 'cli', 'nodejs']
username: ricko-v
---

Halo teman-teman semua! Selamat datang di tutorial seri terbaru, yaitu studi kasus. Pada seri ini, kita akan bersama-sama membuat sebuah project dari awal sampai jadi. Untuk mengawali seri ini, kita akan membuat sebuah tools sederhana tentang md5 cracking dengan menggunakan nodejs. Teman-teman harus menginstall nodejs terlebih dahulu. Jika belum menginstall, teman-teman dapat membaca tutorial <a href='https://kodekembar.web.app/post/cara-menginstall-nodejs-di-windows' target='_blank'>menginstall nodejs</a>. Langsung saja masuk ke pembahasannya.

**Disclaimer**: Hanya untuk edukasi dan pembelajaran.

# Persiapan
Ada beberapa hal yang harus dipersiapkan terlebih dahulu.

## Untuk pc/laptop
1. Text Editor (Saya disini menggunakan Visual Studio Code)
2. Nodejs
3. CMD / Terminal
4. Wordlist

## Untuk HP
1. Text Editor (rekomendasi text editor di termux)
2. Nodejs
3. Termux
4. Wordlist

# Penjelasan singkat
Sebelum membuat toolsnya, mari kita ketahui terlebih dahulu mengenai tentang md5, crack, dan hal lainnya.

## MD5
Dilansir dari <a href='https://id.wikipedia.org/wiki/MD5' target='_blank'>wikipedia</a>, **MD5** (Message-Digest algorithm 5) adalah fungsi hash kriptografik yang digunakan secara luas dengan hash value 128-bit secara satu arah. Pada standart Internet (RFC 1321), MD5 telah dimanfaatkan secara bermacam-macam pada aplikasi keamanan, dan MD5 juga umum digunakan untuk melakukan pengujian integritas sebuah berkas. Biasanya, MD5 digunakan untuk mengenkripsi password didalam database.

contoh hasil enskipsi dari kata "Solo":

```bash
26c04769d2607a2234d4329b7630ed35
```

## Crack
**Cracking** menurut saya adalah sebuah tindakan yang dilakukan secara berulang-ulang kali untuk memecahkan suatu kode/sistem. Karena encrypt MD5 bersifat satu arah, maka untuk memecahkan / mengdecrypt perlu menggunakan metode cracking. Tentu saja ada kemungkinan jika nanti tidak berhasil di decrypt, jika kata yang bersangkutan tidak ada didalam *wordlist*.

## Wordlist
**Wordlist** adalah sekumpulan rangkaian huruf, angka, simbol yang digunakan untuk mencocokkan suatu password / kata. Semakin banyak rangkaian kata, maka semakin besar peluang berhasil jalannya tools. Untuk wordlistnya, kita dapat membuat sendiri atau mendownloadnya di internet.

# Membuat Project
Langsung saja kita membuat projectnya, berikut adalah langkah-langkahnya.

## Membuat Folder
Langkah pertama adalah membuat folder "tools-md5" atau teman-teman bebas memberi nama apapun. Disini saya menggunakan CMD untuk membuat folder dan beberapa langkah lainnya. Tunggu sampai proses intalasinya selesai.

![folder project](https://iili.io/Vwgcnn.png)

## Mendownload Wordlist
Langkah selanjutnya adalah mendownload wordlist. Silahkan teman-teman download file wordlistnya <a href='https://pastebin.com/dl/qWjDc4Dr' target='_blank'>disini</a>, lalu pindah filenya kedalam folder yang sudah kita buat sebelumnya tadi.


##  Mulai Mengoding
Silahkan teman-teman buka folder projectnya di text editor dan buat file baru bernama "index.js". Selanjutnya, **tulis** script dibawah ini.

```js
console.clear();

const md5 = require('md5');
const fs = require('fs');
const rl = require('readline');
const colors = require('colors');
const gud = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});


gud.question('[+] Masukan md5 hash: ', (hash) => {
    const r = rl.createInterface({
        input: fs.createReadStream('wordlist.txt'),
        output: process.stdout,
        terminal: false
    });

    let i = 1;

    r.on('line', (teks) => {
        if (hash == md5(teks.trim())) {
            console.log("Ditemukan! => " + teks.green);
            r.removeAllListeners();
        } else {
            console.log("[" + (i++) + "] " + md5(teks.trim()).red)
        }
    })

    r.on('close', () => {
        console.log('\nKata tidak ditemukan!')
    })

    gud.close();
})
```

## Menjalankan Program
Untuk menjalankan programnya, silahkan teman-teman buka kembali CMD dan masuk ke path projectnya tadi.
Setelah itu, teman-teman tinggal menjalankan programnya dengan menuliskan:

```bash
node index.js
```

Disitu teman-teman disuruh memasukan md5 hash yang nantinya akan dicrack oleh program. Untuk mencobanya, teman-teman masukan saja terlebih dahulu md5 hash berikut:

```
d145fb65cbafec20010949a4ec6c167b
```

Jika teman-teman mengikuti langkah-langkah diatas dengan benar, maka hasil akhir programnya akan seperti ini

![hasil akhir](https://iili.io/Vwg06G.gif)

# Breakdown Script
Setelah berhasil menjalankan programnya, mari kia breakdwon script diatas agar lebih memahami jalannya program.

1. **console.clear()** adalah script yang digunakan untuk membersihkan console/terminal.

```js
console.clear()
```

2. Memanggil module nodejs yang diperlukan. 

```js
const md5 = require('md5');
const fs = require('fs');
const rl = require('readline');
const colors = require('colors');
```

3. Membuat fungsi input output di console / terminal.

```js
const gud = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});
```

4. Membuat input yang ditampung dengan variabel hash.

```js
gud.question('[+] Masukan md5 hash: ', (hash) => {
```

5. Membuat fungsi untuk membaca file wordlist.txt dari baris ke baris.

```js
const r = rl.createInterface({
    input: fs.createReadStream('wordlist.txt'),
    output: process.stdout,
    terminal: false
});
```

6. Membuat variabel i, untuk mengetahui jumlah baris yang dimulai dari 1.

```js
let i = 1;
```

7. Menangkap hasil baca file wordlist.txt dan ditampung ke variabel teks.

```js
r.on('line', (teks) => {
```

8. Membuat logika, jika variabel hash sama dengan md5 hash yang akan dibuat dari hasil baca file wordlist.txt dari baris per baris.

```js
if (hash == md5(teks.trim())) {
```

9. Jika sama atau cocok, maka tampilkan teks "Ditemukan! => {{ teks dari hasil baca }}" yang berwarna hijau.

```js
    console.log("Ditemukan! => " + teks.green);
```

10. Membuat fungsi agar baca file wordlist.txt dihentikan, karena kata sudah cocok.

```js
    r.removeAllListeners();
}
```

11. Jika tidak sama / tidak cocok, maka tampilkan jumlah baris dan hasil md5 dari hasil baca file wordlist.txt per baris dengan warna merah.

```js
else {
    console.log("[" + (i++) + "] " + md5(teks.trim()).red)
}
});
```

12. Membuat fungsi jika kata tidak ada yang cocok sama sekali dari semua teks file wordlist.txt, dan menampilkan "Kata tidak ditemukan!" ke dalam console/terminal.

```js
r.on('close', () => {
    console.log('\nKata tidak ditemukan!')
})
```

13. Menutup fungsi input output pada console atau terminal.

```js
    gud.close();
})
```

# Kesimpulan
Itu tadi adalah tools simple untuk mencocokkan md5 hash secara berulang-ulang atau bisa disebut md5 crack. Sampai jumpa di tutorial lainnya.