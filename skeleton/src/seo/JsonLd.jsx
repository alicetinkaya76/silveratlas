import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function JsonLd({ type = 'Article', data }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    publisher: { '@type': 'Organization', name: 'SilverAtlas', url: 'https://silveratlas.org', logo: { '@type': 'ImageObject', url: 'https://silveratlas.org/logo.png' } },
    author: { '@type': 'Person', name: data.author || 'Turan Erbaş' },
    ...data,
  };
  return <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>;
}
