<template>
  <main class="grid place-content-center h-screen px-5 bg-dark-blue">
    <div
      class="realtive -translate-y-5 bg-[#3a4455] flex flex-col items-center px-7 py-5 rounded-lg mx-auto max-w-md drop-shadow-2xl">
      <h1 class="text-neon-green tracking-[0.1rem] text-xs font-semibold">ADVICE #{{ slip.id }}</h1>
      <p class="text-quote font-manrope text-light-cyan text-center my-4">&ldquo;{{ slip.advice }}&rdquo;</p>
      <picture class="mt-2 mb-8">
        <source media="(min-width: 390px)" srcset="./assets/images/pattern-divider-desktop.svg">
        <source srcset="./assets/images/pattern-divider-mobile.svg">
        <img src="./assets/images/pattern-divider-mobile.svg" alt="Pattern Divider">
      </picture>
      <button @click="clickHandler" class="absolute translate-y-5 -bottom-2">
        <div
          class="h-14 w-14 bg-[#75ffaa] brightness-105 rounded-full grid place-content-center btn-shadow transition-all duration-300">
          <img src="./assets/images/icon-dice.svg" alt="Dice Icon">
        </div>
      </button>
    </div>
  </main>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue';
const slip = ref({
  id: 0,
  advice: ""
})

const clickHandler = async () => {
  const { data } = await axios.get('https://api.adviceslip.com/advice')
  slip.value = data.slip;
}
clickHandler()


</script>

<style scoped>
.btn-shadow:hover {
  box-shadow: 0 0 15px 1px #75ffaa;
}
</style>