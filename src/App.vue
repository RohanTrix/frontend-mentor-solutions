<script setup>
import scoreData from './db/data.json'
import SkillCard from './components/SkillCard.vue';
import ResultScore from './components/ResultScore.vue';
import ResultSummary from './components/ResultSummary.vue';
</script>

<template>
  <div class="h-screen md:relative">


    <main class="md:relative md:top-1/4 md:flex md:items-center md:justify-center md:max-w-2xl mx-auto md:rounded-3xl md:border md:shadow-xl">
      <ResultScore />
      <ResultSummary />
    </main>
  </div>
</template>

<style scoped></style>
