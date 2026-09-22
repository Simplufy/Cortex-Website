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
}: Props) {
  const pad =
    size === "sm"
      ? "min-h-10 px-4 py-2 text-sm sm:px-4"
      : "min-h-11 px-5 py-2.5 text-[15px] sm:min-h-12 sm:px-5";
  const cls = cn(
    "group relative inline-flex max-w-full touch-manipulation items-center justify-center rounded-full border border-gold bg-transparent text-center text-[15px] leading-tight font-medium text-fg transition-colors duration-200 hover:bg-gold/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 disabled:pointer-events-none disabled:opacity-50",
    pad,
    className,
  );
  const inner = (
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
        "inline-flex min-h-11 w-full items-center justify-center rounded-full border border-gold bg-transparent px-5 py-2.5 text-[15px] font-medium text-fg transition-colors hover:bg-gold/8 sm:w-auto",
        className,
      )}
    >
      {children}
    </Link>
  );
}
