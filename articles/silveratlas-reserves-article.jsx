import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Maden", "Gümüş Rezervleri"],
    category: "Madencilik",
    title: "Dünya Gümüş Rezervleri ve Üretimi",
    subtitle: "Ülke bazlı gümüş madeni verileri, kanıtlanmış rezervler ve yıllık üretim istatistikleri",
    meta: { author: "Turan Erbaş", date: "15 Nisan 2026", readTime: "9 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Gümüş, dünya genelinde 50'den fazla ülkede çıkarılmaktadır ancak üretimin büyük bölümü bir avuç ülkede yoğunlaşmıştır. 2024 verilerine göre dünya yıllık gümüş madeni üretimi yaklaşık 26.000 ton (836 milyon troy ons) seviyesindedir.",
        "Küresel kanıtlanmış gümüş rezervi yaklaşık 530.000 ton olup, mevcut üretim hızıyla yaklaşık 20 yıllık ömre sahiptir. Ancak keşif çalışmaları, geri dönüşüm ve ikincil üretim bu süreyi uzatabilir.",
      ]},
      { id: "top10", heading: "En Büyük 10 Gümüş Üreticisi", paragraphs: [
        "Aşağıdaki grafik, 2024 yılı itibarıyla dünyanın en büyük gümüş üretici ülkelerini göstermektedir:",
      ], widget: "barChart" },
      { id: "rezervler", heading: "Kanıtlanmış Rezervler", paragraphs: [
        "Kanıtlanmış rezerv, ekonomik olarak çıkarılabilir gümüş miktarını ifade eder. Peru ve Polonya, rezerv bazında dünya liderliğini paylaşmaktadır. Avustralya ve Çin de önemli rezervlere sahiptir.",
      ], table: {
        headers: ["Ülke", "Rezerv (ton)", "Dünya Payı", "Ömür (yıl)"],
        rows: [
          ["Peru", "98.000", "%18,5", "~17"],
          ["Polonya", "85.000", "%16,0", "~61"],
          ["Avustralya", "89.000", "%16,8", "~74"],
          ["Rusya", "45.000", "%8,5", "~30"],
          ["Çin", "71.000", "%13,4", "~21"],
          ["Meksika", "37.000", "%7,0", "~6"],
          ["Şili", "26.000", "%4,9", "~20"],
          ["ABD", "23.000", "%4,3", "~23"],
          ["Bolivya", "22.000", "%4,2", "~17"],
          ["Türkiye", "6.400", "%1,2", "~15"],
          ["Diğer", "27.600", "%5,2", "—"],
        ],
      }},
      { id: "turkiye", heading: "Türkiye'nin Gümüş Madenciliği", paragraphs: [
        "Türkiye, tarihî gümüş madenciliği geleneğine sahip olmasına rağmen, modern üretimde dünya sıralamasında 15-20. aralığında yer almaktadır. Yıllık üretimi yaklaşık 430 ton civarındadır.",
        "Başlıca gümüş madeni sahaları: Gümüşhane (adını gümüşten alır), Artvin-Çerattepe, Erzincan-İliç (altın-gümüş), Balıkesir-Sındırgı ve Kütahya-Emet. Türkiye'deki gümüş büyük ölçüde bakır ve kurşun-çinko madenciliğinin yan ürünü olarak elde edilmektedir.",
        "Gümüşhane ili, adını Osmanlı dönemindeki yoğun gümüş madenciliğinden almıştır. Bölgedeki antik madenlerin bazıları Hitit dönemine kadar uzanır.",
      ]},
      { id: "tedarik", heading: "Tedarik ve Talep Dengesi", paragraphs: [
        "Dünya gümüş talebinin yaklaşık %50'si endüstriyel kullanım (elektronik, güneş paneli, tıp), %25'i takı, %15'i yatırım (külçe ve sikke) ve %10'u gümüş eşya üretimi tarafından karşılanır.",
        "Güneş enerjisi sektörünün hızlı büyümesi, gümüş talebini artıran en önemli faktördür. Tek bir güneş paneli 10-20 gram gümüş içerir ve küresel güneş paneli kurulumları her yıl artmaktadır. 2030'a kadar güneş enerjisi sektörünün yıllık 150 milyon ons gümüş tüketmesi beklenmektedir.",
        "Bu talep artışı, mevcut maden üretimi ve geri dönüşümle karşılanamayabilir — 'peak silver' (gümüş zirvesi) tartışmalarını gündeme getirmektedir.",
      ]},
      { id: "gelecek", heading: "Gelecek Projeksiyonları", paragraphs: [
        "Gümüş madenciliğinin geleceği birkaç faktöre bağlıdır: yeni maden keşifleri (özellikle derin deniz madenciliği potansiyeli), geri dönüşüm teknolojilerinin gelişimi, ikame malzemelerin bulunması (bakır nano-partiküller gibi) ve enerji dönüşümü senaryoları.",
        "Silver Institute projeksiyonlarına göre, 2030'a kadar yıllık gümüş talebi 1,2 milyar troy ons'u aşabilir — bu, mevcut üretim kapasitesinin %40 üzerindedir. Bu durum hem fiyatları hem de geri dönüşüm endüstrisini doğrudan etkileyecektir.",
      ]},
    ],
    faq: { title: "Sık Sorulan Sorular", items: [
      { q: "Dünyada ne kadar gümüş kaldı?", a: "Kanıtlanmış küresel rezerv yaklaşık 530.000 ton. Mevcut üretim hızıyla ~20 yıl yeterlidir, ancak yeni keşifler ve geri dönüşüm bu süreyi uzatabilir." },
      { q: "Gümüş neden altından daha nadir değil?", a: "Yer kabuğunda gümüş altından ~19 kat daha fazladır. Ancak endüstriyel tüketim nedeniyle yüzey üstü stoklar altına göre çok daha düşüktür." },
      { q: "Türkiye'de gümüş yatırımı yapılabilir mi?", a: "Evet — Borsa İstanbul'da gümüş sertifikaları, bankalarda gümüş hesapları ve fiziksel gümüş külçe/sikke satın alınabilir." },
    ]},
    cta: { title: "925 Ayar Gümüş Takılar", text: "İstanbul Gümüş, dünya standartlarında rafinasyon sürecinden geçmiş 925 ayar gümüşle üretim yapmaktadır.", button: "Koleksiyonu Keşfet" },
    footer: { copyright: "© 2026 SilverAtlas.org — Turan Erbaş tarafından hazırlanmıştır.", sponsor: "İstanbul Gümüş sponsorluğundadır", links: ["Hakkımızda", "Makaleler", "İletişim"] },
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Encyclopedia",
    breadcrumb: ["Home", "Mining", "Silver Reserves"],
    category: "Mining",
    title: "World Silver Reserves and Production",
    subtitle: "Country-level silver mine data, proven reserves, and annual production statistics",
    meta: { author: "Turan Erbaş", date: "April 15, 2026", readTime: "9 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Silver is mined in over 50 countries worldwide, but production is concentrated in a handful of nations. According to 2024 data, annual world silver mine production is approximately 26,000 tonnes (836 million troy ounces).",
        "Global proven silver reserves total about 530,000 tonnes — roughly 20 years' supply at current production rates. However, exploration, recycling, and secondary production could extend this timeline.",
      ]},
      { id: "top10", heading: "Top 10 Silver Producers", paragraphs: [
        "The chart below shows the world's largest silver-producing countries as of 2024:",
      ], widget: "barChart" },
      { id: "rezervler", heading: "Proven Reserves", paragraphs: [
        "Proven reserves refer to the amount of economically extractable silver. Peru and Poland share world leadership in reserves. Australia and China also hold significant reserves.",
      ], table: {
        headers: ["Country", "Reserve (tonnes)", "World Share", "Life (years)"],
        rows: [
          ["Peru", "98,000", "18.5%", "~17"],
          ["Poland", "85,000", "16.0%", "~61"],
          ["Australia", "89,000", "16.8%", "~74"],
          ["Russia", "45,000", "8.5%", "~30"],
          ["China", "71,000", "13.4%", "~21"],
          ["Mexico", "37,000", "7.0%", "~6"],
          ["Chile", "26,000", "4.9%", "~20"],
          ["USA", "23,000", "4.3%", "~23"],
          ["Bolivia", "22,000", "4.2%", "~17"],
          ["Turkey", "6,400", "1.2%", "~15"],
          ["Others", "27,600", "5.2%", "—"],
        ],
      }},
      { id: "turkiye", heading: "Turkey's Silver Mining", paragraphs: [
        "Despite its historical silver mining tradition, Turkey ranks 15th-20th globally in modern production, with annual output around 430 tonnes.",
        "Major silver mining sites include Gümüşhane (named after silver), Artvin-Çerattepe, Erzincan-İliç, Balıkesir-Sındırgı, and Kütahya-Emet. Most of Turkey's silver is a by-product of copper and lead-zinc mining.",
      ]},
      { id: "tedarik", heading: "Supply and Demand Balance", paragraphs: [
        "Approximately 50% of world silver demand comes from industrial use (electronics, solar panels, medicine), 25% from jewelry, 15% from investment (bullion and coins), and 10% from silverware.",
        "The rapid growth of solar energy is the most significant factor driving silver demand. A single solar panel contains 10-20 grams of silver. By 2030, the solar sector is expected to consume 150 million ounces annually.",
        "This demand growth may not be met by current mine production and recycling — fueling 'peak silver' debates.",
      ]},
      { id: "gelecek", heading: "Future Projections", paragraphs: [
        "The future of silver mining depends on several factors: new discoveries (including deep-sea mining potential), recycling technology advancement, finding substitute materials, and energy transition scenarios.",
        "According to Silver Institute projections, annual silver demand may exceed 1.2 billion troy ounces by 2030 — 40% above current production capacity.",
      ]},
    ],
    faq: { title: "FAQ", items: [
      { q: "How much silver is left in the world?", a: "Proven global reserves total about 530,000 tonnes — roughly 20 years at current production rates. New discoveries and recycling could extend this." },
      { q: "Why isn't silver rarer than gold?", a: "Silver is ~19 times more abundant than gold in Earth's crust. However, above-ground stocks are much lower due to industrial consumption." },
    ]},
    cta: { title: "925 Sterling Silver Jewelry", text: "Istanbul Silver crafts with world-standard refined 925 sterling silver.", button: "Explore Collection" },
    footer: { copyright: "© 2026 SilverAtlas.org — Created by Turan Erbaş.", sponsor: "Sponsored by Istanbul Silver", links: ["About", "Articles", "Contact"] },
  },
  ar: {
    nav: "SilverAtlas", navSub: "موسوعة الفضة",
    breadcrumb: ["الرئيسية", "التعدين", "احتياطيات الفضة"],
    category: "التعدين",
    title: "احتياطيات الفضة العالمية والإنتاج",
    subtitle: "بيانات مناجم الفضة على مستوى الدول والاحتياطيات المؤكدة وإحصائيات الإنتاج السنوي",
    meta: { author: "توران إرباش", date: "١٥ أبريل ٢٠٢٦", readTime: "٩ دقائق قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "تُستخرج الفضة في أكثر من ٥٠ دولة حول العالم، لكن الإنتاج يتركز في حفنة من الدول. يبلغ الإنتاج العالمي السنوي حوالي ٢٦.٠٠٠ طن (٨٣٦ مليون أونصة تروي).",
        "يبلغ إجمالي الاحتياطي المؤكد حوالي ٥٣٠.٠٠٠ طن — ما يكفي لحوالي ٢٠ عاماً بمعدلات الإنتاج الحالية.",
      ]},
      { id: "top10", heading: "أكبر ١٠ منتجين للفضة", paragraphs: [
        "يوضح الرسم البياني أدناه أكبر الدول المنتجة للفضة:",
      ], widget: "barChart" },
    ],
    faq: { title: "الأسئلة الشائعة", items: [
      { q: "كم بقي من الفضة في العالم؟", a: "الاحتياطي العالمي المؤكد حوالي ٥٣٠.٠٠٠ طن — يكفي لنحو ٢٠ عاماً بمعدلات الإنتاج الحالية." },
    ]},
    cta: { title: "مجوهرات فضة عيار ٩٢٥", text: "إسطنبول للفضة تصنع بفضة عيار ٩٢٥ مكررة وفق معايير عالمية.", button: "استكشف المجموعة" },
    footer: { copyright: "© ٢٠٢٦ SilverAtlas.org — إعداد توران إرباش", sponsor: "برعاية إسطنبول للفضة", links: ["حول", "مقالات", "اتصل"] },
  },
};

const S="#C0C0C0",DS="#708090",NV="#1a1a2e",GA="#D4AF37";
const FH="'Playfair Display',Georgia,serif",FB="'Source Sans 3','Segoe UI',sans-serif";
const FA="'Noto Naskh Arabic','Traditional Arabic',serif",FM="'JetBrains Mono','Fira Code',monospace";

const BarChartWidget = ({ lang, dark }) => {
  const [hover, setHover] = useState(null);
  const data = [
    { country: { tr: "Meksika", en: "Mexico", ar: "المكسيك" }, tons: 6300, flag: "🇲🇽" },
    { country: { tr: "Çin", en: "China", ar: "الصين" }, tons: 3400, flag: "🇨🇳" },
    { country: { tr: "Peru", en: "Peru", ar: "بيرو" }, tons: 3100, flag: "🇵🇪" },
    { country: { tr: "Polonya", en: "Poland", ar: "بولندا" }, tons: 1400, flag: "🇵🇱" },
    { country: { tr: "Şili", en: "Chile", ar: "تشيلي" }, tons: 1300, flag: "🇨🇱" },
    { country: { tr: "Avustralya", en: "Australia", ar: "أستراليا" }, tons: 1200, flag: "🇦🇺" },
    { country: { tr: "Rusya", en: "Russia", ar: "روسيا" }, tons: 1200, flag: "🇷🇺" },
    { country: { tr: "Bolivya", en: "Bolivia", ar: "بوليفيا" }, tons: 1100, flag: "🇧🇴" },
    { country: { tr: "ABD", en: "USA", ar: "الولايات المتحدة" }, tons: 1000, flag: "🇺🇸" },
    { country: { tr: "Türkiye", en: "Turkey", ar: "تركيا" }, tons: 430, flag: "🇹🇷" },
  ];
  const maxTons = Math.max(...data.map(d => d.tons));

  return (
    <div style={{ margin: "2rem 0" }}>
      {data.map((d, i) => (
        <div key={i}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(null)}
          style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            marginBottom: "0.5rem", cursor: "default",
          }}>
          <div style={{ width: 30, textAlign: "center", fontSize: "1.2rem" }}>{d.flag}</div>
          <div style={{
            width: 85, fontFamily: FB, fontSize: "0.85rem", fontWeight: 600,
            color: dark ? (i === 9 ? GA : S) : (i === 9 ? GA : NV),
            textAlign: lang === "ar" ? "right" : "left",
          }}>{d.country[lang] || d.country.tr}</div>
          <div style={{ flex: 1, position: "relative", height: 28 }}>
            <div style={{
              width: `${(d.tons / maxTons) * 100}%`,
              height: "100%",
              borderRadius: "0 6px 6px 0",
              background: i === 9
                ? `linear-gradient(90deg, ${GA}, ${GA}cc)`
                : (hover === i
                  ? `linear-gradient(90deg, ${S}88, ${S}55)`
                  : `linear-gradient(90deg, ${S}55, ${S}33)`),
              transition: "all 0.3s ease",
              display: "flex", alignItems: "center",
              paddingLeft: "0.5rem",
            }}>
              <span style={{
                fontFamily: FM, fontSize: "0.75rem", fontWeight: 700,
                color: dark ? "#fff" : NV,
              }}>
                {d.tons.toLocaleString()} t
              </span>
            </div>
          </div>
        </div>
      ))}
      <div style={{
        marginTop: "1rem", fontFamily: FM, fontSize: "0.7rem",
        color: dark ? "#666" : "#999", textAlign: "center",
      }}>
        {lang === "tr" ? "Kaynak: USGS / Silver Institute, 2024 verileri" :
         lang === "ar" ? "المصدر: USGS / Silver Institute، بيانات ٢٠٢٤" :
         "Source: USGS / Silver Institute, 2024 data"}
      </div>
    </div>
  );
};

export default function SilverAtlasReserves() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [faqOpen, setFaqOpen] = useState(null);
  const t = T[lang]; const isRTL = lang==="ar"; const bf = isRTL?FA:FB;
  const bg=dark?"linear-gradient(180deg,#0d0d1a 0%,#1a1a2e 40%,#16213e 100%)":"linear-gradient(180deg,#f8f9fa 0%,#e8e8e8 100%)";
  const tc=dark?"#e0e0e0":"#2c2c2c",mc=dark?"#999":"#666",cb=dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)",bc=dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.1)";

  return (
    <div style={{minHeight:"100vh",background:bg,direction:isRTL?"rtl":"ltr"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Sans+3:wght@300;400;600;700&family=Noto+Naskh+Arabic:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap');*{margin:0;padding:0;box-sizing:border-box;}`}</style>

      <nav style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1rem 2rem",borderBottom:`1px solid ${bc}`,background:dark?"rgba(13,13,26,0.95)":"rgba(255,255,255,0.95)",backdropFilter:"blur(10px)",position:"sticky",top:0,zIndex:100}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
          <div style={{fontSize:"1.8rem",fontFamily:FH,fontWeight:900,background:`linear-gradient(135deg,${S},${GA})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Ag</div>
          <div><div style={{fontFamily:FH,fontWeight:700,fontSize:"1.1rem",color:dark?S:NV}}>{t.nav}</div><div style={{fontFamily:bf,fontSize:"0.7rem",color:mc}}>{t.navSub}</div></div>
        </div>
        <div style={{display:"flex",gap:"0.5rem",alignItems:"center"}}>
          {["TR","EN","AR"].map(l=>(<button key={l} onClick={()=>setLang(l.toLowerCase())} style={{padding:"0.3rem 0.6rem",borderRadius:"6px",border:`1px solid ${lang===l.toLowerCase()?GA:bc}`,background:lang===l.toLowerCase()?`${GA}22`:"transparent",color:lang===l.toLowerCase()?GA:mc,cursor:"pointer",fontFamily:FM,fontSize:"0.75rem",fontWeight:700}}>{l}</button>))}
          <button onClick={()=>setDark(!dark)} style={{padding:"0.3rem 0.6rem",borderRadius:"6px",border:`1px solid ${bc}`,background:"transparent",color:mc,cursor:"pointer",fontSize:"1rem"}}>{dark?"☀️":"🌙"}</button>
        </div>
      </nav>

      <div style={{padding:"0.75rem 2rem",fontFamily:bf,fontSize:"0.85rem",color:mc,maxWidth:900,margin:"0 auto"}}>
        {t.breadcrumb.map((b,i)=>(<span key={i}>{i>0&&<span style={{margin:"0 0.5rem",color:DS}}>/</span>}<span style={{color:i===t.breadcrumb.length-1?GA:mc}}>{b}</span></span>))}
      </div>

      <header style={{maxWidth:900,margin:"0 auto",padding:"2rem 2rem 1rem",textAlign:isRTL?"right":"left"}}>
        <div style={{display:"inline-block",padding:"0.3rem 1rem",borderRadius:"20px",background:`${GA}22`,color:GA,fontFamily:FM,fontSize:"0.8rem",fontWeight:700,marginBottom:"1rem",border:`1px solid ${GA}44`}}>{t.category}</div>
        <h1 style={{fontFamily:FH,fontSize:"clamp(2rem,5vw,2.8rem)",fontWeight:900,color:dark?"#fff":NV,lineHeight:1.2,marginBottom:"0.75rem"}}>{t.title}</h1>
        <p style={{fontFamily:bf,fontSize:"1.15rem",color:DS,lineHeight:1.6,marginBottom:"1.5rem"}}>{t.subtitle}</p>
        <div style={{display:"flex",gap:"1.5rem",fontFamily:FM,fontSize:"0.8rem",color:mc,flexWrap:"wrap"}}>
          <span>✍️ {t.meta.author}</span><span>📅 {t.meta.date}</span><span>⏱️ {t.meta.readTime}</span>
        </div>
      </header>

      <main style={{maxWidth:900,margin:"0 auto",padding:"2rem"}}>
        {t.sections.map(s=>(
          <section key={s.id} style={{marginBottom:"3rem"}}>
            {s.heading&&<h2 style={{fontFamily:FH,fontSize:"1.6rem",fontWeight:700,color:dark?S:NV,marginBottom:"1rem",borderBottom:`2px solid ${GA}`,paddingBottom:"0.5rem"}}>{s.heading}</h2>}
            {s.paragraphs?.map((p,i)=>(<p key={i} style={{fontFamily:bf,fontSize:"1.05rem",lineHeight:1.85,color:tc,marginBottom:"1rem",textAlign:isRTL?"right":"justify"}}>{p}</p>))}
            {s.widget==="barChart"&&<BarChartWidget lang={lang} dark={dark} />}
            {s.table&&(
              <div style={{overflowX:"auto",margin:"1.5rem 0"}}>
                <table style={{width:"100%",borderCollapse:"collapse",fontFamily:FB,fontSize:"0.9rem"}}>
                  <thead><tr>{s.table.headers.map((h,i)=>(<th key={i} style={{padding:"0.75rem",background:dark?"rgba(192,192,192,0.1)":"rgba(26,26,46,0.08)",color:dark?S:NV,fontWeight:700,textAlign:isRTL?"right":"left",borderBottom:`2px solid ${GA}`,whiteSpace:"nowrap"}}>{h}</th>))}</tr></thead>
                  <tbody>{s.table.rows.map((row,ri)=>(<tr key={ri} style={{background:ri%2===0?"transparent":(dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)")}}>{row.map((c,ci)=>(<td key={ci} style={{padding:"0.6rem 0.75rem",color:tc,borderBottom:`1px solid ${bc}`,textAlign:isRTL?"right":"left",fontFamily:ci>=1?FM:FB}}>{c}</td>))}</tr>))}</tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        {t.faq&&<section style={{marginTop:"3rem"}}>
          <h2 style={{fontFamily:FH,fontSize:"1.6rem",fontWeight:700,color:dark?S:NV,marginBottom:"1.5rem",borderBottom:`2px solid ${GA}`,paddingBottom:"0.5rem"}}>{t.faq.title}</h2>
          {t.faq.items.map((item,i)=>(<div key={i} style={{marginBottom:"0.75rem",border:`1px solid ${bc}`,borderRadius:"10px",overflow:"hidden"}}>
            <button onClick={()=>setFaqOpen(faqOpen===i?null:i)} style={{width:"100%",padding:"1rem 1.25rem",display:"flex",justifyContent:"space-between",alignItems:"center",background:cb,border:"none",cursor:"pointer",fontFamily:bf,fontSize:"1rem",fontWeight:600,color:dark?"#e0e0e0":NV,textAlign:isRTL?"right":"left"}}>
              <span>{item.q}</span><span style={{transform:faqOpen===i?"rotate(45deg)":"rotate(0deg)",transition:"transform 0.3s",fontSize:"1.3rem",color:GA,flexShrink:0}}>+</span>
            </button>
            {faqOpen===i&&<div style={{padding:"1rem 1.25rem",fontFamily:bf,fontSize:"0.95rem",lineHeight:1.7,color:mc,background:dark?"rgba(0,0,0,0.2)":"rgba(255,255,255,0.5)",borderTop:`1px solid ${bc}`}}>{item.a}</div>}
          </div>))}
        </section>}

        <div style={{margin:"3rem 0",padding:"2rem",borderRadius:"16px",background:`linear-gradient(135deg,${NV},#16213e)`,border:`1px solid ${GA}44`,textAlign:"center"}}>
          <div style={{fontFamily:FH,fontSize:"1.3rem",fontWeight:700,color:S,marginBottom:"0.75rem"}}>{t.cta.title}</div>
          <p style={{fontFamily:bf,fontSize:"0.95rem",color:"#999",maxWidth:500,margin:"0 auto 1.25rem"}}>{t.cta.text}</p>
          <a href="https://www.istanbulgumus.com" target="_blank" rel="noopener noreferrer" style={{display:"inline-block",padding:"0.75rem 2rem",borderRadius:"30px",background:`linear-gradient(135deg,${GA},#c4972a)`,color:NV,fontFamily:FH,fontWeight:700,fontSize:"0.95rem",textDecoration:"none"}}>{t.cta.button}</a>
          <div style={{display:"flex",justifyContent:"center",gap:"1rem",marginTop:"1rem"}}>
            {["@istanbulgumustr","@istanbulgumuscom","@istanbulgumusmen"].map(h=>(<span key={h} style={{fontFamily:FM,fontSize:"0.75rem",color:DS}}>{h}</span>))}
          </div>
        </div>
      </main>

      <footer style={{padding:"2rem",borderTop:`1px solid ${bc}`,textAlign:"center",fontFamily:bf,fontSize:"0.85rem",color:mc}}>
        <div style={{marginBottom:"0.5rem"}}>{t.footer.copyright}</div>
        <div style={{color:GA,marginBottom:"0.75rem"}}>{t.footer.sponsor}</div>
        <div style={{display:"flex",justifyContent:"center",gap:"1.5rem"}}>{t.footer.links.map(l=>(<span key={l} style={{cursor:"pointer",color:DS}}>{l}</span>))}</div>
      </footer>
    </div>
  );
}
