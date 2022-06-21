<template>
<div>
    <Navbar></Navbar>
    <div class='container-fluid min-vh-100 bg-silver pt-5'>
        <div class='container mt-5'>
            <div class='row'>
                <div class='col-lg-2'></div>
                <div class='col-lg-8 p-0 mb-5'>
                    <div class='card shadow-sm p-3'>
                        <div class='d-flex justify-content-between'>
                            <h3 class='font-weight-bold'>Showcase Project</h3>
                        </div>
                        <hr>
                        <div class='mt-4'>
                            <div>
                                <label>Username Github:</label>
                                <input v-model='username' class='form-control shadow-none mb-3'>

                                <label>Repositori Project:</label>
                                <input v-model='repository' class='form-control shadow-none mb-3'>

                                <label>Nama Project:</label>
                                <input v-model='project' class='form-control shadow-none mb-3'>

                                <label>Deskripsi Project</label>
                                <textarea v-model='description' class='form-control shadow-none mb-3'></textarea>

                                <label>Thumbnail Project:</label>
                                <input v-model='thumbnail' class='form-control shadow-none'>
                                <p><small class='text-secondary'>Note: Link gambar</small></p>


                                <label>Tag Project:</label>
                                <input v-model='tag' class='form-control shadow-none'>
                                <p><small class='text-secondary'>Contoh: flutter, game</small></p>

                                <label>Tipe Project:</label>
                                <select v-model='tipe' class='form-control shadow-none mb-3'>
                                    <option>Website</option>
                                    <option>Aplikasi</option>
                                    <option>Website & Aplikasi</option>
                                </select>

                                <div v-if='tipe == "Website" || tipe == "Website & Aplikasi"'>
                                    <label>Demo Project:</label>
                                    <input class='form-control shadow-none mb-3'>
                                </div>

                                <div v-if='tipe == "Aplikasi" || tipe == "Website & Aplikasi"'>
                                    <label>Link Aplikasi:</label>
                                    <input class='form-control shadow-none mb-3'>
                                </div>
                            </div>

                            <div>
                                <button @click='kirim' class='btn btn-success shadow-none'>Kirim</button>
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
            tipe: '',
            username: '',
            repository: '',
            tag: '',
            project: '',
            description: '',
            url: '',
            download: '',
            thumbnail: ''
        }
    },

    methods: {
        kirim() {
            let d = new Date();
            let thn = d.getFullYear();
            let tgl = d.getDate();
            let bln = d.getMonth() + 1;
            d = thn + "-" + bln + "-" + tgl;
            let konten = `---
username: ${this.username}
project: ${this.project}
description: ${this.description}
local_thumbnail:
external_thumbnail: ${this.thumbnail}
tag: ${this.generateArr(this.tag)}
url: ${this.url}
download: ${this.download}
repository: ${this.repository}
createdAt: ${d}
---`;
            let url = `https://github.com/ricko-v/kodeinaja/new/master/content/showcase/new?filename=${this.project}.md&value=${encodeURIComponent(konten)}`;
            window.open(url, '_self');
        },

        generateArr(str) {
            let a = str.split(',');
            let b = '[';

            for (let i = 0; i < a.length; i++) {
                if (i == a.length - 1) {
                    b += `"${a[i].trim()}"]`;
                } else {
                    b += `"${a[i].trim()}",`;
                }
            }

            return b;
        },
    }
}
</script>
