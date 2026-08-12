import { Building2, ClipboardList, GraduationCap, Plane } from "lucide-react";

const items = [
  { icon: GraduationCap, title: "30+ Years", body: "Hospitality, F&B operations and training experience" },
  { icon: Building2, title: "IHM Dadar & Taj Lineage", body: "Trained and grown within India's most demanding hospitality culture" },
  { icon: Plane, title: "Taj SATS Exposure", body: "Airline-catering hygiene and cold-chain rigour" },
  { icon: ClipboardList, title: "Audit Preparedness", body: "SOPs, records and verification built into every batch" },
];

export function TrustStrip() {
  return (
    <section aria-label="Credentials" className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex gap-3.5 px-2 py-4">
            <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-soft">
              <Icon className="size-5 text-emerald" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-navy">{title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
