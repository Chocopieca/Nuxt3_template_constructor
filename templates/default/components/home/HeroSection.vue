<template>
  <section class="hero-section relative py-24 overflow-hidden">
    <!-- Background Image with Overlay (Parallax) -->
    <slot name="background"></slot>
    
    <!-- Content -->
    <div class="container max-w-7xl mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
          {{ t('homePage.hero.title') }}
        </h1>
        <p class="text-xl md:text-2xl mb-12 text-gray-100">
          {{ t('homePage.hero.description') }}
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/contact" class="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {{ t('homePage.hero.buttonText') }}
          </NuxtLink>
          <NuxtLink to="/services" class="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {{ t('homePage.hero.secondaryButtonText') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineOptions({
  name: 'HeroSection'
})
</script> 