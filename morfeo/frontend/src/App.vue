<script lang="ts" setup>

import Navbar from './components/Navbar.vue'

</script>

<script lang="ts">
export default {
  name: "App",
  components: {
    Navbar
  },
}

</script>

<template>
  <html class="bg-background dark:bg-background-dark">
  <Navbar />
  </html>
</template>