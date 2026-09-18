import { useEffect, useState } from "react";

const LINES = [
  "00_boot",
  "cortex v1.0",
  "linking FieldRoutes … ok",
  "linking GoHighLevel … ok",
  "linking QuickBooks … ok",
];

export const BOOT_KEY = "cortex-boot-v2";

export const BOOT_SCRIPT = `(function(){try{if(sessionStorage.getItem(${JSON.stringify(BOOT_KEY)})||window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.classList.add("cortex-ready")}else{document.documentElement.classList.add("cortex-booting")}}catch(e){document.documentElement.classList.add("cortex-booting")}})();`;

function finishBoot() {
  try {
    sessionStorage.setItem(BOOT_KEY, "1");
  } catch {
    /* ignore */
  }
  document.documentElement.classList.remove("cortex-booting");
  document.documentElement.classList.add("cortex-ready");
}

export function BootScreen() {
  const [on, setOn] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (document.documentElement.classList.contains("cortex-ready")) {
      setOn(false);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishBoot();
      setOn(false);
      return;
    }
    const timers: number[] = [];
    LINES.forEach((_, i) => {
      timers.push(window.setTimeout(() => setStep(i + 1), 160 + i * 200));
    });
    timers.push(
      window.setTimeout(() => {
        finishBoot();
        setOn(false);
      }, 160 + LINES.length * 200 + 480),
    );
    const skip = () => {
      timers.forEach((id) => window.clearTimeout(id));
      finishBoot();
      setOn(false);
    };
    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);
    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, []);

  if (!on) return null;

  return (
    <div
      className="boot-screen fixed inset-0 z-[90] flex flex-col items-center justify-center bg-bg text-gold"
      role="dialog"
      aria-label="System boot"
      aria-live="polite"
    >
      <BootMark step={step} />
    </div>
  );
}

export function BootMark({ step = 0 }: { step?: number }) {
  return (
    <>
      <div className="boot-scan" aria-hidden />
      <p className="mb-8 font-mono text-[10px] tracking-[0.28em] uppercase opacity-70">cortex // initialize</p>
      <p className="glitch-text mb-8 text-4xl font-medium tracking-tighter text-fg sm:mb-10 sm:text-7xl" data-text="CORTEX">
        CORTEX
      </p>
      <ul className="w-72 font-mono text-[11px] leading-6 text-gold/80 sm:w-80">
        {LINES.slice(0, step).map((line) => (
          <li key={line}>{line}</li>
        ))}
        {step < LINES.length ? <li className="boot-caret text-gold">_</li> : null}
      </ul>
      <div className="mt-8 h-px w-56 overflow-hidden bg-fg/10">
        <div className="boot-bar h-full bg-gold" />
      </div>
      <p className="mt-6 font-mono text-[10px] tracking-widest text-fg/35 uppercase">click to skip</p>
    </>
  );
}
