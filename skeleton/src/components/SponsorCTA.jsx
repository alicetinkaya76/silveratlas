import React from 'react';
import { useTranslation } from 'react-i18next';
const SPONSOR = {
  tr: { text: '925 ayar gümüş takıları keşfedin.', cta: "İstanbul Gümüş'ü Keşfet", note: 'Bu içerik İstanbul Gümüş tarafından desteklenmektedir.' },
  en: { text: 'Discover 925 sterling silver jewelry.', cta: 'Explore İstanbul Gümüş', note: 'Sponsored by İstanbul Gümüş.' },
  ar: { text: 'اكتشف مجوهرات الفضة عيار ٩٢٥.', cta: 'استكشف إسطنبول غوموش', note: 'هذا المحتوى برعاية إسطنبول غوموش.' },
};
export default function SponsorCTA({ variant = 'default' }) {
  const { i18n } = useTranslation();
  const s = SPONSOR[i18n.language] || SPONSOR.tr;
  return (
    <div className={`sponsor-cta sponsor-cta--${variant}`}>
      <p className="sponsor-text">{s.text}</p>
      <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" className="sponsor-btn">{s.cta}</a>
      <p className="sponsor-note">{s.note}</p>
    </div>
  );
}
