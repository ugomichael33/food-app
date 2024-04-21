<template>
  <div class="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
    <h1 class="text-4xl font-bold mb-6 text-orange-500">Search Meals by Name</h1>
    <div class="px-8 pb-6">
      <input
        type="text"
        v-model="keyword"
        @input="searchMeals"
        class="form-input rounded-lg border-2 bg-white border-gray-300 focus:ring-orange-500 focus:border-orange-500 w-full p-4 text-lg"
        placeholder="Search for Meals"
      />
    </div>

    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from '../components/Meals.vue';

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

watch(() => route.params.name, (newName) => {
  keyword.value = newName || "";
  if (keyword.value) {
    searchMeals();
  }
}, { immediate: true });

function searchMeals() {
  if (keyword.value.trim()) {
    store.dispatch("searchMeals", keyword.value.trim());
  } else {
    store.commit("setSearchedMeals", []);
  }
}
</script>

<style scoped>
.form-input:focus {
  transition: border-color 0.2s, box-shadow 0.2s;
}
</style>
