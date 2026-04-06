import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Bilim", "Endüstriyel Kullanımlar"],
    category: "Bilim",
    title: "Gümüşün Endüstriyel Kullanımları",
    subtitle: "Güneş panelinden akıllı telefona, tıbbi cihazdan su arıtmaya — gümüşün görünmeyen dünyası",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "11 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Gümüş denildiğinde çoğu insanın aklına takı ve sikke gelir. Oysa küresel gümüş talebinin %50'den fazlası endüstriyel uygulamalardan kaynaklanmaktadır. Tüm metallerin en yüksek elektrik iletkenliği, ısı iletkenliği ve optik yansıtıcılığına sahip olan gümüş, modern teknolojinin vazgeçilmez bir malzemesidir.",
          "Bu makale, gümüşün başlıca endüstriyel kullanım alanlarını — enerji, elektronik, tıp, kimya, su arıtma ve fotoğrafçılık — kapsamlı şekilde incelemektedir.",
        ],
      },
      {
        id: "talep", heading: "Sektörel Talep Dağılımı",
        paragraphs: [
          "Küresel gümüş talebinin sektörel dağılımı, gümüşün yalnızca bir değerli metal değil, aynı zamanda stratejik bir endüstriyel hammadde olduğunu gösterir:",
        ],
        widget: "sectors",
      },
      {
        id: "gunes", heading: "Güneş Enerjisi: En Hızlı Büyüyen Talep",
        paragraphs: [
          "Fotovoltaik (PV) güneş panelleri, gümüş talebinin en hızlı büyüyen segmentidir. Her standart güneş paneli yaklaşık 20 gram gümüş içerir — gümüş pasta (silver paste) olarak hücre yüzeyine uygulanır ve elektrik iletim yollarını oluşturur.",
          "2024 yılında güneş paneli endüstrisi tek başına yaklaşık 6.000 ton gümüş tüketmiştir — toplam endüstriyel talebin yaklaşık %35'i. Küresel yeşil enerji dönüşümü hızlandıkça bu rakamın 2030'a kadar 10.000 tona çıkması beklenmektedir.",
          "Araştırmacılar gümüş kullanımını azaltacak alternatif malzemeler (bakır pasta, alüminyum) üzerinde çalışmakta, ancak gümüşün iletkenlik performansına ulaşan bir alternatif henüz ticari ölçekte bulunamamıştır.",
        ],
      },
      {
        id: "elektronik", heading: "Elektronik ve İletişim",
        paragraphs: [
          "Her akıllı telefon, tablet ve bilgisayar gümüş içerir. Gümüş, entegre devrelerde, anahtarlama kontaklarında, lehim alaşımlarında ve iletken yapıştırıcılarda kullanılır.",
          "5G teknolojisi gümüş talebini artırmaktadır: 5G baz istasyonları ve cihazları, daha yüksek frekanslarda çalıştığından daha kaliteli iletken malzeme gerektirir — ve bu alanda gümüş rakipsizdir.",
          "Otomotiv endüstrisi de gümüşün büyük tüketicisidir. Bir standart benzinli araçta yaklaşık 15-28 gram gümüş bulunurken, elektrikli araçlarda bu miktar 25-50 grama çıkar — motor kontrol üniteleri, pil bağlantıları ve şarj sistemleri ek gümüş gerektirir.",
        ],
      },
      {
        id: "tip", heading: "Tıp ve Sağlık",
        paragraphs: [
          "Gümüşün antimikrobiyal özellikleri onu tıbbi uygulamalarda değerli kılar. Gümüş iyonları (Ag⁺) bakteri hücre zarlarını bozar, DNA replikasyonunu engeller ve solunum enzimlerini inhibe eder.",
          "Başlıca tıbbi kullanımlar: yara örtüleri (gümüş sülfadiazin kaplı), cerrahi alet kaplamaları, kateter kaplamaları (üriner enfeksiyon önleme), ortodontik braketler ve diş hekimliğinde amalgam dolgu (tarihsel).",
          "Nano-gümüş teknolojisi tıbbi cihazlarda devrim yaratmaktadır: gümüş nanopartikül kaplı implantlar, biyofilm oluşumunu engelleyerek enfeksiyon riskini dramatik şekilde azaltmaktadır.",
        ],
      },
      {
        id: "su", heading: "Su Arıtma ve Hijyen",
        paragraphs: [
          "Gümüşün antimikrobiyal özelliği su arıtmada binlerce yıldır kullanılmaktadır. Eski çağlarda su gümüş kaplarda saklandığında daha uzun süre temiz kaldığı biliniyordu.",
          "Modern su arıtma sistemlerinde gümüş iyonları veya nano-gümüş filtreler kullanılır. NASA, Uluslararası Uzay İstasyonu'nda su dezenfeksiyonu için gümüş iyonu sistemi kullanmaktadır.",
          "Gelişmekte olan ülkelerde düşük maliyetli gümüş bazlı su filtreleri, temiz içme suyuna erişimi artırmaktadır. Seramik filtreler üzerine uygulanan gümüş nanopartikül kaplamalar, E. coli ve Salmonella gibi yaygın patojenleri %99,9 oranında elimine edebilmektedir.",
        ],
      },
      {
        id: "fotograf", heading: "Fotoğrafçılık: Tarihsel Miras",
        paragraphs: [
          "1839'da Daguerre'in icadından dijital devrimi kadar, yaklaşık 150 yıl boyunca tüm fotoğraflar gümüş halojenür (AgBr, AgCl) kimyasına dayanmıştır. Film ve fotoğraf kâğıdındaki gümüş halojenür kristalleri, ışığa maruz kaldığında kimyasal değişime uğrar — bu temel prensip fotoğrafçılığı mümkün kılmıştır.",
          "Dijital fotoğrafçılığın yaygınlaşmasıyla bu sektörün gümüş talebi dramatik şekilde düşmüştür: 2000'lerde yıllık ~6.000 ton olan talep, 2024'te ~1.500 tona gerilemiştir.",
          "Ancak film fotoğrafçılığı niş bir pazar olarak direnmektedir — özellikle sanat fotoğrafçılığı, sinema filmi prodüksiyonu ve tıbbi görüntülemede (röntgen filmi) gümüş halojenür hâlâ kullanılmaktadır.",
        ],
      },
      {
        id: "ayna", heading: "Ayna ve Optik Kaplamalar",
        paragraphs: [
          "Gümüş, görünür ışık spektrumunda tüm metallerin en yüksek yansıtıcılığına (%97) sahiptir. Bu özellik onu ayna üretiminde vazgeçilmez kılar.",
          "Modern uygulamalar: teleskop aynaları (Hubble Uzay Teleskobu dahil), güneş yoğunlaştırıcı sistemler (CSP), mimari cam kaplamalar (enerji tasarruflu pencereler) ve optik sensörler.",
          "Low-E (düşük yayınımlı) cam kaplamalarda ince gümüş katmanları, kızılötesi radyasyonu yansıtarak bina enerji verimliliğini %30-40 artırabilir.",
        ],
      },
      {
        id: "kimya", heading: "Kimyasal Katalizör ve Diğer Kullanımlar",
        paragraphs: [
          "Gümüş, önemli bir endüstriyel katalizördür. Etilen oksitten (plastik hammaddesi) formaldehite kadar birçok kimyasal üretim sürecinde gümüş katalizör kullanılır.",
          "Diğer endüstriyel kullanımlar: lehim ve kaynak alaşımları (HVAC, boru tesisatı), gümüş bazlı pil teknolojileri (gümüş-çinko piller — askeri ve havacılık), iletken mürekkepler (RFID etiketleri, baskılı elektronik) ve süperkapasitörler.",
          "Tekstil endüstrisi de gümüş tüketicidir: gümüş nanopartikül işlenmiş kumaşlar, koku önleyici ve antibakteriyel spor giyim üretiminde kullanılır.",
        ],
      },
      {
        id: "gelecek", heading: "Geleceğin Gümüş Teknolojileri",
        paragraphs: [
          "Birkaç gelişmekte olan teknoloji alanı gümüş talebini daha da artırma potansiyeline sahiptir:",
          "Katı hal pilleri: Gümüş bazlı katı elektrolitler, lityum-iyon pillerin yerini alabilecek yeni nesil enerji depolama teknolojisinde araştırılmaktadır.",
          "Esnek elektronik: Gümüş nanotel (nanowire) bazlı şeffaf iletken filmler, katlanabilir ekranlar ve giyilebilir elektronik için kritik bir malzemedir.",
          "Hidrojen ekonomisi: Elektroliz sistemlerinde gümüş bazlı katalizörler, yeşil hidrojen üretim verimliliğini artırabilir.",
        ],
      },
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Bir güneş panelinde ne kadar gümüş var?", a: "Standart bir güneş paneli yaklaşık 20 gram gümüş içerir. Bu miktar, panel verimliliği artırma çalışmalarıyla kademeli olarak azalmaktadır." },
        { q: "Akıllı telefonumda gümüş var mı?", a: "Evet, her akıllı telefon entegre devrelerde, anahtarlama kontaklarında ve iletken yapıştırıcılarda az miktarda gümüş içerir." },
        { q: "Gümüş neden bakırdan daha iyi iletken?", a: "Gümüşün elektrik iletkenliği bakırdan %6 daha yüksektir. Atomik yapısındaki 5s¹ elektron konfigürasyonu, serbest elektronların hareketini optimize eder." },
        { q: "Endüstriyel gümüş geri dönüştürülebilir mi?", a: "Evet, endüstriyel atıklardan gümüş geri kazanımı toplam arzın yaklaşık %17'sini karşılar. Fotoğraf, elektronik ve güneş paneli geri dönüşümü başlıca kaynaklardır." },
        { q: "Güneş panellerinde gümüşün yerini alabilecek malzeme var mı?", a: "Bakır ve alüminyum pasta alternatif olarak araştırılmakta, ancak gümüşün iletkenlik performansına henüz ulaşılamamıştır." },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "CRU International — Silver Market Analysis",
        "IRENA — \"Renewable Energy and Silver Demand\"",
        "Nature Materials — \"Silver Nanomaterials in Industrial Applications\" (2024)",
        "IEA — \"Solar PV Global Supply Chain Report\"",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "Gümüşün Kimyası", path: "/tr/bilim/kimya", cat: "Bilim" },
        { title: "Antimikrobiyal Özellikler", path: "/tr/bilim/antimikrobiyal", cat: "Bilim" },
        { title: "Arz-Talep Dinamikleri", path: "/tr/piyasa/arz-talep", cat: "Piyasa" },
      ],
    },
    sponsor: {
      text: "Endüstrinin vazgeçilmez metali gümüşü takı formunda keşfedin.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    sectorData: [
      { name: "Güneş Paneli (PV)", pct: 19, color: "#FFD700" },
      { name: "Elektronik & İletişim", pct: 18, color: "#6EC6FF" },
      { name: "Lehim & Alaşım", pct: 8, color: "#7BE495" },
      { name: "Fotoğrafçılık", pct: 5, color: "#C9A0DC" },
      { name: "Tıp & Hijyen", pct: 4, color: "#E8A0BF" },
      { name: "Diğer Endüstriyel", pct: 6, color: "#FFB86C" },
      { name: "Takı & Gümüş Eşya", pct: 24, color: "#C0C0C0" },
      { name: "Yatırım (Külçe/Sikke)", pct: 16, color: "#D4AF37" },
    ],
    sectorTitle: "Küresel Gümüş Talep Dağılımı (2024)",
    sectorNote: "Endüstriyel talep toplam talebin ~%60'ını oluşturur",
    darkMode: "Mod", toc: "İçindekiler",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Science", "Industrial Applications"],
    category: "Science",
    title: "Industrial Applications of Silver",
    subtitle: "From solar panels to smartphones, medical devices to water purification — silver's invisible world",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "11 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "When most people think of silver, jewelry and coins come to mind. Yet over 50% of global silver demand comes from industrial applications. With the highest electrical conductivity, thermal conductivity, and optical reflectance of any metal, silver is an indispensable material of modern technology.",
        "This article comprehensively examines silver's major industrial applications — energy, electronics, medicine, chemistry, water purification, and photography.",
      ]},
      { id: "demand", heading: "Sectoral Demand Distribution", paragraphs: ["The sectoral distribution of global silver demand demonstrates that silver is not merely a precious metal but a strategic industrial raw material:"], widget: "sectors" },
      { id: "solar", heading: "Solar Energy: Fastest Growing Demand", paragraphs: [
        "Photovoltaic (PV) solar panels are silver demand's fastest-growing segment. Each standard solar panel contains approximately 20 grams of silver — applied as silver paste to cell surfaces to form electrical conduction pathways.",
        "In 2024, the solar panel industry alone consumed approximately 6,000 tonnes of silver — about 35% of total industrial demand. This figure is expected to reach 10,000 tonnes by 2030 as the global green energy transition accelerates.",
        "Researchers are working on alternative materials (copper paste, aluminum) to reduce silver usage, but no alternative matching silver's conductivity performance has been found at commercial scale.",
      ]},
      { id: "electronics", heading: "Electronics and Communications", paragraphs: [
        "Every smartphone, tablet, and computer contains silver — in integrated circuits, switching contacts, solder alloys, and conductive adhesives.",
        "5G technology is increasing silver demand: 5G base stations and devices operate at higher frequencies requiring higher-quality conductor materials — where silver is unmatched.",
        "The automotive industry is also a major silver consumer. A standard gasoline vehicle contains about 15-28 grams of silver; electric vehicles use 25-50 grams — motor control units, battery connections, and charging systems require additional silver.",
      ]},
      { id: "medicine", heading: "Medicine and Health", paragraphs: [
        "Silver's antimicrobial properties make it valuable in medical applications. Silver ions (Ag⁺) disrupt bacterial cell membranes, inhibit DNA replication, and block respiratory enzymes.",
        "Major medical uses: wound dressings (silver sulfadiazine-coated), surgical instrument coatings, catheter coatings (urinary infection prevention), orthodontic brackets, and dental amalgam fillings (historical).",
        "Nano-silver technology is revolutionizing medical devices: silver nanoparticle-coated implants dramatically reduce infection risk by preventing biofilm formation.",
      ]},
      { id: "water", heading: "Water Purification and Hygiene", paragraphs: [
        "Silver's antimicrobial properties have been used in water purification for thousands of years. In ancient times, water stored in silver vessels was known to stay clean longer.",
        "Modern water treatment systems use silver ions or nano-silver filters. NASA uses a silver ion system for water disinfection on the International Space Station.",
        "In developing countries, low-cost silver-based water filters are increasing access to clean drinking water. Silver nanoparticle coatings on ceramic filters can eliminate 99.9% of common pathogens like E. coli and Salmonella.",
      ]},
      { id: "photography", heading: "Photography: Historical Legacy", paragraphs: [
        "From Daguerre's 1839 invention until the digital revolution, all photographs relied on silver halide (AgBr, AgCl) chemistry for approximately 150 years.",
        "With digital photography's spread, this sector's silver demand dropped dramatically: from ~6,000 tonnes/year in the 2000s to ~1,500 tonnes in 2024.",
        "However, film photography persists as a niche market — silver halide is still used in art photography, cinema film production, and medical imaging (X-ray film).",
      ]},
      { id: "mirrors", heading: "Mirrors and Optical Coatings", paragraphs: [
        "Silver has the highest reflectance (97%) of any metal in the visible light spectrum, making it indispensable in mirror production.",
        "Modern applications: telescope mirrors (including Hubble), concentrated solar power (CSP) systems, architectural glass coatings (energy-efficient windows), and optical sensors.",
        "In Low-E glass coatings, thin silver layers reflect infrared radiation, improving building energy efficiency by 30-40%.",
      ]},
      { id: "chemical", heading: "Chemical Catalysts and Other Uses", paragraphs: [
        "Silver is an important industrial catalyst, used in production of ethylene oxide (plastics feedstock) to formaldehyde.",
        "Other industrial uses: solder and brazing alloys (HVAC, plumbing), silver-based battery technologies (silver-zinc — military and aerospace), conductive inks (RFID tags, printed electronics), and supercapacitors.",
        "The textile industry also consumes silver: silver nanoparticle-treated fabrics are used in odor-preventing and antibacterial sportswear.",
      ]},
      { id: "future", heading: "Future Silver Technologies", paragraphs: [
        "Several emerging technology areas have potential to further increase silver demand:",
        "Solid-state batteries: Silver-based solid electrolytes are being researched for next-generation energy storage technology that could replace lithium-ion batteries.",
        "Flexible electronics: Silver nanowire-based transparent conductive films are critical for foldable displays and wearable electronics.",
        "Hydrogen economy: Silver-based catalysts in electrolysis systems could improve green hydrogen production efficiency.",
      ]},
    ],
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "How much silver is in a solar panel?", a: "A standard solar panel contains approximately 20 grams of silver. This amount is gradually decreasing as panel efficiency improves." },
        { q: "Is there silver in my smartphone?", a: "Yes, every smartphone contains small amounts of silver in integrated circuits, switching contacts, and conductive adhesives." },
        { q: "Why is silver a better conductor than copper?", a: "Silver's electrical conductivity is 6% higher than copper's. Its 5s¹ electron configuration optimizes free electron movement." },
        { q: "Can industrial silver be recycled?", a: "Yes, silver recovery from industrial waste accounts for about 17% of total supply. Photography, electronics, and solar panel recycling are the main sources." },
        { q: "Could any material replace silver in solar panels?", a: "Copper and aluminum paste are being researched as alternatives, but none has matched silver's conductivity performance at commercial scale." },
      ],
    },
    sources: { heading: "Sources", items: ["The Silver Institute — \"World Silver Survey 2025\"", "CRU International — Silver Market Analysis", "IRENA — \"Renewable Energy and Silver Demand\"", "Nature Materials — Silver Nanomaterials (2024)", "IEA — Solar PV Supply Chain Report"] },
    related: { heading: "Related Topics", items: [
      { title: "Chemistry of Silver", path: "/en/science/chemistry", cat: "Science" },
      { title: "Antimicrobial Properties", path: "/en/science/antimicrobial", cat: "Science" },
      { title: "Supply-Demand Dynamics", path: "/en/market/supply-demand", cat: "Market" },
    ]},
    sponsor: { text: "Discover industry's indispensable metal in jewelry form.", cta: "View on Instagram", note: "This content is supported by İstanbul Gümüş." },
    sectorData: [
      { name: "Solar PV", pct: 19, color: "#FFD700" },
      { name: "Electronics & Comms", pct: 18, color: "#6EC6FF" },
      { name: "Solder & Alloys", pct: 8, color: "#7BE495" },
      { name: "Photography", pct: 5, color: "#C9A0DC" },
      { name: "Medicine & Hygiene", pct: 4, color: "#E8A0BF" },
      { name: "Other Industrial", pct: 6, color: "#FFB86C" },
      { name: "Jewelry & Silverware", pct: 24, color: "#C0C0C0" },
      { name: "Investment (Bar/Coin)", pct: 16, color: "#D4AF37" },
    ],
    sectorTitle: "Global Silver Demand Distribution (2024)",
    sectorNote: "Industrial demand accounts for ~60% of total demand",
    darkMode: "Mode", toc: "Contents",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة المعرفة بالفضة",
    breadcrumb: ["الرئيسية", "العلوم", "الاستخدامات الصناعية"],
    category: "العلوم",
    title: "الاستخدامات الصناعية للفضة",
    subtitle: "من الألواح الشمسية إلى الهواتف الذكية، ومن الأجهزة الطبية إلى تنقية المياه",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١١ دقيقة قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "أكثر من ٥٠٪ من الطلب العالمي على الفضة يأتي من التطبيقات الصناعية. بأعلى موصلية كهربائية وحرارية وانعكاسية بين جميع المعادن، الفضة مادة لا غنى عنها في التكنولوجيا الحديثة.",
        "يتناول هذا المقال أبرز الاستخدامات الصناعية للفضة — الطاقة، الإلكترونيات، الطب، الكيمياء، تنقية المياه والتصوير.",
      ]},
      { id: "demand", heading: "توزيع الطلب القطاعي", paragraphs: ["يُظهر التوزيع القطاعي للطلب أن الفضة ليست معدناً ثميناً فحسب بل مادة خام صناعية استراتيجية:"], widget: "sectors" },
      { id: "solar", heading: "الطاقة الشمسية: أسرع طلب نمواً", paragraphs: [
        "الألواح الشمسية الكهروضوئية هي القطاع الأسرع نمواً في الطلب على الفضة. كل لوح يحتوي حوالي ٢٠ غراماً.",
        "في ٢٠٢٤ استهلكت الصناعة الشمسية ~٦٠٠٠ طن — ~٣٥٪ من الطلب الصناعي. يُتوقع وصوله إلى ١٠٬٠٠٠ طن بحلول ٢٠٣٠.",
        "تُبحث بدائل (معجون نحاس، ألمنيوم) لكن لم يُعثر على بديل يضاهي أداء الفضة تجارياً.",
      ]},
      { id: "electronics", heading: "الإلكترونيات والاتصالات", paragraphs: [
        "كل هاتف ذكي وحاسوب يحتوي فضة — في الدوائر المتكاملة والمفاتيح والمواد اللاصقة الموصلة.",
        "تقنية الجيل الخامس تزيد الطلب على الفضة لأنها تعمل بترددات أعلى تتطلب موصلات أفضل.",
        "السيارة الكهربائية تحتوي ٢٥-٥٠ غراماً من الفضة مقابل ١٥-٢٨ غراماً في السيارة التقليدية.",
      ]},
      { id: "medicine", heading: "الطب والصحة", paragraphs: [
        "خصائص الفضة المضادة للميكروبات تجعلها قيمة في التطبيقات الطبية.",
        "الاستخدامات الرئيسية: ضمادات الجروح المطلية بالفضة، طلاء الأدوات الجراحية، طلاء القسطرة.",
        "جسيمات الفضة النانوية على الغرسات تقلل خطر العدوى بشكل كبير.",
      ]},
      { id: "water", heading: "تنقية المياه والنظافة", paragraphs: [
        "استُخدمت خصائص الفضة المضادة للميكروبات في تنقية المياه منذ آلاف السنين.",
        "تستخدم ناسا نظام أيون الفضة لتطهير المياه في محطة الفضاء الدولية.",
        "مرشحات الفضة النانوية تقضي على ٩٩٫٩٪ من مسببات الأمراض الشائعة.",
      ]},
      { id: "photography", heading: "التصوير الفوتوغرافي: إرث تاريخي", paragraphs: [
        "لمدة ١٥٠ عاماً اعتمدت جميع الصور على كيمياء هاليد الفضة.",
        "انخفض الطلب من ~٦٠٠٠ طن سنوياً إلى ~١٥٠٠ طن مع انتشار التصوير الرقمي.",
        "لكن التصوير بالفيلم يصمد كسوق متخصص في الفن والسينما والتصوير الطبي.",
      ]},
      { id: "mirrors", heading: "المرايا والطلاءات البصرية", paragraphs: [
        "الفضة تمتلك أعلى انعكاسية (٩٧٪) في طيف الضوء المرئي.",
        "التطبيقات: مرايا التلسكوبات، أنظمة تركيز الطاقة الشمسية، طلاءات الزجاج الموفرة للطاقة.",
      ]},
      { id: "chemical", heading: "المحفزات الكيميائية واستخدامات أخرى", paragraphs: [
        "الفضة محفز صناعي مهم في إنتاج أكسيد الإيثيلين والفورمالدهيد.",
        "استخدامات أخرى: سبائك اللحام، بطاريات الفضة-الزنك، الأحبار الموصلة، المنسوجات المضادة للبكتيريا.",
      ]},
      { id: "future", heading: "تقنيات الفضة المستقبلية", paragraphs: [
        "عدة مجالات تقنية ناشئة قد تزيد الطلب على الفضة أكثر:",
        "بطاريات الحالة الصلبة، الإلكترونيات المرنة، واقتصاد الهيدروجين.",
      ]},
    ],
    faq: { heading: "الأسئلة الشائعة", items: [
      { q: "كم فضة في اللوح الشمسي؟", a: "حوالي ٢٠ غراماً. هذه الكمية تتناقص تدريجياً مع تحسن كفاءة الألواح." },
      { q: "هل يوجد فضة في هاتفي الذكي؟", a: "نعم، كل هاتف ذكي يحتوي كميات صغيرة من الفضة في الدوائر والمفاتيح." },
      { q: "هل يمكن إعادة تدوير الفضة الصناعية؟", a: "نعم، استرداد الفضة من النفايات الصناعية يمثل ~١٧٪ من إجمالي العرض." },
    ]},
    sources: { heading: "المصادر", items: ["The Silver Institute — World Silver Survey 2025", "IRENA — الطاقة المتجددة والطلب على الفضة", "IEA — تقرير سلسلة التوريد الشمسية"] },
    related: { heading: "مواضيع ذات صلة", items: [
      { title: "كيمياء الفضة", path: "/ar/science/chemistry", cat: "العلوم" },
      { title: "الخصائص المضادة للميكروبات", path: "/ar/science/antimicrobial", cat: "العلوم" },
    ]},
    sponsor: { text: "اكتشفوا المعدن الذي لا غنى عنه في الصناعة بشكل مجوهرات.", cta: "شاهد على إنستغرام", note: "هذا المحتوى مدعوم من إسطنبول غوموش." },
    sectorData: [
      { name: "الألواح الشمسية", pct: 19, color: "#FFD700" },
      { name: "الإلكترونيات", pct: 18, color: "#6EC6FF" },
      { name: "اللحام والسبائك", pct: 8, color: "#7BE495" },
      { name: "التصوير", pct: 5, color: "#C9A0DC" },
      { name: "الطب والنظافة", pct: 4, color: "#E8A0BF" },
      { name: "صناعي آخر", pct: 6, color: "#FFB86C" },
      { name: "المجوهرات", pct: 24, color: "#C0C0C0" },
      { name: "الاستثمار", pct: 16, color: "#D4AF37" },
    ],
    sectorTitle: "توزيع الطلب العالمي على الفضة (٢٠٢٤)",
    sectorNote: "الطلب الصناعي يمثل ~٦٠٪ من إجمالي الطلب",
    darkMode: "الوضع", toc: "المحتويات",
  },
};

// ─── Sector Bar Chart Widget ──────────────────────────────
function SectorChart({ data, title, note, dark }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  return (
    <div style={{ margin: "20px 0", padding: "24px", borderRadius: 14, border: `1px solid ${border}`, background: dark ? "rgba(192,192,192,0.02)" : "rgba(192,192,192,0.04)" }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: textP, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 11, color: textS, marginBottom: 20 }}>{note}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {data.sort((a, b) => b.pct - a.pct).map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 120, fontSize: 12, color: textS, textAlign: "right", flexShrink: 0 }}>{s.name}</div>
            <div style={{ flex: 1, height: 26, borderRadius: 6, background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)", overflow: "hidden" }}>
              <div style={{
                height: "100%", width: `${(s.pct / 24) * 100}%`, borderRadius: 6, minWidth: 32,
                background: `linear-gradient(90deg, ${s.color}88, ${s.color})`,
                display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 8,
              }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: dark ? "#0f0f14" : "#fff", fontFamily: "'JetBrains Mono', monospace" }}>{s.pct}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────
export default function IndustrialUsesArticle() {
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
    <div dir={isRTL?"rtl":"ltr"} style={{fontFamily:fontB,background:bgP,color:textP,minHeight:"100vh"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*{margin:0;padding:0;box-sizing:border-box}::selection{background:rgba(192,192,192,0.3)}`}</style>
      <nav style={{position:"sticky",top:0,zIndex:100,background:dark?"rgba(15,15,20,0.88)":"rgba(250,250,245,0.88)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${border}`,padding:"0 24px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:16}}>{t.nav}</span></div>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{display:"flex",gap:2,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)",borderRadius:7,padding:2}}>{["tr","en","ar"].map(l=><button key={l} onClick={()=>setLang(l)} style={{border:"none",cursor:"pointer",padding:"3px 9px",borderRadius:5,fontSize:11,fontWeight:lang===l?600:400,fontFamily:l==="ar"?"'Noto Naskh Arabic',serif":fontB,background:lang===l?(dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.08)"):"transparent",color:lang===l?textP:textS}}>{l==="ar"?"عر":l.toUpperCase()}</button>)}</div>
          <button onClick={()=>setDark(!dark)} style={{border:"none",cursor:"pointer",background:"transparent",color:textS,fontSize:16,padding:4}}>{dark?"☀️":"🌙"}</button>
        </div>
      </nav>
      <div style={{maxWidth:760,margin:"0 auto",padding:"16px 24px 0",display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",fontSize:12,color:textS}}>{t.breadcrumb.map((item,i)=><span key={i} style={{display:"flex",alignItems:"center",gap:6}}>{i>0&&<span style={{opacity:0.4}}>{isRTL?"‹":"›"}</span>}<a href="#" style={{color:i===t.breadcrumb.length-1?textP:textS,textDecoration:"none",fontWeight:i===t.breadcrumb.length-1?500:400}}>{item}</a></span>)}</div>
      <article style={{maxWidth:760,margin:"0 auto",padding:"32px 24px 64px",animation:"fadeUp 0.6s ease both"}}>
        <div style={{marginBottom:36}}>
          <div style={{display:"inline-block",padding:"3px 12px",borderRadius:6,fontSize:11,fontWeight:600,letterSpacing:"0.04em",color:gold,border:`1px solid ${gold}33`,marginBottom:16}}>{t.category}</div>
          <h1 style={{fontFamily:fontD,fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.15,marginBottom:12}}>{t.title}</h1>
          <p style={{fontSize:16,color:textS,lineHeight:1.6,marginBottom:20}}>{t.subtitle}</p>
          <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",fontSize:13,color:textS,paddingBottom:20,borderBottom:`1px solid ${border}`}}><span>{t.meta.author}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.date}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.readTime}</span></div>
        </div>
        <div style={{height:220,borderRadius:16,marginBottom:36,overflow:"hidden",background:dark?"linear-gradient(135deg,#1a1a2e,#2a2a3e,#1a1a2e)":"linear-gradient(135deg,#e8e8e8,#d0d0d0,#e8e8e8)",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{textAlign:"center"}}>
            <div style={{fontSize:48,marginBottom:4}}>☀️⚡🏥</div>
            <div style={{fontFamily:fontD,fontSize:24,fontWeight:700,background:`linear-gradient(135deg,${accent},${gold})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>INDUSTRIAL Ag</div>
            <div style={{fontSize:12,color:textS,letterSpacing:"0.12em",marginTop:4}}>60% OF GLOBAL DEMAND</div>
          </div>
        </div>

        {t.sections.map(sec=>(
          <section key={sec.id} style={{marginBottom:36}}>
            {sec.heading&&<h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:16,paddingTop:8}}>{sec.heading}</h2>}
            {sec.paragraphs.map((p,pi)=><p key={pi} style={{fontSize:15,lineHeight:1.8,color:textS,marginBottom:14}}>{p}</p>)}
            {sec.widget==="sectors"&&<SectorChart data={t.sectorData} title={t.sectorTitle} note={t.sectorNote} dark={dark}/>}
          </section>
        ))}

        <section style={{marginBottom:36,marginTop:48}}>
          <h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:20}}>{t.faq.heading}</h2>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {t.faq.items.map((item,i)=>(
              <div key={i} style={{border:`1px solid ${openFaq===i?gold+"44":border}`,borderRadius:12,overflow:"hidden",background:openFaq===i?(dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.04)"):"transparent"}}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{width:"100%",border:"none",cursor:"pointer",background:"transparent",padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",color:textP,fontSize:14,fontWeight:500,fontFamily:fontB,textAlign:isRTL?"right":"left",gap:12}}>
                  <span style={{flex:1}}>{item.q}</span><span style={{fontSize:18,color:textS,transform:openFaq===i?"rotate(45deg)":"rotate(0)",flexShrink:0}}>+</span>
                </button>
                {openFaq===i&&<div style={{padding:"0 20px 16px",fontSize:14,lineHeight:1.7,color:textS}}>{item.a}</div>}
              </div>
            ))}
          </div>
        </section>

        <section style={{marginBottom:36,padding:"20px 24px",background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)",borderRadius:12,border:`1px solid ${border}`}}>
          <h3 style={{fontSize:15,fontWeight:600,marginBottom:12}}>{t.sources.heading}</h3>
          {t.sources.items.map((s,i)=><div key={i} style={{fontSize:13,color:textS,lineHeight:1.6,marginBottom:6,display:"flex",gap:8}}><span style={{color:accent,fontWeight:600,flexShrink:0}}>[{i+1}]</span><span>{s}</span></div>)}
        </section>

        <section style={{marginBottom:40}}>
          <h3 style={{fontSize:18,fontFamily:fontD,fontWeight:600,marginBottom:16}}>{t.related.heading}</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:12}}>
            {t.related.items.map((item,i)=><a key={i} href={item.path} style={{textDecoration:"none",padding:"16px 18px",border:`1px solid ${border}`,borderRadius:12,background:bgCard,display:"block"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=gold+"44"}} onMouseLeave={e=>{e.currentTarget.style.borderColor=border}}>
              <div style={{fontSize:10,color:gold,fontWeight:600,marginBottom:6,letterSpacing:"0.04em"}}>{item.cat}</div>
              <div style={{fontSize:14,fontWeight:500,color:textP}}>{item.title}</div>
              <div style={{fontSize:12,color:textS,marginTop:6}}>{isRTL?"←":"→"}</div>
            </a>)}
          </div>
        </section>

        <div style={{border:`1px solid ${gold}22`,borderRadius:16,padding:"28px 24px",background:dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.05)",textAlign:"center"}}>
          <p style={{fontSize:15,color:textP,marginBottom:16,lineHeight:1.6}}>{t.sponsor.text}</p>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"10px 24px",borderRadius:10,background:`linear-gradient(135deg,${accent},${gold})`,color:"#0f0f14",fontSize:13,fontWeight:600,textDecoration:"none"}}>📸 {t.sponsor.cta}</a>
          <p style={{fontSize:11,color:textS,marginTop:14,opacity:0.7}}>{t.sponsor.note}</p>
        </div>
      </article>
      <footer style={{borderTop:`1px solid ${border}`,padding:"24px",textAlign:"center",background:dark?"#0c0c10":"#f5f5f0"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:8}}><div style={{width:22,height:22,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:14}}>{t.nav}</span></div>
        <p style={{fontSize:11,color:textS}}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p>
      </footer>
    </div>
  );
}
