import Section from "./Section";
import Reveal from "./Reveal";
import { education } from "@/data/resume";

export default function Education() {
  return (
    <Section id="education" eyebrow="Academic background" title="Education" index="07">
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 0.05}>
            <div className="card-hover flex items-center justify-between rounded-lg border border-border bg-surface p-5">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.degree} <span className="font-normal text-muted">· {item.field}</span>
                </h3>
                <p className="mt-1 text-sm text-muted">{item.school}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-sm text-accent-soft">{item.year}</p>
                <p className="text-xs text-muted">{item.score}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
