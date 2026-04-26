// src/utils/redirects.js
// ──────────────────────────────────────────────────────────────────────────
// Client-side slug rewrite for HashRouter.
// HashRouter does not support server-side 301/302, so this module intercepts
// hashchange events and replaces deprecated hash fragments with their current
// canonical form. For any future slug rename (category or article), add an
// entry to REDIRECT_MAP below.
//
// Usage (one-time at app startup, e.g. in main.jsx or App.jsx top-level):
//   import initRedirects from "./utils/redirects.js";
//   initRedirects();
// ──────────────────────────────────────────────────────────────────────────

// ── Redirect map ──────────────────────────────────────────────────────────
// Each entry: [pattern, target]
//   pattern: string (exact match) | RegExp (capture groups allowed)
//   target:  string | function(matchOrHash) → string
//
// Oturum 3 (Sprint 5.6) notu:
// Kategori migration (tas-organik → inci-tarih / inci-teknik) article-level
// cat field üzerinden yapıldı. #category/tas-organik URL'si hala geçerli —
// içinde kehribar + mercan kalıyor. Bu nedenle bu migration hiç entry
// gerektirmedi. Map bilerek boş; iskelet gelecekteki slug rename'leri için.

export const REDIRECT_MAP = [
  // Örnek (pasif, kalıp referansı):
  // ["#category/eski-slug", "#category/yeni-slug"],
  // [/^#article\/eski-(.+)$/, (m) => `#article/yeni-${m[1]}`],
];

// ── Middleware ────────────────────────────────────────────────────────────

function resolveRedirect(hash) {
  for (const [pattern, target] of REDIRECT_MAP) {
    if (typeof pattern === "string") {
      if (hash === pattern) {
        return typeof target === "function" ? target(hash) : target;
      }
    } else if (pattern instanceof RegExp) {
      const m = hash.match(pattern);
      if (m) {
        return typeof target === "function" ? target(m) : target;
      }
    }
  }
  return null;
}

export default function initRedirects() {
  const handler = () => {
    const current = window.location.hash;
    const target = resolveRedirect(current);
    if (target && target !== current) {
      // replaceState (replace, not push) so the back button does not loop
      // on the redirected URL.
      const base = window.location.href.split("#")[0];
      window.location.replace(base + target);
    }
  };
  window.addEventListener("hashchange", handler);
  // Also run once at load so deep-linked URLs are also rewritten.
  handler();
}
