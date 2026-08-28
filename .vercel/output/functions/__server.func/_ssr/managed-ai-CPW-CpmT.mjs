import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as RevealSection } from "./router-DEkOF6vF.mjs";
import { n as PageHero, r as SectionHead } from "./page-hero-DYdDYaeP.mjs";
import { i as InfoCard, n as FinalCtaBlock, t as CardGrid } from "./inner-BLN76_Pm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/managed-ai-CPW-CpmT.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Managed AI Operations",
			title: "AI systems are operational infrastructure. We keep yours reliable.",
			body: "Models change. APIs change. Your business changes. Managed AI Operations keeps your agents, integrations, permissions, evaluations, and workflows working as intended after deployment.",
			primary: {
				to: "/audit",
				label: "Get Your Free AI Operations Audit"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, { title: "What the monthly work is" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardGrid, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "System monitoring",
					body: "Track successful runs, failures, latency, escalations, and agent performance."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "Integration maintenance",
					body: "Maintain connections as vendors update APIs and underlying software."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "Model optimization",
					body: "Continuously evaluate the right models, prompts, tools, and routing strategies."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "Quality evaluations",
					body: "Verify outputs and agent actions against defined standards."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "Incident response",
					body: "Diagnose failures and restore affected workflows."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "Continuous improvement",
					body: "Expand or improve the system as new high-value opportunities emerge."
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "Why not staff this internally",
				body: "Most service businesses need the care. They do not need a department of AI engineers."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardGrid, {
				cols: "md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: "You still own the operation",
						body: "Your team keeps the decisions that require judgment. We keep the system current."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: "Starts after implementation",
						body: "Managed operations follows a live deployment."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: "Scoped to what is running",
						body: "You pay for the agents and workflows that are actually in production."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaBlock, {})
	] });
}
//#endregion
export { Page as component };
