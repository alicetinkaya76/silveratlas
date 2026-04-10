import React from 'react';

/* ═══════════════════════════════════════════
   SilverAtlas SVG Icon System — Faz 10
   currentColor-based, theme-adaptive
   ═══════════════════════════════════════════ */

const I = ({ children, size = 24, vb = "0 0 24 24", className = "", style = {}, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={vb}
    fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    className={className} style={{ flexShrink: 0, ...style }} {...props}>
    {children}
  </svg>
);

// Filled helper (no stroke)
const F = ({ children, size = 24, vb = "0 0 24 24", className = "", style = {}, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={vb}
    fill="currentColor" stroke="none" className={className} style={{ flexShrink: 0, ...style }} {...props}>
    {children}
  </svg>
);

// ─── NAVIGATION ───
export const IconHome = (p) => <I {...p}><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></I>;
export const IconBook = (p) => <I {...p}><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z"/><path d="M8 7h8M8 11h5"/></I>;
export const IconGear = (p) => <I {...p}><circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 18v2m-9-11h2m18 0h2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></I>;
export const IconGlobe = (p) => <I {...p}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"/></I>;
export const IconCompass = (p) => <I {...p}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/></I>;
export const IconMoon = (p) => <I {...p}><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></I>;
export const IconSun = (p) => <I {...p}><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42"/></I>;
export const IconChevronLeft = (p) => <I {...p}><polyline points="15 18 9 12 15 6"/></I>;
export const IconChevronRight = (p) => <I {...p}><polyline points="9 6 15 12 9 18"/></I>;
export const IconChevronUp = (p) => <I {...p}><polyline points="18 15 12 9 6 15"/></I>;
export const IconShare = (p) => <I {...p}><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></I>;
export const IconX = (p) => <I {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></I>;
export const IconSearch = (p) => <I {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></I>;
export const IconArrowUp = (p) => <I {...p}><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></I>;
export const IconMenu = (p) => <I {...p}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></I>;

// ─── CATEGORIES ───
export const IconMicroscope = (p) => <I {...p}><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a6 6 0 00-6-6"/><path d="M9 14a4.4 4.4 0 01-1-3V4a2 2 0 014 0v7a4.4 4.4 0 01-1 3"/><circle cx="12" cy="8" r="2"/></I>;
export const IconScroll = (p) => <I {...p}><path d="M8 21h12a2 2 0 002-2v-2H10v2a2 2 0 01-2 2zm0 0a2 2 0 01-2-2V5a2 2 0 012-2h12v14"/><path d="M12 7h6M12 11h4"/></I>;
export const IconPickaxe = (p) => <I {...p}><path d="M14.5 2l6 6-8 8-6-6z"/><path d="M3 21l6.5-6.5"/><path d="M14 10l-2 2"/><path d="M20 2l2 2"/></I>;
export const IconHammer = (p) => <I {...p}><path d="M6 15l-4 4 3 3 4-4"/><path d="M7.5 11.5L17 2l5 5-9.5 9.5z"/></I>;
export const IconChart = (p) => <I {...p}><rect x="3" y="12" width="4" height="9" rx="1"/><rect x="10" y="7" width="4" height="14" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></I>;
export const IconTemple = (p) => <I {...p}><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/><path d="M5 11h14"/></I>;
export const IconDiamond = (p) => <I {...p}><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M2 9h20"/><path d="M12 22L6 9l6-6 6 6z"/></I>;
export const IconBookOpen = (p) => <I {...p}><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></I>;
export const IconTools = (p) => <I {...p}><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></I>;
export const IconVase = (p) => <I {...p}><path d="M8 2h8v3a6 6 0 01-1 3.3L13.5 11 16 14.3A6 6 0 0117 18v2a1 1 0 01-1 1H8a1 1 0 01-1-1v-2a6 6 0 011-3.7L10.5 11 9 8.3A6 6 0 018 5V2z"/></I>;

// ─── QURAN / ISLAMIC ───
export const IconQuran = (p) => (
  <I {...p}>
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
    <path d="M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z"/>
    <path d="M12 6v6m-2-2l2 2 2-2" strokeWidth="1.5"/>
    <circle cx="12" cy="15" r="0.5" fill="currentColor"/>
  </I>
);
export const IconCrescent = (p) => (
  <I {...p}>
    <path d="M21 12.79A9 9 0 1111.21 3c.3.03.5.2.5.5a7 7 0 009.7 8.8c.27.1.5.3.59.49z"/>
    <circle cx="17" cy="5" r="1" fill="currentColor" stroke="none"/>
  </I>
);
export const IconStar8 = (p) => (
  <F {...p} vb="0 0 24 24">
    <path d="M12 0l2.47 7.03L22 5.07l-4.03 6.46L24 12l-6.03.47L22 18.93l-7.53-1.96L12 24l-2.47-7.03L2 18.93l4.03-6.46L0 12l6.03-.47L2 5.07l7.53 1.96L12 0z" opacity="0.15"/>
    <path d="M12 2l1.8 5.1L19 5.4l-2.9 4.7L22 12l-5.9.9L19 18.6l-5.2-1.4L12 22l-1.8-5.1L5 18.6l2.9-4.7L2 12l5.9-.9L5 5.4l5.2 1.4L12 2z"/>
  </F>
);

// ─── TOOLS ───
export const IconScale = (p) => <I {...p}><path d="M12 3v18"/><path d="M3 7l4 8h10l4-8"/><path d="M7 15a4 4 0 004-4"/><path d="M17 15a4 4 0 01-4-4"/><circle cx="12" cy="3" r="1.5" fill="currentColor"/></I>;
export const IconExchange = (p) => <I {...p}><polyline points="17 1 21 5 17 9"/><path d="M3 5h18"/><polyline points="7 15 3 19 7 23"/><path d="M21 19H3"/></I>;
export const IconRing = (p) => <I {...p}><circle cx="12" cy="14" r="7"/><path d="M9.17 7a7 7 0 015.66 0"/><path d="M12 3v4"/><circle cx="12" cy="2.5" r="1" fill="currentColor"/></I>;
export const IconBrain = (p) => <I {...p}><path d="M12 2a7 7 0 017 7c0 3.5-2 5.5-3 7h-8c-1-1.5-3-3.5-3-7a7 7 0 017-7z"/><path d="M9 16v3a2 2 0 004 0v-3"/><path d="M12 2v7"/><path d="M8 8c0-1 1-2 2-2"/><path d="M14 8c0-1 1-2 2-2"/></I>;
export const IconPalette = (p) => <I {...p}><circle cx="13.5" cy="6.5" r="2"/><circle cx="17.5" cy="10.5" r="2"/><circle cx="8.5" cy="7.5" r="2"/><circle cx="6.5" cy="12" r="2"/><path d="M12 2a10 10 0 000 20c1 0 2-.5 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3a2 2 0 012-2h2.4A6 6 0 0022 12 10 10 0 0012 2z"/></I>;
export const IconEarth = (p) => <I {...p}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"/></I>;
export const IconAtom = (p) => <I {...p}><circle cx="12" cy="12" r="2" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></I>;
export const IconRefresh = (p) => <I {...p}><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/></I>;
export const IconGem = (p) => <I {...p}><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M2 9h20"/><path d="M12 22L6 9l6-6 6 6z"/></I>;
export const IconSparkles = (p) => <I {...p}><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/><path d="M19 14l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7z"/></I>;
export const IconMap = (p) => <I {...p}><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></I>;
export const IconTimeline = (p) => <I {...p}><line x1="12" y1="2" x2="12" y2="22"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/><path d="M14 5h4M14 12h6M14 19h3"/></I>;
export const IconTag = (p) => <I {...p}><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><circle cx="7" cy="7" r="1.5" fill="currentColor"/></I>;
export const IconBell = (p) => <I {...p}><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></I>;
export const IconHands = (p) => <I {...p}><path d="M7 11c-1.5 0-3 .5-3 2s1 3 3 4h0c1 .5 2.5 1 4 1s3-.5 4-1h0c2-1 3-2 3-4s-1.5-2-3-2"/><path d="M12 7v4"/><path d="M8 4l4 3 4-3"/></I>;
export const IconFlask = (p) => <I {...p}><path d="M9 3h6v6l5 9a1 1 0 01-.9 1.4H4.9A1 1 0 014 18l5-9V3z"/><path d="M9 3h6"/><path d="M7 17h10"/></I>;
export const IconMirror = (p) => <I {...p}><rect x="3" y="1" width="18" height="16" rx="4"/><path d="M12 17v4"/><path d="M8 21h8"/><path d="M7 5l2 2"/></I>;
export const IconDress = (p) => <I {...p}><path d="M12 2l-3 7h6l-3-7z"/><path d="M9 9l-4 12h14L15 9"/><path d="M12 2v7"/></I>;
export const IconTurkey = (p) => (
  <F {...p} vb="0 0 24 24">
    <rect x="2" y="6" width="20" height="12" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="10" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12.5 10.5l1.5 1.5-1.5 1.5" fill="none" stroke="currentColor" strokeWidth="1.3"/>
  </F>
);
export const IconTrendUp = (p) => <I {...p}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></I>;
export const IconPencil = (p) => <I {...p}><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></I>;
export const IconShield = (p) => <I {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></I>;
export const IconTrophy = (p) => <I {...p}><path d="M6 9H3a1 1 0 01-1-1V5a1 1 0 011-1h3"/><path d="M18 9h3a1 1 0 001-1V5a1 1 0 00-1-1h-3"/><path d="M6 4h12v6a6 6 0 01-12 0V4z"/><path d="M10 16v2h4v-2"/><path d="M8 22h8"/><path d="M12 18v4"/></I>;
export const IconClock = (p) => <I {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></I>;
export const IconWallet = (p) => <I {...p}><rect x="1" y="6" width="22" height="14" rx="2"/><path d="M1 10h22"/><circle cx="18" cy="15" r="1" fill="currentColor"/></I>;
export const IconCertificate = (p) => <I {...p}><rect x="3" y="2" width="18" height="14" rx="2"/><path d="M7 6h10M7 10h6"/><circle cx="12" cy="20" r="3"/><path d="M10 22.5l-1 1.5"/><path d="M14 22.5l1 1.5"/></I>;

// ─── SPECIAL ───
export const IconStar = (p) => <I {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="currentColor" strokeWidth="1"/></I>;
export const IconSparkle = (p) => <I {...p}><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" fill="currentColor" strokeWidth="0.5"/></I>;

// ─── CATEGORY ICON MAP ───
const CAT_ICONS = {
  bilim: IconMicroscope,
  tarih: IconScroll,
  maden: IconPickaxe,
  uretim: IconHammer,
  piyasa: IconChart,
  kultur: IconTemple,
  stil: IconDiamond,
  rehber: IconBookOpen,
  zanaat: IconTools,
  koleksiyon: IconVase,
};

export function getCatIcon(catId, size = 24, style = {}) {
  const Comp = CAT_ICONS[catId];
  return Comp ? <Comp size={size} style={style} /> : null;
}

// ─── TOOL ICON MAP ───
const TOOL_ICONS = [
  IconScale, IconExchange, IconRing, IconBrain, IconPalette,
  IconEarth, IconAtom, IconRefresh, IconGem, IconSparkles,
  IconMap, IconTimeline, IconTag, IconBell, IconHands,
  IconFlask, IconMirror, IconDress, IconTurkey, IconTrendUp,
  IconPencil, IconShield, IconTrophy, IconRefresh, IconClock,
  IconWallet, IconCertificate, IconRing, IconGem, IconWallet,
];

export function getToolIcon(idx, size = 24, style = {}) {
  const Comp = TOOL_ICONS[idx];
  return Comp ? <Comp size={size} style={style} /> : null;
}

// ─── ARTICLE ICON MAP (by emoji key) ───
const ARTICLE_ICON_MAP = {
  '925': null, // text-based, keep as is
  '📜': IconScroll, '⚖️': IconScale, '🔨': IconTools, '🔬': IconMicroscope,
  '🦠': IconAtom, '⚙️': IconGear, '📈': IconTrendUp, '📉': IconChart,
  '🔮': IconSparkles, '⛏️': IconPickaxe, '🇹🇷': IconTurkey, '🏭': IconHammer,
  '👔': IconDress, '🕌': IconCrescent, '🧿': IconStar8, '🌍': IconEarth,
  '☪️': IconQuran, '🏷️': IconTag, '🌙': IconCrescent, '🏔️': IconPickaxe,
  '📷': IconAtom, '⚡': IconSparkles, '🔥': IconFlask, '🏺': IconVase,
  '🎨': IconPalette, '💎': IconGem, '📿': IconQuran,
  '📊': IconChart, '🏛️': IconTemple, '📖': IconBookOpen,
  '🪙': IconWallet, '💍': IconRing, '🛡️': IconShield, '🔄': IconRefresh,
  '📱': IconBell, '🤲': IconHands, '⏳': IconTimeline, '✏️': IconPencil,
  '🏆': IconTrophy, '🕐': IconClock, '💰': IconWallet, '💱': IconExchange,
  '🧠': IconBrain, '🗺️': IconMap, '✨': IconSparkles, '🪞': IconMirror,
  '👗': IconDress, '⚗️': IconFlask,
};

export function getArticleIcon(iconKey, size = 24, style = {}) {
  if (iconKey === '925') return null; // handled as text
  const Comp = ARTICLE_ICON_MAP[iconKey];
  return Comp ? <Comp size={size} style={style} /> : null;
}

// ─── HERO ANIMATED SVG ───
export function HeroAtomSVG({ size = 200 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.15, position: 'absolute', right: '-5%', top: '15%', pointerEvents: 'none' }}>
      <defs>
        <linearGradient id="ag-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--silver)" />
          <stop offset="100%" stopColor="var(--gold)" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="8" fill="url(#ag-grad)">
        <animate attributeName="r" values="8;10;8" dur="3s" repeatCount="indefinite"/>
      </circle>
      <text x="100" y="105" textAnchor="middle" fill="url(#ag-grad)" fontSize="11"
        fontFamily="var(--f-head)" fontWeight="700">47</text>
      {[0, 60, 120].map((rot, i) => (
        <g key={i} transform={`rotate(${rot} 100 100)`}>
          <ellipse cx="100" cy="100" rx="80" ry="30" fill="none" stroke="url(#ag-grad)"
            strokeWidth="0.8" opacity="0.6">
            <animateTransform attributeName="transform" type="rotate"
              from={`${rot} 100 100`} to={`${rot + 360} 100 100`}
              dur={`${6 + i * 2}s`} repeatCount="indefinite"/>
          </ellipse>
          <circle r="3" fill="url(#ag-grad)">
            <animateMotion dur={`${6 + i * 2}s`} repeatCount="indefinite">
              <mpath xlinkHref={`#orbit${i}`}/>
            </animateMotion>
          </circle>
        </g>
      ))}
      <ellipse id="orbit0" cx="100" cy="100" rx="80" ry="30" fill="none"/>
      <ellipse id="orbit1" cx="100" cy="100" rx="80" ry="30" fill="none" transform="rotate(60 100 100)"/>
      <ellipse id="orbit2" cx="100" cy="100" rx="80" ry="30" fill="none" transform="rotate(120 100 100)"/>
    </svg>
  );
}

// ─── BOTTOM NAV ICONS ───
export const IconExplore = IconCompass;
export const IconArticles = IconBook;
export const IconToolsNav = IconGear;
export const IconAtlas = IconGlobe;
export const IconQuranNav = IconQuran;
