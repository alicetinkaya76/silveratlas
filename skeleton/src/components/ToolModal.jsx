import React, { useState, useEffect } from 'react';
import { t } from '../i18n/translations';

/* ─── Mini tool implementations ─── */
function PurityCalc({ lang }) {
  const [w, setW] = useState(10);
  const [p, setP] = useState(0.925);
  return (
    <div className="tm-tool">
      <label className="calc-label">{lang === 'tr' ? 'Ağırlık (gram)' : lang === 'en' ? 'Weight (g)' : 'الوزن (غرام)'}</label>
      <input type="number" className="calc-input" value={w} onChange={e => setW(+e.target.value)} min="0" step="0.1" inputMode="decimal" />
      <label className="calc-label" style={{ marginTop: 12 }}>{lang === 'tr' ? 'Ayar' : 'Purity'}</label>
      <select className="calc-select" value={p} onChange={e => setP(+e.target.value)}>
        <option value={0.999}>999 (Pure)</option>
        <option value={0.925}>925 (Sterling)</option>
        <option value={0.900}>900</option>
        <option value={0.835}>835</option>
        <option value={0.800}>800</option>
      </select>
      <div className="calc-result" style={{ marginTop: 16 }}>
        <div className="calc-result-num">{(w * p).toFixed(2)} g</div>
        <div className="calc-result-label">{lang === 'tr' ? 'Saf Gümüş' : 'Pure Silver'}</div>
      </div>
    </div>
  );
}

function UnitConverter({ lang }) {
  const [val, setVal] = useState(1);
  const [from, setFrom] = useState('oz');
  const rates = { oz: 31.1035, g: 1, kg: 1000, lb: 453.592, tola: 11.664 };
  const grams = val * rates[from];
  return (
    <div className="tm-tool">
      <label className="calc-label">{lang === 'tr' ? 'Miktar' : 'Amount'}</label>
      <input type="number" className="calc-input" value={val} onChange={e => setVal(+e.target.value)} min="0" step="0.01" inputMode="decimal" />
      <label className="calc-label" style={{ marginTop: 12 }}>{lang === 'tr' ? 'Birim' : 'Unit'}</label>
      <select className="calc-select" value={from} onChange={e => setFrom(e.target.value)}>
        <option value="oz">Troy Ounce (oz t)</option>
        <option value="g">Gram (g)</option>
        <option value="kg">Kilogram (kg)</option>
        <option value="lb">Pound (lb)</option>
        <option value="tola">Tola</option>
      </select>
      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {Object.entries(rates).filter(([k]) => k !== from).map(([unit, rate]) => (
          <div key={unit} className="tm-result-row">
            <span style={{ fontFamily: 'var(--f-mono)', fontWeight: 600, color: 'var(--silver)' }}>
              {(grams / rate).toFixed(4)}
            </span>
            <span style={{ color: 'var(--text2)', fontSize: '.85rem', marginLeft: 8 }}>{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RingSizer({ lang }) {
  const [mm, setMm] = useState(52);
  const sizes = [
    { us: 3, uk: 'F', mm: 44.2 }, { us: 4, uk: 'H', mm: 46.5 }, { us: 5, uk: 'J½', mm: 49.0 },
    { us: 6, uk: 'L½', mm: 51.5 }, { us: 7, uk: 'N½', mm: 54.0 }, { us: 8, uk: 'P½', mm: 56.6 },
    { us: 9, uk: 'R½', mm: 59.1 }, { us: 10, uk: 'T½', mm: 61.6 }, { us: 11, uk: 'V½', mm: 64.1 },
    { us: 12, uk: 'Y', mm: 66.6 },
  ];
  const closest = sizes.reduce((a, b) => Math.abs(b.mm - mm) < Math.abs(a.mm - mm) ? b : a);
  return (
    <div className="tm-tool">
      <label className="calc-label">{lang === 'tr' ? 'İç çevre (mm)' : 'Inner circumference (mm)'}</label>
      <input type="range" min="40" max="70" step="0.5" value={mm}
        onChange={e => setMm(+e.target.value)}
        style={{ width: '100%', margin: '8px 0 4px', accentColor: 'var(--silver)' }} />
      <div style={{ textAlign: 'center', fontFamily: 'var(--f-mono)', fontSize: '1.2rem', marginBottom: 16 }}>{mm} mm</div>
      <div className="calc-result">
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div><div className="calc-result-num" style={{ fontSize: '1.4rem' }}>{closest.us}</div><div className="calc-result-label">US</div></div>
          <div><div className="calc-result-num" style={{ fontSize: '1.4rem' }}>{closest.uk}</div><div className="calc-result-label">UK</div></div>
          <div><div className="calc-result-num" style={{ fontSize: '1.4rem' }}>{closest.mm}</div><div className="calc-result-label">mm</div></div>
        </div>
      </div>
    </div>
  );
}

function ZakatCalc({ lang }) {
  const [g, setG] = useState(612);
  const [price, setPrice] = useState(30);
  const nisab = 612; // grams
  const total = g * price;
  const zakat = g >= nisab ? total * 0.025 : 0;
  return (
    <div className="tm-tool">
      <label className="calc-label">{lang === 'tr' ? 'Toplam gümüş (gram)' : 'Total silver (grams)'}</label>
      <input type="number" className="calc-input" value={g} onChange={e => setG(+e.target.value)} min="0" inputMode="numeric" />
      <label className="calc-label" style={{ marginTop: 12 }}>{lang === 'tr' ? '1g fiyat (₺ veya $)' : 'Price per gram'}</label>
      <input type="number" className="calc-input" value={price} onChange={e => setPrice(+e.target.value)} min="0" step="0.01" inputMode="decimal" />
      <div className="calc-result" style={{ marginTop: 16 }}>
        {g >= nisab ? (
          <>
            <div className="calc-result-num">{zakat.toFixed(2)}</div>
            <div className="calc-result-label">{lang === 'tr' ? 'Ödenecek Zekât (%2.5)' : 'Zakat Due (2.5%)'}</div>
          </>
        ) : (
          <>
            <div className="calc-result-num" style={{ color: 'var(--text2)', fontSize: '1.2rem' }}>
              {lang === 'tr' ? 'Nisab altında' : 'Below nisab'}
            </div>
            <div className="calc-result-label">{lang === 'tr' ? `Nisab: ${nisab}g gümüş` : `Nisab: ${nisab}g silver`}</div>
          </>
        )}
      </div>
    </div>
  );
}

/* ─── Tool registry ─── */
const TOOL_COMPONENTS = {
  0: PurityCalc,
  1: UnitConverter,
  2: RingSizer,
  14: ZakatCalc,
};

export default function ToolModal({ tool, toolIndex, lang, onClose }) {
  useEffect(() => {
    if (!tool) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [tool, onClose]);

  if (!tool) return null;

  const ToolComp = TOOL_COMPONENTS[toolIndex];

  return (
    <div className="tm-overlay" onClick={onClose}>
      <div className="tm-sheet" onClick={e => e.stopPropagation()}>
        <div className="tm-header">
          <span style={{ fontSize: '1.5rem' }}>{tool.i}</span>
          <span style={{ fontFamily: 'var(--f-head)', fontWeight: 600, fontSize: '1.1rem', flex: 1 }}>{tool[lang]}</span>
          <button className="ad-back" style={{ width: 40, height: 40, fontSize: '1rem' }} onClick={onClose}>✕</button>
        </div>
        <div className="tm-body">
          {ToolComp ? (
            <ToolComp lang={lang} />
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text2)' }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: 16 }}>{tool.i}</span>
              <p style={{ fontSize: '1rem', marginBottom: 8 }}>{tool[lang]}</p>
              <p style={{ fontSize: '.85rem', color: 'var(--text3)' }}>
                {lang === 'tr' ? 'Bu araç yakında aktif olacak.' : lang === 'en' ? 'This tool will be active soon.' : 'ستكون هذه الأداة نشطة قريبًا.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
