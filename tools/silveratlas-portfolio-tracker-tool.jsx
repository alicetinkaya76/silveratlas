import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════════════════════
   SilverAtlas — Gümüş Cüzdan Takipçisi / Portfolio Tracker
   Tool #31 · Faz 7 · Silver collection value tracking
   ═══════════════════════════════════════════════════════════ */

const T = {
  tr: { title: "Gümüş Portföy Takipçisi", subtitle: "Koleksiyonunuzun toplam değerini hesaplayın",
    addItem: "Parça Ekle", name: "Ad", weight: "Ağırlık (g)", purity: "Ayar", purchase: "Alış ($)",
    totalWeight: "Toplam Ağırlık", totalValue: "Güncel Değer", totalCost: "Toplam Maliyet",
    profitLoss: "Kâr/Zarar", items: "Parça", remove: "Sil", empty: "Henüz parça eklenmedi",
    edit: "Düzenle", save: "Kaydet", cancel: "İptal", silverPrice: "Gümüş Fiyatı ($/oz)",
    types: { ring: "💍 Yüzük", necklace: "📿 Kolye", bracelet: "⌚ Bileklik", coin: "🪙 Sikke", bar: "🧱 Külçe", other: "✦ Diğer" },
    sponsor: { badge: "Sponsor", name: "İstanbul Gümüş", text: "Koleksiyonunuza değer katacak yeni parçalar.", cta: "Koleksiyonu Keşfet" },
  },
  en: { title: "Silver Portfolio Tracker", subtitle: "Calculate the total value of your collection",
    addItem: "Add Item", name: "Name", weight: "Weight (g)", purity: "Purity", purchase: "Cost ($)",
    totalWeight: "Total Weight", totalValue: "Current Value", totalCost: "Total Cost",
    profitLoss: "Profit/Loss", items: "Items", remove: "Remove", empty: "No items added yet",
    edit: "Edit", save: "Save", cancel: "Cancel", silverPrice: "Silver Price ($/oz)",
    types: { ring: "💍 Ring", necklace: "📿 Necklace", bracelet: "⌚ Bracelet", coin: "🪙 Coin", bar: "🧱 Bar", other: "✦ Other" },
    sponsor: { badge: "Sponsor", name: "İstanbul Gümüş", text: "New pieces to add value to your collection.", cta: "Explore Collection" },
  },
  ar: { title: "متتبع محفظة الفضة", subtitle: "احسب القيمة الإجمالية لمجموعتك",
    addItem: "إضافة قطعة", name: "الاسم", weight: "الوزن (غ)", purity: "العيار", purchase: "التكلفة ($)",
    totalWeight: "الوزن الإجمالي", totalValue: "القيمة الحالية", totalCost: "التكلفة الإجمالية",
    profitLoss: "الربح/الخسارة", items: "قطع", remove: "حذف", empty: "لم تتم إضافة قطع بعد",
    edit: "تعديل", save: "حفظ", cancel: "إلغاء", silverPrice: "سعر الفضة ($/أوقية)",
    types: { ring: "💍 خاتم", necklace: "📿 قلادة", bracelet: "⌚ سوار", coin: "🪙 عملة", bar: "🧱 سبيكة", other: "✦ أخرى" },
    sponsor: { badge: "الراعي", name: "إسطنبول غوموش", text: "قطع جديدة تضيف قيمة لمجموعتك.", cta: "استكشف المجموعة" },
  },
};

const TH = {
  dark: { bg: "#0b0b10", card: "#141419", text: "#f0f0f0", muted: "#8a8a9a", dim: "#555566", border: "rgba(255,255,255,0.06)", accent: "#C0C0C0", gold: "#D4AF37", success: "#34d399", error: "#f87171" },
  light: { bg: "#f8f7f2", card: "#ffffff", text: "#1a1a2e", muted: "#6b6b7b", dim: "#9a9aaa", border: "rgba(0,0,0,0.06)", accent: "#708090", gold: "#C49B1C", success: "#059669", error: "#dc2626" },
};

const PURITIES = [999, 980, 950, 925, 900, 800];

export default function PortfolioTracker() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [items, setItems] = useState([]);
  const [silverPrice, setSilverPrice] = useState(31.5); // $/troy oz
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", type: "ring", weight: "", purity: 925, cost: "" });

  const isRTL = lang === "ar";
  const th = dark ? TH.dark : TH.light;
  const t = T[lang];

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Source+Sans+3:wght@400;600;700&family=JetBrains+Mono:wght@400;600&family=Noto+Naskh+Arabic:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const pricePerGram = silverPrice / 31.1035;

  const addItem = () => {
    if (!form.name || !form.weight) return;
    setItems([...items, { ...form, id: Date.now(), weight: +form.weight, cost: +form.cost || 0 }]);
    setForm({ name: "", type: "ring", weight: "", purity: 925, cost: "" });
    setShowForm(false);
  };

  const removeItem = (id) => setItems(items.filter(i => i.id !== id));

  const totalWeight = items.reduce((s, i) => s + i.weight, 0);
  const totalCost = items.reduce((s, i) => s + i.cost, 0);
  const totalValue = items.reduce((s, i) => s + (i.weight * (i.purity / 1000) * pricePerGram), 0);
  const profitLoss = totalValue - totalCost;

  const inputStyle = {
    width: "100%", padding: "10px 12px", borderRadius: 10,
    border: `1px solid ${th.border}`, background: th.card, color: th.text,
    fontSize: 13, outline: "none", fontFamily: "'Source Sans 3', sans-serif",
  };

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{
      fontFamily: isRTL ? "'Noto Naskh Arabic', serif" : "'Source Sans 3', sans-serif",
      background: th.bg, color: th.text, minHeight: "100vh", maxWidth: 480, margin: "0 auto", padding: "24px 20px 40px",
    }}>
      <style>{`*{box-sizing:border-box;margin:0;padding:0} @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}`}</style>

      <div style={{ textAlign: "center", marginBottom: 24, animation: "fadeIn 0.3s ease" }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>💰</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{t.title}</h1>
        <p style={{ fontSize: 13, color: th.muted }}>{t.subtitle}</p>
      </div>

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

      {/* Silver Price */}
      <div style={{ marginBottom: 20 }}>
        <label style={{ fontSize: 12, fontWeight: 600, color: th.muted, marginBottom: 6, display: "block" }}>{t.silverPrice}</label>
        <input type="number" value={silverPrice} onChange={e => setSilverPrice(+e.target.value)} step={0.5} style={inputStyle} />
      </div>

      {/* Summary Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
        {[
          { label: t.totalWeight, value: `${totalWeight.toFixed(1)}g`, color: th.accent },
          { label: t.items, value: items.length, color: th.gold },
          { label: t.totalValue, value: `$${totalValue.toFixed(2)}`, color: th.success },
          { label: t.profitLoss, value: `${profitLoss >= 0 ? "+" : ""}$${profitLoss.toFixed(2)}`, color: profitLoss >= 0 ? th.success : th.error },
        ].map((c, i) => (
          <div key={i} style={{ padding: 14, borderRadius: 14, background: th.card, border: `1px solid ${th.border}`, textAlign: "center" }}>
            <div style={{ fontSize: 20, fontWeight: 800, fontFamily: "'JetBrains Mono', monospace", color: c.color }}>{c.value}</div>
            <div style={{ fontSize: 10, color: th.dim, marginTop: 4 }}>{c.label}</div>
          </div>
        ))}
      </div>

      {/* Item List */}
      {items.length === 0 ? (
        <div style={{ textAlign: "center", padding: 32, color: th.dim, fontSize: 13 }}>{t.empty}</div>
      ) : (
        <div style={{ marginBottom: 16 }}>
          {items.map(item => (
            <div key={item.id} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "12px 14px", borderRadius: 12, background: th.card,
              border: `1px solid ${th.border}`, marginBottom: 8,
            }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>
                  {t.types[item.type]?.split(" ")[0]} {item.name}
                </div>
                <div style={{ fontSize: 11, color: th.dim }}>
                  {item.weight}g · {item.purity} · ${(item.weight * (item.purity / 1000) * pricePerGram).toFixed(2)}
                </div>
              </div>
              <button onClick={() => removeItem(item.id)} style={{
                padding: "6px 10px", borderRadius: 8, border: `1px solid ${th.error}33`,
                background: "transparent", color: th.error, fontSize: 11, cursor: "pointer",
              }}>✕</button>
            </div>
          ))}
        </div>
      )}

      {/* Add Form */}
      {showForm ? (
        <div style={{ background: th.card, borderRadius: 16, padding: 16, marginBottom: 20, border: `1px solid ${th.border}` }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
            <div>
              <label style={{ fontSize: 11, color: th.dim }}>{t.name}</label>
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: 11, color: th.dim }}>Type</label>
              <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} style={inputStyle}>
                {Object.entries(t.types).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 11, color: th.dim }}>{t.weight}</label>
              <input type="number" value={form.weight} onChange={e => setForm({ ...form, weight: e.target.value })} style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: 11, color: th.dim }}>{t.purity}</label>
              <select value={form.purity} onChange={e => setForm({ ...form, purity: +e.target.value })} style={inputStyle}>
                {PURITIES.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={{ fontSize: 11, color: th.dim }}>{t.purchase}</label>
              <input type="number" value={form.cost} onChange={e => setForm({ ...form, cost: e.target.value })} style={inputStyle} />
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={addItem} style={{
              flex: 1, padding: "12px", borderRadius: 12, border: "none",
              background: `linear-gradient(135deg, ${th.accent}, ${th.gold})`,
              color: "#0b0b10", fontSize: 14, fontWeight: 700, cursor: "pointer",
            }}>{t.save}</button>
            <button onClick={() => setShowForm(false)} style={{
              padding: "12px 20px", borderRadius: 12, border: `1px solid ${th.border}`,
              background: "transparent", color: th.muted, fontSize: 14, cursor: "pointer",
            }}>{t.cancel}</button>
          </div>
        </div>
      ) : (
        <button onClick={() => setShowForm(true)} style={{
          width: "100%", padding: "14px", borderRadius: 14, border: `2px dashed ${th.border}`,
          background: "transparent", color: th.muted, fontSize: 14, fontWeight: 600, cursor: "pointer", marginBottom: 20,
        }}>+ {t.addItem}</button>
      )}

      {/* Sponsor */}
      <div style={{
        padding: 20, borderRadius: 16, background: `linear-gradient(135deg, ${th.gold}08, ${th.gold}04)`,
        border: `1px solid ${th.gold}18`, textAlign: "center",
      }}>
        <div style={{ fontSize: 10, color: th.gold, fontWeight: 700, letterSpacing: "0.05em", marginBottom: 6 }}>{t.sponsor.badge} · {t.sponsor.name}</div>
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
