import { useState, useEffect, useRef } from 'react';

let _cache = { silver: null, gold: null, platinum: null, palladium: null, usdtry: null, silverPerG: null, silverPerGTL: null, goldPerGTL: null, ts: 0 };
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
      let silverUSD = null, goldUSD = null, platinumUSD = null, palladiumUSD = null, tryRate = null;

      // 1) Gümüş — gold-api.com
      try {
        const r = await fetch('https://api.gold-api.com/price/XAG');
        if (r.ok) { const j = await r.json(); if (j?.price) silverUSD = j.price; }
      } catch {}

      // 2) Altın — gold-api.com
      try {
        const r2 = await fetch('https://api.gold-api.com/price/XAU');
        if (r2.ok) { const j2 = await r2.json(); if (j2?.price) goldUSD = j2.price; }
      } catch {}

      // 3) Platin — gold-api.com
      try {
        const r3 = await fetch('https://api.gold-api.com/price/XPT');
        if (r3.ok) { const j3 = await r3.json(); if (j3?.price) platinumUSD = j3.price; }
      } catch {}

      // 4) Paladyum — gold-api.com
      try {
        const r4 = await fetch('https://api.gold-api.com/price/XPD');
        if (r4.ok) { const j4 = await r4.json(); if (j4?.price) palladiumUSD = j4.price; }
      } catch {}

      // 5) USD/TRY — open.er-api.com
      try {
        const r5 = await fetch('https://open.er-api.com/v6/latest/USD');
        if (r5.ok) { const j5 = await r5.json(); tryRate = j5?.rates?.TRY; }
      } catch {}

      if (!silverUSD) {
        if (mounted.current) setData({ ...data, ts: 0 });
        return;
      }

      const result = {
        silver: silverUSD, gold: goldUSD, platinum: platinumUSD, palladium: palladiumUSD,
        usdtry: tryRate,
        silverPerG: silverUSD / 31.1035,
        silverPerGTL: tryRate ? (silverUSD / 31.1035) * tryRate : null,
        goldPerGTL: (goldUSD && tryRate) ? (goldUSD / 31.1035) * tryRate : null,
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
