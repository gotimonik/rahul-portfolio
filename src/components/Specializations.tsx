import { Network, Workflow, Database, Landmark, Terminal, Webhook, type LucideIcon } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { specializations, type Specialization } from "@/data/resume";

const iconMap: Record<Specialization["icon"], LucideIcon> = {
  microservices: Network,
  devops: Workflow,
  database: Database,
  finance: Landmark,
  scripting: Terminal,
  api: Webhook,
};

export default function Specializations() {
  return (
    <Section
      id="specializations"
      eyebrow="Beyond the codebase"
      title="What I Build"
      index="02"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {specializations.map((spec, i) => {
          const Icon = iconMap[spec.icon];
          return (
            <Reveal key={spec.title} delay={i * 0.06}>
              <div className="card-hover h-full rounded-lg border border-border bg-surface p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-surface-alt text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{spec.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{spec.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
