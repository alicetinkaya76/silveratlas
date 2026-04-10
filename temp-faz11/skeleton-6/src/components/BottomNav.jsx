import React, { useState, useEffect } from 'react';
import { t } from '../i18n/translations';
import { IconExplore, IconArticles, IconToolsNav, IconAtlas, IconQuranNav } from './Icons';

const TABS = [
  { id: 'hero', key: 'explore', Icon: IconExplore },
  { id: 'articles-section', key: 'articles', Icon: IconArticles },
  { id: 'tools-section', key: 'tools', Icon: IconToolsNav },
  { id: 'atlas-section', key: 'atlas', Icon: IconAtlas },
  { id: 'quran-section', key: 'quran', Icon: IconQuranNav },
];

export default function BottomNav({ lang }) {
  const [active, setActive] = useState('hero');
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        // Hide on scroll down, show on scroll up
        setVisible(y < 60 || y < lastY);
        setLastY(y);

        // Detect active section
        for (let i = TABS.length - 1; i >= 0; i--) {
          const el = document.getElementById(TABS[i].id);
          if (el && el.getBoundingClientRect().top <= 200) {
            setActive(TABS[i].id);
            break;
          }
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  const scrollTo = (id) => {
    // Close any open article/tool
    const articleClose = document.querySelector('.ad.open .ad-back');
    if (articleClose) articleClose.click();
    const toolClose = document.querySelector('.tm-overlay .tm-header button');
    if (toolClose) toolClose.click();

    setTimeout(() => {
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, articleClose || toolClose ? 350 : 0);
  };

  return (
    <nav className={`bottom-nav${visible ? '' : ' hidden'}`} aria-label="Mobile navigation">
      {TABS.map(tab => {
        const isActive = active === tab.id;
        return (
          <button key={tab.id}
            className={`bn-tab${isActive ? ' active' : ''}`}
            onClick={() => scrollTo(tab.id)}
            aria-label={t(lang, `nav.${tab.key}`)}>
            <tab.Icon size={22} />
            <span className="bn-label">{t(lang, `nav.${tab.key}`)}</span>
          </button>
        );
      })}
    </nav>
  );
}
