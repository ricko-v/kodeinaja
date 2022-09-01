---
title: Part 1. Pengenalan CORS
description: Menjelasakan secara singkat apa itu CORS
tag: ["http", "cors"]
category: ["tutorial"]
username: mancode77
createdAt: 2022-9-1
---

Pada postingan kali ini akan membahas **CORS** part 1. Materi ini dari situs web [livebook.manning.com](https://livebook.manning.com/book/cors-in-action/part-1/).

Sebelum belajar **CORS** disarankan untuk mempelajari materi tantang **http**. Anda bisa pergi ke situs web [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP) atau ke chanel youtube [Programmer Zaman Now](https://youtu.be/92Rjzrq4oIg).

## Pengenalan CORS

Cross-Origin Resource Sharing (CORS) memungkinkan klien web untuk membuat permintaan *(requests)* HTTP ke server yang di-host pada asal *(origins)* yang berbeda. CORS adalah teknologi web yang unik karena memiliki komponen sisi server *(server-side)* dan sisi klien *(client-side)*. Komponen sisi server *(server-side)* mengkonfigurasi jenis permintaan lintas asal *(requests cross-origin)* mana yang diizinkan, sementara komponen sisi klien *(client-side)* mengontrol bagaimana permintaan lintas asal *(requests cross-origin)* dibuat.

Part 1 berfokus pada komponen sisi klien *(client-side)* dari CORS. Bab 1 adalah pengantar untuk CORS, cara kerjanya, dan manfaatnya. Ini juga memberi contoh seperti apa CORS dengan memperkenalkan *aplikasi sampel* yang membuat permintaan *(requests)* CORS ke Flickr API.

Part 2 menyelam lebih dalam ke *aplikasi sampel* ini untuk menunjukkan bagaimana komponen sisi klien *(client-side)* dari CORS bekerja. Ini dimulai dengan melihat bagaimana objek XMLHttpRequest browser (yang sudah dikenal oleh pengembang mana pun yang membuat permintaan asal atau requests origin yang sama) dapat digunakan untuk membuat permintaan lintas asal *(requests cross-origin)*. Kemudian, beralih ke Internet Explorer 8 dan Internet Explorer 9, yang mendukung subset CORS melalui objek XDomainRequest. Selanjutnya, kita akan mencoba melakukan permintaan *(requests)* elemen lain, seperti elemen kanvas. Bab ini diakhiri dengan melihat bagaimana permintaan *(requests)* CORS dapat dibuat dari jQuery.