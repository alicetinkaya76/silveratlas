import React, { useEffect, useRef, useMemo, useState, useCallback } from 'react';
import { t } from '../i18n/translations';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { getArticleContent } from '../data/articleContent';
import { getArticleIcon, IconChevronLeft, IconChevronRight, IconShare } from './Icons';

export default function ArticleDetail({ article, lang, onClose, onOpen }) {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState(null);
  const touchRef = useRef({ startX: 0, startY: 0 });

  useEffect(() => {
    if (!article) return;
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    setProgress(0); setLiked(null);
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    // Focus trap
    const el = scrollRef.current;
    if (el) {
      const focusable = el.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
      if (focusable.length) focusable[0].focus();
    }
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

  // Swipe left/right → prev/next article
  const handleTouchStart = useCallback((e) => {
    touchRef.current = { startX: e.touches[0].clientX, startY: e.touches[0].clientY };
  }, []);
  const handleTouchEnd = useCallback((e) => {
    if (!article) return;
    const dx = e.changedTouches[0].clientX - touchRef.current.startX;
    const dy = e.changedTouches[0].clientY - touchRef.current.startY;
    if (Math.abs(dx) > 80 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      const idx = ARTICLES.findIndex(a => a.id === article.id);
      if (dx < 0 && idx < ARTICLES.length - 1) onOpen(ARTICLES[idx + 1]);
      if (dx > 0 && idx > 0) onOpen(ARTICLES[idx - 1]);
    }
  }, [article, onOpen]);

  const html = useMemo(() => {
    if (!article) return '';
    const content = getArticleContent(article.id, article);
    return content?.[lang] || content?.tr || '';
  }, [article, lang]);

  const handleShare = useCallback(async () => {
    const title = article?.[lang]?.t || 'Silverpedi';
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
  const svgIcon = getArticleIcon(article.icon, 48, { color: cat?.co });

  return (
    <div className={`ad${article ? ' open' : ''}`} ref={scrollRef} role="dialog" aria-modal="true"
      aria-label={article?.[lang]?.t || 'Article'}
      dir={isRTL ? 'rtl' : 'ltr'}
      onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="reading-progress" style={{ width: `${progress}%` }} />

      <div className="ad-header">
        <button className="ad-back" onClick={onClose} aria-label={t(lang, 'article.back')}>
          {isRTL ? <IconChevronRight size={20} /> : <IconChevronLeft size={20} />}
        </button>
        <span className="ad-cat-badge" style={{ background: cat?.co }}>{cat?.[lang]}</span>
        <span style={{ flex: 1 }} />
        <button className="share-btn" onClick={handleShare} aria-label="Share">
          <IconShare size={18} />
        </button>
        <span style={{ fontSize: '.8rem', color: 'var(--text3)', fontFamily: 'var(--f-mono)' }}>
          {article.min} {t(lang, 'article.min')}
        </span>
      </div>

      <div className="ad-content" key={`${article.id}-${lang}`}>
        {/* Hero header with gradient */}
        <div className="ad-hero" style={{ '--cat-co': cat?.co || '#C0C0C0' }}>
          <span className="ad-hero-icon">{svgIcon || article.icon}</span>
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
            {t(lang, 'article.feedback')}
          </p>
          <div className="feedback-row">
            <button className={`feedback-btn${liked === true ? ' liked' : ''}`} onClick={() => setLiked(true)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 00-6 0v4H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-2a4 4 0 00-4-4h-3z"/></svg>
            </button>
            <button className={`feedback-btn${liked === false ? ' liked' : ''}`} onClick={() => setLiked(false)}
              style={liked === false ? { background: 'rgba(231,76,60,0.1)', borderColor: '#e74c3c', color: '#e74c3c' } : {}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: 'rotate(180deg)' }}><path d="M14 9V5a3 3 0 00-6 0v4H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-2a4 4 0 00-4-4h-3z"/></svg>
            </button>
          </div>
          {liked !== null && <p style={{ fontSize: '.85rem', color: 'var(--text3)', marginTop: 8 }}>{t(lang, 'article.thanks')}</p>}
        </div>

        {related.length > 0 && (
          <div className="ad-related">
            <h3>{t(lang, 'article.related')}</h3>
            <div className="ad-related-list">
              {related.map(r => {
                const rc = CATEGORIES.find(c => c.id === r.cat);
                const rIcon = getArticleIcon(r.icon, 22, { color: rc?.co });
                return (
                  <div className="art-item" key={r.id} onClick={() => onOpen(r)} role="button" tabIndex={0}>
                    <span className="art-icon">{rIcon || r.icon}</span>
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
