/**
 * AUTH CLIENT
 * ---------------------------------------------------------------------
 * Backend ile (kayıt, giriş, abonelik, korumalı içerik) konuşan küçük
 * bir yardımcı kütüphane. Oturum bilgisi backend tarafında httpOnly
 * cookie ile tutulur; burada sadece son bilinen kullanıcı/plan bilgisini
 * sayfa içinde (bellekte) tutuyoruz.
 */
(function () {
  function apiBase() {
    return (window.SITE_CONFIG && window.SITE_CONFIG.apiBaseUrl) || "http://localhost:4000/api";
  }

  async function apiFetch(path, options = {}) {
    const res = await fetch(apiBase() + path, {
      credentials: "include",
      headers: { "Content-Type": "application/json", ...(options.headers || {}) },
      ...options,
    });
    let data = null;
    try { data = await res.json(); } catch (e) { /* boş gövde olabilir */ }
    return { ok: res.ok, status: res.status, data };
  }

  async function getMe() {
    const { ok, data } = await apiFetch("/auth/me");
    return ok ? data : null;
  }

  async function register(email, password, fullName) {
    return apiFetch("/auth/register", { method: "POST", body: JSON.stringify({ email, password, fullName }) });
  }

  async function login(email, password) {
    return apiFetch("/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
  }

  async function logout() {
    return apiFetch("/auth/logout", { method: "POST" });
  }

  async function getPlans() {
    const { ok, data } = await apiFetch("/plans");
    return ok ? data : [];
  }

  async function getSubscriptionStatus() {
    const { ok, data } = await apiFetch("/subscribe/status");
    return ok ? data : [];
  }

  async function startCheckout(planKey) {
    return apiFetch("/subscribe/checkout", { method: "POST", body: JSON.stringify({ planKey }) });
  }

  /**
   * Korumalı bir içeriği (prompt tam metni / doküman linki) getirmeyi dener.
   * Yetki varsa {allowed:true, content:{...}} , yoksa {allowed:false, requiredPlan, loggedIn} döner.
   */
  async function fetchProtectedContent(slug) {
    const { ok, status, data } = await apiFetch("/content/" + encodeURIComponent(slug));
    if (ok) return { allowed: true, content: data };
    return { allowed: false, status, requiredPlan: data?.requiredPlan, loggedIn: data?.loggedIn };
  }

  const PLAN_LABELS = { FREE: "Ücretsiz", TEMEL: "Temel", PRO: "Pro" };

  window.AuthClient = {
    apiBase, apiFetch, getMe, register, login, logout,
    getPlans, getSubscriptionStatus, startCheckout, fetchProtectedContent, PLAN_LABELS,
  };
})();
