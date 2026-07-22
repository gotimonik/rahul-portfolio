import type { Variants } from "framer-motion";

/**
 * Shared framer-motion variant factories so individual components don't
 * each redeclare their own opacity/translate transition objects. Each
 * factory takes a `delay` since most usages stagger multiple elements.
 */

/** Scroll-triggered reveal used by <Reveal /> for whole sections/cards. */
export function fadeUp(delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: "easeOut" },
    },
  };
}

/** Lighter-weight reveal for stacked hero copy that animates on mount. */
export function heroItem(delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    },
  };
}

/** Hero portrait pop-in. */
export function heroMedia(delay = 0): Variants {
  return {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay },
    },
  };
}

export const easeOutExpo = [0.22, 1, 0.36, 1] as const;
