import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { BeamButton } from "@/components/ui/beam-button";
import { CortexLogo } from "@/components/logo";
import { openCookieManager } from "@/components/cookie-banner";
import { BRAND } from "@/data/brand";
import { INDUSTRIES, SERVICES, industryParam } from "@/data/site";

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
              Custom AI systems that work across the software your business already runs. Agents monitor, follow up,
              report, and escalate. The same build includes a secure dashboard for the numbers.
            </p>
            <div className="space-y-2 text-sm text-fg/70">
              <p>{BRAND.name} · {BRAND.city}</p>
              <a href={BRAND.phoneHref} className="flex items-center gap-2 hover:text-gold">
                <Phone className="size-3.5" />
                {BRAND.phone}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-gold">
                <Mail className="size-3.5" />
                {BRAND.email}
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 lg:flex lg:items-end lg:justify-end">
            <div className="max-w-md">
              <h3 className="text-2xl font-medium tracking-tight text-fg">See where AI could actually help.</h3>
              <p className="mt-3 mb-6 font-light text-fg/60">A Free AI Operations Audit. Practical, specific, no obligation to build.</p>
              <BeamButton to="/audit">Get Your Free AI Operations Audit</BeamButton>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4 lg:gap-12">
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
              <li>
                <Link to="/ai-workshops" className="hover:text-fg">
                  AI Workshops
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-5 text-[10px] font-bold tracking-widest text-gold uppercase">Industries</div>
            <ul className="space-y-3 text-sm font-light text-fg/60">
              {INDUSTRIES.slice(0, 6).map((i) => (
                <li key={i.slug}>
                  <Link to="/industries/$slug" params={{ slug: industryParam(i) }} className="hover:text-fg">
                    {i.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/industries" className="hover:text-fg">
                  All industries
                </Link>
              </li>
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
                <Link to="/contact" className="hover:text-fg">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/trust" className="hover:text-fg">
                  Trust and security
                </Link>
              </li>
              <li>
                <Link to="/integrations" className="hover:text-fg">
                  Integrations
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-fg">
                  Case Study
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-fg">
                  Field notes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-5 text-[10px] font-bold tracking-widest text-gold uppercase">Legal</div>
            <ul className="space-y-3 text-sm font-light text-fg/60">
              <li>
                <Link to="/privacy" className="hover:text-fg">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-fg">
                  Terms
                </Link>
              </li>
              <li>
                <button type="button" onClick={openCookieManager} className="hover:text-fg">
                  Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-fg/5 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-light text-fg/50">
            © 2026 {BRAND.name}. {BRAND.legal}. {BRAND.city}.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/audit" className="text-xs text-fg/50 hover:text-fg">
              Free audit
            </Link>
            <Link to="/privacy" className="text-xs text-fg/50 hover:text-fg">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-fg/50 hover:text-fg">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
