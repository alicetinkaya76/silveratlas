import React, { useState, useCallback } from 'react';
import { useTheme } from './hooks/useTheme';
import { useLang } from './hooks/useLang';
import Nav from './components/Nav';
import MobileMenu from './components/MobileMenu';
import Hero from './sections/Hero';
import QuickTools from './sections/QuickTools';
import Calculator from './sections/Calculator';
import FeaturedArticles from './sections/FeaturedArticles';
import Categories from './sections/Categories';
import AllArticles from './sections/AllArticles';
import ToolsGrid from './sections/ToolsGrid';
import AtlasPreview from './sections/AtlasPreview';
import SponsorCTA from './sections/SponsorCTA';
import Footer from './components/Footer';
import ArticleDetail from './components/ArticleDetail';
import ToolModal from './components/ToolModal';

export default function App() {
  const { dark, toggle: toggleTheme } = useTheme();
  const { lang, setLang, cycle: cycleLang, isRTL } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [article, setArticle] = useState(null);
  const [catFilter, setCatFilter] = useState(null);
  const [activeTool, setActiveTool] = useState(null);
  const [activeToolIdx, setActiveToolIdx] = useState(null);

  const openArticle = useCallback((a) => { setArticle(a); document.body.style.overflow = 'hidden'; }, []);
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
      <Nav lang={lang} dark={dark} cycleLang={cycleLang} toggleTheme={toggleTheme} openMenu={openMenu} />
      <MobileMenu open={menuOpen} close={closeMenu} lang={lang} setLang={setLang} dark={dark} toggleTheme={toggleTheme} />

      <Hero lang={lang} />
      <QuickTools lang={lang} onOpenTool={openTool} />
      <Calculator lang={lang} />
      <FeaturedArticles lang={lang} onOpen={openArticle} />
      <Categories lang={lang} onFilter={filterCat} />
      <AllArticles lang={lang} onOpen={openArticle} catFilter={catFilter} setCatFilter={setCatFilter} />
      <ToolsGrid lang={lang} onOpenTool={openTool} />
      <AtlasPreview lang={lang} />
      <SponsorCTA lang={lang} />
      <Footer lang={lang} />

      <ArticleDetail article={article} lang={lang} onClose={closeArticle} onOpen={openArticle} />
      <ToolModal tool={activeTool} toolIndex={activeToolIdx} lang={lang} onClose={closeTool} />
    </div>
  );
}
