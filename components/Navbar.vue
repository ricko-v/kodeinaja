<template>
<b-navbar toggleable="lg" type="light" variant="white" class="shadow-sm">
    <div class="container">
        <b-navbar-brand to="/" class="font-weight-bold">KodeInaja</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class='ml-auto'>
                <b-nav-item to="/arsip">
                    <span :class="[path == '/arsip' ? 'text-dark' : '']">Arsip</span>
                </b-nav-item>
                <b-nav-item to="/kategori">
                    <span :class="[path == '/kategori' ? 'text-dark' : '']">Kategori</span>
                </b-nav-item>
                <b-nav-item to="/tag">
                    <span :class="[path == '/tag' ? 'text-dark' : '']">Tag</span>
                </b-nav-item>
                <b-nav-item to="/cari">
                    <span :class="[path == '/cari' ? 'text-dark' : '']">Cari</span>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </div>
</b-navbar>
</template>

<script>
export default {
    data() {
        return {
            path: ''
        }
    },

    mounted() {
        this.path = this.$route.fullPath;
    }
};
</script>
