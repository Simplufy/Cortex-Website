import { r as CASE_STUDIES } from "./site-BWEzcE1b.mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Mail } from "../_libs/lucide-react.mjs";
import { m as BRAND, o as RevealSection, s as FounderPhoto } from "./router-DEkOF6vF.mjs";
import { n as PageHero, r as SectionHead } from "./page-hero-DYdDYaeP.mjs";
import { n as FinalCtaBlock } from "./inner-BLN76_Pm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-us-BTLpaGL-.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const study = CASE_STUDIES[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About",
			title: "We believe the next major productivity leap won't come from adding more software.",
			body: "It will come from giving the software businesses already use the ability to monitor, reason, coordinate, and act.",
			primary: {
				to: "/audit",
				label: "Get Your Free AI Operations Audit"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed font-light text-fg/70",
						children: "Service businesses have spent the last decade digitizing their operations. They have CRMs, field-service platforms, accounting systems, ad platforms, communication tools, and industry-specific software."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg leading-relaxed font-light text-fg/70",
						children: "Yet people still perform much of the work between those systems manually."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg leading-relaxed font-medium text-fg",
						children: "Cortex was built to solve that layer."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg leading-relaxed font-light text-fg/70",
						children: "We design custom AI systems that work across a company's existing operation — helping teams follow up faster, catch problems earlier, reduce repetitive administrative work, and make better use of the software they already own."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: `${BRAND.founder}`,
				body: `${BRAND.founderRole}, ${BRAND.name}`
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-3xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-fg/10 bg-surface p-8 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FounderPhoto, { className: "size-24 ring-gold/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-4 text-sm leading-relaxed font-light text-fg/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "McGuire's background spans digital marketing, CRM architecture, automation, software integration, and applied AI systems for service businesses." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cortex grew out of working directly inside operational businesses and seeing the same problem repeatedly: companies had plenty of software, but their people were still manually coordinating everything between it." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Today the focus is building practical AI infrastructure around real business workflows — including private local AI systems, cloud models, specialized agents, and integrations with the software companies already depend on." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "One of Cortex's earliest deployments connects AI agents across multiple automotive service businesses, including shop-management, CRM, advertising, reputation, and internal operating systems." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${BRAND.email}`,
								className: "inline-flex items-center gap-2 text-sm text-fg/70 hover:text-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), BRAND.email]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/case-studies/$slug",
								params: { slug: study.slug },
								className: "text-sm font-medium text-gold hover:text-gold-light",
								children: "View the deployment"
							})]
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: "How we work",
				title: "Audit. Design. Build. Deploy. Manage.",
				body: "Understand the operation first. Then automate it."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-5",
				children: [
					["Audit", "Before we build"],
					["Design", "The system"],
					["Build", "Existing software"],
					["Deploy", "Approvals included"],
					["Manage", "After it is live"]
				].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-3xl font-medium text-gold",
						children: n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-xs tracking-wide text-fg/50 uppercase",
						children: l
					})]
				}, n))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaBlock, {})
	] });
}
//#endregion
export { AboutPage as component };
