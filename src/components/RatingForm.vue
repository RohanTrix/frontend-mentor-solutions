<template>
    <form @submit.prevent="$emit('submitForm', choice)" class="flex flex-col items-center w-full">


        <div class="flex items-center justify-between w-full px-1 my-3 flex-wrap gap-y-2">
            <div v-for="n in 5" :key="n">
                <input type="radio" v-model="choice" name="rating" :value="n" :id="`score${n}`" class="hidden" />
                <label :for="`score${n}`">
                    <div :class="choice == n ? 'text-white bg-[#fb7413] hover:bg-none active:bg-none' : 'hover:bg-[#959eac]'"
                        class="rounded-full h-10 w-10 bg-[#959eac40] grid place-content-center hover:text-white transition-all duration-300">
                        <p class="font-bold">{{ n }}</p>
                    </div>
                </label>

            </div>


        </div>
        <button type="submit" :disabled="choice === null"
            class="p-2 w-full my-3 flex justify-center items-center gap-2 text-center bg-[#fb7413] text-white font-medium rounded-full uppercase tracking-[0.1rem]
                      hover:bg-white hover:text-[#fb7413] transition-all duration-300 disabled:bg-[#959eac] disabled:hover:text-white">
            Submit
        </button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import CircleContainer from './CircleContainer.vue';

const choice = ref(null)

const submitForm = () => { }
</script>

<style scoped></style>