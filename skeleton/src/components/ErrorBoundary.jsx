import React from 'react';

/**
 * SilverAtlas — ErrorBoundary (Faz 7)
 * Catches rendering errors and shows a friendly fallback UI.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[SilverAtlas ErrorBoundary]', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: '#0b0b10', fontFamily: "'Source Sans 3', sans-serif", color: '#f0f0f0',
          padding: 24, textAlign: 'center',
        }}>
          <div style={{ maxWidth: 440 }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%', margin: '0 auto 24px',
              background: 'linear-gradient(135deg, #C0C0C0, #D4AF37)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 28, fontWeight: 800, color: '#0b0b10',
              fontFamily: "'Playfair Display', serif",
            }}>Ag</div>

            <h1 style={{
              fontFamily: "'Playfair Display', serif", fontSize: 28,
              fontWeight: 700, marginBottom: 12, color: '#C0C0C0',
            }}>Bir Şeyler Ters Gitti</h1>

            <p style={{ fontSize: 15, color: '#8a8a9a', lineHeight: 1.6, marginBottom: 8 }}>
              Sayfa yüklenirken beklenmedik bir hata oluştu.
            </p>
            <p style={{ fontSize: 13, color: '#555566', lineHeight: 1.6, marginBottom: 28 }}>
              Something went wrong while loading this page.
              <br />حدث خطأ غير متوقع أثناء تحميل هذه الصفحة.
            </p>

            <button onClick={this.handleReset} style={{
              padding: '14px 32px', borderRadius: 12, border: 'none',
              background: 'linear-gradient(135deg, #C0C0C0, #D4AF37)',
              color: '#0b0b10', fontSize: 15, fontWeight: 700, cursor: 'pointer',
              fontFamily: "'Source Sans 3', sans-serif",
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.target.style.opacity = 0.9}
              onMouseLeave={e => e.target.style.opacity = 1}
            >
              Ana Sayfaya Dön
            </button>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details style={{ marginTop: 28, textAlign: 'left' }}>
                <summary style={{ color: '#f87171', cursor: 'pointer', fontSize: 13 }}>
                  Hata Detayı (Dev)
                </summary>
                <pre style={{
                  marginTop: 8, padding: 12, borderRadius: 8,
                  background: '#141419', fontSize: 11, color: '#fbbf24',
                  overflow: 'auto', maxHeight: 200, lineHeight: 1.5,
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
