import React, { useState, useMemo, useEffect } from 'react';
import { t } from '../i18n/translations';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import FadeUp from '../components/FadeUp';
import { getArticleIcon } from '../components/Icons';

function getFavorites() { try { return JSON.parse(localStorage.getItem('jp_favorites') || '[]'); } catch { return []; } }
function getHistory() { try { return JSON.parse(localStorage.getItem('jp_history') || '[]'); } catch { return []; } }

export default function ReadingHistory({ lang, onOpen }) {
  const [favIds, setFavIds] = useState([]);
  const [histIds, setHistIds] = useState([]);
  const [tab, setTab] = useState('history'); // 'history' | 'favorites'

  useEffect(() => {
    setFavIds(getFavorites());
    setHistIds(getHistory());
    // Poll for changes
    const iv = setInterval(() => {
      setFavIds(getFavorites());
      setHistIds(getHistory());
    }, 2000);
    return () => clearInterval(iv);
  }, []);

  const favArticles = useMemo(() =>
    favIds.map(id => ARTICLES.find(a => a.id === id)).filter(Boolean).slice(0, 10),
  [favIds]);

  const histArticles = useMemo(() =>
    histIds.map(id => ARTICLES.find(a => a.id === id)).filter(Boolean).slice(0, 10),
  [histIds]);

  const items = tab === 'favorites' ? favArticles : histArticles;

  if (favIds.length === 0 && histIds.length === 0) return null;

  const labels = {
    history: { tr: 'Son Okuduklarınız', en: 'Recently Read', ar: 'قرأتها مؤخراً' },
    favorites: { tr: 'Favorileriniz', en: 'Your Favorites', ar: 'المفضلات' },
    empty: { tr: 'Henüz favori eklemediniz', en: 'No favorites yet', ar: 'لا مفضلات بعد' },
    emptyHist: { tr: 'Henüz makale okumadınız', en: 'No articles read yet', ar: 'لم تقرأ مقالات بعد' },
  };

  return (
    <section className="section" style={{ paddingBottom: 16 }}>
      <FadeUp>
        <div className="section-header">
          <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            <button
              className={`rh-tab${tab === 'history' ? ' active' : ''}`}
              onClick={() => setTab('history')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 6 }}>
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              {labels.history[lang]}
              {histIds.length > 0 && <span className="rh-count">{histIds.length}</span>}
            </button>
            <button
              className={`rh-tab${tab === 'favorites' ? ' active' : ''}`}
              onClick={() => setTab('favorites')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill={favIds.length > 0 ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" style={{ marginRight: 6 }}>
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
              {labels.favorites[lang]}
              {favIds.length > 0 && <span className="rh-count">{favIds.length}</span>}
            </button>
          </div>
        </div>

        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '20px 16px', color: 'var(--text3)', fontSize: '.9rem' }}>
            {tab === 'favorites' ? labels.empty[lang] : labels.emptyHist[lang]}
          </div>
        ) : (
          <div className="rh-scroll">
            {items.map(a => {
              const cat = CATEGORIES.find(c => c.id === a.cat);
              const icon = getArticleIcon(a.icon, 22, { color: cat?.co });
              return (
                <div className="rh-card" key={a.id} onClick={() => onOpen(a)} role="button" tabIndex={0}>
                  <span className="rh-icon">{icon || a.icon}</span>
                  <div className="rh-info">
                    <div className="rh-title">{a[lang]?.t}</div>
                    <div className="rh-meta">
                      <span className="art-dot" style={{ background: cat?.co }} />
                      {cat?.[lang]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </FadeUp>
    </section>
  );
}
