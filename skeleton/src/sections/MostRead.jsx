import React, { useMemo } from 'react';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { getViewCounts } from '../components/ArticleDetail';
import { getArticleIcon } from '../components/Icons';
import FadeUp from '../components/FadeUp';

export default function MostRead({ lang, onOpen }) {
  const topArticles = useMemo(() => {
    const views = getViewCounts();
    const entries = Object.entries(views).map(([id, count]) => ({ id: Number(id), count }));
    entries.sort((a, b) => b.count - a.count);
    return entries.slice(0, 8).map(e => ({
      article: ARTICLES.find(a => a.id === e.id),
      count: e.count,
    })).filter(e => e.article);
  }, []);

  // Don't render if not enough reading history
  if (topArticles.length < 3) return null;

  const L = {
    tr: { title: 'En Çok Okunanlar', sub: 'Sizin favorileriniz' },
    en: { title: 'Most Read', sub: 'Your favorites' },
    ar: { title: 'الأكثر قراءة', sub: 'مفضلاتك' }
  }[lang] || { title: 'Most Read', sub: 'Your favorites' };

  return (
    <section className="most-read" id="most-read-section">
      <FadeUp>
        <div className="most-read-title">{L.title}</div>
        <div className="most-read-sub">{L.sub}</div>
        <div className="most-read-grid">
          {topArticles.map((item, idx) => {
            const { article, count } = item;
            const cat = CATEGORIES.find(c => c.id === article.cat);
            const icon = getArticleIcon(article.icon, 28, { color: cat?.co });
            return (
              <div key={article.id} className="most-read-card" onClick={() => onOpen(article)} role="button" tabIndex={0}>
                <div className="most-read-rank">#{idx + 1}</div>
                <div className="most-read-icon">{icon || article.icon}</div>
                <div className="most-read-name">{article[lang]?.t}</div>
                <div className="most-read-meta">
                  <span className="art-dot" style={{ background: cat?.co, width: 6, height: 6, borderRadius: '50%', display: 'inline-block' }} />
                  <span>{cat?.[lang]}</span>
                  <span>·</span>
                  <span className="most-read-views">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    {count}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </FadeUp>
    </section>
  );
}
