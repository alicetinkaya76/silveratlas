import { useState, useEffect, useRef, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════
   SilverAtlas — Mobile-First Progressive Web App Interface
   Sophisticated, production-grade mobile UI
   ═══════════════════════════════════════════════════════════ */

// ─── Design Tokens ───────────────────────────────────────
const THEME = {
  dark: {
    bg: "#0b0b10", bgCard: "#141419", bgNav: "rgba(11,11,16,0.94)",
    bgElevated: "#1a1a22", bgGlass: "rgba(20,20,25,0.85)",
    text: "#f0f0f0", textMuted: "#8a8a9a", textDim: "#555566",
    border: "rgba(255,255,255,0.06)", borderActive: "rgba(255,255,255,0.12)",
    accent: "#C0C0C0", gold: "#D4AF37", navy: "#1a1a2e",
    success: "#34d399", error: "#f87171", warning: "#fbbf24",
    shadow: "0 -1px 20px rgba(0,0,0,0.5)",
    gradientHero: "linear-gradient(165deg, #0f0f18 0%, #1a1428 40%, #0f1a1a 100%)",
    gradientCard: "linear-gradient(145deg, #141419 0%, #1a1a22 100%)",
  },
  light: {
    bg: "#f8f7f2", bgCard: "#ffffff", bgNav: "rgba(248,247,242,0.94)",
    bgElevated: "#ffffff", bgGlass: "rgba(255,255,255,0.88)",
    text: "#1a1a2e", textMuted: "#6b6b7b", textDim: "#9a9aaa",
    border: "rgba(0,0,0,0.06)", borderActive: "rgba(0,0,0,0.12)",
    accent: "#708090", gold: "#C49B1C", navy: "#1a1a2e",
    success: "#059669", error: "#dc2626", warning: "#d97706",
    shadow: "0 -1px 20px rgba(0,0,0,0.08)",
    gradientHero: "linear-gradient(165deg, #f8f7f2 0%, #ede8e0 40%, #f0ede8 100%)",
    gradientCard: "linear-gradient(145deg, #ffffff 0%, #fafaf5 100%)",
  }
};
const FONT = { display: "'Playfair Display',serif", body: "'Source Sans 3',sans-serif", ar: "'Noto Naskh Arabic',serif", mono: "'JetBrains Mono',monospace" };

// ─── i18n ────────────────────────────────────────────────
const UI = {
  tr: {
    tabs: { home: "Ana Sayfa", explore: "Keşfet", tools: "Araçlar", atlas: "Atlas", more: "Daha" },
    home: { hero: "Gümüşün Tüm Hikâyesi", heroSub: "Bilimden tarihe, madencilikten modaya — dünyanın en kapsamlı gümüş bilgi platformu", searchPlaceholder: "Gümüş hakkında bir şey arayın…", featured: "Öne Çıkan", latest: "Son Eklenenler", quickTools: "Hızlı Araçlar", viewAll: "Tümünü Gör", readMore: "Devamını Oku", stats: { articles: "Makale", tools: "Araç", mapPoints: "Harita Noktası", languages: "Dil" } },
    explore: { title: "Keşfet", allCategories: "Tümü", articles: "makale" },
    tools: { title: "İnteraktif Araçlar", subtitle: "Hesaplayıcılar, rehberler ve interaktif deneyimler" },
    atlas: { title: "Gümüş Atlası", turkeyTab: "Türkiye", worldTab: "Dünya" },
    more: { title: "Daha Fazla", about: "Hakkında", sponsor: "Sponsor", theme: "Tema", language: "Dil", version: "Sürüm" },
    sponsor: { badge: "Sponsor", text: "Bu platform İstanbul Gümüş tarafından desteklenmektedir.", cta: "Koleksiyonu Keşfet" },
    reading: "dk okuma", by: "Yazar"
  },
  en: {
    tabs: { home: "Home", explore: "Explore", tools: "Tools", atlas: "Atlas", more: "More" },
    home: { hero: "The Complete Story of Silver", heroSub: "From science to history, mining to fashion — the world's most comprehensive silver knowledge platform", searchPlaceholder: "Search about silver…", featured: "Featured", latest: "Latest", quickTools: "Quick Tools", viewAll: "View All", readMore: "Read More", stats: { articles: "Articles", tools: "Tools", mapPoints: "Map Points", languages: "Languages" } },
    explore: { title: "Explore", allCategories: "All", articles: "articles" },
    tools: { title: "Interactive Tools", subtitle: "Calculators, guides, and interactive experiences" },
    atlas: { title: "Silver Atlas", turkeyTab: "Turkey", worldTab: "World" },
    more: { title: "More", about: "About", sponsor: "Sponsor", theme: "Theme", language: "Language", version: "Version" },
    sponsor: { badge: "Sponsor", text: "This platform is sponsored by İstanbul Gümüş.", cta: "Explore Collection" },
    reading: "min read", by: "By"
  },
  ar: {
    tabs: { home: "الرئيسية", explore: "اكتشف", tools: "الأدوات", atlas: "الأطلس", more: "المزيد" },
    home: { hero: "القصة الكاملة للفضة", heroSub: "من العلم إلى التاريخ، من التعدين إلى الموضة — أشمل منصة معرفة الفضة في العالم", searchPlaceholder: "ابحث عن الفضة…", featured: "مميز", latest: "الأحدث", quickTools: "أدوات سريعة", viewAll: "عرض الكل", readMore: "اقرأ المزيد", stats: { articles: "مقالات", tools: "أدوات", mapPoints: "نقطة خريطة", languages: "لغات" } },
    explore: { title: "اكتشف", allCategories: "الكل", articles: "مقالات" },
    tools: { title: "أدوات تفاعلية", subtitle: "حاسبات وأدلة وتجارب تفاعلية" },
    atlas: { title: "أطلس الفضة", turkeyTab: "تركيا", worldTab: "العالم" },
    more: { title: "المزيد", about: "حول", sponsor: "الراعي", theme: "السمة", language: "اللغة", version: "الإصدار" },
    sponsor: { badge: "الراعي", text: "هذه المنصة برعاية إسطنبول غوموش.", cta: "اكتشف المجموعة" },
    reading: "دقائق قراءة", by: "بقلم"
  }
};

// ─── Data ────────────────────────────────────────────────
const CATEGORIES = [
  { id: "bilim", icon: "🔬", color: "#3b82f6", count: 5, tr: "Bilim", en: "Science", ar: "العلوم" },
  { id: "tarih", icon: "📜", color: "#f59e0b", count: 9, tr: "Tarih", en: "History", ar: "التاريخ" },
  { id: "maden", icon: "⛏️", color: "#10b981", count: 5, tr: "Maden", en: "Mining", ar: "التعدين" },
  { id: "uretim", icon: "🔧", color: "#C0C0C0", count: 4, tr: "Üretim", en: "Manufacturing", ar: "التصنيع" },
  { id: "piyasa", icon: "📊", color: "#D4AF37", count: 7, tr: "Piyasa", en: "Market", ar: "السوق" },
  { id: "kultur", icon: "🏛️", color: "#8b5cf6", count: 9, tr: "Kültür", en: "Culture", ar: "الثقافة" },
  { id: "stil", icon: "💎", color: "#ec4899", count: 4, tr: "Stil/Moda", en: "Style", ar: "الأناقة" },
  { id: "rehber", icon: "📖", color: "#06b6d4", count: 3, tr: "Rehber", en: "Guide", ar: "دليل" },
  { id: "zanaat", icon: "🔨", color: "#78716c", count: 2, tr: "Zanaat", en: "Craft", ar: "الحرف" },
  { id: "koleksiyon", icon: "🏺", color: "#64748b", count: 1, tr: "Koleksiyon", en: "Collecting", ar: "المقتنيات" },
];

const FEATURED_ARTICLES = [
  { id: 1, slug: "925-ayar", img: "925", cat: "uretim", readMin: 8, tr: { title: "925 Ayar Gümüş Nedir?", desc: "Sterling gümüşün standartları ve alaşım rehberi" }, en: { title: "What is 925 Sterling Silver?", desc: "Standards and alloy guide" }, ar: { title: "ما هو عيار ٩٢٥؟", desc: "معايير الفضة الإسترلينية" } },
  { id: 44, slug: "japon", img: "🏯", cat: "tarih", readMin: 11, tr: { title: "Japon Gümüş Geleneği", desc: "Mokume-gane'den çay seremonisine" }, en: { title: "Japanese Silver Tradition", desc: "From mokume-gane to tea ceremony" }, ar: { title: "تقليد الفضة الياباني", desc: "من موكومي-غاني إلى حفل الشاي" } },
  { id: 43, slug: "surdurulebilirlik", img: "♻️", cat: "maden", readMin: 12, tr: { title: "Gümüş ve Sürdürülebilirlik", desc: "Geri dönüşüm, etik madencilik" }, en: { title: "Silver & Sustainability", desc: "Recycling, ethical mining" }, ar: { title: "الفضة والاستدامة", desc: "إعادة التدوير والتعدين الأخلاقي" } },
  { id: 46, slug: "dugun", img: "💍", cat: "kultur", readMin: 11, tr: { title: "Gümüş Düğün Gelenekleri", desc: "Beş kıtadan düğün hikayeleri" }, en: { title: "Silver Wedding Traditions", desc: "Stories from five continents" }, ar: { title: "تقاليد الأعراس الفضية", desc: "قصص من خمس قارات" } },
  { id: 50, slug: "heykel", img: "🗿", cat: "kultur", readMin: 10, tr: { title: "Gümüş Heykeltraşlık", desc: "Antik figürinlerden çağdaş sanat" }, en: { title: "Silver Sculpture & Art", desc: "From figurines to contemporary" }, ar: { title: "النحت الفضي", desc: "من التماثيل إلى المعاصر" } },
];

const QUICK_TOOLS = [
  { icon: "⚖️", slug: "purity", tr: "Saflık Hesaplayıcı", en: "Purity Calculator", ar: "حاسبة النقاء" },
  { icon: "💱", slug: "converter", tr: "Birim Dönüştürücü", en: "Unit Converter", ar: "محول الوحدات" },
  { icon: "💍", slug: "ring", tr: "Yüzük Ölçü", en: "Ring Sizer", ar: "قياس الخاتم" },
  { icon: "🧠", slug: "quiz", tr: "Bilgi Quizi", en: "Knowledge Quiz", ar: "اختبار المعرفة" },
  { icon: "🎨", slug: "palette", tr: "Renk Paleti", en: "Color Palette", ar: "لوحة الألوان" },
  { icon: "🌍", slug: "carbon", tr: "Karbon İzi", en: "Carbon Footprint", ar: "البصمة الكربونية" },
];

const ALL_TOOLS = [
  { icon: "⚖️", tr: "925 Saflık Hesaplayıcı", en: "925 Purity Calculator", ar: "حاسبة نقاء ٩٢٥" },
  { icon: "💱", tr: "Birim Dönüştürücü", en: "Unit Converter", ar: "محول الوحدات" },
  { icon: "💍", tr: "Yüzük Ölçü Bulucu", en: "Ring Sizer", ar: "أداة قياس الخاتم" },
  { icon: "🧠", tr: "Gümüş Bilgi Quizi", en: "Silver Quiz", ar: "اختبار الفضة" },
  { icon: "🎨", tr: "Renk Paleti", en: "Color Palette", ar: "لوحة الألوان" },
  { icon: "🌍", tr: "Karbon Ayak İzi", en: "Carbon Footprint", ar: "البصمة الكربونية" },
  { icon: "🔬", tr: "Periyodik Tablo", en: "Periodic Table", ar: "الجدول الدوري" },
  { icon: "🔄", tr: "Karat/Ayar Dönüştürücü", en: "Karat Converter", ar: "محول القيراط" },
  { icon: "💎", tr: "Taş-Gümüş Uyumu", en: "Gemstone Guide", ar: "دليل الأحجار" },
  { icon: "✨", tr: "Bakım Rehberi", en: "Care Guide", ar: "دليل العناية" },
  { icon: "🗺️", tr: "Dünya Haritası", en: "World Map", ar: "خريطة العالم" },
  { icon: "⏳", tr: "Zaman Çizelgesi", en: "Timeline", ar: "الجدول الزمني" },
  { icon: "🏷️", tr: "Damga Tanımlayıcı", en: "Stamp Identifier", ar: "معرّف الأختام" },
  { icon: "📱", tr: "Fiyat Alarm", en: "Price Alert", ar: "تنبيه الأسعار" },
  { icon: "🤲", tr: "Zekât Hesaplayıcı", en: "Zakat Calculator", ar: "حاسبة الزكاة" },
  { icon: "⚗️", tr: "Saflık Test Rehberi", en: "Purity Test Guide", ar: "دليل اختبار النقاء" },
  { icon: "🪞", tr: "Metal Karşılaştırıcı", en: "Metal Comparator", ar: "مقارن المعادن" },
  { icon: "👗", tr: "Takı Kombinatörü", en: "Jewelry Combinator", ar: "منسق المجوهرات" },
  { icon: "🗺️", tr: "Türkiye Gümüş Atlası", en: "Turkey Silver Atlas", ar: "أطلس الفضة التركي" },
  { icon: "📊", tr: "Fiyat Takipçisi", en: "Price Tracker", ar: "متتبع الأسعار" },
];

// ─── Components ──────────────────────────────────────────

function AgLogo({ size = 32, dark }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: "linear-gradient(135deg, #C0C0C0, #D4AF37)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.34, fontWeight: 800, color: "#0b0b10",
      fontFamily: FONT.display, boxShadow: "0 2px 12px rgba(212,175,55,0.2)",
    }}>Ag</div>
  );
}

function StatPill({ value, label, color, th }) {
  return (
    <div style={{
      padding: "10px 0", textAlign: "center", flex: 1,
    }}>
      <div style={{ fontSize: 22, fontWeight: 700, fontFamily: FONT.mono, color, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 10, color: th.textMuted, marginTop: 4 }}>{label}</div>
    </div>
  );
}

function CategoryChip({ cat, lang, isActive, onClick, th }) {
  const color = cat ? cat.color : th.gold;
  return (
    <button onClick={onClick} style={{
      padding: "8px 16px", borderRadius: 20, border: "none",
      background: isActive ? `${color}20` : "transparent",
      color: isActive ? color : th.textMuted,
      fontSize: 13, fontWeight: 600, cursor: "pointer",
      whiteSpace: "nowrap", transition: "all 0.2s",
      outline: isActive ? `1.5px solid ${color}44` : "none",
    }}>
      {cat ? `${cat.icon} ${cat[lang]}` : "✦ " + (lang === "ar" ? "الكل" : lang === "en" ? "All" : "Tümü")}
    </button>
  );
}

function ArticleCard({ article, lang, th, isRTL, readLabel }) {
  const a = article[lang] || article.tr;
  const cat = CATEGORIES.find(c => c.id === article.cat);
  return (
    <div style={{
      minWidth: 260, maxWidth: 280, borderRadius: 16, overflow: "hidden",
      background: th.gradientCard, border: `1px solid ${th.border}`,
      flexShrink: 0, transition: "transform 0.25s, box-shadow 0.25s",
      cursor: "pointer",
    }}>
      {/* Image area */}
      <div style={{
        height: 120, background: `linear-gradient(135deg, ${cat?.color || th.gold}15, ${cat?.color || th.gold}08)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        <span style={{ fontSize: article.img?.length <= 3 ? 40 : 36, opacity: 0.9 }}>
          {article.img || "📄"}
        </span>
        {cat && (
          <div style={{
            position: "absolute", top: 10, left: isRTL ? "auto" : 10, right: isRTL ? 10 : "auto",
            padding: "3px 10px", borderRadius: 8,
            background: `${cat.color}22`, color: cat.color,
            fontSize: 10, fontWeight: 700, backdropFilter: "blur(8px)",
          }}>{cat[lang]}</div>
        )}
      </div>
      {/* Content */}
      <div style={{ padding: "14px 16px 16px" }}>
        <h3 style={{
          fontSize: 15, fontWeight: 700, lineHeight: 1.3, marginBottom: 6,
          color: th.text, fontFamily: isRTL ? FONT.ar : FONT.display,
        }}>{a.title}</h3>
        <p style={{
          fontSize: 12, color: th.textMuted, lineHeight: 1.5, marginBottom: 10,
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{a.desc}</p>
        <div style={{ fontSize: 11, color: th.textDim }}>
          {article.readMin} {readLabel}
        </div>
      </div>
    </div>
  );
}

function ToolCard({ tool, lang, th }) {
  return (
    <div style={{
      padding: "16px 14px", borderRadius: 14, textAlign: "center",
      background: th.bgCard, border: `1px solid ${th.border}`,
      cursor: "pointer", transition: "all 0.2s",
    }}>
      <div style={{ fontSize: 28, marginBottom: 8 }}>{tool.icon}</div>
      <div style={{ fontSize: 12, fontWeight: 600, color: th.text, lineHeight: 1.3 }}>
        {tool[lang] || tool.tr}
      </div>
    </div>
  );
}

// ─── Tab Icons (SVG) ─────────────────────────────────────
const TabIcons = {
  home: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>,
  explore: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
  tools: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>,
  atlas: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"/></svg>,
  more: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8"><circle cx="12" cy="5" r="1.5" fill={c}/><circle cx="12" cy="12" r="1.5" fill={c}/><circle cx="12" cy="19" r="1.5" fill={c}/></svg>,
};

// ─── Main App ────────────────────────────────────────────
export default function SilverAtlasMobileApp() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [tab, setTab] = useState("home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCat, setActiveCat] = useState(null);

  const isRTL = lang === "ar";
  const th = dark ? THEME.dark : THEME.light;
  const t = UI[lang];
  const f = isRTL ? FONT.ar : FONT.body;

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&family=Noto+Naskh+Arabic:wght@400;600;700&family=JetBrains+Mono:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  // ─── Home Tab ──────────────────────────────────────────
  const HomeTab = () => (
    <div>
      {/* Hero Section */}
      <div style={{
        padding: "36px 20px 28px", background: th.gradientHero,
        position: "relative", overflow: "hidden",
      }}>
        {/* Decorative elements */}
        <div style={{
          position: "absolute", top: -40, right: isRTL ? "auto" : -40, left: isRTL ? -40 : "auto",
          width: 200, height: 200, borderRadius: "50%",
          background: `radial-gradient(circle, ${th.gold}08, transparent)`,
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <AgLogo size={36} dark={dark} />
            <div>
              <div style={{ fontFamily: FONT.display, fontWeight: 700, fontSize: 16, color: th.text }}>SilverAtlas</div>
              <div style={{ fontSize: 10, color: th.textDim, letterSpacing: "0.05em" }}>silveratlas.org</div>
            </div>
          </div>
          <h1 style={{
            fontFamily: isRTL ? FONT.ar : FONT.display, fontSize: "clamp(24px, 7vw, 32px)",
            fontWeight: 800, lineHeight: 1.15, color: th.text, marginBottom: 10,
          }}>{t.home.hero}</h1>
          <p style={{ fontSize: 14, color: th.textMuted, lineHeight: 1.6, maxWidth: 340 }}>
            {t.home.heroSub}
          </p>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", marginTop: 24, borderRadius: 14,
          background: th.bgGlass, backdropFilter: "blur(16px)",
          border: `1px solid ${th.border}`, overflow: "hidden",
        }}>
          <StatPill value="50" label={t.home.stats.articles} color={th.gold} th={th} />
          <StatPill value="24" label={t.home.stats.tools} color={th.accent} th={th} />
          <StatPill value="297" label={t.home.stats.mapPoints} color={th.success} th={th} />
          <StatPill value="3" label={t.home.stats.languages} color="#8b5cf6" th={th} />
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ padding: "16px 20px 0" }}>
        <div onClick={() => setSearchOpen(true)} style={{
          display: "flex", alignItems: "center", gap: 10, padding: "12px 16px",
          borderRadius: 12, background: th.bgCard, border: `1px solid ${th.border}`,
          cursor: "pointer",
        }}>
          <span style={{ fontSize: 16, opacity: 0.4 }}>🔍</span>
          <span style={{ fontSize: 14, color: th.textDim }}>{t.home.searchPlaceholder}</span>
        </div>
      </div>

      {/* Quick Tools */}
      <div style={{ padding: "20px 20px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, fontFamily: isRTL ? FONT.ar : FONT.display }}>{t.home.quickTools}</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {QUICK_TOOLS.map((tool, i) => (
            <div key={i} style={{
              padding: "14px 8px", borderRadius: 12, textAlign: "center",
              background: th.bgCard, border: `1px solid ${th.border}`,
              cursor: "pointer",
            }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>{tool.icon}</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: th.textMuted, lineHeight: 1.3 }}>{tool[lang]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Articles (horizontal scroll) */}
      <div style={{ padding: "24px 0 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "0 20px", marginBottom: 12, alignItems: "center" }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, fontFamily: isRTL ? FONT.ar : FONT.display }}>{t.home.featured}</h2>
          <span style={{ fontSize: 12, color: th.gold, fontWeight: 600, cursor: "pointer" }}>{t.home.viewAll}</span>
        </div>
        <div style={{
          display: "flex", gap: 12, overflowX: "auto", padding: "0 20px 16px",
          scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none", scrollbarWidth: "none",
        }}>
          {FEATURED_ARTICLES.map((a, i) => (
            <div key={i} style={{ scrollSnapAlign: "start" }}>
              <ArticleCard article={a} lang={lang} th={th} isRTL={isRTL} readLabel={t.reading} />
            </div>
          ))}
        </div>
      </div>

      {/* Sponsor CTA */}
      <div style={{ padding: "8px 20px 24px" }}>
        <div style={{
          padding: "20px", borderRadius: 16,
          background: `linear-gradient(135deg, ${th.gold}08, ${th.gold}04)`,
          border: `1px solid ${th.gold}18`,
          display: "flex", alignItems: "center", gap: 14,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12, flexShrink: 0,
            background: `linear-gradient(135deg, ${th.accent}20, ${th.gold}20)`,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
          }}>💫</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: th.gold, fontWeight: 700, marginBottom: 4, letterSpacing: "0.04em" }}>
              {t.sponsor.badge} · İstanbul Gümüş
            </div>
            <div style={{ fontSize: 12, color: th.textMuted, lineHeight: 1.5 }}>{t.sponsor.text}</div>
          </div>
        </div>
      </div>
    </div>
  );

  // ─── Explore Tab ───────────────────────────────────────
  const ExploreTab = () => (
    <div style={{ padding: "24px 20px" }}>
      <h1 style={{ fontFamily: isRTL ? FONT.ar : FONT.display, fontSize: 24, fontWeight: 700, marginBottom: 20 }}>{t.explore.title}</h1>

      {/* Category chips (horizontal scroll) */}
      <div style={{
        display: "flex", gap: 6, overflowX: "auto", marginBottom: 24, paddingBottom: 4,
        scrollbarWidth: "none", msOverflowStyle: "none",
      }}>
        <CategoryChip cat={null} lang={lang} isActive={!activeCat} onClick={() => setActiveCat(null)} th={th} />
        {CATEGORIES.map(cat => (
          <CategoryChip key={cat.id} cat={cat} lang={lang} isActive={activeCat === cat.id} onClick={() => setActiveCat(cat.id)} th={th} />
        ))}
      </div>

      {/* Category grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
        {(activeCat ? CATEGORIES.filter(c => c.id === activeCat) : CATEGORIES).map(cat => (
          <div key={cat.id} onClick={() => setActiveCat(cat.id)} style={{
            padding: "18px 16px", borderRadius: 14,
            background: th.bgCard, border: `1px solid ${activeCat === cat.id ? cat.color + "44" : th.border}`,
            cursor: "pointer", transition: "all 0.2s",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 24 }}>{cat.icon}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: th.text }}>{cat[lang]}</span>
            </div>
            <div style={{ fontSize: 12, color: cat.color, fontWeight: 600 }}>
              {cat.count} {t.explore.articles}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ─── Tools Tab ─────────────────────────────────────────
  const ToolsTab = () => (
    <div style={{ padding: "24px 20px" }}>
      <h1 style={{ fontFamily: isRTL ? FONT.ar : FONT.display, fontSize: 24, fontWeight: 700, marginBottom: 6 }}>{t.tools.title}</h1>
      <p style={{ fontSize: 13, color: th.textMuted, marginBottom: 24 }}>{t.tools.subtitle}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
        {ALL_TOOLS.map((tool, i) => (
          <ToolCard key={i} tool={tool} lang={lang} th={th} />
        ))}
      </div>
    </div>
  );

  // ─── Atlas Tab ─────────────────────────────────────────
  const AtlasTab = () => {
    const [atlasTab, setAtlasTab] = useState("turkey");
    return (
      <div style={{ padding: "24px 20px" }}>
        <h1 style={{ fontFamily: isRTL ? FONT.ar : FONT.display, fontSize: 24, fontWeight: 700, marginBottom: 16 }}>{t.atlas.title}</h1>
        <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
          {["turkey", "world"].map(tb => (
            <button key={tb} onClick={() => setAtlasTab(tb)} style={{
              flex: 1, padding: "10px", borderRadius: 10, border: "none",
              background: atlasTab === tb ? th.gold + "15" : th.bgCard,
              color: atlasTab === tb ? th.gold : th.textMuted,
              fontWeight: 600, fontSize: 13, cursor: "pointer",
              outline: atlasTab === tb ? `1.5px solid ${th.gold}44` : `1px solid ${th.border}`,
            }}>{tb === "turkey" ? `🇹🇷 ${t.atlas.turkeyTab}` : `🌍 ${t.atlas.worldTab}`}</button>
          ))}
        </div>
        <div style={{
          height: 300, borderRadius: 16, border: `1px solid ${th.border}`,
          background: th.bgCard, display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: 12,
        }}>
          <span style={{ fontSize: 64, opacity: 0.3 }}>{atlasTab === "turkey" ? "🗺️" : "🌍"}</span>
          <span style={{ fontSize: 13, color: th.textDim }}>
            {atlasTab === "turkey" ? "81 il · Türkiye Gümüş Atlası" : "297 nokta · Dünya Gümüş Haritası"}
          </span>
        </div>
      </div>
    );
  };

  // ─── More Tab ──────────────────────────────────────────
  const MoreTab = () => (
    <div style={{ padding: "24px 20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
        <AgLogo size={48} dark={dark} />
        <div>
          <div style={{ fontFamily: FONT.display, fontWeight: 700, fontSize: 20 }}>SilverAtlas</div>
          <div style={{ fontSize: 12, color: th.textDim }}>v6.0 — 117 dosya · 34.501 satır</div>
        </div>
      </div>

      {/* Settings */}
      {[
        { icon: dark ? "🌙" : "☀️", label: t.more.theme, action: () => setDark(!dark), value: dark ? "Dark" : "Light" },
        { icon: "🌐", label: t.more.language, value: lang.toUpperCase() },
        { icon: "ℹ️", label: t.more.about },
        { icon: "💫", label: t.more.sponsor + " — İstanbul Gümüş" },
        { icon: "📱", label: t.more.version, value: "6.0" },
      ].map((item, i) => (
        <div key={i} onClick={item.action} style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "16px 0", borderBottom: `1px solid ${th.border}`,
          cursor: item.action ? "pointer" : "default",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 20, width: 28, textAlign: "center" }}>{item.icon}</span>
            <span style={{ fontSize: 14, fontWeight: 500 }}>{item.label}</span>
          </div>
          {item.value && <span style={{ fontSize: 13, color: th.textMuted }}>{item.value}</span>}
        </div>
      ))}

      {/* Language selector */}
      <div style={{ marginTop: 20 }}>
        <div style={{ fontSize: 12, color: th.textDim, marginBottom: 10 }}>{t.more.language}</div>
        <div style={{ display: "flex", gap: 8 }}>
          {[{ id: "tr", label: "Türkçe" }, { id: "en", label: "English" }, { id: "ar", label: "العربية" }].map(l => (
            <button key={l.id} onClick={() => setLang(l.id)} style={{
              flex: 1, padding: "12px", borderRadius: 10,
              border: `1.5px solid ${lang === l.id ? th.gold : th.border}`,
              background: lang === l.id ? th.gold + "12" : "transparent",
              color: lang === l.id ? th.gold : th.textMuted,
              fontSize: 13, fontWeight: 600, cursor: "pointer",
            }}>{l.label}</button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 32, textAlign: "center", fontSize: 11, color: th.textDim }}>
        <p>CC BY-NC-SA 4.0 · Yazar: Turan Erbaş</p>
        <p style={{ marginTop: 4 }}>Sponsored by İstanbul Gümüş · Konya</p>
      </div>
    </div>
  );

  // ─── Render ────────────────────────────────────────────
  const pages = { home: HomeTab, explore: ExploreTab, tools: ToolsTab, atlas: AtlasTab, more: MoreTab };
  const CurrentPage = pages[tab];

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{
      fontFamily: f, background: th.bg, color: th.text,
      minHeight: "100vh", maxWidth: 480, margin: "0 auto",
      position: "relative", paddingBottom: 72,
    }}>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{display:none}
        @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.6}}
      `}</style>

      {/* Page Content */}
      <div key={tab} style={{ animation: "fadeIn 0.3s ease" }}>
        <CurrentPage />
      </div>

      {/* Bottom Tab Bar */}
      <nav style={{
        position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: 480,
        background: th.bgNav, backdropFilter: "blur(20px) saturate(180%)",
        borderTop: `1px solid ${th.border}`, boxShadow: th.shadow,
        display: "flex", justifyContent: "space-around", alignItems: "center",
        padding: "6px 0 env(safe-area-inset-bottom, 8px)", zIndex: 100,
      }}>
        {(["home", "explore", "tools", "atlas", "more"]).map(id => {
          const isActive = tab === id;
          const color = isActive ? th.gold : th.textDim;
          return (
            <button key={id} onClick={() => setTab(id)} style={{
              background: "transparent", border: "none", cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
              padding: "6px 12px", borderRadius: 12,
              transition: "all 0.2s",
            }}>
              {TabIcons[id](color)}
              <span style={{
                fontSize: 9, fontWeight: isActive ? 700 : 500, color,
                letterSpacing: "0.02em", marginTop: 1,
              }}>{t.tabs[id]}</span>
              {isActive && (
                <div style={{
                  width: 4, height: 4, borderRadius: "50%",
                  background: th.gold, marginTop: 1,
                }} />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
