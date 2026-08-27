import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as CASE_STUDIES } from "./router-D5iiC1sJ.mjs";
import { n as PageHero, r as SectionHead } from "./page-hero-CWkbZTkk.mjs";
import { n as FinalCtaBlock } from "./inner-CMG97LAd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/case-studies.index-i3qt2DsU.js
var import_jsx_runtime = require_jsx_runtime();
function Listing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Case Studies",
			title: "Selected work",
			body: "33 builds across 12 industries. Founders describing what changed once their operations ran on systems instead of memory.",
			primary: {
				to: "/book-a-call",
				label: "Book a Call"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3",
				children: CASE_STUDIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/case-studies/$slug",
					params: { slug: c.slug },
					className: "case-card group relative flex flex-col overflow-hidden rounded-xl border border-fg/10 bg-surface transition-all hover:-translate-y-1 hover:border-gold/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex aspect-16/10 items-center justify-center bg-bg p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.logo,
							alt: c.name,
							className: "max-h-16 max-w-[70%] object-contain"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-bold tracking-widest text-gold uppercase",
								children: c.industry
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-lg font-medium text-fg",
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm font-light text-fg/55",
								children: c.result
							})
						]
					})]
				}, c.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, { title: "Words from clients" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3",
				children: CASE_STUDIES.filter((c) => [
					"sales-automation-systems",
					"growth-engine-x",
					"archon-research-group"
				].includes(c.slug)).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "rounded-2xl border border-fg/10 bg-surface p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg font-light text-fg/80",
						children: [
							"“",
							c.quote,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "mt-6 text-sm text-fg/50",
						children: [
							c.person,
							", ",
							c.role
						]
					})]
				}, c.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaBlock, { title: "Want to be the next one?" })
	] });
}
//#endregion
export { Listing as component };
