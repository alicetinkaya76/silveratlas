import { useState, useEffect, useRef } from "react";

const translations = {
  tr: {
    siteTitle: "SilverAtlas",
    siteSubtitle: "Gümüş Bilgi Platformu",
    heroHeadline: "Gümüşün Tüm Hikâyesi",
    heroSubline: "Bilimden tarihe, madencilikten modaya — dünyanın en kapsamlı gümüş bilgi platformu",
    heroExplore: "Keşfet",
    heroSearch: "Gümüş hakkında bir şey arayın…",
    categories: {
      science: { title: "Bilim", desc: "Gümüşün kimyası, fiziksel özellikleri ve antimikrobiyal gücü" },
      history: { title: "Tarih", desc: "Antik çağlardan Osmanlı'ya, simyadan modern kimyaya" },
      mining: { title: "Maden", desc: "Küresel madencilik, rafinasyon süreçleri ve rezerv haritası" },
      fashion: { title: "Moda", desc: "Takı trendleri, tasarım teknikleri ve styling rehberi" },
      manufacturing: { title: "Üretim", desc: "925 ayar, geleneksel teknikler ve modern üretim" },
      market: { title: "Piyasa", desc: "Canlı fiyatlar, arz-talep dinamikleri ve küresel trendler" },
      culture: { title: "Kültür", desc: "İslam'da gümüş, folklordan sembolizme kültürel miras" },
    },
    featured: "Öne Çıkan İçerik",
    featuredArticles: [
      { title: "925 Ayar Gümüş Nedir?", cat: "Üretim", read: "8 dk okuma" },
      { title: "Gümüş Neden Kararır?", cat: "Bakım Rehberi", read: "5 dk okuma" },
      { title: "İslam Medeniyetinde Gümüş", cat: "Tarih", read: "12 dk okuma" },
    ],
    tools: "İnteraktif Araçlar",
    toolsList: [
      { title: "Ayar Hesaplayıcı", desc: "Saf gümüş oranını hesaplayın" },
      { title: "Fiyat Dönüştürücü", desc: "Gram, ons ve farklı para birimleri" },
      { title: "Bakım Rehberi", desc: "Takınız neden karardı?" },
    ],
    exploreMap: "Haritayı Keşfet",
    mapDesc: "Dünya gümüş madenleri, tarihî darphaneler ve zanaat merkezlerini interaktif haritada keşfedin",
    openMap: "Haritayı Aç",
    sponsorNote: "Bu platform İstanbul Gümüş tarafından desteklenmektedir",
    sponsorTag: "Sponsored by",
    footerDesc: "Gümüş hakkında dünyanın en kapsamlı, ücretsiz, açık erişimli bilgi platformu.",
    footerLinks: { about: "Hakkında", sources: "Veri Kaynakları", contact: "İletişim", privacy: "Gizlilik" },
    footerLicense: "İçerik CC BY-NC-SA 4.0 lisansı ile sunulmaktadır",
    darkMode: "Karanlık Mod",
    stats: { articles: "Makale", languages: "Dil", maps: "Harita Katmanı", mines: "Maden Verisi" },
  },
  en: {
    siteTitle: "SilverAtlas",
    siteSubtitle: "Silver Knowledge Platform",
    heroHeadline: "The Complete Story of Silver",
    heroSubline: "From science to history, mining to fashion — the world's most comprehensive silver knowledge platform",
    heroExplore: "Explore",
    heroSearch: "Search anything about silver…",
    categories: {
      science: { title: "Science", desc: "Chemistry, physical properties, and antimicrobial power of silver" },
      history: { title: "History", desc: "From ancient civilizations to Ottoman era, alchemy to modern chemistry" },
      mining: { title: "Mining", desc: "Global mining, refining processes, and reserve maps" },
      fashion: { title: "Fashion", desc: "Jewelry trends, design techniques, and styling guides" },
      manufacturing: { title: "Manufacturing", desc: "925 sterling, traditional crafts, and modern production" },
      market: { title: "Market", desc: "Live prices, supply-demand dynamics, and global trends" },
      culture: { title: "Culture", desc: "Silver in Islam, folklore to symbolism — cultural heritage" },
    },
    featured: "Featured Content",
    featuredArticles: [
      { title: "What is 925 Sterling Silver?", cat: "Manufacturing", read: "8 min read" },
      { title: "Why Does Silver Tarnish?", cat: "Care Guide", read: "5 min read" },
      { title: "Silver in Islamic Civilization", cat: "History", read: "12 min read" },
    ],
    tools: "Interactive Tools",
    toolsList: [
      { title: "Purity Calculator", desc: "Calculate pure silver ratio" },
      { title: "Price Converter", desc: "Grams, ounces, and currencies" },
      { title: "Care Guide", desc: "Why did your jewelry tarnish?" },
    ],
    exploreMap: "Explore the Map",
    mapDesc: "Discover world silver mines, historical mints, and craft centers on an interactive map",
    openMap: "Open Map",
    sponsorNote: "This platform is supported by İstanbul Gümüş",
    sponsorTag: "Sponsored by",
    footerDesc: "The world's most comprehensive, free, open-access silver knowledge platform.",
    footerLinks: { about: "About", sources: "Data Sources", contact: "Contact", privacy: "Privacy" },
    footerLicense: "Content licensed under CC BY-NC-SA 4.0",
    darkMode: "Dark Mode",
    stats: { articles: "Articles", languages: "Languages", maps: "Map Layers", mines: "Mine Data" },
  },
  ar: {
    siteTitle: "أطلس الفضة",
    siteSubtitle: "منصة معرفة الفضة",
    heroHeadline: "القصة الكاملة للفضة",
    heroSubline: "من العلم إلى التاريخ، ومن التعدين إلى الموضة — أشمل منصة معرفية عن الفضة في العالم",
    heroExplore: "اكتشف",
    heroSearch: "ابحث عن أي شيء يتعلق بالفضة…",
    categories: {
      science: { title: "العلم", desc: "كيمياء الفضة وخصائصها الفيزيائية وقوتها المضادة للميكروبات" },
      history: { title: "التاريخ", desc: "من الحضارات القديمة إلى العصر العثماني" },
      mining: { title: "التعدين", desc: "التعدين العالمي وعمليات التكرير وخرائط الاحتياطيات" },
      fashion: { title: "الموضة", desc: "اتجاهات المجوهرات وتقنيات التصميم وأدلة التنسيق" },
      manufacturing: { title: "الصناعة", desc: "عيار 925 والحرف التقليدية والإنتاج الحديث" },
      market: { title: "السوق", desc: "الأسعار الحية وديناميكيات العرض والطلب" },
      culture: { title: "الثقافة", desc: "الفضة في الإسلام والفولكلور والتراث الثقافي" },
    },
    featured: "المحتوى المميز",
    featuredArticles: [
      { title: "ما هي الفضة الاسترلينية 925؟", cat: "الصناعة", read: "8 دقائق قراءة" },
      { title: "لماذا تتأكسد الفضة؟", cat: "دليل العناية", read: "5 دقائق قراءة" },
      { title: "الفضة في الحضارة الإسلامية", cat: "التاريخ", read: "12 دقائق قراءة" },
    ],
    tools: "أدوات تفاعلية",
    toolsList: [
      { title: "حاسبة العيار", desc: "احسب نسبة الفضة النقية" },
      { title: "محول الأسعار", desc: "الغرامات والأونصات والعملات" },
      { title: "دليل العناية", desc: "لماذا تأكسدت مجوهراتك؟" },
    ],
    exploreMap: "استكشف الخريطة",
    mapDesc: "اكتشف مناجم الفضة العالمية ودور الضرب التاريخية ومراكز الحرف على خريطة تفاعلية",
    openMap: "افتح الخريطة",
    sponsorNote: "هذه المنصة مدعومة من إسطنبول غوموش",
    sponsorTag: "برعاية",
    footerDesc: "أشمل منصة معرفية مجانية ومفتوحة عن الفضة في العالم",
    footerLinks: { about: "حول", sources: "مصادر البيانات", contact: "اتصل بنا", privacy: "الخصوصية" },
    footerLicense: "المحتوى مرخص بموجب CC BY-NC-SA 4.0",
    darkMode: "الوضع الداكن",
    stats: { articles: "مقال", languages: "لغات", maps: "طبقة خريطة", mines: "بيانات المناجم" },
  },
};

const categoryIcons = {
  science: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 6v12l-6 10a2 2 0 001.7 3h18.6a2 2 0 001.7-3L25 18V6" />
      <path d="M14 6h12" />
      <circle cx="18" cy="26" r="1.5" fill="currentColor" />
      <circle cx="23" cy="24" r="1" fill="currentColor" />
      <circle cx="20" cy="28" r="1" fill="currentColor" />
    </svg>
  ),
  history: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="20" r="13" />
      <path d="M20 10v10l6 4" />
      <path d="M20 4v2M20 34v2M4 20h2M34 20h2" />
    </svg>
  ),
  mining: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 34l12-20 12 20H8z" />
      <path d="M20 14l-4-8M20 14l4-8" />
      <path d="M14 26h12" />
      <path d="M16 30h8" />
    </svg>
  ),
  fashion: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 8a6 6 0 11-6 6" />
      <path d="M14 14c0 8 6 12 6 18" />
      <path d="M26 14c0 8-6 12-6 18" />
      <circle cx="20" cy="8" r="2" fill="currentColor" />
    </svg>
  ),
  manufacturing: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="14" width="24" height="18" rx="2" />
      <path d="M12 14V10a8 8 0 0116 0v4" />
      <circle cx="20" cy="23" r="3" />
      <path d="M20 26v3" />
    </svg>
  ),
  market: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 32l8-10 6 4 8-14 6 8" />
      <path d="M6 8v24h28" />
    </svg>
  ),
  culture: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="16" r="10" />
      <path d="M20 6a10 10 0 010 20" strokeDasharray="2 3" />
      <path d="M14 34h12" />
      <path d="M17 28h6v6h-6z" />
    </svg>
  ),
};

const categoryKeys = ["science", "history", "mining", "fashion", "manufacturing", "market", "culture"];
const categoryColors = {
  science: "#6EC6FF",
  history: "#D4AF37",
  mining: "#8B9DAF",
  fashion: "#E8A0BF",
  manufacturing: "#A0C4FF",
  market: "#7BE495",
  culture: "#C9A0DC",
};

function ShimmerText({ children, className = "" }) {
  return (
    <span className={className} style={{
      background: "linear-gradient(90deg, var(--text-primary) 0%, var(--silver-accent) 40%, var(--text-primary) 80%)",
      backgroundSize: "200% 100%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animation: "shimmer 4s ease-in-out infinite",
    }}>
      {children}
    </span>
  );
}

function ParticleField({ dark }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.15 - 0.1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.offsetWidth;
        if (p.x > canvas.offsetWidth) p.x = 0;
        if (p.y < 0) p.y = canvas.offsetHeight;
        if (p.y > canvas.offsetHeight) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = dark
          ? `rgba(192,192,192,${p.opacity})`
          : `rgba(112,128,144,${p.opacity * 0.5})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [dark]);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        pointerEvents: "none", zIndex: 0,
      }}
    />
  );
}

export default function SilverAtlas() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [hoveredCat, setHoveredCat] = useState(null);
  const t = translations[lang];
  const isRTL = lang === "ar";

  const bgPrimary = dark ? "#0f0f14" : "#FAFAF5";
  const bgCard = dark ? "#1a1a24" : "#ffffff";
  const bgCardHover = dark ? "#22222e" : "#f5f5f0";
  const textPrimary = dark ? "#e8e8ec" : "#2C2C2C";
  const textSecondary = dark ? "#9a9aaa" : "#6B7280";
  const silverAccent = dark ? "#C0C0C0" : "#708090";
  const borderColor = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const goldAccent = "#D4AF37";

  const fontDisplay = "'Playfair Display', Georgia, 'Times New Roman', serif";
  const fontBody = "'Source Sans 3', 'Segoe UI', sans-serif";
  const fontArabic = "'Noto Naskh Arabic', 'Amiri', serif";

  const bodyFont = lang === "ar" ? fontArabic : fontBody;

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        "--text-primary": textPrimary,
        "--silver-accent": silverAccent,
        fontFamily: bodyFont,
        background: bgPrimary,
        color: textPrimary,
        minHeight: "100vh",
        transition: "background 0.5s, color 0.5s",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');
        @keyframes shimmer { 0%,100%{background-position:200% 0} 50%{background-position:-200% 0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes pulse { 0%,100%{opacity:0.6} 50%{opacity:1} }
        * { margin:0; padding:0; box-sizing:border-box; }
        ::-webkit-scrollbar { width:6px }
        ::-webkit-scrollbar-track { background:transparent }
        ::-webkit-scrollbar-thumb { background:${silverAccent}33; border-radius:3px }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: dark ? "rgba(15,15,20,0.85)" : "rgba(250,250,245,0.85)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid ${borderColor}`,
        padding: "0 24px", height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: "50%",
            background: `linear-gradient(135deg, ${silverAccent}, ${goldAccent})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, fontWeight: 700, color: "#0f0f14",
            fontFamily: fontDisplay,
          }}>Ag</div>
          <span style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 18, letterSpacing: "0.02em" }}>
            {t.siteTitle}
          </span>
          <span style={{ fontSize: 11, color: textSecondary, marginTop: 2 }}>
            {t.siteSubtitle}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Language Selector */}
          <div style={{
            display: "flex", gap: 2,
            background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
            borderRadius: 8, padding: 3,
          }}>
            {["tr", "en", "ar"].map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  border: "none", cursor: "pointer",
                  padding: "4px 10px", borderRadius: 6,
                  fontSize: 12, fontWeight: lang === l ? 600 : 400,
                  fontFamily: l === "ar" ? fontArabic : fontBody,
                  background: lang === l
                    ? (dark ? "rgba(192,192,192,0.15)" : "rgba(0,0,0,0.08)")
                    : "transparent",
                  color: lang === l ? textPrimary : textSecondary,
                  transition: "all 0.2s",
                }}
              >
                {l === "tr" ? "TR" : l === "en" ? "EN" : "عر"}
              </button>
            ))}
          </div>

          {/* Dark Mode */}
          <button
            onClick={() => setDark(!dark)}
            style={{
              border: "none", cursor: "pointer", background: "transparent",
              color: textSecondary, fontSize: 18, padding: 4,
              display: "flex", alignItems: "center",
            }}
            title={t.darkMode}
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        position: "relative", overflow: "hidden",
        padding: "80px 24px 72px",
        textAlign: "center",
        background: dark
          ? "linear-gradient(180deg, #0f0f14 0%, #161620 50%, #0f0f14 100%)"
          : "linear-gradient(180deg, #FAFAF5 0%, #f0efe8 50%, #FAFAF5 100%)",
      }}>
        <ParticleField dark={dark} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            display: "inline-block", padding: "4px 16px", borderRadius: 20,
            fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
            color: goldAccent,
            border: `1px solid ${goldAccent}44`,
            marginBottom: 24,
            animation: "fadeIn 0.8s ease",
          }}>
            Ag — 47
          </div>

          <h1 style={{
            fontFamily: fontDisplay, fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 700, lineHeight: 1.1, marginBottom: 20,
            animation: "fadeUp 0.8s ease 0.1s both",
          }}>
            <ShimmerText>{t.heroHeadline}</ShimmerText>
          </h1>

          <p style={{
            fontSize: "clamp(15px, 2vw, 18px)", color: textSecondary,
            lineHeight: 1.7, maxWidth: 560, margin: "0 auto 36px",
            animation: "fadeUp 0.8s ease 0.2s both",
          }}>
            {t.heroSubline}
          </p>

          {/* Search Bar */}
          <div style={{
            maxWidth: 480, margin: "0 auto",
            animation: "fadeUp 0.8s ease 0.3s both",
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
              border: `1px solid ${borderColor}`,
              borderRadius: 12, padding: "10px 16px",
              transition: "border-color 0.3s",
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={textSecondary} strokeWidth="2" strokeLinecap="round">
                <circle cx="10.5" cy="10.5" r="7" /><path d="M21 21l-5-5" />
              </svg>
              <input
                type="text"
                placeholder={t.heroSearch}
                dir={isRTL ? "rtl" : "ltr"}
                style={{
                  flex: 1, border: "none", outline: "none", background: "transparent",
                  color: textPrimary, fontSize: 14, fontFamily: bodyFont,
                }}
              />
            </div>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex", justifyContent: "center", gap: 40, marginTop: 48,
            animation: "fadeUp 0.8s ease 0.4s both",
            flexWrap: "wrap",
          }}>
            {[
              { n: "120+", label: t.stats.articles },
              { n: "3", label: t.stats.languages },
              { n: "6", label: t.stats.maps },
              { n: "500+", label: t.stats.mines },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: fontDisplay, fontSize: 28, fontWeight: 700, color: silverAccent }}>{s.n}</div>
                <div style={{ fontSize: 11, color: textSecondary, marginTop: 2, letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: "64px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 16,
        }}>
          {categoryKeys.map((key, i) => {
            const cat = t.categories[key];
            const color = categoryColors[key];
            const isHovered = hoveredCat === key;
            return (
              <div
                key={key}
                onMouseEnter={() => setHoveredCat(key)}
                onMouseLeave={() => setHoveredCat(null)}
                style={{
                  background: isHovered ? bgCardHover : bgCard,
                  border: `1px solid ${isHovered ? color + "44" : borderColor}`,
                  borderRadius: 16, padding: 28,
                  cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: isHovered
                    ? `0 12px 40px ${color}15, 0 0 0 1px ${color}22`
                    : "0 1px 3px rgba(0,0,0,0.04)",
                  animation: `fadeUp 0.6s ease ${0.1 * i}s both`,
                  position: "relative", overflow: "hidden",
                }}
              >
                {/* Glow */}
                <div style={{
                  position: "absolute", top: -40, [isRTL ? "left" : "right"]: -40,
                  width: 100, height: 100, borderRadius: "50%",
                  background: `radial-gradient(circle, ${color}${isHovered ? "18" : "08"} 0%, transparent 70%)`,
                  transition: "all 0.35s",
                }} />

                <div style={{
                  width: 44, height: 44, marginBottom: 16,
                  color: isHovered ? color : textSecondary,
                  transition: "color 0.3s",
                }}>
                  {categoryIcons[key]}
                </div>

                <h3 style={{
                  fontFamily: fontDisplay, fontSize: 20, fontWeight: 600,
                  marginBottom: 8, color: isHovered ? color : textPrimary,
                  transition: "color 0.3s",
                }}>
                  {cat.title}
                </h3>
                <p style={{ fontSize: 13, color: textSecondary, lineHeight: 1.6 }}>
                  {cat.desc}
                </p>

                {/* Arrow */}
                <div style={{
                  marginTop: 16, display: "flex", alignItems: "center", gap: 6,
                  fontSize: 12, fontWeight: 500, color: color,
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered
                    ? `translate${isRTL ? "X(-4px)" : "X(4px)"}`
                    : "translateX(0)",
                  transition: "all 0.3s",
                }}>
                  {t.heroExplore} {isRTL ? "←" : "→"}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section style={{
        padding: "48px 24px 64px", maxWidth: 1100, margin: "0 auto",
      }}>
        <h2 style={{
          fontFamily: fontDisplay, fontSize: 28, fontWeight: 600,
          marginBottom: 32, textAlign: "center",
        }}>
          {t.featured}
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 16,
        }}>
          {t.featuredArticles.map((article, i) => (
            <div key={i} style={{
              background: bgCard, border: `1px solid ${borderColor}`,
              borderRadius: 14, overflow: "hidden", cursor: "pointer",
              transition: "all 0.3s",
            }}>
              <div style={{
                height: 140,
                background: dark
                  ? `linear-gradient(135deg, #1a1a2e, ${["#1e2a3a", "#2a1e1e", "#1e2a1e"][i]})`
                  : `linear-gradient(135deg, #e8e8e8, ${["#d0dde8", "#e8d0d0", "#d0e8d0"][i]})`,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative",
              }}>
                <div style={{
                  fontFamily: fontDisplay, fontSize: 48, fontWeight: 700,
                  color: dark ? "rgba(192,192,192,0.08)" : "rgba(0,0,0,0.04)",
                }}>Ag</div>
                <div style={{
                  position: "absolute", top: 12, [isRTL ? "right" : "left"]: 12,
                  padding: "3px 10px", borderRadius: 6,
                  fontSize: 10, fontWeight: 600, letterSpacing: "0.04em",
                  background: dark ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.8)",
                  color: textSecondary,
                }}>
                  {article.cat}
                </div>
              </div>
              <div style={{ padding: "18px 20px" }}>
                <h3 style={{
                  fontFamily: fontDisplay, fontSize: 16, fontWeight: 600,
                  lineHeight: 1.4, marginBottom: 8,
                }}>
                  {article.title}
                </h3>
                <span style={{ fontSize: 12, color: textSecondary }}>{article.read}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE TOOLS */}
      <section style={{
        padding: "48px 24px 64px", maxWidth: 1100, margin: "0 auto",
      }}>
        <h2 style={{
          fontFamily: fontDisplay, fontSize: 28, fontWeight: 600,
          marginBottom: 32, textAlign: "center",
        }}>
          {t.tools}
        </h2>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16,
        }}>
          {t.toolsList.map((tool, i) => (
            <div key={i} style={{
              background: dark ? "rgba(192,192,192,0.03)" : "rgba(0,0,0,0.02)",
              border: `1px solid ${borderColor}`,
              borderRadius: 14, padding: "24px 20px",
              display: "flex", alignItems: "flex-start", gap: 14,
              cursor: "pointer", transition: "all 0.3s",
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: `linear-gradient(135deg, ${silverAccent}22, ${goldAccent}22)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18,
              }}>
                {["⚖️", "💱", "✨"][i]}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{tool.title}</div>
                <div style={{ fontSize: 13, color: textSecondary, lineHeight: 1.5 }}>{tool.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAP TEASER */}
      <section style={{
        padding: "48px 24px 80px", maxWidth: 1100, margin: "0 auto",
      }}>
        <div style={{
          background: dark
            ? "linear-gradient(135deg, #141420, #1a1a2e)"
            : "linear-gradient(135deg, #f0efe8, #e8e8e0)",
          border: `1px solid ${borderColor}`,
          borderRadius: 20, padding: "48px 36px",
          textAlign: "center", position: "relative", overflow: "hidden",
        }}>
          {/* Map Pattern */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: dark ? 0.04 : 0.06 }} viewBox="0 0 800 400">
            <circle cx="200" cy="180" r="4" fill={silverAccent} />
            <circle cx="350" cy="150" r="3" fill={silverAccent} />
            <circle cx="500" cy="200" r="5" fill={goldAccent} />
            <circle cx="420" cy="170" r="3" fill={silverAccent} />
            <circle cx="600" cy="160" r="4" fill={silverAccent} />
            <circle cx="150" cy="220" r="3" fill={goldAccent} />
            <circle cx="680" cy="190" r="3" fill={silverAccent} />
            <path d="M200 180L350 150L420 170L500 200" stroke={silverAccent} strokeWidth="0.5" strokeDasharray="4 4" />
            <path d="M500 200L600 160L680 190" stroke={goldAccent} strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{
              fontFamily: fontDisplay, fontSize: 32, fontWeight: 700,
              marginBottom: 16,
            }}>
              {t.exploreMap}
            </h2>
            <p style={{
              fontSize: 15, color: textSecondary, lineHeight: 1.7,
              maxWidth: 500, margin: "0 auto 28px",
            }}>
              {t.mapDesc}
            </p>
            <button style={{
              border: "none", cursor: "pointer",
              background: `linear-gradient(135deg, ${silverAccent}, ${goldAccent})`,
              color: "#0f0f14", fontWeight: 600, fontSize: 14,
              padding: "12px 32px", borderRadius: 10,
              fontFamily: bodyFont, letterSpacing: "0.02em",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { e.target.style.transform = "scale(1.04)"; e.target.style.boxShadow = `0 8px 24px ${goldAccent}33`; }}
            onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.boxShadow = "none"; }}
            >
              {t.openMap} {isRTL ? "←" : "→"}
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: `1px solid ${borderColor}`,
        padding: "48px 24px 32px",
        background: dark ? "#0c0c10" : "#f5f5f0",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Sponsor */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 12, marginBottom: 36, padding: "16px 24px",
            borderRadius: 12,
            background: dark ? "rgba(212,175,55,0.04)" : "rgba(212,175,55,0.06)",
            border: `1px solid ${goldAccent}15`,
          }}>
            <span style={{ fontSize: 12, color: textSecondary }}>{t.sponsorTag}</span>
            <span style={{
              fontFamily: fontDisplay, fontWeight: 600, fontSize: 15,
              color: goldAccent,
            }}>
              İstanbul Gümüş
            </span>
            <a
              href="https://instagram.com/istanbulgumustr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12, color: textSecondary,
                textDecoration: "none",
                padding: "3px 10px", borderRadius: 6,
                border: `1px solid ${borderColor}`,
                transition: "all 0.2s",
              }}
            >
              @istanbulgumustr
            </a>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32, marginBottom: 36,
          }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${silverAccent}, ${goldAccent})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 700, color: "#0f0f14",
                  fontFamily: fontDisplay,
                }}>Ag</div>
                <span style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 16 }}>{t.siteTitle}</span>
              </div>
              <p style={{ fontSize: 13, color: textSecondary, lineHeight: 1.7 }}>
                {t.footerDesc}
              </p>
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {Object.values(t.footerLinks).map((link, i) => (
                  <a key={i} href="#" style={{
                    fontSize: 13, color: textSecondary, textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => e.target.style.color = textPrimary}
                  onMouseLeave={e => e.target.style.color = textSecondary}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {categoryKeys.slice(0, 5).map(key => (
                  <a key={key} href="#" style={{
                    fontSize: 13, color: textSecondary, textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => e.target.style.color = categoryColors[key]}
                  onMouseLeave={e => e.target.style.color = textSecondary}
                  >
                    {t.categories[key].title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            borderTop: `1px solid ${borderColor}`,
            paddingTop: 20,
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: 12,
            fontSize: 11, color: textSecondary,
          }}>
            <span>{t.footerLicense}</span>
            <span style={{ fontSize: 10, opacity: 0.6 }}>{t.sponsorNote}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
