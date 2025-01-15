<template>
  <header class="bg-bhtgray-700">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1 p-1">
          <span class="sr-only">Your Company</span>
          <NuxtImg
            class="h-12 w-auto"
            src="images/corolab_logo_only.svg"
            alt=""
          />
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <NuxtLink
          v-for="page in pages"
          :key="page.name"
          :to="page.href"
          class="text-base font-semibold leading-6 hover:text-bhtyellow-500"
        >
          {{ page.name }}
        </NuxtLink>
      </PopoverGroup>
    </nav>
    <Dialog
      class="lg:hidden"
      :open="mobileMenuOpen"
      @close="mobileMenuOpen = false"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-bhtgray-700 px-6 py-6 sm:max-w-sm"
      >
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="-m-1 p-1">
            <span class="sr-only">Your Company</span>
            <NuxtImg
              class="h-12 w-auto"
              src="images/corolab_logo_only.svg"
              alt=""
            />
          </NuxtLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6 text-bhtgray-50" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-bhtgray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink
                v-for="page in pages"
                :key="page.name"
                :to="page.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-bhtgray-50"
              >
                {{ page.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const pages = [
  { name: "Our Work", href: "/work" },
  { name: "Projects", href: "/projects" },
  { name: "Hardware", href: "/hardware" },
  { name: "Publications", href: "/publications" },
  { name: "Team", href: "/team" },
  { name: "Teaching", href: "/teaching" },
  { name: "Contact Us Q", href: "/contact" },
];

const mobileMenuOpen = ref(false);
</script>
