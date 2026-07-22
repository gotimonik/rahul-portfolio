"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/resume";
import { easeOutExpo } from "@/lib/motion";
import { getInitials } from "@/lib/initials";

const SESSION_KEY = "rg-intro-seen";
const initials = getInitials(profile.name);

// Progress-counter timing (ms), kept in sync with the bar-fill animation below.
const COUNTER_DELAY = 300;
const COUNTER_DURATION = 1500;

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [percent, setPercent] = useState(0);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Only play the intro once per browser session/tab, so returning
    // visitors aren't stuck watching it on every reload.
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(SESSION_KEY)) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const holdMs = reduceMotion ? 350 : 2250;
    const exitMs = reduceMotion ? 200 : 650;

    // eslint-disable-next-line react-hooks/set-state-in-effect -- intro can only be decided client-side (sessionStorage), mirrors the pattern in ThemeToggle
    setVisible(true);

    // Locking scroll removes the scrollbar, which shrinks the viewport
    // width; compensate with matching right padding so nothing reflows
    // when the intro finishes and the scrollbar reappears. (Belt-and-braces
    // alongside `scrollbar-gutter: stable` in globals.css, for browsers
    // that don't yet support it.)
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    if (reduceMotion) {
      setPercent(100);
    } else {
      // Animate the numeric counter alongside the progress bar's width
      // transition below, rather than trusting two separate timings to
      // stay visually in sync.
      const start = performance.now() + COUNTER_DELAY;
      const tick = (now: number) => {
        const t = Math.min(Math.max((now - start) / COUNTER_DURATION, 0), 1);
        setPercent(Math.round(t * 100));
        if (t < 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    }

    const holdTimer = window.setTimeout(() => {
      setExiting(true);
      window.setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = previousOverflow;
        document.body.style.paddingRight = previousPaddingRight;
        window.sessionStorage.setItem(SESSION_KEY, "1");
      }, exitMs);
    }, holdMs);

    return () => {
      window.clearTimeout(holdTimer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background px-6"
          initial={{ opacity: 1 }}
          animate={{ opacity: exiting ? 0 : 1, y: exiting ? -24 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          aria-hidden
        >
          {/* Decorative glow only — kept off the fixed overlay itself so its
              gradient (which fades to transparent) can never show the real
              page bleeding through behind the loading screen. */}
          <div className="glow pointer-events-none absolute inset-0" />

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: easeOutExpo }}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface font-mono text-sm font-bold text-accent"
            >
              {initials}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.25, ease: easeOutExpo }}
              className="gradient-text mt-5 text-4xl font-bold tracking-tight sm:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-3 font-mono text-xs uppercase tracking-widest text-muted sm:text-sm"
            >
              {profile.title} <span className="text-accent-soft">·</span> Portfolio
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mt-10 flex w-64 items-center gap-3 sm:w-72"
            >
              <div className="h-px flex-1 overflow-hidden rounded-full bg-border">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: COUNTER_DURATION / 1000, delay: COUNTER_DELAY / 1000, ease: "easeInOut" }}
                  className="h-full bg-linear-to-r from-accent to-accent-soft"
                />
              </div>
              <span className="w-8 shrink-0 text-right font-mono text-xs tabular-nums text-muted">
                {percent}
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
