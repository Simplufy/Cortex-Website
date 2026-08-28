import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const KEY = "ok-cookie-consent";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

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
    <div className="fixed inset-x-0 bottom-0 z-[80] p-4 sm:p-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-fg/10 bg-surface/95 p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:flex-row sm:items-center sm:p-6">
        <p className="flex-1 text-sm font-light leading-relaxed text-fg/70">
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
            className="rounded-full border border-fg/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-fg/60 hover:text-fg"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-full bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-widest text-bg hover:bg-gold-light"
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
