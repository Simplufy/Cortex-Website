import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };

export function NetBackground() {
  const svgRef = useRef<SVGSVGElement>(null);
  const linesRef = useRef<SVGGElement>(null);
  const dotsRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const linesG = linesRef.current;
    const dotsG = dotsRef.current;
    if (!svg || !linesG || !dotsG) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const colorOf = () =>
      getComputedStyle(document.documentElement).getPropertyValue("--color-gold").trim() || "#ff571f";
    let ORANGE = colorOf();
    const MAX_LINES = 140;
    let raf = 0;
    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    let lineEls: SVGLineElement[] = [];
    let dotEls: SVGCircleElement[] = [];
    let maxDist = 140;

    const seed = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      const count = Math.max(32, Math.min(58, Math.floor((w * h) / 28000)));
      maxDist = Math.min(170, Math.max(100, Math.min(w, h) * 0.22));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
      }));

      linesG.replaceChildren();
      dotsG.replaceChildren();
      lineEls = Array.from({ length: MAX_LINES }, () => {
        const el = document.createElementNS("http://www.w3.org/2000/svg", "line");
        el.setAttribute("stroke", ORANGE);
        el.setAttribute("stroke-width", "0.85");
        el.setAttribute("stroke-linecap", "round");
        el.setAttribute("stroke-opacity", "0");
        linesG.appendChild(el);
        return el;
      });
      dotEls = nodes.map(() => {
        const el = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        el.setAttribute("r", "1.7");
        el.setAttribute("fill", ORANGE);
        dotsG.appendChild(el);
        return el;
      });
    };

    const tick = () => {
      if (!reduce) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -8) n.x = w + 8;
          if (n.x > w + 8) n.x = -8;
          if (n.y < -8) n.y = h + 8;
          if (n.y > h + 8) n.y = -8;
        }
      }

      let used = 0;
      for (let i = 0; i < nodes.length && used < MAX_LINES; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length && used < MAX_LINES; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > maxDist * maxDist) continue;
          const d = Math.sqrt(d2);
          const el = lineEls[used++];
          el.setAttribute("x1", String(a.x));
          el.setAttribute("y1", String(a.y));
          el.setAttribute("x2", String(b.x));
          el.setAttribute("y2", String(b.y));
          el.setAttribute("stroke-opacity", String((1 - d / maxDist) * 0.6));
        }
      }
      for (let k = used; k < lineEls.length; k++) {
        lineEls[k].setAttribute("stroke-opacity", "0");
      }
      for (let i = 0; i < nodes.length; i++) {
        dotEls[i].setAttribute("cx", String(nodes[i].x));
        dotEls[i].setAttribute("cy", String(nodes[i].y));
      }
      if (!reduce) raf = requestAnimationFrame(tick);
    };

    seed();
    tick();
    const onResize = () => {
      cancelAnimationFrame(raf);
      seed();
      tick();
    };
    window.addEventListener("resize", onResize);
    const mo = new MutationObserver(() => {
      ORANGE = colorOf();
      lineEls.forEach((el) => el.setAttribute("stroke", ORANGE));
      dotEls.forEach((el) => el.setAttribute("fill", ORANGE));
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      mo.disconnect();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-30"
    >
      <g ref={linesRef} />
      <g ref={dotsRef} />
    </svg>
  );
}
