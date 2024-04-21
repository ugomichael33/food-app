<template>
  <div class="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
    <h1 class="text-5xl font-bold mb-6 text-orange-500">Random Meals</h1>
    <Meals :meals="meals" class="mt-4" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Meals from "../components/Meals.vue";
import axiosClient from "../axiosClient.js";

const meals = ref([]);

onMounted(() => {
  fetchMeals();
});

async function fetchMeals() {
  try {
    const requests = Array.from({ length: 10 }, () => axiosClient.get('random.php'));
    const results = await Promise.all(requests);
    results.forEach(({ data }) => {
      if (data.meals && data.meals.length > 0) {
        meals.value.push(data.meals[0]);
      }
    });
  } catch (error) {
    console.error("Failed to fetch meals:", error);
  }
}
</script>
