import { useState, useEffect, useRef } from 'react';

let _cache = { silver: null, gold: null, usdtry: null, silverPerG: null, silverPerGTL: null, ts: 0 };
const CACHE_TTL = 300000;

export default function useSilverPrice() {
  const [data, setData] = useState(_cache);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if (_cache.silver && Date.now() - _cache.ts < CACHE_TTL) {
      setData(_cache);
      return;
    }

    const fetchPrices = async () => {
      let silverUSD = null, goldUSD = null, tryRate = null;

      // 1) Gümüş — gold-api.com (ücretsiz, gerçek fiyat)
      try {
        const r = await fetch('https://api.gold-api.com/price/XAG');
        if (r.ok) { const j = await r.json(); if (j?.price) silverUSD = j.price; }
      } catch {}

      // 2) Altın — gold-api.com
      try {
        const r2 = await fetch('https://api.gold-api.com/price/XAU');
        if (r2.ok) { const j2 = await r2.json(); if (j2?.price) goldUSD = j2.price; }
      } catch {}

      // 3) USD/TRY — open.er-api.com
      try {
        const r3 = await fetch('https://open.er-api.com/v6/latest/USD');
        if (r3.ok) { const j3 = await r3.json(); tryRate = j3?.rates?.TRY; }
      } catch {}

      // API'den veri gelemediyse gösterme
      if (!silverUSD || !tryRate) {
        if (mounted.current) setData({ silver: null, gold: null, usdtry: null, silverPerG: null, silverPerGTL: null, ts: 0 });
        return;
      }

      const result = {
        silver: silverUSD, gold: goldUSD, usdtry: tryRate,
        silverPerG: silverUSD / 31.1035,
        silverPerGTL: (silverUSD / 31.1035) * tryRate,
        ts: Date.now(),
      };
      _cache = result;
      if (mounted.current) setData(result);
    };
    fetchPrices();
    return () => { mounted.current = false; };
  }, []);

  return data;
}
