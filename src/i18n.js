import i18n from "i18next";
import Backend from "i18next-http-backend"; 
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";



i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // supportedLngs: ['en', 'zh'],
    // nonExplicitSupportedLngs: true,
    fallbackLng: { 
      'zh-Hant': ['zh', 'en'],
      'default': ['en']
    },

    backend: {
        loadPath: '/dieta/locales/{{lng}}/{{ns}}.json'
    },

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    debug: true // suggested. to get console logs
  });

  export default i18n;