<template>
  <div class="min-h-screen flex flex-col bg-bhtgray-700 text-bhtgray-50 font-bhtCaseMicro">
    <Navigation />
    <div class="flex-1">
      <slot />
    </div>
    <Footer :links="footerLinks" />
  </div>
</template>

<script setup lang="ts">
const footerLinks = [
  {
    title: "YouTube",
    url: "http://www.youtube.com/user/gagabo68?feature=mhee",
  },
  {
    title: "G. Scholar",
    url: "https://scholar.google.de/citations?hl=de&tzom=-60&user=UwZXz30AAAAJ&view_op=list_works&sortby=pubdate",
  },
  {
    title: "BIOKON",
    url: "http://www.biokon.de/",
  },
];
</script>
