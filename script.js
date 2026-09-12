document.addEventListener("DOMContentLoaded", () => {
  const trackedLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="tiktok.com"]');

  trackedLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const destination = link.href.includes("wa.me") ? "whatsapp" : "tiktok";
      document.dispatchEvent(
        new CustomEvent("kader:outbound-click", {
          detail: { destination, url: link.href }
        })
      );
    });
  });
});
