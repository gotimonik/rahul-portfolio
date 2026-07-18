import { Mail, Phone } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/resume";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Let's talk" title="Get In Touch" index="08">
      <Reveal className="max-w-2xl">
        <p className="text-base leading-relaxed text-muted">
          Open to hearing about interesting backend and platform engineering
          opportunities. Feel free to reach out by email or phone.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Phone className="h-4 w-4" />
            {profile.phone}
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
