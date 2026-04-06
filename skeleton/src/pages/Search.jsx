import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { articleRegistry } from '../data/articleRegistry';
import { toolRegistry } from '../data/toolRegistry';

export default function Search() {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState('');
  const isRTL = i18n.language === 'ar';
  const lang = i18n.language;

  const allItems = useMemo(() => [
    ...articleRegistry.map(a => ({ ...a, type: 'article' })),
    ...toolRegistry.map(t => ({ ...t, type: 'tool' })),
  ], []);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    return allItems.filter(item => {
      const title = (item.title?.[lang] || item.title?.tr || '').toLowerCase();
      const desc = (item.description?.[lang] || item.description?.tr || '').toLowerCase();
      const tags = (item.tags || []).join(' ').toLowerCase();
      return title.includes(q) || desc.includes(q) || tags.includes(q);
    });
  }, [query, allItems, lang]);

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} style={{ maxWidth: 720, margin: '0 auto', padding: '32px 20px' }}>
      <h1 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 28, fontWeight: 700, marginBottom: 8,
      }}>
        {t('search.title', 'Ara')}
      </h1>
      <p style={{ fontSize: 14, opacity: 0.7, marginBottom: 24 }}>
        {t('search.subtitle', 'Makaleler ve araçlar arasında arayın')}
      </p>

      <div style={{ position: 'relative', marginBottom: 32 }}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={t('search.placeholder', 'Gümüş hakkında bir şey arayın…')}
          style={{
            width: '100%', padding: '14px 20px 14px 44px', borderRadius: 12,
            border: '1px solid var(--border, rgba(192,192,192,0.1))',
            background: 'var(--bg-card, #16161c)', color: 'inherit',
            fontSize: 15, fontFamily: "'Source Sans 3', sans-serif",
            outline: 'none',
          }}
          autoFocus
        />
        <span style={{
          position: 'absolute', left: isRTL ? 'auto' : 16, right: isRTL ? 16 : 'auto',
          top: '50%', transform: 'translateY(-50%)', fontSize: 18, opacity: 0.4,
        }}>🔍</span>
      </div>

      {query.length >= 2 && (
        <div style={{ marginBottom: 16, fontSize: 13, opacity: 0.6 }}>
          {results.length} {t('search.results', 'sonuç bulundu')}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {results.map((item, i) => (
          <Link key={i} to={item.path || '#'} style={{
            textDecoration: 'none', color: 'inherit',
            padding: '16px 20px', borderRadius: 12,
            border: '1px solid var(--border, rgba(192,192,192,0.1))',
            background: 'var(--bg-card, #16161c)',
            display: 'block', transition: 'border-color 0.2s',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <span style={{
                padding: '2px 8px', borderRadius: 4, fontSize: 10, fontWeight: 600,
                background: item.type === 'article' ? 'rgba(212,175,55,0.1)' : 'rgba(192,192,192,0.1)',
                color: item.type === 'article' ? '#D4AF37' : '#C0C0C0',
              }}>
                {item.type === 'article' ? t('search.article', 'Makale') : t('search.tool', 'Araç')}
              </span>
              {item.category && (
                <span style={{ fontSize: 10, opacity: 0.5 }}>
                  {item.category[lang] || item.category.tr}
                </span>
              )}
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>
              {item.title?.[lang] || item.title?.tr}
            </div>
            <div style={{ fontSize: 13, opacity: 0.6, lineHeight: 1.5 }}>
              {item.description?.[lang] || item.description?.tr}
            </div>
          </Link>
        ))}
      </div>

      {query.length >= 2 && results.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px 0', opacity: 0.5 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
          <p>{t('search.noResults', 'Sonuç bulunamadı. Farklı anahtar kelimeler deneyin.')}</p>
        </div>
      )}
    </div>
  );
}
