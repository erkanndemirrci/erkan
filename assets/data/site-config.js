/**
 * SITE CONFIG
 * ---------------------------------------------------------------------
 * Sitenin genel ayarları burada tutulur: isim, sloganlar, istatistikler,
 * sosyal medya linkleri ve kullanılan AI araçları.
 *
 * BURAYI DÜZENLEYEREK (kod içinde başka hiçbir yeri değiştirmeden):
 * - Hero başlıklarını / sloganları değiştirebilirsin
 * - İstatistik sayılarını güncelleyebilirsin
 * - Sosyal medya linklerini ekleyip çıkarabilirsin
 * - Kullandığın AI araçlarını yönetebilirsin
 *
 * NOT: "// PLACEHOLDER" yazan alanlar örnek/geçici içeriktir, gerçek
 * bilgilerinle değiştirmen gerekir.
 */
window.SITE_CONFIG = {
  name: "Erkan Demirci",
  initials: "ED",

  // Üyelik/abonelik backend'inin adresi. Yerelde test ederken bu değeri
  // değiştirmene gerek yok. Backend'i Render/Railway gibi bir yere taşıdığında
  // buradaki adresi oradan aldığın gerçek URL ile değiştir (sonunda /api ile).
  apiBaseUrl: "http://localhost:4000/api",

  // Hero & marka mesajları — istediğin zaman değiştirebilirsin
  heroKicker: "Teknoloji · Yapay Zekâ · Eğitim",
  heroTitle: "Teknoloji, Yapay Zekâ ve Eğitimle Üretiyorum.",
  heroSubtitle: "Robotik kodlama, 3D tasarım, yazılım ve yapay zekâ alanlarında üretiyor; öğrendiklerimi içerikler, projeler ve rehberlerle paylaşıyorum.",
  aboutIntro: "Ben Erkan Demirci. Teknoloji, yazılım, robotik kodlama, 3D tasarım ve yapay zekâ alanlarında çalışan; aynı zamanda öğrendiklerini ve ürettiklerini dijital içeriklerle paylaşan bir eğitimci ve içerik üreticisiyim.", // PLACEHOLDER - gerçek biyografi ile genişletilecek
  tagline: "Robotik Kodlama • 3D Tasarım • Yapay Zekâ • İçerik Üretimi",
  altSlogan: "Öğreniyor, üretiyor ve öğrendiklerimi paylaşıyorum.",

  // İstatistikler — PLACEHOLDER: gerçek rakamlarla güncelle
  stats: [
    { number: "40+", label: "Proje" },
    { number: "300+", label: "İçerik" },
    { number: "120+", label: "Prompt" },
    { number: "500+", label: "Öğrenci" },
    { number: "5+", label: "Yıl Deneyim" }
  ],

  // Sosyal medya — sende olanlar dolduruldu, kalanı istersen ekle (url:"" bırakırsan o link gizlenir)
  socials: {
    instagramContent: { label: "Instagram (İçerik Üreticiliği)", handle: "@erkanndemirrci", url: "https://www.instagram.com/erkanndemirrci/" },
    instagramAgency: { label: "Instagram (ED Sosyal Medya)", handle: "@edsosyalmedya", url: "https://www.instagram.com/edsosyalmedya/" },
    youtube: { label: "YouTube", handle: "@erkanndemirrci", url: "https://www.youtube.com/@erkanndemirrci" },
    tiktok: { label: "TikTok", handle: "@erkanndemirrci", url: "https://www.tiktok.com/@erkanndemirrci" },
    github: { label: "GitHub", handle: "", url: "" },   // PLACEHOLDER - eklemek için url'i doldur
    linkedin: { label: "LinkedIn", handle: "", url: "" } // PLACEHOLDER - eklemek için url'i doldur
  },

  contactEmail: "erkandemirrcii@gmail.com", // PLACEHOLDER - iletişim için kullanılacak e-postayı onayla/değiştir

  // Kullandığım AI araçları — sırayla eklenip çıkarılabilir
  tools: [
    { name: "ChatGPT", color: "#00D9FF" },
    { name: "Gemini", color: "#1677FF" },
    { name: "Claude", color: "#00A8FF" },
    { name: "Kling", color: "#5FE0A5" },
    { name: "Google Flow", color: "#00D9FF" },
    { name: "ElevenLabs", color: "#1677FF" }
  ],

  images: {
    heroPhoto: "assets/images/erkan-hero.jpg",
    aboutPhoto: "assets/images/erkan-about.jpg",
    avatar: "assets/images/erkan-avatar.jpg",
    ogImage: "assets/images/erkan-og.jpg"
  }
};
