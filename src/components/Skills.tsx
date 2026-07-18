import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/data/resume";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills" index="05">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <div className="card-hover h-full rounded-lg border border-border bg-surface p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent-soft">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface-alt px-3 py-1 text-xs text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
