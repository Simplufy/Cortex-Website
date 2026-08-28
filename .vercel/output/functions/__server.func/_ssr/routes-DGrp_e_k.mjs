import { _ as industryParam, a as CONNECT_TOOLS, c as FAQS, d as PILLARS, i as COMPARISON, l as INDUSTRIES, p as SOFTWARE_CATEGORIES, r as CASE_STUDIES, t as AGENT_CATEGORIES } from "./site-BWEzcE1b.mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as ArrowRight } from "../_libs/lucide-react.mjs";
import { c as AuditButton, f as GhostButton, m as BRAND, o as RevealSection, s as FounderPhoto } from "./router-DEkOF6vF.mjs";
import { r as SectionHead } from "./page-hero-DYdDYaeP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DGrp_e_k.js
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problem, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Proof, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Departments, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Industries, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Integrations, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivateAi, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Security, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Founder, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative pt-20 pb-12 lg:pt-24 lg:pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "animate-fade-up mb-6 text-[10px] font-bold tracking-[0.22em] text-gold uppercase",
					children: BRAND.legal
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "animate-fade-up delay-100 text-balance text-4xl leading-[1.08] font-medium tracking-tighter text-fg sm:text-5xl md:text-6xl lg:text-7xl",
					children: "Custom AI systems built around the way your business actually works."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "animate-fade-up delay-200 mt-6 max-w-2xl text-balance text-lg leading-relaxed font-light text-fg/60 md:text-xl",
					children: "We connect AI agents to the software your team already uses so they can monitor work, follow up, build reports, catch problems, and handle repetitive tasks across your operation."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-up delay-300 mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditButton, { children: "Get Your Free AI Operations Audit" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
						to: "/how-we-work",
						children: "See How It Works"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "animate-fade-up delay-300 mt-5 text-sm text-fg/45",
					children: "Keep your existing software. Cortex works across it."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolMarquee, {})]
	});
}
function ToolMarquee() {
	const mid = Math.ceil(CONNECT_TOOLS.length / 2);
	const rowA = CONNECT_TOOLS.slice(0, mid);
	const rowB = CONNECT_TOOLS.slice(mid);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-up delay-300 mt-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-5 text-center text-[10px] font-bold tracking-[0.22em] text-gold uppercase",
				children: "Connect your tools"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group/marquee flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoRow, {
					tools: rowA,
					direction: "rtl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoRow, {
					tools: rowB,
					direction: "ltr"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-center text-[11px] text-fg/50",
				children: "Examples of software we commonly evaluate. What we can connect is confirmed in the audit."
			})
		]
	});
}
function LogoRow({ tools, direction }) {
	const loop = [...tools, ...tools];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-bg to-transparent sm:w-28" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-bg to-transparent sm:w-28" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: direction === "rtl" ? "animate-marquee-rtl flex w-max gap-3 pr-3" : "animate-marquee-ltr flex w-max gap-3 pr-3",
				children: loop.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-12 shrink-0 items-center gap-2.5 rounded-xl border border-fg/10 bg-surface/80 px-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: `/images/logos/${t.file}`,
						alt: "",
						width: 28,
						height: 28,
						className: "size-7 object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "whitespace-nowrap text-sm font-medium text-fg/70",
						children: t.name
					})]
				}, `${t.name}-${i}`))
			})
		]
	});
}
function Problem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "pt-24 pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker: "The stall",
			title: "You already have the software. Your team still does the work between it.",
			body: "Your CRM knows the customer. Your operations platform knows the job. Your phone system knows the calls. Your accounting software knows the money. Your ad platforms know the lead source. Your people are still the ones checking, copying, following up, reconciling, reporting, and making sure nothing falls through the cracks."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-2",
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
		})]
	});
}
function Layer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "border-t border-fg/5 pt-24 pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker: "What we install",
			title: "Give your operation an AI layer.",
			body: "Cortex connects specialized AI agents to the software your business already runs. Each agent is responsible for specific work — monitoring, following up, reporting, coordinating, or escalating when a person is needed. The same build includes a secure dashboard so operations, marketing, and finance sit in one place."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2 lg:grid-cols-4",
			children: [
				["Understand the operation", "We map how work moves through your company and where time, information, or opportunities get lost."],
				["Connect the systems", "We securely connect the relevant CRM, operations, communication, marketing, accounting, and industry-specific platforms."],
				["Build specialized agents", "Each agent gets a defined job, access level, rules, tools, and escalation path."],
				["Deploy and continuously improve", "We test the system with your team, measure performance, and improve it as your operation changes."]
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
		})]
	});
}
function Proof() {
	const study = CASE_STUDIES[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, {
		className: "relative z-20 border-y border-fg/5 bg-bg/40 py-16 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-[10px] font-bold tracking-[0.22em] text-gold uppercase",
					children: "See what this looks like inside a real business"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-center text-3xl font-medium tracking-tight text-fg md:text-4xl",
					children: "A multi-business automotive operation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-2xl text-center font-light text-fg/60",
					children: "Cortex connects AI agents across shop management, CRM, customer communication, advertising, review management, and internal reporting. The system runs on dedicated private AI infrastructure, with cloud models available when a task requires them. A secure operator dashboard is included in the same build."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2",
					children: [
						`Systems connected: ${study.systems.length}`,
						"Shop types: 4 — repair, collision, detailing, glass",
						"Infrastructure: private + cloud hybrid",
						"Operator dashboard: included"
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-xl border border-fg/10 bg-surface px-4 py-3 text-sm text-fg/80",
						children: f
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/case-studies/$slug",
						params: { slug: study.slug },
						className: "inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light",
						children: ["View the deployment", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})
			]
		})
	});
}
function Departments() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "border-t border-fg/5 pt-24 pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker: "Across the business",
			title: "Put AI to work across the business.",
			body: "Agents can handle repetitive work across sales, operations, customer experience, marketing, and management — while your team keeps the decisions that require judgment."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-5",
			children: AGENT_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl border border-fg/10 bg-surface p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-medium text-fg",
					children: c.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm font-light text-fg/60",
					children: c.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-gold" }), item]
					}, item))
				})]
			}, c.title))
		})]
	});
}
function Integrations() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "border-t border-fg/5 pt-24 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: "Systems",
				title: "Your AI should not become another disconnected tool.",
				body: "Cortex connects your AI agents to the systems your team already relies on. We use official APIs and integrations wherever possible, then evaluate other secure connection methods when necessary. Every integration is confirmed during the audit."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-5xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4",
				children: SOFTWARE_CATEGORIES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-fg/10 bg-surface p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium text-fg",
						children: s.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm font-light text-fg/55",
						children: s.body
					})]
				}, s.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/integrations",
					className: "inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light",
					children: ["Browse systems we evaluate", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})
		]
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "relative pt-24 pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			title: "Audit. Design. Build. Deploy. Manage.",
			body: "We understand the operation before we automate it. Every deployment starts by finding the highest-value work AI can realistically handle."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-5",
			children: PILLARS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl border border-fg/10 bg-surface p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 text-xs font-bold tracking-[0.2em] text-gold",
						children: [
							p.num,
							" ",
							p.kicker
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-medium tracking-tight text-fg",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed font-light text-fg/60",
						children: p.body
					})
				]
			}, p.num))
		})]
	});
}
function Industries() {
	const featured = INDUSTRIES.filter((i) => [
		"automotive",
		"hvac",
		"plumbing",
		"electrical",
		"home-services"
	].includes(i.slug));
	const rest = INDUSTRIES.filter((i) => !featured.some((f) => f.slug === i.slug));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "relative pt-24 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "Built for the software and workflows your industry actually uses.",
				body: "Automotive shops don't operate like HVAC companies. HVAC companies don't operate like roofers. We build around the systems, workflows, and bottlenecks specific to your industry."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-5",
				children: featured.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/industries/$slug",
					params: { slug: industryParam(ind) },
					className: "group rounded-2xl border border-fg/10 bg-surface p-6 transition-colors hover:border-gold/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium text-fg",
							children: ind.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-relaxed text-fg/50",
							children: ind.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:text-gold-light",
							children: ["See your industry", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
						})
					]
				}, ind.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2 px-6",
				children: rest.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/industries/$slug",
					params: { slug: industryParam(i) },
					className: "rounded-full border border-fg/10 bg-surface px-4 py-2 text-sm text-fg/70 hover:border-gold/40 hover:text-fg",
					children: i.name
				}, i.slug))
			})
		]
	});
}
function PrivateAi() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "border-t border-fg/5 pt-24 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: "Infrastructure",
				title: "Cloud, private, or hybrid.",
				body: "Cortex can run in the cloud, on dedicated hardware you control, or across both. Routine work can stay local while more demanding tasks use leading cloud models when needed. We design the architecture around privacy, performance, reliability, and cost — not around a specific model provider."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-3",
				children: [
					["Cloud", "Fast to start. Good for many workloads. You do not need a server room."],
					["Private / local", "Hardware you own or control. More privacy, more predictability, and more stable costs for work that runs continuously."],
					["Hybrid", "Usually the practical answer. Local for routine work. Cloud when the job needs it."]
				].map(([t, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-fg/10 bg-surface p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-medium text-fg",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm font-light text-fg/60",
						children: b
					})]
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/private-ai",
					className: "inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light",
					children: ["Private AI infrastructure", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})
		]
	});
}
function Security() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "border-t border-fg/5 pt-24 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: "Trust",
				title: "You decide what agents can do.",
				body: "Permissions, logs, and a person in the loop on anything that spends money or changes a customer promise."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-3",
				children: [
					["Least privilege", "Each agent and each dashboard view gets the systems and records it needs."],
					["Human approval", "Drafts and flags first. Send, charge, or change a promise only when you say so."],
					["Logged actions", "What ran, against which record, and who approved it."]
				].map(([t, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-fg/10 bg-surface p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-medium text-fg",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm font-light text-fg/60",
						children: b
					})]
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/trust",
					className: "inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light",
					children: ["Trust and security", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-fg/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-surface text-[10px] font-bold tracking-widest text-gold uppercase",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-6 py-4 font-bold",
							children: "Off-the-shelf AI software"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-6 py-4 font-bold",
							children: "Cortex"
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: COMPARISON.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-fg/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-6 py-4 font-light text-fg/50",
							children: row.typical
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-6 py-4 text-fg",
							children: row.cortex
						})]
					}, row.typical)) })]
				})
			})
		]
	});
}
function Founder() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-8 text-center text-[10px] font-bold tracking-[0.22em] text-gold uppercase",
				children: "From the founder"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/about-us",
					className: "text-sm font-medium text-gold hover:text-gold-light",
					children: "About McGuire"
				})
			})
		]
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "pt-24 pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-12 text-center text-3xl font-medium tracking-tight text-fg md:text-4xl",
			children: "Questions owners actually ask"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl space-y-3 px-6",
			children: FAQS.slice(0, 8).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
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
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, {
		className: "relative overflow-hidden py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-balance text-3xl font-medium tracking-tight text-fg md:text-5xl",
					children: "Find the highest-value work AI can take off your team."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg font-light text-fg/60",
					children: "Start with a Free AI Operations Audit. We'll show you what is worth automating, what isn't, and what a practical first deployment could look like."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditButton, { children: "Get Your Free AI Operations Audit" })
				})
			]
		})
	});
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
