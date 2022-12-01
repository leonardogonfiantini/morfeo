<script lang="ts" setup>
import Option from './Option.vue'

</script>

<script lang="ts">
export default {
  name: "Navbar",
  components: {
    Option
  },
}
</script>

<template>
  <main>
    <div class="relative w-24 h-screen rounded-r-2xl
              text-font dark:text-font-dark bg-menu dark:bg-menu-dark">
      <ul>
        <li> <Option path="planner" /> </li>
        <li> <Option path="goal" /> </li>
        <li> <Option path="settings" /> </li>

      </ul>
    </div>
  </main>
</template>
