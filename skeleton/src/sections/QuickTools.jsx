import React from 'react';
import { t } from '../i18n/translations';
import { TOOLS, QUICK_TOOL_INDICES } from '../data/tools';
import FadeUp from '../components/FadeUp';
import { getToolIcon } from '../components/Icons';

export default function QuickTools({ lang, onOpenTool }) {
  return (
    <section className="section" id="explore">
      <FadeUp><div className="section-header"><h2 className="section-title">{t(lang, 'sections.quickTools')}</h2></div></FadeUp>
      <FadeUp>
        <div className="qt-row">
          {QUICK_TOOL_INDICES.map(idx => {
            const tool = TOOLS[idx];
            return (
              <div className="qt-card" key={idx} role="button" tabIndex={0}
                onClick={() => onOpenTool(tool, idx)}
                onKeyDown={e => e.key === 'Enter' && onOpenTool(tool, idx)}
                aria-label={tool[lang]}>
                <span className="qt-icon">{getToolIcon(idx, 26)}</span>
                <span className="qt-name">{tool[lang]}</span>
              </div>
            );
          })}
        </div>
      </FadeUp>
    </section>
  );
}
