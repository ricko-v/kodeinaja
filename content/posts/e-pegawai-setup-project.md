---
title: 'E-Pegawai #1: Setup Project'
description: 'Studi kasus membuat aplikasi website e-pegawai'
tag: ["reactjs","vitejs","ant-design"]
category: ["studi-kasus"]
username: ricko-v
createdAt: 2022-10-20
---

Halo teman-teman semua 👋 Bagaimana kabarnya?

Saya membuat kategori baru yaitu, **Studi Kasus**. Kategori ini akan berisi tentang bagaimana cara membuat sebuah project dari awal hingga berakhir. Jika teman-teman punya project dan ingin membagikan pengalamannya tentang membuat project tersebut, silahkan buat saja postingan di web ini :)

![alt text](https://iili.io/tvrUxV.png)

## Tentang Project
Pada project studi kasus pertama ini, kita akan membuat sebuah website untuk mengelola data pegawai (e-pegawai) dari suatu tempat kerja. Project ini akan dibuat dengan menggunakan **Reactjs**, **Ant Design**, dan **Vitejs**.


**Note: Jangan hanya copy/paste code yang ada nantinya, mending di ketik agar paham.**

## Membuat Project
Kita akan menggunakan **Vitejs** untuk membuat project Reactjs. Sebelum itu, pastikan teman-teman **sudah menginstall Nodejs*.

1. Buka CMD dan ketik **npm create vite@latest e-pegawai -- --template react**
2. Tekan enter dan tunggu proses instalasinya
3. Masuk ke direktori projeknya dengan mengetik **cd e-pegawai**
4. Lalu ketik npm install dan tunggu proses menginstall package-package yang diperlukan.
5. Jika sudah selesai, ketik **npm run dev** untuk menjalankan project e-pegawainya.
6. Copy link yang diberikan dan paste dibrowser.

![alt text](https://iili.io/tN03cx.png)

Jika tampilan dibrowser sama seperti diatas, maka teman-teman sudah berhasil membuat project reactjs menggunakan vitejs.

## Menginstall Ant-Design
Selanjutnya, kita akan menginstall ant design sebagai bantuan untuk membuat tampilan aplikasi website yang akan dibuat.

1. Buka CMD dan masuk ke directori project
2. Ketik **npm install antd** dan tunggu prosesnya hingga selesai

## Meningstall React Router Dom
Aplikasi yang akan kita buat akan memiliki beberapa jalur atau router url. Sehingga, kita perlu menginstall **react-router-dom** untuk membuat router pada reactjs.

1. Ketik **npm install react-router-dom** dan tunggu prosesnya hingga selesai

## Selanjutnya?
Pada part selanjutnya, kita akan membuat struktur direktori project seperti *components*, *pages*, *layout*, dll.
