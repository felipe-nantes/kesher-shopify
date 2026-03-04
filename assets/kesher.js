// Kesher JS (animations/hooks)

// Kesher reveal/in-view animations (Framer-like, but lightweight)
(() => {
  const revealSelector = '[data-kesher-reveal]';
  const containers = document.querySelectorAll('[data-kesher-inview]');

  const revealElements = () => {
    const els = document.querySelectorAll(revealSelector);
    if (!els.length) return;

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('kesher-is-visible');
          io.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -100px 0px' });

    els.forEach(el => io.observe(el));
  };

  const revealContainers = () => {
    if (!containers.length) return;

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('kesher-is-visible');
          io.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -100px 0px' });

    containers.forEach(el => io.observe(el));
  };

  // Init on load + after Shopify section renders
  const init = () => {
    revealElements();
    revealContainers();
  };

  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('shopify:section:load', init);
})();