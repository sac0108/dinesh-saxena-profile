import { BriefcaseBusiness, CalendarDays, Mic2 } from "lucide-react";

import { professionalEngagements } from "@/data/engagements";
import { brand } from "@/data/brand";

import { SectionHeading } from "./SectionHeading";

const futureFormats = [
  { icon: CalendarDays, label: "Training sessions & workshops" },
  { icon: BriefcaseBusiness, label: "Consulting & collaborations" },
  { icon: Mic2, label: "Events & speaking engagements" },
];

export function ProfessionalJourney() {
  return (
    <section id="professional-journey" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Work & professional journey"
          title="An active practice, documented with purpose"
          description={`This evolving record will bring together verified training, consulting, industry and education engagements as ${brand.displayName}'s independent professional practice grows. Each future update will have its own shareable detail page, keeping this website the central source of truth.`}
        />

        {professionalEngagements.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {professionalEngagements.map((engagement) => (
              <article key={engagement.slug} className="border-t-2 border-gold pt-5">
                <p className="text-xs font-semibold text-emerald uppercase">{engagement.category}</p>
                <h3 className="mt-2 text-lg font-bold text-navy">{engagement.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {engagement.summary}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 border-y border-border py-8">
            <p className="text-sm font-semibold text-navy">Professional updates are being prepared.</p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              This space is intentionally reserved for verified future activity. No unverified past
              engagements or placeholder achievements are shown.
            </p>
            <ul className="mt-7 grid gap-4 md:grid-cols-3">
              {futureFormats.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm font-medium text-foreground/85">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-emerald-soft">
                    <Icon className="size-4 text-emerald" aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Verified professional and social channels can be connected here when official profile
          links are available.
        </p>
      </div>
    </section>
  );
}