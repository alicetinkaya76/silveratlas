import React from 'react';
import { useTranslation } from 'react-i18next';
import SponsorCTA from '@components/SponsorCTA';
export default function About({ lang }) {
  const { t } = useTranslation();
  return (
    <div className="about-page">
      <h1>{t('about.title', 'Hakkında')}</h1>
      <section>
        <h2>SilverAtlas</h2>
        <p>{t('about.desc', 'SilverAtlas, gümüş hakkında kapsamlı, ücretsiz, çok dilli bilgi platformudur. Tarih, bilim, piyasa, zanaat ve kültür alanlarında 40+ makale, 20 interaktif araç ve 500+ harita noktası ile dünyanın en kapsamlı gümüş referans kaynağı olmayı hedefler.')}</p>
      </section>
      <section>
        <h2>{t('about.author', 'Yazar')}</h2>
        <p>Turan Erbaş</p>
      </section>
      <section>
        <h2>{t('about.sponsor', 'Sponsor')}</h2>
        <p>{t('about.sponsorDesc', 'İstanbul Gümüş — Konya merkezli, 925 ayar gümüş takı üreticisi.')}</p>
        <SponsorCTA variant="compact" />
      </section>
    </div>
  );
}
