import React, { useState, useCallback, useEffect, useRef, Suspense, lazy } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { useLang } from './hooks/useLang';
import Nav from './components/Nav';
import MobileMenu from './components/MobileMenu';
import BottomNav from './components/BottomNav';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import WaveDivider from './components/WaveDivider';
import PriceTicker from './components/PriceTicker';
import Hero from './sections/Hero';
import QuickTools from './sections/QuickTools';
import FeaturedArticles from './sections/FeaturedArticles';
import Categories from './sections/Categories';
import DocumentHead from './components/DocumentHead';
import { ARTICLES } from './data/articles';

// Lazy-load below-fold sections for better LCP & TBT
const Calculator = lazy(() => import('./sections/Calculator'));
const AllArticles = lazy(() => import('./sections/AllArticles'));
const ToolsGrid = lazy(() => import('./sections/ToolsGrid'));
const AtlasPreview = lazy(() => import('./sections/AtlasPreview'));
const QuranSilver = lazy(() => import('./sections/QuranSilver'));
const SponsorCTA = lazy(() => import('./sections/SponsorCTA'));
const ReadingHistory = lazy(() => import('./sections/ReadingHistory'));
const MostRead = lazy(() => import('./sections/MostRead'));
const JewelryTypeExplorer = lazy(() => import('./sections/JewelryTypeExplorer'));
const Footer = lazy(() => import('./components/Footer'));
const ArticleDetail = lazy(() => import('./components/ArticleDetail'));
const ToolModal = lazy(() => import('./components/ToolModal'));
const PersonPage = lazy(() => import('./components/PersonPage'));

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { dark, mode: themeMode, toggle: toggleTheme } = useTheme();
  const { lang, setLang, cycle: cycleLang, isRTL } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [article, setArticle] = useState(null);
  const [personSlug, setPersonSlug] = useState(null);
  const [catFilter, setCatFilter] = useState(null);
  const [materialFilter, setMaterialFilter] = useState(null);
  const [jewelryTypeFilter, setJewelryTypeFilter] = useState(null);
  const [activeTool, setActiveTool] = useState(null);
  const [activeToolIdx, setActiveToolIdx] = useState(null);
  const [splashDone, setSplashDone] = useState(false);
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);
  const deferredPrompt = useRef(null);
  const skipUrlSync = useRef(false);

  // ── ?p handler — SPA fallback redirect from 404.html ──
  // GitHub Pages hits unknown deep links (/silveratlas/article/foo etc.) with 404.html,
  // which redirects to /silveratlas/?p=/article/foo. Here we read p and navigate.
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get('p');
    if (redirectPath) {
      navigate(redirectPath, { replace: true });
    }
  }, []); // Run once on mount only

  // ── URL → Article/Person sync (on page load or browser back/forward) ──
  useEffect(() => {
    // Article URL: /article/<slug>
    const articleMatch = location.pathname.match(/^\/article\/(.+)$/);
    if (articleMatch) {
      const slug = decodeURIComponent(articleMatch[1]);
      const found = ARTICLES.find(a => a.slug === slug);
      if (found && (!article || article.slug !== slug)) {
        skipUrlSync.current = true;
        setArticle(found);
        document.body.style.overflow = 'hidden';
      }
      if (personSlug) setPersonSlug(null);
      skipUrlSync.current = false;
      return;
    }

    // Person URL: /person/<slug>
    const personMatch = location.pathname.match(/^\/person\/(.+)$/);
    if (personMatch) {
      const slug = decodeURIComponent(personMatch[1]);
      if (personSlug !== slug) setPersonSlug(slug);
      if (article) {
        setArticle(null);
        document.body.style.overflow = '';
      }
      skipUrlSync.current = false;
      return;
    }

    // Category URL: /category/<slug>
    const catMatch = location.pathname.match(/^\/category\/(.+)$/);
    if (catMatch) {
      const slug = decodeURIComponent(catMatch[1]);
      if (catFilter !== slug) setCatFilter(slug);
      if (article) { setArticle(null); document.body.style.overflow = ''; }
      if (personSlug) setPersonSlug(null);
      setTimeout(() => {
        document.getElementById('articles-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      skipUrlSync.current = false;
      return;
    }

    // Material URL: /material/<slug>
    const matMatch = location.pathname.match(/^\/material\/(.+)$/);
    if (matMatch) {
      const slug = decodeURIComponent(matMatch[1]);
      if (materialFilter !== slug) setMaterialFilter(slug);
      if (article) { setArticle(null); document.body.style.overflow = ''; }
      if (personSlug) setPersonSlug(null);
      setTimeout(() => {
        document.getElementById('articles-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      skipUrlSync.current = false;
      return;
    }

    // JewelryType URL: /jewelry/<slug>
    const jewelryMatch = location.pathname.match(/^\/jewelry\/(.+)$/);
    if (jewelryMatch) {
      const slug = decodeURIComponent(jewelryMatch[1]);
      if (jewelryTypeFilter !== slug) setJewelryTypeFilter(slug);
      if (article) { setArticle(null); document.body.style.overflow = ''; }
      if (personSlug) setPersonSlug(null);
      setTimeout(() => {
        document.getElementById('articles-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      skipUrlSync.current = false;
      return;
    }

    // Home or other route: clear both
    if (article && !skipUrlSync.current) {
      setArticle(null);
      document.body.style.overflow = '';
    }
    if (personSlug) setPersonSlug(null);
    skipUrlSync.current = false;
  }, [location.pathname]);

  // PWA Install Prompt
  useEffect(() => {
    const handler = (e) => { e.preventDefault(); deferredPrompt.current = e; setShowInstall(true); };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);
  const handleInstall = useCallback(async () => {
    if (!deferredPrompt.current) return;
    deferredPrompt.current.prompt();
    const result = await deferredPrompt.current.userChoice;
    if (result.outcome === 'accepted') setShowInstall(false);
    deferredPrompt.current = null;
  }, []);

  // ── Article open: state + URL push ──
  const openArticle = useCallback((a) => {
    let art = a;
    if (a && !a.cat && (a.id || a.slug)) {
      art = ARTICLES.find(x => x.id === a.id || x.slug === a.slug) || a;
    }
    setArticle(art);
    document.body.style.overflow = 'hidden';
    if (art?.slug) {
      skipUrlSync.current = true;
      navigate(`/article/${art.slug}`);
    }
  }, [navigate]);

  // ── Article close: state + URL back ──
  const closeArticle = useCallback(() => {
    setArticle(null);
    document.body.style.overflow = '';
    skipUrlSync.current = true;
    navigate('/');
  }, [navigate]);

  const openMenu = useCallback(() => { setMenuOpen(true); document.body.style.overflow = 'hidden'; }, []);
  const closeMenu = useCallback(() => { setMenuOpen(false); document.body.style.overflow = ''; }, []);
  const openTool = useCallback((tool, idx) => { setActiveTool(tool); setActiveToolIdx(idx); document.body.style.overflow = 'hidden'; }, []);
  const closeTool = useCallback(() => { setActiveTool(null); setActiveToolIdx(null); document.body.style.overflow = ''; }, []);
  const filterCat = useCallback((catId, material) => {
    setCatFilter(catId);
    if (material) setMaterialFilter(material);
    skipUrlSync.current = true;
    if (catId) navigate(`/category/${catId}`);
    document.getElementById('articles-section')?.scrollIntoView({ behavior: 'smooth' });
  }, [navigate]);
  const selectJewelryType = useCallback((typeId) => {
    setJewelryTypeFilter(typeId);
    // When user picks a jewelry type from Hero, reset any competing narrow filters
    // (category) but keep material — so "Ring" under "Silver tab" still works.
    setCatFilter(null);
    skipUrlSync.current = true;
    if (typeId) navigate(`/jewelry/${typeId}`);
    setTimeout(() => {
      document.getElementById('articles-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  }, [navigate]);

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <DocumentHead article={article} lang={lang} />

      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}

      <Nav lang={lang} dark={dark} themeMode={themeMode} cycleLang={cycleLang} toggleTheme={toggleTheme} openMenu={openMenu} />
      <MobileMenu open={menuOpen} close={closeMenu} lang={lang} setLang={setLang} dark={dark} themeMode={themeMode} toggleTheme={toggleTheme} />
      <PriceTicker lang={lang} />

      <main role="main">
        <Hero lang={lang} onOpenTool={openTool} onSelectJewelryType={selectJewelryType} />
        <WaveDivider variant={1} color="var(--card)" />
        <QuickTools lang={lang} onOpenTool={openTool} />
        <Suspense fallback={<div style={{minHeight:'60vh'}} />}>
          <Calculator lang={lang} />
          <WaveDivider variant={2} color="var(--bg)" />
          <FeaturedArticles lang={lang} onOpen={openArticle} materialFilter={materialFilter} />
          <ReadingHistory lang={lang} onOpen={openArticle} />
          <MostRead lang={lang} onOpen={openArticle} />
          <JewelryTypeExplorer lang={lang} activeType={jewelryTypeFilter} onSelectType={selectJewelryType} />
          <Categories lang={lang} onFilter={filterCat} materialFilter={materialFilter} />
          <AllArticles lang={lang} onOpen={openArticle} catFilter={catFilter} setCatFilter={setCatFilter}
            materialFilter={materialFilter} setMaterialFilter={setMaterialFilter}
            jewelryTypeFilter={jewelryTypeFilter} setJewelryTypeFilter={setJewelryTypeFilter} />
          <WaveDivider variant={3} color="var(--card)" />
          <ToolsGrid lang={lang} onOpenTool={openTool} />
          <AtlasPreview lang={lang} />
          <WaveDivider variant={1} />
          <QuranSilver lang={lang} onOpenArticle={openArticle} />
          <WaveDivider variant={2} flip />
          <SponsorCTA lang={lang} />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer lang={lang} />
      </Suspense>

      {/* PWA Install Banner */}
      {showInstall && (
        <div className="pwa-install-banner">
          <span>💎</span>
          <span className="pwa-install-text">
            {lang === 'tr' ? 'JewelPedi\'yi yükle' : lang === 'ar' ? 'ثبّت JewelPedi' : 'Install JewelPedi'}
          </span>
          <button className="pwa-install-btn" onClick={handleInstall}>
            {lang === 'tr' ? 'Yükle' : lang === 'ar' ? 'تثبيت' : 'Install'}
          </button>
          <button className="pwa-install-close" onClick={() => setShowInstall(false)}>✕</button>
        </div>
      )}

      <BottomNav lang={lang} />
      <ScrollToTop />

      <Suspense fallback={null}>
        <ArticleDetail article={article} lang={lang} onClose={closeArticle} onOpen={openArticle} />
        <ToolModal tool={activeTool} toolIndex={activeToolIdx} lang={lang} onClose={closeTool}
          onOpenArticle={(a) => { closeTool(); setTimeout(() => openArticle(a), 350); }} />
        {personSlug && (
          <div className="person-page-overlay" style={{position:'fixed',inset:0,background:'var(--bg,#fff)',zIndex:9999,overflow:'auto'}}>
            <PersonPage slug={personSlug} lang={lang} onClose={() => { setPersonSlug(null); navigate('/'); }} />
          </div>
        )}
      </Suspense>
    </div>
  );
}
