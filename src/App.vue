<template>
  <main class="h-screen grid place-content-center bg-[#121417]">
    <div class="flex flex-col mx-7 p-4 text-slate-400 bg-[#18212E] rounded-3xl max-w-[430px] radial-gradient">
      <div v-if="!isFormSubmitted" class="mx-3">

        <div class="flex flex-col mt-4">

          <div class="rounded-full h-10 w-10 bg-[#959eac40] grid place-content-center mb-5">
            <img src="./assets/images/icon-star.svg" alt="Star" class="aspect-square h-4">
          </div>

          <h1 class="text-white text-2xl font-overpass font-medium">How did we do?</h1>
          <p class="text-[#959eac] font-overpass py-3">Please let us know how we did with your support request. All
            feedback is
            appreciated to help us improve our offering!</p>

        </div>

        <RatingForm @submitForm="submitFormHandler" />


      </div>
      <div v-else class="mx-3">
        <div class="flex flex-col items-center">
          <img src="./assets/images/illustration-thank-you.svg" alt="Thank You" class="my-5">
          <p class="text-[#fb7413] text-center rounded-full bg-[#959eac40] px-5 py-1 my-2">You selected {{ ratingScore }}
            out of 5</p>
          <h1 class="text-white text-2xl font-overpass font-medium mt-4">Thank You!</h1>
          <p class="text-center px-2 mt-1 mb-3">We appreciate you taking the time to give a rating. If you ever need more
            support,
            don't hesitate to get in touch!</p>

        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import CircleContainer from './components/CircleContainer.vue';
import RatingForm from './components/RatingForm.vue';

const isFormSubmitted = ref(false)
const ratingScore = ref(0)
const submitFormHandler = (choice) => {
  isFormSubmitted.value = true;
  ratingScore.value = choice
}
</script>

<style scoped>
.radial-gradient {
  background: radial-gradient(at top,
      #212832 10%, #18212E);
}
</style>