<template>
<div>
    <Navbar></Navbar>
    <div class='container-fluid min-vh-100 bg-silver pt-5'>
        <div class='container mt-5'>
            <div class='row'>
                <div class='col-lg-2'></div>
                <div v-if='!kosong' class='col-lg-8 p-0 mb-5'>
                    <div class='card shadow-sm p-3'>
                        <h3><span class='font-weight-bold'>Kategori Post</span> - {{ $route.params.kategori }}</h3>
                    </div>

                    <div class='mt-5 pt-5'>
                        <hr class='border border-secondary'>
                    </div>

                    <div v-for='p in posts' :key='p.title' v-if="p.category.find(x => x == $route.params.kategori)" class='card shadow-sm p-3 mt-5'>
                        <NuxtLink :to="'/p/'+p.slug">
                            <h4 class='font-weight-bold'>{{ p.title }}</h4>
                        </NuxtLink>

                        <div class='d-flex overflow-auto mt-1'>
                            <NuxtLink v-for='category in p.category' :key='category' :to="'/kategori/'+category" :class='"bg-"+gachaWarna()' class='px-2 mr-2 pb-1 text-white rounded'>
                                <small class='font-weight-bold'>{{ category }}</small>
                            </NuxtLink>
                        </div>

                        <span class='text-secondary mt-2'>{{ p.description }}</span>
                        <div class='m-0 pt-2'>
                            <small>
                                <Tanggal :tanggal="p.createdAt"></Tanggal>
                                |
                                <NuxtLink class='text-secondary' :to="'/user/'+p.username">{{ p.username }}</NuxtLink>
                            </small>
                        </div>
                    </div>

                    <infinite-loading spinner='waveDots' v-if='posts.length > 0' class='mt-5 pt-3' @infinite="infiniteScroll">
                        <div slot="no-more"><small class='text-secondary'>sudah sampai dasar 👏👏</small></div>
                        <div slot="no-results"></small></div>
                    </infinite-loading>
                </div>
                <div v-if='kosong' class='col-lg-8 p-0 mb-5'>
                    <div class='card shadow-sm p-3'>
                        <h3 class=''>Kategori tidak ada</h3>
                        <NuxtLink to='/kategori'>Kembali</NuxtLink>
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
        let posts = await $content('posts').limit(7).only(['title', 'slug', 'createdAt', 'username', 'description', 'category', 'category']).sortBy('createdAt', 'desc').fetch();

        let kosong;
        let n = 1;

        let pilter = posts.filter(x => {
            let par = params.kategori;
            let cek = x.category.filter(c => c == par).length ? kosong = false : kosong = true;
        });

        return {
            posts,
            kosong,
            n
        }
    },

    head() {
        return {
            title: `Kategori ${this.$route.params.kategori} - Kodeinaja`,
            meta: [{
                    hid: 'description',
                    name: 'description',
                    content: `Daftar postingan kategori ${this.$route.params.kategori}`
                },
                // Open Graph
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: `Kategori ${this.$route.params.kategori} - Kodeinaja`
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: `Daftar postingan kategori ${this.$route.params.kategori}`
                },
                // Twitter Card
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: `Kategori ${this.$route.params.kategori} - Kodeinaja`
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: `Daftar postingan kategori ${this.$route.params.kategori}`
                }
            ]
        }
    },

    methods: {
        gachaWarna() {
            let warna = ['dark', 'warning', 'danger', 'success'];
            let gacha = Math.floor(Math.random() * warna.length);

            return warna[gacha];
        },

        async infiniteScroll($state) {
            let dataBaru = await this.$content('posts').skip(7 * this.n).limit(7).only(['title', 'slug', 'createdAt', 'username', 'category', 'description', 'category']).sortBy('createdAt', 'desc').fetch();
            this.n++;

            if (dataBaru.length == 0) {
                $state.complete();
            } else {
                this.posts = [...this.posts, ...dataBaru];
                $state.loaded();
            }

        }
    }
}
</script>
