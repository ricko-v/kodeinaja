<template>
<div>
    <Navbar></Navbar>
    <div class='container-fluid min-vh-100 bg-silver pt-5'>
        <div class='container mt-5'>
            <div class='row'>
                <div class='col-lg-2'></div>
                <div class='col-lg-8 mb-5 p-0'>
                    <div class='card shadow-sm p-3'>
                        <h1 class='font-weight-bold'>Arsip Post</h1>
                        <div class='mt-3'>
                            <b-card no-body>
                                <b-tabs card>
                                    <b-tab v-for='tahun in arrTahun' :key='tahun' :title="tahun">
                                        <b-card-text>
                                            <p v-for='post in data' v-if='formatTahun(post.createdAt) == tahun'>
                                                <NuxtLink :to="'/p/'+post.slug"><small><Tanggal :tanggal='post.createdAt'></Tanggal></small> | {{ post.title }}</NuxtLink>
                                            </p>
                                        </b-card-text>
                                    </b-tab>
                                </b-tabs>
                            </b-card>
                        </div>
                    </div>
                </div>
                <div class='col-lg-2'></div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
export default {
    async asyncData({
        $content,
        params
    }) {

        let arrTahun = [];
        let data = [];

        let tahun = await $content('posts')
            .only(['createdAt', 'slug', 'title'])
            .sortBy('createdAt', 'desc')
            .fetch()

        data = tahun;

        for (let i in tahun) {
            let thn = new Date(tahun[i].createdAt).toLocaleDateString('id', {
                year: 'numeric'
            });

            arrTahun.push(thn);
            arrTahun = Array.from(new Set(arrTahun));
        }

        return {
            data,
            arrTahun
        }
    },

    head() {
        return {
            title: `Arsip Postingan - Kodeinaja`,
            meta: [{
                    hid: 'description',
                    name: 'description',
                    content: `Arsip postingan dari tahun ke tahun.`
                },
                // Open Graph
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: `Arsip Postingan - Kodeinaja`
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: `Arsip postingan dari tahun ke tahun.`
                },
                // Twitter Card
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: `Arsip Postingan - Kodeinaja`
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: `Arsip postingan dari tahun ke tahun.`
                }
            ]
        }
    },

    methods: {
        gachaWarna() {
            let warna = ['primary', 'warning', 'danger', 'success'];
            let gacha = Math.floor(Math.random() * warna.length);

            return warna[gacha];
        },

        formatTahun(tgl) {
            let tahun = new Date(tgl).toLocaleDateString('id', {
                year: 'numeric'
            });

            return tahun;
        }
    }
}
</script>