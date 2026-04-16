// Sponsor Slot System + Affiliate Links
export const SPONSORS = [
  {
    id: 'istanbul-gumus', material: 'silver', active: true,
    name: { tr: 'İstanbul Gümüş', en: 'İstanbul Gümüş', ar: 'إسطنبول غوموش' },
    text: { tr: '925 ayar, el işçiliği gümüş takı koleksiyonu.', en: '925 sterling, handcrafted silver jewelry collection.', ar: 'مجموعة مجوهرات فضية ٩٢٥ مصنوعة يدوياً.' },
    cta: { tr: 'Koleksiyonu Keşfet →', en: 'Explore Collection →', ar: 'استكشف المجموعة →' },
    url: 'https://www.instagram.com/istanbulgumustr/',
    badge: { tr: 'SPONSOR', en: 'SPONSOR', ar: 'الراعي' },
    affiliateTag: 'jewelpedi',
    products: [
      { icon: '💍', name: { tr: 'Telkâri Yüzük', en: 'Filigree Ring', ar: 'خاتم التخريم' }, price: '₺1.250', sku: 'IG-TK-001' },
      { icon: '📿', name: { tr: 'Mardin Kolye', en: 'Mardin Necklace', ar: 'قلادة ماردين' }, price: '₺2.400', sku: 'IG-MK-002' },
      { icon: '⭐', name: { tr: 'Osmanlı Bileklik', en: 'Ottoman Bracelet', ar: 'سوار عثماني' }, price: '₺1.800', sku: 'IG-OB-003' },
      { icon: '✨', name: { tr: 'Midyat Küpe', en: 'Midyat Earrings', ar: 'أقراط مديات' }, price: '₺980', sku: 'IG-ME-004' },
    ],
  },
  {
    id: 'gold-sponsor-placeholder', material: 'gold', active: false,
    name: { tr: 'Altın Sponsor Alanı', en: 'Gold Sponsor Slot', ar: 'مكان راعي الذهب' },
    text: { tr: 'Bu alan altın bölümü sponsoru için ayrılmıştır.', en: 'Reserved for gold section sponsor.', ar: 'محجوز لراعي قسم الذهب.' },
    cta: { tr: 'Sponsor Ol →', en: 'Become Sponsor →', ar: 'كن راعياً →' },
    url: '#sponsor-contact', badge: { tr: 'SPONSOR ALANI', en: 'SPONSOR SLOT', ar: 'مكان الراعي' },
  },
  {
    id: 'diamond-sponsor-placeholder', material: 'diamond', active: false,
    name: { tr: 'Pırlanta Sponsor Alanı', en: 'Diamond Sponsor Slot', ar: 'مكان راعي الألماس' },
    text: { tr: 'Bu alan pırlanta bölümü sponsoru için ayrılmıştır.', en: 'Reserved for diamond section sponsor.', ar: 'محجوز لراعي قسم الألماس.' },
    cta: { tr: 'Sponsor Ol →', en: 'Become Sponsor →', ar: 'كن راعياً →' },
    url: '#sponsor-contact', badge: { tr: 'SPONSOR ALANI', en: 'SPONSOR SLOT', ar: 'مكان الراعي' },
  },
];

// Affiliate link generator — UTM tracking
export function getAffiliateUrl(sponsor, source = 'article', sku = '') {
  if (!sponsor || !sponsor.url || sponsor.url.startsWith('#')) return sponsor?.url || '#';
  const sep = sponsor.url.includes('?') ? '&' : '?';
  let url = `${sponsor.url}${sep}utm_source=jewelpedi&utm_medium=referral&utm_campaign=${sponsor.affiliateTag || sponsor.id}`;
  if (source) url += `&utm_content=${source}`;
  if (sku) url += `&utm_term=${sku}`;
  return url;
}

// Track affiliate click (localStorage analytics)
export function trackAffiliateClick(sponsorId, sku = '', source = '') {
  try {
    const clicks = JSON.parse(localStorage.getItem('jp_affiliate_clicks') || '[]');
    clicks.push({ sponsorId, sku, source, date: new Date().toISOString() });
    localStorage.setItem('jp_affiliate_clicks', JSON.stringify(clicks.slice(-200)));
  } catch {}
}

export function getSponsor(material) {
  const specific = SPONSORS.find(s => s.material === material && s.active);
  if (specific) return specific;
  return SPONSORS.find(s => s.id === 'istanbul-gumus');
}
