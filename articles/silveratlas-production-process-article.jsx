import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Üretim", "Gümüş Takı Üretim Süreci"],
    category: "Üretim",
    title: "Gümüş Takı Üretim Süreci",
    subtitle: "Tasarımdan vitrinine — 925 ayar gümüş takının adım adım üretim rehberi",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "10 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Bir gümüş takının vitrinden elinize geçmesi, uzun ve titiz bir üretim sürecinin sonucudur. Ham gümüş külçeden zarif bir yüzüğe veya kolyeye dönüşen bu yolculuk, metalürji bilimi ile el sanatının buluştuğu noktada gerçekleşir.",
          "Bu makale, modern gümüş takı üretiminin temel aşamalarını — tasarım, kalıp, döküm, montaj, yüzey işleme, kalite kontrol ve ambalajlama — adım adım açıklamaktadır.",
        ],
      },
      {
        id: "akis", heading: "Üretim Akış Diyagramı",
        paragraphs: ["Aşağıdaki diyagram, 925 ayar gümüş takı üretiminin ana aşamalarını göstermektedir:"],
        widget: "flowchart",
      },
      {
        id: "tasarim", heading: "1. Tasarım ve CAD Modelleme",
        paragraphs: [
          "Üretim süreci tasarımla başlar. Modern takı üretiminde CAD (Bilgisayar Destekli Tasarım) yazılımları — Rhino, Matrix, JewelCAD — kullanılarak 3D dijital modeller oluşturulur.",
          "CAD modelleme, tasarımcıya milimetrik hassasiyette detay kontrolü sağlar. Taş yuvaları, kilitleme mekanizmaları ve ergonomik ölçüler dijital ortamda optimize edilir. Geleneksel yöntemde ise usta kuyumcu, elle çizim ve mum model ile çalışır.",
          "Tasarım onaylandıktan sonra, CAD dosyası 3D yazıcıya veya CNC makinesine aktarılarak prototip üretimi başlar.",
        ],
      },
      {
        id: "kalip", heading: "2. Prototip ve Kalıp Hazırlama",
        paragraphs: [
          "3D yazıcılarla reçine veya mum prototip üretilir. Prototip, fiziksel olarak incelenir ve gerekli düzeltmeler yapılır.",
          "Onaylanan prototipten kauçuk veya silikon kalıp alınır. Bu kalıp, seri üretime geçildiğinde tekrar tekrar mum model üretmek için kullanılacaktır.",
          "Kayıp mum döküm (lost wax casting) yönteminde her mum model bir kez kullanılır — döküm sonrası mum erir ve yerine metal dolar. Bu teknik, MÖ 4000'den beri kullanılmaktadır.",
        ],
      },
      {
        id: "dokum", heading: "3. Alaşım Hazırlama ve Döküm",
        paragraphs: [
          "925 ayar alaşım, %92,5 saf gümüş ve %7,5 bakırın hassas tartımla birleştirilmesiyle hazırlanır. Metal, 961°C üzerinde eritilir ve homojen bir alaşım oluşturulur.",
          "Döküm (casting) işlemi iki ana yöntemle gerçekleştirilir: vakumlu döküm (vacuum casting) ve santrifüj döküm (centrifugal casting). Vakumlu döküm, metal akışını optimize ederek hava kabarcığı riskini en aza indirir.",
          "Erimiş metal, alçı kalıp (investment) içindeki mum model boşluklarına dolar. Soğuma sonrası alçı kırılarak ham metal parçalar (casting tree) ortaya çıkar.",
        ],
      },
      {
        id: "montaj", heading: "4. Kesim, Eğeleme ve Montaj",
        paragraphs: [
          "Döküm ağacından kesilen ham parçalar, eğe ve törpü ile şekillendirilir. Bu aşamada fazla metal çapakları temizlenir, yüzeyler düzeltilir ve parçalar birbirine uyumlu hale getirilir.",
          "Çok parçalı tasarımlarda (zincir bağlantıları, menteşeler, kilit mekanizmaları) lehimleme (soldering) işlemi uygulanır. Gümüş lehim, ana metalden düşük erime noktasına sahip özel bir alaşımdır.",
          "Taşlı modellerde bu aşamada taş yuvası (setting) hazırlanır: bezel (çerçeve), prong (tırnak), pavé (döşeme) ve channel (kanal) en yaygın yuvalama teknikleridir.",
        ],
      },
      {
        id: "yuzey", heading: "5. Yüzey İşleme ve Polisaj",
        paragraphs: [
          "Yüzey işleme, ham metalin zarif bir takıya dönüştüğü kritik aşamadır. Birden fazla polisaj basamağı uygulanır:",
          "Kaba polisaj → ince polisaj → ayna parlaklığı (mirror finish) sıralaması standart prosedürdür. Keçe disk, fırça ve polisaj pastası kullanılır. Bazı tasarımlarda mat finish (saten), kumlanmış (sandblasted) veya oksitlenmiş (oxidized) yüzey tercih edilir.",
          "Rodaj kaplama (rhodium plating), gümüşün kararmasını yavaşlatan ve parlaklığını artıran opsiyonel bir son işlemdir. İnce bir rodaj katmanı (~0,5 mikron) elektrokimyasal yöntemle uygulanır.",
        ],
      },
      {
        id: "damga", heading: "6. Ayar Damgası ve Kalite Kontrol",
        paragraphs: [
          "Türkiye'de gümüş ürünlere Darphane ve Damga Matbaası Genel Müdürlüğü tarafından ayar damgası vurulur. '925' damgası, ürünün laboratuvar testinden geçtiğinin ve beyan edilen saflığa sahip olduğunun resmî kanıtıdır.",
          "Kalite kontrol süreci: boyutsal doğruluk, taş güvenliği (sallama testi), kilit mekanizması işlevselliği, yüzey kalitesi ve ağırlık kontrolü. Her parça ayrı ayrı incelenir.",
          "XRF (X-ışını floresans) analizi, alaşım bileşimini tahribatsız olarak doğrulayan hızlı ve güvenilir bir yöntemdir. Profesyonel üreticiler bu testi rutin olarak uygular.",
        ],
      },
      {
        id: "ambalaj", heading: "7. Ambalajlama ve Etiketleme",
        paragraphs: [
          "Son aşamada ürün, kurutucu paket (silika jel) ile birlikte uygun ambalajda paketlenir. Takı kutusu, kararma önleyici poşet ve bakım kartı standart bileşenlerdir.",
          "Etiketleme bilgileri: ayar değeri (925), üretici kodu, ürün ağırlığı, taş bilgisi (varsa) ve bakım talimatları. AB ve ABD pazarları için ek uyumluluk etiketleri gerekebilir.",
        ],
      },
      {
        id: "geleneksel", heading: "Geleneksel ve Modern Yöntem Karşılaştırması",
        paragraphs: [
          "Geleneksel el yapımı üretim, usta kuyumcunun tezgâhta birebir şekillendirme yaptığı yöntemdir. Telkâri, kazaziye ve dövme (forging) teknikleri bu kategoridedir. Üretim süresi uzun, her parça benzersizdir.",
          "Modern seri üretim, CAD + 3D baskı + vakum döküm zinciriyle aynı tasarımı yüzlerce adet üretebilir. Maliyet düşük, tutarlılık yüksek, ancak el yapımının karakter ve özgünlüğünden yoksundur.",
          "Hibrit yaklaşım, seri dökümle üretilen temel formun üzerine elle detay eklemeyi birleştirir — bu yöntem hem verimliliği hem de el sanatı kalitesini sunar.",
        ],
      },
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "925 ayar takı üretimi ne kadar sürer?", a: "Tasarımdan tamamlanmış ürüne kadar ortalama 5-10 iş günü. El yapımı telkâri gibi yoğun işçilik gerektiren parçalarda bu süre 2-4 haftaya uzayabilir." },
        { q: "CAD tasarım mı yoksa elle tasarım mı daha iyi?", a: "Her ikisinin avantajları vardır. CAD, hassasiyet ve tekrarlanabilirlik sunar; elle tasarım ise organik formlar ve benzersiz karakter sağlar. Modern üreticiler genellikle hibrit yaklaşım kullanır." },
        { q: "Rodaj kaplama kalıcı mıdır?", a: "Hayır, rodaj katmanı zamanla aşınır — yoğun kullanımla 6-12 ayda incelir. Yeniden kaplama işlemi kuyumcularda yaptırılabilir." },
        { q: "Kayıp mum döküm nedir?", a: "Mum modelin alçı kalıba yerleştirilip, döküm sırasında eriyen mumun yerine metalin dolması yöntemidir. 6000 yıllık bir tekniktir." },
        { q: "El yapımı ile seri üretim farkı nasıl anlaşılır?", a: "El yapımı parçalarda hafif asimetri, alet izleri ve benzersiz detaylar görülür. Seri üretim parçalar tamamen simetrik ve tutarlıdır." },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "Tim McCreight — \"Complete Metalsmith\"",
        "Oppi Untracht — \"Jewelry Concepts and Technology\"",
        "The Goldsmiths' Company — \"Technical Manual for Silversmiths\"",
        "İstanbul Kuyumcular Odası — Üretim Standartları Rehberi",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "925 Ayar Nedir?", path: "/tr/uretim/925-ayar", cat: "Üretim" },
        { title: "Geleneksel Teknikler", path: "/tr/uretim/geleneksel", cat: "Üretim" },
        { title: "Ayar Damgası Rehberi", path: "/tr/uretim/damga", cat: "Üretim" },
      ],
    },
    sponsor: {
      text: "Konya'dan dünyaya — 925 ayar gümüş takı üretim sürecini yakından görün.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    flowSteps: [
      { step: "1", title: "Tasarım & CAD", desc: "3D dijital modelleme", icon: "✏️", time: "1-2 gün" },
      { step: "2", title: "Prototip & Kalıp", desc: "3D baskı + kauçuk kalıp", icon: "🖨️", time: "1-2 gün" },
      { step: "3", title: "Alaşım & Döküm", desc: "925 eritme + vakum döküm", icon: "🔥", time: "1 gün" },
      { step: "4", title: "Kesim & Montaj", desc: "Eğeleme, lehim, taş yuvası", icon: "⚒️", time: "1-3 gün" },
      { step: "5", title: "Polisaj", desc: "Kaba → ince → ayna parlaklığı", icon: "✨", time: "0.5-1 gün" },
      { step: "6", title: "Damga & QC", desc: "925 damga, XRF test", icon: "🔍", time: "0.5 gün" },
      { step: "7", title: "Ambalaj", desc: "Kutu, poşet, etiket", icon: "📦", time: "0.5 gün" },
    ],
    flowTitle: "Üretim Akış Şeması",
    darkMode: "Mod", toc: "İçindekiler",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Manufacturing", "Silver Jewelry Production Process"],
    category: "Manufacturing",
    title: "Silver Jewelry Production Process",
    subtitle: "From design to display — step-by-step guide to 925 sterling silver jewelry manufacturing",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "10 min read" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "A silver jewelry piece reaching your hand from the display case is the result of a long, meticulous production process. This journey from raw silver ingot to elegant ring or necklace occurs where metallurgy science meets craftsmanship.",
          "This article explains the fundamental stages of modern silver jewelry production — design, mold, casting, assembly, surface finishing, quality control, and packaging — step by step.",
        ],
      },
      { id: "flow", heading: "Production Flow Diagram", paragraphs: ["The diagram below shows the main stages of 925 sterling silver jewelry production:"], widget: "flowchart" },
      {
        id: "design", heading: "1. Design and CAD Modeling",
        paragraphs: [
          "Production begins with design. Modern jewelry manufacturing uses CAD software — Rhino, Matrix, JewelCAD — to create 3D digital models.",
          "CAD gives designers millimeter-precise control. Stone settings, locking mechanisms, and ergonomic dimensions are optimized digitally. In traditional methods, master jewelers work with hand drawings and wax models.",
          "Once approved, the CAD file is sent to a 3D printer or CNC machine for prototype production.",
        ],
      },
      {
        id: "mold", heading: "2. Prototype and Mold Making",
        paragraphs: [
          "Resin or wax prototypes are produced via 3D printers. The prototype is physically inspected and corrections are made.",
          "A rubber or silicone mold is taken from the approved prototype, used repeatedly for producing wax models in mass production.",
          "In lost wax casting, each wax model is used once — the wax melts during casting and metal fills its place. This technique dates to 4000 BCE.",
        ],
      },
      {
        id: "casting", heading: "3. Alloy Preparation and Casting",
        paragraphs: [
          "The 925 alloy is prepared by precisely weighing 92.5% pure silver and 7.5% copper. The metal is melted above 961°C to create a homogeneous alloy.",
          "Casting is performed via vacuum casting or centrifugal casting. Vacuum casting optimizes metal flow, minimizing air bubble risk.",
          "Molten metal fills the wax model cavities inside the investment (plaster) mold. After cooling, the plaster is broken to reveal raw metal parts (casting tree).",
        ],
      },
      {
        id: "assembly", heading: "4. Cutting, Filing, and Assembly",
        paragraphs: [
          "Raw parts cut from the casting tree are shaped with files and burrs. Excess metal flash is cleaned, surfaces smoothed, and parts fitted together.",
          "Multi-part designs require soldering for chain links, hinges, and clasps. Silver solder has a lower melting point than the base metal.",
          "For gemstone models, stone settings are prepared at this stage: bezel, prong, pavé, and channel are the most common setting techniques.",
        ],
      },
      {
        id: "finishing", heading: "5. Surface Finishing and Polishing",
        paragraphs: [
          "Surface finishing is the critical stage where raw metal transforms into elegant jewelry. Multiple polishing steps are applied:",
          "Rough polish → fine polish → mirror finish is the standard procedure. Felt discs, brushes, and polishing compound are used. Some designs opt for matte, sandblasted, or oxidized finishes.",
          "Rhodium plating is an optional final treatment that slows tarnishing and enhances shine. A thin rhodium layer (~0.5 micron) is applied electrochemically.",
        ],
      },
      {
        id: "hallmark", heading: "6. Hallmarking and Quality Control",
        paragraphs: [
          "In Turkey, silver products are hallmarked by the General Directorate of the Mint. The '925' stamp is official proof that the product has been lab-tested.",
          "QC process: dimensional accuracy, stone security (shake test), clasp functionality, surface quality, and weight verification.",
          "XRF (X-ray fluorescence) analysis non-destructively verifies alloy composition. Professional manufacturers apply this test routinely.",
        ],
      },
      {
        id: "packaging", heading: "7. Packaging and Labeling",
        paragraphs: [
          "In the final stage, the product is packaged with a desiccant pack (silica gel). Jewelry box, anti-tarnish pouch, and care card are standard components.",
          "Label information: fineness (925), manufacturer code, product weight, stone details (if applicable), and care instructions.",
        ],
      },
      {
        id: "comparison", heading: "Traditional vs Modern Methods",
        paragraphs: [
          "Traditional handmade production involves a master jeweler shaping each piece at the bench. Filigree, kazaziye, and forging techniques fall in this category. Production time is long; each piece is unique.",
          "Modern mass production via CAD + 3D printing + vacuum casting can produce hundreds of identical pieces. Cost is low, consistency high, but it lacks handmade character.",
          "The hybrid approach combines mass-cast basic forms with hand-added details — offering both efficiency and artisan quality.",
        ],
      },
    ],
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "How long does 925 jewelry production take?", a: "From design to finished product, average 5-10 business days. Intensive handwork pieces like filigree may take 2-4 weeks." },
        { q: "Is CAD or hand design better?", a: "Both have advantages. CAD offers precision and repeatability; hand design provides organic forms and unique character. Most modern producers use a hybrid approach." },
        { q: "Is rhodium plating permanent?", a: "No, the rhodium layer wears over time — thinning in 6-12 months with heavy use. Re-plating can be done at jewelers." },
        { q: "What is lost wax casting?", a: "A method where a wax model is placed in a plaster mold, and during casting, the melting wax is replaced by metal. A 6,000-year-old technique." },
      ],
    },
    sources: {
      heading: "Sources",
      items: [
        "Tim McCreight — \"Complete Metalsmith\"",
        "Oppi Untracht — \"Jewelry Concepts and Technology\"",
        "The Goldsmiths' Company — \"Technical Manual for Silversmiths\"",
        "Istanbul Jewelers' Chamber — Production Standards Guide",
      ],
    },
    related: {
      heading: "Related Topics",
      items: [
        { title: "What is 925 Sterling Silver?", path: "/en/manufacturing/925", cat: "Manufacturing" },
        { title: "Traditional Techniques", path: "/en/manufacturing/traditional", cat: "Manufacturing" },
        { title: "Hallmark Guide", path: "/en/manufacturing/hallmark", cat: "Manufacturing" },
      ],
    },
    sponsor: {
      text: "From Konya to the world — see the 925 silver jewelry production process up close.",
      cta: "View on Instagram",
      note: "This content is supported by İstanbul Gümüş.",
    },
    flowSteps: [
      { step: "1", title: "Design & CAD", desc: "3D digital modeling", icon: "✏️", time: "1-2 days" },
      { step: "2", title: "Prototype & Mold", desc: "3D print + rubber mold", icon: "🖨️", time: "1-2 days" },
      { step: "3", title: "Alloy & Casting", desc: "925 melt + vacuum cast", icon: "🔥", time: "1 day" },
      { step: "4", title: "Cut & Assembly", desc: "Filing, solder, setting", icon: "⚒️", time: "1-3 days" },
      { step: "5", title: "Polishing", desc: "Rough → fine → mirror", icon: "✨", time: "0.5-1 day" },
      { step: "6", title: "Hallmark & QC", desc: "925 stamp, XRF test", icon: "🔍", time: "0.5 day" },
      { step: "7", title: "Packaging", desc: "Box, pouch, label", icon: "📦", time: "0.5 day" },
    ],
    flowTitle: "Production Flow Chart",
    darkMode: "Mode", toc: "Contents",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة المعرفة بالفضة",
    breadcrumb: ["الرئيسية", "التصنيع", "عملية إنتاج المجوهرات الفضية"],
    category: "التصنيع",
    title: "عملية إنتاج المجوهرات الفضية",
    subtitle: "من التصميم إلى الواجهة — دليل خطوة بخطوة لتصنيع مجوهرات الفضة عيار ٩٢٥",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٠ دقائق قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["قطعة المجوهرات الفضية التي تصل إلى يدك هي نتيجة عملية إنتاج طويلة ودقيقة. يشرح هذا المقال المراحل الأساسية لإنتاج المجوهرات الفضية الحديثة خطوة بخطوة."] },
      { id: "flow", heading: "مخطط تدفق الإنتاج", paragraphs: ["يوضح المخطط أدناه المراحل الرئيسية:"], widget: "flowchart" },
      { id: "design", heading: "١. التصميم والنمذجة ثلاثية الأبعاد", paragraphs: ["يبدأ الإنتاج بالتصميم باستخدام برامج CAD مثل Rhino وMatrix.", "توفر النمذجة ثلاثية الأبعاد دقة بالمليمتر. بعد الموافقة يُنقل الملف للطابعة ثلاثية الأبعاد."] },
      { id: "mold", heading: "٢. النموذج الأولي والقالب", paragraphs: ["تُنتج نماذج شمعية أو راتنجية بالطباعة ثلاثية الأبعاد.", "يُصنع قالب مطاطي من النموذج المعتمد. في طريقة الشمع المفقود، كل نموذج يُستخدم مرة واحدة."] },
      { id: "casting", heading: "٣. تحضير السبيكة والصب", paragraphs: ["تُحضر سبيكة ٩٢٥ بخلط ٩٢٫٥٪ فضة نقية + ٧٫٥٪ نحاس. يُذاب المعدن فوق ٩٦١ درجة مئوية.", "يتم الصب بالتفريغ أو بالطرد المركزي لملء تجاويف القالب الجصي."] },
      { id: "assembly", heading: "٤. القطع والتجميع", paragraphs: ["تُقطع القطع الخام وتُنعّم بالمبارد. يُطبق اللحام للتصاميم متعددة الأجزاء.", "تُجهز أماكن الأحجار: إطار، مخالب، مرصع، وقناة."] },
      { id: "finishing", heading: "٥. المعالجة السطحية والتلميع", paragraphs: ["التلميع الخشن → الناعم → المرآة هو الإجراء القياسي.", "طلاء الروديوم اختياري يبطئ التغمق ويعزز اللمعان."] },
      { id: "hallmark", heading: "٦. الدمغ ومراقبة الجودة", paragraphs: ["في تركيا تُدمغ المنتجات بواسطة دار الضرب. الدمغة ٩٢٥ إثبات رسمي.", "تحليل XRF يتحقق من التركيب بدون إتلاف."] },
      { id: "packaging", heading: "٧. التعبئة والتغليف", paragraphs: ["تُعبأ المنتجات مع مادة مجففة وبطاقة عناية في علبة مناسبة."] },
      { id: "comparison", heading: "المقارنة بين الطرق التقليدية والحديثة", paragraphs: ["الإنتاج التقليدي: كل قطعة فريدة، وقت طويل، طابع حرفي.", "الإنتاج الحديث: كميات كبيرة، تكلفة منخفضة، اتساق عالي.", "النهج الهجين يجمع مزايا الاثنين."] },
    ],
    faq: {
      heading: "الأسئلة الشائعة",
      items: [
        { q: "كم تستغرق عملية إنتاج المجوهرات؟", a: "في المتوسط ٥-١٠ أيام عمل. القطع اليدوية المكثفة مثل التلكاري قد تستغرق ٢-٤ أسابيع." },
        { q: "ما هو صب الشمع المفقود؟", a: "طريقة يوضع فيها نموذج شمعي في قالب جصي، وأثناء الصب يذوب الشمع ويحل محله المعدن. تقنية عمرها ٦٠٠٠ سنة." },
        { q: "هل طلاء الروديوم دائم؟", a: "لا، يتآكل مع الوقت في ٦-١٢ شهراً مع الاستخدام المكثف. يمكن إعادة الطلاء عند الصائغ." },
      ],
    },
    sources: { heading: "المصادر", items: ["Tim McCreight — Complete Metalsmith", "Oppi Untracht — Jewelry Concepts and Technology", "غرفة صاغة إسطنبول — دليل معايير الإنتاج"] },
    related: { heading: "مواضيع ذات صلة", items: [{ title: "ما هو عيار ٩٢٥؟", path: "/ar/manufacturing/925", cat: "التصنيع" }, { title: "التقنيات التقليدية", path: "/ar/manufacturing/traditional", cat: "التصنيع" }] },
    sponsor: { text: "من قونية إلى العالم — شاهدوا عملية إنتاج المجوهرات الفضية عن قرب.", cta: "شاهد على إنستغرام", note: "هذا المحتوى مدعوم من إسطنبول غوموش." },
    flowSteps: [
      { step: "١", title: "التصميم", desc: "نمذجة ثلاثية الأبعاد", icon: "✏️", time: "١-٢ يوم" },
      { step: "٢", title: "النموذج والقالب", desc: "طباعة + قالب مطاطي", icon: "🖨️", time: "١-٢ يوم" },
      { step: "٣", title: "السبيكة والصب", desc: "إذابة ٩٢٥ + صب بالتفريغ", icon: "🔥", time: "١ يوم" },
      { step: "٤", title: "القطع والتجميع", desc: "تبريد، لحام، تركيب", icon: "⚒️", time: "١-٣ أيام" },
      { step: "٥", title: "التلميع", desc: "خشن ← ناعم ← مرآة", icon: "✨", time: "٠٫٥-١ يوم" },
      { step: "٦", title: "الدمغ والجودة", desc: "دمغة ٩٢٥، اختبار XRF", icon: "🔍", time: "٠٫٥ يوم" },
      { step: "٧", title: "التعبئة", desc: "علبة، حقيبة، بطاقة", icon: "📦", time: "٠٫٥ يوم" },
    ],
    flowTitle: "مخطط تدفق الإنتاج",
    darkMode: "الوضع", toc: "المحتويات",
  },
};

// ─── Flowchart Widget ─────────────────────────────────────
function Flowchart({ steps, title, dark, isRTL }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const accent = dark ? "#C0C0C0" : "#708090";
  const gold = "#D4AF37";
  const border = dark ? "rgba(192,192,192,0.12)" : "rgba(0,0,0,0.08)";

  return (
    <div style={{ margin: "20px 0" }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: textP, marginBottom: 16 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>
        {steps.map((s, i) => (
          <div key={i}>
            <div style={{
              display: "flex", alignItems: "center", gap: 16, padding: "16px 18px",
              borderRadius: 14, border: `1px solid ${border}`,
              background: dark ? "rgba(192,192,192,0.02)" : "rgba(192,192,192,0.04)",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: `linear-gradient(135deg, ${accent}22, ${gold}22)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, flexShrink: 0,
              }}>{s.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: gold, background: `${gold}15`, padding: "1px 6px", borderRadius: 4 }}>{s.step}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: textP }}>{s.title}</span>
                </div>
                <div style={{ fontSize: 12, color: textS }}>{s.desc}</div>
              </div>
              <div style={{ fontSize: 10, color: textS, fontFamily: "'JetBrains Mono', monospace", flexShrink: 0, textAlign: "right" }}>{s.time}</div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ display: "flex", justifyContent: "center", height: 20 }}>
                <div style={{ width: 2, height: "100%", background: `${accent}33` }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────
export default function ProductionProcessArticle() {
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
    <div dir={isRTL ? "rtl" : "ltr"} style={{ fontFamily: fontB, background: bgP, color: textP, minHeight: "100vh", transition: "background 0.4s, color 0.4s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        *{margin:0;padding:0;box-sizing:border-box}::selection{background:rgba(192,192,192,0.3)}
      `}</style>
      <nav style={{position:"sticky",top:0,zIndex:100,background:dark?"rgba(15,15,20,0.88)":"rgba(250,250,245,0.88)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${border}`,padding:"0 24px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div style={{width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div>
          <span style={{fontFamily:fontD,fontWeight:600,fontSize:16}}>{t.nav}</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{display:"flex",gap:2,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)",borderRadius:7,padding:2}}>
            {["tr","en","ar"].map(l=><button key={l} onClick={()=>setLang(l)} style={{border:"none",cursor:"pointer",padding:"3px 9px",borderRadius:5,fontSize:11,fontWeight:lang===l?600:400,fontFamily:l==="ar"?"'Noto Naskh Arabic',serif":fontB,background:lang===l?(dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.08)"):"transparent",color:lang===l?textP:textS}}>{l==="ar"?"عر":l.toUpperCase()}</button>)}
          </div>
          <button onClick={()=>setDark(!dark)} style={{border:"none",cursor:"pointer",background:"transparent",color:textS,fontSize:16,padding:4}}>{dark?"☀️":"🌙"}</button>
        </div>
      </nav>
      <div style={{maxWidth:760,margin:"0 auto",padding:"16px 24px 0",display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",fontSize:12,color:textS}}>
        {t.breadcrumb.map((item,i)=><span key={i} style={{display:"flex",alignItems:"center",gap:6}}>{i>0&&<span style={{opacity:0.4}}>{isRTL?"‹":"›"}</span>}<a href="#" style={{color:i===t.breadcrumb.length-1?textP:textS,textDecoration:"none",fontWeight:i===t.breadcrumb.length-1?500:400}}>{item}</a></span>)}
      </div>
      <article style={{maxWidth:760,margin:"0 auto",padding:"32px 24px 64px",animation:"fadeUp 0.6s ease both"}}>
        <div style={{marginBottom:36}}>
          <div style={{display:"inline-block",padding:"3px 12px",borderRadius:6,fontSize:11,fontWeight:600,letterSpacing:"0.04em",color:gold,border:`1px solid ${gold}33`,marginBottom:16}}>{t.category}</div>
          <h1 style={{fontFamily:fontD,fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.15,marginBottom:12}}>{t.title}</h1>
          <p style={{fontSize:16,color:textS,lineHeight:1.6,marginBottom:20}}>{t.subtitle}</p>
          <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",fontSize:13,color:textS,paddingBottom:20,borderBottom:`1px solid ${border}`}}>
            <span>{t.meta.author}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.date}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.readTime}</span>
          </div>
        </div>
        <div style={{height:220,borderRadius:16,marginBottom:36,overflow:"hidden",background:dark?"linear-gradient(135deg,#1a1a2e,#2a2a3e,#1a1a2e)":"linear-gradient(135deg,#e8e8e8,#d0d0d0,#e8e8e8)",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{textAlign:"center"}}>
            <div style={{fontFamily:fontD,fontSize:44,fontWeight:700,background:`linear-gradient(135deg,${accent},${gold})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>✏️ → 📦</div>
            <div style={{fontSize:13,color:textS,letterSpacing:"0.12em",marginTop:8}}>DESIGN TO DELIVERY</div>
          </div>
        </div>

        {t.sections.map(sec=>(
          <section key={sec.id} style={{marginBottom:36}}>
            {sec.heading&&<h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:16,paddingTop:8}}>{sec.heading}</h2>}
            {sec.paragraphs.map((p,pi)=><p key={pi} style={{fontSize:15,lineHeight:1.8,color:textS,marginBottom:14}}>{p}</p>)}
            {sec.widget==="flowchart"&&<Flowchart steps={t.flowSteps} title={t.flowTitle} dark={dark} isRTL={isRTL}/>}
          </section>
        ))}

        <section style={{marginBottom:36,marginTop:48}}>
          <h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:20}}>{t.faq.heading}</h2>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {t.faq.items.map((item,i)=>(
              <div key={i} style={{border:`1px solid ${openFaq===i?gold+"44":border}`,borderRadius:12,overflow:"hidden",background:openFaq===i?(dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.04)"):"transparent",transition:"all 0.3s"}}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{width:"100%",border:"none",cursor:"pointer",background:"transparent",padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",color:textP,fontSize:14,fontWeight:500,fontFamily:fontB,textAlign:isRTL?"right":"left",gap:12}}>
                  <span style={{flex:1}}>{item.q}</span>
                  <span style={{fontSize:18,color:textS,transition:"transform 0.3s",transform:openFaq===i?"rotate(45deg)":"rotate(0)",flexShrink:0}}>+</span>
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
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:8}}>
          <div style={{width:22,height:22,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div>
          <span style={{fontFamily:fontD,fontWeight:600,fontSize:14}}>{t.nav}</span>
        </div>
        <p style={{fontSize:11,color:textS}}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p>
      </footer>
    </div>
  );
}
