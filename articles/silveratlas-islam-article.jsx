import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Kültür", "İslam'da Gümüş"],
    category: "Kültür",
    title: "İslam'da Gümüşün Yeri",
    subtitle: "Hadisler, fıkıh hükümleri, sünnet uygulamaları ve İslam sanatında gümüşün özel konumu",
    meta: { author: "Turan Erbaş", date: "15 Nisan 2026", readTime: "10 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Gümüş, İslam medeniyetinde altından sonra en değerli metal olarak kabul edilmiş ve gündelik yaşamdan ibadete, sanat eserlerinden ekonomiye kadar pek çok alanda özel bir yere sahip olmuştur.",
        "Kur'an-ı Kerim'de cennet tasvirlerinde gümüş bilezikler ve kaplar anılır; hadislerde Hz. Muhammed'in gümüş yüzük kullandığı rivayet edilir. İslam fıkhı, gümüşün kullanımına ilişkin detaylı hükümler içerir — bu hükümler günümüz gümüş takı sektörünü doğrudan etkilemektedir.",
      ]},
      { id: "kuran", heading: "Kur'an'da Gümüş", paragraphs: [
        "Kur'an-ı Kerim'de gümüş (فضة — fidda) birkaç ayette anılır. İnsan Suresi (76:15-16): 'Etraflarında gümüş kaplar ve kristal berraklığında kadehler dolaştırılır — gümüşten yapılmış kristaller.' Bu ayetler, cennet nimetleri arasında gümüşün özel konumunu gösterir.",
        "Kehf Suresi'nde (18:19) Ashab-ı Kehf'in (Yedi Uyurlar) elçilerini çarşıya gümüş sikke (varık) ile göndermesi, dönemin ekonomisinde gümüşün rolünü yansıtır.",
        "Tevbe Suresi (9:34) ise altın ve gümüş biriktirip Allah yolunda harcamayanları uyarır — bu ayet, zekât hükümlerinin temelini oluşturur.",
      ]},
      { id: "hadis", heading: "Hadislerde Gümüş", paragraphs: [
        "Hz. Muhammed'in gümüşle ilişkisi birçok sahih hadiste aktarılır. En bilinen rivayetlere göre Peygamber, gümüş bir yüzük kullanmış ve bu yüzüğü mühür olarak da kullanmıştır. Yüzüğün üzerinde 'Muhammedün Rasûlullah' (Muhammed Allah'ın Elçisidir) yazılıydı.",
        "Bununla birlikte hadislerde erkeklerin altın yüzük takması yasaklanmış, gümüş yüzük ise helal kılınmıştır. Bu hüküm, günümüzde erkek gümüş takı pazarının İslam coğrafyasında son derece güçlü olmasının temel nedenidir.",
        "Bir diğer önemli hadis, gümüş kaptan yemek ve içmenin yasaklanmasıyla ilgilidir. Dört mezhep de altın ve gümüş kaplardan yemek-içmek konusunda farklı görüşler ortaya koymuştur; çoğunluk görüşü israf ve kibre yol açması nedeniyle bunun mekruh veya haram olduğu yönündedir.",
      ]},
      { id: "fikih", heading: "Fıkıh Hükümleri", paragraphs: [
        "İslam fıkhında gümüşle ilgili başlıca hükümler şunlardır:",
      ], widget: "rulingCards" },
      { id: "zekat", heading: "Gümüş ve Zekât", paragraphs: [
        "Gümüşün zekât nisabı 595 gram (200 dirhem) olarak belirlenmiştir. Bu miktarın üzerinde gümüşe sahip olan Müslüman, yıllık %2,5 (1/40) oranında zekât vermekle yükümlüdür.",
        "Günümüzde gümüş takı sahibi kadınların zekât durumu mezheplere göre farklılık gösterir: Hanefi mezhebine göre kullanılmayan takılar için zekât gerekir; Şâfiî ve Mâlikî mezheplerine göre ise kullanılan (müteaddit) takılar zekâttan muaftır.",
      ]},
      { id: "sanat", heading: "İslam Sanatında Gümüş", paragraphs: [
        "İslam sanatında gümüş, mimaride, hat sanatında ve dekoratif objelerde yaygın olarak kullanılmıştır. Kabe'nin kapısı (Bâbü's-Selâm) gümüş ve altın kaplama; Mescid-i Nebevi'nin mihrabı gümüş işlemelidir.",
        "Osmanlı döneminde gümüş, Kur'an mahfazaları, gülabdanlar, buhurdanlar ve cami avizelerinde kullanılmıştır. Topkapı Sarayı'ndaki Mukaddes Emanetler bölümünde gümüş eserler arasında Hz. Muhammed'e atfedilen gümüş ayna ve gümüş kandil bulunmaktadır.",
        "İslam kaligrafisinde gümüş mürekkep (gümüş varak) özellikle lacivert ve siyah zemin üzerine yazılan hatlarda kullanılmıştır. Bu teknik, Osmanlı ve Safevi el yazmalarında sıkça görülür.",
      ]},
      { id: "gunumuz", heading: "Günümüzde İslami Gümüş Takı", paragraphs: [
        "Modern İslami gümüş takı pazarı, geleneksel dini sembollerle çağdaş tasarımı birleştirmektedir. En popüler ürünler: Besmele veya Ayet el-Kürsi işlemeli yüzükler ve kolyeler, 99'luk gümüş tesbihler, hilal-yıldız motifleri, Kâbe minyatürleri ve Osmanlı tuğralı aksesuarlardır.",
        "İstanbul Gümüş, Konya'da 925 ayar gümüşle ürettiği İslami motifli takılarda hem geleneksel hat sanatını hem de modern minimalist tasarımı bir arada sunmaktadır.",
      ]},
    ],
    faq: { title: "Sık Sorulan Sorular", items: [
      { q: "Erkekler gümüş yüzük takabilir mi?", a: "Evet — İslam fıkhında erkeklerin gümüş yüzük takması helaldir ve sünnet olarak kabul edilir. Altın yüzük ise erkeklere haramdır." },
      { q: "Gümüş takı zekâta tabi midir?", a: "Hanefi mezhebine göre tüm gümüş takılar (kullanılsın veya kullanılmasın) zekâta tabidir. Şâfiî ve Mâlikî mezheplerinde kullanılan takılar muaf tutulabilir." },
      { q: "Gümüş kaptan su içmek haram mı?", a: "Cumhur (çoğunluk) görüşüne göre altın ve gümüş kaplardan yemek-içmek haramdır. Ancak gümüş kaplama veya gümüş süslemeli kaplar konusunda görüş ayrılıkları vardır." },
    ]},
    cta: { title: "İslami Motifli 925 Ayar Gümüş", text: "İstanbul Gümüş, hadislere uygun 925 ayar gümüşle İslami takılar üretmektedir.", button: "Koleksiyonu Keşfet" },
    footer: { copyright: "© 2026 SilverAtlas.org — Turan Erbaş tarafından hazırlanmıştır.", sponsor: "İstanbul Gümüş sponsorluğundadır", links: ["Hakkımızda", "Makaleler", "İletişim"] },
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Encyclopedia",
    breadcrumb: ["Home", "Culture", "Silver in Islam"],
    category: "Culture",
    title: "Silver in Islam",
    subtitle: "Hadiths, jurisprudence, prophetic traditions, and silver's special place in Islamic art",
    meta: { author: "Turan Erbaş", date: "April 15, 2026", readTime: "10 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Silver has been regarded as the second most precious metal in Islamic civilization after gold, holding a special place from daily life to worship, from art to economics.",
        "The Quran mentions silver bracelets and vessels in descriptions of paradise; hadiths record that Prophet Muhammad wore a silver ring. Islamic jurisprudence contains detailed rulings on silver use — rulings that directly influence today's silver jewelry industry.",
      ]},
      { id: "kuran", heading: "Silver in the Quran", paragraphs: [
        "Silver (فضة — fidda) is mentioned in several Quranic verses. Surah Al-Insan (76:15-16) describes vessels of silver and cups of crystal circulated among the people of paradise — silver of extraordinary purity.",
        "In Surah Al-Kahf (18:19), the Companions of the Cave send their emissary to the market with silver coins (wariq), reflecting silver's economic role in the period.",
        "Surah At-Tawbah (9:34) warns those who hoard gold and silver without spending in God's path — this verse forms the foundation of zakat rulings.",
      ]},
      { id: "hadis", heading: "Silver in Hadiths", paragraphs: [
        "Prophet Muhammad's relationship with silver is narrated in several authentic hadiths. According to the most well-known accounts, the Prophet used a silver ring that also served as his seal, inscribed with 'Muhammad Rasulullah' (Muhammad is the Messenger of Allah).",
        "Hadiths prohibit men from wearing gold rings but permit silver rings. This ruling is the fundamental reason why the men's silver jewelry market is extraordinarily strong in the Islamic world.",
        "Another important hadith concerns the prohibition of eating and drinking from silver vessels. The four schools of law have varying opinions — the majority view holds this to be makruh or haram due to its association with extravagance and pride.",
      ]},
      { id: "fikih", heading: "Jurisprudential Rulings", paragraphs: [
        "The main rulings concerning silver in Islamic jurisprudence:",
      ], widget: "rulingCards" },
      { id: "zekat", heading: "Silver and Zakat", paragraphs: [
        "The zakat threshold for silver is set at 595 grams (200 dirhams). Muslims who possess silver above this amount are obligated to pay 2.5% (1/40) annually.",
        "The zakat status of women's silver jewelry varies by school: according to the Hanafi school, zakat is due on all jewelry whether worn or not; Shafi'i and Maliki schools may exempt jewelry in regular use.",
      ]},
      { id: "sanat", heading: "Silver in Islamic Art", paragraphs: [
        "Silver has been widely used in Islamic art — in architecture, calligraphy, and decorative objects. The door of the Kaaba is covered in silver and gold; the mihrab of the Prophet's Mosque features silver work.",
        "During the Ottoman era, silver was used in Quran cases, rosewater sprinklers, censers, and mosque chandeliers. The Holy Relics section of Topkapi Palace houses silver artifacts attributed to Prophet Muhammad.",
        "In Islamic calligraphy, silver ink (silver leaf) was used especially for writing on navy and black backgrounds. This technique is frequently seen in Ottoman and Safavid manuscripts.",
      ]},
      { id: "gunumuz", heading: "Islamic Silver Jewelry Today", paragraphs: [
        "The modern Islamic silver jewelry market combines traditional religious symbols with contemporary design. Popular products include Bismillah or Ayat al-Kursi engraved rings and necklaces, 99-bead silver prayer beads, crescent-star motifs, and Ottoman tughra accessories.",
        "Istanbul Silver combines traditional calligraphy art with modern minimalist design in its Islamic-motif jewelry crafted in 925 sterling silver in Konya.",
      ]},
    ],
    faq: { title: "FAQ", items: [
      { q: "Can men wear silver rings?", a: "Yes — wearing silver rings is halal for men in Islamic jurisprudence and is considered sunnah. Gold rings, however, are haram for men." },
      { q: "Is silver jewelry subject to zakat?", a: "According to the Hanafi school, all silver jewelry is subject to zakat. Shafi'i and Maliki schools may exempt jewelry in regular use." },
      { q: "Is drinking from silver cups haram?", a: "According to the majority opinion, eating and drinking from gold and silver vessels is haram. There are differing views on silver-plated or silver-decorated items." },
    ]},
    cta: { title: "Islamic Motif 925 Sterling Silver", text: "Istanbul Silver crafts Islamic jewelry in hadith-compliant 925 sterling silver.", button: "Explore Collection" },
    footer: { copyright: "© 2026 SilverAtlas.org — Created by Turan Erbaş.", sponsor: "Sponsored by Istanbul Silver", links: ["About", "Articles", "Contact"] },
  },
  ar: {
    nav: "SilverAtlas", navSub: "موسوعة الفضة",
    breadcrumb: ["الرئيسية", "الثقافة", "الفضة في الإسلام"],
    category: "الثقافة",
    title: "الفضة في الإسلام",
    subtitle: "الأحاديث والفقه والسنة النبوية والمكانة الخاصة للفضة في الفن الإسلامي",
    meta: { author: "توران إرباش", date: "١٥ أبريل ٢٠٢٦", readTime: "١٠ دقائق قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "تُعتبر الفضة ثاني أثمن معدن في الحضارة الإسلامية بعد الذهب، حيث احتلت مكانة خاصة في الحياة اليومية والعبادة والفن والاقتصاد.",
        "يذكر القرآن الكريم أساور وأواني الفضة في وصف الجنة، وتروي الأحاديث أن النبي محمد ﷺ كان يلبس خاتماً من فضة. يتضمن الفقه الإسلامي أحكاماً تفصيلية حول استخدام الفضة.",
      ]},
      { id: "kuran", heading: "الفضة في القرآن", paragraphs: [
        "تُذكر الفضة (فضة) في عدة آيات قرآنية. في سورة الإنسان (٧٦:١٥-١٦): 'ويُطاف عليهم بآنية من فضة وأكواب كانت قواريرا، قواريرا من فضة قدّروها تقديرا.'",
        "وفي سورة الكهف (١٨:١٩) يُرسل أصحاب الكهف رسولهم بعملة فضية (وَرِق) إلى السوق.",
        "وتحذر سورة التوبة (٩:٣٤) الذين يكنزون الذهب والفضة ولا ينفقونها في سبيل الله — وهذه الآية تشكل أساس أحكام الزكاة.",
      ]},
      { id: "hadis", heading: "الفضة في الأحاديث", paragraphs: [
        "تُروى علاقة النبي ﷺ بالفضة في عدة أحاديث صحيحة. كان النبي يلبس خاتماً من فضة نُقش عليه 'محمد رسول الله' واستخدمه ختماً للرسائل.",
        "نهت الأحاديث الرجال عن لبس خواتم الذهب وأباحت لهم خواتم الفضة. هذا الحكم هو السبب الرئيسي لقوة سوق مجوهرات الفضة الرجالية في العالم الإسلامي.",
      ]},
      { id: "fikih", heading: "الأحكام الفقهية", paragraphs: [
        "أهم الأحكام المتعلقة بالفضة في الفقه الإسلامي:",
      ], widget: "rulingCards" },
      { id: "zekat", heading: "الفضة والزكاة", paragraphs: [
        "نصاب زكاة الفضة ٥٩٥ جراماً (٢٠٠ درهم). من يملك فضة فوق هذا المقدار يجب عليه إخراج ٢.٥٪ سنوياً.",
        "تختلف أحكام زكاة حلي النساء الفضية حسب المذاهب: عند الحنفية الزكاة واجبة على كل الحلي سواء لُبست أم لا؛ وعند الشافعية والمالكية قد تُعفى الحلي المستعملة.",
      ]},
    ],
    faq: { title: "الأسئلة الشائعة", items: [
      { q: "هل يجوز للرجال لبس خواتم الفضة؟", a: "نعم — لبس خواتم الفضة حلال للرجال في الفقه الإسلامي ويُعتبر سنة. أما خواتم الذهب فحرام على الرجال." },
      { q: "هل تجب الزكاة في حلي الفضة؟", a: "عند الحنفية تجب الزكاة في جميع حلي الفضة. وعند الشافعية والمالكية قد تُعفى الحلي المستعملة." },
    ]},
    cta: { title: "فضة عيار ٩٢٥ بزخارف إسلامية", text: "إسطنبول للفضة تصنع مجوهرات إسلامية بفضة عيار ٩٢٥ وفق الأحاديث.", button: "استكشف المجموعة" },
    footer: { copyright: "© ٢٠٢٦ SilverAtlas.org — إعداد توران إرباش", sponsor: "برعاية إسطنبول للفضة", links: ["حول", "مقالات", "اتصل"] },
  },
};

const S="#C0C0C0",DS="#708090",NV="#1a1a2e",GA="#D4AF37";
const FH="'Playfair Display',Georgia,serif",FB="'Source Sans 3','Segoe UI',sans-serif";
const FA="'Noto Naskh Arabic','Traditional Arabic',serif",FM="'JetBrains Mono','Fira Code',monospace";

const RulingCards = ({ lang, dark }) => {
  const [active, setActive] = useState(null);
  const isRTL = lang === "ar";
  const rulings = {
    tr: [
      { icon: "💍", title: "Gümüş Yüzük", ruling: "Helal (Sünnet)", detail: "Erkek ve kadın için caizdir. Hz. Peygamber gümüş yüzük kullanmıştır. Erkekler için altın yerine gümüş tercih edilmelidir.", color: "#4CAF50" },
      { icon: "🍽️", title: "Gümüş Kap-Kacak", ruling: "Haram (Cumhur)", detail: "Altın ve gümüş kaplardan yemek-içmek cumhura göre haramdır. İsraf ve kibre yol açtığı gerekçesiyle yasaklanmıştır.", color: "#f44336" },
      { icon: "💰", title: "Gümüş Zekâtı", ruling: "595 g üzeri farz", detail: "200 dirhem (595 gram) gümüşe sahip olan kişi, üzerinden bir yıl geçmişse %2,5 zekât vermekle mükelleftir.", color: "#2196F3" },
      { icon: "🪙", title: "Gümüş Para/Ticaret", ruling: "Helal", detail: "Gümüş ile alışveriş yapmak caizdir. Ancak gümüş-gümüş takası eşit ve peşin olmalıdır (faiz yasağı — riba).", color: "#4CAF50" },
      { icon: "🕌", title: "Dini Eşyalar", ruling: "Caiz (İhtilaf var)", detail: "Kur'an mahfazası, tesbih, buhurdan gibi dini eşyalarda gümüş kullanımı genel olarak caiz görülmüştür.", color: "#FF9800" },
      { icon: "👔", title: "Erkek Gümüş Takı", ruling: "Helal (Sınırlı)", detail: "Yüzük dışında erkeklerin gümüş takı kullanımı mezheplere göre farklılık gösterir. Çoğunluk görüşü kolye ve bilezik için mekruhtur.", color: "#FF9800" },
    ],
    en: [
      { icon: "💍", title: "Silver Ring", ruling: "Halal (Sunnah)", detail: "Permissible for both men and women. The Prophet used a silver ring. Men should prefer silver over gold.", color: "#4CAF50" },
      { icon: "🍽️", title: "Silver Vessels", ruling: "Haram (Majority)", detail: "Eating and drinking from gold/silver vessels is haram according to majority opinion due to extravagance.", color: "#f44336" },
      { icon: "💰", title: "Silver Zakat", ruling: "Obligatory above 595g", detail: "Person owning 200 dirhams (595g) of silver must pay 2.5% zakat annually after one year of possession.", color: "#2196F3" },
      { icon: "🪙", title: "Silver Trade", ruling: "Halal", detail: "Trading with silver is permissible. Silver-for-silver exchange must be equal and immediate (riba prohibition).", color: "#4CAF50" },
      { icon: "🕌", title: "Religious Objects", ruling: "Permissible (Debated)", detail: "Using silver in Quran cases, prayer beads, censers is generally considered permissible.", color: "#FF9800" },
      { icon: "👔", title: "Men's Silver Jewelry", ruling: "Halal (Limited)", detail: "Beyond rings, men's use of silver jewelry varies by school. Majority view: necklaces and bracelets are makruh.", color: "#FF9800" },
    ],
    ar: [
      { icon: "💍", title: "خاتم الفضة", ruling: "حلال (سنة)", detail: "جائز للرجال والنساء. كان النبي ﷺ يلبس خاتم فضة. يُفضّل للرجال الفضة على الذهب.", color: "#4CAF50" },
      { icon: "🍽️", title: "أواني الفضة", ruling: "حرام (الجمهور)", detail: "الأكل والشرب في أواني الذهب والفضة حرام عند الجمهور لما فيه من إسراف.", color: "#f44336" },
      { icon: "💰", title: "زكاة الفضة", ruling: "واجبة فوق ٥٩٥ غ", detail: "من ملك ٢٠٠ درهم (٥٩٥ غ) فضة وحال عليها الحول وجب عليه إخراج ٢.٥٪.", color: "#2196F3" },
      { icon: "🪙", title: "تجارة الفضة", ruling: "حلال", detail: "التجارة بالفضة جائزة. مبادلة الفضة بالفضة يجب أن تكون متساوية وفورية (تحريم الربا).", color: "#4CAF50" },
    ],
  };

  const items = rulings[lang] || rulings.tr;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "1rem", margin: "1.5rem 0" }}>
      {items.map((r, i) => (
        <div key={i} onClick={() => setActive(active === i ? null : i)} style={{
          padding: "1.25rem", borderRadius: "12px", cursor: "pointer",
          background: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
          border: `1px solid ${active === i ? r.color : (dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)")}`,
          transition: "all 0.3s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "1.5rem" }}>{r.icon}</span>
            <div>
              <div style={{ fontFamily: FH, fontSize: "1rem", fontWeight: 700, color: dark ? S : NV }}>{r.title}</div>
              <div style={{ fontFamily: FM, fontSize: "0.75rem", color: r.color, fontWeight: 700 }}>{r.ruling}</div>
            </div>
          </div>
          {active === i && (
            <div style={{
              marginTop: "0.5rem", paddingTop: "0.5rem",
              borderTop: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
              fontFamily: isRTL ? FA : FB, fontSize: "0.88rem", lineHeight: 1.6, color: dark ? "#aaa" : "#555",
            }}>{r.detail}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function SilverAtlasIslamArticle() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [faqOpen, setFaqOpen] = useState(null);
  const t = T[lang]; const isRTL = lang === "ar"; const bf = isRTL ? FA : FB;
  const bg = dark ? "linear-gradient(180deg,#0d0d1a 0%,#1a1a2e 40%,#16213e 100%)" : "linear-gradient(180deg,#f8f9fa 0%,#e8e8e8 100%)";
  const tc = dark ? "#e0e0e0" : "#2c2c2c", mc = dark ? "#999" : "#666", cb = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)", bc = dark ? "rgba(192,192,192,0.15)" : "rgba(0,0,0,0.1)";

  return (
    <div style={{ minHeight: "100vh", background: bg, direction: isRTL ? "rtl" : "ltr" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Sans+3:wght@300;400;600;700&family=Noto+Naskh+Arabic:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap');*{margin:0;padding:0;box-sizing:border-box;}`}</style>

      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 2rem", borderBottom: `1px solid ${bc}`, background: dark ? "rgba(13,13,26,0.95)" : "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ fontSize: "1.8rem", fontFamily: FH, fontWeight: 900, background: `linear-gradient(135deg,${S},${GA})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Ag</div>
          <div><div style={{ fontFamily: FH, fontWeight: 700, fontSize: "1.1rem", color: dark ? S : NV }}>{t.nav}</div><div style={{ fontFamily: bf, fontSize: "0.7rem", color: mc }}>{t.navSub}</div></div>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {["TR", "EN", "AR"].map(l => (<button key={l} onClick={() => setLang(l.toLowerCase())} style={{ padding: "0.3rem 0.6rem", borderRadius: "6px", border: `1px solid ${lang === l.toLowerCase() ? GA : bc}`, background: lang === l.toLowerCase() ? `${GA}22` : "transparent", color: lang === l.toLowerCase() ? GA : mc, cursor: "pointer", fontFamily: FM, fontSize: "0.75rem", fontWeight: 700 }}>{l}</button>))}
          <button onClick={() => setDark(!dark)} style={{ padding: "0.3rem 0.6rem", borderRadius: "6px", border: `1px solid ${bc}`, background: "transparent", color: mc, cursor: "pointer", fontSize: "1rem" }}>{dark ? "☀️" : "🌙"}</button>
        </div>
      </nav>

      <div style={{ padding: "0.75rem 2rem", fontFamily: bf, fontSize: "0.85rem", color: mc, maxWidth: 900, margin: "0 auto" }}>
        {t.breadcrumb.map((b, i) => (<span key={i}>{i > 0 && <span style={{ margin: "0 0.5rem", color: DS }}>/</span>}<span style={{ color: i === t.breadcrumb.length - 1 ? GA : mc }}>{b}</span></span>))}
      </div>

      <header style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 2rem 1rem", textAlign: isRTL ? "right" : "left" }}>
        <div style={{ display: "inline-block", padding: "0.3rem 1rem", borderRadius: "20px", background: `${GA}22`, color: GA, fontFamily: FM, fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", border: `1px solid ${GA}44` }}>{t.category}</div>
        <h1 style={{ fontFamily: FH, fontSize: "clamp(2rem,5vw,2.8rem)", fontWeight: 900, color: dark ? "#fff" : NV, lineHeight: 1.2, marginBottom: "0.75rem" }}>{t.title}</h1>
        <p style={{ fontFamily: bf, fontSize: "1.15rem", color: DS, lineHeight: 1.6, marginBottom: "1.5rem" }}>{t.subtitle}</p>
        <div style={{ display: "flex", gap: "1.5rem", fontFamily: FM, fontSize: "0.8rem", color: mc, flexWrap: "wrap" }}>
          <span>✍️ {t.meta.author}</span><span>📅 {t.meta.date}</span><span>⏱️ {t.meta.readTime}</span>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
        {t.sections.map(s => (
          <section key={s.id} style={{ marginBottom: "3rem" }}>
            {s.heading && <h2 style={{ fontFamily: FH, fontSize: "1.6rem", fontWeight: 700, color: dark ? S : NV, marginBottom: "1rem", borderBottom: `2px solid ${GA}`, paddingBottom: "0.5rem" }}>{s.heading}</h2>}
            {s.paragraphs?.map((p, i) => (<p key={i} style={{ fontFamily: bf, fontSize: "1.05rem", lineHeight: 1.85, color: tc, marginBottom: "1rem", textAlign: isRTL ? "right" : "justify" }}>{p}</p>))}
            {s.widget === "rulingCards" && <RulingCards lang={lang} dark={dark} />}
          </section>
        ))}

        {t.faq && <section style={{ marginTop: "3rem" }}>
          <h2 style={{ fontFamily: FH, fontSize: "1.6rem", fontWeight: 700, color: dark ? S : NV, marginBottom: "1.5rem", borderBottom: `2px solid ${GA}`, paddingBottom: "0.5rem" }}>{t.faq.title}</h2>
          {t.faq.items.map((item, i) => (<div key={i} style={{ marginBottom: "0.75rem", border: `1px solid ${bc}`, borderRadius: "10px", overflow: "hidden" }}>
            <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={{ width: "100%", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: cb, border: "none", cursor: "pointer", fontFamily: bf, fontSize: "1rem", fontWeight: 600, color: dark ? "#e0e0e0" : NV, textAlign: isRTL ? "right" : "left" }}>
              <span>{item.q}</span><span style={{ transform: faqOpen === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", fontSize: "1.3rem", color: GA, flexShrink: 0 }}>+</span>
            </button>
            {faqOpen === i && <div style={{ padding: "1rem 1.25rem", fontFamily: bf, fontSize: "0.95rem", lineHeight: 1.7, color: mc, background: dark ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.5)", borderTop: `1px solid ${bc}` }}>{item.a}</div>}
          </div>))}
        </section>}

        <div style={{ margin: "3rem 0", padding: "2rem", borderRadius: "16px", background: `linear-gradient(135deg,${NV},#16213e)`, border: `1px solid ${GA}44`, textAlign: "center" }}>
          <div style={{ fontFamily: FH, fontSize: "1.3rem", fontWeight: 700, color: S, marginBottom: "0.75rem" }}>{t.cta.title}</div>
          <p style={{ fontFamily: bf, fontSize: "0.95rem", color: "#999", maxWidth: 500, margin: "0 auto 1.25rem" }}>{t.cta.text}</p>
          <a href="https://www.istanbulgumus.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "0.75rem 2rem", borderRadius: "30px", background: `linear-gradient(135deg,${GA},#c4972a)`, color: NV, fontFamily: FH, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>{t.cta.button}</a>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
            {["@istanbulgumustr", "@istanbulgumuscom", "@istanbulgumusmen"].map(h => (<span key={h} style={{ fontFamily: FM, fontSize: "0.75rem", color: DS }}>{h}</span>))}
          </div>
        </div>
      </main>

      <footer style={{ padding: "2rem", borderTop: `1px solid ${bc}`, textAlign: "center", fontFamily: bf, fontSize: "0.85rem", color: mc }}>
        <div style={{ marginBottom: "0.5rem" }}>{t.footer.copyright}</div>
        <div style={{ color: GA, marginBottom: "0.75rem" }}>{t.footer.sponsor}</div>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>{t.footer.links.map(l => (<span key={l} style={{ cursor: "pointer", color: DS }}>{l}</span>))}</div>
      </footer>
    </div>
  );
}
