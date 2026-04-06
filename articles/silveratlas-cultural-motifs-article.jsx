import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Moda", "Kültürel Motifler"],
    category: "Moda & Tasarım",
    title: "Gümüş Takıda Kültürel Motifler",
    subtitle: "Selçuklu geometrisi, Osmanlı çiçek desenleri ve İslami hat sanatının gümüşe yansıması",
    meta: { author: "Turan Erbaş", date: "15 Nisan 2026", readTime: "11 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Bir gümüş takıdaki desen, yüzyılların birikimini taşır. Selçuklu çini panolarındaki sonsuzluk geometrisi, Osmanlı lale bahçelerinin zarif eğrileri, İslam hat sanatının ritmik akışı — tümü modern gümüş takı tasarımına ilham veren derin kültürel kaynaklardır.",
        "Bu makale, Türk-İslam sanat geleneğinin gümüş takıdaki izlerini inceliyor: her motifin tarihsel kökenini, sembolik anlamını ve günümüz takı tasarımındaki yorumlarını keşfedeceksiniz.",
      ]},
      { id: "geometri", heading: "İslami Geometri: Sonsuzluğun Dili", paragraphs: [
        "İslami geometrik desenler, basit daire ve çokgen bölmelerinden doğar ancak sonsuz tekrarlarıyla evrenin düzenini simgeler. Gümüş takıda en yaygın kullanılan formlar: altıgen yıldız (Mühr-ü Süleyman), sekizgen yıldız, iç içe geçen daireler ve girih desenleridir.",
        "Bu desenlerin matematiksel temeli 10. yüzyılda İslam matematikçileri tarafından sistematize edilmiştir. Her desen bir tekrar birimi ve simetri kurallarına dayanır — CNC ve lazer kesim ile modern üretimi kolaylaştırır.",
      ]},
      { id: "selcuklu", heading: "Selçuklu Motifleri", paragraphs: [
        "Anadolu Selçuklu sanatı, geometrik formları bitkisel motiflerle harmanlayan özgün bir dil geliştirdi:",
      ], motifs: [
        { name: "Rûmî", icon: "☘️", desc: "Stilize yaprak ve sarmal formlar. Sonsuz devinimi simgeler, Selçuklu sanatının imza motifidir." },
        { name: "Hatâyî", icon: "🌸", desc: "Lotus ve şakayık benzeri açık çiçek formları. Bereket ve yenilenmeyi temsil eder." },
        { name: "Çintemani", icon: "◆", desc: "Üç yuvarlak ve iki dalgalı çizgiden oluşan güç sembolü. Padişah gücünü simgeler." },
        { name: "Hayat Ağacı", icon: "🌳", desc: "Şamanist kökenli, İslami yorumla zenginleşmiş. Dünya ekseni ve sonsuz yaşamı temsil eder." },
      ]},
      { id: "osmanli", heading: "Osmanlı Çiçek Desenleri", paragraphs: [
        "Osmanlı sanatında doğa, stilize edilmiş bir cennet bahçesi olarak tasvir edilir. 'Dört çiçek' Osmanlı dekoratif sanatlarının temel repertuvarını oluşturur:",
      ], motifs: [
        { name: "Lale", icon: "🌷", desc: "Allah lafzının harfleriyle yazılış benzerliği nedeniyle kutsallık taşır. Osmanlı'nın en ikonik motifi." },
        { name: "Karanfil", icon: "🌺", desc: "Cennet bahçesinin simgesi. Çift karanfil mutluluğu, tek karanfil sadakati ifade eder." },
        { name: "Gül", icon: "🌹", desc: "Hz. Muhammed'in sembolü. Gül suyu ile bağlantısı nedeniyle saflığı da temsil eder." },
        { name: "Sümbül", icon: "💐", desc: "Bahar ve yenilenmenin müjdecisi. Osmanlı bahçe kültürünün vazgeçilmez çiçeğidir." },
      ]},
      { id: "hat", heading: "Hat Sanatı ve Gümüş", paragraphs: [
        "Arap harflerinin estetik biçimde yazılması olan hat sanatı, gümüş takıda özellikle Besmele, Ayet el-Kürsi, Allah ve Maşallah yazıları olarak karşımıza çıkar. Sülüs, nesih ve dîvâni hatlar gümüş yüzeylere kazıma, kabartma veya lazer ile işlenir.",
        "Modern tasarımlarda hat motiflerinin soyutlaştırılması popülerlik kazanmıştır: harflerin okunabilirliğinden çok, ritmik akışı ve görsel dengesi ön plana çıkar.",
      ]},
      { id: "galeri", heading: "Motif Galerisi", paragraphs: [
        "Gümüş takıda en çok kullanılan 12 kültürel motifi keşfedin:",
      ], widget: "motifGallery" },
      { id: "modern", heading: "Gelenekten Geleceğe: Modern Yorumlar", paragraphs: [
        "Günümüz tasarımcıları geleneksel motifleri üç temel yaklaşımla yeniden yorumlar: minimal soyutlama, hibrit füzyon ve teknoloji destekli hassasiyet. İstanbul Gümüş gibi markalar, Selçuklu rûmî motiflerini minimalist kolye tasarımlarına, Osmanlı lale silüetlerini modern yüzük formlarına dönüştürerek geleneği yaşatmaktadır.",
      ]},
    ],
    faq: { title: "Sık Sorulan Sorular", items: [
      { q: "En popüler kültürel motif hangisidir?", a: "Lale motifi, hem Osmanlı geleneğindeki derin kökü hem de minimalist yorumlara uygunluğu sayesinde en popüler motiflerden biridir." },
      { q: "Hat yazılı takılarda ne yazar?", a: "En yaygın olanlar Besmele, Maşallah, Allah lafzı ve Ayet el-Kürsi'dir. Kişisel özel siparişler de yaygındır." },
      { q: "Geometrik desenler makineyle mi yapılıyor?", a: "Hem el işçiliği hem CNC/lazer ile üretilebilir. El işçiliği daha organik sonuçlar verir, makine üretimi maliyet avantajı sağlar." },
    ]},
    cta: { title: "Kültürel Motifli Gümüş Takılar", text: "İstanbul Gümüş, Selçuklu ve Osmanlı motiflerini 925 ayar gümüşe işliyor.", button: "Koleksiyonu Keşfet" },
    footer: { copyright: "© 2026 SilverAtlas.org — Turan Erbaş tarafından hazırlanmıştır.", sponsor: "İstanbul Gümüş sponsorluğundadır", links: ["Hakkımızda", "Makaleler", "İletişim"] },
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Encyclopedia",
    breadcrumb: ["Home", "Fashion", "Cultural Motifs"],
    category: "Fashion & Design",
    title: "Cultural Motifs in Silver Jewelry",
    subtitle: "Seljuk geometry, Ottoman floral patterns, and Islamic calligraphy reflected in silver",
    meta: { author: "Turan Erbaş", date: "April 15, 2026", readTime: "11 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "A pattern on a piece of silver jewelry carries centuries of heritage. The infinity geometry of Seljuk tile panels, the elegant curves of Ottoman tulip gardens, the rhythmic flow of Islamic calligraphy — all inspire modern silver jewelry design.",
        "This article examines the traces of Turkish-Islamic art tradition in silver jewelry: discover the historical origins, symbolic meanings, and contemporary interpretations of each motif.",
      ]},
      { id: "geometri", heading: "Islamic Geometry: The Language of Infinity", paragraphs: [
        "Islamic geometric patterns arise from simple circle and polygon divisions but symbolize the order of the universe through infinite repetition. The most common forms in silver jewelry are the hexagonal star (Seal of Solomon), octagonal star, interlocking circles, and girih patterns.",
        "The mathematical foundation was systematized by Islamic mathematicians in the 10th century. Each pattern is based on a repeat unit and symmetry rules — facilitating modern production with CNC and laser cutting.",
      ]},
      { id: "selcuklu", heading: "Seljuk Motifs", paragraphs: [
        "Anatolian Seljuk art developed a unique language blending geometric forms with botanical motifs:",
      ], motifs: [
        { name: "Rumi", icon: "☘️", desc: "Stylized leaf and spiral forms. Symbolizes eternal movement, the signature Seljuk motif." },
        { name: "Hatayi", icon: "🌸", desc: "Open flower forms resembling lotus and peony. Represents fertility and renewal." },
        { name: "Chintemani", icon: "◆", desc: "Power symbol of three circles and two wavy lines. Symbolizes imperial power." },
        { name: "Tree of Life", icon: "🌳", desc: "Of shamanistic origin, enriched with Islamic interpretation. Represents the world axis and eternal life." },
      ]},
      { id: "osmanli", heading: "Ottoman Floral Patterns", paragraphs: [
        "In Ottoman art, nature is depicted as a stylized paradise garden. The 'four flowers' form the core repertoire:",
      ], motifs: [
        { name: "Tulip", icon: "🌷", desc: "Carries sanctity due to similarity with Arabic letters spelling Allah. Most iconic Ottoman motif." },
        { name: "Carnation", icon: "🌺", desc: "Symbol of paradise garden. Double carnations express happiness, single ones fidelity." },
        { name: "Rose", icon: "🌹", desc: "Symbol of Prophet Muhammad. Also represents purity through its connection to rosewater." },
        { name: "Hyacinth", icon: "💐", desc: "Herald of spring and renewal. Indispensable in Ottoman garden culture." },
      ]},
      { id: "hat", heading: "Calligraphy and Silver", paragraphs: [
        "Calligraphy appears in silver jewelry primarily as Bismillah, Ayat al-Kursi, Allah, and Mashallah inscriptions. Thuluth, naskh, and divani scripts are engraved, embossed, or laser-etched onto silver surfaces.",
        "Abstract calligraphy has gained popularity in modern designs: the rhythmic flow and visual balance of letters takes precedence over legibility.",
      ]},
      { id: "galeri", heading: "Motif Gallery", paragraphs: [
        "Explore the 12 most commonly used cultural motifs in silver jewelry:",
      ], widget: "motifGallery" },
      { id: "modern", heading: "From Tradition to Future: Modern Interpretations", paragraphs: [
        "Today's designers reinterpret traditional motifs through minimal abstraction, hybrid fusion, and technology-aided precision. Brands like Istanbul Silver transform Seljuk rumi motifs into minimalist necklace designs and Ottoman tulip silhouettes into modern ring forms.",
      ]},
    ],
    faq: { title: "FAQ", items: [
      { q: "What is the most popular cultural motif?", a: "The tulip motif is among the most popular, thanks to both its deep roots in Ottoman tradition and its suitability for minimalist interpretations." },
      { q: "What do calligraphy jewelry pieces say?", a: "Most common: Bismillah, Mashallah, the word Allah, and Ayat al-Kursi. Custom orders with personal names are also popular." },
      { q: "Are geometric patterns made by machine?", a: "Both handcraft and CNC/laser production are possible. Handcraft gives more organic results; machine production offers cost advantages." },
    ]},
    cta: { title: "Silver Jewelry with Cultural Motifs", text: "Istanbul Silver keeps traditional art alive by engraving Seljuk and Ottoman motifs on 925 sterling silver.", button: "Explore Collection" },
    footer: { copyright: "© 2026 SilverAtlas.org — Created by Turan Erbaş.", sponsor: "Sponsored by Istanbul Silver", links: ["About", "Articles", "Contact"] },
  },
  ar: {
    nav: "SilverAtlas", navSub: "موسوعة الفضة",
    breadcrumb: ["الرئيسية", "الموضة", "الزخارف الثقافية"],
    category: "الموضة والتصميم",
    title: "الزخارف الثقافية في مجوهرات الفضة",
    subtitle: "الهندسة السلجوقية وأنماط الزهور العثمانية والخط الإسلامي المنعكس في الفضة",
    meta: { author: "توران إرباش", date: "١٥ أبريل ٢٠٢٦", readTime: "١١ دقيقة قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "يحمل النقش على قطعة مجوهرات فضية تراث قرون. هندسة اللانهاية في ألواح البلاط السلجوقي، والمنحنيات الأنيقة لحدائق التوليب العثمانية، والتدفق الإيقاعي للخط الإسلامي — كلها مصادر ثقافية عميقة تلهم تصميم مجوهرات الفضة الحديثة.",
      ]},
      { id: "geometri", heading: "الهندسة الإسلامية: لغة اللانهاية", paragraphs: [
        "تنشأ الأنماط الهندسية الإسلامية من تقسيمات الدوائر والمضلعات وترمز إلى نظام الكون من خلال التكرار اللانهائي. أكثر الأشكال شيوعاً: النجمة السداسية والنجمة الثمانية والدوائر المتشابكة وأنماط الجريه.",
      ]},
      { id: "hat", heading: "الخط العربي والفضة", paragraphs: [
        "يظهر الخط العربي في مجوهرات الفضة كنقوش البسملة وآية الكرسي ولفظ الجلالة وما شاء الله. تُنقش خطوط الثلث والنسخ والديواني على أسطح الفضة بالحفر أو النقش البارز أو الليزر.",
      ]},
    ],
    faq: { title: "الأسئلة الشائعة", items: [
      { q: "ما أكثر الزخارف الثقافية شعبية؟", a: "يعد زخرف التوليب من الأكثر شعبية بفضل جذوره العميقة في التقليد العثماني." },
    ]},
    cta: { title: "مجوهرات فضة بزخارف ثقافية", text: "إسطنبول للفضة تنقش زخارف سلجوقية وعثمانية على فضة عيار ٩٢٥.", button: "استكشف المجموعة" },
    footer: { copyright: "© ٢٠٢٦ SilverAtlas.org — إعداد توران إرباش", sponsor: "برعاية إسطنبول للفضة", links: ["حول", "مقالات", "اتصل"] },
  },
};

const S="#C0C0C0",DS="#708090",NV="#1a1a2e",GA="#D4AF37";
const FH="'Playfair Display',Georgia,serif",FB="'Source Sans 3','Segoe UI',sans-serif";
const FA="'Noto Naskh Arabic','Traditional Arabic',serif",FM="'JetBrains Mono','Fira Code',monospace";

const MotifGallery = ({ lang, dark }) => {
  const [active, setActive] = useState(null);
  const items = [
    { id:1,name:{tr:"Rûmî",en:"Rumi",ar:"الرومي"},cat:{tr:"Selçuklu",en:"Seljuk",ar:"سلجوقي"},sym:"☘️",meaning:{tr:"Sonsuz devinim, doğanın ritmi",en:"Eternal movement, rhythm of nature",ar:"الحركة الأبدية"} },
    { id:2,name:{tr:"Hatâyî",en:"Hatayi",ar:"الختائي"},cat:{tr:"Selçuklu",en:"Seljuk",ar:"سلجوقي"},sym:"🌸",meaning:{tr:"Bereket, yenilenme",en:"Fertility, renewal",ar:"الخصوبة، التجدد"} },
    { id:3,name:{tr:"Çintemani",en:"Chintemani",ar:"الجنتماني"},cat:{tr:"Selçuklu-Osmanlı",en:"Seljuk-Ottoman",ar:"سلجوقي-عثماني"},sym:"◆",meaning:{tr:"Güç, kozmik düzen",en:"Power, cosmic order",ar:"القوة، النظام الكوني"} },
    { id:4,name:{tr:"Hayat Ağacı",en:"Tree of Life",ar:"شجرة الحياة"},cat:{tr:"Şamanist-İslami",en:"Shamanist-Islamic",ar:"شاماني-إسلامي"},sym:"🌳",meaning:{tr:"Dünya ekseni, sonsuz yaşam",en:"World axis, eternal life",ar:"محور العالم، الحياة الأبدية"} },
    { id:5,name:{tr:"Lale",en:"Tulip",ar:"التوليب"},cat:{tr:"Osmanlı",en:"Ottoman",ar:"عثماني"},sym:"🌷",meaning:{tr:"Allah, kutsallık, Osmanlı kimliği",en:"Allah, sanctity, Ottoman identity",ar:"الله، القداسة"} },
    { id:6,name:{tr:"Gül",en:"Rose",ar:"الوردة"},cat:{tr:"İslami",en:"Islamic",ar:"إسلامي"},sym:"🌹",meaning:{tr:"Hz. Muhammed, saflık, aşk",en:"Prophet Muhammad, purity, love",ar:"النبي محمد، الطهارة"} },
    { id:7,name:{tr:"Karanfil",en:"Carnation",ar:"القرنفل"},cat:{tr:"Osmanlı",en:"Ottoman",ar:"عثماني"},sym:"🌺",meaning:{tr:"Cennet, mutluluk, sadakat",en:"Paradise, happiness, fidelity",ar:"الجنة، السعادة"} },
    { id:8,name:{tr:"Mühr-ü Süleyman",en:"Seal of Solomon",ar:"خاتم سليمان"},cat:{tr:"İslami Geometri",en:"Islamic Geometry",ar:"هندسة إسلامية"},sym:"✡",meaning:{tr:"Koruma, bilgelik, denge",en:"Protection, wisdom, balance",ar:"الحماية، الحكمة"} },
    { id:9,name:{tr:"Sekiz Kollu Yıldız",en:"Eight-Pointed Star",ar:"النجمة الثمانية"},cat:{tr:"İslami Geometri",en:"Islamic Geometry",ar:"هندسة إسلامية"},sym:"✴️",meaning:{tr:"Sekiz cennet kapısı, bütünlük",en:"Eight gates of paradise, wholeness",ar:"أبواب الجنة الثمانية"} },
    { id:10,name:{tr:"Besmele",en:"Bismillah",ar:"البسملة"},cat:{tr:"Hat Sanatı",en:"Calligraphy",ar:"الخط"},sym:"﷽",meaning:{tr:"Her işe Tanrı adıyla başlama",en:"Beginning every act in God's name",ar:"بدء كل عمل باسم الله"} },
    { id:11,name:{tr:"Tuğra",en:"Tughra",ar:"الطغراء"},cat:{tr:"Osmanlı",en:"Ottoman",ar:"عثماني"},sym:"📜",meaning:{tr:"Hükümdar imzası, otorite",en:"Sultan's signature, authority",ar:"توقيع السلطان، السلطة"} },
    { id:12,name:{tr:"Palmet",en:"Palmette",ar:"البالمت"},cat:{tr:"Antik-İslami",en:"Ancient-Islamic",ar:"قديم-إسلامي"},sym:"🌴",meaning:{tr:"Zafer, bereket, yaşam",en:"Victory, fertility, life",ar:"النصر، الخصوبة"} },
  ];
  return (
    <div style={{margin:"2rem 0",display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))",gap:"0.75rem"}}>
      {items.map(m=>(
        <div key={m.id} onClick={()=>setActive(active===m.id?null:m.id)} style={{
          padding:"1.25rem 0.75rem",borderRadius:"12px",cursor:"pointer",textAlign:"center",
          background:active===m.id?(dark?"rgba(212,175,55,0.12)":"rgba(212,175,55,0.08)"):(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)"),
          border:`1px solid ${active===m.id?GA:"transparent"}`,transition:"all 0.3s",
        }}>
          <div style={{fontSize:"2rem",marginBottom:"0.5rem"}}>{m.sym}</div>
          <div style={{fontFamily:FH,fontWeight:700,fontSize:"0.9rem",color:dark?S:NV,marginBottom:"0.2rem"}}>{m.name[lang]||m.name.tr}</div>
          <div style={{fontFamily:FM,fontSize:"0.7rem",color:GA}}>{m.cat[lang]||m.cat.tr}</div>
          {active===m.id&&<div style={{marginTop:"0.5rem",paddingTop:"0.5rem",borderTop:`1px solid ${dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"}`,fontFamily:lang==="ar"?FA:FB,fontSize:"0.8rem",lineHeight:1.5,color:dark?"#aaa":"#555"}}>{m.meaning[lang]||m.meaning.tr}</div>}
        </div>
      ))}
    </div>
  );
};

const MotifCards = ({ motifs, dark, isRTL }) => (
  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"1rem",margin:"1.5rem 0"}}>
    {motifs.map((m,i)=>(
      <div key={i} style={{padding:"1.25rem",borderRadius:"12px",background:dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)",border:`1px solid ${dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"}`,display:"flex",gap:"1rem",alignItems:"flex-start"}}>
        <div style={{fontSize:"1.8rem",width:48,height:48,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",background:`${GA}15`,flexShrink:0}}>{m.icon}</div>
        <div>
          <div style={{fontFamily:FH,fontSize:"1rem",fontWeight:700,color:dark?S:NV,marginBottom:"0.2rem"}}>{m.name}</div>
          <div style={{fontFamily:isRTL?FA:FB,fontSize:"0.88rem",lineHeight:1.6,color:dark?"#aaa":"#555"}}>{m.desc}</div>
        </div>
      </div>
    ))}
  </div>
);

export default function SilverAtlasCulturalMotifs() {
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
            {s.motifs&&<MotifCards motifs={s.motifs} dark={dark} isRTL={isRTL} />}
            {s.widget==="motifGallery"&&<MotifGallery lang={lang} dark={dark} />}
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
