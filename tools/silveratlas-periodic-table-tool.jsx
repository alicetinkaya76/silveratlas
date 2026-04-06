import { useState, useEffect } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    title: "İnteraktif Periyodik Tablo",
    subtitle: "Gümüş ve ilişkili metallerin periyodik tablodaki yeri",
    silverGroup: "Gümüş (Ag)",
    alloyMetals: "Alaşım Metalleri",
    preciousMetals: "Değerli Metaller",
    industrialMetals: "Endüstriyel Metaller",
    other: "Diğer Elementler",
    details: "Detaylar",
    atomicNumber: "Atom No",
    atomicMass: "Atom Kütlesi",
    category: "Kategori",
    meltingPoint: "Erime Noktası",
    density: "Yoğunluk",
    silverRelation: "Gümüş İlişkisi",
    clickElement: "Detay görmek için bir elemente tıklayın",
    sponsor: { text: "925 ayar gümüş takı koleksiyonumuzu keşfedin.", cta: "Instagram'da Gör", note: "İstanbul Gümüş sponsorluğundadır." },
    darkMode: "Mod"
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    title: "Interactive Periodic Table",
    subtitle: "Silver and related metals in the periodic table",
    silverGroup: "Silver (Ag)",
    alloyMetals: "Alloy Metals",
    preciousMetals: "Precious Metals",
    industrialMetals: "Industrial Metals",
    other: "Other Elements",
    details: "Details",
    atomicNumber: "Atomic #",
    atomicMass: "Atomic Mass",
    category: "Category",
    meltingPoint: "Melting Point",
    density: "Density",
    silverRelation: "Silver Relation",
    clickElement: "Click an element for details",
    sponsor: { text: "Explore our 925 sterling silver collection.", cta: "See on Instagram", note: "Sponsored by İstanbul Gümüş." },
    darkMode: "Mode"
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة معرفة الفضة",
    title: "الجدول الدوري التفاعلي",
    subtitle: "الفضة والمعادن ذات الصلة في الجدول الدوري",
    silverGroup: "الفضة (Ag)",
    alloyMetals: "معادن السبائك",
    preciousMetals: "المعادن الثمينة",
    industrialMetals: "المعادن الصناعية",
    other: "عناصر أخرى",
    details: "التفاصيل",
    atomicNumber: "العدد الذري",
    atomicMass: "الكتلة الذرية",
    category: "الفئة",
    meltingPoint: "نقطة الانصهار",
    density: "الكثافة",
    silverRelation: "العلاقة بالفضة",
    clickElement: "انقر على عنصر لعرض التفاصيل",
    sponsor: { text: "اكتشف مجموعتنا من الفضة الإسترلينية ٩٢٥.", cta: "شاهد على إنستغرام", note: "برعاية إسطنبول غوموش." },
    darkMode: "الوضع"
  }
};

// Silver-related elements data
const ELEMENTS = [
  { z: 47, sym: "Ag", name: { tr: "Gümüş", en: "Silver", ar: "فضة" }, mass: "107.87", mp: "961.8°C", dens: "10.49", cat: "silver",
    rel: { tr: "Ana element. 925 ayar standardının temeli.", en: "The core element. Foundation of the 925 standard.", ar: "العنصر الأساسي. أساس معيار ٩٢٥." } },
  { z: 29, sym: "Cu", name: { tr: "Bakır", en: "Copper", ar: "نحاس" }, mass: "63.55", mp: "1084°C", dens: "8.96", cat: "alloy",
    rel: { tr: "925 alaşımında %7,5 oranında. Dayanıklılık sağlar.", en: "7.5% in 925 alloy. Provides durability.", ar: "٧.٥٪ في سبيكة ٩٢٥. يوفر المتانة." } },
  { z: 30, sym: "Zn", name: { tr: "Çinko", en: "Zinc", ar: "زنك" }, mass: "65.38", mp: "419.5°C", dens: "7.13", cat: "alloy",
    rel: { tr: "Bazı gümüş alaşımlarında kullanılır. Akışkanlık artırır.", en: "Used in some silver alloys. Improves fluidity.", ar: "يُستخدم في بعض سبائك الفضة." } },
  { z: 32, sym: "Ge", name: { tr: "Germanyum", en: "Germanium", ar: "جرمانيوم" }, mass: "72.63", mp: "938.3°C", dens: "5.32", cat: "alloy",
    rel: { tr: "Argentium gümüşte kararma direnci sağlar.", en: "Provides tarnish resistance in Argentium silver.", ar: "يوفر مقاومة للتلون في فضة أرجنتيوم." } },
  { z: 79, sym: "Au", name: { tr: "Altın", en: "Gold", ar: "ذهب" }, mass: "196.97", mp: "1064°C", dens: "19.30", cat: "precious",
    rel: { tr: "Gümüşün en büyük rakibi ve kardeş metali.", en: "Silver's greatest rival and sibling metal.", ar: "أكبر منافس وشقيق للفضة." } },
  { z: 78, sym: "Pt", name: { tr: "Platin", en: "Platinum", ar: "بلاتين" }, mass: "195.08", mp: "1768°C", dens: "21.45", cat: "precious",
    rel: { tr: "Lüks takı segmentinde gümüşün alternatifi.", en: "Silver's alternative in luxury jewelry.", ar: "بديل الفضة في المجوهرات الفاخرة." } },
  { z: 46, sym: "Pd", name: { tr: "Paladyum", en: "Palladium", ar: "بالاديوم" }, mass: "106.42", mp: "1555°C", dens: "12.02", cat: "precious",
    rel: { tr: "Beyaz altın alaşımlarında ve katalitik kullanım.", en: "In white gold alloys and catalytic converters.", ar: "في سبائك الذهب الأبيض والمحولات الحفازة." } },
  { z: 45, sym: "Rh", name: { tr: "Rodyum", en: "Rhodium", ar: "روديوم" }, mass: "102.91", mp: "1964°C", dens: "12.41", cat: "precious",
    rel: { tr: "Gümüş takıların kaplama metali. Parlaklık ve koruma.", en: "Plating metal for silver jewelry. Shine and protection.", ar: "معدن طلاء المجوهرات الفضية." } },
  { z: 50, sym: "Sn", name: { tr: "Kalay", en: "Tin", ar: "قصدير" }, mass: "118.71", mp: "232°C", dens: "7.31", cat: "industrial",
    rel: { tr: "Lehimleme alaşımlarında gümüşle birlikte kullanılır.", en: "Used with silver in soldering alloys.", ar: "يُستخدم مع الفضة في سبائك اللحام." } },
  { z: 14, sym: "Si", name: { tr: "Silikon", en: "Silicon", ar: "سيليكون" }, mass: "28.09", mp: "1414°C", dens: "2.33", cat: "industrial",
    rel: { tr: "Güneş panellerinde gümüş iletken macunla birlikte.", en: "In solar panels alongside silver conductive paste.", ar: "في الألواح الشمسية مع معجون الفضة الموصل." } },
  { z: 82, sym: "Pb", name: { tr: "Kurşun", en: "Lead", ar: "رصاص" }, mass: "207.2", mp: "327.5°C", dens: "11.34", cat: "industrial",
    rel: { tr: "Gümüş madenciliğinin ana yan ürün kaynağı.", en: "Main byproduct source of silver mining.", ar: "مصدر المنتج الثانوي الرئيسي لتعدين الفضة." } },
  { z: 16, sym: "S", name: { tr: "Kükürt", en: "Sulfur", ar: "كبريت" }, mass: "32.07", mp: "115.2°C", dens: "2.07", cat: "industrial",
    rel: { tr: "Gümüşün kararmasının (tarnish) ana nedeni.", en: "Main cause of silver tarnish.", ar: "السبب الرئيسي لتغير لون الفضة." } },
];

const CAT_COLORS = {
  silver: "#C0C0C0",
  alloy: "#e67e22",
  precious: "#D4AF37",
  industrial: "#3498db",
};

const fontD = "'Playfair Display', serif";
const fontB = "'Source Sans 3', sans-serif";
const fontAr = "'Noto Naskh Arabic', serif";
const gold = "#D4AF37";
const accent = "#C0C0C0";

export default function SilverAtlasPeriodicTableTool() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [selected, setSelected] = useState(null);

  const t = T[lang];
  const isRTL = lang === "ar";
  const textP = dark ? "#e8e8e8" : "#1a1a2e";
  const textS = dark ? "#a0a0a0" : "#555";
  const bgMain = dark ? "#0f0f14" : "#fafaf5";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;600&family=Noto+Naskh+Arabic:wght@400;600&family=JetBrains+Mono:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const sel = selected !== null ? ELEMENTS.find(e => e.z === selected) : null;
  const catLabel = (cat) => {
    if (cat === "silver") return t.silverGroup;
    if (cat === "alloy") return t.alloyMetals;
    if (cat === "precious") return t.preciousMetals;
    if (cat === "industrial") return t.industrialMetals;
    return t.other;
  };

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{
      fontFamily: isRTL ? fontAr : fontB, background: bgMain, color: textP, minHeight: "100vh",
    }}>
      {/* Nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50, padding: "10px 20px",
        background: dark ? "rgba(15,15,20,0.92)" : "rgba(250,250,245,0.92)",
        backdropFilter: "blur(12px)", borderBottom: `1px solid ${border}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: `linear-gradient(135deg, ${accent}, ${gold})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 10, fontWeight: 700, color: "#0f0f14", fontFamily: fontD,
          }}>Ag</div>
          <div>
            <div style={{ fontFamily: fontD, fontWeight: 600, fontSize: 14, lineHeight: 1 }}>{t.nav}</div>
            <div style={{ fontSize: 9, color: textS }}>{t.navSub}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {["tr", "en", "ar"].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              padding: "4px 10px", borderRadius: 6, border: `1px solid ${lang === l ? gold : border}`,
              background: lang === l ? gold + "15" : "transparent", cursor: "pointer",
              color: lang === l ? gold : textS, fontSize: 11, fontWeight: 600,
            }}>{l.toUpperCase()}</button>
          ))}
          <button onClick={() => setDark(!dark)} style={{
            marginLeft: 8, padding: "4px 10px", borderRadius: 6, border: `1px solid ${border}`,
            background: "transparent", cursor: "pointer", color: textS, fontSize: 11,
          }}>{dark ? "☀️" : "🌙"} {t.darkMode}</button>
        </div>
      </nav>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 20px" }}>
        <h1 style={{ fontFamily: isRTL ? fontAr : fontD, fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, marginBottom: 8 }}>
          {t.title}
        </h1>
        <p style={{ fontSize: 14, color: textS, marginBottom: 32 }}>{t.subtitle}</p>

        {/* Legend */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
          {[
            { cat: "silver", label: t.silverGroup },
            { cat: "alloy", label: t.alloyMetals },
            { cat: "precious", label: t.preciousMetals },
            { cat: "industrial", label: t.industrialMetals },
          ].map(item => (
            <div key={item.cat} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: textS }}>
              <div style={{ width: 12, height: 12, borderRadius: 3, background: CAT_COLORS[item.cat] }} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Element Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
          gap: 8, marginBottom: 32,
        }}>
          {ELEMENTS.map(el => {
            const isSelected = selected === el.z;
            const color = CAT_COLORS[el.cat];
            return (
              <div key={el.z} onClick={() => setSelected(el.z)} style={{
                cursor: "pointer", padding: "12px 10px", borderRadius: 10,
                border: `2px solid ${isSelected ? color : border}`,
                background: isSelected
                  ? (dark ? `${color}15` : `${color}20`)
                  : (dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)"),
                textAlign: "center", transition: "all 0.25s",
                transform: isSelected ? "scale(1.05)" : "scale(1)",
                boxShadow: isSelected ? `0 4px 20px ${color}22` : "none",
              }}>
                <div style={{ fontSize: 10, color: textS, fontFamily: "'JetBrains Mono', monospace" }}>{el.z}</div>
                <div style={{
                  fontSize: 26, fontWeight: 700, fontFamily: fontD, color: color,
                  lineHeight: 1.2, margin: "4px 0",
                }}>{el.sym}</div>
                <div style={{ fontSize: 10, color: textS, lineHeight: 1.2 }}>{el.name[lang]}</div>
                <div style={{ fontSize: 9, color: textS, opacity: 0.6, marginTop: 2, fontFamily: "'JetBrains Mono', monospace" }}>{el.mass}</div>
              </div>
            );
          })}
        </div>

        {/* Detail Panel */}
        <div style={{
          padding: "24px", borderRadius: 14,
          border: `1px solid ${sel ? CAT_COLORS[sel.cat] + "44" : border}`,
          background: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
          minHeight: 180, transition: "all 0.3s",
        }}>
          {sel ? (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 14,
                  background: `${CAT_COLORS[sel.cat]}15`,
                  border: `2px solid ${CAT_COLORS[sel.cat]}44`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontSize: 32, fontWeight: 700, fontFamily: fontD, color: CAT_COLORS[sel.cat] }}>{sel.sym}</span>
                </div>
                <div>
                  <h2 style={{ fontFamily: isRTL ? fontAr : fontD, fontSize: 22, fontWeight: 600, marginBottom: 4 }}>
                    {sel.name[lang]}
                  </h2>
                  <div style={{
                    display: "inline-block", padding: "2px 10px", borderRadius: 6,
                    fontSize: 10, fontWeight: 600, color: CAT_COLORS[sel.cat],
                    border: `1px solid ${CAT_COLORS[sel.cat]}33`,
                  }}>{catLabel(sel.cat)}</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12, marginBottom: 20 }}>
                {[
                  { label: t.atomicNumber, value: sel.z },
                  { label: t.atomicMass, value: sel.mass + " u" },
                  { label: t.meltingPoint, value: sel.mp },
                  { label: t.density, value: sel.dens + " g/cm³" },
                ].map((d, i) => (
                  <div key={i} style={{
                    padding: "10px 14px", borderRadius: 8, border: `1px solid ${border}`,
                    background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
                  }}>
                    <div style={{ fontSize: 10, color: textS, marginBottom: 4 }}>{d.label}</div>
                    <div style={{ fontSize: 15, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", color: textP }}>{d.value}</div>
                  </div>
                ))}
              </div>
              <div style={{
                padding: "14px 18px", borderRadius: 10,
                background: dark ? `${CAT_COLORS[sel.cat]}08` : `${CAT_COLORS[sel.cat]}10`,
                border: `1px solid ${CAT_COLORS[sel.cat]}22`,
              }}>
                <div style={{ fontSize: 11, color: CAT_COLORS[sel.cat], fontWeight: 600, marginBottom: 6 }}>{t.silverRelation}</div>
                <div style={{ fontSize: 14, color: textS, lineHeight: 1.6 }}>{sel.rel[lang]}</div>
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 0", color: textS, fontSize: 14 }}>
              <div style={{ fontSize: 40, marginBottom: 12, opacity: 0.3 }}>🔬</div>
              {t.clickElement}
            </div>
          )}
        </div>

        {/* Sponsor CTA */}
        <div style={{
          marginTop: 40, border: `1px solid ${gold}22`, borderRadius: 16,
          padding: "24px", textAlign: "center",
          background: dark ? "rgba(212,175,55,0.03)" : "rgba(212,175,55,0.05)",
        }}>
          <p style={{ fontSize: 14, color: textP, marginBottom: 12 }}>{t.sponsor.text}</p>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", borderRadius: 10,
            background: `linear-gradient(135deg, ${accent}, ${gold})`, color: "#0f0f14",
            fontSize: 13, fontWeight: 600, textDecoration: "none",
          }}>📸 {t.sponsor.cta}</a>
          <p style={{ fontSize: 11, color: textS, marginTop: 10, opacity: 0.7 }}>{t.sponsor.note}</p>
        </div>
      </div>

      <footer style={{
        marginTop: 40, borderTop: `1px solid ${border}`, padding: "24px", textAlign: "center",
        background: dark ? "#0c0c10" : "#f5f5f0",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
          <div style={{
            width: 22, height: 22, borderRadius: "50%",
            background: `linear-gradient(135deg, ${accent}, ${gold})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 9, fontWeight: 700, color: "#0f0f14", fontFamily: fontD,
          }}>Ag</div>
          <span style={{ fontFamily: fontD, fontWeight: 600, fontSize: 14 }}>{t.nav}</span>
        </div>
        <p style={{ fontSize: 11, color: textS }}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p>
      </footer>
    </div>
  );
}
