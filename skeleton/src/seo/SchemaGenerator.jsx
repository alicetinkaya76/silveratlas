export function articleSchema({ title, description, date, lang, path, category }) {
  return {
    '@type': 'Article',
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    inLanguage: lang,
    url: `https://silveratlas.org${path}`,
    articleSection: category,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://silveratlas.org${path}` },
  };
}
export function toolSchema({ name, description, lang, path }) {
  return {
    '@type': 'WebApplication',
    name,
    description,
    url: `https://silveratlas.org${path}`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    inLanguage: lang,
  };
}
export function faqSchema(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
