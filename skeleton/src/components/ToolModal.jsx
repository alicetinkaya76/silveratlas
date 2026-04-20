import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import DOMPurify from 'dompurify';
import { t } from '../i18n/translations';
import useSilverPrice from '../hooks/useSilverPrice';
import { ARTICLES } from '../data/articles';
import { getArticleContent } from '../data/articleContent';

/* ── Sprint 3.2: AI çıktılarını sanitize et ──
 * DOMPurify config — sadece minimum semantik etiketlere izin ver.
 * AI markdown-ish çıktısı sadece **bold** → <strong> ve \n → <br/> üretiyor,
 * ama genişleme payı için birkaç yaygın etiket daha ekli. Attribute yok:
 * bu sayede <img onerror=...>, <a href="javascript:..."> gibi vektörler
 * tamamen kaldırılır.
 */
const AI_SANITIZE_CONFIG = {
  ALLOWED_TAGS: ['strong', 'br', 'em', 'b', 'i', 'u', 'p', 'ul', 'ol', 'li', 'code', 'span'],
  ALLOWED_ATTR: [],
  KEEP_CONTENT: true,
};
const sanitizeAI = (html) => DOMPurify.sanitize(html || '', AI_SANITIZE_CONFIG);

/* ── TOOL 0: Purity Calculator ── */
function PurityCalc({ lang }) {
  const [w, setW] = useState(10), [metal, setMetal] = useState('silver'), [p, setP] = useState(0.925);
  const silverOpts = [{v:0.999,l:'999'},{v:0.925,l:'925'},{v:0.900,l:'900'},{v:0.835,l:'835'},{v:0.800,l:'800'}];
  const goldOpts = [{v:0.999,l:'24K (999)'},{v:0.916,l:'22K (916)'},{v:0.750,l:'18K (750)'},{v:0.585,l:'14K (585)'},{v:0.417,l:'10K (417)'},{v:0.333,l:'8K (333)'}];
  const opts = metal === 'gold' ? goldOpts : silverOpts;
  const L = { tr: ['Ağırlık (gram)', 'Ayar', metal==='gold'?'Saf Altın':'Saf Gümüş'], en: ['Weight (g)', 'Purity', metal==='gold'?'Pure Gold':'Pure Silver'], ar: ['الوزن (غرام)', 'العيار', metal==='gold'?'الذهب الخالص':'الفضة النقية'] }[lang];
  const accentColor = metal === 'gold' ? 'var(--gold)' : 'var(--silver)';
  return (<div className="tm-tool">
    <div style={{display:'flex',gap:4,marginBottom:14,padding:3,background:'var(--card)',borderRadius:10,border:'1px solid var(--border)'}}>
      {[{id:'silver',l:{tr:'🥈 Gümüş',en:'🥈 Silver',ar:'🥈 فضة'}},{id:'gold',l:{tr:'🥇 Altın',en:'🥇 Gold',ar:'🥇 ذهب'}}].map(m=>
        <button key={m.id} onClick={()=>{setMetal(m.id);setP(m.id==='gold'?0.750:0.925)}} style={{flex:1,padding:'8px',borderRadius:8,border:'none',cursor:'pointer',fontSize:13,fontWeight:600,background:metal===m.id?(m.id==='gold'?'rgba(212,175,55,0.15)':'rgba(192,192,192,0.12)'):'transparent',color:metal===m.id?(m.id==='gold'?'var(--gold)':'var(--silver)'):'var(--text3)'}}>{m.l[lang]}</button>
      )}
    </div>
    <label className="calc-label">{L[0]}</label><input type="number" className="calc-input" value={w} onChange={e=>setW(+e.target.value)} min="0" step="0.1" inputMode="decimal"/>
    <label className="calc-label" style={{marginTop:12}}>{L[1]}</label>
    <select className="calc-select" value={p} onChange={e=>setP(+e.target.value)}>{opts.map(o=><option key={o.v} value={o.v}>{o.l}</option>)}</select>
    <div className="calc-result" style={{marginTop:16}}>
      <div className="calc-result-num" style={{color:accentColor}}>{(w*p).toFixed(2)} g</div>
      <div className="calc-result-label">{L[2]}</div>
      <div style={{fontSize:'.75rem',color:'var(--text3)',marginTop:4}}>{lang==='tr'?'Alaşım':'Alloy'}: {(w*(1-p)).toFixed(2)} g ({((1-p)*100).toFixed(1)}%)</div>
    </div>
  </div>);
}

/* ── TOOL 1: Unit Converter ── */
function UnitConverter({ lang }) {
  const [val, setVal] = useState(1), [from, setFrom] = useState('oz');
  const rates = { oz: 31.1035, g: 1, kg: 1000, lb: 453.592, tola: 11.664 };
  const grams = val * rates[from];
  return (<div className="tm-tool"><label className="calc-label">{lang==='tr'?'Miktar':'Amount'}</label><input type="number" className="calc-input" value={val} onChange={e=>setVal(+e.target.value)} min="0" step="0.01" inputMode="decimal"/><label className="calc-label" style={{marginTop:12}}>{lang==='tr'?'Birim':'Unit'}</label><select className="calc-select" value={from} onChange={e=>setFrom(e.target.value)}><option value="oz">Troy Ounce</option><option value="g">Gram</option><option value="kg">Kilogram</option><option value="lb">Pound</option><option value="tola">Tola</option></select><div style={{marginTop:16,display:'flex',flexDirection:'column',gap:6}}>{Object.entries(rates).filter(([k])=>k!==from).map(([unit,rate])=>(<div key={unit} className="tm-result-row"><span style={{fontFamily:'var(--f-mono)',fontWeight:600,color:'var(--silver)'}}>{(grams/rate).toFixed(4)}</span><span style={{color:'var(--text2)',fontSize:'.85rem',marginLeft:8}}>{unit}</span></div>))}</div></div>);
}

/* ── TOOL 2: Ring Sizer (Ultra Premium — Credit Card Calibration) ── */
function RingSizer({ lang }) {
  const [phase, setPhase] = useState('start'); // start|calibrate|ring|string|result
  const [pxPerMm, setPxPerMm] = useState(3.78); // default, will be calibrated
  const [calSlider, setCalSlider] = useState(50); // calibration slider 0-100
  const [ringSlider, setRingSlider] = useState(50); // ring matching slider
  const [stringMm, setStringMm] = useState(52);
  const [step, setStep] = useState(0);
  const [resultSize, setResultSize] = useState(null);

  const CARD_HEIGHT_MM = 53.98; // ISO 7810 standard credit card height

  const SIZES = [
    {us:3,eu:44,uk:'F',jp:4,mm:44.2,dia:14.1},
    {us:4,eu:47,uk:'H',jp:7,mm:46.8,dia:14.9},
    {us:4.5,eu:48,uk:'I',jp:8,mm:47.8,dia:15.2},
    {us:5,eu:49,uk:'J½',jp:9,mm:49.0,dia:15.6},
    {us:5.5,eu:50,uk:'K',jp:10,mm:50.3,dia:16.0},
    {us:6,eu:51,uk:'L½',jp:12,mm:51.5,dia:16.4},
    {us:6.5,eu:52,uk:'M',jp:13,mm:52.8,dia:16.8},
    {us:7,eu:54,uk:'N½',jp:14,mm:54.0,dia:17.2},
    {us:7.5,eu:55,uk:'O',jp:15,mm:55.3,dia:17.6},
    {us:8,eu:57,uk:'P½',jp:16,mm:56.6,dia:18.0},
    {us:8.5,eu:58,uk:'Q',jp:17,mm:57.8,dia:18.4},
    {us:9,eu:59,uk:'R½',jp:18,mm:59.1,dia:18.8},
    {us:10,eu:62,uk:'T½',jp:20,mm:61.6,dia:19.6},
    {us:11,eu:64,uk:'V½',jp:22,mm:64.0,dia:20.4},
    {us:12,eu:67,uk:'Y',jp:24,mm:66.6,dia:21.2},
    {us:13,eu:69,uk:'Z+1',jp:26,mm:69.1,dia:22.0},
  ];

  const findSize = (diaMm) => SIZES.reduce((a,b) => Math.abs(b.dia-diaMm)<Math.abs(a.dia-diaMm)?b:a);
  const findSizeByCirc = (circ) => SIZES.reduce((a,b) => Math.abs(b.mm-circ)<Math.abs(a.mm-circ)?b:a);

  // Calibration: card height in px = slider maps to px
  const cardHeightPx = 120 + calSlider * 2.5; // range ~120-370px
  const calibratedPxPerMm = cardHeightPx / CARD_HEIGHT_MM;

  const doCalibrate = () => {
    setPxPerMm(calibratedPxPerMm);
    setPhase('ring');
  };

  // Ring matching: diameter from slider
  const ringDiaPx = 40 + ringSlider * 2.2; // range ~40-260px
  const ringDiaMm = ringDiaPx / pxPerMm;

  const doRingResult = () => {
    setResultSize(findSize(ringDiaMm));
    setPhase('result');
  };

  const doStringResult = () => {
    setResultSize(findSizeByCirc(stringMm));
    setPhase('result');
  };

  const TX = {
    tr: {
      welcome: 'Yüzük Ölçünüzü Bulalım',
      hasRing: 'Elinizde mevcut bir yüzük var mı?',
      yesRing: 'Evet, yüzüğüm var',
      noRing: 'Hayır, ip ile ölçeceğim',
      calTitle: 'Ekran Kalibrasyonu',
      calDesc: 'Kredi kartınızı ekrana koyun. Kartın üst kenarı üst çizgiye değsin. Kaydırıcıyı kartın alt kenarıyla eşleşene kadar ayarlayın.',
      calTip: 'Telefonu düz bir yüzeye koyun ve dik yukarıdan bakın.',
      calBtn: 'Kalibre Et',
      ringTitle: 'Yüzüğünüzü Eşleştirin',
      ringDesc: 'Yüzüğünüzü ekrandaki dairenin üzerine koyun. Kaydırıcıyı, dairenin iç kenarı yüzüğün iç kenarıyla eşleşene kadar ayarlayın.',
      ringTip: 'Tek gözünüzü kapatarak bakın — daha doğru eşleşir.',
      ringBtn: 'Ölçümü Tamamla',
      steps: [
        { t: 'İp veya kağıt şerit kesin', d: 'Yaklaşık 10 cm uzunluğunda ince bir ip veya kağıt şerit hazırlayın.' },
        { t: 'Parmağınıza sarın', d: 'Yüzük parmağınızın en geniş yerinden (eklem dahil) boşluk kalmadan sarın.' },
        { t: 'Buluşma noktasını işaretleyin', d: 'İpin birbiriyle buluştuğu yeri kalemle işaretleyin.' },
        { t: 'Cetvelle ölçün', d: 'İpi düz koyup mm cinsinden ölçün. Bu değer iç çevrenizdir.' },
      ],
      tip: 'Akşam ölçün — parmaklar gün içinde şişer.',
      circ: 'İç Çevre (mm)',
      findBtn: 'Ölçümü Bul',
      resultTitle: 'Yüzük Ölçünüz',
      silverEst: '925 Ayar Gümüş Yüzük Tahmini',
      orderCta: 'İstanbul Gümüş\'ten Sipariş Ver →',
      hadith: 'Hz. Muhammed (s.a.v.) gümüş yüzük takmıştır. (Buhari, Müslim)',
      share: 'Ölçümü Paylaş',
      restart: 'Tekrar Ölç',
      method: 'İp Yöntemi',
    },
    en: {
      welcome: 'Find Your Ring Size',
      hasRing: 'Do you have an existing ring?',
      yesRing: 'Yes, I have a ring',
      noRing: 'No, I\'ll use string method',
      calTitle: 'Screen Calibration',
      calDesc: 'Place your credit card on screen. Top edge touches the top line. Adjust slider until it matches the bottom edge of your card.',
      calTip: 'Place phone on flat surface and look straight down.',
      calBtn: 'Calibrate',
      ringTitle: 'Match Your Ring',
      ringDesc: 'Place your ring on the circle. Adjust slider until the circle matches the inner edge of your ring.',
      ringTip: 'Close one eye for more accurate matching.',
      ringBtn: 'Get My Size',
      steps: [
        { t: 'Cut string or paper strip', d: 'Prepare a thin string or strip about 10 cm long.' },
        { t: 'Wrap around finger', d: 'Wrap snugly around the widest part of your ring finger (incl. knuckle). No gaps.' },
        { t: 'Mark the meeting point', d: 'Mark where the string overlaps with a pen.' },
        { t: 'Measure with ruler', d: 'Lay flat and measure in mm. This is your inner circumference.' },
      ],
      tip: 'Measure in evening — fingers swell during the day.',
      circ: 'Circumference (mm)',
      findBtn: 'Find My Size',
      resultTitle: 'Your Ring Size',
      silverEst: '925 Sterling Silver Ring Estimate',
      orderCta: 'Order from İstanbul Gümüş →',
      hadith: 'Prophet Muhammad (pbuh) wore a silver ring. (Bukhari, Muslim)',
      share: 'Share Result',
      restart: 'Measure Again',
      method: 'String Method',
    },
    ar: {
      welcome: 'اعثر على مقاس خاتمك',
      hasRing: 'هل لديك خاتم حالي؟',
      yesRing: 'نعم، لدي خاتم',
      noRing: 'لا، سأستخدم طريقة الخيط',
      calTitle: 'معايرة الشاشة',
      calDesc: 'ضع بطاقتك الائتمانية على الشاشة. الحافة العلوية تلامس الخط العلوي. اضبط شريط التمرير حتى يتطابق مع الحافة السفلية.',
      calTip: 'ضع الهاتف على سطح مستوٍ وانظر من الأعلى مباشرة.',
      calBtn: 'معايرة',
      ringTitle: 'طابق خاتمك',
      ringDesc: 'ضع خاتمك على الدائرة. اضبط حتى تتطابق الدائرة مع الحافة الداخلية لخاتمك.',
      ringTip: 'أغلق عيناً واحدة للمطابقة الدقيقة.',
      ringBtn: 'احصل على مقاسي',
      steps: [
        { t: 'قص خيطاً أو شريط ورق', d: 'حضّر خيطاً رفيعاً بطول ١٠ سم.' },
        { t: 'لفّه حول إصبعك', d: 'لفّه بإحكام حول أعرض جزء من بنصرك بدون فراغات.' },
        { t: 'ضع علامة', d: 'ضع علامة بقلم حيث يلتقي الخيط.' },
        { t: 'قِس بالمسطرة', d: 'ضعه مستقيماً وقس بالمليمتر.' },
      ],
      tip: 'قِس مساءً — الأصابع تتورم خلال النهار.',
      circ: 'المحيط (مم)',
      findBtn: 'اعثر على مقاسي',
      resultTitle: 'مقاس خاتمك',
      silverEst: 'تقدير خاتم فضة ٩٢٥',
      orderCta: 'اطلب من إسطنبول غوموش ←',
      hadith: 'كان النبي ﷺ يلبس خاتماً من فضة. (البخاري، مسلم)',
      share: 'شارك النتيجة',
      restart: 'قِس مجدداً',
      method: 'طريقة الخيط',
    },
  }[lang] || {};

  const s = resultSize || findSizeByCirc(stringMm);
  // Silver ring weight estimate: ~3-6g depending on size
  const silverWeight = (2 + s.dia * 0.2).toFixed(1);
  const liveP = useSilverPrice();
  const silverTL = (silverWeight * (liveP.silverPerGTL || 40)).toFixed(0);

  // ═══ PHASE: START ═══
  if (phase === 'start') return (
    <div className="tm-tool" style={{textAlign:'center',padding:'12px 0'}}>
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{margin:'0 auto 16px',display:'block'}}>
        <defs><linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C0C0C0"/><stop offset="100%" stopColor="#D4AF37"/></linearGradient></defs>
        <circle cx="32" cy="32" r="24" fill="none" stroke="url(#rg)" strokeWidth="3"/>
        <circle cx="32" cy="8" r="6" fill="none" stroke="url(#rg)" strokeWidth="2"/>
        <circle cx="32" cy="8" r="2.5" fill="var(--gold)" opacity=".6"/>
      </svg>
      <div style={{fontSize:'1.15rem',fontWeight:700,marginBottom:16,fontFamily:'var(--f-head)'}}>{TX.welcome}</div>
      <div style={{fontSize:'.92rem',color:'var(--text2)',marginBottom:20}}>{TX.hasRing}</div>
      <div style={{display:'flex',flexDirection:'column',gap:10}}>
        <button onClick={()=>setPhase('calibrate')} style={{padding:'16px',borderRadius:14,
          background:'linear-gradient(135deg,rgba(192,192,192,0.1),rgba(212,175,55,0.05))',
          border:'1.5px solid rgba(192,192,192,0.2)',fontSize:'.95rem',fontWeight:600,color:'var(--silver)',
          transition:'all .2s'}}>💍 {TX.yesRing}</button>
        <button onClick={()=>setPhase('string')} style={{padding:'16px',borderRadius:14,
          border:'1.5px solid var(--border)',fontSize:'.95rem',fontWeight:500,color:'var(--text2)',
          transition:'all .2s'}}>📏 {TX.noRing}</button>
      </div>
    </div>
  );

  // ═══ PHASE: CALIBRATE ═══
  if (phase === 'calibrate') return (
    <div className="tm-tool">
      <div style={{textAlign:'center',marginBottom:12}}>
        <div style={{fontSize:'1.05rem',fontWeight:700,marginBottom:4}}>{TX.calTitle}</div>
        <div style={{fontSize:'.85rem',color:'var(--text2)',lineHeight:1.55}}>{TX.calDesc}</div>
      </div>
      {/* Card calibration area */}
      <div style={{position:'relative',background:'var(--card)',borderRadius:14,border:'1px solid var(--border)',
        padding:'16px',marginBottom:14,overflow:'hidden'}}>
        {/* Top reference line */}
        <div style={{borderTop:'2px dashed var(--silver)',marginBottom:8,opacity:.6}}/>
        {/* Card outline */}
        <div style={{
          width:'100%',height:cardHeightPx,maxHeight:300,
          border:'2px solid var(--gold)',borderRadius:8,
          background:'linear-gradient(135deg,rgba(212,175,55,0.04),rgba(192,192,192,0.02))',
          display:'flex',alignItems:'center',justifyContent:'center',
          transition:'height .15s ease',position:'relative',
        }}>
          <div style={{fontSize:'.7rem',color:'var(--text3)',fontFamily:'var(--f-mono)',textAlign:'center'}}>
            <div style={{fontSize:'1rem',marginBottom:4}}>💳</div>
            CREDIT CARD<br/>85.6 × 53.98 mm
          </div>
          {/* Corner markers */}
          {[[0,0],[1,0],[0,1],[1,1]].map(([x,y],i)=>(
            <div key={i} style={{position:'absolute',width:12,height:12,
              [y?'bottom':'top']:4,[x?'right':'left']:4,
              borderColor:'var(--gold)',borderStyle:'solid',borderWidth:0,
              [`border${y?'Bottom':'Top'}Width`]:2,[`border${x?'Right':'Left'}Width`]:2,
              borderRadius:x===y?'0 0 0 4px':'0 4px 0 0',opacity:.5}}/>
          ))}
        </div>
        {/* Bottom reference line */}
        <div style={{borderTop:'2px dashed var(--gold)',marginTop:8,opacity:.6}}/>
      </div>
      {/* Slider */}
      <input type="range" min="0" max="100" value={calSlider} onChange={e=>setCalSlider(+e.target.value)}
        style={{width:'100%',accentColor:'var(--gold)',marginBottom:8}}/>
      {/* Tip */}
      <div style={{padding:'10px 14px',borderRadius:10,background:'rgba(212,175,55,0.05)',
        border:'1px solid rgba(212,175,55,0.1)',fontSize:'.8rem',color:'var(--text2)',marginBottom:14,
        display:'flex',gap:8,alignItems:'center'}}>
        <span style={{fontSize:'1rem'}}>👁️</span> {TX.calTip}
      </div>
      <button onClick={doCalibrate} style={{width:'100%',padding:'14px',borderRadius:14,
        background:'linear-gradient(135deg,var(--silver),#a0a8b0)',color:'var(--bg)',
        fontWeight:700,fontSize:'.95rem',border:'none'}}>{TX.calBtn}</button>
    </div>
  );

  // ═══ PHASE: RING MATCHING ═══
  if (phase === 'ring') return (
    <div className="tm-tool">
      <div style={{textAlign:'center',marginBottom:8}}>
        <div style={{fontSize:'1.05rem',fontWeight:700,marginBottom:4}}>{TX.ringTitle}</div>
        <div style={{fontSize:'.85rem',color:'var(--text2)',lineHeight:1.5}}>{TX.ringDesc}</div>
      </div>
      {/* Ring matching area */}
      <div style={{display:'flex',justifyContent:'center',padding:'20px 0',position:'relative'}}>
        <svg width="220" height="220" viewBox="0 0 220 220">
          <defs>
            <linearGradient id="rmg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C0C0C0"/><stop offset="100%" stopColor="#D4AF37"/></linearGradient>
            <radialGradient id="rmglow"><stop offset="0%" stopColor="var(--gold)" stopOpacity=".08"/>
              <stop offset="100%" stopColor="transparent"/></radialGradient>
          </defs>
          <circle cx="110" cy="110" r="100" fill="url(#rmglow)"/>
          {/* Grid */}
          <line x1="110" y1="10" x2="110" y2="210" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4 4"/>
          <line x1="10" y1="110" x2="210" y2="110" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4 4"/>
          {/* Main ring circle */}
          <circle cx="110" cy="110" r={ringDiaPx/2} fill="none" stroke="url(#rmg)" strokeWidth="3"
            style={{transition:'r .1s ease'}}/>
          {/* Outer guide */}
          <circle cx="110" cy="110" r={ringDiaPx/2+3} fill="none" stroke="var(--gold)" strokeWidth="0.5"
            opacity=".25" strokeDasharray="4 4"/>
          {/* Diameter */}
          <text x="110" y={110-ringDiaPx/2-10} textAnchor="middle" fill="var(--silver)" fontSize="12"
            fontFamily="var(--f-mono)" fontWeight="600">{ringDiaMm.toFixed(1)}mm</text>
        </svg>
      </div>
      {/* Slider */}
      <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
        <span style={{fontSize:'.7rem',color:'var(--text3)'}}>−</span>
        <input type="range" min="0" max="100" value={ringSlider} onChange={e=>setRingSlider(+e.target.value)}
          style={{flex:1,accentColor:'var(--gold)'}}/>
        <span style={{fontSize:'.7rem',color:'var(--text3)'}}>+</span>
      </div>
      {/* Tip */}
      <div style={{padding:'8px 12px',borderRadius:10,background:'rgba(212,175,55,0.05)',
        border:'1px solid rgba(212,175,55,0.1)',fontSize:'.78rem',color:'var(--text2)',marginBottom:14,
        display:'flex',gap:6,alignItems:'center'}}>
        <span>👁️</span> {TX.ringTip}
      </div>
      {/* Current size preview */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:6,marginBottom:14,textAlign:'center'}}>
        {[{v:findSize(ringDiaMm).us,l:'US'},{v:findSize(ringDiaMm).eu,l:'EU'},
          {v:findSize(ringDiaMm).uk,l:'UK'},{v:ringDiaMm.toFixed(1)+'mm',l:'⌀'}].map((x,i)=>(
          <div key={i} style={{padding:'8px 4px',borderRadius:8,background:'var(--card)',border:'1px solid var(--border)'}}>
            <div style={{fontFamily:'var(--f-mono)',fontSize:'.95rem',fontWeight:700,
              color:i===0?'var(--silver)':i===1?'var(--gold)':'var(--text)'}}>{x.v}</div>
            <div style={{fontSize:'.6rem',color:'var(--text3)',marginTop:1}}>{x.l}</div>
          </div>
        ))}
      </div>
      <button onClick={doRingResult} style={{width:'100%',padding:'14px',borderRadius:14,
        background:'linear-gradient(135deg,var(--silver),#a0a8b0)',color:'var(--bg)',
        fontWeight:700,fontSize:'.95rem',border:'none'}}>{TX.ringBtn}</button>
    </div>
  );

  // ═══ PHASE: STRING METHOD ═══
  // SVG labels per language
  const SVG_L = { tr:{wrap:'sarın',mark:'işaret',finger:'yüzük parmağı'}, en:{wrap:'wrap',mark:'mark',finger:'ring finger'}, ar:{wrap:'لف',mark:'علامة',finger:'بنصر'} }[lang]||{wrap:'sarın',mark:'işaret',finger:'yüzük parmağı'};

  const StepSVG = ({s}) => (
    <svg width="260" height="130" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block',margin:'0 auto'}}>
      <defs>
        <linearGradient id="agL" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#C0C0C0"/><stop offset="100%" stopColor="#D4AF37"/></linearGradient>
        <linearGradient id="agV" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#D4AF37"/><stop offset="100%" stopColor="#C0C0C0"/></linearGradient>
        <radialGradient id="gl1"><stop offset="0%" stopColor="var(--gold)" stopOpacity=".1"/><stop offset="100%" stopColor="transparent"/></radialGradient>
      </defs>
      {s===0&&<><circle cx="130" cy="60" r="55" fill="url(#gl1)"/>
        <g transform="translate(40,25)" opacity=".6"><circle cx="8" cy="4" r="7" fill="none" stroke="var(--silver)" strokeWidth="1.5"/><circle cx="8" cy="24" r="7" fill="none" stroke="var(--silver)" strokeWidth="1.5"/><line x1="14" y1="8" x2="28" y2="14" stroke="var(--silver)" strokeWidth="1.8" strokeLinecap="round"/><line x1="14" y1="20" x2="28" y2="14" stroke="var(--silver)" strokeWidth="1.8" strokeLinecap="round"/></g>
        <line x1="70" y1="60" x2="230" y2="60" stroke="url(#agL)" strokeWidth="3.5" strokeLinecap="round" className="ring-draw-line"/>
        <circle cx="70" cy="60" r="5" fill="var(--bg)" stroke="var(--silver)" strokeWidth="2"/><circle cx="230" cy="60" r="5" fill="var(--bg)" stroke="var(--gold)" strokeWidth="2"/>
        <line x1="70" y1="82" x2="230" y2="82" stroke="var(--silver)" strokeWidth="0.8" opacity=".4"/><line x1="70" y1="76" x2="70" y2="88" stroke="var(--silver)" strokeWidth="0.8" opacity=".4"/><line x1="230" y1="76" x2="230" y2="88" stroke="var(--silver)" strokeWidth="0.8" opacity=".4"/>
        <rect x="120" y="74" width="50" height="16" rx="8" fill="var(--bg)" stroke="var(--silver)" strokeWidth="0.8" opacity=".7"/><text x="145" y="86" textAnchor="middle" fill="var(--silver)" fontSize="10" fontFamily="var(--f-mono)" fontWeight="600">~10 cm</text>
      </>}
      {s===1&&<><circle cx="155" cy="65" r="50" fill="url(#gl1)"/>
        <g transform="translate(10,5) scale(0.48)" opacity=".5"><path d="M50 120 L48 85 L46 65 Q45 52 50 48 Q55 44 58 50 L60 62 Q59 40 62 32 Q66 24 71 24 Q76 24 78 32 L80 50 Q80 30 84 24 Q88 18 93 18 Q98 18 100 26 L102 48 Q103 32 107 28 Q111 24 116 28 Q120 32 118 48 L115 65 Q120 52 124 50 Q128 48 131 52 Q134 58 130 70 L124 90 Q120 105 100 115 L50 120Z" fill="var(--card)" stroke="var(--text3)" strokeWidth="2.2" strokeLinejoin="round"/><ellipse cx="90" cy="58" rx="10" ry="8" fill="none" stroke="var(--gold)" strokeWidth="3"/></g>
        <ellipse cx="160" cy="65" rx="30" ry="35" fill="var(--card)" stroke="var(--text3)" strokeWidth="1.5"/><text x="160" y="62" textAnchor="middle" fill="var(--text3)" fontSize="7.5" fontFamily="var(--f-mono)" opacity=".45">{SVG_L.finger}</text><circle cx="160" cy="70" r="1.5" fill="var(--text3)" opacity=".2"/>
        <ellipse cx="160" cy="65" rx="36" ry="41" fill="none" stroke="url(#agV)" strokeWidth="3.5" strokeLinecap="round" className="ring-wrap-anim"/>
        <path d="M123 58 L117 50 L120 62" fill="var(--gold)" opacity=".7"/>
        <line x1="198" y1="38" x2="225" y2="25" stroke="var(--gold)" strokeWidth="0.7" opacity=".4"/><text x="228" y="25" fill="var(--gold)" fontSize="7.5" fontFamily="var(--f-mono)" opacity=".55">{SVG_L.wrap}</text>
      </>}
      {s===2&&<><circle cx="155" cy="65" r="50" fill="url(#gl1)"/>
        <g transform="translate(10,5) scale(0.48)" opacity=".4"><path d="M50 120 L48 85 L46 65 Q45 52 50 48 Q55 44 58 50 L60 62 Q59 40 62 32 Q66 24 71 24 Q76 24 78 32 L80 50 Q80 30 84 24 Q88 18 93 18 Q98 18 100 26 L102 48 Q103 32 107 28 Q111 24 116 28 Q120 32 118 48 L115 65 Q120 52 124 50 Q128 48 131 52 Q134 58 130 70 L124 90 Q120 105 100 115 L50 120Z" fill="var(--card)" stroke="var(--text3)" strokeWidth="2.2" strokeLinejoin="round"/><ellipse cx="90" cy="58" rx="10" ry="8" fill="none" stroke="var(--gold)" strokeWidth="3"/><circle cx="78" cy="56" r="4" fill="var(--gold)" opacity=".6"/></g>
        <ellipse cx="160" cy="65" rx="30" ry="35" fill="var(--card)" stroke="var(--text3)" strokeWidth="1.5"/><ellipse cx="160" cy="65" rx="36" ry="41" fill="none" stroke="url(#agV)" strokeWidth="2.5"/>
        <circle cx="124" cy="60" r="8" fill="var(--gold)" opacity=".1"><animate attributeName="r" values="8;13;8" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values=".1;.2;.1" dur="2s" repeatCount="indefinite"/></circle>
        <circle cx="124" cy="60" r="4.5" fill="var(--gold)" opacity=".85"/><circle cx="124" cy="60" r="4.5" fill="none" stroke="#fff" strokeWidth="1" opacity=".3"/>
        <g transform="translate(87,18) rotate(35)"><rect x="0" y="0" width="5" height="32" rx="2" fill="var(--text2)" opacity=".22"/><polygon points="0.5,32 4.5,32 2.5,39" fill="var(--gold)" opacity=".8"/></g>
        <line x1="124" y1="48" x2="124" y2="32" stroke="var(--gold)" strokeWidth="0.7" strokeDasharray="2 2" opacity=".5"/>
        <rect x={124-Math.max(SVG_L.mark.length*3.5,18)} y="18" width={Math.max(SVG_L.mark.length*7,36)} height="16" rx="8" fill="var(--bg)" stroke="var(--gold)" strokeWidth="1" opacity=".8"/><text x="124" y="30" textAnchor="middle" fill="var(--gold)" fontSize="8.5" fontFamily="var(--f-mono)" fontWeight="700">{SVG_L.mark}</text>
      </>}
      {s===3&&<><circle cx="130" cy="55" r="55" fill="url(#gl1)"/>
        <line x1="30" y1="50" x2="210" y2="50" stroke="url(#agL)" strokeWidth="3.5" strokeLinecap="round" className="ring-draw-line"/><circle cx="30" cy="50" r="5" fill="var(--bg)" stroke="var(--silver)" strokeWidth="2"/><circle cx="210" cy="50" r="5" fill="var(--bg)" stroke="var(--gold)" strokeWidth="2"/>
        <rect x="18" y="68" width="224" height="24" rx="4" fill="var(--card)" stroke="var(--border)" strokeWidth="1"/>
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(i=><g key={i}><line x1={24+i*13} y1="68" x2={24+i*13} y2={i%10===0?86:i%5===0?82:76} stroke={i%10===0?"var(--silver)":"var(--text3)"} strokeWidth={i%10===0?1.2:i%5===0?0.8:0.4}/>{i%5===0&&<text x={24+i*13} y="100" textAnchor="middle" fill="var(--text3)" fontSize="7" fontFamily="var(--f-mono)">{i*4}mm</text>}</g>)}
        <line x1="30" y1="35" x2="210" y2="35" stroke="url(#agL)" strokeWidth="1"/><line x1="30" y1="30" x2="30" y2="40" stroke="var(--silver)" strokeWidth="1"/><line x1="210" y1="30" x2="210" y2="40" stroke="var(--gold)" strokeWidth="1"/>
        <rect x="95" y="22" width="55" height="20" rx="10" fill="var(--bg)" stroke="url(#agL)" strokeWidth="1.5"/><text x="122" y="36" textAnchor="middle" fill="var(--silver)" fontSize="13" fontWeight="700" fontFamily="var(--f-mono)">{stringMm}mm</text>
      </>}
    </svg>
  );

  if (phase === 'string') return (
    <div className="tm-tool">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
        <span style={{fontSize:'.9rem',fontWeight:600}}>{TX.method}</span>
        <span style={{fontSize:'.7rem',color:'var(--text3)',fontFamily:'var(--f-mono)'}}>{step+1}/4</span>
      </div>
      {/* Progress bar */}
      <div style={{height:3,background:'var(--border)',borderRadius:2,marginBottom:12}}>
        <div style={{height:'100%',width:`${(step+1)*25}%`,borderRadius:2,
          background:'linear-gradient(90deg,var(--silver),var(--gold))',transition:'width .3s'}}/>
      </div>
      {/* SVG illustration + text */}
      <div style={{borderRadius:14,background:'var(--card)',border:'1px solid var(--border)',marginBottom:12,overflow:'hidden'}}>
        <div style={{padding:'10px 0 0'}}><StepSVG s={step} /></div>
        <div style={{padding:'12px 18px 16px'}}>
          <div style={{fontWeight:700,fontSize:'1.02rem',marginBottom:4}}>{TX.steps?.[step]?.t}</div>
          <div style={{fontSize:'.88rem',color:'var(--text2)',lineHeight:1.55}}>{TX.steps?.[step]?.d}</div>
        </div>
      </div>
      {/* Nav */}
      <div style={{display:'flex',gap:8,marginBottom:10}}>
        <button disabled={step===0} onClick={()=>setStep(s=>s-1)} style={{
          flex:1,padding:'12px',borderRadius:12,border:'1px solid var(--border)',
          opacity:step===0?.3:1,fontWeight:500}}>←</button>
        {step < 3 ? (
          <button onClick={()=>setStep(s=>s+1)} style={{flex:2,padding:'12px',borderRadius:12,
            background:'linear-gradient(135deg,var(--silver),#a0a8b0)',color:'var(--bg)',
            fontWeight:600,border:'none'}}>→</button>
        ) : (
          <div style={{flex:3,display:'flex',flexDirection:'column',gap:4}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
              <span style={{fontSize:'.78rem',color:'var(--text2)'}}>{TX.circ}</span>
              <span style={{fontFamily:'var(--f-mono)',fontWeight:700,color:'var(--silver)'}}>{stringMm}mm</span>
            </div>
            <input type="range" min="40" max="72" step="0.5" value={stringMm}
              onChange={e=>setStringMm(+e.target.value)} style={{accentColor:'var(--silver)'}}/>
          </div>
        )}
      </div>
      {step >= 3 && (
        <button onClick={doStringResult} style={{width:'100%',padding:'14px',borderRadius:14,
          background:'linear-gradient(135deg,var(--silver),#a0a8b0)',color:'var(--bg)',
          fontWeight:700,fontSize:'.95rem',border:'none'}}>{TX.findBtn}</button>
      )}
      {/* Tip */}
      <div style={{padding:'8px 12px',borderRadius:10,background:'rgba(212,175,55,0.05)',
        border:'1px solid rgba(212,175,55,0.1)',fontSize:'.78rem',color:'var(--text2)',marginTop:8,
        display:'flex',gap:6,alignItems:'center'}}>
        <span>💡</span> {TX.tip}
      </div>
    </div>
  );

  // ═══ PHASE: RESULT ═══
  if (phase === 'result') return (
    <div className="tm-tool" style={{textAlign:'center'}}>
      {/* Ring icon */}
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{margin:'0 auto 10px',display:'block'}}>
        <defs><linearGradient id="rrg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C0C0C0"/><stop offset="100%" stopColor="#D4AF37"/></linearGradient></defs>
        <circle cx="28" cy="28" r="20" fill="none" stroke="url(#rrg)" strokeWidth="3"/>
      </svg>
      <div style={{fontSize:'.75rem',color:'var(--text3)',fontWeight:600,letterSpacing:'.5px',marginBottom:4}}>{TX.resultTitle}</div>
      {/* Main size */}
      <div style={{fontSize:'2.8rem',fontWeight:800,fontFamily:'var(--f-mono)',color:'var(--silver)',lineHeight:1}}>
        US {s.us}
      </div>
      <div style={{fontSize:'.85rem',color:'var(--text2)',marginBottom:16}}>{s.dia}mm · {s.mm}mm {TX.circ?.split('(')[0]}</div>
      {/* All standards */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8,marginBottom:18}}>
        {[{v:s.us,l:'US',c:'var(--silver)'},{v:s.eu,l:'EU',c:'var(--gold)'},
          {v:s.uk,l:'UK',c:'var(--text)'},{v:s.jp,l:'JP',c:'var(--text2)'}].map((x,i)=>(
          <div key={i} style={{padding:'12px 4px',borderRadius:12,background:'var(--card)',border:'1px solid var(--border)'}}>
            <div style={{fontFamily:'var(--f-mono)',fontSize:'1.2rem',fontWeight:700,color:x.c}}>{x.v}</div>
            <div style={{fontSize:'.6rem',color:'var(--text3)',marginTop:2,fontWeight:600}}>{x.l}</div>
          </div>
        ))}
      </div>

      {/* İstanbul Gümüş CTA */}
      <a href="https://www.instagram.com/istanbulgumustr/" target="_blank" rel="noopener"
        style={{display:'block',padding:'14px',borderRadius:14,
          background:'linear-gradient(135deg,rgba(212,175,55,0.08),rgba(212,175,55,0.03))',
          border:'1.5px solid rgba(212,175,55,0.2)',color:'var(--gold)',fontWeight:600,
          fontSize:'.9rem',marginBottom:12,textDecoration:'none'}}>{TX.orderCta}</a>

      {/* Actions */}
      <div style={{display:'flex',gap:8}}>
        <button onClick={()=>{setPhase('start');setStep(0);setResultSize(null)}} style={{
          flex:1,padding:'12px',borderRadius:12,border:'1px solid var(--border)',
          fontSize:'.85rem',color:'var(--text2)'}}>{TX.restart}</button>
        <button onClick={()=>{
          const txt = `${TX.resultTitle}: US ${s.us} / EU ${s.eu} / UK ${s.uk} / ${s.dia}mm — JewelPedi`;
          if(navigator.share) navigator.share({title:'JewelPedi Ring Size',text:txt}).catch(()=>{});
          else navigator.clipboard?.writeText(txt);
        }} style={{flex:1,padding:'12px',borderRadius:12,
          background:'linear-gradient(135deg,var(--silver),#a0a8b0)',color:'var(--bg)',
          fontWeight:600,fontSize:'.85rem',border:'none'}}>{TX.share}</button>
      </div>
    </div>
  );

  return null;
}

/* ── TOOL 3: Quiz ── */
const QQ=[{q:{tr:"925 ayar saf gümüş oranı?",en:"Pure silver ratio in 925?",ar:"نسبة الفضة في ٩٢٥؟"},o:["90%","92.5%","95%","99%"],c:1},{q:{tr:"Gümüş sembolü?",en:"Silver symbol?",ar:"رمز الفضة؟"},o:["Si","Au","Ag","Ar"],c:2},{q:{tr:"Kararma nedeni?",en:"Tarnish cause?",ar:"سبب التشوه؟"},o:[{tr:"Oksijen",en:"Oxygen",ar:"أكسجين"},{tr:"Kükürt",en:"Sulfur",ar:"كبريت"},{tr:"Azot",en:"Nitrogen",ar:"نيتروجين"},{tr:"Klor",en:"Chlorine",ar:"كلور"}],c:1},{q:{tr:"En büyük üretici?",en:"Largest producer?",ar:"أكبر منتج؟"},o:[{tr:"Çin",en:"China",ar:"الصين"},{tr:"Peru",en:"Peru",ar:"بيرو"},{tr:"Meksika",en:"Mexico",ar:"المكسيك"},{tr:"Avustralya",en:"Australia",ar:"أستراليا"}],c:2},{q:{tr:"Atom numarası?",en:"Atomic number?",ar:"العدد الذري؟"},o:["29","47","79","50"],c:1},{q:{tr:"1 troy ons?",en:"1 troy ounce?",ar:"أونصة تروي؟"},o:["28.35g","31.10g","35.27g","50g"],c:1},{q:{tr:"Gümüş il?",en:"Silver province?",ar:"محافظة الفضة؟"},o:["Gümüşhane","Trabzon","Elazığ","Erzurum"],c:0},{q:{tr:"Mokume-gane?",en:"Mokume-gane?",ar:"موكومي-غاني؟"},o:[{tr:"Çin",en:"China",ar:"الصين"},{tr:"Hindistan",en:"India",ar:"الهند"},{tr:"Japonya",en:"Japan",ar:"اليابان"},{tr:"Kore",en:"Korea",ar:"كوريا"}],c:2},{q:{tr:"25. yıldönümü?",en:"25th anniversary?",ar:"الذكرى ٢٥؟"},o:[{tr:"Altın",en:"Golden",ar:"ذهبي"},{tr:"Gümüş",en:"Silver",ar:"فضي"},{tr:"Bronz",en:"Bronze",ar:"برونزي"},{tr:"Elmas",en:"Diamond",ar:"ماسي"}],c:1},{q:{tr:"Telkâri şehri?",en:"Filigree city?",ar:"مدينة الفيليغري؟"},o:["İstanbul","Trabzon","Konya","Ankara"],c:1}];
function QuizTool({lang}){const[st,setSt]=useState('s');const[qi,setQi]=useState(0);const[sc,setSc]=useState(0);const[ans,setAns]=useState(null);const q=QQ[qi];const getO=(o)=>typeof o==='string'?o:o[lang];const answer=(i)=>{if(ans!==null)return;setAns(i);if(i===q.c)setSc(s=>s+1)};const next=()=>{if(qi<QQ.length-1){setQi(qi+1);setAns(null)}else setSt('r')};const restart=()=>{setSt('s');setQi(0);setSc(0);setAns(null)};
if(st==='s')return<div style={{textAlign:'center',padding:32}}><div style={{fontSize:48,marginBottom:16}}>🧠</div><button className="btn btn-primary" onClick={()=>setSt('q')}>{lang==='tr'?'Başla':'Start'}</button></div>;
if(st==='r')return<div style={{textAlign:'center',padding:24}}><div style={{fontSize:48,fontWeight:700,fontFamily:'var(--f-mono)',color:'var(--gold)',marginBottom:8}}>{sc}<span style={{fontSize:20,color:'var(--text2)'}}>/10</span></div><div style={{display:'flex',gap:4,justifyContent:'center',marginBottom:20}}>{[...Array(10)].map((_,i)=><div key={i} style={{width:22,height:22,borderRadius:'50%',background:i<sc?'#27ae60':'#e74c3c',display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,color:'#fff'}}>{i<sc?'✓':'✗'}</div>)}</div><button className="btn btn-primary" onClick={restart}>{lang==='tr'?'Tekrar':'Retry'}</button></div>;
return<div className="tm-tool"><div style={{display:'flex',justifyContent:'space-between',marginBottom:12,fontSize:13,color:'var(--text2)'}}><span>{qi+1}/10</span><span>{sc}</span></div><div style={{display:'flex',gap:3,marginBottom:20}}>{QQ.map((_,i)=><div key={i} style={{flex:1,height:3,borderRadius:2,background:i<qi?'#27ae60':i===qi?'var(--gold)':'var(--border)'}}/>)}</div><h3 style={{fontSize:'1.05rem',fontWeight:600,marginBottom:16,lineHeight:1.5}}>{q.q[lang]}</h3><div style={{display:'flex',flexDirection:'column',gap:8}}>{q.o.map((opt,idx)=>{const isC=idx===q.c,isS=ans===idx;let bdr='var(--border)',bg='transparent',clr='var(--text)';if(ans!==null){if(isC){bg='rgba(39,174,96,0.1)';bdr='#27ae60';clr='#27ae60'}else if(isS){bg='rgba(231,76,60,0.1)';bdr='#e74c3c';clr='#e74c3c'}}return<button key={idx} onClick={()=>answer(idx)} style={{padding:'12px 16px',borderRadius:10,border:`1.5px solid ${bdr}`,background:bg,color:clr,fontSize:14,fontWeight:500,cursor:ans!==null?'default':'pointer',textAlign:'start',transition:'all .2s'}}>{getO(opt)}</button>})}</div>{ans!==null&&<button className="btn btn-primary" style={{marginTop:16,width:'100%'}} onClick={next}>{qi<QQ.length-1?(lang==='tr'?'Sonraki →':'Next →'):(lang==='tr'?'Sonuç':'Result')}</button>}</div>}

/* ── TOOL 4: Color Palette ── */
const ALLOYS=[{h:"#E8E8E8",n:"Fine 999"},{h:"#D4D4D4",n:"Sterling 925"},{h:"#C0B8A8",n:"Argentium"},{h:"#B8B0A0",n:"Shibuichi"},{h:"#6B5B4B",n:"Shakudo"},{h:"#D4C4B0",n:"Electrum"}];
const PATINA=[{h:"#E8E8E8",n:"New"},{h:"#D0CEC8",n:"1-3mo"},{h:"#B8B4A8",n:"3-6mo"},{h:"#8A8478",n:"6-12mo"},{h:"#5A5248",n:"1-2yr"},{h:"#2A2420",n:"2+yr"}];
const GEMS_DATA=[{h:"#4B0082",n:"Amethyst"},{h:"#40E0D0",n:"Turquoise"},{h:"#1E3A5F",n:"Lapis"},{h:"#AADAFF",n:"Moonstone"},{h:"#DC143C",n:"Garnet"},{h:"#228B22",n:"Emerald"},{h:"#353839",n:"Onyx"},{h:"#FF6347",n:"Coral"}];
function ColorPalette({lang}){const[cp,setCp]=useState(null);const copy=(h)=>{navigator.clipboard?.writeText(h);setCp(h);setTimeout(()=>setCp(null),1200)};
return<div className="tm-tool" style={{gap:16}}>{cp&&<div style={{position:'fixed',top:80,left:'50%',transform:'translateX(-50%)',padding:'6px 16px',borderRadius:8,background:'var(--gold)',color:'#0f0f14',fontSize:12,fontWeight:600,zIndex:100}}>✓ {cp}</div>}<div><h4 style={{fontFamily:'var(--f-head)',fontSize:'.95rem',marginBottom:8}}>🎨 {lang==='tr'?'Alaşımlar':'Alloys'}</h4><div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:6}}>{ALLOYS.map((a,i)=><div key={i} onClick={()=>copy(a.h)} style={{cursor:'pointer',borderRadius:10,border:'1px solid var(--border)',overflow:'hidden'}}><div style={{height:36,background:a.h}}/><div style={{padding:'4px 6px',fontSize:10}}><div style={{fontWeight:600}}>{a.n}</div><div style={{fontFamily:'var(--f-mono)',color:'var(--text3)',fontSize:9}}>{a.h}</div></div></div>)}</div></div><div><h4 style={{fontFamily:'var(--f-head)',fontSize:'.95rem',marginBottom:8}}>⏳ Patina</h4><div style={{display:'flex',gap:2,borderRadius:8,overflow:'hidden'}}>{PATINA.map((p,i)=><div key={i} style={{flex:1,height:32,background:p.h,cursor:'pointer'}} onClick={()=>copy(p.h)} title={p.n}/>)}</div></div><div><h4 style={{fontFamily:'var(--f-head)',fontSize:'.95rem',marginBottom:8}}>💎 {lang==='tr'?'Taşlar':'Gems'}</h4><div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:6}}>{GEMS_DATA.map((g,i)=><div key={i} onClick={()=>copy(g.h)} style={{cursor:'pointer',textAlign:'center',padding:6,borderRadius:8,border:'1px solid var(--border)'}}><div style={{width:24,height:24,borderRadius:'50%',background:g.h,margin:'0 auto 3px',boxShadow:`0 0 6px ${g.h}33`}}/><div style={{fontSize:9,fontWeight:600}}>{g.n}</div></div>)}</div></div></div>}

/* ── TOOL 5: Carbon Footprint ── */
function CarbonFootprint({lang}){const[w,setW]=useState(25);const[s,setS]=useState('mixed');const fac={primary:0.175,recycled:0.037,mixed:0.106};const co2=(w/1000)*fac[s];const L={tr:{w:'Ağırlık (g)',s:'Kaynak',r:'Sonuç'},en:{w:'Weight (g)',s:'Source',r:'Result'},ar:{w:'الوزن',s:'المصدر',r:'النتيجة'}}[lang];const srcs=[{id:'primary',l:lang==='tr'?'Birincil':'Primary',c:'#e74c3c'},{id:'recycled',l:lang==='tr'?'Geri Dönüşüm':'Recycled',c:'#27ae60'},{id:'mixed',l:lang==='tr'?'Karışık':'Mixed',c:'#f39c12'}];
return<div className="tm-tool"><label className="calc-label">{L.w}</label><input type="number" className="calc-input" value={w} onChange={e=>setW(Math.max(1,+e.target.value))}/><input type="range" min="1" max="500" value={w} onChange={e=>setW(+e.target.value)} style={{width:'100%',marginTop:8,accentColor:'var(--gold)'}}/><label className="calc-label" style={{marginTop:12}}>{L.s}</label><div style={{display:'flex',gap:6,marginBottom:16}}>{srcs.map(x=><button key={x.id} onClick={()=>setS(x.id)} style={{flex:1,padding:'10px 4px',borderRadius:8,border:`1.5px solid ${s===x.id?x.c:'var(--border)'}`,background:s===x.id?x.c+'18':'transparent',color:s===x.id?x.c:'var(--text2)',fontSize:12,fontWeight:600,cursor:'pointer'}}>{x.l}</button>)}</div><div className="calc-result"><div className="calc-result-num" style={{color:s==='recycled'?'#27ae60':'#f39c12'}}>{co2.toFixed(3)}</div><div className="calc-result-label">kg CO₂</div></div><div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8,marginTop:12}}>{[{i:'🚗',v:(co2/0.12).toFixed(1)+' km',l:'Car km'},{i:'🌳',v:(co2/0.022).toFixed(0),l:'Tree days'},{i:'📱',v:Math.round(co2/0.008),l:'Phone'}].map((c,i)=><div key={i} className="tm-result-row" style={{flexDirection:'column',alignItems:'center',textAlign:'center',gap:2,padding:'8px 4px'}}><span style={{fontSize:18}}>{c.i}</span><span style={{fontFamily:'var(--f-mono)',fontWeight:600,color:'var(--gold)',fontSize:13}}>{c.v}</span><span style={{fontSize:9,color:'var(--text3)'}}>{c.l}</span></div>)}</div></div>}

/* ── TOOL 6: Periodic Table (mini) ── */
const ELS=[{s:'Ag',n:47,nm:{tr:'Gümüş',en:'Silver',ar:'فضة'},m:'107.87',c:'#C0C0C0',rel:{tr:'Ana element',en:'Main element',ar:'العنصر الرئيسي'}},{s:'Cu',n:29,nm:{tr:'Bakır',en:'Copper',ar:'نحاس'},m:'63.55',c:'#fb923c',rel:{tr:'925 alaşım',en:'925 alloy',ar:'سبيكة ٩٢٥'}},{s:'Au',n:79,nm:{tr:'Altın',en:'Gold',ar:'ذهب'},m:'196.97',c:'#D4AF37',rel:{tr:'Kardeş metal',en:'Sister metal',ar:'معدن شقيق'}},{s:'Pt',n:78,nm:{tr:'Platin',en:'Platinum',ar:'بلاتين'},m:'195.08',c:'#E5E4E2',rel:{tr:'Değerli metal',en:'Precious',ar:'ثمين'}},{s:'Pd',n:46,nm:{tr:'Paladyum',en:'Palladium',ar:'بالاديوم'},m:'106.42',c:'#CED0CE',rel:{tr:'Komşu',en:'Neighbor',ar:'مجاور'}},{s:'S',n:16,nm:{tr:'Kükürt',en:'Sulfur',ar:'كبريت'},m:'32.07',c:'#4f8ff7',rel:{tr:'Kararma nedeni',en:'Causes tarnish',ar:'يسبب التشوه'}},{s:'Zn',n:30,nm:{tr:'Çinko',en:'Zinc',ar:'زنك'},m:'65.38',c:'#fb923c',rel:{tr:'Alaşım',en:'Alloy',ar:'سبيكة'}},{s:'Ge',n:32,nm:{tr:'Germanyum',en:'Germanium',ar:'جرمانيوم'},m:'72.63',c:'#fb923c',rel:{tr:'Argentium',en:'Argentium',ar:'أرجنتيوم'}},{s:'Sn',n:50,nm:{tr:'Kalay',en:'Tin',ar:'قصدير'},m:'118.71',c:'#fb923c',rel:{tr:'Lehim',en:'Solder',ar:'لحام'}}];
function PeriodicTable({lang}){const[sel,setSel]=useState(null);const el=sel!==null?ELS[sel]:null;return<div className="tm-tool" style={{gap:12}}><div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:6}}>{ELS.map((e,i)=><button key={i} onClick={()=>setSel(i)} style={{padding:'8px 4px',borderRadius:10,border:`2px solid ${sel===i?e.c:'var(--border)'}`,background:sel===i?e.c+'18':'var(--card)',cursor:'pointer',textAlign:'center'}}><div style={{fontSize:9,color:'var(--text3)',fontFamily:'var(--f-mono)'}}>{e.n}</div><div style={{fontSize:18,fontWeight:700,color:e.c,fontFamily:'var(--f-mono)'}}>{e.s}</div><div style={{fontSize:10,color:'var(--text2)'}}>{e.nm[lang]}</div></button>)}</div>{el?<div style={{padding:14,borderRadius:12,border:`1px solid ${el.c}44`,background:'var(--card)'}}><div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}><div style={{width:40,height:40,borderRadius:10,background:el.c+'22',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,fontWeight:700,color:el.c,fontFamily:'var(--f-mono)'}}>{el.s}</div><div><div style={{fontSize:15,fontWeight:600}}>{el.nm[lang]}</div><div style={{fontSize:11,color:'var(--text3)'}}>#{el.n} · {el.m} u</div></div></div><div style={{padding:'6px 10px',borderRadius:8,background:el.c+'10',fontSize:12,color:'var(--text2)'}}><b style={{color:el.c}}>{lang==='tr'?'İlişki':'Relation'}:</b> {el.rel[lang]}</div></div>:<div style={{textAlign:'center',padding:16,color:'var(--text3)',fontSize:13}}>{lang==='tr'?'Bir element seçin':'Select an element'}</div>}</div>}

/* ── TOOL 7: Karat Converter ── */
function KaratConverter({lang}){const[sys,setSys]=useState('millesimal');const[v,setV]=useState(925);let pct;if(sys==='karat')pct=(v/24)*100;else if(sys==='millesimal')pct=v/10;else pct=v;pct=Math.max(0,Math.min(100,pct));
return<div className="tm-tool"><label className="calc-label">{lang==='tr'?'Sistem':'System'}</label><div style={{display:'flex',gap:6,marginBottom:12}}>{[{id:'karat',l:'Karat'},{id:'millesimal',l:'‰'},{id:'percentage',l:'%'}].map(s=><button key={s.id} onClick={()=>{setSys(s.id);setV(s.id==='karat'?22:s.id==='millesimal'?925:92.5)}} style={{flex:1,padding:'10px 4px',borderRadius:8,border:`1.5px solid ${sys===s.id?'var(--silver)':'var(--border)'}`,background:sys===s.id?'rgba(192,192,192,0.08)':'transparent',color:sys===s.id?'var(--silver)':'var(--text2)',fontSize:12,fontWeight:600,cursor:'pointer'}}>{s.l}</button>)}</div><input type="number" className="calc-input" value={v} onChange={e=>setV(+e.target.value)} min="0"/><div style={{marginTop:16,display:'flex',flexDirection:'column',gap:6}}><div className="tm-result-row"><span style={{fontFamily:'var(--f-mono)',fontWeight:600,color:'var(--gold)'}}>{(pct/100*24).toFixed(2)} K</span></div><div className="tm-result-row"><span style={{fontFamily:'var(--f-mono)',fontWeight:600,color:'var(--silver)'}}>{(pct*10).toFixed(0)} ‰</span></div><div className="tm-result-row"><span style={{fontFamily:'var(--f-mono)',fontWeight:600,color:'var(--green)'}}>{pct.toFixed(2)} %</span></div></div><div style={{marginTop:8,height:12,borderRadius:6,background:'var(--card)',border:'1px solid var(--border)',overflow:'hidden'}}><div style={{width:`${pct}%`,height:'100%',background:'linear-gradient(90deg,var(--silver),var(--gold))',borderRadius:6,transition:'width .3s'}}/></div></div>}

/* ── TOOL 8: Gemstone Guide ── */
const GS=[{n:{tr:'Ametist',en:'Amethyst',ar:'أماثيست'},h:'#9966CC',m:7,d:{tr:'Huzur taşı',en:'Peace stone',ar:'حجر السلام'}},{n:{tr:'Turkuaz',en:'Turquoise',ar:'فيروز'},h:'#40E0D0',m:6,d:{tr:'Nazar taşı',en:'Protection',ar:'الحماية'}},{n:{tr:'Lapis',en:'Lapis Lazuli',ar:'لازورد'},h:'#1E3A5F',m:5.5,d:{tr:'Bilgelik',en:'Wisdom',ar:'الحكمة'}},{n:{tr:'Garnet',en:'Garnet',ar:'عقيق'},h:'#DC143C',m:7,d:{tr:'Enerji',en:'Energy',ar:'الطاقة'}},{n:{tr:'Ay Taşı',en:'Moonstone',ar:'حجر القمر'},h:'#AADAFF',m:6,d:{tr:'Kadınlık',en:'Femininity',ar:'الأنوثة'}},{n:{tr:'Oniks',en:'Onyx',ar:'أونيكس'},h:'#353839',m:7,d:{tr:'Güç',en:'Strength',ar:'القوة'}},{n:{tr:'Zümrüt',en:'Emerald',ar:'زمرد'},h:'#228B22',m:7.5,d:{tr:'Umut',en:'Hope',ar:'الأمل'}},{n:{tr:'Mercan',en:'Coral',ar:'مرجان'},h:'#FF6347',m:3.5,d:{tr:'Deniz',en:'Ocean',ar:'المحيط'}}];
function GemstoneGuide({lang}){const[s,setS]=useState(0);const g=GS[s];return<div className="tm-tool" style={{gap:10}}><div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:6}}>{GS.map((gem,i)=><button key={i} onClick={()=>setS(i)} style={{padding:6,borderRadius:8,border:`2px solid ${s===i?gem.h:'var(--border)'}`,background:s===i?gem.h+'15':'transparent',cursor:'pointer',textAlign:'center'}}><div style={{width:20,height:20,borderRadius:'50%',background:gem.h,margin:'0 auto 3px',boxShadow:`0 0 6px ${gem.h}44`}}/><div style={{fontSize:9,fontWeight:600}}>{gem.n[lang]}</div></button>)}</div><div style={{padding:14,borderRadius:12,border:`1px solid ${g.h}44`,background:'var(--card)'}}><div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}><div style={{width:36,height:36,borderRadius:'50%',background:g.h,boxShadow:`0 0 12px ${g.h}44`}}/><div><div style={{fontWeight:600,fontSize:15}}>{g.n[lang]}</div><div style={{fontSize:11,color:'var(--text3)'}}>Mohs: {g.m}</div></div></div><p style={{fontSize:13,color:'var(--text2)'}}>{g.d[lang]}</p><div style={{display:'flex',gap:3,marginTop:8,borderRadius:6,overflow:'hidden'}}><div style={{flex:1,height:20,background:'#C0C0C0'}}/><div style={{flex:1,height:20,background:g.h}}/></div></div></div>}

/* ── TOOL 9: Care Guide ── */
function CareGuide({lang}){const[e,setE]=useState(0);const tips=[{i:'🧽',t:{tr:'Günlük Bakım',en:'Daily Care',ar:'العناية اليومية'},s:{tr:['Yumuşak bezle silin','Parfümden uzak tutun','Sporda çıkarın'],en:['Wipe with soft cloth','Avoid perfume','Remove during exercise'],ar:['امسح بقماش ناعم','تجنب العطور','اخلع أثناء الرياضة']}},{i:'✨',t:{tr:'Parlatma',en:'Polishing',ar:'التلميع'},s:{tr:['Parlatma bezi kullanın','Dairesel hareketlerle'],en:['Use polishing cloth','Circular motions'],ar:['استخدم قماش تلميع','حركات دائرية']}},{i:'📦',t:{tr:'Saklama',en:'Storage',ar:'التخزين'},s:{tr:['Anti-tarnish poşette','Silika jel ekleyin','Ayrı tutun'],en:['Anti-tarnish pouch','Add silica gel','Keep separate'],ar:['كيس مضاد للتشوه','أضف سيليكا جل','احفظ منفصلاً']}},{i:'⚠️',t:{tr:'Kaçının',en:'Avoid',ar:'تجنب'},s:{tr:['Klor (havuz)','Kükürt (yumurta)','Direkt güneş'],en:['Chlorine (pool)','Sulfur (eggs)','Direct sunlight'],ar:['الكلور','الكبريت','أشعة الشمس']}}];
return<div className="tm-tool" style={{gap:8}}>{tips.map((tip,i)=><div key={i} style={{borderRadius:12,border:`1px solid ${e===i?'var(--gold)':'var(--border)'}44`,overflow:'hidden'}}><button onClick={()=>setE(e===i?-1:i)} style={{width:'100%',padding:'12px 14px',border:'none',cursor:'pointer',background:'transparent',display:'flex',alignItems:'center',gap:8,justifyContent:'space-between'}}><div style={{display:'flex',alignItems:'center',gap:8}}><span style={{fontSize:20}}>{tip.i}</span><span style={{fontWeight:600,fontSize:13,color:'var(--text)'}}>{tip.t[lang]}</span></div><span style={{transform:e===i?'rotate(180deg)':'none',transition:'transform .3s',color:'var(--text3)',fontSize:11}}>▼</span></button>{e===i&&<div style={{padding:'0 14px 12px'}}>{tip.s[lang].map((s,j)=><div key={j} style={{display:'flex',gap:6,marginBottom:4,fontSize:12,color:'var(--text2)'}}><span style={{color:'var(--gold)'}}>•</span>{s}</div>)}</div>}</div>)}</div>}

/* ── TOOL 10: World Map redirect ── */
function WorldMapTool({lang}){return<div style={{textAlign:'center',padding:20}}><span style={{fontSize:48,display:'block',marginBottom:12}}>🗺️</span><p style={{fontSize:13,color:'var(--text2)',marginBottom:12}}>{lang==='tr'?'Harita Atlas bölümünde.':'Map is in Atlas section.'}</p><a href="#atlas-section" className="btn btn-secondary" style={{display:'inline-flex'}} onClick={()=>document.querySelector('.tm-overlay')?.click()}>{lang==='tr'?'Atlasa Git ↓':'Go to Atlas ↓'}</a></div>}

/* ── TOOL 11: Timeline ── */
const TL=[{y:'MÖ 5000',t:{tr:'Anadolu ilk gümüş',en:'First silver in Anatolia',ar:'أول فضة في الأناضول'},i:'🏺'},{y:'MÖ 700',t:{tr:'İlk gümüş sikke (Lidya)',en:'First silver coins (Lydia)',ar:'أول عملات فضية'},i:'🪙'},{y:'MS 750',t:{tr:'İslam gümüş sanatı',en:'Islamic silver art',ar:'فن الفضة الإسلامي'},i:'☪️'},{y:'1545',t:{tr:'Potosí keşfi',en:'Potosí discovery',ar:'اكتشاف بوتوسي'},i:'🏔️'},{y:'1839',t:{tr:'Fotoğrafçılık',en:'Photography',ar:'التصوير'},i:'📷'},{y:'1980',t:{tr:'Hunt krizi',en:'Hunt crisis',ar:'أزمة هانت'},i:'📈'},{y:'2020+',t:{tr:'Güneş panelleri',en:'Solar panels',ar:'الألواح الشمسية'},i:'☀️'}];
function TimelineTool({lang}){return<div className="tm-tool" style={{gap:0}}>{TL.map((e,i)=><div key={i} style={{display:'flex',gap:10,paddingBottom:14}}><div style={{display:'flex',flexDirection:'column',alignItems:'center',minWidth:28}}><div style={{width:28,height:28,borderRadius:'50%',background:'var(--card)',border:'2px solid var(--silver)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,zIndex:1}}>{e.i}</div>{i<TL.length-1&&<div style={{width:2,flex:1,background:'var(--border)',marginTop:3}}/>}</div><div style={{paddingTop:3}}><div style={{fontFamily:'var(--f-mono)',fontSize:11,fontWeight:700,color:'var(--gold)',marginBottom:2}}>{e.y}</div><div style={{fontSize:13,color:'var(--text)',lineHeight:1.5}}>{e.t[lang]}</div></div></div>)}</div>}

/* ── TOOL 12: Stamp Identifier ── */
const STAMPS=[
{s:"Lion 🦁",c:{tr:"İngiltere",en:"England",ar:"إنجلترا"},p:"925 Ag",y:"1544+"},
{s:"Minerva 🏛️",c:{tr:"Fransa",en:"France",ar:"فرنسا"},p:"800/925 Ag",y:"1838+"},
{s:"Moon ☽",c:{tr:"Almanya",en:"Germany",ar:"ألمانيا"},p:"800/925 Ag",y:"1884+"},
{s:"925+Kod",c:{tr:"Türkiye",en:"Turkey",ar:"تركيا"},p:"800/925 Ag",y:"1923+"},
{s:"Kokoshnik",c:{tr:"Rusya",en:"Russia",ar:"روسيا"},p:"875/925 Ag",y:"1899+"},
{s:"Star ⭐",c:{tr:"İtalya",en:"Italy",ar:"إيطاليا"},p:"800/925 Ag",y:"1872+"},
{s:"STERLING",c:{tr:"ABD",en:"USA",ar:"أمريكا"},p:"925 Ag",y:"1906+"},
{s:"Anchor ⚓",c:{tr:"Birmingham",en:"Birmingham",ar:"برمنغهام"},p:"925 Ag",y:"1773+"},
// ── Gold Stamps ──
{s:"Crown 👑",c:{tr:"İngiltere",en:"England",ar:"إنجلترا"},p:"375-916 Au",y:"1798+"},
{s:"Eagle 🦅",c:{tr:"Fransa",en:"France",ar:"فرنسا"},p:"750 Au",y:"1838+"},
{s:"Sun ☀️",c:{tr:"Almanya",en:"Germany",ar:"ألمانيا"},p:"333-750 Au",y:"1884+"},
{s:"585/750/916+Kod",c:{tr:"Türkiye",en:"Turkey",ar:"تركيا"},p:"585-916 Au",y:"1923+"},
{s:"750 ★",c:{tr:"İtalya",en:"Italy",ar:"إيطاليا"},p:"750 Au",y:"1872+"},
{s:"14K / 585",c:{tr:"ABD",en:"USA",ar:"أمريكا"},p:"417-750 Au",y:"1906+"},
{s:"Owl 🦉",c:{tr:"Fransa (İthal)",en:"France (Import)",ar:"فرنسا (مستورد)"},p:"750 Au",y:"1893+"},
{s:"Darphane 🏛️",c:{tr:"Türkiye (Sikke)",en:"Turkey (Coins)",ar:"تركيا (عملات)"},p:"916 Au",y:"1923+"}
];
function StampIdentifier({lang}){const[q,setQ]=useState('');const fl=q?STAMPS.filter(s=>s.s.toLowerCase().includes(q.toLowerCase())||s.c[lang].toLowerCase().includes(q.toLowerCase())):STAMPS;
return<div className="tm-tool" style={{gap:10}}><input type="text" className="calc-input" placeholder={lang==='tr'?'Damga veya ülke ara...':'Search stamp or country...'} value={q} onChange={e=>setQ(e.target.value)} style={{fontSize:14}}/><div style={{fontSize:11,color:'var(--text3)'}}>{fl.length} {lang==='tr'?'sonuç':'results'}</div>{fl.map((s,i)=><div key={i} style={{padding:10,borderRadius:10,border:'1px solid var(--border)',background:'var(--card)'}}><div style={{fontSize:14,fontWeight:600,marginBottom:3}}>{s.s}</div><div style={{fontSize:12,color:'var(--silver)',marginBottom:2}}>{s.c[lang]}</div><div style={{display:'flex',gap:4}}><span style={{fontSize:10,padding:'2px 6px',borderRadius:4,background:'rgba(212,175,55,0.12)',color:'var(--gold)',fontFamily:'var(--f-mono)',fontWeight:600}}>{s.p}</span><span style={{fontSize:10,padding:'2px 6px',borderRadius:4,background:'rgba(192,192,192,0.08)',color:'var(--silver)'}}>{s.y}</span></div></div>)}</div>}

/* ── TOOL 13: Price Alert ── */
function PriceAlert({lang}){const[pr,setPr]=useState(32.5);const[tg,setTg]=useState(35);const[dr,setDr]=useState('above');const[als,setAls]=useState([]);
return<div className="tm-tool"><div style={{textAlign:'center',fontSize:28,fontWeight:700,color:'var(--gold)',fontFamily:'var(--f-mono)',marginBottom:4}}>${pr.toFixed(2)}</div><input type="range" min={15} max={60} step={0.1} value={pr} onChange={e=>setPr(+e.target.value)} style={{width:'100%',accentColor:'var(--gold)',marginBottom:12}}/><input type="number" className="calc-input" value={tg} onChange={e=>setTg(+e.target.value)} min={1} step={0.5}/><div style={{display:'flex',gap:6,margin:'8px 0'}}>{['above','below'].map(d=><button key={d} onClick={()=>setDr(d)} style={{flex:1,padding:'10px',borderRadius:8,border:`1.5px solid ${dr===d?'var(--gold)':'var(--border)'}`,background:dr===d?'rgba(212,175,55,0.1)':'transparent',color:dr===d?'var(--gold)':'var(--text2)',cursor:'pointer',fontSize:13}}>{d==='above'?'↑':'↓'} {d==='above'?(lang==='tr'?'Üstü':'Above'):(lang==='tr'?'Altı':'Below')}</button>)}</div><button className="btn btn-primary" style={{width:'100%'}} onClick={()=>setAls(p=>[...p,{id:Date.now(),t:tg,d:dr}])}>{lang==='tr'?'Alarm Kur':'Set Alert'}</button>{als.map(a=><div key={a.id} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid var(--border)'}}><span style={{fontFamily:'var(--f-mono)',color:(a.d==='above'?pr>=a.t:pr<=a.t)?'#27ae60':'var(--text)'}}>${a.t} {a.d==='above'?'↑':'↓'}</span><span style={{fontSize:11,color:(a.d==='above'?pr>=a.t:pr<=a.t)?'#27ae60':'#f39c12'}}>{(a.d==='above'?pr>=a.t:pr<=a.t)?'🔔':'⏳'}</span></div>)}<div style={{marginTop:8,fontSize:10,color:'var(--text3)',textAlign:'center'}}>{lang==='tr'?'Simülasyondur.':'Simulation only.'}</div></div>}

/* ── TOOL 14: Zakat ── */
function ZakatCalc({lang}){const[metal,setMetal]=useState('silver');const[g,setG]=useState(612);const[p,setP]=useState(30);const nisab=metal==='gold'?85:595;const zakat=g>=nisab?(g*p*0.025):0;
const metalL={silver:{tr:'🥈 Gümüş',en:'🥈 Silver',ar:'🥈 فضة'},gold:{tr:'🥇 Altın',en:'🥇 Gold',ar:'🥇 ذهب'}};
return<div className="tm-tool">
<div style={{display:'flex',gap:4,marginBottom:14,padding:3,background:'var(--card)',borderRadius:10,border:'1px solid var(--border)'}}>
{['silver','gold'].map(m=><button key={m} onClick={()=>{setMetal(m);setG(m==='gold'?100:612);setP(m==='gold'?2800:30)}} style={{flex:1,padding:'8px',borderRadius:8,border:'none',cursor:'pointer',fontSize:13,fontWeight:600,background:metal===m?(m==='gold'?'rgba(212,175,55,0.15)':'rgba(192,192,192,0.12)'):'transparent',color:metal===m?(m==='gold'?'var(--gold)':'var(--silver)'):'var(--text3)'}}>{metalL[m][lang]}</button>)}
</div>
<label className="calc-label">{metal==='gold'?(lang==='tr'?'Altın (gram)':'Gold (g)'):(lang==='tr'?'Gümüş (gram)':'Silver (g)')}</label><input type="number" className="calc-input" value={g} onChange={e=>setG(+e.target.value)} min="0" inputMode="numeric"/><label className="calc-label" style={{marginTop:12}}>{lang==='tr'?'1g fiyat':'Price/g'}</label><input type="number" className="calc-input" value={p} onChange={e=>setP(+e.target.value)} min="0" step="0.01" inputMode="decimal"/><div className="calc-result" style={{marginTop:16}}>{g>=nisab?<><div className="calc-result-num" style={{color:metal==='gold'?'var(--gold)':'var(--silver)'}}>{zakat.toFixed(2)}</div><div className="calc-result-label">{lang==='tr'?'Zekât (%2.5)':'Zakat (2.5%)'}</div></>:<><div className="calc-result-num" style={{color:'var(--text2)',fontSize:'1.1rem'}}>{lang==='tr'?'Nisab altında':'Below nisab'}</div><div className="calc-result-label">Nisab: {nisab}g ({metal==='gold'?'Au':'Ag'})</div></>}</div></div>}

/* ── TOOL 15: Purity Test Guide ── */
function PurityTestGuide({lang}){const[e,setE]=useState(0);const ts=[{i:'🧲',n:{tr:'Mıknatıs',en:'Magnet',ar:'مغناطيس'},r:60,s:{tr:['Gümüş manyetik değildir'],en:['Silver is not magnetic'],ar:['الفضة ليست مغناطيسية']}},{i:'🧊',n:{tr:'Buz',en:'Ice',ar:'ثلج'},r:70,s:{tr:['Buz çok hızlı erir'],en:['Ice melts very fast'],ar:['يذوب الثلج بسرعة']}},{i:'⚗️',n:{tr:'Asit',en:'Acid',ar:'حمض'},r:90,s:{tr:['Kremsi beyaz=925'],en:['Creamy white=925'],ar:['أبيض كريمي=٩٢٥']}},{i:'🔬',n:{tr:'XRF',en:'XRF',ar:'XRF'},r:99,s:{tr:['En kesin yöntem'],en:['Most accurate'],ar:['الأكثر دقة']}}];const rc=(r)=>r>=90?'#27ae60':r>=70?'#f39c12':'#e74c3c';
return<div className="tm-tool" style={{gap:8}}>{ts.map((t,i)=><div key={i} style={{borderRadius:10,border:`1px solid ${e===i?'var(--gold)':'var(--border)'}44`,overflow:'hidden'}}><button onClick={()=>setE(e===i?-1:i)} style={{width:'100%',padding:'10px 12px',border:'none',cursor:'pointer',background:'transparent',display:'flex',alignItems:'center',gap:8,justifyContent:'space-between'}}><div style={{display:'flex',alignItems:'center',gap:8}}><span style={{fontSize:18}}>{t.i}</span><span style={{fontWeight:600,fontSize:13,color:'var(--text)'}}>{t.n[lang]}</span><span style={{fontSize:9,color:rc(t.r),fontWeight:600}}>{t.r}%</span></div><span style={{transform:e===i?'rotate(180deg)':'none',transition:'transform .3s',color:'var(--text3)',fontSize:10}}>▼</span></button>{e===i&&<div style={{padding:'0 12px 10px'}}>{t.s[lang].map((s,j)=><div key={j} style={{fontSize:12,color:'var(--text2)',marginBottom:3}}>• {s}</div>)}</div>}</div>)}</div>}

/* ── TOOL 16: Metal Comparator ── */
const MTS=[{id:'silver',s:'Ag',n:{tr:'Gümüş',en:'Silver',ar:'فضة'},c:'#C0C0C0',d:10.49,m:961,h:2.5,k:429},{id:'gold',s:'Au',n:{tr:'Altın',en:'Gold',ar:'ذهب'},c:'#FFD700',d:19.3,m:1064,h:2.75,k:317},{id:'platinum',s:'Pt',n:{tr:'Platin',en:'Platinum',ar:'بلاتين'},c:'#E5E4E2',d:21.45,m:1768,h:4,k:71.6},{id:'palladium',s:'Pd',n:{tr:'Paladyum',en:'Palladium',ar:'بالاديوم'},c:'#CED0CE',d:12.02,m:1555,h:4.75,k:71.8},{id:'titanium',s:'Ti',n:{tr:'Titanyum',en:'Titanium',ar:'تيتانيوم'},c:'#878681',d:4.51,m:1668,h:6,k:21.9},{id:'steel',s:'Fe',n:{tr:'Çelik',en:'Steel',ar:'فولاذ'},c:'#8B8D8E',d:7.93,m:1510,h:5.5,k:16.3}];
function MetalComparator({lang}){const[sel,setSel]=useState(['silver','gold']);const tg=(id)=>setSel(p=>p.includes(id)?p.length>2?p.filter(x=>x!==id):p:p.length<4?[...p,id]:p);const sm=MTS.filter(m=>sel.includes(m.id));const props=[{k:'d',l:{tr:'Yoğunluk',en:'Density',ar:'الكثافة'},mx:22},{k:'m',l:{tr:'Erime',en:'Melting',ar:'الانصهار'},mx:1800},{k:'h',l:{tr:'Sertlik',en:'Hardness',ar:'الصلابة'},mx:7},{k:'k',l:{tr:'İletkenlik',en:'Conductivity',ar:'التوصيل'},mx:430}];
return<div className="tm-tool" style={{gap:10}}><div style={{display:'flex',flexWrap:'wrap',gap:6}}>{MTS.map(m=><button key={m.id} onClick={()=>tg(m.id)} style={{padding:'6px 10px',borderRadius:14,border:`1.5px solid ${sel.includes(m.id)?m.c:'var(--border)'}`,background:sel.includes(m.id)?m.c+'18':'transparent',color:sel.includes(m.id)?m.c:'var(--text2)',fontSize:11,cursor:'pointer',fontWeight:600}}>{m.s} {m.n[lang]}</button>)}</div>{props.map(p=><div key={p.k} style={{marginBottom:6}}><div style={{fontSize:10,color:'var(--text3)',marginBottom:3}}>{p.l[lang]}</div>{sm.map(m=><div key={m.id} style={{display:'flex',alignItems:'center',gap:5,marginBottom:3}}><span style={{fontSize:10,color:m.c,fontWeight:600,minWidth:20,fontFamily:'var(--f-mono)'}}>{m.s}</span><div style={{flex:1,height:10,background:'var(--card)',borderRadius:5,overflow:'hidden',border:'1px solid var(--border)'}}><div style={{width:`${(m[p.k]/p.mx)*100}%`,height:'100%',background:m.c,borderRadius:5,transition:'width .4s'}}/></div><span style={{fontSize:10,fontFamily:'var(--f-mono)',minWidth:32,textAlign:'end'}}>{m[p.k]}</span></div>)}</div>)}</div>}

/* ── TOOL 17: Jewelry Combinator ── */
function JewelryCombinator({lang}){const[sel,setSel]=useState([]);const cats={tr:[{n:'Kolye',its:['İnce Zincir','Kalın Zincir','Choker','Taşlı']},{n:'Bileklik',its:['Bangle','Zincir','Kelepçe','Charm']},{n:'Yüzük',its:['Band','Statement','Taşlı','Ayarlanabilir']},{n:'Küpe',its:['Halka','Sallantılı','Stud','Ear Cuff']}],en:[{n:'Necklace',its:['Chain','Heavy','Choker','Pendant']},{n:'Bracelet',its:['Bangle','Chain','Cuff','Charm']},{n:'Ring',its:['Band','Statement','Gem','Adjustable']},{n:'Earring',its:['Hoop','Drop','Stud','Ear Cuff']}],ar:[{n:'قلادة',its:['سلسلة','سميكة','تشوكر','معلقة']},{n:'سوار',its:['بانجل','سلسلة','كاف','تعليقات']},{n:'خاتم',its:['رفيع','ستيتمنت','مرصع','قابل']},{n:'حلق',its:['حلقي','متدلي','ستاد','كاف']}]}[lang];const ic=['📿','💎','💍','✨'];const tg=(k)=>setSel(p=>p.includes(k)?p.filter(x=>x!==k):[...p,k]);
return<div className="tm-tool" style={{gap:8}}>{cats.map((c,ci)=><div key={ci}><div style={{fontSize:12,fontWeight:600,marginBottom:4}}>{ic[ci]} {c.n}</div><div style={{display:'flex',flexWrap:'wrap',gap:5,marginBottom:8}}>{c.its.map((it,ii)=>{const k=ci+':'+ii;const on=sel.includes(k);return<button key={ii} onClick={()=>tg(k)} style={{padding:'5px 10px',borderRadius:14,border:`1.5px solid ${on?'var(--gold)':'var(--border)'}`,background:on?'rgba(212,175,55,0.1)':'transparent',color:on?'var(--gold)':'var(--text2)',fontSize:11,cursor:'pointer'}}>{it}</button>})}</div></div>)}<div style={{padding:10,borderRadius:8,border:'1px solid var(--gold)',background:'rgba(212,175,55,0.04)',fontSize:12,textAlign:'center'}}>{lang==='tr'?'Seçilen':'Selected'}: {sel.length} {sel.length>4?'⚠️':''}</div></div>}

/* ── TOOL 18: Turkey Atlas ── */
const PROVS=[{n:'İstanbul',r:1,c:'uretim',d:{tr:'Kapalıçarşı',en:'Grand Bazaar',ar:'البازار'}},{n:'Konya',r:1,c:'uretim',d:{tr:'İstanbul Gümüş',en:'İstanbul Gümüş HQ',ar:'إسطنبول غوموش'}},{n:'Trabzon',r:1,c:'zanaat',d:{tr:'Hasır bilezik',en:'Wire bracelet',ar:'أساور السلك'}},{n:'Gümüşhane',r:1,c:'maden',d:{tr:'Gümüş ili',en:'Silver province',ar:'محافظة الفضة'}},{n:'Mardin',r:2,c:'zanaat',d:{tr:'Telkâri',en:'Filigree',ar:'التخريم'}},{n:'Gaziantep',r:2,c:'uretim',d:{tr:'Güneydoğu merkezi',en:'SE hub',ar:'مركز الجنوب'}}];
const CC={uretim:'#D4AF37',zanaat:'#C0C0C0',maden:'#27ae60'};
function TurkeyAtlas({lang}){return<div className="tm-tool" style={{gap:8}}>{PROVS.map((p,i)=><div key={i} style={{padding:10,borderRadius:10,border:'1px solid var(--border)',background:'var(--card)',display:'flex',gap:10,alignItems:'center'}}><div style={{width:5,height:36,borderRadius:3,background:CC[p.c]}}/><div style={{flex:1}}><div style={{display:'flex',justifyContent:'space-between'}}><span style={{fontWeight:600,fontSize:13}}>{p.n}</span><span style={{fontSize:10,color:CC[p.c]}}>{'★'.repeat(6-p.r)}</span></div><div style={{fontSize:11,color:'var(--text2)',marginTop:2}}>{p.d[lang]}</div></div></div>)}</div>}

/* ── TOOL 19: Price Tracker ── */
function PriceTracker({lang}){const[per,setPer]=useState('1m');const dp=useMemo(()=>{const n=per==='1w'?7:per==='1m'?30:90;return Array.from({length:n},(_,i)=>({d:i,p:30+Math.sin(i/5)*3+Math.random()*2}));},[per]);const mx=Math.max(...dp.map(d=>d.p)),mn=Math.min(...dp.map(d=>d.p)),last=dp[dp.length-1].p,ch=((last-dp[0].p)/dp[0].p*100).toFixed(2);
return<div className="tm-tool" style={{gap:10}}><div style={{textAlign:'center'}}><div style={{fontSize:26,fontWeight:700,fontFamily:'var(--f-mono)',color:'var(--silver)'}}>${last.toFixed(2)}</div><div style={{fontSize:12,color:ch>=0?'#27ae60':'#e74c3c'}}>{ch>=0?'↑':'↓'} {ch}%</div></div><div style={{display:'flex',gap:6,justifyContent:'center'}}>{['1w','1m','3m'].map(p=><button key={p} onClick={()=>setPer(p)} style={{padding:'5px 14px',borderRadius:8,border:`1.5px solid ${per===p?'var(--silver)':'var(--border)'}`,background:per===p?'rgba(192,192,192,0.08)':'transparent',color:per===p?'var(--silver)':'var(--text2)',cursor:'pointer',fontSize:11,fontWeight:600}}>{p}</button>)}</div><svg viewBox={`0 0 ${dp.length} 100`} style={{width:'100%',height:100}}><polyline fill="none" stroke="var(--silver)" strokeWidth="1.5" points={dp.map((d,i)=>`${i},${100-((d.p-mn)/(mx-mn))*80-10}`).join(' ')}/></svg><div style={{fontSize:10,color:'var(--text3)',textAlign:'center'}}>{lang==='tr'?'Simüle veri':'Simulated data'}</div></div>}

/* ── TOOL 20: Engraving Preview ── */
function EngravingPreview({lang}){const[txt,setTxt]=useState('');const[f,setF]=useState('serif');const fonts={serif:"'Playfair Display',serif",sans:"'Source Sans 3',sans-serif",mono:"'JetBrains Mono',monospace"};
return<div className="tm-tool" style={{gap:10}}><label className="calc-label">{lang==='tr'?'Metin':'Text'}</label><input type="text" className="calc-input" value={txt} onChange={e=>setTxt(e.target.value.slice(0,30))} placeholder={lang==='tr'?'İsim veya mesaj...':'Name or message...'} maxLength={30}/><div style={{fontSize:10,color:'var(--text3)',textAlign:'end'}}>{txt.length}/30</div><div style={{display:'flex',gap:6}}>{Object.keys(fonts).map(k=><button key={k} onClick={()=>setF(k)} style={{flex:1,padding:'8px 4px',borderRadius:8,border:`1.5px solid ${f===k?'var(--silver)':'var(--border)'}`,background:f===k?'rgba(192,192,192,0.08)':'transparent',color:f===k?'var(--silver)':'var(--text2)',cursor:'pointer',fontSize:11}}>{k}</button>)}</div><div style={{padding:24,borderRadius:16,background:'linear-gradient(145deg,#d4d4d8,#b8b8bc)',textAlign:'center',minHeight:72,display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'inset 0 2px 8px rgba(0,0,0,0.15)'}}><div style={{fontFamily:fonts[f],fontSize:Math.max(14,22-txt.length*0.3),color:'#333',letterSpacing:1,textShadow:'0 1px 2px rgba(0,0,0,0.2)'}}>{txt||'Ag 925'}</div></div></div>}

/* ── TOOL 21: Insurance Calc ── */
function InsuranceCalc({lang}){const[w,setW]=useState(25);const[p,setP]=useState(925);const[c,setC]=useState('skilled');const craftM={basic:1.5,skilled:2.5,artisan:4,masterpiece:7};const mv=w*(p/1000)*0.95;const cv=mv*(craftM[c]-1);const total=mv+cv;
return<div className="tm-tool"><label className="calc-label">{lang==='tr'?'Ağırlık (g)':'Weight (g)'}</label><input type="number" className="calc-input" value={w} onChange={e=>setW(+e.target.value)} min="1"/><label className="calc-label" style={{marginTop:8}}>{lang==='tr'?'Ayar':'Purity'}</label><select className="calc-select" value={p} onChange={e=>setP(+e.target.value)}>{[999,950,925,900,800].map(v=><option key={v} value={v}>{v}</option>)}</select><label className="calc-label" style={{marginTop:8}}>{lang==='tr'?'İşçilik':'Craft'}</label><div style={{display:'flex',gap:6}}>{[{id:'basic',l:'Basic'},{id:'skilled',l:'Skilled'},{id:'artisan',l:'Artisan'},{id:'masterpiece',l:'Master'}].map(x=><button key={x.id} onClick={()=>setC(x.id)} style={{flex:1,padding:'8px 2px',borderRadius:8,border:`1.5px solid ${c===x.id?'var(--gold)':'var(--border)'}`,background:c===x.id?'rgba(212,175,55,0.08)':'transparent',color:c===x.id?'var(--gold)':'var(--text2)',cursor:'pointer',fontSize:10}}>{x.l}</button>)}</div><div className="calc-result" style={{marginTop:16}}><div className="calc-result-num">${total.toFixed(2)}</div><div className="calc-result-label">{lang==='tr'?'Tahmini Sigorta Değeri':'Estimated Insurance Value'}</div></div></div>}

/* ── TOOL 22: Advanced Quiz ── */
const Q2=[{q:{tr:"Atom numarası?",en:"Atomic number?",ar:"العدد الذري؟"},o:["47","29","79","78"],a:0},{q:{tr:"925 bakır oranı?",en:"Copper in 925?",ar:"النحاس في ٩٢٥؟"},o:["7.5%","5%","10%","2.5%"],a:0},{q:{tr:"Troy ons?",en:"Troy ounce?",ar:"أونصة تروي؟"},o:["31.1g","28.3g","30g","32.5g"],a:0},{q:{tr:"COMEX nerede?",en:"COMEX location?",ar:"أين COMEX؟"},o:["New York","London","Shanghai","Tokyo"],a:0},{q:{tr:"Gümüş gök cismi?",en:"Silver celestial body?",ar:"الجرم السماوي؟"},o:[{tr:"Ay",en:"Moon",ar:"القمر"},{tr:"Güneş",en:"Sun",ar:"الشمس"},{tr:"Venüs",en:"Venus",ar:"الزهرة"},{tr:"Mars",en:"Mars",ar:"المريخ"}],a:0},{q:{tr:"Hunt krizi?",en:"Hunt crisis?",ar:"أزمة هانت؟"},o:["1980","1970","1990","1985"],a:0},{q:{tr:"Argentium elementi?",en:"Argentium element?",ar:"عنصر أرجنتيوم؟"},o:[{tr:"Germanyum",en:"Germanium",ar:"جرمانيوم"},{tr:"Çinko",en:"Zinc",ar:"زنك"},{tr:"Nikel",en:"Nickel",ar:"نيكل"},{tr:"Kalay",en:"Tin",ar:"قصدير"}],a:0},{q:{tr:"Osmanlı parası?",en:"Ottoman coin?",ar:"العملة العثمانية؟"},o:[{tr:"Akçe",en:"Akçe",ar:"آقچه"},{tr:"Kuruş",en:"Kuruş",ar:"قرش"},{tr:"Altın",en:"Gold",ar:"ذهب"},{tr:"Dirhem",en:"Dirham",ar:"درهم"}],a:0},{q:{tr:"Nisab?",en:"Nisab?",ar:"النصاب؟"},o:["595g","500g","612g","1000g"],a:0},{q:{tr:"En büyük üretici?",en:"Largest producer?",ar:"أكبر منتج؟"},o:[{tr:"Meksika",en:"Mexico",ar:"المكسيك"},{tr:"Peru",en:"Peru",ar:"بيرو"},{tr:"Çin",en:"China",ar:"الصين"},{tr:"Rusya",en:"Russia",ar:"روسيا"}],a:0}];
function AdvancedQuiz({lang}){const[st,setSt]=useState('s');const[qi,setQi]=useState(0);const[sc,setSc]=useState(0);const[ans,setAns]=useState(null);const[tl,setTl]=useState(15);
useEffect(()=>{if(st!=='q'||ans!==null)return;const id=setInterval(()=>setTl(t=>{if(t<=1){setAns(-1);return 0}return t-1}),1000);return()=>clearInterval(id)},[st,qi,ans]);
const q=Q2[qi];const getO=(o)=>typeof o==='string'?o:o[lang];const answer=(i)=>{if(ans!==null)return;setAns(i);if(i===q.a)setSc(s=>s+1)};const next=()=>{if(qi<Q2.length-1){setQi(qi+1);setAns(null);setTl(15)}else setSt('r')};const restart=()=>{setSt('s');setQi(0);setSc(0);setAns(null);setTl(15)};
if(st==='s')return<div style={{textAlign:'center',padding:24}}><div style={{fontSize:48,marginBottom:12}}>🏆</div><p style={{fontSize:13,color:'var(--text2)',marginBottom:16}}>10 {lang==='tr'?'soru · Zamanlı':'questions · Timed'}</p><button className="btn btn-primary" onClick={()=>setSt('q')}>{lang==='tr'?'Başla':'Start'}</button></div>;
if(st==='r')return<div style={{textAlign:'center',padding:24}}><div style={{fontSize:48,fontWeight:700,fontFamily:'var(--f-mono)',color:'var(--gold)'}}>{sc}/{Q2.length}</div><div style={{fontSize:14,color:'var(--text2)',margin:'8px 0 16px'}}>{sc>=8?'🏆':sc>=5?'⭐':'📚'}</div><button className="btn btn-primary" onClick={restart}>{lang==='tr'?'Tekrar':'Retry'}</button></div>;
return<div className="tm-tool"><div style={{display:'flex',justifyContent:'space-between',marginBottom:6,fontSize:12,color:'var(--text2)'}}><span>{qi+1}/{Q2.length}</span><span style={{color:tl<=5?'#e74c3c':'var(--gold)'}}>{tl}s</span></div><div style={{height:3,borderRadius:2,background:'var(--border)',marginBottom:14}}><div style={{width:`${(tl/15)*100}%`,height:'100%',background:tl<=5?'#e74c3c':'var(--gold)',borderRadius:2,transition:'width 1s linear'}}/></div><h3 style={{fontSize:'1rem',fontWeight:600,marginBottom:12,lineHeight:1.5}}>{q.q[lang]}</h3><div style={{display:'flex',flexDirection:'column',gap:8}}>{q.o.map((opt,idx)=>{let bdr='var(--border)',bg='transparent',clr='var(--text)';if(ans!==null){if(idx===q.a){bg='rgba(39,174,96,0.1)';bdr='#27ae60';clr='#27ae60'}else if(idx===ans){bg='rgba(231,76,60,0.1)';bdr='#e74c3c';clr='#e74c3c'}}return<button key={idx} onClick={()=>answer(idx)} style={{padding:'11px 14px',borderRadius:10,border:`1.5px solid ${bdr}`,background:bg,color:clr,fontSize:14,cursor:ans!==null?'default':'pointer',textAlign:'start',transition:'all .2s'}}>{getO(opt)}</button>})}</div>{ans!==null&&<button className="btn btn-primary" style={{marginTop:14,width:'100%'}} onClick={next}>→</button>}</div>}

/* ── TOOL 23: Tarnish Simulator ── */
const TC=["#E8E8EC","#D5D2D4","#B8B0B2","#988A8E","#786872","#5A4A56","#3E2E3A","#221420"];
function TarnishSimulator({lang}){const[lv,setLv]=useState(0);const[env,setEnv]=useState('normal');const es={normal:1,humid:2,sulfur:4,coastal:2.5,sealed:0.2};const wk=Math.round(lv*12*(1/es[env]));const ci=Math.min(Math.floor(lv/100*TC.length),TC.length-1);const envL={normal:{tr:'Normal',en:'Normal'},humid:{tr:'Nemli',en:'Humid'},sulfur:{tr:'Kükürlü',en:'Sulfur'},coastal:{tr:'Sahil',en:'Coastal'},sealed:{tr:'Kapalı',en:'Sealed'}};
return<div className="tm-tool" style={{gap:10}}><div style={{width:'100%',height:80,borderRadius:14,background:`linear-gradient(145deg,${TC[ci]},${TC[Math.max(0,ci-1)]})`,boxShadow:'inset 0 2px 10px rgba(0,0,0,0.2)',transition:'background .5s',display:'flex',alignItems:'center',justifyContent:'center'}}><span style={{fontSize:36}}>💍</span></div><div style={{display:'flex',justifyContent:'space-between',fontSize:10,color:'var(--text3)'}}><span>{lang==='tr'?'Parlak':'Polished'}</span><span>~{wk} {lang==='tr'?'hafta':'weeks'}</span><span>{lang==='tr'?'Kararmış':'Tarnished'}</span></div><input type="range" min={0} max={100} value={lv} onChange={e=>setLv(+e.target.value)} style={{width:'100%',accentColor:TC[ci]}}/><div style={{display:'flex',flexWrap:'wrap',gap:5}}>{Object.entries(envL).map(([k,v])=><button key={k} onClick={()=>setEnv(k)} style={{padding:'5px 10px',borderRadius:8,border:`1.5px solid ${env===k?'var(--silver)':'var(--border)'}`,background:env===k?'rgba(192,192,192,0.08)':'transparent',color:env===k?'var(--silver)':'var(--text2)',cursor:'pointer',fontSize:11}}>{v[lang]}</button>)}</div></div>}

/* ── TOOL 24: World Clock ── */
const EXS=[{n:"COMEX",c:{tr:"New York",en:"New York",ar:"نيويورك"},tz:"America/New_York",o:8,cl:13,f:"🇺🇸",co:"#3b82f6"},{n:"LBMA",c:{tr:"Londra",en:"London",ar:"لندن"},tz:"Europe/London",o:10,cl:15,f:"🇬🇧",co:"#8b5cf6"},{n:"SHFE",c:{tr:"Şanghay",en:"Shanghai",ar:"شانغهاي"},tz:"Asia/Shanghai",o:9,cl:15,f:"🇨🇳",co:"#ef4444"},{n:"Borsa İst",c:{tr:"İstanbul",en:"Istanbul",ar:"إسطنبول"},tz:"Europe/Istanbul",o:10,cl:18,f:"🇹🇷",co:"#D4AF37"}];
function WorldClock({lang}){const[now,setNow]=useState(new Date());useEffect(()=>{const id=setInterval(()=>setNow(new Date()),1000);return()=>clearInterval(id)},[]);const gt=(tz)=>{try{return new Intl.DateTimeFormat('en-GB',{timeZone:tz,hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(now)}catch{return'--:--'}};const gs=(ex)=>{try{const t=new Date(now.toLocaleString('en-US',{timeZone:ex.tz}));const h=t.getHours(),d=t.getDay();if(d===0||d===6)return'closed';return h>=ex.o&&h<ex.cl?'open':'closed'}catch{return'closed'}};
return<div className="tm-tool" style={{gap:8}}>{EXS.map(ex=>{const st=gs(ex);return<div key={ex.n} style={{padding:10,borderRadius:12,border:`1px solid ${st==='open'?ex.co+'44':'var(--border)'}`,background:st==='open'?ex.co+'08':'transparent',display:'flex',alignItems:'center',gap:8}}><span style={{fontSize:20}}>{ex.f}</span><div style={{flex:1}}><div style={{fontWeight:600,fontSize:13}}>{ex.n}</div><div style={{fontSize:10,color:'var(--text3)'}}>{ex.c[lang]}</div></div><div style={{textAlign:'end'}}><div style={{fontFamily:'var(--f-mono)',fontWeight:600,fontSize:14}}>{gt(ex.tz)}</div><div style={{fontSize:10,fontWeight:700,color:st==='open'?'#27ae60':'#e74c3c'}}>{st==='open'?(lang==='tr'?'AÇIK':'OPEN'):(lang==='tr'?'KAPALI':'CLOSED')}</div></div></div>})}</div>}

/* ── TOOL 25: Portfolio Tracker ── */
function PortfolioTracker({lang}){const[its,setIts]=useState([]);const[sp,setSp]=useState(31.5);const[nm,setNm]=useState('');const[wt,setWt]=useState('');const[pu,setPu]=useState(925);const prG=sp/31.1035;const add=()=>{if(!nm||!wt)return;setIts([...its,{id:Date.now(),nm,wt:+wt,pu}]);setNm('');setWt('')};const tv=its.reduce((s,i)=>s+(i.wt*(i.pu/1000)*prG),0);
return<div className="tm-tool" style={{gap:8}}><label className="calc-label">{lang==='tr'?'Gümüş $/oz':'Silver $/oz'}</label><input type="number" className="calc-input" value={sp} onChange={e=>setSp(+e.target.value)} min="1" step="0.5"/><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,marginTop:6}}><input className="calc-input" placeholder={lang==='tr'?'Ad':'Name'} value={nm} onChange={e=>setNm(e.target.value)} style={{fontSize:13}}/><input className="calc-input" placeholder={lang==='tr'?'Gram':'Grams'} type="number" value={wt} onChange={e=>setWt(e.target.value)} style={{fontSize:13}}/></div><select className="calc-select" value={pu} onChange={e=>setPu(+e.target.value)} style={{fontSize:13}}>{[999,950,925,900,800].map(p=><option key={p} value={p}>{p}</option>)}</select><button className="btn btn-primary" style={{width:'100%'}} onClick={add}>{lang==='tr'?'Ekle':'Add'}</button>{its.map(i=><div key={i.id} style={{display:'flex',justifyContent:'space-between',padding:'6px 10px',borderRadius:8,border:'1px solid var(--border)'}}><div><div style={{fontWeight:600,fontSize:12}}>{i.nm}</div><div style={{fontSize:10,color:'var(--text3)'}}>{i.wt}g · {i.pu}</div></div><div style={{display:'flex',alignItems:'center',gap:6}}><span style={{fontFamily:'var(--f-mono)',fontSize:12,color:'var(--silver)'}}>${(i.wt*(i.pu/1000)*prG).toFixed(2)}</span><button onClick={()=>setIts(its.filter(x=>x.id!==i.id))} style={{cursor:'pointer',color:'#e74c3c',fontSize:12}}>✕</button></div></div>)}<div className="calc-result"><div className="calc-result-num">${tv.toFixed(2)}</div><div className="calc-result-label">{lang==='tr'?'Toplam':'Total'} ({its.reduce((s,i)=>s+i.wt,0)}g)</div></div></div>}

/* ── TOOL 26: Certificate Verifier ── */
function CertificateVerifier({lang}){const[tp,setTp]=useState(null);const[ch,setCh]=useState({});const types=[{id:'hallmark',i:'🏷️',n:{tr:'Damga',en:'Hallmark',ar:'ختم'}},{id:'assay',i:'⚗️',n:{tr:'Analiz',en:'Assay',ar:'فحص'}},{id:'origin',i:'📜',n:{tr:'Menşe',en:'Origin',ar:'المنشأ'}},{id:'appraisal',i:'💎',n:{tr:'Değerleme',en:'Appraisal',ar:'التقييم'}}];
const checks={hallmark:[{id:'mk',t:{tr:'Üretici damgası?',en:'Maker mark?',ar:'علامة الصانع؟'},cr:true},{id:'pu',t:{tr:'Ayar okunur?',en:'Purity readable?',ar:'العيار مقروء؟'},cr:true},{id:'of',t:{tr:'Denetim ofisi?',en:'Assay office?',ar:'مكتب الفحص؟'},cr:true},{id:'dt',t:{tr:'Tarih?',en:'Date?',ar:'التاريخ؟'},cr:false}],assay:[{id:'lb',t:{tr:'Akredite lab?',en:'Accredited lab?',ar:'مختبر معتمد؟'},cr:true},{id:'nm',t:{tr:'Sertifika no?',en:'Certificate #?',ar:'رقم الشهادة؟'},cr:true},{id:'sg',t:{tr:'İmza?',en:'Signature?',ar:'التوقيع؟'},cr:true}],origin:[{id:'pr',t:{tr:'Üretici?',en:'Producer?',ar:'المنتج؟'},cr:true},{id:'lc',t:{tr:'Yer?',en:'Location?',ar:'المكان؟'},cr:true},{id:'bt',t:{tr:'Parti no?',en:'Batch #?',ar:'رقم الدفعة؟'},cr:false}],appraisal:[{id:'ap',t:{tr:'Uzman?',en:'Appraiser?',ar:'المقيّم؟'},cr:true},{id:'vl',t:{tr:'Değer?',en:'Value?',ar:'القيمة؟'},cr:true},{id:'ph',t:{tr:'Fotoğraf?',en:'Photos?',ar:'صور؟'},cr:false}]};
const toggle=(id)=>setCh(p=>({...p,[id]:!p[id]}));const reset=()=>{setTp(null);setCh({})};
if(!tp)return<div className="tm-tool" style={{gap:8}}><div style={{fontSize:12,color:'var(--text2)',marginBottom:4}}>{lang==='tr'?'Sertifika Türü':'Certificate Type'}</div>{types.map(t=><button key={t.id} onClick={()=>setTp(t.id)} style={{display:'flex',alignItems:'center',gap:10,width:'100%',padding:12,borderRadius:10,border:'1px solid var(--border)',background:'var(--card)',cursor:'pointer'}}><span style={{fontSize:22}}>{t.i}</span><span style={{fontWeight:600,fontSize:14,color:'var(--text)'}}>{t.n[lang]}</span></button>)}</div>;
const items=checks[tp]||[];const crOk=items.filter(i=>i.cr).every(i=>ch[i.id]);const allOk=items.every(i=>ch[i.id]);const st=allOk?'pass':crOk?'partial':'fail';const sc={pass:'#27ae60',partial:'#f39c12',fail:'#e74c3c'};const sl={pass:{tr:'Geçerli',en:'Valid',ar:'صالح'},partial:{tr:'Kısmen',en:'Partial',ar:'جزئي'},fail:{tr:'Dikkat!',en:'Attention!',ar:'انتباه!'}};
return<div className="tm-tool" style={{gap:8}}>{items.map(item=><label key={item.id} style={{display:'flex',alignItems:'center',gap:8,padding:'10px 12px',borderRadius:8,border:`1px solid ${ch[item.id]?'#27ae6044':'var(--border)'}`,background:ch[item.id]?'rgba(39,174,96,0.05)':'transparent',cursor:'pointer'}}><input type="checkbox" checked={!!ch[item.id]} onChange={()=>toggle(item.id)} style={{accentColor:'#27ae60',width:18,height:18}}/><span style={{flex:1,fontSize:13}}>{item.t[lang]}</span>{item.cr&&<span style={{fontSize:9,padding:'2px 5px',borderRadius:4,background:'rgba(231,76,60,0.1)',color:'#e74c3c',fontWeight:700}}>!</span>}</label>)}<div style={{padding:14,borderRadius:10,background:sc[st]+'10',border:`1px solid ${sc[st]}44`,textAlign:'center'}}><div style={{fontSize:18,fontWeight:700,color:sc[st]}}>{sl[st][lang]}</div></div><button onClick={reset} style={{fontSize:11,color:'var(--text3)',cursor:'pointer',textAlign:'center',padding:6}}>← {lang==='tr'?'Geri':'Back'}</button></div>}

/* ── TOOL 27: Bracelet Sizer (Premium) ── */
function BraceletSizer({lang}){
  const [phase,setPhase]=useState('start');
  const [wristMm,setWristMm]=useState(165);
  const [fit,setFit]=useState('comfort');
  const FITS={snug:5,comfort:12,loose:20};
  const braceletMm=wristMm+FITS[fit];
  const braceletCm=(braceletMm/10).toFixed(1);
  const braceletIn=(braceletMm/25.4).toFixed(1);
  const weight=(braceletMm*0.08).toFixed(1);
  const lpB=useSilverPrice();
  const priceTL=Math.round(weight*(lpB.silverPerGTL||40));
  const TX={
    tr:{welcome:'Bilezik Ölçünüzü Bulalım',desc:'Bileğinizi ölçerek ideal bilezik boyutunu bulun.',start:'Başla',
      measure:'Bilek çevresini ip ile ölçün ve mm girin.',wrist:'Bilek Çevresi (mm)',
      fitLabel:'Oturuş Tercihi',snug:'Sıkı',comfort:'Rahat',loose:'Bol',
      result:'Bilezik Ölçünüz',est:'925 Ayar Gümüş Bilezik Tahmini',order:'İstanbul Gümüş\'ten Sipariş →',
      share:'Paylaş',restart:'Tekrar',tip:'İpi bileğinizin en geniş yerine (bilek kemiği) sarın.'},
    en:{welcome:'Find Your Bracelet Size',desc:'Measure your wrist to find the ideal bracelet length.',start:'Start',
      measure:'Measure your wrist circumference with string and enter in mm.',wrist:'Wrist Circumference (mm)',
      fitLabel:'Fit Preference',snug:'Snug',comfort:'Comfort',loose:'Loose',
      result:'Your Bracelet Size',est:'925 Sterling Silver Bracelet Estimate',order:'Order from İstanbul Gümüş →',
      share:'Share',restart:'Again',tip:'Wrap string around widest part of wrist (wrist bone).'},
    ar:{welcome:'اعثر على مقاس سوارك',desc:'قِس معصمك لإيجاد الطول المثالي.',start:'ابدأ',
      measure:'قِس محيط معصمك بخيط وأدخله بالمليمتر.',wrist:'محيط المعصم (مم)',
      fitLabel:'تفضيل الملاءمة',snug:'ضيق',comfort:'مريح',loose:'فضفاض',
      result:'مقاس سوارك',est:'تقدير سوار فضة ٩٢٥',order:'اطلب من إسطنبول غوموش ←',
      share:'شارك',restart:'أعد',tip:'لف الخيط حول أعرض جزء من المعصم.'}
  }[lang]||{};

  if(phase==='start')return(<div className="tm-tool" style={{textAlign:'center',padding:'16px 0'}}>
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{margin:'0 auto 12px',display:'block'}}>
      <defs><linearGradient id="brg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C0C0C0"/><stop offset="100%" stopColor="#D4AF37"/></linearGradient></defs>
      <ellipse cx="28" cy="28" rx="22" ry="18" fill="none" stroke="url(#brg)" strokeWidth="3"/>
      <ellipse cx="28" cy="28" rx="16" ry="12" fill="none" stroke="url(#brg)" strokeWidth="1" opacity=".3" strokeDasharray="3 3"/>
    </svg>
    <div style={{fontSize:'1.1rem',fontWeight:700,marginBottom:6,fontFamily:'var(--f-head)'}}>{TX.welcome}</div>
    <div style={{fontSize:'.88rem',color:'var(--text2)',marginBottom:18,lineHeight:1.5}}>{TX.desc}</div>
    <button onClick={()=>setPhase('measure')} style={{width:'100%',padding:'14px',borderRadius:14,background:'linear-gradient(135deg,var(--silver),#a0a8b0)',color:'var(--bg)',fontWeight:700,border:'none'}}>{TX.start}</button>
  </div>);

  if(phase==='measure')return(<div className="tm-tool">
    <div style={{padding:'12px 14px',borderRadius:12,background:'var(--card)',border:'1px solid var(--border)',marginBottom:14}}>
      <svg width="240" height="100" viewBox="0 0 240 100" fill="none" style={{display:'block',margin:'0 auto'}}>
        <defs><linearGradient id="brl" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#C0C0C0"/><stop offset="100%" stopColor="#D4AF37"/></linearGradient>
        <radialGradient id="brgl"><stop offset="0%" stopColor="var(--gold)" stopOpacity=".08"/><stop offset="100%" stopColor="transparent"/></radialGradient></defs>
        <circle cx="120" cy="50" r="45" fill="url(#brgl)"/>
        <ellipse cx="120" cy="50" rx="55" ry="35" fill="none" stroke="var(--text3)" strokeWidth="8" opacity=".08" strokeLinecap="round"/>
        <ellipse cx="120" cy="50" rx="55" ry="35" fill="none" stroke="url(#brl)" strokeWidth="2.5" className="ring-draw-line" strokeLinecap="round"/>
        <rect x="85" y="36" width="70" height="22" rx="11" fill="var(--bg)" stroke="url(#brl)" strokeWidth="1.2"/>
        <text x="120" y="51" textAnchor="middle" fill="var(--silver)" fontSize="12" fontWeight="700" fontFamily="var(--f-mono)">{wristMm}mm</text>
      </svg>
      <div style={{fontSize:'.85rem',color:'var(--text2)',textAlign:'center',lineHeight:1.5}}>{TX.measure}</div>
    </div>
    <div style={{marginBottom:14}}>
      <div style={{display:'flex',justifyContent:'space-between',marginBottom:4}}>
        <label style={{fontSize:'.85rem',color:'var(--text2)'}}>{TX.wrist}</label>
        <span style={{fontFamily:'var(--f-mono)',fontWeight:700,color:'var(--silver)'}}>{wristMm}mm</span>
      </div>
      <input type="range" min="130" max="220" step="1" value={wristMm} onChange={e=>setWristMm(+e.target.value)} style={{width:'100%',accentColor:'var(--silver)'}}/>
      <div style={{display:'flex',justifyContent:'space-between',fontSize:'.65rem',color:'var(--text3)',fontFamily:'var(--f-mono)'}}><span>130</span><span>175</span><span>220</span></div>
    </div>
    <div style={{marginBottom:14}}>
      <div style={{fontSize:'.85rem',color:'var(--text2)',marginBottom:8}}>{TX.fitLabel}</div>
      <div style={{display:'flex',gap:6}}>
        {['snug','comfort','loose'].map(f=>(<button key={f} onClick={()=>setFit(f)} style={{flex:1,padding:'10px 6px',borderRadius:10,fontSize:'.8rem',fontWeight:600,border:`1.5px solid ${fit===f?'var(--silver)':'var(--border)'}`,background:fit===f?'rgba(192,192,192,0.1)':'transparent',color:fit===f?'var(--silver)':'var(--text3)',transition:'all .2s'}}>{TX[f]} (+{FITS[f]}mm)</button>))}
      </div>
    </div>
    <div style={{padding:'8px 12px',borderRadius:10,background:'rgba(212,175,55,0.05)',border:'1px solid rgba(212,175,55,0.1)',fontSize:'.78rem',color:'var(--text2)',marginBottom:14,display:'flex',gap:6}}>💡 {TX.tip}</div>
    <button onClick={()=>setPhase('result')} style={{width:'100%',padding:'14px',borderRadius:14,background:'linear-gradient(135deg,var(--silver),#a0a8b0)',color:'var(--bg)',fontWeight:700,border:'none'}}>{TX.result}</button>
  </div>);

  return(<div className="tm-tool" style={{textAlign:'center'}}>
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{margin:'0 auto 8px',display:'block'}}><defs><linearGradient id="brr" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C0C0C0"/><stop offset="100%" stopColor="#D4AF37"/></linearGradient></defs><ellipse cx="24" cy="24" rx="18" ry="14" fill="none" stroke="url(#brr)" strokeWidth="2.5"/></svg>
    <div style={{fontSize:'.72rem',color:'var(--text3)',fontWeight:600,letterSpacing:'.5px',marginBottom:4}}>{TX.result}</div>
    <div style={{fontSize:'2.2rem',fontWeight:800,fontFamily:'var(--f-mono)',color:'var(--silver)',lineHeight:1}}>{braceletCm} cm</div>
    <div style={{fontSize:'.85rem',color:'var(--text2)',marginBottom:14}}>{braceletIn}" · {braceletMm}mm</div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8,marginBottom:14,textAlign:'center'}}>
      {[{v:braceletCm+'cm',l:'Metric'},{v:braceletIn+'"',l:'Imperial'},{v:braceletMm+'mm',l:'mm'}].map((x,i)=>(<div key={i} style={{padding:'10px 4px',borderRadius:10,background:'var(--card)',border:'1px solid var(--border)'}}><div style={{fontFamily:'var(--f-mono)',fontSize:'1rem',fontWeight:700,color:i===0?'var(--silver)':'var(--text)'}}>{x.v}</div><div style={{fontSize:'.6rem',color:'var(--text3)',marginTop:1}}>{x.l}</div></div>))}
    </div>
    <a href="https://www.instagram.com/istanbulgumustr/" target="_blank" rel="noopener" style={{display:'block',padding:'12px',borderRadius:12,background:'rgba(212,175,55,0.06)',border:'1.5px solid rgba(212,175,55,0.2)',color:'var(--gold)',fontWeight:600,fontSize:'.88rem',marginBottom:10,textDecoration:'none'}}>{TX.order}</a>
    <div style={{display:'flex',gap:8}}><button onClick={()=>{setPhase('start')}} style={{flex:1,padding:'10px',borderRadius:10,border:'1px solid var(--border)',fontSize:'.82rem',color:'var(--text2)'}}>{TX.restart}</button><button onClick={()=>{const t=`${TX.result}: ${braceletCm}cm / ${braceletIn}" — JewelPedi`;if(navigator.share)navigator.share({title:'JewelPedi',text:t}).catch(()=>{});else navigator.clipboard?.writeText(t)}} style={{flex:1,padding:'10px',borderRadius:10,background:'linear-gradient(135deg,var(--silver),#a0a8b0)',color:'var(--bg)',fontWeight:600,fontSize:'.82rem',border:'none'}}>{TX.share}</button></div>
  </div>);
}

/* ── TOOL 28: Necklace Length Guide (Interactive SVG Silhouette) ── */
function NecklaceGuide({lang}){
  const [len,setLen]=useState(45);
  const LENGTHS=[{cm:35,name:{tr:'Choker',en:'Choker',ar:'تشوكر'}},{cm:40,name:{tr:'Princess',en:'Princess',ar:'أميرة'}},{cm:45,name:{tr:'Matinée',en:'Matinée',ar:'ماتينيه'}},{cm:50,name:{tr:'Opera kısa',en:'Short Opera',ar:'أوبرا قصير'}},{cm:60,name:{tr:'Opera',en:'Opera',ar:'أوبرا'}},{cm:75,name:{tr:'Rope',en:'Rope',ar:'حبل'}}];
  const closest=LENGTHS.reduce((a,b)=>Math.abs(b.cm-len)<Math.abs(a.cm-len)?b:a);
  const weight=(len*0.12).toFixed(1);
  const lpN=useSilverPrice();
  const priceTL=Math.round(weight*(lpN.silverPerGTL||40));
  const TX={tr:{title:'Kolye Uzunluk Rehberi',desc:'Farklı uzunlukların vücutta nasıl göründüğünü keşfedin.',len:'Uzunluk',style:'Stil',est:'925 Ayar Gümüş Zincir Tahmini',order:'İstanbul Gümüş\'ten Sipariş →',tip:'En popüler uzunluk 45cm — köprücük kemiği hizası.'},
    en:{title:'Necklace Length Guide',desc:'Discover how different lengths look on the body.',len:'Length',style:'Style',est:'925 Sterling Silver Chain Estimate',order:'Order from İstanbul Gümüş →',tip:'Most popular length is 45cm — sits at the collarbone.'},
    ar:{title:'دليل أطوال القلادة',desc:'اكتشف كيف تبدو الأطوال المختلفة.',len:'الطول',style:'النمط',est:'تقدير سلسلة فضة ٩٢٥',order:'اطلب من إسطنبول غوموش ←',tip:'الطول الأكثر شيوعاً ٤٥سم — عند عظمة الترقوة.'}
  }[lang]||{};

  // Map cm to Y position on silhouette (neck starts ~y=68, chest ends ~y=220)
  const neckY=68;const mapY=(cm)=>neckY+(cm-30)*2.8;
  const curY=Math.min(mapY(len),220);

  return(<div className="tm-tool">
    <div style={{textAlign:'center',marginBottom:10}}>
      <div style={{fontSize:'1.05rem',fontWeight:700,marginBottom:4,fontFamily:'var(--f-head)'}}>{TX.title}</div>
      <div style={{fontSize:'.85rem',color:'var(--text2)',lineHeight:1.5}}>{TX.desc}</div>
    </div>
    {/* SVG Silhouette with necklaces */}
    <div style={{display:'flex',justifyContent:'center',padding:'8px 0'}}>
      <svg width="200" height="260" viewBox="0 0 200 260" fill="none" style={{display:'block'}}>
        <defs>
          <linearGradient id="ncg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C0C0C0"/><stop offset="100%" stopColor="#D4AF37"/></linearGradient>
          <radialGradient id="ncgl"><stop offset="0%" stopColor="var(--gold)" stopOpacity=".06"/><stop offset="100%" stopColor="transparent"/></radialGradient>
        </defs>
        <ellipse cx="100" cy="150" rx="80" ry="110" fill="url(#ncgl)"/>
        {/* Head */}
        <ellipse cx="100" cy="30" rx="24" ry="28" fill="var(--card)" stroke="var(--text3)" strokeWidth="1.2"/>
        {/* Neck */}
        <path d="M82 55 L78 70 Q100 75 122 70 L118 55" fill="var(--card)" stroke="var(--text3)" strokeWidth="1.2"/>
        {/* Shoulders */}
        <path d="M78 70 Q60 75 30 90 L25 130 Q30 135 40 132 L55 125 Q70 115 78 100" fill="var(--card)" stroke="var(--text3)" strokeWidth="1.2"/>
        <path d="M122 70 Q140 75 170 90 L175 130 Q170 135 160 132 L145 125 Q130 115 122 100" fill="var(--card)" stroke="var(--text3)" strokeWidth="1.2"/>
        {/* Torso */}
        <path d="M78 100 L72 240 Q100 250 128 240 L122 100" fill="var(--card)" stroke="var(--text3)" strokeWidth="1.2"/>
        {/* Ghost necklace lines */}
        {LENGTHS.map(l=>{const y=mapY(l.cm);return(
          <path key={l.cm} d={`M${100-30-Math.min((l.cm-30)*0.6,35)} ${Math.min(70+(l.cm-30)*0.8,90)} Q100 ${Math.min(y,235)} ${100+30+Math.min((l.cm-30)*0.6,35)} ${Math.min(70+(l.cm-30)*0.8,90)}`}
            fill="none" stroke="var(--text3)" strokeWidth="0.6" opacity=".15" strokeDasharray="3 4"/>
        )})}
        {/* Active necklace */}
        <path d={`M${100-30-Math.min((len-30)*0.6,35)} ${Math.min(70+(len-30)*0.8,90)} Q100 ${Math.min(curY,235)} ${100+30+Math.min((len-30)*0.6,35)} ${Math.min(70+(len-30)*0.8,90)}`}
          fill="none" stroke="url(#ncg)" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Pendant dot */}
        <circle cx="100" cy={Math.min(curY,235)} r="4" fill="var(--gold)" opacity=".7"/>
        {/* Length label */}
        <rect x="135" y={Math.min(curY,230)-10} width="50" height="20" rx="10" fill="var(--bg)" stroke="url(#ncg)" strokeWidth="1"/>
        <text x="160" y={Math.min(curY,230)+4} textAnchor="middle" fill="var(--silver)" fontSize="10" fontWeight="700" fontFamily="var(--f-mono)">{len}cm</text>
      </svg>
    </div>
    {/* Slider */}
    <div style={{marginBottom:10}}>
      <div style={{display:'flex',justifyContent:'space-between',marginBottom:4}}>
        <span style={{fontSize:'.85rem',color:'var(--text2)'}}>{TX.len}</span>
        <span style={{fontFamily:'var(--f-mono)',fontWeight:700,color:'var(--silver)'}}>{len}cm · {closest.name[lang]}</span>
      </div>
      <input type="range" min="35" max="75" step="1" value={len} onChange={e=>setLen(+e.target.value)} style={{width:'100%',accentColor:'var(--gold)'}}/>
    </div>
    {/* Quick length pills */}
    <div style={{display:'flex',gap:5,flexWrap:'wrap',marginBottom:12}}>
      {LENGTHS.map(l=>{const act=Math.abs(l.cm-len)<3;return(<button key={l.cm} onClick={()=>setLen(l.cm)} style={{padding:'7px 12px',borderRadius:16,fontSize:'.72rem',fontWeight:act?700:500,border:`1.5px solid ${act?'var(--gold)':'var(--border)'}`,background:act?'rgba(212,175,55,0.08)':'transparent',color:act?'var(--gold)':'var(--text3)',transition:'all .2s'}}>{l.cm}cm {l.name[lang]}</button>)})}
    </div>
    {/* Price estimate */}
    <div style={{padding:'12px 14px',borderRadius:12,background:'linear-gradient(135deg,rgba(192,192,192,0.06),rgba(212,175,55,0.03))',border:'1px solid rgba(192,192,192,0.12)',marginBottom:10,textAlign:'left'}}>
      <div style={{fontSize:'.72rem',color:'var(--text3)',fontWeight:600,marginBottom:4}}>{TX.est}</div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}><span style={{fontFamily:'var(--f-mono)',fontSize:'1.2rem',fontWeight:700,color:'var(--green)'}}>≈ ₺{priceTL}</span><span style={{fontSize:'.75rem',color:'var(--text3)',fontFamily:'var(--f-mono)'}}>~{weight}g</span></div>
    </div>
    <a href="https://www.instagram.com/istanbulgumustr/" target="_blank" rel="noopener" style={{display:'block',padding:'12px',borderRadius:12,background:'rgba(212,175,55,0.06)',border:'1.5px solid rgba(212,175,55,0.2)',color:'var(--gold)',fontWeight:600,fontSize:'.88rem',marginBottom:8,textDecoration:'none'}}>{TX.order}</a>
    <div style={{padding:'8px 12px',borderRadius:10,background:'rgba(212,175,55,0.05)',border:'1px solid rgba(212,175,55,0.1)',fontSize:'.78rem',color:'var(--text2)',display:'flex',gap:6}}>💡 {TX.tip}</div>
  </div>);
}

/* ── TOOL 29: Silver Jewelry Price Estimator ── */
function SilverPriceEstimator({lang}){
  const [type,setType]=useState('ring');
  const [size,setSize]=useState(50);
  const [purity,setPurity]=useState(925);
  const TYPES={
    ring:{icon:'💍',weight:(s)=>(2+s*0.04).toFixed(1),sizeRange:[40,72],sizeUnit:'mm',sizeLabel:{tr:'Çevre',en:'Circumference',ar:'المحيط'}},
    bracelet:{icon:'📿',weight:(s)=>(s*0.08).toFixed(1),sizeRange:[130,220],sizeUnit:'mm',sizeLabel:{tr:'Bilek Çevresi',en:'Wrist Size',ar:'محيط المعصم'}},
    necklace:{icon:'📿',weight:(s)=>(s*0.12).toFixed(1),sizeRange:[35,75],sizeUnit:'cm',sizeLabel:{tr:'Uzunluk',en:'Length',ar:'الطول'}},
    earring:{icon:'✨',weight:()=>'3.0',sizeRange:[10,40],sizeUnit:'mm',sizeLabel:{tr:'Boyut',en:'Size',ar:'الحجم'}},
  };
  const tp=TYPES[type];
  const w=parseFloat(tp.weight(size));
  const purFactor=purity/1000;
  const pureW=(w*purFactor).toFixed(1);
  const lpE=useSilverPrice();
  const silverPerG=lpE.silverPerG||1.05;
  const usdTry=lpE.usdtry||38.5;
  const priceUSD=(w*silverPerG).toFixed(2);
  const priceTL=Math.round(w*silverPerG*usdTry);
  const craftMultiplier=2.5;
  const retailTL=Math.round(priceTL*craftMultiplier);

  const TX={
    tr:{title:'Gümüş Takı Fiyat Tahmini',desc:'Takı türü, boyut ve ayara göre tahmini fiyat.',type:'Takı Türü',
      ring:'Yüzük',bracelet:'Bilezik',necklace:'Kolye',earring:'Küpe',
      purityLabel:'Ayar',weight:'Tahmini Ağırlık',pureWeight:'Saf Gümüş',
      material:'Hammadde Değeri',retail:'Tahmini Perakende',note:'İşçilik, tasarım ve marka faktörüne göre değişir.',
      order:'İstanbul Gümüş\'ten Fiyat Al →'},
    en:{title:'Silver Jewelry Price Estimator',desc:'Estimate price by type, size and purity.',type:'Jewelry Type',
      ring:'Ring',bracelet:'Bracelet',necklace:'Necklace',earring:'Earring',
      purityLabel:'Purity',weight:'Est. Weight',pureWeight:'Pure Silver',
      material:'Material Value',retail:'Est. Retail',note:'Varies by craftsmanship, design and brand.',
      order:'Get Price from İstanbul Gümüş →'},
    ar:{title:'تقدير سعر المجوهرات الفضية',desc:'تقدير حسب النوع والحجم والعيار.',type:'نوع المجوهرات',
      ring:'خاتم',bracelet:'سوار',necklace:'قلادة',earring:'حلق',
      purityLabel:'العيار',weight:'الوزن التقديري',pureWeight:'فضة خالصة',
      material:'قيمة المادة',retail:'التجزئة المقدرة',note:'يختلف حسب الصنعة والتصميم.',
      order:'احصل على سعر من إسطنبول غوموش ←'}
  }[lang]||{};

  return(<div className="tm-tool">
    <div style={{textAlign:'center',marginBottom:12}}>
      <div style={{fontSize:'1.05rem',fontWeight:700,fontFamily:'var(--f-head)'}}>{TX.title}</div>
      <div style={{fontSize:'.85rem',color:'var(--text2)',lineHeight:1.5}}>{TX.desc}</div>
    </div>
    {/* Type selector */}
    <div style={{fontSize:'.85rem',color:'var(--text2)',marginBottom:6}}>{TX.type}</div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:6,marginBottom:14}}>
      {['ring','bracelet','necklace','earring'].map(t=>{const act=type===t;return(<button key={t} onClick={()=>{setType(t);setSize(TYPES[t].sizeRange[0]+Math.round((TYPES[t].sizeRange[1]-TYPES[t].sizeRange[0])*0.4))}} style={{padding:'10px 4px',borderRadius:10,fontSize:'.75rem',fontWeight:act?700:500,border:`1.5px solid ${act?'var(--silver)':'var(--border)'}`,background:act?'rgba(192,192,192,0.1)':'transparent',color:act?'var(--silver)':'var(--text3)',transition:'all .2s',display:'flex',flexDirection:'column',alignItems:'center',gap:3}}><span style={{fontSize:'1.1rem'}}>{TYPES[t].icon}</span>{TX[t]}</button>)})}
    </div>
    {/* Size slider */}
    <div style={{marginBottom:12}}>
      <div style={{display:'flex',justifyContent:'space-between',marginBottom:4}}>
        <span style={{fontSize:'.85rem',color:'var(--text2)'}}>{tp.sizeLabel[lang]}</span>
        <span style={{fontFamily:'var(--f-mono)',fontWeight:700,color:'var(--silver)'}}>{size}{tp.sizeUnit}</span>
      </div>
      <input type="range" min={tp.sizeRange[0]} max={tp.sizeRange[1]} step="1" value={size} onChange={e=>setSize(+e.target.value)} style={{width:'100%',accentColor:'var(--silver)'}}/>
    </div>
    {/* Purity */}
    <div style={{marginBottom:14}}>
      <div style={{fontSize:'.85rem',color:'var(--text2)',marginBottom:6}}>{TX.purityLabel}</div>
      <div style={{display:'flex',gap:6}}>
        {[{v:999,l:'999 Saf'},{v:925,l:'925'},{v:900,l:'900'},{v:800,l:'800'}].map(p=>(<button key={p.v} onClick={()=>setPurity(p.v)} style={{flex:1,padding:'8px 4px',borderRadius:8,fontSize:'.75rem',fontWeight:purity===p.v?700:500,border:`1.5px solid ${purity===p.v?'var(--gold)':'var(--border)'}`,background:purity===p.v?'rgba(212,175,55,0.08)':'transparent',color:purity===p.v?'var(--gold)':'var(--text3)',transition:'all .2s'}}>{p.l}</button>))}
      </div>
    </div>
    {/* Results */}
    <div style={{borderRadius:14,border:'1px solid var(--border)',overflow:'hidden',marginBottom:12}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',borderBottom:'1px solid var(--border)'}}>
        <div style={{padding:'12px',textAlign:'center',borderRight:'1px solid var(--border)'}}>
          <div style={{fontFamily:'var(--f-mono)',fontSize:'1.3rem',fontWeight:700,color:'var(--silver)'}}>{w}g</div>
          <div style={{fontSize:'.65rem',color:'var(--text3)',marginTop:2}}>{TX.weight}</div>
        </div>
        <div style={{padding:'12px',textAlign:'center'}}>
          <div style={{fontFamily:'var(--f-mono)',fontSize:'1.3rem',fontWeight:700,color:'var(--gold)'}}>{pureW}g</div>
          <div style={{fontSize:'.65rem',color:'var(--text3)',marginTop:2}}>{TX.pureWeight}</div>
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
        <div style={{padding:'12px',textAlign:'center',borderRight:'1px solid var(--border)'}}>
          <div style={{fontFamily:'var(--f-mono)',fontSize:'1.1rem',fontWeight:700,color:'var(--text2)'}}>₺{priceTL}</div>
          <div style={{fontSize:'.65rem',color:'var(--text3)',marginTop:2}}>{TX.material}</div>
        </div>
        <div style={{padding:'12px',textAlign:'center',background:'linear-gradient(135deg,rgba(45,212,160,0.04),transparent)'}}>
          <div style={{fontFamily:'var(--f-mono)',fontSize:'1.3rem',fontWeight:700,color:'var(--green)'}}>≈ ₺{retailTL}</div>
          <div style={{fontSize:'.65rem',color:'var(--text3)',marginTop:2}}>{TX.retail}</div>
        </div>
      </div>
    </div>
    <div style={{fontSize:'.75rem',color:'var(--text3)',textAlign:'center',marginBottom:10,fontStyle:'italic'}}>{TX.note}</div>
    <a href="https://www.instagram.com/istanbulgumustr/" target="_blank" rel="noopener" style={{display:'block',padding:'12px',borderRadius:12,background:'rgba(212,175,55,0.06)',border:'1.5px solid rgba(212,175,55,0.2)',color:'var(--gold)',fontWeight:600,fontSize:'.88rem',textDecoration:'none',textAlign:'center'}}>{TX.order}</a>
  </div>);
}

/* ── TOOL 30: Gold/Silver Ratio ── */
function GoldSilverRatio({ lang }) {
  const lp = useSilverPrice();
  const ratio = (lp.gold && lp.silver) ? (lp.gold / lp.silver).toFixed(1) : null;
  const L = {
    tr: { title:'Altın/Gümüş Oranı', desc:'Tarihsel oran: 15-100 arası. Düşük oran → gümüş pahalı. Yüksek oran → gümüş ucuz (tarihsel perspektifle).', live:'Canlı Oran', gold:'Altın', silver:'Gümüş', low:'Tarihsel düşük ~15', high:'Tarihsel yüksek ~120', note:'Bu oran, bir ons altın alabilmek için kaç ons gümüş gerektiğini gösterir.' },
    en: { title:'Gold/Silver Ratio', desc:'Historical range: 15-100. Low ratio → silver expensive. High ratio → silver cheap (historically).', live:'Live Ratio', gold:'Gold', silver:'Silver', low:'Historical low ~15', high:'Historical high ~120', note:'This ratio shows how many ounces of silver it takes to buy one ounce of gold.' },
    ar: { title:'نسبة الذهب/الفضة', desc:'النطاق التاريخي: 15-100', live:'النسبة الحية', gold:'ذهب', silver:'فضة', low:'أدنى تاريخي ~15', high:'أعلى تاريخي ~120', note:'توضح هذه النسبة عدد أونصات الفضة المطلوبة لشراء أونصة ذهب.' }
  }[lang] || {};
  const pct = ratio ? Math.min(100, Math.max(0, ((ratio - 15) / (120 - 15)) * 100)) : 50;
  return (<div className="tm-tool">
    <p style={{fontSize:'.88rem',color:'var(--text2)',marginBottom:16,lineHeight:1.6}}>{L.desc}</p>
    {ratio ? (<>
      <div className="calc-result"><div className="calc-result-num">1 : {ratio}</div><div className="calc-result-label">{L.live} ({L.gold}/{L.silver})</div></div>
      <div style={{margin:'20px 0 8px'}}>
        <div style={{display:'flex',justifyContent:'space-between',fontSize:'.7rem',color:'var(--text3)',marginBottom:4}}><span>{L.low}</span><span>{L.high}</span></div>
        <div style={{height:8,borderRadius:4,background:'var(--border)',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',left:0,top:0,height:'100%',width:`${pct}%`,borderRadius:4,background:'linear-gradient(90deg,var(--green),var(--gold),var(--red))',transition:'width .5s'}}/>
          <div style={{position:'absolute',left:`${pct}%`,top:-4,width:3,height:16,borderRadius:2,background:'var(--text)',transform:'translateX(-50%)',transition:'left .5s'}}/>
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:16}}>
        <div className="tm-result-row" style={{flexDirection:'column',alignItems:'center'}}><span style={{fontSize:'.7rem',color:'var(--text3)'}}>{L.gold}</span><span style={{fontFamily:'var(--f-mono)',fontWeight:700,color:'var(--gold)'}}>${lp.gold?.toFixed(0)}</span></div>
        <div className="tm-result-row" style={{flexDirection:'column',alignItems:'center'}}><span style={{fontSize:'.7rem',color:'var(--text3)'}}>{L.silver}</span><span style={{fontFamily:'var(--f-mono)',fontWeight:700,color:'var(--silver)'}}>${lp.silver?.toFixed(2)}</span></div>
      </div>
    </>) : <div style={{textAlign:'center',color:'var(--text3)',padding:20}}>Loading...</div>}
    <p style={{fontSize:'.78rem',color:'var(--text3)',marginTop:16,fontStyle:'italic'}}>{L.note}</p>
  </div>);
}

/* ── TOOL 31: Counterfeit Detection Guide ── */
function CounterfeitDetection({ lang }) {
  const [step, setStep] = useState(0);
  const L = {
    tr: { title:'Sahtecilik Tespit Rehberi', tests:[
      {name:'🧲 Mıknatıs Testi',desc:'Güçlü bir neodimyum mıknatısı gümüşe yaklaştırın. Gerçek gümüş paramanyetik olduğundan mıknatısa çekilmez. Eğer güçlü çekim varsa → sahte (demir/çelik içerir).',result:'Çekilmiyor = ✅ Muhtemelen gerçek | Çekiliyor = ❌ Sahte'},
      {name:'🧊 Buz Testi',desc:'Bir buz küpünü gümüş yüzeye koyun. Gümüş en yüksek termal iletkenliğe sahip metaldir — buz son derece hızlı eriyecektir (ahşap veya plastik üzerindekinden belirgin şekilde hızlı).',result:'Hızlı eriyor = ✅ İyi sinyal | Yavaş eriyor = ⚠️ Şüpheli'},
      {name:'🔔 Ses Testi',desc:'Sikkeyi/objeyi sert bir yüzeye hafifçe vurun veya parmakla fiske yapın. Gerçek gümüş yüksek frekanslı, uzun süre tınlayan temiz bir "çın" sesi çıkarır. Sahte gümüş tok ve kısa bir "tık" sesi verir.',result:'Temiz tınlama = ✅ Gerçek | Tok ses = ❌ Şüpheli'},
      {name:'⚖️ Yoğunluk Testi',desc:'Objeyi hassas terazide tartın, sonra su dolu ölçü kabına batırarak hacmini ölçün. Yoğunluk = kütle/hacim. Saf gümüşün yoğunluğu 10,49 g/cm³\'tür. %10\'dan fazla sapma → şüpheli.',result:'10,49 g/cm³ ±5% = ✅ | Büyük sapma = ❌'},
      {name:'🏷️ Damga Kontrolü',desc:'Büyüteçle damga/hallmark kontrol edin. 925, 950 veya 999 yazısı, üretici kodu ve ülke damgası olmalıdır. Damga eksikliği, bulanık veya düzensiz damga kırmızı bayraktır.',result:'Net damga = ✅ | Damga yok/bulanık = ⚠️'}
    ], prev:'Önceki', next:'Sonraki', step:'Adım' },
    en: { title:'Counterfeit Detection Guide', tests:[
      {name:'🧲 Magnet Test',desc:'Hold a strong neodymium magnet near the silver. Real silver is paramagnetic and won\'t be attracted. Strong attraction → fake (contains iron/steel).',result:'No attraction = ✅ Likely real | Attracted = ❌ Fake'},
      {name:'🧊 Ice Test',desc:'Place an ice cube on the silver surface. Silver has the highest thermal conductivity of any metal — ice will melt extremely fast.',result:'Fast melt = ✅ Good sign | Slow melt = ⚠️ Suspicious'},
      {name:'🔔 Ring Test',desc:'Gently tap the coin/object on a hard surface. Real silver produces a clear, high-pitched, long-lasting ring. Fake silver gives a dull, short thud.',result:'Clear ring = ✅ Real | Dull thud = ❌ Suspicious'},
      {name:'⚖️ Density Test',desc:'Weigh the object precisely, then measure volume by water displacement. Density = mass/volume. Pure silver density is 10.49 g/cm³.',result:'10.49 g/cm³ ±5% = ✅ | Large deviation = ❌'},
      {name:'🏷️ Hallmark Check',desc:'Examine hallmarks with a magnifying glass. Look for 925, 950 or 999 stamps, maker\'s mark, and country hallmark.',result:'Clear marks = ✅ | Missing/blurry = ⚠️'}
    ], prev:'Previous', next:'Next', step:'Step' },
    ar: { title:'دليل كشف التزوير', tests:[
      {name:'🧲 اختبار المغناطيس',desc:'قرّب مغناطيسًا من الفضة. الفضة الحقيقية لا تنجذب.',result:'لا انجذاب = ✅ | انجذاب = ❌'},
      {name:'🧊 اختبار الثلج',desc:'ضع مكعب ثلج على سطح الفضة. الفضة توصل الحرارة بسرعة فائقة.',result:'ذوبان سريع = ✅ | بطيء = ⚠️'},
      {name:'🔔 اختبار الصوت',desc:'اطرق بلطف. الفضة الحقيقية تصدر رنينًا واضحًا.',result:'رنين واضح = ✅ | صوت مكتوم = ❌'},
      {name:'⚖️ اختبار الكثافة',desc:'الكثافة = الكتلة/الحجم. كثافة الفضة النقية 10.49 غ/سم³.',result:'±5% = ✅ | انحراف كبير = ❌'},
      {name:'🏷️ فحص الختم',desc:'ابحث عن ختم 925 أو 950 أو 999.',result:'ختم واضح = ✅ | مفقود = ⚠️'}
    ], prev:'السابق', next:'التالي', step:'خطوة' }
  }[lang] || {};
  const test = L.tests?.[step];
  return (<div className="tm-tool">
    <div style={{display:'flex',gap:6,marginBottom:16,justifyContent:'center'}}>
      {L.tests?.map((_,i)=><div key={i} style={{width:step===i?24:8,height:8,borderRadius:4,background:step===i?'var(--silver)':'var(--border)',transition:'all .3s',cursor:'pointer'}} onClick={()=>setStep(i)}/>)}
    </div>
    {test && <>
      <div style={{fontSize:'.72rem',color:'var(--text3)',fontFamily:'var(--f-mono)',marginBottom:6}}>{L.step} {step+1}/5</div>
      <h4 style={{fontSize:'1.05rem',fontFamily:'var(--f-head)',marginBottom:10}}>{test.name}</h4>
      <p style={{fontSize:'.92rem',color:'var(--text2)',lineHeight:1.65,marginBottom:14}}>{test.desc}</p>
      <div style={{padding:'12px 16px',borderRadius:'var(--r-badge)',background:'rgba(192,192,192,0.04)',border:'1px solid var(--border)',fontSize:'.85rem',color:'var(--text)',lineHeight:1.5}}>{test.result}</div>
      <div style={{display:'flex',gap:10,marginTop:16}}>
        <button className="btn btn-secondary" style={{flex:1,minHeight:44}} disabled={step===0} onClick={()=>setStep(s=>s-1)}>{L.prev}</button>
        <button className="btn btn-primary" style={{flex:1,minHeight:44}} disabled={step===4} onClick={()=>setStep(s=>s+1)}>{L.next}</button>
      </div>
    </>}
  </div>);
}

/* ── TOOL 32: Melt Value Calculator ── */
function MeltValueCalc({ lang }) {
  const lp = useSilverPrice();
  const [weight, setWeight] = useState(31.1);
  const [metal, setMetal] = useState('silver');
  const [purity, setPurity] = useState(0.999);
  const [unit, setUnit] = useState('g');
  const silverPurities = [{v:0.999,l:'999 (Saf/Pure)'},{v:0.950,l:'950'},{v:0.925,l:'925 (Sterling)'},{v:0.900,l:'900 (Coin)'},{v:0.835,l:'835'},{v:0.800,l:'800'}];
  const goldPurities = [{v:0.999,l:'24K (999)'},{v:0.916,l:'22K (916)'},{v:0.750,l:'18K (750)'},{v:0.585,l:'14K (585)'},{v:0.417,l:'10K (417)'}];
  const purities = metal === 'gold' ? goldPurities : silverPurities;
  const L = {
    tr: { w:'Ağırlık',u:'Birim',p:'Ayar',result:'Erime Değeri',note:'Spot fiyat üzerinden hesaplanır.',spot:'Spot Fiyat',tl:'TL Karşılığı' },
    en: { w:'Weight',u:'Unit',p:'Purity',result:'Melt Value',note:'Calculated at spot price.',spot:'Spot Price',tl:'TRY Equivalent' },
    ar: { w:'الوزن',u:'الوحدة',p:'العيار',result:'قيمة الصهر',note:'محسوبة بسعر السوق الفوري.',spot:'السعر الفوري',tl:'المقابل بالليرة' }
  }[lang] || {};
  const wGrams = unit === 'oz' ? weight * 31.1035 : unit === 'kg' ? weight * 1000 : weight;
  const spotPrice = metal === 'gold' ? lp.gold : lp.silver;
  const pricePerG = spotPrice ? spotPrice / 31.1035 : 0;
  const meltUSD = wGrams * purity * pricePerG;
  const meltTRY = lp.usdtry ? meltUSD * lp.usdtry : null;
  const accentColor = metal === 'gold' ? 'var(--gold)' : 'var(--silver)';
  return (<div className="tm-tool">
    <div style={{display:'flex',gap:4,marginBottom:14,padding:3,background:'var(--card)',borderRadius:10,border:'1px solid var(--border)'}}>
      {[{id:'silver',l:{tr:'🥈 Gümüş',en:'🥈 Silver',ar:'🥈 فضة'}},{id:'gold',l:{tr:'🥇 Altın',en:'🥇 Gold',ar:'🥇 ذهب'}}].map(m=>
        <button key={m.id} onClick={()=>{setMetal(m.id);setPurity(0.999)}} style={{flex:1,padding:'8px',borderRadius:8,border:'none',cursor:'pointer',fontSize:13,fontWeight:600,background:metal===m.id?(m.id==='gold'?'rgba(212,175,55,0.15)':'rgba(192,192,192,0.12)'):'transparent',color:metal===m.id?(m.id==='gold'?'var(--gold)':'var(--silver)'):'var(--text3)'}}>{m.l[lang]}</button>
      )}
    </div>
    <label className="calc-label">{L.w}</label>
    <input type="number" className="calc-input" value={weight} onChange={e=>setWeight(+e.target.value)} min="0" step="0.1" inputMode="decimal"/>
    <label className="calc-label" style={{marginTop:12}}>{L.u}</label>
    <select className="calc-select" value={unit} onChange={e=>setUnit(e.target.value)}>
      <option value="g">Gram</option><option value="oz">Troy Ounce</option><option value="kg">Kilogram</option>
    </select>
    <label className="calc-label" style={{marginTop:12}}>{L.p}</label>
    <select className="calc-select" value={purity} onChange={e=>setPurity(+e.target.value)}>
      {purities.map(o=><option key={o.v} value={o.v}>{o.l}</option>)}
    </select>
    {spotPrice ? (<>
      <div className="calc-result" style={{marginTop:16}}>
        <div className="calc-result-num" style={{color:accentColor}}>${meltUSD.toFixed(2)}</div>
        <div className="calc-result-label">{L.result}</div>
        {meltTRY && <div style={{fontFamily:'var(--f-mono)',fontSize:'1.1rem',color:'var(--green)',marginTop:6}}>≈ ₺{meltTRY.toFixed(2)}</div>}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:12}}>
        <div className="tm-result-row" style={{flexDirection:'column',alignItems:'center',padding:8}}>
          <span style={{fontSize:'.65rem',color:'var(--text3)'}}>{L.spot} ({metal==='gold'?'Au':'Ag'})</span>
          <span style={{fontFamily:'var(--f-mono)',fontWeight:600,fontSize:'.85rem',color:accentColor}}>${spotPrice?.toFixed(2)}/oz</span>
        </div>
        <div className="tm-result-row" style={{flexDirection:'column',alignItems:'center',padding:8}}>
          <span style={{fontSize:'.65rem',color:'var(--text3)'}}>$/g</span>
          <span style={{fontFamily:'var(--f-mono)',fontWeight:600,fontSize:'.85rem',color:accentColor}}>${pricePerG.toFixed(3)}</span>
        </div>
      </div>
    </>) : <div style={{textAlign:'center',color:'var(--text3)',padding:20}}>Loading...</div>}
    <p style={{fontSize:'.75rem',color:'var(--text3)',marginTop:14,fontStyle:'italic'}}>{L.note}</p>
  </div>);
}

/* ── TOOL 33: Gold Karat Calculator ── */
function GoldKaratCalc({lang}){const[karat,setKarat]=useState(18);const[weight,setWeight]=useState(10);
const lp=useSilverPrice();const purity=karat/24;const pureG=weight*purity;const alloyG=weight-pureG;
const pricePerG=lp.gold?(lp.gold/31.1035):0;const valueUSD=pureG*pricePerG;const valueTRY=lp.usdtry?valueUSD*lp.usdtry:null;
const L={tr:{title:'Karat Hesaplayıcı',w:'Ağırlık (g)',k:'Karat',pure:'Saf Altın',alloy:'Alaşım',value:'Tahmini Değer',fineness:'Milyem'},en:{title:'Karat Calculator',w:'Weight (g)',k:'Karat',pure:'Pure Gold',alloy:'Alloy',value:'Estimated Value',fineness:'Fineness'},ar:{title:'حاسبة القيراط',w:'الوزن (غ)',k:'القيراط',pure:'الذهب الخالص',alloy:'السبيكة',value:'القيمة المقدرة',fineness:'الألفية'}}[lang]||{};
return<div className="tm-tool">
<label className="calc-label">{L.k}</label>
<input type="range" min={8} max={24} step={1} value={karat} onChange={e=>setKarat(+e.target.value)} style={{width:'100%',accentColor:'var(--gold)'}}/>
<div style={{display:'flex',justifyContent:'space-between',fontSize:12,color:'var(--text2)',marginBottom:12}}>
<span>{karat}K</span><span>{(purity*100).toFixed(1)}%</span><span>{Math.round(purity*1000)} {L.fineness}</span>
</div>
<label className="calc-label">{L.w}</label>
<input type="number" className="calc-input" value={weight} onChange={e=>setWeight(+e.target.value)} min="0" step="0.1" inputMode="decimal"/>
<div style={{marginTop:16,display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
<div className="tm-result-row" style={{flexDirection:'column',alignItems:'center',padding:10}}>
<span style={{fontSize:'.65rem',color:'var(--text3)'}}>{L.pure}</span>
<span style={{fontFamily:'var(--f-mono)',fontWeight:700,fontSize:'1.1rem',color:'var(--gold)'}}>{pureG.toFixed(2)}g</span>
</div>
<div className="tm-result-row" style={{flexDirection:'column',alignItems:'center',padding:10}}>
<span style={{fontSize:'.65rem',color:'var(--text3)'}}>{L.alloy}</span>
<span style={{fontFamily:'var(--f-mono)',fontWeight:600,fontSize:'1.1rem',color:'var(--text2)'}}>{alloyG.toFixed(2)}g</span>
</div>
</div>
{lp.gold&&valueTRY&&<div className="calc-result" style={{marginTop:12}}>
<div className="calc-result-num" style={{color:'var(--gold)'}}>${valueUSD.toFixed(2)}</div>
<div style={{fontFamily:'var(--f-mono)',fontSize:'1rem',color:'var(--green)',marginTop:4}}>≈ ₺{valueTRY.toFixed(2)}</div>
<div className="calc-result-label">{L.value}</div>
</div>}
</div>}

/* ── TOOL 34: Wedding Gold Budget Planner ── */
function WeddingGoldPlanner({lang}){const[guests,setGuests]=useState(150);const[avgQ,setAvgQ]=useState(1.5);const[price,setPrice]=useState(3500);
const totalCoins=Math.round(guests*avgQ);const totalGrams=totalCoins*1.804;const totalCost=totalCoins*price;
const L={tr:{title:'Düğün Altını Planlayıcı',g:'Davetli Sayısı',avg:'Kişi Başı Ortalama (çeyrek)',p:'Çeyrek Altın Fiyatı (₺)',total:'Toplam Çeyrek',grams:'Toplam Gram',cost:'Tahmini Maliyet',note:'Tahmindir; bölgeye ve geleneğe göre değişir.'},en:{title:'Wedding Gold Planner',g:'Guest Count',avg:'Average per Guest (quarter coins)',p:'Quarter Coin Price (₺)',total:'Total Quarters',grams:'Total Grams',cost:'Estimated Cost',note:'Estimate; varies by region and tradition.'},ar:{title:'مخطط ذهب الأعراس',g:'عدد المدعوين',avg:'المتوسط لكل ضيف (ربع)',p:'سعر الربع (₺)',total:'إجمالي الأرباع',grams:'إجمالي الغرامات',cost:'التكلفة المقدرة',note:'تقدير يختلف حسب المنطقة.'}}[lang]||{};
return<div className="tm-tool">
<label className="calc-label">{L.g}</label>
<input type="number" className="calc-input" value={guests} onChange={e=>setGuests(+e.target.value)} min="1" inputMode="numeric"/>
<label className="calc-label" style={{marginTop:12}}>{L.avg}</label>
<input type="range" min={0.5} max={3} step={0.25} value={avgQ} onChange={e=>setAvgQ(+e.target.value)} style={{width:'100%',accentColor:'var(--gold)'}}/>
<div style={{textAlign:'center',fontSize:13,color:'var(--gold)',fontWeight:600}}>{avgQ} {lang==='tr'?'çeyrek':'quarters'}</div>
<label className="calc-label" style={{marginTop:12}}>{L.p}</label>
<input type="number" className="calc-input" value={price} onChange={e=>setPrice(+e.target.value)} min="0" step="100" inputMode="numeric"/>
<div style={{marginTop:16,display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:6}}>
<div className="tm-result-row" style={{flexDirection:'column',alignItems:'center',padding:8}}><span style={{fontSize:'.6rem',color:'var(--text3)'}}>{L.total}</span><span style={{fontFamily:'var(--f-mono)',fontWeight:700,color:'var(--gold)'}}>{totalCoins}</span></div>
<div className="tm-result-row" style={{flexDirection:'column',alignItems:'center',padding:8}}><span style={{fontSize:'.6rem',color:'var(--text3)'}}>{L.grams}</span><span style={{fontFamily:'var(--f-mono)',fontWeight:700,color:'var(--gold)'}}>{totalGrams.toFixed(0)}g</span></div>
<div className="tm-result-row" style={{flexDirection:'column',alignItems:'center',padding:8}}><span style={{fontSize:'.6rem',color:'var(--text3)'}}>22K Au</span><span style={{fontFamily:'var(--f-mono)',fontWeight:700,color:'var(--gold)'}}>{(totalGrams*0.916).toFixed(0)}g</span></div>
</div>
<div className="calc-result" style={{marginTop:12}}>
<div className="calc-result-num" style={{color:'var(--gold)'}}>₺{totalCost.toLocaleString()}</div>
<div className="calc-result-label">{L.cost}</div>
</div>
<p style={{fontSize:'.72rem',color:'var(--text3)',marginTop:10,fontStyle:'italic'}}>{L.note}</p>
</div>}

/* ── TOOL 35: Live Metal Comparison Dashboard ── */
function MetalDashboard({lang}){const lp=useSilverPrice();
const metals=[
{id:'Ag',n:{tr:'Gümüş',en:'Silver',ar:'فضة'},price:lp.silver,c:'#C0C0C0'},
{id:'Au',n:{tr:'Altın',en:'Gold',ar:'ذهب'},price:lp.gold,c:'#D4AF37'},
];
const ratio=lp.silver&&lp.gold?(lp.gold/lp.silver).toFixed(1):null;
return<div className="tm-tool" style={{gap:10}}>
{metals.map(m=>{const gUSD=m.price?(m.price/31.1035):0;const gTRY=gUSD&&lp.usdtry?(gUSD*lp.usdtry):0;
return<div key={m.id} style={{padding:14,borderRadius:14,border:'1px solid var(--border)',background:'var(--card)'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
<span style={{fontWeight:700,color:m.c,fontSize:14}}>{m.id} — {m.n[lang]}</span>
{m.price&&<span style={{fontFamily:'var(--f-mono)',fontWeight:700,fontSize:16,color:m.c}}>${m.price.toFixed(2)}</span>}
</div>
{m.price?<div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:6}}>
<div style={{textAlign:'center'}}><div style={{fontSize:9,color:'var(--text3)'}}>$/oz</div><div style={{fontFamily:'var(--f-mono)',fontSize:12,fontWeight:600}}>{m.price.toFixed(2)}</div></div>
<div style={{textAlign:'center'}}><div style={{fontSize:9,color:'var(--text3)'}}>$/g</div><div style={{fontFamily:'var(--f-mono)',fontSize:12,fontWeight:600}}>{gUSD.toFixed(3)}</div></div>
<div style={{textAlign:'center'}}><div style={{fontSize:9,color:'var(--text3)'}}>₺/g</div><div style={{fontFamily:'var(--f-mono)',fontSize:12,fontWeight:600,color:'var(--green)'}}>{gTRY.toFixed(2)}</div></div>
</div>:<div style={{textAlign:'center',color:'var(--text3)',fontSize:12}}>Loading...</div>}
</div>})}
{ratio&&<div style={{textAlign:'center',padding:12,borderRadius:14,background:'rgba(212,175,55,0.05)',border:'1px solid rgba(212,175,55,0.1)'}}>
<div style={{fontSize:11,color:'var(--text3)',marginBottom:4}}>Au/Ag {lang==='tr'?'Oranı':'Ratio'}</div>
<div style={{fontFamily:'var(--f-mono)',fontWeight:800,fontSize:24,color:'var(--gold)'}}>1:{ratio}</div>
<div style={{fontSize:10,color:'var(--text3)',marginTop:2}}>{lang==='tr'?'1 ons altın = '+ratio+' ons gümüş':'1 oz gold = '+ratio+' oz silver'}</div>
</div>}
{lp.usdtry&&<div style={{textAlign:'center',fontSize:11,color:'var(--text3)',marginTop:4}}>USD/TRY: ₺{lp.usdtry.toFixed(2)}</div>}
</div>}

/* ════════════ TOOL REGISTRY ════════════ */
/* ── TOOL 36: 4C Diamond Value Estimator ── */
function DiamondEstimator({lang}){
  const[carat,setCarat]=useState(1);const[color,setColor]=useState('G');const[clarity,setClarity]=useState('VS1');const[cut,setCut]=useState('Excellent');
  const colors=['D','E','F','G','H','I','J','K','L','M'];const clarities=['FL','IF','VVS1','VVS2','VS1','VS2','SI1','SI2','I1'];const cuts=['Excellent','Very Good','Good','Fair'];
  const basePerCarat={D:12000,E:10500,F:9500,G:8000,H:6800,I:5500,J:4500,K:3500,L:2800,M:2200};
  const clarMult={FL:2.2,IF:1.8,VVS1:1.5,VVS2:1.3,VS1:1.1,VS2:1.0,SI1:0.82,SI2:0.65,I1:0.4};
  const cutMult={Excellent:1.15,'Very Good':1.0,Good:0.88,Fair:0.72};
  const sizeF=carat<0.5?0.7:carat<1?0.85:carat<1.5?1:carat<2?1.35:carat<3?1.8:2.5;
  const est=Math.round((basePerCarat[color]||5000)*(clarMult[clarity]||1)*(cutMult[cut]||1)*sizeF*carat);
  const lo=Math.round(est*0.7),hi=Math.round(est*1.3);
  const L={tr:['Karat','Renk','Berraklık','Kesim','Tahmini Fiyat Aralığı','Bu tahmindir, kesin fiyat için sertifikalı gemolog değerlendirmesi gerekir.'],en:['Carat','Color','Clarity','Cut','Estimated Price Range','This is an estimate; consult a certified gemologist for exact pricing.'],ar:['القيراط','اللون','النقاء','القطع','نطاق السعر التقديري','هذا تقدير؛ استشر خبيراً معتمداً للتسعير الدقيق.']}[lang];
  return<div className="tm-tool">
    <label className="calc-label">{L[0]}</label><input type="number" className="calc-input" value={carat} onChange={e=>setCarat(Math.max(0.1,+e.target.value))} min="0.1" max="10" step="0.1" inputMode="decimal"/>
    <label className="calc-label" style={{marginTop:10}}>{L[1]}</label><select className="calc-select" value={color} onChange={e=>setColor(e.target.value)}>{colors.map(c=><option key={c} value={c}>{c}</option>)}</select>
    <label className="calc-label" style={{marginTop:10}}>{L[2]}</label><select className="calc-select" value={clarity} onChange={e=>setClarity(e.target.value)}>{clarities.map(c=><option key={c} value={c}>{c}</option>)}</select>
    <label className="calc-label" style={{marginTop:10}}>{L[3]}</label><select className="calc-select" value={cut} onChange={e=>setCut(e.target.value)}>{cuts.map(c=><option key={c} value={c}>{c}</option>)}</select>
    <div className="calc-result" style={{marginTop:16}}>
      <div className="calc-result-num" style={{color:'#B9F2FF'}}>${lo.toLocaleString()} – ${hi.toLocaleString()}</div>
      <div className="calc-result-label">{L[4]}</div>
      <div style={{fontSize:'.7rem',color:'var(--text3)',marginTop:6,lineHeight:1.4}}>{L[5]}</div>
    </div>
  </div>
}

/* ── TOOL 37: Mohs Hardness Scale Interactive ── */
function MohsScale({lang}){
  const[sel,setSel]=useState(null);
  const gems=[
    {m:1,n:{tr:'Talk',en:'Talc',ar:'التلك'},ex:{tr:'Tırnak çizer',en:'Fingernail scratches',ar:'يخدشه الظفر'},co:'#ddd',gems:[]},
    {m:2,n:{tr:'Jips',en:'Gypsum',ar:'الجبس'},ex:{tr:'Tırnak çizer',en:'Fingernail scratches',ar:'يخدشه الظفر'},co:'#f5f5dc',gems:['Kehribar (2-2.5)','Lületaşı (2-2.5)','İnci (2.5-4.5)']},
    {m:3,n:{tr:'Kalsit',en:'Calcite',ar:'الكالسيت'},ex:{tr:'Bakır bozuk para çizer',en:'Copper coin scratches',ar:'تخدشه العملة النحاسية'},co:'#ffe4b5',gems:['Mercan (3-4)']},
    {m:4,n:{tr:'Fluorit',en:'Fluorite',ar:'الفلوريت'},ex:{tr:'Çelik bıçak çizer',en:'Steel knife scratches',ar:'تخدشه السكين الفولاذية'},co:'#da70d6',gems:[]},
    {m:5,n:{tr:'Apatit',en:'Apatite',ar:'الأباتيت'},ex:{tr:'Çelik bıçak zor çizer',en:'Steel knife barely scratches',ar:'السكين تخدشه بصعوبة'},co:'#87ceeb',gems:['Turkuaz (5-6)','Lapis Lazuli (5-5.5)','Opal (5.5-6.5)']},
    {m:6,n:{tr:'Orthoklas',en:'Orthoclase',ar:'الأورثوكلاز'},ex:{tr:'Çelik eğe çizer',en:'Steel file scratches',ar:'تخدشه المبرد'},co:'#ffd700',gems:['Ay Taşı (6-6.5)','Tanzanit (6-7)']},
    {m:7,n:{tr:'Kuvars',en:'Quartz',ar:'الكوارتز'},ex:{tr:'Camı çizer',en:'Scratches glass',ar:'يخدش الزجاج'},co:'#dda0dd',gems:['Ametist (7)','Sitrin (7)','Peridot (6.5-7)','Garnet (6.5-7.5)','Zultanit (6.5-7)']},
    {m:8,n:{tr:'Topaz',en:'Topaz',ar:'التوباز'},ex:{tr:'Kuvarsı çizer',en:'Scratches quartz',ar:'يخدش الكوارتز'},co:'#ffa500',gems:['Topaz (8)','Zümrüt (7.5-8)','Akvamarin (7.5-8)']},
    {m:9,n:{tr:'Korundum',en:'Corundum',ar:'الكوروندوم'},ex:{tr:'Topazı çizer',en:'Scratches topaz',ar:'يخدش التوباز'},co:'#dc143c',gems:['Yakut (9)','Safir (9)','Moissanite (9.25)']},
    {m:10,n:{tr:'Elmas',en:'Diamond',ar:'الألماس'},ex:{tr:'Her şeyi çizer',en:'Scratches everything',ar:'يخدش كل شيء'},co:'#e0e0e0',gems:['Pırlanta (10)']},
  ];
  const s=sel!==null?gems[sel]:null;
  return<div className="tm-tool" style={{gap:8}}>
    <div style={{display:'flex',gap:4,flexWrap:'wrap'}}>{gems.map((g,i)=><button key={i} onClick={()=>setSel(i)} style={{width:54,padding:'8px 4px',borderRadius:10,border:`2px solid ${sel===i?g.co:'var(--border)'}`,background:sel===i?g.co+'20':'transparent',cursor:'pointer',textAlign:'center'}}>
      <div style={{fontSize:18,fontWeight:800,color:g.co,fontFamily:'var(--f-mono)'}}>{g.m}</div>
      <div style={{fontSize:8,fontWeight:600,color:'var(--text2)',marginTop:2}}>{g.n[lang]}</div>
    </button>)}</div>
    {s?<div style={{padding:14,borderRadius:12,border:`1px solid ${s.co}44`,background:'var(--card)',marginTop:4}}>
      <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
        <div style={{width:40,height:40,borderRadius:'50%',background:s.co+'33',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,fontWeight:800,color:s.co,fontFamily:'var(--f-mono)'}}>{s.m}</div>
        <div><div style={{fontSize:15,fontWeight:600}}>{s.n[lang]}</div><div style={{fontSize:11,color:'var(--text3)'}}>{s.ex[lang]}</div></div>
      </div>
      {s.gems.length>0&&<div style={{marginTop:8}}><div style={{fontSize:11,fontWeight:600,color:'var(--text2)',marginBottom:4}}>{lang==='tr'?'Bu aralıktaki taşlar:':lang==='en'?'Gems at this level:':'الأحجار في هذا المستوى:'}</div>
      {s.gems.map((g,i)=><div key={i} style={{fontSize:12,color:'var(--text)',padding:'3px 0',borderBottom:'1px solid var(--border)'}}>{g}</div>)}</div>}
    </div>:<div style={{textAlign:'center',padding:16,color:'var(--text3)',fontSize:13}}>{lang==='tr'?'Bir sertlik derecesi seçin':'Select a hardness level'}</div>}
  </div>
}

/* ── TOOL 38: Birthstone Finder ── */
function BirthstoneFinder({lang}){
  const[month,setMonth]=useState(new Date().getMonth());
  const data=[
    {m:{tr:'Ocak',en:'January',ar:'يناير'},s:'♑',g:[{n:{tr:'Garnet',en:'Garnet',ar:'عقيق'},co:'#8B0000',h:'6.5-7.5'}]},
    {m:{tr:'Şubat',en:'February',ar:'فبراير'},s:'♒',g:[{n:{tr:'Ametist',en:'Amethyst',ar:'جمشت'},co:'#9B59B6',h:'7'}]},
    {m:{tr:'Mart',en:'March',ar:'مارس'},s:'♓',g:[{n:{tr:'Akvamarin',en:'Aquamarine',ar:'أكوامارين'},co:'#7FDBFF',h:'7.5-8'}]},
    {m:{tr:'Nisan',en:'April',ar:'أبريل'},s:'♈',g:[{n:{tr:'Pırlanta',en:'Diamond',ar:'ألماس'},co:'#E8E8E8',h:'10'}]},
    {m:{tr:'Mayıs',en:'May',ar:'مايو'},s:'♉',g:[{n:{tr:'Zümrüt',en:'Emerald',ar:'زمرد'},co:'#50C878',h:'7.5-8'}]},
    {m:{tr:'Haziran',en:'June',ar:'يونيو'},s:'♊',g:[{n:{tr:'İnci',en:'Pearl',ar:'لؤلؤ'},co:'#FDEBD0',h:'2.5-4.5'},{n:{tr:'Ay Taşı',en:'Moonstone',ar:'حجر القمر'},co:'#D5DBDB',h:'6-6.5'}]},
    {m:{tr:'Temmuz',en:'July',ar:'يوليو'},s:'♋',g:[{n:{tr:'Yakut',en:'Ruby',ar:'ياقوت'},co:'#E0115F',h:'9'}]},
    {m:{tr:'Ağustos',en:'August',ar:'أغسطس'},s:'♌',g:[{n:{tr:'Peridot',en:'Peridot',ar:'زبرجد'},co:'#9ACD32',h:'6.5-7'}]},
    {m:{tr:'Eylül',en:'September',ar:'سبتمبر'},s:'♍',g:[{n:{tr:'Safir',en:'Sapphire',ar:'ياقوت أزرق'},co:'#0F52BA',h:'9'}]},
    {m:{tr:'Ekim',en:'October',ar:'أكتوبر'},s:'♎',g:[{n:{tr:'Opal',en:'Opal',ar:'أوبال'},co:'#FF6347',h:'5.5-6.5'}]},
    {m:{tr:'Kasım',en:'November',ar:'نوفمبر'},s:'♏',g:[{n:{tr:'Topaz',en:'Topaz',ar:'توباز'},co:'#FFA500',h:'8'},{n:{tr:'Sitrin',en:'Citrine',ar:'سترين'},co:'#F39C12',h:'7'}]},
    {m:{tr:'Aralık',en:'December',ar:'ديسمبر'},s:'♐',g:[{n:{tr:'Tanzanit',en:'Tanzanite',ar:'تنزانيت'},co:'#6C3483',h:'6-7'},{n:{tr:'Turkuaz',en:'Turquoise',ar:'فيروز'},co:'#40E0D0',h:'5-6'}]},
  ];
  const d=data[month];
  return<div className="tm-tool">
    <label className="calc-label">{lang==='tr'?'Doğum Ayınız':lang==='en'?'Your Birth Month':'شهر ميلادك'}</label>
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:6,marginBottom:16}}>
      {data.map((m,i)=><button key={i} onClick={()=>setMonth(i)} style={{padding:'8px 4px',borderRadius:10,border:`2px solid ${month===i?d.g[0].co:'var(--border)'}`,background:month===i?d.g[0].co+'18':'transparent',cursor:'pointer',textAlign:'center'}}>
        <div style={{fontSize:16}}>{m.s}</div><div style={{fontSize:9,fontWeight:600}}>{m.m[lang]}</div>
      </button>)}
    </div>
    <div style={{padding:16,borderRadius:14,border:`1px solid ${d.g[0].co}44`,background:'var(--card)'}}>
      <div style={{fontSize:11,color:'var(--text3)',marginBottom:8}}>{d.m[lang]} {d.s}</div>
      {d.g.map((gem,i)=><div key={i} style={{display:'flex',alignItems:'center',gap:12,marginBottom:i<d.g.length-1?10:0}}>
        <div style={{width:44,height:44,borderRadius:'50%',background:gem.co,boxShadow:`0 0 16px ${gem.co}55`}}/>
        <div><div style={{fontWeight:700,fontSize:15}}>{gem.n[lang]}</div><div style={{fontSize:11,color:'var(--text3)'}}>Mohs: {gem.h}</div></div>
      </div>)}
    </div>
  </div>
}

/* ── TOOL 39: Gem Identifier ── */
function GemIdentifier({lang}){
  const[color,setColor]=useState('red');const[hardness,setHardness]=useState('high');const[transparency,setTransparency]=useState('transparent');
  const colors=[{id:'red',l:{tr:'Kırmızı',en:'Red',ar:'أحمر'},co:'#E0115F'},{id:'blue',l:{tr:'Mavi',en:'Blue',ar:'أزرق'},co:'#0F52BA'},{id:'green',l:{tr:'Yeşil',en:'Green',ar:'أخضر'},co:'#50C878'},{id:'purple',l:{tr:'Mor',en:'Purple',ar:'بنفسجي'},co:'#9B59B6'},{id:'yellow',l:{tr:'Sarı',en:'Yellow',ar:'أصفر'},co:'#F1C40F'},{id:'white',l:{tr:'Beyaz/Renksiz',en:'Colorless',ar:'عديم اللون'},co:'#E8E8E8'},{id:'black',l:{tr:'Siyah',en:'Black',ar:'أسود'},co:'#333'}];
  const db={red:{high:['Yakut (Ruby)','Garnet (Pyrope)','Spinel'],medium:['Garnet','Rubellite Turmalin'],low:['Mercan (Coral)']},blue:{high:['Safir (Sapphire)','Tanzanit'],medium:['Akvamarin','Topaz','Lapis Lazuli'],low:['Turkuaz']},green:{high:['Zümrüt (Emerald)','Tsavorite'],medium:['Peridot','Yeşim (Jade)','Turmalin'],low:['Malakit']},purple:{high:['Safir (Purple)'],medium:['Ametist','Tanzanit'],low:[]},yellow:{high:['Sarı Safir','Chrysoberyl'],medium:['Sitrin','Topaz'],low:['Kehribar (Amber)']},white:{high:['Pırlanta (Diamond)','Beyaz Safir','Moissanite'],medium:['Beyaz Topaz','Zirkon'],low:['Ay Taşı','Opal']},black:{high:[],medium:['Siyah Spinel','Oniks'],low:['Oltu Taşı (Jet)']}};
  const results=db[color]?.[hardness]||[];
  const L={tr:['Renk','Sertlik Hissi','Yüksek (çelik çizmez)','Orta','Düşük (tırnakla çizilebilir)','Olası Taşlar:','Kesin tanı için gemolojik test gerekir.'],en:['Color','Hardness Feel','High (steel won\'t scratch)','Medium','Low (fingernail can scratch)','Possible Gems:','Gemological testing required for definitive identification.'],ar:['اللون','الإحساس بالصلابة','عالية','متوسطة','منخفضة','الأحجار المحتملة:','يلزم فحص جمولوجي للتحديد النهائي.']}[lang];
  return<div className="tm-tool">
    <label className="calc-label">{L[0]}</label>
    <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:12}}>{colors.map(c=><button key={c.id} onClick={()=>setColor(c.id)} style={{width:40,height:40,borderRadius:'50%',background:c.co,border:`3px solid ${color===c.id?'var(--text)':'transparent'}`,cursor:'pointer',boxShadow:color===c.id?`0 0 12px ${c.co}66`:'none'}} title={c.l[lang]}/>)}</div>
    <label className="calc-label">{L[1]}</label>
    <div style={{display:'flex',gap:6,marginBottom:14}}>{['high','medium','low'].map((h,i)=><button key={h} onClick={()=>setHardness(h)} style={{flex:1,padding:'10px 6px',borderRadius:10,border:`2px solid ${hardness===h?'var(--silver)':'var(--border)'}`,background:hardness===h?'rgba(192,192,192,0.1)':'transparent',cursor:'pointer',fontSize:11,fontWeight:600,color:hardness===h?'var(--text)':'var(--text3)'}}>{L[2+i]}</button>)}</div>
    <div style={{padding:14,borderRadius:12,background:'var(--card)',border:'1px solid var(--border)'}}>
      <div style={{fontSize:12,fontWeight:600,color:'var(--text2)',marginBottom:8}}>{L[5]}</div>
      {results.length>0?results.map((r,i)=><div key={i} style={{display:'flex',alignItems:'center',gap:8,padding:'6px 0',borderBottom:i<results.length-1?'1px solid var(--border)':'none'}}>
        <div style={{width:8,height:8,borderRadius:'50%',background:colors.find(c=>c.id===color)?.co}}/>
        <span style={{fontSize:13,fontWeight:500}}>{r}</span>
      </div>):<div style={{color:'var(--text3)',fontSize:12}}>{lang==='tr'?'Bu kombinasyonda taş bulunamadı.':'No gems found for this combination.'}</div>}
      <div style={{fontSize:'.68rem',color:'var(--text3)',marginTop:10,fontStyle:'italic'}}>{L[6]}</div>
    </div>
  </div>
}

/* ── TOOL 40: Cut Comparator (Visual) ── */
function CutComparator({lang}){
  const[sel,setSel]=useState([0,1]);
  const cuts=[
    {id:'round',n:{tr:'Round Brilliant',en:'Round Brilliant',ar:'بريلانت دائري'},f:58,pop:75,bri:10,fire:8,sci:10,w:1.0,h:1.0,shape:'circle'},
    {id:'princess',n:{tr:'Princess',en:'Princess',ar:'أميرة'},f:76,pop:12,bri:9,fire:7,sci:9,w:1.0,h:1.0,shape:'square'},
    {id:'emerald',n:{tr:'Emerald',en:'Emerald',ar:'زمرد'},f:57,pop:4,bri:6,fire:5,sci:6,w:0.75,h:1.0,shape:'rect'},
    {id:'oval',n:{tr:'Oval',en:'Oval',ar:'بيضاوي'},f:58,pop:8,bri:9,fire:7,sci:8,w:0.68,h:1.0,shape:'oval'},
    {id:'cushion',n:{tr:'Cushion',en:'Cushion',ar:'وسادة'},f:64,pop:7,bri:8,fire:9,sci:7,w:0.9,h:1.0,shape:'cushion'},
    {id:'pear',n:{tr:'Pear',en:'Pear',ar:'كمثرى'},f:58,pop:4,bri:8,fire:7,sci:8,w:0.62,h:1.0,shape:'pear'},
    {id:'marquise',n:{tr:'Marquise',en:'Marquise',ar:'ماركيز'},f:58,pop:2,bri:8,fire:7,sci:8,w:0.5,h:1.0,shape:'marquise'},
    {id:'heart',n:{tr:'Heart',en:'Heart',ar:'قلب'},f:59,pop:2,bri:7,fire:7,sci:7,w:0.9,h:1.0,shape:'heart'},
    {id:'asscher',n:{tr:'Asscher',en:'Asscher',ar:'أشر'},f:58,pop:2,bri:6,fire:5,sci:6,w:1.0,h:1.0,shape:'square'},
    {id:'radiant',n:{tr:'Radiant',en:'Radiant',ar:'راديانت'},f:70,pop:3,bri:9,fire:8,sci:8,w:0.82,h:1.0,shape:'rect'},
  ];
  const toggle=(i)=>{if(sel.includes(i)){if(sel.length>1)setSel(sel.filter(x=>x!==i))}else if(sel.length<3)setSel([...sel,i])};
  const selCuts=sel.map(i=>cuts[i]);
  const bars=[{k:'bri',l:{tr:'Parlaklık',en:'Brilliance',ar:'البريق'},co:'#B9F2FF'},{k:'fire',l:{tr:'Ateş',en:'Fire',ar:'النار'},co:'#FF6B6B'},{k:'sci',l:{tr:'Işıltı',en:'Scintillation',ar:'التلألؤ'},co:'#FFD93D'}];
  const shapeSVG=(s,w,h)=>{const sz=48;
    if(s==='circle')return`<circle cx="${sz/2}" cy="${sz/2}" r="${sz*0.42}" fill="none" stroke="currentColor" stroke-width="1.5"/>`;
    if(s==='square')return`<rect x="${sz*0.1}" y="${sz*0.1}" width="${sz*0.8}" height="${sz*0.8}" fill="none" stroke="currentColor" stroke-width="1.5"/>`;
    if(s==='rect')return`<rect x="${sz*0.15}" y="${sz*0.08}" width="${sz*0.7}" height="${sz*0.84}" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>`;
    if(s==='oval')return`<ellipse cx="${sz/2}" cy="${sz/2}" rx="${sz*0.32}" ry="${sz*0.42}" fill="none" stroke="currentColor" stroke-width="1.5"/>`;
    if(s==='cushion')return`<rect x="${sz*0.1}" y="${sz*0.1}" width="${sz*0.8}" height="${sz*0.8}" rx="12" fill="none" stroke="currentColor" stroke-width="1.5"/>`;
    if(s==='pear')return`<path d="M${sz/2} ${sz*0.08} Q${sz*0.85} ${sz*0.45} ${sz*0.7} ${sz*0.75} Q${sz/2} ${sz*0.95} ${sz*0.3} ${sz*0.75} Q${sz*0.15} ${sz*0.45} ${sz/2} ${sz*0.08}Z" fill="none" stroke="currentColor" stroke-width="1.5"/>`;
    if(s==='marquise')return`<ellipse cx="${sz/2}" cy="${sz/2}" rx="${sz*0.22}" ry="${sz*0.44}" fill="none" stroke="currentColor" stroke-width="1.5"/>`;
    if(s==='heart')return`<path d="M${sz/2} ${sz*0.9} Q${sz*0.05} ${sz*0.55} ${sz*0.15} ${sz*0.3} Q${sz*0.25} ${sz*0.1} ${sz/2} ${sz*0.3} Q${sz*0.75} ${sz*0.1} ${sz*0.85} ${sz*0.3} Q${sz*0.95} ${sz*0.55} ${sz/2} ${sz*0.9}Z" fill="none" stroke="currentColor" stroke-width="1.5"/>`;
    return`<circle cx="${sz/2}" cy="${sz/2}" r="${sz*0.4}" fill="none" stroke="currentColor" stroke-width="1.5"/>`;
  };
  return<div className="tm-tool" style={{gap:8}}>
    <div style={{fontSize:11,color:'var(--text3)',marginBottom:4}}>{lang==='tr'?'2-3 kesim seçerek karşılaştırın':lang==='en'?'Select 2-3 cuts to compare':'اختر ٢-٣ قطع للمقارنة'}</div>
    <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:12}}>{cuts.map((c,i)=><button key={c.id} onClick={()=>toggle(i)} style={{padding:'6px 10px',borderRadius:8,border:`2px solid ${sel.includes(i)?'#B9F2FF':'var(--border)'}`,background:sel.includes(i)?'rgba(185,242,255,0.1)':'transparent',cursor:'pointer',fontSize:11,fontWeight:600,color:sel.includes(i)?'#7DD3FC':'var(--text3)'}}>{c.n[lang]}</button>)}</div>
    <div style={{display:'flex',gap:12,justifyContent:'center',marginBottom:16}}>{selCuts.map(c=><div key={c.id} style={{textAlign:'center'}}>
      <svg width="48" height="48" viewBox="0 0 48 48" style={{color:'#B9F2FF'}} dangerouslySetInnerHTML={{__html:shapeSVG(c.shape)}}/>
      <div style={{fontSize:10,fontWeight:600,marginTop:4}}>{c.n[lang]}</div>
      <div style={{fontSize:9,color:'var(--text3)'}}>{c.f} facet</div>
    </div>)}</div>
    {bars.map(b=><div key={b.k} style={{marginBottom:10}}>
      <div style={{fontSize:10,fontWeight:600,color:'var(--text2)',marginBottom:4}}>{b.l[lang]}</div>
      <div style={{display:'flex',gap:4,alignItems:'center'}}>{selCuts.map(c=><div key={c.id} style={{flex:1}}>
        <div style={{height:8,borderRadius:4,background:'var(--border)',overflow:'hidden'}}><div style={{width:`${c[b.k]*10}%`,height:'100%',background:b.co,borderRadius:4,transition:'width .4s'}}/></div>
        <div style={{fontSize:9,textAlign:'center',color:'var(--text3)',marginTop:2}}>{c.n[lang]} {c[b.k]}/10</div>
      </div>)}</div>
    </div>)}
    <div style={{marginTop:8,padding:10,borderRadius:10,background:'var(--card)',border:'1px solid var(--border)'}}>
      <div style={{fontSize:10,fontWeight:600,color:'var(--text2)',marginBottom:6}}>{lang==='tr'?'Popülerlik':lang==='en'?'Popularity':'الشعبية'}</div>
      {selCuts.map(c=><div key={c.id} style={{display:'flex',alignItems:'center',gap:8,marginBottom:4}}>
        <span style={{fontSize:11,fontWeight:600,width:80}}>{c.n[lang]}</span>
        <div style={{flex:1,height:6,borderRadius:3,background:'var(--border)'}}><div style={{width:`${c.pop}%`,height:'100%',background:'linear-gradient(90deg,#B9F2FF,#7DD3FC)',borderRadius:3}}/></div>
        <span style={{fontSize:10,fontFamily:'var(--f-mono)',color:'var(--text3)',width:30,textAlign:'right'}}>{c.pop}%</span>
      </div>)}
    </div>
  </div>
}

/* ── TOOL 41: Carat to mm Converter ── */
function CaratToMm({lang}){
  const[carat,setCarat]=useState(1);const[shape,setShape]=useState('round');
  const shapes=[
    {id:'round',n:{tr:'Round',en:'Round',ar:'دائري'},calc:c=>({w:(6.5*Math.pow(c,1/3)).toFixed(1),h:(6.5*Math.pow(c,1/3)).toFixed(1)})},
    {id:'princess',n:{tr:'Princess',en:'Princess',ar:'أميرة'},calc:c=>({w:(5.5*Math.pow(c,1/3)).toFixed(1),h:(5.5*Math.pow(c,1/3)).toFixed(1)})},
    {id:'emerald',n:{tr:'Emerald',en:'Emerald',ar:'زمرد'},calc:c=>({w:(5.0*Math.pow(c,1/3)).toFixed(1),h:(6.9*Math.pow(c,1/3)).toFixed(1)})},
    {id:'oval',n:{tr:'Oval',en:'Oval',ar:'بيضاوي'},calc:c=>({w:(5.1*Math.pow(c,1/3)).toFixed(1),h:(7.7*Math.pow(c,1/3)).toFixed(1)})},
    {id:'cushion',n:{tr:'Cushion',en:'Cushion',ar:'وسادة'},calc:c=>({w:(5.8*Math.pow(c,1/3)).toFixed(1),h:(5.8*Math.pow(c,1/3)).toFixed(1)})},
    {id:'pear',n:{tr:'Pear',en:'Pear',ar:'كمثرى'},calc:c=>({w:(5.2*Math.pow(c,1/3)).toFixed(1),h:(8.0*Math.pow(c,1/3)).toFixed(1)})},
    {id:'marquise',n:{tr:'Marquise',en:'Marquise',ar:'ماركيز'},calc:c=>({w:(4.2*Math.pow(c,1/3)).toFixed(1),h:(9.8*Math.pow(c,1/3)).toFixed(1)})},
    {id:'heart',n:{tr:'Heart',en:'Heart',ar:'قلب'},calc:c=>({w:(6.0*Math.pow(c,1/3)).toFixed(1),h:(6.0*Math.pow(c,1/3)).toFixed(1)})},
    {id:'radiant',n:{tr:'Radiant',en:'Radiant',ar:'راديانت'},calc:c=>({w:(5.3*Math.pow(c,1/3)).toFixed(1),h:(6.8*Math.pow(c,1/3)).toFixed(1)})},
  ];
  const active=shapes.find(s=>s.id===shape);
  const dim=active.calc(carat);
  const ref=[0.25,0.5,0.75,1.0,1.5,2.0,3.0].map(c=>({ct:c,...active.calc(c)}));
  return<div className="tm-tool">
    <label className="calc-label">{lang==='tr'?'Karat':lang==='en'?'Carat':'القيراط'}</label>
    <input type="number" className="calc-input" value={carat} onChange={e=>setCarat(Math.max(0.1,+e.target.value))} min="0.1" max="20" step="0.01" inputMode="decimal"/>
    <label className="calc-label" style={{marginTop:10}}>{lang==='tr'?'Kesim Şekli':lang==='en'?'Cut Shape':'شكل القطع'}</label>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:6,marginBottom:14}}>
      {shapes.map(s=><button key={s.id} onClick={()=>setShape(s.id)} style={{padding:'8px 6px',borderRadius:8,border:`2px solid ${shape===s.id?'#B9F2FF':'var(--border)'}`,background:shape===s.id?'rgba(185,242,255,0.08)':'transparent',cursor:'pointer',fontSize:11,fontWeight:600,color:shape===s.id?'#7DD3FC':'var(--text3)'}}>{s.n[lang]}</button>)}
    </div>
    <div className="calc-result" style={{marginTop:8}}>
      <div className="calc-result-num" style={{color:'#B9F2FF'}}>{dim.w} × {dim.h} mm</div>
      <div className="calc-result-label">{carat} ct {active.n[lang]}</div>
    </div>
    <div style={{marginTop:14,padding:10,borderRadius:10,background:'var(--card)',border:'1px solid var(--border)'}}>
      <div style={{fontSize:10,fontWeight:600,color:'var(--text2)',marginBottom:6}}>{lang==='tr'?'Referans Tablosu':lang==='en'?'Reference Table':'جدول مرجعي'}</div>
      <div style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:'4px 12px',fontSize:11}}>
        <span style={{fontWeight:700,color:'var(--text3)'}}>ct</span><span style={{fontWeight:700,color:'var(--text3)'}}>mm</span>
        {ref.map(r=><React.Fragment key={r.ct}>
          <span style={{fontFamily:'var(--f-mono)',color:'var(--text2)'}}>{r.ct}</span>
          <span style={{fontFamily:'var(--f-mono)',color:'#7DD3FC'}}>{r.w}×{r.h}</span>
        </React.Fragment>)}
      </div>
    </div>
  </div>
}

/* ── TOOL 42: AI Jewelry Advisor (Faz 4.1) ── */
function JewelryAIAdvisor({ lang }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  const SUGGESTIONS = {
    tr: ['18K ve 14K altın farkı nedir?','Pırlanta alırken nelere dikkat etmeliyim?','Gümüş takım nasıl temizlenir?','Yatırım için hangi metal?','Nişan yüzüğü rehberi','Zümrüt mü yakut mu?'],
    en: ['What\'s the difference between 18K and 14K?','What to look for when buying diamonds?','How to clean silver jewelry?','Which metal for investment?','Engagement ring guide','Emerald or ruby?'],
    ar: ['ما الفرق بين ١٨ و١٤ قيراط؟','ما يجب مراعاته عند شراء الألماس؟','كيف تنظف المجوهرات الفضية؟','أي معدن للاستثمار؟','دليل خاتم الخطوبة','زمرد أم ياقوت؟']
  };

  const SYSTEM_PROMPT = `You are JewelPedi AI — an expert jewelry, gemstone, and precious metals advisor embedded in a comprehensive encyclopedia app. You have deep knowledge of:
- Silver (925 sterling, alloys, care, hallmarks)
- Gold (karat systems 8K-24K, colors, investment, cultural significance)
- Platinum group metals (Pt, Pd, Rh)
- Diamonds (4C grading, certifications, lab-grown vs natural)
- Colored gemstones (emerald, ruby, sapphire, semi-precious)
- Jewelry care, buying guides, and cultural traditions
- Market trends, investment strategies, pricing

Guidelines:
- Respond in ${lang === 'tr' ? 'Turkish' : lang === 'ar' ? 'Arabic' : 'English'}
- Be concise (2-4 paragraphs max), warm, and knowledgeable
- Use practical advice the user can act on
- When relevant, suggest specific karat/purity levels with reasons
- Format key terms with **bold**
- Never recommend specific brands or stores
- If asked about pricing, give general ranges and factors, not specific prices
- Always mention if professional appraisal is recommended for high-value items`;

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  const sendMessage = useCallback(async (text) => {
    if (!text.trim() || loading) return;
    const userMsg = { role: 'user', content: text.trim() };
    const newMsgs = [...messages, userMsg];
    setMessages(newMsgs);
    setInput('');
    setLoading(true);
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMsgs.map(m => ({ role: m.role, content: m.content })),
        })
      });
      const data = await response.json();
      const assistantText = data.content?.map(c => c.type === 'text' ? c.text : '').join('') || (lang === 'tr' ? 'Yanıt alınamadı, tekrar deneyin.' : lang === 'ar' ? 'لم يتم استلام الرد، حاول مرة أخرى.' : 'Could not get response, please try again.');
      setMessages(prev => [...prev, { role: 'assistant', content: assistantText }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: lang === 'tr' ? '⚠️ Bağlantı hatası. Lütfen tekrar deneyin.' : lang === 'ar' ? '⚠️ خطأ في الاتصال. يرجى المحاولة مرة أخرى.' : '⚠️ Connection error. Please try again.' }]);
    }
    setLoading(false);
    inputRef.current?.focus();
  }, [messages, loading, lang]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input); }
  }, [input, sendMessage]);

  // Simple markdown-ish rendering: **bold** → <strong>
  // Sprint 3.2: sanitize edilmiş HTML döndürür
  const renderContent = (text) => {
    const html = (text || '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>');
    return sanitizeAI(html);
  };

  const welcomeMsg = {
    tr: '💎 Merhaba! Ben JewelPedi AI asistanınızım. Gümüş, altın, pırlanta, değerli taşlar ve takı hakkında her sorunuza yanıt verebilirim. Ne sormak istersiniz?',
    en: '💎 Hello! I\'m your JewelPedi AI assistant. I can answer any questions about silver, gold, diamonds, gemstones and jewelry. What would you like to know?',
    ar: '💎 مرحباً! أنا مساعد JewelPedi الذكي. يمكنني الإجابة على أي أسئلة حول الفضة والذهب والألماس والأحجار الكريمة والمجوهرات. ماذا تريد أن تعرف؟'
  };

  return (
    <div className="ai-chat-container">
      <div className="ai-chat-messages" ref={scrollRef}>
        <div className="ai-chat-msg system">{welcomeMsg[lang]}</div>
        {messages.map((m, i) => (
          m.role === 'assistant' ? (
            <div key={i} className="ai-chat-msg assistant"
              dangerouslySetInnerHTML={{ __html: renderContent(m.content) }} />
          ) : (
            <div key={i} className="ai-chat-msg user">{m.content}</div>
          )
        ))}
        {loading && (
          <div className="ai-chat-typing">
            <span /><span /><span />
          </div>
        )}
        {messages.length === 0 && !loading && (
          <div className="ai-chat-suggestions">
            {(SUGGESTIONS[lang] || SUGGESTIONS.en).slice(0, 4).map((s, i) => (
              <button key={i} className="ai-chat-suggest-btn" onClick={() => sendMessage(s)}>{s}</button>
            ))}
          </div>
        )}
      </div>
      <div className="ai-chat-input-row">
        <input ref={inputRef} className="ai-chat-input" value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown} placeholder={lang === 'tr' ? 'Takı hakkında bir soru sorun...' : lang === 'ar' ? 'اسأل سؤالاً عن المجوهرات...' : 'Ask about jewelry...'}
          disabled={loading} maxLength={500} />
        <button className="ai-chat-send" onClick={() => sendMessage(input)} disabled={loading || !input.trim()}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
        </button>
      </div>
    </div>
  );
}

/* ── TOOL 43: Photo Gem/Metal Identifier (Faz 4.1) ── */
function PhotoGemIdentifier({ lang }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef(null);

  const L = {
    tr: { title: 'Fotoğrafla Taş/Metal Tanımlama', desc: 'Bir taş veya mücevher fotoğrafı yükleyin, AI tanımlasın.',
      upload: '📸 Fotoğraf Seç', camera: '📷 Kamera', analyzing: 'Analiz ediliyor...', retry: 'Yeni Fotoğraf',
      tip: 'İpucu: Net, yakın çekim ve iyi aydınlatılmış fotoğraflar en iyi sonucu verir.',
      error: 'Analiz yapılamadı. Lütfen tekrar deneyin.' },
    en: { title: 'Photo Gem/Metal Identifier', desc: 'Upload a photo of a stone or jewelry, let AI identify it.',
      upload: '📸 Choose Photo', camera: '📷 Camera', analyzing: 'Analyzing...', retry: 'New Photo',
      tip: 'Tip: Clear, close-up, well-lit photos give the best results.',
      error: 'Analysis failed. Please try again.' },
    ar: { title: 'تعريف الحجر/المعدن بالصورة', desc: 'ارفع صورة لحجر أو مجوهرات، ودع الذكاء الاصطناعي يحددها.',
      upload: '📸 اختر صورة', camera: '📷 الكاميرا', analyzing: 'جار التحليل...', retry: 'صورة جديدة',
      tip: 'نصيحة: الصور القريبة والواضحة والمضاءة جيداً تعطي أفضل النتائج.',
      error: 'فشل التحليل. يرجى المحاولة مرة أخرى.' }
  }[lang] || {};

  const SYSTEM = `You are a gemstone and precious metal identification expert. Analyze the image and identify what you see. Respond in ${lang === 'tr' ? 'Turkish' : lang === 'ar' ? 'Arabic' : 'English'}.

Provide:
1. **Identification**: Most likely stone/metal name
2. **Confidence**: High/Medium/Low
3. **Key Features**: Color, luster, transparency, visible inclusions
4. **Estimated Type**: Natural/Synthetic/Imitation/Unknown
5. **Care Tips**: Brief care recommendation
6. **Similar Stones**: What it could be confused with

If you cannot identify the item or if the image doesn't show a gemstone/metal, say so clearly. Always recommend professional appraisal for valuable items. Format with **bold** headers.`;

  const handleFile = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) return;
    setResult(null);
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
      setImage(reader.result.split(',')[1]);
    };
    reader.readAsDataURL(file);
  }, []);

  const analyze = useCallback(async () => {
    if (!image || loading) return;
    setLoading(true); setResult(null);
    try {
      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514', max_tokens: 1000,
          system: SYSTEM,
          messages: [{ role: 'user', content: [
            { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: image } },
            { type: 'text', text: lang === 'tr' ? 'Bu taş veya metali tanımla.' : lang === 'ar' ? 'حدد هذا الحجر أو المعدن.' : 'Identify this stone or metal.' }
          ]}]
        })
      });
      const data = await resp.json();
      const text = data.content?.map(c => c.type === 'text' ? c.text : '').join('') || L.error;
      setResult(text);
    } catch { setResult(L.error); }
    setLoading(false);
  }, [image, loading, lang]);

  useEffect(() => { if (image) analyze(); }, [image]);

  // Sprint 3.2: sanitize edilmiş HTML döndürür
  const renderResult = (text) => sanitizeAI((text || '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>'));

  return (
    <div className="photo-id-container">
      <p className="photo-id-desc">{L.desc}</p>
      {!preview ? (
        <div className="photo-id-upload-area">
          <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} style={{ display: 'none' }} />
          <button className="photo-id-btn" onClick={() => { fileRef.current.removeAttribute('capture'); fileRef.current.click(); }}>
            {L.upload}
          </button>
          <button className="photo-id-btn secondary" onClick={() => { fileRef.current.setAttribute('capture', 'environment'); fileRef.current.click(); }}>
            {L.camera}
          </button>
          <p className="photo-id-tip">{L.tip}</p>
        </div>
      ) : (
        <div className="photo-id-result-area">
          <div className="photo-id-preview">
            <img src={preview} alt="Upload" />
          </div>
          {loading ? (
            <div className="photo-id-loading">
              <div className="ai-chat-typing"><span /><span /><span /></div>
              <p>{L.analyzing}</p>
            </div>
          ) : result ? (
            <div className="photo-id-result" dangerouslySetInnerHTML={{ __html: renderResult(result) }} />
          ) : null}
          <button className="photo-id-btn" onClick={() => { setPreview(null); setImage(null); setResult(null); }}>
            {L.retry}
          </button>
        </div>
      )}
    </div>
  );
}

/* ── TOOL 44: Article Summarizer / TL;DR (Faz 4.1) ── */
function ArticleSummarizer({ lang }) {
  const [selectedId, setSelectedId] = useState('');
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);

  const L = {
    tr: { title: 'Makale Özetleyici', desc: 'Bir makale seçin, AI kısa bir özet oluştursun.', select: 'Makale seçin...',
      go: 'Özetle', loading: 'Özetleniyor...', error: 'Özet oluşturulamadı.', tldr: 'TL;DR', keyPoints: 'Ana Noktalar', readTime: 'Okuma süresi' },
    en: { title: 'Article Summarizer', desc: 'Select an article, let AI generate a brief summary.', select: 'Choose an article...',
      go: 'Summarize', loading: 'Summarizing...', error: 'Could not generate summary.', tldr: 'TL;DR', keyPoints: 'Key Points', readTime: 'Read time' },
    ar: { title: 'ملخص المقالات', desc: 'اختر مقالاً، ودع الذكاء الاصطناعي يولد ملخصاً موجزاً.', select: 'اختر مقالاً...',
      go: 'لخص', loading: 'جار التلخيص...', error: 'لم يتمكن من إنشاء الملخص.', tldr: 'TL;DR', keyPoints: 'النقاط الرئيسية', readTime: 'وقت القراءة' }
  }[lang] || {};

  const sortedArticles = useMemo(() => [...ARTICLES].sort((a, b) => (a[lang]?.t || '').localeCompare(b[lang]?.t || '')), [lang]);

  const summarize = useCallback(async () => {
    if (!selectedId || loading) return;
    const art = ARTICLES.find(a => a.id === Number(selectedId));
    if (!art) return;
    setLoading(true); setSummary(null);
    try {
      const content = getArticleContent(Number(selectedId), art);
      const rawHtml = content?.[lang] || content?.tr || '';
      const plainText = rawHtml.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 3000);
      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514', max_tokens: 600,
          messages: [{ role: 'user', content: `Summarize this article in ${lang === 'tr' ? 'Turkish' : lang === 'ar' ? 'Arabic' : 'English'}. Give:
1. A one-sentence TL;DR
2. 3-5 key bullet points (use • prefix)
3. One practical takeaway

Article title: "${art[lang]?.t}"
Content: ${plainText}` }]
        })
      });
      const data = await resp.json();
      const text = data.content?.map(c => c.type === 'text' ? c.text : '').join('') || L.error;
      setSummary(text);
    } catch { setSummary(L.error); }
    setLoading(false);
  }, [selectedId, loading, lang]);

  // Sprint 3.2: sanitize edilmiş HTML döndürür
  const renderSummary = (text) => sanitizeAI((text || '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>'));

  return (
    <div className="summarizer-container">
      <p className="summarizer-desc">{L.desc}</p>
      <select className="calc-select" value={selectedId} onChange={e => { setSelectedId(e.target.value); setSummary(null); }}>
        <option value="">{L.select}</option>
        {sortedArticles.map(a => <option key={a.id} value={a.id}>{a[lang]?.t} ({a.min} {lang === 'tr' ? 'dk' : 'min'})</option>)}
      </select>
      <button className="photo-id-btn" style={{ marginTop: 12, width: '100%' }} onClick={summarize}
        disabled={!selectedId || loading}>
        {loading ? L.loading : L.go}
      </button>
      {loading && <div className="photo-id-loading" style={{ marginTop: 16 }}><div className="ai-chat-typing"><span /><span /><span /></div></div>}
      {summary && !loading && (
        <div className="summarizer-result" dangerouslySetInnerHTML={{ __html: renderSummary(summary) }} />
      )}
    </div>
  );
}

/* ── TOOL 45: Price Comparison Widget (Faz 4.4) ── */
function PriceComparisonWidget({ lang }) {
  const prices = useSilverPrice();
  const priceLoading = !prices?.silver;
  const [weight, setWeight] = useState(10);
  const [currency, setCurrency] = useState('try');

  const L = {
    tr: { title: 'Metal Fiyat Karşılaştırma', weight: 'Ağırlık (gram)', currency: 'Para Birimi',
      metal: 'Metal', purity: 'Ayar', priceG: 'Gram Fiyat', total: 'Toplam Değer', loading: 'Fiyatlar yükleniyor...',
      note: 'Canlı spot fiyatlar üzerinden hesaplanır. İşçilik dahil değildir.' },
    en: { title: 'Metal Price Comparison', weight: 'Weight (grams)', currency: 'Currency',
      metal: 'Metal', purity: 'Purity', priceG: 'Price/Gram', total: 'Total Value', loading: 'Loading prices...',
      note: 'Calculated from live spot prices. Labor costs not included.' },
    ar: { title: 'مقارنة أسعار المعادن', weight: 'الوزن (غرام)', currency: 'العملة',
      metal: 'المعدن', purity: 'العيار', priceG: 'السعر/غرام', total: 'القيمة الإجمالية', loading: 'جار تحميل الأسعار...',
      note: 'محسوب من الأسعار الفورية المباشرة. تكاليف العمل غير مشمولة.' }
  }[lang] || {};

  const tryRate = prices?.usdtry || 38;
  const ozToG = 31.1035;
  const silverUsdG = (prices?.silver || 32) / ozToG;
  const goldUsdG = (prices?.gold || 2400) / ozToG;
  const platUsdG = (prices?.platinum || 1000) / ozToG;
  const palUsdG = (prices?.palladium || 950) / ozToG;
  const rate = currency === 'try' ? tryRate : 1;
  const sym = currency === 'try' ? '₺' : '$';

  const rows = [
    { metal: lang==='tr'?'Gümüş':'Silver', emoji: '🥈', items: [
      { purity: '999', factor: 0.999 }, { purity: '925', factor: 0.925 }, { purity: '800', factor: 0.800 }
    ], baseG: silverUsdG },
    { metal: lang==='tr'?'Altın':'Gold', emoji: '🥇', items: [
      { purity: '24K (999)', factor: 0.999 }, { purity: '22K (916)', factor: 0.916 },
      { purity: '18K (750)', factor: 0.750 }, { purity: '14K (585)', factor: 0.585 }
    ], baseG: goldUsdG },
    { metal: lang==='tr'?'Platin':'Platinum', emoji: '⚪', items: [
      { purity: '950', factor: 0.950 }, { purity: '900', factor: 0.900 }
    ], baseG: platUsdG },
    { metal: lang==='tr'?'Paladyum':'Palladium', emoji: '🔘', items: [
      { purity: '950', factor: 0.950 }
    ], baseG: palUsdG },
  ];

  if (priceLoading) return <div className="tm-tool" style={{textAlign:'center',padding:30,color:'var(--text3)'}}>{L.loading}</div>;

  return (
    <div className="tm-tool price-comp">
      <div style={{display:'flex',gap:10,marginBottom:14}}>
        <div style={{flex:1}}>
          <label className="calc-label">{L.weight}</label>
          <input type="number" className="calc-input" value={weight} onChange={e=>setWeight(Math.max(0.1,+e.target.value))} min="0.1" step="0.5" inputMode="decimal"/>
        </div>
        <div style={{flex:1}}>
          <label className="calc-label">{L.currency}</label>
          <select className="calc-select" value={currency} onChange={e=>setCurrency(e.target.value)}>
            <option value="try">₺ TRY</option><option value="usd">$ USD</option>
          </select>
        </div>
      </div>
      <div className="price-comp-table">
        <div className="price-comp-header">
          <span>{L.metal}</span><span>{L.purity}</span><span>{L.priceG}</span><span>{L.total}</span>
        </div>
        {rows.map(r => r.items.map((item, i) => {
          const gPrice = r.baseG * item.factor * rate;
          const total = gPrice * weight;
          return (
            <div key={`${r.metal}-${item.purity}`} className="price-comp-row">
              <span className="price-comp-metal">{i === 0 ? `${r.emoji} ${r.metal}` : ''}</span>
              <span className="price-comp-purity">{item.purity}</span>
              <span className="price-comp-price">{sym}{gPrice.toFixed(2)}</span>
              <span className="price-comp-total">{sym}{total.toLocaleString(undefined,{maximumFractionDigits:0})}</span>
            </div>
          );
        }))}
      </div>
      <p style={{fontSize:'.7rem',color:'var(--text3)',marginTop:10,textAlign:'center'}}>{L.note}</p>
    </div>
  );
}

/* ── TOOL 46: Kuyumcu Haritası / Jeweler Map ── */
const JEWELER_DATA = [
  {name:{tr:"Kapalıçarşı",en:"Grand Bazaar",ar:"البازار الكبير"},city:"İstanbul",lat:41.0106,lng:28.9684,type:"bazaar",mat:"all",desc:{tr:"550+ kuyumcu dükkanı, 4000+ firma — dünyanın en büyük kapalı çarşısı",en:"550+ jewelry shops, 4000+ firms — world's largest covered bazaar",ar:"٥٥٠+ محل مجوهرات — أكبر بازار مسقوف في العالم"}},
  {name:{tr:"Kuyumcukent",en:"Kuyumcukent",ar:"كويومجوكنت"},city:"İstanbul",lat:41.0325,lng:28.8372,type:"center",mat:"all",desc:{tr:"Türkiye'nin en büyük kuyumculuk merkezi — 4.500+ firma, toptan ticaret",en:"Turkey's largest jewelry center — 4,500+ firms, wholesale trade",ar:"أكبر مركز مجوهرات في تركيا — ٤٥٠٠+ شركة"}},
  {name:{tr:"Midyat Gümüş Çarşısı",en:"Midyat Silver Bazaar",ar:"سوق فضة ميديات"},city:"Mardin",lat:37.4194,lng:41.3389,type:"craft",mat:"silver",desc:{tr:"Telkâri sanatının başkenti — Süryani ve Türk ustaları",en:"Capital of filigree art — Syriac and Turkish masters",ar:"عاصمة فن التخريم — أساتذة سريان وأتراك"}},
  {name:{tr:"Trabzon Kuyumcular Caddesi",en:"Trabzon Jewelers Street",ar:"شارع الصاغة طرابزون"},city:"Trabzon",lat:41.0027,lng:39.7168,type:"craft",mat:"gold",desc:{tr:"Hasır bilezik ve kazaz tespih merkezi — Karadeniz zanaatı",en:"Woven bracelet and kazaz prayer bead center — Black Sea craft",ar:"مركز الأساور المنسوجة ومسابح القزاز — حرف البحر الأسود"}},
  {name:{tr:"Ankara Kuyumcular Çarşısı",en:"Ankara Jewelers Bazaar",ar:"سوق الصاغة أنقرة"},city:"Ankara",lat:39.9334,lng:32.8597,type:"bazaar",mat:"all",desc:{tr:"Başkentin toptan ve perakende kuyumculuk merkezi",en:"Capital's wholesale and retail jewelry center",ar:"مركز المجوهرات بالجملة والتجزئة في العاصمة"}},
  {name:{tr:"İzmir Kemeraltı",en:"İzmir Kemeraltı",ar:"كمرالتي إزمير"},city:"İzmir",lat:38.4189,lng:27.1287,type:"bazaar",mat:"all",desc:{tr:"Ege'nin tarihi ticaret merkezi — altın ve gümüş dükkanları",en:"Aegean's historic trade center — gold and silver shops",ar:"مركز التجارة التاريخي لبحر إيجه"}},
  {name:{tr:"Konya İstanbul Gümüş",en:"Istanbul Silver (Konya)",ar:"إسطنبول غوموش (قونية)"},city:"Konya",lat:37.8746,lng:32.4932,type:"production",mat:"silver",desc:{tr:"JewelPedi sponsor — Türkiye'nin öncü gümüş üreticisi",en:"JewelPedi sponsor — Turkey's leading silver manufacturer",ar:"راعي JewelPedi — الشركة الرائدة في صناعة الفضة التركية"}},
  {name:{tr:"Erzurum Oltu Taşı Çarşısı",en:"Erzurum Oltu Stone Market",ar:"سوق حجر أولتو أرزروم"},city:"Erzurum",lat:39.9,lng:41.27,type:"craft",mat:"gemstone",desc:{tr:"Oltu taşı-gümüş kombinasyonu — dünyada eşsiz zanaat",en:"Oltu stone-silver combination — unique craft in the world",ar:"مزيج حجر أولتو والفضة — حرفة فريدة في العالم"}},
  {name:{tr:"Gaziantep Bakırcılar Çarşısı",en:"Gaziantep Coppersmiths Bazaar",ar:"سوق النحاسين غازي عنتاب"},city:"Gaziantep",lat:37.0662,lng:37.3833,type:"production",mat:"silver",desc:{tr:"Güneydoğu'nun en büyük gümüş üretim merkezi",en:"Southeast's largest silver production center",ar:"أكبر مركز إنتاج فضة في الجنوب الشرقي"}},
  {name:{tr:"Beypazarı Gümüşçüler",en:"Beypazarı Silversmiths",ar:"صاغة بيبازاري"},city:"Ankara",lat:40.1672,lng:31.9214,type:"craft",mat:"silver",desc:{tr:"Osmanlı gümüş işçiliği geleneği — butik atölyeler",en:"Ottoman silverwork tradition — boutique workshops",ar:"تقليد صياغة الفضة العثماني — ورش بوتيكية"}},
  {name:{tr:"Kastamonu Kazaziye",en:"Kastamonu Kazaziye",ar:"كازازية قسطموني"},city:"Kastamonu",lat:41.3887,lng:33.7765,type:"craft",mat:"silver",desc:{tr:"İnce gümüş tel örgü sanatı — 1000 iplikle işlenen takılar",en:"Fine silver wire weaving art — jewelry crafted with 1000 threads",ar:"فن نسج الأسلاك الفضية الدقيقة"}},
  {name:{tr:"Diyarbakır Gümüşçüler",en:"Diyarbakır Silversmiths",ar:"صاغة ديار بكر"},city:"Diyarbakır",lat:37.91,lng:40.24,type:"craft",mat:"silver",desc:{tr:"Telkâri ve savat (niello) işçiliği — tarihi suriçi çarşıları",en:"Filigree and niello work — historic walled city bazaars",ar:"التخريم والنيلو — أسواق المدينة التاريخية المسورة"}},
  {name:{tr:"Hatay Antakya Çarşısı",en:"Hatay Antakya Bazaar",ar:"سوق أنطاكيا حتاي"},city:"Hatay",lat:36.2,lng:36.16,type:"craft",mat:"silver",desc:{tr:"Levant etkisinde gümüş işçiliği — antik kültür mirası",en:"Levantine-influenced silverwork — ancient cultural heritage",ar:"صياغة فضة بتأثير شامي — تراث ثقافي عريق"}},
  {name:{tr:"Safranbolu Tarihi Çarşı",en:"Safranbolu Historic Bazaar",ar:"سوق سافرانبولو التاريخي"},city:"Karabük",lat:41.2536,lng:32.6938,type:"craft",mat:"silver",desc:{tr:"UNESCO Dünya Mirası — bakır ve gümüş dükkanları",en:"UNESCO World Heritage — copper and silver shops",ar:"تراث يونسكو العالمي — محلات النحاس والفضة"}},
  {name:{tr:"Bursa Kapalıçarşı",en:"Bursa Covered Bazaar",ar:"البازار المسقوف بورصة"},city:"Bursa",lat:40.1885,lng:29.061,type:"bazaar",mat:"gold",desc:{tr:"Osmanlı başkenti — altın takı ve ipek geleneği",en:"Ottoman capital — gold jewelry and silk tradition",ar:"العاصمة العثمانية — تقليد مجوهرات الذهب والحرير"}},
  {name:{tr:"Van Gümüş Atölyeleri",en:"Van Silver Workshops",ar:"ورش فضة وان"},city:"Van",lat:38.49,lng:43.38,type:"craft",mat:"silver",desc:{tr:"Urartu geleneğinde gümüş kemer ve takı — Van kedisi motifi",en:"Silver belts and jewelry in Urartian tradition — Van cat motif",ar:"أحزمة ومجوهرات فضية بتقليد أورارتو"}},
  {name:{tr:"Eskişehir Lületaşı Çarşısı",en:"Eskişehir Meerschaum Market",ar:"سوق كهرمان البحر أسكيشهير"},city:"Eskişehir",lat:39.78,lng:30.52,type:"craft",mat:"gemstone",desc:{tr:"Lületaşı-gümüş kombinasyonu — Odunpazarı el sanatları",en:"Meerschaum-silver combination — Odunpazarı handicrafts",ar:"مزيج الميرشوم والفضة — حرف أودونبازاري"}},
  {name:{tr:"Muğla / Bodrum Kuyumcuları",en:"Muğla / Bodrum Jewelers",ar:"صاغة موغلا/بودروم"},city:"Muğla",lat:37.035,lng:27.43,type:"bazaar",mat:"all",desc:{tr:"Turizm odaklı lüks takı — zultanit özel tasarımlar",en:"Tourism-focused luxury jewelry — zultanite specialty designs",ar:"مجوهرات فاخرة سياحية — تصاميم زلتانيت خاصة"}},
];
const JM_TYPES = {bazaar:{tr:"Çarşı",en:"Bazaar",ar:"سوق",c:"#E67E22",i:"🏪"},craft:{tr:"Zanaat",en:"Craft",ar:"حرف",c:"#8E44AD",i:"🔨"},production:{tr:"Üretim",en:"Production",ar:"إنتاج",c:"#27AE60",i:"🏭"},center:{tr:"Merkez",en:"Center",ar:"مركز",c:"#2980B9",i:"🏢"}};
const JM_MATS = {all:{tr:"Tümü",en:"All",ar:"الكل",c:"#888"},silver:{tr:"Gümüş",en:"Silver",ar:"فضة",c:"var(--silver)"},gold:{tr:"Altın",en:"Gold",ar:"ذهب",c:"var(--gold)"},gemstone:{tr:"Taş",en:"Gem",ar:"حجر",c:"#9B59B6"}};

function JewelerMap({lang}) {
  const mapRef = useRef(null);
  const mapObj = useRef(null);
  const [typeFilter, setTypeFilter] = useState('all');
  const [matFilter, setMatFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const markersRef = useRef([]);

  const filtered = useMemo(() => {
    return JEWELER_DATA.filter(j => {
      if (typeFilter !== 'all' && j.type !== typeFilter) return false;
      if (matFilter !== 'all' && j.mat !== matFilter && j.mat !== 'all') return false;
      return true;
    });
  }, [typeFilter, matFilter]);

  useEffect(() => {
    let L;
    (async () => {
      L = await import('leaflet');
      await import('leaflet/dist/leaflet.css');
      if (mapObj.current) { mapObj.current.remove(); mapObj.current = null; }
      if (!mapRef.current) return;
      const map = L.map(mapRef.current, {
        center: [39.0, 35.0],
        zoom: 6,
        zoomControl: true,
        attributionControl: false,
        scrollWheelZoom: true,
      });
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 18,
      }).addTo(map);
      mapObj.current = map;
      // Add markers
      markersRef.current.forEach(m => m.remove());
      markersRef.current = [];
      filtered.forEach(j => {
        const typeInfo = JM_TYPES[j.type] || JM_TYPES.bazaar;
        const icon = L.divIcon({
          html: `<div style="background:${typeInfo.c};width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;border:2px solid rgba(255,255,255,0.5);box-shadow:0 2px 8px rgba(0,0,0,0.4)">${typeInfo.i}</div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
          className: '',
        });
        const marker = L.marker([j.lat, j.lng], { icon }).addTo(map);
        marker.on('click', () => setSelected(j));
        markersRef.current.push(marker);
      });
      setTimeout(() => map.invalidateSize(), 200);
    })();
    return () => { if (mapObj.current) { mapObj.current.remove(); mapObj.current = null; } };
  }, [filtered]);

  const L = {
    tr: { title: "Türkiye Kuyumcu & Atölye Haritası", type: "Tür", mat: "Metal", all: "Tümü", count: "nokta", info: "Detaylar için işaretçiye tıklayın" },
    en: { title: "Turkey Jeweler & Workshop Map", type: "Type", mat: "Metal", all: "All", count: "points", info: "Click markers for details" },
    ar: { title: "خريطة الصاغة وورش العمل في تركيا", type: "النوع", mat: "المعدن", all: "الكل", count: "نقاط", info: "انقر على العلامات للتفاصيل" },
  }[lang] || {};

  return (
    <div className="tm-tool" style={{ gap: 8 }}>
      <div style={{fontSize:11,fontWeight:700,color:'var(--text2)',textAlign:'center',marginBottom:4}}>{L.title}</div>
      {/* Type filter */}
      <div style={{display:'flex',gap:4,flexWrap:'wrap',justifyContent:'center'}}>
        <button onClick={()=>setTypeFilter('all')} style={{padding:'4px 10px',borderRadius:12,border:`1.5px solid ${typeFilter==='all'?'var(--accent)':'var(--border)'}`,background:typeFilter==='all'?'rgba(192,192,192,0.1)':'transparent',color:typeFilter==='all'?'var(--accent)':'var(--text3)',fontSize:10,cursor:'pointer',fontWeight:600}}>{L.all}</button>
        {Object.entries(JM_TYPES).map(([k,v])=>(
          <button key={k} onClick={()=>setTypeFilter(k)} style={{padding:'4px 10px',borderRadius:12,border:`1.5px solid ${typeFilter===k?v.c:'var(--border)'}`,background:typeFilter===k?v.c+'18':'transparent',color:typeFilter===k?v.c:'var(--text3)',fontSize:10,cursor:'pointer',fontWeight:600}}>{v.i} {v[lang]}</button>
        ))}
      </div>
      {/* Material filter */}
      <div style={{display:'flex',gap:4,flexWrap:'wrap',justifyContent:'center'}}>
        {Object.entries(JM_MATS).map(([k,v])=>(
          <button key={k} onClick={()=>setMatFilter(k)} style={{padding:'3px 8px',borderRadius:10,border:`1px solid ${matFilter===k?'var(--accent)':'var(--border)'}`,background:matFilter===k?'rgba(192,192,192,0.08)':'transparent',color:matFilter===k?'var(--text)':'var(--text3)',fontSize:9,cursor:'pointer'}}>{v[lang]}</button>
        ))}
      </div>
      {/* Map container */}
      <div ref={mapRef} style={{width:'100%',height:320,borderRadius:14,overflow:'hidden',border:'1px solid var(--border)',background:'#1a1a2e'}}/>
      <div style={{textAlign:'center',fontSize:10,color:'var(--text3)'}}>{filtered.length} {L.count} · {L.info}</div>
      {/* Selected detail card */}
      {selected && (
        <div style={{padding:12,borderRadius:12,border:'1px solid var(--border)',background:'var(--card)',position:'relative'}}>
          <button onClick={()=>setSelected(null)} style={{position:'absolute',top:6,right:8,background:'none',border:'none',color:'var(--text3)',cursor:'pointer',fontSize:16}}>×</button>
          <div style={{fontWeight:700,fontSize:14,marginBottom:4}}>{JM_TYPES[selected.type]?.i} {selected.name[lang]}</div>
          <div style={{fontSize:11,color:'var(--text2)',marginBottom:4}}>{selected.city}</div>
          <div style={{fontSize:12,color:'var(--text)',lineHeight:1.5}}>{selected.desc[lang]}</div>
          <div style={{display:'flex',gap:6,marginTop:8}}>
            <span style={{fontSize:9,padding:'2px 8px',borderRadius:8,background:JM_TYPES[selected.type]?.c+'20',color:JM_TYPES[selected.type]?.c,fontWeight:600}}>{JM_TYPES[selected.type]?.[lang]}</span>
            <span style={{fontSize:9,padding:'2px 8px',borderRadius:8,background:'var(--card)',border:'1px solid var(--border)',color:'var(--text2)'}}>{JM_MATS[selected.mat]?.[lang]||selected.mat}</span>
          </div>
        </div>
      )}
      {/* List view */}
      <div style={{maxHeight:200,overflowY:'auto',display:'flex',flexDirection:'column',gap:4}}>
        {filtered.map((j,i)=>(
          <div key={i} onClick={()=>{setSelected(j);if(mapObj.current)mapObj.current.flyTo([j.lat,j.lng],10,{duration:0.6});}} style={{padding:8,borderRadius:10,border:'1px solid var(--border)',background:selected===j?'rgba(192,192,192,0.06)':'var(--card)',cursor:'pointer',display:'flex',gap:8,alignItems:'center',transition:'background .2s'}}>
            <span style={{fontSize:18}}>{JM_TYPES[j.type]?.i}</span>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontSize:12,fontWeight:600,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{j.name[lang]}</div>
              <div style={{fontSize:10,color:'var(--text3)'}}>{j.city}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const TOOL_COMPONENTS = { 0:PurityCalc,1:UnitConverter,2:RingSizer,3:QuizTool,4:ColorPalette,5:CarbonFootprint,6:PeriodicTable,7:KaratConverter,8:GemstoneGuide,9:CareGuide,10:WorldMapTool,11:TimelineTool,12:StampIdentifier,13:PriceAlert,14:ZakatCalc,15:PurityTestGuide,16:MetalComparator,17:JewelryCombinator,18:TurkeyAtlas,19:PriceTracker,20:EngravingPreview,21:InsuranceCalc,22:AdvancedQuiz,23:TarnishSimulator,24:WorldClock,25:PortfolioTracker,26:CertificateVerifier,27:BraceletSizer,28:NecklaceGuide,29:SilverPriceEstimator,30:GoldSilverRatio,31:CounterfeitDetection,32:MeltValueCalc,33:GoldKaratCalc,34:WeddingGoldPlanner,35:MetalDashboard,36:DiamondEstimator,37:MohsScale,38:BirthstoneFinder,39:GemIdentifier,40:CutComparator,41:CaratToMm,42:JewelryAIAdvisor,43:PhotoGemIdentifier,44:ArticleSummarizer,45:PriceComparisonWidget,46:JewelerMap };

// Tool → Related Article IDs mapping
const TOOL_ARTICLE_MAP = {
  0:[1,54],1:[24],2:[51,42],3:[1,5],5:[30,43],6:[5,24],7:[74,76],8:[65,110],9:[66,91],
  11:[2,16],12:[20,77],14:[19,29,83],15:[1,54],16:[3,137],17:[34,67],20:[35,4],21:[8,61],
  23:[55,66],25:[8,58,81],26:[20,102],27:[52],28:[53],30:[3,9],31:[1,39],32:[8,9,81],
  33:[74,76,80],34:[86,93],35:[8,81,139],36:[95,96,97,98],37:[131],38:[134],39:[110,111,112],
  40:[99,100,101],41:[98,99],42:[1,74,95,110,135],43:[131,133,110,111,112],44:[1,74,95,135],45:[8,81,139,158],46:[145,146,147,149,195]
};

/* ════════════ TOOL MODAL ════════════ */
export default function ToolModal({ tool, toolIndex, lang, onClose, onOpenArticle }) {
  const sheetRef = useRef(null);
  const startY = useRef(0);
  const curY = useRef(0);

  useEffect(() => {
    if (!tool) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      // Focus trap
      if (e.key === 'Tab' && sheetRef.current) {
        const focusable = sheetRef.current.querySelectorAll('button, input, select, [tabindex]:not([tabindex="-1"])');
        if (!focusable.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    // Auto-focus first focusable
    setTimeout(() => {
      if (sheetRef.current) {
        const f = sheetRef.current.querySelector('button, input, select');
        if (f) f.focus();
      }
    }, 100);
    return () => window.removeEventListener('keydown', onKey);
  }, [tool, onClose]);

  const onTS = useCallback((e) => { startY.current = e.touches[0].clientY; curY.current = 0; }, []);
  const onTM = useCallback((e) => { const dy = e.touches[0].clientY - startY.current; if (dy > 0 && sheetRef.current) { curY.current = dy; sheetRef.current.style.transform = `translateY(${dy}px)`; sheetRef.current.style.transition = 'none'; } }, []);
  const onTE = useCallback(() => { if (sheetRef.current) { sheetRef.current.style.transition = 'transform .3s cubic-bezier(.32,.72,.24,1)'; if (curY.current > 120) onClose(); else sheetRef.current.style.transform = 'translateY(0)'; } }, [onClose]);

  if (!tool) return null;
  const ToolComp = TOOL_COMPONENTS[toolIndex];

  return (
    <div className="tm-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="tm-sheet" ref={sheetRef} onClick={e => e.stopPropagation()} onTouchStart={onTS} onTouchMove={onTM} onTouchEnd={onTE}>
        <div className="tm-grabber"><div className="tm-grabber-bar" /></div>
        <div className="tm-header">
          <span style={{ fontSize: '1.5rem' }}>{tool.i}</span>
          <span style={{ fontFamily: 'var(--f-head)', fontWeight: 600, fontSize: '1.1rem', flex: 1 }}>{tool[lang]}</span>
          <button className="ad-back" style={{ width: 40, height: 40, fontSize: '1rem' }} onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="tm-body">
          {ToolComp ? <ToolComp lang={lang} /> : (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text2)' }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: 16 }}>{tool.i}</span>
              <p>{tool[lang]}</p>
            </div>
          )}
          {/* Tool → Article cross-references */}
          {(() => {
            const ids = TOOL_ARTICLE_MAP[toolIndex];
            if (!ids || !ids.length || !onOpenArticle) return null;
            const arts = ids.map(id => ARTICLES.find(a => a.id === id)).filter(Boolean).slice(0, 3);
            if (!arts.length) return null;
            return (
              <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
                <div style={{ fontSize: '.75rem', fontWeight: 700, color: 'var(--text3)', marginBottom: 8, fontFamily: 'var(--f-mono)', letterSpacing: '.5px' }}>
                  {lang === 'tr' ? 'İLGİLİ MAKALE' : lang === 'en' ? 'RELATED ARTICLE' : 'مقال ذو صلة'}
                </div>
                {arts.map(a => (
                  <button key={a.id} onClick={() => onOpenArticle(a)}
                    style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '8px 10px',
                      borderRadius: 10, background: 'var(--card)', border: '1px solid var(--border)',
                      cursor: 'pointer', marginBottom: 6, textAlign: 'start', transition: 'all .2s' }}>
                    <span style={{ fontSize: '1.1rem' }}>{a.icon}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '.82rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a[lang]?.t}</div>
                      <div style={{ fontSize: '.68rem', color: 'var(--text3)' }}>{a.min} {lang === 'tr' ? 'dk' : lang === 'en' ? 'min' : 'د'}</div>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text3)" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                ))}
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
