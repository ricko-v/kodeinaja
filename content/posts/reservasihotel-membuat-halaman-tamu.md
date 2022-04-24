---
title: Reservasihotel - Membuat Halaman Tamu
description: Latihan UKK ReservasiHotel part 1.
category: ['tutorial']
tag: ['ukk', 'reservasihotel', 'php', 'mysql']
username: ricko-v
---

Halo teman-teman semua! Tutorial ini dibuat untuk sarana pembelajaran menghadapi UKK RPL tentang pembuatan website pemesanan hotel. Langsung saja masuk ke part 1, kalau rame lanjut part 2 😁.

## Spoiler Hasil
![Spoiler Hasil](https://iili.io/VSajwv.png)

## Membuat Folder Project
Langkah pertama yang harus dilakukan adalah membuat folder project. Teman-teman bebas memberi nama pada folder projectnya (disarankan tidak aneh-aneh namanya). Buat folder projectnya didalam **xampp/htdocs** ya. Setelah membuat folder projectnya, silahkan buka foldernya dengan menggunakan visual studio code.

## Mendownload Bootstrap
Langkah selanjutnya adalah mendownload bootstrap 5. Kunjungi website [https://getbootstrap.com/docs/5.1/getting-started/download/](https://getbootstrap.com/docs/5.1/getting-started/download/).

![Download Bootstrap 5](https://iili.io/VSaScX.png)

Tekan tombol download pada halaman link diatas (bukan pada gambar diatas ya). Pada saat tutorial ini ditulis, file download akan bernama **bootstrap-5.1.3-dist.zip**. Lalu ekstrak filenya dan rename folder hasil ekstraknya menjadi **bootstrap**. Pindahkan folder bootstrap kedalam folder project yang dibuat tadi.

## Membuat Beberapa Template
Langkah selanjutnya adalah membuat beberapa template yang bisa digunakan berkali-kali. Seperti template header, navbar, dan footer. Buat folder bernama 'template', lalu buat tiga file; **header.php**, **navbar.php**, **footer.php**.

### Membuat Header
Template header.php akan digunakan untuk memanggil bootstrap dan sebagai awalan struktur HTML. Tulis script berikut kedalam file header.php (tulis kawand, jangan copy paste).

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lat Hotel</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <script src="bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
```
**Tips:** Tulis ! lalu tekan enter, agar auto membuat starter HTML.
**Note:** Sesuaikan bagian title sesuai nama hotel masing-masing

### Membuat Navbar
Template navbar.php akan digunakan untuk membuat navigasi menu yang terletak pada bagian atas website. Tulis script berikut kedalam file navbar.php (tulis kawand, jangan copy paste).

```html
<nav class="navbar position-fixed fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold" href="#">LatHotel</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Beranda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#kamar">Kamar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#fasilitas">Fasilitas</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

**Note:** Sesuaikan nama hotelnya

### Membuat Footer
Template footer.php digunakan untuk menutup struktur HTML. Nantinya, file ini akan dipanggil paling akhir. Tulis script berikut kedalam file footer.php (tulis kawand, jangan copy paste).

```html
</body>
</html>
```

## Membuat File index.php
Langkah selanjutnya adalah membuat file index.php pada folder project. File index.php ini akan berisi tiga bagian; hero, kamar, fasilitas.

1. Bagian hero akan menampilkan background hotel dan beberapa konten lainnya.
2. Bagian kamar akan menampilkan daftar kamar dan fasilitasnya.
3. Bagian fasilitas akan menampilkan daftar fasilitas umum hotel.

### Membuat Folder img
Sebelum membuat bagian-bagian pada index.php, buat folder img pada folder project. Lalu download beberapa gambar terlebih dahulu seperti gambar hotel, kamar, dan fasilitas. Jika sudah mendownload, pindahkan kedalam folder img.

### Membuat File index.php
Sudah saatnya untuk membuat file index.php, tulis script berikut kedalam file navbar.php (tulis kawand, jangan copy paste).

```php
<?php
    require_once('template/header.php');
    require_once('template/navbar.php');
?>

<style>
.bg-hotel {
    background-image: url('img/hotel.jpg');
    background-size: cover;
    background-position: center;
}

.bg-putih {
    background: rgba(0,0,0,0.5);
    color: white;
}

</style>

<div class="container-fluid min-vh-100 bg-hotel justify-content-center d-flex align-items-center">
    <div>
        <div class='bg-hitam p-5 text-center'>
            <h1><b>SELAMAT DATANG DI LATHOTEL</b></h1>
            <h6 class='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, nisi? Impedit nihil aut dolores quae ipsum odio, eius nobis ratione doloremque cupiditate harum sequi reiciendis maxime atque suscipit excepturi. Aliquid.</h6>
            <button class='btn btn-success mt-5'><b>PESAN SEKARANG</b></button>
        </div>
    </div>
</div>

<div class="container-fluid min-vh-100 py-5" id='kamar'>
    <h2 class='text-center'><b>Pilih Kamar</b></h2>
    <hr>
    <div class="row">
        <div class="col-lg-4">
            <div class="card" style="width: 18rem;">
                <img src="img/kamar/elite.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"><b>Kamar Elite</b></h5>
                    <hr>
                    <ul>
                        <li>TV</li>
                        <li>Bathroom</li>
                        <li>AC</li>
                        <li>Double Bed</li>
                    </ul>
                    <a href="#" class="btn btn-primary">Pesan Kamar</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid min-vh-100 py-5" id='fasilitas'>
    <h2 class='text-center'><b>Fasilitas Hotel</b></h2>
    <hr>
    <div class="row">
        <div class="col-lg-4">
            <div class="card" style="width: 18rem;">
                <img src="img/fasilitas/free-wifi.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"><b>Free Wifi</b></h5>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
    require_once('template/footer.php');
?>
```

**Note:** Sesuaikan lokasi gambar sesuai punya masing-masing.

## Breakdown index.php
Sekarang mari kita bedah script index.php diatas, agar lebih mudah dalam memahaminya.

### require_once
```php
require_once('lokasi file.php');
```
Digunakan untuk memanggil file php lain.

### Membuat CSS
```html
<style>
.bg-hotel {
    background-image: url('img/hotel.jpg');
    background-size: cover;
    background-position: center;
}

.bg-hitam {
    background: rgba(0,0,0,0.5);
    color: white;
}

</style>
```

Digunakan untuk membuat class bg-hotel dan bg-putih. bg-hotel untuk background hotel, dan bg-hitam untuk background hitam transparan.

### Bagian Hero
```html
<div class="container-fluid min-vh-100 bg-hotel justify-content-center d-flex align-items-center">
    <div>
        <div class='bg-hitam p-5 text-center'>
            <h1><b>SELAMAT DATANG DI LATHOTEL</b></h1>
            <h6 class='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, nisi? Impedit nihil aut dolores quae ipsum odio, eius nobis ratione doloremque cupiditate harum sequi reiciendis maxime atque suscipit excepturi. Aliquid.</h6>
            <button class='btn btn-success mt-5'><b>PESAN SEKARANG</b></button>
        </div>
    </div>
</div>
```

### Bagian Kamar
```html
<div class="container-fluid min-vh-100 py-5" id='kamar'>
    <h2 class='text-center'><b>Pilih Kamar</b></h2>
    <hr>
    <div class="row">
        <div class="col-lg-4">
            <div class="card" style="width: 18rem;">
                <img src="img/kamar/elite.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"><b>Kamar Elite</b></h5>
                    <hr>
                    <ul>
                        <li>TV</li>
                        <li>Bathroom</li>
                        <li>AC</li>
                        <li>Double Bed</li>
                    </ul>
                    <a href="#" class="btn btn-primary">Pesan Kamar</a>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Bagian Fasilitas
```html
<div class="container-fluid min-vh-100 py-5" id='fasilitas'>
    <h2 class='text-center'><b>Fasilitas Hotel</b></h2>
    <hr>
    <div class="row">
        <div class="col-lg-4">
            <div class="card" style="width: 18rem;">
                <img src="img/fasilitas/free-wifi.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"><b>Free Wifi</b></h5>
                </div>
            </div>
        </div>
    </div>
</div>
```

## Kesimpulan
Jika mengikuti langkah-langkah dengan benar, maka hasilnya akan terlihat seperti pada gambar diatas tadi. Halaman yang dibuat ini masih bersifat statis (belum mengambil data dari database). Sampai ketemu di part selanjutnya.