import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      welcome: "Salom Dunyo!",
      language: "Ru | Uz",
    },
  },
  ru: {
    translation: {
      welcome: "Привет, мир!",
      language: "Uz | Ru",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz", // Standart til
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
