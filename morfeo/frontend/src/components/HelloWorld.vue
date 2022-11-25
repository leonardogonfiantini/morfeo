<script lang="ts" setup>
  import {reactive} from 'vue'
  import {Greet} from '../../wailsjs/go/main/App'
</script>

<template>
  <main>
    <button class="absolute top-2/4 left-2/4 translate p-4 border-4 border-white"> Bottone </button>
  </main>
</template>


<style>

.translate {
  transform: translate(-50%, -50%);
}


</style>
