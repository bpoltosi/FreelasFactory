// Premium Academia — inicializações
// Animações de entrada acionadas a cada nova passagem pela seção.

document.addEventListener("DOMContentLoaded", () => {
  const supportsScrollDrivenAnimations = CSS.supports("animation-timeline: view()");

  if (window.AOS && !supportsScrollDrivenAnimations) {
    AOS.init({
      duration: 850,
      easing: "ease-out-quart",
      once: false,
      mirror: true,
      offset: 100,
    });

    window.addEventListener("load", () => window.AOS.refreshHard(), { once: true });
  }

  if (window.lucide) {
    lucide.createIcons();
  }

  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-site-nav]");

  if (toggle && nav) {
    const setOpen = (open) => {
      nav.setAttribute("data-open", String(open));
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    };

    toggle.addEventListener("click", () => {
      setOpen(nav.getAttribute("data-open") !== "true");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.getAttribute("data-open") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (nav.getAttribute("data-open") !== "true") return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      setOpen(false);
    });
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  document.querySelectorAll('a[href^="#"]:not(.skip-link)').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = targetId && document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion.matches ? "auto" : "smooth",
        block: "start",
      });
      window.history.pushState(null, "", targetId);
    });
  });

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
});
