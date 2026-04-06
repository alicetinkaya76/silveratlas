import { useState } from "react";

// ─── i18n ────────────────────────────────────────────────
const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Bilim", "Gümüşün Kimyası"],
    category: "Bilim",
    title: "Gümüşün Kimyası: Ag Elementinin Hikâyesi",
    subtitle: "Atom yapısından alaşım bilgisine, gümüşün kimyasal özelliklerinin kapsamlı rehberi",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "10 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Periyodik tabloda 47 numaralı element olan gümüş (Ag), Latince 'argentum' kelimesinden adını alır. Binlerce yıldır insanlığın en değerli metallerinden biri olan gümüş, kimyasal özellikleri sayesinde takıdan elektroniğe, fotoğrafçılıktan tıbba kadar geniş bir kullanım alanına sahiptir.",
          "Gümüşün eşsiz parlaklığı, en yüksek elektriksel ve ısıl iletkenliği ve antimikrobiyal özellikleri onu diğer metallerden ayırır. Bu makale, gümüşün atom yapısından alaşım kimyasına kadar bilimsel temellerini keşfetmenizi sağlayacak.",
        ],
      },
      {
        id: "element", heading: "Element Kimlik Kartı",
        paragraphs: [
          "Gümüş, periyodik tablonun 5. periyodunda, 11. grubunda (IB) yer alan bir geçiş metalidir. Aynı grupta bakır (Cu) ve altın (Au) bulunur — bu üçlü 'madeni para metalleri' olarak da bilinir.",
        ],
        widget: "periodic",
      },
      {
        id: "fiziksel", heading: "Fiziksel Özellikler",
        paragraphs: [
          "Gümüş, tüm metallerin en yüksek elektrik iletkenliğine ve ısı iletkenliğine sahiptir. Aynı zamanda en yüksek optik yansıtıcılık değerine de sahip olan gümüş, ayna yapımında ve optik kaplama teknolojisinde kritik bir malzemedir.",
        ],
        table: {
          headers: ["Özellik", "Değer", "Sıralama"],
          rows: [
            ["Atom Numarası", "47", "—"],
            ["Atom Kütlesi", "107,87 g/mol", "—"],
            ["Yoğunluk", "10,49 g/cm³", "—"],
            ["Erime Noktası", "961,8 °C", "—"],
            ["Kaynama Noktası", "2.162 °C", "—"],
            ["Elektrik İletkenliği", "6,30 × 10⁷ S/m", "1. (tüm metaller)"],
            ["Isı İletkenliği", "429 W/(m·K)", "1. (tüm metaller)"],
            ["Mohs Sertliği", "2,5", "—"],
            ["Yansıtıcılık", "%97 (görünür ışık)", "1. (tüm metaller)"],
          ],
        },
      },
      {
        id: "iletkenlik", heading: "İletkenlik Karşılaştırması",
        paragraphs: [
          "Gümüşün elektriksel iletkenliği bakırdan %6, altından %46 daha yüksektir. Ancak endüstride yaygın olarak bakır tercih edilir — bunun tek nedeni maliyettir. Gümüşün gramı bakırın yaklaşık 100 katı fiyattadır.",
          "Yüksek frekanslı elektronik devrelerde ve uzay teknolojisinde maliyet ikinci plana düştüğünde gümüş tercih edilen iletken malzeme olur. Süper bilgisayarlar ve uydu sistemlerinde gümüş bazlı bağlantılar kritik performans sunar.",
        ],
        widget: "conductivity",
      },
      {
        id: "kimyasal", heading: "Kimyasal Tepkimeler",
        paragraphs: [
          "Gümüş, soy metallere yakın kimyasal davranış sergiler. Saf haldeyken havadaki oksijenle tepkimeye girmez — bu nedenle antik çağlardan beri 'saf' ve 'bozulmaz' metal olarak kabul edilmiştir.",
          "Ancak gümüşün en bilinen kimyasal tepkimesi kararma (tarnish) sürecidir. Gümüş, havadaki kükürt bileşikleriyle (özellikle H₂S — hidrojen sülfür) tepkimeye girerek yüzeyde siyah gümüş sülfür (Ag₂S) tabakası oluşturur:",
        ],
        formula: "2Ag + H₂S → Ag₂S + H₂",
        paragraphs2: [
          "Bu tepkime tersinirdir — gümüş sülfür tabakası mekanik (silme) veya kimyasal (alüminyum folyo + karbonat çözeltisi) yöntemlerle giderilebilir. Karbonat yöntemi bir elektrokimyasal tepkimedir: alüminyum, gümüşten daha aktif bir metal olduğundan, Ag₂S'deki kükürtü çekerek gümüşü serbest bırakır.",
          "Gümüş ayrıca nitrik asitle (HNO₃) çözünür — bu özellik, ayar testlerinde asit testi yöntemi olarak kullanılır. Hidroklorik asit ve sülfürik asitle normal koşullarda tepkimeye girmez.",
        ],
      },
      {
        id: "alasim", heading: "Alaşım Kimyası ve 925 Sistemi",
        paragraphs: [
          "Saf gümüş (999 ayar) çok yumuşak olduğundan, takı ve eşya üretiminde alaşımlar kullanılır. En yaygın alaşım sistemi 925 ayar sterling gümüştür: %92,5 Ag + %7,5 Cu (bakır).",
          "Bakır eklenmesi gümüşün kristal yapısını güçlendirir — bakır atomları gümüş kafes yapısında yer alarak dislokasyon hareketini engeller ve metalin sertliğini artırır. Bu metalürjik süreç 'katı çözelti sertleştirmesi' olarak bilinir.",
          "Modern alaşım kimyasında bakırın yanı sıra germanyum (Argentium®), silikon veya çinko gibi elementler de kullanılır. Bu yeni nesil alaşımlar kararma direncini artırırken işlenebilirliği korur.",
        ],
      },
      {
        id: "izotoplar", heading: "İzotoplar ve Radyoaktif Uygulamalar",
        paragraphs: [
          "Doğada gümüş iki kararlı izotop halinde bulunur: ¹⁰⁷Ag (%51,8) ve ¹⁰⁹Ag (%48,2). Bu neredeyse eşit dağılım, kütle spektrometrisinde gümüşün kolayca tespit edilmesini sağlar.",
          "Radyoaktif izotop ¹¹⁰ᵐAg (yarı ömrü 250 gün), nükleer tıpta teşhis amaçlı kullanılır. Gümüş nanopartiküllerin radyoaktif izotoplarla işaretlenmesi, kanser teşhisinde umut veren bir araştırma alanıdır.",
        ],
      },
      {
        id: "nano", heading: "Nano-Gümüş: Geleceğin Malzemesi",
        paragraphs: [
          "Gümüş nanopartiküller (1-100 nm boyutunda), yüzey alanı/hacim oranının dramatik artışı sayesinde saf gümüşe kıyasla çok daha güçlü antimikrobiyal etki gösterir. Bu özellik, gümüş iyonlarının (Ag⁺) bakteri hücre zarlarını bozmasından kaynaklanır.",
          "Nano-gümüş, tekstilden gıda ambalajına, su arıtmadan tıbbi cihazlara kadar geniş bir alanda ticari uygulamaya sahiptir. Ancak çevresel etkisi ve insan sağlığı üzerindeki uzun vadeli sonuçları hâlâ araştırma konusudur.",
        ],
      },
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Gümüş neden kararır?", a: "Gümüş havadaki kükürt bileşikleriyle (özellikle H₂S) tepkimeye girerek yüzeyinde siyah Ag₂S (gümüş sülfür) tabakası oluşturur. Bu doğal bir kimyasal süreçtir, kalite sorunu değildir." },
        { q: "Gümüş en iyi iletken midir?", a: "Evet, gümüş tüm metallerin en yüksek elektrik iletkenliğine sahiptir. Ancak maliyeti nedeniyle endüstride genellikle bakır tercih edilir." },
        { q: "Gümüş zehirli midir?", a: "Metalik gümüş toksik değildir. Ancak aşırı miktarda gümüş tuzlarına maruz kalma 'argyria' adı verilen kalıcı cilt renginin griye dönüşmesi durumuna yol açabilir." },
        { q: "Gümüş neden antimikrobiyaldir?", a: "Gümüş iyonları (Ag⁺) bakteri hücre zarlarını bozar, DNA replikasyonunu engeller ve solunum enzimlerini inhibe eder. Bu üçlü etki mekanizması, gümüşü güçlü bir antimikrobiyal ajan yapar." },
        { q: "Argentium gümüş nedir?", a: "Argentium, bakırın bir kısmının germanyum ile değiştirildiği modern bir gümüş alaşımıdır. Kararma direnci çok yüksektir ve 925 veya 960 ayar seçenekleri vardır." },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "CRC Handbook of Chemistry and Physics, 104th Edition",
        "Greenwood & Earnshaw — \"Chemistry of the Elements\"",
        "Nature Nanotechnology — \"Antimicrobial Silver Nanoparticles\" (2023)",
        "Türk Kimya Derneği — \"Geçiş Metalleri\" ders notu",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "925 Ayar Nedir?", path: "/tr/uretim/925-ayar", cat: "Üretim" },
        { title: "Antimikrobiyal Özellikler", path: "/tr/bilim/antimikrobiyal", cat: "Bilim" },
        { title: "Endüstriyel Kullanımlar", path: "/tr/bilim/endustri", cat: "Bilim" },
      ],
    },
    sponsor: {
      text: "Gümüşün kimyasal mükemmelliğini takı formunda keşfedin.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    periodic: {
      symbol: "Ag", name: "Gümüş", latin: "Argentum",
      number: "47", mass: "107,87",
      group: "11 (IB)", period: "5",
      block: "d-blok", category: "Geçiş Metali",
      electron: "[Kr] 4d¹⁰ 5s¹",
      discovery: "~5000 yıl önce (Anadolu)",
      labels: { group: "Grup", period: "Periyot", block: "Blok", category: "Kategori", electron: "Elektron Dizilimi", discovery: "Keşif" },
    },
    conductivity: {
      title: "Elektrik İletkenliği Karşılaştırması",
      unit: "× 10⁶ S/m",
      metals: [
        { name: "Gümüş (Ag)", value: 63.0, color: "#C0C0C0" },
        { name: "Bakır (Cu)", value: 59.6, color: "#B87333" },
        { name: "Altın (Au)", value: 41.1, color: "#D4AF37" },
        { name: "Alüminyum (Al)", value: 37.7, color: "#848789" },
        { name: "Demir (Fe)", value: 10.0, color: "#6B6B6B" },
      ],
    },
    darkMode: "Mod", toc: "İçindekiler",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Science", "Chemistry of Silver"],
    category: "Science",
    title: "Chemistry of Silver: The Story of Element Ag",
    subtitle: "A comprehensive guide to silver's chemical properties, from atomic structure to alloy science",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "10 min read" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Silver (Ag), element number 47 on the periodic table, takes its symbol from the Latin word 'argentum.' One of humanity's most valued metals for millennia, silver's chemical properties enable a vast range of applications — from jewelry to electronics, photography to medicine.",
          "Silver's unmatched luster, highest electrical and thermal conductivity among all metals, and antimicrobial properties set it apart. This article explores the scientific foundations of silver, from atomic structure to alloy chemistry.",
        ],
      },
      {
        id: "element", heading: "Element ID Card",
        paragraphs: [
          "Silver is a transition metal located in period 5, group 11 (IB) of the periodic table. It shares its group with copper (Cu) and gold (Au) — this trio is known as the 'coinage metals.'",
        ],
        widget: "periodic",
      },
      {
        id: "physical", heading: "Physical Properties",
        paragraphs: [
          "Silver possesses the highest electrical conductivity and thermal conductivity of any metal. It also has the highest optical reflectance, making it a critical material in mirror production and optical coating technology.",
        ],
        table: {
          headers: ["Property", "Value", "Ranking"],
          rows: [
            ["Atomic Number", "47", "—"],
            ["Atomic Mass", "107.87 g/mol", "—"],
            ["Density", "10.49 g/cm³", "—"],
            ["Melting Point", "961.8 °C", "—"],
            ["Boiling Point", "2,162 °C", "—"],
            ["Electrical Conductivity", "6.30 × 10⁷ S/m", "#1 (all metals)"],
            ["Thermal Conductivity", "429 W/(m·K)", "#1 (all metals)"],
            ["Mohs Hardness", "2.5", "—"],
            ["Reflectance", "97% (visible light)", "#1 (all metals)"],
          ],
        },
      },
      {
        id: "conductivity", heading: "Conductivity Comparison",
        paragraphs: [
          "Silver's electrical conductivity exceeds copper's by 6% and gold's by 46%. However, copper is more commonly used industrially — solely due to cost. Silver costs roughly 100 times more per gram than copper.",
          "In high-frequency electronic circuits and aerospace technology, where cost is secondary to performance, silver becomes the preferred conductor. Supercomputers and satellite systems rely on silver-based connections for critical performance.",
        ],
        widget: "conductivity",
      },
      {
        id: "chemical", heading: "Chemical Reactions",
        paragraphs: [
          "Silver exhibits chemical behavior close to noble metals. In its pure state, it does not react with atmospheric oxygen — which is why it has been considered a 'pure' and 'incorruptible' metal since antiquity.",
          "However, silver's most well-known chemical reaction is tarnishing. Silver reacts with airborne sulfur compounds (particularly H₂S) to form a black silver sulfide (Ag₂S) layer on its surface:",
        ],
        formula: "2Ag + H₂S → Ag₂S + H₂",
        paragraphs2: [
          "This reaction is reversible — the silver sulfide layer can be removed mechanically (polishing) or chemically (aluminum foil + baking soda solution). The baking soda method is an electrochemical reaction: aluminum, being more reactive than silver, attracts the sulfur from Ag₂S, freeing the silver.",
          "Silver also dissolves in nitric acid (HNO₃) — this property is used in acid testing for purity assessment. It does not react with hydrochloric acid or sulfuric acid under normal conditions.",
        ],
      },
      {
        id: "alloy", heading: "Alloy Chemistry and the 925 System",
        paragraphs: [
          "Pure silver (999 fineness) is too soft for jewelry and object production, so alloys are used. The most common system is 925 sterling silver: 92.5% Ag + 7.5% Cu (copper).",
          "Adding copper strengthens silver's crystal structure — copper atoms occupy positions in the silver lattice, impeding dislocation movement and increasing hardness. This metallurgical process is known as 'solid solution strengthening.'",
          "Modern alloy chemistry also uses germanium (Argentium®), silicon, or zinc alongside copper. These next-generation alloys improve tarnish resistance while maintaining workability.",
        ],
      },
      {
        id: "isotopes", heading: "Isotopes and Radioactive Applications",
        paragraphs: [
          "Silver occurs naturally as two stable isotopes: ¹⁰⁷Ag (51.8%) and ¹⁰⁹Ag (48.2%). This nearly equal distribution makes silver easily detectable by mass spectrometry.",
          "The radioactive isotope ¹¹⁰ᵐAg (half-life 250 days) is used in nuclear medicine for diagnostic purposes. Labeling silver nanoparticles with radioactive isotopes is a promising research area in cancer diagnostics.",
        ],
      },
      {
        id: "nano", heading: "Nano-Silver: Material of the Future",
        paragraphs: [
          "Silver nanoparticles (1-100 nm) exhibit dramatically stronger antimicrobial effects compared to bulk silver, due to the massive increase in surface area to volume ratio. This property arises from silver ions (Ag⁺) disrupting bacterial cell membranes.",
          "Nano-silver has commercial applications ranging from textiles to food packaging, water purification to medical devices. However, its environmental impact and long-term effects on human health remain active areas of research.",
        ],
      },
    ],
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Why does silver tarnish?", a: "Silver reacts with sulfur compounds in the air (especially H₂S) to form a black Ag₂S (silver sulfide) layer on its surface. This is a natural chemical process, not a quality defect." },
        { q: "Is silver the best conductor?", a: "Yes, silver has the highest electrical conductivity of all metals. However, copper is generally preferred in industry due to its significantly lower cost." },
        { q: "Is silver toxic?", a: "Metallic silver is not toxic. However, excessive exposure to silver salts can cause 'argyria,' a permanent condition where the skin turns blue-gray." },
        { q: "Why is silver antimicrobial?", a: "Silver ions (Ag⁺) disrupt bacterial cell membranes, inhibit DNA replication, and block respiratory enzymes. This triple mechanism makes silver a powerful antimicrobial agent." },
        { q: "What is Argentium silver?", a: "Argentium is a modern silver alloy where some copper is replaced with germanium. It has very high tarnish resistance and is available in 925 or 960 grades." },
      ],
    },
    sources: {
      heading: "Sources",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "CRC Handbook of Chemistry and Physics, 104th Edition",
        "Greenwood & Earnshaw — \"Chemistry of the Elements\"",
        "Nature Nanotechnology — \"Antimicrobial Silver Nanoparticles\" (2023)",
        "Royal Society of Chemistry — Silver Element Page",
      ],
    },
    related: {
      heading: "Related Topics",
      items: [
        { title: "What is 925 Sterling Silver?", path: "/en/manufacturing/925", cat: "Manufacturing" },
        { title: "Antimicrobial Properties", path: "/en/science/antimicrobial", cat: "Science" },
        { title: "Industrial Applications", path: "/en/science/industrial", cat: "Science" },
      ],
    },
    sponsor: {
      text: "Discover silver's chemical perfection in jewelry form.",
      cta: "View on Instagram",
      note: "This content is supported by İstanbul Gümüş.",
    },
    periodic: {
      symbol: "Ag", name: "Silver", latin: "Argentum",
      number: "47", mass: "107.87",
      group: "11 (IB)", period: "5",
      block: "d-block", category: "Transition Metal",
      electron: "[Kr] 4d¹⁰ 5s¹",
      discovery: "~5000 years ago (Anatolia)",
      labels: { group: "Group", period: "Period", block: "Block", category: "Category", electron: "Electron Config.", discovery: "Discovery" },
    },
    conductivity: {
      title: "Electrical Conductivity Comparison",
      unit: "× 10⁶ S/m",
      metals: [
        { name: "Silver (Ag)", value: 63.0, color: "#C0C0C0" },
        { name: "Copper (Cu)", value: 59.6, color: "#B87333" },
        { name: "Gold (Au)", value: 41.1, color: "#D4AF37" },
        { name: "Aluminum (Al)", value: 37.7, color: "#848789" },
        { name: "Iron (Fe)", value: 10.0, color: "#6B6B6B" },
      ],
    },
    darkMode: "Mode", toc: "Contents",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة المعرفة بالفضة",
    breadcrumb: ["الرئيسية", "العلوم", "كيمياء الفضة"],
    category: "العلوم",
    title: "كيمياء الفضة: قصة العنصر Ag",
    subtitle: "دليل شامل للخصائص الكيميائية للفضة، من البنية الذرية إلى علم السبائك",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٠ دقائق قراءة" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "الفضة (Ag)، العنصر رقم ٤٧ في الجدول الدوري، يأخذ رمزه من الكلمة اللاتينية 'argentum'. تُعد الفضة من أثمن المعادن عبر التاريخ، وتتيح خصائصها الكيميائية استخدامات واسعة من المجوهرات إلى الإلكترونيات، ومن التصوير الفوتوغرافي إلى الطب.",
          "يتميز هذا المعدن ببريقه الفريد وأعلى موصلية كهربائية وحرارية بين جميع المعادن، فضلاً عن خصائصه المضادة للميكروبات. يستكشف هذا المقال الأسس العلمية للفضة.",
        ],
      },
      {
        id: "element", heading: "بطاقة هوية العنصر",
        paragraphs: [
          "الفضة معدن انتقالي يقع في الدورة الخامسة، المجموعة ١١ (IB) من الجدول الدوري. تشترك مجموعتها مع النحاس (Cu) والذهب (Au) — يُعرف هذا الثلاثي بـ'معادن العملات'.",
        ],
        widget: "periodic",
      },
      {
        id: "physical", heading: "الخصائص الفيزيائية",
        paragraphs: [
          "تمتلك الفضة أعلى موصلية كهربائية وحرارية بين جميع المعادن. كما تمتلك أعلى انعكاسية ضوئية، مما يجعلها مادة حاسمة في صناعة المرايا وتقنيات الطلاء البصري.",
        ],
        table: {
          headers: ["الخاصية", "القيمة", "الترتيب"],
          rows: [
            ["العدد الذري", "٤٧", "—"],
            ["الكتلة الذرية", "١٠٧٫٨٧ غ/مول", "—"],
            ["الكثافة", "١٠٫٤٩ غ/سم³", "—"],
            ["نقطة الانصهار", "٩٦١٫٨ °م", "—"],
            ["نقطة الغليان", "٢٬١٦٢ °م", "—"],
            ["الموصلية الكهربائية", "٦٫٣٠ × ١٠⁷ S/m", "الأول (جميع المعادن)"],
            ["الموصلية الحرارية", "٤٢٩ W/(m·K)", "الأول (جميع المعادن)"],
            ["صلابة موس", "٢٫٥", "—"],
            ["الانعكاسية", "٩٧٪ (الضوء المرئي)", "الأول (جميع المعادن)"],
          ],
        },
      },
      {
        id: "conductivity", heading: "مقارنة الموصلية",
        paragraphs: [
          "تتفوق موصلية الفضة الكهربائية على النحاس بنسبة ٦٪ وعلى الذهب بنسبة ٤٦٪. لكن النحاس يُفضل صناعياً بسبب التكلفة فقط.",
          "في الدوائر الإلكترونية عالية التردد وتكنولوجيا الفضاء حيث تكون التكلفة ثانوية، تصبح الفضة الموصل المفضل.",
        ],
        widget: "conductivity",
      },
      {
        id: "chemical", heading: "التفاعلات الكيميائية",
        paragraphs: [
          "تتصرف الفضة كيميائياً بشكل قريب من المعادن النبيلة. لا تتفاعل مع الأكسجين الجوي في حالتها النقية.",
          "لكن أشهر تفاعل للفضة هو التغمُّق (الأكسدة السطحية). تتفاعل مع مركبات الكبريت في الهواء مكونة طبقة سوداء من كبريتيد الفضة:",
        ],
        formula: "2Ag + H₂S → Ag₂S + H₂",
        paragraphs2: [
          "هذا التفاعل عكوس — يمكن إزالة طبقة كبريتيد الفضة ميكانيكياً أو كيميائياً.",
          "تذوب الفضة أيضاً في حمض النيتريك (HNO₃) — تُستخدم هذه الخاصية في اختبار العيار.",
        ],
      },
      {
        id: "alloy", heading: "كيمياء السبائك ونظام ٩٢٥",
        paragraphs: [
          "الفضة النقية (عيار ٩٩٩) طرية جداً، لذلك تُستخدم السبائك. أشهرها فضة الاسترلينغ ٩٢٥: ٩٢٫٥٪ فضة + ٧٫٥٪ نحاس.",
          "إضافة النحاس تُقوي البنية البلورية للفضة عبر آلية تُعرف بـ'تصليب المحلول الصلب'.",
          "تستخدم السبائك الحديثة أيضاً الجرمانيوم (Argentium®) والسيليكون والزنك لتحسين مقاومة التغمق.",
        ],
      },
      {
        id: "isotopes", heading: "النظائر والتطبيقات الإشعاعية",
        paragraphs: [
          "توجد الفضة طبيعياً في نظيرين مستقرين: ¹⁰⁷Ag (٥١٫٨٪) و ¹⁰⁹Ag (٤٨٫٢٪).",
          "يُستخدم النظير المشع ¹¹⁰ᵐAg في الطب النووي للتشخيص.",
        ],
      },
      {
        id: "nano", heading: "الفضة النانوية: مادة المستقبل",
        paragraphs: [
          "جسيمات الفضة النانوية (١-١٠٠ نانومتر) تُظهر تأثيرات مضادة للميكروبات أقوى بكثير من الفضة العادية.",
          "للفضة النانوية تطبيقات تجارية واسعة من النسيج إلى تعبئة الأغذية، ومن تنقية المياه إلى الأجهزة الطبية.",
        ],
      },
    ],
    faq: {
      heading: "الأسئلة الشائعة",
      items: [
        { q: "لماذا تتغمق الفضة؟", a: "تتفاعل الفضة مع مركبات الكبريت في الهواء مكونة طبقة سوداء من كبريتيد الفضة. هذه عملية كيميائية طبيعية وليست عيباً." },
        { q: "هل الفضة أفضل موصل؟", a: "نعم، تمتلك الفضة أعلى موصلية كهربائية بين جميع المعادن." },
        { q: "هل الفضة سامة؟", a: "الفضة المعدنية ليست سامة. لكن التعرض المفرط لأملاح الفضة يسبب حالة 'أرجيريا' (تلون الجلد بالرمادي)." },
        { q: "ما هي فضة Argentium؟", a: "Argentium سبيكة حديثة يُستبدل فيها جزء من النحاس بالجرمانيوم، مما يمنحها مقاومة عالية جداً للتغمق." },
      ],
    },
    sources: {
      heading: "المصادر",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "CRC Handbook of Chemistry and Physics",
        "Greenwood & Earnshaw — \"Chemistry of the Elements\"",
        "Nature Nanotechnology — أبحاث الفضة النانوية",
      ],
    },
    related: {
      heading: "مواضيع ذات صلة",
      items: [
        { title: "ما هو عيار ٩٢٥؟", path: "/ar/manufacturing/925", cat: "التصنيع" },
        { title: "الخصائص المضادة للميكروبات", path: "/ar/science/antimicrobial", cat: "العلوم" },
        { title: "الاستخدامات الصناعية", path: "/ar/science/industrial", cat: "العلوم" },
      ],
    },
    sponsor: {
      text: "اكتشفوا كمال الفضة الكيميائي في شكل مجوهرات.",
      cta: "شاهد على إنستغرام",
      note: "هذا المحتوى مدعوم من إسطنبول غوموش.",
    },
    periodic: {
      symbol: "Ag", name: "فضة", latin: "Argentum",
      number: "٤٧", mass: "١٠٧٫٨٧",
      group: "١١ (IB)", period: "٥",
      block: "كتلة d", category: "معدن انتقالي",
      electron: "[Kr] 4d¹⁰ 5s¹",
      discovery: "~٥٠٠٠ سنة (الأناضول)",
      labels: { group: "المجموعة", period: "الدورة", block: "الكتلة", category: "التصنيف", electron: "التوزيع الإلكتروني", discovery: "الاكتشاف" },
    },
    conductivity: {
      title: "مقارنة الموصلية الكهربائية",
      unit: "× ١٠⁶ S/m",
      metals: [
        { name: "الفضة (Ag)", value: 63.0, color: "#C0C0C0" },
        { name: "النحاس (Cu)", value: 59.6, color: "#B87333" },
        { name: "الذهب (Au)", value: 41.1, color: "#D4AF37" },
        { name: "الألومنيوم (Al)", value: 37.7, color: "#848789" },
        { name: "الحديد (Fe)", value: 10.0, color: "#6B6B6B" },
      ],
    },
    darkMode: "الوضع", toc: "المحتويات",
  },
};

// ─── Periodic Element Card Widget ─────────────────────────
function PeriodicCard({ data, dark, isRTL }) {
  const accent = dark ? "#C0C0C0" : "#708090";
  const gold = "#D4AF37";
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const border = dark ? "rgba(192,192,192,0.12)" : "rgba(0,0,0,0.08)";
  const bg = dark ? "rgba(192,192,192,0.03)" : "rgba(192,192,192,0.06)";

  const fields = [
    [data.labels.group, data.group],
    [data.labels.period, data.period],
    [data.labels.block, data.block],
    [data.labels.category, data.category],
    [data.labels.electron, data.electron],
    [data.labels.discovery, data.discovery],
  ];

  return (
    <div style={{
      display: "flex", flexWrap: "wrap", gap: 20, margin: "20px 0",
      alignItems: "flex-start",
    }}>
      {/* Element tile */}
      <div style={{
        width: 180, height: 220, borderRadius: 16, padding: 20,
        background: dark
          ? "linear-gradient(145deg, #1a1a2e, #252540)"
          : "linear-gradient(145deg, #f0f0ea, #e0e0d8)",
        border: `2px solid ${accent}33`,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", position: "relative",
        boxShadow: dark ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.08)",
      }}>
        <div style={{ position: "absolute", top: 14, left: 16, fontSize: 16, fontWeight: 700, color: gold }}>
          {data.number}
        </div>
        <div style={{
          fontSize: 72, fontWeight: 700,
          fontFamily: "'Playfair Display', serif",
          background: `linear-gradient(135deg, ${accent}, ${gold})`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          lineHeight: 1,
        }}>{data.symbol}</div>
        <div style={{ fontSize: 16, fontWeight: 600, color: textP, marginTop: 4 }}>{data.name}</div>
        <div style={{ fontSize: 11, color: textS, fontStyle: "italic" }}>{data.latin}</div>
        <div style={{ position: "absolute", bottom: 14, fontSize: 13, color: textS, fontFamily: "'JetBrains Mono', monospace" }}>
          {data.mass}
        </div>
      </div>

      {/* Properties grid */}
      <div style={{ flex: 1, minWidth: 240, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {fields.map(([label, value], i) => (
          <div key={i} style={{
            background: bg, border: `1px solid ${border}`, borderRadius: 10,
            padding: "12px 14px",
            gridColumn: i >= 4 ? "1 / -1" : undefined,
          }}>
            <div style={{ fontSize: 10, color: textS, fontWeight: 600, letterSpacing: "0.04em", marginBottom: 4 }}>{label}</div>
            <div style={{ fontSize: 14, color: textP, fontWeight: 500, fontFamily: i === 4 ? "'JetBrains Mono', monospace" : undefined }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Conductivity Bar Chart Widget ────────────────────────
function ConductivityChart({ data, dark }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const maxVal = Math.max(...data.metals.map(m => m.value));

  return (
    <div style={{
      margin: "20px 0", padding: "24px", borderRadius: 14,
      border: `1px solid ${border}`,
      background: dark ? "rgba(192,192,192,0.02)" : "rgba(192,192,192,0.04)",
    }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: textP, marginBottom: 4 }}>{data.title}</div>
      <div style={{ fontSize: 11, color: textS, marginBottom: 20 }}>{data.unit}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {data.metals.map((m, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 110, fontSize: 12, color: textS, textAlign: "right", flexShrink: 0 }}>{m.name}</div>
            <div style={{ flex: 1, height: 28, borderRadius: 6, background: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)", overflow: "hidden", position: "relative" }}>
              <div style={{
                height: "100%", width: `${(m.value / maxVal) * 100}%`,
                borderRadius: 6,
                background: `linear-gradient(90deg, ${m.color}88, ${m.color})`,
                display: "flex", alignItems: "center", justifyContent: "flex-end",
                paddingRight: 10, transition: "width 1s ease",
              }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: dark ? "#0f0f14" : "#fff", fontFamily: "'JetBrains Mono', monospace" }}>{m.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Article Component ───────────────────────────────
export default function ChemistryArticle() {
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
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

        {/* Hero Visual — Atom model */}
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
            }}>Ag</div>
            <div style={{ fontSize: 13, color: textS, letterSpacing: "0.15em", marginTop: 4 }}>
              ARGENTUM · 47
            </div>
          </div>
          {/* Electron orbit rings */}
          {[0, 1, 2, 3, 4].map(i => (
            <div key={i} style={{
              position: "absolute",
              width: 80 + i * 44, height: 50 + i * 28,
              borderRadius: "50%",
              border: `1px solid ${accent}${(14 - i * 2).toString(16).padStart(2, "0")}`,
              top: "50%", left: "50%",
              transform: `translate(-50%, -50%) rotate(${i * 35}deg)`,
            }} />
          ))}
        </div>

        {/* Sections */}
        {t.sections.map((sec) => (
          <section key={sec.id} style={{ marginBottom: 36 }}>
            {sec.heading && (
              <h2 style={{
                fontFamily: fontD, fontSize: 24, fontWeight: 600,
                marginBottom: 16, paddingTop: 8,
              }}>{sec.heading}</h2>
            )}
            {sec.paragraphs.map((p, pi) => (
              <p key={pi} style={{
                fontSize: 15, lineHeight: 1.8, color: textS, marginBottom: 14,
              }}>{p}</p>
            ))}

            {/* Table */}
            {sec.table && (
              <div style={{
                overflowX: "auto", margin: "20px 0", borderRadius: 12,
                border: `1px solid ${border}`,
              }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
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
                        background: row[2] && row[2].includes("1.") ? (dark ? "rgba(212,175,55,0.06)" : "rgba(212,175,55,0.08)") : "transparent",
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

            {/* Periodic Element Card */}
            {sec.widget === "periodic" && (
              <PeriodicCard data={t.periodic} dark={dark} isRTL={isRTL} />
            )}

            {/* Conductivity Chart */}
            {sec.widget === "conductivity" && (
              <ConductivityChart data={t.conductivity} dark={dark} />
            )}

            {/* Chemical Formula */}
            {sec.formula && (
              <div style={{
                margin: "20px 0", padding: "20px 24px", borderRadius: 12,
                background: dark ? "rgba(212,175,55,0.04)" : "rgba(212,175,55,0.06)",
                border: `1px solid ${gold}22`, textAlign: "center",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 20, fontWeight: 600, color: textP,
                letterSpacing: "0.05em",
              }}>
                {sec.formula}
              </div>
            )}

            {/* Second paragraphs after formula */}
            {sec.paragraphs2 && sec.paragraphs2.map((p, pi) => (
              <p key={`p2-${pi}`} style={{
                fontSize: 15, lineHeight: 1.8, color: textS, marginBottom: 14,
              }}>{p}</p>
            ))}
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
                  fontFamily: fontB, textAlign: isRTL ? "right" : "left", gap: 12,
                }}>
                  <span style={{ flex: 1 }}>{item.q}</span>
                  <span style={{
                    fontSize: 18, color: textS, transition: "transform 0.3s",
                    transform: openFaq === i ? "rotate(45deg)" : "rotate(0)", flexShrink: 0,
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
          border: `1px solid ${gold}22`, borderRadius: 16, padding: "28px 24px",
          background: dark ? "rgba(212,175,55,0.03)" : "rgba(212,175,55,0.05)",
          textAlign: "center",
        }}>
          <p style={{ fontSize: 15, color: textP, marginBottom: 16, lineHeight: 1.6 }}>
            {t.sponsor.text}
          </p>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 16 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{
                width: 80, height: 80, borderRadius: 10,
                background: dark
                  ? `linear-gradient(${120 * i}deg, #1e1e2e, #2a2a3e)`
                  : `linear-gradient(${120 * i}deg, #e0ddd4, #d5d0c4)`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={textS} strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill={textS} />
                </svg>
              </div>
            ))}
          </div>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "10px 24px", borderRadius: 10,
            background: `linear-gradient(135deg, ${accent}, ${gold})`,
            color: "#0f0f14", fontSize: 13, fontWeight: 600,
            textDecoration: "none", transition: "transform 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >📸 {t.sponsor.cta}</a>
          <p style={{ fontSize: 11, color: textS, marginTop: 14, opacity: 0.7 }}>{t.sponsor.note}</p>
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
        <p style={{ fontSize: 11, color: textS }}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p>
      </footer>
    </div>
  );
}
