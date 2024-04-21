<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-center px-4 lg:px-8 mb-6">
    <router-link
      :to="{ name: 'home' }"
      class="flex items-center h-full text-lg font-bold text-orange-500 hover:text-orange-600 transition-colors"
    >
      Home
    </router-link>
    <nav class="flex items-center gap-4">
      <router-link
        :to="{ name: 'byName' }"
        class="px-4 py-2 h-full text-sm lg:text-base font-semibold transition-colors hover:bg-orange-500 hover:text-white rounded-md"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="px-4 py-2 h-full text-sm lg:text-base font-semibold transition-colors hover:bg-orange-500 hover:text-white rounded-md"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="px-4 py-2 h-full text-sm lg:text-base font-semibold transition-colors hover:bg-orange-500 hover:text-white rounded-md"
      >
        Meals By Ingredients
      </router-link>
    </nav>
  </header>
</template>
