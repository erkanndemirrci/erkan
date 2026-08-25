# İçerik Ekleme Kılavuzu

Bu site, tasarım/kod tarafına dokunmadan yeni içerik ekleyebilmen için "veri dosyası" mantığıyla kuruldu. Tüm blog yazıları, promptlar, dokümanlar, projeler ve galeri öğeleri `assets/data/` klasöründeki `.js` dosyalarında bir liste (dizi) olarak tutuluyor. Yeni bir içerik eklemek = o listeye yeni bir madde eklemek. Sayfa tasarımına, menüye veya başka hiçbir dosyaya dokunmana gerek yok.

Genel mantık her zaman aynı:

**Yeni İçerik → İçerik Türü → Dosya / Metin → Başlık → Kategori → Yayınla**

Aşağıda her içerik türü için adım adım anlatım var. Bir metin editörü (VS Code, Not Defteri, hatta tarayıcıdaki "Düzenle" özelliği) ile `.js` dosyalarını açıp düzenleyebilirsin.

---

## 1. Yeni Blog Yazısı Ekleme

Dosya: `assets/data/posts.js`

1. Dosyayı aç, `window.POSTS = [ ... ]` dizisinin en başına veya sonuna yeni bir `{ }` bloğu ekle (bir önceki maddeden sonra virgül koymayı unutma).
2. Aşağıdaki şablonu kopyala, doldur:

```js
{
  slug: "yazinin-url-uzantisi",              // örn: blog-yazisi.html?slug=yazinin-url-uzantisi
  title: "Yazının Başlığı",
  category: "Yapay Zekâ",                     // Yapay Zekâ, Yazılım, Robotik Kodlama, 3D Tasarım, Eğitim, İçerik Üretimi, Prompt Engineering, Teknoloji, Kişisel
  date: "2026-08-25",                          // YYYY-AA-GG
  readTime: "5 dk",
  cover: "assets/images/blog/kapak-gorseli.jpg", // boş bırakırsan otomatik gradient kapak gösterilir
  excerpt: "Kısa açıklama / özet cümlesi.",
  tags: ["Gemini", "AI"],
  content: `
    <p>İlk paragraf.</p>
    <h2>Alt başlık</h2>
    <p>Devamı...</p>
  `,
  seo: {
    title: "SEO Başlığı | Erkan Demirci",
    description: "Meta açıklama.",
    keywords: "anahtar, kelimeler",
    ogImage: ""
  }
}
```

3. Kapak görselin varsa `assets/images/blog/` klasörüne kopyala ve `cover` alanına yolunu yaz.
4. Dosyayı kaydet. `blog.html` sayfası ve ana sayfa "Son Blog Yazıları" bölümü otomatik güncellenir.

---

## 2. Yeni Prompt Ekleme

Dosya: `assets/data/prompts.js`

```js
{
  slug: "promptun-url-uzantisi",
  title: "Prompt Başlığı",
  ai: "Gemini",                 // Gemini, ChatGPT, Claude, Kling, ...
  category: "Görsel Üretim",    // bkz. dosya başındaki kategori listesi
  difficulty: "Orta",           // Kolay, Orta, Zor
  purpose: "Bu promptun amacı ne?",
  excerpt: "Kart üzerinde görünecek kısa açıklama.",
  promptText: `Buraya tam prompt metni gelecek.`,
  tags: ["Gemini", "Portre"],
  beforeImage: "",              // opsiyonel, önce/sonra görseli
  afterImage: ""
}
```

Kaydettiğinde `prompt-kutuphanesi.html` listesi ve kopyalama butonu otomatik çalışır.

---

## 3. Yeni Doküman (Word / PDF) Ekleme

1. Word veya PDF dosyanı `assets/documents/` klasörüne kopyala.
2. `assets/data/documents.js` dosyasını aç, yeni bir madde ekle:

```js
{
  slug: "dokumanin-url-uzantisi",
  title: "Doküman Başlığı",
  category: "Yapay Zekâ",
  date: "2026-08-25",
  fileType: "DOCX",              // DOCX veya PDF
  fileName: "dosya-adi.docx",
  fileUrl: "assets/documents/dosya-adi.docx",
  cover: "",
  description: "Doküman açıklaması.",
  tags: ["Gemini", "Rehber"]
}
```

3. Kaydet — `dokumanlar.html` sayfası "Görüntüle" ve "İndir" butonlarıyla otomatik listeler.

---

## 4. Yeni Proje Ekleme

Dosya: `assets/data/projects.js`

```js
{
  id: "proje-id",
  title: "Proje Adı",
  category: "AI",   // Yazılım, AI, Eğitim, Robotik, 3D
  description: "Kısa proje açıklaması.",
  tech: ["Python", "Gemini"],
  image: "assets/images/projects/proje-gorseli.jpg", // boşsa otomatik yer tutucu
  demoUrl: "https://...",
  githubUrl: "https://github.com/..."
}
```

---

## 5. Yeni AI Gallery Öğesi Ekleme

Dosya: `assets/data/gallery.js`

```js
{ id: "g10", title: "Görsel Başlığı", type: "Portre", tool: "Gemini", image: "assets/images/gallery/gorsel.jpg" }
```

`type` alanı: Görsel, Video, Reklam, Portre, Ürün, Sosyal Medya, Deneysel.

---

## 6. Site Geneli Ayarlar (istatistikler, sosyal medya, sloganlar)

Dosya: `assets/data/site-config.js`

Bu dosyadan şunları değiştirebilirsin:
- Hero başlığı ve alt metni (`heroTitle`, `heroSubtitle`)
- Hakkımda giriş metni (`aboutIntro`)
- İstatistik sayıları (`stats`)
- Sosyal medya linkleri (`socials`) — bir linki eklemek için `url` alanını doldurman yeterli, boş bırakırsan o link sitede görünmez
- Kullandığın AI araçları (`tools`)

---

## Notlar

- `// PLACEHOLDER` yorumu olan tüm alanlar örnek içeriktir — gerçek bilgilerinle değiştirmen önerilir.
- Görselleri eklerken dosya boyutunu küçük tutmaya dikkat et (ideal: 150–400 KB civarı, JPEG/WebP) — site hızını korur.
- Bu site düz HTML/CSS/JS ile hazırlandı; herhangi bir statik hosting (Netlify, Vercel, GitHub Pages, cPanel vb.) üzerinde doğrudan yayınlanabilir. Sunucu tarafı bir şey kurmana gerek yok.
- İçerik miktarı çok arttığında (yüzlerce yazı/prompt gibi) ileride gerçek bir CMS'e (örn. Headless CMS + veritabanı) geçiş yapılabilir; şu anki yapı bu geçişe kolayca uyarlanabilecek şekilde modüler tutuldu.
