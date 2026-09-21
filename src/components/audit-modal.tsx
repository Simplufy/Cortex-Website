import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { X } from "lucide-react";
import { INDUSTRIES } from "@/data/site";
import { BeamButton } from "@/components/ui/beam-button";
import { qualifyAudit, REVENUE_OPTIONS, submitAudit } from "@/lib/submit-audit";
import { auditPath } from "@/lib/audit-path";

type AuditOpts = { industry?: string };
type Snap = { open: boolean; preset: AuditOpts };

const SERVER_SNAP: Snap = { open: false, preset: {} };
let snap: Snap = SERVER_SNAP;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export function openAudit(opts?: AuditOpts) {
  snap = { open: true, preset: opts ?? {} };
  emit();
}

export function closeAudit() {
  snap = { open: false, preset: snap.preset };
  emit();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

function getSnapshot() {
  return snap;
}

function getServerSnapshot() {
  return SERVER_SNAP;
}

export function useAudit() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return { open: state.open, preset: state.preset, openAudit, closeAudit };
}

export function AuditProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <AuditModal />
    </>
  );
}

const KEY = "cortex-audits";
const empty = {
  first: "",
  last: "",
  email: "",
  phone: "",
  company: "",
  industry: "",
  revenue: "",
  website: "",
  employees: "",
  locations: "",
  software: "",
  pain: "",
  help: "",
};

const inputCls =
  "w-full rounded-lg border border-fg/10 bg-bg px-3 py-2 text-sm text-fg outline-none placeholder:text-fg/30 focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/60";

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
  const { open, preset, closeAudit } = useAudit();
  const navigate = useNavigate();
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState(empty);

  useEffect(() => {
    if (!open) {
      setStep(1);
      setBusy(false);
      setError("");
      return;
    }
    setForm({ ...empty, industry: preset.industry || "" });
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
  }, [open, preset.industry, closeAudit]);

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

  if (!open || typeof document === "undefined") return null;

  const ui = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
      <button type="button" aria-label="Close" className="absolute inset-0 bg-bg/80 backdrop-blur-sm" onClick={closeAudit} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-fg/10 bg-surface shadow-2xl"
      >
        <button
          type="button"
          onClick={closeAudit}
          className="absolute top-3 right-3 rounded-full p-2 text-fg/50 hover:bg-fg/5 hover:text-fg focus-visible:ring-2 focus-visible:ring-gold/60"
          aria-label="Close form"
        >
          <X className="size-4" />
        </button>
        <div className="px-4 py-4 sm:px-6 sm:py-5">
          {step === 2 ? (
            <>
              <p className="text-[10px] font-bold tracking-widest text-gold uppercase">Step 2 of 2</p>
              <h2 id={titleId} className="mt-1 pr-8 text-xl font-medium tracking-tight text-fg sm:text-2xl">
                Help us prepare.
              </h2>
              <form onSubmit={sendStep2} className="mt-4 grid grid-cols-2 gap-2.5">
                <label className="block">
                  <span className="mb-1 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Employees</span>
                  <input required {...field("employees")} className={inputCls} placeholder="e.g. 28" />
                </label>
                <label className="block">
                  <span className="mb-1 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Locations</span>
                  <input required {...field("locations")} className={inputCls} placeholder="e.g. 3" />
                </label>
                <label className="col-span-2 block">
                  <span className="mb-1 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">
                    What software do you use?
                  </span>
                  <input required {...field("software")} className={inputCls} placeholder="Tekmetric, GHL, QuickBooks…" />
                </label>
                <label className="col-span-2 block sm:col-span-1">
                  <span className="mb-1 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">
                    Biggest repetitive processes
                  </span>
                  <textarea
                    required
                    {...field("pain")}
                    rows={2}
                    className={`${inputCls} resize-none`}
                    placeholder="Follow-up, reporting, stalled jobs…"
                  />
                </label>
                <label className="col-span-2 block sm:col-span-1">
                  <span className="mb-1 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">
                    What should AI help with?
                  </span>
                  <textarea
                    required
                    {...field("help")}
                    rows={2}
                    className={`${inputCls} resize-none`}
                    placeholder="The queue that still depends on memory."
                  />
                </label>
                {error ? <p className="col-span-2 text-sm text-red-400">{error}</p> : null}
                <div className="col-span-2 pt-1">
                  <BeamButton type="submit" className="w-full" disabled={busy}>
                    {busy ? "Saving…" : "Submit audit"}
                  </BeamButton>
                </div>
              </form>
            </>
          ) : (
            <>
              <p className="text-[10px] font-bold tracking-widest text-gold uppercase">Free AI Operations Audit · Step 1</p>
              <h2 id={titleId} className="mt-1 pr-8 text-xl font-medium tracking-tight text-fg sm:text-2xl">
                See where AI could actually help.
              </h2>
              <form onSubmit={sendStep1} className="mt-4 grid grid-cols-2 gap-2.5">
                <label className="block">
                  <span className="mb-1 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">First name</span>
                  <input required {...field("first")} className={inputCls} placeholder="McGuire" autoComplete="given-name" />
                </label>
                <label className="block">
                  <span className="mb-1 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Last name</span>
                  <input required {...field("last")} className={inputCls} placeholder="Flanigan" autoComplete="family-name" />
                </label>
                <label className="col-span-2 block sm:col-span-1">
                  <span className="mb-1 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Work email</span>
                  <input required type="email" {...field("email")} className={inputCls} placeholder="you@company.com" autoComplete="email" />
                </label>
                <label className="col-span-2 block sm:col-span-1">
                  <span className="mb-1 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Phone</span>
                  <input required type="tel" {...field("phone")} className={inputCls} placeholder="(614) 000-0000" autoComplete="tel" />
                </label>
                <label className="block">
                  <span className="mb-1 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Company</span>
                  <input required {...field("company")} className={inputCls} placeholder="Company name" autoComplete="organization" />
                </label>
                <label className="block">
                  <span className="mb-1 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Website</span>
                  <input required {...field("website")} className={inputCls} placeholder="https://" autoComplete="url" />
                </label>
                <label className="block">
                  <span className="mb-1 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Industry</span>
                  <select required {...field("industry")} className={inputCls}>
                    <option value="" disabled>
                      Select
                    </option>
                    {INDUSTRIES.map((i) => (
                      <option key={i.slug} value={i.slug}>
                        {i.name}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1 block text-[10px] font-bold tracking-widest text-fg/50 uppercase">Annual revenue</span>
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
                <div className="col-span-2 pt-1">
                  {error ? <p className="mb-2 text-sm text-red-400">{error}</p> : null}
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

  return createPortal(ui, document.body);
}

export function AuditButton({
  children,
  className,
  size,
  variant,
  industry,
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md";
  variant?: "beam" | "solid";
  industry?: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const landerMatch = pathname.match(/^\/audit\/([^/]+)\/?$/);
  const resolvedIndustry = industry || landerMatch?.[1];
  const onLander = pathname === "/audit" || pathname.startsWith("/audit/");

  if (!onLander) {
    return (
      <BeamButton
        to={auditPath(resolvedIndustry)}
        className={className}
        size={size}
        variant={variant}
      >
        {children}
      </BeamButton>
    );
  }

  return (
    <BeamButton
      type="button"
      className={className}
      size={size}
      variant={variant}
      onClick={() => openAudit({ industry: resolvedIndustry })}
    >
      {children}
    </BeamButton>
  );
}
