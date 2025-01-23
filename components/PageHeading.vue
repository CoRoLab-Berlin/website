<template>
  <div>
    <div v-if="layout">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          {{ props.title }}
        </h2>
      </div>
      <div class="mx-auto lg:mx-0">
        <p class="mt-10 font-normal text-justify">
          {{ props.description }}
        </p>
      </div>
    </div>
    <div v-else class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
        {{ props.title }}
      </h2>
      <p class="font-light lg:mb-16 sm:text-xl">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  description: string;
}>();

// if the description is longer than 200 characters, set layout to 1, if not layout should be 0
const layout = props.description.length > 200;
</script>
