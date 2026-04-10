import React, { useState } from 'react';
import { t } from '../i18n/translations';
import FadeUp from '../components/FadeUp';
import LivePrice from '../components/LivePrice';
import { IconScale } from '../components/Icons';

const PURITIES = [
  { value: 0.999, label: '999 (Saf/Pure)' },
  { value: 0.925, label: '925 (Sterling)' },
  { value: 0.900, label: '900' },
  { value: 0.835, label: '835' },
  { value: 0.800, label: '800' },
];

export default function Calculator({ lang }) {
  const [weight, setWeight] = useState(10);
  const [purity, setPurity] = useState(0.925);
  const result = (weight * purity).toFixed(2);

  return (
    <section className="section calc-section">
      <FadeUp>
        <LivePrice lang={lang} />
      </FadeUp>
      <FadeUp>
        <div className="calc-box">
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <IconScale size={36} style={{ color: 'var(--silver)' }} />
            <h2 className="section-title" style={{ fontSize: 'clamp(1.2rem,3vw,1.6rem)', marginTop: 8 }}>
              {t(lang, 'sections.calculator')}
            </h2>
          </div>
          <div className="calc-row">
            <label className="calc-label">{t(lang, 'calc.weight')}</label>
            <input type="number" className="calc-input" value={weight}
              onChange={e => setWeight(Math.max(0, +e.target.value))}
              min="0" step="0.1" inputMode="decimal" />
          </div>
          <div className="calc-row">
            <label className="calc-label">{t(lang, 'calc.purity')}</label>
            <select className="calc-select" value={purity} onChange={e => setPurity(+e.target.value)}>
              {PURITIES.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
            </select>
          </div>
          <div className="calc-result">
            <div className="calc-result-num">{result} g</div>
            <div className="calc-result-label">{t(lang, 'calc.result')}</div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
