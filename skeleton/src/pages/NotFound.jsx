import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} style={{
      minHeight: '60vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      padding: '40px 20px',
    }}>
      <div style={{
        width: 80, height: 80, borderRadius: '50%',
        background: 'linear-gradient(135deg, #C0C0C0, #D4AF37)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 32, fontWeight: 700, color: '#0f0f14',
        fontFamily: "'Playfair Display', serif", marginBottom: 24,
      }}>404</div>
      <h1 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 28, fontWeight: 700, marginBottom: 12,
      }}>
        {t('notFound.title', 'Sayfa Bulunamadı')}
      </h1>
      <p style={{ fontSize: 15, opacity: 0.7, marginBottom: 32, maxWidth: 400, lineHeight: 1.6 }}>
        {t('notFound.message', 'Aradığınız sayfa taşınmış veya mevcut değil. Ana sayfaya dönebilirsiniz.')}
      </p>
      <Link to="/" style={{
        padding: '12px 28px', borderRadius: 10,
        background: 'linear-gradient(135deg, #C0C0C0, #D4AF37)',
        color: '#0f0f14', fontSize: 14, fontWeight: 600,
        textDecoration: 'none', transition: 'transform 0.2s',
      }}>
        {t('notFound.backHome', '← Ana Sayfa')}
      </Link>
    </div>
  );
}
