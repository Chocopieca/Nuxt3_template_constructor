<template>
  <section id="contact" class="cta-section py-24 bg-nightfall relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <!-- Glowing Orbs -->
    <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sci-fi/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

    <div class="container max-w-7xl mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left side - Contact Info -->
        <div class="text-center lg:text-left">
          <h2 class="text-4xl md:text-5xl font-heading font-bold mb-8 text-white glitch-text">
            {{ t('contact.title') }}
          </h2>
          
          <!-- Contact Info Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Address -->
            <div class="contact-card bg-background/30 backdrop-blur-sm p-6 rounded-lg border border-sci-fi/20 hover:border-sci-fi/40 transition-all duration-300">
              <div class="flex items-center gap-4 mb-4">
                <Icon name="i-heroicons-map-pin" class="text-accent text-2xl" />
                <h3 class="font-subheading font-semibold text-white">{{ t('contact.info.address') }}</h3>
              </div>
              <div class="space-y-2 text-text-secondary">
                <p>{{ contactConfig.location.address.street }}</p>
                <p>{{ contactConfig.location.address.city }}, {{ contactConfig.location.address.state }}</p>
                <p>{{ contactConfig.location.address.postcode }}</p>
                <p>{{ contactConfig.location.address.country }}</p>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="contact-card bg-background/30 backdrop-blur-sm p-6 rounded-lg border border-sci-fi/20 hover:border-sci-fi/40 transition-all duration-300">
              <div class="flex items-center gap-4 mb-4">
                <Icon name="i-heroicons-clock" class="text-accent text-2xl" />
                <h3 class="font-subheading font-semibold text-white !text-lg">{{ t('contact.info.businessHours') }}</h3>
              </div>
              <div class="space-y-2 text-text-secondary">
                <p>{{ contactConfig.workingHours.days }}</p>
                <p>{{ contactConfig.workingHours.hours }}</p>
                <p class="text-accent/80">{{ contactConfig.weekend.days }}: {{ contactConfig.weekend.status }}</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="contact-card bg-background/30 backdrop-blur-sm p-6 rounded-lg border border-sci-fi/20 hover:border-sci-fi/40 transition-all duration-300">
              <div class="flex items-center gap-4 mb-4">
                <Icon name="i-heroicons-phone" class="text-accent text-2xl" />
                <h3 class="font-subheading font-semibold text-white">{{ t('contact.info.phone') }}</h3>
              </div>
              <p class="text-text-secondary">{{ contactConfig.phone }}</p>
            </div>

            <!-- Email -->
            <div class="contact-card bg-background/30 backdrop-blur-sm p-6 rounded-lg border border-sci-fi/20 hover:border-sci-fi/40 transition-all duration-300">
              <div class="flex items-center gap-4 mb-4">
                <Icon name="i-heroicons-envelope" class="text-accent text-2xl" />
                <h3 class="font-subheading font-semibold text-white">{{ t('contact.info.email') }}</h3>
              </div>
              <p class="text-text-secondary">{{ contactConfig.email }}</p>
            </div>
          </div>
        </div>

        <!-- Right side - Contact form -->
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-accent/10 to-sci-fi/10 rounded-2xl blur-xl"></div>
          <ContactForm theme="dark" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContactForm from '../ContactForm.vue'
import { contactConfig } from '~/config/site'

const { t } = useI18n()
</script> 

<style scoped>
.cta-section {
  background: linear-gradient(135deg, var(--color-nightfall) 0%, var(--color-background) 100%);
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.delay-1000 {
  animation-delay: 1s;
}

.contact-card {
  transform: translateY(0);
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
}

/* Glowing effect for contact cards */
.contact-card {
  box-shadow: 0 0 15px rgba(255, 59, 48, 0.1);
  transition: box-shadow 0.3s ease;
}

.contact-card:hover {
  box-shadow: 0 0 25px rgba(255, 59, 48, 0.2);
}
</style> 