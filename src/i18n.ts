import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./lang/eng/en.json";
import uaTranslation from "./lang/ua/ua.json";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    uk: {
      translation: uaTranslation,
    },
  },
  lng: "uk",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
