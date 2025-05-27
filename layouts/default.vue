<template>
  <div class="bg-secondary-500">
    <UApp>
      <NuxtRouteAnnouncer />
      <component 
        :is="templateLayout" 
        v-if="templateLayout"
      >
        <slot />
      </component>
    </UApp>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

// Здесь можно менять название шаблона
const templateName = 'default'

const templateLayout = computed(() => {
  return defineAsyncComponent(() => 
    import(`~/templates/${templateName}/layouts/default.vue`)
  )
})

defineOptions({
  name: 'DefaultLayout'
})
</script>