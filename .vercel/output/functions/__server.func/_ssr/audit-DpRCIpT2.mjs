import { i as __toESM } from "../_runtime.mjs";
import { _ as industryParam, c as FAQS, d as PILLARS, l as INDUSTRIES, r as CASE_STUDIES } from "./site-BWEzcE1b.mjs";
import { U as require_react, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Play } from "../_libs/lucide-react.mjs";
import { c as AuditButton, m as BRAND, o as RevealSection, p as cn, s as FounderPhoto } from "./router-DEkOF6vF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/audit-DpRCIpT2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MAPS = [
	{
		nodes: [
			{
				x: 12,
				y: 42,
				label: "Call"
			},
			{
				x: 28,
				y: 22,
				label: "Write-up"
			},
			{
				x: 46,
				y: 18,
				label: "Approve"
			},
			{
				x: 64,
				y: 22,
				label: "Parts"
			},
			{
				x: 82,
				y: 38,
				label: "Bay"
			},
			{
				x: 70,
				y: 62,
				label: "QC"
			},
			{
				x: 48,
				y: 72,
				label: "Invoice"
			},
			{
				x: 26,
				y: 66,
				label: "Follow-up"
			},
			{
				x: 50,
				y: 44,
				label: "Cortex"
			}
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
			[5, 6],
			[6, 7],
			[8, 1],
			[8, 3],
			[8, 4],
			[8, 6]
		]
	},
	{
		nodes: [
			{
				x: 14,
				y: 30,
				label: "Intake"
			},
			{
				x: 32,
				y: 18,
				label: "Dispatch"
			},
			{
				x: 54,
				y: 16,
				label: "Membership"
			},
			{
				x: 76,
				y: 28,
				label: "Install"
			},
			{
				x: 84,
				y: 54,
				label: "Start-up"
			},
			{
				x: 62,
				y: 72,
				label: "Warranty"
			},
			{
				x: 36,
				y: 70,
				label: "Callback"
			},
			{
				x: 18,
				y: 54,
				label: "Capacity"
			},
			{
				x: 48,
				y: 44,
				label: "Cortex"
			}
		],
		edges: [
			[0, 1],
			[1, 2],
			[1, 3],
			[3, 4],
			[4, 5],
			[5, 6],
			[7, 1],
			[8, 1],
			[8, 2],
			[8, 3],
			[8, 5]
		]
	},
	{
		nodes: [
			{
				x: 16,
				y: 24,
				label: "Call"
			},
			{
				x: 38,
				y: 16,
				label: "Emergency"
			},
			{
				x: 62,
				y: 16,
				label: "Booked"
			},
			{
				x: 84,
				y: 32,
				label: "On-call"
			},
			{
				x: 78,
				y: 58,
				label: "Price book"
			},
			{
				x: 52,
				y: 76,
				label: "Complete"
			},
			{
				x: 26,
				y: 64,
				label: "Invoice"
			},
			{
				x: 48,
				y: 44,
				label: "Cortex"
			}
		],
		edges: [
			[0, 1],
			[0, 2],
			[0, 3],
			[1, 4],
			[2, 4],
			[4, 5],
			[5, 6],
			[7, 1],
			[7, 2],
			[7, 4],
			[7, 5]
		]
	},
	{
		nodes: [
			{
				x: 14,
				y: 36,
				label: "Survey"
			},
			{
				x: 32,
				y: 18,
				label: "Estimate"
			},
			{
				x: 54,
				y: 16,
				label: "Won"
			},
			{
				x: 74,
				y: 28,
				label: "Permit"
			},
			{
				x: 86,
				y: 52,
				label: "Material"
			},
			{
				x: 68,
				y: 74,
				label: "Change order"
			},
			{
				x: 40,
				y: 72,
				label: "Inspect"
			},
			{
				x: 20,
				y: 58,
				label: "Close"
			},
			{
				x: 50,
				y: 44,
				label: "Cortex"
			}
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
			[5, 6],
			[6, 7],
			[8, 1],
			[8, 3],
			[8, 5],
			[8, 6]
		]
	},
	{
		nodes: [
			{
				x: 14,
				y: 28,
				label: "Lead"
			},
			{
				x: 34,
				y: 16,
				label: "Adjuster"
			},
			{
				x: 56,
				y: 16,
				label: "Funded"
			},
			{
				x: 78,
				y: 28,
				label: "Produce"
			},
			{
				x: 86,
				y: 54,
				label: "Dry-in"
			},
			{
				x: 68,
				y: 74,
				label: "Final"
			},
			{
				x: 42,
				y: 74,
				label: "Collect"
			},
			{
				x: 20,
				y: 54,
				label: "File"
			},
			{
				x: 50,
				y: 44,
				label: "Cortex"
			}
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
			[5, 6],
			[6, 7],
			[8, 0],
			[8, 2],
			[8, 3],
			[8, 6]
		]
	}
];
function CortexMap({ variant = 0, className }) {
	const map = MAPS[variant % MAPS.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative aspect-video overflow-hidden bg-bg", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 100 90",
			className: "h-full w-full",
			"aria-hidden": true,
			children: [map.edges.map(([a, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: map.nodes[a].x,
				y1: map.nodes[a].y,
				x2: map.nodes[b].x,
				y2: map.nodes[b].y,
				stroke: "currentColor",
				className: "text-gold/35",
				strokeWidth: "0.35"
			}, i)), map.nodes.map((n, i) => {
				const core = n.label === "Cortex";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: n.x,
					cy: n.y,
					r: core ? 4.2 : 2.1,
					className: core ? "fill-gold" : "fill-gold/80"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: n.x,
					y: n.y + (core ? 8.5 : 6.2),
					textAnchor: "middle",
					className: "fill-fg",
					style: {
						fontSize: core ? 3.2 : 2.6,
						fontWeight: core ? 600 : 400
					},
					children: n.label
				})] }, n.label);
			})]
		})
	});
}
function AuditLanding() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProofStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problem, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditWhat, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Method, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Industries, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Founder, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Final, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "mx-auto max-w-5xl px-6 pt-6 pb-12 text-center lg:pt-8 lg:pb-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-[10px] font-bold tracking-[0.22em] text-gold uppercase",
				children: BRAND.legal
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-balance text-4xl leading-[1.08] font-medium tracking-tighter text-fg sm:text-5xl",
				children: "Find out what AI could actually take off your team."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-4 max-w-2xl text-base leading-relaxed font-light text-fg/60 sm:text-lg",
				children: "We'll review how work moves through your business, the software you already use, and where your people are still doing repetitive work manually. You'll leave with a prioritized AI opportunity map — whether you hire Cortex or not."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-col items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditButton, { children: "Get My Free AI Operations Audit" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-fg/50",
				children: "For established service businesses. No obligation to implement anything."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-10 max-w-2xl overflow-visible",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-[10px] font-bold tracking-[0.22em] text-gold uppercase",
					children: "See what a real AI system looks like inside a service business"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VslPlayer, {})]
			})
		]
	});
}
function VslPlayer() {
	const videoRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const play = () => {
		const v = videoRef.current;
		if (!v) return;
		v.muted = false;
		v.play();
		setPlaying(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "vsl-frame",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "vsl-glow-core",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "vsl-glow-orbit",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-2xl border border-gold/30 bg-surface vsl-rim",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					ref: videoRef,
					className: "aspect-video w-full object-cover",
					poster: BRAND.vslPoster,
					src: BRAND.vslSrc,
					playsInline: true,
					preload: "metadata",
					controls: playing,
					onPlay: () => setPlaying(true),
					onPause: () => setPlaying(false),
					onEnded: () => setPlaying(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("track", {
						kind: "captions",
						srcLang: "en",
						label: "English",
						src: "/videos/vsl.vtt"
					})
				}), !playing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: play,
					className: "absolute inset-0 flex flex-col items-center justify-center bg-bg/25 focus-visible:ring-2 focus-visible:ring-gold/60",
					"aria-label": "Play briefing",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-16 items-center justify-center rounded-full border border-gold/40 bg-bg/70 text-gold backdrop-blur-sm transition-transform hover:scale-105",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
							className: "ml-0.5 size-7",
							fill: "currentColor"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-4 text-[10px] font-bold tracking-[0.2em] text-fg/80 uppercase",
						children: "Watch the briefing"
					})]
				})]
			})
		]
	});
}
function ProofStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, {
		className: "border-y border-fg/5 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-3",
			children: [
				["30-minute operational walkthrough", "Show us how the work actually moves."],
				["Built around your existing software", "No rip-and-replace requirement."],
				["Leave with a prioritized roadmap", "Know where AI makes sense before spending money building it."]
			].map(([t, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl border border-fg/10 bg-surface p-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-medium text-fg",
					children: t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm font-light text-fg/55",
					children: b
				})]
			}, t))
		})
	});
}
function Problem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "mx-auto max-w-6xl px-6 pt-24 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-center text-[10px] font-bold tracking-widest text-gold uppercase",
				children: "The stall"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mx-auto max-w-3xl text-center text-3xl font-medium tracking-tight text-fg md:text-5xl",
				children: "You already have the software. Your team still does the work between it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2",
				children: [
					["Information lives in different systems", "Someone still has to piece together the full picture."],
					["Follow-up depends on someone remembering", "Leads, estimates, approvals, declined work, and customer updates wait when the team gets busy."],
					["Reporting takes people away from operations", "Managers rebuild the same numbers every day or every week."],
					["Problems are found after they become problems", "Nobody is continuously watching every system for stalled work, exceptions, or missed opportunities."]
				].map(([t, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-fg/10 bg-surface p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-medium text-fg",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed font-light text-fg/60",
						children: b
					})]
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditButton, { children: "Get My Free AI Operations Audit" })
			})
		]
	});
}
function AuditWhat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "border-t border-fg/5 pt-24 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-[10px] font-bold tracking-widest text-gold uppercase",
						children: "The free audit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-medium tracking-tight text-fg md:text-5xl",
						children: "What you actually get"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg font-light text-fg/60",
						children: "We'll review your software stack, workflows, bottlenecks, reporting, follow-up, and repetitive administrative work. Then we'll show you the highest-value places AI could help — including what we'd automate first, what integrations are required, and what should stay human."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mx-auto mt-12 max-w-3xl space-y-4 px-6",
				children: [
					["Before the audit", "You tell us about your business, team, current software, and biggest operational bottlenecks."],
					["During the audit", "We walk through how leads, jobs, customers, reporting, and internal handoffs actually move."],
					["After the audit", "You receive a prioritized list of AI opportunities, integration requirements, implementation complexity, and the best place to start."]
				].map(([t, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl border border-fg/10 bg-surface p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium text-fg",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed font-light text-fg/60",
						children: b
					})]
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-10 grid max-w-3xl gap-2 px-6 sm:grid-cols-2",
				children: [
					"AI opportunity map",
					"Priority workflows",
					"Integration feasibility",
					"Complexity assessment",
					"Recommended starting point",
					"What we would not automate"
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl border border-fg/10 bg-surface px-4 py-3 text-sm text-fg/80",
					children: item
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditButton, { children: "Get My Free AI Operations Audit" })
			})
		]
	});
}
function Method() {
	const study = CASE_STUDIES[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "border-t border-fg/5 pt-24 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mb-14 max-w-3xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-[10px] font-bold tracking-widest text-gold uppercase",
						children: "How it works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-medium tracking-tight text-fg md:text-5xl",
						children: "Audit. Design. Build. Deploy. Manage."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg font-light text-fg/60",
						children: "The audit is the first step. You see the opportunity before anyone starts building."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mb-12 max-w-5xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl border border-fg/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CortexMap, { variant: 0 })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-5",
				children: PILLARS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-fg/10 bg-surface p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[10px] font-bold tracking-widest text-gold uppercase",
							children: [
								p.num,
								" ",
								p.kicker
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-lg font-medium text-fg",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed font-light text-fg/55",
							children: p.body
						})
					]
				}, p.num))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-16 max-w-5xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-bold tracking-[0.22em] text-gold uppercase",
						children: "In the field"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 text-2xl font-medium text-fg md:text-3xl",
						children: study.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-light text-fg/60",
						children: [
							study.role,
							". ",
							study.location,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/case-studies/$slug",
						params: { slug: study.slug },
						className: "mt-5 inline-block text-sm font-medium text-gold hover:text-gold-light",
						children: "View the deployment"
					})
				]
			})
		]
	});
}
function Industries() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "border-t border-fg/5 pt-24 pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mb-12 max-w-3xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-[10px] font-bold tracking-widest text-gold uppercase",
					children: "Who this is for"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-medium tracking-tight text-fg md:text-4xl",
					children: "Built for the software and workflows your industry actually uses."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-light text-fg/55",
					children: "Automotive, HVAC, pest, roofing, plumbing, and the rest of the trades."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-4xl flex-wrap justify-center gap-2 px-6",
			children: INDUSTRIES.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/industries/$slug",
				params: { slug: industryParam(i) },
				className: "rounded-full border border-fg/10 bg-surface px-4 py-2 text-sm text-fg/70 hover:border-gold/40 hover:text-fg",
				children: i.name
			}, i.slug))
		})]
	});
}
function Founder() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "border-t border-fg/5 px-6 pt-24 pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-8 text-center text-[10px] font-bold tracking-widest text-gold uppercase",
			children: "From the founder"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
			className: "mx-auto max-w-4xl text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-balance text-2xl leading-snug font-medium tracking-tight text-fg md:text-4xl",
				children: [
					"“Most companies do not have a software shortage.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "They have a people-operating-the-software problem."
					}),
					" Cortex connects AI agents to those systems so the repetitive work between them no longer depends on someone remembering to do it.”"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-10 flex items-center justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FounderPhoto, { className: "size-12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium text-fg",
						children: BRAND.founder
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-fg/50",
						children: [
							BRAND.founderRole,
							", ",
							BRAND.name
						]
					})]
				})]
			})]
		})]
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "border-t border-fg/5 pt-24 pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-12 text-center text-3xl font-medium tracking-tight text-fg md:text-4xl",
			children: "Questions before the audit"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl space-y-4 px-6",
			children: FAQS.filter((f) => [
				"What is included in the Free AI Operations Audit?",
				"What software can you connect to?",
				"Do I need to replace my existing software?",
				"Will this replace my employees?",
				"Do you work with companies under $2M?",
				"How much does implementation cost?",
				"Can AI run locally?",
				"What happens after implementation?"
			].includes(f.q)).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl border border-fg/10 bg-surface p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-medium text-fg",
					children: item.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed font-light text-fg/60",
					children: item.a
				})]
			}, item.q))
		})]
	});
}
function Final() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, {
		className: "border-t border-fg/5 py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-medium tracking-tight text-fg md:text-5xl",
					children: "Find the highest-value work AI can take off your team."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg font-light text-fg/60",
					children: "A minute to apply. Thirty minutes on how work moves. You leave with a map."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditButton, { children: "Get My Free AI Operations Audit" })
				})
			]
		})
	});
}
//#endregion
export { AuditLanding as component };
