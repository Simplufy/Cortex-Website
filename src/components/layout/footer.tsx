import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { BeamButton } from "@/components/ui/beam-button";
import { CortexLogo } from "@/components/logo";
import { openCookieManager } from "@/components/cookie-banner";
import { BRAND } from "@/data/brand";
import { INDUSTRIES, SERVICES } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="relative z-20 mt-24 border-t border-fg/10 bg-bg pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 border-b border-fg/5 pb-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="mb-6">
              <CortexLogo />
            </div>
            <p className="mb-2 text-[10px] font-bold tracking-[0.18em] text-gold uppercase">{BRAND.legal}</p>
            <p className="mb-6 max-w-md text-lg leading-relaxed font-light text-fg/70">
              We install AI agents inside the software your business already uses. Follow-up, monitoring, reporting.
              Your people keep the work that needs a person.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-fg/60 uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              Auto · HVAC · Pest · Roofing · Home Services
            </div>
          </div>
          <div className="lg:col-span-7 lg:flex lg:items-end lg:justify-end">
            <div className="max-w-md">
              <h3 className="text-2xl font-medium tracking-tight text-fg">See where AI could actually help.</h3>
              <p className="mt-3 mb-6 font-light text-fg/60">A Free AI Operations Audit. Practical, specific, no obligation to build.</p>
              <BeamButton to="/audit">Get a Free Audit</BeamButton>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-3 lg:gap-12">
          <div>
            <div className="mb-5 text-[10px] font-bold tracking-widest text-gold uppercase">Services</div>
            <ul className="space-y-3 text-sm font-light text-fg/60">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={s.href} className="hover:text-fg">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/how-we-work" className="hover:text-fg">
                  How We Work
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-5 text-[10px] font-bold tracking-widest text-gold uppercase">Industries</div>
            <ul className="space-y-3 text-sm font-light text-fg/60">
              {INDUSTRIES.map((i) => (
                <li key={i.slug}>
                  <Link to={i.href} className="hover:text-fg">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-5 text-[10px] font-bold tracking-widest text-gold uppercase">Company</div>
            <ul className="space-y-3 text-sm font-light text-fg/60">
              <li>
                <Link to="/about-us" className="hover:text-fg">
                  About
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-fg">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-fg">
                  Field notes
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-fg">
                  Industries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-fg/5 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-light text-fg/40">
            © 2026 {BRAND.name} {BRAND.legal}. {BRAND.domain}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={`mailto:${BRAND.email}`} aria-label="Email" className="text-fg/40 hover:text-gold">
              <Mail className="size-4" />
            </a>
            <Link to="/audit" className="text-xs text-fg/40 hover:text-fg">
              Free audit
            </Link>
            <Link to="/privacy" className="text-xs text-fg/40 hover:text-fg">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-fg/40 hover:text-fg">
              Terms of Service
            </Link>
            <button type="button" onClick={openCookieManager} className="text-xs text-fg/40 hover:text-fg">
              Manage cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
