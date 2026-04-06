import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Kültür", "Gümüş Müzeleri"],
    category: "Kültür",
    title: "Dünyanın En Önemli Gümüş Müzeleri",
    subtitle: "Topkapı'dan Victoria & Albert'e, Metropolitan'dan Hermitage'a — gümüş hazinelerinin adresleri",
    meta: { author: "Turan Erbaş", date: "15 Nisan 2026", readTime: "12 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Gümüş, binlerce yıldır insanlık tarihinin en değerli malzemelerinden biri olmuştur. Dünyanın büyük müzeleri, farklı medeniyetlerin gümüş ustalığını sergileyen olağanüstü koleksiyonlara ev sahipliği yapmaktadır.",
        "Bu rehber, gümüş severler için dünyanın en önemli müze koleksiyonlarını tanıtmakta ve her birinin öne çıkan eserlerini ele almaktadır.",
      ]},
      { id: "muzeler", heading: "Müze Rehberi", paragraphs: [], widget: "museumCards" },
      { id: "turkiye", heading: "Türkiye'deki Gümüş Koleksiyonları", paragraphs: [
        "Topkapı Sarayı Müzesi — İstanbul'daki bu saray müzesi, Osmanlı İmparatorluğu'nun en zengin gümüş koleksiyonuna sahiptir. Mukaddes Emanetler bölümünde Hz. Muhammed'e atfedilen gümüş eşyalar, Hazine bölümünde ise Osmanlı padişahlarının gümüş tahtı, gülabdanları, buhurdanları ve takıları sergilenmektedir. Özellikle III. Ahmed Çeşmesi'nin gümüş modeli ve Topkapı Hançeri dikkat çeker.",
        "Türk ve İslam Eserleri Müzesi — Sultanahmet'teki bu müze, Selçuklu ve Osmanlı dönemine ait gümüş eserler barındırır: sikke koleksiyonu, gümüş Kur'an mahfazaları, buhurdanlar ve ağırlıklar.",
        "Konya Mevlana Müzesi — Mevlevi dervişlerin gümüş tasları, gülabdanları ve ritüel objeleri sergilenir. Mevlana'nın sandukası üzerindeki gümüş işlemeler eşsiz örneklerdir.",
        "Ankara Anadolu Medeniyetleri Müzesi — Hitit, Frig, Urartu ve Lidya dönemlerine ait gümüş eserler burada korunmaktadır. Karun Hazinesi'nin gümüş parçaları koleksiyonun en önemli eserlerindendir.",
      ]},
      { id: "avrupa", heading: "Avrupa Müzeleri", paragraphs: [
        "Victoria and Albert Museum (Londra) — Dünyanın en kapsamlı dekoratif sanat müzesi olan V&A, 5.000'den fazla gümüş eser barındırmaktadır. Rosalinde and Arthur Gilbert Collection, İngiliz gümüşünün en zengin koleksiyonlarından biridir. Tudor dönemi gümüş kadehleri, Huguenot ustalarının eserleri ve Art Nouveau gümüşleri öne çıkar.",
        "Hermitage Müzesi (St. Petersburg) — Rusya'nın en büyük müzesi, Çarlık döneminin göz kamaştırıcı gümüş koleksiyonuna sahiptir. Fabergé atölyesinin gümüş eserleri, Osmanlı ve İran hediye gümüşleri ve İskit kurganlarından çıkan antik gümüşler dikkat çekmektedir.",
        "Rijksmuseum (Amsterdam) — Hollanda Altın Çağı'nın gümüş ustalığını yansıtan koleksiyon. Johannes Lutma ve Adam van Vianen gibi ustaların eserleri, 17. yüzyıl Avrupa gümüşçülüğünün zirvesini temsil eder.",
      ]},
      { id: "amerika", heading: "Amerika Müzeleri", paragraphs: [
        "Metropolitan Museum of Art (New York) — Met'in American Wing bölümünde Paul Revere, Tiffany & Co. ve Gorham gibi Amerikan gümüş ustalarının eserleri; European Decorative Arts bölümünde ise ortaçağdan 19. yüzyıla İngiliz, Fransız ve Alman gümüşleri sergilenir. İslami Sanat galerisinde de Memluk ve Osmanlı gümüş eserleri yer almaktadır.",
        "Smithsonian American Art Museum (Washington) — Amerikan gümüşçülük tarihinin en kapsamlı arşivi. Kolonyal dönemden 20. yüzyıla gümüş eserler, Amerikan zanaat geleneğini belgeler.",
      ]},
      { id: "asya", heading: "Asya Müzeleri", paragraphs: [
        "Ulusal Müze (Yeni Delhi) — Mughal İmparatorluğu'nun gümüş hazineleri: hançerler, takılar, ritüel kaplar ve mücevherli sandıklar. Hint gümüş işçiliğinin tüm tekniklerini bir arada görebilirsiniz.",
        "Pekin Ulusal Müzesi — Çin İmparatorluk saraylarının gümüş koleksiyonu: Tang ve Ming hanedanlıklarına ait gümüşler, İpek Yolu ticaretinin izlerini taşır.",
      ]},
      { id: "ipuclari", heading: "Ziyaret İpuçları", paragraphs: [
        "Gümüş koleksiyonlarını ziyaret ederken dikkat edilecek noktalar: ayar damgalarını inceleyin (eserin dönemi ve kökenini ortaya koyar), işçilik tekniklerini karşılaştırın (dövme, kazıma, telkâri, savatlama), fonksiyonel objelerdeki tasarım evrimini takip edin, fotoğraf izinlerini önceden kontrol edin (bazı bölümlerde flaşlı fotoğraf yasaktır), ve müze mağazalarında gümüş takı reprodüksiyonlarına göz atın.",
      ]},
    ],
    faq: { title: "Sık Sorulan Sorular", items: [
      { q: "En büyük gümüş koleksiyon hangisinde?", a: "Victoria and Albert Museum (Londra), 5.000'den fazla eseriyle dünyanın en kapsamlı gümüş koleksiyonuna sahiptir." },
      { q: "Türkiye'de en iyi gümüş koleksiyon nerede?", a: "Topkapı Sarayı Müzesi, Osmanlı gümüş eserlerinin en zengin koleksiyonuna ev sahipliği yapmaktadır." },
      { q: "Müzelerdeki gümüşler satılık mı?", a: "Müze koleksiyonları satılık değildir. Ancak müze mağazaları genellikle tarihi eserlerin reprodüksiyonlarını ve ilham alınmış takıları satmaktadır." },
    ]},
    cta: { title: "Müze Kalitesinde 925 Ayar Gümüş", text: "İstanbul Gümüş, müze eserlerinden ilham alan tasarımlarla 925 ayar gümüş takılar üretmektedir.", button: "Koleksiyonu Keşfet" },
    footer: { copyright: "© 2026 SilverAtlas.org — Turan Erbaş tarafından hazırlanmıştır.", sponsor: "İstanbul Gümüş sponsorluğundadır", links: ["Hakkımızda", "Makaleler", "İletişim"] },
    museums: [
      { name: "Topkapı Sarayı", city: "İstanbul", country: "Türkiye", pieces: "2.000+", highlight: "Osmanlı padişah gümüşleri, Mukaddes Emanetler", era: "15-19. yy", icon: "🕌", color: "#f44336" },
      { name: "Victoria & Albert", city: "Londra", country: "İngiltere", pieces: "5.000+", highlight: "Gilbert Koleksiyonu, Tudor gümüşleri", era: "12-20. yy", icon: "🏛️", color: "#2196F3" },
      { name: "Metropolitan Museum", city: "New York", country: "ABD", pieces: "3.500+", highlight: "Paul Revere, İslami gümüşler", era: "MÖ 3000-20. yy", icon: "🗽", color: "#4CAF50" },
      { name: "Hermitage", city: "St. Petersburg", country: "Rusya", pieces: "4.000+", highlight: "Fabergé, İskit altın-gümüşleri", era: "MÖ 7. yy-20. yy", icon: "🏰", color: "#9C27B0" },
      { name: "Rijksmuseum", city: "Amsterdam", country: "Hollanda", pieces: "1.800+", highlight: "Hollanda Altın Çağı gümüşleri", era: "16-18. yy", icon: "🌷", color: "#FF9800" },
      { name: "Anadolu Med. Müzesi", city: "Ankara", country: "Türkiye", pieces: "800+", highlight: "Hitit, Lidya, Karun Hazinesi", era: "MÖ 3000-MÖ 300", icon: "🏺", color: "#795548" },
    ],
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Encyclopedia",
    breadcrumb: ["Home", "Culture", "Silver Museums"],
    category: "Culture",
    title: "World's Most Important Silver Museums",
    subtitle: "From Topkapi to Victoria & Albert, Metropolitan to Hermitage — addresses of silver treasures",
    meta: { author: "Turan Erbaş", date: "April 15, 2026", readTime: "12 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Silver has been one of humanity's most precious materials for millennia. The world's great museums house extraordinary collections showcasing silver mastery from different civilizations.",
        "This guide introduces the most important museum collections for silver enthusiasts and highlights their standout pieces.",
      ]},
      { id: "muzeler", heading: "Museum Guide", paragraphs: [], widget: "museumCards" },
      { id: "turkiye", heading: "Silver Collections in Turkey", paragraphs: [
        "Topkapi Palace Museum — This Istanbul palace museum holds the Ottoman Empire's richest silver collection. The Holy Relics section displays silver items attributed to Prophet Muhammad, while the Treasury section showcases Ottoman sultans' silver thrones, rosewater sprinklers, censers, and jewelry.",
        "Museum of Turkish and Islamic Arts — Located in Sultanahmet, this museum houses Seljuk and Ottoman silver works: coin collections, silver Quran cases, censers, and weights.",
        "Konya Mevlana Museum — Silver bowls, rosewater sprinklers, and ritual objects of Mevlevi dervishes are exhibited. The silver engravings on Mevlana's sarcophagus are unique examples.",
      ]},
      { id: "avrupa", heading: "European Museums", paragraphs: [
        "Victoria and Albert Museum (London) — The world's most comprehensive decorative arts museum, the V&A houses over 5,000 silver objects. Tudor-period silver goblets, Huguenot masters' works, and Art Nouveau silver are highlights.",
        "Hermitage Museum (St. Petersburg) — Russia's largest museum holds a dazzling Tsarist silver collection, including Fabergé workshop pieces and ancient Scythian silver.",
        "Rijksmuseum (Amsterdam) — A collection reflecting Dutch Golden Age silver mastery, with works by Johannes Lutma and Adam van Vianen.",
      ]},
      { id: "amerika", heading: "American Museums", paragraphs: [
        "Metropolitan Museum of Art (New York) — The Met's American Wing features works by Paul Revere, Tiffany & Co., and Gorham; the European Decorative Arts section displays medieval through 19th-century European silver. The Islamic Art galleries also contain Mamluk and Ottoman silver.",
      ]},
    ],
    faq: { title: "FAQ", items: [
      { q: "Which museum has the largest silver collection?", a: "The Victoria and Albert Museum (London) has the world's most comprehensive silver collection with over 5,000 pieces." },
      { q: "Where is the best silver collection in Turkey?", a: "Topkapi Palace Museum houses the richest collection of Ottoman silver artifacts." },
    ]},
    cta: { title: "Museum-Quality 925 Sterling Silver", text: "Istanbul Silver creates jewelry inspired by museum masterpieces in 925 sterling silver.", button: "Explore Collection" },
    footer: { copyright: "© 2026 SilverAtlas.org — Created by Turan Erbaş.", sponsor: "Sponsored by Istanbul Silver", links: ["About", "Articles", "Contact"] },
    museums: [
      { name: "Topkapi Palace", city: "Istanbul", country: "Turkey", pieces: "2,000+", highlight: "Ottoman sultan silver, Holy Relics", era: "15th-19th c.", icon: "🕌", color: "#f44336" },
      { name: "Victoria & Albert", city: "London", country: "UK", pieces: "5,000+", highlight: "Gilbert Collection, Tudor silver", era: "12th-20th c.", icon: "🏛️", color: "#2196F3" },
      { name: "Metropolitan Museum", city: "New York", country: "USA", pieces: "3,500+", highlight: "Paul Revere, Islamic silver", era: "3000 BC-20th c.", icon: "🗽", color: "#4CAF50" },
      { name: "Hermitage", city: "St. Petersburg", country: "Russia", pieces: "4,000+", highlight: "Fabergé, Scythian gold-silver", era: "7th c. BC-20th c.", icon: "🏰", color: "#9C27B0" },
      { name: "Rijksmuseum", city: "Amsterdam", country: "Netherlands", pieces: "1,800+", highlight: "Dutch Golden Age silver", era: "16th-18th c.", icon: "🌷", color: "#FF9800" },
      { name: "Anatolian Civ. Museum", city: "Ankara", country: "Turkey", pieces: "800+", highlight: "Hittite, Lydian, Karun Treasure", era: "3000-300 BC", icon: "🏺", color: "#795548" },
    ],
  },
  ar: {
    nav: "SilverAtlas", navSub: "موسوعة الفضة",
    breadcrumb: ["الرئيسية", "الثقافة", "متاحف الفضة"],
    category: "الثقافة",
    title: "أهم متاحف الفضة في العالم",
    subtitle: "من طوب قابي إلى فكتوريا وألبرت — عناوين كنوز الفضة",
    meta: { author: "توران إرباش", date: "١٥ أبريل ٢٠٢٦", readTime: "١٢ دقائق قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "كانت الفضة من أثمن المواد في تاريخ البشرية لآلاف السنين. تستضيف المتاحف الكبرى مجموعات استثنائية تعرض إتقان الفضة من حضارات مختلفة.",
      ]},
      { id: "muzeler", heading: "دليل المتاحف", paragraphs: [], widget: "museumCards" },
      { id: "turkiye", heading: "مجموعات الفضة في تركيا", paragraphs: [
        "متحف قصر طوب قابي — يملك أغنى مجموعة فضية عثمانية. يعرض قسم الأمانات المقدسة قطعاً فضية منسوبة للنبي محمد ﷺ.",
      ]},
    ],
    faq: { title: "الأسئلة الشائعة", items: [
      { q: "أي متحف يملك أكبر مجموعة فضة؟", a: "متحف فكتوريا وألبرت (لندن) يملك أشمل مجموعة فضة في العالم بأكثر من ٥٠٠٠ قطعة." },
    ]},
    cta: { title: "فضة ٩٢٥ بجودة المتاحف", text: "إسطنبول للفضة تصنع مجوهرات مستوحاة من روائع المتاحف.", button: "استكشف المجموعة" },
    footer: { copyright: "© ٢٠٢٦ SilverAtlas.org — إعداد توران إرباش", sponsor: "برعاية إسطنبول للفضة", links: ["حول", "مقالات", "اتصل"] },
    museums: [
      { name: "قصر طوب قابي", city: "إسطنبول", country: "تركيا", pieces: "+٢٠٠٠", highlight: "فضيات السلاطين العثمانيين", era: "ق١٥-١٩", icon: "🕌", color: "#f44336" },
      { name: "فكتوريا وألبرت", city: "لندن", country: "بريطانيا", pieces: "+٥٠٠٠", highlight: "مجموعة غيلبرت، فضيات تيودور", era: "ق١٢-٢٠", icon: "🏛️", color: "#2196F3" },
      { name: "متحف المتروبوليتان", city: "نيويورك", country: "أمريكا", pieces: "+٣٥٠٠", highlight: "بول ريفير، الفضة الإسلامية", era: "٣٠٠٠ ق.م-ق٢٠", icon: "🗽", color: "#4CAF50" },
      { name: "الإرميتاج", city: "سانت بطرسبرغ", country: "روسيا", pieces: "+٤٠٠٠", highlight: "فابرجيه، فضة السكيثيين", era: "ق٧ ق.م-ق٢٠", icon: "🏰", color: "#9C27B0" },
    ],
  },
};

const S="#C0C0C0",DS="#708090",NV="#1a1a2e",GA="#D4AF37";
const FH="'Playfair Display',Georgia,serif",FB="'Source Sans 3','Segoe UI',sans-serif";
const FA="'Noto Naskh Arabic','Traditional Arabic',serif",FM="'JetBrains Mono','Fira Code',monospace";

const MuseumCards = ({ museums, dark, isRTL }) => {
  const [active, setActive] = useState(null);
  const bf = isRTL ? FA : FB;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1rem", margin: "1.5rem 0" }}>
      {museums.map((m, i) => (
        <div key={i} onClick={() => setActive(active === i ? null : i)} style={{
          padding: "1.25rem", borderRadius: "12px", cursor: "pointer",
          background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
          border: `1px solid ${active === i ? m.color : (dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)")}`,
          transition: "all 0.3s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "2rem" }}>{m.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: FH, fontSize: "1.05rem", fontWeight: 700, color: dark ? S : NV }}>{m.name}</div>
              <div style={{ fontFamily: FM, fontSize: "0.75rem", color: m.color }}>{m.city}, {m.country}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", fontFamily: FM, fontSize: "0.75rem", color: DS, marginTop: "0.5rem", flexWrap: "wrap" }}>
            <span>📦 {m.pieces}</span>
            <span>📅 {m.era}</span>
          </div>
          {active === i && (
            <div style={{
              marginTop: "0.75rem", paddingTop: "0.75rem",
              borderTop: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
              fontFamily: bf, fontSize: "0.9rem", lineHeight: 1.6, color: dark ? "#aaa" : "#555",
            }}>
              <strong style={{ color: dark ? GA : NV }}>Öne Çıkan / Highlight:</strong> {m.highlight}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function SilverAtlasMuseums() {
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
            {s.widget==="museumCards"&&<MuseumCards museums={t.museums} dark={dark} isRTL={isRTL} />}
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
