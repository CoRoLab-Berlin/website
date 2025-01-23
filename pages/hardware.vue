<template>
  <div class="pb-24 pt-12 sm:py-32 sm:pt-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Available hardware in our lab
        </h2>
      </div>
      <div class="mx-auto lg:mx-0">
        <p class="text-gray-900 mt-10 font-normal text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, iusto consectetur nobis eaque explicabo harum voluptatibus nihil? Doloremque, ipsam tempora. Deleniti unde nesciunt tenetur dolore excepturi facilis veniam asperiores maiores iure porro. Nulla, repudiandae nobis. Recusandae dolorem consectetur alias deserunt aliquid fugiat nostrum cupiditate, odit at corrupti quo. Aliquid, consequuntur! Maiores minima fugit repellendus neque perferendis eaque officia quisquam excepturi voluptatem commodi quod accusantium aut quam labore, distinctio sapiente vitae exercitationem qui nesciunt? Soluta dolor laboriosam praesentium eveniet fuga culpa nam. Laboriosam aspernatur perferendis voluptates, velit id molestiae quis! Repellat quo dolorem sit veritatis magnam placeat omnis odit voluptas consequuntur!
        </p>
      </div>
      <div
        class="mx-auto mt-10 sm:mt-16 lg:mx-0 lg:max-w-none"
      >
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(hardware, index) in hardware_data"
            :key="index"
            class="max-w-sm bg-bhtgray-500 border border-bhtgray-400 rounded-lg shadow"
          >
            <NuxtImg
              :src="hardware.image"
              class="w-full sm:aspect-[2/1] lg:aspect-[3/2] rounded-t-lg mb-4 object-cover"
            />
            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                >
                  {{ hardware.title }}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700">
                {{ hardware.description }}
              </p>
              <!-- <NuxtLink
                :to="work.link ? work.link : work._path"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-bhtgray-600 rounded-lg hover:shadow-md text-bhtyellow-500"
              >
                Read more
                <ArrowRightIcon class="w-4 h-4 ml-2" />
              </NuxtLink> -->
            </div>
          </div>
        </div>
      </div>
      <!-- <div
        class="mx-auto mt-10 sm:mt-16 lg:mx-0 lg:max-w-none"
      >
        <div class="mt-6 border border-slate-200 rounded-lg px-4">
          <div
            v-for="(item, index) in hardware"
            :key="index"
            class="border-b border-slate-200"
          >
            <button
              class="w-full flex justify-between items-center py-5 text-slate-800"
              @click="toggleAccordion(index)"
            >
              <span>{{ item.title }}</span>
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
              <div class="pb-5 text-sm">
                <ContentRendererMarkdown
                class="prose prose-xl prose-h2:text-2xl prose-headings:no-underline prose-h2:no-underline prose-a:font-semibold prose-bht !mx-0 max-w-none"
                :value="item"
                />
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// import { PlusIcon } from "@heroicons/vue/16/solid";

const { data: hardware_data } = await useAsyncData(() => {
  return queryContent("/hardware")
    .find()
    .then((items) => {
      return items.sort((a, b) => a.order - b.order);
    });
});

// const activeAccordion = ref<null | number>(null);
// const contentHeight = ref<string[]>([]);

// const toggleAccordion = async (index: number) => {
//   if (activeAccordion.value === index) {
//     activeAccordion.value = null;
//   } else {
//     activeAccordion.value = index;
//     await nextTick();
//     const content = document.getElementsByClassName("overflow-hidden")[index];
//     contentHeight.value[index] = content.scrollHeight + "px";
//   }
// };
</script>

<!-- <style scoped>
.rotate-45 {
  transform: rotate(45deg);
}
.rotate-0 {
  transform: rotate(0deg);
}
</style> -->
