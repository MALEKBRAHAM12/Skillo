import { initReactI18next } from 'react-i18next';

//languages

import english from './languages/en.json';
import french from './languages/fr.json';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: english,
            },
            fr: {
                translation: french,
            },

        },
        fallbackLng: 'en',
        detection: {
            order: ['localStorage', 'cookie', 'htmlTag'],
            caches: ['localStorage', 'cookie'],
        },
    });

export default i18n;