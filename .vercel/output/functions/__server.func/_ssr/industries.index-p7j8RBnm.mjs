import { _ as industryParam, l as INDUSTRIES } from "./site-BWEzcE1b.mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as ArrowRight } from "../_libs/lucide-react.mjs";
import { o as RevealSection } from "./router-DEkOF6vF.mjs";
import { n as PageHero, r as SectionHead } from "./page-hero-DYdDYaeP.mjs";
import { n as FinalCtaBlock } from "./inner-BLN76_Pm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries.index-p7j8RBnm.js
var import_jsx_runtime = require_jsx_runtime();
function IndustriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Industries",
			title: "Built for the software and workflows your industry actually uses.",
			body: "Automotive shops don't operate like HVAC companies. HVAC companies don't operate like roofers. We build around the systems, workflows, and bottlenecks specific to your industry."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
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
							to: "/industries/$slug",
							params: { slug: industryParam(ind) },
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
