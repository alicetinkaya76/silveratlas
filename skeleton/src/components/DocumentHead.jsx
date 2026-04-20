import { useEffect } from 'react';

const SITE = 'JewelPedi';
const DOMAIN = 'https://jewelpedi.com';
const BASE = '/silveratlas';
const OG_IMAGE = `${DOMAIN}${BASE}/og-image.svg`;

// Default site-wide meta
const DEFAULTS = {
  tr: {
    title: 'JewelPedi — Mücevher Ansiklopedisi',
    description: 'Altın, gümüş, pırlanta, değerli taşlar — 200 makale, 47 araç, 3 dil. Türkiye\'nin en kapsamlı mücevher bilgi platformu.',
  },
  en: {
    title: 'JewelPedi — Jewelry Encyclopedia',
    description: 'Gold, silver, diamond, gemstones — 200 articles, 47 tools, 3 languages. The most comprehensive jewelry information platform.',
  },
  ar: {
    title: 'JewelPedi — موسوعة المجوهرات',
    description: 'الذهب والفضة والألماس والأحجار الكريمة — 200 مقال و47 أداة و3 لغات.',
  },
};

function setMeta(name, content) {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(name.startsWith('og:') || name.startsWith('article:') ? 'property' : 'name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

function setJsonLd(data) {
  let el = document.getElementById('article-jsonld');
  if (!el) {
    el = document.createElement('script');
    el.id = 'article-jsonld';
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd() {
  const el = document.getElementById('article-jsonld');
  if (el) el.remove();
}

/**
 * DocumentHead — updates <title>, meta tags, canonical, and JSON-LD
 * based on the current article (or resets to defaults).
 *
 * Usage:
 *   <DocumentHead article={article} lang={lang} />
 *   <DocumentHead lang={lang} />  ← resets to default
 */
export default function DocumentHead({ article, lang = 'tr' }) {
  useEffect(() => {
    const l = DEFAULTS[lang] || DEFAULTS.tr;

    if (article) {
      const localized = article[lang] || article.tr || {};
      const title = `${localized.t || ''} — ${SITE}`;
      const description = localized.d || l.description;
      const url = `${DOMAIN}${BASE}/article/${article.slug}`;

      document.title = title;
      setMeta('description', description);
      setMeta('og:title', title);
      setMeta('og:description', description);
      setMeta('og:url', url);
      setMeta('og:type', 'article');
      setMeta('og:image', OG_IMAGE);
      setMeta('og:site_name', SITE);
      setMeta('twitter:title', title);
      setMeta('twitter:description', description);
      setCanonical(url);

      // Article JSON-LD
      setJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: localized.t || '',
        description: localized.d || '',
        url,
        inLanguage: lang === 'ar' ? 'ar' : lang === 'en' ? 'en' : 'tr',
        publisher: {
          '@type': 'Organization',
          name: SITE,
          url: DOMAIN,
        },
        isPartOf: {
          '@type': 'WebSite',
          name: SITE,
          url: DOMAIN,
        },
      });
    } else {
      // Reset to defaults
      document.title = l.title;
      setMeta('description', l.description);
      setMeta('og:title', l.title);
      setMeta('og:description', l.description);
      setMeta('og:url', `${DOMAIN}${BASE}/`);
      setMeta('og:type', 'website');
      setMeta('og:image', OG_IMAGE);
      setMeta('og:site_name', SITE);
      setMeta('twitter:title', l.title);
      setMeta('twitter:description', l.description);
      setCanonical(`${DOMAIN}${BASE}/`);
      removeJsonLd();
    }
  }, [article, lang]);

  return null;
}
