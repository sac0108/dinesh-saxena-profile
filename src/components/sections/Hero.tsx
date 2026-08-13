import { ArrowRight, BadgeCheck, Phone, ShieldCheck, Thermometer, ClipboardCheck } from "lucide-react";

import profileAsset from "@/assets/dinesh-saxena-profile.jpg.asset.json";

import { Button } from "@/components/ui/button";

const badges = [
  "IHM Dadar Alumnus",
  "Ex-Taj & Taj SATS Leader",
  "TATA STRIVE Certified Trainer",
  "FSSAI Advanced FoSTaC Aligned",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy pt-28 pb-20 text-navy-foreground sm:pt-32 lg:pt-40 lg:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(19,117,71,0.55), transparent 45%), radial-gradient(circle at 85% 15%, rgba(212,175,55,0.35), transparent 40%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:px-8">
        <div className="reveal">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-gold uppercase">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            Master Trainer — Advanced Catering FoSTaC
          </p>

          <h1 className="mt-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
            FSSAI-Compliant Advanced Catering FoSTaC Training by Taj &amp; IHM Dadar Veteran{" "}
            <span className="text-gold">Dinesh Saxena</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
            Empowering flight kitchens, fine-dining brigades, cloud kitchens and institutional
            caterers with food safety leadership, GHP/GMP discipline and genuine audit readiness —
            delivered as practical kitchen behaviour, not classroom theory.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-emerald text-emerald-foreground hover:bg-emerald/90"
            >
              <a href="#book">
                Schedule a Training Batch
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-navy-foreground/30 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
            >
              <a href="#curriculum">View Training Modules</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-gold hover:bg-gold/10 hover:text-gold"
            >
              <a href="tel:+919820274960">
                <Phone className="size-4" aria-hidden="true" />
                Call +91 98202 74960
              </a>
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2.5">
            {badges.map((b) => (
              <li
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-navy-foreground/15 bg-navy-foreground/5 px-3 py-1.5 text-xs font-medium text-navy-foreground/90"
              >
                <BadgeCheck className="size-3.5 text-emerald" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal relative">
          <div className="mx-auto max-w-sm rounded-2xl border border-navy-foreground/15 bg-navy-foreground/[0.06] p-6 backdrop-blur-sm">
            <img
              src={profileAsset.url}
              alt="Dinesh Saxena — Master Trainer for Advanced Catering FoSTaC and Food Safety"
              className="aspect-4/5 w-full rounded-xl border border-navy-foreground/10 object-cover object-top"
            />
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {[
                { icon: ShieldCheck, label: "GHP / GMP" },
                { icon: Thermometer, label: "Time & Temp" },
                { icon: ClipboardCheck, label: "Audit Ready" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-lg border border-navy-foreground/10 bg-navy-foreground/5 px-2 py-3"
                >
                  <Icon className="mx-auto size-4 text-gold" aria-hidden="true" />
                  <p className="mt-1.5 text-[11px] font-medium text-navy-foreground/80">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
