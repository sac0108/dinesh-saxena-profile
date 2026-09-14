import { createFileRoute } from "@tanstack/react-router";

import { Toaster } from "@/components/ui/sonner";
import { SiteNav } from "@/components/sections/SiteNav";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { About } from "@/components/sections/About";
import { ProfessionalJourney } from "@/components/sections/ProfessionalJourney";
import { Curriculum } from "@/components/sections/Curriculum";
import { Journey } from "@/components/sections/Journey";
import { Industries } from "@/components/sections/Industries";
import { WhyDinesh } from "@/components/sections/WhyDinesh";
import { Outcomes } from "@/components/sections/Outcomes";
import { Inquiry } from "@/components/sections/Inquiry";
import { Footer } from "@/components/sections/Footer";
import { brand, verifiedSocialLinks } from "@/data/brand";

const title = `${brand.displayName} | Hospitality & Food Safety`;
const description =
  `Veteran hospitality professional, food-safety specialist, trainer and independent consultant. IHM Dadar alumnus, ex-Taj and Taj SATS, ${brand.city.name}.`;

const socialUrls = verifiedSocialLinks.flatMap(([, channel]) =>
  channel.url ? [channel.url] : [],
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      ...(brand.canonicalWebsiteUrl
        ? [{ property: "og:url", content: brand.canonicalWebsiteUrl }]
        : []),
      ...(brand.assets.openGraphImage
        ? [
            { property: "og:image", content: brand.assets.openGraphImage },
            { name: "twitter:image", content: brand.assets.openGraphImage },
          ]
        : []),
      {
        name: "twitter:card",
        content: brand.assets.openGraphImage ? "summary_large_image" : "summary",
      },
    ],
    links: brand.canonicalWebsiteUrl
      ? [{ rel: "canonical", href: brand.canonicalWebsiteUrl }]
      : [],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: brand.displayName,
          jobTitle: brand.descriptor.replaceAll(" · ", ", "),
          telephone: brand.phone.e164,
          address: {
            "@type": "PostalAddress",
            addressLocality: brand.city.name,
            addressCountry: "IN",
          },
          alumniOf: "IHM Dadar, Mumbai",
          ...(brand.canonicalWebsiteUrl ? { url: brand.canonicalWebsiteUrl } : {}),
          ...(socialUrls.length > 0 ? { sameAs: socialUrls } : {}),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <ProfessionalJourney />
        <Curriculum />
        <Journey />
        <Industries />
        <WhyDinesh />
        <Outcomes />
        <Inquiry />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
