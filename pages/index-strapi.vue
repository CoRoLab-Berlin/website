<template>
  <div>
    <Hero 
    :title="data.data.Title"
    :subtitle="data.data.Subtitle"
    :image="apiUrl + data.data.HeroImage.url"
    />
    <ContentSection
    class="my-16 lg:my-24"
    :title="data.data.About.Title"
    :text="data.data.About.Text"
    :images="contentImages"
  />
  <Logos class="my-16 lg:my-24" :images="logoImages" />
</div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const apiUrl = runtimeConfig.public.apiUrl
const { data, error } = await useFetch('http://localhost:1337/api/homepage?pLevel', {
  headers: {
    'Authorization': 'bearer ' + runtimeConfig.public.strapi
  }
})
const contentImages = computed(() => {
    return data.value.data.About.Images.map((image: any) => {
        return apiUrl + image.url
    })
})
const logoImages = computed(() => {
    return data.value.data.Cooperation.Logos.map((image: any) => {
        return apiUrl + image.url
    })
})
</script>
