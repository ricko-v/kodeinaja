---
title: 'CI-4 #3: Routing Query dan Parameter'
description: 'Belajar routing query dan parameter url pada codeigniter 4'
tag: ["ci-4","codeigniter"]
category: ["codeigniter-4"]
username: ricko-v
createdAt: 2022-7-17
---

Halo teman-teman semua 👋 Bagaimana kabarnya?

Selamat datang kembali di tutorial seri Codeigniter versi 4. Setelah teman-teman sudah berhasil membuat sebuah rute url baru di projek codeigniter 4, selanjutnya adalah belajar tentang query dan parameter dari sebuah rute url.

## Query URL
Apakah teman-teman pernah melihat atau memperhatikan query pada suatu url? misalnya pada salah website e-commerce.
Contoh:
```md
https://shopee.co.id/flash_sale?categoryId=0&fromItem=4997858905&promotionId=2051876624
```

Query dari url diatas adalah
```md
categoryId=0&fromItem=4997858905&promotionId=2051876624
```

Di codeigniter, kita bisa mengambil value dari query url yang ada. Mari kita coba membuat kasus yang sederhana.

## Membuat Query
[1] Buat router url baru ke **'/cari'**.
```php
$routes->get('/cari', 'Home::cari');
```

[2] Buat method cari di controller Home.
```php
public function cari() {
  $q = $this->request->getVar('q');
	echo $q;
}
```

[3] Jalankan codeigniternya dan buka ```http://localhost:8080/cari?q=halo```. Jika teman-teman melihat tulisan yang sama dengan query **q**, maka teman-teman sudah berhasil mengambil value pada query url di codeigniter 4.

## Parameter URL
Selanjutnya adalah parameter url. Berbeda dengan query, parameter url tidak menggunakan tanda **?** dan **=**. Tetapi terlihat seperti path url, misal pada website github.com.
```md
https://github.com/ricko-v
```

Parameter diatas berfungsi sebagai filtering username dari akun github. Artinya, username yang ditulis dan sudah terdaftar di github akan ditampilkan profilenya. Jika tidak terdaftar, maka akan ditampilkan page not found.

Pada codeigniter 4 terdapat 7 *placeholders* yang bisa digunakan untuk membuat parameter.

| Placeholders  | Deskripsi |
| ------------------- | ------------ |
| (:any) | Akan mencocokan dengan semua karakter apa pun dari path sampai akhir (mungkin bisa lebih dari satu segment) |
| (:segment) | Akan mencocokan dengan semua karakter apa pun, tetapi hanya untuk satu segment saja |
| (:num) | Akan mencocokan integer atau angka apa pun |
| (:alpha) | Akan mencocokan dengan string karakter alfabet apa pun. |
| (:alphanum) | Akan mencocokan dengan string karakter alfabet atau bilangan bulat apa pun, atau kombinasi keduanya. |
| (:hash) | Sama dengan fungsi (:segment), tetapi dapat digunakan untuk dengan mudah melihat rute mana yang menggunakan id hash. |

Sekarang mari kita coba buat parameter pertama kita, yaitu parameter **users**.

## Membuat Parameter
[1] Buat router url baru ke **'/users'**.
```php
$routes->get('/users/(:segment)', 'Home::users/$1');
```
**catatan**: Disini memakai placeholders segment, karena hanya membutuhkan satu segment saja.**

[2] Buat method users di controller Home.
```php
public function users($username) {  
  echo "Username kamu adalah " . $username;
}
```

[3] Jalankan codeigniternya dan buka ```http://localhost:8080/users/ricko-v``` dan jika keluar tulisan "Username kamu adalah ricko-v", berarti teman-teman sudah berhasil membuat parameter urlnya.

## Akhir
Silahkan teman-teman coba ber eksperimen dengan placeholders yang lain dan pahami perbedaan masing-masing.
