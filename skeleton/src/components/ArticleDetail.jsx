import React, { useEffect, useRef, useMemo, useState, useCallback } from 'react';
import { t } from '../i18n/translations';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { getArticleContent, loadArticleContent } from '../data/articleContent';
import { getArticleIcon, IconChevronLeft, IconChevronRight, IconShare } from './Icons';
import { getSponsor } from '../data/sponsors';

// Favorites helpers
function getFavorites() { try { return JSON.parse(localStorage.getItem('jp_favorites') || '[]'); } catch { return []; } }
function toggleFavorite(id) {
  const favs = getFavorites();
  const next = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id];
  localStorage.setItem('jp_favorites', JSON.stringify(next));
  return next;
}
// Reading history helpers
function getHistory() { try { return JSON.parse(localStorage.getItem('jp_history') || '[]'); } catch { return []; } }
function addToHistory(id) {
  const hist = getHistory().filter(h => h !== id);
  hist.unshift(id);
  localStorage.setItem('jp_history', JSON.stringify(hist.slice(0, 30)));
}

// Comment system helpers (localStorage)
function getComments(articleId) {
  try { return JSON.parse(localStorage.getItem(`jp_comments_${articleId}`) || '[]'); } catch { return []; }
}
function addComment(articleId, name, text) {
  const comments = getComments(articleId);
  comments.push({ id: Date.now(), name: name.trim() || '👤', text: text.trim(), date: new Date().toISOString() });
  localStorage.setItem(`jp_comments_${articleId}`, JSON.stringify(comments.slice(-50)));
  return comments;
}

// Comparison cross-links: article ID → [partner article IDs with comparison context]
const COMPARISON_MAP = {
  1: [{ id: 74, label: { tr: 'Altın ile karşılaştır', en: 'Compare with Gold', ar: 'قارن مع الذهب' } }],
  3: [{ id: 137, label: { tr: 'Platin dahil karşılaştır', en: 'Compare with Platinum', ar: 'قارن مع البلاتين' } }],
  5: [{ id: 24, label: { tr: 'Fiziksel özellikler', en: 'Physical properties', ar: 'الخصائص الفيزيائية' } }],
  8: [{ id: 81, label: { tr: 'Altın yatırım rehberi', en: 'Gold investment guide', ar: 'دليل استثمار الذهب' } }, { id: 139, label: { tr: 'Platin yatırım', en: 'Platinum investment', ar: 'استثمار البلاتين' } }],
  9: [{ id: 92, label: { tr: '2026 altın piyasası', en: '2026 gold market', ar: 'سوق الذهب ٢٠٢٦' } }],
  20: [{ id: 77, label: { tr: 'Altın damgaları', en: 'Gold hallmarks', ar: 'أختام الذهب' } }],
  55: [{ id: 91, label: { tr: 'Altın bakım rehberi', en: 'Gold care guide', ar: 'دليل العناية بالذهب' } }, { id: 142, label: { tr: 'PGM bakım', en: 'PGM care', ar: 'العناية بالبلاتين' } }],
  66: [{ id: 91, label: { tr: 'Altın bakım', en: 'Gold care', ar: 'العناية بالذهب' } }],
  74: [{ id: 1, label: { tr: 'Gümüş ile karşılaştır', en: 'Compare with Silver', ar: 'قارن مع الفضة' } }, { id: 135, label: { tr: 'Platin ile karşılaştır', en: 'Compare with Platinum', ar: 'قارن مع البلاتين' } }],
  76: [{ id: 80, label: { tr: 'Ayar numaraları', en: 'Purity numbers', ar: 'أرقام العيار' } }],
  81: [{ id: 8, label: { tr: 'Gümüş yatırım', en: 'Silver investment', ar: 'استثمار الفضة' } }, { id: 139, label: { tr: 'Platin yatırım', en: 'Platinum investment', ar: 'استثمار البلاتين' } }],
  91: [{ id: 55, label: { tr: 'Gümüş bakım', en: 'Silver care', ar: 'العناية بالفضة' } }, { id: 142, label: { tr: 'PGM bakım', en: 'PGM care', ar: 'العناية بالبلاتين' } }],
  95: [{ id: 103, label: { tr: 'Lab-Grown karşılaştır', en: 'Compare Lab-Grown', ar: 'قارن المختبر' } }, { id: 186, label: { tr: 'Pırlanta bakım', en: 'Diamond care', ar: 'العناية بالألماس' } }],
  103: [{ id: 95, label: { tr: 'Doğal elmas', en: 'Natural diamond', ar: 'الألماس الطبيعي' } }, { id: 104, label: { tr: 'Zirkon & Moissanite', en: 'Zirconia & Moissanite', ar: 'الزركون والمويسانيت' } }],
  // Stone profiles → jewelry/care guides & mineral families
  110: [{ id: 111, label: { tr: 'Yakut karşılaştır', en: 'Compare Ruby', ar: 'قارن مع الياقوت' } }, { id: 112, label: { tr: 'Safir karşılaştır', en: 'Compare Sapphire', ar: 'قارن مع الياقوت الأزرق' } }, { id: 188, label: { tr: 'Beryl ailesi', en: 'Beryl family', ar: 'عائلة البريل' } }],
  111: [{ id: 110, label: { tr: 'Zümrüt karşılaştır', en: 'Compare Emerald', ar: 'قارن مع الزمرد' } }, { id: 112, label: { tr: 'Safir karşılaştır', en: 'Compare Sapphire', ar: 'قارن مع الياقوت الأزرق' } }, { id: 189, label: { tr: 'Korundum ailesi', en: 'Corundum family', ar: 'عائلة الكوراندوم' } }],
  112: [{ id: 110, label: { tr: 'Zümrüt karşılaştır', en: 'Compare Emerald', ar: 'قارن مع الزمرد' } }, { id: 111, label: { tr: 'Yakut karşılaştır', en: 'Compare Ruby', ar: 'قارن مع الياقوت' } }, { id: 189, label: { tr: 'Korundum ailesi', en: 'Corundum family', ar: 'عائلة الكوراندوم' } }],
  113: [{ id: 190, label: { tr: 'Kuvars ailesi', en: 'Quartz family', ar: 'عائلة الكوارتز' } }],
  116: [{ id: 188, label: { tr: 'Beryl ailesi', en: 'Beryl family', ar: 'عائلة البريل' } }],
  119: [{ id: 190, label: { tr: 'Kuvars ailesi', en: 'Quartz family', ar: 'عائلة الكوارتز' } }],
  127: [{ id: 198, label: { tr: 'Renk değiştiren taşlar', en: 'Color-changing gems', ar: 'أحجار متغيرة اللون' } }],
  128: [{ id: 198, label: { tr: 'Renk değiştiren taşlar', en: 'Color-changing gems', ar: 'أحجار متغيرة اللون' } }],
  135: [{ id: 74, label: { tr: 'Altın ile karşılaştır', en: 'Compare with Gold', ar: 'قارن مع الذهب' } }, { id: 1, label: { tr: 'Gümüş ile karşılaştır', en: 'Compare with Silver', ar: 'قارن مع الفضة' } }],
  137: [{ id: 3, label: { tr: 'Gümüş vs Altın', en: 'Silver vs Gold', ar: 'الفضة مقابل الذهب' } }, { id: 191, label: { tr: 'Metal alerjisi', en: 'Metal allergy', ar: 'حساسية المعادن' } }],
  139: [{ id: 81, label: { tr: 'Altın yatırım', en: 'Gold investment', ar: 'استثمار الذهب' } }, { id: 8, label: { tr: 'Gümüş yatırım', en: 'Silver investment', ar: 'استثمار الفضة' } }],
  // New Faz 5 articles cross-refs
  156: [{ id: 187, label: { tr: 'Tektaş ayar türleri', en: 'Setting types', ar: 'أنواع التثبيت' } }, { id: 186, label: { tr: 'Pırlanta bakım', en: 'Diamond care', ar: 'العناية بالألماس' } }],
  169: [{ id: 198, label: { tr: 'Renk değiştiren taşlar', en: 'Color-changing gems', ar: 'أحجار متغيرة اللون' } }],
  171: [{ id: 188, label: { tr: 'Beryl ailesi', en: 'Beryl family', ar: 'عائلة البريل' } }],
  173: [{ id: 186, label: { tr: 'Pırlanta temizlik', en: 'Diamond cleaning', ar: 'تنظيف الألماس' } }, { id: 174, label: { tr: 'Depolama', en: 'Storage', ar: 'التخزين' } }],
  185: [{ id: 86, label: { tr: 'Altın düğün geleneği', en: 'Gold wedding tradition', ar: 'تقاليد ذهب الأعراس' } }],
  186: [{ id: 173, label: { tr: 'Takı temizleme', en: 'Jewelry cleaning', ar: 'تنظيف المجوهرات' } }],
  188: [{ id: 110, label: { tr: 'Zümrüt detay', en: 'Emerald detail', ar: 'تفاصيل الزمرد' } }, { id: 116, label: { tr: 'Akvamarin', en: 'Aquamarine', ar: 'الأكوامارين' } }, { id: 171, label: { tr: 'Morganite', en: 'Morganite', ar: 'المورغانيت' } }],
  189: [{ id: 111, label: { tr: 'Yakut detay', en: 'Ruby detail', ar: 'تفاصيل الياقوت' } }, { id: 112, label: { tr: 'Safir detay', en: 'Sapphire detail', ar: 'تفاصيل الصفير' } }],
  190: [{ id: 113, label: { tr: 'Ametist', en: 'Amethyst', ar: 'الجمشت' } }, { id: 119, label: { tr: 'Sitrin', en: 'Citrine', ar: 'السيترين' } }],
  191: [{ id: 137, label: { tr: 'Platin vs Beyaz Altın', en: 'Platinum vs White Gold', ar: 'البلاتين مقابل الذهب الأبيض' } }],
  193: [{ id: 157, label: { tr: 'Takı sigortası', en: 'Jewelry insurance', ar: 'تأمين المجوهرات' } }],
  194: [{ id: 149, label: { tr: 'Kuyumcu seçim', en: 'Choosing a jeweler', ar: 'اختيار الصائغ' } }],
  198: [{ id: 127, label: { tr: 'Zultanit', en: 'Zultanite', ar: 'الزلتانيت' } }, { id: 169, label: { tr: 'Alexandrite', en: 'Alexandrite', ar: 'الألكسندريت' } }],
};

// "Where to Buy" — material → relevant bazaar/guide articles
const WHERE_TO_BUY = {
  silver: [147, 145, 149],  // Midyat, Kapalıçarşı, Kuyumcu Seçim
  gold: [145, 146, 149],    // Kapalıçarşı, Mısır Çarşısı, Kuyumcu Seçim
  diamond: [145, 148, 149], // Kapalıçarşı, Dünya Pazarları, Kuyumcu Seçim
  gemstone: [145, 148, 149],// Kapalıçarşı, Dünya Pazarları, Kuyumcu Seçim
  platinum: [145, 148, 149],// Kapalıçarşı, Dünya Pazarları, Kuyumcu Seçim
  shared: [145, 149],       // Kapalıçarşı, Kuyumcu Seçim
};

// View count tracking for popularity
function trackView(id) {
  try {
    const views = JSON.parse(localStorage.getItem('jp_views') || '{}');
    views[id] = (views[id] || 0) + 1;
    localStorage.setItem('jp_views', JSON.stringify(views));
  } catch {}
}
export function getViewCounts() {
  try { return JSON.parse(localStorage.getItem('jp_views') || '{}'); } catch { return {}; }
}

// Article rating tracking
function rateArticle(id, rating) {
  try {
    const ratings = JSON.parse(localStorage.getItem('jp_ratings') || '{}');
    ratings[id] = rating;
    localStorage.setItem('jp_ratings', JSON.stringify(ratings));
  } catch {}
}
function getArticleRating(id) {
  try { return JSON.parse(localStorage.getItem('jp_ratings') || '{}')[id] || null; } catch { return null; }
}

export default function ArticleDetail({ article, lang, onClose, onOpen }) {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState(null);
  const [isFav, setIsFav] = useState(false);
  const [fontSize, setFontSize] = useState(() => {
    try { return parseInt(localStorage.getItem('jp_fontsize') || '16', 10); } catch { return 16; }
  });
  const touchRef = useRef({ startX: 0, startY: 0 });
  const [showCorrection, setShowCorrection] = useState(false);
  const [correctionText, setCorrectionText] = useState('');
  const [correctionSent, setCorrectionSent] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (!article) return;
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    setProgress(0); setLiked(getArticleRating(article.id));
    setIsFav(getFavorites().includes(article.id));
    addToHistory(article.id);
    trackView(article.id);
    setComments(getComments(article.id));
    setShowComments(false); setCommentText(''); setCommentName('');
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    const el = scrollRef.current;
    if (el) {
      const focusable = el.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
      if (focusable.length) focusable[0].focus();
    }
    return () => window.removeEventListener('keydown', onKey);
  }, [article, onClose]);

  const handleToggleFav = useCallback(() => {
    if (!article) return;
    const next = toggleFavorite(article.id);
    setIsFav(next.includes(article.id));
  }, [article]);

  const handleFontSize = useCallback((delta) => {
    setFontSize(prev => {
      const next = Math.max(13, Math.min(22, prev + delta));
      localStorage.setItem('jp_fontsize', String(next));
      return next;
    });
  }, []);

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

  // Async content loading with code-split chunks
  const [html, setHtml] = useState('');
  const [contentLoading, setContentLoading] = useState(false);

  useEffect(() => {
    if (!article) { setHtml(''); return; }
    let cancelled = false;
    setContentLoading(true);

    loadArticleContent(article.id, article).then(content => {
      if (cancelled) return;
      let raw = content?.[lang] || content?.tr || '';
      // Inject IDs into h3 tags for TOC anchoring
      let idx = 0;
      raw = raw.replace(/<h3([^>]*)>(.*?)<\/h3>/gi, (match, attrs, text) => {
        const id = `toc-${idx++}`;
        return `<h3${attrs} id="${id}">${text}</h3>`;
      });
      // Lazy loading for images
      raw = raw.replace(/<img(?!\s+loading)/gi, '<img loading="lazy"');
      setHtml(raw);
      setContentLoading(false);
    }).catch(() => {
      if (cancelled) return;
      // Fallback to sync (will show placeholder then load)
      const content = getArticleContent(article.id, article);
      let raw = content?.[lang] || content?.tr || '';
      let idx = 0;
      raw = raw.replace(/<h3([^>]*)>(.*?)<\/h3>/gi, (match, attrs, text) => {
        const id = `toc-${idx++}`;
        return `<h3${attrs} id="${id}">${text}</h3>`;
      });
      raw = raw.replace(/<img(?!\s+loading)/gi, '<img loading="lazy"');
      setHtml(raw);
      setContentLoading(false);
    });

    return () => { cancelled = true; };
  }, [article, lang]);

  // Extract TOC entries from html
  const tocEntries = useMemo(() => {
    if (!html) return [];
    const entries = [];
    const re = /<h3[^>]*id="(toc-\d+)"[^>]*>(.*?)<\/h3>/gi;
    let m;
    while ((m = re.exec(html)) !== null) {
      const text = m[2].replace(/<[^>]*>/g, ''); // strip inner tags
      if (text.trim()) entries.push({ id: m[1], text: text.trim() });
    }
    return entries;
  }, [html]);

  const [tocOpen, setTocOpen] = useState(false);

  const scrollToHeading = useCallback((headingId) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current.querySelector(`#${headingId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTocOpen(false);
  }, []);

  const handleShare = useCallback(async () => {
    const title = article?.[lang]?.t || 'JewelPedi';
    const text = article?.[lang]?.d || '';
    if (navigator.share) {
      try { await navigator.share({ title, text, url: window.location.href }); } catch {}
    } else {
      navigator.clipboard?.writeText(window.location.href);
    }
  }, [article, lang]);

  if (!article) return null;

  const cat = CATEGORIES.find(c => c.id === article.cat);
  // Cross-referencing: same category → same material different cat → shared/cross-material
  const related = useMemo(() => {
    const sameCat = ARTICLES.filter(a => a.cat === article.cat && a.id !== article.id);
    const sameMat = ARTICLES.filter(a => a.material === article.material && a.cat !== article.cat && a.id !== article.id);
    const cross = ARTICLES.filter(a => (a.material === 'shared' || (article.material === 'shared' && a.material !== 'shared')) && a.id !== article.id && a.cat !== article.cat);
    const pool = [...sameCat.slice(0, 2), ...sameMat.slice(0, 2), ...cross.slice(0, 1)];
    const seen = new Set();
    return pool.filter(a => { if (seen.has(a.id)) return false; seen.add(a.id); return true; }).slice(0, 5);
  }, [article]);
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
        <button className={`share-btn${isFav ? ' fav-active' : ''}`} onClick={handleToggleFav} aria-label="Favorite"
          style={isFav ? { color: '#e74c3c', background: 'rgba(231,76,60,0.1)' } : {}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isFav ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>
        <div className="font-size-controls">
          <button className="font-size-btn" onClick={() => handleFontSize(-1)} aria-label="Decrease font">A-</button>
          <button className="font-size-btn" onClick={() => handleFontSize(1)} aria-label="Increase font">A+</button>
        </div>
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

        {/* Auto TOC from h3 headings */}
        {tocEntries.length >= 3 && (
          <div className="ad-toc">
            <button className="ad-toc-toggle" onClick={() => setTocOpen(!tocOpen)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="15" y2="12"/><line x1="3" y1="18" x2="18" y2="18"/>
              </svg>
              <span>{lang === 'tr' ? 'İçindekiler' : lang === 'en' ? 'Contents' : 'المحتويات'}</span>
              <span style={{ marginInlineStart: 'auto', fontSize: '.7rem', color: 'var(--text3)', fontFamily: 'var(--f-mono)' }}>{tocEntries.length}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                style={{ transition: 'transform .3s', transform: tocOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            {tocOpen && (
              <ol className="ad-toc-list">
                {tocEntries.map((e, i) => (
                  <li key={e.id}>
                    <button className="ad-toc-item" onClick={() => scrollToHeading(e.id)}>
                      <span className="ad-toc-num">{i + 1}</span>
                      {e.text}
                    </button>
                  </li>
                ))}
              </ol>
            )}
          </div>
        )}

        <div className="ad-body" key={lang} style={{ fontSize: `${fontSize}px` }} dangerouslySetInnerHTML={{ __html: html }} />

        {/* ── Comparison Cross-Links (Faz 3.4) ── */}
        {(() => {
          const comps = COMPARISON_MAP[article.id];
          if (!comps || !comps.length) return null;
          return (
            <div className="ad-compare-links">
              <div className="ad-compare-label">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>
                {lang === 'tr' ? 'Karşılaştır' : lang === 'en' ? 'Compare' : 'قارن'}
              </div>
              <div className="ad-compare-pills">
                {comps.map(c => {
                  const compArt = ARTICLES.find(a => a.id === c.id);
                  if (!compArt) return null;
                  return (
                    <button key={c.id} className="ad-compare-pill" onClick={() => onOpen(compArt)}>
                      <span className="ad-compare-icon">{compArt.icon}</span>
                      <span>{c.label[lang]}</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })()}

        <div className="ad-divider" />

        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <p style={{ fontSize: '.95rem', color: 'var(--text2)', marginBottom: 12 }}>
            {t(lang, 'article.feedback')}
          </p>
          <div className="feedback-row">
            <button className={`feedback-btn${liked === true ? ' liked' : ''}`} onClick={() => { setLiked(true); rateArticle(article.id, true); }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 00-6 0v4H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-2a4 4 0 00-4-4h-3z"/></svg>
            </button>
            <button className={`feedback-btn${liked === false ? ' liked' : ''}`} onClick={() => { setLiked(false); rateArticle(article.id, false); }}
              style={liked === false ? { background: 'rgba(231,76,60,0.1)', borderColor: '#e74c3c', color: '#e74c3c' } : {}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: 'rotate(180deg)' }}><path d="M14 9V5a3 3 0 00-6 0v4H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-2a4 4 0 00-4-4h-3z"/></svg>
            </button>
          </div>
          {liked !== null && <p style={{ fontSize: '.85rem', color: 'var(--text3)', marginTop: 8 }}>{t(lang, 'article.thanks')}</p>}
        </div>

        {/* ── Comments Section (Faz 4.2) ── */}
        <div className="ad-comments-section">
          <button className="ad-comments-toggle" onClick={() => setShowComments(!showComments)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            <span>{lang === 'tr' ? 'Yorumlar' : lang === 'ar' ? 'التعليقات' : 'Comments'}</span>
            {comments.length > 0 && <span className="ad-comments-count">{comments.length}</span>}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              style={{ marginInlineStart: 'auto', transition: 'transform .3s', transform: showComments ? 'rotate(180deg)' : 'rotate(0)' }}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          {showComments && (
            <div className="ad-comments-body">
              {comments.length === 0 && (
                <p className="ad-comments-empty">
                  {lang === 'tr' ? 'Henüz yorum yok. İlk yorumu siz yazın!' : lang === 'ar' ? 'لا توجد تعليقات بعد. كن أول من يعلق!' : 'No comments yet. Be the first to comment!'}
                </p>
              )}
              {comments.map(c => (
                <div key={c.id} className="ad-comment">
                  <div className="ad-comment-header">
                    <span className="ad-comment-name">{c.name}</span>
                    <span className="ad-comment-date">{new Date(c.date).toLocaleDateString(lang === 'ar' ? 'ar' : lang === 'tr' ? 'tr' : 'en', { month: 'short', day: 'numeric' })}</span>
                  </div>
                  <p className="ad-comment-text">{c.text}</p>
                </div>
              ))}
              <div className="ad-comment-form">
                <input className="ad-comment-input" value={commentName} onChange={e => setCommentName(e.target.value)}
                  placeholder={lang === 'tr' ? 'Adınız (opsiyonel)' : lang === 'ar' ? 'اسمك (اختياري)' : 'Your name (optional)'}
                  maxLength={30} />
                <textarea className="ad-comment-textarea" value={commentText} onChange={e => setCommentText(e.target.value)}
                  placeholder={lang === 'tr' ? 'Yorumunuzu yazın...' : lang === 'ar' ? 'اكتب تعليقك...' : 'Write your comment...'}
                  maxLength={500} rows={2} />
                <button className="ad-comment-submit" disabled={!commentText.trim()} onClick={() => {
                  if (commentText.trim()) {
                    const updated = addComment(article.id, commentName, commentText);
                    setComments([...updated]);
                    setCommentText(''); setCommentName('');
                  }
                }}>
                  {lang === 'tr' ? 'Gönder' : lang === 'ar' ? 'إرسال' : 'Post'}
                </button>
              </div>
            </div>
          )}
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

        {/* ── Nerede Alınır / Where to Buy (Faz 4.4) ── */}
        {(() => {
          const buyIds = WHERE_TO_BUY[article.material] || WHERE_TO_BUY.shared;
          // Don't show if this article IS a bazaar guide
          if (!buyIds || buyIds.includes(article.id)) return null;
          const buyArticles = buyIds.map(id => ARTICLES.find(a => a.id === id)).filter(Boolean);
          if (!buyArticles.length) return null;
          return (
            <div className="ad-wheretobuy">
              <div className="ad-wheretobuy-label">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                {lang === 'tr' ? 'Nerede Alınır?' : lang === 'ar' ? 'أين تشتري؟' : 'Where to Buy?'}
              </div>
              <div className="ad-wheretobuy-links">
                {buyArticles.map(ba => (
                  <button key={ba.id} className="ad-wheretobuy-btn" onClick={() => onOpen(ba)}>
                    <span>{ba.icon}</span>
                    <span>{ba[lang]?.t}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })()}

        {/* ── Düzeltme Öner / Suggest Correction (Faz 4.2) ── */}
        <div className="ad-correction">
          <button className="ad-correction-btn" onClick={() => { setShowCorrection(true); setCorrectionSent(false); setCorrectionText(''); }}>
            {lang === 'tr' ? '✏️ Düzeltme Öner' : lang === 'ar' ? '✏️ اقترح تصحيحاً' : '✏️ Suggest Correction'}
          </button>
        </div>

        <div className="sponsor-box" style={{ marginBottom: 40 }}>
          {(() => {
            const sp = getSponsor(article.material);
            if (!sp) return null;
            return (<>
              <div className="sponsor-badge">{sp.badge[lang]}</div>
              <div className="sponsor-name">{sp.name[lang]}</div>
              <p className="sponsor-text">{sp.text[lang]}</p>
              {sp.products && sp.products.length > 0 && (
                <div className="sponsor-products">
                  {sp.products.map((prod, i) => (
                    <a key={i} href={prod.url || sp.url} target="_blank" rel="noopener" className="sponsor-product-card">
                      <span className="sponsor-product-img">{prod.icon}</span>
                      <span className="sponsor-product-name">{prod.name[lang]}</span>
                      {prod.price && <span className="sponsor-product-price">{prod.price}</span>}
                    </a>
                  ))}
                </div>
              )}
              <a href={sp.url} target="_blank" rel="noopener" className="sponsor-cta-btn">
                {sp.cta[lang]}
              </a>
            </>);
          })()}
        </div>
      </div>

      {/* Correction Suggestion Modal */}
      {showCorrection && (
        <div className="correction-overlay" onClick={() => setShowCorrection(false)}>
          <div className="correction-modal" onClick={e => e.stopPropagation()}>
            <h3 style={{ margin: '0 0 4px', fontFamily: 'var(--f-head)', fontSize: '1.1rem' }}>
              {lang === 'tr' ? '✏️ Düzeltme Öner' : lang === 'ar' ? '✏️ اقترح تصحيحاً' : '✏️ Suggest a Correction'}
            </h3>
            <p style={{ margin: '0 0 8px', fontSize: '.82rem', color: 'var(--text3)' }}>
              {lang === 'tr' ? `"${article[lang]?.t}" makalesi için` : lang === 'ar' ? `للمقال "${article[lang]?.t}"` : `For "${article[lang]?.t}"`}
            </p>
            {correctionSent ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <span style={{ fontSize: '2rem' }}>✅</span>
                <p style={{ fontSize: '.88rem', color: 'var(--text2)', marginTop: 8 }}>
                  {lang === 'tr' ? 'Teşekkürler! Öneriniz alındı.' : lang === 'ar' ? 'شكراً! تم استلام اقتراحك.' : 'Thanks! Your suggestion has been received.'}
                </p>
              </div>
            ) : (
              <>
                <textarea className="correction-textarea" value={correctionText} onChange={e => setCorrectionText(e.target.value)}
                  placeholder={lang === 'tr' ? 'Hangi bilginin düzeltilmesi gerekiyor?' : lang === 'ar' ? 'ما المعلومات التي تحتاج إلى تصحيح؟' : 'What information needs correction?'}
                  maxLength={1000} />
                <button className="correction-submit" onClick={() => {
                  if (correctionText.trim()) {
                    // Store locally for now (future: send to backend)
                    try {
                      const corrections = JSON.parse(localStorage.getItem('jp_corrections') || '[]');
                      corrections.push({ articleId: article.id, text: correctionText.trim(), date: new Date().toISOString() });
                      localStorage.setItem('jp_corrections', JSON.stringify(corrections));
                    } catch {}
                    setCorrectionSent(true);
                  }
                }} disabled={!correctionText.trim()}>
                  {lang === 'tr' ? 'Gönder' : lang === 'ar' ? 'إرسال' : 'Submit'}
                </button>
              </>
            )}
            <button style={{ marginTop: 10, width: '100%', padding: '8px', border: 'none', background: 'transparent', color: 'var(--text3)', fontSize: '.82rem', cursor: 'pointer' }}
              onClick={() => setShowCorrection(false)}>
              {lang === 'tr' ? 'Kapat' : lang === 'ar' ? 'إغلاق' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
