// Sprint 3.4 — search utilities (runtime normalizer, MUST match build-search-index.cjs)
// If you change normalize() here, also change it in scripts/build-search-index.cjs and rebuild.

const TR_MAP = { 'ğ': 'g', 'Ğ': 'g', 'ü': 'u', 'Ü': 'u', 'ş': 's', 'Ş': 's',
                 'ı': 'i', 'I': 'i', 'İ': 'i', 'ö': 'o', 'Ö': 'o', 'ç': 'c', 'Ç': 'c' };
const AR_MAP = { 'أ': 'ا', 'إ': 'ا', 'آ': 'ا', 'ى': 'ي', 'ة': 'ه', 'ؤ': 'و', 'ئ': 'ي' };

export function normalize(str) {
  if (!str) return '';
  let s = String(str).toLowerCase();
  s = s.replace(/[ğĞüÜşŞıIİöÖçÇ]/g, ch => TR_MAP[ch] || ch);
  s = s.replace(/[أإآىةؤئ]/g, ch => AR_MAP[ch] || ch);
  s = s.replace(/[\u064B-\u0652\u0640\u0670\u06D6-\u06ED]/g, '');
  s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

// Split a query into terms; each term must match somewhere (AND semantics)
export function tokenize(query) {
  const normalized = normalize(query);
  if (!normalized) return [];
  return normalized.split(/\s+/).filter(t => t.length >= 2);
}
