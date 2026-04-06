import { useState, useEffect, useRef, useCallback } from "react";

// ─── I18N CORE ───────────────────────────────────────────
const UI = {
  tr: {
    brand:"SilverAtlas", tagline:"Gümüş Bilgi Platformu",
    home:"Ana Sayfa", explore:"Keşfet", tools:"Araçlar", about:"Hakkında",
    cats:{
      science:{n:"Bilim",icon:"🔬",d:"Gümüşün kimyası, fiziği ve antimikrobiyal gücü",articles:["Gümüşün Kimyası","Fiziksel Özellikler","Antimikrobiyal Özellikler","Endüstriyel Kullanımlar","Gümüş ve Tıp"]},
      history:{n:"Tarih",icon:"📜",d:"Antik çağlardan modern döneme gümüşün hikâyesi",articles:["Antik Dünya'da Gümüş","İslam Medeniyetinde Gümüş","Osmanlı Gümüşçülüğü","Simya'dan Kimya'ya","Yeni Dünya Gümüşü"]},
      mining:{n:"Maden",icon:"⛏️",d:"Küresel madencilik, rafinasyon ve rezerv haritası",articles:["Küresel Gümüş Madenleri","Türkiye'de Madencilik","Çıkarma Yöntemleri","Rafinasyon Süreci","Gümüş Rezervleri"]},
      fashion:{n:"Moda",icon:"👗",d:"Takı trendleri, tasarım teknikleri ve styling rehberi",articles:["Takı Trendleri 2026","Kültürel Motifler","Styling Rehberi","Erkek Aksesuar","Gümüş vs Altın"]},
      manufacturing:{n:"Üretim",icon:"🏭",d:"925 ayar, geleneksel teknikler ve modern üretim",articles:["925 Ayar Nedir?","Üretim Süreci","Geleneksel Teknikler","Kalite Kontrol","Gümüş Bakımı"]},
      market:{n:"Piyasa",icon:"📈",d:"Canlı fiyatlar, arz-talep ve küresel trendler",articles:["Canlı Fiyatlar","Tarihî Fiyat Grafikleri","Arz-Talep Dinamikleri","Türkiye Sektörü","Gümüşün Geleceği"]},
      culture:{n:"Kültür",icon:"🌍",d:"İslam'da gümüş, folklordan sembolizme kültürel miras",articles:["İslam'da Gümüş","Anadolu Folkloru","Dünya Kültürleri","Edebiyat ve Sanat","Müzecilik"]},
    },
    toolsList:[
      {n:"Ayar Hesaplayıcı",icon:"⚖️",d:"Saf gümüş oranını hesaplayın",page:"calc"},
      {n:"Fiyat Dönüştürücü",icon:"💱",d:"Gram, ons ve farklı para birimleri",page:"market"},
      {n:"Taş Rehberi",icon:"💎",d:"Her taşın hikâyesi ve bakım rehberi",page:"gems"},
      {n:"Bakım Rehberi",icon:"✨",d:"Takınız neden karardı?",page:"care"},
      {n:"Dünya Haritası",icon:"🗺️",d:"İnteraktif gümüş atlası",page:"map"},
      {n:"Zaman Çizelgesi",icon:"⏳",d:"MÖ 3000'den günümüze",page:"timeline"},
    ],
    featured:"Öne Çıkan",allArticles:"Tüm Yazılar",viewAll:"Tümünü Gör →",
    readMore:"Devamını Oku →", readTime:"dk okuma", backHome:"← Ana Sayfa",
    sponsorTag:"Sponsored by", sponsorNote:"Bu platform İstanbul Gümüş tarafından desteklenmektedir.",
    footerDesc:"Gümüş hakkında dünyanın en kapsamlı, ücretsiz, açık erişimli bilgi platformu.",
    footerLinks:["Hakkında","Veri Kaynakları","İletişim","Gizlilik"],
    license:"CC BY-NC-SA 4.0",
    heroH:"Gümüşün Tüm Hikâyesi",heroP:"Bilimden tarihe, madencilikten modaya — dünyanın en kapsamlı gümüş bilgi platformu",
    heroExplore:"Keşfet",search:"Gümüş hakkında bir şey arayın…",
    stats:{a:"Makale",l:"Dil",m:"Harita Katmanı",d:"Maden Verisi"},
    comingSoon:"Bu bölüm yakında yayınlanacak.",
    interactiveTools:"İnteraktif Araçlar",
  },
  en: {
    brand:"SilverAtlas", tagline:"Silver Knowledge Platform",
    home:"Home", explore:"Explore", tools:"Tools", about:"About",
    cats:{
      science:{n:"Science",icon:"🔬",d:"Chemistry, physics, and antimicrobial power of silver",articles:["Chemistry of Silver","Physical Properties","Antimicrobial Properties","Industrial Uses","Silver in Medicine"]},
      history:{n:"History",icon:"📜",d:"Silver's story from ancient times to the modern era",articles:["Silver in the Ancient World","Silver in Islamic Civilization","Ottoman Silverwork","From Alchemy to Chemistry","New World Silver"]},
      mining:{n:"Mining",icon:"⛏️",d:"Global mining, refining, and reserve maps",articles:["Global Silver Mines","Mining in Turkey","Extraction Methods","Refining Process","Silver Reserves"]},
      fashion:{n:"Fashion",icon:"👗",d:"Jewelry trends, design techniques, and styling",articles:["2026 Jewelry Trends","Cultural Motifs","Styling Guide","Men's Accessories","Silver vs Gold"]},
      manufacturing:{n:"Manufacturing",icon:"🏭",d:"925 sterling, traditional crafts, modern production",articles:["What is 925 Sterling?","Production Process","Traditional Techniques","Quality Control","Silver Care"]},
      market:{n:"Market",icon:"📈",d:"Live prices, supply-demand, global trends",articles:["Live Prices","Historical Price Charts","Supply-Demand Dynamics","Turkey's Sector","Future of Silver"]},
      culture:{n:"Culture",icon:"🌍",d:"Silver in Islam, folklore to symbolism",articles:["Silver in Islam","Anatolian Folklore","World Cultures","Literature and Art","Museums"]},
    },
    toolsList:[
      {n:"Purity Calculator",icon:"⚖️",d:"Calculate pure silver ratio",page:"calc"},
      {n:"Price Converter",icon:"💱",d:"Grams, ounces, currencies",page:"market"},
      {n:"Gemstone Guide",icon:"💎",d:"Each stone's story and care",page:"gems"},
      {n:"Care Guide",icon:"✨",d:"Why did it tarnish?",page:"care"},
      {n:"World Map",icon:"🗺️",d:"Interactive silver atlas",page:"map"},
      {n:"Timeline",icon:"⏳",d:"From 3000 BCE to today",page:"timeline"},
    ],
    featured:"Featured",allArticles:"All Articles",viewAll:"View All →",
    readMore:"Read More →",readTime:"min read",backHome:"← Home",
    sponsorTag:"Sponsored by",sponsorNote:"This platform is supported by İstanbul Gümüş.",
    footerDesc:"The world's most comprehensive, free, open-access silver knowledge platform.",
    footerLinks:["About","Data Sources","Contact","Privacy"],
    license:"CC BY-NC-SA 4.0",
    heroH:"The Complete Story of Silver",heroP:"From science to history, mining to fashion — the world's most comprehensive silver knowledge platform",
    heroExplore:"Explore",search:"Search anything about silver…",
    stats:{a:"Articles",l:"Languages",m:"Map Layers",d:"Mine Data"},
    comingSoon:"This section is coming soon.",
    interactiveTools:"Interactive Tools",
  },
  ar: {
    brand:"أطلس الفضة", tagline:"منصة معرفة الفضة",
    home:"الرئيسية", explore:"اكتشف", tools:"الأدوات", about:"حول",
    cats:{
      science:{n:"العلم",icon:"🔬",d:"كيمياء الفضة وخصائصها",articles:["كيمياء الفضة","الخصائص الفيزيائية","مضادات الميكروبات","الاستخدامات الصناعية","الفضة في الطب"]},
      history:{n:"التاريخ",icon:"📜",d:"قصة الفضة من العصور القديمة",articles:["الفضة في العالم القديم","الفضة في الحضارة الإسلامية","صياغة الفضة العثمانية","من الكيمياء القديمة إلى الحديثة","فضة العالم الجديد"]},
      mining:{n:"التعدين",icon:"⛏️",d:"التعدين العالمي والتكرير",articles:["مناجم الفضة العالمية","التعدين في تركيا","طرق الاستخراج","عملية التكرير","احتياطيات الفضة"]},
      fashion:{n:"الموضة",icon:"👗",d:"اتجاهات المجوهرات والتصميم",articles:["اتجاهات 2026","الزخارف الثقافية","دليل التنسيق","إكسسوارات الرجال","الفضة مقابل الذهب"]},
      manufacturing:{n:"الصناعة",icon:"🏭",d:"عيار 925 والحرف التقليدية",articles:["ما هو عيار 925؟","عملية الإنتاج","التقنيات التقليدية","مراقبة الجودة","العناية بالفضة"]},
      market:{n:"السوق",icon:"📈",d:"الأسعار والعرض والطلب",articles:["الأسعار الحية","الرسوم البيانية التاريخية","ديناميكيات العرض والطلب","القطاع التركي","مستقبل الفضة"]},
      culture:{n:"الثقافة",icon:"🌍",d:"الفضة في الإسلام والتراث",articles:["الفضة في الإسلام","الفولكلور الأناضولي","ثقافات العالم","الأدب والفن","المتاحف"]},
    },
    toolsList:[
      {n:"حاسبة العيار",icon:"⚖️",d:"احسب نسبة الفضة النقية",page:"calc"},
      {n:"محول الأسعار",icon:"💱",d:"الغرامات والأونصات والعملات",page:"market"},
      {n:"دليل الأحجار",icon:"💎",d:"قصة كل حجر والعناية به",page:"gems"},
      {n:"دليل العناية",icon:"✨",d:"لماذا تأكسدت مجوهراتك؟",page:"care"},
      {n:"خريطة العالم",icon:"🗺️",d:"أطلس الفضة التفاعلي",page:"map"},
      {n:"الجدول الزمني",icon:"⏳",d:"من 3000 ق.م إلى اليوم",page:"timeline"},
    ],
    featured:"المميز",allArticles:"جميع المقالات",viewAll:"عرض الكل →",
    readMore:"اقرأ المزيد →",readTime:"دقيقة قراءة",backHome:"→ الرئيسية",
    sponsorTag:"برعاية",sponsorNote:"هذه المنصة مدعومة من إسطنبول غوموش.",
    footerDesc:"أشمل منصة معرفية مجانية عن الفضة في العالم.",
    footerLinks:["حول","مصادر البيانات","اتصل بنا","الخصوصية"],
    license:"CC BY-NC-SA 4.0",
    heroH:"القصة الكاملة للفضة",heroP:"من العلم إلى التاريخ، ومن التعدين إلى الموضة",
    heroExplore:"اكتشف",search:"ابحث عن أي شيء يتعلق بالفضة…",
    stats:{a:"مقال",l:"لغات",m:"طبقة خريطة",d:"بيانات المناجم"},
    comingSoon:"هذا القسم قادم قريباً.",
    interactiveTools:"أدوات تفاعلية",
  },
};

const CAT_KEYS = ["science","history","mining","fashion","manufacturing","market","culture"];
const CAT_COLORS = {science:"#6EC6FF",history:"#D4AF37",mining:"#8B9DAF",fashion:"#E8A0BF",manufacturing:"#A0C4FF",market:"#7BE495",culture:"#C9A0DC"};

// ─── MINI CALCULATOR (embedded) ──────────────────────────
function MiniCalc({dark,t}){
  const [f,setF]=useState(925);
  const [w,setW]=useState(10);
  const sP=f/10, aP=100-sP;
  const sW=((f/1000)*w).toFixed(2), aW=(((1000-f)/1000)*w).toFixed(2);
  const bdr=dark?"rgba(192,192,192,.1)":"rgba(0,0,0,.06)";
  const txt2=dark?"#9a9aaa":"#6B7280";
  return (
    <div style={{background:dark?"#1a1a24":"#fff",border:`1px solid ${bdr}`,borderRadius:14,padding:20}}>
      <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:14,fontSize:14,fontWeight:600}}>⚖️ {t==="tr"?"Ayar Hesaplayıcı":t==="en"?"Purity Calculator":"حاسبة العيار"}</div>
      <div style={{display:"flex",gap:6,marginBottom:12,flexWrap:"wrap"}}>
        {[800,900,925,950,999].map(v=>(
          <button key={v} onClick={()=>setF(v)} style={{
            border:`1px solid ${f===v?"#D4AF37":"transparent"}`,borderRadius:6,padding:"4px 10px",
            fontSize:11,cursor:"pointer",fontFamily:"'JetBrains Mono',monospace",fontWeight:f===v?600:400,
            background:f===v?"rgba(212,175,55,.1)":"rgba(128,128,128,.06)",color:f===v?"#D4AF37":txt2,
          }}>{v}</button>
        ))}
      </div>
      <input type="range" min={500} max={999} value={f} onChange={e=>setF(+e.target.value)}
        style={{width:"100%",accentColor:"#C0C0C0",marginBottom:8}} />
      <div style={{display:"flex",justifyContent:"space-between",fontSize:12,color:txt2,marginBottom:10}}>
        <span>{t==="tr"?"Ağırlık":t==="en"?"Weight":"الوزن"}: <input type="number" value={w} onChange={e=>setW(+e.target.value)}
          style={{width:50,background:"transparent",border:`1px solid ${bdr}`,borderRadius:4,padding:"2px 6px",
          color:"inherit",fontFamily:"'JetBrains Mono',monospace",fontSize:12,textAlign:"center"}} /> g</span>
        <span style={{fontFamily:"'JetBrains Mono',monospace",fontWeight:600,fontSize:16}}>{f}/1000</span>
      </div>
      <div style={{height:10,borderRadius:5,overflow:"hidden",display:"flex",border:`1px solid ${bdr}`,marginBottom:12}}>
        <div style={{width:`${sP}%`,background:"linear-gradient(90deg,#C0C0C0,#e0e0e0)",transition:"width .3s"}}/>
        <div style={{width:`${aP}%`,background:"linear-gradient(90deg,#b87333,#cd8c52)",transition:"width .3s"}}/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
        <div style={{background:dark?"rgba(192,192,192,.05)":"rgba(192,192,192,.1)",borderRadius:8,padding:"10px",textAlign:"center"}}>
          <div style={{fontSize:18,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",color:"#C0C0C0"}}>{sW}g</div>
          <div style={{fontSize:10,color:txt2}}>Ag</div>
        </div>
        <div style={{background:dark?"rgba(184,115,51,.05)":"rgba(184,115,51,.1)",borderRadius:8,padding:"10px",textAlign:"center"}}>
          <div style={{fontSize:18,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",color:"#cd8c52"}}>{aW}g</div>
          <div style={{fontSize:10,color:txt2}}>Cu</div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────
export default function SilverAtlasSite(){
  const [lang,setLang]=useState("tr");
  const [dark,setDark]=useState(true);
  const [page,setPage]=useState("home"); // home | category:xxx | tools
  const [menuOpen,setMenuOpen]=useState(false);
  const [hovCat,setHovCat]=useState(null);

  const t=UI[lang];
  const isRTL=lang==="ar";
  const bg=dark?"#0f0f14":"#FAFAF5";
  const bg2=dark?"#1a1a24":"#fff";
  const bg3=dark?"#111118":"#f5f5f0";
  const txt=dark?"#e8e8ec":"#2C2C2C";
  const txt2=dark?"#9a9aaa":"#6B7280";
  const bdr=dark?"rgba(192,192,192,.1)":"rgba(0,0,0,.06)";
  const acc=dark?"#C0C0C0":"#708090";
  const gold="#D4AF37";
  const fD="'Playfair Display',Georgia,serif";
  const fB=lang==="ar"?"'Noto Naskh Arabic',serif":"'Source Sans 3',sans-serif";

  const navigate=(p)=>{setPage(p);setMenuOpen(false);window.scrollTo({top:0,behavior:"smooth"});};
  const currentCat=page.startsWith("cat:")?page.split(":")[1]:null;

  return(
    <div dir={isRTL?"rtl":"ltr"} style={{fontFamily:fB,background:bg,color:txt,minHeight:"100vh",transition:"background .4s"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes shimmer{0%,100%{background-position:200% 0}50%{background-position:-200% 0}}
        *{margin:0;padding:0;box-sizing:border-box;}
        ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:${acc}22;border-radius:3px}
      `}</style>

      {/* ═══ HEADER ═══ */}
      <header style={{
        position:"sticky",top:0,zIndex:200,height:56,
        background:dark?"rgba(15,15,20,.9)":"rgba(250,250,245,.9)",
        backdropFilter:"blur(20px)",borderBottom:`1px solid ${bdr}`,
        padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",
      }}>
        <div style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer"}} onClick={()=>navigate("home")}>
          <div style={{width:30,height:30,borderRadius:"50%",background:`linear-gradient(135deg,${acc},${gold})`,
            display:"flex",alignItems:"center",justifyContent:"center",font:`700 13px ${fD}`,color:"#0f0f14"}}>Ag</div>
          <span style={{fontFamily:fD,fontWeight:600,fontSize:17}}>{t.brand}</span>
          <span style={{fontSize:10,color:txt2,marginTop:2,display:"none"}}>{t.tagline}</span>
        </div>

        {/* Desktop nav */}
        <nav style={{display:"flex",alignItems:"center",gap:6}}>
          {[{k:"home",l:t.home},{k:"tools",l:t.tools},{k:"about",l:t.about}].map(nav=>(
            <button key={nav.k} onClick={()=>navigate(nav.k)} style={{
              border:"none",cursor:"pointer",padding:"6px 14px",borderRadius:8,
              fontSize:12,fontWeight:page===nav.k?600:400,fontFamily:fB,
              background:page===nav.k?(dark?"rgba(192,192,192,.1)":"rgba(0,0,0,.06)"):"transparent",
              color:page===nav.k?txt:txt2,transition:"all .2s",
            }}>{nav.l}</button>
          ))}
          <div style={{width:1,height:20,background:bdr,margin:"0 4px"}}/>
          <div style={{display:"flex",gap:2,background:dark?"rgba(255,255,255,.04)":"rgba(0,0,0,.03)",borderRadius:6,padding:2}}>
            {["tr","en","ar"].map(l=>(
              <button key={l} onClick={()=>setLang(l)} style={{
                border:"none",cursor:"pointer",padding:"3px 8px",borderRadius:4,fontSize:11,
                fontWeight:lang===l?600:400,fontFamily:l==="ar"?"'Noto Naskh Arabic',serif":fB,
                background:lang===l?(dark?"rgba(192,192,192,.15)":"rgba(0,0,0,.08)"):"transparent",
                color:lang===l?txt:txt2,transition:"all .2s",
              }}>{l==="ar"?"عر":l.toUpperCase()}</button>
            ))}
          </div>
          <button onClick={()=>setDark(!dark)} style={{border:"none",cursor:"pointer",background:"transparent",
            color:txt2,fontSize:16,padding:4}}>{dark?"☀️":"🌙"}</button>
        </nav>
      </header>

      {/* ═══ PAGES ═══ */}
      <main style={{minHeight:"calc(100vh - 56px - 160px)"}}>

        {/* ─── HOME ─── */}
        {page==="home" && (
          <div style={{animation:"fadeUp .5s ease"}}>
            {/* Hero */}
            <section style={{textAlign:"center",padding:"64px 24px 48px",position:"relative",overflow:"hidden",
              background:dark?"linear-gradient(180deg,#0f0f14,#161620,#0f0f14)":"linear-gradient(180deg,#FAFAF5,#f0efe8,#FAFAF5)"}}>
              <div style={{maxWidth:680,margin:"0 auto",position:"relative",zIndex:1}}>
                <div style={{display:"inline-block",padding:"4px 16px",borderRadius:20,fontSize:10,fontWeight:600,
                  letterSpacing:".1em",color:gold,border:`1px solid ${gold}44`,marginBottom:20}}>Ag — 47</div>
                <h1 style={{fontFamily:fD,fontSize:"clamp(32px,5.5vw,56px)",fontWeight:700,lineHeight:1.1,marginBottom:16,
                  background:`linear-gradient(90deg,${txt} 0%,${acc} 40%,${txt} 80%)`,backgroundSize:"200% 100%",
                  WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"shimmer 4s ease-in-out infinite"}}>{t.heroH}</h1>
                <p style={{fontSize:"clamp(14px,2vw,17px)",color:txt2,lineHeight:1.7,maxWidth:520,margin:"0 auto 32px"}}>{t.heroP}</p>
                <div style={{display:"flex",justifyContent:"center",gap:32,flexWrap:"wrap"}}>
                  {[{n:"120+",l:t.stats.a},{n:"3",l:t.stats.l},{n:"6",l:t.stats.m},{n:"500+",l:t.stats.d}].map((s,i)=>(
                    <div key={i} style={{textAlign:"center"}}>
                      <div style={{fontFamily:fD,fontSize:26,fontWeight:700,color:acc}}>{s.n}</div>
                      <div style={{fontSize:10,color:txt2,marginTop:2}}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Categories Grid */}
            <section style={{padding:"48px 24px",maxWidth:1100,margin:"0 auto"}}>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:16}}>
                {CAT_KEYS.map((k,i)=>{
                  const cat=t.cats[k]; const color=CAT_COLORS[k]; const isH=hovCat===k;
                  return(
                    <div key={k} onClick={()=>navigate("cat:"+k)}
                      onMouseEnter={()=>setHovCat(k)} onMouseLeave={()=>setHovCat(null)}
                      style={{
                        background:isH?(dark?"#22222e":"#f5f5f0"):bg2,
                        border:`1px solid ${isH?color+"44":bdr}`,borderRadius:16,padding:24,cursor:"pointer",
                        transition:"all .3s cubic-bezier(.4,0,.2,1)",
                        transform:isH?"translateY(-4px)":"none",
                        boxShadow:isH?`0 12px 40px ${color}12`:"none",
                        animation:`fadeUp .5s ease ${i*.06}s both`,
                      }}>
                      <div style={{fontSize:28,marginBottom:12}}>{cat.icon}</div>
                      <h3 style={{fontFamily:fD,fontSize:19,fontWeight:600,marginBottom:6,
                        color:isH?color:txt,transition:"color .3s"}}>{cat.n}</h3>
                      <p style={{fontSize:13,color:txt2,lineHeight:1.6,marginBottom:12}}>{cat.d}</p>
                      <div style={{fontSize:11,color:color,opacity:isH?1:0,transition:"opacity .3s",fontWeight:500}}>
                        {t.heroExplore} {isRTL?"←":"→"}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Interactive Tools */}
            <section style={{padding:"16px 24px 48px",maxWidth:1100,margin:"0 auto"}}>
              <h2 style={{fontFamily:fD,fontSize:24,fontWeight:600,textAlign:"center",marginBottom:24}}>{t.interactiveTools}</h2>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12}}>
                {t.toolsList.map((tool,i)=>(
                  <div key={i} onClick={()=>navigate("tools")}
                    style={{display:"flex",alignItems:"center",gap:14,padding:"16px 18px",
                      border:`1px solid ${bdr}`,borderRadius:14,cursor:"pointer",
                      background:dark?"rgba(192,192,192,.02)":"rgba(0,0,0,.01)",transition:"all .3s",
                    }}>
                    <div style={{width:40,height:40,borderRadius:10,
                      background:`linear-gradient(135deg,${acc}22,${gold}22)`,
                      display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{tool.icon}</div>
                    <div>
                      <div style={{fontWeight:600,fontSize:14,marginBottom:2}}>{tool.n}</div>
                      <div style={{fontSize:12,color:txt2}}>{tool.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ─── CATEGORY PAGE ─── */}
        {currentCat && (
          <div style={{animation:"fadeUp .4s ease",maxWidth:900,margin:"0 auto",padding:"24px 24px 64px"}}>
            <button onClick={()=>navigate("home")} style={{border:"none",cursor:"pointer",background:"transparent",
              color:txt2,fontSize:13,marginBottom:16,fontFamily:fB,padding:0}}>{t.backHome}</button>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:24}}>
              <div style={{fontSize:40}}>{t.cats[currentCat].icon}</div>
              <div>
                <h1 style={{fontFamily:fD,fontSize:32,fontWeight:700,color:CAT_COLORS[currentCat]}}>{t.cats[currentCat].n}</h1>
                <p style={{fontSize:14,color:txt2}}>{t.cats[currentCat].d}</p>
              </div>
            </div>

            {/* Article list */}
            <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:32}}>
              {t.cats[currentCat].articles.map((a,i)=>(
                <div key={i} style={{
                  display:"flex",alignItems:"center",justifyContent:"space-between",
                  padding:"18px 20px",border:`1px solid ${bdr}`,borderRadius:14,
                  background:bg2,cursor:"pointer",transition:"all .2s",
                  animation:`fadeUp .4s ease ${i*.05}s both`,
                }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=CAT_COLORS[currentCat]+"44";e.currentTarget.style.transform="translateX(4px)";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor=bdr;e.currentTarget.style.transform="none";}}
                >
                  <div>
                    <div style={{fontFamily:fD,fontSize:16,fontWeight:600,marginBottom:3}}>{a}</div>
                    <div style={{fontSize:12,color:txt2}}>{5+Math.floor(Math.random()*8)} {t.readTime}</div>
                  </div>
                  <span style={{color:txt2,fontSize:16}}>{isRTL?"‹":"›"}</span>
                </div>
              ))}
            </div>

            {/* Embedded calc for manufacturing */}
            {currentCat==="manufacturing" && <MiniCalc dark={dark} t={lang} />}
          </div>
        )}

        {/* ─── TOOLS PAGE ─── */}
        {page==="tools" && (
          <div style={{animation:"fadeUp .4s ease",maxWidth:900,margin:"0 auto",padding:"32px 24px 64px"}}>
            <button onClick={()=>navigate("home")} style={{border:"none",cursor:"pointer",background:"transparent",
              color:txt2,fontSize:13,marginBottom:16,fontFamily:fB,padding:0}}>{t.backHome}</button>
            <h1 style={{fontFamily:fD,fontSize:32,fontWeight:700,marginBottom:8}}>{t.interactiveTools}</h1>
            <p style={{fontSize:14,color:txt2,marginBottom:32}}>{t.tagline}</p>

            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:16,marginBottom:32}}>
              {t.toolsList.map((tool,i)=>(
                <div key={i} style={{
                  border:`1px solid ${bdr}`,borderRadius:16,padding:24,background:bg2,
                  cursor:"pointer",transition:"all .3s",
                  animation:`fadeUp .4s ease ${i*.05}s both`,
                }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.borderColor=gold+"44";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.borderColor=bdr;}}
                >
                  <div style={{fontSize:32,marginBottom:12}}>{tool.icon}</div>
                  <div style={{fontFamily:fD,fontSize:17,fontWeight:600,marginBottom:4}}>{tool.n}</div>
                  <div style={{fontSize:13,color:txt2,lineHeight:1.6}}>{tool.d}</div>
                </div>
              ))}
            </div>

            <MiniCalc dark={dark} t={lang} />
          </div>
        )}

        {/* ─── ABOUT PAGE ─── */}
        {page==="about" && (
          <div style={{animation:"fadeUp .4s ease",maxWidth:700,margin:"0 auto",padding:"48px 24px 64px",textAlign:"center"}}>
            <div style={{width:60,height:60,borderRadius:"50%",background:`linear-gradient(135deg,${acc},${gold})`,
              display:"flex",alignItems:"center",justifyContent:"center",font:`700 22px ${fD}`,color:"#0f0f14",margin:"0 auto 20px"}}>Ag</div>
            <h1 style={{fontFamily:fD,fontSize:36,fontWeight:700,marginBottom:12}}>{t.brand}</h1>
            <p style={{fontSize:16,color:txt2,lineHeight:1.8,marginBottom:32,maxWidth:500,margin:"0 auto 32px"}}>{t.footerDesc}</p>
            <div style={{display:"flex",justifyContent:"center",gap:12,marginBottom:32}}>
              {["islamicatlas.org","GitHub","CC BY-NC-SA 4.0"].map((link,i)=>(
                <span key={i} style={{padding:"6px 14px",borderRadius:8,border:`1px solid ${bdr}`,fontSize:12,color:txt2}}>{link}</span>
              ))}
            </div>
            <div style={{padding:"20px 24px",borderRadius:14,border:`1px solid ${gold}22`,background:`${gold}05`,
              display:"inline-flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:12,color:txt2}}>{t.sponsorTag}</span>
              <span style={{fontFamily:fD,fontWeight:600,color:gold}}>İstanbul Gümüş</span>
              <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener"
                style={{fontSize:11,color:txt2,textDecoration:"none",padding:"3px 8px",borderRadius:5,border:`1px solid ${bdr}`}}>@istanbulgumustr</a>
            </div>
          </div>
        )}
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer style={{borderTop:`1px solid ${bdr}`,padding:"40px 24px 28px",background:bg3}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          {/* Sponsor */}
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:28,
            padding:"14px 20px",borderRadius:12,background:`${gold}06`,border:`1px solid ${gold}12`}}>
            <span style={{fontSize:11,color:txt2}}>{t.sponsorTag}</span>
            <span style={{fontFamily:fD,fontWeight:600,fontSize:14,color:gold}}>İstanbul Gümüş</span>
            <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener"
              style={{fontSize:11,color:txt2,textDecoration:"none",padding:"2px 8px",borderRadius:5,border:`1px solid ${bdr}`}}>@istanbulgumustr</a>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:28,marginBottom:28}}>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10}}>
                <div style={{width:24,height:24,borderRadius:"50%",background:`linear-gradient(135deg,${acc},${gold})`,
                  display:"flex",alignItems:"center",justifyContent:"center",font:`700 9px ${fD}`,color:"#0f0f14"}}>Ag</div>
                <span style={{fontFamily:fD,fontWeight:600,fontSize:14}}>{t.brand}</span>
              </div>
              <p style={{fontSize:12,color:txt2,lineHeight:1.7}}>{t.footerDesc}</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {CAT_KEYS.slice(0,5).map(k=>(
                <a key={k} href="#" onClick={e=>{e.preventDefault();navigate("cat:"+k);}}
                  style={{fontSize:12,color:txt2,textDecoration:"none",transition:"color .2s"}}
                  onMouseEnter={e=>e.target.style.color=CAT_COLORS[k]}
                  onMouseLeave={e=>e.target.style.color=txt2}>{t.cats[k].icon} {t.cats[k].n}</a>
              ))}
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {t.footerLinks.map((link,i)=>(
                <a key={i} href="#" style={{fontSize:12,color:txt2,textDecoration:"none"}}>{link}</a>
              ))}
            </div>
          </div>

          <div style={{borderTop:`1px solid ${bdr}`,paddingTop:16,display:"flex",justifyContent:"space-between",
            alignItems:"center",flexWrap:"wrap",gap:8,fontSize:10,color:txt2}}>
            <span>{t.license}</span>
            <span style={{opacity:.5}}>{t.sponsorNote}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
