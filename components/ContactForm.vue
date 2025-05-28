<template>
  <div :class="[
    theme === 'dark' 
      ? 'bg-background/30 backdrop-blur-sm border border-sci-fi/20' 
      : 'bg-white/10 backdrop-blur-sm',
    'p-8 rounded-2xl relative overflow-hidden'
  ]">
    <!-- Glowing Border Effect -->
    <div class="absolute inset-0 border border-accent/20 rounded-2xl"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-accent/5 to-sci-fi/5 rounded-2xl"></div>

    <form class="space-y-6 relative z-10" @submit.prevent="handleSubmit">
      <div v-for="(field, key) in formFields" :key="key" class="group">
        <label 
          :for="key" 
          :class="[
            'block text-sm font-subheading font-medium mb-2 transition-colors duration-300',
            theme === 'dark' ? 'text-text-secondary group-focus-within:text-accent' : 'text-gray-700'
          ]"
        >
          {{ t(`contact.form.${key}`) }}
        </label>
        <component
          :is="field.type === 'textarea' ? 'textarea' : 'input'"
          :id="key"
          v-model="form[key]"
          :type="field.type"
          :required="field.required"
          :rows="field.type === 'textarea' ? 4 : undefined"
          :class="[
            'w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300',
            theme === 'dark' 
              ? 'bg-background/50 border-sci-fi/30 text-white placeholder-text-secondary/50 focus:ring-accent/50 focus:border-accent/50' 
              : 'bg-white/10 border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-gray-500',
            { 'resize-none': field.type === 'textarea' }
          ]"
          :placeholder="t(`contact.form.placeholders.${key}`)"
        />
      </div>

      <button
        type="submit"
        :class="[
          'w-full px-6 py-3 rounded-lg font-subheading font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 relative overflow-hidden group',
          theme === 'dark'
            ? 'bg-accent text-white hover:bg-accent/90'
            : 'bg-gray-800 text-white hover:bg-gray-700'
        ]"
        class="cursor-pointer"
        :disabled="isSubmitting"
      >
        <!-- Button Background Effect -->
        <div class="absolute inset-0 bg-gradient-to-r from-accent to-sci-fi opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <!-- Loading Spinner -->
        <svg
          v-if="isSubmitting"
          class="animate-spin h-5 w-5 relative z-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        
        <!-- Button Text -->
        <span class="relative z-10">
          {{ isSubmitting ? t('contact.form.loading') : t('contact.form.submit') }}
        </span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  theme?: 'dark' | 'light'
}>()

const { t } = useI18n()
const theme = props.theme || 'dark'

const formFields = {
  name: { type: 'text', required: true },
  email: { type: 'email', required: true },
  title: { type: 'text', required: true },
  message: { type: 'textarea', required: true }
}

const form = ref({
  name: '',
  email: '',
  title: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    
    // Reset form after successful submission
    form.value = {
      name: '',
      email: '',
      title: '',
      message: ''
    }
    
    // Redirect to thank you page
    navigateTo('/thank-you')
  } catch (error) {
    console.error('Form submission error:', error)
    alert(t('contact.form.error'))
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
@keyframes spin {
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Glowing effect for focused inputs */
input:focus, textarea:focus {
  box-shadow: 0 0 15px rgba(255, 59, 48, 0.2);
}
</style> 