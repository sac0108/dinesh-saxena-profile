import { useState, type FormEvent } from "react";
import { Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { brand } from "@/data/brand";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  organization: z.string().trim().min(2, "Please enter your organization").max(120),
  entityType: z.string().min(1, "Please select an entity type"),
  batchSize: z.string().min(1, "Please select a batch size"),
  city: z.string().trim().min(2, "Please enter a location or city").max(100),
  mobile: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{8,16}$/, "Please enter a valid mobile number"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  notes: z.string().trim().max(1000).optional(),
});

const entityTypes = [
  "Flight Kitchen",
  "Hotel",
  "Restaurant / QSR",
  "Cloud Kitchen",
  "Corporate Cafeteria",
  "Recruiter / Training Agency",
  "Other",
];
const batchSizes = ["1–10", "10–25", "25–50", "50+"];

export function Inquiry() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const result = schema.safeParse(data);

    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please correct the highlighted fields.");
      return;
    }

    setErrors({});
    form.reset();
    toast.success("Training request captured", {
      description:
        `First-iteration demo: this form is not yet connected, so nothing was emailed or stored. Please call ${brand.phone.display} for an immediate response.`,
    });
  };

  const field = (name: string) => ({
    id: name,
    name,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const Err = ({ name }: { name: string }) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-1.5 text-xs text-destructive">
        {errors[name]}
      </p>
    ) : null;

  return (
    <section id="book" className="scroll-mt-24 bg-surface py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald uppercase">
            Book a batch
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance text-navy sm:text-4xl">
            Request an Advanced Catering FoSTaC training proposal
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Share your operation, batch size and preferred dates. You will receive a proposal
            covering module emphasis, session duration and on-site delivery logistics.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-background p-6">
            <p className="text-sm font-semibold text-navy">Need to speak to the trainer now?</p>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Urgent batches and short-notice audit preparation are best handled over a call.
            </p>
            <Button asChild size="lg" className="mt-5 w-full bg-navy text-navy-foreground hover:bg-navy/90">
              <a href={brand.phone.href}>
                <Phone className="size-4" aria-hidden="true" />
                Call {brand.phone.display}
              </a>
            </Button>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            First iteration: this enquiry form validates input and confirms on screen only. It is
            not yet connected to email or a database.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-2xl border border-border bg-background p-7 lg:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input {...field("name")} className="mt-2" placeholder="Your name" />
              <Err name="name" />
            </div>
            <div>
              <Label htmlFor="organization">Organization / agency</Label>
              <Input {...field("organization")} className="mt-2" placeholder="Company name" />
              <Err name="organization" />
            </div>
            <div>
              <Label htmlFor="entityType">Entity type</Label>
              <select
                {...field("entityType")}
                defaultValue=""
                className="mt-2 h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <option value="" disabled>
                  Select entity type
                </option>
                {entityTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <Err name="entityType" />
            </div>
            <div>
              <Label htmlFor="batchSize">Batch size</Label>
              <select
                {...field("batchSize")}
                defaultValue=""
                className="mt-2 h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <option value="" disabled>
                  Select batch size
                </option>
                {batchSizes.map((t) => (
                  <option key={t} value={t}>
                    {t} participants
                  </option>
                ))}
              </select>
              <Err name="batchSize" />
            </div>
            <div>
              <Label htmlFor="city">Location / city</Label>
              <Input {...field("city")} className="mt-2" placeholder="e.g. Mumbai" />
              <Err name="city" />
            </div>
            <div>
              <Label htmlFor="mobile">Mobile</Label>
              <Input {...field("mobile")} type="tel" className="mt-2" placeholder="+91 …" />
              <Err name="mobile" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input {...field("email")} type="email" className="mt-2" placeholder="you@company.com" />
              <Err name="email" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="notes">Preferred dates / special requirements</Label>
              <Textarea
                {...field("notes")}
                rows={4}
                className="mt-2"
                placeholder="Preferred training window, shift timings, languages, site details…"
              />
              <Err name="notes" />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-7 w-full bg-emerald text-emerald-foreground hover:bg-emerald/90"
          >
            <Send className="size-4" aria-hidden="true" />
            Request Training Proposal
          </Button>
        </form>
      </div>
    </section>
  );
}
