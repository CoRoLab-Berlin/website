<template>
  <button
    type="button"
    class="bg-bhtgray-700 text-white rounded-xl cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-700"
  >
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>
