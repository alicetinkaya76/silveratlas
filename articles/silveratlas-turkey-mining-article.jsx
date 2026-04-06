import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Maden", "Türkiye'de Gümüş Madenciliği"],
    category: "Maden",
    title: "Türkiye'de Gümüş Madenciliği",
    subtitle: "Gümüşhane'den Bolkardağ'a — Anadolu'nun kadim gümüş madencilik mirası ve günümüz potansiyeli",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "10 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Anadolu, insanlık tarihinin en eski gümüş madencilik bölgelerinden biridir. MÖ 3000'lere uzanan gümüş çıkarma faaliyetleri, bölgeyi medeniyetlerin doğuşunda kilit bir role taşımıştır. Gümüşhane ili adını bile bu kadim gümüş mirasından almaktadır.",
          "Günümüzde Türkiye'nin gümüş üretimi küresel ölçekte mütevazı (~250 ton/yıl) olsa da, keşfedilmemiş potansiyel ve artan arama faaliyetleri ülkenin gümüş madenciliğinde yeni bir döneme girdiğine işaret etmektedir.",
        ],
      },
      {
        id: "tarih", heading: "Tarihsel Perspektif",
        paragraphs: [
          "Anadolu'da gümüş madenciliği MÖ 3000'lerde Gümüşhane ve Bolkardağ (Niğde) bölgelerinde başlamıştır. Hititler, Urartular, Lidyalılar ve Romalılar bu madenleri yoğun şekilde işletmiştir.",
          "Lidya Kralı Kroisos'un (Karun) MÖ 6. yüzyılda bastığı dünyanın ilk saf gümüş sikkeleri, Anadolu gümüşünden üretilmiştir. Sardis darphanesi, bu sikkelerin basıldığı yerdi.",
          "Osmanlı döneminde Gümüşhane, Ergani (Diyarbakır) ve Keban (Elazığ) madenleri imparatorluğun gümüş ihtiyacının önemli bir bölümünü karşılamıştır. 16. yüzyılda Gümüşhane'de kurulan darphane, bölge gümüşünü doğrudan sikkeye dönüştürmüştür.",
        ],
      },
      {
        id: "bolgeler", heading: "Başlıca Maden Bölgeleri",
        paragraphs: ["Türkiye'nin aktif ve potansiyel gümüş maden bölgeleri:"],
        widget: "regions",
      },
      {
        id: "gumushane", heading: "Gümüşhane: Adını Gümüşten Alan Şehir",
        paragraphs: [
          "Gümüşhane, Türkçede 'gümüş evi' anlamına gelir — şehir adını bölgedeki tarihî gümüş madenlerinden almıştır. Osmanlı arşiv kayıtlarında 'maden-i gümüş' (gümüş madeni) olarak geçer.",
          "Başlıca maden sahaları: Maden Köy (Canca), Zigana bölgesi ve Kelkit vadisi çevresi. Bu madenlerden çıkarılan gümüş, bakır ve kurşun ile birlikte polimetalik cevher yataklarında bulunur.",
          "Günümüzde Gümüşhane'de çeşitli maden arama şirketleri aktif olarak çalışmaktadır. Mastra altın-gümüş projesi, bölgenin en büyük modern maden geliştirme girişimlerinden biridir.",
        ],
      },
      {
        id: "bolkardag", heading: "Bolkardağ: Niğde'nin Gizli Hazinesi",
        paragraphs: [
          "Niğde ili sınırlarındaki Bolkardağ maden bölgesi, Türkiye'nin en eski bilinen gümüş-kurşun yataklarından birini barındırır. MÖ 3000'lere kadar uzanan madencilik izleri tespit edilmiştir.",
          "Bolkardağ cevherleri galena (kurşun sülfür, PbS) formunda olup, gümüş bu cevherin doğal bir bileşeni olarak elde edilir. Tarihsel olarak 'kupelasyon' yöntemiyle gümüş ayrıştırılmıştır.",
          "Modern arama çalışmaları, bölgede henüz değerlendirilmemiş önemli gümüş-kurşun-çinko rezervlerinin varlığına işaret etmektedir.",
        ],
      },
      {
        id: "artova", heading: "Artova (Tokat) ve Kuzey Anadolu Zonu",
        paragraphs: [
          "Tokat'ın Artova ilçesi, Kuzey Anadolu Fay Hattı boyunca oluşmuş polimetalik cevher yataklarına ev sahipliği yapmaktadır. Gümüş, bakır-kurşun-çinko mineralizasyonunun bir bileşeni olarak bulunur.",
          "Artova dışında Kuzey Anadolu boyunca Kastamonu, Sinop ve Trabzon illerinde de gümüş içeren cevher yatakları bilinmektedir.",
        ],
      },
      {
        id: "bati", heading: "Batı Anadolu: Lidya Mirası",
        paragraphs: [
          "Manisa (antik Sardis bölgesi), Kütahya ve Uşak çevresindeki maden sahaları, Lidya döneminden beri bilinen gümüş-altın yataklarıdır. Paktolus (Sart) Çayı, antik çağda doğal elektrum (altın-gümüş alaşımı) kaynağıydı.",
          "Batı Anadolu'da modern arama faaliyetleri, özellikle epitermal altın-gümüş yatakları üzerine yoğunlaşmaktadır. Bu tip yataklar, volkanik aktivite ile ilişkili sıcak su sistemlerinden oluşmuştur.",
        ],
      },
      {
        id: "uretim", heading: "Günümüz Üretim Verileri",
        paragraphs: [
          "Türkiye'nin yıllık gümüş üretimi yaklaşık 250 ton civarındadır — küresel üretimin %1'ine karşılık gelir. Bu üretimin büyük bölümü birincil gümüş madenciliğinden değil, bakır ve kurşun-çinko madenciliğinin yan ürünü olarak elde edilmektedir.",
          "Başlıca üretici şirketler: Eti Bakır (Artvin), Demir Export (Madenköy), Park Elektrik (Siirt) ve çeşitli küçük ölçekli operatörler. Gümüş üretimi genellikle bakır konsantresi içinde ihraç edilir ve yurt dışında rafinasyon yapılır.",
          "MTA (Maden Tetkik ve Arama Genel Müdürlüğü), Türkiye genelinde gümüş potansiyelini haritalama çalışmalarını sürdürmektedir. Son yıllardaki arama ruhsat başvurularında artış, sektörün potansiyele olan ilgisini yansıtmaktadır.",
        ],
      },
      {
        id: "potansiyel", heading: "Gelecek Potansiyeli",
        paragraphs: [
          "Türkiye'nin jeolojik yapısı, gümüş madenciliği için önemli bir potansiyel sunmaktadır. Alp-Himalaya orojenik kuşağında yer alan Anadolu, volkanik ve metamorfik süreçlerle oluşmuş zengin maden yataklarına sahiptir.",
          "Özellikle Doğu Karadeniz (Artvin, Rize, Trabzon), Orta Anadolu (Niğde, Kayseri) ve Güneydoğu Anadolu (Siirt, Şırnak) bölgeleri, henüz yeterince araştırılmamış gümüş potansiyeline sahiptir.",
          "Küresel gümüş fiyatlarının yapısal artış trendinde olması, Türkiye'deki marjinal yatakların ekonomik olarak işletilebilir hale gelmesini sağlayabilir.",
        ],
      },
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Gümüşhane adını nereden alır?", a: "Farsça 'gümüş' ve 'hane' (ev) kelimelerinden — 'gümüş evi'. Bölgedeki tarihî gümüş madenlerinden dolayı bu adı almıştır." },
        { q: "Türkiye dünyada kaçıncı gümüş üreticisi?", a: "Yıllık ~250 ton ile ilk 20'de yer alır ancak küresel üretimin yalnızca ~%1'ini karşılar." },
        { q: "Türkiye'de gümüş nasıl çıkarılır?", a: "Büyük bölümü bakır ve kurşun-çinko madenciliğinin yan ürünü olarak elde edilir. Birincil gümüş madenciliği çok sınırlıdır." },
        { q: "Türkiye'nin gümüş potansiyeli nedir?", a: "Jeolojik yapı önemli potansiyel sunmakta, özellikle Doğu Karadeniz ve Orta Anadolu bölgeleri henüz yeterince araştırılmamıştır." },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "MTA Genel Müdürlüğü — Türkiye Maden Envanteri",
        "MAPEG — Maden ve Petrol İşleri Genel Müdürlüğü İstatistikleri",
        "U.S. Geological Survey — Turkey Mineral Resources",
        "Yılmaz Çiftçi — \"Gümüşhane Yöresi Maden Yatakları\"",
        "İstanbul Maden İhracatçıları Birliği — Sektör Raporu",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "Küresel Gümüş Madenleri", path: "/tr/maden/kuresel", cat: "Maden" },
        { title: "Osmanlı Gümüşçülüğü", path: "/tr/tarih/osmanli", cat: "Tarih" },
        { title: "Dünya Gümüş Haritası", path: "/tr/harita", cat: "Harita" },
      ],
    },
    sponsor: {
      text: "Anadolu topraklarından dünya vitrinine — Türk gümüşçülüğünü keşfedin.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    regionData: [
      { name: "Gümüşhane", type: "Tarihsel + Aktif", minerals: "Ag, Cu, Pb, Zn", note: "Adını gümüşten alan şehir. Mastra projesi aktif.", icon: "⛏️" },
      { name: "Bolkardağ (Niğde)", type: "Tarihsel + Potansiyel", minerals: "Ag, Pb, Zn", note: "MÖ 3000'den beri bilinen yataklar.", icon: "🏔️" },
      { name: "Artova (Tokat)", type: "Aktif", minerals: "Cu, Ag, Pb, Zn", note: "Kuzey Anadolu Fay Hattı boyunca polimetalik.", icon: "⚒️" },
      { name: "Artvin / Çoruh", type: "Aktif", minerals: "Cu, Ag, Au", note: "Eti Bakır tesisleri. Bakır yan ürünü gümüş.", icon: "🌊" },
      { name: "Siirt / Madenköy", type: "Aktif", minerals: "Cu, Ag, Au", note: "Demir Export operasyonu.", icon: "🔥" },
      { name: "Manisa (Sardis)", type: "Tarihsel", minerals: "Au, Ag", note: "Lidya Krallığı gümüş-altın mirası.", icon: "🏛️" },
      { name: "Kastamonu", type: "Tarihsel + Potansiyel", minerals: "Cu, Ag, Pb", note: "Candaroğlu dönemi madenleri.", icon: "🏔️" },
      { name: "Kütahya / Simav", type: "Potansiyel", minerals: "Ag, Au", note: "Epitermal altın-gümüş arama.", icon: "🔍" },
    ],
    regionTitle: "Türkiye Gümüş Maden Bölgeleri",
    darkMode: "Mod", toc: "İçindekiler",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Mining", "Silver Mining in Turkey"],
    category: "Mining",
    title: "Silver Mining in Turkey",
    subtitle: "From Gümüşhane to Bolkardağ — Anatolia's ancient silver mining heritage and modern potential",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "10 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["Anatolia is one of humanity's oldest silver mining regions, with extraction activities dating to 3000 BCE. Gümüşhane province literally means 'silver house' in Turkish.", "Though Turkey's current output is modest globally (~250 tonnes/year), undiscovered potential and increasing exploration signal a new era."] },
      { id: "history", heading: "Historical Perspective", paragraphs: ["Silver mining in Anatolia began around 3000 BCE in Gümüşhane and Bolkardağ (Niğde). Hittites, Urartians, Lydians, and Romans extensively exploited these deposits.", "King Croesus of Lydia minted the world's first pure silver coins in the 6th century BCE from Anatolian silver.", "During the Ottoman period, Gümüşhane, Ergani, and Keban mines supplied a significant portion of the empire's silver needs."] },
      { id: "regions", heading: "Major Mining Regions", paragraphs: ["Turkey's active and potential silver mining regions:"], widget: "regions" },
      { id: "gumushane", heading: "Gümüşhane: The City Named After Silver", paragraphs: ["Gümüşhane means 'silver house' in Turkish. Main sites: Maden Köy (Canca), Zigana area, and Kelkit valley.", "Silver occurs in polymetallic ore deposits alongside copper and lead.", "The Mastra gold-silver project is one of the region's largest modern mine development initiatives."] },
      { id: "bolkardag", heading: "Bolkardağ: Niğde's Hidden Treasure", paragraphs: ["The Bolkardağ mining district hosts one of Turkey's oldest known silver-lead deposits, with mining traces dating to 3000 BCE.", "Ores occur as galena (PbS) with silver as a natural component. Historically, silver was separated by the 'cupellation' method.", "Modern exploration indicates significant untapped silver-lead-zinc reserves."] },
      { id: "artova", heading: "Artova (Tokat) and North Anatolian Zone", paragraphs: ["Artova hosts polymetallic ore deposits formed along the North Anatolian Fault. Silver occurs as a component of copper-lead-zinc mineralization.", "Other known silver-bearing deposits exist along the North Anatolian zone in Kastamonu, Sinop, and Trabzon."] },
      { id: "west", heading: "Western Anatolia: Lydian Legacy", paragraphs: ["Mining areas around Manisa (ancient Sardis), Kütahya, and Uşak are silver-gold deposits known since the Lydian era.", "Modern exploration focuses on epithermal gold-silver deposits formed by volcanic hot water systems."] },
      { id: "production", heading: "Current Production Data", paragraphs: ["Turkey's annual silver production is approximately 250 tonnes — about 1% of global output, mostly as a byproduct of copper and lead-zinc mining.", "Major producers: Eti Bakır (Artvin), Demir Export (Madenköy), Park Elektrik (Siirt). Silver is typically exported within copper concentrate.", "MTA continues mapping Turkey's silver potential nationwide. Rising exploration license applications reflect growing sector interest."] },
      { id: "potential", heading: "Future Potential", paragraphs: ["Turkey's geological setting, within the Alpine-Himalayan orogenic belt, presents significant silver mining potential.", "The Eastern Black Sea (Artvin, Rize, Trabzon), Central Anatolia (Niğde, Kayseri), and Southeastern Anatolia (Siirt, Şırnak) regions have underexplored potential.", "Structural uptrend in global silver prices could make Turkey's marginal deposits economically viable."] },
    ],
    faq: { heading: "FAQ", items: [
      { q: "Where does the name Gümüşhane come from?", a: "From Persian/Turkish 'gümüş' (silver) + 'hane' (house) — 'silver house,' named for its historic silver mines." },
      { q: "What is Turkey's ranking in global silver production?", a: "Within the top 20 at ~250 tonnes/year, but accounting for only ~1% of global output." },
      { q: "How is silver extracted in Turkey?", a: "Mostly as a byproduct of copper and lead-zinc mining. Primary silver mining is very limited." },
    ]},
    sources: { heading: "Sources", items: ["MTA — Turkey Mine Inventory", "MAPEG — Mining Statistics", "USGS — Turkey Mineral Resources", "Istanbul Mineral Exporters Association"] },
    related: { heading: "Related Topics", items: [{ title: "Global Silver Mines", path: "/en/mining/global", cat: "Mining" }, { title: "Ottoman Silverwork", path: "/en/history/ottoman", cat: "History" }] },
    sponsor: { text: "From Anatolian soil to world showcases — discover Turkish silverwork.", cta: "View on Instagram", note: "This content is supported by İstanbul Gümüş." },
    regionData: [
      { name: "Gümüşhane", type: "Historical + Active", minerals: "Ag, Cu, Pb, Zn", note: "City named after silver. Mastra project active.", icon: "⛏️" },
      { name: "Bolkardağ (Niğde)", type: "Historical + Potential", minerals: "Ag, Pb, Zn", note: "Known deposits since 3000 BCE.", icon: "🏔️" },
      { name: "Artova (Tokat)", type: "Active", minerals: "Cu, Ag, Pb, Zn", note: "Polymetallic along N. Anatolian Fault.", icon: "⚒️" },
      { name: "Artvin / Çoruh", type: "Active", minerals: "Cu, Ag, Au", note: "Eti Bakır facilities. Silver as Cu byproduct.", icon: "🌊" },
      { name: "Siirt / Madenköy", type: "Active", minerals: "Cu, Ag, Au", note: "Demir Export operation.", icon: "🔥" },
      { name: "Manisa (Sardis)", type: "Historical", minerals: "Au, Ag", note: "Lydian Kingdom gold-silver legacy.", icon: "🏛️" },
      { name: "Kastamonu", type: "Historical + Potential", minerals: "Cu, Ag, Pb", note: "Candarid era mines.", icon: "🏔️" },
      { name: "Kütahya / Simav", type: "Potential", minerals: "Ag, Au", note: "Epithermal Au-Ag exploration.", icon: "🔍" },
    ],
    regionTitle: "Turkey Silver Mining Regions",
    darkMode: "Mode", toc: "Contents",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة المعرفة بالفضة",
    breadcrumb: ["الرئيسية", "التعدين", "تعدين الفضة في تركيا"],
    category: "التعدين",
    title: "تعدين الفضة في تركيا",
    subtitle: "من غوموشخانه إلى بولقارداغ — إرث الأناضول القديم في تعدين الفضة والإمكانات الحديثة",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٠ دقائق قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["الأناضول من أقدم مناطق تعدين الفضة في التاريخ. ولاية غوموشخانه تعني حرفياً 'بيت الفضة'.", "رغم أن إنتاج تركيا الحالي متواضع عالمياً (~٢٥٠ طن/سنة)، الإمكانات غير المكتشفة تشير إلى عصر جديد."] },
      { id: "history", heading: "المنظور التاريخي", paragraphs: ["بدأ تعدين الفضة في الأناضول حوالي ٣٠٠٠ ق.م. الحثيون والليديون والرومان استغلوا هذه الرواسب.", "الملك كرويسوس سك أول عملات فضية نقية من فضة الأناضول في القرن السادس ق.م.", "في العهد العثماني، وفرت مناجم غوموشخانه وإرغاني جزءاً كبيراً من احتياجات الإمبراطورية."] },
      { id: "regions", heading: "مناطق التعدين الرئيسية", paragraphs: ["مناطق تعدين الفضة النشطة والمحتملة في تركيا:"], widget: "regions" },
      { id: "gumushane", heading: "غوموشخانه: المدينة المسماة بالفضة", paragraphs: ["غوموشخانه تعني 'بيت الفضة'. المواقع الرئيسية: معدن كوي، منطقة زيغانا، وادي كلكيت.", "مشروع ماسترا للذهب-الفضة من أكبر مبادرات التطوير المنجمي الحديثة."] },
      { id: "bolkardag", heading: "بولقارداغ: كنز نيغده المخفي", paragraphs: ["منطقة بولقارداغ تحتضن أقدم رواسب الفضة-الرصاص المعروفة في تركيا.", "الخامات تتواجد كجالينا (PbS) والفضة مكون طبيعي. تاريخياً فُصلت بطريقة 'الكوبلة'."] },
      { id: "artova", heading: "أرتوفا (توقات) ومنطقة شمال الأناضول", paragraphs: ["أرتوفا تحتضن رواسب خامات متعددة المعادن على طول فالق شمال الأناضول."] },
      { id: "west", heading: "غرب الأناضول: إرث ليديا", paragraphs: ["مناطق التعدين حول مانيسا (ساردس القديمة) وكوتاهيا رواسب فضة-ذهب معروفة منذ العصر الليدي."] },
      { id: "production", heading: "بيانات الإنتاج الحالية", paragraphs: ["إنتاج تركيا السنوي ~٢٥٠ طن — ~١٪ من الإنتاج العالمي، معظمه كمنتج ثانوي لتعدين النحاس.", "يواصل MTA رسم خرائط إمكانات الفضة في تركيا."] },
      { id: "potential", heading: "الإمكانات المستقبلية", paragraphs: ["الموقع الجيولوجي لتركيا ضمن حزام الألب-الهيمالايا يقدم إمكانات مهمة.", "مناطق البحر الأسود الشرقي ووسط الأناضول وجنوب شرق الأناضول لم تُستكشف بما يكفي."] },
    ],
    faq: { heading: "الأسئلة الشائعة", items: [
      { q: "من أين جاء اسم غوموشخانه؟", a: "من 'غوموش' (فضة) + 'خانه' (بيت) — 'بيت الفضة'، نسبة لمناجم الفضة التاريخية." },
      { q: "ما ترتيب تركيا في إنتاج الفضة؟", a: "ضمن أفضل ٢٠ بـ~٢٥٠ طن/سنة، لكنها تمثل ~١٪ فقط من الإنتاج العالمي." },
    ]},
    sources: { heading: "المصادر", items: ["MTA — جرد المناجم التركية", "MAPEG — إحصاءات التعدين", "USGS — الموارد المعدنية لتركيا"] },
    related: { heading: "مواضيع ذات صلة", items: [{ title: "مناجم الفضة العالمية", path: "/ar/mining/global", cat: "التعدين" }] },
    sponsor: { text: "من تراب الأناضول إلى واجهات العالم — اكتشفوا صياغة الفضة التركية.", cta: "شاهد على إنستغرام", note: "هذا المحتوى مدعوم من إسطنبول غوموش." },
    regionData: [
      { name: "غوموشخانه", type: "تاريخي + نشط", minerals: "Ag, Cu, Pb, Zn", note: "المدينة المسماة بالفضة. مشروع ماسترا نشط.", icon: "⛏️" },
      { name: "بولقارداغ (نيغده)", type: "تاريخي + محتمل", minerals: "Ag, Pb, Zn", note: "رواسب معروفة منذ ٣٠٠٠ ق.م.", icon: "🏔️" },
      { name: "أرتوفا (توقات)", type: "نشط", minerals: "Cu, Ag, Pb, Zn", note: "على طول فالق شمال الأناضول.", icon: "⚒️" },
      { name: "أرتفين / تشوروه", type: "نشط", minerals: "Cu, Ag, Au", note: "منشآت إتي باكر.", icon: "🌊" },
      { name: "سيرت / معدنكوي", type: "نشط", minerals: "Cu, Ag, Au", note: "عمليات دمير إكسبورت.", icon: "🔥" },
      { name: "مانيسا (ساردس)", type: "تاريخي", minerals: "Au, Ag", note: "إرث مملكة ليديا.", icon: "🏛️" },
      { name: "قسطموني", type: "تاريخي + محتمل", minerals: "Cu, Ag, Pb", note: "مناجم عصر الجاندارلية.", icon: "🏔️" },
      { name: "كوتاهيا / سيماف", type: "محتمل", minerals: "Ag, Au", note: "استكشاف ذهب-فضة حراري.", icon: "🔍" },
    ],
    regionTitle: "مناطق تعدين الفضة في تركيا",
    darkMode: "الوضع", toc: "المحتويات",
  },
};

function RegionGrid({ data, title, dark }) {
  const textP=dark?"#e8e8ec":"#2C2C2C"; const textS=dark?"#9a9aaa":"#6B7280"; const gold="#D4AF37"; const border=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)";
  const typeColor=(t)=>{if(t.includes("Aktif")||t.includes("Active")||t.includes("نشط"))return"#4ade80";if(t.includes("Potansiyel")||t.includes("Potential")||t.includes("محتمل"))return"#6EC6FF";return gold;};
  return (
    <div style={{margin:"20px 0"}}>
      <div style={{fontSize:14,fontWeight:600,color:textP,marginBottom:16}}>{title}</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:10}}>
        {data.map((r,i)=>(
          <div key={i} style={{padding:"16px",borderRadius:12,border:`1px solid ${border}`,background:dark?"rgba(192,192,192,0.02)":"rgba(192,192,192,0.04)"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <span style={{fontSize:20}}>{r.icon}</span>
              <span style={{fontSize:14,fontWeight:600,color:textP}}>{r.name}</span>
            </div>
            <div style={{fontSize:10,fontWeight:600,color:typeColor(r.type),marginBottom:6,background:`${typeColor(r.type)}15`,display:"inline-block",padding:"2px 8px",borderRadius:4}}>{r.type}</div>
            <div style={{fontSize:11,color:textS,marginBottom:4,fontFamily:"'JetBrains Mono',monospace"}}>{r.minerals}</div>
            <div style={{fontSize:11,color:textS,lineHeight:1.4}}>{r.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TurkeyMiningArticle() {
  const [lang,setLang]=useState("tr"); const [dark,setDark]=useState(true); const [openFaq,setOpenFaq]=useState(null);
  const t=T[lang]; const isRTL=lang==="ar";
  const bgP=dark?"#0f0f14":"#FAFAF5"; const bgCard=dark?"#1a1a24":"#fff"; const textP=dark?"#e8e8ec":"#2C2C2C"; const textS=dark?"#9a9aaa":"#6B7280"; const accent=dark?"#C0C0C0":"#708090"; const gold="#D4AF37"; const border=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)"; const fontD="'Playfair Display',Georgia,serif"; const fontB=lang==="ar"?"'Noto Naskh Arabic',serif":"'Source Sans 3',sans-serif";

  return (
    <div dir={isRTL?"rtl":"ltr"} style={{fontFamily:fontB,background:bgP,color:textP,minHeight:"100vh"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*{margin:0;padding:0;box-sizing:border-box}::selection{background:rgba(192,192,192,0.3)}`}</style>
      <nav style={{position:"sticky",top:0,zIndex:100,background:dark?"rgba(15,15,20,0.88)":"rgba(250,250,245,0.88)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${border}`,padding:"0 24px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"}}><div style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:16}}>{t.nav}</span></div><div style={{display:"flex",alignItems:"center",gap:12}}><div style={{display:"flex",gap:2,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)",borderRadius:7,padding:2}}>{["tr","en","ar"].map(l=><button key={l} onClick={()=>setLang(l)} style={{border:"none",cursor:"pointer",padding:"3px 9px",borderRadius:5,fontSize:11,fontWeight:lang===l?600:400,fontFamily:l==="ar"?"'Noto Naskh Arabic',serif":fontB,background:lang===l?(dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.08)"):"transparent",color:lang===l?textP:textS}}>{l==="ar"?"عر":l.toUpperCase()}</button>)}</div><button onClick={()=>setDark(!dark)} style={{border:"none",cursor:"pointer",background:"transparent",color:textS,fontSize:16,padding:4}}>{dark?"☀️":"🌙"}</button></div></nav>
      <div style={{maxWidth:760,margin:"0 auto",padding:"16px 24px 0",display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",fontSize:12,color:textS}}>{t.breadcrumb.map((item,i)=><span key={i} style={{display:"flex",alignItems:"center",gap:6}}>{i>0&&<span style={{opacity:0.4}}>{isRTL?"‹":"›"}</span>}<a href="#" style={{color:i===t.breadcrumb.length-1?textP:textS,textDecoration:"none",fontWeight:i===t.breadcrumb.length-1?500:400}}>{item}</a></span>)}</div>
      <article style={{maxWidth:760,margin:"0 auto",padding:"32px 24px 64px",animation:"fadeUp 0.6s ease both"}}>
        <div style={{marginBottom:36}}><div style={{display:"inline-block",padding:"3px 12px",borderRadius:6,fontSize:11,fontWeight:600,letterSpacing:"0.04em",color:gold,border:`1px solid ${gold}33`,marginBottom:16}}>{t.category}</div><h1 style={{fontFamily:fontD,fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.15,marginBottom:12}}>{t.title}</h1><p style={{fontSize:16,color:textS,lineHeight:1.6,marginBottom:20}}>{t.subtitle}</p><div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",fontSize:13,color:textS,paddingBottom:20,borderBottom:`1px solid ${border}`}}><span>{t.meta.author}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.date}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.readTime}</span></div></div>
        <div style={{height:220,borderRadius:16,marginBottom:36,overflow:"hidden",background:dark?"linear-gradient(135deg,#1a1a2e,#2a2a3e,#1a1a2e)":"linear-gradient(135deg,#e8e8e8,#d0d0d0,#e8e8e8)",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{textAlign:"center"}}><div style={{fontSize:48,marginBottom:4}}>🇹🇷⛏️</div><div style={{fontFamily:fontD,fontSize:24,fontWeight:700,background:`linear-gradient(135deg,${accent},${gold})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>GÜMÜŞHANE</div><div style={{fontSize:12,color:textS,letterSpacing:"0.12em",marginTop:4}}>SILVER HOUSE · SINCE 3000 BCE</div></div></div>

        {t.sections.map(sec=>(<section key={sec.id} style={{marginBottom:36}}>{sec.heading&&<h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:16,paddingTop:8}}>{sec.heading}</h2>}{sec.paragraphs.map((p,pi)=><p key={pi} style={{fontSize:15,lineHeight:1.8,color:textS,marginBottom:14}}>{p}</p>)}{sec.widget==="regions"&&<RegionGrid data={t.regionData} title={t.regionTitle} dark={dark}/>}</section>))}

        <section style={{marginBottom:36,marginTop:48}}><h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:20}}>{t.faq.heading}</h2><div style={{display:"flex",flexDirection:"column",gap:8}}>{t.faq.items.map((item,i)=>(<div key={i} style={{border:`1px solid ${openFaq===i?gold+"44":border}`,borderRadius:12,overflow:"hidden",background:openFaq===i?(dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.04)"):"transparent"}}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{width:"100%",border:"none",cursor:"pointer",background:"transparent",padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",color:textP,fontSize:14,fontWeight:500,fontFamily:fontB,textAlign:isRTL?"right":"left",gap:12}}><span style={{flex:1}}>{item.q}</span><span style={{fontSize:18,color:textS,transform:openFaq===i?"rotate(45deg)":"rotate(0)",flexShrink:0}}>+</span></button>{openFaq===i&&<div style={{padding:"0 20px 16px",fontSize:14,lineHeight:1.7,color:textS}}>{item.a}</div>}</div>))}</div></section>

        <section style={{marginBottom:36,padding:"20px 24px",background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)",borderRadius:12,border:`1px solid ${border}`}}><h3 style={{fontSize:15,fontWeight:600,marginBottom:12}}>{t.sources.heading}</h3>{t.sources.items.map((s,i)=><div key={i} style={{fontSize:13,color:textS,lineHeight:1.6,marginBottom:6,display:"flex",gap:8}}><span style={{color:accent,fontWeight:600,flexShrink:0}}>[{i+1}]</span><span>{s}</span></div>)}</section>
        <section style={{marginBottom:40}}><h3 style={{fontSize:18,fontFamily:fontD,fontWeight:600,marginBottom:16}}>{t.related.heading}</h3><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:12}}>{t.related.items.map((item,i)=><a key={i} href={item.path} style={{textDecoration:"none",padding:"16px 18px",border:`1px solid ${border}`,borderRadius:12,background:bgCard,display:"block"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=gold+"44"}} onMouseLeave={e=>{e.currentTarget.style.borderColor=border}}><div style={{fontSize:10,color:gold,fontWeight:600,marginBottom:6,letterSpacing:"0.04em"}}>{item.cat}</div><div style={{fontSize:14,fontWeight:500,color:textP}}>{item.title}</div><div style={{fontSize:12,color:textS,marginTop:6}}>{isRTL?"←":"→"}</div></a>)}</div></section>
        <div style={{border:`1px solid ${gold}22`,borderRadius:16,padding:"28px 24px",background:dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.05)",textAlign:"center"}}><p style={{fontSize:15,color:textP,marginBottom:16,lineHeight:1.6}}>{t.sponsor.text}</p><a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"10px 24px",borderRadius:10,background:`linear-gradient(135deg,${accent},${gold})`,color:"#0f0f14",fontSize:13,fontWeight:600,textDecoration:"none"}}>📸 {t.sponsor.cta}</a><p style={{fontSize:11,color:textS,marginTop:14,opacity:0.7}}>{t.sponsor.note}</p></div>
      </article>
      <footer style={{borderTop:`1px solid ${border}`,padding:"24px",textAlign:"center",background:dark?"#0c0c10":"#f5f5f0"}}><div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:8}}><div style={{width:22,height:22,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:14}}>{t.nav}</span></div><p style={{fontSize:11,color:textS}}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p></footer>
    </div>
  );
}
