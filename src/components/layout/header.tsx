import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, X } from "lucide-react";
import { AuditButton } from "@/components/audit-modal";
import { CortexLogo } from "@/components/logo";
import { INDUSTRIES, SERVICES, industryParam } from "@/data/site";
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
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  };
  const toggleNav = (menu: "industries" | "services") => {
    cancelClose();
    setOpenMenu((cur) => (cur === menu ? null : menu));
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
      const y = window.scrollY;
      setHidden(y > 80 && y > lastY && !openMenuRef.current && !mobile);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobile]);

  const navLink = (href: string, label: string) => (
    <Link
      to={href}
      className={cn(
        "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-fg/70 transition-colors hover:bg-fg/5 hover:text-fg focus-visible:ring-2 focus-visible:ring-gold/60",
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
          <ul className="m-0 hidden list-none items-center gap-2 p-0 lg:flex">
            <li>{navLink("/how-we-work", "How It Works")}</li>
            <li className="relative" onMouseEnter={() => openNav("industries")} onMouseLeave={closeNav}>
              <button
                type="button"
                aria-expanded={openMenu === "industries"}
                aria-haspopup="true"
                onClick={() => toggleNav("industries")}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-fg/70 outline-none hover:bg-fg/5 hover:text-fg focus-visible:ring-2 focus-visible:ring-gold/60",
                  (openMenu === "industries" || pathname.startsWith("/industr")) && "nav-active",
                )}
              >
                Industries
                <ChevronDown className={cn("size-3.5", openMenu === "industries" && "rotate-180")} />
              </button>
              {openMenu === "industries" && (
                <div className="absolute top-full left-0 z-70 min-w-56 rounded-xl border border-fg/10 bg-surface p-2 shadow-2xl">
                  {INDUSTRIES.map((ind) => (
                    <Link key={ind.slug} to="/industries/$slug" params={{ slug: industryParam(ind) }} className="block rounded-lg px-3 py-2 text-sm text-fg/70 hover:bg-fg/5 hover:text-fg">
                      {ind.name}
                    </Link>
                  ))}
                  <Link to="/industries" className="mt-1 block rounded-lg px-3 py-2 text-sm font-medium text-gold">
                    All industries
                  </Link>
                </div>
              )}
            </li>
            <li className="relative" onMouseEnter={() => openNav("services")} onMouseLeave={closeNav}>
              <button
                type="button"
                aria-expanded={openMenu === "services"}
                aria-haspopup="true"
                onClick={() => toggleNav("services")}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-fg/70 outline-none hover:bg-fg/5 hover:text-fg focus-visible:ring-2 focus-visible:ring-gold/60",
                  (openMenu === "services" || ["/ai-implementation", "/ai-agents", "/private-ai", "/managed-ai", "/ai-workshops"].some((p) => pathname.startsWith(p))) &&
                    "nav-active",
                )}
              >
                Services
                <ChevronDown className={cn("size-3.5", openMenu === "services" && "rotate-180")} />
              </button>
              {openMenu === "services" && (
                <div className="absolute top-full left-0 z-70 min-w-56 rounded-xl border border-fg/10 bg-surface p-2 shadow-2xl">
                  {SERVICES.map((s) => (
                    <Link key={s.slug} to={s.href} className="block rounded-lg px-3 py-2 text-sm text-fg/70 hover:bg-fg/5 hover:text-fg">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            <li>{navLink("/case-studies", "Case Study")}</li>
            <li>{navLink("/resources", "Resources")}</li>
          </ul>
          <AuditButton size="sm" className="hidden lg:inline-flex">
            Free AI Audit
          </AuditButton>
          <button
            type="button"
            aria-label="Open menu"
            className={cn("block p-2 lg:hidden", mobile && "hamburger-active")}
            onClick={() => setMobile(true)}
          >
            <span className="line my-[5px] block h-0.5 w-[25px] bg-fg transition-all duration-300" />
            <span className="line my-[5px] block h-0.5 w-[25px] bg-fg transition-all duration-300" />
            <span className="line my-[5px] block h-0.5 w-[25px] bg-fg transition-all duration-300" />
          </button>
        </nav>

        <div
          className={cn(
            "fixed inset-y-0 right-0 z-60 flex h-dvh w-[85%] max-w-[400px] transform flex-col border-l border-fg/10 bg-bg shadow-2xl transition-transform duration-500",
            mobile ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-fg/5 p-6">
            <span className="text-lg font-semibold tracking-tight text-fg">Menu</span>
            <button type="button" aria-label="Close menu" onClick={() => setMobile(false)} className="rounded-full bg-fg/5 p-2 text-fg/60 hover:text-fg">
              <X className="size-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <ul className="m-0 flex list-none flex-col gap-2 p-0">
              <li>
                <Link to="/how-we-work" className="block rounded-lg px-4 py-3 text-lg font-medium text-fg/80 hover:text-gold">
                  How It Works
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setMobileAcc(mobileAcc === "ind" ? null : "ind")}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-lg font-medium text-fg/80"
                >
                  Industries
                  <ChevronDown className={cn("size-5 text-fg/40", mobileAcc === "ind" && "rotate-180")} />
                </button>
                {mobileAcc === "ind" && (
                  <ul className="ml-1 flex flex-col border-l border-fg/10 pl-4">
                    {INDUSTRIES.map((i) => (
                      <li key={i.slug}>
                        <Link to="/industries/$slug" params={{ slug: industryParam(i) }} className="block py-2 text-base text-fg/60 hover:text-fg">
                          {i.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setMobileAcc(mobileAcc === "svc" ? null : "svc")}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-lg font-medium text-fg/80"
                >
                  Services
                  <ChevronDown className={cn("size-5 text-fg/40", mobileAcc === "svc" && "rotate-180")} />
                </button>
                {mobileAcc === "svc" && (
                  <ul className="ml-1 flex flex-col border-l border-fg/10 pl-4">
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
              <li>
                <Link to="/case-studies" className="block rounded-lg px-4 py-3 text-lg font-medium text-fg/80 hover:text-gold">
                  Case Study
                </Link>
              </li>
              <li>
                <Link to="/resources" className="block rounded-lg px-4 py-3 text-lg font-medium text-fg/80 hover:text-gold">
                  Resources
                </Link>
              </li>
              <li className="mt-4 border-t border-fg/5 pt-4">
                <AuditButton size="sm">Free AI Audit</AuditButton>
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
