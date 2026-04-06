import { useState } from "react";
const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Kültür", "Gümüş ve Astroloji"],
    category: "Kültür",
    title: "Gümüş ve Astroloji",
    subtitle: "Ay metali, burç taşları, mistik gelenekler ve gümüşün kozmik sembolizmi",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "13 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Gümüş, binlerce yıldır Ay ile ilişkilendirilmiştir. Latince 'luna' (ay) kökünden gelen simyevi sembolü (☽), bu bağın ne kadar derin olduğunu gösterir. Antik medeniyetlerden modern spiritüel pratiklere kadar gümüş, kozmik enerjinin yeryüzündeki yansıması olarak kabul edilmiştir.",
        "Bu makale, gümüşün astrolojik ve mistik bağlamını, burç taşlarıyla uyumunu, simya geleneğindeki yerini ve çağdaş spiritüel kullanımlarını incelemektedir.",
      ]},
      { id: "ay", heading: "Ay Metali: Kozmik Bağlantı", paragraphs: [
        "Astrolojide gümüş Ay'ı temsil eder — duyguları, sezgiyi, bilinçaltını ve kadınsı enerjiyi. Ay'ın gümüşle ilişkilendirilmesi Babil dönemine (MÖ 2000) kadar uzanır. Yedi klasik gezegen-metal eşleştirmesinde (Güneş=Altın, Ay=Gümüş, Mars=Demir, Merkür=Cıva, Jüpiter=Kalay, Venüs=Bakır, Satürn=Kurşun) gümüş her zaman Ay'a aittir.",
        "Vedik astrolojide gümüş takmak, zayıf Ay etkilerini güçlendirdiğine inanılır. Özellikle Yengeç burcunda Ay'ı olanlar için gümüş takı önerilir. Pazartesi günü — Ay'ın günü (Monday/Moon-day) — gümüş takmak için en uygun gün sayılır.",
      ]},
      { id: "burclar", heading: "Burç Taşları ve Gümüş Uyumu", paragraphs: [
        "Her burç taşının gümüşle farklı bir uyumu vardır. Aşağıda 12 burcun taşları ve gümüş uyum seviyesi gösterilmektedir:",
      ], widget: "zodiacGrid" },
      { id: "simya", heading: "Simyada Gümüş (Luna)", paragraphs: [
        "Simyacılar için gümüş, 'Büyük İş' (Magnum Opus) sürecinin kritik bir aşamasını temsil eder. Albedo (beyazlama) aşaması, ruhun arınmasını ve gümüşün sembolik doğuşunu ifade eder.",
        "Paracelsus, gümüşü 'Ay'ın ter damlası' olarak tanımlamıştır. İslam simyacı Câbir bin Hayyân ise gümüşü 'soğuk ve nemli' sınıfına koymuş, ruhani arınma ve şifa ile ilişkilendirmiştir.",
        "Simya sembolojisinde gümüş hilal (☽), altın güneş (☉) ile birleşerek 'kimyevi evliliği' (conjunctio) oluşturur — zıtlıkların uyumu ve mükemmelliğin simgesi.",
      ]},
      { id: "kulturler", heading: "Kültürlerde Gümüşün Mistik Yeri", paragraphs: [
        "Kelt geleneğinde gümüş, perilere karşı koruma sağlar. Gümüş at nalı ve gümüş çan, kötü ruhları uzaklaştırır. Kurtadam efsanelerinde yalnızca gümüş kurşunun etkili olması bu inancın uzantısıdır.",
        "Hindu geleneğinde gümüş, Chandra (Ay tanrısı) ile bağlantılıdır. Gümüş kaplardan su içmek, 'Ay enerjisini' içselleştirmek olarak görülür. Ayurveda'da gümüş, soğutucu ve arıtıcı özellikler taşır.",
        "İslam geleneğinde Hz. Peygamber'in gümüş yüzük kullanması, gümüşe özel bir mana yüklemiştir. Tasavvufta gümüş, kalbin aynasını ve ilahi nurun yansımasını sembolize eder.",
      ]},
      { id: "modern", heading: "Modern Spiritüel Kullanımlar", paragraphs: [
        "Günümüzde gümüş, kristal şifa, meditasyon ve enerji çalışmalarında yaygın olarak kullanılmaktadır. Gümüş takı, taşıyıcısının aurasını güçlendirdiğine, negatif enerjiyi yansıttığına ve sezgisel yetenekleri artırdığına inanılır.",
        "Ay suyu ritüeli: dolunay gecesi gümüş bir kaba konulan su, ay ışığına bırakılır ve ertesi gün 'şarj olmuş' su olarak kullanılır. Bu pratik birçok çağdaş spiritüel gelenekte yaygındır.",
        "Not: Bu makale kültürel ve tarihsel bilgi amaçlıdır. Tıbbi veya psikolojik tedavi yerine geçmez.",
      ]},
    ],
    zodiac: [
      { sign: "Koç", dates: "21 Mar - 19 Nis", stone: "Elmas/Kırmızı Jasper", compat: 3, element: "Ateş", icon: "♈" },
      { sign: "Boğa", dates: "20 Nis - 20 May", stone: "Zümrüt/Rose Quartz", compat: 4, element: "Toprak", icon: "♉" },
      { sign: "İkizler", dates: "21 May - 20 Haz", stone: "Akik/Sitrin", compat: 3, element: "Hava", icon: "♊" },
      { sign: "Yengeç", dates: "21 Haz - 22 Tem", stone: "Ay Taşı/İnci", compat: 5, element: "Su", icon: "♋" },
      { sign: "Aslan", dates: "23 Tem - 22 Ağu", stone: "Yakut/Kaplan Gözü", compat: 2, element: "Ateş", icon: "♌" },
      { sign: "Başak", dates: "23 Ağu - 22 Eyl", stone: "Safir/Peridot", compat: 4, element: "Toprak", icon: "♍" },
      { sign: "Terazi", dates: "23 Eyl - 22 Eki", stone: "Opal/Lapis Lazuli", compat: 4, element: "Hava", icon: "♎" },
      { sign: "Akrep", dates: "23 Eki - 21 Kas", stone: "Topaz/Akuamarin", compat: 5, element: "Su", icon: "♏" },
      { sign: "Yay", dates: "22 Kas - 21 Ara", stone: "Turkuaz/Ametist", compat: 3, element: "Ateş", icon: "♐" },
      { sign: "Oğlak", dates: "22 Ara - 19 Oca", stone: "Garnet/Obsidyen", compat: 3, element: "Toprak", icon: "♑" },
      { sign: "Kova", dates: "20 Oca - 18 Şub", stone: "Ametist/Labradorit", compat: 4, element: "Hava", icon: "♒" },
      { sign: "Balık", dates: "19 Şub - 20 Mar", stone: "Akuamarin/Ay Taşı", compat: 5, element: "Su", icon: "♓" },
    ],
    compatLabel: "Gümüş Uyumu",
    elementLabel: "Element",
    faq: { heading: "Sıkça Sorulan Sorular", items: [
      { q: "Gümüş takı gerçekten enerji taşır mı?", a: "Bilimsel olarak gümüşün enerji taşıdığına dair kanıt yoktur. Ancak kültürel olarak gümüşün şifa ve koruyucu özellikleri binlerce yıldır birçok medeniyette kabul görmüştür. Plasebo etkisi ve psikolojik rahatlama da göz ardı edilmemelidir." },
      { q: "Hangi parmağa gümüş yüzük takmalıyım?", a: "Vedik astrolojide küçük parmak Ay ile, yüzük parmağı Güneş ile ilişkilidir. Gümüş yüzük genellikle küçük parmak veya işaret parmağı için önerilir." },
      { q: "Gümüş kararması negatif enerji belirtisi mi?", a: "Gümüş kararması tamamen kimyasal bir reaksiyondur (sülfürleme). Havadaki kükürt bileşikleri, ter ve kozmetiklerle temas kararmanın nedenidir." },
    ]},
    sources: { heading: "Kaynaklar", items: ["Agrippa — Three Books of Occult Philosophy", "David Rankine — The Book of Gold", "Vedik Astroloji Derneği — Navaratna Rehberi", "Titus Burckhardt — Alchemy: Science of the Cosmos"] },
    related: { heading: "İlgili Konular", items: [
      { title: "Gümüş Sembolizmi", path: "/tr/kultur/sembolizm", cat: "Kültür" },
      { title: "İslam'da Gümüş", path: "/tr/kultur/islam-gumus", cat: "Kültür" },
      { title: "Taş-Gümüş Uyumu", path: "/tr/araclar/tas-uyumu", cat: "Araçlar" },
    ]},
    sponsor: { text: "Burcunuza uygun gümüş takıları keşfedin.", cta: "İstanbul Gümüş'ü Keşfet", note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir." },
    darkMode: "Mod",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Culture", "Silver & Astrology"],
    category: "Culture",
    title: "Silver and Astrology",
    subtitle: "The Moon metal, zodiac stones, mystical traditions and the cosmic symbolism of silver",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "13 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Silver has been associated with the Moon for thousands of years. Its alchemical symbol (☽), derived from the Latin 'luna' (moon), shows how deep this connection runs. From ancient civilizations to modern spiritual practices, silver has been regarded as the earthly reflection of cosmic energy.",
        "This article examines silver's astrological and mystical context, its compatibility with zodiac stones, its place in alchemical tradition, and contemporary spiritual uses.",
      ]},
      { id: "moon", heading: "The Moon Metal: Cosmic Connection", paragraphs: [
        "In astrology, silver represents the Moon — emotions, intuition, the subconscious, and feminine energy. The association of the Moon with silver dates back to Babylon (2000 BCE). In the seven classical planet-metal pairings (Sun=Gold, Moon=Silver, Mars=Iron, Mercury=Quicksilver, Jupiter=Tin, Venus=Copper, Saturn=Lead), silver always belongs to the Moon.",
        "In Vedic astrology, wearing silver is believed to strengthen weak Moon influences. Silver jewelry is especially recommended for those with Moon in Cancer. Monday — the Moon's day — is considered the most auspicious day for wearing silver.",
      ]},
      { id: "zodiac", heading: "Zodiac Stones and Silver Compatibility", paragraphs: [
        "Each zodiac stone has a different compatibility with silver. Below are the 12 zodiac signs with their stones and silver compatibility levels:",
      ], widget: "zodiacGrid" },
      { id: "alchemy", heading: "Silver in Alchemy (Luna)", paragraphs: [
        "For alchemists, silver represents a critical stage in the Great Work (Magnum Opus). The Albedo (whitening) stage signifies the soul's purification and the symbolic birth of silver.",
        "Paracelsus described silver as 'the Moon's dewdrop.' Islamic alchemist Jabir ibn Hayyan classified silver as 'cold and moist,' associating it with spiritual purification and healing.",
        "In alchemical symbolism, the silver crescent (☽) unites with the golden sun (☉) to form the 'chemical marriage' (conjunctio) — a symbol of the harmony of opposites and perfection.",
      ]},
      { id: "cultures", heading: "Silver's Mystical Place in Cultures", paragraphs: [
        "In Celtic tradition, silver protects against fairies. Silver horseshoes and bells ward off evil spirits. The werewolf legend requiring silver bullets is an extension of this belief.",
        "In Hindu tradition, silver is connected to Chandra (Moon god). Drinking water from silver vessels is seen as internalizing 'Moon energy.' In Ayurveda, silver has cooling and purifying properties.",
        "In Islamic tradition, the Prophet's use of a silver ring gives silver special significance. In Sufism, silver symbolizes the mirror of the heart and the reflection of divine light.",
      ]},
      { id: "modern", heading: "Modern Spiritual Uses", paragraphs: [
        "Today, silver is widely used in crystal healing, meditation, and energy work. Silver jewelry is believed to strengthen the wearer's aura, reflect negative energy, and enhance intuitive abilities.",
        "Moon water ritual: water placed in a silver vessel on the night of a full moon is left under moonlight and used as 'charged' water the next day. This practice is common in many contemporary spiritual traditions.",
        "Note: This article is for cultural and historical information purposes. It does not replace medical or psychological treatment.",
      ]},
    ],
    zodiac: [
      { sign: "Aries", dates: "Mar 21 - Apr 19", stone: "Diamond/Red Jasper", compat: 3, element: "Fire", icon: "♈" },
      { sign: "Taurus", dates: "Apr 20 - May 20", stone: "Emerald/Rose Quartz", compat: 4, element: "Earth", icon: "♉" },
      { sign: "Gemini", dates: "May 21 - Jun 20", stone: "Agate/Citrine", compat: 3, element: "Air", icon: "♊" },
      { sign: "Cancer", dates: "Jun 21 - Jul 22", stone: "Moonstone/Pearl", compat: 5, element: "Water", icon: "♋" },
      { sign: "Leo", dates: "Jul 23 - Aug 22", stone: "Ruby/Tiger's Eye", compat: 2, element: "Fire", icon: "♌" },
      { sign: "Virgo", dates: "Aug 23 - Sep 22", stone: "Sapphire/Peridot", compat: 4, element: "Earth", icon: "♍" },
      { sign: "Libra", dates: "Sep 23 - Oct 22", stone: "Opal/Lapis Lazuli", compat: 4, element: "Air", icon: "♎" },
      { sign: "Scorpio", dates: "Oct 23 - Nov 21", stone: "Topaz/Aquamarine", compat: 5, element: "Water", icon: "♏" },
      { sign: "Sagittarius", dates: "Nov 22 - Dec 21", stone: "Turquoise/Amethyst", compat: 3, element: "Fire", icon: "♐" },
      { sign: "Capricorn", dates: "Dec 22 - Jan 19", stone: "Garnet/Obsidian", compat: 3, element: "Earth", icon: "♑" },
      { sign: "Aquarius", dates: "Jan 20 - Feb 18", stone: "Amethyst/Labradorite", compat: 4, element: "Air", icon: "♒" },
      { sign: "Pisces", dates: "Feb 19 - Mar 20", stone: "Aquamarine/Moonstone", compat: 5, element: "Water", icon: "♓" },
    ],
    compatLabel: "Silver Compatibility",
    elementLabel: "Element",
    faq: { heading: "FAQ", items: [
      { q: "Does silver jewelry really carry energy?", a: "There's no scientific evidence that silver carries energy. However, culturally, silver's healing and protective properties have been accepted in many civilizations for thousands of years." },
      { q: "Which finger should I wear a silver ring on?", a: "In Vedic astrology, the little finger is associated with the Moon, the ring finger with the Sun. Silver rings are generally recommended for the little or index finger." },
      { q: "Is silver tarnishing a sign of negative energy?", a: "Silver tarnishing is a purely chemical reaction (sulfidation). Sulfur compounds in the air, sweat, and cosmetics cause tarnishing." },
    ]},
    sources: { heading: "Sources", items: ["Agrippa — Three Books of Occult Philosophy", "David Rankine — The Book of Gold", "Vedic Astrology Association — Navaratna Guide", "Titus Burckhardt — Alchemy: Science of the Cosmos"] },
    related: { heading: "Related", items: [
      { title: "Silver Symbolism", path: "/en/culture/symbolism", cat: "Culture" },
      { title: "Silver in Islam", path: "/en/culture/islam-silver", cat: "Culture" },
    ]},
    sponsor: { text: "Discover silver jewelry matched to your zodiac sign.", cta: "Explore İstanbul Gümüş", note: "This content is sponsored by İstanbul Gümüş." },
    darkMode: "Mode",
  },
  ar: {
    nav: "سيلفر أطلس", navSub: "منصة معرفة الفضة",
    breadcrumb: ["الرئيسية", "الثقافة", "الفضة وعلم الفلك"],
    category: "الثقافة",
    title: "الفضة وعلم التنجيم",
    subtitle: "معدن القمر، أحجار الأبراج، التقاليد الصوفية والرمزية الكونية للفضة",
    meta: { author: "توران إرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٣ دقيقة قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "ارتبطت الفضة بالقمر منذ آلاف السنين. رمزها الكيميائي القديم (☽) المشتق من الكلمة اللاتينية 'luna' (قمر) يوضح عمق هذا الارتباط.",
        "تتناول هذه المقالة السياق الفلكي والصوفي للفضة وتوافقها مع أحجار الأبراج ومكانتها في تقاليد الخيمياء.",
      ]},
      { id: "moon", heading: "معدن القمر: الارتباط الكوني", paragraphs: [
        "في علم التنجيم، تمثل الفضة القمر — العواطف والحدس واللاوعي والطاقة الأنثوية. يعود ربط القمر بالفضة إلى بابل (٢٠٠٠ ق.م).",
        "في علم الفلك الهندي، يُعتقد أن ارتداء الفضة يقوي تأثيرات القمر الضعيفة. يوم الاثنين — يوم القمر — يُعتبر الأنسب لارتداء الفضة.",
      ]},
      { id: "zodiac", heading: "أحجار الأبراج وتوافق الفضة", paragraphs: [
        "لكل حجر برج توافق مختلف مع الفضة:",
      ], widget: "zodiacGrid" },
      { id: "alchemy", heading: "الفضة في الخيمياء (لونا)", paragraphs: [
        "للخيميائيين، تمثل الفضة مرحلة حاسمة في العمل العظيم. مرحلة البياض (ألبيدو) تعني تطهير الروح.",
        "وصف باراسلسوس الفضة بأنها 'قطرة ندى القمر'. صنف جابر بن حيان الفضة على أنها 'باردة ورطبة'.",
      ]},
      { id: "cultures", heading: "مكانة الفضة الصوفية في الثقافات", paragraphs: [
        "في التقليد الكلتي، تحمي الفضة من الجن. في التقليد الهندوسي، ترتبط بتشاندرا (إله القمر).",
        "في التقليد الإسلامي، استخدام النبي ﷺ لخاتم فضة أعطى للفضة أهمية خاصة. في التصوف، ترمز الفضة لمرآة القلب.",
      ]},
      { id: "modern", heading: "الاستخدامات الروحانية الحديثة", paragraphs: [
        "اليوم تُستخدم الفضة في شفاء البلورات والتأمل. ملاحظة: هذه المقالة لأغراض ثقافية وتاريخية فقط.",
      ]},
    ],
    zodiac: [
      { sign: "الحمل", dates: "٢١ مارس - ١٩ أبريل", stone: "الماس", compat: 3, element: "نار", icon: "♈" },
      { sign: "الثور", dates: "٢٠ أبريل - ٢٠ مايو", stone: "الزمرد", compat: 4, element: "تراب", icon: "♉" },
      { sign: "الجوزاء", dates: "٢١ مايو - ٢٠ يونيو", stone: "العقيق", compat: 3, element: "هواء", icon: "♊" },
      { sign: "السرطان", dates: "٢١ يونيو - ٢٢ يوليو", stone: "حجر القمر/اللؤلؤ", compat: 5, element: "ماء", icon: "♋" },
      { sign: "الأسد", dates: "٢٣ يوليو - ٢٢ أغسطس", stone: "الياقوت", compat: 2, element: "نار", icon: "♌" },
      { sign: "العذراء", dates: "٢٣ أغسطس - ٢٢ سبتمبر", stone: "الياقوت الأزرق", compat: 4, element: "تراب", icon: "♍" },
      { sign: "الميزان", dates: "٢٣ سبتمبر - ٢٢ أكتوبر", stone: "العقيق النبيل", compat: 4, element: "هواء", icon: "♎" },
      { sign: "العقرب", dates: "٢٣ أكتوبر - ٢١ نوفمبر", stone: "التوباز", compat: 5, element: "ماء", icon: "♏" },
      { sign: "القوس", dates: "٢٢ نوفمبر - ٢١ ديسمبر", stone: "الفيروز", compat: 3, element: "نار", icon: "♐" },
      { sign: "الجدي", dates: "٢٢ ديسمبر - ١٩ يناير", stone: "العقيق الأحمر", compat: 3, element: "تراب", icon: "♑" },
      { sign: "الدلو", dates: "٢٠ يناير - ١٨ فبراير", stone: "الجمشت", compat: 4, element: "هواء", icon: "♒" },
      { sign: "الحوت", dates: "١٩ فبراير - ٢٠ مارس", stone: "الأكوامارين", compat: 5, element: "ماء", icon: "♓" },
    ],
    compatLabel: "توافق الفضة",
    elementLabel: "العنصر",
    faq: { heading: "الأسئلة الشائعة", items: [
      { q: "هل مجوهرات الفضة تحمل طاقة حقاً؟", a: "لا يوجد دليل علمي. لكن ثقافياً، قُبلت خصائص الفضة الشفائية في حضارات عديدة." },
      { q: "هل اسوداد الفضة علامة على الطاقة السلبية؟", a: "اسوداد الفضة تفاعل كيميائي بحت (كبرتة). مركبات الكبريت في الهواء والعرق تسبب الاسوداد." },
    ]},
    sources: { heading: "المصادر", items: ["أغريبا — ثلاثة كتب في الفلسفة الخفية", "تيتوس بوركهارت — الخيمياء: علم الكون"] },
    related: { heading: "مواضيع ذات صلة", items: [
      { title: "رمزية الفضة", path: "/ar/culture/symbolism", cat: "الثقافة" },
    ]},
    sponsor: { text: "اكتشف مجوهرات الفضة المتوافقة مع برجك.", cta: "استكشف إسطنبول غوموش", note: "هذا المحتوى برعاية إسطنبول غوموش." },
    darkMode: "الوضع",
  },
};

function ZodiacGrid({ signs, dark, lang, compatLabel, elementLabel }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const accent = dark ? "#C0C0C0" : "#708090";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const bgCard = dark ? "#1a1a24" : "#ffffff";
  const elColors = { "Ateş":"#f44336","Fire":"#f44336","نار":"#f44336","Toprak":"#8B4513","Earth":"#8B4513","تراب":"#8B4513","Hava":"#2196F3","Air":"#2196F3","هواء":"#2196F3","Su":"#00BCD4","Water":"#00BCD4","ماء":"#00BCD4" };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12, marginTop: 8 }}>
      {signs.map((s,i) => (
        <div key={i} style={{ background: bgCard, borderRadius: 12, padding: 16, border: `1px solid ${border}`, transition: "transform 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.transform="translateY(-2px)"} onMouseLeave={e => e.currentTarget.style.transform="translateY(0)"}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <span style={{ fontSize: 32 }}>{s.icon}</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: 15, color: textP }}>{s.sign}</div>
              <div style={{ fontSize: 11, color: textS }}>{s.dates}</div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: accent, marginBottom: 6, fontFamily: "'JetBrains Mono', monospace" }}>{s.stone}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <span style={{ fontSize: 11, color: textS }}>{compatLabel}:</span>
            <div style={{ display: "flex", gap: 2 }}>{[1,2,3,4,5].map(n => (<span key={n} style={{ width: 14, height: 14, borderRadius: "50%", background: n <= s.compat ? "#D4AF37" : (dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"), transition: "background 0.3s" }} />))}</div>
          </div>
          <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, background: `${elColors[s.element]||accent}22`, color: elColors[s.element]||accent, fontWeight: 600 }}>{s.element}</span>
        </div>
      ))}
    </div>
  );
}

export default function AstrologyArticle() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);
  const t = T[lang]; const isRTL = lang === "ar";
  const bgP = dark ? "#0f0f14" : "#FAFAF5"; const textP = dark ? "#e8e8ec" : "#2C2C2C"; const textS = dark ? "#9a9aaa" : "#6B7280";
  const accent = dark ? "#C0C0C0" : "#708090"; const gold = "#D4AF37"; const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const fontD = "'Playfair Display', Georgia, serif"; const fontB = lang === "ar" ? "'Noto Naskh Arabic', serif" : "'Source Sans 3', sans-serif";

  return (
    <div dir={isRTL?"rtl":"ltr"} style={{ fontFamily: fontB, background: bgP, color: textP, minHeight: "100vh", transition: "background 0.4s, color 0.4s" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*{margin:0;padding:0;box-sizing:border-box}::selection{background:rgba(192,192,192,0.3)}`}</style>
      <nav style={{ position:"sticky",top:0,zIndex:100,background:dark?"rgba(15,15,20,0.88)":"rgba(250,250,245,0.88)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${border}`,padding:"0 24px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between" }}>
        <div style={{ display:"flex",alignItems:"center",gap:8 }}><div style={{ width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#0f0f14",fontFamily:fontD }}>Ag</div><span style={{ fontFamily:fontD,fontWeight:600,fontSize:16 }}>{t.nav}</span></div>
        <div style={{ display:"flex",alignItems:"center",gap:12 }}>
          <div style={{ display:"flex",gap:2,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)",borderRadius:7,padding:2 }}>{["tr","en","ar"].map(l=>(<button key={l} onClick={()=>setLang(l)} style={{ border:"none",cursor:"pointer",padding:"3px 9px",borderRadius:5,fontSize:11,fontWeight:lang===l?600:400,fontFamily:l==="ar"?"'Noto Naskh Arabic',serif":fontB,background:lang===l?(dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.08)"):"transparent",color:lang===l?textP:textS,transition:"all 0.2s" }}>{l==="ar"?"عر":l.toUpperCase()}</button>))}</div>
          <button onClick={()=>setDark(!dark)} style={{ border:"none",cursor:"pointer",background:"transparent",color:textS,fontSize:16,padding:4 }}>{dark?"☀️":"🌙"}</button>
        </div>
      </nav>
      <div style={{ maxWidth:760,margin:"0 auto",padding:"16px 24px 0",display:"flex",gap:8,fontSize:12,color:textS,flexWrap:"wrap" }}>{t.breadcrumb.map((b,i)=>(<span key={i} style={{ display:"flex",alignItems:"center",gap:8 }}>{i>0&&<span style={{ opacity:0.4 }}>/</span>}<span style={{ color:i===t.breadcrumb.length-1?accent:textS }}>{b}</span></span>))}</div>
      <article style={{ maxWidth:760,margin:"0 auto",padding:"32px 24px 64px",animation:"fadeUp 0.6s ease both" }}>
        <div style={{ marginBottom:36 }}>
          <div style={{ display:"inline-block",padding:"3px 12px",borderRadius:6,fontSize:11,fontWeight:600,letterSpacing:"0.04em",color:gold,border:`1px solid ${gold}33`,marginBottom:16 }}>{t.category}</div>
          <h1 style={{ fontFamily:fontD,fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.15,marginBottom:12 }}>{t.title}</h1>
          <p style={{ fontSize:16,color:textS,lineHeight:1.6,marginBottom:20 }}>{t.subtitle}</p>
          <div style={{ display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",fontSize:13,color:textS,paddingBottom:20,borderBottom:`1px solid ${border}` }}><span>{t.meta.author}</span><span style={{ opacity:0.3 }}>·</span><span>{t.meta.date}</span><span style={{ opacity:0.3 }}>·</span><span>{t.meta.readTime}</span></div>
        </div>
        {t.sections.map(sec=>(<section key={sec.id} style={{ marginBottom:40 }}>{sec.heading&&<h2 style={{ fontFamily:fontD,fontSize:22,fontWeight:600,marginBottom:16,color:accent }}>{sec.heading}</h2>}{sec.paragraphs.map((p,j)=>(<p key={j} style={{ fontSize:15.5,lineHeight:1.85,color:textP,marginBottom:14,opacity:0.92 }}>{p}</p>))}{sec.widget==="zodiacGrid"&&<ZodiacGrid signs={t.zodiac} dark={dark} lang={lang} compatLabel={t.compatLabel} elementLabel={t.elementLabel}/>}</section>))}
        <section style={{ marginTop:48,marginBottom:40 }}><h2 style={{ fontFamily:fontD,fontSize:22,fontWeight:600,marginBottom:20,color:accent }}>{t.faq.heading}</h2>{t.faq.items.map((item,i)=>(<div key={i} style={{ marginBottom:8,borderRadius:10,border:`1px solid ${border}`,overflow:"hidden" }}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{ width:"100%",textAlign:isRTL?"right":"left",padding:"14px 18px",background:openFaq===i?(dark?"rgba(192,192,192,0.05)":"rgba(192,192,192,0.08)"):"transparent",border:"none",cursor:"pointer",fontSize:14,fontWeight:500,color:textP,display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:fontB }}><span>{item.q}</span><span style={{ transform:openFaq===i?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s",fontSize:12,color:textS }}>▼</span></button>{openFaq===i&&<div style={{ padding:"0 18px 16px",fontSize:14,lineHeight:1.7,color:textS }}>{item.a}</div>}</div>))}</section>
        <section style={{ marginBottom:40 }}><h2 style={{ fontFamily:fontD,fontSize:18,fontWeight:600,marginBottom:12,color:accent }}>{t.sources.heading}</h2>{t.sources.items.map((s,i)=>(<div key={i} style={{ fontSize:13,color:textS,padding:"6px 0",borderBottom:`1px solid ${border}` }}>{i+1}. {s}</div>))}</section>
        <section style={{ marginBottom:40 }}><h2 style={{ fontFamily:fontD,fontSize:18,fontWeight:600,marginBottom:12,color:accent }}>{t.related.heading}</h2><div style={{ display:"flex",gap:12,flexWrap:"wrap" }}>{t.related.items.map((r,i)=>(<a key={i} href={r.path} style={{ padding:"10px 16px",borderRadius:8,border:`1px solid ${border}`,textDecoration:"none",color:textP,fontSize:13,fontWeight:500,background:dark?"rgba(192,192,192,0.03)":"rgba(192,192,192,0.06)" }}><span style={{ fontSize:10,color:gold,marginRight:6 }}>{r.cat}</span>{r.title}</a>))}</div></section>
        <div style={{ background:`linear-gradient(135deg,${dark?"rgba(212,175,55,0.06)":"rgba(212,175,55,0.08)"},transparent)`,borderRadius:14,padding:24,textAlign:"center",border:`1px solid ${gold}22` }}><p style={{ fontSize:14,color:textS,marginBottom:12 }}>{t.sponsor.text}</p><a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{ display:"inline-block",padding:"10px 28px",borderRadius:8,background:`linear-gradient(135deg,${gold},#c9a227)`,color:"#0f0f14",fontWeight:600,fontSize:14,textDecoration:"none" }}>{t.sponsor.cta}</a><p style={{ fontSize:11,color:textS,marginTop:10,opacity:0.6 }}>{t.sponsor.note}</p></div>
      </article>
      <footer style={{ borderTop:`1px solid ${border}`,padding:"24px",textAlign:"center",fontSize:12,color:textS }}>© 2026 SilverAtlas · {t.meta.author}</footer>
    </div>
  );
}
