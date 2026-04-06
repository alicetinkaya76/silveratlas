import { useState, useEffect } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Kültür", "Düğün Gelenekleri"],
    category: "Kültür", title: "Gümüş Düğün Gelenekleri",
    subtitle: "Beş kıtadan gümüşle yazılan evlilik hikayeleri — ritüeller, semboller ve takı gelenekleri",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "11 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Gümüş, dünya genelinde evlilik ritüellerinde altından bile eski bir geçmişe sahiptir. Antik Roma'da gelin, gümüş bir sikkeyi sağ ayakkabısına koyar; Hint gelini, gümüş ayak halkaları takardı. Bugün hâlâ pek çok kültürde gümüş, birliğin, saflığın ve bereketin simgesi olarak düğünlerin ayrılmaz parçasıdır.",
        "Bu makale, beş kıtadan gümüş düğün geleneklerini inceliyor: takı ritüellerinden hediye adetlerine, sembolik anlamlardan modern yorumlara."
      ]},
      { id: "turkiye", heading: "Türkiye: Altın Günü'nden Gümüş Takı Setine", paragraphs: [
        "Türk düğün geleneğinde gelin takısı merkezî bir rol oynar. Geleneksel olarak altın tercih edilse de, gümüş takı setleri özellikle genç nesil arasında giderek popülerleşmektedir. Rodaj kaplamalı 925 gümüş, beyaz altına çok benzer görünümüyle bütçe dostu bir alternatif sunar.",
        "Anadolu'nun bazı bölgelerinde gelin, kaynanasından gümüş bir bilezik alır — bu 'kabul bilezik', aileye katılımın sembolüdür. Trabzon'da hasır işi gümüş bilezikler, geleneksel gelin takılarının vazgeçilmez parçasıdır.",
        "'Gümüş düğün' (25. yıl kutlaması), evliliğin dayanıklılığını ve gümüşün zamansız değerini birleştiren evrensel bir gelenek olarak Türkiye'de de yaygın biçimde kutlanmaktadır."
      ]},
      { id: "hindistan", heading: "Hindistan: Ayak Halkasından Mangalsutra'ya", paragraphs: [
        "Hint düğünleri, dünyanın en gümüş-yoğun törenleridir. Güney Hindistan'da gümüş ayak halkaları (metti), evli kadının sembolüdür — tıpkı Batı'daki alyans gibi. Bu halkaların gümüşten yapılması zorunludur; altın, ayaklarda kullanılması uygun görülmez.",
        "Rajasthan'da gelin, kiloları bulan gümüş takı setleriyle süslenir: çok sıralı kolyeler (haar), geniş bilezikler (kada), burun halkaları (nath) ve başlıklar (borla). Bu takılar hem estetik hem ekonomik güvence işlevi görür.",
        "Dhanteras festivali, düğün öncesi gümüş alım sezonunun zirvesidir. Aileler, gelin çeyizine gümüş eşyalar ekleyerek bereket dileklerini somutlaştırır."
      ]},
      { id: "dunya", heading: "Dünyadan Gümüş Düğün Gelenekleri", paragraphs: [
        "Her kültür, gümüşe kendine özgü bir anlam yüklemiştir. İşte dünyanın farklı köşelerinden gümüş düğün gelenekleri:"
      ], widget: "traditions" },
      { id: "sembol", heading: "Gümüşün Düğündeki Sembolik Anlamları", paragraphs: [
        "Gümüş, evlilik bağlamında evrensel olarak şu anlamları taşır: Ay ile ilişkisi nedeniyle kadınlık ve doğurganlık sembolü; parlaklığı ve yansıtıcılığıyla saflık ve dürüstlük imgesi; kararıp tekrar parlatılabilmesiyle zorlukları aşan dayanıklı birlikteliğin metaforu.",
        "25. evlilik yıldönümünün 'gümüş düğün' olarak anılması, Orta Avrupa kökenlidir. Gümüşün saflığı ve dayanıklılığı, çeyrek asırlık bir evliliğin değerini simgeler. Bu gelenek bugün dünya genelinde kabul görmektedir.",
        "Bazı kültürlerde gümüş, kötü ruhları uzaklaştırdığına inanılır. Balkan geleneklerinde gelin çeyizine gümüş bir ayna konulur — bu ayna, nazarı yansıttığına ve kötü enerjileri çevireceğine inanılır."
      ]},
      { id: "modern", heading: "Modern Trendler", paragraphs: [
        "Günümüzde gümüş düğün takıları güçlü bir yükseliş trendindedir. Minimalist tasarımlar, sürdürülebilir materyaller ve kişiselleştirme (gravür, özel motifler) modern çiftlerin tercihlerini şekillendirmektedir.",
        "Lab-grown taşlar ve geri dönüşüm gümüşü kombinasyonu, çevre bilinçli çiftler arasında popülerleşmektedir. 'Etik düğün' hareketi, takı seçimini de etkileyen bir trend haline gelmiştir.",
        "Destination wedding (varış noktası düğünü) konseptinde yerel gümüş zanaatları tercih edilmektedir: Bali'de Bali gümüşü, Fas'ta Berber gümüşü, Meksika'da Taxco gümüşü — düğün hem kişisel hem kültürel bir deneyime dönüşmektedir."
      ]}
    ],
    traditionCards: {
      title: "Dünyadan Gümüş Düğün Gelenekleri",
      items: [
        { icon: "🇮🇪", name: "İrlanda — Claddagh", desc: "Kalp, taç ve eller motifli gümüş Claddagh yüzüğü. Aşk, sadakat ve dostluğu simgeler. Yüzüğün yönü ilişki durumunu gösterir." },
        { icon: "🇲🇽", name: "Meksika — Arras", desc: "13 gümüş sikke (arras), damat tarafından geline verilir. Paylaşma ve sorumluluk taahhüdü. İspanyol-Katolik geleneği." },
        { icon: "🇳🇴", name: "Norveç — Sølje", desc: "Geleneksel gümüş gelin tacı (brurekrone) ve gögüs broşu. Viking çağından kalma dövme gümüş geleneği." },
        { icon: "🇪🇹", name: "Etiyopya — Habesha", desc: "Gümüş haç kolyeleri ve alın süsleri. Kıpti Hristiyan geleneğinde gümüş, kutsallığı temsil eder." },
        { icon: "🇲🇦", name: "Fas — Berber", desc: "Amazigh (Berber) gelinleri, büyük gümüş fibulalar (tizerzai) ve el bağları takar. Geometrik motifler koruyucu anlam taşır." },
        { icon: "🇨🇳", name: "Çin (Miao)", desc: "Miao halkının gelin başlığı 5-10 kg gümüş içerebilir. Ejderha, anka kuşu ve çiçek motifleri. En gösterişli gümüş gelin geleneği." },
        { icon: "🇬🇷", name: "Yunanistan — Stefana", desc: "Gümüş bağlı çelenk çifti (stefana), çiftin başlarını birleştiren kurdeleyle bağlanır. Birliğin sembolü." },
        { icon: "🇵🇪", name: "Peru — Tupu", desc: "Gümüş tupu broşları, And Dağları geleneğinde şal sabitleme ve statü göstergesi. İnka mirasının devamı." },
        { icon: "🇵🇱", name: "Polonya — 25. Yıl", desc: "Gümüş düğün kutlaması özel öneme sahip. Çift, yeni gümüş alyanslar takar ve orijinal düğünü yeniden canlandırır." },
        { icon: "🇯🇵", name: "Japonya — Mizuhiki", desc: "Gümüş ve beyaz mizuhiki (düğüm sanatı) hediye süslemesi. Gümüş zarf (shugi-bukuro) içinde para hediyesi." }
      ]
    },
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "25. yıl neden 'gümüş düğün' olarak anılır?", a: "Bu gelenek, Orta Avrupa'da (özellikle Almanya) 15. yüzyılda başlamıştır. Gümüşün zamana dayanıklılığı ve artan patinası, 25 yıllık evliliğin derinleşen değerini simgeler." },
        { q: "Gümüş alyans günlük kullanıma uygun mudur?", a: "Evet, özellikle rodaj kaplamalı 925 gümüş alyanslar son derece dayanıklıdır. Altın ve platine kıyasla daha uygun fiyatlıdır ve düzenli bakımla yıllarca yeni gibi kalır." },
        { q: "Hint gümüş ayak halkası neden sadece gümüşten yapılır?", a: "Hindu geleneğinde altın, Lakshmi'nin (bereket tanrıçası) metali olarak kutsal kabul edilir ve ayaklarda kullanılması saygısızlık sayılır. Gümüş ise Ay enerjisiyle ilişkilendirilir ve tıbbi faydaları olduğuna inanılır." },
        { q: "Claddagh yüzüğünün yönü ne anlama gelir?", a: "Kalp dışa (parmak ucuna doğru): Kalbi açık, bekar. Kalp içe (bileğe doğru): Kalbi birinin olmuş, ilişkide veya evli." },
        { q: "Modern düğünler için gümüş takı trendleri neler?", a: "Minimalist tasarımlar, kişiselleştirilmiş gravürler, lab-grown taşlarla gümüş kombinasyonlar ve vintage/antik gümüş parçaların kullanımı en belirgin trendlerdir." }
      ]
    },
    sources: { heading: "Kaynaklar", items: [
      "The Silver Institute — \"Silver in Culture & Tradition\"",
      "Victoria & Albert Museum — Jewelry Collection Documentation",
      "Oppi Untracht — \"Traditional Jewelry of India\"",
      "National Museum of Ireland — Claddagh Ring History",
      "UNESCO — Intangible Cultural Heritage Registry"
    ]},
    related: { heading: "İlgili Konular", items: [
      { title: "Hint Alt Kıtası Gümüşü", path: "/tr/tarih/hint", cat: "Tarih" },
      { title: "Gümüş Sembolizmi", path: "/tr/kultur/sembolizm", cat: "Kültür" },
      { title: "Styling Rehberi", path: "/tr/stil/styling", cat: "Stil" }
    ]},
    sponsor: { text: "Düğün koleksiyonumuzu keşfedin — 925 ayar gümüş.", cta: "Instagram'da Gör", note: "İstanbul Gümüş sponsorluğundadır." },
    darkMode: "Mod", toc: "İçindekiler"
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Culture", "Wedding Traditions"],
    category: "Culture", title: "Silver Wedding Traditions",
    subtitle: "Marriage stories written in silver from five continents — rituals, symbols, and jewelry traditions",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "11 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Silver has an even older history in marriage rituals worldwide than gold. In ancient Rome, the bride placed a silver coin in her right shoe; Indian brides wore silver toe rings. Today, silver remains an integral part of weddings in many cultures — symbolizing unity, purity, and prosperity.",
        "This article examines silver wedding traditions from five continents: from jewelry rituals to gift customs, symbolic meanings to modern interpretations."
      ]},
      { id: "turkey", heading: "Turkey: From Gold Day to Silver Jewelry Sets", paragraphs: [
        "Bridal jewelry plays a central role in Turkish weddings. While gold is traditionally preferred, silver sets are increasingly popular among younger generations. Rhodium-plated 925 silver offers a budget-friendly alternative resembling white gold.",
        "In some regions of Anatolia, the bride receives a silver bracelet from her mother-in-law — this 'acceptance bracelet' symbolizes joining the family. In Trabzon, woven silver bracelets are essential traditional bridal jewelry.",
        "The 'silver wedding' (25th anniversary) is widely celebrated in Turkey, combining marriage durability with silver's timeless value."
      ]},
      { id: "india", heading: "India: From Toe Rings to Mangalsutra", paragraphs: [
        "Indian weddings are the world's most silver-intensive ceremonies. In South India, silver toe rings (metti) symbolize married status. These must be silver; gold on feet is considered inappropriate.",
        "In Rajasthan, brides are adorned with kilograms of silver jewelry: multi-strand necklaces (haar), wide bangles (kada), nose rings (nath), and headdresses (borla).",
        "The Dhanteras festival marks peak pre-wedding silver buying season. Families add silverware to the bridal trousseau to materialize blessings of prosperity."
      ]},
      { id: "world", heading: "Silver Wedding Traditions from Around the World", paragraphs: [
        "Each culture assigns silver its own unique meaning. Here are silver wedding traditions from different corners of the globe:"
      ], widget: "traditions" },
      { id: "symbolism", heading: "Silver's Symbolic Meanings in Weddings", paragraphs: [
        "Silver universally carries these meanings in marriage: femininity and fertility through its association with the Moon; purity and honesty through its brightness and reflectivity; enduring partnership through its ability to tarnish and be polished again.",
        "The 25th anniversary being called a 'silver wedding' originated in Central Europe. Silver's purity and durability symbolize a quarter-century marriage's value.",
        "In some cultures, silver is believed to ward off evil spirits. In Balkan traditions, a silver mirror is placed in the bridal trousseau — believed to reflect the evil eye."
      ]},
      { id: "modern", heading: "Modern Trends", paragraphs: [
        "Silver wedding jewelry is experiencing a strong upward trend today. Minimalist designs, sustainable materials, and personalization (engraving, custom motifs) shape modern couples' preferences.",
        "Lab-grown stones combined with recycled silver are popular among eco-conscious couples. The 'ethical wedding' movement has made jewelry selection part of the sustainability conversation.",
        "In destination weddings, local silver crafts are preferred: Balinese silver in Bali, Berber silver in Morocco, Taxco silver in Mexico — weddings become both personal and cultural experiences."
      ]}
    ],
    traditionCards: {
      title: "Silver Wedding Traditions Worldwide",
      items: [
        { icon: "🇮🇪", name: "Ireland — Claddagh", desc: "Silver Claddagh ring with heart, crown, and hands. Symbolizes love, loyalty, and friendship. Ring direction indicates relationship status." },
        { icon: "🇲🇽", name: "Mexico — Arras", desc: "13 silver coins (arras) given by groom to bride. Commitment to sharing and responsibility. Spanish-Catholic tradition." },
        { icon: "🇳🇴", name: "Norway — Sølje", desc: "Traditional silver bridal crown (brurekrone) and chest brooch. Hammered silver tradition from the Viking age." },
        { icon: "🇪🇹", name: "Ethiopia — Habesha", desc: "Silver cross necklaces and forehead ornaments. Silver represents sanctity in Coptic Christian tradition." },
        { icon: "🇲🇦", name: "Morocco — Berber", desc: "Amazigh brides wear large silver fibulae (tizerzai) and hand chains. Geometric motifs carry protective meaning." },
        { icon: "🇨🇳", name: "China (Miao)", desc: "Miao bridal headdress can contain 5-10 kg of silver. Dragon, phoenix, and flower motifs. The most elaborate silver bridal tradition." },
        { icon: "🇬🇷", name: "Greece — Stefana", desc: "Silver-linked wreath pair (stefana), connecting the couple's heads with a ribbon. Symbol of unity." },
        { icon: "🇵🇪", name: "Peru — Tupu", desc: "Silver tupu brooches, Andean tradition for shawl fastening and status display. Continuation of Inca heritage." },
        { icon: "🇵🇱", name: "Poland — 25th Year", desc: "Silver wedding celebration holds special significance. The couple wears new silver rings and reenacts their original wedding." },
        { icon: "🇯🇵", name: "Japan — Mizuhiki", desc: "Silver and white mizuhiki (knot art) gift decoration. Cash gift in silver envelope (shugi-bukuro)." }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Why is the 25th anniversary called a 'silver wedding'?", a: "This tradition began in Central Europe (especially Germany) in the 15th century. Silver's resilience and deepening patina symbolize a 25-year marriage's growing value." },
        { q: "Are silver wedding bands suitable for daily wear?", a: "Yes, especially rhodium-plated 925 silver bands are extremely durable. More affordable than gold and platinum, they stay like-new for years with regular care." },
        { q: "Why are Indian toe rings only made of silver?", a: "In Hindu tradition, gold is sacred as Lakshmi's metal and wearing it on feet is considered disrespectful. Silver is associated with Moon energy and believed to have health benefits." },
        { q: "What does Claddagh ring direction mean?", a: "Heart outward (toward fingertips): Heart is open, single. Heart inward (toward wrist): Heart belongs to someone, in relationship or married." },
        { q: "What are modern silver wedding jewelry trends?", a: "Minimalist designs, personalized engravings, lab-grown stone combinations, and use of vintage/antique silver pieces are the most notable trends." }
      ]
    },
    sources: { heading: "Sources", items: [
      "The Silver Institute — \"Silver in Culture & Tradition\"",
      "Victoria & Albert Museum — Jewelry Collection Documentation",
      "Oppi Untracht — \"Traditional Jewelry of India\"",
      "National Museum of Ireland — Claddagh Ring History",
      "UNESCO — Intangible Cultural Heritage Registry"
    ]},
    related: { heading: "Related Topics", items: [
      { title: "Indian Silver", path: "/en/history/indian", cat: "History" },
      { title: "Silver Symbolism", path: "/en/culture/symbolism", cat: "Culture" },
      { title: "Styling Guide", path: "/en/style/styling", cat: "Style" }
    ]},
    sponsor: { text: "Explore our wedding collection — 925 sterling silver.", cta: "See on Instagram", note: "Sponsored by İstanbul Gümüş." },
    darkMode: "Mode", toc: "Contents"
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة معرفة الفضة",
    breadcrumb: ["الرئيسية", "الثقافة", "تقاليد الأعراس"],
    category: "الثقافة", title: "تقاليد الأعراس الفضية",
    subtitle: "قصص زواج مكتوبة بالفضة من خمس قارات — طقوس ورموز وتقاليد مجوهرات",
    meta: { author: "توران إرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١١ دقائق قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "للفضة تاريخ في طقوس الزواج أقدم حتى من الذهب. في روما القديمة وضعت العروس عملة فضية في حذائها؛ والعروس الهندية ارتدت خواتم فضية للقدم. اليوم لا تزال الفضة جزءًا لا يتجزأ من الأعراس في كثير من الثقافات.",
        "يتناول هذا المقال تقاليد الأعراس الفضية من خمس قارات."
      ]},
      { id: "turkey", heading: "تركيا: من يوم الذهب إلى أطقم الفضة", paragraphs: [
        "تلعب مجوهرات العروس دورًا محوريًا في الأعراس التركية. رغم تفضيل الذهب تقليديًا، تزداد شعبية أطقم الفضة بين الأجيال الشابة.",
        "في بعض مناطق الأناضول، تتلقى العروس سوارًا فضيًا من حماتها — رمز الانضمام للعائلة.",
        "'العرس الفضي' (الذكرى الخامسة والعشرون) يُحتفل به على نطاق واسع في تركيا."
      ]},
      { id: "india", heading: "الهند: من خواتم القدم إلى المانغالسوترا", paragraphs: [
        "الأعراس الهندية هي أكثر المراسم كثافة في استخدام الفضة. خواتم القدم الفضية (ميتي) ترمز لحالة الزواج.",
        "في راجستان تُزيّن العروس بكيلوغرامات من المجوهرات الفضية.",
        "مهرجان دانتيراس يمثل ذروة شراء الفضة قبل الأعراس."
      ]},
      { id: "world", heading: "تقاليد الأعراس الفضية من حول العالم", paragraphs: [
        "لكل ثقافة معناها الخاص للفضة في الأعراس:"
      ], widget: "traditions" },
      { id: "symbolism", heading: "المعاني الرمزية للفضة في الأعراس", paragraphs: [
        "الفضة تحمل عالميًا معاني الأنوثة والخصوبة بارتباطها بالقمر؛ والنقاء والصدق بلمعانها؛ والشراكة المتينة بقدرتها على التجدد بعد التأكسد.",
        "تسمية الذكرى الخامسة والعشرين بـ'العرس الفضي' نشأت في أوروبا الوسطى.",
        "في بعض الثقافات يُعتقد أن الفضة تطرد الأرواح الشريرة."
      ]},
      { id: "modern", heading: "الاتجاهات الحديثة", paragraphs: [
        "مجوهرات الأعراس الفضية تشهد ارتفاعًا قويًا. التصاميم البسيطة والمواد المستدامة والتخصيص تشكل تفضيلات الأزواج الحديثين.",
        "الأحجار المزروعة مخبريًا مع الفضة المعاد تدويرها تحظى بشعبية بين الأزواج المهتمين بالبيئة.",
        "في أعراس الوجهات، تُفضل الحرف الفضية المحلية: فضة بالي في بالي، فضة الأمازيغ في المغرب."
      ]}
    ],
    traditionCards: {
      title: "تقاليد الأعراس الفضية حول العالم",
      items: [
        { icon: "🇮🇪", name: "أيرلندا — كلاداغ", desc: "خاتم فضي بقلب وتاج ويدين. يرمز للحب والولاء والصداقة." },
        { icon: "🇲🇽", name: "المكسيك — أراس", desc: "١٣ عملة فضية يقدمها العريس للعروس. تقليد إسباني كاثوليكي." },
        { icon: "🇳🇴", name: "النرويج — سولجه", desc: "تاج عروس فضي تقليدي وبروش صدر. تقليد فايكنغ." },
        { icon: "🇪🇹", name: "إثيوبيا — حبشة", desc: "قلائد صليب فضية وزينة جبين. الفضة ترمز للقداسة في التقليد القبطي." },
        { icon: "🇲🇦", name: "المغرب — أمازيغ", desc: "العرائس الأمازيغيات يرتدين دبابيس فضية كبيرة. الزخارف الهندسية تحمل معنى حماية." },
        { icon: "🇨🇳", name: "الصين (مياو)", desc: "غطاء رأس عروس المياو قد يحتوي ٥-١٠ كغ فضة. زخارف تنين وطائر فينيق." },
        { icon: "🇬🇷", name: "اليونان — ستيفانا", desc: "إكليلان فضيان مرتبطان يوضعان على رأسي العروسين. رمز الوحدة." },
        { icon: "🇵🇪", name: "بيرو — توبو", desc: "دبابيس توبو الفضية، تقليد الأنديز لتثبيت الشال. إرث حضارة الإنكا." },
        { icon: "🇵🇱", name: "بولندا — السنة ٢٥", desc: "احتفال العرس الفضي ذو أهمية خاصة. الزوجان يرتديان خواتم فضية جديدة." },
        { icon: "🇯🇵", name: "اليابان — ميزوهيكي", desc: "زينة هدايا من ميزوهيكي فضي وأبيض. هدية نقدية في ظرف فضي." }
      ]
    },
    faq: { heading: "الأسئلة الشائعة", items: [
      { q: "لماذا تسمى الذكرى الخامسة والعشرون 'العرس الفضي'؟", a: "بدأ هذا التقليد في أوروبا الوسطى في القرن الخامس عشر. متانة الفضة وزنجارها المتعمق يرمزان لقيمة الزواج المتنامية." },
      { q: "هل خواتم الزفاف الفضية مناسبة للاستخدام اليومي؟", a: "نعم، خاصة فضة ٩٢٥ المطلية بالروديوم متينة للغاية وأقل تكلفة من الذهب." },
      { q: "لماذا تُصنع خواتم القدم الهندية من الفضة فقط؟", a: "في التقليد الهندوسي، الذهب مقدس كمعدن لاكشمي واستخدامه على القدمين يُعتبر عدم احترام." },
      { q: "ما الاتجاهات الحديثة لمجوهرات الأعراس الفضية؟", a: "التصاميم البسيطة والنقش المخصص والأحجار المزروعة مخبريًا والقطع العتيقة." }
    ]},
    sources: { heading: "المصادر", items: ["معهد الفضة","متحف فيكتوريا وألبرت","أوبي أونتراخت","المتحف الوطني لأيرلندا","اليونسكو — سجل التراث غير المادي"] },
    related: { heading: "مواضيع ذات صلة", items: [
      { title: "الفضة الهندية", path: "/ar/history/indian", cat: "التاريخ" },
      { title: "رمزية الفضة", path: "/ar/culture/symbolism", cat: "الثقافة" },
      { title: "دليل التنسيق", path: "/ar/style/styling", cat: "الأناقة" }
    ]},
    sponsor: { text: "اكتشف مجموعة الأعراس — فضة إسترلينية ٩٢٥.", cta: "شاهد على إنستغرام", note: "برعاية إسطنبول غوموش." },
    darkMode: "الوضع", toc: "المحتويات"
  }
};

const fontD="'Playfair Display',serif",fontB="'Source Sans 3',sans-serif",fontAr="'Noto Naskh Arabic',serif",gold="#D4AF37",accent="#C0C0C0";

function TraditionCards({t,dark,isRTL}){
  const[sel,setSel]=useState(null);
  const cards=t.traditionCards.items;
  const bdr=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)";
  const tp=dark?"#e8e8e8":"#1a1a2e",ts=dark?"#a0a0a0":"#555";
  return(
    <div style={{margin:"24px 0"}}>
      <h3 style={{fontFamily:fontD,fontSize:18,fontWeight:600,marginBottom:16,color:tp}}>{t.traditionCards.title}</h3>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(170px,1fr))",gap:10}}>
        {cards.map((c,i)=>(
          <div key={i} onClick={()=>setSel(sel===i?null:i)} style={{cursor:"pointer",padding:"16px 14px",borderRadius:12,border:`1px solid ${sel===i?gold+"66":bdr}`,background:sel===i?(dark?"rgba(212,175,55,0.06)":"rgba(212,175,55,0.08)"):(dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.02)"),transition:"all 0.3s"}}>
            <div style={{fontSize:28,marginBottom:8}}>{c.icon}</div>
            <div style={{fontWeight:600,fontSize:14,color:tp,marginBottom:6}}>{c.name}</div>
            {sel===i&&<div style={{fontSize:12,color:ts,lineHeight:1.6,paddingTop:8,borderTop:`1px solid ${bdr}`}}>{c.desc}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SilverAtlasWeddingArticle(){
  const[lang,setLang]=useState("tr");const[dark,setDark]=useState(true);const[openFaq,setOpenFaq]=useState(null);
  const t=T[lang],isRTL=lang==="ar";
  const tp=dark?"#e8e8e8":"#1a1a2e",ts=dark?"#a0a0a0":"#555",bgM=dark?"#0f0f14":"#fafaf5",bgC=dark?"#16161c":"#ffffff",bdr=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)";
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
          <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",fontSize:13,color:ts,paddingBottom:20,borderBottom:`1px solid ${bdr}`}}><span>{t.meta.author}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.date}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.readTime}</span></div>
        </div>
        <div style={{height:220,borderRadius:16,marginBottom:36,overflow:"hidden",background:dark?"linear-gradient(135deg,#1a1a2e 0%,#2e1a2e 50%,#1a1a2e 100%)":"linear-gradient(135deg,#f0e6f0 0%,#e6d2e6 50%,#f0e6f0 100%)",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{textAlign:"center"}}><div style={{fontSize:52}}>💍</div><div style={{fontFamily:fontD,fontSize:16,fontWeight:600,marginTop:8,background:`linear-gradient(135deg,${accent},${gold})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>SILVER WEDDING TRADITIONS</div></div>
        </div>
        <div style={{marginBottom:36,padding:"20px 24px",borderRadius:12,border:`1px solid ${bdr}`,background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)"}}>
          <h3 style={{fontSize:14,fontWeight:600,marginBottom:12,color:gold}}>{t.toc}</h3>
          {t.sections.filter(s=>s.heading).map(s=>(<a key={s.id} href={`#${s.id}`} style={{display:"block",fontSize:13,color:ts,textDecoration:"none",padding:"4px 0"}}>{s.heading}</a>))}
        </div>
        {t.sections.map(sec=>(
          <section key={sec.id} id={sec.id} style={{marginBottom:36}}>
            {sec.heading&&<h2 style={{fontFamily:isRTL?fontAr:fontD,fontSize:24,fontWeight:600,marginBottom:16,paddingTop:8}}>{sec.heading}</h2>}
            {sec.paragraphs.map((p,pi)=>(<p key={pi} style={{fontSize:15,lineHeight:1.8,color:ts,marginBottom:14}}>{p}</p>))}
            {sec.widget==="traditions"&&<TraditionCards t={t} dark={dark} isRTL={isRTL}/>}
          </section>
        ))}
        <section style={{marginBottom:36,marginTop:48}}>
          <h2 style={{fontFamily:isRTL?fontAr:fontD,fontSize:24,fontWeight:600,marginBottom:20}}>{t.faq.heading}</h2>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {t.faq.items.map((item,i)=>(<div key={i} style={{border:`1px solid ${openFaq===i?gold+"44":bdr}`,borderRadius:12,overflow:"hidden",background:openFaq===i?(dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.04)"):"transparent"}}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{width:"100%",border:"none",cursor:"pointer",background:"transparent",padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",color:tp,fontSize:14,fontWeight:500,fontFamily:isRTL?fontAr:fontB,textAlign:isRTL?"right":"left",gap:12}}><span style={{flex:1}}>{item.q}</span><span style={{fontSize:18,color:ts,transition:"transform 0.3s",transform:openFaq===i?"rotate(45deg)":"rotate(0)",flexShrink:0}}>+</span></button>{openFaq===i&&<div style={{padding:"0 20px 16px",fontSize:14,lineHeight:1.7,color:ts}}>{item.a}</div>}</div>))}
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
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"10px 24px",borderRadius:10,background:`linear-gradient(135deg,${accent},${gold})`,color:"#0f0f14",fontSize:13,fontWeight:600,textDecoration:"none"}}>📸 {t.sponsor.cta}</a>
          <p style={{fontSize:11,color:ts,marginTop:14,opacity:0.7}}>{t.sponsor.note}</p>
        </div>
      </article>
      <footer style={{borderTop:`1px solid ${bdr}`,padding:24,textAlign:"center",background:dark?"#0c0c10":"#f5f5f0"}}><div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:8}}><div style={{width:22,height:22,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:14}}>{t.nav}</span></div><p style={{fontSize:11,color:ts}}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p></footer>
    </div>
  );
}
