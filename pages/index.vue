<template>
  <div>
    <HeroSection v-if="isComponentEnabled('home')">
      <template #background>
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
          <img 
            src="/banner.jpg" 
            alt="Hero Background" 
            class="w-full h-full object-cover opacity-50"
          />
        </div>
      </template>
    </HeroSection>
    
    <BenefitsSection v-if="isComponentEnabled('home')" />
    <ServicesOverview v-if="isComponentEnabled('home')" />
    <TestimonialsSection v-if="isComponentEnabled('home')" />
    <CTASection v-if="isComponentEnabled('home')" />
  </div>
</template>

<script setup lang="ts">
import { useTemplate } from '~/templates/default/config/useTemplate'
import { useI18n } from 'vue-i18n'
import HeroSection from '~/templates/default/components/home/HeroSection.vue'
import ServicesOverview from '~/templates/default/components/home/ServicesOverview.vue'
import BenefitsSection from '~/templates/default/components/home/BenefitsSection.vue'
import TestimonialsSection from '~/templates/default/components/home/TestimonialsSection.vue'
import CTASection from '~/templates/default/components/home/CTASection.vue'

const { isComponentEnabled } = useTemplate()
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