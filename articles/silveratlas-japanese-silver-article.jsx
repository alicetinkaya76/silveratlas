import { useState, useEffect } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Tarih", "Japon Gümüş Geleneği"],
    category: "Tarih", title: "Japon Gümüş Geleneği",
    subtitle: "Mokume-gane'den çay seremonisine: Japonya'nın binlerce yıllık gümüş sanatı ve zanaatı",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "11 dk okuma" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Japonya, gümüş işçiliğinde dünyaya benzersiz teknikler ve estetik anlayışlar kazandırmış bir medeniyettir. Wabi-sabi felsefesinin eksiklikte güzellik araması, gümüşün doğal kararmasını bir kusur değil, zamanın izini taşıyan bir değer olarak kabul etmesini sağlamıştır.",
          "Bu makale, Japonya'nın gümüş geleneğini tarihî süreç, teknikler, kültürel bağlam ve modern yansımalarıyla ele almaktadır. Samuray kılıç montürlerinden çay seremonisi araçlarına, mokume-gane'den çağdaş Japon takı tasarımına uzanan kapsamlı bir yolculuk."
        ]
      },
      {
        id: "tarihce",
        heading: "Tarihî Süreç: Nara'dan Meiji'ye",
        paragraphs: [
          "Japonya'da gümüş işçiliğinin kökenleri 8. yüzyıla, Nara dönemine dayanır. Budist tapınak süslemeleri ve ritüel objelerde gümüş kullanımı, Çin ve Kore'den gelen zanaat gelenekleriyle birleşerek özgün bir Japon metal sanatı oluşturmuştur.",
          "Kamakura (1185-1333) ve Muromachi (1336-1573) dönemlerinde samuray sınıfının yükselişiyle birlikte, kılıç montürleri (tsuba, kozuka, menuki) gümüş işçiliğinin en prestijli alanı haline gelmiştir. Her tsuba ustası, ailesi tarafından kuşaklar boyu aktarılan gizli tekniklerle çalışırdı.",
          "Edo dönemi (1603-1868) Japonya'nın gümüş zanaatının altın çağıdır. İwami Ginzan (Dünya Mirası) ve diğer gümüş madenlerinin üretimi, zanaat atölyelerini beslemiş; barış ortamı ise sanatsal ifadeyi en üst düzeye çıkarmıştır.",
          "Meiji Restorasyonu (1868) sonrası kılıç taşıma yasağıyla tsuba ustaları, becerilerini takı, dekoratif eşya ve ihracat ürünlerine yönlendirmiştir. Bu dönüşüm, Japon gümüş sanatını dünya pazarına taşımıştır."
        ]
      },
      {
        id: "teknikler",
        heading: "Japon Gümüş Teknikleri",
        paragraphs: [
          "Japon gümüş zanaatı, dünyada başka hiçbir yerde görülmeyen özgün teknikleriyle tanınır. Bu teknikler, yüzyıllarca usta-çırak ilişkisi içinde aktarılmış ve mükemmelleştirilmiştir:"
        ],
        widget: "techniques"
      },
      {
        id: "cay-seremonisi",
        heading: "Çay Seremonisi ve Gümüş",
        paragraphs: [
          "Chanoyu (çay yolu), Japon kültürünün en rafine ifadelerinden biridir ve gümüş bu ritüelde özel bir yer tutar. Gümüş çaydanlıklar (ginbin), çay kaşıkları (chashaku) ve su kapları (mizusashi) hem işlevsel hem sembolik değer taşır.",
          "Sen no Rikyu'nun 16. yüzyılda formüle ettiği çay estetiği, sadelik ve doğallığı ön plana çıkarır. Gümüş çay araçlarındaki patina (zamanla oluşan koyu renk katmanı), wabi-sabi anlayışında 'yaşanmışlığın güzelliği' olarak kutlanır — hiçbir zaman parlatılmaz.",
          "Bir gümüş ginbin, usta bir zanaatkârın 200-400 saat emeğini temsil eder. Çekiçleme (tankin) yöntemiyle tek bir gümüş levhadan dövülerek oluşturulan bu çaydanlıklar, Japonya'nın Yaşayan Ulusal Hazineleri arasında yer alır."
        ]
      },
      {
        id: "samuray",
        heading: "Samuray Kılıcı ve Gümüş Montürler",
        paragraphs: [
          "Japon kılıcı (katana), yalnızca bir silah değil; bir sanat eseridir. Kılıcın metal aksamları — tsuba (el koruması), kozuka (yardımcı bıçak), menuki (kabza süsleri) ve fuchi-kashira (kabza halkaları) — gümüş işçiliğinin en ince örneklerini sunar.",
          "Tsuba üzerine işlenen motifler, sahibinin sosyal statüsünü, aile armasını (kamon) ve kişisel estetik tercihlerini yansıtırdı. Doğa motifleri (çiçekler, dalgalar, ayın evreleri), mitolojik figürler (ejderhalar, kirin) ve geometrik desenler en yaygın temalardı.",
          "Goto ailesi, Edo döneminde beş kuşak boyunca kılıç aksamı üretiminin en yüksek standardını temsil etmiştir. Goto tarzı, altın ve gümüş katmanlarının (iroe) birlikte kullanılmasıyla tanınır."
        ]
      },
      {
        id: "iwami",
        heading: "İwami Ginzan: Dünya Mirası Gümüş Madeni",
        paragraphs: [
          "İwami Ginzan, 16-17. yüzyıllarda dünya gümüş üretiminin yaklaşık üçte birini karşılayan devasa bir maden kompleksiydi. 2007'de UNESCO Dünya Mirası Listesi'ne alınan bu bölge, çevreyle uyumlu madencilik uygulamalarıyla da öncü olmuştur.",
          "Japon madencileri, galeri yöntemiyle (adit mining) çevreye minimum zarar vererek gümüş çıkarmayı başarmışlardır. Maden çevresinde gelişen kasaba, zanaatkârlar, tüccarlar ve deniz ticaret yollarıyla Japonya'nın ekonomik ve kültürel tarihinin önemli bir parçasıdır.",
          "İwami gümüşü, Portekiz ve Hollanda tüccarları aracılığıyla Avrupa, Çin ve Güneydoğu Asya'ya ihraç edilmiş; dünya ekonomik tarihini şekillendiren bir emtia haline gelmiştir."
        ]
      },
      {
        id: "modern",
        heading: "Modern Japon Gümüş Sanatı",
        paragraphs: [
          "Günümüz Japonya'sında gümüş zanaatı, geleneksel teknikleri çağdaş tasarım anlayışıyla buluşturan canlı bir alan olmaya devam etmektedir. Tokyo, Kyoto ve Kanazawa'daki atölyeler, kuşaklar arası bilgi aktarımını sürdürmektedir.",
          "Japon 'Yaşayan Ulusal Hazine' (Ningen Kokuhō) sistemi, olağanüstü metal işleme ustalarını tanır ve korur. Bu unvan, zanaat geleneğinin devamlılığını garantileyen önemli bir kültürel mekanizmadır.",
          "Çağdaş Japon takı tasarımcıları — özellikle mokume-gane ve forging teknikleriyle — uluslararası tasarım yarışmalarında düzenli olarak ödüller almaktadır. Japon gümüş estetiği, minimalizm ve malzeme dürüstlüğüyle dünya takı sahnesinde benzersiz bir konumdadır."
        ]
      }
    ],
    techniqueCards: {
      title: "Japon Gümüş Teknikleri",
      items: [
        { icon: "🌊", name: "Mokume-gane", period: "17. yy", desc: "Farklı metal katmanlarını lamine ederek ahşap damarı benzeri desenler oluşturma. Gümüş, bakır ve şakudo (altın-bakır) kombinasyonları." },
        { icon: "⚔️", name: "Nanako", period: "14. yy", desc: "Balık yumurtası dokusunu taklit eden, yüzeye binlerce küçük kabartma noktası vurma tekniği. Tsuba süslemesinde kullanılır." },
        { icon: "🔨", name: "Tankin", period: "8. yy", desc: "Tek bir metal levhayı çekiçleyerek form verme. Çay seremonisi araçlarının yapımında temel yöntem." },
        { icon: "🖌️", name: "Nunome-zogan", period: "16. yy", desc: "Demir yüzeye altın veya gümüş tel kakma. Kılıç aksamı ve süs eşyalarında kullanılır." },
        { icon: "🌸", name: "Katakiri-bori", period: "15. yy", desc: "Tek taraflı oyma tekniği. Metal yüzeye fırça vuruşu gibi doğal çizgisel motifler kazınır." },
        { icon: "🎨", name: "İroe", period: "16. yy", desc: "Farklı renk metalleri (altın, gümüş, şakudo, shibuichi) yan yana kullanarak çok renkli yüzey oluşturma." },
        { icon: "🔥", name: "Şakudo", period: "12. yy", desc: "Altın-bakır alaşımı (%3-7 Au). Patinasyon sonrası derin koyu mor-siyah renk alır. Gümüşle kontrast oluşturur." },
        { icon: "💨", name: "Shibuichi", period: "17. yy", desc: "Gümüş-bakır alaşımı (%15-40 Ag). Patinasyon sonrası gri-yeşil tonlar verir. Mokume-gane'de yaygın." }
      ]
    },
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        { q: "Mokume-gane takı günlük kullanıma uygun mudur?", a: "Evet. Mokume-gane, birbirine kaynaşmış metal katmanlarından oluşur ve son derece dayanıklıdır. Özellikle alyans olarak popülerdir. Ancak farklı metallerin farklı patinaları olacağını unutmayın — bu, tasarımın doğal bir parçasıdır." },
        { q: "Japon gümüş alaşımları 925 ayar mıdır?", a: "Geleneksel Japon gümüşü farklı ayarlarda olabilir. Shibuichi %15-40 gümüş içerirken, saf gümüş (jungin) 999 ayardır. Modern Japon takı üretimi ise genellikle uluslararası 925 standardını takip eder." },
        { q: "İwami Ginzan ziyaret edilebilir mi?", a: "Evet. UNESCO Dünya Mirası olan İwami Ginzan, Shimane ili'nde ziyarete açıktır. Eski maden galerileri, müze ve tarihî kasaba yerleşimi görülebilir." },
        { q: "Wabi-sabi estetiği gümüş bakımını nasıl etkiler?", a: "Wabi-sabi yaklaşımında gümüşün doğal patinası bir güzellik unsuru kabul edilir. Özellikle çay seremonisi gümüşleri asla parlatılmaz — zamanın izi, objenin değerini artırır." },
        { q: "Modern mokume-gane nereden satın alınabilir?", a: "Japonya'daki geleneksel atölyelerin yanı sıra, ABD ve Avrupa'da da mokume-gane uzmanı kuyumcular bulunmaktadır. Özelleştirilmiş alyans siparişleri en yaygın kullanım alanıdır." }
      ]
    },
    sources: {
      heading: "Kaynaklar",
      items: [
        "Kokuhokai — \"Ningen Kokuhō: Metal Arts Masters\"",
        "UNESCO — İwami Ginzan Silver Mine Site Report",
        "Victoria & Albert Museum — \"Japanese Metalwork\" koleksiyonu",
        "Nihon Kōgei Kai — \"Traditional Crafts of Japan\"",
        "Sen Sōshitsu XV — \"The Japanese Way of Tea\""
      ]
    },
    related: {
      heading: "İlgili Konular",
      items: [
        { title: "Osmanlı Gümüşçülüğü", path: "/tr/tarih/osmanli", cat: "Tarih" },
        { title: "Dünya Kültürleri", path: "/tr/kultur/dunya", cat: "Kültür" },
        { title: "Telkâri Sanatı", path: "/tr/zanaat/telkari", cat: "Zanaat" }
      ]
    },
    sponsor: {
      text: "Doğu estetiğinden ilham alan 925 ayar gümüş koleksiyonumuzu keşfedin.",
      cta: "Instagram'da Gör",
      note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir."
    },
    darkMode: "Mod", toc: "İçindekiler"
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "History", "Japanese Silver Tradition"],
    category: "History", title: "Japanese Silver Tradition",
    subtitle: "From mokume-gane to tea ceremony: Japan's millennia-old silver art and craft",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "11 min read" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "Japan is a civilization that has contributed unique techniques and aesthetic philosophies to silverwork. The wabi-sabi philosophy's search for beauty in imperfection has led to accepting silver's natural tarnish not as a flaw but as a mark of time's passage.",
          "This article examines Japan's silver tradition through historical process, techniques, cultural context, and modern reflections — from samurai sword fittings to tea ceremony implements, mokume-gane to contemporary Japanese jewelry design."
        ]
      },
      {
        id: "history", heading: "Historical Journey: From Nara to Meiji",
        paragraphs: [
          "The origins of Japanese silverwork date to the 8th century Nara period. Silver use in Buddhist temple decorations and ritual objects, combined with craft traditions from China and Korea, created a uniquely Japanese metal art.",
          "During the Kamakura (1185-1333) and Muromachi (1336-1573) periods, the rise of the samurai class made sword fittings (tsuba, kozuka, menuki) the most prestigious domain of silverwork.",
          "The Edo period (1603-1868) represents the golden age of Japanese silver craft. Production from Iwami Ginzan (World Heritage) and other mines fed workshops, while peace elevated artistic expression.",
          "After the Meiji Restoration (1868), the sword-carrying ban redirected tsuba masters' skills toward jewelry, decorative objects, and export products — bringing Japanese silver art to the world market."
        ]
      },
      {
        id: "techniques", heading: "Japanese Silver Techniques",
        paragraphs: [
          "Japanese silver craft is renowned for techniques found nowhere else in the world, perfected through centuries of master-apprentice transmission:"
        ],
        widget: "techniques"
      },
      {
        id: "tea-ceremony", heading: "Tea Ceremony and Silver",
        paragraphs: [
          "Chanoyu (the way of tea) is one of the most refined expressions of Japanese culture, and silver holds a special place in this ritual. Silver kettles (ginbin), tea scoops (chashaku), and water vessels (mizusashi) carry both functional and symbolic value.",
          "The tea aesthetic formulated by Sen no Rikyu in the 16th century emphasizes simplicity and naturalness. The patina on silver tea implements is celebrated in wabi-sabi as 'the beauty of lived experience' — never polished away.",
          "A silver ginbin represents 200-400 hours of a master craftsman's labor. Formed by hammering (tankin) from a single silver sheet, these kettles are among Japan's Living National Treasures."
        ]
      },
      {
        id: "samurai", heading: "The Samurai Sword and Silver Fittings",
        paragraphs: [
          "The Japanese sword (katana) is not merely a weapon but a work of art. Its metal fittings — tsuba (hand guard), kozuka (utility knife), menuki (grip ornaments), and fuchi-kashira (collar and pommel) — showcase the finest silver craftsmanship.",
          "Motifs on tsuba reflected the owner's social status, family crest (kamon), and personal aesthetics. Nature motifs (flowers, waves, moon phases), mythological figures (dragons, kirin), and geometric patterns were the most common themes.",
          "The Goto family represented the highest standard of sword fitting production through five generations during the Edo period. The Goto style is distinguished by combined use of gold and silver layers (iroe)."
        ]
      },
      {
        id: "iwami", heading: "Iwami Ginzan: World Heritage Silver Mine",
        paragraphs: [
          "Iwami Ginzan was a massive mining complex that supplied approximately one-third of the world's silver production in the 16th-17th centuries. Inscribed on the UNESCO World Heritage List in 2007, this site was also a pioneer in environmentally harmonious mining.",
          "Japanese miners successfully extracted silver with minimal environmental damage using the adit mining method. The town that developed around the mine is an important part of Japan's economic and cultural history.",
          "Iwami silver was exported to Europe, China, and Southeast Asia through Portuguese and Dutch traders, becoming a commodity that shaped world economic history."
        ]
      },
      {
        id: "modern", heading: "Modern Japanese Silver Art",
        paragraphs: [
          "In today's Japan, silver craft continues as a vibrant field merging traditional techniques with contemporary design. Workshops in Tokyo, Kyoto, and Kanazawa maintain intergenerational knowledge transfer.",
          "Japan's Living National Treasure (Ningen Kokuhō) system recognizes and protects extraordinary metalwork masters — an important cultural mechanism guaranteeing the continuity of craft tradition.",
          "Contemporary Japanese jewelry designers regularly win awards at international competitions, particularly with mokume-gane and forging techniques. Japanese silver aesthetics occupies a unique position on the world jewelry stage through minimalism and material honesty."
        ]
      }
    ],
    techniqueCards: {
      title: "Japanese Silver Techniques",
      items: [
        { icon: "🌊", name: "Mokume-gane", period: "17th c.", desc: "Laminating different metal layers to create wood-grain patterns. Silver, copper, and shakudo (gold-copper) combinations." },
        { icon: "⚔️", name: "Nanako", period: "14th c.", desc: "Surface texture imitating fish roe — thousands of tiny raised dots punched into the surface. Used in tsuba decoration." },
        { icon: "🔨", name: "Tankin", period: "8th c.", desc: "Forming shape by hammering a single metal sheet. Fundamental method for tea ceremony implements." },
        { icon: "🖌️", name: "Nunome-zogan", period: "16th c.", desc: "Gold or silver wire inlay on iron surface. Used in sword fittings and decorative objects." },
        { icon: "🌸", name: "Katakiri-bori", period: "15th c.", desc: "Single-sided carving technique. Creates natural linear motifs resembling brushstrokes on metal surfaces." },
        { icon: "🎨", name: "Iroe", period: "16th c.", desc: "Creating multicolored surfaces by juxtaposing different colored metals (gold, silver, shakudo, shibuichi)." },
        { icon: "🔥", name: "Shakudo", period: "12th c.", desc: "Gold-copper alloy (3-7% Au). Achieves deep purple-black after patination. Creates contrast with silver." },
        { icon: "💨", name: "Shibuichi", period: "17th c.", desc: "Silver-copper alloy (15-40% Ag). Produces grey-green tones after patination. Common in mokume-gane." }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Is mokume-gane jewelry suitable for daily wear?", a: "Yes. Mokume-gane consists of fused metal layers and is extremely durable. It's particularly popular for wedding bands. Note that different metals will develop different patinas — this is a natural part of the design." },
        { q: "Are Japanese silver alloys 925 standard?", a: "Traditional Japanese silver varies in fineness. Shibuichi contains 15-40% silver, while pure silver (jungin) is 999. Modern Japanese jewelry typically follows the international 925 standard." },
        { q: "Can Iwami Ginzan be visited?", a: "Yes. UNESCO World Heritage site Iwami Ginzan in Shimane Prefecture is open to visitors. Old mine galleries, museum, and the historic town settlement can be toured." },
        { q: "How does wabi-sabi aesthetics affect silver care?", a: "In wabi-sabi, silver's natural patina is embraced as a beauty element. Tea ceremony silver is never polished — time's traces enhance the object's value." },
        { q: "Where can modern mokume-gane be purchased?", a: "Beyond traditional Japanese workshops, mokume-gane specialist jewelers exist in the US and Europe. Custom wedding band orders are the most common application." }
      ]
    },
    sources: {
      heading: "Sources",
      items: [
        "Kokuhokai — \"Ningen Kokuhō: Metal Arts Masters\"",
        "UNESCO — Iwami Ginzan Silver Mine Site Report",
        "Victoria & Albert Museum — \"Japanese Metalwork\" collection",
        "Nihon Kōgei Kai — \"Traditional Crafts of Japan\"",
        "Sen Sōshitsu XV — \"The Japanese Way of Tea\""
      ]
    },
    related: {
      heading: "Related Topics",
      items: [
        { title: "Ottoman Silverwork", path: "/en/history/ottoman", cat: "History" },
        { title: "World Cultures", path: "/en/culture/world", cat: "Culture" },
        { title: "Filigree Art", path: "/en/craft/filigree", cat: "Craft" }
      ]
    },
    sponsor: {
      text: "Explore our Eastern-inspired 925 sterling silver collection.",
      cta: "See on Instagram",
      note: "This content is sponsored by İstanbul Gümüş."
    },
    darkMode: "Mode", toc: "Contents"
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة معرفة الفضة",
    breadcrumb: ["الرئيسية", "التاريخ", "تقليد الفضة الياباني"],
    category: "التاريخ", title: "تقليد الفضة الياباني",
    subtitle: "من موكومي-غاني إلى حفل الشاي: فن وحرفة الفضة اليابانية عبر آلاف السنين",
    meta: { author: "توران إرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١١ دقائق قراءة" },
    sections: [
      {
        id: "intro", heading: null,
        paragraphs: [
          "اليابان حضارة قدمت للعالم تقنيات ومفاهيم جمالية فريدة في صياغة الفضة. فلسفة وابي-سابي التي تبحث عن الجمال في النقص جعلت التأكسد الطبيعي للفضة ليس عيبًا بل أثرًا ثمينًا للزمن.",
          "يتناول هذا المقال تقليد الفضة الياباني عبر تاريخه وتقنياته وسياقه الثقافي وانعكاساته الحديثة."
        ]
      },
      {
        id: "history", heading: "الرحلة التاريخية: من نارا إلى ميجي",
        paragraphs: [
          "تعود أصول صياغة الفضة اليابانية إلى القرن الثامن في فترة نارا. استخدام الفضة في زخارف المعابد البوذية شكّل فن المعادن الياباني الفريد.",
          "خلال فترتي كاماكورا وموروماتشي، أصبحت تجهيزات السيف (تسوبا، كوزوكا، مينوكي) المجال الأكثر مكانة لصياغة الفضة.",
          "تمثل فترة إيدو (١٦٠٣-١٨٦٨) العصر الذهبي لحرفة الفضة اليابانية. غذّى إنتاج مناجم إيوامي غينزان الورش الحرفية.",
          "بعد إصلاح ميجي (١٨٦٨)، وجّه حظر حمل السيوف مهارات أساتذة التسوبا نحو المجوهرات والأدوات الزخرفية."
        ]
      },
      {
        id: "techniques", heading: "تقنيات الفضة اليابانية",
        paragraphs: [
          "تشتهر حرفة الفضة اليابانية بتقنيات لا توجد في أي مكان آخر في العالم:"
        ],
        widget: "techniques"
      },
      {
        id: "tea-ceremony", heading: "حفل الشاي والفضة",
        paragraphs: [
          "تشانويو (طريق الشاي) من أرقى التعبيرات الثقافية اليابانية، وللفضة مكانة خاصة فيه. غلايات الفضة (غينبين) وملاعق الشاي وأوعية الماء تحمل قيمة وظيفية ورمزية.",
          "جمالية الشاي التي صاغها سن نو ريكيو في القرن السادس عشر تؤكد على البساطة والطبيعية. الزنجار على أدوات الشاي الفضية يُحتفى به في وابي-سابي.",
          "غلاية فضية واحدة تمثل ٢٠٠-٤٠٠ ساعة من عمل الحرفي الماهر. تُشكل بالطرق (تانكين) من صفيحة فضة واحدة."
        ]
      },
      {
        id: "samurai", heading: "سيف الساموراي وتجهيزات الفضة",
        paragraphs: [
          "السيف الياباني (كاتانا) ليس مجرد سلاح بل عمل فني. تجهيزاته المعدنية — تسوبا وكوزوكا ومينوكي — تعرض أرقى أمثلة صياغة الفضة.",
          "الزخارف على التسوبا كانت تعكس المكانة الاجتماعية للمالك وشعار عائلته. زخارف الطبيعة والأساطير والأنماط الهندسية كانت الأكثر شيوعًا.",
          "مثّلت عائلة غوتو أعلى معايير إنتاج تجهيزات السيف خلال خمسة أجيال في فترة إيدو."
        ]
      },
      {
        id: "iwami", heading: "إيوامي غينزان: منجم الفضة التراث العالمي",
        paragraphs: [
          "كان إيوامي غينزان مجمع تعدين ضخم وفّر ثلث إنتاج الفضة العالمي في القرنين السادس والسابع عشر. أُدرج في قائمة التراث العالمي لليونسكو عام ٢٠٠٧.",
          "نجح عمال المناجم اليابانيون في استخراج الفضة بأقل ضرر بيئي. البلدة التي تطورت حول المنجم جزء مهم من التاريخ الاقتصادي والثقافي لليابان.",
          "صُدّرت فضة إيوامي إلى أوروبا والصين وجنوب شرق آسيا عبر التجار البرتغاليين والهولنديين."
        ]
      },
      {
        id: "modern", heading: "فن الفضة الياباني الحديث",
        paragraphs: [
          "يواصل فن الفضة في اليابان اليوم كونه مجالاً حيويًا يدمج التقنيات التقليدية مع التصميم المعاصر.",
          "نظام الكنز الوطني الحي (نينغن كوكوهو) يعترف بأساتذة المعادن المتميزين ويحميهم.",
          "مصممو المجوهرات اليابانيون المعاصرون يفوزون بانتظام بجوائز في المسابقات الدولية بتقنيات موكومي-غاني والتشكيل."
        ]
      }
    ],
    techniqueCards: {
      title: "تقنيات الفضة اليابانية",
      items: [
        { icon: "🌊", name: "موكومي-غاني", period: "القرن ١٧", desc: "تصفيح طبقات معدنية مختلفة لإنشاء أنماط تشبه حبيبات الخشب." },
        { icon: "⚔️", name: "ناناكو", period: "القرن ١٤", desc: "ملمس سطحي يقلد بيض السمك — آلاف النقاط الصغيرة البارزة." },
        { icon: "🔨", name: "تانكين", period: "القرن ٨", desc: "تشكيل بالطرق من صفيحة معدنية واحدة. الطريقة الأساسية لأدوات حفل الشاي." },
        { icon: "🖌️", name: "نونومي-زوغان", period: "القرن ١٦", desc: "تطعيم سلك ذهب أو فضة على سطح الحديد." },
        { icon: "🌸", name: "كاتاكيري-بوري", period: "القرن ١٥", desc: "تقنية النقش أحادي الجانب. تخلق زخارف خطية طبيعية." },
        { icon: "🎨", name: "إيروي", period: "القرن ١٦", desc: "إنشاء أسطح متعددة الألوان بوضع معادن مختلفة الألوان جنبًا إلى جنب." },
        { icon: "🔥", name: "شاكودو", period: "القرن ١٢", desc: "سبيكة ذهب-نحاس (٣-٧٪ ذهب). تكتسب لونًا أرجوانيًا-أسود عميقًا بعد الزنجرة." },
        { icon: "💨", name: "شيبويتشي", period: "القرن ١٧", desc: "سبيكة فضة-نحاس (١٥-٤٠٪ فضة). تعطي درجات رمادية-خضراء." }
      ]
    },
    faq: {
      heading: "الأسئلة الشائعة",
      items: [
        { q: "هل مجوهرات موكومي-غاني مناسبة للاستخدام اليومي؟", a: "نعم. موكومي-غاني مكونة من طبقات معدنية ملحومة ومتينة للغاية. شائعة خاصة كخواتم زفاف." },
        { q: "هل سبائك الفضة اليابانية بمعيار ٩٢٥؟", a: "الفضة اليابانية التقليدية تتفاوت في نقائها. شيبويتشي تحتوي ١٥-٤٠٪ فضة. الإنتاج الحديث يتبع معيار ٩٢٥ الدولي." },
        { q: "هل يمكن زيارة إيوامي غينزان؟", a: "نعم. موقع التراث العالمي لليونسكو مفتوح للزوار في محافظة شيماني." },
        { q: "كيف تؤثر جمالية وابي-سابي على العناية بالفضة؟", a: "في وابي-سابي، يُحتفى بالزنجار الطبيعي للفضة. فضة حفل الشاي لا تُصقل أبدًا." }
      ]
    },
    sources: {
      heading: "المصادر",
      items: [
        "كوكوهوكاي — أساتذة فن المعادن",
        "اليونسكو — تقرير منجم إيوامي غينزان",
        "متحف فيكتوريا وألبرت — مجموعة المعادن اليابانية",
        "نيهون كوغي كاي — الحرف التقليدية اليابانية",
        "سن سوشيتسو — طريق الشاي الياباني"
      ]
    },
    related: {
      heading: "مواضيع ذات صلة",
      items: [
        { title: "الصياغة العثمانية", path: "/ar/history/ottoman", cat: "التاريخ" },
        { title: "ثقافات العالم", path: "/ar/culture/world", cat: "الثقافة" },
        { title: "فن الفيليغري", path: "/ar/craft/filigree", cat: "الحرف" }
      ]
    },
    sponsor: {
      text: "اكتشف مجموعتنا من الفضة الإسترلينية ٩٢٥ المستوحاة من الشرق.",
      cta: "شاهد على إنستغرام",
      note: "هذا المحتوى برعاية إسطنبول غوموش."
    },
    darkMode: "الوضع", toc: "المحتويات"
  }
};

const fontD = "'Playfair Display', serif";
const fontB = "'Source Sans 3', sans-serif";
const fontAr = "'Noto Naskh Arabic', serif";
const gold = "#D4AF37";
const accent = "#C0C0C0";

function TechniqueCards({ t, dark, isRTL }) {
  const [selected, setSelected] = useState(null);
  const cards = t.techniqueCards.items;
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";
  const textP = dark ? "#e8e8e8" : "#1a1a2e";
  const textS = dark ? "#a0a0a0" : "#555";
  const bgCard = dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";

  return (
    <div style={{ margin: "24px 0" }}>
      <h3 style={{ fontFamily: fontD, fontSize: 18, fontWeight: 600, marginBottom: 16, color: textP }}>
        {t.techniqueCards.title}
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: 10 }}>
        {cards.map((c, i) => (
          <div key={i} onClick={() => setSelected(selected === i ? null : i)} style={{
            cursor: "pointer", padding: "16px 14px", borderRadius: 12,
            border: `1px solid ${selected === i ? gold + "66" : border}`,
            background: selected === i ? (dark ? "rgba(212,175,55,0.06)" : "rgba(212,175,55,0.08)") : bgCard,
            transition: "all 0.3s",
          }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
            <div style={{ fontWeight: 600, fontSize: 14, color: textP, marginBottom: 4 }}>{c.name}</div>
            <div style={{ fontSize: 10, color: gold, fontWeight: 600, marginBottom: 8 }}>{c.period}</div>
            {selected === i && (
              <div style={{ fontSize: 12, color: textS, lineHeight: 1.6, marginTop: 8, paddingTop: 8, borderTop: `1px solid ${border}` }}>
                {c.desc}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SilverAtlasJapaneseArticle() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const t = T[lang];
  const isRTL = lang === "ar";
  const textP = dark ? "#e8e8e8" : "#1a1a2e";
  const textS = dark ? "#a0a0a0" : "#555";
  const bgMain = dark ? "#0f0f14" : "#fafaf5";
  const bgCard = dark ? "#16161c" : "#ffffff";
  const border = dark ? "rgba(192,192,192,0.1)" : "rgba(0,0,0,0.06)";

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;600&family=Noto+Naskh+Arabic:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{
      fontFamily: isRTL ? fontAr : fontB, background: bgMain, color: textP, minHeight: "100vh", lineHeight: 1.6,
    }}>
      <nav style={{
        position: "sticky", top: 0, zIndex: 50, padding: "10px 20px",
        background: dark ? "rgba(15,15,20,0.92)" : "rgba(250,250,245,0.92)",
        backdropFilter: "blur(12px)", borderBottom: `1px solid ${border}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: `linear-gradient(135deg, ${accent}, ${gold})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 10, fontWeight: 700, color: "#0f0f14", fontFamily: fontD,
          }}>Ag</div>
          <div>
            <div style={{ fontFamily: fontD, fontWeight: 600, fontSize: 14, lineHeight: 1 }}>{t.nav}</div>
            <div style={{ fontSize: 9, color: textS }}>{t.navSub}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {["tr", "en", "ar"].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              padding: "4px 10px", borderRadius: 6, border: `1px solid ${lang === l ? gold : border}`,
              background: lang === l ? gold + "15" : "transparent", cursor: "pointer",
              color: lang === l ? gold : textS, fontSize: 11, fontWeight: 600,
            }}>{l.toUpperCase()}</button>
          ))}
          <button onClick={() => setDark(!dark)} style={{
            marginLeft: 8, padding: "4px 10px", borderRadius: 6, border: `1px solid ${border}`,
            background: "transparent", cursor: "pointer", color: textS, fontSize: 11,
          }}>{dark ? "☀️" : "🌙"} {t.darkMode}</button>
        </div>
      </nav>

      <article style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px" }}>
        <div style={{ fontSize: 12, color: textS, marginBottom: 24, display: "flex", gap: 6, flexWrap: "wrap" }}>
          {t.breadcrumb.map((b, i) => (
            <span key={i}>{i > 0 && <span style={{ margin: "0 4px", opacity: 0.4 }}>/</span>}
              <span style={{ color: i === t.breadcrumb.length - 1 ? gold : textS }}>{b}</span>
            </span>
          ))}
        </div>

        <div style={{ marginBottom: 36 }}>
          <div style={{
            display: "inline-block", padding: "3px 12px", borderRadius: 6,
            fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
            color: gold, border: `1px solid ${gold}33`, marginBottom: 16,
          }}>{t.category}</div>
          <h1 style={{
            fontFamily: isRTL ? fontAr : fontD, fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 700, lineHeight: 1.15, marginBottom: 12,
          }}>{t.title}</h1>
          <p style={{ fontSize: 16, color: textS, lineHeight: 1.6, marginBottom: 20 }}>{t.subtitle}</p>
          <div style={{
            display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
            fontSize: 13, color: textS, paddingBottom: 20, borderBottom: `1px solid ${border}`,
          }}>
            <span>{t.meta.author}</span><span style={{ opacity: 0.3 }}>·</span>
            <span>{t.meta.date}</span><span style={{ opacity: 0.3 }}>·</span>
            <span>{t.meta.readTime}</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{
          height: 220, borderRadius: 16, marginBottom: 36, overflow: "hidden",
          background: dark
            ? "linear-gradient(135deg, #1a1a2e 0%, #2e1a1a 50%, #1a2e1a 100%)"
            : "linear-gradient(135deg, #f0e6d2 0%, #e6d2c0 50%, #f0e6d2 100%)",
          display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
        }}>
          <div style={{ textAlign: "center", zIndex: 1 }}>
            <div style={{ fontSize: 52 }}>🏯</div>
            <div style={{
              fontFamily: fontD, fontSize: 16, fontWeight: 600, marginTop: 8,
              background: `linear-gradient(135deg, ${accent}, ${gold})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>日本の銀 · JAPANESE SILVER</div>
          </div>
        </div>

        {/* TOC */}
        <div style={{
          marginBottom: 36, padding: "20px 24px", borderRadius: 12,
          border: `1px solid ${border}`, background: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
        }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: gold }}>{t.toc}</h3>
          {t.sections.filter(s => s.heading).map(s => (
            <a key={s.id} href={`#${s.id}`} style={{
              display: "block", fontSize: 13, color: textS, textDecoration: "none", padding: "4px 0",
            }}>{s.heading}</a>
          ))}
        </div>

        {t.sections.map(sec => (
          <section key={sec.id} id={sec.id} style={{ marginBottom: 36 }}>
            {sec.heading && (
              <h2 style={{
                fontFamily: isRTL ? fontAr : fontD, fontSize: 24, fontWeight: 600,
                marginBottom: 16, paddingTop: 8,
              }}>{sec.heading}</h2>
            )}
            {sec.paragraphs.map((p, pi) => (
              <p key={pi} style={{ fontSize: 15, lineHeight: 1.8, color: textS, marginBottom: 14 }}>{p}</p>
            ))}
            {sec.widget === "techniques" && <TechniqueCards t={t} dark={dark} isRTL={isRTL} />}
          </section>
        ))}

        {/* FAQ */}
        <section style={{ marginBottom: 36, marginTop: 48 }}>
          <h2 style={{ fontFamily: isRTL ? fontAr : fontD, fontSize: 24, fontWeight: 600, marginBottom: 20 }}>{t.faq.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {t.faq.items.map((item, i) => (
              <div key={i} style={{
                border: `1px solid ${openFaq === i ? gold + "44" : border}`, borderRadius: 12, overflow: "hidden",
                background: openFaq === i ? (dark ? "rgba(212,175,55,0.03)" : "rgba(212,175,55,0.04)") : "transparent",
              }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                  width: "100%", border: "none", cursor: "pointer", background: "transparent",
                  padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between",
                  color: textP, fontSize: 14, fontWeight: 500, fontFamily: isRTL ? fontAr : fontB,
                  textAlign: isRTL ? "right" : "left", gap: 12,
                }}>
                  <span style={{ flex: 1 }}>{item.q}</span>
                  <span style={{ fontSize: 18, color: textS, transition: "transform 0.3s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)", flexShrink: 0 }}>+</span>
                </button>
                {openFaq === i && <div style={{ padding: "0 20px 16px", fontSize: 14, lineHeight: 1.7, color: textS }}>{item.a}</div>}
              </div>
            ))}
          </div>
        </section>

        <section style={{
          marginBottom: 36, padding: "20px 24px",
          background: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
          borderRadius: 12, border: `1px solid ${border}`,
        }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12 }}>{t.sources.heading}</h3>
          {t.sources.items.map((s, i) => (
            <div key={i} style={{ fontSize: 13, color: textS, lineHeight: 1.6, marginBottom: 6, display: "flex", gap: 8 }}>
              <span style={{ color: accent, fontWeight: 600, flexShrink: 0 }}>[{i + 1}]</span><span>{s}</span>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 40 }}>
          <h3 style={{ fontSize: 18, fontFamily: isRTL ? fontAr : fontD, fontWeight: 600, marginBottom: 16 }}>{t.related.heading}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {t.related.items.map((item, i) => (
              <a key={i} href={item.path} style={{
                textDecoration: "none", padding: "16px 18px", border: `1px solid ${border}`,
                borderRadius: 12, background: bgCard, display: "block",
              }}>
                <div style={{ fontSize: 10, color: gold, fontWeight: 600, marginBottom: 6 }}>{item.cat}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: textP }}>{item.title}</div>
                <div style={{ fontSize: 12, color: textS, marginTop: 6 }}>{isRTL ? "←" : "→"}</div>
              </a>
            ))}
          </div>
        </section>

        <div style={{
          border: `1px solid ${gold}22`, borderRadius: 16, padding: "28px 24px",
          background: dark ? "rgba(212,175,55,0.03)" : "rgba(212,175,55,0.05)", textAlign: "center",
        }}>
          <p style={{ fontSize: 15, color: textP, marginBottom: 16 }}>{t.sponsor.text}</p>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 16 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{
                width: 80, height: 80, borderRadius: 10,
                background: dark ? `linear-gradient(${120 * i}deg, #1e1e2e, #2a2a3e)` : `linear-gradient(${120 * i}deg, #e0ddd4, #d5d0c4)`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={textS} strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill={textS} />
                </svg>
              </div>
            ))}
          </div>
          <a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", borderRadius: 10,
            background: `linear-gradient(135deg, ${accent}, ${gold})`, color: "#0f0f14",
            fontSize: 13, fontWeight: 600, textDecoration: "none",
          }}>📸 {t.sponsor.cta}</a>
          <p style={{ fontSize: 11, color: textS, marginTop: 14, opacity: 0.7 }}>{t.sponsor.note}</p>
        </div>
      </article>

      <footer style={{
        borderTop: `1px solid ${border}`, padding: "24px", textAlign: "center",
        background: dark ? "#0c0c10" : "#f5f5f0",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
          <div style={{
            width: 22, height: 22, borderRadius: "50%",
            background: `linear-gradient(135deg, ${accent}, ${gold})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 9, fontWeight: 700, color: "#0f0f14", fontFamily: fontD,
          }}>Ag</div>
          <span style={{ fontFamily: fontD, fontWeight: 600, fontSize: 14 }}>{t.nav}</span>
        </div>
        <p style={{ fontSize: 11, color: textS }}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p>
      </footer>
    </div>
  );
}
