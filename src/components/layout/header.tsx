import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, LayoutDashboard, Workflow, X } from "lucide-react";
import { AuditButton } from "@/components/audit-modal";
import { CortexLogo } from "@/components/logo";
import { CortexMap } from "@/components/visuals";
import { INDUSTRIES, SERVICES } from "@/data/site";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [openMenu, setOpenMenu] = useState<"industries" | "services" | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileAcc, setMobileAcc] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const openMenuRef = useRef(openMenu);
  openMenuRef.current = openMenu;

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openNav = (menu: "industries" | "services") => {
    cancelClose();
    setHidden(false);
    setOpenMenu(menu);
  };

  const closeNav = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 280);
  };

  const toggleNav = (menu: "industries" | "services") => {
    cancelClose();
    setHidden(false);
    setOpenMenu(menu);
  };

  useEffect(() => {
    setMobile(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!openMenuRef.current) return;
      if (headerRef.current?.contains(e.target as Node)) return;
      setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      if (openMenuRef.current) {
        setHidden(false);
        lastY = window.scrollY;
        return;
      }
      const y = window.scrollY;
      const delta = y - lastY;
      if (y < 80) {
        setHidden(false);
        lastY = y;
        return;
      }
      if (Math.abs(delta) < 8) return;
      if (delta > 0) setHidden(true);
      else setHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const industryActive = pathname.startsWith("/industry") || pathname === "/industries";
  const serviceActive = ["/ai-implementation", "/ai-agents", "/private-ai", "/managed-ai", "/ops-consulting", "/business-systems-development", "/ai-enablement"].includes(
    pathname,
  );

  const navLink = (href: string, label: string) => (
    <Link
      to={href}
      className={cn(
        "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-fg/70 transition-colors hover:bg-fg/5 hover:text-fg",
        isActivePath(pathname, href) && "nav-active",
      )}
    >
      {label}
    </Link>
  );

  return (
    <div className="h-[81px]">
      <header
        ref={headerRef}
        className="fixed top-0 right-0 left-0 z-50 w-full border-b border-fg/5 bg-bg/50 font-sans backdrop-blur-xl"
        style={{
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <nav className="relative z-50 mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <CortexLogo size="sm" />

          <ul className="m-0 hidden list-none items-center gap-5 p-0 lg:flex xl:gap-6">
            <li>{navLink("/how-we-work", "How We Work")}</li>
            <li>{navLink("/about-us", "About Us")}</li>
            <li
              className="relative flex h-20 items-center"
              onMouseEnter={() => openNav("industries")}
              onMouseLeave={closeNav}
            >
              <button
                type="button"
                aria-expanded={openMenu === "industries"}
                aria-haspopup="true"
                onClick={() => toggleNav("industries")}
                className={cn(
                  "flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-fg/70 outline-none transition-colors hover:bg-fg/5 hover:text-fg",
                  (openMenu === "industries" || industryActive) && "nav-active",
                )}
              >
                Industries
                <ChevronDown className={cn("size-3.5 transition-transform duration-200", openMenu === "industries" && "rotate-180")} />
              </button>
              <Mega
                open={openMenu === "industries"}
                leftLabel="Industries We Serve"
                left={
                  <>
                    {INDUSTRIES.map((ind) => (
                      <Link key={ind.slug} to={ind.href} className="group/item block rounded-lg px-3 py-2 transition-colors hover:bg-fg/5">
                        <div className="text-sm font-semibold text-fg">{ind.name}</div>
                        <div className="mt-0.5 text-xs leading-snug text-fg/40">{ind.blurb}</div>
                      </Link>
                    ))}
                    <Link to="/industries" className="group/all mt-5 inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gold transition-colors hover:text-gold-light">
                      View all industries
                      <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/all:translate-x-0.5" />
                    </Link>
                  </>
                }
                rightLabel="From Our Resources"
                right={
                  <>
                    <MapCard to="/case-studies/eight-bay-independent" kicker="Case Study" title="8-bay independent" body="Write-ups and bay load on one board." variant={0} />
                    <MapCard to="/blog/shop-runs-on-memory" kicker="Field notes" title="The shop runs on memory" body="Three people. No system. Map first." variant={1} />
                    <MapCard to="/case-studies/storm-roofing" kicker="Case Study" title="Storm-season roofer" body="Hail to collections in one file." variant={4} />
                    <Link to="/resources" className="col-span-3 mt-2 inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gold hover:text-gold-light">
                      See all insights
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </>
                }
              />
            </li>
            <li
              className="relative flex h-20 items-center"
              onMouseEnter={() => openNav("services")}
              onMouseLeave={closeNav}
            >
              <button
                type="button"
                aria-expanded={openMenu === "services"}
                aria-haspopup="true"
                onClick={() => toggleNav("services")}
                className={cn(
                  "flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-fg/70 outline-none transition-colors hover:bg-fg/5 hover:text-fg",
                  (openMenu === "services" || serviceActive) && "nav-active",
                )}
              >
                Services
                <ChevronDown className={cn("size-3.5 transition-transform duration-200", openMenu === "services" && "rotate-180")} />
              </button>
              <Mega
                open={openMenu === "services"}
                leftLabel="Services"
                left={
                  <>
                    {SERVICES.map((s) => (
                      <Link key={s.slug} to={s.href} className="block rounded-lg px-3 py-2 transition-colors hover:bg-fg/5">
                        <div className="text-sm font-semibold text-fg">{s.name}</div>
                        <div className="mt-0.5 text-xs leading-snug text-fg/40">{s.blurb}</div>
                      </Link>
                    ))}
                    <p className="mt-4 mb-3 px-3 text-[10px] font-bold tracking-widest text-gold uppercase">More</p>
                    <Link to="/how-we-work" className="block rounded-lg px-3 py-2 hover:bg-fg/5">
                      <div className="text-sm font-semibold text-fg">How We Work</div>
                      <div className="mt-0.5 text-xs text-fg/40">Map, unify, automate.</div>
                    </Link>
                    <Link to="/case-studies" className="block rounded-lg px-3 py-2 hover:bg-fg/5">
                      <div className="text-sm font-semibold text-fg">Case Studies</div>
                      <div className="mt-0.5 text-xs text-fg/40">Systems we’ve mapped.</div>
                    </Link>
                  </>
                }
                rightLabel="What We Build"
                right={
                  <>
                    <MapCard to="/how-we-work" kicker="Foundation" title="The workforce" body="Agents connected to the software you already run." variant={0} />
                    <IconCard to="/ai-agents" kicker="Agents" title="Specialists" body="Follow-up, monitoring, reporting." icon={<LayoutDashboard className="size-10 text-gold" />} />
                    <IconCard to="/private-ai" kicker="Infrastructure" title="Cloud or private" body="Right model for the job." icon={<Workflow className="size-10 text-gold" />} />
                    <Link to="/audit" className="col-span-3 mt-2 inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gold hover:text-gold-light">
                      Get a Free AI Operations Audit
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </>
                }
              />
            </li>
            <li>{navLink("/case-studies", "Case Studies")}</li>
            <li>{navLink("/resources", "Resources")}</li>
          </ul>

          <AuditButton size="sm" className="hidden lg:inline-flex">
            Free Audit
          </AuditButton>

          <button
            type="button"
            aria-label="Open menu"
            className={cn("block cursor-pointer p-2 select-none lg:hidden", mobile && "hamburger-active")}
            onClick={() => setMobile(true)}
          >
            <span className="line my-[5px] block h-0.5 w-[25px] bg-fg transition-all duration-300" />
            <span className="line my-[5px] block h-0.5 w-[25px] bg-fg transition-all duration-300" />
            <span className="line my-[5px] block h-0.5 w-[25px] bg-fg transition-all duration-300" />
          </button>
        </nav>

        <div
          className={cn(
            "fixed inset-y-0 right-0 z-60 flex h-dvh w-[85%] max-w-[400px] transform flex-col border-l border-fg/10 bg-bg shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",
            mobile ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-fg/5 p-6">
            <span className="text-lg font-semibold tracking-tight text-fg">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobile(false)}
              className="rounded-full bg-fg/5 p-2 text-fg/60 hover:bg-fg/10 hover:text-fg"
            >
              <X className="size-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <ul className="m-0 flex list-none flex-col gap-2 p-0">
              <MobileLink to="/how-we-work">How We Work</MobileLink>
              <MobileLink to="/about-us">About Us</MobileLink>
              <li>
                <AccBtn open={mobileAcc === "ind"} onClick={() => setMobileAcc(mobileAcc === "ind" ? null : "ind")}>
                  Industries
                </AccBtn>
                {mobileAcc === "ind" && (
                  <ul className="ml-1 flex flex-col gap-1 border-l border-fg/10 pb-2 pl-4">
                    {INDUSTRIES.map((i) => (
                      <li key={i.slug}>
                        <Link to={i.href} className="block py-2 text-base text-fg/60 hover:text-fg">
                          {i.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link to="/industries" className="block py-2 text-base font-medium text-gold">
                        View All Industries →
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <AccBtn open={mobileAcc === "svc"} onClick={() => setMobileAcc(mobileAcc === "svc" ? null : "svc")}>
                  Services
                </AccBtn>
                {mobileAcc === "svc" && (
                  <ul className="ml-1 flex flex-col gap-1 border-l border-fg/10 pb-2 pl-4">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <Link to={s.href} className="block py-2 text-base text-fg/60 hover:text-fg">
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <MobileLink to="/case-studies">Case Studies</MobileLink>
              <MobileLink to="/resources">Resources</MobileLink>
              <li className="mt-4 border-t border-fg/5 pt-4">
                <AuditButton size="sm">Free Audit</AuditButton>
              </li>
            </ul>
          </div>
        </div>
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setMobile(false)}
          className={cn(
            "fixed inset-0 z-50 bg-bg/60 backdrop-blur-sm transition-opacity duration-500",
            mobile ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        />
      </header>
    </div>
  );
}

function Mega({
  open,
  leftLabel,
  left,
  rightLabel,
  right,
}: {
  open: boolean;
  leftLabel: string;
  left: React.ReactNode;
  rightLabel: string;
  right: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "fixed top-20 left-0 z-[70] w-full origin-top -mt-2 pt-2 transition-all duration-200",
        open ? "visible opacity-100" : "invisible pointer-events-none opacity-0",
      )}
    >
      <div className="border-y border-fg/10 bg-surface shadow-2xl shadow-bg/60">
        <div className="mx-auto grid max-w-7xl grid-cols-12">
          <div className="col-span-5 border-r border-fg/5 p-6 lg:p-8">
            <p className="mb-5 text-[10px] font-bold tracking-widest text-gold uppercase">{leftLabel}</p>
            <div className="flex flex-col gap-1">{left}</div>
          </div>
          <div className="col-span-7 p-6 lg:p-8">
            <p className="mb-5 text-[10px] font-bold tracking-widest text-gold uppercase">{rightLabel}</p>
            <div className="grid grid-cols-3 gap-3">{right}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapCard({
  to,
  kicker,
  title,
  body,
  variant,
}: {
  to: string;
  kicker: string;
  title: string;
  body: string;
  variant: number;
}) {
  return (
    <Link to={to} className="group/card flex flex-col overflow-hidden rounded-lg border border-fg/10 bg-surface transition-all hover:-translate-y-0.5 hover:border-gold/40">
      <div className="aspect-video overflow-hidden bg-bg">
        <CortexMap variant={variant} />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <div className="mb-1 text-[9px] font-bold tracking-widest text-gold uppercase">{kicker}</div>
        <div className="mb-1 text-xs leading-snug font-semibold text-fg">{title}</div>
        <div className="text-[11px] leading-snug text-fg/40">{body}</div>
      </div>
    </Link>
  );
}

function IconCard({
  to,
  kicker,
  title,
  body,
  icon,
}: {
  to: string;
  kicker: string;
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <Link to={to} className="group/card flex flex-col overflow-hidden rounded-lg border border-fg/10 bg-surface transition-all hover:-translate-y-0.5 hover:border-gold/40">
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-linear-to-br from-gold/15 via-gold/5 to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(var(--gold-rgb)/0.18),transparent_70%)]" />
        <span className="relative z-10">{icon}</span>
      </div>
      <div className="flex flex-1 flex-col p-3">
        <div className="mb-1 text-[9px] font-bold tracking-widest text-gold uppercase">{kicker}</div>
        <div className="mb-1 text-xs leading-snug font-semibold text-fg">{title}</div>
        <div className="text-[11px] leading-snug text-fg/40">{body}</div>
      </div>
    </Link>
  );
}

function MobileLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="block rounded-lg px-4 py-3 text-lg font-medium text-fg/80 hover:bg-fg/5 hover:text-gold">
        {children}
      </Link>
    </li>
  );
}

function AccBtn({ open, onClick, children }: { open: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-lg font-medium text-fg/80 outline-none hover:bg-fg/5 hover:text-gold"
    >
      {children}
      <ChevronDown className={cn("size-5 text-fg/40 transition-transform duration-300 group-hover:text-gold", open && "rotate-180")} />
    </button>
  );
}
