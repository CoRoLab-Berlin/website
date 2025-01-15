<template>
  <div class="youtube-video">
    <iframe
      :src="`https://www.youtube.com/embed/${props.videoId}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="w-full aspect-video h-full max-w-xl"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
});
</script>