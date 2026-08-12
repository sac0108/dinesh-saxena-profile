import { Building2, Plane, Utensils, Bike } from "lucide-react";

import { industries } from "@/data/curriculum";

import { SectionHeading } from "./SectionHeading";

const icons = [Plane, Utensils, Bike, Building2];

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industry solutions"
          title="Tailored to how your kitchen actually operates"
          description="The FoSTaC syllabus is common; the emphasis is not. Each programme is weighted towards the controls that carry the most risk in your operating model."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {industries.map((item, i) => {
            const Icon = icons[i] ?? Building2;
            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-emerald/40"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                  <Icon className="size-5 text-gold" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
