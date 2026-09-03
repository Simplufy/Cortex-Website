import { createContext, useContext, useEffect, useId, useRef, useState } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { X } from "lucide-react";
import { INDUSTRIES } from "@/data/site";
import { BeamButton } from "@/components/ui/beam-button";
import { qualifyAudit, REVENUE_OPTIONS, submitAudit } from "@/lib/submit-audit";

type AuditCtx = { open: boolean; openAudit: () => void; closeAudit: () => void };
const Ctx = createContext<AuditCtx | null>(null);

export function useAudit() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAudit must be inside AuditProvider");
  return ctx;
}

export function AuditProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <Ctx.Provider value={{ open, openAudit: () => setOpen(true), closeAudit: () => setOpen(false) }}>
      {children}
      <AuditModal />
    </Ctx.Provider>
  );
}

const KEY = "cortex-audits";
const empty = {
  first: "",
  last: "",
  email: "",
  phone: "",
  company: "",
  industry: "automotive",
  revenue: "",
  website: "",
  employees: "",
  locations: "",
  software: "",
  pain: "",
  help: "",
};

const inputCls =
  "w-full rounded-lg border border-fg/10 bg-bg px-3 py-2.5 text-sm text-fg outline-none placeholder:text-fg/30 focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/60";

function utms() {
  if (typeof window === "undefined") return { utmSource: "", utmMedium: "", utmCampaign: "" };
  const p = new URLSearchParams(window.location.search);
  return {
    utmSource: p.get("utm_source") || "",
    utmMedium: p.get("utm_medium") || "",
    utmCampaign: p.get("utm_campaign") || "",
  };
}

function AuditModal() {
  const { open, closeAudit } = useAudit();
  const navigate = useNavigate();
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState(empty);

  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAudit();
      if (e.key !== "Tab" || !dialogRef.current) return;
      const nodes = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>("input, select, button")?.focus();
    }, 20);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
      lastFocus.current?.focus();
    };
  }, [open, closeAudit]);

  useEffect(() => {
    if (!open) {
      setStep(1);
      setBusy(false);
      setError("");
    }
  }, [open]);

  const field = (k: keyof typeof form) => ({
    value: form[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value })),
  });

  const done = () => {
    closeAudit();
    void navigate({ to: "/thanks" });
  };

  const sendStep1 = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      const prev = JSON.parse(localStorage.getItem(KEY) || "[]") as unknown[];
      prev.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem(KEY, JSON.stringify(prev));
    } catch {
      /* ignore */
    }
    try {
      await submitAudit({ data: { ...form, ...utms() } });
      setStep(2);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send. Try again.");
    } finally {
      setBusy(false);
    }
  };

  const sendStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      await qualifyAudit({ data: form });
      done();
    } catch {
      done();
    } finally {
      setBusy(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button type="button" aria-label="Close" className="absolute inset-0 bg-bg/80 backdrop-blur-sm" onClick={closeAudit} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-lg rounded-t-2xl border border-fg/10 bg-surface shadow-2xl sm:rounded-2xl"
      >
        <button
          type="button"
          onClick={closeAudit}
          className="absolute top-4 right-4 rounded-full p-2 text-fg/50 hover:bg-fg/5 hover:text-fg focus-visible:ring-2 focus-visible:ring-gold/60"
          aria-label="Close form"
        >
          <X className="size-5" />
        </button>
        <div className="p-6 sm:p-8">
          {step === 2 ? (
            <>
              <p className="text-[10px] font-bold tracking-widest text-gold uppercase">Step 2 of 2</p>
              <h2 id={titleId} className="mt-2 text-2xl font-medium tracking-tight text-fg md:text-3xl">
                Help us prepare.
              </h2>
              <p className="mt-2 text-sm font-light text-fg/50">
                A few facts so the walkthrough is about your operation.
              </p>
              <form onSubmit={sendStep2} className="mt-6 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Employees</span>
                    <input required {...field("employees")} className={inputCls} placeholder="e.g. 28" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Locations</span>
                    <input required {...field("locations")} className={inputCls} placeholder="e.g. 3" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">
                    What software do you use?
                  </span>
                  <input required {...field("software")} className={inputCls} placeholder="Tekmetric, GHL, QuickBooks…" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">
                    Biggest repetitive processes
                  </span>
                  <textarea
                    required
                    {...field("pain")}
                    rows={3}
                    className={inputCls}
                    placeholder="Follow-up, reporting, stalled jobs, unbilled work…"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">
                    What would you most like AI to help with?
                  </span>
                  <textarea
                    required
                    {...field("help")}
                    rows={3}
                    className={inputCls}
                    placeholder="The one queue that still depends on someone remembering."
                  />
                </label>
                {error ? <p className="text-sm text-red-400">{error}</p> : null}
                <div className="pt-2">
                  <BeamButton type="submit" className="w-full" disabled={busy}>
                    {busy ? "Saving…" : "Submit audit"}
                  </BeamButton>
                </div>
              </form>
            </>
          ) : (
            <>
              <p className="text-[10px] font-bold tracking-widest text-gold uppercase">Free AI Operations Audit · Step 1</p>
              <h2 id={titleId} className="mt-2 text-2xl font-medium tracking-tight text-fg md:text-3xl">
                See where AI could actually help.
              </h2>
              <p className="mt-2 text-sm font-light text-fg/50">
                Apply in a minute. Then a 30-minute walkthrough. You leave with an AI Opportunity Map.
              </p>
              <form onSubmit={sendStep1} className="mt-6 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">First name</span>
                    <input required {...field("first")} className={inputCls} placeholder="McGuire" autoComplete="given-name" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Last name</span>
                    <input required {...field("last")} className={inputCls} placeholder="Flanigan" autoComplete="family-name" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Work email</span>
                  <input required type="email" {...field("email")} className={inputCls} placeholder="you@company.com" autoComplete="email" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Phone</span>
                  <input required type="tel" {...field("phone")} className={inputCls} placeholder="(614) 000-0000" autoComplete="tel" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Company</span>
                  <input required {...field("company")} className={inputCls} placeholder="Company name" autoComplete="organization" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Website</span>
                  <input required {...field("website")} className={inputCls} placeholder="https://" autoComplete="url" />
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Industry</span>
                    <select {...field("industry")} className={inputCls}>
                      {INDUSTRIES.map((i) => (
                        <option key={i.slug} value={i.slug}>
                          {i.name}
                        </option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Annual revenue</span>
                    <select required {...field("revenue")} className={inputCls}>
                      <option value="" disabled>
                        Select
                      </option>
                      {REVENUE_OPTIONS.map((r) => (
                        <option key={r.value} value={r.value}>
                          {r.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="pt-2">
                  {error ? <p className="mb-3 text-sm text-red-400">{error}</p> : null}
                  <BeamButton type="submit" className="w-full" disabled={busy}>
                    {busy ? "Sending…" : "Get my free audit"}
                  </BeamButton>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function AuditButton({
  children,
  className,
  size,
  variant,
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md";
  variant?: "beam" | "solid";
}) {
  const { openAudit } = useAudit();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/audit") {
    return (
      <BeamButton onClick={openAudit} className={className} size={size} variant={variant}>
        {children}
      </BeamButton>
    );
  }
  return (
    <BeamButton to="/audit" className={className} size={size} variant={variant}>
      {children}
    </BeamButton>
  );
}
