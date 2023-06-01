import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import it from './locales/it.json';

let language = localStorage.getItem('language');

if (language === undefined) {
  language = 'it';
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translations: en },
    it: { translations: it },
  },
  fallbackLng: 'it',
  lng: 'it',
  debug: process.env.NODE_ENV !== 'production',
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
});

export default i18n;