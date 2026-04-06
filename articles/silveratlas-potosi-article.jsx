import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Tarih", "Potosí ve Yeni Dünya Gümüşü"],
    category: "Tarih",
    title: "Potosí ve Yeni Dünya Gümüşü",
    subtitle: "Dünyayı değiştiren dağ — 16. yüzyıldan 19. yüzyıla Güney Amerika gümüşünün küresel etkisi",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "14 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "1545 yılında bugünkü Bolivya'da, deniz seviyesinden 4.090 metre yükseklikteki Cerro Rico (Zengin Dağ), tarihin en büyük gümüş yatağı olarak keşfedildi. Potosí'den çıkan gümüş, sadece İspanya İmparatorluğu'nu değil, tüm dünya ekonomisini dönüştürdü.",
          "Tahminlere göre 1545-1825 arasında Potosí'den yaklaşık 45.000 ton gümüş çıkarılmıştır — bu, o dönemde dünyadaki toplam gümüş üretiminin yarısından fazlasını oluşturur. Bu devasa maden, küresel ticaretin ilk gerçek parasını yaratırken, milyonlarca yerli işçinin hayatına da mal olmuştur.",
        ],
      },
      {
        id: "kesif", heading: "Keşif ve İlk Yıllar (1545-1570)",
        paragraphs: [
          "Efsaneye göre Cerro Rico'yu ilk bulan kişi, Diego Huallpa adlı bir Kechua çobanıdır. Soğuk bir gecede ateş yakmış, sabah alevlerin eriyen gümüşü ortaya çıkardığını görmüştür. Gerçek ne olursa olsun, İspanyol konkistadorlar hızla bölgeye akın etmiştir.",
          "İlk yıllarda yüzeye yakın zengin cevherler el işçiliğiyle çıkarılmıştır (guayra — rüzgâr fırını yöntemi). Bu dönemde cevherlerin gümüş içeriği son derece yüksekti — bazı damarlar %40'ın üzerinde saf gümüş barındırıyordu.",
          "1572'de Peru Valisi Francisco de Toledo, mita sistemini uygulamaya koydu. Bu zorunlu çalışma düzeni, İnka İmparatorluğu'nun dönüşümlü kamu hizmeti geleneğini bir kölelik mekanizmasına dönüştürdü.",
        ],
      },
      {
        id: "amalgam", heading: "Amalgam Devrimi ve Üretim Patlaması (1570-1650)",
        paragraphs: [
          "1554'te Bartolomé de Medina tarafından geliştirilen patio süreci (cıva amalgamı yöntemi), gümüş madenciliğini kökten değiştirdi. Cevher, cıva ile karıştırılarak gümüşün ayrıştırılması mümkün hale geldi — bu yöntem, düşük ayarlı cevherlerin de işlenmesini sağladı.",
          "Potosí'de amalgam sürecinin uygulanması için 22 yapay göl ve bir su kanalı sistemi inşa edildi. Bu mühendislik harikası, değirmenlere güç sağlıyordu. 1580'lerde Potosí, 160.000 nüfusuyla Londra ve Paris ile yarışan bir metropol haline geldi.",
          "Ancak cıva, hem işçiler hem de çevre için son derece zehirli bir madde olup, on binlerce madenci cıva zehirlenmesinden (azogue hastalığı) hayatını kaybetmiştir. Çevresel etkileri bugün hâlâ bölge topraklarında ölçülebilir düzeydedir.",
        ],
      },
      {
        id: "kuresel", heading: "Küresel Etki: Gümüş Yolu",
        paragraphs: [
          "Potosí gümüşü iki ana rotayı takip ediyordu: Atlantik üzerinden İspanya'ya (Seville'e) ve Manila Galeonu ile Pasifik üzerinden Çin'e. Bu ikili akış, tarihteki ilk gerçek küresel ekonomiyi yarattı.",
        ],
        widget: "flowDiagram",
      },
      {
        id: "osmanli", heading: "Yeni Dünya Gümüşü ve Osmanlı İmparatorluğu",
        paragraphs: [
          "Potosí gümüşünün küresel akışı, Osmanlı İmparatorluğu'nu da derinden etkilemiştir. 16. yüzyılın ikinci yarısından itibaren Avrupa'ya akan ucuz gümüş, Osmanlı akçesinin değer kaybetmesine yol açtı — Fiyat Devrimi'nin Osmanlı ayağı.",
          "İspanyol real'i (piece of eight / peso) fiilen küresel ticaret parası haline geldi. Osmanlı liman şehirlerinde, İslam hukukunun izin verdiği ölçüde İspanyol gümüş sikkeleri kabul görmüştür.",
          "Gümüş bollaşması akçenin tağşişini (debasement) hızlandırdı. 1585'te bir altın 60 akçe iken, 1640'ta 120 akçeye çıkmıştır. Bu enflasyonist baskı, Celali İsyanları'nın ekonomik arka planlarından birini oluşturmuştur.",
        ],
      },
      {
        id: "insani", heading: "İnsani Bedel: Mita ve Zorla Çalıştırma",
        paragraphs: [
          "Potosí'nin zenginliği, muazzam bir insani bedel üzerine inşa edilmiştir. Mita sistemi, yılda 13.500 yerli erkek işçiyi dönüşümlü olarak madende çalıştırıyordu. İşçiler, yeraltında günde 12-16 saat, mumla aydınlatılan dar tünellerde çalışırdı.",
          "Tünel çökmeleri, cıva zehirlenmesi, silis akciğer hastalığı (silikozis) ve aşırı yorgunluk başlıca ölüm nedenleriydi. Tahminlere göre 300 yıllık sömürge döneminde 2-8 milyon işçi madende hayatını kaybetmiştir — kesin rakam tarihçiler arasında tartışmalıdır.",
          "Afrikalı köleler de Potosí'ye getirilerek en tehlikeli görevlere verilmiştir. Eduardo Galeano'nun sözleriyle: 'Potosí'nin damarlarında akan gümüş, aynı zamanda milyonlarca insanın kanıydı.'",
        ],
      },
      {
        id: "diger", heading: "Diğer Yeni Dünya Madenleri",
        paragraphs: [
          "Potosí tek değildi. Meksika'daki Zacatecas (1546), Guanajuato (1548) ve Real del Monte madenleri de devasa miktarda gümüş üretmiştir. 17. yüzyılın ikinci yarısından itibaren Meksika, üretimde Potosí'yi geçmiştir.",
          "Peru'da Huancavelica cıva madeni, Potosí'nin 'ikizi' olarak stratejik öneme sahipti — amalgam süreci cıva olmadan çalışamaz. Huancavelica-Potosí ekseni, İspanyol sömürge ekonomisinin omurgasıydı.",
          "Toplam olarak, 1500-1800 arasında Yeni Dünya'dan Avrupa'ya yaklaşık 150.000 ton gümüş akmıştır. Bu akış, Avrupa'da Fiyat Devrimi'ni (Price Revolution) tetiklemiş, feodal yapıları çözmüş, kapitalist ekonominin temellerini atmıştır.",
        ],
      },
      {
        id: "miras", heading: "Bugünkü Miras",
        paragraphs: [
          "Potosí, 1987'de UNESCO Dünya Mirası Listesi'ne alınmıştır. Cerro Rico hâlâ madencilik faaliyetlerine sahne olmakta, ancak dağın içi o kadar oyulmuştur ki çökme riski taşımaktadır. Bolivya hükümeti koruma planları geliştirmektedir.",
          "Bugün Potosí şehri Bolivya'nın en yoksul bölgelerinden biridir — bir zamanlar dünyanın en zengin şehri olan bu yer, sömürgeciliğin kaynak lanetinin (resource curse) en çarpıcı örneğidir.",
          "'Vale un Potosí' (Bir Potosí değerinde) ifadesi, İspanyolca'da hâlâ 'paha biçilemez' anlamında kullanılmaktadır — dağın bir zamanki efsanevi zenginliğinin dilsel mirası.",
        ],
      },
    ],
    flowData: {
      title: "Potosí Gümüşünün Küresel Akışı",
      routes: [
        { from: "Potosí", to: "Lima", desc: "Katır kervanları ile And Dağları'nı aşarak" },
        { from: "Lima", to: "Portobelo", desc: "Güney Amerika kıyısı boyunca gemiyle" },
        { from: "Portobelo", to: "Sevilla", desc: "Atlantik filosu — 'Flota' sistemi" },
        { from: "Sevilla", to: "Avrupa", desc: "İspanyol borçlarını ödemek için dağılım" },
        { from: "Acapulco", to: "Manila", desc: "Manila Galeonu — Pasifik rotası" },
        { from: "Manila", to: "Çin", desc: "İpek, porselen, baharat karşılığı" },
      ],
    },
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Potosí'den ne kadar gümüş çıkarıldı?", a: "1545-1825 arasında yaklaşık 45.000 ton gümüş çıkarıldığı tahmin edilmektedir. Bu, o dönemin dünya gümüş üretiminin yarısından fazlasına denk gelir." },
        { q: "Fiyat Devrimi nedir?", a: "16. ve 17. yüzyıllarda Yeni Dünya gümüşünün Avrupa'ya akması sonucu fiyatların dramatik şekilde yükselmesidir. İspanya'da 300 yılda fiyatlar 6 kat artmıştır." },
        { q: "Potosí bugün ne durumda?", a: "UNESCO Dünya Mirası listesinde. Küçük çaplı madencilik devam ediyor ama Cerro Rico çökme tehlikesiyle karşı karşıya. Şehir Bolivya'nın en yoksul bölgelerinden." },
        { q: "Osmanlı'yı nasıl etkiledi?", a: "Ucuz gümüş akışı Osmanlı akçesinin değer kaybetmesine, enflasyona ve sikke tağşişine yol açtı. Bu ekonomik baskı, sosyal huzursuzlukları tetiklemiştir." },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "Kris Lane — \"Potosí: The Silver City That Changed the World\" (2019)",
        "Eduardo Galeano — \"Latin Amerika'nın Kesik Damarları\"",
        "Dennis O. Flynn & Arturo Giráldez — \"Born with a Silver Spoon: The Origin of World Trade in 1571\"",
        "Şevket Pamuk — \"Osmanlı İmparatorluğu'nda Paranın Tarihi\"",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "Gümüşün Tarihi", path: "/tr/tarih/tarih", cat: "Tarih" },
        { title: "İslam Medeniyetinde Gümüş", path: "/tr/tarih/islam-gumus", cat: "Tarih" },
        { title: "Gümüş Fiyat Tarihi", path: "/tr/piyasa/fiyat-tarihi", cat: "Piyasa" },
      ],
    },
    sponsor: {
      text: "Gümüşün zengin tarihini modern tasarımlarla yaşatıyoruz.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    darkMode: "Mod",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "History", "Potosí & New World Silver"],
    category: "History",
    title: "Potosí & New World Silver",
    subtitle: "The mountain that changed the world — South American silver's global impact from the 16th to 19th century",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "14 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["In 1545, in present-day Bolivia at 4,090 meters above sea level, Cerro Rico (Rich Mountain) was discovered as history's largest silver deposit. The silver from Potosí transformed not just the Spanish Empire but the entire global economy.", "An estimated 45,000 tons of silver were extracted from Potosí between 1545 and 1825 — more than half of the world's total silver production in that era. This massive mine created the first real currency of global trade while costing millions of indigenous workers their lives."] },
      { id: "discovery", heading: "Discovery and Early Years (1545-1570)", paragraphs: ["Legend has it that Cerro Rico was first found by a Quechua shepherd named Diego Huallpa, who lit a fire on a cold night and discovered molten silver in the morning. Spanish conquistadors quickly flocked to the region.", "In the early years, rich near-surface ores were extracted by hand using the guayra (wind furnace) method. Some veins contained over 40% pure silver.", "In 1572, Viceroy Francisco de Toledo implemented the mita system, transforming the Inca tradition of rotational public service into a forced labor mechanism."] },
      { id: "amalgam", heading: "The Amalgamation Revolution (1570-1650)", paragraphs: ["The patio process (mercury amalgamation) developed by Bartolomé de Medina in 1554 fundamentally changed silver mining. Ore was mixed with mercury to separate silver, enabling processing of lower-grade ores.", "Twenty-two artificial lakes and a canal system were built at Potosí to power the mills. By the 1580s, Potosí had become a metropolis of 160,000 rivaling London and Paris.", "Mercury was extremely toxic, killing tens of thousands of miners from mercury poisoning (azogue sickness). Environmental impacts remain measurable in regional soils today."] },
      { id: "global", heading: "Global Impact: The Silver Road", paragraphs: ["Potosí silver followed two main routes: across the Atlantic to Spain (Seville) and via the Manila Galleon across the Pacific to China. This dual flow created history's first truly global economy."], widget: "flowDiagram" },
      { id: "ottoman", heading: "New World Silver and the Ottoman Empire", paragraphs: ["The global flow of Potosí silver deeply affected the Ottoman Empire. From the second half of the 16th century, cheap silver flowing into Europe caused the Ottoman akçe to lose value — the Ottoman dimension of the Price Revolution.", "The Spanish real (piece of eight) became the de facto global trade currency. Spanish silver coins were accepted in Ottoman port cities to the extent Islamic law permitted.", "Silver abundance accelerated currency debasement. While one gold coin equaled 60 akçe in 1585, it reached 120 akçe by 1640. This inflationary pressure was among the economic backgrounds of the Celali Rebellions."] },
      { id: "human", heading: "Human Cost: Mita and Forced Labor", paragraphs: ["Potosí's wealth was built on an enormous human cost. The mita system rotated 13,500 indigenous male workers annually in the mines. Workers labored 12-16 hours daily underground in narrow, candle-lit tunnels.", "Tunnel collapses, mercury poisoning, silicosis, and exhaustion were primary causes of death. An estimated 2-8 million workers perished during the 300-year colonial period.", "African slaves were also brought to Potosí for the most dangerous tasks. In Eduardo Galeano's words: 'The silver flowing through Potosí's veins was simultaneously the blood of millions.'"] },
      { id: "other", heading: "Other New World Mines", paragraphs: ["Potosí wasn't alone. Mexico's Zacatecas (1546), Guanajuato (1548), and Real del Monte mines also produced vast quantities of silver. By the second half of the 17th century, Mexico surpassed Potosí in production.", "Between 1500 and 1800, approximately 150,000 tons of silver flowed from the New World to Europe, triggering the Price Revolution, dissolving feudal structures, and laying the foundations of capitalist economy."] },
      { id: "legacy", heading: "Today's Legacy", paragraphs: ["Potosí was inscribed as a UNESCO World Heritage Site in 1987. Cerro Rico still hosts mining operations but the mountain is so hollowed that it risks collapse.", "Today, Potosí is among Bolivia's poorest regions — this once-wealthiest city in the world stands as the most striking example of colonialism's resource curse.", "'Vale un Potosí' (Worth a Potosí) is still used in Spanish to mean 'priceless' — the linguistic legacy of the mountain's legendary wealth."] },
    ],
    flowData: {
      title: "Global Flow of Potosí Silver",
      routes: [
        { from: "Potosí", to: "Lima", desc: "Mule trains across the Andes" },
        { from: "Lima", to: "Portobelo", desc: "By ship along the South American coast" },
        { from: "Portobelo", to: "Seville", desc: "Atlantic fleet — 'Flota' system" },
        { from: "Seville", to: "Europe", desc: "Distributed to pay Spanish debts" },
        { from: "Acapulco", to: "Manila", desc: "Manila Galleon — Pacific route" },
        { from: "Manila", to: "China", desc: "In exchange for silk, porcelain, spices" },
      ],
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "How much silver was extracted from Potosí?", a: "An estimated 45,000 tons between 1545-1825 — more than half the world's silver production of that era." },
        { q: "What was the Price Revolution?", a: "The dramatic rise in prices across 16th-17th century Europe as New World silver flooded in. Prices in Spain increased sixfold over 300 years." },
        { q: "What is Potosí like today?", a: "A UNESCO World Heritage Site. Small-scale mining continues but Cerro Rico faces collapse risks. The city is among Bolivia's poorest regions." },
      ],
    },
    sources: { heading: "Sources", items: ["Kris Lane — \"Potosí: The Silver City That Changed the World\" (2019)", "Eduardo Galeano — \"Open Veins of Latin America\"", "Dennis O. Flynn & Arturo Giráldez — \"Born with a Silver Spoon\"", "Şevket Pamuk — \"A Monetary History of the Ottoman Empire\""] },
    related: { heading: "Related Topics", items: [{ title: "History of Silver", path: "/en/history/history", cat: "History" }, { title: "Silver Price History", path: "/en/market/price-history", cat: "Market" }] },
    sponsor: { text: "Keeping silver's rich history alive through modern design.", cta: "See on Instagram", note: "This content is sponsored by Istanbul Silver." },
    darkMode: "Mode",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة معرفة الفضة",
    breadcrumb: ["الرئيسية", "التاريخ", "بوتوسي وفضة العالم الجديد"],
    category: "التاريخ",
    title: "بوتوسي وفضة العالم الجديد",
    subtitle: "الجبل الذي غيّر العالم — التأثير العالمي لفضة أمريكا الجنوبية",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٤ دقيقة قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["في عام ١٥٤٥ في بوليفيا الحالية، اكتُشف جبل سيرو ريكو (الجبل الغني) على ارتفاع ٤٠٩٠ متراً كأكبر رواسب فضة في التاريخ. حوّلت فضة بوتوسي الاقتصاد العالمي بأسره.", "استُخرج ما يقارب ٤٥,٠٠٠ طن فضة بين ١٥٤٥ و١٨٢٥ — أكثر من نصف إنتاج العالم. خلق هذا المنجم الضخم أول عملة حقيقية للتجارة العالمية بينما كلف حياة ملايين العمال."] },
      { id: "iktishaf", heading: "الاكتشاف والسنوات الأولى", paragraphs: ["تقول الأسطورة إن راعياً من الكيتشوا يدعى دييغو والبا اكتشف الجبل. أشعل ناراً في ليلة باردة ورأى الفضة المذابة في الصباح.", "في ١٥٧٢ طبّق نائب الملك نظام الميتا — تحويل تقليد الخدمة العامة الإنكوية إلى آلية سخرة."] },
      { id: "alami", heading: "التأثير العالمي", paragraphs: ["سلكت فضة بوتوسي طريقين: عبر الأطلسي إلى إسبانيا، وعبر المحيط الهادئ إلى الصين عبر سفينة مانيلا. أوجد هذا التدفق المزدوج أول اقتصاد عالمي حقيقي."], widget: "flowDiagram" },
      { id: "uthmani", heading: "فضة العالم الجديد والدولة العثمانية", paragraphs: ["أثر تدفق الفضة الرخيصة على الأقجة العثمانية مسبباً تضخماً. ارتفع سعر الذهب من ٦٠ أقجة عام ١٥٨٥ إلى ١٢٠ أقجة عام ١٦٤٠."] },
    ],
    flowData: { title: "التدفق العالمي لفضة بوتوسي", routes: [{ from: "بوتوسي", to: "ليما", desc: "قوافل بغال عبر الأنديز" }, { from: "ليما", to: "إشبيلية", desc: "أسطول الأطلسي" }, { from: "أكابولكو", to: "مانيلا", desc: "سفينة مانيلا — طريق المحيط الهادئ" }, { from: "مانيلا", to: "الصين", desc: "مقابل الحرير والخزف" }] },
    faq: { heading: "الأسئلة الشائعة", items: [{ q: "كم من الفضة استُخرج من بوتوسي؟", a: "يُقدر بنحو ٤٥,٠٠٠ طن بين ١٥٤٥-١٨٢٥." }] },
    sources: { heading: "المصادر", items: ["كريس لين — «بوتوسي: مدينة الفضة التي غيرت العالم»", "إدواردو غاليانو — «شرايين أمريكا اللاتينية المفتوحة»"] },
    related: { heading: "مواضيع ذات صلة", items: [{ title: "تاريخ الفضة", path: "/ar/history/history", cat: "التاريخ" }] },
    sponsor: { text: "نحيي تاريخ الفضة الغني من خلال التصميم العصري.", cta: "شاهد على إنستغرام", note: "هذا المحتوى برعاية إسطنبول للفضة." },
    darkMode: "الوضع",
  },
};

function FlowDiagram({ data, dark, lang }) {
  const isRTL = lang === "ar";
  const accent = dark ? "#C0C0C0" : "#708090";
  const gold = "#D4AF37";
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const bgCard = dark ? "#1a1a24" : "#ffffff";
  const border = dark ? "rgba(192,192,192,0.12)" : "rgba(0,0,0,0.08)";
  const colors = ["#6C88B5", "#8B7EC8", "#5D9E6F", "#C4956A", "#B8860B", "#4A90B0"];

  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: accent, marginBottom: 16, fontFamily: "'Playfair Display', serif" }}>{data.title}</div>
      <div style={{ position: "relative" }}>
        {data.routes.map((r, i) => (
          <div key={i} style={{ display: "flex", alignItems: "stretch", marginBottom: 4 }}>
            <div style={{ width: 32, display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: colors[i % colors.length], border: `2px solid ${bgCard}`, zIndex: 1 }} />
              {i < data.routes.length - 1 && <div style={{ flex: 1, width: 2, background: border }} />}
            </div>
            <div style={{ flex: 1, padding: "0 12px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 600, color: colors[i % colors.length] }}>{r.from}</span>
                <span style={{ color: textS, fontSize: 12 }}>{isRTL ? "←" : "→"}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 600, color: textP }}>{r.to}</span>
              </div>
              <div style={{ fontSize: 13, color: textS, lineHeight: 1.5 }}>{r.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PotosiArticle() {
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        * { margin:0; padding:0; box-sizing:border-box; }
        ::selection { background: rgba(192,192,192,0.3); }
      `}</style>

      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: dark ? "rgba(15,15,20,0.88)" : "rgba(250,250,245,0.88)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${border}`, padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg, ${accent}, ${gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#0f0f14", fontFamily: fontD }}>Ag</div>
          <span style={{ fontFamily: fontD, fontWeight: 600, fontSize: 16 }}>{t.nav}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", gap: 2, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", borderRadius: 7, padding: 2 }}>
            {["tr", "en", "ar"].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{ border: "none", cursor: "pointer", padding: "3px 9px", borderRadius: 5, fontSize: 11, fontWeight: lang === l ? 600 : 400, fontFamily: l === "ar" ? "'Noto Naskh Arabic', serif" : fontB, background: lang === l ? (dark ? "rgba(192,192,192,0.15)" : "rgba(0,0,0,0.08)") : "transparent", color: lang === l ? textP : textS, transition: "all 0.2s" }}>{l === "ar" ? "عر" : l.toUpperCase()}</button>
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

        {t.sections.map((sec) => (
          <section key={sec.id} style={{ marginBottom: 40 }}>
            {sec.heading && <h2 style={{ fontFamily: fontD, fontSize: 22, fontWeight: 600, marginBottom: 16, color: accent }}>{sec.heading}</h2>}
            {sec.paragraphs && sec.paragraphs.map((p, j) => <p key={j} style={{ fontSize: 15.5, lineHeight: 1.85, color: textP, marginBottom: 14, opacity: 0.92 }}>{p}</p>)}
            {sec.widget === "flowDiagram" && <FlowDiagram data={t.flowData} dark={dark} lang={lang} />}
          </section>
        ))}

        {t.faq && (
          <section style={{ marginTop: 48, marginBottom: 40 }}>
            <h2 style={{ fontFamily: fontD, fontSize: 22, fontWeight: 600, marginBottom: 20, color: accent }}>{t.faq.heading}</h2>
            {t.faq.items.map((item, i) => (
              <div key={i} style={{ marginBottom: 8, borderRadius: 10, border: `1px solid ${border}`, overflow: "hidden" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", textAlign: isRTL ? "right" : "left", padding: "14px 18px", background: openFaq === i ? (dark ? "rgba(192,192,192,0.05)" : "rgba(192,192,192,0.08)") : "transparent", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: textP, display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: fontB }}>
                  <span>{item.q}</span>
                  <span style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s", fontSize: 12, color: textS }}>▼</span>
                </button>
                {openFaq === i && <div style={{ padding: "0 18px 16px", fontSize: 14, lineHeight: 1.7, color: textS }}>{item.a}</div>}
              </div>
            ))}
          </section>
        )}

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: fontD, fontSize: 18, fontWeight: 600, marginBottom: 12, color: accent }}>{t.sources.heading}</h2>
          {t.sources.items.map((s, i) => <div key={i} style={{ fontSize: 13, color: textS, padding: "6px 0", borderBottom: `1px solid ${border}` }}>{i + 1}. {s}</div>)}
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: fontD, fontSize: 18, fontWeight: 600, marginBottom: 12, color: accent }}>{t.related.heading}</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {t.related.items.map((r, i) => (
              <a key={i} href={r.path} style={{ padding: "10px 16px", borderRadius: 8, border: `1px solid ${border}`, textDecoration: "none", color: textP, fontSize: 13, fontWeight: 500, background: dark ? "rgba(192,192,192,0.03)" : "rgba(192,192,192,0.06)" }}>
                <span style={{ fontSize: 10, color: gold, marginRight: 6 }}>{r.cat}</span>{r.title}
              </a>
            ))}
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${dark ? "rgba(212,175,55,0.06)" : "rgba(212,175,55,0.08)"}, transparent)`, borderRadius: 14, padding: 24, textAlign: "center", border: `1px solid ${gold}22` }}>
          <p style={{ fontSize: 14, color: textS, marginBottom: 12 }}>{t.sponsor.text}</p>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "10px 28px", borderRadius: 8, background: `linear-gradient(135deg, ${gold}, #c9a227)`, color: "#0f0f14", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>{t.sponsor.cta}</a>
          <p style={{ fontSize: 11, color: textS, marginTop: 10, opacity: 0.6 }}>{t.sponsor.note}</p>
        </div>
      </article>

      <footer style={{ borderTop: `1px solid ${border}`, padding: "24px", textAlign: "center", fontSize: 12, color: textS }}>© 2026 SilverAtlas · {t.meta.author}</footer>
    </div>
  );
}
