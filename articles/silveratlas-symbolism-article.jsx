import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Kültür", "Gümüş Sembolizmi"],
    category: "Kültür",
    title: "Gümüşün Sembolizmi",
    subtitle: "Ay metali, saflık sembolü ve mitolojik kökler — gümüşün kültürel anlamları",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "10 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Gümüş, yalnızca bir değerli metal değildir — insanlık tarihinin en derin sembollerinden birini taşır. Altın güneşi, gücü ve krallığı temsil ederken, gümüş Ay'ı, sezgiyi, dişil enerjiyi ve saflığı simgeler. Bu ikili karşıtlık, Mısır'dan Çin'e, Yunan'dan Türk-İslam kültürüne kadar evrenseldir.",
          "Gümüşün sembolik yolculuğu simyanın laboratuvarlarından şiirin dizelerine, dini metinlerden halk inançlarına uzanır. Bu makale, gümüşün farklı medeniyetlerdeki sembolik anlamlarını kapsamlı bir şekilde incelemektedir.",
        ],
      },
      {
        id: "ay", heading: "Ay Metali: Gümüş ve Selene",
        paragraphs: [
          "Gümüşün Ay ile özdeşleştirilmesi en az 5000 yıllık bir gelenektir. Sümerlerde gümüş, Ay tanrısı Sin'in (Nanna) kutsal metaliydi. Babil astronomlarının gezegen-metal eşleştirmesinde gümüş Ay'a atanmıştır — bu bağlantı simya geleneğinden modern astrolojiye kadar kesintisiz sürmektedir.",
          "Yunan mitolojisinde gümüş, Ay tanrıçası Selene ve av tanrıçası Artemis ile ilişkilendirilir. Artemis'in gümüş yayı (ἀργύρεος τόξον — arguros tokson) Homeros destanlarında sıkça geçer. Roma karşılığı Diana da gümüşle özdeşleşmiştir.",
          "Simyada gümüşün sembolü hilaldir (☽). Simyacılar gümüşü 'Luna' olarak adlandırmış, onu dişil prensip, sezgi, yansıma ve duygusal bilgelik ile ilişkilendirmiştir. Altın (Sol/☉) ve gümüş (Luna/☽) ikilisi, simyanın temel kutuplaşmasıdır.",
        ],
      },
      {
        id: "saflik", heading: "Saflık ve Arınma Sembolü",
        paragraphs: [
          "Gümüşün antimikrobiyal özelliği antik çağlarda bilinmese de, suyun gümüş kapta bozulmadığı deneyimsel olarak gözlemlenmiştir. Bu gözlem, gümüşü 'saflık metali' konumuna taşımıştır.",
          "Tevrat'ta gümüş, arınma ve test edilme metaforudur: 'Rabbin sözleri saf sözlerdir, toprak fırınında yedi kere arıtılmış gümüş gibidir' (Mezmur 12:6). Kur'an-ı Kerim'de cennet ehlinin gümüş kaplardan içeceği bildirilir.",
          "Hindu geleneğinde gümüş, Ay tanrısı Chandra'nın metali olarak kutsal kabul edilir. Puja (ibadet) törenlerinde gümüş kaplar kullanılır; gümüş, zihni arındıran ve sezgiyi güçlendiren bir metal olarak değerlendirilir.",
        ],
      },
      {
        id: "mitoloji", heading: "Mitoloji ve Efsaneler",
        widget: "mythGrid",
      },
      {
        id: "simya", heading: "Simya ve Ezoterik Gelenek",
        paragraphs: [
          "Simyada gümüş, Büyük Eser'in (Opus Magnum) ikinci aşaması olan Albedo (ağartma/beyazlaştırma) ile ilişkilidir. Nigredo (karartma) aşamasından geçen maddenin ilk saflaşma hali olarak gümüş, ruhani aydınlanmanın başlangıcını simgeler.",
          "Paracelsus, gümüşü 'beynin metali' olarak tanımlamıştır — zekâ, hafıza ve rüya ile bağlantılı. Orta Çağ Avrupası'nda rüya yorumu pratiklerinde gümüş nesnelerin uyku altına yerleştirildiği kaydedilmiştir.",
          "Kabalistik gelenekte gümüş, Hayat Ağacı'nda Yesod (temel) sefirasına karşılık gelir — bilinçaltı, rüyalar ve astral düzlem ile ilişkilidir. Bu bağlam, gümüşün 'görünmeyeni gösteren ayna' metaforunu güçlendirir.",
        ],
      },
      {
        id: "islam", heading: "İslam Geleneğinde Gümüş",
        paragraphs: [
          "İslam medeniyetinde gümüş özel bir yere sahiptir. Hz. Muhammed'in gümüş yüzük kullandığı, üzerinde 'Muhammadun Rasulullah' yazdığı rivayet edilir. Bu gelenek, Müslüman erkeklerin gümüş yüzük takmasının sünnet kabul edilmesinin temelidir.",
          "Kur'an'da cennet ehli gümüş bilezikler takacak (İnsan 76:21) ve gümüş kaplardan içecektir (İnsan 76:15-16). Gümüş, cenneti tasvir eden ayetlerde saflık ve bereketin sembolü olarak yer alır.",
          "İslam fıkhında erkeklerin altın takması haram, gümüş takması ise mubahtır. Bu hüküm, gümüşü İslam coğrafyasında erkek aksesuarının temel metali haline getirmiştir — bir sembolik tercih değil, dini bir zorunluluktan doğan kültürel pratik.",
        ],
      },
      {
        id: "halk", heading: "Halk İnançları ve Batıl İtikadlar",
        paragraphs: [
          "Gümüşün kötülüğe karşı koruyucu gücü, dünyanın birçok kültüründe ortak bir inançtır. Gümüş kurşun ile kurt adam öldürme motifi, 18. yüzyıl Avrupa folkloruna dayanır ve modern popüler kültürde (filmler, romanlar) hâlâ yaşamaktadır.",
          "Anadolu'da nazar boncuğunun gümüş çerçeveye takılması, gümüşün koruyucu enerjisini güçlendirdiğine inanılır. Bebeklere gümüş diş kaşığı hediye edilmesi, hem antimikrobiyal koruma hem de bereket duasıdır.",
          "Kelt geleneğinde gümüş, peri dünyası (Otherworld) ile bağlantılı görülür. İrlanda mitolojisinde Nuada'nın gümüş kolu, tanrısal iyileşmenin sembolüdür. İskandinav mitolojisinde Freya'nın gümüş gözyaşları dünyaya düştüğünde nehir olur.",
          "Uzak Doğu'da gümüş, Yin enerjisiyle (dişil, soğuk, alıcı) ilişkilendirilir. Çin tıbbında gümüş iğneler, enerji meridyenlerini dengelemek için kullanılmıştır. Japon geleneğinde gümüş (銀 — gin), nezaket ve inceliğin rengidir.",
        ],
      },
      {
        id: "modern", heading: "Modern Çağda Gümüş Sembolizmi",
        paragraphs: [
          "25. evlilik yıl dönümünün 'gümüş yıl dönümü' (silver anniversary) olarak kutlanması, gümüşün dayanıklılık ve zamanla artan değer sembolizmini yansıtır. Gümüş madalya, olimpiyatlarda ikinciliğin — mükemmele yakınlığın — işaretidir.",
          "Film endüstrisinde 'gümüş perde' (silver screen) ifadesi, erken sinema perdelerinin gümüş kaplı olmasından gelir. 'Her bulutun gümüş bir astarı vardır' (every cloud has a silver lining) atasözü, umut ve iyimserliğin evrensel metaforu olmuştur.",
          "Teknoloji çağında gümüş rengi, modernlik, yenilikçilik ve futurizm ile ilişkilendirilir — Apple'dan Tesla'ya, teknoloji devlerinin renk paletlerinde gümüş baskın bir yer tutar.",
        ],
      },
    ],
    myths: [
      { culture: "Yunan", title: "Gümüş Çağ", desc: "Hesiodos'un Beş Çağ'ında ikinci dönem. Altın Çağ'dan sonra gelen, daha az kusursuz ama hâlâ tanrısal olan insan nesli.", color: "#6C88B5" },
      { culture: "Norse", title: "Freya'nın Gözyaşları", desc: "Aşk tanrıçası Freya, kayıp kocası Od için ağladığında gözyaşları karada altın, denizde gümüş olur.", color: "#8B7EC8" },
      { culture: "Kelt", title: "Nuada'nın Gümüş Kolu", desc: "Tuatha Dé Danann kralı Nuada, savaşta kolunu kaybedince tanrısal demirci Dian Cécht ona mükemmel işleyen bir gümüş kol yapar.", color: "#5D9E6F" },
      { culture: "Japon", title: "Kintsugi ve Gümüş", desc: "Kırık seramiği altın veya gümüşle onarmak — kusuru güzele, yarayı bilgeliğe dönüştürmek.", color: "#C4956A" },
      { culture: "Hint", title: "Chandra'nın Işığı", desc: "Ay tanrısı Chandra, gümüş savaş arabasıyla geceyi aydınlatır. Pazartesi günü (Somvar) Chandra'ya adanmıştır.", color: "#B8860B" },
      { culture: "Anadolu", title: "Nazar ve Gümüş", desc: "Gümüş çerçeveli nazar boncuğu, kötü gözü hem çeker hem yansıtır — gümüşün ayna özelliği, koruyucu güç olarak yorumlanır.", color: "#4A90B0" },
    ],
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Gümüş neden Ay ile ilişkilendirilir?", a: "Gümüşün Ay-beyaz parlaklığı, gece karanlığındaki ışıması ve yansıtıcı yüzeyi, onu tüm medeniyetlerde Ay'ın metalik karşılığı yapmıştır. Simya geleneği bu bağlantıyı sistematize etmiştir." },
        { q: "İslam'da erkeklerin altın takması neden yasaktır?", a: "Hz. Muhammed'in hadislerine dayanan bu hüküm, lüks ve gösterişten kaçınma ilkesiyle ilişkilendirilir. Gümüş ise mübah olup, Peygamber'in de gümüş yüzük kullandığı rivayet edilir." },
        { q: "Gümüş kurşun gerçekten kurt adam öldürür mü?", a: "Bu tamamen folklorik bir motiftir, gerçek dünyada karşılığı yoktur. 18. yüzyıl Avrupa halk inançlarından kaynaklanan bu motif, modern popüler kültürde filmler ve romanlar aracılığıyla yaşamaktadır." },
      ],
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "Mircea Eliade — \"The Forge and the Crucible: Origins and Structures of Alchemy\"",
        "J.C. Cooper — \"An Illustrated Encyclopaedia of Traditional Symbols\"",
        "Kur'an-ı Kerim — İnsan Suresi (76:15-21)",
        "Hesiodos — \"İşler ve Günler\" (Erga kai Hemerai)",
      ],
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "İslam'da Gümüş", path: "/tr/kultur/islam-gumus", cat: "Kültür" },
        { title: "Anadolu Folklorunda Gümüş", path: "/tr/kultur/anadolu-folklor", cat: "Kültür" },
        { title: "Gümüşün Tarihi", path: "/tr/tarih/tarih", cat: "Tarih" },
      ],
    },
    sponsor: {
      text: "Geleneksel sembolizmi modern tasarımla buluşturan gümüş koleksiyonları.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir.",
    },
    darkMode: "Mod",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Culture", "Silver Symbolism"],
    category: "Culture",
    title: "Symbolism of Silver",
    subtitle: "The moon metal, symbol of purity, and mythological roots — silver's cultural meanings",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "10 min read" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Silver is more than a precious metal — it carries one of humanity's deepest symbols. While gold represents the sun, power, and kingship, silver symbolizes the moon, intuition, feminine energy, and purity. This duality is universal, from Egypt to China, from Greek to Turkic-Islamic culture.",
          "Silver's symbolic journey extends from alchemists' laboratories to lines of poetry, from religious texts to folk beliefs. This article comprehensively explores silver's symbolic meanings across different civilizations.",
        ],
      },
      {
        id: "moon", heading: "Moon Metal: Silver and Selene",
        paragraphs: [
          "The identification of silver with the Moon is a tradition at least 5,000 years old. Among the Sumerians, silver was the sacred metal of the Moon god Sin (Nanna). In Babylonian planetary-metal correspondence, silver was assigned to the Moon — a connection unbroken from alchemy to modern astrology.",
          "In Greek mythology, silver is associated with the moon goddess Selene and the huntress Artemis. Artemis's silver bow (ἀργύρεος τόξον) appears frequently in Homer's epics. Her Roman counterpart Diana was likewise identified with silver.",
          "In alchemy, the symbol for silver is the crescent (☽). Alchemists called silver 'Luna,' associating it with the feminine principle, intuition, reflection, and emotional wisdom. The gold (Sol/☉) and silver (Luna/☽) pairing forms alchemy's fundamental polarity.",
        ],
      },
      {
        id: "purity", heading: "Symbol of Purity and Purification",
        paragraphs: [
          "Though silver's antimicrobial properties were unknown in antiquity, the empirical observation that water didn't spoil in silver vessels elevated it to 'the metal of purity.'",
          "In the Hebrew Bible, silver is a metaphor for purification and testing: 'The words of the Lord are pure words, like silver refined in a furnace on the ground, purified seven times' (Psalm 12:6). The Quran states that the people of Paradise will drink from vessels of silver.",
          "In Hindu tradition, silver is sacred as the metal of the Moon god Chandra. Silver vessels are used in Puja (worship) ceremonies; silver is regarded as a metal that purifies the mind and strengthens intuition.",
        ],
      },
      {
        id: "mythology", heading: "Mythology and Legends",
        widget: "mythGrid",
      },
      {
        id: "alchemy", heading: "Alchemy and Esoteric Tradition",
        paragraphs: [
          "In alchemy, silver is associated with Albedo (whitening), the second stage of the Great Work (Opus Magnum). As the first purification state after Nigredo (blackening), silver symbolizes the beginning of spiritual illumination.",
          "Paracelsus described silver as 'the metal of the brain' — connected to intelligence, memory, and dreams. In medieval Europe, silver objects were placed under pillows in dream interpretation practices.",
          "In Kabbalistic tradition, silver corresponds to the Yesod (foundation) sephirah on the Tree of Life — associated with the subconscious, dreams, and the astral plane.",
        ],
      },
      {
        id: "islam", heading: "Silver in Islamic Tradition",
        paragraphs: [
          "Silver holds a special place in Islamic civilization. It is narrated that Prophet Muhammad wore a silver ring inscribed with 'Muhammad Rasul Allah.' This tradition forms the basis for silver rings being considered Sunnah for Muslim men.",
          "The Quran describes the people of Paradise wearing silver bracelets (76:21) and drinking from silver vessels (76:15-16). Silver appears in Quranic descriptions of Paradise as a symbol of purity and blessing.",
          "In Islamic jurisprudence, wearing gold is forbidden for men while silver is permitted. This ruling has made silver the fundamental metal for men's accessories across the Islamic world.",
        ],
      },
      {
        id: "folk", heading: "Folk Beliefs and Superstitions",
        paragraphs: [
          "Silver's protective power against evil is a belief shared across many world cultures. The silver bullet motif for killing werewolves dates to 18th-century European folklore and persists in modern popular culture.",
          "In Anatolia, mounting an evil eye bead in a silver frame is believed to enhance its protective energy. Giving babies a silver teething spoon serves both antimicrobial protection and a blessing for prosperity.",
          "In Celtic tradition, silver is linked to the Otherworld. In Irish mythology, Nuada's silver arm symbolizes divine healing. In Norse mythology, Freya's silver tears become rivers when they fall to earth.",
          "In East Asia, silver is associated with Yin energy (feminine, cool, receptive). In Chinese medicine, silver needles balance energy meridians. In Japanese tradition, silver (銀 — gin) represents courtesy and refinement.",
        ],
      },
      {
        id: "modern", heading: "Silver Symbolism in the Modern Age",
        paragraphs: [
          "The 25th wedding anniversary celebrated as a 'silver anniversary' reflects silver's symbolism of endurance and value that grows with time. An Olympic silver medal signifies second place — proximity to perfection.",
          "In film, the 'silver screen' derives from early cinema screens being silver-coated. 'Every cloud has a silver lining' has become a universal metaphor for hope and optimism.",
          "In the technology age, silver is associated with modernity, innovation, and futurism — from Apple to Tesla, silver dominates the color palettes of tech giants.",
        ],
      },
    ],
    myths: [
      { culture: "Greek", title: "The Silver Age", desc: "The second era in Hesiod's Five Ages. Following the Golden Age, a less perfect but still divine race of humanity.", color: "#6C88B5" },
      { culture: "Norse", title: "Freya's Tears", desc: "When the love goddess Freya weeps for her lost husband Od, her tears turn to gold on land and silver at sea.", color: "#8B7EC8" },
      { culture: "Celtic", title: "Nuada's Silver Arm", desc: "When King Nuada of the Tuatha Dé Danann lost his arm in battle, the divine smith Dian Cécht crafted him a perfectly functioning silver arm.", color: "#5D9E6F" },
      { culture: "Japanese", title: "Kintsugi & Silver", desc: "Repairing broken ceramics with gold or silver — transforming flaws into beauty and wounds into wisdom.", color: "#C4956A" },
      { culture: "Hindu", title: "Chandra's Light", desc: "Moon god Chandra illuminates the night in his silver chariot. Monday (Somvar) is dedicated to Chandra.", color: "#B8860B" },
      { culture: "Anatolian", title: "Nazar & Silver", desc: "Silver-framed evil eye beads both attract and reflect the evil gaze — silver's mirror quality interpreted as protective power.", color: "#4A90B0" },
    ],
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Why is silver associated with the Moon?", a: "Silver's moon-white brilliance, its glow in night's darkness, and its reflective surface made it the metallic counterpart of the Moon in all civilizations. The alchemical tradition systematized this connection." },
        { q: "Why can't Muslim men wear gold?", a: "Based on Prophetic traditions, this ruling is associated with the principle of avoiding luxury and ostentation. Silver is permitted, and it is narrated that the Prophet himself wore a silver ring." },
        { q: "Can silver bullets really kill werewolves?", a: "This is purely a folkloric motif with no real-world basis. Originating from 18th-century European folk beliefs, it persists in modern popular culture through films and novels." },
      ],
    },
    sources: {
      heading: "Sources",
      items: [
        "Mircea Eliade — \"The Forge and the Crucible: Origins and Structures of Alchemy\"",
        "J.C. Cooper — \"An Illustrated Encyclopaedia of Traditional Symbols\"",
        "The Holy Quran — Surah Al-Insan (76:15-21)",
        "Hesiod — \"Works and Days\" (Erga kai Hemerai)",
      ],
    },
    related: {
      heading: "Related Topics",
      items: [
        { title: "Silver in Islam", path: "/en/culture/islam-silver", cat: "Culture" },
        { title: "Silver in Anatolian Folklore", path: "/en/culture/anatolian-folklore", cat: "Culture" },
        { title: "History of Silver", path: "/en/history/history", cat: "History" },
      ],
    },
    sponsor: {
      text: "Silver collections blending traditional symbolism with modern design.",
      cta: "See on Instagram",
      note: "This content is sponsored by Istanbul Silver.",
    },
    darkMode: "Mode",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة معرفة الفضة",
    breadcrumb: ["الرئيسية", "الثقافة", "رمزية الفضة"],
    category: "الثقافة",
    title: "رمزية الفضة",
    subtitle: "معدن القمر ورمز النقاء والجذور الأسطورية — المعاني الثقافية للفضة",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١٠ دقائق قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["الفضة ليست مجرد معدن ثمين — بل تحمل أحد أعمق رموز البشرية. بينما يمثل الذهب الشمس والقوة، ترمز الفضة إلى القمر والحدس والطاقة الأنثوية والنقاء.", "تمتد رحلة الفضة الرمزية من مختبرات الكيمياء القديمة إلى أبيات الشعر، ومن النصوص الدينية إلى المعتقدات الشعبية."] },
      { id: "qamar", heading: "معدن القمر: الفضة وسيلينا", paragraphs: ["ربط الفضة بالقمر تقليد عمره ٥٠٠٠ عام على الأقل. عند السومريين كانت الفضة المعدن المقدس لإله القمر سين (نانا). في علم الفلك البابلي أُسندت الفضة إلى القمر — رابط لم ينقطع من الكيمياء القديمة إلى علم التنجيم الحديث.", "في الميثولوجيا الإغريقية ترتبط الفضة بإلهة القمر سيلينا وإلهة الصيد أرتميس. قوس أرتميس الفضي يُذكر كثيراً في ملاحم هوميروس."] },
      { id: "naqaa", heading: "رمز النقاء والتطهير", paragraphs: ["في التوراة الفضة استعارة للتطهير والاختبار. في القرآن الكريم يُخبر أن أهل الجنة يشربون من آنية فضة (الإنسان ٧٦:١٥-١٦) ويحلون أساور من فضة (الإنسان ٧٦:٢١).", "في التقليد الهندوسي تُعتبر الفضة مقدسة كمعدن إله القمر تشاندرا وتُستخدم في طقوس البوجا."] },
      { id: "asatir", heading: "الأساطير والخرافات", widget: "mythGrid" },
      { id: "islam", heading: "الفضة في التقليد الإسلامي", paragraphs: ["للفضة مكانة خاصة في الحضارة الإسلامية. يُروى أن النبي محمد ﷺ كان يلبس خاتماً من فضة منقوشاً عليه 'محمد رسول الله'. هذا التقليد أساس اعتبار خاتم الفضة سنة للرجال المسلمين.", "في الفقه الإسلامي يحرم الذهب على الرجال بينما الفضة مباحة. جعل هذا الحكم الفضة المعدن الأساسي لإكسسوارات الرجال في العالم الإسلامي."] },
    ],
    myths: [
      { culture: "إغريقي", title: "العصر الفضي", desc: "العصر الثاني في أعصر هيسيودوس الخمسة. جيل بشري أقل كمالاً بعد العصر الذهبي.", color: "#6C88B5" },
      { culture: "نوردي", title: "دموع فريا", desc: "عندما تبكي إلهة الحب فريا على زوجها المفقود، تتحول دموعها ذهباً على اليابسة وفضة في البحر.", color: "#8B7EC8" },
      { culture: "كلتي", title: "ذراع نوادا الفضية", desc: "عندما فقد الملك نوادا ذراعه في المعركة، صنع له الحداد الإلهي ذراعاً فضية تعمل بكمال.", color: "#5D9E6F" },
      { culture: "أناضولي", title: "النظر والفضة", desc: "خرزة العين الشريرة في إطار فضي تجذب وتعكس النظرة — خاصية الفضة كمرآة تُفسر كقوة حامية.", color: "#4A90B0" },
    ],
    faq: { heading: "الأسئلة الشائعة", items: [{ q: "لماذا ترتبط الفضة بالقمر؟", a: "بريق الفضة الأبيض القمري وسطحها العاكس جعلاها المعادل المعدني للقمر في جميع الحضارات." }] },
    sources: { heading: "المصادر", items: ["ميرتشا إلياده — «المصهرة والبوتقة»", "القرآن الكريم — سورة الإنسان"] },
    related: { heading: "مواضيع ذات صلة", items: [{ title: "الفضة في الإسلام", path: "/ar/culture/islam", cat: "الثقافة" }] },
    sponsor: { text: "مجموعات فضية تمزج الرمزية التقليدية بالتصميم العصري.", cta: "شاهد على إنستغرام", note: "هذا المحتوى برعاية إسطنبول للفضة." },
    darkMode: "الوضع",
  },
};

function MythGrid({ myths, dark }) {
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const bgCard = dark ? "#1a1a24" : "#ffffff";
  const border = dark ? "rgba(192,192,192,0.12)" : "rgba(0,0,0,0.08)";
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
      {myths.map((m, i) => (
        <div key={i} style={{
          background: bgCard, borderRadius: 12, padding: 20, border: `1px solid ${border}`,
          borderTop: `3px solid ${m.color}`, transition: "transform 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
        onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
        >
          <div style={{ fontSize: 11, fontWeight: 600, color: m.color, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>{m.culture}</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 600, color: textP, marginBottom: 10 }}>{m.title}</div>
          <div style={{ fontSize: 13, color: textS, lineHeight: 1.65 }}>{m.desc}</div>
        </div>
      ))}
    </div>
  );
}

export default function SilverSymbolismArticle() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);
  const t = T[lang];
  const isRTL = lang === "ar";

  const bgP = dark ? "#0f0f14" : "#FAFAF5";
  const textP = dark ? "#e8e8ec" : "#2C2C2C";
  const textS = dark ? "#9a9aaa" : "#6B7280";
  const accent = dark ? "#C0C0C0" : "#708090";
  const gold = "#D4AF37";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const fontD = "'Playfair Display', Georgia, serif";
  const fontB = lang === "ar" ? "'Noto Naskh Arabic', serif" : "'Source Sans 3', sans-serif";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{ fontFamily: fontB, background: bgP, color: textP, minHeight: "100vh", transition: "background 0.4s, color 0.4s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        * { margin:0; padding:0; box-sizing:border-box; }
        ::selection { background: rgba(192,192,192,0.3); }
      `}</style>

      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: dark ? "rgba(15,15,20,0.88)" : "rgba(250,250,245,0.88)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${border}`, padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg, ${accent}, ${gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#0f0f14", fontFamily: fontD }}>Ag</div>
          <span style={{ fontFamily: fontD, fontWeight: 600, fontSize: 16 }}>{t.nav}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", gap: 2, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", borderRadius: 7, padding: 2 }}>
            {["tr", "en", "ar"].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{ border: "none", cursor: "pointer", padding: "3px 9px", borderRadius: 5, fontSize: 11, fontWeight: lang === l ? 600 : 400, fontFamily: l === "ar" ? "'Noto Naskh Arabic', serif" : fontB, background: lang === l ? (dark ? "rgba(192,192,192,0.15)" : "rgba(0,0,0,0.08)") : "transparent", color: lang === l ? textP : textS, transition: "all 0.2s" }}>{l === "ar" ? "عر" : l.toUpperCase()}</button>
            ))}
          </div>
          <button onClick={() => setDark(!dark)} style={{ border: "none", cursor: "pointer", background: "transparent", color: textS, fontSize: 16, padding: 4 }}>{dark ? "☀️" : "🌙"}</button>
        </div>
      </nav>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "16px 24px 0", display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", fontSize: 12, color: textS }}>
        {t.breadcrumb.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {i > 0 && <span style={{ opacity: 0.4 }}>{isRTL ? "‹" : "›"}</span>}
            <a href="#" style={{ color: i === t.breadcrumb.length - 1 ? textP : textS, textDecoration: "none", fontWeight: i === t.breadcrumb.length - 1 ? 500 : 400 }}>{item}</a>
          </span>
        ))}
      </div>

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "32px 24px 64px", animation: "fadeUp 0.6s ease both" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: 6, fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: gold, border: `1px solid ${gold}33`, marginBottom: 16 }}>{t.category}</div>
          <h1 style={{ fontFamily: fontD, fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 12 }}>{t.title}</h1>
          <p style={{ fontSize: 16, color: textS, lineHeight: 1.6, marginBottom: 20 }}>{t.subtitle}</p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", fontSize: 13, color: textS, paddingBottom: 20, borderBottom: `1px solid ${border}` }}>
            <span>{t.meta.author}</span><span style={{ opacity: 0.3 }}>·</span><span>{t.meta.date}</span><span style={{ opacity: 0.3 }}>·</span><span>{t.meta.readTime}</span>
          </div>
        </div>

        {t.sections.map((sec) => (
          <section key={sec.id} style={{ marginBottom: 40 }}>
            {sec.heading && <h2 style={{ fontFamily: fontD, fontSize: 22, fontWeight: 600, marginBottom: 16, color: accent }}>{sec.heading}</h2>}
            {sec.paragraphs && sec.paragraphs.map((p, j) => (
              <p key={j} style={{ fontSize: 15.5, lineHeight: 1.85, color: textP, marginBottom: 14, opacity: 0.92 }}>{p}</p>
            ))}
            {sec.widget === "mythGrid" && <MythGrid myths={t.myths} dark={dark} />}
          </section>
        ))}

        {t.faq && (
          <section style={{ marginTop: 48, marginBottom: 40 }}>
            <h2 style={{ fontFamily: fontD, fontSize: 22, fontWeight: 600, marginBottom: 20, color: accent }}>{t.faq.heading}</h2>
            {t.faq.items.map((item, i) => (
              <div key={i} style={{ marginBottom: 8, borderRadius: 10, border: `1px solid ${border}`, overflow: "hidden" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", textAlign: isRTL ? "right" : "left", padding: "14px 18px", background: openFaq === i ? (dark ? "rgba(192,192,192,0.05)" : "rgba(192,192,192,0.08)") : "transparent", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: textP, display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: fontB }}>
                  <span>{item.q}</span>
                  <span style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s", fontSize: 12, color: textS }}>▼</span>
                </button>
                {openFaq === i && <div style={{ padding: "0 18px 16px", fontSize: 14, lineHeight: 1.7, color: textS }}>{item.a}</div>}
              </div>
            ))}
          </section>
        )}

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: fontD, fontSize: 18, fontWeight: 600, marginBottom: 12, color: accent }}>{t.sources.heading}</h2>
          {t.sources.items.map((s, i) => <div key={i} style={{ fontSize: 13, color: textS, padding: "6px 0", borderBottom: `1px solid ${border}` }}>{i + 1}. {s}</div>)}
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: fontD, fontSize: 18, fontWeight: 600, marginBottom: 12, color: accent }}>{t.related.heading}</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {t.related.items.map((r, i) => (
              <a key={i} href={r.path} style={{ padding: "10px 16px", borderRadius: 8, border: `1px solid ${border}`, textDecoration: "none", color: textP, fontSize: 13, fontWeight: 500, background: dark ? "rgba(192,192,192,0.03)" : "rgba(192,192,192,0.06)" }}>
                <span style={{ fontSize: 10, color: gold, marginRight: 6 }}>{r.cat}</span>{r.title}
              </a>
            ))}
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${dark ? "rgba(212,175,55,0.06)" : "rgba(212,175,55,0.08)"}, transparent)`, borderRadius: 14, padding: 24, textAlign: "center", border: `1px solid ${gold}22` }}>
          <p style={{ fontSize: 14, color: textS, marginBottom: 12 }}>{t.sponsor.text}</p>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "10px 28px", borderRadius: 8, background: `linear-gradient(135deg, ${gold}, #c9a227)`, color: "#0f0f14", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>{t.sponsor.cta}</a>
          <p style={{ fontSize: 11, color: textS, marginTop: 10, opacity: 0.6 }}>{t.sponsor.note}</p>
        </div>
      </article>

      <footer style={{ borderTop: `1px solid ${border}`, padding: "24px", textAlign: "center", fontSize: 12, color: textS }}>© 2026 SilverAtlas · {t.meta.author}</footer>
    </div>
  );
}
