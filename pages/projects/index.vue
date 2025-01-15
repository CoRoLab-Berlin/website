<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Current and past projects in our lab
        </h2>
      </div>
      <div
        class="mx-auto mt-10 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none"
      >
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="max-w-sm bg-bhtgray-500 border border-bhtgray-400 rounded-lg shadow"
          >
            <NuxtImg
              :src="project.image"
              class="w-full sm:aspect-[2/1] lg:aspect-[3/2] rounded-t-lg mb-4 object-cover"
            />
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {{ project.title }}
              </h5>
              <p class="mb-3 font-normal text-gray-700">
                {{ project.description }}
              </p>
              <NuxtLink
                :to="project._path"
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

const { data: projects } = await useAsyncData(() => {
  return queryContent("/projects")
    .find()
    .then((projects) => {
      return projects.sort((a, b) => {
        // Sort by start year
        const startYearA = parseInt(a.timespan.split(" - ")[0]);
        const startYearB = parseInt(b.timespan.split(" - ")[0]);
        return startYearB - startYearA;
      });
    });
});
</script>
