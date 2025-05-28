<template>
  <div class="flex items-center">
    <!-- Navigation -->
    <nav class="flex items-center space-x-6">
      <template v-for="(item, index) in items" :key="index">
        <UButton 
          :to="item.to"
          variant="link"
          :ui="{
            base: 'relative px-4 py-2 font-subheading'
          }"
          :class="[
            'text-text hover:text-accent active:text-secondary-accent transition-all duration-300',
            { 'text-accent': isActive(item.to) }
          ]"
        >
          {{ item.label }}
          <div 
            v-if="isActive(item.to)"
            class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-secondary-accent rounded-full transform origin-left transition-transform duration-300"
          />
          <div 
            v-else
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-secondary-accent rounded-full transform origin-left transition-all duration-300 group-hover:w-full"
          />
        </UButton>
      </template>

      <!-- CTA Button Slot -->
      <slot name="cta" />
    </nav>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const { items } = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const route = useRoute()

const isActive = (path) => {
  return route.path === path
}
</script>

<style scoped>
/* Анимация для подчеркивания */
@keyframes slideIn {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.transform {
  transform-origin: left;
  animation: slideIn 0.3s ease-out forwards;
}
</style> 