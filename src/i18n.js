import i18n from "i18next";
import Backend from "i18next-http-backend"; 
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";



i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // lng: "en",
    // supportedLngs: ['en', 'zh'],
    // nonExplicitSupportedLngs: true,
    fallbackLng: "en",

    backend: {
        loadPath: '/dieta/locales/{{lng}}/{{ns}}.json'
    },
    // keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    debug: true // suggested. to get console logs
  });

  export default i18n;