---
title: Belajar Markdown Syntax
description: Belajar penggunaan markdown untuk menulis postingan di kodeinaja
tag: ["md", "guide", "markdown"]
category: ["tutorial"]
username: ricko-v
---
 
Hallo teman-teman semua 👋

Pada postingan kali ini akan membahas tentang petunjuk penggunaan markdown untuk membuat postingan di website ini. Seperti bagaimana membuat tulisan tebal, heading, memasukan gambar, list, dan lainnya dengan menggunakan markdown.

## Heading

Heading di markdown dibuat dengan awalan tanda baca "#" lalu diikui dengan teks yang akan dibuat. Jumlah "#" yang ditulis akan menentukan level heading yang dibuat (maksimal berjumlah 6).

Contoh:

```md
# level 1

## level 2

### level 3

#### level 4

##### level 5

###### level 6
```

Hasil dari kode markdown diatas adalah:

# level 1

## level 2

### level 3

#### level 4

##### level 5

###### level 6

---

## Paragraf

Untuk membuat paragraf, teman-teman bisa langsung menuliskan teks dan jika ingin berganti baris atau membuat paragraf baru, teman-teman dapat menekan enter untuk berganti baris.

Contoh:

```
Hallo semuanya

Ini paragraf baru
```

Hasil kode diatas:

Hallo semuanya

Ini paragraf baru

## Bold

Untuk membuat tulisan menjadi tebal (bold), tulis \*\* diantara teks atau tekan button B pada teks editor buat postingan.

Contoh:

```md
**Hallo Semua**
```

Hasil kode diatas:

**Hallo Semuanya**

## Italic

Untuk membuat tulisan menjadi miring, tulis * diantara teks atau tekan button **I** pada teks editor buat postingan.

Contoh:

```md
*tulisan miring*
```

Hasil kode diatas:

*tulisan miring*

## List

Untuk membuat list, dapat menggunakan dua cara.

Cara pertama adalah membuat list ordered, yaitu menggunakan angka sebelum teks ditulis.

Contoh:

```md
1. Madu
2. Susu
3. Jahe
```

Hasil kode diatas:

1. Madu
2. Susu
3. Jahe

Cara kedua adalah membuat list unordered, yaitu menggunakan tanda \* sebelum teks ditulis.

Contoh:

```md
- Madu
- Susu
- Jahe
```

Hasil kode diatas:

- Madu
- Susu
- Jahe

## Link

Untuk membuat link, teman-teman dapat menggunakan syntax [teks](link).

Contoh:

```md
[link google](https://google.com)
```

Hasil kode diatas:

[link google](https://google.com)

## Blockquote

Untuk membuat blockquote dapat menggunakan tanda baca **>** sebelum teks.

Contoh:

```md
> hello world!
```

Hasil kode diatas:

> hello world!

## Table

Untuk membuat table, teman-teman dapat menggunakan syntax berikut

```md
| No  | Nama  |
| --- | ----- |
| 1   | Ricko |
| 2   | Ricky |
```

| No  | Nama  |
| --- | ----- |
| 1   | Ricko |
| 2   | Ricky |

## Image

Untuk memasukan gambar, ada dua cara.

Cara pertama adalah dengan mamasukan link gambar secara manual dari website lain seperti unsplash.

Contoh:

```md
![alt text](link gambar.png)
```

Cara yang kedua adalah dengan menggunakan fitur upload gambar yang tersedia pada teks editor kodeinaja. Teman-teman dapat menemukannya di samping kanan tombol kirim.

## Codeblock

Untuk membuat codeblock, teman-teman dapat menggunakan tanda **`** sebanyak tiga kali pada awal dan akhir.

Contoh:

````
```js
console.log("Hai");
```
````

Hasil kode diatas:

```js
console.log("Hai");
```

## Kesimpulan

Itu dia beberapa syntax markdown yang dapat teman-teman gunakan untuk menulis postingan di website ini.
