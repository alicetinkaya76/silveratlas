import { useState, useEffect } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Maden", "Sürdürülebilirlik"],
    category: "Maden", title: "Gümüş ve Sürdürülebilirlik",
    subtitle: "Geri dönüşüm oranları, etik madencilik, çevresel ayak izi ve yeşil gümüş geleceği",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "12 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Gümüş, insanlık tarihinin en eski metallerinden biridir — ancak modern dünyada bu değerli metalin çıkarılması, işlenmesi ve tüketilmesi ciddi çevresel ve sosyal sorular doğurmaktadır. Madencilik sektörü dünya genelinde sera gazı emisyonlarının %4-7'sinden sorumludur ve gümüş madenciliği de bu payın önemli bir parçasıdır.",
          "Bu makale, gümüş endüstrisinin sürdürülebilirlik performansını kapsamlı biçimde inceliyor: madencilikten geri dönüşüme, etik tedarikten karbon ayak izine kadar tüm boyutlarıyla."
        ]
      },
      {
        id: "madencilik",
        heading: "Gümüş Madenciliğinin Çevresel Etkisi",
        paragraphs: [
          "Gümüş madenciliği iki temel yöntemle yapılır: açık ocak ve yeraltı madenciliği. Açık ocak yöntemi geniş alanların kazılmasını gerektirir ve ekosistem tahribatı, toprak erozyonu ve su kirliliği gibi sorunlara yol açabilir. Yeraltı madenciliği daha az yüzey hasarı oluştursa da, enerji tüketimi ve havalandırma gereksinimleri yüksektir.",
          "Bir ons (31,1 gram) gümüş üretmek için ortalama 7-10 ton cevher işlenmesi gerekir. Bu süreçte siyanür liçi, asit çözündürme ve flotasyon gibi kimyasal yöntemler kullanılır. Modern tesisler kapalı devre su sistemleri ve atık yönetimi uygulamalarıyla bu etkileri azaltmaya çalışmaktadır.",
          "Gümüşün yaklaşık %70'i kurşun, çinko ve bakır madenciliğinin yan ürünü olarak elde edilir. Bu 'birlikte üretim' modeli, gümüşün çevresel maliyetini tek başına hesaplamayı zorlaştırır — ancak aynı zamanda ek madencilik faaliyeti gerektirmediği için dolaylı bir çevresel avantaj da sunar."
        ]
      },
      {
        id: "geri-donusum",
        heading: "Geri Dönüşüm: Gümüşün İkinci Hayatı",
        paragraphs: [
          "Gümüş, sonsuz kere geri dönüştürülebilen bir metaldir — kalitesinde hiçbir kayıp yaşanmaz. 2024 verilerine göre dünya gümüş arzının yaklaşık %20'si geri dönüşümden sağlanmaktadır ve bu oran istikrarlı biçimde artmaktadır.",
          "Geri dönüşüm kaynakları arasında endüstriyel hurda (fotoğraf filmleri, elektronik atıklar, güneş panelleri), eski takılar ve gümüş eşyalar yer alır. Özellikle elektronik atıklardaki gümüş geri kazanımı, kentsel madencilik (urban mining) kavramının en başarılı örneklerinden biridir.",
          "Geri dönüşüm gümüşün karbon ayak izini %60-80 oranında azaltır. Bir kilogram geri dönüşüm gümüşün üretimi yaklaşık 37 kg CO₂ emisyonu oluştururken, birincil madencilik yoluyla aynı miktar için 150-200 kg CO₂ salınır."
        ],
        widget: "carbonCompare"
      },
      {
        id: "etik",
        heading: "Etik Tedarik ve Sertifikasyon",
        paragraphs: [
          "Etik gümüş tedariki, hem çevresel hem sosyal sorumluluk ilkelerini kapsayan bir yaklaşımdır. Uluslararası sertifikasyon sistemleri, sorumlu madencilik uygulamalarını destekler ve tüketicilere bilinçli seçim yapma imkânı tanır."
        ],
        cards: [
          { icon: "🏅", name: "Fairmined", desc: "Küçük ölçekli, zanaatkâr madencileri destekler. Adil ücret ve çevre koruma standartları." },
          { icon: "🌍", name: "LBMA Sorumlu Kaynak", desc: "London Bullion Market Association'ın sorumlu altın ve gümüş programı." },
          { icon: "♻️", name: "SCS Geri Dönüşüm", desc: "SCS Global Services sertifikalı geri dönüşüm gümüşü doğrulaması." },
          { icon: "🤝", name: "Fairtrade", desc: "Fairtrade sertifikalı gümüş, topluluk gelişimi ve çevre fonlarını destekler." },
          { icon: "📋", name: "RJC (Sorumlu Kuyumculuk)", desc: "Responsible Jewellery Council üye markalarında tedarik zinciri denetimi." },
          { icon: "🔬", name: "Conflict-Free", desc: "Çatışma bölgelerinden bağımsız kaynak doğrulaması." }
        ]
      },
      {
        id: "yesil-teknoloji",
        heading: "Yeşil Teknolojilerde Gümüşün Paradoksu",
        paragraphs: [
          "Gümüş, yeşil enerji dönüşümünün vazgeçilmez metallerinden biridir. Güneş panellerinde iletken macun olarak, elektrikli araç bağlantılarında ve su arıtma sistemlerinde kritik rol oynar. 2025'te güneş enerjisi sektörü tek başına 150 milyon ons gümüş tüketmiştir — toplam endüstriyel talebin yaklaşık %30'u.",
          "Paradoks şudur: yeşil teknolojiler çevreyi korumak için üretilir, ancak bu teknolojiler için gereken gümüşün madenciliği çevresel etki yaratır. Bu döngüyü kırmak için biyomadencilik, deniz suyu geri kazanımı ve nano-gümüş geri dönüşümü gibi yenilikçi yöntemler geliştirilmektedir.",
          "Güneş paneli endüstrisi, gümüş kullanımını son 10 yılda panel başına %50 azaltmayı başarmıştır. Ancak toplam kurulum sayısının artması, mutlak talebi yükselmeye devam ettirmektedir."
        ]
      },
      {
        id: "turkiye",
        heading: "Türkiye'de Sürdürülebilir Gümüş",
        paragraphs: [
          "Türkiye, gümüş takı üretiminde dünya liderlerinden biridir ve sektörün sürdürülebilirliği ekonomik açıdan da stratejik önem taşımaktadır. İstanbul Kuyumcular Odası verilerine göre Türkiye'nin gümüş takı ihracatı 2024'te 1,2 milyar doları aşmıştır.",
          "Türk gümüş sektöründe geri dönüşüm oranı %40'ın üzerindedir — Avrupa ortalamasının altında olsa da, son 5 yılda %15'lik bir artış kaydedilmiştir. Konya, Trabzon ve İstanbul'daki üretim merkezlerinde atık su arıtma ve enerji verimliliği yatırımları artmaktadır.",
          "Geleneksel Türk gümüş zanaatı — telkâri, savat, kazaz — doğası gereği düşük atıklı, el işçiliğine dayalı üretim modelleridir. Bu zanaat geleneklerinin korunması, sürdürülebilirliğin kültürel boyutunu da temsil eder."
        ]
      },
      {
        id: "tuketici",
        heading: "Tüketici Olarak Ne Yapabiliriz?",
        paragraphs: [
          "Bilinçli tüketim, gümüş endüstrisinin sürdürülebilirliğinde kritik bir rol oynar. Birkaç basit adım, çevresel etkiyi önemli ölçüde azaltabilir:"
        ],
        tips: [
          "Geri dönüşüm gümüşü tercih edin: SCS veya eşdeğer sertifikalı ürünleri arayın.",
          "Kaliteye yatırım yapın: Ucuz, kısa ömürlü takılar yerine iyi yapılmış, uzun ömürlü parçalar seçin.",
          "Bakım yapın: Düzenli bakımla gümüş takılarınız on yıllarca dayanır, yeni ürün talebi azalır.",
          "Yerel zanaatkârlara destek olun: El yapımı ürünler genellikle daha düşük karbon ayak izine sahiptir.",
          "İkinci el pazarını değerlendirin: Antika ve vintage gümüş, sıfır ek madencilik anlamına gelir.",
          "Markaları sorgulayın: Tedarik zinciri şeffaflığı sunan firmaları tercih edin."
        ]
      },
      {
        id: "gelecek",
        heading: "Gümüşün Yeşil Geleceği",
        paragraphs: [
          "Gümüş endüstrisinin geleceği, döngüsel ekonomi ilkeleriyle şekillenecektir. Biyomadencilik (bakteri ve mantarlarla metal geri kazanımı), asteroitlerden kaynak çıkarma araştırmaları ve yapay fotosentez gibi teknolojiler henüz erken aşamada olsa da, uzun vadeli potansiyelleri büyüktür.",
          "2030 hedeflerine göre gümüş geri dönüşüm oranının %30'u aşması, endüstriyel atıklarda gümüş geri kazanım veriminin %95'e ulaşması ve madencilik sektörünün karbon nötrlük taahhütlerini yerine getirmesi beklenmektedir.",
          "Tüketici bilinci, teknolojik yenilikler ve düzenleyici baskılar bir arada, gümüş endüstrisini daha sürdürülebilir bir geleceğe doğru yönlendirmektedir. Gümüşün binlerce yıllık hikâyesinde yeni bir sayfa açılıyor: sorumlu gümüş çağı."
        ]
      }
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Geri dönüşüm gümüşü kalite olarak yeni madenden çıkandan farklı mıdır?", a: "Hayır. Geri dönüşüm sürecinde gümüş tamamen saflaştırılır ve yeni çıkarılan gümüşle aynı kalitededir. 925 ayar geri dönüşüm gümüşü, 925 ayar birincil gümüşle kimyasal olarak özdeştir." },
        { q: "Gümüş madenciliği altın madenciliğinden daha mı az zararlı?", a: "Genel olarak evet. Gümüş madenciliğinin ton başına karbon ayak izi altından önemli ölçüde düşüktür. Ayrıca gümüşün büyük bölümü diğer metallerin yan ürünü olarak elde edildiğinden, ek çevresel yük daha sınırlıdır." },
        { q: "Fairmined sertifikalı gümüş nasıl bulabilirim?", a: "Fairmined web sitesinden sertifikalı kuyumcuları ve tedarikçileri arayabilirsiniz. Türkiye'de henüz sınırlı sayıda Fairmined tedarikçi bulunsa da, SCS geri dönüşüm sertifikalı ürünler daha yaygındır." },
        { q: "Güneş panellerindeki gümüş geri kazanılabiliyor mu?", a: "Evet. Panel ömrü sonunda (25-30 yıl) gümüş dahil tüm değerli metaller geri kazanılabilir. AB'de güneş paneli geri dönüşümü zorunlu hale getirilmiştir." },
        { q: "Takı sektörü toplam gümüş tüketiminin ne kadarını oluşturuyor?", a: "Takı ve gümüş eşya sektörü, toplam gümüş tüketiminin yaklaşık %25-30'unu oluşturur. Endüstriyel kullanım %55-60, yatırım ise %15-20 aralığındadır." }
      ]
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "LBMA — Responsible Silver Guidance v2",
        "Fairmined — \"Impact Report 2024\"",
        "IEA — \"Solar PV Global Supply Chain Special Report\"",
        "UNEP — \"Metal Recycling: Opportunities, Limits, Infrastructure\""
      ]
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "Çevresel Etki", path: "/tr/maden/cevre", cat: "Maden" },
        { title: "Dünya Madenleri", path: "/tr/maden/dunya", cat: "Maden" },
        { title: "Gümüşün Geleceği", path: "/tr/piyasa/gelecek", cat: "Piyasa" }
      ]
    },
    sponsor: {
      text: "Etik kaynaklı 925 ayar gümüş takılarımızı keşfedin.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir."
    },
    carbonWidget: {
      title: "Karbon Ayak İzi Karşılaştırması",
      subtitle: "1 kg gümüş üretimi için CO₂ emisyonu",
      primary: "Birincil Madencilik",
      recycled: "Geri Dönüşüm",
      unit: "kg CO₂",
      savings: "tasarruf"
    },
    darkMode: "Mod", toc: "İçindekiler"
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Mining", "Sustainability"],
    category: "Mining", title: "Silver and Sustainability",
    subtitle: "Recycling rates, ethical mining, carbon footprint, and the future of green silver",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "12 min read" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Silver is one of humanity's oldest metals — yet in the modern world, extracting, processing, and consuming this precious metal raises serious environmental and social questions. The mining sector accounts for 4-7% of global greenhouse gas emissions, and silver mining contributes significantly.",
          "This article comprehensively examines the sustainability performance of the silver industry: from mining to recycling, ethical sourcing to carbon footprint."
        ]
      },
      {
        id: "mining",
        heading: "Environmental Impact of Silver Mining",
        paragraphs: [
          "Silver mining employs two primary methods: open-pit and underground. Open-pit requires excavating vast areas, potentially causing ecosystem destruction, soil erosion, and water contamination. Underground mining creates less surface damage but demands high energy and ventilation.",
          "Producing one ounce (31.1g) of silver requires processing an average of 7-10 tons of ore. Chemical methods including cyanide leaching, acid dissolution, and flotation are used. Modern facilities employ closed-loop water systems and waste management to mitigate these impacts.",
          "Approximately 70% of silver is obtained as a byproduct of lead, zinc, and copper mining. This 'co-production' model makes calculating silver's standalone environmental cost complex — but also means no additional mining activity is required, providing an indirect environmental advantage."
        ]
      },
      {
        id: "recycling",
        heading: "Recycling: Silver's Second Life",
        paragraphs: [
          "Silver can be recycled infinitely with no quality loss. According to 2024 data, approximately 20% of the world's silver supply comes from recycling, and this ratio is steadily increasing.",
          "Recycling sources include industrial scrap (photographic films, electronic waste, solar panels), old jewelry, and silverware. Silver recovery from electronic waste is one of the most successful examples of urban mining.",
          "Recycling reduces silver's carbon footprint by 60-80%. Producing one kilogram of recycled silver generates approximately 37 kg CO₂, compared to 150-200 kg CO₂ for the same amount through primary mining."
        ],
        widget: "carbonCompare"
      },
      {
        id: "ethics",
        heading: "Ethical Sourcing and Certification",
        paragraphs: [
          "Ethical silver sourcing encompasses both environmental and social responsibility principles. International certification systems support responsible mining practices and enable informed consumer choices."
        ],
        cards: [
          { icon: "🏅", name: "Fairmined", desc: "Supports small-scale artisanal miners. Fair wage and environmental standards." },
          { icon: "🌍", name: "LBMA Responsible", desc: "London Bullion Market Association's responsible gold and silver program." },
          { icon: "♻️", name: "SCS Recycled", desc: "SCS Global Services certified recycled silver verification." },
          { icon: "🤝", name: "Fairtrade", desc: "Fairtrade certified silver supports community development and environmental funds." },
          { icon: "📋", name: "RJC", desc: "Responsible Jewellery Council supply chain auditing for member brands." },
          { icon: "🔬", name: "Conflict-Free", desc: "Source verification independent of conflict zones." }
        ]
      },
      {
        id: "green-tech",
        heading: "Silver's Green Technology Paradox",
        paragraphs: [
          "Silver is indispensable for the green energy transition. It serves as conductive paste in solar panels, in EV connections, and water purification systems. In 2025, the solar sector alone consumed 150 million ounces — about 30% of total industrial demand.",
          "The paradox: green technologies are produced to protect the environment, yet mining the silver they require creates environmental impact. Innovative methods like biomining, seawater recovery, and nano-silver recycling aim to break this cycle.",
          "The solar panel industry has reduced per-panel silver usage by 50% over the last decade. However, growing total installations continue to drive absolute demand upward."
        ]
      },
      {
        id: "turkey",
        heading: "Sustainable Silver in Turkey",
        paragraphs: [
          "Turkey is a world leader in silver jewelry production, making sector sustainability strategically important. According to Istanbul Chamber of Jewelers, Turkey's silver jewelry exports exceeded $1.2 billion in 2024.",
          "Turkey's silver sector recycling rate exceeds 40% — below the European average but showing a 15% increase over the past five years. Production centers in Konya, Trabzon, and Istanbul are increasing investments in wastewater treatment and energy efficiency.",
          "Traditional Turkish silver crafts — filigree, niello, kazaz — are inherently low-waste, handcraft-based production models. Preserving these traditions also represents sustainability's cultural dimension."
        ]
      },
      {
        id: "consumer",
        heading: "What Can We Do as Consumers?",
        paragraphs: [
          "Conscious consumption plays a critical role in silver industry sustainability. A few simple steps can significantly reduce environmental impact:"
        ],
        tips: [
          "Choose recycled silver: Look for SCS or equivalent certified products.",
          "Invest in quality: Choose well-made, long-lasting pieces over cheap, short-lived jewelry.",
          "Maintain your silver: With regular care, silver jewelry lasts decades, reducing demand for new products.",
          "Support local artisans: Handmade products generally have lower carbon footprints.",
          "Consider second-hand: Antique and vintage silver means zero additional mining.",
          "Question brands: Prefer companies offering supply chain transparency."
        ]
      },
      {
        id: "future",
        heading: "Silver's Green Future",
        paragraphs: [
          "The silver industry's future will be shaped by circular economy principles. Technologies like biomining, asteroid resource extraction research, and artificial photosynthesis are in early stages but hold long-term potential.",
          "By 2030 targets, silver recycling rates should exceed 30%, industrial waste silver recovery should reach 95% efficiency, and the mining sector should fulfill carbon neutrality commitments.",
          "Consumer awareness, technological innovation, and regulatory pressure are collectively steering the silver industry toward a more sustainable future. A new chapter is opening in silver's millennia-old story: the age of responsible silver."
        ]
      }
    ],
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Is recycled silver different in quality from newly mined silver?", a: "No. During recycling, silver is fully purified and is chemically identical to newly mined silver. 925 recycled sterling is the same as 925 primary sterling." },
        { q: "Is silver mining less harmful than gold mining?", a: "Generally yes. Silver mining's per-ton carbon footprint is significantly lower than gold's. Since most silver is obtained as a byproduct of other metals, the additional environmental burden is more limited." },
        { q: "How can I find Fairmined certified silver?", a: "You can search for certified jewelers on the Fairmined website. While Fairmined suppliers are limited in Turkey, SCS recycled certified products are more widely available." },
        { q: "Can silver in solar panels be recovered?", a: "Yes. At end of panel life (25-30 years), silver and all precious metals can be recovered. Solar panel recycling is mandatory in the EU." },
        { q: "What share does jewelry represent of total silver consumption?", a: "Jewelry and silverware account for approximately 25-30% of total silver consumption. Industrial use represents 55-60%, and investment 15-20%." }
      ]
    },
    sources: {
      heading: "Sources",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "LBMA — Responsible Silver Guidance v2",
        "Fairmined — \"Impact Report 2024\"",
        "IEA — \"Solar PV Global Supply Chain Special Report\"",
        "UNEP — \"Metal Recycling: Opportunities, Limits, Infrastructure\""
      ]
    },
    related: {
      heading: "Related Topics",
      items: [
        { title: "Environmental Impact", path: "/en/mining/environment", cat: "Mining" },
        { title: "Global Mines", path: "/en/mining/world", cat: "Mining" },
        { title: "Future of Silver", path: "/en/market/future", cat: "Market" }
      ]
    },
    sponsor: {
      text: "Explore our ethically sourced 925 sterling silver jewelry.",
      cta: "See on Instagram",
      note: "This content is sponsored by İstanbul Gümüş."
    },
    carbonWidget: {
      title: "Carbon Footprint Comparison",
      subtitle: "CO₂ emissions per 1 kg silver production",
      primary: "Primary Mining",
      recycled: "Recycled",
      unit: "kg CO₂",
      savings: "savings"
    },
    darkMode: "Mode", toc: "Contents"
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة معرفة الفضة",
    breadcrumb: ["الرئيسية", "التعدين", "الاستدامة"],
    category: "التعدين", title: "الفضة والاستدامة",
    subtitle: "معدلات إعادة التدوير، التعدين الأخلاقي، البصمة الكربونية ومستقبل الفضة الخضراء",
    meta: { author: "توران إرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٢ دقائق قراءة" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "الفضة من أقدم المعادن في تاريخ البشرية — لكن في العالم الحديث، يثير استخراج هذا المعدن الثمين ومعالجته واستهلاكه أسئلة بيئية واجتماعية جدية. يمثل قطاع التعدين ٤-٧٪ من انبعاثات غازات الاحتباس الحراري العالمية.",
          "يتناول هذا المقال أداء الاستدامة في صناعة الفضة بشكل شامل: من التعدين إلى إعادة التدوير، ومن التوريد الأخلاقي إلى البصمة الكربونية."
        ]
      },
      {
        id: "mining", heading: "الأثر البيئي لتعدين الفضة",
        paragraphs: [
          "يستخدم تعدين الفضة طريقتين أساسيتين: المناجم المفتوحة والتعدين تحت الأرض. تتطلب المناجم المفتوحة حفر مساحات واسعة مما قد يسبب تدمير النظام البيئي وتآكل التربة وتلوث المياه.",
          "إنتاج أونصة واحدة (٣١.١ غرام) من الفضة يتطلب معالجة ٧-١٠ أطنان من الخام في المتوسط. تُستخدم طرق كيميائية تشمل ترشيح السيانيد وإذابة الحمض والتعويم.",
          "حوالي ٧٠٪ من الفضة يتم الحصول عليها كمنتج ثانوي لتعدين الرصاص والزنك والنحاس."
        ]
      },
      {
        id: "recycling", heading: "إعادة التدوير: الحياة الثانية للفضة",
        paragraphs: [
          "يمكن إعادة تدوير الفضة بلا حدود دون فقدان الجودة. وفقًا لبيانات ٢٠٢٤، يأتي حوالي ٢٠٪ من إمدادات الفضة العالمية من إعادة التدوير.",
          "تشمل مصادر إعادة التدوير الخردة الصناعية والمجوهرات القديمة والأدوات الفضية. استعادة الفضة من النفايات الإلكترونية هي من أنجح أمثلة التعدين الحضري.",
          "تقلل إعادة التدوير البصمة الكربونية للفضة بنسبة ٦٠-٨٠٪. إنتاج كيلوغرام واحد من الفضة المعاد تدويرها يولد حوالي ٣٧ كغ ثاني أكسيد الكربون، مقارنة بـ ١٥٠-٢٠٠ كغ للتعدين الأولي."
        ],
        widget: "carbonCompare"
      },
      {
        id: "ethics", heading: "التوريد الأخلاقي والشهادات",
        paragraphs: [
          "يشمل التوريد الأخلاقي للفضة مبادئ المسؤولية البيئية والاجتماعية. تدعم أنظمة الشهادات الدولية ممارسات التعدين المسؤولة."
        ],
        cards: [
          { icon: "🏅", name: "فيرمايند", desc: "يدعم عمال المناجم الحرفيين الصغار. معايير الأجور العادلة وحماية البيئة." },
          { icon: "🌍", name: "LBMA المسؤول", desc: "برنامج جمعية سوق السبائك بلندن للذهب والفضة المسؤولة." },
          { icon: "♻️", name: "SCS معاد التدوير", desc: "شهادة التحقق من الفضة المعاد تدويرها من SCS Global Services." },
          { icon: "🤝", name: "التجارة العادلة", desc: "فضة معتمدة من التجارة العادلة تدعم تنمية المجتمعات وصناديق البيئة." },
          { icon: "📋", name: "RJC", desc: "مراجعة سلسلة التوريد لأعضاء مجلس المجوهرات المسؤولة." },
          { icon: "🔬", name: "خالية من النزاعات", desc: "التحقق من المصدر بشكل مستقل عن مناطق النزاع." }
        ]
      },
      {
        id: "green-tech", heading: "مفارقة التكنولوجيا الخضراء للفضة",
        paragraphs: [
          "الفضة لا غنى عنها في التحول للطاقة الخضراء. تعمل كمعجون موصل في الألواح الشمسية وفي وصلات السيارات الكهربائية. في ٢٠٢٥ استهلك قطاع الطاقة الشمسية وحده ١٥٠ مليون أونصة.",
          "المفارقة: التقنيات الخضراء تُنتج لحماية البيئة، لكن تعدين الفضة اللازمة لها يخلق أثرًا بيئيًا.",
          "نجحت صناعة الألواح الشمسية في تقليل استخدام الفضة لكل لوح بنسبة ٥٠٪ خلال العقد الماضي."
        ]
      },
      {
        id: "turkey", heading: "الفضة المستدامة في تركيا",
        paragraphs: [
          "تركيا رائدة عالميًا في إنتاج مجوهرات الفضة. تجاوزت صادرات المجوهرات الفضية التركية ١.٢ مليار دولار في ٢٠٢٤.",
          "معدل إعادة التدوير في قطاع الفضة التركي يتجاوز ٤٠٪. تتزايد الاستثمارات في معالجة المياه وكفاءة الطاقة في مراكز الإنتاج.",
          "الحرف الفضية التركية التقليدية — الفيليغري والنيلو والكازاز — هي بطبيعتها نماذج إنتاج يدوية منخفضة النفايات."
        ]
      },
      {
        id: "consumer", heading: "ماذا يمكننا فعله كمستهلكين؟",
        paragraphs: [
          "الاستهلاك الواعي يلعب دورًا حاسمًا في استدامة صناعة الفضة:"
        ],
        tips: [
          "اختر الفضة المعاد تدويرها: ابحث عن منتجات معتمدة من SCS.",
          "استثمر في الجودة: اختر قطعًا متينة بدلاً من المجوهرات الرخيصة قصيرة العمر.",
          "اعتنِ بفضتك: العناية المنتظمة تجعل المجوهرات تدوم عقودًا.",
          "ادعم الحرفيين المحليين: المنتجات اليدوية عادةً ذات بصمة كربونية أقل.",
          "فكر في السوق المستعملة: الفضة العتيقة تعني صفر تعدين إضافي.",
          "ساءل العلامات التجارية: فضّل الشركات التي تقدم شفافية سلسلة التوريد."
        ]
      },
      {
        id: "future", heading: "مستقبل الفضة الأخضر",
        paragraphs: [
          "سيتشكل مستقبل صناعة الفضة وفق مبادئ الاقتصاد الدائري. التعدين الحيوي واستخراج الموارد من الكويكبات والتمثيل الضوئي الاصطناعي لا تزال في مراحلها الأولى.",
          "بحلول ٢٠٣٠، من المتوقع أن تتجاوز معدلات إعادة تدوير الفضة ٣٠٪ وأن تصل كفاءة استعادة الفضة الصناعية إلى ٩٥٪.",
          "وعي المستهلكين والابتكار التكنولوجي والضغوط التنظيمية تقود معًا صناعة الفضة نحو مستقبل أكثر استدامة."
        ]
      }
    ],
    faq: {
      heading: "الأسئلة الشائعة",
      items: [
        { q: "هل تختلف الفضة المعاد تدويرها في الجودة عن المستخرجة حديثًا؟", a: "لا. أثناء إعادة التدوير، تُنقى الفضة بالكامل وتكون مطابقة كيميائيًا للفضة المستخرجة حديثًا." },
        { q: "هل تعدين الفضة أقل ضررًا من تعدين الذهب؟", a: "بشكل عام نعم. البصمة الكربونية لتعدين الفضة أقل بكثير من الذهب للطن الواحد." },
        { q: "هل يمكن استعادة الفضة في الألواح الشمسية؟", a: "نعم. عند انتهاء عمر اللوح (٢٥-٣٠ سنة)، يمكن استعادة الفضة وجميع المعادن الثمينة." },
        { q: "ما حصة المجوهرات من إجمالي استهلاك الفضة؟", a: "تشكل المجوهرات والأدوات الفضية حوالي ٢٥-٣٠٪ من إجمالي الاستهلاك." }
      ]
    },
    sources: {
      heading: "المصادر",
      items: [
        "معهد الفضة — \"مسح الفضة العالمي ٢٠٢٥\"",
        "LBMA — إرشادات الفضة المسؤولة",
        "فيرمايند — \"تقرير الأثر ٢٠٢٤\"",
        "وكالة الطاقة الدولية — تقرير سلسلة توريد الطاقة الشمسية",
        "برنامج الأمم المتحدة للبيئة — إعادة تدوير المعادن"
      ]
    },
    related: {
      heading: "مواضيع ذات صلة",
      items: [
        { title: "الأثر البيئي", path: "/ar/mining/environment", cat: "التعدين" },
        { title: "المناجم العالمية", path: "/ar/mining/world", cat: "التعدين" },
        { title: "مستقبل الفضة", path: "/ar/market/future", cat: "السوق" }
      ]
    },
    sponsor: {
      text: "اكتشف مجوهراتنا من الفضة الإسترلينية ٩٢٥ من مصادر أخلاقية.",
      cta: "شاهد على إنستغرام",
      note: "هذا المحتوى برعاية إسطنبول غوموش."
    },
    carbonWidget: {
      title: "مقارنة البصمة الكربونية",
      subtitle: "انبعاثات ثاني أكسيد الكربون لإنتاج ١ كغ فضة",
      primary: "التعدين الأولي",
      recycled: "إعادة التدوير",
      unit: "كغ CO₂",
      savings: "توفير"
    },
    darkMode: "الوضع", toc: "المحتويات"
  }
};

const fontD = "'Playfair Display', serif";
const fontB = "'Source Sans 3', sans-serif";
const fontAr = "'Noto Naskh Arabic', serif";
const gold = "#D4AF37";
const accent = "#C0C0C0";

// ─── Carbon Compare Widget ──────────────────────────────
function CarbonCompareWidget({ t, dark, isRTL }) {
  const [animated, setAnimated] = useState(false);
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const textP = dark ? "#e8e8e8" : "#1a1a2e";
  const textS = dark ? "#a0a0a0" : "#555";

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const primary = 175;
  const recycled = 37;
  const savingsPercent = Math.round((1 - recycled / primary) * 100);
  const maxBar = 200;

  return (
    <div style={{
      margin: "24px 0", padding: "24px", borderRadius: 14,
      border: `1px solid ${border}`,
      background: dark ? "rgba(192,192,192,0.03)" : "rgba(192,192,192,0.06)",
    }}>
      <h3 style={{ fontFamily: fontD, fontSize: 18, fontWeight: 600, marginBottom: 4, color: textP }}>
        {t.carbonWidget.title}
      </h3>
      <p style={{ fontSize: 12, color: textS, marginBottom: 24 }}>{t.carbonWidget.subtitle}</p>

      {/* Primary mining bar */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13 }}>
          <span style={{ color: textS }}>{t.carbonWidget.primary}</span>
          <span style={{ color: "#e74c3c", fontWeight: 600 }}>{primary} {t.carbonWidget.unit}</span>
        </div>
        <div style={{ height: 28, borderRadius: 8, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", overflow: "hidden" }}>
          <div style={{
            height: "100%", borderRadius: 8,
            background: "linear-gradient(90deg, #e74c3c, #c0392b)",
            width: animated ? `${(primary / maxBar) * 100}%` : "0%",
            transition: "width 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
            display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 10,
          }}>
            <span style={{ fontSize: 11, color: "#fff", fontWeight: 600 }}>🏭</span>
          </div>
        </div>
      </div>

      {/* Recycled bar */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13 }}>
          <span style={{ color: textS }}>{t.carbonWidget.recycled}</span>
          <span style={{ color: "#27ae60", fontWeight: 600 }}>{recycled} {t.carbonWidget.unit}</span>
        </div>
        <div style={{ height: 28, borderRadius: 8, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", overflow: "hidden" }}>
          <div style={{
            height: "100%", borderRadius: 8,
            background: "linear-gradient(90deg, #27ae60, #2ecc71)",
            width: animated ? `${(recycled / maxBar) * 100}%` : "0%",
            transition: "width 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
            display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 10,
          }}>
            <span style={{ fontSize: 11, color: "#fff", fontWeight: 600 }}>♻️</span>
          </div>
        </div>
      </div>

      {/* Savings badge */}
      <div style={{
        textAlign: "center", padding: "14px", borderRadius: 10,
        background: dark ? "rgba(39,174,96,0.08)" : "rgba(39,174,96,0.1)",
        border: `1px solid rgba(39,174,96,0.2)`,
      }}>
        <span style={{ fontSize: 32, fontWeight: 700, color: "#27ae60", fontFamily: fontD }}>
          {savingsPercent}%
        </span>
        <span style={{ fontSize: 14, color: textS, marginLeft: 8 }}> CO₂ {t.carbonWidget.savings}</span>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────
export default function SilverAtlasSustainabilityArticle() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const t = T[lang];
  const isRTL = lang === "ar";
  const textP = dark ? "#e8e8e8" : "#1a1a2e";
  const textS = dark ? "#a0a0a0" : "#555";
  const bgMain = dark ? "#0f0f14" : "#fafaf5";
  const bgCard = dark ? "#16161c" : "#ffffff";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;600&family=Noto+Naskh+Arabic:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{
      fontFamily: isRTL ? fontAr : fontB, background: bgMain, color: textP, minHeight: "100vh", lineHeight: 1.6,
    }}>
      {/* Sticky Nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50, padding: "10px 20px",
        background: dark ? "rgba(15,15,20,0.92)" : "rgba(250,250,245,0.92)",
        backdropFilter: "blur(12px)", borderBottom: `1px solid ${border}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: `linear-gradient(135deg, ${accent}, ${gold})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 10, fontWeight: 700, color: "#0f0f14", fontFamily: fontD,
          }}>Ag</div>
          <div>
            <div style={{ fontFamily: fontD, fontWeight: 600, fontSize: 14, lineHeight: 1 }}>{t.nav}</div>
            <div style={{ fontSize: 9, color: textS, letterSpacing: "0.03em" }}>{t.navSub}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {["tr", "en", "ar"].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              padding: "4px 10px", borderRadius: 6, border: `1px solid ${lang === l ? gold : border}`,
              background: lang === l ? gold + "15" : "transparent", cursor: "pointer",
              color: lang === l ? gold : textS, fontSize: 11, fontWeight: 600,
            }}>{l.toUpperCase()}</button>
          ))}
          <button onClick={() => setDark(!dark)} style={{
            marginLeft: 8, padding: "4px 10px", borderRadius: 6, border: `1px solid ${border}`,
            background: "transparent", cursor: "pointer", color: textS, fontSize: 11,
          }}>{dark ? "☀️" : "🌙"} {t.darkMode}</button>
        </div>
      </nav>

      <article style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px" }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: 12, color: textS, marginBottom: 24, display: "flex", gap: 6, flexWrap: "wrap" }}>
          {t.breadcrumb.map((b, i) => (
            <span key={i}>{i > 0 && <span style={{ margin: "0 4px", opacity: 0.4 }}>/</span>}
              <span style={{ color: i === t.breadcrumb.length - 1 ? gold : textS }}>{b}</span>
            </span>
          ))}
        </div>

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{
            display: "inline-block", padding: "3px 12px", borderRadius: 6,
            fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
            color: gold, border: `1px solid ${gold}33`, marginBottom: 16,
          }}>{t.category}</div>
          <h1 style={{
            fontFamily: isRTL ? fontAr : fontD, fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 700, lineHeight: 1.15, marginBottom: 12,
          }}>{t.title}</h1>
          <p style={{ fontSize: 16, color: textS, lineHeight: 1.6, marginBottom: 20 }}>{t.subtitle}</p>
          <div style={{
            display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
            fontSize: 13, color: textS, paddingBottom: 20, borderBottom: `1px solid ${border}`,
          }}>
            <span>{t.meta.author}</span><span style={{ opacity: 0.3 }}>·</span>
            <span>{t.meta.date}</span><span style={{ opacity: 0.3 }}>·</span>
            <span>{t.meta.readTime}</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div style={{
          height: 220, borderRadius: 16, marginBottom: 36, overflow: "hidden",
          background: dark
            ? "linear-gradient(135deg, #0a2e1a 0%, #1a3a2a 50%, #0a2e1a 100%)"
            : "linear-gradient(135deg, #d4edda 0%, #b8d8be 50%, #d4edda 100%)",
          display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
        }}>
          <div style={{ textAlign: "center", zIndex: 1 }}>
            <div style={{ fontSize: 52 }}>♻️</div>
            <div style={{
              fontFamily: fontD, fontSize: 18, fontWeight: 600, marginTop: 8,
              background: `linear-gradient(135deg, ${accent}, #27ae60)`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>SUSTAINABLE SILVER</div>
          </div>
        </div>

        {/* TOC */}
        <div style={{
          marginBottom: 36, padding: "20px 24px", borderRadius: 12,
          border: `1px solid ${border}`, background: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
        }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: gold }}>{t.toc}</h3>
          {t.sections.filter(s => s.heading).map(s => (
            <a key={s.id} href={`#${s.id}`} style={{
              display: "block", fontSize: 13, color: textS, textDecoration: "none", padding: "4px 0",
            }}>{s.heading}</a>
          ))}
        </div>

        {/* Sections */}
        {t.sections.map(sec => (
          <section key={sec.id} id={sec.id} style={{ marginBottom: 36 }}>
            {sec.heading && (
              <h2 style={{
                fontFamily: isRTL ? fontAr : fontD, fontSize: 24, fontWeight: 600,
                marginBottom: 16, paddingTop: 8,
              }}>{sec.heading}</h2>
            )}
            {sec.paragraphs.map((p, pi) => (
              <p key={pi} style={{ fontSize: 15, lineHeight: 1.8, color: textS, marginBottom: 14 }}>{p}</p>
            ))}

            {sec.table && (
              <div style={{ overflowX: "auto", margin: "20px 0", borderRadius: 12, border: `1px solid ${border}` }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                  <thead>
                    <tr style={{ background: dark ? "rgba(192,192,192,0.05)" : "rgba(0,0,0,0.03)" }}>
                      {sec.table.headers.map((h, i) => (
                        <th key={i} style={{
                          padding: "12px 14px", textAlign: isRTL ? "right" : "left",
                          fontWeight: 600, color: textP, borderBottom: `1px solid ${border}`, whiteSpace: "nowrap",
                        }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sec.table.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci} style={{
                            padding: "10px 14px", borderBottom: `1px solid ${border}`,
                            color: ci === 0 ? textP : textS, fontWeight: ci === 0 ? 600 : 400,
                          }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {sec.widget === "carbonCompare" && <CarbonCompareWidget t={t} dark={dark} isRTL={isRTL} />}

            {sec.cards && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10, margin: "20px 0" }}>
                {sec.cards.map((c, i) => (
                  <div key={i} style={{
                    padding: "16px", borderRadius: 12, border: `1px solid ${border}`,
                    background: bgCard, textAlign: "center",
                  }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: textP, marginBottom: 6 }}>{c.name}</div>
                    <div style={{ fontSize: 11, color: textS, lineHeight: 1.5 }}>{c.desc}</div>
                  </div>
                ))}
              </div>
            )}

            {sec.tips && (
              <div style={{
                background: dark ? "rgba(192,192,192,0.03)" : "rgba(192,192,192,0.06)",
                border: `1px solid ${border}`, borderRadius: 12, padding: "20px 24px", marginTop: 16,
              }}>
                {sec.tips.map((tip, ti) => (
                  <div key={ti} style={{
                    display: "flex", alignItems: "flex-start", gap: 10,
                    marginBottom: ti < sec.tips.length - 1 ? 12 : 0, fontSize: 14, lineHeight: 1.6, color: textS,
                  }}>
                    <span style={{
                      flexShrink: 0, width: 22, height: 22, borderRadius: "50%",
                      background: "rgba(39,174,96,0.15)", color: "#27ae60",
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
          <h2 style={{ fontFamily: isRTL ? fontAr : fontD, fontSize: 24, fontWeight: 600, marginBottom: 20 }}>{t.faq.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {t.faq.items.map((item, i) => (
              <div key={i} style={{
                border: `1px solid ${openFaq === i ? gold + "44" : border}`, borderRadius: 12, overflow: "hidden",
                background: openFaq === i ? (dark ? "rgba(212,175,55,0.03)" : "rgba(212,175,55,0.04)") : "transparent",
              }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                  width: "100%", border: "none", cursor: "pointer", background: "transparent",
                  padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between",
                  color: textP, fontSize: 14, fontWeight: 500, fontFamily: isRTL ? fontAr : fontB,
                  textAlign: isRTL ? "right" : "left", gap: 12,
                }}>
                  <span style={{ flex: 1 }}>{item.q}</span>
                  <span style={{ fontSize: 18, color: textS, transition: "transform 0.3s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)", flexShrink: 0 }}>+</span>
                </button>
                {openFaq === i && <div style={{ padding: "0 20px 16px", fontSize: 14, lineHeight: 1.7, color: textS }}>{item.a}</div>}
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
            <div key={i} style={{ fontSize: 13, color: textS, lineHeight: 1.6, marginBottom: 6, display: "flex", gap: 8 }}>
              <span style={{ color: accent, fontWeight: 600, flexShrink: 0 }}>[{i + 1}]</span><span>{s}</span>
            </div>
          ))}
        </section>

        {/* Related */}
        <section style={{ marginBottom: 40 }}>
          <h3 style={{ fontSize: 18, fontFamily: isRTL ? fontAr : fontD, fontWeight: 600, marginBottom: 16 }}>{t.related.heading}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {t.related.items.map((item, i) => (
              <a key={i} href={item.path} style={{
                textDecoration: "none", padding: "16px 18px", border: `1px solid ${border}`,
                borderRadius: 12, background: bgCard, transition: "all 0.25s", display: "block",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = gold + "44"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ fontSize: 10, color: gold, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.cat}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: textP }}>{item.title}</div>
                <div style={{ fontSize: 12, color: textS, marginTop: 6 }}>{isRTL ? "←" : "→"}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Sponsor CTA */}
        <div style={{
          border: `1px solid ${gold}22`, borderRadius: 16, padding: "28px 24px",
          background: dark ? "rgba(212,175,55,0.03)" : "rgba(212,175,55,0.05)", textAlign: "center",
        }}>
          <p style={{ fontSize: 15, color: textP, marginBottom: 16, lineHeight: 1.6 }}>{t.sponsor.text}</p>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 16 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{
                width: 80, height: 80, borderRadius: 10,
                background: dark ? `linear-gradient(${120 * i}deg, #1e1e2e, #2a2a3e)` : `linear-gradient(${120 * i}deg, #e0ddd4, #d5d0c4)`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={textS} strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill={textS} />
                </svg>
              </div>
            ))}
          </div>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", borderRadius: 10,
            background: `linear-gradient(135deg, ${accent}, ${gold})`, color: "#0f0f14",
            fontSize: 13, fontWeight: 600, textDecoration: "none",
          }}>📸 {t.sponsor.cta}</a>
          <p style={{ fontSize: 11, color: textS, marginTop: 14, opacity: 0.7 }}>{t.sponsor.note}</p>
        </div>
      </article>

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
        <p style={{ fontSize: 11, color: textS }}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p>
      </footer>
    </div>
  );
}
