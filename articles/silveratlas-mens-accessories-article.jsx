import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Moda", "Erkek Gümüş Aksesuar Rehberi"],
    category: "Moda",
    title: "Erkek Gümüş Aksesuar Rehberi",
    subtitle: "Yüzükten bilekliğe, kol düğmesinden kolyeye — modern erkeğin gümüş stil kılavuzu",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "9 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Gümüş aksesuar, erkek modasının en çok yükselen trendlerinden biridir. Altına göre daha soğuk tonlu ve understate bir estetik sunan gümüş, hem gündelik hem de resmi kombinlere zahmetsizce uyum sağlar.",
          "Bu rehber, erkek gümüş aksesuarlarının temel kategorilerini, doğru seçim kriterlerini, kombinleme ipuçlarını ve bakım önerilerini kapsamlı şekilde sunmaktadır.",
        ],
      },
      {
        id: "kategoriler", heading: "Aksesuar Kategorileri",
        paragraphs: [
          "Erkek gümüş aksesuarları altı ana kategoride değerlendirilebilir. Her kategorinin kendine özgü stil kuralları ve kullanım bağlamları vardır:",
        ],
        widget: "categories",
      },
      {
        id: "yuzuk", heading: "Gümüş Yüzük: Başlangıç Noktası",
        paragraphs: [
          "Yüzük, erkek aksesuar dünyasına en doğal giriş noktasıdır. İslam geleneğinde Hz. Peygamber'in gümüş yüzük kullandığı bilinmektedir — bu gelenek günümüzde de erkekler arasında gümüş yüzük tercihini doğal kılan bir kültürel köke sahiptir.",
          "Signet (mühür) yüzükleri, tarihsel olarak kişisel imzayı temsil etmiş ve günümüzde klasik erkek takısı olarak yeniden popülerlik kazanmıştır. Minimal band yüzükler, taşlı yüzükler ve motifli statement yüzükler diğer yaygın seçeneklerdir.",
          "Boyut seçimi kritiktir: yüzük parmağa tam oturmalı, sıkmadan kaymadan durmalıdır. Gün boyunca parmak kalınlığı değişebileceğinden, öğleden sonra ölçüm yapılması önerilir.",
        ],
      },
      {
        id: "bileklik", heading: "Bileklik ve Kelepçe",
        paragraphs: [
          "Gümüş bileklik, erkek stil oyununda yüzükten sonra en etkili parçadır. Chain (zincir) bileklikler, cuff (kelepçe) bileklikler ve bead (boncuk) bileklikler üç ana formattır.",
          "Chain bileziklerin kalınlığı stili belirler: ince zincir (3-5mm) minimalist bir etki yaratırken, kalın zincir (8-12mm) daha statement bir görünüm sunar. Figaro, curb ve rope en popüler zincir tipleridir.",
          "Kelepçe (cuff) bileklikler, kolun iç kısmına doğru açık olan C-formundadır. Minimal tasarımlı gümüş kelepçeler, saat ile birlikte katmanlama yapmak için idealdir.",
        ],
      },
      {
        id: "kolye", heading: "Kolye ve Zincir",
        paragraphs: [
          "Erkek gümüş kolye trendi son yıllarda güçlü bir yükseliş göstermektedir. Uzunluk seçimi kritiktir: 45-50cm 'choker' tarzı yakın durur, 55-60cm göğüs ortasına düşer, 65cm+ uzun katmanlama için uygundur.",
          "Popüler kolye stilleri: düz zincir (altın standart), pendant (sarkıt — çapa, haç, Ay hilali, nazar boncuğu gibi), dog tag tarzı ve geometrik kolye uçları.",
          "Katmanlama (layering) trendi: farklı uzunluk ve kalınlıkta 2-3 kolye üst üste takılarak derinlikli bir görünüm oluşturulabilir. Kural: her kolye arasında en az 5cm uzunluk farkı olmalıdır.",
        ],
      },
      {
        id: "koldugmesi", heading: "Kol Düğmesi ve Kravat İğnesi",
        paragraphs: [
          "Gümüş kol düğmesi, resmi giyimde sofistike bir dokunuştur. Fransız manşetli gömleklerle kullanılır ve profesyonel ortamda fark yaratan bir detaydır.",
          "925 ayar gümüş kol düğmeleri, nikel alerjisi riski düşük olduğundan hassas ciltler için de uygundur. Klasik oval, düğüm (knot) ve totem formları en çok tercih edilen tasarımlardır.",
          "Kravat iğnesi (tie bar/clip), kravatı gömleğe sabitleyen fonksiyonel ve estetik bir aksesuar. Gümüş kravat iğnesi, gümüş kol düğmesiyle eşleştirildiğinde birleşik ve zarif bir görünüm sağlar.",
        ],
      },
      {
        id: "saat", heading: "Saat ile Uyum",
        paragraphs: [
          "Metal uyumu kuralı: gümüş aksesuar, gümüş veya çelik kasalı saatlerle en uyumlu eşleşmeyi sunar. Altın kasalı saatle gümüş bileklik karıştırmak 'mixed metals' bir görünüm yaratır — bilinçli yapılırsa modern, rastgele görünürse dağınık olabilir.",
          "Saat ile bileklik kombinlemesinde iki yaklaşım vardır: aynı bilekte (saat + ince bileklik) veya karşı bilekte. Aynı bilekte takıldığında bileklik, saatin kasasına değmeyecek kadar küçük veya uzak olmalıdır — çizilme riskini önlemek için.",
          "Dijital saat veya akıllı saat kullanıyorsanız, gümüş bileklik sportif-teknolojik bir kontrast yaratır ve gayet şık durur.",
        ],
      },
      {
        id: "kombinleme", heading: "Kombinleme ve Katmanlama İpuçları",
        paragraphs: [
          "Az çoktur' (less is more) prensibi, erkek gümüş aksesuarında temel kuraldır. Yeni başlayanlar için bir yüzük + bir bileklik veya bir kolye + bir yüzük kombinasyonu yeterlidir.",
          "İleri seviye katmanlama: 2-3 yüzük (farklı parmaklarda), 1-2 bileklik (saat dahil), 1-2 kolye (farklı uzunlukta). Toplam parça sayısı 5-6'yı geçmemelidir.",
          "Metal tutarlılığı: Tüm aksesuarların gümüş olması gerekmez, ancak %70-80 gümüş ağırlığı korunmalıdır. Siyah deri veya doğal taş bileklikler, gümüş parçalarla kontrast oluşturur.",
        ],
        tips: [
          "Yüzük seçiminde dominant el (sağ) ve yardımcı el (sol) dengesini gözet",
          "İş ortamında 1-2 parça ile sınırlı kal; hafta sonu daha çok dene",
          "Kalın zincir kolye + ince zincir kolye = mükemmel katmanlama",
          "Gümüş aksesuarı siyah, beyaz, lacivert ve gri tonlarla eşle",
          "Yazın teni bronzlaştığında gümüşün kontrastı daha da artar",
        ],
      },
      {
        id: "bakim", heading: "Bakım ve Saklama",
        paragraphs: [
          "Erkek gümüş aksesuarları genellikle daha yoğun kullanıma maruz kalır — ter, güneş kremi ve su teması kararma sürecini hızlandırabilir. Düzenli bakım, gümüşün ömrünü uzatır.",
          "Kullanım sonrası yumuşak bir bezle silmek, kararma oluşumunu yavaşlatır. Derin karartmalarda karbonat + alüminyum folyo yöntemi güvenli ve etkilidir.",
          "Saklama: her parçayı ayrı ayrı yumuşak poşette veya kumaşta tutun — gümüş parçalar birbirine değdiğinde çizilir. Sıcak ve nemli ortamlardan uzak tutun.",
        ],
      },
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Erkekler hangi parmağa yüzük takmalı?", a: "Geleneksel olarak yüzük parmağı (dördüncü parmak) evlilik yüzüğüne ayrılır. Küçük parmak (serçe) signet yüzüğü, işaret parmağı statement yüzük için uygundur. Başparmak yüzüğü cesur bir tercih olup giderek daha popülerdir." },
        { q: "Gümüş aksesuar alerjiye neden olur mu?", a: "925 ayar gümüş genellikle hipoalerjenik kabul edilir. Ancak alaşımdaki bakır, çok hassas ciltlerde hafif reaksiyona yol açabilir. Bu durumda rodaj kaplama arayın." },
        { q: "İş yerinde gümüş aksesuar takmak uygun mudur?", a: "Evet, minimalist seçimlerle. Bir yüzük, bir saat ve isteğe bağlı bir kol düğmesi profesyonel ortam için idealdir. Statement parçaları hafta sonuna bırakın." },
        { q: "Gümüş ile altın karıştırılabilir mi?", a: "Mixed metals trendi son yıllarda kabul görmüştür. Bilinçli yapıldığında (örneğin gümüş yüzük + altın zincir) modern görünür. Ancak yeni başlayanlar tek metal ile başlamalıdır." },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "GQ Magazine — \"Men's Jewelry Guide 2025\"",
        "Vogue Business — \"The Rise of Men's Silver Jewelry\"",
        "The Silver Institute — Consumer Trends Report",
        "İstanbul Gümüş — Erkek Koleksiyonu Stil Rehberi",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "925 Ayar Nedir?", path: "/tr/uretim/925-ayar", cat: "Üretim" },
        { title: "Gümüş Bakımı Rehberi", path: "/tr/uretim/bakim", cat: "Üretim" },
        { title: "2026 Gümüş Takı Trendleri", path: "/tr/moda/trendler", cat: "Moda" },
      ],
    },
    sponsor: {
      text: "İstanbul Gümüş erkek koleksiyonunu keşfedin.",
      cta: "@istanbulgumusmen'de Gör",
      sponsorIG: "@istanbulgumusmen",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    categoryData: [
      { name: "Yüzük", desc: "Signet, band, statement", icon: "💍", level: "Başlangıç" },
      { name: "Bileklik", desc: "Chain, cuff, bead", icon: "⛓️", level: "Başlangıç" },
      { name: "Kolye & Zincir", desc: "Pendant, layering, chain", icon: "📿", level: "Orta" },
      { name: "Kol Düğmesi", desc: "Oval, knot, totem", icon: "🔘", level: "İleri" },
      { name: "Kravat İğnesi", desc: "Tie bar, tie clip", icon: "📌", level: "İleri" },
      { name: "Anahtarlık & Diğer", desc: "Money clip, cüzdan zinciri", icon: "🔑", level: "Orta" },
    ],
    categoryTitle: "Erkek Gümüş Aksesuar Kategorileri",
    darkMode: "Mod", toc: "İçindekiler",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Fashion", "Men's Silver Accessories Guide"],
    category: "Fashion",
    title: "Men's Silver Accessories Guide",
    subtitle: "From rings to bracelets, cufflinks to necklaces — the modern man's silver style guide",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "9 min read" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Silver accessories are one of men's fashion's fastest-rising trends. Offering a cooler-toned, understated aesthetic compared to gold, silver adapts effortlessly to both casual and formal combinations.",
          "This guide comprehensively covers the main categories of men's silver accessories, selection criteria, styling tips, and care recommendations.",
        ],
      },
      {
        id: "categories", heading: "Accessory Categories",
        paragraphs: ["Men's silver accessories fall into six main categories, each with its own style rules and contexts:"],
        widget: "categories",
      },
      {
        id: "rings", heading: "Silver Rings: The Starting Point",
        paragraphs: [
          "The ring is the most natural entry point to men's accessories. In Islamic tradition, the Prophet is known to have worn a silver ring — a cultural root that naturalizes silver ring preference among men today.",
          "Signet rings historically represented personal identity and have regained popularity as classic men's jewelry. Minimal bands, gemstone rings, and statement motif rings are other popular options.",
          "Size selection is critical: the ring should sit snugly without squeezing or sliding. Since finger thickness changes throughout the day, afternoon measurement is recommended.",
        ],
      },
      {
        id: "bracelets", heading: "Bracelets and Cuffs",
        paragraphs: [
          "The silver bracelet is the second most impactful piece in men's styling after rings. Chain bracelets, cuff bracelets, and bead bracelets are the three main formats.",
          "Chain thickness determines the style: thin chain (3-5mm) creates a minimalist effect; thick chain (8-12mm) delivers a statement look. Figaro, curb, and rope are the most popular chain types.",
          "Cuff bracelets are C-shaped, open toward the inner wrist. Minimal silver cuffs are ideal for layering with a watch.",
        ],
      },
      {
        id: "necklaces", heading: "Necklaces and Chains",
        paragraphs: [
          "The men's silver necklace trend has surged in recent years. Length is critical: 45-50cm sits choker-style, 55-60cm falls to mid-chest, 65cm+ suits long layering.",
          "Popular styles: plain chain (the gold standard), pendant (anchor, cross, crescent, evil eye), dog tag style, and geometric pendant pieces.",
          "Layering trend: combining 2-3 necklaces of different lengths and thicknesses creates depth. Rule: maintain at least 5cm difference between each necklace.",
        ],
      },
      {
        id: "cufflinks", heading: "Cufflinks and Tie Bars",
        paragraphs: [
          "The silver cufflink is a sophisticated touch in formal wear. Used with French cuff shirts, it's a detail that makes a difference in professional settings.",
          "925 sterling silver cufflinks are suitable for sensitive skin due to low nickel allergy risk. Classic oval, knot, and totem forms are the most popular designs.",
          "The tie bar (tie clip) is both functional and aesthetic. A silver tie bar paired with silver cufflinks creates a cohesive, elegant look.",
        ],
      },
      {
        id: "watch", heading: "Watch Coordination",
        paragraphs: [
          "Metal matching rule: silver accessories pair best with silver or steel-cased watches. Mixing silver bracelet with gold-cased watch creates a 'mixed metals' look — intentional mixing reads modern, random mixing reads messy.",
          "Two approaches for watch-bracelet combo: same wrist (watch + thin bracelet) or opposite wrist. When on the same wrist, the bracelet should be small or distant enough to avoid scratching the case.",
          "If you wear a digital or smart watch, a silver bracelet creates a sporty-tech contrast that looks quite stylish.",
        ],
      },
      {
        id: "styling", heading: "Styling and Layering Tips",
        paragraphs: [
          "'Less is more' is the fundamental rule for men's silver accessories. Beginners should start with one ring + one bracelet, or one necklace + one ring.",
          "Advanced layering: 2-3 rings (different fingers), 1-2 bracelets (including watch), 1-2 necklaces (different lengths). Total piece count should not exceed 5-6.",
          "Metal consistency: not all accessories need to be silver, but maintain a 70-80% silver dominance. Black leather or natural stone bracelets create contrast with silver pieces.",
        ],
        tips: [
          "Balance rings between dominant hand (right) and auxiliary hand (left)",
          "Limit to 1-2 pieces in professional settings; experiment more on weekends",
          "Thick chain necklace + thin chain necklace = perfect layering",
          "Pair silver accessories with black, white, navy, and gray tones",
          "Silver contrast increases when skin is tanned in summer",
        ],
      },
      {
        id: "care", heading: "Care and Storage",
        paragraphs: [
          "Men's silver accessories typically face heavier use — sweat, sunscreen, and water contact can accelerate tarnishing. Regular care extends silver's lifespan.",
          "Wiping with a soft cloth after use slows tarnish formation. For deep tarnish, the baking soda + aluminum foil method is safe and effective.",
          "Storage: keep each piece in a separate soft pouch or cloth — silver pieces scratch when touching each other. Keep away from hot and humid environments.",
        ],
      },
    ],
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Which finger should men wear rings on?", a: "Traditionally, the ring finger (fourth) is reserved for wedding bands. The pinky suits signet rings, the index finger for statement rings. Thumb rings are a bold choice that's increasingly popular." },
        { q: "Can silver accessories cause allergies?", a: "925 sterling silver is generally considered hypoallergenic. However, the copper in the alloy may cause mild reactions in very sensitive skin. Look for rhodium plating in such cases." },
        { q: "Is it appropriate to wear silver accessories at work?", a: "Yes, with minimalist choices. One ring, a watch, and an optional cufflink are ideal for professional settings. Save statement pieces for weekends." },
        { q: "Can silver and gold be mixed?", a: "The mixed metals trend has gained acceptance. Intentional mixing (e.g., silver ring + gold chain) reads modern. However, beginners should start with a single metal." },
      ],
    },
    sources: {
      heading: "Sources",
      items: [
        "GQ Magazine — \"Men's Jewelry Guide 2025\"",
        "Vogue Business — \"The Rise of Men's Silver Jewelry\"",
        "The Silver Institute — Consumer Trends Report",
        "İstanbul Gümüş — Men's Collection Style Guide",
      ],
    },
    related: {
      heading: "Related Topics",
      items: [
        { title: "What is 925 Sterling Silver?", path: "/en/manufacturing/925", cat: "Manufacturing" },
        { title: "Silver Care Guide", path: "/en/manufacturing/care", cat: "Manufacturing" },
        { title: "2026 Silver Jewelry Trends", path: "/en/fashion/trends", cat: "Fashion" },
      ],
    },
    sponsor: {
      text: "Explore the İstanbul Gümüş men's collection.",
      cta: "View @istanbulgumusmen",
      sponsorIG: "@istanbulgumusmen",
      note: "This content is supported by İstanbul Gümüş.",
    },
    categoryData: [
      { name: "Rings", desc: "Signet, band, statement", icon: "💍", level: "Beginner" },
      { name: "Bracelets", desc: "Chain, cuff, bead", icon: "⛓️", level: "Beginner" },
      { name: "Necklaces & Chains", desc: "Pendant, layering", icon: "📿", level: "Intermediate" },
      { name: "Cufflinks", desc: "Oval, knot, totem", icon: "🔘", level: "Advanced" },
      { name: "Tie Bars", desc: "Tie bar, tie clip", icon: "📌", level: "Advanced" },
      { name: "Keychains & More", desc: "Money clip, wallet chain", icon: "🔑", level: "Intermediate" },
    ],
    categoryTitle: "Men's Silver Accessory Categories",
    darkMode: "Mode", toc: "Contents",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة المعرفة بالفضة",
    breadcrumb: ["الرئيسية", "الموضة", "دليل إكسسوارات الفضة للرجال"],
    category: "الموضة",
    title: "دليل إكسسوارات الفضة للرجال",
    subtitle: "من الخواتم إلى الأساور، ومن أزرار الأكمام إلى القلائد — دليل الأناقة الفضية للرجل العصري",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "٩ دقائق قراءة" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "إكسسوارات الفضة من أسرع الاتجاهات صعوداً في أزياء الرجال. تقدم الفضة جمالية أكثر برودة وأناقة مقارنة بالذهب.",
          "يقدم هذا الدليل الفئات الرئيسية لإكسسوارات الفضة الرجالية ونصائح التنسيق والعناية.",
        ],
      },
      {
        id: "categories", heading: "فئات الإكسسوارات",
        paragraphs: ["تنقسم إكسسوارات الفضة الرجالية إلى ست فئات رئيسية:"],
        widget: "categories",
      },
      {
        id: "rings", heading: "خواتم الفضة: نقطة البداية",
        paragraphs: [
          "الخاتم هو المدخل الأكثر طبيعية لعالم إكسسوارات الرجال. في التقليد الإسلامي، عُرف عن النبي ﷺ ارتداء خاتم فضي.",
          "خواتم الختم (Signet) تمثل الهوية الشخصية وعادت لتحظى بشعبية كبيرة.",
          "اختيار المقاس حاسم: يجب أن يستقر الخاتم بإحكام دون ضغط.",
        ],
      },
      {
        id: "bracelets", heading: "الأساور والأصفاد",
        paragraphs: [
          "السوار الفضي ثاني أكثر قطعة تأثيراً بعد الخاتم. أساور السلسلة والأصفاد والخرز هي الأشكال الثلاثة الرئيسية.",
          "سمك السلسلة يحدد الأسلوب: رفيعة (٣-٥مم) تأثير بسيط، سميكة (٨-١٢مم) مظهر أكثر جرأة.",
        ],
      },
      {
        id: "necklaces", heading: "القلائد والسلاسل",
        paragraphs: [
          "اتجاه قلائد الفضة الرجالية في صعود قوي. الطول حاسم: ٤٥-٥٠سم قريب من الرقبة، ٥٥-٦٠سم منتصف الصدر.",
          "التنسيق بالطبقات: الجمع بين ٢-٣ قلائد بأطوال مختلفة يخلق عمقاً بصرياً.",
        ],
      },
      {
        id: "cufflinks", heading: "أزرار الأكمام ومشابك ربطة العنق",
        paragraphs: [
          "زر الكم الفضي لمسة راقية في الملابس الرسمية.",
          "أزرار الأكمام من عيار ٩٢٥ مناسبة للبشرة الحساسة.",
        ],
      },
      {
        id: "watch", heading: "التنسيق مع الساعة",
        paragraphs: [
          "قاعدة تطابق المعادن: الإكسسوارات الفضية تتناسب أفضل مع الساعات الفضية أو الفولاذية.",
          "إذا كنت ترتدي ساعة ذكية، فإن السوار الفضي يخلق تبايناً رياضياً أنيقاً.",
        ],
      },
      {
        id: "styling", heading: "نصائح التنسيق والطبقات",
        paragraphs: [
          "مبدأ 'الأقل أكثر' هو القاعدة الأساسية. للمبتدئين: خاتم واحد + سوار واحد.",
          "التنسيق المتقدم: ٢-٣ خواتم + ١-٢ سوار + ١-٢ قلادة. لا تتجاوز ٥-٦ قطع.",
        ],
        tips: [
          "في بيئة العمل: ١-٢ قطعة فقط",
          "سلسلة سميكة + سلسلة رفيعة = طبقات مثالية",
          "نسّق الفضة مع الأسود والأبيض والكحلي والرمادي",
        ],
      },
      {
        id: "care", heading: "العناية والتخزين",
        paragraphs: [
          "إكسسوارات الرجال تتعرض لاستخدام أكثر كثافة. المسح بقطعة قماش ناعمة بعد الاستخدام يبطئ التغمق.",
          "خزّن كل قطعة في حقيبة ناعمة منفصلة لتجنب الخدوش.",
        ],
      },
    ],
    faq: {
      heading: "الأسئلة الشائعة",
      items: [
        { q: "في أي إصبع يجب أن يرتدي الرجال الخاتم؟", a: "البنصر تقليدياً لخاتم الزواج. الخنصر لخاتم الختم، والسبابة للخواتم الجريئة. خاتم الإبهام خيار شجاع ويزداد شعبية." },
        { q: "هل يمكن خلط الفضة والذهب؟", a: "اتجاه خلط المعادن مقبول حالياً. الخلط المقصود يبدو عصرياً، لكن يُفضل أن يبدأ المبتدئون بمعدن واحد." },
      ],
    },
    sources: { heading: "المصادر", items: ["GQ Magazine — دليل مجوهرات الرجال", "Vogue Business — صعود مجوهرات الفضة الرجالية", "The Silver Institute — تقرير اتجاهات المستهلك"] },
    related: {
      heading: "مواضيع ذات صلة",
      items: [
        { title: "ما هو عيار ٩٢٥؟", path: "/ar/manufacturing/925", cat: "التصنيع" },
        { title: "دليل العناية بالفضة", path: "/ar/manufacturing/care", cat: "التصنيع" },
      ],
    },
    sponsor: { text: "اكتشفوا مجموعة الرجال من إسطنبول غوموش.", cta: "شاهد @istanbulgumusmen", sponsorIG: "@istanbulgumusmen", note: "هذا المحتوى مدعوم من إسطنبول غوموش." },
    categoryData: [
      { name: "خواتم", desc: "ختم، حلقة، جريء", icon: "💍", level: "مبتدئ" },
      { name: "أساور", desc: "سلسلة، صفد، خرز", icon: "⛓️", level: "مبتدئ" },
      { name: "قلائد وسلاسل", desc: "تعليقة، طبقات", icon: "📿", level: "متوسط" },
      { name: "أزرار أكمام", desc: "بيضاوي، عقدة", icon: "🔘", level: "متقدم" },
      { name: "مشابك ربطة العنق", desc: "مشبك", icon: "📌", level: "متقدم" },
      { name: "سلاسل مفاتيح", desc: "مشبك نقود", icon: "🔑", level: "متوسط" },
    ],
    categoryTitle: "فئات إكسسوارات الفضة الرجالية",
    darkMode: "الوضع", toc: "المحتويات",
  },
};

// ─── Category Grid Widget ─────────────────────────────────
function CategoryGrid({ data, title, dark }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const gold = "#D4AF37";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const lvlColor = (l) => {
    if (["Başlangıç","Beginner","مبتدئ"].includes(l)) return "#4ade80";
    if (["Orta","Intermediate","متوسط"].includes(l)) return gold;
    return "#60a5fa";
  };
  return (
    <div style={{ margin: "20px 0" }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: textP, marginBottom: 16 }}>{title}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 10 }}>
        {data.map((c, i) => (
          <div key={i} style={{ padding: "16px", borderRadius: 12, border: `1px solid ${border}`, background: dark ? "rgba(192,192,192,0.02)" : "rgba(192,192,192,0.04)" }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: textP, marginBottom: 4 }}>{c.name}</div>
            <div style={{ fontSize: 11, color: textS, marginBottom: 8 }}>{c.desc}</div>
            <span style={{ fontSize: 9, fontWeight: 600, padding: "2px 8px", borderRadius: 6, background: `${lvlColor(c.level)}15`, color: lvlColor(c.level) }}>{c.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────
export default function MensAccessoriesArticle() {
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        *{margin:0;padding:0;box-sizing:border-box}::selection{background:rgba(192,192,192,0.3)}
      `}</style>
      <nav style={{ position:"sticky",top:0,zIndex:100,background:dark?"rgba(15,15,20,0.88)":"rgba(250,250,245,0.88)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${border}`,padding:"0 24px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
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
            <div style={{fontSize:52,marginBottom:4}}>💍⛓️📿</div>
            <div style={{fontFamily:fontD,fontSize:22,fontWeight:700,background:`linear-gradient(135deg,${accent},${gold})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>MEN'S SILVER</div>
            <div style={{fontSize:12,color:textS,letterSpacing:"0.15em",marginTop:4}}>STYLE GUIDE</div>
          </div>
        </div>

        {t.sections.map(sec=>(
          <section key={sec.id} style={{marginBottom:36}}>
            {sec.heading&&<h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:16,paddingTop:8}}>{sec.heading}</h2>}
            {sec.paragraphs.map((p,pi)=><p key={pi} style={{fontSize:15,lineHeight:1.8,color:textS,marginBottom:14}}>{p}</p>)}
            {sec.widget==="categories"&&<CategoryGrid data={t.categoryData} title={t.categoryTitle} dark={dark}/>}
            {sec.tips&&(
              <div style={{background:dark?"rgba(192,192,192,0.03)":"rgba(192,192,192,0.06)",border:`1px solid ${border}`,borderRadius:12,padding:"20px 24px",marginTop:16}}>
                {sec.tips.map((tip,ti)=>(
                  <div key={ti} style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:ti<sec.tips.length-1?12:0,fontSize:14,lineHeight:1.6,color:textS}}>
                    <span style={{flexShrink:0,width:22,height:22,borderRadius:"50%",background:`${gold}18`,color:gold,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:600,marginTop:1}}>{ti+1}</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            )}
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
          <a href={`https://instagram.com/${(t.sponsor.sponsorIG||"istanbulgumustr").replace("@","")}`} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"10px 24px",borderRadius:10,background:`linear-gradient(135deg,${accent},${gold})`,color:"#0f0f14",fontSize:13,fontWeight:600,textDecoration:"none"}}>📸 {t.sponsor.cta}</a>
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
