<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader v-if="isComponentEnabled('header')" />
    
    <main class="flex-grow">
      <slot />
    </main>

    <AppFooter v-if="isComponentEnabled('footer')" />
    <CookieConsent v-if="isFeatureEnabled('cookieConsent')" />
  </div>
</template>

<script setup lang="ts">
import { useTemplate } from '~/templates/default/config/useTemplate'
import AppHeader from '~/templates/default/components/AppHeader.vue'
import AppFooter from '~/templates/default/components/AppFooter.vue'
import CookieConsent from '~/templates/default/components/CookieConsent.vue'

const { isComponentEnabled, isFeatureEnabled } = useTemplate()

defineOptions({
  name: 'MinimalTemplateLayout'
})
</script> 