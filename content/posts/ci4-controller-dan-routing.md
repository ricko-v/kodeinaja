---
title: 'CI-4 #2: Controller dan Routing'
description: 'Belajar controller dan routing di codeigniter 4'
tag: ["ci-4","codeigniter"]
category: ["codeigniter"]
username: ricko-v
createdAt: 2022-7-15
---

Halo teman-teman semua 👋 Bagaimana kabarnya?

Selamat datang kembali di tutorial seri Codeigniter versi 4. Setelah teman-teman berhasl menginstall dan menjalankan projek codeigniter 4 nya, selanjutnya teman-teman akan belajar controller dan routing pada codeigniter 4 ini.

## Membuat Routing
Sekarang kita akan membuat sebuah rute url ke **/about** pada projek kita kemarin.

[1] Silahkan teman-teman cari dan buka file yang bernama **Routes.php**. Letak filenya berada di
```md
~/belajar-ci4/app/Config/Routes.php
```
**Catatan:** belajar-ci4 adalah nama projek saya, bisa jadi berbeda dengan teman-teman.

[2] Scroll kebawah hingga menemukan script berikut
```php
$routes->get('/', 'Home::index');
```
table keterangan
| Teks | Keterangan |
| -------- | ------------------ |
| $routes | RouterCollection class |
| get | http request, bisa diubah menjadi GET, POST, PUT, DELETE |
| '/' | rute url yang akan dibuat |
| 'Home::index' | nama controller dan method |

[3] Kita akan menambahkan sebuah rute url ke **/about** yang memiliki controller dan method **Home::about**.
```php
$routes->get('/', 'Home::index');
$routes->get('/about', 'Home::about');
```

## Membuat Controller dan Method
Setelah teman-teman menambahkan rute url, selanjutnya adalah membuat controller dan method dari rute url yang dibuat tadi, yaitu **Home** dan **about**.

[1] Silahkan teman-teman cari dan buka file yang bernama **Routes.php**. Letak filenya berada di
```md
~/belajar-ci4/app/Controllers/Home.php
```
**catatan:** Home adalah nama dari controller tadi.

[2] Setelah dibuka akan terdapat class **Home**, nama class ini biasanya harus sama seperti nama file yang dibuat, yaitu **Home.php**.

[3] Lanjut kebagian bawah ada script berikut:
```php
public function index()
    {
        return view('welcome_message');
    }
		
```
tabel keterangan
| Teks | Keterangan |
| -------- | ------------------ |
| index() | nama method dari controller |
| view('welcome_message') | nama file dari folder Views yang akan dirender atau ditampilkan |

Jika teman-teman ingin melihat isi dari file **welcome_message.php**, letak filenya berada di
```md
~/belajar-ci4/app/Views/welcome_message.php
```

[5] Kita akan menambahkan method baru didalam controller Home. Ketik script dibawah ini.
```php
public function about()
    {
        return view('about');
    }
```

[6] Membuat views untuk rute about. Silahkan teman-teman buat file baru bernama **about.php** didalam folder Views. Dan ketikan script berikut
```php
<b>Nama aku adalah Ricko</b>
```

[7] Jalankan projek codeigniternya dengan **php spark serve** dan buka http//localhost:8080/about. Jika keluar tulisan **Namaku adalah Ricko**, berarti teman-teman sudah berhasil melakukan Routing dan Controller.

## Akhir
Silahkan teman-teman berlatih melakukan percobaan sendiri dengan membuat rute url baru dengan file controller yang berbeda.
