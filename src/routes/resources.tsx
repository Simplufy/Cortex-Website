import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { FinalCtaBlock } from "@/components/pages/inner";
import { ARTICLES, articlesByCategory } from "@/data/articles";
import { RevealSection } from "@/components/reveal";
import { breadcrumbJsonLd, collectionJsonLd, faqJsonLd, jsonLdScript, pageHead } from "@/lib/seo";

const RESOURCES_FAQS = [
  {
    q: "What are these field notes?",
    a: "Long-form notes from Cortex work in shops and trades: how leftover work actually moves, what we installed at Detail Driven in Jackson Hole, and what an agent can watch without replacing the software already in the building.",
  },
  {
    q: "Are the numbers from a real shop?",
    a: "The stack, shop types, and jobs we installed at Detail Driven are real. Hours saved and dollars recovered are not on these pages until they are measured and the operator will stand behind them. Figures in the automotive film are illustrations of a stall, not published KPIs.",
  },
  {
    q: "Do you replace Tekmetric, CCC ONE, or ServiceTitan?",
    a: "No. Systems of record stay. We connect collectors and agents to the leftover work (follow-up, monitoring, reporting) and the same build includes a secure dashboard.",
  },
  {
    q: "Why don’t these articles link out to sources?",
    a: "We name the sources, Bureau of Labor Statistics, Auto Care Association, CCC Intelligent Solutions help, NIST AI RMF, CIECA, I-CAR, ASA, the 2007 Lead Response Management study, so you can find them. The pages themselves stay on this site.",
  },
  {
    q: "How do I get this in my shop?",
    a: "Start with a free AI operations audit. Thirty minutes on how the work moves. You leave with a map even if we never build.",
  },
];

export const Route = createFileRoute("/resources")({
  head: () => {
    const base = pageHead({
      title: "Field Notes on AI for Auto Shops and Service Businesses",
      description:
        "Thirteen field notes from Cortex: private AI in Jackson Hole auto shops, CCC ONE EMS exports, declined work, missed calls, Google Ads versus cars booked, and how the audit works.",
      path: "/resources",
    });
    return {
      ...base,
      scripts: [
        jsonLdScript(
          collectionJsonLd(ARTICLES.map((p) => ({ title: p.title, path: `/blog/${p.slug}` }))),
        ),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
          ]),
        ),
        jsonLdScript(faqJsonLd(RESOURCES_FAQS)),
      ],
    };
  },
  component: Page,
});

function Page() {
  const groups = articlesByCategory();
  return (
    <>
      <PageHero
        eyebrow="Field notes"
        title="Notes from shops, not from a ChatGPT window."
        body="How leftover work actually moves in auto repair, HVAC, and other service businesses, and how custom agents get implemented in the software you already run, without you having to learn AI."
        primary={{ to: "/audit", label: "Get Your Free AI Operations Audit" }}
        secondary={{ to: "/case-studies", label: "Read the case study" }}
      />

      <RevealSection className="border-t border-fg/5 pt-16 pb-8 sm:pt-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-medium tracking-tight text-fg sm:text-3xl">What this library is</h2>
          <p className="mt-5 text-base leading-relaxed font-light text-fg/70 sm:text-lg">
            Cortex builds custom AI systems for established service businesses. These pages are the long form of that
            work: field notes, not a blog about ChatGPT. We write from an install we can stand behind, Detail Driven
            Enterprises in Jackson Hole, Wyoming, across mechanical repair, collision, detailing, and glass, and from
            the stalls we hear every week on audit calls. Repair lives in Tekmetric. Collision lives in CCC ONE.
            Conversations live in GoHighLevel. Money lives in QuickBooks and Stripe. Demand lives in Google Ads, Meta,
            Google Business Profile, GA4, and Search Console. A person was still the integration. We installed
            collectors, a local EMS bridge, an operator dashboard, and agents with jobs: follow-up, monitoring,
            reporting.
          </p>
          <p className="mt-5 text-base leading-relaxed font-light text-fg/70 sm:text-lg">
            The Bureau of Labor Statistics counted about 825,800 automotive service technicians and mechanics in the
            United States in 2025. The Auto Care Association put U.S. light-duty aftermarket sales at $413.7 billion in
            2024, with a fleet averaging more than twelve years on the road. CCC Intelligent Solutions documents EMS
            exports from CCC ONE. NIST published an AI Risk Management Framework in 2023. We name those sources because
            they are real. We do not link out. We do not invent ROI. Hours saved and dollars recovered go on a page when
            they are measured and the operator will stand behind them.
          </p>
          <p className="mt-5 text-base leading-relaxed font-light text-fg/70 sm:text-lg">
            If you run an auto shop, start with the{" "}
            <Link to="/audit/$slug" params={{ slug: "automotive" }} className="text-gold hover:underline">
              automotive audit
            </Link>{" "}
            and the{" "}
            <Link to="/case-studies/$slug" params={{ slug: "detail-driven" }} className="text-gold hover:underline">
              Detail Driven case study
            </Link>
            . If you run HVAC, plumbing, electrical, roofing, pest, or another trade, start with the audit for your
            industry , {" "}
            <Link to="/audit/$slug" params={{ slug: "hvac" }} className="text-gold hover:underline">
              HVAC
            </Link>
            ,{" "}
            <Link to="/audit/$slug" params={{ slug: "plumbing" }} className="text-gold hover:underline">
              plumbing
            </Link>
            ,{" "}
            <Link to="/audit/$slug" params={{ slug: "electrical" }} className="text-gold hover:underline">
              electrical
            </Link>
            , and the rest. The coordination problem is the same even though we have not published a case study in those
            verticals.
          </p>
        </div>
      </RevealSection>

      {groups.map((g) => (
        <RevealSection key={g.category} className="pt-12 pb-8 sm:pt-16 sm:pb-12">
          <SectionHead kicker={g.category} title={g.title} body={g.blurb} />
          <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-2">
            {g.posts.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="rounded-2xl border border-fg/10 bg-surface p-6 transition-colors hover:border-gold/30 sm:p-8"
              >
                <div className="text-[10px] font-bold tracking-widest text-gold uppercase">{p.category}</div>
                <h3 className="mt-2 text-xl font-medium text-fg">{p.title}</h3>
                <p className="mt-3 text-sm font-light text-fg/60">{p.excerpt}</p>
                <p className="mt-5 text-xs text-fg/40">
                  {p.author} · {p.date} · {p.minutes} min read
                </p>
              </Link>
            ))}
          </div>
        </RevealSection>
      ))}

      <RevealSection className="border-t border-fg/5 pt-16 pb-8 sm:pt-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-medium tracking-tight text-fg sm:text-3xl">How we write these</h2>
          <p className="mt-5 text-base leading-relaxed font-light text-fg/70 sm:text-lg">
            Every note has a stall, a system of record, a job an agent can watch, and a line we will not cross. We name
            software as examples, then confirm access in the audit. We name public sources without turning the page into
            a bibliography of outbound links. We do not attribute Detail Driven’s facts to a shop we have not seen. We
            do not hide the dashboard as a later offer; it ships in the same build. We do not sell a pack of agents. If
            a vendor will not let us in, we say so before anyone pays.
          </p>
          <p className="mt-5 text-base leading-relaxed font-light text-fg/70 sm:text-lg">
            Use the notes as a map of leftover work, not as a DIY install guide. The architecture at Detail Driven , 
            private Linux hardware, a CCC EMS folder bridge, hybrid inference, least privilege, is a shape, not a kit.
            Your first deployment is usually one or two paths. The rest is a conversation about whether the leftover
            work actually justifies a build.
          </p>
        </div>
      </RevealSection>

      <RevealSection className="pt-12 pb-16 sm:pt-16 sm:pb-12">
        <SectionHead
          kicker="FAQ"
          title="Questions operators ask before they book the audit"
          body="Short answers. The long versions live in the notes above."
        />
        <dl className="mx-auto max-w-3xl space-y-8 px-4 sm:px-6">
          {RESOURCES_FAQS.map((f) => (
            <div key={f.q}>
              <dt>
                <h3 className="text-lg font-medium text-fg">{f.q}</h3>
              </dt>
              <dd className="mt-2 text-sm leading-relaxed font-light text-fg/65 sm:text-base">{f.a}</dd>
            </div>
          ))}
        </dl>
      </RevealSection>

      <FinalCtaBlock
        title="Find the leftover work in your shop."
        body="Start with a Free AI Operations Audit. We'll show you what is worth automating, what isn't, and what a practical first deployment could look like."
      />
    </>
  );
}
