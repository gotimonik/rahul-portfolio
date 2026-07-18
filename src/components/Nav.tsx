"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/resume";

const links = [
  { href: "#about", label: "About" },
  { href: "#specializations", label: "Focus" },
  { href: "#approach", label: "Approach" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border bg-background/80 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <span className="relative h-8 w-8 overflow-hidden rounded-full border border-border">
            <Image src={profile.photo} alt={profile.name} fill sizes="32px" className="object-cover" />
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
            {initials}<span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border bg-background px-6 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
