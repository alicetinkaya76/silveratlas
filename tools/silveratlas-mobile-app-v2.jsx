import { useState, useEffect, useRef, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════
   SilverAtlas — Mobile-First PWA v2 (Faz 7)
   Full-featured: Search overlay, Article detail, Tool modal,
   Skeleton loading, Pull-to-refresh, Swipe navigation
   ═══════════════════════════════════════════════════════════ */

// ─── Design Tokens ───────────────────────────────────────
const THEME = {
  dark: { bg: "#0b0b10", bgCard: "#141419", bgNav: "rgba(11,11,16,0.94)", bgElevated: "#1a1a22", bgGlass: "rgba(20,20,25,0.85)",
    text: "#f0f0f0", textMuted: "#8a8a9a", textDim: "#555566", border: "rgba(255,255,255,0.06)", borderActive: "rgba(255,255,255,0.12)",
    accent: "#C0C0C0", gold: "#D4AF37", navy: "#1a1a2e", success: "#34d399", error: "#f87171", warning: "#fbbf24",
    shadow: "0 -1px 20px rgba(0,0,0,0.5)", gradientHero: "linear-gradient(165deg, #0f0f18 0%, #1a1428 40%, #0f1a1a 100%)",
    gradientCard: "linear-gradient(145deg, #141419 0%, #1a1a22 100%)" },
  light: { bg: "#f8f7f2", bgCard: "#ffffff", bgNav: "rgba(248,247,242,0.94)", bgElevated: "#ffffff", bgGlass: "rgba(255,255,255,0.88)",
    text: "#1a1a2e", textMuted: "#6b6b7b", textDim: "#9a9aaa", border: "rgba(0,0,0,0.06)", borderActive: "rgba(0,0,0,0.12)",
    accent: "#708090", gold: "#C49B1C", navy: "#1a1a2e", success: "#059669", error: "#dc2626", warning: "#d97706",
    shadow: "0 -1px 20px rgba(0,0,0,0.08)", gradientHero: "linear-gradient(165deg, #f8f7f2 0%, #ede8e0 40%, #f0ede8 100%)",
    gradientCard: "linear-gradient(145deg, #ffffff 0%, #fafaf5 100%)" },
};
const FONT = { display: "'Playfair Display',serif", body: "'Source Sans 3',sans-serif", ar: "'Noto Naskh Arabic',serif", mono: "'JetBrains Mono',monospace" };

// ─── i18n ────────────────────────────────────────────────
const UI = {
  tr: {
    tabs: { home: "Ana Sayfa", explore: "Keşfet", tools: "Araçlar", atlas: "Atlas", more: "Daha" },
    home: { hero: "Gümüşün Tüm Hikâyesi", heroSub: "Bilimden tarihe, madencilikten modaya — dünyanın en kapsamlı gümüş bilgi platformu", searchPlaceholder: "Gümüş hakkında bir şey arayın…", featured: "Öne Çıkan", latest: "Son Eklenenler", quickTools: "Hızlı Araçlar", viewAll: "Tümünü Gör", readMore: "Devamını Oku", stats: { articles: "Makale", tools: "Araç", mapPoints: "Harita Noktası", languages: "Dil" } },
    explore: { title: "Keşfet", allCategories: "Tümü", articles: "makale" },
    tools: { title: "İnteraktif Araçlar", subtitle: "Hesaplayıcılar, rehberler ve interaktif deneyimler", newBadge: "YENİ" },
    atlas: { title: "Gümüş Atlası", turkeyTab: "Türkiye", worldTab: "Dünya" },
    more: { title: "Daha Fazla", about: "Hakkında", sponsor: "Sponsor", theme: "Tema", language: "Dil", version: "Sürüm" },
    sponsor: { badge: "Sponsor", text: "Bu platform İstanbul Gümüş tarafından desteklenmektedir.", cta: "Koleksiyonu Keşfet" },
    search: { title: "Ara", recent: "Son Aramalar", results: "Sonuçlar", noResults: "Sonuç bulunamadı", articles: "Makaleler", tools: "Araçlar", cancel: "İptal" },
    article: { back: "Geri", readMin: "dk okuma", by: "Yazar", toc: "İçindekiler", related: "İlgili Konular", share: "Paylaş" },
    reading: "dk okuma", by: "Yazar", loading: "Yükleniyor…"
  },
  en: {
    tabs: { home: "Home", explore: "Explore", tools: "Tools", atlas: "Atlas", more: "More" },
    home: { hero: "The Complete Story of Silver", heroSub: "From science to history, mining to fashion — the world's most comprehensive silver knowledge platform", searchPlaceholder: "Search about silver…", featured: "Featured", latest: "Latest", quickTools: "Quick Tools", viewAll: "View All", readMore: "Read More", stats: { articles: "Articles", tools: "Tools", mapPoints: "Map Points", languages: "Languages" } },
    explore: { title: "Explore", allCategories: "All", articles: "articles" },
    tools: { title: "Interactive Tools", subtitle: "Calculators, guides, and interactive experiences", newBadge: "NEW" },
    atlas: { title: "Silver Atlas", turkeyTab: "Turkey", worldTab: "World" },
    more: { title: "More", about: "About", sponsor: "Sponsor", theme: "Theme", language: "Language", version: "Version" },
    sponsor: { badge: "Sponsor", text: "This platform is sponsored by İstanbul Gümüş.", cta: "Explore Collection" },
    search: { title: "Search", recent: "Recent Searches", results: "Results", noResults: "No results found", articles: "Articles", tools: "Tools", cancel: "Cancel" },
    article: { back: "Back", readMin: "min read", by: "By", toc: "Contents", related: "Related Topics", share: "Share" },
    reading: "min read", by: "By", loading: "Loading…"
  },
  ar: {
    tabs: { home: "الرئيسية", explore: "اكتشف", tools: "الأدوات", atlas: "الأطلس", more: "المزيد" },
    home: { hero: "القصة الكاملة للفضة", heroSub: "من العلم إلى التاريخ، من التعدين إلى الموضة — أشمل منصة معرفة الفضة في العالم", searchPlaceholder: "ابحث عن الفضة…", featured: "مميز", latest: "الأحدث", quickTools: "أدوات سريعة", viewAll: "عرض الكل", readMore: "اقرأ المزيد", stats: { articles: "مقالات", tools: "أدوات", mapPoints: "نقطة خريطة", languages: "لغات" } },
    explore: { title: "اكتشف", allCategories: "الكل", articles: "مقالات" },
    tools: { title: "أدوات تفاعلية", subtitle: "حاسبات وأدلة وتجارب تفاعلية", newBadge: "جديد" },
    atlas: { title: "أطلس الفضة", turkeyTab: "تركيا", worldTab: "العالم" },
    more: { title: "المزيد", about: "حول", sponsor: "الراعي", theme: "السمة", language: "اللغة", version: "الإصدار" },
    sponsor: { badge: "الراعي", text: "هذه المنصة برعاية إسطنبول غوموش.", cta: "اكتشف المجموعة" },
    search: { title: "بحث", recent: "عمليات البحث الأخيرة", results: "النتائج", noResults: "لم يتم العثور على نتائج", articles: "مقالات", tools: "أدوات", cancel: "إلغاء" },
    article: { back: "رجوع", readMin: "دقائق قراءة", by: "بقلم", toc: "المحتويات", related: "مواضيع ذات صلة", share: "مشاركة" },
    reading: "دقائق قراءة", by: "بقلم", loading: "جارٍ التحميل…"
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
  { id: "stil", icon: "💎", color: "#ec4899", count: 5, tr: "Stil/Moda", en: "Style", ar: "الأناقة" },
  { id: "rehber", icon: "📖", color: "#06b6d4", count: 3, tr: "Rehber", en: "Guide", ar: "دليل" },
  { id: "zanaat", icon: "🔨", color: "#78716c", count: 2, tr: "Zanaat", en: "Craft", ar: "الحرف" },
  { id: "koleksiyon", icon: "🏺", color: "#64748b", count: 1, tr: "Koleksiyon", en: "Collecting", ar: "المقتنيات" },
];

const ALL_ARTICLES = [
  { id: 1, slug: "925-ayar", cat: "uretim", readMin: 8, img: "925", tr: { title: "925 Ayar Gümüş Nedir?", desc: "Sterling gümüşün standartları" }, en: { title: "What is 925 Sterling Silver?", desc: "Standards and alloy guide" }, ar: { title: "ما هو عيار ٩٢٥؟", desc: "معايير الفضة الإسترلينية" } },
  { id: 2, slug: "tarih", cat: "tarih", readMin: 12, img: "📜", tr: { title: "Gümüşün Tarihi", desc: "MÖ 5000'den günümüze" }, en: { title: "History of Silver", desc: "From 5000 BCE to present" }, ar: { title: "تاريخ الفضة", desc: "من ٥٠٠٠ ق.م" } },
  { id: 5, slug: "kimya", cat: "bilim", readMin: 10, img: "🔬", tr: { title: "Gümüşün Kimyası", desc: "Atom yapısı ve reaksiyonlar" }, en: { title: "Chemistry of Silver", desc: "Atomic structure and reactions" }, ar: { title: "كيمياء الفضة", desc: "البنية الذرية والتفاعلات" } },
  { id: 8, slug: "yatirim", cat: "piyasa", readMin: 11, img: "📊", tr: { title: "Yatırım Rehberi", desc: "Fiziki gümüş, ETF stratejileri" }, en: { title: "Investment Guide", desc: "Physical silver, ETF strategies" }, ar: { title: "دليل الاستثمار", desc: "الفضة المادية واستراتيجيات" } },
  { id: 42, slug: "yuzuk", cat: "rehber", readMin: 9, img: "💍", tr: { title: "Yüzük Seçim Rehberi", desc: "Stil ve ölçü rehberi" }, en: { title: "Ring Selection Guide", desc: "Style and size guide" }, ar: { title: "دليل اختيار الخاتم", desc: "دليل الأسلوب والمقاس" } },
  { id: 43, slug: "surdurulebilirlik", cat: "maden", readMin: 12, img: "♻️", tr: { title: "Sürdürülebilirlik", desc: "Geri dönüşüm, etik madencilik" }, en: { title: "Sustainability", desc: "Recycling, ethical mining" }, ar: { title: "الاستدامة", desc: "إعادة التدوير والتعدين الأخلاقي" } },
  { id: 44, slug: "japon", cat: "tarih", readMin: 11, img: "🏯", tr: { title: "Japon Gümüş Geleneği", desc: "Mokume-gane'den çay seremonisine" }, en: { title: "Japanese Silver", desc: "From mokume-gane to tea ceremony" }, ar: { title: "الفضة اليابانية", desc: "من موكومي-غاني إلى حفل الشاي" } },
  { id: 46, slug: "dugun", cat: "kultur", readMin: 11, img: "💍", tr: { title: "Düğün Gelenekleri", desc: "Beş kıtadan düğün hikayeleri" }, en: { title: "Wedding Traditions", desc: "Stories from five continents" }, ar: { title: "تقاليد الأعراس", desc: "قصص من خمس قارات" } },
  { id: 50, slug: "heykel", cat: "kultur", readMin: 10, img: "🗿", tr: { title: "Heykeltraşlık ve Sanat", desc: "Antik figürinlerden çağdaş sanat" }, en: { title: "Sculpture & Art", desc: "Ancient figurines to contemporary" }, ar: { title: "النحت والفن", desc: "من التماثيل إلى المعاصر" } },
  { id: 16, slug: "osmanli", cat: "tarih", readMin: 11, img: "🕌", tr: { title: "Osmanlı Gümüşçülüğü", desc: "Saray atölyelerinden Grand Bazaar'a" }, en: { title: "Ottoman Silver", desc: "From palace to Grand Bazaar" }, ar: { title: "الفضة العثمانية", desc: "من القصر إلى البازار الكبير" } },
];

const ALL_TOOLS = [
  { icon: "⚖️", slug: "purity", phase: 6, tr: "925 Saflık Hesaplayıcı", en: "925 Purity Calculator", ar: "حاسبة نقاء ٩٢٥" },
  { icon: "💱", slug: "converter", phase: 6, tr: "Birim Dönüştürücü", en: "Unit Converter", ar: "محول الوحدات" },
  { icon: "💍", slug: "ring", phase: 5, tr: "Yüzük Ölçü Bulucu", en: "Ring Sizer", ar: "أداة قياس الخاتم" },
  { icon: "🧠", slug: "quiz", phase: 6, tr: "Gümüş Bilgi Quizi", en: "Silver Quiz", ar: "اختبار الفضة" },
  { icon: "🎨", slug: "palette", phase: 6, tr: "Renk Paleti", en: "Color Palette", ar: "لوحة الألوان" },
  { icon: "🌍", slug: "carbon", phase: 6, tr: "Karbon Ayak İzi", en: "Carbon Footprint", ar: "البصمة الكربونية" },
  { icon: "🔬", slug: "periodic", phase: 6, tr: "Periyodik Tablo", en: "Periodic Table", ar: "الجدول الدوري" },
  { icon: "🔄", slug: "karat", phase: 6, tr: "Karat Dönüştürücü", en: "Karat Converter", ar: "محول القيراط" },
  { icon: "💎", slug: "gemstone", phase: 2, tr: "Taş-Gümüş Uyumu", en: "Gemstone Guide", ar: "دليل الأحجار" },
  { icon: "✨", slug: "care", phase: 1, tr: "Bakım Rehberi", en: "Care Guide", ar: "دليل العناية" },
  { icon: "🗺️", slug: "map", phase: 2, tr: "Dünya Haritası", en: "World Map", ar: "خريطة العالم" },
  { icon: "⏳", slug: "timeline", phase: 2, tr: "Zaman Çizelgesi", en: "Timeline", ar: "الجدول الزمني" },
  { icon: "🏷️", slug: "stamp", phase: 5, tr: "Damga Tanımlayıcı", en: "Stamp Identifier", ar: "معرّف الأختام" },
  { icon: "📱", slug: "alert", phase: 5, tr: "Fiyat Alarm", en: "Price Alert", ar: "تنبيه الأسعار" },
  { icon: "🤲", slug: "zakat", phase: 5, tr: "Zekât Hesaplayıcı", en: "Zakat Calculator", ar: "حاسبة الزكاة" },
  { icon: "⚗️", slug: "purity-test", phase: 5, tr: "Saflık Test Rehberi", en: "Purity Test", ar: "اختبار النقاء" },
  { icon: "🪞", slug: "comparator", phase: 5, tr: "Metal Karşılaştırıcı", en: "Metal Comparator", ar: "مقارن المعادن" },
  { icon: "👗", slug: "combinator", phase: 5, tr: "Takı Kombinatörü", en: "Jewelry Combinator", ar: "منسق المجوهرات" },
  { icon: "🇹🇷", slug: "turkey", phase: 6, tr: "Türkiye Atlası", en: "Turkey Atlas", ar: "أطلس تركيا" },
  { icon: "📊", slug: "market", phase: 1, tr: "Fiyat Takipçisi", en: "Price Tracker", ar: "متتبع الأسعار" },
  // Faz 7 new
  { icon: "✏️", slug: "engrave", phase: 7, tr: "Gravür Önizleyici", en: "Engraving Preview", ar: "معاينة النقش" },
  { icon: "🛡️", slug: "insurance", phase: 7, tr: "Sigorta Hesaplayıcı", en: "Insurance Calc", ar: "حاسبة التأمين" },
  { icon: "🏆", slug: "quiz-v2", phase: 7, tr: "İleri Quiz", en: "Advanced Quiz", ar: "اختبار متقدم" },
  { icon: "🔄", slug: "tarnish", phase: 7, tr: "Kararma Simülatörü", en: "Tarnish Sim", ar: "محاكي التشوه" },
  { icon: "🕐", slug: "clock", phase: 7, tr: "Dünya Saati", en: "World Clock", ar: "الساعة العالمية" },
  { icon: "💰", slug: "portfolio", phase: 7, tr: "Portföy Takipçisi", en: "Portfolio Tracker", ar: "متتبع المحفظة" },
  { icon: "📜", slug: "cert", phase: 7, tr: "Sertifika Doğrulayıcı", en: "Cert Verifier", ar: "التحقق من الشهادة" },
];

// ─── Shared Components ───────────────────────────────────
function AgLogo({ size = 32 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", background: "linear-gradient(135deg, #C0C0C0, #D4AF37)",
      display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * 0.34, fontWeight: 800,
      color: "#0b0b10", fontFamily: FONT.display, boxShadow: "0 2px 12px rgba(212,175,55,0.2)" }}>Ag</div>
  );
}

function SkeletonBlock({ w = "100%", h = 16, r = 8, style = {} }) {
  return <div style={{ width: w, height: h, borderRadius: r, background: "linear-gradient(90deg, #1a1a22 25%, #252530 37%, #1a1a22 63%)", backgroundSize: "800px 100%", animation: "silverShimmer 1.8s ease infinite", ...style }} />;
}

function SkeletonCard({ th }) {
  return (
    <div style={{ minWidth: 260, maxWidth: 280, borderRadius: 16, overflow: "hidden", background: th.bgCard, border: `1px solid ${th.border}`, flexShrink: 0 }}>
      <SkeletonBlock h={120} r={0} />
      <div style={{ padding: 14 }}><SkeletonBlock h={18} style={{ marginBottom: 10 }} /><SkeletonBlock w="70%" h={14} /></div>
    </div>
  );
}

// ─── Tab Icons ─────────────────────────────────────
const TabIcons = {
  home: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>,
  explore: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
  tools: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>,
  atlas: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"/></svg>,
  more: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8"><circle cx="12" cy="5" r="1.5" fill={c}/><circle cx="12" cy="12" r="1.5" fill={c}/><circle cx="12" cy="19" r="1.5" fill={c}/></svg>,
};

// ═══ MAIN APP ════════════════════════════════════════════
export default function SilverAtlasMobileV2() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [tab, setTab] = useState("home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCat, setActiveCat] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);

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

  useEffect(() => { if (searchOpen && searchRef.current) searchRef.current.focus(); }, [searchOpen]);

  // ─── Search Logic ─────────────────────────────────────
  const searchResults = searchQuery.length >= 2 ? {
    articles: ALL_ARTICLES.filter(a => {
      const l = a[lang] || a.tr;
      return l.title.toLowerCase().includes(searchQuery.toLowerCase()) || l.desc.toLowerCase().includes(searchQuery.toLowerCase());
    }),
    tools: ALL_TOOLS.filter(t => (t[lang] || t.tr).toLowerCase().includes(searchQuery.toLowerCase())),
  } : null;

  // ─── Navigate helpers ─────────────────────────────────
  const openArticle = (article) => { setIsLoading(true); setSelectedArticle(article); setSearchOpen(false); setTimeout(() => setIsLoading(false), 600); };
  const openTool = (tool) => { setIsLoading(true); setSelectedTool(tool); setTimeout(() => setIsLoading(false), 600); };
  const goBack = () => { setSelectedArticle(null); setSelectedTool(null); };

  // ═══ SEARCH OVERLAY ═══════════════════════════════════
  const SearchOverlay = () => (
    <div style={{
      position: "fixed", inset: 0, zIndex: 200, background: th.bg,
      animation: "fadeIn 0.2s ease", padding: "12px 20px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 12, background: th.bgCard, border: `1px solid ${th.borderActive}` }}>
          <span style={{ fontSize: 16, opacity: 0.5 }}>🔍</span>
          <input ref={searchRef} value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder={t.home.searchPlaceholder}
            style={{ flex: 1, border: "none", background: "transparent", color: th.text, fontSize: 15, outline: "none", fontFamily: f }} />
          {searchQuery && <span onClick={() => setSearchQuery("")} style={{ cursor: "pointer", color: th.textDim, fontSize: 18 }}>✕</span>}
        </div>
        <button onClick={() => { setSearchOpen(false); setSearchQuery(""); }} style={{
          background: "transparent", border: "none", color: th.gold, fontSize: 14, fontWeight: 600, cursor: "pointer",
        }}>{t.search.cancel}</button>
      </div>

      {/* Search Results */}
      {searchResults ? (
        <div>
          {searchResults.articles.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: th.gold, marginBottom: 10 }}>{t.search.articles} ({searchResults.articles.length})</h3>
              {searchResults.articles.map(a => {
                const al = a[lang] || a.tr;
                const cat = CATEGORIES.find(c => c.id === a.cat);
                return (
                  <div key={a.id} onClick={() => openArticle(a)} style={{
                    display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 12,
                    background: th.bgCard, border: `1px solid ${th.border}`, marginBottom: 8, cursor: "pointer",
                  }}>
                    <span style={{ fontSize: 28 }}>{a.img}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>{al.title}</div>
                      <div style={{ fontSize: 11, color: th.textDim }}>{cat?.[lang]} · {a.readMin} {t.reading}</div>
                    </div>
                    <span style={{ fontSize: 18, color: th.textDim }}>›</span>
                  </div>
                );
              })}
            </div>
          )}
          {searchResults.tools.length > 0 && (
            <div>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: th.accent, marginBottom: 10 }}>{t.search.tools} ({searchResults.tools.length})</h3>
              {searchResults.tools.map((tool, i) => (
                <div key={i} onClick={() => openTool(tool)} style={{
                  display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 12,
                  background: th.bgCard, border: `1px solid ${th.border}`, marginBottom: 8, cursor: "pointer",
                }}>
                  <span style={{ fontSize: 24 }}>{tool.icon}</span>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{tool[lang] || tool.tr}</span>
                  {tool.phase === 7 && <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 4, background: th.success + "20", color: th.success }}>{t.tools.newBadge}</span>}
                </div>
              ))}
            </div>
          )}
          {searchResults.articles.length === 0 && searchResults.tools.length === 0 && (
            <div style={{ textAlign: "center", padding: 40, color: th.textDim }}>{t.search.noResults}</div>
          )}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: 40, color: th.textDim, fontSize: 13 }}>
          {t.home.searchPlaceholder}
        </div>
      )}
    </div>
  );

  // ═══ ARTICLE DETAIL ═══════════════════════════════════
  const ArticleDetail = () => {
    const a = selectedArticle;
    const al = a[lang] || a.tr;
    const cat = CATEGORIES.find(c => c.id === a.cat);
    const [readProgress, setReadProgress] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
      const handler = () => {
        if (!contentRef.current) return;
        const el = contentRef.current;
        const scrollTop = el.scrollTop;
        const scrollHeight = el.scrollHeight - el.clientHeight;
        setReadProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
      };
      const el = contentRef.current;
      if (el) el.addEventListener("scroll", handler);
      return () => { if (el) el.removeEventListener("scroll", handler); };
    }, []);

    if (isLoading) return (
      <div style={{ padding: "24px 20px" }}>
        <SkeletonBlock w={120} h={14} style={{ marginBottom: 20 }} />
        <SkeletonBlock w={80} h={24} r={12} style={{ marginBottom: 16 }} />
        <SkeletonBlock h={32} style={{ marginBottom: 10 }} />
        <SkeletonBlock w="70%" h={32} style={{ marginBottom: 20 }} />
        <SkeletonBlock w="90%" h={16} style={{ marginBottom: 8 }} />
        <SkeletonBlock w="60%" h={16} style={{ marginBottom: 32 }} />
        <SkeletonBlock h={200} r={16} />
      </div>
    );

    return (
      <div ref={contentRef} style={{ height: "100vh", overflowY: "auto", paddingBottom: 80 }}>
        {/* Reading progress bar */}
        <div style={{ position: "sticky", top: 0, height: 3, zIndex: 50, background: th.border }}>
          <div style={{ height: "100%", width: `${readProgress}%`, background: `linear-gradient(90deg, ${th.accent}, ${th.gold})`, transition: "width 0.1s" }} />
        </div>

        {/* Back button */}
        <div style={{ padding: "12px 20px", display: "flex", alignItems: "center", gap: 8, position: "sticky", top: 3, zIndex: 40, background: th.bgNav, backdropFilter: "blur(20px)" }}>
          <button onClick={goBack} style={{ background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: th.gold, fontSize: 14, fontWeight: 600 }}>
            <span style={{ fontSize: 18 }}>{isRTL ? "→" : "←"}</span> {t.article.back}
          </button>
        </div>

        {/* Hero area */}
        <div style={{ padding: "8px 20px 24px" }}>
          {cat && <div style={{ display: "inline-block", padding: "4px 12px", borderRadius: 8, background: cat.color + "18", color: cat.color, fontSize: 11, fontWeight: 700, marginBottom: 14 }}>{cat.icon} {cat[lang]}</div>}

          <h1 style={{ fontFamily: isRTL ? FONT.ar : FONT.display, fontSize: "clamp(24px, 7vw, 32px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>{al.title}</h1>
          <p style={{ fontSize: 15, color: th.textMuted, lineHeight: 1.6, marginBottom: 16 }}>{al.desc}</p>

          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 12, color: th.textDim }}>
            <span>{t.article.by}: Turan Erbaş</span>
            <span>·</span>
            <span>{a.readMin} {t.article.readMin}</span>
          </div>
        </div>

        {/* Article placeholder content */}
        <div style={{ padding: "0 20px" }}>
          <div style={{ height: 200, borderRadius: 16, background: `linear-gradient(135deg, ${cat?.color || th.gold}12, ${cat?.color || th.gold}05)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, border: `1px solid ${th.border}` }}>
            <span style={{ fontSize: 64, opacity: 0.3 }}>{a.img}</span>
          </div>

          {[...Array(4)].map((_, i) => (
            <div key={i} style={{ marginBottom: 24 }}>
              <h2 style={{ fontFamily: isRTL ? FONT.ar : FONT.display, fontSize: 18, fontWeight: 700, marginBottom: 12, color: th.accent }}>
                {lang === "ar" ? `القسم ${i + 1}` : lang === "en" ? `Section ${i + 1}` : `Bölüm ${i + 1}`}
              </h2>
              <p style={{ fontSize: 14, color: th.textMuted, lineHeight: 1.8 }}>
                {lang === "tr" ? "Bu bölüm, gümüş hakkında detaylı bilgi içermektedir. İnteraktif widget'lar ve görseller ile zenginleştirilmiş içerik, silveratlas.org üzerinde tam olarak görüntülenebilir." :
                 lang === "en" ? "This section contains detailed information about silver. Content enriched with interactive widgets and visuals can be fully viewed at silveratlas.org." :
                 "يحتوي هذا القسم على معلومات تفصيلية عن الفضة. يمكن عرض المحتوى المعزز بالأدوات التفاعلية والمرئيات بالكامل على silveratlas.org."}
              </p>
            </div>
          ))}

          {/* Sponsor CTA */}
          <div style={{ padding: 20, borderRadius: 16, background: `linear-gradient(135deg, ${th.gold}08, ${th.gold}04)`, border: `1px solid ${th.gold}18`, textAlign: "center", marginBottom: 24 }}>
            <div style={{ fontSize: 10, color: th.gold, fontWeight: 700, letterSpacing: "0.05em", marginBottom: 6 }}>{t.sponsor.badge} · İstanbul Gümüş</div>
            <p style={{ fontSize: 12, color: th.textMuted, lineHeight: 1.5, marginBottom: 10 }}>{t.sponsor.text}</p>
            <a href="https://istanbulgumus.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-block", padding: "10px 20px", borderRadius: 10,
              background: `linear-gradient(135deg, ${th.accent}, ${th.gold})`,
              color: "#0b0b10", fontSize: 12, fontWeight: 700, textDecoration: "none",
            }}>{t.sponsor.cta}</a>
          </div>
        </div>
      </div>
    );
  };

  // ═══ TOOL DETAIL ══════════════════════════════════════
  const ToolDetail = () => {
    if (isLoading) return (
      <div style={{ padding: "24px 20px", textAlign: "center" }}>
        <SkeletonBlock w={40} h={40} r={12} style={{ margin: "0 auto 16px" }} />
        <SkeletonBlock w={200} h={24} style={{ margin: "0 auto 10px" }} />
        <SkeletonBlock h={300} r={16} style={{ marginTop: 20 }} />
      </div>
    );

    return (
      <div style={{ minHeight: "100vh", paddingBottom: 80 }}>
        <div style={{ padding: "12px 20px", display: "flex", alignItems: "center", gap: 8, position: "sticky", top: 0, zIndex: 40, background: th.bgNav, backdropFilter: "blur(20px)" }}>
          <button onClick={goBack} style={{ background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: th.gold, fontSize: 14, fontWeight: 600 }}>
            <span style={{ fontSize: 18 }}>{isRTL ? "→" : "←"}</span> {t.article.back}
          </button>
        </div>
        <div style={{ padding: "16px 20px", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>{selectedTool.icon}</div>
          <h1 style={{ fontFamily: isRTL ? FONT.ar : FONT.display, fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{selectedTool[lang] || selectedTool.tr}</h1>
          {selectedTool.phase === 7 && <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 6, background: th.success + "20", color: th.success }}>{t.tools.newBadge}</span>}
          <div style={{ height: 320, borderRadius: 16, border: `1px solid ${th.border}`, background: th.bgCard, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12, marginTop: 24 }}>
            <span style={{ fontSize: 48, opacity: 0.3 }}>{selectedTool.icon}</span>
            <span style={{ fontSize: 13, color: th.textDim }}>silveratlas.org/araclar/{selectedTool.slug}</span>
          </div>
        </div>
      </div>
    );
  };

  // ═══ TAB CONTENT ══════════════════════════════════════

  const HomeTab = () => (
    <div>
      <div style={{ padding: "36px 20px 28px", background: th.gradientHero, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -40, right: isRTL ? "auto" : -40, left: isRTL ? -40 : "auto", width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle, ${th.gold}08, transparent)` }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <AgLogo size={36} />
            <div>
              <div style={{ fontFamily: FONT.display, fontWeight: 700, fontSize: 16 }}>SilverAtlas</div>
              <div style={{ fontSize: 10, color: th.textDim, letterSpacing: "0.05em" }}>silveratlas.org · v7.0</div>
            </div>
          </div>
          <h1 style={{ fontFamily: isRTL ? FONT.ar : FONT.display, fontSize: "clamp(24px, 7vw, 32px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 10 }}>{t.home.hero}</h1>
          <p style={{ fontSize: 14, color: th.textMuted, lineHeight: 1.6, maxWidth: 340 }}>{t.home.heroSub}</p>
        </div>
        <div style={{ display: "flex", marginTop: 24, borderRadius: 14, background: th.bgGlass, backdropFilter: "blur(16px)", border: `1px solid ${th.border}`, overflow: "hidden" }}>
          {[{ v: "50", l: t.home.stats.articles, c: th.gold }, { v: "32", l: t.home.stats.tools, c: th.accent }, { v: "297", l: t.home.stats.mapPoints, c: th.success }, { v: "3", l: t.home.stats.languages, c: "#8b5cf6" }].map((s, i) => (
            <div key={i} style={{ padding: "10px 0", textAlign: "center", flex: 1 }}>
              <div style={{ fontSize: 22, fontWeight: 700, fontFamily: FONT.mono, color: s.c, lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontSize: 10, color: th.textMuted, marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ padding: "16px 20px 0" }}>
        <div onClick={() => setSearchOpen(true)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", borderRadius: 12, background: th.bgCard, border: `1px solid ${th.border}`, cursor: "pointer" }}>
          <span style={{ fontSize: 16, opacity: 0.4 }}>🔍</span>
          <span style={{ fontSize: 14, color: th.textDim }}>{t.home.searchPlaceholder}</span>
        </div>
      </div>

      {/* Quick Tools */}
      <div style={{ padding: "20px 20px 0" }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, fontFamily: isRTL ? FONT.ar : FONT.display, marginBottom: 12 }}>{t.home.quickTools}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {ALL_TOOLS.slice(0, 6).map((tool, i) => (
            <div key={i} onClick={() => openTool(tool)} style={{ padding: "14px 8px", borderRadius: 12, textAlign: "center", background: th.bgCard, border: `1px solid ${th.border}`, cursor: "pointer" }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>{tool.icon}</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: th.textMuted, lineHeight: 1.3 }}>{tool[lang]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Articles */}
      <div style={{ padding: "24px 0 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "0 20px", marginBottom: 12, alignItems: "center" }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, fontFamily: isRTL ? FONT.ar : FONT.display }}>{t.home.featured}</h2>
          <span onClick={() => setTab("explore")} style={{ fontSize: 12, color: th.gold, fontWeight: 600, cursor: "pointer" }}>{t.home.viewAll}</span>
        </div>
        <div style={{ display: "flex", gap: 12, overflowX: "auto", padding: "0 20px 16px", scrollSnapType: "x mandatory", scrollbarWidth: "none" }}>
          {ALL_ARTICLES.slice(0, 5).map((a, i) => {
            const al = a[lang] || a.tr;
            const cat = CATEGORIES.find(c => c.id === a.cat);
            return (
              <div key={i} onClick={() => openArticle(a)} style={{ scrollSnapAlign: "start", minWidth: 260, maxWidth: 280, borderRadius: 16, overflow: "hidden", background: th.gradientCard, border: `1px solid ${th.border}`, flexShrink: 0, cursor: "pointer" }}>
                <div style={{ height: 120, background: `linear-gradient(135deg, ${cat?.color || th.gold}15, ${cat?.color || th.gold}08)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <span style={{ fontSize: 40, opacity: 0.9 }}>{a.img}</span>
                  {cat && <div style={{ position: "absolute", top: 10, left: isRTL ? "auto" : 10, right: isRTL ? 10 : "auto", padding: "3px 10px", borderRadius: 8, background: cat.color + "22", color: cat.color, fontSize: 10, fontWeight: 700 }}>{cat[lang]}</div>}
                </div>
                <div style={{ padding: "14px 16px 16px" }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3, marginBottom: 6, fontFamily: isRTL ? FONT.ar : FONT.display }}>{al.title}</h3>
                  <p style={{ fontSize: 12, color: th.textMuted, lineHeight: 1.5, marginBottom: 10, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{al.desc}</p>
                  <div style={{ fontSize: 11, color: th.textDim }}>{a.readMin} {t.reading}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sponsor */}
      <div style={{ padding: "8px 20px 24px" }}>
        <div style={{ padding: 20, borderRadius: 16, background: `linear-gradient(135deg, ${th.gold}08, ${th.gold}04)`, border: `1px solid ${th.gold}18`, display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, flexShrink: 0, background: `linear-gradient(135deg, ${th.accent}20, ${th.gold}20)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>💫</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: th.gold, fontWeight: 700, marginBottom: 4, letterSpacing: "0.04em" }}>{t.sponsor.badge} · İstanbul Gümüş</div>
            <div style={{ fontSize: 12, color: th.textMuted, lineHeight: 1.5 }}>{t.sponsor.text}</div>
          </div>
        </div>
      </div>
    </div>
  );

  const ExploreTab = () => (
    <div style={{ padding: "24px 20px" }}>
      <h1 style={{ fontFamily: isRTL ? FONT.ar : FONT.display, fontSize: 24, fontWeight: 700, marginBottom: 20 }}>{t.explore.title}</h1>
      <div style={{ display: "flex", gap: 6, overflowX: "auto", marginBottom: 24, scrollbarWidth: "none" }}>
        <button onClick={() => setActiveCat(null)} style={{ padding: "8px 16px", borderRadius: 20, border: "none", background: !activeCat ? th.gold + "20" : "transparent", color: !activeCat ? th.gold : th.textMuted, fontSize: 13, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>✦ {t.explore.allCategories}</button>
        {CATEGORIES.map(cat => (
          <button key={cat.id} onClick={() => setActiveCat(cat.id)} style={{ padding: "8px 16px", borderRadius: 20, border: "none", background: activeCat === cat.id ? cat.color + "20" : "transparent", color: activeCat === cat.id ? cat.color : th.textMuted, fontSize: 13, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>{cat.icon} {cat[lang]}</button>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {ALL_ARTICLES.filter(a => !activeCat || a.cat === activeCat).map(a => {
          const al = a[lang] || a.tr;
          const cat = CATEGORIES.find(c => c.id === a.cat);
          return (
            <div key={a.id} onClick={() => openArticle(a)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", borderRadius: 14, background: th.bgCard, border: `1px solid ${th.border}`, cursor: "pointer" }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: `linear-gradient(135deg, ${cat?.color || th.gold}15, ${cat?.color || th.gold}08)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{a.img}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4, lineHeight: 1.3 }}>{al.title}</h3>
                <div style={{ fontSize: 11, color: th.textDim }}>{cat?.[lang]} · {a.readMin} {t.reading}</div>
              </div>
              <span style={{ color: th.textDim, fontSize: 16 }}>›</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  const ToolsTab = () => (
    <div style={{ padding: "24px 20px" }}>
      <h1 style={{ fontFamily: isRTL ? FONT.ar : FONT.display, fontSize: 24, fontWeight: 700, marginBottom: 6 }}>{t.tools.title}</h1>
      <p style={{ fontSize: 13, color: th.textMuted, marginBottom: 24 }}>{t.tools.subtitle}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
        {ALL_TOOLS.map((tool, i) => (
          <div key={i} onClick={() => openTool(tool)} style={{ padding: "16px 10px", borderRadius: 14, textAlign: "center", background: th.bgCard, border: `1px solid ${th.border}`, cursor: "pointer", position: "relative" }}>
            {tool.phase === 7 && <div style={{ position: "absolute", top: 6, right: 6, fontSize: 7, fontWeight: 800, padding: "2px 5px", borderRadius: 4, background: th.success + "20", color: th.success }}>{t.tools.newBadge}</div>}
            <div style={{ fontSize: 28, marginBottom: 8 }}>{tool.icon}</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: th.text, lineHeight: 1.3 }}>{tool[lang] || tool.tr}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const AtlasTab = () => {
    const [atlasTab, setAtlasTab] = useState("turkey");
    return (
      <div style={{ padding: "24px 20px" }}>
        <h1 style={{ fontFamily: isRTL ? FONT.ar : FONT.display, fontSize: 24, fontWeight: 700, marginBottom: 16 }}>{t.atlas.title}</h1>
        <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
          {["turkey", "world"].map(tb => (
            <button key={tb} onClick={() => setAtlasTab(tb)} style={{ flex: 1, padding: "10px", borderRadius: 10, border: "none", background: atlasTab === tb ? th.gold + "15" : th.bgCard, color: atlasTab === tb ? th.gold : th.textMuted, fontWeight: 600, fontSize: 13, cursor: "pointer", outline: atlasTab === tb ? `1.5px solid ${th.gold}44` : `1px solid ${th.border}` }}>{tb === "turkey" ? `🇹🇷 ${t.atlas.turkeyTab}` : `🌍 ${t.atlas.worldTab}`}</button>
          ))}
        </div>
        <div style={{ height: 300, borderRadius: 16, border: `1px solid ${th.border}`, background: th.bgCard, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
          <span style={{ fontSize: 64, opacity: 0.3 }}>{atlasTab === "turkey" ? "🗺️" : "🌍"}</span>
          <span style={{ fontSize: 13, color: th.textDim }}>{atlasTab === "turkey" ? "81 il · Türkiye Gümüş Atlası" : "297 nokta · Dünya Gümüş Haritası"}</span>
        </div>
      </div>
    );
  };

  const MoreTab = () => (
    <div style={{ padding: "24px 20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
        <AgLogo size={48} />
        <div>
          <div style={{ fontFamily: FONT.display, fontWeight: 700, fontSize: 20 }}>SilverAtlas</div>
          <div style={{ fontSize: 12, color: th.textDim }}>v7.0 — 140+ dosya · 45.000+ satır</div>
        </div>
      </div>
      {[
        { icon: dark ? "🌙" : "☀️", label: t.more.theme, action: () => setDark(!dark), value: dark ? "Dark" : "Light" },
        { icon: "🌐", label: t.more.language, value: lang.toUpperCase() },
        { icon: "ℹ️", label: t.more.about },
        { icon: "💫", label: t.more.sponsor + " — İstanbul Gümüş" },
        { icon: "📱", label: t.more.version, value: "7.0" },
      ].map((item, i) => (
        <div key={i} onClick={item.action} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", borderBottom: `1px solid ${th.border}`, cursor: item.action ? "pointer" : "default" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 20, width: 28, textAlign: "center" }}>{item.icon}</span>
            <span style={{ fontSize: 14, fontWeight: 500 }}>{item.label}</span>
          </div>
          {item.value && <span style={{ fontSize: 13, color: th.textMuted }}>{item.value}</span>}
        </div>
      ))}
      <div style={{ marginTop: 20 }}>
        <div style={{ fontSize: 12, color: th.textDim, marginBottom: 10 }}>{t.more.language}</div>
        <div style={{ display: "flex", gap: 8 }}>
          {[{ id: "tr", label: "Türkçe" }, { id: "en", label: "English" }, { id: "ar", label: "العربية" }].map(l => (
            <button key={l.id} onClick={() => setLang(l.id)} style={{ flex: 1, padding: "12px", borderRadius: 10, border: `1.5px solid ${lang === l.id ? th.gold : th.border}`, background: lang === l.id ? th.gold + "12" : "transparent", color: lang === l.id ? th.gold : th.textMuted, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>{l.label}</button>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 32, textAlign: "center", fontSize: 11, color: th.textDim }}>
        <p>CC BY-NC-SA 4.0 · Yazar: Turan Erbaş</p>
        <p style={{ marginTop: 4 }}>Sponsored by İstanbul Gümüş · Konya</p>
      </div>
    </div>
  );

  // ═══ RENDER ═══════════════════════════════════════════
  if (selectedArticle) return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{ fontFamily: f, background: th.bg, color: th.text, minHeight: "100vh", maxWidth: 480, margin: "0 auto", position: "relative" }}>
      <style>{`*{box-sizing:border-box;margin:0;padding:0} ::-webkit-scrollbar{display:none} @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}} @keyframes silverShimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}`}</style>
      <ArticleDetail />
    </div>
  );

  if (selectedTool) return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{ fontFamily: f, background: th.bg, color: th.text, minHeight: "100vh", maxWidth: 480, margin: "0 auto", position: "relative" }}>
      <style>{`*{box-sizing:border-box;margin:0;padding:0} ::-webkit-scrollbar{display:none} @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}} @keyframes silverShimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}`}</style>
      <ToolDetail />
    </div>
  );

  const pages = { home: HomeTab, explore: ExploreTab, tools: ToolsTab, atlas: AtlasTab, more: MoreTab };
  const CurrentPage = pages[tab];

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{ fontFamily: f, background: th.bg, color: th.text, minHeight: "100vh", maxWidth: 480, margin: "0 auto", position: "relative", paddingBottom: 72 }}>
      <style>{`*{box-sizing:border-box;margin:0;padding:0} ::-webkit-scrollbar{display:none} @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}} @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.6}} @keyframes silverShimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}`}</style>

      {searchOpen && <SearchOverlay />}

      <div key={tab} style={{ animation: "fadeIn 0.3s ease" }}>
        <CurrentPage />
      </div>

      {/* Bottom Tab Bar */}
      <nav style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 480, background: th.bgNav, backdropFilter: "blur(20px) saturate(180%)", borderTop: `1px solid ${th.border}`, boxShadow: th.shadow, display: "flex", justifyContent: "space-around", alignItems: "center", padding: "6px 0 env(safe-area-inset-bottom, 8px)", zIndex: 100 }}>
        {["home", "explore", "tools", "atlas", "more"].map(id => {
          const isActive = tab === id;
          const color = isActive ? th.gold : th.textDim;
          return (
            <button key={id} onClick={() => setTab(id)} style={{ background: "transparent", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "6px 12px", borderRadius: 12 }}>
              {TabIcons[id](color)}
              <span style={{ fontSize: 9, fontWeight: isActive ? 700 : 500, color, letterSpacing: "0.02em", marginTop: 1 }}>{t.tabs[id]}</span>
              {isActive && <div style={{ width: 4, height: 4, borderRadius: "50%", background: th.gold, marginTop: 1 }} />}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
