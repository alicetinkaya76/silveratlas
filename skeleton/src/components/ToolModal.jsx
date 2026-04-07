import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { t } from '../i18n/translations';

/* ── TOOL 0: Purity Calculator ── */
function PurityCalc({ lang }) {
  const [w, setW] = useState(10), [p, setP] = useState(0.925);
  const L = { tr: ['Ağırlık (gram)', 'Ayar', 'Saf Gümüş'], en: ['Weight (g)', 'Purity', 'Pure Silver'], ar: ['الوزن (غرام)', 'العيار', 'الفضة النقية'] }[lang];
  return (<div className="tm-tool"><label className="calc-label">{L[0]}</label><input type="number" className="calc-input" value={w} onChange={e=>setW(+e.target.value)} min="0" step="0.1" inputMode="decimal"/><label className="calc-label" style={{marginTop:12}}>{L[1]}</label><select className="calc-select" value={p} onChange={e=>setP(+e.target.value)}><option value={0.999}>999</option><option value={0.925}>925</option><option value={0.900}>900</option><option value={0.835}>835</option><option value={0.800}>800</option></select><div className="calc-result" style={{marginTop:16}}><div className="calc-result-num">{(w*p).toFixed(2)} g</div><div className="calc-result-label">{L[2]}</div></div></div>);
}

/* ── TOOL 1: Unit Converter ── */
function UnitConverter({ lang }) {
  const [val, setVal] = useState(1), [from, setFrom] = useState('oz');
  const rates = { oz: 31.1035, g: 1, kg: 1000, lb: 453.592, tola: 11.664 };
  const grams = val * rates[from];
  return (<div className="tm-tool"><label className="calc-label">{lang==='tr'?'Miktar':'Amount'}</label><input type="number" className="calc-input" value={val} onChange={e=>setVal(+e.target.value)} min="0" step="0.01" inputMode="decimal"/><label className="calc-label" style={{marginTop:12}}>{lang==='tr'?'Birim':'Unit'}</label><select className="calc-select" value={from} onChange={e=>setFrom(e.target.value)}><option value="oz">Troy Ounce</option><option value="g">Gram</option><option value="kg">Kilogram</option><option value="lb">Pound</option><option value="tola">Tola</option></select><div style={{marginTop:16,display:'flex',flexDirection:'column',gap:6}}>{Object.entries(rates).filter(([k])=>k!==from).map(([unit,rate])=>(<div key={unit} className="tm-result-row"><span style={{fontFamily:'var(--f-mono)',fontWeight:600,color:'var(--silver)'}}>{(grams/rate).toFixed(4)}</span><span style={{color:'var(--text2)',fontSize:'.85rem',marginLeft:8}}>{unit}</span></div>))}</div></div>);
}

/* ── TOOL 2: Ring Sizer (Ultra Premium) ── */
function RingSizer({ lang }) {
  const [tab, setTab] = useState('measure'); // measure | circle | table
  const [mm, setMm] = useState(52);
  const [step, setStep] = useState(0);

  const SIZES = [
    {us:3,eu:44,uk:'F',mm:44.2,dia:14.1},
    {us:4,eu:47,uk:'H',mm:46.8,dia:14.9},
    {us:5,eu:49,uk:'J½',mm:49.0,dia:15.6},
    {us:6,eu:51,uk:'L½',mm:51.5,dia:16.4},
    {us:7,eu:54,uk:'N½',mm:54.0,dia:17.2},
    {us:8,eu:57,uk:'P½',mm:56.6,dia:18.0},
    {us:9,eu:59,uk:'R½',mm:59.1,dia:18.8},
    {us:10,eu:62,uk:'T½',mm:61.6,dia:19.6},
    {us:11,eu:64,uk:'V½',mm:64.0,dia:20.4},
    {us:12,eu:67,uk:'Y',mm:66.6,dia:21.2},
    {us:13,eu:69,uk:'Z+1',mm:69.1,dia:22.0},
  ];

  const closest = SIZES.reduce((a,b) => Math.abs(b.mm-mm)<Math.abs(a.mm-mm)?b:a);

  const L = {
    tr: {
      tabs: ['Ölçüm Rehberi', 'Daire Eşleştir', 'Tablo'],
      title: 'Yüzük Ölçüsü Bulucu',
      steps: [
        { t: 'İp veya kağıt şerit hazırlayın', d: 'Yaklaşık 10 cm uzunluğunda ince bir ip veya kağıt şerit kesin.' },
        { t: 'Parmağınıza sarın', d: 'İpi ölçmek istediğiniz parmağın en geniş yerinden (eklem dahil) sarın. Sıkı ama rahat olmalı.' },
        { t: 'İşaretleyin', d: 'İpin birbiriyle buluştuğu noktayı kalemle işaretleyin.' },
        { t: 'Ölçün', d: 'İpi düz bir şekilde cetvel üzerine koyun ve mm cinsinden ölçün. Bu değer iç çevrenizdir.' },
        { t: 'Sonucunuzu girin', d: 'Aşağıdaki kaydırıcıyı ölçtüğünüz değere ayarlayın.' },
      ],
      tip: 'İpucu: Akşam saatlerinde ölçün — parmaklar gün içinde hafifçe şişer.',
      circleTitle: 'Yüzüğünüzü ekrandaki daireyle eşleştirin',
      circleDesc: 'Mevcut bir yüzüğünüzü ekranın üzerine koyun ve iç kısmı daireyle eşleştirin.',
      circ: 'İç Çevre', dia: 'İç Çap', result: 'Yüzük Ölçünüz',
    },
    en: {
      tabs: ['Measure Guide', 'Circle Match', 'Table'],
      title: 'Ring Size Finder',
      steps: [
        { t: 'Prepare string or paper strip', d: 'Cut a thin string or paper strip about 10 cm long.' },
        { t: 'Wrap around your finger', d: 'Wrap around the widest part of your finger (including the knuckle). Snug but comfortable.' },
        { t: 'Mark the point', d: 'Mark where the string meets itself with a pen.' },
        { t: 'Measure', d: 'Lay the string flat on a ruler and measure in mm. This is your inner circumference.' },
        { t: 'Enter your result', d: 'Set the slider below to your measured value.' },
      ],
      tip: 'Tip: Measure in the evening — fingers swell slightly during the day.',
      circleTitle: 'Match your ring to the circle on screen',
      circleDesc: 'Place an existing ring on your screen and match its inner edge to the circle.',
      circ: 'Circumference', dia: 'Diameter', result: 'Your Ring Size',
    },
    ar: {
      tabs: ['دليل القياس', 'مطابقة الدائرة', 'الجدول'],
      title: 'أداة قياس الخاتم',
      steps: [
        { t: 'حضّر خيطاً أو شريط ورق', d: 'قص خيطاً أو شريط ورق رفيعاً بطول ١٠ سم تقريباً.' },
        { t: 'لفّه حول إصبعك', d: 'لفّه حول أعرض جزء من إصبعك (بما في ذلك المفصل). محكم لكن مريح.' },
        { t: 'ضع علامة', d: 'ضع علامة بقلم حيث يلتقي طرفا الخيط.' },
        { t: 'قِس', d: 'ضع الخيط مستقيماً على المسطرة وقس بالمليمتر. هذا هو المحيط الداخلي.' },
        { t: 'أدخل النتيجة', d: 'اضبط شريط التمرير أدناه على القيمة المقاسة.' },
      ],
      tip: 'نصيحة: قِس في المساء — الأصابع تتورم قليلاً خلال النهار.',
      circleTitle: 'طابق خاتمك مع الدائرة على الشاشة',
      circleDesc: 'ضع خاتماً موجوداً على الشاشة وطابق حافته الداخلية مع الدائرة.',
      circ: 'المحيط', dia: 'القطر', result: 'مقاس خاتمك',
    }
  }[lang] || {};

  // Approximate px-per-mm for screen (assuming ~96dpi = 3.78px/mm)
  const PX_PER_MM = 3.78;

  return (
    <div className="tm-tool">
      {/* Tab selector */}
      <div style={{display:'flex',gap:6,marginBottom:16}}>
        {['measure','circle','table'].map((t,i) => (
          <button key={t} onClick={()=>setTab(t)} style={{
            flex:1,padding:'10px 8px',borderRadius:'var(--r-badge)',fontSize:'.78rem',fontWeight:600,
            border:'1.5px solid',textAlign:'center',transition:'all .2s',
            borderColor: tab===t ? 'var(--silver)' : 'var(--border)',
            background: tab===t ? 'rgba(192,192,192,0.1)' : 'transparent',
            color: tab===t ? 'var(--silver)' : 'var(--text2)',
          }}>{L.tabs?.[i]}</button>
        ))}
      </div>

      {/* ─── TAB 1: Step-by-step measurement guide ─── */}
      {tab === 'measure' && (
        <div>
          {/* Visual step indicator */}
          <div style={{display:'flex',alignItems:'center',gap:4,marginBottom:16}}>
            {L.steps?.map((_,i) => (
              <React.Fragment key={i}>
                <div onClick={()=>setStep(i)} style={{
                  width:28,height:28,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',
                  fontSize:'.72rem',fontWeight:700,fontFamily:'var(--f-mono)',cursor:'pointer',transition:'all .2s',
                  background: i<=step ? 'linear-gradient(135deg,var(--silver),#a0a8b0)' : 'var(--card)',
                  color: i<=step ? 'var(--bg)' : 'var(--text3)',
                  border: `1.5px solid ${i<=step ? 'transparent' : 'var(--border)'}`,
                  boxShadow: i===step ? '0 2px 8px rgba(192,192,192,0.2)' : 'none',
                }}>{i+1}</div>
                {i < (L.steps?.length||0)-1 && <div style={{flex:1,height:2,background:i<step?'var(--silver)':'var(--border)',borderRadius:1,transition:'background .3s'}}/>}
              </React.Fragment>
            ))}
          </div>

          {/* Step content */}
          <div style={{padding:'16px 18px',borderRadius:'var(--r-card)',background:'var(--card)',border:'1px solid var(--border)',marginBottom:16,minHeight:120}}>
            {/* Step illustration SVG */}
            <div style={{textAlign:'center',marginBottom:12}}>
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                {step===0 && <>
                  <rect x="10" y="25" width="80" height="10" rx="2" fill="var(--text3)" opacity=".3"/>
                  <line x1="10" y1="30" x2="90" y2="30" stroke="var(--silver)" strokeWidth="2" strokeDasharray="4 3"/>
                  <text x="100" y="34" fill="var(--text2)" fontSize="10" fontFamily="var(--f-mono)">10cm</text>
                </>}
                {step===1 && <>
                  <ellipse cx="60" cy="30" rx="20" ry="25" fill="none" stroke="var(--text3)" strokeWidth="8" opacity=".15"/>
                  <path d="M40 30 A20 25 0 1 1 40 29.9" fill="none" stroke="var(--silver)" strokeWidth="2" strokeDasharray="5 3"/>
                  <circle cx="40" cy="30" r="3" fill="var(--gold)"/>
                </>}
                {step===2 && <>
                  <rect x="10" y="25" width="80" height="10" rx="2" fill="var(--text3)" opacity=".15"/>
                  <line x1="10" y1="30" x2="90" y2="30" stroke="var(--silver)" strokeWidth="2"/>
                  <line x1="55" y1="20" x2="55" y2="40" stroke="var(--gold)" strokeWidth="2"/>
                  <text x="58" y="18" fill="var(--gold)" fontSize="9" fontFamily="var(--f-mono)">✓</text>
                </>}
                {step===3 && <>
                  <rect x="5" y="26" width="110" height="8" rx="1" fill="var(--text3)" opacity=".1" stroke="var(--border)" strokeWidth="1"/>
                  {[0,1,2,3,4,5,6,7,8,9,10].map(i=><line key={i} x1={5+i*11} y1="26" x2={5+i*11} y2={i%5===0?20:23} stroke="var(--text3)" strokeWidth="1"/>)}
                  <line x1="5" y1="38" x2="63" y2="38" stroke="var(--silver)" strokeWidth="2"/>
                  <text x="30" y="50" fill="var(--silver)" fontSize="10" fontFamily="var(--f-mono)" textAnchor="middle">52mm</text>
                </>}
                {step===4 && <>
                  <rect x="15" y="20" width="90" height="20" rx="10" fill="var(--card)" stroke="var(--silver)" strokeWidth="1.5"/>
                  <circle cx={15+((mm-40)/30)*90} cy="30" r="8" fill="var(--silver)"/>
                  <text x="60" y="55" fill="var(--text2)" fontSize="9" textAnchor="middle" fontFamily="var(--f-mono)">{mm}mm</text>
                </>}
              </svg>
            </div>
            <div style={{fontWeight:600,fontSize:'1rem',marginBottom:6,color:'var(--text)'}}>{L.steps?.[step]?.t}</div>
            <div style={{fontSize:'.9rem',color:'var(--text2)',lineHeight:1.6}}>{L.steps?.[step]?.d}</div>
          </div>

          {/* Navigation */}
          <div style={{display:'flex',gap:8,marginBottom:16}}>
            <button disabled={step===0} onClick={()=>setStep(s=>s-1)} style={{
              flex:1,padding:'10px',borderRadius:'var(--r-btn)',border:'1px solid var(--border)',
              opacity:step===0?.4:1,fontSize:'.88rem',fontWeight:500}}>←</button>
            <button disabled={step>=(L.steps?.length||5)-1} onClick={()=>setStep(s=>s+1)} style={{
              flex:1,padding:'10px',borderRadius:'var(--r-btn)',
              background:step<(L.steps?.length||5)-1?'linear-gradient(135deg,var(--silver),#a0a8b0)':'var(--card)',
              color:step<(L.steps?.length||5)-1?'var(--bg)':'var(--text3)',
              border:'1px solid transparent',fontSize:'.88rem',fontWeight:600}}>→</button>
          </div>

          {/* Tip */}
          <div style={{padding:'10px 14px',borderRadius:'var(--r-badge)',background:'rgba(212,175,55,0.05)',
            border:'1px solid rgba(212,175,55,0.12)',fontSize:'.82rem',color:'var(--text2)',lineHeight:1.5}}>
            💡 {L.tip}
          </div>

          {/* Slider + Result */}
          <div style={{marginTop:16}}>
            <label className="calc-label">{L.circ} (mm)</label>
            <input type="range" min="40" max="72" step="0.5" value={mm} onChange={e=>setMm(+e.target.value)}
              style={{width:'100%',margin:'8px 0',accentColor:'var(--silver)',height:'6px'}}/>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:'.7rem',color:'var(--text3)',fontFamily:'var(--f-mono)',marginBottom:12}}>
              <span>40</span><span>50</span><span>60</span><span>72</span>
            </div>
            <div className="calc-result">
              <div style={{fontSize:'.75rem',color:'var(--text3)',marginBottom:6,fontWeight:600}}>{L.result}</div>
              <div style={{display:'flex',justifyContent:'space-around'}}>
                <div><div className="calc-result-num" style={{fontSize:'1.4rem'}}>{closest.us}</div><div className="calc-result-label">US</div></div>
                <div><div className="calc-result-num" style={{fontSize:'1.4rem'}}>{closest.eu}</div><div className="calc-result-label">EU</div></div>
                <div><div className="calc-result-num" style={{fontSize:'1.4rem'}}>{closest.uk}</div><div className="calc-result-label">UK</div></div>
                <div><div className="calc-result-num" style={{fontSize:'1.4rem'}}>{closest.dia}</div><div className="calc-result-label">mm ⌀</div></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── TAB 2: Circle matching (real size on screen) ─── */}
      {tab === 'circle' && (
        <div>
          <div style={{textAlign:'center',marginBottom:12}}>
            <div style={{fontWeight:600,fontSize:'.95rem',marginBottom:4}}>{L.circleTitle}</div>
            <div style={{fontSize:'.82rem',color:'var(--text2)',lineHeight:1.5}}>{L.circleDesc}</div>
          </div>
          <div style={{display:'flex',justifyContent:'center',padding:'20px 0'}}>
            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              {/* Ruler grid */}
              {[0,1,2,3,4].map(i => (
                <React.Fragment key={i}>
                  <line x1={100-i*20} y1="95" x2={100-i*20} y2="105" stroke="var(--text3)" strokeWidth="0.5" opacity=".3"/>
                  <line x1={100+i*20} y1="95" x2={100+i*20} y2="105" stroke="var(--text3)" strokeWidth="0.5" opacity=".3"/>
                </React.Fragment>
              ))}
              {/* Ring circle */}
              <circle cx="100" cy="100" r={closest.dia * PX_PER_MM / 2} fill="none"
                stroke="var(--silver)" strokeWidth="2.5" strokeDasharray="none"/>
              <circle cx="100" cy="100" r={closest.dia * PX_PER_MM / 2 + 2} fill="none"
                stroke="var(--gold)" strokeWidth="0.5" opacity=".4" strokeDasharray="3 3"/>
              {/* Center dot */}
              <circle cx="100" cy="100" r="1.5" fill="var(--silver)" opacity=".5"/>
              {/* Diameter line */}
              <line x1={100-closest.dia*PX_PER_MM/2} y1="100" x2={100+closest.dia*PX_PER_MM/2} y2="100"
                stroke="var(--gold)" strokeWidth="0.8" strokeDasharray="2 2" opacity=".5"/>
              <text x="100" y="90" textAnchor="middle" fill="var(--text2)" fontSize="10"
                fontFamily="var(--f-mono)">{closest.dia}mm</text>
            </svg>
          </div>
          {/* Size selector */}
          <div style={{display:'flex',gap:6,flexWrap:'wrap',justifyContent:'center',marginBottom:16}}>
            {SIZES.map(s => (
              <button key={s.us} onClick={()=>setMm(s.mm)} style={{
                padding:'6px 12px',borderRadius:'var(--r-badge)',fontSize:'.75rem',fontFamily:'var(--f-mono)',
                fontWeight:600,transition:'all .2s',
                border: `1.5px solid ${Math.abs(s.mm-mm)<1.5?'var(--silver)':'var(--border)'}`,
                background: Math.abs(s.mm-mm)<1.5 ? 'rgba(192,192,192,0.1)' : 'transparent',
                color: Math.abs(s.mm-mm)<1.5 ? 'var(--silver)' : 'var(--text3)',
              }}>US {s.us}</button>
            ))}
          </div>
          <div className="calc-result">
            <div style={{display:'flex',justifyContent:'space-around'}}>
              <div><div className="calc-result-num" style={{fontSize:'1.3rem'}}>US {closest.us}</div></div>
              <div><div className="calc-result-num" style={{fontSize:'1.3rem'}}>EU {closest.eu}</div></div>
              <div><div className="calc-result-num" style={{fontSize:'1.3rem'}}>{closest.uk}</div><div className="calc-result-label">UK</div></div>
            </div>
          </div>
        </div>
      )}

      {/* ─── TAB 3: Full conversion table ─── */}
      {tab === 'table' && (
        <div style={{overflowX:'auto'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'.78rem',fontFamily:'var(--f-mono)'}}>
            <thead>
              <tr style={{borderBottom:'2px solid var(--border)'}}>
                {['US','EU','UK','mm ⌀',lang==='tr'?'Çevre':'Circ.'].map(h => (
                  <th key={h} style={{padding:'10px 8px',textAlign:'center',color:'var(--silver)',fontWeight:700,fontSize:'.72rem',letterSpacing:'.5px'}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SIZES.map((s,i) => {
                const isActive = Math.abs(s.mm-mm)<1.5;
                return (
                  <tr key={i} onClick={()=>setMm(s.mm)} style={{
                    borderBottom:'1px solid var(--border)',cursor:'pointer',transition:'all .2s',
                    background: isActive ? 'rgba(192,192,192,0.08)' : 'transparent',
                  }}>
                    <td style={{padding:'10px 8px',textAlign:'center',fontWeight:isActive?700:400,color:isActive?'var(--silver)':'var(--text)'}}>{s.us}</td>
                    <td style={{padding:'10px 8px',textAlign:'center'}}>{s.eu}</td>
                    <td style={{padding:'10px 8px',textAlign:'center'}}>{s.uk}</td>
                    <td style={{padding:'10px 8px',textAlign:'center'}}>{s.dia}</td>
                    <td style={{padding:'10px 8px',textAlign:'center',color:'var(--text2)'}}>{s.mm}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
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
const STAMPS=[{s:"Lion 🦁",c:{tr:"İngiltere",en:"England",ar:"إنجلترا"},p:"925",y:"1544+"},{s:"Minerva 🏛️",c:{tr:"Fransa",en:"France",ar:"فرنسا"},p:"800/925",y:"1838+"},{s:"Moon ☽",c:{tr:"Almanya",en:"Germany",ar:"ألمانيا"},p:"800/925",y:"1884+"},{s:"925+Kod",c:{tr:"Türkiye",en:"Turkey",ar:"تركيا"},p:"800/925",y:"1923+"},{s:"Kokoshnik",c:{tr:"Rusya",en:"Russia",ar:"روسيا"},p:"875/925",y:"1899+"},{s:"Star ⭐",c:{tr:"İtalya",en:"Italy",ar:"إيطاليا"},p:"800/925",y:"1872+"},{s:"STERLING",c:{tr:"ABD",en:"USA",ar:"أمريكا"},p:"925",y:"1906+"},{s:"Anchor ⚓",c:{tr:"Birmingham",en:"Birmingham",ar:"برمنغهام"},p:"925",y:"1773+"}];
function StampIdentifier({lang}){const[q,setQ]=useState('');const fl=q?STAMPS.filter(s=>s.s.toLowerCase().includes(q.toLowerCase())||s.c[lang].toLowerCase().includes(q.toLowerCase())):STAMPS;
return<div className="tm-tool" style={{gap:10}}><input type="text" className="calc-input" placeholder={lang==='tr'?'Damga veya ülke ara...':'Search stamp or country...'} value={q} onChange={e=>setQ(e.target.value)} style={{fontSize:14}}/><div style={{fontSize:11,color:'var(--text3)'}}>{fl.length} {lang==='tr'?'sonuç':'results'}</div>{fl.map((s,i)=><div key={i} style={{padding:10,borderRadius:10,border:'1px solid var(--border)',background:'var(--card)'}}><div style={{fontSize:14,fontWeight:600,marginBottom:3}}>{s.s}</div><div style={{fontSize:12,color:'var(--silver)',marginBottom:2}}>{s.c[lang]}</div><div style={{display:'flex',gap:4}}><span style={{fontSize:10,padding:'2px 6px',borderRadius:4,background:'rgba(212,175,55,0.12)',color:'var(--gold)',fontFamily:'var(--f-mono)',fontWeight:600}}>{s.p}</span><span style={{fontSize:10,padding:'2px 6px',borderRadius:4,background:'rgba(192,192,192,0.08)',color:'var(--silver)'}}>{s.y}</span></div></div>)}</div>}

/* ── TOOL 13: Price Alert ── */
function PriceAlert({lang}){const[pr,setPr]=useState(32.5);const[tg,setTg]=useState(35);const[dr,setDr]=useState('above');const[als,setAls]=useState([]);
return<div className="tm-tool"><div style={{textAlign:'center',fontSize:28,fontWeight:700,color:'var(--gold)',fontFamily:'var(--f-mono)',marginBottom:4}}>${pr.toFixed(2)}</div><input type="range" min={15} max={60} step={0.1} value={pr} onChange={e=>setPr(+e.target.value)} style={{width:'100%',accentColor:'var(--gold)',marginBottom:12}}/><input type="number" className="calc-input" value={tg} onChange={e=>setTg(+e.target.value)} min={1} step={0.5}/><div style={{display:'flex',gap:6,margin:'8px 0'}}>{['above','below'].map(d=><button key={d} onClick={()=>setDr(d)} style={{flex:1,padding:'10px',borderRadius:8,border:`1.5px solid ${dr===d?'var(--gold)':'var(--border)'}`,background:dr===d?'rgba(212,175,55,0.1)':'transparent',color:dr===d?'var(--gold)':'var(--text2)',cursor:'pointer',fontSize:13}}>{d==='above'?'↑':'↓'} {d==='above'?(lang==='tr'?'Üstü':'Above'):(lang==='tr'?'Altı':'Below')}</button>)}</div><button className="btn btn-primary" style={{width:'100%'}} onClick={()=>setAls(p=>[...p,{id:Date.now(),t:tg,d:dr}])}>{lang==='tr'?'Alarm Kur':'Set Alert'}</button>{als.map(a=><div key={a.id} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid var(--border)'}}><span style={{fontFamily:'var(--f-mono)',color:(a.d==='above'?pr>=a.t:pr<=a.t)?'#27ae60':'var(--text)'}}>${a.t} {a.d==='above'?'↑':'↓'}</span><span style={{fontSize:11,color:(a.d==='above'?pr>=a.t:pr<=a.t)?'#27ae60':'#f39c12'}}>{(a.d==='above'?pr>=a.t:pr<=a.t)?'🔔':'⏳'}</span></div>)}<div style={{marginTop:8,fontSize:10,color:'var(--text3)',textAlign:'center'}}>{lang==='tr'?'Simülasyondur.':'Simulation only.'}</div></div>}

/* ── TOOL 14: Zakat ── */
function ZakatCalc({lang}){const[g,setG]=useState(612);const[p,setP]=useState(30);const nisab=595;const zakat=g>=nisab?(g*p*0.025):0;
return<div className="tm-tool"><label className="calc-label">{lang==='tr'?'Gümüş (gram)':'Silver (g)'}</label><input type="number" className="calc-input" value={g} onChange={e=>setG(+e.target.value)} min="0" inputMode="numeric"/><label className="calc-label" style={{marginTop:12}}>{lang==='tr'?'1g fiyat':'Price/g'}</label><input type="number" className="calc-input" value={p} onChange={e=>setP(+e.target.value)} min="0" step="0.01" inputMode="decimal"/><div className="calc-result" style={{marginTop:16}}>{g>=nisab?<><div className="calc-result-num">{zakat.toFixed(2)}</div><div className="calc-result-label">{lang==='tr'?'Zekât (%2.5)':'Zakat (2.5%)'}</div></>:<><div className="calc-result-num" style={{color:'var(--text2)',fontSize:'1.1rem'}}>{lang==='tr'?'Nisab altında':'Below nisab'}</div><div className="calc-result-label">Nisab: 595g</div></>}</div></div>}

/* ── TOOL 15: Purity Test Guide ── */
function PurityTestGuide({lang}){const[e,setE]=useState(0);const ts=[{i:'🧲',n:{tr:'Mıknatıs',en:'Magnet',ar:'مغناطيس'},r:60,s:{tr:['Gümüş manyetik değildir'],en:['Silver is not magnetic'],ar:['الفضة ليست مغناطيسية']}},{i:'🧊',n:{tr:'Buz',en:'Ice',ar:'ثلج'},r:70,s:{tr:['Buz çok hızlı erir'],en:['Ice melts very fast'],ar:['يذوب الثلج بسرعة']}},{i:'⚗️',n:{tr:'Asit',en:'Acid',ar:'حمض'},r:90,s:{tr:['Kremsi beyaz=925'],en:['Creamy white=925'],ar:['أبيض كريمي=٩٢٥']}},{i:'🔬',n:{tr:'XRF',en:'XRF',ar:'XRF'},r:99,s:{tr:['En kesin yöntem'],en:['Most accurate'],ar:['الأكثر دقة']}}];const rc=(r)=>r>=90?'#27ae60':r>=70?'#f39c12':'#e74c3c';
return<div className="tm-tool" style={{gap:8}}>{ts.map((t,i)=><div key={i} style={{borderRadius:10,border:`1px solid ${e===i?'var(--gold)':'var(--border)'}44`,overflow:'hidden'}}><button onClick={()=>setE(e===i?-1:i)} style={{width:'100%',padding:'10px 12px',border:'none',cursor:'pointer',background:'transparent',display:'flex',alignItems:'center',gap:8,justifyContent:'space-between'}}><div style={{display:'flex',alignItems:'center',gap:8}}><span style={{fontSize:18}}>{t.i}</span><span style={{fontWeight:600,fontSize:13,color:'var(--text)'}}>{t.n[lang]}</span><span style={{fontSize:9,color:rc(t.r),fontWeight:600}}>{t.r}%</span></div><span style={{transform:e===i?'rotate(180deg)':'none',transition:'transform .3s',color:'var(--text3)',fontSize:10}}>▼</span></button>{e===i&&<div style={{padding:'0 12px 10px'}}>{t.s[lang].map((s,j)=><div key={j} style={{fontSize:12,color:'var(--text2)',marginBottom:3}}>• {s}</div>)}</div>}</div>)}</div>}

/* ── TOOL 16: Metal Comparator ── */
const MTS=[{id:'silver',s:'Ag',n:{tr:'Gümüş',en:'Silver',ar:'فضة'},c:'#C0C0C0',d:10.49,m:961,h:2.5,k:429},{id:'gold',s:'Au',n:{tr:'Altın',en:'Gold',ar:'ذهب'},c:'#FFD700',d:15.6,m:1064,h:2.75,k:317},{id:'platinum',s:'Pt',n:{tr:'Platin',en:'Platinum',ar:'بلاتين'},c:'#E5E4E2',d:21.45,m:1768,h:4,k:71.6},{id:'titanium',s:'Ti',n:{tr:'Titanyum',en:'Titanium',ar:'تيتانيوم'},c:'#878681',d:4.51,m:1668,h:6,k:21.9},{id:'steel',s:'Fe',n:{tr:'Çelik',en:'Steel',ar:'فولاذ'},c:'#8B8D8E',d:7.93,m:1510,h:5.5,k:16.3}];
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

/* ════════════ TOOL REGISTRY ════════════ */
const TOOL_COMPONENTS = { 0:PurityCalc,1:UnitConverter,2:RingSizer,3:QuizTool,4:ColorPalette,5:CarbonFootprint,6:PeriodicTable,7:KaratConverter,8:GemstoneGuide,9:CareGuide,10:WorldMapTool,11:TimelineTool,12:StampIdentifier,13:PriceAlert,14:ZakatCalc,15:PurityTestGuide,16:MetalComparator,17:JewelryCombinator,18:TurkeyAtlas,19:PriceTracker,20:EngravingPreview,21:InsuranceCalc,22:AdvancedQuiz,23:TarnishSimulator,24:WorldClock,25:PortfolioTracker,26:CertificateVerifier };

/* ════════════ TOOL MODAL ════════════ */
export default function ToolModal({ tool, toolIndex, lang, onClose }) {
  const sheetRef = useRef(null);
  const startY = useRef(0);
  const curY = useRef(0);

  useEffect(() => {
    if (!tool) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
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
        </div>
      </div>
    </div>
  );
}
