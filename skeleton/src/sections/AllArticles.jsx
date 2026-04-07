import React, { useState, useMemo } from 'react';
import { t } from '../i18n/translations';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import FadeUp from '../components/FadeUp';

export default function AllArticles({ lang, onOpen, catFilter, setCatFilter }) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let list = ARTICLES;
    if (catFilter) list = list.filter(a => a.cat === catFilter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(a => {
        const txt = `${a[lang]?.t} ${a[lang]?.d} ${a.icon}`.toLowerCase();
        return txt.includes(q);
      });
    }
    return list;
  }, [catFilter, query, lang]);

  return (
    <section className="section" id="articles-section">
      <FadeUp><div className="section-header"><h2 className="section-title">{t(lang, 'sections.allArticles')}</h2></div></FadeUp>
      <FadeUp>
        <div className="search-wrap">
          <input type="text" className="search-bar" value={query} onChange={e => setQuery(e.target.value)}
            placeholder={t(lang, 'search.placeholder')} autoComplete="off" />
        </div>
        <div className="chips">
          <button className={`chip${!catFilter ? ' active' : ''}`} onClick={() => setCatFilter(null)}>
            {t(lang, 'filter.all')}
          </button>
          {CATEGORIES.map(cat => (
            <button key={cat.id} className={`chip${catFilter === cat.id ? ' active' : ''}`}
              onClick={() => setCatFilter(catFilter === cat.id ? null : cat.id)}>
              {cat.i} {cat[lang]}
            </button>
          ))}
        </div>
        <div className="art-list">
          {filtered.length === 0 && <div className="no-result">{t(lang, 'search.noResult')}</div>}
          {filtered.map(a => {
            const cat = CATEGORIES.find(c => c.id === a.cat);
            return (
              <div className="art-item" key={a.id} onClick={() => onOpen(a)}
                role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && onOpen(a)}>
                <span className="art-icon">{a.icon}</span>
                <div className="art-info">
                  <div className="art-title">{a[lang]?.t}</div>
                  <div className="art-meta">
                    <span className="art-dot" style={{ background: cat?.co }} />
                    <span>{cat?.[lang]}</span>
                    <span>·</span>
                    <span>{a.min} {t(lang, 'article.min')}</span>
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
