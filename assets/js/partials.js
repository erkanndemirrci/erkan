/**
 * PARTIALS — Navbar & Footer
 * ---------------------------------------------------------------------
 * Navbar ve footer tek bir yerden yönetilir. Menüye yeni bir sayfa
 * eklemek istersen NAV_LINKS dizisine bir satır eklemen yeterli;
 * tüm sayfalarda otomatik güncellenir.
 */
(function () {
  const NAV_LINKS = [
    { href: "index.html", label: "Ana Sayfa" },
    { href: "hakkimda.html", label: "Hakkımda" },
    { href: "uzmanliklarim.html", label: "Uzmanlıklarım" },
    { href: "projeler.html", label: "Projeler" },
    { href: "blog.html", label: "Blog" },
    { href: "prompt-kutuphanesi.html", label: "Prompt Kütüphanesi" },
    { href: "dokumanlar.html", label: "Dokümanlar" },
    { href: "ai-gallery.html", label: "AI Gallery" },
    { href: "iletisim.html", label: "İletişim" }
  ];

  function currentPage() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    return path;
  }

  function iconSearch() {
    return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`;
  }
  function iconSun() {
    return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;
  }

  function renderHeader() {
    const cfg = window.SITE_CONFIG || {};
    const cur = currentPage();
    const links = NAV_LINKS.map(l => `<a href="${l.href}" class="${cur === l.href ? "active" : ""}">${l.label}</a>`).join("");
    const mobileLinks = NAV_LINKS.map(l => `<a href="${l.href}" class="${cur === l.href ? "active" : ""}">${l.label}</a>`).join("");

    const socials = cfg.socials || {};
    const mobileSocial = Object.values(socials).filter(s => s.url).map(s =>
      `<a href="${s.url}" target="_blank" rel="noopener" class="icon-btn" aria-label="${s.label}">${socialIcon(s.label)}</a>`
    ).join("");

    const html = `
      <nav class="navbar" id="navbar">
        <div class="container nav-inner">
          <a href="index.html" class="brand">
            <span class="brand-avatar"><img src="${cfg.images ? cfg.images.avatar : ''}" alt="${cfg.name || 'Erkan Demirci'}" /></span>
            <span>${cfg.name || "Erkan Demirci"}<small>Teknoloji &amp; Yapay Zekâ</small></span>
          </a>
          <div class="nav-links">${links}</div>
          <div class="nav-actions">
            <button class="icon-btn" id="searchTrigger" aria-label="Ara">${iconSearch()}</button>
            <button class="icon-btn" id="themeToggle" aria-label="Tema değiştir">${iconSun()}</button>
            <a href="iletisim.html" class="btn btn-secondary btn-sm" style="display:none" id="navContactBtn">İletişime Geç</a>
            <button class="nav-burger" id="navBurger" aria-label="Menü"><span></span></button>
          </div>
        </div>
      </nav>
      <div class="mobile-menu" id="mobileMenu">
        <div class="container">
          ${mobileLinks}
          <div class="mobile-social">${mobileSocial}</div>
        </div>
      </div>
    `;
    document.getElementById("site-header").innerHTML = html;
  }

  function socialIcon(label) {
    if (label.toLowerCase().includes("instagram")) return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`;
    if (label.toLowerCase().includes("youtube")) return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none"/></svg>`;
    if (label.toLowerCase().includes("tiktok")) return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3v10.5a3.5 3.5 0 1 1-3-3.46"/><path d="M14 3c0 2.5 2 4.5 4.5 4.5"/></svg>`;
    if (label.toLowerCase().includes("github")) return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>`;
    if (label.toLowerCase().includes("linkedin")) return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3M12 13v3"/></svg>`;
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>`;
  }

  function renderFooter() {
    const cfg = window.SITE_CONFIG || {};
    const socials = cfg.socials || {};
    const socialLinks = Object.values(socials).filter(s => s.url).map(s =>
      `<a href="${s.url}" target="_blank" rel="noopener" class="icon-btn" aria-label="${s.label}" title="${s.label}">${socialIcon(s.label)}</a>`
    ).join("");

    const html = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="index.html" class="brand">
                <span class="brand-avatar"><img src="${cfg.images ? cfg.images.avatar : ''}" alt="${cfg.name}" /></span>
                <span>${cfg.name || "Erkan Demirci"}</span>
              </a>
              <p>${cfg.tagline || ""}</p>
              <div class="footer-social">${socialLinks}</div>
            </div>
            <div>
              <h5>Keşfet</h5>
              <ul class="footer-links">
                <li><a href="blog.html">Blog</a></li>
                <li><a href="prompt-kutuphanesi.html">Prompt Kütüphanesi</a></li>
                <li><a href="dokumanlar.html">Dokümanlar</a></li>
                <li><a href="ai-gallery.html">AI Gallery</a></li>
              </ul>
            </div>
            <div>
              <h5>Hakkında</h5>
              <ul class="footer-links">
                <li><a href="hakkimda.html">Hakkımda</a></li>
                <li><a href="uzmanliklarim.html">Uzmanlıklarım</a></li>
                <li><a href="projeler.html">Projeler</a></li>
                <li><a href="iletisim.html">İletişim</a></li>
              </ul>
            </div>
            <div>
              <h5>İletişim</h5>
              <ul class="footer-links">
                <li><a href="mailto:${cfg.contactEmail || ""}">${cfg.contactEmail || ""}</a></li>
                <li><a href="iletisim.html">Mesaj Gönder</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>© <span id="footerYear"></span> ${cfg.name || "Erkan Demirci"}. Tüm hakları saklıdır.</p>
            <p>Teknoloji, Yapay Zekâ ve Eğitimle Üretiyorum.</p>
          </div>
        </div>
      </footer>
      <button class="to-top" id="toTopBtn" aria-label="Yukarı çık">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </button>
    `;
    document.getElementById("site-footer").innerHTML = html;
    const y = document.getElementById("footerYear");
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderHeader();
    renderFooter();
    if (window.initUI) window.initUI();
    if (window.initSearch) window.initSearch();
  });

  window.socialIcon = socialIcon;
})();
