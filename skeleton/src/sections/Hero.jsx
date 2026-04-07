import React, { useEffect, useRef } from 'react';
import { t } from '../i18n/translations';

const COUNTERS = [
  { target: 50, key: 'stats.articles' },
  { target: 33, key: 'stats.tools' },
  { target: 297, key: 'stats.mapPoints' },
  { target: 3, key: 'stats.langs' },
];

export default function Hero({ lang }) {
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        ref.current?.querySelectorAll('[data-target]').forEach(el => {
          const target = +el.dataset.target;
          const dur = 1200;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / dur, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="hero-orb hero-orb1" />
      <div className="hero-orb hero-orb2" />
      <div className="hero-badge">{t(lang, 'hero.badge')}</div>
      <h1>
        {t(lang, 'hero.title1')}{' '}
        <span className="gradient">{t(lang, 'hero.title2')}</span>
        <br />
        {t(lang, 'hero.title3')}
      </h1>
      <p className="hero-sub">{t(lang, 'hero.sub')}</p>
      <div className="hero-stats">
        {COUNTERS.map(c => (
          <div className="stat-card" key={c.key}>
            <div className="stat-num" data-target={c.target}>0</div>
            <div className="stat-label">{t(lang, c.key)}</div>
          </div>
        ))}
      </div>
      <div className="hero-ctas">
        <a href="#articles-section" className="btn btn-primary">{t(lang, 'cta.articles')}</a>
        <a href="#tools-section" className="btn btn-secondary">{t(lang, 'cta.tools')}</a>
      </div>
      <div className="scroll-indicator" aria-hidden="true">↓</div>
    </section>
  );
}
