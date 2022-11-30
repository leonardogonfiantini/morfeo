<script lang="ts" setup>
import Option from './Option.vue'
</script>

<script lang="ts">
export default {
  name: "Navbar",
  components: {
    Option
  },
  methods: {
    dark: function() {
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
  <main>

    <button @click="dark()" class="absolute left-1/2 top-1/2 p-10 bg-blue-500"> botone </button>


    <div class="relative w-24 h-screen bg-white dark:bg-black">
      <ul>
        <li> <Option name="prova" /> </li>
        <li> <Option name="ciao" /> </li>
        <li> <Option name="bella" /> </li>
      </ul>
    </div>
  </main>
</template>
