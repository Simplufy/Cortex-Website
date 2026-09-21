export type ArticleBlock =
  | { type: "h2" | "h3" | "p" | "quote"; text: string }
  | { type: "ul"; items: string[] };

export type ArticleFaq = { q: string; a: string };

export type ArticleCategory = "Automotive" | "Operations" | "Infrastructure" | "Audit" | "Trades";

export type Article = {
  slug: string;
  category: ArticleCategory;
  title: string;
  description: string;
  excerpt: string;
  author: string;
  date: string;
  dateIso: string;
  updatedIso: string;
  minutes: number;
  industry?: "automotive" | "hvac" | "general";
  faqs: ArticleFaq[];
  related: string[];
  blocks: ArticleBlock[];
};

export const ARTICLE_CATEGORY_ORDER: ArticleCategory[] = [
  "Automotive",
  "Operations",
  "Infrastructure",
  "Audit",
  "Trades",
];

export const ARTICLE_CATEGORY_TITLE: Record<ArticleCategory, string> = {
  Automotive: "Auto shops, collision, and the leftover work on the ticket",
  Operations: "Follow-up, calls, ads, and the owner report",
  Infrastructure: "Where the work runs, and how two systems talk",
  Audit: "How we decide what to build",
  Trades: "The same stall in HVAC and other field trades",
};

export const ARTICLE_CATEGORY_BLURB: Record<ArticleCategory, string> = {
  Automotive:
    "Repair, collision, detailing, glass, tires. What we installed at Detail Driven in Jackson Hole, and the leftover work we see in independent shops.",
  Operations:
    "Agents versus automations, CRM follow-up, missed calls, and the owner report that still gets rebuilt by hand.",
  Infrastructure:
    "Local hardware, cloud models, hybrid routing, and how two systems of record are supposed to talk.",
  Audit: "How the free AI operations audit actually works, what you leave with, and what we will not quote from a form.",
  Trades: "The same coordination problem in HVAC and other field trades, named as a pattern, not as a fake case study.",
};

function wordsIn(blocks: ArticleBlock[]): number {
  return blocks.reduce((n, b) => {
    if (b.type === "ul") return n + b.items.join(" ").split(/\s+/).filter(Boolean).length;
    return n + b.text.split(/\s+/).filter(Boolean).length;
  }, 0);
}

function article(partial: Omit<Article, "minutes">): Article {
  const extra = partial.faqs.reduce((n, f) => n + f.q.split(/\s+/).length + f.a.split(/\s+/).length, 0);
  const minutes = Math.max(6, Math.round((wordsIn(partial.blocks) + extra) / 160));
  return { ...partial, minutes };
}

export const ARTICLES: Article[] = [
  article({
    slug: "private-ai-workforce-automotive",
    category: "Automotive",
    title: "How we installed a private AI workforce inside a real automotive business",
    description:
      "How Cortex installed a private AI workforce at Detail Driven in Jackson Hole, Tekmetric, CCC ONE, local hardware, and leftover work a person still owned.",
    excerpt:
      "Jackson Hole. Repair, collision, detailing, glass. Local hardware, an operator OS, a CCC EMS bridge, and the software the shops already ran.",
    author: "McGuire",
    date: "August 2026",
    dateIso: "2026-08-12",
    updatedIso: "2026-09-10",
    industry: "automotive",
    related: [
      "collision-ai-ccc-one-what-exports",
      "ai-agents-inside-an-auto-repair-shop",
      "local-vs-cloud-ai-service-businesses",
    ],
    faqs: [
      {
        q: "Did you replace Tekmetric or CCC ONE?",
        a: "No. Repair still lives in Tekmetric. Collision still lives in CCC ONE. We installed collectors, a local EMS bridge, an operator dashboard, and agents on the leftover work. The systems of record stayed.",
      },
      {
        q: "Is this running only in the cloud?",
        a: "No. Detail Driven has dedicated local Linux hardware. Routine work stays on-site. A job that needs a stronger model can be routed to the cloud. That is a routing decision, not a brand position.",
      },
      {
        q: "What results can you publish?",
        a: "The stack, the shop types, the jobs we installed, and the fact that a dashboard shipped in the same build. We will not put hours saved or dollars recovered on this page until they are measured and the operator will stand behind them.",
      },
      {
        q: "Does every shop need local hardware?",
        a: "No. Hardware is a decision in the audit. Some operators want inference next to the records. Some are fine with a locked-down cloud path. We do not sell a box as the product.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Jackson Hole is not a software demo. Detail Driven Enterprises runs mechanical repair, collision, detailing, and glass as four different businesses that happen to share an owner. Each line already had a system of record. Repair lived in Tekmetric. Collision lived in CCC ONE. Detailing and glass had their own boards, books, and ads. Omega EDI moved parts. GoHighLevel held the conversations. QuickBooks and Stripe held the money. Google Ads, Meta, Google Business Profile, GA4, and Search Console held demand. Slack held the exceptions that never made it into a ticket. A person was still the integration.",
      },
      {
        type: "p",
        text: "The Bureau of Labor Statistics Occupational Outlook Handbook counted about 825,800 automotive service technicians and mechanics in the United States in 2025, with roughly a quarter of them in independent mechanical repair. The Auto Care Association, in the 2026 Auto Care Factbook, put U.S. light-duty aftermarket sales at $413.7 billion in 2024 and projected further growth as the light-vehicle fleet aged past twelve years. None of that shows up as a clean API. It shows up as an advisor on the drive, a writer in CCC, and an owner rebuilding the morning report from five logins.",
      },
      {
        type: "h2",
        text: "Four shop types, four systems of record",
      },
      {
        type: "p",
        text: "The first honest fact of this build is that “the automotive business” was never one business. Mechanical repair produces repair orders, approvals, declined lines, and comebacks. Collision produces estimates, supplements, insurance files, and Final Bills. Detailing produces bookings that either confirm or ghost. Glass produces a different cycle time and a different customer. Treating those as one CRM with extra fields is how operators buy software they then work around.",
      },
      {
        type: "p",
        text: "We mapped the leftover work per shop type before we talked about models. Aging tickets in Tekmetric. Quiet files in CCC. Unconfirmed detailing appointments. Ads spending without anyone checking them against cars that actually booked. A/R sitting in QuickBooks while the shop floor thought the job was closed. The Automotive Service Association and I-CAR both spend a lot of ink on process discipline for a reason: the work is already defined. The gap is that nobody is watching the process when the people who own it are busy.",
      },
      {
        type: "ul",
        items: [
          "Repair: Tekmetric remains the system of record for repair orders, approvals, and declined work.",
          "Collision: CCC ONE remains the estimating system. Insurance work stays in CCC.",
          "Detailing and glass: existing boards and booking tools stay. Agents watch them. They do not replace them.",
          "Demand: Google Ads, Meta, Google Business Profile, GA4, and Search Console are read, not re-platformed.",
          "Money: QuickBooks and Stripe stay. No fake finance module.",
        ],
      },
      {
        type: "h2",
        text: "The architecture is boring on purpose",
      },
      {
        type: "p",
        text: "Private Linux hardware sits at the bottom. Collectors pull from the APIs Tekmetric, GoHighLevel, QuickBooks, Stripe, and the ad platforms already publish. Collision is the honest hard part: CCC Intelligent Solutions documents an EMS export (CIECA EMS 2.01 estimates, workfile copies, part price changes) written to a folder the shop already configured. The bridge reads that folder. It does not scrape DATA.DAT. It does not pretend CCC will hand us the schedule as a clean feed, because in this install it would not.",
      },
      {
        type: "p",
        text: "In the middle sits an operator OS: command, inbox, quotes, bookings, shop views, money, demand, collision, and a knowledge map of how the place is wired. A manager (the orchestrator) assigns work. Specialized agents watch follow-up, monitoring, and reporting. None of them get a master login to the company. Least privilege is not a slogan we borrowed for a slide. It is how you keep an agent from becoming a new kind of office manager with the keys to payroll.",
      },
      {
        type: "quote",
        text: "The dashboard is included in the same build. It is not a second product. It is how the owner sees exceptions without becoming the integration.",
      },
      {
        type: "h2",
        text: "Hybrid inference, not a religion",
      },
      {
        type: "p",
        text: "Routine work stays local: overnight watches, ticket aging, assembling the morning briefing from records that already live in the building. When a job needs a stronger model (a messy email, a long estimate that does not match a template) it can go to the cloud. Operators care about the morning report landing, not about where the tokens ran. NIST’s AI Risk Management Framework is the language we use when an owner asks about risk: govern, map, measure, manage. Map the jobs. Measure whether the watcher is actually watching. Keep a person on the customer.",
      },
      {
        type: "p",
        text: "Local hardware also makes the cost of a repetitive run more predictable than renting a frontier model every time a bay opens. That is an operations argument, not a privacy brochure. Some shops will never want a box in the office. The audit is where we decide. We do not lead with GPUs.",
      },
      {
        type: "h2",
        text: "What the workforce actually does",
      },
      {
        type: "p",
        text: "Follow-up: stalled repair orders, declined lines, aged estimates, and leads that sat in GoHighLevel. The agent drafts a next message from the file. A person still sends it until the path is trusted. Monitoring: open ROs, collision files that went quiet, bookings that never confirmed, ads spending with no operator. Exceptions, not a wall of green. Reporting: the morning briefing from Tekmetric, CCC, ads, and the books, so the owner starts from what broke overnight instead of five CSV exports.",
      },
      {
        type: "p",
        text: "We will not put hours saved, dollars recovered, or an owner quote on this page yet. Those go here when they are measured and the operator is willing to stand behind them. Until then, the facts are the story: four shop types, dedicated hardware, hybrid inference, Tekmetric and CCC still in place, daily reporting automated as a job, a secure dashboard across the connected stack, and a person who still owns the customer conversation.",
      },
      {
        type: "h2",
        text: "What this is not",
      },
      {
        type: "p",
        text: "It is not a chatbot on the website. It is not a pack of agents we drop on every shop. It is not a replacement for the advisor, the writer, or the owner. The Auto Care Association can tell you the aftermarket is large and getting larger because cars are older and more complex. That complexity is exactly why a general-purpose assistant fails in a bay. The work is specific. The permissions are specific. The software is already paid for.",
      },
      {
        type: "h2",
        text: "What the audit asks before we talk models",
      },
      {
        type: "p",
        text: "Which shop system is actually the board. Whether declined work is coded or just a note. Whether ads conversions are a click, a call, or a car. Whether CCC is exporting EMS at all. Whether GoHighLevel and Tekmetric share a customer id or a hope. Those questions take thirty minutes. They save you from buying a chatbot while the $1,800 estimate sits. They also save us from designing an agent for a door that does not exist.",
      },
      {
        type: "p",
        text: "If you want the same shape inside your shops, start with the audit. We will tell you if the stack and the volume of leftover work actually justify a build. If they do not, that is the audit doing its job.",
      },
    ],
  }),

  article({
    slug: "local-vs-cloud-ai-service-businesses",
    category: "Infrastructure",
    title: "Local AI vs cloud AI for service businesses: what actually belongs on each",
    description:
      "Local versus cloud AI is a routing decision for shops and trades. What stays on-site, what goes to a frontier model, and how Detail Driven runs both.",
    excerpt:
      "Some jobs should never leave the building. Some need a frontier model. Most service businesses need both, routed on purpose.",
    author: "McGuire",
    date: "August 2026",
    dateIso: "2026-08-18",
    updatedIso: "2026-09-10",
    industry: "general",
    related: [
      "private-ai-workforce-automotive",
      "ai-agents-vs-automations",
      "how-an-ai-operations-audit-works",
    ],
    faqs: [
      {
        q: "Do I need a server in the shop to use AI?",
        a: "Not always. Local hardware is a decision, not a prerequisite. If the leftover work is small or the records already live in a cloud shop system, a locked-down cloud path can be the honest answer.",
      },
      {
        q: "Is local always more private?",
        a: "Local keeps routine inference next to records you already store. It does not magically solve access control. Least privilege, logging, and a person on the customer still matter if the box is in the office.",
      },
      {
        q: "Why not run everything on the biggest model?",
        a: "Cost, latency, and taste. Watching aging tickets is a rule plus a retrieval job. Paying a frontier model to notice that an RO has no update after four hours is theater.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Local versus cloud is a bad argument if you treat it like a religion. Some work should never leave the building. Some work needs a frontier model. Most service businesses need both, routed on purpose. The operators we sit with do not wake up wanting a position on GPUs. They want the morning report to land, the $1,800 estimate to get a second touch, and the ads account to stop being a Sunday job.",
      },
      {
        type: "p",
        text: "NIST published the AI Risk Management Framework in January 2023 around four functions: govern, map, measure, manage. That is a better starting point than a vendor war. Map the jobs. Decide where each job is allowed to run. Measure whether it actually ran. Keep a human on anything that looks like a promise to a customer. The framework is federal guidance, not a shop manual, but it is the cleanest public language we have found for the conversation owners actually want to have.",
      },
      {
        type: "h2",
        text: "Where local wins",
      },
      {
        type: "p",
        text: "Local wins when the job is repetitive, high-volume, and sits next to records you do not want to ship off-site every hour. Owner reports. Ticket watches. Drafting a follow-up from a job file you already store. Dedicated hardware you control also makes the cost of a run more predictable than renting tokens every time a bay opens. At Detail Driven, overnight watches and the daily briefing are the obvious local jobs. The records already live in Tekmetric, CCC exports, QuickBooks, and the CRM. Sending them on a tour of someone else’s cluster so a small model can say “this RO is old” is a waste of a trip.",
      },
      {
        type: "p",
        text: "Local also wins when the shop’s internet is the constraint. Independent repair is not a downtown office. The Bureau of Labor Statistics still places a large share of technicians in automotive mechanical and electrical repair shops, many of them in markets where the upload is the first thing that dies on a snow day. A watcher that has to phone home to notice a stalled ticket will miss the morning that mattered.",
      },
      {
        type: "h2",
        text: "Where cloud wins",
      },
      {
        type: "p",
        text: "Cloud wins when the job is messy, rare, or needs a model that is still moving fast. A weird customer email. A long estimate that does not match a template. A one-off summary of a messy file. Paying for that occasionally is cheaper than pretending a small local model can do everything. It is also more honest. We have not met an owner who wants to be in the business of training foundation models.",
      },
      {
        type: "p",
        text: "Cloud also wins when the system of record is already in the cloud and the vendor’s API is the only legal door. Tekmetric, GoHighLevel, Shopmonkey, ServiceTitan, Jobber, these are not files on a desktop. You are already trusting a vendor with the customer list. The question is not “does data leave the building.” The question is “what new inference are we adding, under whose keys, with what log.”",
      },
      {
        type: "h2",
        text: "Rules still beat models",
      },
      {
        type: "p",
        text: "If a repair order has no approval and no customer update after a set number of hours, you do not need a language model to notice. You need a watcher, a permission, and a person who still owns the customer. The same is true for a collision file with no activity, a detailing appointment that never confirmed, or a Google Ads campaign that spent yesterday and produced no booked car in the shop system. Those are thresholds. Thresholds are automations or agents with a very small brain. Mixing them up with ChatGPT is how the category got a reputation for theater.",
      },
      {
        type: "ul",
        items: [
          "Local: overnight watches, daily briefing, anything that reads records you already store on-site.",
          "Cloud: messy writing, rare exceptions, jobs that need a model you will not run yourself.",
          "Rules: aging tickets, missing approvals, spend with no booking, appointments that never confirmed.",
          "Human: money, promises, comebacks that need a conversation, anything that would embarrass you if it were dumb.",
        ],
      },
      {
        type: "h2",
        text: "What we actually installed",
      },
      {
        type: "p",
        text: "Detail Driven runs hybrid. Private hardware for the operator OS and the routine watch. Cloud when a job needs a stronger model. Collision estimates arrive as EMS files CCC already knows how to write. We did not invent a third way to log into CCC. That constraint is the design. The Automotive Service Association can talk all day about process; the process only holds if the watcher still works when the writer is in a meeting with an insurer.",
      },
      {
        type: "quote",
        text: "Operators care about the morning report landing, not about where the tokens ran.",
      },
      {
        type: "h2",
        text: "How we decide in the first thirty minutes",
      },
      {
        type: "p",
        text: "We ask where the records live, who is allowed to send a customer a message, and what would embarrass the owner if it were wrong. Those three answers usually settle the routing. A shop that already stores everything in a cloud SMS and is comfortable with that will not get a lecture about a box. A shop that wants overnight watches next to collision files will. The audit writes the decision down so it is not a vibe.",
      },
      {
        type: "p",
        text: "The practical answer for most shops and trades is the same shape even if the box never shows up. Local or VPC for the overnight watch and the briefing. Cloud when the agent has to write something that would embarrass you if it were dumb. The audit is where we decide which jobs belong where. It is not a slide about GPUs.",
      },
    ],
  }),

  article({
    slug: "ai-agents-inside-an-auto-repair-shop",
    category: "Automotive",
    title: "What AI agents can actually do inside an auto repair shop",
    description:
      "What AI agents can watch inside an auto repair shop: aging ROs, declined work, the owner report, and ads versus cars booked, without replacing Tekmetric or Shopmonkey.",
    excerpt: "Open ROs, declined work, the morning report, ads vs cars booked. Not a chatbot on the website.",
    author: "McGuire",
    date: "August 2026",
    dateIso: "2026-08-22",
    updatedIso: "2026-09-10",
    industry: "automotive",
    related: [
      "declined-work-never-gets-a-second-call",
      "shop-owner-report-five-dashboards",
      "private-ai-workforce-automotive",
    ],
    faqs: [
      {
        q: "Will an agent talk to my customers by itself?",
        a: "Not until you say so. In a first deployment the agent drafts and flags. A person still sends. That is a permission, not a personality trait of the model.",
      },
      {
        q: "Do you work with Shopmonkey or Mitchell 1, or only Tekmetric?",
        a: "Named tools on this page are examples, not a certified list. We confirm access in the audit. If a vendor will not let us in, we say so before anyone pays for a build.",
      },
      {
        q: "Is this a chatbot on the website?",
        a: "No. Website chat is a different product. These jobs live on the repair order, the declined line, the ads account, and the morning report.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "An auto shop already has a system of record. Tekmetric, Shopmonkey, AutoLeap, Mitchell 1, Shop-Ware, whatever you bought. The leftover work is not a missing login. It is people still operating that software by hand. The advisor is on the drive. The owner is in a parts argument. The office manager is covering the phone. The software already knows the stall. Nobody is assigned to watch it.",
      },
      {
        type: "p",
        text: "The Bureau of Labor Statistics puts hundreds of thousands of technicians in independent repair, and the Auto Care Association keeps reminding the trade that the U.S. light-duty aftermarket is a $400 billion-plus market with a fleet older than twelve years. Older cars mean more work per visit and more judgment at the counter. That is good for the shop and terrible for follow-up, because the extra work happens while the people who should follow up are already busy.",
      },
      {
        type: "h2",
        text: "Open repair orders go quiet",
      },
      {
        type: "p",
        text: "The customer is waiting. The authorization is sitting. The car is in a bay or in the lot. The ticket is technically open. Nobody has said anything since yesterday. An agent can watch the board for aging tickets, missing approvals, and updates that never went out. That is not intelligence in the science-fiction sense. That is a job with a clock, a threshold, and a draft.",
      },
      {
        type: "p",
        text: "At Detail Driven, repair lives in Tekmetric. The watcher reads Tekmetric. It does not invent a second repair-order system. If we cannot reach the board, we cannot watch the board. That sentence has ended more fantasy conversations than any model benchmark.",
      },
      {
        type: "h2",
        text: "Declined work dies in the ticket",
      },
      {
        type: "p",
        text: "The recommendation was logged. Brakes, struts, a cooling system that will not last the season. The customer said not today. The follow-up was not. That revenue leaves with the car, and the shop will see the same vehicle again as a comeback or as a Google review about the thing that failed. An agent can keep a declined-line queue and draft the next message from the actual recommendation, not from a generic drip. A person still sends it until you trust the path.",
      },
      {
        type: "p",
        text: "This is the stall independent shops describe without being asked. It is also the stall that generic “AI for automotive” landing pages skip, because it is not a chatbot demo. It is a queue.",
      },
      {
        type: "h2",
        text: "The owner report is a Sunday job",
      },
      {
        type: "p",
        text: "Hours, comebacks, A/R, ads versus cars that actually booked. Someone builds it from three logins, usually after the week is already over. An agent can assemble the exceptions overnight so the owner starts from the problems, not from the exports. Five dashboards is not visibility. It is a scavenger hunt with better graphic design.",
      },
      {
        type: "ul",
        items: [
          "Aging RO alerts and missing approvals, from the shop system you already run.",
          "Declined-line queue with a drafted next step, not a sticky note.",
          "Comeback flags that show up as a pattern instead of a feeling.",
          "Ads spend checked against repair orders that actually booked.",
          "A morning exception list instead of a reconstructed spreadsheet.",
        ],
      },
      {
        type: "h2",
        text: "Ads spend without an operator",
      },
      {
        type: "p",
        text: "Google Ads runs. Sometimes Meta runs. Google Business Profile sits there collecting questions nobody answered. Search Console knows that “brake repair near me” slid. None of that is wired to the cars that checked in. An agent can put spend next to bookings. It cannot invent ROAS from a form. If the shop never marked the job with a source, the report will say so. That is still useful.",
      },
      {
        type: "h2",
        text: "What stays human",
      },
      {
        type: "p",
        text: "Money. Promises. The comeback conversation. Anything a customer will remember as “the shop said.” Agents draft, flag, assemble, and (where you approve it) take a small action and log it. Named tools on this page are examples, not a certified list. We confirm access in the audit. If a vendor will not let us in, we say so before anyone pays for a build.",
      },
      {
        type: "quote",
        text: "The leftover work is not a missing login. It is people still operating the software by hand.",
      },
      {
        type: "h2",
        text: "Comebacks are a feeling until they are a queue",
      },
      {
        type: "p",
        text: "A comeback gets handled as a favor and never shows up as a pattern. The advisor knows. The technician knows. The owner hears about it at the wrong time. An agent can flag repeat RO lines on the same vehicle, or a comeback code if the shop system has one. It cannot apologize. It cannot decide whether this is a warranty, a courtesy, or a conversation about the declined work from last visit. That is why comebacks stay next to a person even when the flag is automatic.",
      },
      {
        type: "p",
        text: "If this is the stall in your bays, the automotive audit is the next step. Thirty minutes on how the work actually moves. No pack of agents. No obligation to build.",
      },
    ],
  }),

  article({
    slug: "ai-agents-vs-automations",
    category: "Operations",
    title: "AI agents vs automations: the difference for a service business",
    description:
      "Zapier moves a field. An AI agent watches a queue. How service businesses should separate automations, agents, and work that must stay with a person.",
    excerpt: "Zapier moves a field. An agent watches a queue. Mixing them up is how operators buy the wrong thing.",
    author: "McGuire",
    date: "August 2026",
    dateIso: "2026-08-26",
    updatedIso: "2026-09-10",
    industry: "general",
    related: [
      "how-an-ai-operations-audit-works",
      "connecting-gohighlevel-to-tekmetric",
      "ai-agents-inside-an-auto-repair-shop",
    ],
    faqs: [
      {
        q: "Can Zapier just do this?",
        a: "Zapier, Make, and native workflows are the right tool when a field should move from A to B every time. They do not notice that an estimate aged past the window, or that the same customer called twice and nobody called back.",
      },
      {
        q: "Is an agent just ChatGPT with a zap?",
        a: "No. An agent has a job, permissions, a log, and an evaluation. Glue cannot respect least privilege or get better as the operation changes.",
      },
      {
        q: "Should some work stay with a person forever?",
        a: "Yes. If a path needs taste or a hard conversation, it is not an agent job. If it is a field moving from A to B, it is not an agent job either.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Zapier moves a field. An agent watches a queue. Mixing them up is how operators buy the wrong thing and then decide AI is theater. We have sat through both mistakes. The first looks like a shop with forty zaps and a CRM that still does not know the car is in the bay. The second looks like a chatbot on the website while declined work dies in the ticket.",
      },
      {
        type: "p",
        text: "Service businesses already bought automations, whether they used that word or not. GoHighLevel workflows. Shopmonkey or Tekmetric notifications. QuickBooks rules. CallRail recordings that dump into a folder. Google Ads automatic bidding. The stall is not a missing zap. The stall is that none of those tools is assigned to ask what should happen next when a human would have noticed.",
      },
      {
        type: "h2",
        text: "What an automation is",
      },
      {
        type: "p",
        text: "An automation is a trigger and an action. Lead arrives, create a contact. Invoice paid, send a receipt. Estimate locked in CCC, write an EMS file to a folder, CCC Intelligent Solutions documents that path in the CCC ONE help for File Export. Fine. Necessary, even. It does not notice that an estimate aged past the window, or that the same customer called twice and nobody called back. It will happily fire the same action a thousand times, including the times you wish it would not.",
      },
      {
        type: "p",
        text: "Automations are cheaper and more reliable for the dumb paths. That is a compliment. If you can write the rule on a napkin, you probably should not rent a language model to execute it. NIST’s AI RMF is useful here too: if you cannot map the job, you cannot govern it. A zap you cannot name is not an operations system. It is sediment.",
      },
      {
        type: "h2",
        text: "What an agent is",
      },
      {
        type: "p",
        text: "An agent has a job. Watch stalled repair orders. Watch unsold estimates. Assemble the morning briefing. It reads more than one system. It decides whether something is an exception. It drafts, flags, or, where you approve it, takes a small action. Then it logs what it did. That last part is the part operators skip when they paste a transcript into ChatGPT and call it a workflow.",
      },
      {
        type: "p",
        text: "At Detail Driven the jobs have names: follow-up, monitoring, reporting. They do not have master logins. They do not get to invent a repair order. They work on leftover work the software already knew about. A person still owns the customer. If that sounds conservative, it is. Conservatism is how you still have a shop after the demo.",
      },
      {
        type: "h2",
        text: "The three-way split we use in an audit",
      },
      {
        type: "ul",
        items: [
          "Automation: a field should always move. Lead to contact. Paid invoice to receipt. Locked estimate to EMS export.",
          "Agent: a queue should be watched. Aging ROs, declined lines, untouched CRM estimates, ads with no booked car, quiet collision files.",
          "Person: money, promises, comebacks, insurance arguments, anything that requires taste.",
        ],
      },
      {
        type: "p",
        text: "You still want automations. The mistake is asking ChatGPT plus a zap to run the shop. Glue cannot respect permissions, keep a history, or get better as the operation changes. That takes architecture, testing, and someone watching the watchers. Managed AI exists because APIs change, models change, and the shop’s mix of work changes. A zap does not get a review. An agent should.",
      },
      {
        type: "h2",
        text: "Why this distinction saves money",
      },
      {
        type: "p",
        text: "Agents are more expensive to design than zaps. If we sell you an agent for a field-moving job, we have overcharged you. If we sell you a zap for a queue-watching job, you will be back in six weeks saying AI does not work. The audit marks the stalls so that does not happen. You can walk away with the map and never hire us. That is still useful.",
      },
      {
        type: "quote",
        text: "If a path needs taste or a hard conversation, it is not an agent job. If it is a field moving from A to B, it is not an agent job either.",
      },
      {
        type: "h2",
        text: "What we mark on the opportunity map",
      },
      {
        type: "p",
        text: "Each stall gets a label: automation, agent, or person. Each agent path gets a system it must read, a permission, and a first deployment size of one or two jobs, not forty. If the leftover work is real and the door is not, the map says that too. You can hire us or not. You should not leave the call still thinking Zapier and a custom workforce are the same SKU.",
      },
      {
        type: "p",
        text: "Start with the work, not with the category. The category will still be confused next year. The $1,800 estimate sitting four days will not care what we called the software that was supposed to notice.",
      },
    ],
  }),

  article({
    slug: "how-an-ai-operations-audit-works",
    category: "Audit",
    title: "How an AI operations audit works",
    description:
      "How a Cortex AI operations audit works: apply, walk the work for 30 minutes, leave with an opportunity map. What you get even if we never build.",
    excerpt: "Apply, walk the work for 30 minutes, leave with an opportunity map. What you get even if we never build.",
    author: "McGuire",
    date: "August 2026",
    dateIso: "2026-08-28",
    updatedIso: "2026-09-10",
    industry: "general",
    related: [
      "ai-agents-vs-automations",
      "private-ai-workforce-automotive",
      "shop-owner-report-five-dashboards",
    ],
    faqs: [
      {
        q: "Is the audit actually free?",
        a: "Yes. Apply, walk the work for thirty minutes, leave with an AI Opportunity Map. No obligation to build. If we think we can help, we will show you what a build would look like. If we cannot, we will say so.",
      },
      {
        q: "Will you quote a price from the website form?",
        a: "No. We will not quote a number from a form. Pricing a build without seeing the software and the leftover work is how this category got a reputation for theater.",
      },
      {
        q: "What if my stack is too early?",
        a: "Then the audit says so. That is the audit doing its job. You still leave with a map of the stalls.",
      },
      {
        q: "Do I need to prepare a slide deck?",
        a: "No. Show us the software. Show us where a job stalls. Show us who still copies between systems.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "The audit is how we keep you from buying a build you do not need. It is also the only honest way to price the work. We will not quote a number from a website form. We will not diagnose your shop from a chatbot. We will not send a pack of agents and hope one of them lands. If that sounds slower than the ads in this category, it is. Slower is the point.",
      },
      {
        type: "p",
        text: "Automotive shops, collision centers, HVAC companies, and the rest of the trades we sit with already bought software. The Bureau of Labor Statistics can tell you how many technicians the country employs. It cannot tell you whether your GoHighLevel opportunities are tied to Tekmetric repair orders. That is a thirty-minute conversation, not a white paper.",
      },
      {
        type: "h2",
        text: "Step one: apply",
      },
      {
        type: "p",
        text: "Name, email, phone, company, industry, revenue. That is enough to get you on the list. If you have a website, headcount, locations, software, and the stall that bothers you most, send those too. Skip them if you are in a hurry. We already have the lead. The form is not a qualification maze. It is how we know whether to put you on the automotive lander path or the general one.",
      },
      {
        type: "p",
        text: "Shop owners sometimes write “I don’t know what we need, I just know the office is drowning.” That is a complete application. The drowning is the input. The software list is something we will get off the screen share.",
      },
      {
        type: "h2",
        text: "Step two: walk the work for thirty minutes",
      },
      {
        type: "p",
        text: "Not a slide deck about AI. Show us the software. Show us where a job stalls. Show us who still copies between systems. If the advisor is the only person who knows how a lead becomes a repair order, we want to see that, not a cleaned-up process document. If you cannot spare thirty minutes, you are not ready to install a workforce. We will not pretend otherwise.",
      },
      {
        type: "p",
        text: "On automotive calls we usually end up in Tekmetric or Shopmonkey, GoHighLevel or a shared inbox, Google Ads, and QuickBooks. On collision we end up in CCC ONE, and we ask what is actually exported, estimates and Final Bills are documented EMS paths; the schedule, in our experience, is not. On HVAC we end up in ServiceTitan, Jobber, or FieldEdge. Named tools are examples. If we cannot reach a system, we say so on the call.",
      },
      {
        type: "h2",
        text: "Step three: an AI Opportunity Map",
      },
      {
        type: "ul",
        items: [
          "Highest-value agent paths, ranked by leftover work, not by how impressive the demo would look.",
          "Whether we can actually reach the software. Access is a fact, not a hope.",
          "Complexity. A declined-line watcher is not a collision EMS bridge.",
          "What should remain human. Money, promises, hard conversations.",
          "A recommended first deployment, usually one or two paths, not forty.",
        ],
      },
      {
        type: "p",
        text: "If we think we can materially help, we will also show you what a build would look like, agents, permissions, the dashboard that ships in the same build, and whether local hardware even belongs in the conversation. You can walk away with the map and never hire us. That is still useful. If we tell you the stack is too early, or the leftover work is not there, that is the audit doing its job.",
      },
      {
        type: "h2",
        text: "What we will not do",
      },
      {
        type: "p",
        text: "We will not invent ROI. We will not attribute Detail Driven’s facts to your shop. We will not tell you a chatbot will run the counter. We will not hide the dashboard as a later upsell; it is part of the build. We will not ask you to rip out Tekmetric, CCC, ServiceTitan, or QuickBooks so we can be the system of record. We are not a system of record.",
      },
      {
        type: "quote",
        text: "You can walk away with the map and never hire us. That is still useful.",
      },
      {
        type: "h2",
        text: "Who should be on the call",
      },
      {
        type: "p",
        text: "The person who can share a screen of the software, and the person who feels the stall. Sometimes that is one owner. Sometimes it is an office manager plus a shop foreman. A marketing person alone cannot show us why an RO went quiet. A technician alone cannot show us the ads account. If both halves of the leftover work are in the room, thirty minutes is enough.",
      },
      {
        type: "p",
        text: "If you already know the stall (unanswered estimates, ads versus cars, five dashboards every morning) apply anyway. The audit is where we find out whether the stall is an automation, an agent, or a person you need to hire. Those are different products. They should not share a price.",
      },
    ],
  }),

  article({
    slug: "declined-work-never-gets-a-second-call",
    category: "Automotive",
    title: "Declined work never gets a second call, and the shop software already logged it",
    description:
      "Declined work in auto repair is already in Tekmetric. The second call never happens. How AI agents keep a declined-line queue without replacing the advisor.",
    excerpt:
      "The recommendation was logged. The follow-up was not. That revenue leaves with the car, and the ticket already knew.",
    author: "McGuire",
    date: "September 2026",
    dateIso: "2026-09-01",
    updatedIso: "2026-09-01",
    industry: "automotive",
    related: [
      "ai-agents-inside-an-auto-repair-shop",
      "crm-leads-sitting-four-days",
      "shop-owner-report-five-dashboards",
    ],
    faqs: [
      {
        q: "Isn’t declined work just a sales problem?",
        a: "It is a queue problem that looks like a sales problem. The recommendation is already in the ticket. The shop does not need a new closer. It needs a watcher and a drafted next step.",
      },
      {
        q: "Will the agent pressure customers?",
        a: "No. The first deployment drafts from the actual declined line and waits for a person. Tone is a permission. A hard sell is not a default.",
      },
      {
        q: "Does this require a CRM?",
        a: "Not always. Many shops have the declined line in the shop system and nowhere else. We watch the system that actually logged it.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Every independent shop we sit with already logs declined work. Brakes that were not this visit. Tires that will not last the season. A cooling system the advisor pointed at, politely, while the customer looked at the total. Tekmetric, Shopmonkey, Mitchell 1, the ticket has a line, a status, often a reason. Then the car leaves. The second conversation depends on the advisor remembering after the drive is slammed.",
      },
      {
        type: "p",
        text: "The Auto Care Association has spent years documenting an aging light-vehicle fleet (more than twelve years on the road in the last Factbook cycle) and a service channel that has taken share from dealers. Older cars produce more recommended work per visit. That is the economic fact. The operations fact is that recommended work is only revenue if someone asks again, on a timeline a human being would consider decent. Most shops do not have that person. They have a hope.",
      },
      {
        type: "h2",
        text: "The software already did its job",
      },
      {
        type: "p",
        text: "This is why “buy better CRM” fails here. The record exists. It exists in the system the technician and the advisor already live in. Copying it into GoHighLevel so a drip campaign can say “checking in!” is how you get a second system of record and a customer who knows you are guessing. The job is to watch the declined line where it was written, draft a next step from that line, and put it in front of the person who is allowed to talk to the customer.",
      },
      {
        type: "p",
        text: "At Detail Driven, repair declined work lives in Tekmetric. The watcher reads Tekmetric. It does not require the advisor to become a CRM admin after they just sold a $612 average repair order and walked back onto the drive. Numbers like that, when they appear in a film or a briefing, are illustrations of the stall, not published KPIs from the shop.",
      },
      {
        type: "h2",
        text: "Why the second call never happens",
      },
      {
        type: "p",
        text: "The Bureau of Labor Statistics still describes automotive service as work that happens at a stall, with a customer in a waiting room or a borrowed car, under time pressure. The advisor’s afternoon is not a call blitz. It is a sequence of interruptions. Declined-line follow-up loses to the car that is here. That is rational. It is also expensive. Comebacks and “you never told me” reviews are the late invoice for a conversation that should have happened ten days later, calmly, with the original recommendation in hand.",
      },
      {
        type: "ul",
        items: [
          "The declined line is already coded in the shop system.",
          "The customer already heard the recommendation once, in person.",
          "The second touch has a natural window, long enough to not feel like a hustle, short enough that the car is still the same car.",
          "The draft should quote the actual line, not a marketing paragraph about “vehicle health.”",
          "A person still sends until the path is trusted. Money and promises stay human.",
        ],
      },
      {
        type: "h2",
        text: "What an agent can watch",
      },
      {
        type: "p",
        text: "A declined-line queue. Age of the decline. Whether anyone logged a follow-up. Whether the vehicle came back for something else and the original line is still open. A drafted SMS or email that a person can send, edit, or kill. A note written back to the ticket so the next advisor is not starting from memory. That is a job. It is not a personality.",
      },
      {
        type: "p",
        text: "We will not tell you what percentage of declined work “should” close. Shops that publish those numbers on the internet are usually selling something else. In the audit we look at volume: how many declined lines a week, how many get a documented second touch, how many vehicles return with the same failed part. If the volume is not there, we will not invent an agent so we have something to install.",
      },
      {
        type: "h2",
        text: "What stays human",
      },
      {
        type: "p",
        text: "The advisor still owns the relationship. A declined brake job can be a budget problem, a trust problem, or a “I need to ask my spouse” problem. Those are different messages. An agent can prepare. It cannot read the room from a status code. I-CAR and ASA materials on customer communication exist because this trade already knows the conversation is the work. We are not trying to automate the conversation. We are trying to stop it from never happening.",
      },
      {
        type: "quote",
        text: "The recommendation was logged. The follow-up was not. That revenue leaves with the car.",
      },
      {
        type: "h2",
        text: "Where declined work sits next to marketing",
      },
      {
        type: "p",
        text: "Shops sometimes try to solve this with a monthly email about “vehicle health.” That campaign does not know the line that was declined. It cannot tell a brake customer from a cabin-filter customer. It will happily email someone whose car is in the bay. The declined-line watcher is narrower on purpose. It starts from the ticket. If marketing wants a list, they can have a list after the advisor has done the decent second touch.",
      },
      {
        type: "p",
        text: "If declined work is the stall that bothers you most, say so on the automotive audit form. We will look at the ticket, not at a marketing funnel.",
      },
    ],
  }),

  article({
    slug: "collision-ai-ccc-one-what-exports",
    category: "Automotive",
    title: "Collision AI and CCC ONE: what actually exports, and what we refuse to scrape",
    description:
      "CCC ONE will export EMS estimates and a Final Bill. It will not, in our experience, export the schedule. How Cortex reads the folder CCC already writes.",
    excerpt:
      "CCC exports EMS estimates and Final Bills to a folder. The schedule is not a clean feed. We read what CCC already writes. We do not scrape DATA.DAT.",
    author: "McGuire",
    date: "September 2026",
    dateIso: "2026-09-02",
    updatedIso: "2026-09-02",
    industry: "automotive",
    related: [
      "private-ai-workforce-automotive",
      "ai-agents-inside-an-auto-repair-shop",
      "connecting-gohighlevel-to-tekmetric",
    ],
    faqs: [
      {
        q: "Can you log into CCC ONE as an integration partner and pull everything?",
        a: "Not in this install. We used the export CCC already documents: EMS estimates, workfile copies, part price changes, written to a folder. If a future shop has a cleaner door, the audit will say so.",
      },
      {
        q: "Do you scrape DATA.DAT or the CCC desktop database?",
        a: "No. We will not scrape private databases to fake an API. If the vendor will not let us in, we say so before anyone pays for a build.",
      },
      {
        q: "Does the agent replace the estimator?",
        a: "No. Insurance work stays in CCC. The agent watches quiet files, uncollected finals, and follow-up. A writer still owns the file.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Collision is the honest hard part of any automotive AI conversation. Mechanical repair, for all its chaos, usually has a shop-management API. Collision lives in an estimating platform the insurer already trusts. At Detail Driven that platform is CCC ONE. CCC Intelligent Solutions documents import and export of EMS assignments, EMS estimates, and workfile copies, and a File Export directory for CIECA EMS 2.01 estimates, EMS part price changes, AWF workfile copies, and Parts Trader XML. That is the door we used. It is not the door people wish existed.",
      },
      {
        type: "p",
        text: "CIECA (the Collision Industry Electronic Commerce Association) has spent decades making EMS a standard so estimating systems can hand a file to someone else without inventing a new language every year. EMS 2.01 is that language. It is an estimate file. It is not your schedule, your technician time clock, or your front-office chatter. Treating it as a complete picture of the body shop is how integrators get cute and then get stuck.",
      },
      {
        type: "h2",
        text: "What CCC will export",
      },
      {
        type: "p",
        text: "In CCC ONE help, the shop configures export directories under Machine Settings → File Export. Export types include CIECA EMS 2.01 Estimate, EMS Part Price Change, Workfile Copy (AWF Estimate), and Part XML for Parts Trader. On cccone.com, CCC has also described exporting estimate EMS, importing EMS assignments, and importing part price changes, with options to include or redact customer information and the VIN. Locked estimates can prompt an export. Manual export exists for a workfile. The files land in a folder the shop already chose.",
      },
      {
        type: "p",
        text: "That folder is the bridge. Collectors watch it. New estimates and Final Bills become records the operator OS can see next to repair, detailing, and glass. Insurance work stays in CCC. We are not trying to become an estimating system. I-CAR training exists because collision work is a trade with a standard of care. An agent that rewrites an estimate is not a product. It is a liability.",
      },
      {
        type: "h2",
        text: "What we did not get",
      },
      {
        type: "p",
        text: "The schedule. In this install, CCC would not give us the collision schedule as a clean feed. We did not scrape DATA.DAT to fake it. We did not sit a computer vision model on the planner wall. Quiet files (estimates and jobs that stopped moving) we can infer from the exports and from dates that stop changing. Who is painting what at 2 p.m. is still a person looking at the board. That constraint is in the case study because hiding it would be a lie.",
      },
      {
        type: "ul",
        items: [
          "We read EMS estimates and Final Bills from the folder CCC already writes.",
          "We honor redaction settings the shop configured for PII and VIN.",
          "We do not scrape the CCC desktop database.",
          "We do not replace the writer, the insurer relationship, or the estimating platform.",
          "Uncollected finals and files that went quiet surface as exceptions on the operator dashboard.",
        ],
      },
      {
        type: "h2",
        text: "Why scraping is not a strategy",
      },
      {
        type: "p",
        text: "There is always a consultant who knows a way into the local files. There is always a shop that will say yes because they are tired. Then CCC ships a patch, or a new workstation, or a cloud-only path, and the integration becomes folklore. NIST’s AI RMF is dry on this point and still right: if you cannot govern the data path, you cannot measure it, and you cannot manage it when it breaks. A folder CCC documents is governable. A reverse-engineered database is not.",
      },
      {
        type: "p",
        text: "The Bureau of Labor Statistics counted on the order of 109,000 automotive body and related repairers in repair and maintenance establishments in its 2025 occupational data. Those people do not need a clever scrape. They need the office to notice that a file has not moved, that a Final Bill was never collected, and that the customer has not had an update since the supplement fight started.",
      },
      {
        type: "h2",
        text: "What an agent can watch on collision",
      },
      {
        type: "p",
        text: "Quiet files. Uncollected finals. Updates that never went to the owner of the vehicle. A morning exception list that includes collision next to repair instead of living in a separate brain. Follow-up drafts a person still sends. The collision view on the dashboard is a window into CCC exports, not a second CCC. If a future shop has a better API, the audit will use it. We will not pretend Detail Driven had one.",
      },
      {
        type: "quote",
        text: "The bridge reads the folder CCC already writes. It does not scrape DATA.DAT.",
      },
      {
        type: "h2",
        text: "What the collision audit looks like",
      },
      {
        type: "p",
        text: "Share the CCC export settings. Show us a locked estimate and whether a file landed. Show us a Final Bill that never got collected. Show us how the writer tells a vehicle owner the file moved. If EMS is not on, that is the first conversation, not an agent. If EMS is on and the folder is a junk drawer of ten years of estimates, that is a cleanup conversation. We would rather say that on minute twelve than discover it on day forty of a build.",
      },
      {
        type: "p",
        text: "If you run a collision center and you want to know what we can actually see in your CCC, that is an audit question. Bring the export settings. We will tell you what is there.",
      },
    ],
  }),

  article({
    slug: "shop-owner-report-five-dashboards",
    category: "Operations",
    title: "The shop owner report: why five dashboards still mean a Sunday morning",
    description:
      "Shop owners already have dashboards in Tekmetric, QuickBooks, Google Ads, GA4, and the CRM. The morning report is still a scavenger hunt. What an exception briefing actually is.",
    excerpt:
      "Five logins is not visibility. The owner report is still rebuilt by hand. Agents assemble exceptions overnight so Monday starts from what broke.",
    author: "McGuire",
    date: "September 2026",
    dateIso: "2026-09-03",
    updatedIso: "2026-09-03",
    industry: "automotive",
    related: [
      "google-ads-spend-vs-cars-that-booked",
      "ai-agents-inside-an-auto-repair-shop",
      "private-ai-workforce-automotive",
    ],
    faqs: [
      {
        q: "Is the Cortex dashboard a fifth login?",
        a: "It is the exception layer, included in the same build, reading the systems you already have. It does not replace Tekmetric, CCC, QuickBooks, or Google Ads.",
      },
      {
        q: "Can you promise hours back on Monday morning?",
        a: "No. We can describe the job: assemble exceptions overnight from the connected stack. Hours saved go on this page when they are measured.",
      },
      {
        q: "Do I have to stop looking at my other dashboards?",
        a: "No. The people who love Tekmetric should keep loving Tekmetric. The owner should not have to be all of those people before coffee.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Every shop owner we meet already has dashboards. Tekmetric will show hours and open ROs. QuickBooks will show A/R. Google Ads will show spend and a version of conversions that may or may not be a car in a bay. GA4 will show sessions. GoHighLevel will show opportunities that have not moved. Search Console will show queries. Google Business Profile will show questions. The owner still rebuilds the week by hand, usually on Sunday, usually after the kids are in bed, usually from CSV exports that do not agree with each other.",
      },
      {
        type: "p",
        text: "Five dashboards is not a reporting system. It is five opinions. The Automotive Service Association can train a shop to read KPIs. It cannot sit in the office at 6 a.m. and reconcile ads spend with repair orders, collision finals with QuickBooks, and a GBP complaint with the ticket that caused it. That reconciliation is leftover work. It has been leftover for as long as shops have had more than one login.",
      },
      {
        type: "h2",
        text: "What the morning actually requires",
      },
      {
        type: "p",
        text: "Not a wall of green. Exceptions. Which repair orders aged past the window. Which collision files went quiet. Which detailing appointments never confirmed. Which campaigns spent yesterday and produced no booked job. Which invoices are past terms. Which public reviews arrived overnight. The owner does not need to be told that the shop is “on track.” The owner needs the three things that will not be on track by noon if nobody touches them.",
      },
      {
        type: "p",
        text: "At Detail Driven we named this reporting, and we installed it as a job next to follow-up and monitoring. The briefing pulls from Tekmetric, CCC exports, ads, and the books. The dashboard is included in the same build (command, money, demand, collision, shop views) so the owner is not collecting five PDFs. We will not put a time-saved number on this page. The conservative estimate of leftover watch-and-chase work across those four shop types was a planning number, not a measured KPI.",
      },
      {
        type: "h2",
        text: "Why native dashboards are not enough",
      },
      {
        type: "p",
        text: "Each vendor optimizes for the records it owns. Tekmetric should be good at repair orders. Google Ads should be good at clicks. QuickBooks should be good at money. The owner’s question cuts across them: did the dollars we spent become work we did, and is anything stalling that will become a fight. Cross-system questions do not have a native home. That is why the Sunday spreadsheet exists. It is a handmade agent, run by the most expensive person in the building.",
      },
      {
        type: "ul",
        items: [
          "Hours and load from the shop system, not from memory.",
          "Comebacks as a pattern, not a feeling.",
          "A/R and unbilled work from the books you already run.",
          "Ad spend next to cars that actually booked.",
          "Public reputation next to the ticket, not next to a marketing meeting.",
        ],
      },
      {
        type: "h2",
        text: "What an agent can assemble",
      },
      {
        type: "p",
        text: "An overnight pass across the connected stack. A short exception list. Drafts attached where a next step is obvious, a follow-up on an aged estimate, a note that a campaign is spending with no bookings. A log of what it checked, so you can distrust it in a specific way instead of a general one. Cloud or local does not matter to the owner if the briefing is there when the lights come on. At Detail Driven, routine assembly stays on local hardware. A messy narrative can go to a stronger model. Routing, not religion.",
      },
      {
        type: "h2",
        text: "What we will not put in the report",
      },
      {
        type: "p",
        text: "Vanity occupancy. Fake ROAS. A chatbot summary that says “great job team” while three $1,800 estimates sit untouched. The Bureau of Labor Statistics can tell you what technicians earn. It cannot tell you whether your hours billed yesterday were real. If the underlying records are dirty, the briefing will look dirty. That is a feature. Dirty data in a pretty dashboard is how shops lie to themselves.",
      },
      {
        type: "quote",
        text: "The owner should start from what broke overnight, not from five CSV exports.",
      },
      {
        type: "h2",
        text: "What “daily reporting automated” actually means",
      },
      {
        type: "p",
        text: "At Detail Driven, daily reporting is one of the facts we will stand behind: it was installed as a job. It is not a claim that the owner never opens Tekmetric. It is not a claim that finance stopped using QuickBooks. It is a claim that the overnight pass exists, the exception list exists, and the owner is not the person who has to remember to export. If your shop has one login and one honest dashboard, you may not need this path. Most shops we sit with have five.",
      },
      {
        type: "p",
        text: "If the Sunday report is the stall that made you search for this, say so on the audit. Bring the five logins. We will tell you which ones we can actually read.",
      },
    ],
  }),

  article({
    slug: "missed-calls-while-the-drive-is-slammed",
    category: "Operations",
    title: "Missed calls while the drive is slammed",
    description:
      "Auto shops miss calls when the drive is slammed. CallRail already has the recording. What an AI agent can watch after hours and at lunch without replacing the advisor.",
    excerpt:
      "The phone system knows who called. The advisor is on the drive. After-hours and lunch missed calls are leftover work, not a new phone vendor.",
    author: "McGuire",
    date: "September 2026",
    dateIso: "2026-09-04",
    updatedIso: "2026-09-04",
    industry: "automotive",
    related: [
      "crm-leads-sitting-four-days",
      "declined-work-never-gets-a-second-call",
      "ai-agents-inside-an-auto-repair-shop",
    ],
    faqs: [
      {
        q: "Do I have to replace my phone system?",
        a: "No. If CallRail, the carrier, or the CRM already captures the missed call, we watch that. A new phone vendor is a different project.",
      },
      {
        q: "Will the agent answer the phone live?",
        a: "Not as a default. Live answer is a different product with a different failure mode. First deployments watch missed calls, draft the callback, and log the attempt.",
      },
      {
        q: "Isn’t this just a receptionist?",
        a: "A receptionist is a person. If you have one who never misses, you may not need this path. Most shops have an advisor covering the drive and the phone at the same time.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "The drive is slammed. Two cars in, one on the rack, a parts counter line, an advisor writing an estimate on a hood. The phone rings. It rings again. CallRail, or the carrier, or the Google Business Profile call history will happily tell you later who called. Later is when they already called the shop down the road. This is not a mystery. It is the most ordinary stall in independent repair.",
      },
      {
        type: "p",
        text: "A widely cited Lead Response Management study from InsideSales.com and MIT, led by James Oldroyd in 2007, found that the odds of qualifying a lead drop sharply after the first few minutes, on the order of twenty times better inside five minutes than after thirty. That study was about web leads, not brake jobs. Shop owners still recognize the shape. Speed-to-lead is not a SaaS slogan when the caller is sitting on the shoulder with a battery light. It is whether anyone is assigned to notice the miss while the people who should notice are busy.",
      },
      {
        type: "h2",
        text: "The phone already knows",
      },
      {
        type: "p",
        text: "CallRail and similar trackers exist because shops bought Google Ads and then could not tell which campaign produced the ring. The recording is there. The missed-call event is there. The CRM sometimes gets a note, sometimes does not. The leftover work is the callback: who, how soon, with what context, written back to the ticket or the opportunity so the next person is not cold. Replacing the phone system does not do that. It gives you a nicer recording of the same miss.",
      },
      {
        type: "p",
        text: "At Detail Driven, conversations live in GoHighLevel and the phones. The operator dashboard has an inbox-and-calls view on purpose. Sales follow-up starts there, not in a separate dump. We did not publish a missed-call recovery rate. We installed monitoring so a miss is an exception instead of folklore.",
      },
      {
        type: "h2",
        text: "After hours is a different queue",
      },
      {
        type: "p",
        text: "Lunch and Saturday morning are not the same as 2 a.m. After-hours callers are often stranded, shopping, or leaving a voicemail they expect someone to honor at open. An agent can triage: stranded versus shopping versus vendor versus spam. It can draft the first text for open. It can book nothing that the shop did not authorize. The Bureau of Labor Statistics describes this occupation as on-site, customer-facing, interruption-heavy work. Nighttime coverage is not a technician problem. It is an office problem the technicians inherit in the morning.",
      },
      {
        type: "ul",
        items: [
          "Missed-call events from the tracker or CRM you already run.",
          "A drafted callback that includes the number, time, and any recording summary a person can trust enough to use.",
          "A log of who was contacted and who still needs a person.",
          "Spam and vendor calls kept out of the advisor’s morning list.",
          "No live promises about price, wait time, or “we can take you at 10.”",
        ],
      },
      {
        type: "h2",
        text: "What we will not automate first",
      },
      {
        type: "p",
        text: "Live voice agents that negotiate a drop-off. Anything that quotes a price from a transcript. Anything that tells a customer the bay is open when the board is not. Those demos look good on the internet and go badly on the drive. The first path is the miss that already happened. Catch it. Draft it. Write it back. Let a person be decent on the callback.",
      },
      {
        type: "p",
        text: "Google Business Profile still takes calls and messages after the shop is closed. Unanswered GBP questions are the same stall in a different uniform. If we can read them, they belong on the same exception list as CallRail misses. If we cannot, the audit says so.",
      },
      {
        type: "quote",
        text: "A nicer recording of the same miss is not an operations system.",
      },
      {
        type: "h2",
        text: "How this sits next to the CRM",
      },
      {
        type: "p",
        text: "A missed call that becomes a GoHighLevel opportunity still has to be worked. If the tracker writes a note and nobody owns the queue, you have a nicer CRM full of dead people. The agent’s job is to keep the miss on the exception list until a person closes it. That is the same pattern as an aged estimate. Different event. Same assignment problem. CallRail is an example, not a requirement. We confirm the tracker in the audit.",
      },
      {
        type: "p",
        text: "If missed calls are the thing you feel in your stomach every lunch hour, put that on the automotive audit. We will look at the tracker, the CRM, and who is actually supposed to call back.",
      },
    ],
  }),

  article({
    slug: "crm-leads-sitting-four-days",
    category: "Operations",
    title: "CRM leads sitting four days: the $1,800 estimate nobody followed",
    description:
      "GoHighLevel already has the $1,800 estimate. Four days of silence is an assignment problem. How agents watch untouched CRM leads without becoming the closer.",
    excerpt:
      "James, $1,800, four days silent. Elena, brakes, no follow-up. The CRM is watching. Nobody is assigned.",
    author: "McGuire",
    date: "September 2026",
    dateIso: "2026-09-05",
    updatedIso: "2026-09-05",
    industry: "automotive",
    related: [
      "connecting-gohighlevel-to-tekmetric",
      "declined-work-never-gets-a-second-call",
      "missed-calls-while-the-drive-is-slammed",
    ],
    faqs: [
      {
        q: "Are James, Elena, and Omar real customers?",
        a: "They are illustrations of a stall we see in CRMs: an estimate sitting, a brake lead with no follow-up, a tire inquiry never contacted. They are not published customer records.",
      },
      {
        q: "Does this only work in GoHighLevel?",
        a: "No. GHL is what Detail Driven ran and what a lot of shops run. The job is the untouched opportunity, wherever it lives.",
      },
      {
        q: "Will you auto-send on day four?",
        a: "Not as a default. First deployments draft and flag. Sending without a person is a permission you turn on after you trust the path.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "A customer received an $1,800 estimate. Four days silent. In the film we use on the automotive page, that stall has a name on it so a shop owner can feel it. The CRM already had the record. GoHighLevel will watch an opportunity sit for as long as you let it. Watching is not following up. Following up is somebody’s job (the office manager, or you) and it loses to the drive every time.",
      },
      {
        type: "p",
        text: "The same board usually has the rest of the pattern. A brake inquiry with no follow-up. A tire lead never contacted. A conversation that died in SMS because the thread was on a personal phone. None of this requires a new CRM. It requires an assignment: when an estimate ages past the window, draft the next step from the file, write it back, and put it in front of a person. Discovering it next Tuesday is not a process. It is a regret.",
      },
      {
        type: "h2",
        text: "Why CRMs go quiet in shops",
      },
      {
        type: "p",
        text: "GoHighLevel, Jobber, and the rest are good at capturing. Shops are good at working the car that is here. The opportunity pipeline is a third job nobody was hired to do. Drip campaigns paper over it until the customer gets a “just checking in” on a job they already declined, or worse, on a job they already completed. The Automotive Service Association can teach service drive process. It cannot sit inside your opportunity pipeline at 7 p.m.",
      },
      {
        type: "p",
        text: "The Oldroyd lead-response work is directionally useful here too, even though it was not a shop study: waiting a day to touch a new inquiry is how you donate the job. Four days on a written estimate is a different crime. The customer already has your number, your total, and a growing suspicion you do not want the work. A person should say something that is about their car, not about your cadence.",
      },
      {
        type: "h2",
        text: "What the agent actually does",
      },
      {
        type: "p",
        text: "It checks history. It prepares the follow-up under your rules. It writes the attempt back to the CRM. It flags the record if a person still needs to take it. When a job later completes, a review request can go out because that is a different, dumber path (closer to an automation) and it should not depend on the same memory as the $1,800 stall. Completed job. Review request went out. Those can be checkboxes. Untouched estimates cannot.",
      },
      {
        type: "ul",
        items: [
          "Age thresholds you set, not a vendor’s default drip.",
          "Drafts that quote the estimate, the vehicle, and the last human note.",
          "A person in the loop until you turn sending on.",
          "A write-back so the next advisor sees the attempt.",
          "No second system of record. The CRM that has the lead keeps the lead.",
        ],
      },
      {
        type: "h2",
        text: "What we saw in the field",
      },
      {
        type: "p",
        text: "At Detail Driven, GoHighLevel held the conversations. Tekmetric held the repair orders. Those are not the same object. A lead that never became an RO is a CRM job. An RO that went quiet is a shop-system job. Mixing them up is how you follow up on a car that is already in a bay, or ignore an estimate that never got a ticket. The operator OS keeps inbox and quotes next to shop views so a person can see both without becoming the integration.",
      },
      {
        type: "p",
        text: "We will not tell you that every four-day-old estimate is worth tens of thousands of dollars. The film says you may discover leftover work in that neighborhood when we walk marketing, sales, the website, and the journey. May. The audit is where the number becomes yours, or does not.",
      },
      {
        type: "quote",
        text: "The CRM is watching every open estimate. Nobody is assigned to do anything about it.",
      },
      {
        type: "h2",
        text: "Estimates versus repair orders",
      },
      {
        type: "p",
        text: "If the $1,800 lived only in GoHighLevel, it is a CRM follow-up. If it also became a Tekmetric estimate or RO, it is a shop-system follow-up, and the two must not double-text. That mapping is the whole infrastructure article on connecting GHL to Tekmetric. On this page the point is simpler: silence has a clock. Four days is already too long for a written total. Next Tuesday is how you donate the job to whoever called them back first.",
      },
      {
        type: "p",
        text: "If you can picture a name, a total, and a number of days without opening the CRM, you already know the stall. Put it on the audit. We will look at the pipeline, not at a template campaign.",
      },
    ],
  }),

  article({
    slug: "google-ads-spend-vs-cars-that-booked",
    category: "Operations",
    title: "Google Ads spend vs the cars that actually booked",
    description:
      "Google Ads can spend while leads fall. Auto shops need spend checked against repair orders in Tekmetric, not against platform conversions. How we watch that gap.",
    excerpt:
      "Spend up, leads down, “brake repair near me” sliding from four to seven. None of that matters until it is next to the cars that checked in.",
    author: "McGuire",
    date: "September 2026",
    dateIso: "2026-09-06",
    updatedIso: "2026-09-06",
    industry: "automotive",
    related: [
      "shop-owner-report-five-dashboards",
      "crm-leads-sitting-four-days",
      "missed-calls-while-the-drive-is-slammed",
    ],
    faqs: [
      {
        q: "Will you take over our Google Ads account?",
        a: "Not as the product. We read spend and put it next to bookings. Campaign management is a different job. If nobody is operating the account, that is an exception we will flag.",
      },
      {
        q: "Can you report true ROAS?",
        a: "Only if the shop marks source on the job and we can read both sides. If the records do not connect, the briefing will say they do not connect. We will not invent ROAS.",
      },
      {
        q: "Does SEO belong in the same watch?",
        a: "Search Console and GBP belong on the exception list next to ads. A query sliding from four to seven is a missed opportunity only if you were ranking there on purpose.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Google Ads is watched continuously, by Google. Spend can go up while the campaign produces fewer leads. Search Console can show “brake repair near me” sliding from number four to number seven. Meta can spend on a lookalike that has never been to the shop. None of that is an automotive operations system until it sits next to the cars that actually booked in Tekmetric, Shopmonkey, or the detailing calendar. Platform conversions are a rumor. Repair orders are a fact.",
      },
      {
        type: "p",
        text: "The Auto Care Association’s Joint Channel work with MEMA Aftermarket Suppliers and S&P Global has the light-duty aftermarket in the mid-$400 billions, with the service channel taking share from dealers. That is demand. Independent shops still buy clicks as if clicks were cars. Google’s own help documentation will tell you to use conversion tracking. It will not walk into your bay and ask whether the conversion was a booked job, a missed call, or a click on the phone number by the owner testing the ad.",
      },
      {
        type: "h2",
        text: "The stall is not the bid strategy",
      },
      {
        type: "p",
        text: "Shops love to argue Smart Bidding. The leftover work is more primitive. Nobody is assigned to notice that spend happened and bookings did not. The office manager is on the phone. The owner looks on Sunday. A campaign can burn a week of margin in the time it takes a person to remember the login. Watching continuously is the job. Changing the bid is a later decision by a person who understands the mix of work the shop actually wants.",
      },
      {
        type: "p",
        text: "At Detail Driven, Google Ads, Meta, GA4, Search Console, and Google Business Profile sit in the demand view next to what booked. Spend without an operator is an exception. We did not publish a ROAS. We installed the comparison. Four shop types, two ad platforms, and no operator on the account is a real shape. The agent puts spend next to cars that actually booked in Tekmetric and detailing that actually confirmed.",
      },
      {
        type: "h2",
        text: "SEO is the same watch in slower motion",
      },
      {
        type: "p",
        text: "Queries slide. Competitors publish. Google Business Profile gets questions at 9 p.m. A shop that paid for content last year and never looked again is running a campaign with a yearly cadence and no operator. Search Console is already watching. Nobody is assigned to do anything when “brake repair near me” falls. That is an exception, the same way an aged estimate is an exception. The time scale is weeks instead of days. The assignment problem is identical.",
      },
      {
        type: "ul",
        items: [
          "Daily spend versus jobs that actually booked in the shop system.",
          "Campaigns with spend and no leads, or leads with no contact.",
          "Search queries that slid, if you were ranking there on purpose.",
          "Unanswered Google Business Profile questions and reviews.",
          "No invented attribution. If source was not marked, we say so.",
        ],
      },
      {
        type: "h2",
        text: "What stays human",
      },
      {
        type: "p",
        text: "Creative. Bid changes. Whether you even want more of a job that loses money. An agent can flag. It should not decide that alignment work is the new hero offer because the click-through rate looked pretty. The owner still owns mix. Google can optimize for the conversion you fed it. If you fed it the wrong conversion, you have an expensive machine doing exactly what you asked.",
      },
      {
        type: "p",
        text: "We will not put a recovered-ad-spend number on this page. The film talks about ad dollars that may not have become profitable work, and about leftover work that may add up. May. The audit is where we look at the account, the booking records, and whether they can even be joined.",
      },
      {
        type: "quote",
        text: "Platform conversions are a rumor. Repair orders are a fact.",
      },
      {
        type: "h2",
        text: "What the film is actually asking",
      },
      {
        type: "p",
        text: "The automotive film asks how many of those ad dollars became profitable work. It does not answer with a Cortex KPI. It asks who is watching. Spend $18,420 is an illustration on a slide, the same way 27 unanswered estimates is an illustration. Your number will be different. The assignment problem will not: someone has to catch the campaign, or the campaign catches you on the credit card statement.",
      },
      {
        type: "p",
        text: "If you have spent a month arguing with an ads person who has never seen a repair order, bring both logins to the audit. The interesting meeting is the one where those two screens are in the same room.",
      },
    ],
  }),

  article({
    slug: "connecting-gohighlevel-to-tekmetric",
    category: "Infrastructure",
    title: "Connecting GoHighLevel to Tekmetric without making either the fake system of record",
    description:
      "GoHighLevel holds the conversation. Tekmetric holds the repair order. How to connect them for auto shops without creating a third system of record.",
    excerpt:
      "A lead in GHL is not a repair order in Tekmetric. Connecting them is a mapping job, not a new CRM, and not a master login.",
    author: "McGuire",
    date: "September 2026",
    dateIso: "2026-09-08",
    updatedIso: "2026-09-08",
    industry: "automotive",
    related: [
      "crm-leads-sitting-four-days",
      "ai-agents-vs-automations",
      "private-ai-workforce-automotive",
    ],
    faqs: [
      {
        q: "Should we move the shop into GoHighLevel?",
        a: "No. Tekmetric (or Shopmonkey, or Mitchell 1) is the repair system of record. GHL is the conversation system. Making either pretend to be the other is how you get two truths.",
      },
      {
        q: "Is this a native integration?",
        a: "Sometimes a vendor already offers a pipe. Sometimes it is a watcher that reads both APIs. The audit confirms what actually exists. We do not sell a fake native badge.",
      },
      {
        q: "Will customers get double texts?",
        a: "That is the failure mode we design against. One thread, one write-back, one person in the loop. Duplicate outreach is worse than silence.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "GoHighLevel is where a lot of shops keep conversations. Tekmetric is where they keep repair orders. Those are different objects. A lead is a person who might come in. An RO is a vehicle that is in. Treating them as the same record is how you text a customer about an estimate while the car is already on the rack, or ignore an opportunity because “they’re in the shop system somewhere.” Connecting the two is a mapping job with permissions. It is not a new platform.",
      },
      {
        type: "p",
        text: "We did this at Detail Driven without making Cortex the system of record. Collectors read both. The operator OS shows inbox and shop views in one place. Agents draft follow-up from the file that actually has the facts. Least privilege: no master login to the company. If that sounds less exciting than “all-in-one,” it is. All-in-one is how you rip out a shop system the technicians already trust.",
      },
      {
        type: "h2",
        text: "What belongs in which system",
      },
      {
        type: "p",
        text: "Tekmetric owns the RO, the approvals, the declined lines, the hours, the vehicle. GoHighLevel owns the SMS thread, the missed-call note, the marketing opportunity, the appointment that has not become a ticket yet. QuickBooks owns the invoice that got paid. Google Ads owns the click. When a shop tries to make GHL the RO, the advisors stop updating it. When a shop tries to make Tekmetric the marketing database, the campaigns starve. The Automotive Service Association cannot settle this for you. The software vendors will each volunteer to be the center of the universe. They should not be.",
      },
      {
        type: "ul",
        items: [
          "New web or ads inquiry: capture in GHL, watch for contact, do not invent an RO.",
          "Car on the drive: RO in Tekmetric, conversation still allowed in GHL if that is where the thread lives.",
          "Declined work: the line lives in Tekmetric. Follow-up may go out through GHL. Write both back.",
          "Paid work: books in QuickBooks or Stripe. Do not duplicate a ledger in the CRM.",
          "Exceptions: one dashboard that reads both, included in the build, not a third CRM.",
        ],
      },
      {
        type: "h2",
        text: "Automations versus the watcher",
      },
      {
        type: "p",
        text: "A zap that creates a GHL contact when a Tekmetric customer is created is an automation. Good. A zap that fires a campaign when an RO closes, without checking whether the customer already got a review request from the shop system, is how you earn a one-star. An agent that notices an estimate aged in GHL and that no RO exists in Tekmetric is a watcher. Those are different jobs. We mark them separately in the audit so you do not pay agent prices for glue, or glue prices for a queue.",
      },
      {
        type: "p",
        text: "Tekmetric publishes APIs for repair orders, customers, and appointments. GoHighLevel publishes workflows, webhooks, and opportunities. Both change. Managed AI exists because those doors move. A weekend integration with a shared admin password is not an architecture. NIST’s language about governing the path applies even when the path is two SaaS products you already pay for.",
      },
      {
        type: "h2",
        text: "What we refuse to do",
      },
      {
        type: "p",
        text: "We will not dump the whole shop into a data warehouse and call it a customer graph. We will not give an agent a master login. We will not let marketing texts fire on a vehicle that is in progress. We will not pretend a custom field named “RO number” is a relationship if nobody fills it in. If the mapping is dirty, the first build is cleaning the mapping, not generating copy.",
      },
      {
        type: "quote",
        text: "A lead in GHL is not a repair order in Tekmetric. Connecting them is a mapping job, not a new CRM.",
      },
      {
        type: "h2",
        text: "Shopmonkey, AutoLeap, Mitchell 1",
      },
      {
        type: "p",
        text: "The mapping is the same if the shop system is not Tekmetric. The CRM is still not the RO. The RO is still not the SMS thread. We confirm the door in the audit. If the vendor will not let us in, we say so. We will not paper over a missing API by asking the office to export a CSV every night. That is how the Sunday report got here.",
      },
      {
        type: "p",
        text: "If your office currently copies names from one tab to the other, that is enough of a stall to bring to the audit. Bring both screens. We will tell you whether the door is an automation, an agent, or a process you have to fix first.",
      },
    ],
  }),

  article({
    slug: "same-coordination-problem-in-hvac",
    category: "Trades",
    title: "HVAC companies have the same coordination problem auto shops do",
    description:
      "HVAC, plumbing, and other trades have the same leftover work auto shops do: dispatch, estimates, missed calls, ads versus jobs. Named as a pattern, not a fake case study.",
    excerpt:
      "ServiceTitan, Jobber, FieldEdge. Estimates sitting, missed calls at lunch, ads that never became a job. Same stall. We have not published an HVAC case study.",
    author: "McGuire",
    date: "September 2026",
    dateIso: "2026-09-09",
    updatedIso: "2026-09-09",
    industry: "hvac",
    related: [
      "ai-agents-vs-automations",
      "how-an-ai-operations-audit-works",
      "missed-calls-while-the-drive-is-slammed",
    ],
    faqs: [
      {
        q: "Have you installed this inside an HVAC company?",
        a: "We have not published an HVAC case study. The stall is the same coordination problem we installed against in automotive. The audit is where we find out whether your stack and leftover work justify a build.",
      },
      {
        q: "Do you replace ServiceTitan or Jobber?",
        a: "No. Those stay the system of record. Agents watch leftover work across dispatch, CRM, ads, and the books.",
      },
      {
        q: "Is HVAC just a copy of the auto shop playbook?",
        a: "No. Memberships, dispatch windows, and seasonal surge are different jobs. The pattern (software knows, people still chase) is the same.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "If you run HVAC, plumbing, electrical, or another field trade, the automotive pages on this site can look like they are for someone else. They are not, structurally. You already have dispatch software. You already have a CRM or you are using the dispatch software as a CRM. You already have Google Ads, a phone tracker, and QuickBooks. None of them is assigned to notice that an estimate sat for four days, that a membership renewal died in a CSV, or that Saturday’s missed calls never got a callback. That is the same coordination problem. We are not going to invent an HVAC logo and pretend it is a case study.",
      },
      {
        type: "p",
        text: "The Bureau of Labor Statistics tracks heating, air conditioning, and refrigeration mechanics and installers as a large U.S. occupation with work that is seasonal, on-site, and interruption-heavy, the same shape as the drive at an auto shop. ServiceTitan, Jobber, Housecall Pro, FieldEdge, and Successware are the systems of record we see named on intake forms. We confirm access in the audit. Named tools on this page are examples, not a certified list.",
      },
      {
        type: "h2",
        text: "What looks the same",
      },
      {
        type: "p",
        text: "Unanswered estimates. Missed calls while the board is slammed. Ads spend that never becomes a job in the field software. An owner report rebuilt from five dashboards. A CRM that “watches” opportunities and does not follow them. After-hours messages on Google Business Profile. Review requests that depend on a technician remembering. These are not automotive stalls. They are service-business stalls. Automotive is where we have a published install (Detail Driven, Jackson Hole, four shop types) so we write from that. HVAC readers should steal the pattern and ignore the car.",
      },
      {
        type: "ul",
        items: [
          "Estimate follow-up that does not depend on the CSR being free.",
          "Missed-call queues from CallRail or the phone system you already have.",
          "Dispatch exceptions: jobs that did not get a customer update after the window.",
          "Memberships and tune-up reminders that died in a list.",
          "Spend versus jobs that actually booked, not versus platform conversions.",
        ],
      },
      {
        type: "h2",
        text: "What is actually different",
      },
      {
        type: "p",
        text: "Seasonality. A shop’s brake week is not an HVAC heat wave. Memberships and service agreements are a first-class object in many HVAC companies and an afterthought in most independent repair shops. Dispatch windows and parts trucks are a logistics problem auto shops only rhyme with. Replacement versus repair is a sales conversation with a different dollar scale than a declined brake line. We will not copy the automotive agent list onto an HVAC tenant and call it done. The audit marks the jobs again.",
      },
      {
        type: "p",
        text: "Collision had CCC EMS as a hard constraint. HVAC will have its own. Some ServiceTitan tenants can get us in. Some Jobber accounts are cleaner than they look. Some companies are still on a spreadsheet plus a texting app. If the leftover work is real and the door is not, we say so. We did not scrape CCC. We will not scrape you either.",
      },
      {
        type: "h2",
        text: "How the audit treats a trade we have not published",
      },
      {
        type: "p",
        text: "Same three steps. Apply. Walk the work for thirty minutes. Leave with an opportunity map. We will not quote a price from the form. We will not tell you we have ten HVAC case studies. We will tell you whether the stall is an automation, an agent, or a person you need to hire. You can walk away with the map. That is still useful. If we think we can help, we will show you a first deployment of one or two paths, and a dashboard in the same build, on the software you already run.",
      },
      {
        type: "quote",
        text: "We have not published an HVAC case study. The stall is the same. The audit is where we find out if a build is justified.",
      },
      {
        type: "h2",
        text: "Plumbing, electrical, and the rest of the truck",
      },
      {
        type: "p",
        text: "The same paragraph applies. Jobber, ServiceTitan, AccuLynx, PestPac, examples, not a certified list. We have a published automotive install and we write from it. We will not invent a roofing case study to make a page feel complete. If your leftover work is estimates, missed calls, ads versus jobs, and a Sunday report, you are in the right library. The industry field on the form is how we show up to the walkthrough speaking your software’s names.",
      },
      {
        type: "p",
        text: "If you want the automotive-shaped conversation for a field trade, start with the general audit and say HVAC (or plumbing, or electrical) in the industry field. Bring the dispatch screen, the CRM, and the ads account. We will look at leftover work, not at a template for a different trade.",
      },
    ],
  }),
];

export const BLOG_POSTS = ARTICLES.map((a) => ({
  slug: a.slug,
  category: a.category,
  title: a.title,
  author: a.author,
  minutes: a.minutes,
  date: a.date,
  excerpt: a.excerpt,
}));

const BY_SLUG = new Map(ARTICLES.map((a) => [a.slug, a]));

export function articleBySlug(slug: string): Article | null {
  return BY_SLUG.get(slug) ?? null;
}

export function relatedArticles(article: Article): Article[] {
  return article.related.map((s) => BY_SLUG.get(s)).filter((a): a is Article => Boolean(a));
}

export function articlesByCategory(): { category: ArticleCategory; title: string; blurb: string; posts: Article[] }[] {
  return ARTICLE_CATEGORY_ORDER.map((category) => ({
    category,
    title: ARTICLE_CATEGORY_TITLE[category],
    blurb: ARTICLE_CATEGORY_BLURB[category],
    posts: ARTICLES.filter((a) => a.category === category),
  })).filter((g) => g.posts.length > 0);
}

export function articleWordCount(article: Article): number {
  const body = wordsIn(article.blocks);
  const faq = article.faqs.reduce((n, f) => n + f.q.split(/\s+/).length + f.a.split(/\s+/).length, 0);
  return body + faq;
}
