import { d as PILLARS } from "./site-BWEzcE1b.mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as RevealSection } from "./router-DEkOF6vF.mjs";
import { n as PageHero, r as SectionHead } from "./page-hero-DYdDYaeP.mjs";
import { i as InfoCard, n as FinalCtaBlock, t as CardGrid } from "./inner-BLN76_Pm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-implementation-DDNhlv1h.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "AI Implementation",
			title: "Custom AI implementation, built around your existing operation.",
			body: "From workflow discovery and systems integration to agent development, permissions, testing, and deployment — Cortex handles the complete implementation. You don't need to hire an internal AI engineering team or replace the software your business already depends on.",
			primary: {
				to: "/audit",
				label: "Get Your Free AI Operations Audit"
			},
			secondary: {
				to: "/how-we-work",
				label: "See How It Works"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "What the project includes",
				body: "A defined implementation. Then Managed AI Operations if you want us to keep the system reliable."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardGrid, {
				cols: "md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						kicker: "01",
						title: "Audit workflows",
						body: "Software stack, repetitive work, follow-up, reporting, stalls. Highest-value paths first."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						kicker: "02",
						title: "Design the architecture",
						body: "Which agents, which systems, what they may do without a person, what needs approval."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						kicker: "03",
						title: "Connect and build",
						body: "CRM, shop or field software, ads, inbox, phone, documents. Agents around those paths."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						kicker: "04",
						title: "Test, deploy, train",
						body: "Permissions, evaluations, and the people who will work next to the agents."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "The sequence",
				body: "Audit. Design. Build. Deploy. Manage."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardGrid, {
				cols: "md:grid-cols-2 lg:grid-cols-5",
				children: PILLARS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					kicker: `${p.num} · ${p.kicker}`,
					title: p.title,
					body: p.body
				}, p.num))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, { title: "How we scope the work" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardGrid, {
				cols: "md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: "Keep your systems of record",
						body: "We connect to the software you already run. Availability is confirmed in the audit."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: "Start with one or two paths",
						body: "Estimate follow-up and the daily operating summary beat a 40-agent fantasy."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: "Scoped around the actual implementation",
						body: "Every deployment is different. Pricing is based on the systems involved, number and complexity of workflows, infrastructure requirements, and level of ongoing management. Most clients begin with a defined implementation project followed by optional Managed AI Operations."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaBlock, {})
	] });
}
//#endregion
export { Page as component };
