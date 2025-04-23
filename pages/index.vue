<template>
  <div v-if="data" class="bg-bhtgray-700">
    <Hero
      :title="data.heroTitle"
      :subtitle="data.heroSubtitle"
      :image="data.heroImage"
      :images="data.images"
    />
    <!-- <ContentSection
      class="my-16 lg:my-24"
      :title="data.title"
      :text="data.text"
      :images="data.images"
    /> -->
    <Logos class="my-16 lg:my-24" :images="data.logos" />
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("page-data", () =>
  queryContent("/home").findOne()
);
</script>
