# JewelPedi — Master Plan
### Silverpedi → Tam Kıymetli Metal & Taş Ansiklopedisi
> Son güncelleme: 2026-04-15 | Versiyon: 5.0
> Mevcut durum: **Faz 0-5 tamamlandı** — 200 makale milestone!

---

## 📊 Genel Bakış

| Metrik | Mevcut | Faz 3 Hedef | Final Hedef |
|--------|--------|-------------|-------------|
| Makale | 200 ✅ | 180-200 ✅ | 200+ ✅ |
| Araç | 47 | 48-50 | 55+ |
| Dil | 3 (TR/EN/AR) | 3 | 3+ |
| Metal/Taş Sütunu | 6 (gümüş, altın, pırlanta, taş, platin, shared) | 6 | 6 |
| Kategori | 29 | 30-32 | 34+ |
| Sponsor | 1 (İstanbul Gümüş) | 1-2 | 2-3 |
| Alan Adı | istanbul.silver | jewelpedi.com | jewelpedi.com |

---

## ✅ FAZ 0 — Silverpedi Temeli (TAMAMLANDI)

### Altyapı
- [x] React + Vite SPA kurulumu
- [x] Mobil-first responsive tasarım
- [x] Dark/Light tema desteği
- [x] 3 dil desteği (TR/EN/AR) + RTL
- [x] GitHub Pages deploy (CI/CD)
- [x] PWA manifest + favicon + OG meta

### İçerik — Gümüş
- [x] 73 makale (10 kategori)
- [x] Tüm makaleler 3 dilde (TR/EN/AR)
- [x] SVG infografikler (ilk 10 makale)
- [x] Inline animasyonlu grafikler
- [x] Fact-box ve FAQ bölümleri
- [x] Kaynak referansları

### Araçlar (33 aktif)
- [x] 925 Saflık Hesaplayıcı
- [x] Birim Dönüştürücü
- [x] Yüzük Ölçü Bulucu (premium — kredi kartı kalibrasyonu)
- [x] Bilezik Ölçü Bulucu
- [x] Kolye Uzunluk Rehberi
- [x] Bilgi Quizi + İleri Quiz v2
- [x] Renk Paleti
- [x] Karbon Ayak İzi
- [x] Periyodik Tablo
- [x] Karat Dönüştürücü
- [x] Taş Uyum Rehberi
- [x] Bakım Rehberi
- [x] Zaman Çizelgesi
- [x] Damga Tanımlayıcı
- [x] Zekât Hesaplayıcı
- [x] Saflık Test Rehberi
- [x] Metal Karşılaştırıcı
- [x] Takı Kombinatörü
- [x] Türkiye Atlası + Dünya Haritası
- [x] Gravür Önizleyici
- [x] Sigorta Hesaplayıcı
- [x] Kararma Simülatörü
- [x] Dünya Saati
- [x] Portföy Takipçisi
- [x] Sertifika Doğrulayıcı
- [x] Altın/Gümüş Oranı (canlı)
- [x] Sahtecilik Tespit Rehberi (5 adım interaktif)
- [x] Erime Değeri Hesaplayıcı (canlı fiyatlı)

### Canlı Veri
- [x] Gümüş spot fiyat (gold-api.com → XAG)
- [x] Altın spot fiyat (gold-api.com → XAU)
- [x] USD/TRY kur (open.er-api.com)
- [x] Kayan fiyat ticker (nav altı marquee)
- [x] Hero canlı fiyat badge
- [x] 5 dakika cache + fallback

### Tasarım (Batch 18 Benchmark)
- [x] Tiffany/Mejuri/Kitco/NatGeo/Bloomberg analizi
- [x] Premium easing (expo-out, spring)
- [x] 3D tilt hover efektleri
- [x] Glassmorphism nav + bottom sheet
- [x] Staggered reveal animasyonlar
- [x] Splash screen (1.7s)
- [x] Reading progress bar
- [x] Scroll-to-top + Bottom nav

### Sponsor
- [x] İstanbul Gümüş CTA bölümü
- [x] Instagram linki
- [x] Sponsor badge + features
- [x] Makale içi sponsor kartı

---

## 🔶 FAZ 1 — Altın Genişlemesi (SIRADA)
> ✅ TAMAMLANDI | Sonuç: 94 makale, 36 araç, 14 kategori, 4 canlı metal

### 1.1 Veri Yapısı Güncelleme
- [x] `articles.js`'e `material` alanı ekle (`silver`, `gold`, `shared`)
- [x] `categories.js`'e altın kategorileri ekle:
  - [x] `altin-temel` — Altın Temelleri
  - [x] `altin-yatirim` — Altın Yatırım
  - [x] `altin-taki` — Altın Takı
  - [x] `altin-kultur` — Altın Kültür
- [x] Filtreleme sistemini güncelle (material tab + kategori chip)
- [x] Ana sayfa bölüm seçici (Gümüş | Altın | Tümü)

### 1.2 Altın Makaleleri — Temel (8-10 makale)
- [x] Altın Nedir? (element, fiziksel/kimyasal özellikler, Au 79)
- [x] Karat Sistemi (8K, 10K, 14K, 18K, 22K, 24K — alaşım oranları)
- [x] Altın Renk Varyasyonları (sarı, beyaz, rose, yeşil, siyah)
- [x] Altın Ayar Damgası Rehberi (Türkiye + uluslararası)
- [x] Altın vs Gümüş Karşılaştırması (mevcut #3 shared olarak güncellendi) (cross-reference mevcut makale #3)
- [x] Altın Alaşımları ve Metalürjisi
- [x] Beyaz Altın ve Rodyum Kaplama
- [x] 585, 750, 916 — Ayar Numaraları Ne Anlama Gelir?

### 1.3 Altın Makaleleri — Yatırım (5-6 makale)
- [x] Altın Yatırım Rehberi (fiziksel, ETF, BIST, dijital)
- [x] Çeyrek/Yarım/Tam Altın — Cumhuriyet Altını Rehberi
- [x] Gram Altın Yatırımı (bankalar, dijital platformlar)
- [x] Altın ETF ve Borsa Yatırım Fonları
- [x] Merkez Bankası Altın Rezervleri ve Küresel Trend
- [x] 2026 Altın Piyasa Özeti (canlı verilerle)

### 1.4 Altın Makaleleri — Kültür & Takı (6-8 makale)
- [x] Altın Düğün Geleneği (Türkiye, Hindistan, Körfez)
- [x] Osmanlı Altınları ve Sikke Tarihi
- [x] İslam'da Altın (fıkıh, zekât, erkeklere haram meselesi)
- [x] Hint Alt Kıtası Altın Kültürü
- [x] Altın Takı Seçim Rehberi (günlük, özel gün, yatırım)
- [x] Altın Kaplama vs Masif (Gold-filled, vermeil, plated farkları)
- [x] İtalyan vs Türk Altın İşçiliği
- [x] Altın Bakım ve Temizlik Rehberi

### 1.5 Mevcut Araçları Altın Desteğiyle Güncelle
- [x] Saflık Hesaplayıcı → 14K/18K/22K/24K ayar eklentisi (metal toggle)
- [x] Erime Değeri → altın seçeneği (canlı XAU fiyatıyla)
- [x] Metal Karşılaştırıcı → altın + paladyum parametreleri
- [x] Zekât Hesaplayıcı → altın nisabı (85g) + metal toggle
- [x] Damga Tanımlayıcı → 8 altın damgası eklendi

### 1.6 Yeni Altın Araçları
- [x] Altın Karat Hesaplayıcı (karat slider → saflık → canlı değer)
- [x] Düğün Altını Bütçe Planlayıcı (davetli × çeyrek → maliyet) (davetli × gelenek → tahmini maliyet)
- [x] Canlı Metal Dashboard (Ag/Au + $/₺ + oran)

### 1.7 Ticker & Fiyat Güncellemeleri
- [x] Ticker'a XPT (platin) ve XPD (paladyum) eklendi
- [x] Hero'da Ag/Au fiyat toggle eklendi
- [x] Altın ayar bazlı gram fiyat tablosu (Calculator section'da canlı)

### 1.8 UI/UX Değişiklikleri
- [x] Ana sayfa üst kısma material tab bar (🥈 Gümüş | 🥇 Altın | 📚 Tümü)
- [x] Kategori kartlarına material badge
- [x] Renk paleti genişlemesi (gold glow, gold accent CSS, gold hover efektleri)
- [x] Navigation güncelleme (Ag/Au logo, Calculator gold toggle)

---

## 💎 FAZ 2 — Pırlanta & Renkli Taşlar
> ✅ BÜYÜK ÖLÇÜDE TAMAMLANDI | Sonuç: 134 makale, 40 araç, 25 kategori

### 2.1 Pırlanta/Elmas Makaleleri (15-18 makale)

#### 4C Eğitimi (her biri derinlikli ayrı makale)
- [x] Cut (Kesim) — Ideal, Excellent, Very Good, Good, Fair, Poor
- [x] Clarity (Berraklık) — FL, IF, VVS1-2, VS1-2, SI1-2, I1-3
- [x] Color (Renk) — D-Z skalası, fancy color
- [x] Carat (Karat) — ağırlık-boyut ilişkisi, fiyat eşikleri

#### Kesim Profilleri
- [x] Round Brilliant — dünyanın en popüler kesimi
- [x] Princess, Emerald, Oval, Cushion — her biri kısa profil
- [x] Pear, Marquise, Heart, Asscher, Radiant — her biri kısa profil
- [x] Fancy Kesimler Karşılaştırması (tek sayfa)

#### Sertifika & Değerleme
- [x] GIA Raporu Nasıl Okunur?
- [x] GIA vs AGS vs IGI vs HRD — Sertifika Karşılaştırması
- [x] Pırlanta Fiyatını Etkileyen Faktörler

#### Bilim & Teknoloji
- [x] Elmas Nedir? (karbon kristal, Mohs 10, oluşum)
- [x] Lab-Grown vs Doğal Pırlanta (CVD, HPHT, etik, fiyat)
- [x] Pırlanta vs Zirkon vs Moissanite — Ayırt Etme Rehberi

#### Kültür & Tarih
- [x] Tektaş Geleneğinin Tarihi (De Beers, "A Diamond is Forever")
- [x] Dünyanın Ünlü Pırlantaları (Hope, Koh-i-Noor, Cullinan)

### 2.2 Renkli Taş Makaleleri (20-25 makale)

#### Big 3 — Değerli Taşlar (her biri 2-3 makale derinliğinde)
- [x] Zümrüt (Beryl) — oluşum, renk, Kolombiya vs Zambiya, bakım
- [x] Yakut (Korundum) — "taşların kralı", Burma vs Mozambik, ısıl işlem
- [x] Safir (Korundum) — mavi + fancy renk safirler, Kaşmir, sertifika

#### Popüler Yarı Değerli Taşlar
- [x] Ametist — mor kuvars, tarih, bakım
- [x] Topaz — renk çeşitliliği, imperial topaz
- [x] Akvamarin — beryl ailesi, deniz mavi
- [x] Opal — ateş oyunu, Avustralya vs Etiyopya
- [x] Turkuaz — en eski süs taşı, İran vs Arizona
- [x] Peridot — volkanik köken, yeşil parıltı
- [x] Garnet — 6 türü, renk skalası
- [x] Sitrin — güneş taşı, ametist bağlantısı
- [x] Ay Taşı (Moonstone) — adularescence efekti
- [x] Lapis Lazuli — Antik Mısır'ın mavisi
- [x] Tanzanit — tek kaynak, nadir

#### Organik Taşlar
- [x] İnci Rehberi (tatlı su vs deniz, Akoya vs Tahiti vs South Sea)
- [x] Kehribar — fosilleşmiş reçine, Baltık vs Dominik
- [x] Mercan — kırmızı/pembe, koruma endişeleri

#### Türkiye Özel
- [x] Oltu Taşı (Erzurum) — tarihi, işçiliği, kullanımı
- [x] Zultanit / Diaspor (Muğla) — renk değiştiren Türk taşı
- [x] Türkiye Yarı Değerli Taş Haritası (interaktif — Leaflet entegre)
- [x] Eskişehir Lületaşı — beyaz altın taş

#### Eğitim & Rehber
- [x] Mohs Sertlik Skalası (interaktif)
- [x] Taş Tedavileri (ısıtma, yağlama, ışınlama — ne anlama gelir?)
- [x] Sentetik vs Doğal vs İmitasyon — Nasıl Ayırt Edilir?
- [x] Burç Taşları — 12 Ay, 12 Taş (her ay kısa profil)
- [x] Doğum Taşları Rehberi (Batı + Türk geleneği)

### 2.3 Yeni Taş/Pırlanta Araçları
- [x] 4C Pırlanta Değer Tahmini (kesim+renk+berraklık+karat → fiyat aralığı)
- [x] Taş Tanımlayıcı (renk + sertlik + parlaklık → en olası taş)
- [x] Kesim Karşılaştırıcı (round vs princess vs emerald → görsel)
- [x] Karat → mm Dönüştürücü (her kesim için farklı)
- [x] Mohs Sertlik Karşılaştırıcı (interaktif skala)
- [x] Burç Taşı Bulucu (doğum tarihi → taş önerisi)

### 2.4 Marka Dönüşümü
- [ ] Alan adı karar ver (jewelpedi.com / takipedi.com / mucevherpedi.com)
- [ ] Alan adı satın al
- [x] Logo yenileme (Ag·Au → JP diamond motif — favicon + splash)
- [x] Splash screen güncelleme (JP monogram + diamond shape)
- [x] OG image ve meta tag güncelleme (200 makale, 47 araç, diamond motif)
- [ ] Silverpedi → JewelPedi redirect (eski URL'ler kırılmasın)
- [x] README.md oluşturuldu (proje yapısı, kurulum, versiyon tarihi)

### 2.5 Navigasyon Yeniden Yapılandırma
- [x] Üst seviye material tabs: Gümüş | Altın | Pırlanta | Taşlar | Tümü
- [x] Her tab kendi featured + article listesi (MATERIAL_FEATURED export)
- [x] Cross-referencing sistemi (COMPARISON_MAP 30+ makale, pill butonlar)
- [x] Arama: full-text + material filtre (AllArticles.jsx mevcut)

---

## ⚪ FAZ 3 — Platform Olgunlaşma
> Başlangıç: 2026-04-14 | Hedef: 180-200 makale, 55+ araç
> BÜYÜK ÖLÇÜDE TAMAMLANDI: 3.1 ✅, 3.2 büyük ölçüde, 3.3 kısmen, 3.4 ✅, 3.5 büyük ölçüde, 3.6 ✅

### 3.1 Platin & Paladyum Bölümü (10-12 makale)
- [x] Platin Nedir? (element, özellikler, nadirlık)
- [x] Paladyum Nedir? (PGM grubu, otomotiv, yatırım)
- [x] Platin vs Beyaz Altın vs Gümüş Karşılaştırması
- [x] Platin Nişan/Alyans Rehberi
- [x] Platin Yatırım Rehberi (ETF, fiziksel)
- [x] Platin Endüstriyel Kullanım (katalitik konvertör, hidrojen)
- [x] Paladyum Piyasa Analizi
- [x] PGM Bakım ve Temizlik
- [x] Rodyum — Görünmeyen Kahraman (kaplama metali)
- [x] Alternatif Metaller (titanyum, tungsten, kobalt — takıda)

### 3.2 Teknik İyileştirmeler
- [x] Code splitting: articleContent.js → metal bazlı chunk'lar (Faz 5'te tamamlandı)
- [ ] React Router: hash-based → proper routing (/gumus/925-ayar, /altin/karat)
- [x] Full-text arama (makale gövdesinde arama)
- [x] Otomatik TOC (Table of Contents) — h3'lerden (toggle açılır/kapanır)
- [x] Lazy loading images/SVG (img loading="lazy" enjeksiyonu)
- [x] Service Worker gerçek caching stratejisi (4 strateji: API/static/image/HTML)
- [x] Sitemap.xml otomatik güncelleme (144 makale slug'ı + hreflang)
- [x] Schema.org structured data (WebSite + CollectionPage JSON-LD)

### 3.3 SEO & Performans
- [x] Her makale için canonical URL (index.html'de)
- [x] Meta description otomatik (144 makale, platin dahil)
- [x] hreflang alternates (TR/EN/AR — index.html + sitemap)
- [x] Core Web Vitals optimizasyonu (critical CSS, DNS prefetch, font preload)
- [x] Lighthouse optimizasyonu (React.lazy below-fold, index 400KB→118KB, 11 lazy chunk)
- [x] robots.txt güncelleme

### 3.4 Cross-Referencing Sistemi
- [x] Makale içi "İlgili Makaleler" otomatik (aynı material + farklı cat)
- [x] Makale içi "Karşılaştır" linkleri (COMPARISON_MAP — 18 makale, pill butonlar)
- [x] Araç içi "İlgili Makale" bağlantıları (TOOL_ARTICLE_MAP — 30+ araç)
- [x] Taş profil sayfaları → ilgili takı rehberleri (beryl→zümrüt, korundum→yakut/safir)

### 3.5 Kullanıcı Deneyimi
- [x] Favoriler/Yer imleri (localStorage)
- [x] Okuma geçmişi ("Son okuduklarınız")
- [x] Karanlık/Aydınlık dışında "Otomatik" tema (dark→light→auto cycle)
- [x] Font boyutu ayarı (makale okuma — 13px-22px, kalıcı)
- [x] Makale oylama kalıcılığı (beğeni/beğenmeme localStorage)
- [ ] Feedback sistemi gerçek veri toplama (basit analytics)
- [ ] Newsletter kayıt formu (Mailchimp veya benzeri)

### 3.6 Sponsorluk Genişlemesi
- [x] Sponsor slot sistemi (bölüm bazlı — sponsors.js veri dosyası)
- [x] Gümüş bölümü → İstanbul Gümüş (aktif)
- [x] Altın bölümü → placeholder slot (inactive)
- [x] Pırlanta bölümü → placeholder slot (inactive)
- [x] Sponsor ürün mini galerisi (4 ürün kartı — İstanbul Gümüş)
- [x] Sponsorluk teklif modalı (erişim, slotlar, dahil özellikler, iletişim)

---

## 🚀 FAZ 4 — Ekosistem (Uzun Vade)
> Tahmini süre: 2-3 ay+ | Vizyon seviyesi
> BÜYÜK ÖLÇÜDE TAMAMLANDI ✅

### 4.1 AI Özellikleri
- [x] AI chatbot — takı danışmanı (Claude API, Tool #42, çok dilli)
- [x] Fotoğraftan taş tanımlama (Claude Vision API, Tool #43, kamera+galeri)
- [x] Makale özetleme / TL;DR (Claude API, Tool #44, makale seçici)

### 4.2 Topluluk
- [x] Yorum sistemi (localStorage tabanlı — isim, yorum, tarih)
- [x] Makale oylama (beğeni sistemi — localStorage kalıcı)
- [x] "En çok okunanlar" listesi (view tracking + MostRead section)
- [x] Kullanıcı katkısı — düzeltme önerisi (correction modal, localStorage)

### 4.3 Dizin & Harita
- [x] Kapalıçarşı Rehberi (makale #145)
- [x] Mısır Çarşısı ve Tarihi Çarşılar (makale #146)
- [x] Midyat Gümüş Çarşısı (makale #147)
- [x] Dünya Mücevher Pazarları (makale #148)
- [x] Kuyumcu Seçim Rehberi (makale #149)
- [x] Topkapı Sarayı Hazine Dairesi (makale #150)
- [x] Dünya Mücevher Müzeleri (makale #151)
- [x] İstanbul Mücevher & Sanat Müzeleri (makale #152)
- [x] carsi-rehber kategorisi (8 makale)
- [x] Türkiye Kuyumcu/Atölye Dizini (Leaflet harita) — Faz 5'te Tool #47

### 4.4 E-Ticaret Entegrasyonu
- [x] "Nerede alınır" bölümü (material bazlı çarşı yönlendirmesi)
- [x] Fiyat karşılaştırma widget'ı (Tool #45)
- [x] Affiliate link sistemi (UTM tracking, click analytics, SKU bazlı)

### 4.5 Mobil Uygulama / PWA
- [x] PWA install prompt (beforeinstallprompt → install banner)
- [ ] Push notification (fiyat alarm) — gelecek
- [ ] Offline makale okuma — gelecek

### 4.6 İçerik Genişleme
- [x] 20 makale (161-180) — 180 milestone!
  - Gümüş nanoteknoloji, dijital çağ, sofra koleksiyonu
  - Altın geri dönüşüm, dijital token, modern düğün
  - Pırlanta floresans, kesim trendleri, yatırım rehberi
  - Alexandrite, Spinel, Morganite, Paraíba Turmalin
  - Takı temizleme, depolama, hediye rehberi, erkek takı
  - Trabzon hasır bilezik, kuyumculuk mesleği, mücevher fotoğrafçılığı
- [x] YouTube embed CSS desteği (yt-embed class)
- [ ] Lottie animasyonlar — gelecek
- [ ] Podcast bölümleri — gelecek

---

## 📐 Teknik Mimari Notları

### Mevcut Stack
```
React 18 + Vite 5
Leaflet (harita)
CSS custom properties (tema)
GitHub Pages (deploy)
gold-api.com (fiyat)
open.er-api.com (kur)
```

### Planlanan Değişiklikler
```
+ React Router (hash-based → proper routes)
+ Dynamic import (code splitting)
+ articleContent lazy loading (chunk per material)
+ Schema.org JSON-LD
+ Service Worker (Workbox)
+ Analytics (basit, GDPR uyumlu)
```

### Veri Yapısı Evrimi
```javascript
// Mevcut article yapısı:
{ id, slug, cat, min, icon, isNew, tr, en, ar }

// Faz 1+ article yapısı:
{ id, slug, cat, material, min, icon, isNew, featured, tr, en, ar }
// material: 'silver' | 'gold' | 'diamond' | 'gemstone' | 'platinum' | 'shared'

// Mevcut kategori yapısı:
{ id, tr, en, ar, co }

// Faz 1+ kategori yapısı:
{ id, material, tr, en, ar, co, icon }
```

### API Endpointleri
```
Gümüş:   https://api.gold-api.com/price/XAG  ✅ aktif
Altın:    https://api.gold-api.com/price/XAU  ✅ aktif
Platin:   https://api.gold-api.com/price/XPT  ⏳ test edilecek
Paladyum: https://api.gold-api.com/price/XPD  ⏳ test edilecek
USD/TRY:  https://open.er-api.com/v6/latest/USD  ✅ aktif
EUR/TRY:  https://open.er-api.com/v6/latest/EUR  ⏳ eklenecek
```

---

## 🎨 Tasarım Sistemi Notları

### Renk Paleti (Material Bazlı Accent)
```
Gümüş:    #C0C0C0 (mevcut)
Altın:     #D4AF37 (mevcut — accent olarak)
Pırlanta:  #E8E8E8 / #B9F2FF (buz mavisi)
Yakut:     #E0115F
Zümrüt:    #50C878
Safir:     #0F52BA
Platin:    #E5E4E2
```

### Tipografi (Değişmez)
```
Başlık: Playfair Display
Gövde:  Source Sans 3
Mono:   JetBrains Mono
Arapça: Noto Naskh Arabic
```

---

## 📋 Her Oturum Başlangıç Checklist

Her yeni Claude oturumunda:
1. [ ] Bu dosyayı oku (`PLAN.md`)
2. [ ] Son commit'i kontrol et (`git log --oneline -5`)
3. [ ] Mevcut faz ve sıradaki görevleri belirle
4. [ ] Yapılan işleri ✅ olarak işaretle
5. [ ] Oturum sonunda PLAN.md'yi güncelle ve commit et

---

## 📝 Değişiklik Günlüğü

### 2026-04-13 — v1.0 (İlk oluşturma)
- Master plan oluşturuldu
- Faz 0 tamamlandı olarak işaretlendi
- Faz 1-4 detaylı görev listesi yazıldı
- Teknik mimari ve tasarım notları eklendi


### 2026-04-13 — v1.1 (Faz 1 Oturumu)
- Faz 1.1 TAMAMLANDI: articles.js'e material alanı, categories.js'e 4 altın kategorisi, MATERIALS export, material tab bar UI
- Faz 1.2 TAMAMLANDI: 7 temel altın makalesi (74-80) — 3 dilde tam içerik
- Faz 1.3 TAMAMLANDI: 5 yatırım makalesi (81-85) — 3 dilde tam içerik
- Faz 1.4 TAMAMLANDI: 6 kültür & takı makalesi (86-91) — 3 dilde tam içerik
- Faz 1.8 KISMI: Material tab bar ve kategori badge eklendi
- Toplam: 73 → 91 makale, 10 → 14 kategori
- UI: AllArticles material tab bar, Categories material badge, FeaturedArticles material filter
- Hero ve translations güncellendi (91 makale, Silver & Gold)

### 2026-04-13 — v1.2 (Faz 1 Devamı)
- Faz 1.5 TAMAMLANDI: 5 araç altın desteğiyle güncellendi (PurityCalc, MeltValue, ZakatCalc, StampID, MetalComparator)
- Faz 1.6 TAMAMLANDI: 3 yeni altın aracı (GoldKaratCalc, WeddingGoldPlanner, MetalDashboard)
- Faz 1.7 BÜYÜK ÖLÇÜDE TAMAMLANDI: XPT/XPD ticker, Hero Ag/Au toggle, useSilverPrice güncellendi
- Toplam: 91 makale, 36 araç, 14 kategori, 4 canlı metal fiyatı

### 2026-04-13 — v1.3 (Faz 1 Tamamlandı)
- Faz 1.3 son makale: 2026 Altın Piyasa Özeti (id:92)
- Faz 1.4 son makaleler: Hint Altın Kültürü (id:93), İtalyan vs Türk İşçiliği (id:94)
- Faz 1.7 son: Calculator'a canlı altın ayar fiyat tablosu (24K→8K × ₺/g ve $/g)
- Faz 1.8 tamamlandı: Gold accent CSS, Nav Ag/Au logo, Calculator metal toggle
- FAZ 1 TAMAMLANDI: 94 makale · 36 araç · 14 kategori · 4 canlı metal · 3 dil
### Sonraki güncelleme: Faz 2 başlangıcı

### 2026-04-14 — v2.0 (Faz 2 Oturumu)
- Faz 2.1 TAMAMLANDI: 15 pırlanta makalesi (id:95-109) — 4C serisi, kesim profilleri, sertifika, bilim, kültür
- Faz 2.2 TAMAMLANDI: 25 renkli taş makalesi (id:110-134) — Big 3, yarı değerli, organik, Türkiye özel, rehber
- Faz 2.3 KISMI: 4 yeni araç eklendi (DiamondEstimator, MohsScale, BirthstoneFinder, GemIdentifier)
- Faz 2.5 KISMI: Material tabs genişletildi (5'li: Gümüş|Altın|Pırlanta|Taşlar|Tümü), chip ve glow stili eklendi
- Kategori: 14 → 25 (+5 pırlanta, +5 taş kategorisi)
- Makale: 94 → 134 (+15 pırlanta, +25 taş)
- Araç: 36 → 40 (+4 pırlanta/taş)
- CSS: --diamond, --gemstone renk değişkenleri, glow efektleri
- MATERIALS export: 3→5 (diamond, gemstone eklendi)
- FEATURED_IDS güncellendi (pırlanta ve taş makaleleri dahil)
- FAZ 2 BÜYÜK ÖLÇÜDE TAMAMLANDI
- Kalan: 2.3 eksik araçlar (Kesim Karşılaştırıcı, Karat→mm), 2.4 marka dönüşümü (logo, domain)

### 2026-04-14 — v3.0 (Faz 3 Başlangıç)
- Faz 2.3 TAMAMLANDI: Kesim Karşılaştırıcı (#40) ve Karat→mm (#41) araçları zaten mevcuttu, doğrulandı
- Faz 3.1 TAMAMLANDI: 10 Platin/Paladyum makalesi (id:135-144) — 3 dilde tam içerik
- 3 yeni kategori: platin-temel, platin-yatirim, platin-taki
- MATERIALS export: 5→6 (platinum eklendi)
- CSS: --platinum renk değişkenleri, glow, material-tab, chip stili
- Material tab bar artık 6'lı: Tümü|Gümüş|Altın|Pırlanta|Taşlar|Platin
- Faz 3.2 KISMI: Full-text arama (makale gövdesinde arama — stripHtml + getArticleContent)
- Faz 3.4 KISMI: Cross-referencing zaten mevcut (sameCat + sameMat + cross-material)
- Faz 3.5 KISMI: Favoriler (localStorage), Okuma geçmişi, Font boyutu ayarı
- Yeni bileşen: ReadingHistory.jsx (Son Okuduklarınız + Favorileriniz sekmeli yatay scroll)
- ArticleDetail: ❤️ favori toggle butonu, A-/A+ font boyutu kontrolleri
- Makale: 134 → 144 (+10 platin/paladyum)
- Kategori: 25 → 28 (+3 platin kategorisi)
- FEATURED_IDS güncellendi (platin makalesi dahil)
- FAZ 3 KISMI TAMAMLANDI

### 2026-04-14 — v3.1 (Faz 3 Devamı)
- Faz 3.2: Otomatik TOC (h3'lerden toggle açılır/kapanır İçindekiler, anchor scroll)
- Faz 3.2: Schema.org JSON-LD (WebSite + CollectionPage) — Platin dahil
- Faz 3.2: Service Worker tamamen yenilendi (4 strateji: API network-first 3s timeout, static stale-while-revalidate, image cache-first, HTML network-first)
- Faz 3.2: Sitemap.xml otomatik güncellendi (144 makale slug + hreflang xhtml:link)
- Faz 3.2: Lazy loading img tags (loading="lazy" enjeksiyonu)
- Faz 3.3: hreflang alternates (TR/EN/AR) — index.html + sitemap
- Faz 3.3: Meta description güncellendi (platin, 144 makale)
- Faz 3.3: robots.txt doğrulandı
- Faz 3.4: Araç → Makale cross-reference sistemi (TOOL_ARTICLE_MAP — 30+ araç → ilgili makaleler)
- Faz 3.5: Otomatik tema (dark → light → auto cycle, matchMedia dinleyici)
- Faz 3.6: Sponsor slot sistemi (sponsors.js — material bazlı sponsor atama, aktif/inaktif)
- Faz 3.6: İstanbul Gümüş (silver aktif), Gold ve Diamond placeholder slotlar
- manifest.json güncellendi (144 makale, platin)
- OG/Twitter meta description güncellendi
- FAZ 3 BÜYÜK ÖLÇÜDE TAMAMLANDI
- Kalan: Code splitting, React Router, Core Web Vitals, Lighthouse, newsletter, analytics, sponsor galeri/teklif sayfası

### 2026-04-14 — v3.5 (Faz 3 Tamamlama + Faz 4 Başlangıç)
- Faz 3.4 TAMAMLANDI: Makale içi "Karşılaştır" cross-linkleri (COMPARISON_MAP — 18 makale, pill buton UI)
- Faz 3.5: Makale oylama kalıcılığı (rateArticle/getArticleRating — localStorage)
- Faz 3.5: Makale görüntüleme sayacı (trackView/getViewCounts — localStorage)
- Faz 3.6 TAMAMLANDI: Sponsor ürün mini galerisi (İstanbul Gümüş — 4 ürün kartı)
- Faz 3.6 TAMAMLANDI: Sponsorluk teklif modalı (SponsorProposal — 4 slot, erişim, özellikler, e-posta)
- Faz 4.1: AI Takı Danışmanı chatbot (Tool #42 — Claude API, çok dilli, öneri butonları)
- Faz 4.2: "En Çok Okunanlar" bölümü (MostRead.jsx — view count bazlı top 8, horizontal scroll)
- Faz 4.3 KISMI: Çarşı & Kuyumcu Rehberi — 5 yeni makale (id:145-149)
  - Kapalıçarşı Rehberi, Mısır Çarşısı & Tarihi Çarşılar, Midyat Gümüş Çarşısı
  - Dünya Mücevher Pazarları (Antwerp/Jaipur/Bangkok/47th St/Pforzheim)
  - Kuyumcu Seçim Rehberi (güvenilirlik kriterleri, kırmızı bayraklar, online)
- Yeni kategori: carsi-rehber (Çarşı & Kuyumcu Rehberi — material: shared)
- Makale: 144 → 149 (+5 çarşı rehberi)
- Araç: 42 → 43 (+1 AI Danışman)
- Kategori: 28 → 29 (+1 çarşı rehberi)
- Versiyon: v2.0 → v3.5
- Tüm meta/OG/sitemap/manifest/Schema.org güncellemeleri (149 makale, 43 araç)
- FEATURED_IDS güncellendi (Kapalıçarşı dahil)
- Kalan: Code splitting, React Router, Core Web Vitals, Lighthouse, newsletter, analytics, kamera taş tanımlama, dizin haritası

### 2026-04-14 — v4.0 (Faz 4 Devam)
- Faz 4.1: Fotoğraftan Taş/Metal Tanımlama (Tool #43 — Claude Vision API, kamera+galeri, çok dilli analiz)
- Faz 4.1: Makale Özetleyici / TL;DR (Tool #44 — Claude API, makale seçici dropdown, bullet points)
- Faz 4.3: Müze Rehberi — 3 yeni makale (id:150-152)
  - Topkapı Sarayı Hazine Dairesi (Kaşıkçı Elması, Topkapı Hançeri)
  - Dünya Mücevher Müzeleri (V&A, Smithsonian, Tower, Louvre, Tahran)
  - İstanbul Mücevher & Sanat Müzeleri (Arkeoloji, Türk-İslam, Pera, Sadberk Hanım)
- Faz 4.4: "Nerede Alınır" bölümü (ArticleDetail — material bazlı WHERE_TO_BUY haritası)
- Faz 4.2: Kullanıcı düzeltme önerisi sistemi (correction modal, localStorage depolama)
- Makale: 149 → 152 (+3 müze rehberi)
- Araç: 43 → 45 (+2 AI araç: fotoğraf tanımlama, makale özetleyici)
- carsi-rehber kategorisi: 5 → 8 makale
- QUICK_TOOL_INDICES güncellendi (Photo ID eklendi)
- Tüm meta/OG/sitemap/manifest güncellemeleri (152 makale, 45 araç)
- Versiyon: v3.5 → v4.0

### 2026-04-14 — v4.1 (Faz 4 Genişleme)
- Faz 4.4: Fiyat Karşılaştırma Widget (Tool #45 — canlı spot, 4 metal × ayarlar, TRY/USD toggle)
- Faz 4.6: 8 yeni makale (id:153-160) — içerik genişleme milestone: 160 makale
  - Vintage & Antika Mücevher Rehberi (dönem tanıma, orijinallik, koleksiyon)
  - Etik Mücevher ve Kimberley Süreci (çatışma elması, fair trade, lab-grown)
  - 2026 Dünya Takı Trendleri (lab-grown %50+, renkli taş patlaması, minimalist altın)
  - Nişan Yüzüğü Kapsamlı Rehberi (metal, taş, bütçe, 4C öncelik)
  - Takı Sigortası Kapsamlı Rehberi (değerleme, poliçe, pratik ipuçları)
  - Altın vs Pırlanta vs Gayrimenkul Yatırım (getiri, risk, likidite karşılaştırma)
  - Telkâri Teknikleri Detaylı Rehber (5 aşama: tel çekme → parlatma)
  - Taş Kesim ve Parlatma Süreci (faceting, cabochon, modern teknikler)
- Makale: 152 → 160 (+8 içerik genişleme)
- Araç: 45 → 46 (+1 fiyat karşılaştırma widget)
- FEATURED_IDS güncellendi (nişan yüzüğü rehberi dahil)
- Tüm meta/OG/sitemap/manifest güncellemeleri (160 makale, 46 araç)
- Versiyon: v4.0 → v4.1

### 2026-04-15 — v4.5 (Faz 4 Bitirme — 180 Makale Milestone!)
- Faz 4.2: Yorum sistemi (localStorage — isim, yorum, tarih, accordion toggle)
- Faz 4.4: Affiliate link sistemi (UTM tracking, getAffiliateUrl, trackAffiliateClick, SKU bazlı)
- Faz 4.5: PWA install prompt (beforeinstallprompt → install banner, dismiss)
- Faz 4.6: YouTube embed CSS desteği (.yt-embed responsive container)
- Faz 4.6: 20 yeni makale (id:161-180) — 180 MAKALE MİLESTONE!
  - Gümüş: Nanoteknoloji (#161), Sofra Koleksiyonu (#162), Dijital Çağ (#163)
  - Altın: Geri Dönüşüm (#164), Dijital Token (#165), Modern Düğün (#166)
  - Pırlanta: Floresans (#167), Kesim Trendleri (#168), Yatırım Rehberi (#177)
  - Taşlar: Alexandrite (#169), Spinel (#170), Morganite (#171), Paraíba Turmalin (#172)
  - Rehber: Temizleme (#173), Depolama (#174), Hediye (#175), Fotoğrafçılık (#180)
  - Stil: Erkek Takı 2026 (#176)
  - Zanaat: Trabzon Hasır Bilezik (#178)
  - Kariyer: Kuyumculuk Mesleği (#179)
- Makale: 160 → 180 (+20)
- Araç: 46 (değişmedi)
- Tüm meta/OG/sitemap/manifest güncellemeleri (180 makale)
- Versiyon: v4.1 → v4.5
- FAZ 4 BÜYÜK ÖLÇÜDE TAMAMLANDI

### 2026-04-15 — v5.0 (Faz 5 — 200 Makale Milestone!)
- **CODE SPLITTING TAMAMLANDI**: articleContent.js (1.6MB) → 6 lazy-loaded chunk
  - content_silver.js (1.3MB), content_gold.js (111KB), content_shared.js (127KB)
  - content_gemstone.js (59KB), content_diamond.js (48KB), content_platinum.js (47KB)
  - articleContent.js artık 2.8KB'lık lazy-loading wrapper
  - ArticleDetail.jsx async content loading (loadArticleContent + useEffect)
  - Vite build: 12 chunk output, her material ayrı dosya
  - İlk yüklemede sadece ana bundle (~400KB) + gerekli chunk yüklenir
- **20 YENİ MAKALE (id:181-200) — 200 MAKALE MİLESTONE!**
  - Gümüş: Tespih Rehberi (#181), Parfüm Şişeleri (#182), Kemer Geleneği (#195), Sağlık Mitleri (#196)
  - Altın: Diş Hekimliği (#183), Olimpiyat Madalyası (#184), Çeyiz Planlama (#185), Uzay Teknolojisi (#197)
  - Pırlanta: Temizleme & Bakım (#186), Tektaş Ayar Türleri (#187)
  - Taşlar: Beryl Ailesi (#188), Korundum Ailesi (#189), Kuvars Ailesi (#190), Renk Değiştiren Taşlar (#198)
  - Platin: Metal Alerjisi (#191), Katalitik Konvertör (#192)
  - Shared: Değerleme Rehberi (#193), Online Alışveriş (#194), Miras & Hukuk (#199), Gelecek Vizyonu (#200)
- **KUYUMCU HARİTASI (Tool #47)**: Türkiye Kuyumcu & Atölye Dizini
  - Leaflet interaktif harita (dark theme, CartoDB tiles)
  - 18 kuyumcu/atölye/çarşı noktası (İstanbul, Trabzon, Midyat, Ankara, İzmir, Konya, Erzurum, Gaziantep...)
  - 4 tür filtresi (Çarşı, Zanaat, Üretim, Merkez) + 4 metal filtresi
  - Tıklanabilir marker detay kartı + liste görünümü
  - flyTo animasyonu ile harita navigasyonu
- Makale: 180 → 200 (+20)
- Araç: 46 → 47 (+1 Kuyumcu Haritası)
- Tüm meta/OG/sitemap/manifest/translations güncellemeleri (200 makale, 47 araç)
- FEATURED_IDS güncellendi (200. makale milestone + beryl/korundum aileleri)
- Versiyon: v4.5 → v5.0
- FAZ 5 TAMAMLANDI ✅

---

## 🚀 FAZ 5 — 200 Makale & Performans (TAMAMLANDI ✅)
> Başlangıç: 2026-04-15 | Sonuç: 200 makale, 47 araç

### 5.1 Code Splitting
- [x] articleContent.js → 6 material-bazlı lazy chunk
- [x] ArticleDetail async content loading (loadArticleContent)
- [x] Vite config güncelleme (manual chunks → dynamic import)
- [x] Backward-compatible getArticleContent (sync fallback)
- [x] preloadContent() utility (hover/intersection observer için)

### 5.2 İçerik Genişleme (181-200)
- [x] 4 gümüş makale (tespih, parfüm şişe, kemer, sağlık mitleri)
- [x] 4 altın makale (diş hekimliği, olimpiyat, çeyiz, uzay)
- [x] 2 pırlanta makale (temizleme, ayar türleri)
- [x] 4 taş makale (beryl, korundum, kuvars, renk değiştiren)
- [x] 2 platin makale (alerji, katalitik konvertör)
- [x] 4 shared makale (değerleme, online alışveriş, miras, vizyon)

### 5.3 Kuyumcu Haritası
- [x] Tool #47: Leaflet interaktif harita
- [x] 18 kuyumcu/atölye/çarşı noktası
- [x] Tür + metal filtre sistemi
- [x] Detay kartı + liste görünümü
- [x] TOOL_ARTICLE_MAP entegrasyonu

### 2026-04-15 — v5.1 (Kalan Öğeler Tamamlama)
- **MARKA DÖNÜŞÜMÜ**:
  - Favicon: Ag·Au → JP diamond motif (polygon + monogram)
  - Splash screen: JP monogram + diamond shape
  - OG image: 200 makale/47 araç, diamond motif, platin dahil
  - README.md oluşturuldu (kurulum, yapı, versiyon tarihi, tech stack)
- **PERFORMANS (Lighthouse)**:
  - React.lazy + Suspense: 11 below-fold bileşen lazy loaded
  - index.js: 400KB → 118KB (%70 küçülme!)
  - ToolModal: 168KB ayrı chunk (araç açınca yüklenir)
  - ArticleDetail: 22KB ayrı chunk (makale açınca yüklenir)
  - Critical inline CSS (FOUC önleme)
  - DNS prefetch: gold-api.com, er-api.com, cartocdn
- **TAB-SPECIFIC FEATURED**: MATERIAL_FEATURED export
  - Her material tab kendi curated makale listesi (10-13 makale/tab)
- **CROSS-REFERENCING GENİŞLEME**: COMPARISON_MAP → 30+ makale
  - Taş profil → mineral ailesi (beryl, korundum, kuvars)
  - Yeni Faz 5 makaleleri: çeyiz→düğün, temizleme↔bakım, pırlanta↔ayar
  - Nişan yüzüğü → ayar türleri + bakım
  - Renk değiştiren → alexandrite + zultanit
- **CWV**: DNS prefetch, critical inline CSS, font-display swap
- Kalan "[ ]" öğeler: Sadece harici eylem gerektirenler (alan adı, newsletter, analytics, push notification) ve gelecek vizyon (React Router, Lottie, podcast)
