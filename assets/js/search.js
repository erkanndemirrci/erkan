/**
 * GLOBAL ARAMA
 * Navbar'daki büyüteç ikonuna veya Cmd/Ctrl+K'ya basınca açılır.
 * Blog yazıları, promptlar ve dokümanlar içinde başlık/etiket/kategoriye göre arar.
 */
(function () {
  function buildIndex() {
    const idx = [];
    (window.POSTS || []).forEach(p => idx.push({
      type: "Blog", title: p.title, sub: p.category, url: `blog-yazisi.html?slug=${encodeURIComponent(p.slug)}`,
      haystack: [p.title, p.category, p.excerpt, ...(p.tags||[])].join(" ").toLowerCase()
    }));
    (window.PROMPTS || []).forEach(p => idx.push({
      type: "Prompt", title: p.title, sub: `${p.ai} · ${p.category}`, url: `prompt-detay.html?slug=${encodeURIComponent(p.slug)}`,
      haystack: [p.title, p.category, p.ai, p.excerpt, ...(p.tags||[])].join(" ").toLowerCase()
    }));
    (window.DOCUMENTS || []).forEach(d => idx.push({
      type: "Doküman", title: d.title, sub: d.category, url: d.fileUrl,
      haystack: [d.title, d.category, d.description, ...(d.tags||[])].join(" ").toLowerCase()
    }));
    (window.PROJECTS || []).forEach(pr => idx.push({
      type: "Proje", title: pr.title, sub: pr.category, url: `projeler.html`,
      haystack: [pr.title, pr.category, pr.description, ...(pr.tech||[])].join(" ").toLowerCase()
    }));
    return idx;
  }

  function iconFor(type) {
    return type;
  }

  function buildModal() {
    const overlay = document.createElement("div");
    overlay.className = "search-modal-overlay";
    overlay.id = "searchOverlay";
    overlay.innerHTML = `
      <div class="search-modal">
        <div class="search-modal-input">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="text" id="globalSearchInput" placeholder="Blog, prompt, doküman veya proje ara... (örn. Gemini, video, robotik)" autocomplete="off" />
          <kbd>ESC</kbd>
        </div>
        <div class="search-modal-results" id="globalSearchResults"></div>
      </div>
    `;
    document.body.appendChild(overlay);
    return overlay;
  }

  window.initSearch = function () {
    if (document.getElementById("searchOverlay")) return;
    const overlay = buildModal();
    const input = document.getElementById("globalSearchInput");
    const results = document.getElementById("globalSearchResults");
    const index = buildIndex();

    function open() {
      overlay.classList.add("open");
      setTimeout(() => input.focus(), 50);
      render("");
    }
    function close() {
      overlay.classList.remove("open");
    }
    function render(query) {
      const q = query.trim().toLowerCase();
      if (!q) {
        results.innerHTML = `<div class="search-empty">Aramaya başlamak için yazmaya başla. Örnek: "Gemini", "video", "robotik"</div>`;
        return;
      }
      const matches = index.filter(item => item.haystack.includes(q)).slice(0, 30);
      if (!matches.length) {
        results.innerHTML = `<div class="search-empty">"${query}" için sonuç bulunamadı.</div>`;
        return;
      }
      results.innerHTML = matches.map(m => `
        <a class="search-result" href="${m.url}">
          <span class="search-result-type">${m.type}</span>
          <span>
            <span class="search-result-title" style="display:block;">${m.title}</span>
            <span class="search-result-sub">${m.sub || ""}</span>
          </span>
        </a>
      `).join("");
    }

    const trigger = document.getElementById("searchTrigger");
    if (trigger) trigger.addEventListener("click", open);

    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
    input.addEventListener("input", (e) => render(e.target.value));

    document.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        overlay.classList.contains("open") ? close() : open();
      }
      if (e.key === "Escape") close();
    });
  };
})();
