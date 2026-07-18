import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Projects" index="06">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.06} className="h-full">
            <div className="card-hover group flex h-full flex-col rounded-lg border border-border bg-surface p-6 hover:border-accent">
              <p className="font-mono text-xs uppercase tracking-wide text-accent-soft">
                {project.tagline}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-foreground group-hover:text-accent">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {h}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-xs text-muted">{project.stack}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
