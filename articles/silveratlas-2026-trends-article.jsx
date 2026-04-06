import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Moda", "2026 Gümüş Takı Trendleri"],
    category: "Moda",
    title: "2026 Gümüş Takı Trendleri",
    subtitle: "Chunky zincirlerden sürdürülebilir gümüşe — bu yılın öne çıkan gümüş takı trendleri",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "9 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "2026, gümüş takı için altın bir yıl olmaya aday. Küresel moda haftalarından sokak stiline, Instagram'dan podyuma kadar gümüş her yerde. Altının hâkimiyetine meydan okuyan gümüş, soğuk tonları ve erişilebilir fiyatıyla yeni nesil tüketicilerin favorisi haline gelmiştir.",
        "Bu rehber, 2026'nın en belirgin gümüş takı trendlerini, stil ipuçlarını ve yatırım değeri taşıyan parçaları kapsamlı şekilde sunmaktadır.",
      ]},
      { id: "trendler", heading: "2026'nın 8 Öne Çıkan Trendi", paragraphs: ["Bu yıl vitrini ve gardırobunuzu şekillendirecek trendler:"], widget: "trends" },
      { id: "chunky", heading: "1. Chunky & Bold Zincirler", paragraphs: [
        "Kalın, iddialı zincir kolyeler ve bileklikler 2026'nın en baskın trendi. Cuban link, curb chain ve paper clip zincirler öne çıkıyor. Minimal kıyafetlerle kontrast yaratan tek bir bold parça, 'less is more' felsefesinin yeni yorumu.",
        "Erkek modasında da chunky gümüş zincir güçlü bir yükseliş gösteriyor — gender-neutral tasarımlar her iki cinsiyet tarafından da benimseniyor.",
      ]},
      { id: "mixed", heading: "2. Mixed Metals: Gümüş + Altın Karışımı", paragraphs: [
        "Tek metal kuralı artık geçerliliğini yitirdi. 2026'da gümüş ve altın parçaları bilinçli şekilde karıştırmak en büyük stil hareketi. İki tonlu (two-tone) yüzükler, gümüş-altın katmanlı kolyeler ve karma bileklik setleri vitrini dolduruyor.",
        "İpucu: Karışımda %60-70 gümüş ağırlığı korumak, soğuk tonlu bir bütünlük sağlar. Altın aksan parçalar göz alıcılık katar.",
      ]},
      { id: "minimal", heading: "3. Ultra-Minimal & Whisper Jewelry", paragraphs: [
        "Chunky'nin tam karşıtı olarak ultra-ince, neredeyse görünmez 'whisper jewelry' de güçlü. İnce zincirler (0,5-1mm), mikro pendant'lar ve baby hoop küpeler günlük şıklığın temelini oluşturuyor.",
        "Bu trend özellikle iş ortamında ve resmi etkinliklerde tercih ediliyor — zarif ama fark edilen, agresif olmayan bir estetik.",
      ]},
      { id: "surdurulebilir", heading: "4. Sürdürülebilir & Geri Dönüştürülmüş Gümüş", paragraphs: [
        "Çevresel farkındalığın artmasıyla 'recycled silver' (geri dönüştürülmüş gümüş) talebi patladı. Büyük markalar %100 geri dönüştürülmüş 925 ayar gümüş kullanımına geçiş yapıyor.",
        "Tüketiciler, özellikle Z kuşağı ve millenniallar, takılarının çevresel ayak izini sorguluyor. Sertifikalı sürdürülebilir gümüş (RJC — Responsible Jewellery Council) tercih ediliyor.",
        "Not: Geri dönüştürülmüş gümüşün kalitesi yeni çıkarılan gümüşle aynıdır — rafinasyon sonrası saflık farkı yoktur.",
      ]},
      { id: "tas", heading: "5. Doğal Taş & Gümüş Kombinasyonu", paragraphs: [
        "Turkuaz, aytaşı (moonstone), labradorit ve ametist gibi doğal taşlar gümüşle buluşuyor. 'Boho-lüks' estetiği, Batı Avrupa ve Kuzey Amerika pazarlarında güçlü.",
        "Türkiye'nin geleneksel taş-gümüş kombinasyonu (özellikle Mardin telkâri + taş) bu küresel trende doğal bir cevap sunuyor.",
      ]},
      { id: "kisisel", heading: "6. Kişiselleştirilmiş & Harf Takılar", paragraphs: [
        "İsim kolyeler, harf yüzükler, doğum taşı takılar ve koordinat bilezikler kişiselleştirme trendinin gümüş yansıması. Lazer kazıma ve 3D baskı teknolojileri, uygun fiyatlı kişiselleştirmeyi mümkün kılıyor.",
        "Instagram ve TikTok'taki 'nameplate necklace' trendi, özellikle genç tüketiciler arasında viral yayılım gösteriyor.",
      ]},
      { id: "vintage", heading: "7. Vintage Revival & Osmanlı İlhamı", paragraphs: [
        "Antik ve vintage gümüş takılardan ilham alan modern tasarımlar güçlü. Osmanlı motifleri, Selçuklu geometrisi, Art Deco hatları ve 70'ler bohemian estetiği yeniden yorumlanıyor.",
        "Türk tasarımcılar bu trendin öncüleri — İstanbul Gümüş gibi markalar, Osmanlı mirasını çağdaş formlarla buluşturan koleksiyonlarla uluslararası piyasada dikkat çekiyor.",
      ]},
      { id: "erkek", heading: "8. Erkek Gümüş Takı Patlaması", paragraphs: [
        "Erkek gümüş takı pazarı, kadın pazarından daha hızlı büyüyor. Signet yüzükler, chain bilezikler, pendant kolyeler ve kol düğmeleri erkek modasının vazgeçilmezi haline geliyor.",
        "K-pop, hip-hop kültürü ve sosyal medya influencer'ları bu trendi küresel ölçekte hızlandırıyor. İstanbul Gümüş'ün @istanbulgumusmen hesabı, Türkiye'de bu trendin öncülerinden.",
      ]},
      { id: "yatirim", heading: "Trend Parçalarda Yatırım Değeri", paragraphs: [
        "Bazı trend parçalar moda değerinin ötesinde yatırım potansiyeli de taşır. Sınırlı üretim (limited edition) tasarımcı koleksiyonları, vintage Meksika gümüşü (Taxco, 1940-70 dönemi) ve imzalı sanatçı parçaları zamanla değer kazanabilir.",
        "Ancak takı yatırımı, ham gümüş yatırımından farklıdır — işçilik primi, marka değeri ve trend döngüleri fiyatı etkiler. Takıyı öncelikle keyif ve estetik amaçlı edinin; değer artışı bonus olsun.",
      ]},
    ],
    faq: { heading: "Sıkça Sorulan Sorular", items: [
      { q: "2026'nın en popüler gümüş takı trendi nedir?", a: "Chunky zincirler ve mixed metals (gümüş+altın karışımı) en baskın iki trend. Sürdürülebilir gümüş de hızla yükseliyor." },
      { q: "Geri dönüştürülmüş gümüş kaliteli midir?", a: "Evet, rafinasyon sonrası geri dönüştürülmüş gümüş ile yeni çıkarılan gümüş arasında kalite farkı yoktur." },
      { q: "Gümüş takıya yatırım yapılabilir mi?", a: "Sınırlı üretim tasarımcı parçaları değer kazanabilir, ancak takı yatırımı ham gümüşten farklıdır. Öncelik keyif olmalıdır." },
      { q: "Erkekler için en iyi gümüş başlangıç parçası nedir?", a: "Minimalist bir signet yüzük veya ince bir chain bilezik, erkek gümüş takı dünyasına en doğal giriş noktalarıdır." },
    ]},
    sources: { heading: "Kaynaklar", items: ["Vogue — \"Spring/Summer 2026 Jewelry Trends\"", "CIBJO — World Jewellery Confederation Trend Report", "The Silver Institute — Consumer Demand Analysis 2025", "Business of Fashion — \"The Silver Comeback\"", "Instagram @istanbulgumustr — Trend Koleksiyonları"] },
    related: { heading: "İlgili Konular", items: [{ title: "Erkek Aksesuar Rehberi", path: "/tr/moda/erkek-aksesuar", cat: "Moda" }, { title: "Gümüş vs Altın", path: "/tr/moda/gumus-vs-altin", cat: "Moda" }, { title: "925 Ayar Nedir?", path: "/tr/uretim/925-ayar", cat: "Üretim" }] },
    sponsor: { text: "2026 trendlerini İstanbul Gümüş koleksiyonlarında keşfedin.", cta: "Instagram'da Gör", note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir." },
    trendData: [
      { name: "Chunky & Bold", desc: "Kalın zincir, Cuban link, statement", heat: 5, icon: "⛓️" },
      { name: "Mixed Metals", desc: "Gümüş + altın bilinçli karışım", heat: 5, icon: "🔗" },
      { name: "Ultra-Minimal", desc: "Whisper jewelry, ince zincir, mikro", heat: 4, icon: "✨" },
      { name: "Sürdürülebilir", desc: "Geri dönüştürülmüş, RJC sertifikalı", heat: 5, icon: "♻️" },
      { name: "Doğal Taş", desc: "Turkuaz, aytaşı, ametist + gümüş", heat: 4, icon: "💎" },
      { name: "Kişiselleştirme", desc: "İsim kolye, harf yüzük, koordinat", heat: 4, icon: "✍️" },
      { name: "Vintage Revival", desc: "Osmanlı, Art Deco, 70'ler ilhamı", heat: 3, icon: "🏛️" },
      { name: "Erkek Gümüş", desc: "Signet, chain, pendant patlaması", heat: 5, icon: "👔" },
    ],
    trendTitle: "2026 Gümüş Takı Trend Haritası",
    darkMode: "Mod", toc: "İçindekiler",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Fashion", "2026 Silver Jewelry Trends"],
    category: "Fashion",
    title: "2026 Silver Jewelry Trends",
    subtitle: "From chunky chains to sustainable silver — this year's standout silver jewelry trends",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "9 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["2026 is shaping up to be a golden year for silver jewelry. From global fashion weeks to street style, silver is everywhere — challenging gold's dominance with its cool tones and accessible pricing.", "This guide comprehensively presents 2026's most prominent silver jewelry trends, styling tips, and investment-worthy pieces."] },
      { id: "trends", heading: "2026's 8 Standout Trends", paragraphs: ["The trends shaping showcases and wardrobes this year:"], widget: "trends" },
      { id: "chunky", heading: "1. Chunky & Bold Chains", paragraphs: ["Thick, statement chain necklaces and bracelets are 2026's most dominant trend. Cuban link, curb chain, and paper clip chains lead. A single bold piece contrasting minimal clothing is the new 'less is more.'", "In men's fashion, chunky silver chains are surging — gender-neutral designs are embraced across genders."] },
      { id: "mixed", heading: "2. Mixed Metals: Silver + Gold", paragraphs: ["The single-metal rule is officially dead. In 2026, intentionally mixing silver and gold is the biggest style move. Two-tone rings, layered silver-gold necklaces, and mixed bracelet sets are filling showcases.", "Tip: Maintaining 60-70% silver weight in the mix ensures cool-toned cohesion. Gold accent pieces add eye-catching warmth."] },
      { id: "minimal", heading: "3. Ultra-Minimal & Whisper Jewelry", paragraphs: ["As chunky's counterpoint, ultra-thin 'whisper jewelry' is also strong. Fine chains (0.5-1mm), micro pendants, and baby hoop earrings form the foundation of everyday elegance.", "This trend is especially preferred in professional settings — elegant yet noticeable, never aggressive."] },
      { id: "sustainable", heading: "4. Sustainable & Recycled Silver", paragraphs: ["With rising environmental awareness, demand for recycled silver has exploded. Major brands are transitioning to 100% recycled 925 sterling silver.", "Consumers, especially Gen Z and millennials, are questioning their jewelry's environmental footprint. RJC-certified sustainable silver is preferred.", "Note: Recycled silver quality is identical to newly mined silver — no purity difference after refining."] },
      { id: "stones", heading: "5. Natural Stone & Silver Combinations", paragraphs: ["Turquoise, moonstone, labradorite, and amethyst are meeting silver. The 'boho-luxe' aesthetic is strong in Western European and North American markets.", "Turkey's traditional stone-silver combination (especially Mardin filigree + stones) offers a natural response to this global trend."] },
      { id: "personal", heading: "6. Personalized & Initial Jewelry", paragraphs: ["Name necklaces, initial rings, birthstone pieces, and coordinate bracelets reflect the personalization trend in silver. Laser engraving and 3D printing make affordable customization possible.", "The 'nameplate necklace' trend on Instagram and TikTok is going viral among younger consumers."] },
      { id: "vintage", heading: "7. Vintage Revival & Ottoman Inspiration", paragraphs: ["Modern designs inspired by antique and vintage silver are strong. Ottoman motifs, Seljuk geometry, Art Deco lines, and 70s bohemian aesthetics are being reinterpreted.", "Turkish designers are pioneers — brands like İstanbul Gümüş attract international attention with collections merging Ottoman heritage with contemporary forms."] },
      { id: "mens", heading: "8. Men's Silver Jewelry Explosion", paragraphs: ["The men's silver jewelry market is growing faster than women's. Signet rings, chain bracelets, pendant necklaces, and cufflinks are becoming men's fashion essentials.", "K-pop, hip-hop culture, and social media influencers are accelerating this trend globally."] },
      { id: "investment", heading: "Investment Value in Trend Pieces", paragraphs: ["Some trend pieces carry investment potential beyond fashion value. Limited edition designer collections, vintage Mexican silver (Taxco, 1940-70 era), and signed artist pieces may appreciate over time.", "However, jewelry investment differs from raw silver — craftsmanship premium, brand value, and trend cycles affect pricing. Acquire jewelry primarily for enjoyment; appreciation is a bonus."] },
    ],
    faq: { heading: "FAQ", items: [
      { q: "What's the most popular 2026 silver trend?", a: "Chunky chains and mixed metals (silver+gold) are the two most dominant trends. Sustainable silver is also rising fast." },
      { q: "Is recycled silver quality good?", a: "Yes, after refining there is no quality difference between recycled and newly mined silver." },
      { q: "Can silver jewelry be an investment?", a: "Limited edition designer pieces can appreciate, but jewelry investment differs from raw silver. Priority should be enjoyment." },
    ]},
    sources: { heading: "Sources", items: ["Vogue — Spring/Summer 2026 Jewelry Trends", "CIBJO — World Jewellery Trend Report", "The Silver Institute — Consumer Demand 2025", "Business of Fashion — The Silver Comeback"] },
    related: { heading: "Related", items: [{ title: "Men's Accessories Guide", path: "/en/fashion/mens-accessories", cat: "Fashion" }, { title: "Silver vs Gold", path: "/en/fashion/silver-vs-gold", cat: "Fashion" }] },
    sponsor: { text: "Discover 2026 trends in İstanbul Gümüş collections.", cta: "View on Instagram", note: "This content is supported by İstanbul Gümüş." },
    trendData: [
      { name: "Chunky & Bold", desc: "Thick chains, Cuban link, statement", heat: 5, icon: "⛓️" },
      { name: "Mixed Metals", desc: "Intentional silver + gold mixing", heat: 5, icon: "🔗" },
      { name: "Ultra-Minimal", desc: "Whisper jewelry, fine chains, micro", heat: 4, icon: "✨" },
      { name: "Sustainable", desc: "Recycled, RJC-certified silver", heat: 5, icon: "♻️" },
      { name: "Natural Stones", desc: "Turquoise, moonstone, amethyst", heat: 4, icon: "💎" },
      { name: "Personalization", desc: "Name necklace, initials, coordinates", heat: 4, icon: "✍️" },
      { name: "Vintage Revival", desc: "Ottoman, Art Deco, 70s inspired", heat: 3, icon: "🏛️" },
      { name: "Men's Silver", desc: "Signet, chain, pendant explosion", heat: 5, icon: "👔" },
    ],
    trendTitle: "2026 Silver Jewelry Trend Map",
    darkMode: "Mode", toc: "Contents",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة المعرفة بالفضة",
    breadcrumb: ["الرئيسية", "الموضة", "اتجاهات مجوهرات الفضة ٢٠٢٦"],
    category: "الموضة",
    title: "اتجاهات مجوهرات الفضة ٢٠٢٦",
    subtitle: "من السلاسل الضخمة إلى الفضة المستدامة — أبرز اتجاهات مجوهرات الفضة هذا العام",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "٩ دقائق قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["٢٠٢٦ عام ذهبي للفضة. من أسابيع الموضة إلى أسلوب الشارع، الفضة في كل مكان — تتحدى هيمنة الذهب بنغماتها الباردة وسعرها المتاح."] },
      { id: "trends", heading: "٨ اتجاهات بارزة في ٢٠٢٦", paragraphs: ["الاتجاهات التي تشكل الواجهات وخزانات الملابس:"], widget: "trends" },
      { id: "chunky", heading: "١. سلاسل ضخمة وجريئة", paragraphs: ["سلاسل القلائد والأساور السميكة الجريئة هي الاتجاه الأكثر هيمنة.", "في أزياء الرجال أيضاً تصاميم محايدة الجنس."] },
      { id: "mixed", heading: "٢. خلط المعادن: فضة + ذهب", paragraphs: ["قاعدة المعدن الواحد انتهت رسمياً. خواتم ثنائية اللون وقلائد متدرجة وأطقم أساور مختلطة.", "نصيحة: الحفاظ على ٦٠-٧٠٪ فضة يضمن تناسقاً بارد اللون."] },
      { id: "minimal", heading: "٣. الحد الأدنى والمجوهرات الهامسة", paragraphs: ["سلاسل رفيعة جداً وتعليقات صغيرة للأناقة اليومية.", "مفضلة خاصة في بيئات العمل والمناسبات الرسمية."] },
      { id: "sustainable", heading: "٤. الفضة المستدامة والمعاد تدويرها", paragraphs: ["طلب الفضة المعاد تدويرها انفجر. العلامات الكبرى تتحول لـ١٠٠٪ فضة معاد تدويرها.", "جيل Z والألفية يتساءلون عن البصمة البيئية لمجوهراتهم.", "ملاحظة: جودة الفضة المعاد تدويرها مطابقة للجديدة — لا فرق بعد التكرير."] },
      { id: "stones", heading: "٥. أحجار طبيعية + فضة", paragraphs: ["الفيروز وحجر القمر واللابرادوريت والأماثيست مع الفضة. جمالية 'بوهو-فاخر' قوية."] },
      { id: "personal", heading: "٦. مجوهرات مخصصة", paragraphs: ["قلائد الأسماء وخواتم الأحرف وأحجار الميلاد والإحداثيات. الحفر بالليزر والطباعة ثلاثية الأبعاد."] },
      { id: "vintage", heading: "٧. إحياء الفينتاج والإلهام العثماني", paragraphs: ["تصاميم حديثة مستوحاة من الفضة العتيقة — زخارف عثمانية وهندسة سلجوقية وآرت ديكو.", "المصممون الأتراك رواد هذا الاتجاه — إسطنبول غوموش تجذب الانتباه الدولي."] },
      { id: "mens", heading: "٨. انفجار مجوهرات الرجال", paragraphs: ["سوق مجوهرات الرجال الفضية ينمو أسرع من النساء. خواتم الختم وأساور السلسلة والقلائد أصبحت أساسية."] },
      { id: "investment", heading: "قيمة استثمارية في القطع الرائجة", paragraphs: ["بعض القطع تحمل إمكانات استثمارية. المجموعات المحدودة والفضة المكسيكية القديمة قد تزداد قيمتها.", "لكن استثمار المجوهرات يختلف عن الفضة الخام. اقتنوا المجوهرات للمتعة أولاً."] },
    ],
    faq: { heading: "الأسئلة الشائعة", items: [
      { q: "ما أشهر اتجاه فضة في ٢٠٢٦؟", a: "السلاسل الضخمة وخلط المعادن (فضة+ذهب). الفضة المستدامة أيضاً في صعود سريع." },
      { q: "هل الفضة المعاد تدويرها جيدة الجودة؟", a: "نعم، لا فرق في الجودة بعد التكرير." },
    ]},
    sources: { heading: "المصادر", items: ["Vogue — اتجاهات مجوهرات ربيع/صيف ٢٠٢٦", "CIBJO — تقرير اتجاهات المجوهرات العالمية", "The Silver Institute — تحليل طلب المستهلك"] },
    related: { heading: "مواضيع ذات صلة", items: [{ title: "دليل إكسسوارات الرجال", path: "/ar/fashion/mens-accessories", cat: "الموضة" }, { title: "الفضة أم الذهب؟", path: "/ar/fashion/silver-vs-gold", cat: "الموضة" }] },
    sponsor: { text: "اكتشفوا اتجاهات ٢٠٢٦ في مجموعات إسطنبول غوموش.", cta: "شاهد على إنستغرام", note: "هذا المحتوى مدعوم من إسطنبول غوموش." },
    trendData: [
      { name: "ضخم وجريء", desc: "سلاسل سميكة، كوبان لينك", heat: 5, icon: "⛓️" },
      { name: "خلط المعادن", desc: "فضة + ذهب مقصود", heat: 5, icon: "🔗" },
      { name: "الحد الأدنى", desc: "مجوهرات هامسة، سلاسل رفيعة", heat: 4, icon: "✨" },
      { name: "مستدام", desc: "معاد تدويره، شهادة RJC", heat: 5, icon: "♻️" },
      { name: "أحجار طبيعية", desc: "فيروز، حجر قمر، أماثيست", heat: 4, icon: "💎" },
      { name: "مخصص", desc: "قلائد أسماء، أحرف", heat: 4, icon: "✍️" },
      { name: "إحياء فينتاج", desc: "عثماني، آرت ديكو، سبعينات", heat: 3, icon: "🏛️" },
      { name: "فضة الرجال", desc: "ختم، سلسلة، انفجار", heat: 5, icon: "👔" },
    ],
    trendTitle: "خريطة اتجاهات مجوهرات الفضة ٢٠٢٦",
    darkMode: "الوضع", toc: "المحتويات",
  },
};

function TrendCards({ data, title, dark }) {
  const textP=dark?"#e8e8ec":"#2C2C2C"; const textS=dark?"#9a9aaa":"#6B7280"; const gold="#D4AF37"; const border=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)";
  const heatColor = h => h>=5?"#f87171":h>=4?"#FFB86C":"#4ade80";
  return (
    <div style={{margin:"20px 0"}}>
      <div style={{fontSize:14,fontWeight:600,color:textP,marginBottom:16}}>{title}</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:10}}>
        {data.map((t,i)=>(
          <div key={i} style={{padding:"16px",borderRadius:12,border:`1px solid ${border}`,background:dark?"rgba(192,192,192,0.02)":"rgba(192,192,192,0.04)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
              <span style={{fontSize:24}}>{t.icon}</span>
              <div style={{display:"flex",gap:2}}>{[...Array(5)].map((_,j)=><div key={j} style={{width:8,height:8,borderRadius:"50%",background:j<t.heat?heatColor(t.heat):(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)")}}/>)}</div>
            </div>
            <div style={{fontSize:13,fontWeight:600,color:textP,marginBottom:4}}>{t.name}</div>
            <div style={{fontSize:11,color:textS,lineHeight:1.4}}>{t.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TrendsArticle() {
  const [lang,setLang]=useState("tr"); const [dark,setDark]=useState(true); const [openFaq,setOpenFaq]=useState(null);
  const t=T[lang]; const isRTL=lang==="ar";
  const bgP=dark?"#0f0f14":"#FAFAF5"; const bgCard=dark?"#1a1a24":"#fff"; const textP=dark?"#e8e8ec":"#2C2C2C"; const textS=dark?"#9a9aaa":"#6B7280"; const accent=dark?"#C0C0C0":"#708090"; const gold="#D4AF37"; const border=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)"; const fontD="'Playfair Display',Georgia,serif"; const fontB=lang==="ar"?"'Noto Naskh Arabic',serif":"'Source Sans 3',sans-serif";

  return (
    <div dir={isRTL?"rtl":"ltr"} style={{fontFamily:fontB,background:bgP,color:textP,minHeight:"100vh"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*{margin:0;padding:0;box-sizing:border-box}::selection{background:rgba(192,192,192,0.3)}`}</style>
      <nav style={{position:"sticky",top:0,zIndex:100,background:dark?"rgba(15,15,20,0.88)":"rgba(250,250,245,0.88)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${border}`,padding:"0 24px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"}}><div style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:16}}>{t.nav}</span></div><div style={{display:"flex",alignItems:"center",gap:12}}><div style={{display:"flex",gap:2,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)",borderRadius:7,padding:2}}>{["tr","en","ar"].map(l=><button key={l} onClick={()=>setLang(l)} style={{border:"none",cursor:"pointer",padding:"3px 9px",borderRadius:5,fontSize:11,fontWeight:lang===l?600:400,fontFamily:l==="ar"?"'Noto Naskh Arabic',serif":fontB,background:lang===l?(dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.08)"):"transparent",color:lang===l?textP:textS}}>{l==="ar"?"عر":l.toUpperCase()}</button>)}</div><button onClick={()=>setDark(!dark)} style={{border:"none",cursor:"pointer",background:"transparent",color:textS,fontSize:16,padding:4}}>{dark?"☀️":"🌙"}</button></div></nav>
      <div style={{maxWidth:760,margin:"0 auto",padding:"16px 24px 0",display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",fontSize:12,color:textS}}>{t.breadcrumb.map((item,i)=><span key={i} style={{display:"flex",alignItems:"center",gap:6}}>{i>0&&<span style={{opacity:0.4}}>{isRTL?"‹":"›"}</span>}<a href="#" style={{color:i===t.breadcrumb.length-1?textP:textS,textDecoration:"none",fontWeight:i===t.breadcrumb.length-1?500:400}}>{item}</a></span>)}</div>
      <article style={{maxWidth:760,margin:"0 auto",padding:"32px 24px 64px",animation:"fadeUp 0.6s ease both"}}>
        <div style={{marginBottom:36}}><div style={{display:"inline-block",padding:"3px 12px",borderRadius:6,fontSize:11,fontWeight:600,letterSpacing:"0.04em",color:gold,border:`1px solid ${gold}33`,marginBottom:16}}>{t.category}</div><h1 style={{fontFamily:fontD,fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.15,marginBottom:12}}>{t.title}</h1><p style={{fontSize:16,color:textS,lineHeight:1.6,marginBottom:20}}>{t.subtitle}</p><div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",fontSize:13,color:textS,paddingBottom:20,borderBottom:`1px solid ${border}`}}><span>{t.meta.author}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.date}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.readTime}</span></div></div>
        <div style={{height:220,borderRadius:16,marginBottom:36,overflow:"hidden",background:dark?"linear-gradient(135deg,#1a1a2e,#2a2a3e,#1a1a2e)":"linear-gradient(135deg,#e8e8e8,#d0d0d0,#e8e8e8)",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{textAlign:"center"}}><div style={{fontFamily:fontD,fontSize:52,fontWeight:700,background:`linear-gradient(135deg,${accent},${gold})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>2026</div><div style={{fontSize:12,color:textS,letterSpacing:"0.15em",marginTop:4}}>SILVER JEWELRY TRENDS</div></div></div>

        {t.sections.map(sec=>(<section key={sec.id} style={{marginBottom:36}}>{sec.heading&&<h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:16,paddingTop:8}}>{sec.heading}</h2>}{sec.paragraphs.map((p,pi)=><p key={pi} style={{fontSize:15,lineHeight:1.8,color:textS,marginBottom:14}}>{p}</p>)}{sec.widget==="trends"&&<TrendCards data={t.trendData} title={t.trendTitle} dark={dark}/>}</section>))}
        <section style={{marginBottom:36,marginTop:48}}><h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:20}}>{t.faq.heading}</h2><div style={{display:"flex",flexDirection:"column",gap:8}}>{t.faq.items.map((item,i)=>(<div key={i} style={{border:`1px solid ${openFaq===i?gold+"44":border}`,borderRadius:12,overflow:"hidden",background:openFaq===i?(dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.04)"):"transparent"}}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{width:"100%",border:"none",cursor:"pointer",background:"transparent",padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",color:textP,fontSize:14,fontWeight:500,fontFamily:fontB,textAlign:isRTL?"right":"left",gap:12}}><span style={{flex:1}}>{item.q}</span><span style={{fontSize:18,color:textS,transform:openFaq===i?"rotate(45deg)":"rotate(0)",flexShrink:0}}>+</span></button>{openFaq===i&&<div style={{padding:"0 20px 16px",fontSize:14,lineHeight:1.7,color:textS}}>{item.a}</div>}</div>))}</div></section>
        <section style={{marginBottom:36,padding:"20px 24px",background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)",borderRadius:12,border:`1px solid ${border}`}}><h3 style={{fontSize:15,fontWeight:600,marginBottom:12}}>{t.sources.heading}</h3>{t.sources.items.map((s,i)=><div key={i} style={{fontSize:13,color:textS,lineHeight:1.6,marginBottom:6,display:"flex",gap:8}}><span style={{color:accent,fontWeight:600,flexShrink:0}}>[{i+1}]</span><span>{s}</span></div>)}</section>
        <section style={{marginBottom:40}}><h3 style={{fontSize:18,fontFamily:fontD,fontWeight:600,marginBottom:16}}>{t.related.heading}</h3><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:12}}>{t.related.items.map((item,i)=><a key={i} href={item.path} style={{textDecoration:"none",padding:"16px 18px",border:`1px solid ${border}`,borderRadius:12,background:bgCard,display:"block"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=gold+"44"}} onMouseLeave={e=>{e.currentTarget.style.borderColor=border}}><div style={{fontSize:10,color:gold,fontWeight:600,marginBottom:6,letterSpacing:"0.04em"}}>{item.cat}</div><div style={{fontSize:14,fontWeight:500,color:textP}}>{item.title}</div><div style={{fontSize:12,color:textS,marginTop:6}}>{isRTL?"←":"→"}</div></a>)}</div></section>
        <div style={{border:`1px solid ${gold}22`,borderRadius:16,padding:"28px 24px",background:dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.05)",textAlign:"center"}}><p style={{fontSize:15,color:textP,marginBottom:16,lineHeight:1.6}}>{t.sponsor.text}</p><a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"10px 24px",borderRadius:10,background:`linear-gradient(135deg,${accent},${gold})`,color:"#0f0f14",fontSize:13,fontWeight:600,textDecoration:"none"}}>📸 {t.sponsor.cta}</a><p style={{fontSize:11,color:textS,marginTop:14,opacity:0.7}}>{t.sponsor.note}</p></div>
      </article>
      <footer style={{borderTop:`1px solid ${border}`,padding:"24px",textAlign:"center",background:dark?"#0c0c10":"#f5f5f0"}}><div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:8}}><div style={{width:22,height:22,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:14}}>{t.nav}</span></div><p style={{fontSize:11,color:textS}}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p></footer>
    </div>
  );
}
