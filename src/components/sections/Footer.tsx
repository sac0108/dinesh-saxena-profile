import {
  AtSign,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  ShieldCheck,
  Youtube,
} from "lucide-react";

import { brand, verifiedSocialLinks, type SocialKey } from "@/data/brand";

const links = [
  { href: "#about", label: "About" },
  { href: "#professional-journey", label: "Work & Journey" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#industries", label: "Industry Solutions" },
  { href: "#book", label: "Book Batch" },
];

const socialIcons: Record<SocialKey, typeof Linkedin> = {
  linkedIn: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
  x: AtSign,
};

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              {brand.assets.primaryLogo ? (
                <img src={brand.assets.primaryLogo} alt="" className="size-9 object-contain" />
              ) : (
                <span
                  className="flex size-9 items-center justify-center rounded-md bg-navy-foreground/10"
                  aria-hidden="true"
                >
                  <ShieldCheck className="size-5 text-gold" />
                </span>
              )}
              <p className="text-sm font-bold">{brand.displayName}</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">
              Veteran hospitality professional, food-safety specialist, trainer and independent
              consultant. Ex-Taj &amp; Taj SATS | IHM Dadar alumnus.
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
                  href={brand.phone.href}
                  className="inline-flex items-center gap-2 transition-colors hover:text-navy-foreground"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {brand.phone.display}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="size-4" aria-hidden="true" />
                {brand.city.display}
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
              Digital Presence
            </p>
            {verifiedSocialLinks.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Verified social profiles">
                {verifiedSocialLinks.map(([key, channel]) => {
                  const Icon = socialIcons[key];
                  if (!channel.url) return null;

                  return (
                    <li key={key}>
                      <a
                        href={channel.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${brand.displayName} on ${channel.label}`}
                        title={channel.handle ?? channel.label}
                        className="flex size-10 items-center justify-center rounded-md border border-navy-foreground/15 text-navy-foreground/75 transition-colors hover:border-gold/50 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                      >
                        <Icon className="size-4" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/65">
                Official channels will be listed here after owner verification.
              </p>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-navy-foreground/12 pt-6">
          <p className="text-xs leading-relaxed text-navy-foreground/55">
            Independent hospitality professional delivering food-safety training, FoSTaC-aligned
            programmes and practical consulting support.
          </p>
          <p className="mt-2 text-xs text-navy-foreground/45">
            &copy; {new Date().getFullYear()} {brand.displayName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
