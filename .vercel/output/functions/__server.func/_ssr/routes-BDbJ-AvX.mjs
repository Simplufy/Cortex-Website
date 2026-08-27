import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, f as ArrowRight, l as ChevronRight, u as ChevronLeft } from "../_libs/lucide-react.mjs";
import { _ as GhostButton, a as ClutchBadge, c as CASE_STUDIES, d as INDUSTRIES, f as PILLARS, g as BeamButton, h as WHAT_WE_DO, l as CLIENT_LOGOS, m as TEAM, o as BLOG_POSTS, s as BRAINS, v as cn } from "./router-D5iiC1sJ.mjs";
import { r as SectionHead } from "./page-hero-CWkbZTkk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BDbJ-AvX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HERO_WORDS = [
	"automation",
	"systems",
	"processes",
	"Artificial Intelligence",
	"portals",
	"solutions"
];
var HERO_WORDS_MOBILE = [
	"automation",
	"systems",
	"processes",
	"AI",
	"portals",
	"solutions"
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMarquee, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatWeDo, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowWeWork, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quotes, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanyBrain, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatWeShip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Industries, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalTeam, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inside, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamConstellation, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mission, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FounderQuote, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Podcasts, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Articles, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
function Hero() {
	const [word, setWord] = (0, import_react.useState)("");
	const [idx, setIdx] = (0, import_react.useState)(0);
	const [deleting, setDeleting] = (0, import_react.useState)(false);
	const [words, setWords] = (0, import_react.useState)(HERO_WORDS_MOBILE);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useLayoutEffect)(() => {
		const pick = () => window.innerWidth < 768 ? HERO_WORDS_MOBILE : HERO_WORDS;
		const apply = () => {
			setWords(pick());
			setIdx(0);
			setWord("");
			setDeleting(false);
			setReady(true);
		};
		apply();
		window.addEventListener("resize", apply);
		return () => window.removeEventListener("resize", apply);
	}, []);
	const full = words[idx % words.length] ?? "";
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		const pause = deleting ? 28 : word === full ? 1600 : 55;
		const t = window.setTimeout(() => {
			if (!deleting) {
				if (word === full) setDeleting(true);
				else setWord(full.slice(0, word.length + 1));
			} else if (word.length === 0) {
				setDeleting(false);
				setIdx((i) => (i + 1) % words.length);
			} else setWord(word.slice(0, -1));
		}, pause);
		return () => window.clearTimeout(t);
	}, [
		word,
		deleting,
		full,
		words.length,
		ready
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "relative mx-auto max-w-7xl pt-24 pb-20 lg:pt-24 lg:pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-fade-up mb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClutchBadge, { compact: true })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "animate-fade-up delay-100 overflow-hidden text-balance text-4xl leading-[1.1] font-medium tracking-tighter text-fg sm:text-5xl md:text-7xl lg:text-8xl",
					children: [
						"Leverage your business with bespoke",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hero-word-rotator",
							"aria-live": "polite",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hero-word-slot",
								children: words.reduce((a, b) => a.length >= b.length ? a : b, "automation")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hero-word-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hero-word-typed bg-linear-to-r from-gold via-gold-light to-gold bg-[length:200%_auto] bg-clip-text text-transparent",
									children: word
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hero-word-caret",
									"aria-hidden": true
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "animate-fade-up delay-200 mt-8 max-w-2xl text-balance text-lg leading-relaxed font-light text-fg/60 md:text-xl",
					children: "We map how your business actually runs, build the infrastructure to run it, and layer in automation and AI so your team can do more with less. 130+ mid-market companies scaled this way."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-up delay-300 mt-10 flex w-full flex-col items-center gap-6 sm:w-auto sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeamButton, {
						to: "/book-a-call",
						children: "Book a Call"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
						to: "/how-we-work",
						children: "How We Work"
					})]
				})
			]
		})
	});
}
function LogoMarquee() {
	const row = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative z-20 overflow-hidden border-y border-fg/5 bg-bg/40 py-20 backdrop-blur-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mb-12 max-w-4xl px-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 text-balance text-3xl font-medium tracking-tight text-fg md:text-4xl lg:text-5xl",
					children: "You’re in good company."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto max-w-2xl text-lg leading-relaxed font-light text-fg/60",
					children: "130+ engagements across 12 industries. These are the teams who bet on us to systematize their operations, and scaled because of it."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mb-12 max-w-7xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative overflow-hidden",
					style: {
						WebkitMaskImage: "linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%)",
						maskImage: "linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%)"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "animate-marquee-rtl flex items-center gap-4 will-change-transform sm:gap-12",
						children: row.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-20 w-32 shrink-0 items-center justify-center px-2 sm:h-32 sm:w-64",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.src,
								alt: c.alt,
								className: "max-h-16 max-w-full object-contain opacity-80 sm:max-h-20"
							})
						}, `${c.alt}-${i}`))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/case-studies",
					className: "inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light",
					children: ["Read customer stories", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})
		]
	});
}
function WhatWeDo() {
	const [active, setActive] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-transparent pt-24 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: "Inside OpsKings",
				title: "What we do",
				body: "Two weeks of interviews to map how your business actually runs. A custom portal built around that map, not a generic SaaS. Automation and AI layered on top once the foundation holds. One integrated team from audit to shipped system. No handoffs. No “that’s not our scope.”"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mb-10 max-w-3xl px-6 text-center text-sm tracking-wide text-fg/40",
				children: "See clearly. Execute faster. Scale precisely."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-4 px-6 lg:flex-row lg:items-stretch",
				children: WHAT_WE_DO.map((item, i) => {
					const on = active === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onMouseEnter: () => setActive(i),
						onFocus: () => setActive(i),
						onClick: () => setActive(i),
						className: cn("expand-card-custom rounded-2xl border border-fg/10 bg-surface p-8 text-left transition-all duration-500", on ? "flex-[1.6] border-gold/30" : "flex-1 opacity-80 hover:opacity-100"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6 text-xs font-bold tracking-[0.2em] text-gold",
								children: item.num
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-medium tracking-tight text-fg",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("mt-4 text-sm leading-relaxed font-light text-fg/60", on ? "block" : "lg:line-clamp-3"),
								children: item.body
							})
						]
					}, item.num);
				})
			})
		]
	});
}
function HowWeWork() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-24 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "How We Work: Map, Unify, Automate",
				body: "Map your operation. Unify it in one system. Automate what shouldn’t need a human. Strategy and execution from one integrated team."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mb-16 flex max-w-xl items-center justify-center gap-3 px-6 text-[11px] font-bold tracking-[0.28em] text-gold uppercase",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Map" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Unify" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Automate" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3",
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
			})
		]
	});
}
function Quotes() {
	const featured = CASE_STUDIES.filter((c) => [
		"sales-automation-systems",
		"growth-engine-x",
		"archon-research-group"
	].includes(c.slug));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-24 pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3",
			children: featured.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "flex flex-col rounded-2xl border border-fg/10 bg-surface p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex-1 text-lg leading-relaxed font-light text-fg/80",
					children: [
						"“",
						c.quote,
						"”"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "mt-8 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: c.logo,
						alt: "",
						className: "h-10 w-10 rounded-md object-contain bg-fg/5 p-1"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium text-fg",
						children: c.person
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-fg/40",
						children: [
							c.role,
							", ",
							c.name
						]
					})] })]
				})]
			}, c.slug))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/case-studies",
				className: "inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light",
				children: ["40+ video case studies on YouTube", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		})]
	});
}
function CompanyBrain() {
	const [i, setI] = (0, import_react.useState)(0);
	const b = BRAINS[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "company-brain",
		className: "relative border-t border-fg/5 pt-24 pb-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker: "The Company Brain",
			title: "A living map of how your business actually works.",
			body: "The Company Brain is a complete digital operating map of your business, every process, every handoff, every tool, every role, end‑to‑end. We build it during the first two weeks of every engagement. It becomes the single source of truth your team works from, the spec we build your custom systems around, and the reason you’ll stop losing knowledge every time someone leaves."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-6 text-xs font-bold tracking-widest text-gold uppercase",
					children: "Real Company Brains"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-8 max-w-2xl font-light text-fg/50",
					children: "Five real operating maps we built for clients. Each one is the foundation everything else was built on."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-2xl border border-fg/10 bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: b.img,
						alt: b.title,
						className: "aspect-video w-full object-cover object-top"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 p-6 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-medium text-fg",
								children: b.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed font-light text-fg/60",
								children: b.body
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Previous",
									onClick: () => setI((v) => (v - 1 + BRAINS.length) % BRAINS.length),
									className: "rounded-full border border-fg/10 p-2 text-fg/70 hover:text-fg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "w-12 text-center text-xs text-fg/40",
									children: [
										i + 1,
										" / ",
										BRAINS.length
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Next",
									onClick: () => setI((v) => (v + 1) % BRAINS.length),
									className: "rounded-full border border-fg/10 p-2 text-fg/70 hover:text-fg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
								})
							]
						})]
					})]
				})
			]
		})]
	});
}
function WhatWeShip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-t border-fg/5 pt-24 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: "What We Ship",
				title: "Your operation, rebuilt as software you actually use.",
				body: "The Company Brain tells us what to build. Then we build it, a custom operating system designed around your workflows, your team, and your data. Not a generic SaaS template with your logo on it. A system where every view, every metric, and every automation exists because your operation needs it to."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl space-y-20 px-6",
				children: [
					{
						kicker: "Reporting",
						title: "Reporting that finally tells the truth.",
						body: "When every data point lives in one system, your analytics match reality for the first time. Growth trends, acquisition channels, revenue breakdowns, updated in real time, not stitched together from five exports at the end of the quarter.",
						img: "/images/os/visual-charts.webp",
						alt: "Growth trends and analytics charts wireframe"
					},
					{
						kicker: "Command Center",
						title: "One screen. Every answer.",
						body: "Pipeline status, team capacity, client health, revenue, all in a single dashboard your team opens every morning. No more checking three tools to answer one question. No more monthly reconciliation. The numbers update themselves.",
						img: "/images/os/visual-dashboard.webp",
						alt: "Custom operating system dashboard wireframe"
					},
					{
						kicker: "Operational Fabric",
						title: "Every workflow has a home. Every setting has an owner.",
						body: "Service categories, team structures, billing configurations, intake sources, the operational fabric that used to live in spreadsheets now lives in a system your whole company can navigate.",
						img: "/images/os/visual-cards.webp",
						alt: "Fanned KPI cards wireframe"
					}
				].map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("grid items-center gap-10 lg:grid-cols-2", i % 2 === 1 && "lg:[&>div:first-child]:order-2"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-[10px] font-bold tracking-widest text-gold uppercase",
							children: b.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-3xl font-medium tracking-tight text-fg md:text-4xl",
							children: b.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg leading-relaxed font-light text-fg/60",
							children: b.body
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl border border-fg/10 bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: b.img,
							alt: b.alt,
							className: "w-full object-cover"
						})
					})]
				}, b.kicker))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/business-systems-development",
					className: "inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light",
					children: ["See how we build custom systems", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})
		]
	});
}
function Industries() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-24 pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			title: "Industries We Serve",
			body: "Same problems. Different language. We speak all of them."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2",
			children: INDUSTRIES.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "group rounded-2xl border border-fg/10 bg-surface p-8 transition-colors hover:border-gold/30",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-medium text-fg",
						children: ind.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed font-light text-fg/60",
						children: ind.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: ind.href,
						className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold group-hover:text-gold-light",
						children: ["Explore Solution", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				]
			}, ind.slug))
		})]
	});
}
function GlobalTeam() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-t border-fg/5 pt-24 pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker: "Global Team",
			title: "One team. Three continents.",
			body: "Strategy, engineering, and delivery, working across time zones so your project never stops moving."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/world-map-dots.svg",
					alt: "",
					className: "mx-auto w-full max-w-5xl opacity-70"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [
						"Kelowna, Canada",
						"London, UK",
						"Zagreb, Croatia",
						"Split, Croatia",
						"Budapest, Hungary"
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-fg/10 bg-surface px-3 py-1.5 text-xs text-fg/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3 text-gold" }), c]
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex justify-center gap-8 text-[10px] font-bold tracking-widest text-fg/40 uppercase",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "US · CA North America" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EU Europe" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "APAC Asia-Pacific" })
					]
				})
			]
		})]
	});
}
function Inside() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inside-opskings",
		className: "relative border-t border-fg/5 pt-24 pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker: "Inside OpsKings",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["What we actually do, week by week", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold",
				children: "."
			})] }),
			body: "A behind-the-scenes series where we film what’s actually happening inside OpsKings, new hires, client wins, dev calls, the messy middle. No polish, just the week."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "https://www.youtube.com/playlist?list=PLk7OsZA4rAwZ-AuJamxmG4p53oJ89HIYX",
				target: "_blank",
				rel: "noopener noreferrer",
				className: "inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light",
				children: ["Watch every episode on YouTube", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		})]
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative border-t border-fg/10 pt-24 pb-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, { title: "Why Companies Choose OpsKings" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2",
			children: [
				{
					title: "Strategy + execution in one team.",
					body: "Most firms either hand you a strategy deck and disappear, or wait for you to tell them exactly what to build. We do both, one team, no handoff to a separate vendor."
				},
				{
					title: "We don’t touch what you have, until you’ve seen what’s next.",
					body: "Nothing in your business changes until you’ve seen exactly what it’s changing to. We build the new system alongside your current one. No disruption. No downtime."
				},
				{
					title: "Custom-built. Not SaaS glue.",
					body: "We don’t wire together five off-the-shelf tools and call it a solution. We build a fully custom operating system for your business, on the cutting edge of AI and automation. And you own the IP."
				},
				{
					title: "The stability of a serious company. The speed of a SWAT team.",
					body: "A full team across the US, Canada, and the UK, and the infrastructure of a company that’s done this 130+ times, without the corporate overhead."
				}
			].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl border border-fg/10 bg-surface p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-medium tracking-tight text-fg",
					children: it.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed font-light text-fg/60",
					children: it.body
				})]
			}, it.title))
		})]
	});
}
function TeamConstellation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-24 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: "The team",
				title: "The people who actually do the work."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto hidden max-w-5xl px-6 md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "constellation relative aspect-16/10",
					children: TEAM.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "constellation-member absolute -translate-x-1/2 -translate-y-1/2",
						style: {
							left: `${m.x}%`,
							top: `${m.y}%`
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "constellation-member-inner group flex flex-col items-center",
							style: {
								["--float-x"]: `${i % 3 - 1}px`,
								["--float-y"]: `${-3 - i % 2}px`,
								["--float-duration"]: `${7 + i % 4}s`,
								["--float-delay"]: `${i * .2}s`
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: m.img,
								alt: m.name,
								className: "h-16 w-16 rounded-full object-cover ring-1 ring-gold/30 transition-transform duration-300 group-hover:scale-110 lg:h-20 lg:w-20"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 text-center opacity-0 transition-opacity group-hover:opacity-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-medium text-fg",
									children: m.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-fg/40",
									children: m.role
								})]
							})]
						})
					}, m.slug))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 sm:grid-cols-3 md:hidden",
				children: TEAM.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: m.img,
							alt: m.name,
							className: "mx-auto h-20 w-20 rounded-full object-cover ring-1 ring-gold/30"
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
	});
}
function Mission() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative border-t border-fg/5 pt-24 pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker: "Mission & Values",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Operational advantage, through systems", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold",
				children: "."
			})] }),
			body: "Strategy first, technology second. No theater, no decks that collect dust. We build parallel systems so nothing breaks. Strategy and engineering in one team, no handoffs."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4",
			children: [
				{
					n: "130+",
					l: "Engagements Completed"
				},
				{
					n: "12",
					l: "Industries Served"
				},
				{
					n: "40+",
					l: "Video Testimonials"
				},
				{
					n: "US · CA · UK",
					l: "Global Team"
				}
			].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-3xl font-medium tracking-tight text-gold md:text-4xl",
					children: s.n
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 text-xs tracking-wide text-fg/50 uppercase",
					children: s.l
				})]
			}, s.l))
		})]
	});
}
function FounderQuote() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "quoteRevealSection relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-8 text-center text-[10px] font-bold tracking-widest text-gold uppercase",
			children: "From the Founder"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
			className: "mx-auto max-w-4xl text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-balance text-2xl leading-snug font-medium tracking-tight text-fg md:text-4xl lg:text-5xl",
				children: [
					"“The biggest risk isn’t the money you spend on getting this right.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "It’s the six months you waste trying to solve it the wrong way."
					}),
					"”"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-10 flex items-center justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/team/toni-debelic.webp",
					alt: "Toni Debelić",
					className: "h-12 w-12 rounded-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium text-fg",
						children: "Toni Debelić"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-fg/40",
						children: "Co-Founder, OpsKings"
					})]
				})]
			})]
		})]
	});
}
function Podcasts() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative border-t border-fg/5 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			title: "Our Podcasts",
			body: "Tune in to our latest discussions on AI, automation, and the future of work. Available on all major platforms."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-3",
			children: [
				{
					href: "https://open.spotify.com/show/1qLQGRwcUaXLpx3uPk8Ry6?si=c420274ee1a94aed",
					title: "Spotify",
					body: "Listen to audio episodes"
				},
				{
					href: "https://www.youtube.com/playlist?list=PLk7OsZA4rAwafw9kHewAmnZYaRJjXLHrJ",
					title: "Podcasts",
					body: "Watch visual guides"
				},
				{
					href: "https://www.youtube.com/playlist?list=PLk7OsZA4rAwaQe9FsV-EAJ4SQpKA2iYG8",
					title: "Testimonials",
					body: "Hear from our clients"
				}
			].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: c.href,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "rounded-2xl border border-fg/10 bg-surface p-8 transition-colors hover:border-gold/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-medium text-fg",
					children: c.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-fg/50",
					children: c.body
				})]
			}, c.title))
		})]
	});
}
function Articles() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative border-t border-fg/5 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: "Articles",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Tactical breakdowns from the field", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: "."
				})] }),
				body: "Operations problems we’ve solved, how we mapped them, what we built, what we’d do differently."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3",
				children: BLOG_POSTS.slice(0, 3).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: p.slug },
					className: "group rounded-2xl border border-fg/10 bg-surface p-8 transition-colors hover:border-gold/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-bold tracking-widest text-gold uppercase",
							children: p.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-xl font-medium tracking-tight text-fg group-hover:text-gold-light",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-light text-fg/60",
							children: p.excerpt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-xs text-fg/40",
							children: [
								p.author,
								" · ",
								p.minutes,
								" min read"
							]
						})
					]
				}, p.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/resources",
					className: "inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light",
					children: ["See all articles", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})
		]
	});
}
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-balance text-3xl font-medium tracking-tight text-fg md:text-5xl",
					children: "Book a Call, Start With a System Design Sprint"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg font-light text-fg/60",
					children: "Book a call with our team. We’ll talk about what’s going on in your business, where the gaps are, and whether we’re the right fit. No pitch. No pressure. Just a conversation."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeamButton, {
						to: "/book-a-call",
						children: "Book a Call"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
						to: "/how-we-work",
						children: "How We Work"
					})]
				})
			]
		})
	});
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
