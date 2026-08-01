const SCROLL_OFFSET = 48; // Pixels to offset the scroll position to prevent content from touching the navbar

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
  const targetStyle = window.getComputedStyle(target);
  const paddingTop = parseFloat(targetStyle.paddingTop);

  const targetTop =
    target.getBoundingClientRect().top + window.scrollY - navbarHeight + paddingTop - SCROLL_OFFSET;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  });

  window.history.pushState(null, '', selector);
};
