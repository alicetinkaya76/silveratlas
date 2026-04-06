import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════════════════════
   SilverAtlas — Takı Sigorta Değeri Hesaplayıcı
   Tool #27 · Faz 7 · Jewelry Insurance Value Calculator
   ═══════════════════════════════════════════════════════════ */

const T = {
  tr: {
    title: "Takı Sigorta Değeri Hesaplayıcı", subtitle: "Gümüş takılarınızın sigorta değerini tahmin edin",
    weight: "Ağırlık (gram)", purity: "Saflık", type: "Takı Türü", condition: "Durum", age: "Yaş (yıl)",
    gemstone: "Taş Var mı?", gemstoneValue: "Taş Değeri ($)",
    craftsmanship: "İşçilik Seviyesi", brand: "Marka/İmza",
    types: { ring: "Yüzük", necklace: "Kolye", bracelet: "Bileklik", earring: "Küpe", set: "Set", other: "Diğer" },
    conditions: { excellent: "Mükemmel", good: "İyi", fair: "Orta", poor: "Kötü" },
    crafts: { basic: "Temel", skilled: "Usta İşi", artisan: "Zanaatkâr", masterpiece: "Şaheser" },
    brands: { none: "Yok", local: "Yerel Marka", national: "Ulusal Marka", luxury: "Lüks Marka", antique: "Antika/İmzalı" },
    result: "Tahmini Sigorta Değeri", breakdown: "Değer Dağılımı",
    metalValue: "Metal Değeri", craftValue: "İşçilik Değeri", gemValue: "Taş Değeri",
    brandPremium: "Marka Primi", conditionAdj: "Durum Düzeltmesi", total: "Toplam Sigorta Değeri",
    disclaimer: "Bu tahmin bilgi amaçlıdır. Kesin sigorta değeri için profesyonel değerlendirme gereklidir.",
    sponsor: { badge: "Sponsor", name: "İstanbul Gümüş", text: "Sertifikalı gümüş takı koleksiyonumuzu keşfedin.", cta: "Koleksiyonu Gör" },
  },
  en: {
    title: "Jewelry Insurance Calculator", subtitle: "Estimate the insurance value of your silver jewelry",
    weight: "Weight (grams)", purity: "Purity", type: "Jewelry Type", condition: "Condition", age: "Age (years)",
    gemstone: "Has Gemstone?", gemstoneValue: "Gemstone Value ($)",
    craftsmanship: "Craftsmanship Level", brand: "Brand/Signature",
    types: { ring: "Ring", necklace: "Necklace", bracelet: "Bracelet", earring: "Earrings", set: "Set", other: "Other" },
    conditions: { excellent: "Excellent", good: "Good", fair: "Fair", poor: "Poor" },
    crafts: { basic: "Basic", skilled: "Skilled", artisan: "Artisan", masterpiece: "Masterpiece" },
    brands: { none: "None", local: "Local Brand", national: "National Brand", luxury: "Luxury Brand", antique: "Antique/Signed" },
    result: "Estimated Insurance Value", breakdown: "Value Breakdown",
    metalValue: "Metal Value", craftValue: "Craftsmanship Value", gemValue: "Gemstone Value",
    brandPremium: "Brand Premium", conditionAdj: "Condition Adjustment", total: "Total Insurance Value",
    disclaimer: "This estimate is for informational purposes only. Professional appraisal is required for actual insurance.",
    sponsor: { badge: "Sponsor", name: "İstanbul Gümüş", text: "Explore our certified silver jewelry collection.", cta: "View Collection" },
  },
  ar: {
    title: "حاسبة قيمة تأمين المجوهرات", subtitle: "قدّر قيمة التأمين لمجوهراتك الفضية",
    weight: "الوزن (غرام)", purity: "النقاء", type: "نوع المجوهرات", condition: "الحالة", age: "العمر (سنوات)",
    gemstone: "يوجد حجر؟", gemstoneValue: "قيمة الحجر ($)",
    craftsmanship: "مستوى الحرفية", brand: "العلامة التجارية/التوقيع",
    types: { ring: "خاتم", necklace: "قلادة", bracelet: "سوار", earring: "أقراط", set: "طقم", other: "أخرى" },
    conditions: { excellent: "ممتاز", good: "جيد", fair: "متوسط", poor: "سيء" },
    crafts: { basic: "أساسي", skilled: "ماهر", artisan: "حرفي", masterpiece: "تحفة فنية" },
    brands: { none: "لا يوجد", local: "محلية", national: "وطنية", luxury: "فاخرة", antique: "أثرية/موقعة" },
    result: "القيمة التأمينية المقدرة", breakdown: "توزيع القيمة",
    metalValue: "قيمة المعدن", craftValue: "قيمة الحرفية", gemValue: "قيمة الحجر",
    brandPremium: "علاوة العلامة", conditionAdj: "تعديل الحالة", total: "إجمالي قيمة التأمين",
    disclaimer: "هذا التقدير لأغراض إعلامية فقط. مطلوب تقييم مهني للتأمين الفعلي.",
    sponsor: { badge: "الراعي", name: "إسطنبول غوموش", text: "استكشف مجموعة المجوهرات الفضية المعتمدة.", cta: "عرض المجموعة" },
  },
};

const SILVER_PRICE_PER_GRAM = 0.95; // USD approx
const PURITY_FACTORS = { 999: 0.999, 980: 0.980, 950: 0.950, 925: 0.925, 900: 0.900, 800: 0.800 };
const CRAFT_MULTIPLIERS = { basic: 1.5, skilled: 2.5, artisan: 4.0, masterpiece: 7.0 };
const BRAND_MULTIPLIERS = { none: 1.0, local: 1.2, national: 1.5, luxury: 2.5, antique: 3.5 };
const CONDITION_FACTORS = { excellent: 1.0, good: 0.85, fair: 0.65, poor: 0.4 };

const THEME = {
  dark: { bg: "#0b0b10", card: "#141419", text: "#f0f0f0", muted: "#8a8a9a", dim: "#555566", border: "rgba(255,255,255,0.06)", accent: "#C0C0C0", gold: "#D4AF37", success: "#34d399" },
  light: { bg: "#f8f7f2", card: "#ffffff", text: "#1a1a2e", muted: "#6b6b7b", dim: "#9a9aaa", border: "rgba(0,0,0,0.06)", accent: "#708090", gold: "#C49B1C", success: "#059669" },
};

export default function InsuranceCalculator() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [weight, setWeight] = useState(25);
  const [purity, setPurity] = useState(925);
  const [type, setType] = useState("ring");
  const [condition, setCondition] = useState("excellent");
  const [age, setAge] = useState(0);
  const [hasGem, setHasGem] = useState(false);
  const [gemValue, setGemValue] = useState(0);
  const [craft, setCraft] = useState("skilled");
  const [brand, setBrand] = useState("none");

  const isRTL = lang === "ar";
  const th = dark ? THEME.dark : THEME.light;
  const t = T[lang];

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@400;600;700&family=JetBrains+Mono:wght@400;600&family=Noto+Naskh+Arabic:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  // Calculate
  const purityFactor = PURITY_FACTORS[purity] || 0.925;
  const metalVal = weight * SILVER_PRICE_PER_GRAM * purityFactor;
  const craftVal = metalVal * (CRAFT_MULTIPLIERS[craft] - 1);
  const gemVal = hasGem ? gemValue : 0;
  const subtotal = metalVal + craftVal + gemVal;
  const brandMul = BRAND_MULTIPLIERS[brand];
  const brandPrem = subtotal * (brandMul - 1);
  const condFactor = CONDITION_FACTORS[condition];
  const ageFactor = age > 50 ? 1.5 : age > 25 ? 1.2 : 1.0;
  const condAdj = (subtotal + brandPrem) * (condFactor - 1) + (subtotal + brandPrem) * (ageFactor - 1);
  const total = Math.max(0, (subtotal + brandPrem) * condFactor * ageFactor);

  const formatUSD = (v) => `$${v.toFixed(2)}`;

  const selectStyle = {
    width: "100%", padding: "10px 12px", borderRadius: 10,
    border: `1px solid ${th.border}`, background: th.card, color: th.text,
    fontSize: 13, outline: "none", fontFamily: "'Source Sans 3', sans-serif",
  };
  const labelStyle = { fontSize: 12, fontWeight: 600, color: th.muted, marginBottom: 6, display: "block" };

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{
      fontFamily: isRTL ? "'Noto Naskh Arabic', serif" : "'Source Sans 3', sans-serif",
      background: th.bg, color: th.text, minHeight: "100vh", maxWidth: 480, margin: "0 auto", padding: "24px 20px 40px",
    }}>
      <style>{`*{box-sizing:border-box;margin:0;padding:0} @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}`}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 28, animation: "fadeIn 0.3s ease" }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>🛡️</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{t.title}</h1>
        <p style={{ fontSize: 13, color: th.muted }}>{t.subtitle}</p>
      </div>

      {/* Lang + Theme */}
      <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 24 }}>
        {["tr", "en", "ar"].map(l => (
          <button key={l} onClick={() => setLang(l)} style={{
            padding: "6px 14px", borderRadius: 8, border: `1px solid ${lang === l ? th.gold : th.border}`,
            background: lang === l ? th.gold + "15" : "transparent", color: lang === l ? th.gold : th.muted,
            fontSize: 12, fontWeight: 600, cursor: "pointer",
          }}>{l.toUpperCase()}</button>
        ))}
        <button onClick={() => setDark(!dark)} style={{
          padding: "6px 14px", borderRadius: 8, border: `1px solid ${th.border}`,
          background: "transparent", color: th.muted, fontSize: 14, cursor: "pointer",
        }}>{dark ? "☀️" : "🌙"}</button>
      </div>

      {/* Inputs */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
        <div>
          <label style={labelStyle}>{t.weight}</label>
          <input type="number" value={weight} onChange={e => setWeight(+e.target.value)} min={1} style={selectStyle} />
        </div>
        <div>
          <label style={labelStyle}>{t.purity}</label>
          <select value={purity} onChange={e => setPurity(+e.target.value)} style={selectStyle}>
            {Object.keys(PURITY_FACTORS).map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>{t.type}</label>
          <select value={type} onChange={e => setType(e.target.value)} style={selectStyle}>
            {Object.entries(t.types).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>{t.condition}</label>
          <select value={condition} onChange={e => setCondition(e.target.value)} style={selectStyle}>
            {Object.entries(t.conditions).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>{t.craftsmanship}</label>
          <select value={craft} onChange={e => setCraft(e.target.value)} style={selectStyle}>
            {Object.entries(t.crafts).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>{t.brand}</label>
          <select value={brand} onChange={e => setBrand(e.target.value)} style={selectStyle}>
            {Object.entries(t.brands).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>{t.age}</label>
          <input type="number" value={age} onChange={e => setAge(+e.target.value)} min={0} style={selectStyle} />
        </div>
        <div>
          <label style={labelStyle}>{t.gemstone}</label>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setHasGem(!hasGem)} style={{
              flex: 1, padding: "10px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer",
              border: `1.5px solid ${hasGem ? th.success : th.border}`,
              background: hasGem ? th.success + "15" : "transparent",
              color: hasGem ? th.success : th.muted,
            }}>{hasGem ? "✓ Evet/Yes" : "✗ Hayır/No"}</button>
          </div>
        </div>
      </div>

      {hasGem && (
        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>{t.gemstoneValue}</label>
          <input type="number" value={gemValue} onChange={e => setGemValue(+e.target.value)} min={0} style={selectStyle} />
        </div>
      )}

      {/* Result */}
      <div style={{
        background: th.card, borderRadius: 16, padding: 20, marginBottom: 20,
        border: `1px solid ${th.gold}22`,
      }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, marginBottom: 16, color: th.gold }}>{t.result}</h2>

        <div style={{ fontSize: 36, fontWeight: 800, fontFamily: "'JetBrains Mono', monospace", color: th.success, textAlign: "center", marginBottom: 20 }}>
          {formatUSD(total)}
        </div>

        <h3 style={{ fontSize: 13, fontWeight: 600, color: th.muted, marginBottom: 12 }}>{t.breakdown}</h3>
        {[
          { label: t.metalValue, value: metalVal, color: th.accent },
          { label: t.craftValue, value: craftVal, color: "#3b82f6" },
          ...(hasGem ? [{ label: t.gemValue, value: gemVal, color: "#8b5cf6" }] : []),
          { label: t.brandPremium, value: brandPrem, color: th.gold },
        ].map((row, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${th.border}` }}>
            <span style={{ fontSize: 13, color: th.muted }}>{row.label}</span>
            <span style={{ fontSize: 13, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", color: row.color }}>{formatUSD(row.value)}</span>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0 0", marginTop: 4 }}>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{t.total}</span>
          <span style={{ fontSize: 16, fontWeight: 800, fontFamily: "'JetBrains Mono', monospace", color: th.success }}>{formatUSD(total)}</span>
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{ padding: 12, borderRadius: 12, background: th.gold + "08", fontSize: 11, color: th.dim, lineHeight: 1.6, marginBottom: 24 }}>
        ⚠️ {t.disclaimer}
      </div>

      {/* Sponsor */}
      <div style={{
        padding: 20, borderRadius: 16,
        background: `linear-gradient(135deg, ${th.gold}08, ${th.gold}04)`,
        border: `1px solid ${th.gold}18`, textAlign: "center",
      }}>
        <div style={{ fontSize: 10, color: th.gold, fontWeight: 700, letterSpacing: "0.05em", marginBottom: 6 }}>
          {t.sponsor.badge} · {t.sponsor.name}
        </div>
        <p style={{ fontSize: 13, color: th.muted, lineHeight: 1.5, marginBottom: 12 }}>{t.sponsor.text}</p>
        <a href="https://istanbulgumus.com" target="_blank" rel="noopener noreferrer" style={{
          display: "inline-block", padding: "10px 24px", borderRadius: 10,
          background: `linear-gradient(135deg, ${th.accent}, ${th.gold})`,
          color: "#0b0b10", fontSize: 13, fontWeight: 700, textDecoration: "none",
        }}>{t.sponsor.cta}</a>
      </div>
    </div>
  );
}
