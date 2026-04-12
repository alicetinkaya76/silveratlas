import React from 'react';
import { t } from '../i18n/translations';

export default function Footer({ lang }) {
  return (
    <footer className="footer">
      <div style={{ marginBottom: 4 }}>{t(lang, 'footer.version')}</div>
      <div style={{ opacity: 0.7 }}>{t(lang, 'footer.license')}</div>
      <div style={{ marginTop: 4 }}>{t(lang, 'footer.sponsor')}</div>
    </footer>
  );
}
