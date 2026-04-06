import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Bilim", "Fiziksel Özellikler"],
    category: "Bilim",
    title: "Gümüşün Fiziksel Özellikleri",
    subtitle: "Evrenin en iyi elektrik iletkeni — gümüşün fiziksel ve termal özellikleri karşılaştırmalı analizi",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "9 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Gümüş (Ag, atom numarası 47), tüm elementler arasında en yüksek elektrik iletkenliğine, en yüksek termal iletkenliğe ve en yüksek yansıtıcılığa sahip metaldir. Bu üç 'en' özelliğin tek bir elementte birleşmesi, gümüşü bilim ve mühendislik açısından eşsiz kılar.",
        "Bu makale, gümüşün fiziksel özelliklerini diğer metallerle karşılaştırmalı olarak incelemekte ve bu özelliklerin teknolojik uygulamalarını açıklamaktadır.",
      ]},
      { id: "elektrik", heading: "Elektrik İletkenliği", paragraphs: [
        "Gümüşün elektrik iletkenliği 6,30 × 10⁷ S/m (siemens/metre) olup tüm elementlerin en yükseğidir. Bakır (%94 gümüş iletkenliği), altın (%76) ve alüminyum (%61) onu takip eder.",
        "Pratikte bakır, gümüşe çok yakın iletkenliğe sahip olup ~100 kat daha ucuz olduğundan elektrik kablolarında tercih edilir. Gümüş ise yüksek performans gerektiren özel uygulamalarda — uydu devreleri, tıbbi cihazlar, askeri elektronik — kullanılır.",
      ], widget: "conductivityChart" },
      { id: "termal", heading: "Termal İletkenlik", paragraphs: [
        "Gümüşün termal iletkenliği 429 W/(m·K) olup metallerin en yükseğidir. Bakır (401), altın (318) ve alüminyum (237) onu izler. Gümüş, ısıyı mükemmel şekilde dağıtarak termal yönetim uygulamalarında kritik rol oynar.",
        "Günlük yaşamda: gümüş bir çay kaşığını sıcak çaya batırdığınızda sapın neredeyse anında ısınması, üstün termal iletkenliğin somut deneyimidir.",
      ]},
      { id: "yansitma", heading: "Optik Yansıtıcılık", paragraphs: [
        "Gümüş, görünür ışık spektrumunda %95+ yansıtıcılık ile en yansıtıcı metaldir. Alüminyum (%92), rodum (%80) ve krom (%70) takip eder.",
        "Bu özellik gümüşü ideal ayna malzemesi yapar. Teleskop aynaları, güneş yoğunlaştırıcıları, LED reflektörleri ve optik kaplamalar gümüşün yansıtıcılığından yararlanır.",
        "Not: Ultraviyole bölgede gümüş yansıtıcılığı düşer; bu alanda alüminyum tercih edilir. Kızılötesi bölgede ise gümüş yine üstündür.",
      ]},
      { id: "mekanik", heading: "Mekanik Özellikler", paragraphs: [
        "Gümüş, altından sonra en sünek (ductile) ve en dövülebilir (malleable) metaldir. Bir gram gümüş, 1.800 metre tel haline çekilebilir veya 0.003 mm kalınlığında levha haline dövülebilir.",
        "Bu süper işlenebilirlik, telkâri sanatının temelini oluşturur. 0.2 mm çapında gümüş teller, insan saçından sadece birkaç kat kalındır ve son derece detaylı süsleme çalışmalarına olanak tanır.",
      ]},
      { id: "tablo", heading: "Gümüşün Fiziksel Sabitleri", paragraphs: [
        "Aşağıdaki tablo, gümüşün temel fiziksel özelliklerini özetlemektedir:",
      ], widget: "propertiesTable" },
      { id: "teknoloji", heading: "Teknolojik Uygulamalar", paragraphs: [
        "Gümüşün benzersiz fiziksel özellikleri, onu modern teknolojinin vazgeçilmez bir malzemesi kılmaktadır. Güneş panelleri (fotovoltaik hücrelerin arka kontağı), 5G antenler (yüksek frekans iletkenliği), süperiletken araştırmaları (YBCO bileşikleri), dokunmatik ekranlar (ITO alternatifi gümüş nanotel), ve termal macunlar (elektronik soğutma) başlıca uygulama alanlarıdır.",
        "Yeşil enerji dönüşümü, gümüş talebini artıran en güçlü trend olarak öne çıkmaktadır. Her standart güneş paneli yaklaşık 20 gram gümüş içerir — küresel güneş enerjisi kurulumları büyüdükçe gümüş talebi de paralel artmaktadır.",
      ]},
    ],
    conductivityData: [
      { metal: "Gümüş (Ag)", value: 100, color: "#C0C0C0" },
      { metal: "Bakır (Cu)", value: 94, color: "#B87333" },
      { metal: "Altın (Au)", value: 76, color: "#D4AF37" },
      { metal: "Alüminyum (Al)", value: 61, color: "#A8B8C8" },
      { metal: "Tungsten (W)", value: 31, color: "#6B6B6B" },
      { metal: "Nikel (Ni)", value: 23, color: "#8C8C8C" },
      { metal: "Demir (Fe)", value: 17, color: "#5C5C5C" },
      { metal: "Platin (Pt)", value: 16, color: "#E0E0E0" },
    ],
    properties: [
      { prop: "Atom Numarası", val: "47", unit: "" },
      { prop: "Atom Kütlesi", val: "107,87", unit: "g/mol" },
      { prop: "Yoğunluk", val: "10.490", unit: "kg/m³" },
      { prop: "Erime Noktası", val: "961,8", unit: "°C" },
      { prop: "Kaynama Noktası", val: "2.162", unit: "°C" },
      { prop: "Elektrik İletkenliği", val: "6,30 × 10⁷", unit: "S/m" },
      { prop: "Termal İletkenlik", val: "429", unit: "W/(m·K)" },
      { prop: "Mohs Sertliği", val: "2,5", unit: "" },
      { prop: "Elastik Modülü", val: "83", unit: "GPa" },
      { prop: "Yansıtıcılık (Görünür)", val: ">95", unit: "%" },
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Gümüş neden bakır yerine kablo olarak kullanılmıyor?", a: "Gümüş bakırdan sadece %6 daha iletken ama ~100 kat pahalıdır. Maliyet-performans dengesi bakırı günlük uygulamalarda tercih edilir kılar. Gümüş ise kritik performans gerektiren özel alanlarda kullanılır." },
        { q: "Gümüş neden en iyi iletkendir?", a: "Gümüşün kristal yapısındaki elektronların serbest hareket kabiliyeti (mobilitesi) tüm metallerin en yükseğidir. Bu, atomik düzeyde elektron saçılımının minimum olmasından kaynaklanır." },
        { q: "Güneş panellerinde ne kadar gümüş var?", a: "Standart bir güneş panelinde ~20 gram gümüş bulunur. 2025'te dünya genelinde güneş enerjisi sektörü toplam gümüş talebinin ~%15-20'sini oluşturmaktadır." },
      ],
    },
    sources: { heading: "Kaynaklar", items: ["CRC Handbook of Chemistry and Physics (105th Edition)", "The Silver Institute — \"Silver in Solar Energy\"", "ASM International — \"Properties and Selection: Nonferrous Alloys\""] },
    related: { heading: "İlgili Konular", items: [{ title: "Gümüşün Kimyası", path: "/tr/bilim/kimya", cat: "Bilim" }, { title: "Endüstriyel Kullanımlar", path: "/tr/bilim/endustriyel", cat: "Bilim" }, { title: "Gümüşün Geleceği", path: "/tr/piyasa/gelecek", cat: "Piyasa" }] },
    sponsor: { text: "Bilimin en iyi iletkeni, takı sanatının en zarif metali.", cta: "Instagram'da Gör", note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir." },
    darkMode: "Mod",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Science", "Physical Properties"],
    category: "Science",
    title: "Physical Properties of Silver",
    subtitle: "The universe's best electrical conductor — a comparative analysis of silver's physical and thermal properties",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "9 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["Silver (Ag, atomic number 47) possesses the highest electrical conductivity, highest thermal conductivity, and highest reflectivity of all elements. The convergence of these three 'bests' in a single element makes silver scientifically unique.", "This article comparatively examines silver's physical properties against other metals and explains their technological applications."] },
      { id: "electrical", heading: "Electrical Conductivity", paragraphs: ["Silver's electrical conductivity of 6.30 × 10⁷ S/m is the highest of all elements. Copper (94% of silver), gold (76%), and aluminum (61%) follow.", "In practice, copper is preferred for electrical wiring due to being ~100× cheaper with nearly equal conductivity. Silver is used in high-performance applications — satellite circuits, medical devices, military electronics."], widget: "conductivityChart" },
      { id: "thermal", heading: "Thermal Conductivity", paragraphs: ["Silver's thermal conductivity of 429 W/(m·K) is the highest among metals. Copper (401), gold (318), and aluminum (237) follow.", "In everyday life: when you dip a silver teaspoon into hot tea, the handle heats almost instantly — a tangible experience of superior thermal conductivity."] },
      { id: "optical", heading: "Optical Reflectivity", paragraphs: ["Silver reflects 95%+ of visible light, making it the most reflective metal. Aluminum (92%), rhodium (80%), and chromium (70%) follow.", "This makes silver ideal for mirrors. Telescope mirrors, solar concentrators, LED reflectors, and optical coatings all leverage silver's reflectivity."] },
      { id: "mechanical", heading: "Mechanical Properties", paragraphs: ["Silver is the second most ductile and malleable metal after gold. One gram can be drawn into 1,800 meters of wire or hammered into sheets 0.003 mm thick.", "This super-workability is the foundation of filigree art. Silver wires of 0.2 mm diameter — only a few times thicker than human hair — enable extremely detailed ornamental work."] },
      { id: "table", heading: "Physical Constants of Silver", paragraphs: ["The table below summarizes silver's fundamental physical properties:"], widget: "propertiesTable" },
      { id: "tech", heading: "Technological Applications", paragraphs: ["Silver's unique properties make it indispensable in modern technology. Solar panels, 5G antennas, superconductor research, touchscreens (silver nanowire), and thermal pastes are key application areas.", "The green energy transition is the strongest trend driving silver demand. Each standard solar panel contains ~20 grams of silver — as global solar installations grow, so does silver demand."] },
    ],
    conductivityData: [
      { metal: "Silver (Ag)", value: 100, color: "#C0C0C0" },
      { metal: "Copper (Cu)", value: 94, color: "#B87333" },
      { metal: "Gold (Au)", value: 76, color: "#D4AF37" },
      { metal: "Aluminum (Al)", value: 61, color: "#A8B8C8" },
      { metal: "Tungsten (W)", value: 31, color: "#6B6B6B" },
      { metal: "Nickel (Ni)", value: 23, color: "#8C8C8C" },
      { metal: "Iron (Fe)", value: 17, color: "#5C5C5C" },
      { metal: "Platinum (Pt)", value: 16, color: "#E0E0E0" },
    ],
    properties: [
      { prop: "Atomic Number", val: "47", unit: "" },
      { prop: "Atomic Mass", val: "107.87", unit: "g/mol" },
      { prop: "Density", val: "10,490", unit: "kg/m³" },
      { prop: "Melting Point", val: "961.8", unit: "°C" },
      { prop: "Boiling Point", val: "2,162", unit: "°C" },
      { prop: "Electrical Conductivity", val: "6.30 × 10⁷", unit: "S/m" },
      { prop: "Thermal Conductivity", val: "429", unit: "W/(m·K)" },
      { prop: "Mohs Hardness", val: "2.5", unit: "" },
      { prop: "Elastic Modulus", val: "83", unit: "GPa" },
      { prop: "Reflectivity (Visible)", val: ">95", unit: "%" },
    ],
    faq: { heading: "FAQ", items: [{ q: "Why isn't silver used for wiring instead of copper?", a: "Silver is only 6% more conductive than copper but ~100× more expensive. The cost-performance ratio makes copper preferable for everyday use." }, { q: "How much silver is in a solar panel?", a: "A standard panel contains ~20g of silver. In 2025, solar energy accounts for ~15-20% of total silver demand." }] },
    sources: { heading: "Sources", items: ["CRC Handbook of Chemistry and Physics (105th Ed.)", "The Silver Institute — \"Silver in Solar Energy\"", "ASM International — \"Nonferrous Alloys\""] },
    related: { heading: "Related Topics", items: [{ title: "Chemistry of Silver", path: "/en/science/chemistry", cat: "Science" }, { title: "Industrial Uses", path: "/en/science/industrial", cat: "Science" }] },
    sponsor: { text: "Science's best conductor, jewelry's most elegant metal.", cta: "See on Instagram", note: "This content is sponsored by Istanbul Silver." },
    darkMode: "Mode",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة معرفة الفضة",
    breadcrumb: ["الرئيسية", "العلوم", "الخصائص الفيزيائية"],
    category: "العلوم",
    title: "الخصائص الفيزيائية للفضة",
    subtitle: "أفضل موصل كهربائي في الكون — تحليل مقارن",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "٩ دقائق قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["الفضة (Ag، العدد الذري ٤٧) تمتلك أعلى موصلية كهربائية وحرارية وأعلى انعكاسية بين جميع العناصر. اجتماع هذه الصفات الثلاث في عنصر واحد يجعل الفضة فريدة علمياً."] },
      { id: "kahraba", heading: "الموصلية الكهربائية", paragraphs: ["موصلية الفضة الكهربائية ٦,٣٠ × ١٠⁷ سيمنز/م وهي الأعلى. يليها النحاس (٩٤٪)، الذهب (٧٦٪)، والألومنيوم (٦١٪)."], widget: "conductivityChart" },
      { id: "harari", heading: "الموصلية الحرارية", paragraphs: ["موصلية الفضة الحرارية ٤٢٩ واط/(م·كلفن) وهي الأعلى بين المعادن."] },
      { id: "jadwal", heading: "الثوابت الفيزيائية", paragraphs: ["الجدول أدناه يلخص الخصائص الأساسية:"], widget: "propertiesTable" },
    ],
    conductivityData: [
      { metal: "الفضة", value: 100, color: "#C0C0C0" },
      { metal: "النحاس", value: 94, color: "#B87333" },
      { metal: "الذهب", value: 76, color: "#D4AF37" },
      { metal: "الألومنيوم", value: 61, color: "#A8B8C8" },
      { metal: "الحديد", value: 17, color: "#5C5C5C" },
    ],
    properties: [
      { prop: "العدد الذري", val: "٤٧", unit: "" },
      { prop: "الكثافة", val: "١٠,٤٩٠", unit: "كغ/م³" },
      { prop: "نقطة الانصهار", val: "٩٦١,٨", unit: "°C" },
      { prop: "الموصلية الكهربائية", val: "٦,٣٠ × ١٠⁷", unit: "S/m" },
      { prop: "الموصلية الحرارية", val: "٤٢٩", unit: "W/(m·K)" },
    ],
    faq: { heading: "الأسئلة الشائعة", items: [{ q: "لماذا لا تُستخدم الفضة في الأسلاك بدل النحاس؟", a: "الفضة أكثر موصلية بـ ٦٪ فقط لكنها أغلى بـ ١٠٠ مرة. نسبة التكلفة للأداء تجعل النحاس مفضلاً." }] },
    sources: { heading: "المصادر", items: ["CRC Handbook of Chemistry and Physics", "معهد الفضة"] },
    related: { heading: "مواضيع ذات صلة", items: [{ title: "كيمياء الفضة", path: "/ar/science/chemistry", cat: "العلوم" }] },
    sponsor: { text: "أفضل موصل في العلوم وأرقى معدن في المجوهرات.", cta: "شاهد على إنستغرام", note: "هذا المحتوى برعاية إسطنبول للفضة." },
    darkMode: "الوضع",
  },
};

function ConductivityChart({ data, dark }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const border = dark ? "rgba(192,192,192,0.12)" : "rgba(0,0,0,0.08)";
  return (
    <div style={{ marginTop: 12 }}>
      {data.map((d, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{ width: 120, fontSize: 12, color: textS, textAlign: "right", flexShrink: 0, fontFamily: "'JetBrains Mono', monospace" }}>{d.metal}</div>
          <div style={{ flex: 1, height: 24, background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)", borderRadius: 6, overflow: "hidden", position: "relative" }}>
            <div style={{ height: "100%", width: `${d.value}%`, background: `linear-gradient(90deg, ${d.color}88, ${d.color})`, borderRadius: 6, transition: "width 0.8s ease", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 8 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: i === 0 ? "#0f0f14" : "#fff", fontFamily: "'JetBrains Mono', monospace" }}>{d.value}%</span>
            </div>
          </div>
        </div>
      ))}
      <div style={{ fontSize: 11, color: textS, marginTop: 8, fontStyle: "italic" }}>* Gümüş = %100 referans</div>
    </div>
  );
}

function PropertiesTable({ data, dark, lang }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const accent = dark ? "#C0C0C0" : "#708090";
  const border = dark ? "rgba(192,192,192,0.12)" : "rgba(0,0,0,0.08)";
  const bgCard = dark ? "#1a1a24" : "#ffffff";
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", border: `1px solid ${border}` }}>
      {data.map((row, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 16px", background: i % 2 === 0 ? (dark ? "rgba(192,192,192,0.03)" : "rgba(192,192,192,0.05)") : "transparent", borderBottom: i < data.length - 1 ? `1px solid ${border}` : "none" }}>
          <span style={{ fontSize: 13, color: textS }}>{row.prop}</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: accent, fontFamily: "'JetBrains Mono', monospace" }}>
            {row.val} {row.unit && <span style={{ fontSize: 11, fontWeight: 400, color: textS }}>{row.unit}</span>}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function PhysicalPropertiesArticle() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);
  const t = T[lang];
  const isRTL = lang === "ar";
  const bgP = dark ? "#0f0f14" : "#FAFAF5";
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const accent = dark ? "#C0C0C0" : "#708090";
  const gold = "#D4AF37";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const fontD = "'Playfair Display', Georgia, serif";
  const fontB = lang === "ar" ? "'Noto Naskh Arabic', serif" : "'Source Sans 3', sans-serif";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{ fontFamily: fontB, background: bgP, color: textP, minHeight: "100vh", transition: "background 0.4s, color 0.4s" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*{margin:0;padding:0;box-sizing:border-box;}::selection{background:rgba(192,192,192,0.3);}`}</style>

      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: dark ? "rgba(15,15,20,0.88)" : "rgba(250,250,245,0.88)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${border}`, padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg, ${accent}, ${gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#0f0f14", fontFamily: fontD }}>Ag</div>
          <span style={{ fontFamily: fontD, fontWeight: 600, fontSize: 16 }}>{t.nav}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", gap: 2, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", borderRadius: 7, padding: 2 }}>
            {["tr", "en", "ar"].map(l => <button key={l} onClick={() => setLang(l)} style={{ border: "none", cursor: "pointer", padding: "3px 9px", borderRadius: 5, fontSize: 11, fontWeight: lang === l ? 600 : 400, fontFamily: l === "ar" ? "'Noto Naskh Arabic', serif" : fontB, background: lang === l ? (dark ? "rgba(192,192,192,0.15)" : "rgba(0,0,0,0.08)") : "transparent", color: lang === l ? textP : textS, transition: "all 0.2s" }}>{l === "ar" ? "عر" : l.toUpperCase()}</button>)}
          </div>
          <button onClick={() => setDark(!dark)} style={{ border: "none", cursor: "pointer", background: "transparent", color: textS, fontSize: 16, padding: 4 }}>{dark ? "☀️" : "🌙"}</button>
        </div>
      </nav>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "16px 24px 0", display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", fontSize: 12, color: textS }}>
        {t.breadcrumb.map((item, i) => <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>{i > 0 && <span style={{ opacity: 0.4 }}>{isRTL ? "‹" : "›"}</span>}<a href="#" style={{ color: i === t.breadcrumb.length - 1 ? textP : textS, textDecoration: "none", fontWeight: i === t.breadcrumb.length - 1 ? 500 : 400 }}>{item}</a></span>)}
      </div>

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "32px 24px 64px", animation: "fadeUp 0.6s ease both" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: 6, fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: gold, border: `1px solid ${gold}33`, marginBottom: 16 }}>{t.category}</div>
          <h1 style={{ fontFamily: fontD, fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 12 }}>{t.title}</h1>
          <p style={{ fontSize: 16, color: textS, lineHeight: 1.6, marginBottom: 20 }}>{t.subtitle}</p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", fontSize: 13, color: textS, paddingBottom: 20, borderBottom: `1px solid ${border}` }}>
            <span>{t.meta.author}</span><span style={{ opacity: 0.3 }}>·</span><span>{t.meta.date}</span><span style={{ opacity: 0.3 }}>·</span><span>{t.meta.readTime}</span>
          </div>
        </div>

        {t.sections.map(sec => (
          <section key={sec.id} style={{ marginBottom: 40 }}>
            {sec.heading && <h2 style={{ fontFamily: fontD, fontSize: 22, fontWeight: 600, marginBottom: 16, color: accent }}>{sec.heading}</h2>}
            {sec.paragraphs && sec.paragraphs.map((p, j) => <p key={j} style={{ fontSize: 15.5, lineHeight: 1.85, color: textP, marginBottom: 14, opacity: 0.92 }}>{p}</p>)}
            {sec.widget === "conductivityChart" && <ConductivityChart data={t.conductivityData} dark={dark} />}
            {sec.widget === "propertiesTable" && <PropertiesTable data={t.properties} dark={dark} lang={lang} />}
          </section>
        ))}

        {t.faq && <section style={{ marginTop: 48, marginBottom: 40 }}>
          <h2 style={{ fontFamily: fontD, fontSize: 22, fontWeight: 600, marginBottom: 20, color: accent }}>{t.faq.heading}</h2>
          {t.faq.items.map((item, i) => <div key={i} style={{ marginBottom: 8, borderRadius: 10, border: `1px solid ${border}`, overflow: "hidden" }}>
            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", textAlign: isRTL ? "right" : "left", padding: "14px 18px", background: openFaq === i ? (dark ? "rgba(192,192,192,0.05)" : "rgba(192,192,192,0.08)") : "transparent", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: textP, display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: fontB }}>
              <span>{item.q}</span><span style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s", fontSize: 12, color: textS }}>▼</span>
            </button>
            {openFaq === i && <div style={{ padding: "0 18px 16px", fontSize: 14, lineHeight: 1.7, color: textS }}>{item.a}</div>}
          </div>)}
        </section>}

        <section style={{ marginBottom: 40 }}><h2 style={{ fontFamily: fontD, fontSize: 18, fontWeight: 600, marginBottom: 12, color: accent }}>{t.sources.heading}</h2>{t.sources.items.map((s, i) => <div key={i} style={{ fontSize: 13, color: textS, padding: "6px 0", borderBottom: `1px solid ${border}` }}>{i + 1}. {s}</div>)}</section>
        <section style={{ marginBottom: 40 }}><h2 style={{ fontFamily: fontD, fontSize: 18, fontWeight: 600, marginBottom: 12, color: accent }}>{t.related.heading}</h2><div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>{t.related.items.map((r, i) => <a key={i} href={r.path} style={{ padding: "10px 16px", borderRadius: 8, border: `1px solid ${border}`, textDecoration: "none", color: textP, fontSize: 13, fontWeight: 500, background: dark ? "rgba(192,192,192,0.03)" : "rgba(192,192,192,0.06)" }}><span style={{ fontSize: 10, color: gold, marginRight: 6 }}>{r.cat}</span>{r.title}</a>)}</div></section>

        <div style={{ background: `linear-gradient(135deg, ${dark ? "rgba(212,175,55,0.06)" : "rgba(212,175,55,0.08)"}, transparent)`, borderRadius: 14, padding: 24, textAlign: "center", border: `1px solid ${gold}22` }}>
          <p style={{ fontSize: 14, color: textS, marginBottom: 12 }}>{t.sponsor.text}</p>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "10px 28px", borderRadius: 8, background: `linear-gradient(135deg, ${gold}, #c9a227)`, color: "#0f0f14", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>{t.sponsor.cta}</a>
          <p style={{ fontSize: 11, color: textS, marginTop: 10, opacity: 0.6 }}>{t.sponsor.note}</p>
        </div>
      </article>
      <footer style={{ borderTop: `1px solid ${border}`, padding: "24px", textAlign: "center", fontSize: 12, color: textS }}>© 2026 SilverAtlas · {t.meta.author}</footer>
    </div>
  );
}
