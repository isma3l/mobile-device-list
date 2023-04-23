import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translation from './es/translation.json'

export const localeDefault = 'es'

export const resources = {
  es: {
    translation
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: localeDefault,
    fallbackLng: localeDefault,
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    resources
  })
