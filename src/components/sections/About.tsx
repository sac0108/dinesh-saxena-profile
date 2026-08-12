import { Quote } from "lucide-react";

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
    period: "Certification",
    title: "TATA STRIVE certified trainer",
    body: "Structured trainer pedagogy: competency mapping, session design, learner evaluation and measurement of training effectiveness.",
  },
  {
    period: "Today",
    title: "Independent Master Trainer",
    body: "Post-retirement freelance practice delivering FSSAI-aligned Advanced Catering FoSTaC programs to food businesses across India.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About the trainer"
          title="Three decades of hospitality rigour, now taught on the kitchen floor"
          description="Dinesh Saxena is a veteran Food Safety Specialist and Certified Advanced FoSTaC Trainer based in Mumbai. His approach is shaped by having run the operations he now trains — hotel kitchens, banqueting, and airline catering at scale."
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
                &ldquo;A regulation only protects the guest when a food handler changes what they do
                at the sink, the receiving dock and the holding counter. My work is to convert food
                safety rules into practical kitchen behaviour that survives a busy service.&rdquo;
              </p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-sm font-semibold text-navy">Dinesh Saxena</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Master Trainer – Advanced Catering FoSTaC &amp; Food Safety
                  <br />
                  TATA STRIVE Certified | Ex-Taj &amp; Taj SATS | Mumbai, India
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
