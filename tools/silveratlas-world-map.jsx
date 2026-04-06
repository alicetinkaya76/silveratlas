import { useState, useCallback, useRef, useEffect } from "react";

// ─── GEO DATA ────────────────────────────────────────────
const MINES = [
  { id:"M1", name:{tr:"Gümüşhane Madeni",en:"Gümüşhane Mine",ar:"منجم غوموشخانه"}, lat:40.46, lng:39.48, country:"TR", status:"historical", period:"~3000 BCE – Ottoman", mineral:["native_silver","galena"], desc:{tr:"Anadolu'nun en eski gümüş madeni. İsmi bile 'gümüşün evi' anlamına gelir.",en:"Anatolia's oldest silver mine. Its very name means 'house of silver'.",ar:"أقدم منجم فضة في الأناضول. اسمه يعني 'بيت الفضة'."} },
  { id:"M2", name:{tr:"Potosí",en:"Potosí (Cerro Rico)",ar:"بوتوسي"}, lat:-19.58, lng:-65.75, country:"BO", status:"historical", period:"1545–1800s", mineral:["argentite","native_silver"], desc:{tr:"Tarihte en çok gümüş üreten maden. İspanyol İmparatorluğu'nun hazinesi.",en:"History's most productive silver mine. The treasure of the Spanish Empire.",ar:"أكثر مناجم الفضة إنتاجاً في التاريخ. كنز الإمبراطورية الإسبانية."} },
  { id:"M3", name:{tr:"Zacatecas",en:"Zacatecas",ar:"زاكاتيكاس"}, lat:22.77, lng:-102.58, country:"MX", status:"active", period:"1546–günümüz", mineral:["galena","sphalerite"], desc:{tr:"Meksika'nın en büyük gümüş üretim bölgesi. Dünya liderliğinin temeli.",en:"Mexico's largest silver production region. Foundation of world leadership.",ar:"أكبر منطقة إنتاج فضة في المكسيك."} },
  { id:"M4", name:{tr:"Lavrio",en:"Laurion (Lavrio)",ar:"لافريو"}, lat:37.73, lng:24.05, country:"GR", status:"historical", period:"~3000 BCE – 1st c. CE", mineral:["galena","cerussite"], desc:{tr:"Antik Atina'nın gümüş kaynağı. Atina donanmasının ve demokrasinin finansörü.",en:"Ancient Athens' silver source. Financed the Athenian navy and democracy.",ar:"مصدر فضة أثينا القديمة. مول الأسطول الأثيني والديمقراطية."} },
  { id:"M5", name:{tr:"Bolkardağ",en:"Bolkardağ",ar:"بولكارداغ"}, lat:37.47, lng:34.55, country:"TR", status:"historical", period:"Hitit – Osmanlı", mineral:["galena","native_silver"], desc:{tr:"Toros Dağları'nda Hitit döneminden beri işletilen tarihî maden.",en:"Historic mine in the Taurus Mountains, operated since the Hittite era.",ar:"منجم تاريخي في جبال طوروس منذ العصر الحثي."} },
  { id:"M6", name:{tr:"Kongsberg",en:"Kongsberg",ar:"كونغسبرغ"}, lat:59.63, lng:9.65, country:"NO", status:"historical", period:"1623–1958", mineral:["native_silver"], desc:{tr:"Avrupa'nın en büyük doğal gümüş kristallerinin bulunduğu Norveç madeni.",en:"Norwegian mine with Europe's largest native silver crystals.",ar:"منجم نرويجي بأكبر بلورات الفضة الطبيعية في أوروبا."} },
  { id:"M7", name:{tr:"Broken Hill",en:"Broken Hill",ar:"بروكن هيل"}, lat:-31.95, lng:141.47, country:"AU", status:"active", period:"1883–günümüz", mineral:["galena","sphalerite"], desc:{tr:"Avustralya'nın simge madeni. Kurşun-çinko yan ürünü olarak gümüş.",en:"Australia's iconic mine. Silver as a by-product of lead-zinc.",ar:"منجم أستراليا الأيقوني. الفضة كمنتج ثانوي للرصاص والزنك."} },
  { id:"M8", name:{tr:"Iwami Ginzan",en:"Iwami Ginzan",ar:"إيوامي غينزان"}, lat:35.11, lng:132.43, country:"JP", status:"historical", period:"1526–1923", mineral:["native_silver","argentite"], desc:{tr:"UNESCO Miras Listesi'ndeki Japon gümüş madeni. 17. yy'da dünya üretiminin %30'u.",en:"UNESCO World Heritage Japanese silver mine. 30% of world production in the 17th c.",ar:"منجم ياباني في قائمة التراث العالمي. 30% من الإنتاج العالمي في القرن 17."} },
  { id:"M9", name:{tr:"Guanajuato",en:"Guanajuato",ar:"غواناخواتو"}, lat:21.02, lng:-101.25, country:"MX", status:"active", period:"1548–günümüz", mineral:["native_silver","acanthite"], desc:{tr:"Meksika'nın ikinci büyük tarihî gümüş merkezi.",en:"Mexico's second-largest historical silver center.",ar:"ثاني أكبر مركز فضة تاريخي في المكسيك."} },
  { id:"M10", name:{tr:"KGHM Polonya",en:"KGHM Polkowice-Sieroszowice",ar:"KGHM بولندا"}, lat:51.50, lng:16.03, country:"PL", status:"active", period:"1957–günümüz", mineral:["chalcocite"], desc:{tr:"Avrupa'nın en büyük aktif bakır-gümüş madeni.",en:"Europe's largest active copper-silver mine.",ar:"أكبر منجم نحاس-فضة نشط في أوروبا."} },
  { id:"M11", name:{tr:"Cerro de Pasco",en:"Cerro de Pasco",ar:"سيرو دي باسكو"}, lat:-10.68, lng:-76.26, country:"PE", status:"active", period:"1630–günümüz", mineral:["galena","sphalerite"], desc:{tr:"Peru'nun en yüksek rakımlı gümüş madeni (4,380m).",en:"Peru's highest-altitude silver mine (4,380m).",ar:"أعلى منجم فضة في بيرو (4,380 م)."} },
  { id:"M12", name:{tr:"Dukat",en:"Dukat",ar:"دوكات"}, lat:62.56, lng:155.35, country:"RU", status:"active", period:"1974–günümüz", mineral:["native_silver","sulfosalts"], desc:{tr:"Rusya'nın en büyük birincil gümüş madeni.",en:"Russia's largest primary silver mine.",ar:"أكبر منجم فضة أساسي في روسيا."} },
];

const CRAFTS = [
  { id:"C1", name:{tr:"Midyat Telkâri",en:"Midyat Filigree",ar:"فيليغري ميديات"}, lat:37.42, lng:41.34, technique:"filigree", tradition:"~500 yıl", status:"active", desc:{tr:"Süryani ustalardan miras kalan, Anadolu'nun en ince gümüş işçiliği.",en:"Anatolia's finest silverwork, inherited from Syriac masters.",ar:"أرقى أعمال الفضة في الأناضول، موروثة من الأساتذة السريان."} },
  { id:"C2", name:{tr:"Trabzon Hasırı / Kazaziye",en:"Trabzon Wire Art (Kazaziye)",ar:"فن الأسلاك الطرابزوني"}, lat:41.00, lng:39.72, technique:"kazaz", tradition:"~400 yıl", status:"active", desc:{tr:"İnce gümüş tellerden örülen geleneksel Karadeniz sanatı.",en:"Traditional Black Sea art woven from fine silver wire.",ar:"فن البحر الأسود التقليدي المنسوج من أسلاك الفضة الدقيقة."} },
  { id:"C3", name:{tr:"Beypazarı Gümüşçülüğü",en:"Beypazarı Silverwork",ar:"صياغة بيبازاري"}, lat:40.17, lng:31.92, technique:"engraving", tradition:"Osmanlı dönemi", status:"active", desc:{tr:"Ankara'nın gümüş şehri. Geleneksel Osmanlı takı geleneğinin yaşayan mirası.",en:"Ankara's silver town. Living heritage of Ottoman jewelry tradition.",ar:"مدينة الفضة في أنقرة. التراث الحي لتقليد المجوهرات العثمانية."} },
  { id:"C4", name:{tr:"Mardin Savatlı",en:"Mardin Niello",ar:"نيللو ماردين"}, lat:37.31, lng:40.74, technique:"niello", tradition:"~300 yıl", status:"declining", desc:{tr:"Siyah oksitle doldurulan oyma tekniği. Mardin'e özgü dramatik kontrast.",en:"Engraving technique filled with black oxide. Dramatic contrast unique to Mardin.",ar:"تقنية نقش مملوءة بأكسيد أسود. تباين درامي فريد لماردين."} },
  { id:"C5", name:{tr:"Kastamonu Gümüşçülüğü",en:"Kastamonu Silverwork",ar:"صياغة كاستامونو"}, lat:41.38, lng:33.78, technique:"engraving", tradition:"Selçuklu-Osmanlı", status:"declining", desc:{tr:"Kuzey Anadolu'nun geleneksel gümüş merkezi.",en:"Northern Anatolia's traditional silver center.",ar:"مركز الفضة التقليدي في شمال الأناضول."} },
  { id:"C6", name:{tr:"Taxco Gümüşçülüğü",en:"Taxco Silver",ar:"فضة تاكسكو"}, lat:18.56, lng:-99.60, technique:"casting", tradition:"1930s–", status:"active", desc:{tr:"Meksika'nın dünyaca ünlü gümüş şehri. Modern Meksika gümüş tasarımının doğduğu yer.",en:"Mexico's world-famous silver city. Birthplace of modern Mexican silver design.",ar:"مدينة الفضة المكسيكية الشهيرة عالمياً."} },
  { id:"C7", name:{tr:"Sanaa Gümüşçülüğü",en:"Sana'a Silverwork",ar:"صياغة صنعاء"}, lat:15.37, lng:44.21, technique:"filigree", tradition:"~1000 yıl", status:"declining", desc:{tr:"Yemen'in efsanevi gümüş geleneği. Yahudi-Yemenli ustaların mirası.",en:"Yemen's legendary silver tradition. Heritage of Jewish-Yemeni masters.",ar:"تقليد الفضة الأسطوري في اليمن. تراث الأساتذة اليهود اليمنيين."} },
];

const MINTS = [
  { id:"D1", name:{tr:"Gümüşhane Darphanesi",en:"Gümüşhane Mint",ar:"دار ضرب غوموشخانه"}, lat:40.46, lng:39.48, dynasty:"Ottoman", period:"1512–1853", coins:["akçe","para"] },
  { id:"D2", name:{tr:"İstanbul Darphanesi",en:"Istanbul Mint",ar:"دار ضرب إسطنبول"}, lat:41.01, lng:28.98, dynasty:"Ottoman/Republic", period:"1467–günümüz", coins:["akçe","kuruş","lira"] },
  { id:"D3", name:{tr:"Bağdat Darphanesi",en:"Baghdad Mint",ar:"دار ضرب بغداد"}, lat:33.32, lng:44.37, dynasty:"Abbasid", period:"762–1258", coins:["dirhem"] },
  { id:"D4", name:{tr:"Dımaşk Darphanesi",en:"Damascus Mint",ar:"دار ضرب دمشق"}, lat:33.51, lng:36.29, dynasty:"Umayyad/Abbasid", period:"661–1260", coins:["dirhem"] },
  { id:"D5", name:{tr:"Kahire Darphanesi",en:"Cairo Mint",ar:"دار ضرب القاهرة"}, lat:30.04, lng:31.24, dynasty:"Fatimid/Mamluk", period:"969–1517", coins:["dirhem"] },
  { id:"D6", name:{tr:"Semerkant Darphanesi",en:"Samarkand Mint",ar:"دار ضرب سمرقند"}, lat:39.65, lng:66.96, dynasty:"Timurid", period:"~1370–1500", coins:["tanga","dirhem"] },
  { id:"D7", name:{tr:"Konya Darphanesi",en:"Konya Mint",ar:"دار ضرب قونية"}, lat:37.87, lng:32.48, dynasty:"Seljuk/Ottoman", period:"~1100–1700s", coins:["dirhem","akçe"] },
  { id:"D8", name:{tr:"Sevilla Darphanesi",en:"Seville Mint",ar:"دار ضرب إشبيلية"}, lat:37.39, lng:-5.98, dynasty:"Umayyad (Andalus)", period:"711–1248", coins:["dirhem"] },
];

const ROUTES = [
  { id:"R1", name:{tr:"İspanyol Gümüş Yolu",en:"Spanish Silver Route",ar:"طريق الفضة الإسباني"}, 
    color:"#D4AF37",
    points:[{lat:-19.58,lng:-65.75},{lat:-12.05,lng:-77.04},{lat:9.55,lng:-79.65},{lat:37.39,lng:-5.98}],
    period:"1545–1810" },
  { id:"R2", name:{tr:"Anadolu Gümüş Yolu",en:"Anatolian Silver Route",ar:"طريق الفضة الأناضولي"}, 
    color:"#6EC6FF",
    points:[{lat:40.46,lng:39.48},{lat:37.87,lng:32.48},{lat:41.01,lng:28.98}],
    period:"Selçuklu–Osmanlı" },
  { id:"R3", name:{tr:"İslam Dirhem Ağı",en:"Islamic Dirham Network",ar:"شبكة الدرهم الإسلامي"}, 
    color:"#C9A0DC",
    points:[{lat:33.32,lng:44.37},{lat:33.51,lng:36.29},{lat:30.04,lng:31.24},{lat:39.65,lng:66.96}],
    period:"661–1258" },
];

// ─── MERCATOR PROJECTION ─────────────────────────────────
const MAP_W = 1000, MAP_H = 520;
const project = (lat, lng) => {
  const x = ((lng + 180) / 360) * MAP_W;
  const latRad = (lat * Math.PI) / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = MAP_H / 2 - (MAP_W * mercN) / (2 * Math.PI);
  return [x, Math.max(10, Math.min(MAP_H - 10, y))];
};

// ─── SIMPLIFIED WORLD OUTLINE (major landmasses) ────────
const LAND_PATHS = [
  // North America
  "M60,130 L80,95 L120,80 L180,75 L220,85 L250,95 L265,120 L260,150 L240,175 L220,195 L200,200 L180,210 L160,240 L150,260 L140,250 L120,230 L100,200 L80,180 L65,160 Z",
  // South America
  "M200,260 L220,255 L240,270 L250,300 L245,340 L230,380 L215,410 L200,425 L190,400 L185,370 L180,340 L185,310 L190,280 Z",
  // Europe
  "M460,80 L470,75 L500,78 L520,85 L530,95 L525,110 L515,120 L500,125 L485,130 L475,120 L465,110 L458,100 Z",
  // Africa
  "M460,150 L480,145 L510,150 L530,170 L540,200 L545,240 L540,280 L530,310 L510,340 L490,350 L470,340 L455,310 L445,280 L440,250 L445,220 L450,190 L455,170 Z",
  // Asia
  "M530,70 L580,60 L640,55 L700,60 L750,70 L780,90 L800,110 L810,130 L790,145 L760,155 L730,165 L700,160 L670,155 L640,140 L610,130 L580,120 L560,110 L540,100 L535,85 Z",
  // Middle East / India
  "M560,130 L580,135 L600,145 L620,155 L640,170 L650,190 L640,210 L620,215 L600,210 L580,195 L565,175 L555,155 Z",
  // SE Asia
  "M720,170 L740,175 L755,185 L760,200 L750,215 L735,210 L720,200 L715,185 Z",
  // Australia
  "M760,310 L790,295 L830,295 L855,305 L860,325 L850,350 L830,365 L800,370 L775,360 L760,340 L755,325 Z",
  // Japan
  "M810,95 L815,85 L820,90 L818,100 L812,105 Z",
];

const LAYERS = { mines: "mines", crafts: "crafts", mints: "mints", routes: "routes" };

const LAYER_CONFIG = {
  mines:  { color: "#7BE495", icon: "⛏️", label: { tr:"Madenler", en:"Mines", ar:"المناجم" } },
  crafts: { color: "#E8A0BF", icon: "✋", label: { tr:"Zanaat Merkezleri", en:"Craft Centers", ar:"مراكز الحرف" } },
  mints:  { color: "#C9A0DC", icon: "🪙", label: { tr:"Darphaneler", en:"Mints", ar:"دور الضرب" } },
  routes: { color: "#D4AF37", icon: "🛤️", label: { tr:"Ticaret Güzergâhları", en:"Trade Routes", ar:"طرق التجارة" } },
};

const T = {
  tr: { title:"Gümüş Dünya Haritası", subtitle:"Madenler · Darphaneler · Zanaat Merkezleri · Ticaret Yolları", layers:"Katmanlar", activeN:"aktif", historicalN:"tarihî", period:"Dönem", technique:"Teknik", coins:"Sikkeler", status:"Durum", clickHint:"Detay için bir noktaya tıklayın", zoomHint:"Yakınlaştırmak için kaydırın", filterAll:"Tümü", filterActive:"Aktif", filterHistorical:"Tarihî", nav:"SilverAtlas", total:"toplam nokta" },
  en: { title:"Silver World Map", subtitle:"Mines · Mints · Craft Centers · Trade Routes", layers:"Layers", activeN:"active", historicalN:"historical", period:"Period", technique:"Technique", coins:"Coins", status:"Status", clickHint:"Click a point for details", zoomHint:"Scroll to zoom", filterAll:"All", filterActive:"Active", filterHistorical:"Historical", nav:"SilverAtlas", total:"total points" },
  ar: { title:"خريطة الفضة العالمية", subtitle:"المناجم · دور الضرب · مراكز الحرف · طرق التجارة", layers:"الطبقات", activeN:"نشط", historicalN:"تاريخي", period:"الفترة", technique:"التقنية", coins:"العملات", status:"الحالة", clickHint:"انقر على نقطة للتفاصيل", zoomHint:"مرر للتكبير", filterAll:"الكل", filterActive:"نشط", filterHistorical:"تاريخي", nav:"أطلس الفضة", total:"نقطة إجمالية" },
};

// ─── MAIN COMPONENT ──────────────────────────────────────
export default function SilverMap() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [layers, setLayers] = useState({ mines:true, crafts:true, mints:true, routes:true });
  const [selected, setSelected] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const svgRef = useRef(null);
  const t = T[lang];
  const isRTL = lang === "ar";

  const bgP = dark ? "#0f0f14" : "#FAFAF5";
  const bgCard = dark ? "#1a1a24" : "#ffffff";
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const accent = dark ? "#C0C0C0" : "#708090";
  const gold = "#D4AF37";
  const fontD = "'Playfair Display', Georgia, serif";
  const fontB = lang === "ar" ? "'Noto Naskh Arabic', serif" : "'Source Sans 3', sans-serif";

  const toggleLayer = (key) => setLayers(p => ({ ...p, [key]: !p[key] }));

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    setZoom(z => Math.max(0.8, Math.min(5, z + (e.deltaY > 0 ? -0.15 : 0.15))));
  }, []);

  const handleMouseDown = (e) => {
    if (e.target.closest('.marker-hit')) return;
    setDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };
  const handleMouseMove = (e) => {
    if (!dragging || !dragStart) return;
    setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };
  const handleMouseUp = () => { setDragging(false); setDragStart(null); };

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.addEventListener("wheel", handleWheel, { passive: false });
    return () => svg.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const filteredMines = MINES.filter(m => 
    statusFilter === "all" || (statusFilter === "active" ? m.status === "active" : m.status === "historical")
  );

  const totalPoints = (layers.mines ? filteredMines.length : 0) + (layers.crafts ? CRAFTS.length : 0) + (layers.mints ? MINTS.length : 0);

  const selectItem = (type, item) => setSelected({ type, ...item });

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{
      fontFamily: fontB, background: bgP, color: textP, minHeight: "100vh",
      transition: "background 0.4s, color 0.4s", overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600&display=swap');
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{r:5}50%{r:7}}
        * { margin:0; padding:0; box-sizing:border-box; }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: dark ? "rgba(15,15,20,0.9)" : "rgba(250,250,245,0.9)",
        backdropFilter: "blur(16px)", borderBottom: `1px solid ${border}`,
        padding: "0 20px", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 26, height: 26, borderRadius: "50%",
            background: `linear-gradient(135deg, ${accent}, ${gold})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 11, fontWeight: 700, color: "#0f0f14", fontFamily: fontD,
          }}>Ag</div>
          <span style={{ fontFamily: fontD, fontWeight: 600, fontSize: 15 }}>{t.nav}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display:"flex", gap:2, background: dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)", borderRadius:6, padding:2 }}>
            {["tr","en","ar"].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                border:"none", cursor:"pointer", padding:"3px 8px", borderRadius:4,
                fontSize:11, fontWeight: lang===l?600:400,
                background: lang===l?(dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.08)"):"transparent",
                color: lang===l?textP:textS, transition:"all 0.2s",
                fontFamily: l==="ar"?"'Noto Naskh Arabic',serif":fontB,
              }}>{l==="ar"?"عر":l.toUpperCase()}</button>
            ))}
          </div>
          <button onClick={() => setDark(!dark)} style={{
            border:"none", cursor:"pointer", background:"transparent", color:textS, fontSize:15,
          }}>{dark?"☀️":"🌙"}</button>
        </div>
      </nav>

      <div style={{ display: "flex", height: "calc(100vh - 52px)" }}>
        {/* SIDEBAR */}
        <div style={{
          width: 260, flexShrink: 0, borderRight: `1px solid ${border}`,
          background: dark ? "#111118" : "#f8f8f4",
          padding: "20px 16px", overflowY: "auto",
          order: isRTL ? 1 : 0,
        }}>
          <h1 style={{ fontFamily: fontD, fontSize: 20, fontWeight: 700, marginBottom: 4, lineHeight: 1.2 }}>
            {t.title}
          </h1>
          <p style={{ fontSize: 11, color: textS, marginBottom: 20, lineHeight: 1.5 }}>{t.subtitle}</p>

          {/* Layers */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: textS, letterSpacing: "0.08em", marginBottom: 10, textTransform: "uppercase" }}>
              {t.layers}
            </div>
            {Object.entries(LAYER_CONFIG).map(([key, cfg]) => (
              <button key={key} onClick={() => toggleLayer(key)} style={{
                display: "flex", alignItems: "center", gap: 8, width: "100%",
                border: `1px solid ${layers[key] ? cfg.color + "44" : border}`,
                borderRadius: 8, padding: "8px 10px", marginBottom: 6,
                cursor: "pointer", transition: "all 0.2s",
                background: layers[key] ? (dark ? cfg.color + "12" : cfg.color + "15") : "transparent",
                color: textP, fontFamily: fontB, fontSize: 12,
              }}>
                <div style={{
                  width: 12, height: 12, borderRadius: 3,
                  background: layers[key] ? cfg.color : "transparent",
                  border: `2px solid ${layers[key] ? cfg.color : textS}`,
                  transition: "all 0.2s",
                }} />
                <span>{cfg.icon}</span>
                <span style={{ fontWeight: layers[key] ? 500 : 400 }}>{cfg.label[lang]}</span>
              </button>
            ))}
          </div>

          {/* Status Filter */}
          {layers.mines && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: textS, letterSpacing: "0.08em", marginBottom: 8, textTransform: "uppercase" }}>
                ⛏️ Status
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                {[
                  { key: "all", label: t.filterAll },
                  { key: "active", label: t.filterActive },
                  { key: "historical", label: t.filterHistorical },
                ].map(f => (
                  <button key={f.key} onClick={() => setStatusFilter(f.key)} style={{
                    border: `1px solid ${statusFilter === f.key ? gold + "66" : border}`,
                    borderRadius: 6, padding: "4px 8px", cursor: "pointer",
                    fontSize: 10, fontWeight: statusFilter === f.key ? 600 : 400,
                    background: statusFilter === f.key ? gold + "15" : "transparent",
                    color: statusFilter === f.key ? gold : textS,
                    transition: "all 0.2s", fontFamily: fontB,
                  }}>{f.label}</button>
                ))}
              </div>
            </div>
          )}

          <div style={{ fontSize: 11, color: textS, marginBottom: 16 }}>
            {totalPoints} {t.total}
          </div>

          {/* Detail Panel */}
          {selected ? (
            <div style={{
              animation: "fadeUp 0.3s ease", background: bgCard,
              border: `1px solid ${border}`, borderRadius: 12, padding: 16,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div style={{
                  fontSize: 10, fontWeight: 600, letterSpacing: "0.05em",
                  color: LAYER_CONFIG[selected.type]?.color || accent,
                  textTransform: "uppercase",
                }}>{LAYER_CONFIG[selected.type]?.label[lang]}</div>
                <button onClick={() => setSelected(null)} style={{
                  border: "none", cursor: "pointer", background: "transparent",
                  color: textS, fontSize: 16, lineHeight: 1,
                }}>×</button>
              </div>
              <h3 style={{ fontFamily: fontD, fontSize: 16, fontWeight: 600, marginBottom: 8, lineHeight: 1.3 }}>
                {selected.name?.[lang] || selected.name?.en}
              </h3>
              {selected.desc && (
                <p style={{ fontSize: 12, color: textS, lineHeight: 1.6, marginBottom: 10 }}>
                  {selected.desc[lang] || selected.desc.en}
                </p>
              )}
              <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 11 }}>
                {selected.period && (
                  <div style={{ display: "flex", gap: 6 }}>
                    <span style={{ color: textS, minWidth: 50 }}>{t.period}:</span>
                    <span style={{ color: textP, fontWeight: 500 }}>{selected.period}</span>
                  </div>
                )}
                {selected.status && (
                  <div style={{ display: "flex", gap: 6 }}>
                    <span style={{ color: textS, minWidth: 50 }}>{t.status}:</span>
                    <span style={{
                      color: selected.status === "active" ? "#7BE495" : gold,
                      fontWeight: 500,
                    }}>{selected.status === "active" ? t.activeN : t.historicalN}</span>
                  </div>
                )}
                {selected.technique && (
                  <div style={{ display: "flex", gap: 6 }}>
                    <span style={{ color: textS, minWidth: 50 }}>{t.technique}:</span>
                    <span style={{ color: textP, fontWeight: 500 }}>{selected.technique}</span>
                  </div>
                )}
                {selected.coins && (
                  <div style={{ display: "flex", gap: 6 }}>
                    <span style={{ color: textS, minWidth: 50 }}>{t.coins}:</span>
                    <span style={{ color: textP, fontWeight: 500 }}>{selected.coins.join(", ")}</span>
                  </div>
                )}
                {selected.mineral && (
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
                    {selected.mineral.map(m => (
                      <span key={m} style={{
                        padding: "2px 7px", borderRadius: 4, fontSize: 10,
                        background: dark ? "rgba(192,192,192,0.08)" : "rgba(0,0,0,0.05)",
                        color: textS,
                      }}>{m}</span>
                    ))}
                  </div>
                )}
                {selected.country && (
                  <div style={{ fontSize: 10, color: textS, marginTop: 4, opacity: 0.7 }}>
                    📍 {selected.lat?.toFixed(2)}°, {selected.lng?.toFixed(2)}° · {selected.country}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div style={{
              fontSize: 12, color: textS, textAlign: "center",
              padding: "24px 12px", opacity: 0.6, lineHeight: 1.6,
            }}>
              {t.clickHint}
            </div>
          )}
        </div>

        {/* MAP AREA */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden", cursor: dragging ? "grabbing" : "grab" }}
          onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}
        >
          <svg ref={svgRef} width="100%" height="100%" viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            style={{ background: dark ? "#0a0a10" : "#eeeee8" }}
          >
            {/* Grid */}
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d={`M 50 0 L 0 0 0 50`} fill="none" stroke={dark ? "rgba(192,192,192,0.03)" : "rgba(0,0,0,0.03)"} strokeWidth="0.5" />
              </pattern>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <rect width={MAP_W} height={MAP_H} fill="url(#grid)" />

            <g transform={`translate(${pan.x / 2}, ${pan.y / 2}) scale(${zoom})`} style={{ transformOrigin: "center" }}>
              {/* Land */}
              {LAND_PATHS.map((d, i) => (
                <path key={i} d={d} fill={dark ? "#1a1a24" : "#d8d8d0"} stroke={dark ? "#2a2a36" : "#c0c0b8"} strokeWidth="0.5" opacity={0.8} />
              ))}

              {/* Trade Routes */}
              {layers.routes && ROUTES.map(route => {
                const pts = route.points.map(p => project(p.lat, p.lng));
                const pathD = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ");
                return (
                  <g key={route.id}>
                    <path d={pathD} fill="none" stroke={route.color} strokeWidth={1.5 / zoom}
                      strokeDasharray={`${6 / zoom} ${4 / zoom}`} opacity={0.6} />
                    {pts.map((p, i) => (
                      <circle key={i} cx={p[0]} cy={p[1]} r={2.5 / zoom}
                        fill={route.color} opacity={0.4} />
                    ))}
                  </g>
                );
              })}

              {/* Mints */}
              {layers.mints && MINTS.map(mint => {
                const [x, y] = project(mint.lat, mint.lng);
                const isHov = hovered === mint.id;
                const isSel = selected?.id === mint.id;
                return (
                  <g key={mint.id} className="marker-hit" style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHovered(mint.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={(e) => { e.stopPropagation(); selectItem("mints", mint); }}
                  >
                    <circle cx={x} cy={y} r={(isHov || isSel ? 8 : 5) / zoom}
                      fill={LAYER_CONFIG.mints.color} opacity={isHov || isSel ? 0.9 : 0.5}
                      stroke={isSel ? "#fff" : "none"} strokeWidth={1.5 / zoom} />
                    {(isHov || isSel) && (
                      <text x={x} y={y - 10 / zoom} textAnchor="middle"
                        fontSize={9 / zoom} fill={textP} fontFamily={fontB} fontWeight="500">
                        {mint.name[lang] || mint.name.en}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Crafts */}
              {layers.crafts && CRAFTS.map(craft => {
                const [x, y] = project(craft.lat, craft.lng);
                const isHov = hovered === craft.id;
                const isSel = selected?.id === craft.id;
                return (
                  <g key={craft.id} className="marker-hit" style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHovered(craft.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={(e) => { e.stopPropagation(); selectItem("crafts", craft); }}
                  >
                    <rect x={x - (isHov || isSel ? 6 : 4) / zoom} y={y - (isHov || isSel ? 6 : 4) / zoom}
                      width={(isHov || isSel ? 12 : 8) / zoom} height={(isHov || isSel ? 12 : 8) / zoom}
                      rx={2 / zoom} fill={LAYER_CONFIG.crafts.color}
                      opacity={isHov || isSel ? 0.9 : 0.5}
                      stroke={isSel ? "#fff" : "none"} strokeWidth={1.5 / zoom}
                      transform={`rotate(45,${x},${y})`} />
                    {(isHov || isSel) && (
                      <text x={x} y={y - 10 / zoom} textAnchor="middle"
                        fontSize={9 / zoom} fill={textP} fontFamily={fontB} fontWeight="500">
                        {craft.name[lang] || craft.name.en}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Mines */}
              {layers.mines && filteredMines.map(mine => {
                const [x, y] = project(mine.lat, mine.lng);
                const isHov = hovered === mine.id;
                const isSel = selected?.id === mine.id;
                const col = mine.status === "active" ? "#7BE495" : "#D4AF37";
                return (
                  <g key={mine.id} className="marker-hit" style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHovered(mine.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={(e) => { e.stopPropagation(); selectItem("mines", mine); }}
                  >
                    {(isHov || isSel) && (
                      <circle cx={x} cy={y} r={14 / zoom} fill={col} opacity={0.12} />
                    )}
                    <circle cx={x} cy={y} r={(isHov || isSel ? 6 : 4) / zoom}
                      fill={col} opacity={isHov || isSel ? 1 : 0.7}
                      stroke={isSel ? "#fff" : dark ? "#0f0f14" : "#FAFAF5"}
                      strokeWidth={1.5 / zoom} filter={isSel ? "url(#glow)" : undefined} />
                    {(isHov || isSel) && (
                      <text x={x} y={y - 10 / zoom} textAnchor="middle"
                        fontSize={9 / zoom} fill={textP} fontFamily={fontB} fontWeight="500">
                        {mine.name[lang] || mine.name.en}
                      </text>
                    )}
                  </g>
                );
              })}
            </g>

            {/* Zoom hint */}
            <text x={MAP_W - 10} y={MAP_H - 10} textAnchor="end"
              fontSize="9" fill={textS} opacity="0.4" fontFamily={fontB}>
              {t.zoomHint} · ×{zoom.toFixed(1)}
            </text>
          </svg>

          {/* Zoom Controls */}
          <div style={{
            position: "absolute", bottom: 20, [isRTL ? "left" : "right"]: 20,
            display: "flex", flexDirection: "column", gap: 4,
          }}>
            {[
              { label: "+", fn: () => setZoom(z => Math.min(5, z + 0.3)) },
              { label: "−", fn: () => setZoom(z => Math.max(0.8, z - 0.3)) },
              { label: "⟲", fn: () => { setZoom(1); setPan({ x: 0, y: 0 }); } },
            ].map((btn, i) => (
              <button key={i} onClick={btn.fn} style={{
                width: 36, height: 36, borderRadius: 8, border: `1px solid ${border}`,
                background: dark ? "rgba(15,15,20,0.85)" : "rgba(250,250,245,0.85)",
                backdropFilter: "blur(8px)", color: textP, fontSize: 18,
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s",
              }}>{btn.label}</button>
            ))}
          </div>

          {/* Legend overlay */}
          <div style={{
            position: "absolute", top: 16, [isRTL ? "right" : "left"]: 16,
            display: "flex", gap: 12, flexWrap: "wrap",
            background: dark ? "rgba(15,15,20,0.8)" : "rgba(250,250,245,0.8)",
            backdropFilter: "blur(8px)", borderRadius: 8, padding: "8px 14px",
            border: `1px solid ${border}`,
          }}>
            {layers.mines && <>
              <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, color: textS }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#7BE495" }} />
                {t.filterActive}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, color: textS }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#D4AF37" }} />
                {t.filterHistorical}
              </div>
            </>}
            {layers.crafts && (
              <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, color: textS }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: LAYER_CONFIG.crafts.color, transform: "rotate(45deg)" }} />
                {LAYER_CONFIG.crafts.label[lang]}
              </div>
            )}
            {layers.mints && (
              <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, color: textS }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: LAYER_CONFIG.mints.color }} />
                {LAYER_CONFIG.mints.label[lang]}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
