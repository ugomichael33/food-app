<template>
  <div
    class="bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-lg w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-4">
      <h3 class="text-lg font-bold truncate">{{ meal.strMeal }}</h3>
      <p class="text-gray-600 text-sm my-2">
        {{ truncatedInstructions }}
      </p>
      <div class="flex justify-between items-center mt-2">
        <YouTubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import YouTubeButton from './YouTubeButton.vue';
import { defineProps } from 'vue';

const props = defineProps({
  meal: Object
});

const truncatedInstructions = computed(() => {
  return props.meal.strInstructions.length > 100
    ? props.meal.strInstructions.substring(0, 100) + '...'
    : props.meal.strInstructions;
});
</script>
