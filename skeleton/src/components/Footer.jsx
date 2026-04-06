import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'tr';
  const isRTL = lang === 'ar';

  const social = [
    { label: '@istanbulgumustr', url: 'https://instagram.com/istanbulgumustr', icon: '📸' },
    { label: '@istanbulgumuscom', url: 'https://instagram.com/istanbulgumuscom', icon: '🛍️' },
    { label: '@istanbulgumusmen', url: 'https://instagram.com/istanbulgumusmen', icon: '👔' },
  ];

  return (
    <footer dir={isRTL ? 'rtl' : 'ltr'} style={{
      borderTop: '1px solid rgba(192,192,192,0.1)',
      padding: '40px 24px 24px',
      background: 'rgba(15,15,20,0.5)',
      color: '#9a9aaa',
      fontFamily: lang === 'ar' ? "'Noto Naskh Arabic', serif" : "'Source Sans 3', sans-serif",
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Sponsor Bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 16, flexWrap: 'wrap', marginBottom: 32,
          padding: '16px 24px', borderRadius: 12,
          background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.1)',
        }}>
          <span style={{ fontSize: 12 }}>{t('sponsor.badge')}</span>
          <span style={{ fontWeight: 600, color: '#D4AF37', fontSize: 14 }}>{t('sponsor.name')}</span>
          <span style={{ fontSize: 12, opacity: 0.6 }}>|</span>
          <span style={{ fontSize: 12 }}>{t('sponsor.tagline')}</span>
          <div style={{ display: 'flex', gap: 8 }}>
            {social.map(s => (
              <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" style={{
                fontSize: 11, color: '#9a9aaa', textDecoration: 'none',
                padding: '3px 8px', borderRadius: 4,
                background: 'rgba(192,192,192,0.05)',
              }}>{s.icon} {s.label}</a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap',
          marginBottom: 20, fontSize: 12,
        }}>
          <Link to={`/${lang}`} style={{ color: '#9a9aaa', textDecoration: 'none' }}>{t('nav.home')}</Link>
          <Link to={`/${lang}/harita`} style={{ color: '#9a9aaa', textDecoration: 'none' }}>{t('nav.map')}</Link>
          <Link to={`/${lang}/zaman-cizelgesi`} style={{ color: '#9a9aaa', textDecoration: 'none' }}>{t('nav.timeline')}</Link>
          <Link to={`/${lang}/araclar`} style={{ color: '#9a9aaa', textDecoration: 'none' }}>{t('nav.tools')}</Link>
          <Link to={`/${lang}/hakkinda`} style={{ color: '#9a9aaa', textDecoration: 'none' }}>{t('nav.about')}</Link>
        </div>

        {/* Copyright */}
        <div style={{ textAlign: 'center', fontSize: 11, opacity: 0.6 }}>
          {t('footer.copyright')} · {t('footer.author')} · {t('footer.sponsor')}
        </div>
      </div>
    </footer>
  );
}
