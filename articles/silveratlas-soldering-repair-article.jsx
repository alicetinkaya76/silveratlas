import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Zanaat", "Lehimleme & Onarım"],
    category: "Zanaat",
    title: "Gümüş Lehimleme & Onarım Rehberi",
    subtitle: "Takı tamiri, lehim teknikleri, evde bakım ve profesyonel onarım yöntemleri",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "14 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Gümüş takılar günlük kullanımda kırılabilir, bağlantı noktaları gevşeyebilir veya zaman içinde aşınabilir. Profesyonel tamir maliyetli olsa da, temel lehimleme ve onarım tekniklerini bilmek hem tasarruf sağlar hem de takı yapım sanatına bir adım atmak demektir.",
          "Bu rehber, gümüş lehimlemenin temellerinden ileri düzey onarım tekniklerine kadar kapsamlı bir yol haritası sunar. Güvenlik kuralları, gerekli malzemeler ve adım adım talimatlarla donatılmıştır.",
        ],
      },
      {
        id: "temeller", heading: "Lehimleme Temelleri",
        paragraphs: [
          "Gümüş lehimleme (silver soldering), iki gümüş parçayı bir lehim alaşımı kullanarak birleştirme işlemidir. Yumuşak lehim (soft solder) düşük sıcaklıklarda (200-300°C) çalışır; sert lehim (hard solder) ise 600-750°C arasında erir ve çok daha güçlü bir bağ oluşturur.",
          "Takı tamirinde genellikle sert lehim tercih edilir. Lehim teli farklı erime noktalarında gelir: sert (hard — 745°C), orta (medium — 720°C), kolay (easy — 680°C) ve ekstra kolay (extra easy — 650°C). Çoklu lehimleme gerektiren parçalarda önce sert, sonra sırasıyla düşük erime noktalı lehimler kullanılır.",
          "Flux (eritici pasta), lehimlemenin vazgeçilmez yardımcısıdır. Boraks bazlı flux, oksidasyonu önler ve lehimin temiz metal yüzeyine akmasını sağlar.",
        ],
      },
      {
        id: "teknikler", heading: "Lehimleme Teknikleri",
        paragraphs: [
          "Aşağıda temel gümüş lehimleme ve onarım tekniklerinin karşılaştırması bulunmaktadır:",
        ],
        widget: "techniqueGrid",
      },
      {
        id: "malzemeler", heading: "Gerekli Malzemeler",
        paragraphs: [
          "Temel lehimleme seti: propan veya bütan torch (şaloma), gümüş lehim teli (tercihen 3 farklı erime noktası), boraks flux, ısıya dayanıklı lehimleme bloğu (kiremit veya kömür blok), bakır cımbız, seramik sünger ve tuz-asit (pickle) çözeltisi.",
          "İleri düzey araçlar: üçüncü el tutucu, mikro torch, lehimleme balı (paste solder), fiber optik aydınlatmalı büyüteç, titanyum pens, şap taşı (alum) ve oksalik asit.",
          "Güvenlik ekipmanları: ısıya dayanıklı eldiven, güvenlik gözlüğü, havalandırmalı çalışma alanı veya aspiratör, yangın söndürücü. Lehimleme kesinlikle iyi havalandırılan bir ortamda yapılmalıdır.",
        ],
      },
      {
        id: "adimlar", heading: "Adım Adım: Kırık Yüzük Tamiri",
        paragraphs: [
          "1) Temizlik: Yüzüğü ılık sabunlu suda temizleyin, kurutun. Eski lehim veya oksit varsa ince zımpara ile alın.",
          "2) Yerleştirme: Kırık parçaları mümkün olduğunca yakın bir şekilde hizalayın. Üçüncü el tutucu veya kıskaç kullanın. Parçalar arasındaki boşluk milimetreden az olmalıdır.",
          "3) Flux: Lehimlenecek bölgeye ince bir flux tabakası sürün. Flux, ısınma sırasında oluşacak oksidasyonu engelleyecektir.",
          "4) Lehim yerleştirme: Küçük lehim parçası (1-2 mm) kesin ve birleşim noktasına yerleştirin.",
          "5) Isıtma: Torcu parçanın tamamına yönlendirin — sadece lehime değil. Gümüş iyi bir ısı iletkenidir; tüm parçanın eşit ısınması gerekir. Lehim eridiğinde kılcal hareketle eklem arasına çekilecektir.",
          "6) Soğutma ve temizleme: Doğal soğumaya bırakın veya pickle çözeltisine daldırın. Son olarak flux kalıntılarını temizleyin ve cilalayın.",
        ],
      },
      {
        id: "sorunlar", heading: "Sık Karşılaşılan Sorunlar",
        paragraphs: [
          "Lehim akmıyor: En yaygın sorun yetersiz ısı veya kirli yüzeydir. Parçayı tekrar temizleyin ve daha uzun ısıtın. Lehim, temiz ve sıcak metale akar — kirli veya soğuk metale yapışmaz.",
          "Erime: Gümüşün erime noktası 961°C, lehimin erime noktasının çok da üzerinde değildir. Torch'u sabit tutmayın, sürekli hareket ettirin. İnce parçalarda daha düşük erime noktalı lehim kullanın.",
          "Siyahlaşma: Normal oksidasyondur. Pickle çözeltisi ile temizlenir. Boraks artıkları sıcak suda ıslatılarak çıkarılır.",
          "Gözenekli lehim: Lehim içinde küçük kabarcıklar genellikle flux yetersizliğinden kaynaklanır. Tekrar flux sürüp yeniden ısıtmak çözüm olabilir.",
        ],
      },
      {
        id: "profesyonel", heading: "Ne Zaman Profesyonele Başvurmalı?",
        paragraphs: [
          "Bazı onarımlar evde yapılmamalıdır: taşlı takıların lehimlenmesi (taş hasar görebilir), antika parçalar (değer kaybı riski), karmaşık menteşe mekanizmaları, ve altın-gümüş karışımı parçalar. Bu durumlarda uzman kuyumcuya başvurmak en doğrusudur.",
          "Taş yakınında lehimleme yapılması gerekiyorsa, taşı ıslak bezle sarmak veya ısı koruma macunu kullanmak kısmen koruma sağlar. Ancak ametist, opal ve zümrüt gibi ısıya duyarlı taşlar için bu bile yeterli olmayabilir.",
        ],
      },
    ],
    techniques: [
      { name: "Sert Lehim", temp: "650-745°C", strength: "Çok Yüksek", use: "Yapısal eklemler, halka birleştirme", difficulty: "Orta", icon: "🔥" },
      { name: "Yumuşak Lehim", temp: "200-300°C", strength: "Düşük", use: "Geçici tamir, dekoratif ekleme", difficulty: "Kolay", icon: "🕯️" },
      { name: "TIG Kaynak", temp: "1500°C+", strength: "En Yüksek", use: "Endüstriyel, kalın parçalar", difficulty: "İleri", icon: "⚡" },
      { name: "Lazer Kaynak", temp: "Noktasal", strength: "Yüksek", use: "Taşlı takı, hassas tamir", difficulty: "Profesyonel", icon: "💎" },
      { name: "Soğuk Bağlantı", temp: "Yok", strength: "Orta", use: "Perçin, sarma, tab bağlantı", difficulty: "Kolay", icon: "🔩" },
      { name: "Epoksi Yapıştırma", temp: "Yok", strength: "Düşük-Orta", use: "Acil tamir, taş yapıştırma", difficulty: "Kolay", icon: "🧪" },
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Evde gümüş lehimleme güvenli mi?", a: "Uygun güvenlik önlemleriyle evet. İyi havalandırma, güvenlik gözlüğü ve ısıya dayanıklı çalışma yüzeyi şarttır. Çocuklardan ve yanıcı maddelerden uzakta çalışın." },
        { q: "Lehim izi görünür mü?", a: "İyi yapılmış bir lehimleme neredeyse görünmezdir. Lehim sonrası cilalama ve gerekirse rodaj (kaplama) ile iz tamamen gizlenebilir." },
        { q: "Normal kalay lehim kullanabilir miyim?", a: "Gümüş takı için önerilmez. Kalay lehim düşük mukavemet sağlar ve zamanla kararır. Gümüş lehim teli (silver solder) kullanmak gerekir." },
        { q: "Kırık zinciri evde tamir edebilir miyim?", a: "Kalın halkalı zincirlerde mümkündür. Ancak ince İtalyan zincir (box chain, snake chain) tamiri çok hassas olduğundan profesyonel tamir önerilir." },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "Tim McCreight — Complete Metalsmith (Professional Edition)",
        "Oppi Untracht — Jewelry Concepts and Technology",
        "Türk Kuyumcular Odası — Lehimleme Standartları ve Güvenlik Rehberi",
        "Ganoksin — Soldering Techniques for Jewelers",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "925 Ayar Nedir?", path: "/tr/uretim/925-ayar", cat: "Üretim" },
        { title: "Bakım Rehberi", path: "/tr/rehber/bakim", cat: "Rehber" },
        { title: "Alaşımlar Rehberi", path: "/tr/rehber/alasimlar", cat: "Rehber" },
      ],
    },
    sponsor: {
      text: "Profesyonel işçilikle üretilen 925 ayar gümüş takıları keşfedin.",
      cta: "İstanbul Gümüş'ü Keşfet",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    darkMode: "Mod",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Craftsmanship", "Soldering & Repair"],
    category: "Craftsmanship",
    title: "Silver Soldering & Repair Guide",
    subtitle: "Jewelry repair, soldering techniques, home maintenance and professional restoration methods",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "14 min read" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Silver jewelry can break during daily wear, connections may loosen, or surfaces may wear over time. While professional repair can be costly, knowing basic soldering and repair techniques saves money and opens the door to the art of jewelry making.",
          "This guide provides a comprehensive roadmap from soldering fundamentals to advanced repair techniques, complete with safety rules, required materials, and step-by-step instructions.",
        ],
      },
      {
        id: "basics", heading: "Soldering Fundamentals",
        paragraphs: [
          "Silver soldering joins two silver pieces using a solder alloy. Soft solder works at low temperatures (200-300°C); hard solder melts between 600-750°C and creates a much stronger bond.",
          "Hard solder is generally preferred in jewelry repair. Solder wire comes in different melting points: hard (745°C), medium (720°C), easy (680°C), and extra easy (650°C). For multi-joint pieces, start with hard solder and progressively use lower melting point solders.",
          "Flux (borax-based paste) is essential — it prevents oxidation and ensures solder flows onto clean metal surfaces.",
        ],
      },
      {
        id: "techniques", heading: "Soldering Techniques",
        paragraphs: [
          "Below is a comparison of key silver soldering and repair techniques:",
        ],
        widget: "techniqueGrid",
      },
      {
        id: "materials", heading: "Required Materials",
        paragraphs: [
          "Basic soldering kit: propane or butane torch, silver solder wire (preferably 3 different melting points), borax flux, heat-resistant soldering block (firebrick or charcoal block), copper tweezers, ceramic sponge, and pickle solution.",
          "Advanced tools: third-hand holder, micro torch, paste solder, fiber-optic illuminated magnifier, titanium tweezers, alum stone, and oxalic acid.",
          "Safety equipment: heat-resistant gloves, safety goggles, ventilated workspace or extractor fan, fire extinguisher. Soldering must always be done in a well-ventilated area.",
        ],
      },
      {
        id: "steps", heading: "Step by Step: Broken Ring Repair",
        paragraphs: [
          "1) Clean: Wash the ring in warm soapy water, dry thoroughly. Remove old solder or oxide with fine sandpaper.",
          "2) Position: Align broken pieces as closely as possible. Use a third-hand holder or clamp. The gap between pieces should be less than a millimeter.",
          "3) Flux: Apply a thin layer of flux to the area to be soldered to prevent oxidation during heating.",
          "4) Place solder: Cut a small solder piece (1-2mm) and place it at the joint.",
          "5) Heat: Direct the torch at the entire piece — not just the solder. Silver is an excellent heat conductor; the whole piece needs uniform heating. When the solder melts, it will be drawn into the joint by capillary action.",
          "6) Cool and clean: Allow natural cooling or dip in pickle solution. Finally, clean flux residue and polish.",
        ],
      },
      {
        id: "problems", heading: "Common Problems",
        paragraphs: [
          "Solder won't flow: The most common issue is insufficient heat or dirty surface. Re-clean the piece and heat longer. Solder flows to clean, hot metal — it won't stick to dirty or cold surfaces.",
          "Melting: Silver's melting point (961°C) isn't far above solder's melting point. Don't hold the torch still — keep it moving. Use lower melting point solder for thin pieces.",
          "Blackening: Normal oxidation. Clean with pickle solution. Borax residue can be removed by soaking in hot water.",
          "Porous solder: Small bubbles in the solder usually result from insufficient flux. Reapplying flux and reheating may solve the issue.",
        ],
      },
      {
        id: "professional", heading: "When to Consult a Professional",
        paragraphs: [
          "Some repairs should not be attempted at home: soldering stone-set jewelry (stones may be damaged), antique pieces (risk of value loss), complex hinge mechanisms, and mixed gold-silver pieces. In these cases, consulting an expert jeweler is the wisest choice.",
          "If soldering near a stone is necessary, wrapping the stone in wet cloth or using heat-protection compound offers partial protection. However, for heat-sensitive stones like amethyst, opal, and emerald, even this may not suffice.",
        ],
      },
    ],
    techniques: [
      { name: "Hard Solder", temp: "650-745°C", strength: "Very High", use: "Structural joints, ring joining", difficulty: "Medium", icon: "🔥" },
      { name: "Soft Solder", temp: "200-300°C", strength: "Low", use: "Temporary repair, decorative addition", difficulty: "Easy", icon: "🕯️" },
      { name: "TIG Welding", temp: "1500°C+", strength: "Highest", use: "Industrial, thick pieces", difficulty: "Advanced", icon: "⚡" },
      { name: "Laser Welding", temp: "Point-based", strength: "High", use: "Stone-set jewelry, precision repair", difficulty: "Professional", icon: "💎" },
      { name: "Cold Connection", temp: "None", strength: "Medium", use: "Rivets, wrapping, tab joints", difficulty: "Easy", icon: "🔩" },
      { name: "Epoxy Bonding", temp: "None", strength: "Low-Medium", use: "Emergency repair, stone setting", difficulty: "Easy", icon: "🧪" },
    ],
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Is home silver soldering safe?", a: "Yes, with proper safety measures. Good ventilation, safety goggles, and a heat-resistant work surface are essential. Work away from children and flammable materials." },
        { q: "Will the solder joint be visible?", a: "A well-executed solder joint is nearly invisible. Post-solder polishing and optional plating can completely hide the joint." },
        { q: "Can I use regular tin solder?", a: "Not recommended for silver jewelry. Tin solder provides low strength and tarnishes over time. Use silver solder wire instead." },
        { q: "Can I repair a broken chain at home?", a: "Possible for thick-link chains. However, fine chains (box chain, snake chain) require professional repair due to their delicate nature." },
      ],
    },
    sources: {
      heading: "Sources",
      items: [
        "Tim McCreight — Complete Metalsmith (Professional Edition)",
        "Oppi Untracht — Jewelry Concepts and Technology",
        "Turkish Jewelers' Association — Soldering Standards and Safety Guide",
        "Ganoksin — Soldering Techniques for Jewelers",
      ],
    },
    related: {
      heading: "Related Topics",
      items: [
        { title: "What is 925 Silver?", path: "/en/manufacturing/925-silver", cat: "Manufacturing" },
        { title: "Care Guide", path: "/en/guide/care", cat: "Guide" },
        { title: "Alloys Guide", path: "/en/guide/alloys", cat: "Guide" },
      ],
    },
    sponsor: {
      text: "Discover professionally crafted 925 sterling silver jewelry.",
      cta: "Explore İstanbul Gümüş",
      note: "This content is sponsored by İstanbul Gümüş.",
    },
    darkMode: "Mode",
  },
  ar: {
    nav: "سيلفر أطلس", navSub: "منصة معرفة الفضة",
    breadcrumb: ["الرئيسية", "الحرف", "اللحام والإصلاح"],
    category: "الحرف",
    title: "دليل لحام وإصلاح الفضة",
    subtitle: "إصلاح المجوهرات، تقنيات اللحام، الصيانة المنزلية وطرق الإصلاح الاحترافية",
    meta: { author: "توران إرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٤ دقيقة قراءة" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "قد تنكسر مجوهرات الفضة أثناء الاستخدام اليومي، وقد تتراخى نقاط الاتصال أو تتآكل الأسطح مع مرور الوقت. على الرغم من أن الإصلاح المهني قد يكون مكلفاً، إلا أن معرفة تقنيات اللحام والإصلاح الأساسية توفر المال وتفتح الباب أمام فن صناعة المجوهرات.",
          "يقدم هذا الدليل خريطة طريق شاملة من أساسيات اللحام إلى تقنيات الإصلاح المتقدمة، مع قواعد السلامة والمواد المطلوبة والتعليمات خطوة بخطوة.",
        ],
      },
      {
        id: "basics", heading: "أساسيات اللحام",
        paragraphs: [
          "لحام الفضة يربط قطعتين من الفضة باستخدام سبيكة لحام. اللحام الناعم يعمل في درجات حرارة منخفضة (٢٠٠-٣٠٠ درجة)؛ واللحام الصلب يذوب بين ٦٠٠-٧٥٠ درجة ويخلق رابطة أقوى بكثير.",
          "يُفضل اللحام الصلب عموماً في إصلاح المجوهرات. يأتي سلك اللحام بدرجات انصهار مختلفة: صلب (٧٤٥ درجة)، متوسط (٧٢٠ درجة)، سهل (٦٨٠ درجة)، وسهل جداً (٦٥٠ درجة).",
          "مادة التدفق (الفلكس) ضرورية — فهي تمنع الأكسدة وتضمن تدفق اللحام على أسطح المعادن النظيفة.",
        ],
      },
      {
        id: "techniques", heading: "تقنيات اللحام",
        paragraphs: [
          "فيما يلي مقارنة بين تقنيات لحام وإصلاح الفضة الرئيسية:",
        ],
        widget: "techniqueGrid",
      },
      {
        id: "materials", heading: "المواد المطلوبة",
        paragraphs: [
          "مجموعة اللحام الأساسية: شعلة بروبان أو بيوتان، سلك لحام فضة، فلكس بوراكس، كتلة لحام مقاومة للحرارة، ملقط نحاسي، وإسفنج سيراميك ومحلول التنظيف.",
          "أدوات متقدمة: حامل ذو يد ثالثة، شعلة دقيقة، لحام معجون، عدسة مكبرة بإضاءة، ملقط تيتانيوم وحمض الأوكساليك.",
          "معدات السلامة: قفازات مقاومة للحرارة، نظارات واقية، منطقة عمل جيدة التهوية، طفاية حريق.",
        ],
      },
      {
        id: "steps", heading: "خطوة بخطوة: إصلاح خاتم مكسور",
        paragraphs: [
          "١) التنظيف: اغسل الخاتم بالماء الدافئ والصابون وجففه. أزل أي لحام قديم بورق الصنفرة.",
          "٢) التموضع: رتب القطع المكسورة بأقرب ما يمكن. استخدم حاملاً. يجب أن تكون الفجوة أقل من ملليمتر.",
          "٣) الفلكس: ضع طبقة رقيقة من الفلكس على المنطقة المراد لحامها.",
          "٤) وضع اللحام: قص قطعة صغيرة (١-٢ مم) وضعها عند نقطة التوصيل.",
          "٥) التسخين: وجه الشعلة نحو القطعة بأكملها. الفضة موصل حراري ممتاز وتحتاج تسخيناً متساوياً.",
          "٦) التبريد والتنظيف: اتركها لتبرد طبيعياً أو اغمرها في محلول التنظيف.",
        ],
      },
      {
        id: "problems", heading: "المشاكل الشائعة",
        paragraphs: [
          "اللحام لا يتدفق: السبب الأشيع هو الحرارة غير الكافية أو السطح المتسخ. أعد التنظيف وسخّن لفترة أطول.",
          "الذوبان: نقطة انصهار الفضة (٩٦١ درجة) ليست بعيدة عن نقطة انصهار اللحام. لا تثبت الشعلة — حركها باستمرار.",
          "الاسوداد: أكسدة طبيعية. تُنظف بمحلول التنظيف.",
          "اللحام المسامي: فقاعات صغيرة عادة ما تنتج عن نقص الفلكس.",
        ],
      },
      {
        id: "professional", heading: "متى تستشير متخصصاً؟",
        paragraphs: [
          "بعض الإصلاحات لا ينبغي محاولتها في المنزل: لحام المجوهرات المرصعة بالأحجار، القطع الأثرية، آليات المفصلات المعقدة، والقطع المختلطة من الذهب والفضة.",
          "إذا كان اللحام بالقرب من حجر ضرورياً، يمكن لف الحجر بقماش مبلل للحماية الجزئية. لكن للأحجار الحساسة كالجمشت والعقيق والزمرد، قد لا يكفي ذلك.",
        ],
      },
    ],
    techniques: [
      { name: "اللحام الصلب", temp: "٦٥٠-٧٤٥°م", strength: "عالية جداً", use: "الوصلات الهيكلية", difficulty: "متوسط", icon: "🔥" },
      { name: "اللحام الناعم", temp: "٢٠٠-٣٠٠°م", strength: "منخفضة", use: "إصلاح مؤقت", difficulty: "سهل", icon: "🕯️" },
      { name: "لحام TIG", temp: "+١٥٠٠°م", strength: "الأعلى", use: "صناعي، قطع سميكة", difficulty: "متقدم", icon: "⚡" },
      { name: "لحام ليزر", temp: "نقطي", strength: "عالية", use: "مجوهرات مرصعة", difficulty: "احترافي", icon: "💎" },
      { name: "ربط بارد", temp: "لا يوجد", strength: "متوسطة", use: "برشام، لف", difficulty: "سهل", icon: "🔩" },
      { name: "لصق إيبوكسي", temp: "لا يوجد", strength: "منخفضة-متوسطة", use: "إصلاح طارئ", difficulty: "سهل", icon: "🧪" },
    ],
    faq: {
      heading: "الأسئلة الشائعة",
      items: [
        { q: "هل لحام الفضة في المنزل آمن؟", a: "نعم، مع اتخاذ تدابير السلامة المناسبة. التهوية الجيدة ونظارات السلامة وسطح عمل مقاوم للحرارة أمور أساسية." },
        { q: "هل ستكون علامة اللحام مرئية؟", a: "اللحام الجيد يكاد يكون غير مرئي. التلميع بعد اللحام والطلاء الاختياري يمكن أن يخفي الوصلة تماماً." },
        { q: "هل يمكنني استخدام لحام القصدير العادي؟", a: "لا يُنصح به لمجوهرات الفضة. يوفر لحام القصدير قوة منخفضة ويتغير لونه مع الوقت." },
        { q: "هل يمكنني إصلاح سلسلة مكسورة في المنزل؟", a: "ممكن للسلاسل ذات الحلقات السميكة. لكن السلاسل الرفيعة تتطلب إصلاحاً احترافياً." },
      ],
    },
    sources: {
      heading: "المصادر",
      items: [
        "Tim McCreight — Complete Metalsmith",
        "Oppi Untracht — Jewelry Concepts and Technology",
        "جمعية الصاغة التركية — معايير اللحام ودليل السلامة",
        "Ganoksin — تقنيات اللحام للصاغة",
      ],
    },
    related: {
      heading: "مواضيع ذات صلة",
      items: [
        { title: "ما هو عيار ٩٢٥؟", path: "/ar/manufacturing/925", cat: "التصنيع" },
        { title: "دليل العناية", path: "/ar/guide/care", cat: "الدليل" },
        { title: "دليل السبائك", path: "/ar/guide/alloys", cat: "الدليل" },
      ],
    },
    sponsor: {
      text: "اكتشف مجوهرات الفضة عيار ٩٢٥ المصنوعة باحتراف.",
      cta: "استكشف إسطنبول غوموش",
      note: "هذا المحتوى برعاية إسطنبول غوموش.",
    },
    darkMode: "الوضع",
  },
};

/* ─── Technique Grid Widget ─── */
function TechniqueGrid({ techniques, dark, lang }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const accent = dark ? "#C0C0C0" : "#708090";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const bgCard = dark ? "#1a1a24" : "#ffffff";
  const diffColors = { Kolay: "#4CAF50", Easy: "#4CAF50", "سهل": "#4CAF50", Orta: "#FF9800", Medium: "#FF9800", "متوسط": "#FF9800", İleri: "#f44336", Advanced: "#f44336", "متقدم": "#f44336", Profesyonel: "#9C27B0", Professional: "#9C27B0", "احترافي": "#9C27B0" };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14, marginTop: 8 }}>
      {techniques.map((t, i) => (
        <div key={i} style={{ background: bgCard, borderRadius: 12, padding: 18, border: `1px solid ${border}`, transition: "transform 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 28 }}>{t.icon}</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: 15, color: textP }}>{t.name}</div>
              <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 4, background: `${diffColors[t.difficulty] || accent}22`, color: diffColors[t.difficulty] || accent, fontWeight: 600 }}>{t.difficulty}</span>
            </div>
          </div>
          <div style={{ fontSize: 12, color: textS, marginBottom: 6 }}>
            <span style={{ color: accent, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>{t.temp}</span>
          </div>
          <div style={{ fontSize: 12, color: textS, marginBottom: 4 }}>
            {lang === "ar" ? "القوة" : lang === "en" ? "Strength" : "Mukavemet"}: <strong style={{ color: textP }}>{t.strength}</strong>
          </div>
          <div style={{ fontSize: 12, color: textS, lineHeight: 1.5 }}>{t.use}</div>
        </div>
      ))}
    </div>
  );
}

/* ─── Main Article Component ─── */
export default function SolderingRepairArticle() {
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        * { margin:0; padding:0; box-sizing:border-box; }
        ::selection { background: rgba(192,192,192,0.3); }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: dark ? "rgba(15,15,20,0.88)" : "rgba(250,250,245,0.88)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${border}`, padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg, ${accent}, ${gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#0f0f14", fontFamily: fontD }}>Ag</div>
          <span style={{ fontFamily: fontD, fontWeight: 600, fontSize: 16 }}>{t.nav}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", gap: 2, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", borderRadius: 7, padding: 2 }}>
            {["tr", "en", "ar"].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{ border: "none", cursor: "pointer", padding: "3px 9px", borderRadius: 5, fontSize: 11, fontWeight: lang === l ? 600 : 400, fontFamily: l === "ar" ? "'Noto Naskh Arabic', serif" : fontB, background: lang === l ? (dark ? "rgba(192,192,192,0.15)" : "rgba(0,0,0,0.08)") : "transparent", color: lang === l ? textP : textS, transition: "all 0.2s" }}>{l === "ar" ? "عر" : l.toUpperCase()}</button>
            ))}
          </div>
          <button onClick={() => setDark(!dark)} style={{ border: "none", cursor: "pointer", background: "transparent", color: textS, fontSize: 16, padding: 4 }}>{dark ? "☀️" : "🌙"}</button>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "16px 24px 0", display: "flex", gap: 8, fontSize: 12, color: textS, flexWrap: "wrap" }}>
        {t.breadcrumb.map((b, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {i > 0 && <span style={{ opacity: 0.4 }}>/</span>}
            <span style={{ color: i === t.breadcrumb.length - 1 ? accent : textS }}>{b}</span>
          </span>
        ))}
      </div>

      {/* ARTICLE */}
      <article style={{ maxWidth: 760, margin: "0 auto", padding: "32px 24px 64px", animation: "fadeUp 0.6s ease both" }}>
        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: 6, fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: gold, border: `1px solid ${gold}33`, marginBottom: 16 }}>{t.category}</div>
          <h1 style={{ fontFamily: fontD, fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 12 }}>{t.title}</h1>
          <p style={{ fontSize: 16, color: textS, lineHeight: 1.6, marginBottom: 20 }}>{t.subtitle}</p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", fontSize: 13, color: textS, paddingBottom: 20, borderBottom: `1px solid ${border}` }}>
            <span>{t.meta.author}</span><span style={{ opacity: 0.3 }}>·</span>
            <span>{t.meta.date}</span><span style={{ opacity: 0.3 }}>·</span>
            <span>{t.meta.readTime}</span>
          </div>
        </div>

        {/* Sections */}
        {t.sections.map((sec, i) => (
          <section key={sec.id} style={{ marginBottom: 40 }}>
            {sec.heading && <h2 style={{ fontFamily: fontD, fontSize: 22, fontWeight: 600, marginBottom: 16, color: accent }}>{sec.heading}</h2>}
            {sec.paragraphs.map((p, j) => (
              <p key={j} style={{ fontSize: 15.5, lineHeight: 1.85, color: textP, marginBottom: 14, opacity: 0.92 }}>{p}</p>
            ))}
            {sec.widget === "techniqueGrid" && <TechniqueGrid techniques={t.techniques} dark={dark} lang={lang} />}
          </section>
        ))}

        {/* FAQ */}
        <section style={{ marginTop: 48, marginBottom: 40 }}>
          <h2 style={{ fontFamily: fontD, fontSize: 22, fontWeight: 600, marginBottom: 20, color: accent }}>{t.faq.heading}</h2>
          {t.faq.items.map((item, i) => (
            <div key={i} style={{ marginBottom: 8, borderRadius: 10, border: `1px solid ${border}`, overflow: "hidden" }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", textAlign: isRTL ? "right" : "left", padding: "14px 18px", background: openFaq === i ? (dark ? "rgba(192,192,192,0.05)" : "rgba(192,192,192,0.08)") : "transparent", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: textP, display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: fontB }}>
                <span>{item.q}</span>
                <span style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s", fontSize: 12, color: textS }}>▼</span>
              </button>
              {openFaq === i && <div style={{ padding: "0 18px 16px", fontSize: 14, lineHeight: 1.7, color: textS }}>{item.a}</div>}
            </div>
          ))}
        </section>

        {/* Sources */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: fontD, fontSize: 18, fontWeight: 600, marginBottom: 12, color: accent }}>{t.sources.heading}</h2>
          {t.sources.items.map((s, i) => (
            <div key={i} style={{ fontSize: 13, color: textS, padding: "6px 0", borderBottom: `1px solid ${border}` }}>{i + 1}. {s}</div>
          ))}
        </section>

        {/* Related */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: fontD, fontSize: 18, fontWeight: 600, marginBottom: 12, color: accent }}>{t.related.heading}</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {t.related.items.map((r, i) => (
              <a key={i} href={r.path} style={{ padding: "10px 16px", borderRadius: 8, border: `1px solid ${border}`, textDecoration: "none", color: textP, fontSize: 13, fontWeight: 500, background: dark ? "rgba(192,192,192,0.03)" : "rgba(192,192,192,0.06)" }}>
                <span style={{ fontSize: 10, color: gold, marginRight: 6 }}>{r.cat}</span>{r.title}
              </a>
            ))}
          </div>
        </section>

        {/* Sponsor CTA */}
        <div style={{ background: `linear-gradient(135deg, ${dark ? "rgba(212,175,55,0.06)" : "rgba(212,175,55,0.08)"}, transparent)`, borderRadius: 14, padding: 24, textAlign: "center", border: `1px solid ${gold}22` }}>
          <p style={{ fontSize: 14, color: textS, marginBottom: 12 }}>{t.sponsor.text}</p>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "10px 28px", borderRadius: 8, background: `linear-gradient(135deg, ${gold}, #c9a227)`, color: "#0f0f14", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>{t.sponsor.cta}</a>
          <p style={{ fontSize: 11, color: textS, marginTop: 10, opacity: 0.6 }}>{t.sponsor.note}</p>
        </div>
      </article>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${border}`, padding: "24px", textAlign: "center", fontSize: 12, color: textS }}>
        © 2026 SilverAtlas · {t.meta.author}
      </footer>
    </div>
  );
}
