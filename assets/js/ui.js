/**
 * UI — navbar scroll, mobil menü, tema, reveal animasyonları, toast, kopyalama
 */
(function () {
  function safeGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function safeSet(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }

  function initTheme() {
    const saved = safeGet("ed-theme");
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-theme", saved);
    }
  }

  function initThemeToggle() {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      const cur = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
      const next = cur === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      safeSet("ed-theme", next);
    });
  }

  function initNavbarScroll() {
    const nav = document.getElementById("navbar");
    if (!nav) return;
    function onScroll() {
      if (window.scrollY > 12) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initMobileMenu() {
    const burger = document.getElementById("navBurger");
    const menu = document.getElementById("mobileMenu");
    if (!burger || !menu) return;
    burger.addEventListener("click", function () {
      menu.classList.toggle("open");
      document.body.style.overflow = menu.classList.contains("open") ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", function () {
      menu.classList.remove("open");
      document.body.style.overflow = "";
    }));
  }

  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(el => io.observe(el));
  }

  function initToTop() {
    const btn = document.getElementById("toTopBtn");
    if (!btn) return;
    window.addEventListener("scroll", function () {
      if (window.scrollY > 600) btn.classList.add("show");
      else btn.classList.remove("show");
    }, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function initHeroParticles() {
    const field = document.querySelector("[data-particles]");
    if (!field) return;
    const count = window.innerWidth < 700 ? 8 : 18;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "particle";
      const size = 2 + Math.random() * 4;
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.left = Math.random() * 100 + "%";
      p.style.top = Math.random() * 100 + "%";
      p.style.opacity = (0.2 + Math.random() * 0.5).toFixed(2);
      p.style.animation = `float-${i % 3} ${8 + Math.random() * 10}s ease-in-out infinite`;
      p.style.animationDelay = (Math.random() * 5) + "s";
      field.appendChild(p);
    }
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float-0 { 0%,100%{ transform:translateY(0) translateX(0);} 50%{ transform:translateY(-18px) translateX(8px);} }
      @keyframes float-1 { 0%,100%{ transform:translateY(0) translateX(0);} 50%{ transform:translateY(14px) translateX(-10px);} }
      @keyframes float-2 { 0%,100%{ transform:translateY(0) translateX(0);} 50%{ transform:translateY(-10px) translateX(-14px);} }
    `;
    document.head.appendChild(style);
  }

  let toastTimer;
  window.showToast = function (message) {
    let toast = document.getElementById("globalToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "globalToast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span class="dot">●</span> ${message}`;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  };

  window.copyToClipboard = function (text, btnEl) {
    function done(ok) {
      if (btnEl) {
        const original = btnEl.getAttribute("data-original") || btnEl.innerHTML;
        btnEl.setAttribute("data-original", original);
        btnEl.innerHTML = ok ? "Kopyalandı ✓" : "Kopyalanamadı";
        btnEl.classList.toggle("copied", ok);
        setTimeout(() => {
          btnEl.innerHTML = original;
          btnEl.classList.remove("copied");
        }, 1800);
      }
      window.showToast(ok ? "Prompt panoya kopyalandı ✓" : "Kopyalama başarısız oldu");
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => done(true)).catch(() => done(false));
    } else {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        done(true);
      } catch (e) { done(false); }
    }
  };

  initTheme();

  window.initUI = function () {
    initThemeToggle();
    initNavbarScroll();
    initMobileMenu();
    initReveal();
    initToTop();
    initHeroParticles();
  };

  // In case DOMContentLoaded already fired (defer script), also try on load
  document.addEventListener("DOMContentLoaded", initReveal);
})();
