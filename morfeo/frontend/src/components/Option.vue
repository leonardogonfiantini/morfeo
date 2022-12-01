<script lang="ts" setup>
</script>

<script lang="ts">
export default {
    name: "Option",
    props: {
        path: String,
    },
    methods: {
        imageSrc: function(name: String) {
            console.log(name)
            return new URL(`../assets/images/${name}.png`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <main>
        <img :src="imageSrc(`${path}`)" alt="" />
    </main>
</template>