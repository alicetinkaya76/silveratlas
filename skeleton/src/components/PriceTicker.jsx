import React, { useState, useEffect, useRef } from 'react';

const L = {
  tr: { silver: 'GÜMÜŞ', gold: 'ALTIN', oz: '/ons', g: '/g', live: 'CANLI', loading: 'Fiyat yükleniyor...', tl: '₺/g' },
  en: { silver: 'SILVER', gold: 'GOLD', oz: '/oz', g: '/g', live: 'LIVE', loading: 'Loading price...', tl: '₺/g' },
  ar: { silver: 'فضة', gold: 'ذهب', oz: '/أونصة', g: '/غ', live: 'مباشر', loading: '...جار التحميل', tl: '₺/غ' },
};

export default function PriceTicker({ lang }) {
  const [d, setD] = useState({ silver: null, gold: null, usdtry: null });
  const [loading, setLoading] = useState(true);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    const fetchAll = async () => {
      let silverUSD = null, goldUSD = null, silverTRY = null, tryRate = null;

      // Primary: metals.dev — USD prices
      try {
        const r = await fetch('https://api.metals.dev/v1/latest?api_key=demo&currency=USD&unit=toz');
        if (r.ok) {
          const j = await r.json();
          silverUSD = j?.metals?.silver || null;
          goldUSD = j?.metals?.gold || null;
        }
      } catch {}

      // TRY prices from same API
      try {
        const r2 = await fetch('https://api.metals.dev/v1/latest?api_key=demo&currency=TRY&unit=toz');
        if (r2.ok) {
          const j2 = await r2.json();
          silverTRY = j2?.metals?.silver || null;
          if (silverUSD && silverTRY) tryRate = silverTRY / silverUSD;
        }
      } catch {}

      // Fallback: frankfurter.app for USD/TRY if metals API didn't give TRY
      if (!tryRate) {
        try {
          const r3 = await fetch('https://api.frankfurter.app/latest?from=USD&to=TRY');
          if (r3.ok) {
            const j3 = await r3.json();
            tryRate = j3?.rates?.TRY || null;
          }
        } catch {}
      }

      // No fallback prices — hide if API fails (master prompt rule)
      if (mounted.current) {
        setD({ silver: silverUSD, gold: goldUSD, usdtry: tryRate });
        setLoading(false);
      }
    };
    fetchAll();
    const iv = setInterval(fetchAll, 300000);
    return () => { mounted.current = false; clearInterval(iv); };
  }, []);

  const t = L[lang] || L.tr;
  const { silver, gold, usdtry } = d;
  const rate = usdtry;
  const hasPrice = silver && rate;
  const silverG = hasPrice ? (silver / 31.1035).toFixed(2) : null;
  const silverTL = hasPrice ? ((silver / 31.1035) * rate).toFixed(2) : null;
  const goldTL = (gold && rate) ? ((gold / 31.1035) * rate).toFixed(2) : null;

  if (!loading && !hasPrice) return null;

  return (
    <div className="price-ticker">
      <div className="pt-inner">
        {loading ? (
          <span className="pt-loading">{t.loading}</span>
        ) : (
          <div className="pt-scroll">
            <div className="pt-track">
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
                  <span className="pt-ratio">1:{silver && gold ? (gold/silver).toFixed(0) : '--'}</span>
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
