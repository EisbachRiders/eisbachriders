import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'
import en from './languages/en.json'
import de from './languages/de.json'

i18n
  .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    lng: 'en',
    fallbackLng: 'en', // use en if detected lng is not available
    resources: {
      en: {
        translation: en,
      },
      de: {
        translation: de,
      },
    },
    keySeparator: '.',
    react: {
      wait: false,
      withRef: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
