import { useState } from "react";
const T={tr:{title:"Darphane Damga Tanımlayıcı",subtitle:"Gümüş parçanızdaki damgayı arayarak ülke ve dönem bilgisine ulaşın",search:"Damga sembolü veya ülke ara...",results:"Sonuçlar",noResult:"Eşleşme bulunamadı",sponsor:{text:"Damgalı 925 ayar gümüş takıları keşfedin.",cta:"İstanbul Gümüş"}},
en:{title:"Hallmark Stamp Identifier",subtitle:"Search the stamp on your silver piece to find country and period info",search:"Search stamp symbol or country...",results:"Results",noResult:"No matches found",sponsor:{text:"Discover hallmarked 925 sterling silver.",cta:"İstanbul Gümüş"}},
ar:{title:"معرّف ختم الدمغة",subtitle:"ابحث عن الختم على قطعتك الفضية لمعرفة البلد والفترة",search:"ابحث عن رمز ختم أو بلد...",results:"النتائج",noResult:"لا توجد نتائج",sponsor:{text:"اكتشف فضة ٩٢٥ مختومة.",cta:"إسطنبول غوموش"}}
};
const STAMPS=[
{symbol:"Lion Passant 🦁",country:{tr:"İngiltere",en:"England",ar:"إنجلترا"},office:{tr:"Assay Office",en:"Assay Office",ar:"مكتب الفحص"},period:"1544+",purity:"925",mandatory:true},
{symbol:"Minerva Head 🏛️",country:{tr:"Fransa",en:"France",ar:"فرنسا"},office:{tr:"Bureau de la Garantie",en:"Bureau de la Garantie",ar:"مكتب الضمان"},period:"1838+",purity:"800/925/950",mandatory:true},
{symbol:"Crescent Moon ☽",country:{tr:"Almanya",en:"Germany",ar:"ألمانيا"},office:{tr:"Öz-denetim",en:"Self-regulation",ar:"تنظيم ذاتي"},period:"1884+",purity:"800/925",mandatory:false},
{symbol:"925 + Firma Kodu",country:{tr:"Türkiye",en:"Turkey",ar:"تركيا"},office:{tr:"Darphane",en:"State Mint",ar:"دار الضرب"},period:"1923+",purity:"800/900/925",mandatory:true},
{symbol:"Kokoshnik 👩",country:{tr:"Rusya",en:"Russia",ar:"روسيا"},office:{tr:"Devlet Assay",en:"State Assay",ar:"فحص الدولة"},period:"1899+",purity:"800/875/925/960",mandatory:true},
{symbol:"Star ⭐ + Number",country:{tr:"İtalya",en:"Italy",ar:"إيطاليا"},office:{tr:"Ufficio del Saggio",en:"Assay Office",ar:"مكتب الفحص"},period:"1872+",purity:"800/925",mandatory:true},
{symbol:"STERLING / 925",country:{tr:"ABD",en:"USA",ar:"الولايات المتحدة"},office:{tr:"FTC",en:"FTC",ar:"FTC"},period:"1906+",purity:"925",mandatory:false},
{symbol:"Lotus 🪷",country:{tr:"Mısır",en:"Egypt",ar:"مصر"},office:{tr:"Damga İdaresi",en:"Stamp Administration",ar:"إدارة الدمغة"},period:"1916+",purity:"600/800/900/925",mandatory:true},
{symbol:"BIS Triangle △",country:{tr:"Hindistan",en:"India",ar:"الهند"},office:{tr:"BIS",en:"Bureau of Indian Standards",ar:"مكتب المعايير الهندية"},period:"2021+",purity:"800/925/999",mandatory:true},
{symbol:"CCM ⚖️",country:{tr:"Uluslararası",en:"International",ar:"دولي"},office:{tr:"Viyana Konvansiyonu",en:"Vienna Convention",ar:"اتفاقية فيينا"},period:"1972+",purity:"800/925/999",mandatory:false},
{symbol:"Anchor ⚓",country:{tr:"İngiltere (Birmingham)",en:"England (Birmingham)",ar:"إنجلترا (برمنغهام)"},office:{tr:"Birmingham Assay",en:"Birmingham Assay Office",ar:"مكتب فحص برمنغهام"},period:"1773+",purity:"925",mandatory:true},
{symbol:"Rose 🌹",country:{tr:"İngiltere (Sheffield)",en:"England (Sheffield)",ar:"إنجلترا (شيفيلد)"},office:{tr:"Sheffield Assay",en:"Sheffield Assay Office",ar:"مكتب فحص شيفيلد"},period:"1773+",purity:"925",mandatory:true},
];
export default function StampIdentifier(){
const[lang,setLang]=useState("tr");const[dark,setDark]=useState(true);const[query,setQuery]=useState("");const t=T[lang];const isRTL=lang==="ar";
const filtered=query.length>0?STAMPS.filter(s=>s.symbol.toLowerCase().includes(query.toLowerCase())||s.country[lang].toLowerCase().includes(query.toLowerCase())||s.purity.includes(query)):STAMPS;
const bgP=dark?"#0f0f14":"#FAFAF5";const textP=dark?"#e8e8ec":"#2C2C2C";const textS=dark?"#9a9aaa":"#6B7280";const accent=dark?"#C0C0C0":"#708090";const gold="#D4AF37";const border=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)";const bgCard=dark?"#1a1a24":"#ffffff";const fontD="'Playfair Display',Georgia,serif";const fontB=lang==="ar"?"'Noto Naskh Arabic',serif":"'Source Sans 3',sans-serif";
return(<div dir={isRTL?"rtl":"ltr"} style={{fontFamily:fontB,background:bgP,color:textP,minHeight:"100vh"}}>
<style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');*{margin:0;padding:0;box-sizing:border-box}@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}input[type=text]{width:100%;padding:14px 18px;border-radius:10px;border:1px solid ${border};background:${bgCard};color:${textP};font-size:15px;font-family:${fontB};outline:none}input[type=text]:focus{border-color:${gold}}`}</style>
<nav style={{position:"sticky",top:0,zIndex:100,background:dark?"rgba(15,15,20,0.88)":"rgba(250,250,245,0.88)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${border}`,padding:"0 24px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"}}><div style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:16}}>SilverAtlas</span></div><div style={{display:"flex",alignItems:"center",gap:12}}><div style={{display:"flex",gap:2,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)",borderRadius:7,padding:2}}>{["tr","en","ar"].map(l=>(<button key={l} onClick={()=>setLang(l)} style={{border:"none",cursor:"pointer",padding:"3px 9px",borderRadius:5,fontSize:11,fontWeight:lang===l?600:400,background:lang===l?(dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.08)"):"transparent",color:lang===l?textP:textS}}>{l==="ar"?"عر":l.toUpperCase()}</button>))}</div><button onClick={()=>setDark(!dark)} style={{border:"none",cursor:"pointer",background:"transparent",color:textS,fontSize:16,padding:4}}>{dark?"☀️":"🌙"}</button></div></nav>
<div style={{maxWidth:640,margin:"0 auto",padding:"40px 24px 80px",animation:"fadeUp 0.6s ease both"}}>
<h1 style={{fontFamily:fontD,fontSize:"clamp(24px,4vw,36px)",fontWeight:700,textAlign:"center",marginBottom:8}}>{t.title}</h1>
<p style={{textAlign:"center",color:textS,fontSize:14,marginBottom:24}}>{t.subtitle}</p>
<div style={{marginBottom:24}}><input type="text" placeholder={t.search} value={query} onChange={e=>setQuery(e.target.value)}/></div>
<div style={{fontSize:13,color:textS,marginBottom:12}}>{t.results}: {filtered.length}</div>
{filtered.length===0?<p style={{textAlign:"center",color:textS,padding:40}}>{t.noResult}</p>:
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12}}>
{filtered.map((s,i)=>(<div key={i} style={{background:bgCard,borderRadius:12,padding:16,border:`1px solid ${border}`,transition:"transform 0.2s"}} onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"} onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}>
<div style={{fontSize:18,fontWeight:600,color:textP,marginBottom:6}}>{s.symbol}</div>
<div style={{fontSize:14,fontWeight:600,color:accent,marginBottom:4}}>{s.country[lang]}</div>
<div style={{fontSize:12,color:textS,marginBottom:4}}>{s.office[lang]}</div>
<div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:6}}>
<span style={{fontSize:10,padding:"2px 6px",borderRadius:4,background:`${gold}22`,color:gold,fontFamily:"'JetBrains Mono',monospace",fontWeight:600}}>{s.purity}</span>
<span style={{fontSize:10,padding:"2px 6px",borderRadius:4,background:`${accent}15`,color:accent}}>{s.period}</span>
<span style={{fontSize:10,padding:"2px 6px",borderRadius:4,background:s.mandatory?"rgba(76,175,80,0.15)":"rgba(255,152,0,0.15)",color:s.mandatory?"#4CAF50":"#FF9800"}}>{s.mandatory?(lang==="ar"?"إلزامي":lang==="en"?"Mandatory":"Zorunlu"):(lang==="ar"?"اختياري":lang==="en"?"Voluntary":"İsteğe Bağlı")}</span>
</div></div>))}
</div>}
<div style={{marginTop:24,background:`linear-gradient(135deg,${dark?"rgba(212,175,55,0.06)":"rgba(212,175,55,0.08)"},transparent)`,borderRadius:14,padding:24,textAlign:"center",border:`1px solid ${gold}22`}}><p style={{fontSize:14,color:textS,marginBottom:12}}>{t.sponsor.text}</p><a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{display:"inline-block",padding:"10px 28px",borderRadius:8,background:`linear-gradient(135deg,${gold},#c9a227)`,color:"#0f0f14",fontWeight:600,fontSize:14,textDecoration:"none"}}>{t.sponsor.cta}</a></div>
</div></div>);}
