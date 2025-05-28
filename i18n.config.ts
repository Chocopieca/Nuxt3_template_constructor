import en from './i18n/locales/en.js'
import pl from './i18n/locales/pl.js'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'pl',
    fallbackLocale: 'pl',
    messages: {
      en,
      pl
    },
    silentTranslationWarn: true,
    silentFallbackWarn: true,
    missingWarn: false,
    fallbackWarn: false
}))