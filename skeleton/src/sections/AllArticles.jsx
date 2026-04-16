import React, { useState, useMemo } from 'react';
import { t } from '../i18n/translations';
import { ARTICLES } from '../data/articles';
import { CATEGORIES, MATERIALS } from '../data/categories';
import { getArticleContent } from '../data/articleContent';
import FadeUp from '../components/FadeUp';
import { getArticleIcon, getCatIcon, IconSearch } from '../components/Icons';

// Strip HTML for full-text search
function stripHtml(html) { return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').toLowerCase(); }

export default function AllArticles({ lang, onOpen, catFilter, setCatFilter, materialFilter, setMaterialFilter }) {
  const [query, setQuery] = useState('');

  // Filter categories by active material
  const visibleCategories = useMemo(() => {
    if (!materialFilter || materialFilter === 'all') return CATEGORIES;
    return CATEGORIES.filter(c => c.material === materialFilter || c.material === 'shared');
  }, [materialFilter]);

  const filtered = useMemo(() => {
    let list = ARTICLES;
    // Material filter
    if (materialFilter && materialFilter !== 'all') {
      list = list.filter(a => a.material === materialFilter || a.material === 'shared');
    }
    // Category filter
    if (catFilter) list = list.filter(a => a.cat === catFilter);
    // Full-text search: title + description + article body
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(a => {
        const titleDesc = `${a[lang]?.t} ${a[lang]?.d}`.toLowerCase();
        if (titleDesc.includes(q)) return true;
        // Search in body content
        const content = getArticleContent(a.id, a);
        const body = content?.[lang] || content?.tr || '';
        return stripHtml(body).includes(q);
      });
    }
    return list;
  }, [catFilter, materialFilter, query, lang]);

  // Count articles per material
  const matCounts = useMemo(() => {
    const counts = { all: ARTICLES.length, silver: 0, gold: 0, diamond: 0, gemstone: 0, platinum: 0 };
    ARTICLES.forEach(a => {
      if (a.material === 'silver' || a.material === 'shared') counts.silver++;
      if (a.material === 'gold' || a.material === 'shared') counts.gold++;
      if (a.material === 'diamond' || a.material === 'shared') counts.diamond++;
      if (a.material === 'gemstone' || a.material === 'shared') counts.gemstone++;
      if (a.material === 'platinum' || a.material === 'shared') counts.platinum++;
    });
    return counts;
  }, []);

  return (
    <section className="section" id="articles-section">
      <FadeUp><div className="section-header">
        <h2 className="section-title">{t(lang, 'sections.allArticles')}</h2>
        {filtered.length > 0 && (
          <div className="section-sub" style={{ fontFamily: 'var(--f-mono)', fontSize: '.78rem', color: 'var(--text3)', marginTop: 8 }}>
            {filtered.length} {lang === 'ar' ? 'مقال' : lang === 'tr' ? 'makale' : 'articles'}
          </div>
        )}
      </div></FadeUp>
      <FadeUp>
        {/* Material Tab Bar */}
        <div className="material-tabs">
          {MATERIALS.map(m => (
            <button
              key={m.id}
              className={`material-tab${(materialFilter || 'all') === m.id ? ' active' : ''}`}
              data-mat={m.id}
              onClick={() => {
                setMaterialFilter(m.id === 'all' ? null : m.id);
                setCatFilter(null);
              }}
            >
              <span className="mat-icon">{m.icon}</span>
              <span>{m[lang]}</span>
              <span className="mat-count">{matCounts[m.id] || 0}</span>
            </button>
          ))}
        </div>

        <div className="search-wrap">
          <span className="search-icon-svg"><IconSearch size={18} /></span>
          <input type="text" className="search-bar" value={query} onChange={e => setQuery(e.target.value)}
            placeholder={t(lang, 'search.placeholder')} autoComplete="off" />
        </div>
        <div className="chips">
          <button className={`chip${!catFilter ? ' active' : ''}`}
            data-mat={materialFilter || 'all'}
            onClick={() => setCatFilter(null)}>
            {t(lang, 'filter.all')}
          </button>
          {visibleCategories.map(cat => (
            <button key={cat.id}
              className={`chip${catFilter === cat.id ? ' active' : ''}`}
              data-mat={cat.material}
              onClick={() => setCatFilter(catFilter === cat.id ? null : cat.id)}>
              <span style={{ display: 'inline-flex', marginRight: 6, color: cat.co }}>{getCatIcon(cat.id, 16)}</span>
              {cat[lang]}
            </button>
          ))}
        </div>
        <div className="art-list stagger-grid">
          {filtered.length === 0 && <div className="no-result">{t(lang, 'search.noResult')}</div>}
          {filtered.map((a, ai) => {
            const cat = CATEGORIES.find(c => c.id === a.cat);
            const svgIcon = getArticleIcon(a.icon, 22, { color: cat?.co });
            const isGold = a.material === 'gold';
            return (
              <div className="art-item" key={a.id} onClick={() => onOpen(a)}
                style={{ '--cat-co': cat?.co, animationDelay: `${ai * 30}ms` }}
                role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && onOpen(a)}>
                <span className="art-icon">{svgIcon || a.icon}</span>
                <div className="art-info">
                  <div className="art-title">
                    {a[lang]?.t}
                    {isGold && <span style={{
                      display:'inline-block',marginLeft:6,fontSize:'.6rem',padding:'1px 6px',
                      borderRadius:6,background:'rgba(212,175,55,0.15)',color:'var(--gold)',
                      fontFamily:'var(--f-mono)',fontWeight:600,verticalAlign:'middle',lineHeight:'16px'
                    }}>Au</span>}
                    {a.material === 'diamond' && <span style={{
                      display:'inline-block',marginLeft:6,fontSize:'.6rem',padding:'1px 6px',
                      borderRadius:6,background:'rgba(185,242,255,0.15)',color:'#7DD3FC',
                      fontFamily:'var(--f-mono)',fontWeight:600,verticalAlign:'middle',lineHeight:'16px'
                    }}>💎</span>}
                    {a.material === 'gemstone' && <span style={{
                      display:'inline-block',marginLeft:6,fontSize:'.6rem',padding:'1px 6px',
                      borderRadius:6,background:'rgba(155,89,182,0.15)',color:'#C39BD3',
                      fontFamily:'var(--f-mono)',fontWeight:600,verticalAlign:'middle',lineHeight:'16px'
                    }}>💜</span>}
                    {a.material === 'platinum' && <span style={{
                      display:'inline-block',marginLeft:6,fontSize:'.6rem',padding:'1px 6px',
                      borderRadius:6,background:'rgba(229,228,226,0.2)',color:'#BCC6CC',
                      fontFamily:'var(--f-mono)',fontWeight:600,verticalAlign:'middle',lineHeight:'16px'
                    }}>Pt</span>}
                  </div>
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
