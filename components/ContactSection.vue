<!--
  <div class=" bg-bhtgray-700">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
-->

  <div>
    <h2 class="text-xl font-semibold mb-4">{{ info.title }}</h2>
    
    <p class="text-gray-700">
      <template v-for="(item, index) in info.address" :key="index">
        <span v-if="item.link">
          <NuxtLink
            :to="item.link"
            class="text-blue-500 hover:underline"
            target="_blank"
          >
            <b v-if="index == 0">
              {{ item.label }}
            </b>
            <span v-else>{{ item.label }}</span>
          </NuxtLink>
        </span>
        <span v-else>
          <b v-if="index == 0">
            {{ item.label }}
          </b>
          <span v-else>{{ item.label }}</span>
        </span>
        <br />
      </template>
    </p>
    
    <p class="mt-4">
      Homepage:
      <NuxtLink
        :to="info.homepage.link"
        class="text-blue-500 hover:underline"
        target="_blank"
      >
        {{ info.homepage.label }}
      </NuxtLink>
      <br />
      Mail:
      <NuxtLink
        :to="info.mail.link"
        class="text-blue-500 hover:underline"
        target="_blank"
      >
        {{ info.mail.label }}
      </NuxtLink>
      <br />
      Phone:
      <NuxtLink
        :to="info.phone.link"
        class="text-blue-500 hover:underline"
        target="_blank"
      >
        {{ info.phone.label }}
      </NuxtLink>
      <br />
      Room: {{ info.room }}
    </p>
    
    <div class="mt-6">
      <NuxtImg
        :src="info.map.src"
        :alt="info.map.alt"
        class="w-full rounded-2xl shadow aspect-[5/3]"
      />
    </div>
    
  </div>
</template>

<script setup lang="ts">
type ContactSectionProps = {
  info: {
    title: string;
    address: Array<{ label: string; link?: string }>;
    homepage: { label: string; link: string };
    mail: { label: string; link: string };
    phone: { label: string; link: string };
    room: string;
    map: { src: string; alt: string };
  };
};
defineProps({
  info: {
    type: Object as PropType<ContactSectionProps["info"]>,
    required: true,
  },
});
</script>
