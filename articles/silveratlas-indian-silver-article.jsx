import { useState, useEffect } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Tarih", "Hint Alt Kıtası Gümüşü"],
    category: "Tarih", title: "Hint Alt Kıtası Gümüşü",
    subtitle: "Meenakari'den kabile gümüşüne: 5.000 yıllık Güney Asya gümüş geleneği",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "12 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Hint alt kıtası, gümüş işçiliğinde dünyanın en zengin ve çeşitli geleneklerinden birine ev sahipliği yapar. Mohenjo-daro ve Harappa kalıntılarında bulunan gümüş takılar, bu coğrafyada metal zanaatının MÖ 3000'lere dayandığını göstermektedir.",
          "Bugün Hindistan, dünya gümüş tüketiminin en büyük payına sahip ülkedir. Yıllık 200 milyon ons'u aşan tüketimiyle, gümüş Hint kültüründe altından bile daha derin bir yere sahiptir — çünkü gümüş, toplumun tüm katmanlarına erişebilen demokratik bir metaldir."
        ]
      },
      {
        id: "tarihce",
        heading: "Tarihî Süreç: İndus'tan Raj'a",
        paragraphs: [
          "İndus Vadisi Uygarlığı'nda gümüş, mühür ve takı yapımında kullanılmıştır. Vedik dönemde (MÖ 1500-500) gümüş, 'rajata' adıyla kutsal metaller arasında sayılmış; Ay tanrısı Chandra ile ilişkilendirilmiştir.",
          "Maurya İmparatorluğu (MÖ 322-185) döneminde gümüş sikke basımı sistematik hale gelmiştir. Kautilya'nın Arthashastra adlı eserinde gümüş madenciliği ve alaşım teknikleri detaylı biçimde anlatılmaktadır.",
          "Mughal dönemi (1526-1857), Hint gümüş sanatının altın çağıdır. İmparator Akbar'ın atölyelerinde geliştirilen meenakari (mine işi), kundan (taş kakma) ve bidri (çinko-gümüş kakma) teknikleri, bugün hâlâ yaşayan zanaat gelenekleridir.",
          "İngiliz sömürge döneminde (1858-1947) Hint gümüş zanaatı, Avrupa pazarına yönelik üretimle dönüşüm geçirmiştir. Anglo-Indian gümüş eşyalar, Viktorya dönemi koleksiyoncuları arasında son derece rağbet görmüştür."
        ]
      },
      {
        id: "bolgeler",
        heading: "Bölgesel Gümüş Gelenekleri",
        paragraphs: [
          "Hint alt kıtasının her bölgesi, kendine özgü gümüş işçiliği geleneklerine sahiptir. İklim, din, etnik yapı ve ticaret yolları bu çeşitliliği şekillendirmiştir:"
        ],
        widget: "regions"
      },
      {
        id: "teknikler",
        heading: "Hint Gümüş Teknikleri",
        paragraphs: [
          "Meenakari (mine işi), gümüş yüzeye renkli cam macunu uygulanarak yapılır. Jaipur, bu tekniğin dünya başkentidir. Kırmızı, yeşil, mavi ve beyaz renklerin uyumu, Rajasthani estetiğinin imzasıdır.",
          "Kundan, değerli taşların altın folyo yardımıyla gümüş veya altın montüre yerleştirilmesidir. Bu teknik, gelin takılarının vazgeçilmez unsurudur ve Bikaner ile Jaipur'da en yüksek ustalıkla uygulanır.",
          "Bidri, Bidar şehrinden adını alan benzersiz bir tekniktir: çinko-bakır alaşımı yüzeye gümüş tel veya levha kakılır, ardından toprak-amonyum klorür karışımıyla yüzey karartılır. Sonuç, siyah zemin üzerinde parlayan gümüş desenlerdir.",
          "Filigree (tarkashi), ince gümüş tellerin lehimlenerek dantel benzeri desenler oluşturmasıdır. Cuttack (Odisha) bu tekniğin Hint merkezi olup, Türk telkârisine benzer ancak kendine özgü motiflerle ayrışır."
        ]
      },
      {
        id: "kabile",
        heading: "Kabile Gümüşü: Demokratik Metal",
        paragraphs: [
          "Hint alt kıtasının kabile toplulukları (Adivasi), gümüşü altından bile önemli görmüştür. Gümüş, kötü ruhları kovduğuna inanılan koruyucu bir metal olarak algılanmış; doğum, evlilik ve ölüm ritüellerinde merkezi rol oynamıştır.",
          "Rajasthan'ın Rabari toplulukları, ağır gümüş bilezikler ve ayak halkaları takar — bazen vücut ağırlığının %10'unu aşan gümüş takı. Bu takılar, taşınabilir servet, sosyal statü göstergesi ve korunma tılsımı işlevi görür.",
          "Gujarat'ın Kutchi kadınları, evlilik sırasında aldıkları gümüş takıları ömür boyu taşır ve bu koleksiyon, kadının ekonomik güvencesini temsil eder. Kuraklık veya kriz dönemlerinde gümüş takılar paraya çevrilebilir — bir tür 'giyilebilir banka hesabı'."
        ]
      },
      {
        id: "dugun",
        heading: "Hint Düğününde Gümüş",
        paragraphs: [
          "Hint düğünleri, dünyanın en gümüş-yoğun törenleridir. Gelin takılarının yanı sıra, davetiye tabakları, tören kapları, hediye kutuları ve hatta yemek sunumunda gümüş eşyalar kullanılır.",
          "Güney Hindistan'da (Tamil Nadu, Kerala) gümüş ayak halkaları (metti/payal), evli kadının sembolüdür — tıpkı Batı'daki alyans gibi. Bu halkaların çıkardığı hafif ses, kadının varlığını ilan eder ve evde bereket getirdiğine inanılır.",
          "Diwali ve Dhanteras festivalleri, Hindistan'ın yıllık gümüş tüketiminin en yoğun olduğu dönemlerdir. Dhanteras'ta gümüş veya altın almak, yeni yıla bereketle girmenin anahtarı kabul edilir."
        ]
      },
      {
        id: "modern",
        heading: "Modern Hint Gümüş Endüstrisi",
        paragraphs: [
          "Hindistan, yıllık 200 milyon ons'u aşan tüketimiyle dünyanın en büyük gümüş pazarıdır. Jaipur, Mumbai, Delhi, Cuttack ve Kumbakonam başlıca üretim merkezleridir.",
          "Modern Hint takı tasarımcıları, geleneksel teknikleri çağdaş minimalist formlarla birleştirerek uluslararası pazarda güçlü bir konum edinmiştir. 'Heritage modern' adı verilen bu akım, antik motifleri günlük kullanıma uygun hafif parçalara dönüştürmektedir.",
          "Hindistan'ın gümüş ithalatı, ülkenin cari işlemler dengesi üzerinde önemli bir etkiye sahiptir. Hükümet, zaman zaman ithalat vergileriyle talebi kontrol altına almaya çalışsa da, kültürel bağ nedeniyle gümüş tüketimi yapısal olarak güçlü kalmaya devam etmektedir."
        ]
      }
    ],
    regionCards: {
      title: "Bölgesel Gümüş Gelenekleri",
      items: [
        { icon: "🏰", name: "Rajasthan", specialty: "Meenakari, Kundan, Thewa", desc: "Jaipur ve Jodhpur, renkli mine ve taş kakma tekniklerinin merkezi. Kabile gümüşü de ayrı bir gelenek." },
        { icon: "🌊", name: "Odisha", specialty: "Tarkashi (Filigree)", desc: "Cuttack'ın ince tel işi geleneği. Tapınak takıları ve gelin setleri. UNESCO Somut Olmayan Miras adayı." },
        { icon: "🕌", name: "Karnataka (Bidar)", specialty: "Bidri İşi", desc: "Çinko-gümüş kakma tekniği. Siyah zemin üzerinde gümüş motifler. GI tescilli." },
        { icon: "🌴", name: "Kerala", specialty: "Temple Jewelry", desc: "Tapınak takıları. Altın ve gümüş kombinasyonu. Kathakali ve Bharatanatyam dansçılarının sahne takıları." },
        { icon: "⛰️", name: "Himachal Pradesh", specialty: "Pahari Gümüş", desc: "Dağ kabilelerinin ağır gümüş kolyeleri ve başlıkları. Yak kemiği ve mercan kombinasyonları." },
        { icon: "🐫", name: "Gujarat (Kutch)", specialty: "Kabile Gümüşü", desc: "Ahir, Rabari ve Jat topluluklarının ağır gümüş takıları. Geometrik ve hayvan motifleri." },
        { icon: "🎭", name: "Tamil Nadu", specialty: "Metti (Ayak Halkası)", desc: "Evlilik sembolü gümüş ayak halkaları. Kumbakonam'ın geleneksel tapınak gümüş işçiliği." },
        { icon: "🏔️", name: "Nepal / Tibet", specialty: "Gau ve Dzi", desc: "Gau (taşınabilir sunak) ve dzi boncuklarıyla süslü gümüş takılar. Budist sembolizmi." }
      ]
    },
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Hint gümüş takıları hangi ayardadır?", a: "Hindistan'da yaygın ayarlar 925, 900 ve 800'dür. Kabile gümüşü genellikle 800 ayar civarında olup, daha yüksek bakır içeriği dayanıklılık sağlar. Modern markalar 925 sterling standardını kullanır." },
        { q: "Bidri işi gümüş nasıl temizlenir?", a: "Bidri eşyalarda siyah yüzey kasıtlıdır — asla parlatılmamalıdır. Sadece gümüş kakma kısımlar yumuşak bezle silinebilir. Asitli temizleyicilerden kaçınılmalıdır." },
        { q: "Meenakari takılar günlük kullanıma uygun mudur?", a: "Meenakari mine cam bazlıdır ve sert darbelere karşı hassastır. Özel günlerde kullanım ve dikkatli saklama önerilir." },
        { q: "Hint kabile gümüşü koleksiyona değer midir?", a: "Kesinlikle. Otantik kabile gümüşü, etnografik değeri nedeniyle koleksiyoncular arasında yüksek prim taşır. Ancak sahte yaşlandırılmış parçalar da yaygındır — güvenilir kaynaklardan alım önemlidir." },
        { q: "Neden Hindistan bu kadar çok gümüş tüketir?", a: "Kültürel, dinî ve ekonomik faktörler iç içedir: düğün gelenekleri, festival alımları, kırsal kesimde tasarruf aracı olarak kullanım ve endüstriyel talep birlikte yüksek tüketim yaratır." }
      ]
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "National Institute of Design, Ahmedabad — Indian Craft Documentation",
        "Victoria & Albert Museum — \"Arts of the Indian Subcontinent\"",
        "Ministry of Textiles, Govt. of India — GI Registry",
        "Oppi Untracht — \"Traditional Jewelry of India\""
      ]
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "Japon Gümüş Geleneği", path: "/tr/tarih/japon", cat: "Tarih" },
        { title: "Dünya Kültürleri", path: "/tr/kultur/dunya", cat: "Kültür" },
        { title: "Gümüş Düğün Gelenekleri", path: "/tr/kultur/dugun", cat: "Kültür" }
      ]
    },
    sponsor: {
      text: "Doğu estetiğinden ilham alan 925 ayar gümüş koleksiyonumuzu keşfedin.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir."
    },
    darkMode: "Mod", toc: "İçindekiler"
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "History", "Indian Subcontinent Silver"],
    category: "History", title: "Indian Subcontinent Silver",
    subtitle: "From Meenakari to tribal silver: 5,000 years of South Asian silver tradition",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "12 min read" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "The Indian subcontinent is home to one of the world's richest and most diverse silver traditions. Silver jewelry found in Mohenjo-daro and Harappa ruins demonstrates that metal craft in this region dates back to 3000 BCE.",
          "Today, India is the world's largest silver consumer. With annual consumption exceeding 200 million ounces, silver holds an even deeper place in Indian culture than gold — because silver is a democratic metal accessible to all layers of society."
        ]
      },
      {
        id: "history", heading: "Historical Journey: From Indus to Raj",
        paragraphs: [
          "In the Indus Valley Civilization, silver was used for seals and jewelry. During the Vedic period (1500-500 BCE), silver was called 'rajata' and counted among sacred metals, associated with the moon god Chandra.",
          "Coin minting became systematic during the Maurya Empire (322-185 BCE). Kautilya's Arthashastra details silver mining and alloy techniques.",
          "The Mughal period (1526-1857) is the golden age of Indian silver art. Meenakari (enamel work), kundan (stone setting), and bidri (zinc-silver inlay) developed in Emperor Akbar's workshops remain living craft traditions.",
          "During British colonial rule (1858-1947), Indian silver craft transformed with production aimed at European markets. Anglo-Indian silverware was highly sought by Victorian collectors."
        ]
      },
      {
        id: "regions", heading: "Regional Silver Traditions",
        paragraphs: [
          "Each region of the Indian subcontinent has its own distinct silver traditions, shaped by climate, religion, ethnicity, and trade routes:"
        ],
        widget: "regions"
      },
      {
        id: "techniques", heading: "Indian Silver Techniques",
        paragraphs: [
          "Meenakari involves applying colored glass paste to silver surfaces. Jaipur is this technique's world capital, with red, green, blue, and white creating the Rajasthani aesthetic signature.",
          "Kundan is the setting of precious stones using gold foil into silver or gold mounts. Essential for bridal jewelry, practiced at highest mastery in Bikaner and Jaipur.",
          "Bidri takes its name from Bidar city: silver wire or sheet is inlaid into zinc-copper alloy, then the surface is blackened with earth and ammonium chloride. The result: silver patterns gleaming on black ground.",
          "Filigree (tarkashi) creates lace-like patterns from thin soldered silver wires. Cuttack (Odisha) is India's center, similar to Turkish telkari yet distinct in its motifs."
        ]
      },
      {
        id: "tribal", heading: "Tribal Silver: The Democratic Metal",
        paragraphs: [
          "The subcontinent's tribal communities (Adivasi) consider silver even more important than gold. Silver was perceived as a protective metal believed to ward off evil spirits, playing a central role in birth, marriage, and death rituals.",
          "Rajasthan's Rabari communities wear heavy silver bracelets and anklets — sometimes silver exceeding 10% of body weight. These serve as portable wealth, status symbols, and protective talismans.",
          "Kutchi women of Gujarat wear wedding silver throughout their lives, and this collection represents their economic security — a kind of 'wearable bank account' that can be converted to cash during drought or crisis."
        ]
      },
      {
        id: "wedding", heading: "Silver in Indian Weddings",
        paragraphs: [
          "Indian weddings are the world's most silver-intensive ceremonies. Beyond bridal jewelry, silver is used for invitation trays, ceremonial vessels, gift boxes, and even food presentation.",
          "In South India (Tamil Nadu, Kerala), silver toe rings (metti/payal) symbolize married status — like Western wedding bands. Their gentle sound announces the woman's presence and is believed to bring prosperity.",
          "Diwali and Dhanteras festivals mark India's peak annual silver consumption. Buying silver on Dhanteras is considered key to entering the new year with prosperity."
        ]
      },
      {
        id: "modern", heading: "Modern Indian Silver Industry",
        paragraphs: [
          "India is the world's largest silver market with annual consumption exceeding 200 million ounces. Jaipur, Mumbai, Delhi, Cuttack, and Kumbakonam are major production centers.",
          "Modern Indian designers combine traditional techniques with contemporary minimalist forms, earning strong international positioning. The 'heritage modern' movement transforms ancient motifs into lightweight everyday pieces.",
          "India's silver imports significantly impact its current account balance. Though the government occasionally uses import duties to control demand, consumption remains structurally strong due to deep cultural ties."
        ]
      }
    ],
    regionCards: {
      title: "Regional Silver Traditions",
      items: [
        { icon: "🏰", name: "Rajasthan", specialty: "Meenakari, Kundan, Thewa", desc: "Jaipur and Jodhpur are centers of colorful enamel and stone-setting. Tribal silver is a parallel tradition." },
        { icon: "🌊", name: "Odisha", specialty: "Tarkashi (Filigree)", desc: "Cuttack's fine wire tradition. Temple jewelry and bridal sets. UNESCO Intangible Heritage nominee." },
        { icon: "🕌", name: "Karnataka (Bidar)", specialty: "Bidri Work", desc: "Zinc-silver inlay technique. Silver motifs on black ground. GI registered." },
        { icon: "🌴", name: "Kerala", specialty: "Temple Jewelry", desc: "Temple jewelry combining gold and silver. Stage jewelry for Kathakali and Bharatanatyam dancers." },
        { icon: "⛰️", name: "Himachal Pradesh", specialty: "Pahari Silver", desc: "Heavy silver necklaces and headdresses of mountain tribes. Yak bone and coral combinations." },
        { icon: "🐫", name: "Gujarat (Kutch)", specialty: "Tribal Silver", desc: "Heavy silver jewelry of Ahir, Rabari, and Jat communities. Geometric and animal motifs." },
        { icon: "🎭", name: "Tamil Nadu", specialty: "Metti (Toe Rings)", desc: "Marriage-symbol silver toe rings. Kumbakonam's traditional temple silverwork." },
        { icon: "🏔️", name: "Nepal / Tibet", specialty: "Gau & Dzi", desc: "Silver jewelry with gau (portable shrine) and dzi beads. Buddhist symbolism." }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "What purity are Indian silver jewelry?", a: "Common grades in India are 925, 900, and 800. Tribal silver is typically around 800, with higher copper content for durability. Modern brands use the 925 sterling standard." },
        { q: "How is bidri silverware cleaned?", a: "The black surface on bidri is intentional — never polish it. Only the silver inlay portions may be wiped with a soft cloth. Avoid acidic cleaners." },
        { q: "Are meenakari pieces suitable for daily wear?", a: "Meenakari enamel is glass-based and sensitive to hard impacts. Special occasion wear and careful storage are recommended." },
        { q: "Is Indian tribal silver worth collecting?", a: "Absolutely. Authentic tribal silver carries high premiums among collectors for its ethnographic value. However, artificially aged fakes are common — buy from trusted sources." },
        { q: "Why does India consume so much silver?", a: "Cultural, religious, and economic factors intertwine: wedding traditions, festival purchases, rural savings use, and industrial demand together create high consumption." }
      ]
    },
    sources: {
      heading: "Sources",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "National Institute of Design, Ahmedabad — Indian Craft Documentation",
        "Victoria & Albert Museum — \"Arts of the Indian Subcontinent\"",
        "Ministry of Textiles, Govt. of India — GI Registry",
        "Oppi Untracht — \"Traditional Jewelry of India\""
      ]
    },
    related: {
      heading: "Related Topics",
      items: [
        { title: "Japanese Silver", path: "/en/history/japanese", cat: "History" },
        { title: "World Cultures", path: "/en/culture/world", cat: "Culture" },
        { title: "Wedding Traditions", path: "/en/culture/wedding", cat: "Culture" }
      ]
    },
    sponsor: {
      text: "Explore our Eastern-inspired 925 sterling silver collection.",
      cta: "See on Instagram",
      note: "This content is sponsored by İstanbul Gümüş."
    },
    darkMode: "Mode", toc: "Contents"
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة معرفة الفضة",
    breadcrumb: ["الرئيسية", "التاريخ", "فضة شبه القارة الهندية"],
    category: "التاريخ", title: "فضة شبه القارة الهندية",
    subtitle: "من الميناكاري إلى فضة القبائل: ٥٠٠٠ عام من تقاليد الفضة في جنوب آسيا",
    meta: { author: "توران إرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٢ دقائق قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "تحتضن شبه القارة الهندية واحدة من أغنى وأكثر تقاليد صياغة الفضة تنوعًا في العالم. تُظهر المجوهرات الفضية المكتشفة في موهينجو دارو وهارابا أن حرفة المعادن تعود إلى ٣٠٠٠ قبل الميلاد.",
        "اليوم، الهند هي أكبر مستهلك للفضة في العالم. باستهلاك سنوي يتجاوز ٢٠٠ مليون أونصة، تحتل الفضة مكانة أعمق من الذهب في الثقافة الهندية — لأنها معدن ديمقراطي متاح لجميع طبقات المجتمع."
      ]},
      { id: "history", heading: "الرحلة التاريخية: من الإندوس إلى الراج", paragraphs: [
        "في حضارة وادي السند، استُخدمت الفضة في الأختام والمجوهرات. خلال الفترة الفيدية سُميت 'راجاتا' وعُدّت من المعادن المقدسة.",
        "أصبح سك العملات منهجيًا في عهد إمبراطورية مورايا. يفصّل كتاب أرثاشاسترا تقنيات تعدين وسبك الفضة.",
        "فترة المغول (١٥٢٦-١٨٥٧) هي العصر الذهبي لفن الفضة الهندي. الميناكاري والكوندان والبيدري تقنيات طُورت في ورش الإمبراطور أكبر.",
        "خلال الاستعمار البريطاني تحولت الحرفة نحو الأسواق الأوروبية. حظيت الفضيات الأنجلو-هندية بإعجاب كبير."
      ]},
      { id: "regions", heading: "التقاليد الإقليمية للفضة", paragraphs: [
        "لكل منطقة في شبه القارة تقاليدها الخاصة في صياغة الفضة:"
      ], widget: "regions" },
      { id: "techniques", heading: "تقنيات الفضة الهندية", paragraphs: [
        "الميناكاري: تطبيق معجون زجاجي ملون على سطح الفضة. جايبور عاصمة هذه التقنية عالميًا.",
        "الكوندان: ترصيع الأحجار الكريمة باستخدام رقائق الذهب. أساسي في مجوهرات العروس.",
        "البيدري: تطعيم سلك أو صفيحة فضة في سبيكة زنك-نحاس ثم تسويد السطح.",
        "الفيليغري (تاركاشي): إنشاء أنماط شبيهة بالدانتيل من أسلاك فضة رفيعة ملحومة. كاتاك في أوديشا هي المركز الهندي."
      ]},
      { id: "tribal", heading: "فضة القبائل: المعدن الديمقراطي", paragraphs: [
        "مجتمعات القبائل الهندية تعتبر الفضة أهم من الذهب. كانت الفضة معدنًا واقيًا يُعتقد أنه يطرد الأرواح الشريرة.",
        "مجتمعات الرباري في راجستان ترتدي أساور فضية ثقيلة — أحيانًا تتجاوز ١٠٪ من وزن الجسم.",
        "نساء كوتش في غوجارات يرتدين فضة الزفاف طوال حياتهن كضمان اقتصادي — نوع من 'الحساب المصرفي القابل للارتداء'."
      ]},
      { id: "wedding", heading: "الفضة في الأعراس الهندية", paragraphs: [
        "الأعراس الهندية هي أكثر المراسم كثافة في استخدام الفضة عالميًا.",
        "في جنوب الهند، خواتم الأصابع الفضية (ميتي) ترمز للحالة الزوجية.",
        "مهرجانا ديوالي ودانتيراس يمثلان ذروة استهلاك الفضة السنوي في الهند."
      ]},
      { id: "modern", heading: "صناعة الفضة الهندية الحديثة", paragraphs: [
        "الهند أكبر سوق للفضة في العالم باستهلاك سنوي يتجاوز ٢٠٠ مليون أونصة.",
        "المصممون الهنود المعاصرون يدمجون التقنيات التقليدية مع الأشكال المعاصرة. تيار 'التراث الحديث' يحول الزخارف القديمة إلى قطع خفيفة يومية.",
        "واردات الفضة الهندية تؤثر بشكل كبير على ميزان المعاملات الجارية."
      ]}
    ],
    regionCards: {
      title: "التقاليد الإقليمية للفضة",
      items: [
        { icon: "🏰", name: "راجستان", specialty: "ميناكاري، كوندان، ثيوا", desc: "جايبور وجودبور مراكز المينا الملونة وترصيع الأحجار." },
        { icon: "🌊", name: "أوديشا", specialty: "تاركاشي (فيليغري)", desc: "تقليد الأسلاك الدقيقة في كاتاك. مجوهرات المعابد وأطقم العرائس." },
        { icon: "🕌", name: "كارناتاكا (بيدار)", specialty: "عمل البيدري", desc: "تقنية تطعيم الزنك-الفضة. زخارف فضية على أرضية سوداء." },
        { icon: "🌴", name: "كيرالا", specialty: "مجوهرات المعابد", desc: "مزيج الذهب والفضة. مجوهرات مسرح كاثاكالي وبهاراتاناتيام." },
        { icon: "⛰️", name: "هيماتشال برديش", specialty: "فضة باهاري", desc: "قلائد وأغطية رأس فضية ثقيلة لقبائل الجبال." },
        { icon: "🐫", name: "غوجارات (كوتش)", specialty: "فضة القبائل", desc: "مجوهرات فضية ثقيلة لمجتمعات أهير ورباري وجات." },
        { icon: "🎭", name: "تاميل نادو", specialty: "ميتي (خواتم القدم)", desc: "خواتم فضية للقدم كرمز للزواج." },
        { icon: "🏔️", name: "نيبال / التبت", specialty: "غاو ودزي", desc: "مجوهرات فضية مع غاو (مذبح محمول) وخرز دزي." }
      ]
    },
    faq: {
      heading: "الأسئلة الشائعة",
      items: [
        { q: "ما عيار المجوهرات الفضية الهندية؟", a: "العيارات الشائعة في الهند هي ٩٢٥ و٩٠٠ و٨٠٠. فضة القبائل عادةً حوالي ٨٠٠." },
        { q: "كيف تُنظف أدوات البيدري الفضية؟", a: "السطح الأسود في البيدري مقصود — لا تصقله أبدًا. امسح فقط أجزاء الفضة المطعّمة." },
        { q: "هل فضة القبائل الهندية تستحق الجمع؟", a: "بالتأكيد. الفضة القبلية الأصيلة تحمل علاوة عالية بين الجامعين لقيمتها الإثنوغرافية." },
        { q: "لماذا تستهلك الهند كل هذه الكمية من الفضة؟", a: "تتشابك العوامل الثقافية والدينية والاقتصادية: تقاليد الأعراس والمهرجانات والادخار الريفي والطلب الصناعي." }
      ]
    },
    sources: { heading: "المصادر", items: [
      "معهد الفضة — مسح الفضة العالمي ٢٠٢٥",
      "المعهد الوطني للتصميم، أحمد آباد",
      "متحف فيكتوريا وألبرت — فنون شبه القارة الهندية",
      "وزارة النسيج، حكومة الهند — سجل المؤشرات الجغرافية",
      "أوبي أونتراخت — المجوهرات التقليدية للهند"
    ]},
    related: { heading: "مواضيع ذات صلة", items: [
      { title: "الفضة اليابانية", path: "/ar/history/japanese", cat: "التاريخ" },
      { title: "ثقافات العالم", path: "/ar/culture/world", cat: "الثقافة" },
      { title: "تقاليد الأعراس", path: "/ar/culture/wedding", cat: "الثقافة" }
    ]},
    sponsor: { text: "اكتشف مجموعتنا من الفضة ٩٢٥ المستوحاة من الشرق.", cta: "شاهد على إنستغرام", note: "برعاية إسطنبول غوموش." },
    darkMode: "الوضع", toc: "المحتويات"
  }
};

const fontD="'Playfair Display',serif",fontB="'Source Sans 3',sans-serif",fontAr="'Noto Naskh Arabic',serif",gold="#D4AF37",accent="#C0C0C0";

function RegionCards({t,dark,isRTL}){
  const[sel,setSel]=useState(null);
  const cards=t.regionCards.items;
  const bdr=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)";
  const tp=dark?"#e8e8e8":"#1a1a2e";
  const ts=dark?"#a0a0a0":"#555";
  return(
    <div style={{margin:"24px 0"}}>
      <h3 style={{fontFamily:fontD,fontSize:18,fontWeight:600,marginBottom:16,color:tp}}>{t.regionCards.title}</h3>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:10}}>
        {cards.map((c,i)=>(
          <div key={i} onClick={()=>setSel(sel===i?null:i)} style={{
            cursor:"pointer",padding:"16px 14px",borderRadius:12,
            border:`1px solid ${sel===i?gold+"66":bdr}`,
            background:sel===i?(dark?"rgba(212,175,55,0.06)":"rgba(212,175,55,0.08)"):(dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.02)"),
            transition:"all 0.3s",
          }}>
            <div style={{fontSize:28,marginBottom:8}}>{c.icon}</div>
            <div style={{fontWeight:600,fontSize:14,color:tp,marginBottom:2}}>{c.name}</div>
            <div style={{fontSize:10,color:gold,fontWeight:600,marginBottom:6}}>{c.specialty}</div>
            {sel===i&&<div style={{fontSize:12,color:ts,lineHeight:1.6,marginTop:8,paddingTop:8,borderTop:`1px solid ${bdr}`}}>{c.desc}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SilverAtlasIndianArticle(){
  const[lang,setLang]=useState("tr");
  const[dark,setDark]=useState(true);
  const[openFaq,setOpenFaq]=useState(null);
  const t=T[lang],isRTL=lang==="ar";
  const tp=dark?"#e8e8e8":"#1a1a2e",ts=dark?"#a0a0a0":"#555";
  const bgM=dark?"#0f0f14":"#fafaf5",bgC=dark?"#16161c":"#ffffff";
  const bdr=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)";
  useEffect(()=>{const l=document.createElement("link");l.href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;600&family=Noto+Naskh+Arabic:wght@400;600&display=swap";l.rel="stylesheet";document.head.appendChild(l);},[]);

  return(
    <div dir={isRTL?"rtl":"ltr"} style={{fontFamily:isRTL?fontAr:fontB,background:bgM,color:tp,minHeight:"100vh",lineHeight:1.6}}>
      <nav style={{position:"sticky",top:0,zIndex:50,padding:"10px 20px",background:dark?"rgba(15,15,20,0.92)":"rgba(250,250,245,0.92)",backdropFilter:"blur(12px)",borderBottom:`1px solid ${bdr}`,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div>
          <div><div style={{fontFamily:fontD,fontWeight:600,fontSize:14,lineHeight:1}}>{t.nav}</div><div style={{fontSize:9,color:ts}}>{t.navSub}</div></div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:6}}>
          {["tr","en","ar"].map(l=>(<button key={l} onClick={()=>setLang(l)} style={{padding:"4px 10px",borderRadius:6,border:`1px solid ${lang===l?gold:bdr}`,background:lang===l?gold+"15":"transparent",cursor:"pointer",color:lang===l?gold:ts,fontSize:11,fontWeight:600}}>{l.toUpperCase()}</button>))}
          <button onClick={()=>setDark(!dark)} style={{marginLeft:8,padding:"4px 10px",borderRadius:6,border:`1px solid ${bdr}`,background:"transparent",cursor:"pointer",color:ts,fontSize:11}}>{dark?"☀️":"🌙"} {t.darkMode}</button>
        </div>
      </nav>
      <article style={{maxWidth:720,margin:"0 auto",padding:"32px 20px"}}>
        <div style={{fontSize:12,color:ts,marginBottom:24,display:"flex",gap:6,flexWrap:"wrap"}}>{t.breadcrumb.map((b,i)=>(<span key={i}>{i>0&&<span style={{margin:"0 4px",opacity:0.4}}>/</span>}<span style={{color:i===t.breadcrumb.length-1?gold:ts}}>{b}</span></span>))}</div>
        <div style={{marginBottom:36}}>
          <div style={{display:"inline-block",padding:"3px 12px",borderRadius:6,fontSize:11,fontWeight:600,letterSpacing:"0.04em",color:gold,border:`1px solid ${gold}33`,marginBottom:16}}>{t.category}</div>
          <h1 style={{fontFamily:isRTL?fontAr:fontD,fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.15,marginBottom:12}}>{t.title}</h1>
          <p style={{fontSize:16,color:ts,lineHeight:1.6,marginBottom:20}}>{t.subtitle}</p>
          <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",fontSize:13,color:ts,paddingBottom:20,borderBottom:`1px solid ${bdr}`}}>
            <span>{t.meta.author}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.date}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.readTime}</span>
          </div>
        </div>
        <div style={{height:220,borderRadius:16,marginBottom:36,overflow:"hidden",background:dark?"linear-gradient(135deg,#2e1a0a 0%,#3a2a1a 50%,#2e1a0a 100%)":"linear-gradient(135deg,#f5e6d0 0%,#e6d2b8 50%,#f5e6d0 100%)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
          <div style={{textAlign:"center",zIndex:1}}><div style={{fontSize:52}}>🪷</div><div style={{fontFamily:fontD,fontSize:16,fontWeight:600,marginTop:8,background:`linear-gradient(135deg,${accent},${gold})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>भारत · INDIAN SILVER</div></div>
        </div>
        <div style={{marginBottom:36,padding:"20px 24px",borderRadius:12,border:`1px solid ${bdr}`,background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)"}}>
          <h3 style={{fontSize:14,fontWeight:600,marginBottom:12,color:gold}}>{t.toc}</h3>
          {t.sections.filter(s=>s.heading).map(s=>(<a key={s.id} href={`#${s.id}`} style={{display:"block",fontSize:13,color:ts,textDecoration:"none",padding:"4px 0"}}>{s.heading}</a>))}
        </div>
        {t.sections.map(sec=>(
          <section key={sec.id} id={sec.id} style={{marginBottom:36}}>
            {sec.heading&&<h2 style={{fontFamily:isRTL?fontAr:fontD,fontSize:24,fontWeight:600,marginBottom:16,paddingTop:8}}>{sec.heading}</h2>}
            {sec.paragraphs.map((p,pi)=>(<p key={pi} style={{fontSize:15,lineHeight:1.8,color:ts,marginBottom:14}}>{p}</p>))}
            {sec.widget==="regions"&&<RegionCards t={t} dark={dark} isRTL={isRTL}/>}
          </section>
        ))}
        <section style={{marginBottom:36,marginTop:48}}>
          <h2 style={{fontFamily:isRTL?fontAr:fontD,fontSize:24,fontWeight:600,marginBottom:20}}>{t.faq.heading}</h2>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {t.faq.items.map((item,i)=>(
              <div key={i} style={{border:`1px solid ${openFaq===i?gold+"44":bdr}`,borderRadius:12,overflow:"hidden",background:openFaq===i?(dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.04)"):"transparent"}}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{width:"100%",border:"none",cursor:"pointer",background:"transparent",padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",color:tp,fontSize:14,fontWeight:500,fontFamily:isRTL?fontAr:fontB,textAlign:isRTL?"right":"left",gap:12}}>
                  <span style={{flex:1}}>{item.q}</span><span style={{fontSize:18,color:ts,transition:"transform 0.3s",transform:openFaq===i?"rotate(45deg)":"rotate(0)",flexShrink:0}}>+</span>
                </button>
                {openFaq===i&&<div style={{padding:"0 20px 16px",fontSize:14,lineHeight:1.7,color:ts}}>{item.a}</div>}
              </div>
            ))}
          </div>
        </section>
        <section style={{marginBottom:36,padding:"20px 24px",background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)",borderRadius:12,border:`1px solid ${bdr}`}}>
          <h3 style={{fontSize:15,fontWeight:600,marginBottom:12}}>{t.sources.heading}</h3>
          {t.sources.items.map((s,i)=>(<div key={i} style={{fontSize:13,color:ts,lineHeight:1.6,marginBottom:6,display:"flex",gap:8}}><span style={{color:accent,fontWeight:600,flexShrink:0}}>[{i+1}]</span><span>{s}</span></div>))}
        </section>
        <section style={{marginBottom:40}}>
          <h3 style={{fontSize:18,fontFamily:isRTL?fontAr:fontD,fontWeight:600,marginBottom:16}}>{t.related.heading}</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:12}}>
            {t.related.items.map((item,i)=>(<a key={i} href={item.path} style={{textDecoration:"none",padding:"16px 18px",border:`1px solid ${bdr}`,borderRadius:12,background:bgC,display:"block"}}><div style={{fontSize:10,color:gold,fontWeight:600,marginBottom:6}}>{item.cat}</div><div style={{fontSize:14,fontWeight:500,color:tp}}>{item.title}</div><div style={{fontSize:12,color:ts,marginTop:6}}>{isRTL?"←":"→"}</div></a>))}
          </div>
        </section>
        <div style={{border:`1px solid ${gold}22`,borderRadius:16,padding:"28px 24px",background:dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.05)",textAlign:"center"}}>
          <p style={{fontSize:15,color:tp,marginBottom:16}}>{t.sponsor.text}</p>
          <div style={{display:"flex",gap:8,justifyContent:"center",marginBottom:16}}>{[1,2,3].map(i=>(<div key={i} style={{width:80,height:80,borderRadius:10,background:dark?`linear-gradient(${120*i}deg,#1e1e2e,#2a2a3e)`:`linear-gradient(${120*i}deg,#e0ddd4,#d5d0c4)`,display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ts} strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill={ts}/></svg></div>))}</div>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"10px 24px",borderRadius:10,background:`linear-gradient(135deg,${accent},${gold})`,color:"#0f0f14",fontSize:13,fontWeight:600,textDecoration:"none"}}>📸 {t.sponsor.cta}</a>
          <p style={{fontSize:11,color:ts,marginTop:14,opacity:0.7}}>{t.sponsor.note}</p>
        </div>
      </article>
      <footer style={{borderTop:`1px solid ${bdr}`,padding:"24px",textAlign:"center",background:dark?"#0c0c10":"#f5f5f0"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:8}}><div style={{width:22,height:22,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:14}}>{t.nav}</span></div>
        <p style={{fontSize:11,color:ts}}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p>
      </footer>
    </div>
  );
}
