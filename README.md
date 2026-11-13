# MotoRent

Antalya temalı, Angular ile geliştirilmiş motosiklet kiralama **arayüz demosu**.

## Özellikler
- Mobil ve masaüstüne uyumlu Türkçe arayüz
- Scooter, Naked ve Adventure kategori filtreleri
- Fiyata göre sıralama
- Tarih doğrulaması ve gün bazlı örnek ücret hesaplama
- Erişilebilir yerel dialog ile rezervasyon özeti; Escape ile kapatma
- Kişisel bilgi veya ödeme almayan demo plan akışı
- GitHub Actions ile GitHub Pages yayını

**Bu sürüm backend içermez.** Fiyatlar ve teknik veriler örnektir; müsaitlik kontrolü veya gerçek rezervasyon yapılmaz. Planlar kaydedilmez. Motor çizimleri özgün, temsili SVG illüstrasyonlarıdır; gerçek modelleri birebir temsil etmez. Google Fonts yüklenemediğinde sistem yazı tipi kullanılır.

## Yerelde çalıştırma
Node.js 22.12+ (22 LTS önerilir) ve npm gerekir.

```bash
cd frontend
npm ci
npm start
```
Tarayıcı: http://localhost:4200

## Üretim derlemesi
```bash
cd frontend
npm run build:pages
```
Çıktı: `frontend/dist/motorent/browser`. `/motorent/` taban yolu bu GitHub reposuna göre ayarlanmıştır. Başka repo adı kullanırsanız `package.json` içindeki `build:pages` komutunu güncelleyin.

## GitHub'a yükleme
ZIP içindeki dosyaları bilgisayarınızdaki klonlanmış `motorent` klasörüne kopyalayın. Kendi `.git` klasörünüzü koruyun. Sonra repo kökünde:

```bash
git add .
git commit -m "Build MotoRent Angular rental demo"
git branch -M main
git push -u origin main
```
Repo ayarlarında **Settings → Pages → Build and deployment → Source → GitHub Actions** seçin. Actions sekmesindeki `Deploy UI to GitHub Pages` işini kontrol edin. Gerekirse **Run workflow** ile başlatın.
Başarılı yayın sonrasında beklenen adres: https://enesbatuhanaydevelopment.github.io/motorent/
Bu adres kod hazırlanırken henüz yayımlanmamıştır.

## Proje yapısı
- `frontend/src/main.ts`: bağımsız Angular bileşenleri, örnek envanter ve etkileşimler
- `frontend/src/styles.css`: responsive tasarım
- `.github/workflows/deploy.yml`: otomatik yayın akışı

## Sonraki aşama
Spring Boot API, PostgreSQL, gerçek tarih müsaitliği, kullanıcı girişi ve rol tabanlı yönetim. Gerçek kiralama için sunucuda fiyat doğrulama, eşzamanlı rezervasyon kontrolü ve kalıcı kayıt gereklidir.
