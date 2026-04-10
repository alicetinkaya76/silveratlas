import React from 'react';
import { IconTrendUp } from './Icons';
import useSilverPrice from '../hooks/useSilverPrice';

const LABELS = {
  tr: { title: 'Canlı Gümüş Fiyatı', oz: 'USD/ons', g: 'USD/g', loading: 'Yükleniyor...', error: 'Fiyat alınamadı' },
  en: { title: 'Live Silver Price', oz: 'USD/oz', g: 'USD/g', loading: 'Loading...', error: 'Price unavailable' },
  ar: { title: 'سعر الفضة المباشر', oz: 'دولار/أونصة', g: 'دولار/غرام', loading: '...جار التحميل', error: 'السعر غير متاح' },
};

export default function LivePrice({ lang }) {
  const lp = useSilverPrice();
  const l = LABELS[lang] || LABELS.tr;
  const price = lp.silver;
  const pricePerGram = price ? (price / 31.1035).toFixed(2) : null;

  return (
    <div className="live-price">
      <div className="lp-header">
        <IconTrendUp size={18} style={{ color: 'var(--green)' }} />
        <span className="lp-title">{l.title}</span>
      </div>
      {!price ? (
        <div className="lp-loading">{lp.ts === 0 ? l.loading : l.error}</div>
      ) : (
        <div className="lp-data">
          <div className="lp-main">
            <span className="lp-price">${price.toFixed(2)}</span>
            <span className="lp-unit">{l.oz}</span>
          </div>
          <div className="lp-secondary">
            <span>${pricePerGram}</span>
            <span className="lp-unit">{l.g}</span>
          </div>
        </div>
      )}
    </div>
  );
}
