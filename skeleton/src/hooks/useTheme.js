import { useState, useEffect, useCallback } from 'react';

const THEME_KEY = 'silveratlas-theme';

export function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    const saved = window.localStorage?.getItem(THEME_KEY);
    if (saved) return saved === 'dark';
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    window.localStorage?.setItem(THEME_KEY, dark ? 'dark' : 'light');
  }, [dark]);

  const toggle = useCallback(() => setDark(prev => !prev), []);

  const colors = dark
    ? {
        bgMain: '#0f0f14', bgCard: '#16161c', bgNav: 'rgba(15,15,20,0.92)',
        textPrimary: '#e8e8e8', textSecondary: '#a0a0a0',
        border: 'rgba(192,192,192,0.1)',
        accent: '#C0C0C0', gold: '#D4AF37', navy: '#1a1a2e',
      }
    : {
        bgMain: '#fafaf5', bgCard: '#ffffff', bgNav: 'rgba(250,250,245,0.92)',
        textPrimary: '#1a1a2e', textSecondary: '#555555',
        border: 'rgba(0,0,0,0.06)',
        accent: '#C0C0C0', gold: '#D4AF37', navy: '#1a1a2e',
      };

  return { dark, toggle, colors };
}
