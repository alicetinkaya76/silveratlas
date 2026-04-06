import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Tarih", "Anadolu Gümüş Geleneği"],
    category: "Tarih",
    title: "Anadolu Gümüş Geleneği",
    subtitle: "Hitit'ten Selçuklu'ya, Osmanlı'dan günümüze — 4.000 yıllık kesintisiz gümüş işçiliği mirası",
    meta: { author: "Turan Erbaş", date: "15 Nisan 2026", readTime: "12 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Anadolu, tarih boyunca Doğu ile Batı arasında bir köprü olmuştur — ve gümüş işçiliği, bu kültürel alışverişin en parlak yansımalarından biridir. MÖ 3000'lerden itibaren Anadolu'da gümüş madenciliği ve kuyumculuk yapıldığına dair arkeolojik kanıtlar bulunmaktadır.",
          "Hititler, Frigler, Lidyalılar, Romalılar, Bizanslılar, Selçuklular ve Osmanlılar — her medeniyet kendi estetik dilini gümüşe aktarmış; bir öncekinin birikimini alıp dönüştürmüştür. Bugün Türkiye'nin çeşitli bölgelerinde yaşayan zanaat gelenekleri, bu 4.000 yıllık kesintisiz silsilenin devamıdır.",
        ],
      },
      {
        id: "hitit", heading: "Hitit ve Erken Tunç Çağı (MÖ 2500–1200)",
        paragraphs: [
          "Hattusa (Boğazköy) ve Alacahöyük kazılarından çıkan gümüş ritüel kaplar, boğa heykelcikleri ve mühürler, Anadolu'nun en eski sofistike gümüş işçiliği örnekleridir. Hitit gümüş ritonları — hayvan başı formunda içki kapları — döküm, dövme ve kazıma tekniklerinin bir arada kullanıldığını gösterir.",
          "Hititler gümüşü yalnızca süs eşyası için değil, uluslararası diplomaside de kullandılar. Kadeş Antlaşması'nın (MÖ 1259) gümüş tablet üzerine yazıldığına dair kayıtlar, metalin prestij değerini ortaya koyar.",
        ],
      },
      {
        id: "lidya", heading: "Lidya ve İlk Sikke (MÖ 7. yüzyıl)",
        paragraphs: [
          "Lidya Krallığı (bugünkü Manisa-Salihli), dünya tarihinde ilk standart sikkeleri basan medeniyettir. Kral Alyattes ve oğlu Kroisos döneminde basılan elektrum (altın-gümüş alaşımı) ve saf gümüş sikkeler, ticaret devriminin temelini attı.",
          "Sardes'teki rafinasyon atölyeleri, altın ve gümüşü ayırmak için kupelasyon ve asit yöntemlerini kullanıyordu — antik dünyanın en gelişmiş metalürji merkezlerinden biriydi.",
        ],
      },
      {
        id: "bizans", heading: "Roma ve Bizans Dönemi (MÖ 1. yüzyıl – MS 1453)",
        paragraphs: [
          "Roma İmparatorluğu döneminde Anadolu'nun gümüş madenleri (özellikle Toros Dağları ve Pontus bölgesi) imparatorluk darphanelerine hammadde sağladı. Konstantinopolis, Hristiyan dünyasının en büyük gümüş işleme merkeziydi.",
          "Bizans gümüş işçiliği filigran (telkâri), repousse (kabartma) ve niello (savat) tekniklerini mükemmelleştirdi. Kilise eşyaları — haçlar, buhurdanlar, İncil kapakları — dönemin en görkemli gümüş eserleri arasındadır. Bu teknikler doğrudan Selçuklu ve Osmanlı ustalarına aktarıldı.",
        ],
      },
      {
        id: "selcuklu", heading: "Selçuklu Dönemi (1071–1308)",
        paragraphs: [
          "Anadolu Selçukluları, İslami geometrik desenleri Bizans teknik birikimiyle harmanlayarak özgün bir gümüş estetiği yarattı. Konya, Sivas ve Kayseri'deki medrese ve camilerde kullanılan gümüş kaplamalar, avizeler ve rahle süslemeleri dönemin zenginliğini yansıtır.",
          "Selçuklu gümüş işçiliğinin ayırt edici özellikleri: bitkisel arabesk motifleri, geometrik geçme desenler, hayvan figürlü (zoomorfik) kaplar ve Kûfi hat ile bezeli objeler. Bu dönemde savat (niello) tekniği Anadolu'da zirveye ulaştı.",
        ],
      },
      {
        id: "osmanli", heading: "Osmanlı İmparatorluğu (1299–1922)",
        paragraphs: [
          "Osmanlı dönemi, Anadolu gümüş geleneğinin en verimli ve çeşitli çağıdır. Topkapı Sarayı Atölyeleri (Ehl-i Hiref) yüzlerce gümüş ustasını (kuyumcu, telkârici, savatkâr) bünyesinde barındırıyordu.",
          "16. yüzyılda Kanuni Sultan Süleyman döneminde Osmanlı gümüş sanatı dünya çapında tanınıyordu. Elçiler, padişaha gümüş hediyeler sunarken; saraydan gönderilen gümüş eşyalar diplomatik prestij aracıydı.",
          "Osmanlı gümüş geleneğinin dalları: saray kuyumculuğu (tuğralı objeler, mücevherli silahlar), dini eşya (Kur'an mahfazaları, buhurdanlar), günlük kullanım (kahve fincan zarfları, gülabdanlar, aynaklı tepsiler) ve askeri teçhizat (kılıç kabzaları, zırh süsleri).",
        ],
      },
      {
        id: "bolgeler", heading: "Bölgesel Zanaat Merkezleri",
        paragraphs: [
          "Anadolu'nun farklı bölgelerinde farklı gümüş zanaat gelenekleri yaşamaktadır. Aşağıdaki haritada başlıca merkezleri keşfedebilirsiniz:",
        ],
        widget: "regionMap",
      },
      {
        id: "teknikler", heading: "Geleneksel Teknikler",
        paragraphs: [
          "Anadolu gümüş ustalarının yüzyıllar boyunca kullandığı temel teknikler şunlardır:",
        ],
        table: {
          headers: ["Teknik", "Açıklama", "Yaygın Bölge", "UNESCO Durumu"],
          rows: [
            ["Telkâri (Filigran)", "İnce gümüş tellerin bükülüp lehimlenerek dantel benzeri desenler oluşturulması", "Mardin, Beypazarı, Trabzon", "Somut Olmayan Kültürel Miras listesinde"],
            ["Savat (Niello)", "Gümüş yüzeye oyulmuş desenlerin siyah metal alaşımıyla doldurulması", "Erzurum, Kayseri, Van", "Yaşayan usta sayısı azalıyor"],
            ["Kazaz (Gümüş İpek)", "İnce gümüş tellerin ipek gibi örülerek aksesuar üretilmesi", "Trabzon", "UNESCO Somut Olmayan Kültürel Miras"],
            ["Repoussé (Kabartma)", "Gümüş levhanın arkadan çekiçlenerek kabartma desen oluşturulması", "İstanbul, Gaziantep", "Aktif üretim devam ediyor"],
            ["Mine (Emaye)", "Gümüş yüzeye cam bazlı renkli kaplamalar uygulanması", "İstanbul, Kütahya", "Sınırlı uygulama"],
            ["Kündekâri", "Geometrik parçaların birbirine geçirilerek süsleme oluşturulması", "Konya, Ankara", "Ahşapta yaygın, gümüşte nadir"],
          ],
        },
      },
      {
        id: "gunumuz", heading: "Günümüzde Anadolu Gümüşü",
        paragraphs: [
          "21. yüzyılda Türk gümüş sektörü geleneksel zanaatı modern üretimle birleştirmektedir. Konya, İstanbul ve Gaziantep'teki atölyeler hem el işçiliği hem de makine üretimi ile 925 ayar gümüş takılar üretmektedir.",
          "Türkiye, dünya gümüş takı ihracatında ilk 10 ülke arasında yer almaktadır. İstanbul Gümüş gibi firmalar, geleneksel Anadolu motiflerini çağdaş tasarımlara uyarlayarak hem iç pazar hem de ihracat için üretim yapmaktadır.",
          "Kültürel sürdürülebilirlik açısından en büyük zorluk, geleneksel teknikleri bilen ustaların azalmasıdır. Telkâri ve savat gibi zaman yoğun teknikler, hızlı üretim baskısı altında kaybolma riski taşımaktadır. UNESCO tescili ve çırak yetiştirme programları bu mirası koruma çabalarının başında gelmektedir.",
        ],
      },
    ],
    faq: {
      title: "Sık Sorulan Sorular",
      items: [
        { q: "Anadolu'nun en eski gümüş eseri nedir?", a: "Alacahöyük Kral Mezarları'ndan (MÖ ~2500) çıkan gümüş ritüel kaplar ve boğa heykelcikleri, bilinen en eski örnekler arasındadır." },
        { q: "Telkâri ile kazaz arasındaki fark nedir?", a: "Telkâri düz desenlerde tel bükme ve lehimleme tekniğidir; kazaz ise telin iplik gibi örülmesidir. İkisi de ince gümüş tel kullanır ancak tamamen farklı tekniklerdir." },
        { q: "Türkiye'de gümüş zanaatını nerede öğrenebilirim?", a: "Beypazarı Telkâri Atölyeleri, Trabzon Kazaz Eğitim Merkezi ve İstanbul Büyükşehir Belediyesi SANAT programları kurs imkânı sunmaktadır." },
      ],
    },
    cta: {
      title: "Anadolu Gümüş Geleneğinin Modern Yorumu",
      text: "İstanbul Gümüş, Konya'da 925 ayar gümüşle geleneksel Anadolu motiflerini modern tasarımlarla buluşturuyor.",
      button: "Koleksiyonu Keşfet",
    },
    footer: {
      copyright: "© 2026 SilverAtlas.org — Turan Erbaş tarafından hazırlanmıştır.",
      sponsor: "İstanbul Gümüş sponsorluğundadır",
      links: ["Hakkımızda", "Makaleler", "İletişim"],
    },
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Encyclopedia",
    breadcrumb: ["Home", "History", "Anatolian Silver Heritage"],
    category: "History",
    title: "Anatolian Silver Heritage",
    subtitle: "From Hittites to Seljuks, Ottomans to today — 4,000 years of unbroken silver craft tradition",
    meta: { author: "Turan Erbaş", date: "April 15, 2026", readTime: "12 min read" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Anatolia has been a bridge between East and West throughout history — and silver craftsmanship is one of the brightest reflections of this cultural exchange. Archaeological evidence dates silver mining and jewelry-making in Anatolia to at least 3000 BCE.",
          "Hittites, Phrygians, Lydians, Romans, Byzantines, Seljuks, and Ottomans — each civilization transferred its aesthetic language to silver, absorbing and transforming the legacy of its predecessors. Today, the craft traditions living in various regions of Turkey are the continuation of this 4,000-year unbroken chain.",
        ],
      },
      {
        id: "hitit", heading: "Hittite and Early Bronze Age (2500–1200 BCE)",
        paragraphs: [
          "Silver ritual vessels, bull figurines, and seals from Hattusa and Alacahöyük excavations are the earliest examples of sophisticated Anatolian silverwork. Hittite silver rhytons — drinking vessels in animal-head forms — demonstrate combined casting, forging, and engraving techniques.",
          "The Hittites used silver not only for ornamental purposes but also in international diplomacy. Records suggest the Treaty of Kadesh (1259 BCE) was inscribed on silver tablets, demonstrating the metal's prestige value.",
        ],
      },
      {
        id: "lidya", heading: "Lydia and the First Coins (7th century BCE)",
        paragraphs: [
          "The Kingdom of Lydia (modern Manisa-Salihli) was the first civilization to mint standard coins. Electrum and pure silver coins from the reigns of Alyattes and Croesus laid the foundation for the trade revolution.",
          "Refining workshops at Sardis used cupellation and acid methods to separate gold from silver — one of the most advanced metallurgical centers in the ancient world.",
        ],
      },
      {
        id: "bizans", heading: "Roman and Byzantine Period (1st c. BCE – 1453 CE)",
        paragraphs: [
          "During the Roman Empire, Anatolia's silver mines (especially Taurus Mountains and Pontus region) supplied raw material to imperial mints. Constantinople was the largest silver processing center of the Christian world.",
          "Byzantine silver craftsmanship perfected filigree, repoussé, and niello techniques. Church furnishings — crosses, censers, Gospel covers — rank among the period's most magnificent silver works. These techniques were directly transmitted to Seljuk and Ottoman masters.",
        ],
      },
      {
        id: "selcuklu", heading: "Seljuk Period (1071–1308)",
        paragraphs: [
          "The Anatolian Seljuks blended Islamic geometric patterns with Byzantine technical heritage to create an original silver aesthetic. Silver coatings, chandeliers, and lectern ornaments in Konya, Sivas, and Kayseri reflect the period's wealth.",
          "Distinguishing features of Seljuk silverwork: vegetal arabesque motifs, interlocking geometric patterns, zoomorphic vessels, and objects adorned with Kufic calligraphy. Niello technique reached its zenith in Anatolia during this period.",
        ],
      },
      {
        id: "osmanli", heading: "Ottoman Empire (1299–1922)",
        paragraphs: [
          "The Ottoman era is the most productive and diverse age of Anatolian silver tradition. The Topkapi Palace Workshops (Ehl-i Hiref) housed hundreds of silver artisans — jewelers, filigree masters, and niello specialists.",
          "In the 16th century under Suleiman the Magnificent, Ottoman silver art gained worldwide recognition. Ambassadors presented silver gifts to the sultan while silver objects sent from the palace served as diplomatic prestige tools.",
          "Branches of Ottoman silver tradition: court jewelry (tughra objects, jeweled weapons), religious articles (Quran cases, censers), daily use (coffee cup holders, rosewater sprinklers, mirrored trays) and military equipment (sword hilts, armor decorations).",
        ],
      },
      {
        id: "bolgeler", heading: "Regional Craft Centers",
        paragraphs: [
          "Different silver craft traditions thrive in different regions of Anatolia. Explore the main centers in the map below:",
        ],
        widget: "regionMap",
      },
      {
        id: "teknikler", heading: "Traditional Techniques",
        paragraphs: [
          "The fundamental techniques used by Anatolian silver masters over centuries:",
        ],
        table: {
          headers: ["Technique", "Description", "Common Region", "UNESCO Status"],
          rows: [
            ["Telkari (Filigree)", "Bending and soldering thin silver wires into lace-like patterns", "Mardin, Beypazarı, Trabzon", "Intangible Cultural Heritage listed"],
            ["Savat (Niello)", "Filling engraved patterns with black metal alloy on silver surface", "Erzurum, Kayseri, Van", "Number of living masters declining"],
            ["Kazaziye", "Weaving thin silver wires into silk-like accessories", "Trabzon", "UNESCO Intangible Cultural Heritage"],
            ["Repoussé", "Hammering silver sheet from behind to create raised patterns", "Istanbul, Gaziantep", "Active production continues"],
            ["Enamel (Mine)", "Applying glass-based colored coatings to silver surface", "Istanbul, Kütahya", "Limited application"],
            ["Kündekari", "Interlocking geometric pieces to create ornamental composition", "Konya, Ankara", "Common in wood, rare in silver"],
          ],
        },
      },
      {
        id: "gunumuz", heading: "Anatolian Silver Today",
        paragraphs: [
          "In the 21st century, Turkey's silver sector combines traditional craft with modern production. Workshops in Konya, Istanbul, and Gaziantep produce 925 sterling silver jewelry through both handcraft and machine production.",
          "Turkey ranks among the top 10 countries in global silver jewelry exports. Companies like Istanbul Silver adapt traditional Anatolian motifs into contemporary designs for both domestic and export markets.",
          "The greatest challenge for cultural sustainability is the decline of masters who know traditional techniques. Time-intensive techniques like filigree and niello face the risk of disappearing under fast production pressure. UNESCO inscription and apprenticeship programs are at the forefront of efforts to preserve this heritage.",
        ],
      },
    ],
    faq: {
      title: "FAQ",
      items: [
        { q: "What is the oldest silver artifact from Anatolia?", a: "Silver ritual vessels and bull figurines from Alacahöyük Royal Tombs (~2500 BCE) are among the oldest known examples." },
        { q: "What is the difference between filigree and kazaziye?", a: "Filigree involves bending and soldering wire into flat patterns; kazaziye is weaving wire like thread. Both use thin silver wire but are entirely different techniques." },
        { q: "Where can I learn silver crafts in Turkey?", a: "Beypazarı Filigree Workshops, Trabzon Kazaziye Training Center, and Istanbul Metropolitan Municipality SANAT programs offer courses." },
      ],
    },
    cta: {
      title: "Modern Interpretation of Anatolian Silver Heritage",
      text: "Istanbul Silver combines traditional Anatolian motifs with modern designs in 925 sterling silver, crafted in Konya.",
      button: "Explore Collection",
    },
    footer: {
      copyright: "© 2026 SilverAtlas.org — Created by Turan Erbaş.",
      sponsor: "Sponsored by Istanbul Silver",
      links: ["About", "Articles", "Contact"],
    },
  },
  ar: {
    nav: "SilverAtlas", navSub: "موسوعة الفضة",
    breadcrumb: ["الرئيسية", "التاريخ", "تراث الفضة الأناضولي"],
    category: "التاريخ",
    title: "تراث الفضة الأناضولي",
    subtitle: "من الحثيين إلى السلاجقة، ومن العثمانيين إلى اليوم — ٤٠٠٠ عام من تقاليد صياغة الفضة المتواصلة",
    meta: { author: "توران إرباش", date: "١٥ أبريل ٢٠٢٦", readTime: "١٢ دقيقة قراءة" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "كانت الأناضول جسراً بين الشرق والغرب عبر التاريخ — وصياغة الفضة هي أحد أبرز انعكاسات هذا التبادل الثقافي. تعود الأدلة الأثرية على تعدين الفضة وصناعة المجوهرات في الأناضول إلى عام ٣٠٠٠ قبل الميلاد على الأقل.",
          "الحثيون والفريجيون والليديون والرومان والبيزنطيون والسلاجقة والعثمانيون — كل حضارة نقلت لغتها الجمالية إلى الفضة. تقاليد الحرف الحية اليوم في مناطق مختلفة من تركيا هي استمرار لهذه السلسلة المتواصلة عبر ٤٠٠٠ عام.",
        ],
      },
      {
        id: "hitit", heading: "الحثيون والعصر البرونزي المبكر",
        paragraphs: [
          "الأواني الفضية الطقسية وتماثيل الثيران والأختام من حفريات حاتوسا وألاجاهويوك هي أقدم أمثلة صياغة الفضة المتطورة في الأناضول.",
        ],
      },
      {
        id: "selcuklu", heading: "العصر السلجوقي (١٠٧١-١٣٠٨)",
        paragraphs: [
          "مزج سلاجقة الأناضول الأنماط الهندسية الإسلامية مع التراث التقني البيزنطي لإبداع جمالية فضية أصيلة. بلغ فن النيلو (السواد) ذروته في الأناضول خلال هذه الفترة.",
        ],
      },
      {
        id: "osmanli", heading: "الإمبراطورية العثمانية (١٢٩٩-١٩٢٢)",
        paragraphs: [
          "العصر العثماني هو أكثر عصور تراث الفضة الأناضولي إنتاجاً وتنوعاً. ضمت ورش قصر توبكابي مئات حرفيي الفضة. في القرن السادس عشر في عهد سليمان القانوني، اكتسب فن الفضة العثماني شهرة عالمية.",
        ],
      },
    ],
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        { q: "ما أقدم قطعة فضية أناضولية؟", a: "أواني الطقوس الفضية وتماثيل الثيران من مقابر ألاجاهويوك الملكية (~٢٥٠٠ ق.م) من أقدم الأمثلة المعروفة." },
      ],
    },
    cta: {
      title: "تفسير عصري للتراث الأناضولي",
      text: "إسطنبول للفضة تجمع بين الزخارف الأناضولية التقليدية والتصاميم المعاصرة بفضة عيار ٩٢٥.",
      button: "استكشف المجموعة",
    },
    footer: {
      copyright: "© ٢٠٢٦ SilverAtlas.org — إعداد توران إرباش",
      sponsor: "برعاية إسطنبول للفضة",
      links: ["حول", "مقالات", "اتصل"],
    },
  },
};

const SILVER = "#C0C0C0";
const DARK_SILVER = "#708090";
const NAVY = "#1a1a2e";
const GOLD_ACCENT = "#D4AF37";
const FONT_HEADING = "'Playfair Display', Georgia, serif";
const FONT_BODY = "'Source Sans 3', 'Segoe UI', sans-serif";
const FONT_ARABIC = "'Noto Naskh Arabic', 'Traditional Arabic', serif";
const FONT_MONO = "'JetBrains Mono', 'Fira Code', monospace";

const RegionMapWidget = ({ lang, dark }) => {
  const [activeRegion, setActiveRegion] = useState(null);
  const isRTL = lang === "ar";

  const regions = {
    tr: [
      { id: "mardin", name: "Mardin", craft: "Telkâri (Filigran)", detail: "Mardin telkârisi, Süryani ve İslam geleneğinin harmanıdır. İnce gümüş tellerin geometrik ve bitkisel desenlere dönüştürülmesi yüzyıllardır sürmektedir. Mardin çarşısında hâlâ aktif atölyeler bulunur.", x: 72, y: 55 },
      { id: "trabzon", name: "Trabzon", craft: "Kazaziye", detail: "Gümüş telin ipek gibi örülmesi tekniğidir. Trabzon'a özgü bu zanaat, UNESCO Somut Olmayan Kültürel Miras listesindedir. Bilezik, kolye ve tesbih üretilir.", x: 68, y: 25 },
      { id: "beypazari", name: "Beypazarı", craft: "Telkâri & Gümüş Takı", detail: "Ankara'nın Beypazarı ilçesi, özellikle gümüş takı ve telkâri üretimiyle tanınır. Tarihi çarşıdaki atölyeler ziyarete açıktır.", x: 48, y: 38 },
      { id: "konya", name: "Konya", craft: "Modern 925 Üretim", detail: "Türkiye'nin en büyük gümüş takı üretim merkezlerinden biri. İstanbul Gümüş gibi firmalar burada 925 ayar gümüşle hem geleneksel hem modern tasarımlar üretmektedir.", x: 50, y: 55 },
      { id: "istanbul", name: "İstanbul", craft: "Kapalıçarşı Geleneği", detail: "Kapalıçarşı 1461'den beri gümüş ticaretinin kalbidir. Yüzlerce gümüş atölyesi, hem el işi hem makine üretimi ile çalışmaktadır. Osmanlı saray geleneğinin doğrudan devamıdır.", x: 32, y: 32 },
      { id: "erzurum", name: "Erzurum", craft: "Oltu Taşı & Savat", detail: "Erzurum, oltu taşı işçiliği ve savat (niello) tekniğiyle ünlüdür. Siyah oltu taşının gümüşle buluşması, bölgeye özgü bir estetik yaratır.", x: 70, y: 33 },
      { id: "gaziantep", name: "Gaziantep", craft: "Bakırcılık & Gümüş", detail: "Gaziantep'in bakırcılık geleneği gümüş işçiliğiyle iç içe geçmiştir. Repoussé (kabartma) ve kazıma teknikleri hâlâ aktif olarak uygulanmaktadır.", x: 60, y: 58 },
      { id: "midyat", name: "Midyat", craft: "Süryani Telkârisi", detail: "Midyat, Mardin ile birlikte telkâri geleneğinin kalbi sayılır. Süryani ustaların tekelindeki bu sanat, son yıllarda yeni nesil zanaatkârlara da aktarılmaktadır.", x: 70, y: 52 },
    ],
    en: [
      { id: "mardin", name: "Mardin", craft: "Filigree", detail: "Mardin filigree blends Syriac and Islamic traditions. The transformation of thin silver wires into geometric and botanical patterns has continued for centuries.", x: 72, y: 55 },
      { id: "trabzon", name: "Trabzon", craft: "Kazaziye", detail: "The technique of weaving silver wire like silk. Unique to Trabzon, this craft is a UNESCO Intangible Cultural Heritage. Bracelets, necklaces, and prayer beads are produced.", x: 68, y: 25 },
      { id: "beypazari", name: "Beypazarı", craft: "Filigree & Jewelry", detail: "Beypazarı district of Ankara is known for silver jewelry and filigree production. Historic bazaar workshops are open for visits.", x: 48, y: 38 },
      { id: "konya", name: "Konya", craft: "Modern 925 Production", detail: "One of Turkey's largest silver jewelry production centers. Companies like Istanbul Silver produce both traditional and modern 925 sterling designs here.", x: 50, y: 55 },
      { id: "istanbul", name: "İstanbul", craft: "Grand Bazaar Tradition", detail: "The Grand Bazaar has been the heart of silver trade since 1461. Hundreds of silver workshops operate with both handcraft and machine production.", x: 32, y: 32 },
      { id: "erzurum", name: "Erzurum", craft: "Oltu Stone & Niello", detail: "Erzurum is famous for oltu stone craftsmanship and niello technique. The combination of black oltu stone with silver creates a distinctive regional aesthetic.", x: 70, y: 33 },
      { id: "gaziantep", name: "Gaziantep", craft: "Copperwork & Silver", detail: "Gaziantep's coppersmithing tradition intertwines with silver craftsmanship. Repoussé and engraving techniques remain actively practiced.", x: 60, y: 58 },
      { id: "midyat", name: "Midyat", craft: "Syriac Filigree", detail: "Midyat, together with Mardin, is the heartland of the filigree tradition. This art, traditionally the domain of Syriac masters, is now being transmitted to new-generation craftspeople.", x: 70, y: 52 },
    ],
    ar: [
      { id: "mardin", name: "ماردين", craft: "التلكاري (الفيليغران)", detail: "يمزج تلكاري ماردين بين التقاليد السريانية والإسلامية. تحويل الأسلاك الفضية الرفيعة إلى أنماط هندسية ونباتية مستمر منذ قرون.", x: 72, y: 55 },
      { id: "trabzon", name: "طرابزون", craft: "الكزازية", detail: "تقنية نسج سلك الفضة كالحرير. حرفة فريدة من نوعها في طرابزون، مدرجة في قائمة اليونسكو للتراث الثقافي غير المادي.", x: 68, y: 25 },
      { id: "konya", name: "قونية", craft: "إنتاج ٩٢٥ الحديث", detail: "أحد أكبر مراكز إنتاج المجوهرات الفضية في تركيا. شركات مثل إسطنبول للفضة تنتج تصاميم تقليدية وعصرية من فضة عيار ٩٢٥.", x: 50, y: 55 },
      { id: "istanbul", name: "إسطنبول", craft: "تقليد البازار الكبير", detail: "البازار الكبير قلب تجارة الفضة منذ ١٤٦١. مئات ورش الفضة تعمل بالحرف اليدوية والإنتاج الآلي.", x: 32, y: 32 },
    ],
  };

  const currentRegions = regions[lang] || regions.tr;

  return (
    <div style={{ margin: "2rem 0", direction: isRTL ? "rtl" : "ltr" }}>
      {/* Simple region grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "1rem",
      }}>
        {currentRegions.map((region) => (
          <div
            key={region.id}
            onClick={() => setActiveRegion(activeRegion === region.id ? null : region.id)}
            style={{
              padding: "1.25rem",
              borderRadius: "12px",
              cursor: "pointer",
              background: activeRegion === region.id
                ? (dark ? "rgba(212,175,55,0.1)" : "rgba(212,175,55,0.08)")
                : (dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)"),
              border: `1px solid ${activeRegion === region.id ? GOLD_ACCENT : (dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)")}`,
              transition: "all 0.3s ease",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{
                  fontFamily: FONT_HEADING,
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: dark ? SILVER : NAVY,
                  marginBottom: "0.25rem",
                }}>{region.name}</div>
                <div style={{
                  fontFamily: FONT_MONO,
                  fontSize: "0.8rem",
                  color: GOLD_ACCENT,
                }}>{region.craft}</div>
              </div>
              <div style={{
                width: 32, height: 32,
                borderRadius: "50%",
                background: `${GOLD_ACCENT}22`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.9rem",
                color: GOLD_ACCENT,
                flexShrink: 0,
              }}>📍</div>
            </div>
            {activeRegion === region.id && (
              <div style={{
                marginTop: "0.75rem",
                paddingTop: "0.75rem",
                borderTop: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                fontFamily: isRTL ? FONT_ARABIC : FONT_BODY,
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: dark ? "#aaa" : "#555",
              }}>
                {region.detail}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function SilverAtlasAnatolianHeritage() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [faqOpen, setFaqOpen] = useState(null);
  const t = T[lang];
  const isRTL = lang === "ar";
  const bodyFont = isRTL ? FONT_ARABIC : FONT_BODY;

  const bg = dark
    ? "linear-gradient(180deg, #0d0d1a 0%, #1a1a2e 40%, #16213e 100%)"
    : "linear-gradient(180deg, #f8f9fa 0%, #e8e8e8 100%)";
  const textColor = dark ? "#e0e0e0" : "#2c2c2c";
  const mutedColor = dark ? "#999" : "#666";
  const cardBg = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)";
  const borderColor = dark ? "rgba(192,192,192,0.15)" : "rgba(0,0,0,0.1)";

  return (
    <div style={{ minHeight: "100vh", background: bg, direction: isRTL ? "rtl" : "ltr" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Sans+3:wght@300;400;600;700&family=Noto+Naskh+Arabic:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap');
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        * { margin: 0; padding: 0; box-sizing: border-box; }
      `}</style>

      {/* Navbar */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1rem 2rem",
        borderBottom: `1px solid ${borderColor}`,
        background: dark ? "rgba(13,13,26,0.95)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            fontSize: "1.8rem", fontFamily: FONT_HEADING, fontWeight: 900,
            background: `linear-gradient(135deg, ${SILVER}, ${GOLD_ACCENT})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>Ag</div>
          <div>
            <div style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: "1.1rem", color: dark ? SILVER : NAVY }}>{t.nav}</div>
            <div style={{ fontFamily: bodyFont, fontSize: "0.7rem", color: mutedColor }}>{t.navSub}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {["TR", "EN", "AR"].map((l) => (
            <button key={l} onClick={() => setLang(l.toLowerCase())}
              style={{
                padding: "0.3rem 0.6rem", borderRadius: "6px",
                border: `1px solid ${lang === l.toLowerCase() ? GOLD_ACCENT : borderColor}`,
                background: lang === l.toLowerCase() ? `${GOLD_ACCENT}22` : "transparent",
                color: lang === l.toLowerCase() ? GOLD_ACCENT : mutedColor,
                cursor: "pointer", fontFamily: FONT_MONO, fontSize: "0.75rem", fontWeight: 700,
              }}>{l}</button>
          ))}
          <button onClick={() => setDark(!dark)}
            style={{
              padding: "0.3rem 0.6rem", borderRadius: "6px",
              border: `1px solid ${borderColor}`, background: "transparent",
              color: mutedColor, cursor: "pointer", fontSize: "1rem",
              marginLeft: isRTL ? 0 : "0.5rem", marginRight: isRTL ? "0.5rem" : 0,
            }}>{dark ? "☀️" : "🌙"}</button>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div style={{
        padding: "0.75rem 2rem", fontFamily: bodyFont, fontSize: "0.85rem",
        color: mutedColor, maxWidth: 900, margin: "0 auto",
      }}>
        {t.breadcrumb.map((b, i) => (
          <span key={i}>
            {i > 0 && <span style={{ margin: "0 0.5rem", color: DARK_SILVER }}>/</span>}
            <span style={{ color: i === t.breadcrumb.length - 1 ? GOLD_ACCENT : mutedColor }}>{b}</span>
          </span>
        ))}
      </div>

      {/* Hero */}
      <header style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 2rem 1rem", textAlign: isRTL ? "right" : "left" }}>
        <div style={{
          display: "inline-block", padding: "0.3rem 1rem", borderRadius: "20px",
          background: `${GOLD_ACCENT}22`, color: GOLD_ACCENT,
          fontFamily: FONT_MONO, fontSize: "0.8rem", fontWeight: 700,
          marginBottom: "1rem", border: `1px solid ${GOLD_ACCENT}44`,
        }}>{t.category}</div>
        <h1 style={{
          fontFamily: FONT_HEADING, fontSize: "clamp(2rem, 5vw, 2.8rem)",
          fontWeight: 900, color: dark ? "#fff" : NAVY, lineHeight: 1.2, marginBottom: "0.75rem",
        }}>{t.title}</h1>
        <p style={{
          fontFamily: bodyFont, fontSize: "1.15rem", color: DARK_SILVER,
          lineHeight: 1.6, marginBottom: "1.5rem",
        }}>{t.subtitle}</p>
        <div style={{
          display: "flex", gap: "1.5rem", fontFamily: FONT_MONO,
          fontSize: "0.8rem", color: mutedColor, flexWrap: "wrap",
        }}>
          <span>✍️ {t.meta.author}</span>
          <span>📅 {t.meta.date}</span>
          <span>⏱️ {t.meta.readTime}</span>
        </div>
      </header>

      {/* Content */}
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
        {t.sections.map((section) => (
          <section key={section.id} id={section.id} style={{ marginBottom: "3rem" }}>
            {section.heading && (
              <h2 style={{
                fontFamily: FONT_HEADING, fontSize: "1.6rem", fontWeight: 700,
                color: dark ? SILVER : NAVY, marginBottom: "1rem",
                borderBottom: `2px solid ${GOLD_ACCENT}`, paddingBottom: "0.5rem",
              }}>{section.heading}</h2>
            )}
            {section.paragraphs?.map((p, i) => (
              <p key={i} style={{
                fontFamily: bodyFont, fontSize: "1.05rem", lineHeight: 1.85,
                color: textColor, marginBottom: "1rem",
                textAlign: isRTL ? "right" : "justify",
              }}>{p}</p>
            ))}
            {section.table && (
              <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: FONT_BODY, fontSize: "0.9rem" }}>
                  <thead>
                    <tr>
                      {section.table.headers.map((h, i) => (
                        <th key={i} style={{
                          padding: "0.75rem", background: dark ? "rgba(192,192,192,0.1)" : "rgba(26,26,46,0.08)",
                          color: dark ? SILVER : NAVY, fontWeight: 700,
                          textAlign: isRTL ? "right" : "left",
                          borderBottom: `2px solid ${GOLD_ACCENT}`, whiteSpace: "nowrap",
                        }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, ri) => (
                      <tr key={ri} style={{ background: ri % 2 === 0 ? "transparent" : (dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)") }}>
                        {row.map((cell, ci) => (
                          <td key={ci} style={{
                            padding: "0.6rem 0.75rem", color: textColor,
                            borderBottom: `1px solid ${borderColor}`,
                            textAlign: isRTL ? "right" : "left",
                          }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {section.widget === "regionMap" && <RegionMapWidget lang={lang} dark={dark} />}
          </section>
        ))}

        {/* FAQ */}
        {t.faq && (
          <section style={{ marginTop: "3rem" }}>
            <h2 style={{
              fontFamily: FONT_HEADING, fontSize: "1.6rem", fontWeight: 700,
              color: dark ? SILVER : NAVY, marginBottom: "1.5rem",
              borderBottom: `2px solid ${GOLD_ACCENT}`, paddingBottom: "0.5rem",
            }}>{t.faq.title}</h2>
            {t.faq.items.map((item, i) => (
              <div key={i} style={{
                marginBottom: "0.75rem", border: `1px solid ${borderColor}`,
                borderRadius: "10px", overflow: "hidden",
              }}>
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  style={{
                    width: "100%", padding: "1rem 1.25rem",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    background: cardBg, border: "none", cursor: "pointer",
                    fontFamily: bodyFont, fontSize: "1rem", fontWeight: 600,
                    color: dark ? "#e0e0e0" : NAVY, textAlign: isRTL ? "right" : "left",
                  }}>
                  <span>{item.q}</span>
                  <span style={{
                    transform: faqOpen === i ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s", fontSize: "1.3rem", color: GOLD_ACCENT, flexShrink: 0,
                  }}>+</span>
                </button>
                {faqOpen === i && (
                  <div style={{
                    padding: "1rem 1.25rem", fontFamily: bodyFont, fontSize: "0.95rem",
                    lineHeight: 1.7, color: mutedColor,
                    background: dark ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.5)",
                    borderTop: `1px solid ${borderColor}`,
                  }}>{item.a}</div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* CTA */}
        <div style={{
          margin: "3rem 0", padding: "2rem", borderRadius: "16px",
          background: `linear-gradient(135deg, ${NAVY}, #16213e)`,
          border: `1px solid ${GOLD_ACCENT}44`, textAlign: "center",
        }}>
          <div style={{
            fontFamily: FONT_HEADING, fontSize: "1.3rem", fontWeight: 700,
            color: SILVER, marginBottom: "0.75rem",
          }}>{t.cta.title}</div>
          <p style={{
            fontFamily: bodyFont, fontSize: "0.95rem", color: "#999",
            maxWidth: 500, margin: "0 auto 1.25rem",
          }}>{t.cta.text}</p>
          <a href="https://www.istanbulgumus.com" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-block", padding: "0.75rem 2rem", borderRadius: "30px",
              background: `linear-gradient(135deg, ${GOLD_ACCENT}, #c4972a)`,
              color: NAVY, fontFamily: FONT_HEADING, fontWeight: 700,
              fontSize: "0.95rem", textDecoration: "none",
            }}>{t.cta.button}</a>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
            {["@istanbulgumustr", "@istanbulgumuscom", "@istanbulgumusmen"].map((h) => (
              <span key={h} style={{ fontFamily: FONT_MONO, fontSize: "0.75rem", color: DARK_SILVER }}>{h}</span>
            ))}
          </div>
        </div>
      </main>

      <footer style={{
        padding: "2rem", borderTop: `1px solid ${borderColor}`,
        textAlign: "center", fontFamily: bodyFont, fontSize: "0.85rem", color: mutedColor,
      }}>
        <div style={{ marginBottom: "0.5rem" }}>{t.footer.copyright}</div>
        <div style={{ color: GOLD_ACCENT, marginBottom: "0.75rem" }}>{t.footer.sponsor}</div>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          {t.footer.links.map((l) => (
            <span key={l} style={{ cursor: "pointer", color: DARK_SILVER }}>{l}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}
