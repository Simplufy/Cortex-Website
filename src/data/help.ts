export type HelpLogo = { name: string; file: string };
export type HelpBeat = { title: string; body: string };

export type HelpTopic = {
  slug: string;
  href: string;
  group: string;
  name: string;
  blurb: string;
  headline: string;
  lede: string[];
  scene: string;
  logos: HelpLogo[];
  beats: HelpBeat[];
  aside: string;
};

function t(p: Omit<HelpTopic, "href">): HelpTopic {
  return { ...p, href: `/help/${p.slug}` };
}

const gmb: HelpLogo = { name: "Google Business Profile", file: "gmb.png" };
const google: HelpLogo = { name: "Google", file: "google.png" };
const jobber: HelpLogo = { name: "Jobber", file: "jobber.png" };
const st: HelpLogo = { name: "ServiceTitan", file: "servicetitan.png" };
const cam: HelpLogo = { name: "CompanyCam", file: "companycam.png" };
const ghl: HelpLogo = { name: "GoHighLevel", file: "gohighlevel-mark.svg" };
const callrail: HelpLogo = { name: "CallRail", file: "callrail.png" };
const qb: HelpLogo = { name: "QuickBooks", file: "quickbooks.svg" };
const tek: HelpLogo = { name: "Tekmetric", file: "tekmetric.png" };
const meta: HelpLogo = { name: "Meta", file: "meta.svg" };
const podium: HelpLogo = { name: "Podium", file: "podium.png" };
const birdeye: HelpLogo = { name: "Birdeye", file: "birdeye.png" };
const hcp: HelpLogo = { name: "Housecall Pro", file: "housecallpro.png" };
const jn: HelpLogo = { name: "JobNimbus", file: "jobnimbus.png" };
const bt: HelpLogo = { name: "Buildertrend", file: "buildertrend.png" };
const accu: HelpLogo = { name: "AccuLynx", file: "acculynx.png" };
const shop: HelpLogo = { name: "Shopmonkey", file: "shopmonkey.png" };
const ccc: HelpLogo = { name: "CCC ONE", file: "ccc.png" };

export const HELP_TOPICS: HelpTopic[] = [
  t({
    group: "Get work",
    slug: "google-business-profile",
    name: "Google Business Profile",
    blurb: "Keep the listing moving without a weekly login.",
    headline: "Your Google listing is a job. Right now it is a login nobody wants.",
    scene: "gbp",
    logos: [gmb, google, cam, jobber, st],
    lede: [
      "When a water heater fails at 7pm, people do not go to your website first. They hit Google, look at the listing, and call whoever looks alive. Posts, photos, hours, and Q&A are how you look alive. None of that lives in ChatGPT. It lives in Google Business Profile, and it goes quiet the week the owner is on a roof.",
      "We implement an agent that reads closed jobs in Jobber or ServiceTitan, pulls photos from CompanyCam, and drafts a GBP post from the file. It also flags hours that are wrong, questions sitting unanswered, and a profile that has not posted in 10 days. You approve what goes public. Google stays the listing.",
    ],
    beats: [
      { title: "What quiet actually looks like", body: "Three weeks with no post. Hours still on last winter's schedule. A 'do you service my zip' question sitting 11 days. The listing is paid for. It is just unstaffed." },
      { title: "How the agent sits on GBP", body: "It does not log into Google as you and spray AI captions. It watches the job file, drafts from real work, and puts a post in a queue with the photo attached. If the listing breaks, that is an exception on the morning list, not a ranking lecture." },
      { title: "What this is not", body: "This is not an SEO retainer and it is not a promise to rank #1. It is the leftover work of keeping the profile true and moving, inside the Google account you already have." },
    ],
    aside: "You approve anything public. The agent drafts. Google Business Profile stays the system of record.",
  }),
  t({
    group: "Get work",
    slug: "review-requests",
    name: "Review requests",
    blurb: "Ask for the review while the job is still warm.",
    headline: "The five-star jobs leave without an ask. The one bad night never does.",
    scene: "reviews",
    logos: [gmb, podium, birdeye, jobber, st],
    lede: [
      "A review is a timing problem. Ask the same afternoon the crew left and you get a sentence. Ask next month and you get silence. Most shops know this. The ask still depends on whoever remembered to open Podium, Birdeye, or the Google link.",
      "We implement the ask from the software where the job closed. Ticket hits complete in Jobber, ServiceTitan, or Tekmetric. The agent drafts a short text in your voice, with the right Google review link, and a person sends it until the path is trusted. New reviews, good or ugly, land on the briefing instead of a weekly login that did not happen.",
    ],
    beats: [
      { title: "Why the good jobs vanish", body: "The tech is driving to the next stop. The office is on the phone. Nobody is thinking about Google. The customer is thinking about dinner. That window closes." },
      { title: "The angry ones stay human", body: "A one-star is not an auto-reply. The agent flags it. A person has the conversation. We will not let a model apologize for a flooded kitchen." },
      { title: "Ask from the closed ticket", body: "Complete in Jobber, ServiceTitan, or Tekmetric is the trigger. Not a Friday blast of everyone who ever paid you. The ask is a queue tied to the job that just finished." },
    ],
    aside: "Podium, Birdeye, or a plain Google link. We use what you already pay for.",
  }),
  t({
    group: "Get work",
    slug: "ad-spend-watch",
    name: "Ad spend watch",
    blurb: "Spend next to what actually booked.",
    headline: "Google Ads can spend all week with nobody checking them against jobs.",
    scene: "ads",
    logos: [google, meta, ghl, callrail, st],
    lede: [
      "The ad account is a system of record you already pay for. The leftover job is the operator. Clicks, LSAs, Meta leads. Somebody is supposed to put that next to what actually booked in ServiceTitan or GoHighLevel. That somebody is usually you on a Sunday.",
      "An agent watches spend and inbound against the jobs that landed. Silent spend becomes an exception. A week of LSAs that never became a booked call becomes an exception. You still own the account. We do not take it over as an agency unless that is a separate conversation.",
    ],
    beats: [
      { title: "Vanity dashboards vs booked work", body: "Impressions are not a shop. The briefing should say what you spent and what showed up on the board, from CallRail, Google, Meta, and the CRM, not from a screenshot in Slack." },
      { title: "We are not your media buyer", body: "Pausing, shifting, writing new ads, that stays a person. The agent is the leftover watch so a dead campaign does not run until the credit card statement." },
      { title: "The exception is the product", body: "Silent spend. LSAs with no booked work. A week of Meta leads that never hit the CRM. That is what shows up on the briefing, next to what actually booked." },
    ],
    aside: "Google Ads, Meta, CallRail, and the CRM stay yours. The agent watches the gap.",
  }),
  t({
    group: "Get work",
    slug: "job-recaps",
    name: "Job recaps",
    blurb: "Finished work becomes the next job.",
    headline: "The before and after is on the tech's phone. Marketing is still hunting for something to post.",
    scene: "recap",
    logos: [cam, gmb, jobber, st],
    lede: [
      "CompanyCam already has the photos. The job file already has the notes. The leftover is turning that into a recap someone can approve for GBP, the site, or a follow-up to the neighbor. That leftover currently dies in a camera roll.",
      "The agent grabs a closed ticket and the photos attached to it, drafts a short recap in your voice, and queues it. No invented job. No stock image of a smiling plumber that is not yours.",
    ],
    beats: [
      { title: "Content from the file, not from a prompt", body: "If the job is not in Jobber or ServiceTitan, it does not become a post. That is the point. You are publishing work you actually did." },
      { title: "Then the next ask", body: "A recap can also draft a review ask or a neighbor offer from the same file. One closed job, three leftover paths, still a person on send." },
      { title: "Nothing publishes without you", body: "The queue is the product until you trust it. No invented jobs. No stock plumber who is not yours. If it is not in the file, it is not a post." },
    ],
    aside: "CompanyCam stays the photo source. Google stays the listing. You stay the publisher.",
  }),
  t({
    group: "Get work",
    slug: "local-visibility",
    name: "Local visibility",
    blurb: "Show up where customers are already looking.",
    headline: "You don't have to become an SEO person to stop looking closed on Google.",
    scene: "local",
    logos: [google, gmb, ghl],
    lede: [
      "Local visibility for a service company is not a 40-page audit. It is a listing that is true, a site that loads, ads that still have an operator, and a profile that has posted since the last ice storm. Those are leftover jobs across Google Business Profile, the site, and ads.",
      "We implement watchers on the channels you already pay for. Quiet listing. Broken hours. Spend with no booked work. The next move is a draft, not a lecture on E-E-A-T.",
    ],
    beats: [
      { title: "The channels, not a new funnel", body: "GBP, Google Ads, Search Console, the site you have. We do not sell you a new website to make the old listing honest." },
      { title: "Strategy stays with you", body: "Where to spend, what to rank for, whether to run LSAs. The agent watches leftover. It does not become your CMO." },
      { title: "Quiet weeks get flagged", body: "A listing that has not posted, hours that are wrong, ads spending with nobody checking them. That is the leftover, before the ranking story starts." },
    ],
    aside: "Google stays Google. We implement the leftover watching around it.",
  }),
  t({
    group: "Get work",
    slug: "neighbor-and-repeat",
    name: "Neighbors and repeats",
    blurb: "The cheapest lead is already on the route.",
    headline: "You washed 14 houses on the street. You asked none of the neighbors.",
    scene: "neighbor",
    logos: [jobber, st, ghl, gmb],
    lede: [
      "Route density is a leftover list. Last year's lawns. The HOA you already have. The house two doors down from today's job. Most of that is already in Jobber or ServiceTitan. Outreach is a Saturday project that never happens.",
      "Agents work the quiet accounts and the street you are already on. A finished job can draft a neighbor offer. A skip can draft a save. A seasonal book can get worked in March, not in June when they already signed.",
    ],
    beats: [
      { title: "Not a scraped neighborhood blast", body: "We work your customers and the jobs you actually ran. We do not buy you a list of everyone on the block and spam them from a fake number." },
      { title: "Repeats on a clock", body: "House wash, gutter, tune-up, membership. If it should come back, it is a date in the software, not a hope." },
      { title: "The route is the list", body: "Today's Jobber or ServiceTitan schedule is the neighborhood. We work the street you are already on, not a zip code scrape." },
    ],
    aside: "You approve lists and language. The CRM stays the source.",
  }),
  t({
    group: "Win work",
    slug: "missed-calls",
    name: "Missed calls",
    blurb: "The call you didn't catch still gets a first response.",
    headline: "Lunch and after hours are when the expensive calls come in.",
    scene: "phone",
    logos: [callrail, ghl, st, jobber],
    lede: [
      "CallRail already knows who called. The CRM already has a place to put them. The leftover is the 90 seconds after nobody picked up. That is when they call the next company on Google.",
      "We implement a first text from the miss, in your voice, while you stay in the loop. Spam gets filtered. A real backup on Oak Street gets a person. The phone system does not get replaced. The leftover answer does.",
    ],
    beats: [
      { title: "Speed is the job", body: "A voicemail that waits for the office to 'catch up' is a lost job. The agent is watching CallRail and GoHighLevel so the miss is a queue, not a graveyard." },
      { title: "You still decide what it may send", body: "Some shops want a draft. Some want the first text to go. That is a permission, not a surprise on Friday." },
      { title: "Spam dies. Real work gets a person.", body: "A robocall is not a job. A backup on Oak Street is. The agent sorts, then a person owns anything that commits the company." },
    ],
    aside: "CallRail, the phone, and the CRM stay. We implement the leftover response.",
  }),
  t({
    group: "Win work",
    slug: "speed-to-lead",
    name: "Speed to lead",
    blurb: "Form fills get a reply before they go cold.",
    headline: "They filled the form at 12:10. You quoted at 4. They had already booked.",
    scene: "speed",
    logos: [ghl, google, callrail, jobber],
    lede: [
      "Web leads, LSAs, chat, the Facebook form. You paid to generate them. The leftover is the first response. Every owner knows minutes win. Nobody is sitting on the form all day.",
      "An agent watches inbound in GoHighLevel and Google, drafts or sends the first reply, and puts a real next step on the calendar. Tire-kickers get a filter. A same-day drain gets a slot or a person.",
    ],
    beats: [
      { title: "The clock is the product", body: "The animation on this page is not a metaphor. First response time is the number that dies in a group chat. We put it on the job." },
      { title: "Into the CRM, not a screenshot", body: "If it is not in GoHighLevel or Jobber, it did not happen. The leftover is also logging it so the next person can see it." },
      { title: "A next step, not we'll call you", body: "The first reply should offer a slot or a question. A holding pattern is how they book the next company on Google." },
    ],
    aside: "Google Local Services, the site form, and the CRM stay the front door.",
  }),
  t({
    group: "Win work",
    slug: "lead-qualification",
    name: "Lead qualification",
    blurb: "Tire-kickers get filtered. Real work gets to a person.",
    headline: "The estimator's morning is a pile of 'how much for' that was never going to book.",
    scene: "qualify",
    logos: [ghl, st, jobber, hcp],
    lede: [
      "Not every form fill is a job. Out of area. Wrong trade. A price shopper who wants a number in a text. Someone still has to sort them so the real work is not under that pile.",
      "We write your rules into an agent. Service area, job type, budget signals, spam. It tags GoHighLevel or ServiceTitan with a reason. Borderline jobs still get a human look. Silent discards do not.",
    ],
    beats: [
      { title: "Rules you can read", body: "If a lead is marked spam, you can see why. That is the opposite of a black-box chatbot deciding your pipeline." },
      { title: "The board should be work", body: "An estimator opening the CRM to 40 junk cards will stop opening the CRM. Qualification is how you keep them in it." },
      { title: "Borderline still gets a human look", body: "Out of area and spam can go. A maybe-in-area drain still lands on a person with a reason attached, not a silent discard." },
    ],
    aside: "You write the rules. The CRM keeps the record.",
  }),
  t({
    group: "Win work",
    slug: "estimate-follow-up",
    name: "Estimate follow-up",
    blurb: "Quotes that went out still get a second touch.",
    headline: "We bid 14 last week. We followed up on two.",
    scene: "quotes",
    logos: [tek, st, jn, ghl],
    lede: [
      "The estimate left the building. Follow-up is whatever the estimator remembers at night. Tekmetric, ServiceTitan, JobNimbus, they all have aging quotes. They do not have a person whose only job is the second touch.",
      "An agent ages the quote, drafts the next message from the actual estimate, and closes the loop with won, lost, or still open. Discounts stay a person. The leftover list does not.",
    ],
    beats: [
      { title: "From the estimate, not a blank text", body: "The follow-up should mention the water heater, the date, the number they already have. That only works if the agent can read the file." },
      { title: "Win/loss is part of the job", body: "A quote that dies without a reason makes the next bid worse. Logging why is leftover work too." },
      { title: "The leftover list is the job", body: "Tekmetric, ServiceTitan, JobNimbus already age the quote. They do not have a person whose only job is the second touch. That is what the agent owns." },
    ],
    aside: "An advisor still sends it until you trust the path.",
  }),
  t({
    group: "Win work",
    slug: "declined-work",
    name: "Declined work",
    blurb: "The recommendation was logged. The follow-up was not.",
    headline: "That revenue leaves with the car unless someone asks again.",
    scene: "declined",
    logos: [tek, shop, st, jobber],
    lede: [
      "In a shop it is the declined line on the RO. In the field it is the extra the homeowner waved off on Tuesday. It is in Tekmetric or Shopmonkey. It is not on anyone's list for Thursday.",
      "The agent keeps declined lines in a queue and drafts the later ask from the ticket you already wrote. A tech or advisor still owns the customer. The leftover list is the job.",
    ],
    beats: [
      { title: "It was already sold once", body: "Somebody looked at the car or the furnace and wrote the recommendation. Asking again is not a cold call. It is finishing the ticket." },
      { title: "Not a discount bot", body: "We will not have a model start cutting price to 'win it back.' That is how you train customers to wait." },
      { title: "Thursday is the leftover", body: "It is already in the RO. It is not on anyone's list. The agent keeps declined lines in a queue so asking again is finishing the ticket." },
    ],
    aside: "Tekmetric, Shopmonkey, ServiceTitan stay the ticket. The queue is what we add.",
  }),
  t({
    group: "Win work",
    slug: "customer-reactivation",
    name: "Customer reactivation",
    blurb: "Past customers are a list. Right now they are a hope.",
    headline: "The book is in the CRM. The outreach is a Saturday that never happens.",
    scene: "reactivate",
    logos: [ghl, jobber, st, qb],
    lede: [
      "You do not need ChatGPT to talk to people who already paid you. You need last service date, last membership, last open estimate, and a next step. That is already in GoHighLevel, Jobber, or QuickBooks.",
      "Agents work quiet accounts and lapsed plans. Seasonal, due, or just quiet too long. The CRM updates so the next pass is not a duplicate blast.",
    ],
    beats: [
      { title: "Your customers, your timing", body: "A lawn in March. A furnace in September. A shop that has not seen the car in 14 months. The calendar is the strategy." },
      { title: "No bought list", body: "We are not appending random neighbors onto your CRM to hit a send count." },
      { title: "The CRM updates so the next pass is clean", body: "Won, lost, or still quiet gets logged. The next seasonal run is not a duplicate blast of people who already said no." },
    ],
    aside: "You approve lists and language. The CRM stays the book.",
  }),
  t({
    group: "Win work",
    slug: "web-and-chat-leads",
    name: "Web and chat leads",
    blurb: "The site is collecting work. Someone still has to answer it.",
    headline: "The widget is on. The after-hours transcript is a graveyard.",
    scene: "chat",
    logos: [ghl, google, meta, callrail],
    lede: [
      "Chat, the form, Messenger, LSA. Paid traffic hits a box that emails the office. After hours that email is tomorrow. Tomorrow is too late.",
      "We implement first response and routing on the inbound you already paid to generate. A real reply. A next step. A record in GoHighLevel, not a screenshot in a group text.",
    ],
    beats: [
      { title: "Every door, one queue", body: "If Facebook, Google, and the site dump into three inboxes, leftover wins. One queue is the point." },
      { title: "Hard sells stay human", body: "Pricing exceptions, angry chatters, anything that commits the company. Draft, then a person." },
      { title: "After hours is when this matters", body: "The widget is on. The transcript is a graveyard. Paid traffic hitting a form that emails the office tomorrow is how you lose the job tonight." },
    ],
    aside: "The front doors stay. The leftover answer is what we build.",
  }),
  t({
    group: "Run the shop",
    slug: "stalled-jobs",
    name: "Stalled jobs",
    blurb: "What did not move today.",
    headline: "The customer is waiting. The file is four days old and still 'in progress.'",
    scene: "stalled",
    logos: [tek, st, jobber, accu, bt],
    lede: [
      "Open work goes quiet when nobody is looking. Aging ROs in Tekmetric. Storm files in AccuLynx. Jobs in Buildertrend that should have moved. The leftover is the look.",
      "Agents age the board, flag the stall (missing approval, missing part, missing update), and draft the next step. The system of record stays. The watcher is what was missing.",
    ],
    beats: [
      { title: "Exceptions, not a wall of green", body: "You do not need another dashboard of jobs that are fine. You need the four that stopped." },
      { title: "The stall has a reason", body: "Parts, approval, customer, weather. If the agent cannot name it, it still flags the age so a person can." },
      { title: "The watcher is what was missing", body: "Tekmetric, Jobber, AccuLynx, Buildertrend stay the board. Open work goes quiet when nobody is looking. That look is the leftover." },
    ],
    aside: "Tekmetric, Jobber, ServiceTitan, AccuLynx, Buildertrend. We watch them. We do not replace them.",
  }),
  t({
    group: "Run the shop",
    slug: "dispatch-and-schedule",
    name: "Dispatch and schedule",
    blurb: "The leftover between the calendar and the street.",
    headline: "A 90-minute job becomes three hours. The next customer is already waiting.",
    scene: "dispatch",
    logos: [st, jobber, hcp, tek],
    lede: [
      "Dispatch is a person with a phone. Exceptions live in a group chat. Nobody confirms tonight's book. ServiceTitan and Jobber already have the calendar. They do not have a watcher on unconfirmed stops, overbooked days, and thin days.",
      "The agent sees the risk, drafts the update or the fill, and keeps the file honest about what actually happened. A dispatcher still runs the day.",
    ],
    beats: [
      { title: "Confirmations are a night-before job", body: "A no-show burns a crew. Last-night texts are leftover. That is why they do not happen." },
      { title: "The calendar should match the street", body: "If the tech sat in traffic and the file still says on time, tomorrow's board is a lie." },
      { title: "A dispatcher still runs the day", body: "The agent watches unconfirmed stops, overbooked days, and thin days. A person still moves the pieces." },
    ],
    aside: "A dispatcher still runs the day. The agent watches what they cannot stare at for eight hours.",
  }),
  t({
    group: "Run the shop",
    slug: "parts-and-materials",
    name: "Parts and materials",
    blurb: "Ordered vs on site vs on the board.",
    headline: "The panels are on a truck. The crew is still on the calendar for Monday.",
    scene: "parts",
    logos: [st, jn, bt, qb],
    lede: [
      "The office thinks it shipped. The warehouse thinks next week. The crew is rolling. That split is how you burn a half day and a customer.",
      "Agents match POs and holds to start dates, flag a slip, and draft the customer or GC update. Extras that got used and never billed are a money path on the same file.",
    ],
    beats: [
      { title: "Start-ready is a checklist", body: "Material, permit, crew. If one is missing, the board should not say go." },
      { title: "Vendors stay vendors", body: "We do not become your purchasing department. We watch the gap between the PO and the schedule you already run." },
      { title: "A slip drafts the update", body: "If hardware is on backorder and the crew is still on Monday, the customer or GC gets a draft before the trailer is loaded." },
    ],
    aside: "ServiceTitan, JobNimbus, Buildertrend, QuickBooks. The leftover is the match.",
  }),
  t({
    group: "Run the shop",
    slug: "permits-and-approvals",
    name: "Permits and approvals",
    blurb: "HOA, city, and utility leftover stalls a crew more than weather.",
    headline: "The inspector is on site and we are still hunting the permit.",
    scene: "permits",
    logos: [jn, bt, st, cam],
    lede: [
      "The packet is in email. The start is on the board. Those two files do not talk. HOA, city, locate, utility. Leftover approvals are how a crew dies in a driveway.",
      "An agent watches approval status against the start date and drafts the chase. You still talk to the city. The leftover no longer lives in one person's inbox.",
    ],
    beats: [
      { title: "Install-ready, not optimistic", body: "If the HOA has not signed, Monday is not a start. The board should say that before the trailer is loaded." },
      { title: "Photos in the file", body: "CompanyCam of the posted permit beats a text that says 'I think we're good.'" },
      { title: "The leftover leaves one inbox", body: "HOA, city, locate, utility. You still talk to the city. The packet no longer lives in one person's email." },
    ],
    aside: "You still talk to the city. We keep the leftover from living in one inbox.",
  }),
  t({
    group: "Run the shop",
    slug: "change-orders",
    name: "Change orders and extras",
    blurb: "The extra was in the foreman's head.",
    headline: "Day two they added a wall. Day five it was done. Billing still has the first number.",
    scene: "extras",
    logos: [bt, jn, st, cam, qb],
    lede: [
      "You don't have to learn AI to stop giving work away on site. You have to stop relying on a foreman to remember the extra at 6pm. Notes, photos, and time that do not match the bid are sitting in Buildertrend and CompanyCam.",
      "The agent flags the extra, drafts the change order from the job file, and ties it to the invoice. Pricing extras is a person. Finding them is a job.",
    ],
    beats: [
      { title: "If it is not on paper it is a gift", body: "Skim coats, extra footage, a second trip. The customer will not volunteer to pay for a memory." },
      { title: "Draft, then a PM", body: "A model should not invent a price. It should put the extra in front of the person who can." },
      { title: "Photos are the proof", body: "CompanyCam from day two is how extras stop being a he-said. The agent flags what does not match the bid. A person still prices it." },
    ],
    aside: "Pricing extras is a person. Finding them is the leftover we watch.",
  }),
  t({
    group: "Run the shop",
    slug: "punch-and-closeout",
    name: "Punch and closeout",
    blurb: "The job looks done. The file is not.",
    headline: "Punch in a text thread is not closeout.",
    scene: "punch",
    logos: [bt, cam, jn, accu],
    lede: [
      "The crew left. Collections is hunting a signature. Warranty starts with no packet. Buildertrend, AccuLynx, CompanyCam already have pieces of the truth. Closeout is leftover because nobody owns the list.",
      "Agents list what is open, draft the customer or GC note, and hand a finished site to billing as a finished job.",
    ],
    beats: [
      { title: "Complete in the field, complete in the books", body: "Those two statuses drifting apart is how finals sit 40 days." },
      { title: "A PM still walks it when it matters", body: "The leftover list does not depend on them remembering every open item from a photo dump." },
      { title: "Punch is a file, not a thread", body: "Open items, photos, sign-off. If it lives in a text to the owner, collections and warranty both start blind." },
    ],
    aside: "A walk still happens when it should. The list is no longer a text thread.",
  }),
  t({
    group: "Run the shop",
    slug: "daily-briefing",
    name: "Daily owner briefing",
    blurb: "The Sunday job, overnight.",
    headline: "Hours, comebacks, A/R, ads. Someone builds it by hand from three logins.",
    scene: "briefing",
    logos: [tek, st, qb, google, ghl],
    lede: [
      "The owner report is a scavenger hunt. Tekmetric, CCC, ads, QuickBooks. Two CSVs and a feeling about yesterday. That is a Sunday job wearing a weekday costume.",
      "Agents read the stack overnight and write exceptions. What needs a person today. Not a wall of green. Same time every morning. You still run the company. You stop building the packet by hand.",
    ],
    beats: [
      { title: "Exceptions beat dashboards", body: "If everything is 'on track' the briefing failed. The value is the four things that broke." },
      { title: "From the systems you already run", body: "We do not invent KPIs in a new app. We assemble what your software already knows and you were copy-pasting." },
      { title: "Same time every morning", body: "A briefing, not a project. Hours, load, comebacks, A/R, ads versus what booked. The owner starts from what broke overnight." },
    ],
    aside: "You still run the company. The packet stops being a project.",
  }),
  t({
    group: "Get paid",
    slug: "unbilled-work",
    name: "Unbilled work",
    blurb: "Work happened. The file did not.",
    headline: "Completed in the bay, still not an invoice.",
    scene: "unbilled",
    logos: [qb, tek, jobber, st],
    lede: [
      "Glass, a Friday dump, an extra coat, after-hours repair. Status in ops says done. QuickBooks never saw it. Cash is sitting in the job file until Monday, or never.",
      "Agents find completed unbilled, flag extras that missed the ticket, and draft the invoice note. A person still sends it. QuickBooks stays the books. We do not invent a fake ledger.",
    ],
    beats: [
      { title: "Ops vs books is the whole job", body: "If Tekmetric says complete and QuickBooks has no invoice, that is not a reporting issue. It is leftover cash." },
      { title: "No fake finance module", body: "We will not replace QuickBooks with a pretty card that pretends to be your GL." },
      { title: "Friday work is Monday cash", body: "Glass, a dump, after-hours repair. Done in the bay, missing in the books until someone thinks to look. That look is the leftover." },
    ],
    aside: "QuickBooks stays the books. The leftover is the match to the job file.",
  }),
  t({
    group: "Get paid",
    slug: "invoice-reminders",
    name: "Invoice reminders",
    blurb: "The last draw is leftover.",
    headline: "The job is done. The balance is 34 days old. Nobody has a list that is current.",
    scene: "invoices",
    logos: [qb, jobber, st],
    lede: [
      "A/R is a person with a spreadsheet and a stomach for awkward texts. QuickBooks already ages the invoices. The leftover is the next ask, specific to the job, not a generic dunning letter from 2014.",
      "Agents age open invoices, draft the reminder, and escalate the stuck ones to a person. You approve tone and when it may send.",
    ],
    beats: [
      { title: "Polite, specific, from the invoice", body: "'Invoice 2081 for the Oak Street drain, 34 days' is a different text than 'your account is past due.'" },
      { title: "Ugly collections stay human", body: "Liens, lawyers, a customer in a fight. The agent should shut up and hand it over." },
      { title: "Aging is already in QuickBooks", body: "The leftover is the next ask, on time, tied to the job. Not a spreadsheet someone rebuilds when A/R feels bad." },
    ],
    aside: "You approve tone. QuickBooks stays the aging.",
  }),
  t({
    group: "Get paid",
    slug: "deposits-and-finals",
    name: "Deposits and finals",
    blurb: "Sold, not collected. Installed, not closed.",
    headline: "The contract is signed. The deposit is 'they said they sent it.'",
    scene: "deposits",
    logos: [qb, jn, bt],
    lede: [
      "A job can look sold while the deposit never hit QuickBooks. It can look done in Buildertrend while the final was never asked for. Install day is a bad time to find that out.",
      "Agents check sold jobs with no money in the file, and complete jobs with an open final, then draft the ask tied to the job.",
    ],
    beats: [
      { title: "Two statuses, one file", body: "Sold vs collected. Complete vs closed. Those drifting apart is a cash problem wearing an ops costume." },
      { title: "Terms stay yours", body: "50 up front, progress draws, COD. We watch leftover against the terms you already have." },
      { title: "Install day is too late", body: "A job that looks sold with no deposit in QuickBooks should flag before the crew rolls, not in the driveway." },
    ],
    aside: "Terms stay yours. The leftover watching does not depend on memory.",
  }),
  t({
    group: "Stay in the loop",
    slug: "customer-updates",
    name: "Customer updates",
    blurb: "The customer used to find out in the driveway.",
    headline: "The RO moved. Nobody texted.",
    scene: "updates",
    logos: [tek, st, jobber, ccc],
    lede: [
      "The file moved. The customer did not hear. They call, they review, or they no-show the pickup. Tekmetric, CCC, ServiceTitan already know the status. The leftover is the sentence.",
      "Agents see the move, draft the update in your voice, and log that it went. A person still sends it until you trust the path. Bad news stays a human call when it should.",
    ],
    beats: [
      { title: "Status is not a message", body: "'Parts ordered' in the file is not the same as telling the customer the car slips a day." },
      { title: "The next person can see it", body: "If the update only lived in a tech's iMessage, the shop still does not know." },
      { title: "Bad news is still a human call", body: "A delay text can be a draft. A totaled car or a flood is a person. Permissions say which." },
    ],
    aside: "A person still sends it until you trust the path.",
  }),
  t({
    group: "Stay in the loop",
    slug: "booking-confirms",
    name: "Booking confirms",
    blurb: "Unconfirmed appointments sit on the calendar like they are real.",
    headline: "The calendar is full. Half of it never said yes.",
    scene: "confirms",
    logos: [jobber, hcp, st, ghl],
    lede: [
      "A no-show burns a crew. Last-night confirms are a job. Jobber and Housecall Pro will sit on unconfirmed stops forever if nobody asks.",
      "Agents find tomorrow's unconfirmed, send the text with a way to reschedule, and flag the silent ones so you can fill from a wait list instead of a hole.",
    ],
    beats: [
      { title: "Real book vs hopeful book", body: "Dispatching into a maybe is how you eat overtime and a bad review." },
      { title: "Same-day emergencies still go to a person", body: "The agent is the night-before leftover, not the 9am flood call." },
      { title: "Silent ones become a fill", body: "No reply on the confirm is a hole. Flag it early enough to pull from a wait list instead of burning a crew." },
    ],
    aside: "You set timing and language. The calendar stays the calendar.",
  }),
  t({
    group: "Stay in the loop",
    slug: "warranty-and-callbacks",
    name: "Warranty and callbacks",
    blurb: "A leak, a comeback, a six-month text to the owner.",
    headline: "They text the owner because that is the only path that works.",
    scene: "warranty",
    logos: [tek, st, jobber, cam],
    lede: [
      "After-the-job leftover is still a job. A callback at six months currently lives in the owner's phone. The original file never sees it, so comebacks are a feeling, not a list.",
      "Agents attach the callback to the original job, queue the next step, and let you see the pattern. Hard conversations stay with a person. The file still has to exist.",
    ],
    beats: [
      { title: "Comebacks as a list", body: "If it is always the same tech, the same pump, the same leak, that should not be folklore." },
      { title: "Vendor claims on the same file", body: "A bad part and a bad install look the same until someone files it against the job." },
      { title: "Stop using the owner's phone", body: "A six-month leak texted to the owner is how the original job never sees it. Attach it to the RO so warranty is a file." },
    ],
    aside: "Hard conversations stay with a person. The file still has to exist.",
  }),
  t({
    group: "Stay in the loop",
    slug: "human-in-the-loop",
    name: "Human in the loop",
    blurb: "Agents draft. You approve anything that commits the company.",
    headline: "You don't have to trust a model with your customers to get leftover work watched.",
    scene: "human",
    logos: [ghl, tek, st, qb],
    lede: [
      "Most AI sold to shops is a chatbot that can send. That is the fear. It is also optional. Every path we implement has permissions, a log, and a person on money, promises, and mess.",
      "We write what it may do and what it must hand off before a model is chosen. The off switch ships with the path. You stay the operator. That is the product, not a footnote.",
    ],
    beats: [
      { title: "Permissions first", body: "Draft vs send. Flag vs invoice. If you would not hand it to a new hire on day one, the agent drafts." },
      { title: "A log you can read", body: "Who, what, which system. If you cannot see it, it should not have happened." },
      { title: "The off switch ships with it", body: "Every path has a way to stop it. Money, promises, and mess stay with a person until you say otherwise." },
    ],
    aside: "You stay the operator. That is the product, not a footnote.",
  }),
  t({
    group: "Stay in the loop",
    slug: "existing-software",
    name: "Existing software",
    blurb: "CRM, field, ads, and books stay the system of record.",
    headline: "We don't ask you to move shops to a new platform to get AI.",
    scene: "stack",
    logos: [tek, st, jobber, qb, ghl, accu, cam],
    lede: [
      "The last vendor wanted you in their app. The leftover work is in the apps you already have. Tekmetric, Jobber, ServiceTitan, AccuLynx, QuickBooks, GoHighLevel. Agents sit on top. They do not become the new source of truth.",
      "We map the stack, including the ugly parts, and connect what we can. APIs, exports, inboxes. Named tools are examples, not a certified list we pretend already works. If a tool has no honest way to connect, we say so in the audit.",
    ],
    beats: [
      { title: "Systems of record stay", body: "Jobs in the field software. Money in QuickBooks. Customers in the CRM. The agent reads them. It does not replace them." },
      { title: "Honest about connectors", body: "Some tools have real APIs. Some have CSV. Some have a person forwarding an email. We will tell you which one you have." },
      { title: "Ugly parts of the stack count", body: "The leftover often lives in the tool nobody wants to demo. We map that too, instead of pretending the pretty CRM is the whole company." },
    ],
    aside: "If a tool has no honest way to connect, we say so in the audit instead of pretending.",
  }),
];

export const HELP_GROUPS = ["Get work", "Win work", "Run the shop", "Get paid", "Stay in the loop"] as const;

export function helpBySlug(slug: string) {
  return HELP_TOPICS.find((t) => t.slug === slug) ?? null;
}

export function helpParam(topic: { href: string }) {
  return topic.href.replace("/help/", "");
}
