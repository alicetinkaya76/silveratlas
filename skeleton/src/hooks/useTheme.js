import { useState, useEffect, useCallback } from 'react';

export function useTheme() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('sa-theme') !== 'light'; } catch { return true; }
  });

  useEffect(() => {
    const t = dark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('sa-theme', t); } catch {}
  }, [dark]);

  const toggle = useCallback(() => setDark(d => !d), []);
  return { dark, toggle };
}
