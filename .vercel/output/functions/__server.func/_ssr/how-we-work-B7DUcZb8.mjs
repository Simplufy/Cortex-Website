import { d as PILLARS, m as WHAT_WE_DO } from "./site-BWEzcE1b.mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as RevealSection } from "./router-DEkOF6vF.mjs";
import { n as PageHero, r as SectionHead } from "./page-hero-DYdDYaeP.mjs";
import { i as InfoCard, n as FinalCtaBlock, t as CardGrid } from "./inner-BLN76_Pm.mjs";
import { t as DashboardShowcase } from "./operator-board-BIx9HmoP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/how-we-work-B7DUcZb8.js
var import_jsx_runtime = require_jsx_runtime();
function HowWeWorkPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "How we work",
			title: "Understand the operation first. Then automate it.",
			body: "We start by mapping how work actually moves through your business. From there, we identify the highest-value opportunities, design the system, connect the software, deploy the agents, and measure how they perform. A secure dashboard is included in the same build.",
			primary: {
				to: "/audit",
				label: "Get Your Free AI Operations Audit"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, {
			className: "border-t border-fg/5 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-3",
				children: [
					["Start with an audit", "software, repetitive work, stalls"],
					["Keep your systems", "agents work across them. The dashboard is included"],
					["Your team keeps judgment", "agents take the repetitive path"]
				].map(([t, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xl font-medium text-fg",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-sm text-fg/50",
						children: b
					})]
				}, t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: "The work",
				title: "Audit. Design. Build. Deploy. Manage.",
				body: "We understand the operation before we automate it. Every deployment starts by finding the highest-value work AI can realistically handle."
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
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: "Included",
				title: "A secure dashboard for the numbers that used to hide in five logins.",
				body: "When we install the agents, you get one private board. Operations, marketing, finance, the shops. Pulled from the software you already run."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardShowcase, {})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, { title: "What you walk away with after the first project" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardGrid, {
				cols: "md:grid-cols-2 lg:grid-cols-5",
				children: WHAT_WE_DO.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: w.title,
					body: w.body
				}, w.num))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaBlock, {})
	] });
}
//#endregion
export { HowWeWorkPage as component };
