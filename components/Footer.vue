<template>
  <footer class="w-full bg-indigo-50 py-10">
    <div class="mx-auto max-w-7xl">
      <div class="flex justify-between items-center flex-col gap-8 xl:flex-row">
        <div class="flex items-center justify-between gap-5 flex-wrap w-full">
          <div class="flex">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <ul
            class="text-base flex items-center gap-3 md:gap-6 transition-all duration-500 justify-around"
          >
            <li v-for="(link, index) in props.links" :key="index">
              <NuxtLink
                :to="link.url"
                class="text-gray-800 hover:text-indigo-600"
                target="_blank"
              >
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
          <NuxtLink
            to="link.url"
            class="text-gray-800 hover:text-indigo-600"
            target="_blank"
          >
            Disclaimer
          </NuxtLink>
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
