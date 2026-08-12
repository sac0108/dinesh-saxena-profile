import { CircleCheckBig } from "lucide-react";

import { outcomes } from "@/data/curriculum";

import { SectionHeading } from "./SectionHeading";

export function Outcomes() {
  return (
    <section id="outcomes" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Training outcomes"
          title="What teams typically take back to the floor"
          description="Outcomes depend on management follow-through and day-to-day supervision. These are the capability shifts the programme is designed to support — not guarantees."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o) => (
            <li
              key={o}
              className="flex gap-3 rounded-xl border border-border bg-surface px-5 py-5"
            >
              <CircleCheckBig className="mt-0.5 size-4 shrink-0 text-emerald" aria-hidden="true" />
              <span className="text-sm leading-relaxed text-foreground/85">{o}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
