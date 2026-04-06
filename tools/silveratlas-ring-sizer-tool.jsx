import { useState } from "react";
const T={tr:{title:"Gümüş Yüzük Ölçü Bulucu",subtitle:"Parmak çevrenizi ölçerek doğru yüzük numaranızı bulun",measure:"Parmak Çevresi (mm)",result:"Yüzük Numaranız",sizeLabel:"Ölçü",circumLabel:"Çevre",diamLabel:"Çap",guide:"Nasıl Ölçülür?",guideText:"İp veya kağıt şerit ile parmağınızı sarın, işaretleyin ve cetvelle mm cinsinden ölçün. Akşam saatlerinde ölçüm yapmanız önerilir — parmaklar gün içinde hafifçe şişer.",note:"Bu araç referans amaçlıdır. Kesin ölçü için kuyumcunuza danışın.",systems:["TR/EU","US","UK"],sponsor:{text:"Doğru ölçüde 925 ayar gümüş yüzükleri keşfedin.",cta:"İstanbul Gümüş'ü Keşfet"}},
en:{title:"Silver Ring Size Finder",subtitle:"Find your correct ring size by measuring your finger circumference",measure:"Finger Circumference (mm)",result:"Your Ring Size",sizeLabel:"Size",circumLabel:"Circum.",diamLabel:"Diameter",guide:"How to Measure?",guideText:"Wrap a string or paper strip around your finger, mark it, and measure with a ruler in mm. Measure in the evening — fingers swell slightly during the day.",note:"This tool is for reference only. Consult your jeweler for exact sizing.",systems:["TR/EU","US","UK"],sponsor:{text:"Discover 925 sterling silver rings in your perfect size.",cta:"Explore İstanbul Gümüş"}},
ar:{title:"محدد مقاس خاتم الفضة",subtitle:"اعثر على مقاس خاتمك الصحيح بقياس محيط إصبعك",measure:"محيط الإصبع (مم)",result:"مقاس خاتمك",sizeLabel:"المقاس",circumLabel:"المحيط",diamLabel:"القطر",guide:"كيف تقيس؟",guideText:"لف خيطاً حول إصبعك، ضع علامة، ثم قسه بالمسطرة بالمليمتر.",note:"هذه الأداة للمرجعية فقط.",systems:["TR/EU","US","UK"],sponsor:{text:"اكتشف خواتم فضة ٩٢٥ بمقاسك المثالي.",cta:"استكشف إسطنبول غوموش"}}
};
const SIZES=[{tr:1,us:0,uk:"A",circ:37.8,diam:12.04},{tr:4,us:1,uk:"B",circ:39.1,diam:12.45},{tr:7,us:2,uk:"D",circ:41.7,diam:13.26},{tr:9,us:3,uk:"F",circ:44.2,diam:14.07},{tr:11,us:4,uk:"H",circ:46.8,diam:14.88},{tr:13,us:5,uk:"J",circ:49.3,diam:15.7},{tr:15,us:6,uk:"L",circ:51.9,diam:16.51},{tr:17,us:7,uk:"N",circ:54.4,diam:17.32},{tr:19,us:8,uk:"P",circ:57.0,diam:18.14},{tr:21,us:9,uk:"R",circ:59.5,diam:18.95},{tr:23,us:10,uk:"T",circ:62.1,diam:19.76},{tr:25,us:11,uk:"V",circ:64.6,diam:20.57},{tr:27,us:12,uk:"X",circ:67.2,diam:21.39},{tr:29,us:13,uk:"Z",circ:69.7,diam:22.2}];

export default function RingSizerTool(){
  const[lang,setLang]=useState("tr");const[dark,setDark]=useState(true);const[circ,setCirc]=useState(52);const[showGuide,setShowGuide]=useState(false);
  const t=T[lang];const isRTL=lang==="ar";
  const bgP=dark?"#0f0f14":"#FAFAF5";const textP=dark?"#e8e8ec":"#2C2C2C";const textS=dark?"#9a9aaa":"#6B7280";
  const accent=dark?"#C0C0C0":"#708090";const gold="#D4AF37";const border=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)";
  const bgCard=dark?"#1a1a24":"#ffffff";const fontD="'Playfair Display',Georgia,serif";
  const fontB=lang==="ar"?"'Noto Naskh Arabic',serif":"'Source Sans 3',sans-serif";
  const nearest=SIZES.reduce((prev,curr)=>Math.abs(curr.circ-circ)<Math.abs(prev.circ-circ)?curr:prev);

  return(
    <div dir={isRTL?"rtl":"ltr"} style={{fontFamily:fontB,background:bgP,color:textP,minHeight:"100vh",transition:"background 0.4s"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*{margin:0;padding:0;box-sizing:border-box}input[type=range]{width:100%;accent-color:#D4AF37;height:6px}`}</style>
      <nav style={{position:"sticky",top:0,zIndex:100,background:dark?"rgba(15,15,20,0.88)":"rgba(250,250,245,0.88)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${border}`,padding:"0 24px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:16}}>SilverAtlas</span></div>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{display:"flex",gap:2,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)",borderRadius:7,padding:2}}>{["tr","en","ar"].map(l=>(<button key={l} onClick={()=>setLang(l)} style={{border:"none",cursor:"pointer",padding:"3px 9px",borderRadius:5,fontSize:11,fontWeight:lang===l?600:400,background:lang===l?(dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.08)"):"transparent",color:lang===l?textP:textS}}>{l==="ar"?"عر":l.toUpperCase()}</button>))}</div>
          <button onClick={()=>setDark(!dark)} style={{border:"none",cursor:"pointer",background:"transparent",color:textS,fontSize:16,padding:4}}>{dark?"☀️":"🌙"}</button>
        </div>
      </nav>
      <div style={{maxWidth:600,margin:"0 auto",padding:"40px 24px 80px",animation:"fadeUp 0.6s ease both"}}>
        <h1 style={{fontFamily:fontD,fontSize:"clamp(24px,4vw,36px)",fontWeight:700,textAlign:"center",marginBottom:8}}>{t.title}</h1>
        <p style={{textAlign:"center",color:textS,fontSize:14,marginBottom:40}}>{t.subtitle}</p>
        <div style={{background:bgCard,borderRadius:16,padding:28,border:`1px solid ${border}`,marginBottom:24}}>
          <label style={{fontSize:13,color:textS,marginBottom:8,display:"block"}}>{t.measure}</label>
          <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:16}}>
            <input type="range" min={36} max={72} step={0.1} value={circ} onChange={e=>setCirc(+e.target.value)}/>
            <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:20,fontWeight:600,color:gold,minWidth:60,textAlign:"right"}}>{circ.toFixed(1)}</span>
          </div>
          <div style={{textAlign:"center",padding:24,background:dark?"rgba(212,175,55,0.06)":"rgba(212,175,55,0.08)",borderRadius:12,marginBottom:16}}>
            <div style={{fontSize:12,color:textS,marginBottom:8}}>{t.result}</div>
            <div style={{display:"flex",justifyContent:"center",gap:24,flexWrap:"wrap"}}>
              {t.systems.map((sys,i)=>(<div key={i}><div style={{fontSize:10,color:textS,marginBottom:4}}>{sys}</div><div style={{fontSize:28,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",color:gold}}>{i===0?nearest.tr:i===1?nearest.us:nearest.uk}</div></div>))}
            </div>
            <div style={{marginTop:12,fontSize:12,color:textS}}>{t.diamLabel}: {nearest.diam}mm · {t.circumLabel}: {nearest.circ}mm</div>
          </div>
          <button onClick={()=>setShowGuide(!showGuide)} style={{width:"100%",padding:"10px",background:"transparent",border:`1px solid ${border}`,borderRadius:8,color:accent,fontSize:13,cursor:"pointer",fontFamily:fontB}}>{t.guide} {showGuide?"▲":"▼"}</button>
          {showGuide&&<div style={{marginTop:12,padding:16,background:dark?"rgba(192,192,192,0.03)":"rgba(192,192,192,0.05)",borderRadius:8,fontSize:13,lineHeight:1.7,color:textS}}>{t.guideText}</div>}
        </div>
        <div style={{overflowX:"auto",marginBottom:24}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
            <thead><tr>{[t.sizeLabel+" (TR/EU)",t.sizeLabel+" (US)",t.sizeLabel+" (UK)",t.circumLabel+" (mm)",t.diamLabel+" (mm)"].map((h,i)=>(<th key={i} style={{padding:"8px 12px",textAlign:isRTL?"right":"left",borderBottom:`2px solid ${border}`,color:accent,fontWeight:600}}>{h}</th>))}</tr></thead>
            <tbody>{SIZES.map((s,i)=>(<tr key={i} style={{background:s.tr===nearest.tr?(dark?"rgba(212,175,55,0.1)":"rgba(212,175,55,0.15)"):"transparent"}}><td style={{padding:"6px 12px",borderBottom:`1px solid ${border}`,fontWeight:s.tr===nearest.tr?700:400,color:s.tr===nearest.tr?gold:textP}}>{s.tr}</td><td style={{padding:"6px 12px",borderBottom:`1px solid ${border}`}}>{s.us}</td><td style={{padding:"6px 12px",borderBottom:`1px solid ${border}`}}>{s.uk}</td><td style={{padding:"6px 12px",borderBottom:`1px solid ${border}`,fontFamily:"'JetBrains Mono',monospace"}}>{s.circ}</td><td style={{padding:"6px 12px",borderBottom:`1px solid ${border}`,fontFamily:"'JetBrains Mono',monospace"}}>{s.diam}</td></tr>))}</tbody>
          </table>
        </div>
        <p style={{fontSize:11,color:textS,textAlign:"center",marginBottom:24}}>{t.note}</p>
        <div style={{background:`linear-gradient(135deg,${dark?"rgba(212,175,55,0.06)":"rgba(212,175,55,0.08)"},transparent)`,borderRadius:14,padding:24,textAlign:"center",border:`1px solid ${gold}22`}}>
          <p style={{fontSize:14,color:textS,marginBottom:12}}>{t.sponsor.text}</p>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{display:"inline-block",padding:"10px 28px",borderRadius:8,background:`linear-gradient(135deg,${gold},#c9a227)`,color:"#0f0f14",fontWeight:600,fontSize:14,textDecoration:"none"}}>{t.sponsor.cta}</a>
        </div>
      </div>
    </div>
  );
}
