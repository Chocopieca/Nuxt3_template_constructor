<template>
  <div>
    <div class="service-page">
      <div class="service-content">
        <h1 class="service-title">{{ t(`servicesPage.${slug}.title`) }}</h1>
        <p class="service-description">{{ t(`servicesPage.${slug}.description`) }}</p>
        <div class="content-wrapper">
          <template v-if="slug">
            <div v-for="(section, key) in tm(`servicesPage.${slug}.sections`)" :key="key" class="mb-8">
              <h2 class="text-2xl font-semibold mb-4">{{ rt(section.title) }}</h2>
              <p class="mb-4">{{ rt(section.content) }}</p>
              
              <div class="pl-4">
                <div v-for="(item, itemKey) in section.items" :key="itemKey" class="mb-4">
                  <strong class="block mb-2">{{ rt(item.title) }}</strong>
                  <p>{{ rt(item.description) }}</p>
                </div>
              </div>
            </div>

            <!-- Features Section -->
            <div class="features-section mt-8">
              <h2 class="text-2xl font-semibold mb-4">{{ t(`servicesPage.${slug}.features.title`) }}</h2>
              <ul class="features-list">
                <li v-for="(feature, index) in tm(`servicesPage.${slug}.features.items`)" :key="index" class="feature-item">
                  {{ rt(feature) }}
                </li>
              </ul>
            </div>

            <!-- CTA Section -->
            <div class="cta-section mt-8">
              <h2 class="text-2xl font-semibold mb-4">{{ t(`servicesPage.${slug}.cta.title`) }}</h2>
              <p class="mb-4">{{ t(`servicesPage.${slug}.cta.description`) }}</p>
              <NuxtLink 
                to="/contact" 
                class="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us
              </NuxtLink>
            </div>
          </template>
          <div v-else>Service not found</div>
        </div>
      </div>
      <div class="service-image">
        <img :src="serviceConfig?.image" :alt="serviceConfig?.alt" />
      </div>
    </div>

    <!-- Testimonials Section -->
    <TestimonialsSection />

    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<script setup>
import { servicesConfig } from '~/config/services'
import TestimonialsSection from '~/components/home/TestimonialsSection.vue'
import CTASection from '~/components/home/CTASection.vue'

const { t, tm, rt } = useI18n()
const route = useRoute()
const slug = computed(() => route.params.slug)

const serviceConfig = computed(() => servicesConfig[slug.value])

// SEO meta
useSeoMeta({
  title: () => t(`servicesPage.${slug.value}.meta.title`),
  description: () => t(`servicesPage.${slug.value}.meta.description`)
})
</script>

<style scoped>
.service-page {
  display: flex;
  gap: 4rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  color: #ffffff;
  position: relative;
  overflow: visible;
}

.service-content {
  flex: 1.2;
  min-height: 100vh;
}

.service-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #e03131;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.service-description {
  font-size: 1.25rem;
  color: #e0e0e0;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.content-wrapper {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #ffffff;
}

.features-section {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 8px;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  color: #e0e0e0;
}

.feature-item::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #e03131;
}

.cta-section {
  text-align: center;
  padding: 3rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.service-image {
  flex: 0.8;
  position: sticky;
  top: calc(80px + 2rem);
  height: fit-content;
  align-self: flex-start;
}

.service-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.service-image img:hover {
  transform: translateY(-5px);
}

@media (max-width: 1024px) {
  .service-page {
    gap: 2rem;
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .service-page {
    flex-direction: column;
    padding: 1.5rem;
  }
  
  .service-image {
    order: -1;
    position: relative;
    top: 0;
  }

  .service-title {
    font-size: 2rem;
  }

  .service-description {
    font-size: 1.1rem;
  }

  .features-section,
  .cta-section {
    padding: 1.5rem;
  }
}
</style>