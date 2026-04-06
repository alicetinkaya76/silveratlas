import React from 'react';
import { useTranslation } from 'react-i18next';
export default function MapPage({ lang }) {
  const { t } = useTranslation();
  return (
    <div className="map-page">
      <h1>{t('map.title', 'Dünya Gümüş Haritası')}</h1>
      <p>{t('map.subtitle', '500+ lokasyon: madenler, darphaneler, müzeler ve zanaat merkezleri')}</p>
      <div id="silver-map" className="map-container" style={{ height: '70vh', borderRadius: 16 }}>
        {/* Leaflet map initialized via useEffect */}
      </div>
    </div>
  );
}
