import { Link } from "@tanstack/react-router";
import { GhostButton } from "@/components/ui/beam-button";
import { FounderPhoto } from "@/components/logo";
import { AuditButton } from "@/components/audit-modal";
import { RevealSection } from "@/components/reveal";
import { AgentTerminal } from "@/components/fx/agent-terminal";
import { BRAND } from "@/data/brand";
import {
  AGENT_CATEGORIES,
  CASE_STUDIES,
  COMPARISON,
  CONNECT_TOOLS,
  FAQS,
  INDUSTRIES,
  PILLARS,
  SOFTWARE_CATEGORIES,
  industryParam,
} from "@/data/site";

export function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Steps />
      <AgentTerminal />
      <Layers />
      <Industries />
      <Trust />
      <Founder />
      <Faq />
      <FinalCta />
    </>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[11px] tracking-wide text-gold">{children}</p>;
}

function Hero() {
  return (
    <>
      <main className="px-4 pt-8 pb-8 sm:px-6 sm:pt-12 sm:pb-10 lg:pt-14">
        <div className="hero-enter mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <h1 className="text-[clamp(1.35rem,5.8vw,3.15rem)] leading-[1.15] font-medium tracking-tight text-fg">
            <span className="block text-gold">Stop trying to learn AI.</span>
            <span className="block">ChatGPT can't run a company.</span>
            <span className="block">Agents inside your software can.</span>
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-fg/55 sm:mt-5 sm:text-lg">
            A chat window waits for a prompt. Cortex implements agents in the systems you already run so leftover work (follow-up, monitoring, reporting) gets done without you becoming the AI person.
          </p>
          <div className="mt-6 flex w-full flex-col items-stretch gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:items-center">
            <AuditButton variant="solid" className="w-full sm:w-auto">
              Get your free audit
            </AuditButton>
            <GhostButton className="w-full sm:w-auto" to="/how-we-work">
              See how it works
            </GhostButton>
          </div>
        </div>
      </main>
      <ToolStrip />
    </>
  );
}

function ToolStrip() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-6 sm:px-6 sm:pb-8">
      <p className="mb-5 text-center font-mono text-[11px] tracking-wide text-fg/40">connect your tools</p>
      <div className="flex flex-wrap justify-center gap-2">
        {CONNECT_TOOLS.slice(0, 16).map((t) => (
          <span
            key={t.name}
            className="inline-flex items-center gap-2 rounded-lg border border-fg/8 bg-elevated px-2.5 py-1.5"
          >
            <img src={`/images/logos/${t.file}`} alt="" width={16} height={16} className="size-4 object-contain" />
            <span className="text-[12px] text-fg/70">{t.name}</span>
          </span>
        ))}
      </div>
      <p className="mt-4 text-center font-mono text-[11px] text-fg/35">confirmed in the audit · not a generic connector list</p>
    </div>
  );
}

function Problem() {
  return (
    <RevealSection id="problem" className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <Kicker>the problem</Kicker>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-fg sm:text-4xl">ChatGPT is not in your software.</h2>
        <p className="mt-2 text-3xl font-medium tracking-tight text-fg/35 sm:text-4xl">Your leftover work still is.</p>
        <p className="mt-6 text-[15px] leading-relaxed text-fg/55 sm:text-base">
          Opening a chat tab is not implementing AI. CRM still knows the customer. Field software still knows the job. Nothing moves unless a person copies, checks, and follows up, or pastes it into ChatGPT and hopes.
        </p>
      </div>
      <div className="mx-auto mt-8 grid max-w-4xl gap-3 md:grid-cols-2">
        <article className="rounded-2xl border border-fg/10 bg-elevated p-6 sm:p-8">
          <p className="font-mono text-[11px] text-fg/40">› TODAY</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["CRM", "Field software", "Inbox", "Ads", "QuickBooks"].map((n) => (
              <span key={n} className="rounded-md border border-fg/10 bg-bg px-2.5 py-1 text-[13px] text-fg/70">
                {n}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-fg/40">Five logins. Follow-up lives in someone's head, or in a ChatGPT tab they forgot to open.</p>
        </article>
        <article className="rounded-2xl border border-gold/25 bg-elevated p-6 sm:p-8">
          <p className="font-mono text-[11px] text-gold">› WITH CORTEX</p>
          <ul className="mt-5 space-y-1 font-mono text-[13px] leading-6 text-fg/75">
            <li>cortex/</li>
            <li className="pl-4 text-fg/55">crm/</li>
            <li className="pl-4 text-fg/55">field/</li>
            <li className="pl-4 text-fg/55">inbox/</li>
            <li className="pl-4 text-fg/55">ads/</li>
            <li className="pl-4 text-fg/55">books/</li>
            <li className="text-gold">one layer · everything connected</li>
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-fg/55">We understand AI. We implement it in what you already pay for. Your team keeps the judgment.</p>
        </article>
      </div>
    </RevealSection>
  );
}

function Steps() {
  return (
    <RevealSection className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <Kicker>the install</Kicker>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-fg sm:text-4xl">You don't learn it. We implement it.</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-fg/55">
          We map the leftover work, connect the software you already run, and install agents that actually do the job. You don't become an AI team. You stay the operator.
        </p>
      </div>
      <ol className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {PILLARS.map((p) => (
          <li key={p.num} className="rounded-2xl border border-fg/8 bg-elevated p-5 text-left">
            <span className="font-mono text-[11px] text-gold">{p.num}</span>
            <p className="mt-3 font-mono text-[11px] tracking-wide text-fg/40">{p.kicker}</p>
            <h3 className="mt-1 text-[15px] font-medium leading-snug text-fg">{p.title}</h3>
            <p className="mt-3 text-[13px] leading-relaxed text-fg/50">{p.body}</p>
          </li>
        ))}
      </ol>
    </RevealSection>
  );
}

function Layers() {
  return (
    <RevealSection className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <Kicker>across the business</Kicker>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-fg sm:text-4xl">Not a chatbot. Agents in your workflows.</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-fg/55">
          Each agent gets a job inside the software you already run. ChatGPT waits for a prompt. These watch leftover work, and stop when a person is required.
        </p>
      </div>
      <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {AGENT_CATEGORIES.map((c, i) => (
          <article key={c.title} className="rounded-2xl border border-fg/8 bg-elevated p-5">
            <p className="font-mono text-[11px] text-gold">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 font-medium text-fg">{c.title}</h3>
            <ul className="mt-4 space-y-2 text-[13px] text-fg/55">
              {c.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[7px] size-1 shrink-0 rounded-full bg-gold/70" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {SOFTWARE_CATEGORIES.map((s) => (
          <article key={s.title} className="rounded-2xl border border-fg/8 bg-bg px-5 py-4">
            <h3 className="text-sm font-medium text-fg">{s.title}</h3>
            <p className="mt-1 text-[13px] leading-relaxed text-fg/50">{s.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/integrations" className="text-sm text-gold hover:text-gold-light">
          Browse systems we evaluate →
        </Link>
      </div>
    </RevealSection>
  );
}

function Industries() {
  const featured = INDUSTRIES.filter((i) => ["automotive", "hvac", "plumbing", "electrical", "home-services"].includes(i.slug));
  const rest = INDUSTRIES.filter((i) => !featured.some((f) => f.slug === i.slug));
  return (
    <RevealSection className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <Kicker>your trade</Kicker>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-fg sm:text-4xl">Same idea. Implemented in your trade.</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-fg/55">
          ChatGPT doesn't know HVAC from collision. We implement agents in the software your industry already runs.
        </p>
      </div>
      <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((ind) => (
          <Link
            key={ind.slug}
            to="/industries/$slug"
            params={{ slug: industryParam(ind) }}
            className="group rounded-2xl border border-fg/8 bg-elevated p-6 transition-colors hover:border-gold/30"
          >
            <h3 className="font-medium text-fg group-hover:text-gold">{ind.name}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-fg/50">{ind.blurb}</p>
            <span className="mt-4 inline-block font-mono text-[11px] text-gold">see the trade →</span>
          </Link>
        ))}
      </div>
      <div className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center gap-2">
        {rest.map((i) => (
          <Link
            key={i.slug}
            to="/industries/$slug"
            params={{ slug: industryParam(i) }}
            className="rounded-full border border-fg/8 bg-elevated px-3 py-1.5 text-[12px] text-fg/55 hover:border-gold/30 hover:text-fg"
          >
            {i.name}
          </Link>
        ))}
      </div>
    </RevealSection>
  );
}

function Trust() {
  const study = CASE_STUDIES[0];
  return (
    <RevealSection className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <Kicker>trust</Kicker>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-fg sm:text-4xl">You decide what agents can do.</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-fg/55">
          Permissions, logs, and a person in the loop. Cloud, private, or hybrid, routed per job.
        </p>
      </div>
      <div className="mx-auto mt-8 grid max-w-5xl gap-3 md:grid-cols-3">
        {[
          ["01", "Least privilege", "Each agent gets the systems and records it needs. Nothing else."],
          ["02", "Human approval", "Drafts first. Send, charge, or change a promise only when you say so."],
          ["03", "Logged actions", "What ran, against which record, and who approved it."],
        ].map(([n, t, b]) => (
          <article key={t} className="rounded-2xl border border-fg/8 bg-elevated p-6">
            <span className="font-mono text-[11px] text-gold">{n}</span>
            <h3 className="mt-3 font-medium text-fg">{t}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-fg/50">{b}</p>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-6 grid max-w-5xl overflow-hidden rounded-2xl border border-fg/8 bg-elevated md:grid-cols-2">
        <div className="border-b border-fg/8 p-6 md:border-r md:border-b-0">
          <p className="font-mono text-[11px] text-fg/40">off-the-shelf AI</p>
          <ul className="mt-4 space-y-2 text-[13px] text-fg/45">
            {COMPARISON.map((row) => (
              <li key={row.typical}>{row.typical}</li>
            ))}
          </ul>
        </div>
        <div className="p-6">
          <p className="font-mono text-[11px] text-gold">cortex</p>
          <ul className="mt-4 space-y-2 text-[13px] text-fg">
            {COMPARISON.map((row) => (
              <li key={row.cortex}>{row.cortex}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-[14px] text-fg/50">
        Live in a real shop: {study.systems.length} systems across repair, collision, detailing, and glass. Private + cloud hybrid.
      </p>
      <div className="mt-3 text-center">
        <Link to="/case-studies/$slug" params={{ slug: study.slug }} className="text-sm text-gold hover:text-gold-light">
          View the deployment →
        </Link>
      </div>
    </RevealSection>
  );
}

function Founder() {
  return (
    <RevealSection className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto grid max-w-4xl items-center gap-6 rounded-2xl border border-fg/8 bg-elevated p-6 sm:p-8 md:grid-cols-[auto_1fr] md:gap-10">
        <div className="flex items-center gap-4 md:flex-col md:items-start">
          <FounderPhoto className="size-16 ring-1 ring-fg/10 md:size-24" />
          <div>
            <p className="font-medium text-fg">{BRAND.founder}</p>
            <p className="font-mono text-[11px] text-fg/45">
              {BRAND.founderRole} · {BRAND.name}
            </p>
            <Link to="/about-us" className="mt-3 inline-block text-sm text-gold hover:text-gold-light">
              About McGuire →
            </Link>
          </div>
        </div>
        <blockquote className="text-xl leading-snug font-medium tracking-tight text-fg sm:text-2xl">
          “Most companies don't have an AI shortage.{" "}
          <span className="text-gold">They have a ChatGPT-in-a-tab problem.</span> Cortex implements agents in the software they already run so leftover work doesn't depend on someone who knows how to prompt.”
        </blockquote>
      </div>
    </RevealSection>
  );
}

function Faq() {
  return (
    <RevealSection className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <Kicker>faq</Kicker>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-fg sm:text-4xl">Questions owners actually ask</h2>
        <div className="mt-10">
          {FAQS.slice(0, 8).map((item) => (
            <details key={item.q} className="group border-b border-fg/10 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-fg marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="font-mono text-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-fg/55">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

function FinalCta() {
  return (
    <RevealSection className="px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-xl text-center">
        <Kicker>the audit</Kicker>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-fg sm:text-4xl">See where AI belongs in your operation, without learning it.</h2>
        <p className="mt-5 text-[15px] leading-relaxed text-fg/55">
          The audit shows what is worth implementing in the software you already run, what isn't, and what a first set of agents could look like.
        </p>
        <div className="mt-8">
          <AuditButton variant="solid">Get your free audit</AuditButton>
        </div>
        <p className="mt-4 font-mono text-[11px] text-fg/35">no obligation to build · practical · specific</p>
      </div>
    </RevealSection>
  );
}
