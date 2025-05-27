<template>
  <section class="benefits-section py-24 bg-gray-100">
    <div class="container max-w-7xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-16 text-gray-800">{{ t('homePage.benefits.title') }}</h2>
      <div class="space-y-24">
        <!-- Benefit 1 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="text-yellow-500 text-5xl">
              <Icon :name="benefitsIcons['Business-Focused Design']" />
            </div>
            <h3 class="text-3xl font-semibold text-gray-800">{{ t('homePage.benefits.items.0.title') }}</h3>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ t('homePage.benefits.items.0.description') }}
            </p>
          </div>
          <div class="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              :src="benefitsImages[BENEFIT_IMAGES.BUSINESS_FOCUS].src"
              :alt="benefitsImages[BENEFIT_IMAGES.BUSINESS_FOCUS].alt"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Benefit 2 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6 md:order-2">
            <div class="text-yellow-500 text-5xl">
              <Icon :name="benefitsIcons['Australian Market Expertise']" />
            </div>
            <h3 class="text-3xl font-semibold text-gray-800">{{ t('homePage.benefits.items.1.title') }}</h3>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ t('homePage.benefits.items.1.description') }}
            </p>
          </div>
          <div class="relative h-80 bg-gray-200 rounded-lg overflow-hidden md:order-1">
            <img 
              :src="benefitsImages[BENEFIT_IMAGES.EXPERT_SOLUTIONS].src"
              :alt="benefitsImages[BENEFIT_IMAGES.EXPERT_SOLUTIONS].alt"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Benefit 3 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="text-yellow-500 text-5xl">
              <Icon :name="benefitsIcons['Innovative Solutions']" />
            </div>
            <h3 class="text-3xl font-semibold text-gray-800">{{ t('homePage.benefits.items.2.title') }}</h3>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ t('homePage.benefits.items.2.description') }}
            </p>
          </div>
          <div class="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              :src="benefitsImages[BENEFIT_IMAGES.INNOVATIVE_APPROACH].src"
              :alt="benefitsImages[BENEFIT_IMAGES.INNOVATIVE_APPROACH].alt"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { benefitsIcons, benefitsImages } from '~/config/site'
import { BENEFIT_IMAGES } from '~/constants/home'

const { t } = useI18n()

defineOptions({
  name: 'BenefitsSection'
})
</script> 