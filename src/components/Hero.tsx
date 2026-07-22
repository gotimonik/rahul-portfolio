"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, MapPin, Briefcase } from "lucide-react";
import { profile } from "@/data/resume";
import { heroItem, heroMedia } from "@/lib/motion";

const stats = [
  { label: "Years experience", value: profile.yearsExperience },
  { label: "Projects delivered", value: "20+" },
  { label: "Systems", value: "Enterprise" },
];

export default function Hero() {
  return (
    <section className="glow relative overflow-hidden px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            variants={heroItem(0)}
            initial="hidden"
            animate="visible"
            className="font-mono text-sm text-accent"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={heroItem(0.05)}
            initial="hidden"
            animate="visible"
            className="gradient-text mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            variants={heroItem(0.1)}
            initial="hidden"
            animate="visible"
            className="mt-4 text-xl font-medium text-muted sm:text-2xl"
          >
            {profile.title}
          </motion.h2>

          <motion.p
            variants={heroItem(0.15)}
            initial="hidden"
            animate="visible"
            className="mt-2 font-mono text-sm text-accent-soft"
          >
            {profile.subtitle}
          </motion.p>

          <motion.div
            variants={heroItem(0.18)}
            initial="hidden"
            animate="visible"
            className="mt-4 flex items-center gap-1.5 text-sm text-muted"
          >
            <MapPin className="h-4 w-4 text-accent" />
            {profile.location}
          </motion.div>

          <motion.p
            variants={heroItem(0.2)}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={heroItem(0.25)}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            variants={heroItem(0.3)}
            initial="hidden"
            animate="visible"
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={heroMedia(0.15)}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-xs lg:max-w-sm"
        >
          <div
            aria-hidden
            className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent/30 via-accent-soft/10 to-transparent blur-2xl"
          />
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-2xl">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="(min-width: 1024px) 384px, 320px"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-foreground shadow-lg">
            <Briefcase className="h-3.5 w-3.5 text-accent" />
            {profile.currentRole}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
