<script lang="ts" setup>
</script>

<script lang="ts">
export default {
    name: "Option",
    props: {
        name: String
    }
}
</script>

<template>
    <main>
        <p class="relative z-10 text-black"> {{ name }} </p>
    </main>
</template>