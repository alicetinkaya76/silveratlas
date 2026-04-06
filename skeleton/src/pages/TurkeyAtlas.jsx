import { useTranslation } from 'react-i18next';

export default function TurkeyAtlas() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} style={{ maxWidth: 960, margin: '0 auto', padding: '32px 20px' }}>
      <h1 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 8,
      }}>
        {t('turkeyAtlas.title', 'Türkiye Gümüş Atlası')}
      </h1>
      <p style={{ fontSize: 15, opacity: 0.7, marginBottom: 32, lineHeight: 1.6 }}>
        {t('turkeyAtlas.subtitle', '81 il bazında gümüş zanaat, üretim, maden ve kültür rehberi')}
      </p>

      {/* The standalone TurkeyAtlas tool component will be loaded here */}
      <div style={{
        padding: 40, borderRadius: 16, textAlign: 'center',
        border: '1px solid var(--border, rgba(192,192,192,0.1))',
        background: 'var(--bg-card, rgba(255,255,255,0.02))',
      }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🗺️</div>
        <p style={{ fontSize: 14, opacity: 0.6 }}>
          {t('turkeyAtlas.loadNote', 'İnteraktif Türkiye haritası yükleniyor…')}
        </p>
        <p style={{ fontSize: 12, opacity: 0.4, marginTop: 8 }}>
          silveratlas-turkey-atlas-tool.jsx
        </p>
      </div>
    </div>
  );
}
