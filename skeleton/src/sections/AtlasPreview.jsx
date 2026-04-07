import React, { useState, useEffect, useRef } from 'react';
import { t } from '../i18n/translations';
import { WORLD_POINTS, TURKEY_PROVINCES } from '../data/mapData';
import FadeUp from '../components/FadeUp';

const TYPE_STYLES = {
  mine: { icon: '⛏️', color: '#C0C0C0' },
  mint: { icon: '🏛️', color: '#D4AF37' },
  craft: { icon: '🔨', color: '#B87333' },
  museum: { icon: '🏛️', color: '#6C88B5' },
};
const CAT_COLORS = {
  uretim: '#C0C0C0', zanaat: '#a8a29e', maden: '#2dd4a0',
  ticaret: '#D4AF37', kultur: '#a78bfa', diger: '#5a5a70',
};

export default function AtlasPreview({ lang }) {
  const [tab, setTab] = useState('turkey');
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markersRef = useRef(null);

  useEffect(() => {
    let L;
    const initMap = async () => {
      L = await import('leaflet');
      await import('leaflet/dist/leaflet.css');

      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }

      if (!mapRef.current) return;

      const isTurkey = tab === 'turkey';
      const center = isTurkey ? [39.0, 35.2] : [25, 10];
      const zoom = isTurkey ? 5.5 : 2;

      const map = L.map(mapRef.current, {
        center, zoom, zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: true,
      });
      mapInstance.current = map;

      L.control.zoom({ position: 'topright' }).addTo(map);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 18,
      }).addTo(map);

      const markers = L.layerGroup().addTo(map);
      markersRef.current = markers;

      if (isTurkey) {
        TURKEY_PROVINCES.forEach(p => {
          const color = CAT_COLORS[p.cat] || '#5a5a70';
          const size = p.rank <= 2 ? 10 : p.rank <= 3 ? 7 : 5;
          const circle = L.circleMarker([p.lat, p.lng], {
            radius: size, fillColor: color, color: '#fff',
            weight: 1, opacity: 0.8, fillOpacity: 0.7,
          }).addTo(markers);
          const txt = lang === 'en' ? p.en : p.tr;
          circle.bindPopup(`<div style="font-family:'Source Sans 3',sans-serif;min-width:180px">
            <strong style="font-size:14px">${p.name}</strong>
            <p style="font-size:12px;margin:6px 0 0;color:#666;line-height:1.4">${txt}</p>
          </div>`);
        });
      } else {
        WORLD_POINTS.forEach(p => {
          const style = TYPE_STYLES[p.type] || TYPE_STYLES.mine;
          const icon = L.divIcon({
            html: `<span style="font-size:16px">${style.icon}</span>`,
            className: 'map-emoji-icon',
            iconSize: [22, 22], iconAnchor: [11, 11],
          });
          const marker = L.marker([p.lat, p.lng], { icon }).addTo(markers);
          const name = p.name?.[lang] || p.name?.en || '';
          const notes = p.notes?.[lang] || p.notes?.en || '';
          marker.bindPopup(`<div style="font-family:'Source Sans 3',sans-serif;min-width:160px">
            <strong style="font-size:13px">${name}</strong>
            ${p.country ? `<br><span style="font-size:11px;color:#888">${p.country}</span>` : ''}
            ${notes ? `<p style="font-size:12px;margin:6px 0 0;color:#666;line-height:1.4">${notes}</p>` : ''}
          </div>`);
        });
      }

      setTimeout(() => map.invalidateSize(), 100);
    };

    initMap();
    return () => { if (mapInstance.current) { mapInstance.current.remove(); mapInstance.current = null; } };
  }, [tab, lang]);

  return (
    <section className="section" id="atlas-section">
      <FadeUp>
        <div className="section-header"><h2 className="section-title">{t(lang, 'sections.atlas')}</h2></div>
      </FadeUp>
      <FadeUp>
        <div className="atlas-tabs">
          <button className={`atlas-tab${tab === 'turkey' ? ' active' : ''}`} onClick={() => setTab('turkey')}>
            🇹🇷 {t(lang, 'atlas.turkey')} <span style={{ fontFamily: 'var(--f-mono)', fontSize: '.8rem', opacity: .6 }}>81</span>
          </button>
          <button className={`atlas-tab${tab === 'world' ? ' active' : ''}`} onClick={() => setTab('world')}>
            🌍 {t(lang, 'atlas.world')} <span style={{ fontFamily: 'var(--f-mono)', fontSize: '.8rem', opacity: .6 }}>280</span>
          </button>
        </div>
        <div className="map-container" ref={mapRef} />
      </FadeUp>
    </section>
  );
}
