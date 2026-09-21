import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { BeamButton } from "@/components/ui/beam-button";
import { CortexLogo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";
import { openCookieManager } from "@/components/cookie-banner";
import { BRAND } from "@/data/brand";
import { INDUSTRIES, SERVICES, industryParam } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="relative z-20 mt-12 border-t border-fg/10 bg-bg pt-10 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-5 border-b border-fg/5 pb-8 lg:flex-row lg:items-center lg:justify-between">
          <CortexLogo withTagline={false} />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <h3 className="text-xl font-medium tracking-tight text-fg sm:text-2xl">
              See where AI belongs, without learning it.
            </h3>
            <BeamButton className="w-full shrink-0 sm:w-auto" to="/audit" size="sm">
              Get Your Free AI Operations Audit
            </BeamButton>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-fg/5 py-5">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-fg/60">
            <a href={BRAND.phoneHref} className="flex items-center gap-2 hover:text-gold">
              <Phone className="size-3.5" />
              {BRAND.phone}
            </a>
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-gold">
              <Mail className="size-3.5" />
              {BRAND.email}
            </a>
          </div>
          <SocialLinks />
        </div>

        <div className="grid grid-cols-2 gap-8 py-8 md:grid-cols-4 lg:gap-12">
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
            {BRAND.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-fg/50 hover:text-fg"
              >
                {s.name}
              </a>
            ))}
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
