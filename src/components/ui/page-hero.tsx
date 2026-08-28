import { BeamButton, GhostButton } from "@/components/ui/beam-button";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-[10px] font-bold tracking-[0.18em] text-gold uppercase">{children}</p>
  );
}

export function PageHero({
  eyebrow,
  title,
  titleNode,
  body,
  primary = { to: "/audit", label: "Get Your Free AI Operations Audit" },
  secondary,
}: {
  eyebrow?: string;
  title?: string;
  titleNode?: React.ReactNode;
  body: string;
  primary?: { to?: string; href?: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <main className="relative mx-auto max-w-7xl pt-24 pb-16 lg:pt-24 lg:pb-24">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {titleNode ?? (
          <h1 className="animate-fade-up delay-100 text-balance text-4xl leading-[1.1] font-medium tracking-tighter text-fg sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
        )}
        <p className="animate-fade-up delay-200 mt-8 max-w-2xl text-balance text-lg leading-relaxed font-light text-fg/60 md:text-xl">{body}</p>
        <div className="animate-fade-up delay-300 mt-10 flex w-full flex-col items-center gap-6 sm:w-auto sm:flex-row">
          <BeamButton to={primary.to} href={primary.href}>{primary.label}</BeamButton>
          {secondary && <GhostButton to={secondary.to}>{secondary.label}</GhostButton>}
        </div>
      </div>
    </main>
  );
}

export function SectionHead({
  kicker,
  title,
  body,
  center = true,
}: {
  kicker?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto mb-14 max-w-3xl px-6 text-center" : "mb-14 max-w-3xl px-6"}>
      {kicker && <Eyebrow>{kicker}</Eyebrow>}
      <h2 className="text-balance text-3xl font-medium tracking-tight text-fg md:text-4xl lg:text-5xl">{title}</h2>
      {body && <p className="mt-5 text-lg leading-relaxed font-light text-fg/60">{body}</p>}
    </div>
  );
}
