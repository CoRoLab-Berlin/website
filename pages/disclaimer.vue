<template>
  <main v-if="data" class="w-full p-6">
    <ContentRenderer :value="data">
      <ContentRendererMarkdown
        :value="data"
        class="prose prose-h2:text-xl prose-headings:no-underline prose-h2:no-underline prose-a:font-semibold mx-auto"
      />
    </ContentRenderer>
  </main>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("page-data", () =>
  queryContent("/disclaimer").findOne()
);
</script>
