import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  BadgeCheck,
  Bird,
  Bug,
  Building2,
  Car,
  CheckCircle2,
  CircleDot,
  ClipboardList,
  CloudRain,
  DoorOpen,
  Droplets,
  Flame,
  Hammer,
  House,
  Layers,
  Leaf,
  Lightbulb,
  Monitor,
  PaintRoller,
  Shield,
  Sparkles,
  Sprout,
  Store,
  Sun,
  Timer,
  Warehouse,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { BRAND } from "@/data/brand";
import { CASE_STUDIES } from "@/data/site";
import type { Lander } from "@/data/landers";
import { AuditButton } from "@/components/audit-modal";
import { FounderPhoto } from "@/components/logo";
import { RevealSection } from "@/components/reveal";
import { VslPlayer } from "@/components/vsl-player";
import { cn } from "@/lib/utils";

function Cta({
  industry,
  children,
  className,
}: {
  industry: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <AuditButton industry={industry} className={cn("w-full sm:w-auto", className)}>
      {children ?? (
        <>
          <span className="sm:hidden">Request your free audit</span>
          <span className="hidden sm:inline">Request your free AI operations audit</span>
        </>
      )}
    </AuditButton>
  );
}

export function IndustryLander({ lander }: { lander: Lander }) {
  return (
    <article className="overflow-x-clip pb-8 md:pb-0">
      <Hero lander={lander} />
      <Problem lander={lander} />
      <Between lander={lander} />
      <Layer lander={lander} />
      <Agents lander={lander} />
      <AuditWhat lander={lander} />
      <Proof lander={lander} />
      <Founder />
      <Faq lander={lander} />
      <Final lander={lander} />
    </article>
  );
}

function Hero({ lander }: { lander: Lander }) {
  return (
    <RevealSection className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-8 pb-8 text-center sm:px-6 sm:pt-10 sm:pb-10 lg:pt-12">
      <h1 className="font-medium tracking-tight text-fg">
        <span className="block text-[1.35rem] leading-snug sm:text-[clamp(1.75rem,2.8vw,2.55rem)] sm:whitespace-nowrap">
          {lander.headline}
        </span>
        <span className="mt-1 block text-[1.3rem] leading-snug text-gold sm:mt-2 sm:text-[clamp(1.75rem,2.8vw,2.55rem)] sm:whitespace-nowrap">
          {lander.headlineGold}
        </span>
      </h1>
      <div className="mx-auto mt-4 w-full max-w-md sm:mt-5 sm:max-w-xl lg:max-w-2xl">
        <VslPlayer
          src={lander.vslSrc}
          poster={lander.vslPoster}
          cover={lander.vslCover}
          designed={lander.designed}
          label={lander.vslLabel}
        />
        <p className="mt-2 text-sm font-medium text-gold sm:mt-3">Watch the 2 min video</p>
      </div>
      <div className="mt-3 w-full max-w-md sm:mt-4">
        <Cta industry={lander.slug} />
      </div>
      <div className="mt-3 w-full sm:mt-4">
        <Chips chips={lander.chips} />
      </div>
    </RevealSection>
  );
}

const CHIP_ICON: Record<string, LucideIcon> = {
  "Auto repair": Wrench,
  Collision: Car,
  Detailing: Sparkles,
  Glass: Monitor,
  Tires: CircleDot,
  Residential: House,
  Commercial: Building2,
  Install: Hammer,
  Service: Wrench,
  Memberships: BadgeCheck,
  Drain: Droplets,
  "Water heater": Flame,
  Repipe: Droplets,
  Emergency: Timer,
  Panel: Zap,
  Lighting: Lightbulb,
  Generator: Zap,
  "Bid work": ClipboardList,
  Storm: CloudRain,
  Retail: Store,
  Insurance: Shield,
  Repair: Hammer,
  Garage: Warehouse,
  Lawn: Leaf,
  Restoration: PaintRoller,
  "Multi-trade": Layers,
  Cleaning: Sparkles,
  Recurring: Sprout,
  "One-time": Timer,
  Termite: Bug,
  Wildlife: Bird,
  Remodel: Hammer,
  Custom: PaintRoller,
  "Light commercial": Building2,
  Punch: ClipboardList,
  Closeout: CheckCircle2,
  Cinema: Monitor,
  Security: Shield,
  Vinyl: Monitor,
  Wood: Leaf,
  "Entry doors": DoorOpen,
  Sunrooms: Sun,
};

function Chip({ label }: { label: string }) {
  const Icon = CHIP_ICON[label] ?? Wrench;
  return (
    <span className="inline-flex max-w-full items-center gap-1 rounded-full border border-gold/25 bg-gold/5 px-2.5 py-1 text-[11px] tracking-wide text-fg/80 sm:gap-1.5 sm:px-4 sm:py-1.5 sm:text-sm">
      <Icon className="size-3 shrink-0 text-gold sm:size-4" strokeWidth={2} aria-hidden />
      {label}
    </span>
  );
}

function Chips({ chips }: { chips: string[] }) {
  const top = chips.length === 5 ? chips.slice(0, 3) : chips.length === 4 ? chips.slice(0, 2) : chips.slice(0, Math.ceil(chips.length / 2));
  const rest = chips.slice(top.length);
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-2 sm:hidden">
        <div className="flex justify-center gap-1.5">
          {top.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
        {rest.length > 0 && (
          <div className="flex justify-center gap-1.5">
            {rest.map((c) => (
              <Chip key={c} label={c} />
            ))}
          </div>
        )}
      </div>
      <div className="hidden flex-wrap justify-center gap-2 sm:flex">
        {chips.map((c) => (
          <Chip key={c} label={c} />
        ))}
      </div>
    </div>
  );
}

function Problem({ lander }: { lander: Lander }) {
  return (
    <RevealSection className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 sm:pt-16 sm:pb-10">
      <p className="mb-4 text-center text-[10px] font-bold tracking-widest text-gold uppercase">The stall</p>
      <p className="mx-auto mb-3 max-w-2xl text-center text-sm text-fg/50">
        You might use ChatGPT. It doesn't watch this software. The leftover still does.
      </p>
      <h2 className="mx-auto max-w-3xl text-center text-2xl font-medium tracking-tight text-fg sm:text-4xl md:text-5xl">
        {lander.problemTitle}
      </h2>
      <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2">
        {lander.problems.map((p) => (
          <article key={p.title} className="rounded-2xl border border-fg/10 bg-surface p-5 sm:p-8">
            <h3 className="text-lg font-medium text-fg sm:text-xl">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed font-light text-fg/60 sm:mt-3">{p.body}</p>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}

function Between({ lander }: { lander: Lander }) {
  return (
    <RevealSection className="border-t border-fg/5 px-4 pt-14 pb-10 sm:px-6 sm:pt-16 sm:pb-10">
      <p className="mb-4 text-center text-[10px] font-bold tracking-widest text-gold uppercase">The work between the software</p>
      <h2 className="mx-auto max-w-3xl text-center text-2xl font-medium tracking-tight text-fg sm:text-4xl">
        {lander.betweenTitle}
      </h2>
      <ol className="mx-auto mt-8 max-w-2xl space-y-2 sm:mt-12">
        {lander.betweenItems.map((item, i) => (
          <li key={item} className="flex items-center gap-3 rounded-xl border border-fg/10 bg-surface px-4 py-3.5 sm:px-5">
            <span className="w-6 shrink-0 font-mono text-[11px] tracking-widest text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm text-fg sm:text-base">{item}</span>
          </li>
        ))}
      </ol>
      <p className="mx-auto mt-8 max-w-md text-center font-mono text-4xl font-medium tracking-tight text-gold sm:text-6xl">
        240
      </p>
      <p className="mt-2 text-center text-[10px] font-bold tracking-[0.2em] text-fg/45 uppercase">of those, every week</p>
      <div className="mx-auto mt-8 w-full max-w-md text-center sm:mt-10">
        <Cta industry={lander.slug} />
      </div>
    </RevealSection>
  );
}

function Layer({ lander }: { lander: Lander }) {
  return (
    <RevealSection className="border-t border-fg/5 px-4 pt-14 pb-10 sm:px-6 sm:pt-16 sm:pb-10">
      <p className="mb-4 text-center text-[10px] font-bold tracking-widest text-gold uppercase">What we install</p>
      <h2 className="mx-auto max-w-3xl text-center text-2xl font-medium tracking-tight text-fg sm:text-4xl md:text-5xl">
        Custom AI around the software your {lander.noun} <span className="text-gold">already uses.</span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm font-light text-fg/60 sm:text-lg">{lander.layerBody}</p>
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
        {lander.stack.map((s) => (
          <div
            key={s.name}
            className="flex size-14 items-center justify-center rounded-2xl border border-fg/10 bg-surface sm:size-16"
            title={s.name}
          >
            <img src={`/images/logos/${s.file}`} alt={s.name} width={36} height={36} className="size-8 object-contain" />
          </div>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-lg text-center text-xs text-fg/40">
        Named tools are examples {lander.noun === "shop" ? "shops" : "operators"} already run, not a pack you have to buy, and not a
        rip-and-replace list.
      </p>
    </RevealSection>
  );
}

function Agents({ lander }: { lander: Lander }) {
  return (
    <RevealSection className="border-t border-fg/5 px-4 pt-14 pb-10 sm:px-6 sm:pt-16 sm:pb-10">
      <p className="mb-4 text-center text-[10px] font-bold tracking-widest text-gold uppercase">Specialized agents</p>
      <h2 className="mx-auto max-w-3xl text-center text-2xl font-medium tracking-tight text-fg sm:text-4xl">
        Built around your {lander.noun}. Not a predetermined pack.
      </h2>
      <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:mt-12 md:grid-cols-2">
        {lander.agents.map((a) => (
          <article key={a.title} className="rounded-2xl border border-fg/10 bg-surface p-5 sm:p-8">
            <h3 className="text-lg font-medium text-fg sm:text-xl">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed font-light text-fg/60 sm:mt-3">{a.body}</p>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-xl text-center text-sm font-light text-fg/55">
        Sensitive sends can require approval. Agents get only the access they need. Your team keeps the judgment.
      </p>
    </RevealSection>
  );
}

function AuditWhat({ lander }: { lander: Lander }) {
  return (
    <RevealSection className="border-t border-fg/5 px-4 pt-14 pb-10 sm:px-6 sm:pt-16 sm:pb-10">
      <p className="mb-4 text-center text-[10px] font-bold tracking-widest text-gold uppercase">The free audit</p>
      <h2 className="mx-auto max-w-3xl text-center text-2xl font-medium tracking-tight text-fg sm:text-4xl md:text-5xl">
        We’ll show you where AI can realistically help. If it can’t, we’ll say so.
      </h2>
      <ol className="mx-auto mt-8 max-w-3xl space-y-3 sm:mt-12">
        {[
          ["Before", lander.auditBefore],
          ["During", lander.auditDuring],
          ["After", lander.auditAfter],
        ].map(([t, b]) => (
          <li key={t} className="rounded-2xl border border-fg/10 bg-surface p-5 sm:p-8">
            <h3 className="font-medium text-fg">{t} the audit</h3>
            <p className="mt-2 text-sm leading-relaxed font-light text-fg/60">{b}</p>
          </li>
        ))}
      </ol>
      <div className="mx-auto mt-8 w-full max-w-md text-center sm:mt-10">
        <Cta industry={lander.slug} />
      </div>
    </RevealSection>
  );
}

function Proof({ lander }: { lander: Lander }) {
  const study = CASE_STUDIES[0];
  return (
    <RevealSection className="border-t border-fg/5 px-4 pt-14 pb-10 sm:px-6 sm:pt-16 sm:pb-10">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-gold/25 bg-[radial-gradient(ellipse_at_top_left,rgb(var(--gold-rgb)/0.12),transparent_55%)] px-5 py-10 sm:px-14 sm:py-16">
        <p className="text-[10px] font-bold tracking-[0.22em] text-gold uppercase">In the field</p>
        <h2 className="mt-3 text-2xl font-medium tracking-tight text-fg sm:text-4xl">{study.name}</h2>
        <p className="mt-2 text-sm font-light text-fg/60">
          {lander.isAutomotive ? `${study.industry}. ${study.location}. A multi-business automotive operation.` : lander.proofMeta}
        </p>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed font-light text-fg/70 sm:text-base">
          {lander.isAutomotive ? study.result : lander.proofBody}
        </p>
        <Link
          to="/case-studies/$slug"
          params={{ slug: study.slug }}
          className="mt-6 inline-block text-sm font-medium text-gold hover:text-gold-light"
        >
          {lander.isAutomotive ? "See the deployment" : "See how the system was installed"}
        </Link>
      </div>
    </RevealSection>
  );
}

function Founder() {
  return (
    <RevealSection className="border-t border-fg/5 px-4 pt-14 pb-10 sm:px-6 sm:pt-16 sm:pb-10">
      <blockquote className="mx-auto max-w-4xl text-center">
        <p className="text-balance text-xl leading-snug font-medium tracking-tight text-fg sm:text-3xl md:text-4xl">
          “Most operators do not have a software shortage.{" "}
          <span className="text-gold">They have a people-operating-the-software problem.</span> Cortex connects agents
          to those systems so the repetitive work between them no longer depends on someone remembering.”
        </p>
        <footer className="mt-8 flex items-center justify-center gap-3 sm:mt-10">
          <FounderPhoto className="size-12" />
          <div className="text-left">
            <div className="text-sm font-medium text-fg">{BRAND.founder}</div>
            <div className="text-xs text-fg/50">
              {BRAND.founderRole}, {BRAND.name}
            </div>
          </div>
        </footer>
      </blockquote>
    </RevealSection>
  );
}

function Faq({ lander }: { lander: Lander }) {
  return (
    <RevealSection className="border-t border-fg/5 px-4 pt-14 pb-10 sm:px-6 sm:pt-16 sm:pb-10">
      <h2 className="mb-8 text-center text-2xl font-medium tracking-tight text-fg sm:mb-12 sm:text-4xl">{lander.faqTitle}</h2>
      <div className="mx-auto max-w-3xl space-y-3">
        {[{
          title: "Do I need to understand AI?",
          body: "No. That's the point. We understand it. We implement agents in the software you already run. You stay the operator.",
        }, {
          title: "I already use ChatGPT. Why would I need this?",
          body: "ChatGPT is a tab you open. It waits for a prompt. It does not watch your shop software, CRM, or books unless you paste the job in. Cortex implements agents inside those systems so leftover work gets done without you becoming someone who 'does AI.'",
        }, ...lander.faqs].map((item) => (
          <article key={item.title} className="rounded-2xl border border-fg/10 bg-surface p-5 sm:p-6">
            <h3 className="font-medium text-fg">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed font-light text-fg/60">{item.body}</p>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}

function Final({ lander }: { lander: Lander }) {
  return (
    <RevealSection className="border-t border-fg/5 px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-medium tracking-tight text-fg sm:text-4xl md:text-5xl">{lander.finalTitle}</h2>
        <p className="mt-4 text-sm font-light text-fg/60 sm:mt-5 sm:text-lg">
          A minute to apply. Thirty minutes on how the work moves. You don't have to learn AI. If we can help, we'll show you the build. If we can't, we'll say so.
        </p>
        <div className="mx-auto mt-8 w-full max-w-md sm:mt-10">
          <Cta industry={lander.slug} />
        </div>
      </div>
    </RevealSection>
  );
}

