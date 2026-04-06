import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Piyasa", "Arz-Talep Dinamikleri"],
    category: "Piyasa",
    title: "Gümüş Arz-Talep Dinamikleri",
    subtitle: "Küresel gümüş piyasasının yapısal analizi — arz kaynakları, talep sektörleri ve açık dengesi",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "10 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Gümüş piyasası, son yıllarda yapısal bir dönüşüm geçirmektedir. Geleneksel olarak yatırım ve takı talebiyle şekillenen piyasa, güneş enerjisi ve elektronik sektörlerinin patlayıcı büyümesiyle yeni bir dengeye doğru ilerlemektedir.",
        "2021'den bu yana gümüş piyasasında ardışık arz açıkları (deficit) yaşanmaktadır — talep, arzı aşmaktadır. Bu makale, arz ve talep bileşenlerini ayrıntılı şekilde analiz etmektedir.",
      ]},
      { id: "arz", heading: "Arz Yapısı", paragraphs: [
        "Küresel gümüş arzı üç ana kaynaktan oluşur: maden üretimi (~%80), geri dönüşüm (~%17) ve devlet stok satışları (~%3). 2024'te toplam arz yaklaşık 31.000 ton olarak gerçekleşmiştir.",
      ], widget: "supply" },
      { id: "maden-arz", heading: "Maden Üretimi: Yapısal Kısıtlar", paragraphs: [
        "Yıllık maden üretimi yaklaşık 26.000 ton civarında sabitlenmiştir ve son 5 yılda anlamlı bir artış göstermemiştir. Bunun başlıca nedenleri: yeni büyük maden keşiflerinin azalması, mevcut madenlerde düşen cevher kaliteleri (ore grade), artan çevresel düzenlemeler ve izin süreçlerinin uzaması.",
        "Kritik bir yapısal faktör: gümüş üretiminin ~%70'i bakır, kurşun ve çinko madenciliğinin yan ürünüdür. Gümüş fiyatı yükselse bile, ana metal talebi düşükse yeni kapasite açılması mümkün olmayabilir.",
        "Meksika (%24), Çin (%13), Peru (%12), Şili (%6) ve Rusya (%6) toplam maden üretiminin ~%61'ini karşılar — yüksek coğrafik konsantrasyon jeopolitik arz riski oluşturur.",
      ]},
      { id: "geri-donusum", heading: "Geri Dönüşüm", paragraphs: [
        "Gümüş geri dönüşümü yıllık ~5.200 ton ile toplam arzın ~%17'sini oluşturur. Başlıca geri dönüşüm kaynakları: eski takı ve gümüş eşya (%45), endüstriyel atıklar (%30), fotoğraf sektörü atıkları (%15) ve elektronik atıklar (%10).",
        "Güneş paneli geri dönüşümü henüz erken aşamadadır — panellerin ortalama ömrü 25-30 yıl olduğundan, ilk büyük dalga 2030'ların ortasında beklenmektedir. Bu, gelecekte önemli bir ikincil arz kaynağı oluşturacaktır.",
      ]},
      { id: "talep", heading: "Talep Yapısı", paragraphs: [
        "Küresel gümüş talebi 2024'te yaklaşık 37.000 ton olarak gerçekleşmiştir — arzı ~6.000 ton aşmıştır. Talep dört ana kategoride incelenir:",
      ], widget: "demand" },
      { id: "endustriyel-talep", heading: "Endüstriyel Talep: Yapısal Büyüme", paragraphs: [
        "Endüstriyel talep, toplam talebin ~%60'ını oluşturur ve en hızlı büyüyen segmenttir. Güneş panelleri (~6.000 ton), elektronik (~5.500 ton), lehim alaşımları (~2.500 ton) ve diğer endüstriyel uygulamalar (~3.500 ton) başlıca bileşenlerdir.",
        "Güneş paneli talebi yılda %15-20 büyümektedir — bu tek başına her yıl ~1.000 ton ek gümüş talebi anlamına gelir. Elektrikli araç geçişi de elektronik gümüş talebini artırmaktadır.",
      ]},
      { id: "yatirim-talep", heading: "Yatırım Talebi", paragraphs: [
        "Fiziksel yatırım talebi (külçe, sikke, ETF) toplam talebin ~%16'sını oluşturur — yıllık ~6.000 ton. Bu talep makroekonomik koşullara göre büyük dalgalanmalar gösterir.",
        "Yüksek enflasyon ve düşük reel faiz dönemlerinde yatırım talebi artar; yükselen faiz oranları ise yatırımcıları faiz getirili varlıklara yönlendirir.",
      ]},
      { id: "taki-talep", heading: "Takı ve Gümüş Eşya Talebi", paragraphs: [
        "Takı talebi toplam talebin ~%24'ünü oluşturur. Hindistan, ABD, Çin, Tayland ve Türkiye en büyük takı gümüşü tüketicileridir.",
        "Hindistan'da düğün sezonu (Ekim-Şubat) gümüş takı talebinde belirgin mevsimsel artış yaratır. ABD ve Avrupa'da gümüş takı trendi son yıllarda altına göre daha hızlı büyümektedir.",
      ]},
      { id: "acik", heading: "Arz Açığı ve Piyasa Dengesi", paragraphs: [
        "2021'den itibaren gümüş piyasasında ardışık yıllık arz açıkları yaşanmaktadır. 2024'te bu açık yaklaşık 6.000 ton (~190 milyon ons) olarak tahmin edilmektedir — tarihî rekor seviyeye yakın.",
        "Arz açığı, yer üstü stoklardan (bullion bankalar, ETF stokları, özel depolar) karşılanmaktadır. Ancak bu stoklar sınırsız değildir — sürekli açık, uzun vadede stokların erimesi ve potansiyel fiyat baskısı anlamına gelir.",
        "Bazı analistler, mevcut yapısal açığın devam etmesi halinde 2027-2030 aralığında ciddi bir fiziksel arz sıkışması (squeeze) yaşanabileceğini öngörmektedir.",
      ]},
    ],
    disclaimer: "⚠️ Bu içerik yalnızca bilgilendirme amaçlıdır ve yatırım tavsiyesi niteliği taşımaz.",
    faq: { heading: "Sıkça Sorulan Sorular", items: [
      { q: "Gümüş piyasasında arz açığı ne demek?", a: "Yıllık toplam talebin, toplam arzı (maden + geri dönüşüm + stok satışı) aşması durumudur. Fark, mevcut yer üstü stoklardan karşılanır." },
      { q: "Güneş panelleri gümüş talebini ne kadar artırıyor?", a: "2024'te ~6.000 ton — toplam talebin ~%16'sı. Her yıl %15-20 büyüme ile 2030'da ~10.000 tona ulaşması bekleniyor." },
      { q: "Gümüş arzı neden artmıyor?", a: "Üç ana neden: yeni maden keşiflerinin azalması, gümüşün ~%70'inin yan ürün olması (ana metal talebine bağlı) ve çevresel düzenlemelerin sıkılaşması." },
      { q: "Arz açığı fiyatları artırır mı?", a: "Teorik olarak evet, ancak kısa vadede stoklar ve spekülatif pozisyonlar fiyatı etkiler. Uzun vadeli yapısal açık, fiyat üzerinde yukarı yönlü baskı oluşturur." },
    ]},
    sources: { heading: "Kaynaklar", items: ["The Silver Institute — \"World Silver Survey 2025\"", "Metals Focus — Silver Interim Report", "CPM Group — Silver Yearbook 2025", "GFMS Refinitiv — Precious Metals Analysis", "IEA — Solar PV Global Supply Chain"] },
    related: { heading: "İlgili Konular", items: [{ title: "Gümüş Fiyat Tarihi", path: "/tr/piyasa/fiyat-tarihi", cat: "Piyasa" }, { title: "Endüstriyel Kullanımlar", path: "/tr/bilim/endustri", cat: "Bilim" }, { title: "Gümüş Yatırım Rehberi", path: "/tr/piyasa/yatirim", cat: "Piyasa" }] },
    sponsor: { text: "Gümüşün değerini anlayın, takı formunda yaşayın.", cta: "Instagram'da Gör", note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir." },
    supplyData: [
      { name: "Maden Üretimi", value: 26000, pct: 84, color: "#C0C0C0" },
      { name: "Geri Dönüşüm", value: 5200, pct: 13, color: "#7BE495" },
      { name: "Stok Satışı / Diğer", value: 800, pct: 3, color: "#FFB86C" },
    ],
    supplyTitle: "Gümüş Arz Kaynakları (2024, ton)",
    demandData: [
      { name: "Güneş Paneli (PV)", value: 6000, pct: 16, color: "#FFD700" },
      { name: "Elektronik & İletişim", value: 5500, pct: 15, color: "#6EC6FF" },
      { name: "Diğer Endüstriyel", value: 6000, pct: 16, color: "#FFB86C" },
      { name: "Takı & Gümüş Eşya", value: 9000, pct: 24, color: "#C0C0C0" },
      { name: "Yatırım (Külçe/Sikke)", value: 6000, pct: 16, color: "#D4AF37" },
      { name: "Fotoğrafçılık", value: 1500, pct: 4, color: "#C9A0DC" },
      { name: "Diğer", value: 3000, pct: 9, color: "#E8A0BF" },
    ],
    demandTitle: "Gümüş Talep Dağılımı (2024, ton)",
    darkMode: "Mod", toc: "İçindekiler",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Market", "Supply-Demand Dynamics"],
    category: "Market",
    title: "Silver Supply-Demand Dynamics",
    subtitle: "Structural analysis of the global silver market — supply sources, demand sectors, and deficit balance",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "10 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["The silver market is undergoing a structural transformation. Traditionally shaped by investment and jewelry demand, the market is moving toward a new equilibrium driven by explosive growth in solar energy and electronics.", "Since 2021, the silver market has experienced consecutive annual supply deficits — demand exceeds supply."] },
      { id: "supply", heading: "Supply Structure", paragraphs: ["Global silver supply consists of three main sources: mine production (~80%), recycling (~17%), and government stock sales (~3%). In 2024, total supply was approximately 31,000 tonnes."], widget: "supply" },
      { id: "mine-supply", heading: "Mine Production: Structural Constraints", paragraphs: ["Annual mine production has plateaued at approximately 26,000 tonnes with no meaningful increase in the past 5 years. Key reasons: declining new major discoveries, falling ore grades at existing mines, increasing environmental regulations.", "Critical: ~70% of silver production is a byproduct of copper, lead, and zinc mining. Even if silver prices rise, new capacity may not open if base metal demand is low.", "Mexico (24%), China (13%), Peru (12%), Chile (6%), and Russia (6%) account for ~61% of total production — high geographic concentration creates geopolitical supply risk."] },
      { id: "recycling", heading: "Recycling", paragraphs: ["Silver recycling at ~5,200 tonnes/year represents ~17% of total supply. Main sources: old jewelry/silverware (45%), industrial scrap (30%), photography (15%), and e-waste (10%).", "Solar panel recycling is still early-stage — with panel lifespans of 25-30 years, the first major wave is expected in the mid-2030s."] },
      { id: "demand", heading: "Demand Structure", paragraphs: ["Global silver demand in 2024 reached approximately 37,000 tonnes — exceeding supply by ~6,000 tonnes:"], widget: "demand" },
      { id: "industrial-demand", heading: "Industrial Demand: Structural Growth", paragraphs: ["Industrial demand accounts for ~60% of total demand and is the fastest-growing segment. Solar panels (~6,000t), electronics (~5,500t), solder alloys (~2,500t), and other (~3,500t) are the main components.", "Solar panel demand is growing 15-20% annually — meaning ~1,000 tonnes of additional silver demand each year."] },
      { id: "investment-demand", heading: "Investment Demand", paragraphs: ["Physical investment demand (bars, coins, ETFs) represents ~16% of total — ~6,000 tonnes/year, with large fluctuations based on macro conditions."] },
      { id: "jewelry-demand", heading: "Jewelry and Silverware Demand", paragraphs: ["Jewelry accounts for ~24% of total demand. India, USA, China, Thailand, and Turkey are the largest consumers."] },
      { id: "deficit", heading: "Supply Deficit and Market Balance", paragraphs: ["Since 2021, consecutive annual supply deficits have occurred. In 2024, the deficit was estimated at ~6,000 tonnes — near historic record levels.", "Deficits are met from above-ground stocks (bullion banks, ETF holdings, private vaults). But stocks are finite — persistent deficits mean stock erosion and potential price pressure.", "Some analysts project that if the structural deficit continues, a significant physical supply squeeze could occur in 2027-2030."] },
    ],
    disclaimer: "⚠️ This content is for informational purposes only and does not constitute investment advice.",
    faq: { heading: "FAQ", items: [
      { q: "What does a supply deficit in silver mean?", a: "When annual total demand exceeds total supply (mine + recycling + stock sales). The gap is filled from existing above-ground stocks." },
      { q: "How much are solar panels increasing silver demand?", a: "~6,000 tonnes in 2024 (~16% of total), growing 15-20% annually, expected to reach ~10,000t by 2030." },
      { q: "Why isn't silver supply growing?", a: "Three reasons: declining discoveries, ~70% being a byproduct (dependent on base metal demand), and tightening environmental regulations." },
    ]},
    sources: { heading: "Sources", items: ["The Silver Institute — World Silver Survey 2025", "Metals Focus — Silver Interim Report", "CPM Group — Silver Yearbook 2025", "IEA — Solar PV Supply Chain"] },
    related: { heading: "Related", items: [{ title: "Silver Price History", path: "/en/market/price-history", cat: "Market" }, { title: "Industrial Applications", path: "/en/science/industrial", cat: "Science" }] },
    sponsor: { text: "Understand silver's value, experience it in jewelry.", cta: "View on Instagram", note: "This content is supported by İstanbul Gümüş." },
    supplyData: [
      { name: "Mine Production", value: 26000, pct: 84, color: "#C0C0C0" },
      { name: "Recycling", value: 5200, pct: 13, color: "#7BE495" },
      { name: "Stock Sales / Other", value: 800, pct: 3, color: "#FFB86C" },
    ],
    supplyTitle: "Silver Supply Sources (2024, tonnes)",
    demandData: [
      { name: "Solar PV", value: 6000, pct: 16, color: "#FFD700" },
      { name: "Electronics & Comms", value: 5500, pct: 15, color: "#6EC6FF" },
      { name: "Other Industrial", value: 6000, pct: 16, color: "#FFB86C" },
      { name: "Jewelry & Silverware", value: 9000, pct: 24, color: "#C0C0C0" },
      { name: "Investment (Bar/Coin)", value: 6000, pct: 16, color: "#D4AF37" },
      { name: "Photography", value: 1500, pct: 4, color: "#C9A0DC" },
      { name: "Other", value: 3000, pct: 9, color: "#E8A0BF" },
    ],
    demandTitle: "Silver Demand Distribution (2024, tonnes)",
    darkMode: "Mode", toc: "Contents",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة المعرفة بالفضة",
    breadcrumb: ["الرئيسية", "السوق", "ديناميكيات العرض والطلب"],
    category: "السوق",
    title: "ديناميكيات العرض والطلب على الفضة",
    subtitle: "تحليل هيكلي لسوق الفضة العالمي — مصادر العرض وقطاعات الطلب وتوازن العجز",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٠ دقائق قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["يشهد سوق الفضة تحولاً هيكلياً. منذ ٢٠٢١ يعاني السوق من عجز متتالي في العرض — الطلب يتجاوز العرض."] },
      { id: "supply", heading: "هيكل العرض", paragraphs: ["العرض العالمي من ثلاثة مصادر: إنتاج المناجم (~٨٠٪)، إعادة التدوير (~١٧٪)، ومبيعات المخزون (~٣٪)."], widget: "supply" },
      { id: "mine-supply", heading: "إنتاج المناجم: قيود هيكلية", paragraphs: ["استقر الإنتاج عند ~٢٦٬٠٠٠ طن. الأسباب: تراجع الاكتشافات وانخفاض جودة الخام وتشديد اللوائح البيئية.", "~٧٠٪ من الإنتاج منتج ثانوي لتعدين النحاس والرصاص والزنك."] },
      { id: "recycling", heading: "إعادة التدوير", paragraphs: ["~٥٬٢٠٠ طن سنوياً (~١٧٪ من العرض). إعادة تدوير الألواح الشمسية ستبدأ بكميات كبيرة في منتصف ٢٠٣٠."] },
      { id: "demand", heading: "هيكل الطلب", paragraphs: ["بلغ الطلب العالمي ~٣٧٬٠٠٠ طن في ٢٠٢٤ — متجاوزاً العرض بـ~٦٬٠٠٠ طن:"], widget: "demand" },
      { id: "industrial-demand", heading: "الطلب الصناعي: نمو هيكلي", paragraphs: ["الطلب الصناعي ~٦٠٪ من الإجمالي وأسرع القطاعات نمواً. الألواح الشمسية والإلكترونيات المحركان الرئيسيان."] },
      { id: "investment-demand", heading: "الطلب الاستثماري", paragraphs: ["~١٦٪ من الإجمالي (~٦٬٠٠٠ طن) مع تقلبات كبيرة حسب الظروف الاقتصادية."] },
      { id: "jewelry-demand", heading: "طلب المجوهرات", paragraphs: ["~٢٤٪ من الإجمالي. الهند وأمريكا والصين وتايلاند وتركيا أكبر المستهلكين."] },
      { id: "deficit", heading: "عجز العرض وتوازن السوق", paragraphs: ["منذ ٢٠٢١ عجز متتالي. في ٢٠٢٤ ~٦٬٠٠٠ طن — قرب مستوى قياسي.", "يُغطى العجز من المخزون فوق الأرض. لكن المخزون محدود — العجز المستمر يعني ضغطاً صعودياً على الأسعار."] },
    ],
    disclaimer: "⚠️ هذا المحتوى لأغراض المعلومات فقط ولا يشكل نصيحة استثمارية.",
    faq: { heading: "الأسئلة الشائعة", items: [
      { q: "ماذا يعني عجز العرض في سوق الفضة؟", a: "عندما يتجاوز الطلب السنوي إجمالي العرض. يُغطى الفارق من المخزون الموجود." },
      { q: "لماذا لا يزداد عرض الفضة؟", a: "تراجع الاكتشافات، كون ٧٠٪ منتج ثانوي، وتشديد اللوائح البيئية." },
    ]},
    sources: { heading: "المصادر", items: ["The Silver Institute — World Silver Survey 2025", "Metals Focus — تقرير الفضة المؤقت", "IEA — سلسلة توريد الطاقة الشمسية"] },
    related: { heading: "مواضيع ذات صلة", items: [{ title: "تاريخ أسعار الفضة", path: "/ar/market/price-history", cat: "السوق" }] },
    sponsor: { text: "افهموا قيمة الفضة وعايشوها في شكل مجوهرات.", cta: "شاهد على إنستغرام", note: "هذا المحتوى مدعوم من إسطنبول غوموش." },
    supplyData: [
      { name: "إنتاج المناجم", value: 26000, pct: 84, color: "#C0C0C0" },
      { name: "إعادة التدوير", value: 5200, pct: 13, color: "#7BE495" },
      { name: "مبيعات المخزون", value: 800, pct: 3, color: "#FFB86C" },
    ],
    supplyTitle: "مصادر عرض الفضة (٢٠٢٤، طن)",
    demandData: [
      { name: "الألواح الشمسية", value: 6000, pct: 16, color: "#FFD700" },
      { name: "الإلكترونيات", value: 5500, pct: 15, color: "#6EC6FF" },
      { name: "صناعي آخر", value: 6000, pct: 16, color: "#FFB86C" },
      { name: "المجوهرات", value: 9000, pct: 24, color: "#C0C0C0" },
      { name: "الاستثمار", value: 6000, pct: 16, color: "#D4AF37" },
      { name: "التصوير", value: 1500, pct: 4, color: "#C9A0DC" },
      { name: "آخر", value: 3000, pct: 9, color: "#E8A0BF" },
    ],
    demandTitle: "توزيع الطلب على الفضة (٢٠٢٤، طن)",
    darkMode: "الوضع", toc: "المحتويات",
  },
};

function BarChart({ data, title, dark }) {
  const textP=dark?"#e8e8ec":"#2C2C2C"; const textS=dark?"#9a9aaa":"#6B7280"; const border=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)";
  const maxVal = Math.max(...data.map(d=>d.value));
  return (
    <div style={{margin:"20px 0",padding:"24px",borderRadius:14,border:`1px solid ${border}`,background:dark?"rgba(192,192,192,0.02)":"rgba(192,192,192,0.04)"}}>
      <div style={{fontSize:14,fontWeight:600,color:textP,marginBottom:16}}>{title}</div>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {data.sort((a,b)=>b.value-a.value).map((d,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:130,fontSize:12,color:textS,textAlign:"right",flexShrink:0}}>{d.name}</div>
            <div style={{flex:1,height:28,borderRadius:6,background:dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.02)",overflow:"hidden"}}>
              <div style={{height:"100%",width:`${(d.value/maxVal)*100}%`,borderRadius:6,minWidth:40,background:`linear-gradient(90deg,${d.color}88,${d.color})`,display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:8}}>
                <span style={{fontSize:10,fontWeight:700,color:dark?"#0f0f14":"#fff",fontFamily:"'JetBrains Mono',monospace"}}>{(d.value/1000).toFixed(1)}K</span>
              </div>
            </div>
            <div style={{width:35,fontSize:10,color:textS,textAlign:"right",flexShrink:0,fontFamily:"'JetBrains Mono',monospace"}}>{d.pct}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SupplyDemandArticle() {
  const [lang,setLang]=useState("tr"); const [dark,setDark]=useState(true); const [openFaq,setOpenFaq]=useState(null);
  const t=T[lang]; const isRTL=lang==="ar";
  const bgP=dark?"#0f0f14":"#FAFAF5"; const bgCard=dark?"#1a1a24":"#fff"; const textP=dark?"#e8e8ec":"#2C2C2C"; const textS=dark?"#9a9aaa":"#6B7280"; const accent=dark?"#C0C0C0":"#708090"; const gold="#D4AF37"; const border=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)"; const fontD="'Playfair Display',Georgia,serif"; const fontB=lang==="ar"?"'Noto Naskh Arabic',serif":"'Source Sans 3',sans-serif";

  return (
    <div dir={isRTL?"rtl":"ltr"} style={{fontFamily:fontB,background:bgP,color:textP,minHeight:"100vh"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*{margin:0;padding:0;box-sizing:border-box}::selection{background:rgba(192,192,192,0.3)}`}</style>
      <nav style={{position:"sticky",top:0,zIndex:100,background:dark?"rgba(15,15,20,0.88)":"rgba(250,250,245,0.88)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${border}`,padding:"0 24px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"}}><div style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:16}}>{t.nav}</span></div><div style={{display:"flex",alignItems:"center",gap:12}}><div style={{display:"flex",gap:2,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)",borderRadius:7,padding:2}}>{["tr","en","ar"].map(l=><button key={l} onClick={()=>setLang(l)} style={{border:"none",cursor:"pointer",padding:"3px 9px",borderRadius:5,fontSize:11,fontWeight:lang===l?600:400,fontFamily:l==="ar"?"'Noto Naskh Arabic',serif":fontB,background:lang===l?(dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.08)"):"transparent",color:lang===l?textP:textS}}>{l==="ar"?"عر":l.toUpperCase()}</button>)}</div><button onClick={()=>setDark(!dark)} style={{border:"none",cursor:"pointer",background:"transparent",color:textS,fontSize:16,padding:4}}>{dark?"☀️":"🌙"}</button></div></nav>
      <div style={{maxWidth:760,margin:"0 auto",padding:"16px 24px 0",display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",fontSize:12,color:textS}}>{t.breadcrumb.map((item,i)=><span key={i} style={{display:"flex",alignItems:"center",gap:6}}>{i>0&&<span style={{opacity:0.4}}>{isRTL?"‹":"›"}</span>}<a href="#" style={{color:i===t.breadcrumb.length-1?textP:textS,textDecoration:"none",fontWeight:i===t.breadcrumb.length-1?500:400}}>{item}</a></span>)}</div>
      <article style={{maxWidth:760,margin:"0 auto",padding:"32px 24px 64px",animation:"fadeUp 0.6s ease both"}}>
        <div style={{marginBottom:36}}><div style={{display:"inline-block",padding:"3px 12px",borderRadius:6,fontSize:11,fontWeight:600,letterSpacing:"0.04em",color:gold,border:`1px solid ${gold}33`,marginBottom:16}}>{t.category}</div><h1 style={{fontFamily:fontD,fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.15,marginBottom:12}}>{t.title}</h1><p style={{fontSize:16,color:textS,lineHeight:1.6,marginBottom:20}}>{t.subtitle}</p><div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",fontSize:13,color:textS,paddingBottom:20,borderBottom:`1px solid ${border}`}}><span>{t.meta.author}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.date}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.readTime}</span></div></div>
        <div style={{height:220,borderRadius:16,marginBottom:36,overflow:"hidden",background:dark?"linear-gradient(135deg,#1a1a2e,#2a2a3e,#1a1a2e)":"linear-gradient(135deg,#e8e8e8,#d0d0d0,#e8e8e8)",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{textAlign:"center"}}><div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:36,fontWeight:700}}><span style={{color:"#4ade80"}}>31K</span><span style={{color:textS,fontSize:20,margin:"0 12px"}}>vs</span><span style={{color:"#f87171"}}>37K</span></div><div style={{fontSize:12,color:textS,letterSpacing:"0.12em",marginTop:8}}>SUPPLY vs DEMAND · 6K DEFICIT</div></div></div>
        <div style={{padding:"14px 18px",borderRadius:10,background:dark?"rgba(248,113,113,0.06)":"rgba(248,113,113,0.08)",border:"1px solid rgba(248,113,113,0.15)",marginBottom:36,fontSize:13,color:textS}}>{t.disclaimer}</div>

        {t.sections.map(sec=>(<section key={sec.id} style={{marginBottom:36}}>{sec.heading&&<h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:16,paddingTop:8}}>{sec.heading}</h2>}{sec.paragraphs.map((p,pi)=><p key={pi} style={{fontSize:15,lineHeight:1.8,color:textS,marginBottom:14}}>{p}</p>)}{sec.widget==="supply"&&<BarChart data={t.supplyData} title={t.supplyTitle} dark={dark}/>}{sec.widget==="demand"&&<BarChart data={t.demandData} title={t.demandTitle} dark={dark}/>}</section>))}
        <section style={{marginBottom:36,marginTop:48}}><h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:20}}>{t.faq.heading}</h2><div style={{display:"flex",flexDirection:"column",gap:8}}>{t.faq.items.map((item,i)=>(<div key={i} style={{border:`1px solid ${openFaq===i?gold+"44":border}`,borderRadius:12,overflow:"hidden",background:openFaq===i?(dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.04)"):"transparent"}}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{width:"100%",border:"none",cursor:"pointer",background:"transparent",padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",color:textP,fontSize:14,fontWeight:500,fontFamily:fontB,textAlign:isRTL?"right":"left",gap:12}}><span style={{flex:1}}>{item.q}</span><span style={{fontSize:18,color:textS,transform:openFaq===i?"rotate(45deg)":"rotate(0)",flexShrink:0}}>+</span></button>{openFaq===i&&<div style={{padding:"0 20px 16px",fontSize:14,lineHeight:1.7,color:textS}}>{item.a}</div>}</div>))}</div></section>
        <section style={{marginBottom:36,padding:"20px 24px",background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)",borderRadius:12,border:`1px solid ${border}`}}><h3 style={{fontSize:15,fontWeight:600,marginBottom:12}}>{t.sources.heading}</h3>{t.sources.items.map((s,i)=><div key={i} style={{fontSize:13,color:textS,lineHeight:1.6,marginBottom:6,display:"flex",gap:8}}><span style={{color:accent,fontWeight:600,flexShrink:0}}>[{i+1}]</span><span>{s}</span></div>)}</section>
        <section style={{marginBottom:40}}><h3 style={{fontSize:18,fontFamily:fontD,fontWeight:600,marginBottom:16}}>{t.related.heading}</h3><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:12}}>{t.related.items.map((item,i)=><a key={i} href={item.path} style={{textDecoration:"none",padding:"16px 18px",border:`1px solid ${border}`,borderRadius:12,background:bgCard,display:"block"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=gold+"44"}} onMouseLeave={e=>{e.currentTarget.style.borderColor=border}}><div style={{fontSize:10,color:gold,fontWeight:600,marginBottom:6,letterSpacing:"0.04em"}}>{item.cat}</div><div style={{fontSize:14,fontWeight:500,color:textP}}>{item.title}</div><div style={{fontSize:12,color:textS,marginTop:6}}>{isRTL?"←":"→"}</div></a>)}</div></section>
        <div style={{border:`1px solid ${gold}22`,borderRadius:16,padding:"28px 24px",background:dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.05)",textAlign:"center"}}><p style={{fontSize:15,color:textP,marginBottom:16,lineHeight:1.6}}>{t.sponsor.text}</p><a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"10px 24px",borderRadius:10,background:`linear-gradient(135deg,${accent},${gold})`,color:"#0f0f14",fontSize:13,fontWeight:600,textDecoration:"none"}}>📸 {t.sponsor.cta}</a><p style={{fontSize:11,color:textS,marginTop:14,opacity:0.7}}>{t.sponsor.note}</p></div>
      </article>
      <footer style={{borderTop:`1px solid ${border}`,padding:"24px",textAlign:"center",background:dark?"#0c0c10":"#f5f5f0"}}><div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:8}}><div style={{width:22,height:22,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:14}}>{t.nav}</span></div><p style={{fontSize:11,color:textS}}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p></footer>
    </div>
  );
}
