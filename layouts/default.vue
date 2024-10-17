<template>
  <div class="min-h-screen flex flex-col">
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
    url: "http://scholar.google.de/scholar?hl=de&q=boblan&btnG=&lr=",
  },
  {
    title: "BIOKON",
    url: "http://www.biokon.de/",
  },
];
</script>
