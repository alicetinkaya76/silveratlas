import React from 'react';
import { t } from '../i18n/translations';
import FadeUp from '../components/FadeUp';

export default function SponsorCTA({ lang }) {
  return (
    <section className="sponsor" id="sponsor-section">
      <FadeUp>
        <div className="sponsor-box">
          <div className="sponsor-badge">{t(lang, 'sponsor.badge')}</div>
          <div className="sponsor-name">{t(lang, 'sponsor.name')}</div>
          <p className="sponsor-text">{t(lang, 'sponsor.text')}</p>
          <a href="https://www.instagram.com/istanbulgumustr/" target="_blank" rel="noopener" className="sponsor-cta-btn">
            {t(lang, 'sponsor.cta')}
          </a>
          <div className="sponsor-links">
            <a href="https://www.instagram.com/istanbulgumustr/" target="_blank" rel="noopener">@istanbulgumustr</a>
            <a href="https://www.instagram.com/istanbulgumuscom/" target="_blank" rel="noopener">@istanbulgumuscom</a>
            <a href="https://www.instagram.com/istanbulgumusmen/" target="_blank" rel="noopener">@istanbulgumusmen</a>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
