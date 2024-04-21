<template>
  <div v-if="meals.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-4">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-else class="flex justify-center items-center text-gray-600 p-8 text-lg">
    No meals found.
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import MealItem from './MealItem.vue';

const props = defineProps({
  meals: Array
});
</script>
