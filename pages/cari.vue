<template>
<div>
    <Navbar></Navbar>
    <div class='container-fluid bg-silver pt-5 min-vh-100'>
        <div class='container'>
            <div class='row'>
                <div class='col-lg-2'></div>
                <div class='col-lg-8 mb-5 p-0'>
                    <div class='card p-3 shadow-sm'>
                        <h1 class='font-weight-bold'>Cari Postingan</h1>
                        <div class='d-flex mt-3 mb-3'>
                            <input v-model='q' class='form-control shadow-none'>
                        </div>
                    </div>

                    <div v-for='p in posts' v-if='p.title.toLowerCase().search(q.toLowerCase()) !== -1' :key='p.title' class='card shadow-sm p-3 mt-5'>
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
                <div class='col-lg-2'></div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
export default {
    data() {
        return {
            q: '',
            posts: [],
            n: 1
        }
    },

    methods: {
        cari() {
            this.$router.push({
                path: '/cari?q=' + this.q
            })
        },

        gachaWarna() {
            let warna = ['dark', 'warning', 'danger', 'success'];
            let gacha = Math.floor(Math.random() * warna.length);

            return warna[gacha];
        },

        async infiniteScroll($state) {
            let dataBaru = await this.$content('posts').skip(7 * this.n).limit(7).only(['title', 'slug', 'createdAt', 'username', 'category', 'description', 'tag']).sortBy('createdAt', 'desc').fetch();
            this.n++;

            if (dataBaru.length == 0) {
                $state.complete();
            } else {
                this.posts = [...this.posts, ...dataBaru];
                $state.loaded();
            }

        }
    },

    watch: {
        q: async function (val) {
            let posts = await this.$content('posts').limit(7).only(['title', 'slug', 'createdAt', 'username', 'description', 'tag']).sortBy('createdAt', 'desc').fetch();
            this.posts = posts;

            if(val == "") {
                this.posts = [];
            }
        }
    }
}
</script>
