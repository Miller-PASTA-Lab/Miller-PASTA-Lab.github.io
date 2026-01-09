// Theme toggle with robust persistence
(function () {
  const apply = (t) => {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
  };
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') {
    apply(saved);
  } else {
    // No saved choice: don't set data-theme; let CSS honor prefers-color-scheme
  }

  const btn = document.querySelector('.theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      if (!cur) {
        // No override yet: infer from media query
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        apply(prefersDark ? 'light' : 'dark');
      } else {
        apply(cur === 'dark' ? 'light' : 'dark');
      }
    });
  }
})();

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
});
