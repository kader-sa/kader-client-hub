document.addEventListener("DOMContentLoaded", () => {
  const sendEvent = (name, params = {}) => {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  };

  document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
    link.addEventListener("click", () => {
      sendEvent("whatsapp_click", {
        link_url: link.href,
        link_text: link.textContent.trim()
      });
    });
  });

  document.querySelectorAll('a[href*="tiktok.com"]').forEach((link) => {
    link.addEventListener("click", () => {
      sendEvent("tiktok_click", {
        link_url: link.href,
        link_text: link.textContent.trim()
      });
    });
  });

  document.querySelectorAll(".btn, .secondary-btn, .small-btn").forEach((link) => {
    link.addEventListener("click", () => {
      sendEvent("cta_click", {
        link_url: link.href,
        link_text: link.textContent.trim()
      });
    });
  });
});
