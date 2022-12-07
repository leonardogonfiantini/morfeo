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
            return new URL(`../assets/images/${name}.png`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <main>
        <img :src="imageSrc(`${path}`)" class="relative w-3/4 m-auto p-2" alt="" />
    </main>
</template>