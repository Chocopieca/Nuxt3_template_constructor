<template>
  <section id="features" class="py-24 bg-background relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <div class="container max-w-7xl mx-auto px-4 relative z-10">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl font-heading font-bold mb-16 text-white text-center glitch-text">
        {{ t('features.title') }}
      </h2>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(feature, index) in tm('features.items')" 
          :key="index"
          class="feature-card bg-nightfall/30 backdrop-blur-sm p-6 rounded-lg border border-sci-fi/20 hover:border-sci-fi/40 transition-all duration-300"
        >
          <!-- Feature Icon -->
          <div class="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 feature-icon">
            <Icon 
              :name="getFeatureIcon(index)" 
              class="w-8 h-8 text-accent"
            />
          </div>

          <!-- Feature Content -->
          <h3 class="text-xl font-subheading font-semibold text-white mb-4">
            {{ rt(feature.title) }}
          </h3>
          <p class="text-text-secondary">
            {{ rt(feature.description) }}
          </p>

          <!-- Hover Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-accent/10 to-sci-fi/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()

const getFeatureIcon = (index) => {
  const icons = {
    0: 'heroicons:device-phone-mobile', // Новая версия
    1: 'heroicons:user-group', // Персонажи
    2: 'heroicons:fire', // Противники
    3: 'heroicons:academic-cap', // Профессии
    4: 'heroicons:map', // Карты
    5: 'heroicons:cube' // Оружие
  }
  return icons[index] || 'heroicons:star'
}
</script> 