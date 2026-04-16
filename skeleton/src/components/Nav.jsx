import React, { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { t } from '../i18n/translations';
import { IconMoon, IconSun } from './Icons';

const SECTIONS = ['explore', 'articles-section', 'tools-section', 'atlas-section', 'quran-section', 'sponsor-section'];
const NAV_KEYS = ['explore', 'articles', 'tools', 'atlas', 'quran', 'about'];

export default function Nav({ lang, dark, themeMode, cycleLang, toggleTheme, openMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(SECTIONS, 120);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const articleClose = document.querySelector('.ad.open .ad-back');
    if (articleClose) articleClose.click();
    const toolClose = document.querySelector('.tm.open .tm-close, .tm.open .tm-head button');
    if (toolClose) toolClose.click();

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, articleClose || toolClose ? 350 : 0);
  };

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main">
      <a href="#hero" className="nav-logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <span className="logo-circle">Ag<span style={{fontSize:7,opacity:.6}}>/Au</span><span style={{fontSize:6,opacity:.5}}>◆</span></span>
        <span>JewelPedi</span>
      </a>
      <div className="nav-links">
        {SECTIONS.map((id, idx) => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}
            onClick={(e) => scrollTo(e, id)}>
            {t(lang, `nav.${NAV_KEYS[idx]}`)}
          </a>
        ))}
      </div>
      <div className="nav-right">
        <button className="nav-btn lang-btn" onClick={cycleLang} aria-label="Change language">
          {lang.toUpperCase()}
        </button>
        <button className="nav-btn theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme"
          title={themeMode === 'auto' ? 'Auto' : themeMode === 'dark' ? 'Dark' : 'Light'}>
          {themeMode === 'auto' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" opacity=".4"/>
            </svg>
          ) : dark ? <IconMoon size={20} /> : <IconSun size={20} />}
        </button>
        <button className="hamburger" onClick={openMenu} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
