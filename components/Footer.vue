<template>
  <footer class="w-full bg-bhtgray-800 py-10">
    <div class="mx-auto max-w-7xl">
      <div class="flex justify-between items-center flex-col gap-8 xl:flex-row">
        <div
          class="flex items-center justify-around lg:justify-between gap-5 flex-wrap w-full px-4 lg:p-0"
        >
          <div class="flex">
            <NuxtLink href="#" class="-m-1 p-1">
              <span class="sr-only">Your Company</span>
              <NuxtImg
                class="h-12 w-auto"
                src="images/corolab_logo_only.svg"
                alt=""
              />
            </NuxtLink>
          </div>
          <ul
            class="text-base flex items-center gap-3 md:gap-6 transition-all duration-500 justify-around"
          >
            <li v-for="(link, index) in props.links" :key="index">
              <NuxtLink
                :to="link.url"
                class="hover:text-bhtyellow-500"
                target="_blank"
              >
                {{ link.title }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/disclaimer"
                class="hover:text-bhtyellow-500"
              >
                Disclaimer
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
type Link = {
  title: string;
  url: string;
};
const props = defineProps<{
  links: Link[];
}>();
</script>
