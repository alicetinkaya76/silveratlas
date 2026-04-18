import React, { useMemo } from 'react';
import { t } from '../i18n/translations';
import { ARTICLES, FEATURED_IDS, MATERIAL_FEATURED } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import FadeUp from '../components/FadeUp';
import { getMaterialThumbnail } from '../components/Icons';

export default function FeaturedArticles({ lang, onOpen, materialFilter }) {
  const featured = useMemo(() => {
    // Use material-specific featured list if a tab is selected
    if (materialFilter && materialFilter !== 'all' && MATERIAL_FEATURED[materialFilter]) {
      const ids = MATERIAL_FEATURED[materialFilter];
      return ids.map(id => ARTICLES.find(a => a.id === id)).filter(Boolean).slice(0, 12);
    }
    // Default: global featured list, filtered by material if needed
    let list = FEATURED_IDS.map(id => ARTICLES.find(a => a.id === id)).filter(Boolean);
    if (materialFilter && materialFilter !== 'all') {
      list = list.filter(a => a.material === materialFilter || a.material === 'shared');
    }
    return list;
  }, [materialFilter]);

  return (
    <section className="section">
      <FadeUp><div className="section-header"><h2 className="section-title">{t(lang, 'sections.featured')}</h2></div></FadeUp>
      <FadeUp>
        <div className="feat-row stagger-row">
          {featured.map((a, fi) => {
            const cat = CATEGORIES.find(c => c.id === a.cat);
            const isGold = a.material === 'gold';
            return (
              <div className="feat-card feat-card-thumbed" key={a.id} onClick={() => onOpen(a)} role="button" tabIndex={0}
                style={{ animationDelay: `${fi * 60}ms` }}
                onKeyDown={e => e.key === 'Enter' && onOpen(a)}>
                {/* Faz 7A — material-themed gradient hero replaces flat icon */}
                <div className="feat-top feat-top-thumbed">
                  <div className="feat-thumb-bg" aria-hidden="true">
                    {getMaterialThumbnail(a.material, a.cat, 264, `fc${a.id}`)}
                  </div>
                  <span className="feat-cat" style={{ background: cat?.co }}>{cat?.[lang]}</span>
                  {isGold && <span className="feat-mat-badge feat-mat-gold">Au</span>}
                  {a.material === 'diamond' && <span className="feat-mat-badge feat-mat-diamond">💎</span>}
                  {a.material === 'gemstone' && <span className="feat-mat-badge feat-mat-gemstone">💜</span>}
                  {a.material === 'platinum' && <span className="feat-mat-badge feat-mat-platinum">Pt</span>}
                  {a.material === 'silver' && <span className="feat-mat-badge feat-mat-silver">Ag</span>}
                </div>
                <div className="feat-body">
                  <div className="feat-title">{a[lang]?.t}</div>
                  <div className="feat-desc">{a[lang]?.d}</div>
                  <div className="feat-meta" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>{a.min} {t(lang, 'article.min')}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ opacity: 0.4 }}>
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </FadeUp>
    </section>
  );
}
