<template>
  <div v-if="indexContent" class="pb-24 pt-12 sm:py-32 sm:pt-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <PageHeading :title="indexContent.title" :description="indexContent.description" />
      <div class="mx-auto mt-10 sm:mt-16 lg:mx-0 lg:max-w-none">
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(work, index) in workItems"
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

// 1. Load everything from /work
const { data: allWork } = await useAsyncData("work-all", () =>
  queryContent("/work").find()
);

// 2. Grab the _index.md content for page heading
const indexContent = computed(() =>
  allWork.value?.find(item => item._file === "work/_index.md") ?? null
);

// 3. Filter and sort actual work items
const workItems = computed(() =>
  allWork.value
    ?.filter(item => item._file !== "work/_index.md")
    .sort((a, b) => {
      // Sort by `index` (lower index = higher up)
      const indexA = a.index ?? 99;
      const indexB = b.index ?? 99;
      return indexA - indexB;
    }) ?? []
);
</script>
