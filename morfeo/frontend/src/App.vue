<script lang="ts" setup>

import Navbar from './components/Navbar.vue'

</script>

<script lang="ts">
export default {
  name: "App",
  components: {
    Navbar
  },

  methods: {
    switchTheme: function() {
            if (localStorage.theme === 'light') {
                document.documentElement.classList.add('dark')
                localStorage.theme = 'dark'
              } else {
                document.documentElement.classList.remove('dark')
                localStorage.theme = 'light'
              }
          }
  }
}


</script>

<template>

  <button @click="switchTheme()" class="absolute left-1/2 top-1/2 p-10 bg-white"> botone </button>

  <Navbar />
</template>