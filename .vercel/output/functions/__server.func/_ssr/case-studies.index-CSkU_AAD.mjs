import { r as CASE_STUDIES } from "./site-BWEzcE1b.mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as RevealSection } from "./router-DEkOF6vF.mjs";
import { n as PageHero } from "./page-hero-DYdDYaeP.mjs";
import { n as FinalCtaBlock } from "./inner-BLN76_Pm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/case-studies.index-CSkU_AAD.js
var import_jsx_runtime = require_jsx_runtime();
function Listing() {
	const study = CASE_STUDIES[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Case Study",
			title: "One real deployment. Not a gallery of examples.",
			body: "Detail Driven Enterprises in Jackson Hole. Repair, collision, detailing, and glass. Agents on the leftover work. The build included a secure dashboard for operations, marketing, finance, and the shops — on the software they already ran.",
			primary: {
				to: "/audit",
				label: "Get Your Free AI Operations Audit"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, {
			className: "pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-3xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/case-studies/$slug",
					params: { slug: study.slug },
					className: "block rounded-2xl border border-fg/10 bg-surface p-8 transition-colors hover:border-gold/40 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-bold tracking-widest text-gold uppercase",
							children: study.industry
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl font-medium tracking-tight text-fg",
							children: study.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-fg/60",
							children: study.result
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid gap-2 text-sm text-fg/70 sm:grid-cols-2",
							children: study.facts.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" }), f]
							}, f))
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaBlock, { title: "Want this shape inside your operation?" })
	] });
}
//#endregion
export { Listing as component };
