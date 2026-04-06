import React from 'react';
import { useTranslation } from 'react-i18next';
export default function TimelinePage({ lang }) {
  const { t } = useTranslation();
  return (
    <div className="timeline-page">
      <h1>{t('timeline.title', 'Gümüş Zaman Çizelgesi')}</h1>
      <p>{t('timeline.subtitle', 'MÖ 5000\'den günümüze — 150+ olay')}</p>
      <div id="silver-timeline" className="timeline-container">
        {/* Timeline component */}
      </div>
    </div>
  );
}
