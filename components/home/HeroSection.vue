<template>
  <section class="hero-section relative min-h-screen flex items-center py-24 overflow-hidden">
    <!-- Background with Sci-fi Effect -->
    <div class="absolute inset-0 bg-gradient-to-br from-background via-nightfall to-background">
      <div class="absolute inset-0 opacity-20">
        <div class="grid-pattern"></div>
      </div>
      <div class="parallax-container">
        <slot name="background"></slot>
      </div>
    </div>
    
    <!-- Content -->
    <div class="container max-w-7xl mx-auto px-4 relative z-10">
      <div class="max-w-4xl">
        <!-- Title with Glitch Effect -->
        <h1 class="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight text-white glitch-text">
          {{ t('homePage.hero.title') }}
        </h1>
        
        <!-- Description with Typing Effect -->
        <p class="text-xl md:text-2xl mb-12 text-text-secondary font-body typing-text">
          {{ t('homePage.hero.description') }}
        </p>

        <div class="flex">
          <NuxtLink to="#">
            <NuxtImg 
              src="/get-it-on-google-play-logo.png"
              alt="Get it on Google Play"
              class="object-contain animate-pulse"
              width="200px"
              loading="lazy"
            />
          </NuxtLink>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="heroicons:chevron-down" class="w-8 h-8 text-text-secondary" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useParallax } from '~/composables/useParallax'

const { t } = useI18n()
useParallax()
</script>

<style scoped>
.parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform;
}

.parallax-container :deep(img) {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%) scale(1.1);
  transition: transform 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);
}

/* Grid Pattern */
.grid-pattern {
  background-image: 
    linear-gradient(to right, var(--color-sci-fi) 1px, transparent 1px),
    linear-gradient(to bottom, var(--color-sci-fi) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.1;
  width: 100%;
  height: 100%;
}

/* Glitch Effect */
.glitch-text {
  position: relative;
  text-shadow: 0.05em 0 0 var(--color-accent),
               -0.05em -0.025em 0 var(--color-secondary-accent),
               -0.025em 0.05em 0 var(--color-sci-fi);
  animation: glitch 500ms infinite;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 var(--color-accent),
                 -0.05em -0.025em 0 var(--color-secondary-accent),
                 -0.025em 0.05em 0 var(--color-sci-fi);
  }
  14% {
    text-shadow: 0.05em 0 0 var(--color-accent),
                 -0.05em -0.025em 0 var(--color-secondary-accent),
                 -0.025em 0.05em 0 var(--color-sci-fi);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 var(--color-accent),
                 0.025em 0.025em 0 var(--color-secondary-accent),
                 -0.05em -0.05em 0 var(--color-sci-fi);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 var(--color-accent),
                 0.025em 0.025em 0 var(--color-secondary-accent),
                 -0.05em -0.05em 0 var(--color-sci-fi);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 var(--color-accent),
                 0.05em 0 0 var(--color-secondary-accent),
                 0 -0.05em 0 var(--color-sci-fi);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 var(--color-accent),
                 0.05em 0 0 var(--color-secondary-accent),
                 0 -0.05em 0 var(--color-sci-fi);
  }
  100% {
    text-shadow: -0.025em 0 0 var(--color-accent),
                 -0.025em -0.025em 0 var(--color-secondary-accent),
                 -0.025em -0.05em 0 var(--color-sci-fi);
  }
}

/* Typing Effect */
.typing-text {
  border-right: 2px solid var(--color-sci-fi);
  white-space: nowrap;
  overflow: hidden;
  animation: typing 3.5s steps(40, end),
             blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: var(--color-sci-fi) }
}

@media (prefers-reduced-motion: no-preference) {
  .parallax-container {
    transform: translateY(var(--scroll-offset, 0));
  }
}

/* Добавляем плавность при скролле */
.hero-section {
  scroll-behavior: smooth;
}
</style> 