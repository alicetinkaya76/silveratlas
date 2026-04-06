import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Bilim", "Gümüş ve Fotoğrafçılık"],
    category: "Bilim",
    title: "Gümüş ve Fotoğrafçılık",
    subtitle: "Işığa duyarlı gümüş halojenürler — analog fotoğrafçılığın kimyasal temeli",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "11 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Dijital çağda bir fotoğraf, piksellerin matematiksel dizisidir. Ancak 170 yıl boyunca fotoğrafçılık tamamen gümüşe bağlıydı — gümüş halojenür kristalleri (AgBr, AgCl, AgI), ışığa maruz kaldıklarında kimyasal değişim geçirerek görüntüyü kalıcı hale getiren benzersiz bir özelliğe sahiptir.",
        "Bu makale, gümüşün fotoğrafçılıktaki rolünü, Daguerre'den dijital çağa ve günümüzün analog rönesansına kadar bilimsel ve kültürel boyutlarıyla ele almaktadır.",
      ]},
      { id: "kimya", heading: "Gümüş Halojenür Kimyası", paragraphs: [
        "Fotoğrafın temelinde üç gümüş halojenür bileşiği bulunur: gümüş bromür (AgBr — en yaygın), gümüş klorür (AgCl — kâğıt baskı) ve gümüş iyodür (AgI — yüksek hassasiyet). Bu kristaller ışık fotonlarını absorbe ederek gümüş atomlarına indirgenirler.",
        "Süreç: foton → elektron salınımı → Ag⁺ iyonunun metalik Ag'ye indirgenmesi → 'latent görüntü' (gizil imaj) oluşumu. Bu gizil imajdaki gümüş atomları son derece azdır — birkaç yüz atom — ancak geliştirme (developing) sırasında kimyasal amplifikasyon ile milyarlarca kata büyütülür.",
        "Geliştirme banyosundaki indirgeyici madde (hidroskinon, metol gibi), ışık görmüş kristalleri seçici olarak tam metalik gümüşe dönüştürür. Işık görmeyen kristaller ise sabitleme (fixing) aşamasında sodyum tiyosülfat ile çözülerek uzaklaştırılır.",
      ]},
      { id: "tarih", heading: "Fotoğrafçılığın Gümüş Tarihi", widget: "timeline" },
      { id: "film", heading: "Film Yapısı ve Gümüş Katmanları", paragraphs: [
        "Modern bir siyah-beyaz film, şeffaf selülöz asetat taban üzerine sürülen jelatin-gümüş halojenür emülsiyonundan oluşur. Bu emülsiyon katmanı 5-20 mikrometre kalınlığındadır ve metrekare başına 5-15 gram gümüş içerir.",
        "Renkli filmde üç ayrı emülsiyon katmanı bulunur — kırmızı, yeşil ve mavi ışığa duyarlı. Her katman gümüş halojenür içerir, ancak renkli boya oluşturucular (coupler) rengi sağlar. İlginçtir ki, renkli filmin son görüntüsünde gümüş yoktur — tüm metalik gümüş ağartma (bleach) aşamasında çözülür. Gümüş sadece renk oluşumunun katalizörüdür.",
        "35mm film başına yaklaşık 1-2 gram gümüş kullanılır. Film endüstrisinin altın çağında (1960-1990) dünya gümüş üretiminin %25-30'u fotoğrafçılık sektörüne ayrılmıştır.",
      ]},
      { id: "dijital", heading: "Dijital Geçiş ve Gümüş Talebi", paragraphs: [
        "Dijital fotoğrafçılığın yükselişi (2000-2010), gümüşün en büyük endüstriyel talebini ortadan kaldırmıştır. 1999'da fotoğrafçılık sektörü yılda ~6.000 ton gümüş tüketirken, 2020'de bu rakam ~1.500 tona düşmüştür.",
        "Ancak gümüş, fotoğrafçılıktan tamamen çıkmamıştır: tıbbi röntgen filmlerinde, endüstriyel NDT (tahribatsız test) filmlerinde, havacılık keşif filmlerinde ve sinema filmi prodüksiyonlarında hâlâ kullanılmaktadır.",
        "Ayrıca 2010'ların ortasından itibaren analog fotoğrafçılıkta bir rönesans yaşanmaktadır. Ilford, Kodak ve Fujifilm, artan talebe yanıt olarak film üretimini sürdürmekte veya genişletmektedir.",
      ]},
      { id: "geridonusum", heading: "Gümüş Geri Dönüşümü", paragraphs: [
        "Kullanılmış fotoğrafik materyallerden gümüş geri kazanımı, önemli bir ikincil kaynak oluşturur. Fixer banyosunda çözülen gümüş, elektroliz veya metalik yer değiştirme yöntemiyle geri kazanılır.",
        "Röntgen filmi geri dönüşümü özellikle verimlidir — bir röntgen filmi metrekare başına 30-40 gram gümüş içerir. Hastaneler ve tıbbi görüntüleme merkezleri, fixer çözeltilerini gümüş geri kazanım firmalarına satmaktadır.",
      ]},
      { id: "analog", heading: "Analog Rönesansı", paragraphs: [
        "Dijital mükemmelliğin yaygınlaşmasıyla, analog fotoğrafçılığın 'kusurlu güzelliği' — tane yapısı, organik tonalite, dokunsal deneyim — yeni nesil fotoğrafçılar arasında kült bir takipçi kitlesi edinmiştir.",
        "Film fotoğrafçılığının gümüşle doğrudan, fiziksel ilişkisi, dijitalin soyut dünyasına karşı bir 'hakikat' arayışı olarak yorumlanmaktadır. Her kare gerçek gümüş atomlarının ışıkla etkileşiminin kalıcı kaydıdır — bu onu dijital bir dosyadan ontolojik olarak farklı kılar.",
      ]},
    ],
    timelineData: [
      { year: "1727", event: "Johann Heinrich Schulze, gümüş nitratın ışıkla kararmasını belgeliyor", era: "Öncüler" },
      { year: "1826", event: "Joseph Niépce, dünyada bilinen ilk fotoğrafı çekiyor (8 saat pozlama)", era: "Öncüler" },
      { year: "1839", event: "Louis Daguerre, daguerreotype sürecini tanıtıyor — gümüş kaplı bakır levha", era: "İcat" },
      { year: "1841", event: "William Fox Talbot, calotype (talbotype) ile negatif-pozitif sistemi buluyor", era: "İcat" },
      { year: "1871", event: "Richard Leach Maddox, jelatin-gümüş bromür kuru plakayı geliştiriyor", era: "Gelişme" },
      { year: "1888", event: "George Eastman, Kodak kamerayı piyasaya sürüyor — \"You press the button, we do the rest\"", era: "Popülerleşme" },
      { year: "1935", event: "Kodachrome renkli film tanıtılıyor — gümüş halojenür bazlı 3 katman", era: "Renkli Çağ" },
      { year: "1963", event: "Polaroid, anında baskı ile gümüş halojenür difüzyon transfer sürecini kullanıyor", era: "Renkli Çağ" },
      { year: "1975", event: "Steven Sasson (Kodak), ilk dijital kamerayı icat ediyor — 0.01 megapiksel", era: "Dijital Geçiş" },
      { year: "2004", event: "Dijital kamera satışları film kamera satışlarını geçiyor", era: "Dijital Geçiş" },
      { year: "2015+", event: "Analog fotoğrafçılık rönesansı — film satışları yeniden artışa geçiyor", era: "Rönesans" },
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Renkli filmde gümüş var mı?", a: "Evet, üretim ve geliştirme sürecinde gümüş halojenür kullanılır. Ancak final görüntüde gümüş yoktur — ağartma aşamasında çözülür. Gümüş, renk oluşumunun katalizörüdür." },
        { q: "Neden analog fotoğraf dijitale göre 'farklı' görünür?", a: "Analog fotoğrafın gümüş tane yapısı (grain) rastgele ve organik bir doku yaratır. Dijital sensörler ise düzenli piksel ızgarası kullanır. Ayrıca gümüşün ışık tepkisi (sigmoid eğrisi) doğal olarak film-look tonal eğrisi oluşturur." },
        { q: "Fotoğrafçılık hâlâ gümüş tüketiyor mu?", a: "Evet, ancak çok azalmıştır. 1999'da ~6.000 ton/yıl iken 2020'de ~1.500 ton/yıl. Tıbbi filmler, endüstriyel filmler ve analog hobi en büyük kaynaklar." },
      ],
    },
    sources: { heading: "Kaynaklar", items: ["Ralph Jacobson et al. — \"The Manual of Photography\"", "The Silver Institute — \"World Silver Survey 2025\"", "Beaumont Newhall — \"The History of Photography\"", "Kodak — Technical Publication Z-22: Film Structure"] },
    related: { heading: "İlgili Konular", items: [{ title: "Gümüşün Kimyası", path: "/tr/bilim/kimya", cat: "Bilim" }, { title: "Endüstriyel Kullanımlar", path: "/tr/bilim/endustriyel", cat: "Bilim" }] },
    sponsor: { text: "Gümüşün ışıkla buluştuğu an — analog ve modern arasındaki köprü.", cta: "Instagram'da Gör", note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir." },
    darkMode: "Mod",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Science", "Silver & Photography"],
    category: "Science",
    title: "Silver & Photography",
    subtitle: "Light-sensitive silver halides — the chemical foundation of analog photography",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "11 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["In the digital age, a photograph is a mathematical array of pixels. But for 170 years, photography depended entirely on silver — silver halide crystals (AgBr, AgCl, AgI) possess a unique property of undergoing chemical change when exposed to light, making images permanent.", "This article examines silver's role in photography, from Daguerre to the digital age and today's analog renaissance, in both scientific and cultural dimensions."] },
      { id: "chemistry", heading: "Silver Halide Chemistry", paragraphs: ["Three silver halide compounds form photography's foundation: silver bromide (AgBr — most common), silver chloride (AgCl — print paper), and silver iodide (AgI — high sensitivity). These crystals absorb light photons and reduce to silver atoms.", "The process: photon → electron release → reduction of Ag⁺ ion to metallic Ag → 'latent image' formation. The silver atoms in this latent image are extremely few — several hundred — but are amplified billions of times through chemical development.", "The reducing agent in the developer bath (hydroquinone, metol) selectively converts exposed crystals to full metallic silver. Unexposed crystals are removed during fixing with sodium thiosulfate."] },
      { id: "history", heading: "Silver History of Photography", widget: "timeline" },
      { id: "film", heading: "Film Structure & Silver Layers", paragraphs: ["A modern black-and-white film consists of a gelatin-silver halide emulsion coated on a transparent cellulose acetate base. This emulsion layer is 5-20 micrometers thick and contains 5-15 grams of silver per square meter.", "Color film has three separate emulsion layers sensitive to red, green, and blue light. Each contains silver halide, but color dye couplers provide the color. Remarkably, the final color image contains no silver — it's all dissolved during bleaching. Silver serves only as the catalyst for color formation.", "Approximately 1-2 grams of silver are used per 35mm roll. During photography's golden age (1960-1990), 25-30% of world silver production went to the photography sector."] },
      { id: "digital", heading: "Digital Transition & Silver Demand", paragraphs: ["The rise of digital photography (2000-2010) eliminated silver's largest industrial demand. Photography consumed ~6,000 tons of silver/year in 1999; by 2020, this fell to ~1,500 tons.", "However, silver hasn't entirely left photography: it's still used in medical X-ray films, industrial NDT films, aerial reconnaissance films, and motion picture film productions.", "Since the mid-2010s, an analog photography renaissance has been underway. Ilford, Kodak, and Fujifilm continue or expand film production in response to growing demand."] },
      { id: "recycling", heading: "Silver Recovery", paragraphs: ["Silver recovery from used photographic materials forms an important secondary source. Silver dissolved in fixer baths is recovered through electrolysis or metallic displacement.", "X-ray film recycling is especially efficient — containing 30-40 grams of silver per square meter. Hospitals and imaging centers sell their fixer solutions to silver recovery firms."] },
      { id: "analog", heading: "The Analog Renaissance", paragraphs: ["With digital perfection's ubiquity, analog photography's 'imperfect beauty' — grain structure, organic tonality, tactile experience — has gained a cult following among new-generation photographers.", "Film photography's direct, physical relationship with silver is interpreted as a search for 'truth' against digital's abstract world. Each frame is a permanent record of real silver atoms interacting with light — ontologically different from a digital file."] },
    ],
    timelineData: [
      { year: "1727", event: "Johann Heinrich Schulze documents silver nitrate darkening with light", era: "Pioneers" },
      { year: "1826", event: "Joseph Niépce takes the world's first known photograph (8-hour exposure)", era: "Pioneers" },
      { year: "1839", event: "Louis Daguerre introduces the daguerreotype — silver-coated copper plate", era: "Invention" },
      { year: "1841", event: "William Fox Talbot invents calotype with negative-positive system", era: "Invention" },
      { year: "1871", event: "Richard Maddox develops gelatin-silver bromide dry plate", era: "Development" },
      { year: "1888", event: "George Eastman launches the Kodak camera — \"You press the button\"", era: "Popularization" },
      { year: "1935", event: "Kodachrome color film introduced — 3-layer silver halide based", era: "Color Era" },
      { year: "1963", event: "Polaroid uses silver halide diffusion transfer for instant prints", era: "Color Era" },
      { year: "1975", event: "Steven Sasson (Kodak) invents the first digital camera — 0.01 MP", era: "Digital Shift" },
      { year: "2004", event: "Digital camera sales surpass film camera sales", era: "Digital Shift" },
      { year: "2015+", event: "Analog photography renaissance — film sales rising again", era: "Renaissance" },
    ],
    faq: { heading: "Frequently Asked Questions", items: [{ q: "Does color film contain silver?", a: "Yes, silver halide is used during manufacture and development. But the final image contains no silver — it's dissolved during bleaching. Silver catalyzes color formation." }, { q: "Does photography still consume silver?", a: "Yes, but much less. From ~6,000 tons/year in 1999 to ~1,500 tons/year by 2020. Medical films, industrial films, and analog hobby are the largest remaining uses." }] },
    sources: { heading: "Sources", items: ["Ralph Jacobson et al. — \"The Manual of Photography\"", "The Silver Institute — \"World Silver Survey 2025\"", "Beaumont Newhall — \"The History of Photography\""] },
    related: { heading: "Related Topics", items: [{ title: "Chemistry of Silver", path: "/en/science/chemistry", cat: "Science" }, { title: "Industrial Uses", path: "/en/science/industrial", cat: "Science" }] },
    sponsor: { text: "Where silver meets light — bridging analog and modern.", cta: "See on Instagram", note: "This content is sponsored by Istanbul Silver." },
    darkMode: "Mode",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة معرفة الفضة",
    breadcrumb: ["الرئيسية", "العلوم", "الفضة والتصوير"],
    category: "العلوم",
    title: "الفضة والتصوير الفوتوغرافي",
    subtitle: "هاليدات الفضة الحساسة للضوء — الأساس الكيميائي للتصوير التناظري",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١١ دقيقة قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["في العصر الرقمي الصورة مصفوفة رياضية من البكسلات. لكن لمدة ١٧٠ عاماً اعتمد التصوير كلياً على الفضة — بلورات هاليد الفضة (AgBr, AgCl, AgI) تمتلك خاصية فريدة في التغير الكيميائي عند التعرض للضوء."] },
      { id: "kimiya", heading: "كيمياء هاليد الفضة", paragraphs: ["ثلاثة مركبات هاليد فضة تشكل أساس التصوير: بروميد الفضة (الأكثر شيوعاً)، كلوريد الفضة (ورق الطباعة)، ويوديد الفضة (حساسية عالية).", "العملية: فوتون → إطلاق إلكترون → اختزال أيون Ag⁺ إلى فضة معدنية → تكوين 'صورة كامنة'. ذرات الفضة في هذه الصورة الكامنة قليلة جداً لكنها تُضخم مليارات المرات أثناء التحميض."] },
      { id: "tarikh", heading: "التاريخ الفضي للتصوير", widget: "timeline" },
      { id: "raqami", heading: "التحول الرقمي", paragraphs: ["صعود التصوير الرقمي أزال أكبر طلب صناعي على الفضة. من ~٦٠٠٠ طن/سنة في ١٩٩٩ إلى ~١٥٠٠ طن/سنة في ٢٠٢٠.", "منذ منتصف ٢٠١٠ تشهد التصوير التناظري نهضة. إلفورد وكوداك وفوجي فيلم تواصل إنتاج الأفلام استجابة للطلب المتزايد."] },
    ],
    timelineData: [
      { year: "١٧٢٧", event: "شولتزه يوثق اسوداد نترات الفضة بالضوء", era: "الرواد" },
      { year: "١٨٣٩", event: "داغير يقدم الداغيروتايب — لوح نحاسي مطلي بالفضة", era: "الاختراع" },
      { year: "١٩٣٥", event: "كوداكروم — أول فيلم ملون بثلاث طبقات هاليد فضة", era: "عصر الألوان" },
      { year: "٢٠٠٤", event: "مبيعات الكاميرات الرقمية تتجاوز كاميرات الأفلام", era: "التحول الرقمي" },
    ],
    faq: { heading: "الأسئلة الشائعة", items: [{ q: "هل يحتوي الفيلم الملون على فضة؟", a: "نعم أثناء التصنيع والتحميض. لكن الصورة النهائية لا تحتوي فضة — تُذاب أثناء التبييض." }] },
    sources: { heading: "المصادر", items: ["رالف جاكوبسون — «دليل التصوير»", "معهد الفضة — «مسح الفضة العالمي ٢٠٢٥»"] },
    related: { heading: "مواضيع ذات صلة", items: [{ title: "كيمياء الفضة", path: "/ar/science/chemistry", cat: "العلوم" }] },
    sponsor: { text: "حيث تلتقي الفضة بالضوء.", cta: "شاهد على إنستغرام", note: "هذا المحتوى برعاية إسطنبول للفضة." },
    darkMode: "الوضع",
  },
};

function Timeline({ data, dark, lang }) {
  const accent = dark ? "#C0C0C0" : "#708090";
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const bgCard = dark ? "#1a1a24" : "#ffffff";
  const border = dark ? "rgba(192,192,192,0.12)" : "rgba(0,0,0,0.08)";
  const eraColors = { "Öncüler": "#6C88B5", "Pioneers": "#6C88B5", "الرواد": "#6C88B5", "İcat": "#8B7EC8", "Invention": "#8B7EC8", "الاختراع": "#8B7EC8", "Gelişme": "#5D9E6F", "Development": "#5D9E6F", "Popülerleşme": "#C4956A", "Popularization": "#C4956A", "Renkli Çağ": "#B8860B", "Color Era": "#B8860B", "عصر الألوان": "#B8860B", "Dijital Geçiş": "#E74C3C", "Digital Shift": "#E74C3C", "التحول الرقمي": "#E74C3C", "Rönesans": "#4CAF50", "Renaissance": "#4CAF50" };

  return (
    <div style={{ marginTop: 8 }}>
      {data.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 16, marginBottom: 4 }}>
          <div style={{ width: 32, display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: eraColors[item.era] || accent, border: `2px solid ${bgCard}`, zIndex: 1 }} />
            {i < data.length - 1 && <div style={{ flex: 1, width: 2, background: border }} />}
          </div>
          <div style={{ flex: 1, paddingBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 700, color: eraColors[item.era] || accent }}>{item.year}</span>
              <span style={{ fontSize: 10, padding: "1px 6px", borderRadius: 4, background: `${eraColors[item.era] || accent}22`, color: eraColors[item.era] || accent, fontWeight: 500 }}>{item.era}</span>
            </div>
            <div style={{ fontSize: 13.5, color: textP, lineHeight: 1.55, opacity: 0.9 }}>{item.event}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PhotographyArticle() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);
  const t = T[lang];
  const isRTL = lang === "ar";
  const bgP = dark ? "#0f0f14" : "#FAFAF5";
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const accent = dark ? "#C0C0C0" : "#708090";
  const gold = "#D4AF37";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const fontD = "'Playfair Display', Georgia, serif";
  const fontB = lang === "ar" ? "'Noto Naskh Arabic', serif" : "'Source Sans 3', sans-serif";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{ fontFamily: fontB, background: bgP, color: textP, minHeight: "100vh", transition: "background 0.4s, color 0.4s" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*{margin:0;padding:0;box-sizing:border-box;}::selection{background:rgba(192,192,192,0.3);}`}</style>

      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: dark ? "rgba(15,15,20,0.88)" : "rgba(250,250,245,0.88)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${border}`, padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg, ${accent}, ${gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#0f0f14", fontFamily: fontD }}>Ag</div>
          <span style={{ fontFamily: fontD, fontWeight: 600, fontSize: 16 }}>{t.nav}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", gap: 2, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", borderRadius: 7, padding: 2 }}>
            {["tr", "en", "ar"].map(l => <button key={l} onClick={() => setLang(l)} style={{ border: "none", cursor: "pointer", padding: "3px 9px", borderRadius: 5, fontSize: 11, fontWeight: lang === l ? 600 : 400, fontFamily: l === "ar" ? "'Noto Naskh Arabic', serif" : fontB, background: lang === l ? (dark ? "rgba(192,192,192,0.15)" : "rgba(0,0,0,0.08)") : "transparent", color: lang === l ? textP : textS, transition: "all 0.2s" }}>{l === "ar" ? "عر" : l.toUpperCase()}</button>)}
          </div>
          <button onClick={() => setDark(!dark)} style={{ border: "none", cursor: "pointer", background: "transparent", color: textS, fontSize: 16, padding: 4 }}>{dark ? "☀️" : "🌙"}</button>
        </div>
      </nav>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "16px 24px 0", display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", fontSize: 12, color: textS }}>
        {t.breadcrumb.map((item, i) => <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>{i > 0 && <span style={{ opacity: 0.4 }}>{isRTL ? "‹" : "›"}</span>}<a href="#" style={{ color: i === t.breadcrumb.length - 1 ? textP : textS, textDecoration: "none", fontWeight: i === t.breadcrumb.length - 1 ? 500 : 400 }}>{item}</a></span>)}
      </div>

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "32px 24px 64px", animation: "fadeUp 0.6s ease both" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: 6, fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: gold, border: `1px solid ${gold}33`, marginBottom: 16 }}>{t.category}</div>
          <h1 style={{ fontFamily: fontD, fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 12 }}>{t.title}</h1>
          <p style={{ fontSize: 16, color: textS, lineHeight: 1.6, marginBottom: 20 }}>{t.subtitle}</p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", fontSize: 13, color: textS, paddingBottom: 20, borderBottom: `1px solid ${border}` }}>
            <span>{t.meta.author}</span><span style={{ opacity: 0.3 }}>·</span><span>{t.meta.date}</span><span style={{ opacity: 0.3 }}>·</span><span>{t.meta.readTime}</span>
          </div>
        </div>

        {t.sections.map(sec => (
          <section key={sec.id} style={{ marginBottom: 40 }}>
            {sec.heading && <h2 style={{ fontFamily: fontD, fontSize: 22, fontWeight: 600, marginBottom: 16, color: accent }}>{sec.heading}</h2>}
            {sec.paragraphs && sec.paragraphs.map((p, j) => <p key={j} style={{ fontSize: 15.5, lineHeight: 1.85, color: textP, marginBottom: 14, opacity: 0.92 }}>{p}</p>)}
            {sec.widget === "timeline" && <Timeline data={t.timelineData} dark={dark} lang={lang} />}
          </section>
        ))}

        {t.faq && <section style={{ marginTop: 48, marginBottom: 40 }}>
          <h2 style={{ fontFamily: fontD, fontSize: 22, fontWeight: 600, marginBottom: 20, color: accent }}>{t.faq.heading}</h2>
          {t.faq.items.map((item, i) => <div key={i} style={{ marginBottom: 8, borderRadius: 10, border: `1px solid ${border}`, overflow: "hidden" }}>
            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", textAlign: isRTL ? "right" : "left", padding: "14px 18px", background: openFaq === i ? (dark ? "rgba(192,192,192,0.05)" : "rgba(192,192,192,0.08)") : "transparent", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: textP, display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: fontB }}>
              <span>{item.q}</span><span style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s", fontSize: 12, color: textS }}>▼</span>
            </button>
            {openFaq === i && <div style={{ padding: "0 18px 16px", fontSize: 14, lineHeight: 1.7, color: textS }}>{item.a}</div>}
          </div>)}
        </section>}

        <section style={{ marginBottom: 40 }}><h2 style={{ fontFamily: fontD, fontSize: 18, fontWeight: 600, marginBottom: 12, color: accent }}>{t.sources.heading}</h2>{t.sources.items.map((s, i) => <div key={i} style={{ fontSize: 13, color: textS, padding: "6px 0", borderBottom: `1px solid ${border}` }}>{i + 1}. {s}</div>)}</section>

        <section style={{ marginBottom: 40 }}><h2 style={{ fontFamily: fontD, fontSize: 18, fontWeight: 600, marginBottom: 12, color: accent }}>{t.related.heading}</h2><div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>{t.related.items.map((r, i) => <a key={i} href={r.path} style={{ padding: "10px 16px", borderRadius: 8, border: `1px solid ${border}`, textDecoration: "none", color: textP, fontSize: 13, fontWeight: 500, background: dark ? "rgba(192,192,192,0.03)" : "rgba(192,192,192,0.06)" }}><span style={{ fontSize: 10, color: gold, marginRight: 6 }}>{r.cat}</span>{r.title}</a>)}</div></section>

        <div style={{ background: `linear-gradient(135deg, ${dark ? "rgba(212,175,55,0.06)" : "rgba(212,175,55,0.08)"}, transparent)`, borderRadius: 14, padding: 24, textAlign: "center", border: `1px solid ${gold}22` }}>
          <p style={{ fontSize: 14, color: textS, marginBottom: 12 }}>{t.sponsor.text}</p>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "10px 28px", borderRadius: 8, background: `linear-gradient(135deg, ${gold}, #c9a227)`, color: "#0f0f14", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>{t.sponsor.cta}</a>
          <p style={{ fontSize: 11, color: textS, marginTop: 10, opacity: 0.6 }}>{t.sponsor.note}</p>
        </div>
      </article>
      <footer style={{ borderTop: `1px solid ${border}`, padding: "24px", textAlign: "center", fontSize: 12, color: textS }}>© 2026 SilverAtlas · {t.meta.author}</footer>
    </div>
  );
}
