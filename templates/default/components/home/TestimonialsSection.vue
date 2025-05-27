<template>
  <section class="testimonials-section py-24 bg-gray-100">
    <div class="container max-w-7xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-16 text-gray-800">{{ t('components.testimonials.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Testimonial 1 -->
        <AppCard>
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold text-xl">
              {{ getInitials(t('components.testimonials.items.0.name')) }}
            </div>
            <div class="ml-4">
              <h4 class="font-semibold text-lg text-gray-800">{{ t('components.testimonials.items.0.name') }}</h4>
              <p class="text-sm text-gray-600">{{ t('components.testimonials.items.0.position') }}</p>
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed">
            {{ t('components.testimonials.items.0.quote') }}
          </p>
        </AppCard>

        <!-- Testimonial 2 -->
        <AppCard>
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold text-xl">
              {{ getInitials(t('components.testimonials.items.1.name')) }}
            </div>
            <div class="ml-4">
              <h4 class="font-semibold text-lg text-gray-800">{{ t('components.testimonials.items.1.name') }}</h4>
              <p class="text-sm text-gray-600">{{ t('components.testimonials.items.1.position') }}</p>
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed">
            {{ t('components.testimonials.items.1.quote') }}
            <button
              class="cursor-pointer mt-4 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center group transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span class="mr-2">{{ t('components.testimonials.downloadButton') }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </p>
        </AppCard>

        <!-- Testimonial 3 -->
        <AppCard>
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold text-xl">
              {{ getInitials(t('components.testimonials.items.2.name')) }}
            </div>
            <div class="ml-4">
              <h4 class="font-semibold text-lg text-gray-800">{{ t('components.testimonials.items.2.name') }}</h4>
              <p class="text-sm text-gray-600">{{ t('components.testimonials.items.2.position') }}</p>
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed">
            {{ t('components.testimonials.items.2.quote') }}
          </p>
        </AppCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppCard from '../AppCard.vue'

const { t } = useI18n()

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
}

defineOptions({
  name: 'TestimonialsSection'
})
</script> 