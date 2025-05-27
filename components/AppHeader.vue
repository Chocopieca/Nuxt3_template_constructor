<template>
  <header class="bg-secondary-500 sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-30">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 group">
          <img src="/logo.png" :alt="t('company.name')" class="w-[150px] h-[150px] object-contain" />
        </NuxtLink>

        <!-- Navigation -->
        <AppNavigation>
          <template #cta>
            <UButton
              to="/contact"
              color="warning"
              variant="solid"
              class="ml-4"
            >
              {{ t('components.header.ctaButton') }}
            </UButton>
          </template>
        </AppNavigation>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
// Navigation config is imported in AppNavigation component
</script>

<style scoped>
.backdrop-blur-md {
  backdrop-filter: blur(12px);
}
</style> 