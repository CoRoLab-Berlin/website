<template>
  <div class=" bg-bhtgray-700">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pr-4 h-full flex justify-center items-center">
           <CommonCarousel :images="props.images"/>
        </div>
        <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
          <h1
            class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {{ title }}
          </h1>
          <p class="max-w-xl mt-2">
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  text: string;
  images: string[];
}>();
</script>
