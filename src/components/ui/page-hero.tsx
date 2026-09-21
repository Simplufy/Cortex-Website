import { BeamButton, GhostButton } from "@/components/ui/beam-button";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 font-mono text-[11px] tracking-wide text-gold">{children}</p>
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
    <main className="relative overflow-hidden px-4 pt-6 pb-8 sm:px-6 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14">
      <div className="hero-enter relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {titleNode ?? (
          <h1 className="text-balance text-[1.75rem] leading-[1.12] font-medium tracking-tight text-fg sm:text-4xl md:text-5xl">
            {title}
          </h1>
        )}
        <p className="mt-4 max-w-2xl text-balance text-[15px] leading-relaxed text-fg/55 sm:mt-5 sm:text-lg">
          {body}
        </p>
        <div className="mt-6 flex w-full flex-col items-stretch gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
          <BeamButton className="w-full sm:w-auto" to={primary.to} href={primary.href}>
            {primary.label}
          </BeamButton>
          {secondary && (
            <GhostButton className="w-full sm:w-auto" to={secondary.to}>
              {secondary.label}
            </GhostButton>
          )}
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
    <div className={center ? "mx-auto mb-6 max-w-3xl px-4 text-center sm:mb-8 sm:px-6" : "mb-6 max-w-3xl px-4 sm:mb-8 sm:px-6"}>
      {kicker && <Eyebrow>{kicker}</Eyebrow>}
      <h2 className="text-balance text-2xl font-medium tracking-tight text-fg sm:text-3xl md:text-[2.5rem]">{title}</h2>
      {body && <p className="mt-4 text-[15px] leading-relaxed text-fg/55 sm:mt-5 sm:text-base">{body}</p>}
    </div>
  );
}
