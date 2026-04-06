import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════════════════════
   SilverAtlas — İleri Seviye Quiz v2
   Tool #28 · Faz 7 · 20 questions, categories, leaderboard
   ═══════════════════════════════════════════════════════════ */

const T = {
  tr: { title: "İleri Seviye Gümüş Quizi", subtitle: "20 soru · Kategori bazlı · Zamanlı", start: "Başla", next: "Sonraki", finish: "Bitir",
    score: "Puan", time: "Süre", correct: "Doğru", wrong: "Yanlış", result: "Sonuç", tryAgain: "Tekrar Dene", rank: "Sıralama",
    categories: { kimya: "Kimya", tarih: "Tarih", piyasa: "Piyasa", kultur: "Kültür", uretim: "Üretim" },
    ranks: { master: "Gümüş Ustası", expert: "Uzman", intermediate: "İleri", beginner: "Başlangıç" },
    qOf: "Soru", selectCat: "Kategori Seçin (opsiyonel)", allCats: "Tümü", timeLeft: "sn kaldı",
    sponsor: { badge: "Sponsor", name: "İstanbul Gümüş", text: "Gümüş bilginizi takıya dönüştürün!", cta: "Koleksiyonu Keşfet" },
  },
  en: { title: "Advanced Silver Quiz", subtitle: "20 questions · Category-based · Timed", start: "Start", next: "Next", finish: "Finish",
    score: "Score", time: "Time", correct: "Correct", wrong: "Wrong", result: "Result", tryAgain: "Try Again", rank: "Ranking",
    categories: { kimya: "Chemistry", tarih: "History", piyasa: "Market", kultur: "Culture", uretim: "Manufacturing" },
    ranks: { master: "Silver Master", expert: "Expert", intermediate: "Intermediate", beginner: "Beginner" },
    qOf: "Question", selectCat: "Select Category (optional)", allCats: "All", timeLeft: "sec left",
    sponsor: { badge: "Sponsor", name: "İstanbul Gümüş", text: "Turn your silver knowledge into jewelry!", cta: "Explore Collection" },
  },
  ar: { title: "اختبار الفضة المتقدم", subtitle: "٢٠ سؤال · حسب الفئة · مؤقت", start: "ابدأ", next: "التالي", finish: "إنهاء",
    score: "النتيجة", time: "الوقت", correct: "صحيح", wrong: "خطأ", result: "النتيجة", tryAgain: "أعد المحاولة", rank: "الترتيب",
    categories: { kimya: "الكيمياء", tarih: "التاريخ", piyasa: "السوق", kultur: "الثقافة", uretim: "التصنيع" },
    ranks: { master: "سيد الفضة", expert: "خبير", intermediate: "متوسط", beginner: "مبتدئ" },
    qOf: "سؤال", selectCat: "اختر الفئة (اختياري)", allCats: "الكل", timeLeft: "ثانية متبقية",
    sponsor: { badge: "الراعي", name: "إسطنبول غوموش", text: "حوّل معرفتك بالفضة إلى مجوهرات!", cta: "استكشف المجموعة" },
  },
};

const QUESTIONS = [
  { cat: "kimya", q: { tr: "Gümüşün atom numarası kaçtır?", en: "What is silver's atomic number?", ar: "ما هو العدد الذري للفضة؟" },
    opts: { tr: ["47", "29", "79", "78"], en: ["47", "29", "79", "78"], ar: ["٤٧", "٢٩", "٧٩", "٧٨"] }, ans: 0 },
  { cat: "kimya", q: { tr: "Gümüşün kimyasal sembolü nedir?", en: "What is silver's chemical symbol?", ar: "ما هو الرمز الكيميائي للفضة؟" },
    opts: { tr: ["Ag", "Au", "Si", "Sr"], en: ["Ag", "Au", "Si", "Sr"], ar: ["Ag", "Au", "Si", "Sr"] }, ans: 0 },
  { cat: "kimya", q: { tr: "925 ayar gümüşte bakır oranı nedir?", en: "What is the copper ratio in 925 silver?", ar: "ما نسبة النحاس في فضة ٩٢٥؟" },
    opts: { tr: ["%7.5", "%5", "%10", "%2.5"], en: ["7.5%", "5%", "10%", "2.5%"], ar: ["٧.٥٪", "٥٪", "١٠٪", "٢.٥٪"] }, ans: 0 },
  { cat: "kimya", q: { tr: "Gümüş kararmasına neden olan madde nedir?", en: "What substance causes silver tarnish?", ar: "ما المادة المسببة لتشوه الفضة؟" },
    opts: { tr: ["Kükürt bileşikleri", "Oksijen", "Karbon dioksit", "Azot"], en: ["Sulfur compounds", "Oxygen", "Carbon dioxide", "Nitrogen"], ar: ["مركبات الكبريت", "الأكسجين", "ثاني أكسيد الكربون", "النيتروجين"] }, ans: 0 },
  { cat: "tarih", q: { tr: "Gümüş ilk nerede işlenmiştir?", en: "Where was silver first processed?", ar: "أين تمت معالجة الفضة لأول مرة؟" },
    opts: { tr: ["Anadolu", "Mısır", "Çin", "Hindistan"], en: ["Anatolia", "Egypt", "China", "India"], ar: ["الأناضول", "مصر", "الصين", "الهند"] }, ans: 0 },
  { cat: "tarih", q: { tr: "Osmanlı'da temel gümüş para birimi neydi?", en: "What was the basic Ottoman silver coin?", ar: "ما هي العملة الفضية الأساسية العثمانية؟" },
    opts: { tr: ["Akçe", "Kuruş", "Altın", "Dirhem"], en: ["Akçe", "Kuruş", "Gold coin", "Dirham"], ar: ["آقچه", "قرش", "عملة ذهبية", "درهم"] }, ans: 0 },
  { cat: "tarih", q: { tr: "Potosí gümüş dağı hangi ülkededir?", en: "In which country is Potosí silver mountain?", ar: "في أي بلد يقع جبل بوتوسي الفضي؟" },
    opts: { tr: ["Bolivya", "Peru", "Meksika", "Şili"], en: ["Bolivia", "Peru", "Mexico", "Chile"], ar: ["بوليفيا", "بيرو", "المكسيك", "تشيلي"] }, ans: 0 },
  { cat: "tarih", q: { tr: "Mokume-gane tekniği hangi ülkeye aittir?", en: "Which country does mokume-gane belong to?", ar: "أي بلد ينتمي إليه موكومي-غاني؟" },
    opts: { tr: ["Japonya", "Çin", "Kore", "Hindistan"], en: ["Japan", "China", "Korea", "India"], ar: ["اليابان", "الصين", "كوريا", "الهند"] }, ans: 0 },
  { cat: "piyasa", q: { tr: "Troy ons kaç gramdır?", en: "How many grams is a troy ounce?", ar: "كم غرامًا في الأونصة؟" },
    opts: { tr: ["31.1", "28.3", "30.0", "32.5"], en: ["31.1", "28.3", "30.0", "32.5"], ar: ["٣١.١", "٢٨.٣", "٣٠.٠", "٣٢.٥"] }, ans: 0 },
  { cat: "piyasa", q: { tr: "COMEX borsası nerededir?", en: "Where is the COMEX exchange?", ar: "أين تقع بورصة كومكس؟" },
    opts: { tr: ["New York", "Londra", "Şanghay", "Tokyo"], en: ["New York", "London", "Shanghai", "Tokyo"], ar: ["نيويورك", "لندن", "شانغهاي", "طوكيو"] }, ans: 0 },
  { cat: "piyasa", q: { tr: "Dünyanın en büyük gümüş üreticisi ülke hangisidir?", en: "Which is the world's largest silver producer?", ar: "ما هو أكبر منتج للفضة في العالم؟" },
    opts: { tr: ["Meksika", "Peru", "Çin", "Rusya"], en: ["Mexico", "Peru", "China", "Russia"], ar: ["المكسيك", "بيرو", "الصين", "روسيا"] }, ans: 0 },
  { cat: "piyasa", q: { tr: "Hunt kardeşler hangi yılda gümüşü manipüle etti?", en: "In what year did Hunt brothers manipulate silver?", ar: "في أي عام تلاعب الأخوان هانت بالفضة؟" },
    opts: { tr: ["1980", "1970", "1990", "1985"], en: ["1980", "1970", "1990", "1985"], ar: ["١٩٨٠", "١٩٧٠", "١٩٩٠", "١٩٨٥"] }, ans: 0 },
  { cat: "kultur", q: { tr: "İslam'da gümüş yüzük takmak hangi el için sünnettir?", en: "In Islam, wearing a silver ring is sunnah on which hand?", ar: "في الإسلام، ارتداء خاتم الفضة سنة في أي يد؟" },
    opts: { tr: ["Sağ el", "Sol el", "Her iki el", "Farksız"], en: ["Right hand", "Left hand", "Both", "No preference"], ar: ["اليد اليمنى", "اليد اليسرى", "كلتاهما", "لا فرق"] }, ans: 0 },
  { cat: "kultur", q: { tr: "Gümüş hangi gök cismi ile ilişkilendirilir?", en: "Which celestial body is associated with silver?", ar: "أي جرم سماوي يرتبط بالفضة؟" },
    opts: { tr: ["Ay", "Güneş", "Venüs", "Merkür"], en: ["Moon", "Sun", "Venus", "Mercury"], ar: ["القمر", "الشمس", "الزهرة", "عطارد"] }, ans: 0 },
  { cat: "kultur", q: { tr: "Claddagh yüzüğü hangi ülkenin geleneğidir?", en: "The Claddagh ring is a tradition from which country?", ar: "خاتم كلاداغ تقليد أي بلد؟" },
    opts: { tr: ["İrlanda", "İskoçya", "İngiltere", "Galler"], en: ["Ireland", "Scotland", "England", "Wales"], ar: ["أيرلندا", "اسكتلندا", "إنجلترا", "ويلز"] }, ans: 0 },
  { cat: "kultur", q: { tr: "Gümüş zekât nisabı kaç gramdır?", en: "What is the silver zakat nisab in grams?", ar: "ما هو نصاب زكاة الفضة بالغرام؟" },
    opts: { tr: ["595 gram", "85 gram", "200 gram", "1000 gram"], en: ["595 grams", "85 grams", "200 grams", "1000 grams"], ar: ["٥٩٥ غرام", "٨٥ غرام", "٢٠٠ غرام", "١٠٠٠ غرام"] }, ans: 0 },
  { cat: "uretim", q: { tr: "Kuyumculukta lehimleme sıcaklığı yaklaşık kaç °C'dir?", en: "What is the approximate soldering temperature in jewelry?", ar: "ما درجة حرارة اللحام التقريبية في المجوهرات؟" },
    opts: { tr: ["600-750°C", "100-200°C", "1000-1200°C", "300-400°C"], en: ["600-750°C", "100-200°C", "1000-1200°C", "300-400°C"], ar: ["٦٠٠-٧٥٠°", "١٠٠-٢٠٠°", "١٠٠٠-١٢٠٠°", "٣٠٠-٤٠٠°"] }, ans: 0 },
  { cat: "uretim", q: { tr: "Gümüşün eritme noktası kaç °C'dir?", en: "What is silver's melting point in °C?", ar: "ما هي درجة انصهار الفضة؟" },
    opts: { tr: ["961°C", "1064°C", "660°C", "1538°C"], en: ["961°C", "1064°C", "660°C", "1538°C"], ar: ["٩٦١°", "١٠٦٤°", "٦٦٠°", "١٥٣٨°"] }, ans: 0 },
  { cat: "uretim", q: { tr: "Telkâri sanatı ile ünlü Türk şehri hangisidir?", en: "Which Turkish city is famous for filigree?", ar: "أي مدينة تركية مشهورة بالتخريم؟" },
    opts: { tr: ["Mardin", "İstanbul", "Ankara", "İzmir"], en: ["Mardin", "Istanbul", "Ankara", "Izmir"], ar: ["ماردين", "إسطنبول", "أنقرة", "إزمير"] }, ans: 0 },
  { cat: "uretim", q: { tr: "Elektroliz ile elde edilen gümüş saflığı nedir?", en: "What purity is achieved by electrolysis?", ar: "ما مستوى النقاء بالتحليل الكهربائي؟" },
    opts: { tr: ["%99.99", "%99.0", "%95.0", "%92.5"], en: ["99.99%", "99.0%", "95.0%", "92.5%"], ar: ["٩٩.٩٩٪", "٩٩.٠٪", "٩٥.٠٪", "٩٢.٥٪"] }, ans: 0 },
];

const THEME = {
  dark: { bg: "#0b0b10", card: "#141419", text: "#f0f0f0", muted: "#8a8a9a", dim: "#555566", border: "rgba(255,255,255,0.06)", accent: "#C0C0C0", gold: "#D4AF37", success: "#34d399", error: "#f87171" },
  light: { bg: "#f8f7f2", card: "#ffffff", text: "#1a1a2e", muted: "#6b6b7b", dim: "#9a9aaa", border: "rgba(0,0,0,0.06)", accent: "#708090", gold: "#C49B1C", success: "#059669", error: "#dc2626" },
};

const CAT_COLORS = { kimya: "#3b82f6", tarih: "#f59e0b", piyasa: "#D4AF37", kultur: "#8b5cf6", uretim: "#C0C0C0" };

export default function QuizV2() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [phase, setPhase] = useState("start"); // start | playing | result
  const [filterCat, setFilterCat] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(30);

  const isRTL = lang === "ar";
  const th = dark ? THEME.dark : THEME.light;
  const t = T[lang];

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Source+Sans+3:wght@400;600;700&family=JetBrains+Mono:wght@400;600&family=Noto+Naskh+Arabic:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    if (phase !== "playing" || selected !== null) return;
    if (timer <= 0) { handleAnswer(-1); return; }
    const id = setTimeout(() => setTimer(t => t - 1), 1000);
    return () => clearTimeout(id);
  }, [phase, timer, selected]);

  const startQuiz = () => {
    const pool = filterCat ? QUESTIONS.filter(q => q.cat === filterCat) : [...QUESTIONS];
    const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 20);
    setQuestions(shuffled);
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setTimer(30);
    setPhase("playing");
  };

  const handleAnswer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    const isCorrect = idx === questions[current].ans;
    setAnswers(prev => [...prev, { idx, correct: isCorrect, time: 30 - timer }]);
  };

  const nextQ = () => {
    if (current + 1 >= questions.length) {
      setPhase("result");
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setTimer(30);
    }
  };

  const correctCount = answers.filter(a => a.correct).length;
  const wrongCount = answers.filter(a => !a.correct).length;
  const scorePercent = questions.length > 0 ? (correctCount / questions.length * 100) : 0;
  const rank = scorePercent >= 90 ? "master" : scorePercent >= 70 ? "expert" : scorePercent >= 50 ? "intermediate" : "beginner";
  const totalTime = answers.reduce((s, a) => s + a.time, 0);

  const btnStyle = (active, color) => ({
    padding: "12px 16px", borderRadius: 12, border: `1.5px solid ${active ? color : th.border}`,
    background: active ? color + "15" : "transparent", color: active ? color : th.muted,
    fontSize: 13, fontWeight: 600, cursor: "pointer", textAlign: isRTL ? "right" : "left", transition: "all 0.2s",
  });

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{
      fontFamily: isRTL ? "'Noto Naskh Arabic', serif" : "'Source Sans 3', sans-serif",
      background: th.bg, color: th.text, minHeight: "100vh", maxWidth: 480, margin: "0 auto", padding: "24px 20px 40px",
    }}>
      <style>{`*{box-sizing:border-box;margin:0;padding:0} @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}} @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}`}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24, animation: "fadeIn 0.3s ease" }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>🏆</div>
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

      {/* Start Screen */}
      {phase === "start" && (
        <div style={{ animation: "fadeIn 0.3s ease" }}>
          <p style={{ fontSize: 13, color: th.muted, marginBottom: 16 }}>{t.selectCat}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginBottom: 24 }}>
            <button onClick={() => setFilterCat(null)} style={btnStyle(!filterCat, th.gold)}>✦ {t.allCats}</button>
            {Object.entries(t.categories).map(([k, v]) => (
              <button key={k} onClick={() => setFilterCat(k)} style={btnStyle(filterCat === k, CAT_COLORS[k])}>
                {v}
              </button>
            ))}
          </div>
          <button onClick={startQuiz} style={{
            width: "100%", padding: "16px", borderRadius: 14, border: "none",
            background: `linear-gradient(135deg, ${th.accent}, ${th.gold})`,
            color: "#0b0b10", fontSize: 16, fontWeight: 700, cursor: "pointer",
          }}>{t.start} →</button>
        </div>
      )}

      {/* Playing */}
      {phase === "playing" && questions[current] && (
        <div key={current} style={{ animation: "fadeIn 0.3s ease" }}>
          {/* Progress */}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
            <span style={{ fontSize: 12, color: th.muted }}>{t.qOf} {current + 1}/{questions.length}</span>
            <span style={{ fontSize: 12, color: timer <= 10 ? th.error : th.muted, fontFamily: "'JetBrains Mono', monospace" }}>
              ⏱ {timer} {t.timeLeft}
            </span>
          </div>
          <div style={{ height: 4, borderRadius: 2, background: th.border, marginBottom: 20 }}>
            <div style={{ height: "100%", width: `${(current + 1) / questions.length * 100}%`, borderRadius: 2, background: `linear-gradient(90deg, ${th.accent}, ${th.gold})`, transition: "width 0.3s" }} />
          </div>

          {/* Category badge */}
          <div style={{
            display: "inline-block", padding: "4px 12px", borderRadius: 8, marginBottom: 14,
            background: CAT_COLORS[questions[current].cat] + "18", color: CAT_COLORS[questions[current].cat],
            fontSize: 11, fontWeight: 700,
          }}>{t.categories[questions[current].cat]}</div>

          {/* Question */}
          <h2 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.4, marginBottom: 20 }}>
            {questions[current].q[lang]}
          </h2>

          {/* Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
            {questions[current].opts[lang].map((opt, i) => {
              const isAns = questions[current].ans === i;
              const isSelected = selected === i;
              const showResult = selected !== null;
              let borderColor = th.border;
              let bgColor = "transparent";
              if (showResult && isAns) { borderColor = th.success; bgColor = th.success + "15"; }
              else if (showResult && isSelected && !isAns) { borderColor = th.error; bgColor = th.error + "15"; }
              else if (isSelected) { borderColor = th.gold; bgColor = th.gold + "15"; }

              return (
                <button key={i} onClick={() => handleAnswer(i)} disabled={selected !== null} style={{
                  padding: "14px 16px", borderRadius: 12, border: `1.5px solid ${borderColor}`,
                  background: bgColor, color: th.text, fontSize: 14, fontWeight: 500,
                  cursor: selected !== null ? "default" : "pointer", textAlign: isRTL ? "right" : "left",
                  transition: "all 0.2s", opacity: showResult && !isAns && !isSelected ? 0.5 : 1,
                }}>
                  <span style={{ marginRight: 10, fontWeight: 700, color: th.dim }}>{String.fromCharCode(65 + i)}.</span>
                  {opt}
                  {showResult && isAns && <span style={{ float: isRTL ? "left" : "right" }}>✓</span>}
                  {showResult && isSelected && !isAns && <span style={{ float: isRTL ? "left" : "right" }}>✗</span>}
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <button onClick={nextQ} style={{
              width: "100%", padding: "14px", borderRadius: 12, border: "none",
              background: `linear-gradient(135deg, ${th.accent}, ${th.gold})`,
              color: "#0b0b10", fontSize: 15, fontWeight: 700, cursor: "pointer",
            }}>{current + 1 >= questions.length ? t.finish : t.next} →</button>
          )}
        </div>
      )}

      {/* Result */}
      {phase === "result" && (
        <div style={{ animation: "fadeIn 0.4s ease", textAlign: "center" }}>
          <div style={{ fontSize: 64, marginBottom: 12, animation: "pulse 1s ease infinite" }}>
            {scorePercent >= 90 ? "🥇" : scorePercent >= 70 ? "🥈" : scorePercent >= 50 ? "🥉" : "📚"}
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, marginBottom: 6 }}>{t.ranks[rank]}</h2>
          <p style={{ fontSize: 14, color: th.muted, marginBottom: 24 }}>{t.rank}</p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 28 }}>
            <div style={{ padding: "14px 20px", borderRadius: 14, background: th.card, border: `1px solid ${th.border}`, textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 800, fontFamily: "'JetBrains Mono', monospace", color: th.gold }}>{Math.round(scorePercent)}%</div>
              <div style={{ fontSize: 11, color: th.muted }}>{t.score}</div>
            </div>
            <div style={{ padding: "14px 20px", borderRadius: 14, background: th.card, border: `1px solid ${th.border}`, textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 800, fontFamily: "'JetBrains Mono', monospace", color: th.success }}>{correctCount}</div>
              <div style={{ fontSize: 11, color: th.muted }}>{t.correct}</div>
            </div>
            <div style={{ padding: "14px 20px", borderRadius: 14, background: th.card, border: `1px solid ${th.border}`, textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 800, fontFamily: "'JetBrains Mono', monospace", color: th.error }}>{wrongCount}</div>
              <div style={{ fontSize: 11, color: th.muted }}>{t.wrong}</div>
            </div>
          </div>

          <div style={{ fontSize: 13, color: th.dim, marginBottom: 24 }}>
            ⏱ {totalTime} sn · {questions.length} {t.qOf.toLowerCase()}
          </div>

          <button onClick={() => { setPhase("start"); setFilterCat(null); }} style={{
            width: "100%", padding: "14px", borderRadius: 14, border: "none",
            background: `linear-gradient(135deg, ${th.accent}, ${th.gold})`,
            color: "#0b0b10", fontSize: 15, fontWeight: 700, cursor: "pointer", marginBottom: 24,
          }}>🔄 {t.tryAgain}</button>

          {/* Sponsor */}
          <div style={{
            padding: 20, borderRadius: 16,
            background: `linear-gradient(135deg, ${th.gold}08, ${th.gold}04)`,
            border: `1px solid ${th.gold}18`,
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
      )}
    </div>
  );
}
