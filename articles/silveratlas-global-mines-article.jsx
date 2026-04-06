import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Maden", "Küresel Gümüş Madenleri"],
    category: "Maden",
    title: "Küresel Gümüş Madenleri",
    subtitle: "Dünyanın en büyük gümüş üreticileri, maden bölgeleri ve üretim istatistikleri",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "11 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Gümüş, dünyanın her kıtasında çıkarılan ancak üretimin büyük bölümünün belirli coğrafyalarda yoğunlaştığı stratejik bir metaldir. Yıllık küresel gümüş madencilik üretimi yaklaşık 26.000 ton civarındadır ve bu miktarın %55'inden fazlası yalnızca beş ülkeden gelmektedir.",
          "Bu makale, küresel gümüş madencilik coğrafyasını, en büyük üretici ülkeleri, önemli maden sahalarını ve Türkiye'nin bu tablodaki konumunu kapsamlı şekilde incelemektedir.",
        ],
      },
      {
        id: "uretici", heading: "En Büyük Gümüş Üretici Ülkeler",
        paragraphs: [
          "Küresel gümüş üretiminde Meksika, Çin ve Peru sürekli olarak ilk üç sırayı paylaşmaktadır. Latin Amerika bölgesi, dünya gümüş üretiminin yaklaşık %40'ını karşılar.",
        ],
        widget: "producers",
      },
      {
        id: "meksika", heading: "Meksika: Dünyanın Gümüş Başkenti",
        paragraphs: [
          "Meksika, 500 yılı aşkın süredir dünyanın en büyük gümüş üreticisidir. İspanyol sömürge döneminde Meksika gümüşü, küresel ticaretin temel para birimi olmuş ve İspanyol 'piece of eight' sikkesi dünyanın ilk uluslararası para birimi haline gelmiştir.",
          "Günümüzde Meksika yıllık yaklaşık 6.300 ton gümüş üretmektedir. Başlıca maden bölgeleri: Zacatecas, Durango, Chihuahua ve Sonora eyaletleri. Fresnillo PLC (dünyanın en büyük birincil gümüş madencisi) ve First Majestic Silver bu bölgelerde faaliyet göstermektedir.",
          "Meksika'nın gümüş mirası kültürel kimliğine de işlemiştir: Taxco şehri, 'dünyanın gümüş başkenti' olarak bilinir ve yüzlerce gümüş atölyesine ev sahipliği yapmaktadır.",
        ],
      },
      {
        id: "peru", heading: "Peru ve Güney Amerika",
        paragraphs: [
          "Peru, tarihsel olarak dünyanın en zengin gümüş yataklarına sahip ülkelerden biridir. Potosí gümüş dağı (bugünkü Bolivya sınırları içinde), 16-17. yüzyıllarda dünyanın en büyük gümüş kaynağıydı ve İspanyol İmparatorluğu'nun ekonomik temelini oluşturmuştur.",
          "Günümüzde Peru yıllık yaklaşık 3.100 ton gümüş üretmektedir. Cerro de Pasco, Antamina ve Buenaventura başlıca maden operasyonlarıdır. Peru gümüşünün büyük bölümü bakır ve çinko madenciliğinin yan ürünü olarak elde edilir.",
          "Şili, Arjantin ve Bolivya da Güney Amerika'nın önemli gümüş üreticileri arasındadır. Arjantin'in adı bile Latince 'argentum' (gümüş) kelimesinden gelmektedir.",
        ],
      },
      {
        id: "cin", heading: "Çin ve Asya",
        paragraphs: [
          "Çin, dünyanın ikinci büyük gümüş üreticisidir (yıllık ~3.400 ton). Hunan, Yunnan, İç Moğolistan ve Guangdong başlıca üretim bölgeleridir. Çin gümüşünün büyük bölümü kurşun-çinko madenciliğinin yan ürünüdür.",
          "Çin aynı zamanda dünyanın en büyük gümüş tüketicisidir — endüstriyel talebin (özellikle güneş paneli üretimi) büyük kısmı Çin'den gelmektedir. Bu durum Çin'i hem arz hem de talep tarafında kritik bir aktör yapmaktadır.",
          "Asya'nın diğer önemli gümüş üreticileri: Hindistan (Rajasthan, Hindustan Zinc), Kazakistan, Endonezya ve Özbekistan.",
        ],
      },
      {
        id: "avustralya", heading: "Avustralya ve Okyanusya",
        paragraphs: [
          "Avustralya, dünyanın en büyük gümüş rezervlerine sahip ülkelerden biridir (~89.000 ton tahmini rezerv). Broken Hill (NSW) dünyanın en büyük kurşun-çinko-gümüş yatağıdır ve 1883'ten bu yana faaliyet göstermektedir.",
          "BHP'nin Cannington madeni (Queensland) dünyanın en büyük gümüş üretim tesislerinden biridir. Avustralya yıllık yaklaşık 1.300 ton gümüş üretmektedir.",
        ],
      },
      {
        id: "avrupa", heading: "Avrupa'da Gümüş Madenciliği",
        paragraphs: [
          "Avrupa'da gümüş madenciliğinin kökleri antik çağlara dayanır. Yunanistan'daki Laurion madenleri (MÖ 5. yüzyıl) Atina'nın deniz gücünü finanse etmiştir.",
          "Ortaçağ Avrupa'sının en önemli gümüş kaynakları: Kutná Hora (Çekya), Freiberg (Saksonya), Kongsberg (Norveç) ve Potosí öncesi dönemde Harz Dağları (Almanya). Bu madenler Avrupa'nın para ekonomisine geçişini mümkün kılmıştır.",
          "Günümüzde Polonya (KGHM Polska Miedź), İsveç (Boliden) ve Rusya Avrupa'nın başlıca gümüş üreticileridir. KGHM, dünyanın en büyük gümüş üreticilerinden biri olup yıllık ~1.200 ton üretim kapasitesine sahiptir.",
        ],
      },
      {
        id: "turkiye", heading: "Türkiye'de Gümüş Madenciliği",
        paragraphs: [
          "Türkiye, tarihsel olarak önemli bir gümüş üretim merkeziydi. Gümüşhane ili adını bölgedeki kadim gümüş madenlerinden almıştır. Osmanlı döneminde bu madenler imparatorluğun gümüş ihtiyacının önemli bir bölümünü karşılamıştır.",
          "Günümüzde Türkiye'nin başlıca gümüş kaynakları: Gümüşhane (Maden Köy), Bolkardağ (Niğde), Artova (Tokat) ve Mastra (Gümüşhane). Üretim hacmi küresel ölçekte küçük (~250 ton/yıl) olmakla birlikte, yeni keşifler potansiyel artışa işaret etmektedir.",
          "Türkiye'deki gümüş, genellikle bakır, kurşun ve çinko madenciliğinin yan ürünü olarak elde edilmektedir. Eti Maden ve çeşitli özel sektör şirketleri bu alanda faaliyet göstermektedir.",
        ],
      },
      {
        id: "yanurunu", heading: "Yan Ürün Olarak Gümüş",
        paragraphs: [
          "Küresel gümüş üretiminin yaklaşık %70'i birincil gümüş madenciliğinden değil, diğer metallerin (bakır, kurşun, çinko, altın) madenciliğinin yan ürünü olarak elde edilmektedir.",
          "Bu durum gümüş arz yapısını benzersiz kılar: gümüş fiyatı yükselse bile, ana metal (bakır veya çinko) talebi düşükse yeni gümüş kapasitesi açılmayabilir. Bu arz esnekliği düşüklüğü, fiyat volatilitesinin nedenlerinden biridir.",
          "Birincil gümüş madenleri üretimin yalnızca ~%30'unu karşılar. Bu madenlerin çoğu Meksika ve Peru'da yer almaktadır.",
        ],
      },
      {
        id: "gelecek", heading: "Gümüş Madenciliğinin Geleceği",
        paragraphs: [
          "Yeşil enerji dönüşümü gümüş talebini hızla artırmaktadır. Güneş paneli endüstrisi tek başına yıllık ~6.000 ton gümüş tüketmektedir ve bu rakamın 2030'a kadar ikiye katlanması beklenmektedir.",
          "Arz tarafında ise yeni büyük maden keşifleri azalmaktadır. Mevcut madenlerin ortalama cevher kalitesi düşmekte, üretim maliyetleri artmaktadır. Bu arz-talep dengesizliği, gümüşü stratejik bir kritik mineral haline getirmektedir.",
          "Geri dönüşüm, toplam gümüş arzının ~%17'sini karşılamaktadır. Elektronik atıklardan ve endüstriyel yan ürünlerden gümüş geri kazanımı teknolojileri geliştirilmektedir.",
        ],
      },
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "En çok gümüş hangi ülkede üretilir?", a: "Meksika, yıllık ~6.300 ton ile dünyanın en büyük gümüş üreticisidir. Onu Çin (~3.400 ton) ve Peru (~3.100 ton) takip eder." },
        { q: "Gümüş tek başına mı çıkarılır?", a: "Hayır, küresel gümüş üretiminin ~%70'i bakır, kurşun, çinko ve altın madenciliğinin yan ürünüdür. Yalnızca ~%30'u birincil gümüş madenlerinden gelir." },
        { q: "Türkiye'de gümüş madeni var mı?", a: "Evet, Gümüşhane, Bolkardağ (Niğde), Artova (Tokat) ve Mastra başlıca gümüş kaynakları arasındadır. Üretim genellikle diğer metallerin yan ürünü olarak gerçekleşir." },
        { q: "Dünyada ne kadar gümüş rezervi kaldı?", a: "Tahmini küresel gümüş rezervi yaklaşık 550.000 tondur. Mevcut üretim hızıyla ~21 yıllık rezerv bulunmaktadır, ancak yeni keşifler bu rakamı değiştirebilir." },
        { q: "Gümüş madenciliği çevreye zararlı mıdır?", a: "Madencilik faaliyetleri su kirliliği, toprak tahribatı ve enerji tüketimi gibi çevresel etkilere sahiptir. Sürdürülebilir madencilik uygulamaları ve geri dönüşüm bu etkileri azaltmaya çalışmaktadır." },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "U.S. Geological Survey — \"Mineral Commodity Summaries: Silver\"",
        "S&P Global Market Intelligence — Mining Database",
        "MTA Genel Müdürlüğü — Türkiye Maden Envanteri",
        "Fresnillo PLC — Yıllık Faaliyet Raporu 2024",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "Türkiye'de Gümüş Madenciliği", path: "/tr/maden/turkiye", cat: "Maden" },
        { title: "Rafinasyon Süreci", path: "/tr/maden/rafinasyon", cat: "Maden" },
        { title: "Dünya Gümüş Haritası", path: "/tr/harita", cat: "Harita" },
      ],
    },
    sponsor: {
      text: "Madenden takıya — gümüşün yolculuğunu keşfedin.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    producerData: [
      { country: "Meksika", flag: "🇲🇽", tons: 6300, pct: 24.2, mines: "Fresnillo, First Majestic" },
      { country: "Çin", flag: "🇨🇳", tons: 3400, pct: 13.1, mines: "Hunan, Yunnan bölgeleri" },
      { country: "Peru", flag: "🇵🇪", tons: 3100, pct: 11.9, mines: "Cerro de Pasco, Antamina" },
      { country: "Şili", flag: "🇨🇱", tons: 1600, pct: 6.2, mines: "Escondida (yan ürün)" },
      { country: "Rusya", flag: "🇷🇺", tons: 1500, pct: 5.8, mines: "Norilsk Nickel" },
      { country: "Polonya", flag: "🇵🇱", tons: 1200, pct: 4.6, mines: "KGHM Polska Miedź" },
      { country: "Avustralya", flag: "🇦🇺", tons: 1300, pct: 5.0, mines: "Cannington, Broken Hill" },
      { country: "Bolivya", flag: "🇧🇴", tons: 1100, pct: 4.2, mines: "San Cristóbal" },
      { country: "ABD", flag: "🇺🇸", tons: 1000, pct: 3.8, mines: "Greens Creek, Rochester" },
      { country: "Türkiye", flag: "🇹🇷", tons: 250, pct: 1.0, mines: "Gümüşhane, Bolkardağ" },
    ],
    producerTitle: "En Büyük Gümüş Üretici Ülkeler (2024 tahmini)",
    producerUnit: "ton/yıl",
    darkMode: "Mod", toc: "İçindekiler",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Mining", "Global Silver Mines"],
    category: "Mining",
    title: "Global Silver Mines",
    subtitle: "The world's largest silver producers, mining regions, and production statistics",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "11 min read" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Silver is a strategic metal mined on every continent, though production is heavily concentrated in specific regions. Annual global silver mine production is approximately 26,000 tonnes, with over 55% coming from just five countries.",
          "This article comprehensively examines the global silver mining landscape, the largest producing countries, significant mine sites, and Turkey's position in this picture.",
        ],
      },
      {
        id: "producers", heading: "Largest Silver Producing Countries",
        paragraphs: ["Mexico, China, and Peru consistently share the top three positions in global silver production. Latin America accounts for approximately 40% of world silver output."],
        widget: "producers",
      },
      {
        id: "mexico", heading: "Mexico: The World's Silver Capital",
        paragraphs: [
          "Mexico has been the world's largest silver producer for over 500 years. During the Spanish colonial era, Mexican silver became the global trade currency, and the Spanish 'piece of eight' became the world's first international currency.",
          "Today, Mexico produces approximately 6,300 tonnes of silver annually. Major mining regions: Zacatecas, Durango, Chihuahua, and Sonora states. Fresnillo PLC (world's largest primary silver miner) and First Majestic Silver operate in these regions.",
          "Mexico's silver heritage has permeated its cultural identity: Taxco is known as the 'silver capital of the world,' hosting hundreds of silver workshops.",
        ],
      },
      {
        id: "peru", heading: "Peru and South America",
        paragraphs: [
          "Peru has historically possessed some of the world's richest silver deposits. The Potosí silver mountain (in present-day Bolivia) was the world's largest silver source in the 16th-17th centuries and formed the economic foundation of the Spanish Empire.",
          "Today, Peru produces approximately 3,100 tonnes annually. Cerro de Pasco, Antamina, and Buenaventura are major operations. Most Peruvian silver is obtained as a byproduct of copper and zinc mining.",
          "Chile, Argentina, and Bolivia are also significant South American producers. Argentina's very name derives from the Latin 'argentum' (silver).",
        ],
      },
      {
        id: "china", heading: "China and Asia",
        paragraphs: [
          "China is the world's second-largest silver producer (~3,400 tonnes/year). Hunan, Yunnan, Inner Mongolia, and Guangdong are the main production regions. Most Chinese silver is a byproduct of lead-zinc mining.",
          "China is simultaneously the world's largest silver consumer — the bulk of industrial demand (especially solar panel production) comes from China, making it a critical player on both supply and demand sides.",
          "Other major Asian producers: India (Rajasthan, Hindustan Zinc), Kazakhstan, Indonesia, and Uzbekistan.",
        ],
      },
      {
        id: "australia", heading: "Australia and Oceania",
        paragraphs: [
          "Australia holds some of the world's largest silver reserves (~89,000 tonnes estimated). Broken Hill (NSW) is the world's largest lead-zinc-silver deposit, operating since 1883.",
          "BHP's Cannington mine (Queensland) is one of the world's largest silver production facilities. Australia produces approximately 1,300 tonnes of silver annually.",
        ],
      },
      {
        id: "europe", heading: "Silver Mining in Europe",
        paragraphs: [
          "Silver mining in Europe dates to antiquity. The Laurion mines in Greece (5th century BCE) financed Athens' naval power.",
          "Medieval Europe's most important silver sources: Kutná Hora (Czechia), Freiberg (Saxony), Kongsberg (Norway), and the Harz Mountains (Germany). These mines enabled Europe's transition to a money economy.",
          "Today, Poland (KGHM), Sweden (Boliden), and Russia are Europe's main silver producers. KGHM is one of the world's largest silver producers with ~1,200 tonnes annual capacity.",
        ],
      },
      {
        id: "turkey", heading: "Silver Mining in Turkey",
        paragraphs: [
          "Turkey was historically an important silver production center. Gümüşhane province takes its name ('silver house') from the region's ancient silver mines.",
          "Today, Turkey's main silver sources: Gümüşhane (Maden Köy), Bolkardağ (Niğde), Artova (Tokat), and Mastra (Gümüşhane). Production volume is modest globally (~250 tonnes/year), but new discoveries suggest potential growth.",
          "Turkish silver is generally obtained as a byproduct of copper, lead, and zinc mining.",
        ],
      },
      {
        id: "byproduct", heading: "Silver as a Byproduct",
        paragraphs: [
          "Approximately 70% of global silver production comes not from primary silver mines but as a byproduct of copper, lead, zinc, and gold mining.",
          "This makes silver's supply structure unique: even if silver prices rise, new capacity may not open if base metal demand is low. This supply inelasticity is one reason for price volatility.",
          "Primary silver mines account for only ~30% of production, mostly located in Mexico and Peru.",
        ],
      },
      {
        id: "future", heading: "The Future of Silver Mining",
        paragraphs: [
          "The green energy transition is rapidly increasing silver demand. The solar panel industry alone consumes ~6,000 tonnes annually, expected to double by 2030.",
          "On the supply side, new major discoveries are declining. Average ore grades at existing mines are falling and production costs rising. This supply-demand imbalance is making silver a strategic critical mineral.",
          "Recycling accounts for ~17% of total silver supply. Technologies for recovering silver from electronic waste and industrial byproducts are being developed.",
        ],
      },
    ],
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Which country produces the most silver?", a: "Mexico, with ~6,300 tonnes annually, is the world's largest silver producer, followed by China (~3,400 tonnes) and Peru (~3,100 tonnes)." },
        { q: "Is silver mined on its own?", a: "No, ~70% of global silver production is a byproduct of copper, lead, zinc, and gold mining. Only ~30% comes from primary silver mines." },
        { q: "Are there silver mines in Turkey?", a: "Yes, Gümüşhane, Bolkardağ (Niğde), Artova (Tokat), and Mastra are among the main sources. Production is generally a byproduct of other metals." },
        { q: "How much silver reserve remains?", a: "Estimated global reserves are approximately 550,000 tonnes. At current rates, ~21 years of reserves remain, though new discoveries may alter this." },
        { q: "Is silver mining harmful to the environment?", a: "Mining activities have environmental impacts including water pollution, land degradation, and energy consumption. Sustainable mining practices and recycling aim to reduce these effects." },
      ],
    },
    sources: {
      heading: "Sources",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "U.S. Geological Survey — \"Mineral Commodity Summaries: Silver\"",
        "S&P Global Market Intelligence — Mining Database",
        "MTA General Directorate — Turkey Mine Inventory",
        "Fresnillo PLC — Annual Report 2024",
      ],
    },
    related: {
      heading: "Related Topics",
      items: [
        { title: "Silver Mining in Turkey", path: "/en/mining/turkey", cat: "Mining" },
        { title: "Refining Process", path: "/en/mining/refining", cat: "Mining" },
        { title: "World Silver Map", path: "/en/map", cat: "Map" },
      ],
    },
    sponsor: {
      text: "From mine to jewelry — discover silver's journey.",
      cta: "View on Instagram",
      note: "This content is supported by İstanbul Gümüş.",
    },
    producerData: [
      { country: "Mexico", flag: "🇲🇽", tons: 6300, pct: 24.2, mines: "Fresnillo, First Majestic" },
      { country: "China", flag: "🇨🇳", tons: 3400, pct: 13.1, mines: "Hunan, Yunnan regions" },
      { country: "Peru", flag: "🇵🇪", tons: 3100, pct: 11.9, mines: "Cerro de Pasco, Antamina" },
      { country: "Chile", flag: "🇨🇱", tons: 1600, pct: 6.2, mines: "Escondida (byproduct)" },
      { country: "Russia", flag: "🇷🇺", tons: 1500, pct: 5.8, mines: "Norilsk Nickel" },
      { country: "Poland", flag: "🇵🇱", tons: 1200, pct: 4.6, mines: "KGHM Polska Miedź" },
      { country: "Australia", flag: "🇦🇺", tons: 1300, pct: 5.0, mines: "Cannington, Broken Hill" },
      { country: "Bolivia", flag: "🇧🇴", tons: 1100, pct: 4.2, mines: "San Cristóbal" },
      { country: "USA", flag: "🇺🇸", tons: 1000, pct: 3.8, mines: "Greens Creek, Rochester" },
      { country: "Turkey", flag: "🇹🇷", tons: 250, pct: 1.0, mines: "Gümüşhane, Bolkardağ" },
    ],
    producerTitle: "Largest Silver Producing Countries (2024 est.)",
    producerUnit: "tonnes/year",
    darkMode: "Mode", toc: "Contents",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة المعرفة بالفضة",
    breadcrumb: ["الرئيسية", "التعدين", "مناجم الفضة العالمية"],
    category: "التعدين",
    title: "مناجم الفضة العالمية",
    subtitle: "أكبر منتجي الفضة في العالم ومناطق التعدين وإحصاءات الإنتاج",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١١ دقيقة قراءة" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "الفضة معدن استراتيجي يُستخرج في كل قارة، لكن الإنتاج يتركز بشكل كبير في مناطق محددة. يبلغ الإنتاج السنوي العالمي حوالي ٢٦٬٠٠٠ طن، أكثر من ٥٥٪ منها من خمس دول فقط.",
          "يتناول هذا المقال خريطة التعدين العالمية للفضة وأكبر الدول المنتجة وموقع تركيا.",
        ],
      },
      {
        id: "producers", heading: "أكبر الدول المنتجة للفضة",
        paragraphs: ["تتصدر المكسيك والصين وبيرو باستمرار المراكز الثلاثة الأولى. تنتج أمريكا اللاتينية حوالي ٤٠٪ من الإنتاج العالمي."],
        widget: "producers",
      },
      {
        id: "mexico", heading: "المكسيك: عاصمة الفضة العالمية",
        paragraphs: [
          "المكسيك أكبر منتج للفضة منذ أكثر من ٥٠٠ عام. تنتج حالياً حوالي ٦٬٣٠٠ طن سنوياً.",
          "المناطق الرئيسية: زاكاتيكاس، دورانغو، تشيواوا. مدينة تاكسكو معروفة بـ'عاصمة الفضة العالمية'.",
        ],
      },
      {
        id: "peru", heading: "بيرو وأمريكا الجنوبية",
        paragraphs: [
          "تمتلك بيرو تاريخياً من أغنى رواسب الفضة. جبل بوتوسي كان أكبر مصدر للفضة في القرنين ١٦-١٧.",
          "تنتج بيرو حالياً حوالي ٣٬١٠٠ طن سنوياً. معظم الإنتاج كمنتج ثانوي لتعدين النحاس والزنك.",
          "اسم الأرجنتين مشتق من اللاتينية 'argentum' (فضة).",
        ],
      },
      {
        id: "china", heading: "الصين وآسيا",
        paragraphs: [
          "الصين ثاني أكبر منتج (~٣٬٤٠٠ طن/سنة) وأكبر مستهلك للفضة في العالم.",
          "الطلب الصناعي (خاصة الألواح الشمسية) يجعل الصين لاعباً حاسماً في جانبي العرض والطلب.",
        ],
      },
      {
        id: "australia", heading: "أستراليا",
        paragraphs: [
          "تمتلك أستراليا من أكبر احتياطيات الفضة (~٨٩٬٠٠٠ طن). منجم بروكن هيل يعمل منذ ١٨٨٣.",
        ],
      },
      {
        id: "europe", heading: "تعدين الفضة في أوروبا",
        paragraphs: [
          "يعود تعدين الفضة في أوروبا إلى العصور القديمة. مناجم لوريوم في اليونان موّلت القوة البحرية الأثينية.",
          "حالياً بولندا (KGHM) والسويد وروسيا هم المنتجون الرئيسيون في أوروبا.",
        ],
      },
      {
        id: "turkey", heading: "تعدين الفضة في تركيا",
        paragraphs: [
          "كانت تركيا تاريخياً مركزاً مهماً لإنتاج الفضة. ولاية غوموشهانه ('بيت الفضة') سُميت بمناجم الفضة القديمة.",
          "المصادر الرئيسية حالياً: غوموشهانه، بولقارداغ (نيغده)، أرتوفا (توقات). الإنتاج ~٢٥٠ طن/سنة.",
        ],
      },
      {
        id: "byproduct", heading: "الفضة كمنتج ثانوي",
        paragraphs: [
          "حوالي ٧٠٪ من الإنتاج العالمي للفضة يأتي كمنتج ثانوي لتعدين النحاس والرصاص والزنك والذهب.",
          "المناجم الأولية للفضة تمثل ~٣٠٪ فقط من الإنتاج.",
        ],
      },
      {
        id: "future", heading: "مستقبل تعدين الفضة",
        paragraphs: [
          "التحول للطاقة الخضراء يزيد الطلب بسرعة. صناعة الألواح الشمسية تستهلك ~٦٬٠٠٠ طن سنوياً.",
          "على جانب العرض، الاكتشافات الجديدة تتراجع وجودة الخام تنخفض. إعادة التدوير تمثل ~١٧٪ من إجمالي العرض.",
        ],
      },
    ],
    faq: {
      heading: "الأسئلة الشائعة",
      items: [
        { q: "أي دولة تنتج أكبر كمية من الفضة؟", a: "المكسيك بحوالي ٦٬٣٠٠ طن سنوياً، تليها الصين وبيرو." },
        { q: "هل تُستخرج الفضة بمفردها؟", a: "لا، ~٧٠٪ من الإنتاج العالمي منتج ثانوي لتعدين معادن أخرى." },
        { q: "هل توجد مناجم فضة في تركيا؟", a: "نعم، في غوموشهانه وبولقارداغ وأرتوفا. الإنتاج ~٢٥٠ طن/سنة." },
      ],
    },
    sources: { heading: "المصادر", items: ["The Silver Institute — World Silver Survey 2025", "USGS — Mineral Commodity Summaries", "MTA — جرد المناجم التركية"] },
    related: {
      heading: "مواضيع ذات صلة",
      items: [
        { title: "تعدين الفضة في تركيا", path: "/ar/mining/turkey", cat: "التعدين" },
        { title: "خريطة الفضة العالمية", path: "/ar/map", cat: "الخريطة" },
      ],
    },
    sponsor: { text: "من المنجم إلى المجوهرات — اكتشفوا رحلة الفضة.", cta: "شاهد على إنستغرام", note: "هذا المحتوى مدعوم من إسطنبول غوموش." },
    producerData: [
      { country: "المكسيك", flag: "🇲🇽", tons: 6300, pct: 24.2, mines: "Fresnillo, First Majestic" },
      { country: "الصين", flag: "🇨🇳", tons: 3400, pct: 13.1, mines: "هونان، يوننان" },
      { country: "بيرو", flag: "🇵🇪", tons: 3100, pct: 11.9, mines: "سيرو دي باسكو" },
      { country: "تشيلي", flag: "🇨🇱", tons: 1600, pct: 6.2, mines: "إسكونديدا" },
      { country: "روسيا", flag: "🇷🇺", tons: 1500, pct: 5.8, mines: "نوريلسك نيكل" },
      { country: "بولندا", flag: "🇵🇱", tons: 1200, pct: 4.6, mines: "KGHM" },
      { country: "أستراليا", flag: "🇦🇺", tons: 1300, pct: 5.0, mines: "كانينغتون" },
      { country: "بوليفيا", flag: "🇧🇴", tons: 1100, pct: 4.2, mines: "سان كريستوبال" },
      { country: "أمريكا", flag: "🇺🇸", tons: 1000, pct: 3.8, mines: "غرينز كريك" },
      { country: "تركيا", flag: "🇹🇷", tons: 250, pct: 1.0, mines: "غوموشهانه" },
    ],
    producerTitle: "أكبر الدول المنتجة للفضة (تقدير ٢٠٢٤)",
    producerUnit: "طن/سنة",
    darkMode: "الوضع", toc: "المحتويات",
  },
};

// ─── Producer Bar Chart Widget ────────────────────────────
function ProducerChart({ data, title, unit, dark }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const accent = dark ? "#C0C0C0" : "#708090";
  const gold = "#D4AF37";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const maxVal = Math.max(...data.map(d => d.tons));

  return (
    <div style={{ margin: "20px 0", padding: "24px", borderRadius: 14, border: `1px solid ${border}`, background: dark ? "rgba(192,192,192,0.02)" : "rgba(192,192,192,0.04)" }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: textP, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 11, color: textS, marginBottom: 20 }}>{unit}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 28, fontSize: 18, textAlign: "center", flexShrink: 0 }}>{d.flag}</div>
            <div style={{ width: 80, fontSize: 12, color: textS, flexShrink: 0, fontWeight: d.country.includes("Türkiye") || d.country.includes("Turkey") || d.country.includes("تركيا") ? 700 : 400 }}>{d.country}</div>
            <div style={{ flex: 1, height: 26, borderRadius: 6, background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)", overflow: "hidden", position: "relative" }}>
              <div style={{
                height: "100%", width: `${(d.tons / maxVal) * 100}%`, borderRadius: 6,
                background: d.country.includes("Türkiye") || d.country.includes("Turkey") || d.country.includes("تركيا")
                  ? `linear-gradient(90deg, ${gold}88, ${gold})`
                  : `linear-gradient(90deg, ${accent}66, ${accent})`,
                display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 8,
                minWidth: 40, transition: "width 1s ease",
              }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: dark ? "#0f0f14" : "#fff", fontFamily: "'JetBrains Mono', monospace" }}>{d.tons.toLocaleString()}</span>
              </div>
            </div>
            <div style={{ width: 40, fontSize: 10, color: textS, textAlign: "right", flexShrink: 0, fontFamily: "'JetBrains Mono', monospace" }}>{d.pct}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component (compact — reuses 925 template layout) ─
export default function GlobalMinesArticle() {
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
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: dark ? "rgba(15,15,20,0.88)" : "rgba(250,250,245,0.88)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${border}`, padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg, ${accent}, ${gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#0f0f14", fontFamily: fontD }}>Ag</div>
          <span style={{ fontFamily: fontD, fontWeight: 600, fontSize: 16 }}>{t.nav}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", gap: 2, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", borderRadius: 7, padding: 2 }}>
            {["tr","en","ar"].map(l=><button key={l} onClick={()=>setLang(l)} style={{ border:"none",cursor:"pointer",padding:"3px 9px",borderRadius:5,fontSize:11,fontWeight:lang===l?600:400,fontFamily:l==="ar"?"'Noto Naskh Arabic',serif":fontB,background:lang===l?(dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.08)"):"transparent",color:lang===l?textP:textS}}>{l==="ar"?"عر":l.toUpperCase()}</button>)}
          </div>
          <button onClick={()=>setDark(!dark)} style={{ border:"none",cursor:"pointer",background:"transparent",color:textS,fontSize:16,padding:4}}>{dark?"☀️":"🌙"}</button>
        </div>
      </nav>
      <div style={{ maxWidth:760,margin:"0 auto",padding:"16px 24px 0",display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",fontSize:12,color:textS}}>
        {t.breadcrumb.map((item,i)=><span key={i} style={{display:"flex",alignItems:"center",gap:6}}>{i>0&&<span style={{opacity:0.4}}>{isRTL?"‹":"›"}</span>}<a href="#" style={{color:i===t.breadcrumb.length-1?textP:textS,textDecoration:"none",fontWeight:i===t.breadcrumb.length-1?500:400}}>{item}</a></span>)}
      </div>
      <article style={{ maxWidth:760,margin:"0 auto",padding:"32px 24px 64px",animation:"fadeUp 0.6s ease both"}}>
        <div style={{ marginBottom:36}}>
          <div style={{display:"inline-block",padding:"3px 12px",borderRadius:6,fontSize:11,fontWeight:600,letterSpacing:"0.04em",color:gold,border:`1px solid ${gold}33`,marginBottom:16}}>{t.category}</div>
          <h1 style={{fontFamily:fontD,fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.15,marginBottom:12}}>{t.title}</h1>
          <p style={{fontSize:16,color:textS,lineHeight:1.6,marginBottom:20}}>{t.subtitle}</p>
          <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",fontSize:13,color:textS,paddingBottom:20,borderBottom:`1px solid ${border}`}}>
            <span>{t.meta.author}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.date}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.readTime}</span>
          </div>
        </div>
        <div style={{ height:220,borderRadius:16,marginBottom:36,overflow:"hidden",background:dark?"linear-gradient(135deg,#1a1a2e,#2a2a3e,#1a1a2e)":"linear-gradient(135deg,#e8e8e8,#d0d0d0,#e8e8e8)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
          <div style={{textAlign:"center",zIndex:1}}>
            <div style={{fontSize:48,marginBottom:4}}>⛏️</div>
            <div style={{fontFamily:fontD,fontSize:28,fontWeight:700,background:`linear-gradient(135deg,${accent},${gold})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>26,000t</div>
            <div style={{fontSize:12,color:textS,letterSpacing:"0.12em",marginTop:4}}>ANNUAL GLOBAL PRODUCTION</div>
          </div>
        </div>

        {t.sections.map(sec=>(
          <section key={sec.id} style={{marginBottom:36}}>
            {sec.heading&&<h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:16,paddingTop:8}}>{sec.heading}</h2>}
            {sec.paragraphs.map((p,pi)=><p key={pi} style={{fontSize:15,lineHeight:1.8,color:textS,marginBottom:14}}>{p}</p>)}
            {sec.widget==="producers"&&<ProducerChart data={t.producerData} title={t.producerTitle} unit={t.producerUnit} dark={dark}/>}
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
