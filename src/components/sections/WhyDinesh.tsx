import { HardHat, Plane, Presentation } from "lucide-react";

import { SectionHeading } from "./SectionHeading";

const reasons = [
  {
    icon: Plane,
    title: "Taj SATS rigour",
    body: "Standards formed in airline catering, where batch cooking, rapid chilling, cold-chain holding and transport documentation leave no room for improvisation.",
  },
  {
    icon: Presentation,
    title: "Training & L&D discipline",
    body: "Structured trainer methodology shaped by learning and development work: competency mapping, session planning, participative delivery, learner evaluation and measurement of training effectiveness.",
  },
  {
    icon: HardHat,
    title: "Practical on-site delivery",
    body: "Sessions run in your own kitchen wherever possible — walking the receiving dock, storage, prep areas, sinks and holding counters with the team that works them.",
  },
];

export function WhyDinesh() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Dinesh Saxena"
          title="An operator's instinct with a trainer's discipline"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-background p-7 text-center"
            >
              <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-soft">
                <Icon className="size-5 text-emerald" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
