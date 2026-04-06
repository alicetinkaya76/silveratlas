import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════════════════════
   SilverAtlas — Sertifika Doğrulayıcı / Certificate Verifier
   Tool #32 · Faz 7 · Silver certificate & stamp verification
   ═══════════════════════════════════════════════════════════ */

const T = {
  tr: {
    title: "Gümüş Sertifika Doğrulayıcı", subtitle: "Sertifika ve damga güvenilirliğini kontrol edin",
    step1: "Sertifika Türü", step2: "Kontrol Noktaları", step3: "Sonuç",
    certTypes: [
      { id: "hallmark", icon: "🏷️", name: "Ayar Damgası", desc: "Resmi darphane ayar damgası" },
      { id: "assay", icon: "⚗️", name: "Assay Sertifikası", desc: "Laboratuvar analiz raporu" },
      { id: "origin", icon: "📜", name: "Menşe Belgesi", desc: "Üretim yeri ve tarih belgesi" },
      { id: "appraisal", icon: "💎", name: "Değerleme Raporu", desc: "Profesyonel değerleme belgesi" },
      { id: "ethical", icon: "🌿", name: "Etik Sertifika", desc: "Fairmined / sorumlu kaynak" },
      { id: "antique", icon: "🏺", name: "Antikacı Belgesi", desc: "Dönem ve orijinallik belgesi" },
    ],
    checks: {
      hallmark: [
        { id: "maker", text: "Üretici damgası (maker's mark) mevcut mu?", critical: true },
        { id: "purity", text: "Ayar damgası (fineness mark) okunaklı mı?", critical: true },
        { id: "office", text: "Denetim ofisi damgası var mı?", critical: true },
        { id: "date", text: "Tarih harfi/simgesi mevcut mu?", critical: false },
        { id: "position", text: "Damgalar standart konumda mı?", critical: false },
        { id: "depth", text: "Damga derinliği ve netliği uygun mu?", critical: false },
      ],
      assay: [
        { id: "lab", text: "Akredite laboratuvar logosu var mı?", critical: true },
        { id: "number", text: "Sertifika numarası benzersiz mi?", critical: true },
        { id: "purity", text: "Saflık yüzdesi açıkça belirtilmiş mi?", critical: true },
        { id: "method", text: "Test yöntemi (XRF, fire assay vb.) belirtilmiş mi?", critical: false },
        { id: "date", text: "Test tarihi güncel mi?", critical: false },
        { id: "sign", text: "Yetkili imza/mühür mevcut mu?", critical: true },
      ],
      origin: [
        { id: "producer", text: "Üretici firma bilgileri doğrulanabilir mi?", critical: true },
        { id: "location", text: "Üretim yeri açıkça belirtilmiş mi?", critical: true },
        { id: "batch", text: "Parti/seri numarası var mı?", critical: false },
        { id: "date", text: "Üretim tarihi mantıklı mı?", critical: false },
        { id: "qr", text: "QR kod veya doğrulama linki var mı?", critical: false },
      ],
      appraisal: [
        { id: "appraiser", text: "Değerleme uzmanı kimlik bilgisi var mı?", critical: true },
        { id: "license", text: "Uzman lisans/yetki belgesi referansı var mı?", critical: true },
        { id: "photos", text: "Detaylı fotoğraflar eklenmiş mi?", critical: false },
        { id: "weight", text: "Ağırlık ve boyutlar belirtilmiş mi?", critical: true },
        { id: "value", text: "Değerleme tutarı ve para birimi açık mı?", critical: true },
        { id: "date", text: "Değerleme tarihi 12 aydan eski değil mi?", critical: false },
      ],
      ethical: [
        { id: "standard", text: "Hangi standarda uygun? (Fairmined, RJC vb.)", critical: true },
        { id: "chain", text: "Tedarik zinciri izlenebilir mi?", critical: true },
        { id: "audit", text: "Bağımsız denetim raporu referansı var mı?", critical: false },
        { id: "number", text: "Sertifika numarası online doğrulanabilir mi?", critical: true },
      ],
      antique: [
        { id: "period", text: "Dönem/çağ tespiti yapılmış mı?", critical: true },
        { id: "expert", text: "Uzman/antikacı bilgileri doğrulanabilir mi?", critical: true },
        { id: "provenance", text: "Geçmiş sahiplik bilgisi (provenance) var mı?", critical: false },
        { id: "photos", text: "Detaylı fotoğraf ve ölçüler mevcut mu?", critical: false },
        { id: "comparison", text: "Benzer dönem eserleriyle karşılaştırma yapılmış mı?", critical: false },
      ],
    },
    pass: "Geçerli Görünüyor", fail: "Dikkat Gerekli", partial: "Kısmen Geçerli",
    passDesc: "Tüm kritik kontrol noktaları karşılanıyor.",
    failDesc: "Kritik kontrol noktaları eksik — profesyonel doğrulama önerilir.",
    partialDesc: "Bazı noktalar eksik, ancak temel kriterler karşılanıyor.",
    critical: "Kritik", optional: "Opsiyonel", reset: "Yeniden Başla",
    warning: "Bu araç bilgi amaçlıdır. Kesin doğrulama için profesyonel değerlendirme gereklidir.",
    sponsor: { badge: "Sponsor", name: "İstanbul Gümüş", text: "Sertifikalı, 925 ayar garantili gümüş koleksiyon.", cta: "Sertifikalı Ürünler" },
  },
  en: {
    title: "Silver Certificate Verifier", subtitle: "Check the reliability of certificates and stamps",
    step1: "Certificate Type", step2: "Checkpoints", step3: "Result",
    certTypes: [
      { id: "hallmark", icon: "🏷️", name: "Hallmark", desc: "Official assay office hallmark" },
      { id: "assay", icon: "⚗️", name: "Assay Certificate", desc: "Laboratory analysis report" },
      { id: "origin", icon: "📜", name: "Certificate of Origin", desc: "Production place and date" },
      { id: "appraisal", icon: "💎", name: "Appraisal Report", desc: "Professional valuation" },
      { id: "ethical", icon: "🌿", name: "Ethical Certificate", desc: "Fairmined / responsible source" },
      { id: "antique", icon: "🏺", name: "Antique Certificate", desc: "Period and authenticity" },
    ],
    checks: {
      hallmark: [
        { id: "maker", text: "Is the maker's mark present?", critical: true },
        { id: "purity", text: "Is the fineness mark legible?", critical: true },
        { id: "office", text: "Is there an assay office mark?", critical: true },
        { id: "date", text: "Is there a date letter/symbol?", critical: false },
        { id: "position", text: "Are marks in standard position?", critical: false },
        { id: "depth", text: "Is mark depth and clarity adequate?", critical: false },
      ],
      assay: [
        { id: "lab", text: "Is there an accredited lab logo?", critical: true },
        { id: "number", text: "Is the certificate number unique?", critical: true },
        { id: "purity", text: "Is purity percentage clearly stated?", critical: true },
        { id: "method", text: "Is the test method specified?", critical: false },
        { id: "date", text: "Is the test date current?", critical: false },
        { id: "sign", text: "Is there an authorized signature/seal?", critical: true },
      ],
      origin: [
        { id: "producer", text: "Can the producer be verified?", critical: true },
        { id: "location", text: "Is production location stated?", critical: true },
        { id: "batch", text: "Is there a batch/serial number?", critical: false },
        { id: "date", text: "Is production date reasonable?", critical: false },
        { id: "qr", text: "Is there a QR code or verification link?", critical: false },
      ],
      appraisal: [
        { id: "appraiser", text: "Is the appraiser identified?", critical: true },
        { id: "license", text: "Is there a license reference?", critical: true },
        { id: "photos", text: "Are detailed photos included?", critical: false },
        { id: "weight", text: "Are weight and dimensions stated?", critical: true },
        { id: "value", text: "Is the valuation amount clear?", critical: true },
        { id: "date", text: "Is the appraisal less than 12 months old?", critical: false },
      ],
      ethical: [
        { id: "standard", text: "Which standard? (Fairmined, RJC, etc.)", critical: true },
        { id: "chain", text: "Is the supply chain traceable?", critical: true },
        { id: "audit", text: "Is there an independent audit reference?", critical: false },
        { id: "number", text: "Can certificate number be verified online?", critical: true },
      ],
      antique: [
        { id: "period", text: "Has the period/era been determined?", critical: true },
        { id: "expert", text: "Can the expert be verified?", critical: true },
        { id: "provenance", text: "Is there provenance information?", critical: false },
        { id: "photos", text: "Are detailed photos and measurements present?", critical: false },
        { id: "comparison", text: "Is comparison with similar period pieces done?", critical: false },
      ],
    },
    pass: "Appears Valid", fail: "Attention Required", partial: "Partially Valid",
    passDesc: "All critical checkpoints are met.",
    failDesc: "Critical checkpoints are missing — professional verification recommended.",
    partialDesc: "Some points are missing, but basic criteria are met.",
    critical: "Critical", optional: "Optional", reset: "Start Over",
    warning: "This tool is for informational purposes. Professional verification is required for definitive authentication.",
    sponsor: { badge: "Sponsor", name: "İstanbul Gümüş", text: "Certified, 925 guaranteed silver collection.", cta: "Certified Products" },
  },
  ar: {
    title: "التحقق من شهادة الفضة", subtitle: "تحقق من موثوقية الشهادات والأختام",
    step1: "نوع الشهادة", step2: "نقاط التحقق", step3: "النتيجة",
    certTypes: [
      { id: "hallmark", icon: "🏷️", name: "ختم العيار", desc: "ختم مكتب الفحص الرسمي" },
      { id: "assay", icon: "⚗️", name: "شهادة الفحص", desc: "تقرير تحليل المختبر" },
      { id: "origin", icon: "📜", name: "شهادة المنشأ", desc: "مكان وتاريخ الإنتاج" },
      { id: "appraisal", icon: "💎", name: "تقرير التقييم", desc: "تقييم مهني" },
      { id: "ethical", icon: "🌿", name: "شهادة أخلاقية", desc: "مصدر مسؤول" },
      { id: "antique", icon: "🏺", name: "شهادة أثرية", desc: "الفترة والأصالة" },
    ],
    checks: {
      hallmark: [
        { id: "maker", text: "هل علامة الصانع موجودة؟", critical: true },
        { id: "purity", text: "هل ختم العيار مقروء؟", critical: true },
        { id: "office", text: "هل يوجد ختم مكتب الفحص؟", critical: true },
        { id: "date", text: "هل يوجد حرف/رمز التاريخ؟", critical: false },
        { id: "position", text: "هل العلامات في الموقع القياسي؟", critical: false },
        { id: "depth", text: "هل عمق ووضوح العلامة مناسب؟", critical: false },
      ],
      assay: [
        { id: "lab", text: "هل يوجد شعار مختبر معتمد؟", critical: true },
        { id: "number", text: "هل رقم الشهادة فريد؟", critical: true },
        { id: "purity", text: "هل نسبة النقاء مذكورة بوضوح؟", critical: true },
        { id: "method", text: "هل طريقة الاختبار محددة؟", critical: false },
        { id: "date", text: "هل تاريخ الاختبار حديث؟", critical: false },
        { id: "sign", text: "هل يوجد توقيع/ختم مفوض؟", critical: true },
      ],
      origin: [
        { id: "producer", text: "هل يمكن التحقق من المنتج؟", critical: true },
        { id: "location", text: "هل مكان الإنتاج مذكور؟", critical: true },
        { id: "batch", text: "هل يوجد رقم دفعة/تسلسل؟", critical: false },
        { id: "date", text: "هل تاريخ الإنتاج معقول؟", critical: false },
        { id: "qr", text: "هل يوجد رمز QR أو رابط تحقق؟", critical: false },
      ],
      appraisal: [
        { id: "appraiser", text: "هل المقيّم معرّف؟", critical: true },
        { id: "license", text: "هل يوجد مرجع ترخيص؟", critical: true },
        { id: "photos", text: "هل الصور التفصيلية مرفقة؟", critical: false },
        { id: "weight", text: "هل الوزن والأبعاد مذكورة؟", critical: true },
        { id: "value", text: "هل مبلغ التقييم واضح؟", critical: true },
        { id: "date", text: "هل التقييم أقل من ١٢ شهرًا؟", critical: false },
      ],
      ethical: [
        { id: "standard", text: "أي معيار؟ (Fairmined, RJC, إلخ)", critical: true },
        { id: "chain", text: "هل سلسلة التوريد قابلة للتتبع؟", critical: true },
        { id: "audit", text: "هل يوجد مرجع تدقيق مستقل؟", critical: false },
        { id: "number", text: "هل يمكن التحقق من الرقم عبر الإنترنت؟", critical: true },
      ],
      antique: [
        { id: "period", text: "هل تم تحديد الفترة/العصر؟", critical: true },
        { id: "expert", text: "هل يمكن التحقق من الخبير؟", critical: true },
        { id: "provenance", text: "هل توجد معلومات الملكية السابقة؟", critical: false },
        { id: "photos", text: "هل الصور والقياسات التفصيلية موجودة؟", critical: false },
        { id: "comparison", text: "هل تمت المقارنة مع قطع مماثلة؟", critical: false },
      ],
    },
    pass: "يبدو صالحًا", fail: "يتطلب الانتباه", partial: "صالح جزئيًا",
    passDesc: "جميع نقاط التحقق الحرجة مستوفاة.",
    failDesc: "نقاط تحقق حرجة مفقودة — يُنصح بالتحقق المهني.",
    partialDesc: "بعض النقاط مفقودة لكن المعايير الأساسية مستوفاة.",
    critical: "حرج", optional: "اختياري", reset: "ابدأ من جديد",
    warning: "هذه الأداة لأغراض إعلامية. التحقق المهني مطلوب للمصادقة النهائية.",
    sponsor: { badge: "الراعي", name: "إسطنبول غوموش", text: "مجموعة فضة معتمدة بضمان ٩٢٥.", cta: "المنتجات المعتمدة" },
  },
};

const TH = {
  dark: { bg: "#0b0b10", card: "#141419", text: "#f0f0f0", muted: "#8a8a9a", dim: "#555566", border: "rgba(255,255,255,0.06)", accent: "#C0C0C0", gold: "#D4AF37", success: "#34d399", error: "#f87171", warning: "#fbbf24" },
  light: { bg: "#f8f7f2", card: "#ffffff", text: "#1a1a2e", muted: "#6b6b7b", dim: "#9a9aaa", border: "rgba(0,0,0,0.06)", accent: "#708090", gold: "#C49B1C", success: "#059669", error: "#dc2626", warning: "#d97706" },
};

export default function CertificateVerifier() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [step, setStep] = useState(1);
  const [certType, setCertType] = useState(null);
  const [checked, setChecked] = useState({});

  const isRTL = lang === "ar";
  const th = dark ? TH.dark : TH.light;
  const t = T[lang];

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@400;600;700&family=Noto+Naskh+Arabic:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const toggleCheck = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));

  const getResult = () => {
    if (!certType) return null;
    const checks = t.checks[certType];
    const criticalChecks = checks.filter(c => c.critical);
    const criticalPassed = criticalChecks.filter(c => checked[c.id]).length;
    const totalPassed = checks.filter(c => checked[c.id]).length;

    if (criticalPassed === criticalChecks.length && totalPassed === checks.length) return "pass";
    if (criticalPassed === criticalChecks.length) return "partial";
    return "fail";
  };

  const selectCert = (id) => { setCertType(id); setChecked({}); setStep(2); };
  const reset = () => { setCertType(null); setChecked({}); setStep(1); };

  const result = getResult();
  const resultColor = result === "pass" ? th.success : result === "partial" ? th.warning : th.error;
  const resultIcon = result === "pass" ? "✅" : result === "partial" ? "⚠️" : "❌";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{
      fontFamily: isRTL ? "'Noto Naskh Arabic', serif" : "'Source Sans 3', sans-serif",
      background: th.bg, color: th.text, minHeight: "100vh", maxWidth: 480, margin: "0 auto", padding: "24px 20px 40px",
    }}>
      <style>{`*{box-sizing:border-box;margin:0;padding:0} @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}`}</style>

      <div style={{ textAlign: "center", marginBottom: 24, animation: "fadeIn 0.3s ease" }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>📜</div>
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

      {/* Step indicator */}
      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 24 }}>
        {[1, 2, 3].map(s => (
          <div key={s} style={{
            display: "flex", alignItems: "center", gap: 6,
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              background: step >= s ? th.gold + "20" : th.border, color: step >= s ? th.gold : th.dim,
              fontSize: 12, fontWeight: 700, border: `1.5px solid ${step >= s ? th.gold : th.border}`,
            }}>{s}</div>
            <span style={{ fontSize: 11, color: step >= s ? th.muted : th.dim }}>{t[`step${s}`]}</span>
            {s < 3 && <div style={{ width: 20, height: 1, background: th.border }} />}
          </div>
        ))}
      </div>

      {/* Step 1: Select Certificate Type */}
      {step === 1 && (
        <div style={{ animation: "fadeIn 0.3s ease" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {t.certTypes.map(ct => (
              <button key={ct.id} onClick={() => selectCert(ct.id)} style={{
                padding: "16px 14px", borderRadius: 14, textAlign: "center",
                background: th.card, border: `1px solid ${th.border}`,
                cursor: "pointer", transition: "all 0.2s",
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{ct.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{ct.name}</div>
                <div style={{ fontSize: 11, color: th.dim, lineHeight: 1.4 }}>{ct.desc}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Checkpoints */}
      {step === 2 && certType && (
        <div style={{ animation: "fadeIn 0.3s ease" }}>
          <div style={{ marginBottom: 20 }}>
            {t.checks[certType].map(check => (
              <div key={check.id} onClick={() => toggleCheck(check.id)} style={{
                display: "flex", alignItems: "center", gap: 12, padding: "14px 16px",
                borderRadius: 12, marginBottom: 8, cursor: "pointer",
                background: checked[check.id] ? th.success + "08" : th.card,
                border: `1px solid ${checked[check.id] ? th.success + "33" : th.border}`,
                transition: "all 0.2s",
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                  border: `2px solid ${checked[check.id] ? th.success : th.border}`,
                  background: checked[check.id] ? th.success : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontSize: 12, fontWeight: 700, transition: "all 0.2s",
                }}>{checked[check.id] && "✓"}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.5 }}>{check.text}</div>
                  <span style={{
                    fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 4, marginTop: 4, display: "inline-block",
                    background: check.critical ? th.error + "15" : th.accent + "15",
                    color: check.critical ? th.error : th.accent,
                  }}>{check.critical ? t.critical : t.optional}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setStep(3)} style={{
              flex: 1, padding: "14px", borderRadius: 12, border: "none",
              background: `linear-gradient(135deg, ${th.accent}, ${th.gold})`,
              color: "#0b0b10", fontSize: 15, fontWeight: 700, cursor: "pointer",
            }}>{t.step3} →</button>
            <button onClick={reset} style={{
              padding: "14px 20px", borderRadius: 12, border: `1px solid ${th.border}`,
              background: "transparent", color: th.muted, fontSize: 14, cursor: "pointer",
            }}>↺</button>
          </div>
        </div>
      )}

      {/* Step 3: Result */}
      {step === 3 && (
        <div style={{ animation: "fadeIn 0.4s ease", textAlign: "center" }}>
          <div style={{ fontSize: 64, marginBottom: 12 }}>{resultIcon}</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: resultColor, marginBottom: 8 }}>
            {t[result]}
          </h2>
          <p style={{ fontSize: 13, color: th.muted, lineHeight: 1.6, marginBottom: 24, maxWidth: 340, margin: "0 auto 24px" }}>
            {t[result + "Desc"]}
          </p>

          <div style={{
            padding: 14, borderRadius: 12, background: th.gold + "08", border: `1px solid ${th.gold}12`,
            fontSize: 11, color: th.dim, lineHeight: 1.6, marginBottom: 24,
          }}>⚠️ {t.warning}</div>

          <button onClick={reset} style={{
            width: "100%", padding: "14px", borderRadius: 12, border: "none",
            background: `linear-gradient(135deg, ${th.accent}, ${th.gold})`,
            color: "#0b0b10", fontSize: 15, fontWeight: 700, cursor: "pointer", marginBottom: 24,
          }}>🔄 {t.reset}</button>

          {/* Sponsor */}
          <div style={{
            padding: 20, borderRadius: 16, background: `linear-gradient(135deg, ${th.gold}08, ${th.gold}04)`,
            border: `1px solid ${th.gold}18`,
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
      )}
    </div>
  );
}
