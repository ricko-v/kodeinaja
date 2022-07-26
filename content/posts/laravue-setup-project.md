---
title: 'LaraVue #1: Setup Project'
description: 'Membuat projek dengan laravel 8 dan Vuejs 2'
tag: ["laravel","vuejs"]
category: ["laravue"]
username: ricko-v
createdAt: 2022-7-22
---

Halo teman-teman semua 👋 Bagaimana kabarnya?

Selamat datang di seri laravue (laravel dan vuejs). Pada postingan pertama ini akan membahas tentang cara membuat setup projectnya.

## Setup Project
Hal yang harus ada:
1. Composer
2. PHP V 7.4+

Untuk membuat projectnya, buka CMD dan tulis:

```md
composer create-project laravel/laravel belajar-laravue
```
**catatan:** belajar-laravue adalah nama project.

langkah selanjutnya masuk ke folder belajar-laravue dan tulis script berikut:

```md
npm install
```

langkah selanjutnya adalah menginstall vue-router dan vue-axios.

```md
npm install vue-router@3.4.2 vue-axios --save
```

langkah selanjutnya adalah menginstall laravel/ui melalui composer.

```md
composer require laravel/ui
```

langkah selanjutnya adalah menginstall vue ui.

```md
php artisan ui vue
```

langkah selanjutnya adalah menginstall vuejs melalui npm.

```md
npm install
```

## Setup Vuejs
Setelah mengikuti langkah-langkah diatas, sekarang kita akan mensetup vuejsnya.

Buka folder ```resources/js```>

Buat folder **layouts** dan file App.vue didalamnya. Lalu tulis script berikut:

```html
<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {}
</script>
```

Buat folder **views**, file Home.vue dan notFound.vue didalam folder js. Lalu tulis script berikut.

```html
<template>
    <div>
        <h1>Home</h1>
    </div>
</template>
<script>
    export default {}
</script>
```

```html
<template>
    <div>
        <h1>404 Not Found</h1>
    </div>
</template>
<script>
    export default {}
</script>
```

Buat file router.js didalam folder js. Lalu tulis script berikut

```js
import Home from "./views/Home.vue";
import notFound from "./views/notFound.vue";

export const routes = [
  { component: Home, path: '/', name: 'home'  },
	{ component: notFound, path: '*', name: '404'  },
]
```

Lalu edit file app.js menjadi seperti berikut

```js
require('./bootstrap');
import Vue from 'vue';
window.Vue = require('vue');
 
import App from './layouts/App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './router';
 
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
 
const router = new VueRouter({
    mode: 'history',
    routes: routes
});
 
const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
```

## web.php
Buka folder **routes** dan buka file web.php. Edit bagian router menjadi seperti berikut.

```php
Route::get('/{any}', function() {
  return view("welcome");
})->where('any','.*');
```

## welcome.blade.php
Buka folder **views** dan buka file welcome.blade.php dan edit bagian body menjadi:

```php
<div id="app"></div>
<script src="{{ mix('js/app.js') }}"></script>
```

## Running Project
Buka CMD dan ketik **php artisan serve**.

Buka CMD lagi dan ketik **npm run dev** atau bisa juga **npm run watch**. Apabila terjadi error, silahkan jalankan kembali npm nya.
