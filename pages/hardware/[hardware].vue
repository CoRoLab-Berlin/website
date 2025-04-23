<template>
    <ContentRenderer v-if="data" :value="data">
  
        <div class="mx-auto max-w-4xl flex flex-col justify-center text-center space-y-6 mt-10">
          <div>
  
            <h1 class="text-4xl font-bold text-bhtyellow-500">{{ data.title }}</h1>
            <p class="text-lg font-semibold">{{ data.timespan }}</p>
          </div>
            <!-- <NuxtImg :src="data.image" alt="" /> -->
             <CommonCarousel :images="[data.image]" />
          <div class="prose prose-xl prose-h2:text-2xl prose-headings:no-underline prose-h2:no-underline prose-a:font-semibold prose-bht !mx-0 text-justify">
            <ContentRendererMarkdown :value="data" />
          </div>
      </div>
    </ContentRenderer>
  </template>
  
  <script setup lang="ts">
  const route = useRoute();
  const data = ref(null);
  
  async function fetchData() {
    data.value = await queryContent(route.fullPath).findOne();
  }

  await fetchData();
  
  watch(() => route.fullPath, fetchData, { immediate: true });
  </script>
  