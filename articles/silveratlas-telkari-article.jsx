import { useState } from "react";

const TECHNIQUES = [
  { id: "filigree", emoji: "🕸️",
    name: { tr: "Telkâri (Filigran)", en: "Filigree", ar: "الفيليغري" },
    center: { tr: "Midyat, Mardin", en: "Midyat, Mardin", ar: "ميديات، ماردين" },
    tradition: "~500",
    desc: { tr: "İnce gümüş tellerin (0.2–0.5mm) bükülerek, sarılarak ve lehimlenerek oluşturduğu dantel benzeri açık örgü tekniği. Süryani ve Müslüman ustaların yüzyıllık ortak mirası.", en: "Lace-like openwork technique formed by twisting, curling, and soldering fine silver wires (0.2–0.5mm). Centuries-old shared heritage of Syriac and Muslim masters.", ar: "تقنية عمل مفتوح شبيهة بالدانتيل تُصنع بلف ولحام أسلاك فضية رفيعة (0.2-0.5 مم). إرث مشترك عمره قرون بين الأساتذة السريان والمسلمين." },
    steps: { tr: ["Eritme: 925 ayar gümüş eritilir","Çekme: Tel haddeden geçirilir (0.2mm)","Bükme: Teller spiral ve S formlarına bükülür","Yerleştirme: Çerçeve içine motifler dizilir","Lehimleme: Boraks + gümüş lehim ile birleştirilir","Parlatma: Son rötuş ve oksit temizliği"], en: ["Melting: 925 sterling silver is melted","Drawing: Wire pulled through drawplate (0.2mm)","Twisting: Wires bent into spirals and S-forms","Placing: Motifs arranged within the frame","Soldering: Joined with borax + silver solder","Polishing: Final touch and oxide cleaning"], ar: ["الصهر: صهر الفضة عيار 925","السحب: سحب السلك عبر الثقوب (0.2 مم)","اللف: ثني الأسلاك إلى حلزونات وأشكال S","الترتيب: ترتيب الزخارف داخل الإطار","اللحام: الربط بالبوراكس ولحام الفضة","التلميع: اللمسة الأخيرة وتنظيف الأكسيد"] },
    mohs: 2.5, color: "#C9A0DC",
  },
  { id: "kazaz", emoji: "🧶",
    name: { tr: "Kazaziye", en: "Kazaz Wire Art", ar: "فن الكازاز" },
    center: { tr: "Trabzon", en: "Trabzon", ar: "طرابزون" },
    tradition: "~400",
    desc: { tr: "İpek ipliği andıran incelikte gümüş tellerin (1000 ayar) örülerek bileklik, kolye ve tespih üretildiği Karadeniz'e özgü zanaat. Her düğüm elle atılır.", en: "Black Sea craft where ultra-fine silver wires (1000 purity) are hand-woven into bracelets, necklaces, and prayer beads resembling silk thread. Every knot is tied by hand.", ar: "حرفة البحر الأسود حيث تُنسج أسلاك فضية فائقة النعومة (نقاء 1000) يدوياً لصنع أساور وقلائد ومسابح تشبه خيوط الحرير." },
    steps: { tr: ["Çekme: 999 ayar gümüş 0.08mm'ye çekilir","Sarma: 6-12 tel bir araya sarılır","Örme: İğne ile düğüm düğüm örülür","Şekillendirme: Kalıp üzerine form verilir","Sıkıştırma: Örgü sıkılaştırılır","Montaj: Klips ve aksesuar eklenir"], en: ["Drawing: 999 silver drawn to 0.08mm","Wrapping: 6-12 wires wound together","Weaving: Knitted knot by knot with needle","Shaping: Formed over a mold","Tightening: Weave is compressed","Assembly: Clips and accessories added"], ar: ["السحب: سحب الفضة 999 إلى 0.08 مم","اللف: لف 6-12 سلكاً معاً","الحياكة: حياكة عقدة بعقدة بالإبرة","التشكيل: التشكيل على قالب","الضغط: ضغط النسيج","التجميع: إضافة المشابك والإكسسوارات"] },
    mohs: 2.5, color: "#6EC6FF",
  },
  { id: "niello", emoji: "⚫",
    name: { tr: "Savat (Niello)", en: "Niello (Savat)", ar: "النيللو (صوات)" },
    center: { tr: "Mardin", en: "Mardin", ar: "ماردين" },
    tradition: "~300",
    desc: { tr: "Gümüş yüzeye kazınan motiflerin kükürt+kurşun+gümüş alaşımı siyah macunla doldurulması tekniği. Gümüşün beyazlığı ile savat'ın siyahlığı dramatik bir kontrast oluşturur.", en: "Technique of filling motifs engraved on silver surface with a black paste of sulfur+lead+silver alloy. The whiteness of silver and blackness of niello create a dramatic contrast.", ar: "تقنية ملء الزخارف المنقوشة على سطح الفضة بعجينة سوداء من سبيكة كبريت+رصاص+فضة. يخلق بياض الفضة وسواد النيللو تبايناً درامياً." },
    steps: { tr: ["Kazıma: Motif çelik kalemle oyulur","Hazırlık: Savat macunu hazırlanır (Ag+Pb+S)","Doldurma: Oyuklara macun sürülür","Pişirme: Ateşte eritilir","Kazıma: Fazla savat temizlenir","Parlatma: Yüzey cilalanır"], en: ["Engraving: Motif carved with steel burin","Preparation: Niello paste prepared (Ag+Pb+S)","Filling: Paste applied into grooves","Firing: Melted with heat","Scraping: Excess niello removed","Polishing: Surface burnished"], ar: ["النقش: حفر الزخرفة بقلم فولاذي","التحضير: تحضير معجون النيللو","الملء: تطبيق المعجون في الأخاديد","الحرق: الصهر بالحرارة","الكشط: إزالة النيللو الزائد","التلميع: تلميع السطح"] },
    mohs: 2.5, color: "#E8A0BF",
  },
];

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Üretim", "Geleneksel Teknikler"],
    category: "Üretim", title: "Geleneksel Gümüş Teknikleri",
    subtitle: "Midyat telkârisi, Trabzon kazaziyesi, Mardin savatlısı — Anadolu'nun yaşayan gümüş mirası",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "10 dk okuma" },
    intro: [
      "Anadolu, binlerce yıllık gümüş işçiliği geleneğinin yaşayan coğrafyasıdır. Güneydoğu'nun telkârisi, Karadeniz'in kazaziyesi, Mardin'in savatlı tekniği — her biri farklı bir kültürel mirasın, farklı bir ustalık geleneğinin ürünüdür.",
      "Bu makalede, Türkiye'nin en önemli üç geleneksel gümüş tekniğini, üretim süreçlerini ve kültürel bağlamlarını keşfedeceksiniz.",
    ],
    techniques: "Teknikler", steps: "Üretim Aşamaları", year: "yıllık gelenek", center: "Merkez",
    craftMap: "Zanaat Merkezleri Haritası",
    craftMapDesc: "Türkiye'deki geleneksel gümüş zanaat merkezlerinin konumları:",
    faq: { heading: "Sıkça Sorulan Sorular", items: [
      { q: "Telkâri takı günlük kullanıma uygun mu?", a: "Evet, ancak dikkatli kullanım gerektirir. Telkâri işçiliği ince tellerden oluştuğu için darbe ve çekmeye karşı hassastır. Günlük kullanımda spor ve ağır ev işlerinden önce çıkarmanız önerilir." },
      { q: "Kazaziye neden bu kadar pahalı?", a: "Kazaziye tamamen el emeğidir. Tek bir bileklik 8-12 saat sürebilir. 999 ayar saf gümüş kullanılması ve her düğümün tek tek elle atılması maliyeti artırır." },
      { q: "Savatlı teknikte kurşun kullanılıyor mu?", a: "Geleneksel formülde kurşun bulunur, ancak modern üreticiler kurşunsuz alternatifler geliştirmiştir. Satın alırken üreticiden içerik bilgisi istemeniz önerilir." },
      { q: "Bu teknikleri öğrenebilir miyim?", a: "Evet! Midyat'ta ÇEKÜL Vakfı destekli atölyeler, Trabzon'da Kazaziye Eğitim Merkezi ve çeşitli belediyelerin MESEM programları kurs vermektedir." },
    ]},
    sources: { heading: "Kaynaklar", items: [
      "Türk Kültür Vakfı — \"Anadolu'da Gümüş İşçiliği\" (2019)",
      "UNESCO Somut Olmayan Kültürel Miras — Türkiye Envanteri",
      "Rıfat Osman — \"Midyat Telkâri Sanatı\" (Mardin Müzesi Yayınları)",
      "Trabzon Kazazcılar Odası — Tarihçe ve Teknikler",
    ]},
    related: { heading: "İlgili Konular", items: [
      { title: "925 Ayar Nedir?", path: "/tr/uretim/925-ayar", cat: "Üretim" },
      { title: "Gümüşün Tarihi", path: "/tr/tarih/gumusun-tarihi", cat: "Tarih" },
      { title: "Kültürel Motifler", path: "/tr/moda/kulturel-motifler", cat: "Moda" },
    ]},
    sponsor: { text: "Geleneksel Anadolu tekniklerinden ilham alan modern tasarımları keşfedin.", cta: "Instagram'da Gör", note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir." },
    toc: "İçindekiler", darkMode: "Mod",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Manufacturing", "Traditional Techniques"],
    category: "Manufacturing", title: "Traditional Silver Techniques",
    subtitle: "Midyat filigree, Trabzon kazaz, Mardin niello — Anatolia's living silver heritage",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "10 min read" },
    intro: [
      "Anatolia is the living geography of a millennia-old silver craftsmanship tradition. The filigree of the Southeast, the kazaz wire art of the Black Sea, the niello technique of Mardin — each is the product of a different cultural heritage, a different mastery tradition.",
      "In this article, you'll discover Turkey's three most important traditional silver techniques, their production processes, and cultural contexts.",
    ],
    techniques: "Techniques", steps: "Production Steps", year: "year tradition", center: "Center",
    craftMap: "Craft Centers Map",
    craftMapDesc: "Locations of traditional silver craft centers in Turkey:",
    faq: { heading: "Frequently Asked Questions", items: [
      { q: "Is filigree jewelry suitable for daily wear?", a: "Yes, but it requires careful use. Since filigree work consists of fine wires, it's sensitive to impact and pulling. It's recommended to remove before sports and heavy housework." },
      { q: "Why is kazaz so expensive?", a: "Kazaz is entirely handmade. A single bracelet can take 8-12 hours. The use of 999 pure silver and each knot being tied individually by hand increases the cost." },
      { q: "Does niello technique use lead?", a: "The traditional formula contains lead, but modern producers have developed lead-free alternatives. It's recommended to ask the manufacturer for content information." },
      { q: "Can I learn these techniques?", a: "Yes! Workshops supported by ÇEKÜL Foundation in Midyat, the Kazaz Training Center in Trabzon, and various municipality MESEM programs offer courses." },
    ]},
    sources: { heading: "Sources", items: [
      "Turkish Culture Foundation — \"Silverwork in Anatolia\" (2019)",
      "UNESCO Intangible Cultural Heritage — Turkey Inventory",
      "Rıfat Osman — \"Midyat Filigree Art\" (Mardin Museum Publications)",
      "Trabzon Silversmiths Chamber — History and Techniques",
    ]},
    related: { heading: "Related Topics", items: [
      { title: "What is 925 Sterling Silver?", path: "/en/manufacturing/925", cat: "Manufacturing" },
      { title: "History of Silver", path: "/en/history/silver-history", cat: "History" },
      { title: "Cultural Motifs", path: "/en/fashion/cultural-motifs", cat: "Fashion" },
    ]},
    sponsor: { text: "Discover modern designs inspired by traditional Anatolian techniques.", cta: "View on Instagram", note: "This content is sponsored by İstanbul Gümüş." },
    toc: "Contents", darkMode: "Mode",
  },
  ar: {
    nav: "أطلس الفضة", navSub: "منصة المعرفة الفضية",
    breadcrumb: ["الرئيسية", "الإنتاج", "التقنيات التقليدية"],
    category: "الإنتاج", title: "تقنيات الفضة التقليدية",
    subtitle: "فيليغري ميديات، كازاز طرابزون، نيللو ماردين — إرث الفضة الحي في الأناضول",
    meta: { author: "علي جتينكايا", date: "٥ أبريل ٢٠٢٦", readTime: "١٠ دقائق قراءة" },
    intro: [
      "الأناضول هي الجغرافيا الحية لتقليد صياغة الفضة الممتد لآلاف السنين. فيليغري الجنوب الشرقي، وفن الكازاز في البحر الأسود، وتقنية النيللو في ماردين — كل منها نتاج إرث ثقافي مختلف وتقليد حرفي متميز.",
      "في هذا المقال، ستكتشفون أهم ثلاث تقنيات تقليدية للفضة في تركيا وعمليات إنتاجها وسياقاتها الثقافية.",
    ],
    techniques: "التقنيات", steps: "مراحل الإنتاج", year: "سنة من التقاليد", center: "المركز",
    craftMap: "خريطة مراكز الحرف",
    craftMapDesc: "مواقع مراكز صياغة الفضة التقليدية في تركيا:",
    faq: { heading: "الأسئلة الشائعة", items: [
      { q: "هل مجوهرات الفيليغري مناسبة للاستخدام اليومي؟", a: "نعم، لكنها تتطلب استخداماً حذراً. نظراً لتكوينها من أسلاك رفيعة، فهي حساسة للصدمات. يُنصح بخلعها قبل الرياضة والأعمال المنزلية الثقيلة." },
      { q: "لماذا الكازاز غالي الثمن؟", a: "الكازاز يدوي بالكامل. قد يستغرق سوار واحد 8-12 ساعة. استخدام الفضة النقية 999 وربط كل عقدة يدوياً يزيد التكلفة." },
      { q: "هل تقنية النيللو تستخدم الرصاص؟", a: "تحتوي الصيغة التقليدية على الرصاص، لكن المنتجين الحديثين طوروا بدائل خالية من الرصاص." },
      { q: "هل يمكنني تعلم هذه التقنيات؟", a: "نعم! توجد ورش عمل في ميديات وطرابزون وبرامج تدريبية في بلديات مختلفة." },
    ]},
    sources: { heading: "المصادر", items: [
      "مؤسسة الثقافة التركية — \"صياغة الفضة في الأناضول\" (2019)",
      "يونسكو التراث الثقافي غير المادي — قائمة تركيا",
      "رفعت عثمان — \"فن فيليغري ميديات\"",
      "غرفة صاغة طرابزون — التاريخ والتقنيات",
    ]},
    related: { heading: "مواضيع ذات صلة", items: [
      { title: "ما هو عيار 925؟", path: "/ar/uretim/925", cat: "الإنتاج" },
      { title: "تاريخ الفضة", path: "/ar/tarih/gumusun-tarihi", cat: "التاريخ" },
      { title: "الزخارف الثقافية", path: "/ar/moda/kulturel-motifler", cat: "الموضة" },
    ]},
    sponsor: { text: "اكتشف التصاميم العصرية المستوحاة من التقنيات الأناضولية التقليدية.", cta: "شاهد على إنستغرام", note: "هذا المحتوى برعاية إسطنبول غوموش." },
    toc: "المحتويات", darkMode: "الوضع",
  },
};

export default function SilverAtlasTelkariArticle() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTech, setActiveTech] = useState("filigree");
  const [tocOpen, setTocOpen] = useState(false);

  const t = T[lang]; const isRTL = lang === "ar";
  const fontD = "'Playfair Display', Georgia, serif";
  const fontB = lang === "ar" ? "'Noto Naskh Arabic', 'Source Sans 3', sans-serif" : "'Source Sans 3', 'Segoe UI', sans-serif";
  const bg = dark ? "#0f0f14" : "#FAFAF5";
  const bgCard = dark ? "#16161e" : "#ffffff";
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const border = dark ? "rgba(192,192,192,0.08)" : "rgba(0,0,0,0.06)";
  const accent = "#C0C0C0"; const gold = "#D4AF37";
  const n = (obj) => obj?.[lang] || obj?.en || "";
  const tech = TECHNIQUES.find(t => t.id === activeTech);

  return (
    <div dir={isRTL?"rtl":"ltr"} style={{ minHeight:"100vh", background:bg, color:textP, fontFamily:fontB, transition:"all 0.3s" }}>
      {/* Header */}
      <header style={{ borderBottom:`1px solid ${border}`, padding:"12px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", background: dark?"#0c0c10":"#f5f5f0", position:"sticky", top:0, zIndex:100 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:28, height:28, borderRadius:"50%", background:`linear-gradient(135deg,${accent},${gold})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:"#0f0f14", fontFamily:fontD }}>Ag</div>
          <div><div style={{ fontFamily:fontD, fontWeight:600, fontSize:15 }}>{t.nav}</div><div style={{ fontSize:10, color:textS }}>{t.navSub}</div></div>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <div style={{ display:"flex", gap:2, background:dark?"rgba(128,128,128,0.08)":"rgba(0,0,0,0.04)", borderRadius:6, padding:2 }}>
            {["tr","en","ar"].map(l => (
              <button key={l} onClick={()=>setLang(l)} style={{ border:"none", cursor:"pointer", padding:"3px 8px", borderRadius:4, background:lang===l?(dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.08)"):"transparent", color:lang===l?textP:textS, fontSize:11, fontWeight:lang===l?600:400, fontFamily:l==="ar"?"'Noto Naskh Arabic',serif":fontB }}>{l==="ar"?"عر":l.toUpperCase()}</button>
            ))}
          </div>
          <button onClick={()=>setDark(!dark)} style={{ border:"none", cursor:"pointer", background:"transparent", color:textS, fontSize:16, padding:4 }}>{dark?"☀️":"🌙"}</button>
        </div>
      </header>

      <article style={{ maxWidth:740, margin:"0 auto", padding:"32px 24px 60px" }}>
        {/* Breadcrumb */}
        <div style={{ display:"flex", gap:8, fontSize:12, color:textS, marginBottom:20, flexWrap:"wrap" }}>
          {t.breadcrumb.map((b,i) => (
            <span key={i} style={{ display:"flex", alignItems:"center", gap:8 }}>
              {i>0 && <span style={{ color:border, fontSize:10 }}>{isRTL?"‹":"›"}</span>}
              <span style={{ color:i===t.breadcrumb.length-1?gold:textS }}>{b}</span>
            </span>
          ))}
        </div>

        <div style={{ display:"inline-block", padding:"4px 14px", borderRadius:6, background:gold+"15", color:gold, fontSize:11, fontWeight:600, letterSpacing:"0.04em", marginBottom:16 }}>{t.category}</div>
        <h1 style={{ fontFamily:fontD, fontSize:32, fontWeight:700, lineHeight:1.2, marginBottom:10 }}>{t.title}</h1>
        <p style={{ fontSize:16, color:textS, lineHeight:1.5, marginBottom:20 }}>{t.subtitle}</p>
        <div style={{ display:"flex", gap:16, fontSize:12, color:textS, marginBottom:32, paddingBottom:20, borderBottom:`1px solid ${border}`, flexWrap:"wrap" }}>
          <span>✍️ {t.meta.author}</span><span>📅 {t.meta.date}</span><span>⏱️ {t.meta.readTime}</span>
        </div>

        {/* Intro */}
        {t.intro.map((p,i) => (
          <p key={i} style={{ fontSize:15, lineHeight:1.85, color:textS, marginBottom:14, textAlign:"justify" }}>{p}</p>
        ))}

        {/* Technique Selector */}
        <h2 style={{ fontFamily:fontD, fontSize:22, fontWeight:600, marginBottom:16, marginTop:32 }}>{t.techniques}</h2>
        <div style={{ display:"flex", gap:8, marginBottom:24, flexWrap:"wrap" }}>
          {TECHNIQUES.map(tc => (
            <button key={tc.id} onClick={()=>setActiveTech(tc.id)} style={{
              padding:"10px 18px", borderRadius:12, cursor:"pointer", transition:"all 0.3s",
              border:`1px solid ${activeTech===tc.id?tc.color+"66":border}`,
              background:activeTech===tc.id?(dark?tc.color+"12":tc.color+"08"):"transparent",
              color:activeTech===tc.id?tc.color:textS, fontFamily:fontB, fontSize:13, fontWeight:activeTech===tc.id?600:400,
            }}>
              <span style={{ marginRight:6 }}>{tc.emoji}</span>{n(tc.name)}
            </button>
          ))}
        </div>

        {/* Active Technique Card */}
        {tech && (
          <div style={{
            border:`1px solid ${tech.color}33`, borderRadius:16, padding:24,
            background:dark?tech.color+"06":tech.color+"04", marginBottom:32,
          }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
              <span style={{ fontSize:36 }}>{tech.emoji}</span>
              <div>
                <h3 style={{ fontFamily:fontD, fontSize:20, fontWeight:600, color:tech.color }}>{n(tech.name)}</h3>
                <div style={{ fontSize:12, color:textS }}>{t.center}: {n(tech.center)} · ~{tech.tradition} {t.year}</div>
              </div>
            </div>
            <p style={{ fontSize:14, lineHeight:1.8, color:textS, marginBottom:20 }}>{n(tech.desc)}</p>

            {/* Steps */}
            <h4 style={{ fontSize:14, fontWeight:600, marginBottom:12, color:textP }}>{t.steps}</h4>
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {n(tech.steps).map((step, i) => (
                <div key={i} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                  <div style={{
                    width:28, height:28, borderRadius:"50%", flexShrink:0,
                    background:`linear-gradient(135deg, ${tech.color}33, ${tech.color}11)`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:12, fontWeight:700, color:tech.color,
                  }}>{i+1}</div>
                  <div style={{ fontSize:13, lineHeight:1.6, color:textS, paddingTop:4 }}>{step}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mini Craft Map SVG */}
        <h2 style={{ fontFamily:fontD, fontSize:22, fontWeight:600, marginBottom:10, marginTop:28 }}>{t.craftMap}</h2>
        <p style={{ fontSize:14, color:textS, marginBottom:16 }}>{t.craftMapDesc}</p>
        <svg viewBox="200 80 240 120" style={{ width:"100%", maxHeight:280, borderRadius:12, background:dark?"#0c0c10":"#eeeee8", border:`1px solid ${border}`, marginBottom:32 }}>
          {/* Simplified Turkey outline */}
          <path d="M220,140 Q250,115 280,120 Q310,110 340,115 Q370,108 400,115 Q420,112 430,120 Q425,135 415,140 Q405,145 395,140 Q385,148 370,145 Q355,150 340,145 Q320,150 300,148 Q280,155 260,148 Q240,152 225,145 Z" fill={dark?"#1a1a24":"#ddd8cc"} stroke={border} strokeWidth="1" />
          {/* Craft center dots */}
          <g><circle cx="396" cy="132" r="6" fill="#C9A0DC" opacity="0.9"/><text x="396" y="126" textAnchor="middle" fontSize="6" fill={textP} fontWeight="600">Midyat</text></g>
          <g><circle cx="380" cy="118" r="6" fill="#6EC6FF" opacity="0.9"/><text x="380" y="112" textAnchor="middle" fontSize="6" fill={textP} fontWeight="600">Trabzon</text></g>
          <g><circle cx="393" cy="136" r="4" fill="#E8A0BF" opacity="0.9"/><text x="406" y="140" fontSize="6" fill={textP} fontWeight="600">Mardin</text></g>
          <g><circle cx="310" cy="130" r="5" fill="#D4AF37" opacity="0.9"/><text x="310" y="124" textAnchor="middle" fontSize="6" fill={textP} fontWeight="600">Beypazarı</text></g>
          <g><circle cx="326" cy="120" r="4" fill="#7BE495" opacity="0.9"/><text x="326" y="114" textAnchor="middle" fontSize="6" fill={textP} fontWeight="600">Kastamonu</text></g>
        </svg>

        {/* FAQ */}
        <section style={{ marginBottom:36, marginTop:48 }}>
          <h2 style={{ fontFamily:fontD, fontSize:24, fontWeight:600, marginBottom:20 }}>{t.faq.heading}</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {t.faq.items.map((item,i) => (
              <div key={i} style={{ border:`1px solid ${openFaq===i?gold+"44":border}`, borderRadius:12, overflow:"hidden", background:openFaq===i?(dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.04)"):"transparent", transition:"all 0.3s" }}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{ width:"100%", border:"none", cursor:"pointer", background:"transparent", padding:"16px 20px", display:"flex", alignItems:"center", justifyContent:"space-between", color:textP, fontSize:14, fontWeight:500, fontFamily:fontB, textAlign:isRTL?"right":"left", gap:12 }}>
                  <span style={{ flex:1 }}>{item.q}</span>
                  <span style={{ fontSize:18, color:textS, transition:"transform 0.3s", transform:openFaq===i?"rotate(45deg)":"rotate(0)", flexShrink:0 }}>+</span>
                </button>
                {openFaq===i && <div style={{ padding:"0 20px 16px", fontSize:14, lineHeight:1.7, color:textS }}>{item.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section style={{ marginBottom:36, padding:"20px 24px", background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)", borderRadius:12, border:`1px solid ${border}` }}>
          <h3 style={{ fontSize:15, fontWeight:600, marginBottom:12 }}>{t.sources.heading}</h3>
          {t.sources.items.map((s,i) => (
            <div key={i} style={{ fontSize:13, color:textS, lineHeight:1.6, marginBottom:6, display:"flex", gap:8 }}>
              <span style={{ color:accent, fontWeight:600, flexShrink:0 }}>[{i+1}]</span><span>{s}</span>
            </div>
          ))}
        </section>

        {/* Related */}
        <section style={{ marginBottom:40 }}>
          <h3 style={{ fontSize:18, fontFamily:fontD, fontWeight:600, marginBottom:16 }}>{t.related.heading}</h3>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))", gap:12 }}>
            {t.related.items.map((item,i) => (
              <a key={i} href={item.path} style={{ textDecoration:"none", padding:"16px 18px", border:`1px solid ${border}`, borderRadius:12, background:bgCard, display:"block" }}>
                <div style={{ fontSize:10, color:gold, fontWeight:600, marginBottom:6 }}>{item.cat}</div>
                <div style={{ fontSize:14, fontWeight:500, color:textP }}>{item.title}</div>
                <div style={{ fontSize:12, color:textS, marginTop:6 }}>{isRTL?"←":"→"}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Sponsor */}
        <div style={{ border:`1px solid ${gold}22`, borderRadius:16, padding:"28px 24px", background:dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.05)", textAlign:"center" }}>
          <p style={{ fontSize:15, color:textP, marginBottom:16, lineHeight:1.6 }}>{t.sponsor.text}</p>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"10px 24px", borderRadius:10, background:`linear-gradient(135deg,${accent},${gold})`, color:"#0f0f14", fontSize:13, fontWeight:600, textDecoration:"none" }}>📸 {t.sponsor.cta}</a>
          <p style={{ fontSize:11, color:textS, marginTop:14, opacity:0.7 }}>{t.sponsor.note}</p>
        </div>
      </article>

      <footer style={{ borderTop:`1px solid ${border}`, padding:"24px", textAlign:"center", background:dark?"#0c0c10":"#f5f5f0" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginBottom:8 }}>
          <div style={{ width:22, height:22, borderRadius:"50%", background:`linear-gradient(135deg,${accent},${gold})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, fontWeight:700, color:"#0f0f14", fontFamily:fontD }}>Ag</div>
          <span style={{ fontFamily:fontD, fontWeight:600, fontSize:14 }}>{t.nav}</span>
        </div>
        <p style={{ fontSize:11, color:textS }}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p>
      </footer>
    </div>
  );
}
