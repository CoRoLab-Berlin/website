<template>
  <div class="pb-24 pt-12 sm:py-32 sm:pt-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Publications
        </h2>
      </div>
      <div class="mx-auto lg:mx-0">
        <p class="text-gray-900 mt-10 font-normal text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          iusto consectetur nobis eaque explicabo harum voluptatibus nihil?
          Doloremque, ipsam tempora. Deleniti unde nesciunt tenetur dolore
          excepturi facilis veniam asperiores maiores iure porro. Nulla,
          repudiandae nobis. Recusandae dolorem consectetur alias deserunt
          aliquid fugiat nostrum cupiditate, odit at corrupti quo. Aliquid,
          consequuntur! Maiores minima fugit repellendus neque perferendis eaque
          officia quisquam excepturi voluptatem commodi quod accusantium aut
          quam labore, distinctio sapiente vitae exercitationem qui nesciunt?
          Soluta dolor laboriosam praesentium eveniet fuga culpa nam. Laboriosam
          aspernatur perferendis voluptates, velit id molestiae quis! Repellat
          quo dolorem sit veritatis magnam placeat omnis odit voluptas
          consequuntur!
        </p>
      </div>
      <div class="w-full columns-2 gap-0 mt-10">
        <div
          class="text-center text-lg border-2 border-bhtgray-300 border-r-bhtyellow-600 p-4 rounded-l-2xl hover:bg-bhtgray-500"
          :class="activeList == 0 ? 'border-bhtyellow-600' : ''"
          @click = "activeList = 0"
        >
          PAPER
        </div>
        <div
          class="text-center text-lg border-2 border-bhtgray-300 border-l-0 p-4 rounded-r-2xl hover:bg-bhtgray-500"
          :class="activeList == 1 ? 'border-bhtyellow-600' : ''"
          @click = "activeList = 1"
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
const { data: publicationCategories } = await useAsyncData(() => {
  return queryContent("/publications").find();
});

const activeList = ref<number>(0);
</script>
