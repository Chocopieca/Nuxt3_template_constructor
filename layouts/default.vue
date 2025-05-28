<template>
  <div class="min-h-screen flex flex-col bg-nightfall">
    <AppHeader />
    
    <main class="flex-grow">
      <slot />
    </main>

    <AppFooter />
    <HumanVerificationModal v-if="humanVerificationEnabled" />
    <CookieConsent v-if="cookieConsentConfig" />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import HumanVerificationModal from '~/components/HumanVerificationModal.vue'
import CookieConsent from '~/components/CookieConsent.vue'
import { humanVerificationEnabled, cookieConsentConfig } from '~/config/site'

defineOptions({
  name: 'DefaultLayout'
})
</script>

<style>
.bg-nightfall {
  background-color: #2C2C54;
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(0, 122, 255, 0.1) 0%, transparent 50%),
    linear-gradient(45deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  background-attachment: fixed;
}

/* Добавляем глобальные стили для анимаций */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>