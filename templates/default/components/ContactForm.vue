<template>
  <div :class="[
    theme === 'purple' 
      ? 'bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700' 
      : 'bg-white/10 backdrop-blur-sm',
    'p-8 rounded-2xl'
  ]">
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div v-for="(field, key) in config.fields" :key="key">
        <label 
          :for="key" 
          :class="[
            'block text-sm font-medium mb-2',
            theme === 'purple' ? 'text-purple-100' : 'text-gray-700'
          ]"
        >
          {{ field.label }}
        </label>
        <component
          :is="field.type === 'textarea' ? 'textarea' : 'input'"
          v-model="form[key]"
          :type="field.type"
          :id="key"
          :required="field.required"
          :rows="field.type === 'textarea' ? 4 : undefined"
          :class="[
            'w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent',
            theme === 'purple' 
              ? 'bg-white/20 border-white/30 text-white placeholder-purple-200 focus:ring-white/50' 
              : 'bg-white/10 border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-gray-500',
            { 'resize-none': field.type === 'textarea' }
          ]"
          :placeholder="field.placeholder"
        />
      </div>

      <button
        type="submit"
        :class="[
          'w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2',
          theme === 'purple'
            ? 'bg-white text-purple-600 hover:bg-purple-50'
            : 'bg-gray-800 text-white hover:bg-gray-700'
        ]"
        :disabled="isSubmitting"
      >
        <svg
          v-if="isSubmitting"
          :class="[
            'animate-spin h-5 w-5',
            theme === 'purple' ? 'text-purple-600' : 'text-white'
          ]"
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
        <span :class="theme === 'purple' ? 'text-purple-600' : 'text-white'">
          {{ isSubmitting ? config.submitButton.loadingText : config.submitButton.text }}
        </span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { contactFormConfig } from '~/config/forms'
import { useI18n } from 'vue-i18n'

interface FormData {
  name: string
  email: string
  title: string
  message: string
}

const props = defineProps<{
  theme?: 'purple' | 'dark'
}>()

const { t } = useI18n()
const config = contactFormConfig
const theme = props.theme || 'purple'

const form = ref<FormData>({
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
    alert(t('components.navigation.errorMessage'))
  } finally {
    isSubmitting.value = false
  }
}

defineOptions({
  name: 'ContactForm'
})
</script> 