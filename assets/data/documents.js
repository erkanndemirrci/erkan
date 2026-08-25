/**
 * DOKÜMANLAR (Word / PDF / Rehber)
 * ---------------------------------------------------------------------
 * Yeni bir doküman eklemek için:
 * 1. Dosyayı (docx/pdf) assets/documents/ klasörüne kopyala
 * 2. Aşağıya yeni bir { ... } nesnesi ekle, fileUrl alanına dosya yolunu yaz
 * 3. Kaydet — dokümanlar sayfası otomatik olarak listeleyecek
 *
 * fileType: "DOCX" | "PDF"
 */
window.DOCUMENTS = [
  {
    slug: "gemini-gorsel-uretimi-rehberi",
    title: "Gemini ile Profesyonel Görsel Üretimi – Rehber",
    category: "Yapay Zekâ",
    date: "2026-08-25",
    fileType: "DOCX",
    fileName: "gemini-gorsel-rehberi.docx",
    // Bu doküman TEMEL üyelere özel: gerçek indirme linki burada DEĞİL, backend'de tutuluyor.
    protected: true,
    requiredPlan: "TEMEL",
    fileUrl: "",
    cover: "",
    description: "Gemini kullanarak daha kaliteli görseller üretmek için hazırladığım prompt ve yöntem rehberi.",
    tags: ["Gemini", "AI", "GörselÜretim"]
  },
  {
    slug: "robotik-kodlama-baslangic-kiti",
    title: "Robotik Kodlamaya Başlangıç Kiti – PDF Rehber", // PLACEHOLDER
    category: "Robotik Kodlama",
    date: "2026-08-10",
    fileType: "PDF",
    fileName: "robotik-baslangic-kiti.pdf", // PLACEHOLDER
    fileUrl: "assets/documents/robotik-baslangic-kiti.pdf",
    cover: "",
    description: "Yeni başlayan öğrenciler için hazırlanmış, temel robotik kodlama kavramlarını özetleyen rehber.", // PLACEHOLDER
    tags: ["Robotik", "Eğitim", "STEM"]
  },
  {
    slug: "prompt-engineering-sablonlari",
    title: "Prompt Engineering Şablonları Dosyası", // PLACEHOLDER
    category: "Prompt Engineering",
    date: "2026-07-30",
    fileType: "DOCX",
    fileName: "prompt-sablonlari.docx", // PLACEHOLDER
    fileUrl: "assets/documents/prompt-sablonlari.docx",
    cover: "",
    description: "Farklı AI modelleri için yeniden kullanılabilir prompt şablonlarını bir araya getirdiğim doküman.", // PLACEHOLDER
    tags: ["Prompt", "ChatGPT", "Claude", "Gemini"]
  }
];
