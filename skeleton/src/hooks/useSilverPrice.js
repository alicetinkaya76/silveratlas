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
      let silverUSD = null, goldUSD = null, silverTRY = null, tryRate = null;

      try {
        const r = await fetch('https://api.metals.dev/v1/latest?api_key=demo&currency=USD&unit=toz');
        if (r.ok) { const j = await r.json(); silverUSD = j?.metals?.silver; goldUSD = j?.metals?.gold; }
      } catch {}

      try {
        const r2 = await fetch('https://api.metals.dev/v1/latest?api_key=demo&currency=TRY&unit=toz');
        if (r2.ok) { const j2 = await r2.json(); silverTRY = j2?.metals?.silver; if (silverUSD && silverTRY) tryRate = silverTRY / silverUSD; }
      } catch {}

      if (!tryRate) {
        try {
          const r3 = await fetch('https://api.frankfurter.app/latest?from=USD&to=TRY');
          if (r3.ok) { const j3 = await r3.json(); tryRate = j3?.rates?.TRY; }
        } catch {}
      }

      if (!silverUSD) silverUSD = 32.5;
      if (!goldUSD) goldUSD = 3250;
      if (!tryRate) tryRate = 38.5;

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
