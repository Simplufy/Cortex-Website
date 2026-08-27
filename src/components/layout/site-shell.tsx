import { Link, useRouterState } from "@tanstack/react-router";
import { NetBackground } from "@/components/net-bg";
import { CookieBanner } from "@/components/cookie-banner";
import { SiteHeader } from "@/components/layout/header";
import { SiteFooter } from "@/components/layout/footer";
import { AuditProvider, AuditButton } from "@/components/audit-modal";
import { CortexLogo } from "@/components/logo";
import { BRAND } from "@/data/brand";
import { openCookieManager } from "@/components/cookie-banner";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const landing = pathname === "/audit";

  return (
    <AuditProvider>
      <div className="relative min-h-screen bg-bg text-fg">
        <NetBackground />
        <div className="relative z-10 flex min-h-screen flex-col">
          {landing ? <LandingHeader /> : <SiteHeader />}
          <div className="flex-1">{children}</div>
          {landing ? <LandingFooter /> : <SiteFooter />}
        </div>
        <CookieBanner />
      </div>
    </AuditProvider>
  );
}

function LandingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-fg/5 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <CortexLogo size="sm" withTagline={false} />
        <AuditButton size="sm">Free audit</AuditButton>
      </div>
    </header>
  );
}

function LandingFooter() {
  return (
    <footer className="border-t border-fg/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs text-fg/40 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 {BRAND.name}. {BRAND.domain}
        </p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-fg">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-fg">
            Terms
          </Link>
          <button type="button" onClick={openCookieManager} className="hover:text-fg">
            Cookies
          </button>
        </div>
      </div>
    </footer>
  );
}
