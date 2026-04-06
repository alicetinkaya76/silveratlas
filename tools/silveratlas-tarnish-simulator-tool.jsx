import { useState, useEffect, useRef, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════
   SilverAtlas — Renk Değişim Simülatörü / Tarnish Simulator
   Tool #29 · Faz 7 · Tarnish-polish slider simulation
   ═══════════════════════════════════════════════════════════ */

const T = {
  tr: {
    title: "Gümüş Renk Değişim Simülatörü", subtitle: "Kararma ve parlatma sürecini simüle edin",
    tarnishLevel: "Kararma Seviyesi", polish: "Parlak", tarnished: "Kararmış",
    weeks: "hafta", environment: "Ortam Koşulu",
    envs: { normal: "Normal İç Mekan", humid: "Nemli Ortam", sulfur: "Kükürlü Ortam", coastal: "Sahil Kenarı", sealed: "Kapalı Kutu" },
    alloy: "Alaşım", alloys: { s999: "999 Saf", s925: "925 Sterling", s900: "900 Coin", s800: "800 Kont." },
    info: "Gümüş kararması (tarnish) gümüş sülfür (Ag₂S) tabakası oluşumuyla meydana gelir. Ortamdaki kükürt bileşikleri ve nem bu süreci hızlandırır.",
    tipTitle: "Koruma İpuçları",
    tips: ["Anti-tarnish poşette saklayın", "Parfüm ve kimyasaldan uzak tutun", "Düzenli kullanım kararmanın en iyi ilacıdır", "Silika jel ile birlikte saklayın"],
    sponsor: { badge: "Sponsor", name: "İstanbul Gümüş", text: "Anti-tarnish kaplamalı premium gümüş koleksiyonumuz.", cta: "Koleksiyonu Keşfet" },
  },
  en: {
    title: "Silver Tarnish Simulator", subtitle: "Simulate the tarnishing and polishing process",
    tarnishLevel: "Tarnish Level", polish: "Polished", tarnished: "Tarnished",
    weeks: "weeks", environment: "Environment",
    envs: { normal: "Normal Indoor", humid: "Humid", sulfur: "Sulfur-rich", coastal: "Coastal", sealed: "Sealed Box" },
    alloy: "Alloy", alloys: { s999: "999 Fine", s925: "925 Sterling", s900: "900 Coin", s800: "800 Continental" },
    info: "Silver tarnish occurs through formation of silver sulfide (Ag₂S) layer. Sulfur compounds and humidity in the environment accelerate this process.",
    tipTitle: "Protection Tips",
    tips: ["Store in anti-tarnish pouches", "Keep away from perfume and chemicals", "Regular wearing is the best prevention", "Store with silica gel packets"],
    sponsor: { badge: "Sponsor", name: "İstanbul Gümüş", text: "Our premium silver collection with anti-tarnish coating.", cta: "Explore Collection" },
  },
  ar: {
    title: "محاكي تغير لون الفضة", subtitle: "محاكاة عملية التشوه والتلميع",
    tarnishLevel: "مستوى التشوه", polish: "لامع", tarnished: "متشوه",
    weeks: "أسابيع", environment: "البيئة",
    envs: { normal: "داخلي عادي", humid: "رطب", sulfur: "غني بالكبريت", coastal: "ساحلي", sealed: "صندوق مغلق" },
    alloy: "السبيكة", alloys: { s999: "٩٩٩ نقي", s925: "٩٢٥ إسترليني", s900: "٩٠٠ عملة", s800: "٨٠٠ قاري" },
    info: "يحدث تشوه الفضة من خلال تكوين طبقة كبريتيد الفضة. مركبات الكبريت والرطوبة تسرّع هذه العملية.",
    tipTitle: "نصائح الحماية",
    tips: ["خزّن في أكياس مضادة للتشوه", "أبعد عن العطور والكيميائيات", "الارتداء المنتظم أفضل وقاية", "خزّن مع أكياس السيليكا جل"],
    sponsor: { badge: "الراعي", name: "إسطنبول غوموش", text: "مجموعة الفضة المتميزة بطلاء مضاد للتشوه.", cta: "استكشف المجموعة" },
  },
};

const TH = {
  dark: { bg: "#0b0b10", card: "#141419", text: "#f0f0f0", muted: "#8a8a9a", dim: "#555566", border: "rgba(255,255,255,0.06)", accent: "#C0C0C0", gold: "#D4AF37" },
  light: { bg: "#f8f7f2", card: "#ffffff", text: "#1a1a2e", muted: "#6b6b7b", dim: "#9a9aaa", border: "rgba(0,0,0,0.06)", accent: "#708090", gold: "#C49B1C" },
};

const ENV_SPEEDS = { normal: 1, humid: 2, sulfur: 4, coastal: 2.5, sealed: 0.2 };
const ALLOY_RESIST = { s999: 0.6, s925: 1.0, s900: 1.2, s800: 1.5 };

const TARNISH_COLORS = [
  "#E8E8EC", "#E0DFE2", "#D5D2D4", "#C8C3C5", "#B8B0B2",
  "#A89DA0", "#988A8E", "#887880", "#786872", "#685864",
  "#5A4A56", "#4C3C48", "#3E2E3A", "#30202C", "#221420",
];

export default function TarnishSimulator() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [tarnish, setTarnish] = useState(0);
  const [env, setEnv] = useState("normal");
  const [alloy, setAlloy] = useState("s925");
  const canvasRef = useRef(null);

  const isRTL = lang === "ar";
  const th = dark ? TH.dark : TH.light;
  const t = T[lang];

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@400;600;700&family=Noto+Naskh+Arabic:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const drawSurface = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const colorIdx = Math.min(Math.floor(tarnish / 100 * (TARNISH_COLORS.length - 1)), TARNISH_COLORS.length - 1);
    const baseColor = TARNISH_COLORS[colorIdx];

    // Silver plate shape
    ctx.beginPath();
    ctx.roundRect(20, 20, W - 40, H - 40, 20);
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, baseColor);
    const lighterIdx = Math.max(0, colorIdx - 2);
    grad.addColorStop(0.4, TARNISH_COLORS[lighterIdx]);
    grad.addColorStop(0.6, baseColor);
    grad.addColorStop(1, TARNISH_COLORS[Math.min(TARNISH_COLORS.length - 1, colorIdx + 1)]);
    ctx.fillStyle = grad;
    ctx.fill();

    // Highlight streak (polish indicator)
    if (tarnish < 30) {
      ctx.save();
      ctx.globalAlpha = 0.3 * (1 - tarnish / 30);
      ctx.beginPath();
      ctx.ellipse(W * 0.4, H * 0.35, W * 0.2, H * 0.05, -0.4, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.restore();
    }

    // Tarnish spots (when high)
    if (tarnish > 50) {
      ctx.save();
      ctx.globalAlpha = (tarnish - 50) / 100;
      for (let i = 0; i < 20; i++) {
        const x = 40 + Math.random() * (W - 80);
        const y = 40 + Math.random() * (H - 80);
        const r = 2 + Math.random() * 6;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(40,20,30,${0.2 + Math.random() * 0.3})`;
        ctx.fill();
      }
      ctx.restore();
    }

    // Ag text
    ctx.save();
    ctx.font = "bold 36px 'Playfair Display', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = tarnish < 50 ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0.06)";
    ctx.fillText("Ag", W / 2, H / 2);
    ctx.restore();
  }, [tarnish]);

  useEffect(() => { drawSurface(); }, [drawSurface]);

  const weeksEstimate = Math.round(tarnish / (ENV_SPEEDS[env] * ALLOY_RESIST[alloy]) * 4);

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{
      fontFamily: isRTL ? "'Noto Naskh Arabic', serif" : "'Source Sans 3', sans-serif",
      background: th.bg, color: th.text, minHeight: "100vh", maxWidth: 480, margin: "0 auto", padding: "24px 20px 40px",
    }}>
      <style>{`*{box-sizing:border-box;margin:0;padding:0} @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}`}</style>

      <div style={{ textAlign: "center", marginBottom: 24, animation: "fadeIn 0.3s ease" }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>🔄</div>
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

      {/* Canvas */}
      <div style={{ background: th.card, borderRadius: 16, padding: 16, marginBottom: 20, border: `1px solid ${th.border}` }}>
        <canvas ref={canvasRef} width={400} height={240} style={{ width: "100%", height: "auto", borderRadius: 12, background: dark ? "#0f0f16" : "#eeeef0" }} />
      </div>

      {/* Tarnish Slider */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 12, color: th.muted }}>{t.tarnishLevel}: {tarnish}%</span>
          <span style={{ fontSize: 12, color: th.dim }}>~{weeksEstimate} {t.weeks}</span>
        </div>
        <input type="range" min={0} max={100} value={tarnish} onChange={e => setTarnish(+e.target.value)}
          style={{ width: "100%", accentColor: th.accent }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: th.dim, marginTop: 4 }}>
          <span>✨ {t.polish}</span><span>🟤 {t.tarnished}</span>
        </div>
      </div>

      {/* Environment */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 12, fontWeight: 600, color: th.muted, marginBottom: 8, display: "block" }}>{t.environment}</label>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {Object.entries(t.envs).map(([k, v]) => (
            <button key={k} onClick={() => setEnv(k)} style={{
              padding: "8px 14px", borderRadius: 10, fontSize: 12, fontWeight: 600, cursor: "pointer",
              border: `1.5px solid ${env === k ? th.gold : th.border}`,
              background: env === k ? th.gold + "12" : "transparent",
              color: env === k ? th.gold : th.muted,
            }}>{v}</button>
          ))}
        </div>
      </div>

      {/* Alloy */}
      <div style={{ marginBottom: 20 }}>
        <label style={{ fontSize: 12, fontWeight: 600, color: th.muted, marginBottom: 8, display: "block" }}>{t.alloy}</label>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {Object.entries(t.alloys).map(([k, v]) => (
            <button key={k} onClick={() => setAlloy(k)} style={{
              padding: "8px 14px", borderRadius: 10, fontSize: 12, fontWeight: 600, cursor: "pointer",
              border: `1.5px solid ${alloy === k ? th.accent : th.border}`,
              background: alloy === k ? th.accent + "12" : "transparent",
              color: alloy === k ? th.accent : th.muted,
            }}>{v}</button>
          ))}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: 16, borderRadius: 14, background: th.card, border: `1px solid ${th.border}`, marginBottom: 16 }}>
        <p style={{ fontSize: 13, color: th.muted, lineHeight: 1.7 }}>🔬 {t.info}</p>
      </div>

      {/* Tips */}
      <div style={{ padding: 16, borderRadius: 14, background: th.gold + "06", border: `1px solid ${th.gold}12`, marginBottom: 24 }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: th.gold, marginBottom: 10 }}>💡 {t.tipTitle}</h3>
        {t.tips.map((tip, i) => (
          <div key={i} style={{ fontSize: 12, color: th.muted, lineHeight: 1.7, paddingLeft: 16, position: "relative" }}>
            <span style={{ position: "absolute", left: 0 }}>•</span>{tip}
          </div>
        ))}
      </div>

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
