import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header({ categories }) {
  const { t, i18n } = useTranslation();
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const lang = i18n.language || 'tr';
  const isRTL = lang === 'ar';

  const accent = dark ? '#C0C0C0' : '#708090';
  const gold = '#D4AF37';
  const bgNav = dark ? 'rgba(15,15,20,0.92)' : 'rgba(250,250,245,0.92)';
  const textP = dark ? '#e8e8ec' : '#2C2C2C';
  const textS = dark ? '#9a9aaa' : '#6B7280';
  const border = dark ? 'rgba(192,192,192,0.1)' : 'rgba(0,0,0,0.06)';
  const fontD = "'Playfair Display', Georgia, serif";
  const fontB = lang === 'ar' ? "'Noto Naskh Arabic', serif" : "'Source Sans 3', sans-serif";

  const switchLang = (newLang) => {
    i18n.changeLanguage(newLang);
    const path = location.pathname.replace(/^\/(tr|en|ar)/, `/${newLang}`);
    navigate(path);
  };

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.setAttribute('data-theme', dark ? 'light' : 'dark');
  };

  return (
    <nav dir={isRTL ? 'rtl' : 'ltr'} style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: bgNav, backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${border}`,
      padding: '0 24px', height: 56,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontFamily: fontB,
    }}>
      {/* Logo */}
      <Link to={`/${lang}`} style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: `linear-gradient(135deg, ${accent}, ${gold})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 700, color: '#0f0f14', fontFamily: fontD,
        }}>Ag</div>
        <div>
          <span style={{ fontFamily: fontD, fontWeight: 600, fontSize: 16, color: textP }}>{t('site.name')}</span>
          <span style={{ display: 'block', fontSize: 9, color: textS, letterSpacing: '0.04em' }}>{t('site.tagline')}</span>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {/* Category links (desktop) */}
        <div style={{ display: 'flex', gap: 4 }} className="desktop-nav">
          {Object.entries(categories).map(([key, cat]) => (
            <Link key={key} to={`/${lang}/${cat.slug}`} style={{
              fontSize: 12, color: textS, textDecoration: 'none', padding: '4px 8px',
              borderRadius: 4, transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = accent}
            onMouseLeave={e => e.target.style.color = textS}
            >{cat[lang] || cat.tr}</Link>
          ))}
        </div>

        {/* Tools Links */}
        <Link to={`/${lang}/harita`} style={{ fontSize: 12, color: textS, textDecoration: 'none' }}>🗺️</Link>
        <Link to={`/${lang}/zaman-cizelgesi`} style={{ fontSize: 12, color: textS, textDecoration: 'none' }}>📅</Link>

        {/* Language Switcher */}
        <div style={{
          display: 'flex', gap: 2,
          background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
          borderRadius: 7, padding: 2,
        }}>
          {['tr', 'en', 'ar'].map(l => (
            <button key={l} onClick={() => switchLang(l)} style={{
              border: 'none', cursor: 'pointer', padding: '3px 9px', borderRadius: 5,
              fontSize: 11, fontWeight: lang === l ? 600 : 400,
              fontFamily: l === 'ar' ? "'Noto Naskh Arabic', serif" : fontB,
              background: lang === l ? (dark ? 'rgba(192,192,192,0.15)' : 'rgba(0,0,0,0.08)') : 'transparent',
              color: lang === l ? textP : textS, transition: 'all 0.2s',
            }}>{l === 'ar' ? 'عر' : l.toUpperCase()}</button>
          ))}
        </div>

        {/* Theme Toggle */}
        <button onClick={toggleDark} style={{
          border: 'none', cursor: 'pointer', background: 'transparent',
          color: textS, fontSize: 16, padding: 4,
        }}>{dark ? '☀️' : '🌙'}</button>

        {/* Mobile menu toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{
          display: 'none', border: 'none', cursor: 'pointer',
          background: 'transparent', color: textS, fontSize: 20, padding: 4,
        }}>☰</button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
