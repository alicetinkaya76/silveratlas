import React from 'react';
import { t } from '../i18n/translations';
import FadeUp from '../components/FadeUp';
import { IconSparkle } from '../components/Icons';

// SVG jewelry silhouette for visual richness
function JewelrySVG() {
  return (
    <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="sponsor-illust" aria-hidden="true">
      <defs>
        <linearGradient id="jewel-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#C0C0C0" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {/* Ring */}
      <ellipse cx="40" cy="50" rx="18" ry="20" stroke="url(#jewel-g)" strokeWidth="2.5" fill="none" />
      <circle cx="40" cy="30" r="6" stroke="url(#jewel-g)" strokeWidth="1.5" fill="none" />
      <path d="M34 30h12" stroke="url(#jewel-g)" strokeWidth="1" />
      {/* Bracelet chain */}
      <path d="M75 45q10-8 20 0t20 0t20 0t20 0t20 0" stroke="url(#jewel-g)" strokeWidth="2" fill="none"
        strokeDasharray="0" className="sponsor-chain" />
      {/* Pendant */}
      <line x1="160" y1="20" x2="160" y2="42" stroke="url(#jewel-g)" strokeWidth="1.5" />
      <path d="M150 42l10 18 10-18z" stroke="url(#jewel-g)" strokeWidth="1.5" fill="none" />
      <circle cx="160" cy="20" r="3" fill="url(#jewel-g)" opacity="0.5" />
    </svg>
  );
}

export default function SponsorCTA({ lang }) {
  return (
    <section className="sponsor" id="sponsor-section">
      <FadeUp>
        <div className="sponsor-box">
          <div className="sponsor-pattern" aria-hidden="true" />
          <JewelrySVG />
          <div className="sponsor-badge">{t(lang, 'sponsor.badge')}</div>
          <div className="sponsor-name">{t(lang, 'sponsor.name')}</div>
          <p className="sponsor-text">{t(lang, 'sponsor.text')}</p>
          <div className="sponsor-features">
            <span className="sponsor-feat">
              <IconSparkle size={14} style={{ color: 'var(--gold)' }} /> 925 Ayar
            </span>
            <span className="sponsor-feat">
              <IconSparkle size={14} style={{ color: 'var(--gold)' }} /> El İşçiliği
            </span>
            <span className="sponsor-feat">
              <IconSparkle size={14} style={{ color: 'var(--gold)' }} /> Konya
            </span>
          </div>
          <a href="https://www.instagram.com/istanbulgumustr/" target="_blank" rel="noopener" className="sponsor-cta-btn">
            {t(lang, 'sponsor.cta')}
          </a>
          <div className="sponsor-links">
            <a href="https://www.instagram.com/istanbulgumustr/" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: 4 }}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @istanbulgumustr
            </a>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
