import { journey } from "@/data/curriculum";

import { SectionHeading } from "./SectionHeading";

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-24 bg-navy py-20 text-navy-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">
            The practical training journey
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            From regulation on paper to behaviour on the line
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-foreground/75">
            Every session follows the same operational logic, so food handlers and supervisors leave
            with a chain of reasoning they can apply to any new hazard they meet.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {journey.map((s) => (
            <li
              key={s.step}
              className="relative rounded-xl border border-navy-foreground/12 bg-navy-foreground/[0.05] p-6"
            >
              <span className="text-sm font-bold text-gold tabular-nums">{s.step}</span>
              <h3 className="mt-2.5 text-base font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
