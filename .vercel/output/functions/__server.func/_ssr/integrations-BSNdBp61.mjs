import { a as CONNECT_TOOLS, u as INTEGRATION_GROUPS } from "./site-BWEzcE1b.mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as RevealSection } from "./router-DEkOF6vF.mjs";
import { n as PageHero, r as SectionHead } from "./page-hero-DYdDYaeP.mjs";
import { n as FinalCtaBlock } from "./inner-BLN76_Pm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/integrations-BSNdBp61.js
var import_jsx_runtime = require_jsx_runtime();
function logoFor(name) {
	return CONNECT_TOOLS.find((t) => t.name === name)?.file;
}
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Integrations",
			title: "Connect AI to the software your business already runs.",
			body: "Cortex agents work across the systems your team already relies on. What we can reach is confirmed in the audit — not promised by a logo."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "How we connect",
				body: "Official APIs first. Then approved integrations, webhooks, and MCP where a vendor supports them. Controlled browser automation only when there is no usable API and the work still needs to happen."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-2 lg:grid-cols-3",
				children: [
					["Official APIs", "The preferred path. Scoped credentials. Least privilege."],
					["Approved integrations", "Vendor-supported connectors when they exist and they are enough."],
					["Webhooks", "Event-driven updates from systems that can push a change when work moves."],
					["MCP where available", "When a vendor ships a usable model-context path, we evaluate it the same way we evaluate an API."],
					["Controlled browser automation", "Last resort. Dedicated login you authorize. Same logging. Same off switch."]
				].map(([t, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-fg/10 bg-surface p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-medium text-fg",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed font-light text-fg/60",
						children: b
					})]
				}, t))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					title: "Systems we commonly evaluate",
					body: "Every integration is evaluated individually. A product appearing here means it is relevant to businesses we serve, not that Cortex has a certified or unrestricted integration with that vendor."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl space-y-10 px-6",
					children: INTEGRATION_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-medium text-fg",
						children: group.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
						children: group.items.map((name) => {
							const file = logoFor(name);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 rounded-xl border border-fg/10 bg-surface px-4 py-3",
								children: [file ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: `/images/logos/${file}`,
									alt: "",
									width: 28,
									height: 28,
									className: "size-7 object-contain"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-7 rounded bg-fg/10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-fg/80",
									children: name
								})]
							}, name);
						})
					})] }, group.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-12 max-w-3xl px-6 text-center text-sm text-fg/45",
					children: "Named tools are examples. Access depends on APIs, vendor policy, and what you authorize. We do not replace these systems."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/case-studies",
						className: "text-sm font-medium text-gold hover:text-gold-light",
						children: "See a real stack in production"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaBlock, {})
	] });
}
//#endregion
export { Page as component };
