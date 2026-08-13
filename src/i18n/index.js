import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './locales/ru/index.js';
import en from './locales/en/index.js';
import ko from './locales/ko/index.js';

export const STORAGE_KEY = 'buro42-lang';

function detectLng() {
  // Only honor an explicit user choice. Do not infer from navigator.language —
  // Googlebot (and many crawlers) report en-*, which would overwrite the
  // Russian SEO title/description in index.html after hydration.
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s === 'ru' || s === 'en' || s === 'ko') return s;
  } catch {
    /* ignore */
  }
  return 'ru';
}

const lng = detectLng();

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
    ko: { translation: ko },
  },
  lng,
  fallbackLng: 'ru',
  interpolation: { escapeValue: false },
});

function applyLangToDocument(lang) {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = lang === 'ko' ? 'ko' : lang === 'en' ? 'en' : 'ru';
}

applyLangToDocument(lng);

i18n.on('languageChanged', (l) => {
  applyLangToDocument(l);
  try {
    localStorage.setItem(STORAGE_KEY, l);
  } catch {
    /* ignore */
  }
});

export default i18n;
