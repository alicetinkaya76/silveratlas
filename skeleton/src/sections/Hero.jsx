import React, { useEffect, useRef } from 'react';
import { t } from '../i18n/translations';
import useSilverPrice from '../hooks/useSilverPrice';
import { TOOLS } from '../data/tools';
import { getToolIcon } from '../components/Icons';

const HERO_TOOLS = [2, 32, 31]; // Ring, Melt Value, Counterfeit

export default function Hero({ lang, onOpenTool }) {
  const ref = useRef(null);
  const canvasRef = useRef(null);
  const lp = useSilverPrice();

  // Silver particle animation with RAF throttle (30fps cap)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let lastTime = 0;
    const interval = 1000 / 30;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      r: Math.random() * 1.2 + 0.2,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.15 - 0.08,
      o: Math.random() * 0.3 + 0.05,
    }));

    const draw = (now) => {
      raf = requestAnimationFrame(draw);
      const delta = now - lastTime;
      if (delta < interval) return;
      lastTime = now - (delta % interval);
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192,192,192,${p.o})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      });
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  const silverTLg = lp.silverPerGTL ? lp.silverPerGTL.toFixed(2) : null;

  const FEATURES = {
    tr: ['68 Makale · 3 Dil', '33 İnteraktif Araç', '297 Harita Noktası', 'Canlı Fiyat Takibi'],
    en: ['68 Articles · 3 Languages', '33 Interactive Tools', '297 Map Points', 'Live Price Tracking'],
    ar: ['٦٨ مقال · ٣ لغات', '٣٣ أداة تفاعلية', '٢٩٧ نقطة خريطة', 'تتبع الأسعار المباشر'],
  }[lang] || [];

  const PILL_SVG = [
    <svg key="p0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z"/></svg>,
    <svg key="p1" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
    <svg key="p2" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg>,
    <svg key="p3" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  ];

  return (
    <section className="hero" id="hero" ref={ref}>
      <canvas ref={canvasRef} className="hero-particles" />
      <div className="hero-orb hero-orb1" />
      <div className="hero-orb hero-orb2" />

      <div className="hero-ag">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <defs><linearGradient id="agHero" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0e0e0"/><stop offset="50%" stopColor="#D4AF37"/><stop offset="100%" stopColor="#C0C0C0"/>
          </linearGradient></defs>
          <circle cx="24" cy="24" r="22" fill="none" stroke="url(#agHero)" strokeWidth="1.5" opacity=".5"/>
          <text x="24" y="29" textAnchor="middle" fill="url(#agHero)" fontSize="18" fontWeight="800"
            fontFamily="'Playfair Display',Georgia,serif">47</text>
        </svg>
      </div>

      <h1 className="hero-h1">
        {t(lang, 'hero.title1')}{' '}
        <span className="gradient">{t(lang, 'hero.title2')}</span>
        <br />
        {t(lang, 'hero.title3')}
      </h1>

      <p className="hero-sub">{t(lang, 'hero.sub')}</p>

      {silverTLg && (
        <div className="hero-price">
          <span className="hero-price-dot" />
          <span className="hero-price-label">{t(lang, 'price.silver')}</span>
          <span className="hero-price-val">₺{silverTLg}</span>
          <span className="hero-price-unit">/g</span>
        </div>
      )}

      <div className="hero-pills">
        {FEATURES.map((f, i) => (
          <span className="hero-pill" key={i}>
            <span className="hero-pill-icon">{PILL_SVG[i]}</span>
            {f}
          </span>
        ))}
      </div>

      <div className="hero-ctas">
        <a href="#articles-section" className="btn btn-primary">{t(lang, 'cta.articles')}</a>
        <a href="#tools-section" className="btn btn-secondary">{t(lang, 'cta.tools')}</a>
      </div>

      {onOpenTool && (
        <div className="hero-tools">
          {HERO_TOOLS.map(idx => {
            const tool = TOOLS[idx];
            if (!tool) return null;
            return (
              <div className="hero-tool-card" key={idx}
                onClick={() => onOpenTool(tool, idx)} role="button" tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && onOpenTool(tool, idx)}>
                <span className="hero-tool-icon">{getToolIcon(idx, 20)}</span>
                <span className="hero-tool-name">{tool[lang]}</span>
              </div>
            );
          })}
        </div>
      )}

      <div className="scroll-indicator" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  );
}
