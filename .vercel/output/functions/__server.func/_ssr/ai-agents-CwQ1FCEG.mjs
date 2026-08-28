import { h as WORKFLOWS, t as AGENT_CATEGORIES } from "./site-BWEzcE1b.mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as RevealSection } from "./router-DEkOF6vF.mjs";
import { n as PageHero, r as SectionHead } from "./page-hero-DYdDYaeP.mjs";
import { i as InfoCard, n as FinalCtaBlock, t as CardGrid } from "./inner-BLN76_Pm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-agents-CwQ1FCEG.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "AI Agents",
			title: "AI agents with actual jobs inside your business.",
			body: "Each agent is responsible for a specific workflow — monitoring information, following up, preparing reports, coordinating across systems, or escalating exceptions to your team. They don't just answer questions. They continuously work the processes they're responsible for.",
			primary: {
				to: "/audit",
				label: "Get Your Free AI Operations Audit"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "What an agent is",
				body: "An AI agent is a software worker with a defined responsibility, access to specific systems, and rules governing what it can do automatically versus what requires approval."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardGrid, {
				cols: "md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: "Reads your systems",
						body: "CRM, shop or field software, ads, inbox, calendar. Only the records you approve."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: "Does approved work",
						body: "Draft a message. Log a note. Assemble a report. Alert a person. What it can send without you is a permission."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: "Hands off when it should",
						body: "Money, promises, and messy judgment stay with people."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "Example paths",
				body: "Yours will differ. That is the point."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardGrid, { children: WORKFLOWS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				title: w.title,
				body: w.steps.join(" → ")
			}, w.title)) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "Put AI to work across the business.",
				body: "Agents can handle repetitive work across sales, operations, customer experience, marketing, and management — while your team keeps the decisions that require judgment."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardGrid, {
				cols: "md:grid-cols-2 lg:grid-cols-5",
				children: AGENT_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: c.title,
					body: c.items.join(". ") + "."
				}, c.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaBlock, {
			title: "See which agents would actually help.",
			body: "The goal isn't more agents. It's fewer manual bottlenecks."
		})
	] });
}
//#endregion
export { Page as component };
