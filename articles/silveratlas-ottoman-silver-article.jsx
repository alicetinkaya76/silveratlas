import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Tarih", "Osmanlı Gümüşçülüğü"],
    category: "Tarih",
    title: "Osmanlı Gümüşçülüğü",
    subtitle: "Kapalıçarşı'dan saraya, akçeden telkâriye — Osmanlı İmparatorluğu'nun gümüş mirası",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "12 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Osmanlı İmparatorluğu, altı yüzyıl boyunca İslam dünyasının en büyük gümüş tüketicisi ve işleyicisi olmuştur. İstanbul'un fethinden (1453) imparatorluğun sonuna kadar gümüş, Osmanlı ekonomisinin, sanatının ve gündelik yaşamının ayrılmaz bir parçası olarak kalmıştır.",
          "Bu makale, Osmanlı gümüşçülüğünü — para sistemi, lonca teşkilatı, saray atölyeleri, bölgesel gelenekler ve günümüze ulaşan miras — kapsamlı şekilde incelemektedir.",
        ],
      },
      {
        id: "akce", heading: "Akçe: Osmanlı'nın Gümüş Para Birimi",
        paragraphs: [
          "Osmanlı akçesi, imparatorluğun temel gümüş para birimi olarak yaklaşık 500 yıl dolaşımda kalmıştır. İlk akçe Orhan Gazi döneminde (1326) basılmıştır. Ağırlığı başlangıçta yaklaşık 1,2 gram saf gümüştü, ancak yüzyıllar içinde tağşiş (debasement) ile düşmüştür.",
          "Osmanlı para sistemi akçe üzerine kuruluydu: 1 altın = 50-60 akçe (döneme göre değişir). Akçenin yanı sıra para (40 akçe) ve kuruş (120 akçe, 18. yüzyıldan itibaren) da kullanılmıştır.",
          "Tanzimat döneminde (1839) Osmanlı para sistemi modernize edilmiş, kuruş temel birim haline gelmiş ve akçe tedavülden kalkmıştır.",
        ],
      },
      {
        id: "darphane", heading: "Darphane-i Âmire ve Darphane Ağı",
        paragraphs: [
          "İstanbul Darphane-i Âmire (Topkapı Sarayı yakınında), Osmanlı'nın merkez darphanesiydi. Burada padişah adına basılan sikkeler, egemenliğin en güçlü simgesiydi — tahta çıkan her padişahın adına yeni sikke (cülus akçesi) basılması geleneği vardı.",
          "İmparatorluk genelinde onlarca darphane faaliyet göstermiştir. Başlıca darphaneler: İstanbul, Edirne, Bursa, Selanik, Trabzon, Gümüşhane, Amasya, Kahire, Bağdat ve Tunus. Her darphane kendi harf koduna sahipti.",
          "Gümüşhane darphanesi özel bir yere sahiptir — bölgedeki zengin gümüş madenleri hem hammadde hem de sikke üretim merkezi olarak hizmet vermiştir.",
        ],
      },
      {
        id: "lonca", heading: "Kuyumcu Loncası ve Esnaf Teşkilatı",
        paragraphs: [
          "Osmanlı esnaf teşkilatı içinde kuyumcular (zergerân) ve gümüşçüler (simkeşân) ayrı loncalar olarak örgütlenmişti. Kapalıçarşı'daki Kuyumcular Çarşısı, imparatorluğun en prestijli ticaret alanlarından biriydi.",
          "Lonca sistemi sıkı bir hiyerarşiye dayanıyordu: çırak (3-5 yıl) → kalfa (5-7 yıl) → usta. Ustalık belgesi (icâzetnâme) almak için lonca şeyhinin onayı gerekliydi. Her usta, kendi damgasını (pul) taşırdı.",
          "Gümüş işçiliğinde narh sistemi uygulanırdı — devlet, gümüş eşyanın fiyatını ve saflığını denetlerdi. Bu erken dönem tüketici koruma mekanizması, ayar standardının korunmasını sağlıyordu.",
        ],
      },
      {
        id: "saray", heading: "Saray Atölyeleri: Ehl-i Hıref",
        paragraphs: [
          "Topkapı Sarayı'ndaki Ehl-i Hıref (sanat erbabı) teşkilatı, padişah için çalışan sanatçı ve zanaatkârları bünyesinde barındırıyordu. Zergerân-ı hâssa (saray kuyumcuları) bölümü, en yetenekli ustaları bir araya getirirdi.",
          "Saray atölyelerinde üretilen gümüş eserler: padişah tuğralı kaplar, hediye takımları, elçilere verilen diplomatik armağanlar, cami aydınlatma elemanları (şamdanlar, kandiller) ve saray mutfak takımları.",
          "16. yüzyıl Osmanlı gümüş sanatının zirvesidir. Kanuni Sultan Süleyman döneminde saray atölyeleri, İslam dünyasının en rafine metalwork örneklerini üretmiştir.",
        ],
      },
      {
        id: "kapalicari", heading: "Kapalıçarşı: Gümüşün Kalbi",
        paragraphs: [
          "1461'de Fatih Sultan Mehmed tarafından inşa ettirilen Kapalıçarşı, tarihte dünyanın en büyük kapalı çarşısıydı. Gümüş esnafı, çarşının en köklü ve itibarlı loncalarından birini oluşturuyordu.",
          "Kapalıçarşı'daki gümüş esnafı dört ana gruba ayrılıyordu: simkeşân (gümüş tel çekiciler), kuyumcular (takı ustaları), kalemkârlar (oymacılar) ve savatkârlar (mine/emaye ustaları). Bu uzmanlaşma, yüksek kalite standardını garanti ediyordu.",
          "Günümüzde Kapalıçarşı hâlâ İstanbul'un en önemli gümüş ticaret merkezidir. 4.000'den fazla dükkânda yüzlerce gümüşçü faaliyet göstermekte ve geleneksel ile modern tasarımları bir arada sunmaktadır.",
        ],
      },
      {
        id: "teknikler", heading: "Osmanlı Gümüş Teknikleri",
        paragraphs: [
          "Osmanlı gümüşçüleri çeşitli teknikler geliştirmiş ve mükemmelleştirmiştir:",
        ],
        widget: "techniques",
      },
      {
        id: "bolgesel", heading: "Bölgesel Gümüş Merkezleri",
        paragraphs: [
          "İstanbul dışında Osmanlı coğrafyasının birçok bölgesi kendine özgü gümüş gelenekleri geliştirmiştir.",
          "Trabzon: Hasır örgü tekniğinin doğduğu yer. İnce gümüş tellerin dokuma yöntemiyle birleştirilmesi, Karadeniz bölgesine özgü bir zanaat geleneğidir.",
          "Diyarbakır ve Mardin: Artuklu mirası üzerine kurulan telkâri geleneği. Güneydoğu Anadolu'nun çok kültürlü yapısını yansıtan eserler.",
          "Kahire ve Şam: Memlûk geleneğini devam ettiren Osmanlı usta ve kalfaları, Arap tarzı geometrik desenleri Osmanlı estetiğiyle harmanlarmıştır.",
          "Balkanlar: Selanik, Saraybosna ve Prizren'de Osmanlı gümüşçülüğü yerel Hristiyan ve Yahudi ustaların katkısıyla zengin bir mozaik oluşturmuştur.",
        ],
      },
      {
        id: "miras", heading: "Günümüze Kalan Miras",
        paragraphs: [
          "Osmanlı gümüş mirası günümüz Türk kuyumculuk endüstrisinin temelini oluşturmaktadır. İstanbul, Konya, Trabzon ve Gaziantep hâlâ aktif gümüş üretim merkezleridir.",
          "Topkapı Sarayı Müzesi, dünya üzerinde en zengin Osmanlı gümüş koleksiyonlarından birine ev sahipliği yapmaktadır. Hazine bölümünde sergilenen gümüş eserler, imparatorluğun zanaatkârlık düzeyini gözler önüne serer.",
          "Modern Türk gümüş markaları — İstanbul Gümüş gibi — Osmanlı geleneğinin estetik mirasını çağdaş tasarımlarla buluşturmaktadır. 925 ayar standardı, Osmanlı döneminden bu yana devam eden kalite anlayışının modern ifadesidir.",
        ],
      },
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Osmanlı akçesi kaç gram gümüştü?", a: "İlk dönemde yaklaşık 1,2 gram saf gümüştü. Yüzyıllar içinde tağşiş ile ağırlık düşmüş, 18. yüzyılda 0,3 gramın altına inmiştir." },
        { q: "Kapalıçarşı ne zaman inşa edildi?", a: "1461'de Fatih Sultan Mehmed tarafından inşa ettirilmiştir. İlk çekirdek yapı olan İç Bedesten (Cevahir Bedesteni) bu tarihe dayanır." },
        { q: "Ehl-i Hıref nedir?", a: "Topkapı Sarayı'nda padişah için çalışan sanatçı ve zanaatkâr topluluğudur. Kuyumcular, hattatlar, minyatürcüler ve daha pek çok sanat dalını bünyesinde barındırırdı." },
        { q: "Osmanlı gümüşü hangi müzelerde sergilenir?", a: "Topkapı Sarayı Müzesi (İstanbul), Türk ve İslam Eserleri Müzesi (İstanbul), Victoria & Albert Museum (Londra) ve Metropolitan Museum (New York) başlıca koleksiyonlara sahiptir." },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "Topkapı Sarayı Müzesi — Hazine Bölümü Kataloğu",
        "Suraiya Faroqhi — \"Osmanlı Kültürü ve Gündelik Yaşam\"",
        "Nurhan Atasoy — \"Osmanlı Sanatında Maden İşçiliği\"",
        "İstanbul Kuyumcular Odası — Tarihsel Arşiv",
        "Halil İnalcık — \"Osmanlı İmparatorluğu: Klasik Çağ\"",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "İslam Medeniyetinde Gümüş", path: "/tr/tarih/islam", cat: "Tarih" },
        { title: "Geleneksel Teknikler", path: "/tr/uretim/geleneksel", cat: "Üretim" },
        { title: "Anadolu Folklorunda Gümüş", path: "/tr/kultur/anadolu", cat: "Kültür" },
      ],
    },
    sponsor: {
      text: "Osmanlı gümüş geleneğinin modern yorumlarını İstanbul Gümüş'te keşfedin.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    techData: [
      { name: "Telkâri (Filigran)", desc: "İnce gümüş tellerin bükülerek motif oluşturulması. Mardin, Beypazarı ve Midyat ana merkezleri.", era: "15-20. yy" },
      { name: "Savat (Niello)", desc: "Gümüş yüzeye oyulan desenlerin siyah alaşımla (bakır-gümüş-kükürt) doldurulması.", era: "16-19. yy" },
      { name: "Kalemkârlık (Oyma)", desc: "Gümüş yüzeye çelik kalemle desen işlenmesi. Bitkisel ve geometrik motifler.", era: "15-19. yy" },
      { name: "Kakma (Inlay)", desc: "Gümüş yüzeye altın veya bakır tel kakma. İki tonlu dekoratif etki.", era: "16-18. yy" },
      { name: "Dövme (Forging)", desc: "Gümüş levhanın çekiçle şekillendirilmesi. Kaplar, tepsiler, ibrikler.", era: "14-20. yy" },
      { name: "Hasır Örgü", desc: "İnce gümüş tellerin dokuma tekniğiyle birleştirilmesi. Trabzon geleneği.", era: "17-20. yy" },
    ],
    techTitle: "Osmanlı Gümüş Teknikleri",
    darkMode: "Mod", toc: "İçindekiler",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "History", "Ottoman Silverwork"],
    category: "History",
    title: "Ottoman Silverwork",
    subtitle: "From the Grand Bazaar to the palace, akçe to filigree — the Ottoman Empire's silver legacy",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "12 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "For six centuries, the Ottoman Empire was the Islamic world's largest consumer and processor of silver. From the conquest of Istanbul (1453) to the empire's end, silver remained an inseparable part of Ottoman economy, art, and daily life.",
        "This article comprehensively examines Ottoman silverwork — the monetary system, guild organization, palace workshops, regional traditions, and the legacy that endures today.",
      ]},
      { id: "akce", heading: "Akçe: The Ottoman Silver Currency", paragraphs: [
        "The Ottoman akçe served as the empire's basic silver currency for approximately 500 years. The first akçe was minted during Orhan Gazi's reign (1326), initially weighing about 1.2 grams of pure silver, though this decreased through centuries of debasement.",
        "The Ottoman monetary system was based on the akçe: 1 gold coin = 50-60 akçe (varying by period). The para (40 akçe) and kuruş (120 akçe, from the 18th century) were also used.",
        "During the Tanzimat reforms (1839), the system was modernized, the kuruş became the basic unit, and the akçe was withdrawn from circulation.",
      ]},
      { id: "darphane", heading: "The Imperial Mint and Mint Network", paragraphs: [
        "The Istanbul Darphane-i Amire (near Topkapı Palace) was the Ottoman central mint. Coins struck in the sultan's name were the most powerful symbol of sovereignty — each new sultan had coins minted bearing his name (accession coins).",
        "Dozens of mints operated across the empire. Major mints: Istanbul, Edirne, Bursa, Thessaloniki, Trabzon, Gümüşhane, Amasya, Cairo, Baghdad, and Tunis.",
        "The Gümüşhane mint held a special position — the region's rich silver mines served as both raw material source and coinage production center.",
      ]},
      { id: "guild", heading: "The Jewelers' Guild and Artisan Organization", paragraphs: [
        "Within the Ottoman guild system, jewelers (zergerân) and silversmiths (simkeşân) were organized as separate guilds. The Jewelers' Market in the Grand Bazaar was one of the empire's most prestigious trading areas.",
        "The guild system followed a strict hierarchy: apprentice (3-5 years) → journeyman (5-7 years) → master. Each master carried their own hallmark (stamp).",
        "A price control (narh) system was applied — the state supervised silver goods' pricing and purity. This early consumer protection mechanism ensured purity standards were maintained.",
      ]},
      { id: "palace", heading: "Palace Workshops: Ehl-i Hıref", paragraphs: [
        "The Ehl-i Hıref organization at Topkapı Palace housed artists and craftsmen working for the sultan. The zergerân-ı hâssa (palace jewelers) section brought together the most talented masters.",
        "Silver pieces produced in palace workshops: sultan's monogrammed vessels, gift sets, diplomatic presents for ambassadors, mosque lighting (candelabras, oil lamps), and palace kitchenware.",
        "The 16th century was the zenith of Ottoman silver art. During Suleiman the Magnificent's reign, palace workshops produced the Islamic world's most refined metalwork.",
      ]},
      { id: "grandbazaar", heading: "The Grand Bazaar: Heart of Silver", paragraphs: [
        "Built by Sultan Mehmed II in 1461, the Grand Bazaar was historically the world's largest covered market. Silver artisans formed one of the bazaar's most established and prestigious guilds.",
        "Grand Bazaar silver artisans were divided into four main groups: wire drawers (simkeşân), jewelers (kuyumcular), engravers (kalemkârlar), and niello workers (savatkârlar). This specialization guaranteed high quality standards.",
        "Today, the Grand Bazaar remains Istanbul's most important silver trading center, with hundreds of silversmiths operating among over 4,000 shops, offering both traditional and modern designs.",
      ]},
      { id: "techniques", heading: "Ottoman Silver Techniques", paragraphs: ["Ottoman silversmiths developed and perfected various techniques:"], widget: "techniques" },
      { id: "regional", heading: "Regional Silver Centers", paragraphs: [
        "Beyond Istanbul, many regions across the Ottoman geography developed distinctive silver traditions.",
        "Trabzon: Birthplace of the woven wire technique. Combining fine silver wires through weaving is a craft tradition unique to the Black Sea region.",
        "Diyarbakır and Mardin: Filigree tradition built on the Artuqid heritage, producing works reflecting southeastern Anatolia's multicultural character.",
        "Cairo and Damascus: Ottoman masters continuing the Mamluk tradition blended Arab-style geometric patterns with Ottoman aesthetics.",
        "The Balkans: In Thessaloniki, Sarajevo, and Prizren, Ottoman silverwork formed a rich mosaic with contributions from local Christian and Jewish artisans.",
      ]},
      { id: "legacy", heading: "The Enduring Legacy", paragraphs: [
        "The Ottoman silver legacy forms the foundation of today's Turkish jewelry industry. Istanbul, Konya, Trabzon, and Gaziantep remain active silver production centers.",
        "The Topkapı Palace Museum houses one of the world's richest Ottoman silver collections. Silver pieces displayed in the Treasury section showcase the empire's craftsmanship level.",
        "Modern Turkish silver brands — such as İstanbul Gümüş — unite the Ottoman tradition's aesthetic heritage with contemporary designs. The 925 standard is the modern expression of a quality ethos dating back to the Ottoman era.",
      ]},
    ],
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "How much silver was in an Ottoman akçe?", a: "Initially about 1.2 grams of pure silver. Through centuries of debasement, weight dropped below 0.3 grams by the 18th century." },
        { q: "When was the Grand Bazaar built?", a: "In 1461 by Sultan Mehmed II. The core structure, the İç Bedesten (Cevahir Bedesteni), dates to this period." },
        { q: "What is Ehl-i Hıref?", a: "The community of artists and craftsmen working for the sultan at Topkapı Palace, encompassing jewelers, calligraphers, miniaturists, and many other arts." },
        { q: "Where is Ottoman silver displayed?", a: "Topkapı Palace Museum (Istanbul), Museum of Turkish and Islamic Arts (Istanbul), V&A Museum (London), and the Metropolitan Museum (New York) hold major collections." },
      ],
    },
    sources: { heading: "Sources", items: [
      "Topkapı Palace Museum — Treasury Section Catalog",
      "Suraiya Faroqhi — \"Ottoman Culture and Daily Life\"",
      "Nurhan Atasoy — \"Metalwork in Ottoman Art\"",
      "Istanbul Jewelers' Chamber — Historical Archive",
      "Halil İnalcık — \"The Ottoman Empire: The Classical Age\"",
    ]},
    related: { heading: "Related Topics", items: [
      { title: "Silver in Islamic Civilization", path: "/en/history/islam", cat: "History" },
      { title: "Traditional Techniques", path: "/en/manufacturing/traditional", cat: "Manufacturing" },
      { title: "Silver in Anatolian Folklore", path: "/en/culture/anatolia", cat: "Culture" },
    ]},
    sponsor: { text: "Discover modern interpretations of the Ottoman silver tradition at İstanbul Gümüş.", cta: "View on Instagram", note: "This content is supported by İstanbul Gümüş." },
    techData: [
      { name: "Filigree (Telkâri)", desc: "Creating motifs by twisting fine silver wire. Mardin, Beypazarı, and Midyat are main centers.", era: "15th-20th c." },
      { name: "Niello (Savat)", desc: "Filling engraved designs on silver with black alloy (copper-silver-sulfur).", era: "16th-19th c." },
      { name: "Engraving (Kalemkârlık)", desc: "Cutting designs into silver with steel burins. Floral and geometric motifs.", era: "15th-19th c." },
      { name: "Inlay (Kakma)", desc: "Inlaying gold or copper wire into silver. Two-tone decorative effect.", era: "16th-18th c." },
      { name: "Forging (Dövme)", desc: "Shaping silver sheet with hammers. Vessels, trays, ewers.", era: "14th-20th c." },
      { name: "Wire Weaving (Hasır)", desc: "Combining fine silver wires through weaving technique. Trabzon tradition.", era: "17th-20th c." },
    ],
    techTitle: "Ottoman Silver Techniques",
    darkMode: "Mode", toc: "Contents",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة المعرفة بالفضة",
    breadcrumb: ["الرئيسية", "التاريخ", "صياغة الفضة العثمانية"],
    category: "التاريخ",
    title: "صياغة الفضة العثمانية",
    subtitle: "من البازار الكبير إلى القصر، ومن الآقجة إلى التلكاري — إرث الإمبراطورية العثمانية الفضي",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٢ دقيقة قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "كانت الإمبراطورية العثمانية لستة قرون أكبر مستهلك ومعالج للفضة في العالم الإسلامي.",
        "يتناول هذا المقال صياغة الفضة العثمانية — النظام النقدي، تنظيم النقابات، ورش القصر، التقاليد الإقليمية والإرث المستمر.",
      ]},
      { id: "akce", heading: "الآقجة: العملة الفضية العثمانية", paragraphs: [
        "خدمت الآقجة العثمانية كعملة فضية أساسية لحوالي ٥٠٠ عام. سُكت أول آقجة في عهد أورخان غازي (١٣٢٦) بوزن ١٫٢ غرام من الفضة.",
        "قام النظام النقدي على الآقجة: ١ ذهب = ٥٠-٦٠ آقجة. كما استُخدمت البارة والقروش.",
        "خلال إصلاحات التنظيمات (١٨٣٩) أصبح القروش الوحدة الأساسية وسُحبت الآقجة.",
      ]},
      { id: "darphane", heading: "دار الضرب العامرة وشبكة دور الضرب", paragraphs: [
        "كانت دار الضرب العامرة في إسطنبول الدار المركزية. سك العملة باسم السلطان كان أقوى رمز للسيادة.",
        "عملت عشرات دور الضرب عبر الإمبراطورية: إسطنبول، أدرنة، بورصة، سالونيك، طرابزون، غوموشخانه، أماسيا، القاهرة، بغداد، وتونس.",
      ]},
      { id: "guild", heading: "نقابة الصاغة والتنظيم الحرفي", paragraphs: [
        "نُظم الصاغة وصنّاع الفضة كنقابات مستقلة. سوق الصاغة في البازار الكبير كان من أعرق مناطق التجارة.",
        "اتبع نظام النقابات تسلسلاً صارماً: متدرب ← صانع ← أستاذ. كل أستاذ يحمل ختمه الخاص.",
        "طُبق نظام التسعير (النرخ) — أشرفت الدولة على أسعار وعيار المنتجات الفضية.",
      ]},
      { id: "palace", heading: "ورش القصر: أهل الحرف", paragraphs: [
        "ضمت منظمة أهل الحرف في قصر توبكابي الفنانين والحرفيين العاملين للسلطان.",
        "المنتجات: أوعية بطغراء السلطان، هدايا دبلوماسية، إضاءة المساجد، وأدوات المطبخ الملكي.",
        "القرن السادس عشر كان ذروة فن الفضة العثماني في عهد سليمان القانوني.",
      ]},
      { id: "grandbazaar", heading: "البازار الكبير: قلب الفضة", paragraphs: [
        "بُني البازار الكبير عام ١٤٦١ على يد السلطان محمد الفاتح. كان تاريخياً أكبر سوق مغطى في العالم.",
        "انقسم حرفيو الفضة إلى أربع مجموعات: سحّابو الأسلاك، الصاغة، النقّاشون، وصنّاع السافات.",
        "لا يزال البازار الكبير أهم مركز لتجارة الفضة في إسطنبول مع مئات الصاغة.",
      ]},
      { id: "techniques", heading: "تقنيات الفضة العثمانية", paragraphs: ["طوّر الصاغة العثمانيون وأتقنوا تقنيات متنوعة:"], widget: "techniques" },
      { id: "regional", heading: "المراكز الإقليمية للفضة", paragraphs: [
        "طورت مناطق عديدة تقاليد فضية مميزة خارج إسطنبول.",
        "طرابزون: مهد تقنية الحياكة السلكية. الجمع بين أسلاك فضية رفيعة بتقنية النسج.",
        "ديار بكر وماردين: تقليد التلكاري المبني على إرث الأرتقيين.",
        "القاهرة ودمشق: أساتذة عثمانيون واصلوا تقليد المماليك ومزجوا الأنماط العربية بالجمالية العثمانية.",
        "البلقان: في سالونيك وسراييفو وبريزرن، شكلت صياغة الفضة فسيفساء غنية بمساهمات حرفيين مسيحيين ويهود.",
      ]},
      { id: "legacy", heading: "الإرث المستمر", paragraphs: [
        "يشكل إرث الفضة العثماني أساس صناعة المجوهرات التركية اليوم.",
        "يضم متحف قصر توبكابي واحدة من أغنى مجموعات الفضة العثمانية في العالم.",
        "العلامات التجارية التركية الحديثة مثل إسطنبول غوموش تجمع بين إرث التقليد العثماني والتصاميم المعاصرة.",
      ]},
    ],
    faq: { heading: "الأسئلة الشائعة", items: [
      { q: "كم كان وزن الآقجة العثمانية من الفضة؟", a: "حوالي ١٫٢ غرام في البداية. انخفض الوزن عبر القرون إلى أقل من ٠٫٣ غرام." },
      { q: "متى بُني البازار الكبير؟", a: "عام ١٤٦١ على يد السلطان محمد الفاتح." },
      { q: "ما هي أهل الحرف؟", a: "مجتمع الفنانين والحرفيين العاملين للسلطان في قصر توبكابي." },
    ]},
    sources: { heading: "المصادر", items: ["متحف قصر توبكابي — كتالوج قسم الخزينة", "نورهان أتاصوي — فن المعادن العثماني", "خليل إينالجك — الإمبراطورية العثمانية: العصر الكلاسيكي"] },
    related: { heading: "مواضيع ذات صلة", items: [
      { title: "الفضة في الحضارة الإسلامية", path: "/ar/history/islam", cat: "التاريخ" },
      { title: "التقنيات التقليدية", path: "/ar/manufacturing/traditional", cat: "التصنيع" },
    ]},
    sponsor: { text: "اكتشفوا التفسيرات الحديثة لتقليد الفضة العثماني في إسطنبول غوموش.", cta: "شاهد على إنستغرام", note: "هذا المحتوى مدعوم من إسطنبول غوموش." },
    techData: [
      { name: "التلكاري (فيليغران)", desc: "تشكيل زخارف بلف أسلاك فضية رفيعة. ماردين وبيبازاري ومديات.", era: "ق١٥-٢٠" },
      { name: "السافات (نيللو)", desc: "ملء النقوش على الفضة بسبيكة سوداء.", era: "ق١٦-١٩" },
      { name: "النقش (كالمكارلك)", desc: "حفر تصاميم على الفضة بأزاميل فولاذية.", era: "ق١٥-١٩" },
      { name: "التطعيم (كاكما)", desc: "تطعيم أسلاك ذهب أو نحاس في الفضة.", era: "ق١٦-١٨" },
      { name: "الطرق (دوفمه)", desc: "تشكيل صفائح الفضة بالمطرقة.", era: "ق١٤-٢٠" },
      { name: "الحياكة السلكية", desc: "الجمع بين أسلاك فضية بتقنية النسج. تقليد طرابزون.", era: "ق١٧-٢٠" },
    ],
    techTitle: "تقنيات الفضة العثمانية",
    darkMode: "الوضع", toc: "المحتويات",
  },
};

function TechGrid({ data, title, dark }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const gold = "#D4AF37";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  return (
    <div style={{ margin: "20px 0" }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: textP, marginBottom: 16 }}>{title}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
        {data.map((t, i) => (
          <div key={i} style={{ padding: "16px", borderRadius: 12, border: `1px solid ${border}`, background: dark ? "rgba(192,192,192,0.02)" : "rgba(192,192,192,0.04)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: textP }}>{t.name}</span>
              <span style={{ fontSize: 9, color: gold, fontWeight: 600, background: `${gold}15`, padding: "2px 6px", borderRadius: 4 }}>{t.era}</span>
            </div>
            <div style={{ fontSize: 12, color: textS, lineHeight: 1.5 }}>{t.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OttomanSilverArticle() {
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
    <div dir={isRTL ? "rtl" : "ltr"} style={{ fontFamily: fontB, background: bgP, color: textP, minHeight: "100vh" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*{margin:0;padding:0;box-sizing:border-box}::selection{background:rgba(192,192,192,0.3)}`}</style>
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
        <div style={{height:220,borderRadius:16,marginBottom:36,overflow:"hidden",background:dark?"linear-gradient(135deg,#1a1a2e,#2a2a3e,#1a1a2e)":"linear-gradient(135deg,#e8e8e8,#d0d0d0,#e8e8e8)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
          <div style={{textAlign:"center",zIndex:1}}>
            <div style={{fontFamily:fontD,fontSize:48,fontWeight:700,background:`linear-gradient(135deg,${accent},${gold})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>عثمان</div>
            <div style={{fontSize:12,color:textS,letterSpacing:"0.15em",marginTop:8}}>OTTOMAN SILVERWORK</div>
          </div>
          {[0,60,120].map(d=><div key={d} style={{position:"absolute",width:160,height:160,border:`1px solid ${accent}08`,top:"50%",left:"50%",transform:`translate(-50%,-50%) rotate(${d}deg)`}}/>)}
        </div>

        {t.sections.map(sec=>(
          <section key={sec.id} style={{marginBottom:36}}>
            {sec.heading&&<h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:16,paddingTop:8}}>{sec.heading}</h2>}
            {sec.paragraphs.map((p,pi)=><p key={pi} style={{fontSize:15,lineHeight:1.8,color:textS,marginBottom:14}}>{p}</p>)}
            {sec.widget==="techniques"&&<TechGrid data={t.techData} title={t.techTitle} dark={dark}/>}
          </section>
        ))}

        <section style={{marginBottom:36,marginTop:48}}>
          <h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:20}}>{t.faq.heading}</h2>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {t.faq.items.map((item,i)=>(
              <div key={i} style={{border:`1px solid ${openFaq===i?gold+"44":border}`,borderRadius:12,overflow:"hidden",background:openFaq===i?(dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.04)"):"transparent"}}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{width:"100%",border:"none",cursor:"pointer",background:"transparent",padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",color:textP,fontSize:14,fontWeight:500,fontFamily:fontB,textAlign:isRTL?"right":"left",gap:12}}>
                  <span style={{flex:1}}>{item.q}</span>
                  <span style={{fontSize:18,color:textS,transform:openFaq===i?"rotate(45deg)":"rotate(0)",flexShrink:0}}>+</span>
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
