import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SponsorCTA from '@components/SponsorCTA';
const HERO = {
  tr: { title: 'Gümüşün Tüm Bilgisi Bir Arada', subtitle: 'Tarih, bilim, piyasa, zanaat ve kültür — kapsamlı gümüş bilgi platformu', explore: 'Keşfet', tools: 'Araçlar', map: 'Dünya Haritası' },
  en: { title: 'Everything About Silver in One Place', subtitle: 'History, science, market, craft and culture — comprehensive silver knowledge platform', explore: 'Explore', tools: 'Tools', map: 'World Map' },
  ar: { title: 'كل شيء عن الفضة في مكان واحد', subtitle: 'التاريخ والعلوم والسوق والحرف والثقافة', explore: 'استكشف', tools: 'الأدوات', map: 'خريطة العالم' },
};
export default function Home({ lang, categories }) {
  const { t } = useTranslation();
  const h = HERO[lang] || HERO.tr;
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-badge">Ag — 47</div>
        <h1 className="hero-title">{h.title}</h1>
        <p className="hero-subtitle">{h.subtitle}</p>
        <div className="hero-actions">
          <Link to={`/${lang}/uretim`} className="btn btn-primary">{h.explore}</Link>
          <Link to={`/${lang}/araclar`} className="btn btn-outline">{h.tools}</Link>
          <Link to={`/${lang}/harita`} className="btn btn-outline">{h.map}</Link>
        </div>
      </section>
      <section className="categories-grid">
        {Object.entries(categories).map(([key, cat]) => (
          <Link key={key} to={`/${lang}/${cat.slug}`} className="category-card">
            <h3>{cat[lang]}</h3>
            <span className="article-count">{cat.articles.length}</span>
          </Link>
        ))}
      </section>
      <SponsorCTA />
    </div>
  );
}
