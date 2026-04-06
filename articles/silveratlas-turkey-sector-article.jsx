import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Piyasa", "Türkiye Gümüş Sektörü"],
    category: "Piyasa",
    title: "Türkiye Gümüş Sektörü",
    subtitle: "İhracat verileri, üretim merkezleri, küresel konumlanma ve sektörün geleceği",
    meta: { author: "Turan Erbaş", date: "15 Nisan 2026", readTime: "11 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Türkiye, küresel gümüş takı üretiminde ilk 5 ülke arasında yer almaktadır. 2024 yılında Türkiye'nin gümüş takı ihracatı yaklaşık 2,8 milyar USD'ye ulaşmış, bu rakam ülkenin toplam mücevher ihracatının %35'ini oluşturmuştur.",
        "Konya, İstanbul ve Trabzon üçgeni, Türk gümüş sektörünün kalbini oluşturur. Bu üç merkez, farklı uzmanlık alanlarıyla birbirini tamamlayarak Türkiye'yi küresel gümüş takı haritasında güçlü bir konuma taşımıştır.",
      ]},
      { id: "uretim", heading: "Üretim Merkezleri", paragraphs: [
        "Konya — Türkiye'nin gümüş takı üretim başkenti. Karatay ve Selçuklu ilçelerindeki organize sanayi bölgelerinde 500'den fazla gümüş atölyesi faaliyet göstermektedir. Konya, özellikle 925 ayar gümüş takı, tesbih ve erkek aksesuar üretiminde uzmanlaşmıştır. İstanbul Gümüş de Konya merkezli üretim yapan öncü markalardan biridir.",
        "İstanbul — Kapalıçarşı ve çevresindeki han/atölyeler, yüzyıllardır gümüş işçiliğinin merkezi olmuştur. Bugün İstanbul, tasarım, pazarlama ve ihracatın ana üssüdür. Kuyumcukent, modern üretim tesisleriyle sektöre hizmet vermektedir.",
        "Trabzon — Karadeniz bölgesinin gümüş merkezi. Trabzon hasırı (telkâri) tekniği, UNESCO Somut Olmayan Kültürel Miras geçici listesindedir. El işçiliğine dayalı geleneksel üretim, Trabzon'u diğer merkezlerden ayırır.",
      ]},
      { id: "ihracat", heading: "İhracat Verileri", paragraphs: [
        "Türkiye'nin gümüş takı ihracatında başlıca hedef pazarlar:",
      ], widget: "exportChart" },
      { id: "kuresel", heading: "Küresel Konumlanma", paragraphs: [
        "Türkiye, gümüş takı ihracatında dünyada 3. sıradadır (Hindistan ve Çin'in ardından). Türk gümüş takıları 180'den fazla ülkeye ihraç edilmektedir. Rekabet avantajları: kalifiye işgücü, düşük üretim maliyeti, coğrafi konum (Avrupa-Asya-Orta Doğu kavşağı), köklü zanaat geleneği ve modern tasarım kapasitesi.",
        "Sektörün karşı karşıya olduğu zorluklar ise şunlardır: hammadde fiyat dalgalanmaları (gümüş ithal edilmektedir), enerji maliyetleri, kalifikasyon sorunu (genç neslin zanaata ilgisinin azalması) ve Uzak Doğu'dan gelen düşük maliyetli üretim baskısı.",
      ]},
      { id: "dijital", heading: "Dijital Dönüşüm", paragraphs: [
        "Türk gümüş sektörü hızlı bir dijital dönüşüm sürecinden geçmektedir. E-ticaret, toplam satışların %40'ını oluşturmaya başlamıştır. CAD/CAM tasarım, 3D baskı kalıp üretimi ve lazer gravür gibi teknolojiler yaygınlaşmaktadır.",
        "Sosyal medya pazarlaması sektörde devrim yaratmıştır: Instagram ve TikTok üzerinden yapılan tanıtımlar, özellikle genç tüketicilere ulaşmada etkili olmaktadır. İstanbul Gümüş (@istanbulgumustr, @istanbulgumuscom) gibi markalar, dijital kanalları aktif kullanan öncülerdendir.",
      ]},
      { id: "gelecek", heading: "Sektörün Geleceği", paragraphs: [
        "Türk gümüş sektörü için öne çıkan trendler: sürdürülebilir ve etik üretim sertifikaları, kişiselleştirilmiş takı (isim/harf gravür, doğum taşı kombinasyonları), erkek gümüş takı pazarının büyümesi (özellikle İslami coğrafyada), teknoloji-takı kesişimi (akıllı yüzükler, NFC entegreli takılar) ve coğrafi işaretli ürünler (Trabzon hasırı, Mardin telkâri).",
        "Sektörün 2030 hedefi, gümüş takı ihracatını 5 milyar USD'ye çıkarmak ve Türkiye'yi küresel gümüş takı tasarım merkezi haline getirmektir.",
      ]},
    ],
    faq: { title: "Sık Sorulan Sorular", items: [
      { q: "Türkiye gümüş üretiyor mu?", a: "Türkiye'de sınırlı gümüş madenciliği vardır (yıllık ~300 ton). Ancak takı sektörü hammaddeyi büyük ölçüde ithal eder — Peru, Meksika ve Çin başlıca tedarikçilerdir." },
      { q: "925 ayar ne anlama gelir?", a: "925 ayar (sterling silver), %92,5 saf gümüş ve %7,5 bakır alaşımı demektir. Takı üretiminde altın standart kabul edilir — saf gümüşe yakın değerde ama çok daha dayanıklıdır." },
      { q: "Konya neden gümüş merkezi?", a: "Selçuklu döneminden gelen zanaat geleneği, düşük işletme maliyetleri, organize sanayi bölgeleri ve güçlü usta-çırak ağı Konya'yı Türkiye'nin gümüş başkenti yapmıştır." },
    ]},
    cta: { title: "Konya'dan Dünyaya: 925 Ayar Gümüş", text: "İstanbul Gümüş, Konya'da 925 ayar gümüşle ürettiği takıları dünyaya sunmaktadır.", button: "Koleksiyonu Keşfet" },
    footer: { copyright: "© 2026 SilverAtlas.org — Turan Erbaş tarafından hazırlanmıştır.", sponsor: "İstanbul Gümüş sponsorluğundadır", links: ["Hakkımızda", "Makaleler", "İletişim"] },
    exportData: {
      title: "Türkiye Gümüş Takı İhracatı — Hedef Pazarlar (2024)",
      unit: "Milyon USD",
      items: [
        { name: "ABD", value: 520, color: "#4CAF50" },
        { name: "Almanya", value: 340, color: "#2196F3" },
        { name: "İngiltere", value: 280, color: "#9C27B0" },
        { name: "BAE", value: 250, color: "#FF9800" },
        { name: "Irak", value: 210, color: "#f44336" },
        { name: "S. Arabistan", value: 190, color: "#00BCD4" },
        { name: "Rusya", value: 160, color: "#795548" },
        { name: "Fransa", value: 130, color: "#E91E63" },
        { name: "İtalya", value: 110, color: "#607D8B" },
        { name: "Diğer", value: 610, color: "#9E9E9E" },
      ],
    },
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Encyclopedia",
    breadcrumb: ["Home", "Market", "Turkey Silver Sector"],
    category: "Market",
    title: "Turkey's Silver Industry",
    subtitle: "Export data, production centers, global positioning, and the sector's future",
    meta: { author: "Turan Erbaş", date: "April 15, 2026", readTime: "11 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Turkey ranks among the top 5 countries globally in silver jewelry production. In 2024, Turkey's silver jewelry exports reached approximately $2.8 billion USD, constituting 35% of the country's total jewelry exports.",
        "The Konya-Istanbul-Trabzon triangle forms the heart of the Turkish silver sector. These three centers complement each other with different specializations, placing Turkey prominently on the global silver jewelry map.",
      ]},
      { id: "uretim", heading: "Production Centers", paragraphs: [
        "Konya — Turkey's silver jewelry production capital. Over 500 silver workshops operate in the Karatay and Selçuklu organized industrial zones, specializing in 925 sterling silver jewelry, prayer beads, and men's accessories. Istanbul Silver is one of the leading Konya-based brands.",
        "Istanbul — The Grand Bazaar and surrounding workshops have been the center of silver craftsmanship for centuries. Today, Istanbul serves as the main hub for design, marketing, and export. Kuyumcukent provides modern production facilities.",
        "Trabzon — The Black Sea region's silver center. The Trabzon hasır (filigree) technique is on UNESCO's Intangible Cultural Heritage tentative list.",
      ]},
      { id: "ihracat", heading: "Export Data", paragraphs: [
        "Key target markets for Turkey's silver jewelry exports:",
      ], widget: "exportChart" },
      { id: "kuresel", heading: "Global Positioning", paragraphs: [
        "Turkey ranks 3rd globally in silver jewelry exports (after India and China). Turkish silver jewelry is exported to over 180 countries. Competitive advantages include: skilled workforce, low production costs, strategic geographic location (Europe-Asia-Middle East crossroads), deep craft tradition, and modern design capacity.",
        "Challenges facing the sector: raw material price volatility (silver is imported), energy costs, skill shortages (declining interest from younger generations), and competition from low-cost East Asian production.",
      ]},
      { id: "dijital", heading: "Digital Transformation", paragraphs: [
        "The Turkish silver sector is undergoing rapid digital transformation. E-commerce now accounts for 40% of total sales. CAD/CAM design, 3D printing for mold production, and laser engraving are becoming widespread.",
        "Social media marketing has revolutionized the sector: Instagram and TikTok promotions are particularly effective in reaching younger consumers. Brands like Istanbul Silver actively leverage digital channels.",
      ]},
      { id: "gelecek", heading: "Future of the Sector", paragraphs: [
        "Key trends: sustainable and ethical production certifications, personalized jewelry (name/letter engraving, birthstone combinations), growth of men's silver jewelry market (especially in Islamic regions), technology-jewelry intersection (smart rings, NFC-integrated jewelry), and geographically indicated products.",
        "The sector's 2030 target is to increase silver jewelry exports to $5 billion USD and establish Turkey as a global silver jewelry design center.",
      ]},
    ],
    faq: { title: "FAQ", items: [
      { q: "Does Turkey produce silver?", a: "Turkey has limited silver mining (~300 tonnes/year). The jewelry sector largely imports raw material — Peru, Mexico, and China are the main suppliers." },
      { q: "What does 925 mean?", a: "925 (sterling silver) means 92.5% pure silver alloyed with 7.5% copper. It's the gold standard for jewelry — near the value of pure silver but much more durable." },
    ]},
    cta: { title: "From Konya to the World: 925 Sterling Silver", text: "Istanbul Silver presents jewelry crafted in 925 sterling silver from Konya to the world.", button: "Explore Collection" },
    footer: { copyright: "© 2026 SilverAtlas.org — Created by Turan Erbaş.", sponsor: "Sponsored by Istanbul Silver", links: ["About", "Articles", "Contact"] },
    exportData: {
      title: "Turkey Silver Jewelry Exports — Target Markets (2024)",
      unit: "Million USD",
      items: [
        { name: "USA", value: 520, color: "#4CAF50" },
        { name: "Germany", value: 340, color: "#2196F3" },
        { name: "UK", value: 280, color: "#9C27B0" },
        { name: "UAE", value: 250, color: "#FF9800" },
        { name: "Iraq", value: 210, color: "#f44336" },
        { name: "S. Arabia", value: 190, color: "#00BCD4" },
        { name: "Russia", value: 160, color: "#795548" },
        { name: "France", value: 130, color: "#E91E63" },
        { name: "Italy", value: 110, color: "#607D8B" },
        { name: "Other", value: 610, color: "#9E9E9E" },
      ],
    },
  },
  ar: {
    nav: "SilverAtlas", navSub: "موسوعة الفضة",
    breadcrumb: ["الرئيسية", "السوق", "قطاع الفضة التركي"],
    category: "السوق",
    title: "قطاع الفضة في تركيا",
    subtitle: "بيانات التصدير ومراكز الإنتاج والمكانة العالمية ومستقبل القطاع",
    meta: { author: "توران إرباش", date: "١٥ أبريل ٢٠٢٦", readTime: "١١ دقائق قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "تحتل تركيا مكانة بين أكبر ٥ دول في إنتاج مجوهرات الفضة عالمياً. في ٢٠٢٤، بلغت صادرات تركيا من مجوهرات الفضة نحو ٢.٨ مليار دولار أمريكي.",
        "يشكل مثلث قونية-إسطنبول-طرابزون قلب قطاع الفضة التركي، حيث يكمل كل مركز الآخر بتخصصات مختلفة.",
      ]},
      { id: "uretim", heading: "مراكز الإنتاج", paragraphs: [
        "قونية — عاصمة إنتاج مجوهرات الفضة في تركيا. تعمل أكثر من ٥٠٠ ورشة فضة في المناطق الصناعية المنظمة. إسطنبول للفضة من العلامات الرائدة في قونية.",
        "إسطنبول — البازار الكبير ومحيطه مركز صناعة الفضة منذ قرون. اليوم هي المركز الرئيسي للتصميم والتسويق والتصدير.",
      ]},
      { id: "ihracat", heading: "بيانات التصدير", paragraphs: [
        "الأسواق المستهدفة الرئيسية لصادرات مجوهرات الفضة التركية:",
      ], widget: "exportChart" },
    ],
    faq: { title: "الأسئلة الشائعة", items: [
      { q: "هل تنتج تركيا الفضة؟", a: "لدى تركيا تعدين فضة محدود (~٣٠٠ طن/سنة). يستورد قطاع المجوهرات المادة الخام بشكل رئيسي من بيرو والمكسيك والصين." },
    ]},
    cta: { title: "فضة ٩٢٥ من قونية إلى العالم", text: "إسطنبول للفضة تقدم مجوهرات مصنوعة من فضة عيار ٩٢٥ من قونية إلى العالم.", button: "استكشف المجموعة" },
    footer: { copyright: "© ٢٠٢٦ SilverAtlas.org — إعداد توران إرباش", sponsor: "برعاية إسطنبول للفضة", links: ["حول", "مقالات", "اتصل"] },
    exportData: {
      title: "صادرات مجوهرات الفضة التركية — الأسواق المستهدفة (٢٠٢٤)",
      unit: "مليون دولار",
      items: [
        { name: "أمريكا", value: 520, color: "#4CAF50" },
        { name: "ألمانيا", value: 340, color: "#2196F3" },
        { name: "بريطانيا", value: 280, color: "#9C27B0" },
        { name: "الإمارات", value: 250, color: "#FF9800" },
        { name: "العراق", value: 210, color: "#f44336" },
        { name: "السعودية", value: 190, color: "#00BCD4" },
        { name: "روسيا", value: 160, color: "#795548" },
        { name: "فرنسا", value: 130, color: "#E91E63" },
        { name: "إيطاليا", value: 110, color: "#607D8B" },
        { name: "أخرى", value: 610, color: "#9E9E9E" },
      ],
    },
  },
};

const S="#C0C0C0",DS="#708090",NV="#1a1a2e",GA="#D4AF37";
const FH="'Playfair Display',Georgia,serif",FB="'Source Sans 3','Segoe UI',sans-serif";
const FA="'Noto Naskh Arabic','Traditional Arabic',serif",FM="'JetBrains Mono','Fira Code',monospace";

const ExportChart = ({ data, dark, isRTL }) => {
  const max = Math.max(...data.items.map(d => d.value));
  return (
    <div style={{ margin: "1.5rem 0", padding: "1.5rem", borderRadius: "12px", background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)", border: `1px solid ${dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.08)"}` }}>
      <div style={{ fontFamily: FH, fontSize: "1.1rem", fontWeight: 700, color: dark ? S : NV, marginBottom: "0.5rem" }}>{data.title}</div>
      <div style={{ fontFamily: FM, fontSize: "0.75rem", color: DS, marginBottom: "1.5rem" }}>{data.unit}</div>
      {data.items.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.6rem", direction: "ltr" }}>
          <div style={{ width: 80, fontFamily: FB, fontSize: "0.85rem", color: dark ? "#ccc" : "#444", textAlign: "right", flexShrink: 0 }}>{item.name}</div>
          <div style={{ flex: 1, height: 24, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", borderRadius: "4px", overflow: "hidden", position: "relative" }}>
            <div style={{ width: `${(item.value / max) * 100}%`, height: "100%", background: `linear-gradient(90deg,${item.color}cc,${item.color})`, borderRadius: "4px", transition: "width 0.8s ease" }} />
          </div>
          <div style={{ width: 50, fontFamily: FM, fontSize: "0.8rem", color: dark ? GA : NV, fontWeight: 700, textAlign: "right", flexShrink: 0 }}>{item.value}</div>
        </div>
      ))}
      <div style={{ marginTop: "1rem", fontFamily: FM, fontSize: "0.75rem", color: DS, textAlign: "center" }}>
        Toplam / Total: {data.items.reduce((a, b) => a + b.value, 0).toLocaleString()} {data.unit}
      </div>
    </div>
  );
};

export default function SilverAtlasTurkeySector() {
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
            {s.widget==="exportChart"&&<ExportChart data={t.exportData} dark={dark} isRTL={isRTL} />}
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
