<script lang="ts" setup>
import Option from './Option.vue'
</script>

<script lang="ts">
export default {
  name: "Navbar",
  components: {
    Option
  }
}
</script>

<template>
  <main>
    <div class="relative w-24 h-screen bg-white">
      <ul>
        <li> <Option name="prova" /> </li>
        <li> <Option name="ciao" /> </li>
        <li> <Option name="bella" /> </li>
      </ul>
    </div>
  </main>
</template>
