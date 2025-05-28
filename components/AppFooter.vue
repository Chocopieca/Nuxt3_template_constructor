<template>
  <footer class="bg-background text-text py-8 md:py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center space-y-8 md:flex-row md:justify-between md:space-y-0">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center group animate-pulse">
          <NuxtImg 
            src="/logo.jpg" 
            :alt="t('header.logo.name')" 
            class="object-contain transition-transform duration-300 group-hover:scale-105"
            width="300"
            loading="lazy"
          />
        </NuxtLink>

        <!-- Legal Links -->
        <div class="space-y-4 text-center md:text-left">
          <h3 class="text-lg font-semibold">{{ t('footer.sections.legal.title') }}</h3>
          <ul class="space-y-2">
            <li v-for="(link, linkIndex) in legalLinks" :key="linkIndex">
              <NuxtLink 
                :to="link.to"
                class="hover:text-primary transition-colors duration-200 text-secondary-text"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-8 border-t border-secondary-text/20 text-center">
        <p class="text-secondary-text">{{ t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { footerConfig } from '~/config/site'

const { t } = useI18n()

const legalLinks = footerConfig.sections.find(section => section.title === 'Legal').links
</script> 