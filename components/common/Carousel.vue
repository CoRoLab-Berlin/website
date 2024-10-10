<template>
  <Carousel
    :items-to-show="1"
    class="w-full"
    :autoplay="3000"
    wrapAround
  >
    <Slide v-for="(image, index) in props.images" :key="index">
      <NuxtImg :src="image" class="object-cover w-full rounded-xl" />
    </Slide>
  </Carousel>
</template>

<script setup lang="ts">
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

const props = defineProps<{
  images: string[];
}>();
</script>
