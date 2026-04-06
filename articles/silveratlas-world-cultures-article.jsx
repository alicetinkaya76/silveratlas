import { useState } from "react";

const T = {
  tr: {
    nav: "SilverAtlas", navSub: "Gümüş Bilgi Platformu",
    breadcrumb: ["Ana Sayfa", "Kültür", "Dünya Kültürlerinde Gümüş"],
    category: "Kültür",
    title: "Dünya Kültürlerinde Gümüş",
    subtitle: "Meksika'dan Yemen'e, Hindistan'dan Tibet'e — gümüşün küresel kültürel haritası",
    meta: { author: "Turan Erbaş", date: "5 Nisan 2026", readTime: "11 dk okuma" },
    sections: [
      { id: "intro", heading: null, paragraphs: [
        "Gümüş, dünyanın hemen her köşesinde kültürel anlam taşıyan evrensel bir metaldir. Her toplum gümüşe kendine özgü sembolik değerler yüklemiş, farklı zanaat teknikleri geliştirmiş ve ritüellerinde gümüşe yer vermiştir.",
        "Bu makale, gümüşün dünya kültürlerindeki rolünü — Meksika, Hindistan, Tibet, Yemen, İskandinavya ve Kuzey Afrika — karşılaştırmalı olarak incelemektedir.",
      ]},
      { id: "ozet", heading: "Küresel Gümüş Kültür Haritası", paragraphs: ["Dünyanın farklı bölgelerinde gümüşün kültürel ifadeleri:"], widget: "cultures" },
      { id: "meksika", heading: "Meksika: Gümüşün Vatanı", paragraphs: [
        "Meksika, 500 yılı aşkın süredir dünyanın en büyük gümüş üreticisidir ve gümüş Meksika ulusal kimliğinin ayrılmaz bir parçasıdır. Taxco kasabası, 'dünyanın gümüş başkenti' olarak bilinir ve yüzlerce gümüş atölyesine ev sahipliği yapar.",
        "Aztek ve Maya medeniyetlerinde gümüş, Ay tanrıçası ile ilişkilendirilmiş ve kutsal bir metal olarak kabul edilmiştir. İspanyol sömürge döneminde Meksika gümüşü, küresel ticaretin temel para birimi olmuştur.",
        "Modern Meksika gümüş takı tasarımı, pre-Kolombyen motifleri çağdaş formlarla birleştiren benzersiz bir estetik sunar. William Spratling'in 1930'larda Taxco'da başlattığı gümüş rönesansı, Meksika'yı gümüş takı tasarımında dünya lideri konumuna taşımıştır.",
      ]},
      { id: "hindistan", heading: "Hindistan: Kutsal Metal", paragraphs: [
        "Hindistan'da gümüş, dini ve kültürel yaşamın merkezindedir. Hindu geleneğinde gümüş, Ay'ı ve dişil enerjiyi (Shakti) temsil eder. Gümüş kaplar pujanın (ibadet ritüeli) vazgeçilmez parçasıdır.",
        "Rajasthan bölgesi, Hindistan'ın gümüş işçiliği başkentidir. Rajput ve Mewar gümüş takı geleneği, ağır gümüş bilezikler, ayak halkaları (payal) ve burun takıları (nath) ile tanınır.",
        "Hint düğün geleneğinde gümüş, çeyizin önemli bir bileşenidir. Gümüş tabaklar, bardaklar ve tanrı heykelcikleri standart düğün hediyeleridir. Bazı bölgelerde gelinin ağırlığınca gümüş hediye edilmesi geleneği vardır.",
      ]},
      { id: "tibet", heading: "Tibet ve Himalaya: Ruhani Gümüş", paragraphs: [
        "Tibet'te gümüş, Budist ritüellerin ayrılmaz parçasıdır. Gümüş mandala kapları, buhurdanlar, çan (ghanta) ve dua çarkları (mani) geleneksel olarak gümüşten üretilir.",
        "Tibet gümüş takılarında turkuaz ve mercan taşları ile birleşim karakteristiktir. Bu renk paleti — gümüş, turkuaz mavisi ve mercan kırmızısı — Tibet estetiğinin imzasıdır.",
        "Himalaya bölgesi göçebe toplulukları (Sherpa, Tamang), gümüş takıyı hem süs hem de taşınabilir servet olarak kullanır — Anadolu Yörükleriyle benzer bir yaklaşım.",
      ]},
      { id: "yemen", heading: "Yemen ve Arap Yarımadası", paragraphs: [
        "Yemen gümüş işçiliği, İslam dünyasının en rafine geleneklerinden birini temsil eder. San'a kuyumcuları, yüzyıllardır telkâri ve granülasyon tekniklerinde ustalıklarıyla tanınır.",
        "Yemenli Yahudi gümüş ustaları (çoğu 1949-50 Büyük Aliyası ile İsrail'e göç etmiştir), bölgenin gümüş geleneğinin en önemli taşıyıcılarıydı. Bu göç, Yemen'de ciddi bir zanaat kaybına yol açmıştır.",
        "Hançer (jambiya) kabzaları, gelin takıları ve Kur'an kutuları Yemen gümüşçülüğünün başyapıtlarıdır. Körfez ülkelerinde gümüş kahve setleri, misafirperverliğin somut simgesidir.",
      ]},
      { id: "iskandinavya", heading: "İskandinavya: Viking Gümüşü", paragraphs: [
        "Vikingler, 8-11. yüzyıllarda İslam dünyasından elde ettikleri gümüş dirhemlerle Kuzey Avrupa'nın en büyük gümüş tüketicileri olmuştur. İsveç'te bulunan hazine definelerinde binlerce Abbasî dirhemi ele geçirilmiştir.",
        "Viking gümüş işçiliği, hayvan motifleri (ejderha, yılan, kurt), düğüm desenleri (knotwork) ve rünik yazıtlarla karakterizedir. Gümüş bilezikler ve broşlar, Viking toplumunda statü sembolüydü.",
        "Modern İskandinav gümüş tasarımı — Georg Jensen (Danimarka) gibi markalar — minimalist, fonksiyonel ve organik formlarıyla dünya çapında tanınır. Scandinavian design'ın gümüş üzerindeki yansımasıdır.",
      ]},
      { id: "kuzeyafrika", heading: "Kuzey Afrika: Berberi Geleneği", paragraphs: [
        "Fas, Cezayir ve Tunus'un Berberi (Amazigh) toplulukları, kendine özgü bir gümüş takı geleneği geliştirmiştir. Berberi gümüş takıları geometrik motifler, mine (emaye) dolgu ve büyük boyutlu formlarıyla tanınır.",
        "Fas'ın Tiznit şehri, Kuzey Afrika'nın gümüş işçiliği başkenti olarak bilinir. Burada üretilen gümüş takılar, Atlas Dağları halklarının kültürel kimliğini yansıtır.",
        "Berberi geleneğinde gümüş, altından daha değerli kabul edilir — 'altın şeytanın metali, gümüş Ay'ın metalıdır' inancı yaygındır. Bu inanç, gümüşün koruyucu ve kutsayıcı rolünü pekiştirir.",
      ]},
      { id: "ortaklik", heading: "Kültürler Arası Ortaklıklar", paragraphs: [
        "Farklı kültürlerin gümüşe yüklediği anlamlarda şaşırtıcı ortaklıklar mevcuttur: Ay ile ilişkilendirme (Hindistan, Anadolu, Kuzey Afrika), koruyucu güç atfetme (nazar, nazarlık, muska — Türkiye, Yemen, Hindistan), taşınabilir servet olarak kullanım (Yörükler, Tibetliler, Rajputlar) ve dişil enerjiyle bağdaştırma (Hindu Shakti, Ay tanrıçası geleneği).",
        "Bu evrensel temalar, gümüşün yalnızca ekonomik değil, derin arketipsel bir metale olduğunu gösterir. Gümüş, insanlığın ortak kültürel hafızasının parlak bir yansımasıdır.",
      ]},
    ],
    faq: { heading: "Sıkça Sorulan Sorular", items: [
      { q: "Hangi ülke gümüş takı tasarımında liderdir?", a: "Meksika (Taxco), Hindistan (Rajasthan), Türkiye (İstanbul, Mardin) ve Tayland dünyanın en büyük gümüş takı üretim merkezleridir." },
      { q: "Viking gümüşü nereden geliyordu?", a: "Büyük bölümü İslam dünyasından — özellikle Abbasî dirhemleri. Vikingler kürk ve köle ticareti karşılığında gümüş elde ediyordu." },
      { q: "Neden bazı kültürlerde gümüş altından daha değerli?", a: "Berberi geleneğinde gümüş Ay ile, altın ise güneş/şeytanla ilişkilendirilir. Bu sembolik hiyerarşi, ekonomik değerden bağımsız bir kültürel tercih oluşturur." },
    ]},
    sources: { heading: "Kaynaklar", items: ["John Mack — \"The Art of Small Things\" (British Museum)", "Oppi Untracht — \"Traditional Jewelry of India\"", "Thomas S. Noonan — \"The Islamic World, Russia and the Vikings\"", "Marjorie Ransom — \"Silver Treasures from the Land of Sheba\" (Yemen)", "Marie-Rose Rabaté — \"Bijoux du Maroc\""] },
    related: { heading: "İlgili Konular", items: [{ title: "Anadolu Folklorunda Gümüş", path: "/tr/kultur/anadolu", cat: "Kültür" }, { title: "İslam Medeniyetinde Gümüş", path: "/tr/tarih/islam", cat: "Tarih" }, { title: "Gümüş Sembolizmi", path: "/tr/kultur/sembolizm", cat: "Kültür" }] },
    sponsor: { text: "Dünya gümüş geleneklerinin modern yorumlarını keşfedin.", cta: "Instagram'da Gör", note: "Bu içerik İstanbul Gümüş tarafından desteklenmektedir." },
    cultureData: [
      { region: "Meksika", icon: "🇲🇽", specialty: "Taxco gümüşü, pre-Kolombyen motifler", symbol: "Ay tanrıçası, ulusal kimlik", technique: "Döküm, oksidasyonlu finish" },
      { region: "Hindistan", icon: "🇮🇳", specialty: "Rajasthan takıları, puja kapları", symbol: "Ay, Shakti, saflık", technique: "Repousse, granülasyon, kundan" },
      { region: "Tibet / Nepal", icon: "🏔️", specialty: "Mandala, ghanta, mani çarkı", symbol: "Ruhani arınma, Budist ritüel", technique: "Turkuaz-mercan kakma, dövme" },
      { region: "Yemen", icon: "🇾🇪", specialty: "Jambiya kabzası, gelin takıları", symbol: "İslam, misafirperverlik", technique: "Telkâri, granülasyon, filigran" },
      { region: "İskandinavya", icon: "🇸🇪", specialty: "Viking broşları, Georg Jensen", symbol: "Güç, statü, minimalizm", technique: "Knotwork, modernist döküm" },
      { region: "Kuzey Afrika", icon: "🇲🇦", specialty: "Berberi takıları, Tiznit", symbol: "Ay metali, koruyucu güç", technique: "Mine dolgu, geometrik filigran" },
    ],
    cultureTitle: "Dünya Gümüş Kültür Haritası",
    darkMode: "Mod", toc: "İçindekiler",
  },
  en: {
    nav: "SilverAtlas", navSub: "Silver Knowledge Platform",
    breadcrumb: ["Home", "Culture", "Silver in World Cultures"],
    category: "Culture",
    title: "Silver in World Cultures",
    subtitle: "From Mexico to Yemen, India to Tibet — silver's global cultural map",
    meta: { author: "Turan Erbaş", date: "April 5, 2026", readTime: "11 min read" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["Silver carries cultural meaning in virtually every corner of the world. Each society has imbued silver with unique symbolic values, developed distinct craft techniques, and incorporated silver into its rituals.", "This article examines silver's role across world cultures — Mexico, India, Tibet, Yemen, Scandinavia, and North Africa — in a comparative framework."] },
      { id: "overview", heading: "Global Silver Culture Map", paragraphs: ["Cultural expressions of silver across different world regions:"], widget: "cultures" },
      { id: "mexico", heading: "Mexico: Homeland of Silver", paragraphs: ["Mexico has been the world's largest silver producer for over 500 years, and silver is inseparable from Mexican national identity. Taxco is known as the 'silver capital of the world.'", "In Aztec and Maya civilizations, silver was associated with the Moon goddess and considered sacred. During the colonial era, Mexican silver became the backbone of global trade.", "Modern Mexican silver design uniquely blends pre-Columbian motifs with contemporary forms. William Spratling's 1930s silver renaissance in Taxco established Mexico as a world leader in silver jewelry design."] },
      { id: "india", heading: "India: The Sacred Metal", paragraphs: ["In India, silver is central to religious and cultural life. In Hindu tradition, silver represents the Moon and feminine energy (Shakti). Silver vessels are essential in puja (worship rituals).", "Rajasthan is India's silver craft capital, known for heavy bracelets, ankle rings (payal), and nose rings (nath).", "In Indian wedding tradition, silver is a vital dowry component. Silver plates, cups, and deity figurines are standard wedding gifts."] },
      { id: "tibet", heading: "Tibet and the Himalayas: Spiritual Silver", paragraphs: ["In Tibet, silver is integral to Buddhist rituals — mandala vessels, incense burners, bells (ghanta), and prayer wheels (mani) are traditionally crafted from silver.", "Tibetan silver jewelry characteristically combines turquoise and coral stones. This palette — silver, turquoise blue, and coral red — is Tibet's aesthetic signature.", "Himalayan nomadic communities use silver jewelry as both adornment and portable wealth — an approach paralleling Anatolian Yörüks."] },
      { id: "yemen", heading: "Yemen and the Arabian Peninsula", paragraphs: ["Yemeni silverwork represents one of the Islamic world's most refined traditions. Sana'a jewelers have been renowned for centuries for their filigree and granulation mastery.", "Yemeni Jewish silver masters (most emigrated to Israel in the 1949-50 Great Aliyah) were the tradition's most important carriers. This migration caused significant craft loss in Yemen.", "Jambiya dagger handles, bridal jewelry, and Quran cases are masterpieces of Yemeni silverwork. In Gulf countries, silver coffee sets are tangible symbols of hospitality."] },
      { id: "scandinavia", heading: "Scandinavia: Viking Silver", paragraphs: ["Vikings, using silver dirhams obtained from the Islamic world (8th-11th centuries), became Northern Europe's largest silver consumers. Thousands of Abbasid dirhams have been found in Swedish hoards.", "Viking silverwork is characterized by animal motifs (dragons, serpents, wolves), knotwork patterns, and runic inscriptions. Silver bracelets and brooches were status symbols.", "Modern Scandinavian silver design — brands like Georg Jensen (Denmark) — is globally recognized for minimalist, functional, and organic forms."] },
      { id: "northafrica", heading: "North Africa: Berber Tradition", paragraphs: ["Berber (Amazigh) communities in Morocco, Algeria, and Tunisia developed a distinctive silver jewelry tradition, known for geometric motifs, enamel inlay, and large-scale forms.", "Morocco's Tiznit is known as North Africa's silver craft capital.", "In Berber tradition, silver is valued above gold — 'gold is the devil's metal, silver is the Moon's metal.' This belief reinforces silver's protective and sanctifying role."] },
      { id: "common", heading: "Cross-Cultural Commonalities", paragraphs: ["Surprising commonalities exist across cultures' silver symbolism: lunar association (India, Anatolia, North Africa), protective power attribution (nazar charms — Turkey, Yemen, India), portable wealth (Yörüks, Tibetans, Rajputs), and feminine energy connection (Hindu Shakti, Moon goddess traditions).", "These universal themes demonstrate that silver is not merely an economic metal but a deeply archetypal one — a shining reflection of humanity's shared cultural memory."] },
    ],
    faq: { heading: "FAQ", items: [
      { q: "Which country leads in silver jewelry design?", a: "Mexico (Taxco), India (Rajasthan), Turkey (Istanbul, Mardin), and Thailand are the world's largest silver jewelry production centers." },
      { q: "Where did Viking silver come from?", a: "Primarily from the Islamic world — especially Abbasid dirhams, obtained through fur and slave trade." },
      { q: "Why is silver more valued than gold in some cultures?", a: "In Berber tradition, silver is associated with the Moon and gold with the sun/devil. This symbolic hierarchy creates a cultural preference independent of economic value." },
    ]},
    sources: { heading: "Sources", items: ["John Mack — \"The Art of Small Things\" (British Museum)", "Oppi Untracht — \"Traditional Jewelry of India\"", "T. Noonan — \"The Islamic World, Russia and the Vikings\"", "M. Ransom — \"Silver Treasures from the Land of Sheba\"", "M.-R. Rabaté — \"Bijoux du Maroc\""] },
    related: { heading: "Related", items: [{ title: "Silver in Anatolian Folklore", path: "/en/culture/anatolia", cat: "Culture" }, { title: "Silver in Islamic Civilization", path: "/en/history/islam", cat: "History" }] },
    sponsor: { text: "Discover modern interpretations of world silver traditions.", cta: "View on Instagram", note: "This content is supported by İstanbul Gümüş." },
    cultureData: [
      { region: "Mexico", icon: "🇲🇽", specialty: "Taxco silver, pre-Columbian motifs", symbol: "Moon goddess, national identity", technique: "Casting, oxidized finish" },
      { region: "India", icon: "🇮🇳", specialty: "Rajasthan jewelry, puja vessels", symbol: "Moon, Shakti, purity", technique: "Repousse, granulation, kundan" },
      { region: "Tibet / Nepal", icon: "🏔️", specialty: "Mandala, ghanta, mani wheel", symbol: "Spiritual purification, Buddhist ritual", technique: "Turquoise-coral inlay, forging" },
      { region: "Yemen", icon: "🇾🇪", specialty: "Jambiya handles, bridal sets", symbol: "Islam, hospitality", technique: "Filigree, granulation" },
      { region: "Scandinavia", icon: "🇸🇪", specialty: "Viking brooches, Georg Jensen", symbol: "Power, status, minimalism", technique: "Knotwork, modernist casting" },
      { region: "North Africa", icon: "🇲🇦", specialty: "Berber jewelry, Tiznit", symbol: "Moon metal, protective power", technique: "Enamel inlay, geometric filigree" },
    ],
    cultureTitle: "Global Silver Culture Map",
    darkMode: "Mode", toc: "Contents",
  },
  ar: {
    nav: "SilverAtlas", navSub: "منصة المعرفة بالفضة",
    breadcrumb: ["الرئيسية", "الثقافة", "الفضة في ثقافات العالم"],
    category: "الثقافة",
    title: "الفضة في ثقافات العالم",
    subtitle: "من المكسيك إلى اليمن، ومن الهند إلى التبت — خريطة الفضة الثقافية العالمية",
    meta: { author: "توران أرباش", date: "٥ أبريل ٢٠٢٦", readTime: "١١ دقيقة قراءة" },
    sections: [
      { id: "intro", heading: null, paragraphs: ["الفضة تحمل معنى ثقافياً في كل ركن من أركان العالم تقريباً. كل مجتمع أضفى على الفضة قيماً رمزية فريدة.", "يتناول هذا المقال دور الفضة عبر ثقافات العالم — المكسيك والهند والتبت واليمن واسكندنافيا وشمال أفريقيا."] },
      { id: "overview", heading: "خريطة ثقافات الفضة العالمية", paragraphs: ["التعبيرات الثقافية للفضة عبر مناطق العالم:"], widget: "cultures" },
      { id: "mexico", heading: "المكسيك: وطن الفضة", paragraphs: ["المكسيك أكبر منتج للفضة منذ ٥٠٠ عام. تاكسكو معروفة بـ'عاصمة الفضة العالمية'.", "في حضارات الأزتك والمايا ارتبطت الفضة بإلهة القمر واعتُبرت معدناً مقدساً.", "التصميم المكسيكي الحديث يمزج زخارف ما قبل كولومبوس بأشكال معاصرة."] },
      { id: "india", heading: "الهند: المعدن المقدس", paragraphs: ["في الهند الفضة محورية في الحياة الدينية. في التقليد الهندوسي تمثل القمر والطاقة الأنثوية (شاكتي).", "راجستان عاصمة صياغة الفضة الهندية. معروفة بالأساور الثقيلة وحلقات القدم.", "في تقاليد الزفاف الهندي الفضة مكون أساسي في المهر."] },
      { id: "tibet", heading: "التبت والهيمالايا: الفضة الروحانية", paragraphs: ["في التبت الفضة جزء لا يتجزأ من الطقوس البوذية — أوعية الماندالا والأجراس وعجلات الصلاة.", "حلي الفضة التبتية تتميز بالجمع مع الفيروز والمرجان.", "المجتمعات البدوية في الهيمالايا تستخدم الحلي الفضية كثروة محمولة."] },
      { id: "yemen", heading: "اليمن وشبه الجزيرة العربية", paragraphs: ["صياغة الفضة اليمنية من أرقى تقاليد العالم الإسلامي. صاغة صنعاء مشهورون بالتلكاري والتحبيب.", "الحرفيون اليهود اليمنيون (هاجر معظمهم إلى إسرائيل ١٩٤٩-٥٠) كانوا أهم حاملي هذا التقليد.", "مقابض الجنبية وحلي العروس وعلب المصحف تحف صياغة الفضة اليمنية."] },
      { id: "scandinavia", heading: "اسكندنافيا: فضة الفايكنغ", paragraphs: ["الفايكنغ أكبر مستهلكي الفضة في شمال أوروبا باستخدام الدراهم الإسلامية.", "صياغة الفضة الفايكنغية تتميز بزخارف الحيوانات والعقد الزخرفية والنقوش الرونية.", "التصميم الاسكندنافي الحديث (Georg Jensen) معروف عالمياً بالبساطة والأشكال العضوية."] },
      { id: "northafrica", heading: "شمال أفريقيا: التقليد الأمازيغي", paragraphs: ["الأمازيغ في المغرب والجزائر وتونس طوروا تقليد حلي فضية مميزاً بالزخارف الهندسية والمينا.", "تيزنيت في المغرب معروفة بعاصمة صياغة الفضة في شمال أفريقيا.", "في التقليد الأمازيغي الفضة أعلى قيمة من الذهب — 'الذهب معدن الشيطان، الفضة معدن القمر'."] },
      { id: "common", heading: "قواسم ثقافية مشتركة", paragraphs: ["توجد قواسم مشتركة مدهشة: الارتباط بالقمر، القوة الحامية، الثروة المحمولة، والطاقة الأنثوية.", "هذه المواضيع العالمية تُظهر أن الفضة معدن نموذجي أصيل — انعكاس لامع لذاكرة الإنسانية الثقافية المشتركة."] },
    ],
    faq: { heading: "الأسئلة الشائعة", items: [
      { q: "أي دولة تتصدر تصميم المجوهرات الفضية؟", a: "المكسيك (تاكسكو) والهند (راجستان) وتركيا (إسطنبول، ماردين) وتايلاند." },
      { q: "من أين جاءت فضة الفايكنغ؟", a: "أساساً من العالم الإسلامي — خاصة الدراهم العباسية عبر تجارة الفراء." },
    ]},
    sources: { heading: "المصادر", items: ["John Mack — فن الأشياء الصغيرة (المتحف البريطاني)", "Oppi Untracht — المجوهرات التقليدية في الهند", "Marjorie Ransom — كنوز الفضة من أرض سبأ"] },
    related: { heading: "مواضيع ذات صلة", items: [{ title: "الفضة في الفولكلور الأناضولي", path: "/ar/culture/anatolia", cat: "الثقافة" }, { title: "الفضة في الحضارة الإسلامية", path: "/ar/history/islam", cat: "التاريخ" }] },
    sponsor: { text: "اكتشفوا التفسيرات الحديثة لتقاليد الفضة العالمية.", cta: "شاهد على إنستغرام", note: "هذا المحتوى مدعوم من إسطنبول غوموش." },
    cultureData: [
      { region: "المكسيك", icon: "🇲🇽", specialty: "فضة تاكسكو، زخارف ما قبل كولومبوس", symbol: "إلهة القمر، الهوية الوطنية", technique: "صب، تشطيب مؤكسد" },
      { region: "الهند", icon: "🇮🇳", specialty: "حلي راجستان، أوعية بوجا", symbol: "القمر، شاكتي، النقاء", technique: "ريبوسيه، تحبيب، كندان" },
      { region: "التبت / نيبال", icon: "🏔️", specialty: "ماندالا، غانتا، عجلة ماني", symbol: "التطهير الروحي، الطقوس البوذية", technique: "تطعيم فيروز-مرجان، طرق" },
      { region: "اليمن", icon: "🇾🇪", specialty: "مقابض جنبية، حلي عرائس", symbol: "الإسلام، الضيافة", technique: "تلكاري، تحبيب" },
      { region: "اسكندنافيا", icon: "🇸🇪", specialty: "بروشات فايكنغ، Georg Jensen", symbol: "القوة، المكانة، البساطة", technique: "عقد زخرفية، صب حداثي" },
      { region: "شمال أفريقيا", icon: "🇲🇦", specialty: "حلي أمازيغية، تيزنيت", symbol: "معدن القمر، قوة حامية", technique: "تطعيم مينا، فيليغران هندسي" },
    ],
    cultureTitle: "خريطة ثقافات الفضة العالمية",
    darkMode: "الوضع", toc: "المحتويات",
  },
};

function CultureGrid({ data, title, dark }) {
  const textP=dark?"#e8e8ec":"#2C2C2C"; const textS=dark?"#9a9aaa":"#6B7280"; const gold="#D4AF37"; const border=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)"; const accent=dark?"#C0C0C0":"#708090";
  return (
    <div style={{margin:"20px 0"}}>
      <div style={{fontSize:14,fontWeight:600,color:textP,marginBottom:16}}>{title}</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12}}>
        {data.map((c,i)=>(
          <div key={i} style={{padding:"18px",borderRadius:14,border:`1px solid ${border}`,background:dark?"rgba(192,192,192,0.02)":"rgba(192,192,192,0.04)"}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
              <span style={{fontSize:28}}>{c.icon}</span>
              <span style={{fontSize:16,fontWeight:700,color:textP}}>{c.region}</span>
            </div>
            <div style={{fontSize:12,color:textS,marginBottom:6}}><span style={{color:gold,fontWeight:600,fontSize:10,letterSpacing:"0.04em"}}>ZANAAT </span>{c.specialty}</div>
            <div style={{fontSize:12,color:textS,marginBottom:6}}><span style={{color:accent,fontWeight:600,fontSize:10,letterSpacing:"0.04em"}}>SEMBOL </span>{c.symbol}</div>
            <div style={{fontSize:12,color:textS}}><span style={{color:"#6EC6FF",fontWeight:600,fontSize:10,letterSpacing:"0.04em"}}>TEKNİK </span>{c.technique}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WorldCulturesArticle() {
  const [lang,setLang]=useState("tr"); const [dark,setDark]=useState(true); const [openFaq,setOpenFaq]=useState(null);
  const t=T[lang]; const isRTL=lang==="ar";
  const bgP=dark?"#0f0f14":"#FAFAF5"; const bgCard=dark?"#1a1a24":"#fff"; const textP=dark?"#e8e8ec":"#2C2C2C"; const textS=dark?"#9a9aaa":"#6B7280"; const accent=dark?"#C0C0C0":"#708090"; const gold="#D4AF37"; const border=dark?"rgba(192,192,192,0.1)":"rgba(0,0,0,0.06)"; const fontD="'Playfair Display',Georgia,serif"; const fontB=lang==="ar"?"'Noto Naskh Arabic',serif":"'Source Sans 3',sans-serif";

  return (
    <div dir={isRTL?"rtl":"ltr"} style={{fontFamily:fontB,background:bgP,color:textP,minHeight:"100vh"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*{margin:0;padding:0;box-sizing:border-box}::selection{background:rgba(192,192,192,0.3)}`}</style>
      <nav style={{position:"sticky",top:0,zIndex:100,background:dark?"rgba(15,15,20,0.88)":"rgba(250,250,245,0.88)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${border}`,padding:"0 24px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"}}><div style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:16}}>{t.nav}</span></div><div style={{display:"flex",alignItems:"center",gap:12}}><div style={{display:"flex",gap:2,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)",borderRadius:7,padding:2}}>{["tr","en","ar"].map(l=><button key={l} onClick={()=>setLang(l)} style={{border:"none",cursor:"pointer",padding:"3px 9px",borderRadius:5,fontSize:11,fontWeight:lang===l?600:400,fontFamily:l==="ar"?"'Noto Naskh Arabic',serif":fontB,background:lang===l?(dark?"rgba(192,192,192,0.15)":"rgba(0,0,0,0.08)"):"transparent",color:lang===l?textP:textS}}>{l==="ar"?"عر":l.toUpperCase()}</button>)}</div><button onClick={()=>setDark(!dark)} style={{border:"none",cursor:"pointer",background:"transparent",color:textS,fontSize:16,padding:4}}>{dark?"☀️":"🌙"}</button></div></nav>
      <div style={{maxWidth:760,margin:"0 auto",padding:"16px 24px 0",display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",fontSize:12,color:textS}}>{t.breadcrumb.map((item,i)=><span key={i} style={{display:"flex",alignItems:"center",gap:6}}>{i>0&&<span style={{opacity:0.4}}>{isRTL?"‹":"›"}</span>}<a href="#" style={{color:i===t.breadcrumb.length-1?textP:textS,textDecoration:"none",fontWeight:i===t.breadcrumb.length-1?500:400}}>{item}</a></span>)}</div>
      <article style={{maxWidth:760,margin:"0 auto",padding:"32px 24px 64px",animation:"fadeUp 0.6s ease both"}}>
        <div style={{marginBottom:36}}><div style={{display:"inline-block",padding:"3px 12px",borderRadius:6,fontSize:11,fontWeight:600,letterSpacing:"0.04em",color:gold,border:`1px solid ${gold}33`,marginBottom:16}}>{t.category}</div><h1 style={{fontFamily:fontD,fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.15,marginBottom:12}}>{t.title}</h1><p style={{fontSize:16,color:textS,lineHeight:1.6,marginBottom:20}}>{t.subtitle}</p><div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",fontSize:13,color:textS,paddingBottom:20,borderBottom:`1px solid ${border}`}}><span>{t.meta.author}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.date}</span><span style={{opacity:0.3}}>·</span><span>{t.meta.readTime}</span></div></div>
        <div style={{height:220,borderRadius:16,marginBottom:36,overflow:"hidden",background:dark?"linear-gradient(135deg,#1a1a2e,#2a2a3e,#1a1a2e)":"linear-gradient(135deg,#e8e8e8,#d0d0d0,#e8e8e8)",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{textAlign:"center"}}><div style={{fontSize:42,marginBottom:4}}>🇲🇽🇮🇳🏔️🇾🇪🇸🇪🇲🇦</div><div style={{fontFamily:fontD,fontSize:20,fontWeight:700,background:`linear-gradient(135deg,${accent},${gold})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>WORLD SILVER</div><div style={{fontSize:12,color:textS,letterSpacing:"0.12em",marginTop:4}}>CULTURAL ATLAS</div></div></div>

        {t.sections.map(sec=>(<section key={sec.id} style={{marginBottom:36}}>{sec.heading&&<h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:16,paddingTop:8}}>{sec.heading}</h2>}{sec.paragraphs.map((p,pi)=><p key={pi} style={{fontSize:15,lineHeight:1.8,color:textS,marginBottom:14}}>{p}</p>)}{sec.widget==="cultures"&&<CultureGrid data={t.cultureData} title={t.cultureTitle} dark={dark}/>}</section>))}
        <section style={{marginBottom:36,marginTop:48}}><h2 style={{fontFamily:fontD,fontSize:24,fontWeight:600,marginBottom:20}}>{t.faq.heading}</h2><div style={{display:"flex",flexDirection:"column",gap:8}}>{t.faq.items.map((item,i)=>(<div key={i} style={{border:`1px solid ${openFaq===i?gold+"44":border}`,borderRadius:12,overflow:"hidden",background:openFaq===i?(dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.04)"):"transparent"}}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{width:"100%",border:"none",cursor:"pointer",background:"transparent",padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",color:textP,fontSize:14,fontWeight:500,fontFamily:fontB,textAlign:isRTL?"right":"left",gap:12}}><span style={{flex:1}}>{item.q}</span><span style={{fontSize:18,color:textS,transform:openFaq===i?"rotate(45deg)":"rotate(0)",flexShrink:0}}>+</span></button>{openFaq===i&&<div style={{padding:"0 20px 16px",fontSize:14,lineHeight:1.7,color:textS}}>{item.a}</div>}</div>))}</div></section>
        <section style={{marginBottom:36,padding:"20px 24px",background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)",borderRadius:12,border:`1px solid ${border}`}}><h3 style={{fontSize:15,fontWeight:600,marginBottom:12}}>{t.sources.heading}</h3>{t.sources.items.map((s,i)=><div key={i} style={{fontSize:13,color:textS,lineHeight:1.6,marginBottom:6,display:"flex",gap:8}}><span style={{color:accent,fontWeight:600,flexShrink:0}}>[{i+1}]</span><span>{s}</span></div>)}</section>
        <section style={{marginBottom:40}}><h3 style={{fontSize:18,fontFamily:fontD,fontWeight:600,marginBottom:16}}>{t.related.heading}</h3><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:12}}>{t.related.items.map((item,i)=><a key={i} href={item.path} style={{textDecoration:"none",padding:"16px 18px",border:`1px solid ${border}`,borderRadius:12,background:bgCard,display:"block"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=gold+"44"}} onMouseLeave={e=>{e.currentTarget.style.borderColor=border}}><div style={{fontSize:10,color:gold,fontWeight:600,marginBottom:6,letterSpacing:"0.04em"}}>{item.cat}</div><div style={{fontSize:14,fontWeight:500,color:textP}}>{item.title}</div><div style={{fontSize:12,color:textS,marginTop:6}}>{isRTL?"←":"→"}</div></a>)}</div></section>
        <div style={{border:`1px solid ${gold}22`,borderRadius:16,padding:"28px 24px",background:dark?"rgba(212,175,55,0.03)":"rgba(212,175,55,0.05)",textAlign:"center"}}><p style={{fontSize:15,color:textP,marginBottom:16,lineHeight:1.6}}>{t.sponsor.text}</p><a href="https://instagram.com/istanbulgumustr" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"10px 24px",borderRadius:10,background:`linear-gradient(135deg,${accent},${gold})`,color:"#0f0f14",fontSize:13,fontWeight:600,textDecoration:"none"}}>📸 {t.sponsor.cta}</a><p style={{fontSize:11,color:textS,marginTop:14,opacity:0.7}}>{t.sponsor.note}</p></div>
      </article>
      <footer style={{borderTop:`1px solid ${border}`,padding:"24px",textAlign:"center",background:dark?"#0c0c10":"#f5f5f0"}}><div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:8}}><div style={{width:22,height:22,borderRadius:"50%",background:`linear-gradient(135deg,${accent},${gold})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#0f0f14",fontFamily:fontD}}>Ag</div><span style={{fontFamily:fontD,fontWeight:600,fontSize:14}}>{t.nav}</span></div><p style={{fontSize:11,color:textS}}>CC BY-NC-SA 4.0 · Sponsored by İstanbul Gümüş</p></footer>
    </div>
  );
}
