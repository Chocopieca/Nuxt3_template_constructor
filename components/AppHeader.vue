<template>
  <header class="bg-background sticky top-0 z-50 border-b border-metallic/10">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 group animate-pulse">
          <NuxtImg 
            src="/logo.jpg" 
            :alt="t('header.logo.name')" 
            class="object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
            width="200"
            loading="eager"
            quality="90"
          />
        </NuxtLink>

        <!-- Navigation -->
        <AppNavigation :items="navigationConfig">
          <template #cta>
            <NuxtLink to="#">
              <NuxtImg 
                src="/get-it-on-google-play-logo.png"
                alt="Get it on Google Play"
                class="object-contain animate-pulse"
                height="100px"
                loading="lazy"
              />
            </NuxtLink>
          </template>
        </AppNavigation>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { navigationConfig } from '~/config/site'

const { t } = useI18n()
</script>