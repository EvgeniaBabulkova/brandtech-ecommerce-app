// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/image"],
  image: {
    domains: [
      "vm-images-test.global.ssl.fastly.net",
      "jj-images-test.global.ssl.fastly.net",
      "jx-images-test.global.ssl.fastly.net",
    ],
  },
});
