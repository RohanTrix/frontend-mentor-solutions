<template>
  <main class="grid place-content-center h-screen bg-[#f2ebe3]">
    <div class="rounded-lg overflow-hidden md:h-full bg-white mx-3 md:flex md:m-auto md:max-h-fit md:w-2/4">

      <img :src="imgPathResolver" alt="Preview" class="md:w-1/2 md:h-full">
      <section class="content-section px-4 py-4 md:w-1/2 md:flex md:flex-col md:gap-3 md:mx-3 ">
        <h3 class="text-xs font-medium font-montserrat tracking-[0.2rem] text-gray-700 opacity-70">PERFUME</h3>
        <h1 class="font-bold text-4xl font-fraunces py-2">Gabrielle Essence Eau De Parfum</h1>
        <p class="text-gray-500 text-sm font-medium pb-5 text-left">A floral, solar and voluptuous interpretation composed
          by Olivier Polge,
          Perfumer-Creator for the House of CHANEL.
        </p>
        <div class="price-section flex items-center gap-4 py-2">
          <h1 class="text-[#3c8067] text-4xl font-fraunces font-light">$149.99</h1>
          <h4 class="text-gray-600 opacity-70 font-semibold"><s>$169.99</s></h4>
        </div>
        <button
          class="p-4 w-full my-3 flex justify-center items-center gap-2 text-center bg-[#3c8067] text-white font-medium rounded-xl hover:bg-teal-950">
          <img src="./assets/images/icon-cart.svg" alt="icon">
          Add to Card
        </button>
      </section>
    </div>
  </main>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useWindowSize } from '@vueuse/core'
import mobileImg from './assets/images/image-product-mobile.jpg'
import desktopImg from './assets/images/image-product-desktop.jpg'

const { width } = useWindowSize()

const imgPathResolver = computed(() => {
  return width.value <= 375 ? mobileImg : desktopImg;
})

</script>

<style>
a {
  color: #1c232b;
}
</style>
