import { useState, useEffect, useRef, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════
   SilverAtlas — Gravür Önizleyici / Engraving Previewer
   Tool #26 · Faz 7 · Canvas-based text preview on silver surface
   ═══════════════════════════════════════════════════════════ */

const T = {
  tr: {
    title: "Gümüş Gravür Önizleyici",
    subtitle: "Takınıza işlenecek metni önceden görüntüleyin",
    textLabel: "Gravür Metni",
    textPlaceholder: "İsim, tarih veya mesaj yazın…",
    fontLabel: "Yazı Tipi",
    sizeLabel: "Boyut",
    curveLabel: "Eğrilik",
    surfaceLabel: "Yüzey",
    surfaces: { ring: "Yüzük İç", pendant: "Kolye Ucu", bracelet: "Bileklik Plaka", plate: "Düz Plaka" },
    fonts: { serif: "Klasik Serif", script: "El Yazısı", sans: "Modern Sans", mono: "Monogram" },
    charCount: "karakter",
    maxChars: "Maks. 30 karakter",
    tip: "İpucu: Yüzük içi gravür için kısa metinler (8-15 karakter) önerilir.",
    sponsor: { badge: "Sponsor", name: "İstanbul Gümüş", text: "Kişisel gravür hizmetimiz ile takılarınıza anlam katın.", cta: "Gravür Siparişi" },
  },
  en: {
    title: "Silver Engraving Previewer",
    subtitle: "Preview text to be engraved on your jewelry",
    textLabel: "Engraving Text",
    textPlaceholder: "Type a name, date or message…",
    fontLabel: "Font Style",
    sizeLabel: "Size",
    curveLabel: "Curvature",
    surfaceLabel: "Surface",
    surfaces: { ring: "Ring Inside", pendant: "Pendant", bracelet: "Bracelet Plate", plate: "Flat Plate" },
    fonts: { serif: "Classic Serif", script: "Script", sans: "Modern Sans", mono: "Monogram" },
    charCount: "characters",
    maxChars: "Max 30 characters",
    tip: "Tip: Short texts (8-15 chars) are recommended for ring inside engraving.",
    sponsor: { badge: "Sponsor", name: "İstanbul Gümüş", text: "Add meaning to your jewelry with our personal engraving service.", cta: "Order Engraving" },
  },
  ar: {
    title: "معاينة النقش الفضي",
    subtitle: "معاينة النص المراد نقشه على مجوهراتك",
    textLabel: "نص النقش",
    textPlaceholder: "اكتب اسمًا أو تاريخًا أو رسالة…",
    fontLabel: "نمط الخط",
    sizeLabel: "الحجم",
    curveLabel: "الانحناء",
    surfaceLabel: "السطح",
    surfaces: { ring: "داخل الخاتم", pendant: "قلادة", bracelet: "لوحة سوار", plate: "لوح مسطح" },
    fonts: { serif: "كلاسيكي", script: "خط يدوي", sans: "حديث", mono: "مونوغرام" },
    charCount: "أحرف",
    maxChars: "٣٠ حرفًا كحد أقصى",
    tip: "نصيحة: يُنصح بالنصوص القصيرة (٨-١٥ حرفًا) للنقش داخل الخاتم.",
    sponsor: { badge: "الراعي", name: "إسطنبول غوموش", text: "أضف معنى لمجوهراتك مع خدمة النقش الشخصية.", cta: "اطلب النقش" },
  },
};

const THEME = {
  dark: { bg: "#0b0b10", card: "#141419", text: "#f0f0f0", muted: "#8a8a9a", dim: "#555566", border: "rgba(255,255,255,0.06)", accent: "#C0C0C0", gold: "#D4AF37" },
  light: { bg: "#f8f7f2", card: "#ffffff", text: "#1a1a2e", muted: "#6b6b7b", dim: "#9a9aaa", border: "rgba(0,0,0,0.06)", accent: "#708090", gold: "#C49B1C" },
};

const FONT_MAP = {
  serif: "'Playfair Display', serif",
  script: "'Dancing Script', cursive",
  sans: "'Source Sans 3', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

export default function EngravingPreview() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [text, setText] = useState("");
  const [fontStyle, setFontStyle] = useState("serif");
  const [fontSize, setFontSize] = useState(18);
  const [curve, setCurve] = useState(0);
  const [surface, setSurface] = useState("ring");
  const canvasRef = useRef(null);

  const isRTL = lang === "ar";
  const th = dark ? THEME.dark : THEME.light;
  const t = T[lang];

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@400;600&family=Dancing+Script:wght@400;600&family=JetBrains+Mono:wght@400&family=Noto+Naskh+Arabic:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const drawEngraving = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;

    // Clear
    ctx.clearRect(0, 0, W, H);

    // Silver surface gradient
    const surfGrad = ctx.createLinearGradient(0, 0, W, H);
    if (dark) {
      surfGrad.addColorStop(0, "#3a3a42");
      surfGrad.addColorStop(0.3, "#5a5a64");
      surfGrad.addColorStop(0.5, "#6a6a74");
      surfGrad.addColorStop(0.7, "#5a5a64");
      surfGrad.addColorStop(1, "#3a3a42");
    } else {
      surfGrad.addColorStop(0, "#d0d0d8");
      surfGrad.addColorStop(0.3, "#e8e8ef");
      surfGrad.addColorStop(0.5, "#f0f0f6");
      surfGrad.addColorStop(0.7, "#e8e8ef");
      surfGrad.addColorStop(1, "#d0d0d8");
    }

    // Draw surface shape
    ctx.save();
    if (surface === "ring") {
      // Ring inner surface — curved band
      ctx.beginPath();
      ctx.ellipse(W / 2, H / 2, W * 0.42, H * 0.32, 0, 0, Math.PI * 2);
      ctx.fillStyle = surfGrad;
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(W / 2, H / 2, W * 0.32, H * 0.22, 0, 0, Math.PI * 2);
      ctx.fillStyle = dark ? "#0b0b10" : "#f8f7f2";
      ctx.fill();
    } else if (surface === "pendant") {
      // Pendant — teardrop shape
      ctx.beginPath();
      ctx.moveTo(W / 2, H * 0.12);
      ctx.bezierCurveTo(W * 0.75, H * 0.25, W * 0.78, H * 0.65, W / 2, H * 0.88);
      ctx.bezierCurveTo(W * 0.22, H * 0.65, W * 0.25, H * 0.25, W / 2, H * 0.12);
      ctx.fillStyle = surfGrad;
      ctx.fill();
    } else if (surface === "bracelet") {
      // Bracelet plate — rounded rect
      const rx = W * 0.08, ry = H * 0.2, rw = W * 0.84, rh = H * 0.6;
      ctx.beginPath();
      ctx.roundRect(rx, ry, rw, rh, 16);
      ctx.fillStyle = surfGrad;
      ctx.fill();
    } else {
      // Flat plate
      ctx.beginPath();
      ctx.roundRect(W * 0.06, H * 0.15, W * 0.88, H * 0.7, 8);
      ctx.fillStyle = surfGrad;
      ctx.fill();
    }
    ctx.restore();

    // Draw engraving text
    if (!text) return;
    const displayText = text.slice(0, 30);
    ctx.save();

    const font = FONT_MAP[fontStyle] || FONT_MAP.serif;
    ctx.font = `${fontSize}px ${font}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Engraving effect — inset shadow look
    if (curve > 0 && surface === "ring") {
      // Curved text along arc
      const radius = W * 0.37;
      const totalAngle = (displayText.length * 0.08) * (curve / 50);
      const startAngle = Math.PI / 2 + totalAngle / 2;

      ctx.translate(W / 2, H / 2);
      for (let i = 0; i < displayText.length; i++) {
        const charAngle = startAngle - (i * totalAngle / displayText.length);
        ctx.save();
        ctx.rotate(-charAngle + Math.PI / 2);
        ctx.translate(0, -radius);
        ctx.rotate(Math.PI);
        // Shadow
        ctx.fillStyle = dark ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.2)";
        ctx.fillText(displayText[i], 1, 1);
        // Main text
        ctx.fillStyle = dark ? "rgba(180,180,195,0.9)" : "rgba(80,80,95,0.8)";
        ctx.fillText(displayText[i], 0, 0);
        ctx.restore();
      }
    } else {
      // Straight text
      ctx.translate(W / 2, H / 2);
      // Shadow
      ctx.fillStyle = dark ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.2)";
      ctx.fillText(displayText, 1, 1);
      // Main engraved text
      ctx.fillStyle = dark ? "rgba(180,180,195,0.9)" : "rgba(80,80,95,0.8)";
      ctx.fillText(displayText, 0, 0);
    }
    ctx.restore();
  }, [text, fontStyle, fontSize, curve, surface, dark]);

  useEffect(() => { drawEngraving(); }, [drawEngraving]);

  const inputStyle = {
    width: "100%", padding: "12px 14px", borderRadius: 10,
    border: `1px solid ${th.border}`, background: th.card,
    color: th.text, fontSize: 14, outline: "none",
    fontFamily: "'Source Sans 3', sans-serif",
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
        <div style={{ fontSize: 36, marginBottom: 8 }}>✏️</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, marginBottom: 6 }}>{t.title}</h1>
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

      {/* Canvas Preview */}
      <div style={{
        background: th.card, borderRadius: 16, padding: 16, marginBottom: 20,
        border: `1px solid ${th.border}`,
      }}>
        <canvas ref={canvasRef} width={400} height={280} style={{
          width: "100%", height: "auto", borderRadius: 12,
          background: dark ? "#0f0f16" : "#eeeef0",
        }} />
      </div>

      {/* Text Input */}
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>{t.textLabel}</label>
        <input
          type="text" maxLength={30} value={text}
          onChange={e => setText(e.target.value)}
          placeholder={t.textPlaceholder}
          style={inputStyle}
        />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
          <span style={{ fontSize: 11, color: th.dim }}>{text.length}/30 {t.charCount}</span>
          <span style={{ fontSize: 11, color: th.dim }}>{t.maxChars}</span>
        </div>
      </div>

      {/* Surface */}
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>{t.surfaceLabel}</label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
          {Object.entries(t.surfaces).map(([key, label]) => (
            <button key={key} onClick={() => setSurface(key)} style={{
              padding: "10px 12px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer",
              border: `1.5px solid ${surface === key ? th.gold : th.border}`,
              background: surface === key ? th.gold + "12" : "transparent",
              color: surface === key ? th.gold : th.muted,
            }}>{label}</button>
          ))}
        </div>
      </div>

      {/* Font Style */}
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>{t.fontLabel}</label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
          {Object.entries(t.fonts).map(([key, label]) => (
            <button key={key} onClick={() => setFontStyle(key)} style={{
              padding: "10px 12px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer",
              fontFamily: FONT_MAP[key],
              border: `1.5px solid ${fontStyle === key ? th.accent : th.border}`,
              background: fontStyle === key ? th.accent + "12" : "transparent",
              color: fontStyle === key ? th.accent : th.muted,
            }}>{label}</button>
          ))}
        </div>
      </div>

      {/* Size Slider */}
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>{t.sizeLabel}: {fontSize}px</label>
        <input type="range" min={10} max={32} value={fontSize} onChange={e => setFontSize(+e.target.value)}
          style={{ width: "100%", accentColor: th.accent }} />
      </div>

      {/* Curve Slider (ring only) */}
      {surface === "ring" && (
        <div style={{ marginBottom: 16 }}>
          <label style={labelStyle}>{t.curveLabel}: {curve}%</label>
          <input type="range" min={0} max={100} value={curve} onChange={e => setCurve(+e.target.value)}
            style={{ width: "100%", accentColor: th.gold }} />
        </div>
      )}

      {/* Tip */}
      <div style={{
        padding: 14, borderRadius: 12, background: th.gold + "08", border: `1px solid ${th.gold}18`,
        fontSize: 12, color: th.muted, lineHeight: 1.6, marginBottom: 24,
      }}>💡 {t.tip}</div>

      {/* Sponsor CTA */}
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
