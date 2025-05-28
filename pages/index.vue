<template>
  <div>
    <HeroSection>
      <template #background>
        <NuxtImg 
          src="/banner.jpg" 
          alt="Hero Background" 
          class="w-full h-full object-cover opacity-50"
          width="1920"
          height="1080"
          loading="lazy"
          sizes="100vw sm:50vw md:100vw"
        />
      </template>
    </HeroSection>
    <GameplaySection />
    <GallerySection />
    <FeaturesSection />
    <TestimonialsSection />
    <CTASection />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import HeroSection from '~/components/home/HeroSection.vue'
import GameplaySection from '~/components/home/GameplaySection.vue'
import GallerySection from '~/components/home/GallerySection.vue'
import FeaturesSection from '~/components/home/FeaturesSection.vue'
import TestimonialsSection from '~/components/home/TestimonialsSection.vue'
import CTASection from '~/components/home/CTASection.vue'

const { t } = useI18n()

// SEO meta
useSeoMeta({
  title: t('homePage.meta.title'),
  description: t('homePage.meta.description')
})

defineOptions({
  name: 'HomePage'
})
</script>