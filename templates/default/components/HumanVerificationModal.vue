<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isVisible" class="human-verification-overlay">
        <div class="human-verification-modal">
          <h2 class="text-2xl font-bold mb-4 text-gray-800">{{ t('components.humanVerification.title') }}</h2>
          <p class="mb-6 text-gray-600">{{ t('components.humanVerification.description') }}</p>
          <button
            @click="verifyHuman"
            class="cursor-pointer bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full"
          >
            {{ t('components.humanVerification.buttonText') }}
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { humanVerificationEnabled } from '~/config/site'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const isVisible = ref(false)
const hasShown = ref(false)
const scrollThreshold = 300 // Показывать модальное окно после прокрутки на 300px

// Функция для управления скроллом
const toggleScrollLock = (lock: boolean): void => {
  if (lock) {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`
  } else {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }
}

const handleScroll = (): void => {
  if (!hasShown.value && window.scrollY > scrollThreshold) {
    isVisible.value = true
    hasShown.value = true
  }
}

const verifyHuman = (): void => {
  isVisible.value = false
}

// Следим за изменением видимости модального окна
watch(isVisible, (newValue) => {
  toggleScrollLock(newValue)
})

onMounted(() => {
  if (humanVerificationEnabled) {
    window.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  // Убедимся, что скролл разблокирован при размонтировании компонента
  toggleScrollLock(false)
})

defineOptions({
  name: 'HumanVerificationModal'
})
</script>

<style scoped>
.human-verification-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
}

.human-verification-modal {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  max-width: 90%;
  width: 400px;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 