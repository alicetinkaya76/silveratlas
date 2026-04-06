import React from 'react';
import { useTranslation } from 'react-i18next';
const LANGS = [
  { code: 'tr', label: 'TR', native: 'Türkçe' },
  { code: 'en', label: 'EN', native: 'English' },
  { code: 'ar', label: 'عر', native: 'العربية', font: "'Noto Naskh Arabic', serif" },
];
export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language || 'tr';
  return (
    <div className="lang-switcher">
      {LANGS.map(l => (
        <button key={l.code} onClick={() => { i18n.changeLanguage(l.code); document.documentElement.dir = l.code === 'ar' ? 'rtl' : 'ltr'; document.documentElement.lang = l.code; }}
          className={current === l.code ? 'active' : ''} title={l.native}
          style={{ fontFamily: l.font || 'inherit' }}>
          {l.label}
        </button>
      ))}
    </div>
  );
}
