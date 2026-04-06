import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Koleksiyon", "Antik Gümüş Koleksiyonculuğu"],
    category: "Koleksiyon",
    title: "Antik Gümüş Koleksiyonculuğu",
    subtitle: "Dönem tespiti, sahtecilik tanıma, değerleme yöntemleri ve koleksiyon stratejileri",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "15 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Antik gümüş koleksiyonculuğu, tarihi, sanatı ve yatırımı birleştiren büyüleyici bir alandır. Osmanlı gümüşünden Viktorya dönemi çay takımlarına, Art Deco tabakalardan Rönesans kadehlere kadar geniş bir yelpazeyi kapsar.",
        "Ancak bu alanda başarılı olmak bilgi gerektirir: dönem özelliklerini tanımak, sahteleri ayırt etmek, adil fiyat belirlemek ve parçaları doğru korumak. Bu rehber, hem başlangıç hem ileri düzey koleksiyoncular için kapsamlı bir kaynaktır.",
      ]},
      { id: "donemler", heading: "Dönem Tespiti ve Stil Özellikleri", paragraphs: [
        "Antik gümüşte dönem tespiti beş temel faktöre dayanır: form (şekil ve oran), bezeme stili, yapım tekniği, damga sistemi ve patina özellikleri.",
        "Barok dönem (1600-1720) ağır, organik formlar ve kabartma çalışmalarıyla tanınır. Rokoko (1720-1770) daha hafif, asimetrik ve doğa motifli tasarımlara yönelmiştir. Neoklasik (1770-1830) sade, geometrik ve antik Yunan-Roma esinli formlar sunar.",
        "Viktorya dönemi (1837-1901) eklektik ve aşırı süslemeli; Art Nouveau (1890-1910) organik eğriler ve doğal formlar; Art Deco (1920-1940) geometrik, minimalist ve endüstriyel estetiğiyle öne çıkar.",
      ], widget: "eraGrid" },
      { id: "sahtecilik", heading: "Sahtecilik Tanıma", paragraphs: [
        "Gümüş antika piyasasında sahtecilik yaygın bir sorundur. Dikkat edilmesi gereken ipuçları: damganın düzensiz derinliği, dönemle uyumsuz stil elementleri, makine izleri (antik parçalarda el işçiliği beklenir), aşırı homojen patina ve alışılmadık ağırlık.",
        "En güvenilir doğrulama yöntemleri: XRF analizi (metal bileşimini kesin olarak belirler), mikroskobik inceleme (alet izleri ve yapım tekniği), termal iletkenlik testi ve arşiv/provenance araştırması.",
        "Şüphelendiğinizde bağımsız bir ekspertize başvurun. İyi bir uzman, parçanın dönemini, orijinalliğini ve varsa restorasyon izlerini tespit edebilir.",
      ]},
      { id: "degerleme", heading: "Değerleme Kriterleri", paragraphs: [
        "Antik gümüşün değerini belirleyen faktörler: nadirlik, tarihsel önem, yapım kalitesi, koruma durumu, provenance (sahiplik geçmişi), gümüş ağırlığı ve mevcut piyasa talebi.",
        "Provenance kritik öneme sahiptir — bilinen bir koleksiyondan veya tarihi bir şahsiyetten gelen parçalar, benzer parçalara kıyasla katbekat değerli olabilir. Açık artırma kayıtları, sergi katalogları ve aile belgeleri provenance kanıtı olarak kabul edilir.",
        "Restorasyon durumu da değeri etkiler: orijinal durumundaki parçalar, restore edilmişlere göre genellikle daha kıymetlidir. Ancak kaliteli ve döneme uygun restorasyon, değeri düşürmekten çok korur.",
      ]},
      { id: "koruma", heading: "Koruma ve Saklama", paragraphs: [
        "Antik gümüş parçaları sert kimyasallarla temizlemeyin — ultra-sonic temizleyici, amonyak ve ticari gümüş cilası aşındırıcı olabilir. Bunun yerine yumuşak pamuklu bez ile hafifçe silin.",
        "Saklama koşulları: düşük nem (%40-50), sabit sıcaklık, kükürt içermeyen ambalaj (asitsiz kâğıt veya anti-tarnish bez), kauçuk bant kullanmayın (kükürt içerir). Her parçayı ayrı ayrı sarın.",
        "Sergileme: doğrudan güneş ışığından koruyun, klimalı veya nemli ortamlardan uzak tutun, düzenli aralıklarla hafif bakım yapın.",
      ]},
      { id: "alisveris", heading: "Nereden ve Nasıl Alınır?", paragraphs: [
        "Güvenilir kaynaklar: tanınmış açık artırma evleri (Christie's, Sotheby's, Bonhams), uzman antikacılar, saygın fuar ve sergiler, ve doğrulanmış online platformlar.",
        "Satın almadan önce: fiziksel inceleme yapın, damgaları kontrol edin, fatura/sertifika isteyin, benzer parçaların piyasa fiyatlarını araştırın ve acele karar vermeyin. Özellikle online alışverişte iade politikasını mutlaka kontrol edin.",
      ]},
    ],
    eras: [
      { name: "Barok", period: "1600-1720", traits: "Ağır formlar, kabartma, dramatik", icon: "🏛️", color: "#8B4513" },
      { name: "Rokoko", period: "1720-1770", traits: "Hafif, asimetrik, doğa motifleri", icon: "🌸", color: "#DDA0DD" },
      { name: "Neoklasik", period: "1770-1830", traits: "Geometrik, sade, antik esinli", icon: "⚱️", color: "#708090" },
      { name: "Viktorya", period: "1837-1901", traits: "Eklektik, aşırı süslemeli, çeşitli", icon: "👑", color: "#800020" },
      { name: "Art Nouveau", period: "1890-1910", traits: "Organik eğriler, doğal formlar", icon: "🌿", color: "#228B22" },
      { name: "Art Deco", period: "1920-1940", traits: "Geometrik, minimalist, endüstriyel", icon: "💎", color: "#C0C0C0" },
      { name: "Osmanlı", period: "14.-20. yy", traits: "Telkâri, savat, arabesk motifler", icon: "☪️", color: "#D4AF37" },
      { name: "Moğol", period: "16.-19. yy", traits: "Mine, kakma, çiçek desenleri", icon: "🪷", color: "#FF6347" },
    ],
    faq: { heading: "Sıkça Sorulan Sorular", items: [
      { q: "Antik gümüş iyi bir yatırım mı?", a: "Nadir ve kaliteli parçalar uzun vadede değer kazanabilir. Ancak bu bir uzmanlık gerektiren piyasadır — bilgisiz yatırım risklidir. Gümüş eritmek değerine göre antik gümüş yatırımı çok daha yüksek getiri potansiyeline sahiptir." },
      { q: "100 yıldan eski olması 'antik' yapar mı?", a: "Geleneksel tanımda 100 yıl eşik kabul edilir. Ancak 'vintage' (20-100 yıl) parçalar da koleksiyon değeri taşıyabilir. Önemli olan parçanın sanatsal değeri ve nadirliğidir." },
      { q: "Patinayı temizlemeli miyim?", a: "Hayır! Doğal patina antik gümüşün en değerli özelliklerinden biridir. Patina temizlemek parçanın değerini ciddi ölçüde düşürebilir. Yalnızca hafif toz temizliği yapın." },
      { q: "Restorasyonlu parça almalı mıyım?", a: "Restorasyon kalitesine bağlı. Döneme uygun, profesyonel restorasyon kabul edilebilir. Kaba veya modern malzemeyle yapılmış restorasyon ise değer düşürür." },
    ]},
    sources: { heading: "Kaynaklar", items: ["Eric Delieb — Silver Boxes", "Seymour B. Wyler — The Book of Old Silver", "Türk Antikacılar Derneği Yayınları", "Christie's Auction Archive — Silver & Objects of Vertu"] },
    related: { heading: "İlgili Konular", items: [
      { title: "Ayar Damgası Rehberi", path: "/tr/uretim/ayar-damgasi", cat: "Üretim" },
      { title: "Gümüşün Tarihi", path: "/tr/tarih/tarih", cat: "Tarih" },
      { title: "Koleksiyon Rehberi", path: "/tr/rehber/koleksiyon", cat: "Rehber" },
    ]},
    sponsor: { text: "Koleksiyonunuza değer katacak 925 ayar gümüş parçaları keşfedin.", cta: "İstanbul Gümüş'ü Keşfet", note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir." },
    darkMode: "Mod",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Collection", "Antique Silver Collecting"],
    category: "Collection",
    title: "Antique Silver Collecting Guide",
    subtitle: "Period identification, forgery detection, valuation methods and collection strategies",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "15 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Antique silver collecting is a fascinating field that combines history, art, and investment. It spans a wide range from Ottoman silver to Victorian tea sets, Art Deco cigarette cases to Renaissance chalices.",
        "Success in this field requires knowledge: recognizing period characteristics, distinguishing forgeries, determining fair prices, and properly preserving pieces. This guide is a comprehensive resource for both beginners and advanced collectors.",
      ]},
      { id: "periods", heading: "Period Identification and Style Features", paragraphs: [
        "Period identification in antique silver relies on five key factors: form (shape and proportion), decorative style, manufacturing technique, hallmark system, and patina characteristics.",
        "The Baroque period (1600-1720) is known for heavy, organic forms and repoussé work. Rococo (1720-1770) shifted to lighter, asymmetric, nature-motif designs. Neoclassical (1770-1830) offers simple, geometric, Greco-Roman inspired forms.",
        "The Victorian era (1837-1901) is eclectic and heavily ornamented; Art Nouveau (1890-1910) features organic curves and natural forms; Art Deco (1920-1940) stands out with its geometric, minimalist, industrial aesthetic.",
      ], widget: "eraGrid" },
      { id: "forgery", heading: "Detecting Forgeries", paragraphs: [
        "Forgery is prevalent in the antique silver market. Warning signs include: irregular hallmark depth, style elements inconsistent with the period, machine marks (handwork is expected in antique pieces), overly uniform patina, and unusual weight.",
        "The most reliable verification methods: XRF analysis (precisely determines metal composition), microscopic examination (tool marks and technique), thermal conductivity testing, and provenance research.",
        "When in doubt, consult an independent expert who can identify the period, authenticity, and any restoration marks.",
      ]},
      { id: "valuation", heading: "Valuation Criteria", paragraphs: [
        "Factors determining antique silver value: rarity, historical significance, craftsmanship quality, condition, provenance (ownership history), silver weight, and current market demand.",
        "Provenance is critical — pieces from known collections or historical figures can be worth multiples of similar items. Auction records, exhibition catalogs, and family documents serve as provenance evidence.",
        "Restoration status also affects value: original-condition pieces are generally more valuable than restored ones. However, quality period-appropriate restoration preserves rather than diminishes value.",
      ]},
      { id: "preservation", heading: "Preservation and Storage", paragraphs: [
        "Don't clean antique silver with harsh chemicals — ultrasonic cleaners, ammonia, and commercial silver polish can be abrasive. Instead, gently wipe with a soft cotton cloth.",
        "Storage conditions: low humidity (40-50%), stable temperature, sulfur-free packaging (acid-free paper or anti-tarnish cloth), avoid rubber bands (they contain sulfur). Wrap each piece separately.",
        "Display: protect from direct sunlight, keep away from air-conditioned or humid environments, perform light maintenance at regular intervals.",
      ]},
      { id: "buying", heading: "Where and How to Buy", paragraphs: [
        "Reliable sources: established auction houses (Christie's, Sotheby's, Bonhams), specialist dealers, reputable fairs and exhibitions, and verified online platforms.",
        "Before purchasing: physically examine the piece, check hallmarks, request invoices/certificates, research market prices for comparable pieces, and don't rush. For online purchases, always check the return policy.",
      ]},
    ],
    eras: [
      { name: "Baroque", period: "1600-1720", traits: "Heavy forms, repoussé, dramatic", icon: "🏛️", color: "#8B4513" },
      { name: "Rococo", period: "1720-1770", traits: "Light, asymmetric, nature motifs", icon: "🌸", color: "#DDA0DD" },
      { name: "Neoclassical", period: "1770-1830", traits: "Geometric, simple, antiquity-inspired", icon: "⚱️", color: "#708090" },
      { name: "Victorian", period: "1837-1901", traits: "Eclectic, heavily ornamented", icon: "👑", color: "#800020" },
      { name: "Art Nouveau", period: "1890-1910", traits: "Organic curves, natural forms", icon: "🌿", color: "#228B22" },
      { name: "Art Deco", period: "1920-1940", traits: "Geometric, minimalist, industrial", icon: "💎", color: "#C0C0C0" },
      { name: "Ottoman", period: "14th-20th c.", traits: "Filigree, niello, arabesque", icon: "☪️", color: "#D4AF37" },
      { name: "Mughal", period: "16th-19th c.", traits: "Enamel, inlay, floral patterns", icon: "🪷", color: "#FF6347" },
    ],
    faq: { heading: "Frequently Asked Questions", items: [
      { q: "Is antique silver a good investment?", a: "Rare, quality pieces can appreciate over time. However, this is a specialized market — uninformed investing is risky. Compared to melt value, antique silver has much higher return potential." },
      { q: "Does being over 100 years old make it 'antique'?", a: "Traditionally, 100 years is the threshold. However, 'vintage' pieces (20-100 years) can also have collectible value. What matters is artistic merit and rarity." },
      { q: "Should I clean the patina?", a: "No! Natural patina is one of antique silver's most valuable features. Removing patina can significantly reduce a piece's value. Only do light dust cleaning." },
      { q: "Should I buy restored pieces?", a: "Depends on restoration quality. Period-appropriate, professional restoration is acceptable. Crude or modern-material restoration diminishes value." },
    ]},
    sources: { heading: "Sources", items: ["Eric Delieb — Silver Boxes", "Seymour B. Wyler — The Book of Old Silver", "Turkish Antique Dealers Association Publications", "Christie's Auction Archive — Silver & Objects of Vertu"] },
    related: { heading: "Related Topics", items: [
      { title: "Hallmark Guide", path: "/en/manufacturing/hallmark", cat: "Manufacturing" },
      { title: "History of Silver", path: "/en/history/history", cat: "History" },
      { title: "Collection Guide", path: "/en/guide/collection", cat: "Guide" },
    ]},
    sponsor: { text: "Discover 925 sterling silver pieces to enhance your collection.", cta: "Explore İstanbul Gümüş", note: "This content is sponsored by İstanbul Gümüş." },
    darkMode: "Mode",
  },
  ar: {
    nav: "سيلفر أطلس", navSub: "منصة معرفة الفضة",
    breadcrumb: ["الرئيسية", "المجموعات", "جمع الفضة العتيقة"],
    category: "المجموعات",
    title: "دليل جمع الفضة العتيقة",
    subtitle: "تحديد الحقبة، كشف التزوير، طرق التقييم واستراتيجيات الجمع",
    meta: { author: "توران إرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٥ دقيقة قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "جمع الفضة العتيقة مجال رائع يجمع بين التاريخ والفن والاستثمار. يمتد من الفضة العثمانية إلى أطقم الشاي الفيكتورية، ومن علب السجائر آرت ديكو إلى كؤوس عصر النهضة.",
        "يتطلب النجاح في هذا المجال المعرفة: التعرف على خصائص الحقبة، التمييز بين الأصلي والمزور، تحديد الأسعار العادلة، والحفاظ على القطع بشكل صحيح.",
      ]},
      { id: "periods", heading: "تحديد الحقبة وخصائص الأسلوب", paragraphs: [
        "يعتمد تحديد الحقبة في الفضة العتيقة على خمسة عوامل: الشكل، أسلوب الزخرفة، تقنية الصنع، نظام الدمغة، وخصائص الزنجار.",
        "تُعرف حقبة الباروك (١٦٠٠-١٧٢٠) بأشكالها الثقيلة والعضوية. الروكوكو (١٧٢٠-١٧٧٠) أخف وغير متماثل. النيوكلاسيكي (١٧٧٠-١٨٣٠) بسيط وهندسي.",
        "العصر الفيكتوري (١٨٣٧-١٩٠١) انتقائي ومزخرف بكثافة؛ آرت نوفو (١٨٩٠-١٩١٠) منحنيات عضوية؛ آرت ديكو (١٩٢٠-١٩٤٠) هندسي وبسيط.",
      ], widget: "eraGrid" },
      { id: "forgery", heading: "كشف التزوير", paragraphs: [
        "التزوير مشكلة شائعة. علامات التحذير: عمق غير منتظم للدمغة، عناصر أسلوبية غير متوافقة مع الحقبة، آثار آلات، زنجار متجانس بشكل مفرط.",
        "أساليب التحقق الأكثر موثوقية: تحليل XRF، الفحص المجهري، اختبار التوصيل الحراري، وبحث المصدر.",
      ]},
      { id: "valuation", heading: "معايير التقييم", paragraphs: [
        "العوامل المحددة لقيمة الفضة العتيقة: الندرة، الأهمية التاريخية، جودة الصنعة، الحالة، المصدر، وزن الفضة، والطلب الحالي.",
        "المصدر بالغ الأهمية — القطع من مجموعات معروفة أو شخصيات تاريخية قد تساوي أضعاف القطع المماثلة.",
      ]},
      { id: "preservation", heading: "الحفظ والتخزين", paragraphs: [
        "لا تنظف الفضة العتيقة بمواد كيميائية قاسية. استخدم قطعة قطن ناعمة. خزّن في رطوبة منخفضة (٤٠-٥٠٪) بورق خالٍ من الحمض.",
      ]},
      { id: "buying", heading: "أين وكيف تشتري؟", paragraphs: [
        "مصادر موثوقة: دور المزادات المعروفة، التجار المتخصصون، المعارض ذات السمعة الجيدة، والمنصات الإلكترونية الموثقة.",
      ]},
    ],
    eras: [
      { name: "باروك", period: "١٦٠٠-١٧٢٠", traits: "أشكال ثقيلة، نقش بارز", icon: "🏛️", color: "#8B4513" },
      { name: "روكوكو", period: "١٧٢٠-١٧٧٠", traits: "خفيف، غير متماثل", icon: "🌸", color: "#DDA0DD" },
      { name: "نيوكلاسيكي", period: "١٧٧٠-١٨٣٠", traits: "هندسي، بسيط", icon: "⚱️", color: "#708090" },
      { name: "فيكتوري", period: "١٨٣٧-١٩٠١", traits: "انتقائي، مزخرف بكثافة", icon: "👑", color: "#800020" },
      { name: "آرت نوفو", period: "١٨٩٠-١٩١٠", traits: "منحنيات عضوية", icon: "🌿", color: "#228B22" },
      { name: "آرت ديكو", period: "١٩٢٠-١٩٤٠", traits: "هندسي، بسيط", icon: "💎", color: "#C0C0C0" },
      { name: "عثماني", period: "ق١٤-٢٠", traits: "تلكاري، سواد، أرابيسك", icon: "☪️", color: "#D4AF37" },
      { name: "مغولي", period: "ق١٦-١٩", traits: "مينا، ترصيع، زهور", icon: "🪷", color: "#FF6347" },
    ],
    faq: { heading: "الأسئلة الشائعة", items: [
      { q: "هل الفضة العتيقة استثمار جيد؟", a: "القطع النادرة والجيدة قد ترتفع قيمتها. لكنه سوق متخصص يتطلب خبرة." },
      { q: "هل يجب تنظيف الزنجار؟", a: "لا! الزنجار الطبيعي من أثمن خصائص الفضة العتيقة. إزالته قد تخفض القيمة بشكل كبير." },
      { q: "هل أشتري قطعاً مرممة؟", a: "يعتمد على جودة الترميم. الترميم المهني المناسب للحقبة مقبول." },
    ]},
    sources: { heading: "المصادر", items: ["Eric Delieb — Silver Boxes", "Seymour B. Wyler — The Book of Old Silver", "أرشيف مزادات كريستيز"] },
    related: { heading: "مواضيع ذات صلة", items: [
      { title: "دليل الدمغة", path: "/ar/manufacturing/hallmark", cat: "التصنيع" },
      { title: "تاريخ الفضة", path: "/ar/history/history", cat: "التاريخ" },
    ]},
    sponsor: { text: "اكتشف قطع الفضة عيار ٩٢٥ لتعزيز مجموعتك.", cta: "استكشف إسطنبول غوموش", note: "هذا المحتوى برعاية إسطنبول غوموش." },
    darkMode: "الوضع",
  },
};

function EraGrid({ eras, dark }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const bgCard = dark ? "#1a1a24" : "#ffffff";
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14, marginTop: 8 }}>
      {eras.map((e, i) => (
        <div key={i} style={{ background: bgCard, borderRadius: 12, padding: 18, border: `1px solid ${border}`, borderTop: `3px solid ${e.color}`, transition: "transform 0.2s" }}
          onMouseEnter={ev => ev.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={ev => ev.currentTarget.style.transform = "translateY(0)"}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <span style={{ fontSize: 28 }}>{e.icon}</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: 15, color: textP }}>{e.name}</div>
              <div style={{ fontSize: 11, color: e.color, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>{e.period}</div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: textS, lineHeight: 1.5 }}>{e.traits}</div>
        </div>
      ))}
    </div>
  );
}

export default function AntiqueCollectingArticle() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);
  const t = T[lang];
  const isRTL = lang === "ar";
  const bgP = dark ? "#0f0f14" : "#FAFAF5";
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const accent = dark ? "#C0C0C0" : "#708090";
  const gold = "#D4AF37";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const fontD = "'Playfair Display', Georgia, serif";
  const fontB = lang === "ar" ? "'Noto Naskh Arabic', serif" : "'Source Sans 3', sans-serif";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{ fontFamily: fontB, background: bgP, color: textP, minHeight: "100vh", transition: "background 0.4s, color 0.4s" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*{margin:0;padding:0;box-sizing:border-box}::selection{background:rgba(192,192,192,0.3)}`}</style>
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: dark ? "rgba(15,15,20,0.88)" : "rgba(250,250,245,0.88)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${border}`, padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg, ${accent}, ${gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#0f0f14", fontFamily: fontD }}>Ag</div>
          <span style={{ fontFamily: fontD, fontWeight: 600, fontSize: 16 }}>{t.nav}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", gap: 2, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", borderRadius: 7, padding: 2 }}>
            {["tr","en","ar"].map(l => (<button key={l} onClick={() => setLang(l)} style={{ border: "none", cursor: "pointer", padding: "3px 9px", borderRadius: 5, fontSize: 11, fontWeight: lang===l?600:400, fontFamily: l==="ar"?"'Noto Naskh Arabic',serif":fontB, background: lang===l?(dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.08)"):"transparent", color: lang===l?textP:textS, transition: "all 0.2s" }}>{l==="ar"?"عر":l.toUpperCase()}</button>))}
          </div>
          <button onClick={() => setDark(!dark)} style={{ border: "none", cursor: "pointer", background: "transparent", color: textS, fontSize: 16, padding: 4 }}>{dark?"☀️":"🌙"}</button>
        </div>
      </nav>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "16px 24px 0", display: "flex", gap: 8, fontSize: 12, color: textS, flexWrap: "wrap" }}>
        {t.breadcrumb.map((b,i) => (<span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>{i>0&&<span style={{ opacity: 0.4 }}>/</span>}<span style={{ color: i===t.breadcrumb.length-1?accent:textS }}>{b}</span></span>))}
      </div>
      <article style={{ maxWidth: 760, margin: "0 auto", padding: "32px 24px 64px", animation: "fadeUp 0.6s ease both" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: 6, fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: gold, border: `1px solid ${gold}33`, marginBottom: 16 }}>{t.category}</div>
          <h1 style={{ fontFamily: fontD, fontSize: "clamp(28px,5vw,42px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 12 }}>{t.title}</h1>
          <p style={{ fontSize: 16, color: textS, lineHeight: 1.6, marginBottom: 20 }}>{t.subtitle}</p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", fontSize: 13, color: textS, paddingBottom: 20, borderBottom: `1px solid ${border}` }}>
            <span>{t.meta.author}</span><span style={{ opacity: 0.3 }}>·</span><span>{t.meta.date}</span><span style={{ opacity: 0.3 }}>·</span><span>{t.meta.readTime}</span>
          </div>
        </div>
        {t.sections.map((sec) => (
          <section key={sec.id} style={{ marginBottom: 40 }}>
            {sec.heading && <h2 style={{ fontFamily: fontD, fontSize: 22, fontWeight: 600, marginBottom: 16, color: accent }}>{sec.heading}</h2>}
            {sec.paragraphs.map((p,j) => (<p key={j} style={{ fontSize: 15.5, lineHeight: 1.85, color: textP, marginBottom: 14, opacity: 0.92 }}>{p}</p>))}
            {sec.widget === "eraGrid" && <EraGrid eras={t.eras} dark={dark} />}
          </section>
        ))}
        <section style={{ marginTop: 48, marginBottom: 40 }}>
          <h2 style={{ fontFamily: fontD, fontSize: 22, fontWeight: 600, marginBottom: 20, color: accent }}>{t.faq.heading}</h2>
          {t.faq.items.map((item,i) => (
            <div key={i} style={{ marginBottom: 8, borderRadius: 10, border: `1px solid ${border}`, overflow: "hidden" }}>
              <button onClick={() => setOpenFaq(openFaq===i?null:i)} style={{ width: "100%", textAlign: isRTL?"right":"left", padding: "14px 18px", background: openFaq===i?(dark?"rgba(192,192,192,0.05)":"rgba(192,192,192,0.08)"):"transparent", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: textP, display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: fontB }}>
                <span>{item.q}</span><span style={{ transform: openFaq===i?"rotate(180deg)":"rotate(0deg)", transition: "transform 0.3s", fontSize: 12, color: textS }}>▼</span>
              </button>
              {openFaq===i && <div style={{ padding: "0 18px 16px", fontSize: 14, lineHeight: 1.7, color: textS }}>{item.a}</div>}
            </div>
          ))}
        </section>
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: fontD, fontSize: 18, fontWeight: 600, marginBottom: 12, color: accent }}>{t.sources.heading}</h2>
          {t.sources.items.map((s,i) => (<div key={i} style={{ fontSize: 13, color: textS, padding: "6px 0", borderBottom: `1px solid ${border}` }}>{i+1}. {s}</div>))}
        </section>
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: fontD, fontSize: 18, fontWeight: 600, marginBottom: 12, color: accent }}>{t.related.heading}</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {t.related.items.map((r,i) => (<a key={i} href={r.path} style={{ padding: "10px 16px", borderRadius: 8, border: `1px solid ${border}`, textDecoration: "none", color: textP, fontSize: 13, fontWeight: 500, background: dark?"rgba(192,192,192,0.03)":"rgba(192,192,192,0.06)" }}><span style={{ fontSize: 10, color: gold, marginRight: 6 }}>{r.cat}</span>{r.title}</a>))}
          </div>
        </section>
        <div style={{ background: `linear-gradient(135deg, ${dark?"rgba(212,175,55,0.06)":"rgba(212,175,55,0.08)"}, transparent)`, borderRadius: 14, padding: 24, textAlign: "center", border: `1px solid ${gold}22` }}>
          <p style={{ fontSize: 14, color: textS, marginBottom: 12 }}>{t.sponsor.text}</p>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "10px 28px", borderRadius: 8, background: `linear-gradient(135deg, ${gold}, #c9a227)`, color: "#0f0f14", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>{t.sponsor.cta}</a>
          <p style={{ fontSize: 11, color: textS, marginTop: 10, opacity: 0.6 }}>{t.sponsor.note}</p>
        </div>
      </article>
      <footer style={{ borderTop: `1px solid ${border}`, padding: "24px", textAlign: "center", fontSize: 12, color: textS }}>© 2026 SilverAtlas · {t.meta.author}</footer>
    </div>
  );
}
