<template>
  <section id="gallery" class="py-24 bg-background relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <div class="container max-w-7xl mx-auto px-4 relative z-10">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl font-heading font-bold mb-16 text-white text-center glitch-text">
        {{ t('gallery.title') }}
      </h2>

      <!-- Gallery Slider -->
      <div class="relative">
        <UCarousel
          :selected="currentSlide"
          :items="screenshots"
          arrows
          :ui="{
            root: 'relative focus:outline-none',
            viewport: 'overflow-hidden',
            container: 'flex transition-transform duration-500 ease-in-out',
            item: 'min-w-0 shrink-0 basis-full',
            controls: 'absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4',
            prev: 'bg-accent/20 hover:bg-accent/40 text-white rounded-full p-2 transition-colors duration-300',
            next: 'bg-accent/20 hover:bg-accent/40 text-white rounded-full p-2 transition-colors duration-300'
          }"
          @select="currentSlide = $event"
        >
          <template #default="{ item }">
            <div class="relative group overflow-hidden rounded-lg screenshot-card">
              <NuxtImg 
                :src="item.image"
                :alt="item.alt"
                class="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 text-white">
                  <h3 class="text-xl font-subheading font-semibold">{{ rt(item.title) }}</h3>
                  <p class="text-sm text-text-secondary">{{ rt(item.description) }}</p>
                </div>
              </div>
            </div>
          </template>
        </UCarousel>
      </div>

      <!-- Download Button -->
      <div class="mt-12 flex justify-center">
        <NuxtLink to="#">
            <NuxtImg 
            src="/get-it-on-google-play-logo.png"
            alt="Get it on Google Play"
            class="object-contain animate-pulse"
            height="200px"
            loading="lazy"
            />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()
const currentSlide = ref(0)

const screenshots = tm('gallery.screenshots.items').map((item, index) => ({
    image: `/img/screenshot_${index + 1}.webp`,
    alt: `Gameplay Screenshot ${index + 1}`,
    title: rt(item.title),
    description: rt(item.description)
}))
</script> 