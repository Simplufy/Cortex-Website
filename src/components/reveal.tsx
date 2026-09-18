import { useEffect, useLayoutEffect, useRef, type ComponentProps } from "react";
import { useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

function reduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function revealIfVisible(el: HTMLElement) {
  if (el.classList.contains("is-on")) return;
  const r = el.getBoundingClientRect();
  if (r.height < 16) return;
  if (r.top < window.innerHeight * 0.8) el.classList.add("is-on");
}

export function RevealSection({ className, children, ...props }: ComponentProps<"section">) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced()) {
      el.classList.add("is-on");
      return;
    }
    el.classList.add("js-reveal");
    revealIfVisible(el);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced()) return;
    const check = () => revealIfVisible(el);
    const a = requestAnimationFrame(() => requestAnimationFrame(check));
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      cancelAnimationFrame(a);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <section ref={ref} className={cn(className)} {...props}>
      {children}
    </section>
  );
}

export function RevealRoot({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (reduced()) return;
    const checkAll = () => {
      document.querySelectorAll<HTMLElement>("section.js-reveal").forEach(revealIfVisible);
    };
    const a = requestAnimationFrame(() => requestAnimationFrame(checkAll));
    window.addEventListener("scroll", checkAll, { passive: true });
    window.addEventListener("resize", checkAll);
    return () => {
      cancelAnimationFrame(a);
      window.removeEventListener("scroll", checkAll);
      window.removeEventListener("resize", checkAll);
    };
  }, [pathname]);

  return <>{children}</>;
}
