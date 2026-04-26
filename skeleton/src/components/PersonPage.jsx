import React from 'react';
import { useNavigate } from 'react-router-dom';
import personsData from '../data/persons.json';
import { ARTICLES } from '../data/articles';

// ── Labels per language ─────────────────────────────────────────────────
const LABELS = {
  tr: {
    back: '← Geri',
    role: 'Alan',
    lived: 'Yaşam',
    alsoKnownAs: 'Diğer adlar',
    articlesHeading: "JewelPedi'de bu kişinin geçtiği makaleler",
    externalHeading: 'Dış kaynaklar',
    noArticles: 'Henüz bu kişiye referans veren makale indekslenmemiş.',
    noExternal: 'Henüz dış kaynak eklenmedi.',
    notFound: 'Bu slug için kayıt bulunamadı: ',
  },
  en: {
    back: '← Back',
    role: 'Field',
    lived: 'Lived',
    alsoKnownAs: 'Also known as',
    articlesHeading: 'Articles on JewelPedi that reference this person',
    externalHeading: 'External sources',
    noArticles: 'No articles currently reference this person.',
    noExternal: 'No external sources added yet.',
    notFound: 'No entry for slug: ',
  },
  ar: {
    back: '→ رجوع',
    role: 'المجال',
    lived: 'الحياة',
    alsoKnownAs: 'أسماء أخرى',
    articlesHeading: 'المقالات التي تذكر هذا الشخص في جوِل‌پيدي',
    externalHeading: 'مصادر خارجية',
    noArticles: 'لا توجد مقالات تشير إلى هذا الشخص حاليًا.',
    noExternal: 'لم تُضَف مصادر خارجية بعد.',
    notFound: 'لا يوجد إدخال لهذا الـ slug: ',
  },
};

function localize(article, lang) {
  if (!article) return { title: '', desc: '' };
  const fallback = article.tr || article.en || {};
  const active = article[lang] || fallback;
  return {
    title: active.t || fallback.t || article.slug,
    desc: active.d || fallback.d || '',
  };
}

export default function PersonPage({ slug, lang = 'tr', onClose }) {
  const navigate = useNavigate();
  const isRTL = lang === 'ar';
  const L = LABELS[lang] || LABELS.tr;

  const person = (personsData.persons || []).find((p) => p.slug === slug);

  if (!person) {
    return (
      <section className="person-page person-page--missing" dir={isRTL ? 'rtl' : 'ltr'}>
        <button type="button" className="person-page__back" onClick={() => onClose ? onClose() : navigate('/')}>
          {L.back}
        </button>
        <p>
          {L.notFound}
          <code>{slug}</code>
        </p>
      </section>
    );
  }

  // ── Resolve referenced articles ──
  const byId = new Map(ARTICLES.map((a) => [a.id, a]));
  const referenced = (person.articles || []).map((id) => byId.get(id)).filter(Boolean);

  // ── Life display in current language ──
  const life = person.life || {};
  const lifeKey = `display${lang.charAt(0).toUpperCase() + lang.slice(1)}`;
  const lifeDisplay = life[lifeKey] || life.displayTr || '';

  return (
    <section className="person-page" dir={isRTL ? 'rtl' : 'ltr'} aria-labelledby="person-name">
      <button type="button" className="person-page__back" onClick={() => onClose ? onClose() : navigate('/')}>
        {L.back}
      </button>

      {/* ── Header ────────────────────────────── */}
      <header className="person-page__header">
        <h1 id="person-name" className="person-page__name">
          {person.name?.[lang] || person.name?.tr}
        </h1>

        {lifeDisplay && (
          <p className="person-page__life">
            <span className="person-page__label">{L.lived}:</span> {lifeDisplay}
          </p>
        )}

        {person.role?.[lang] && (
          <p className="person-page__role">
            <span className="person-page__label">{L.role}:</span> {person.role[lang]}
          </p>
        )}

        {Array.isArray(person.altNames) && person.altNames.length > 0 && (
          <p className="person-page__altnames">
            <span className="person-page__label">{L.alsoKnownAs}:</span>{' '}
            {person.altNames.join(' · ')}
          </p>
        )}
      </header>

      {/* ── Blurb ────────────────────────────── */}
      {person.blurb?.[lang] && (
        <div className="person-page__blurb">
          <p>{person.blurb[lang]}</p>
        </div>
      )}

      {/* ── Referenced articles ─────────────── */}
      <section className="person-page__articles">
        <h2>{L.articlesHeading}</h2>
        {referenced.length === 0 ? (
          <p className="person-page__empty">{L.noArticles}</p>
        ) : (
          <ul className="person-page__article-list">
            {referenced.map((a) => {
              const { title, desc } = localize(a, lang);
              return (
                <li key={a.id} className="person-page__article-card">
                  <a href={`/article/${a.slug}`}>
                    {a.icon && (
                      <span className="person-page__article-icon" aria-hidden="true">
                        {a.icon}
                      </span>
                    )}
                    <span className="person-page__article-title">{title}</span>
                  </a>
                  {desc && <p className="person-page__article-desc">{desc}</p>}
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* ── External links ──────────────────── */}
      <section className="person-page__external">
        <h2>{L.externalHeading}</h2>
        {!Array.isArray(person.external) || person.external.length === 0 ? (
          <p className="person-page__empty">{L.noExternal}</p>
        ) : (
          <ul className="person-page__external-list">
            {person.external.map((link, i) => (
              <li key={i}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  );
}
