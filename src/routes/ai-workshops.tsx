import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { CardGrid, InfoCard } from "@/components/pages/inner";
import { BeamButton } from "@/components/ui/beam-button";
import { RevealSection } from "@/components/reveal";
import { pageHead } from "@/lib/seo";
import { submitWorkshop, WORKSHOP_AUDIENCES } from "@/lib/submit-audit";

export const Route = createFileRoute("/ai-workshops")({
  head: () =>
    pageHead({
      title: "AI Workshops for Service Businesses",
      description:
        "A practical AI workshop for service-business owners and leadership teams. Trade associations, franchise groups, PE portfolios, chambers, and peer groups.",
      path: "/ai-workshops",
    }),
  component: Page,
});

const inputCls =
  "w-full rounded-lg border border-fg/10 bg-bg px-3 py-2.5 text-sm text-fg outline-none placeholder:text-fg/30 focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/60";

function Page() {
  return (
    <>
      <PageHero
        eyebrow="AI Workshops"
        title="A practical AI workshop for service-business owners and leadership teams."
        body="How to put AI to work inside the software a business already runs. For trade associations, franchise groups, PE portfolios, chambers, peer groups, and software user groups."
        primary={{ href: "#request", label: "Request a Free Workshop" }}
      />
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="How to build an AI system inside your business"
          body="A working session, not a product pitch. The goal is that the room leaves knowing what is worth automating, what is not, and what the first ninety days could look like."
        />
        <CardGrid cols="md:grid-cols-2 lg:grid-cols-4">
          <InfoCard title="Agents vs chatbots" body="What continuously watches a workflow versus what waits for a prompt." />
          <InfoCard title="What you can automate now" body="Follow-up, monitoring, reporting, exceptions. The leftover work between systems." />
          <InfoCard title="Local vs cloud" body="When work should stay on hardware you control, and when a cloud model is the right tool." />
          <InfoCard title="Connecting existing software" body="APIs, webhooks, and what to do when a vendor has no usable interface." />
          <InfoCard title="Security and permissions" body="Least privilege, approval, logs, and who owns the credentials." />
          <InfoCard title="Hardware options" body="Cloud, dedicated local, or hybrid — designed around the workload, not a vendor story." />
          <InfoCard title="A real deployment" body="What this looks like inside a multi-business automotive operation." />
          <InfoCard title="What should stay human" body="Judgment, money, and customer promises. The work you would not hand a new hire on day one." />
        </CardGrid>
        <p className="mt-10 text-center">
          <Link to="/case-studies/$slug" params={{ slug: "detail-driven" }} className="text-sm font-medium text-gold hover:text-gold-light">
            View the Detail Driven deployment
          </Link>
        </p>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="Who this is for"
          body="Leadership rooms that run service businesses. We speak to the operators, not an IT conference."
        />
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2 px-6">
          {[
            "Trade associations",
            "Franchise groups",
            "PE portfolios",
            "Chambers",
            "Peer groups",
            "Software user groups",
            "Owner organizations",
          ].map((item) => (
            <span key={item} className="rounded-full border border-fg/10 bg-surface px-4 py-2 text-sm text-fg/70">
              {item}
            </span>
          ))}
        </div>
      </RevealSection>
      <WorkshopForm />
    </>
  );
}

function WorkshopForm() {
  const empty = {
    first: "",
    last: "",
    email: "",
    phone: "",
    organization: "",
    audience: "",
    notes: "",
  };
  const [form, setForm] = useState(empty);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const field = (k: keyof typeof empty) => ({
    value: form[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value })),
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      await submitWorkshop({ data: form });
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send. Try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <RevealSection id="request" className="border-t border-fg/5 pt-24 pb-32">
      <SectionHead
        title="Request a free workshop"
        body="Tell us who the room is. We will follow up with format, timing, and whether we are the right fit."
      />
      <div className="mx-auto max-w-xl px-6">
        {sent ? (
          <div className="rounded-2xl border border-fg/10 bg-surface p-8 text-center">
            <h3 className="text-xl font-medium text-fg">Request received.</h3>
            <p className="mt-3 text-sm font-light text-fg/60">We will follow up with next steps.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-3 rounded-2xl border border-fg/10 bg-surface p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">First name</span>
                <input required {...field("first")} className={inputCls} autoComplete="given-name" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Last name</span>
                <input required {...field("last")} className={inputCls} autoComplete="family-name" />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Email</span>
              <input required type="email" {...field("email")} className={inputCls} autoComplete="email" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Phone</span>
              <input type="tel" {...field("phone")} className={inputCls} autoComplete="tel" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Organization</span>
              <input required {...field("organization")} className={inputCls} autoComplete="organization" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Who is the room</span>
              <select required {...field("audience")} className={inputCls}>
                <option value="" disabled>
                  Select
                </option>
                {WORKSHOP_AUDIENCES.map((a) => (
                  <option key={a.value} value={a.value}>
                    {a.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Notes</span>
              <textarea {...field("notes")} rows={4} className={inputCls} placeholder="Group size, city, timing…" />
            </label>
            {error ? <p className="text-sm text-red-400">{error}</p> : null}
            <div className="pt-2">
              <BeamButton type="submit" className="w-full" disabled={busy}>
                {busy ? "Sending…" : "Request a Free Workshop"}
              </BeamButton>
            </div>
          </form>
        )}
      </div>
    </RevealSection>
  );
}
