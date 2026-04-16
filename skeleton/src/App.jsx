import React, { useState, useCallback, useEffect, useRef, Suspense, lazy } from 'react';
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
const Footer = lazy(() => import('./components/Footer'));
const ArticleDetail = lazy(() => import('./components/ArticleDetail'));
const ToolModal = lazy(() => import('./components/ToolModal'));

export default function App() {
  const { dark, mode: themeMode, toggle: toggleTheme } = useTheme();
  const { lang, setLang, cycle: cycleLang, isRTL } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [article, setArticle] = useState(null);
  const [catFilter, setCatFilter] = useState(null);
  const [materialFilter, setMaterialFilter] = useState(null);
  const [activeTool, setActiveTool] = useState(null);
  const [activeToolIdx, setActiveToolIdx] = useState(null);
  const [splashDone, setSplashDone] = useState(false);
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);
  const deferredPrompt = useRef(null);

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

  const openArticle = useCallback((a) => {
    let art = a;
    if (a && !a.cat && (a.id || a.slug)) {
      art = ARTICLES.find(x => x.id === a.id || x.slug === a.slug) || a;
    }
    setArticle(art);
    document.body.style.overflow = 'hidden';
  }, []);
  const closeArticle = useCallback(() => { setArticle(null); document.body.style.overflow = ''; }, []);
  const openMenu = useCallback(() => { setMenuOpen(true); document.body.style.overflow = 'hidden'; }, []);
  const closeMenu = useCallback(() => { setMenuOpen(false); document.body.style.overflow = ''; }, []);
  const openTool = useCallback((tool, idx) => { setActiveTool(tool); setActiveToolIdx(idx); document.body.style.overflow = 'hidden'; }, []);
  const closeTool = useCallback(() => { setActiveTool(null); setActiveToolIdx(null); document.body.style.overflow = ''; }, []);
  const filterCat = useCallback((catId, material) => {
    setCatFilter(catId);
    if (material) setMaterialFilter(material);
    document.getElementById('articles-section')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}

      <Nav lang={lang} dark={dark} themeMode={themeMode} cycleLang={cycleLang} toggleTheme={toggleTheme} openMenu={openMenu} />
      <MobileMenu open={menuOpen} close={closeMenu} lang={lang} setLang={setLang} dark={dark} themeMode={themeMode} toggleTheme={toggleTheme} />
      <PriceTicker lang={lang} />

      <main role="main">
        <Hero lang={lang} onOpenTool={openTool} />
        <WaveDivider variant={1} color="var(--card)" />
        <QuickTools lang={lang} onOpenTool={openTool} />
        <Suspense fallback={<div style={{minHeight:'60vh'}} />}>
          <Calculator lang={lang} />
          <WaveDivider variant={2} color="var(--bg)" />
          <FeaturedArticles lang={lang} onOpen={openArticle} materialFilter={materialFilter} />
          <ReadingHistory lang={lang} onOpen={openArticle} />
          <MostRead lang={lang} onOpen={openArticle} />
          <Categories lang={lang} onFilter={filterCat} materialFilter={materialFilter} />
          <AllArticles lang={lang} onOpen={openArticle} catFilter={catFilter} setCatFilter={setCatFilter}
            materialFilter={materialFilter} setMaterialFilter={setMaterialFilter} />
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
      </Suspense>
    </div>
  );
}
