import { useEffect, useLayoutEffect, useRef, type ComponentProps } from "react";
import { useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

function reduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function inView(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight * 0.92 && r.bottom > 40;
}

function show(el: HTMLElement) {
  el.classList.add("is-on");
}

function skip(el: Element) {
  return Boolean(el.closest(".help-stage, .scene, header, footer"));
}

export function arm(root: HTMLElement) {
  if (reduced()) {
    root.querySelectorAll<HTMLElement>("[data-rise]").forEach(show);
    return;
  }

  const seen = new Set<HTMLElement>();
  let i = 0;
  const add = (el: HTMLElement) => {
    if (seen.has(el) || skip(el)) return;
    if (el.dataset.rise != null) {
      seen.add(el);
      return;
    }
    const parent = el.parentElement?.closest<HTMLElement>("[data-rise]");
    if (parent && parent !== el) return;
    seen.add(el);
    const n = String(Math.min(i % 8, 7));
    i += 1;
    el.dataset.rise = n;
    el.style.setProperty("--rise", n);
  };

  root.querySelectorAll<HTMLElement>("article, figure, blockquote, details, a.group").forEach(add);
  root.querySelectorAll<HTMLElement>(".grid > *").forEach(add);

  Array.from(root.children).forEach((child) => {
    if (!(child instanceof HTMLElement)) return;
    if (child.dataset.rise != null) return;
    if (child.querySelector("[data-rise]")) return;
    add(child);
  });

  root.querySelectorAll<HTMLElement>("h2, h3, img").forEach((el) => {
    if (el.closest("[data-rise]")) return;
    if (el.tagName === "IMG" && el.getBoundingClientRect().width < 48) return;
    add(el);
  });
}

let io: IntersectionObserver | null = null;

function ensureIo() {
  if (io) return io;
  io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        show(entry.target as HTMLElement);
        io?.unobserve(entry.target);
      }
    },
    { threshold: 0.08, rootMargin: "0px 0px -10% 0px" },
  );
  return io;
}

function watch(el: HTMLElement) {
  if (el.classList.contains("is-on")) return;
  if (inView(el)) {
    show(el);
    return;
  }
  ensureIo().observe(el);
}

function scan() {
  const root = document.querySelector(".flex-1") ?? document.body;
  if (reduced()) {
    root.querySelectorAll<HTMLElement>("[data-rise]").forEach(show);
    return;
  }
  root.querySelectorAll<HTMLElement>("section").forEach((section) => {
    if (section.closest("header, footer")) return;
    arm(section);
  });
  root.querySelectorAll<HTMLElement>("[data-rise]").forEach(watch);
}

export function RevealSection({ className, children, ...props }: ComponentProps<"section">) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    arm(el);
    el.querySelectorAll<HTMLElement>("[data-rise]").forEach(watch);
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
    const id = requestAnimationFrame(() => scan());
    return () => {
      cancelAnimationFrame(id);
      io?.disconnect();
      io = null;
    };
  }, [pathname]);

  return <>{children}</>;
}
