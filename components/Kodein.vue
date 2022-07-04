<template>
    <div>
        <a :href='"/ngoding/"+src' target='_blank'>
            <button class='btn btn-success shadow-none'>Kodein Aja</button>
        </a>
    </div>
</template>
<script>
export default {
    props: {
        src: {
            type: String
        }
    }
}
</script>