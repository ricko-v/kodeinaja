<template>
    <span class='text-secondary'>{{ formatDate(tanggal) }}</span>
</template>
<script>
export default {
    props: {
        tanggal: {
            type: String
        }
    },
    
    methods: {
        formatDate(date) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
            return new Date(date).toLocaleDateString('id', options)
        }
    }
}
</script>