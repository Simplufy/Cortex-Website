import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Mail, s as Linkedin } from "../_libs/lucide-react.mjs";
import { m as TEAM } from "./router-D5iiC1sJ.mjs";
import { n as PageHero, r as SectionHead } from "./page-hero-CWkbZTkk.mjs";
import { n as FinalCtaBlock } from "./inner-CMG97LAd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-us--b9TxXvw.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About Us",
			title: "About OpsKings, strategy and software for mid-market companies",
			body: "OpsKings is an operations and software firm. Strategy, custom development, and AI automation in one team. We’ve done it 130+ times across 12 industries. Marketing agencies, manufacturing, financial services, healthcare, logistics, and a few more."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					title: "The gap between freelancers and Big 4 consulting",
					body: "There’s a gap in the market nobody was filling. Companies doing $5M to $100M have three options when their operations can’t keep up with growth, and none of them really work."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-3",
					children: [
						["Freelancers", "Cheap, fast, unreliable. One person holding the keys to your entire operation is a liability."],
						["Big 4 firms", "Six figures for a strategy deck that sits in a drawer."],
						["An internal team", "Hundreds of thousands a year before anyone has built anything."]
					].map(([t, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-fg/10 bg-surface p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-medium text-fg",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-light text-fg/60",
							children: b
						})]
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-12 max-w-3xl px-6 text-center text-lg font-light text-fg/70",
					children: "We built OpsKings to be the fourth option. The stability and infrastructure of a serious company. The speed of a small team that actually ships. Strategy and execution under one roof. We have a physical office and a team across the US, Canada, and the UK."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					title: "Our team",
					body: "The founders behind OpsKings. Strategy people who understand technology. Builders who understand business. One team, no handoffs."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mb-16 grid max-w-5xl gap-10 px-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Founder, {
						img: "/images/team/toni-debelic.webp",
						name: "Toni Debelić",
						role: "Co-Founder & Managing Partner",
						body: "Toni runs the operations side of every engagement. He spent years running multiple businesses. Some that worked. Some that didn’t. Then he realized no-code tools could give any $5M to $100M company its own operating system without paying enterprise license money. That realization became OpsKings. Based in New York. Talks ops at @TheOpsKing.",
						links: [
							["https://www.linkedin.com/in/toni-debelic/", "LinkedIn"],
							["https://x.com/TheOpsKing", "X"],
							["mailto:toni@opskings.com", "Email"]
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Founder, {
						img: "/images/team/ryan-hildebrandt.webp",
						name: "Ryan Hildebrandt",
						role: "Co-Founder & Managing Partner",
						body: "Ryan leads the technical build side of OpsKings. Mechatronics engineer out of Waterloo. TEDx speaker. Ironman. Spent years automating billion-dollar manufacturing companies before quitting to do the same thing for founders who actually feel the pain. Every system his team ships is custom-built on the modern AI stack, and clients own the IP.",
						links: [
							["https://www.linkedin.com/in/rmhildebrandt/", "LinkedIn"],
							["https://x.com/RMHildebrandt", "X"],
							["mailto:ryan@opskings.com", "Email"]
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 sm:grid-cols-3 lg:grid-cols-4",
					children: TEAM.filter((m) => !["toni-debelic", "ryan-hildebrandt"].includes(m.slug)).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: m.img,
								alt: m.name,
								className: "mx-auto h-24 w-24 rounded-full object-cover ring-1 ring-gold/20"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-sm font-medium text-fg",
								children: m.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-fg/40",
								children: m.role
							})
						]
					}, m.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: "Mission & Values",
				title: "Operational advantage, through systems.",
				body: "Strategy first, technology second. No theater, no decks that collect dust. We build parallel systems so nothing breaks. Strategy and engineering in one team, no handoffs."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4",
				children: [
					["130+", "Engagements Completed"],
					["12", "Industries Served"],
					["40+", "Video Testimonials"],
					["US · CA · UK", "Global Team"]
				].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-3xl font-medium text-gold",
						children: n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-xs tracking-wide text-fg/50 uppercase",
						children: l
					})]
				}, l))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaBlock, {})
	] });
}
function Founder({ img, name, role, body, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-2xl border border-fg/10 bg-surface p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img,
				alt: name,
				className: "h-20 w-20 rounded-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-2xl font-medium text-fg",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-gold",
				children: role
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed font-light text-fg/60",
				children: body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex gap-3 text-fg/40",
				children: links.map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "hover:text-gold",
					"aria-label": label,
					children: label === "Email" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "size-4" })
				}, href))
			})
		]
	});
}
//#endregion
export { AboutPage as component };
