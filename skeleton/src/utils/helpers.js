/**
 * SilverAtlas — Utility Helpers
 */

// Slugify text for URL paths
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ö/g, 'o')
    .replace(/ü/g, 'u').replace(/ğ/g, 'g').replace(/ı/g, 'i')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Format number with locale
export function formatNumber(num, lang = 'tr', decimals = 2) {
  const localeMap = { tr: 'tr-TR', en: 'en-US', ar: 'ar-SA' };
  return new Intl.NumberFormat(localeMap[lang] || 'tr-TR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  }).format(num);
}

// Format currency
export function formatCurrency(amount, currency = 'USD', lang = 'tr') {
  const localeMap = { tr: 'tr-TR', en: 'en-US', ar: 'ar-SA' };
  return new Intl.NumberFormat(localeMap[lang] || 'tr-TR', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

// Calculate silver purity
export function calculatePurity(fineness, weight) {
  const pct = fineness / 1000;
  return {
    silverWeight: (pct * weight).toFixed(2),
    alloyWeight: ((1 - pct) * weight).toFixed(2),
    silverPercent: (pct * 100).toFixed(1),
    alloyPercent: ((1 - pct) * 100).toFixed(1),
  };
}

// Troy ounce conversions
export const TROY_OZ_GRAMS = 31.1035;

export function gramsToTroyOz(grams) {
  return grams / TROY_OZ_GRAMS;
}

export function troyOzToGrams(oz) {
  return oz * TROY_OZ_GRAMS;
}

// Reading time calculator
export function estimateReadTime(text, lang = 'tr') {
  const wordsPerMin = { tr: 200, en: 250, ar: 180 };
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / (wordsPerMin[lang] || 200));
  return minutes;
}

// Debounce
export function debounce(fn, ms = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

// Category color mapping
export const CATEGORY_COLORS = {
  bilim: '#3498db',
  tarih: '#e67e22',
  maden: '#27ae60',
  uretim: '#C0C0C0',
  piyasa: '#D4AF37',
  kultur: '#9b59b6',
  stil: '#e91e63',
  rehber: '#00bcd4',
  karsilastirma: '#ff9800',
  zanaat: '#795548',
  koleksiyon: '#607d8b',
};

// Get reading time label
export function getReadTimeLabel(minutes, lang = 'tr') {
  const labels = {
    tr: `${minutes} dk okuma`,
    en: `${minutes} min read`,
    ar: `${minutes} دقائق قراءة`,
  };
  return labels[lang] || labels.tr;
}
