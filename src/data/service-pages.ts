export type ExampleStory = {
  kicker: string;
  title: string;
  leftover: string;
  install: string;
  why: string;
};

export type NumberedItem = {
  title: string;
  body: string;
};

export type Qa = { q: string; a: string };

export const DETAIL_DRIVEN_PROOF = {
  kicker: "Named deployment",
  title: "Detail Driven · Jackson Hole",
  body: "Four shop types (mechanical, collision, detailing, and glass) already ran Tekmetric, CCC ONE, HighLevel, QuickBooks, ads, and Slack. None of them shared a picture. We did not replace those systems. We installed collectors, agents on leftover work, and one secure operator dashboard in the same build. Dedicated Linux hardware on site. Hybrid local and cloud inference. A person still owns the customer.",
  href: "/case-studies/detail-driven",
  facts: [
    "Tekmetric stays the repair system of record",
    "CCC ONE stays the collision estimating system",
    "Daily reporting automated",
    "Follow-up, monitoring, and reporting installed as jobs",
  ],
} as const;

export const AGENTS_PAGE = {
  how: [
    {
      title: "Write the job first",
      body: "One workflow. One definition of done. One person who owns the exception. “Watch aging estimates and draft the next follow-up” is a job. “Do AI” is not. If we cannot write it in a sentence a new hire would understand, we do not build it.",
    },
    {
      title: "Give it only the systems it needs",
      body: "Scoped credentials. Least privilege. The estimate agent reads the FSM and the CRM. It does not get the books, the ads account, or a master login. Availability is confirmed in the audit, named tools are examples, not a promise.",
    },
    {
      title: "Set what it may do without a person",
      body: "Draft a message. Log a note. Assemble a report. Alert Slack. Sending, promising, discounting, and anything that spends money stay behind approval until the path is trusted. Permissions are a design choice, not a later toggle.",
    },
    {
      title: "Test against real files",
      body: "We run the path on actual stalled ROs, quiet collision files, and aged quotes, not a vendor demo tenant. Evaluations check that the draft sounds like the company, that it does not invent a promise, and that it hands off when the file is messy.",
    },
    {
      title: "Give it an off switch",
      body: "Logs, a kill for that path, and a person who can take the work back. If a vendor ships a breaking API change, managed operations is how the path stays alive. If the business changes the membership product, we change the job, we do not leave a zombie agent running last year’s rules.",
    },
  ] satisfies NumberedItem[],
  why: [
    {
      title: "ChatGPT waits for a prompt",
      body: "The leftover work happens when nobody is looking. An aging HVAC quote, a skip-stop on a pest route, a quiet collision file, those do not type themselves into a chat window. An agent watches the workflow it was hired for. A chatbot answers when someone remembers to ask.",
    },
    {
      title: "Zapier is the wrong tool for leftover work",
      body: "If-this-then-that is excellent when the trigger is clean and the action is the same every time. Aging estimates need the last note, the job type, whether the customer already said no, and a judgment about whether to ping them. That is context plus a permission, not a zap.",
    },
    {
      title: "A pack of forty agents is a science fair",
      body: "One path that watches unsold installs beats a wall of green lights. We start with the leftover that costs the most (usually follow-up or the morning report) and add the next job when the first one is trusted. Your team still keeps pricing judgment, angry customers, and anything you would not hand a new hire on day one.",
    },
  ] satisfies NumberedItem[],
  examples: [
    {
      kicker: "Detail Driven · repair",
      title: "The RO sat open. The advisor was on the drive.",
      leftover:
        "Tekmetric already knew the ticket was aging and the customer had not had an update. The advisor was in a parts argument. The owner rebuilt the morning report from five logins. Follow-up depended on who remembered.",
      install:
        "An agent watches open repair orders. No approval and no customer update past the window becomes a drafted text and a line on the morning board. A person still sends it. Tekmetric stays the system of record.",
      why: "The software already had the stall. Hiring another coordinator to refresh the board is how most shops “solve” this. Watching the leftover is cheaper than adding a body, and it does not replace the advisor.",
    },
    {
      kicker: "Example leftover · HVAC",
      title: "The system quote left ServiceTitan and never came back.",
      leftover:
        "A replacement estimate is sitting past the follow-up window. The salesperson is on installs. Membership visits that should have pulled themselves are still on a spreadsheet. July volume buried the callbacks.",
      install:
        "First path is almost always unsold estimates: age the quote, pull context from the job file, put a queue in front of the salesperson instead of a scavenger hunt. Memberships and callbacks are the next jobs, not the first week.",
      why: "HVAC companies do not lose installs to the competitor who bid lower. They lose them because nobody owned the follow-up. We do not replace ServiceTitan. We put an agent on the leftover between the estimate and the booked install.",
    },
    {
      kicker: "Example leftover · pest control",
      title: "The route looked full. The skips still walked.",
      leftover:
        "A callback ate three houses. Cancelled accounts sat in PestPac until someone exported a list. Renewals lived in a spreadsheet the owner opened on Sundays. The route was “full” and the recurring base was quietly shrinking.",
      install:
        "An agent watches skip-stops, cancellations, and lapsed renewals against the route software you already run. The office gets a list of houses that need a person, not a reminder to “check the board.”",
      why: "Pest is a retention business pretending it is a routing business. Optimizing the truck does not bring back a cancelled quarterly. The leftover is the account, not the drive time.",
    },
    {
      kicker: "Example leftover · plumbing",
      title: "The emergency took the truck. The booked job never got a call.",
      leftover:
        "After-hours water heater. The tech took it. The original booked job slid. Voicemail from the overflow never became a dispatch. After-hours invoices waited until Monday because the person who codes them was not in.",
      install:
        "Missed-call recovery and bumped-job follow-up first. The agent drafts the “we had to move you” text and flags unbilled after-hours against dispatch and the books. A person still talks to the angry customer.",
      why: "Emergency work will always blow up a plumbing day. The failure is pretending the rest of the board will catch up by memory. We watch the leftover so the emergency does not erase the day.",
    },
  ] satisfies ExampleStory[],
  faqs: [
    {
      q: "Does an agent send messages to my customers on its own?",
      a: "Not until you say so. We default to draft-and-alert. Sending, promising, and anything that spends money stay behind a person until that path is trusted.",
    },
    {
      q: "How is this different from the AI inside ServiceTitan or Tekmetric?",
      a: "Platform AI is built for that vendor’s screen. The leftover work lives between systems, FSM, CRM, ads, inbox, books. Cortex agents are hired for those paths. They do not replace the software you already paid for.",
    },
    {
      q: "What if the agent is wrong?",
      a: "Approvals, logs, and a person in the loop on anything that matters. We treat errors as a design problem: tighten the path, add a check, or take that action back to a human.",
    },
  ] satisfies Qa[],
} as const;

export const IMPLEMENTATION_PAGE = {
  includes: [
    {
      kicker: "01",
      title: "Audit the leftover work",
      body: "Thirty minutes on how work actually moves, not a six-week discovery. Software stack, repetitive paths, follow-up that depends on memory, reporting rebuilt by hand, stalls the board already knows about. You leave with a ranked map: what is worth automating, what is not, and what a first deployment could look like. No obligation to build.",
    },
    {
      kicker: "02",
      title: "Design the architecture",
      body: "Which agents, which systems, what they may do without a person, what needs approval. Cloud, private hardware, or hybrid, chosen around the workload, not a vendor story. A secure dashboard is part of the same design, not a later upsell.",
    },
    {
      kicker: "03",
      title: "Connect and build",
      body: "Official APIs first. Then approved integrations, webhooks, and MCP where a vendor supports them. Controlled browser automation only when there is no usable API and the work still has to happen. Agents are built around the one or two paths we agreed, not a forty-agent pack.",
    },
    {
      kicker: "04",
      title: "Test, deploy, train",
      body: "Permissions, evaluations against real files, and the people who will work next to the agents. We do not flip a switch on Friday and disappear. Managed AI Operations is optional after the system is live, monitoring, connector upkeep, and improvements as the business changes.",
    },
  ],
  how: [
    {
      title: "Start with the audit, not a statement of work from a brochure",
      body: "We cannot price a serious build from a website form. The audit is how we see the stack, the leftover, and whether we can actually reach the systems. If we cannot help, we say so.",
    },
    {
      title: "Keep the systems of record",
      body: "ServiceTitan, Tekmetric, Jobber, AccuLynx, PestPac, QuickBooks, whatever you already run stays. We connect to it. We do not migrate you onto a Cortex database and hope your techs follow.",
    },
    {
      title: "Ship one or two paths, then the next",
      body: "Estimate follow-up and the daily operating summary beat a forty-agent fantasy. The first path has to be trusted by the people who still own the customer. Then we add the next job.",
    },
    {
      title: "Include the board in the same build",
      body: "Agents watch queues. The dashboard is how the owner sees exceptions, the numbers, and which system they came from, without rebuilding the morning from five logins. It is not a separate product.",
    },
    {
      title: "Leave a person on the work that needs a person",
      body: "Pricing on messy jobs. Angry customers. Anything you would not trust a new hire to do on day one without a manager. Capacity, not a replacement org chart.",
    },
  ] satisfies NumberedItem[],
  examples: [
    {
      kicker: "Detail Driven · implementation",
      title: "Four shop types. Four boards. One environment.",
      leftover:
        "Repair in Tekmetric. Collision in CCC ONE. Detailing and glass on their own boards, books, and ads. Someone still walked each board, chased declined work, and hoped the ads had booked cars.",
      install:
        "Collectors and bridges into the stack they already paid for. CCC through a local EMS export they already knew how to write, we do not scrape private databases. Agents on follow-up, monitoring, and reporting. One secure dashboard across operations, marketing, finance, and the shops. Dedicated Linux on site. Cloud when a job actually needs a stronger model.",
      why: "A single SaaS login cannot be the system of record for four different trades. The honest build is: keep the software each shop already runs, put agents on the leftover, and give the owner one picture in the morning.",
    },
    {
      kicker: "Example first path · HVAC",
      title: "Unsold installs before memberships, before a voice agent, before a rewrite.",
      leftover:
        "Replacement quotes aging in ServiceTitan. The salesperson is on installs. Memberships are a later problem. Callbacks are a later problem. The first leak is the estimate that nobody owned.",
      install:
        "Audit the quote-to-booked path. Connect to the FSM and CRM we can actually reach. Agent drafts follow-up from the job file. Salesperson gets a queue. Outcome is logged. Memberships and the morning report are the next scoped jobs, written down, not promised as a bundle.",
      why: "HVAC operators get sold “AI for the whole company.” The company does not have a whole-company problem on day one. It has an unsold-install problem. We implement that, then we talk about the rest.",
    },
    {
      kicker: "Example first path · roofing",
      title: "Storm files go cold in AccuLynx while production is on the roof.",
      leftover:
        "Leads, supplements, production, and collections are four stories. The storm window is short. Follow-up drowns first. Jobs that are done on the roof sit uncollected because the file is a scavenger hunt.",
      install:
        "First path is usually aged leads and quiet files, not a new CRM. Agent watches AccuLynx or JobNimbus for estimates past the window and jobs that are produced but not collected. A person still talks to the adjuster.",
      why: "Roofing software is already a project file. What it does not do is assign a human to the leftover when the crew is on a storm. We do not replace AccuLynx. We watch the file.",
    },
  ] satisfies ExampleStory[],
  faqs: [
    {
      q: "How long does a first implementation take?",
      a: "A first set of agents can land in weeks. A broader system takes longer. You see a scoped plan after the audit, not before. We will not quote a date from a homepage.",
    },
    {
      q: "Do you replace ServiceTitan, Tekmetric, or Jobber?",
      a: "No. Those stay the system of record. Cortex works across them. If a vendor will not give us a usable interface, we say so in the audit instead of pretending.",
    },
    {
      q: "What does it cost?",
      a: "Most clients begin with a defined implementation project, then optional Managed AI Operations. Range depends on the systems involved, number and complexity of workflows, infrastructure, and ongoing management. We scope after we have seen the work.",
    },
  ] satisfies Qa[],
} as const;

export const PRIVATE_PAGE = {
  how: [
    {
      title: "Classify the work, not the vendor",
      body: "Every job is one of three things: a rule (“RO older than three days, no note”), a small language job (draft the morning briefing), or a hard reasoning job (a messy email that needs a stronger model). Rules do not need a model. Small jobs can stay local. Hard jobs can go to the cloud.",
    },
    {
      title: "Put continuous work where the cost is stable",
      body: "Overnight watches and morning briefings run whether anyone is in the building. That is a bad fit for metered cloud inference if it is the same job every night. Dedicated hardware you control makes that cost predictable. Burst work (a hard customer email at 2pm) can still call a capable cloud model.",
    },
    {
      title: "Keep sensitive records closer to the shop when it matters",
      body: "Customer names, RO notes, collision files, invoices. Some operators do not want that leaving the building for a routine watch. Private or hybrid setups keep more of that stack on infrastructure they own. Details are scoped per deployment, we do not pretend every company needs a rack.",
    },
    {
      title: "Connect the same way we always connect",
      body: "APIs, approved integrations, webhooks. For Detail Driven, collision came through a local CCC ONE EMS export, files CCC already knows how to write. We do not scrape private databases to make a privacy story true.",
    },
  ] satisfies NumberedItem[],
  why: [
    {
      title: "Not every task needs the same model",
      body: "Sending every ticket to the largest cloud model is how you buy a surprising invoice and a privacy argument. Routing exists because the work is not all the same.",
    },
    {
      title: "Private hardware is not a personality",
      body: "A server room does not make the company serious. It is the right answer when privacy, continuous load, or cost say so. Plenty of first deployments start in the cloud. The audit says which.",
    },
    {
      title: "Hybrid is usually the practical answer",
      body: "Local for the overnight watch and the briefing. Cloud when a job needs more. Rules when AI is not needed at all. Designed around the workload, not around a model provider’s keynote.",
    },
  ] satisfies NumberedItem[],
  examples: [
    {
      kicker: "Detail Driven · infrastructure",
      title: "Dedicated Linux on site. Cloud when the job actually needs it.",
      leftover:
        "Four shop types, customer files, collision estimates, ads, and books. A nightly watch and a morning briefing that should not depend on whether a cloud region is having a week. Collision files the operator did not want treated like a public demo.",
      install:
        "Dedicated Linux hardware they control. Local models for the overnight watch and the morning briefing. Cloud models when a job needs more. CCC via a local EMS export. The dashboard runs on that same environment. We do not publish a photograph of the rack. The point is ownership.",
      why: "Routine inference does not have to leave the building. Burst reasoning can. That split is the whole private-AI argument, not “we are more secure because we said the word local.”",
    },
    {
      kicker: "When we tell you not to buy hardware",
      title: "A two-path follow-up agent does not need a rack.",
      leftover:
        "A single HVAC or plumbing company, first implementation, two workflows, no collision files, no multi-entity reporting. The leftover is real. The volume is not a 24/7 inference plant.",
      install:
        "Cloud to start. Same permissions, same logs, same off switch. If continuous load, privacy, or cost later say private hardware, we design it then, we do not sell you a box so the proposal looks heavier.",
      why: "Hardware is a workload decision. Selling it on day one to every operator is how consultancies pad a statement of work.",
    },
  ] satisfies ExampleStory[],
  faqs: [
    {
      q: "Do we need our own AI server?",
      a: "No. Many companies start in the cloud. A private server is an option when privacy, cost, or control make it the better fit. The audit says which.",
    },
    {
      q: "Does private mean nothing ever goes to the cloud?",
      a: "No. Hybrid is common. Routine jobs stay local. A hard reasoning job can still go to a capable cloud model. You decide what is allowed to leave.",
    },
    {
      q: "Is my company data used to train a public model?",
      a: "Agents only see the systems and records you approve. Private or hybrid setups keep more of the work on infrastructure you control. Training policy is scoped per deployment, we do not train a public model on your ROs as a default.",
    },
  ] satisfies Qa[],
} as const;

export const MANAGED_PAGE = {
  week: [
    {
      title: "Watch the runs, not a vanity dashboard",
      body: "Successful jobs, failures, latency, escalations. We care whether the estimate agent drafted, whether it handed off, and whether a connector 401’d at 2am, not whether a status page is green.",
    },
    {
      title: "Keep the connectors current",
      body: "Vendors ship API changes. ServiceTitan, Tekmetric, Google Ads, QuickBooks, all of them. Managed operations is how a Friday vendor update does not silently kill Monday’s follow-up.",
    },
    {
      title: "Evaluate the output against the standard you set",
      body: "Does the draft still sound like the company. Did it invent a promise. Did it skip a file it should have flagged. Evaluations are how drift shows up before a customer does.",
    },
    {
      title: "Fix incidents, then change the path",
      body: "Diagnose, restore, tighten. An error is a design problem: add a check, shrink the permission, or take that action back to a human. We do not “restart the bot” and call it done.",
    },
    {
      title: "Add the next job when the last one is trusted",
      body: "New membership product, second location, a reporting hole the owner just found. Continuous improvement is scoped to what is running, you do not pay for a forty-agent roadmap.",
    },
  ] satisfies NumberedItem[],
  why: [
    {
      title: "You still own the operation",
      body: "Your team keeps the decisions that require judgment. We keep the system current. This is extra capacity, not an outsourced general manager.",
    },
    {
      title: "Most service businesses do not need an AI department",
      body: "They need implementation and care. Hiring two engineers to babysit a follow-up agent and a morning report is how you light money on fire. We are that layer.",
    },
    {
      title: "You pay for what is in production",
      body: "Managed operations starts after a live deployment. Scope is the agents and workflows that are actually running, not a retainer for work we might someday do.",
    },
  ] satisfies NumberedItem[],
  examples: [
    {
      kicker: "Example incident",
      title: "The vendor shipped an API change on a Friday.",
      leftover:
        "The estimate agent stopped seeing new quotes. Without managed operations, that looks like “AI stopped working” on Monday, after a weekend of silence. The leftover work went back to whoever remembered.",
      install:
        "Monitoring flags failed runs and auth errors. We restore the connector, re-run the missed window, and check that drafts still match the standard. The salesperson sees a queue on Monday, not a postmortem.",
      why: "Connectors break. That is not a reason to avoid agents. It is the reason someone has to own them after install day.",
    },
    {
      kicker: "Example improvement · Detail Driven",
      title: "The morning board needed a collision view, not another login.",
      leftover:
        "Repair exceptions were already landing. Collision files still lived in CCC. Quiet estimates and uncollected finals were a second scavenger hunt.",
      install:
        "Same environment. Additional collector on the CCC EMS export they already produced. Collision exceptions on the same morning board. No new SaaS. No master login.",
      why: "Managed operations is how the system grows with the company (a new view, a tighter permission, a new path) without a second implementation circus.",
    },
    {
      kicker: "Example model change",
      title: "The briefing got sloppy after a model update.",
      leftover:
        "A cloud provider shipped a new default. The morning summary started hedging, padding, and missing the exceptions that actually needed a person.",
      install:
        "Evaluations caught the drift. We pin the model, tighten the prompt, and re-check against real files. The owner does not become the QA department.",
      why: "Models change under you. Treating “AI” as a one-time project is how briefings quietly get worse while everyone assumes the system is still doing the job.",
    },
  ] satisfies ExampleStory[],
  faqs: [
    {
      q: "Is this an agency retainer?",
      a: "No. It is closer to running infrastructure: monitoring, connector upkeep, evaluations, incident response, and small improvements. We are not booking your jobs or managing your ads account.",
    },
    {
      q: "Can we run it ourselves after implementation?",
      a: "You can. Most operators do not want to. If you have the people, we will say what they would have to own. If you do not, managed operations is the honest alternative to hoping nothing breaks.",
    },
    {
      q: "When does it start?",
      a: "After a live deployment. There is nothing to manage until a path is in production.",
    },
  ] satisfies Qa[],
} as const;

export const WORKSHOPS_PAGE = {
  agenda: [
    {
      title: "Agents versus chatbots",
      body: "What continuously watches a workflow versus what waits for a prompt. Why “we bought ChatGPT for the office” does not follow up an HVAC estimate at 9pm.",
    },
    {
      title: "What you can automate now",
      body: "Follow-up, monitoring, reporting, exceptions. The leftover work between FSM, CRM, ads, inbox, and books. We walk real files, not slides about the future.",
    },
    {
      title: "What should stay human",
      body: "Judgment, money, and customer promises. The work you would not hand a new hire on day one. If the room cannot name this, they are not ready to automate anything.",
    },
    {
      title: "Connecting the software you already run",
      body: "APIs, webhooks, approved integrations, and what to do when a vendor has no usable interface. Named tools are examples. We do not pretend every logo on a homepage is a certified connector.",
    },
    {
      title: "Local versus cloud",
      body: "When work should stay on hardware you control, when a cloud model is the right tool, and when a rule beats both. Hardware is a workload decision, not a flex.",
    },
    {
      title: "Security and permissions",
      body: "Least privilege, approval, logs, who owns the credentials, and the off switch. If you cannot kill a path, you do not ship the path.",
    },
    {
      title: "A real deployment",
      body: "Detail Driven in Jackson Hole: four shop types, Tekmetric, CCC ONE, dedicated local hardware, hybrid inference, one operator dashboard. What we can stand behind, and what we will not invent numbers for.",
    },
    {
      title: "The first ninety days",
      body: "What a practical sequence looks like after the room leaves: audit, one or two paths, permissions, the people who will work next to the agents. Not a forty-agent roadmap.",
    },
  ],
  how: [
    {
      title: "It is a working session, not a product pitch",
      body: "We will not spend the hour on a Cortex demo reel. The goal is that the room leaves knowing what is worth automating, what is not, and what the first ninety days could look like inside their software.",
    },
    {
      title: "We speak to operators",
      body: "Owners, GMs, operations leads. Trade associations, franchise groups, PE portfolios, chambers, peer groups, software user groups. Not an IT conference, not a prompt-engineering seminar.",
    },
    {
      title: "Format follows the room",
      body: "Ninety minutes for a peer group. A half day when the portfolio wants the architecture. On-site or remote. We confirm fit, timing, and whether we are the right people before anyone blocks a calendar.",
    },
    {
      title: "They leave with a map, not a recap deck",
      body: "What leftover work to look at first. What to leave human. Which systems have to be reachable. A first-path sketch. If Cortex is the wrong builder, we will say that too.",
    },
  ] satisfies NumberedItem[],
  examples: [
    {
      kicker: "What we walk in the room",
      title: "Detail Driven, end to end, without fake ROI.",
      leftover:
        "Leadership rooms ask for proof. Most AI talks show a chatbot and a hockey-stick slide. Operators can smell it. We walk the actual leftover: stalled ROs, quiet collision files, ads spending with no operator, a morning rebuilt from five logins.",
      install:
        "Four shop types. Systems that stayed. Agents installed as jobs. Dedicated Linux. One dashboard. What we can stand behind today is on the case study, four shop types, hybrid inference, Tekmetric and CCC still the systems of record. No recovered-revenue number we cannot defend.",
      why: "A workshop that will not show a real file is a pitch. This is the file we will show. Everything else in the room is their leftover, named in their language.",
    },
    {
      kicker: "What a peer-group session is for",
      title: "Ten HVAC owners, one afternoon, no software to sell them that day.",
      leftover:
        "Every owner in the room has ServiceTitan or Jobber. Every one of them is still chasing estimates by memory. They have been pitched voice agents, chat widgets, and “AI CSRs.” None of that mapped the leftover.",
      install:
        "We put the unsold-install path on the table. Permissions. What stays human. What a thirty-minute audit would actually look at. They leave able to walk their own board on Monday. A few will apply for the audit. Most will at least stop buying chatbots.",
      why: "The workshop is useful even if nobody hires Cortex. That is the point. A pitch disguised as education is how this industry burned the last three acronyms.",
    },
  ] satisfies ExampleStory[],
} as const;
