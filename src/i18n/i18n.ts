import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enTableBooking from "./locales/en/tableBooking.json";
import esTableBooking from "./locales/es/tableBooking.json";
import fiTableBooking from "./locales/fi/tableBooking.json";

i18next.use(initReactI18next).init({
  lng: "fi", // if you're using a language detector, do not define the lng option
  fallbackLng: "fi",
  supportedLngs: ["fi", "en", "es"],
  debug: true,
  resources: {
    en: {
      tableBooking: enTableBooking,
    },
    fi: {
      tableBooking: fiTableBooking,
    },
    es: {
      tableBooking: esTableBooking,
    },
  },
});

export default i18next;
