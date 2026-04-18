import React, { useMemo } from 'react';
import { ARTICLES } from '../data/articles';
import { JEWELRY_TYPES } from '../data/categories';
import FadeUp from '../components/FadeUp';
import { getJewelryTypeIcon } from '../components/Icons';

/**
 * Faz 6.2 — JewelryTypeExplorer
 *
 * 4×3 grid of 12 jewelry type cards. Tapping a card applies the type filter
 * to AllArticles (via onSelectType prop) and smooth-scrolls into view.
 *
 * Only ~90 articles are tagged with jewelryType; the rest are unaffected
 * by this filter. Each card shows the live count of tagged articles for
 * that type so users understand scope before committing to a filter.
 */
export default function JewelryTypeExplorer({ lang, activeType, onSelectType }) {
  // Precompute per-type counts across the whole catalog.
  const counts = useMemo(() => {
    const c = Object.fromEntries(JEWELRY_TYPES.map(t => [t.id, 0]));
    ARTICLES.forEach(a => {
      (a.jewelryType || []).forEach(t => {
        if (c[t] !== undefined) c[t]++;
      });
    });
    return c;
  }, []);

  const headings = {
    tr: { title: 'Takı Tipi ile Keşfet', sub: 'Aradığın takı tipini seç — tüm metaller arasında filtrelenir' },
    en: { title: 'Explore by Jewelry Type', sub: 'Pick a type — filters across every material' },
    ar: { title: 'استكشف حسب نوع المجوهرات', sub: 'اختر النوع — يصفي جميع المعادن' },
  };
  const h = headings[lang] || headings.tr;

  const handleSelect = (typeId) => {
    onSelectType(activeType === typeId ? null : typeId);
    // Scroll to the articles section so the user sees the filter take effect
    setTimeout(() => {
      document.getElementById('articles-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  };

  return (
    <section className="section jt-section">
      <FadeUp>
        <div className="section-header">
          <h2 className="section-title">{h.title}</h2>
          <p className="section-sub" style={{ fontSize: '.88rem', color: 'var(--text3)', marginTop: 6 }}>{h.sub}</p>
        </div>
      </FadeUp>
      <FadeUp>
        <div className="jt-grid">
          {JEWELRY_TYPES.map(jt => {
            const count = counts[jt.id] || 0;
            const isActive = activeType === jt.id;
            const label = jt[lang] || jt.tr;
            return (
              <button
                key={jt.id}
                type="button"
                className={`jt-card${isActive ? ' active' : ''}`}
                data-type={jt.id}
                onClick={() => handleSelect(jt.id)}
                aria-pressed={isActive}
                aria-label={`${label} (${count})`}
              >
                <span className="jt-card-icon" aria-hidden="true">
                  {getJewelryTypeIcon(jt.icon, 26) || <span style={{ fontSize: '1.4rem' }}>{jt.emoji}</span>}
                </span>
                <span className="jt-card-label">{label}</span>
                <span className="jt-card-count">{count}</span>
              </button>
            );
          })}
        </div>
      </FadeUp>
    </section>
  );
}
