import React, { useMemo } from 'react';
import { t } from '../i18n/translations';
import { ARTICLES, FEATURED_IDS, MATERIAL_FEATURED } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import FadeUp from '../components/FadeUp';
import { getArticleIcon } from '../components/Icons';

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
            const svgIcon = getArticleIcon(a.icon, 32, { color: cat?.co });
            const isGold = a.material === 'gold';
            return (
              <div className="feat-card" key={a.id} onClick={() => onOpen(a)} role="button" tabIndex={0}
                style={{ animationDelay: `${fi * 60}ms` }}
                onKeyDown={e => e.key === 'Enter' && onOpen(a)}>
                <div className="feat-top" style={{ background: `linear-gradient(135deg, ${cat?.co}22, ${cat?.co}08)` }}>
                  <span>{svgIcon || a.icon}</span>
                  <span className="feat-cat" style={{ background: cat?.co }}>{cat?.[lang]}</span>
                  {isGold && <span style={{
                    position:'absolute',top:8,left:8,fontSize:'.6rem',padding:'2px 6px',
                    borderRadius:6,background:'rgba(212,175,55,0.2)',color:'#D4AF37',
                    fontFamily:'var(--f-mono)',fontWeight:700
                  }}>Au</span>}
                  {a.material === 'diamond' && <span style={{
                    position:'absolute',top:8,left:8,fontSize:'.6rem',padding:'2px 6px',
                    borderRadius:6,background:'rgba(185,242,255,0.2)',color:'#7DD3FC',
                    fontFamily:'var(--f-mono)',fontWeight:700
                  }}>💎</span>}
                  {a.material === 'gemstone' && <span style={{
                    position:'absolute',top:8,left:8,fontSize:'.6rem',padding:'2px 6px',
                    borderRadius:6,background:'rgba(155,89,182,0.2)',color:'#C39BD3',
                    fontFamily:'var(--f-mono)',fontWeight:700
                  }}>💜</span>}
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
