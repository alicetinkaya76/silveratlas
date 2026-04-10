import React from 'react';
import useSilverPrice from '../hooks/useSilverPrice';

const L = {
  tr: { silver: 'GÜMÜŞ', gold: 'ALTIN', oz: '/ons', g: '/g', live: 'CANLI', loading: 'Fiyat yükleniyor...', tl: '₺/g' },
  en: { silver: 'SILVER', gold: 'GOLD', oz: '/oz', g: '/g', live: 'LIVE', loading: 'Loading price...', tl: '₺/g' },
  ar: { silver: 'فضة', gold: 'ذهب', oz: '/أونصة', g: '/غ', live: 'مباشر', loading: '...جار التحميل', tl: '₺/غ' },
};

export default function PriceTicker({ lang }) {
  const lp = useSilverPrice();
  const t = L[lang] || L.tr;

  const silver = lp.silver;
  const gold = lp.gold;
  const rate = lp.usdtry || 44.5;
  const loading = !silver;

  const silverG = silver ? (silver / 31.1035).toFixed(2) : null;
  const goldG = gold ? (gold / 31.1035).toFixed(2) : null;
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
