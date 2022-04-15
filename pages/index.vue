<template>
<div>
    <Navbar></Navbar>
    <div class='container-fluid min-vh-100 bg-silver pt-5'>
        <div class='container mt-5'>
            <div class='row'>
                <div class='col-lg-2'></div>
                <div class='col-lg-8 p-0 mb-5'>
                    <div class='card shadow-sm p-3'>
                        <h3 class=''>Selamat datang di <b>KodeInaja</b> 👋</h3>
                        <p>
                            Ini adalah blog sederhana yang berisi tentang tutorial koding atau pemrograman.
                            <br>
                            Teman-teman juga dapat berkontribusi dalam blog ini dengan melakukan
                            <br>
                            pull request ke <a href='' target='_blank'>github.</a>
                        </p>
                        <p class='m-0'><i>~ Learn, Write, Share ~</i></p>
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
        const posts = await $content('posts').limit(7).only(['title', 'slug', 'createdAt', 'username', 'description', 'tag']).sortBy('createdAt', 'desc').fetch()
        const n = 1;
        return {
            posts,
            n
        }
    },

    methods: {
        gachaWarna() {
            let warna = ['dark', 'warning', 'danger', 'success'];
            let gacha = Math.floor(Math.random() * warna.length);

            return warna[gacha];
        },

        async infiniteScroll($state) {
            let dataBaru = await this.$content('posts').skip(7 * this.n).limit(7).only(['title', 'slug', 'createdAt', 'username', 'description', 'tag']).sortBy('createdAt', 'desc').fetch();
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
