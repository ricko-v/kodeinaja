<template>
<div>
    <Navbar></Navbar>
    <div class='container-fluid min-vh-100 bg-silver pt-5'>
        <div class='container mt-5'>
            <div class='row'>
                <div class='col-lg-2'></div>
                <div class='col-lg-8 p-0 mb-5'>
                    <div class='card shadow-sm p-3'>
                        <h3 class='font-weight-bold'>Buat Postingan</h3>
                        <hr>
                        <div class='mt-4'>
                            <div>
                                <label>Judul:</label>
                                <input v-model='judul' class='form-control shadow-none mb-3'>

                                <label>Deskripsi:</label>
                                <input v-model='deskripsi' class='form-control shadow-none mb-3'>

                                <label>Tag:</label>
                                <input v-model='tag' class='form-control shadow-none'>
                                <p><small class='text-secondary'>contoh: github, open-source</small></p>

                                <label>Kategori:</label>
                                <input v-model='kategori' class='form-control shadow-none'>
                                <p><small class='text-secondary'>contoh: javascript, javascript-dasar</small></p>

                                <label>Username Github:</label>
                                <input v-model='username' class='form-control shadow-none mb-5'>
                            </div>
                            <textarea id='my-editor'></textarea>
                            <div class='d-flex'>
                                <button @click='kirim' class='btn btn-success shadow-none'>Kirim</button>
                                <div class='ml-3'>
                                    <input type='file' v-on:change='uploadGambar' class='form-control-file shadow-none d-none' ref='upgambar'>
                                    <button v-if='!prosesUpImg' class='btn btn-outline-primary shadow-none' @click='$refs.upgambar.click()'>upload gambar</button>
                                    <button v-if='prosesUpImg' class='btn btn-primary shadow-none'>Loading...</button>
                                    <p v-if='errorUpImg'><small class='text-danger'>{{ errorUpImg }}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            gambar: '',
            prosesUpImg: false,
            errorUpImg: false,
            judul: '',
            deskripsi: '',
            tag: '',
            kategori: '',
            username: ''
        }
    },

    head() {
        return {
            title: `Buat Postingan - Kodeinaja`,
            meta: [{
                    hid: 'description',
                    name: 'description',
                    content: `Ayo berkontribusi di kodeinaja.`
                },
                // Open Graph
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: `Buat Postingan - Kodeinaja`
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: `Ayo berkontribusi di kodeinaja.`
                },
                // Twitter Card
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: `Buat Postingan - Kodeinaja`
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: `Ayo berkontribusi di kodeinaja.`
                }
            ]
        }
    },

    mounted() {
        let easymde = new EasyMDE({
            element: document.querySelectorAll('#my-editor')[0],
            autosave: {
                enabled: true,
                uniqueId: "kodeinaja",
                delay: 500,
                submit_delay: 5000,
                timeFormat: {
                    locale: 'en-US',
                    format: {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                    },
                },
                text: "Autosaved: "
            },
            placeholder: "Ayo menulis..."
        });

        this.judul = localStorage.smde_judul ? localStorage.smde_judul : '';
        this.deskripsi = localStorage.smde_deskripsi ? localStorage.smde_deskripsi : '';
        this.tag = localStorage.smde_tag ? localStorage.smde_tag : '';
        this.kategori = localStorage.smde_kategori ? localStorage.smde_kategori : '';
        this.username = localStorage.smde_username ? localStorage.smde_username : '';

    },

    watch: {
        judul: function(val) {
            if(!localStorage.smde_judul) {
                localStorage.smde_judul = val;
            } else {
                localStorage.smde_judul = val;
            }
        },
        deskripsi: function(val) {
            if(!localStorage.smde_deskripsi) {
                localStorage.smde_deskripsi = val;
            } else {
                localStorage.smde_deskripsi = val;
            }
        },
        tag: function(val) {
            if(!localStorage.smde_tag) {
                localStorage.smde_tag = val;
            } else {
                localStorage.smde_tag = val;
            }
        },
        kategori: function(val) {
            if(!localStorage.smde_kategori) {
                localStorage.smde_kategori = val;
            } else {
                localStorage.smde_kategori = val;
            }
        },
        username: function(val) {
            if(!localStorage.smde_username) {
                localStorage.smde_username = val;
            } else {
                localStorage.smde_username = val;
            }
        }
    },

    methods: {
        async uploadGambar(event) {
            let file = event.target.files[0];
            this.prosesUpImg = true;
            this.errorUpImg = false;

            const toBase64 = file => new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });

            let tampung = await toBase64(file);
            let cari = tampung.search('base64,');

            this.gambar = tampung.slice(parseInt(cari) + 7, tampung.length);

            const upload = await fetch('https://limitless-sea-61725.herokuapp.com/https://freeimage.host/api/1/upload', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "key=6d207e02198a847aa98d0a2a901485a5&source=" + encodeURIComponent(this.gambar)
            })

            const response = await upload.json();

            let list = document.querySelectorAll('.EasyMDEContainer');
            for (const element of list) {
                element.remove()
            }

            let easymde = new EasyMDE({
                element: document.querySelectorAll('#my-editor')[0],
                autosave: {
                    enabled: true,
                    uniqueId: "kodeinaja",
                    delay: 500,
                    submit_delay: 5000,
                    timeFormat: {
                        locale: 'en-US',
                        format: {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                        },
                    },
                    text: "Autosaved: "
                },
                placeholder: "Ayo menulis..."
            });

            if (response['status_code'] == 200) {
                let isiLama = easymde.value();
                this.gambar = response['image']['url'];
                let isiBaru = easymde.value(isiLama + '\n\n![alt text](' + this.gambar + ')');
                this.prosesUpImg = false;
            } else {
                this.errorUpImg = response['error']['message'];
                this.prosesUpImg = false;
            }
        },

        kirim() {
            let list = document.querySelectorAll('.EasyMDEContainer');
            for (const element of list) {
                element.remove()
            }

            let easymde = new EasyMDE({
                element: document.querySelectorAll('#my-editor')[0],
                autosave: {
                    enabled: true,
                    uniqueId: "kodeinaja",
                    delay: 500,
                    submit_delay: 5000,
                    timeFormat: {
                        locale: 'en-US',
                        format: {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                        },
                    },
                    text: "Autosaved: "
                },
                placeholder: "Ayo menulis..."
            });

            const slug = this.generateSlug(this.judul);
            const konten = `
---
title: ${this.judul}
description: ${this.deskripsi}
tag: ${this.generateArr(this.tag)}
category: ${this.generateArr(this.kategori)}
username: ${this.username}
---

${easymde.value()}
`
            let url = `https://github.com/ricko-v/kodeinaja/new/master/content/posts/new?filename=${slug}.md&value=${konten}`;
            window.open(encodeURI(url), '_self');
            this.clearStorage();
        },

        generateArr(str) {
            let a = str.split(',');
            let b = '[';

            for(let i = 0; i < a.length; i++) {
                if(i == a.length-1) {
                    b += `"${a[i].trim()}"]`;
                } else {
                    b += `"${a[i].trim()}",`;
                }
            }

            return b;
        },

        generateSlug(judul) {
            return judul.toLowerCase().replace(/[' ']/g, '-');            
        },

        clearStorage() {
            localStorage.smde_kodeinaja = '';
            localStorage.smde_judul = '';
            localStorage.smde_deskripsi = '';
            localStorage.smde_tag = '';
            localStorage.smde_kategori = '';
            localStorage.smde_username = '';
        }
    }
}
</script>
