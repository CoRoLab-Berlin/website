<template>
  <div v-if="indexContent" class="pb-24 pt-12 sm:py-32 sm:pt-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <PageHeading :title="indexContent.title" :description="indexContent.description" />
      <div class="w-full columns-4 gap-0 mt-10">
        <div
          class="text-center text-lg border-2 border-bhtgray-300 border-l-0 p-4 rounded-l-2xl hover:bg-bhtgray-500 cursor-pointer"
          :class="activeList == 0 ? 'border-bhtyellow-600' : ''"
          @click="activeList = 0"
        >
          CONF.PAPER
        </div>
        <div
          class="text-center text-lg border-2 border-bhtgray-300 border-l-0 p-4 hover:bg-bhtgray-500 cursor-pointer"
          :class="activeList == 1 ? 'border-bhtyellow-600' : ''"
          @click="activeList = 1"
        >
          JOURNALS
        </div>
        <div
          class="text-center text-lg border-2 border-bhtgray-300 border-l-0 p-4 hover:bg-bhtgray-500 cursor-pointer"
          :class="activeList == 2 ? 'border-bhtyellow-600' : ''"
          @click="activeList = 2"
        >
          REPORTS
        </div>
        <div
          class="text-center text-lg border-2 border-bhtgray-300 border-l-0 p-4 rounded-r-2xl hover:bg-bhtgray-500 cursor-pointer"
          :class="activeList == 3 ? 'border-bhtyellow-600' : ''"
          @click="activeList = 3"
        >
          THESES
        </div>
      </div>
      <div class="text-sm text-slate-500 mt-10">
        <ContentRendererMarkdown
          class="prose prose-xl prose-h2:text-2xl prose-headings:no-underline prose-h2:no-underline prose-a:font-semibold prose-bht !mx-0 max-w-none"
          :value="publicationCategories[activeList]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: allPubs } = await useAsyncData("publications-lists", () =>
queryContent("/publications").find()
);

const indexContent =  computed(() =>
  allPubs.value?.find(pub => pub._file === "publications/_index.md") ?? null
);

const publicationCategories = computed(() =>
  allPubs.value?.filter(pub => pub._file !== "publications/_index.md") ?? []
);

const activeList = ref<number>(0);
</script>
