import { useState, useEffect } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    title: "Gümüş Renk Paleti", subtitle: "Gümüş alaşımları, patina aşamaları ve tamamlayıcı renk kombinasyonları",
    alloyTitle: "Alaşım Renkleri", patinaTitle: "Patina Aşamaları", complementTitle: "Tamamlayıcı Renkler",
    patinaNote: "Gümüşün zamanla geçirdiği doğal renk değişimi",
    gemTitle: "Taş Uyum Paleti", gemNote: "Gümüşle en iyi uyum sağlayan taş renkleri",
    copyHex: "HEX kopyalandı", click: "Renk kodunu kopyalamak için tıklayın",
    sponsor: { text: "Renk uyumu mükemmel takılarımızı keşfedin.", cta: "Instagram'da Gör", note: "İstanbul Gümüş sponsorluğundadır." },
    darkMode: "Mod"
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    title: "Silver Color Palette", subtitle: "Silver alloy colors, patina stages, and complementary color combinations",
    alloyTitle: "Alloy Colors", patinaTitle: "Patina Stages", complementTitle: "Complementary Colors",
    patinaNote: "Natural color change of silver over time",
    gemTitle: "Gemstone Harmony Palette", gemNote: "Gem colors that pair best with silver",
    copyHex: "HEX copied", click: "Click to copy color code",
    sponsor: { text: "Explore our perfectly color-harmonized jewelry.", cta: "See on Instagram", note: "Sponsored by İstanbul Gümüş." },
    darkMode: "Mode"
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة معرفة الفضة",
    title: "لوحة ألوان الفضة", subtitle: "ألوان سبائك الفضة ومراحل الزنجار وتوليفات الألوان المكملة",
    alloyTitle: "ألوان السبائك", patinaTitle: "مراحل الزنجار", complementTitle: "الألوان المكملة",
    patinaNote: "التغير اللوني الطبيعي للفضة عبر الزمن",
    gemTitle: "لوحة تنسيق الأحجار", gemNote: "ألوان الأحجار الأكثر انسجامًا مع الفضة",
    copyHex: "تم نسخ الكود", click: "انقر لنسخ كود اللون",
    sponsor: { text: "اكتشف مجوهراتنا المتناسقة الألوان.", cta: "شاهد على إنستغرام", note: "برعاية إسطنبول غوموش." },
    darkMode: "الوضع"
  }
};

const ALLOYS = [
  { hex: "#E8E8E8", name: { tr: "Fine Silver 999", en: "Fine Silver 999", ar: "فضة نقية ٩٩٩" }, note: { tr: "Parlak beyaz", en: "Bright white", ar: "أبيض ساطع" } },
  { hex: "#D4D4D4", name: { tr: "Sterling 925", en: "Sterling 925", ar: "إسترلينية ٩٢٥" }, note: { tr: "Hafif sıcak gri", en: "Slight warm grey", ar: "رمادي دافئ خفيف" } },
  { hex: "#C0B8A8", name: { tr: "Argentium 935", en: "Argentium 935", ar: "أرجنتيوم ٩٣٥" }, note: { tr: "Krem tonlu beyaz", en: "Cream-toned white", ar: "أبيض كريمي" } },
  { hex: "#B8B0A0", name: { tr: "Shibuichi (25% Ag)", en: "Shibuichi (25% Ag)", ar: "شيبويتشي" }, note: { tr: "Gri-yeşil", en: "Grey-green", ar: "رمادي-أخضر" } },
  { hex: "#6B5B4B", name: { tr: "Shakudo (3% Au+Ag)", en: "Shakudo (3% Au+Ag)", ar: "شاكودو" }, note: { tr: "Koyu mor-kahve", en: "Dark purple-brown", ar: "بنفسجي-بني غامق" } },
  { hex: "#D4C4B0", name: { tr: "Electrum (Ag+Au)", en: "Electrum (Ag+Au)", ar: "إلكتروم" }, note: { tr: "Altın-gümüş sarısı", en: "Gold-silver yellow", ar: "أصفر ذهبي-فضي" } },
];
const PATINA = [
  { hex: "#E8E8E8", stage: { tr: "Yeni", en: "New", ar: "جديد" }, time: { tr: "0 gün", en: "Day 0", ar: "اليوم ٠" } },
  { hex: "#D0CEC8", stage: { tr: "Hafif Sararma", en: "Light Yellowing", ar: "اصفرار خفيف" }, time: { tr: "1-3 ay", en: "1-3 months", ar: "١-٣ أشهر" } },
  { hex: "#B8B4A8", stage: { tr: "Altın Tonu", en: "Gold Tone", ar: "درجة ذهبية" }, time: { tr: "3-6 ay", en: "3-6 months", ar: "٣-٦ أشهر" } },
  { hex: "#8A8478", stage: { tr: "Bronz Tonu", en: "Bronze Tone", ar: "درجة برونزية" }, time: { tr: "6-12 ay", en: "6-12 months", ar: "٦-١٢ شهر" } },
  { hex: "#5A5248", stage: { tr: "Koyu Patina", en: "Dark Patina", ar: "زنجار غامق" }, time: { tr: "1-2 yıl", en: "1-2 years", ar: "١-٢ سنة" } },
  { hex: "#2A2420", stage: { tr: "Derin Siyah", en: "Deep Black", ar: "أسود عميق" }, time: { tr: "2+ yıl", en: "2+ years", ar: "٢+ سنة" } },
];
const GEMS = [
  { hex: "#4B0082", name: { tr: "Ametist", en: "Amethyst", ar: "أماثيست" } },
  { hex: "#40E0D0", name: { tr: "Turkuaz", en: "Turquoise", ar: "فيروز" } },
  { hex: "#1E3A5F", name: { tr: "Lapis Lazuli", en: "Lapis Lazuli", ar: "لازورد" } },
  { hex: "#AADAFF", name: { tr: "Ay Taşı", en: "Moonstone", ar: "حجر القمر" } },
  { hex: "#DC143C", name: { tr: "Garnet", en: "Garnet", ar: "عقيق" } },
  { hex: "#228B22", name: { tr: "Zümrüt", en: "Emerald", ar: "زمرد" } },
  { hex: "#000000", name: { tr: "Oniks", en: "Onyx", ar: "أونيكس" } },
  { hex: "#FF6347", name: { tr: "Mercan", en: "Coral", ar: "مرجان" } },
];

const fontD="'Playfair Display',serif",fontB="'Source Sans 3',sans-serif",fontAr="'Noto Naskh Arabic',serif",gold="#D4AF37",acnt="#C0C0C0";

function ColorSwatch({hex,label,sub,dark,onClick}){
  const bdr=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)";
  const ts=dark?"#a0a0a0":"#555";
  return(
    <div onClick={onClick} style={{cursor:"pointer",borderRadius:10,border:`1px solid ${bdr}`,overflow:"hidden",transition:"transform 0.2s"}}
      onMouseEnter={e=>e.currentTarget.style.transform="scale(1.03)"} onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
      <div style={{height:60,background:hex,borderBottom:`1px solid ${bdr}`}}/>
      <div style={{padding:"10px 12px"}}>
        <div style={{fontSize:12,fontWeight:600,marginBottom:2}}>{label}</div>
        {sub&&<div style={{fontSize:10,color:ts}}>{sub}</div>}
        <div style={{fontSize:9,color:ts,fontFamily:"'JetBrains Mono',monospace",marginTop:4,opacity:0.7}}>{hex}</div>
      </div>
    </div>
  );
}

export default function SilverAtlasColorPaletteTool(){
  const[lang,setLang]=useState("tr");const[dark,setDark]=useState(true);const[copied,setCopied]=useState(null);
  const t=T[lang],isRTL=lang==="ar";
  const tp=dark?"#e8e8e8":"#1a1a2e",ts=dark?"#a0a0a0":"#555",bgM=dark?"#0f0f14":"#fafaf5";
  const bdr=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)";
  useEffect(()=>{const l=document.createElement("link");l.href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;600&family=Noto+Naskh+Arabic:wght@400;600&family=JetBrains+Mono:wght@400;600&display=swap";l.rel="stylesheet";document.head.appendChild(l);},[]);

  const copyColor=(hex)=>{
    if(navigator.clipboard){navigator.clipboard.writeText(hex);}
    setCopied(hex);setTimeout(()=>setCopied(null),1500);
  };

  return(
    <div dir={isRTL?"rtl":"ltr"} style={{fontFamily:isRTL?fontAr:fontB,background:bgM,color:tp,minHeight:"100vh"}}>
      <nav style={{position:"sticky",top:0,zIndex:50,padding:"10px 20px",background:dark?"rgba(15,15,20,0.92)":"rgba(250,250,245,0.92)",backdropFilter:"blur(12px)",borderBottom:`1px solid ${bdr}`,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${acnt},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div>
          <div><div style={{fontFamily:fontD,fontWeight:600,fontSize:14,lineHeight:1}}>{t.nav}</div><div style={{fontSize:9,color:ts}}>{t.navSub}</div></div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:6}}>
          {["tr","en","ar"].map(l=>(<button key={l} onClick={()=>setLang(l)} style={{padding:"4px 10px",borderRadius:6,border:`1px solid ${lang===l?gold:bdr}`,background:lang===l?gold+"15":"transparent",cursor:"pointer",color:lang===l?gold:ts,fontSize:11,fontWeight:600}}>{l.toUpperCase()}</button>))}
          <button onClick={()=>setDark(!dark)} style={{marginLeft:8,padding:"4px 10px",borderRadius:6,border:`1px solid ${bdr}`,background:"transparent",cursor:"pointer",color:ts,fontSize:11}}>{dark?"☀️":"🌙"} {t.darkMode}</button>
        </div>
      </nav>
      <div style={{maxWidth:700,margin:"0 auto",padding:"32px 20px"}}>
        <h1 style={{fontFamily:isRTL?fontAr:fontD,fontSize:"clamp(24px,4vw,36px)",fontWeight:700,marginBottom:8}}>{t.title}</h1>
        <p style={{fontSize:14,color:ts,marginBottom:8}}>{t.subtitle}</p>
        <p style={{fontSize:11,color:ts,marginBottom:32,opacity:0.7}}>{t.click}</p>
        {copied&&<div style={{position:"fixed",top:80,left:"50%",transform:"translateX(-50%)",padding:"8px 20px",borderRadius:8,background:gold,color:"#0f0f14",fontSize:12,fontWeight:600,zIndex:100}}>{t.copyHex}: {copied}</div>}

        {/* Alloy Colors */}
        <div style={{marginBottom:32}}>
          <h2 style={{fontFamily:fontD,fontSize:20,fontWeight:600,marginBottom:16}}>🎨 {t.alloyTitle}</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))",gap:10}}>
            {ALLOYS.map((a,i)=>(<ColorSwatch key={i} hex={a.hex} label={a.name[lang]} sub={a.note[lang]} dark={dark} onClick={()=>copyColor(a.hex)}/>))}
          </div>
        </div>

        {/* Patina Stages */}
        <div style={{marginBottom:32}}>
          <h2 style={{fontFamily:fontD,fontSize:20,fontWeight:600,marginBottom:8}}>⏳ {t.patinaTitle}</h2>
          <p style={{fontSize:12,color:ts,marginBottom:16}}>{t.patinaNote}</p>
          <div style={{display:"flex",gap:2,borderRadius:12,overflow:"hidden",marginBottom:12}}>
            {PATINA.map((p,i)=>(<div key={i} style={{flex:1,height:48,background:p.hex,cursor:"pointer"}} onClick={()=>copyColor(p.hex)} title={p.hex}/>))}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(100px,1fr))",gap:8}}>
            {PATINA.map((p,i)=>(<div key={i} style={{textAlign:"center"}}>
              <div style={{width:20,height:20,borderRadius:"50%",background:p.hex,margin:"0 auto 4px",border:`1px solid ${bdr}`}}/>
              <div style={{fontSize:10,fontWeight:600}}>{p.stage[lang]}</div>
              <div style={{fontSize:9,color:ts}}>{p.time[lang]}</div>
            </div>))}
          </div>
        </div>

        {/* Gem Harmony */}
        <div style={{marginBottom:32}}>
          <h2 style={{fontFamily:fontD,fontSize:20,fontWeight:600,marginBottom:8}}>💎 {t.gemTitle}</h2>
          <p style={{fontSize:12,color:ts,marginBottom:16}}>{t.gemNote}</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(100px,1fr))",gap:10}}>
            {GEMS.map((g,i)=>(
              <div key={i} onClick={()=>copyColor(g.hex)} style={{cursor:"pointer",textAlign:"center",padding:12,borderRadius:10,border:`1px solid ${bdr}`,transition:"transform 0.2s"}}
                onMouseEnter={e=>e.currentTarget.style.transform="scale(1.05)"} onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
                <div style={{width:40,height:40,borderRadius:"50%",background:g.hex,margin:"0 auto 8px",border:`2px solid ${acnt}44`,boxShadow:`0 0 12px ${g.hex}33`}}/>
                <div style={{fontSize:11,fontWeight:600}}>{g.name[lang]}</div>
                <div style={{fontSize:9,color:ts,fontFamily:"'JetBrains Mono',monospace",marginTop:2}}>{g.hex}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver + Gem Preview */}
        <div style={{padding:20,borderRadius:14,border:`1px solid ${bdr}`,background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)",textAlign:"center",marginBottom:32}}>
          <div style={{fontSize:13,color:ts,marginBottom:12}}>{t.complementTitle}</div>
          <div style={{display:"flex",justifyContent:"center",gap:4,flexWrap:"wrap"}}>
            {GEMS.map((g,i)=>(
              <div key={i} style={{display:"flex",borderRadius:8,overflow:"hidden",border:`1px solid ${bdr}`}}>
                <div style={{width:40,height:30,background:acnt}}/>
                <div style={{width:40,height:30,background:g.hex}}/>
              </div>
            ))}
          </div>
        </div>

        <div style={{border:`1px solid ${gold}22`,borderRadius:16,padding:24,textAlign:"center",background:dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.05)"}}>
          <p style={{fontSize:14,color:tp,marginBottom:12}}>{t.sponsor.text}</p>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"10px 24px",borderRadius:10,background:`linear-gradient(135deg,${acnt},${gold})`,color:"#0f0f14",fontSize:13,fontWeight:600,textDecoration:"none"}}>📸 {t.sponsor.cta}</a>
          <p style={{fontSize:11,color:ts,marginTop:10,opacity:0.7}}>{t.sponsor.note}</p>
        </div>
      </div>
      <footer style={{marginTop:40,borderTop:`1px solid ${bdr}`,padding:24,textAlign:"center",background:dark?"#0c0c10":"#f5f5f0"}}><div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:8}}><div style={{width:22,height:22,borderRadius:"50%",background:`linear-gradient(135deg,${acnt},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:14}}>{t.nav}</span></div><p style={{fontSize:11,color:ts}}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p></footer>
    </div>
  );
}
