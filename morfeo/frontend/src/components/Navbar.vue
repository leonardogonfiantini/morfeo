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
    switchTheme: function() {

        var button = document.getElementById("btn-switch")

            if (localStorage.theme === 'light') {
                document.documentElement.classList.add('dark')
                localStorage.theme = 'dark'

                button?.classList.remove("anim-dark")
                button?.classList.add("anim-light")

              } else {
                document.documentElement.classList.remove('dark')
                localStorage.theme = 'light'

                button?.classList.remove("anim-light")
                button?.classList.add("anim-dark")
              }
          }
  }
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

      <div class="absolute bottom-5">
        <button id="btn-switch" @click="switchTheme()" class="relative left-3 w-20 h-9 rounded-full z-10
                                                            bg-secondary text-font dark:bg-secondary-dark"> 
          switchh
        </button>

        <div class="absolute left-2 top-1 w-20 h-9 rounded-full bg-black"> </div>

      </div>

    </div>
  </main>
</template>

<style scoped>
  .anim-light {
    animation: switch-light ease-in-out 0.25s forwards;
    border: 1px solid black;
  }

  .anim-dark {
    animation: switch-dark ease-in-out 0.25s forwards;
  }

  @keyframes switch-light {
    0% {}
    100% {left:8px; top:4px;}
  }

  @keyframes switch-dark {
    0% {}
    100% {left:8; top:0px}
  }


</style>