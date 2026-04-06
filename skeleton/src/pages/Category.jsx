import React from 'react';
import { Link } from 'react-router-dom';
export default function Category({ lang, category, categoryKey }) {
  return (
    <div className="category-page">
      <div className="page-header">
        <h1>{category[lang]}</h1>
      </div>
      <div className="articles-list">
        {category.articles.map(slug => (
          <Link key={slug} to={`/${lang}/${category.slug}/${slug}`} className="article-link">
            {slug}
          </Link>
        ))}
      </div>
    </div>
  );
}
