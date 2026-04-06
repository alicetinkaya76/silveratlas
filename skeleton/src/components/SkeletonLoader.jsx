import React from 'react';

/**
 * SilverAtlas — SkeletonLoader (Faz 7)
 * Content loading shimmer effect for pages and articles.
 * Types: 'page' | 'article' | 'card' | 'tool'
 */
const shimmerKeyframes = `
@keyframes silverShimmer {
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}
`;

function ShimmerBlock({ width = '100%', height = 16, radius = 8, style = {} }) {
  return (
    <div style={{
      width, height, borderRadius: radius,
      background: 'linear-gradient(90deg, #1a1a22 25%, #252530 37%, #1a1a22 63%)',
      backgroundSize: '800px 100%',
      animation: 'silverShimmer 1.8s ease infinite',
      ...style,
    }} />
  );
}

export default function SkeletonLoader({ type = 'page' }) {
  if (type === 'article') {
    return (
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 20px' }}>
        <style>{shimmerKeyframes}</style>
        {/* Breadcrumb */}
        <ShimmerBlock width={180} height={12} style={{ marginBottom: 24 }} />
        {/* Category badge */}
        <ShimmerBlock width={80} height={24} radius={12} style={{ marginBottom: 16 }} />
        {/* Title */}
        <ShimmerBlock height={36} style={{ marginBottom: 12 }} />
        <ShimmerBlock width="70%" height={36} style={{ marginBottom: 20 }} />
        {/* Subtitle */}
        <ShimmerBlock width="90%" height={18} style={{ marginBottom: 8 }} />
        <ShimmerBlock width="60%" height={18} style={{ marginBottom: 32 }} />
        {/* Meta */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 40 }}>
          <ShimmerBlock width={100} height={14} />
          <ShimmerBlock width={80} height={14} />
          <ShimmerBlock width={60} height={14} />
        </div>
        {/* Body paragraphs */}
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{ marginBottom: 28 }}>
            <ShimmerBlock width={200} height={22} style={{ marginBottom: 14 }} />
            <ShimmerBlock height={14} style={{ marginBottom: 8 }} />
            <ShimmerBlock height={14} style={{ marginBottom: 8 }} />
            <ShimmerBlock width="80%" height={14} />
          </div>
        ))}
        {/* Widget placeholder */}
        <ShimmerBlock height={200} radius={16} style={{ marginBottom: 32 }} />
      </div>
    );
  }

  if (type === 'card') {
    return (
      <div style={{
        borderRadius: 16, overflow: 'hidden',
        background: '#141419', border: '1px solid rgba(255,255,255,0.06)',
      }}>
        <style>{shimmerKeyframes}</style>
        <ShimmerBlock height={120} radius={0} />
        <div style={{ padding: 16 }}>
          <ShimmerBlock height={18} style={{ marginBottom: 10 }} />
          <ShimmerBlock width="70%" height={14} style={{ marginBottom: 8 }} />
          <ShimmerBlock width={60} height={12} />
        </div>
      </div>
    );
  }

  if (type === 'tool') {
    return (
      <div style={{
        padding: 16, borderRadius: 14, textAlign: 'center',
        background: '#141419', border: '1px solid rgba(255,255,255,0.06)',
      }}>
        <style>{shimmerKeyframes}</style>
        <ShimmerBlock width={40} height={40} radius={12} style={{ margin: '0 auto 10px' }} />
        <ShimmerBlock width="80%" height={14} style={{ margin: '0 auto' }} />
      </div>
    );
  }

  // Default: page skeleton
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 20px' }}>
      <style>{shimmerKeyframes}</style>
      {/* Hero */}
      <ShimmerBlock height={240} radius={16} style={{ marginBottom: 32 }} />
      {/* Section title */}
      <ShimmerBlock width={200} height={28} style={{ marginBottom: 20 }} />
      {/* Grid of cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{ borderRadius: 16, overflow: 'hidden', background: '#141419', border: '1px solid rgba(255,255,255,0.06)' }}>
            <ShimmerBlock height={100} radius={0} />
            <div style={{ padding: 14 }}>
              <ShimmerBlock height={16} style={{ marginBottom: 8 }} />
              <ShimmerBlock width="60%" height={12} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
