import { useState, useEffect } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    title: "Gümüş Birim Dönüştürücü", subtitle: "Ağırlık, hacim ve fiyat birimlerini anında dönüştürün",
    weightTitle: "Ağırlık Dönüştürücü", amount: "Miktar", from: "Birimden", to: "Birime",
    result: "Sonuç", swap: "⇄", reset: "Sıfırla",
    priceTitle: "Fiyat Dönüştürücü", pricePerOz: "Spot Fiyat (USD/oz)", enterPrice: "Fiyat girin",
    priceResults: "Fiyat Karşılıkları",
    units: [
      { id: "g", name: "Gram (g)", factor: 1 },
      { id: "kg", name: "Kilogram (kg)", factor: 1000 },
      { id: "oz_troy", name: "Troy Ons (oz t)", factor: 31.1035 },
      { id: "oz_av", name: "Avoirdupois Ons (oz)", factor: 28.3495 },
      { id: "lb", name: "Pound (lb)", factor: 453.592 },
      { id: "tola", name: "Tola (Hindistan)", factor: 11.6638 },
      { id: "tael", name: "Tael (Çin/HK)", factor: 37.429 },
      { id: "momme", name: "Momme (Japonya)", factor: 3.75 },
      { id: "dirhem", name: "Dirhem (Osmanlı)", factor: 3.207 },
      { id: "miskal", name: "Miskal", factor: 4.6875 },
    ],
    quickRef: "Hızlı Referans",
    quickRefItems: [
      "1 Troy Ons = 31,1035 gram",
      "1 Kilogram = 32,1507 troy ons",
      "1 Tola = 11,6638 gram (Güney Asya)",
      "1 Tael = 37,429 gram (Doğu Asya)",
      "1 Dirhem = 3,207 gram (Osmanlı)",
    ],
    sponsor: { text: "925 ayar gümüş ürünlerimizi keşfedin.", cta: "Instagram'da Gör", note: "İstanbul Gümüş sponsorluğundadır." },
    darkMode: "Mod"
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    title: "Silver Unit Converter", subtitle: "Instantly convert weight, volume, and price units",
    weightTitle: "Weight Converter", amount: "Amount", from: "From", to: "To",
    result: "Result", swap: "⇄", reset: "Reset",
    priceTitle: "Price Converter", pricePerOz: "Spot Price (USD/oz)", enterPrice: "Enter price",
    priceResults: "Price Equivalents",
    units: [
      { id: "g", name: "Gram (g)", factor: 1 },
      { id: "kg", name: "Kilogram (kg)", factor: 1000 },
      { id: "oz_troy", name: "Troy Ounce (oz t)", factor: 31.1035 },
      { id: "oz_av", name: "Avoirdupois Ounce (oz)", factor: 28.3495 },
      { id: "lb", name: "Pound (lb)", factor: 453.592 },
      { id: "tola", name: "Tola (India)", factor: 11.6638 },
      { id: "tael", name: "Tael (China/HK)", factor: 37.429 },
      { id: "momme", name: "Momme (Japan)", factor: 3.75 },
      { id: "dirhem", name: "Dirhem (Ottoman)", factor: 3.207 },
      { id: "miskal", name: "Mithqal", factor: 4.6875 },
    ],
    quickRef: "Quick Reference",
    quickRefItems: [
      "1 Troy Ounce = 31.1035 grams",
      "1 Kilogram = 32.1507 troy ounces",
      "1 Tola = 11.6638 grams (South Asia)",
      "1 Tael = 37.429 grams (East Asia)",
      "1 Dirhem = 3.207 grams (Ottoman)",
    ],
    sponsor: { text: "Explore our 925 sterling silver products.", cta: "See on Instagram", note: "Sponsored by İstanbul Gümüş." },
    darkMode: "Mode"
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة معرفة الفضة",
    title: "محول وحدات الفضة", subtitle: "حوّل وحدات الوزن والحجم والسعر فورًا",
    weightTitle: "محول الأوزان", amount: "الكمية", from: "من", to: "إلى",
    result: "النتيجة", swap: "⇄", reset: "إعادة تعيين",
    priceTitle: "محول الأسعار", pricePerOz: "السعر الفوري (دولار/أونصة)", enterPrice: "أدخل السعر",
    priceResults: "معادلات السعر",
    units: [
      { id: "g", name: "غرام (g)", factor: 1 },
      { id: "kg", name: "كيلوغرام (kg)", factor: 1000 },
      { id: "oz_troy", name: "أونصة تروي (oz t)", factor: 31.1035 },
      { id: "oz_av", name: "أونصة أفوردوبوا (oz)", factor: 28.3495 },
      { id: "lb", name: "رطل (lb)", factor: 453.592 },
      { id: "tola", name: "تولا (الهند)", factor: 11.6638 },
      { id: "tael", name: "تايل (الصين)", factor: 37.429 },
      { id: "momme", name: "موم (اليابان)", factor: 3.75 },
      { id: "dirhem", name: "درهم (عثماني)", factor: 3.207 },
      { id: "miskal", name: "مثقال", factor: 4.6875 },
    ],
    quickRef: "مرجع سريع",
    quickRefItems: [
      "١ أونصة تروي = ٣١.١٠٣٥ غرام",
      "١ كيلوغرام = ٣٢.١٥٠٧ أونصة تروي",
      "١ تولا = ١١.٦٦٣٨ غرام (جنوب آسيا)",
      "١ تايل = ٣٧.٤٢٩ غرام (شرق آسيا)",
      "١ درهم = ٣.٢٠٧ غرام (عثماني)",
    ],
    sponsor: { text: "اكتشف منتجاتنا من الفضة ٩٢٥.", cta: "شاهد على إنستغرام", note: "برعاية إسطنبول غوموش." },
    darkMode: "الوضع"
  }
};

const fontD="'Playfair Display',serif",fontB="'Source Sans 3',sans-serif",fontAr="'Noto Naskh Arabic',serif",gold="#D4AF37",accent="#C0C0C0";

export default function SilverAtlasUnitConverterTool(){
  const[lang,setLang]=useState("tr");
  const[dark,setDark]=useState(true);
  const[amount,setAmount]=useState(1);
  const[fromUnit,setFromUnit]=useState("oz_troy");
  const[toUnit,setToUnit]=useState("g");
  const[spotPrice,setSpotPrice]=useState(32.5);

  const t=T[lang],isRTL=lang==="ar";
  const tp=dark?"#e8e8e8":"#1a1a2e",ts=dark?"#a0a0a0":"#555";
  const bgM=dark?"#0f0f14":"#fafaf5",bgC=dark?"#16161c":"#ffffff";
  const bdr=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)";

  const fromU=t.units.find(u=>u.id===fromUnit);
  const toU=t.units.find(u=>u.id===toUnit);
  const grams=amount*fromU.factor;
  const result=grams/toU.factor;

  useEffect(()=>{const l=document.createElement("link");l.href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;600&family=Noto+Naskh+Arabic:wght@400;600&family=JetBrains+Mono:wght@400;600&display=swap";l.rel="stylesheet";document.head.appendChild(l);},[]);

  const swapUnits=()=>{setFromUnit(toUnit);setToUnit(fromUnit);};
  const inputStyle={width:"100%",padding:"10px 14px",borderRadius:8,border:`1px solid ${bdr}`,background:bgC,color:tp,fontSize:16,fontWeight:600,fontFamily:"'JetBrains Mono',monospace"};
  const selectStyle={width:"100%",padding:"10px 14px",borderRadius:8,border:`1px solid ${bdr}`,background:bgC,color:tp,fontSize:13,fontFamily:fontB,cursor:"pointer"};

  const pricePerGram=spotPrice/31.1035;

  return(
    <div dir={isRTL?"rtl":"ltr"} style={{fontFamily:isRTL?fontAr:fontB,background:bgM,color:tp,minHeight:"100vh"}}>
      <nav style={{position:"sticky",top:0,zIndex:50,padding:"10px 20px",background:dark?"rgba(15,15,20,0.92)":"rgba(250,250,245,0.92)",backdropFilter:"blur(12px)",borderBottom:`1px solid ${bdr}`,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div>
          <div><div style={{fontFamily:fontD,fontWeight:600,fontSize:14,lineHeight:1}}>{t.nav}</div><div style={{fontSize:9,color:ts}}>{t.navSub}</div></div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:6}}>
          {["tr","en","ar"].map(l=>(<button key={l} onClick={()=>setLang(l)} style={{padding:"4px 10px",borderRadius:6,border:`1px solid ${lang===l?gold:bdr}`,background:lang===l?gold+"15":"transparent",cursor:"pointer",color:lang===l?gold:ts,fontSize:11,fontWeight:600}}>{l.toUpperCase()}</button>))}
          <button onClick={()=>setDark(!dark)} style={{marginLeft:8,padding:"4px 10px",borderRadius:6,border:`1px solid ${bdr}`,background:"transparent",cursor:"pointer",color:ts,fontSize:11}}>{dark?"☀️":"🌙"} {t.darkMode}</button>
        </div>
      </nav>

      <div style={{maxWidth:600,margin:"0 auto",padding:"32px 20px"}}>
        <h1 style={{fontFamily:isRTL?fontAr:fontD,fontSize:"clamp(24px,4vw,36px)",fontWeight:700,marginBottom:8}}>{t.title}</h1>
        <p style={{fontSize:14,color:ts,marginBottom:32}}>{t.subtitle}</p>

        {/* Weight Converter */}
        <div style={{padding:24,borderRadius:14,border:`1px solid ${bdr}`,background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)",marginBottom:24}}>
          <h2 style={{fontFamily:fontD,fontSize:18,fontWeight:600,marginBottom:20,color:tp}}>⚖️ {t.weightTitle}</h2>

          <div style={{display:"grid",gridTemplateColumns:"1fr auto 1fr",gap:12,alignItems:"end",marginBottom:20}}>
            <div>
              <label style={{fontSize:12,color:ts,display:"block",marginBottom:6}}>{t.from}</label>
              <select value={fromUnit} onChange={e=>setFromUnit(e.target.value)} style={selectStyle}>
                {t.units.map(u=>(<option key={u.id} value={u.id}>{u.name}</option>))}
              </select>
            </div>
            <button onClick={swapUnits} style={{padding:"10px 14px",borderRadius:8,border:`1px solid ${bdr}`,background:"transparent",cursor:"pointer",color:gold,fontSize:18,fontWeight:700}}>{t.swap}</button>
            <div>
              <label style={{fontSize:12,color:ts,display:"block",marginBottom:6}}>{t.to}</label>
              <select value={toUnit} onChange={e=>setToUnit(e.target.value)} style={selectStyle}>
                {t.units.map(u=>(<option key={u.id} value={u.id}>{u.name}</option>))}
              </select>
            </div>
          </div>

          <div style={{marginBottom:20}}>
            <label style={{fontSize:12,color:ts,display:"block",marginBottom:6}}>{t.amount}</label>
            <input type="number" value={amount} onChange={e=>setAmount(Math.max(0,Number(e.target.value)))} style={inputStyle} min="0" step="0.01"/>
          </div>

          <div style={{padding:20,borderRadius:12,background:dark?`${gold}08`:`${gold}10`,border:`1px solid ${gold}22`,textAlign:"center"}}>
            <div style={{fontSize:12,color:ts,marginBottom:6}}>{t.result}</div>
            <div style={{fontSize:32,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",color:gold}}>
              {result < 0.01 ? result.toExponential(4) : result < 100 ? result.toFixed(4) : result.toFixed(2)}
            </div>
            <div style={{fontSize:13,color:ts,marginTop:4}}>{toU.name}</div>
          </div>

          {/* All units table */}
          <div style={{marginTop:20,overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
              <tbody>
                {t.units.map(u=>{
                  const val=grams/u.factor;
                  return(
                    <tr key={u.id} style={{background:u.id===toUnit?(dark?"rgba(212,175,55,0.06)":"rgba(212,175,55,0.08)"):"transparent"}}>
                      <td style={{padding:"8px 12px",borderBottom:`1px solid ${bdr}`,color:ts,fontWeight:500}}>{u.name}</td>
                      <td style={{padding:"8px 12px",borderBottom:`1px solid ${bdr}`,color:u.id===toUnit?gold:tp,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",textAlign:"right"}}>
                        {val<0.01?val.toExponential(3):val<100?val.toFixed(4):val.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Price Converter */}
        <div style={{padding:24,borderRadius:14,border:`1px solid ${bdr}`,background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)",marginBottom:24}}>
          <h2 style={{fontFamily:fontD,fontSize:18,fontWeight:600,marginBottom:20,color:tp}}>💰 {t.priceTitle}</h2>
          <div style={{marginBottom:16}}>
            <label style={{fontSize:12,color:ts,display:"block",marginBottom:6}}>{t.pricePerOz}</label>
            <input type="number" value={spotPrice} onChange={e=>setSpotPrice(Math.max(0,Number(e.target.value)))} style={inputStyle} min="0" step="0.1"/>
          </div>
          <div style={{fontSize:13,color:ts,marginBottom:16}}>{t.priceResults}:</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {[
              {label:"USD/g",value:(pricePerGram).toFixed(4)},
              {label:"USD/kg",value:(pricePerGram*1000).toFixed(2)},
              {label:"USD/oz (troy)",value:spotPrice.toFixed(2)},
              {label:"USD/tola",value:(pricePerGram*11.6638).toFixed(2)},
              {label:"USD/tael",value:(pricePerGram*37.429).toFixed(2)},
              {label:"USD/dirhem",value:(pricePerGram*3.207).toFixed(4)},
            ].map((p,i)=>(
              <div key={i} style={{padding:"12px 14px",borderRadius:10,border:`1px solid ${bdr}`,background:dark?"rgba(255,255,255,0.02)":"#fff"}}>
                <div style={{fontSize:10,color:ts,marginBottom:4}}>{p.label}</div>
                <div style={{fontSize:16,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",color:gold}}>${p.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Reference */}
        <div style={{padding:20,borderRadius:12,border:`1px solid ${bdr}`,background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)",marginBottom:32}}>
          <h3 style={{fontSize:14,fontWeight:600,marginBottom:12,color:gold}}>📋 {t.quickRef}</h3>
          {t.quickRefItems.map((item,i)=>(
            <div key={i} style={{fontSize:13,color:ts,lineHeight:1.8,fontFamily:"'JetBrains Mono',monospace"}}>{item}</div>
          ))}
        </div>

        {/* Sponsor */}
        <div style={{border:`1px solid ${gold}22`,borderRadius:16,padding:24,textAlign:"center",background:dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.05)"}}>
          <p style={{fontSize:14,color:tp,marginBottom:12}}>{t.sponsor.text}</p>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"10px 24px",borderRadius:10,background:`linear-gradient(135deg,${accent},${gold})`,color:"#0f0f14",fontSize:13,fontWeight:600,textDecoration:"none"}}>📸 {t.sponsor.cta}</a>
          <p style={{fontSize:11,color:ts,marginTop:10,opacity:0.7}}>{t.sponsor.note}</p>
        </div>
      </div>

      <footer style={{marginTop:40,borderTop:`1px solid ${bdr}`,padding:24,textAlign:"center",background:dark?"#0c0c10":"#f5f5f0"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:8}}>
          <div style={{width:22,height:22,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div>
          <span style={{fontFamily:fontD,fontWeight:600,fontSize:14}}>{t.nav}</span>
        </div>
        <p style={{fontSize:11,color:ts}}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p>
      </footer>
    </div>
  );
}
