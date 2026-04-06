import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const TOOLS = [
  { id: 'periodic-table', icon: '⚛️' },{ id: 'purity-calc', icon: '🔢' },{ id: 'price-tracker', icon: '📈' },
  { id: 'unit-converter', icon: '⚖️' },{ id: 'color-palette', icon: '🎨' },{ id: 'world-map', icon: '🗺️' },
  { id: 'timeline', icon: '📅' },{ id: 'gemstone-guide', icon: '💎' },{ id: 'karat-calc', icon: '🧮' },
  { id: 'care-simulator', icon: '🧴' },{ id: 'mint-database', icon: '🏛️' },{ id: 'carbon-calc', icon: '🌱' },
  { id: 'quiz', icon: '❓' },{ id: 'ring-sizer', icon: '💍' },{ id: 'jewelry-combinator', icon: '✨' },
  { id: 'zakat-calc', icon: '☪️' },{ id: 'purity-test', icon: '🔬' },{ id: 'stamp-identifier', icon: '🔍' },
  { id: 'metal-comparator', icon: '⚔️' },{ id: 'price-alert', icon: '🔔' },
];
export default function ToolsPage({ lang }) {
  const { t } = useTranslation();
  return (
    <div className="tools-page">
      <h1>{t('tools.title', 'Araçlar')}</h1>
      <div className="tools-grid">
        {TOOLS.map(tool => (
          <Link key={tool.id} to={`/${lang}/araclar/${tool.id}`} className="tool-card">
            <span className="tool-icon">{tool.icon}</span>
            <span className="tool-name">{t(`tools.${tool.id}`, tool.id)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
