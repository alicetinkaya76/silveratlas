import { useState, useEffect, useRef } from "react";

// ─── i18n ────────────────────────────────────────────────
const T = {
  tr: {
    nav: "SilverAtlas",
    navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Üretim", "Rafinasyon Süreci"],
    category: "Üretim",
    title: "Gümüşün Rafinasyon Süreci",
    subtitle: "Cevherden saf metale: kırma, öğütme, flotasyon, eritme ve elektrolitik saflaştırma adımları",
    meta: { author: "Turan Erbaş", date: "15 Nisan 2026", readTime: "10 dk okuma" },
    sections: [
      {
        id: "intro",
        heading: null,
        paragraphs: [
          "Gümüş, yer kabuğunda genellikle saf hâlde değil; kurşun, çinko, bakır ve altın cevherleriyle birlikte bulunur. Dünya gümüş üretiminin yaklaşık %70'i bu metallerin yan ürünü olarak elde edilir — yalnızca %30 kadarı birincil gümüş madenlerinden çıkarılır.",
          "Bir gümüş cevheri ton başına ortalama 300-500 gram gümüş içerir; bu, milyonda 300-500 parça (ppm) anlamına gelir. Cevheri 999 ayar saf gümüşe dönüştürmek, fiziksel kırma işlemlerinden kimyasal ayırmaya ve elektrolitik saflaştırmaya uzanan çok aşamalı bir endüstriyel süreçtir.",
        ],
      },
      {
        id: "madencilik",
        heading: "1. Madencilik ve Cevher Çıkarma",
        paragraphs: [
          "Gümüş cevheri açık ocak veya yer altı madenciliği yöntemleriyle çıkarılır. Açık ocak yöntemi, cevherin yüzeye yakın olduğu büyük yataklarda uygulanır; yer altı madenciliği ise derin damarlara tünel açılarak gerçekleştirilir.",
          "Modern madenlerde patlama, kazma ve taşıma işlemleri büyük ölçüde otomatize edilmiştir. Çıkarılan kaya (run-of-mine ore) ilk olarak kırma tesisine taşınır. Tek bir maden, günde binlerce ton kaya işleyebilir.",
        ],
      },
      {
        id: "kirma-ogutme",
        heading: "2. Kırma ve Öğütme (Comminution)",
        paragraphs: [
          "Kırma aşamasında büyük kaya parçaları çeneli kırıcılar (jaw crusher) ve konik kırıcılar (cone crusher) ile 10-20 mm boyutuna indirilir. Ardından bilyalı değirmenler (ball mill) ile 75 mikron altına — yani kum tanesinden çok daha ince — öğütülür.",
          "Bu ince öğütme kritik önem taşır: gümüş mineralleri (acanthite — Ag₂S, proustite — Ag₃AsS₃, pyrargyrite — Ag₃SbS₃) gang minerallerinden fiziksel olarak serbestleştirilmelidir. Yetersiz öğütme düşük verime, aşırı öğütme ise gereksiz enerji harcamasına yol açar.",
        ],
      },
      {
        id: "flotasyon",
        heading: "3. Köpük Flotasyonu (Froth Flotation)",
        paragraphs: [
          "Öğütülmüş cevher, su ve kimyasal reaktiflerle karıştırılarak bir bulamaç (slurry) oluşturulur. Flotasyon hücrelerinde hava kabarcıkları üflendiğinde, hidrofobik hâle getirilmiş gümüş mineralleri kabarcıklara yapışarak yüzeye çıkar; gang mineralleri dibe çöker.",
          "Toplama (collector) kimyasalları — genellikle ksantatlar — gümüş minerallerinin yüzey kimyasını değiştirerek seçici ayrışmayı sağlar. Köpürtücüler (frothers) stabil bir köpük tabakası oluşturur. Bu aşamada cevher tenörü %5-15 gümüşe çıkarılır.",
          "Flotasyon konsantresi filtrelenerek kurutulur ve eritme tesisine gönderilir.",
        ],
      },
      {
        id: "eritme",
        heading: "4. Eritme ve Dore Üretimi",
        paragraphs: [
          "Konsantre, fırınlarda 1100-1300°C'de ergitilir. Flux (erit yardımcısı) olarak silis ve boraks eklenir. Kükürtlü bileşikler oksitlenir ve cüruf olarak ayrılır.",
          "Sonuçta doré adı verilen, %90-98 oranında gümüş ve altın içeren ham bir metal külçe elde edilir. Doré, rafinasyon tesislerine gönderilerek saf metallere ayrıştırılır.",
        ],
      },
      {
        id: "elektrolitik",
        heading: "5. Elektrolitik Rafinasyon (Moebius/Balbach-Thum)",
        paragraphs: [
          "Doré külçeler anot olarak nitrik asit veya gümüş nitrat (AgNO₃) çözeltisine daldırılır. Doğru akım uygulandığında, gümüş iyonları çözeltiye geçer ve katot plakalarında %99,99+ saflıkta saf gümüş olarak birikir.",
          "Moebius prosesinde dikey anotlar ve katotlar kullanılır — yüksek kapasiteli modern tesislerin tercihi budur. Balbach-Thum prosesinde ise yatay düzende çalışılır. Her iki yöntemde de altın, platin grubu metaller ve bakır, anot çamuru olarak dipte toplanır ve ayrıca işlenir.",
          "Elektrolitik rafinasyon tek seferde 99,99% (dört dokuz) saflığa ulaşır. London Bullion Market Association (LBMA) standartı olan 999 ayar — yani %99,9 — bu yöntemle kolayca sağlanır.",
        ],
      },
      {
        id: "parkes",
        heading: "Alternatif: Parkes Süreci (Kurşundan Ayırma)",
        paragraphs: [
          "Gümüşün büyük bölümü kurşun-çinko madenciliğinin yan ürünü olarak elde edilir. Parkes sürecinde, ergimiş kurşun-gümüş alaşımına çinko eklenir. Çinko, gümüşle birleşerek yüzeyde katı bir çinko-gümüş bileşiği oluşturur — bu tabaka sıyrılarak ayrıştırılır.",
          "Çinko daha sonra damıtılarak geri kazanılır ve geride kalan gümüş-altın alaşımı kupelatör fırınında (cupellation) saflaştırılır. Kupelasyon, en az 5.000 yıldır bilinen en eski rafinasyon tekniklerinden biridir.",
        ],
      },
      {
        id: "miller",
        heading: "Alternatif: Miller Süreci (Klor Gazı)",
        paragraphs: [
          "Francis Bowyer Miller'ın 1867'de geliştirdiği bu yöntemde, ergimiş doré metaline klor gazı üflenir. Gümüş klorür (AgCl) olarak ayrışan gümüş, cüruf tabakasında toplanır; altın sıvı hâlde altta kalır.",
          "Miller süreci altın rafinasyonunda yaygın olarak kullanılır ve altını %99,5+ saflığa çıkarır. Gümüş klorür ise indirgenme ile metalik gümüşe dönüştürülür ve ardından elektrolitik rafinasyonla son saflığa ulaştırılır.",
        ],
      },
      {
        id: "flowchart",
        heading: "İnteraktif Rafinasyon Akış Şeması",
        paragraphs: [
          "Aşağıdaki diyagram, cevherden saf gümüşe giden tüm aşamaları görselleştirir. Adımlara tıklayarak detayları görebilirsiniz.",
        ],
        widget: "flowchart",
      },
      {
        id: "karsilastirma",
        heading: "Rafinasyon Yöntemleri Karşılaştırması",
        paragraphs: [
          "Endüstriyel gümüş rafinasyonunda kullanılan üç temel yöntemin karşılaştırması:",
        ],
        table: {
          headers: ["Yöntem", "Giriş Malzemesi", "Saflık", "Kapasite", "Avantaj"],
          rows: [
            ["Elektrolitik (Moebius)", "Doré külçe", "99,99%", "Yüksek", "En yüksek saflık"],
            ["Parkes (Çinko)", "Kurşun-Ag alaşımı", "99,5%", "Orta", "Kurşun yan ürününe ideal"],
            ["Miller (Klor)", "Doré külçe", "99,5%", "Yüksek", "Hızlı, altın ayırma"],
            ["Kupelasyon", "Kurşun-Ag karışımı", "98-99%", "Düşük", "Basit, tarihî yöntem"],
          ],
        },
      },
      {
        id: "cevre",
        heading: "Çevresel Boyut ve Modern Gelişmeler",
        paragraphs: [
          "Geleneksel rafinasyon süreçlerinde kullanılan nitrik asit, klor gazı ve kurşun ciddi çevre ve sağlık riskleri taşır. Modern tesislerde kapalı devre su sistemleri, baca gazı arıtma üniteleri ve atık çamur geri kazanım tesisleri standart hâle gelmiştir.",
          "Biyolojik liç (bioleaching) ve iyonik sıvılar (ionic liquids) kullanımı gibi 'yeşil rafinasyon' teknolojileri araştırma aşamasındadır. Bu yöntemler asit tüketimini azaltırken, enerji verimliliğini artırmayı hedeflemektedir.",
          "Geri dönüşüm de giderek önem kazanmaktadır: elektronik atıklar (e-waste), fotoğraf endüstrisi artıkları ve endüstriyel katalitörlerden gümüş geri kazanımı, birincil madenciliğe kıyasla %80 daha az enerji tüketir.",
        ],
      },
    ],
    faq: {
      title: "Sık Sorulan Sorular",
      items: [
        {
          q: "Gümüş rafinasyonu ne kadar sürer?",
          a: "Elektrolitik rafinasyonda bir doré anotun tamamen çözülmesi 4-7 gün sürer. Tüm süreç — cevherden saf metale — yaklaşık 2-4 hafta alır.",
        },
        {
          q: "999 ile 9999 ayar arasındaki fark nedir?",
          a: "999 ayar %99,9 saflıktır (LBMA Good Delivery standardı). 9999 ayar (%99,99) ise elektronik ve tıp gibi yüksek teknoloji uygulamaları için üretilir.",
        },
        {
          q: "Evde gümüş rafinasyonu yapılabilir mi?",
          a: "Teknik olarak küçük ölçekte mümkün olsa da, nitrik asit ve diğer kimyasallar ciddi sağlık riskleri taşır. Profesyonel rafinasyon tesisleri tercih edilmelidir.",
        },
        {
          q: "Geri dönüşüm gümüşü madenden çıkan gümüşten farklı mıdır?",
          a: "Hayır — doğru rafinasyon uygulandığında her iki kaynaktan da aynı saflıkta (%99,9+) gümüş elde edilir. Atom düzeyinde hiçbir fark yoktur.",
        },
      ],
    },
    cta: {
      title: "925 Ayar Gümüş Takılar",
      text: "İstanbul Gümüş, Konya'da LBMA standartlarında rafinasyon sürecinden geçmiş 925 ayar gümüşle üretim yapmaktadır.",
      button: "Koleksiyonu Keşfet",
    },
    footer: {
      copyright: "© 2026 SilverAtlas.org — Turan Erbaş tarafından hazırlanmıştır.",
      sponsor: "İstanbul Gümüş sponsorluğundadır",
      links: ["Hakkımızda", "Makaleler", "İletişim"],
    },
  },
  en: {
    nav: "SilverAtlas",
    navSub: "Silver Encyclopedia",
    breadcrumb: ["Home", "Production", "Refining Process"],
    category: "Production",
    title: "Silver Refining Process",
    subtitle: "From ore to pure metal: crushing, grinding, flotation, smelting and electrolytic refining",
    meta: { author: "Turan Erbaş", date: "April 15, 2026", readTime: "10 min read" },
    sections: [
      {
        id: "intro",
        heading: null,
        paragraphs: [
          "Silver is rarely found in its pure state in the earth's crust; it typically occurs alongside lead, zinc, copper, and gold ores. Approximately 70% of the world's silver production is a by-product of these metals — only about 30% comes from primary silver mines.",
          "A silver ore contains on average 300-500 grams of silver per ton, meaning 300-500 parts per million (ppm). Transforming ore into 999 fine pure silver requires a multi-stage industrial process spanning physical crushing, chemical separation, and electrolytic purification.",
        ],
      },
      {
        id: "madencilik",
        heading: "1. Mining and Ore Extraction",
        paragraphs: [
          "Silver ore is extracted through open-pit or underground mining methods. Open-pit mining is used for large deposits near the surface, while underground mining involves tunneling to reach deep veins.",
          "In modern mines, blasting, excavation, and hauling are largely automated. The extracted rock (run-of-mine ore) is first transported to the crushing facility. A single mine can process thousands of tons of rock per day.",
        ],
      },
      {
        id: "kirma-ogutme",
        heading: "2. Crushing and Grinding (Comminution)",
        paragraphs: [
          "During the crushing phase, large rock fragments are reduced to 10-20 mm using jaw crushers and cone crushers. Ball mills then grind the material below 75 microns — far finer than a grain of sand.",
          "This fine grinding is critically important: silver minerals (acanthite — Ag₂S, proustite — Ag₃AsS₃, pyrargyrite — Ag₃SbS₃) must be physically liberated from gangue minerals. Insufficient grinding leads to low recovery; excessive grinding wastes energy.",
        ],
      },
      {
        id: "flotasyon",
        heading: "3. Froth Flotation",
        paragraphs: [
          "Ground ore is mixed with water and chemical reagents to form a slurry. Air bubbles are blown through flotation cells, and silver minerals — rendered hydrophobic — attach to the bubbles and rise to the surface while gangue minerals sink.",
          "Collector chemicals — typically xanthates — modify the surface chemistry of silver minerals for selective separation. Frothers create a stable foam layer. At this stage, ore grade is raised to 5-15% silver.",
          "The flotation concentrate is filtered, dried, and sent to the smelting facility.",
        ],
      },
      {
        id: "eritme",
        heading: "4. Smelting and Doré Production",
        paragraphs: [
          "The concentrate is melted in furnaces at 1100-1300°C. Silica and borax are added as flux. Sulfide compounds are oxidized and separated as slag.",
          "The result is doré — a crude metal bullion containing 90-98% silver and gold. Doré is shipped to refineries for separation into pure metals.",
        ],
      },
      {
        id: "elektrolitik",
        heading: "5. Electrolytic Refining (Moebius/Balbach-Thum)",
        paragraphs: [
          "Doré ingots are suspended as anodes in a nitric acid or silver nitrate (AgNO₃) solution. When direct current is applied, silver ions dissolve and deposit on cathode plates as 99.99%+ pure silver.",
          "The Moebius process uses vertical anodes and cathodes — the preferred method in modern high-capacity facilities. The Balbach-Thum process uses a horizontal arrangement. In both methods, gold, platinum group metals, and copper collect as anode slime and are processed separately.",
          "Electrolytic refining achieves 99.99% (four nines) purity in a single step. The LBMA standard of 999 fine — 99.9% — is easily achieved through this method.",
        ],
      },
      {
        id: "parkes",
        heading: "Alternative: Parkes Process (Lead Separation)",
        paragraphs: [
          "Much of the world's silver is a by-product of lead-zinc mining. In the Parkes process, zinc is added to molten lead-silver alloy. Zinc combines with silver to form a solid zinc-silver compound on the surface — this layer is skimmed off.",
          "The zinc is then recovered by distillation, and the remaining silver-gold alloy is purified in a cupellation furnace. Cupellation is one of the oldest known refining techniques, dating back at least 5,000 years.",
        ],
      },
      {
        id: "miller",
        heading: "Alternative: Miller Process (Chlorine Gas)",
        paragraphs: [
          "Developed by Francis Bowyer Miller in 1867, this method involves blowing chlorine gas through molten doré metal. Silver separates as silver chloride (AgCl) in the slag layer; gold remains as liquid below.",
          "The Miller process is widely used for gold refining and achieves 99.5%+ gold purity. Silver chloride is reduced to metallic silver and then brought to final purity through electrolytic refining.",
        ],
      },
      {
        id: "flowchart",
        heading: "Interactive Refining Flowchart",
        paragraphs: [
          "The diagram below visualizes all stages from ore to pure silver. Click on each step to see details.",
        ],
        widget: "flowchart",
      },
      {
        id: "karsilastirma",
        heading: "Refining Methods Comparison",
        paragraphs: [
          "Comparison of the three main methods used in industrial silver refining:",
        ],
        table: {
          headers: ["Method", "Input Material", "Purity", "Capacity", "Advantage"],
          rows: [
            ["Electrolytic (Moebius)", "Doré bullion", "99.99%", "High", "Highest purity"],
            ["Parkes (Zinc)", "Lead-Ag alloy", "99.5%", "Medium", "Ideal for lead by-product"],
            ["Miller (Chlorine)", "Doré bullion", "99.5%", "High", "Fast, gold separation"],
            ["Cupellation", "Lead-Ag mixture", "98-99%", "Low", "Simple, historical method"],
          ],
        },
      },
      {
        id: "cevre",
        heading: "Environmental Aspects and Modern Developments",
        paragraphs: [
          "Traditional refining processes use nitric acid, chlorine gas, and lead, posing serious environmental and health risks. Modern facilities feature closed-loop water systems, flue gas treatment units, and waste sludge recovery as standard.",
          "Green refining technologies such as bioleaching and ionic liquids are under research. These methods aim to reduce acid consumption while improving energy efficiency.",
          "Recycling is also gaining importance: silver recovery from e-waste, photography residues, and industrial catalysts consumes about 80% less energy compared to primary mining.",
        ],
      },
    ],
    faq: {
      title: "FAQ",
      items: [
        {
          q: "How long does silver refining take?",
          a: "In electrolytic refining, a doré anode fully dissolves in 4-7 days. The entire process — ore to pure metal — takes approximately 2-4 weeks.",
        },
        {
          q: "What is the difference between 999 and 9999 fine?",
          a: "999 fine is 99.9% purity (LBMA Good Delivery standard). 9999 fine (99.99%) is produced for high-tech applications such as electronics and medicine.",
        },
        {
          q: "Can silver be refined at home?",
          a: "While technically possible on a small scale, nitric acid and other chemicals pose serious health risks. Professional refining facilities should be used.",
        },
        {
          q: "Is recycled silver different from mined silver?",
          a: "No — with proper refining, both sources yield the same purity (99.9%+). There is no difference at the atomic level.",
        },
      ],
    },
    cta: {
      title: "925 Sterling Silver Jewelry",
      text: "Istanbul Silver crafts with LBMA-standard refined 925 sterling silver in Konya, Turkey.",
      button: "Explore Collection",
    },
    footer: {
      copyright: "© 2026 SilverAtlas.org — Created by Turan Erbaş.",
      sponsor: "Sponsored by Istanbul Silver",
      links: ["About", "Articles", "Contact"],
    },
  },
  ar: {
    nav: "SilverAtlas",
    navSub: "موسوعة الفضة",
    breadcrumb: ["الرئيسية", "الإنتاج", "عملية التكرير"],
    category: "الإنتاج",
    title: "عملية تكرير الفضة",
    subtitle: "من الخام إلى المعدن النقي: التكسير والطحن والتعويم والصهر والتنقية الإلكتروليتية",
    meta: { author: "توران إرباش", date: "١٥ أبريل ٢٠٢٦", readTime: "١٠ دقائق قراءة" },
    sections: [
      {
        id: "intro",
        heading: null,
        paragraphs: [
          "نادراً ما توجد الفضة في حالتها النقية في القشرة الأرضية؛ فهي عادةً ما تتواجد مع خامات الرصاص والزنك والنحاس والذهب. حوالي ٧٠٪ من إنتاج الفضة العالمي هو منتج ثانوي لهذه المعادن — فقط ٣٠٪ يأتي من مناجم الفضة الأولية.",
          "يحتوي خام الفضة على ٣٠٠-٥٠٠ جرام من الفضة لكل طن في المتوسط. تحويل الخام إلى فضة نقية عيار ٩٩٩ يتطلب عملية صناعية متعددة المراحل.",
        ],
      },
      {
        id: "madencilik",
        heading: "١. التعدين واستخراج الخام",
        paragraphs: [
          "يُستخرج خام الفضة من خلال التعدين السطحي أو الجوفي. التعدين السطحي يُستخدم للرواسب الكبيرة القريبة من السطح، بينما التعدين الجوفي يتضمن حفر أنفاق للوصول إلى العروق العميقة.",
        ],
      },
      {
        id: "kirma-ogutme",
        heading: "٢. التكسير والطحن",
        paragraphs: [
          "في مرحلة التكسير، تُصغّر قطع الصخور الكبيرة إلى ١٠-٢٠ مم باستخدام الكسارات الفكية والمخروطية. ثم تطحنها المطاحن الكروية إلى أقل من ٧٥ ميكرون.",
          "هذا الطحن الدقيق بالغ الأهمية: يجب تحرير معادن الفضة (أكانثيت — Ag₂S) من المعادن العقيمة فيزيائياً.",
        ],
      },
      {
        id: "flotasyon",
        heading: "٣. التعويم الرغوي",
        paragraphs: [
          "يُخلط الخام المطحون بالماء والمواد الكيميائية لتشكيل ملاط. تُنفخ فقاعات الهواء في خلايا التعويم، فتلتصق معادن الفضة الكارهة للماء بالفقاعات وترتفع إلى السطح.",
          "ترفع هذه المرحلة تركيز الفضة إلى ٥-١٥٪.",
        ],
      },
      {
        id: "elektrolitik",
        heading: "٤. التنقية الإلكتروليتية (موبيوس)",
        paragraphs: [
          "تُعلّق سبائك الدوري كأنودات في محلول نترات الفضة. عند تطبيق التيار المباشر، تذوب أيونات الفضة وتترسب على الكاثودات بنقاء يتجاوز ٩٩.٩٩٪.",
          "تحقق التنقية الإلكتروليتية نقاء \"أربعة تسعات\" في خطوة واحدة. معيار LBMA البالغ ٩٩٩ يُحقق بسهولة بهذه الطريقة.",
        ],
      },
    ],
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        {
          q: "كم تستغرق عملية تكرير الفضة؟",
          a: "في التنقية الإلكتروليتية، يذوب أنود الدوري بالكامل خلال ٤-٧ أيام. العملية الكاملة من الخام إلى المعدن النقي تستغرق حوالي ٢-٤ أسابيع.",
        },
        {
          q: "هل الفضة المعاد تدويرها مختلفة عن الفضة المستخرجة؟",
          a: "لا — مع التكرير الصحيح، ينتج كلا المصدرين نفس النقاء (٩٩.٩٪+). لا يوجد فرق على المستوى الذري.",
        },
      ],
    },
    cta: {
      title: "مجوهرات فضة عيار ٩٢٥",
      text: "إسطنبول للفضة تصنع بفضة عيار ٩٢٥ مكررة وفق معايير LBMA في قونية، تركيا.",
      button: "استكشف المجموعة",
    },
    footer: {
      copyright: "© ٢٠٢٦ SilverAtlas.org — إعداد توران إرباش",
      sponsor: "برعاية إسطنبول للفضة",
      links: ["حول", "مقالات", "اتصل"],
    },
  },
};

// ─── Theme & Style Constants ──────────────────────────────
const SILVER = "#C0C0C0";
const DARK_SILVER = "#708090";
const NAVY = "#1a1a2e";
const GOLD_ACCENT = "#D4AF37";
const FONT_HEADING = "'Playfair Display', Georgia, serif";
const FONT_BODY = "'Source Sans 3', 'Segoe UI', sans-serif";
const FONT_ARABIC = "'Noto Naskh Arabic', 'Traditional Arabic', serif";
const FONT_MONO = "'JetBrains Mono', 'Fira Code', monospace";

// ─── Flowchart Widget ─────────────────────────────────────
const FlowchartWidget = ({ lang, dark }) => {
  const [activeStep, setActiveStep] = useState(null);
  const isRTL = lang === "ar";

  const steps = {
    tr: [
      { id: "cevher", label: "Cevher Çıkarma", icon: "⛏️", detail: "Açık ocak veya yer altı madenciliği ile ham cevher çıkarılır. Ton başına 300-500 g gümüş içerir.", color: "#8B4513" },
      { id: "kirma", label: "Kırma & Öğütme", icon: "🔨", detail: "Çeneli kırıcı → konik kırıcı → bilyalı değirmen. 75 mikron altına indirilir.", color: "#A0522D" },
      { id: "flotasyon", label: "Köpük Flotasyonu", icon: "🫧", detail: "Ksantat toplayıcı + köpürtücü ile hidrofobik gümüş mineralleri yüzeye çıkar. Tenör %5-15'e yükselir.", color: "#4682B4" },
      { id: "eritme", label: "Eritme", icon: "🔥", detail: "1100-1300°C fırında ergitme. Cüruf ayrılır. Doré külçe (%90-98 Ag+Au) üretilir.", color: "#FF6347" },
      { id: "elektrolit", label: "Elektrolitik Rafinasyon", icon: "⚡", detail: "Moebius prosesi: AgNO₃ çözeltisinde anot→katot. %99,99 saflık elde edilir.", color: "#FFD700" },
      { id: "dokum", label: "Döküm & Sevkiyat", icon: "🏭", detail: "999 ayar külçe (1000 oz / 1 kg) döküm. LBMA sertifikası ile piyasaya arz.", color: SILVER },
    ],
    en: [
      { id: "cevher", label: "Ore Extraction", icon: "⛏️", detail: "Open-pit or underground mining extracts raw ore containing 300-500 g/ton silver.", color: "#8B4513" },
      { id: "kirma", label: "Crushing & Grinding", icon: "🔨", detail: "Jaw crusher → cone crusher → ball mill. Ground below 75 microns.", color: "#A0522D" },
      { id: "flotasyon", label: "Froth Flotation", icon: "🫧", detail: "Xanthate collector + frother: hydrophobic silver minerals rise to the surface. Grade rises to 5-15%.", color: "#4682B4" },
      { id: "eritme", label: "Smelting", icon: "🔥", detail: "Melted at 1100-1300°C. Slag separated. Doré bullion (90-98% Ag+Au) produced.", color: "#FF6347" },
      { id: "elektrolit", label: "Electrolytic Refining", icon: "⚡", detail: "Moebius process: anode→cathode in AgNO₃ solution. 99.99% purity achieved.", color: "#FFD700" },
      { id: "dokum", label: "Casting & Delivery", icon: "🏭", detail: "999 fine bars (1000 oz / 1 kg) cast. LBMA certified for market.", color: SILVER },
    ],
    ar: [
      { id: "cevher", label: "استخراج الخام", icon: "⛏️", detail: "التعدين السطحي أو الجوفي لاستخراج الخام المحتوي على ٣٠٠-٥٠٠ غ/طن فضة.", color: "#8B4513" },
      { id: "kirma", label: "التكسير والطحن", icon: "🔨", detail: "كسارة فكية ← كسارة مخروطية ← مطحنة كروية. الطحن إلى أقل من ٧٥ ميكرون.", color: "#A0522D" },
      { id: "flotasyon", label: "التعويم الرغوي", icon: "🫧", detail: "مواد جمع الزانثات + مواد رغوية. ترتفع معادن الفضة إلى السطح.", color: "#4682B4" },
      { id: "eritme", label: "الصهر", icon: "🔥", detail: "الصهر عند ١١٠٠-١٣٠٠ درجة. فصل الخبث. إنتاج سبيكة الدوري.", color: "#FF6347" },
      { id: "elektrolit", label: "التنقية الإلكتروليتية", icon: "⚡", detail: "عملية موبيوس: أنود←كاثود في محلول نترات الفضة. نقاء ٩٩.٩٩٪.", color: "#FFD700" },
      { id: "dokum", label: "الصب والتسليم", icon: "🏭", detail: "صب سبائك عيار ٩٩٩. شهادة LBMA للسوق.", color: SILVER },
    ],
  };

  const currentSteps = steps[lang] || steps.tr;

  return (
    <div style={{ margin: "2rem 0", direction: isRTL ? "rtl" : "ltr" }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        position: "relative",
      }}>
        {currentSteps.map((step, i) => (
          <div key={step.id}>
            <div
              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 1.5rem",
                borderRadius: "12px",
                cursor: "pointer",
                background: activeStep === step.id
                  ? (dark ? "rgba(192,192,192,0.15)" : "rgba(26,26,46,0.08)")
                  : (dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)"),
                border: `2px solid ${activeStep === step.id ? step.color : "transparent"}`,
                transition: "all 0.3s ease",
              }}
            >
              <div style={{
                width: 48, height: 48,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${step.color}, ${step.color}99)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.5rem",
                flexShrink: 0,
              }}>
                {step.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: FONT_HEADING,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: dark ? "#f0f0f0" : NAVY,
                }}>
                  <span style={{ color: step.color, marginRight: isRTL ? 0 : 8, marginLeft: isRTL ? 8 : 0 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step.label}
                </div>
              </div>
              <div style={{
                transform: activeStep === step.id ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
                fontSize: "1.2rem",
                color: DARK_SILVER,
              }}>▼</div>
            </div>
            {activeStep === step.id && (
              <div style={{
                margin: "0.5rem 0 0.5rem 2rem",
                padding: "1rem 1.5rem",
                borderLeft: isRTL ? "none" : `3px solid ${step.color}`,
                borderRight: isRTL ? `3px solid ${step.color}` : "none",
                background: dark ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.8)",
                borderRadius: "0 8px 8px 0",
                fontFamily: isRTL ? FONT_ARABIC : FONT_BODY,
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: dark ? "#ccc" : "#444",
                animation: "fadeIn 0.3s ease",
              }}>
                {step.detail}
              </div>
            )}
            {i < currentSteps.length - 1 && (
              <div style={{
                display: "flex",
                justifyContent: "center",
                padding: "0.25rem 0",
                fontSize: "1.2rem",
                color: DARK_SILVER,
                opacity: 0.5,
              }}>↓</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────
export default function SilverAtlasRefiningArticle() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [faqOpen, setFaqOpen] = useState(null);
  const t = T[lang];
  const isRTL = lang === "ar";
  const bodyFont = isRTL ? FONT_ARABIC : FONT_BODY;

  const bg = dark
    ? "linear-gradient(180deg, #0d0d1a 0%, #1a1a2e 40%, #16213e 100%)"
    : "linear-gradient(180deg, #f8f9fa 0%, #e8e8e8 100%)";
  const textColor = dark ? "#e0e0e0" : "#2c2c2c";
  const mutedColor = dark ? "#999" : "#666";
  const cardBg = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)";
  const borderColor = dark ? "rgba(192,192,192,0.15)" : "rgba(0,0,0,0.1)";

  const renderSection = (section) => {
    return (
      <section key={section.id} id={section.id} style={{ marginBottom: "3rem" }}>
        {section.heading && (
          <h2 style={{
            fontFamily: FONT_HEADING,
            fontSize: "1.6rem",
            fontWeight: 700,
            color: dark ? SILVER : NAVY,
            marginBottom: "1rem",
            borderBottom: `2px solid ${GOLD_ACCENT}`,
            paddingBottom: "0.5rem",
          }}>
            {section.heading}
          </h2>
        )}
        {section.paragraphs?.map((p, i) => (
          <p key={i} style={{
            fontFamily: bodyFont,
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: textColor,
            marginBottom: "1rem",
            textAlign: isRTL ? "right" : "justify",
          }}>
            {p}
          </p>
        ))}
        {section.table && (
          <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              fontFamily: FONT_BODY,
              fontSize: "0.9rem",
            }}>
              <thead>
                <tr>
                  {section.table.headers.map((h, i) => (
                    <th key={i} style={{
                      padding: "0.75rem",
                      background: dark ? "rgba(192,192,192,0.1)" : "rgba(26,26,46,0.08)",
                      color: dark ? SILVER : NAVY,
                      fontWeight: 700,
                      textAlign: isRTL ? "right" : "left",
                      borderBottom: `2px solid ${GOLD_ACCENT}`,
                      whiteSpace: "nowrap",
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.table.rows.map((row, ri) => (
                  <tr key={ri} style={{
                    background: ri % 2 === 0 ? "transparent" : (dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)"),
                  }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{
                        padding: "0.6rem 0.75rem",
                        color: textColor,
                        borderBottom: `1px solid ${borderColor}`,
                        textAlign: isRTL ? "right" : "left",
                        fontFamily: ci >= 2 ? FONT_MONO : FONT_BODY,
                      }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {section.widget === "flowchart" && (
          <FlowchartWidget lang={lang} dark={dark} />
        )}
      </section>
    );
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: bg,
      direction: isRTL ? "rtl" : "ltr",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Sans+3:wght@300;400;600;700&family=Noto+Naskh+Arabic:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap');
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${DARK_SILVER}; border-radius: 3px; }
      `}</style>

      {/* ── Navbar ── */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        borderBottom: `1px solid ${borderColor}`,
        background: dark ? "rgba(13,13,26,0.95)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            fontSize: "1.8rem",
            fontFamily: FONT_HEADING,
            fontWeight: 900,
            background: `linear-gradient(135deg, ${SILVER}, ${GOLD_ACCENT})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Ag</div>
          <div>
            <div style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: "1.1rem", color: dark ? SILVER : NAVY }}>{t.nav}</div>
            <div style={{ fontFamily: bodyFont, fontSize: "0.7rem", color: mutedColor }}>{t.navSub}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {["TR", "EN", "AR"].map((l) => (
            <button key={l} onClick={() => setLang(l.toLowerCase())}
              style={{
                padding: "0.3rem 0.6rem",
                borderRadius: "6px",
                border: `1px solid ${lang === l.toLowerCase() ? GOLD_ACCENT : borderColor}`,
                background: lang === l.toLowerCase() ? `${GOLD_ACCENT}22` : "transparent",
                color: lang === l.toLowerCase() ? GOLD_ACCENT : mutedColor,
                cursor: "pointer",
                fontFamily: FONT_MONO,
                fontSize: "0.75rem",
                fontWeight: 700,
              }}>{l}</button>
          ))}
          <button onClick={() => setDark(!dark)}
            style={{
              padding: "0.3rem 0.6rem",
              borderRadius: "6px",
              border: `1px solid ${borderColor}`,
              background: "transparent",
              color: mutedColor,
              cursor: "pointer",
              fontSize: "1rem",
              marginLeft: isRTL ? 0 : "0.5rem",
              marginRight: isRTL ? "0.5rem" : 0,
            }}>{dark ? "☀️" : "🌙"}</button>
        </div>
      </nav>

      {/* ── Breadcrumb ── */}
      <div style={{
        padding: "0.75rem 2rem",
        fontFamily: bodyFont,
        fontSize: "0.85rem",
        color: mutedColor,
        maxWidth: 900,
        margin: "0 auto",
      }}>
        {t.breadcrumb.map((b, i) => (
          <span key={i}>
            {i > 0 && <span style={{ margin: "0 0.5rem", color: DARK_SILVER }}>/</span>}
            <span style={{
              color: i === t.breadcrumb.length - 1 ? GOLD_ACCENT : mutedColor,
              cursor: i < t.breadcrumb.length - 1 ? "pointer" : "default",
            }}>{b}</span>
          </span>
        ))}
      </div>

      {/* ── Hero ── */}
      <header style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "2rem 2rem 1rem",
        textAlign: isRTL ? "right" : "left",
      }}>
        <div style={{
          display: "inline-block",
          padding: "0.3rem 1rem",
          borderRadius: "20px",
          background: `${GOLD_ACCENT}22`,
          color: GOLD_ACCENT,
          fontFamily: FONT_MONO,
          fontSize: "0.8rem",
          fontWeight: 700,
          marginBottom: "1rem",
          border: `1px solid ${GOLD_ACCENT}44`,
        }}>
          {t.category}
        </div>
        <h1 style={{
          fontFamily: FONT_HEADING,
          fontSize: "clamp(2rem, 5vw, 2.8rem)",
          fontWeight: 900,
          color: dark ? "#fff" : NAVY,
          lineHeight: 1.2,
          marginBottom: "0.75rem",
        }}>
          {t.title}
        </h1>
        <p style={{
          fontFamily: bodyFont,
          fontSize: "1.15rem",
          color: DARK_SILVER,
          lineHeight: 1.6,
          marginBottom: "1.5rem",
        }}>
          {t.subtitle}
        </p>
        <div style={{
          display: "flex",
          gap: "1.5rem",
          fontFamily: FONT_MONO,
          fontSize: "0.8rem",
          color: mutedColor,
          flexWrap: "wrap",
        }}>
          <span>✍️ {t.meta.author}</span>
          <span>📅 {t.meta.date}</span>
          <span>⏱️ {t.meta.readTime}</span>
        </div>
      </header>

      {/* ── Content ── */}
      <main style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "2rem",
      }}>
        {t.sections.map(renderSection)}

        {/* ── FAQ ── */}
        {t.faq && (
          <section style={{ marginTop: "3rem" }}>
            <h2 style={{
              fontFamily: FONT_HEADING,
              fontSize: "1.6rem",
              fontWeight: 700,
              color: dark ? SILVER : NAVY,
              marginBottom: "1.5rem",
              borderBottom: `2px solid ${GOLD_ACCENT}`,
              paddingBottom: "0.5rem",
            }}>
              {t.faq.title}
            </h2>
            {t.faq.items.map((item, i) => (
              <div key={i} style={{
                marginBottom: "0.75rem",
                border: `1px solid ${borderColor}`,
                borderRadius: "10px",
                overflow: "hidden",
              }}>
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "1rem 1.25rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: cardBg,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: bodyFont,
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: dark ? "#e0e0e0" : NAVY,
                    textAlign: isRTL ? "right" : "left",
                  }}
                >
                  <span>{item.q}</span>
                  <span style={{
                    transform: faqOpen === i ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                    fontSize: "1.3rem",
                    color: GOLD_ACCENT,
                    flexShrink: 0,
                    marginLeft: isRTL ? 0 : "1rem",
                    marginRight: isRTL ? "1rem" : 0,
                  }}>+</span>
                </button>
                {faqOpen === i && (
                  <div style={{
                    padding: "1rem 1.25rem",
                    fontFamily: bodyFont,
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: mutedColor,
                    background: dark ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.5)",
                    borderTop: `1px solid ${borderColor}`,
                  }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* ── CTA ── */}
        <div style={{
          margin: "3rem 0",
          padding: "2rem",
          borderRadius: "16px",
          background: `linear-gradient(135deg, ${NAVY}, #16213e)`,
          border: `1px solid ${GOLD_ACCENT}44`,
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: FONT_HEADING,
            fontSize: "1.3rem",
            fontWeight: 700,
            color: SILVER,
            marginBottom: "0.75rem",
          }}>{t.cta.title}</div>
          <p style={{
            fontFamily: bodyFont,
            fontSize: "0.95rem",
            color: "#999",
            marginBottom: "1.25rem",
            maxWidth: 500,
            margin: "0 auto 1.25rem",
          }}>{t.cta.text}</p>
          <a href="https://www.istanbulgumus.com" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "0.75rem 2rem",
              borderRadius: "30px",
              background: `linear-gradient(135deg, ${GOLD_ACCENT}, #c4972a)`,
              color: NAVY,
              fontFamily: FONT_HEADING,
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              transition: "transform 0.2s",
            }}>{t.cta.button}</a>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem",
          }}>
            {["@istanbulgumustr", "@istanbulgumuscom", "@istanbulgumusmen"].map((handle) => (
              <span key={handle} style={{
                fontFamily: FONT_MONO,
                fontSize: "0.75rem",
                color: DARK_SILVER,
              }}>{handle}</span>
            ))}
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer style={{
        padding: "2rem",
        borderTop: `1px solid ${borderColor}`,
        textAlign: "center",
        fontFamily: bodyFont,
        fontSize: "0.85rem",
        color: mutedColor,
      }}>
        <div style={{ marginBottom: "0.5rem" }}>{t.footer.copyright}</div>
        <div style={{ color: GOLD_ACCENT, marginBottom: "0.75rem" }}>{t.footer.sponsor}</div>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          {t.footer.links.map((link) => (
            <span key={link} style={{ cursor: "pointer", color: DARK_SILVER }}>{link}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}
