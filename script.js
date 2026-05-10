(() => {
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const toggleBtn = document.querySelector("[data-nav-toggle]");
  const mobileNav = document.querySelector("[data-nav-mobile]");
  if (toggleBtn && mobileNav) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = mobileNav.hasAttribute("hidden");
      if (isHidden) mobileNav.removeAttribute("hidden");
      else mobileNav.setAttribute("hidden", "");
    });

    mobileNav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => mobileNav.setAttribute("hidden", ""));
    });
  }

  // Personaliza estos valores para tu negocio
  const WHATSAPP_NUMBER = "18098348428"; // ej: 18095551234 (sin +)
  const EMAIL = "aptosistem@gmail.com";

  const wa = document.querySelector("[data-whatsapp]");
  if (wa) {
    const msg = encodeURIComponent(
      "Hola, quiero una demo de APTO POS. Mi negocio es: _____. Cantidad de sucursales: _____.",
    );
    wa.setAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`);
    wa.setAttribute("rel", "noopener");
    wa.setAttribute("target", "_blank");
  }

  const em = document.querySelector("[data-email]");
  if (em) {
    const subject = encodeURIComponent("Demo APTO POS");
    const body = encodeURIComponent(
      "Hola, quiero una demo de APTO POS.\n\nTipo de negocio:\nCantidad de sucursales:\nTeléfono:\n",
    );
    em.setAttribute("href", `mailto:${EMAIL}?subject=${subject}&body=${body}`);
  }
})();

