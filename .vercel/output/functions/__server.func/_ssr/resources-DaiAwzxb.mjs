import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ArrowRight } from "../_libs/lucide-react.mjs";
import { o as BLOG_POSTS, p as PODCASTS, u as GUIDES } from "./router-D5iiC1sJ.mjs";
import { n as PageHero, r as SectionHead } from "./page-hero-CWkbZTkk.mjs";
import { n as FinalCtaBlock } from "./inner-CMG97LAd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-DaiAwzxb.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Insights",
			title: "Podcasts, guides & resources",
			body: "The OpsKings Insights hub: long-form podcasts with mid-market operators, operational guides on Gumroad, and case studies from 130+ engagements."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, { title: "Unfiltered conversations with operators." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3",
				children: PODCASTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/podcast/$slug",
					params: { slug: p.slug },
					className: "group overflow-hidden rounded-2xl border border-fg/10 bg-surface transition-colors hover:border-gold/30",
					children: ["img" in p && p.img ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.img,
						alt: p.name,
						className: "aspect-video w-full object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex aspect-video items-center justify-center bg-linear-to-br from-gold/20 to-transparent text-gold",
						children: p.minutes
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-bold tracking-widest text-gold uppercase",
								children: p.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mt-2 text-xl font-medium text-fg",
								children: [
									p.name,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-fg/40",
										children: p.minutes
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm font-light text-fg/55",
								children: p.excerpt
							})
						]
					})]
				}, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: "Free Guides",
				title: "Pulled straight from client engagements.",
				body: "Seven free guides we wrote for our own clients. No email required for most. Downloads open on Gumroad in a new tab."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2",
				children: GUIDES.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: g.href,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "rounded-2xl border border-fg/10 bg-surface p-8 transition-colors hover:border-gold/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-bold tracking-widest text-gold uppercase",
							children: "Free Guide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-xl font-medium text-fg",
							children: g.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-light text-fg/60",
							children: g.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold",
							children: ["Get it on Gumroad ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				}, g.href))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "blog",
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: "Blog",
				title: "Tactical breakdowns from the field.",
				body: "Operations problems we’ve solved. How we mapped them. What we built. What we’d do differently."
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
