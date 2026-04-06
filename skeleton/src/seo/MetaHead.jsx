import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SilverAtlas — MetaHead (Faz 7 Update)
 * SEO meta tags, OpenGraph, Twitter Card, JSON-LD ready.
 */

const SITE = {
  name: 'SilverAtlas',
  url: 'https://silveratlas.org',
  image: 'https://silveratlas.org/og/default-og.jpg',
  twitterHandle: '@silveratlas',
  author: 'Turan Erbaş',
  locale: { tr: 'tr_TR', en: 'en_US', ar: 'ar_SA' },
};

export default function MetaHead({
  title,
  description,
  lang = 'tr',
  slug = '',
  category = '',
  image = null,
  type = 'article', // 'article' | 'website' | 'tool'
  publishedTime = null,
  modifiedTime = null,
  readMin = null,
  noindex = false,
}) {
  const fullTitle = title ? `${title} — SilverAtlas` : 'SilverAtlas — Gümüş Bilgi Platformu';
  const ogImage = image || SITE.image;
  const canonicalUrl = slug
    ? `${SITE.url}/${lang}/${category ? category + '/' : ''}${slug}`
    : `${SITE.url}/${lang}`;
  const locale = SITE.locale[lang] || SITE.locale.tr;
  const isRTL = lang === 'ar';

  return (
    <Helmet>
      {/* Basic */}
      <html lang={lang} dir={isRTL ? 'rtl' : 'ltr'} />
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Dünyanın en kapsamlı gümüş bilgi platformu.'} />
      <meta name="author" content={SITE.author} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Alternate languages */}
      <link rel="alternate" hreflang="tr" href={`${SITE.url}/tr/${category ? category + '/' : ''}${slug}`} />
      <link rel="alternate" hreflang="en" href={`${SITE.url}/en/${category ? category + '/' : ''}${slug}`} />
      <link rel="alternate" hreflang="ar" href={`${SITE.url}/ar/${category ? category + '/' : ''}${slug}`} />
      <link rel="alternate" hreflang="x-default" href={`${SITE.url}/tr/${category ? category + '/' : ''}${slug}`} />

      {/* OpenGraph */}
      <meta property="og:type" content={type === 'tool' ? 'website' : type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || ''} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={locale} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {type === 'article' && <meta property="article:author" content={SITE.author} />}
      {type === 'article' && category && <meta property="article:section" content={category} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || ''} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={SITE.twitterHandle} />

      {/* PWA / Mobile */}
      <meta name="theme-color" content="#0b0b10" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="SilverAtlas" />
      <link rel="apple-touch-icon" href="/icons/icon-192.png" />

      {/* Structured Data hints */}
      {readMin && <meta name="twitter:label1" content="Okuma süresi" />}
      {readMin && <meta name="twitter:data1" content={`${readMin} dakika`} />}

      {/* Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Font preload */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
        as="style"
      />
    </Helmet>
  );
}
