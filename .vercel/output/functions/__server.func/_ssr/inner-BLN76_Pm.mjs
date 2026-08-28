import { _ as industryParam, l as INDUSTRIES } from "./site-BWEzcE1b.mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as BeamButton, o as RevealSection } from "./router-DEkOF6vF.mjs";
import { n as PageHero, r as SectionHead, t as Eyebrow } from "./page-hero-DYdDYaeP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inner-BLN76_Pm.js
var import_jsx_runtime = require_jsx_runtime();
function FinalCtaBlock({ title = "Find the highest-value work AI can take off your team.", body = "Start with a Free AI Operations Audit. We'll show you what is worth automating, what isn't, and what a practical first deployment could look like." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, {
		className: "relative py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-balance text-3xl font-medium tracking-tight text-fg md:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg font-light text-fg/60",
					children: body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeamButton, {
						to: "/audit",
						children: "Get Your Free AI Operations Audit"
					})
				})
			]
		})
	});
}
function IndustryPage({ industry }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: industry.name,
			titleNode: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-balance text-4xl leading-[1.1] font-medium tracking-tighter text-fg sm:text-5xl md:text-6xl lg:text-7xl",
				children: [
					industry.hero[0],
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: industry.hero[1]
					})
				]
			}),
			body: industry.intro,
			primary: {
				to: "/audit",
				label: "Get Your Free AI Operations Audit"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, {
			className: "border-t border-fg/5 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The operating reality" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xl font-medium tracking-tight text-fg md:text-3xl",
					children: industry.quote
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "Does this sound familiar?",
				body: "The stalls we hear in this trade every week."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2",
				children: industry.symptoms.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-fg/10 bg-surface p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-medium text-fg",
						children: s.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed font-light text-fg/60",
						children: s.body
					})]
				}, s.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "What agents can watch",
				body: "Examples. Your list comes from the audit, not a template."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2",
				children: industry.systems.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-fg/10 bg-surface p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-medium text-fg",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed font-light text-fg/60",
							children: s.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-2 text-sm text-fg/70",
							children: s.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" }), it]
							}, it))
						})
					]
				}, s.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					title: "Built to work with the software your industry already uses.",
					body: `Examples of systems we commonly evaluate for integration. ${industry.software.intro}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2",
					children: industry.software.groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-fg/10 bg-surface p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-medium text-fg",
							children: g.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: g.tools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-fg/10 bg-bg px-3 py-1 text-xs text-fg/70",
								children: t
							}, t))
						})]
					}, g.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-8 max-w-3xl px-6 text-center text-sm text-fg/40",
					children: "Named tools are examples we see in this trade, not a certified integration list. What we can connect depends on APIs, vendor access, and the audit. We do not replace these systems."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "How we install it",
				body: "Audit. Design. Build. Deploy. Manage. Your existing software stays in place."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2 lg:grid-cols-5",
				children: [
					[
						"01 / AUDIT",
						"Understand the operation",
						"Software stack, repetitive paths, follow-up that depends on memory."
					],
					[
						"02 / DESIGN",
						"Design the system",
						"Which agents, which systems, what they may do, and what requires a person."
					],
					[
						"03 / BUILD",
						"Connect and build",
						"Agents around those paths, connected to the tools you already use."
					],
					[
						"04 / DEPLOY",
						"Test with your team",
						"Permissions, approvals, testing."
					],
					[
						"05 / MANAGE",
						"Keep it reliable",
						"Monitoring, connectors, improvements."
					]
				].map(([k, t, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-fg/10 bg-surface p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 text-[10px] font-bold tracking-widest text-gold",
							children: k
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium text-fg",
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm font-light text-fg/55",
							children: b
						})
					]
				}, k))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OtherIndustries, { current: industry.slug }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaBlock, {})
	] });
}
function OtherIndustries({ current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "border-t border-fg/5 pt-24 pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, { title: "Other industries we serve" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-5xl flex-wrap justify-center gap-3 px-6",
			children: INDUSTRIES.filter((i) => i.slug !== current).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/industries/$slug",
				params: { slug: industryParam(i) },
				className: "rounded-full border border-fg/10 bg-surface px-4 py-2 text-sm text-fg/70 hover:border-gold/40 hover:text-fg",
				children: i.name
			}, i.slug))
		})]
	});
}
function CardGrid({ children, cols = "md:grid-cols-2" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `mx-auto grid max-w-6xl gap-4 px-6 ${cols}`,
		children
	});
}
function InfoCard({ kicker, title, body, to, extra }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		kicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] font-bold tracking-widest text-gold uppercase",
			children: kicker
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-2 text-xl font-medium tracking-tight text-fg",
			children: title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm leading-relaxed font-light text-fg/60",
			children: body
		}),
		extra && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-xs text-fg/40",
			children: extra
		}),
		to && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold",
			children: ["Read more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
		})
	] });
	const cls = "rounded-2xl border border-fg/10 bg-surface p-8 transition-colors hover:border-gold/30";
	if (to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: `group block ${cls}`,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: cls,
		children: inner
	});
}
//#endregion
export { InfoCard as i, FinalCtaBlock as n, IndustryPage as r, CardGrid as t };
