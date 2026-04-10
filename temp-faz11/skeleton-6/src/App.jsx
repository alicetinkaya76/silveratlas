import React, { useState, useCallback } from 'react';
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
import Calculator from './sections/Calculator';
import FeaturedArticles from './sections/FeaturedArticles';
import Categories from './sections/Categories';
import AllArticles from './sections/AllArticles';
import ToolsGrid from './sections/ToolsGrid';
import AtlasPreview from './sections/AtlasPreview';
import QuranSilver from './sections/QuranSilver';
import SponsorCTA from './sections/SponsorCTA';
import Footer from './components/Footer';
import ArticleDetail from './components/ArticleDetail';
import ToolModal from './components/ToolModal';
import { ARTICLES } from './data/articles';

export default function App() {
  const { dark, toggle: toggleTheme } = useTheme();
  const { lang, setLang, cycle: cycleLang, isRTL } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [article, setArticle] = useState(null);
  const [catFilter, setCatFilter] = useState(null);
  const [activeTool, setActiveTool] = useState(null);
  const [activeToolIdx, setActiveToolIdx] = useState(null);
  const [splashDone, setSplashDone] = useState(false);

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
  const filterCat = useCallback((catId) => {
    setCatFilter(catId);
    document.getElementById('articles-section')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}

      <Nav lang={lang} dark={dark} cycleLang={cycleLang} toggleTheme={toggleTheme} openMenu={openMenu} />
      <MobileMenu open={menuOpen} close={closeMenu} lang={lang} setLang={setLang} dark={dark} toggleTheme={toggleTheme} />
      <PriceTicker lang={lang} />

      <main role="main">
        <Hero lang={lang} onOpenTool={openTool} />
        <WaveDivider variant={1} color="var(--card)" />
        <QuickTools lang={lang} onOpenTool={openTool} />
        <Calculator lang={lang} />
        <WaveDivider variant={2} color="var(--bg)" />
        <FeaturedArticles lang={lang} onOpen={openArticle} />
        <Categories lang={lang} onFilter={filterCat} />
        <AllArticles lang={lang} onOpen={openArticle} catFilter={catFilter} setCatFilter={setCatFilter} />
        <WaveDivider variant={3} color="var(--card)" />
        <ToolsGrid lang={lang} onOpenTool={openTool} />
        <AtlasPreview lang={lang} />
        <WaveDivider variant={1} />
        <QuranSilver lang={lang} onOpenArticle={openArticle} />
        <WaveDivider variant={2} flip />
        <SponsorCTA lang={lang} />
      </main>
      <Footer lang={lang} />

      <BottomNav lang={lang} />
      <ScrollToTop />

      <ArticleDetail article={article} lang={lang} onClose={closeArticle} onOpen={openArticle} />
      <ToolModal tool={activeTool} toolIndex={activeToolIdx} lang={lang} onClose={closeTool} />
    </div>
  );
}
