<script lang="ts" setup>

import Navbar from './components/Navbar.vue'

</script>

<script lang="ts">
export default {
  name: "App",
  components: {
    Navbar
  }
}

localStorage.theme = 'light'

</script>

<template>
  <Navbar />
</template>