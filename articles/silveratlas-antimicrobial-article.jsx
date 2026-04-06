import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Bilim", "Antimikrobiyal Özellikler"],
    category: "Bilim",
    title: "Gümüşün Antimikrobiyal Özellikleri",
    subtitle: "Antik çağ sezgisinden nano-teknolojiye — gümüşün mikroplarla savaşının bilimsel temelleri",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "10 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Gümüşün hastalık yapıcı mikroorganizmaları öldürme yeteneği, modern bilimin keşfi değildir. Antik Yunan'da Hipokrat gümüş tozunu yara tedavisinde kullanmış, Romalılar suyun tazeliğini korumak için gümüş kaplar tercih etmiş, Osmanlı ordusunda gümüş mataralar standart teçhizat olmuştur.",
          "Günümüzde gümüşün antimikrobiyal mekanizması moleküler düzeyde anlaşılmıştır ve nano-gümüş teknolojisi, tıptan tekstile geniş bir uygulama alanı bulmuştur. Bu makale, gümüşün antimikrobiyal özelliklerinin bilimsel temellerini kapsamlı şekilde açıklamaktadır.",
        ],
      },
      {
        id: "mekanizma", heading: "Üçlü Etki Mekanizması",
        paragraphs: [
          "Gümüş iyonları (Ag⁺), bakterilere üç farklı mekanizma ile saldırır. Bu çoklu etki mekanizması, gümüşü antibiyotiklere dirençli (MRSA gibi) bakterilere karşı bile etkili kılar:",
        ],
        widget: "mechanism",
      },
      {
        id: "tarih", heading: "Tarihsel Kullanım",
        paragraphs: [
          "MÖ 400 — Hipokrat, gümüş tozunun yara iyileşmesini hızlandırdığını ve enfeksiyonu önlediğini kaydetmiştir. Bu, gümüşün tıbbi kullanımının bilinen en eski yazılı kaydıdır.",
          "Orta Çağ'da veba salgınları sırasında aristokrat ailelerin gümüş çatal-kaşık kullanması, enfeksiyon oranlarını düşürmüştür — 'mavi kan' (blue blood) deyiminin bir açıklaması da gümüş maruziyetinin ciltte oluşturduğu hafif argyria'dır.",
          "1800'lerde gümüş nitrat (AgNO₃) çözeltisi, yenidoğan göz enfeksiyonlarını (ophthalmia neonatorum) önlemek için standart uygulama haline gelmiştir. Bu pratik, antibiyotiklerin keşfine kadar dünya genelinde milyonlarca bebeği körlükten korumuştur.",
          "I. Dünya Savaşı'nda gümüş bazlı yara pansumanları yaygın olarak kullanılmıştır. Antibiyotiklerin keşfi (1928, penisilin) ile gümüşün tıbbi kullanımı geçici olarak azalmış, ancak antibiyotik direnci sorunu ile 2000'lerde güçlü bir geri dönüş yapmıştır.",
        ],
      },
      {
        id: "nano", heading: "Nano-Gümüş Teknolojisi",
        paragraphs: [
          "Gümüş nanopartiküller (AgNP), 1-100 nanometre boyutundaki gümüş parçacıklarıdır. Boyutun küçülmesi, yüzey alanı/hacim oranını dramatik şekilde artırır — bu da antimikrobiyal etkiyi katlar.",
          "10 nm boyutundaki bir gümüş nanopartikül, aynı kütledeki kütlesel gümüşe kıyasla ~1000 kat daha fazla yüzey alanına sahiptir. Bu devasa yüzey alanı, daha fazla Ag⁺ iyonu salınımı ve daha güçlü antimikrobiyal etki anlamına gelir.",
          "Nano-gümüş sentez yöntemleri: kimyasal indirgeme (en yaygın), yeşil sentez (bitki ekstraktları kullanarak), fiziksel yöntemler (lazer ablasyon) ve biyolojik sentez (bakteri/mantar aracılığıyla). Yeşil sentez, çevre dostu olması nedeniyle araştırma alanında hızla popülerleşmektedir.",
        ],
      },
      {
        id: "tibbi", heading: "Modern Tıbbi Uygulamalar",
        paragraphs: [
          "Yara bakımı: Gümüş sülfadiazin (SSD) kremi, yanık yaralarının standart tedavisi olmuştur. Modern gümüş yara örtüleri (Aquacel Ag, Acticoat) kontrollü Ag⁺ salınımı ile hem enfeksiyonu önler hem de iyileşmeyi hızlandırır.",
          "Ortopedik implantlar: Gümüş nanopartikül kaplı protezler, biyofilm oluşumunu engelleyerek protez enfeksiyonlarını %80'e kadar azaltabilmektedir. Bu, özellikle revizyon cerrahisi riskini dramatik şekilde düşürür.",
          "Kateterler: Gümüş kaplı üriner kateterler, kateter ilişkili üriner enfeksiyonları (CAUTI) %30-45 azaltmaktadır. Gümüş alaşımlı santral venöz kateterler de kan dolaşımı enfeksiyonlarını düşürür.",
          "Diş hekimliği: Gümüş diamin florür (SDF, %38 AgF) çürük tedavisinde devrim yaratmıştır — invazif olmayan, düşük maliyetli, özellikle pediatrik ve geriatrik hastalarda tercih edilen bir yöntemdir.",
        ],
      },
      {
        id: "tekstil", heading: "Antimikrobiyal Tekstil",
        paragraphs: [
          "Gümüş nanopartikül işlenmiş kumaşlar, koku yapıcı bakterileri elimine ederek 'koku önleyici' spor giyim üretiminde kullanılmaktadır. Büyük spor markalarının çoğu gümüş bazlı antimikrobiyal teknolojiler kullanır.",
          "Hastane tekstilleri: Gümüş işlenmiş yatak çarşafları, hasta önlükleri ve personel üniformaları, nozokomiyal (hastane kaynaklı) enfeksiyon riskini azaltmak için kullanılmaktadır.",
          "Askerî uygulamalar: Gümüş işlenmiş çoraplar ve iç çamaşırları, uzun süreli alan operasyonlarında hijyen sağlamak için bazı ordularda standart teçhizattır.",
        ],
      },
      {
        id: "direnc", heading: "Antibiyotik Direnci ve Gümüşün Avantajı",
        paragraphs: [
          "Dünya Sağlık Örgütü (WHO), antibiyotik direncini 'küresel sağlık güvenliği tehditlerinden biri' olarak tanımlamaktadır. MRSA, VRE ve çoklu ilaç dirençli (MDR) bakteri enfeksiyonları her yıl milyonlarca ölüme yol açmaktadır.",
          "Gümüşün antibiyotiklere göre kritik avantajı: üçlü etki mekanizması nedeniyle bakterilerin gümüşe karşı direnç geliştirmesi çok daha zordur. Tek bir mutasyonla üstesinden gelinebilecek tek bir hedef yoktur.",
          "Ancak uzun süreli ve yoğun gümüş kullanımının gümüş dirençli bakteri suşları ortaya çıkarabileceği konusunda uyarılar mevcuttur. Bu nedenle gümüşün bilinçli ve kontrollü kullanımı önemlidir.",
        ],
      },
      {
        id: "cevre", heading: "Çevresel Boyut ve Güvenlik",
        paragraphs: [
          "Nano-gümüşün çevresel etkisi aktif bir araştırma konusudur. Tekstil yıkama sularıyla çevreye salınan gümüş nanopartiküller, su ekosistemlerindeki faydalı mikroorganizmaları etkileyebilir.",
          "İnsan sağlığı: Normal tıbbi ve tüketici ürün kullanımında gümüş güvenli kabul edilir. Ancak aşırı oral gümüş tüketimi 'argyria' (kalıcı cilt renginin griye dönüşmesi) oluşturabilir — bu kozmetik bir durumdur, sağlık riski taşımaz.",
          "AB düzenlemeleri: Avrupa Birliği, nano-gümüş içeren ürünlerde etiketleme zorunluluğu getirmiştir. Bazı üye ülkeler, biyosit ürünlerinde nano-gümüş kullanımını kısıtlamıştır.",
        ],
      },
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Gümüş tüm bakterileri öldürür mü?", a: "Gümüş iyonları gram-pozitif ve gram-negatif bakterilerin büyük çoğunluğuna karşı etkilidir. Ayrıca bazı virüslere ve mantarlara karşı da aktivite gösterir. Ancak %100 sterilizasyon garantisi vermez." },
        { q: "Gümüş takı takmak antimikrobiyal etki sağlar mı?", a: "Kısmen. 925 ayar gümüş, cilt temasında çok düşük düzeyde Ag⁺ iyonu salabilir, ancak bu miktar tıbbi antimikrobiyal etki için yetersizdir. Takının asıl değeri estetik ve kültüreldir." },
        { q: "Nano-gümüş güvenli midir?", a: "Tıbbi cihazlarda ve tüketici ürünlerinde kullanılan nano-gümüş, düzenleyici otoriteler tarafından onaylanmış dozlarda güvenli kabul edilir. Çevresel etki konusunda araştırmalar devam etmektedir." },
        { q: "Gümüş antibiyotiklerin yerini alabilir mi?", a: "Hayır, gümüş antibiyotiklerin yerini alamaz ancak tamamlayıcı rol oynar. Özellikle yara bakımı, implant kaplamaları ve su arıtma gibi alanlarda antibiyotiklere alternatif veya destek olarak kullanılır." },
        { q: "Argyria nedir?", a: "Aşırı gümüş tüketiminin yol açtığı kalıcı cilt renginin gri-maviye dönüşmesi durumudur. Normal takı kullanımı veya tıbbi ürünlerle oluşmaz; genellikle kolloidal gümüş takviyelerinin bilinçsiz kullanımından kaynaklanır." },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "Lansdown ABG — \"Silver in Healthcare\" (Royal Society of Chemistry, 2010)",
        "Nature Nanotechnology — \"Antimicrobial Silver Nanoparticles\" (2023)",
        "WHO — Global Antimicrobial Resistance Report 2024",
        "Journal of Nanobiotechnology — \"Green Synthesis of Silver Nanoparticles\" (2024)",
        "Cochrane Database — \"Silver-based wound dressings\" (Systematic Review)",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "Gümüşün Kimyası", path: "/tr/bilim/kimya", cat: "Bilim" },
        { title: "Endüstriyel Kullanımlar", path: "/tr/bilim/endustri", cat: "Bilim" },
        { title: "925 Ayar Nedir?", path: "/tr/uretim/925-ayar", cat: "Üretim" },
      ],
    },
    sponsor: {
      text: "Gümüşün doğal koruyucu gücünü 925 ayar takılarda deneyimleyin.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    mechanismData: [
      { step: "1", title: "Hücre Zarı Yıkımı", desc: "Ag⁺ iyonları bakteri hücre zarındaki sülfhidril (-SH) gruplarına bağlanarak zarın geçirgenliğini bozar. Hücre içeriği dışarı sızar.", icon: "🛡️", color: "#FF6B6B" },
      { step: "2", title: "DNA Hasarı", desc: "Hücre içine giren Ag⁺, DNA'nın fosfor gruplarına bağlanarak replikasyonu (çoğalmayı) engeller. Bakteri bölünemez.", icon: "🧬", color: "#6EC6FF" },
      { step: "3", title: "Enzim İnhibisyonu", desc: "Ag⁺, solunum zinciri enzimlerini bloke ederek bakterinin enerji üretimini durdurur. Hücre metabolik olarak ölür.", icon: "⚡", color: "#FFD700" },
    ],
    mechanismTitle: "Gümüş İyonunun (Ag⁺) Üçlü Etki Mekanizması",
    mechanismNote: "Bu çoklu hedef yaklaşımı, antibiyotik direncine karşı gümüşün temel avantajıdır",
    darkMode: "Mod", toc: "İçindekiler",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Science", "Antimicrobial Properties"],
    category: "Science",
    title: "Antimicrobial Properties of Silver",
    subtitle: "From ancient intuition to nanotechnology — the science behind silver's battle with microbes",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "10 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Silver's ability to kill disease-causing microorganisms is not a modern discovery. In ancient Greece, Hippocrates used silver powder for wound treatment; Romans preferred silver vessels to keep water fresh; Ottoman armies used silver flasks as standard equipment.",
        "Today, silver's antimicrobial mechanism is understood at the molecular level, and nano-silver technology has found wide applications from medicine to textiles.",
      ]},
      { id: "mechanism", heading: "Triple Action Mechanism", paragraphs: ["Silver ions (Ag⁺) attack bacteria through three distinct mechanisms. This multi-target approach makes silver effective even against antibiotic-resistant bacteria like MRSA:"], widget: "mechanism" },
      { id: "history", heading: "Historical Use", paragraphs: [
        "400 BCE — Hippocrates recorded that silver powder accelerated wound healing and prevented infection. This is the earliest known written record of silver's medical use.",
        "During medieval plague outbreaks, aristocratic families using silver cutlery had lower infection rates — one explanation for 'blue blood' is the mild argyria caused by silver exposure.",
        "In the 1800s, silver nitrate (AgNO₃) solution became standard practice for preventing newborn eye infections (ophthalmia neonatorum), protecting millions of babies worldwide until antibiotics were discovered.",
        "In WWI, silver-based wound dressings were widely used. After antibiotics' discovery (1928, penicillin), silver's medical use temporarily declined, but made a strong comeback in the 2000s due to antibiotic resistance.",
      ]},
      { id: "nano", heading: "Nano-Silver Technology", paragraphs: [
        "Silver nanoparticles (AgNP) are silver particles 1-100 nanometers in size. Size reduction dramatically increases the surface area to volume ratio, multiplying antimicrobial effectiveness.",
        "A 10nm silver nanoparticle has ~1000x more surface area than the same mass of bulk silver, meaning more Ag⁺ ion release and stronger antimicrobial effect.",
        "Synthesis methods: chemical reduction (most common), green synthesis (using plant extracts), physical methods (laser ablation), and biological synthesis. Green synthesis is rapidly gaining popularity for its eco-friendliness.",
      ]},
      { id: "medical", heading: "Modern Medical Applications", paragraphs: [
        "Wound care: Silver sulfadiazine (SSD) cream became the standard treatment for burn wounds. Modern silver dressings (Aquacel Ag, Acticoat) both prevent infection and accelerate healing through controlled Ag⁺ release.",
        "Orthopedic implants: Silver nanoparticle-coated prostheses can reduce prosthetic infections by up to 80% by preventing biofilm formation.",
        "Catheters: Silver-coated urinary catheters reduce catheter-associated urinary infections (CAUTI) by 30-45%.",
        "Dentistry: Silver diamine fluoride (SDF, 38% AgF) has revolutionized cavity treatment — a non-invasive, low-cost method especially preferred for pediatric and geriatric patients.",
      ]},
      { id: "textile", heading: "Antimicrobial Textiles", paragraphs: [
        "Silver nanoparticle-treated fabrics eliminate odor-causing bacteria for 'odor-free' sportswear. Most major sports brands use silver-based antimicrobial technologies.",
        "Hospital textiles: Silver-treated bed sheets, patient gowns, and staff uniforms reduce nosocomial (hospital-acquired) infection risk.",
        "Military: Silver-treated socks and undergarments are standard equipment in some armies for hygiene during extended field operations.",
      ]},
      { id: "resistance", heading: "Antibiotic Resistance and Silver's Advantage", paragraphs: [
        "WHO identifies antibiotic resistance as 'one of the greatest threats to global health security.' MRSA, VRE, and MDR bacterial infections cause millions of deaths annually.",
        "Silver's critical advantage: its triple mechanism makes it much harder for bacteria to develop resistance. There is no single target that can be overcome by a single mutation.",
        "However, warnings exist that prolonged intensive silver use could give rise to silver-resistant bacterial strains. Conscious, controlled use of silver is therefore important.",
      ]},
      { id: "environment", heading: "Environmental Dimension and Safety", paragraphs: [
        "Nano-silver's environmental impact is an active research topic. Silver nanoparticles released through textile wash water could affect beneficial microorganisms in aquatic ecosystems.",
        "Human health: Silver is considered safe in normal medical and consumer product use. However, excessive oral silver consumption can cause 'argyria' — a cosmetic condition, not a health risk.",
        "EU regulations: The European Union has mandated labeling for products containing nano-silver. Some member states have restricted nano-silver use in biocidal products.",
      ]},
    ],
    faq: { heading: "Frequently Asked Questions", items: [
      { q: "Does silver kill all bacteria?", a: "Silver ions are effective against the vast majority of gram-positive and gram-negative bacteria, plus some viruses and fungi. However, it doesn't guarantee 100% sterilization." },
      { q: "Does wearing silver jewelry provide antimicrobial benefits?", a: "Partially. 925 silver can release very low levels of Ag⁺ on skin contact, but this amount is insufficient for medical antimicrobial effect. Jewelry's primary value is aesthetic and cultural." },
      { q: "Is nano-silver safe?", a: "Nano-silver in medical devices and consumer products is considered safe at approved doses. Research on environmental impact continues." },
      { q: "Can silver replace antibiotics?", a: "No, but it plays a complementary role — especially in wound care, implant coatings, and water purification as an alternative or support to antibiotics." },
      { q: "What is argyria?", a: "A permanent blue-gray skin discoloration caused by excessive silver consumption. It doesn't occur from normal jewelry use; typically results from uncontrolled colloidal silver supplement intake." },
    ]},
    sources: { heading: "Sources", items: ["Lansdown ABG — \"Silver in Healthcare\" (RSC, 2010)", "Nature Nanotechnology — Antimicrobial AgNP (2023)", "WHO — Global AMR Report 2024", "J. Nanobiotechnology — Green Synthesis (2024)", "Cochrane — Silver wound dressings review"] },
    related: { heading: "Related Topics", items: [
      { title: "Chemistry of Silver", path: "/en/science/chemistry", cat: "Science" },
      { title: "Industrial Applications", path: "/en/science/industrial", cat: "Science" },
      { title: "What is 925?", path: "/en/manufacturing/925", cat: "Manufacturing" },
    ]},
    sponsor: { text: "Experience silver's natural protective power in 925 sterling jewelry.", cta: "View on Instagram", note: "This content is supported by İstanbul Gümüş." },
    mechanismData: [
      { step: "1", title: "Cell Membrane Disruption", desc: "Ag⁺ ions bind to sulfhydryl (-SH) groups in the bacterial cell membrane, disrupting permeability. Cell contents leak out.", icon: "🛡️", color: "#FF6B6B" },
      { step: "2", title: "DNA Damage", desc: "Ag⁺ entering the cell binds to DNA phosphorus groups, blocking replication. The bacterium cannot divide.", icon: "🧬", color: "#6EC6FF" },
      { step: "3", title: "Enzyme Inhibition", desc: "Ag⁺ blocks respiratory chain enzymes, halting the bacterium's energy production. The cell dies metabolically.", icon: "⚡", color: "#FFD700" },
    ],
    mechanismTitle: "Silver Ion (Ag⁺) Triple Action Mechanism",
    mechanismNote: "This multi-target approach is silver's key advantage against antibiotic resistance",
    darkMode: "Mode", toc: "Contents",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة المعرفة بالفضة",
    breadcrumb: ["الرئيسية", "العلوم", "الخصائص المضادة للميكروبات"],
    category: "العلوم",
    title: "الخصائص المضادة للميكروبات للفضة",
    subtitle: "من حدس العصور القديمة إلى تقنية النانو — العلم وراء معركة الفضة مع الميكروبات",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٠ دقائق قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "قدرة الفضة على قتل الكائنات الدقيقة المسببة للأمراض ليست اكتشافاً حديثاً. استخدم أبقراط مسحوق الفضة في علاج الجروح، وفضّل الرومان أوعية الفضة لحفظ المياه.",
        "اليوم تُفهم آلية الفضة المضادة للميكروبات على المستوى الجزيئي، وتكنولوجيا الفضة النانوية وجدت تطبيقات واسعة.",
      ]},
      { id: "mechanism", heading: "آلية الفعل الثلاثية", paragraphs: ["تهاجم أيونات الفضة (Ag⁺) البكتيريا عبر ثلاث آليات مختلفة:"], widget: "mechanism" },
      { id: "history", heading: "الاستخدام التاريخي", paragraphs: [
        "٤٠٠ ق.م — سجّل أبقراط أن مسحوق الفضة يسرّع شفاء الجروح.",
        "في القرن التاسع عشر أصبح محلول نترات الفضة معالجة قياسية لمنع التهابات عيون المواليد.",
        "في الحرب العالمية الأولى استُخدمت ضمادات الفضة على نطاق واسع. مع اكتشاف المضادات الحيوية انخفض استخدام الفضة مؤقتاً لكنه عاد بقوة في الألفية مع مشكلة مقاومة المضادات الحيوية.",
      ]},
      { id: "nano", heading: "تقنية الفضة النانوية", paragraphs: [
        "جسيمات الفضة النانوية (١-١٠٠ نانومتر) تضاعف الفعالية المضادة للميكروبات بفضل نسبة المساحة/الحجم الهائلة.",
        "جسيم بحجم ١٠ نانومتر يمتلك ~١٠٠٠ ضعف مساحة السطح مقارنة بنفس كتلة الفضة العادية.",
        "طرق التصنيع: الاختزال الكيميائي، التخليق الأخضر (مستخلصات نباتية)، الطرق الفيزيائية.",
      ]},
      { id: "medical", heading: "التطبيقات الطبية الحديثة", paragraphs: [
        "رعاية الجروح: ضمادات الفضة الحديثة تمنع العدوى وتسرع الشفاء.",
        "الغرسات العظمية المطلية بالفضة النانوية تقلل العدوى بنسبة تصل إلى ٨٠٪.",
        "القسطرة المطلية بالفضة تقلل عدوى المسالك البولية بنسبة ٣٠-٤٥٪.",
        "فلوريد ديامين الفضة أحدث ثورة في علاج التسوس — طريقة غير جراحية ومنخفضة التكلفة.",
      ]},
      { id: "textile", heading: "المنسوجات المضادة للميكروبات", paragraphs: [
        "أقمشة الفضة النانوية تقضي على البكتيريا المسببة للرائحة في الملابس الرياضية.",
        "منسوجات المستشفيات المعالجة بالفضة تقلل خطر العدوى المكتسبة في المستشفيات.",
      ]},
      { id: "resistance", heading: "مقاومة المضادات الحيوية وميزة الفضة", paragraphs: [
        "تصنف منظمة الصحة العالمية مقاومة المضادات الحيوية كأحد أكبر التهديدات للصحة العالمية.",
        "ميزة الفضة الحاسمة: آليتها الثلاثية تجعل تطوير المقاومة أصعب بكثير.",
        "لكن هناك تحذيرات من أن الاستخدام المكثف المطول قد يولّد سلالات مقاومة للفضة.",
      ]},
      { id: "environment", heading: "البعد البيئي والسلامة", paragraphs: [
        "التأثير البيئي للفضة النانوية موضوع بحث نشط.",
        "الفضة آمنة في الاستخدام الطبيعي. الاستهلاك المفرط يسبب 'أرجيريا' — حالة تجميلية وليست خطراً صحياً.",
        "فرض الاتحاد الأوروبي وسم المنتجات المحتوية على الفضة النانوية.",
      ]},
    ],
    faq: { heading: "الأسئلة الشائعة", items: [
      { q: "هل تقتل الفضة جميع البكتيريا؟", a: "أيونات الفضة فعالة ضد الغالبية العظمى من البكتيريا وبعض الفيروسات والفطريات، لكنها لا تضمن تعقيماً ١٠٠٪." },
      { q: "هل ارتداء المجوهرات الفضية يوفر حماية ضد الميكروبات؟", a: "جزئياً. فضة ٩٢٥ قد تطلق مستويات منخفضة جداً من Ag⁺ لكنها غير كافية للتأثير الطبي." },
      { q: "ما هي الأرجيريا؟", a: "تلون دائم للجلد بالرمادي-الأزرق بسبب استهلاك فضة مفرط. لا تحدث من الاستخدام العادي للمجوهرات." },
    ]},
    sources: { heading: "المصادر", items: ["Lansdown — Silver in Healthcare", "Nature Nanotechnology — AgNP 2023", "WHO — تقرير مقاومة مضادات الميكروبات"] },
    related: { heading: "مواضيع ذات صلة", items: [
      { title: "كيمياء الفضة", path: "/ar/science/chemistry", cat: "العلوم" },
      { title: "الاستخدامات الصناعية", path: "/ar/science/industrial", cat: "العلوم" },
    ]},
    sponsor: { text: "عايشوا قوة الفضة الحامية الطبيعية في مجوهرات عيار ٩٢٥.", cta: "شاهد على إنستغرام", note: "هذا المحتوى مدعوم من إسطنبول غوموش." },
    mechanismData: [
      { step: "١", title: "تدمير غشاء الخلية", desc: "ترتبط أيونات Ag⁺ بمجموعات السلفهيدريل في غشاء الخلية البكتيرية، مما يعطل النفاذية.", icon: "🛡️", color: "#FF6B6B" },
      { step: "٢", title: "تلف الحمض النووي", desc: "تدخل Ag⁺ الخلية وترتبط بمجموعات الفوسفور في DNA، مما يمنع التكاثر.", icon: "🧬", color: "#6EC6FF" },
      { step: "٣", title: "تثبيط الإنزيمات", desc: "تحجب Ag⁺ إنزيمات سلسلة التنفس، مما يوقف إنتاج الطاقة. تموت الخلية.", icon: "⚡", color: "#FFD700" },
    ],
    mechanismTitle: "آلية الفعل الثلاثية لأيون الفضة (Ag⁺)",
    mechanismNote: "هذا النهج متعدد الأهداف هو ميزة الفضة الرئيسية ضد مقاومة المضادات الحيوية",
    darkMode: "الوضع", toc: "المحتويات",
  },
};

function MechanismWidget({ data, title, note, dark }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const border = dark ? "rgba(192,192,192,0.12)" : "rgba(0,0,0,0.08)";
  return (
    <div style={{ margin: "20px 0" }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: textP, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 11, color: textS, marginBottom: 16 }}>{note}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {data.map((m, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "18px 20px", borderRadius: 14, border: `1px solid ${border}`, background: dark ? "rgba(192,192,192,0.02)" : "rgba(192,192,192,0.04)", borderLeft: `4px solid ${m.color}` }}>
            <div style={{ fontSize: 32, flexShrink: 0 }}>{m.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: m.color, background: `${m.color}15`, padding: "2px 8px", borderRadius: 6 }}>{m.step}</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: textP }}>{m.title}</span>
              </div>
              <div style={{ fontSize: 13, color: textS, lineHeight: 1.6 }}>{m.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AntimicrobialArticle() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);
  const t = T[lang];
  const isRTL = lang === "ar";
  const bgP=dark?"#0f0f14":"#FAFAF5"; const bgCard=dark?"#1a1a24":"#fff"; const textP=dark?"#e8e8ec":"#2C2C2C"; const textS=dark?"#9a9aaa":"#6B7280"; const accent=dark?"#C0C0C0":"#708090"; const gold="#D4AF37"; const border=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)"; const fontD="'Playfair Display',Georgia,serif"; const fontB=lang==="ar"?"'Noto Naskh Arabic',serif":"'Source Sans 3',sans-serif";

  return (
    <div dir={isRTL?"rtl":"ltr"} style={{fontFamily:fontB,background:bgP,color:textP,minHeight:"100vh"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*{margin:0;padding:0;box-sizing:border-box}::selection{background:rgba(192,192,192,0.3)}`}</style>
      <nav style={{position:"sticky",top:0,zIndex:100,background:dark?"rgba(15,15,20,0.88)":"rgba(250,250,245,0.88)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${border}`,padding:"0 24px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:16}}>{t.nav}</span></div>
        <div style={{display:"flex",alignItems:"center",gap:12}}><div style={{display:"flex",gap:2,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)",borderRadius:7,padding:2}}>{["tr","en","ar"].map(l=><button key={l} onClick={()=>setLang(l)} style={{border:"none",cursor:"pointer",padding:"3px 9px",borderRadius:5,fontSize:11,fontWeight:lang===l?600:400,fontFamily:l==="ar"?"'Noto Naskh Arabic',serif":fontB,background:lang===l?(dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.08)"):"transparent",color:lang===l?textP:textS}}>{l==="ar"?"عر":l.toUpperCase()}</button>)}</div><button onClick={()=>setDark(!dark)} style={{border:"none",cursor:"pointer",background:"transparent",color:textS,fontSize:16,padding:4}}>{dark?"☀️":"🌙"}</button></div>
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
          <div style={{textAlign:"center"}}><div style={{fontSize:52,marginBottom:4}}>🦠🛡️</div><div style={{fontFamily:fontD,fontSize:28,fontWeight:700,background:`linear-gradient(135deg,${accent},${gold})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Ag⁺</div><div style={{fontSize:12,color:textS,letterSpacing:"0.12em",marginTop:4}}>ANTIMICROBIAL SILVER</div></div>
        </div>

        {t.sections.map(sec=>(
          <section key={sec.id} style={{marginBottom:36}}>
            {sec.heading&&<h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:16,paddingTop:8}}>{sec.heading}</h2>}
            {sec.paragraphs.map((p,pi)=><p key={pi} style={{fontSize:15,lineHeight:1.8,color:textS,marginBottom:14}}>{p}</p>)}
            {sec.widget==="mechanism"&&<MechanismWidget data={t.mechanismData} title={t.mechanismTitle} note={t.mechanismNote} dark={dark}/>}
          </section>
        ))}

        <section style={{marginBottom:36,marginTop:48}}><h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:20}}>{t.faq.heading}</h2><div style={{display:"flex",flexDirection:"column",gap:8}}>{t.faq.items.map((item,i)=>(<div key={i} style={{border:`1px solid ${openFaq===i?gold+"44":border}`,borderRadius:12,overflow:"hidden",background:openFaq===i?(dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.04)"):"transparent"}}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{width:"100%",border:"none",cursor:"pointer",background:"transparent",padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",color:textP,fontSize:14,fontWeight:500,fontFamily:fontB,textAlign:isRTL?"right":"left",gap:12}}><span style={{flex:1}}>{item.q}</span><span style={{fontSize:18,color:textS,transform:openFaq===i?"rotate(45deg)":"rotate(0)",flexShrink:0}}>+</span></button>{openFaq===i&&<div style={{padding:"0 20px 16px",fontSize:14,lineHeight:1.7,color:textS}}>{item.a}</div>}</div>))}</div></section>

        <section style={{marginBottom:36,padding:"20px 24px",background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)",borderRadius:12,border:`1px solid ${border}`}}><h3 style={{fontSize:15,fontWeight:600,marginBottom:12}}>{t.sources.heading}</h3>{t.sources.items.map((s,i)=><div key={i} style={{fontSize:13,color:textS,lineHeight:1.6,marginBottom:6,display:"flex",gap:8}}><span style={{color:accent,fontWeight:600,flexShrink:0}}>[{i+1}]</span><span>{s}</span></div>)}</section>

        <section style={{marginBottom:40}}><h3 style={{fontSize:18,fontFamily:fontD,fontWeight:600,marginBottom:16}}>{t.related.heading}</h3><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:12}}>{t.related.items.map((item,i)=><a key={i} href={item.path} style={{textDecoration:"none",padding:"16px 18px",border:`1px solid ${border}`,borderRadius:12,background:bgCard,display:"block"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=gold+"44"}} onMouseLeave={e=>{e.currentTarget.style.borderColor=border}}><div style={{fontSize:10,color:gold,fontWeight:600,marginBottom:6,letterSpacing:"0.04em"}}>{item.cat}</div><div style={{fontSize:14,fontWeight:500,color:textP}}>{item.title}</div><div style={{fontSize:12,color:textS,marginTop:6}}>{isRTL?"←":"→"}</div></a>)}</div></section>

        <div style={{border:`1px solid ${gold}22`,borderRadius:16,padding:"28px 24px",background:dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.05)",textAlign:"center"}}><p style={{fontSize:15,color:textP,marginBottom:16,lineHeight:1.6}}>{t.sponsor.text}</p><a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"10px 24px",borderRadius:10,background:`linear-gradient(135deg,${accent},${gold})`,color:"#0f0f14",fontSize:13,fontWeight:600,textDecoration:"none"}}>📸 {t.sponsor.cta}</a><p style={{fontSize:11,color:textS,marginTop:14,opacity:0.7}}>{t.sponsor.note}</p></div>
      </article>
      <footer style={{borderTop:`1px solid ${border}`,padding:"24px",textAlign:"center",background:dark?"#0c0c10":"#f5f5f0"}}><div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:8}}><div style={{width:22,height:22,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:14}}>{t.nav}</span></div><p style={{fontSize:11,color:textS}}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p></footer>
    </div>
  );
}
