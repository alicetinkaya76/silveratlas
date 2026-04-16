import { useState, useEffect, useCallback } from 'react';

// mode: 'dark' | 'light' | 'auto'
function getSystemDark() {
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? true;
}

export function useTheme() {
  const [mode, setMode] = useState(() => {
    try { return localStorage.getItem('jp-theme-mode') || 'dark'; } catch { return 'dark'; }
  });

  const dark = mode === 'auto' ? getSystemDark() : mode === 'dark';

  useEffect(() => {
    const t = dark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('jp-theme-mode', mode); } catch {}
  }, [dark, mode]);

  // Listen for system theme changes when in auto mode
  useEffect(() => {
    if (mode !== 'auto') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      document.documentElement.setAttribute('data-theme', mq.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [mode]);

  // Cycle: dark → light → auto → dark
  const toggle = useCallback(() => {
    setMode(prev => prev === 'dark' ? 'light' : prev === 'light' ? 'auto' : 'dark');
  }, []);

  return { dark, mode, toggle };
}
