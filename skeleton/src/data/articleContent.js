// JewelPedi — Lazy-loading article content by material
// Code splitting: each material's content is in its own chunk
// Total: ~1.6MB → 6 chunks (largest: silver ~1.2MB, rest 40-115KB)

import { ARTICLES } from './articles';

// In-memory cache for loaded chunks
const cache = {};

// Material → dynamic import map
const loaders = {
  silver:   () => import('./content_silver'),
  gold:     () => import('./content_gold'),
  diamond:  () => import('./content_diamond'),
  gemstone: () => import('./content_gemstone'),
  platinum: () => import('./content_platinum'),
  shared:   () => import('./content_shared'),
};

// Build id→material lookup once
const idMaterialMap = {};
ARTICLES.forEach(a => { idMaterialMap[a.id] = a.material || 'shared'; });

/**
 * Async: load article content by id.
 * Returns { tr, en, ar } HTML strings or fallback.
 */
export async function loadArticleContent(id, article) {
  const mat = idMaterialMap[id] || (article && article.material) || 'shared';

  // Check cache first
  if (cache[mat]) {
    const C = cache[mat];
    if (C[id]) return C[id];
  }

  // Dynamic import the chunk
  if (loaders[mat]) {
    try {
      const mod = await loaders[mat]();
      cache[mat] = mod.default || mod;
      if (cache[mat][id]) return cache[mat][id];
    } catch (e) {
      console.warn('Failed to load content chunk:', mat, e);
    }
  }

  // Fallback
  const a = article || ARTICLES.find(x => x.id === id);
  if (!a) return { tr: '', en: '', ar: '' };
  return {
    tr: '<p>' + (a.tr?.d || '') + '. Bu konunun detayları için JewelPedi araçlarını kullanabilirsiniz.</p>',
    en: '<p>' + (a.en?.d || '') + '.</p>',
    ar: '<p>' + (a.ar?.d || '') + '.</p>',
  };
}

/**
 * Sync (legacy compat): returns content if already cached, else fallback.
 * Prefer loadArticleContent() for new code.
 */
export function getArticleContent(id, article) {
  const mat = idMaterialMap[id] || (article && article.material) || 'shared';
  if (cache[mat] && cache[mat][id]) return cache[mat][id];

  // Trigger async load in background
  if (loaders[mat] && !cache[mat]) {
    loaders[mat]().then(mod => { cache[mat] = mod.default || mod; }).catch(() => {});
  }

  const a = article || ARTICLES.find(x => x.id === id);
  if (!a) return { tr: '', en: '', ar: '' };
  return {
    tr: '<p>' + (a.tr?.d || '') + '. Bu konunun detayları için JewelPedi araçlarını kullanabilirsiniz.</p>',
    en: '<p>' + (a.en?.d || '') + '.</p>',
    ar: '<p>' + (a.ar?.d || '') + '.</p>',
  };
}

/**
 * Preload a material chunk (call from intersection observer, hover, etc.)
 */
export function preloadContent(material) {
  if (cache[material] || !loaders[material]) return;
  loaders[material]().then(mod => { cache[material] = mod.default || mod; }).catch(() => {});
}
