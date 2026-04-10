import { useState, useEffect, useCallback } from 'react';

export function useLang() {
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem('sa-lang') || 'tr'; } catch { return 'tr'; }
  });

  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    try { localStorage.setItem('sa-lang', lang); } catch {}
  }, [lang, isRTL]);

  const setLang = useCallback((l) => setLangState(l), []);
  const cycle = useCallback(() => {
    setLangState(prev => prev === 'tr' ? 'en' : prev === 'en' ? 'ar' : 'tr');
  }, []);

  return { lang, setLang, cycle, isRTL };
}
