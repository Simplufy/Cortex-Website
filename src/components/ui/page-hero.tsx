import { BeamButton, GhostButton } from "@/components/ui/beam-button";
import { ConstellationField } from "@/components/constellation-field";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[10px] font-bold tracking-[0.18em] text-gold uppercase sm:mb-5">{children}</p>
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
    <main className="relative overflow-hidden pt-8 pb-10 lg:pt-16 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden>
        <ConstellationField />
      </div>
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {titleNode ?? (
          <h1 className="animate-fade-up delay-100 text-balance text-3xl leading-[1.12] font-medium tracking-tighter text-fg sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
        )}
        <div className="animate-fade-up delay-200 mt-6 flex w-full flex-col items-stretch gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:items-center sm:gap-6">
          <BeamButton className="w-full sm:w-auto" to={primary.to} href={primary.href}>
            {primary.label}
          </BeamButton>
          {secondary && (
            <GhostButton className="w-full sm:w-auto" to={secondary.to}>
              {secondary.label}
            </GhostButton>
          )}
        </div>
        <p className="animate-fade-up delay-300 mt-5 max-w-2xl text-balance text-sm leading-relaxed font-light text-fg/60 sm:mt-7 sm:text-lg md:text-xl">
          {body}
        </p>
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
    <div className={center ? "mx-auto mb-8 max-w-3xl px-4 text-center sm:mb-14 sm:px-6" : "mb-8 max-w-3xl px-4 sm:mb-14 sm:px-6"}>
      {kicker && <Eyebrow>{kicker}</Eyebrow>}
      <h2 className="text-balance text-2xl font-medium tracking-tight text-fg sm:text-3xl md:text-4xl lg:text-5xl">{title}</h2>
      {body && <p className="mt-4 text-sm leading-relaxed font-light text-fg/60 sm:mt-5 sm:text-lg">{body}</p>}
    </div>
  );
}
