// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,  //TODO: temporary fix for 404 error
    },
  },

  app: {
    baseURL: "/corolab_website/",
  },

  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
  ],
});
