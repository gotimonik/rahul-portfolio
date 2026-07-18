import { Search, Hammer, Rocket, LifeBuoy, type LucideIcon } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { process, type ProcessStep } from "@/data/resume";

const iconMap: Record<ProcessStep["icon"], LucideIcon> = {
  discover: Search,
  build: Hammer,
  ship: Rocket,
  support: LifeBuoy,
};

export default function Approach() {
  return (
    <Section id="approach" eyebrow="How I work" title="My Approach" index="03">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((step, i) => {
          const Icon = iconMap[step.icon];
          return (
            <Reveal key={step.title} delay={i * 0.08} className="h-full">
              <div className="card-hover relative h-full rounded-lg border border-border bg-surface p-5">
                <span className="pointer-events-none absolute right-4 top-4 font-mono text-3xl font-bold text-border">
                  {step.step}
                </span>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-surface-alt text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
