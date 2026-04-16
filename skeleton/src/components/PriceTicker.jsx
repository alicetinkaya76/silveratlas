import React from 'react';
import useSilverPrice from '../hooks/useSilverPrice';

const L = {
  tr: { silver: 'GÜMÜŞ', gold: 'ALTIN', platinum: 'PLATİN', palladium: 'PALADYUM', oz: '/ons', g: '/g', live: 'CANLI', loading: 'Fiyat yükleniyor...', tl: '₺/g' },
  en: { silver: 'SILVER', gold: 'GOLD', platinum: 'PLATINUM', palladium: 'PALLADIUM', oz: '/oz', g: '/g', live: 'LIVE', loading: 'Loading price...', tl: '₺/g' },
  ar: { silver: 'فضة', gold: 'ذهب', platinum: 'بلاتين', palladium: 'بالاديوم', oz: '/أونصة', g: '/غ', live: 'مباشر', loading: '...جار التحميل', tl: '₺/غ' },
};

export default function PriceTicker({ lang }) {
  const lp = useSilverPrice();
  const t = L[lang] || L.tr;
  const { silver, gold, platinum, palladium, usdtry } = lp;
  const rate = usdtry;
  const hasPrice = silver && rate;
  const silverG = hasPrice ? (silver / 31.1035).toFixed(2) : null;
  const silverTL = hasPrice ? ((silver / 31.1035) * rate).toFixed(2) : null;
  const goldTL = (gold && rate) ? ((gold / 31.1035) * rate).toFixed(2) : null;
  const platinumTL = (platinum && rate) ? ((platinum / 31.1035) * rate).toFixed(2) : null;

  if (!silver && !lp.ts) return (
    <div className="price-ticker"><div className="pt-inner"><span className="pt-loading">{t.loading}</span></div></div>
  );
  if (!hasPrice) return null;

  return (
    <div className="price-ticker">
      <div className="pt-inner">
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
                {goldTL && <><span className="pt-price pt-tl">₺{goldTL}</span><span className="pt-unit">{t.tl}</span></>}
                <span className="pt-divider">│</span>
                {platinum && <>
                  <span className="pt-label">{t.platinum}</span>
                  <span className="pt-price" style={{color:'#E5E4E2'}}>${platinum?.toFixed(0)}</span>
                  <span className="pt-unit">{t.oz}</span>
                  {platinumTL && <><span className="pt-price pt-tl">₺{platinumTL}</span><span className="pt-unit">{t.tl}</span></>}
                  <span className="pt-divider">│</span>
                </>}
                {palladium && <>
                  <span className="pt-label">{t.palladium}</span>
                  <span className="pt-price" style={{color:'#CED0CE'}}>${palladium?.toFixed(0)}</span>
                  <span className="pt-unit">{t.oz}</span>
                  <span className="pt-divider">│</span>
                </>}
                <span className="pt-label">USD/TRY</span>
                <span className="pt-price pt-tl">₺{rate.toFixed(2)}</span>
                <span className="pt-divider">│</span>
                <span className="pt-label">Au/Ag</span>
                <span className="pt-ratio">1:{silver && gold ? (gold/silver).toFixed(0) : '--'}</span>
                <span className="pt-spacer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
