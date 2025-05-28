// https://nuxt.com/docs/api/configuration/nuxt-config
import { staticConfig } from './config/static'

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
      colors: [
        'primary',
        'accent',
        'secondary',
        'sci-fi',
        'metallic',
        'nightfall',
        'background',
        'text',
        'text-secondary',
      ]
    }
  },

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/' : '/',
    buildAssetsDir: '/_nuxt/',
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Orbitron:wght@400;700&family=Rajdhani:wght@400;600&display=swap' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.NODE_ENV === 'production' ? '/' : '/'
    }
  },

  image: {
    baseURL: process.env.NODE_ENV === 'production' ? '/' : '/',
    dir: 'public',
    quality: 80,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    }
  },

  vite: {
    optimizeDeps: {
      include: ['vue', 'vue-i18n']
    }
  },

  nitro: {
    storage: {
      fs: {
        driver: 'fs',
        base: './.data/storage'
      }
    },
    prerender: {
      routes: staticConfig.includePages,
      ignore: staticConfig.excludePages,
      crawlLinks: true
    }
  },

  // Configure static generation
  generate: {
    exclude: staticConfig.excludePages,
    routes: [
      ...staticConfig.includePages,
      ...Object.entries(staticConfig.dynamicRoutes).flatMap(([route, params]) =>
        params.map(param => route.replace('[slug]', param))
      )
    ]
  }
})