import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Piyasa", "Gümüş Fiyat Tarihi"],
    category: "Piyasa",
    title: "Gümüş Fiyat Tarihi: 50 Yıllık Trend Analizi",
    subtitle: "1975'ten günümüze gümüş fiyat hareketleri, krizler, rekorlar ve gelecek projeksiyonları",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "11 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Gümüş fiyatı, son 50 yılda dramatik yükselişler ve çöküşler yaşamıştır. 1980'de 49,45$'a fırlayan, 1991'de 3,50$'a düşen, 2011'de tekrar 49,51$'a yükselen gümüş, yatırım dünyasının en volatil değerli metallerinden biridir.",
          "Bu makale, gümüş fiyat tarihinin kilometre taşlarını, fiyatı etkileyen makroekonomik faktörleri ve geleceğe yönelik trendleri kapsamlı şekilde analiz etmektedir. Herhangi bir yatırım tavsiyesi içermez.",
        ],
      },
      {
        id: "milestones", heading: "Tarihî Fiyat Kilometre Taşları",
        paragraphs: ["Gümüş fiyatının son 50 yılındaki kritik dönüm noktaları:"],
        widget: "milestones",
      },
      {
        id: "hunt", heading: "1979-1980: Hunt Brothers Krizi",
        paragraphs: [
          "Modern gümüş fiyat tarihinin en dramatik olayı, Teksaslı milyarder Hunt kardeşlerin (Nelson Bunker ve William Herbert) gümüş piyasasını manipüle etme girişimidir. 1979 sonlarında dünya gümüş arzının tahminen üçte birini kontrol eden Hunt'lar, fiyatı ons başına 49,45$'a kadar tırmandırdı.",
          "18 Ocak 1980'de gümüş tarihî zirvesine ulaştı. Ancak COMEX ve CBOT borsalarının 'yalnızca tasfiye amaçlı' işlem kuralı getirmesiyle (Silver Rule 7) fiyat çöktü. 27 Mart 1980 — 'Gümüş Perşembesi' (Silver Thursday) — tek günde %50 düşüş yaşandı.",
          "Hunt kardeşler iflasla yüz yüze geldi ve piyasa manipülasyonundan mahkûm oldu. Bu olay, emtia piyasalarında düzenleme mekanizmalarının güçlendirilmesine yol açtı.",
        ],
      },
      {
        id: "karanlik", heading: "1982-2003: Karanlık Yıllar",
        paragraphs: [
          "Hunt krizi sonrası gümüş, yaklaşık 20 yıl boyunca 4-6$ aralığında seyretmiştir. Bu dönemde gümüş, yatırım camiasında 'ölü varlık' olarak nitelendirilmiştir.",
          "Fiyatı baskılayan faktörler: yüksek reel faiz oranları, düşük enflasyon, fotoğrafçılık sektöründe dijital geçiş (gümüş talebini azalttı), merkez bankalarının gümüş stokları satması.",
          "1991'de gümüş fiyatı ons başına 3,50$'a kadar düşmüştür — enflasyona göre ayarlandığında tarihî dip. Altın/gümüş oranı 100:1'e ulaştı — tarihî ortalamanın çok üzerinde.",
        ],
      },
      {
        id: "yukselis", heading: "2003-2011: Büyük Yükseliş",
        paragraphs: [
          "2003'ten itibaren emtia süper döngüsü ile birlikte gümüş fiyatı güçlü bir yükseliş trendine girmiştir. Çin'in sanayileşmesi, yükselen piyasa talebi ve düşük faiz oranları itici güçlerdi.",
          "2008 küresel mali krizi gümüşü kısa süreli 8,88$'a düşürdü, ancak ardından merkez bankalarının parasal genişleme (QE) politikaları gümüşü roket gibi fırlattı.",
          "28 Nisan 2011'de gümüş ons başına 49,51$'a ulaştı — 1980 rekorunu nominal olarak geçti (enflasyona göre ayarlanmış rekor hâlâ 1980'e aittir). Ardından sert düzeltme ile 2015'te 13,71$'a geriledi.",
        ],
      },
      {
        id: "covid", heading: "2020-2025: Pandemi ve Yeşil Dönüşüm",
        paragraphs: [
          "COVID-19 pandemisi başlangıçta gümüşü 11,64$'a düşürdü (Mart 2020), ancak mali teşvik paketleri ve güvenli liman talebiyle Ağustos 2020'de 29,26$'a yükseldi.",
          "2021-2023 döneminde gümüş 18-26$ aralığında konsolide olmuştur. Bu dönemde güneş paneli talebinin patlayıcı büyümesi, gümüş arz-talep dengesini yapısal olarak değiştirmiştir.",
          "2024-2025'te gümüş fiyatı yeşil enerji dönüşümü, merkez bankası politikaları ve jeopolitik belirsizlikler ekseninde hareket etmektedir. Endüstriyel talebin yapısal artışı, gümüş için uzun vadeli boğa tezi oluşturmaktadır.",
        ],
      },
      {
        id: "faktorler", heading: "Fiyatı Belirleyen Temel Faktörler",
        paragraphs: [
          "Gümüş fiyatı çok sayıda makroekonomik ve sektörel faktörden etkilenir:",
        ],
        widget: "factors",
      },
      {
        id: "altin-oran", heading: "Altın/Gümüş Oranı Trendleri",
        paragraphs: [
          "Altın/gümüş oranı (bir ons altının kaç ons gümüşe eşit olduğu), yatırımcıların gümüşün relatif değerini ölçmek için kullandığı temel metriktir.",
          "Tarihsel ortanca değer: ~60. Son 50 yıldaki aşırı uçlar: 100:1 (1991, gümüş çok ucuz) ve 31:1 (2011, gümüş pahalı). 2020 Mart'ta COVID paniğiyle oran 124:1'e fırlamıştır — tarihî rekor.",
          "Genel kural: oran 80'in üzerindeyken gümüş 'relatif ucuz', 50'nin altındayken 'relatif pahalı' kabul edilir. Bu basit metrik, uzun vadeli yatırımcılar için bir giriş-çıkış sinyali olarak kullanılmaktadır.",
        ],
      },
      {
        id: "gelecek", heading: "Geleceğe Yönelik Projeksiyonlar",
        paragraphs: [
          "Gümüş fiyatının geleceğine ilişkin uzun vadeli tezler iki ana eksende şekillenmektedir:",
          "Boğa tezi: Güneş paneli + EV + 5G'nin yapısal talep artışı, azalan maden keşifleri, düşen cevher kalitesi, yeşil enerji sübvansiyonları ve merkez bankalarının genişlemeci politikaları gümüşü destekleyici faktörlerdir.",
          "Ayı tezi: Gümüş ikame teknolojileri (bakır pasta PV'de, dijital fotoğrafçılık), ekonomik yavaşlama riski, yüksek reel faiz oranları ve geri dönüşüm arzının artması baskılayıcı faktörlerdir.",
          "Analist konsensüsü: Orta vadede (3-5 yıl) gümüşün endüstriyel talep desteğiyle 25-40$ aralığında seyretmesi beklenmekte, ancak makroekonomik koşullara bağlı olarak geniş dalgalanmalar yaşanabilir.",
        ],
      },
    ],
    disclaimer: "⚠️ Bu içerik yalnızca bilgilendirme amaçlıdır ve yatırım tavsiyesi niteliği taşımaz.",
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Gümüşün tarihî en yüksek fiyatı nedir?", a: "Nominal olarak 49,51$/ons (Nisan 2011). Enflasyona göre ayarlanmış gerçek rekor 1980'deki 49,45$'a aittir (bugünkü değerle ~$150)." },
        { q: "Gümüş neden altından daha volatildir?", a: "Gümüş piyasası altından çok daha küçüktür (~1/10 boyutunda). Küçük piyasalar büyük fiyat hareketlerine daha yatkındır. Ayrıca gümüşün endüstriyel talep bileşeni, ekonomik döngülere daha hassas kılar." },
        { q: "Hunt Brothers krizi nedir?", a: "1979-1980'de Hunt kardeşlerin gümüş piyasasını manipüle etme girişimi. Fiyat 49,45$'a çıktı, ardından 'Gümüş Perşembesi'nde çöktü." },
        { q: "Altın/gümüş oranı ne anlama gelir?", a: "Bir ons altının kaç ons gümüşe eşit olduğunu gösterir. Yüksek oran (>80) gümüşün ucuz, düşük oran (<50) pahalı olduğuna işaret eder." },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "Kitco — Historical Silver Price Data",
        "LBMA — London Silver Fix Archive",
        "CME Group — COMEX Silver Futures Historical",
        "William Silber — \"The Story of Silver\" (Princeton UP, 2019)",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "Gümüş Yatırım Rehberi", path: "/tr/piyasa/yatirim", cat: "Piyasa" },
        { title: "Arz-Talep Dinamikleri", path: "/tr/piyasa/arz-talep", cat: "Piyasa" },
        { title: "Piyasa Paneli", path: "/tr/araclar/piyasa", cat: "Araçlar" },
      ],
    },
    sponsor: {
      text: "Gümüşün değer yolculuğunu takı formunda deneyimleyin.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    milestoneData: [
      { year: "1975", price: "4,35$", event: "ABD'de altın/gümüş bireysel mülkiyeti serbest", icon: "🔓", trend: "up" },
      { year: "1980", price: "49,45$", event: "Hunt Brothers — tarihî zirve", icon: "🚀", trend: "up" },
      { year: "1982", price: "4,98$", event: "Kriz sonrası çöküş", icon: "📉", trend: "down" },
      { year: "1991", price: "3,50$", event: "Tarihî dip — altın/gümüş oranı 100:1", icon: "⬇️", trend: "down" },
      { year: "2003", price: "4,87$", event: "Emtia süper döngüsü başlangıcı", icon: "🔄", trend: "up" },
      { year: "2008", price: "8,88$", event: "Küresel mali kriz dibi", icon: "💥", trend: "down" },
      { year: "2011", price: "49,51$", event: "QE rallisi — nominal rekor", icon: "🏆", trend: "up" },
      { year: "2015", price: "13,71$", event: "Düzeltme sonrası dip", icon: "📊", trend: "down" },
      { year: "2020", price: "11,64$", event: "COVID-19 paniği (Mart)", icon: "🦠", trend: "down" },
      { year: "2020", price: "29,26$", event: "Pandemi rallisi (Ağustos)", icon: "📈", trend: "up" },
      { year: "2024", price: "28-32$", event: "Yeşil enerji + jeopolitik talep", icon: "☀️", trend: "up" },
    ],
    milestoneTitle: "Gümüş Fiyat Tarihi Kilometre Taşları",
    factorData: [
      { name: "Dolar Endeksi (DXY)", effect: "Ters korelasyon", desc: "Güçlü dolar → gümüş düşer" },
      { name: "Reel Faiz Oranı", effect: "Ters korelasyon", desc: "Yüksek reel faiz → gümüş düşer" },
      { name: "Enflasyon Beklentisi", effect: "Pozitif korelasyon", desc: "Yükselen enflasyon → gümüş yükselir" },
      { name: "Endüstriyel Talep", effect: "Pozitif korelasyon", desc: "Güneş paneli/EV büyümesi → gümüş yükselir" },
      { name: "Altın Fiyatı", effect: "Pozitif korelasyon", desc: "Altın yükselirse gümüş genellikle takip eder" },
      { name: "Jeopolitik Risk", effect: "Pozitif korelasyon", desc: "Belirsizlik → güvenli liman talebi" },
    ],
    factorTitle: "Gümüş Fiyatını Etkileyen Temel Faktörler",
    darkMode: "Mod", toc: "İçindekiler",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Market", "Silver Price History"],
    category: "Market",
    title: "Silver Price History: 50-Year Trend Analysis",
    subtitle: "Silver price movements from 1975 to today — crises, records, and future projections",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "11 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Silver prices have experienced dramatic rises and crashes over the past 50 years. Surging to $49.45 in 1980, dropping to $3.50 in 1991, and climbing back to $49.51 in 2011, silver is one of the most volatile precious metals.",
        "This article analyzes the milestones of silver price history, macroeconomic factors affecting prices, and future trends. It does not constitute investment advice.",
      ]},
      { id: "milestones", heading: "Historical Price Milestones", paragraphs: ["Critical turning points in silver's price over the past 50 years:"], widget: "milestones" },
      { id: "hunt", heading: "1979-1980: The Hunt Brothers Crisis", paragraphs: [
        "Modern silver's most dramatic event was the Hunt brothers' (Nelson Bunker and William Herbert) attempt to manipulate the silver market. By late 1979, controlling an estimated one-third of world silver supply, the Hunts drove prices to $49.45/oz.",
        "On January 18, 1980, silver reached its all-time high. But COMEX and CBOT imposed 'liquidation-only' trading rules (Silver Rule 7), causing prices to crash. March 27, 1980 — 'Silver Thursday' — saw a 50% single-day drop.",
        "The Hunt brothers faced bankruptcy and were convicted of market manipulation. The event led to strengthened commodity market regulation.",
      ]},
      { id: "dark", heading: "1982-2003: The Dark Years", paragraphs: [
        "After the Hunt crisis, silver traded in the $4-6 range for approximately 20 years, labeled a 'dead asset' by the investment community.",
        "Factors suppressing prices: high real interest rates, low inflation, digital transition in photography (reducing silver demand), and central bank silver stock sales.",
        "In 1991, silver hit $3.50/oz — an inflation-adjusted all-time low. The gold/silver ratio reached 100:1, far above the historical average.",
      ]},
      { id: "bull", heading: "2003-2011: The Great Rally", paragraphs: [
        "From 2003, the commodity super-cycle lifted silver into a strong uptrend. China's industrialization, emerging market demand, and low interest rates were driving forces.",
        "The 2008 global financial crisis briefly dropped silver to $8.88, but central banks' quantitative easing (QE) policies then rocketed silver upward.",
        "On April 28, 2011, silver reached $49.51/oz — nominally surpassing the 1980 record. A sharp correction followed, retreating to $13.71 by 2015.",
      ]},
      { id: "covid", heading: "2020-2025: Pandemic and Green Transition", paragraphs: [
        "COVID-19 initially dropped silver to $11.64 (March 2020), but fiscal stimulus and safe-haven demand pushed it to $29.26 by August 2020.",
        "During 2021-2023, silver consolidated in the $18-26 range. Solar panel demand's explosive growth structurally changed the supply-demand balance.",
        "In 2024-2025, silver prices are driven by the green energy transition, central bank policies, and geopolitical uncertainties.",
      ]},
      { id: "factors", heading: "Key Price Drivers", paragraphs: ["Silver prices are influenced by numerous macroeconomic and sectoral factors:"], widget: "factors" },
      { id: "ratio", heading: "Gold/Silver Ratio Trends", paragraphs: [
        "The gold/silver ratio is the primary metric investors use to measure silver's relative value.",
        "Historical median: ~60. Past 50-year extremes: 100:1 (1991, silver very cheap) and 31:1 (2011, silver expensive). In March 2020, COVID panic pushed the ratio to 124:1 — an all-time record.",
        "General rule: ratio above 80 signals silver is 'relatively cheap'; below 50 signals 'relatively expensive.' This simple metric serves as an entry/exit signal for long-term investors.",
      ]},
      { id: "future", heading: "Future Projections", paragraphs: [
        "Long-term theses for silver prices center on two axes:",
        "Bull case: Structural demand growth from solar + EV + 5G, declining mine discoveries, falling ore grades, green energy subsidies, and expansionary central bank policies.",
        "Bear case: Silver substitution technologies, economic slowdown risk, high real interest rates, and growing recycling supply.",
        "Analyst consensus: Medium-term (3-5 years), silver is expected to trade in the $25-40 range with industrial demand support, though wide swings are possible.",
      ]},
    ],
    disclaimer: "⚠️ This content is for informational purposes only and does not constitute investment advice.",
    faq: { heading: "Frequently Asked Questions", items: [
      { q: "What is silver's all-time high price?", a: "Nominally $49.51/oz (April 2011). The inflation-adjusted real record belongs to 1980's $49.45 (~$150 in today's dollars)." },
      { q: "Why is silver more volatile than gold?", a: "Silver's market is much smaller than gold's (~1/10 the size). Smaller markets are more prone to large price swings. Silver's industrial demand component also makes it more sensitive to economic cycles." },
      { q: "What was the Hunt Brothers crisis?", a: "In 1979-1980, the Hunt brothers attempted to manipulate the silver market. Prices surged to $49.45, then crashed on 'Silver Thursday.'" },
      { q: "What does the gold/silver ratio mean?", a: "It shows how many ounces of silver equal one ounce of gold. High ratio (>80) suggests silver is cheap; low ratio (<50) suggests expensive." },
    ]},
    sources: { heading: "Sources", items: ["The Silver Institute — \"World Silver Survey 2025\"", "Kitco — Historical Silver Price Data", "LBMA — London Silver Fix Archive", "CME Group — COMEX Historical", "William Silber — \"The Story of Silver\" (2019)"] },
    related: { heading: "Related Topics", items: [
      { title: "Silver Investment Guide", path: "/en/market/investment", cat: "Market" },
      { title: "Supply-Demand Dynamics", path: "/en/market/supply-demand", cat: "Market" },
      { title: "Market Dashboard", path: "/en/tools/market", cat: "Tools" },
    ]},
    sponsor: { text: "Experience silver's value journey in jewelry form.", cta: "View on Instagram", note: "This content is supported by İstanbul Gümüş." },
    milestoneData: [
      { year: "1975", price: "$4.35", event: "US legalizes private gold/silver ownership", icon: "🔓", trend: "up" },
      { year: "1980", price: "$49.45", event: "Hunt Brothers — all-time high", icon: "🚀", trend: "up" },
      { year: "1982", price: "$4.98", event: "Post-crisis collapse", icon: "📉", trend: "down" },
      { year: "1991", price: "$3.50", event: "All-time low — G/S ratio 100:1", icon: "⬇️", trend: "down" },
      { year: "2003", price: "$4.87", event: "Commodity super-cycle begins", icon: "🔄", trend: "up" },
      { year: "2008", price: "$8.88", event: "Global financial crisis bottom", icon: "💥", trend: "down" },
      { year: "2011", price: "$49.51", event: "QE rally — nominal record", icon: "🏆", trend: "up" },
      { year: "2015", price: "$13.71", event: "Post-correction bottom", icon: "📊", trend: "down" },
      { year: "2020", price: "$11.64", event: "COVID-19 panic (March)", icon: "🦠", trend: "down" },
      { year: "2020", price: "$29.26", event: "Pandemic rally (August)", icon: "📈", trend: "up" },
      { year: "2024", price: "$28-32", event: "Green energy + geopolitical demand", icon: "☀️", trend: "up" },
    ],
    milestoneTitle: "Silver Price History Milestones",
    factorData: [
      { name: "Dollar Index (DXY)", effect: "Inverse correlation", desc: "Strong dollar → silver falls" },
      { name: "Real Interest Rate", effect: "Inverse correlation", desc: "High real rates → silver falls" },
      { name: "Inflation Expectations", effect: "Positive correlation", desc: "Rising inflation → silver rises" },
      { name: "Industrial Demand", effect: "Positive correlation", desc: "Solar/EV growth → silver rises" },
      { name: "Gold Price", effect: "Positive correlation", desc: "Gold rises → silver usually follows" },
      { name: "Geopolitical Risk", effect: "Positive correlation", desc: "Uncertainty → safe-haven demand" },
    ],
    factorTitle: "Key Factors Affecting Silver Prices",
    darkMode: "Mode", toc: "Contents",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة المعرفة بالفضة",
    breadcrumb: ["الرئيسية", "السوق", "تاريخ أسعار الفضة"],
    category: "السوق",
    title: "تاريخ أسعار الفضة: تحليل اتجاهات ٥٠ عاماً",
    subtitle: "تحركات أسعار الفضة من ١٩٧٥ إلى اليوم — الأزمات والأرقام القياسية والتوقعات المستقبلية",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١١ دقيقة قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "شهدت أسعار الفضة ارتفاعات وانهيارات دراماتيكية. من ٤٩٫٤٥$ عام ١٩٨٠ إلى ٣٫٥٠$ عام ١٩٩١ ثم ٤٩٫٥١$ عام ٢٠١١.",
        "يحلل هذا المقال معالم تاريخ أسعار الفضة والعوامل المؤثرة والاتجاهات المستقبلية. لا يشكل نصيحة استثمارية.",
      ]},
      { id: "milestones", heading: "معالم الأسعار التاريخية", paragraphs: ["نقاط التحول الحاسمة:"], widget: "milestones" },
      { id: "hunt", heading: "١٩٧٩-١٩٨٠: أزمة الأخوين هانت", paragraphs: [
        "محاولة الأخوين هانت التلاعب بسوق الفضة — سيطرا على ثلث العرض العالمي ودفعا السعر إلى ٤٩٫٤٥$.",
        "في ٢٧ مارس ١٩٨٠ ('خميس الفضة') انهار السعر ٥٠٪ في يوم واحد بعد فرض قواعد التصفية فقط.",
        "أدى الحدث إلى تعزيز آليات تنظيم أسواق السلع.",
      ]},
      { id: "dark", heading: "١٩٨٢-٢٠٠٣: السنوات المظلمة", paragraphs: [
        "تداولت الفضة في نطاق ٤-٦$ لمدة ٢٠ عاماً تقريباً.",
        "في ١٩٩١ وصل السعر إلى ٣٫٥٠$ — أدنى مستوى تاريخي معدل بالتضخم. بلغت نسبة الذهب/الفضة ١٠٠:١.",
      ]},
      { id: "bull", heading: "٢٠٠٣-٢٠١١: الصعود الكبير", paragraphs: [
        "دورة السلع الفائقة رفعت الفضة في اتجاه صعودي قوي.",
        "في ٢٨ أبريل ٢٠١١ وصلت الفضة إلى ٤٩٫٥١$ — متجاوزة رقم ١٩٨٠ اسمياً.",
        "تبع ذلك تصحيح حاد إلى ١٣٫٧١$ بحلول ٢٠١٥.",
      ]},
      { id: "covid", heading: "٢٠٢٠-٢٠٢٥: الجائحة والتحول الأخضر", paragraphs: [
        "أسقطت كوفيد-١٩ الفضة إلى ١١٫٦٤$ ثم ارتفعت إلى ٢٩٫٢٦$ بحلول أغسطس ٢٠٢٠.",
        "نمو الطلب على الألواح الشمسية غيّر بنيوياً توازن العرض والطلب.",
      ]},
      { id: "factors", heading: "المحركات الرئيسية للأسعار", paragraphs: ["تتأثر أسعار الفضة بعوامل اقتصادية وقطاعية متعددة:"], widget: "factors" },
      { id: "ratio", heading: "اتجاهات نسبة الذهب/الفضة", paragraphs: [
        "المتوسط التاريخي ~٦٠. الحدود القصوى: ١٢٤:١ (مارس ٢٠٢٠ رقم قياسي) و٣١:١ (٢٠١١).",
        "فوق ٨٠ = فضة رخيصة نسبياً. تحت ٥٠ = فضة غالية نسبياً.",
      ]},
      { id: "future", heading: "التوقعات المستقبلية", paragraphs: [
        "الحالة الصعودية: نمو هيكلي في الطلب من الطاقة الشمسية والسيارات الكهربائية.",
        "الحالة الهبوطية: تقنيات بديلة وارتفاع أسعار الفائدة الحقيقية.",
        "إجماع المحللين: نطاق ٢٥-٤٠$ على المدى المتوسط.",
      ]},
    ],
    disclaimer: "⚠️ هذا المحتوى لأغراض المعلومات فقط ولا يشكل نصيحة استثمارية.",
    faq: { heading: "الأسئلة الشائعة", items: [
      { q: "ما أعلى سعر تاريخي للفضة؟", a: "اسمياً ٤٩٫٥١$/أونصة (أبريل ٢٠١١). الرقم القياسي المعدل بالتضخم يعود لعام ١٩٨٠." },
      { q: "لماذا الفضة أكثر تقلباً من الذهب؟", a: "سوق الفضة أصغر بكثير (~عُشر حجم سوق الذهب). الأسواق الصغيرة أكثر عرضة لتقلبات كبيرة." },
    ]},
    sources: { heading: "المصادر", items: ["The Silver Institute — World Silver Survey 2025", "Kitco — بيانات أسعار الفضة التاريخية", "LBMA — أرشيف تسعير الفضة"] },
    related: { heading: "مواضيع ذات صلة", items: [{ title: "دليل الاستثمار في الفضة", path: "/ar/market/investment", cat: "السوق" }] },
    sponsor: { text: "عايشوا رحلة قيمة الفضة في شكل مجوهرات.", cta: "شاهد على إنستغرام", note: "هذا المحتوى مدعوم من إسطنبول غوموش." },
    milestoneData: [
      { year: "١٩٧٥", price: "٤٫٣٥$", event: "تحرير ملكية الذهب/الفضة في أمريكا", icon: "🔓", trend: "up" },
      { year: "١٩٨٠", price: "٤٩٫٤٥$", event: "الأخوان هانت — أعلى مستوى تاريخي", icon: "🚀", trend: "up" },
      { year: "١٩٩١", price: "٣٫٥٠$", event: "أدنى مستوى تاريخي", icon: "⬇️", trend: "down" },
      { year: "٢٠١١", price: "٤٩٫٥١$", event: "رقم قياسي اسمي", icon: "🏆", trend: "up" },
      { year: "٢٠٢٠", price: "١١٫٦٤$", event: "ذعر كوفيد-١٩", icon: "🦠", trend: "down" },
      { year: "٢٠٢٤", price: "٢٨-٣٢$", event: "الطاقة الخضراء + جيوسياسي", icon: "☀️", trend: "up" },
    ],
    milestoneTitle: "معالم تاريخ أسعار الفضة",
    factorData: [
      { name: "مؤشر الدولار", effect: "علاقة عكسية", desc: "دولار قوي = فضة تنخفض" },
      { name: "سعر الفائدة الحقيقي", effect: "علاقة عكسية", desc: "فائدة عالية = فضة تنخفض" },
      { name: "توقعات التضخم", effect: "علاقة طردية", desc: "تضخم مرتفع = فضة ترتفع" },
      { name: "الطلب الصناعي", effect: "علاقة طردية", desc: "نمو الطاقة الشمسية = فضة ترتفع" },
      { name: "سعر الذهب", effect: "علاقة طردية", desc: "الذهب يرتفع = الفضة تتبع" },
      { name: "المخاطر الجيوسياسية", effect: "علاقة طردية", desc: "عدم يقين = طلب ملاذ آمن" },
    ],
    factorTitle: "العوامل الرئيسية المؤثرة على أسعار الفضة",
    darkMode: "الوضع", toc: "المحتويات",
  },
};

// ─── Milestone Timeline Widget ────────────────────────────
function MilestoneTimeline({ data, title, dark }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const accent = dark ? "#C0C0C0" : "#708090";
  const border = dark ? "rgba(192,192,192,0.12)" : "rgba(0,0,0,0.08)";
  return (
    <div style={{ margin: "20px 0" }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: textP, marginBottom: 16 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>
        {data.map((m, i) => (
          <div key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", borderRadius: 12, border: `1px solid ${border}`, background: dark ? "rgba(192,192,192,0.02)" : "rgba(192,192,192,0.04)" }}>
              <div style={{ fontSize: 24, flexShrink: 0 }}>{m.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: textP, fontFamily: "'JetBrains Mono', monospace" }}>{m.year}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: m.trend === "up" ? "#4ade80" : "#f87171", fontFamily: "'JetBrains Mono', monospace" }}>{m.price}</span>
                </div>
                <div style={{ fontSize: 12, color: textS }}>{m.event}</div>
              </div>
              <div style={{ fontSize: 16, color: m.trend === "up" ? "#4ade80" : "#f87171", flexShrink: 0 }}>{m.trend === "up" ? "▲" : "▼"}</div>
            </div>
            {i < data.length - 1 && <div style={{ display: "flex", justifyContent: "center", height: 12 }}><div style={{ width: 2, height: "100%", background: `${accent}22` }} /></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Factor Grid Widget ───────────────────────────────────
function FactorGrid({ data, title, dark }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const gold = "#D4AF37";
  return (
    <div style={{ margin: "20px 0" }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: textP, marginBottom: 16 }}>{title}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
        {data.map((f, i) => (
          <div key={i} style={{ padding: "14px 16px", borderRadius: 12, border: `1px solid ${border}`, background: dark ? "rgba(192,192,192,0.02)" : "rgba(192,192,192,0.04)" }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: textP, marginBottom: 4 }}>{f.name}</div>
            <div style={{ fontSize: 10, fontWeight: 600, color: gold, marginBottom: 6 }}>{f.effect}</div>
            <div style={{ fontSize: 11, color: textS, lineHeight: 1.4 }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PriceHistoryArticle() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);
  const t = T[lang];
  const isRTL = lang === "ar";
  const bgP = dark ? "#0f0f14" : "#FAFAF5";
  const bgCard = dark ? "#1a1a24" : "#ffffff";
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const accent = dark ? "#C0C0C0" : "#708090";
  const gold = "#D4AF37";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const fontD = "'Playfair Display', Georgia, serif";
  const fontB = lang === "ar" ? "'Noto Naskh Arabic', serif" : "'Source Sans 3', sans-serif";

  return (
    <div dir={isRTL?"rtl":"ltr"} style={{fontFamily:fontB,background:bgP,color:textP,minHeight:"100vh"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*{margin:0;padding:0;box-sizing:border-box}::selection{background:rgba(192,192,192,0.3)}`}</style>
      <nav style={{position:"sticky",top:0,zIndex:100,background:dark?"rgba(15,15,20,0.88)":"rgba(250,250,245,0.88)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${border}`,padding:"0 24px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:16}}>{t.nav}</span></div>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{display:"flex",gap:2,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)",borderRadius:7,padding:2}}>{["tr","en","ar"].map(l=><button key={l} onClick={()=>setLang(l)} style={{border:"none",cursor:"pointer",padding:"3px 9px",borderRadius:5,fontSize:11,fontWeight:lang===l?600:400,fontFamily:l==="ar"?"'Noto Naskh Arabic',serif":fontB,background:lang===l?(dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.08)"):"transparent",color:lang===l?textP:textS}}>{l==="ar"?"عر":l.toUpperCase()}</button>)}</div>
          <button onClick={()=>setDark(!dark)} style={{border:"none",cursor:"pointer",background:"transparent",color:textS,fontSize:16,padding:4}}>{dark?"☀️":"🌙"}</button>
        </div>
      </nav>
      <div style={{maxWidth:760,margin:"0 auto",padding:"16px 24px 0",display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",fontSize:12,color:textS}}>{t.breadcrumb.map((item,i)=><span key={i} style={{display:"flex",alignItems:"center",gap:6}}>{i>0&&<span style={{opacity:0.4}}>{isRTL?"‹":"›"}</span>}<a href="#" style={{color:i===t.breadcrumb.length-1?textP:textS,textDecoration:"none",fontWeight:i===t.breadcrumb.length-1?500:400}}>{item}</a></span>)}</div>
      <article style={{maxWidth:760,margin:"0 auto",padding:"32px 24px 64px",animation:"fadeUp 0.6s ease both"}}>
        <div style={{marginBottom:36}}>
          <div style={{display:"inline-block",padding:"3px 12px",borderRadius:6,fontSize:11,fontWeight:600,letterSpacing:"0.04em",color:gold,border:`1px solid ${gold}33`,marginBottom:16}}>{t.category}</div>
          <h1 style={{fontFamily:fontD,fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.15,marginBottom:12}}>{t.title}</h1>
          <p style={{fontSize:16,color:textS,lineHeight:1.6,marginBottom:20}}>{t.subtitle}</p>
          <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",fontSize:13,color:textS,paddingBottom:20,borderBottom:`1px solid ${border}`}}><span>{t.meta.author}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.date}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.readTime}</span></div>
        </div>
        <div style={{height:220,borderRadius:16,marginBottom:36,overflow:"hidden",background:dark?"linear-gradient(135deg,#1a1a2e,#2a2a3e,#1a1a2e)":"linear-gradient(135deg,#e8e8e8,#d0d0d0,#e8e8e8)",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{textAlign:"center"}}>
            <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:48,fontWeight:700,background:`linear-gradient(135deg,#4ade80,${gold})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>$49.51</div>
            <div style={{fontSize:12,color:textS,letterSpacing:"0.12em",marginTop:8}}>ALL-TIME HIGH · APRIL 2011</div>
          </div>
        </div>
        <div style={{padding:"14px 18px",borderRadius:10,background:dark?"rgba(248,113,113,0.06)":"rgba(248,113,113,0.08)",border:"1px solid rgba(248,113,113,0.15)",marginBottom:36,fontSize:13,color:textS,lineHeight:1.6}}>{t.disclaimer}</div>

        {t.sections.map(sec=>(
          <section key={sec.id} style={{marginBottom:36}}>
            {sec.heading&&<h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:16,paddingTop:8}}>{sec.heading}</h2>}
            {sec.paragraphs.map((p,pi)=><p key={pi} style={{fontSize:15,lineHeight:1.8,color:textS,marginBottom:14}}>{p}</p>)}
            {sec.widget==="milestones"&&<MilestoneTimeline data={t.milestoneData} title={t.milestoneTitle} dark={dark}/>}
            {sec.widget==="factors"&&<FactorGrid data={t.factorData} title={t.factorTitle} dark={dark}/>}
          </section>
        ))}

        <section style={{marginBottom:36,marginTop:48}}>
          <h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:20}}>{t.faq.heading}</h2>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {t.faq.items.map((item,i)=>(
              <div key={i} style={{border:`1px solid ${openFaq===i?gold+"44":border}`,borderRadius:12,overflow:"hidden",background:openFaq===i?(dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.04)"):"transparent"}}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{width:"100%",border:"none",cursor:"pointer",background:"transparent",padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",color:textP,fontSize:14,fontWeight:500,fontFamily:fontB,textAlign:isRTL?"right":"left",gap:12}}>
                  <span style={{flex:1}}>{item.q}</span><span style={{fontSize:18,color:textS,transform:openFaq===i?"rotate(45deg)":"rotate(0)",flexShrink:0}}>+</span>
                </button>
                {openFaq===i&&<div style={{padding:"0 20px 16px",fontSize:14,lineHeight:1.7,color:textS}}>{item.a}</div>}
              </div>
            ))}
          </div>
        </section>

        <section style={{marginBottom:36,padding:"20px 24px",background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)",borderRadius:12,border:`1px solid ${border}`}}>
          <h3 style={{fontSize:15,fontWeight:600,marginBottom:12}}>{t.sources.heading}</h3>
          {t.sources.items.map((s,i)=><div key={i} style={{fontSize:13,color:textS,lineHeight:1.6,marginBottom:6,display:"flex",gap:8}}><span style={{color:accent,fontWeight:600,flexShrink:0}}>[{i+1}]</span><span>{s}</span></div>)}
        </section>

        <section style={{marginBottom:40}}>
          <h3 style={{fontSize:18,fontFamily:fontD,fontWeight:600,marginBottom:16}}>{t.related.heading}</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:12}}>
            {t.related.items.map((item,i)=><a key={i} href={item.path} style={{textDecoration:"none",padding:"16px 18px",border:`1px solid ${border}`,borderRadius:12,background:bgCard,display:"block"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=gold+"44"}} onMouseLeave={e=>{e.currentTarget.style.borderColor=border}}>
              <div style={{fontSize:10,color:gold,fontWeight:600,marginBottom:6,letterSpacing:"0.04em"}}>{item.cat}</div>
              <div style={{fontSize:14,fontWeight:500,color:textP}}>{item.title}</div>
              <div style={{fontSize:12,color:textS,marginTop:6}}>{isRTL?"←":"→"}</div>
            </a>)}
          </div>
        </section>

        <div style={{border:`1px solid ${gold}22`,borderRadius:16,padding:"28px 24px",background:dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.05)",textAlign:"center"}}>
          <p style={{fontSize:15,color:textP,marginBottom:16,lineHeight:1.6}}>{t.sponsor.text}</p>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"10px 24px",borderRadius:10,background:`linear-gradient(135deg,${accent},${gold})`,color:"#0f0f14",fontSize:13,fontWeight:600,textDecoration:"none"}}>📸 {t.sponsor.cta}</a>
          <p style={{fontSize:11,color:textS,marginTop:14,opacity:0.7}}>{t.sponsor.note}</p>
        </div>
      </article>
      <footer style={{borderTop:`1px solid ${border}`,padding:"24px",textAlign:"center",background:dark?"#0c0c10":"#f5f5f0"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:8}}><div style={{width:22,height:22,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:14}}>{t.nav}</span></div>
        <p style={{fontSize:11,color:textS}}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p>
      </footer>
    </div>
  );
}
