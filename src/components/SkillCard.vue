<template>
    <div class="flex items-center justify-between px-2 py-4 rounded-md shadow-sm" :style="cardStyle">
        <h3 class="flex items-center gap-2" :style="titleStyle">
            <img v-if="iconPath!==null" :src="iconPath">
            {{ title }}
        </h3>
        <p class="text-slate-500 flex items-center gap-1"><span class="font-bold text-blue-950">{{ score }}</span>/ 100
        </p>
    </div>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue';


const props = defineProps(['iconPath', 'title', 'score', 'color'])
const { iconPath, title, score, color } = toRefs(props);
const imgSrc = ref(null)
import(/* @vite-ignore */iconPath.value).then(imageImports => {
    imgSrc.value = imageImports.default
})
const cardStyle = ref({
    backgroundColor: `${color.value}15`,
})
const titleStyle = ref({
    color: color.value,
    opacity: 1
})
</script>

<style scoped></style>