import React from 'react';
import { t } from '../i18n/translations';

// Cross-link to children's site. Dev: kids runs on port 5173 with /kids/ basename.
// Prod: served from same domain at /kids/.
const KIDS_URL = import.meta.env.DEV
  ? 'http://localhost:5173/kids/'
  : '/kids/';

export default function Footer({ lang }) {
  return (
    <footer className="footer">
      <div style={{ marginBottom: 4 }}>{t(lang, 'footer.version')}</div>
      <div style={{ opacity: 0.7 }}>{t(lang, 'footer.license')}</div>
      <div style={{ marginTop: 4 }}>{t(lang, 'footer.sponsor')}</div>
      <div style={{ marginTop: 8 }}>
        <a
          href={KIDS_URL}
          style={{
            color: 'var(--silver, #C0C0C0)',
            textDecoration: 'none',
            fontSize: '0.9em',
            opacity: 0.85,
          }}
        >
          ✨ {t(lang, 'footer.kids')} →
        </a>
      </div>
    </footer>
  );
}
