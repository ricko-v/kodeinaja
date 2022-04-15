<template>
<div>
    <Navbar></Navbar>
    <div class='container-fluid min-vh-100 bg-silver pt-5'>
        <div class='container mt-5'>
            <div class='row'>
                <div class='col-lg-2'></div>
                <div class='col-lg-8 mb-5 p-0'>
                    <div class='card shadow-sm p-3'>
                        <h1 class='font-weight-bold'>{{ posts[0].title }}</h1>
                        <small class='text-secondary'>
                            <Tanggal :tanggal="posts[0].createdAt"></Tanggal> | <NuxtLink :to="'/user/'+posts[0].username" class='text-secondary'>{{ posts[0].username }}</NuxtLink>
                        </small>
                        <div class='d-flex overflow-auto mt-1'>
                            <NuxtLink v-for='tag in posts[0].tag' :key='tag' :to="'/tag/'+tag" :class="'bg-'+gachaWarna()" class='px-2 mt-2 mr-2 pb-1 text-white rounded'>
                                <small class='font-weight-bold'>{{ tag }}</small>
                            </NuxtLink>
                        </div>
                        <div class="accordion mt-3" role="tablist">
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <div v-b-toggle.accordion-1><b>[+] Daftar Isi</b></div>
                                </b-card-header>
                                <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                                    <b-card-body class='p-2 pt-4'>
                                        <ul>
                                            <li v-for="link of posts[0].toc" :key="posts.id" :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }">
                                                <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                                            </li>
                                        </ul>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                        </div>
                        <hr class='border border-dark'>
                        <nuxt-content :document="posts[0]" />
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
        const posts = await $content('posts').where({
            slug: params.slug
        }).fetch()

        return {
            posts
        }
    },

    methods: {
        gachaWarna() {
            let warna = ['dark', 'warning', 'danger', 'success'];
            let gacha = Math.floor(Math.random() * warna.length);

            return warna[gacha];
        }
    }
}
</script>
