import React from 'react';
import { t } from '../i18n/translations';

export default function Footer({ lang }) {
  return (
    <footer className="footer">
      <div>{t(lang, 'footer.version')}</div>
      <div>{t(lang, 'footer.license')}</div>
      <div>{t(lang, 'footer.sponsor')}</div>
      <div><a href="https://silveratlas.org">silveratlas.org</a></div>
    </footer>
  );
}
