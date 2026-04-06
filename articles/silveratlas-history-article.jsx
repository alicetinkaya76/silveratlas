import { useState, useEffect, useRef } from "react";

// ─── TIMELINE DATA ──────────────────────────────────────
const TIMELINE_EVENTS = [
  { year: -5000, era: "ancient", id: "e1",
    title: { tr: "Anadolu'da İlk Gümüş", en: "First Silver in Anatolia", ar: "أول فضة في الأناضول" },
    desc: { tr: "Anadolu'da (bugünkü Türkiye) gümüşün ilk işlendiği dönem. Çatalhöyük ve çevresinde gümüş süs eşyaları bulunmuştur.", en: "Earliest silver working in Anatolia (modern Turkey). Silver ornaments found at Çatalhöyük and surroundings.", ar: "أقدم أعمال الفضة في الأناضول (تركيا الحديثة). عُثر على حلي فضية في تشاتالهويوك." },
    loc: [37.67, 32.83], color: "#7BE495" },
  { year: -3000, era: "ancient", id: "e2",
    title: { tr: "Laurion Madenleri", en: "Laurion Mines", ar: "مناجم لافريو" },
    desc: { tr: "Antik Yunanistan'da Laurion gümüş madenleri işletilmeye başlar. Atina demokrasisinin ve donanmasının finansman kaynağı.", en: "Laurion silver mines begin operation in ancient Greece. Financed Athenian democracy and navy.", ar: "بدء تشغيل مناجم لافريو في اليونان القديمة. مولت الديمقراطية والبحرية الأثينية." },
    loc: [37.73, 24.05], color: "#7BE495" },
  { year: -2500, era: "ancient", id: "e3",
    title: { tr: "Mezopotamya Gümüş Ticareti", en: "Mesopotamian Silver Trade", ar: "تجارة الفضة في بلاد الرافدين" },
    desc: { tr: "Sümer ve Akad medeniyetlerinde gümüş, ödeme aracı ve değer ölçüsü olarak kullanılır.", en: "Silver used as means of payment and measure of value in Sumerian and Akkadian civilizations.", ar: "استُخدمت الفضة كوسيلة دفع ومقياس للقيمة في الحضارتين السومرية والأكادية." },
    loc: [32.5, 44.4], color: "#D4AF37" },
  { year: -700, era: "classical", id: "e4",
    title: { tr: "Lidya Sikkeleri", en: "Lydian Coins", ar: "عملات ليديا" },
    desc: { tr: "Dünya tarihindeki ilk sikkeler Lidya'da (bugünkü Manisa) basılır. Gümüş-altın alaşımı elektrum kullanılır.", en: "World's first coins minted in Lydia (modern Manisa). Electrum, a silver-gold alloy, is used.", ar: "سُكّت أول عملات في التاريخ في ليديا. استُخدم الإلكتروم، سبيكة فضة وذهب." },
    loc: [38.61, 27.43], color: "#D4AF37" },
  { year: -269, era: "classical", id: "e5",
    title: { tr: "Roma Denarius'u", en: "Roman Denarius", ar: "الدينار الروماني" },
    desc: { tr: "Roma İmparatorluğu gümüş denarius sikkesini dolaşıma sokar. 500 yıl boyunca Akdeniz'in ana para birimi.", en: "Roman Empire introduces the silver denarius coin. Primary currency of the Mediterranean for 500 years.", ar: "أدخلت الإمبراطورية الرومانية عملة الدينار الفضي. العملة الرئيسية للبحر المتوسط لـ500 عام." },
    loc: [41.90, 12.50], color: "#C9A0DC" },
  { year: 661, era: "islamic", id: "e6",
    title: { tr: "Emevî Dirhemi", en: "Umayyad Dirham", ar: "الدرهم الأموي" },
    desc: { tr: "Halife Abdülmelik bin Mervan saf gümüş dirhem basımını başlatır (696). İslam medeniyetinin para standardı.", en: "Caliph Abd al-Malik ibn Marwan initiates pure silver dirham coinage (696). Monetary standard of Islamic civilization.", ar: "بدأ الخليفة عبد الملك بن مروان سك الدرهم الفضي الخالص (696). المعيار النقدي للحضارة الإسلامية." },
    loc: [33.51, 36.29], color: "#C9A0DC" },
  { year: 800, era: "islamic", id: "e7",
    title: { tr: "Câbir ibn Hayyân", en: "Jabir ibn Hayyan", ar: "جابر بن حيان" },
    desc: { tr: "İslam kimyasının babası Câbir, gümüş rafinasyon tekniklerini geliştir. Kupelasyon yöntemini mükemmelleştirir.", en: "Father of Islamic chemistry Jabir develops silver refining techniques. Perfects the cupellation method.", ar: "أب الكيمياء الإسلامية جابر يطور تقنيات تنقية الفضة. أتقن طريقة الكوبيلة." },
    loc: [32.62, 51.68], color: "#E8A0BF" },
  { year: 1100, era: "islamic", id: "e8",
    title: { tr: "Selçuklu Darphaneleri", en: "Seljuk Mints", ar: "دور ضرب السلاجقة" },
    desc: { tr: "Anadolu Selçukluları Konya, Sivas ve Kayseri'de gümüş dirhem basar. İpek Yolu ticaretinin kalbi.", en: "Anatolian Seljuks mint silver dirhams in Konya, Sivas, and Kayseri. Heart of Silk Road trade.", ar: "سك السلاجقة الأناضوليون دراهم فضية في قونية وسيواس وقيصرية." },
    loc: [37.87, 32.48], color: "#C9A0DC" },
  { year: 1545, era: "newworld", id: "e9",
    title: { tr: "Potosí Keşfi", en: "Discovery of Potosí", ar: "اكتشاف بوتوسي" },
    desc: { tr: "Bolivya'da Cerro Rico gümüş dağı keşfedilir. Tarihte en çok gümüş üreten maden; dünya ekonomisini dönüştürür.", en: "Cerro Rico silver mountain discovered in Bolivia. History's most productive mine; transforms the world economy.", ar: "اكتشاف جبل الفضة سيرو ريكو في بوليفيا. أكثر المناجم إنتاجاً في التاريخ." },
    loc: [-19.58, -65.75], color: "#7BE495" },
  { year: 1571, era: "newworld", id: "e10",
    title: { tr: "Manila Galyonu", en: "Manila Galleon", ar: "سفينة مانيلا" },
    desc: { tr: "İspanyol gümüş filosu Meksika'dan Manila'ya gümüş taşımaya başlar. İlk küresel ticaret ağı.", en: "Spanish silver fleet begins transporting silver from Mexico to Manila. First global trade network.", ar: "بدأ أسطول الفضة الإسباني نقل الفضة من المكسيك إلى مانيلا. أول شبكة تجارية عالمية." },
    loc: [14.60, 120.98], color: "#D4AF37" },
  { year: 1623, era: "newworld", id: "e11",
    title: { tr: "Kongsberg Madeni", en: "Kongsberg Mine", ar: "منجم كونغسبرغ" },
    desc: { tr: "Norveç'te Avrupa'nın en büyük doğal gümüş kristallerinin bulunduğu maden açılır.", en: "Norway's mine with Europe's largest native silver crystals opens.", ar: "افتتاح منجم النرويج بأكبر بلورات الفضة الطبيعية في أوروبا." },
    loc: [59.63, 9.65], color: "#7BE495" },
  { year: 1839, era: "modern", id: "e12",
    title: { tr: "Daguerreotype", en: "Daguerreotype", ar: "داغيروتايب" },
    desc: { tr: "Daguerre gümüş halojenür bazlı fotoğraf tekniğini icat eder. Gümüşün endüstriyel kullanımının başlangıcı.", en: "Daguerre invents silver halide-based photography. Beginning of silver's industrial use.", ar: "اخترع داغير تقنية التصوير بهاليد الفضة. بداية الاستخدام الصناعي للفضة." },
    loc: [48.86, 2.35], color: "#E8A0BF" },
  { year: 1873, era: "modern", id: "e13",
    title: { tr: "Demonetizasyon", en: "Demonetization", ar: "إلغاء النقود" },
    desc: { tr: "ABD ve Avrupa ülkeleri gümüşü para standardından çıkarır (Crime of '73). Altın standardına geçiş.", en: "US and European nations demonetize silver (Crime of '73). Transition to gold standard.", ar: "إلغاء الفضة كمعيار نقدي في أمريكا وأوروبا. الانتقال إلى معيار الذهب." },
    loc: [38.91, -77.04], color: "#D4AF37" },
  { year: 1980, era: "modern", id: "e14",
    title: { tr: "Hunt Kardeşler Krizi", en: "Hunt Brothers Crisis", ar: "أزمة الأخوين هانت" },
    desc: { tr: "Hunt kardeşleri gümüş piyasasını köşeye sıkıştırmaya çalışır. Fiyat 50 $/oz'a yükselir, ardından çöker (Silver Thursday).", en: "Hunt brothers attempt to corner the silver market. Price rises to $50/oz, then crashes (Silver Thursday).", ar: "محاولة الأخوين هانت احتكار سوق الفضة. ارتفع السعر إلى 50 دولار/أونصة ثم انهار." },
    loc: [32.78, -96.80], color: "#D4AF37" },
  { year: 2011, era: "modern", id: "e15",
    title: { tr: "Nano-Gümüş Devrimi", en: "Nano-Silver Revolution", ar: "ثورة النانو فضة" },
    desc: { tr: "Gümüş nanopartikülleri tıp, tekstil ve teknolojide yaygınlaşır. Antimikrobiyal özellikleri keşfedilir.", en: "Silver nanoparticles become widespread in medicine, textiles, and technology. Antimicrobial properties discovered.", ar: "انتشار جسيمات الفضة النانوية في الطب والنسيج والتكنولوجيا." },
    loc: [35.68, 139.69], color: "#E8A0BF" },
  { year: 2024, era: "modern", id: "e16",
    title: { tr: "Yeşil Enerji Talebi", en: "Green Energy Demand", ar: "طلب الطاقة الخضراء" },
    desc: { tr: "Güneş paneli üretiminde gümüş talebi rekor seviyeye ulaşır. Gümüş, enerji dönüşümünün kritik metali olur.", en: "Silver demand in solar panel production reaches record levels. Silver becomes critical metal of energy transition.", ar: "وصل الطلب على الفضة في إنتاج الألواح الشمسية لمستويات قياسية." },
    loc: [31.23, 121.47], color: "#7BE495" },
];

const ERAS = {
  ancient:  { tr: "Antik Dönem", en: "Ancient Era", ar: "العصر القديم", color: "#7BE495", range: "MÖ 5000 – MÖ 700" },
  classical:{ tr: "Klasik Çağ", en: "Classical Age", ar: "العصر الكلاسيكي", color: "#D4AF37", range: "MÖ 700 – MS 600" },
  islamic:  { tr: "İslam Altın Çağı", en: "Islamic Golden Age", ar: "العصر الذهبي الإسلامي", color: "#C9A0DC", range: "661 – 1500" },
  newworld: { tr: "Yeni Dünya", en: "New World", ar: "العالم الجديد", color: "#6EC6FF", range: "1500 – 1800" },
  modern:   { tr: "Modern Çağ", en: "Modern Age", ar: "العصر الحديث", color: "#E8A0BF", range: "1800 – günümüz" },
};

// ─── i18n ────────────────────────────────────────────────
const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Tarih", "Gümüşün Tarihi"],
    category: "Tarih",
    title: "Gümüşün Tarihi: 5000 Yıllık Yolculuk",
    subtitle: "Anadolu'nun ilk madenlerinden nano-teknolojiye — insanlığın gümüşle hikâyesi",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "12 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Gümüş, insanlık tarihinin en eski ve en değerli metallerinden biridir. Altından daha yaygın, bakırdan daha soy, demirden daha parlak — bu benzersiz konum, gümüşü medeniyetlerin kuruluşundan küresel ekonominin şekillenmesine kadar her çağda kritik bir rol oynamaya taşımıştır.",
        "Anadolu'nun derinliklerinden çıkarılan ilk gümüş cevherinden, bugün güneş panellerinde kullanılan nano-gümüş parçacıklarına kadar yaklaşık 5000 yıllık bu yolculuk, aynı zamanda insanlığın teknoloji, ticaret ve kültür tarihinin bir aynasıdır.",
      ]},
      { id: "antik", heading: "Antik Dönem: İlk Gümüş İşçiliği", paragraphs: [
        "Gümüşün bilinen en eski kullanımı MÖ 5. binyıla, Anadolu ve Mezopotamya'ya dayanır. Çatalhöyük'te bulunan gümüş boncuklar, insanların bu metali süs eşyası olarak işlediğinin en erken kanıtlarındandır.",
        "MÖ 3. binyılda Sümerler gümüşü ödeme aracı olarak kullanmaya başladı. 'Shekel' adı verilen standart gümüş ağırlık birimleri, tarihin ilk para sistemlerinden birini oluşturdu. Gümüş, altından farklı olarak, gündelik ticarette kullanılabilecek kadar yaygın ama değerini koruyacak kadar nadir bir metaldir.",
        "Antik Mısır'da gümüş, altından daha değerli sayılıyordu — çünkü Mısır'da doğal gümüş yatakları yoktu ve tüm gümüş ithal edilmek zorundaydı. Firavunların mezarlarında bulunan gümüş eserler, bu metalin kutsal statüsünü kanıtlar.",
      ]},
      { id: "klasik", heading: "Klasik Çağ: Sikkeler ve İmparatorluklar", paragraphs: [
        "MÖ 7. yüzyılda Lidya Krallığı (bugünkü Manisa çevresi), dünya tarihindeki ilk sikkeleri bastı. Elektrum adı verilen doğal gümüş-altın alaşımından üretilen bu sikkeler, ticaretin standardizasyonunda devrim yarattı.",
        "Antik Yunanistan'da Atina'nın gücünün arkasında Laurion gümüş madenleri vardı. Bu madenlerden elde edilen gelirle Atina donanması inşa edildi ve Pers istilasına karşı Yunanistan savunuldu. Tarihçi Tukidides'in kaydına göre, Laurion gümüşü Atina demokrasisinin finansman kaynağıydı.",
        "Roma İmparatorluğu'nun denarius sikkesi, MÖ 269'dan itibaren 500 yıl boyunca Akdeniz havzasının ortak para birimi oldu. Ancak imparatorluğun çöküşüyle birlikte sikkelerdeki gümüş oranı sürekli düşürüldü — bu 'debasement' süreci, tarihin ilk enflasyon krizlerinden birine yol açtı.",
      ]},
      { id: "islam", heading: "İslam Altın Çağı: Dirhem ve Bilim", paragraphs: [
        "İslam medeniyeti, gümüşü hem ekonomik hem bilimsel açıdan yeni bir düzeye taşıdı. 696 yılında Emevî halifesi Abdülmelik bin Mervan, saf gümüşten dirhem basımını başlattı. Bu standart, Endülüs'ten Orta Asya'ya uzanan devasa bir ticaret ağının ortak para birimi oldu.",
        "8. yüzyılda yaşayan kimyager Câbir ibn Hayyân (Latince adıyla Geber), gümüş rafinasyon tekniklerini geliştirdi. Kupelasyon yöntemiyle saf gümüş elde etme sürecini mükemmelleştiren Câbir, modern metalürjinin temellerini attı.",
        "Selçuklu ve Osmanlı darphaneleri Anadolu'da yüzyıllar boyunca gümüş dirhem ve akçe bastı. Konya, İstanbul, Gümüşhane ve Trabzon darphaneleri, İpek Yolu ticaretinin kalbinde yer alıyordu. Osmanlı akçesi, 14.–17. yüzyıllar arasında bölgenin en güvenilir para birimiydi.",
      ]},
      { id: "yeniDunya", heading: "Yeni Dünya: Potosí ve Küreselleşme", paragraphs: [
        "1545'te Bolivya'daki Cerro Rico (Zengin Dağ) keşfedildiğinde, dünya tarihi değişti. Potosí gümüş madeni, tarihte en çok gümüş üreten tek kaynak oldu. Tahminen 60.000 ton gümüş — o dönemin dünya gümüş stokunun yarısından fazlası — bu dağdan çıkarıldı.",
        "İspanyol gümüşü Manila Galyonu aracılığıyla Çin'e, Atlantik filosuyla Avrupa'ya aktı. Bu akış, tarihin ilk gerçek küresel ticaret ağını oluşturdu. Gümüş, dünyanın her köşesini birbirine bağlayan ilk küresel emtia oldu.",
        "Ancak bu servetin bedeli ağırdı. Potosí'de çalışan yerli halklar ve Afrikalı köleler, insanlık dışı koşullarda hayatlarını kaybetti. Tahminen 8 milyon kişi bu madenlerde öldü — gümüşün parlak yüzeyinin arkasındaki karanlık tarih, bugün hâlâ tartışılmaktadır.",
      ]},
      { id: "modern", heading: "Modern Çağ: Endüstri ve Dönüşüm", paragraphs: [
        "19. yüzyıl, gümüşün endüstriyel kullanımının başlangıcıydı. 1839'da Daguerre'in icat ettiği fotoğraf tekniği, gümüş halojenür kimyasına dayanıyordu. 150 yıl boyunca dünya fotoğrafçılığı gümüşe bağlı kaldı.",
        "1873'te ABD ve Avrupa ülkeleri gümüşü para standardından çıkardı (demonetizasyon). 'Crime of 1873' olarak bilinen bu karar, gümüş fiyatlarını düşürdü ama endüstriyel kullanımı artırdı.",
        "1980'de Hunt kardeşlerinin gümüş piyasasını manipüle etme girişimi fiyatı 50 $/oz'a kadar çıkardı, ardından yaşanan çöküş ('Silver Thursday') finans tarihinin en dramatik anlarından biri oldu.",
        "Bugün gümüş, güneş panellerinde, elektronik devrelerde, tıbbi cihazlarda ve su arıtma sistemlerinde vazgeçilmez bir metal. Yeşil enerji devrimiyle birlikte gümüş talebi her yıl yeni rekorlar kırıyor — gümüşün 5000 yıllık hikâyesi, gelecekte de devam edecek gibi görünüyor.",
      ]},
      { id: "timeline", heading: "İnteraktif Zaman Çizelgesi", paragraphs: [
        "Aşağıdaki etkileşimli zaman çizelgesinde gümüş tarihinin dönüm noktalarını keşfedin. Dönemlere göre filtreleyin, olaylara tıklayarak detayları görün:",
      ], widget: "timeline" },
      { id: "minimap", heading: "Tarihî Gümüş Haritası", paragraphs: [
        "Makalemizde bahsi geçen önemli gümüş lokasyonlarını aşağıdaki haritada görebilirsiniz:",
      ], widget: "minimap" },
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Gümüş ilk nerede keşfedildi?", a: "Gümüşün bilinen en eski kullanımı MÖ 5. binyılda Anadolu'da (bugünkü Türkiye) başlamıştır. Çatalhöyük ve Gümüşhane bölgesinde yapılan arkeolojik kazılarda en eski gümüş eserlere rastlanmıştır." },
        { q: "Gümüş neden para olarak kullanıldı?", a: "Gümüş, sahte üretimi zor, bölünebilir, taşınabilir ve bozulmayan bir metaldir. Altından daha yaygın olması gündelik ticareti mümkün kılmış, bakırdan daha değerli olması ise büyük işlemlerde güvenilirlik sağlamıştır." },
        { q: "İslam medeniyetinde gümüşün yeri nedir?", a: "İslam medeniyetinde gümüş dirhem, ekonominin temel taşıydı. Hz. Peygamber döneminden itibaren zekât hesaplamasında gümüş nisab olarak kullanılmış, Emevîler döneminde standart dirhem basımıyla para birliği sağlanmıştır." },
        { q: "Potosí neden bu kadar önemlidir?", a: "Bolivya'daki Potosí madeni, tek başına tarihte en çok gümüş üreten kaynaktır. 16.–18. yüzyıllarda dünya gümüş üretiminin yarısından fazlasını sağlamış ve küresel ticaretin şekillenmesinde belirleyici rol oynamıştır." },
        { q: "Bugün gümüş ne için kullanılıyor?", a: "Modern gümüş kullanımının yaklaşık %50'si endüstriyel (güneş panelleri, elektronik, tıp), %25'i takı, %15'i yatırım (külçe, ETF) ve %10'u gümüş eşya üretimidir. Güneş enerjisi sektörü gümüş talebinin en hızlı büyüyen alanıdır." },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "Braudel, Fernand — \"Maddi Uygarlık: 15–18. Yüzyıllar\"",
        "Darphane ve Damga Matbaası Genel Müdürlüğü — Tarihî Sikkeler Koleksiyonu",
        "Flynn, Dennis O. & Giráldez, Arturo — \"Born with a Silver Spoon\" (Journal of World History, 1995)",
        "Câbir ibn Hayyân — Kitâbü'l-Kimyâ (8. yy)",
        "UNESCO — Iwami Ginzan Silver Mine Dossier",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "925 Ayar Nedir?", path: "/tr/uretim/925-ayar", cat: "Üretim" },
        { title: "İslam Medeniyetinde Gümüş", path: "/tr/tarih/islam-gumus", cat: "Tarih" },
        { title: "Gümüş Fiyat Tarihi", path: "/tr/piyasa/fiyat-tarihi", cat: "Piyasa" },
        { title: "Küresel Gümüş Madenleri", path: "/tr/maden/kuresel", cat: "Maden" },
      ],
    },
    sponsor: {
      text: "Binlerce yıllık gümüş geleneğinin modern yorumlarını keşfedin.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    eraFilter: "Dönem Filtresi",
    allEras: "Tümü",
    toc: "İçindekiler",
    darkMode: "Mod",
    mapLocations: "Tarihî Lokasyonlar",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "History", "History of Silver"],
    category: "History",
    title: "History of Silver: A 5,000-Year Journey",
    subtitle: "From Anatolia's first mines to nanotechnology — humanity's story with silver",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "12 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Silver is one of the oldest and most valued metals in human history. More abundant than gold, nobler than copper, more lustrous than iron — this unique position has made silver a critical player in every age, from the founding of civilizations to the shaping of the global economy.",
        "From the first silver ore extracted from the depths of Anatolia to the nano-silver particles used in solar panels today, this approximately 5,000-year journey is also a mirror of humanity's history of technology, trade, and culture.",
      ]},
      { id: "ancient", heading: "Ancient Era: First Silver Working", paragraphs: [
        "The earliest known use of silver dates to the 5th millennium BCE in Anatolia and Mesopotamia. Silver beads found at Çatalhöyük are among the earliest evidence of humans working this metal as ornamental objects.",
        "By the 3rd millennium BCE, Sumerians began using silver as a means of payment. Standardized silver weight units called 'shekels' formed one of history's first monetary systems. Unlike gold, silver was abundant enough for everyday trade yet rare enough to maintain value.",
        "In ancient Egypt, silver was considered more valuable than gold — because Egypt lacked natural silver deposits and all silver had to be imported. Silver artifacts found in pharaohs' tombs attest to this metal's sacred status.",
      ]},
      { id: "classical", heading: "Classical Age: Coins and Empires", paragraphs: [
        "In the 7th century BCE, the Kingdom of Lydia (modern Manisa area) minted the world's first coins. Made from electrum, a natural silver-gold alloy, these coins revolutionized the standardization of trade.",
        "In ancient Greece, the power of Athens was backed by the Laurion silver mines. Revenue from these mines built the Athenian navy and defended Greece against Persian invasion. According to historian Thucydides, Laurion silver financed Athenian democracy.",
        "The Roman Empire's denarius coin became the common currency of the Mediterranean basin from 269 BCE for 500 years. But as the empire declined, the silver content of coins was continuously reduced — this 'debasement' process led to one of history's first inflation crises.",
      ]},
      { id: "islamic", heading: "Islamic Golden Age: Dirham and Science", paragraphs: [
        "Islamic civilization elevated silver to new heights both economically and scientifically. In 696, Umayyad Caliph Abd al-Malik ibn Marwan initiated pure silver dirham coinage. This standard became the common currency of a vast trade network extending from Andalusia to Central Asia.",
        "The 8th-century chemist Jabir ibn Hayyan (Latinized as Geber) developed silver refining techniques. By perfecting the cupellation method for obtaining pure silver, Jabir laid the foundations of modern metallurgy.",
        "Seljuk and Ottoman mints struck silver dirhams and akçe coins in Anatolia for centuries. The mints of Konya, Istanbul, Gümüşhane, and Trabzon stood at the heart of Silk Road trade. The Ottoman akçe was the region's most reliable currency between the 14th and 17th centuries.",
      ]},
      { id: "newworld", heading: "New World: Potosí and Globalization", paragraphs: [
        "When Cerro Rico (Rich Mountain) was discovered in Bolivia in 1545, world history changed. The Potosí silver mine became the single most productive silver source in history. An estimated 60,000 tons of silver — more than half the world's silver stock at the time — was extracted from this mountain.",
        "Spanish silver flowed to China via the Manila Galleon and to Europe via the Atlantic fleet. This flow created history's first truly global trade network. Silver became the first global commodity connecting every corner of the world.",
        "But the cost of this wealth was heavy. Indigenous peoples and enslaved Africans working at Potosí perished under inhumane conditions. An estimated 8 million people died in these mines — the dark history behind silver's shining surface is still debated today.",
      ]},
      { id: "modern", heading: "Modern Age: Industry and Transformation", paragraphs: [
        "The 19th century marked the beginning of silver's industrial use. In 1839, Daguerre's invented photography technique was based on silver halide chemistry. For 150 years, world photography depended on silver.",
        "In 1873, the US and European nations demonetized silver. Known as the 'Crime of 1873,' this decision lowered silver prices but increased industrial usage.",
        "In 1980, the Hunt brothers' attempt to corner the silver market drove prices to $50/oz, followed by a crash ('Silver Thursday') that became one of finance history's most dramatic moments.",
        "Today silver is indispensable in solar panels, electronic circuits, medical devices, and water purification systems. With the green energy revolution, silver demand breaks new records every year — silver's 5,000-year story seems set to continue well into the future.",
      ]},
      { id: "timeline", heading: "Interactive Timeline", paragraphs: [
        "Explore the turning points in silver's history on the interactive timeline below. Filter by era, click events for details:",
      ], widget: "timeline" },
      { id: "minimap", heading: "Historical Silver Map", paragraphs: [
        "See the key silver locations mentioned in this article on the map below:",
      ], widget: "minimap" },
    ],
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Where was silver first discovered?", a: "The earliest known use of silver began in the 5th millennium BCE in Anatolia (modern Turkey). The oldest silver artifacts have been found in archaeological excavations at Çatalhöyük and the Gümüşhane region." },
        { q: "Why was silver used as money?", a: "Silver is difficult to counterfeit, divisible, portable, and resistant to decay. Being more abundant than gold made everyday trade possible, while being more valuable than copper ensured reliability in large transactions." },
        { q: "What was silver's role in Islamic civilization?", a: "The silver dirham was the cornerstone of the Islamic economy. From the Prophet's era onward, silver was used as the nisab for zakat calculation, and the Umayyad-era standard dirham established monetary unity across the Islamic world." },
        { q: "Why is Potosí so important?", a: "The Potosí mine in Bolivia is single-handedly the most productive silver source in history. It supplied over half the world's silver production in the 16th-18th centuries and played a defining role in shaping global trade." },
        { q: "What is silver used for today?", a: "About 50% of modern silver use is industrial (solar panels, electronics, medicine), 25% jewelry, 15% investment (bullion, ETFs), and 10% silverware. The solar energy sector is the fastest-growing area of silver demand." },
      ],
    },
    sources: {
      heading: "Sources",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "Braudel, Fernand — \"Civilization and Capitalism, 15th–18th Century\"",
        "Turkish State Mint — Historical Coins Collection",
        "Flynn, Dennis O. & Giráldez, Arturo — \"Born with a Silver Spoon\" (Journal of World History, 1995)",
        "Jabir ibn Hayyan — Kitāb al-Kīmyā (8th c.)",
        "UNESCO — Iwami Ginzan Silver Mine Dossier",
      ],
    },
    related: {
      heading: "Related Topics",
      items: [
        { title: "What is 925 Sterling Silver?", path: "/en/manufacturing/925-sterling", cat: "Manufacturing" },
        { title: "Silver in Islamic Civilization", path: "/en/history/islamic-silver", cat: "History" },
        { title: "Silver Price History", path: "/en/market/price-history", cat: "Market" },
        { title: "Global Silver Mines", path: "/en/mining/global", cat: "Mining" },
      ],
    },
    sponsor: {
      text: "Discover modern interpretations of a millennia-old silver tradition.",
      cta: "View on Instagram",
      note: "This content is sponsored by İstanbul Gümüş.",
    },
    eraFilter: "Era Filter",
    allEras: "All",
    toc: "Contents",
    darkMode: "Mode",
    mapLocations: "Historical Locations",
  },
  ar: {
    nav: "أطلس الفضة", navSub: "منصة المعرفة الفضية",
    breadcrumb: ["الرئيسية", "التاريخ", "تاريخ الفضة"],
    category: "التاريخ",
    title: "تاريخ الفضة: رحلة 5000 عام",
    subtitle: "من أول مناجم الأناضول إلى تقنية النانو — قصة الإنسانية مع الفضة",
    meta: { author: "علي جتينكايا", date: "٥ أبريل ٢٠٢٦", readTime: "١٢ دقيقة قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "الفضة من أقدم المعادن وأكثرها قيمة في تاريخ البشرية. أكثر وفرة من الذهب، وأنبل من النحاس، وأكثر لمعاناً من الحديد — هذا الموقع الفريد جعل الفضة تلعب دوراً حاسماً في كل عصر، من تأسيس الحضارات إلى تشكيل الاقتصاد العالمي.",
        "من أول خام فضي استُخرج من أعماق الأناضول إلى جسيمات النانو فضة المستخدمة في الألواح الشمسية اليوم، هذه الرحلة التي تمتد لنحو 5000 عام هي أيضاً مرآة لتاريخ التكنولوجيا والتجارة والثقافة البشرية.",
      ]},
      { id: "antik", heading: "العصر القديم: أولى أعمال الفضة", paragraphs: [
        "يعود أقدم استخدام معروف للفضة إلى الألفية الخامسة قبل الميلاد في الأناضول وبلاد الرافدين. تُعد خرزات الفضة المكتشفة في تشاتالهويوك من أقدم الأدلة على تشغيل البشر لهذا المعدن كحلي.",
        "بحلول الألفية الثالثة قبل الميلاد، بدأ السومريون باستخدام الفضة كوسيلة دفع. شكّلت وحدات الوزن الفضية القياسية المسماة 'شيكل' أحد أقدم الأنظمة النقدية في التاريخ.",
        "في مصر القديمة، كانت الفضة تُعتبر أكثر قيمة من الذهب — لأن مصر كانت تفتقر لرواسب الفضة الطبيعية وكان يجب استيرادها بالكامل.",
      ]},
      { id: "klasik", heading: "العصر الكلاسيكي: العملات والإمبراطوريات", paragraphs: [
        "في القرن السابع قبل الميلاد، سكّت مملكة ليديا (منطقة مانيسا الحالية) أول عملات في تاريخ العالم. صُنعت من الإلكتروم، وهو سبيكة طبيعية من الفضة والذهب.",
        "في اليونان القديمة، كانت مناجم لافريو الفضية وراء قوة أثينا. بنى الأثينيون أسطولهم البحري بعائدات هذه المناجم ودافعوا عن اليونان ضد الغزو الفارسي.",
        "أصبحت عملة الدينار الروماني العملة المشتركة لحوض البحر المتوسط لمدة 500 عام. لكن مع انحدار الإمبراطورية، تم تخفيض محتوى الفضة باستمرار — أدى هذا إلى أولى أزمات التضخم في التاريخ.",
      ]},
      { id: "islam", heading: "العصر الذهبي الإسلامي: الدرهم والعلم", paragraphs: [
        "رفعت الحضارة الإسلامية الفضة إلى آفاق جديدة اقتصادياً وعلمياً. في عام 696، بدأ الخليفة الأموي عبد الملك بن مروان سك الدرهم من الفضة الخالصة. أصبح هذا المعيار العملة المشتركة لشبكة تجارية واسعة من الأندلس إلى آسيا الوسطى.",
        "طوّر الكيميائي جابر بن حيان في القرن الثامن تقنيات تنقية الفضة. بإتقانه طريقة الكوبيلة للحصول على الفضة النقية، وضع جابر أسس علم المعادن الحديث.",
        "سكّت دور الضرب السلجوقية والعثمانية دراهم وأقجات فضية في الأناضول لقرون. كانت دور ضرب قونية وإسطنبول وغوموشخانه وطرابزون في قلب تجارة طريق الحرير.",
      ]},
      { id: "yeniDunya", heading: "العالم الجديد: بوتوسي والعولمة", paragraphs: [
        "عندما اكتُشف جبل سيرو ريكو (الجبل الغني) في بوليفيا عام 1545، تغيّر التاريخ العالمي. أصبح منجم بوتوسي أكثر مصادر الفضة إنتاجاً في التاريخ. استُخرج منه نحو 60,000 طن — أكثر من نصف مخزون العالم من الفضة آنذاك.",
        "تدفقت الفضة الإسبانية إلى الصين عبر سفينة مانيلا وإلى أوروبا عبر الأسطول الأطلسي. شكّل هذا التدفق أول شبكة تجارية عالمية حقيقية في التاريخ.",
        "لكن ثمن هذه الثروة كان باهظاً. لقي السكان الأصليون والأفارقة المستعبدون حتفهم في ظروف لا إنسانية. يُقدّر أن 8 ملايين شخص ماتوا في هذه المناجم.",
      ]},
      { id: "modern", heading: "العصر الحديث: الصناعة والتحول", paragraphs: [
        "شهد القرن التاسع عشر بداية الاستخدام الصناعي للفضة. في عام 1839، اخترع داغير تقنية التصوير القائمة على كيمياء هاليد الفضة. لمدة 150 عاماً اعتمد التصوير العالمي على الفضة.",
        "في عام 1873، ألغت أمريكا والدول الأوروبية الفضة كمعيار نقدي. خفض هذا القرار أسعار الفضة لكنه زاد استخدامها الصناعي.",
        "في عام 1980، حاول الأخوان هانت احتكار سوق الفضة فارتفع السعر إلى 50 دولاراً للأونصة، ثم انهار فيما عُرف بـ'الخميس الفضي'.",
        "اليوم الفضة لا غنى عنها في الألواح الشمسية والدوائر الإلكترونية والأجهزة الطبية. مع ثورة الطاقة الخضراء، يحطم الطلب على الفضة أرقاماً قياسية كل عام.",
      ]},
      { id: "timeline", heading: "جدول زمني تفاعلي", paragraphs: [
        "استكشف نقاط التحول في تاريخ الفضة عبر الجدول الزمني التفاعلي أدناه. صفّ حسب العصر، وانقر على الأحداث لمعرفة التفاصيل:",
      ], widget: "timeline" },
      { id: "minimap", heading: "خريطة الفضة التاريخية", paragraphs: [
        "شاهد المواقع الرئيسية للفضة المذكورة في هذا المقال على الخريطة أدناه:",
      ], widget: "minimap" },
    ],
    faq: {
      heading: "الأسئلة الشائعة",
      items: [
        { q: "أين اكتُشفت الفضة لأول مرة؟", a: "بدأ أقدم استخدام معروف للفضة في الألفية الخامسة قبل الميلاد في الأناضول (تركيا الحديثة). عُثر على أقدم القطع الفضية في الحفريات الأثرية في تشاتالهويوك ومنطقة غوموشخانه." },
        { q: "لماذا استُخدمت الفضة كنقود؟", a: "الفضة يصعب تزييفها، وقابلة للقسمة والنقل، ومقاومة للتلف. كونها أكثر وفرة من الذهب أتاح التجارة اليومية، وكونها أكثر قيمة من النحاس ضمن الموثوقية في المعاملات الكبيرة." },
        { q: "ما مكانة الفضة في الحضارة الإسلامية؟", a: "كان الدرهم الفضي حجر الزاوية في الاقتصاد الإسلامي. منذ عهد النبي ﷺ استُخدمت الفضة كنصاب الزكاة، وفي العصر الأموي حقق الدرهم القياسي وحدة نقدية عبر العالم الإسلامي." },
        { q: "لماذا بوتوسي بهذه الأهمية؟", a: "منجم بوتوسي في بوليفيا هو أكثر مصادر الفضة إنتاجاً في التاريخ. وفّر أكثر من نصف إنتاج العالم من الفضة في القرون 16-18 ولعب دوراً حاسماً في تشكيل التجارة العالمية." },
        { q: "ما استخدامات الفضة اليوم؟", a: "نحو 50% من استخدام الفضة الحديث صناعي (ألواح شمسية، إلكترونيات، طب)، و25% مجوهرات، و15% استثمار (سبائك، صناديق)، و10% أدوات فضية. قطاع الطاقة الشمسية هو الأسرع نمواً." },
      ],
    },
    sources: {
      heading: "المصادر",
      items: [
        "معهد الفضة — \"مسح الفضة العالمي 2025\"",
        "برودل، فرنان — \"الحضارة المادية: القرون 15-18\"",
        "دار الضرب التركية — مجموعة العملات التاريخية",
        "فلين ودينيس وجيرالديز — \"ولد بملعقة فضية\" (1995)",
        "جابر بن حيان — كتاب الكيمياء (القرن 8)",
        "يونسكو — ملف منجم إيوامي غينزان",
      ],
    },
    related: {
      heading: "مواضيع ذات صلة",
      items: [
        { title: "ما هو عيار 925؟", path: "/ar/uretim/925", cat: "الإنتاج" },
        { title: "الفضة في الحضارة الإسلامية", path: "/ar/tarih/islam", cat: "التاريخ" },
        { title: "تاريخ أسعار الفضة", path: "/ar/piyasa/fiyat", cat: "السوق" },
        { title: "مناجم الفضة العالمية", path: "/ar/maden/kuresel", cat: "المعادن" },
      ],
    },
    sponsor: {
      text: "اكتشف التفسيرات العصرية لتقليد الفضة الممتد لآلاف السنين.",
      cta: "شاهد على إنستغرام",
      note: "هذا المحتوى برعاية إسطنبول غوموش.",
    },
    eraFilter: "تصفية العصر",
    allEras: "الكل",
    toc: "المحتويات",
    darkMode: "الوضع",
    mapLocations: "المواقع التاريخية",
  },
};

// ─── COMPONENT ──────────────────────────────────────────
export default function SilverAtlasHistoryArticle() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);
  const [tocOpen, setTocOpen] = useState(false);
  const [selectedEra, setSelectedEra] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [minimapHover, setMinimapHover] = useState(null);

  const t = T[lang];
  const isRTL = lang === "ar";
  const fontD = "'Playfair Display', Georgia, serif";
  const fontB = lang === "ar" ? "'Noto Naskh Arabic', 'Source Sans 3', sans-serif" : "'Source Sans 3', 'Segoe UI', sans-serif";

  // Colors
  const bg = dark ? "#0f0f14" : "#FAFAF5";
  const bgCard = dark ? "#16161e" : "#ffffff";
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const border = dark ? "rgba(192,192,192,0.08)" : "rgba(0,0,0,0.06)";
  const accent = "#C0C0C0";
  const gold = "#D4AF37";

  const n = (obj) => obj?.[lang] || obj?.en || "";

  // Format year for display
  const fmtYear = (y) => {
    if (lang === "ar") return y < 0 ? `${Math.abs(y)} ق.م` : `${y} م`;
    if (lang === "tr") return y < 0 ? `MÖ ${Math.abs(y)}` : `${y}`;
    return y < 0 ? `${Math.abs(y)} BCE` : `${y} CE`;
  };

  const filteredEvents = selectedEra === "all"
    ? TIMELINE_EVENTS
    : TIMELINE_EVENTS.filter(e => e.era === selectedEra);

  // ─── Timeline Widget ───────────────────────────────────
  const TimelineWidget = () => (
    <div style={{ margin: "16px 0 28px" }}>
      {/* Era filter */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
        <button
          onClick={() => { setSelectedEra("all"); setSelectedEvent(null); }}
          style={{
            padding: "6px 14px", borderRadius: 8, border: `1px solid ${selectedEra === "all" ? gold+"66" : border}`,
            background: selectedEra === "all" ? gold+"15" : "transparent", cursor: "pointer",
            color: selectedEra === "all" ? gold : textS, fontSize: 12, fontFamily: fontB, fontWeight: selectedEra === "all" ? 600 : 400,
          }}
        >{t.allEras}</button>
        {Object.entries(ERAS).map(([key, era]) => (
          <button key={key}
            onClick={() => { setSelectedEra(key); setSelectedEvent(null); }}
            style={{
              padding: "6px 14px", borderRadius: 8,
              border: `1px solid ${selectedEra === key ? era.color+"66" : border}`,
              background: selectedEra === key ? era.color+"15" : "transparent", cursor: "pointer",
              color: selectedEra === key ? era.color : textS, fontSize: 12, fontFamily: fontB,
              fontWeight: selectedEra === key ? 600 : 400, transition: "all 0.2s",
            }}
          >{n(era)}</button>
        ))}
      </div>

      {/* Timeline line */}
      <div style={{ position: "relative", padding: isRTL ? "0 24px 0 0" : "0 0 0 24px" }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute", [isRTL ? "right" : "left"]: 10, top: 0, bottom: 0,
          width: 2, background: `linear-gradient(180deg, ${gold}44, ${accent}22)`,
        }} />

        {filteredEvents.map((ev, i) => {
          const eraColor = ERAS[ev.era]?.color || accent;
          const isSelected = selectedEvent?.id === ev.id;
          return (
            <div key={ev.id} style={{
              position: "relative", marginBottom: 16, cursor: "pointer",
              paddingLeft: isRTL ? 0 : 24, paddingRight: isRTL ? 24 : 0,
            }}
              onClick={() => setSelectedEvent(isSelected ? null : ev)}
            >
              {/* Dot */}
              <div style={{
                position: "absolute", [isRTL ? "right" : "left"]: -1, top: 8,
                width: 12, height: 12, borderRadius: "50%",
                background: isSelected ? eraColor : dark ? "#1a1a24" : "#f5f5f0",
                border: `2px solid ${eraColor}`,
                boxShadow: isSelected ? `0 0 12px ${eraColor}44` : "none",
                transition: "all 0.3s", zIndex: 2,
              }} />

              {/* Card */}
              <div style={{
                padding: "12px 16px", borderRadius: 12,
                border: `1px solid ${isSelected ? eraColor+"44" : border}`,
                background: isSelected ? (dark ? eraColor+"08" : eraColor+"06") : "transparent",
                transition: "all 0.3s",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: isSelected ? 8 : 0 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, color: eraColor,
                    fontFamily: "'JetBrains Mono', monospace", minWidth: 70,
                  }}>{fmtYear(ev.year)}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: textP, fontFamily: fontB }}>{n(ev.title)}</span>
                  <span style={{
                    marginLeft: isRTL ? 0 : "auto", marginRight: isRTL ? "auto" : 0,
                    fontSize: 14, color: textS, transition: "transform 0.3s",
                    transform: isSelected ? "rotate(90deg)" : "rotate(0)",
                  }}>›</span>
                </div>
                {isSelected && (
                  <div style={{
                    fontSize: 13, lineHeight: 1.7, color: textS,
                    paddingTop: 4, borderTop: `1px solid ${border}`, marginTop: 4,
                  }}>
                    {n(ev.desc)}
                    <div style={{ fontSize: 10, color: eraColor, marginTop: 8, opacity: 0.8 }}>
                      {n(ERAS[ev.era])} · {ERAS[ev.era]?.range}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // ─── Mini Map Widget (SVG) ─────────────────────────────
  const MiniMapWidget = () => {
    const locations = TIMELINE_EVENTS.filter(e => e.loc);
    // Simple mercator projection for SVG
    const projX = (lng) => ((lng + 180) / 360) * 700;
    const projY = (lat) => ((90 - lat) / 180) * 400;

    return (
      <div style={{ margin: "16px 0 28px", position: "relative" }}>
        <svg viewBox="0 0 700 400" style={{
          width: "100%", maxHeight: 320, borderRadius: 12,
          background: dark ? "#0c0c10" : "#eeeee8",
          border: `1px solid ${border}`,
        }}>
          {/* Simple world outline hint */}
          <rect x="0" y="0" width="700" height="400" fill="transparent" />
          {/* Grid lines */}
          {[0,1,2,3,4].map(i => (
            <line key={`h${i}`} x1={0} y1={i*100} x2={700} y2={i*100} stroke={border} strokeWidth={0.5} />
          ))}
          {[0,1,2,3,4,5,6].map(i => (
            <line key={`v${i}`} x1={i*100+50} y1={0} x2={i*100+50} y2={400} stroke={border} strokeWidth={0.5} />
          ))}
          {/* Equator */}
          <line x1={0} y1={200} x2={700} y2={200} stroke={gold+"33"} strokeWidth={1} strokeDasharray="4 4" />

          {/* Location dots */}
          {locations.map((ev, i) => {
            const cx = projX(ev.loc[1]);
            const cy = projY(ev.loc[0]);
            const eraColor = ERAS[ev.era]?.color || accent;
            const isHover = minimapHover === ev.id;
            return (
              <g key={ev.id}
                onMouseEnter={() => setMinimapHover(ev.id)}
                onMouseLeave={() => setMinimapHover(null)}
                style={{ cursor: "pointer" }}
              >
                {/* Pulse ring */}
                {isHover && (
                  <circle cx={cx} cy={cy} r={14} fill="none" stroke={eraColor} strokeWidth={1} opacity={0.4}>
                    <animate attributeName="r" from="8" to="18" dur="1s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0" dur="1s" repeatCount="indefinite" />
                  </circle>
                )}
                <circle cx={cx} cy={cy} r={isHover ? 7 : 5}
                  fill={eraColor} opacity={isHover ? 1 : 0.8}
                  stroke={dark ? "#0f0f14" : "#FAFAF5"} strokeWidth={1.5}
                />
                {isHover && (
                  <g>
                    <rect x={cx - 60} y={cy - 30} width={120} height={22} rx={4}
                      fill={dark ? "#1a1a24ee" : "#ffffffee"} stroke={eraColor+"44"} strokeWidth={0.5}
                    />
                    <text x={cx} y={cy - 15} textAnchor="middle" fontSize={9}
                      fill={textP} fontFamily={fontB} fontWeight={500}
                    >{n(ev.title)}</text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
        {/* Legend */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 10, justifyContent: "center" }}>
          {Object.entries(ERAS).map(([key, era]) => (
            <div key={key} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, color: textS }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: era.color }} />
              {n(era)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{
      minHeight: "100vh", background: bg, color: textP,
      fontFamily: fontB, transition: "all 0.3s",
    }}>
      {/* Header */}
      <header style={{
        borderBottom: `1px solid ${border}`, padding: "12px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: dark ? "#0c0c10" : "#f5f5f0", position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: `linear-gradient(135deg, ${accent}, ${gold})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 11, fontWeight: 700, color: "#0f0f14", fontFamily: fontD,
          }}>Ag</div>
          <div>
            <div style={{ fontFamily: fontD, fontWeight: 600, fontSize: 15 }}>{t.nav}</div>
            <div style={{ fontSize: 10, color: textS }}>{t.navSub}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", gap: 2, background: dark ? "rgba(128,128,128,0.08)" : "rgba(0,0,0,0.04)", borderRadius: 6, padding: 2 }}>
            {["tr", "en", "ar"].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                border: "none", cursor: "pointer", padding: "3px 8px", borderRadius: 4,
                background: lang === l ? (dark ? "rgba(192,192,192,0.15)" : "rgba(0,0,0,0.08)") : "transparent",
                color: lang === l ? textP : textS, fontSize: 11, fontWeight: lang === l ? 600 : 400,
                fontFamily: l === "ar" ? "'Noto Naskh Arabic', serif" : fontB,
              }}>{l === "ar" ? "عر" : l.toUpperCase()}</button>
            ))}
          </div>
          <button onClick={() => setDark(!dark)} style={{
            border: "none", cursor: "pointer", background: "transparent",
            color: textS, fontSize: 16, padding: 4,
          }}>{dark ? "☀️" : "🌙"}</button>
        </div>
      </header>

      {/* Article */}
      <article style={{
        maxWidth: 740, margin: "0 auto", padding: "32px 24px 60px",
      }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 8, fontSize: 12, color: textS, marginBottom: 20, flexWrap: "wrap" }}>
          {t.breadcrumb.map((b, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {i > 0 && <span style={{ color: border, fontSize: 10 }}>{isRTL ? "‹" : "›"}</span>}
              <span style={{ color: i === t.breadcrumb.length - 1 ? gold : textS }}>{b}</span>
            </span>
          ))}
        </div>

        {/* Category badge */}
        <div style={{
          display: "inline-block", padding: "4px 14px", borderRadius: 6,
          background: gold + "15", color: gold, fontSize: 11, fontWeight: 600,
          letterSpacing: "0.04em", marginBottom: 16,
        }}>{t.category}</div>

        {/* Title */}
        <h1 style={{
          fontFamily: fontD, fontSize: 32, fontWeight: 700, lineHeight: 1.2,
          marginBottom: 10, color: textP,
        }}>{t.title}</h1>
        <p style={{ fontSize: 16, color: textS, lineHeight: 1.5, marginBottom: 20 }}>{t.subtitle}</p>

        {/* Meta */}
        <div style={{
          display: "flex", gap: 16, fontSize: 12, color: textS, marginBottom: 32,
          paddingBottom: 20, borderBottom: `1px solid ${border}`, flexWrap: "wrap",
        }}>
          <span>✍️ {t.meta.author}</span>
          <span>📅 {t.meta.date}</span>
          <span>⏱️ {t.meta.readTime}</span>
        </div>

        {/* TOC */}
        <div style={{
          border: `1px solid ${border}`, borderRadius: 12, marginBottom: 32,
          overflow: "hidden",
        }}>
          <button onClick={() => setTocOpen(!tocOpen)} style={{
            width: "100%", padding: "12px 18px", border: "none", cursor: "pointer",
            background: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            color: textP, fontFamily: fontB, fontSize: 14, fontWeight: 500,
          }}>
            <span>📑 {t.toc}</span>
            <span style={{ transition: "transform 0.3s", transform: tocOpen ? "rotate(180deg)" : "rotate(0)" }}>▾</span>
          </button>
          {tocOpen && (
            <div style={{ padding: "8px 18px 16px" }}>
              {t.sections.filter(s => s.heading).map((s, i) => (
                <a key={i} href={`#${s.id}`} style={{
                  display: "block", padding: "6px 0", fontSize: 13,
                  color: textS, textDecoration: "none", borderBottom: `1px solid ${border}`,
                }}
                onClick={() => setTocOpen(false)}
                >
                  <span style={{ color: gold, marginRight: 8, fontWeight: 600 }}>{i + 1}.</span>
                  {s.heading}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Sections */}
        {t.sections.map((sec, si) => (
          <section key={si} id={sec.id} style={{ marginBottom: 36 }}>
            {sec.heading && (
              <h2 style={{
                fontFamily: fontD, fontSize: 22, fontWeight: 600,
                marginBottom: 14, paddingTop: 12, color: textP,
                borderTop: si > 1 ? `1px solid ${border}` : "none",
                paddingTop: si > 1 ? 28 : 0,
              }}>{sec.heading}</h2>
            )}
            {sec.paragraphs.map((p, pi) => (
              <p key={pi} style={{
                fontSize: 15, lineHeight: 1.85, color: textS, marginBottom: 14,
                textAlign: "justify",
              }}>{p}</p>
            ))}
            {sec.widget === "timeline" && <TimelineWidget />}
            {sec.widget === "minimap" && <MiniMapWidget />}
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
            <div key={i} style={{ fontSize: 13, color: textS, lineHeight: 1.6, marginBottom: 6, display: "flex", gap: 8 }}>
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
                background: dark ? `linear-gradient(${120*i}deg, #1e1e2e, #2a2a3e)` : `linear-gradient(${120*i}deg, #e0ddd4, #d5d0c4)`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={textS} strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill={textS} />
                </svg>
              </div>
            ))}
          </div>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 24px", borderRadius: 10,
              background: `linear-gradient(135deg, ${accent}, ${gold})`,
              color: "#0f0f14", fontSize: 13, fontWeight: 600, textDecoration: "none",
            }}
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
