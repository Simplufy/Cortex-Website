import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/brand-kit")({
  head: () =>
    pageHead({
      title: "Brand kit",
      description: "Cortex logos, icons, and social images.",
      path: "/brand-kit",
      noindex: true,
    }),
  component: Page,
});

const IMAGES: { name: string; file: string }[] = [
  { name: "App icon", file: "app-icon-1024.png" },
  { name: "Dark profile photo", file: "profile-dark-800.png" },
  { name: "Orange profile photo", file: "profile-orange-800.png" },
  { name: "LinkedIn banner", file: "linkedin-banner-1584x396.jpg" },
  { name: "X header", file: "x-header-1500x500.jpg" },
  { name: "Facebook cover", file: "facebook-cover-1640x624.jpg" },
  { name: "YouTube banner", file: "youtube-banner-2560x1440.jpg" },
  { name: "YouTube watermark", file: "youtube-watermark-512.png" },
  { name: "Link preview / OG", file: "og-1200x630.jpg" },
  { name: "Instagram square", file: "instagram-1080.jpg" },
  { name: "Calendar cover", file: "calendar-cover-1920x1080.jpg" },
  { name: "Meeting thumbnail", file: "meeting-thumbnail-1280x720.jpg" },
  { name: "Email header", file: "email-header-1200x360.png" },
  { name: "Email signature", file: "lockup-email-signature.png" },
  { name: "Horizontal lockup", file: "lockup-horizontal-dark.png" },
];

function Page() {
  return (
    <article className="mx-auto max-w-5xl px-6 pt-16 pb-32">
      <p className="text-[10px] font-bold tracking-widest text-gold uppercase">Internal</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight text-fg md:text-5xl">Brand kit</h1>
      <p className="mt-4 max-w-2xl font-light text-fg/60">
        Use the orange button for the full zip. Or right-click any image below and choose Save image as.
      </p>
      <a
        href="/brand/cortex-brand-kit.zip"
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold tracking-widest text-bg uppercase hover:bg-gold-light"
      >
        <Download className="size-4" />
        Download full kit (zip)
      </a>
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {IMAGES.map((item) => (
          <a
            key={item.file}
            href={`/brand/${item.file}`}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-2xl border border-fg/10 bg-surface"
          >
            <div className="flex min-h-40 items-center justify-center bg-bg p-6">
              <img src={`/brand/${item.file}`} alt={item.name} className="max-h-52 w-full object-contain" />
            </div>
            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="text-fg/80 group-hover:text-fg">{item.name}</span>
              <span className="text-xs text-gold">Open / save</span>
            </div>
          </a>
        ))}
      </div>
    </article>
  );
}
