import React, { useEffect, useRef, useMemo, useState, useCallback } from 'react';
import { t } from '../i18n/translations';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { getArticleContent } from '../data/articleContent';

export default function ArticleDetail({ article, lang, onClose, onOpen }) {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState(null);

  useEffect(() => {
    if (!article) return;
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    setProgress(0); setLiked(null);
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [article, onClose]);

  useEffect(() => {
    if (!article || !scrollRef.current) return;
    const el = scrollRef.current;
    const onScroll = () => {
      const pct = el.scrollTop / (el.scrollHeight - el.clientHeight) * 100;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [article]);

  const html = useMemo(() => {
    if (!article) return '';
    const content = getArticleContent(article.id, article);
    return content?.[lang] || content?.tr || '';
  }, [article, lang]);

  const handleShare = useCallback(async () => {
    const title = article?.[lang]?.t || 'SilverAtlas';
    const text = article?.[lang]?.d || '';
    if (navigator.share) {
      try { await navigator.share({ title, text, url: window.location.href }); } catch {}
    } else {
      navigator.clipboard?.writeText(window.location.href);
    }
  }, [article, lang]);

  if (!article) return null;

  const cat = CATEGORIES.find(c => c.id === article.cat);
  const related = ARTICLES.filter(a => a.cat === article.cat && a.id !== article.id).slice(0, 4);
  const isRTL = lang === 'ar';

  return (
    <div className={`ad${article ? ' open' : ''}`} ref={scrollRef} role="dialog" aria-modal="true"
      dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="reading-progress" style={{ width: `${progress}%` }} />

      <div className="ad-header">
        <button className="ad-back" onClick={onClose} aria-label={t(lang, 'article.back')}>
          {isRTL ? '→' : '←'}
        </button>
        <span className="ad-cat-badge" style={{ background: cat?.co }}>{cat?.[lang]}</span>
        <span style={{ flex: 1 }} />
        <button className="share-btn" onClick={handleShare} aria-label="Share">
          📤
        </button>
        <span style={{ fontSize: '.8rem', color: 'var(--text3)', fontFamily: 'var(--f-mono)' }}>
          {article.min} {t(lang, 'article.min')}
        </span>
      </div>

      <div className="ad-content" key={`${article.id}-${lang}`}>
        <div style={{ textAlign: 'center', padding: '28px 0 24px', borderBottom: '1px solid var(--border)', marginBottom: 28 }}>
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: 12 }}>{article.icon}</span>
          <h2>{article[lang]?.t}</h2>
          <p className="ad-desc">{article[lang]?.d}</p>
          <div className="ad-time">
            <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: cat?.co, marginInlineEnd: 6 }} />
            {cat?.[lang]} · {article.min} {t(lang, 'article.min')}
          </div>
        </div>

        <div className="ad-body" key={lang} dangerouslySetInnerHTML={{ __html: html }} />
        <div className="ad-divider" />

        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <p style={{ fontSize: '.95rem', color: 'var(--text2)', marginBottom: 12 }}>
            {lang === 'tr' ? 'Bu makaleyi beğendiniz mi?' : lang === 'en' ? 'Did you enjoy this article?' : 'هل أعجبك هذا المقال؟'}
          </p>
          <div className="feedback-row">
            <button className={`feedback-btn${liked === true ? ' liked' : ''}`} onClick={() => setLiked(true)}>👍</button>
            <button className={`feedback-btn${liked === false ? ' liked' : ''}`} onClick={() => setLiked(false)} style={liked === false ? { background: 'rgba(231,76,60,0.1)', borderColor: '#e74c3c', color: '#e74c3c' } : {}}>👎</button>
          </div>
          {liked !== null && <p style={{ fontSize: '.85rem', color: 'var(--text3)' }}>{lang === 'tr' ? 'Teşekkürler!' : 'Thanks!'}</p>}
        </div>

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
