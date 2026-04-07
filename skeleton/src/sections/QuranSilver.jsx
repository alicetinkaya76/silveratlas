import React, { useState, useRef, useEffect } from 'react';
import { t } from '../i18n/translations';
import FadeUp from '../components/FadeUp';
import { IconQuran, IconChevronLeft, IconChevronRight } from '../components/Icons';

/* ═══════════════════════════════════════════
   Kur'an'da Gümüş — QuranSilver Section
   İslami estetik + swipeable ayet kartları
   ═══════════════════════════════════════════ */

const AYAT = [
  {
    ref: "76:15-16",
    sura: { tr: "İnsan Suresi", en: "Surah Al-Insan", ar: "سورة الإنسان" },
    ar: "وَيُطَافُ عَلَيْهِم بِآنِيَةٍ مِّن فِضَّةٍ وَأَكْوَابٍ كَانَتْ قَوَارِيرَا۝ قَوَارِيرَا مِن فِضَّةٍ قَدَّرُوهَا تَقْدِيرًا",
    tr: "Etraflarında gümüşten kaplar ve billur kâseler dolaştırılır. Gümüşten billurlar ki onları ölçüp biçmişlerdir.",
    en: "And there will be circulated among them vessels of silver and cups having been created clear as glass. Clear glasses made from silver of which they have determined the measure.",
    note: {
      tr: "Cennet'te gümüş kapların kristal saflığında olacağı — gümüşün hem değerini hem saflığını vurgular.",
      en: "Silver vessels of crystal clarity in Paradise — emphasizing both the value and purity of silver.",
      ar: "أواني فضية بنقاء الكريستال في الجنة — تؤكد قيمة الفضة ونقاءها.",
    },
    theme: { tr: "Cennet Tasviri", en: "Paradise", ar: "وصف الجنة" },
  },
  {
    ref: "76:21",
    sura: { tr: "İnsan Suresi", en: "Surah Al-Insan", ar: "سورة الإنسان" },
    ar: "عَالِيَهُمْ ثِيَابُ سُندُسٍ خُضْرٌ وَإِسْتَبْرَقٌ ۖ وَحُلُّوا أَسَاوِرَ مِن فِضَّةٍ",
    tr: "Üzerlerinde ince yeşil ipekten ve parlak atlastan elbiseler vardır. Gümüş bileziklerle süslenmişlerdir.",
    en: "Upon them will be green garments of fine silk and brocade. And they will be adorned with bracelets of silver.",
    note: {
      tr: "Cennet ehlinin gümüş bileziklerle süslenmesi — gümüşün takı ve süs olarak ilahi onayı.",
      en: "The people of Paradise adorned with silver bracelets — divine approval of silver as adornment.",
      ar: "تزيّن أهل الجنة بأساور من فضة — الموافقة الإلهية على الفضة كزينة.",
    },
    theme: { tr: "Takı ve Süs", en: "Adornment", ar: "الزينة" },
  },
  {
    ref: "43:33-35",
    sura: { tr: "Zuhruf Suresi", en: "Surah Az-Zukhruf", ar: "سورة الزخرف" },
    ar: "وَلَوْلَا أَن يَكُونَ النَّاسُ أُمَّةً وَاحِدَةً لَّجَعَلْنَا لِمَن يَكْفُرُ بِالرَّحْمَٰنِ لِبُيُوتِهِمْ سُقُفًا مِّن فِضَّةٍ",
    tr: "İnsanlar tek bir ümmet olacak olmasalardı, Rahmân'ı inkâr edenlerin evlerine gümüşten tavanlar yapardık.",
    en: "And if it were not that people would become one community of disbelievers, We would have made for those who disbelieve in the Most Merciful — for their houses — ceilings of silver.",
    note: {
      tr: "Gümüşün dünyevi zenginliğin sembolü olarak kullanılması ve maddi değerin göreceliliği.",
      en: "Silver as a symbol of worldly wealth and the relativity of material value.",
      ar: "الفضة كرمز للثروة الدنيوية ونسبية القيمة المادية.",
    },
    theme: { tr: "Zenginlik", en: "Wealth", ar: "الثروة" },
  },
  {
    ref: "18:19",
    sura: { tr: "Kehf Suresi", en: "Surah Al-Kahf", ar: "سورة الكهف" },
    ar: "فَابْعَثُوا أَحَدَكُم بِوَرِقِكُمْ هَٰذِهِ إِلَى الْمَدِينَةِ",
    tr: "İçinizden birini şu gümüş paranızla şehre gönderin.",
    en: "Send one of you with this silver coin of yours to the city.",
    note: {
      tr: "Ashab-ı Kehf'in gümüş sikkeleri — gümüşün tarihsel para birimi rolü.",
      en: "The silver coins of the Sleepers — silver's historical role as currency.",
      ar: "عملات أصحاب الكهف الفضية — الدور التاريخي للفضة كعملة.",
    },
    theme: { tr: "Ticaret", en: "Trade", ar: "التجارة" },
  },
  {
    ref: "3:14",
    sura: { tr: "Âl-i İmrân Suresi", en: "Surah Ali 'Imran", ar: "سورة آل عمران" },
    ar: "زُيِّنَ لِلنَّاسِ حُبُّ الشَّهَوَاتِ مِنَ النِّسَاءِ وَالْبَنِينَ وَالْقَنَاطِيرِ الْمُقَنطَرَةِ مِنَ الذَّهَبِ وَالْفِضَّةِ",
    tr: "İnsanlara, kadınlar, oğullar, yığın yığın biriktirilmiş altın ve gümüş... sevgisi süslü gösterildi.",
    en: "Beautified for people is the love of that which they desire — of women, children, heaped-up sums of gold and silver.",
    note: {
      tr: "Altın ve gümüşün birlikte anılması — iki değerli metalin Kur'an'daki eşleştirilmesi.",
      en: "Gold and silver mentioned together — the pairing of two precious metals in the Quran.",
      ar: "ذكر الذهب والفضة معاً — اقتران المعدنين الثمينين في القرآن.",
    },
    theme: { tr: "Altın & Gümüş", en: "Gold & Silver", ar: "الذهب والفضة" },
  },
  {
    ref: "9:34",
    sura: { tr: "Tevbe Suresi", en: "Surah At-Tawbah", ar: "سورة التوبة" },
    ar: "وَالَّذِينَ يَكْنِزُونَ الذَّهَبَ وَالْفِضَّةَ وَلَا يُنفِقُونَهَا فِي سَبِيلِ اللَّهِ فَبَشِّرْهُم بِعَذَابٍ أَلِيمٍ",
    tr: "Altın ve gümüşü biriktirip Allah yolunda harcamayanları acı bir azapla müjdele.",
    en: "And those who hoard gold and silver and spend it not in the way of Allah — give them tidings of a painful punishment.",
    note: {
      tr: "Servet biriktirmenin eleştirisi — gümüşün ekonomik adalet bağlamında kullanılması, zekât farziyetinin temeli.",
      en: "Criticism of hoarding wealth — silver in the context of economic justice, the basis of zakat obligation.",
      ar: "نقد اكتناز الثروة — الفضة في سياق العدالة الاقتصادية، أساس فريضة الزكاة.",
    },
    theme: { tr: "Zekât", en: "Zakat", ar: "الزكاة" },
  },
];

const HADITH = [
  {
    tr: "Hz. Muhammed (s.a.v.) gümüş bir yüzük edinmiş, üzerine 'Muhammedun Rasûlullah' yazdırmıştır.",
    en: "The Prophet Muhammad (pbuh) wore a silver ring inscribed with 'Muhammad Rasulullah'.",
    ar: "اتخذ النبي ﷺ خاتماً من فضة نقشه 'محمد رسول الله'.",
    source: "Buhari, Müslim",
  },
  {
    tr: "Gümüş kaplardan yiyip içmek erkeklere haram, ancak gümüş yüzük takmak caizdir.",
    en: "Eating and drinking from silver vessels is forbidden for men, but wearing a silver ring is permissible.",
    ar: "الأكل والشرب في آنية الفضة حرام على الرجال، لكن لبس خاتم الفضة جائز.",
    source: "Buhari 5634",
  },
  {
    tr: "Zekât nisabı olarak gümüş: 200 dirhem (yaklaşık 595 gram saf gümüş).",
    en: "Silver zakat threshold (nisab): 200 dirhams (approximately 595 grams of pure silver).",
    ar: "نصاب زكاة الفضة: ٢٠٠ درهم (حوالي ٥٩٥ غراماً من الفضة الخالصة).",
    source: "İcma",
  },
];

const THEMES = [
  { key: "cennet", tr: "Cennet Tasviri", en: "Paradise Descriptions", ar: "وصف الجنة", color: "#2dd4a0" },
  { key: "ekonomi", tr: "Ekonomi ve Ticaret", en: "Economy & Trade", ar: "الاقتصاد والتجارة", color: "#D4AF37" },
  { key: "zekat", tr: "Zekât Hükmü", en: "Zakat Ruling", ar: "حكم الزكاة", color: "#C0C0C0" },
];

// Islamic geometric SVG pattern
const PATTERN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0L60 15v30L30 60 0 45V15z' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.08'/%3E%3Cpath d='M30 10L50 20v20L30 50 10 40V20z' fill='none' stroke='%23ffffff' stroke-width='0.3' opacity='0.05'/%3E%3C/svg%3E")`;

export default function QuranSilver({ lang, onOpenArticle }) {
  const [idx, setIdx] = useState(0);
  const scrollRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);

  const next = () => setIdx(i => (i + 1) % AYAT.length);
  const prev = () => setIdx(i => (i - 1 + AYAT.length) % AYAT.length);

  const onTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
    setTouchStart(null);
  };

  const a = AYAT[idx];
  const isAr = lang === 'ar';

  const SECTION_TITLE = {
    tr: "Kur'an'da Gümüş",
    en: "Silver in the Quran",
    ar: "الفضة في القرآن",
  };
  const FIDDA = { tr: "Fıdda — فضة", en: "Fidda — فضة", ar: "فضة — Fidda" };
  const HADITH_TITLE = { tr: "Hadislerde Gümüş", en: "Silver in Hadith", ar: "الفضة في الحديث" };
  const READ_MORE = { tr: "Detaylı Makale: İslam'da Gümüş →", en: "Read More: Silver in Islam →", ar: "اقرأ المزيد: الفضة في الإسلام ←" };

  return (
    <section className="quran-section" id="quran-section">
      {/* Islamic pattern overlay */}
      <div className="quran-pattern" aria-hidden="true" />

      <FadeUp>
        <div className="quran-header">
          <IconQuran size={32} style={{ color: '#D4AF37' }} />
          <h2 className="quran-title">{SECTION_TITLE[lang]}</h2>
          <div className="quran-sub">{FIDDA[lang]}</div>
        </div>
      </FadeUp>

      <FadeUp>
        <div className="quran-carousel" ref={scrollRef}
          onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>

          {/* Ayet Card */}
          <div className="ayet-card" key={idx}>
            <div className="ayet-ar" dir="rtl" lang="ar">
              {a.ar}
            </div>
            <div className="ayet-ref">{a.sura[lang]} — {a.ref}</div>
            <div className="ayet-meal">
              {lang === 'ar' ? a.ar : a[lang] || a.tr}
            </div>
            <div className="ayet-note">
              <span className="ayet-note-icon">✦</span>
              {a.note[lang] || a.note.tr}
            </div>
          </div>

          {/* Nav arrows */}
          <button className="ayet-nav ayet-prev" onClick={prev} aria-label="Previous">
            <IconChevronLeft size={20} />
          </button>
          <button className="ayet-nav ayet-next" onClick={next} aria-label="Next">
            <IconChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="scroll-dots" style={{ marginTop: 12 }}>
          {AYAT.map((_, i) => (
            <button key={i} className={`scroll-dot${i === idx ? ' active' : ''}`}
              onClick={() => setIdx(i)} aria-label={`Ayet ${i + 1}`} />
          ))}
        </div>
      </FadeUp>

      {/* Theme pills */}
      <FadeUp>
        <div className="quran-themes">
          {THEMES.map(th => (
            <div className="quran-theme-pill" key={th.key} style={{ '--pill-color': th.color }}>
              <span className="quran-theme-dot" />
              {th[lang]}
            </div>
          ))}
        </div>
      </FadeUp>

      {/* Hadith */}
      <FadeUp>
        <div className="hadith-section">
          <h3 className="hadith-title">{HADITH_TITLE[lang]}</h3>
          <div className="hadith-list">
            {HADITH.map((h, i) => (
              <div className="hadith-card" key={i}>
                <div className="hadith-text">{h[lang] || h.tr}</div>
                <div className="hadith-source">{h.source}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* CTA to article */}
      <FadeUp>
        <div className="quran-cta">
          <button className="quran-cta-btn" onClick={() => {
            if (onOpenArticle) {
              // Find islam-gumus article (id:19)
              onOpenArticle({ id: 19, slug: 'islam-gumus' });
            }
          }}>
            <IconBook size={18} />
            {READ_MORE[lang]}
          </button>
        </div>
      </FadeUp>
    </section>
  );
}
