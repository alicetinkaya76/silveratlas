export const UI = {
  tr: {
    nav:{explore:"Keşfet",articles:"Makaleler",tools:"Araçlar",atlas:"Atlas",quran:"Kur'an",about:"Hakkında"},
    hero:{title1:"Kıymetli",title2:"Metallerin",title3:"Hikâyesi",sub:"Bilimden tarihe, madencilikten modaya — dünyanın en kapsamlı gümüş, altın, pırlanta ve değerli taş ansiklopedisi.",badge:"Ücretsiz · 3 Dil · 200 Makale · 47 Araç · AI Danışman"},
    stats:{articles:"Makale",tools:"Araç",mapPoints:"Harita Noktası",langs:"Dil"},
    cta:{articles:"Makaleleri Keşfet",tools:"Araçları Gör"},
    sections:{quickTools:"Hızlı Araçlar",featured:"Öne Çıkan Makaleler",categories:"Kategoriler",allArticles:"Tüm Makaleler",tools:"İnteraktif Araçlar",atlas:"Gümüş Atlası",calculator:"Hızlı Hesaplayıcı"},
    search:{placeholder:"Makale veya araç ara...",noResult:"Sonuç bulunamadı"},
    filter:{all:"Tümü"},
    article:{min:"dk okuma",back:"Geri",readFull:"Tam içerik jewelpedi.com'da",related:"İlgili Konular",feedback:"Bu makaleyi beğendiniz mi?",thanks:"Teşekkürler!"},
    calc:{weight:"Ağırlık (gram)",purity:"Ayar",result:"Saf Gümüş",value:"Tahmini Değer"},
    atlas:{turkey:"Türkiye",world:"Dünya",provinces:"il",points:"nokta"},
    price:{silver:"Gümüş",gold:"Altın",live:"CANLI",loading:"Fiyat yükleniyor...",unavailable:"Fiyat şu an alınamıyor"},
    sponsor:{badge:"SPONSOR",name:"İstanbul Gümüş",text:"Bu platform İstanbul Gümüş tarafından desteklenmektedir. 925 ayar, el işçiliği gümüş takı.",cta:"Koleksiyonu Keşfet →"},
    footer:{version:"JewelPedi v4.5 · Kıymetli Metal & Taş Ansiklopedisi",license:"CC BY-NC-SA 4.0",sponsor:"Sponsor: İstanbul Gümüş · Konya"},
    menu:{close:"Kapat",theme:"Tema Değiştir",lang:"Dil"},
    newBadge:"YENİ",
  },
  en: {
    nav:{explore:"Explore",articles:"Articles",tools:"Tools",atlas:"Atlas",quran:"Quran",about:"About"},
    hero:{title1:"The Complete",title2:"Story of",title3:"Precious Gems & Metals",sub:"From science to history, mining to fashion — the world's most comprehensive precious metals and gemstone encyclopedia.",badge:"Free · 3 Languages · 200 Articles · 47 Tools · AI Advisor"},
    stats:{articles:"Articles",tools:"Tools",mapPoints:"Map Points",langs:"Languages"},
    cta:{articles:"Explore Articles",tools:"View Tools"},
    sections:{quickTools:"Quick Tools",featured:"Featured Articles",categories:"Categories",allArticles:"All Articles",tools:"Interactive Tools",atlas:"Silver Atlas",calculator:"Quick Calculator"},
    search:{placeholder:"Search articles or tools...",noResult:"No results found"},
    filter:{all:"All"},
    article:{min:"min read",back:"Back",readFull:"Full content at jewelpedi.com",related:"Related Topics",feedback:"Did you enjoy this article?",thanks:"Thanks!"},
    calc:{weight:"Weight (grams)",purity:"Purity",result:"Pure Silver",value:"Estimated Value"},
    atlas:{turkey:"Turkey",world:"World",provinces:"provinces",points:"points"},
    price:{silver:"Silver",gold:"Gold",live:"LIVE",loading:"Loading price...",unavailable:"Price currently unavailable"},
    sponsor:{badge:"SPONSOR",name:"İstanbul Gümüş",text:"This platform is sponsored by İstanbul Gümüş. 925 sterling, handcrafted silver jewelry.",cta:"Explore Collection →"},
    footer:{version:"JewelPedi v4.5 · Precious Metals & Gemstone Encyclopedia",license:"CC BY-NC-SA 4.0",sponsor:"Sponsor: İstanbul Gümüş · Konya"},
    menu:{close:"Close",theme:"Toggle Theme",lang:"Language"},
    newBadge:"NEW",
  },
  ar: {
    nav:{explore:"اكتشف",articles:"المقالات",tools:"الأدوات",atlas:"الأطلس",quran:"القرآن",about:"حول"},
    hero:{title1:"القصة",title2:"الكاملة",title3:"للمعادن والأحجار",sub:"من العلم إلى التاريخ، من التعدين إلى الموضة — أشمل موسوعة للمعادن الثمينة والأحجار الكريمة في العالم.",badge:"مجاني · ٣ لغات · ٢٠٠ مقال · ٤٧ أداة · مستشار ذكي"},
    stats:{articles:"مقالات",tools:"أدوات",mapPoints:"نقطة خريطة",langs:"لغات"},
    cta:{articles:"استكشف المقالات",tools:"عرض الأدوات"},
    sections:{quickTools:"أدوات سريعة",featured:"مقالات مميزة",categories:"الفئات",allArticles:"جميع المقالات",tools:"أدوات تفاعلية",atlas:"أطلس الفضة",calculator:"حاسبة سريعة"},
    search:{placeholder:"ابحث عن مقال أو أداة...",noResult:"لم يتم العثور على نتائج"},
    filter:{all:"الكل"},
    article:{min:"دقائق قراءة",back:"رجوع",readFull:"المحتوى الكامل على jewelpedi.com",related:"مواضيع ذات صلة",feedback:"هل أعجبك هذا المقال؟",thanks:"شكراً!"},
    calc:{weight:"الوزن (غرام)",purity:"العيار",result:"الفضة النقية",value:"القيمة المقدرة"},
    atlas:{turkey:"تركيا",world:"العالم",provinces:"محافظة",points:"نقطة"},
    price:{silver:"فضة",gold:"ذهب",live:"مباشر",loading:"جار التحميل...",unavailable:"السعر غير متاح حالياً"},
    sponsor:{badge:"الراعي",name:"إسطنبول غوموش",text:"هذه المنصة برعاية إسطنبول غوموش. فضة ٩٢٥ مصنوعة يدويًا.",cta:"استكشف المجموعة →"},
    footer:{version:"JewelPedi v4.5 · موسوعة المعادن والأحجار الكريمة",license:"CC BY-NC-SA 4.0",sponsor:"الراعي: إسطنبول غوموش · قونيا"},
    menu:{close:"إغلاق",theme:"تغيير السمة",lang:"اللغة"},
    newBadge:"جديد",
  },
};

export function t(lang, path) {
  const keys = path.split('.');
  let val = UI[lang] || UI.tr;
  for (const k of keys) { val = val?.[k]; }
  return val || path;
}
