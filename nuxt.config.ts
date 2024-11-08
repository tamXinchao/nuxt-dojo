// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    "@/assets/css/tailwindcss.css", // Nhúng file CSS vào dự án
  ],
  app: {
    head: {
      title: "NuxtJS dojo",
      meta: [
        {
          name: "description",
          content: "Everything you need to know about NuxtJS",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  runtimeConfig: {
    // Biến bảo mật không nên công khai
    secretKey: process.env.SECRET_KEY,
    public: {
      // Nếu cần có các biến môi trường công khai, định nghĩa ở đây
    },
  },
});
