import { useState, useEffect } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    title: "Karat / Ayar Dönüştürücü", subtitle: "Karat, milesimal ve yüzde sistemleri arasında anında dönüşüm",
    karat: "Karat (K)", millesimal: "Milesimal (‰)", percentage: "Yüzde (%)", fineness: "Saflık",
    purity: "Saflık Oranı", inputLabel: "Değer Girin", system: "Sistem Seçin",
    goldKarat: "Altın Karat Sistemi", silverMillesimal: "Gümüş Milesimal Sistemi",
    commonGold: "Yaygın Altın Ayarları", commonSilver: "Yaygın Gümüş Ayarları",
    equivalent: "Eşdeğer Değerler", pureContent: "Saf Metal İçeriği",
    alloyContent: "Alaşım İçeriği", result: "Dönüşüm Sonucu",
    sponsor: { text: "925 ayar gümüş ürünlerimizi keşfedin.", cta: "Instagram'da Gör", note: "İstanbul Gümüş sponsorluğundadır." },
    darkMode: "Mod"
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    title: "Karat / Fineness Converter", subtitle: "Instant conversion between karat, millesimal, and percentage systems",
    karat: "Karat (K)", millesimal: "Millesimal (‰)", percentage: "Percentage (%)", fineness: "Fineness",
    purity: "Purity Ratio", inputLabel: "Enter Value", system: "Select System",
    goldKarat: "Gold Karat System", silverMillesimal: "Silver Millesimal System",
    commonGold: "Common Gold Grades", commonSilver: "Common Silver Grades",
    equivalent: "Equivalent Values", pureContent: "Pure Metal Content",
    alloyContent: "Alloy Content", result: "Conversion Result",
    sponsor: { text: "Explore our 925 sterling silver products.", cta: "See on Instagram", note: "Sponsored by İstanbul Gümüş." },
    darkMode: "Mode"
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة معرفة الفضة",
    title: "محول القيراط / العيار", subtitle: "تحويل فوري بين أنظمة القيراط والألفي والنسبة المئوية",
    karat: "قيراط (K)", millesimal: "ألفي (‰)", percentage: "نسبة مئوية (%)", fineness: "النقاء",
    purity: "نسبة النقاء", inputLabel: "أدخل القيمة", system: "اختر النظام",
    goldKarat: "نظام قيراط الذهب", silverMillesimal: "نظام عيار الفضة الألفي",
    commonGold: "عيارات الذهب الشائعة", commonSilver: "عيارات الفضة الشائعة",
    equivalent: "القيم المعادلة", pureContent: "محتوى المعدن النقي",
    alloyContent: "محتوى السبيكة", result: "نتيجة التحويل",
    sponsor: { text: "اكتشف منتجاتنا من الفضة ٩٢٥.", cta: "شاهد على إنستغرام", note: "برعاية إسطنبول غوموش." },
    darkMode: "الوضع"
  }
};

const GOLD_PRESETS = [
  { k: 24, label: "24K", use: { tr: "Saf altın, külçe", en: "Pure gold, bullion", ar: "ذهب خالص" } },
  { k: 22, label: "22K", use: { tr: "Hint/Arap takı", en: "Indian/Arab jewelry", ar: "مجوهرات هندية/عربية" } },
  { k: 18, label: "18K", use: { tr: "Lüks takı standardı", en: "Luxury jewelry standard", ar: "معيار المجوهرات الفاخرة" } },
  { k: 14, label: "14K", use: { tr: "Günlük takı (Türkiye/ABD)", en: "Daily wear (Turkey/US)", ar: "الاستخدام اليومي" } },
  { k: 10, label: "10K", use: { tr: "Ekonomik takı (ABD min.)", en: "Budget jewelry (US min.)", ar: "مجوهرات اقتصادية" } },
  { k: 9, label: "9K", use: { tr: "İngiliz ekonomik", en: "UK budget", ar: "اقتصادي بريطاني" } },
];
const SILVER_PRESETS = [
  { m: 999, label: "999", use: { tr: "Saf gümüş, külçe", en: "Fine silver, bullion", ar: "فضة نقية" } },
  { m: 970, label: "970", use: { tr: "Sanat eserleri", en: "Art objects", ar: "أعمال فنية" } },
  { m: 950, label: "950 Britannia", use: { tr: "İngiliz geleneği", en: "British tradition", ar: "تقليد بريطاني" } },
  { m: 925, label: "925 Sterling", use: { tr: "Takı standardı", en: "Jewelry standard", ar: "معيار المجوهرات" } },
  { m: 900, label: "900 Coin", use: { tr: "Sikke gümüşü", en: "Coin silver", ar: "فضة العملات" } },
  { m: 835, label: "835", use: { tr: "Kıta Avrupası", en: "Continental Europe", ar: "أوروبا القارية" } },
  { m: 800, label: "800", use: { tr: "Antik eşya", en: "Antique ware", ar: "أدوات عتيقة" } },
];

const fontD="'Playfair Display',serif",fontB="'Source Sans 3',sans-serif",fontAr="'Noto Naskh Arabic',serif",goldC="#D4AF37",accent="#C0C0C0";

export default function SilverAtlasKaratCalculatorTool(){
  const[lang,setLang]=useState("tr");const[dark,setDark]=useState(true);
  const[system,setSystem]=useState("millesimal"); // karat, millesimal, percentage
  const[value,setValue]=useState(925);

  const t=T[lang],isRTL=lang==="ar";
  const tp=dark?"#e8e8e8":"#1a1a2e",ts=dark?"#a0a0a0":"#555",bgM=dark?"#0f0f14":"#fafaf5",bgC=dark?"#16161c":"#ffffff";
  const bdr=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)";
  useEffect(()=>{const l=document.createElement("link");l.href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;600&family=Noto+Naskh+Arabic:wght@400;600&family=JetBrains+Mono:wght@400;600&display=swap";l.rel="stylesheet";document.head.appendChild(l);},[]);

  // Convert to percentage (universal base)
  let pct;
  if(system==="karat") pct=(value/24)*100;
  else if(system==="millesimal") pct=value/10;
  else pct=value;
  pct=Math.max(0,Math.min(100,pct));

  const toKarat=(pct/100*24);
  const toMillesimal=(pct*10);
  const toPercentage=pct;

  const inputStyle={width:"100%",padding:"12px 16px",borderRadius:10,border:`1px solid ${bdr}`,background:bgC,color:tp,fontSize:20,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",textAlign:"center"};

  return(
    <div dir={isRTL?"rtl":"ltr"} style={{fontFamily:isRTL?fontAr:fontB,background:bgM,color:tp,minHeight:"100vh"}}>
      <nav style={{position:"sticky",top:0,zIndex:50,padding:"10px 20px",background:dark?"rgba(15,15,20,0.92)":"rgba(250,250,245,0.92)",backdropFilter:"blur(12px)",borderBottom:`1px solid ${bdr}`,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${goldC})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div>
          <div><div style={{fontFamily:fontD,fontWeight:600,fontSize:14,lineHeight:1}}>{t.nav}</div><div style={{fontSize:9,color:ts}}>{t.navSub}</div></div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:6}}>
          {["tr","en","ar"].map(l=>(<button key={l} onClick={()=>setLang(l)} style={{padding:"4px 10px",borderRadius:6,border:`1px solid ${lang===l?goldC:bdr}`,background:lang===l?goldC+"15":"transparent",cursor:"pointer",color:lang===l?goldC:ts,fontSize:11,fontWeight:600}}>{l.toUpperCase()}</button>))}
          <button onClick={()=>setDark(!dark)} style={{marginLeft:8,padding:"4px 10px",borderRadius:6,border:`1px solid ${bdr}`,background:"transparent",cursor:"pointer",color:ts,fontSize:11}}>{dark?"☀️":"🌙"} {t.darkMode}</button>
        </div>
      </nav>

      <div style={{maxWidth:600,margin:"0 auto",padding:"32px 20px"}}>
        <h1 style={{fontFamily:isRTL?fontAr:fontD,fontSize:"clamp(24px,4vw,36px)",fontWeight:700,marginBottom:8}}>{t.title}</h1>
        <p style={{fontSize:14,color:ts,marginBottom:32}}>{t.subtitle}</p>

        {/* System selector */}
        <div style={{display:"flex",gap:8,marginBottom:20}}>
          {[
            {id:"karat",label:t.karat},
            {id:"millesimal",label:t.millesimal},
            {id:"percentage",label:t.percentage}
          ].map(s=>(
            <button key={s.id} onClick={()=>{setSystem(s.id);setValue(s.id==="karat"?toKarat:s.id==="millesimal"?toMillesimal:toPercentage);}} style={{
              flex:1,padding:"10px 8px",borderRadius:10,cursor:"pointer",
              border:`1px solid ${system===s.id?goldC:bdr}`,
              background:system===s.id?goldC+"15":"transparent",
              color:system===s.id?goldC:ts,fontSize:12,fontWeight:600
            }}>{s.label}</button>
          ))}
        </div>

        {/* Input */}
        <div style={{marginBottom:24}}>
          <label style={{fontSize:12,color:ts,display:"block",marginBottom:6}}>{t.inputLabel}</label>
          <input type="number" value={value} onChange={e=>setValue(Number(e.target.value))}
            min={0} max={system==="karat"?24:system==="millesimal"?999:100}
            step={system==="karat"?0.5:system==="millesimal"?1:0.1}
            style={inputStyle}/>
          <input type="range" min={0} max={system==="karat"?24:system==="millesimal"?999:100}
            step={system==="karat"?0.5:system==="millesimal"?1:0.1}
            value={value} onChange={e=>setValue(Number(e.target.value))}
            style={{width:"100%",marginTop:8,accentColor:goldC}}/>
        </div>

        {/* Results */}
        <div style={{padding:24,borderRadius:14,border:`1px solid ${goldC}33`,background:dark?`${goldC}06`:`${goldC}08`,marginBottom:24}}>
          <h3 style={{fontSize:14,fontWeight:600,marginBottom:16,color:goldC}}>{t.equivalent}</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
            {[
              {label:t.karat,value:toKarat.toFixed(1)+"K",active:system==="karat"},
              {label:t.millesimal,value:toMillesimal.toFixed(0)+"‰",active:system==="millesimal"},
              {label:t.percentage,value:toPercentage.toFixed(1)+"%",active:system==="percentage"},
            ].map((r,i)=>(
              <div key={i} style={{padding:14,borderRadius:10,border:`1px solid ${r.active?goldC+"44":bdr}`,background:dark?"rgba(255,255,255,0.02)":"#fff",textAlign:"center"}}>
                <div style={{fontSize:10,color:ts,marginBottom:4}}>{r.label}</div>
                <div style={{fontSize:22,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",color:r.active?goldC:tp}}>{r.value}</div>
              </div>
            ))}
          </div>
          {/* Purity bar */}
          <div style={{marginTop:16}}>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:ts,marginBottom:4}}>
              <span>{t.pureContent}: {pct.toFixed(1)}%</span>
              <span>{t.alloyContent}: {(100-pct).toFixed(1)}%</span>
            </div>
            <div style={{height:24,borderRadius:8,overflow:"hidden",display:"flex",border:`1px solid ${bdr}`}}>
              <div style={{width:`${pct}%`,background:`linear-gradient(90deg,${accent},${goldC})`,transition:"width 0.4s",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:600,color:"#0f0f14"}}>
                {pct>15&&`${pct.toFixed(0)}%`}
              </div>
              <div style={{flex:1,background:dark?"rgba(230,126,34,0.15)":"rgba(230,126,34,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:"#e67e22"}}>
                {(100-pct)>15&&`${(100-pct).toFixed(0)}%`}
              </div>
            </div>
          </div>
        </div>

        {/* Gold presets */}
        <div style={{marginBottom:24}}>
          <h3 style={{fontFamily:fontD,fontSize:16,fontWeight:600,marginBottom:12}}>🥇 {t.commonGold}</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(130px,1fr))",gap:8}}>
            {GOLD_PRESETS.map((g,i)=>(
              <div key={i} onClick={()=>{setSystem("karat");setValue(g.k);}} style={{
                cursor:"pointer",padding:"12px",borderRadius:10,border:`1px solid ${bdr}`,
                background:system==="karat"&&Math.abs(value-g.k)<0.1?(dark?"rgba(212,175,55,0.06)":"rgba(212,175,55,0.08)"):"transparent",
                transition:"all 0.2s"
              }}>
                <div style={{fontSize:16,fontWeight:700,color:goldC,fontFamily:"'JetBrains Mono',monospace"}}>{g.label}</div>
                <div style={{fontSize:10,color:ts,marginTop:4}}>{g.use[lang]}</div>
                <div style={{fontSize:9,color:ts,opacity:0.6,marginTop:2}}>{(g.k/24*100).toFixed(1)}% · {(g.k/24*1000).toFixed(0)}‰</div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver presets */}
        <div style={{marginBottom:32}}>
          <h3 style={{fontFamily:fontD,fontSize:16,fontWeight:600,marginBottom:12}}>🥈 {t.commonSilver}</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(130px,1fr))",gap:8}}>
            {SILVER_PRESETS.map((s,i)=>(
              <div key={i} onClick={()=>{setSystem("millesimal");setValue(s.m);}} style={{
                cursor:"pointer",padding:"12px",borderRadius:10,border:`1px solid ${bdr}`,
                background:system==="millesimal"&&Math.abs(value-s.m)<1?(dark?"rgba(192,192,192,0.06)":"rgba(192,192,192,0.08)"):"transparent",
                transition:"all 0.2s"
              }}>
                <div style={{fontSize:16,fontWeight:700,color:accent,fontFamily:"'JetBrains Mono',monospace"}}>{s.label}</div>
                <div style={{fontSize:10,color:ts,marginTop:4}}>{s.use[lang]}</div>
                <div style={{fontSize:9,color:ts,opacity:0.6,marginTop:2}}>{(s.m/10).toFixed(1)}% · {(s.m/1000*24).toFixed(1)}K</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{border:`1px solid ${goldC}22`,borderRadius:16,padding:24,textAlign:"center",background:dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.05)"}}>
          <p style={{fontSize:14,color:tp,marginBottom:12}}>{t.sponsor.text}</p>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"10px 24px",borderRadius:10,background:`linear-gradient(135deg,${accent},${goldC})`,color:"#0f0f14",fontSize:13,fontWeight:600,textDecoration:"none"}}>📸 {t.sponsor.cta}</a>
          <p style={{fontSize:11,color:ts,marginTop:10,opacity:0.7}}>{t.sponsor.note}</p>
        </div>
      </div>
      <footer style={{marginTop:40,borderTop:`1px solid ${bdr}`,padding:24,textAlign:"center",background:dark?"#0c0c10":"#f5f5f0"}}><div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:8}}><div style={{width:22,height:22,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${goldC})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:14}}>{t.nav}</span></div><p style={{fontSize:11,color:ts}}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p></footer>
    </div>
  );
}
