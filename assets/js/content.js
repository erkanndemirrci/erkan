/**
 * CONTENT — kart render fonksiyonları ve yardımcılar
 * Tüm liste sayfaları (projeler, blog, prompt, dokümanlar, galeri)
 * bu fonksiyonları kullanarak window.PROJECTS / POSTS / PROMPTS /
 * DOCUMENTS / GALLERY dizilerini HTML'e çevirir.
 */
(function () {
  function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  function formatDate(dateStr) {
    if (!dateStr) return "";
    const months = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
    const d = new Date(dateStr + "T00:00:00");
    if (isNaN(d.getTime())) return dateStr;
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  function escapeHtml(str) {
    return String(str || "").replace(/[&<>"']/g, s => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[s]));
  }

  function coverHtml(imagePath, title, aspectClass) {
    if (imagePath) {
      return `<div class="${aspectClass || ''}"><img src="${imagePath}" alt="${escapeHtml(title)}" loading="lazy" /></div>`;
    }
    return `<div class="ph-cover ${aspectClass || ''}"><span>${escapeHtml(title)}</span></div>`;
  }

  function tagPillsHtml(tags, linkPrefix) {
    if (!tags || !tags.length) return "";
    return tags.map(t => `<span class="mini-tag">#${escapeHtml(t)}</span>`).join("");
  }

  // ---------- PROJECT CARD ----------
  function projectCardHtml(p) {
    return `
      <article class="card project-card reveal in">
        <div class="project-media">
          ${p.image ? `<img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy" />` : `<div class="ph-cover"><span>${escapeHtml(p.title)}</span></div>`}
          <span class="cat-badge">${escapeHtml(p.category)}</span>
        </div>
        <div class="project-body">
          <h3>${escapeHtml(p.title)}</h3>
          <p>${escapeHtml(p.description)}</p>
          <div class="tag-row">${(p.tech||[]).map(t => `<span class="mini-tag">${escapeHtml(t)}</span>`).join("")}</div>
          <div class="project-links">
            ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener">Demo →</a>` : `<span class="text-faint" style="font-size:0.82rem;">Demo yakında</span>`}
            ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener">GitHub →</a>` : ``}
          </div>
        </div>
      </article>
    `;
  }

  // ---------- POST CARD ----------
  function postCardHtml(post) {
    return `
      <article class="card post-card reveal in">
        <a href="blog-yazisi.html?slug=${encodeURIComponent(post.slug)}">
          ${coverHtml(post.cover, post.title, "post-media")}
        </a>
        <div class="post-body">
          <div class="post-meta"><span class="cat">${escapeHtml(post.category)}</span> · <span>${formatDate(post.date)}</span> · <span>${escapeHtml(post.readTime||"")}</span></div>
          <h3><a href="blog-yazisi.html?slug=${encodeURIComponent(post.slug)}">${escapeHtml(post.title)}</a></h3>
          <p>${escapeHtml(post.excerpt)}</p>
          <div class="post-tags">${tagPillsHtml(post.tags)}</div>
        </div>
      </article>
    `;
  }

  // ---------- PROMPT CARD ----------
  const diffClass = { "Kolay": "diff-kolay", "Orta": "diff-orta", "Zor": "diff-zor" };
  function promptCardHtml(pr) {
    return `
      <article class="card prompt-card reveal in">
        <div class="prompt-card-top">
          <div class="prompt-badge">
            <span class="ai-chip">${escapeHtml(pr.ai)}</span>
            <span class="diff-chip ${diffClass[pr.difficulty]||''}">${escapeHtml(pr.difficulty)}</span>
          </div>
          <span class="mini-tag">${escapeHtml(pr.category)}</span>
        </div>
        <h3><a href="prompt-detay.html?slug=${encodeURIComponent(pr.slug)}">${escapeHtml(pr.title)}</a></h3>
        <p style="font-size:0.9rem;">${escapeHtml(pr.excerpt)}</p>
        <div class="prompt-preview">${escapeHtml(pr.promptText)}</div>
        <div class="prompt-card-footer">
          <a href="prompt-detay.html?slug=${encodeURIComponent(pr.slug)}" class="btn-ghost">Detayı Gör
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <button class="btn btn-secondary btn-sm" onclick="copyToClipboard(${JSON.stringify(pr.promptText)}, this)">Promptu Kopyala</button>
        </div>
      </article>
    `;
  }

  // ---------- DOCUMENT CARD ----------
  function docCardHtml(doc) {
    return `
      <article class="card doc-card reveal in">
        <div class="doc-icon">${escapeHtml(doc.fileType)}</div>
        <div class="doc-info">
          <h3>${escapeHtml(doc.title)}</h3>
          <div class="doc-meta">${escapeHtml(doc.category)} · ${formatDate(doc.date)}</div>
          <p style="font-size:0.9rem;">${escapeHtml(doc.description)}</p>
          <div class="tag-row">${tagPillsHtml(doc.tags)}</div>
          <div class="doc-actions">
            <a href="${doc.fileUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">Dokümanı Görüntüle</a>
            <a href="${doc.fileUrl}" download class="btn btn-primary btn-sm">Dokümanı İndir</a>
          </div>
        </div>
      </article>
    `;
  }

  // ---------- GALLERY ITEM ----------
  function galleryItemHtml(item) {
    return `
      <div class="gallery-item reveal in" data-type="${escapeHtml(item.type)}">
        ${item.image ? `<img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" />` : `<div class="ph-cover" style="aspect-ratio:${(1 + Math.random()*0.6).toFixed(2)}/1;"><span>${escapeHtml(item.title)}</span></div>`}
        <div class="gallery-overlay">
          <span class="cat-badge">${escapeHtml(item.type)}</span>
          <h4>${escapeHtml(item.title)}</h4>
          <span class="text-faint" style="font-size:0.75rem;">${escapeHtml(item.tool||"")}</span>
        </div>
      </div>
    `;
  }

  function emptyStateHtml(message) {
    return `
      <div class="empty-state">
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        <p>${escapeHtml(message || "Sonuç bulunamadı.")}</p>
      </div>
    `;
  }

  window.Content = {
    getQueryParam, formatDate, escapeHtml, coverHtml, tagPillsHtml,
    projectCardHtml, postCardHtml, promptCardHtml, docCardHtml, galleryItemHtml, emptyStateHtml
  };
})();
