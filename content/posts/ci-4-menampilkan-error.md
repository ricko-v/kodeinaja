---
title: 'CI-4 #4: Menampilkan Error'
description: 'Cara menampilkan pesan error di codeigniter 4'
tag: ["ci-4","codeigniter"]
category: ["codeigniter-4"]
username: ricko-v
createdAt: 2022-7-21
---

Halo teman-teman semua 👋 Bagaimana kabarnya?

Selamat datang kembali di tutorial seri Codeigniter versi 4. Kali ini kita akan menampilkan pesan error apabila terjadi bug atau kesalahan syntax pada projek codeigniter 4.

# File .env
Di dalam projek teman-teman terdapat sebuah file bernama env. Yang harus dilakukan adalah menambahkan titik diawal, sehingga menjadi .env

environment (env) adalah sebuah file yang menampung variabel. Biasanya digunakan untuk konfigurasi.

langkah selanjutnya adalah buka file .env tadi dan scroll ke bawah hingga menjumpai script berikut

```md
# CI_ENVIRONMENT = production
```

Teman-teman cukup hapus tanda "#" dan ganti **production** menjadi **development**. Karena saat ini sedang mengembangkan projek dan belum siap untuk dijadikan produksi.
