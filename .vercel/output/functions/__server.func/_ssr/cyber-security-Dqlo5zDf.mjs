import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHero, r as SectionHead } from "./page-hero-CWkbZTkk.mjs";
import { i as InfoCard, n as FinalCtaBlock, t as CardGrid } from "./inner-CMG97LAd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cyber-security-Dqlo5zDf.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Cybersecurity",
			title: "Identity, email, compliance — actually implemented",
			body: "We secure the systems modern companies actually run on. Identity, email, DNS, devices, compliance. Not a binder. Not a pitch deck. The work.",
			primary: {
				to: "/book-a-call",
				label: "Book a Call"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, { title: "What we lock down" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardGrid, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "Identity & access",
					body: "SSO, MFA, least privilege, offboarding that actually revokes access the same day someone leaves."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "Email & domain",
					body: "SPF, DKIM, DMARC, mailbox rules, and the phishing paths that still get through."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "Devices",
					body: "The laptops and phones that hold the business. Inventory, encryption, remote wipe."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "Compliance that isn’t theater",
					body: "Evidence generated as work happens. Reviews on a calendar. An audit trail you can hand over."
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "How we work it",
				body: "Security is part of the same team that maps and builds the operation — not a vendor bolted on at the end."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardGrid, {
				cols: "md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						kicker: "01",
						title: "Assess",
						body: "Where identity, email, and devices actually stand. Highest-risk gaps first."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						kicker: "02",
						title: "Harden",
						body: "The controls that matter for a $5M–$100M company. Implemented, not recommended."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						kicker: "03",
						title: "Operate",
						body: "Reviews, offboarding, and evidence that keep pace with the business."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaBlock, {})
	] });
}
//#endregion
export { Page as component };
