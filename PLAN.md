# JewelPedi — Master Plan
### Silverpedi → Tam Kıymetli Metal & Taş Ansiklopedisi
> Son güncelleme: 2026-04-13 | Versiyon: 1.0
> Mevcut durum: **Faz 0 tamamlandı**, Faz 1 başlangıç aşamasında

---

## 📊 Genel Bakış

| Metrik | Mevcut | Faz 1 Hedef | Faz 2 Hedef | Final Hedef |
|--------|--------|-------------|-------------|-------------|
| Makale | 73 | 95-100 | 140-160 | 200+ |
| Araç | 33 | 38-40 | 48-50 | 55+ |
| Dil | 3 (TR/EN/AR) | 3 | 3 | 3+ |
| Metal/Taş Sütunu | 1 (gümüş) | 2 (+ altın) | 4 (+ pırlanta, taşlar) | 6 |
| Kategori | 10 | 14-16 | 20-22 | 24+ |
| Sponsor | 1 (İstanbul Gümüş) | 1 | 1-2 | 2-3 |
| Alan Adı | istanbul.silver | istanbul.silver | jewelpedi.com | jewelpedi.com |

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
> Tahmini süre: 2-3 hafta | Hedef: 95-100 makale, 38-40 araç

### 1.1 Veri Yapısı Güncelleme
- [ ] `articles.js`'e `material` alanı ekle (`silver`, `gold`, `shared`)
- [ ] `categories.js`'e altın kategorileri ekle:
  - [ ] `altin-temel` — Altın Temelleri
  - [ ] `altin-yatirim` — Altın Yatırım
  - [ ] `altin-taki` — Altın Takı
  - [ ] `altin-kultur` — Altın Kültür
- [ ] Filtreleme sistemini güncelle (material tab + kategori chip)
- [ ] Ana sayfa bölüm seçici (Gümüş | Altın | Tümü)

### 1.2 Altın Makaleleri — Temel (8-10 makale)
- [ ] Altın Nedir? (element, fiziksel/kimyasal özellikler, Au 79)
- [ ] Karat Sistemi (8K, 10K, 14K, 18K, 22K, 24K — alaşım oranları)
- [ ] Altın Renk Varyasyonları (sarı, beyaz, rose, yeşil, siyah)
- [ ] Altın Ayar Damgası Rehberi (Türkiye + uluslararası)
- [ ] Altın vs Gümüş Karşılaştırması (cross-reference mevcut makale #3)
- [ ] Altın Alaşımları ve Metalürjisi
- [ ] Beyaz Altın ve Rodyum Kaplama
- [ ] 585, 750, 916 — Ayar Numaraları Ne Anlama Gelir?

### 1.3 Altın Makaleleri — Yatırım (5-6 makale)
- [ ] Altın Yatırım Rehberi (fiziksel, ETF, BIST, dijital)
- [ ] Çeyrek/Yarım/Tam Altın — Cumhuriyet Altını Rehberi
- [ ] Gram Altın Yatırımı (bankalar, dijital platformlar)
- [ ] Altın ETF ve Borsa Yatırım Fonları
- [ ] Merkez Bankası Altın Rezervleri ve Küresel Trend
- [ ] 2026 Altın Piyasa Özeti (canlı verilerle)

### 1.4 Altın Makaleleri — Kültür & Takı (6-8 makale)
- [ ] Altın Düğün Geleneği (Türkiye, Hindistan, Körfez)
- [ ] Osmanlı Altınları ve Sikke Tarihi
- [ ] İslam'da Altın (fıkıh, zekât, erkeklere haram meselesi)
- [ ] Hint Alt Kıtası Altın Kültürü
- [ ] Altın Takı Seçim Rehberi (günlük, özel gün, yatırım)
- [ ] Altın Kaplama vs Masif (Gold-filled, vermeil, plated farkları)
- [ ] İtalyan vs Türk Altın İşçiliği
- [ ] Altın Bakım ve Temizlik Rehberi

### 1.5 Mevcut Araçları Altın Desteğiyle Güncelle
- [ ] Saflık Hesaplayıcı → 14K/18K/22K/24K ayar eklentisi
- [ ] Erime Değeri → altın seçeneği (canlı XAU fiyatıyla)
- [ ] Metal Karşılaştırıcı → altın parametreleri
- [ ] Zekât Hesaplayıcı → altın nisabı (farklı gram eşiği)
- [ ] Damga Tanımlayıcı → altın damgaları (585, 750, 916)

### 1.6 Yeni Altın Araçları
- [ ] Altın Karat Hesaplayıcı (karat → saflık yüzdesi → değer)
- [ ] Düğün Altını Bütçe Planlayıcı (davetli × gelenek → tahmini maliyet)
- [ ] Altın/Gümüş/Platin Karşılaştırma Dashboard (canlı fiyat)

### 1.7 Ticker & Fiyat Güncellemeleri
- [ ] Ticker'a XPT (platin) ve XPD (paladyum) ekle
- [ ] Hero'da altın fiyatı da göster (toggle: Ag/Au)
- [ ] Altın ayar bazlı gram fiyat tablosu (14K, 18K, 22K × canlı)

### 1.8 UI/UX Değişiklikleri
- [ ] Ana sayfa üst kısma material tab bar (🥈 Gümüş | 🥇 Altın | 📚 Tümü)
- [ ] Kategori kartlarına material badge
- [ ] Renk paleti genişlemesi (altın bölümünde gold accent daha baskın)
- [ ] Navigation güncelleme (yeni bölümler)

---

## 💎 FAZ 2 — Pırlanta & Renkli Taşlar
> Tahmini süre: 3-4 hafta | Hedef: 140-160 makale, 48-50 araç

### 2.1 Pırlanta/Elmas Makaleleri (15-18 makale)

#### 4C Eğitimi (her biri derinlikli ayrı makale)
- [ ] Cut (Kesim) — Ideal, Excellent, Very Good, Good, Fair, Poor
- [ ] Clarity (Berraklık) — FL, IF, VVS1-2, VS1-2, SI1-2, I1-3
- [ ] Color (Renk) — D-Z skalası, fancy color
- [ ] Carat (Karat) — ağırlık-boyut ilişkisi, fiyat eşikleri

#### Kesim Profilleri
- [ ] Round Brilliant — dünyanın en popüler kesimi
- [ ] Princess, Emerald, Oval, Cushion — her biri kısa profil
- [ ] Pear, Marquise, Heart, Asscher, Radiant — her biri kısa profil
- [ ] Fancy Kesimler Karşılaştırması (tek sayfa)

#### Sertifika & Değerleme
- [ ] GIA Raporu Nasıl Okunur?
- [ ] GIA vs AGS vs IGI vs HRD — Sertifika Karşılaştırması
- [ ] Pırlanta Fiyatını Etkileyen Faktörler

#### Bilim & Teknoloji
- [ ] Elmas Nedir? (karbon kristal, Mohs 10, oluşum)
- [ ] Lab-Grown vs Doğal Pırlanta (CVD, HPHT, etik, fiyat)
- [ ] Pırlanta vs Zirkon vs Moissanite — Ayırt Etme Rehberi

#### Kültür & Tarih
- [ ] Tektaş Geleneğinin Tarihi (De Beers, "A Diamond is Forever")
- [ ] Dünyanın Ünlü Pırlantaları (Hope, Koh-i-Noor, Cullinan)

### 2.2 Renkli Taş Makaleleri (20-25 makale)

#### Big 3 — Değerli Taşlar (her biri 2-3 makale derinliğinde)
- [ ] Zümrüt (Beryl) — oluşum, renk, Kolombiya vs Zambiya, bakım
- [ ] Yakut (Korundum) — "taşların kralı", Burma vs Mozambik, ısıl işlem
- [ ] Safir (Korundum) — mavi + fancy renk safirler, Kaşmir, sertifika

#### Popüler Yarı Değerli Taşlar
- [ ] Ametist — mor kuvars, tarih, bakım
- [ ] Topaz — renk çeşitliliği, imperial topaz
- [ ] Akvamarin — beryl ailesi, deniz mavi
- [ ] Opal — ateş oyunu, Avustralya vs Etiyopya
- [ ] Turkuaz — en eski süs taşı, İran vs Arizona
- [ ] Peridot — volkanik köken, yeşil parıltı
- [ ] Garnet — 6 türü, renk skalası
- [ ] Sitrin — güneş taşı, ametist bağlantısı
- [ ] Ay Taşı (Moonstone) — adularescence efekti
- [ ] Lapis Lazuli — Antik Mısır'ın mavisi
- [ ] Tanzanit — tek kaynak, nadir

#### Organik Taşlar
- [ ] İnci Rehberi (tatlı su vs deniz, Akoya vs Tahiti vs South Sea)
- [ ] Kehribar — fosilleşmiş reçine, Baltık vs Dominik
- [ ] Mercan — kırmızı/pembe, koruma endişeleri

#### Türkiye Özel
- [ ] Oltu Taşı (Erzurum) — tarihi, işçiliği, kullanımı
- [ ] Zultanit / Diaspor (Muğla) — renk değiştiren Türk taşı
- [ ] Türkiye Yarı Değerli Taş Haritası (interaktif — Leaflet entegre)
- [ ] Eskişehir Lületaşı — beyaz altın taş

#### Eğitim & Rehber
- [ ] Mohs Sertlik Skalası (interaktif)
- [ ] Taş Tedavileri (ısıtma, yağlama, ışınlama — ne anlama gelir?)
- [ ] Sentetik vs Doğal vs İmitasyon — Nasıl Ayırt Edilir?
- [ ] Burç Taşları — 12 Ay, 12 Taş (her ay kısa profil)
- [ ] Doğum Taşları Rehberi (Batı + Türk geleneği)

### 2.3 Yeni Taş/Pırlanta Araçları
- [ ] 4C Pırlanta Değer Tahmini (kesim+renk+berraklık+karat → fiyat aralığı)
- [ ] Taş Tanımlayıcı (renk + sertlik + parlaklık → en olası taş)
- [ ] Kesim Karşılaştırıcı (round vs princess vs emerald → görsel)
- [ ] Karat → mm Dönüştürücü (her kesim için farklı)
- [ ] Mohs Sertlik Karşılaştırıcı (interaktif skala)
- [ ] Burç Taşı Bulucu (doğum tarihi → taş önerisi)

### 2.4 Marka Dönüşümü
- [ ] Alan adı karar ver (jewelpedi.com / takipedi.com / mucevherpedi.com)
- [ ] Alan adı satın al
- [ ] Logo yenileme (Ag → çoklu element/taş motifi)
- [ ] Splash screen güncelleme
- [ ] OG image ve meta tag güncelleme
- [ ] Silverpedi → JewelPedi redirect (eski URL'ler kırılmasın)
- [ ] README ve GitHub repo adı güncelleme

### 2.5 Navigasyon Yeniden Yapılandırma
- [ ] Üst seviye material tabs: Gümüş | Altın | Pırlanta | Taşlar | Tümü
- [ ] Her tab kendi featured + article listesi
- [ ] Cross-referencing sistemi (makale içi "İlgili: Altın bakım rehberi")
- [ ] Arama: full-text + material filtre

---

## ⚪ FAZ 3 — Platform Olgunlaşma
> Tahmini süre: 4-6 hafta | Hedef: 180-200 makale, 55+ araç

### 3.1 Platin & Paladyum Bölümü (10-12 makale)
- [ ] Platin Nedir? (element, özellikler, nadirlık)
- [ ] Paladyum Nedir? (PGM grubu, otomotiv, yatırım)
- [ ] Platin vs Beyaz Altın vs Gümüş Karşılaştırması
- [ ] Platin Nişan/Alyans Rehberi
- [ ] Platin Yatırım Rehberi (ETF, fiziksel)
- [ ] Platin Endüstriyel Kullanım (katalitik konvertör, hidrojen)
- [ ] Paladyum Piyasa Analizi
- [ ] PGM Bakım ve Temizlik
- [ ] Rodyum — Görünmeyen Kahraman (kaplama metali)
- [ ] Alternatif Metaller (titanyum, tungsten, kobalt — takıda)

### 3.2 Teknik İyileştirmeler
- [ ] Code splitting: articleContent.js → metal bazlı chunk'lar
- [ ] React Router: hash-based → proper routing (/gumus/925-ayar, /altin/karat)
- [ ] Full-text arama (makale gövdesinde arama)
- [ ] Otomatik TOC (Table of Contents) — h3'lerden
- [ ] Lazy loading images/SVG
- [ ] Service Worker gerçek caching stratejisi
- [ ] Sitemap.xml otomatik güncelleme
- [ ] Schema.org structured data (Article, FAQPage, HowTo)

### 3.3 SEO & Performans
- [ ] Her makale için canonical URL
- [ ] Meta description otomatik (makale açıklamasından)
- [ ] hreflang alternates (TR/EN/AR)
- [ ] Core Web Vitals optimizasyonu
- [ ] Lighthouse 90+ score hedefi
- [ ] robots.txt güncelleme

### 3.4 Cross-Referencing Sistemi
- [ ] Makale içi "İlgili Makaleler" otomatik (aynı material + farklı cat)
- [ ] Makale içi "Karşılaştır" linkleri (örn: gümüş→altın)
- [ ] Araç içi "İlgili Makale" bağlantıları
- [ ] Taş profil sayfaları → ilgili takı rehberleri

### 3.5 Kullanıcı Deneyimi
- [ ] Favoriler/Yer imleri (localStorage)
- [ ] Okuma geçmişi ("Son okuduklarınız")
- [ ] Karanlık/Aydınlık dışında "Otomatik" tema
- [ ] Font boyutu ayarı (makale okuma)
- [ ] Feedback sistemi gerçek veri toplama (basit analytics)
- [ ] Newsletter kayıt formu (Mailchimp veya benzeri)

### 3.6 Sponsorluk Genişlemesi
- [ ] Sponsor slot sistemi (bölüm bazlı)
- [ ] Gümüş bölümü → İstanbul Gümüş (mevcut)
- [ ] Altın bölümü → potansiyel sarraf/kuyumcu sponsor
- [ ] Pırlanta bölümü → potansiyel mücevherci sponsor
- [ ] Sponsor ürün mini galerisi (3-5 ürün kartı)
- [ ] Sponsorluk teklif sayfası (/sponsor)

---

## 🚀 FAZ 4 — Ekosistem (Uzun Vade)
> Tahmini süre: 2-3 ay+ | Vizyon seviyesi

### 4.1 AI Özellikleri
- [ ] Fotoğraftan taş tanımlama (Claude API veya TensorFlow.js)
- [ ] "Bu taşı tanı" kamera aracı
- [ ] AI chatbot — takı danışmanı
- [ ] Makale özetleme / TL;DR

### 4.2 Topluluk
- [ ] Yorum sistemi (Disqus veya custom)
- [ ] Makale oylama (beğeni sistemi — Firebase)
- [ ] "En çok okunanlar" listesi
- [ ] Kullanıcı katkısı (düzeltme önerisi)

### 4.3 Dizin & Harita
- [ ] Türkiye Kuyumcu/Atölye Dizini (Leaflet harita)
- [ ] Çarşı rehberi (Kapalıçarşı, Midyat, Trabzon)
- [ ] Uluslararası taş pazarları (Jaipur, Bangkok, Antwerp)
- [ ] Müze rehberi (Topkapı, V&A, Smithsonian)

### 4.4 E-Ticaret Entegrasyonu
- [ ] Affiliate link sistemi (sponsor ürünlere yönlendirme)
- [ ] Fiyat karşılaştırma widget'ı
- [ ] "Nerede alınır" bölümü (makale sonlarında)

### 4.5 Mobil Uygulama
- [ ] React Native veya PWA-to-native (Capacitor)
- [ ] Push notification (fiyat alarm)
- [ ] Offline makale okuma
- [ ] Kamera entegrasyonu (taş tanımlama)

### 4.6 İçerik Genişleme (Ek)
- [ ] Video içerik (YouTube embed — zanaat süreçleri)
- [ ] Lottie animasyonlar (üretim süreci, maden çıkarma)
- [ ] Podcast bölümleri (uzman röportajları)
- [ ] Infografik serisi (Pinterest/Instagram paylaşılabilir)

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

### Sonraki güncelleme: Faz 1.1 başlangıcında
