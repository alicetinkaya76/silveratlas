# JewelPedi — Precious Metals & Gemstone Encyclopedia

> The world's most comprehensive, free, multilingual digital encyclopedia of precious metals and gemstones.

**200 Articles · 47 Interactive Tools · 3 Languages (TR/EN/AR) · AI-Powered**

## What is JewelPedi?

JewelPedi is an open-access encyclopedia covering six pillars of the jewelry world:

🥈 **Silver** — 77 articles from 925 sterling to nanotechnology  
🥇 **Gold** — 29 articles from karat systems to space technology  
💎 **Diamond** — 20 articles covering the 4Cs, cuts, and certification  
💜 **Gemstones** — 34 articles on precious, semi-precious, and organic stones  
⚪ **Platinum** — 12 articles on PGMs, investment, and industrial use  
📚 **Shared** — 28 cross-material guides, bazaar directories, and references

## Features

### Content
- 200 in-depth articles, each in Turkish, English, and Arabic
- Inline SVG infographics and animated data visualizations
- Cross-referencing system (comparison pills, related articles)
- Reading history, favorites, font size controls
- Comment and rating system

### Interactive Tools (47)
- AI Jewelry Advisor (Claude API)
- Photo Gem Identifier (Claude Vision)
- 4C Diamond Estimator, Mohs Scale, Birthstone Finder
- Live Metal Dashboard (Ag/Au/Pt/Pd × USD/TRY)
- Turkey Jeweler & Workshop Map (Leaflet)
- Purity Calculator, Melt Value, Zakat Calculator
- Ring/Bracelet/Necklace Sizers
- And 35+ more...

### Technical
- React 18 + Vite 5 SPA
- Code-split article content (6 lazy-loaded chunks by material)
- PWA with service worker (4-strategy caching)
- Dark/Light/Auto theme with RTL support
- Responsive mobile-first design
- Schema.org JSON-LD structured data
- Full-text search across 200 articles

## Quick Start

```bash
npm install
npm run dev     # → http://localhost:3000
npm run build   # → dist/
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Build | Vite 5 |
| Maps | Leaflet |
| Styling | CSS custom properties (no framework) |
| Fonts | Playfair Display, Source Sans 3, JetBrains Mono, Noto Naskh Arabic |
| APIs | gold-api.com (metals), open.er-api.com (forex) |
| AI | Anthropic Claude API (advisor, photo ID, summarizer) |
| Deploy | GitHub Pages |

## Project Structure

```
src/
├── data/
│   ├── articles.js          # 200 article metadata
│   ├── articleContent.js     # Lazy-loading wrapper (2.8KB)
│   ├── content_silver.js     # Silver content chunk (1.3MB)
│   ├── content_gold.js       # Gold content chunk (111KB)
│   ├── content_diamond.js    # Diamond content chunk (48KB)
│   ├── content_gemstone.js   # Gemstone content chunk (59KB)
│   ├── content_platinum.js   # Platinum content chunk (47KB)
│   ├── content_shared.js     # Shared content chunk (127KB)
│   ├── categories.js         # 29 categories + 6 materials
│   ├── tools.js              # 47 tool definitions
│   ├── mapData.js            # World mines, mints, craft centers
│   └── sponsors.js           # Sponsor slot system
├── components/
│   ├── ArticleDetail.jsx     # Article reader (async content, TOC, cross-refs)
│   ├── ToolModal.jsx         # 47 interactive tools
│   ├── Nav.jsx, Footer.jsx, PriceTicker.jsx...
├── sections/
│   ├── Hero.jsx, FeaturedArticles.jsx, AllArticles.jsx...
├── hooks/
│   ├── useSilverPrice.js     # Live metal price hook
│   ├── useTheme.js, useLang.js
├── i18n/translations.js      # TR/EN/AR UI strings
└── styles/                   # CSS modules
```

## Sponsor

**İstanbul Gümüş** — Turkey's leading 925 sterling silver manufacturer (Konya).

## Version History

| Version | Date | Milestone |
|---------|------|-----------|
| v1.0 | 2026-04-13 | 73 silver articles |
| v2.0 | 2026-04-14 | 134 articles (+ gold, diamond, gemstones) |
| v3.0 | 2026-04-14 | 144 articles (+ platinum, SEO, cross-refs) |
| v4.0 | 2026-04-14 | 160 articles (+ AI tools, bazaar guide) |
| v4.5 | 2026-04-15 | 180 articles (+ community features) |
| **v5.0** | **2026-04-15** | **200 articles, code splitting, jeweler map** |

## License

Content and code © 2026 JewelPedi. Educational use encouraged.
