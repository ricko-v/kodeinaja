<template>
<div>
    <Navbar></Navbar>
    <div class='container-fluid min-vh-100 bg-silver pt-5'>
        <div class='container mt-5'>
            <div class='row'>
                <div class='col-lg-2'></div>
                <div class='col-lg-8 mb-5 p-0'>
                    <div class='card shadow-sm p-3'>
                        <h1 class='font-weight-bold'>Tag Post 🏷</h1>
                        <div class='mt-3'>
                            <NuxtLink v-for="(value, name, index) in tag" :key='name' :to="'/tag/'+name">
                                <b-button :variant="gachaWarna()" class='font-weight-bold mr-3 mb-3'>
                                    {{ name }}
                                    <b-badge variant="light">{{ value.length }}</b-badge>
                                </b-button>
                            </NuxtLink>
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
        const posts = await $content('posts').only(['tag', 'title']).fetch();

        let tag = {};

        for (let i in posts) {
            for (let l in posts[i].tag) {
                tag[posts[i].tag[l]] = [];
            }
        }

        let keys = Object.keys(tag);

        for (let a = 0; a < posts.length; a++) {
            for (let b = 0; b < posts[a].tag.length; b++) {
                tag[posts[a].tag[b]].push(posts[a].title)
            }
        }

        return {
            posts,
            tag
        }
    },

    head() {
        return {
            title: "Tag Post - Kodeinaja",
            meta: [{
                    hid: 'description',
                    name: 'description',
                    content: "Daftar tag postingan kodeinaja"
                },
                // Open Graph
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: "Tag Post - Kodeinaja"
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: "Daftar tag postingan kodeinaja"
                },
                // Twitter Card
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: "Tag Post - Kodeinaja"
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: "Daftar tag postingan kodeinaja"
                }
            ]
        }
    },

    methods: {
        gachaWarna() {
            let warna = ['primary', 'warning', 'danger', 'success'];
            let gacha = Math.floor(Math.random() * warna.length);

            return warna[gacha];
        }
    }
}
</script>
