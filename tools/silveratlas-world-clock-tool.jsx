import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════════════════════
   SilverAtlas — Dünya Saati + Piyasa Durumu / World Clock
   Tool #30 · Faz 7 · Exchange hours and market status
   ═══════════════════════════════════════════════════════════ */

const T = {
  tr: { title: "Dünya Saati + Piyasa Durumu", subtitle: "Gümüş borsalarının canlı durumu", open: "AÇIK", closed: "KAPALI", premarket: "ÖN-PİYASA",
    localTime: "Yerel Saat", tradingHours: "İşlem Saatleri", nextOpen: "Açılışa", nextClose: "Kapanışa",
    sponsor: { badge: "Sponsor", name: "İstanbul Gümüş", text: "Piyasa takibi ile doğru zamanda alışveriş.", cta: "Alışverişe Başla" } },
  en: { title: "World Clock + Market Status", subtitle: "Live status of silver exchanges", open: "OPEN", closed: "CLOSED", premarket: "PRE-MARKET",
    localTime: "Local Time", tradingHours: "Trading Hours", nextOpen: "Until Open", nextClose: "Until Close",
    sponsor: { badge: "Sponsor", name: "İstanbul Gümüş", text: "Shop at the right time with market tracking.", cta: "Start Shopping" } },
  ar: { title: "الساعة العالمية + حالة السوق", subtitle: "الحالة المباشرة لبورصات الفضة", open: "مفتوح", closed: "مغلق", premarket: "ما قبل السوق",
    localTime: "التوقيت المحلي", tradingHours: "ساعات التداول", nextOpen: "حتى الافتتاح", nextClose: "حتى الإغلاق",
    sponsor: { badge: "الراعي", name: "إسطنبول غوموش", text: "تسوّق في الوقت المناسب مع تتبع السوق.", cta: "ابدأ التسوق" } },
};

const EXCHANGES = [
  { id: "comex", name: "COMEX", city: { tr: "New York", en: "New York", ar: "نيويورك" }, tz: "America/New_York", openH: 8, openM: 20, closeH: 13, closeM: 30, flag: "🇺🇸", color: "#3b82f6" },
  { id: "lbma", name: "LBMA", city: { tr: "Londra", en: "London", ar: "لندن" }, tz: "Europe/London", openH: 10, openM: 30, closeH: 15, closeM: 0, flag: "🇬🇧", color: "#8b5cf6" },
  { id: "shfe", name: "SHFE", city: { tr: "Şanghay", en: "Shanghai", ar: "شانغهاي" }, tz: "Asia/Shanghai", openH: 9, openM: 0, closeH: 15, closeM: 0, flag: "🇨🇳", color: "#ef4444" },
  { id: "tocom", name: "TOCOM", city: { tr: "Tokyo", en: "Tokyo", ar: "طوكيو" }, tz: "Asia/Tokyo", openH: 8, openM: 45, closeH: 15, closeM: 15, flag: "🇯🇵", color: "#f59e0b" },
  { id: "mcx", name: "MCX", city: { tr: "Mumbai", en: "Mumbai", ar: "مومباي" }, tz: "Asia/Kolkata", openH: 9, openM: 0, closeH: 23, closeM: 30, flag: "🇮🇳", color: "#10b981" },
  { id: "borsa", name: "Borsa İstanbul", city: { tr: "İstanbul", en: "Istanbul", ar: "إسطنبول" }, tz: "Europe/Istanbul", openH: 10, openM: 0, closeH: 18, closeM: 0, flag: "🇹🇷", color: "#D4AF37" },
];

const THEME = {
  dark: { bg: "#0b0b10", card: "#141419", text: "#f0f0f0", muted: "#8a8a9a", dim: "#555566", border: "rgba(255,255,255,0.06)", accent: "#C0C0C0", gold: "#D4AF37", success: "#34d399", error: "#f87171" },
  light: { bg: "#f8f7f2", card: "#ffffff", text: "#1a1a2e", muted: "#6b6b7b", dim: "#9a9aaa", border: "rgba(0,0,0,0.06)", accent: "#708090", gold: "#C49B1C", success: "#059669", error: "#dc2626" },
};

export default function WorldClock() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [now, setNow] = useState(new Date());

  const isRTL = lang === "ar";
  const th = dark ? THEME.dark : THEME.light;
  const t = T[lang];

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@400;600;700&family=JetBrains+Mono:wght@400;600&family=Noto+Naskh+Arabic:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const getLocalTime = (tz) => {
    try { return new Intl.DateTimeFormat(lang === "ar" ? "ar-SA" : lang === "tr" ? "tr-TR" : "en-US", { timeZone: tz, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(now); }
    catch { return "--:--:--"; }
  };

  const getStatus = (ex) => {
    try {
      const tzTime = new Date(now.toLocaleString("en-US", { timeZone: ex.tz }));
      const h = tzTime.getHours(), m = tzTime.getMinutes();
      const day = tzTime.getDay();
      if (day === 0 || day === 6) return "closed";
      const totalMin = h * 60 + m;
      const openMin = ex.openH * 60 + ex.openM;
      const closeMin = ex.closeH * 60 + ex.closeM;
      if (totalMin >= openMin && totalMin < closeMin) return "open";
      if (totalMin >= openMin - 30 && totalMin < openMin) return "premarket";
      return "closed";
    } catch { return "closed"; }
  };

  const statusColor = (s) => s === "open" ? th.success : s === "premarket" ? "#fbbf24" : th.error;

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{
      fontFamily: isRTL ? "'Noto Naskh Arabic', serif" : "'Source Sans 3', sans-serif",
      background: th.bg, color: th.text, minHeight: "100vh", maxWidth: 480, margin: "0 auto", padding: "24px 20px 40px",
    }}>
      <style>{`*{box-sizing:border-box;margin:0;padding:0} @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}} @keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>

      <div style={{ textAlign: "center", marginBottom: 24, animation: "fadeIn 0.3s ease" }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>🕐</div>
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

      {/* Exchange Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {EXCHANGES.map(ex => {
          const status = getStatus(ex);
          const sColor = statusColor(status);
          return (
            <div key={ex.id} style={{
              padding: "16px 18px", borderRadius: 14, background: th.card,
              border: `1px solid ${status === "open" ? sColor + "33" : th.border}`,
              animation: "fadeIn 0.3s ease",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 22 }}>{ex.flag}</span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: ex.color }}>{ex.name}</div>
                    <div style={{ fontSize: 11, color: th.dim }}>{ex.city[lang]}</div>
                  </div>
                </div>
                <div style={{
                  padding: "4px 10px", borderRadius: 8,
                  background: sColor + "18", color: sColor,
                  fontSize: 10, fontWeight: 800, letterSpacing: "0.04em",
                  display: "flex", alignItems: "center", gap: 5,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: sColor, animation: status === "open" ? "blink 1.5s ease infinite" : "none" }} />
                  {t[status]}
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 10, color: th.dim, marginBottom: 2 }}>{t.localTime}</div>
                  <div style={{ fontSize: 20, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: th.text }}>
                    {getLocalTime(ex.tz)}
                  </div>
                </div>
                <div style={{ textAlign: isRTL ? "left" : "right" }}>
                  <div style={{ fontSize: 10, color: th.dim, marginBottom: 2 }}>{t.tradingHours}</div>
                  <div style={{ fontSize: 13, fontFamily: "'JetBrains Mono', monospace", color: th.muted }}>
                    {String(ex.openH).padStart(2, "0")}:{String(ex.openM).padStart(2, "0")} – {String(ex.closeH).padStart(2, "0")}:{String(ex.closeM).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sponsor */}
      <div style={{
        marginTop: 24, padding: 20, borderRadius: 16,
        background: `linear-gradient(135deg, ${th.gold}08, ${th.gold}04)`,
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
