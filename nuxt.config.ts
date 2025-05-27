// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],
  
  i18n: {
    vueI18n: '../i18n.config.ts'
  },
  
  css: ['~/assets/css/main.css'],

  ui: {
    theme: {
      colors: ['primary', 'secondary', 'success', 'info', 'warning', 'error']
    }
  },

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/web-shablons-vue/' : '/',
    buildAssetsDir: '/_nuxt/',
    cdnURL: process.env.NODE_ENV === 'production' ? 'https://yourusername.github.io/web-shablons-vue/' : '',
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap' }
      ]
    }
  },
})