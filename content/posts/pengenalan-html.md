---
title: 'HTML #1: Pengenalan HTML'
description: Mari berkenalan dengan HTML.
category: ["html"]
tag: ["html", "html-dasar"]
username: ricko-v
createdAt: 2022-7-04
---

Halo teman-teman semua 👋

Selamat datang di tutorial seri HTML. Di seri ini, teman-teman akan belajar HTML dari dasar hingga sampai bisa membuat sebuah halaman website. Saya sendiri mengambil sumber pembelajarannya dari website [w3schools.com](https://www.w3schools.com/).

## Apa itu HTML?
**HTML** adalah singkatan dari Hyper Text Markup Language. HTML bukanlah sebuah bahasa pemrograman melainkan sebuah bahasa markup yang digunakan untuk membuat halaman website. HTML lah yang mendeskripsikan struktur dari halaman website. HTML terdiri dari beberapa seri element. Element inilah yang akan memberitahu browser bagaimana cara menampilkan konten.

## Contoh HTML Sederhana
```html
<!DOCTYPE html>
<html>
<head>
    <title>Judul Halaman</title>
</head>
<body>
    <h1>Kota Solo</h1>
    <p>Adalah sebuah kota yang terletak di Jawa Tengah...</p>
</body>
</html> 
```
<Kodein src='contoh-html'></Kodein>

## Break Down Script
Mari kita break down script yang digunakan pada contoh diatas:

| Nama Tag | Keterangan |
| ----- | ---------- |
| ```<!DOCTYPE html>```   | Mendefinisikan versi HTML yang dipakai. Pada contoh ini adalah HTML5 |
| ```<html>```   | Memuat sebuah dokumen HTML. Semua elemen lain harus merupakan turunan dari elemen ini. |
| ```<head>```   | Berisi informasi yang dapat dibaca mesin (metadata) tentang dokumen, seperti tag ```<title>```, ```<script>```, ```<meta>```, ```<link>```. |
| ```<title>```   | Mendefinisikan judul website yang dibuat. |
| ```<body>```   | Mempresentasikan isi dari dokumen HTML. Hanya ada satu tag ```<body>``` dalam dokumen.  |
| ```<h1>```   | Berfungsi untuk membuat teks heading terbesar |
| ```<p>```   | Berfungsi untuk membuat paragraf |

## Apa itu HTML Element?
Sebuah element HTML didefinisikan dengan **tag pembuka** (<), **isi konten**, **tag penutup** (>). Untuk lebih jelasnya bisa lihat contoh struktur element HTML dibawah ini.

```html
<namatag>isi konten</namatag>
```

Contoh Penerapannya:

```html
<h1>Kota Solo</h1>
```

Tabel keterangan dari beberapa contoh html sederhana:
| Tag Pembuka | Isi Konten | Tag Penutup |
| ----------- | ---------- | ----------- |
| ```<h1>``` | Kota Solo | ```</h1>``` |
| ```<p>``` | Adalah sebuah kota... | ```</p>``` |

Ada juga tag HTML yang tidak memiliki isi konten ataupun tag penutup, seperti:

| Tag Pembuka | Isi Konten | Tag Penutup |
| ----------- | ---------- | ----------- |
| ```<img>``` | - | - |
| ```<br>``` | - | - |

## Web Browser
Mungkin teman-teman sudah mengetahui apa itu web browser seperti Chrome, Firefox, Safari, dan lain-lain. Fungsi atau tujuan dari web browser adalah untuk membaca dokumen HTML dan menampilkannya. Dokumen HTML yang ditampilkan adalah semua element HTML yang berada didalam tag ```<body>```.

## Sejarah Versi HTML
| Versi | Keterangan | Tahun |
| ----- | ---------- | ----- |
| 1.0   | N/A        | 1994-01-01 |
| 2.0   | <a href='https://tools.ietf.org/html/rfc1866' target='_blank'>RFC 1866</a>       | 	1995-11-24 |
| 3.2   | <a href='https://www.w3.org/TR/REC-html32' target='_blank'>W3C: HTML 3.2</a>       | 	1997-01-14 |
| 4.0   | <a href='https://www.w3.org/TR/1998/REC-html40-19980424/' target='_blank'>W3C: HTML 4.0</a>       | 	1998-04-24 |
| 4.01   | <a href='https://www.w3.org/TR/html401/' target='_blank'>W3C: HTML 4.01</a>       | 	1999-12-24 |
| 5   | <a href='https://html.spec.whatwg.org/multipage/' target='_blank'>WHATWG: HTML 5</a>       | 		2014-10-28 |
| 5.1   | <a href='https://www.w3.org/TR/2016/REC-html51-20161101/' target='_blank'>W3C: HTML 5.1</a>       | 		2016-11-01 |