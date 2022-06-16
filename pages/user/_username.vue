<template>
<div>
    <Navbar></Navbar>
    <div class='container-fluid min-vh-100 bg-silver pt-5'>
        <div class='container mt-5'>
            <div class='row'>
                <div class='col-lg-2'></div>
                <div v-if='!kosong' class='col-lg-8 p-0 mb-5'>
                    <div class='card d-none d-md-block shadow-sm p-3'>
                        <div class='d-flex'>
                            <div>
                                <img :src="github.avatar_url" class='img-avatar rounded-circle m-3 mr-4'>
                            </div>
                            <div>
                                <h3 class='font-weight-bold mt-3'>{{ github.name }} <span class='text-secondary'>({{ $route.params.username }})</span></h3>
                                <small class='text-secondary'>{{ github.bio }}</small>
                                <p class='mt-3'>
                                    <a :href="'https://github.com/'+$route.params.username">
                                        <button class='btn btn-dark shadow-none pb-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                            </svg>
                                        </button>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class='card d-flex d-md-none shadow-sm p-3'>
                        <div class=' text-center'>
                            <img :src="github.avatar_url" class='img-avatar rounded-circle my-3'>
                            <h3>{{ github.name }} <span class='text-secondary'>({{ $route.params.username }})</span></h3>
                            <small class='text-secondary'>{{ github.bio }}</small>
                            <p class='mt-3'>
                                <a :href="'https://github.com/'+$route.params.username">
                                    <button class='btn btn-dark shadow-none pb-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </button>
                                </a>
                            </p>
                        </div>
                    </div>

                    <div class='mt-5 pt-5'>
                        <hr class='border border-secondary'>
                    </div>

                    <div v-for='p in posts' :key='p.title' class='card shadow-sm p-3 mt-5'>
                        <NuxtLink :to="'/p/'+p.slug">
                            <h4 class='font-weight-bold'>{{ p.title }}</h4>
                        </NuxtLink>

                        <div class='d-flex overflow-auto mt-1'>
                            <NuxtLink v-for='tag in p.tag' :key='tag' :to="'/tag/'+tag" :class='"bg-"+gachaWarna()' class='px-2 mr-2 pb-1 text-white rounded'>
                                <small class='font-weight-bold'>{{ tag }}</small>
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
                    <div class='card d-none d-md-block shadow-sm p-3'>
                        <h3>User tidak ditemukan!</h3>
                        <NuxtLink to='/'>Kembali</NuxtLink>
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
        params,
        error
    }) {
        let github, kosong;
        let n = 1;

        const posts = await $content('posts').limit(7).only(['title', 'slug', 'createdAt', 'username', 'description', 'tag']).where({
            username: params.username
        }).sortBy('createdAt', 'desc').fetch()

        if (posts.length == 0) {
            kosong = true;
        } else {
            github = await fetch("https://api.github.com/users/" + params.username)
                .then(res => res.json())
                .then(data => {
                    return data
                })
        }

        return {
            posts,
            github,
            kosong,
            n
        }
    },

    head() {
        return {
            title: `${this.kosong ? "Not Found" : this.$route.params.username} - Kodeinaja`,
            meta: [{
                    hid: 'description',
                    name: 'description',
                    content: `Daftar postingan dari ${this.$route.params.username}`
                },
                // Open Graph
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: `${this.$route.params.username} - Kodeinaja`
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: `Daftar postingan dari ${this.$route.params.username}`
                },
                // Twitter Card
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: `${this.$route.params.username} - Kodeinaja`
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: `Daftar postingan dari ${this.$route.params.username}`
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
            let username = this.$route.params.username;
            let dataBaru = await this.$content('posts').skip(7 * this.n).limit(7).only(['title', 'slug', 'createdAt', 'username', 'description', 'tag']).where({
                username: username
            }).sortBy('createdAt', 'desc').fetch()

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
