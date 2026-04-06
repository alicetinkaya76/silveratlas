/**
 * SilverAtlas — SEO Module (Faz 7 Update)
 * JSON-LD structured data for articles, tools, and FAQ schema
 */

const SITE_URL = 'https://silveratlas.org';
const SITE_NAME = 'SilverAtlas';
const AUTHOR = 'Turan Erbaş';
const LOGO_URL = `${SITE_URL}/icons/icon-512.png`;
const SPONSOR = { name: 'İstanbul Gümüş', url: 'https://istanbulgumus.com' };

// ─── Website Schema ─────────────────────────────────────
export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Dünyanın en kapsamlı gümüş bilgi platformu',
    inLanguage: ['tr', 'en', 'ar'],
    author: { '@type': 'Person', name: AUTHOR },
    sponsor: { '@type': 'Organization', name: SPONSOR.name, url: SPONSOR.url },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/tr/ara?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

// ─── Article Schema ─────────────────────────────────────
export function getArticleSchema({ title, description, slug, category, lang = 'tr', readMin, publishedDate, modifiedDate, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}/${lang}/${category}/${slug}`,
    inLanguage: lang,
    author: { '@type': 'Person', name: AUTHOR },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: LOGO_URL },
    },
    datePublished: publishedDate || '2025-01-01',
    dateModified: modifiedDate || new Date().toISOString().split('T')[0],
    image: image || `${SITE_URL}/og/${slug}.jpg`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/${category}/${slug}` },
    wordCount: readMin ? readMin * 200 : undefined,
    articleSection: category,
    sponsor: { '@type': 'Organization', name: SPONSOR.name, url: SPONSOR.url },
  };
}

// ─── Tool Schema ────────────────────────────────────────
export function getToolSchema({ title, description, slug, lang = 'tr' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    description,
    url: `${SITE_URL}/${lang}/araclar/${slug}`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    inLanguage: ['tr', 'en', 'ar'],
    author: { '@type': 'Person', name: AUTHOR },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
}

// ─── FAQ Schema ─────────────────────────────────────────
export function getFAQSchema(faqItems) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

// ─── Breadcrumb Schema ──────────────────────────────────
export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${SITE_URL}${item.url}` : undefined,
    })),
  };
}

// ─── Organization Schema ────────────────────────────────
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description: 'The world\'s most comprehensive silver knowledge platform',
    founder: { '@type': 'Person', name: AUTHOR },
    sameAs: [
      'https://twitter.com/silveratlas',
    ],
    sponsor: {
      '@type': 'Organization',
      name: SPONSOR.name,
      url: SPONSOR.url,
      sameAs: [
        'https://instagram.com/istanbulgumustr',
        'https://instagram.com/istanbulgumuscom',
        'https://instagram.com/istanbulgumusmen',
      ],
    },
  };
}
