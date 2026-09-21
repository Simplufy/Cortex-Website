import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <p className="font-mono text-[11px] tracking-wide text-gold">error</p>
      <h1 className="text-2xl font-medium tracking-tight text-fg">Something went wrong</h1>
      <p className="max-w-md text-sm leading-relaxed text-fg/55">
        {error.message || "An unexpected error occurred. Try reloading the page."}
      </p>
      <Link to="/" className="mt-2 text-sm text-gold hover:text-gold-light">
        Back to Cortex
      </Link>
    </main>
  );
}

export function AppNotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <p className="font-mono text-[11px] tracking-wide text-gold">404</p>
      <h1 className="text-2xl font-medium tracking-tight text-fg">This page isn't here.</h1>
      <p className="max-w-md text-sm leading-relaxed text-fg/55">
        The link may be old, or the page moved. Start at the homepage or request an audit.
      </p>
      <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
        <Link to="/" className="text-sm text-gold hover:text-gold-light">
          Home
        </Link>
        <Link to="/audit" className="text-sm text-gold hover:text-gold-light">
          Free audit
        </Link>
      </div>
    </main>
  );
}
