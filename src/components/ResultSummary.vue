<template>
    <section class="flex-1">

        <div class="result-summary flex flex-col gap-3 items-start px-8 py-6 md:py-0">
            <h2 class="text-lg font-bold text-blue-950 opacity-95">Summary</h2>
            <section class="skill-list flex flex-col w-full gap-3">
                <SkillCard v-for="(data, index) in scoreData" :key="index" :iconPath="data.icon" :title="data.category"
                    :score="data.score" :color="data.color" />
            </section>
            <button class="bg-[#303b5a] text-white text-xl text-center w-full px-8 my-3 py-2
                rounded-full hover:bg-indigo-600 transition-all duration-200 btn-active">Continue</button>
        </div>
    </section>
</template>

<script setup>
import scoreData from '../db/data.json'
import SkillCard from './SkillCard.vue';


</script>

<style scoped>
.btn-active:hover {
    @apply bg-gradient-to-b from-[#7857ff] to-[#2e2be9];
}
</style>