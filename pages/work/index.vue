<template>
  <div class="pb-24 pt-12 sm:py-32 sm:pt-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <PageHeading :title="title" :description="description" />
      <div
        class="mx-auto mt-10 sm:mt-16 lg:mx-0 lg:max-w-none"
      >
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(work, index) in data"
            :key="index"
            class="max-w-sm bg-bhtgray-500 border border-bhtgray-400 rounded-lg shadow"
          >
            <NuxtImg
              :src="work.image"
              class="w-full sm:aspect-[2/1] lg:aspect-[3/2] rounded-t-lg mb-4 object-cover"
            />
            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                >
                  {{ work.title }}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700">
                {{ work.description }}
              </p>
              <NuxtLink
                :to="work.link ? work.link : work._path"
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

const title = "Our lab is working on"
const description = "You find information on activities of the laboratory for compliant robotic systems for applications in the safe human-robot interaction. We think that the inherent compliance of systems is the key for safe interaction between humans and robots. Passive compliant systems will follow without delay and without active control, which always associated with signal delays, an external contact force. The compliance and resilience can be implemented in both the actuators and in the supporting structure. Compliant actuators have the advantage that they both respond inherently passive compliant and on a control actively be adjusted within limits. Is the required compliance for a given task in a constant and a variable part separable, the constant part may be transferred to the passive mechanical construction. This structural compliance is entirely passive, but can be detected by suitable sensors and possibly mechanically altered. The overall compliance reduced by the passive part also leads to a lower control effort. In what way which part of the required total compliance be divided between the construction and the actuators is subject and mission of our lab. Focus are the themes of new materials and manufacturing technologies for lightweight and sustainable constructions and control compliant actuators for safe human-technology interaction. We wish you an interesting and pleasant stay on our pages."

const { data } = await useAsyncData(() => {
  return queryContent("/work")
    .find()
    .then((projects) => {
      return projects.sort((a, b) => {
        // Sort by start year
        const indexA = a.index;
        const indexB = b.index;
        return indexA - indexB;
      });
    });
});
</script>
