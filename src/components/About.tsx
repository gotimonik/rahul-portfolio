import Section from "./Section";
import Reveal from "./Reveal";
import { profile, quickFacts } from "@/data/resume";

export default function About() {
  return (
    <Section id="about" eyebrow="Get to know me" title="About Me" index="01">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4" delay={0.05}>
          <p className="text-base leading-relaxed text-muted">{profile.summary}</p>
          <p className="text-base leading-relaxed text-muted">{profile.extendedSummary}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {profile.focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-accent/30 bg-surface-alt px-3 py-1 text-xs font-medium text-accent-soft"
              >
                {area}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-lg border border-border bg-surface p-6">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent-soft">
              Quick Facts
            </h3>
            <dl className="space-y-4">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="flex items-center justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
                  <dt className="text-sm text-muted">{fact.label}</dt>
                  <dd className="text-sm font-medium text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
