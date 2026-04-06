import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Piyasa", "Gümüş Yatırım Rehberi"],
    category: "Piyasa",
    title: "Gümüş Yatırım Rehberi",
    subtitle: "Fiziksel gümüş, ETF, vadeli işlem ve gümüş hisselerine yatırım yöntemlerinin kapsamlı karşılaştırması",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "10 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Gümüş, binlerce yıldır hem ticari bir değişim aracı hem de değer saklama aracı olarak kullanılmaktadır. Günümüzde gümüş, yatırım portföylerinde çeşitlendirme aracı, enflasyona karşı korunma ve endüstriyel talep kaynaklı büyüme potansiyeli olarak ilgi çekmektedir.",
          "Bu rehber, gümüş yatırımının farklı yöntemlerini — fiziksel, finansal ve dolaylı — avantaj ve dezavantajlarıyla karşılaştırmalı olarak sunmaktadır. Herhangi bir yatırım tavsiyesi içermez; bilgilendirme amaçlıdır.",
        ],
      },
      {
        id: "neden", heading: "Neden Gümüşe Yatırım?",
        paragraphs: [
          "Gümüş, altına kıyasla daha düşük giriş maliyetine sahiptir — bu özellik onu bireysel yatırımcılar için erişilebilir kılar. Gümüşün altından farklılaşan temel özelliği, yatırım talebinin yanı sıra güçlü endüstriyel talebe sahip olmasıdır.",
          "Güneş panelleri, elektrikli araçlar, 5G teknolojisi ve tıbbi cihazlar gibi büyüyen sektörler gümüş talebini artırmaktadır. Bu endüstriyel boyut, gümüşü salt bir değerli metalden öte, stratejik bir endüstriyel malzeme haline getirmektedir.",
          "Öte yandan gümüş, altından daha yüksek fiyat oynaklığına (volatilite) sahiptir. Aynı piyasa koşullarında gümüş, altından 2-3 kat daha fazla fiyat hareketi gösterebilir — bu durum hem risk hem de fırsat anlamına gelir.",
        ],
      },
      {
        id: "yontemler", heading: "Yatırım Yöntemleri Karşılaştırması",
        paragraphs: [
          "Gümüş yatırımı birden fazla yoldan gerçekleştirilebilir. Her yöntemin kendine özgü avantajları, riskleri ve maliyet yapısı vardır:",
        ],
        widget: "comparison",
      },
      {
        id: "fiziksel", heading: "Fiziksel Gümüş: Külçe, Sikke, Takı",
        paragraphs: [
          "Fiziksel gümüş yatırımı, somut bir varlığa sahip olmanın güvenini sunar. Üç ana form vardır:",
          "Gümüş külçe (bars/ingots): 1 gram ile 5 kg arasında çeşitli ağırlıklarda üretilir. LBMA (London Bullion Market Association) sertifikalı külçeler en güvenilir seçenektir. Saflık genellikle 999,0 veya 999,9'dur.",
          "Gümüş sikke (coins): Amerikan Silver Eagle, Kanada Maple Leaf, Avusturya Filarmoni gibi devlet darphanelerince basılan yatırım sikkeleri, hem gümüş değeri hem de koleksiyon primi taşır.",
          "Gümüş takı: Takı olarak gümüş yatırımı, işçilik maliyeti nedeniyle saf gümüş değerinin üzerinde ödeme gerektirir. Yatırım amaçlı değil, kullanım + değer birleştirmesi olarak değerlendirilmelidir.",
        ],
        tips: [
          "LBMA sertifikalı ürünler tercih edin — sahtecilik riski minimum",
          "Saklama maliyetini hesaba katın: banka kasası, ev kasası veya üçüncü taraf depolama",
          "Fiziksel gümüşün alım-satım spread'i (fiyat farkı) altından daha yüksektir",
          "Türkiye'de KDV durumu: yatırım amaçlı külçe ve sikkelerde KDV uygulaması değişkendir",
          "Sigorta yaptırın: fiziksel gümüş hırsızlık ve yangın riskine açıktır",
        ],
      },
      {
        id: "etf", heading: "Gümüş ETF ve Borsada İşlem Gören Fonlar",
        paragraphs: [
          "Gümüş ETF'ler, fiziksel saklama derdi olmadan gümüş fiyatına erişim sağlar. Borsa üzerinden hisse senedi gibi alınıp satılabilir.",
          "En bilinen gümüş ETF'ler: iShares Silver Trust (SLV), Aberdeen Standard Physical Silver (SIVR) ve Sprott Physical Silver Trust (PSLV). SLV, dünyada en fazla gümüş tutan ETF olup yaklaşık 14.000 ton fiziksel gümüş barındırmaktadır.",
          "ETF yatırımının avantajları: düşük giriş maliyeti, anında likidite, saklama derdi yok, düzenlenmiş piyasa. Dezavantajları: fiziksel mülkiyet yok, yönetim ücreti (genellikle %0,45-0,60/yıl), karşı taraf riski.",
        ],
      },
      {
        id: "vadeli", heading: "Vadeli İşlemler (Futures)",
        paragraphs: [
          "COMEX (CME Group) üzerinden işlem gören gümüş vadeli sözleşmeleri, profesyonel yatırımcılar ve hedge fonlar tarafından kullanılır. Standart sözleşme 5.000 ons (155,5 kg) gümüşü temsil eder.",
          "Vadeli işlemler kaldıraçlı enstrümanlardır — küçük teminatla büyük pozisyon açılabilir. Bu özellik potansiyel kazancı artırdığı gibi, potansiyel kayıpları da büyütür. Deneyimsiz yatırımcılar için uygun değildir.",
          "Mikro gümüş vadeli sözleşmeleri (1.000 ons) ve mini sözleşmeler, bireysel yatırımcılara daha düşük eşikle vadeli piyasaya erişim sunar.",
        ],
      },
      {
        id: "hisse", heading: "Gümüş Madencilik Hisseleri",
        paragraphs: [
          "Gümüş madencilik şirketlerine yatırım, gümüş fiyatına dolaylı maruz kalım sağlar. Gümüş fiyatı yükseldiğinde maden şirketlerinin kârlılığı — ve dolayısıyla hisse fiyatı — orantısız şekilde artabilir (operasyonel kaldıraç).",
          "Başlıca gümüş madencilik şirketleri: First Majestic Silver (AG), Pan American Silver (PAAS), Wheaton Precious Metals (WPM), MAG Silver (MAG). Bu şirketler genellikle NYSE veya TSX'te işlem görür.",
          "Dikkat: Madencilik hisseleri, gümüş fiyatına ek olarak şirkete özgü risklere de tabidir — yönetim kalitesi, maden ömrü, politik risk, çevresel düzenlemeler gibi faktörler hisse performansını etkiler.",
        ],
      },
      {
        id: "altin-oran", heading: "Altın/Gümüş Oranı (Gold/Silver Ratio)",
        paragraphs: [
          "Altın/gümüş oranı, bir ons altının kaç ons gümüşe eşdeğer olduğunu gösteren tarihî bir metriktir. Bu oran, yatırımcılar tarafından gümüşün altına göre ucuz veya pahalı olduğunu değerlendirmek için kullanılır.",
          "Tarihsel ortalama yaklaşık 60-65 civarındadır. Oran 80'in üzerine çıktığında gümüş 'nispeten ucuz' kabul edilir; 50'nin altına indiğinde ise 'nispeten pahalı' sayılır. Tarihî aşırı uçlar: 1991'de 100:1 (gümüş çok ucuz), 2011'de 31:1 (gümüş çok pahalı).",
        ],
      },
      {
        id: "turkiye", heading: "Türkiye'de Gümüş Yatırımı",
        paragraphs: [
          "Türkiye'de fiziksel gümüş, kuyumculardan ve bazı bankalardan satın alınabilir. Darphane basımı gümüş sikkelere Darphane ve Damga Matbaası Genel Müdürlüğü aracılığıyla erişilebilir.",
          "Borsa İstanbul (BIST) üzerinde gümüş vadeli sözleşmeleri (VİOP) ile TL bazlı gümüş yatırımı yapmak mümkündür. Bazı aracı kurumlar aracılığıyla uluslararası gümüş ETF'lere de erişilebilir.",
          "Vergisel boyut: Fiziksel gümüşte alım-satım kazancı gelir vergisine tabi olabilir. ETF ve vadeli işlemlerde ise sermaye kazancı vergisi uygulanır. Detaylar için mali müşavire danışılması önerilir.",
        ],
      },
    ],
    disclaimer: "⚠️ Bu içerik yalnızca bilgilendirme amaçlıdır ve yatırım tavsiyesi niteliği taşımaz. Yatırım kararlarınızda profesyonel mali danışmanınıza başvurunuz.",
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Gümüş yatırım için iyi bir seçim midir?", a: "Gümüş, portföy çeşitlendirmesi ve enflasyona karşı korunma aracı olarak değerlendirilebilir. Ancak yüksek volatilitesi nedeniyle risk toleransınıza uygun olup olmadığını değerlendirmeniz önemlidir." },
        { q: "Altın mı gümüş mü daha kârlı?", a: "Tarihsel olarak gümüş, altından daha yüksek getiri potansiyeline sahiptir ancak aynı zamanda daha risklidir. Yükseliş dönemlerinde gümüş altını genellikle geride bırakır." },
        { q: "Fiziksel gümüşü nerede saklayabilirim?", a: "Banka kasası, ev kasası veya profesyonel kasa hizmeti (örn. Brinks, Loomis) kullanılabilir. Sigorta yaptırmak önemlidir." },
        { q: "Gümüş ETF ile fiziksel gümüş arasındaki fark nedir?", a: "ETF, gümüş fiyatına maruz kalım sağlar ancak fiziksel mülkiyet vermez. Fiziksel gümüş somut varlık sunar ama saklama ve sigorta maliyeti gerektirir." },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "CME Group — Silver Futures Contract Specifications",
        "Borsa İstanbul — VİOP Gümüş Sözleşmesi",
        "LBMA — \"The Guide to the London Bullion Market\"",
        "Dünya Altın Konseyi — Kıymetli Metal Yatırım Karşılaştırması",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "Gümüş Fiyat Tarihi", path: "/tr/piyasa/fiyat-tarihi", cat: "Piyasa" },
        { title: "Gümüş mü Altın mı?", path: "/tr/moda/gumus-vs-altin", cat: "Moda" },
        { title: "Piyasa Paneli", path: "/tr/araclar/piyasa", cat: "Araçlar" },
      ],
    },
    sponsor: {
      text: "925 ayar gümüş takıda yatırım ve estetiği birleştirin.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    comparisonData: [
      { method: "Fiziksel Külçe", risk: "Düşük", liquidity: "Orta", cost: "Düşük", minEntry: "~50₺", pros: "Somut varlık, karşı taraf riski yok", cons: "Saklama, sigorta, spread" },
      { method: "Gümüş Sikke", risk: "Düşük", liquidity: "Orta", cost: "Orta", minEntry: "~200₺", pros: "Koleksiyon primi, taşınabilir", cons: "Saklama, prim değişkenliği" },
      { method: "Gümüş ETF", risk: "Orta", liquidity: "Yüksek", cost: "Düşük", minEntry: "~500₺", pros: "Anında likidite, düşük maliyet", cons: "Fiziksel mülkiyet yok, ücret" },
      { method: "Vadeli İşlem", risk: "Yüksek", liquidity: "Çok Yüksek", cost: "Düşük", minEntry: "~5.000₺", pros: "Kaldıraç, iki yönlü işlem", cons: "Yüksek risk, vade sonu" },
      { method: "Maden Hissesi", risk: "Yüksek", liquidity: "Yüksek", cost: "Orta", minEntry: "~1.000₺", pros: "Temettü potansiyeli, kaldıraç", cons: "Şirkete özgü risk" },
    ],
    comparisonHeaders: ["Yöntem", "Risk", "Likidite", "Maliyet", "Min. Giriş", "Avantaj", "Dezavantaj"],
    darkMode: "Mod", toc: "İçindekiler",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Market", "Silver Investment Guide"],
    category: "Market",
    title: "Silver Investment Guide",
    subtitle: "Comprehensive comparison of physical silver, ETFs, futures, and mining stock investment methods",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "10 min read" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Silver has served as both a commercial medium of exchange and a store of value for millennia. Today, silver attracts interest as a portfolio diversification tool, inflation hedge, and growth opportunity driven by industrial demand.",
          "This guide presents different silver investment methods — physical, financial, and indirect — with a comparative analysis of their advantages and disadvantages. It does not constitute investment advice; it is for informational purposes only.",
        ],
      },
      {
        id: "why", heading: "Why Invest in Silver?",
        paragraphs: [
          "Silver has a lower entry cost compared to gold — making it accessible for individual investors. Silver's key differentiator from gold is its strong industrial demand alongside investment demand.",
          "Growing sectors such as solar panels, electric vehicles, 5G technology, and medical devices are increasing silver demand. This industrial dimension makes silver more than a precious metal — it's a strategic industrial material.",
          "However, silver has higher price volatility than gold. Under the same market conditions, silver can move 2-3 times more than gold — representing both risk and opportunity.",
        ],
      },
      {
        id: "methods", heading: "Investment Methods Comparison",
        paragraphs: [
          "Silver investment can be executed through multiple channels. Each method has its own advantages, risks, and cost structure:",
        ],
        widget: "comparison",
      },
      {
        id: "physical", heading: "Physical Silver: Bars, Coins, Jewelry",
        paragraphs: [
          "Physical silver investment offers the security of owning a tangible asset. Three main forms exist:",
          "Silver bars (ingots): Produced in weights from 1 gram to 5 kg. LBMA-certified bars are the most reliable option. Purity is typically 999.0 or 999.9.",
          "Silver coins: Investment coins minted by government mints — such as the American Silver Eagle, Canadian Maple Leaf, and Austrian Philharmonic — carry both silver value and collector premium.",
          "Silver jewelry: Jewelry investment requires paying above pure silver value due to craftsmanship costs. Should be considered as use + value combination rather than pure investment.",
        ],
        tips: [
          "Prefer LBMA-certified products — minimum counterfeiting risk",
          "Factor in storage costs: bank vault, home safe, or third-party storage",
          "Physical silver's bid-ask spread is higher than gold's",
          "Insure your holdings: physical silver is exposed to theft and fire risk",
        ],
      },
      {
        id: "etf", heading: "Silver ETFs and Exchange-Traded Funds",
        paragraphs: [
          "Silver ETFs provide exposure to silver prices without physical storage concerns. They can be bought and sold like stocks on exchanges.",
          "Best-known silver ETFs: iShares Silver Trust (SLV), Aberdeen Standard Physical Silver (SIVR), and Sprott Physical Silver Trust (PSLV). SLV is the world's largest silver-holding ETF with approximately 14,000 tonnes.",
          "ETF advantages: low entry cost, instant liquidity, no storage concerns, regulated market. Disadvantages: no physical ownership, management fee (typically 0.45-0.60%/year), counterparty risk.",
        ],
      },
      {
        id: "futures", heading: "Futures Contracts",
        paragraphs: [
          "Silver futures traded on COMEX (CME Group) are used by professional investors and hedge funds. The standard contract represents 5,000 ounces (155.5 kg).",
          "Futures are leveraged instruments — large positions can be opened with small margins. This amplifies both potential gains and losses. Not suitable for inexperienced investors.",
          "Micro silver futures (1,000 ounces) and mini contracts offer individual investors lower-threshold access to the futures market.",
        ],
      },
      {
        id: "stocks", heading: "Silver Mining Stocks",
        paragraphs: [
          "Investing in silver mining companies provides indirect exposure to silver prices. When silver rises, miners' profitability — and stock prices — can increase disproportionately (operational leverage).",
          "Major silver miners: First Majestic Silver (AG), Pan American Silver (PAAS), Wheaton Precious Metals (WPM), MAG Silver (MAG).",
          "Note: Mining stocks carry company-specific risks beyond silver price — management quality, mine life, political risk, and environmental regulations affect performance.",
        ],
      },
      {
        id: "ratio", heading: "Gold/Silver Ratio",
        paragraphs: [
          "The gold/silver ratio shows how many ounces of silver equal one ounce of gold. Investors use this metric to assess whether silver is cheap or expensive relative to gold.",
          "Historical average is approximately 60-65. When the ratio exceeds 80, silver is considered 'relatively cheap'; below 50, 'relatively expensive.' Historical extremes: 100:1 in 1991 (silver very cheap), 31:1 in 2011 (silver very expensive).",
        ],
      },
      {
        id: "turkey", heading: "Silver Investment in Turkey",
        paragraphs: [
          "In Turkey, physical silver can be purchased from jewelers and some banks. Mint-issued silver coins are available through the General Directorate of the Mint.",
          "Silver futures on Borsa Istanbul (BIST/VİOP) enable TRY-denominated silver investment. International silver ETFs are also accessible through some brokerages.",
          "Tax considerations: Capital gains on physical silver may be subject to income tax. ETFs and futures follow capital gains tax rules. Consult a tax advisor for details.",
        ],
      },
    ],
    disclaimer: "⚠️ This content is for informational purposes only and does not constitute investment advice. Consult a professional financial advisor for investment decisions.",
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Is silver a good investment?", a: "Silver can serve as a portfolio diversifier and inflation hedge. However, its high volatility means you should assess whether it matches your risk tolerance." },
        { q: "Is gold or silver more profitable?", a: "Historically, silver has higher return potential than gold but also higher risk. In bull markets, silver typically outperforms gold." },
        { q: "Where can I store physical silver?", a: "Bank vaults, home safes, or professional vault services (e.g., Brinks, Loomis). Insurance is important." },
        { q: "What's the difference between silver ETF and physical silver?", a: "ETFs provide price exposure without physical ownership. Physical silver offers tangible assets but requires storage and insurance costs." },
      ],
    },
    sources: {
      heading: "Sources",
      items: [
        "The Silver Institute — \"World Silver Survey 2025\"",
        "CME Group — Silver Futures Contract Specifications",
        "Borsa Istanbul — VİOP Silver Contract",
        "LBMA — \"The Guide to the London Bullion Market\"",
        "World Gold Council — Precious Metal Investment Comparison",
      ],
    },
    related: {
      heading: "Related Topics",
      items: [
        { title: "Silver Price History", path: "/en/market/price-history", cat: "Market" },
        { title: "Silver vs Gold", path: "/en/fashion/silver-vs-gold", cat: "Fashion" },
        { title: "Market Dashboard", path: "/en/tools/market", cat: "Tools" },
      ],
    },
    sponsor: {
      text: "Combine investment and aesthetics in 925 sterling silver jewelry.",
      cta: "View on Instagram",
      note: "This content is supported by İstanbul Gümüş.",
    },
    comparisonData: [
      { method: "Physical Bars", risk: "Low", liquidity: "Medium", cost: "Low", minEntry: "~$5", pros: "Tangible asset, no counterparty risk", cons: "Storage, insurance, spread" },
      { method: "Silver Coins", risk: "Low", liquidity: "Medium", cost: "Medium", minEntry: "~$25", pros: "Collector premium, portable", cons: "Storage, variable premium" },
      { method: "Silver ETF", risk: "Medium", liquidity: "High", cost: "Low", minEntry: "~$25", pros: "Instant liquidity, low cost", cons: "No physical ownership, fees" },
      { method: "Futures", risk: "High", liquidity: "Very High", cost: "Low", minEntry: "~$5,000", pros: "Leverage, long/short", cons: "High risk, expiration" },
      { method: "Mining Stocks", risk: "High", liquidity: "High", cost: "Medium", minEntry: "~$50", pros: "Dividend potential, leverage", cons: "Company-specific risk" },
    ],
    comparisonHeaders: ["Method", "Risk", "Liquidity", "Cost", "Min. Entry", "Advantage", "Disadvantage"],
    darkMode: "Mode", toc: "Contents",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة المعرفة بالفضة",
    breadcrumb: ["الرئيسية", "السوق", "دليل الاستثمار في الفضة"],
    category: "السوق",
    title: "دليل الاستثمار في الفضة",
    subtitle: "مقارنة شاملة لطرق الاستثمار في الفضة: المادية والصناديق المتداولة والعقود الآجلة وأسهم التعدين",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٠ دقائق قراءة" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "خدمت الفضة كوسيلة تبادل تجاري ومخزن للقيمة لآلاف السنين. اليوم تجذب الفضة الاهتمام كأداة تنويع للمحافظ وتحوط ضد التضخم.",
          "يقدم هذا الدليل مقارنة بين طرق الاستثمار المختلفة في الفضة. لا يشكل نصيحة استثمارية؛ هو لأغراض المعلومات فقط.",
        ],
      },
      {
        id: "why", heading: "لماذا الاستثمار في الفضة؟",
        paragraphs: [
          "الفضة ذات تكلفة دخول أقل مقارنة بالذهب. ميزتها الأساسية عن الذهب هي الطلب الصناعي القوي إلى جانب الطلب الاستثماري.",
          "قطاعات الألواح الشمسية والسيارات الكهربائية وتقنية الجيل الخامس تزيد الطلب على الفضة.",
          "لكن الفضة ذات تقلب سعري أعلى من الذهب بمقدار ٢-٣ أضعاف — وهذا يمثل مخاطرة وفرصة في آن واحد.",
        ],
      },
      {
        id: "methods", heading: "مقارنة طرق الاستثمار",
        paragraphs: ["يمكن الاستثمار في الفضة عبر عدة قنوات:"],
        widget: "comparison",
      },
      {
        id: "physical", heading: "الفضة المادية: سبائك، عملات، مجوهرات",
        paragraphs: [
          "الاستثمار المادي يوفر أمان امتلاك أصل ملموس.",
          "سبائك الفضة: تُنتج بأوزان من ١ غرام إلى ٥ كغ. السبائك المعتمدة من LBMA هي الأكثر موثوقية.",
          "عملات الفضة الاستثمارية: تحمل قيمة الفضة وعلاوة جمع.",
          "المجوهرات الفضية: تتطلب دفع أكثر من قيمة الفضة الخام بسبب تكلفة الصنعة.",
        ],
        tips: [
          "فضّل المنتجات المعتمدة من LBMA",
          "احسب تكاليف التخزين والتأمين",
          "فارق السعر (السبريد) للفضة المادية أعلى من الذهب",
        ],
      },
      {
        id: "etf", heading: "صناديق الفضة المتداولة (ETF)",
        paragraphs: [
          "توفر صناديق ETF الفضية تعرضاً لسعر الفضة دون عناء التخزين المادي.",
          "أشهر الصناديق: iShares Silver Trust (SLV)، SIVR، PSLV.",
          "المزايا: سيولة فورية، تكلفة منخفضة. العيوب: لا ملكية مادية، رسوم إدارة.",
        ],
      },
      {
        id: "futures", heading: "العقود الآجلة",
        paragraphs: [
          "عقود الفضة الآجلة في COMEX تستخدمها المؤسسات الاستثمارية. العقد القياسي يمثل ٥٠٠٠ أونصة.",
          "العقود الآجلة أدوات رافعة مالية — غير مناسبة للمستثمرين غير المتمرسين.",
        ],
      },
      {
        id: "stocks", heading: "أسهم شركات تعدين الفضة",
        paragraphs: [
          "الاستثمار في شركات التعدين يوفر تعرضاً غير مباشر لسعر الفضة مع رافعة تشغيلية.",
          "ملاحظة: أسهم التعدين تحمل مخاطر خاصة بالشركة بالإضافة لسعر الفضة.",
        ],
      },
      {
        id: "ratio", heading: "نسبة الذهب/الفضة",
        paragraphs: [
          "نسبة الذهب/الفضة توضح كم أونصة فضة تعادل أونصة ذهب واحدة. المتوسط التاريخي حوالي ٦٠-٦٥.",
          "فوق ٨٠ تُعتبر الفضة 'رخيصة نسبياً'؛ تحت ٥٠ تُعتبر 'غالية نسبياً'.",
        ],
      },
      {
        id: "turkey", heading: "الاستثمار في الفضة في تركيا",
        paragraphs: [
          "في تركيا يمكن شراء الفضة المادية من الصاغة وبعض البنوك.",
          "عقود الفضة الآجلة في بورصة إسطنبول (VİOP) تتيح الاستثمار بالليرة التركية.",
        ],
      },
    ],
    disclaimer: "⚠️ هذا المحتوى لأغراض المعلومات فقط ولا يشكل نصيحة استثمارية.",
    faq: {
      heading: "الأسئلة الشائعة",
      items: [
        { q: "هل الفضة استثمار جيد؟", a: "يمكن أن تكون أداة تنويع وتحوط ضد التضخم، لكن تقلبها العالي يتطلب تقييم مدى تحمل المخاطر." },
        { q: "أيهما أكثر ربحاً: الذهب أم الفضة؟", a: "الفضة ذات عائد محتمل أعلى لكنها أكثر خطورة. في فترات الصعود تتفوق الفضة عادة على الذهب." },
        { q: "ما الفرق بين ETF والفضة المادية؟", a: "ETF يوفر تعرضاً سعرياً دون ملكية مادية. الفضة المادية أصل ملموس لكنها تتطلب تخزين وتأمين." },
      ],
    },
    sources: { heading: "المصادر", items: ["The Silver Institute — World Silver Survey 2025", "CME Group — مواصفات عقود الفضة", "LBMA — دليل سوق السبائك"] },
    related: {
      heading: "مواضيع ذات صلة",
      items: [
        { title: "تاريخ أسعار الفضة", path: "/ar/market/price-history", cat: "السوق" },
        { title: "الفضة أم الذهب؟", path: "/ar/fashion/silver-vs-gold", cat: "الموضة" },
      ],
    },
    sponsor: { text: "اجمعوا بين الاستثمار والجمال في مجوهرات الفضة عيار ٩٢٥.", cta: "شاهد على إنستغرام", note: "هذا المحتوى مدعوم من إسطنبول غوموش." },
    comparisonData: [
      { method: "سبائك مادية", risk: "منخفض", liquidity: "متوسط", cost: "منخفض", minEntry: "~$٥", pros: "أصل ملموس", cons: "تخزين، تأمين" },
      { method: "عملات فضية", risk: "منخفض", liquidity: "متوسط", cost: "متوسط", minEntry: "~$٢٥", pros: "علاوة جمع", cons: "تخزين" },
      { method: "صندوق ETF", risk: "متوسط", liquidity: "عالي", cost: "منخفض", minEntry: "~$٢٥", pros: "سيولة فورية", cons: "لا ملكية مادية" },
      { method: "عقود آجلة", risk: "عالي", liquidity: "عالي جداً", cost: "منخفض", minEntry: "~$٥٠٠٠", pros: "رافعة مالية", cons: "مخاطر عالية" },
      { method: "أسهم تعدين", risk: "عالي", liquidity: "عالي", cost: "متوسط", minEntry: "~$٥٠", pros: "أرباح محتملة", cons: "مخاطر شركة" },
    ],
    comparisonHeaders: ["الطريقة", "المخاطر", "السيولة", "التكلفة", "الحد الأدنى", "الميزة", "العيب"],
    darkMode: "الوضع", toc: "المحتويات",
  },
};

// ─── Comparison Table Widget ──────────────────────────────
function ComparisonTable({ data, headers, dark, isRTL }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const gold = "#D4AF37";
  const riskColor = (r) => {
    if (["Düşük", "Low", "منخفض"].includes(r)) return "#4ade80";
    if (["Orta", "Medium", "متوسط"].includes(r)) return gold;
    return "#f87171";
  };

  return (
    <div style={{ overflowX: "auto", margin: "20px 0", borderRadius: 12, border: `1px solid ${border}` }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 700 }}>
        <thead>
          <tr style={{ background: dark ? "rgba(192,192,192,0.05)" : "rgba(0,0,0,0.03)" }}>
            {headers.map((h, i) => (
              <th key={i} style={{ padding: "12px 10px", textAlign: isRTL ? "right" : "left", fontWeight: 600, color: textP, borderBottom: `1px solid ${border}`, whiteSpace: "nowrap", fontSize: 11 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, ri) => (
            <tr key={ri}>
              <td style={{ padding: "10px", borderBottom: `1px solid ${border}`, fontWeight: 600, color: textP, whiteSpace: "nowrap" }}>{row.method}</td>
              <td style={{ padding: "10px", borderBottom: `1px solid ${border}` }}>
                <span style={{ padding: "2px 8px", borderRadius: 6, fontSize: 10, fontWeight: 600, background: `${riskColor(row.risk)}18`, color: riskColor(row.risk) }}>{row.risk}</span>
              </td>
              <td style={{ padding: "10px", borderBottom: `1px solid ${border}`, color: textS, fontSize: 11 }}>{row.liquidity}</td>
              <td style={{ padding: "10px", borderBottom: `1px solid ${border}`, color: textS, fontSize: 11 }}>{row.cost}</td>
              <td style={{ padding: "10px", borderBottom: `1px solid ${border}`, color: textS, fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>{row.minEntry}</td>
              <td style={{ padding: "10px", borderBottom: `1px solid ${border}`, color: "#4ade80", fontSize: 11 }}>{row.pros}</td>
              <td style={{ padding: "10px", borderBottom: `1px solid ${border}`, color: "#f87171", fontSize: 11 }}>{row.cons}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────
export default function InvestmentGuideArticle() {
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
    <div dir={isRTL ? "rtl" : "ltr"} style={{ fontFamily: fontB, background: bgP, color: textP, minHeight: "100vh", transition: "background 0.4s, color 0.4s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        * { margin:0; padding:0; box-sizing:border-box; }
        ::selection { background: rgba(192,192,192,0.3); }
      `}</style>

      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: dark ? "rgba(15,15,20,0.88)" : "rgba(250,250,245,0.88)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${border}`, padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg, ${accent}, ${gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#0f0f14", fontFamily: fontD }}>Ag</div>
          <span style={{ fontFamily: fontD, fontWeight: 600, fontSize: 16 }}>{t.nav}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", gap: 2, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", borderRadius: 7, padding: 2 }}>
            {["tr", "en", "ar"].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{ border: "none", cursor: "pointer", padding: "3px 9px", borderRadius: 5, fontSize: 11, fontWeight: lang === l ? 600 : 400, fontFamily: l === "ar" ? "'Noto Naskh Arabic', serif" : fontB, background: lang === l ? (dark ? "rgba(192,192,192,0.15)" : "rgba(0,0,0,0.08)") : "transparent", color: lang === l ? textP : textS }}>{l === "ar" ? "عر" : l.toUpperCase()}</button>
            ))}
          </div>
          <button onClick={() => setDark(!dark)} style={{ border: "none", cursor: "pointer", background: "transparent", color: textS, fontSize: 16, padding: 4 }}>{dark ? "☀️" : "🌙"}</button>
        </div>
      </nav>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "16px 24px 0", display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", fontSize: 12, color: textS }}>
        {t.breadcrumb.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {i > 0 && <span style={{ opacity: 0.4 }}>{isRTL ? "‹" : "›"}</span>}
            <a href="#" style={{ color: i === t.breadcrumb.length - 1 ? textP : textS, textDecoration: "none", fontWeight: i === t.breadcrumb.length - 1 ? 500 : 400 }}>{item}</a>
          </span>
        ))}
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

        <div style={{ height: 220, borderRadius: 16, marginBottom: 36, overflow: "hidden", background: dark ? "linear-gradient(135deg, #1a1a2e, #2a2a3e, #1a1a2e)" : "linear-gradient(135deg, #e8e8e8, #d0d0d0, #e8e8e8)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ textAlign: "center", zIndex: 1 }}>
            <div style={{ fontFamily: fontD, fontSize: 52, fontWeight: 700, background: `linear-gradient(135deg, ${accent}, ${gold})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>$Ag</div>
            <div style={{ fontSize: 13, color: textS, letterSpacing: "0.15em", marginTop: 4 }}>INVESTMENT GUIDE</div>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ padding: "14px 18px", borderRadius: 10, background: dark ? "rgba(248,113,113,0.06)" : "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.15)", marginBottom: 36, fontSize: 13, color: textS, lineHeight: 1.6 }}>
          {t.disclaimer}
        </div>

        {t.sections.map((sec) => (
          <section key={sec.id} style={{ marginBottom: 36 }}>
            {sec.heading && <h2 style={{ fontFamily: fontD, fontSize: 24, fontWeight: 600, marginBottom: 16, paddingTop: 8 }}>{sec.heading}</h2>}
            {sec.paragraphs.map((p, pi) => <p key={pi} style={{ fontSize: 15, lineHeight: 1.8, color: textS, marginBottom: 14 }}>{p}</p>)}
            {sec.widget === "comparison" && <ComparisonTable data={t.comparisonData} headers={t.comparisonHeaders} dark={dark} isRTL={isRTL} />}
            {sec.tips && (
              <div style={{ background: dark ? "rgba(192,192,192,0.03)" : "rgba(192,192,192,0.06)", border: `1px solid ${border}`, borderRadius: 12, padding: "20px 24px", marginTop: 16 }}>
                {sec.tips.map((tip, ti) => (
                  <div key={ti} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: ti < sec.tips.length - 1 ? 12 : 0, fontSize: 14, lineHeight: 1.6, color: textS }}>
                    <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", background: `${gold}18`, color: gold, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, marginTop: 1 }}>{ti + 1}</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        <section style={{ marginBottom: 36, marginTop: 48 }}>
          <h2 style={{ fontFamily: fontD, fontSize: 24, fontWeight: 600, marginBottom: 20 }}>{t.faq.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {t.faq.items.map((item, i) => (
              <div key={i} style={{ border: `1px solid ${openFaq === i ? gold + "44" : border}`, borderRadius: 12, overflow: "hidden", background: openFaq === i ? (dark ? "rgba(212,175,55,0.03)" : "rgba(212,175,55,0.04)") : "transparent", transition: "all 0.3s" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", border: "none", cursor: "pointer", background: "transparent", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", color: textP, fontSize: 14, fontWeight: 500, fontFamily: fontB, textAlign: isRTL ? "right" : "left", gap: 12 }}>
                  <span style={{ flex: 1 }}>{item.q}</span>
                  <span style={{ fontSize: 18, color: textS, transition: "transform 0.3s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)", flexShrink: 0 }}>+</span>
                </button>
                {openFaq === i && <div style={{ padding: "0 20px 16px", fontSize: 14, lineHeight: 1.7, color: textS }}>{item.a}</div>}
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36, padding: "20px 24px", background: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)", borderRadius: 12, border: `1px solid ${border}` }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12 }}>{t.sources.heading}</h3>
          {t.sources.items.map((s, i) => (
            <div key={i} style={{ fontSize: 13, color: textS, lineHeight: 1.6, marginBottom: 6, display: "flex", gap: 8 }}>
              <span style={{ color: accent, fontWeight: 600, flexShrink: 0 }}>[{i + 1}]</span><span>{s}</span>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 40 }}>
          <h3 style={{ fontSize: 18, fontFamily: fontD, fontWeight: 600, marginBottom: 16 }}>{t.related.heading}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {t.related.items.map((item, i) => (
              <a key={i} href={item.path} style={{ textDecoration: "none", padding: "16px 18px", border: `1px solid ${border}`, borderRadius: 12, background: bgCard, display: "block" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = gold + "44"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = border; }}>
                <div style={{ fontSize: 10, color: gold, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.cat}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: textP }}>{item.title}</div>
                <div style={{ fontSize: 12, color: textS, marginTop: 6 }}>{isRTL ? "←" : "→"}</div>
              </a>
            ))}
          </div>
        </section>

        <div style={{ border: `1px solid ${gold}22`, borderRadius: 16, padding: "28px 24px", background: dark ? "rgba(212,175,55,0.03)" : "rgba(212,175,55,0.05)", textAlign: "center" }}>
          <p style={{ fontSize: 15, color: textP, marginBottom: 16, lineHeight: 1.6 }}>{t.sponsor.text}</p>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", borderRadius: 10, background: `linear-gradient(135deg, ${accent}, ${gold})`, color: "#0f0f14", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>📸 {t.sponsor.cta}</a>
          <p style={{ fontSize: 11, color: textS, marginTop: 14, opacity: 0.7 }}>{t.sponsor.note}</p>
        </div>
      </article>

      <footer style={{ borderTop: `1px solid ${border}`, padding: "24px", textAlign: "center", background: dark ? "#0c0c10" : "#f5f5f0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
          <div style={{ width: 22, height: 22, borderRadius: "50%", background: `linear-gradient(135deg, ${accent}, ${gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: "#0f0f14", fontFamily: fontD }}>Ag</div>
          <span style={{ fontFamily: fontD, fontWeight: 600, fontSize: 14 }}>{t.nav}</span>
        </div>
        <p style={{ fontSize: 11, color: textS }}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p>
      </footer>
    </div>
  );
}
