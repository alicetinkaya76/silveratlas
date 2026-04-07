import React from 'react';
import { t } from '../i18n/translations';
import { CATEGORIES } from '../data/categories';
import FadeUp from '../components/FadeUp';
import { getCatIcon } from '../components/Icons';

export default function Categories({ lang, onFilter }) {
  return (
    <section className="section">
      <FadeUp><div className="section-header"><h2 className="section-title">{t(lang, 'sections.categories')}</h2></div></FadeUp>
      <FadeUp>
        <div className="cat-grid">
          {CATEGORIES.map(cat => (
            <div className="cat-card" key={cat.id} onClick={() => onFilter(cat.id)}
              role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && onFilter(cat.id)}
              style={{ '--cat-color': cat.co }}>
              <span className="cat-icon" style={{ color: cat.co }}>{getCatIcon(cat.id, 28)}</span>
              <span className="cat-name">{cat[lang]}</span>
              <span className="cat-count" style={{ color: cat.co }}>{cat.c}</span>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
