<template>
  <div>
    <!-- Company Description Section -->
    <section class="py-24 bg-white">
      <div class="container max-w-7xl mx-auto px-4">
        <!-- Main Title -->
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h1 class="text-5xl font-bold mb-8 text-gray-800">{{ t('aboutPage.meta.title') }}</h1>
          <p class="text-xl text-gray-600">{{ t('aboutPage.meta.description') }}</p>
        </div>

        <!-- Who We Are -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div class="space-y-6">
            <h2 class="text-3xl font-semibold text-gray-800">{{ t('aboutPage.whoWeAre.title') }}</h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ t('aboutPage.whoWeAre.description') }}
            </p>
          </div>
          <div class="relative h-80 rounded-lg overflow-hidden">
            <img 
              :src="aboutImages['Who We Are'].src" 
              :alt="aboutImages['Who We Are'].alt"
              class="w-full h-full object-cover"
            />
          </div> 
        </div>

        <!-- Mission & Vision -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div class="relative h-80 rounded-lg overflow-hidden order-2 md:order-1">
            <img 
              :src="aboutImages['Our Mission'].src" 
              :alt="aboutImages['Our Mission'].alt"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="space-y-6 order-1 md:order-2">
            <h2 class="text-3xl font-semibold text-gray-800">{{ t('aboutPage.mission.title') }}</h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ t('aboutPage.mission.description') }}
            </p>
            <h2 class="text-3xl font-semibold text-gray-800 mt-12">{{ t('aboutPage.vision.title') }}</h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ t('aboutPage.vision.description') }}
            </p>
          </div>
        </div>

        <!-- Values Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h2 class="text-3xl font-semibold text-gray-800">{{ t('aboutPage.values.title') }}</h2>
            <ul class="space-y-4">
              <li v-for="value in tm('aboutPage.values.items')" :key="value" class="flex items-start">
                <Icon :name="getAboutIcon(rt(value.title))" class="text-primary-500 text-2xl mr-3 mt-3" />
                <div>
                  <h3 class="font-semibold text-gray-800">{{ rt(value.title) }}</h3>
                  <p class="text-gray-600">{{ rt(value.description) }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="relative h-80 rounded-lg overflow-hidden">
            <img 
              :src="aboutImages['Our Values'].src" 
              :alt="aboutImages['Our Values'].alt"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <TestimonialsSection />

    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<script setup>
// Import components
import TestimonialsSection from '~/components/home/TestimonialsSection.vue'
import CTASection from '~/components/home/CTASection.vue'
import { aboutIcons, defaultIcons } from '~/config/icons'
import { aboutImages } from '~/config/about'

const { t, tm, rt } = useI18n()

// Helper function to get icon
const getAboutIcon = (iconKey) => {
  if (!iconKey) return defaultIcons.check
  return aboutIcons[iconKey] || defaultIcons.check
}

// SEO meta
useSeoMeta({
  title: () => t('aboutPage.meta.title'),
  description: () => t('aboutPage.meta.description')
})
</script>

<style>
.prose {
  max-width: 65ch;
  color: #4B5563; /* text-gray-600 */
}

.prose h1 {
  color: #1F2937; /* text-gray-800 */
  font-weight: 700;
  font-size: 2.25rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.prose h2 {
  color: #1F2937; /* text-gray-800 */
  font-weight: 600;
  font-size: 1.875rem;
  margin-top: 2em;
  margin-bottom: 1em;
}

.prose p {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  line-height: 1.75;
}

.prose ul {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  padding-left: 1.625em;
}

.prose li {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.prose strong {
  font-weight: 600;
  color: #1F2937;
}

.prose a {
  color: #DC2626; /* text-red-600 */
  text-decoration: none;
  font-weight: 500;
}

.prose a:hover {
  text-decoration: underline;
}
</style> 