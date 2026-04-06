import { useState, useEffect } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    title: "925 Saflık Hesaplayıcı",
    subtitle: "Gümüş ayar değerinden saf gümüş ve alaşım oranlarını hesaplayın",
    fineness: "Ayar Değeri (‰)",
    weight: "Ürün Ağırlığı (gram)",
    pureSilver: "Saf Gümüş (Ag)",
    alloyMetal: "Alaşım Metali (Cu)",
    silverWeight: "Saf Gümüş Miktarı",
    alloyWeight: "Alaşım Miktarı",
    totalWeight: "Toplam Ağırlık",
    presets: "Hazır Ayarlar",
    purityLevel: "Saflık Seviyesi",
    veryHigh: "Çok Yüksek",
    high: "Yüksek",
    standard: "Standart",
    medium: "Orta",
    low: "Düşük",
    resultTitle: "Hesaplama Sonucu",
    silverValue: "Gümüş Değeri (tahmini)",
    priceNote: "* Anlık spot fiyat üzerinden tahmini değer",
    gauge: "Saflık Göstergesi",
    presetItems: [
      { label: "999 Fine", value: 999 },
      { label: "970", value: 970 },
      { label: "950 Britannia", value: 950 },
      { label: "925 Sterling", value: 925 },
      { label: "900 Coin", value: 900 },
      { label: "835", value: 835 },
      { label: "800", value: 800 },
    ],
    sponsor: { text: "925 ayar gümüş ürünlerimizi inceleyin.", cta: "Instagram'da Gör", note: "İstanbul Gümüş sponsorluğundadır." },
    darkMode: "Mod"
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    title: "925 Purity Calculator",
    subtitle: "Calculate pure silver and alloy ratios from any fineness value",
    fineness: "Fineness (‰)",
    weight: "Product Weight (grams)",
    pureSilver: "Pure Silver (Ag)",
    alloyMetal: "Alloy Metal (Cu)",
    silverWeight: "Pure Silver Amount",
    alloyWeight: "Alloy Amount",
    totalWeight: "Total Weight",
    presets: "Quick Presets",
    purityLevel: "Purity Level",
    veryHigh: "Very High",
    high: "High",
    standard: "Standard",
    medium: "Medium",
    low: "Low",
    resultTitle: "Calculation Result",
    silverValue: "Silver Value (estimate)",
    priceNote: "* Estimated value based on spot price",
    gauge: "Purity Gauge",
    presetItems: [
      { label: "999 Fine", value: 999 },
      { label: "970", value: 970 },
      { label: "950 Britannia", value: 950 },
      { label: "925 Sterling", value: 925 },
      { label: "900 Coin", value: 900 },
      { label: "835", value: 835 },
      { label: "800", value: 800 },
    ],
    sponsor: { text: "Explore our 925 sterling silver products.", cta: "See on Instagram", note: "Sponsored by İstanbul Gümüş." },
    darkMode: "Mode"
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة معرفة الفضة",
    title: "حاسبة نقاء ٩٢٥",
    subtitle: "احسب نسب الفضة النقية والسبيكة من أي قيمة عيار",
    fineness: "قيمة العيار (‰)",
    weight: "وزن المنتج (غرام)",
    pureSilver: "فضة نقية (Ag)",
    alloyMetal: "معدن السبيكة (Cu)",
    silverWeight: "كمية الفضة النقية",
    alloyWeight: "كمية السبيكة",
    totalWeight: "الوزن الإجمالي",
    presets: "إعدادات سريعة",
    purityLevel: "مستوى النقاء",
    veryHigh: "عالي جدًا",
    high: "عالي",
    standard: "قياسي",
    medium: "متوسط",
    low: "منخفض",
    resultTitle: "نتيجة الحساب",
    silverValue: "قيمة الفضة (تقديرية)",
    priceNote: "* قيمة تقديرية بناءً على السعر الفوري",
    gauge: "مقياس النقاء",
    presetItems: [
      { label: "٩٩٩ نقي", value: 999 },
      { label: "٩٧٠", value: 970 },
      { label: "٩٥٠ بريتانيا", value: 950 },
      { label: "٩٢٥ إسترليني", value: 925 },
      { label: "٩٠٠ عملة", value: 900 },
      { label: "٨٣٥", value: 835 },
      { label: "٨٠٠", value: 800 },
    ],
    sponsor: { text: "استكشف منتجاتنا من الفضة الإسترلينية ٩٢٥.", cta: "شاهد على إنستغرام", note: "برعاية إسطنبول غوموش." },
    darkMode: "الوضع"
  }
};

const fontD = "'Playfair Display', serif";
const fontB = "'Source Sans 3', sans-serif";
const fontAr = "'Noto Naskh Arabic', serif";
const gold = "#D4AF37";
const accent = "#C0C0C0";

function PurityGauge({ fineness, dark, t }) {
  const pct = Math.min(fineness / 1000, 1);
  const angle = -135 + pct * 270;
  const r = 70;
  const cx = 90, cy = 90;
  const rad = (a) => (a * Math.PI) / 180;
  const nx = cx + (r - 14) * Math.cos(rad(angle));
  const ny = cy + (r - 14) * Math.sin(rad(angle));

  const getColor = (f) => {
    if (f >= 990) return "#27ae60";
    if (f >= 950) return "#2ecc71";
    if (f >= 920) return gold;
    if (f >= 850) return "#e67e22";
    return "#e74c3c";
  };

  const getLabel = (f) => {
    if (f >= 990) return t.veryHigh;
    if (f >= 950) return t.high;
    if (f >= 920) return t.standard;
    if (f >= 850) return t.medium;
    return t.low;
  };

  const color = getColor(fineness);

  return (
    <div style={{ textAlign: "center", margin: "16px 0" }}>
      <svg width="180" height="140" viewBox="0 0 180 140">
        {/* Background arc */}
        <path
          d={`M ${cx + r * Math.cos(rad(-135))} ${cy + r * Math.sin(rad(-135))} A ${r} ${r} 0 1 1 ${cx + r * Math.cos(rad(135))} ${cy + r * Math.sin(rad(135))}`}
          fill="none" stroke={dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"} strokeWidth="10" strokeLinecap="round"
        />
        {/* Filled arc */}
        <path
          d={`M ${cx + r * Math.cos(rad(-135))} ${cy + r * Math.sin(rad(-135))} A ${r} ${r} 0 ${pct > 0.5 ? 1 : 0} 1 ${cx + r * Math.cos(rad(angle))} ${cy + r * Math.sin(rad(angle))}`}
          fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
          style={{ transition: "d 0.5s, stroke 0.5s" }}
        />
        {/* Needle */}
        <circle cx={nx} cy={ny} r="6" fill={color} style={{ transition: "all 0.5s" }} />
        <circle cx={nx} cy={ny} r="3" fill={dark ? "#0f0f14" : "#fafaf5"} style={{ transition: "all 0.5s" }} />
        {/* Center text */}
        <text x={cx} y={cy - 6} textAnchor="middle" fontSize="24" fontWeight="700" fontFamily={fontD}
          fill={color} style={{ transition: "fill 0.5s" }}>
          {fineness}‰
        </text>
        <text x={cx} y={cy + 12} textAnchor="middle" fontSize="10" fill={dark ? "#a0a0a0" : "#555"}>
          {getLabel(fineness)}
        </text>
      </svg>
    </div>
  );
}

export default function SilverAtlasPurityCalculatorTool() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [fineness, setFineness] = useState(925);
  const [weight, setWeight] = useState(10);

  const t = T[lang];
  const isRTL = lang === "ar";
  const textP = dark ? "#e8e8e8" : "#1a1a2e";
  const textS = dark ? "#a0a0a0" : "#555";
  const bgMain = dark ? "#0f0f14" : "#fafaf5";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const bgCard = dark ? "#16161c" : "#ffffff";

  const silverPct = fineness / 1000;
  const alloyPct = 1 - silverPct;
  const silverWt = (silverPct * weight).toFixed(2);
  const alloyWt = (alloyPct * weight).toFixed(2);
  const approxValue = (silverPct * weight * 0.95).toFixed(2); // rough USD/g

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;600&family=Noto+Naskh+Arabic:wght@400;600&family=JetBrains+Mono:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

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

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "32px 20px" }}>
        <h1 style={{ fontFamily: isRTL ? fontAr : fontD, fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, marginBottom: 8 }}>
          {t.title}
        </h1>
        <p style={{ fontSize: 14, color: textS, marginBottom: 32 }}>{t.subtitle}</p>

        {/* Presets */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 12, color: textS, fontWeight: 600, marginBottom: 10 }}>{t.presets}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {t.presetItems.map(p => (
              <button key={p.value} onClick={() => setFineness(p.value)} style={{
                padding: "6px 14px", borderRadius: 8, cursor: "pointer",
                border: `1px solid ${fineness === p.value ? gold : border}`,
                background: fineness === p.value ? gold + "15" : "transparent",
                color: fineness === p.value ? gold : textS, fontSize: 12, fontWeight: 600,
              }}>{p.label}</button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
          <div>
            <label style={{ fontSize: 12, color: textS, display: "block", marginBottom: 6 }}>{t.fineness}</label>
            <input type="range" min="500" max="999" value={fineness}
              onChange={e => setFineness(Number(e.target.value))}
              style={{ width: "100%", accentColor: gold }} />
            <input type="number" min="500" max="999" value={fineness}
              onChange={e => setFineness(Math.max(500, Math.min(999, Number(e.target.value))))}
              style={{
                width: "100%", marginTop: 8, padding: "10px 14px", borderRadius: 8,
                border: `1px solid ${border}`, background: bgCard, color: textP,
                fontSize: 18, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace",
                textAlign: "center",
              }} />
          </div>
          <div>
            <label style={{ fontSize: 12, color: textS, display: "block", marginBottom: 6 }}>{t.weight}</label>
            <div style={{ height: 20 }} />
            <input type="number" min="0.1" step="0.1" value={weight}
              onChange={e => setWeight(Math.max(0.1, Number(e.target.value)))}
              style={{
                width: "100%", marginTop: 8, padding: "10px 14px", borderRadius: 8,
                border: `1px solid ${border}`, background: bgCard, color: textP,
                fontSize: 18, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace",
                textAlign: "center",
              }} />
          </div>
        </div>

        {/* Gauge */}
        <div style={{
          padding: "20px", borderRadius: 14, border: `1px solid ${border}`,
          background: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)", marginBottom: 24,
        }}>
          <div style={{ fontSize: 12, color: textS, fontWeight: 600, textAlign: "center", marginBottom: 8 }}>{t.gauge}</div>
          <PurityGauge fineness={fineness} dark={dark} t={t} />
        </div>

        {/* Visual Bar */}
        <div style={{ marginBottom: 24 }}>
          <div style={{
            height: 32, borderRadius: 10, overflow: "hidden", display: "flex",
            border: `1px solid ${border}`,
          }}>
            <div style={{
              width: `${silverPct * 100}%`, background: `linear-gradient(90deg, ${accent}, ${gold})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 600, color: "#0f0f14", transition: "width 0.4s",
            }}>
              Ag {(silverPct * 100).toFixed(1)}%
            </div>
            <div style={{
              flex: 1, background: dark ? "rgba(230,126,34,0.2)" : "rgba(230,126,34,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 600, color: "#e67e22", transition: "width 0.4s",
            }}>
              Cu {(alloyPct * 100).toFixed(1)}%
            </div>
          </div>
        </div>

        {/* Results */}
        <div style={{
          padding: "24px", borderRadius: 14, border: `1px solid ${gold}33`,
          background: dark ? "rgba(212,175,55,0.03)" : "rgba(212,175,55,0.05)",
        }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: gold }}>{t.resultTitle}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { label: t.pureSilver, value: `${silverWt} g`, color: accent },
              { label: t.alloyMetal, value: `${alloyWt} g`, color: "#e67e22" },
              { label: t.totalWeight, value: `${weight} g`, color: textP },
              { label: t.purityLevel, value: `${(silverPct * 100).toFixed(1)}%`, color: gold },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "14px", borderRadius: 10, border: `1px solid ${border}`,
                background: dark ? "rgba(255,255,255,0.02)" : "#fff",
              }}>
                <div style={{ fontSize: 11, color: textS, marginBottom: 4 }}>{item.label}</div>
                <div style={{
                  fontSize: 20, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace",
                  color: item.color,
                }}>{item.value}</div>
              </div>
            ))}
          </div>
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
