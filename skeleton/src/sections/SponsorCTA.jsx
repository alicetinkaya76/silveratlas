import React, { useState } from 'react';
import { t } from '../i18n/translations';
import FadeUp from '../components/FadeUp';
import { IconSparkle } from '../components/Icons';
import { getSponsor } from '../data/sponsors';

function JewelrySVG() {
  return (
    <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="sponsor-illust" aria-hidden="true">
      <defs><linearGradient id="jewel-g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" /><stop offset="100%" stopColor="#C0C0C0" stopOpacity="0.3" /></linearGradient></defs>
      <ellipse cx="40" cy="50" rx="18" ry="20" stroke="url(#jewel-g)" strokeWidth="2.5" fill="none" />
      <circle cx="40" cy="30" r="6" stroke="url(#jewel-g)" strokeWidth="1.5" fill="none" />
      <path d="M34 30h12" stroke="url(#jewel-g)" strokeWidth="1" />
      <path d="M75 45q10-8 20 0t20 0t20 0t20 0t20 0" stroke="url(#jewel-g)" strokeWidth="2" fill="none" className="sponsor-chain" />
      <line x1="160" y1="20" x2="160" y2="42" stroke="url(#jewel-g)" strokeWidth="1.5" />
      <path d="M150 42l10 18 10-18z" stroke="url(#jewel-g)" strokeWidth="1.5" fill="none" />
      <circle cx="160" cy="20" r="3" fill="url(#jewel-g)" opacity="0.5" />
    </svg>
  );
}

/* ── Sponsorship Proposal Modal (Faz 3.6) ── */
function SponsorProposal({ lang, onClose }) {
  const L = {
    tr: { title: 'JewelPedi Sponsorluk', sub: 'Türkiye\'nin en kapsamlı mücevher ansiklopedisinde yerinizi alın',
      reach: 'Erişim', reachNum: '180+ Makale · 46 Araç · 3 Dil', reachDesc: 'Yüzlerce kıymetli metal ve taş meraklısına doğrudan ulaşın.',
      slots: 'Sponsor Alanları', features: 'Neler Dahil?',
      f1: 'Makale içi marka kartı ve logo', f2: 'Ürün mini galerisi (4 ürün)', f3: 'Ana sayfa CTA bölümü', f4: 'Araç cross-reference linkleri', f5: 'Bölüm bazlı sponsor rozeti',
      contact: 'İletişim', email: 'sponsor@jewelpedi.com', note: 'Sponsorluk paketleri hakkında bilgi almak için e-posta gönderin.',
      close: 'Kapat', active: 'AKTİF', available: 'UYGUN' },
    en: { title: 'JewelPedi Sponsorship', sub: 'Take your place in the most comprehensive jewelry encyclopedia',
      reach: 'Reach', reachNum: '180+ Articles · 46 Tools · 3 Languages', reachDesc: 'Reach hundreds of precious metals and gemstone enthusiasts directly.',
      slots: 'Sponsor Slots', features: 'What\'s Included?',
      f1: 'In-article brand card & logo', f2: 'Product mini gallery (4 products)', f3: 'Homepage CTA section', f4: 'Tool cross-reference links', f5: 'Section-based sponsor badge',
      contact: 'Contact', email: 'sponsor@jewelpedi.com', note: 'Send an email for detailed sponsorship package information.',
      close: 'Close', active: 'ACTIVE', available: 'AVAILABLE' },
    ar: { title: 'رعاية JewelPedi', sub: 'احجز مكانك في أشمل موسوعة مجوهرات',
      reach: 'الوصول', reachNum: '+١٥٢ مقال · ٤٥ أداة · ٣ لغات', reachDesc: 'وصول مباشر لمئات من عشاق المعادن الثمينة والأحجار الكريمة.',
      slots: 'أماكن الرعاية', features: 'ماذا يشمل؟',
      f1: 'بطاقة العلامة التجارية والشعار', f2: 'معرض منتجات مصغر (٤ منتجات)', f3: 'قسم CTA في الصفحة الرئيسية', f4: 'روابط مرجعية للأدوات', f5: 'شارة الراعي حسب القسم',
      contact: 'التواصل', email: 'sponsor@jewelpedi.com', note: 'أرسل بريداً إلكترونياً للحصول على معلومات تفصيلية.',
      close: 'إغلاق', active: 'نشط', available: 'متاح' }
  }[lang] || {};

  const slots = [
    { key: 'silver', emoji: '🥈', label: lang === 'tr' ? 'Gümüş Bölümü' : lang === 'ar' ? 'قسم الفضة' : 'Silver Section', active: true, sponsor: 'İstanbul Gümüş' },
    { key: 'gold', emoji: '🥇', label: lang === 'tr' ? 'Altın Bölümü' : lang === 'ar' ? 'قسم الذهب' : 'Gold Section', active: false },
    { key: 'diamond', emoji: '💎', label: lang === 'tr' ? 'Pırlanta Bölümü' : lang === 'ar' ? 'قسم الألماس' : 'Diamond Section', active: false },
    { key: 'platinum', emoji: '⚪', label: lang === 'tr' ? 'Platin Bölümü' : lang === 'ar' ? 'قسم البلاتين' : 'Platinum Section', active: false },
  ];

  return (
    <div className="sp-overlay" onClick={onClose}>
      <div className="sp-modal" onClick={e => e.stopPropagation()}>
        <button className="sp-close" onClick={onClose} aria-label={L.close}>✕</button>
        <h2 className="sp-title">{L.title}</h2>
        <p className="sp-sub">{L.sub}</p>
        <div className="sp-card">
          <div className="sp-card-header">{L.reach}</div>
          <div className="sp-reach-num">{L.reachNum}</div>
          <p className="sp-reach-desc">{L.reachDesc}</p>
        </div>
        <div className="sp-card">
          <div className="sp-card-header">{L.slots}</div>
          <div className="sp-slots">
            {slots.map(s => (
              <div key={s.key} className={`sp-slot${s.active ? ' sp-slot-active' : ''}`}>
                <span className="sp-slot-emoji">{s.emoji}</span>
                <span className="sp-slot-label">{s.label}</span>
                <span className={`sp-slot-badge ${s.active ? 'active' : 'avail'}`}>
                  {s.active ? L.active : L.available}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="sp-card">
          <div className="sp-card-header">{L.features}</div>
          <div className="sp-features-list">
            {[L.f1, L.f2, L.f3, L.f4, L.f5].map((f, i) => (
              <div key={i} className="sp-feat-item"><IconSparkle size={13} style={{ color: 'var(--gold)', flexShrink: 0 }} /><span>{f}</span></div>
            ))}
          </div>
        </div>
        <div className="sp-card sp-contact">
          <div className="sp-card-header">{L.contact}</div>
          <a href={`mailto:${L.email}`} className="sp-email-btn">📧 {L.email}</a>
          <p className="sp-note">{L.note}</p>
        </div>
      </div>
    </div>
  );
}

export default function SponsorCTA({ lang }) {
  const [showProposal, setShowProposal] = useState(false);
  const sp = getSponsor('silver');
  return (
    <section className="sponsor" id="sponsor-section">
      <FadeUp>
        <div className="sponsor-box">
          <div className="sponsor-pattern" aria-hidden="true" />
          <JewelrySVG />
          <div className="sponsor-badge">{sp?.badge?.[lang] || t(lang, 'sponsor.badge')}</div>
          <div className="sponsor-name">{sp?.name?.[lang] || t(lang, 'sponsor.name')}</div>
          <p className="sponsor-text">{sp?.text?.[lang] || t(lang, 'sponsor.text')}</p>
          {sp?.products && sp.products.length > 0 && (
            <div className="sponsor-products">
              {sp.products.map((prod, i) => (
                <a key={i} href={prod.url || sp.url} target="_blank" rel="noopener" className="sponsor-product-card">
                  <span className="sponsor-product-img">{prod.icon}</span>
                  <span className="sponsor-product-name">{prod.name[lang]}</span>
                  {prod.price && <span className="sponsor-product-price">{prod.price}</span>}
                </a>
              ))}
            </div>
          )}
          <div className="sponsor-features">
            <span className="sponsor-feat"><IconSparkle size={14} style={{ color: 'var(--gold)' }} /> 925 Ayar</span>
            <span className="sponsor-feat"><IconSparkle size={14} style={{ color: 'var(--gold)' }} /> El İşçiliği</span>
            <span className="sponsor-feat"><IconSparkle size={14} style={{ color: 'var(--gold)' }} /> Konya</span>
          </div>
          <a href={sp?.url || "https://www.instagram.com/istanbulgumustr/"} target="_blank" rel="noopener" className="sponsor-cta-btn">{sp?.cta?.[lang] || t(lang, 'sponsor.cta')}</a>
          <div className="sponsor-links">
            <a href="https://www.instagram.com/istanbulgumustr/" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: 4 }}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              @istanbulgumustr
            </a>
          </div>
          <button className="sp-proposal-btn" onClick={() => setShowProposal(true)}>
            {lang === 'tr' ? '🤝 Sponsor Olmak İster misiniz?' : lang === 'ar' ? '🤝 هل تريد أن تكون راعياً؟' : '🤝 Want to Become a Sponsor?'}
          </button>
        </div>
      </FadeUp>
      {showProposal && <SponsorProposal lang={lang} onClose={() => setShowProposal(false)} />}
    </section>
  );
}
