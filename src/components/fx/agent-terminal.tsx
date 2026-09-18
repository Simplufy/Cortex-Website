import { useEffect, useRef, useState } from "react";
import { SectionHead } from "@/components/ui/page-hero";
import { RevealSection } from "@/components/reveal";
import type { Industry } from "@/data/site";

type Row = { kind: "cmd" | "ok" | "warn" | "file"; text: string; file?: number };
type FileRow = { path: string; tag: string };

export type TerminalSession = {
  kicker: string;
  title: string;
  body: string;
  host: string;
  files: FileRow[];
  script: Row[];
};

const DEFAULT_SESSION: TerminalSession = {
  kicker: "Session log",
  title: "This is what an agent actually does.",
  body: "Not a chatbot window. A job with access, a written log, and a human approval gate — running against the software you already have.",
  host: "cortex@ops — live session",
  files: [
    { path: "agents/ro-watch.md", tag: "watch" },
    { path: "agents/follow-up.md", tag: "queue" },
    { path: "agents/briefing.md", tag: "report" },
    { path: "logs/today.log", tag: "live" },
  ],
  script: [
    { kind: "cmd", text: "cortex connect --stack fieldroutes,ghl,quickbooks" },
    { kind: "ok", text: "3 systems linked · scoped credentials · audit log on" },
    { kind: "cmd", text: "cortex run --agent ro-watch", file: 0 },
    { kind: "ok", text: "watching 47 open jobs" },
    { kind: "warn", text: "flagged 3 stalled > 24h" },
    { kind: "ok", text: "drafted customer updates → queued for advisor" },
    { kind: "cmd", text: "cortex run --agent follow-up", file: 1 },
    { kind: "ok", text: "4 declined-work lines revived · 2 estimates unsent" },
    { kind: "cmd", text: "cortex run --agent briefing", file: 2 },
    { kind: "ok", text: "hours · A/R · ads → owner report ready at 06:00" },
    { kind: "file", text: "write logs/today.log", file: 3 },
    { kind: "ok", text: "session complete · nothing sent without approval" },
  ],
};

export const SERVICE_SESSIONS: Record<string, TerminalSession> = {
  agents: {
    kicker: "Agent runtime",
    title: "An agent is a job with access — not a chat window.",
    body: "Watch one worker read the systems you already run, do the approved next step, and stop when a person is required.",
    host: "cortex@agents — live",
    files: [
      { path: "agents/monitor.md", tag: "watch" },
      { path: "agents/follow-up.md", tag: "queue" },
      { path: "agents/escalate.md", tag: "human" },
      { path: "logs/today.log", tag: "live" },
    ],
    script: [
      { kind: "cmd", text: "cortex agent init --job monitor" },
      { kind: "ok", text: "role set · tools scoped · send=false until approval" },
      { kind: "cmd", text: "cortex run --agent monitor", file: 0 },
      { kind: "ok", text: "CRM · field software · inbox attached" },
      { kind: "warn", text: "3 exceptions need a person" },
      { kind: "cmd", text: "cortex run --agent follow-up", file: 1 },
      { kind: "ok", text: "drafts queued · nothing left the building" },
      { kind: "cmd", text: "cortex escalate --to advisor", file: 2 },
      { kind: "ok", text: "handoff written · human keeps the decision" },
      { kind: "file", text: "write logs/today.log", file: 3 },
      { kind: "ok", text: "session complete · audit trail stored" },
    ],
  },
  implementation: {
    kicker: "Implementation",
    title: "How a Cortex build actually gets installed.",
    body: "Audit the paths. Connect the stack. Deploy one agent. Prove it with your team before anything auto-sends.",
    host: "cortex@build — deploy",
    files: [
      { path: "audit/paths.md", tag: "map" },
      { path: "connect/stack.md", tag: "api" },
      { path: "agents/first-job.md", tag: "agent" },
      { path: "logs/deploy.log", tag: "live" },
    ],
    script: [
      { kind: "cmd", text: "cortex audit --operation" },
      { kind: "ok", text: "mapped 11 repetitive paths · 4 worth automating first" },
      { kind: "cmd", text: "cortex connect --stack crm,field,quickbooks", file: 1 },
      { kind: "ok", text: "credentials vaulted · least-privilege tokens" },
      { kind: "cmd", text: "cortex deploy --agent first-job", file: 2 },
      { kind: "warn", text: "approval gate ON · outbound locked" },
      { kind: "ok", text: "test run with the team · 12 jobs watched" },
      { kind: "file", text: "write logs/deploy.log", file: 3 },
      { kind: "ok", text: "live · dashboard included · no rip-and-replace" },
    ],
  },
  "how-we-work": {
    kicker: "How we work",
    title: "Understand the operation first. Then automate it.",
    body: "The same sequence on every engagement: audit, design, connect, deploy, watch the log.",
    host: "cortex@studio — process",
    files: [
      { path: "01-audit.md", tag: "audit" },
      { path: "02-design.md", tag: "design" },
      { path: "03-deploy.md", tag: "build" },
      { path: "logs/today.log", tag: "live" },
    ],
    script: [
      { kind: "cmd", text: "cortex audit --walkthrough 30m" },
      { kind: "ok", text: "software, stalls, follow-up that depends on memory" },
      { kind: "cmd", text: "cortex design --agents 3 --approvals human", file: 1 },
      { kind: "ok", text: "each agent has a job, a tool list, and a stop rule" },
      { kind: "cmd", text: "cortex deploy --env production", file: 2 },
      { kind: "ok", text: "dashboard live · agents watching" },
      { kind: "file", text: "write logs/today.log", file: 3 },
      { kind: "ok", text: "manage: connectors, evals, the next path" },
    ],
  },
  "private-ai": {
    kicker: "Infrastructure",
    title: "Cloud, private, or hybrid — routed per job.",
    body: "Routine work can stay on hardware you control. Hard reasoning can still call a cloud model. Rules when AI is not needed at all.",
    host: "cortex@infra — router",
    files: [
      { path: "runtime/local.md", tag: "private" },
      { path: "runtime/cloud.md", tag: "cloud" },
      { path: "runtime/rules.md", tag: "policy" },
      { path: "logs/router.log", tag: "live" },
    ],
    script: [
      { kind: "cmd", text: "cortex route --job ro-watch" },
      { kind: "ok", text: "classified: high-volume / low-sensitivity → local" },
      { kind: "cmd", text: "cortex run --runtime private", file: 0 },
      { kind: "ok", text: "model on-box · records never left the shop" },
      { kind: "cmd", text: "cortex route --job estimate-language", file: 1 },
      { kind: "ok", text: "classified: hard reasoning → cloud · redacted payload" },
      { kind: "file", text: "write logs/router.log", file: 3 },
      { kind: "ok", text: "hybrid policy held · cost predictable" },
    ],
  },
  "managed-ai": {
    kicker: "Managed operations",
    title: "After go-live, someone still has to keep it honest.",
    body: "APIs change. Models drift. We watch the runs, repair connectors, and expand only what is earning its keep.",
    host: "cortex@ops — managed",
    files: [
      { path: "watch/uptime.md", tag: "health" },
      { path: "watch/connectors.md", tag: "api" },
      { path: "watch/evals.md", tag: "qa" },
      { path: "logs/incident.log", tag: "live" },
    ],
    script: [
      { kind: "cmd", text: "cortex health" },
      { kind: "ok", text: "12 agents · 99.2% successful runs overnight" },
      { kind: "warn", text: "FieldRoutes token expired · 14m ago" },
      { kind: "cmd", text: "cortex repair --connector fieldroutes", file: 1 },
      { kind: "ok", text: "rotated · replayed 9 stalled jobs" },
      { kind: "cmd", text: "cortex eval --agent follow-up", file: 2 },
      { kind: "ok", text: "quality held · 0 unapproved sends" },
      { kind: "file", text: "write logs/incident.log", file: 3 },
      { kind: "ok", text: "incident closed · team never left the driveway" },
    ],
  },
  workshops: {
    kicker: "Workshop",
    title: "What the room actually sees in ninety minutes.",
    body: "Agents vs chatbots. What to automate. What to leave human. A live walkthrough against real service software.",
    host: "cortex@workshop — demo",
    files: [
      { path: "deck/agents-vs-chat.md", tag: "talk" },
      { path: "demo/connect.md", tag: "live" },
      { path: "demo/permissions.md", tag: "trust" },
      { path: "leave/90-days.md", tag: "plan" },
    ],
    script: [
      { kind: "cmd", text: "workshop start --room leadership" },
      { kind: "ok", text: "chatbots wait · agents watch a workflow" },
      { kind: "cmd", text: "cortex demo --stack jobber,ghl", file: 1 },
      { kind: "ok", text: "live: stalled jobs, unsent estimates, the owner brief" },
      { kind: "cmd", text: "cortex permissions --show", file: 2 },
      { kind: "warn", text: "send, charge, promise = human" },
      { kind: "file", text: "write leave/90-days.md", file: 3 },
      { kind: "ok", text: "first path chosen · no software replaced" },
    ],
  },
};

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function sessionFromIndustry(industry: Industry): TerminalSession {
  const tools = industry.software.groups.flatMap((g) => g.tools).slice(0, 3);
  const agents = industry.systems.slice(0, 2);
  const files: FileRow[] = [
    ...agents.map((a) => ({ path: `agents/${slugify(a.title)}.md`, tag: "agent" })),
    { path: "logs/today.log", tag: "live" },
  ];
  const stack = tools.map((t) => slugify(t).replace(/-/g, "")).join(",");
  const script: Row[] = [
    { kind: "cmd", text: `cortex connect --stack ${stack || "existing-software"}` },
    { kind: "ok", text: `${Math.max(tools.length, 1)} systems linked · ${industry.name.toLowerCase()} · audit log on` },
  ];
  agents.forEach((a, i) => {
    script.push({ kind: "cmd", text: `cortex run --agent ${slugify(a.title)}`, file: i });
    script.push({ kind: "ok", text: a.items[0] ?? a.title });
    if (a.items[1]) script.push({ kind: "warn", text: a.items[1] });
    if (a.items[2]) script.push({ kind: "ok", text: a.items[2] });
  });
  script.push({ kind: "file", text: "write logs/today.log", file: agents.length });
  script.push({ kind: "ok", text: "session complete · nothing sent without approval" });
  return {
    kicker: industry.name,
    title: "This is what an agent does in this operation.",
    body: `A live pass against the software ${industry.name.toLowerCase()} already runs — watch, draft, escalate. Your team keeps the judgment.`,
    host: `cortex@${slugify(industry.slug)} — live`,
    files,
    script,
  };
}

export function AgentTerminal({ session = DEFAULT_SESSION }: { session?: TerminalSession }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [line, setLine] = useState(0);
  const [typed, setTyped] = useState("");
  const [activeFile, setActiveFile] = useState(0);
  const { files, script } = session;

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStarted(true);
      setLine(script.length);
      setTyped("");
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [script.length]);

  useEffect(() => {
    if (!started || line >= script.length) return;
    const row = script[line];
    if (row.file != null) setActiveFile(row.file);
    if (typed.length < row.text.length) {
      const t = window.setTimeout(() => setTyped(row.text.slice(0, typed.length + 1)), row.kind === "cmd" ? 18 : 12);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => {
      setTyped("");
      setLine((n) => n + 1);
    }, 420);
    return () => window.clearTimeout(t);
  }, [started, line, typed, script]);

  const done = line >= script.length;

  return (
    <RevealSection className="border-t border-fg/5 pt-24 pb-24">
      <SectionHead kicker={session.kicker} title={session.title} body={session.body} />
      <div ref={wrap} className="mx-auto max-w-5xl px-6">
        <div className="term-frame overflow-hidden rounded-2xl border border-gold/25 bg-surface shadow-[0_0_80px_-28px_rgb(var(--gold-rgb)/0.55)]">
          <div className="flex items-center gap-2 border-b border-fg/10 px-4 py-3">
            <span className="size-2.5 rounded-full bg-gold/80" />
            <span className="size-2.5 rounded-full bg-fg/20" />
            <span className="size-2.5 rounded-full bg-fg/20" />
            <span className="ml-3 font-mono text-[10px] tracking-[0.18em] text-fg/45 uppercase">{session.host}</span>
          </div>
          <div className="grid md:grid-cols-[13rem_1fr]">
            <aside className="hidden border-r border-fg/10 p-4 font-mono text-[11px] md:block">
              <p className="mb-3 tracking-widest text-gold/70 uppercase">cortex/</p>
              <ul className="space-y-1.5 text-fg/50">
                {files.map((f, i) => (
                  <li key={f.path} className={i === activeFile ? "text-gold" : ""}>
                    <span className="mr-2 text-fg/25">{i === activeFile ? "▸" : "·"}</span>
                    {f.path}
                  </li>
                ))}
              </ul>
            </aside>
            <pre className="term-scan min-h-[16rem] overflow-x-auto overflow-y-hidden p-4 font-mono text-[11px] leading-6 text-fg/80 sm:p-5 sm:text-[13px] md:min-h-[24rem]">
              {script.slice(0, line).map((row, i) => (
                <div key={i} className={tone(row.kind)}>
                  {prefix(row.kind)}
                  {row.text}
                </div>
              ))}
              {!done ? (
                <div className={tone(script[line]?.kind ?? "ok")}>
                  {prefix(script[line]?.kind ?? "ok")}
                  {typed}
                  <span className="boot-caret">█</span>
                </div>
              ) : (
                <div className="mt-3 text-gold">
                  › agents idle · waiting for next exception
                  <span className="boot-caret">█</span>
                </div>
              )}
            </pre>
          </div>
        </div>
        <div className="mx-auto mt-6 grid max-w-3xl gap-3 font-mono text-[11px] tracking-wide text-fg/45 sm:grid-cols-2">
          <p className="rounded-xl border border-fg/10 px-4 py-3">without cortex · someone still has to remember to look</p>
          <p className="rounded-xl border border-gold/30 px-4 py-3 text-gold/80">with cortex · the layer watches, drafts, and waits for you</p>
        </div>
      </div>
    </RevealSection>
  );
}

function prefix(kind: string) {
  if (kind === "cmd") return "$ ";
  if (kind === "warn") return "! ";
  if (kind === "file") return "→ ";
  return "  ";
}

function tone(kind: string) {
  if (kind === "cmd") return "text-fg";
  if (kind === "warn") return "text-gold";
  if (kind === "file") return "text-gold-light";
  return "text-fg/55";
}
