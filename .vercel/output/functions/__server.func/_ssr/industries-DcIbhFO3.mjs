import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as INDUSTRIES } from "./router-D5iiC1sJ.mjs";
import { n as PageHero, r as SectionHead } from "./page-hero-CWkbZTkk.mjs";
import { n as FinalCtaBlock } from "./inner-CMG97LAd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-DcIbhFO3.js
var import_jsx_runtime = require_jsx_runtime();
function IndustriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Industries",
			title: "Operations consulting by industry",
			body: "Same problems. Different language. We speak all of them. Custom systems and ops consulting for marketing agencies, professional services, manufacturing, recruiting, financial services, home services, and logistics."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "pt-8 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, { title: "Where we work" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-5xl space-y-16 px-6",
				children: INDUSTRIES.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border-t border-fg/5 pt-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-medium tracking-tight text-fg",
							children: ind.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-3xl text-lg leading-relaxed font-light text-fg/60",
							children: ind.intro
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: ind.href,
							className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light",
							children: [
								"See ",
								ind.name,
								" page",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
							]
						})
					]
				}, ind.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaBlock, {})
	] });
}
//#endregion
export { IndustriesPage as component };
