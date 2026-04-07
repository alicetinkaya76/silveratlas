import React from 'react';
import { t } from '../i18n/translations';
import { ARTICLES, FEATURED_IDS } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import FadeUp from '../components/FadeUp';
import { getArticleIcon } from '../components/Icons';

export default function FeaturedArticles({ lang, onOpen }) {
  const featured = FEATURED_IDS.map(id => ARTICLES.find(a => a.id === id)).filter(Boolean);

  return (
    <section className="section">
      <FadeUp><div className="section-header"><h2 className="section-title">{t(lang, 'sections.featured')}</h2></div></FadeUp>
      <FadeUp>
        <div className="feat-row">
          {featured.map(a => {
            const cat = CATEGORIES.find(c => c.id === a.cat);
            const svgIcon = getArticleIcon(a.icon, 32, { color: cat?.co });
            return (
              <div className="feat-card" key={a.id} onClick={() => onOpen(a)} role="button" tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && onOpen(a)}>
                <div className="feat-top" style={{ background: `linear-gradient(135deg, ${cat?.co}22, ${cat?.co}08)` }}>
                  <span>{svgIcon || a.icon}</span>
                  <span className="feat-cat" style={{ background: cat?.co }}>{cat?.[lang]}</span>
                </div>
                <div className="feat-body">
                  <div className="feat-title">{a[lang]?.t}</div>
                  <div className="feat-desc">{a[lang]?.d}</div>
                  <div className="feat-meta">{a.min} {t(lang, 'article.min')}</div>
                </div>
              </div>
            );
          })}
        </div>
      </FadeUp>
    </section>
  );
}
