import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Maden", "Çevresel Etki"],
    category: "Madencilik",
    title: "Gümüş Madenciliğinin Çevresel Etkisi",
    subtitle: "Karbon ayak izi, su tüketimi, ekosistem bozulması ve sürdürülebilir madencilik çözümleri",
    meta: { author: "Turan Erbaş", date: "15 Nisan 2026", readTime: "10 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Gümüş madenciliği, diğer metal madenciliği faaliyetleri gibi çevresel maliyetler taşır: arazi bozulması, su kirliliği, enerji tüketimi ve atık yönetimi başlıca sorunlardır. Bir troy ons gümüş üretmek için ortalama 7-10 ton kaya çıkarılmalı ve işlenmelidir.",
        "Ancak gümüş madenciliğinin önemli bir farkı vardır: üretimin %70'i bakır, kurşun-çinko ve altın madenciliğinin yan ürünüdür. Bu durum, gümüşün çevresel maliyetinin büyük bölümünü birincil metal üretimi ile paylaşılmasını sağlar — ama sorumluluktan tamamen kurtarmaz.",
      ]},
      { id: "karbon", heading: "Karbon Ayak İzi", paragraphs: [
        "Bir kilogram gümüş üretiminin karbon ayak izi ortalama 104 kg CO₂ eşdeğeridir — altına kıyasla (16.000 kg CO₂/kg) çok daha düşük, bakıra kıyasla (3,5 kg CO₂/kg) ise çok daha yüksektir. Ancak bu rakamlar, gümüşün yan ürün olarak üretildiği durumda önemli ölçüde azalır.",
        "Enerji tüketiminin büyük bölümü kırma-öğütme (%35-40) ve eritme-rafinasyon (%25-30) aşamalarında gerçekleşir. Yenilenebilir enerji kaynaklarına geçiş, madenlerin karbon ayak izini %60'a kadar azaltabilir.",
      ]},
      { id: "su", heading: "Su Tüketimi ve Kirliliği", paragraphs: [
        "Madencilik, özellikle kurak bölgelerde su kaynaklarını ciddi şekilde etkiler. Flotasyon sürecinde ton başına 2-5 m³ su kullanılır. Asit maden drenajı (AMD), sülfürlü cevherlerin oksidasyonu sonucu oluşan asidik sızıntı suyu, nehir ve yeraltı sularını on yıllar boyunca kirletebilir.",
        "Siyanür liçi — bazı gümüş-altın madenlerinde kullanılan bir yöntem — kontrollü ortamda bile çevresel risk taşır. Romanya'daki Baia Mare kazası (2000) ve benzeri olaylar, siyanür kullanımına karşı küresel kamuoyu tepkisine yol açmıştır.",
      ]},
      { id: "ekosistem", heading: "Ekosistem ve Biyoçeşitlilik", paragraphs: [
        "Açık ocak madenciliği büyük arazi alanlarını kalıcı olarak dönüştürür. Ormansızlaşma, habitat kaybı ve toprak erozyonu başlıca etkilerdir. Peru'nun And Dağları'ndaki gümüş madenleri, Amazon havzasının yukarı kollarını tehdit etmektedir.",
        "Türkiye'deki çevresel tartışmalar da bu bağlamda önemlidir: Erzincan-İliç altın-gümüş madenindeki siyanür havuzu olayı (2024) madencilik güvenliği konusunu ulusal gündemin en üst sıralarına taşımıştır.",
      ]},
      { id: "metrikler", heading: "Çevresel Etki Metrikleri", paragraphs: [
        "Farklı metallerin çevresel etkilerini karşılaştıran temel metrikler:",
      ], table: {
        headers: ["Metrik", "Gümüş", "Altın", "Bakır", "Alüminyum"],
        rows: [
          ["CO₂ (kg/kg metal)", "104", "16.000", "3,5", "8,0"],
          ["Su tüketimi (m³/kg)", "130", "260.000", "50", "7"],
          ["Atık kaya (ton/kg)", "7-10", "500.000", "200", "5"],
          ["Enerji (MJ/kg)", "1.500", "200.000", "33", "170"],
          ["Geri dönüşüm oranı", "%30", "%90+", "%80+", "%75"],
        ],
      }},
      { id: "surdurulebilir", heading: "Sürdürülebilir Madencilik Çözümleri", paragraphs: [
        "Madencilik sektöründe sürdürülebilirlik çalışmaları hız kazanmıştır. Başlıca yaklaşımlar şunlardır: kapalı devre su sistemleri (%90 su geri kazanımı), yenilenebilir enerji entegrasyonu (güneş ve rüzgar ile maden elektriği), biyolojik liç (asit ve siyanür yerine mikrobiyolojik ayrıştırma), kuru atık depolama (konvansiyonel atık barajları yerine), rehabilitasyon programları (maden sonrası arazi onarımı ve yeniden ağaçlandırma).",
        "Fair Trade ve Responsible Mining sertifikaları, çevresel ve sosyal standartları taahhüt eden madenleri belirlemektedir. Tüketiciler, sertifikalı kaynaklardan gelen gümüşü tercih ederek sürdürülebilir madenciliği destekleyebilir.",
      ]},
      { id: "geri-donusum", heading: "Geri Dönüşümün Rolü", paragraphs: [
        "Gümüş geri dönüşümü, birincil madenciliğe kıyasla %80 daha az enerji tüketir ve karbon emisyonunu büyük ölçüde azaltır. 2024'te küresel gümüş arzının yaklaşık %20'si geri dönüşümden karşılanmıştır.",
        "Başlıca geri dönüşüm kaynakları: elektronik atıklar (devre kartları, konektörler), fotoğraf endüstrisi artıkları, endüstriyel katalitörler, eski takı ve gümüş eşya. Kentsel madencilik (urban mining) kavramı, şehirlerdeki e-atık birikiminden metal kazanımını ifade eder ve giderek önem kazanmaktadır.",
        "İstanbul Gümüş gibi markalar, geri dönüştürülmüş gümüş kullanımını artırarak sürdürülebilirlik taahhüdünü güçlendirmektedir.",
      ]},
    ],
    faq: { title: "Sık Sorulan Sorular", items: [
      { q: "Gümüş madenciliği altın madenciliğinden daha mı çevreci?", a: "Ton başına çok daha düşük etkiye sahiptir. Ancak gümüşün %70'i yan ürün olarak çıktığı için karşılaştırma karmaşıktır — gümüşün çevresel maliyeti birincil metalle paylaşılır." },
      { q: "Geri dönüşüm gümüşü saf mı?", a: "Evet — doğru rafinasyon ile geri dönüşüm gümüşü madenden çıkan gümüşle aynı saflıkta (%99,9+) elde edilir." },
      { q: "Tüketici olarak ne yapabilirim?", a: "Geri dönüştürülmüş gümüş kullanan markaları tercih edin, Responsible Mining sertifikalı ürünlere yönelin ve takılarınızı uzun süre kullanarak atığı azaltın." },
    ]},
    cta: { title: "Sürdürülebilir 925 Ayar Gümüş", text: "İstanbul Gümüş, sorumlu kaynaklardan temin edilen 925 ayar gümüşle üretim yapmaktadır.", button: "Koleksiyonu Keşfet" },
    footer: { copyright: "© 2026 SilverAtlas.org — Turan Erbaş tarafından hazırlanmıştır.", sponsor: "İstanbul Gümüş sponsorluğundadır", links: ["Hakkımızda", "Makaleler", "İletişim"] },
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Encyclopedia",
    breadcrumb: ["Home", "Mining", "Environmental Impact"],
    category: "Mining",
    title: "Environmental Impact of Silver Mining",
    subtitle: "Carbon footprint, water consumption, ecosystem disruption, and sustainable mining solutions",
    meta: { author: "Turan Erbaş", date: "April 15, 2026", readTime: "10 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Silver mining, like other metal mining activities, carries environmental costs: land disruption, water pollution, energy consumption, and waste management are the main challenges. Producing one troy ounce of silver requires mining and processing 7-10 tonnes of rock on average.",
        "However, silver mining has an important distinction: 70% of production is a by-product of copper, lead-zinc, and gold mining. This means much of silver's environmental cost is shared with primary metal production — though it doesn't eliminate responsibility entirely.",
      ]},
      { id: "karbon", heading: "Carbon Footprint", paragraphs: [
        "The carbon footprint of producing one kilogram of silver averages 104 kg CO₂ equivalent — far lower than gold (16,000 kg CO₂/kg) but much higher than copper (3.5 kg CO₂/kg). These figures decrease significantly when silver is produced as a by-product.",
        "Most energy consumption occurs during crushing-grinding (35-40%) and smelting-refining (25-30%). Transitioning to renewable energy can reduce mine carbon footprints by up to 60%.",
      ]},
      { id: "su", heading: "Water Consumption and Pollution", paragraphs: [
        "Mining significantly impacts water resources, especially in arid regions. Flotation processes use 2-5 m³ of water per ton. Acid mine drainage (AMD) can contaminate rivers and groundwater for decades.",
        "Cyanide leaching — used in some silver-gold mines — carries environmental risk even in controlled environments. Incidents like Romania's Baia Mare disaster (2000) have fueled global opposition to cyanide use.",
      ]},
      { id: "metrikler", heading: "Environmental Impact Metrics", paragraphs: [
        "Key metrics comparing the environmental impact of different metals:",
      ], table: {
        headers: ["Metric", "Silver", "Gold", "Copper", "Aluminum"],
        rows: [
          ["CO₂ (kg/kg metal)", "104", "16,000", "3.5", "8.0"],
          ["Water use (m³/kg)", "130", "260,000", "50", "7"],
          ["Waste rock (ton/kg)", "7-10", "500,000", "200", "5"],
          ["Energy (MJ/kg)", "1,500", "200,000", "33", "170"],
          ["Recycling rate", "30%", "90%+", "80%+", "75%"],
        ],
      }},
      { id: "surdurulebilir", heading: "Sustainable Mining Solutions", paragraphs: [
        "Sustainability efforts in mining are accelerating. Key approaches include: closed-loop water systems (90% water recovery), renewable energy integration, biological leaching (microbiological separation instead of acid/cyanide), dry tailings storage, and rehabilitation programs.",
        "Fair Trade and Responsible Mining certifications identify mines committed to environmental and social standards. Consumers can support sustainable mining by choosing certified sources.",
      ]},
      { id: "geri-donusum", heading: "The Role of Recycling", paragraphs: [
        "Silver recycling consumes about 80% less energy compared to primary mining and significantly reduces carbon emissions. In 2024, approximately 20% of global silver supply came from recycling.",
        "Main recycling sources include: electronic waste, photography residues, industrial catalysts, and old jewelry. Urban mining — recovering metals from e-waste accumulation in cities — is growing in importance.",
      ]},
    ],
    faq: { title: "FAQ", items: [
      { q: "Is silver mining greener than gold mining?", a: "It has much lower impact per tonne. But since 70% of silver is a by-product, comparisons are complex — silver's environmental cost is shared with the primary metal." },
      { q: "Is recycled silver pure?", a: "Yes — with proper refining, recycled silver achieves the same purity (99.9%+) as mined silver." },
    ]},
    cta: { title: "Sustainable 925 Sterling Silver", text: "Istanbul Silver crafts with responsibly sourced 925 sterling silver.", button: "Explore Collection" },
    footer: { copyright: "© 2026 SilverAtlas.org — Created by Turan Erbaş.", sponsor: "Sponsored by Istanbul Silver", links: ["About", "Articles", "Contact"] },
  },
  ar: {
    nav: "SilverAtlas", navSub: "موسوعة الفضة",
    breadcrumb: ["الرئيسية", "التعدين", "الأثر البيئي"],
    category: "التعدين",
    title: "الأثر البيئي لتعدين الفضة",
    subtitle: "البصمة الكربونية واستهلاك المياه واضطراب النظام البيئي وحلول التعدين المستدام",
    meta: { author: "توران إرباش", date: "١٥ أبريل ٢٠٢٦", readTime: "١٠ دقائق قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "يحمل تعدين الفضة تكاليف بيئية مثل تدهور الأراضي وتلوث المياه واستهلاك الطاقة. إنتاج أونصة واحدة من الفضة يتطلب استخراج ومعالجة ٧-١٠ أطنان من الصخور.",
        "لكن ٧٠٪ من إنتاج الفضة هو منتج ثانوي لتعدين النحاس والرصاص-الزنك والذهب، مما يعني مشاركة الكثير من التكلفة البيئية مع المعدن الأساسي.",
      ]},
      { id: "geri-donusum", heading: "دور إعادة التدوير", paragraphs: [
        "تستهلك إعادة تدوير الفضة طاقة أقل بنسبة ٨٠٪ مقارنة بالتعدين الأولي. في ٢٠٢٤، جاء حوالي ٢٠٪ من إمدادات الفضة العالمية من إعادة التدوير.",
      ]},
    ],
    faq: { title: "الأسئلة الشائعة", items: [
      { q: "هل الفضة المعاد تدويرها نقية؟", a: "نعم — مع التكرير الصحيح، تحقق الفضة المعاد تدويرها نفس النقاء (٩٩.٩٪+) كالفضة المستخرجة." },
    ]},
    cta: { title: "فضة ٩٢٥ مستدامة", text: "إسطنبول للفضة تصنع بفضة عيار ٩٢٥ من مصادر مسؤولة.", button: "استكشف المجموعة" },
    footer: { copyright: "© ٢٠٢٦ SilverAtlas.org — إعداد توران إرباش", sponsor: "برعاية إسطنبول للفضة", links: ["حول", "مقالات", "اتصل"] },
  },
};

const S="#C0C0C0",DS="#708090",NV="#1a1a2e",GA="#D4AF37";
const FH="'Playfair Display',Georgia,serif",FB="'Source Sans 3','Segoe UI',sans-serif";
const FA="'Noto Naskh Arabic','Traditional Arabic',serif",FM="'JetBrains Mono','Fira Code',monospace";

export default function SilverAtlasEnvironment() {
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
