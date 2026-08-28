//#region node_modules/.nitro/vite/services/ssr/assets/ghl.server-DGHLKpaa.js
var GHL_API = "https://services.leadconnectorhq.com";
var GHL_VERSION = "2021-07-28";
var FIELDS = {
	industry: "TPj5rjRcoAbNdNryunMH",
	revenue: "VT5wfBBkPBT5Cdxk2kAq",
	employees: "aGqWL0UlY48KzeE8CqFc",
	locations: "JaGHByD7hn43RK25tn0M",
	software: "A8nTr9EPlgBt32zXtqmS",
	pain: "ClYyGUGOOJOsxMLN7ZFl",
	utmSource: "iJWnMzGtDffiMG6RxQfn",
	utmMedium: "gdeg1SKNZVyI86wl2GHr",
	utmCampaign: "xhqGaR4a7QRz7L8a3HZm"
};
var PIPELINE_ID = "F4LuZkzMOTDOInhy5T4E";
var STAGE_NEW = "b704dad5-0968-49bb-a7df-ddfcaed3cebb";
var STAGE_QUALIFIED = "f28241c4-4b35-4e2d-a65d-1739f436f673";
var ASSIGNED_TO = "b7MEoPtMcCCLz6G5RwNF";
function creds() {
	return {
		token: process.env.GHL_PIT?.trim() || "pit-478c23a8-ec51-451c-905b-6d10a9f0da45",
		locationId: process.env.GHL_LOCATION_ID?.trim() || "6880QBLsXkSgYoV7153n"
	};
}
function headers(token) {
	return {
		Authorization: `Bearer ${token}`,
		Version: GHL_VERSION,
		"Content-Type": "application/json",
		Accept: "application/json",
		"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
	};
}
async function ghl(path, init) {
	const { token } = creds();
	const res = await fetch(`${GHL_API}${path}`, {
		...init,
		headers: {
			...headers(token),
			...init.headers
		}
	});
	const text = await res.text();
	if (!res.ok) throw new Error(`HighLevel ${res.status}: ${text.slice(0, 280)}`);
	return text ? JSON.parse(text) : {};
}
function toE164(phone) {
	const digits = phone.replace(/\D/g, "");
	if (!digits) return phone.trim();
	if (digits.length === 10) return `+1${digits}`;
	if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
	if (phone.trim().startsWith("+")) return `+${digits}`;
	return `+${digits}`;
}
function cf(id, value) {
	return value ? [{
		id,
		field_value: value
	}] : [];
}
function scoreTag(revenue) {
	if (revenue === "25-50" || revenue === "50+") return "score-hot";
	if (revenue === "5-10" || revenue === "10-25") return "score-warm";
	return "score-nurture";
}
async function createOpportunity(contactId, name, stageId) {
	const { locationId } = creds();
	await ghl("/opportunities/", {
		method: "POST",
		body: JSON.stringify({
			pipelineId: PIPELINE_ID,
			locationId,
			name,
			pipelineStageId: stageId,
			status: "open",
			contactId,
			source: "Website Audit",
			assignedTo: ASSIGNED_TO
		})
	}).catch(() => void 0);
}
async function findOpportunityId(contactId) {
	const { locationId } = creds();
	try {
		return (await ghl(`/opportunities/search?location_id=${locationId}&contact_id=${contactId}`, { method: "GET" })).opportunities?.[0]?.id || null;
	} catch {
		return null;
	}
}
async function upsertAuditContact(lead) {
	const { locationId } = creds();
	const customFields = [
		...cf(FIELDS.industry, lead.industryLabel),
		...cf(FIELDS.revenue, lead.revenueLabel),
		...cf(FIELDS.utmSource, lead.utmSource || ""),
		...cf(FIELDS.utmMedium, lead.utmMedium || ""),
		...cf(FIELDS.utmCampaign, lead.utmCampaign || "")
	];
	const result = await ghl("/contacts/upsert", {
		method: "POST",
		body: JSON.stringify({
			locationId,
			firstName: lead.first,
			lastName: lead.last,
			name: `${lead.first} ${lead.last}`.trim(),
			email: lead.email,
			phone: toE164(lead.phone),
			companyName: lead.company,
			website: lead.website || void 0,
			source: "Website Audit",
			country: "US",
			assignedTo: ASSIGNED_TO,
			tags: [
				"website-audit",
				`industry-${lead.industry}`,
				`rev-${lead.revenue}`,
				scoreTag(lead.revenue)
			],
			customFields
		})
	});
	const contactId = result.contact?.id || result.id;
	if (contactId) {
		await ghl(`/contacts/${contactId}/notes`, {
			method: "POST",
			body: JSON.stringify({ body: [
				"Free AI Operations Audit. Step 1 captured.",
				`Company: ${lead.company}`,
				`Industry: ${lead.industryLabel}`,
				`Annual revenue: ${lead.revenueLabel}`,
				lead.website ? `Website: ${lead.website}` : "",
				lead.utmSource ? `UTM: ${lead.utmSource} / ${lead.utmMedium} / ${lead.utmCampaign}` : ""
			].filter(Boolean).join("\n") })
		}).catch(() => void 0);
		if (!await findOpportunityId(contactId)) await createOpportunity(contactId, `Audit: ${lead.company}`, STAGE_NEW);
	}
	return {
		ok: true,
		contactId: contactId || null
	};
}
async function qualifyAuditContact(q) {
	const { locationId } = creds();
	const customFields = [
		...cf(FIELDS.employees, q.employees || ""),
		...cf(FIELDS.locations, q.locations || ""),
		...cf(FIELDS.software, q.software || ""),
		...cf(FIELDS.pain, q.pain || "")
	];
	const result = await ghl("/contacts/upsert", {
		method: "POST",
		body: JSON.stringify({
			locationId,
			email: q.email,
			website: q.website || void 0,
			source: "Website Audit",
			tags: ["website-audit", "audit-qualified"],
			customFields
		})
	});
	const contactId = result.contact?.id || result.id;
	if (contactId) {
		await ghl(`/contacts/${contactId}/notes`, {
			method: "POST",
			body: JSON.stringify({ body: [
				"Audit qualification (step 2).",
				q.website ? `Website: ${q.website}` : "",
				q.employees ? `Employees: ${q.employees}` : "",
				q.locations ? `Locations: ${q.locations}` : "",
				q.software ? `Software: ${q.software}` : "",
				q.pain ? `Biggest repetitive processes: ${q.pain}` : "",
				q.help ? `Want AI to help with: ${q.help}` : ""
			].filter(Boolean).join("\n") })
		}).catch(() => void 0);
		const oppId = await findOpportunityId(contactId);
		if (oppId) await ghl(`/opportunities/${oppId}`, {
			method: "PUT",
			body: JSON.stringify({
				pipelineId: PIPELINE_ID,
				pipelineStageId: STAGE_QUALIFIED,
				status: "open"
			})
		}).catch(() => void 0);
		else await createOpportunity(contactId, `Audit: ${q.email}`, STAGE_QUALIFIED);
	}
	return {
		ok: true,
		contactId: contactId || null
	};
}
async function upsertWorkshopContact(lead) {
	const { locationId } = creds();
	const result = await ghl("/contacts/upsert", {
		method: "POST",
		body: JSON.stringify({
			locationId,
			firstName: lead.first,
			lastName: lead.last,
			name: `${lead.first} ${lead.last}`.trim(),
			email: lead.email,
			phone: lead.phone ? toE164(lead.phone) : void 0,
			companyName: lead.organization,
			source: "Website Workshop",
			country: "US",
			assignedTo: ASSIGNED_TO,
			tags: ["website-workshop", `audience-${lead.audience || "other"}`]
		})
	});
	const contactId = result.contact?.id || result.id;
	if (contactId) await ghl(`/contacts/${contactId}/notes`, {
		method: "POST",
		body: JSON.stringify({ body: [
			"AI workshop request.",
			`Organization: ${lead.organization}`,
			`Audience: ${lead.audience}`,
			lead.notes ? `Notes: ${lead.notes}` : ""
		].filter(Boolean).join("\n") })
	}).catch(() => void 0);
	return {
		ok: true,
		contactId: contactId || null
	};
}
//#endregion
export { qualifyAuditContact, upsertAuditContact, upsertWorkshopContact };
