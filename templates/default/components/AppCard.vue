<template>
  <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AppCard'
})
</script> 