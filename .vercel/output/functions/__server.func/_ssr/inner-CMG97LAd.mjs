import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as INDUSTRIES, g as BeamButton } from "./router-D5iiC1sJ.mjs";
import { n as PageHero, r as SectionHead, t as Eyebrow } from "./page-hero-CWkbZTkk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inner-CMG97LAd.js
var import_jsx_runtime = require_jsx_runtime();
function FinalCtaBlock({ title = "Book a Call, Start With a System Design Sprint", body = "We’ll talk about what’s going on in your business, where the gaps are, and whether we’re the right fit. No pitch. No pressure. Just a conversation." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
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
						to: "/book-a-call",
						children: "Book a Call"
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
				to: "/book-a-call",
				label: "Book a Call"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-fg/5 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Industry Snapshot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-2xl font-medium tracking-tight text-fg md:text-3xl",
					children: [
						"“",
						industry.quote,
						"”"
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "Does this sound familiar?",
				body: "The operations problems we hear about every single week."
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "The operational backbone you’re missing",
				body: "Custom systems built around how you actually work, not how generic tools think you should."
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "How we work this industry",
				body: "Four phases. We start with your actual workflows, not a generic template."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-4",
				children: [
					[
						"01 / AUDIT",
						"Audit the operation",
						"Interviews, artifacts, and a map of how work actually moves."
					],
					[
						"02 / MAP",
						"Company Brain",
						"Every process, handoff, and gap in one living document."
					],
					[
						"03 / BUILD",
						"Custom system",
						"A portal designed around this industry’s real workflows."
					],
					[
						"04 / SCALE",
						"Automate & train",
						"AI on a foundation that holds. Adoption that sticks."
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-t border-fg/5 pt-24 pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, { title: "Other industries we serve" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-5xl flex-wrap justify-center gap-3 px-6",
			children: INDUSTRIES.filter((i) => i.slug !== current).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: i.href,
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
