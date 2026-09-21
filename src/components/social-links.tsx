import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { BRAND } from "@/data/brand";
import { cn } from "@/lib/utils";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.28 0 .54.04.79.12V9.4a6.84 6.84 0 00-.79-.05A6.33 6.33 0 005.1 15.7a6.34 6.34 0 0010.86 4.43V8.83a8.2 8.2 0 004.78 1.52V6.9a4.84 4.84 0 01-1.15-.21z" />
    </svg>
  );
}

const ICONS = {
  Instagram,
  TikTok: TikTokIcon,
  YouTube: Youtube,
  X: XIcon,
  LinkedIn: Linkedin,
  Facebook,
} as const;

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {BRAND.socials.map((s) => {
        const Icon = ICONS[s.name as keyof typeof ICONS];
        return (
          <li key={s.name}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="inline-flex size-9 items-center justify-center rounded-full border border-fg/10 text-fg/60 transition-colors hover:border-gold/40 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold/60"
            >
              <Icon className="size-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
