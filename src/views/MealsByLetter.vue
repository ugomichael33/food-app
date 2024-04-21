<template>
  <div class="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg">
    <h1 class="text-4xl font-bold mb-6 text-orange-500">Meals by Letter</h1>
    <div class="flex flex-wrap justify-center gap-4 px-8 mb-6">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter"
        class="text-center text-xl font-semibold bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-200 hover:text-white transition-all duration-300"
      >
        {{ letter }}
      </router-link>
    </div>
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, (newRoute) => {
  if (newRoute.params.letter) {
    store.dispatch("searchMealsByLetter", newRoute.params.letter);
  }
}, { immediate: true });

onMounted(() => {
  if (route.params.letter) {
    store.dispatch("searchMealsByLetter", route.params.letter);
  }
});
</script>
