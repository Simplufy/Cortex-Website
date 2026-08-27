import { createContext, useContext, useEffect, useId, useState } from "react";
import { X } from "lucide-react";
import { INDUSTRIES } from "@/data/site";
import { BRAND } from "@/data/brand";
import { BeamButton } from "@/components/ui/beam-button";

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

const inputCls =
  "w-full rounded-lg border border-fg/10 bg-bg px-3 py-2.5 text-sm text-fg outline-none placeholder:text-fg/30 focus:border-gold/50";

function AuditModal() {
  const { open, closeAudit } = useAudit();
  const titleId = useId();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    industry: "automotive",
    revenue: "1-3",
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAudit();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeAudit]);

  useEffect(() => {
    if (!open) setSent(false);
  }, [open]);

  const field = (k: keyof typeof form) => ({
    value: form[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value })),
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const prev = JSON.parse(localStorage.getItem(KEY) || "[]") as unknown[];
      prev.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem(KEY, JSON.stringify(prev));
    } catch {
      /* ignore */
    }
    setSent(true);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button type="button" aria-label="Close" className="absolute inset-0 bg-bg/80 backdrop-blur-sm" onClick={closeAudit} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-lg rounded-t-2xl border border-fg/10 bg-surface shadow-2xl sm:rounded-2xl"
      >
        <button
          type="button"
          onClick={closeAudit}
          className="absolute top-4 right-4 rounded-full p-2 text-fg/40 hover:bg-fg/5 hover:text-fg"
          aria-label="Close form"
        >
          <X className="size-5" />
        </button>
        <div className="p-6 sm:p-8">
          {sent ? (
            <div className="py-6 text-center">
              <p className="text-[10px] font-bold tracking-widest text-gold uppercase">Request in</p>
              <h2 id={titleId} className="mt-3 text-3xl font-medium tracking-tight text-fg">
                You’re on the list.
              </h2>
              <p className="mt-4 font-light text-fg/60">
                {BRAND.founder} will email {form.email} to set up the free audit.
              </p>
              <button type="button" onClick={closeAudit} className="mt-8 text-sm text-fg/50 hover:text-fg">
                Close
              </button>
            </div>
          ) : (
            <>
              <p className="text-[10px] font-bold tracking-widest text-gold uppercase">Free AI Operations Audit</p>
              <h2 id={titleId} className="mt-2 text-2xl font-medium tracking-tight text-fg md:text-3xl">
                See where AI could actually help.
              </h2>
              <p className="mt-2 text-sm font-light text-fg/50">
                Software, repetitive work, stalls. No generic presentation. No obligation to build.
              </p>
              <form onSubmit={onSubmit} className="mt-6 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/40 uppercase">First name</span>
                    <input required {...field("first")} className={inputCls} placeholder="McGuire" autoComplete="given-name" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/40 uppercase">Last name</span>
                    <input required {...field("last")} className={inputCls} placeholder="Flanigan" autoComplete="family-name" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/40 uppercase">Email</span>
                  <input required type="email" {...field("email")} className={inputCls} placeholder="you@company.com" autoComplete="email" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/40 uppercase">Phone</span>
                  <input required type="tel" {...field("phone")} className={inputCls} placeholder="(555) 000-0000" autoComplete="tel" />
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/40 uppercase">Industry</span>
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
                    <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-fg/40 uppercase">Revenue</span>
                    <select {...field("revenue")} className={inputCls}>
                      <option value="under-1">Under $1M</option>
                      <option value="1-3">$1M to $3M</option>
                      <option value="3-8">$3M to $8M</option>
                      <option value="8-20">$8M to $20M</option>
                      <option value="20+">$20M+</option>
                    </select>
                  </label>
                </div>
                <div className="pt-2">
                  <BeamButton type="submit" className="w-full">Get my free audit</BeamButton>
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
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md";
}) {
  const { openAudit } = useAudit();
  return (
    <BeamButton onClick={openAudit} className={className} size={size}>
      {children}
    </BeamButton>
  );
}
