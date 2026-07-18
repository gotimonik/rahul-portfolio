import { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  title,
  index,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  index: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-10">
          {eyebrow && (
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent-soft">
              {eyebrow}
            </p>
          )}
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">{index}</span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
