<template>
  <div class="bg-white-50 py-10 2xl:py-16 xl:py-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
        In Cooperation with
      </h2>
      <div
        class="mx-auto mt-10 max-w-lg flex items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none"
      >
        <NuxtImg
          v-for="(image, index) in props.images"
          :key="index"
          class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          :src="image"
          width="158"
          height="48"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  images: string[];
}>();
</script>
