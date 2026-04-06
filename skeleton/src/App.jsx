import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from '@components/Header';
import Footer from '@components/Footer';
import ErrorBoundary from '@components/ErrorBoundary';
import SkeletonLoader from '@components/SkeletonLoader';
import { useTranslation } from 'react-i18next';
import './i18n/config';

// ─── Lazy-loaded Pages ──────────────────────────────────
const Home = lazy(() => import('@pages/Home'));
const Category = lazy(() => import('@pages/Category'));
const Article = lazy(() => import('@pages/Article'));
const MapPage = lazy(() => import('@pages/Map'));
const TimelinePage = lazy(() => import('@pages/Timeline'));
const ToolsPage = lazy(() => import('@pages/Tools'));
const ToolDetail = lazy(() => import('@pages/ToolDetail'));
const TurkeyAtlas = lazy(() => import('@pages/TurkeyAtlas'));
const Search = lazy(() => import('@pages/Search'));
const About = lazy(() => import('@pages/About'));
const NotFound = lazy(() => import('@pages/NotFound'));

// ─── Article Components (lazy) — All 50 ────────────────
const articles = {
  // Faz 1
  '925-ayar':             lazy(() => import('@articles/silveratlas-925-article')),
  'tarih':                lazy(() => import('@articles/silveratlas-history-article')),
  'gumus-vs-altin':       lazy(() => import('@articles/silveratlas-silver-vs-gold')),
  // Faz 2
  'telkari':              lazy(() => import('@articles/silveratlas-telkari-article')),
  // Faz 3
  'kimya':                lazy(() => import('@articles/silveratlas-chemistry-article')),
  'antimikrobiyal':       lazy(() => import('@articles/silveratlas-antimicrobial-article')),
  'endustriyel':          lazy(() => import('@articles/silveratlas-industrial-uses-article')),
  'yatirim-rehberi':      lazy(() => import('@articles/silveratlas-investment-guide-article')),
  'fiyat-tarihi':         lazy(() => import('@articles/silveratlas-price-history-article')),
  'arz-talep':            lazy(() => import('@articles/silveratlas-supply-demand-article')),
  '2026-trendleri':       lazy(() => import('@articles/silveratlas-2026-trends-article')),
  'dunya-madenleri':      lazy(() => import('@articles/silveratlas-global-mines-article')),
  'turkiye-madencilik':   lazy(() => import('@articles/silveratlas-turkey-mining-article')),
  'uretim-sureci':        lazy(() => import('@articles/silveratlas-production-process-article')),
  'erkek-aksesuarlari':   lazy(() => import('@articles/silveratlas-mens-accessories-article')),
  'osmanli':              lazy(() => import('@articles/silveratlas-ottoman-silver-article')),
  'anadolu-folklor':      lazy(() => import('@articles/silveratlas-anatolian-folklore-article')),
  'dunya-kulturleri':     lazy(() => import('@articles/silveratlas-world-cultures-article')),
  'islam-gumus-genis':    lazy(() => import('@articles/silveratlas-islam-silver-article')),
  // Faz 4
  'ayar-damgasi':         lazy(() => import('@articles/silveratlas-hallmark-guide-article')),
  'sembolizm':            lazy(() => import('@articles/silveratlas-symbolism-article')),
  'potosi':               lazy(() => import('@articles/silveratlas-potosi-article')),
  'fotografcilik':        lazy(() => import('@articles/silveratlas-photography-article')),
  'fiziksel-ozellikler':  lazy(() => import('@articles/silveratlas-physical-properties-article')),
  'rafinasyon':           lazy(() => import('@articles/silveratlas-refining-article')),
  'anadolu-gelenegi':     lazy(() => import('@articles/silveratlas-anatolian-heritage-article')),
  'kulturel-motifler':    lazy(() => import('@articles/silveratlas-cultural-motifs-article')),
  'gumus-rezervleri':     lazy(() => import('@articles/silveratlas-reserves-article')),
  'islam-fikih':          lazy(() => import('@articles/silveratlas-islam-article')),
  'cevresel-etki':        lazy(() => import('@articles/silveratlas-environmental-impact-article')),
  'gumusun-gelecegi':     lazy(() => import('@articles/silveratlas-future-of-silver-article')),
  'turkiye-sektoru':      lazy(() => import('@articles/silveratlas-turkey-sector-article')),
  'muzeler':              lazy(() => import('@articles/silveratlas-museums-article')),
  'styling-rehberi':      lazy(() => import('@articles/silveratlas-styling-guide-article')),
  // Faz 5
  'lehimleme-onarim':     lazy(() => import('@articles/silveratlas-soldering-repair-article')),
  'antik-koleksiyon':     lazy(() => import('@articles/silveratlas-antique-collecting-article')),
  'astroloji':            lazy(() => import('@articles/silveratlas-astrology-article')),
  'dunya-piyasasi-2026':  lazy(() => import('@articles/silveratlas-world-market-2026-article')),
  'kaplama-vs-masif':     lazy(() => import('@articles/silveratlas-plating-vs-solid-article')),
  'osmanli-paralari':     lazy(() => import('@articles/silveratlas-ottoman-coins-article')),
  'guney-amerika':        lazy(() => import('@articles/silveratlas-south-america-article')),
  // Faz 6
  'yuzuk-secim':          lazy(() => import('@articles/silveratlas-ring-selection-article')),
  'surdurulebilirlik':    lazy(() => import('@articles/silveratlas-sustainability-article')),
  'japon-gumus':          lazy(() => import('@articles/silveratlas-japanese-silver-article')),
  'hint-gumush':          lazy(() => import('@articles/silveratlas-indian-silver-article')),
  'dugun-gelenekleri':    lazy(() => import('@articles/silveratlas-wedding-traditions-article')),
  'sofra-takimi':         lazy(() => import('@articles/silveratlas-tableware-article')),
  'muzik':                lazy(() => import('@articles/silveratlas-music-article')),
  'parfum-luks':          lazy(() => import('@articles/silveratlas-perfume-luxury-article')),
  'heykel-sanat':         lazy(() => import('@articles/silveratlas-sculpture-art-article')),
};

// ─── Category Map (Complete) ───────────────────────────
const categories = {
  bilim: {
    tr: 'Bilim', en: 'Science', ar: 'العلوم', slug: 'bilim', icon: '🔬', color: '#3b82f6',
    articles: ['kimya', 'antimikrobiyal', 'fotografcilik', 'fiziksel-ozellikler', 'endustriyel'],
  },
  tarih: {
    tr: 'Tarih', en: 'History', ar: 'التاريخ', slug: 'tarih', icon: '📜', color: '#f59e0b',
    articles: ['tarih', 'osmanli', 'anadolu-folklor', 'potosi', 'anadolu-gelenegi', 'osmanli-paralari', 'guney-amerika', 'japon-gumus', 'hint-gumush'],
  },
  maden: {
    tr: 'Maden', en: 'Mining', ar: 'التعدين', slug: 'maden', icon: '⛏️', color: '#10b981',
    articles: ['dunya-madenleri', 'turkiye-madencilik', 'gumus-rezervleri', 'cevresel-etki', 'surdurulebilirlik'],
  },
  uretim: {
    tr: 'Üretim', en: 'Manufacturing', ar: 'التصنيع', slug: 'uretim', icon: '🔧', color: '#C0C0C0',
    articles: ['925-ayar', 'uretim-sureci', 'ayar-damgasi', 'rafinasyon'],
  },
  piyasa: {
    tr: 'Piyasa', en: 'Market', ar: 'السوق', slug: 'piyasa', icon: '📊', color: '#D4AF37',
    articles: ['yatirim-rehberi', 'fiyat-tarihi', 'arz-talep', '2026-trendleri', 'gumusun-gelecegi', 'turkiye-sektoru', 'dunya-piyasasi-2026'],
  },
  kultur: {
    tr: 'Kültür', en: 'Culture', ar: 'الثقافة', slug: 'kultur', icon: '🏛️', color: '#8b5cf6',
    articles: ['dunya-kulturleri', 'islam-gumus-genis', 'sembolizm', 'islam-fikih', 'muzeler', 'astroloji', 'dugun-gelenekleri', 'muzik', 'heykel-sanat'],
  },
  stil: {
    tr: 'Stil/Moda', en: 'Style', ar: 'الأناقة', slug: 'stil', icon: '💎', color: '#ec4899',
    articles: ['gumus-vs-altin', 'erkek-aksesuarlari', 'kulturel-motifler', 'styling-rehberi', 'parfum-luks'],
  },
  rehber: {
    tr: 'Rehber', en: 'Guide', ar: 'دليل', slug: 'rehber', icon: '📖', color: '#06b6d4',
    articles: ['kaplama-vs-masif', 'yuzuk-secim', 'sofra-takimi'],
  },
  zanaat: {
    tr: 'Zanaat', en: 'Craft', ar: 'الحرف', slug: 'zanaat', icon: '🔨', color: '#78716c',
    articles: ['telkari', 'lehimleme-onarim'],
  },
  koleksiyon: {
    tr: 'Koleksiyon', en: 'Collecting', ar: 'المقتنيات', slug: 'koleksiyon', icon: '🏺', color: '#64748b',
    articles: ['antik-koleksiyon'],
  },
};

// ─── Article Route Wrapper ──────────────────────────────
function ArticleRoute({ slug }) {
  const ArticleComponent = articles[slug];
  if (!ArticleComponent) return <Navigate to="/404" replace />;
  return (
    <Suspense fallback={<SkeletonLoader type="article" />}>
      <ArticleComponent />
    </Suspense>
  );
}

// ─── Main App ───────────────────────────────────────────
export default function App() {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'tr';
  const supportedLangs = ['tr', 'en', 'ar'];

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header categories={categories} />
            <main style={{ flex: 1 }}>
              <Suspense fallback={<SkeletonLoader type="page" />}>
                <Routes>
                  {/* Root redirect */}
                  <Route path="/" element={<Navigate to={`/${lang}`} replace />} />

                  {/* Language-prefixed routes */}
                  {supportedLangs.map(lng => (
                    <React.Fragment key={lng}>
                      <Route path={`/${lng}`} element={<Home lang={lng} categories={categories} />} />

                      {/* Category pages */}
                      {Object.entries(categories).map(([key, cat]) => (
                        <React.Fragment key={key}>
                          <Route path={`/${lng}/${cat.slug}`} element={<Category lang={lng} category={cat} categoryKey={key} />} />
                          {/* Article pages under category */}
                          {cat.articles.map(articleSlug => (
                            <Route key={articleSlug} path={`/${lng}/${cat.slug}/${articleSlug}`} element={<ArticleRoute slug={articleSlug} />} />
                          ))}
                        </React.Fragment>
                      ))}

                      {/* Direct article access (without category prefix) */}
                      {Object.keys(articles).map(slug => (
                        <Route key={`direct-${slug}`} path={`/${lng}/makale/${slug}`} element={<ArticleRoute slug={slug} />} />
                      ))}

                      {/* Tool pages */}
                      <Route path={`/${lng}/araclar`} element={<ToolsPage lang={lng} />} />
                      <Route path={`/${lng}/tools`} element={<ToolsPage lang={lng} />} />
                      <Route path={`/${lng}/araclar/:slug`} element={<ToolDetail lang={lng} />} />
                      <Route path={`/${lng}/tools/:slug`} element={<ToolDetail lang={lng} />} />

                      {/* Map, Timeline, Atlas */}
                      <Route path={`/${lng}/harita`} element={<MapPage lang={lng} />} />
                      <Route path={`/${lng}/map`} element={<MapPage lang={lng} />} />
                      <Route path={`/${lng}/zaman-cizelgesi`} element={<TimelinePage lang={lng} />} />
                      <Route path={`/${lng}/timeline`} element={<TimelinePage lang={lng} />} />
                      <Route path={`/${lng}/turkiye-atlasi`} element={<TurkeyAtlas lang={lng} />} />
                      <Route path={`/${lng}/turkey-atlas`} element={<TurkeyAtlas lang={lng} />} />

                      {/* Search & About */}
                      <Route path={`/${lng}/ara`} element={<Search lang={lng} />} />
                      <Route path={`/${lng}/search`} element={<Search lang={lng} />} />
                      <Route path={`/${lng}/hakkinda`} element={<About lang={lng} />} />
                      <Route path={`/${lng}/about`} element={<About lang={lng} />} />
                    </React.Fragment>
                  ))}

                  {/* 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
