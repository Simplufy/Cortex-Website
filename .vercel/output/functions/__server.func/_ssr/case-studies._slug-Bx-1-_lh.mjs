import { o as DETAIL_DRIVEN_DASHBOARD, r as CASE_STUDIES, s as DETAIL_DRIVEN_WORKFORCE } from "./site-BWEzcE1b.mjs";
import { H as notFound, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as ArrowLeft } from "../_libs/lucide-react.mjs";
import { c as AuditButton, o as RevealSection, r as Route$2 } from "./router-DEkOF6vF.mjs";
import { n as OperatorBoard } from "./operator-board-BIx9HmoP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/case-studies._slug-Bx-1-_lh.js
var import_jsx_runtime = require_jsx_runtime();
function CaseStudy() {
	const { slug } = Route$2.useParams();
	const study = CASE_STUDIES.find((c) => c.slug === slug);
	if (!study) throw notFound();
	if (study.slug === "detail-driven") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailDriven, { study });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Generic, { study });
}
function DetailDriven({ study }) {
	const workforce = DETAIL_DRIVEN_WORKFORCE;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-6 pt-16 pb-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/case-studies",
				className: "inline-flex items-center gap-2 text-sm text-fg/50 hover:text-gold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Case studies"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 text-[10px] font-bold tracking-widest text-gold uppercase",
				children: [
					study.industry,
					" · ",
					study.location
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-4xl font-medium tracking-tight text-fg md:text-6xl",
				children: "A private AI system across four automotive service businesses"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-xl font-light text-fg/60",
				children: [
					study.name,
					". ",
					study.location,
					". ",
					study.result
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-medium tracking-tight text-fg",
						children: "The operation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed font-light text-fg/70",
						children: "Detail Driven Enterprises runs automotive work in Jackson Hole across four shop types: mechanical repair, collision, detailing, and glass. Repair lives in Tekmetric. Collision lives in CCC ONE. Detailing and glass have their own boards, books, and ads. Each line already had software. None of them shared a picture."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed font-light text-fg/70",
						children: "Someone still walked the board, chased declined work, rebuilt the morning report from five logins, and hoped ads had booked cars. We did not replace those systems. We installed collectors, a secure operator dashboard, and agents that watch the leftover work so it does not depend on who remembered."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
				className: "mt-12 rounded-2xl border border-fg/10 bg-surface p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] font-bold tracking-widest text-gold uppercase",
					children: "What we can stand behind today"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid gap-3 sm:grid-cols-2",
					children: study.facts.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-fg/80",
						children: f
					}, f))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [
						`Systems connected: ${study.systems.length}`,
						"Shop types: 4",
						"Infrastructure: private + cloud hybrid",
						"Operator dashboard: included"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-xl border border-fg/10 bg-surface px-4 py-3 text-sm text-fg/80",
						children: item
					}, item))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-medium tracking-tight text-fg",
						children: "The architecture"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed font-light text-fg/70",
						children: "Four layers. Hardware and collectors underneath. A secure dashboard in the middle. An orchestrator that assigns jobs. Specialized agents on top. Nothing got a master login."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchitectureStack, { systems: study.systems }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-8 space-y-3",
						children: [
							["Private Linux AI infrastructure", "Dedicated hardware on site. Routine inference stays local. Cloud when a job actually needs a stronger model. The overnight watch and the morning briefing do not have to leave the building."],
							["Collectors and bridges", "Tekmetric, ads, CRM, and books over their APIs. Collision through a local CCC ONE EMS export. We read the files CCC already knows how to write. We do not scrape private databases."],
							["Secure operator dashboard", "One board for operations, marketing, finance, and the four shops. Command, inbox, quotes, bookings, money, demand, collision, and a knowledge map. This is where department exceptions and the numbers land in the morning — without five logins."],
							["Orchestrator and agents", "A manager assigns follow-up, monitoring, and reporting. Agents watch the queues. A person still owns the customer."]
						].map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl border border-fg/10 bg-surface px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold tracking-widest text-gold",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-fg",
									children: title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 pl-10 text-sm leading-relaxed font-light text-fg/60",
								children: body
							})]
						}, title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-2xl border border-fg/10 bg-surface p-6 md:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-bold tracking-widest text-gold uppercase",
							children: "The machine"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed font-light text-fg/70",
							children: "Dedicated Linux hardware on site. Local models for the overnight watch and the morning briefing. Cloud models when a job needs more. We do not publish a photograph of the rack. The point is ownership: routine inference does not have to leave the building."
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-medium tracking-tight text-fg",
						children: "The operator dashboard"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed font-light text-fg/70",
						children: "On top of the agents that run parts of the company, they get a secure dashboard. One board. Operations, marketing, finance, the shops. Pulled from Tekmetric, CCC, HighLevel, QuickBooks, Stripe, Google Ads, Meta, and the rest of the stack they already paid for. Not five logins before coffee. Not a master key to the company."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed font-light text-fg/70",
						children: "Agents watch the queues. The dashboard is how the owner sees all of it — exceptions, the numbers, and which system they came from — without rebuilding the morning from exports."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OperatorBoard, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-3 sm:grid-cols-3",
						children: DETAIL_DRIVEN_DASHBOARD.security.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl border border-fg/10 bg-surface p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium text-fg",
								children: row.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed font-light text-fg/60",
								children: row.body
							})]
						}, row.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-3 sm:grid-cols-2",
						children: DETAIL_DRIVEN_DASHBOARD.views.map(([t, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl border border-fg/10 bg-surface p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium text-fg",
								children: t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed font-light text-fg/60",
								children: b
							})]
						}, t))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-medium tracking-tight text-fg",
						children: "Sanitized exception list"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed font-light text-fg/70",
						children: "Example of what the morning board looks like. Identifiers changed. The pattern is real: aging work, quiet files, unbilled jobs, spend without an operator."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 overflow-hidden rounded-2xl border border-fg/10 bg-elevated",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b border-fg/10 px-5 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-bold tracking-widest text-gold uppercase",
								children: "Exceptions · sanitized"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "divide-y divide-fg/10",
							children: [
								["Aging repair orders", "Repair · Tekmetric"],
								["Quiet collision files", "Collision · CCC ONE"],
								["Unconfirmed detailing bookings", "Detailing · Bookings"],
								["Unbilled completed work", "Finance · QuickBooks"],
								["Spend vs booked", "Demand · Google Ads"]
							].map(([label, source]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-baseline justify-between gap-3 px-5 py-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-fg/85",
									children: label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 text-xs text-fg/35",
									children: source
								})]
							}, label))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-medium tracking-tight text-fg",
						children: "Agents on the ground"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed font-light text-fg/70",
						children: "Installed as three jobs, not a 30-name org chart. Follow-up. Monitoring. Reporting. They read the software the shops already run. A person still sends anything that talks to a customer until the path is trusted. How that shows up inside Detail Driven is by department."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3",
						children: workforce.jobs.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl border border-fg/10 bg-surface px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium text-fg",
								children: job.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed font-light text-fg/60",
								children: job.body
							})]
						}, job.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-medium tracking-tight text-fg",
						children: "By department"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed font-light text-fg/70",
						children: "Same three jobs. Six places they show up for the people who run the shops."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-2xl border border-gold/25 bg-surface p-6 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-bold tracking-widest text-gold uppercase",
								children: "Estimated leftover admin covered"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-5xl font-medium tracking-tight text-fg",
								children: [
									"~",
									workforce.totalHours,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 text-lg font-light text-fg/50",
										children: "hrs / month"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-sm leading-relaxed font-light text-fg/55",
								children: workforce.caveat
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3",
								children: workforce.departments.map((dept) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-fg/45",
									children: dept.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-0.5 text-sm font-medium text-fg",
									children: [
										"~",
										dept.hours,
										" hrs"
									]
								})] }, dept.title))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-4",
						children: workforce.departments.map((dept) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-2xl border border-fg/10 bg-surface p-6 md:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-medium tracking-tight text-fg",
										children: dept.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm font-medium text-gold",
										children: [
											"~",
											dept.hours,
											" hrs/mo"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed font-light text-fg/55",
									children: dept.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-5",
									children: dept.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium text-fg",
											children: item.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs tracking-wide text-fg/40",
											children: item.meta
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed font-light text-fg/60",
										children: item.body
									})] }, item.title))
								})
							]
						}, dept.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-medium tracking-tight text-fg",
						children: "Collision, the hard way"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed font-light text-fg/70",
						children: "Collision is why the operations and finance hours are not only a Tekmetric story. CCC ONE does not hand you a clean public API for the shop floor. Appointments are not in the file export. Payments are not either. What CCC will give you is an EMS 2.01 estimate export, and a Final Bill export when the repair order is locked."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed font-light text-fg/70",
						children: "We put a read-only bridge on the collision machine. It watches the export folder CCC already writes: jobs, claims, customers, vehicles, parts, labor, totals, and attachments a user saved out. It does not open DATA.DAT. That export is enough to watch files that went quiet and finals that never hit the books. It is not enough to schedule. We do not pretend it is."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-medium tracking-tight text-fg",
						children: "Systems connected"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed font-light text-fg/70",
						children: "These are the systems the department jobs actually read. Repair in Tekmetric. Collision in CCC. Leads in HighLevel. Money in QuickBooks and Stripe. Demand in the ad accounts and Google Business Profiles they already paid for."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex flex-wrap gap-2",
						children: study.systems.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-fg/10 bg-surface px-3 py-1 text-xs text-fg/70",
							children: s
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-fg/50",
						children: "Named tools are the stack in this deployment, not a certified public integration list. Access is always confirmed in the audit. A configured connection is not the same thing as a live feed."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
				className: "mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-medium tracking-tight text-fg",
					children: "What we track next"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg leading-relaxed font-light text-fg/70",
					children: "The hours above are estimates of leftover admin. Next we count what we can measure: agent tasks completed, how often a path ran without a person, how often a person had to step in, and how much inference stayed on the local hardware. Those numbers go here when they exist and the operator is willing to stand behind them."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-6 max-w-xl text-lg font-light text-fg/60",
					children: "If this volume of leftover work looks like yours, start with the audit. We will tell you if the stack and the volume actually justify a build."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditButton, { children: "Get Your Free AI Operations Audit" })]
			})
		]
	});
}
function ArchitectureStack({ systems }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-8 overflow-hidden rounded-2xl border border-fg/10 bg-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 p-5 sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchBox, { label: "Owner / management" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs tracking-widest text-gold",
					children: "↓"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchBox, {
					label: "Cortex environment",
					hint: "Private Linux · operator dashboard · hybrid inference",
					accent: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs tracking-widest text-gold",
					children: "↓"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchBox, {
					label: "Manager agent",
					hint: "Assigns jobs. Watches exceptions."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs tracking-widest text-gold",
					children: "↓"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						"Operations",
						"Marketing",
						"CRM",
						"Reporting",
						"Specialized agents"
					].map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-fg/10 bg-surface px-4 py-3 text-center text-sm text-fg/80",
						children: name
					}, name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs tracking-widest text-gold",
					children: "↓"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-center gap-2",
					children: systems.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-fg/10 bg-surface px-3 py-1 text-xs text-fg/60",
						children: s
					}, s))
				})
			]
		})
	});
}
function ArchBox({ label, hint, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: accent ? "rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-center" : "rounded-xl border border-fg/10 bg-surface px-4 py-3 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium text-fg",
			children: label
		}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-fg/45",
			children: hint
		}) : null]
	});
}
function Generic({ study }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-6 pt-16 pb-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/case-studies",
				className: "inline-flex items-center gap-2 text-sm text-fg/50 hover:text-gold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Case studies"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-[10px] font-bold tracking-widest text-gold uppercase",
				children: study.industry
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-4xl font-medium tracking-tight text-fg md:text-6xl",
				children: study.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-xl font-light text-fg/60",
				children: [
					study.role,
					". ",
					study.result
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
				className: "mt-12 rounded-2xl border border-fg/10 bg-surface p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] font-bold tracking-widest text-gold uppercase",
					children: "What we can stand behind today"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid gap-3 sm:grid-cols-2",
					children: study.facts.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-fg/80",
						children: f
					}, f))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditButton, { children: "Get Your Free AI Operations Audit" })
			})
		]
	});
}
//#endregion
export { CaseStudy as component };
