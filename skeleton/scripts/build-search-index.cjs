// Sprint 3.4 Step 1 — Build-time search index generator
// Runs before `vite build` and produces src/data/searchIndex.json
// Reads all content chunks + articles.js, strips HTML, normalizes text, outputs index.

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'src', 'data');
const OUT_FILE = path.join(DATA_DIR, 'searchIndex.json');
const PUBLIC_OUT = path.join(__dirname, '..', 'public', 'searchIndex.json');

// ─── Content chunks to scan ────────────────────────────────────────
const CONTENT_FILES = [
  'content_silver_core.js',
  'content_silver_market.js',
  'content_silver_culture.js',
  'content_gold.js',
  'content_diamond.js',
  'content_gemstone.js',
  'content_platinum.js',
  'content_tesbih.js',
  'content_shared.js',
];

// ─── Normalization: lowercase, diacritic-insensitive, whitespace clean ─
// TR: ğ→g, ü→u, ş→s, ı→i, ö→o, ç→c, İ→i
// AR: harekeler (064B-0652) + tatweel (0640) silinir, alef varyantları (أإآ→ا), ي→ی tutulmaz (Pers)
// EN/Latin: é/è/ê→e, à→a, ñ→n, ...
const TR_MAP = { 'ğ': 'g', 'Ğ': 'g', 'ü': 'u', 'Ü': 'u', 'ş': 's', 'Ş': 's',
                 'ı': 'i', 'I': 'i', 'İ': 'i', 'ö': 'o', 'Ö': 'o', 'ç': 'c', 'Ç': 'c' };
const AR_MAP = { 'أ': 'ا', 'إ': 'ا', 'آ': 'ا', 'ى': 'ي', 'ة': 'ه', 'ؤ': 'و', 'ئ': 'ي' };

function normalize(str) {
  if (!str) return '';
  let s = str.toLowerCase();

  // TR explicit
  s = s.replace(/[ğĞüÜşŞıIİöÖçÇ]/g, ch => TR_MAP[ch] || ch);
  // AR explicit (alef variants, teh marbuta, etc.)
  s = s.replace(/[أإآىةؤئ]/g, ch => AR_MAP[ch] || ch);
  // AR diacritics (harakat: fatha 064B-0652, tatweel 0640)
  s = s.replace(/[\u064B-\u0652\u0640\u0670\u06D6-\u06ED]/g, '');
  // Generic Latin diacritic removal (é→e, ñ→n, etc.)
  s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  // Whitespace
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

// ─── HTML strip ────────────────────────────────────────────────────
function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, ' ')  // SVG içeriği faydasız
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#\d+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// ─── Parse content file — extract C[id] = { tr: `...`, en: `...`, ar: `...` } ─
function parseContentFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const entries = {};
  // Her "C[NNN] = {" bloğunun başlangıç konumunu bul
  const starts = [];
  const startRegex = /^C\[(\d+)\]\s*=\s*\{/gm;
  let m;
  while ((m = startRegex.exec(src)) !== null) {
    starts.push({ id: parseInt(m[1], 10), start: m.index });
  }
  const exportMatch = src.match(/\nexport default\s/);
  const exportStart = exportMatch ? exportMatch.index : src.length;
  for (let i = 0; i < starts.length; i++) {
    const { id, start } = starts[i];
    const end = i + 1 < starts.length ? starts[i + 1].start : exportStart;
    const block = src.slice(start, end);
    // 3 dil için backtick string'leri yakala: tr: `...`, en: `...`, ar: `...`
    // Backtickler block'ta balanced — her dil için bir çift
    const tr = extractBacktick(block, /tr:\s*`/);
    const en = extractBacktick(block, /en:\s*`/);
    const ar = extractBacktick(block, /ar:\s*`/);
    entries[id] = { tr, en, ar };
  }
  return entries;
}

// Helper: bir regex ile backtick başlangıcını bul, matching backtick'e kadar içeriği al
function extractBacktick(block, startRegex) {
  const m = block.match(startRegex);
  if (!m) return '';
  const startIdx = m.index + m[0].length;
  // Basit yaklaşım: ilk unescaped backtick'e kadar al
  // (Template literals içinde ${...} interpolation yok bizim content'te — pure HTML string)
  let i = startIdx;
  while (i < block.length) {
    if (block[i] === '\\') { i += 2; continue; }
    if (block[i] === '`') break;
    i++;
  }
  return block.slice(startIdx, i);
}

// ─── articles.js'ten {id, t_tr, d_tr, t_en, ...} meta al ────────────
function parseArticlesMeta() {
  const src = fs.readFileSync(path.join(DATA_DIR, 'articles.js'), 'utf8');
  // ARTICLES satırları { id:N, slug:"...", cat:"...", material:"...", min:N, ...
  // tr:{t:"...",d:"..."}, en:{t:"...",d:"..."}, ar:{t:"...",d:"..."} }
  // Basit satır-bazlı regex (her makale 1 satır)
  const lines = src.split('\n');
  const meta = {};
  const lineRegex = /\{id:(\d+),.*?tr:\{t:"([^"]*)",d:"([^"]*)"\}.*?en:\{t:"([^"]*)",d:"([^"]*)"\}.*?ar:\{t:"([^"]*)",d:"([^"]*)"\}/;
  lines.forEach(line => {
    const m = line.match(lineRegex);
    if (m) {
      meta[parseInt(m[1], 10)] = {
        t_tr: m[2], d_tr: m[3],
        t_en: m[4], d_en: m[5],
        t_ar: m[6], d_ar: m[7],
      };
    }
  });
  return meta;
}

// ═══ MAIN ═══
console.log('Sprint 3.4 — Building search index...\n');

// 1. Content dosyalarından body'leri topla
const allBodies = {};
for (const file of CONTENT_FILES) {
  const fullPath = path.join(DATA_DIR, file);
  if (!fs.existsSync(fullPath)) {
    console.warn(`  ⚠️  Skipping ${file} (not found)`);
    continue;
  }
  const entries = parseContentFile(fullPath);
  const count = Object.keys(entries).length;
  console.log(`  ${file}: ${count} entries`);
  Object.assign(allBodies, entries);
}
console.log(`\n  Total content entries: ${Object.keys(allBodies).length}`);

// 2. articles.js'ten meta al
const meta = parseArticlesMeta();
console.log(`  Total articles meta: ${Object.keys(meta).length}`);

// 3. Index objelerini oluştur: { id, t_tr, d_tr, b_tr, t_en, d_en, b_en, t_ar, d_ar, b_ar }
const index = [];
let skipped = 0;
for (const [idStr, m] of Object.entries(meta)) {
  const id = parseInt(idStr, 10);
  const body = allBodies[id] || { tr: '', en: '', ar: '' };
  const entry = {
    id,
    t_tr: normalize(m.t_tr),
    d_tr: normalize(m.d_tr),
    b_tr: normalize(stripHtml(body.tr)),
    t_en: normalize(m.t_en),
    d_en: normalize(m.d_en),
    b_en: normalize(stripHtml(body.en)),
    t_ar: normalize(m.t_ar),
    d_ar: normalize(m.d_ar),
    b_ar: normalize(stripHtml(body.ar)),
  };
  index.push(entry);
}

// 4. Stats
const jsonSize = JSON.stringify(index).length;
let totalBodyChars = 0;
index.forEach(e => { totalBodyChars += e.b_tr.length + e.b_en.length + e.b_ar.length; });

console.log(`\n  Index entries: ${index.length}`);
console.log(`  Total body chars (3 langs): ${totalBodyChars.toLocaleString()}`);
console.log(`  JSON raw size: ${(jsonSize / 1024).toFixed(1)} KB`);
console.log(`  Approx gzip size: ~${(jsonSize / 1024 / 3).toFixed(0)} KB (3:1 ratio estimate)`);

// 5. Write
fs.writeFileSync(OUT_FILE, JSON.stringify(index));
const publicDir = path.dirname(PUBLIC_OUT);
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(PUBLIC_OUT, JSON.stringify(index));
console.log(`\n  ✓ Written: ${path.relative(process.cwd(), OUT_FILE)}`);
console.log(`  ✓ Copied: ${path.relative(process.cwd(), PUBLIC_OUT)}`);

// Orphan report
const contentIds = new Set(Object.keys(allBodies).map(Number));
const metaIds = new Set(Object.keys(meta).map(Number));
const orphanedContent = [...contentIds].filter(id => !metaIds.has(id));
const missingContent = [...metaIds].filter(id => !contentIds.has(id));
if (orphanedContent.length) {
  console.log(`\n  ⚠️  Content without meta: ${orphanedContent.slice(0, 10).join(', ')}${orphanedContent.length > 10 ? '...' : ''}`);
}
if (missingContent.length) {
  console.log(`  ⚠️  Meta without content: ${missingContent.slice(0, 10).join(', ')}${missingContent.length > 10 ? '...' : ''}`);
}
