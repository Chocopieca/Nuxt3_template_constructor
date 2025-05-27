<template>
  <section class="cta-section py-24 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 text-white">
    <div class="container max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left side - Text content -->
        <div class="text-center lg:text-left">
          <h2 class="text-4xl md:text-5xl font-bold mb-8">{{ t('homePage.cta.title') }}</h2>
          <p class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto lg:mx-0 text-purple-100 leading-relaxed">
            {{ t('homePage.cta.description') }}
          </p>
          <NuxtLink to="/contact" class="inline-block bg-white text-purple-600 px-10 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
            {{ t('homePage.cta.buttonText') }}
          </NuxtLink>
        </div>

        <!-- Right side - Contact form -->
        <ContactForm theme="purple" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContactForm from '../ContactForm.vue'

const { t } = useI18n()

defineOptions({
  name: 'CTASection'
})
</script> 