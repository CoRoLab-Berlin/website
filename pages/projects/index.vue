<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Current and past projects in our lab
        </h2>
      </div>
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="project in projects"
          :key="project.id"
          class="flex max-w-xl flex-col items-start justify-between"
        >
          <NuxtImg
            :src="project.image"
            class="w-full sm:aspect-[2/1] lg:aspect-[3/2] rounded-2xl mb-4 object-cover"
          />
          <div class="flex items-center gap-x-4 text-xs">
            <span class="text-gray-500">{{ project.timespan }}</span>
            <div
              class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {{ project.status }}
            </div>
          </div>
          <NuxtLink :to="project._path" class="group relative">
            <h3
              class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
            >
              <a href="#">
                <span class="absolute inset-0" />
                {{ project.title }}
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {{ project.description }}
            </p>
          </NuxtLink>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
