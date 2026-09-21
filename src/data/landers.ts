import { BRAND } from "@/data/brand";

export type LanderPair = { title: string; body: string };
export type LanderLogo = { name: string; file: string };

export type Lander = {
  slug: string;
  eyebrow: string;
  noun: string;
  headline: string;
  headlineGold: string;
  seoTitle: string;
  seoDescription: string;
  subcopy: string;
  keepLine: string;
  chips: string[];
  stack: LanderLogo[];
  problemTitle: string;
  problems: LanderPair[];
  betweenTitle: string;
  betweenItems: string[];
  layerBody: string;
  agents: LanderPair[];
  auditBefore: string;
  auditDuring: string;
  auditAfter: string;
  proofMeta: string;
  proofBody: string;
  faqTitle: string;
  faqs: LanderPair[];
  finalTitle: string;
  vslSrc: string;
  vslPoster: string;
  vslCover: string;
  designed: boolean;
  vslLabel: string;
  isAutomotive: boolean;
};

const GHL: LanderLogo = { name: "GoHighLevel", file: "gohighlevel-mark.svg" };
const GOOGLE: LanderLogo = { name: "Google", file: "google.png" };
const QB: LanderLogo = { name: "QuickBooks", file: "quickbooks.svg" };
const ST: LanderLogo = { name: "ServiceTitan", file: "servicetitan.png" };
const JOBBER: LanderLogo = { name: "Jobber", file: "jobber.png" };
const HCP: LanderLogo = { name: "Housecall Pro", file: "housecallpro.png" };

const HOME_SRC = BRAND.homeServicesVslSrc;
const HOME_POSTER = BRAND.homeServicesVslPoster;

function cover(slug: string) {
  return `/images/cortex/covers/${slug}.jpg?v=10`;
}

function keep(tools: string) {
  return `${tools} You don't have to learn AI. We implement it in the software you already run. 30-minute walkthrough. No obligation to build.`;
}

export const LANDERS: Lander[] = [
  {
    slug: "automotive",
    eyebrow: "Automotive shops",
    noun: "shop",
    headline: "You don't have to learn how to use AI in your auto shop.",
    headlineGold: "See how we implement it across operations, marketing, and sales.",
    seoTitle: "AI for Auto Repair Shops | Free AI Operations Audit",
    seoDescription:
      "You don't need to learn AI. ChatGPT can't watch Tekmetric. See what agents implemented in your shop software could do with aging ROs, declined work, and missed calls, without replacing Tekmetric, Shopmonkey, your CRM, or your books.",
    subcopy:
      "Auto repair, collision, detailing, glass, tires. You don't have to learn AI. Agents we implement watch the leftover in the shop software you already run so follow-up isn’t whoever happens to be free.",
    keepLine: keep("Keep Tekmetric, Shopmonkey, your CRM, your phone system, and QuickBooks."),
    chips: ["Auto repair", "Collision", "Detailing", "Glass", "Tires"],
    stack: [
      { name: "Tekmetric", file: "tekmetric.png" },
      { name: "Shopmonkey", file: "shopmonkey.png" },
      { name: "AutoLeap", file: "autoleap.png" },
      GHL,
      GOOGLE,
      QB,
    ],
    problemTitle: "Tekmetric has the RO. Follow-up still lives with whoever is on the drive.",
    problems: [
      { title: "Shop management knows the RO", body: "Aging tickets, approvals, declined work. Someone still has to look." },
      { title: "The CRM knows the customer", body: "History sits in a tab. Follow-up waits until the advisor is free." },
      { title: "Google knows the lead source", body: "Ads run. Nobody checks spend against the cars that actually booked." },
      { title: "The books know what got paid", body: "A/R, hours, and the morning report get rebuilt by hand." },
    ],
    betweenTitle: "Not because one ticket is hard. Because missed calls, estimates, and the owner report pile up every week.",
    betweenItems: [
      "Answer the missed call",
      "Follow up on the estimate",
      "Check who hasn’t responded",
      "Update the CRM",
      "Pull the phone numbers",
      "Figure out what actually needs you",
    ],
    layerBody:
      "We don’t replace your CRM, shop system, phone, ads, or accounting software. You don't have to understand AI. We implement agents in that software so leftover work (follow-up, monitoring, reporting) doesn't wait on a ChatGPT tab.",
    agents: [
      {
        title: "Estimate follow-up",
        body: "An agent notices a $2,840 estimate sitting three days. It checks history, drafts the follow-up, sends or queues it for the advisor, and writes it back to the CRM.",
      },
      {
        title: "Missed calls",
        body: "Someone called while the drive was slammed. The agent logs it, drafts the callback, and flags it before that job goes down the street.",
      },
      {
        title: "Jobs that need you",
        body: "RO waiting on parts is fine. Customer quiet is fine. Approval stalled is not. The agent surfaces the exceptions, not the whole board.",
      },
      {
        title: "Daily owner report",
        body: "Hours, load, A/R, ads versus cars that booked. Waiting in the morning instead of being rebuilt on Sunday.",
      },
    ],
    auditBefore: "You tell us the shop type, software, and the queue that still depends on someone remembering.",
    auditDuring: "A 30-minute walkthrough of how ROs, estimates, calls, and the owner report actually move.",
    auditAfter:
      "A ranked map: follow-up, missed calls, reporting, high return, medium, low risk. What we’d build first. What we would not automate.",
    proofMeta: "Automotive. Jackson Hole, Wyoming. A multi-business automotive operation.",
    proofBody: "",
    faqTitle: "Questions from shop owners",
    faqs: [
      {
        title: "Do I have to replace Tekmetric, Shopmonkey, or my CRM?",
        body: "No. We connect to the systems you already run. The point is to make that software work harder, not add another login.",
      },
      {
        title: "Will this replace my advisors or writers?",
        body: "No. Agents watch, draft, and escalate. Money, promises, and messy judgment stay with your people. Sensitive sends can require approval.",
      },
      {
        title: "Is this only for general repair?",
        body: "No. Collision, detailing, glass, and tire shops have the same coordination problem, different software, same leftover work between it.",
      },
      {
        title: "Do you sell a pack of agents?",
        body: "No. We start with your shop, your software, your bottlenecks. The audit is how we find the first path worth building.",
      },
      {
        title: "What do I leave the audit with?",
        body: "A ranked map of where AI can realistically save time, recover estimates, catch missed calls, and give you visibility, plus what we would not automate.",
      },
    ],
    finalTitle: "You don't have to understand AI to find out what it could do inside your shop.",
    vslSrc: BRAND.automotiveVslSrc,
    vslPoster: BRAND.automotiveVslPoster,
    vslCover: cover("automotive"),
    designed: true,
    vslLabel: "Watch how this works in a shop",
    isAutomotive: true,
  },
  {
    slug: "hvac",
    eyebrow: "HVAC companies",
    noun: "company",
    headline: "You don't have to learn how to use AI in your HVAC company.",
    headlineGold: "See how we implement it across operations, marketing, and sales.",
    seoTitle: "AI for HVAC Companies | Free AI Operations Audit",
    seoDescription:
      "ChatGPT can't see unsold installs in ServiceTitan. See what agents implemented in your HVAC software could do with aging quotes, lapsed memberships, and callbacks, without replacing ServiceTitan, Jobber, your CRM, or your books.",
    subcopy:
      "Residential and commercial. Install, service, memberships. Agents watch aging quotes, visits that never pull themselves, and callbacks so peak season doesn’t bury the follow-up.",
    keepLine: keep("Keep ServiceTitan, Jobber, Housecall Pro, your CRM, and QuickBooks."),
    chips: ["Residential", "Commercial", "Install", "Service", "Memberships"],
    stack: [ST, JOBBER, HCP, GHL, GOOGLE, QB],
    problemTitle: "ServiceTitan has the job. Memberships, quotes, and callbacks still live with a person.",
    problems: [
      { title: "Estimates age in the CRM", body: "The quote went out. The next touch depends on a salesperson remembering." },
      { title: "Memberships do not pull their own visits", body: "You sold the agreement. The calendar still depends on a list." },
      { title: "Callbacks hide in the day", body: "They eat capacity and never show up as a cost of the original job." },
      { title: "July is a different company", body: "Capacity, overtime, and which jobs actually came from ads, you find out after the tech is still on a roof at 7pm." },
    ],
    betweenTitle: "Not because one quote is hard. Because unsold installs, memberships, and callbacks pile up every week.",
    betweenItems: [
      "Follow up on the unsold install",
      "Schedule the membership visit that’s due",
      "Catch the missed after-hours call",
      "Flag the callback before it eats a truck",
      "Reconcile ads against booked jobs",
      "Build the morning capacity picture",
    ],
    layerBody:
      "We don’t replace ServiceTitan, Jobber, your CRM, phone, ads, or accounting software. You don't have to understand AI. We implement agents in that software so leftover work (follow-up, monitoring, reporting) doesn't wait on a ChatGPT tab.",
    agents: [
      {
        title: "Estimate follow-up",
        body: "An unsold system quote sitting three days gets a next touch, history checked, draft written, queued for the rep, written back to the CRM.",
      },
      {
        title: "Membership watch",
        body: "Agreements that are due, lapsed, or unscheduled get flagged so visits pull themselves instead of living in a spreadsheet.",
      },
      {
        title: "Callback and capacity",
        body: "Exceptions on the board, not in a group chat. Overbook warnings before a tech is still on a roof at 7pm.",
      },
      {
        title: "Owner briefing",
        body: "What sold, what stalled, what called back, ads versus jobs that booked. Waiting in the morning.",
      },
    ],
    auditBefore: "You tell us residential vs commercial mix, the software on the trucks, and the queue that still depends on memory.",
    auditDuring: "A 30-minute walkthrough of how estimates, memberships, dispatch, and callbacks actually move.",
    auditAfter:
      "A ranked map: follow-up, memberships, missed calls, reporting, high return, medium, low risk. What we’d build first. What we would not automate.",
    proofMeta: "Published so you can see the shape, not as a fake HVAC case study.",
    proofBody:
      "We only publish work we have actually installed. The automotive deployment is on the site so you can see how Cortex gets put in, not as a made-up HVAC case study. HVAC companies run ServiceTitan, Jobber, or Housecall Pro. The leftover work is unsold installs, membership visits that never pull themselves, and a morning report that still depends on someone remembering.",
    faqTitle: "Questions from HVAC owners",
    faqs: [
      {
        title: "Do I have to replace ServiceTitan, Jobber, or my CRM?",
        body: "No. We connect to the systems you already run. The point is to make that software work harder, not add another login.",
      },
      {
        title: "Will this replace my CSRs or salespeople?",
        body: "No. Agents watch, draft, and escalate. Money, promises, and messy judgment stay with your people. Sensitive sends can require approval.",
      },
      {
        title: "Does this work on memberships, not just installs?",
        body: "Yes. Recurring visits, lapsed agreements, and callbacks are the same coordination problem as unsold estimates, different objects in the same software.",
      },
      {
        title: "Do you sell a pack of agents?",
        body: "No. We start with your company, your software, your bottlenecks. The audit is how we find the first path worth building.",
      },
      {
        title: "What do I leave the audit with?",
        body: "A ranked map of where AI can realistically recover estimates, pull memberships, catch missed calls, and give you visibility, plus what we would not automate.",
      },
    ],
    finalTitle: "You don't have to understand AI to find out what it could do inside your HVAC company.",
    vslSrc: HOME_SRC,
    vslPoster: HOME_POSTER,
    vslCover: cover("hvac"),
    designed: true,
    vslLabel: "Watch how this works in an HVAC company",
    isAutomotive: false,
  },
  {
    slug: "plumbing",
    eyebrow: "Plumbing companies",
    noun: "company",
    headline: "You don't have to learn how to use AI in your plumbing company.",
    headlineGold: "See how we implement it across operations, marketing, and sales.",
    seoTitle: "AI for Plumbing Companies | Free AI Operations Audit",
    seoDescription:
      "ChatGPT won't answer the missed plumbing call. See what agents implemented in your dispatch software could do with voicemail, bumped booked work, and unbilled after-hours, without replacing ServiceTitan, Jobber, your CRM, or your books.",
    subcopy:
      "Drain, water heater, repipe, emergency, service. Agents watch missed calls, bumped water heaters, and Monday invoicing so the job that took the truck doesn’t erase the rest of the day.",
    keepLine: keep("Keep ServiceTitan, Jobber, Housecall Pro, your CRM, and QuickBooks."),
    chips: ["Drain", "Water heater", "Repipe", "Emergency", "Service"],
    stack: [ST, JOBBER, HCP, GHL, GOOGLE, QB],
    problemTitle: "The board blew up. Missed calls, bumped water heaters, and unbilled after-hours still sit on your phone.",
    problems: [
      { title: "Missed calls are lost revenue", body: "Someone was under a sink. The voicemail sits. The lead called the next company." },
      { title: "Booked work gets bumped in silence", body: "The burst pipe took the truck. The water-heater customer finds out in the driveway." },
      { title: "After-hours invoicing is a Monday pile", body: "The work happened. The file did not." },
      { title: "The owner is still the dispatcher", body: "Every exception (emergency, bump, unbilled job) hits one phone." },
    ],
    betweenTitle: "Not because one leak is hard. Because missed calls, bumps, and after-hours invoices pile up every week.",
    betweenItems: [
      "Call back the missed emergency",
      "Tell the bumped water-heater customer",
      "Invoice last night’s after-hours job",
      "Follow up on the repipe estimate",
      "Flag memberships and reminders due",
      "Build the Monday picture before 7am",
    ],
    layerBody:
      "We don’t replace your field software, CRM, phone, ads, or books. You don't have to understand AI. We implement agents in that software so leftover work (follow-up, monitoring, reporting) doesn't wait on a ChatGPT tab.",
    agents: [
      {
        title: "Missed-call recovery",
        body: "A call while the tech is under a sink gets logged, drafted, and flagged before that lead books the next company.",
      },
      {
        title: "Board exceptions",
        body: "The burst pipe took the truck. The booked water heater still needs a call. Agents surface the bump, not the whole day.",
      },
      {
        title: "Follow-up and reactivation",
        body: "Aging quotes, membership due, old customers. A queue instead of a personality trait.",
      },
      {
        title: "Owner briefing",
        body: "What broke yesterday, what’s open today, what’s still unbilled. Waiting instead of rebuilt from the phone.",
      },
    ],
    auditBefore: "You tell us emergency vs booked mix, the software on the trucks, and which queue still lives on your phone.",
    auditDuring: "A 30-minute walkthrough of how calls, dispatch, estimates, and invoicing actually move.",
    auditAfter:
      "A ranked map: missed calls, bumped jobs, follow-up, unbilled work, high return, medium, low risk. What we’d build first. What we would not automate.",
    proofMeta: "Published so you can see the shape, not as a fake plumbing case study.",
    proofBody:
      "We only publish work we have actually installed. The automotive deployment is on the site so you can see how Cortex gets put in, not as a made-up plumbing case study. Plumbing companies run ServiceTitan or Jobber. The leftover work is missed emergencies, bumped booked jobs, and unbilled after-hours that wait until Monday.",
    faqTitle: "Questions from plumbing owners",
    faqs: [
      {
        title: "Do I have to replace ServiceTitan, Jobber, or my CRM?",
        body: "No. We connect to the systems you already run. The point is to make that software work harder, not add another login.",
      },
      {
        title: "Will this replace my CSRs or dispatcher?",
        body: "No. Agents watch, draft, and escalate. Money, promises, and messy judgment stay with your people. Sensitive sends can require approval.",
      },
      {
        title: "Can this keep up with emergency days?",
        body: "That’s the point. Emergency work blows up the board. You don't have to learn AI. Agents we implement watch the leftover (missed calls, bumped jobs, unbilled after-hours) so it doesn’t wait until Monday.",
      },
      {
        title: "Do you sell a pack of agents?",
        body: "No. We start with your company, your software, your bottlenecks. The audit is how we find the first path worth building.",
      },
      {
        title: "What do I leave the audit with?",
        body: "A ranked map of where AI can realistically catch missed calls, recover estimates, and give you visibility, plus what we would not automate.",
      },
    ],
    finalTitle: "You don't have to understand AI to find out what it could do inside your plumbing company.",
    vslSrc: HOME_SRC,
    vslPoster: HOME_POSTER,
    vslCover: cover("plumbing"),
    designed: true,
    vslLabel: "Watch how this works in a plumbing company",
    isAutomotive: false,
  },
  {
    slug: "electrical",
    eyebrow: "Electrical contractors",
    noun: "company",
    headline: "You don't have to learn how to use AI in your electrical company.",
    headlineGold: "See how we implement it across operations, marketing, and sales.",
    seoTitle: "AI for Electrical Contractors | Free AI Operations Audit",
    seoDescription:
      "You don't have to understand AI to get it on electrical bids. See what agents implemented in your software could do with aging estimates, permits, and verbal extras, without replacing ServiceTitan, Accubid, your CRM, or your books.",
    subcopy:
      "Service, panel, lighting, generator, bid work. Agents watch stalled bids, inspection dates, and extras that were yes on site so they hit the file before they hit the margin.",
    keepLine: keep("Keep ServiceTitan, Jobber, Accubid, your CRM, and QuickBooks."),
    chips: ["Service", "Panel", "Lighting", "Generator", "Bid work"],
    stack: [ST, JOBBER, { name: "Accubid", file: "accubid.png" }, GHL, GOOGLE, QB],
    problemTitle: "The drawings are in a folder. Permits, verbal extras, and unbilled work still live in email.",
    problems: [
      { title: "Estimates wait on one person", body: "When they are out, the pipeline freezes. Follow-up is whatever they remember." },
      { title: "Permit status is tribal", body: "It lives in an email. The crew finds out on the driveway." },
      { title: "Change orders are verbal", body: "The customer said yes. Billing is an argument later." },
      { title: "No single job file", body: "Drawings, emails, and photos are scattered." },
    ],
    betweenTitle: "Not because one panel is hard. Because bids, permits, and verbal extras pile up every week.",
    betweenItems: [
      "Follow up on the aging bid",
      "Check the permit before the crew rolls",
      "Capture the verbal extra",
      "Match the takeoff to the truck",
      "Close the photos into the job file",
      "See what’s still unbilled",
    ],
    layerBody:
      "We don’t replace your field software, estimating tools, CRM, or books. You don't have to understand AI. We implement agents in that software so leftover work (follow-up, monitoring, reporting) doesn't wait on a ChatGPT tab.",
    agents: [
      {
        title: "Estimate queue",
        body: "Aging bids get a next touch instead of sitting until the estimator is back. Won/lost hygiene stays in the file.",
      },
      {
        title: "Permit and inspection watch",
        body: "Dates and holds on the job, not in a thread. The crew shouldn’t find out on the driveway.",
      },
      {
        title: "Change-order capture",
        body: "Verbal extras get a next action before the work ships. Approve drafts, file complete.",
      },
      {
        title: "Job-file hygiene",
        body: "Missing photos, open materials, unbilled extras. An owner summary instead of a scavenger hunt.",
      },
    ],
    auditBefore: "You tell us service vs bid mix, estimating tools, and which file still lives in email.",
    auditDuring: "A 30-minute walkthrough of how bids, permits, change orders, and closeout actually move.",
    auditAfter:
      "A ranked map: bid follow-up, permits, change orders, unbilled extras, high return, medium, low risk. What we’d build first. What we would not automate.",
    proofMeta: "Published so you can see the shape, not as a fake electrical case study.",
    proofBody:
      "We only publish work we have actually installed. The automotive deployment is on the site so you can see how Cortex gets put in, not as a made-up electrical case study. Electrical companies add Accubid and permits on top of the field stack. The leftover work is aging bids, driveway surprises on inspection day, and extras that were yes on site and missing from the invoice.",
    faqTitle: "Questions from electrical owners",
    faqs: [
      {
        title: "Do I have to replace ServiceTitan, Accubid, or my CRM?",
        body: "No. We connect to the systems you already run. The point is to make that software work harder, not add another login.",
      },
      {
        title: "Will this replace my estimators or project managers?",
        body: "No. Agents watch, draft, and escalate. Money, promises, and messy judgment stay with your people. Sensitive sends can require approval.",
      },
      {
        title: "We do more bid work than service. Does that matter?",
        body: "No. Bid-heavy shops have the same leftover work (aging quotes, permits, change orders) just sitting in different software.",
      },
      {
        title: "Do you sell a pack of agents?",
        body: "No. We start with your company, your software, your bottlenecks. The audit is how we find the first path worth building.",
      },
      {
        title: "What do I leave the audit with?",
        body: "A ranked map of where AI can realistically recover bids, catch file gaps, and give you visibility, plus what we would not automate.",
      },
    ],
    finalTitle: "You don't have to understand AI to find out what it could do inside your electrical company.",
    vslSrc: HOME_SRC,
    vslPoster: HOME_POSTER,
    vslCover: cover("electrical"),
    designed: true,
    vslLabel: "Watch how this works in an electrical company",
    isAutomotive: false,
  },
  {
    slug: "roofing",
    eyebrow: "Roofing companies",
    noun: "company",
    headline: "You don't have to learn how to use AI in your roofing company.",
    headlineGold: "See how we implement it across operations, marketing, and sales.",
    seoTitle: "AI for Roofing Companies | Free AI Operations Audit",
    seoDescription:
      "ChatGPT doesn't live in AccuLynx. See what agents implemented in your roofing software could do with aged leads, supplements, and uncollected roofs, without replacing AccuLynx, JobNimbus, your CRM, or your books.",
    subcopy:
      "Storm, retail, insurance, commercial, repair. Agents watch aged leads, supplement status, and jobs that are done on the roof but not collected.",
    keepLine: keep("Keep AccuLynx, JobNimbus, Leap, Hover, your CRM, and QuickBooks."),
    chips: ["Storm", "Retail", "Insurance", "Commercial", "Repair"],
    stack: [
      { name: "AccuLynx", file: "acculynx.png" },
      { name: "JobNimbus", file: "jobnimbus.png" },
      { name: "Leap", file: "leap.png" },
      { name: "Hover", file: "hover.png" },
      GHL,
      QB,
    ],
    problemTitle: "AccuLynx has the lead. Supplements, production, and collections still live in inboxes.",
    problems: [
      { title: "Storm leads have no next action", body: "The calendar is full. Nobody can say which jobs are funded, waiting, or dead." },
      { title: "Insurance is a second sales process", body: "Supplements live in inboxes. Production starts before the money is real." },
      { title: "Production status is a group chat", body: "Tear-off, dry-in, final. The office finds out from a photo." },
      { title: "Collections lag the roof", body: "The job looks done. The file is not." },
    ],
    betweenTitle: "Not because one roof is hard. Because aged leads, supplements, and uncollected jobs pile up every week.",
    betweenItems: [
      "Touch the aged storm lead",
      "Check supplement status",
      "Confirm the job is actually funded",
      "Update production stage",
      "Ask for the final when the roof is done",
      "See ads against jobs that funded",
    ],
    layerBody:
      "We don’t replace AccuLynx, JobNimbus, Hover, your CRM, or your books. You don't have to understand AI. We implement agents in that software so leftover work (follow-up, monitoring, reporting) doesn't wait on a ChatGPT tab.",
    agents: [
      {
        title: "Lead and estimate watch",
        body: "Every opportunity ages in a queue. The next touch is drafted instead of forgotten when storm season hits.",
      },
      {
        title: "File status",
        body: "Adjuster, supplement, customer portion, funded vs produced. Missing docs get flagged before production starts.",
      },
      {
        title: "Production to collections",
        body: "Done on the roof is not done in the file. Stage gaps and final invoice flags, aged by storm.",
      },
      {
        title: "Demand watch",
        body: "Ads and canvassers checked against jobs that actually funded, not against a story in a meeting.",
      },
    ],
    auditBefore: "You tell us storm vs retail mix, the CRM you run, and which files still live in inboxes.",
    auditDuring: "A 30-minute walkthrough of how leads, insurance files, production, and collections actually move.",
    auditAfter:
      "A ranked map: aged leads, supplements, collections, reporting, high return, medium, low risk. What we’d build first. What we would not automate.",
    proofMeta: "Published so you can see the shape, not as a fake roofing case study.",
    proofBody:
      "We only publish work we have actually installed. The automotive deployment is on the site so you can see how Cortex gets put in, not as a made-up roofing case study. Roofing companies run AccuLynx, JobNimbus, Leap, or Hover. The leftover work is aged storm leads, supplements that never funded, and roofs that are done while the file is not.",
    faqTitle: "Questions from roofing owners",
    faqs: [
      {
        title: "Do I have to replace AccuLynx, JobNimbus, or Leap?",
        body: "No. We connect to the systems you already run. The point is to make that software work harder, not add another login.",
      },
      {
        title: "Will this replace my sales reps or production managers?",
        body: "No. Agents watch, draft, and escalate. Money, promises, and messy judgment stay with your people. Sensitive sends can require approval.",
      },
      {
        title: "We are a storm company. Is this only for retail?",
        body: "No. Storm files are the same coordination problem at a worse volume, aged leads, supplements, collections.",
      },
      {
        title: "Do you sell a pack of agents?",
        body: "No. We start with your company, your software, your bottlenecks. The audit is how we find the first path worth building.",
      },
      {
        title: "What do I leave the audit with?",
        body: "A ranked map of where AI can realistically recover leads, watch files, and give you visibility, plus what we would not automate.",
      },
    ],
    finalTitle: "You don't have to understand AI to find out what it could do inside your roofing company.",
    vslSrc: HOME_SRC,
    vslPoster: HOME_POSTER,
    vslCover: cover("roofing"),
    designed: true,
    vslLabel: "Watch how this works in a roofing company",
    isAutomotive: false,
  },
  {
    slug: "home-services",
    eyebrow: "Home service companies",
    noun: "company",
    headline: "You don't have to learn how to use AI in your home service company.",
    headlineGold: "See how we implement it across operations, marketing, and sales.",
    seoTitle: "AI for Home Service Companies | Free AI Operations Audit",
    seoDescription:
      "Using ChatGPT isn't AI in your dispatch. See what agents implemented in your home service software could do with inbox leads, dispatch by text, and unsent invoices, without replacing Jobber, Housecall Pro, your CRM, or your books.",
    subcopy:
      "Garage, lawn, restoration, multi-trade, cleaning. You don't have to learn AI. Agents we implement watch the leftover between the schedule and the group chat so the owner isn’t the integration.",
    keepLine: keep("Keep Jobber, Housecall Pro, ServiceTitan, your CRM, and QuickBooks."),
    chips: ["Garage", "Lawn", "Restoration", "Multi-trade", "Cleaning"],
    stack: [JOBBER, HCP, ST, GHL, GOOGLE, QB],
    problemTitle: "Jobber has the schedule. Leads, invoices, and the morning picture still live in a group chat.",
    problems: [
      { title: "Leads live in the inbox", body: "Someone will get to them. After the day." },
      { title: "Dispatch is a group chat", body: "Nothing is the system of record except the thread." },
      { title: "Invoicing lags completion", body: "Work is done. Cash waits." },
      { title: "No morning picture", body: "The owner rebuilds the day from memory." },
    ],
    betweenTitle: "Not because one job is hard. Because inbox leads, unsent invoices, and missed calls pile up every week.",
    betweenItems: [
      "Answer the lead in the inbox",
      "Tell the crew what actually booked",
      "Invoice the job that finished",
      "Ask for the review",
      "Catch the missed call",
      "See tomorrow before it starts",
    ],
    layerBody:
      "We don’t replace Jobber, Housecall Pro, your CRM, phone, or books. You don't have to understand AI. We implement agents in that software so leftover work (follow-up, monitoring, reporting) doesn't wait on a ChatGPT tab.",
    agents: [
      {
        title: "Lead follow-up",
        body: "Inbox and CRM get watched so a lead from this morning doesn’t wait until tonight.",
      },
      {
        title: "Dispatch exceptions",
        body: "The group chat is not the system of record. Agents flag jobs that moved and customers who don’t know.",
      },
      {
        title: "Invoice and review",
        body: "Finished work gets a next step, invoice, review ask, or a flag that cash is waiting.",
      },
      {
        title: "Owner briefing",
        body: "What booked, what finished, what’s unbilled, what called and got nothing. Off the owner’s phone.",
      },
    ],
    auditBefore: "You tell us the trades you run, the software you actually open, and which queue still lives on your phone.",
    auditDuring: "A 30-minute walkthrough of how leads, dispatch, jobs, and invoices actually move.",
    auditAfter:
      "A ranked map: follow-up, dispatch, invoicing, reporting, high return, medium, low risk. What we’d build first. What we would not automate.",
    proofMeta: "Published so you can see the shape, not as a fake home-services case study.",
    proofBody:
      "We only publish work we have actually installed. The automotive deployment is on the site so you can see how Cortex gets put in, not as a made-up home-services case study. Garage, lawn, restoration, and multi-trade companies run Jobber or Housecall Pro. The leftover work is inbox leads, dispatch by text, and invoices that wait until the owner remembers.",
    faqTitle: "Questions from operators",
    faqs: [
      {
        title: "Do I have to replace Jobber, Housecall Pro, or my CRM?",
        body: "No. We connect to the systems you already run. The point is to make that software work harder, not add another login.",
      },
      {
        title: "Will this replace my office person or me?",
        body: "No. Agents watch, draft, and escalate. Money, promises, and messy judgment stay with your people. Sensitive sends can require approval.",
      },
      {
        title: "We run a few trades, not one specialty. Does that matter?",
        body: "No. Garage, lawn, restoration, multi-trade, the leftover work between the software is the same.",
      },
      {
        title: "Do you sell a pack of agents?",
        body: "No. We start with your company, your software, your bottlenecks. The audit is how we find the first path worth building.",
      },
      {
        title: "What do I leave the audit with?",
        body: "A ranked map of where AI can realistically save time, recover leads, catch missed calls, and give you visibility, plus what we would not automate.",
      },
    ],
    finalTitle: "You don't have to understand AI to find out what it could do inside your company.",
    vslSrc: HOME_SRC,
    vslPoster: HOME_POSTER,
    vslCover: cover("home-services"),
    designed: true,
    vslLabel: "Watch how this works in a home service company",
    isAutomotive: false,
  },
  {
    slug: "pest-control",
    eyebrow: "Pest control companies",
    noun: "company",
    headline: "You don't have to learn how to use AI in your pest control company.",
    headlineGold: "See how we implement it across operations, marketing, and sales.",
    seoTitle: "AI for Pest Control Companies | Free AI Operations Audit",
    seoDescription:
      "ChatGPT can't see skips walking off the route. See what agents implemented in your pest software could do with skip-stops, cancelled accounts, and renewals, without replacing PestPac, FieldRoutes, your CRM, or your books.",
    subcopy:
      "Recurring, one-time, termite, commercial, wildlife. Agents watch skip-stops, cancelled accounts, and renewals so a callback doesn’t erase three houses and a year of service.",
    keepLine: keep("Keep PestPac, FieldRoutes, Jobber, your CRM, and QuickBooks."),
    chips: ["Recurring", "One-time", "Termite", "Commercial", "Wildlife"],
    stack: [
      { name: "PestPac", file: "pestpac.png" },
      { name: "FieldRoutes", file: "fieldroutes.png" },
      JOBBER,
      GHL,
      GOOGLE,
      QB,
    ],
    problemTitle: "PestPac has the route. Skips, cancelled accounts, and callbacks still live with a person.",
    problems: [
      { title: "Skip-stops get lost", body: "A callback blows up three stops. Nobody reschedules the skips." },
      { title: "Cancelled accounts go quiet", body: "No reactivation sequence. They just disappear." },
      { title: "Renewals depend on whoever remembers", body: "The customer finds out when the pests do." },
      { title: "Callbacks are not a cost", body: "They get handled as a favor." },
    ],
    betweenTitle: "Not because one stop is hard. Because skips, lapses, and callbacks pile up every week.",
    betweenItems: [
      "Reschedule the skipped stop",
      "Touch the cancelled account",
      "Flag the renewal before it lapses",
      "Log the callback as a cost",
      "Catch the missed one-time lead",
      "See which routes actually ran",
    ],
    layerBody:
      "We don’t replace PestPac, FieldRoutes, Jobber, your CRM, or your books. You don't have to understand AI. We implement agents in that software so leftover work (follow-up, monitoring, reporting) doesn't wait on a ChatGPT tab.",
    agents: [
      {
        title: "Route exceptions",
        body: "A callback blew up three stops. Agents flag the skips so they get rescheduled instead of forgotten.",
      },
      {
        title: "Renewals and lapses",
        body: "Recurring accounts that are due, quiet, or cancelled get a next action, not a hope that someone remembers.",
      },
      {
        title: "One-time follow-up",
        body: "Termite, wildlife, and one-time jobs age in a queue so the next touch isn’t a personality trait.",
      },
      {
        title: "Owner briefing",
        body: "Stops run, skips open, renewals due, callbacks that ate the day. Waiting in the morning.",
      },
    ],
    auditBefore: "You tell us recurring vs one-time mix, the routing software, and which accounts still depend on memory.",
    auditDuring: "A 30-minute walkthrough of how routes, renewals, callbacks, and leads actually move.",
    auditAfter:
      "A ranked map: skip-stops, renewals, missed calls, reporting, high return, medium, low risk. What we’d build first. What we would not automate.",
    proofMeta: "Published so you can see the shape, not as a fake pest-control case study.",
    proofBody:
      "We only publish work we have actually installed. The automotive deployment is on the site so you can see how Cortex gets put in, not as a made-up pest-control case study. Pest companies run PestPac or FieldRoutes. The leftover work is skip-stops, lapsed renewals, and cancelled accounts that go quiet until the ants come back.",
    faqTitle: "Questions from pest control owners",
    faqs: [
      {
        title: "Do I have to replace PestPac, FieldRoutes, or Jobber?",
        body: "No. We connect to the systems you already run. The point is to make that software work harder, not add another login.",
      },
      {
        title: "Will this replace my office or route managers?",
        body: "No. Agents watch, draft, and escalate. Money, promises, and messy judgment stay with your people. Sensitive sends can require approval.",
      },
      {
        title: "Is this only for recurring routes?",
        body: "No. Termite, wildlife, and one-time jobs have the same leftover work, different objects in the same software.",
      },
      {
        title: "Do you sell a pack of agents?",
        body: "No. We start with your company, your software, your bottlenecks. The audit is how we find the first path worth building.",
      },
      {
        title: "What do I leave the audit with?",
        body: "A ranked map of where AI can realistically catch skips, recover renewals, and give you visibility, plus what we would not automate.",
      },
    ],
    finalTitle: "You don't have to understand AI to find out what it could do inside your pest company.",
    vslSrc: HOME_SRC,
    vslPoster: HOME_POSTER,
    vslCover: cover("pest-control"),
    designed: true,
    vslLabel: "Watch how this works in a pest control company",
    isAutomotive: false,
  },
  {
    slug: "contracting",
    eyebrow: "Contracting firms",
    noun: "firm",
    headline: "You don't have to learn how to use AI in your contracting business.",
    headlineGold: "See how we implement it across operations, marketing, and sales.",
    seoTitle: "AI for Contracting Firms | Free AI Operations Audit",
    seoDescription:
      "You don't need to learn AI to get change orders out of the job file. See what agents implemented in your software could do with aging bids, verbal extras, and unpaid closeout, without replacing Buildertrend, Procore, your CRM, or your books.",
    subcopy:
      "Remodel, custom, light commercial, punch, closeout. Agents watch aging bids, extras that were yes on site, and punch so cash doesn’t wait on a scavenger hunt.",
    keepLine: keep("Keep Buildertrend, Procore, JobNimbus, your CRM, and QuickBooks."),
    chips: ["Remodel", "Custom", "Light commercial", "Punch", "Closeout"],
    stack: [
      { name: "Buildertrend", file: "buildertrend.png" },
      { name: "Procore", file: "procore.png" },
      { name: "JobNimbus", file: "jobnimbus.png" },
      GHL,
      GOOGLE,
      QB,
    ],
    problemTitle: "Buildertrend has the job. Change orders, punch, and closeout still live in email.",
    problems: [
      { title: "Bids age without a next step", body: "Follow-up is a personality trait." },
      { title: "Change orders are verbal", body: "Yes on site. Missing from the contract." },
      { title: "Closeout is a scavenger hunt", body: "Punch, warranties, final invoice. Cash waits." },
      { title: "The customer has an old date", body: "Weather moved the week. Nobody sent the update." },
    ],
    betweenTitle: "Not because one remodel is hard. Because aging bids, verbal extras, and closeout pile up every week.",
    betweenItems: [
      "Follow up on the aging bid",
      "Write the change order that was yes on site",
      "Chase the waiver the sub owes",
      "Send the schedule update",
      "Close punch before asking for final",
      "See which jobs are actually collectible",
    ],
    layerBody:
      "We don’t replace Buildertrend, Procore, JobNimbus, your CRM, or your books. You don't have to understand AI. We implement agents in that software so leftover work (follow-up, monitoring, reporting) doesn't wait on a ChatGPT tab.",
    agents: [
      {
        title: "Bid follow-up",
        body: "Aged estimates get a next touch instead of sitting until someone remembers who was supposed to call.",
      },
      {
        title: "Change-order capture",
        body: "Yes on site becomes a file, not a fight at the end. Drafts queued for the PM.",
      },
      {
        title: "Closeout watch",
        body: "Punch, warranties, waivers, final invoice. Cash shouldn’t wait on a scavenger hunt.",
      },
      {
        title: "Owner briefing",
        body: "Bids open, extras missing, jobs that look done but aren’t collected. Waiting in the morning.",
      },
    ],
    auditBefore: "You tell us remodel vs commercial mix, the job software, and which file still lives in email.",
    auditDuring: "A 30-minute walkthrough of how bids, change orders, subs, and closeout actually move.",
    auditAfter:
      "A ranked map: bid follow-up, change orders, closeout, reporting, high return, medium, low risk. What we’d build first. What we would not automate.",
    proofMeta: "Published so you can see the shape, not as a fake contracting case study.",
    proofBody:
      "We only publish work we have actually installed. The automotive deployment is on the site so you can see how Cortex gets put in, not as a made-up contracting case study. Remodel and light-commercial firms run Buildertrend, Procore, or JobNimbus. The leftover work is aging bids, extras that were yes on site, and closeout that still holds the final.",
    faqTitle: "Questions from contractors",
    faqs: [
      {
        title: "Do I have to replace Buildertrend, Procore, or JobNimbus?",
        body: "No. We connect to the systems you already run. The point is to make that software work harder, not add another login.",
      },
      {
        title: "Will this replace my PMs or estimators?",
        body: "No. Agents watch, draft, and escalate. Money, promises, and messy judgment stay with your people. Sensitive sends can require approval.",
      },
      {
        title: "We are remodel, not commercial. Does that matter?",
        body: "No. Remodel, custom, light commercial, the leftover work between the job file and the office is the same.",
      },
      {
        title: "Do you sell a pack of agents?",
        body: "No. We start with your firm, your software, your bottlenecks. The audit is how we find the first path worth building.",
      },
      {
        title: "What do I leave the audit with?",
        body: "A ranked map of where AI can realistically recover bids, catch file gaps, and give you visibility, plus what we would not automate.",
      },
    ],
    finalTitle: "You don't have to understand AI to find out what it could do inside your firm.",
    vslSrc: HOME_SRC,
    vslPoster: HOME_POSTER,
    vslCover: cover("contracting"),
    designed: true,
    vslLabel: "Watch how this works in a contracting firm",
    isAutomotive: false,
  },
  {
    slug: "smart-home",
    eyebrow: "Smart home firms",
    noun: "firm",
    headline: "You don't have to learn how to use AI in your smart home company.",
    headlineGold: "See how we implement it across operations, marketing, and sales.",
    seoTitle: "AI for Smart Home Integrators | Free AI Operations Audit",
    seoDescription:
      "ChatGPT doesn't know the house is finished and the file isn't. See what agents implemented in your software could do with stalled quotes, backorders, and unbilled extras, without replacing D-Tools, Jetbuilt, your CRM, or your books.",
    subcopy:
      "Residential, cinema, lighting, security, service. Agents watch surveys that never became quotes, extra cameras that never hit the invoice, and houses sitting on one programmer.",
    keepLine: keep("Keep D-Tools, Jetbuilt, ServiceTitan, Snap One, your CRM, and QuickBooks."),
    chips: ["Residential", "Cinema", "Lighting", "Security", "Service"],
    stack: [
      { name: "D-Tools", file: "dtools.png" },
      { name: "Jetbuilt", file: "jetbuilt.png" },
      ST,
      { name: "Snap One", file: "snapone.png" },
      GHL,
      QB,
    ],
    problemTitle: "D-Tools has the quote. Backorders, extras, and programming still live with one person.",
    problems: [
      { title: "Quotes sit after the survey", body: "The walkthrough was strong. The follow-up was not." },
      { title: "Equipment status is a vendor portal", body: "Someone has to check. They do, when they remember." },
      { title: "Programming is a black box", body: "One person can finish. When they are out, the job sits." },
      { title: "Change orders on site never hit the invoice", body: "Another camera. Same ticket." },
    ],
    betweenTitle: "Not because one room is hard. Because quotes, backorders, and unbilled extras pile up every week.",
    betweenItems: [
      "Follow up after the survey",
      "Check the backorder",
      "Flag the house waiting on programming",
      "Capture the extra camera",
      "Hand the service call a real history",
      "See which jobs look done but aren’t billed",
    ],
    layerBody:
      "We don’t replace D-Tools, Jetbuilt, ServiceTitan, Snap One, or your books. You don't have to understand AI. We implement agents in that software so leftover work (follow-up, monitoring, reporting) doesn't wait on a ChatGPT tab.",
    agents: [
      {
        title: "Quote follow-up",
        body: "Surveys that went well get a next touch before the homeowner cools off.",
      },
      {
        title: "Equipment watch",
        body: "Backorders and vendor portals get checked so the file doesn’t think you’re waiting on a switch that already arrived.",
      },
      {
        title: "Change-order capture",
        body: "Another camera on site becomes a line on the invoice, not a gift.",
      },
      {
        title: "Service history",
        body: "Passwords and last changes stop living with the last tech. The next call starts from the file.",
      },
    ],
    auditBefore: "You tell us residential vs commercial mix, D-Tools or Jetbuilt, and which jobs still live in a programmer’s head.",
    auditDuring: "A 30-minute walkthrough of how quotes, purchasing, installs, and service actually move.",
    auditAfter:
      "A ranked map: quote follow-up, equipment, change orders, service, high return, medium, low risk. What we’d build first. What we would not automate.",
    proofMeta: "Published so you can see the shape, not as a fake smart-home case study.",
    proofBody:
      "We only publish work we have actually installed. The automotive deployment is on the site so you can see how Cortex gets put in, not as a made-up smart-home case study. Integrators run D-Tools or Jetbuilt. The leftover work is surveys that never became quotes, houses waiting on programming, and extras that never hit the invoice.",
    faqTitle: "Questions from integrators",
    faqs: [
      {
        title: "Do I have to replace D-Tools, Jetbuilt, or ServiceTitan?",
        body: "No. We connect to the systems you already run. The point is to make that software work harder, not add another login.",
      },
      {
        title: "Will this replace my programmers or project managers?",
        body: "No. Agents watch, draft, and escalate. Money, promises, and messy judgment stay with your people. Sensitive sends can require approval.",
      },
      {
        title: "We do cinema and lighting, not just security. Does that matter?",
        body: "No. Different rooms, same leftover work between the quote, the order, and the file.",
      },
      {
        title: "Do you sell a pack of agents?",
        body: "No. We start with your firm, your software, your bottlenecks. The audit is how we find the first path worth building.",
      },
      {
        title: "What do I leave the audit with?",
        body: "A ranked map of where AI can realistically recover quotes, catch file gaps, and give you visibility, plus what we would not automate.",
      },
    ],
    finalTitle: "You don't have to understand AI to find out what it could do inside your firm.",
    vslSrc: HOME_SRC,
    vslPoster: HOME_POSTER,
    vslCover: cover("smart-home"),
    designed: true,
    vslLabel: "Watch how this works in a smart home firm",
    isAutomotive: false,
  },
  {
    slug: "windows",
    eyebrow: "Window & door companies",
    noun: "company",
    headline: "You don't have to learn how to use AI in your window and door company.",
    headlineGold: "See how we implement it across operations, marketing, and sales.",
    seoTitle: "AI for Window and Door Companies | Free AI Operations Audit",
    seoDescription:
      "You don't have to understand AI to stop finding out on install day. See what agents implemented in your software could do with sold measures, factory slips, and unsigned finals, without replacing JobNimbus, Hover, your CRM, or your books.",
    subcopy:
      "Vinyl, wood, entry doors, sunrooms, service. Agents watch sold measures, factory dates that slip with no call, and jobs that are installed but not collected.",
    keepLine: keep("Keep JobNimbus, Hover, Windowmaker, your CRM, and QuickBooks."),
    chips: ["Vinyl", "Wood", "Entry doors", "Sunrooms", "Service"],
    stack: [
      { name: "JobNimbus", file: "jobnimbus.png" },
      { name: "Hover", file: "hover.png" },
      { name: "Windowmaker", file: "windowmaker.png" },
      GHL,
      GOOGLE,
      QB,
    ],
    problemTitle: "The measure is sold. Factory dates, slips, and finals still live in a spreadsheet.",
    problems: [
      { title: "Measures do not become orders", body: "What was sold and what was ordered diverge. Install day is when you find out." },
      { title: "Factory dates are a rumor", body: "The office thinks six weeks. The vendor thinks nine. The customer has the first date." },
      { title: "Install days slip with no call", body: "Weather, a missing unit, a crew still on yesterday." },
      { title: "Finals sit after the install", body: "The job looks done. Collections is hunting a signature." },
    ],
    betweenTitle: "Not because one window is hard. Because measures, factory slips, and unsigned finals pile up every week.",
    betweenItems: [
      "Turn the measure into an order",
      "Check the factory date against what the customer has",
      "Call when install day slips",
      "Ask for the final after the last unit",
      "Route the leak to service, not the owner’s texts",
      "See which jobs are installed but not collected",
    ],
    layerBody:
      "We don’t replace JobNimbus, Hover, Windowmaker, your CRM, or your books. You don't have to understand AI. We implement agents in that software so leftover work (follow-up, monitoring, reporting) doesn't wait on a ChatGPT tab.",
    agents: [
      {
        title: "Quote and measure watch",
        body: "Sold work that hasn’t become an order gets flagged before install day is when you find out.",
      },
      {
        title: "Factory and schedule",
        body: "Office date, vendor date, customer date. Slips get a call instead of a surprise in the driveway.",
      },
      {
        title: "Finals and collections",
        body: "Installed is not collected. Signature and remaining balance get a next action.",
      },
      {
        title: "Service after install",
        body: "A leak or a bad seal stops being a text to the owner. It becomes a ticket with a history.",
      },
    ],
    auditBefore: "You tell us vinyl vs custom mix, the CRM and ordering tools, and which jobs still live in a spreadsheet.",
    auditDuring: "A 30-minute walkthrough of how leads, measures, factory dates, installs, and finals actually move.",
    auditAfter:
      "A ranked map: quote follow-up, factory slips, collections, service, high return, medium, low risk. What we’d build first. What we would not automate.",
    proofMeta: "Published so you can see the shape, not as a fake window-company case study.",
    proofBody:
      "We only publish work we have actually installed. The automotive deployment is on the site so you can see how Cortex gets put in, not as a made-up window-company case study. Window and door companies run JobNimbus, Hover, or Windowmaker. The leftover work is sold measures that never became orders, factory dates that slip with no call, and installs that are done while collections hunts a signature.",
    faqTitle: "Questions from window company owners",
    faqs: [
      {
        title: "Do I have to replace JobNimbus, Hover, or Windowmaker?",
        body: "No. We connect to the systems you already run. The point is to make that software work harder, not add another login.",
      },
      {
        title: "Will this replace my sales or production people?",
        body: "No. Agents watch, draft, and escalate. Money, promises, and messy judgment stay with your people. Sensitive sends can require approval.",
      },
      {
        title: "We sell doors and sunrooms too. Does that matter?",
        body: "No. Vinyl, wood, entry doors, sunrooms, measure, factory, install, final. Same leftover work between the software.",
      },
      {
        title: "Do you sell a pack of agents?",
        body: "No. We start with your company, your software, your bottlenecks. The audit is how we find the first path worth building.",
      },
      {
        title: "What do I leave the audit with?",
        body: "A ranked map of where AI can realistically recover quotes, catch slips, and give you visibility, plus what we would not automate.",
      },
    ],
    finalTitle: "You don't have to understand AI to find out what it could do inside your window company.",
    vslSrc: HOME_SRC,
    vslPoster: HOME_POSTER,
    vslCover: cover("windows"),
    designed: true,
    vslLabel: "Watch how this works in a window company",
    isAutomotive: false,
  },
];

const BY_SLUG = new Map(LANDERS.map((l) => [l.slug, l]));

export function landerBySlug(slug: string | undefined | null) {
  if (!slug) return undefined;
  return BY_SLUG.get(slug.toLowerCase());
}

export const LANDER_SLUGS = LANDERS.map((l) => l.slug);
