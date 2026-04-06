/**
 * SilverAtlas — Tool Registry (Faz 1-7 Complete)
 * Central registry for all 32 interactive tools.
 * Updated: Faz 7 — 25 existing + 7 new = 32 tools
 */
export const toolRegistry = [
  // ═══ Faz 1-2: Core Tools ═════════════════════════════
  { id: 1, slug: 'full-site', file: 'silveratlas-full-site.jsx', phase: 1, standalone: false,
    icon: '🌐', category: 'portal',
    title: { tr: 'Ana Site', en: 'Main Site', ar: 'الموقع الرئيسي' },
    description: { tr: 'SilverAtlas ana portal (gömülü araçlar dahil)', en: 'SilverAtlas main portal (with embedded tools)', ar: 'بوابة SilverAtlas الرئيسية (مع الأدوات المدمجة)' },
    tags: ['portal', 'ana sayfa'] },

  { id: 2, slug: 'landing', file: 'silveratlas-landing.jsx', phase: 2, standalone: true,
    icon: '🏠', category: 'portal',
    title: { tr: 'Landing Page', en: 'Landing Page', ar: 'الصفحة الرئيسية' },
    description: { tr: 'SilverAtlas tanıtım sayfası', en: 'SilverAtlas introduction page', ar: 'صفحة تعريف SilverAtlas' },
    tags: ['landing', 'tanıtım'] },

  { id: 3, slug: 'world-map', file: 'silveratlas-world-map.jsx', phase: 2, standalone: true,
    icon: '🗺️', category: 'atlas',
    title: { tr: 'Dünya Gümüş Haritası', en: 'World Silver Map', ar: 'خريطة الفضة العالمية' },
    description: { tr: 'İnteraktif dünya haritası — 297 konum (Leaflet)', en: 'Interactive world map — 297 locations (Leaflet)', ar: 'خريطة عالمية تفاعلية — ٢٩٧ موقع' },
    tags: ['harita', 'dünya', 'maden', 'leaflet'] },

  { id: 4, slug: 'care-guide', file: 'silveratlas-care-guide.html', phase: 1, standalone: true,
    icon: '✨', category: 'rehber',
    title: { tr: 'Bakım Rehberi + Simülatör', en: 'Care Guide + Simulator', ar: 'دليل العناية + المحاكي' },
    description: { tr: 'Gümüş bakım yöntemleri ve temizlik simülatörü', en: 'Silver care methods and cleaning simulator', ar: 'طرق العناية بالفضة ومحاكي التنظيف' },
    tags: ['bakım', 'temizlik', 'parlatma'] },

  { id: 5, slug: 'gemstone-guide', file: 'silveratlas-gemstone-guide.html', phase: 2, standalone: true,
    icon: '💎', category: 'rehber',
    title: { tr: 'Taş-Gümüş Uyum Rehberi', en: 'Gemstone-Silver Guide', ar: 'دليل توافق الأحجار والفضة' },
    description: { tr: '25 taşın gümüş ile uyum rehberi', en: 'Compatibility guide for 25 gemstones with silver', ar: 'دليل توافق ٢٥ حجرًا مع الفضة' },
    tags: ['taş', 'uyum', 'ametist', 'zümrüt'] },

  { id: 6, slug: 'map-original', file: 'silveratlas-map.html', phase: 1, standalone: true,
    icon: '📍', category: 'atlas',
    title: { tr: 'Harita (81 Nokta)', en: 'Map (81 Points)', ar: 'الخريطة (٨١ نقطة)' },
    description: { tr: 'Orijinal Türkiye + dünya harita aracı', en: 'Original Turkey + world map tool', ar: 'أداة خريطة تركيا + العالم الأصلية' },
    tags: ['harita', 'Türkiye'] },

  { id: 7, slug: 'map-expanded', file: 'silveratlas-map-expanded.html', phase: 2, standalone: true,
    icon: '🌍', category: 'atlas',
    title: { tr: 'Genişletilmiş Harita (214 Nokta)', en: 'Expanded Map (214 Points)', ar: 'الخريطة الموسعة (٢١٤ نقطة)' },
    description: { tr: '214 konumlu genişletilmiş harita', en: 'Expanded map with 214 locations', ar: 'خريطة موسعة بـ ٢١٤ موقع' },
    tags: ['harita', 'genişletilmiş'] },

  { id: 8, slug: 'market', file: 'silveratlas-market.html', phase: 1, standalone: true,
    icon: '📊', category: 'piyasa',
    title: { tr: 'Fiyat Takipçisi + Dönüştürücü', en: 'Price Tracker + Converter', ar: 'متتبع الأسعار + المحول' },
    description: { tr: 'Canlı gümüş fiyatları ve birim dönüştürücü', en: 'Live silver prices and unit converter', ar: 'أسعار الفضة الحية ومحول الوحدات' },
    tags: ['fiyat', 'takip', 'dönüştürücü'] },

  { id: 9, slug: 'timeline', file: 'silveratlas-timeline.html', phase: 2, standalone: true,
    icon: '⏳', category: 'tarih',
    title: { tr: 'İnteraktif Zaman Çizelgesi', en: 'Interactive Timeline', ar: 'الجدول الزمني التفاعلي' },
    description: { tr: 'MÖ 5000\'den 2026\'ya — 152 olay', en: 'From 5000 BCE to 2026 — 152 events', ar: 'من ٥٠٠٠ ق.م إلى ٢٠٢٦ — ١٥٢ حدث' },
    tags: ['zaman', 'çizelge', 'tarih'] },

  // ═══ Faz 5: Specialized Tools ════════════════════════
  { id: 10, slug: 'ring-sizer', file: 'silveratlas-ring-sizer-tool.jsx', phase: 5, standalone: true,
    icon: '💍', category: 'hesaplama',
    title: { tr: 'Yüzük Ölçü Bulucu', en: 'Ring Sizer', ar: 'أداة قياس الخاتم' },
    description: { tr: 'Parmak çevresi ile yüzük ölçüsü bulma', en: 'Find ring size by finger circumference', ar: 'اعثر على مقاس الخاتم بمحيط الإصبع' },
    tags: ['yüzük', 'ölçü', 'ring'] },

  { id: 11, slug: 'jewelry-combinator', file: 'silveratlas-jewelry-combinator-tool.jsx', phase: 5, standalone: true,
    icon: '👗', category: 'stil',
    title: { tr: 'Takı Kombinasyon Oluşturucu', en: 'Jewelry Combinator', ar: 'منسق المجوهرات' },
    description: { tr: 'Takı set kombinasyonları oluşturun ve kaydedin', en: 'Create and save jewelry set combinations', ar: 'أنشئ واحفظ تنسيقات أطقم المجوهرات' },
    tags: ['takı', 'kombinasyon', 'stil'] },

  { id: 12, slug: 'zakat-calculator', file: 'silveratlas-zakat-calculator-tool.jsx', phase: 5, standalone: true,
    icon: '🤲', category: 'hesaplama',
    title: { tr: 'Zekât Hesaplayıcı', en: 'Zakat Calculator', ar: 'حاسبة الزكاة' },
    description: { tr: 'Gümüş nisab ve zekât hesaplaması', en: 'Silver nisab and zakat calculation', ar: 'حساب نصاب ومقدار زكاة الفضة' },
    tags: ['zekât', 'islam', 'hesaplama'] },

  { id: 13, slug: 'purity-test', file: 'silveratlas-purity-test-guide-tool.jsx', phase: 5, standalone: true,
    icon: '⚗️', category: 'rehber',
    title: { tr: 'Saflık Test Rehberi', en: 'Purity Test Guide', ar: 'دليل اختبار النقاء' },
    description: { tr: 'Evde gümüş saflık testi yöntemleri', en: 'Home silver purity testing methods', ar: 'طرق اختبار نقاء الفضة في المنزل' },
    tags: ['test', 'saflık', 'analiz'] },

  { id: 14, slug: 'stamp-identifier', file: 'silveratlas-stamp-identifier-tool.jsx', phase: 5, standalone: true,
    icon: '🏷️', category: 'rehber',
    title: { tr: 'Damga Tanımlayıcı', en: 'Stamp Identifier', ar: 'معرّف الأختام' },
    description: { tr: '30+ ülke ayar damgası tanıma aracı', en: '30+ country hallmark identification tool', ar: 'أداة تعريف أختام ٣٠+ دولة' },
    tags: ['damga', 'hallmark', 'tanımlama'] },

  { id: 15, slug: 'metal-comparator', file: 'silveratlas-metal-comparator-tool.jsx', phase: 5, standalone: true,
    icon: '🪞', category: 'hesaplama',
    title: { tr: 'Metal Karşılaştırıcı', en: 'Metal Comparator', ar: 'مقارن المعادن' },
    description: { tr: 'Gümüş, altın, platin, paladyum karşılaştırma', en: 'Compare silver, gold, platinum, palladium', ar: 'مقارنة الفضة والذهب والبلاتين والبلاديوم' },
    tags: ['metal', 'karşılaştırma', 'altın', 'platin'] },

  { id: 16, slug: 'price-alert', file: 'silveratlas-price-alert-tool.jsx', phase: 5, standalone: true,
    icon: '📱', category: 'piyasa',
    title: { tr: 'Fiyat Alarm Kurucusu', en: 'Price Alert', ar: 'منبه الأسعار' },
    description: { tr: 'Gümüş fiyat eşik alarmı ayarlama', en: 'Set silver price threshold alerts', ar: 'ضبط تنبيهات عتبة سعر الفضة' },
    tags: ['fiyat', 'alarm', 'takip'] },

  // ═══ Faz 6: Advanced Tools ═══════════════════════════
  { id: 17, slug: 'periodic-table', file: 'silveratlas-periodic-table-tool.jsx', phase: 6, standalone: true,
    icon: '🔬', category: 'bilim',
    title: { tr: 'İnteraktif Periyodik Tablo', en: 'Interactive Periodic Table', ar: 'الجدول الدوري التفاعلي' },
    description: { tr: 'Gümüş ve ilişkili elementlerin interaktif tablosu', en: 'Interactive table of silver and related elements', ar: 'جدول تفاعلي للفضة والعناصر المرتبطة' },
    tags: ['periyodik', 'element', 'kimya'] },

  { id: 18, slug: 'purity-calculator', file: 'silveratlas-purity-calculator-tool.jsx', phase: 6, standalone: true,
    icon: '⚖️', category: 'hesaplama',
    title: { tr: '925 Saflık Hesaplayıcı', en: '925 Purity Calculator', ar: 'حاسبة نقاء ٩٢٥' },
    description: { tr: 'Ayar-saflık hesaplama ve alaşım oranı', en: 'Fineness-purity calculation and alloy ratio', ar: 'حساب العيار والنقاء ونسبة السبيكة' },
    tags: ['saflık', 'hesaplama', '925'] },

  { id: 19, slug: 'unit-converter', file: 'silveratlas-unit-converter-tool.jsx', phase: 6, standalone: true,
    icon: '💱', category: 'hesaplama',
    title: { tr: 'Birim Dönüştürücü', en: 'Unit Converter', ar: 'محول الوحدات' },
    description: { tr: 'Ağırlık ve fiyat birim dönüşümü (troy oz, gram)', en: 'Weight and price unit conversion (troy oz, gram)', ar: 'تحويل وحدات الوزن والسعر' },
    tags: ['birim', 'dönüştürücü', 'gram', 'ons'] },

  { id: 20, slug: 'color-palette', file: 'silveratlas-color-palette-tool.jsx', phase: 6, standalone: true,
    icon: '🎨', category: 'stil',
    title: { tr: 'Gümüş Renk Paleti', en: 'Silver Color Palette', ar: 'لوحة ألوان الفضة' },
    description: { tr: 'Alaşım renkleri, patina tonları ve taş uyumu', en: 'Alloy colors, patina tones and gem harmony', ar: 'ألوان السبائك وأطياف الصدأ وتنسيق الأحجار' },
    tags: ['renk', 'palet', 'patina', 'taş'] },

  { id: 21, slug: 'karat-calculator', file: 'silveratlas-karat-calculator-tool.jsx', phase: 6, standalone: true,
    icon: '🔄', category: 'hesaplama',
    title: { tr: 'Karat/Ayar Dönüştürücü', en: 'Karat/Fineness Converter', ar: 'محول القيراط/العيار' },
    description: { tr: 'Karat, milesimal, yüzde ve binde dönüşüm', en: 'Karat, millesimal, percentage conversion', ar: 'تحويل القيراط والألفي والنسبة المئوية' },
    tags: ['karat', 'ayar', 'dönüştürücü'] },

  { id: 22, slug: 'turkey-atlas', file: 'silveratlas-turkey-atlas-tool.jsx', phase: 6, standalone: true,
    icon: '🇹🇷', category: 'atlas',
    title: { tr: 'Türkiye Gümüş Atlası', en: 'Turkey Silver Atlas', ar: 'أطلس الفضة التركي' },
    description: { tr: '81 il SVG haritası ile gümüş atlası', en: 'Silver atlas with 81 province SVG map', ar: 'أطلس الفضة بخريطة SVG لـ ٨١ محافظة' },
    tags: ['Türkiye', 'atlas', 'il', 'SVG'] },

  { id: 23, slug: 'carbon-footprint', file: 'silveratlas-carbon-footprint-tool.jsx', phase: 6, standalone: true,
    icon: '🌍', category: 'hesaplama',
    title: { tr: 'Karbon Ayak İzi Hesaplayıcı', en: 'Carbon Footprint Calculator', ar: 'حاسبة البصمة الكربونية' },
    description: { tr: 'Gümüş üretim sürecinin karbon etkisi', en: 'Carbon impact of silver production process', ar: 'التأثير الكربوني لعملية إنتاج الفضة' },
    tags: ['karbon', 'çevre', 'emisyon'] },

  { id: 24, slug: 'quiz', file: 'silveratlas-quiz-tool.jsx', phase: 6, standalone: true,
    icon: '🧠', category: 'eglence',
    title: { tr: 'Gümüş Bilgi Quizi', en: 'Silver Knowledge Quiz', ar: 'اختبار معرفة الفضة' },
    description: { tr: '10 soruluk genel gümüş bilgi testi', en: '10-question general silver knowledge test', ar: 'اختبار معرفة الفضة العام من ١٠ أسئلة' },
    tags: ['quiz', 'test', 'bilgi'] },

  { id: 25, slug: 'mobile-app', file: 'silveratlas-mobile-app.jsx', phase: 6, standalone: true,
    icon: '📱', category: 'portal',
    title: { tr: 'Mobil Arayüz (PWA)', en: 'Mobile Interface (PWA)', ar: 'الواجهة المحمولة (PWA)' },
    description: { tr: 'Mobil-first progressive web app arayüzü', en: 'Mobile-first progressive web app interface', ar: 'واجهة تطبيق ويب تقدمي للمحمول' },
    tags: ['mobil', 'PWA', 'uygulama'] },

  // ═══ Faz 7: New Tools ════════════════════════════════
  { id: 26, slug: 'engraving-preview', file: 'silveratlas-engraving-preview-tool.jsx', phase: 7, standalone: true,
    icon: '✏️', category: 'stil',
    title: { tr: 'Gravür Önizleyici', en: 'Engraving Previewer', ar: 'معاينة النقش' },
    description: { tr: 'Canvas-tabanlı gümüş gravür metin önizleme', en: 'Canvas-based silver engraving text preview', ar: 'معاينة نص النقش الفضي القائمة على القماش' },
    tags: ['gravür', 'kazıma', 'metin', 'önizleme'] },

  { id: 27, slug: 'insurance-calculator', file: 'silveratlas-insurance-calculator-tool.jsx', phase: 7, standalone: true,
    icon: '🛡️', category: 'hesaplama',
    title: { tr: 'Takı Sigorta Değeri Hesaplayıcı', en: 'Jewelry Insurance Calculator', ar: 'حاسبة قيمة تأمين المجوهرات' },
    description: { tr: 'Gümüş takı sigorta değer tahmini', en: 'Silver jewelry insurance value estimation', ar: 'تقدير قيمة تأمين المجوهرات الفضية' },
    tags: ['sigorta', 'değer', 'takı', 'hesaplama'] },

  { id: 28, slug: 'quiz-v2', file: 'silveratlas-quiz-v2-tool.jsx', phase: 7, standalone: true,
    icon: '🏆', category: 'eglence',
    title: { tr: 'İleri Seviye Quiz', en: 'Advanced Quiz', ar: 'الاختبار المتقدم' },
    description: { tr: '20 soru, kategori bazlı, liderlik tablosu', en: '20 questions, category-based, leaderboard', ar: '٢٠ سؤال حسب الفئة ولوحة المتصدرين' },
    tags: ['quiz', 'ileri', 'leaderboard', 'kategori'] },

  { id: 29, slug: 'tarnish-simulator', file: 'silveratlas-tarnish-simulator-tool.jsx', phase: 7, standalone: true,
    icon: '🔄', category: 'bilim',
    title: { tr: 'Renk Değişim Simülatörü', en: 'Tarnish Simulator', ar: 'محاكي تغير اللون' },
    description: { tr: 'Kararma-parlatma slider simülasyonu', en: 'Tarnish-polish slider simulation', ar: 'محاكاة شريط تمرير التشويه والتلميع' },
    tags: ['kararma', 'parlatma', 'simülasyon'] },

  { id: 30, slug: 'world-clock', file: 'silveratlas-world-clock-tool.jsx', phase: 7, standalone: true,
    icon: '🕐', category: 'piyasa',
    title: { tr: 'Dünya Saati + Piyasa Durumu', en: 'World Clock + Market Status', ar: 'الساعة العالمية + حالة السوق' },
    description: { tr: 'Borsa saatleri ve piyasa açık/kapalı durumu', en: 'Exchange hours and market open/closed status', ar: 'ساعات البورصة وحالة السوق مفتوح/مغلق' },
    tags: ['saat', 'borsa', 'piyasa', 'COMEX'] },

  { id: 31, slug: 'portfolio-tracker', file: 'silveratlas-portfolio-tracker-tool.jsx', phase: 7, standalone: true,
    icon: '💰', category: 'piyasa',
    title: { tr: 'Gümüş Cüzdan Takipçisi', en: 'Silver Portfolio Tracker', ar: 'متتبع محفظة الفضة' },
    description: { tr: 'Gümüş koleksiyon portföy değeri takibi', en: 'Silver collection portfolio value tracking', ar: 'تتبع قيمة محفظة مجموعة الفضة' },
    tags: ['portföy', 'değer', 'koleksiyon', 'takip'] },

  { id: 32, slug: 'certificate-verifier', file: 'silveratlas-certificate-verifier-tool.jsx', phase: 7, standalone: true,
    icon: '📜', category: 'rehber',
    title: { tr: 'Sertifika Doğrulayıcı', en: 'Certificate Verifier', ar: 'التحقق من الشهادة' },
    description: { tr: 'Gümüş sertifika ve damga doğrulama rehberi', en: 'Silver certificate and stamp verification guide', ar: 'دليل التحقق من شهادة الفضة والأختام' },
    tags: ['sertifika', 'doğrulama', 'damga'] },
];

// ─── Helpers ───────────────────────────────────────────
export function findTool(slug) {
  return toolRegistry.find(t => t.slug === slug);
}

export function getStandaloneTools() {
  return toolRegistry.filter(t => t.standalone);
}

export function getToolsByCategory(category) {
  return toolRegistry.filter(t => t.category === category);
}

export function getToolsByPhase(phase) {
  return toolRegistry.filter(t => t.phase === phase);
}

export function searchTools(query, lang = 'tr') {
  const q = query.toLowerCase();
  return toolRegistry.filter(t =>
    t.title[lang]?.toLowerCase().includes(q) ||
    t.description[lang]?.toLowerCase().includes(q) ||
    t.tags.some(tag => tag.toLowerCase().includes(q))
  );
}
