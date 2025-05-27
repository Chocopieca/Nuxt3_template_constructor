<template>
  <Transition name="fade">
    <div v-if="!isAccepted" class="cookie-consent">
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
          <h3>{{ t('components.cookieConsent.title') }}</h3>
          <p>{{ t('components.cookieConsent.description') }}</p>
        </div>
        <div class="cookie-consent__buttons">
          <button @click="acceptCookies" class="cookie-consent__button cookie-consent__button--accept">
            {{ t('components.cookieConsent.acceptButton') }}
          </button>
          <button @click="declineCookies" class="cookie-consent__button cookie-consent__button--decline">
            {{ t('components.cookieConsent.declineButton') }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isAccepted = ref(false)

const acceptCookies = (): void => {
  isAccepted.value = true
}

const declineCookies = (): void => {
  isAccepted.value = true
}

defineOptions({
  name: 'CookieConsent'
})
</script>

<style scoped>
.cookie-consent {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-width: 90%;
  width: 400px;
}

.cookie-consent__content {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  text-align: center;
}

.cookie-consent__icon {
  color: #dc3545;
}

.cookie-consent__text h3 {
  margin: 0;
  color: #333;
  font-size: 1.2rem;
}

.cookie-consent__text p {
  margin: 8px 0 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
}

.cookie-consent__buttons {
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
}

.cookie-consent__button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;
  min-width: 120px;
}

.cookie-consent__button--accept {
  background: #dc3545;
  color: white;
}

.cookie-consent__button--accept:hover {
  background: #c82333;
}

.cookie-consent__button--decline {
  background: #6c757d;
  color: white;
}

.cookie-consent__button--decline:hover {
  background: #5a6268;
}

/* Анимации */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
    border-radius: 8px 8px 0 0;
  }

  .cookie-consent__buttons {
    flex-direction: column;
  }

  .cookie-consent__button {
    width: 100%;
  }
}
</style> 