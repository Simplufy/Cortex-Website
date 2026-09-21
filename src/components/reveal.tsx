import { useEffect, useLayoutEffect, useRef, type ComponentProps } from "react";
import { useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

function reduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function arm(el: HTMLElement) {
  el.dataset.reveal = "up";
  el.classList.add("js-reveal");
  el.querySelectorAll<HTMLElement>(":scope .grid > *, :scope ol > *, :scope ul > *, :scope details").forEach((child, i) => {
    child.dataset.revealItem = String(Math.min(i, 8));
  });
}

function show(el: HTMLElement) {
  el.classList.add("is-on");
}

export function RevealSection({ className, children, ...props }: ComponentProps<"section">) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced()) {
      show(el);
      return;
    }
    arm(el);
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92) show(el);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    if (el.classList.contains("is-on")) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        show(el);
        io.disconnect();
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={cn("reveal-section", className)} {...props}>
      {children}
    </section>
  );
}

export function RevealRoot({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (reduced()) {
      document.querySelectorAll<HTMLElement>("section.js-reveal").forEach(show);
      return;
    }
    const nodes = [...document.querySelectorAll<HTMLElement>("section.js-reveal:not(.is-on)")];
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [pathname]);

  return <>{children}</>;
}
