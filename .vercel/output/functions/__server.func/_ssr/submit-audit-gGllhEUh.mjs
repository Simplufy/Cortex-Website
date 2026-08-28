import { l as INDUSTRIES } from "./site-BWEzcE1b.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/submit-audit-gGllhEUh.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var REVENUE_OPTIONS = [
	{
		value: "under-2",
		label: "Under $2M"
	},
	{
		value: "2-5",
		label: "$2M to $5M"
	},
	{
		value: "5-10",
		label: "$5M to $10M"
	},
	{
		value: "10-25",
		label: "$10M to $25M"
	},
	{
		value: "25-50",
		label: "$25M to $50M"
	},
	{
		value: "50+",
		label: "$50M+"
	}
];
function str(v) {
	return typeof v === "string" ? v.trim() : "";
}
var submitAudit_createServerFn_handler = createServerRpc({
	id: "13422380776f371a61a0e54cb4c18c2d6bafbfadf9debaffe84ee51cd6c9b752",
	name: "submitAudit",
	filename: "src/lib/submit-audit.ts"
}, (opts) => submitAudit.__executeServer(opts));
var submitAudit = createServerFn({ method: "POST" }).validator((raw) => {
	if (!raw || typeof raw !== "object") throw new Error("Invalid form");
	const d = raw;
	const first = str(d.first);
	const last = str(d.last);
	const email = str(d.email);
	const phone = str(d.phone);
	const company = str(d.company);
	const industry = str(d.industry) || "other";
	const revenue = str(d.revenue);
	if (!first || !last) throw new Error("Name is required");
	if (!company) throw new Error("Company is required");
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Valid email is required");
	if (phone.replace(/\D/g, "").length < 10) throw new Error("Valid phone is required");
	if (!REVENUE_OPTIONS.some((r) => r.value === revenue)) throw new Error("Select annual revenue");
	return {
		first,
		last,
		email,
		phone,
		company,
		industry,
		industryLabel: INDUSTRIES.find((i) => i.slug === industry)?.name || "Other",
		revenue,
		revenueLabel: REVENUE_OPTIONS.find((r) => r.value === revenue)?.label || revenue,
		website: str(d.website),
		utmSource: str(d.utmSource),
		utmMedium: str(d.utmMedium),
		utmCampaign: str(d.utmCampaign)
	};
}).handler(submitAudit_createServerFn_handler, async ({ data }) => {
	const { upsertAuditContact } = await import("./ghl.server-DGHLKpaa.mjs");
	try {
		return await upsertAuditContact(data);
	} catch {
		throw new Error("Could not send the audit request. Try again in a minute.");
	}
});
var qualifyAudit_createServerFn_handler = createServerRpc({
	id: "43ac094156d8d5b04d182baf24589862a219a9ca92accf85c6d75e51859b1f7b",
	name: "qualifyAudit",
	filename: "src/lib/submit-audit.ts"
}, (opts) => qualifyAudit.__executeServer(opts));
var qualifyAudit = createServerFn({ method: "POST" }).validator((raw) => {
	if (!raw || typeof raw !== "object") throw new Error("Invalid form");
	const d = raw;
	const email = str(d.email);
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Valid email is required");
	return {
		email,
		website: str(d.website),
		employees: str(d.employees),
		locations: str(d.locations),
		software: str(d.software),
		pain: str(d.pain),
		help: str(d.help)
	};
}).handler(qualifyAudit_createServerFn_handler, async ({ data }) => {
	const { qualifyAuditContact } = await import("./ghl.server-DGHLKpaa.mjs");
	try {
		return await qualifyAuditContact(data);
	} catch {
		throw new Error("Could not save those details. You are still on the list.");
	}
});
var WORKSHOP_AUDIENCES = [
	{
		value: "trade-association",
		label: "Trade association"
	},
	{
		value: "franchise",
		label: "Franchise group"
	},
	{
		value: "pe-portfolio",
		label: "PE portfolio"
	},
	{
		value: "chamber",
		label: "Chamber of commerce"
	},
	{
		value: "peer-group",
		label: "Peer group"
	},
	{
		value: "software-user-group",
		label: "Software user group"
	},
	{
		value: "owner-org",
		label: "Business-owner organization"
	},
	{
		value: "other",
		label: "Other"
	}
];
var submitWorkshop_createServerFn_handler = createServerRpc({
	id: "4c33c5be5d9ca3fc96550a0722a86a95aca5837abfcd14fca95206844db116fe",
	name: "submitWorkshop",
	filename: "src/lib/submit-audit.ts"
}, (opts) => submitWorkshop.__executeServer(opts));
var submitWorkshop = createServerFn({ method: "POST" }).validator((raw) => {
	if (!raw || typeof raw !== "object") throw new Error("Invalid form");
	const d = raw;
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
		notes: str(d.notes)
	};
}).handler(submitWorkshop_createServerFn_handler, async ({ data }) => {
	const { upsertWorkshopContact } = await import("./ghl.server-DGHLKpaa.mjs");
	try {
		return await upsertWorkshopContact(data);
	} catch {
		throw new Error("Could not send the request. Try again in a minute.");
	}
});
//#endregion
export { qualifyAudit_createServerFn_handler, submitAudit_createServerFn_handler, submitWorkshop_createServerFn_handler };
