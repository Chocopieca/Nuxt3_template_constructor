<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
    <AppHeader v-if="isComponentEnabled('header')" class="backdrop-blur-sm bg-white/80" />
    <AppNavigation v-if="isComponentEnabled('navigation')" class="backdrop-blur-sm bg-white/80" />
    
    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>

    <AppFooter v-if="isComponentEnabled('footer')" class="backdrop-blur-sm bg-white/80" />
    <HumanVerificationModal v-if="isFeatureEnabled('humanVerification')" />
    <CookieConsent v-if="isFeatureEnabled('cookieConsent')" />
  </div>
</template>

<script setup lang="ts">
import { useTemplate } from '~/templates/default/config/useTemplate'
import AppHeader from '~/templates/default/components/AppHeader.vue'
import AppNavigation from '~/templates/default/components/AppNavigation.vue'
import AppFooter from '~/templates/default/components/AppFooter.vue'
import HumanVerificationModal from '~/templates/default/components/HumanVerificationModal.vue'
import CookieConsent from '~/templates/default/components/CookieConsent.vue'

const { isComponentEnabled, isFeatureEnabled } = useTemplate()

defineOptions({
  name: 'ModernTemplateLayout'
})
</script> 