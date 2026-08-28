import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as RevealSection } from "./router-DEkOF6vF.mjs";
import { n as PageHero, r as SectionHead } from "./page-hero-DYdDYaeP.mjs";
import { i as InfoCard, n as FinalCtaBlock, t as CardGrid } from "./inner-BLN76_Pm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/private-ai-D0kEcHIG.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Private AI Infrastructure",
			title: "Cloud, private, or hybrid AI — designed around the workload.",
			body: "Not every task needs the same model or infrastructure. Cortex can route routine work to private local models, use traditional automation where AI isn't necessary, and call powerful cloud models when a task requires them. The goal is the best balance of privacy, reliability, performance, and cost.",
			primary: {
				to: "/audit",
				label: "Get Your Free AI Operations Audit"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, { title: "Three ways to run it" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardGrid, {
				cols: "md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: "Cloud",
						body: "Fast to start. Fine for many workloads. You do not need a server room on day one."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: "Private / local",
						body: "Dedicated hardware you own or control. More privacy, more predictability, and more stable costs for work that runs continuously."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: "Hybrid",
						body: "Usually the practical answer. Local for routine jobs. Cloud when the work needs more. Rules when AI is not needed at all."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "What private hardware is for",
				body: "We design the architecture around privacy, performance, reliability, and cost — not around a specific model provider."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardGrid, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "Greater control",
					body: "More of the stack sits on infrastructure you own."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "Privacy options",
					body: "Sensitive records can stay closer to the shop."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "Predictable cost",
					body: "Reduce variable inference costs for high-volume workloads."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "Still hybrid when needed",
					body: "A hard reasoning job can still go to a capable cloud model."
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaBlock, {
			title: "The audit includes the infrastructure question.",
			body: "Cloud, private, or mixed. We'll say which fits your workloads, privacy needs, and cost."
		})
	] });
}
//#endregion
export { Page as component };
