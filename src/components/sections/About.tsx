import { Quote } from "lucide-react";

import { brand } from "@/data/brand";

import { SectionHeading } from "./SectionHeading";

const timeline = [
  {
    period: "Foundation",
    title: "IHM Dadar, Mumbai",
    body: "Formal hotel management training that established the operational fundamentals of kitchen craft, service standards and hygiene discipline.",
  },
  {
    period: "Hospitality Career",
    title: "The Taj ecosystem",
    body: "Years within one of India's most exacting hospitality cultures, working across food and beverage operations where consistency and guest safety are non-negotiable.",
  },
  {
    period: "Transition",
    title: "Learning & Development / Corporate Training",
    body: "A move from running operations to building capability — designing and delivering training for frontline teams and supervisors.",
  },
  {
    period: "Airline Catering",
    title: "Senior Training Specialist, Taj SATS Mumbai",
    body: "Training exposure in the flight-kitchen environment, where cold chain, batch production, hold times and documentation carry exceptional scrutiny.",
  },
  {
    period: "Training & Development",
    title: "Building operational capability",
    body: "Applying structured learning methods to competency mapping, session design, learner evaluation and the measurement of training effectiveness.",
  },
  {
    period: "Today",
    title: "Independent Trainer & Consultant",
    body: "An active independent practice supporting food businesses through FSSAI-aligned Advanced Catering FoSTaC programs, operational training and practical food-safety guidance.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={`About ${brand.displayName}`}
          title="A hospitality career shaped by service, discipline and operational precision"
          description={`${brand.displayName} is a ${brand.city.name}-based veteran hospitality professional, food-safety specialist, trainer and independent consultant. From his foundation at IHM Dadar through the Taj ecosystem, F&B operations, learning and development, and Taj SATS airline catering, his work has remained grounded in the realities of teams, kitchens and service environments. Today, he brings that experience to independent training and consulting, translating food-safety standards into practical operational behaviour.`}
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <ol className="relative space-y-8 border-l border-border pl-6">
            {timeline.map((t) => (
              <li key={t.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[1.6875rem] size-3 rounded-full border-2 border-background bg-emerald"
                />
                <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  {t.period}
                </p>
                <h3 className="mt-1 text-lg font-bold text-navy">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </li>
            ))}
          </ol>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-surface p-7">
              <Quote className="size-7 text-gold" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-navy">Trainer&rsquo;s philosophy</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                &ldquo;Effective food safety is not created by rules alone. It is created when standards
                become part of everyday operational behaviour.&rdquo;
              </p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-sm font-semibold text-navy">{brand.displayName}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {brand.descriptor}
                  <br />
                  IHM Dadar Alumnus | Ex-Taj &amp; Taj SATS | {brand.city.display}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
