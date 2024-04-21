<template>
  <div class="max-w-4xl mx-auto p-8 shadow-lg rounded-lg bg-white">
    <h1 class="text-4xl font-bold mb-6 text-orange-500">
      Meals for {{ ingredient.strIngredient }}
    </h1>
    <Meals :meals="meals" class="mt-6" />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from '../components/Meals.vue';

const route = useRoute();
const ingredient = computed(() => store.state.ingredient);
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient);
});
</script>
