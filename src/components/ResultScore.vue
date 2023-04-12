<template>
    <div
        class="flex-1 md:h-full md:py-12 flex flex-col items-center result-score bg-gradient-to-b from-[#7857ff] to-[#2e2be9] text-center p-8 sm:rounded-l-none sm:rounded-r-3xl rounded-b-3xl md:rounded-3xl text-slate-200">
        <p class="mb-6 text-xl">Your Result</p>
        <div class="flex flex-col items-center justify-center bg-gradient-to-b from-[#4e21ca] rounded-full w-32 h-32">
            <p class="font-bold text-4xl text-white">{{ totalScore }}</p>
            <p class="mt-1 text-gray-400">of 100</p>
        </div>
        <h2 class="my-6 text-3xl text-white">Great</h2>
        <p class="inline-block text-center px-11">You scored higher than 65% of the people who have taken these tests.</p>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import data from '../db/data.json'


const totalScore = computed(() => {
    return Math.round(data.reduce((sum, item) => sum + item.score, 0) /data.length);
})
</script>

<style scoped></style>