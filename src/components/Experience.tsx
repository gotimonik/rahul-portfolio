import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Career path" title="Experience" index="04">
      <div className="relative border-l border-border pl-8">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08} className="relative mb-12 last:mb-0">
            <span className="absolute -left-[2.28rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
            <div className="card-hover rounded-lg border border-border bg-surface p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {job.role} <span className="font-normal text-muted">· {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-accent-soft">{job.period}</span>
              </div>
              <p className="mt-2 text-sm italic text-muted">{job.summary}</p>
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-surface-alt px-2.5 py-0.5 text-xs text-muted"
                  >
                    {tech}
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
