/**
 * PROMPT KÜTÜPHANESİ
 * ---------------------------------------------------------------------
 * Yeni bir prompt eklemek için diziye yeni bir nesne ekle. "slug" alanı
 * prompt-detay.html?slug=... adresinde kullanılır.
 *
 * category: "Görsel Üretim" | "Video" | "Gemini" | "Claude" | "ChatGPT"
 *           | "Kling" | "AI Reklam" | "Instagram" | "Fotoğraf"
 *           | "Eğitim" | "Otomasyon" | "Diğer"
 * difficulty: "Kolay" | "Orta" | "Zor"
 *
 * Tüm promptlar ÖRNEK içeriktir — kendi gerçek promptlarınla değiştir.
 */
window.PROMPTS = [
  {
    slug: "profesyonel-instagram-portre-promptu",
    title: "Profesyonel Instagram Portre Promptu",
    ai: "Gemini",
    category: "Görsel Üretim",
    difficulty: "Orta",
    purpose: "Profesyonel kişisel marka fotoğrafı oluşturmak.",
    excerpt: "Stüdyo ışığı hissi veren, sosyal medya profili için kullanılabilecek profesyonel bir portre üretmek için hazırlanmış prompt.",
    promptText: `Bir profesyonel stüdyo portresi oluştur: kişi kameraya doğal ve kendinden emin bir ifadeyle bakıyor, yumuşak rim-light ve önden gelen key light kullan, arka plan koyu lacivert tonlarda, hafif bokeh efekti, mavi ve cyan tonlarında ince bir renk vurgusu, 85mm portre lensi hissi, yüksek çözünürlük, gerçekçi cilt dokusu, minimal ve modern kompozisyon.`,
    tags: ["Gemini", "GörselÜretim", "Instagram", "Portre"],
    beforeImage: "",
    afterImage: ""
  },
  {
    slug: "urun-tanitim-video-promptu",
    title: "Ürün Tanıtım Video Promptu",
    ai: "Kling",
    category: "Video",
    difficulty: "Orta",
    purpose: "Kısa, dikkat çekici bir ürün tanıtım videosu üretmek.",
    excerpt: "Sosyal medya reklamı için 10-15 saniyelik, dinamik kamera hareketleriyle ürünü öne çıkaran video prompt şablonu.",
    promptText: `Ürün, koyu lacivert bir zeminde yavaşça dönerken üzerine ince mavi ve cyan ışık huzmeleri düşüyor, kamera yavaş bir dolly-in hareketiyle ürüne yaklaşıyor, arka planda hafif parçacık efektleri, sinematik derinlik, 3 saniyede bir kesme, son karede ürün logosu belirginleşiyor, modern ve premium bir his.`,
    tags: ["Kling", "Video", "AIReklam"],
    beforeImage: "",
    afterImage: ""
  },
  {
    slug: "chatgpt-icerik-takvimi-promptu",
    title: "Haftalık İçerik Takvimi Oluşturma Promptu",
    ai: "ChatGPT",
    category: "Otomasyon",
    difficulty: "Kolay",
    purpose: "Bir haftalık sosyal medya içerik planını hızlıca oluşturmak.",
    excerpt: "Marka sesini ve hedef kitleyi baz alarak 7 günlük içerik fikri ve başlık üreten prompt.",
    promptText: `Sen bir sosyal medya içerik stratejistisin. [MARKA/KİŞİ ADI] için, [SEKTÖR] alanında, [HEDEF KİTLE] hedef kitlesine yönelik 7 günlük bir içerik takvimi oluştur. Her gün için: içerik formatı (reels/karusel/story), başlık önerisi, kısa açıklama ve çağrı-to-action cümlesi ver. Ton: [MARKA TONU].`,
    tags: ["ChatGPT", "Otomasyon", "SosyalMedya"],
    beforeImage: "",
    afterImage: ""
  },
  {
    slug: "claude-egitim-icerik-ozetleme-promptu",
    title: "Eğitim İçeriğini Basitleştirme Promptu",
    ai: "Claude",
    category: "Eğitim",
    difficulty: "Kolay",
    purpose: "Karmaşık bir teknik konuyu öğrenci seviyesine indirgemek.",
    excerpt: "Teknik bir konuyu, belirlediğin yaş/seviye grubuna uygun şekilde basitleştirip örneklerle anlatan prompt.",
    promptText: `Aşağıdaki konuyu [YAŞ GRUBU / SEVİYE] için basitleştir: "[KONU]". Günlük hayattan bir benzetme kullan, teknik terimleri en aza indir, sonunda 3 maddelik bir özet ve öğrencinin kendine sorabileceği 1 kontrol sorusu ekle.`,
    tags: ["Claude", "Eğitim", "Prompt"],
    beforeImage: "",
    afterImage: ""
  },
  {
    slug: "gemini-urun-fotografi-promptu",
    title: "E-ticaret Ürün Fotoğrafı Promptu",
    ai: "Gemini",
    category: "Fotoğraf",
    difficulty: "Kolay",
    purpose: "Beyaz/temiz arka planlı, e-ticaret için uygun ürün görseli üretmek.",
    excerpt: "Katalog kalitesinde, gölgesi ve ışığı dengeli bir ürün fotoğrafı için prompt şablonu.",
    promptText: `[ÜRÜN ADI] için temiz beyaz arka planlı bir ürün fotoğrafı oluştur, yumuşak stüdyo aydınlatması, hafif ve doğal gölge, ürün tam ortada, yüksek detay, e-ticaret kataloğu standardında, gerçekçi malzeme dokusu.`,
    tags: ["Gemini", "Fotoğraf", "GörselÜretim"],
    beforeImage: "",
    afterImage: ""
  },
  {
    slug: "kling-ai-karakter-animasyon-promptu",
    title: "AI Karakter Animasyon Promptu",
    ai: "Kling",
    category: "Video",
    difficulty: "Zor",
    purpose: "Tutarlı bir AI karakterin kısa bir animasyon sahnesinde hareket etmesini sağlamak.",
    excerpt: "Karakter tutarlılığını korurken doğal hareket ve mimik üreten ileri seviye video prompt.",
    // Bu prompt PRO üyelere özel: tam metin burada DEĞİL, backend'de tutuluyor.
    // Erişim kontrolü assets/js/auth-client.js + prompt-detay.html üzerinden yapılıyor.
    protected: true,
    requiredPlan: "PRO",
    promptText: "",
    tags: ["Kling", "Video", "AIKarakter"],
    beforeImage: "",
    afterImage: ""
  }
];
