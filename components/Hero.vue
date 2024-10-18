<template>
  <section class="pt-0 h-full">
    <div
      class="bg-indigo-50 py-10 overflow-hidden px-5 lg:m-0 2xl:py-16 xl:py-8"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32"
        >
          <div class="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0 flex flex-col items-center lg:items-start">
            <h1
              class="py-8 text-center text-gray-900 font-bold font-manrope text-5xl lg:text-left leading-[70px] max-w-sm"
            >
              {{ props.title }}
              <br />
            </h1>
            <p class="text-gray-500 text-2xl text-center lg:text-left">
              {{ props.subtitle }}
            </p>
            <CommonButton text="View our projects" class="my-10" />
          </div>
          <div class="w-full xl:col-span-7 lg:col-span-6 block">
            <div class="w-full sm:w-auto">
              <NuxtImg
                :src="props.image"
                alt="Dashboard image"
                class="rounded-3xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  subtitle: string;
  image: string;
}>();
</script>