import { useState, useEffect, useRef } from "react";

// ─── i18n ────────────────────────────────────────────────
const T = {
  tr: {
    nav: "SilverAtlas",
    navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Üretim", "925 Ayar Nedir?"],
    category: "Üretim",
    title: "925 Ayar Gümüş Nedir?",
    subtitle: "Sterling gümüşün standartları, alaşım bileşimleri ve ayar damgası rehberi",
    meta: { author: "Turan Erbaş", date: "15 Nisan 2026", readTime: "8 dk okuma" },
    sections: [
      {
        id: "intro",
        heading: null,
        paragraphs: [
          "Bir takı mağazasında ya da online alışverişte "925" damgasını gördüğünüzde, bu sayı gümüşün saflık derecesini ifade eder. 925 ayar gümüş — uluslararası adıyla sterling silver — binde 925 oranında saf gümüş (Ag) ve binde 75 oranında alaşım metali (genellikle bakır) içerir.",
          "Bu alaşım oranı tesadüfî değildir; saf gümüş (999 ayar) çok yumuşak olduğundan takı üretiminde tek başına kullanılamaz. Bakır eklenmesi gümüşe dayanıklılık kazandırırken, gümüşün doğal parlaklığını ve işlenebilirliğini korur. Bu denge, 925 ayarı dünya genelinde takı endüstrisinin altın standardı hâline getirmiştir.",
        ],
      },
      {
        id: "neden-925",
        heading: "Neden Tam Olarak 925?",
        paragraphs: [
          "Gümüş-bakır alaşımında %7,5 bakır oranı, metalürjik açıdan bir optimum noktasıdır. Bu oranın altında gümüş hâlâ çok yumuşaktır; üzerinde ise renk değişimi belirginleşir ve karartma (tarnish) hızlanır.",
          "İngiltere'de 12. yüzyıldan itibaren sikke basımında kullanılan bu standart, zamanla tüm dünyada takı ve gümüş eşya üretiminin temel ölçüsü olmuştur. 'Sterling' kelimesi de İngiliz sterlini (pound sterling) ile aynı kökten gelir — paranın güvenilirliği, gümüşün saflığına dayanıyordu.",
        ],
      },
      {
        id: "ayar-turleri",
        heading: "Gümüş Ayar Türleri Karşılaştırması",
        paragraphs: [
          "Piyasada farklı ayar değerlerinde gümüş ürünler bulunur. Her birinin kendine özgü avantaj ve dezavantajları vardır:",
        ],
        table: {
          headers: ["Ayar", "Saflık", "Bakır Oranı", "Kullanım Alanı", "Dayanıklılık"],
          rows: [
            ["999", "%99,9", "%0,1", "Külçe, yatırım", "Çok düşük"],
            ["970", "%97,0", "%3,0", "Sanat eserleri", "Düşük"],
            ["950 (Britannia)", "%95,0", "%5,0", "Özel takı, İngiliz geleneği", "Orta"],
            ["925 (Sterling)", "%92,5", "%7,5", "Takı endüstrisi standardı", "Yüksek"],
            ["900 (Coin Silver)", "%90,0", "%10,0", "Sikke, antika eşya", "Çok yüksek"],
            ["800", "%80,0", "%20,0", "Kıta Avrupası antika eşya", "En yüksek"],
          ],
        },
      },
      {
        id: "hesaplayici",
        heading: "İnteraktif Ayar Hesaplayıcı",
        paragraphs: [
          "Aşağıdaki hesaplayıcı ile herhangi bir ayar değerinin saf gümüş ve alaşım oranlarını anında görebilirsiniz:",
        ],
        widget: "calculator",
      },
      {
        id: "damga",
        heading: "Ayar Damgası Nasıl Okunur?",
        paragraphs: [
          "Türkiye'de gümüş ürünlere Darphane ve Damga Matbaası Genel Müdürlüğü tarafından ayar damgası vurulur. Damga, ürünün iç yüzeyinde — yüzüklerde halka içi, kolyede kilit mekanizması yanı — küçük bir kabartma olarak bulunur.",
          "Uluslararası damga sistemleri ülkeden ülkeye değişir: İngiltere'de aslan figürü (lion passant) 925 ayarı simgeler; Fransa'da Minerva başı kullanılır. Türkiye'de ise sayısal değer (925) ve üretici firma kodu birlikte damgalanır.",
          "Damganın varlığı, ürünün laboratuvar testinden geçtiğinin ve beyan edilen ayar değerine sahip olduğunun resmî kanıtıdır. Damgasız ürünlerde ayar garantisi bulunmaz.",
        ],
      },
      {
        id: "bakim",
        heading: "925 Ayar Gümüş Bakımı",
        paragraphs: [
          "Sterling gümüşün en bilinen özelliklerinden biri zamanla kararmasıdır (tarnish). Bu, gümüşün havadaki kükürt bileşikleriyle tepkimeye girmesinden kaynaklanır — bir kalite sorunu değil, doğal bir kimyasal süreçtir.",
        ],
        tips: [
          "Takılarınızı kullanmadığınız zamanlarda hava almayan poşetlerde saklayın",
          "Parfüm, losyon ve temizlik ürünlerini sürdükten sonra takın — önce değil",
          "Hafif kararmalarda yumuşak bir gümüş bezi ile silin",
          "Derin karartmalarda karbonat + alüminyum folyo yöntemi etkilidir",
          "Ultrasonik temizleyiciler taşlı takılara zarar verebilir — dikkatli olun",
        ],
      },
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        {
          q: "925 ayar gümüş alerji yapar mı?",
          a: "Sterling gümüş genellikle hipoalerjenik kabul edilir. Ancak alaşımdaki bakır veya nadiren nikel, hassas ciltlerde reaksiyona yol açabilir. Rodaj kaplama bu riski azaltır.",
        },
        {
          q: "925 gümüş suya dayanıklı mıdır?",
          a: "Kısa süreli temas sorun oluşturmaz, ancak sürekli su teması (havuz, deniz, duş) kararma sürecini hızlandırır. Yüzme ve banyo öncesi çıkarmanız önerilir.",
        },
        {
          q: "925 ile 950 ayar arasındaki fark nedir?",
          a: "950 ayar (Britannia silver) daha yüksek saflık sunar (%95 Ag) ancak daha yumuşaktır. Günlük kullanım takıları için 925 ayar hem dayanıklılık hem estetik açıdan tercih edilir.",
        },
        {
          q: "Gümüşün 925 olduğunu nasıl test edebilirim?",
          a: "Profesyonel yöntemler arasında XRF analizi, mihenk taşı testi ve asit testi bulunur. Evde ise mıknatıs testi (gümüş manyetik değildir) ve ayar damgası kontrolü ilk adımlardır.",
        },
        {
          q: "14K altın kaplama gümüş (vermeil) nedir?",
          a: "Vermeil, 925 ayar gümüş taban üzerine en az 2.5 mikron kalınlığında altın kaplama yapılmasıdır. Gümüşün uygun fiyatını altının görünümüyle birleştirir.",
        },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "Türk Standartları Enstitüsü — TS 2174: Gümüş Alaşımları",
        "Britannica — \"Sterling Silver\" maddesi",
        "Darphane ve Damga Matbaası Genel Müdürlüğü — Ayar Damgası Yönetmeliği",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "Gümüş Bakımı Rehberi", path: "/tr/uretim/bakim", cat: "Üretim" },
        { title: "Gümüş mü Altın mı?", path: "/tr/moda/gumus-vs-altin", cat: "Moda" },
        { title: "Telkâri Nedir?", path: "/tr/uretim/geleneksel", cat: "Üretim" },
      ],
    },
    sponsor: {
      text: "925 ayar gümüşten üretilmiş güncel tasarımları keşfedin.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    calc: {
      title: "Ayar Hesaplayıcı",
      inputLabel: "Ayar Değeri",
      pureSilver: "Saf Gümüş (Ag)",
      alloyMetal: "Alaşım Metali (Cu)",
      weight: "Ürün Ağırlığı (gram)",
      silverWeight: "Saf Gümüş Miktarı",
      alloyWeight: "Alaşım Miktarı",
      presets: "Hazır Ayarlar",
    },
    darkMode: "Mod",
    toc: "İçindekiler",
  },
  en: {
    nav: "SilverAtlas",
    navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Manufacturing", "What is 925 Sterling Silver?"],
    category: "Manufacturing",
    title: "What is 925 Sterling Silver?",
    subtitle: "Sterling silver standards, alloy compositions, and hallmark guide",
    meta: { author: "Turan Erbaş", date: "April 15, 2026", readTime: "8 min read" },
    sections: [
      {
        id: "intro",
        heading: null,
        paragraphs: [
          "When you see the \"925\" stamp on a piece of jewelry, this number indicates the purity of the silver. 925 silver — internationally known as sterling silver — contains 92.5% pure silver (Ag) and 7.5% alloy metal, typically copper.",
          "This ratio is no accident; pure silver (999 fineness) is too soft for jewelry production on its own. Adding copper gives silver durability while preserving its natural luster and workability. This balance has made 925 the gold standard of the jewelry industry worldwide.",
        ],
      },
      {
        id: "why-925",
        heading: "Why Exactly 925?",
        paragraphs: [
          "In silver-copper alloys, the 7.5% copper ratio represents a metallurgical sweet spot. Below this, silver remains too soft; above it, color changes become noticeable and tarnishing accelerates.",
          "Used in English coinage from the 12th century onward, this standard gradually became the universal benchmark for jewelry and silverware. The word 'sterling' itself shares roots with the British pound sterling — the currency's reliability was built on silver's purity.",
        ],
      },
      {
        id: "purity-types",
        heading: "Silver Purity Grades Compared",
        paragraphs: [
          "Various purity grades of silver products exist in the market, each with distinct advantages and trade-offs:",
        ],
        table: {
          headers: ["Grade", "Purity", "Copper", "Application", "Durability"],
          rows: [
            ["999", "99.9%", "0.1%", "Bullion, investment", "Very low"],
            ["970", "97.0%", "3.0%", "Art objects", "Low"],
            ["950 (Britannia)", "95.0%", "5.0%", "Special jewelry", "Medium"],
            ["925 (Sterling)", "92.5%", "7.5%", "Industry standard", "High"],
            ["900 (Coin Silver)", "90.0%", "10.0%", "Coins, antiques", "Very high"],
            ["800", "80.0%", "20.0%", "Continental antiques", "Highest"],
          ],
        },
      },
      {
        id: "calculator",
        heading: "Interactive Purity Calculator",
        paragraphs: [
          "Use the calculator below to instantly see the pure silver and alloy ratios for any fineness value:",
        ],
        widget: "calculator",
      },
      {
        id: "hallmark",
        heading: "How to Read a Hallmark",
        paragraphs: [
          "In Turkey, silver products are hallmarked by the General Directorate of the Mint. The stamp is found on the inner surface — inside the band of rings, near the clasp of necklaces — as a small raised mark.",
          "International hallmark systems vary: in England, a walking lion (lion passant) signifies 925; France uses the head of Minerva. In Turkey, the numerical value (925) is stamped alongside the manufacturer code.",
          "The presence of a hallmark is official proof that the product has been laboratory-tested and meets the declared purity. Products without hallmarks carry no purity guarantee.",
        ],
      },
      {
        id: "care",
        heading: "Caring for 925 Sterling Silver",
        paragraphs: [
          "One of sterling silver's best-known traits is tarnishing over time. This results from silver reacting with sulfur compounds in the air — it's a natural chemical process, not a quality defect.",
        ],
        tips: [
          "Store jewelry in airtight pouches when not wearing",
          "Apply perfume and lotion before putting on jewelry — not after",
          "Use a soft silver cloth for light tarnish",
          "For heavy tarnish, the baking soda + aluminum foil method works well",
          "Ultrasonic cleaners can damage gemstone-set pieces — use with caution",
        ],
      },
    ],
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Is 925 silver hypoallergenic?", a: "Sterling silver is generally considered hypoallergenic. However, copper or trace nickel in the alloy may cause reactions in sensitive skin. Rhodium plating reduces this risk." },
        { q: "Is 925 silver waterproof?", a: "Brief contact is fine, but prolonged exposure (pool, ocean, shower) accelerates tarnishing. Remove before swimming or bathing." },
        { q: "What's the difference between 925 and 950?", a: "950 (Britannia silver) offers higher purity (95% Ag) but is softer. For everyday jewelry, 925 strikes the best balance of durability and aesthetics." },
        { q: "How can I test if silver is 925?", a: "Professional methods include XRF analysis, touchstone testing, and acid tests. At home, a magnet test (silver isn't magnetic) and hallmark check are good first steps." },
        { q: "What is gold-plated silver (vermeil)?", a: "Vermeil is 925 sterling silver base coated with at least 2.5 microns of gold. It combines silver's affordability with gold's appearance." },
      ],
    },
    sources: {
      heading: "Sources",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "Turkish Standards Institute — TS 2174: Silver Alloys",
        "Britannica — \"Sterling Silver\"",
        "Turkish Mint — Hallmark Regulations",
      ],
    },
    related: {
      heading: "Related Topics",
      items: [
        { title: "Silver Care Guide", path: "/en/manufacturing/care", cat: "Manufacturing" },
        { title: "Silver vs Gold", path: "/en/fashion/silver-vs-gold", cat: "Fashion" },
        { title: "What is Filigree?", path: "/en/manufacturing/traditional", cat: "Manufacturing" },
      ],
    },
    sponsor: {
      text: "Discover current designs crafted from 925 sterling silver.",
      cta: "View on Instagram",
      note: "This content is supported by İstanbul Gümüş.",
    },
    calc: {
      title: "Purity Calculator",
      inputLabel: "Fineness Value",
      pureSilver: "Pure Silver (Ag)",
      alloyMetal: "Alloy Metal (Cu)",
      weight: "Product Weight (grams)",
      silverWeight: "Pure Silver Amount",
      alloyWeight: "Alloy Amount",
      presets: "Quick Presets",
    },
    darkMode: "Mode",
    toc: "Contents",
  },
  ar: {
    nav: "أطلس الفضة",
    navSub: "منصة معرفة الفضة",
    breadcrumb: ["الرئيسية", "الصناعة", "ما هي الفضة الاسترلينية 925؟"],
    category: "الصناعة",
    title: "ما هي الفضة الاسترلينية 925؟",
    subtitle: "معايير الفضة الاسترلينية وتركيبات السبائك ودليل الدمغات",
    meta: { author: "علي جتينكايا", date: "١٥ أبريل ٢٠٢٦", readTime: "٨ دقائق قراءة" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "عندما ترى الرقم \"925\" على قطعة مجوهرات، فإن هذا الرقم يشير إلى درجة نقاء الفضة. الفضة عيار 925 — المعروفة دولياً بالفضة الاسترلينية — تحتوي على 92.5% من الفضة النقية (Ag) و7.5% من معدن السبيكة، عادةً النحاس.",
          "هذه النسبة ليست عشوائية؛ فالفضة النقية (عيار 999) طرية جداً لاستخدامها وحدها في صناعة المجوهرات. إضافة النحاس تمنح الفضة المتانة مع الحفاظ على لمعانها الطبيعي وقابليتها للتشكيل.",
        ],
      },
      {
        id: "why-925", heading: "لماذا 925 تحديداً؟",
        paragraphs: [
          "في سبائك الفضة والنحاس، تمثل نسبة 7.5% من النحاس النقطة المثلى معدنياً. أقل من ذلك تبقى الفضة طرية جداً؛ وأكثر من ذلك تتغير اللون ويتسارع التأكسد.",
          "استُخدم هذا المعيار في سك العملات الإنجليزية منذ القرن الثاني عشر، وأصبح تدريجياً المقياس العالمي لصناعة المجوهرات والأواني الفضية.",
        ],
      },
      {
        id: "purity-types", heading: "مقارنة درجات نقاء الفضة",
        paragraphs: ["توجد في السوق منتجات فضية بدرجات نقاء مختلفة:"],
        table: {
          headers: ["العيار", "النقاء", "النحاس", "الاستخدام", "المتانة"],
          rows: [
            ["999", "99.9%", "0.1%", "سبائك، استثمار", "منخفضة جداً"],
            ["950", "95.0%", "5.0%", "مجوهرات خاصة", "متوسطة"],
            ["925", "92.5%", "7.5%", "المعيار الصناعي", "عالية"],
            ["900", "90.0%", "10.0%", "عملات، تحف", "عالية جداً"],
            ["800", "80.0%", "20.0%", "تحف أوروبية", "الأعلى"],
          ],
        },
      },
      {
        id: "calculator", heading: "حاسبة العيار التفاعلية",
        paragraphs: ["استخدم الحاسبة أدناه لمعرفة نسب الفضة النقية والسبيكة لأي قيمة عيار:"],
        widget: "calculator",
      },
      {
        id: "hallmark", heading: "كيف تقرأ دمغة العيار؟",
        paragraphs: [
          "في تركيا، تُدمغ المنتجات الفضية من قبل المديرية العامة لدار الضرب. توجد الدمغة على السطح الداخلي — داخل حلقة الخواتم، بجوار القفل في القلائد.",
          "تختلف أنظمة الدمغ الدولية: في إنجلترا يرمز الأسد الماشي إلى عيار 925؛ وفي فرنسا يُستخدم رأس مينيرفا. في تركيا تُدمغ القيمة الرقمية (925) مع رمز الشركة المصنعة.",
        ],
      },
      {
        id: "care", heading: "العناية بالفضة الاسترلينية 925",
        paragraphs: ["من أشهر خصائص الفضة الاسترلينية تأكسدها مع الوقت. ينتج هذا عن تفاعل الفضة مع مركبات الكبريت في الهواء — إنها عملية كيميائية طبيعية وليست عيباً."],
        tips: [
          "احفظ المجوهرات في أكياس محكمة عند عدم الارتداء",
          "ضع العطر والمرطب قبل ارتداء المجوهرات — وليس بعدها",
          "استخدم قطعة قماش ناعمة للتأكسد الخفيف",
          "للتأكسد العميق، طريقة البيكنغ صودا + ورق الألمنيوم فعالة",
          "أجهزة التنظيف بالموجات فوق الصوتية قد تضر القطع المرصعة بالأحجار",
        ],
      },
    ],
    faq: {
      heading: "الأسئلة الشائعة",
      items: [
        { q: "هل الفضة 925 مضادة للحساسية؟", a: "تُعتبر الفضة الاسترلينية عموماً مضادة للحساسية. لكن النحاس أو النيكل النادر في السبيكة قد يسبب تفاعلاً للبشرة الحساسة. طلاء الروديوم يقلل هذا الخطر." },
        { q: "هل الفضة 925 مقاومة للماء؟", a: "التلامس القصير لا يضر، لكن التعرض المطول يسرّع التأكسد. يُنصح بخلعها قبل السباحة أو الاستحمام." },
        { q: "ما الفرق بين 925 و950؟", a: "عيار 950 أنقى (95% فضة) لكنه أطرى. للاستخدام اليومي، عيار 925 يوفر أفضل توازن بين المتانة والجمال." },
      ],
    },
    sources: {
      heading: "المصادر",
      items: ["The Silver Institute — تقرير الفضة العالمي 2025", "معهد المعايير التركي — TS 2174", "الموسوعة البريطانية — مادة الفضة الاسترلينية"],
    },
    related: {
      heading: "مواضيع ذات صلة",
      items: [
        { title: "دليل العناية بالفضة", path: "/ar/صناعة/العناية", cat: "الصناعة" },
        { title: "الفضة أم الذهب؟", path: "/ar/موضة/الفضة-والذهب", cat: "الموضة" },
        { title: "ما هو الفيليغري؟", path: "/ar/صناعة/التقليدية", cat: "الصناعة" },
      ],
    },
    sponsor: {
      text: "اكتشف أحدث التصاميم المصنوعة من الفضة الاسترلينية 925.",
      cta: "شاهد على إنستغرام",
      note: "هذا المحتوى مدعوم من إسطنبول غوموش.",
    },
    calc: {
      title: "حاسبة العيار",
      inputLabel: "قيمة العيار",
      pureSilver: "الفضة النقية (Ag)",
      alloyMetal: "معدن السبيكة (Cu)",
      weight: "وزن المنتج (غرام)",
      silverWeight: "كمية الفضة النقية",
      alloyWeight: "كمية السبيكة",
      presets: "عيارات جاهزة",
    },
    darkMode: "الوضع",
    toc: "المحتويات",
  },
};

// ─── Calculator Widget ───────────────────────────────────
function PurityCalculator({ t, dark, isRTL }) {
  const [fineness, setFineness] = useState(925);
  const [weight, setWeight] = useState(10);
  const silverPct = fineness / 10;
  const alloyPct = 100 - silverPct;
  const silverWt = ((fineness / 1000) * weight).toFixed(2);
  const alloyWt = (((1000 - fineness) / 1000) * weight).toFixed(2);

  const presets = [800, 900, 925, 950, 970, 999];

  const accent = "#C0C0C0";
  const gold = "#D4AF37";
  const bgCard = dark ? "#1a1a24" : "#ffffff";
  const border = dark ? "rgba(192,192,192,0.12)" : "rgba(0,0,0,0.08)";
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";

  return (
    <div style={{
      background: bgCard, border: `1px solid ${border}`, borderRadius: 16,
      padding: 28, margin: "24px 0",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
        <span style={{ fontSize: 20 }}>⚖️</span>
        <span style={{ fontWeight: 600, fontSize: 16, color: textP }}>{t.calc.title}</span>
      </div>

      {/* Presets */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 11, color: textS, marginBottom: 8, fontWeight: 500 }}>{t.calc.presets}</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {presets.map(p => (
            <button key={p} onClick={() => setFineness(p)} style={{
              border: fineness === p ? `1.5px solid ${gold}` : `1px solid ${border}`,
              borderRadius: 8, padding: "5px 12px", cursor: "pointer",
              fontSize: 13, fontWeight: fineness === p ? 600 : 400,
              background: fineness === p ? (dark ? "rgba(212,175,55,0.1)" : "rgba(212,175,55,0.08)") : "transparent",
              color: fineness === p ? gold : textS,
              transition: "all 0.2s",
            }}>
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Sliders */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
        <div>
          <label style={{ fontSize: 12, color: textS, display: "block", marginBottom: 6 }}>{t.calc.inputLabel}</label>
          <input type="range" min={500} max={999} value={fineness}
            onChange={e => setFineness(+e.target.value)}
            style={{ width: "100%", accentColor: accent }} />
          <div style={{ fontSize: 28, fontWeight: 700, color: textP, fontFamily: "'Playfair Display', serif" }}>
            {fineness} <span style={{ fontSize: 14, fontWeight: 400, color: textS }}>/ 1000</span>
          </div>
        </div>
        <div>
          <label style={{ fontSize: 12, color: textS, display: "block", marginBottom: 6 }}>{t.calc.weight}</label>
          <input type="range" min={1} max={500} value={weight}
            onChange={e => setWeight(+e.target.value)}
            style={{ width: "100%", accentColor: gold }} />
          <div style={{ fontSize: 28, fontWeight: 700, color: textP, fontFamily: "'Playfair Display', serif" }}>
            {weight} <span style={{ fontSize: 14, fontWeight: 400, color: textS }}>g</span>
          </div>
        </div>
      </div>

      {/* Visual Bar */}
      <div style={{
        height: 32, borderRadius: 10, overflow: "hidden", marginBottom: 16,
        display: "flex", position: "relative",
        border: `1px solid ${border}`,
      }}>
        <div style={{
          width: `${silverPct}%`, height: "100%",
          background: `linear-gradient(90deg, ${accent}, #e0e0e0)`,
          transition: "width 0.4s ease",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, fontWeight: 600, color: "#1a1a2e",
        }}>
          Ag {silverPct.toFixed(1)}%
        </div>
        <div style={{
          width: `${alloyPct}%`, height: "100%",
          background: `linear-gradient(90deg, #b87333, #cd8c52)`,
          transition: "width 0.4s ease",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, fontWeight: 600, color: "#fff",
        }}>
          {alloyPct >= 5 ? `Cu ${alloyPct.toFixed(1)}%` : ""}
        </div>
      </div>

      {/* Results */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
      }}>
        <div style={{
          background: dark ? "rgba(192,192,192,0.05)" : "rgba(192,192,192,0.1)",
          borderRadius: 10, padding: "14px 16px", textAlign: "center",
        }}>
          <div style={{ fontSize: 11, color: textS, marginBottom: 4 }}>{t.calc.silverWeight}</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: accent, fontFamily: "'Playfair Display', serif" }}>
            {silverWt}g
          </div>
        </div>
        <div style={{
          background: dark ? "rgba(184,115,51,0.05)" : "rgba(184,115,51,0.1)",
          borderRadius: 10, padding: "14px 16px", textAlign: "center",
        }}>
          <div style={{ fontSize: 11, color: textS, marginBottom: 4 }}>{t.calc.alloyWeight}</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#cd8c52", fontFamily: "'Playfair Display', serif" }}>
            {alloyWt}g
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Article Component ──────────────────────────────
export default function Article925() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);
  const t = T[lang];
  const isRTL = lang === "ar";

  const bgP = dark ? "#0f0f14" : "#FAFAF5";
  const bgCard = dark ? "#1a1a24" : "#ffffff";
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const accent = dark ? "#C0C0C0" : "#708090";
  const gold = "#D4AF37";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const fontD = "'Playfair Display', Georgia, serif";
  const fontB = lang === "ar" ? "'Noto Naskh Arabic', serif" : "'Source Sans 3', sans-serif";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{
      fontFamily: fontB, background: bgP, color: textP, minHeight: "100vh",
      transition: "background 0.4s, color 0.4s",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        * { margin:0; padding:0; box-sizing:border-box; }
        ::selection { background: rgba(192,192,192,0.3); }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: dark ? "rgba(15,15,20,0.88)" : "rgba(250,250,245,0.88)",
        backdropFilter: "blur(20px)", borderBottom: `1px solid ${border}`,
        padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: `linear-gradient(135deg, ${accent}, ${gold})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 12, fontWeight: 700, color: "#0f0f14", fontFamily: fontD,
          }}>Ag</div>
          <span style={{ fontFamily: fontD, fontWeight: 600, fontSize: 16 }}>{t.nav}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            display: "flex", gap: 2, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
            borderRadius: 7, padding: 2,
          }}>
            {["tr", "en", "ar"].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                border: "none", cursor: "pointer", padding: "3px 9px", borderRadius: 5,
                fontSize: 11, fontWeight: lang === l ? 600 : 400,
                fontFamily: l === "ar" ? "'Noto Naskh Arabic', serif" : fontB,
                background: lang === l ? (dark ? "rgba(192,192,192,0.15)" : "rgba(0,0,0,0.08)") : "transparent",
                color: lang === l ? textP : textS, transition: "all 0.2s",
              }}>{l === "ar" ? "عر" : l.toUpperCase()}</button>
            ))}
          </div>
          <button onClick={() => setDark(!dark)} style={{
            border: "none", cursor: "pointer", background: "transparent",
            color: textS, fontSize: 16, padding: 4,
          }}>{dark ? "☀️" : "🌙"}</button>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{
        maxWidth: 760, margin: "0 auto", padding: "16px 24px 0",
        display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap",
        fontSize: 12, color: textS,
      }}>
        {t.breadcrumb.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {i > 0 && <span style={{ opacity: 0.4 }}>{isRTL ? "‹" : "›"}</span>}
            <a href="#" style={{
              color: i === t.breadcrumb.length - 1 ? textP : textS,
              textDecoration: "none", fontWeight: i === t.breadcrumb.length - 1 ? 500 : 400,
            }}>{item}</a>
          </span>
        ))}
      </div>

      {/* ARTICLE */}
      <article style={{
        maxWidth: 760, margin: "0 auto", padding: "32px 24px 64px",
        animation: "fadeUp 0.6s ease both",
      }}>
        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{
            display: "inline-block", padding: "3px 12px", borderRadius: 6,
            fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
            color: gold, border: `1px solid ${gold}33`, marginBottom: 16,
          }}>{t.category}</div>
          <h1 style={{
            fontFamily: fontD, fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 700, lineHeight: 1.15, marginBottom: 12,
          }}>{t.title}</h1>
          <p style={{ fontSize: 16, color: textS, lineHeight: 1.6, marginBottom: 20 }}>
            {t.subtitle}
          </p>
          <div style={{
            display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
            fontSize: 13, color: textS, paddingBottom: 20,
            borderBottom: `1px solid ${border}`,
          }}>
            <span>{t.meta.author}</span>
            <span style={{ opacity: 0.3 }}>·</span>
            <span>{t.meta.date}</span>
            <span style={{ opacity: 0.3 }}>·</span>
            <span>{t.meta.readTime}</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div style={{
          height: 220, borderRadius: 16, marginBottom: 36, overflow: "hidden",
          background: dark
            ? "linear-gradient(135deg, #1a1a2e 0%, #2a2a3e 50%, #1a1a2e 100%)"
            : "linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 50%, #e8e8e8 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative",
        }}>
          <div style={{ textAlign: "center", zIndex: 1 }}>
            <div style={{
              fontFamily: fontD, fontSize: 64, fontWeight: 700,
              background: `linear-gradient(135deg, ${accent}, ${gold})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>925</div>
            <div style={{ fontSize: 13, color: textS, letterSpacing: "0.15em", marginTop: 4 }}>
              STERLING SILVER
            </div>
          </div>
          {/* Decorative circles */}
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{
              position: "absolute",
              width: 60 + i * 40, height: 60 + i * 40,
              borderRadius: "50%",
              border: `1px solid ${accent}${(12 - i * 2).toString(16).padStart(2, "0")}`,
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
            }} />
          ))}
        </div>

        {/* Sections */}
        {t.sections.map((sec, si) => (
          <section key={sec.id} style={{ marginBottom: 36 }}>
            {sec.heading && (
              <h2 style={{
                fontFamily: fontD, fontSize: 24, fontWeight: 600,
                marginBottom: 16, paddingTop: 8,
              }}>{sec.heading}</h2>
            )}
            {sec.paragraphs.map((p, pi) => (
              <p key={pi} style={{
                fontSize: 15, lineHeight: 1.8, color: textS,
                marginBottom: 14,
              }}>{p}</p>
            ))}

            {/* Table */}
            {sec.table && (
              <div style={{
                overflowX: "auto", margin: "20px 0", borderRadius: 12,
                border: `1px solid ${border}`,
              }}>
                <table style={{
                  width: "100%", borderCollapse: "collapse", fontSize: 13,
                }}>
                  <thead>
                    <tr style={{ background: dark ? "rgba(192,192,192,0.05)" : "rgba(0,0,0,0.03)" }}>
                      {sec.table.headers.map((h, i) => (
                        <th key={i} style={{
                          padding: "12px 14px", textAlign: isRTL ? "right" : "left",
                          fontWeight: 600, color: textP, borderBottom: `1px solid ${border}`,
                          whiteSpace: "nowrap",
                        }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sec.table.rows.map((row, ri) => (
                      <tr key={ri} style={{
                        background: row[0] === "925 (Sterling)" || row[0] === "925"
                          ? (dark ? "rgba(212,175,55,0.06)" : "rgba(212,175,55,0.08)")
                          : "transparent",
                      }}>
                        {row.map((cell, ci) => (
                          <td key={ci} style={{
                            padding: "10px 14px", borderBottom: `1px solid ${border}`,
                            color: ci === 0 ? textP : textS,
                            fontWeight: ci === 0 ? 600 : 400,
                            whiteSpace: "nowrap",
                          }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Calculator Widget */}
            {sec.widget === "calculator" && (
              <PurityCalculator t={t} dark={dark} isRTL={isRTL} />
            )}

            {/* Tips */}
            {sec.tips && (
              <div style={{
                background: dark ? "rgba(192,192,192,0.03)" : "rgba(192,192,192,0.06)",
                border: `1px solid ${border}`, borderRadius: 12,
                padding: "20px 24px", marginTop: 16,
              }}>
                {sec.tips.map((tip, ti) => (
                  <div key={ti} style={{
                    display: "flex", alignItems: "flex-start", gap: 10,
                    marginBottom: ti < sec.tips.length - 1 ? 12 : 0,
                    fontSize: 14, lineHeight: 1.6, color: textS,
                  }}>
                    <span style={{
                      flexShrink: 0, width: 22, height: 22, borderRadius: "50%",
                      background: `${gold}18`, color: gold,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, fontWeight: 600, marginTop: 1,
                    }}>{ti + 1}</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        {/* FAQ */}
        <section style={{ marginBottom: 36, marginTop: 48 }}>
          <h2 style={{
            fontFamily: fontD, fontSize: 24, fontWeight: 600, marginBottom: 20,
          }}>{t.faq.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {t.faq.items.map((item, i) => (
              <div key={i} style={{
                border: `1px solid ${openFaq === i ? gold + "44" : border}`,
                borderRadius: 12, overflow: "hidden",
                background: openFaq === i ? (dark ? "rgba(212,175,55,0.03)" : "rgba(212,175,55,0.04)") : "transparent",
                transition: "all 0.3s",
              }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                  width: "100%", border: "none", cursor: "pointer",
                  background: "transparent", padding: "16px 20px",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  color: textP, fontSize: 14, fontWeight: 500,
                  fontFamily: fontB, textAlign: isRTL ? "right" : "left",
                  gap: 12,
                }}>
                  <span style={{ flex: 1 }}>{item.q}</span>
                  <span style={{
                    fontSize: 18, color: textS, transition: "transform 0.3s",
                    transform: openFaq === i ? "rotate(45deg)" : "rotate(0)",
                    flexShrink: 0,
                  }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{
                    padding: "0 20px 16px",
                    fontSize: 14, lineHeight: 1.7, color: textS,
                  }}>{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section style={{
          marginBottom: 36, padding: "20px 24px",
          background: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
          borderRadius: 12, border: `1px solid ${border}`,
        }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12 }}>{t.sources.heading}</h3>
          {t.sources.items.map((s, i) => (
            <div key={i} style={{
              fontSize: 13, color: textS, lineHeight: 1.6,
              marginBottom: 6, display: "flex", gap: 8,
            }}>
              <span style={{ color: accent, fontWeight: 600, flexShrink: 0 }}>[{i + 1}]</span>
              <span>{s}</span>
            </div>
          ))}
        </section>

        {/* Related */}
        <section style={{ marginBottom: 40 }}>
          <h3 style={{ fontSize: 18, fontFamily: fontD, fontWeight: 600, marginBottom: 16 }}>{t.related.heading}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {t.related.items.map((item, i) => (
              <a key={i} href={item.path} style={{
                textDecoration: "none", padding: "16px 18px",
                border: `1px solid ${border}`, borderRadius: 12,
                background: bgCard, transition: "all 0.25s", display: "block",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = gold + "44"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: 10, color: gold, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.cat}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: textP }}>{item.title}</div>
                <div style={{ fontSize: 12, color: textS, marginTop: 6 }}>{isRTL ? "←" : "→"}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Sponsor CTA */}
        <div style={{
          border: `1px solid ${gold}22`,
          borderRadius: 16, padding: "28px 24px",
          background: dark ? "rgba(212,175,55,0.03)" : "rgba(212,175,55,0.05)",
          textAlign: "center",
        }}>
          <p style={{ fontSize: 15, color: textP, marginBottom: 16, lineHeight: 1.6 }}>
            {t.sponsor.text}
          </p>
          {/* Instagram mock grid */}
          <div style={{
            display: "flex", gap: 8, justifyContent: "center", marginBottom: 16,
          }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{
                width: 80, height: 80, borderRadius: 10,
                background: dark
                  ? `linear-gradient(${120 * i}deg, #1e1e2e, #2a2a3e)`
                  : `linear-gradient(${120 * i}deg, #e0ddd4, #d5d0c4)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, color: textS,
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={textS} strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill={textS} />
                </svg>
              </div>
            ))}
          </div>
          <a
            href="https://instagram.com/istanbulgumustr"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 24px", borderRadius: 10,
              background: `linear-gradient(135deg, ${accent}, ${gold})`,
              color: "#0f0f14", fontSize: 13, fontWeight: 600,
              textDecoration: "none", transition: "transform 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            📸 {t.sponsor.cta}
          </a>
          <p style={{ fontSize: 11, color: textS, marginTop: 14, opacity: 0.7 }}>
            {t.sponsor.note}
          </p>
        </div>
      </article>

      {/* Footer */}
      <footer style={{
        borderTop: `1px solid ${border}`, padding: "24px", textAlign: "center",
        background: dark ? "#0c0c10" : "#f5f5f0",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
          <div style={{
            width: 22, height: 22, borderRadius: "50%",
            background: `linear-gradient(135deg, ${accent}, ${gold})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 9, fontWeight: 700, color: "#0f0f14", fontFamily: fontD,
          }}>Ag</div>
          <span style={{ fontFamily: fontD, fontWeight: 600, fontSize: 14 }}>{t.nav}</span>
        </div>
        <p style={{ fontSize: 11, color: textS }}>
          CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş
        </p>
      </footer>
    </div>
  );
}
