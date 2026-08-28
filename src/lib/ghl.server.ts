const GHL_API = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";

const FIELDS = {
  industry: "TPj5rjRcoAbNdNryunMH",
  revenue: "VT5wfBBkPBT5Cdxk2kAq",
  employees: "aGqWL0UlY48KzeE8CqFc",
  locations: "JaGHByD7hn43RK25tn0M",
  software: "A8nTr9EPlgBt32zXtqmS",
  pain: "ClYyGUGOOJOsxMLN7ZFl",
  utmSource: "iJWnMzGtDffiMG6RxQfn",
  utmMedium: "gdeg1SKNZVyI86wl2GHr",
  utmCampaign: "xhqGaR4a7QRz7L8a3HZm",
} as const;

const PIPELINE_ID = "F4LuZkzMOTDOInhy5T4E";
const STAGE_NEW = "b704dad5-0968-49bb-a7df-ddfcaed3cebb";
const STAGE_QUALIFIED = "f28241c4-4b35-4e2d-a65d-1739f436f673";
const ASSIGNED_TO = "b7MEoPtMcCCLz6G5RwNF";

function creds() {
  const token = process.env.GHL_PIT?.trim() || "pit-478c23a8-ec51-451c-905b-6d10a9f0da45";
  const locationId = process.env.GHL_LOCATION_ID?.trim() || "6880QBLsXkSgYoV7153n";
  return { token, locationId };
}

function headers(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Version: GHL_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  };
}

async function ghl<T>(path: string, init: RequestInit): Promise<T> {
  const { token } = creds();
  const res = await fetch(`${GHL_API}${path}`, {
    ...init,
    headers: { ...headers(token), ...(init.headers as Record<string, string> | undefined) },
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`HighLevel ${res.status}: ${text.slice(0, 280)}`);
  }
  return text ? (JSON.parse(text) as T) : ({} as T);
}

export function toE164(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return phone.trim();
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (phone.trim().startsWith("+")) return `+${digits}`;
  return `+${digits}`;
}

function cf(id: string, value: string) {
  return value ? [{ id, field_value: value }] : [];
}

function scoreTag(revenue: string) {
  if (revenue === "25-50" || revenue === "50+") return "score-hot";
  if (revenue === "5-10" || revenue === "10-25") return "score-warm";
  return "score-nurture";
}

export type AuditLead = {
  first: string;
  last: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  industryLabel: string;
  revenue: string;
  revenueLabel: string;
  website?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

export type AuditQualify = {
  email: string;
  website?: string;
  employees?: string;
  locations?: string;
  software?: string;
  pain?: string;
  help?: string;
};

type UpsertRes = { contact?: { id?: string }; id?: string };
type OppRes = { opportunity?: { id?: string }; id?: string };

async function createOpportunity(contactId: string, name: string, stageId: string) {
  const { locationId } = creds();
  await ghl<OppRes>("/opportunities/", {
    method: "POST",
    body: JSON.stringify({
      pipelineId: PIPELINE_ID,
      locationId,
      name,
      pipelineStageId: stageId,
      status: "open",
      contactId,
      source: "Website Audit",
      assignedTo: ASSIGNED_TO,
    }),
  }).catch(() => undefined);
}

async function findOpportunityId(contactId: string) {
  const { locationId } = creds();
  try {
    const res = await ghl<{ opportunities?: { id?: string }[] }>(
      `/opportunities/search?location_id=${locationId}&contact_id=${contactId}`,
      { method: "GET" },
    );
    return res.opportunities?.[0]?.id || null;
  } catch {
    return null;
  }
}

export async function upsertAuditContact(lead: AuditLead) {
  const { locationId } = creds();
  const customFields = [
    ...cf(FIELDS.industry, lead.industryLabel),
    ...cf(FIELDS.revenue, lead.revenueLabel),
    ...cf(FIELDS.utmSource, lead.utmSource || ""),
    ...cf(FIELDS.utmMedium, lead.utmMedium || ""),
    ...cf(FIELDS.utmCampaign, lead.utmCampaign || ""),
  ];

  const result = await ghl<UpsertRes>("/contacts/upsert", {
    method: "POST",
    body: JSON.stringify({
      locationId,
      firstName: lead.first,
      lastName: lead.last,
      name: `${lead.first} ${lead.last}`.trim(),
      email: lead.email,
      phone: toE164(lead.phone),
      companyName: lead.company,
      website: lead.website || undefined,
      source: "Website Audit",
      country: "US",
      assignedTo: ASSIGNED_TO,
      tags: ["website-audit", `industry-${lead.industry}`, `rev-${lead.revenue}`, scoreTag(lead.revenue)],
      customFields,
    }),
  });
  const contactId = result.contact?.id || result.id;
  if (contactId) {
    await ghl(`/contacts/${contactId}/notes`, {
      method: "POST",
      body: JSON.stringify({
        body: [
          "Free AI Operations Audit. Step 1 captured.",
          `Company: ${lead.company}`,
          `Industry: ${lead.industryLabel}`,
          `Annual revenue: ${lead.revenueLabel}`,
          lead.website ? `Website: ${lead.website}` : "",
          lead.utmSource ? `UTM: ${lead.utmSource} / ${lead.utmMedium} / ${lead.utmCampaign}` : "",
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    }).catch(() => undefined);
    const existing = await findOpportunityId(contactId);
    if (!existing) {
      await createOpportunity(contactId, `Audit: ${lead.company}`, STAGE_NEW);
    }
  }
  return { ok: true as const, contactId: contactId || null };
}

export async function qualifyAuditContact(q: AuditQualify) {
  const { locationId } = creds();
  const customFields = [
    ...cf(FIELDS.employees, q.employees || ""),
    ...cf(FIELDS.locations, q.locations || ""),
    ...cf(FIELDS.software, q.software || ""),
    ...cf(FIELDS.pain, q.pain || ""),
  ];
  const result = await ghl<UpsertRes>("/contacts/upsert", {
    method: "POST",
    body: JSON.stringify({
      locationId,
      email: q.email,
      website: q.website || undefined,
      source: "Website Audit",
      tags: ["website-audit", "audit-qualified"],
      customFields,
    }),
  });
  const contactId = result.contact?.id || result.id;
  if (contactId) {
    await ghl(`/contacts/${contactId}/notes`, {
      method: "POST",
      body: JSON.stringify({
        body: [
          "Audit qualification (step 2).",
          q.website ? `Website: ${q.website}` : "",
          q.employees ? `Employees: ${q.employees}` : "",
          q.locations ? `Locations: ${q.locations}` : "",
          q.software ? `Software: ${q.software}` : "",
          q.pain ? `Biggest repetitive processes: ${q.pain}` : "",
          q.help ? `Want AI to help with: ${q.help}` : "",
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    }).catch(() => undefined);
    const oppId = await findOpportunityId(contactId);
    if (oppId) {
      await ghl(`/opportunities/${oppId}`, {
        method: "PUT",
        body: JSON.stringify({ pipelineId: PIPELINE_ID, pipelineStageId: STAGE_QUALIFIED, status: "open" }),
      }).catch(() => undefined);
    } else {
      await createOpportunity(contactId, `Audit: ${q.email}`, STAGE_QUALIFIED);
    }
  }
  return { ok: true as const, contactId: contactId || null };
}

export type WorkshopLead = {
  first: string;
  last: string;
  email: string;
  phone?: string;
  organization: string;
  audience: string;
  notes?: string;
};

export async function upsertWorkshopContact(lead: WorkshopLead) {
  const { locationId } = creds();
  const result = await ghl<UpsertRes>("/contacts/upsert", {
    method: "POST",
    body: JSON.stringify({
      locationId,
      firstName: lead.first,
      lastName: lead.last,
      name: `${lead.first} ${lead.last}`.trim(),
      email: lead.email,
      phone: lead.phone ? toE164(lead.phone) : undefined,
      companyName: lead.organization,
      source: "Website Workshop",
      country: "US",
      assignedTo: ASSIGNED_TO,
      tags: ["website-workshop", `audience-${lead.audience || "other"}`],
    }),
  });
  const contactId = result.contact?.id || result.id;
  if (contactId) {
    await ghl(`/contacts/${contactId}/notes`, {
      method: "POST",
      body: JSON.stringify({
        body: [
          "AI workshop request.",
          `Organization: ${lead.organization}`,
          `Audience: ${lead.audience}`,
          lead.notes ? `Notes: ${lead.notes}` : "",
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    }).catch(() => undefined);
  }
  return { ok: true as const, contactId: contactId || null };
}
