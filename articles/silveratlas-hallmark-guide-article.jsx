import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Üretim", "Ayar Damgası Rehberi"],
    category: "Üretim",
    title: "Ayar Damgası Rehberi",
    subtitle: "Dünya genelinde gümüş damga sistemleri, semboller ve doğrulama yöntemleri",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "12 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Bir gümüş ürünün üzerindeki küçük damga işareti, yüzyılların biriktirdiği bir güven sisteminin özeti­dir. Ayar damgası (hallmark), ürünün beyan edilen saflık derecesine sahip olduğunu resmî olarak onaylar — tüketicinin korunmasının en eski biçimlerinden biri olarak 1300'lere kadar uzanan bir geçmişe sahiptir.",
          "Bugün dünyada 30'dan fazla ülke bağımsız damga sistemi kullanmaktadır. Bazı ülkelerde damga zorunludur, bazılarında isteğe bağlıdır. Bu rehber, başlıca ülkelerin damga sistemlerini, sembollerini ve okuma yöntemlerini tek bir kaynakta toplamaktadır.",
        ],
      },
      {
        id: "tarihce", heading: "Damga Sisteminin Tarihi",
        paragraphs: [
          "Bilinen en eski zorunlu ayar damgası sistemi, 1300 yılında İngiltere Kralı I. Edward tarafından uygulamaya konmuştur. Goldsmith's Hall'da (Kuyumcular Salonu) yapılan bu testler, 'hallmark' kelimesinin de kökenini oluşturur — kelime tam anlamıyla 'salon damgası' demektir.",
          "Fransa'da 1275, İtalya'da 14. yüzyıl başları, Almanya'da 15. yüzyılda damga sistemleri geliştirilmiştir. Osmanlı İmparatorluğu'nda ise Darphane-i Âmire bünyesinde kuyumcu esnafına yönelik ayar kontrol sistemi en az 16. yüzyıldan itibaren işletilmiştir.",
          "1972'de Viyana Konvansiyonu ile uluslararası karşılıklı tanıma anlaşması imzalanmıştır. Bu anlaşmaya taraf ülkelerde vurulan ortak damga (CCM — Common Control Mark), diğer üye ülkelerde de geçerlidir.",
        ],
      },
      {
        id: "ulkeler", heading: "Ülkelere Göre Damga Sistemleri",
        paragraphs: [
          "Aşağıda başlıca ülkelerin gümüş damga sistemleri, sembolleri ve zorunluluk durumları karşılaştırılmaktadır:",
        ],
        widget: "countryGrid",
      },
      {
        id: "turkiye", heading: "Türkiye Damga Sistemi",
        paragraphs: [
          "Türkiye'de ayar damgası Darphane ve Damga Matbaası Genel Müdürlüğü tarafından uygulanır. Sistem 1923'ten bu yana modernize edilerek sürdürülmektedir.",
          "Türk damga sistemi dört ana unsurdan oluşur: ayar damgası (sayısal değer — 925, 900, 800), üretici firma kodu (iki harf + rakam), tarih harfi (her yıl değişen alfabe harfi) ve isteğe bağlı Darphane sembolü (üç hilal).",
          "2020'den itibaren lazer damgalama teknolojisi de kabul edilmektedir. Geleneksel mekanik damgalama küçük ürünlerde deformasyon riski taşırken, lazer damgalama mikrometre hassasiyetinde iz bırakır.",
          "Damgasız gümüş ürün satışı 1705 sayılı Kanun kapsamında yasaktır ve idari para cezası uygulanır. Tüketici olarak damgayı kontrol etmek, sahte veya düşük ayarlı ürünlerden korunmanın en temel yoludur.",
        ],
      },
      {
        id: "okuma", heading: "Damga Nasıl Okunur?",
        paragraphs: [
          "Bir gümüş ürünün damgasını okumak için 10× büyüteç (loupe) kullanmanız önerilir. Damga genellikle ürünün iç yüzeyinde bulunur: yüzüklerde halka içi, bilekliklerde kilit mekanizması yanı, kolyede zincir bağlantısı, servis eşyalarında taban kısmı.",
          "Okunacak bilgiler: saflık değeri (sayısal — 925, 950, 800), üretici/ithalatçı kodu, test ofisi sembolü (ülkeye özgü), tarih harfi veya yılı. Birden fazla damga birlikte bulunabilir — özellikle antika parçalarda farklı dönemlerin damgaları üst üste gelebilir.",
        ],
      },
      {
        id: "viyana", heading: "Viyana Konvansiyonu ve Uluslararası Tanıma",
        paragraphs: [
          "1972 Viyana Konvansiyonu, kıymetli maden damgalarının uluslararası karşılıklı tanınmasını sağlar. CCM (Common Control Mark) olarak bilinen ortak damga, terazi sembolü içinde ayar değerini taşır.",
          "Konvansiyon üyesi ülkeler: Avusturya, Çek Cumhuriyeti, Danimarka, Finlandiya, İrlanda, İsrail, Letonya, Litvanya, Hollanda, Norveç, Polonya, Portekiz, İsveç, İsviçre, İngiltere, Kıbrıs, Ukrayna ve Hırvatistan. Türkiye konvansiyon üyesi değildir ancak ikili anlaşmalarla bazı ülkelerle karşılıklı tanıma sağlanmıştır.",
        ],
      },
      {
        id: "sahte", heading: "Sahte Damga ve Doğrulama",
        paragraphs: [
          "Maalesef piyasada sahte damgalı ürünler de bulunmaktadır. Dikkat edilecek işaretler: damganın aşırı derinde veya sığ olması, kenarların düzensizliği, yazı tipinin standart dışı olması, eksik unsurlar (üretici kodu olmadan yalnızca sayı).",
          "Kesin doğrulama yöntemleri: XRF (X-ışını floresans) analizi — tahribatsız ve en güvenilir; asit testi — mihenk taşı üzerinde; yoğunluk testi — Arşimet prensibi ile. Tüketici düzeyinde ise: güvenilir kuyumcudan alışveriş, fatura ve garanti belgesi isteme, Darphane sorgu sistemi kullanma.",
        ],
      },
    ],
    countries: [
      { name: "Türkiye", symbol: "925 + Firma Kodu", body: "Darphane ve Damga Matbaası", mandatory: true, note: "Lazer damga 2020'den itibaren kabul edilir" },
      { name: "İngiltere", symbol: "Aslan (Lion Passant)", body: "Assay Office (Birmingham, Edinburgh, London, Sheffield)", mandatory: true, note: "1300'den beri — dünyanın en eski sistemi" },
      { name: "Fransa", symbol: "Minerva Başı", body: "Bureau de la Garantie", mandatory: true, note: "1275'ten beri; küçük eserler için kare çerçeve" },
      { name: "İtalya", symbol: "Yıldız + Rakam", body: "Ufficio del Saggio", mandatory: true, note: "Bölge kodu + üretici numarası" },
      { name: "Almanya", symbol: "Hilal + 925", body: "Öz-denetim sistemi", mandatory: false, note: "Zorunlu değil ama yaygın uygulama" },
      { name: "ABD", symbol: "STERLING veya 925", body: "FTC düzenlemesi", mandatory: false, note: "Zorunlu değil; 'sterling' kelimesi yasal koruma altında" },
      { name: "Rusya", symbol: "Kokoshnik Kadın Profili", body: "Assay İnspektörlüğü", mandatory: true, note: "1700'lerden beri; bölge kodu dahil" },
      { name: "Japonya", symbol: "SILVER veya 925", body: "Kuyumcu Birliği", mandatory: false, note: "Gönüllü sistem;造幣局 (Mint) logosu prestij" },
      { name: "Hindistan", symbol: "BIS Hallmark + Üçgen", body: "Bureau of Indian Standards", mandatory: true, note: "2021'den itibaren zorunlu; QR doğrulama" },
      { name: "Mısır", symbol: "Lotus Çiçeği", body: "Damga Genel İdaresi", mandatory: true, note: "Osmanlı geleneğinin devamı" },
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Damgasız gümüş ürün almak güvenli mi?", a: "Damga, ürünün test edildiğinin resmî kanıtıdır. Damgasız ürünlerde ayar garantisi bulunmaz. Türkiye'de damgasız satış yasal değildir. Güvenilir kuyumculardan damgalı ürün almak en sağlıklı tercihdir." },
        { q: "Antika gümüşte damga bulamazsam ne yapmalıyım?", a: "Antika parçalarda damga aşınmış olabilir veya o dönemde damga zorunlu olmayabilir. XRF analizi ile tahribatsız ayar testi yaptırabilirsiniz. Antikacı veya uzman kuyumcu değerlendirmesi önerilir." },
        { q: "Viyana Konvansiyonu damgası nedir?", a: "CCM (Common Control Mark), terazi sembolü içinde ayar değerini gösteren uluslararası damgadır. Konvansiyon üyesi ülkelerde karşılıklı tanınır; ayrıca yerel damga vurulmasına gerek kalmaz." },
        { q: "925 ile STERLING aynı şey mi?", a: "Evet, ikisi de %92,5 saflığı ifade eder. '925' sayısal gösterim, 'Sterling' ise İngilizce terimdir. Her ikisi de yasal olarak korunan ifadelerdir." },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "Darphane ve Damga Matbaası Genel Müdürlüğü — Ayar Damgası Yönetmeliği",
        "Convention on the Control and Marking of Articles of Precious Metals (Vienna, 1972)",
        "Assay Office Birmingham — \"A Guide to Hallmarks\"",
        "Bureau of Indian Standards — Hallmarking Scheme 2021",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "925 Ayar Nedir?", path: "/tr/uretim/925-ayar", cat: "Üretim" },
        { title: "Rafinasyon Süreci", path: "/tr/uretim/rafinasyon", cat: "Üretim" },
        { title: "Osmanlı Gümüşçülüğü", path: "/tr/tarih/osmanli", cat: "Tarih" },
      ],
    },
    sponsor: {
      text: "Darphane damgalı, 925 ayar gümüş takıları keşfedin.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    darkMode: "Mod",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Manufacturing", "Hallmark Guide"],
    category: "Manufacturing",
    title: "Silver Hallmark Guide",
    subtitle: "Worldwide hallmark systems, symbols, and verification methods for silver",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "12 min read" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "The small stamp on a piece of silver is a summary of centuries of accumulated trust. A hallmark officially certifies that a product meets its declared purity level — one of the oldest forms of consumer protection, dating back to the 1300s.",
          "Today, more than 30 countries use independent hallmarking systems. In some countries hallmarking is mandatory, in others voluntary. This guide compiles the hallmark systems, symbols, and reading methods of major countries into a single reference.",
        ],
      },
      {
        id: "history", heading: "History of the Hallmark System",
        paragraphs: [
          "The earliest known mandatory hallmarking system was enacted in 1300 by King Edward I of England. Tests conducted at Goldsmith's Hall gave rise to the word 'hallmark' itself — literally meaning 'hall stamp.'",
          "France developed its system from 1275, Italy in the early 14th century, and Germany in the 15th century. In the Ottoman Empire, the Imperial Mint (Darphane-i Âmire) operated an assay control system for goldsmiths from at least the 16th century.",
          "In 1972, the Vienna Convention established international mutual recognition of precious metal hallmarks. The Common Control Mark (CCM) stamped in signatory countries is valid across all member states.",
        ],
      },
      {
        id: "countries", heading: "Hallmark Systems by Country",
        paragraphs: [
          "Below is a comparison of hallmark systems, symbols, and requirements across major countries:",
        ],
        widget: "countryGrid",
      },
      {
        id: "turkey", heading: "Turkish Hallmark System",
        paragraphs: [
          "In Turkey, hallmarking is administered by the General Directorate of the Mint (Darphane). The system has been modernized and maintained since 1923.",
          "The Turkish system comprises four elements: purity mark (numerical value — 925, 900, 800), manufacturer code (two letters + number), date letter (alphabet letter that changes annually), and optional Mint symbol (three crescents).",
          "Since 2020, laser hallmarking has been accepted. While traditional mechanical stamping risks deformation on small items, laser marking leaves traces with micrometer precision.",
          "Sale of unhallmarked silver products is prohibited under Law No. 1705 and subject to administrative fines. Checking the hallmark is the most basic way to protect yourself from counterfeit or substandard products.",
        ],
      },
      {
        id: "reading", heading: "How to Read a Hallmark",
        paragraphs: [
          "A 10× loupe is recommended for reading hallmarks. Stamps are typically found on inner surfaces: inside ring bands, near bracelet clasps, at necklace chain connections, and on the base of silverware.",
          "Information to read: purity value (numerical — 925, 950, 800), maker/importer code, assay office symbol (country-specific), and date letter or year. Multiple stamps may appear together — especially on antique pieces where different eras' marks may overlap.",
        ],
      },
      {
        id: "vienna", heading: "Vienna Convention & International Recognition",
        paragraphs: [
          "The 1972 Vienna Convention enables mutual international recognition of precious metal hallmarks. The Common Control Mark (CCM) displays the purity value within a scales symbol.",
          "Convention member states include: Austria, Czech Republic, Denmark, Finland, Ireland, Israel, Latvia, Lithuania, Netherlands, Norway, Poland, Portugal, Sweden, Switzerland, United Kingdom, Cyprus, Ukraine, and Croatia. Turkey is not a convention member but has bilateral recognition agreements with some countries.",
        ],
      },
      {
        id: "counterfeit", heading: "Counterfeit Marks & Verification",
        paragraphs: [
          "Unfortunately, products with counterfeit hallmarks exist in the market. Warning signs include: excessively deep or shallow marks, irregular edges, non-standard fonts, and missing elements (numbers only without maker codes).",
          "Definitive verification methods: XRF (X-ray fluorescence) analysis — non-destructive and most reliable; acid test — on touchstone; density test — using Archimedes' principle. At the consumer level: buying from reputable jewelers, requesting invoices and certificates, and using mint verification systems.",
        ],
      },
    ],
    countries: [
      { name: "Turkey", symbol: "925 + Maker Code", body: "General Directorate of the Mint", mandatory: true, note: "Laser marking accepted since 2020" },
      { name: "United Kingdom", symbol: "Lion Passant", body: "Assay Office (Birmingham, Edinburgh, London, Sheffield)", mandatory: true, note: "Since 1300 — world's oldest system" },
      { name: "France", symbol: "Head of Minerva", body: "Bureau de la Garantie", mandatory: true, note: "Since 1275; square frame for small works" },
      { name: "Italy", symbol: "Star + Number", body: "Ufficio del Saggio", mandatory: true, note: "Region code + maker number" },
      { name: "Germany", symbol: "Crescent + 925", body: "Self-regulation", mandatory: false, note: "Not mandatory but widely practiced" },
      { name: "USA", symbol: "STERLING or 925", body: "FTC regulation", mandatory: false, note: "Not mandatory; 'sterling' is legally protected" },
      { name: "Russia", symbol: "Kokoshnik Woman Profile", body: "Assay Inspectorate", mandatory: true, note: "Since 1700s; includes region code" },
      { name: "Japan", symbol: "SILVER or 925", body: "Jeweler's Association", mandatory: false, note: "Voluntary; 造幣局 (Mint) logo is prestige" },
      { name: "India", symbol: "BIS Hallmark + Triangle", body: "Bureau of Indian Standards", mandatory: true, note: "Mandatory since 2021; QR verification" },
      { name: "Egypt", symbol: "Lotus Flower", body: "General Administration of Stamps", mandatory: true, note: "Continuation of Ottoman tradition" },
    ],
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Is it safe to buy silver without a hallmark?", a: "A hallmark is official proof of testing. Without it, there's no purity guarantee. In Turkey, selling unhallmarked silver is illegal. Buying hallmarked pieces from reputable jewelers is the safest choice." },
        { q: "What if I can't find a hallmark on antique silver?", a: "On antique pieces, hallmarks may have worn away or may not have been required in that era. You can get a non-destructive XRF test. Evaluation by an antique dealer or expert jeweler is recommended." },
        { q: "What is the Vienna Convention hallmark?", a: "The CCM (Common Control Mark) is an international mark showing purity within a scales symbol. It is mutually recognized in convention member states, eliminating the need for additional local stamps." },
        { q: "Are 925 and STERLING the same?", a: "Yes, both indicate 92.5% purity. '925' is the numerical representation, 'Sterling' is the English term. Both are legally protected designations." },
      ],
    },
    sources: {
      heading: "Sources",
      items: [
        "General Directorate of the Mint — Hallmarking Regulations (Turkey)",
        "Convention on the Control and Marking of Articles of Precious Metals (Vienna, 1972)",
        "Assay Office Birmingham — \"A Guide to Hallmarks\"",
        "Bureau of Indian Standards — Hallmarking Scheme 2021",
      ],
    },
    related: {
      heading: "Related Topics",
      items: [
        { title: "What is 925 Sterling Silver?", path: "/en/manufacturing/925-silver", cat: "Manufacturing" },
        { title: "Refining Process", path: "/en/manufacturing/refining", cat: "Manufacturing" },
        { title: "Ottoman Silverwork", path: "/en/history/ottoman", cat: "History" },
      ],
    },
    sponsor: {
      text: "Explore officially hallmarked 925 sterling silver jewelry.",
      cta: "See on Instagram",
      note: "This content is sponsored by Istanbul Silver.",
    },
    darkMode: "Mode",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة معرفة الفضة",
    breadcrumb: ["الرئيسية", "التصنيع", "دليل طوابع العيار"],
    category: "التصنيع",
    title: "دليل طوابع عيار الفضة",
    subtitle: "أنظمة الدمغ حول العالم والرموز وطرق التحقق",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٢ دقيقة قراءة" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "الطابع الصغير على قطعة الفضة هو ملخص لنظام ثقة تراكم عبر قرون. يُصادق طابع العيار (Hallmark) رسمياً على أن المنتج يحقق درجة النقاء المُعلنة — وهو من أقدم أشكال حماية المستهلك، ويمتد تاريخه إلى عام ١٣٠٠م.",
          "يستخدم اليوم أكثر من ٣٠ دولة أنظمة دمغ مستقلة. في بعض الدول يكون الدمغ إلزامياً وفي أخرى اختيارياً. يجمع هذا الدليل أنظمة الدمغ الرئيسية ورموزها وطرق قراءتها في مصدر واحد.",
        ],
      },
      {
        id: "tarikh", heading: "تاريخ نظام الدمغ",
        paragraphs: [
          "أقدم نظام دمغ إلزامي معروف سنّه الملك إدوارد الأول في إنجلترا عام ١٣٠٠م. الاختبارات التي أُجريت في قاعة الصاغة (Goldsmith's Hall) هي أصل كلمة hallmark — أي حرفياً 'ختم القاعة'.",
          "طورت فرنسا نظامها منذ ١٢٧٥، وإيطاليا في أوائل القرن الرابع عشر، وألمانيا في القرن الخامس عشر. في الدولة العثمانية، شغّلت دار الضرب نظام رقابة العيار للصاغة منذ القرن السادس عشر على الأقل.",
        ],
      },
      {
        id: "duwal", heading: "أنظمة الدمغ حسب الدولة",
        paragraphs: [
          "مقارنة بين أنظمة الدمغ والرموز ومتطلبات الإلزامية في الدول الرئيسية:",
        ],
        widget: "countryGrid",
      },
      {
        id: "turkiya", heading: "نظام الدمغ التركي",
        paragraphs: [
          "في تركيا يدير الدمغ المديرية العامة لدار السك والطبع. يتألف النظام من: طابع العيار (٩٢٥، ٩٠٠، ٨٠٠)، رمز الشركة المصنعة، حرف التاريخ، ورمز دار السك الاختياري.",
          "يُحظر بيع منتجات الفضة بدون دمغ بموجب القانون رقم ١٧٠٥ وتُفرض غرامات إدارية. التحقق من الدمغ هو الخطوة الأساسية لحماية نفسك.",
        ],
      },
    ],
    countries: [
      { name: "تركيا", symbol: "٩٢٥ + رمز الشركة", body: "دار السك والطبع", mandatory: true, note: "الدمغ بالليزر مقبول منذ ٢٠٢٠" },
      { name: "بريطانيا", symbol: "الأسد المتمشي", body: "مكتب الفحص", mandatory: true, note: "منذ ١٣٠٠ — أقدم نظام في العالم" },
      { name: "فرنسا", symbol: "رأس مينرفا", body: "مكتب الضمان", mandatory: true, note: "منذ ١٢٧٥" },
      { name: "إيطاليا", symbol: "نجمة + رقم", body: "مكتب الفحص", mandatory: true, note: "رمز المنطقة + رقم المصنع" },
      { name: "ألمانيا", symbol: "هلال + ٩٢٥", body: "رقابة ذاتية", mandatory: false, note: "غير إلزامي لكنه شائع" },
      { name: "أمريكا", symbol: "STERLING أو ٩٢٥", body: "لجنة التجارة الفدرالية", mandatory: false, note: "غير إلزامي" },
      { name: "روسيا", symbol: "ملف كوكوشنيك", body: "مفتشية الفحص", mandatory: true, note: "منذ القرن ١٨" },
      { name: "الهند", symbol: "BIS + مثلث", body: "مكتب المعايير الهندية", mandatory: true, note: "إلزامي منذ ٢٠٢١" },
      { name: "مصر", symbol: "زهرة اللوتس", body: "الإدارة العامة للدمغ", mandatory: true, note: "استمرار التقليد العثماني" },
    ],
    faq: {
      heading: "الأسئلة الشائعة",
      items: [
        { q: "هل شراء فضة بدون دمغ آمن؟", a: "الدمغ دليل رسمي على الفحص. بدونه لا ضمان للنقاء. شراء قطع مدموغة من صاغة موثوقين هو الأسلم." },
        { q: "ما هو ختم اتفاقية فيينا؟", a: "CCM هو ختم دولي يُظهر العيار داخل رمز ميزان. يُعترف به في الدول الأعضاء بالاتفاقية." },
      ],
    },
    sources: { heading: "المصادر", items: ["المديرية العامة لدار السك — لوائح الدمغ", "اتفاقية فيينا ١٩٧٢"] },
    related: { heading: "مواضيع ذات صلة", items: [{ title: "ما هو عيار ٩٢٥؟", path: "/ar/manufacturing/925", cat: "التصنيع" }] },
    sponsor: { text: "اكتشفوا مجوهرات فضة عيار ٩٢٥ مدموغة رسمياً.", cta: "شاهد على إنستغرام", note: "هذا المحتوى برعاية إسطنبول للفضة." },
    darkMode: "الوضع",
  },
};

// ─── Country Grid Widget ─────────────────────────────────
function CountryGrid({ countries, dark, lang }) {
  const isRTL = lang === "ar";
  const accent = dark ? "#C0C0C0" : "#708090";
  const gold = "#D4AF37";
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const bgCard = dark ? "#1a1a24" : "#ffffff";
  const border = dark ? "rgba(192,192,192,0.12)" : "rgba(0,0,0,0.08)";

  const icons = {
    "Türkiye": "🇹🇷", "Turkey": "🇹🇷", "تركيا": "🇹🇷",
    "İngiltere": "🇬🇧", "United Kingdom": "🇬🇧", "بريطانيا": "🇬🇧",
    "Fransa": "🇫🇷", "France": "🇫🇷", "فرنسا": "🇫🇷",
    "İtalya": "🇮🇹", "Italy": "🇮🇹", "إيطاليا": "🇮🇹",
    "Almanya": "🇩🇪", "Germany": "🇩🇪", "ألمانيا": "🇩🇪",
    "ABD": "🇺🇸", "USA": "🇺🇸", "أمريكا": "🇺🇸",
    "Rusya": "🇷🇺", "Russia": "🇷🇺", "روسيا": "🇷🇺",
    "Japonya": "🇯🇵", "Japan": "🇯🇵",
    "Hindistan": "🇮🇳", "India": "🇮🇳", "الهند": "🇮🇳",
    "Mısır": "🇪🇬", "Egypt": "🇪🇬", "مصر": "🇪🇬",
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
      {countries.map((c, i) => (
        <div key={i} style={{
          background: bgCard, borderRadius: 12, padding: 18,
          border: `1px solid ${border}`, transition: "transform 0.2s, box-shadow 0.2s",
          cursor: "default",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${dark ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.08)"}` }}
        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 28 }}>{icons[c.name] || "🏛️"}</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: 15, color: textP }}>{c.name}</div>
              <div style={{ fontSize: 11, color: textS }}>{c.body}</div>
            </div>
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: 8, marginBottom: 10,
            padding: "8px 12px", borderRadius: 8,
            background: dark ? "rgba(192,192,192,0.06)" : "rgba(192,192,192,0.1)",
          }}>
            <span style={{ fontSize: 12, color: accent, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>
              {c.symbol}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <span style={{
              display: "inline-block", padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 600,
              background: c.mandatory ? "rgba(76,175,80,0.15)" : "rgba(255,152,0,0.15)",
              color: c.mandatory ? "#4CAF50" : "#FF9800",
            }}>
              {c.mandatory ? (lang === "ar" ? "إلزامي" : lang === "en" ? "Mandatory" : "Zorunlu") : (lang === "ar" ? "اختياري" : lang === "en" ? "Voluntary" : "İsteğe Bağlı")}
            </span>
          </div>
          <div style={{ fontSize: 12, color: textS, lineHeight: 1.5 }}>{c.note}</div>
        </div>
      ))}
    </div>
  );
}

// ─── Main Article Component ──────────────────────────────
export default function HallmarkGuideArticle() {
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
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
          <div style={{ display: "flex", gap: 2, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", borderRadius: 7, padding: 2 }}>
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
          <button onClick={() => setDark(!dark)} style={{ border: "none", cursor: "pointer", background: "transparent", color: textS, fontSize: 16, padding: 4 }}>
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "16px 24px 0", display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", fontSize: 12, color: textS }}>
        {t.breadcrumb.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {i > 0 && <span style={{ opacity: 0.4 }}>{isRTL ? "‹" : "›"}</span>}
            <a href="#" style={{ color: i === t.breadcrumb.length - 1 ? textP : textS, textDecoration: "none", fontWeight: i === t.breadcrumb.length - 1 ? 500 : 400 }}>{item}</a>
          </span>
        ))}
      </div>

      {/* ARTICLE */}
      <article style={{ maxWidth: 760, margin: "0 auto", padding: "32px 24px 64px", animation: "fadeUp 0.6s ease both" }}>
        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: 6, fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: gold, border: `1px solid ${gold}33`, marginBottom: 16 }}>{t.category}</div>
          <h1 style={{ fontFamily: fontD, fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 12 }}>{t.title}</h1>
          <p style={{ fontSize: 16, color: textS, lineHeight: 1.6, marginBottom: 20 }}>{t.subtitle}</p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", fontSize: 13, color: textS, paddingBottom: 20, borderBottom: `1px solid ${border}` }}>
            <span>{t.meta.author}</span><span style={{ opacity: 0.3 }}>·</span>
            <span>{t.meta.date}</span><span style={{ opacity: 0.3 }}>·</span>
            <span>{t.meta.readTime}</span>
          </div>
        </div>

        {/* Sections */}
        {t.sections.map((sec, i) => (
          <section key={sec.id} style={{ marginBottom: 40 }}>
            {sec.heading && <h2 style={{ fontFamily: fontD, fontSize: 22, fontWeight: 600, marginBottom: 16, color: accent }}>{sec.heading}</h2>}
            {sec.paragraphs.map((p, j) => (
              <p key={j} style={{ fontSize: 15.5, lineHeight: 1.85, color: textP, marginBottom: 14, opacity: 0.92 }}>{p}</p>
            ))}
            {sec.widget === "countryGrid" && <CountryGrid countries={t.countries} dark={dark} lang={lang} />}
          </section>
        ))}

        {/* FAQ */}
        {t.faq && (
          <section style={{ marginTop: 48, marginBottom: 40 }}>
            <h2 style={{ fontFamily: fontD, fontSize: 22, fontWeight: 600, marginBottom: 20, color: accent }}>{t.faq.heading}</h2>
            {t.faq.items.map((item, i) => (
              <div key={i} style={{ marginBottom: 8, borderRadius: 10, border: `1px solid ${border}`, overflow: "hidden" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                  width: "100%", textAlign: isRTL ? "right" : "left", padding: "14px 18px",
                  background: openFaq === i ? (dark ? "rgba(192,192,192,0.05)" : "rgba(192,192,192,0.08)") : "transparent",
                  border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: textP,
                  display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: fontB,
                }}>
                  <span>{item.q}</span>
                  <span style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s", fontSize: 12, color: textS }}>▼</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 18px 16px", fontSize: 14, lineHeight: 1.7, color: textS }}>{item.a}</div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Sources */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: fontD, fontSize: 18, fontWeight: 600, marginBottom: 12, color: accent }}>{t.sources.heading}</h2>
          {t.sources.items.map((s, i) => (
            <div key={i} style={{ fontSize: 13, color: textS, padding: "6px 0", borderBottom: `1px solid ${border}` }}>{i + 1}. {s}</div>
          ))}
        </section>

        {/* Related */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: fontD, fontSize: 18, fontWeight: 600, marginBottom: 12, color: accent }}>{t.related.heading}</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {t.related.items.map((r, i) => (
              <a key={i} href={r.path} style={{
                padding: "10px 16px", borderRadius: 8, border: `1px solid ${border}`,
                textDecoration: "none", color: textP, fontSize: 13, fontWeight: 500,
                background: dark ? "rgba(192,192,192,0.03)" : "rgba(192,192,192,0.06)",
                transition: "border-color 0.2s",
              }}>
                <span style={{ fontSize: 10, color: gold, marginRight: 6 }}>{r.cat}</span>{r.title}
              </a>
            ))}
          </div>
        </section>

        {/* Sponsor CTA */}
        <div style={{
          background: `linear-gradient(135deg, ${dark ? "rgba(212,175,55,0.06)" : "rgba(212,175,55,0.08)"}, transparent)`,
          borderRadius: 14, padding: 24, textAlign: "center",
          border: `1px solid ${gold}22`,
        }}>
          <p style={{ fontSize: 14, color: textS, marginBottom: 12 }}>{t.sponsor.text}</p>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block", padding: "10px 28px", borderRadius: 8,
            background: `linear-gradient(135deg, ${gold}, #c9a227)`, color: "#0f0f14",
            fontWeight: 600, fontSize: 14, textDecoration: "none",
          }}>{t.sponsor.cta}</a>
          <p style={{ fontSize: 11, color: textS, marginTop: 10, opacity: 0.6 }}>{t.sponsor.note}</p>
        </div>
      </article>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${border}`, padding: "24px", textAlign: "center", fontSize: 12, color: textS }}>
        © 2026 SilverAtlas · {t.meta.author}
      </footer>
    </div>
  );
}
