/**
 * ============================================================================
 * Animation Variants
 * ----------------------------------------------------------------------------
 * Shared animation variants for the entire portfolio.
 *
 * Philosophy:
 * - Simple
 * - Subtle
 * - Consistent
 * - Reusable
 * ============================================================================
 */

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: 32,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 0.15,
      ease: 'easeOut',
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: -32,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

/**
 * Container animation
 * Used when multiple children should animate one after another.
 */

export const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

/**
 * Faster stagger.
 * Great for social icons, skills, tech stack, etc.
 */

export const staggerFast = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};
