import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AuditButton } from "@/components/audit-modal";
import { CASE_STUDIES, DETAIL_DRIVEN_DASHBOARD, DETAIL_DRIVEN_WORKFORCE } from "@/data/site";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";
import { OperatorBoard } from "@/components/pages/operator-board";

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => {
    const study = CASE_STUDIES.find((c) => c.slug === params.slug);
    return pageHead({
      title: study ? `${study.name}: Private AI Across Four Automotive Businesses` : "Case Study",
      description:
        study?.slug === "detail-driven"
          ? "Detail Driven in Jackson Hole. Four shop types, different platforms, one Cortex environment. Agents on leftover work. A secure dashboard included in the same build."
          : study?.result || "Cortex case study.",
      path: `/case-studies/${params.slug}`,
    });
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { slug } = Route.useParams();
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  if (!study) throw notFound();
  if (study.slug === "detail-driven") return <DetailDriven study={study} />;
  return <Generic study={study} />;
}

function DetailDriven({ study }: { study: (typeof CASE_STUDIES)[number] }) {
  const workforce = DETAIL_DRIVEN_WORKFORCE;
  return (
    <article className="mx-auto max-w-3xl px-6 pt-16 pb-32">
      <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-fg/50 hover:text-gold">
        <ArrowLeft className="size-4" /> Case studies
      </Link>
      <p className="mt-10 text-[10px] font-bold tracking-widest text-gold uppercase">
        {study.industry} · {study.location}
      </p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight text-fg md:text-6xl">
        A private AI system across four automotive service businesses
      </h1>
      <p className="mt-6 text-xl font-light text-fg/60">{study.name}. {study.location}. {study.result}</p>

      <RevealSection className="mt-12">
        <h2 className="text-2xl font-medium tracking-tight text-fg">The operation</h2>
        <p className="mt-4 text-lg leading-relaxed font-light text-fg/70">
          Detail Driven Enterprises runs automotive work in Jackson Hole across four shop types: mechanical repair,
          collision, detailing, and glass. Repair lives in Tekmetric. Collision lives in CCC ONE. Detailing and glass
          have their own boards, books, and ads. Each line already had software. None of them shared a picture.
        </p>
        <p className="mt-4 text-lg leading-relaxed font-light text-fg/70">
          Someone still walked the board, chased declined work, rebuilt the morning report from five logins, and hoped
          ads had booked cars. We did not replace those systems. We installed collectors, a secure operator dashboard,
          and agents that watch the leftover work so it does not depend on who remembered.
        </p>
      </RevealSection>

      <RevealSection className="mt-12 rounded-2xl border border-fg/10 bg-surface p-8">
        <p className="text-[10px] font-bold tracking-widest text-gold uppercase">What we can stand behind today</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {study.facts.map((f) => (
            <li key={f} className="text-sm text-fg/80">
              {f}
            </li>
          ))}
        </ul>
      </RevealSection>

      <RevealSection className="mt-8">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            `Systems connected: ${study.systems.length}`,
            "Shop types: 4",
            "Infrastructure: private + cloud hybrid",
            "Operator dashboard: included",
          ].map((item) => (
            <li key={item} className="rounded-xl border border-fg/10 bg-surface px-4 py-3 text-sm text-fg/80">
              {item}
            </li>
          ))}
        </ul>
      </RevealSection>

      <RevealSection className="mt-14">
        <h2 className="text-2xl font-medium tracking-tight text-fg">The architecture</h2>
        <p className="mt-4 text-lg leading-relaxed font-light text-fg/70">
          Four layers. Hardware and collectors underneath. A secure dashboard in the middle. An orchestrator that
          assigns jobs. Specialized agents on top. Nothing got a master login.
        </p>
        <ArchitectureStack systems={study.systems} />
        <ol className="mt-8 space-y-3">
          {[
            ["Private Linux AI infrastructure", "Dedicated hardware on site. Routine inference stays local. Cloud when a job actually needs a stronger model. The overnight watch and the morning briefing do not have to leave the building."],
            ["Collectors and bridges", "Tekmetric, ads, CRM, and books over their APIs. Collision through a local CCC ONE EMS export. We read the files CCC already knows how to write. We do not scrape private databases."],
            ["Secure operator dashboard", "One board for operations, marketing, finance, and the four shops. Command, inbox, quotes, bookings, money, demand, collision, and a knowledge map. This is where department exceptions and the numbers land in the morning — without five logins."],
            ["Orchestrator and agents", "A manager assigns follow-up, monitoring, and reporting. Agents watch the queues. A person still owns the customer."],
          ].map(([title, body], i) => (
            <li key={title} className="rounded-xl border border-fg/10 bg-surface px-5 py-4">
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-bold tracking-widest text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium text-fg">{title}</span>
              </div>
              <p className="mt-2 pl-10 text-sm leading-relaxed font-light text-fg/60">{body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 rounded-2xl border border-fg/10 bg-surface p-6 md:p-8">
          <p className="text-[10px] font-bold tracking-widest text-gold uppercase">The machine</p>
          <p className="mt-3 text-sm leading-relaxed font-light text-fg/70">
            Dedicated Linux hardware on site. Local models for the overnight watch and the morning briefing. Cloud
            models when a job needs more. We do not publish a photograph of the rack. The point is ownership: routine
            inference does not have to leave the building.
          </p>
        </div>
      </RevealSection>

      <RevealSection className="mt-14">
        <h2 className="text-2xl font-medium tracking-tight text-fg">The operator dashboard</h2>
        <p className="mt-4 text-lg leading-relaxed font-light text-fg/70">
          On top of the agents that run parts of the company, they get a secure dashboard. One board. Operations,
          marketing, finance, the shops. Pulled from Tekmetric, CCC, HighLevel, QuickBooks, Stripe, Google Ads, Meta,
          and the rest of the stack they already paid for. Not five logins before coffee. Not a master key to the
          company.
        </p>
        <p className="mt-4 text-lg leading-relaxed font-light text-fg/70">
          Agents watch the queues. The dashboard is how the owner sees all of it — exceptions, the numbers, and which
          system they came from — without rebuilding the morning from exports.
        </p>
        <div className="mt-8">
          <OperatorBoard />
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {DETAIL_DRIVEN_DASHBOARD.security.map((row) => (
            <li key={row.title} className="rounded-xl border border-fg/10 bg-surface p-5">
              <div className="text-sm font-medium text-fg">{row.title}</div>
              <p className="mt-2 text-sm leading-relaxed font-light text-fg/60">{row.body}</p>
            </li>
          ))}
        </ul>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {DETAIL_DRIVEN_DASHBOARD.views.map(([t, b]) => (
            <li key={t} className="rounded-xl border border-fg/10 bg-surface p-5">
              <div className="text-sm font-medium text-fg">{t}</div>
              <p className="mt-2 text-sm leading-relaxed font-light text-fg/60">{b}</p>
            </li>
          ))}
        </ul>
      </RevealSection>

      <RevealSection className="mt-14">
        <h2 className="text-2xl font-medium tracking-tight text-fg">Sanitized exception list</h2>
        <p className="mt-4 text-lg leading-relaxed font-light text-fg/70">
          Example of what the morning board looks like. Identifiers changed. The pattern is real: aging work, quiet
          files, unbilled jobs, spend without an operator.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-fg/10 bg-elevated">
          <div className="border-b border-fg/10 px-5 py-3">
            <p className="text-[10px] font-bold tracking-widest text-gold uppercase">Exceptions · sanitized</p>
          </div>
          <ul className="divide-y divide-fg/10">
            {[
              ["Aging repair orders", "Repair · Tekmetric"],
              ["Quiet collision files", "Collision · CCC ONE"],
              ["Unconfirmed detailing bookings", "Detailing · Bookings"],
              ["Unbilled completed work", "Finance · QuickBooks"],
              ["Spend vs booked", "Demand · Google Ads"],
            ].map(([label, source]) => (
              <li key={label} className="flex items-baseline justify-between gap-3 px-5 py-3 text-sm">
                <span className="text-fg/85">{label}</span>
                <span className="shrink-0 text-xs text-fg/35">{source}</span>
              </li>
            ))}
          </ul>
        </div>
      </RevealSection>

      <RevealSection className="mt-14">
        <h2 className="text-2xl font-medium tracking-tight text-fg">Agents on the ground</h2>
        <p className="mt-4 text-lg leading-relaxed font-light text-fg/70">
          Installed as three jobs, not a 30-name org chart. Follow-up. Monitoring. Reporting. They read the software
          the shops already run. A person still sends anything that talks to a customer until the path is trusted. How
          that shows up inside Detail Driven is by department.
        </p>
        <ul className="mt-6 space-y-3">
          {workforce.jobs.map((job) => (
            <li key={job.title} className="rounded-xl border border-fg/10 bg-surface px-5 py-4">
              <div className="text-sm font-medium text-fg">{job.title}</div>
              <p className="mt-2 text-sm leading-relaxed font-light text-fg/60">{job.body}</p>
            </li>
          ))}
        </ul>
      </RevealSection>

      <RevealSection className="mt-14">
        <h2 className="text-2xl font-medium tracking-tight text-fg">By department</h2>
        <p className="mt-4 text-lg leading-relaxed font-light text-fg/70">
          Same three jobs. Six places they show up for the people who run the shops.
        </p>

        <div className="mt-8 rounded-2xl border border-gold/25 bg-surface p-6 md:p-8">
          <p className="text-[10px] font-bold tracking-widest text-gold uppercase">Estimated leftover admin covered</p>
          <p className="mt-3 text-5xl font-medium tracking-tight text-fg">
            ~{workforce.totalHours}
            <span className="ml-2 text-lg font-light text-fg/50">hrs / month</span>
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed font-light text-fg/55">{workforce.caveat}</p>
          <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
            {workforce.departments.map((dept) => (
              <div key={dept.title}>
                <dt className="text-xs text-fg/45">{dept.title}</dt>
                <dd className="mt-0.5 text-sm font-medium text-fg">~{dept.hours} hrs</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="mt-6 space-y-4">
          {workforce.departments.map((dept) => (
            <li key={dept.title} className="rounded-2xl border border-fg/10 bg-surface p-6 md:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-xl font-medium tracking-tight text-fg">{dept.title}</h3>
                <p className="text-sm font-medium text-gold">~{dept.hours} hrs/mo</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed font-light text-fg/55">{dept.summary}</p>
              <ul className="mt-6 space-y-5">
                {dept.items.map((item) => (
                  <li key={item.title}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <p className="text-sm font-medium text-fg">{item.title}</p>
                      <p className="text-xs tracking-wide text-fg/40">{item.meta}</p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed font-light text-fg/60">{item.body}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </RevealSection>

      <RevealSection className="mt-14">
        <h2 className="text-2xl font-medium tracking-tight text-fg">Collision, the hard way</h2>
        <p className="mt-4 text-lg leading-relaxed font-light text-fg/70">
          Collision is why the operations and finance hours are not only a Tekmetric story. CCC ONE does not hand you
          a clean public API for the shop floor. Appointments are not in the file export. Payments are not either.
          What CCC will give you is an EMS 2.01 estimate export, and a Final Bill export when the repair order is
          locked.
        </p>
        <p className="mt-4 text-lg leading-relaxed font-light text-fg/70">
          We put a read-only bridge on the collision machine. It watches the export folder CCC already writes: jobs,
          claims, customers, vehicles, parts, labor, totals, and attachments a user saved out. It does not open
          DATA.DAT. That export is enough to watch files that went quiet and finals that never hit the books. It is
          not enough to schedule. We do not pretend it is.
        </p>
      </RevealSection>

      <RevealSection className="mt-14">
        <h2 className="text-2xl font-medium tracking-tight text-fg">Systems connected</h2>
        <p className="mt-4 text-lg leading-relaxed font-light text-fg/70">
          These are the systems the department jobs actually read. Repair in Tekmetric. Collision in CCC. Leads in
          HighLevel. Money in QuickBooks and Stripe. Demand in the ad accounts and Google Business Profiles they
          already paid for.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {study.systems.map((s) => (
            <span key={s} className="rounded-full border border-fg/10 bg-surface px-3 py-1 text-xs text-fg/70">
              {s}
            </span>
          ))}
        </div>
        <p className="mt-6 text-sm text-fg/50">
          Named tools are the stack in this deployment, not a certified public integration list. Access is always
          confirmed in the audit. A configured connection is not the same thing as a live feed.
        </p>
      </RevealSection>

      <RevealSection className="mt-14">
        <h2 className="text-2xl font-medium tracking-tight text-fg">What we track next</h2>
        <p className="mt-4 text-lg leading-relaxed font-light text-fg/70">
          The hours above are estimates of leftover admin. Next we count what we can measure: agent tasks completed,
          how often a path ran without a person, how often a person had to step in, and how much inference stayed on
          the local hardware. Those numbers go here when they exist and the operator is willing to stand behind them.
        </p>
      </RevealSection>

      <div className="mt-16">
        <p className="mb-6 max-w-xl text-lg font-light text-fg/60">
          If this volume of leftover work looks like yours, start with the audit. We will tell you if the stack and
          the volume actually justify a build.
        </p>
        <AuditButton>Get Your Free AI Operations Audit</AuditButton>
      </div>
    </article>
  );
}

function ArchitectureStack({ systems }: { systems: readonly string[] }) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-fg/10 bg-elevated">
      <div className="space-y-3 p-5 sm:p-6">
        <ArchBox label="Owner / management" />
        <p className="text-center text-xs tracking-widest text-gold">↓</p>
        <ArchBox label="Cortex environment" hint="Private Linux · operator dashboard · hybrid inference" accent />
        <p className="text-center text-xs tracking-widest text-gold">↓</p>
        <ArchBox label="Manager agent" hint="Assigns jobs. Watches exceptions." />
        <p className="text-center text-xs tracking-widest text-gold">↓</p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {["Operations", "Marketing", "CRM", "Reporting", "Specialized agents"].map((name) => (
            <div key={name} className="rounded-xl border border-fg/10 bg-surface px-4 py-3 text-center text-sm text-fg/80">
              {name}
            </div>
          ))}
        </div>
        <p className="text-center text-xs tracking-widest text-gold">↓</p>
        <div className="flex flex-wrap justify-center gap-2">
          {systems.map((s) => (
            <span key={s} className="rounded-full border border-fg/10 bg-surface px-3 py-1 text-xs text-fg/60">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArchBox({ label, hint, accent }: { label: string; hint?: string; accent?: boolean }) {
  return (
    <div
      className={
        accent
          ? "rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-center"
          : "rounded-xl border border-fg/10 bg-surface px-4 py-3 text-center"
      }
    >
      <p className="text-sm font-medium text-fg">{label}</p>
      {hint ? <p className="mt-1 text-xs text-fg/45">{hint}</p> : null}
    </div>
  );
}

function Generic({ study }: { study: (typeof CASE_STUDIES)[number] }) {
  return (
    <article className="mx-auto max-w-3xl px-6 pt-16 pb-32">
      <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-fg/50 hover:text-gold">
        <ArrowLeft className="size-4" /> Case studies
      </Link>
      <p className="mt-10 text-[10px] font-bold tracking-widest text-gold uppercase">{study.industry}</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight text-fg md:text-6xl">{study.name}</h1>
      <p className="mt-6 text-xl font-light text-fg/60">
        {study.role}. {study.result}
      </p>
      <RevealSection className="mt-12 rounded-2xl border border-fg/10 bg-surface p-8">
        <p className="text-[10px] font-bold tracking-widest text-gold uppercase">What we can stand behind today</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {study.facts.map((f) => (
            <li key={f} className="text-sm text-fg/80">
              {f}
            </li>
          ))}
        </ul>
      </RevealSection>
      <div className="mt-16">
        <AuditButton>Get Your Free AI Operations Audit</AuditButton>
      </div>
    </article>
  );
}
