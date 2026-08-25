/**
 * BLOG YAZILARI
 * ---------------------------------------------------------------------
 * Yeni bir blog yazısı eklemek için aşağıdaki diziye yeni bir nesne ekle.
 * "slug" alanı URL'de kullanılır (örn. blog-yazisi.html?slug=senin-slug).
 * content alanına HTML yazabilirsin (başlık için <h2>, <h3>, paragraf
 * için <p>, liste için <ul><li> kullan).
 *
 * Bu dosyadaki tüm yazılar ÖRNEK / PLACEHOLDER içeriktir — gerçek
 * yazılarınla değiştirene kadar site bu örnekleri gösterir.
 */
window.POSTS = [
  {
    slug: "gemini-ile-profesyonel-gorsel-uretimi",
    title: "Gemini ile Profesyonel Görsel Üretimi: Başlangıç Rehberi", // PLACEHOLDER
    category: "Yapay Zekâ",
    date: "2026-08-20",
    readTime: "6 dk",
    cover: "",
    excerpt: "Gemini kullanarak sosyal medya ve kişisel marka için yüksek kaliteli, tutarlı görseller üretmenin temel prensiplerini paylaşıyorum.", // PLACEHOLDER
    tags: ["Gemini", "AI", "GörselÜretim", "Prompt"],
    content: `
      <p>Yapay zekâ ile görsel üretimi artık sadece bir merak konusu değil, içerik üretim sürecinin ayrılmaz bir parçası haline geldi. Bu yazıda Gemini ile çalışırken kullandığım temel yaklaşımları paylaşıyorum.</p>
      <h2>Neden Gemini?</h2>
      <p>Gemini, özellikle metin-görsel tutarlılığı ve talimatlara sadık kalma konusunda pratikte işime yarayan bir araç. Doğru promptla birleştiğinde tekrarlanabilir, marka diline uygun sonuçlar almak mümkün.</p>
      <h2>Prompt Yazarken Dikkat Ettiklerim</h2>
      <ul>
        <li>Işık ve atmosferi net tanımlamak</li>
        <li>Kompozisyonu (yakın çekim, orta plan, geniş açı) belirtmek</li>
        <li>Marka renk paletini prompt içine dahil etmek</li>
        <li>İstenmeyen unsurları açıkça hariç tutmak</li>
      </ul>
      <h2>Sonuç</h2>
      <p>Bu yöntemleri prompt kütüphanesi bölümünde paylaştığım hazır promptlarla birlikte deneyebilirsin.</p>
    `,
    seo: {
      title: "Gemini ile Profesyonel Görsel Üretimi | Erkan Demirci",
      description: "Gemini kullanarak sosyal medya ve kişisel marka için yüksek kaliteli görseller üretme rehberi.",
      keywords: "Gemini, AI görsel üretimi, prompt engineering",
      ogImage: ""
    }
  },
  {
    slug: "robotik-kodlamaya-nereden-baslamali",
    title: "Robotik Kodlamaya Nereden Başlamalı?", // PLACEHOLDER
    category: "Robotik Kodlama",
    date: "2026-08-12",
    readTime: "5 dk",
    cover: "",
    excerpt: "Robotik kodlamaya yeni başlayacaklar için önerdiğim yol haritası ve ilk projeler.", // PLACEHOLDER
    tags: ["Robotik", "Eğitim", "STEM"],
    content: `
      <p>Robotik kodlama, öğrencilerin soyut programlama kavramlarını somut bir şekilde deneyimlemesini sağlayan güçlü bir alan.</p>
      <h2>1. Görsel Programlama ile Başla</h2>
      <p>Scratch tabanlı araçlar, mantıksal düşünmeyi metin tabanlı koda geçmeden önce oturtmak için ideal.</p>
      <h2>2. Basit Donanımla Deney Yap</h2>
      <p>Arduino gibi erişilebilir kartlarla sensör okuma, LED kontrolü gibi küçük projelerle başlamak motivasyonu yüksek tutar.</p>
      <h2>3. Gerçek Bir Problem Çöz</h2>
      <p>Öğrenciyi asıl heyecanlandıran şey, öğrendiğini kendi belirlediği küçük bir problemi çözmek için kullanmasıdır.</p>
    `,
    seo: {
      title: "Robotik Kodlamaya Nereden Başlamalı? | Erkan Demirci",
      description: "Robotik kodlamaya yeni başlayacaklar için yol haritası ve ilk proje önerileri.",
      keywords: "robotik kodlama, STEM eğitimi, arduino",
      ogImage: ""
    }
  },
  {
    slug: "ai-ile-sosyal-medya-icerik-uretimi",
    title: "Yapay Zekâ ile Sosyal Medya İçerik Üretim Sürecim", // PLACEHOLDER
    category: "İçerik Üretimi",
    date: "2026-08-05",
    readTime: "7 dk",
    cover: "",
    excerpt: "Fikirden yayına kadar, AI araçlarını sosyal medya içerik üretiminde nasıl kullandığımı adım adım anlatıyorum.", // PLACEHOLDER
    tags: ["İçerikÜretimi", "ChatGPT", "Kling", "SosyalMedya"],
    content: `
      <p>Bir içeriği fikir aşamasından yayına kadar taşırken yapay zekâyı sürecin her adımında farklı bir amaçla kullanıyorum.</p>
      <h2>Fikir ve Metin</h2>
      <p>ChatGPT ve Claude'u beyin fırtınası ve metin taslağı için kullanıyorum.</p>
      <h2>Görsel ve Video</h2>
      <p>Gemini ve Kling ile görsel/video üretimini hızlandırıyor, ElevenLabs ile seslendirme ekliyorum.</p>
      <h2>Son Dokunuş</h2>
      <p>Kurgu ve son düzenlemeler her zaman insan gözünden geçiyor — AI bir yardımcı, son kararı ben veriyorum.</p>
    `,
    seo: {
      title: "Yapay Zekâ ile Sosyal Medya İçerik Üretim Sürecim | Erkan Demirci",
      description: "Fikirden yayına, AI araçlarıyla sosyal medya içerik üretim sürecim.",
      keywords: "AI içerik üretimi, sosyal medya, ChatGPT, Kling",
      ogImage: ""
    }
  },
  {
    slug: "prompt-engineering-temel-ilkeler",
    title: "Prompt Engineering'de Temel İlkeler", // PLACEHOLDER
    category: "Prompt Engineering",
    date: "2026-07-28",
    readTime: "8 dk",
    cover: "",
    excerpt: "Hangi AI modeliyle çalışırsan çalış, işe yarayan prompt yazımının değişmeyen temel kuralları.", // PLACEHOLDER
    tags: ["Prompt", "ChatGPT", "Claude", "Gemini"],
    content: `
      <p>İyi bir prompt, net bir talimattan daha fazlasıdır — bağlam, format ve kısıt tanımlarının doğru dengesidir.</p>
      <h2>Netlik</h2>
      <p>Modelden ne istediğini olabildiğince açık ve somut şekilde tanımla.</p>
      <h2>Bağlam</h2>
      <p>Modelin doğru varsayımlar yapabilmesi için gerekli arka planı ver.</p>
      <h2>Format</h2>
      <p>Çıktının nasıl görünmesini istediğini örnekle göster.</p>
      <h2>Yineleme</h2>
      <p>İlk sonuç nadiren mükemmeldir — promptu küçük adımlarla iyileştir.</p>
    `,
    seo: {
      title: "Prompt Engineering'de Temel İlkeler | Erkan Demirci",
      description: "İşe yarayan prompt yazımının temel kuralları.",
      keywords: "prompt engineering, AI, ChatGPT, Claude",
      ogImage: ""
    }
  }
];
