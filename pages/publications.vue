<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Publications
        </h2>
      </div>
      <div
        class="mx-auto mt-10 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none"
      >
        <div class="mt-6 border border-slate-200 rounded-lg px-4">
          <div
            v-for="(publicationCategory, index) in publicationCategories"
            :key="index"
            class="border-b border-slate-200"
          >
            <button
              class="w-full flex justify-between items-center py-5 text-slate-800"
              @click="toggleAccordion(index)"
            >
              <span>{{ publicationCategory.title }}</span>
              <span
                :class="[
                  'text-slate-800 transition-transform duration-300',
                  activeAccordion === index ? 'rotate-45' : 'rotate-0',
                ]"
              >
                <PlusIcon class="w-5 h-5" />
              </span>
            </button>
            <div
              :style="{
                maxHeight:
                  activeAccordion === index ? contentHeight[index] : '0px',
              }"
              class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div class="pb-5 text-sm text-slate-500">
                <ContentRendererMarkdown
                  class="prose prose-xl prose-h2:text-2xl prose-headings:no-underline prose-h2:no-underline prose-a:font-semibold prose-bht !mx-0"
                  :value="publicationCategory"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlusIcon } from "@heroicons/vue/16/solid";

const { data: publicationCategories } = await useAsyncData(() => {
  return queryContent("/publications").find();
});

const activeAccordion = ref<null | number>(null);
const contentHeight = ref<string[]>([]);

const toggleAccordion = async (index: number) => {
  if (activeAccordion.value === index) {
    activeAccordion.value = null;
  } else {
    activeAccordion.value = index;
    await nextTick();
    const content = document.getElementsByClassName("overflow-hidden")[index];
    contentHeight.value[index] = content.scrollHeight + "px";
  }
};
</script>
