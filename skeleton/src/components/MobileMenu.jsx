import React, { useEffect } from 'react';
import { t } from '../i18n/translations';
import { IconExplore, IconArticles, IconToolsNav, IconAtlas, IconQuranNav, IconMoon, IconSun, IconSparkle, IconX } from './Icons';

const LANGS = ['tr', 'en', 'ar'];
const LINKS = [
  { Icon: IconExplore, section: 'hero', key: 'explore' },
  { Icon: IconArticles, section: 'articles-section', key: 'articles' },
  { Icon: IconToolsNav, section: 'tools-section', key: 'tools' },
  { Icon: IconAtlas, section: 'atlas-section', key: 'atlas' },
  { Icon: IconQuranNav, section: 'quran-section', key: 'quran' },
  { Icon: IconSparkle, section: 'sponsor-section', key: 'about' },
];

export default function MobileMenu({ open, close, lang, setLang, dark, toggleTheme }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  const scrollTo = (e, id) => {
    e.preventDefault();
    close();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <div className={`mm${open ? ' open' : ''}`} role="dialog" aria-modal="true">
      <div className="mm-safe">
        <div className="mm-top">
          <span className="nav-logo" style={{ pointerEvents: 'none' }}>
            <span className="logo-circle">Ag</span>
            <span>SilverAtlas</span>
          </span>
          <button className="mm-close" onClick={close} aria-label={t(lang, 'menu.close')}>
            <IconX size={18} />
          </button>
        </div>
        <div className="mm-links">
          {LINKS.map(l => (
            <a key={l.key} href={`#${l.section}`} onClick={(e) => scrollTo(e, l.section)}>
              <l.Icon size={22} />
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
            {dark ? <IconMoon size={20} /> : <IconSun size={20} />}
            <span>{t(lang, 'menu.theme')}</span>
          </button>
          <a href="https://www.instagram.com/istanbulgumustr/" target="_blank" rel="noopener" className="mm-sponsor" onClick={close}>
            <IconSparkle size={20} style={{ color: 'var(--gold)' }} />
            <span>{t(lang, 'sponsor.name')}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
