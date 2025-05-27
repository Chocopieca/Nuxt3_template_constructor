import en from './i18n/locales/en.js'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: en
    }
}))