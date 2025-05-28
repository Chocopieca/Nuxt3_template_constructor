<template>
  <section id="testimonials" class="py-24 bg-nightfall relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <div class="container max-w-7xl mx-auto px-4 relative z-10">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl font-heading font-bold mb-16 text-white text-center glitch-text">
        {{ t('testimonials.title') }}
      </h2>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in tm('testimonials.items')" 
          :key="index"
          class="testimonial-card bg-background/30 backdrop-blur-sm p-8 rounded-lg border border-sci-fi/20 hover:border-sci-fi/40 transition-all duration-300 relative"
        >
          <!-- Quote Icon -->
          <div class="absolute top-6 right-6 text-accent/20">
            <Icon name="heroicons:chat-bubble-left-right" class="w-8 h-8" />
          </div>

          <!-- Testimonial Content -->
          <div class="flex flex-col h-full">
            <!-- Avatar -->
            <div class="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6 mx-auto overflow-hidden">
              <div 
                class="w-full h-full bg-cover bg-center"
                :style="getAvatarStyle(index)"
              ></div>
            </div>

            <!-- Text -->
            <p class="text-text-secondary mb-6 flex-grow">
              "{{ rt(testimonial.text) }}"
            </p>

            <!-- Author -->
            <div class="text-white font-subheading font-semibold text-center">
              {{ rt(testimonial.name) }}
            </div>
          </div>

          <!-- Hover Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-accent/10 to-sci-fi/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()

const getAvatarStyle = (index) => {
  const avatars = {
    0: {
      backgroundImage: 'url(/img/characters.webp)',
      backgroundPosition: '10% 13%', // Первый персонаж
      backgroundSize: '600% 600%'
    },
    1: {
      backgroundImage: 'url(/img/characters.webp)',
      backgroundPosition: '47% 13%', // Второй персонаж
      backgroundSize: '600% 600%'
    },
    2: {
      backgroundImage: 'url(/img/characters.webp)',
      backgroundPosition: '84% 13%', // Третий персонаж
      backgroundSize: '600% 600%'
    }
  }
  return avatars[index] || avatars[0]
}
</script>

<style scoped>
.testimonial-card {
  transform: translateY(0);
  transition: transform 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

/* Добавляем эффект свечения для аватаров */
.w-20.h-20 {
  box-shadow: 0 0 15px rgba(255, 59, 48, 0.3);
  transition: box-shadow 0.3s ease;
}

.testimonial-card:hover .w-20.h-20 {
  box-shadow: 0 0 25px rgba(255, 59, 48, 0.5);
}
</style> 