<template>
  <section class="services-overview py-24 bg-gray-100">
    <div class="container max-w-7xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-16 text-gray-800">{{ t('homePage.services.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <AppCard>
          <div class="relative h-48 mb-6 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              :src="servicesImages[SERVICES.WEB_DESIGN].src"
              :alt="servicesImages[SERVICES.WEB_DESIGN].alt"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-800">{{ t('components.service.0.title') }}</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            {{ t('components.service.0.description') }}
          </p>
          <NuxtLink 
            to="/services" 
            class="text-yellow-500 hover:text-yellow-600 font-semibold inline-flex items-center group relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 hover:after:w-full after:transition-all after:duration-300"
          >
            {{ t('components.service.0.linkText') }}
            <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </NuxtLink>
        </AppCard>

        <AppCard>
          <div class="relative h-48 mb-6 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              :src="servicesImages[SERVICES.BRAND_IDENTITY].src"
              :alt="servicesImages[SERVICES.BRAND_IDENTITY].alt"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-800">{{ t('components.service.1.title') }}</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            {{ t('components.service.1.description') }}
          </p>
          <NuxtLink 
            to="/services" 
            class="text-yellow-500 hover:text-yellow-600 font-semibold inline-flex items-center group relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 hover:after:w-full after:transition-all after:duration-300"
          >
            {{ t('components.service.1.linkText') }}
            <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </NuxtLink>
        </AppCard>

        <AppCard>
          <div class="relative h-48 mb-6 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              :src="servicesImages[SERVICES.UI_UX_DESIGN].src"
              :alt="servicesImages[SERVICES.UI_UX_DESIGN].alt"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-800">{{ t('components.service.2.title') }}</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            {{ t('components.service.2.description') }}
          </p>
          <NuxtLink 
            to="/services" 
            class="text-yellow-500 hover:text-yellow-600 font-semibold inline-flex items-center group relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 hover:after:w-full after:transition-all after:duration-300"
          >
            {{ t('components.service.2.linkText') }}
            <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </NuxtLink>
        </AppCard>
      </div>
      <div class="text-center mt-16">
        <NuxtLink 
          to="/services" 
          class="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          {{ t('homePage.services.buttonText') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppCard from '~/components/AppCard.vue'
import { servicesImages } from '~/config/site'
import { SERVICES } from '~/constants/services'

const { t } = useI18n()
</script> 