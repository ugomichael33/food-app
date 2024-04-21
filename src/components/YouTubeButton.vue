<template>
  <a
    :href="href"
    target="_blank"
    class="inline-flex items-center justify-center px-4 py-2 rounded-lg text-white font-medium bg-orange-500 border border-transparent hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition ease-in-out duration-150"
    rel="noopener noreferrer"
  >
    <slot>YouTube</slot>
  </a>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  href: String
});
</script>
