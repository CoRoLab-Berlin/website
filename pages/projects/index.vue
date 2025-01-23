<template>
  <div class="pb-24 pt-12 sm:py-32 sm:pt-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <PageHeading :title="title" :description="description" />
      <div
        class="mx-auto mt-10 sm:mt-16 lg:mx-0 lg:max-w-none"
      >
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="max-w-sm bg-bhtgray-500 border border-bhtgray-400 rounded-lg shadow"
          >
            <NuxtImg
              :src="project.images[0]"
              class="w-full sm:aspect-[2/1] lg:aspect-[3/2] rounded-t-lg mb-4 object-cover"
            />
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {{ project.title }}
              </h5>
              <p class="mb-3 font-normal text-gray-700">
                {{ project.description }}
              </p>
              <NuxtLink
                :to="project._path"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-bhtgray-600 rounded-lg hover:shadow-md text-bhtyellow-500"
              >
                Read more
                <ArrowRightIcon class="w-4 h-4 ml-2" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/16/solid";

const title = "Current and past projects in our lab";
const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, iusto consectetur nobis eaque explicabo harum voluptatibus nihil? Doloremque, ipsam tempora. Deleniti unde nesciunt tenetur dolore excepturi facilis veniam asperiores maiores iure porro. Nulla, repudiandae nobis. Recusandae dolorem consectetur alias deserunt aliquid fugiat nostrum cupiditate, odit at corrupti quo. Aliquid, consequuntur! Maiores minima fugit repellendus neque perferendis eaque officia quisquam excepturi voluptatem commodi quod accusantium aut quam labore, distinctio sapiente vitae exercitationem qui nesciunt? Soluta dolor laboriosam praesentium eveniet fuga culpa nam. Laboriosam aspernatur perferendis voluptates, velit id molestiae quis! Repellat quo dolorem sit veritatis magnam placeat omnis odit voluptas consequuntur!"

const { data: projects } = await useAsyncData(() => {
  return queryContent("/projects")
    .find()
    .then((projects) => {
      return projects.sort((a, b) => {
        // Sort by start year
        const startYearA = parseInt(a.timespan.split(" - ")[0]);
        const startYearB = parseInt(b.timespan.split(" - ")[0]);
        return startYearB - startYearA;
      });
    });
});
</script>
