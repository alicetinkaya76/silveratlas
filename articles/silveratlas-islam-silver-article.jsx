import { useState } from "react";

// ─── i18n ────────────────────────────────────────────────
const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Tarih", "İslam Medeniyetinde Gümüş"],
    category: "Tarih",
    title: "İslam Medeniyetinde Gümüş",
    subtitle: "Dirhem sisteminden darphanelere, İslam dünyasında gümüşün ekonomik ve kültürel rolü",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "12 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Gümüş, İslam medeniyetinin ekonomik temellerinden birini oluşturmuştur. Hz. Peygamber döneminden Osmanlı İmparatorluğu'nun son yıllarına kadar, gümüş dirhem İslam dünyasının en yaygın para birimi olmuştur.",
          "İslam'ın ilk yüzyıllarında kurulan darphane sistemi, gümüş sikkelerin standartlaştırılmasını ve ticaretin genişlemesini sağlamıştır. Bu makale, İslam medeniyetinde gümüşün ekonomik, kültürel ve sanatsal rolünü incelemektedir.",
        ],
      },
      {
        id: "dirhem", heading: "Dirhem: İslam'ın Gümüş Para Sistemi",
        paragraphs: [
          "Dirhem kelimesi Yunanca 'drahmi'den (δραχμή) türemiştir. Hz. Ömer döneminde (634-644) İslam para sistemi resmileştirilmiş ve gümüş dirhem standart ağırlığı 2,97 gram olarak belirlenmiştir.",
          "Emevî Halifesi Abdülmelik bin Mervan (685-705), İslam tarihinde bir devrim gerçekleştirerek tamamen İslamî tasarıma sahip ilk dirhemleri bastırdı. Bu dirhemlerde insan figürü yerine Kur'an ayetleri ve kelime-i şehadet yer almaktaydı — İslam sanatındaki 'anikonik' geleneğin en erken örneklerinden biri.",
          "Standart İslamî dirhem özellikleri: 2,97 gram ağırlık, yaklaşık %95 gümüş saflık, her iki yüzde Arapça kitabeler. Saflık oranı dönem ve hanedana göre değişse de, dirhem sistemi yaklaşık 1300 yıl boyunca İslam dünyasının ticaret omurgası olmuştur.",
        ],
      },
      {
        id: "darphane", heading: "Darphane Sistemi ve Coğrafyası",
        paragraphs: [
          "İslam dünyasında darphane (Arapça: dâru'l-darb — 'dövme evi') kurumu, merkezi otoritenin en önemli sembollerinden biriydi. Bir hükümdarın adına sikke bastırması (sikke hakkı), egemenliğin resmî ilanı anlamına geliyordu.",
          "İslam coğrafyasında yüzlerce darphane faaliyet göstermiştir. SilverAtlas haritasında şu anda 54 tarihî darphane, 13 farklı hanedan dönemine ait olarak kayıtlıdır. Bu darphaneler Endülüs'ten Hindistan'a, Orta Asya'dan Kuzey Afrika'ya kadar geniş bir coğrafyayı kapsar.",
        ],
        widget: "dynastyGrid",
      },
      {
        id: "emevi", heading: "Emevî Dönemi (661-750)",
        paragraphs: [
          "Emevîler, İslam sikke tarihinin kurucu hanedanıdır. Abdülmelik'in para reformu (696-697) öncesinde Bizans ve Sasani sikkeleri taklit edilen Arap-Bizans ve Arap-Sasani sikkeleri kullanılmaktaydı.",
          "Reform sonrası basılan 'epigrafik' dirhemlerde yalnızca Arapça yazı bulunur: ön yüzde kelime-i tevhid, arka yüzde sure ve darphane/tarih bilgisi. Bu sade ama güçlü tasarım, sonraki tüm İslam hanedanlarına model oluşturmuştur.",
          "Başlıca Emevî darphaneleri: Dımaşk (başkent), Vâsıt (Irak'ın en üretken darı), Kûfe ve Basra.",
        ],
      },
      {
        id: "abbasi", heading: "Abbasî Dönemi (750-1258)",
        paragraphs: [
          "Abbasîler, darphane ağını genişleterek İslam dünyasının en büyük gümüş sikke üretim kapasitesine ulaştı. Bağdat, Sâmerrâ, Rey, İsfahan ve Nişabur başlıca darphane merkezleriydi.",
          "Abbasî dirhemleri Viking ticaret yolları aracılığıyla İskandinavya'ya kadar ulaşmıştır — İsveç'te bulunan hazine definelerinde binlerce Abbasî dirhemi ele geçirilmiştir. Bu, İslam dünyası ile Kuzey Avrupa arasındaki ticari bağların somut kanıtıdır.",
          "Abbasî döneminde gümüş madenciliği özellikle Horasan ve Mâverâünnehir bölgelerinde yoğunlaşmıştır. Panjhir (Afganistan) gümüş madenleri, 9-10. yüzyıllarda dünyanın en verimli gümüş kaynağıydı.",
        ],
      },
      {
        id: "selcuklu", heading: "Selçuklu ve Anadolu Dönemi",
        paragraphs: [
          "Büyük Selçuklu ve Anadolu Selçuklu devletleri, gümüş sikke basımında önemli bir gelenek oluşturmuştur. Selçuklu dirhemleri genellikle daha küçük boyutlu olup, bazılarında Arapça'nın yanı sıra Farsça da yer almaktaydı.",
          "Anadolu Selçuklu darphaneleri Konya, Sivas, Kayseri, Erzurum ve Sinop'ta faaliyet göstermiştir. Özellikle Konya, hem başkent hem de önemli bir ticaret merkezi olarak yoğun sikke üretimi gerçekleştirmiştir.",
          "Anadolu beylikler döneminde Artuklular (Diyarbakır, Mardin) ve Candaroğulları (Kastamonu) gibi yerel hanedanlar da kendi gümüş sikkelerini basmıştır. Artuklu sikkeleri, figürlü tasarımlarıyla İslam nümismatiğinde özel bir yere sahiptir.",
        ],
      },
      {
        id: "osmanli", heading: "Osmanlı Gümüş Geleneği",
        paragraphs: [
          "Osmanlılar, Avrupa ve İslam dünyası arasında gümüş ticaretinin en büyük aracısı olmuştur. Osmanlı akçesi — küçük gümüş sikke — imparatorluğun temel para birimi olarak yüzyıllarca kullanılmıştır.",
          "İstanbul Darphane-i Amire, Osmanlı'nın en büyük darphane tesisiydi. Bunun yanı sıra Edirne, Bursa, Trabzon, Gümüşhane, Amasya ve Mısır'da da darphaneler faaliyet göstermiştir.",
          "Gümüşhane ili adını, bölgedeki zengin gümüş madenlerinden almaktadır. Osmanlı döneminde bu madenler imparatorluğun gümüş ihtiyacının önemli bir bölümünü karşılamıştır.",
        ],
      },
      {
        id: "zekat", heading: "Gümüş ve İslam Hukuku",
        paragraphs: [
          "İslam hukukunda gümüş, zekât hesaplamasında temel referans metallerden biridir. Gümüş nisabı (zekâtın farz olduğu asgari miktar) 200 dirhem, yani yaklaşık 595 gram saf gümüştür.",
          "Fıkıh kitaplarında gümüş kaplar ve takıların kullanımı ayrıntılı şekilde ele alınmıştır. Hanefi mezhebi erkeklerin gümüş yüzük takmasına izin verirken, gümüş kap kullanımı konusunda daha kısıtlayıcı görüşler mevcuttur.",
          "Gümüş, İslam sanatında da önemli bir malzemedir: kaligrafi levhaları, Kur'an ciltleri, mushaf süslemeleri, cami avizesi ve kandilleri geleneksel olarak gümüş işçiliğiyle üretilmiştir.",
        ],
      },
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "İslam'da ilk gümüş dirhem ne zaman basıldı?", a: "Tamamen İslamî tasarıma sahip ilk dirhem, Emevî Halifesi Abdülmelik bin Mervan tarafından 696-697 yılında (H. 77-78) bastırılmıştır." },
        { q: "Bir dirhem kaç gram gümüştür?", a: "Standart İslamî dirhem 2,97 gram ağırlığındadır. Ancak farklı hanedan ve dönemlerde ağırlık hafif farklılıklar göstermiştir." },
        { q: "Gümüş zekât nisabı nedir?", a: "200 dirhem (yaklaşık 595 gram) saf gümüş veya eşdeğeri miktardır. Bu değer, bir yıl boyunca elde tutulursa %2,5 zekât yükümlülüğü doğar." },
        { q: "İslam dünyasında kaç darphane vardı?", a: "Tarih boyunca yüzlerce darphane kaydedilmiştir. SilverAtlas'ta şu anda 54 önemli darphane, 13 farklı hanedana ait olarak haritalanmıştır." },
        { q: "Viking definelerinde neden İslam dirhemi bulunur?", a: "Vikingler, kürk ve köle ticareti yoluyla İslam dünyasıyla yoğun ticari ilişki kurmuşlardır. Gümüş dirhem, bu ticaretin ana para birimiydi." },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "DarpIslam Projesi — islamicatlas.org",
        "Stefan Heidemann — \"The Evolving Representation of the Early Islamic Empire and its Religion on Coin Imagery\"",
        "Michael Bates — \"Islamic Coins\" (ANS Handbook)",
        "Thomas S. Noonan — \"The Islamic World, Russia and the Vikings\"",
        "Türk Tarih Kurumu — \"Osmanlı Darphane Kayıtları\"",
        "İSAM — İslam Ansiklopedisi: \"Dirhem\" maddesi",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "Gümüşün Tarihi", path: "/tr/tarih/tarih", cat: "Tarih" },
        { title: "Osmanlı Gümüşçülüğü", path: "/tr/tarih/osmanli", cat: "Tarih" },
        { title: "Dünya Gümüş Haritası", path: "/tr/harita", cat: "Harita" },
      ],
    },
    sponsor: {
      text: "İslam gümüş geleneğinin modern yorumlarını keşfedin.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    dynastyData: [
      { name: "Emevî", period: "661-750", mints: 4, key: "Dımaşk, Vâsıt" },
      { name: "Emevî (Endülüs)", period: "756-1031", mints: 3, key: "Kurtuba" },
      { name: "Abbasî", period: "750-1258", mints: 5, key: "Bağdat, Sâmerrâ" },
      { name: "Selçuklu", period: "1037-1307", mints: 6, key: "Konya, Sivas" },
      { name: "Osmanlı", period: "1299-1922", mints: 7, key: "İstanbul, Bursa" },
      { name: "Fâtımî", period: "909-1171", mints: 3, key: "Kahire" },
      { name: "Eyyûbî", period: "1171-1260", mints: 1, key: "Hama" },
      { name: "Memlûk", period: "1250-1517", mints: 1, key: "Halep" },
      { name: "Tîmûrî", period: "1370-1507", mints: 2, key: "Semerkant" },
      { name: "Safevî", period: "1501-1736", mints: 2, key: "İsfahan" },
      { name: "Bâbür", period: "1526-1857", mints: 2, key: "Agra" },
      { name: "Altın Orda", period: "1227-1502", mints: 2, key: "Saray" },
      { name: "İlhanlı", period: "1256-1353", mints: 1, key: "Tebriz" },
    ],
    dynastyTitle: "Hanedanlara Göre Darphaneler",
    dynastyNote: "SilverAtlas haritasında kayıtlı 54 darphane",
    darkMode: "Mod", toc: "İçindekiler",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "History", "Silver in Islamic Civilization"],
    category: "History",
    title: "Silver in Islamic Civilization",
    subtitle: "From the dirham system to mints: silver's economic and cultural role in the Islamic world",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "12 min read" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Silver formed one of the economic foundations of Islamic civilization. From the era of the Prophet to the final years of the Ottoman Empire, the silver dirham served as the most widespread currency in the Islamic world.",
          "The mint system established in Islam's first centuries enabled the standardization of silver coinage and the expansion of trade. This article examines silver's economic, cultural, and artistic role in Islamic civilization.",
        ],
      },
      {
        id: "dirhem", heading: "The Dirham: Islam's Silver Currency System",
        paragraphs: [
          "The word dirham derives from the Greek 'drachma' (δραχμή). During the caliphate of Umar (634-644), the Islamic monetary system was formalized and the standard silver dirham weight was set at 2.97 grams.",
          "Umayyad Caliph Abd al-Malik ibn Marwan (685-705) carried out a revolution in Islamic history by minting the first purely Islamic dirhams. These coins featured Quranic verses and the shahada instead of human figures — one of the earliest examples of the 'aniconic' tradition in Islamic art.",
          "Standard Islamic dirham specifications: 2.97 grams weight, approximately 95% silver purity, Arabic inscriptions on both sides. While purity varied by era and dynasty, the dirham system served as the trade backbone of the Islamic world for approximately 1,300 years.",
        ],
      },
      {
        id: "darphane", heading: "The Mint System and Geography",
        paragraphs: [
          "In the Islamic world, the mint (Arabic: dār al-ḍarb — 'house of striking') was one of the most important symbols of central authority. Having coins struck in a ruler's name (the right of sikka) constituted the formal declaration of sovereignty.",
          "Hundreds of mints operated across the Islamic world. The SilverAtlas map currently records 54 historical mints belonging to 13 different dynasties, spanning from Andalusia to India and from Central Asia to North Africa.",
        ],
        widget: "dynastyGrid",
      },
      {
        id: "umayyad", heading: "Umayyad Period (661-750)",
        paragraphs: [
          "The Umayyads are the founding dynasty of Islamic coinage history. Before Abd al-Malik's monetary reform (696-697), Arab-Byzantine and Arab-Sasanian coins imitating Byzantine and Sasanian designs were in use.",
          "Post-reform 'epigraphic' dirhams bear only Arabic text: the shahada on the obverse, and a Quranic sura with mint and date information on the reverse. This simple yet powerful design became the model for all subsequent Islamic dynasties.",
          "Major Umayyad mints: Damascus (capital), Wasit (Iraq's most productive mint), Kufa, and Basra.",
        ],
      },
      {
        id: "abbasid", heading: "Abbasid Period (750-1258)",
        paragraphs: [
          "The Abbasids expanded the mint network to achieve the Islamic world's largest silver coinage production capacity. Baghdad, Samarra, Rayy, Isfahan, and Nishapur were the principal mint centers.",
          "Abbasid dirhams reached as far as Scandinavia via Viking trade routes — thousands of Abbasid dirhams have been found in Swedish hoards. This is concrete evidence of commercial links between the Islamic world and Northern Europe.",
          "During the Abbasid era, silver mining was concentrated in the Khorasan and Transoxiana regions. The Panjshir (Afghanistan) silver mines were the world's most productive silver source in the 9th-10th centuries.",
        ],
      },
      {
        id: "seljuk", heading: "Seljuk and Anatolian Period",
        paragraphs: [
          "The Great Seljuk and Anatolian Seljuk states established a significant tradition in silver coinage. Seljuk dirhams were generally smaller in size, and some featured Persian alongside Arabic.",
          "Anatolian Seljuk mints operated in Konya, Sivas, Kayseri, Erzurum, and Sinop. Konya, as both the capital and a major trade center, produced coins at a high volume.",
          "During the Anatolian beyliks period, local dynasties such as the Artuqids (Diyarbakır, Mardin) and Candarids (Kastamonu) also struck their own silver coins. Artuqid coins hold a special place in Islamic numismatics for their figural designs.",
        ],
      },
      {
        id: "ottoman", heading: "Ottoman Silver Tradition",
        paragraphs: [
          "The Ottomans became the greatest intermediary in silver trade between Europe and the Islamic world. The Ottoman akçe — a small silver coin — served as the empire's base currency for centuries.",
          "The Istanbul Imperial Mint (Darphane-i Amire) was the Ottoman Empire's largest mint facility. Mints also operated in Edirne, Bursa, Trabzon, Gümüşhane, Amasya, and Egypt.",
          "The province of Gümüşhane ('silver house') takes its name from the region's rich silver mines. During the Ottoman period, these mines supplied a significant portion of the empire's silver needs.",
        ],
      },
      {
        id: "zakat", heading: "Silver and Islamic Law",
        paragraphs: [
          "In Islamic jurisprudence, silver is a fundamental reference metal in zakat calculation. The silver nisab (minimum threshold for zakat obligation) is 200 dirhams, approximately 595 grams of pure silver.",
          "Fiqh literature addresses the use of silver vessels and jewelry in detail. The Hanafi school permits men to wear silver rings, while views on silver vessels are more restrictive.",
          "Silver is also an important material in Islamic art: calligraphy panels, Quran bindings, mushaf decorations, mosque chandeliers and oil lamps have traditionally been produced with silver craftsmanship.",
        ],
      },
    ],
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "When was the first Islamic silver dirham minted?", a: "The first purely Islamic dirham was minted by Umayyad Caliph Abd al-Malik ibn Marwan in 696-697 CE (AH 77-78)." },
        { q: "How much does a dirham weigh?", a: "The standard Islamic dirham weighs 2.97 grams. However, weights varied slightly across different dynasties and periods." },
        { q: "What is the silver nisab for zakat?", a: "200 dirhams (approximately 595 grams) of pure silver. If held for one year, a 2.5% zakat obligation arises." },
        { q: "How many mints existed in the Islamic world?", a: "Hundreds of mints have been recorded throughout history. SilverAtlas currently maps 54 significant mints belonging to 13 different dynasties." },
        { q: "Why are Islamic dirhams found in Viking hoards?", a: "Vikings maintained intensive trade relations with the Islamic world through fur and slave trade. The silver dirham was the primary currency of this commerce." },
      ],
    },
    sources: {
      heading: "Sources",
      items: [
        "DarpIslam Project — islamicatlas.org",
        "Stefan Heidemann — \"The Evolving Representation of the Early Islamic Empire\"",
        "Michael Bates — \"Islamic Coins\" (ANS Handbook)",
        "Thomas S. Noonan — \"The Islamic World, Russia and the Vikings\"",
        "Turkish Historical Society — Ottoman Mint Records",
        "TDV İslam Ansiklopedisi — \"Dirham\" entry",
      ],
    },
    related: {
      heading: "Related Topics",
      items: [
        { title: "History of Silver", path: "/en/history/history", cat: "History" },
        { title: "Ottoman Silverwork", path: "/en/history/ottoman", cat: "History" },
        { title: "World Silver Map", path: "/en/map", cat: "Map" },
      ],
    },
    sponsor: {
      text: "Discover modern interpretations of the Islamic silver tradition.",
      cta: "View on Instagram",
      note: "This content is supported by İstanbul Gümüş.",
    },
    dynastyData: [
      { name: "Umayyad", period: "661-750", mints: 4, key: "Damascus, Wasit" },
      { name: "Umayyad (Andalusia)", period: "756-1031", mints: 3, key: "Córdoba" },
      { name: "Abbasid", period: "750-1258", mints: 5, key: "Baghdad, Samarra" },
      { name: "Seljuk", period: "1037-1307", mints: 6, key: "Konya, Sivas" },
      { name: "Ottoman", period: "1299-1922", mints: 7, key: "Istanbul, Bursa" },
      { name: "Fatimid", period: "909-1171", mints: 3, key: "Cairo" },
      { name: "Ayyubid", period: "1171-1260", mints: 1, key: "Hama" },
      { name: "Mamluk", period: "1250-1517", mints: 1, key: "Aleppo" },
      { name: "Timurid", period: "1370-1507", mints: 2, key: "Samarkand" },
      { name: "Safavid", period: "1501-1736", mints: 2, key: "Isfahan" },
      { name: "Mughal", period: "1526-1857", mints: 2, key: "Agra" },
      { name: "Golden Horde", period: "1227-1502", mints: 2, key: "Saray" },
      { name: "Ilkhanate", period: "1256-1353", mints: 1, key: "Tabriz" },
    ],
    dynastyTitle: "Mints by Dynasty",
    dynastyNote: "54 mints recorded on SilverAtlas map",
    darkMode: "Mode", toc: "Contents",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة المعرفة بالفضة",
    breadcrumb: ["الرئيسية", "التاريخ", "الفضة في الحضارة الإسلامية"],
    category: "التاريخ",
    title: "الفضة في الحضارة الإسلامية",
    subtitle: "من نظام الدرهم إلى دور الضرب: الدور الاقتصادي والثقافي للفضة في العالم الإسلامي",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٢ دقيقة قراءة" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "شكّلت الفضة أحد الأسس الاقتصادية للحضارة الإسلامية. من عهد النبي ﷺ حتى أواخر الدولة العثمانية، كان الدرهم الفضي أكثر العملات انتشاراً في العالم الإسلامي.",
          "أتاح نظام دور الضرب الذي أُسس في القرون الأولى للإسلام توحيد المسكوكات الفضية وتوسيع التجارة.",
        ],
      },
      {
        id: "dirhem", heading: "الدرهم: نظام العملة الفضية في الإسلام",
        paragraphs: [
          "كلمة درهم مشتقة من اليونانية 'دراخما'. في عهد الخليفة عمر بن الخطاب (٦٣٤-٦٤٤) تم تنظيم النظام النقدي الإسلامي وتحديد وزن الدرهم القياسي بـ ٢٫٩٧ غرام.",
          "أحدث الخليفة الأموي عبد الملك بن مروان (٦٨٥-٧٠٥) ثورة في تاريخ الإسلام بسك أول دراهم ذات تصميم إسلامي بحت، تحمل آيات قرآنية والشهادتين بدلاً من الصور البشرية.",
          "مواصفات الدرهم الإسلامي القياسي: ٢٫٩٧ غرام وزناً، نقاء فضة حوالي ٩٥٪، نقوش عربية على الوجهين.",
        ],
      },
      {
        id: "darphane", heading: "نظام دور الضرب وجغرافيتها",
        paragraphs: [
          "كانت دار الضرب من أهم رموز السلطة المركزية في العالم الإسلامي. سك العملة باسم الحاكم (حق السكة) كان إعلاناً رسمياً للسيادة.",
          "عملت مئات دور الضرب عبر العالم الإسلامي. تسجل خريطة SilverAtlas حالياً ٥٤ دار ضرب تاريخية تعود إلى ١٣ سلالة مختلفة.",
        ],
        widget: "dynastyGrid",
      },
      {
        id: "umayyad", heading: "العصر الأموي (٦٦١-٧٥٠)",
        paragraphs: [
          "الأمويون هم السلالة المؤسسة لتاريخ المسكوكات الإسلامية.",
          "الدراهم 'الكتابية' بعد الإصلاح تحمل نصاً عربياً فقط: الشهادة على الوجه، وسورة قرآنية مع معلومات دار الضرب والتاريخ على الظهر.",
          "أبرز دور الضرب الأموية: دمشق (العاصمة)، واسط، الكوفة، والبصرة.",
        ],
      },
      {
        id: "abbasid", heading: "العصر العباسي (٧٥٠-١٢٥٨)",
        paragraphs: [
          "وسّع العباسيون شبكة دور الضرب ليحققوا أكبر طاقة إنتاجية للمسكوكات الفضية.",
          "وصلت الدراهم العباسية إلى اسكندنافيا عبر طرق تجارة الفايكنغ — عُثر على آلاف الدراهم في كنوز السويد.",
          "تركز التعدين في خراسان وما وراء النهر. كانت مناجم بنجشير (أفغانستان) أغزر مصادر الفضة في القرنين التاسع والعاشر.",
        ],
      },
      {
        id: "seljuk", heading: "العصر السلجوقي والأناضولي",
        paragraphs: [
          "أسست الدولتان السلجوقية الكبرى وسلاجقة الأناضول تقليداً مهماً في سك العملة الفضية.",
          "عملت دور ضرب سلاجقة الأناضول في قونية وسيواس وقيصرية وأرزروم وسينوب.",
          "في عهد البكوات الأناضولية، سكّ الأرتقيون والجاندارلية عملاتهم الفضية الخاصة.",
        ],
      },
      {
        id: "ottoman", heading: "تقليد الفضة العثماني",
        paragraphs: [
          "أصبح العثمانيون أكبر وسيط في تجارة الفضة بين أوروبا والعالم الإسلامي. الآقجة العثمانية خدمت كعملة أساسية لقرون.",
          "كانت دار الضرب العامرة في إسطنبول أكبر منشأة سك عثمانية، إلى جانب دور الضرب في أدرنة وبورصة وطرابزون وغوموشهانة.",
          "تأخذ ولاية غوموشهانة ('بيت الفضة') اسمها من مناجم الفضة الغنية في المنطقة.",
        ],
      },
      {
        id: "zakat", heading: "الفضة والفقه الإسلامي",
        paragraphs: [
          "في الفقه الإسلامي، الفضة معدن مرجعي أساسي في حساب الزكاة. نصاب الفضة ٢٠٠ درهم، أي حوالي ٥٩٥ غراماً من الفضة الخالصة.",
          "تناولت كتب الفقه استخدام أواني الفضة والحلي بالتفصيل.",
          "الفضة أيضاً مادة مهمة في الفن الإسلامي: لوحات الخط والمصاحف وثريات المساجد صُنعت تقليدياً بالحرفة الفضية.",
        ],
      },
    ],
    faq: {
      heading: "الأسئلة الشائعة",
      items: [
        { q: "متى سُك أول درهم إسلامي فضي؟", a: "سُك أول درهم إسلامي بحت على يد الخليفة الأموي عبد الملك بن مروان عام ٦٩٦-٦٩٧م (٧٧-٧٨هـ)." },
        { q: "كم يزن الدرهم؟", a: "الدرهم الإسلامي القياسي يزن ٢٫٩٧ غرام." },
        { q: "ما نصاب زكاة الفضة؟", a: "٢٠٠ درهم (حوالي ٥٩٥ غراماً) من الفضة الخالصة. إذا بلغ النصاب وحال عليه الحول تجب زكاة ٢٫٥٪." },
        { q: "لماذا تُوجد دراهم إسلامية في كنوز الفايكنغ؟", a: "أقام الفايكنغ علاقات تجارية مكثفة مع العالم الإسلامي عبر تجارة الفراء والعبيد." },
      ],
    },
    sources: {
      heading: "المصادر",
      items: [
        "مشروع DarpIslam — islamicatlas.org",
        "Stefan Heidemann — تطور الصورة على المسكوكات الإسلامية المبكرة",
        "Michael Bates — المسكوكات الإسلامية",
        "موسوعة الإسلام — مادة «درهم»",
      ],
    },
    related: {
      heading: "مواضيع ذات صلة",
      items: [
        { title: "تاريخ الفضة", path: "/ar/history/history", cat: "التاريخ" },
        { title: "الفضة العثمانية", path: "/ar/history/ottoman", cat: "التاريخ" },
        { title: "خريطة الفضة العالمية", path: "/ar/map", cat: "الخريطة" },
      ],
    },
    sponsor: {
      text: "اكتشفوا التفسيرات الحديثة لتقليد الفضة الإسلامي.",
      cta: "شاهد على إنستغرام",
      note: "هذا المحتوى مدعوم من إسطنبول غوموش.",
    },
    dynastyData: [
      { name: "الأمويون", period: "٦٦١-٧٥٠", mints: 4, key: "دمشق، واسط" },
      { name: "أمويو الأندلس", period: "٧٥٦-١٠٣١", mints: 3, key: "قرطبة" },
      { name: "العباسيون", period: "٧٥٠-١٢٥٨", mints: 5, key: "بغداد، سامراء" },
      { name: "السلاجقة", period: "١٠٣٧-١٣٠٧", mints: 6, key: "قونية، سيواس" },
      { name: "العثمانيون", period: "١٢٩٩-١٩٢٢", mints: 7, key: "إسطنبول، بورصة" },
      { name: "الفاطميون", period: "٩٠٩-١١٧١", mints: 3, key: "القاهرة" },
      { name: "الأيوبيون", period: "١١٧١-١٢٦٠", mints: 1, key: "حماة" },
      { name: "المماليك", period: "١٢٥٠-١٥١٧", mints: 1, key: "حلب" },
      { name: "التيموريون", period: "١٣٧٠-١٥٠٧", mints: 2, key: "سمرقند" },
      { name: "الصفويون", period: "١٥٠١-١٧٣٦", mints: 2, key: "أصفهان" },
      { name: "المغول", period: "١٥٢٦-١٨٥٧", mints: 2, key: "أكرا" },
      { name: "القبيلة الذهبية", period: "١٢٢٧-١٥٠٢", mints: 2, key: "سراي" },
      { name: "الإلخانات", period: "١٢٥٦-١٣٥٣", mints: 1, key: "تبريز" },
    ],
    dynastyTitle: "دور الضرب حسب السلالة",
    dynastyNote: "٥٤ دار ضرب مسجلة على خريطة SilverAtlas",
    darkMode: "الوضع", toc: "المحتويات",
  },
};

// ─── Dynasty Grid Widget ──────────────────────────────────
function DynastyGrid({ data, title, note, dark, isRTL }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const accent = dark ? "#C0C0C0" : "#708090";
  const gold = "#D4AF37";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";

  return (
    <div style={{ margin: "20px 0" }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: textP, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 11, color: textS, marginBottom: 16 }}>{note}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
        {data.map((d, i) => (
          <div key={i} style={{
            padding: "14px 16px", borderRadius: 12,
            border: `1px solid ${border}`,
            background: dark ? "rgba(192,192,192,0.02)" : "rgba(192,192,192,0.04)",
            transition: "all 0.25s",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: textP }}>{d.name}</div>
              <div style={{
                background: `${gold}18`, color: gold,
                fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 6,
              }}>{d.mints}</div>
            </div>
            <div style={{ fontSize: 11, color: textS, marginBottom: 4 }}>{d.period}</div>
            <div style={{ fontSize: 11, color: accent, fontWeight: 500 }}>{d.key}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Article Component ───────────────────────────────
export default function IslamSilverArticle() {
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');
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
          <p style={{ fontSize: 16, color: textS, lineHeight: 1.6, marginBottom: 20 }}>{t.subtitle}</p>
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

        {/* Hero Visual — Dirham */}
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
              width: 120, height: 120, borderRadius: "50%",
              border: `3px solid ${gold}44`,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column",
              background: dark ? "rgba(212,175,55,0.05)" : "rgba(212,175,55,0.08)",
            }}>
              <div style={{
                fontFamily: "'Noto Naskh Arabic', serif", fontSize: 20, fontWeight: 700,
                background: `linear-gradient(135deg, ${accent}, ${gold})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>درهم</div>
              <div style={{ fontSize: 11, color: textS, marginTop: 4, letterSpacing: "0.1em" }}>DIRHAM</div>
            </div>
          </div>
          {/* Decorative Islamic geometric pattern */}
          {[0, 45, 90, 135].map(deg => (
            <div key={deg} style={{
              position: "absolute", width: 200, height: 200,
              border: `1px solid ${accent}08`,
              top: "50%", left: "50%",
              transform: `translate(-50%, -50%) rotate(${deg}deg)`,
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

            {/* Dynasty Grid Widget */}
            {sec.widget === "dynastyGrid" && (
              <DynastyGrid
                data={t.dynastyData}
                title={t.dynastyTitle}
                note={t.dynastyNote}
                dark={dark}
                isRTL={isRTL}
              />
            )}

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
                        }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sec.table.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci} style={{
                            padding: "10px 14px", borderBottom: `1px solid ${border}`,
                            color: ci === 0 ? textP : textS, fontWeight: ci === 0 ? 600 : 400,
                          }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        {/* FAQ */}
        <section style={{ marginBottom: 36, marginTop: 48 }}>
          <h2 style={{ fontFamily: fontD, fontSize: 24, fontWeight: 600, marginBottom: 20 }}>{t.faq.heading}</h2>
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
            <div key={i} style={{
              fontSize: 13, color: textS, lineHeight: 1.6, marginBottom: 6, display: "flex", gap: 8,
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
          <p style={{ fontSize: 15, color: textP, marginBottom: 16, lineHeight: 1.6 }}>{t.sponsor.text}</p>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 16 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{
                width: 80, height: 80, borderRadius: 10,
                background: dark ? `linear-gradient(${120 * i}deg, #1e1e2e, #2a2a3e)` : `linear-gradient(${120 * i}deg, #e0ddd4, #d5d0c4)`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={textS} strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill={textS} />
                </svg>
              </div>
            ))}
          </div>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "10px 24px", borderRadius: 10,
            background: `linear-gradient(135deg, ${accent}, ${gold})`,
            color: "#0f0f14", fontSize: 13, fontWeight: 600, textDecoration: "none",
          }}>📸 {t.sponsor.cta}</a>
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
