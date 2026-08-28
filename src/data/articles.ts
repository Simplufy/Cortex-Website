import { BLOG_POSTS } from "@/data/site";

export const ARTICLE_BODIES: Record<string, string[]> = {
  "private-ai-workforce-automotive": [
    "Detail Driven Enterprises runs repair, collision, detailing, and glass in Jackson Hole. Each line already had software. We did not replace Tekmetric. We did not replace CCC ONE. We installed an operator OS and a workforce on top of what they already ran.",
    "The stack on the ground: Tekmetric for repair, CCC ONE for collision, Omega EDI, GoHighLevel, QuickBooks, Stripe, Google Ads, Meta, Google Business Profile, GA4, Search Console, Slack. Four shop types. A person was still the integration.",
    "The architecture is boring on purpose. Private Linux hardware at the bottom. Collectors and a local CCC EMS bridge. An operator OS in the middle: command, inbox, quotes, bookings, shop views, money, demand. A manager, the orchestrator, assigns work. Specialized agents watch follow-up, monitoring, and reporting. None of them get a master login to the company.",
    "Collision is the honest hard part. CCC will export EMS estimates and a Final Bill. It will not export the schedule. The bridge reads the folder CCC already writes. It does not scrape DATA.DAT.",
    "Inference is hybrid. Routine work stays local. When a job needs a stronger model, it goes to the cloud. That is a routing decision, not a brand position. Operators care about the morning report landing, not about where the tokens ran.",
    "What we will not put on this page yet: hours saved, dollars recovered, owner quotes. Those go here when they are measured and the operator is willing to stand behind them. Until then, the facts are the story.",
    "If you want the same shape inside your shops, start with the audit. We will tell you if the stack and the volume of leftover work actually justify a build.",
  ],
  "local-vs-cloud-ai-service-businesses": [
    "Local versus cloud is a bad argument if you treat it like a religion. Some work should never leave the building. Some work needs a frontier model. Most service businesses need both, routed on purpose.",
    "Local wins when the job is repetitive, high-volume, and sits next to records you do not want to ship off-site. Owner reports. Ticket watches. Drafting a follow-up from a job file you already store. Dedicated hardware you control also makes the cost of a run more predictable than renting tokens every time a bay opens.",
    "Cloud wins when the job is messy, rare, or needs a model that is still moving fast. A weird customer email. A long estimate that does not match a template. A one-off summary of a messy file. Paying for that occasionally is cheaper than pretending a small local model can do everything.",
    "Rules still beat models for a surprising amount of operations work. If a repair order has no approval and no customer update after X hours, you do not need a language model to notice. You need a watcher, a permission, and a person who still owns the customer.",
    "The practical answer for most shops and trades is hybrid. Local for the overnight watch and the daily briefing. Cloud when the agent has to write something that would embarrass you if it were dumb. The audit is where we decide which jobs belong where, not a slide about GPUs.",
  ],
  "ai-agents-inside-an-auto-repair-shop": [
    "An auto shop already has a system of record. Tekmetric, Shopmonkey, Mitchell 1, whatever you bought. The leftover work is not a missing login. It is people still operating that software by hand.",
    "Open repair orders go quiet. The customer is waiting. The advisor is on the drive. Nobody is watching aging tickets unless someone thinks to look. An agent can watch the board and flag stalls, missing approvals, and updates that never went out.",
    "Declined work dies in the ticket. The recommendation was logged. The follow-up was not. That revenue leaves with the car. An agent can keep a declined-line queue and draft the next message. A person still sends it until you trust the path.",
    "The owner report is a Sunday job. Hours, comebacks, A/R, ads versus cars that actually booked. Someone builds it from three logins. An agent can assemble the exceptions overnight so the owner starts from the problems, not from the exports.",
    "Comebacks are a feeling until they show up as a pattern. Ads spend without an operator. None of this requires ripping out the shop system. It requires permission to read it, a watcher on the queues you care about, and a person who still owns the customer conversation.",
    "Named tools on this page are examples, not a certified list. We confirm access in the audit. If a vendor will not let us in, we say so before anyone pays for a build.",
  ],
  "ai-agents-vs-automations": [
    "Zapier moves a field. An agent watches a queue. Mixing them up is how operators buy the wrong thing and then decide AI is theater.",
    "An automation is a trigger and an action. Lead arrives, create a contact. Invoice paid, send a receipt. Fine. Necessary, even. It does not notice that an estimate aged past the window, or that the same customer called twice and nobody called back.",
    "An agent has a job. Watch stalled repair orders. Watch unsold estimates. Assemble the morning briefing. It reads more than one system. It decides whether something is an exception. It drafts, flags, or, where you approve it, takes a small action. Then it logs what it did.",
    "You still want automations. They are cheaper and more reliable for the dumb paths. The mistake is asking ChatGPT plus a zap to run the shop. Glue cannot respect permissions, keep a history, or get better as the operation changes. That takes architecture, testing, and someone watching the watchers.",
    "In the audit we mark which stalls are automations, which are agents, and which should stay with a person. If a path needs taste or a hard conversation, it is not an agent job. If it is a field moving from A to B, it is not an agent job either.",
  ],
  "how-an-ai-operations-audit-works": [
    "The audit is how we keep you from buying a build you do not need. It is also the only honest way to price the work. We will not quote a number from a website form.",
    "Step one: apply. Name, email, phone, company, industry, revenue. That is enough to get you on the list. If you have website, headcount, locations, software, and the stall that bothers you most, send those too. Skip them if you are in a hurry. We already have the lead.",
    "Step two: a 30-minute walkthrough of how work actually moves. Not a slide deck about AI. Show us the software. Show us where a job stalls. Show us who still copies between systems. If you cannot spare thirty minutes, you are not ready to install a workforce.",
    "Step three: an AI Opportunity Map. Highest-value agent paths. Whether we can actually reach the software. Complexity. What should remain human. A recommended first deployment, usually one or two paths, not forty. If we think we can materially help, we will also show you what a build would look like.",
    "You can walk away with the map and never hire us. That is still useful. If we tell you the stack is too early, or the leftover work is not there, that is the audit doing its job.",
  ],
};

export function articleBySlug(slug: string) {
  const meta = BLOG_POSTS.find((p) => p.slug === slug);
  if (!meta) return null;
  return { ...meta, paragraphs: ARTICLE_BODIES[slug] || [meta.excerpt] };
}
