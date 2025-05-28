<template>
  <div class="services-page py-24">
    <div class="container max-w-7xl mx-auto px-4">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-6">{{ t('servicesPage.meta.title') }}</h1>
        <p class="text-xl text-white/90 max-w-3xl mx-auto">{{ t('servicesPage.meta.description') }}</p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AppCard 
          v-for="(serviceKey, index) in serviceKeys" 
          :key="serviceKey"
          class="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div class="relative h-48 mb-6 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              :src="servicesImages[SERVICES[serviceKey]].src"
              :alt="servicesImages[SERVICES[serviceKey]].alt"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-warning-500 transition-colors duration-300">
            {{ t(`components.service.${index}.title`) }}
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            {{ t(`components.service.${index}.description`) }}
          </p>
          <NuxtLink 
            :to="SERVICE_ROUTES[SERVICES[serviceKey]]"
            class="text-yellow-500 hover:text-yellow-600 font-semibold inline-flex items-center group/link relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 hover:after:w-full after:transition-all after:duration-300"
          >
            {{ t(`components.service.${index}.linkText`) }}
            <span class="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
          </NuxtLink>
        </AppCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppCard from '~/components/AppCard.vue'
import { servicesImages } from '~/config/site'
import { SERVICES, SERVICE_ROUTES } from '~/constants/services'

const { t } = useI18n()

// SEO meta
useSeoMeta({
  title: () => t('servicesPage.meta.title'),
  description: () => t('servicesPage.meta.description')
})

// Get service keys in a type-safe way
const serviceKeys = Object.keys(SERVICES) as Array<keyof typeof SERVICES>
</script> 