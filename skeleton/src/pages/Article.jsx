import React, { Suspense, lazy } from 'react';
import { useParams, Navigate } from 'react-router-dom';
export default function Article({ articles }) {
  const { slug } = useParams();
  const ArticleComponent = articles[slug];
  if (!ArticleComponent) return <Navigate to="/404" replace />;
  return <Suspense fallback={<div className="loading">Ag...</div>}><ArticleComponent /></Suspense>;
}
