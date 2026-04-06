import { useState, useEffect } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Rehber", "Sofra Takımı"],
    category: "Rehber", title: "Gümüş Sofra Takımı Rehberi",
    subtitle: "Çatal-bıçaktan çay setine: gümüş sofra eşyalarının seçimi, bakımı ve koleksiyonculuğu",
    meta: { author: "Turan Erbaş", date: "6 Nisan 2026", readTime: "10 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Gümüş sofra takımı, yemek masasını bir sanat galerisine dönüştüren en zarif unsurdur. Antik Roma'dan Osmanlı sarayına, Viktorya dönemi İngiltere'sinden modern Skandinav tasarımına kadar gümüş sofra eşyaları, uygarlığın ve zarafetin sembolü olmuştur.",
        "Bu rehber, gümüş sofra takımı almayı düşünenler için kapsamlı bir yol haritası sunar: tür ve ayar seçiminden bakım yöntemlerine, dönem stillerinden yatırım değerine kadar."
      ]},
      { id: "turler", heading: "Gümüş Sofra Eşya Türleri", paragraphs: [
        "Gümüş sofra takımı geniş bir yelpazeyi kapsar:",
      ], tips: [
        "Flatware (Çatal-Bıçak Seti): Yemek çatalı, bıçağı, kaşığı, tatlı çatalı, çay kaşığı, servis kaşıkları.",
        "Hollowware (İçi Boş Eşyalar): Çaydanlık, sürahi, şekerlik, tuzluk, tereyağlık, tabak altlıkları.",
        "Servis Eşyaları: Tepsi, servis tabağı, kase, mumluk, peçete halkası.",
        "Çay/Kahve Setleri: Çaydanlık, süt sürahisi, şekerlik, tepsi — genellikle eşleşen set olarak.",
        "Özel Parçalar: Balık servisi, peynir bıçağı, pasta küreği, buz kovası."
      ]},
      { id: "ayar", heading: "Ayar ve Kalite Seçimi", paragraphs: [
        "Sofra gümüşü için en yaygın ayar 925 sterling'dir. Ancak kıta Avrupası'nda (özellikle Fransa, Almanya) 800 ve 835 ayar antik parçalar da yaygındır. Fine silver (999) sofra eşyasında nadiren kullanılır — çok yumuşaktır.",
        "Silver plate (gümüş kaplama) ise bakır veya nikel taban üzerine ince gümüş katmanı uygulanmasıdır. EPNS (Electro-Plated Nickel Silver) damgası kaplama ürünleri işaret eder. Kaplama eşyalar masif gümüşe kıyasla çok daha uygun fiyatlıdır ancak zamanla kaplama aşınabilir.",
        "Sheffield plate, 1740-1840 arasında İngiltere'de uygulanan bakır üzerine gümüş laminasyon tekniğidir. Antik Sheffield plate parçaları koleksiyon değeri taşır."
      ]},
      { id: "donemler", heading: "Dönem Stilleri", paragraphs: [
        "Gümüş sofra eşyalarının tasarımı, sanat tarihinin büyük akımlarıyla paralel gelişmiştir:"
      ], widget: "periods" },
      { id: "bakim", heading: "Bakım ve Saklama", paragraphs: [
        "Gümüş sofra eşyalarının en büyük düşmanı kükürttür — yumurta, hardal, kauçuk ve bazı yiyecekler kararma sürecini hızlandırır. Kullanımdan hemen sonra yıkama en etkili korunma yöntemidir.",
        "Bulaşık makinesinde yıkama tartışmalıdır: Sterling gümüş genellikle dayanıklıdır ancak gümüş kaplama, kemik saplı veya taşlı parçalar elde yıkanmalıdır. Limon tuzu bazlı deterjanlar gümüşe zarar verebilir.",
        "Saklama için anti-tarnish bezler veya kağıtlarla sarılmış, hava almayan kutular idealdir. Pacific Silvercloth kaplı çekmeceler, profesyonel koleksiyonculuk standardıdır."
      ]},
      { id: "koleksiyon", heading: "Koleksiyon ve Yatırım", paragraphs: [
        "Antik gümüş sofra takımları, hem estetik hem finansal değer taşır. İngiliz hallmark sistemi sayesinde parçanın yapım yılı, ustası ve şehri kesin olarak belirlenebilir — bu, koleksiyonculuk için büyük avantajdır.",
        "Georg Jensen, Tiffany, Christofle ve Buccellati gibi markaların vintage parçaları, ikincil piyasada primli işlem görür. Tam set halindeki takımlar, tek parçalara kıyasla %30-50 daha değerlidir.",
        "Yatırım perspektifinden gümüş sofra takımı, metal değerinin üzerinde 'işçilik primi' taşır. Ancak bu prim, markanın bilinirliğine ve parçanın durumuna bağlıdır."
      ]},
      { id: "modern", heading: "Modern Kullanım", paragraphs: [
        "Günümüzde gümüş sofra takımı, günlük kullanımdan ziyade özel günler için tercih edilmektedir. Ancak yeni bir akım, 'everyday silver' kavramını popülerleştirmektedir — basit, dayanıklı sterling parçaları günlük sofraya taşıma.",
        "Minimalist İskandinav tasarımı (Georg Jensen, Kay Bojesen) ve Japon wabi-sabi estetiği, modern gümüş sofra eşyalarında öne çıkan iki büyük trenddir."
      ]}
    ],
    periodCards: {
      title: "Dönem Stilleri",
      items: [
        { icon: "👑", name: "Barok (1600-1720)", desc: "Ağır, gösterişli formlar. Kabartma çiçek ve meyve motifleri. Sarmal saplar." },
        { icon: "🌿", name: "Rokoko (1720-1780)", desc: "Asimetrik, hafif kıvrımlar. Deniz kabuğu ve doğa temaları. Daha zarif ve ince." },
        { icon: "🏛️", name: "Neoklasik (1780-1830)", desc: "Simetri ve düzen. Yunan-Roma motifleri. Sade, geometrik formlar." },
        { icon: "🦁", name: "Viktorya (1837-1901)", desc: "Eklektik, karışık motifler. Ağır süsleme. Gothic Revival ve doğa temaları." },
        { icon: "🌸", name: "Art Nouveau (1890-1910)", desc: "Organik kıvrımlar, çiçek ve böcek motifleri. Japonizm etkisi." },
        { icon: "💎", name: "Art Deco (1920-1940)", desc: "Geometrik formlar, zigzag ve güneş ışını motifleri. Streamline modern." },
        { icon: "✨", name: "Modern (1950+)", desc: "Minimalizm, fonksiyon odaklı. İskandinav sadeliği. Georg Jensen etkisi." }
      ]
    },
    faq: { heading: "Sıkça Sorulan Sorular", items: [
      { q: "Gümüş çatal bıçak seti günlük kullanıma uygun mu?", a: "Evet, 925 sterling flatware günlük kullanıma dayanıklıdır. Düzenli kullanım aslında patinayı dengeler ve yüzeyi doğal olarak parlatır." },
      { q: "EPNS ile sterling silver arasındaki fark nedir?", a: "EPNS (kaplama) bakır/nikel taban üzerine ince gümüş katmanıdır; sterling silver ise %92,5 masif gümüştür. Fiyat farkı 10-50x olabilir." },
      { q: "Antik gümüş sofra takımı yiyecekle temas ettiğinde güvenli midir?", a: "Evet. Sterling gümüş gıdayla temas için güvenlidir. Kurşun içeren lehimler potansiyel risk oluşturabilir ancak modern onarımlar kurşunsuz lehim kullanır." },
      { q: "Gümüş sofra takımına yatırım yapmaya değer mi?", a: "Metal değeri + işçilik primi + marka değeri birlikte düşünülmeli. Tam setler, imzalı parçalar ve iyi korunmuş antikalar en iyi yatırımlardır." }
    ]},
    sources: { heading: "Kaynaklar", items: ["The Silver Society (UK)","Christie's — Silver Department Guide","Victoria & Albert Museum — Silverware Collection","Martha Stewart — Silver Care Guide"] },
    related: { heading: "İlgili Konular", items: [
      { title: "925 Ayar Nedir?", path: "/tr/uretim/925-ayar", cat: "Üretim" },
      { title: "Antik Koleksiyonculuk", path: "/tr/koleksiyon/antik", cat: "Koleksiyon" },
      { title: "Ayar Damgası Rehberi", path: "/tr/uretim/damga", cat: "Üretim" }
    ]},
    sponsor: { text: "925 ayar gümüş ev aksesuarlarımızı keşfedin.", cta: "Instagram'da Gör", note: "İstanbul Gümüş sponsorluğundadır." },
    darkMode: "Mod", toc: "İçindekiler"
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Guide", "Tableware"],
    category: "Guide", title: "Silver Tableware Guide",
    subtitle: "From flatware to tea sets: selecting, caring for, and collecting silver tableware",
    meta: { author: "Turan Erbaş", date: "April 6, 2026", readTime: "10 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Silver tableware transforms the dining table into an art gallery. From ancient Rome to Ottoman palaces, Victorian England to modern Scandinavian design, silver tableware has symbolized civilization and elegance.",
        "This guide provides a comprehensive roadmap for those considering silver tableware: from type and grade selection to care methods, period styles to investment value."
      ]},
      { id: "types", heading: "Types of Silver Tableware", paragraphs: ["Silver tableware encompasses a wide range:"], tips: [
        "Flatware: Dinner fork, knife, spoon, dessert fork, teaspoon, serving spoons.",
        "Hollowware: Teapot, pitcher, sugar bowl, salt cellar, butter dish, coasters.",
        "Serving Pieces: Tray, serving plate, bowl, candlestick, napkin ring.",
        "Tea/Coffee Sets: Teapot, cream pitcher, sugar bowl, tray — typically as matching sets.",
        "Special Pieces: Fish service, cheese knife, cake server, ice bucket."
      ]},
      { id: "grade", heading: "Grade and Quality Selection", paragraphs: [
        "The most common grade for tableware silver is 925 sterling. Continental European antiques (especially French, German) commonly use 800 and 835. Fine silver (999) is rarely used — too soft.",
        "Silver plate applies a thin silver layer over copper or nickel base. EPNS stamp indicates plated products. Plated items are far more affordable but the coating may wear over time.",
        "Sheffield plate (1740-1840) is a silver-on-copper lamination technique. Antique Sheffield pieces carry collector value."
      ]},
      { id: "periods", heading: "Period Styles", paragraphs: ["Silver tableware design evolved parallel to art history's major movements:"], widget: "periods" },
      { id: "care", heading: "Care and Storage", paragraphs: [
        "Sulfur is silver tableware's greatest enemy — eggs, mustard, rubber, and certain foods accelerate tarnishing. Washing immediately after use is the most effective protection.",
        "Dishwasher use is debatable: sterling usually endures, but plated, bone-handled, or stone-set pieces should be hand-washed.",
        "For storage, anti-tarnish cloth-wrapped, airtight boxes are ideal. Pacific Silvercloth-lined drawers are the professional collector standard."
      ]},
      { id: "collecting", heading: "Collecting and Investment", paragraphs: [
        "Antique silver tableware carries both aesthetic and financial value. The English hallmark system precisely identifies a piece's year, maker, and city.",
        "Vintage pieces from Georg Jensen, Tiffany, Christofle, and Buccellati trade at premiums. Complete sets are 30-50% more valuable than individual pieces.",
        "From an investment perspective, silver tableware carries a 'craftsmanship premium' above metal value, dependent on brand recognition and condition."
      ]},
      { id: "modern", heading: "Modern Usage", paragraphs: [
        "Today silver tableware is preferred for special occasions. However, the 'everyday silver' movement is popularizing simple, durable sterling pieces for daily use.",
        "Minimalist Scandinavian design and Japanese wabi-sabi aesthetics are the two dominant trends in modern silver tableware."
      ]}
    ],
    periodCards: {
      title: "Period Styles",
      items: [
        { icon: "👑", name: "Baroque (1600-1720)", desc: "Heavy, ornate forms. Embossed flower and fruit motifs. Spiral handles." },
        { icon: "🌿", name: "Rococo (1720-1780)", desc: "Asymmetric, light curves. Shell and nature themes. More elegant and delicate." },
        { icon: "🏛️", name: "Neoclassical (1780-1830)", desc: "Symmetry and order. Greco-Roman motifs. Simple geometric forms." },
        { icon: "🦁", name: "Victorian (1837-1901)", desc: "Eclectic, mixed motifs. Heavy ornamentation. Gothic Revival." },
        { icon: "🌸", name: "Art Nouveau (1890-1910)", desc: "Organic curves, flower and insect motifs. Japonisme influence." },
        { icon: "💎", name: "Art Deco (1920-1940)", desc: "Geometric forms, zigzag and sunburst motifs. Streamline modern." },
        { icon: "✨", name: "Modern (1950+)", desc: "Minimalism, function-focused. Scandinavian simplicity. Georg Jensen influence." }
      ]
    },
    faq: { heading: "FAQ", items: [
      { q: "Is silver flatware suitable for daily use?", a: "Yes, 925 sterling flatware withstands daily use. Regular use actually balances patina and naturally polishes the surface." },
      { q: "What's the difference between EPNS and sterling?", a: "EPNS (plated) is thin silver on copper/nickel; sterling is 92.5% solid silver. Price difference can be 10-50x." },
      { q: "Is antique silver safe for food contact?", a: "Yes. Sterling silver is food-safe. Lead-containing solder can pose risk, but modern repairs use lead-free solder." },
      { q: "Is investing in silver tableware worthwhile?", a: "Consider metal value + craftsmanship premium + brand value together. Complete sets and signed pieces are best investments." }
    ]},
    sources: { heading: "Sources", items: ["The Silver Society (UK)","Christie's — Silver Department Guide","V&A — Silverware Collection","Martha Stewart — Silver Care Guide"] },
    related: { heading: "Related", items: [
      { title: "What is 925?", path: "/en/manufacturing/925", cat: "Manufacturing" },
      { title: "Antique Collecting", path: "/en/collecting/antique", cat: "Collecting" },
      { title: "Hallmark Guide", path: "/en/manufacturing/hallmark", cat: "Manufacturing" }
    ]},
    sponsor: { text: "Explore our 925 sterling silver home accessories.", cta: "See on Instagram", note: "Sponsored by İstanbul Gümüş." },
    darkMode: "Mode", toc: "Contents"
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة معرفة الفضة",
    breadcrumb: ["الرئيسية", "دليل", "أدوات المائدة"],
    category: "دليل", title: "دليل أدوات المائدة الفضية",
    subtitle: "من الشوك والسكاكين إلى أطقم الشاي: اختيار أدوات المائدة الفضية والعناية بها وجمعها",
    meta: { author: "توران إرباش", date: "٦ أبريل ٢٠٢٦", readTime: "١٠ دقائق قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "أدوات المائدة الفضية تحول طاولة الطعام إلى معرض فني. من روما القديمة إلى القصور العثمانية، كانت رمزًا للحضارة والأناقة.",
        "يقدم هذا الدليل خارطة طريق شاملة لمن يفكر في أدوات المائدة الفضية."
      ]},
      { id: "types", heading: "أنواع أدوات المائدة الفضية", paragraphs: ["تشمل أدوات المائدة الفضية نطاقًا واسعًا:"], tips: [
        "الأدوات المسطحة: شوكة وسكين وملعقة الطعام، شوكة الحلوى، ملعقة الشاي.",
        "الأدوات المجوفة: إبريق الشاي، إبريق الماء، وعاء السكر، المملحة.",
        "أدوات التقديم: صينية، طبق تقديم، وعاء، شمعدان، حلقة منديل.",
        "أطقم الشاي/القهوة: إبريق الشاي، إبريق الحليب، وعاء السكر، صينية.",
        "قطع خاصة: خدمة السمك، سكين الجبن، مغرفة الكيك، دلو الثلج."
      ]},
      { id: "grade", heading: "اختيار العيار والجودة", paragraphs: [
        "العيار الأكثر شيوعًا لأدوات المائدة هو ٩٢٥. في أوروبا القارية تنتشر القطع القديمة بعيار ٨٠٠ و٨٣٥.",
        "الفضة المطلية تضع طبقة فضة رقيقة فوق قاعدة نحاسية. ختم EPNS يشير للمنتجات المطلية.",
        "طلاء شيفيلد (١٧٤٠-١٨٤٠) تقنية تصفيح فضة على نحاس. القطع العتيقة ذات قيمة جمعية."
      ]},
      { id: "periods", heading: "أساليب الفترات", paragraphs: ["تطور تصميم أدوات المائدة بالتوازي مع التيارات الفنية الكبرى:"], widget: "periods" },
      { id: "care", heading: "العناية والتخزين", paragraphs: [
        "الكبريت هو أكبر عدو لأدوات المائدة الفضية. الغسل فورًا بعد الاستخدام هو أفضل حماية.",
        "استخدام غسالة الصحون مثار جدل: الفضة الإسترلينية عادة تتحمل لكن القطع المطلية يجب غسلها يدويًا.",
        "للتخزين، صناديق محكمة الإغلاق ملفوفة بقماش مضاد للتأكسد هي المثالية."
      ]},
      { id: "collecting", heading: "الجمع والاستثمار", paragraphs: [
        "أدوات المائدة الفضية العتيقة تحمل قيمة جمالية ومالية. نظام الأختام الإنجليزي يحدد بدقة سنة وصانع وبلد القطعة.",
        "الأطقم الكاملة أكثر قيمة بـ ٣٠-٥٠٪ من القطع المفردة."
      ]},
      { id: "modern", heading: "الاستخدام الحديث", paragraphs: [
        "اليوم تُفضل أدوات المائدة الفضية للمناسبات الخاصة. لكن حركة 'الفضة اليومية' تنشر استخدام قطع إسترلينية بسيطة يوميًا.",
        "التصميم الاسكندنافي البسيط وجمالية وابي-سابي اليابانية هما الاتجاهان السائدان."
      ]}
    ],
    periodCards: {
      title: "أساليب الفترات",
      items: [
        { icon: "👑", name: "باروك (١٦٠٠-١٧٢٠)", desc: "أشكال ثقيلة مزخرفة. زخارف زهور وفواكه بارزة." },
        { icon: "🌿", name: "روكوكو (١٧٢٠-١٧٨٠)", desc: "انحناءات غير متماثلة خفيفة. أصداف وطبيعة." },
        { icon: "🏛️", name: "كلاسيكي جديد (١٧٨٠-١٨٣٠)", desc: "تماثل ونظام. زخارف يونانية-رومانية." },
        { icon: "🦁", name: "فيكتوري (١٨٣٧-١٩٠١)", desc: "انتقائي، زخارف مختلطة. إحياء قوطي." },
        { icon: "🌸", name: "آرت نوفو (١٨٩٠-١٩١٠)", desc: "منحنيات عضوية، زخارف أزهار وحشرات." },
        { icon: "💎", name: "آرت ديكو (١٩٢٠-١٩٤٠)", desc: "أشكال هندسية، متعرجة وشعاع شمسي." },
        { icon: "✨", name: "حديث (١٩٥٠+)", desc: "بساطة، تركيز على الوظيفة. بساطة اسكندنافية." }
      ]
    },
    faq: { heading: "الأسئلة الشائعة", items: [
      { q: "هل أدوات المائدة الفضية مناسبة للاستخدام اليومي؟", a: "نعم، فضة ٩٢٥ تتحمل الاستخدام اليومي. الاستخدام المنتظم يوازن الزنجار ويصقل السطح طبيعيًا." },
      { q: "ما الفرق بين EPNS والإسترلينية؟", a: "EPNS طبقة فضة رقيقة على نحاس/نيكل؛ الإسترلينية ٩٢.٥٪ فضة صلبة. فرق السعر قد يكون ١٠-٥٠ ضعفًا." },
      { q: "هل الفضة العتيقة آمنة للاتصال بالطعام؟", a: "نعم. الفضة الإسترلينية آمنة غذائيًا." }
    ]},
    sources: { heading: "المصادر", items: ["جمعية الفضة (المملكة المتحدة)","كريستيز — دليل قسم الفضة","متحف V&A","مارثا ستيوارت — دليل العناية بالفضة"] },
    related: { heading: "مواضيع ذات صلة", items: [
      { title: "ما هو عيار ٩٢٥؟", path: "/ar/manufacturing/925", cat: "التصنيع" },
      { title: "الجمع العتيق", path: "/ar/collecting/antique", cat: "المقتنيات" }
    ]},
    sponsor: { text: "اكتشف إكسسوارات منزلية من الفضة ٩٢٥.", cta: "شاهد على إنستغرام", note: "برعاية إسطنبول غوموش." },
    darkMode: "الوضع", toc: "المحتويات"
  }
};
const fontD="'Playfair Display',serif",fontB="'Source Sans 3',sans-serif",fontAr="'Noto Naskh Arabic',serif",gold="#D4AF37",accent="#C0C0C0";

function PeriodCards({t,dark,isRTL}){const[sel,setSel]=useState(null);const cards=t.periodCards.items;const bdr=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)";const tp=dark?"#e8e8e8":"#1a1a2e",ts=dark?"#a0a0a0":"#555";
return(<div style={{margin:"24px 0"}}><h3 style={{fontFamily:fontD,fontSize:18,fontWeight:600,marginBottom:16,color:tp}}>{t.periodCards.title}</h3><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))",gap:10}}>{cards.map((c,i)=>(<div key={i} onClick={()=>setSel(sel===i?null:i)} style={{cursor:"pointer",padding:"16px 14px",borderRadius:12,border:`1px solid ${sel===i?gold+"66":bdr}`,background:sel===i?(dark?"rgba(212,175,55,0.06)":"rgba(212,175,55,0.08)"):(dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.02)"),transition:"all 0.3s"}}><div style={{fontSize:28,marginBottom:8}}>{c.icon}</div><div style={{fontWeight:600,fontSize:13,color:tp,marginBottom:4}}>{c.name}</div>{sel===i&&<div style={{fontSize:11,color:ts,lineHeight:1.6,paddingTop:8,borderTop:`1px solid ${bdr}`}}>{c.desc}</div>}</div>))}</div></div>);}

export default function SilverAtlasTablewareArticle(){const[lang,setLang]=useState("tr");const[dark,setDark]=useState(true);const[openFaq,setOpenFaq]=useState(null);const t=T[lang],isRTL=lang==="ar";const tp=dark?"#e8e8e8":"#1a1a2e",ts=dark?"#a0a0a0":"#555",bgM=dark?"#0f0f14":"#fafaf5",bgC=dark?"#16161c":"#ffffff",bdr=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)";
useEffect(()=>{const l=document.createElement("link");l.href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;600&family=Noto+Naskh+Arabic:wght@400;600&display=swap";l.rel="stylesheet";document.head.appendChild(l);},[]);
return(<div dir={isRTL?"rtl":"ltr"} style={{fontFamily:isRTL?fontAr:fontB,background:bgM,color:tp,minHeight:"100vh",lineHeight:1.6}}>
<nav style={{position:"sticky",top:0,zIndex:50,padding:"10px 20px",background:dark?"rgba(15,15,20,0.92)":"rgba(250,250,245,0.92)",backdropFilter:"blur(12px)",borderBottom:`1px solid ${bdr}`,display:"flex",alignItems:"center",justifyContent:"space-between"}}><div style={{display:"flex",alignItems:"center",gap:10}}><div style={{width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><div><div style={{fontFamily:fontD,fontWeight:600,fontSize:14,lineHeight:1}}>{t.nav}</div><div style={{fontSize:9,color:ts}}>{t.navSub}</div></div></div><div style={{display:"flex",alignItems:"center",gap:6}}>{["tr","en","ar"].map(l=>(<button key={l} onClick={()=>setLang(l)} style={{padding:"4px 10px",borderRadius:6,border:`1px solid ${lang===l?gold:bdr}`,background:lang===l?gold+"15":"transparent",cursor:"pointer",color:lang===l?gold:ts,fontSize:11,fontWeight:600}}>{l.toUpperCase()}</button>))}<button onClick={()=>setDark(!dark)} style={{marginLeft:8,padding:"4px 10px",borderRadius:6,border:`1px solid ${bdr}`,background:"transparent",cursor:"pointer",color:ts,fontSize:11}}>{dark?"☀️":"🌙"} {t.darkMode}</button></div></nav>
<article style={{maxWidth:720,margin:"0 auto",padding:"32px 20px"}}>
<div style={{fontSize:12,color:ts,marginBottom:24,display:"flex",gap:6,flexWrap:"wrap"}}>{t.breadcrumb.map((b,i)=>(<span key={i}>{i>0&&<span style={{margin:"0 4px",opacity:0.4}}>/</span>}<span style={{color:i===t.breadcrumb.length-1?gold:ts}}>{b}</span></span>))}</div>
<div style={{marginBottom:36}}><div style={{display:"inline-block",padding:"3px 12px",borderRadius:6,fontSize:11,fontWeight:600,letterSpacing:"0.04em",color:gold,border:`1px solid ${gold}33`,marginBottom:16}}>{t.category}</div><h1 style={{fontFamily:isRTL?fontAr:fontD,fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.15,marginBottom:12}}>{t.title}</h1><p style={{fontSize:16,color:ts,lineHeight:1.6,marginBottom:20}}>{t.subtitle}</p><div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",fontSize:13,color:ts,paddingBottom:20,borderBottom:`1px solid ${bdr}`}}><span>{t.meta.author}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.date}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.readTime}</span></div></div>
<div style={{height:200,borderRadius:16,marginBottom:36,overflow:"hidden",background:dark?"linear-gradient(135deg,#1a1a2e,#2a2a3e)":"linear-gradient(135deg,#e8e8e8,#d0d0d0)",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{textAlign:"center"}}><div style={{fontSize:48}}>🍽️</div><div style={{fontFamily:fontD,fontSize:14,fontWeight:600,marginTop:8,background:`linear-gradient(135deg,${accent},${gold})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>SILVER TABLEWARE</div></div></div>
<div style={{marginBottom:36,padding:"20px 24px",borderRadius:12,border:`1px solid ${bdr}`,background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)"}}><h3 style={{fontSize:14,fontWeight:600,marginBottom:12,color:gold}}>{t.toc}</h3>{t.sections.filter(s=>s.heading).map(s=>(<a key={s.id} href={`#${s.id}`} style={{display:"block",fontSize:13,color:ts,textDecoration:"none",padding:"4px 0"}}>{s.heading}</a>))}</div>
{t.sections.map(sec=>(<section key={sec.id} id={sec.id} style={{marginBottom:36}}>{sec.heading&&<h2 style={{fontFamily:isRTL?fontAr:fontD,fontSize:24,fontWeight:600,marginBottom:16,paddingTop:8}}>{sec.heading}</h2>}{sec.paragraphs.map((p,pi)=>(<p key={pi} style={{fontSize:15,lineHeight:1.8,color:ts,marginBottom:14}}>{p}</p>))}{sec.tips&&<div style={{background:dark?"rgba(192,192,192,0.03)":"rgba(192,192,192,0.06)",border:`1px solid ${bdr}`,borderRadius:12,padding:"20px 24px",marginTop:16}}>{sec.tips.map((tip,ti)=>(<div key={ti} style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:ti<sec.tips.length-1?12:0,fontSize:14,lineHeight:1.6,color:ts}}><span style={{flexShrink:0,width:22,height:22,borderRadius:"50%",background:`${gold}18`,color:gold,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:600,marginTop:1}}>{ti+1}</span><span>{tip}</span></div>))}</div>}{sec.widget==="periods"&&<PeriodCards t={t} dark={dark} isRTL={isRTL}/>}</section>))}
<section style={{marginBottom:36,marginTop:48}}><h2 style={{fontFamily:isRTL?fontAr:fontD,fontSize:24,fontWeight:600,marginBottom:20}}>{t.faq.heading}</h2><div style={{display:"flex",flexDirection:"column",gap:8}}>{t.faq.items.map((item,i)=>(<div key={i} style={{border:`1px solid ${openFaq===i?gold+"44":bdr}`,borderRadius:12,overflow:"hidden",background:openFaq===i?(dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.04)"):"transparent"}}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{width:"100%",border:"none",cursor:"pointer",background:"transparent",padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",color:tp,fontSize:14,fontWeight:500,fontFamily:isRTL?fontAr:fontB,textAlign:isRTL?"right":"left",gap:12}}><span style={{flex:1}}>{item.q}</span><span style={{fontSize:18,color:ts,transition:"transform 0.3s",transform:openFaq===i?"rotate(45deg)":"rotate(0)",flexShrink:0}}>+</span></button>{openFaq===i&&<div style={{padding:"0 20px 16px",fontSize:14,lineHeight:1.7,color:ts}}>{item.a}</div>}</div>))}</div></section>
<section style={{marginBottom:36,padding:"20px 24px",background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)",borderRadius:12,border:`1px solid ${bdr}`}}><h3 style={{fontSize:15,fontWeight:600,marginBottom:12}}>{t.sources.heading}</h3>{t.sources.items.map((s,i)=>(<div key={i} style={{fontSize:13,color:ts,lineHeight:1.6,marginBottom:6,display:"flex",gap:8}}><span style={{color:accent,fontWeight:600,flexShrink:0}}>[{i+1}]</span><span>{s}</span></div>))}</section>
<section style={{marginBottom:40}}><h3 style={{fontSize:18,fontFamily:isRTL?fontAr:fontD,fontWeight:600,marginBottom:16}}>{t.related.heading}</h3><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:12}}>{t.related.items.map((item,i)=>(<a key={i} href={item.path} style={{textDecoration:"none",padding:"16px 18px",border:`1px solid ${bdr}`,borderRadius:12,background:bgC,display:"block"}}><div style={{fontSize:10,color:gold,fontWeight:600,marginBottom:6}}>{item.cat}</div><div style={{fontSize:14,fontWeight:500,color:tp}}>{item.title}</div><div style={{fontSize:12,color:ts,marginTop:6}}>{isRTL?"←":"→"}</div></a>))}</div></section>
<div style={{border:`1px solid ${gold}22`,borderRadius:16,padding:"28px 24px",background:dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.05)",textAlign:"center"}}><p style={{fontSize:15,color:tp,marginBottom:16}}>{t.sponsor.text}</p><a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"10px 24px",borderRadius:10,background:`linear-gradient(135deg,${accent},${gold})`,color:"#0f0f14",fontSize:13,fontWeight:600,textDecoration:"none"}}>📸 {t.sponsor.cta}</a><p style={{fontSize:11,color:ts,marginTop:14,opacity:0.7}}>{t.sponsor.note}</p></div>
</article>
<footer style={{borderTop:`1px solid ${bdr}`,padding:24,textAlign:"center",background:dark?"#0c0c10":"#f5f5f0"}}><div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:8}}><div style={{width:22,height:22,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:14}}>{t.nav}</span></div><p style={{fontSize:11,color:ts}}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p></footer></div>);}
