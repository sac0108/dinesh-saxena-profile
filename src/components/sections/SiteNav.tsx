import { useEffect, useState } from "react";
import { Menu, Phone, ShieldCheck, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#journey", label: "Training Journey" },
  { href: "#industries", label: "Industry Solutions" },
  { href: "#outcomes", label: "Outcomes" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-md bg-navy text-navy-foreground">
            <ShieldCheck className="size-5 text-gold" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-tight text-navy">
              Dinesh Saxena
            </span>
            <span className="block text-[11px] font-medium tracking-wide text-muted-foreground">
              Advanced FoSTaC &amp; Food Safety Trainer
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outline" size="sm">
            <a href="tel:+919820274960">
              <Phone className="size-4" aria-hidden="true" />
              +91 98202 74960
            </a>
          </Button>
          <Button asChild size="sm" className="bg-emerald text-emerald-foreground hover:bg-emerald/90">
            <a href="#book">Schedule a Batch</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border text-navy lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/85 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 grid gap-2">
              <Button asChild className="bg-emerald text-emerald-foreground hover:bg-emerald/90">
                <a href="#book" onClick={() => setOpen(false)}>
                  Schedule a Training Batch
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:+919820274960">
                  <Phone className="size-4" aria-hidden="true" />
                  Call +91 98202 74960
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
