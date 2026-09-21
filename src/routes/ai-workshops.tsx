import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { CardGrid, ExamplePanel, InfoCard, NumberedBlocks, ProofCallout } from "@/components/pages/inner";
import { BeamButton } from "@/components/ui/beam-button";
import { RevealSection } from "@/components/reveal";
import { pageHead } from "@/lib/seo";
import { AgentTerminal, SERVICE_SESSIONS } from "@/components/fx/agent-terminal";
import { submitWorkshop, WORKSHOP_AUDIENCES } from "@/lib/submit-audit";
import { DETAIL_DRIVEN_PROOF, WORKSHOPS_PAGE } from "@/data/service-pages";

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
        title="A practical AI workshop for owners who don't want to become AI people."
        body="How to put AI to work inside the software a business already runs, not how to prompt ChatGPT. For trade associations, franchise groups, PE portfolios, chambers, peer groups, and software user groups."
        primary={{ href: "#request", label: "Request a Free Workshop" }}
      />
      <RevealSection className="border-t border-fg/5 py-12 sm:py-16">
        <SectionHead
          title="What we actually cover"
          body="The room leaves knowing what is worth automating, what is not, and what the first ninety days could look like. We walk leftover work and a real deployment, not a chatbot demo."
        />
        <CardGrid cols="md:grid-cols-2">
          {WORKSHOPS_PAGE.agenda.map((item) => (
            <InfoCard key={item.title} title={item.title} body={item.body} />
          ))}
        </CardGrid>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 py-12 sm:py-16">
        <SectionHead
          title="How a session runs"
          body="Operators, not an IT conference. Format follows the room. They leave with a map, not a recap deck."
        />
        <NumberedBlocks items={WORKSHOPS_PAGE.how} />
      </RevealSection>
      <RevealSection className="border-t border-fg/5 py-12 sm:py-14">
        <SectionHead
          title="The file we will walk"
          body="Leadership rooms ask for proof. We will not invent a recovered-revenue number. We will walk Detail Driven."
        />
        <ProofCallout
          kicker={DETAIL_DRIVEN_PROOF.kicker}
          title={DETAIL_DRIVEN_PROOF.title}
          body={DETAIL_DRIVEN_PROOF.body}
          facts={DETAIL_DRIVEN_PROOF.facts}
          slug="detail-driven"
        />
      </RevealSection>
      <RevealSection className="pb-12">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-2">
          {WORKSHOPS_PAGE.examples.map((ex) => (
            <ExamplePanel key={ex.title} {...ex} />
          ))}
        </div>
      </RevealSection>
      <AgentTerminal session={SERVICE_SESSIONS.workshops} />
      <RevealSection className="border-t border-fg/5 py-12 sm:py-16">
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
    <RevealSection id="request" className="border-t border-fg/5 py-12 sm:py-16">
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
