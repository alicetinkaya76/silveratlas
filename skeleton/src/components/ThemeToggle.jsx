import React, { useState, useEffect, createContext, useContext } from 'react';
const ThemeContext = createContext({ dark: true, toggle: () => {} });
export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);
  useEffect(() => { document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light'); }, [dark]);
  return <ThemeContext.Provider value={{ dark, toggle: () => setDark(p => !p) }}>{children}</ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);
export default function ThemeToggle() {
  const { dark, toggle } = useTheme();
  return <button onClick={toggle} className="theme-toggle" aria-label="Toggle theme">{dark ? '☀️' : '🌙'}</button>;
}
