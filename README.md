<div align="center">
 
# KodeInaja
![Author](https://img.shields.io/badge/Author-ricko%20veriyanto-blue.svg?style=for-the-badge&logo=github)
<p>Blog web app yang membahas tentang tutorial koding atau pemrograman.</p>
</div>

# install setup
```sh
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

# add post
Cara pertama:
Teman-teman bisa menggunakan form di [https://kodeinaja.my.id/buat-post](https://kodeinaja.my.id/buat-post)

Cara kedua:
Buat file judul-postingan.md baru di folder ```content/post```
dan isikan dengan script dibawah.

```
---
title: Judul Postingan
description: Deskripsi Postingan
category: ['nodejs','tes']
tag: ['nodejs', 'cli']
username: username github
---

Isi Postingan...
```

# add showcase project
Cara pertama:
Teman-teman bisa menggunakan form di [https://kodeinaja.my.id/showcase/add](https://kodeinaja.my.id/showcase/add)

Cara kedua:
Buat file nama-project.md baru di folder ```content/showcase```
dan isikan dengan script dibawah.

```
---
username: ricko-v
project: Katanime
description: Kumpulan kata-kata dari karakter anime.
local_thumbnail: katanime.png
external_thumbnail:
tag: ['nuxt', 'vue', 'pwa', 'vercel', 'anime']
url: https://katanime.vercel.app
download: https://github.com/ricko-v/katanime/releases/download/QuotesAnime/Katanime.apk
repository: katanime
createdAt: 2022-6-21
---
```

Note: kosongin aja kalau semisal tidak ada datanya.
