<template>
  <section id="gameplay" class="py-24 bg-background relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <div class="container max-w-7xl mx-auto px-4 relative z-10">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl font-heading font-bold mb-16 text-white text-center glitch-text">
        {{ t('gameplay.title') }}
      </h2>

      <!-- Game Screenshots -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div 
          v-for="(screenshot, index) in tm('gameplay.sections.screenshots.items').slice(0, 2)" 
          :key="index"
          class="relative group overflow-hidden rounded-lg screenshot-card"
        >
          <NuxtImg 
            :src="screenshot.image"
            :alt="screenshot.alt"
            class="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-4 left-4 text-white">
              <h3 class="text-xl font-subheading font-semibold">{{ rt(screenshot.title) }}</h3>
              <p class="text-sm text-text-secondary">{{ rt(screenshot.description) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Game Mechanics -->
      <div class="mb-20">
        <h3 class="text-2xl md:text-3xl font-subheading font-semibold mb-8 text-accent typing-text-red">
          {{ t('gameplay.sections.mechanics.title') }}
        </h3>
        <p class="text-lg text-text-secondary max-w-3xl fade-in-text">
          {{ t('gameplay.sections.mechanics.content') }}
        </p>
      </div>

      <!-- Key Features -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(feature, key) in tm('gameplay.sections.features.items')" 
          :key="key"
          class="bg-nightfall/30 backdrop-blur-sm p-6 rounded-lg border border-sci-fi/20 hover:border-sci-fi/40 transition-colors duration-300 feature-card"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center feature-icon">
              <Icon 
                :name="getFeatureIcon(key)" 
                class="w-6 h-6 text-accent"
              />
            </div>
            <h4 class="text-xl font-subheading font-semibold text-white">
              {{ rt(feature.title) }}
            </h4>
          </div>
          <p class="text-text-secondary">
            {{ rt(feature.description) }}
          </p>
        </div>
      </div>

      <!-- Additional Screenshots -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        <div 
          v-for="(screenshot, index) in tm('gameplay.sections.screenshots.items').slice(2, 4)" 
          :key="index"
          class="relative group overflow-hidden rounded-lg screenshot-card"
        >
          <NuxtImg 
            :src="screenshot.image"
            :alt="screenshot.alt"
            class="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-4 left-4 text-white">
              <h3 class="text-xl font-subheading font-semibold">{{ rt(screenshot.title) }}</h3>
              <p class="text-sm text-text-secondary">{{ rt(screenshot.description) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()

const getFeatureIcon = (key: string) => {
  const icons = {
    '0': 'heroicons:fire',
    '1': 'heroicons:user-group',
    '2': 'heroicons:cube',
    '3': 'heroicons:shield-check'
  }
  return icons[key as keyof typeof icons] || 'heroicons:star'
}
</script> 