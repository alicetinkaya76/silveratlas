import React, { useEffect } from 'react';
import { t } from '../i18n/translations';

const LANGS = ['tr', 'en', 'ar'];
const LINKS = [
  { icon: '🏠', section: '#hero', key: 'explore' },
  { icon: '📖', section: '#articles-section', key: 'articles' },
  { icon: '🛠️', section: '#tools-section', key: 'tools' },
  { icon: '🗺️', section: '#atlas-section', key: 'atlas' },
  { icon: '💫', section: '#sponsor-section', key: 'about' },
];

export default function MobileMenu({ open, close, lang, setLang, dark, toggleTheme }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  return (
    <div className={`mm${open ? ' open' : ''}`} role="dialog" aria-modal="true">
      <div className="mm-safe">
        <div className="mm-top">
          <span className="nav-logo" style={{ pointerEvents: 'none' }}>
            <span className="logo-circle">Ag</span>
            <span>SilverAtlas</span>
          </span>
          <button className="mm-close" onClick={close} aria-label={t(lang, 'menu.close')}>✕</button>
        </div>
        <div className="mm-links">
          {LINKS.map(l => (
            <a key={l.key} href={l.section} onClick={close}>
              <span>{l.icon}</span>
              <span>{t(lang, `nav.${l.key}`)}</span>
            </a>
          ))}
        </div>
        <div className="mm-bottom">
          <div className="mm-langs">
            {LANGS.map(l => (
              <button key={l} className={lang === l ? 'active' : ''} onClick={() => { setLang(l); close(); }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="mm-theme" onClick={() => { toggleTheme(); close(); }}>
            <span>{dark ? '🌙' : '☀️'}</span>
            <span>{t(lang, 'menu.theme')}</span>
          </button>
          <a href="https://www.instagram.com/istanbulgumustr/" target="_blank" rel="noopener" className="mm-sponsor" onClick={close}>
            <span>💫</span>
            <span>{t(lang, 'sponsor.name')}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
