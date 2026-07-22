"use client";

import { useEffect, useState } from "react";

/**
 * Tracks whether the page has been scrolled past `threshold` pixels.
 * Used to toggle the nav's translucent/blurred background.
 */
export function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
