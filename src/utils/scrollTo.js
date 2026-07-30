const getNavbarHeight = () => {
  if (typeof window === 'undefined') return 0;
  const navbar = document.querySelector('header');
  return navbar?.offsetHeight ?? 64;
};

export const scrollToSection = (selector) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const target = document.querySelector(selector);
  if (!target) return;

  const navbarHeight = getNavbarHeight();
  const targetTop =
    target.getBoundingClientRect().top + window.scrollY - navbarHeight;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  });

  window.history.pushState(null, '', selector);
};
