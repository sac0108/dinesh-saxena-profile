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

const title = "Dinesh Saxena — Hospitality & Food Safety Professional";
const description =
  "Veteran hospitality professional, food-safety specialist, trainer and independent consultant. IHM Dadar alumnus, ex-Taj and Taj SATS, Mumbai.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Dinesh Saxena",
          jobTitle: "Hospitality Professional, Food Safety Specialist, Trainer and Independent Consultant",
          telephone: "+91-9820274960",
          address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
          alumniOf: "IHM Dadar, Mumbai",
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
