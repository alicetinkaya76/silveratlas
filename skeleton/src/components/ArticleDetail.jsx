import React, { useEffect, useRef } from 'react';
import { t } from '../i18n/translations';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { getArticleContent } from '../data/articleContent';

export default function ArticleDetail({ article, lang, onClose, onOpen }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!article) return;
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [article, onClose]);

  if (!article) return null;

  const cat = CATEGORIES.find(c => c.id === article.cat);
  const related = ARTICLES.filter(a => a.cat === article.cat && a.id !== article.id).slice(0, 4);
  const content = getArticleContent(article.id, article);
  const html = content?.[lang] || content?.tr || '';

  return (
    <div className={`ad${article ? ' open' : ''}`} ref={scrollRef} role="dialog" aria-modal="true">
      <div className="ad-header">
        <button className="ad-back" onClick={onClose} aria-label={t(lang, 'article.back')}>
          {document.documentElement.dir === 'rtl' ? '→' : '←'}
        </button>
        <span className="ad-cat-badge" style={{ background: cat?.co }}>{cat?.[lang]}</span>
        <span style={{ flex: 1 }} />
        <span style={{ fontSize: '.8rem', color: 'var(--text3)', fontFamily: 'var(--f-mono)' }}>
          {article.min} {t(lang, 'article.min')}
        </span>
      </div>

      <div className="ad-content">
        <div style={{ textAlign: 'center', padding: '28px 0 24px', borderBottom: '1px solid var(--border)', marginBottom: 28 }}>
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: 12 }}>{article.icon}</span>
          <h2>{article[lang]?.t}</h2>
          <p className="ad-desc">{article[lang]?.d}</p>
          <div className="ad-time">
            <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: cat?.co, marginRight: 6 }} />
            {cat?.[lang]} · {article.min} {t(lang, 'article.min')}
          </div>
        </div>

        <div className="ad-body" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="ad-divider" />

        {related.length > 0 && (
          <div className="ad-related">
            <h3>{t(lang, 'article.related')}</h3>
            <div className="ad-related-list">
              {related.map(r => {
                const rc = CATEGORIES.find(c => c.id === r.cat);
                return (
                  <div className="art-item" key={r.id} onClick={() => onOpen(r)} role="button" tabIndex={0}>
                    <span className="art-icon">{r.icon}</span>
                    <div className="art-info">
                      <div className="art-title">{r[lang]?.t}</div>
                      <div className="art-meta">
                        <span className="art-dot" style={{ background: rc?.co }} />
                        <span>{rc?.[lang]}</span>
                        <span>·</span>
                        <span>{r.min} {t(lang, 'article.min')}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="sponsor-box" style={{ marginBottom: 40 }}>
          <div className="sponsor-badge">{t(lang, 'sponsor.badge')}</div>
          <div className="sponsor-name">{t(lang, 'sponsor.name')}</div>
          <p className="sponsor-text">{t(lang, 'sponsor.text')}</p>
          <a href="https://www.instagram.com/istanbulgumustr/" target="_blank" rel="noopener" className="sponsor-cta-btn">
            {t(lang, 'sponsor.cta')}
          </a>
        </div>
      </div>
    </div>
  );
}
