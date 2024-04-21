<template>
  <div class="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
    <h1 class="text-4xl font-bold mb-5 text-orange-500">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-auto rounded-md mb-4">

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg py-2">
      <div v-for="(value, key) in mealInfo" :key="key" class="bg-orange-100 p-3 rounded">
        <strong class="font-bold">{{ key }}:</strong> {{ value }}
      </div>
    </div>

    <p class="my-3 text-gray-700">
      {{ meal.strInstructions }}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="type in ['Ingredients', 'Measures']" :key="type" class="bg-blue-100 p-4 rounded-lg">
        <h2 class="text-2xl font-semibold mb-2">{{ type }}</h2>
        <ul class="list-disc pl-5">
          <li v-for="item in mealDetails[type.toLowerCase()]" :key="item.id" class="mb-1">
            {{ item.id }}. {{ item.value }}
          </li>
        </ul>
      </div>
      <div class="mt-4 flex flex-col space-y-2">
        <YouTubeButton :href="meal.strYoutube" class="btn btn-primary"/>
        <a :href="meal.strSource" target="_blank" class="inline-block bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition-colors">
          View Original Source
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue';

const route = useRoute();
const meal = ref({});

onMounted(async () => {
  try {
    const response = await axiosClient.get(`lookup.php?i=${route.params.id}`);
    meal.value = response.data.meals[0] || {};
  } catch (error) {
    console.error("Failed to load meal:", error);
  }
});

const mealInfo = computed(() => ({
  'Category': meal.value.strCategory,
  'Area': meal.value.strArea,
  'Tags': meal.value.strTags
}));

const mealDetails = computed(() => {
  const ingredients = [];
  const measures = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal.value[`strIngredient${i}`];
    const measure = meal.value[`strMeasure${i}`];
    if (ingredient) ingredients.push({ id: i, value: ingredient });
    if (measure) measures.push({ id: i, value: measure });
  }
  return { ingredients, measures };
});
</script>
