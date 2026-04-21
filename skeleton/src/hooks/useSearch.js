// Sprint 3.4 — useSearch hook
// Lazy-loads searchIndex.json on first query, debounces input, returns ranked results.

import { useState, useEffect, useRef, useMemo } from 'react';
import { normalize, tokenize } from '../utils/searchUtils';

// Module-level singleton: index is loaded once and shared across all hook instances
let indexPromise = null;
let indexCache = null;

function loadIndex() {
  if (indexCache) return Promise.resolve(indexCache);
  if (indexPromise) return indexPromise;
  // BASE_URL honors Vite's base path (e.g., /silveratlas/)
  const base = (import.meta.env && import.meta.env.BASE_URL) || '/';
  const url = base.replace(/\/$/, '') + '/searchIndex.json';
  indexPromise = fetch(url)
    .then(r => {
      if (!r.ok) throw new Error('searchIndex.json fetch failed: ' + r.status);
      return r.json();
    })
    .then(data => {
      indexCache = data;
      return data;
    })
    .catch(err => {
      console.warn('useSearch: index load failed', err);
      indexPromise = null; // allow retry
      return [];
    });
  return indexPromise;
}

/**
 * Optional: warm the index cache in background (call on hover/intent).
 */
export function preloadSearchIndex() { loadIndex(); }

/**
 * Hook: useSearch(query, lang) returns { loading, results }
 * results is an array of matching article IDs (ordered by relevance) OR null if query empty.
 */
export default function useSearch(query, lang) {
  const [debouncedQ, setDebouncedQ] = useState(query);
  const [indexReady, setIndexReady] = useState(!!indexCache);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef(null);

  // Debounce query by 150ms
  useEffect(() => {
    if (!query || !query.trim()) {
      setDebouncedQ('');
      return;
    }
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setDebouncedQ(query), 150);
    return () => clearTimeout(debounceRef.current);
  }, [query]);

  // Trigger index load when user first types
  useEffect(() => {
    if (!debouncedQ || indexCache) return;
    setLoading(true);
    loadIndex().then(() => {
      setIndexReady(true);
      setLoading(false);
    });
  }, [debouncedQ]);

  // Compute results
  const results = useMemo(() => {
    const q = debouncedQ.trim();
    if (!q) return null; // null = "no active query"
    if (!indexCache) return []; // still loading

    const terms = tokenize(q);
    if (!terms.length) return null; // too short or all tokens filtered

    const tKey = 't_' + lang;
    const dKey = 'd_' + lang;
    const bKey = 'b_' + lang;
    const tKeyTr = 't_tr'; // fallback: always also check TR (site master language)

    const scored = [];
    for (const entry of indexCache) {
      const title = entry[tKey] || entry[tKeyTr] || '';
      const desc  = entry[dKey] || '';
      const body  = entry[bKey] || '';

      // AND: every term must appear somewhere (title/desc/body combined)
      let matchedAll = true;
      let score = 0;
      for (const term of terms) {
        if (title.includes(term))      { score += 10; continue; }
        if (desc.includes(term))       { score += 5;  continue; }
        if (body.includes(term))       { score += 1;  continue; }
        matchedAll = false;
        break;
      }
      if (matchedAll) scored.push({ id: entry.id, score });
    }

    // Sort: high score first, then by id ascending for deterministic output
    scored.sort((a, b) => b.score - a.score || a.id - b.id);
    return scored.map(s => s.id);
  }, [debouncedQ, indexReady, lang]);

  return { loading, results };
}
