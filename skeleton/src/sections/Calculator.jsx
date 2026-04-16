import React, { useState } from 'react';
import { t } from '../i18n/translations';
import FadeUp from '../components/FadeUp';
import LivePrice from '../components/LivePrice';
import useSilverPrice from '../hooks/useSilverPrice';
import { IconScale } from '../components/Icons';

const SILVER_PURITIES = [
  { value: 0.999, label: '999 (Saf/Pure)' },
  { value: 0.925, label: '925 (Sterling)' },
  { value: 0.900, label: '900' },
  { value: 0.835, label: '835' },
  { value: 0.800, label: '800' },
];
const GOLD_PURITIES = [
  { value: 0.999, label: '24K (999)' },
  { value: 0.916, label: '22K (916)' },
  { value: 0.750, label: '18K (750)' },
  { value: 0.585, label: '14K (585)' },
  { value: 0.417, label: '10K (417)' },
];
const GOLD_KARATS = [
  { k: '24K', f: 0.999 },
  { k: '22K', f: 0.916 },
  { k: '18K', f: 0.750 },
  { k: '14K', f: 0.585 },
  { k: '10K', f: 0.417 },
  { k: '8K',  f: 0.333 },
];

export default function Calculator({ lang }) {
  const [metal, setMetal] = useState('silver');
  const [weight, setWeight] = useState(10);
  const [purity, setPurity] = useState(0.925);
  const lp = useSilverPrice();
  const result = (weight * purity).toFixed(2);
  const purities = metal === 'gold' ? GOLD_PURITIES : SILVER_PURITIES;
  const accentColor = metal === 'gold' ? 'var(--gold)' : 'var(--silver)';

  const goldPerGTL = lp.gold && lp.usdtry ? (lp.gold / 31.1035) * lp.usdtry : null;

  return (
    <section className="section calc-section">
      <FadeUp>
        <LivePrice lang={lang} />
      </FadeUp>
      <FadeUp>
        <div className="calc-box">
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <IconScale size={36} style={{ color: accentColor }} />
            <h2 className="section-title" style={{ fontSize: 'clamp(1.2rem,3vw,1.6rem)', marginTop: 8 }}>
              {t(lang, 'sections.calculator')}
            </h2>
          </div>
          {/* Metal toggle */}
          <div style={{display:'flex',gap:4,marginBottom:16,padding:3,background:'var(--bg)',borderRadius:10,border:'1px solid var(--border)'}}>
            {[{id:'silver',l:{tr:'🥈 Gümüş',en:'🥈 Silver',ar:'🥈 فضة'}},{id:'gold',l:{tr:'🥇 Altın',en:'🥇 Gold',ar:'🥇 ذهب'}}].map(m=>
              <button key={m.id} onClick={()=>{setMetal(m.id);setPurity(m.id==='gold'?0.750:0.925)}} style={{flex:1,padding:'8px',borderRadius:8,border:'none',cursor:'pointer',fontSize:13,fontWeight:600,background:metal===m.id?(m.id==='gold'?'rgba(212,175,55,0.15)':'rgba(192,192,192,0.12)'):'transparent',color:metal===m.id?(m.id==='gold'?'var(--gold)':'var(--silver)'):'var(--text3)'}}>{m.l[lang]}</button>
            )}
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
              {purities.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
            </select>
          </div>
          <div className="calc-result">
            <div className="calc-result-num" style={{color: accentColor}}>{result} g</div>
            <div className="calc-result-label">{metal === 'gold' ? (lang === 'tr' ? 'Saf Altın' : lang === 'ar' ? 'الذهب الخالص' : 'Pure Gold') : t(lang, 'calc.result')}</div>
          </div>
        </div>
      </FadeUp>

      {/* Gold Karat Price Table — only when gold is selected and live price available */}
      {metal === 'gold' && goldPerGTL && (
        <FadeUp>
          <div className="calc-box" style={{ marginTop: 16 }}>
            <div style={{ textAlign: 'center', marginBottom: 14 }}>
              <h3 style={{ fontFamily: 'var(--f-head)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--gold)' }}>
                {lang === 'tr' ? 'Canlı Ayar Fiyat Tablosu' : lang === 'ar' ? 'جدول أسعار العيارات المباشر' : 'Live Karat Price Table'}
              </h3>
              <div style={{ fontSize: '.7rem', color: 'var(--text3)', fontFamily: 'var(--f-mono)' }}>
                {lang === 'tr' ? 'Spot bazlı · İşçilik hariç' : 'Spot-based · Excl. craftsmanship'}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr', gap: '6px 12px', alignItems: 'center' }}>
              <div style={{ fontSize: '.7rem', color: 'var(--text3)', fontWeight: 600 }}>{lang === 'tr' ? 'Ayar' : 'Karat'}</div>
              <div style={{ fontSize: '.7rem', color: 'var(--text3)', fontWeight: 600, textAlign: 'right' }}>₺/g</div>
              <div style={{ fontSize: '.7rem', color: 'var(--text3)', fontWeight: 600, textAlign: 'right' }}>$/g</div>
              {GOLD_KARATS.map(gk => {
                const tlG = (goldPerGTL * gk.f).toFixed(2);
                const usdG = lp.gold ? ((lp.gold / 31.1035) * gk.f).toFixed(3) : '--';
                return (
                  <React.Fragment key={gk.k}>
                    <div style={{ fontFamily: 'var(--f-mono)', fontWeight: 700, fontSize: '.85rem', color: 'var(--gold)', opacity: 0.5 + gk.f * 0.5 }}>{gk.k}</div>
                    <div style={{ fontFamily: 'var(--f-mono)', fontWeight: 600, fontSize: '.9rem', color: 'var(--green)', textAlign: 'right' }}>₺{tlG}</div>
                    <div style={{ fontFamily: 'var(--f-mono)', fontSize: '.8rem', color: 'var(--text2)', textAlign: 'right' }}>${usdG}</div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </FadeUp>
      )}
    </section>
  );
}
