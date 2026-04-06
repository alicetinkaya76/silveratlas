import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Kültür", "Anadolu Folklorunda Gümüş"],
    category: "Kültür",
    title: "Anadolu Folklorunda Gümüş",
    subtitle: "Nazarlıktan çeyize, yöresel takılardan ritüellere — Anadolu'nun gümüş hafızası",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "11 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Anadolu, binlerce yıllık kesintisiz gümüş işçiliği geleneğine sahip dünyanın sayılı coğrafyalarından biridir. Hitit mühürlerinden Osmanlı telkârisine, Yörük tokalıklarından Trabzon hasırına kadar gümüş, Anadolu insanının gündelik yaşamında, ritüellerinde ve kimliğinde derin bir yer tutmuştur.",
          "Bu makale, gümüşün Anadolu folklorundaki çok katmanlı rolünü — koruyucu muska, sosyal statü göstergesi, çeyiz geleneği ve yöresel kimlik sembolü olarak — kapsamlı şekilde incelemektedir.",
        ],
      },
      {
        id: "koruyucu", heading: "Koruyucu ve Şifalı Gümüş",
        paragraphs: [
          "Anadolu'da gümüşün koruyucu güce sahip olduğu inancı çok eskilere dayanır. 'Nazar'a (kötü göze) karşı en yaygın korunma yöntemlerinden biri gümüş nazarlık takmaktır. Gümüşün Ay ile ilişkilendirilmesi, ona 'aydınlatıcı' ve 'arındırıcı' nitelikler yüklemiştir.",
          "Bebeklere ve çocuklara takılan gümüş muska (muska-yı şerife) geleneği hâlâ canlıdır. İçine dua yazılmış gümüş muska kutuları, özellikle Güneydoğu Anadolu ve Doğu Anadolu'da yaygın olarak kullanılmaktadır.",
          "Yörük ve Türkmen topluluklarında kadınların başlık ve göğüslük gümüş takıları, yalnızca süs değil aynı zamanda nazara karşı koruyucu işlev taşır. Ses çıkaran gümüş zincir ve çıngıraklar, kötü ruhları uzaklaştırdığına inanılır.",
        ],
      },
      {
        id: "ceyiz", heading: "Çeyiz Geleneği ve Gümüş",
        paragraphs: [
          "Anadolu düğün geleneğinde gümüş, çeyizin en değerli bileşenlerinden biridir. 'Takı töreni' veya 'düğün takısı' adıyla bilinen ritüelde geline altın ve gümüş takılar hediye edilir.",
          "Geleneksel olarak çeyizde yer alan gümüş kalemler şunlardır: gümüş tepsi, şekerlik, kahve fincan seti, ayna, tarak seti, gümüş kutu (el sandığı) ve gümüş takı koleksiyonu. Bu eşyalar hem kullanım amaçlı hem de aile mirasının aktarımı işlevi görür.",
          "Bazı yörelerde 'ağırlık' (nişan hediyesi) olarak verilen gümüş kemer, kız tarafının sosyal statüsünü yansıtır. Güneydoğu'da 'şalvar kemeri' veya 'kuşak tokalığı' olarak bilinen gümüş kemerler, incelikli telkâri işçiliğiyle üretilir.",
        ],
      },
      {
        id: "yoresel", heading: "Yöresel Gümüş Takı Geleneği",
        paragraphs: [
          "Anadolu'nun her bölgesinin kendine özgü gümüş takı formları vardır. Bu çeşitlilik, coğrafi izolasyon ve kültürel etkileşimlerin birlikte yarattığı zengin bir mirası yansıtır.",
        ],
        widget: "regions",
      },
      {
        id: "trabzon", heading: "Trabzon Hasırı: Doğu Karadeniz'in İmzası",
        paragraphs: [
          "Trabzon hasırı (hasır örgü), ince gümüş tellerin dokuma tekniğiyle birleştirildiği eşsiz bir Karadeniz takı geleneğidir. 'Hasır bilezik', 'hasır kolye' ve 'hasır yüzük' formlarında üretilir.",
          "Trabzon hasırı tekniği, altın ve gümüş tellerin küçük halkalara dönüştürülüp örgü biçiminde birleştirilmesini içerir. Her halka elle tek tek bağlanır — bir bilezikte binlerce mikro halka bulunabilir. Bu yoğun emek nedeniyle Trabzon hasırı, geleneksel el sanatlarının en değerli örneklerinden biridir.",
          "Günümüzde Trabzon hasırı gümüşten çok altın olarak üretilse de, tarihsel olarak gümüş hasır üretimi yaygındı ve gümüş hasır parçaları antika pazarında çok aranır.",
        ],
      },
      {
        id: "mardin", heading: "Mardin ve Güneydoğu Geleneği",
        paragraphs: [
          "Mardin, tarihî gümüş işçiliğinde Anadolu'nun en önemli merkezlerinden biridir. Artuklu dönemi mirası üzerine kurulan Mardin kuyumculuğu, telkâri tekniğinin en rafine örneklerini sunar.",
          "Mardin'de üretilen geleneksel gümüş takılar arasında 'şahmaran' motifleri, 'beşibiryerde' kolyeleri, alın takıları ve geniş gümüş kemerler öne çıkar. Süryanî gümüş ustaları, bölgenin çok kültürlü mirasını yansıtan eserler üretmiştir.",
          "Güneydoğu Anadolu'da gümüş takının sosyal kodları vardır: evli kadınlar, bekâr kızlar ve dullar farklı formda takılar takar. Takının büyüklüğü ve işçiliği, ailenin ekonomik gücünü ve sosyal statüsünü işaret eder.",
        ],
      },
      {
        id: "yuruk", heading: "Yörük ve Göçebe Gümüşü",
        paragraphs: [
          "Yörük ve Türkmen göçebe toplulukları, gümüş takıyı taşınabilir servet olarak kullanmıştır. Göçebe yaşam tarzında gayrimenkul biriktirmek mümkün olmadığından, zenginlik gümüş ve altın takı olarak bedende taşınmıştır.",
          "Yörük kadınlarının ikonik gümüş göğüslükleri (pektoral) ve başlıkları, bir kadının çeyizinin ve ailesinin servetinin görsel ifadesidir. Bu parçalar kuşaktan kuşağa aktarılır ve aile kimliğinin somut temsilcisidir.",
          "Göçebe gümüş takılarında hayvan figürleri (koç boynuzu, kuş, yılan), geometrik motifler ve doğa sembolleri yaygındır. Bu sembolik dil, İslam öncesi Türk kültürel hafızasının devamını gösterir.",
        ],
      },
      {
        id: "rituel", heading: "Ritüeller ve Geçiş Törenleri",
        paragraphs: [
          "Anadolu'da doğum, sünnet, nişan, düğün ve ölüm gibi yaşam dönüm noktalarında gümüş önemli roller üstlenir.",
          "Doğumda bebeğe gümüş bilezik ve muska takılır. Sünnet töreninde çocuğa gümüş kemer veya tokalık hediye edilir. Düğün öncesi 'kına gecesi'nde gümüş tepsilerde kına dağıtılır.",
          "Cenaze geleneklerinde ise kefene gümüş Kur'an kutusu veya tespih konulması bazı yörelerde uygulanır. Bu ritüeller, gümüşün yaşamın her aşamasına eşlik eden kutsal bir malzeme olarak algılandığını gösterir.",
        ],
      },
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Neden gümüş nazara karşı koruyucu kabul edilir?", a: "Gümüşün Ay ile ilişkilendirilmesi, ona aydınlatıcı ve arındırıcı nitelikler yüklemiştir. Parlak yüzeyinin kötü bakışları yansıttığına inanılır." },
        { q: "Trabzon hasırı gümüşten de yapılır mı?", a: "Evet, tarihsel olarak gümüş hasır üretimi yaygındı. Günümüzde altın tercih edilse de gümüş hasır parçaları antika pazarında çok değerlidir." },
        { q: "Çeyizdeki gümüş eşyalar hangi amaçla verilir?", a: "Hem günlük kullanım hem de aile mirasının kuşaktan kuşağa aktarımı amaçlanır. Gümüş çeyiz eşyaları aynı zamanda aile statüsünün göstergesidir." },
        { q: "Yörük kadınlarının gümüş takıları neden bu kadar büyüktür?", a: "Göçebe topluluklar servetlerini taşınabilir formda, yani takı olarak bedende taşır. Büyük gümüş parçalar hem sosyal statü hem de ekonomik güvence işlevi görür." },
        { q: "Hangi Anadolu illeri gümüş işçiliğiyle ünlüdür?", a: "Trabzon (hasır örgü), Mardin (telkâri), Kastamonu (Candaroğlu geleneği), Gaziantep, Diyarbakır, Van ve Midyat öne çıkan merkezlerdir." },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "Kültür ve Turizm Bakanlığı — Geleneksel El Sanatları Envanter Çalışması",
        "Ülker Erginsoy — \"İslam Maden Sanatının Gelişmesi\"",
        "Hamza Güner — \"Anadolu'da Kuyumculuk Sanatı\"",
        "Sedat Simavi — \"Trabzon Hasır Bilezik Geleneği\"",
        "TDV İslam Ansiklopedisi — \"Takı\" maddesi",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "Geleneksel Teknikler", path: "/tr/uretim/geleneksel", cat: "Üretim" },
        { title: "İslam Medeniyetinde Gümüş", path: "/tr/tarih/islam", cat: "Tarih" },
        { title: "Kültürel Motifler", path: "/tr/moda/motifler", cat: "Moda" },
      ],
    },
    sponsor: {
      text: "Anadolu gümüş geleneğinin modern koleksiyonlarını keşfedin.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    regionData: [
      { name: "Trabzon", specialty: "Hasır örgü bilezik, kolye", icon: "🌊" },
      { name: "Mardin / Midyat", specialty: "Telkâri, şahmaran takılar", icon: "🏛️" },
      { name: "Gaziantep", specialty: "Filigran gümüş kemer, bilezik", icon: "🔥" },
      { name: "Kastamonu", specialty: "Candaroğlu geleneği, tokalık", icon: "🏔️" },
      { name: "Van / Hakkâri", specialty: "Göçebe kadın göğüslükleri", icon: "⛰️" },
      { name: "Konya", specialty: "Selçuklu motifli gümüş eşya", icon: "🕌" },
      { name: "Diyarbakır", specialty: "Artuklu geleneği, kemer", icon: "🏰" },
      { name: "Kayseri", specialty: "Gümüş bıçakçılık, takı", icon: "🗡️" },
    ],
    regionTitle: "Yöresel Gümüş Takı Haritası",
    darkMode: "Mod", toc: "İçindekiler",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Culture", "Silver in Anatolian Folklore"],
    category: "Culture",
    title: "Silver in Anatolian Folklore",
    subtitle: "From evil eye charms to dowries, regional jewelry to rituals — Anatolia's silver memory",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "11 min read" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Anatolia is one of the few regions in the world with an unbroken tradition of silver craftsmanship spanning millennia. From Hittite seals to Ottoman filigree, from Yörük belt buckles to Trabzon woven bracelets, silver has held a profound place in Anatolian daily life, rituals, and identity.",
          "This article explores the multilayered role of silver in Anatolian folklore — as protective amulet, social status marker, dowry tradition, and regional identity symbol.",
        ],
      },
      {
        id: "protective", heading: "Protective and Healing Silver",
        paragraphs: [
          "The belief that silver possesses protective powers runs deep in Anatolia. One of the most common protections against the 'evil eye' (nazar) is wearing a silver amulet. Silver's association with the Moon has endowed it with 'illuminating' and 'purifying' qualities.",
          "The tradition of placing silver amulet cases (muska-yı şerife) on babies and children remains alive today. Silver amulet boxes containing written prayers are widely used, especially in southeastern and eastern Anatolia.",
          "Among Yörük and Turkmen communities, women's silver headdresses and pectoral ornaments serve not only as decoration but also as protective devices against the evil eye. Jingling silver chains and bells are believed to ward off evil spirits.",
        ],
      },
      {
        id: "dowry", heading: "The Dowry Tradition and Silver",
        paragraphs: [
          "In Anatolian wedding tradition, silver is among the most valued components of the dowry (çeyiz). In the ritual known as 'jewelry ceremony' (takı töreni), the bride receives gold and silver jewelry as gifts.",
          "Traditional dowry silver items include: silver trays, sugar bowls, coffee cup sets, mirrors, comb sets, silver boxes, and silver jewelry collections. These serve both practical purposes and the function of transferring family heritage.",
          "In some regions, the silver belt given as engagement gift reflects the bride's family's social status. In southeastern Turkey, belts known as 'şalvar kemeri' are produced with intricate filigree craftsmanship.",
        ],
      },
      {
        id: "regional", heading: "Regional Silver Jewelry Traditions",
        paragraphs: [
          "Each region of Anatolia has its distinctive silver jewelry forms. This diversity reflects a rich heritage created by the combination of geographical isolation and cultural interactions.",
        ],
        widget: "regions",
      },
      {
        id: "trabzon", heading: "Trabzon Weave: The Black Sea Signature",
        paragraphs: [
          "Trabzon weave (hasır örgü) is a unique Black Sea jewelry tradition where fine silver wire is combined using a weaving technique. It's produced as bracelets, necklaces, and rings.",
          "The technique involves converting gold and silver wire into small rings and joining them in a woven pattern. Each ring is connected by hand — a single bracelet may contain thousands of micro-rings. This intense labor makes Trabzon weave among the most valuable examples of traditional craftsmanship.",
          "While Trabzon weave is predominantly produced in gold today, silver weave was historically widespread, and antique silver weave pieces are highly sought after.",
        ],
      },
      {
        id: "mardin", heading: "Mardin and the Southeastern Tradition",
        paragraphs: [
          "Mardin is one of Anatolia's most important centers of historical silver craftsmanship. Building on the Artuqid-era heritage, Mardin jewelry offers the most refined examples of filigree technique.",
          "Traditional silver jewelry from Mardin includes 'şahmaran' (serpent queen) motifs, 'beşibiryerde' necklaces, forehead ornaments, and broad silver belts. Syriac silver masters produced works reflecting the region's multicultural heritage.",
          "In southeastern Anatolia, silver jewelry carries social codes: married women, unmarried girls, and widows wear different forms of jewelry. The size and craftsmanship of jewelry indicates a family's economic power and social status.",
        ],
      },
      {
        id: "yoruk", heading: "Yörük and Nomadic Silver",
        paragraphs: [
          "Yörük and Turkmen nomadic communities used silver jewelry as portable wealth. Since accumulating real estate was impossible in nomadic life, wealth was carried on the body as silver and gold jewelry.",
          "The iconic silver pectorals and headdresses of Yörük women are visual expressions of a woman's dowry and her family's wealth. These pieces pass from generation to generation as tangible representatives of family identity.",
          "Animal figures (ram horns, birds, serpents), geometric motifs, and nature symbols are common in nomadic silver jewelry. This symbolic language demonstrates the continuation of pre-Islamic Turkic cultural memory.",
        ],
      },
      {
        id: "rituals", heading: "Rituals and Rites of Passage",
        paragraphs: [
          "Silver plays important roles at life's turning points in Anatolia — birth, circumcision, engagement, wedding, and death.",
          "At birth, a silver bracelet and amulet are placed on the baby. At circumcision, the child receives a silver belt buckle. At the pre-wedding henna night, henna is distributed on silver trays.",
          "In funeral customs, placing a silver Quran case or prayer beads in the shroud is practiced in some regions. These rituals show that silver is perceived as a sacred material accompanying every stage of life.",
        ],
      },
    ],
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Why is silver considered protective against the evil eye?", a: "Silver's association with the Moon endows it with illuminating and purifying qualities. Its shiny surface is believed to reflect evil gazes." },
        { q: "Is Trabzon weave also made in silver?", a: "Yes, silver weave production was historically widespread. Although gold is preferred today, antique silver weave pieces are highly valued." },
        { q: "What purpose do dowry silver items serve?", a: "They serve both daily use and the transfer of family heritage across generations. Silver dowry items also indicate family status." },
        { q: "Why is Yörük women's silver jewelry so large?", a: "Nomadic communities carry wealth in portable form — as jewelry on the body. Large silver pieces serve as both social status symbols and economic security." },
        { q: "Which Anatolian provinces are famous for silver craftsmanship?", a: "Trabzon (weaving), Mardin (filigree), Kastamonu (Candarid tradition), Gaziantep, Diyarbakır, Van, and Midyat are the leading centers." },
      ],
    },
    sources: {
      heading: "Sources",
      items: [
        "Ministry of Culture and Tourism — Traditional Handicrafts Inventory",
        "Ülker Erginsoy — \"Development of Islamic Metalwork\"",
        "Hamza Güner — \"The Art of Jewelry in Anatolia\"",
        "Sedat Simavi — \"Trabzon Woven Bracelet Tradition\"",
        "TDV İslam Ansiklopedisi — \"Jewelry\" entry",
      ],
    },
    related: {
      heading: "Related Topics",
      items: [
        { title: "Traditional Techniques", path: "/en/manufacturing/traditional", cat: "Manufacturing" },
        { title: "Silver in Islamic Civilization", path: "/en/history/islam", cat: "History" },
        { title: "Cultural Motifs", path: "/en/fashion/motifs", cat: "Fashion" },
      ],
    },
    sponsor: {
      text: "Discover modern collections inspired by the Anatolian silver tradition.",
      cta: "View on Instagram",
      note: "This content is supported by İstanbul Gümüş.",
    },
    regionData: [
      { name: "Trabzon", specialty: "Woven wire bracelets, necklaces", icon: "🌊" },
      { name: "Mardin / Midyat", specialty: "Filigree, şahmaran jewelry", icon: "🏛️" },
      { name: "Gaziantep", specialty: "Filigree silver belts", icon: "🔥" },
      { name: "Kastamonu", specialty: "Candarid tradition, buckles", icon: "🏔️" },
      { name: "Van / Hakkâri", specialty: "Nomadic pectoral ornaments", icon: "⛰️" },
      { name: "Konya", specialty: "Seljuk-motif silverware", icon: "🕌" },
      { name: "Diyarbakır", specialty: "Artuqid tradition, belts", icon: "🏰" },
      { name: "Kayseri", specialty: "Silver cutlery, jewelry", icon: "🗡️" },
    ],
    regionTitle: "Regional Silver Jewelry Map",
    darkMode: "Mode", toc: "Contents",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة المعرفة بالفضة",
    breadcrumb: ["الرئيسية", "الثقافة", "الفضة في الفولكلور الأناضولي"],
    category: "الثقافة",
    title: "الفضة في الفولكلور الأناضولي",
    subtitle: "من تمائم العين الحاسدة إلى المهر، ومن الحلي الإقليمية إلى الطقوس — ذاكرة الأناضول الفضية",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١١ دقيقة قراءة" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "الأناضول من المناطق القليلة في العالم التي تمتلك تقليداً متواصلاً في صياغة الفضة يمتد لآلاف السنين. من أختام الحثيين إلى التلكاري العثماني، احتلت الفضة مكانة عميقة في حياة الأناضول اليومية وطقوسه وهويته.",
          "يستكشف هذا المقال الدور المتعدد الطبقات للفضة في الفولكلور الأناضولي.",
        ],
      },
      {
        id: "protective", heading: "الفضة الحامية والشافية",
        paragraphs: [
          "يضرب الإيمان بقدرة الفضة الحامية بجذوره عميقاً في الأناضول. من أشهر وسائل الحماية من 'العين الحاسدة' ارتداء تمائم فضية.",
          "تقليد وضع علب التمائم الفضية على الأطفال لا يزال حياً. تُستخدم علب التمائم الفضية المحتوية على أدعية خاصة في جنوب شرق وشرق الأناضول.",
          "لدى اليوروك والتركمان، تخدم حلي النساء الفضية وظيفة حمائية أيضاً. يُعتقد أن السلاسل والأجراس الفضية تطرد الأرواح الشريرة.",
        ],
      },
      {
        id: "dowry", heading: "تقليد المهر والفضة",
        paragraphs: [
          "في تقليد الزفاف الأناضولي، تُعد الفضة من أثمن مكونات المهر (الجهاز).",
          "تشمل قطع الفضة التقليدية في المهر: صواني فضية، سكريات، أطقم فناجين قهوة، مرايا، وعلب فضية.",
          "في بعض المناطق، يعكس الحزام الفضي المقدم كهدية خطوبة المكانة الاجتماعية لعائلة العروس.",
        ],
      },
      {
        id: "regional", heading: "تقاليد الحلي الفضية الإقليمية",
        paragraphs: [
          "لكل منطقة في الأناضول أشكال حلي فضية مميزة تعكس تراثاً غنياً.",
        ],
        widget: "regions",
      },
      {
        id: "trabzon", heading: "حياكة طرابزون: توقيع البحر الأسود",
        paragraphs: [
          "حياكة طرابزون (hasır örgü) تقليد فريد لمجوهرات البحر الأسود حيث يُجمع سلك فضي رفيع بتقنية النسج.",
          "تتضمن التقنية تحويل أسلاك الذهب والفضة إلى حلقات صغيرة وربطها بنمط منسوج. كل حلقة تُربط يدوياً.",
          "رغم أن حياكة طرابزون تُنتج حالياً بالذهب غالباً، إلا أن الإنتاج الفضي كان شائعاً تاريخياً.",
        ],
      },
      {
        id: "mardin", heading: "ماردين والتقليد الجنوبي الشرقي",
        paragraphs: [
          "ماردين من أهم مراكز صياغة الفضة التاريخية في الأناضول.",
          "تشمل الحلي الفضية التقليدية من ماردين زخارف 'شاهمران' وقلائد 'بشيبيريرده' وأحزمة فضية عريضة.",
          "في جنوب شرق الأناضول، تحمل الحلي الفضية رموزاً اجتماعية: تختلف أشكال الحلي بين المتزوجات والعازبات والأرامل.",
        ],
      },
      {
        id: "yoruk", heading: "فضة اليوروك والبدو",
        paragraphs: [
          "استخدم اليوروك والتركمان الحلي الفضية كثروة محمولة.",
          "الصدريات الفضية الأيقونية لنساء اليوروك تعبير بصري عن مهر المرأة وثروة عائلتها.",
          "تنتشر أشكال الحيوانات والزخارف الهندسية ورموز الطبيعة في حلي البدو الفضية.",
        ],
      },
      {
        id: "rituals", heading: "الطقوس ومراسم العبور",
        paragraphs: [
          "تلعب الفضة أدواراً مهمة في منعطفات الحياة في الأناضول — الولادة، الختان، الخطوبة، الزفاف، والموت.",
          "عند الولادة يُوضع سوار وتميمة فضية على الرضيع. وفي ليلة الحناء قبل الزفاف يُوزع الحناء في صواني فضية.",
          "تُظهر هذه الطقوس أن الفضة تُعد مادة مقدسة ترافق كل مرحلة من مراحل الحياة.",
        ],
      },
    ],
    faq: {
      heading: "الأسئلة الشائعة",
      items: [
        { q: "لماذا تُعتبر الفضة حامية من العين الحاسدة؟", a: "ارتباط الفضة بالقمر منحها صفات التنوير والتطهير. يُعتقد أن سطحها اللامع يعكس النظرات الشريرة." },
        { q: "هل تُصنع حياكة طرابزون من الفضة أيضاً؟", a: "نعم، كان إنتاج الحياكة الفضية شائعاً تاريخياً." },
        { q: "أي المحافظات الأناضولية مشهورة بصياغة الفضة؟", a: "طرابزون (الحياكة)، ماردين (التلكاري)، قسطموني، غازي عنتاب، ديار بكر، وان، ومديات." },
      ],
    },
    sources: {
      heading: "المصادر",
      items: [
        "وزارة الثقافة والسياحة — جرد الحرف التقليدية",
        "أولكر أرغينسوي — تطور فن المعادن الإسلامي",
        "حمزة غونر — فن الصياغة في الأناضول",
      ],
    },
    related: {
      heading: "مواضيع ذات صلة",
      items: [
        { title: "التقنيات التقليدية", path: "/ar/manufacturing/traditional", cat: "التصنيع" },
        { title: "الفضة في الحضارة الإسلامية", path: "/ar/history/islam", cat: "التاريخ" },
      ],
    },
    sponsor: {
      text: "اكتشفوا المجموعات الحديثة المستوحاة من تقليد الفضة الأناضولي.",
      cta: "شاهد على إنستغرام",
      note: "هذا المحتوى مدعوم من إسطنبول غوموش.",
    },
    regionData: [
      { name: "طرابزون", specialty: "أساور وقلائد منسوجة", icon: "🌊" },
      { name: "ماردين / مديات", specialty: "تلكاري، حلي شاهمران", icon: "🏛️" },
      { name: "غازي عنتاب", specialty: "أحزمة فضية فيليغران", icon: "🔥" },
      { name: "قسطموني", specialty: "تقليد الجاندارلية", icon: "🏔️" },
      { name: "وان / هكاري", specialty: "صدريات نسائية بدوية", icon: "⛰️" },
      { name: "قونية", specialty: "أدوات فضية بزخارف سلجوقية", icon: "🕌" },
      { name: "ديار بكر", specialty: "تقليد أرتقي، أحزمة", icon: "🏰" },
      { name: "قيصرية", specialty: "سكاكين فضية، حلي", icon: "🗡️" },
    ],
    regionTitle: "خريطة الحلي الفضية الإقليمية",
    darkMode: "الوضع", toc: "المحتويات",
  },
};

// ─── Region Grid Widget ───────────────────────────────────
function RegionGrid({ data, title, dark }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const gold = "#D4AF37";

  return (
    <div style={{ margin: "20px 0" }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: textP, marginBottom: 16 }}>{title}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
        {data.map((r, i) => (
          <div key={i} style={{
            padding: "16px", borderRadius: 12, border: `1px solid ${border}`,
            background: dark ? "rgba(192,192,192,0.02)" : "rgba(192,192,192,0.04)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: 20 }}>{r.icon}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: textP }}>{r.name}</span>
            </div>
            <div style={{ fontSize: 12, color: textS, lineHeight: 1.5 }}>{r.specialty}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────
export default function AnatolianFolkloreArticle() {
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
        * { margin:0; padding:0; box-sizing:border-box; }
        ::selection { background: rgba(192,192,192,0.3); }
      `}</style>

      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: dark ? "rgba(15,15,20,0.88)" : "rgba(250,250,245,0.88)",
        backdropFilter: "blur(20px)", borderBottom: `1px solid ${border}`,
        padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg, ${accent}, ${gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#0f0f14", fontFamily: fontD }}>Ag</div>
          <span style={{ fontFamily: fontD, fontWeight: 600, fontSize: 16 }}>{t.nav}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", gap: 2, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", borderRadius: 7, padding: 2 }}>
            {["tr", "en", "ar"].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                border: "none", cursor: "pointer", padding: "3px 9px", borderRadius: 5,
                fontSize: 11, fontWeight: lang === l ? 600 : 400,
                fontFamily: l === "ar" ? "'Noto Naskh Arabic', serif" : fontB,
                background: lang === l ? (dark ? "rgba(192,192,192,0.15)" : "rgba(0,0,0,0.08)") : "transparent",
                color: lang === l ? textP : textS,
              }}>{l === "ar" ? "عر" : l.toUpperCase()}</button>
            ))}
          </div>
          <button onClick={() => setDark(!dark)} style={{ border: "none", cursor: "pointer", background: "transparent", color: textS, fontSize: 16, padding: 4 }}>{dark ? "☀️" : "🌙"}</button>
        </div>
      </nav>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "16px 24px 0", display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", fontSize: 12, color: textS }}>
        {t.breadcrumb.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {i > 0 && <span style={{ opacity: 0.4 }}>{isRTL ? "‹" : "›"}</span>}
            <a href="#" style={{ color: i === t.breadcrumb.length - 1 ? textP : textS, textDecoration: "none", fontWeight: i === t.breadcrumb.length - 1 ? 500 : 400 }}>{item}</a>
          </span>
        ))}
      </div>

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "32px 24px 64px", animation: "fadeUp 0.6s ease both" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: 6, fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: gold, border: `1px solid ${gold}33`, marginBottom: 16 }}>{t.category}</div>
          <h1 style={{ fontFamily: fontD, fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 12 }}>{t.title}</h1>
          <p style={{ fontSize: 16, color: textS, lineHeight: 1.6, marginBottom: 20 }}>{t.subtitle}</p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", fontSize: 13, color: textS, paddingBottom: 20, borderBottom: `1px solid ${border}` }}>
            <span>{t.meta.author}</span><span style={{ opacity: 0.3 }}>·</span><span>{t.meta.date}</span><span style={{ opacity: 0.3 }}>·</span><span>{t.meta.readTime}</span>
          </div>
        </div>

        {/* Hero — Nazar motif */}
        <div style={{
          height: 220, borderRadius: 16, marginBottom: 36, overflow: "hidden",
          background: dark ? "linear-gradient(135deg, #1a1a2e 0%, #2a2a3e 50%, #1a1a2e 100%)" : "linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 50%, #e8e8e8 100%)",
          display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
        }}>
          <div style={{ textAlign: "center", zIndex: 1 }}>
            <div style={{ fontSize: 48, marginBottom: 4 }}>🧿</div>
            <div style={{ fontFamily: fontD, fontSize: 28, fontWeight: 700, background: `linear-gradient(135deg, ${accent}, ${gold})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>ANADOLU</div>
            <div style={{ fontSize: 12, color: textS, letterSpacing: "0.15em", marginTop: 4 }}>ANATOLIAN SILVER HERITAGE</div>
          </div>
        </div>

        {t.sections.map((sec) => (
          <section key={sec.id} style={{ marginBottom: 36 }}>
            {sec.heading && <h2 style={{ fontFamily: fontD, fontSize: 24, fontWeight: 600, marginBottom: 16, paddingTop: 8 }}>{sec.heading}</h2>}
            {sec.paragraphs.map((p, pi) => (
              <p key={pi} style={{ fontSize: 15, lineHeight: 1.8, color: textS, marginBottom: 14 }}>{p}</p>
            ))}
            {sec.widget === "regions" && <RegionGrid data={t.regionData} title={t.regionTitle} dark={dark} />}
          </section>
        ))}

        <section style={{ marginBottom: 36, marginTop: 48 }}>
          <h2 style={{ fontFamily: fontD, fontSize: 24, fontWeight: 600, marginBottom: 20 }}>{t.faq.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {t.faq.items.map((item, i) => (
              <div key={i} style={{ border: `1px solid ${openFaq === i ? gold + "44" : border}`, borderRadius: 12, overflow: "hidden", background: openFaq === i ? (dark ? "rgba(212,175,55,0.03)" : "rgba(212,175,55,0.04)") : "transparent", transition: "all 0.3s" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", border: "none", cursor: "pointer", background: "transparent", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", color: textP, fontSize: 14, fontWeight: 500, fontFamily: fontB, textAlign: isRTL ? "right" : "left", gap: 12 }}>
                  <span style={{ flex: 1 }}>{item.q}</span>
                  <span style={{ fontSize: 18, color: textS, transition: "transform 0.3s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)", flexShrink: 0 }}>+</span>
                </button>
                {openFaq === i && <div style={{ padding: "0 20px 16px", fontSize: 14, lineHeight: 1.7, color: textS }}>{item.a}</div>}
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36, padding: "20px 24px", background: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)", borderRadius: 12, border: `1px solid ${border}` }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12 }}>{t.sources.heading}</h3>
          {t.sources.items.map((s, i) => (
            <div key={i} style={{ fontSize: 13, color: textS, lineHeight: 1.6, marginBottom: 6, display: "flex", gap: 8 }}>
              <span style={{ color: accent, fontWeight: 600, flexShrink: 0 }}>[{i + 1}]</span><span>{s}</span>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 40 }}>
          <h3 style={{ fontSize: 18, fontFamily: fontD, fontWeight: 600, marginBottom: 16 }}>{t.related.heading}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {t.related.items.map((item, i) => (
              <a key={i} href={item.path} style={{ textDecoration: "none", padding: "16px 18px", border: `1px solid ${border}`, borderRadius: 12, background: bgCard, transition: "all 0.25s", display: "block" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = gold + "44"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ fontSize: 10, color: gold, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.cat}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: textP }}>{item.title}</div>
                <div style={{ fontSize: 12, color: textS, marginTop: 6 }}>{isRTL ? "←" : "→"}</div>
              </a>
            ))}
          </div>
        </section>

        <div style={{ border: `1px solid ${gold}22`, borderRadius: 16, padding: "28px 24px", background: dark ? "rgba(212,175,55,0.03)" : "rgba(212,175,55,0.05)", textAlign: "center" }}>
          <p style={{ fontSize: 15, color: textP, marginBottom: 16, lineHeight: 1.6 }}>{t.sponsor.text}</p>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 16 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ width: 80, height: 80, borderRadius: 10, background: dark ? `linear-gradient(${120 * i}deg, #1e1e2e, #2a2a3e)` : `linear-gradient(${120 * i}deg, #e0ddd4, #d5d0c4)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={textS} strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill={textS} /></svg>
              </div>
            ))}
          </div>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", borderRadius: 10, background: `linear-gradient(135deg, ${accent}, ${gold})`, color: "#0f0f14", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>📸 {t.sponsor.cta}</a>
          <p style={{ fontSize: 11, color: textS, marginTop: 14, opacity: 0.7 }}>{t.sponsor.note}</p>
        </div>
      </article>

      <footer style={{ borderTop: `1px solid ${border}`, padding: "24px", textAlign: "center", background: dark ? "#0c0c10" : "#f5f5f0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
          <div style={{ width: 22, height: 22, borderRadius: "50%", background: `linear-gradient(135deg, ${accent}, ${gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: "#0f0f14", fontFamily: fontD }}>Ag</div>
          <span style={{ fontFamily: fontD, fontWeight: 600, fontSize: 14 }}>{t.nav}</span>
        </div>
        <p style={{ fontSize: 11, color: textS }}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p>
      </footer>
    </div>
  );
}
