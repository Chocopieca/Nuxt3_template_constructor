<template>
  <Transition name="slide-up">
    <div v-if="showConsent" class="cookie-consent">
      <div class="cookie-consent__content">
        <div class="cookie-consent__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
            <path d="M8.5 8.5v.01"></path>
            <path d="M16 15.5v.01"></path>
            <path d="M12 12v.01"></path>
            <path d="M11 17v.01"></path>
            <path d="M7 14v.01"></path>
          </svg>
        </div>
        <div class="cookie-consent__text">
          <h3 class="font-orbitron text-xl font-bold">{{ t('cookieConsent.title') }}</h3>
          <p class="font-inter text-sm mt-2">{{ t('cookieConsent.description') }}</p>
        </div>
        <div class="cookie-consent__buttons">
          <button @click="acceptCookies" class="cookie-consent__button cookie-consent__button--accept">
            {{ t('cookieConsent.acceptButton') }}
          </button>
          <button @click="declineCookies" class="cookie-consent__button cookie-consent__button--decline">
            {{ t('cookieConsent.declineButton') }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const showConsent = ref(false)

// Проверяем, было ли уже принято решение
const checkCookieConsent = () => {
  const consent = localStorage.getItem('cookieConsent')
  if (!consent) {
    // Показываем баннер через 2 секунды после загрузки страницы
    setTimeout(() => {
      showConsent.value = true
    }, 2000)
  }
}

const saveConsent = (accepted: boolean) => {
  localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined')
  showConsent.value = false
}

const acceptCookies = () => {
  saveConsent(true)
  // Здесь можно добавить инициализацию аналитики и других сервисов
}

const declineCookies = () => {
  saveConsent(false)
  // Здесь можно добавить отключение необязательных сервисов
}

onMounted(() => {
  checkCookieConsent()
})
</script>

<style scoped>
.cookie-consent {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #2C2C54; /* nightfall */
  padding: 24px;
  border-radius: 16px;
  z-index: 1000;
  max-width: 90%;
  width: 400px;
  border: 1px solid #007AFF; /* sci-fi */
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 122, 255, 0.1),
    0 0 20px rgba(0, 122, 255, 0.1);
  backdrop-filter: blur(10px);
}

.cookie-consent__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;
}

.cookie-consent__icon {
  color: #FF3B30; /* accent */
  background: rgba(255, 59, 48, 0.1);
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 59, 48, 0.2);
}

.cookie-consent__text h3 {
  color: #FFFFFF; /* text */
  font-size: 1.25rem;
  line-height: 1.4;
}

.cookie-consent__text p {
  color: #8E8E93; /* text-secondary */
  font-size: 0.875rem;
  line-height: 1.5;
}

.cookie-consent__buttons {
  display: flex;
  gap: 12px;
  width: 100%;
  justify-content: center;
}

.cookie-consent__button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Rajdhani', sans-serif;
  transition: all 0.3s ease;
  min-width: 120px;
  position: relative;
  overflow: hidden;
}

.cookie-consent__button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.cookie-consent__button:hover::before {
  transform: translateX(100%);
}

.cookie-consent__button--accept {
  background: #FF3B30; /* accent */
  color: white;
  border: 1px solid rgba(255, 59, 48, 0.3);
}

.cookie-consent__button--accept:hover {
  background: #FF3B30; /* accent */
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 59, 48, 0.3);
}

.cookie-consent__button--decline {
  background: #8E8E93; /* metallic */
  color: white;
  border: 1px solid rgba(142, 142, 147, 0.3);
}

.cookie-consent__button--decline:hover {
  background: #8E8E93; /* metallic */
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(142, 142, 147, 0.3);
}

/* Анимации */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translate(-50%, 100%);
}

/* Адаптивность */
@media (max-width: 480px) {
  .cookie-consent {
    bottom: 0;
    left: 0;
    right: 0;
    transform: none;
    width: 100%;
    max-width: 100%;
    border-radius: 16px 16px 0 0;
    padding: 20px;
  }

  .cookie-consent__buttons {
    flex-direction: column;
  }

  .cookie-consent__button {
    width: 100%;
  }
}
</style> 