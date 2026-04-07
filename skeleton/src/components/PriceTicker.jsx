import React, { useState, useEffect, useRef } from 'react';
import { IconTrendUp } from './Icons';

/* ═══════════════════════════════════════════
   Sticky Price Ticker — Always visible below nav
   Scrolling marquee style, live silver price
   ═══════════════════════════════════════════ */

const L = {
  tr: { silver: 'GÜMÜŞ', gold: 'ALTIN', oz: '/ons', g: '/g', live: 'CANLI', loading: 'Fiyat yükleniyor...', tl: '₺/g' },
  en: { silver: 'SILVER', gold: 'GOLD', oz: '/oz', g: '/g', live: 'LIVE', loading: 'Loading price...', tl: '₺/g' },
  ar: { silver: 'فضة', gold: 'ذهب', oz: '/أونصة', g: '/غ', live: 'مباشر', loading: '...جار التحميل', tl: '₺/غ' },
};

export default function PriceTicker({ lang }) {
  const [silver, setSilver] = useState(null);
  const [gold, setGold] = useState(null);
  const [usdtry, setUsdtry] = useState(null);
  const [loading, setLoading] = useState(true);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    const fetchPrices = async () => {
      try {
        const res = await fetch('https://api.metals.dev/v1/latest?api_key=demo&currency=USD&unit=toz');
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (mounted.current && data?.metals) {
          if (data.metals.silver) setSilver(data.metals.silver);
          if (data.metals.gold) setGold(data.metals.gold);
        }
      } catch {
        if (mounted.current) { setSilver(32.50); setGold(2950); }
      }
      // Fetch USD/TRY rate
      try {
        const r2 = await fetch('https://api.metals.dev/v1/latest?api_key=demo&currency=TRY&unit=toz');
        if (r2.ok) {
          const d2 = await r2.json();
          if (mounted.current && d2?.metals?.silver && silver) {
            setUsdtry(d2.metals.silver / (silver || 32.5));
          }
        }
      } catch {
        if (mounted.current) setUsdtry(38.5); // fallback approximate
      }
      if (mounted.current) setLoading(false);
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 300000);
    return () => { mounted.current = false; clearInterval(interval); };
  }, []);

  const t = L[lang] || L.tr;
  const silverG = silver ? (silver / 31.1035).toFixed(2) : null;
  const goldG = gold ? (gold / 31.1035).toFixed(2) : null;
  const rate = usdtry || 38.5;
  const silverTL = silver ? ((silver / 31.1035) * rate).toFixed(2) : null;
  const goldTL = gold ? ((gold / 31.1035) * rate).toFixed(2) : null;

  return (
    <div className="price-ticker">
      <div className="pt-inner">
        {loading ? (
          <span className="pt-loading">{t.loading}</span>
        ) : (
          <div className="pt-scroll">
            <div className="pt-track">
              {/* Duplicated for seamless scroll */}
              {[0,1].map(k => (
                <div className="pt-items" key={k} aria-hidden={k===1}>
                  <span className="pt-live-dot" />
                  <span className="pt-live">{t.live}</span>
                  <span className="pt-divider">│</span>
                  <span className="pt-label">{t.silver}</span>
                  <span className="pt-price pt-silver">${silver?.toFixed(2)}</span>
                  <span className="pt-unit">{t.oz}</span>
                  <span className="pt-sub">(${silverG}{t.g})</span>
                  <span className="pt-price pt-tl">₺{silverTL}</span>
                  <span className="pt-unit">{t.tl}</span>
                  <span className="pt-divider">│</span>
                  <span className="pt-label">{t.gold}</span>
                  <span className="pt-price pt-gold">${gold?.toFixed(0)}</span>
                  <span className="pt-unit">{t.oz}</span>
                  <span className="pt-price pt-tl">₺{goldTL}</span>
                  <span className="pt-unit">{t.tl}</span>
                  <span className="pt-divider">│</span>
                  <span className="pt-label">USD/TRY</span>
                  <span className="pt-price pt-tl">₺{rate.toFixed(2)}</span>
                  <span className="pt-divider">│</span>
                  <span className="pt-label">Ag/Au</span>
                  <span className="pt-ratio">1:{(gold/silver).toFixed(0)}</span>
                  <span className="pt-spacer" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
