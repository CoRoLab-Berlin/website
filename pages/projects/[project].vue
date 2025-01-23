<template>
  <ContentRenderer v-if="data" :value="data">

      <div class="mx-auto max-w-4xl flex flex-col justify-center text-center space-y-6 mt-10">
        <div>

          <h1 class="text-4xl font-bold text-bhtyellow-500">{{ data.title }}</h1>
          <p class="text-lg font-semibold">{{ data.timespan }}</p>
        </div>
          <!-- <NuxtImg :src="data.image" alt="" /> -->
           <CommonCarousel :images="data.images" />
        <div class="prose prose-xl prose-h2:text-2xl prose-headings:no-underline prose-h2:no-underline prose-a:font-semibold prose-bht !mx-0 text-justify">
          <ContentRendererMarkdown :value="data" />
        </div>
    </div>
    <!-- <div
      class="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
    >
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
      >
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <p class="text-base font-semibold leading-7 text-bhtyellow-500">
                {{ data.timespan }}
              </p>
              <h1
                class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                {{ data.title }}
              </h1>
              <p class="mt-6 text-xl leading-8 text-justify">
                {{ data.description }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
        >
          <NuxtImg
            class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-bhtgray-400 sm:w-[57rem]"
            :src="data.image"
            alt=""
          />
        </div>
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <div class="lg:pr-4">
            <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ContentRendererMarkdown
              class="prose prose-xl prose-h2:text-2xl prose-headings:no-underline prose-h2:no-underline prose-a:font-semibold prose-bht !mx-0 text-justify"
              :value="data"
              />
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </ContentRenderer>
</template>

<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData("page-data", () =>
  queryContent(route.fullPath).findOne()
);
</script>
