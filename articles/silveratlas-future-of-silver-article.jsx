import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Piyasa", "Gümüşün Geleceği"],
    category: "Piyasa & Yatırım",
    title: "Gümüşün Geleceği",
    subtitle: "Yeşil enerji, elektrikli araçlar ve yapay zekâ — gümüş talebini şekillendiren mega-trendler",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "13 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Gümüş, antik çağın para metalinden 21. yüzyılın en kritik endüstriyel hammaddelerinden birine dönüşmüştür. Güneş panellerinden 5G altyapısına, elektrikli araçlardan tıbbi cihazlara kadar gümüş talebi hızla artarken, maden arzı bu talebi karşılamakta zorlanmaktadır.",
        "Bu makale, gümüşün geleceğini şekillendiren beş mega-trendi — yeşil enerji, dijitalleşme, sağlık teknolojileri, arz daralması ve yatırım talebi — analiz etmektedir.",
      ]},
      { id: "gunes", heading: "Güneş Enerjisi: Gümüşün En Büyük Büyüme Motoru", paragraphs: [
        "Fotovoltaik (PV) güneş panelleri, gümüşün en hızlı büyüyen talep sektörüdür. Her standart güneş paneli yaklaşık 20 gram gümüş içerir — iletken pasta (silver paste) olarak hücrelerin arka kontağında kullanılır.",
        "2020'de güneş enerjisi sektörü toplam gümüş talebinin ~%10'unu oluştururken, 2025'te bu oran ~%15-20'ye çıkmıştır. IEA projeksiyonlarına göre 2030'da küresel güneş kurulu gücü 5.000 GW'ı aşacak — bu, yıllık 150+ milyon ons gümüş talebi anlamına gelmektedir.",
        "Heterojunction (HJT) ve TOPCon gibi yeni nesil PV teknolojileri, panel başına daha fazla gümüş kullanmaktadır. Sektör gümüş tasarrufu için araştırmalar yapsa da, verimlilik artışı gümüş kullanımını tamamen ortadan kaldırmamaktadır.",
      ]},
      { id: "otonom", heading: "Elektrikli Araçlar ve Otonom Sürüş", paragraphs: [
        "Bir elektrikli araç (EV), geleneksel bir içten yanmalı motorlu araca göre 1,5-2 kat daha fazla gümüş kullanır. Gümüş, EV'lerde batarya yönetim sistemleri, şarj istasyonu kontaktörleri, infotainment ekranları ve ADAS sensörlerinde kritik rol oynar.",
        "Otonom sürüş teknolojileri (LiDAR, radar, kamera sistemleri), araç başına gümüş talebini daha da artıracaktır. 2030'da yıllık EV üretiminin 40 milyon adedi aşması beklenmektedir.",
      ]},
      { id: "5g", heading: "5G ve IoT Altyapısı", paragraphs: [
        "5G baz istasyonları, yüksek frekans sinyallerinde üstün iletkenlik gerektirdiğinden gümüş bileşenler kullanmaktadır. Her 5G baz istasyonunun 4G'ye göre 2-3 kat daha fazla gümüş içerdiği tahmin edilmektedir.",
        "IoT (Nesnelerin İnterneti) cihazlarının 2030'da 30 milyarı aşması beklenmektedir. Her sensör, her bağlantı noktası, her RFID etiketi — mikro miktarlarda gümüş içerir, ancak milyarlarca cihaz toplamda önemli bir talep oluşturur.",
      ]},
      { id: "saglik", heading: "Sağlık Teknolojileri", paragraphs: [
        "COVID-19 pandemisi, gümüşün antimikrobiyal özelliklerine olan ilgiyi dramatik şekilde artırmıştır. Nano-gümüş kaplı yüzeyler, gümüş iyonlu filtreler ve antimikrobiyal tekstiller büyüyen pazarlar oluşturmaktadır.",
        "Giyilebilir sağlık teknolojileri (smartwatch sensörleri, biyomedikal implantlar) gümüşün biyouyumlu iletkenliğinden yararlanmaktadır. Gümüş nanotel elektrotlar, esneklik ve iletkenliği birleştiren yeni nesil sensörlerin temelini oluşturur.",
      ]},
      { id: "arz", heading: "Arz Daralması Riski", paragraphs: [
        "Gümüş üretiminin ~%70'i bakır, çinko ve kurşun madenciliğinin yan ürünüdür — birincil gümüş madenciliği sınırlıdır. Bu, gümüş arzının büyük ölçüde diğer metallerin üretim kararlarına bağlı olduğu anlamına gelir.",
        "2020'den bu yana gümüş piyasası yapısal açık (deficit) vermektedir — talep arzı aşmaktadır. Silver Institute verilerine göre 2024'te piyasa açığı 215 milyon ons'u bulmuştur.",
        "Yeni maden projeleri keşiften üretime ortalama 10-15 yıl sürmektedir. Mevcut bilinen rezervlerin tüketim hızına göre 20-25 yıl yeteceği tahmin edilmektedir — bu, gümüşü stratejik bir metal haline getirmektedir.",
      ]},
      { id: "yatirim", heading: "Yatırım Perspektifi", paragraphs: [
        "Gümüş, hem endüstriyel metal hem de değer deposu olarak ikili karaktere sahiptir. Bu ikili yapı, gümüşü ekonomik genişleme (endüstriyel talep) ve belirsizlik dönemlerinde (güvenli liman) eşzamanlı olarak çekici kılar.",
        "ETF (SLV, SIVR) varlıkları, fiziki gümüş talebi ve merkez bankası alımları, yatırım talebinin üç ana bileşenidir. Altın/gümüş oranı (GSR) tarihsel ortalaması ~60 iken, 2026'da ~80 civarındadır — bu, gümüşün altına göre 'ucuz' kaldığına işaret edebilir.",
      ]},
      { id: "sonuc", heading: "Sonuç: 'Yeşil Metal'in Yükselişi", paragraphs: [
        "Gümüş, yeşil enerji dönüşümünün, dijitalleşmenin ve sağlık teknolojilerinin vazgeçilmez malzemesi olarak 'yeşil metal' unvanını hak etmektedir. Talep büyümesi ile arz kısıtları arasındaki makas genişledikçe, gümüşün stratejik önemi artmaya devam edecektir.",
        "Yatırımcılar, politika yapıcılar ve tüketiciler için gümüşü anlamak, geleceğin ekonomisini anlamak demektir. SilverAtlas olarak bu anlayışı herkes için erişilebilir kılmayı hedefliyoruz.",
      ]},
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Gümüş güneş panellerinde bakırla değiştirilebilir mi?", a: "Araştırmalar devam etmektedir ancak gümüşün eşsiz iletkenliği ve korozyon direnci şu an için tam bir alternatif bulunmasını zorlaştırmaktadır. Kısmen bakır kullanımı mümkün olsa da tamamen ortadan kaldırılması beklenmemektedir." },
        { q: "Gümüş arzı tükenecek mi?", a: "Tükenmesi kısa vadede beklenmemektedir ancak bilinen rezervlerin 20-25 yıl yeteceği tahmin edilmektedir. Geri dönüşüm ve yeni maden keşifleri arzı destekleyecektir. Ancak yapısal açık endişe vericidir." },
        { q: "Altın mı gümüş mü daha iyi yatırım?", a: "Her iki metal de farklı profillere hitap eder. Altın düşük volatilite ve güvenli liman, gümüş ise yüksek büyüme potansiyeli ve endüstriyel talep sunar. Çoğu uzman portföyde her ikisine yer verilmesini önerir." },
      ],
    },
    sources: { heading: "Kaynaklar", items: ["The Silver Institute — \"World Silver Survey 2025\"", "IEA — \"World Energy Outlook 2025\"", "BloombergNEF — \"Electric Vehicle Outlook 2025\"", "CPM Group — \"Silver Yearbook 2025\""] },
    related: { heading: "İlgili Konular", items: [{ title: "Gümüş Yatırım Rehberi", path: "/tr/piyasa/yatirim", cat: "Piyasa" }, { title: "Arz ve Talep", path: "/tr/piyasa/arz-talep", cat: "Piyasa" }, { title: "Fiziksel Özellikler", path: "/tr/bilim/fiziksel-ozellikler", cat: "Bilim" }] },
    sponsor: { text: "Gümüşün geleceğini bugünden keşfedin.", cta: "Instagram'da Gör", note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir." },
    darkMode: "Mod",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Market", "Future of Silver"],
    category: "Market & Investment",
    title: "The Future of Silver",
    subtitle: "Green energy, EVs, and AI — mega-trends shaping silver demand",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "13 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["Silver has transformed from antiquity's money metal into one of the 21st century's most critical industrial raw materials. From solar panels to 5G infrastructure, EVs to medical devices, silver demand is rising rapidly while mining supply struggles to keep pace.", "This article analyzes five mega-trends shaping silver's future — green energy, digitalization, health technologies, supply constraints, and investment demand."] },
      { id: "solar", heading: "Solar Energy: Silver's Biggest Growth Engine", paragraphs: ["Photovoltaic (PV) solar panels are silver's fastest-growing demand sector. Each standard panel contains ~20 grams of silver as conductive paste on the rear contact.", "In 2020, solar energy accounted for ~10% of total silver demand; by 2025, this rose to ~15-20%. IEA projects global solar installed capacity to exceed 5,000 GW by 2030 — meaning 150+ million ounces of annual silver demand.", "Next-gen PV technologies like HJT and TOPCon use even more silver per panel."] },
      { id: "ev", heading: "Electric Vehicles & Autonomous Driving", paragraphs: ["An EV uses 1.5-2× more silver than a conventional vehicle. Silver plays critical roles in battery management systems, charging station contactors, infotainment displays, and ADAS sensors.", "Autonomous driving technologies will further increase per-vehicle silver demand. Annual EV production is expected to exceed 40 million by 2030."] },
      { id: "5g", heading: "5G and IoT Infrastructure", paragraphs: ["5G base stations use silver components for superior high-frequency signal conductivity. Each 5G station is estimated to contain 2-3× more silver than 4G.", "IoT devices are expected to exceed 30 billion by 2030. Each sensor, each connection point, each RFID tag contains micro amounts of silver, but billions of devices create significant aggregate demand."] },
      { id: "health", heading: "Health Technologies", paragraphs: ["COVID-19 dramatically increased interest in silver's antimicrobial properties. Nano-silver coated surfaces, silver ion filters, and antimicrobial textiles are growing markets.", "Wearable health tech leverages silver's biocompatible conductivity. Silver nanowire electrodes form the basis of next-gen flexible sensors."] },
      { id: "supply", heading: "Supply Constraint Risk", paragraphs: ["~70% of silver production is a byproduct of copper, zinc, and lead mining. This means silver supply largely depends on production decisions for other metals.", "Since 2020, the silver market has been in structural deficit. Silver Institute data shows the 2024 deficit reached 215 million ounces.", "New mining projects take 10-15 years from discovery to production. Known reserves are estimated to last 20-25 years at current consumption — making silver a strategic metal."] },
      { id: "investment", heading: "Investment Perspective", paragraphs: ["Silver has a dual character as both industrial metal and store of value. This makes silver attractive during economic expansion (industrial demand) and uncertainty (safe haven) simultaneously.", "The gold/silver ratio (GSR) historical average is ~60, while in 2026 it's ~80 — potentially indicating silver is 'cheap' relative to gold."] },
      { id: "conclusion", heading: "Conclusion: Rise of the 'Green Metal'", paragraphs: ["Silver deserves the title 'green metal' as an indispensable material for the green energy transition, digitalization, and health technologies. As the gap between demand growth and supply constraints widens, silver's strategic importance will continue to grow."] },
    ],
    faq: { heading: "FAQ", items: [{ q: "Can silver be replaced by copper in solar panels?", a: "Research continues but silver's unique conductivity and corrosion resistance make full replacement difficult. Partial copper use is possible but complete elimination is not expected." }, { q: "Will silver supply run out?", a: "Not in the short term, but known reserves are estimated at 20-25 years. Recycling and new discoveries will support supply, but structural deficits are concerning." }] },
    sources: { heading: "Sources", items: ["The Silver Institute — \"World Silver Survey 2025\"", "IEA — \"World Energy Outlook 2025\"", "BloombergNEF — \"Electric Vehicle Outlook 2025\""] },
    related: { heading: "Related Topics", items: [{ title: "Investment Guide", path: "/en/market/investment", cat: "Market" }, { title: "Supply & Demand", path: "/en/market/supply-demand", cat: "Market" }] },
    sponsor: { text: "Discover the future of silver today.", cta: "See on Instagram", note: "This content is sponsored by Istanbul Silver." },
    darkMode: "Mode",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة معرفة الفضة",
    breadcrumb: ["الرئيسية", "السوق", "مستقبل الفضة"],
    category: "السوق والاستثمار",
    title: "مستقبل الفضة",
    subtitle: "الطاقة الخضراء والسيارات الكهربائية والذكاء الاصطناعي — الاتجاهات الكبرى التي تشكل الطلب على الفضة",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٣ دقيقة قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["تحولت الفضة من معدن النقود القديم إلى واحدة من أهم المواد الخام الصناعية في القرن الحادي والعشرين. يرتفع الطلب بسرعة بينما يكافح العرض المنجمي لمواكبته."] },
      { id: "shams", heading: "الطاقة الشمسية: المحرك الأكبر للنمو", paragraphs: ["كل لوح شمسي قياسي يحتوي على ~٢٠ غرام من الفضة كمعجون موصل. في ٢٠٢٥ شكلت الطاقة الشمسية ~١٥-٢٠٪ من إجمالي الطلب على الفضة.", "توقعات وكالة الطاقة الدولية: القدرة المركبة العالمية ستتجاوز ٥٠٠٠ غيغاواط بحلول ٢٠٣٠."] },
      { id: "ard", heading: "مخاطر تقلص العرض", paragraphs: ["~٧٠٪ من إنتاج الفضة منتج ثانوي لتعدين النحاس والزنك والرصاص. منذ ٢٠٢٠ يعاني السوق من عجز هيكلي.", "المشاريع الجديدة تستغرق ١٠-١٥ عاماً من الاكتشاف إلى الإنتاج."] },
    ],
    faq: { heading: "الأسئلة الشائعة", items: [{ q: "هل سينفد عرض الفضة؟", a: "ليس على المدى القصير لكن الاحتياطيات المعروفة تكفي ٢٠-٢٥ عاماً. إعادة التدوير والاكتشافات الجديدة ستدعم العرض." }] },
    sources: { heading: "المصادر", items: ["معهد الفضة — «مسح الفضة العالمي ٢٠٢٥»", "وكالة الطاقة الدولية — «آفاق الطاقة العالمية ٢٠٢٥»"] },
    related: { heading: "مواضيع ذات صلة", items: [{ title: "دليل الاستثمار", path: "/ar/market/investment", cat: "السوق" }] },
    sponsor: { text: "اكتشفوا مستقبل الفضة اليوم.", cta: "شاهد على إنستغرام", note: "هذا المحتوى برعاية إسطنبول للفضة." },
    darkMode: "الوضع",
  },
};

export default function FutureOfSilverArticle() {
  const [lang, setLang] = useState("tr"); const [dark, setDark] = useState(true); const [openFaq, setOpenFaq] = useState(null);
  const t = T[lang]; const isRTL = lang === "ar";
  const bgP = dark?"#0f0f14":"#FAFAF5"; const textP = dark?"#e8e8ec":"#2C2C2C"; const textS = dark?"#9a9aaa":"#6B7280";
  const accent = dark?"#C0C0C0":"#708090"; const gold = "#D4AF37"; const border = dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)";
  const fontD = "'Playfair Display',Georgia,serif"; const fontB = lang==="ar"?"'Noto Naskh Arabic',serif":"'Source Sans 3',sans-serif";
  return (
    <div dir={isRTL?"rtl":"ltr"} style={{ fontFamily:fontB,background:bgP,color:textP,minHeight:"100vh",transition:"background 0.4s" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*{margin:0;padding:0;box-sizing:border-box;}::selection{background:rgba(192,192,192,0.3);}`}</style>
      <nav style={{ position:"sticky",top:0,zIndex:100,background:dark?"rgba(15,15,20,0.88)":"rgba(250,250,245,0.88)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${border}`,padding:"0 24px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between" }}>
        <div style={{ display:"flex",alignItems:"center",gap:8 }}><div style={{ width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#0f0f14",fontFamily:fontD }}>Ag</div><span style={{ fontFamily:fontD,fontWeight:600,fontSize:16 }}>{t.nav}</span></div>
        <div style={{ display:"flex",alignItems:"center",gap:12 }}>
          <div style={{ display:"flex",gap:2,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)",borderRadius:7,padding:2 }}>{["tr","en","ar"].map(l=><button key={l} onClick={()=>setLang(l)} style={{ border:"none",cursor:"pointer",padding:"3px 9px",borderRadius:5,fontSize:11,fontWeight:lang===l?600:400,fontFamily:l==="ar"?"'Noto Naskh Arabic',serif":fontB,background:lang===l?(dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.08)"):"transparent",color:lang===l?textP:textS }}>{l==="ar"?"عر":l.toUpperCase()}</button>)}</div>
          <button onClick={()=>setDark(!dark)} style={{ border:"none",cursor:"pointer",background:"transparent",color:textS,fontSize:16,padding:4 }}>{dark?"☀️":"🌙"}</button>
        </div>
      </nav>
      <div style={{ maxWidth:760,margin:"0 auto",padding:"16px 24px 0",display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",fontSize:12,color:textS }}>{t.breadcrumb.map((item,i)=><span key={i} style={{ display:"flex",alignItems:"center",gap:6 }}>{i>0&&<span style={{ opacity:0.4 }}>{isRTL?"‹":"›"}</span>}<a href="#" style={{ color:i===t.breadcrumb.length-1?textP:textS,textDecoration:"none",fontWeight:i===t.breadcrumb.length-1?500:400 }}>{item}</a></span>)}</div>
      <article style={{ maxWidth:760,margin:"0 auto",padding:"32px 24px 64px",animation:"fadeUp 0.6s ease both" }}>
        <div style={{ marginBottom:36 }}>
          <div style={{ display:"inline-block",padding:"3px 12px",borderRadius:6,fontSize:11,fontWeight:600,letterSpacing:"0.04em",color:gold,border:`1px solid ${gold}33`,marginBottom:16 }}>{t.category}</div>
          <h1 style={{ fontFamily:fontD,fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.15,marginBottom:12 }}>{t.title}</h1>
          <p style={{ fontSize:16,color:textS,lineHeight:1.6,marginBottom:20 }}>{t.subtitle}</p>
          <div style={{ display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",fontSize:13,color:textS,paddingBottom:20,borderBottom:`1px solid ${border}` }}><span>{t.meta.author}</span><span style={{ opacity:0.3 }}>·</span><span>{t.meta.date}</span><span style={{ opacity:0.3 }}>·</span><span>{t.meta.readTime}</span></div>
        </div>
        {t.sections.map(sec=><section key={sec.id} style={{ marginBottom:40 }}>{sec.heading&&<h2 style={{ fontFamily:fontD,fontSize:22,fontWeight:600,marginBottom:16,color:accent }}>{sec.heading}</h2>}{sec.paragraphs.map((p,j)=><p key={j} style={{ fontSize:15.5,lineHeight:1.85,color:textP,marginBottom:14,opacity:0.92 }}>{p}</p>)}</section>)}
        {t.faq&&<section style={{ marginTop:48,marginBottom:40 }}><h2 style={{ fontFamily:fontD,fontSize:22,fontWeight:600,marginBottom:20,color:accent }}>{t.faq.heading}</h2>{t.faq.items.map((item,i)=><div key={i} style={{ marginBottom:8,borderRadius:10,border:`1px solid ${border}`,overflow:"hidden" }}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{ width:"100%",textAlign:isRTL?"right":"left",padding:"14px 18px",background:openFaq===i?(dark?"rgba(192,192,192,0.05)":"rgba(192,192,192,0.08)"):"transparent",border:"none",cursor:"pointer",fontSize:14,fontWeight:500,color:textP,display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:fontB }}><span>{item.q}</span><span style={{ transform:openFaq===i?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s",fontSize:12,color:textS }}>▼</span></button>{openFaq===i&&<div style={{ padding:"0 18px 16px",fontSize:14,lineHeight:1.7,color:textS }}>{item.a}</div>}</div>)}</section>}
        <section style={{ marginBottom:40 }}><h2 style={{ fontFamily:fontD,fontSize:18,fontWeight:600,marginBottom:12,color:accent }}>{t.sources.heading}</h2>{t.sources.items.map((s,i)=><div key={i} style={{ fontSize:13,color:textS,padding:"6px 0",borderBottom:`1px solid ${border}` }}>{i+1}. {s}</div>)}</section>
        <section style={{ marginBottom:40 }}><h2 style={{ fontFamily:fontD,fontSize:18,fontWeight:600,marginBottom:12,color:accent }}>{t.related.heading}</h2><div style={{ display:"flex",gap:12,flexWrap:"wrap" }}>{t.related.items.map((r,i)=><a key={i} href={r.path} style={{ padding:"10px 16px",borderRadius:8,border:`1px solid ${border}`,textDecoration:"none",color:textP,fontSize:13,fontWeight:500,background:dark?"rgba(192,192,192,0.03)":"rgba(192,192,192,0.06)" }}><span style={{ fontSize:10,color:gold,marginRight:6 }}>{r.cat}</span>{r.title}</a>)}</div></section>
        <div style={{ background:`linear-gradient(135deg,${dark?"rgba(212,175,55,0.06)":"rgba(212,175,55,0.08)"},transparent)`,borderRadius:14,padding:24,textAlign:"center",border:`1px solid ${gold}22` }}><p style={{ fontSize:14,color:textS,marginBottom:12 }}>{t.sponsor.text}</p><a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{ display:"inline-block",padding:"10px 28px",borderRadius:8,background:`linear-gradient(135deg,${gold},#c9a227)`,color:"#0f0f14",fontWeight:600,fontSize:14,textDecoration:"none" }}>{t.sponsor.cta}</a><p style={{ fontSize:11,color:textS,marginTop:10,opacity:0.6 }}>{t.sponsor.note}</p></div>
      </article>
      <footer style={{ borderTop:`1px solid ${border}`,padding:"24px",textAlign:"center",fontSize:12,color:textS }}>© 2026 SilverAtlas · {t.meta.author}</footer>
    </div>
  );
}
