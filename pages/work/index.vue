<template>
  <div class="pb-24 pt-12 sm:py-32 sm:pt-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our lab is working on
        </h2>
      </div>
      <div
        class="mx-auto mt-10 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none"
      >
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(work, index) in data"
            :key="index"
            class="max-w-sm bg-bhtgray-500 border border-bhtgray-400 rounded-lg shadow"
          >
            <NuxtImg
              :src="work.image"
              class="w-full sm:aspect-[2/1] lg:aspect-[3/2] rounded-t-lg mb-4 object-cover"
            />
            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                >
                  {{ work.title }}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700">
                {{ work.description }}
              </p>
              <NuxtLink
                :to="work.link ? work.link : work._path"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-bhtgray-600 rounded-lg hover:shadow-md text-bhtyellow-500"
              >
                Read more
                <ArrowRightIcon class="w-4 h-4 ml-2" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/16/solid";

const { data } = await useAsyncData(() => {
  return queryContent("/work")
    .find()
    .then((projects) => {
      return projects.sort((a, b) => {
        // Sort by start year
        const indexA = a.index;
        const indexB = b.index;
        return indexA - indexB;
      });
    });
});
</script>
