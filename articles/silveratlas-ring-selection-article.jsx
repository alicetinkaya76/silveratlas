import { useState, useEffect } from "react";

// ─── i18n ────────────────────────────────────────────────
const T = {
  tr: {
    nav: "SilverAtlas",
    navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Rehber", "Yüzük Seçim Rehberi"],
    category: "Rehber",
    title: "Gümüş Yüzük Seçim Rehberi",
    subtitle: "Doğru ölçü, doğru stil, doğru alaşım — mükemmel gümüş yüzüğü bulmak için bilmeniz gereken her şey",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "10 dk okuma" },
    sections: [
      {
        id: "intro",
        heading: null,
        paragraphs: [
          "Bir gümüş yüzük sadece bir aksesuar değildir; kişiliğinizi, tarzınızı ve bazen inançlarınızı yansıtan günlük bir eşlikçidir. Ancak doğru yüzüğü seçmek, göründüğünden daha karmaşık olabilir — ölçü, alaşım türü, taş kombinasyonu, yüzey işlemi ve kullanım amacı gibi birçok faktör devreye girer.",
          "Bu rehber, gümüş yüzük alırken dikkat edilmesi gereken tüm kriterleri kapsamlı biçimde ele alır. İster kendinize ister sevdiğinize hediye alıyor olun, doğru seçimi yapmanız için ihtiyacınız olan tüm bilgiyi sunuyoruz."
        ]
      },
      {
        id: "olcu",
        heading: "1. Doğru Ölçüyü Bulmak",
        paragraphs: [
          "Yüzük ölçüsü, rahat bir kullanım için en kritik faktördür. Yanlış ölçü, yüzüğün sıkması ya da düşmesi anlamına gelir. Türkiye'de yaygın olarak kullanılan ölçü birimi iç çap (mm) iken, ABD numaralama sistemi ve Avrupa çevre ölçüsü de uluslararası alışverişlerde karşılaşılan standartlardır.",
          "Parmak kalınlığı gün içinde, mevsime göre ve hatta sağlık durumuna göre değişebilir. Sabah saatlerinde parmaklar genellikle daha ince, öğleden sonra ve sıcak havalarda daha kalındır. Bu nedenle ölçüyü günün farklı saatlerinde almanız önerilir.",
          "Geniş bantlı yüzükler (8 mm+) standart ölçünüzden yarım numara büyük seçilmelidir; dar bantlı yüzüklerde ise normal ölçünüz yeterlidir. Parmaklar arasındaki eklem kalın olanlar için, yüzüğün eklemden geçip parmak dibinde hafif gevşek durması idealdir."
        ]
      },
      {
        id: "alasim",
        heading: "2. Alaşım ve Ayar Seçimi",
        paragraphs: [
          "Gümüş yüzükler farklı ayar ve alaşım türlerinde üretilir. Her birinin avantajları ve dezavantajları vardır:",
        ],
        table: {
          headers: ["Tür", "Ayar", "Özellik", "İdeal Kullanım", "Fiyat Aralığı"],
          rows: [
            ["Sterling Silver", "925", "Standart takı gümüşü, %92,5 Ag", "Günlük kullanım", "$$"],
            ["Argentium", "935-960", "Germanium katkılı, kararma direnci yüksek", "Hassas ciltler", "$$$"],
            ["Fine Silver", "999", "Saf gümüş, çok yumuşak", "Koleksiyon, vitrin", "$$$$"],
            ["Coin Silver", "900", "Antik tarz, dayanıklı", "Vintage tasarımlar", "$$"],
            ["Bali Silver", "925", "El işi, oksitlenmiş detaylar", "Etnik tarz", "$$$"],
            ["Rodaj Kaplama", "925 taban", "Beyaz parlak yüzey, alerji dostu", "Nişan/söz yüzüğü", "$$$"]
          ]
        }
      },
      {
        id: "tasarim",
        heading: "3. Tasarım ve Stil Rehberi",
        paragraphs: [
          "Yüzük tasarımı, kişisel tarz ve kullanım amacıyla uyumlu olmalıdır. Minimalist bir çizgi yüzüğü ofis ortamında şık dururken, oksitlenmiş kafatası yüzüğü daha cesur bir ifade aracıdır.",
          "El yapısı yüzüklerde her parça benzersizdir — bu bir kusur değil, zanaatın imzasıdır. Makine üretimi ise tutarlılık ve hassasiyet sunar. Bütçe ve beklenti dengenize göre tercih yapabilirsiniz."
        ],
        widget: "styleGuide"
      },
      {
        id: "taslar",
        heading: "4. Taş Seçimi ve Uyumu",
        paragraphs: [
          "Gümüş, neredeyse tüm değerli ve yarı değerli taşlarla uyumludur. Ancak bazı kombinasyonlar hem estetik hem dayanıklılık açısından öne çıkar:",
          "Turkuaz, ametist, ay taşı (moonstone) ve lapis lazuli gümüşle en klasik eşleşmelerdir. Zümrüt ve yakut gibi değerli taşlar genellikle altınla tercih edilse de, modern tasarımlarda gümüş montür giderek popülerleşmektedir.",
          "Taşın montür türü de önemlidir: Tırnak montür (prong) taşı en fazla gösteren yöntemdir ancak çarpmalara açıktır. Çerçeve montür (bezel) taşı korur ve günlük kullanıma daha uygundur. Kanal montür (channel) ise sıra taşlı tasarımlarda tercih edilir."
        ]
      },
      {
        id: "yuzey",
        heading: "5. Yüzey İşlemleri",
        paragraphs: [
          "Yüzüğün yüzey bitişi, görünümünü ve bakım ihtiyacını doğrudan etkiler:"
        ],
        tips: [
          "Parlak (Polished): Ayna gibi yansıtıcı, klasik görünüm. Çiziklere duyarlı, düzenli parlatma gerektirir.",
          "Mat (Matte/Satin): Yumuşak, çağdaş görünüm. Çizikler daha az belirgin, bakımı kolay.",
          "Fırçalanmış (Brushed): İnce çizgisel doku, endüstriyel-minimal estetik.",
          "Oksitlenmiş (Oxidized): Kasıtlı karartma ile antik/vintage etki. Kabartma detayları vurgular.",
          "Çekiçlenmiş (Hammered): Organik, el yapımı doku. Her parça benzersiz.",
          "Rodaj Kaplama: Rodium ile kaplanmış beyaz parlak yüzey. Kararma olmaz, alerji riski düşük."
        ]
      },
      {
        id: "bakim",
        heading: "6. Bakım ve Uzun Ömür",
        paragraphs: [
          "Gümüş yüzüğünüzün ömrü, bakımınıza bağlıdır. Sterling gümüş doğası gereği zamanla kararır — bu bir kalite sorunu değil, kimyasal bir gerçekliktir. Düzenli bakımla yüzüğünüz on yıllarca yeni gibi kalabilir.",
          "Yüzüğünüzü çıkardığınızda yumuşak bir bezle silin ve hava almayan bir poşette saklayın. Anti-tarnish kağıtları kükürt emici özellikleriyle kararma sürecini yavaşlatır. Kimyasal temizleyiciler yerine karbonat + alüminyum folyo yöntemi daha güvenlidir.",
          "Taşlı yüzüklerde ultrasonik temizlik bazı taşlara (opal, turkuaz, inci) zarar verebilir. Bu taşları sadece nemli bezle silin."
        ]
      },
      {
        id: "butce",
        heading: "7. Bütçe Planlama",
        paragraphs: [
          "Gümüş takı, altına kıyasla çok daha erişilebilir fiyatlara sahiptir. Ancak fiyat, sadece metal değerine değil; işçiliğe, taşın kalitesine, markanın konumlandırmasına ve tasarımın karmaşıklığına bağlıdır.",
          "El yapımı bir telkâri yüzük, makine üretimi sade bir bant yüzükten 3-5 kat pahalı olabilir — bu fark, harcanan emek ve becerinin yansımasıdır. Bütçenizi belirlerken 'ne kadar ödeyebilirim' değil, 'hangi kalitede bir ürün istiyorum' sorusuyla başlayın."
        ]
      }
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Gümüş yüzük parmağımı yeşile boyar mı?", a: "925 ayar gümüş normalde boyamaz, ancak alaşımdaki bakır, asidik cilt pH'ı veya nem koşullarında nadiren yeşilimsi bir iz bırakabilir. Rodaj kaplama bu sorunu tamamen ortadan kaldırır." },
        { q: "Gümüş nişan/söz yüzüğü uygun mudur?", a: "Kesinlikle. Rodaj kaplamalı 925 gümüş, beyaz altına çok benzer görünüm sunar ve bütçe dostu bir alternatiftir. Günlük kullanıma dayanıklıdır." },
        { q: "Online alışverişte ölçü nasıl bulunur?", a: "Mevcut bir yüzüğünüzün iç çapını milimetre olarak ölçün veya ip/kâğıt şerit yöntemiyle parmak çevrenizi belirleyip ölçü tablosuna bakın. SilverAtlas Yüzük Ölçü Bulucu aracımızı da kullanabilirsiniz." },
        { q: "Erkekler için ideal yüzük genişliği nedir?", a: "Erkek yüzüklerinde 6-8 mm bant genişliği en popüler aralıktır. İnce parmaklarda 5-6 mm, geniş ellerde 8-10 mm tercih edilebilir." },
        { q: "Gümüş yüzüğe gravür yaptırabilir miyim?", a: "Evet, 925 gümüş lazer veya el gravürüne uygundur. İç yüzeye isim, tarih veya kısa mesaj yazdırabilirsiniz. En az 3 mm bant genişliği önerilir." }
      ]
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "GIA (Gemological Institute of America) — Ring Sizing Guide",
        "Türk Standartları Enstitüsü — TS 2174: Gümüş Alaşımları",
        "Jewelry Information Center — Consumer Care Guides"
      ]
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "925 Ayar Nedir?", path: "/tr/uretim/925-ayar", cat: "Üretim" },
        { title: "Yüzük Ölçü Bulucu", path: "/tr/araclar/yuzuk-olcu", cat: "Araç" },
        { title: "Styling Rehberi", path: "/tr/stil/styling", cat: "Stil" }
      ]
    },
    sponsor: {
      text: "El yapımı 925 ayar gümüş yüzük koleksiyonumuzu keşfedin.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir."
    },
    styleCards: {
      title: "Stil ve Kullanım Rehberi",
      items: [
        { icon: "💼", name: "İş / Ofis", desc: "İnce bant, minimal tasarım, parlak veya rodaj kaplama", width: "2-4 mm" },
        { icon: "🎸", name: "Günlük / Casual", desc: "Orta bant, doku veya motif detaylı", width: "4-6 mm" },
        { icon: "💪", name: "Statement / Bold", desc: "Geniş bant, taşlı veya kabartmalı", width: "8-12 mm" },
        { icon: "💍", name: "Nişan / Söz", desc: "Rodaj kaplama, tek taş veya sıra taş", width: "3-5 mm" },
        { icon: "🌿", name: "Bohem / Etnik", desc: "Oksitlenmiş, el işi, doğa motifleri", width: "4-8 mm" },
        { icon: "⚡", name: "Modern / Geometrik", desc: "Asimetrik formlar, mat yüzey, endüstriyel çizgi", width: "3-6 mm" }
      ]
    },
    darkMode: "Mod",
    toc: "İçindekiler"
  },
  en: {
    nav: "SilverAtlas",
    navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Guide", "Ring Selection Guide"],
    category: "Guide",
    title: "Silver Ring Selection Guide",
    subtitle: "Right size, right style, right alloy — everything you need to know to find the perfect silver ring",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "10 min read" },
    sections: [
      {
        id: "intro",
        heading: null,
        paragraphs: [
          "A silver ring is more than an accessory; it is a daily companion that reflects your personality, style, and sometimes your beliefs. Yet choosing the right ring can be more complex than it appears — factors such as size, alloy type, stone combination, surface finish, and intended use all come into play.",
          "This guide comprehensively covers all the criteria to consider when buying a silver ring. Whether you are shopping for yourself or as a gift, we provide all the information you need to make the right choice."
        ]
      },
      {
        id: "sizing",
        heading: "1. Finding the Right Size",
        paragraphs: [
          "Ring size is the most critical factor for comfortable wear. An incorrect size means either a pinching ring or one that slips off. While Turkey commonly uses inner diameter (mm), the US numbering system and European circumference are international standards you may encounter.",
          "Finger thickness varies throughout the day, by season, and even by health condition. Mornings tend to yield slimmer measurements, while afternoons and hot weather cause fingers to swell. Measure at different times for accuracy.",
          "Wide-band rings (8mm+) should be ordered half a size larger than your standard; narrow bands fit true to size. If you have thick knuckles, the ring should pass over the joint and sit slightly loose at the base."
        ]
      },
      {
        id: "alloy",
        heading: "2. Alloy and Purity Selection",
        paragraphs: [
          "Silver rings come in different grades and alloys. Each has its advantages and trade-offs:"
        ],
        table: {
          headers: ["Type", "Grade", "Feature", "Ideal Use", "Price Range"],
          rows: [
            ["Sterling Silver", "925", "Standard jewelry silver, 92.5% Ag", "Daily wear", "$$"],
            ["Argentium", "935-960", "Germanium-added, high tarnish resistance", "Sensitive skin", "$$$"],
            ["Fine Silver", "999", "Pure silver, very soft", "Collection, display", "$$$$"],
            ["Coin Silver", "900", "Antique style, durable", "Vintage designs", "$$"],
            ["Bali Silver", "925", "Handcrafted, oxidized details", "Ethnic style", "$$$"],
            ["Rhodium Plated", "925 base", "Bright white surface, hypoallergenic", "Engagement rings", "$$$"]
          ]
        }
      },
      {
        id: "design",
        heading: "3. Design and Style Guide",
        paragraphs: [
          "Ring design should complement your personal style and intended use. A minimalist line ring looks elegant in an office, while an oxidized skull ring makes a bolder statement.",
          "In handmade rings, each piece is unique — this isn't a flaw but the artisan's signature. Machine production offers consistency and precision. Choose based on your budget and expectations."
        ],
        widget: "styleGuide"
      },
      {
        id: "stones",
        heading: "4. Stone Selection and Pairing",
        paragraphs: [
          "Silver is compatible with virtually all precious and semi-precious stones. However, certain combinations stand out for both aesthetics and durability:",
          "Turquoise, amethyst, moonstone, and lapis lazuli are the most classic pairings with silver. While emerald and ruby are typically set in gold, modern designs increasingly feature silver settings.",
          "The setting type also matters: Prong settings show the stone best but are vulnerable to impact. Bezel settings protect the stone for daily wear. Channel settings are preferred for row-set designs."
        ]
      },
      {
        id: "finish",
        heading: "5. Surface Finishes",
        paragraphs: [
          "The surface finish of a ring directly affects its appearance and care requirements:"
        ],
        tips: [
          "Polished: Mirror-like reflective, classic look. Scratch-sensitive, requires regular polishing.",
          "Matte/Satin: Soft, contemporary appearance. Scratches less visible, easy maintenance.",
          "Brushed: Fine linear texture, industrial-minimalist aesthetic.",
          "Oxidized: Intentional darkening for antique/vintage effect. Enhances raised details.",
          "Hammered: Organic, handmade texture. Each piece is unique.",
          "Rhodium Plated: Rhodium-coated bright white surface. No tarnishing, low allergy risk."
        ]
      },
      {
        id: "care",
        heading: "6. Care and Longevity",
        paragraphs: [
          "Your silver ring's lifespan depends on your care routine. Sterling silver naturally tarnishes over time — this is not a quality issue but a chemical reality. With regular care, your ring can look new for decades.",
          "Wipe your ring with a soft cloth when removing it and store in an airtight bag. Anti-tarnish strips absorb sulfur compounds that accelerate darkening. The baking soda + aluminum foil method is safer than chemical cleaners.",
          "For stone-set rings, ultrasonic cleaning can damage certain stones (opal, turquoise, pearl). Clean these with a damp cloth only."
        ]
      },
      {
        id: "budget",
        heading: "7. Budget Planning",
        paragraphs: [
          "Silver jewelry is far more accessible than gold. However, price depends not only on metal value but also on craftsmanship, stone quality, brand positioning, and design complexity.",
          "A handmade filigree ring can cost 3-5 times more than a machine-made plain band — this difference reflects the labor and skill involved. When setting your budget, start with 'what quality do I want' rather than 'how much can I spend'."
        ]
      }
    ],
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Will a silver ring turn my finger green?", a: "925 sterling silver normally does not, but the copper in the alloy can rarely leave a greenish mark under acidic skin pH or humid conditions. Rhodium plating eliminates this entirely." },
        { q: "Is a silver engagement ring appropriate?", a: "Absolutely. Rhodium-plated 925 silver closely resembles white gold and is a budget-friendly alternative. It withstands daily wear." },
        { q: "How to find my size when shopping online?", a: "Measure the inner diameter of an existing ring in millimeters, or use a string/paper strip to determine your finger circumference and consult a sizing chart. You can also use our SilverAtlas Ring Sizer tool." },
        { q: "What is the ideal ring width for men?", a: "6-8mm band width is the most popular range for men's rings. Thinner fingers suit 5-6mm, while larger hands can go for 8-10mm." },
        { q: "Can I engrave a silver ring?", a: "Yes, 925 silver is suitable for laser or hand engraving. You can have a name, date, or short message inscribed on the inner surface. A minimum 3mm band width is recommended." }
      ]
    },
    sources: {
      heading: "Sources",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "GIA (Gemological Institute of America) — Ring Sizing Guide",
        "Turkish Standards Institution — TS 2174: Silver Alloys",
        "Jewelry Information Center — Consumer Care Guides"
      ]
    },
    related: {
      heading: "Related Topics",
      items: [
        { title: "What is 925 Sterling?", path: "/en/manufacturing/925", cat: "Manufacturing" },
        { title: "Ring Sizer Tool", path: "/en/tools/ring-sizer", cat: "Tool" },
        { title: "Styling Guide", path: "/en/style/styling", cat: "Style" }
      ]
    },
    sponsor: {
      text: "Explore our handcrafted 925 sterling silver ring collection.",
      cta: "See on Instagram",
      note: "This content is sponsored by İstanbul Gümüş."
    },
    styleCards: {
      title: "Style & Usage Guide",
      items: [
        { icon: "💼", name: "Work / Office", desc: "Thin band, minimal design, polished or rhodium plated", width: "2-4 mm" },
        { icon: "🎸", name: "Daily / Casual", desc: "Medium band, textured or motif details", width: "4-6 mm" },
        { icon: "💪", name: "Statement / Bold", desc: "Wide band, stone-set or embossed", width: "8-12 mm" },
        { icon: "💍", name: "Engagement", desc: "Rhodium plated, solitaire or row-set", width: "3-5 mm" },
        { icon: "🌿", name: "Bohemian / Ethnic", desc: "Oxidized, handmade, nature motifs", width: "4-8 mm" },
        { icon: "⚡", name: "Modern / Geometric", desc: "Asymmetric forms, matte finish, industrial lines", width: "3-6 mm" }
      ]
    },
    darkMode: "Mode",
    toc: "Contents"
  },
  ar: {
    nav: "SilverAtlas",
    navSub: "منصة معرفة الفضة",
    breadcrumb: ["الرئيسية", "دليل", "دليل اختيار الخاتم"],
    category: "دليل",
    title: "دليل اختيار خاتم الفضة",
    subtitle: "المقاس الصحيح، الأسلوب المناسب، السبيكة المثالية — كل ما تحتاج معرفته للعثور على خاتم الفضة المثالي",
    meta: { author: "توران إرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٠ دقائق قراءة" },
    sections: [
      {
        id: "intro",
        heading: null,
        paragraphs: [
          "خاتم الفضة ليس مجرد إكسسوار؛ إنه رفيق يومي يعكس شخصيتك وأسلوبك وأحيانًا معتقداتك. لكن اختيار الخاتم المناسب قد يكون أكثر تعقيدًا مما يبدو — حيث تلعب عوامل مثل المقاس ونوع السبيكة وتركيبة الأحجار وتشطيب السطح والغرض من الاستخدام دورًا مهمًا.",
          "يتناول هذا الدليل بشكل شامل جميع المعايير التي يجب مراعاتها عند شراء خاتم فضة. سواء كنت تتسوق لنفسك أو كهدية، نقدم لك كل المعلومات اللازمة لاتخاذ القرار الصحيح."
        ]
      },
      {
        id: "sizing",
        heading: "١. العثور على المقاس الصحيح",
        paragraphs: [
          "مقاس الخاتم هو العامل الأكثر أهمية للارتداء المريح. المقاس الخاطئ يعني إما خاتمًا ضيقًا أو خاتمًا ينزلق. بينما تستخدم تركيا القطر الداخلي (مم)، فإن نظام الترقيم الأمريكي ومحيط الإصبع الأوروبي هما معايير دولية قد تواجهها.",
          "يتغير سُمك الإصبع خلال اليوم، وحسب الموسم، وحتى حسب الحالة الصحية. عادةً ما تكون الأصابع أنحف في الصباح وأسمك في فترة الظهيرة والطقس الحار.",
          "الخواتم ذات الحزام العريض (٨ مم+) يجب اختيارها بنصف مقاس أكبر من المعتاد؛ أما الأحزمة الضيقة فتناسب مقاسك العادي."
        ]
      },
      {
        id: "alloy",
        heading: "٢. اختيار السبيكة والعيار",
        paragraphs: [
          "تأتي خواتم الفضة بدرجات وسبائك مختلفة. لكل منها مزاياها وعيوبها:"
        ],
        table: {
          headers: ["النوع", "العيار", "الميزة", "الاستخدام المثالي", "نطاق السعر"],
          rows: [
            ["فضة إسترلينية", "٩٢٥", "فضة المجوهرات القياسية، ٩٢.٥٪ فضة", "الاستخدام اليومي", "$$"],
            ["أرجنتيوم", "٩٣٥-٩٦٠", "مضاف الجرمانيوم، مقاومة عالية للتغير", "البشرة الحساسة", "$$$"],
            ["فضة نقية", "٩٩٩", "فضة خالصة، ليّنة جدًا", "المقتنيات", "$$$$"],
            ["فضة العملات", "٩٠٠", "طراز عتيق، متينة", "تصاميم كلاسيكية", "$$"],
            ["فضة بالي", "٩٢٥", "يدوية الصنع، تفاصيل مؤكسدة", "الطراز العرقي", "$$$"],
            ["مطلية بالروديوم", "٩٢٥ أساس", "سطح أبيض لامع، مضادة للحساسية", "خواتم الخطوبة", "$$$"]
          ]
        }
      },
      {
        id: "design",
        heading: "٣. دليل التصميم والأسلوب",
        paragraphs: [
          "يجب أن يتناسب تصميم الخاتم مع أسلوبك الشخصي والغرض من الاستخدام. خاتم خطي بسيط يبدو أنيقًا في المكتب، بينما خاتم جمجمة مؤكسد يقدم تصريحًا أكثر جرأة.",
          "في الخواتم المصنوعة يدويًا، كل قطعة فريدة — هذا ليس عيبًا بل توقيع الحرفي. الإنتاج الآلي يوفر الاتساق والدقة."
        ],
        widget: "styleGuide"
      },
      {
        id: "stones",
        heading: "٤. اختيار الأحجار والتنسيق",
        paragraphs: [
          "الفضة متوافقة مع جميع الأحجار الكريمة وشبه الكريمة تقريبًا. لكن بعض التركيبات تتميز من حيث الجماليات والمتانة:",
          "الفيروز والأماثيست وحجر القمر واللازورد هي أكثر التنسيقات كلاسيكية مع الفضة.",
          "نوع الترصيع مهم أيضًا: ترصيع الأظافر يُظهر الحجر بشكل أفضل لكنه عرضة للصدمات. ترصيع الإطار يحمي الحجر للاستخدام اليومي."
        ]
      },
      {
        id: "finish",
        heading: "٥. تشطيبات السطح",
        paragraphs: [
          "تشطيب سطح الخاتم يؤثر مباشرة على مظهره ومتطلبات العناية به:"
        ],
        tips: [
          "مصقول: عاكس كالمرآة، مظهر كلاسيكي. حساس للخدوش.",
          "مطفي: مظهر ناعم وعصري. الخدوش أقل وضوحًا.",
          "مفرّش: ملمس خطي ناعم، جمالية صناعية.",
          "مؤكسد: تعتيم متعمد لتأثير عتيق. يبرز التفاصيل البارزة.",
          "مطرّق: ملمس عضوي يدوي. كل قطعة فريدة.",
          "مطلي بالروديوم: سطح أبيض لامع. لا يتغير لونه."
        ]
      },
      {
        id: "care",
        heading: "٦. العناية وطول العمر",
        paragraphs: [
          "يعتمد عمر خاتمك الفضي على روتين العناية الخاص بك. الفضة الإسترلينية تتغير لونها طبيعيًا مع الوقت — هذه حقيقة كيميائية وليست مشكلة جودة.",
          "امسح خاتمك بقطعة قماش ناعمة عند خلعه وخزّنه في كيس محكم الإغلاق.",
          "للخواتم المرصعة بالأحجار، قد يضر التنظيف بالموجات فوق الصوتية ببعض الأحجار مثل العقيق والفيروز واللؤلؤ."
        ]
      },
      {
        id: "budget",
        heading: "٧. التخطيط المالي",
        paragraphs: [
          "مجوهرات الفضة أكثر سهولة في الوصول من الذهب. لكن السعر يعتمد على الحرفية وجودة الحجر وتعقيد التصميم.",
          "خاتم فيليغري يدوي الصنع قد يكلف ٣-٥ أضعاف خاتم بسيط آلي — هذا الفرق يعكس الجهد والمهارة المبذولة."
        ]
      }
    ],
    faq: {
      heading: "الأسئلة الشائعة",
      items: [
        { q: "هل سيصبغ خاتم الفضة إصبعي باللون الأخضر؟", a: "فضة ٩٢٥ عادةً لا تفعل ذلك، لكن النحاس في السبيكة قد يترك أثرًا أخضر نادرًا في ظروف الرطوبة. طلاء الروديوم يزيل هذا تمامًا." },
        { q: "هل خاتم الفضة مناسب للخطوبة؟", a: "بالتأكيد. فضة ٩٢٥ المطلية بالروديوم تشبه الذهب الأبيض وهي بديل اقتصادي. تتحمل الاستخدام اليومي." },
        { q: "كيف أجد مقاسي عند التسوق عبر الإنترنت؟", a: "قِس القطر الداخلي لخاتم حالي بالمليمتر، أو استخدم خيط لقياس محيط إصبعك وراجع جدول المقاسات." },
        { q: "ما العرض المثالي لخاتم الرجال؟", a: "٦-٨ مم هو النطاق الأكثر شيوعًا. الأصابع الرفيعة تناسبها ٥-٦ مم، والأيدي الكبيرة ٨-١٠ مم." },
        { q: "هل يمكنني نقش خاتم فضة؟", a: "نعم، فضة ٩٢٥ مناسبة للنقش بالليزر أو اليد. يُوصى بعرض حزام لا يقل عن ٣ مم." }
      ]
    },
    sources: {
      heading: "المصادر",
      items: [
        "معهد الفضة — \"مسح الفضة العالمي ٢٠٢٥\"",
        "GIA — دليل مقاسات الخواتم",
        "معهد المعايير التركي — TS 2174: سبائك الفضة",
        "مركز معلومات المجوهرات — أدلة العناية"
      ]
    },
    related: {
      heading: "مواضيع ذات صلة",
      items: [
        { title: "ما هو عيار ٩٢٥؟", path: "/ar/manufacturing/925", cat: "التصنيع" },
        { title: "أداة قياس الخاتم", path: "/ar/tools/ring-sizer", cat: "أداة" },
        { title: "دليل التنسيق", path: "/ar/style/styling", cat: "الأناقة" }
      ]
    },
    sponsor: {
      text: "اكتشف مجموعتنا من خواتم الفضة الإسترلينية ٩٢٥ المصنوعة يدويًا.",
      cta: "شاهد على إنستغرام",
      note: "هذا المحتوى برعاية إسطنبول غوموش."
    },
    styleCards: {
      title: "دليل الأسلوب والاستخدام",
      items: [
        { icon: "💼", name: "العمل / المكتب", desc: "حزام رفيع، تصميم بسيط، مصقول أو مطلي بالروديوم", width: "٢-٤ مم" },
        { icon: "🎸", name: "يومي / عادي", desc: "حزام متوسط، تفاصيل نسيجية أو زخرفية", width: "٤-٦ مم" },
        { icon: "💪", name: "بارز / جريء", desc: "حزام عريض، مرصع أو منقوش", width: "٨-١٢ مم" },
        { icon: "💍", name: "خطوبة", desc: "مطلي بالروديوم، حجر واحد أو صف أحجار", width: "٣-٥ مم" },
        { icon: "🌿", name: "بوهيمي / عرقي", desc: "مؤكسد، يدوي، زخارف طبيعية", width: "٤-٨ مم" },
        { icon: "⚡", name: "حديث / هندسي", desc: "أشكال غير متماثلة، سطح مطفي", width: "٣-٦ مم" }
      ]
    },
    darkMode: "الوضع",
    toc: "المحتويات"
  }
};

// ─── Theme ───────────────────────────────────────────────
const fontD = "'Playfair Display', serif";
const fontB = "'Source Sans 3', sans-serif";
const fontAr = "'Noto Naskh Arabic', serif";
const gold = "#D4AF37";
const accent = "#C0C0C0";

// ─── Style Guide Widget ─────────────────────────────────
function StyleGuideWidget({ t, dark, isRTL }) {
  const [selected, setSelected] = useState(0);
  const cards = t.styleCards.items;
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const textP = dark ? "#e8e8e8" : "#1a1a2e";
  const textS = dark ? "#a0a0a0" : "#555";
  const bgCard = dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
  return (
    <div style={{ margin: "24px 0" }}>
      <h3 style={{ fontFamily: fontD, fontSize: 18, fontWeight: 600, marginBottom: 16, color: textP }}>
        {t.styleCards.title}
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 10 }}>
        {cards.map((c, i) => (
          <div key={i} onClick={() => setSelected(i)} style={{
            cursor: "pointer", padding: "16px 14px", borderRadius: 12,
            border: `1px solid ${selected === i ? gold + "66" : border}`,
            background: selected === i ? (dark ? "rgba(212,175,55,0.06)" : "rgba(212,175,55,0.08)") : bgCard,
            transition: "all 0.3s", textAlign: "center",
          }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
            <div style={{ fontWeight: 600, fontSize: 13, color: textP, marginBottom: 6 }}>{c.name}</div>
            <div style={{ fontSize: 11, color: textS, lineHeight: 1.5, marginBottom: 8 }}>{c.desc}</div>
            <div style={{
              display: "inline-block", padding: "3px 10px", borderRadius: 8,
              background: `${gold}15`, color: gold, fontSize: 11, fontWeight: 600
            }}>{c.width}</div>
          </div>
        ))}
      </div>
      {/* Ring visual preview */}
      <div style={{
        marginTop: 20, padding: 20, borderRadius: 14, textAlign: "center",
        background: dark ? "rgba(192,192,192,0.03)" : "rgba(192,192,192,0.06)",
        border: `1px solid ${border}`
      }}>
        <svg width="120" height="120" viewBox="0 0 120 120">
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={accent} />
              <stop offset="100%" stopColor={gold} />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r={42 + selected * 2} fill="none" stroke="url(#ringGrad)"
            strokeWidth={3 + selected * 1.5} opacity="0.8" />
          <circle cx="60" cy="60" r={42 + selected * 2} fill="none" stroke={gold}
            strokeWidth="0.5" opacity="0.3" />
          <text x="60" y="58" textAnchor="middle" fontSize="10" fill={textS} fontFamily={fontB}>
            {cards[selected].name}
          </text>
          <text x="60" y="72" textAnchor="middle" fontSize="9" fill={gold} fontFamily={fontB} fontWeight="600">
            {cards[selected].width}
          </text>
        </svg>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────
export default function SilverAtlasRingSelectionArticle() {
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
      fontFamily: isRTL ? fontAr : fontB, background: bgMain, color: textP,
      minHeight: "100vh", lineHeight: 1.6,
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
            <span key={i}>
              {i > 0 && <span style={{ margin: "0 4px", opacity: 0.4 }}>/</span>}
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
            ? "linear-gradient(135deg, #1a1a2e 0%, #2a2a3e 50%, #1a1a2e 100%)"
            : "linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 50%, #e8e8e8 100%)",
          display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
        }}>
          <div style={{ textAlign: "center", zIndex: 1 }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="heroRing" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={accent} />
                  <stop offset="100%" stopColor={gold} />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="36" fill="none" stroke="url(#heroRing)" strokeWidth="8" />
              <circle cx="50" cy="18" r="6" fill={gold} opacity="0.8" />
            </svg>
            <div style={{ fontSize: 12, color: textS, letterSpacing: "0.12em", marginTop: 8 }}>
              RING SELECTION GUIDE
            </div>
          </div>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{
              position: "absolute", width: 80 + i * 50, height: 80 + i * 50,
              borderRadius: "50%", border: `1px solid ${accent}${(10 - i * 2).toString(16).padStart(2, "0")}`,
              top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            }} />
          ))}
        </div>

        {/* TOC */}
        <div style={{
          marginBottom: 36, padding: "20px 24px", borderRadius: 12,
          border: `1px solid ${border}`, background: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
        }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: gold }}>{t.toc}</h3>
          {t.sections.filter(s => s.heading).map((s, i) => (
            <a key={s.id} href={`#${s.id}`} style={{
              display: "block", fontSize: 13, color: textS, textDecoration: "none",
              padding: "4px 0", transition: "color 0.2s",
            }} onMouseEnter={e => e.currentTarget.style.color = gold}
               onMouseLeave={e => e.currentTarget.style.color = textS}>
              {s.heading}
            </a>
          ))}
        </div>

        {/* Sections */}
        {t.sections.map((sec) => (
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

            {/* Table */}
            {sec.table && (
              <div style={{
                overflowX: "auto", margin: "20px 0", borderRadius: 12, border: `1px solid ${border}`,
              }}>
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
                      <tr key={ri} style={{
                        background: row[1] === "925" ? (dark ? "rgba(212,175,55,0.06)" : "rgba(212,175,55,0.08)") : "transparent",
                      }}>
                        {row.map((cell, ci) => (
                          <td key={ci} style={{
                            padding: "10px 14px", borderBottom: `1px solid ${border}`,
                            color: ci === 0 ? textP : textS, fontWeight: ci === 0 ? 600 : 400, whiteSpace: "nowrap",
                          }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Style Guide Widget */}
            {sec.widget === "styleGuide" && (
              <StyleGuideWidget t={t} dark={dark} isRTL={isRTL} />
            )}

            {/* Tips */}
            {sec.tips && (
              <div style={{
                background: dark ? "rgba(192,192,192,0.03)" : "rgba(192,192,192,0.06)",
                border: `1px solid ${border}`, borderRadius: 12, padding: "20px 24px", marginTop: 16,
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
          <h2 style={{ fontFamily: isRTL ? fontAr : fontD, fontSize: 24, fontWeight: 600, marginBottom: 20 }}>
            {t.faq.heading}
          </h2>
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
                  fontFamily: isRTL ? fontAr : fontB, textAlign: isRTL ? "right" : "left", gap: 12,
                }}>
                  <span style={{ flex: 1 }}>{item.q}</span>
                  <span style={{
                    fontSize: 18, color: textS, transition: "transform 0.3s",
                    transform: openFaq === i ? "rotate(45deg)" : "rotate(0)", flexShrink: 0,
                  }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 20px 16px", fontSize: 14, lineHeight: 1.7, color: textS }}>{item.a}</div>
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
            <div key={i} style={{ fontSize: 13, color: textS, lineHeight: 1.6, marginBottom: 6, display: "flex", gap: 8 }}>
              <span style={{ color: accent, fontWeight: 600, flexShrink: 0 }}>[{i + 1}]</span>
              <span>{s}</span>
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
            fontSize: 13, fontWeight: 600, textDecoration: "none", transition: "transform 0.2s",
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
