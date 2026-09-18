import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  to?: string;
  href?: string;
  children: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "beam" | "solid";
};

export function BeamButton({
  to,
  href,
  children,
  size = "md",
  className,
  onClick,
  type = "button",
  disabled,
  variant = "beam",
}: Props) {
  const pad =
    size === "sm"
      ? "min-h-11 px-4 py-2.5 text-[10px] tracking-[0.14em] sm:px-5 sm:text-[11px] sm:tracking-widest"
      : "min-h-12 px-5 py-3.5 text-[10px] tracking-[0.12em] sm:min-h-14 sm:px-10 sm:py-4 sm:text-sm sm:tracking-widest";
  const solid = variant === "solid";
  const cls = cn(
    "group relative inline-flex max-w-full touch-manipulation uppercase transition-all duration-500 hover:scale-[1.02] font-semibold rounded-full items-center justify-center text-center leading-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 disabled:pointer-events-none disabled:opacity-50",
    solid
      ? "bg-gold text-bg hover:bg-gold-light hover:shadow-[0_0_40px_-8px_rgb(var(--gold-rgb)/0.7)]"
      : "overflow-hidden text-fg hover:shadow-[0_0_40px_-10px_rgb(var(--gold-rgb)/0.35)]",
    pad,
    className,
  );
  const inner = solid ? (
    <>
      <span className="relative z-10 text-balance">{children}</span>
      <ArrowRight
        className={cn(
          "relative z-10 ml-2 shrink-0 transition-transform duration-300 group-hover:translate-x-1",
          size === "sm" ? "size-3" : "size-3.5 sm:size-4",
        )}
        strokeWidth={2}
      />
    </>
  ) : (
    <>
      <div className="absolute inset-0 -z-20 overflow-hidden rounded-full p-px">
        <div
          className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,var(--color-gold)_360deg)]"
          style={{ animation: "beam-spin 3s linear infinite" }}
        />
        <div className="absolute inset-px rounded-full bg-bg" />
      </div>
      <div className="absolute inset-0.5 -z-10 overflow-hidden rounded-full bg-zinc-950">
        <div className="absolute inset-0 bg-linear-to-b from-zinc-800/60 to-transparent" />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-30"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "12px 12px",
            animation: "dots-move 8s linear infinite",
          }}
        />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-1/2 w-2/3 -translate-x-1/2 rounded-full bg-gold/10 blur-2xl transition-colors duration-500 group-hover:bg-gold/30" />
      </div>
      <span className="relative z-10 text-balance text-fg/90 transition-colors group-hover:text-fg">{children}</span>
      <ArrowRight
        className={cn(
          "relative z-10 ml-2 shrink-0 transition-transform duration-300 group-hover:translate-x-1",
          size === "sm" ? "size-3" : "size-3.5 sm:size-4",
        )}
        strokeWidth={2}
      />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  );
}

export function GhostButton({
  to,
  children,
  className,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex min-h-12 w-full items-center justify-center rounded-full border border-fg/5 px-6 py-3.5 text-sm font-medium text-fg/60 transition-all hover:bg-fg/5 hover:text-fg sm:min-h-0 sm:w-auto sm:px-8 sm:py-4",
        className,
      )}
    >
      {children}
    </Link>
  );
}
