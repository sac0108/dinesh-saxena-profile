import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";

import { curriculum } from "@/data/curriculum";
import { cn } from "@/lib/utils";

import { SectionHeading } from "./SectionHeading";

export function Curriculum() {
  const [activeId, setActiveId] = useState(curriculum[0].id);
  const active = curriculum.find((m) => m.id === activeId) ?? curriculum[0];

  return (
    <section id="curriculum" className="scroll-mt-24 bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Advanced Catering FoSTaC"
          title="Explore the curriculum, module by module"
          description="Ten learning areas drawn from the Advanced Catering FoSTaC training deck — from statutory context and hazard fundamentals through to documentation, verification and consumer information."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-8">
          <div
            role="tablist"
            aria-label="Curriculum modules"
            aria-orientation="vertical"
            className="flex flex-col gap-1.5"
          >
            {curriculum.map((m, i) => {
              const selected = m.id === activeId;
              return (
                <button
                  key={m.id}
                  role="tab"
                  id={`tab-${m.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${m.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(m.id)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                      e.preventDefault();
                      const next =
                        (i + (e.key === "ArrowDown" ? 1 : -1) + curriculum.length) %
                        curriculum.length;
                      setActiveId(curriculum[next].id);
                      document.getElementById(`tab-${curriculum[next].id}`)?.focus();
                    }
                  }}
                  className={cn(
                    "group flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-colors",
                    selected
                      ? "border-navy bg-navy text-navy-foreground"
                      : "border-border bg-background hover:border-emerald/40 hover:bg-emerald-soft/60",
                  )}
                >
                  <span
                    className={cn(
                      "text-xs font-bold tabular-nums",
                      selected ? "text-gold" : "text-emerald",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-sm font-semibold">{m.title}</span>
                  <ChevronRight
                    aria-hidden="true"
                    className={cn(
                      "size-4 shrink-0 transition-transform",
                      selected ? "translate-x-0.5 text-gold" : "text-muted-foreground",
                    )}
                  />
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            tabIndex={0}
            className="rounded-2xl border border-border bg-background p-7 lg:sticky lg:top-24 lg:self-start lg:p-9"
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-emerald uppercase">
              Module {String(curriculum.findIndex((m) => m.id === active.id) + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-navy">{active.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.summary}</p>

            <ul className="mt-7 grid gap-3.5">
              {active.topics.map((t) => (
                <li key={t} className="flex gap-3 rounded-lg bg-surface px-4 py-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-emerald" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
              Module content reflects the Advanced Catering FoSTaC training deck. Reference values
              quoted in sessions are presented as training-deck content; operators should always
              confirm current FSSAI requirements applicable to their licence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
