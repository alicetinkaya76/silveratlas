import React, { useMemo } from 'react';
import { t } from '../i18n/translations';
import { CATEGORIES } from '../data/categories';
import { ARTICLES } from '../data/articles';
import FadeUp from '../components/FadeUp';
import { getCatIcon } from '../components/Icons';

export default function Categories({ lang, onFilter, materialFilter }) {
  // Filter categories by active material
  const visibleCats = useMemo(() => {
    if (!materialFilter || materialFilter === 'all') return CATEGORIES;
    return CATEGORIES.filter(c => c.material === materialFilter || c.material === 'shared');
  }, [materialFilter]);

  // Dynamic article counts per category (respecting material filter)
  const catCounts = useMemo(() => {
    const counts = {};
    ARTICLES.forEach(a => {
      if (materialFilter && materialFilter !== 'all') {
        if (a.material !== materialFilter && a.material !== 'shared') return;
      }
      counts[a.cat] = (counts[a.cat] || 0) + 1;
    });
    return counts;
  }, [materialFilter]);

  return (
    <section className="section">
      <FadeUp><div className="section-header"><h2 className="section-title">{t(lang, 'sections.categories')}</h2></div></FadeUp>
      <FadeUp>
        <div className="cat-grid stagger-grid">
          {visibleCats.map((cat, ci) => {
            const count = catCounts[cat.id] || 0;
            const isGold = cat.material === 'gold';
            return (
              <div className="cat-card" key={cat.id}
                onClick={() => onFilter(cat.id, cat.material)}
                role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && onFilter(cat.id, cat.material)}
                style={{ '--cat-color': cat.co, animationDelay: `${ci * 40}ms` }}>
                {isGold && <span style={{
                  position:'absolute',top:8,right:8,fontSize:'.55rem',padding:'1px 5px',
                  borderRadius:4,background:'rgba(212,175,55,0.12)',color:'var(--gold)',
                  fontFamily:'var(--f-mono)',fontWeight:700,letterSpacing:'.5px'
                }}>Au</span>}
                <span className="cat-icon" style={{ color: cat.co }}>{getCatIcon(cat.id, 28)}</span>
                <span className="cat-name">{cat[lang]}</span>
                <span className="cat-count" style={{ color: cat.co }}>{count}</span>
              </div>
            );
          })}
        </div>
      </FadeUp>
    </section>
  );
}
