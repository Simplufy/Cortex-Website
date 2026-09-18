import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const KEY = "ok-cookie-consent";

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const raised = pathname === "/audit" || pathname.startsWith("/audit/");

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const choose = (v: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, v);
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  useEffect(() => {
    const onManage = () => setOpen(true);
    window.addEventListener("ok-manage-cookies", onManage);
    return () => window.removeEventListener("ok-manage-cookies", onManage);
  }, []);

  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed inset-x-0 z-[90] p-3 sm:p-6",
        raised ? "bottom-28 md:bottom-0" : "bottom-0",
      )}
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-fg/10 bg-surface/95 p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:flex-row sm:items-center sm:gap-4 sm:p-6">
        <p className="flex-1 text-xs leading-relaxed font-light text-fg/70 sm:text-sm">
          We use cookies needed to run the site. We do not currently load analytics.{" "}
          <Link to="/privacy" className="text-gold hover:text-gold-light">
            Privacy
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => choose("declined")}
            className="min-h-11 flex-1 rounded-full border border-fg/10 px-4 py-2 text-xs font-semibold tracking-widest text-fg/60 uppercase hover:text-fg sm:flex-none"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="min-h-11 flex-1 rounded-full bg-gold px-4 py-2 text-xs font-semibold tracking-widest text-bg uppercase hover:bg-gold-light sm:flex-none"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export function openCookieManager() {
  window.dispatchEvent(new Event("ok-manage-cookies"));
}
