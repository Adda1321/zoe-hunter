import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./languages/english/en.json";
import spanish from "./languages/spanish/sp.json";

const resources = {
  en: {
    translation: english,
  },
  sp: {
    translation: spanish,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "sp",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
