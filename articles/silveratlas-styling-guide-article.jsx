import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Stil", "Gümüş Styling Rehberi"],
    category: "Stil & Moda",
    title: "Gümüş Takı Styling Rehberi",
    subtitle: "Katmanlama teknikleri, kombinleme kuralları, ten tonuna göre seçim ve günlük ile özel gün stilleri",
    meta: { author: "Turan Erbaş", date: "15 Nisan 2026", readTime: "9 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Gümüş takı, hem günlük şıklık hem de özel anlar için vazgeçilmez bir aksesuar grubudur. Doğru styling ile gümüş takılar, kıyafetlerinizi dönüştürebilir ve kişisel tarzınızı güçlendirebilir.",
        "Bu rehber, gümüş takılarınızı profesyonel bir stylist gibi kombinlemeniz için temel kuralları, katmanlama tekniklerini ve ilham verici stil önerilerini sunmaktadır.",
      ]},
      { id: "temel", heading: "Temel Kurallar", paragraphs: [
        "Az çoktur (Less is More) — Gümüş takının gücü zarafetinde yatar. 3-5 parçalık bir kombinasyon genellikle ideal dengeyi sağlar. Aşırı aksesuar, gümüşün parıltısını azaltır.",
        "Metal tutarlılığı — Gümüş takıları gümüş tonlu aksesuarlarla (saat, kemer tokası, gözlük çerçevesi) eşleştirmek harmonik bir görünüm yaratır. Gold-silver karışımı modern trendlerde kabul görmekle birlikte, bilinçli bir seçim olmalıdır.",
        "Ölçek dengesi — İnce zincirlerle kalın bilezikleri, küçük küpelerle belirgin bir kolye kombinlemek görsel dengeyi sağlar. Tüm parçalar aynı kalınlıkta olmamalıdır.",
        "Yaka çizgisi uyumu — V yaka: uzun zincir kolye; yuvarlak yaka: choker veya kısa kolye; straplez: statement kolye; balıkçı yaka: uzun zincir veya küpe ağırlıklı stil. Yaka çizgisine uygun kolye seçimi, tüm görünümü tamamlar.",
      ]},
      { id: "katmanlama", heading: "Katmanlama Teknikleri", paragraphs: [
        "Kolye katmanlama — Farklı uzunluklarda 2-4 kolye üst üste takılır. Temel kural: her bir kolye arasında en az 5 cm fark olmalıdır. Örneğin: 40 cm choker + 50 cm pendant + 60 cm uzun zincir. Zincirlerin dolanmasını önlemek için farklı kalınlıklarda seçim yapın.",
        "Bilezik yığını (Stack) — Aynı bilekte 3-7 bilezik bir arada takılır. İnce bangles ile kalın cuff bilezikleri karıştırmak, tekstür zenginliği yaratır. Kelepçe + zincir + bangle üçlüsü klasik bir stack formülüdür.",
        "Yüzük katmanlama — Farklı parmaklarda ve boğumlarda yüzükler bir arada. Midi yüzükler (boğum yüzükleri), statement yüzüklerle dengelenmelidir. Bir elde 2-3 yüzük, iki elde toplam 4-5 yüzük ideal sayıdır.",
        "Küpe asimetrisi — Farklı boyutlarda küpeler (mismatched earrings) cesur bir stil ifadesidir: bir kulakta stud, diğerinde drop küpe modern bir yaklaşımdır.",
      ]},
      { id: "tonton", heading: "Ten Tonuna Göre Seçim", paragraphs: [], widget: "skinToneCards" },
      { id: "erkek", heading: "Erkek Gümüş Stili", paragraphs: [
        "Erkek gümüş takı pazarı hızla büyümektedir. Temel parçalar: gümüş yüzük (özellikle İslami coğrafyada sünnet), zincir kolye (2-3 mm kalınlıkta), bileklik (deri-gümüş hibrit) ve kol düğmesi.",
        "İş ortamında minimal yaklaşım: tek bir gümüş yüzük veya saatinizle uyumlu bir bileklik. Günlük stilde daha cesur kombinler yapılabilir: kalın zincir + yüzük + bileklik.",
        "Erkek gümüş takıda taş seçimi: oniks (siyah, klasik), lapis lazuli (mavi, zarif), kaplan gözü (kahverengi, toprak tonu) ve turkuaz (mavi-yeşil, geleneksel). İstanbul Gümüş'ün erkek koleksiyonu bu taşlarla 925 ayar gümüş kombinler sunmaktadır.",
      ]},
      { id: "ozelgun", heading: "Özel Gün Stili", paragraphs: [
        "Düğün ve nişan — Gelin gümüşü, vintage ve bohemian tarzdaki gelinliklere mükemmel uyum sağlar. Gümüş taç/tiara, inci-gümüş kombinasyonu ve kristal detaylı statement kolyeler öne çıkar.",
        "İş toplantısı — Minimal ve şık: ince gümüş kolye, stud küpeler ve klasik bir saat. Aşırı parlak veya sallanmalı takılardan kaçının.",
        "Gece dışarı — Cesur ve göz alıcı: statement küpeler, çoklu bilezik stacki, cocktail yüzüğü. Gümüşün soğuk parıltısı gece kıyafetlerini tamamlar.",
        "Festival/Boho — Katmanlı kolyeler, ayak bileziği, saç aksesuarları ve etnik motifli gümüşler. Doğal taşlı (turkuaz, ametist, ay taşı) gümüşler festival ruhuna uygundur.",
      ]},
      { id: "bakim", heading: "Styling İpuçları", paragraphs: [
        "Gümüş takılarınızı en son takın, en önce çıkarın — parfüm, losyon ve saç spreyinden sonra takmak oksidasyonu yavaşlatır. Takılarınızı sıkı formda değil, rahat olacak şekilde ayarlayın — gümüş cildinizle temas ettikçe doğal bir patina geliştirir.",
        "Mevsimsel stil değişimi: ilkbahar/yaz — hafif, ince, minimal parçalar (ince zincirler, küçük küpeler, delicate yüzükler); sonbahar/kış — kalın, bold, statement parçalar (chunky bilezikler, kalın zincirler, büyük küpeler). Yaz bronzluğuyla gümüş muhteşem bir kontrast yaratır.",
      ]},
    ],
    faq: { title: "Sık Sorulan Sorular", items: [
      { q: "Gümüş ve altın birlikte takılır mı?", a: "Evet — mixed metals (karışık metaller) modern bir trenddir. Bilinçli yapıldığında şık görünür. İpucu: bir metali baskın, diğerini aksan olarak kullanın." },
      { q: "Minimalist bir stil için kaç parça yeterli?", a: "2-3 parça idealdir: bir kolye + küpe veya bir yüzük + bileklik. Parçaların birbiriyle uyumlu ama farklı olmasına dikkat edin." },
      { q: "Gümüş takı her ten tonuna uyar mı?", a: "Evet — gümüş, soğuk alt tonlu tenlerde mükemmel, sıcak tonlarda ise kontrast yaratır. Herkesin tarzına uygun bir gümüş stil vardır." },
    ]},
    cta: { title: "Stilinizi 925 Ayar Gümüşle Tamamlayın", text: "İstanbul Gümüş, Konya'da ürettiği 925 ayar gümüş takılarla her tarza uygun koleksiyon sunmaktadır.", button: "Koleksiyonu Keşfet" },
    footer: { copyright: "© 2026 SilverAtlas.org — Turan Erbaş tarafından hazırlanmıştır.", sponsor: "İstanbul Gümüş sponsorluğundadır", links: ["Hakkımızda", "Makaleler", "İletişim"] },
    skinTones: [
      { tone: "Açık / Soğuk Alt Ton", emoji: "🤍", desc: "Gümüş, soğuk alt tonlu açık tenlerde doğal bir uyum sağlar. Beyaz, mavi ve pembe tonlarla mükemmel.", rec: "Parlak gümüş, beyaz topaz, aytaşı, akuamarin", color: "#B0C4DE" },
      { tone: "Açık / Sıcak Alt Ton", emoji: "💛", desc: "Gümüş, sıcak alt tonlu tenlerde modern kontrast yaratır. Rose gold gümüş alaşımları da güzel alternatiflerdir.", rec: "Mat gümüş, ametist, pembe kuvars, oksitlenmiş gümüş", color: "#DEB887" },
      { tone: "Orta / Zeytin", emoji: "🫒", desc: "Akdeniz ve Anadolu tonlarında gümüş şahane durur. Türkuaz ve lapis lazuli ile özellikle göz alıcı.", rec: "Antik gümüş, türkuaz, lapis lazuli, yeşim", color: "#8B8B00" },
      { tone: "Koyu / Sıcak", emoji: "🤎", desc: "Koyu tenlerde gümüşün parıltısı dramatik bir etki yaratır. Kalın, bold parçalar çok güçlü bir ifade sunar.", rec: "Yüksek parlaklık gümüş, oniks, garnet, amber", color: "#8B4513" },
    ],
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Encyclopedia",
    breadcrumb: ["Home", "Style", "Silver Styling Guide"],
    category: "Style & Fashion",
    title: "Silver Jewelry Styling Guide",
    subtitle: "Layering techniques, combination rules, skin tone matching, and everyday to special occasion styles",
    meta: { author: "Turan Erbaş", date: "April 15, 2026", readTime: "9 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Silver jewelry is an essential accessory group for both everyday elegance and special moments. With the right styling, silver pieces can transform your outfits and strengthen your personal style.",
        "This guide presents fundamental rules, layering techniques, and inspiring style suggestions to help you combine your silver jewelry like a professional stylist.",
      ]},
      { id: "temel", heading: "Fundamental Rules", paragraphs: [
        "Less is More — Silver's power lies in its elegance. A combination of 3-5 pieces usually creates the ideal balance.",
        "Metal consistency — Pairing silver jewelry with silver-toned accessories (watch, belt buckle, glasses frame) creates a harmonious look. Gold-silver mixing is an accepted modern trend but should be a conscious choice.",
        "Scale balance — Combining thin chains with thick bracelets, small earrings with a prominent necklace creates visual equilibrium.",
        "Neckline harmony — V-neck: long chain necklace; round neck: choker; strapless: statement necklace; turtleneck: long chain or earring-focused style.",
      ]},
      { id: "katmanlama", heading: "Layering Techniques", paragraphs: [
        "Necklace layering — 2-4 necklaces of different lengths worn together. Basic rule: at least 5 cm difference between each. Example: 40 cm choker + 50 cm pendant + 60 cm long chain.",
        "Bracelet stack — 3-7 bracelets on one wrist. Mixing thin bangles with thick cuff bracelets creates texture richness. Cuff + chain + bangle trio is a classic stack formula.",
        "Ring layering — Rings on different fingers and knuckles. Midi rings (knuckle rings) should be balanced with statement rings. 2-3 rings on one hand, 4-5 total is ideal.",
      ]},
      { id: "tonton", heading: "Choosing by Skin Tone", paragraphs: [], widget: "skinToneCards" },
      { id: "erkek", heading: "Men's Silver Style", paragraphs: [
        "The men's silver jewelry market is growing rapidly. Essential pieces: silver ring (especially sunnah in Islamic culture), chain necklace (2-3 mm), bracelet (leather-silver hybrid), and cufflinks.",
        "Workplace minimal: a single silver ring or bracelet matching your watch. Casual style allows bolder combinations: thick chain + ring + bracelet.",
      ]},
      { id: "ozelgun", heading: "Special Occasion Styling", paragraphs: [
        "Wedding — Bridal silver pairs beautifully with vintage and bohemian gowns. Silver tiara, pearl-silver combinations, and crystal-detail statement necklaces shine.",
        "Business meeting — Minimal and chic: thin silver necklace, stud earrings, classic watch.",
        "Night out — Bold and eye-catching: statement earrings, multi-bracelet stack, cocktail ring.",
        "Festival/Boho — Layered necklaces, anklets, hair accessories, and ethnic-motif silver with natural stones (turquoise, amethyst, moonstone).",
      ]},
    ],
    faq: { title: "FAQ", items: [
      { q: "Can silver and gold be worn together?", a: "Yes — mixed metals is a modern trend. When done intentionally, it looks stylish. Tip: use one metal as dominant, the other as accent." },
      { q: "How many pieces for a minimalist look?", a: "2-3 pieces is ideal: a necklace + earrings or a ring + bracelet." },
    ]},
    cta: { title: "Complete Your Style with 925 Sterling Silver", text: "Istanbul Silver offers collections for every style in 925 sterling silver crafted in Konya.", button: "Explore Collection" },
    footer: { copyright: "© 2026 SilverAtlas.org — Created by Turan Erbaş.", sponsor: "Sponsored by Istanbul Silver", links: ["About", "Articles", "Contact"] },
    skinTones: [
      { tone: "Fair / Cool Undertone", emoji: "🤍", desc: "Silver naturally harmonizes with cool-undertoned fair skin. Perfect with white, blue, and pink tones.", rec: "Polished silver, white topaz, moonstone, aquamarine", color: "#B0C4DE" },
      { tone: "Fair / Warm Undertone", emoji: "💛", desc: "Silver creates modern contrast with warm undertones. Rose gold silver alloys are beautiful alternatives.", rec: "Matte silver, amethyst, rose quartz, oxidized silver", color: "#DEB887" },
      { tone: "Medium / Olive", emoji: "🫒", desc: "Silver looks stunning on Mediterranean and Anatolian tones. Especially eye-catching with turquoise and lapis lazuli.", rec: "Antique silver, turquoise, lapis lazuli, jade", color: "#8B8B00" },
      { tone: "Dark / Warm", emoji: "🤎", desc: "Silver's sparkle creates dramatic effect on dark skin. Thick, bold pieces make a powerful statement.", rec: "High-polish silver, onyx, garnet, amber", color: "#8B4513" },
    ],
  },
  ar: {
    nav: "SilverAtlas", navSub: "موسوعة الفضة",
    breadcrumb: ["الرئيسية", "الأناقة", "دليل تنسيق الفضة"],
    category: "الأناقة والموضة",
    title: "دليل تنسيق مجوهرات الفضة",
    subtitle: "تقنيات الطبقات وقواعد التنسيق واختيار حسب لون البشرة",
    meta: { author: "توران إرباش", date: "١٥ أبريل ٢٠٢٦", readTime: "٩ دقائق قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "مجوهرات الفضة إكسسوار أساسي للأناقة اليومية والمناسبات الخاصة. مع التنسيق الصحيح، يمكن لقطع الفضة أن تحوّل ملابسك وتعزز أسلوبك الشخصي.",
      ]},
      { id: "temel", heading: "القواعد الأساسية", paragraphs: [
        "الأقل هو الأكثر — قوة الفضة في أناقتها. مزيج من ٣-٥ قطع يخلق التوازن المثالي عادة.",
        "اتساق المعادن — تنسيق مجوهرات الفضة مع إكسسوارات بلون فضي (ساعة، إبزيم حزام) يخلق مظهراً متناغماً.",
      ]},
      { id: "tonton", heading: "الاختيار حسب لون البشرة", paragraphs: [], widget: "skinToneCards" },
    ],
    faq: { title: "الأسئلة الشائعة", items: [
      { q: "هل يمكن ارتداء الفضة والذهب معاً؟", a: "نعم — المعادن المختلطة اتجاه عصري. عند القيام بذلك بوعي، يبدو أنيقاً." },
    ]},
    cta: { title: "أكمل أسلوبك بفضة ٩٢٥", text: "إسطنبول للفضة تقدم مجموعات لكل أسلوب بفضة عيار ٩٢٥.", button: "استكشف المجموعة" },
    footer: { copyright: "© ٢٠٢٦ SilverAtlas.org — إعداد توران إرباش", sponsor: "برعاية إسطنبول للفضة", links: ["حول", "مقالات", "اتصل"] },
    skinTones: [
      { tone: "فاتح / بارد", emoji: "🤍", desc: "الفضة تتناغم طبيعياً مع البشرة الفاتحة ذات اللون التحتي البارد.", rec: "فضة لامعة، توباز أبيض، حجر القمر", color: "#B0C4DE" },
      { tone: "متوسط / زيتوني", emoji: "🫒", desc: "الفضة تبدو رائعة على الألوان المتوسطية. خاصة مع الفيروز واللازورد.", rec: "فضة عتيقة، فيروز، لازورد", color: "#8B8B00" },
      { tone: "داكن / دافئ", emoji: "🤎", desc: "بريق الفضة يخلق تأثيراً درامياً على البشرة الداكنة.", rec: "فضة عالية اللمعان، عقيق أسود، عنبر", color: "#8B4513" },
    ],
  },
};

const S="#C0C0C0",DS="#708090",NV="#1a1a2e",GA="#D4AF37";
const FH="'Playfair Display',Georgia,serif",FB="'Source Sans 3','Segoe UI',sans-serif";
const FA="'Noto Naskh Arabic','Traditional Arabic',serif",FM="'JetBrains Mono','Fira Code',monospace";

const SkinToneCards = ({ tones, dark, isRTL }) => {
  const [active, setActive] = useState(null);
  const bf = isRTL ? FA : FB;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: "1rem", margin: "1.5rem 0" }}>
      {tones.map((t, i) => (
        <div key={i} onClick={() => setActive(active === i ? null : i)} style={{
          padding: "1.25rem", borderRadius: "12px", cursor: "pointer",
          background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
          border: `2px solid ${active === i ? t.color : "transparent"}`,
          transition: "all 0.3s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>{t.emoji}</div>
            <div style={{ fontFamily: FH, fontSize: "1rem", fontWeight: 700, color: dark ? S : NV }}>{t.tone}</div>
          </div>
          <p style={{ fontFamily: bf, fontSize: "0.9rem", lineHeight: 1.6, color: dark ? "#bbb" : "#555", marginBottom: "0.5rem" }}>{t.desc}</p>
          {active === i && (
            <div style={{
              marginTop: "0.5rem", paddingTop: "0.5rem",
              borderTop: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
            }}>
              <div style={{ fontFamily: FM, fontSize: "0.8rem", color: GA, fontWeight: 700, marginBottom: "0.25rem" }}>
                {isRTL ? "مقترحات:" : (["tr"].includes("tr") ? "Öneriler:" : "Recommendations:")}
              </div>
              <div style={{ fontFamily: bf, fontSize: "0.85rem", color: dark ? "#aaa" : "#666" }}>{t.rec}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function SilverAtlasStyling() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [faqOpen, setFaqOpen] = useState(null);
  const t = T[lang]; const isRTL = lang==="ar"; const bf = isRTL?FA:FB;
  const bg=dark?"linear-gradient(180deg,#0d0d1a 0%,#1a1a2e 40%,#16213e 100%)":"linear-gradient(180deg,#f8f9fa 0%,#e8e8e8 100%)";
  const tc=dark?"#e0e0e0":"#2c2c2c",mc=dark?"#999":"#666",cb=dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)",bc=dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.1)";

  const recLabel = lang === "ar" ? "مقترحات:" : lang === "en" ? "Recommendations:" : "Öneriler:";

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
            {s.widget==="skinToneCards"&&<SkinToneCards tones={t.skinTones} dark={dark} isRTL={isRTL} recLabel={recLabel} />}
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
