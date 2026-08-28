import { createServerFn } from "@tanstack/react-start";
import { INDUSTRIES } from "@/data/site";

export const REVENUE_OPTIONS = [
  { value: "under-2", label: "Under $2M" },
  { value: "2-5", label: "$2M to $5M" },
  { value: "5-10", label: "$5M to $10M" },
  { value: "10-25", label: "$10M to $25M" },
  { value: "25-50", label: "$25M to $50M" },
  { value: "50+", label: "$50M+" },
] as const;

function str(v: unknown) {
  return typeof v === "string" ? v.trim() : "";
}

export const submitAudit = createServerFn({ method: "POST" })
  .validator((raw: unknown) => {
    if (!raw || typeof raw !== "object") throw new Error("Invalid form");
    const d = raw as Record<string, unknown>;
    const first = str(d.first);
    const last = str(d.last);
    const email = str(d.email);
    const phone = str(d.phone);
    const company = str(d.company);
    const industry = str(d.industry) || "other";
    const revenue = str(d.revenue);
    const website = str(d.website);
    if (!first || !last) throw new Error("Name is required");
    if (!company) throw new Error("Company is required");
    if (!website) throw new Error("Website is required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Valid email is required");
    if (phone.replace(/\D/g, "").length < 10) throw new Error("Valid phone is required");
    if (!REVENUE_OPTIONS.some((r) => r.value === revenue)) throw new Error("Select annual revenue");
    const industryLabel = INDUSTRIES.find((i) => i.slug === industry)?.name || "Other";
    const revenueLabel = REVENUE_OPTIONS.find((r) => r.value === revenue)?.label || revenue;
    return {
      first,
      last,
      email,
      phone,
      company,
      industry,
      industryLabel,
      revenue,
      revenueLabel,
      website: str(d.website),
      utmSource: str(d.utmSource),
      utmMedium: str(d.utmMedium),
      utmCampaign: str(d.utmCampaign),
    };
  })
  .handler(async ({ data }) => {
    const { upsertAuditContact } = await import("./ghl.server");
    try {
      return await upsertAuditContact(data);
    } catch {
      throw new Error("Could not send the audit request. Try again in a minute.");
    }
  });

export const qualifyAudit = createServerFn({ method: "POST" })
  .validator((raw: unknown) => {
    if (!raw || typeof raw !== "object") throw new Error("Invalid form");
    const d = raw as Record<string, unknown>;
    const email = str(d.email);
    const employees = str(d.employees);
    const locations = str(d.locations);
    const software = str(d.software);
    const pain = str(d.pain);
    const help = str(d.help);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Valid email is required");
    if (!employees) throw new Error("Employees is required");
    if (!locations) throw new Error("Locations is required");
    if (!software) throw new Error("Software is required");
    if (!pain) throw new Error("Repetitive processes are required");
    if (!help) throw new Error("Tell us what you want AI to help with");
    return {
      email,
      website: str(d.website),
      employees,
      locations,
      software,
      pain,
      help,
    };
  })
  .handler(async ({ data }) => {
    const { qualifyAuditContact } = await import("./ghl.server");
    try {
      return await qualifyAuditContact(data);
    } catch {
      throw new Error("Could not save those details. Try again.");
    }
  });

export const WORKSHOP_AUDIENCES = [
  { value: "trade-association", label: "Trade association" },
  { value: "franchise", label: "Franchise group" },
  { value: "pe-portfolio", label: "PE portfolio" },
  { value: "chamber", label: "Chamber of commerce" },
  { value: "peer-group", label: "Peer group" },
  { value: "software-user-group", label: "Software user group" },
  { value: "owner-org", label: "Business-owner organization" },
  { value: "other", label: "Other" },
] as const;

export const submitWorkshop = createServerFn({ method: "POST" })
  .validator((raw: unknown) => {
    if (!raw || typeof raw !== "object") throw new Error("Invalid form");
    const d = raw as Record<string, unknown>;
    const first = str(d.first);
    const last = str(d.last);
    const email = str(d.email);
    const organization = str(d.organization);
    const audience = str(d.audience);
    if (!first || !last) throw new Error("Name is required");
    if (!organization) throw new Error("Organization is required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Valid email is required");
    const audienceLabel = WORKSHOP_AUDIENCES.find((a) => a.value === audience)?.label || "Other";
    return {
      first,
      last,
      email,
      phone: str(d.phone),
      organization,
      audience: audience || "other",
      audienceLabel,
      notes: str(d.notes),
    };
  })
  .handler(async ({ data }) => {
    const { upsertWorkshopContact } = await import("./ghl.server");
    try {
      return await upsertWorkshopContact(data);
    } catch {
      throw new Error("Could not send the request. Try again in a minute.");
    }
  });
