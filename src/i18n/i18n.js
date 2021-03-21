import i18n from "i18next"
import { initReactI18next } from "react-i18next"
// import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import en from "./languages/en.json"
import de from "./languages/de.json"

i18n
  // .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "de", // use en if detected lng is not available
    resources: {
      en: {
        translation: en,
      },
      de: {
        translation: de,
      },
    },
    keySeparator: ".",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
