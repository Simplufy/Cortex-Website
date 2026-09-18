import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max <= 0 ? 0 : Math.min(1, window.scrollY / max));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 right-0 left-0 z-[70] h-[2px] bg-transparent" aria-hidden>
      <div className="h-full origin-left bg-gold" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}
