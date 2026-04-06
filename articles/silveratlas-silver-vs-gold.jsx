import { useState } from "react";

const COMPARE_DATA = [
  { key: "symbol", icon: "🧪", tr: ["Ag (Argentum)", "Au (Aurum)"], en: ["Ag (Argentum)", "Au (Aurum)"], ar: ["Ag (أرجنتوم)", "Au (أوروم)"] },
  { key: "atomic", icon: "⚛️", tr: ["47", "79"], en: ["47", "79"], ar: ["٤٧", "٧٩"] },
  { key: "density", icon: "⚖️", tr: ["10.49 g/cm³", "19.32 g/cm³"], en: ["10.49 g/cm³", "19.32 g/cm³"], ar: ["10.49 غ/سم³", "19.32 غ/سم³"] },
  { key: "melt", icon: "🌡️", tr: ["961.8°C", "1064°C"], en: ["961.8°C", "1064°C"], ar: ["961.8°م", "1064°م"] },
  { key: "conductivity", icon: "⚡", tr: ["En yüksek (#1)", "İyi (#3)"], en: ["Highest (#1)", "Good (#3)"], ar: ["الأعلى (#1)", "جيد (#3)"] },
  { key: "purity", icon: "💎", tr: ["925 (standart takı)", "750 (18K standart)"], en: ["925 (standard jewelry)", "750 (18K standard)"], ar: ["925 (المجوهرات القياسية)", "750 (معيار 18K)"] },
  { key: "tarnish", icon: "🔄", tr: ["Evet (kükürt tepkimesi)", "Hayır"], en: ["Yes (sulfur reaction)", "No"], ar: ["نعم (تفاعل الكبريت)", "لا"] },
  { key: "price", icon: "💰", tr: ["~30 $/oz", "~2400 $/oz"], en: ["~$30/oz", "~$2,400/oz"], ar: ["~30 $/أونصة", "~2400 $/أونصة"] },
  { key: "ratio", icon: "📊", tr: ["1", "~80 (Altın/Gümüş oranı)"], en: ["1", "~80 (Gold/Silver ratio)"], ar: ["1", "~80 (نسبة الذهب/الفضة)"] },
  { key: "industrial", icon: "🏭", tr: ["%56 endüstriyel", "%8 endüstriyel"], en: ["56% industrial", "8% industrial"], ar: ["56% صناعي", "8% صناعي"] },
  { key: "reserves", icon: "🌍", tr: ["~550.000 ton", "~54.000 ton"], en: ["~550,000 tons", "~54,000 tons"], ar: ["~550,000 طن", "~54,000 طن"] },
];

const FIELD_LABELS = {
  symbol: { tr: "Kimyasal Sembol", en: "Chemical Symbol", ar: "الرمز الكيميائي" },
  atomic: { tr: "Atom Numarası", en: "Atomic Number", ar: "العدد الذري" },
  density: { tr: "Yoğunluk", en: "Density", ar: "الكثافة" },
  melt: { tr: "Erime Noktası", en: "Melting Point", ar: "نقطة الانصهار" },
  conductivity: { tr: "Elektrik İletkenliği", en: "Electrical Conductivity", ar: "التوصيل الكهربائي" },
  purity: { tr: "Takı Saflığı", en: "Jewelry Purity", ar: "نقاء المجوهرات" },
  tarnish: { tr: "Kararma", en: "Tarnish", ar: "التأكسد" },
  price: { tr: "Yaklaşık Fiyat", en: "Approx. Price", ar: "السعر التقريبي" },
  ratio: { tr: "Oran", en: "Ratio", ar: "النسبة" },
  industrial: { tr: "Endüstriyel Kullanım", en: "Industrial Use", ar: "الاستخدام الصناعي" },
  reserves: { tr: "Küresel Rezerv", en: "Global Reserves", ar: "الاحتياطيات العالمية" },
};

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Moda", "Gümüş mü Altın mı?"],
    category: "Moda", title: "Gümüş mü Altın mı?",
    subtitle: "Kapsamlı karşılaştırma: fiziksel özellikler, fiyat, yatırım, stil ve bakım",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "9 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "İnsanlık tarihinin en eski iki kıymetli metali — gümüş ve altın. Biri ayın metali, diğeri güneşin. Takı seçiminden yatırım kararına, kimyasal özelliklerden kültürel anlama kadar bu iki metal sürekli karşılaştırılır.",
        "Bu rehberde, gümüş ve altını 11 farklı kategoride yan yana koyuyor, her birinin avantaj ve dezavantajlarını nesnel verilerle değerlendiriyoruz.",
      ]},
      { id: "table", heading: "Karşılaştırma Tablosu", paragraphs: [
        "Aşağıdaki tablo, gümüş ve altının temel fiziksel, kimyasal ve ekonomik özelliklerini karşılaştırır:",
      ], widget: "compare" },
      { id: "style", heading: "Stil ve Estetik", paragraphs: [
        "Gümüş, soğuk tonlu cilt renklerine (kış ve yaz tipleri) daha iyi uyum sağlarken, altın sıcak tonlu ciltlerde (ilkbahar ve sonbahar tipleri) daha parlak durur. Ancak bu kural kesin değildir — kişisel tercih ve kombinleme önemlidir.",
        "Gümüş takılar minimal, modern ve edgy bir estetik sunar. Altın ise klasik, lüks ve geleneksel bir his verir. Son yıllarda iki metalin birlikte kullanıldığı mixed-metal trendi de oldukça popüler.",
        "Erkek aksesuarlarında gümüş geleneksel olarak daha yaygındır — yüzükler, bileklikler ve kol düğmeleri. Altın ise kadın takısında dominanttır, özellikle düğün ve nişan geleneğinde.",
      ]},
      { id: "investment", heading: "Yatırım Perspektifi", paragraphs: [
        "Altın, tarih boyunca 'güvenli liman' yatırım aracı olmuştur. Gümüş ise hem kıymetli metal hem endüstriyel metal özelliği taşır — bu ikili yapı gümüşü daha volatil ama potansiyel olarak daha kârlı kılar.",
        "Altın/gümüş oranı (Gold/Silver Ratio) tarihî ortalaması ~60 civarındadır. Bu oran 80'in üzerine çıktığında gümüşün 'ucuz' olduğu, 40'ın altına indiğinde ise 'pahalı' olduğu yorumu yapılır.",
        "Gümüşün endüstriyel talep boyutu (güneş panelleri, elektronik, tıp) uzun vadede önemli bir fiyat desteği sağlar. Altının endüstriyel kullanımı çok sınırlıdır.",
      ]},
      { id: "care", heading: "Bakım Karşılaştırması", paragraphs: [
        "Gümüşün en büyük dezavantajı kararma (tarnish) eğilimidir. Havadaki kükürt bileşikleriyle tepkimeye girerek zamanla koyu bir patina oluşturur. Düzenli temizlik ve doğru saklama gerektirir.",
        "Altın ise neredeyse hiç tepkime vermez — yıllar sonra bile ilk günkü parlaklığını korur. Bu nedenle bakım açısından altın açık ara önde.",
        "Ancak gümüşün kararması aslında bir karakter özelliği olarak da değerlendirilebilir. Özellikle oksitlenmiş (antiqued) gümüş takılarda bu patina istenen bir estetik efekttir.",
      ]},
    ],
    silverPros: { heading: "Gümüşün Avantajları", items: ["Uygun fiyat — altından ~80 kat ucuz", "En yüksek elektrik iletkenliği", "Modern, minimal estetik", "Güçlü endüstriyel talep", "Antimikrobiyal özellik", "Daha büyük/gösterişli parçalar uygun fiyatta"] },
    silverCons: { heading: "Gümüşün Dezavantajları", items: ["Kararma (tarnish) — düzenli bakım gerektirir", "Altına göre daha düşük prestij algısı", "Daha düşük yoğunluk — aynı boyutta daha hafif", "925 ayar bakır alerjisi riski (nadir)"] },
    goldPros: { heading: "Altının Avantajları", items: ["Kararma yok — minimal bakım", "Yüksek prestij ve kültürel değer", "Güvenli liman yatırım aracı", "Hipoalerjenik (24K)", "Geleneksel düğün/nişan metalleri"] },
    goldCons: { heading: "Altının Dezavantajları", items: ["Çok yüksek fiyat", "Sınırlı endüstriyel kullanım", "24K çok yumuşak — takı için alaşım gerekli", "Ağır (aynı boyutta gümüşten ~2 kat ağır)"] },
    verdict: { heading: "Sonuç", text: "Gümüş mü altın mı sorusunun tek bir cevabı yoktur. Bütçe, stil tercihi, bakım isteği ve kullanım amacı belirleyicidir. Gümüş, uygun fiyatla yüksek estetik arayan, modern tarzı seven ve endüstriyel değerini takdir eden kişiler için mükemmel bir seçimdir. Altın ise zamansız lüks, minimal bakım ve geleneksel değer arayanlar için idealdir." },
    faq: { heading: "Sıkça Sorulan Sorular", items: [
      { q: "Gümüş ve altın birlikte takılır mı?", a: "Kesinlikle! Mixed-metal trendi son yıllarda oldukça popüler. Farklı tonlardaki metalleri katmanlayarak modern ve kişisel bir stil oluşturabilirsiniz." },
      { q: "Yatırım için hangisi daha iyi?", a: "Altın daha istikrarlı ve güvenli bir yatırımdır. Gümüş daha volatildir ama yükseliş dönemlerinde yüzdesel olarak daha fazla kazandırabilir. Portföy çeşitlendirmesi için ikisini birlikte bulundurmak önerilir." },
      { q: "Alerji riski hangisinde daha fazla?", a: "24K altın hipoalerjenik kabul edilir. 925 gümüşteki bakır nadiren alerji yapabilir. Her iki durumda da rodaj kaplama alerji riskini azaltır." },
    ]},
    sources: { heading: "Kaynaklar", items: [
      "The Silver Institute — \"World Silver Survey 2025\"",
      "World Gold Council — \"Gold Demand Trends Q4 2025\"",
      "London Bullion Market Association — Tarihî Fiyat Verileri",
      "Gemological Institute of America — Metal Comparison Guide",
    ]},
    related: { heading: "İlgili Konular", items: [
      { title: "925 Ayar Nedir?", path: "/tr/uretim/925-ayar", cat: "Üretim" },
      { title: "Gümüş Yatırım Rehberi", path: "/tr/piyasa/yatirim", cat: "Piyasa" },
      { title: "Gümüş Bakım Rehberi", path: "/tr/uretim/bakim", cat: "Üretim" },
    ]},
    sponsor: { text: "925 ayar gümüşten üretilmiş, altın kadar zarif tasarımları keşfedin.", cta: "Instagram'da Gör", note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir." },
    silver: "Gümüş", gold: "Altın", toc: "İçindekiler",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Fashion", "Silver vs Gold"],
    category: "Fashion", title: "Silver vs Gold",
    subtitle: "Comprehensive comparison: physical properties, price, investment, style, and care",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "9 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Humanity's two oldest precious metals — silver and gold. One the moon's metal, the other the sun's. From jewelry selection to investment decisions, chemical properties to cultural meaning, these two metals are constantly compared.",
        "In this guide, we place silver and gold side by side in 11 different categories, evaluating the advantages and disadvantages of each with objective data.",
      ]},
      { id: "table", heading: "Comparison Table", paragraphs: ["The table below compares the fundamental physical, chemical, and economic properties of silver and gold:"], widget: "compare" },
      { id: "style", heading: "Style and Aesthetics", paragraphs: [
        "Silver tends to complement cool-toned skin (winter and summer types) better, while gold shines brighter on warm-toned skin (spring and autumn types). However, this rule isn't absolute — personal preference and styling matter.",
        "Silver jewelry offers a minimal, modern, and edgy aesthetic. Gold conveys a classic, luxurious, and traditional feel. The mixed-metal trend combining both metals has become quite popular in recent years.",
        "In men's accessories, silver is traditionally more common — rings, bracelets, and cufflinks. Gold dominates women's jewelry, especially in wedding and engagement traditions.",
      ]},
      { id: "investment", heading: "Investment Perspective", paragraphs: [
        "Gold has historically been the 'safe haven' investment vehicle. Silver has dual nature as both precious and industrial metal — making it more volatile but potentially more profitable.",
        "The historical average of the Gold/Silver Ratio is around ~60. When this ratio rises above 80, silver is considered 'cheap'; below 40, 'expensive.'",
        "Silver's industrial demand dimension (solar panels, electronics, medicine) provides significant long-term price support. Gold's industrial use is very limited.",
      ]},
      { id: "care", heading: "Care Comparison", paragraphs: [
        "Silver's biggest disadvantage is its tendency to tarnish. It reacts with sulfur compounds in the air, forming a dark patina over time. Regular cleaning and proper storage are required.",
        "Gold virtually never reacts — maintaining its original luster even after years. Gold wins in terms of care by a wide margin.",
        "However, silver's tarnishing can actually be valued as a character trait. Especially in oxidized (antiqued) silver jewelry, this patina is a desired aesthetic effect.",
      ]},
    ],
    silverPros: { heading: "Silver Advantages", items: ["Affordable — ~80x cheaper than gold", "Highest electrical conductivity", "Modern, minimal aesthetic", "Strong industrial demand", "Antimicrobial properties", "Larger/showier pieces at affordable prices"] },
    silverCons: { heading: "Silver Disadvantages", items: ["Tarnishing — requires regular care", "Lower prestige perception vs gold", "Lower density — lighter at same size", "925 copper allergy risk (rare)"] },
    goldPros: { heading: "Gold Advantages", items: ["No tarnishing — minimal care", "High prestige and cultural value", "Safe haven investment", "Hypoallergenic (24K)", "Traditional wedding/engagement metal"] },
    goldCons: { heading: "Gold Disadvantages", items: ["Very high price", "Limited industrial use", "24K too soft — alloy needed for jewelry", "Heavy (about 2x heavier than silver at same size)"] },
    verdict: { heading: "Verdict", text: "There's no single answer to the silver vs gold question. Budget, style preference, care willingness, and intended use are the deciding factors. Silver is an excellent choice for those seeking high aesthetics at an affordable price, who love modern style, and appreciate industrial value. Gold is ideal for those seeking timeless luxury, minimal care, and traditional value." },
    faq: { heading: "Frequently Asked Questions", items: [
      { q: "Can silver and gold be worn together?", a: "Absolutely! The mixed-metal trend has been very popular in recent years. You can create a modern, personal style by layering metals in different tones." },
      { q: "Which is better for investment?", a: "Gold is a more stable and secure investment. Silver is more volatile but can yield higher percentage returns in bull markets. Holding both for portfolio diversification is recommended." },
      { q: "Which has higher allergy risk?", a: "24K gold is considered hypoallergenic. The copper in 925 silver can rarely cause allergies. In both cases, rhodium plating reduces allergy risk." },
    ]},
    sources: { heading: "Sources", items: [
      "The Silver Institute — \"World Silver Survey 2025\"",
      "World Gold Council — \"Gold Demand Trends Q4 2025\"",
      "London Bullion Market Association — Historical Price Data",
      "Gemological Institute of America — Metal Comparison Guide",
    ]},
    related: { heading: "Related Topics", items: [
      { title: "What is 925 Sterling Silver?", path: "/en/manufacturing/925", cat: "Manufacturing" },
      { title: "Silver Investment Guide", path: "/en/market/investment", cat: "Market" },
      { title: "Silver Care Guide", path: "/en/manufacturing/care", cat: "Manufacturing" },
    ]},
    sponsor: { text: "Discover designs as elegant as gold, crafted from 925 sterling silver.", cta: "View on Instagram", note: "This content is sponsored by İstanbul Gümüş." },
    silver: "Silver", gold: "Gold", toc: "Contents",
  },
  ar: {
    nav: "أطلس الفضة", navSub: "منصة المعرفة الفضية",
    breadcrumb: ["الرئيسية", "الموضة", "الفضة أم الذهب؟"],
    category: "الموضة", title: "الفضة أم الذهب؟",
    subtitle: "مقارنة شاملة: الخصائص الفيزيائية والسعر والاستثمار والأسلوب والعناية",
    meta: { author: "علي جتينكايا", date: "٥ أبريل ٢٠٢٦", readTime: "٩ دقائق قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "أقدم معدنين ثمينين في تاريخ البشرية — الفضة والذهب. أحدهما معدن القمر والآخر معدن الشمس. من اختيار المجوهرات إلى قرارات الاستثمار، يُقارن هذان المعدنان باستمرار.",
        "في هذا الدليل، نضع الفضة والذهب جنباً إلى جنب في 11 فئة مختلفة، ونقيّم مزايا وعيوب كل منهما ببيانات موضوعية.",
      ]},
      { id: "table", heading: "جدول المقارنة", paragraphs: ["يقارن الجدول أدناه الخصائص الفيزيائية والكيميائية والاقتصادية الأساسية للفضة والذهب:"], widget: "compare" },
      { id: "style", heading: "الأسلوب والجماليات", paragraphs: [
        "الفضة تتناسب أكثر مع درجات البشرة الباردة، بينما الذهب يتألق على البشرة الدافئة. لكن هذه القاعدة ليست مطلقة.",
        "مجوهرات الفضة تقدم جمالية عصرية وبسيطة. الذهب يعطي إحساساً كلاسيكياً وفاخراً. اتجاه المعادن المختلطة أصبح شائعاً في السنوات الأخيرة.",
        "في إكسسوارات الرجال، الفضة أكثر شيوعاً تقليدياً. الذهب يهيمن على مجوهرات النساء، خاصة في تقاليد الزفاف.",
      ]},
      { id: "investment", heading: "منظور الاستثمار", paragraphs: [
        "الذهب كان تاريخياً أداة استثمار 'الملاذ الآمن'. الفضة تتمتع بطبيعة مزدوجة كمعدن ثمين وصناعي.",
        "المتوسط التاريخي لنسبة الذهب/الفضة حوالي 60. عندما ترتفع فوق 80، تُعتبر الفضة 'رخيصة'.",
        "بُعد الطلب الصناعي للفضة (الألواح الشمسية، الإلكترونيات، الطب) يوفر دعماً مهماً للأسعار على المدى الطويل.",
      ]},
      { id: "care", heading: "مقارنة العناية", paragraphs: [
        "أكبر عيوب الفضة هو ميلها للتأكسد. تتفاعل مع مركبات الكبريت في الهواء مشكّلة طبقة داكنة مع الوقت.",
        "الذهب لا يتفاعل تقريباً أبداً — يحافظ على لمعانه الأصلي حتى بعد سنوات.",
        "لكن تأكسد الفضة يمكن اعتباره سمة جمالية، خاصة في المجوهرات الفضية المؤكسدة (العتيقة).",
      ]},
    ],
    silverPros: { heading: "مزايا الفضة", items: ["ميسورة التكلفة — أرخص بـ80 مرة من الذهب", "أعلى توصيل كهربائي", "جمالية عصرية", "طلب صناعي قوي", "خصائص مضادة للميكروبات", "قطع أكبر بأسعار معقولة"] },
    silverCons: { heading: "عيوب الفضة", items: ["التأكسد — يتطلب عناية منتظمة", "تصور هيبة أقل مقارنة بالذهب", "كثافة أقل", "خطر حساسية النحاس (نادر)"] },
    goldPros: { heading: "مزايا الذهب", items: ["لا تأكسد — عناية قليلة", "هيبة عالية وقيمة ثقافية", "استثمار ملاذ آمن", "مضاد للحساسية (24K)", "معدن الزفاف التقليدي"] },
    goldCons: { heading: "عيوب الذهب", items: ["سعر مرتفع جداً", "استخدام صناعي محدود", "24K لين جداً", "ثقيل"] },
    verdict: { heading: "الحكم", text: "لا توجد إجابة واحدة لسؤال الفضة أم الذهب. الميزانية وتفضيل الأسلوب والرغبة في العناية والغرض من الاستخدام هي العوامل الحاسمة." },
    faq: { heading: "الأسئلة الشائعة", items: [
      { q: "هل يمكن ارتداء الفضة والذهب معاً؟", a: "بالتأكيد! اتجاه المعادن المختلطة شائع جداً. يمكنك إنشاء أسلوب شخصي عصري بطبقات المعادن المختلفة." },
      { q: "أيهما أفضل للاستثمار؟", a: "الذهب أكثر استقراراً وأماناً. الفضة أكثر تقلباً لكنها قد تحقق عوائد نسبية أعلى في فترات الصعود." },
      { q: "أيهما يسبب حساسية أكثر؟", a: "الذهب 24K مضاد للحساسية. النحاس في الفضة 925 قد يسبب حساسية نادراً. طلاء الروديوم يقلل المخاطر." },
    ]},
    sources: { heading: "المصادر", items: [
      "معهد الفضة — \"مسح الفضة العالمي 2025\"",
      "مجلس الذهب العالمي — \"اتجاهات الطلب 2025\"",
      "جمعية سوق السبائك في لندن — بيانات الأسعار التاريخية",
      "المعهد الجيمولوجي الأمريكي — دليل مقارنة المعادن",
    ]},
    related: { heading: "مواضيع ذات صلة", items: [
      { title: "ما هو عيار 925؟", path: "/ar/uretim/925", cat: "الإنتاج" },
      { title: "دليل استثمار الفضة", path: "/ar/piyasa/yatirim", cat: "السوق" },
      { title: "دليل العناية بالفضة", path: "/ar/uretim/bakim", cat: "الإنتاج" },
    ]},
    sponsor: { text: "اكتشف تصاميم أنيقة كالذهب مصنوعة من الفضة عيار 925.", cta: "شاهد على إنستغرام", note: "هذا المحتوى برعاية إسطنبول غوموش." },
    silver: "الفضة", gold: "الذهب", toc: "المحتويات",
  },
};

export default function SilverVsGoldArticle() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const t = T[lang]; const isRTL = lang === "ar";
  const fontD = "'Playfair Display', Georgia, serif";
  const fontB = lang === "ar" ? "'Noto Naskh Arabic', 'Source Sans 3', sans-serif" : "'Source Sans 3', 'Segoe UI', sans-serif";
  const bg = dark ? "#0f0f14" : "#FAFAF5";
  const bgCard = dark ? "#16161e" : "#ffffff";
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const border = dark ? "rgba(192,192,192,0.08)" : "rgba(0,0,0,0.06)";
  const accent = "#C0C0C0"; const goldC = "#D4AF37";

  const CompareWidget = () => (
    <div style={{ overflowX: "auto", margin: "16px 0 28px", borderRadius: 12, border: `1px solid ${border}` }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr style={{ borderBottom: `2px solid ${border}` }}>
            <th style={{ padding: "12px 16px", textAlign: isRTL ? "right" : "left", color: textS, fontWeight: 500, fontSize: 11 }}></th>
            <th style={{ padding: "12px 16px", textAlign: "center", color: accent, fontWeight: 700, fontSize: 14, fontFamily: fontD }}>🥈 {t.silver}</th>
            <th style={{ padding: "12px 16px", textAlign: "center", color: goldC, fontWeight: 700, fontSize: 14, fontFamily: fontD }}>🥇 {t.gold}</th>
          </tr>
        </thead>
        <tbody>
          {COMPARE_DATA.map((row, i) => (
            <tr key={row.key} style={{ borderBottom: `1px solid ${border}`, background: i % 2 === 0 ? "transparent" : (dark ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.015)") }}>
              <td style={{ padding: "10px 16px", color: textS, fontWeight: 500, fontSize: 12, whiteSpace: "nowrap" }}>
                <span style={{ marginRight: 6 }}>{row.icon}</span>
                {FIELD_LABELS[row.key]?.[lang] || row.key}
              </td>
              <td style={{ padding: "10px 16px", textAlign: "center", color: textP }}>{row[lang]?.[0]}</td>
              <td style={{ padding: "10px 16px", textAlign: "center", color: textP }}>{row[lang]?.[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const ProsCons = ({ data, color, icon }) => (
    <div style={{ border: `1px solid ${color}22`, borderRadius: 12, padding: "16px 20px", marginBottom: 12, background: dark ? color + "06" : color + "04" }}>
      <h4 style={{ fontSize: 14, fontWeight: 600, color, marginBottom: 10 }}>{icon} {data.heading}</h4>
      {data.items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: textS, lineHeight: 1.6, marginBottom: 4 }}>
          <span style={{ color, flexShrink: 0 }}>•</span><span>{item}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div dir={isRTL?"rtl":"ltr"} style={{ minHeight:"100vh", background:bg, color:textP, fontFamily:fontB, transition:"all 0.3s" }}>
      <header style={{ borderBottom:`1px solid ${border}`, padding:"12px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", background:dark?"#0c0c10":"#f5f5f0", position:"sticky", top:0, zIndex:100 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:28, height:28, borderRadius:"50%", background:`linear-gradient(135deg,${accent},${goldC})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:"#0f0f14", fontFamily:fontD }}>Ag</div>
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
        <div style={{ display:"flex", gap:8, fontSize:12, color:textS, marginBottom:20, flexWrap:"wrap" }}>
          {t.breadcrumb.map((b,i) => (
            <span key={i} style={{ display:"flex", alignItems:"center", gap:8 }}>
              {i>0 && <span style={{ color:border, fontSize:10 }}>{isRTL?"‹":"›"}</span>}
              <span style={{ color:i===t.breadcrumb.length-1?goldC:textS }}>{b}</span>
            </span>
          ))}
        </div>
        <div style={{ display:"inline-block", padding:"4px 14px", borderRadius:6, background:goldC+"15", color:goldC, fontSize:11, fontWeight:600, marginBottom:16 }}>{t.category}</div>
        <h1 style={{ fontFamily:fontD, fontSize:32, fontWeight:700, lineHeight:1.2, marginBottom:10 }}>{t.title}</h1>
        <p style={{ fontSize:16, color:textS, lineHeight:1.5, marginBottom:20 }}>{t.subtitle}</p>
        <div style={{ display:"flex", gap:16, fontSize:12, color:textS, marginBottom:32, paddingBottom:20, borderBottom:`1px solid ${border}`, flexWrap:"wrap" }}>
          <span>✍️ {t.meta.author}</span><span>📅 {t.meta.date}</span><span>⏱️ {t.meta.readTime}</span>
        </div>

        {t.sections.map((sec, si) => (
          <section key={si} id={sec.id} style={{ marginBottom: 36 }}>
            {sec.heading && <h2 style={{ fontFamily:fontD, fontSize:22, fontWeight:600, marginBottom:14, paddingTop: si > 1 ? 28 : 0, borderTop: si > 1 ? `1px solid ${border}` : "none" }}>{sec.heading}</h2>}
            {sec.paragraphs.map((p, pi) => (
              <p key={pi} style={{ fontSize:15, lineHeight:1.85, color:textS, marginBottom:14, textAlign:"justify" }}>{p}</p>
            ))}
            {sec.widget === "compare" && <CompareWidget />}
          </section>
        ))}

        {/* Pros / Cons Grid */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:32 }}>
          <ProsCons data={t.silverPros} color={accent} icon="🥈" />
          <ProsCons data={t.silverCons} color="#E8A0BF" icon="⚠️" />
          <ProsCons data={t.goldPros} color={goldC} icon="🥇" />
          <ProsCons data={t.goldCons} color="#E8A0BF" icon="⚠️" />
        </div>

        {/* Verdict */}
        <div style={{ border:`1px solid ${accent}22`, borderRadius:16, padding:"24px", background:dark?"rgba(192,192,192,0.03)":"rgba(0,0,0,0.02)", marginBottom:36 }}>
          <h3 style={{ fontFamily:fontD, fontSize:18, fontWeight:600, marginBottom:10 }}>{t.verdict.heading}</h3>
          <p style={{ fontSize:14, lineHeight:1.8, color:textS }}>{t.verdict.text}</p>
        </div>

        {/* FAQ */}
        <section style={{ marginBottom:36 }}>
          <h2 style={{ fontFamily:fontD, fontSize:24, fontWeight:600, marginBottom:20 }}>{t.faq.heading}</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {t.faq.items.map((item,i) => (
              <div key={i} style={{ border:`1px solid ${openFaq===i?goldC+"44":border}`, borderRadius:12, overflow:"hidden", background:openFaq===i?(dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.04)"):"transparent" }}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{ width:"100%", border:"none", cursor:"pointer", background:"transparent", padding:"16px 20px", display:"flex", alignItems:"center", justifyContent:"space-between", color:textP, fontSize:14, fontWeight:500, fontFamily:fontB, textAlign:isRTL?"right":"left", gap:12 }}>
                  <span style={{ flex:1 }}>{item.q}</span>
                  <span style={{ fontSize:18, color:textS, transform:openFaq===i?"rotate(45deg)":"rotate(0)", transition:"transform 0.3s", flexShrink:0 }}>+</span>
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
                <div style={{ fontSize:10, color:goldC, fontWeight:600, marginBottom:6 }}>{item.cat}</div>
                <div style={{ fontSize:14, fontWeight:500, color:textP }}>{item.title}</div>
                <div style={{ fontSize:12, color:textS, marginTop:6 }}>{isRTL?"←":"→"}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Sponsor */}
        <div style={{ border:`1px solid ${goldC}22`, borderRadius:16, padding:"28px 24px", background:dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.05)", textAlign:"center" }}>
          <p style={{ fontSize:15, color:textP, marginBottom:16, lineHeight:1.6 }}>{t.sponsor.text}</p>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"10px 24px", borderRadius:10, background:`linear-gradient(135deg,${accent},${goldC})`, color:"#0f0f14", fontSize:13, fontWeight:600, textDecoration:"none" }}>📸 {t.sponsor.cta}</a>
          <p style={{ fontSize:11, color:textS, marginTop:14, opacity:0.7 }}>{t.sponsor.note}</p>
        </div>
      </article>

      <footer style={{ borderTop:`1px solid ${border}`, padding:"24px", textAlign:"center", background:dark?"#0c0c10":"#f5f5f0" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginBottom:8 }}>
          <div style={{ width:22, height:22, borderRadius:"50%", background:`linear-gradient(135deg,${accent},${goldC})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, fontWeight:700, color:"#0f0f14", fontFamily:fontD }}>Ag</div>
          <span style={{ fontFamily:fontD, fontWeight:600, fontSize:14 }}>{t.nav}</span>
        </div>
        <p style={{ fontSize:11, color:textS }}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p>
      </footer>
    </div>
  );
}
