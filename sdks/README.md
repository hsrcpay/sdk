# HSRCPAY SDK Dizinleri

Bu klasör, HSRCPAY ekosistemindeki dil bazlı SDK paketlerini tek merkezden yönetmek için tasarlanmıştır.

## Kapsam

- `node/`: JavaScript/TypeScript ekosistemi için resmi SDK paketi (`@hsrcpay/sdk`)
- `go/`: Go tabanlı servisler ve backend uygulamaları için SDK alanı
- `rust/`: Rust tabanlı yüksek performanslı sistemler için SDK alanı
- `java/`: JVM tabanlı kurumsal uygulamalar için SDK alanı
- `kotlin/`: Kotlin tabanlı backend ve multiplatform senaryoları için SDK alanı

## Mimari Yaklaşım

- Monorepo düzeni ile ortak standartlar tek noktadan yönetilir.
- Her SDK dizini ileride bağımsız repoya (polyrepo) taşınabilecek şekilde yapılandırılır.
- Ortak sözleşmeler ve referanslar `shared/` altında korunur.

## Lisans

Tüm SDK dizinleri kök seviyedeki `LICENSE` dosyasına tabidir.
