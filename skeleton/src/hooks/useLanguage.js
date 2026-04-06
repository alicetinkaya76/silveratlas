import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const SUPPORTED_LANGS = ['tr', 'en', 'ar'];
const RTL_LANGS = ['ar'];

export function useLanguage() {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'tr';
  const isRTL = RTL_LANGS.includes(lang);

  const setLang = useCallback((newLang) => {
    if (SUPPORTED_LANGS.includes(newLang)) {
      i18n.changeLanguage(newLang);
      document.documentElement.dir = RTL_LANGS.includes(newLang) ? 'rtl' : 'ltr';
      document.documentElement.lang = newLang;
    }
  }, [i18n]);

  const fonts = {
    display: isRTL ? "'Noto Naskh Arabic', serif" : "'Playfair Display', serif",
    body: isRTL ? "'Noto Naskh Arabic', serif" : "'Source Sans 3', sans-serif",
    mono: "'JetBrains Mono', monospace",
  };

  return {
    lang,
    setLang,
    isRTL,
    fonts,
    supported: SUPPORTED_LANGS,
  };
}
