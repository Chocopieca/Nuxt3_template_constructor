<template>
  <footer class="bg-secondary-500 text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="space-y-4">
          <NuxtLink to="/" class="flex items-center space-x-2 group">
            <img src="/logo.png" alt="Logo" class="w-[200px] object-contain" />
          </NuxtLink>
          <p class="text-gray-300">
            {{ t('company.description') }}
          </p>
        </div>

        <!-- Footer Sections -->
        <template v-for="(section, index) in footerConfig.sections" :key="index">
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">{{ section.title }}</h3>
            <ul class="space-y-2">
              <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                <NuxtLink 
                  :to="link.to"
                  class="text-gray-300 hover:text-warning-500 transition-colors duration-200"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </template>
      </div>

      <!-- Newsletter Section -->
      <div v-if="newsletterConfig.enabled" class="mt-8">
        <h3 class="text-lg font-semibold mb-4">{{ t('components.newsletter.title') }}</h3>
        <form @submit.prevent="handleSubscribe" class="flex flex-col sm:flex-row gap-4">
          <input
            v-model="email"
            type="email"
            :placeholder="t('components.newsletter.placeholder')"
            class="flex-1 px-4 py-2 rounded-lg bg-secondary-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-warning-500"
            required
          />
          <button
            type="submit"
            class="cursor-pointer px-6 py-2 bg-warning-500 text-white rounded-lg hover:bg-warning-600 transition-colors duration-200"
          >
            {{ t('components.newsletter.buttonText') }}
          </button>
        </form>
      </div>

      <!-- Social Links & Copyright -->
      <div class="mt-12 pt-8 border-t border-secondary-600">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-300">{{ t('components.footer.copyright') }}</p>
          <div v-if="socilaNetworkEnabled" class="flex space-x-4">
            <a 
              v-for="(social, index) in footerConfig.social" 
              :key="index"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-300 hover:text-warning-500 transition-colors duration-200"
              :title="social.label"
            >
              <UIcon :name="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { footerConfig, newsletterConfig, socilaNetworkEnabled } from '~/config/site'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const email = ref('')
const router = useRouter()

const handleSubscribe = () => {
  // Here you would typically handle the email subscription
  // For now, we'll just redirect to the thank you page
  router.push('/thank-you')
}

defineOptions({
  name: 'AppFooter'
})
</script> 