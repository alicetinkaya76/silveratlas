/**
 * Sitemap Generator for JewelPedi
 * Run: node scripts/generate-sitemap.js
 * Output: public/sitemap.xml
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── CONFIG ──
const DOMAIN = 'https://jewelpedi.com';
const BASE = '';
const TODAY = new Date().toISOString().split('T')[0];

// ── Load articles ──
// Quick extraction: read articles.js and parse the ARTICLES array
const articlesFile = readFileSync(join(__dirname, '../src/data/articles.js'), 'utf8');

// Extract slugs using regex (safer than eval)
const slugs = [];
const slugRegex = /slug:"([^"]+)"/g;
let match;
while ((match = slugRegex.exec(articlesFile)) !== null) {
  slugs.push(match[1]);
}

console.log(`Found ${slugs.length} articles`);

// ── Build sitemap ──
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <!-- Homepage -->
  <url>
    <loc>${DOMAIN}${BASE}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="${DOMAIN}${BASE}/"/>
    <xhtml:link rel="alternate" hreflang="en" href="${DOMAIN}${BASE}/?lang=en"/>
    <xhtml:link rel="alternate" hreflang="ar" href="${DOMAIN}${BASE}/?lang=ar"/>
  </url>

  <!-- Articles -->
`;

for (const slug of slugs) {
  xml += `  <url>
    <loc>${DOMAIN}${BASE}/article/${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="${DOMAIN}${BASE}/article/${slug}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${DOMAIN}${BASE}/article/${slug}?lang=en"/>
    <xhtml:link rel="alternate" hreflang="ar" href="${DOMAIN}${BASE}/article/${slug}?lang=ar"/>
  </url>
`;
}

xml += `</urlset>`;

const outPath = join(__dirname, '../public/sitemap.xml');
writeFileSync(outPath, xml, 'utf8');
console.log(`Sitemap written to ${outPath} (${slugs.length + 1} URLs)`);
