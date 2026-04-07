import React from 'react';
import { t } from '../i18n/translations';
import { TOOLS } from '../data/tools';
import FadeUp from '../components/FadeUp';
import { getToolIcon } from '../components/Icons';

export default function ToolsGrid({ lang, onOpenTool }) {
  return (
    <section className="section" id="tools-section">
      <FadeUp><div className="section-header"><h2 className="section-title">{t(lang, 'sections.tools')}</h2></div></FadeUp>
      <FadeUp>
        <div className="tools-grid">
          {TOOLS.map((tool, idx) => (
            <div className="tool-card" key={idx} role="button" tabIndex={0}
              onClick={() => onOpenTool(tool, idx)}
              onKeyDown={e => e.key === 'Enter' && onOpenTool(tool, idx)}
              aria-label={tool[lang]}>
              {tool.isNew && <span className="new-badge">{t(lang, 'newBadge')}</span>}
              <span className="tool-icon">{getToolIcon(idx, 28)}</span>
              <span className="tool-name">{tool[lang]}</span>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
