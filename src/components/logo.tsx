import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { BRAND } from "@/data/brand";

export function CortexMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("text-gold", className)} aria-hidden>
      <circle cx="16" cy="7.5" r="3.1" fill="currentColor" />
      <circle cx="7.2" cy="22.5" r="3.1" fill="currentColor" />
      <circle cx="24.8" cy="22.5" r="3.1" fill="currentColor" />
      <circle cx="16" cy="16.5" r="2.1" fill="currentColor" />
      <path
        d="M16 10.6v3.6M13.9 15.4 9.6 20.3M18.1 15.4l4.3 4.9M8.8 20.1l5.4-2.6M23.2 20.1l-5.4-2.6"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
    </svg>
  );
}

export function CortexLogo({
  to = "/",
  size = "md",
  withTagline = true,
}: {
  to?: string;
  size?: "sm" | "md";
  withTagline?: boolean;
}) {
  return (
    <Link to={to} className="group flex items-center gap-3">
      <CortexMark className={size === "sm" ? "h-8 w-8" : "h-10 w-10"} />
      <span className="flex min-w-0 flex-col items-start leading-none">
        <span className={cn("font-semibold tracking-[0.18em] text-fg uppercase", size === "sm" ? "text-sm" : "text-base")}>
          {BRAND.name}
        </span>
        {withTagline && (
          <span className="mt-1 hidden max-w-[220px] text-[9px] leading-snug font-medium tracking-[0.04em] text-fg/45 sm:block">
            {BRAND.tagline}
          </span>
        )}
      </span>
    </Link>
  );
}

export function LetterMark({ letters, className }: { letters: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex size-16 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 font-semibold tracking-widest text-gold",
        className,
      )}
    >
      {letters}
    </div>
  );
}

export function FounderPhoto({ className }: { className?: string }) {
  return (
    <img
      src={BRAND.founderPhoto}
      alt={BRAND.founder}
      className={cn("size-12 rounded-full object-cover object-[center_18%] ring-1 ring-gold/30", className)}
    />
  );
}
