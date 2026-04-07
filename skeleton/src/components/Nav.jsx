import React, { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { t } from '../i18n/translations';

const SECTIONS = ['explore', 'articles-section', 'tools-section', 'atlas-section', 'sponsor-section'];
const NAV_KEYS = ['explore', 'articles', 'tools', 'atlas', 'about'];

export default function Nav({ lang, dark, cycleLang, toggleTheme, openMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(SECTIONS, 120);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main">
      <a href="#hero" className="nav-logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <span className="logo-circle">Ag</span>
        <span>SilverAtlas</span>
      </a>
      <div className="nav-links">
        {SECTIONS.map((id, idx) => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
            {t(lang, `nav.${NAV_KEYS[idx]}`)}
          </a>
        ))}
      </div>
      <div className="nav-right">
        <button className="nav-btn lang-btn" onClick={cycleLang} aria-label="Change language">
          {lang.toUpperCase()}
        </button>
        <button className="nav-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {dark ? '🌙' : '☀️'}
        </button>
        <button className="hamburger" onClick={openMenu} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
