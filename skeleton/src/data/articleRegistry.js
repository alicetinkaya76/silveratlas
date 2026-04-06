/**
 * SilverAtlas — Article Registry (Faz 1-7 Complete)
 * Central registry for all 50 articles with multilingual metadata.
 * Updated: Faz 7 — full 50 entries
 */
export const articleRegistry = [
  // ═══ Faz 1 ═══════════════════════════════════════════
  { id: 1, slug: '925-ayar', file: 'silveratlas-925-article.jsx', phase: 1,
    category: 'uretim', readMin: 8, hasWidget: true,
    title: { tr: '925 Ayar Gümüş Nedir?', en: 'What is 925 Sterling Silver?', ar: 'ما هو عيار ٩٢٥؟' },
    description: { tr: 'Sterling gümüşün standartları ve alaşım rehberi', en: 'Sterling silver standards and alloy guide', ar: 'معايير الفضة الإسترلينية ودليل السبائك' },
    tags: ['925', 'sterling', 'ayar', 'alaşım'] },

  { id: 2, slug: 'tarih', file: 'silveratlas-history-article.jsx', phase: 1,
    category: 'tarih', readMin: 12, hasWidget: false,
    title: { tr: 'Gümüşün Tarihi', en: 'History of Silver', ar: 'تاريخ الفضة' },
    description: { tr: 'MÖ 5000\'den günümüze gümüşün hikâyesi', en: 'Silver\'s story from 5000 BCE to present', ar: 'قصة الفضة من ٥٠٠٠ ق.م حتى اليوم' },
    tags: ['tarih', 'history', 'antik', 'medeniyet'] },

  { id: 3, slug: 'gumus-vs-altin', file: 'silveratlas-silver-vs-gold.jsx', phase: 1,
    category: 'karsilastirma', readMin: 10, hasWidget: true,
    title: { tr: 'Gümüş vs Altın', en: 'Silver vs Gold', ar: 'الفضة مقابل الذهب' },
    description: { tr: 'İki değerli metalin kapsamlı karşılaştırması', en: 'Comprehensive comparison of two precious metals', ar: 'مقارنة شاملة بين المعدنين الثمينين' },
    tags: ['altın', 'gold', 'karşılaştırma', 'yatırım'] },

  // ═══ Faz 2 ═══════════════════════════════════════════
  { id: 4, slug: 'telkari', file: 'silveratlas-telkari-article.jsx', phase: 2,
    category: 'zanaat', readMin: 9, hasWidget: false,
    title: { tr: 'Telkâri Sanatı', en: 'The Art of Filigree', ar: 'فن التخريم' },
    description: { tr: 'Gümüş telkâri geleneği ve teknikleri', en: 'Silver filigree tradition and techniques', ar: 'تقليد وتقنيات التخريم الفضي' },
    tags: ['telkâri', 'filigree', 'zanaat', 'Mardin'] },

  // ═══ Faz 3 ═══════════════════════════════════════════
  { id: 5, slug: 'kimya', file: 'silveratlas-chemistry-article.jsx', phase: 3,
    category: 'bilim', readMin: 10, hasWidget: true,
    title: { tr: 'Gümüşün Kimyası', en: 'Chemistry of Silver', ar: 'كيمياء الفضة' },
    description: { tr: 'Ag elementi: atom yapısı, bağlar ve reaksiyonlar', en: 'Ag element: atomic structure, bonds and reactions', ar: 'عنصر الفضة: البنية الذرية والروابط والتفاعلات' },
    tags: ['kimya', 'element', 'atom', 'Ag', 'periyodik'] },

  { id: 6, slug: 'antimikrobiyal', file: 'silveratlas-antimicrobial-article.jsx', phase: 3,
    category: 'bilim', readMin: 8, hasWidget: false,
    title: { tr: 'Antimikrobiyal Özellikler', en: 'Antimicrobial Properties', ar: 'الخصائص المضادة للميكروبات' },
    description: { tr: 'Gümüşün bakteri öldürme mekanizması ve tıbbi kullanım', en: 'Silver\'s bactericidal mechanism and medical use', ar: 'آلية قتل البكتيريا والاستخدام الطبي' },
    tags: ['antimikrobiyal', 'tıp', 'nano', 'bakteri'] },

  { id: 7, slug: 'endustriyel', file: 'silveratlas-industrial-uses-article.jsx', phase: 3,
    category: 'bilim', readMin: 9, hasWidget: false,
    title: { tr: 'Endüstriyel Kullanım', en: 'Industrial Uses', ar: 'الاستخدامات الصناعية' },
    description: { tr: 'Elektronik, güneş paneli, tıp ve daha fazlası', en: 'Electronics, solar panels, medicine and more', ar: 'الإلكترونيات والألواح الشمسية والطب' },
    tags: ['endüstri', 'elektronik', 'güneş', 'solar'] },

  { id: 8, slug: 'yatirim-rehberi', file: 'silveratlas-investment-guide-article.jsx', phase: 3,
    category: 'piyasa', readMin: 11, hasWidget: false,
    title: { tr: 'Gümüş Yatırım Rehberi', en: 'Silver Investment Guide', ar: 'دليل استثمار الفضة' },
    description: { tr: 'Fiziki gümüş, ETF, vadeli işlem stratejileri', en: 'Physical silver, ETF, futures strategies', ar: 'الفضة المادية وصناديق المؤشرات واستراتيجيات العقود' },
    tags: ['yatırım', 'ETF', 'külçe', 'portföy'] },

  { id: 9, slug: 'fiyat-tarihi', file: 'silveratlas-price-history-article.jsx', phase: 3,
    category: 'piyasa', readMin: 10, hasWidget: false,
    title: { tr: 'Gümüş Fiyat Tarihi', en: 'Silver Price History', ar: 'تاريخ أسعار الفضة' },
    description: { tr: 'Hunt kardeşlerden 2020\'lere fiyat dalgalanmaları', en: 'Price fluctuations from Hunt brothers to 2020s', ar: 'تقلبات الأسعار من الأخوين هانت إلى العشرينيات' },
    tags: ['fiyat', 'grafik', 'Hunt', 'tarihsel'] },

  { id: 10, slug: 'arz-talep', file: 'silveratlas-supply-demand-article.jsx', phase: 3,
    category: 'piyasa', readMin: 9, hasWidget: false,
    title: { tr: 'Arz-Talep Analizi', en: 'Supply-Demand Analysis', ar: 'تحليل العرض والطلب' },
    description: { tr: 'Küresel gümüş arz-talep dengesinin detaylı analizi', en: 'Detailed analysis of global silver supply-demand balance', ar: 'تحليل تفصيلي لتوازن العرض والطلب العالمي' },
    tags: ['arz', 'talep', 'üretim', 'tüketim'] },

  { id: 11, slug: '2026-trendleri', file: 'silveratlas-2026-trends-article.jsx', phase: 3,
    category: 'piyasa', readMin: 8, hasWidget: false,
    title: { tr: '2026 Gümüş Trendleri', en: '2026 Silver Trends', ar: 'اتجاهات الفضة ٢٠٢٦' },
    description: { tr: 'Yılın öne çıkan gümüş trendleri ve tahminler', en: 'Top silver trends and forecasts for the year', ar: 'أبرز اتجاهات الفضة والتوقعات للعام' },
    tags: ['2026', 'trend', 'tahmin', 'gelecek'] },

  { id: 12, slug: 'dunya-madenleri', file: 'silveratlas-global-mines-article.jsx', phase: 3,
    category: 'maden', readMin: 10, hasWidget: false,
    title: { tr: 'Dünya Gümüş Madenleri', en: 'World Silver Mines', ar: 'مناجم الفضة العالمية' },
    description: { tr: 'En büyük gümüş madenleri ve üretim verileri', en: 'Largest silver mines and production data', ar: 'أكبر مناجم الفضة وبيانات الإنتاج' },
    tags: ['maden', 'Meksika', 'Peru', 'Çin', 'üretim'] },

  { id: 13, slug: 'turkiye-madencilik', file: 'silveratlas-turkey-mining-article.jsx', phase: 3,
    category: 'maden', readMin: 9, hasWidget: false,
    title: { tr: 'Türkiye Gümüş Madenciliği', en: 'Turkey Silver Mining', ar: 'تعدين الفضة في تركيا' },
    description: { tr: 'Türkiye\'deki gümüş madenleri ve üretim potansiyeli', en: 'Silver mines and production potential in Turkey', ar: 'مناجم الفضة وإمكانات الإنتاج في تركيا' },
    tags: ['Türkiye', 'maden', 'Gümüşhane', 'Tokat'] },

  { id: 14, slug: 'uretim-sureci', file: 'silveratlas-production-process-article.jsx', phase: 3,
    category: 'uretim', readMin: 10, hasWidget: false,
    title: { tr: 'Gümüş Üretim Süreci', en: 'Silver Production Process', ar: 'عملية إنتاج الفضة' },
    description: { tr: 'Cevherden takıya: gümüş üretim aşamaları', en: 'From ore to jewelry: silver production stages', ar: 'من الخام إلى المجوهرات: مراحل إنتاج الفضة' },
    tags: ['üretim', 'döküm', 'presleme', 'takı'] },

  { id: 15, slug: 'erkek-aksesuarlari', file: 'silveratlas-mens-accessories-article.jsx', phase: 3,
    category: 'stil', readMin: 8, hasWidget: false,
    title: { tr: 'Erkek Gümüş Aksesuarları', en: 'Men\'s Silver Accessories', ar: 'إكسسوارات الفضة الرجالية' },
    description: { tr: 'Yüzük, bileklik, kol düğmesi stil rehberi', en: 'Ring, bracelet, cufflink style guide', ar: 'دليل أسلوب الخاتم والسوار وأزرار الأكمام' },
    tags: ['erkek', 'aksesuar', 'yüzük', 'bileklik', 'stil'] },

  { id: 16, slug: 'osmanli', file: 'silveratlas-ottoman-silver-article.jsx', phase: 3,
    category: 'tarih', readMin: 11, hasWidget: false,
    title: { tr: 'Osmanlı Gümüşçülüğü', en: 'Ottoman Silversmithing', ar: 'صياغة الفضة العثمانية' },
    description: { tr: 'Saray atölyelerinden Grand Bazaar\'a', en: 'From palace workshops to Grand Bazaar', ar: 'من ورش القصر إلى البازار الكبير' },
    tags: ['Osmanlı', 'saray', 'tuğra', 'Grand Bazaar'] },

  { id: 17, slug: 'anadolu-folklor', file: 'silveratlas-anatolian-folklore-article.jsx', phase: 3,
    category: 'tarih', readMin: 9, hasWidget: false,
    title: { tr: 'Anadolu Gümüş Folkloru', en: 'Anatolian Silver Folklore', ar: 'فولكلور الفضة الأناضولي' },
    description: { tr: 'Nazar, takı gelenekleri ve halk inançları', en: 'Evil eye, jewelry traditions and folk beliefs', ar: 'العين الشريرة وتقاليد المجوهرات والمعتقدات الشعبية' },
    tags: ['folklor', 'nazar', 'gelenek', 'Anadolu'] },

  { id: 18, slug: 'dunya-kulturleri', file: 'silveratlas-world-cultures-article.jsx', phase: 3,
    category: 'kultur', readMin: 10, hasWidget: false,
    title: { tr: 'Dünya Kültürlerinde Gümüş', en: 'Silver in World Cultures', ar: 'الفضة في ثقافات العالم' },
    description: { tr: 'Beş kıtada gümüşün kültürel rolü', en: 'Cultural role of silver across five continents', ar: 'الدور الثقافي للفضة عبر خمس قارات' },
    tags: ['kültür', 'dünya', 'gelenek', 'sembol'] },

  { id: 19, slug: 'islam-gumus-genis', file: 'silveratlas-islam-silver-article.jsx', phase: 3,
    category: 'kultur', readMin: 11, hasWidget: false,
    title: { tr: 'İslam\'da Gümüş (Geniş)', en: 'Silver in Islam (Comprehensive)', ar: 'الفضة في الإسلام (شامل)' },
    description: { tr: 'Hadis, gelenek ve İslam medeniyetinde gümüş', en: 'Hadith, tradition and silver in Islamic civilization', ar: 'الحديث والتقاليد والفضة في الحضارة الإسلامية' },
    tags: ['İslam', 'hadis', 'sünnet', 'medeniyet'] },

  // ═══ Faz 4 ═══════════════════════════════════════════
  { id: 20, slug: 'ayar-damgasi', file: 'silveratlas-hallmark-guide-article.jsx', phase: 4,
    category: 'uretim', readMin: 10, hasWidget: true,
    title: { tr: 'Ayar Damgası Rehberi', en: 'Hallmark Guide', ar: 'دليل أختام العيار' },
    description: { tr: '10 ülke ayar damgası tanıma kartları', en: '10 country hallmark identification cards', ar: 'بطاقات تعريف أختام ١٠ دول' },
    tags: ['damga', 'hallmark', 'ayar', 'darphane'] },

  { id: 21, slug: 'sembolizm', file: 'silveratlas-symbolism-article.jsx', phase: 4,
    category: 'kultur', readMin: 9, hasWidget: true,
    title: { tr: 'Gümüş Sembolizmi', en: 'Silver Symbolism', ar: 'رمزية الفضة' },
    description: { tr: 'Medeniyet, mitoloji ve inanç sistemlerinde gümüş', en: 'Silver in civilizations, mythology and beliefs', ar: 'الفضة في الحضارات والأساطير والمعتقدات' },
    tags: ['sembol', 'mitoloji', 'Ay', 'simya'] },

  { id: 22, slug: 'potosi', file: 'silveratlas-potosi-article.jsx', phase: 4,
    category: 'tarih', readMin: 12, hasWidget: true,
    title: { tr: 'Potosí: Gümüş Dağı', en: 'Potosí: The Silver Mountain', ar: 'بوتوسي: جبل الفضة' },
    description: { tr: 'Dünyayı değiştiren gümüş dağının tarihi', en: 'History of the silver mountain that changed the world', ar: 'تاريخ جبل الفضة الذي غيّر العالم' },
    tags: ['Potosí', 'Bolivya', 'sömürge', 'İspanya'] },

  { id: 23, slug: 'fotografcilik', file: 'silveratlas-photography-article.jsx', phase: 4,
    category: 'bilim', readMin: 9, hasWidget: true,
    title: { tr: 'Gümüş ve Fotoğrafçılık', en: 'Silver and Photography', ar: 'الفضة والتصوير' },
    description: { tr: 'Gümüş halojenürden dijitale fotoğrafın evrimi', en: 'Evolution of photography from silver halide to digital', ar: 'تطور التصوير من هاليد الفضة إلى الرقمي' },
    tags: ['fotoğraf', 'halojenür', 'film', 'dagerotipi'] },

  { id: 24, slug: 'fiziksel-ozellikler', file: 'silveratlas-physical-properties-article.jsx', phase: 4,
    category: 'bilim', readMin: 8, hasWidget: true,
    title: { tr: 'Fiziksel Özellikler', en: 'Physical Properties', ar: 'الخصائص الفيزيائية' },
    description: { tr: 'İletkenlik, yansıtıcılık, süneklik ve daha fazlası', en: 'Conductivity, reflectivity, ductility and more', ar: 'التوصيل والانعكاسية والمرونة' },
    tags: ['fizik', 'iletkenlik', 'yansıtıcılık', 'süneklik'] },

  { id: 25, slug: 'rafinasyon', file: 'silveratlas-refining-article.jsx', phase: 4,
    category: 'uretim', readMin: 10, hasWidget: true,
    title: { tr: 'Rafinasyon Süreci', en: 'Refining Process', ar: 'عملية التكرير' },
    description: { tr: 'Ham gümüşten %99.99 saflığa akış şeması', en: 'Flowchart from raw silver to 99.99% purity', ar: 'مخطط تدفق من الفضة الخام إلى نقاء ٩٩.٩٩٪' },
    tags: ['rafinasyon', 'elektroliz', 'saflık', 'ergitme'] },

  { id: 26, slug: 'anadolu-geleneği', file: 'silveratlas-anatolian-heritage-article.jsx', phase: 4,
    category: 'tarih', readMin: 11, hasWidget: true,
    title: { tr: 'Anadolu Gümüş Geleneği', en: 'Anatolian Silver Heritage', ar: 'تراث الفضة الأناضولي' },
    description: { tr: '8 bölgesel merkezin gümüş mirası', en: 'Silver heritage of 8 regional centers', ar: 'تراث الفضة لثمانية مراكز إقليمية' },
    tags: ['Anadolu', 'bölge', 'miras', 'zanaat'] },

  { id: 27, slug: 'kulturel-motifler', file: 'silveratlas-cultural-motifs-article.jsx', phase: 4,
    category: 'stil', readMin: 9, hasWidget: true,
    title: { tr: 'Kültürel Motifler', en: 'Cultural Motifs', ar: 'الزخارف الثقافية' },
    description: { tr: '12 motifin köken ve anlamı', en: 'Origin and meaning of 12 motifs', ar: 'أصل ومعنى ١٢ زخرفة' },
    tags: ['motif', 'desen', 'süsleme', 'çini'] },

  { id: 28, slug: 'gumus-rezervleri', file: 'silveratlas-reserves-article.jsx', phase: 4,
    category: 'maden', readMin: 9, hasWidget: true,
    title: { tr: 'Dünya Gümüş Rezervleri', en: 'World Silver Reserves', ar: 'احتياطيات الفضة العالمية' },
    description: { tr: 'Ülkelere göre kanıtlanmış gümüş rezervleri', en: 'Proven silver reserves by country', ar: 'احتياطيات الفضة المؤكدة حسب الدولة' },
    tags: ['rezerv', 'kaynak', 'Peru', 'Avustralya'] },

  { id: 29, slug: 'islam-fikih', file: 'silveratlas-islam-article.jsx', phase: 4,
    category: 'kultur', readMin: 10, hasWidget: true,
    title: { tr: 'İslam\'da Gümüş (Fıkıh)', en: 'Silver in Islamic Jurisprudence', ar: 'الفضة في الفقه الإسلامي' },
    description: { tr: '6 fıkıh hükmü ile gümüş kullanım rehberi', en: 'Silver usage guide with 6 jurisprudential rulings', ar: 'دليل استخدام الفضة مع ٦ أحكام فقهية' },
    tags: ['fıkıh', 'helal', 'haram', 'zekât'] },

  { id: 30, slug: 'cevresel-etki', file: 'silveratlas-environmental-impact-article.jsx', phase: 4,
    category: 'maden', readMin: 10, hasWidget: true,
    title: { tr: 'Çevresel Etki', en: 'Environmental Impact', ar: 'التأثير البيئي' },
    description: { tr: 'Madencilik, geri dönüşüm ve ekolojik ayak izi', en: 'Mining, recycling and ecological footprint', ar: 'التعدين وإعادة التدوير والبصمة البيئية' },
    tags: ['çevre', 'karbon', 'geri dönüşüm', 'atık'] },

  { id: 31, slug: 'gumusun-gelecegi', file: 'silveratlas-future-of-silver-article.jsx', phase: 4,
    category: 'piyasa', readMin: 10, hasWidget: true,
    title: { tr: 'Gümüşün Geleceği', en: 'Future of Silver', ar: 'مستقبل الفضة' },
    description: { tr: 'Teknoloji, enerji dönüşümü ve gelecek trendler', en: 'Technology, energy transition and future trends', ar: 'التكنولوجيا وتحول الطاقة والاتجاهات المستقبلية' },
    tags: ['gelecek', 'trend', 'teknoloji', 'yeşil enerji'] },

  { id: 32, slug: 'turkiye-sektoru', file: 'silveratlas-turkey-sector-article.jsx', phase: 4,
    category: 'piyasa', readMin: 9, hasWidget: true,
    title: { tr: 'Türkiye Gümüş Sektörü', en: 'Turkey Silver Sector', ar: 'قطاع الفضة في تركيا' },
    description: { tr: 'İhracat, üretim ve sektör analizi', en: 'Export, production and sector analysis', ar: 'التصدير والإنتاج وتحليل القطاع' },
    tags: ['Türkiye', 'ihracat', 'sektör', 'Konya'] },

  { id: 33, slug: 'muzeler', file: 'silveratlas-museums-article.jsx', phase: 4,
    category: 'kultur', readMin: 8, hasWidget: true,
    title: { tr: 'Gümüş Müzeleri', en: 'Silver Museums', ar: 'متاحف الفضة' },
    description: { tr: 'Dünyanın en önemli gümüş koleksiyonları', en: 'World\'s most important silver collections', ar: 'أهم مجموعات الفضة في العالم' },
    tags: ['müze', 'koleksiyon', 'V&A', 'Topkapı'] },

  { id: 34, slug: 'styling-rehberi', file: 'silveratlas-styling-guide-article.jsx', phase: 4,
    category: 'stil', readMin: 9, hasWidget: true,
    title: { tr: 'Gümüş Styling Rehberi', en: 'Silver Styling Guide', ar: 'دليل تنسيق الفضة' },
    description: { tr: 'Ten tonu, kıyafet uyumu ve katmanlama', en: 'Skin tone, outfit matching and layering', ar: 'لون البشرة وتنسيق الملابس والطبقات' },
    tags: ['stil', 'moda', 'ten tonu', 'katmanlama'] },

  // ═══ Faz 5 ═══════════════════════════════════════════
  { id: 35, slug: 'lehimleme-onarim', file: 'silveratlas-soldering-repair-article.jsx', phase: 5,
    category: 'zanaat', readMin: 10, hasWidget: true,
    title: { tr: 'Lehimleme ve Onarım', en: 'Soldering & Repair', ar: 'اللحام والإصلاح' },
    description: { tr: '6 temel lehimleme ve onarım tekniği', en: '6 essential soldering and repair techniques', ar: '٦ تقنيات أساسية للحام والإصلاح' },
    tags: ['lehimleme', 'onarım', 'kaynak', 'alet'] },

  { id: 36, slug: 'antik-koleksiyon', file: 'silveratlas-antique-collecting-article.jsx', phase: 5,
    category: 'koleksiyon', readMin: 11, hasWidget: true,
    title: { tr: 'Antik Gümüş Koleksiyonculuğu', en: 'Antique Silver Collecting', ar: 'جمع الفضيات العتيقة' },
    description: { tr: '8 tarihi dönem ve koleksiyon rehberi', en: '8 historical periods and collecting guide', ar: '٨ فترات تاريخية ودليل الجمع' },
    tags: ['antik', 'koleksiyon', 'Viktorya', 'Art Deco'] },

  { id: 37, slug: 'astroloji', file: 'silveratlas-astrology-article.jsx', phase: 5,
    category: 'kultur', readMin: 9, hasWidget: true,
    title: { tr: 'Gümüş ve Astroloji', en: 'Silver and Astrology', ar: 'الفضة والتنجيم' },
    description: { tr: '12 burç gümüş uyum rehberi', en: '12 zodiac silver compatibility guide', ar: 'دليل توافق الفضة لـ ١٢ برجًا' },
    tags: ['astroloji', 'burç', 'Ay', 'uyum'] },

  { id: 38, slug: 'dunya-piyasasi-2026', file: 'silveratlas-world-market-2026-article.jsx', phase: 5,
    category: 'piyasa', readMin: 10, hasWidget: true,
    title: { tr: 'Dünya Piyasası 2026', en: 'World Market 2026', ar: 'السوق العالمي ٢٠٢٦' },
    description: { tr: '4 büyük borsa ve piyasa analizi', en: '4 major exchanges and market analysis', ar: '٤ بورصات كبرى وتحليل السوق' },
    tags: ['borsa', 'COMEX', 'LBMA', 'Shanghai'] },

  { id: 39, slug: 'kaplama-vs-masif', file: 'silveratlas-plating-vs-solid-article.jsx', phase: 5,
    category: 'rehber', readMin: 8, hasWidget: true,
    title: { tr: 'Kaplama vs Masif Gümüş', en: 'Plated vs Solid Silver', ar: 'المطلي مقابل الفضة الصلبة' },
    description: { tr: '5 gümüş türünün kapsamlı karşılaştırması', en: 'Comprehensive comparison of 5 silver types', ar: 'مقارنة شاملة لخمسة أنواع من الفضة' },
    tags: ['kaplama', 'masif', 'sterling', 'vermeil'] },

  { id: 40, slug: 'osmanli-paralari', file: 'silveratlas-ottoman-coins-article.jsx', phase: 5,
    category: 'tarih', readMin: 10, hasWidget: true,
    title: { tr: 'Osmanlı Gümüş Paraları', en: 'Ottoman Silver Coins', ar: 'العملات الفضية العثمانية' },
    description: { tr: '6 önemli Osmanlı gümüş sikkesi', en: '6 significant Ottoman silver coins', ar: '٦ عملات فضية عثمانية مهمة' },
    tags: ['Osmanlı', 'sikke', 'akçe', 'kuruş'] },

  { id: 41, slug: 'guney-amerika', file: 'silveratlas-south-america-article.jsx', phase: 5,
    category: 'tarih', readMin: 10, hasWidget: true,
    title: { tr: 'Güney Amerika Gümüş Geleneği', en: 'South American Silver Tradition', ar: 'تقليد الفضة في أمريكا الجنوبية' },
    description: { tr: 'İnka\'dan modern zanaat\'a 6 bölge', en: 'From Inca to modern craft: 6 regions', ar: 'من الإنكا إلى الحرف الحديثة: ٦ مناطق' },
    tags: ['Güney Amerika', 'İnka', 'Peru', 'Meksika'] },

  // ═══ Faz 6 ═══════════════════════════════════════════
  { id: 42, slug: 'yuzuk-secim', file: 'silveratlas-ring-selection-article.jsx', phase: 6,
    category: 'rehber', readMin: 9, hasWidget: true,
    title: { tr: 'Gümüş Yüzük Seçim Rehberi', en: 'Silver Ring Selection Guide', ar: 'دليل اختيار خاتم الفضة' },
    description: { tr: '6 stil kartı ve SVG yüzük görselleri ile rehber', en: 'Guide with 6 style cards and SVG ring visuals', ar: 'دليل مع ٦ بطاقات أسلوب ومرئيات خواتم' },
    tags: ['yüzük', 'ring', 'ölçü', 'stil', 'rehber'] },

  { id: 43, slug: 'surdurulebilirlik', file: 'silveratlas-sustainability-article.jsx', phase: 6,
    category: 'maden', readMin: 12, hasWidget: true,
    title: { tr: 'Gümüş ve Sürdürülebilirlik', en: 'Silver & Sustainability', ar: 'الفضة والاستدامة' },
    description: { tr: 'Geri dönüşüm, etik madencilik, karbon karşılaştırma', en: 'Recycling, ethical mining, carbon comparison', ar: 'إعادة التدوير والتعدين الأخلاقي ومقارنة الكربون' },
    tags: ['sürdürülebilirlik', 'geri dönüşüm', 'etik', 'karbon'] },

  { id: 44, slug: 'japon-gumus', file: 'silveratlas-japanese-silver-article.jsx', phase: 6,
    category: 'tarih', readMin: 11, hasWidget: true,
    title: { tr: 'Japon Gümüş Geleneği', en: 'Japanese Silver Tradition', ar: 'تقليد الفضة الياباني' },
    description: { tr: 'Mokume-gane, çay seremonisi, samuray kılıcı', en: 'Mokume-gane, tea ceremony, samurai sword', ar: 'موكومي-غاني وحفل الشاي وسيف الساموراي' },
    tags: ['Japonya', 'mokume-gane', 'çay', 'samuray'] },

  { id: 45, slug: 'hint-gumush', file: 'silveratlas-indian-silver-article.jsx', phase: 6,
    category: 'tarih', readMin: 11, hasWidget: true,
    title: { tr: 'Hint Alt Kıtası Gümüşü', en: 'Indian Subcontinent Silver', ar: 'فضة شبه القارة الهندية' },
    description: { tr: 'Meenakari, kabile gümüşü, Rajasthan geleneği', en: 'Meenakari, tribal silver, Rajasthan tradition', ar: 'الميناكاري وفضة القبائل وتقاليد راجستان' },
    tags: ['Hindistan', 'meenakari', 'kabile', 'Rajasthan'] },

  { id: 46, slug: 'dugun-gelenekleri', file: 'silveratlas-wedding-traditions-article.jsx', phase: 6,
    category: 'kultur', readMin: 11, hasWidget: true,
    title: { tr: 'Gümüş Düğün Gelenekleri', en: 'Silver Wedding Traditions', ar: 'تقاليد الأعراس الفضية' },
    description: { tr: 'Beş kıtadan düğün gelenekleri ve hikayeleri', en: 'Wedding traditions and stories from five continents', ar: 'تقاليد الأعراس وقصص من خمس قارات' },
    tags: ['düğün', 'gelenek', 'Claddagh', 'nikah'] },

  { id: 47, slug: 'sofra-takimi', file: 'silveratlas-tableware-article.jsx', phase: 6,
    category: 'rehber', readMin: 10, hasWidget: true,
    title: { tr: 'Gümüş Sofra Takımı Rehberi', en: 'Silver Tableware Guide', ar: 'دليل أدوات المائدة الفضية' },
    description: { tr: '7 dönem stil kartı ile sofra rehberi', en: 'Tableware guide with 7 period style cards', ar: 'دليل أدوات المائدة مع ٧ بطاقات أسلوب' },
    tags: ['sofra', 'çatal', 'kaşık', 'servis'] },

  { id: 48, slug: 'muzik', file: 'silveratlas-music-article.jsx', phase: 6,
    category: 'kultur', readMin: 9, hasWidget: false,
    title: { tr: 'Gümüş ve Müzik', en: 'Silver and Music', ar: 'الفضة والموسيقى' },
    description: { tr: 'Flütten tele gümüşün müzikteki rolü', en: 'Silver\'s role in music from flute to string', ar: 'دور الفضة في الموسيقى من الناي إلى الوتر' },
    tags: ['müzik', 'flüt', 'enstrüman', 'akustik'] },

  { id: 49, slug: 'parfum-luks', file: 'silveratlas-perfume-luxury-article.jsx', phase: 6,
    category: 'stil', readMin: 8, hasWidget: false,
    title: { tr: 'Parfüm Şişeleri ve Lüks', en: 'Perfume Bottles & Luxury', ar: 'زجاجات العطور والرفاهية' },
    description: { tr: 'Art Deco\'dan modern lükse gümüş parfüm dünyası', en: 'Silver perfume world from Art Deco to modern luxury', ar: 'عالم عطور الفضة من آرت ديكو إلى الفخامة الحديثة' },
    tags: ['parfüm', 'lüks', 'Art Deco', 'şişe'] },

  { id: 50, slug: 'heykel-sanat', file: 'silveratlas-sculpture-art-article.jsx', phase: 6,
    category: 'kultur', readMin: 10, hasWidget: false,
    title: { tr: 'Gümüş Heykeltraşlık ve Sanat', en: 'Silver Sculpture & Art', ar: 'النحت والفن الفضي' },
    description: { tr: 'Antik figürinlerden çağdaş enstalasyonlara', en: 'From ancient figurines to contemporary installations', ar: 'من التماثيل القديمة إلى التركيبات المعاصرة' },
    tags: ['heykel', 'sanat', 'çağdaş', 'figürin'] },
];

// ─── Helpers ───────────────────────────────────────────
export function findArticle(slug) {
  return articleRegistry.find(a => a.slug === slug);
}

export function filterByCategory(category) {
  return articleRegistry.filter(a => a.category === category);
}

export function filterByPhase(phase) {
  return articleRegistry.filter(a => a.phase === phase);
}

export function getArticlesByTag(tag) {
  return articleRegistry.filter(a => a.tags.includes(tag.toLowerCase()));
}

export function searchArticles(query, lang = 'tr') {
  const q = query.toLowerCase();
  return articleRegistry.filter(a =>
    a.title[lang]?.toLowerCase().includes(q) ||
    a.description[lang]?.toLowerCase().includes(q) ||
    a.tags.some(t => t.toLowerCase().includes(q))
  );
}

export function getRelatedArticles(articleId, limit = 4) {
  const article = articleRegistry.find(a => a.id === articleId);
  if (!article) return [];
  return articleRegistry
    .filter(a => a.id !== articleId && (
      a.category === article.category ||
      a.tags.some(t => article.tags.includes(t))
    ))
    .slice(0, limit);
}
