import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { FinalCtaBlock } from "@/components/pages/inner";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";

export const Route = createFileRoute("/trust")({
  head: () =>
    pageHead({
      title: "Trust and Security",
      description:
        "Where company data goes, who can see it, how agent permissions work, how credentials are stored, what is logged, and what you own. Cortex trust and security.",
      path: "/trust",
    }),
  component: Page,
});

const SECTIONS = [
  {
    title: "Permissions",
    body: "Each agent receives defined access to defined systems. A follow-up agent does not get payroll. A reporting agent does not send customer texts. If a system is not on the list for that agent, it stays out.",
  },
  {
    title: "Human approval",
    body: "Sensitive actions can require approval before they run. Anything that spends money, changes a customer promise, or would be awkward to undo defaults to draft-and-flag until you open that path.",
  },
  {
    title: "Can an agent send something without approval?",
    body: "Only if you have explicitly allowed that path. The default is no. Drafts, flags, and queues first. Send, charge, or change a promise when you say so.",
  },
  {
    title: "Audit logs",
    body: "Agent actions and tool calls can be recorded: what ran, against which record, and who approved it. That is how you review the system instead of guessing.",
  },
  {
    title: "Credential management",
    body: "Credentials are stored separately from the prompts sent to a model. We use official APIs and OAuth where the vendor supports them. We do not leave master passwords in a shared document. Rotation is part of managed operations.",
  },
  {
    title: "Where does my data go?",
    body: "Agents read the systems you authorize. Private or hybrid setups keep more of the work on hardware you control. When a job uses a cloud model, that job's prompt and the context required to complete it are sent to the provider for that request. We do not dump the company into a model.",
  },
  {
    title: "Can you see everything?",
    body: "No. Cortex can only reach the systems and records you approve for a given agent. If a vendor will not let us in, or you do not want that door open, that system stays out.",
  },
  {
    title: "Do models train on my data?",
    body: "We do not opt Cortex customer data into provider training. Cloud model providers receive only what that job needs. Whether a provider retains or trains on API traffic is governed by the account and contract used for that deployment. We name the providers in the audit and use business APIs that are not opted into training.",
  },
  {
    title: "What cloud providers touch my data?",
    body: "It depends on the deployment. Typical jobs use a small set of model APIs and the software vendors you already run. There is no single Cortex cloud that holds every customer's records. The audit lists who would be in the path for your stack.",
  },
  {
    title: "Can this run locally?",
    body: "Yes. Dedicated hardware you own or control, cloud, or a mix. Routine watch-and-report work can stay on the local machine. A harder reasoning job can still call a cloud model when you want it to.",
  },
  {
    title: "Infrastructure ownership",
    body: "You own your software accounts, your records, and any hardware purchased for the deployment. Cortex manages the agents, connectors, and the operating environment we install. We do not take over the logins or resell the data.",
  },
  {
    title: "Do I own the system?",
    body: "You own the systems of record. The custom agents, prompts, and routing we build for your operation are part of the engagement. What happens to that work if you leave is covered in offboarding — not locked behind a surprise clause.",
  },
  {
    title: "Backups and recovery",
    body: "Connectors, agent configuration, and logs are kept so we can restore a path if a vendor ships a breaking change or a machine goes down. Shop software, CRM, and books remain the source of truth. We do not become a second copy of the company.",
  },
  {
    title: "What happens if Cortex disappears?",
    body: "Your CRM, shop software, ads, and books still run. Agents stop. Credentials can be rotated. Configuration and documentation from the deployment go with you so another operator is not starting from a blank page.",
  },
  {
    title: "Offboarding",
    body: "If you leave, we revoke Cortex access, hand back documentation of what was connected, and stop managed operations. You keep your software. You keep your data. Agents do not keep a back door.",
  },
  {
    title: "Browser automation",
    body: "Used only when a vendor has no usable API and the work still needs to happen. It runs under a dedicated login you authorize, with the same least-privilege rules, logging, and the ability to turn it off. It is not the default.",
  },
  {
    title: "Client control",
    body: "You can pause an agent, remove a permission, or take a path back to fully human. Managed operations is how we keep that current. It is not a lock-in on your software.",
  },
  {
    title: "What we do not claim",
    body: "We do not advertise SOC 2, HIPAA, or other certifications we have not completed. Trust on this page is about how the system is designed and operated: least privilege, approval, logs, and ownership. Specific controls for a deployment are written down in the audit and the build plan.",
  },
] as const;

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Trust and security"
        title="AI agents should have exactly as much access as they need. No more."
        body="You are about to let software sit next to some of the most important systems in the company. These are the questions we answer before we connect anything."
      />
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="The short version"
          body="Least privilege. Human approval on anything that matters. Logs. Your systems of record stay yours."
        />
        <div className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-2">
          {SECTIONS.map((row) => (
            <article key={row.title} className="rounded-2xl border border-fg/10 bg-surface p-8">
              <h2 className="text-lg font-medium text-fg">{row.title}</h2>
              <p className="mt-3 text-sm leading-relaxed font-light text-fg/60">{row.body}</p>
            </article>
          ))}
        </div>
      </RevealSection>
      <FinalCtaBlock title="Questions about access? Ask them in the audit." />
    </>
  );
}
