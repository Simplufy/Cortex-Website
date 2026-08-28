import { n as BLOG_POSTS } from "./site-BWEzcE1b.mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as RevealSection } from "./router-DEkOF6vF.mjs";
import { n as PageHero, r as SectionHead } from "./page-hero-DYdDYaeP.mjs";
import { n as FinalCtaBlock } from "./inner-BLN76_Pm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-l8etSVU1.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Field notes",
			title: "Notes from the field",
			body: "How work actually moves in shops and trades, and what agents can watch without replacing the software you already run."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			id: "blog",
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: "Writing",
				title: "Tactical breakdowns from the field.",
				body: "Stalls we’ve mapped. How the work really moves. What we’d install first."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2",
				children: BLOG_POSTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: p.slug },
					className: "rounded-2xl border border-fg/10 bg-surface p-8 transition-colors hover:border-gold/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-bold tracking-widest text-gold uppercase",
							children: p.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-xl font-medium text-fg",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-light text-fg/60",
							children: p.excerpt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-xs text-fg/40",
							children: [
								p.author,
								" · ",
								p.date,
								" · ",
								p.minutes,
								" min read"
							]
						})
					]
				}, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaBlock, {})
	] });
}
//#endregion
export { Page as component };
