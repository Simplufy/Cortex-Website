import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ClutchBadge } from "./router-D5iiC1sJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-a-call-CnvnJAeo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KEY = "ok-bookings";
function BookPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		company: "",
		revenue: "5-15",
		phone: "",
		message: ""
	});
	const onSubmit = (e) => {
		e.preventDefault();
		try {
			const prev = JSON.parse(localStorage.getItem(KEY) || "[]");
			prev.push({
				...form,
				at: (/* @__PURE__ */ new Date()).toISOString()
			});
			localStorage.setItem(KEY, JSON.stringify(prev));
		} catch {}
		setSent(true);
	};
	const field = (k) => ({
		value: form[k],
		onChange: (e) => setForm((f) => ({
			...f,
			[k]: e.target.value
		}))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-32 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] font-bold tracking-widest text-gold uppercase",
				children: "Book a 30-min audit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-4 text-4xl font-medium tracking-tight text-fg md:text-6xl",
				children: ["Time to fix the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: "operations?"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClutchBadge, { compact: true })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-md text-lg leading-relaxed font-light text-fg/60",
				children: "No pitch. No pressure. Thirty minutes to walk through where your operations are stuck, and an honest answer on whether we’re the right team to fix it. 130+ companies. 12 industries. One team."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "mt-10 max-w-md border-l-2 border-gold pl-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-light text-fg/80",
					children: "“We doubled in a span of 30 days, and we actually had systems that would allow us to do that. We were working equally as much or less.”"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "mt-4 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/clients/sales-automation-systems.webp",
						alt: "",
						className: "h-10 w-10 object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-fg",
						children: "Taylor Haren"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-fg/40",
						children: "CEO · Sales Automation Systems"
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 text-sm text-fg/50",
				children: [
					"Having trouble booking? Email",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-gold hover:text-gold-light",
						href: "mailto:toni@opskings.com",
						children: "toni@opskings.com"
					}),
					" ",
					"or text",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-gold hover:text-gold-light",
						href: "tel:+17819540185",
						children: "(781) 954-0185"
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-fg/10 bg-surface p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-medium text-fg",
					children: "OpsKings Operations & Automations Audit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-fg/40",
					children: "30 min"
				}),
				sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-medium text-fg",
						children: "You’re on the calendar request list."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 font-light text-fg/60",
						children: [
							"We’ll email ",
							form.email,
							" to confirm a 30-minute audit. If it’s urgent, text",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+17819540185",
								className: "text-gold",
								children: "(781) 954-0185"
							}),
							"."
						]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "mt-8 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								...field("name"),
								className: inputCls,
								placeholder: "Jane Founder"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Work email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "email",
								...field("email"),
								className: inputCls,
								placeholder: "jane@company.com"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Company",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								...field("company"),
								className: inputCls,
								placeholder: "Acme Co."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "tel",
								...field("phone"),
								className: inputCls,
								placeholder: "(555) 000-0000"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Approximate revenue",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								...field("revenue"),
								className: inputCls,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "under-5",
										children: "Under $5M"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "5-15",
										children: "$5M – $15M"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "15-50",
										children: "$15M – $50M"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "50-100",
										children: "$50M – $100M"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "100+",
										children: "$100M+"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "What’s stuck?",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								...field("message"),
								rows: 4,
								className: inputCls,
								placeholder: "Where the operation is breaking down…"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "w-full rounded-full bg-gold py-3.5 text-sm font-semibold tracking-widest text-bg uppercase transition-colors hover:bg-gold-light",
							children: "Request a 30-min audit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-xs text-fg/40",
							children: "We’ll confirm by email. No pitch. No pressure."
						})
					]
				})
			]
		})]
	});
}
var inputCls = "w-full rounded-lg border border-fg/10 bg-bg px-3 py-2.5 text-sm text-fg outline-none placeholder:text-fg/30 focus:border-gold/50";
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-xs font-medium tracking-wide text-fg/50",
			children: label
		}), children]
	});
}
//#endregion
export { BookPage as component };
