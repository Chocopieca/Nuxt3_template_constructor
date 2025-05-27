<template>
  <div class="contact-page py-24 bg-gray-50">
    <div class="container max-w-7xl mx-auto px-4">
      <!-- Main Title -->
      <div class="max-w-4xl mx-auto text-center mb-16">
        <h1 class="text-5xl font-bold mb-8 text-gray-800">{{ t('contactPage.title') }}</h1>
        <p class="text-xl text-gray-600">{{ t('contactPage.description') }}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-6 gap-8">
        <!-- Contact Info Cards -->
        <div class="lg:col-span-2 flex flex-col gap-6">
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex-1">
            <div class="flex flex-col h-full">
              <div class="flex items-center gap-4 mb-6">
                <Icon name="i-heroicons-map-pin" class="text-primary-500 text-3xl flex-shrink-0" />
                <h3 class="font-semibold text-gray-800 text-lg">{{ t('contactPage.info.address') }}</h3>
              </div>
              <div class="space-y-2">
                <p class="text-gray-600 text-base leading-relaxed">{{ contactConfig.location.address.street }}</p>
                <p class="text-gray-600 text-base leading-relaxed">
                  {{ contactConfig.location.address.city }} {{ contactConfig.location.address.state }} {{ contactConfig.location.address.postcode }}
                </p>
                <p class="text-gray-600 text-base leading-relaxed">{{ contactConfig.location.address.country }}</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex-1">
            <div class="flex flex-col h-full">
              <div class="flex items-center gap-4 mb-6">
                <Icon name="i-heroicons-clock" class="text-primary-500 text-3xl flex-shrink-0" />
                <h3 class="font-semibold text-gray-800 text-lg">{{ t('contactPage.info.businessHours') }}</h3>
              </div>
              <div class="space-y-2">
                <p class="text-gray-600 text-base leading-relaxed">
                  {{ contactConfig.workingHours.days }}: {{ contactConfig.workingHours.hours }}
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex-1">
            <div class="flex flex-col h-full">
              <div class="flex items-center gap-4 mb-6">
                <Icon name="i-heroicons-phone" class="text-primary-500 text-3xl flex-shrink-0" />
                <h3 class="font-semibold text-gray-800 text-lg">{{ t('contactPage.info.phone') }}</h3>
              </div>
              <div class="space-y-2">
                <p class="text-gray-600 text-base leading-relaxed">{{ contactConfig.phone }}</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex-1">
            <div class="flex flex-col h-full">
              <div class="flex items-center gap-4 mb-6">
                <Icon name="i-heroicons-envelope" class="text-primary-500 text-3xl flex-shrink-0" />
                <h3 class="font-semibold text-gray-800 text-lg">{{ t('contactPage.info.email') }}</h3>
              </div>
              <div class="space-y-2">
                <p class="text-gray-600 text-base leading-relaxed">{{ contactConfig.email }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-4">
          <div class="bg-white p-8 rounded-xl shadow-sm h-full">
            <div class="mb-8">
              <h2 class="text-3xl font-semibold text-gray-800 mb-4">{{ t('components.contactForm.title') }}</h2>
              <p class="text-gray-600 text-lg leading-relaxed">{{ t('components.contactForm.description') }}</p>
            </div>
            <ContactForm theme="dark" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { contactConfig } from '~/config/site'
import ContactForm from '~/components/ContactForm.vue'

const { t } = useI18n()

// SEO meta
useSeoMeta({
  title: () => t('contactPage.meta.title'),
  description: () => t('contactPage.meta.description')
})
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
}
</style> 