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

      // 1) Metal fiyatları — metals.dev
      try {
        const r = await fetch('https://api.metals.dev/v1/latest?api_key=demo&currency=USD&unit=toz');
        if (r.ok) { const j = await r.json(); silverUSD = j?.metals?.silver; goldUSD = j?.metals?.gold; }
      } catch {}

      // 2) USD/TRY — open.er-api.com (ücretsiz, TRY destekli)
      try {
        const r2 = await fetch('https://open.er-api.com/v6/latest/USD');
        if (r2.ok) { const j2 = await r2.json(); tryRate = j2?.rates?.TRY; }
      } catch {}

      // 3) USD/TRY fallback — frankfurter
      if (!tryRate) {
        try {
          const r3 = await fetch('https://api.frankfurter.app/latest?from=USD&to=TRY');
          if (r3.ok) { const j3 = await r3.json(); tryRate = j3?.rates?.TRY; }
        } catch {}
      }

      // 4) USD/TRY fallback 2 — exchangerate.host
      if (!tryRate) {
        try {
          const r4 = await fetch('https://api.exchangerate.host/latest?base=USD&symbols=TRY');
          if (r4.ok) { const j4 = await r4.json(); tryRate = j4?.rates?.TRY; }
        } catch {}
      }

      // Güncel fallback değerler (Nisan 2026)
      if (!silverUSD) silverUSD = 33.5;
      if (!goldUSD) goldUSD = 3300;
      if (!tryRate) tryRate = 44.5;

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
