import { MapPin, Phone, ShieldCheck } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#industries", label: "Industry Solutions" },
  { href: "#book", label: "Book Batch" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-md bg-navy-foreground/10">
                <ShieldCheck className="size-5 text-gold" aria-hidden="true" />
              </span>
              <p className="text-sm font-bold">Dinesh Saxena</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">
              Advanced FoSTaC &amp; Food Safety Trainer. Master Trainer – Advanced Catering FoSTaC |
              TATA STRIVE Certified | Ex-Taj &amp; Taj SATS | IHM Dadar alumnus.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-navy-foreground/75 transition-colors hover:text-navy-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-navy-foreground/75">
              <li>
                <a
                  href="tel:+919820274960"
                  className="inline-flex items-center gap-2 transition-colors hover:text-navy-foreground"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  +91 98202 74960
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="size-4" aria-hidden="true" />
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-foreground/12 pt-6">
          <p className="text-xs leading-relaxed text-navy-foreground/55">
            Independent Food Safety Trainer delivering FSSAI FoSTaC-aligned training modules.
          </p>
          <p className="mt-2 text-xs text-navy-foreground/45">
            &copy; {new Date().getFullYear()} Dinesh Saxena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
