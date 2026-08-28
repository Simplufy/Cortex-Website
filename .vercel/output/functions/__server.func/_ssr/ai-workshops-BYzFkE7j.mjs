import { i as __toESM } from "../_runtime.mjs";
import { U as require_react, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as BeamButton, l as WORKSHOP_AUDIENCES, o as RevealSection, u as submitWorkshop } from "./router-DEkOF6vF.mjs";
import { n as PageHero, r as SectionHead } from "./page-hero-DYdDYaeP.mjs";
import { i as InfoCard, t as CardGrid } from "./inner-BLN76_Pm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-workshops-BYzFkE7j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var inputCls = "w-full rounded-lg border border-fg/10 bg-bg px-3 py-2.5 text-sm text-fg outline-none placeholder:text-fg/30 focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/60";
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "AI Workshops",
			title: "A practical AI workshop for service-business owners and leadership teams.",
			body: "How to put AI to work inside the software a business already runs. For trade associations, franchise groups, PE portfolios, chambers, peer groups, and software user groups.",
			primary: {
				href: "#request",
				label: "Request a Free Workshop"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					title: "How to build an AI system inside your business",
					body: "A working session, not a product pitch. The goal is that the room leaves knowing what is worth automating, what is not, and what the first ninety days could look like."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardGrid, {
					cols: "md:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							title: "Agents vs chatbots",
							body: "What continuously watches a workflow versus what waits for a prompt."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							title: "What you can automate now",
							body: "Follow-up, monitoring, reporting, exceptions. The leftover work between systems."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							title: "Local vs cloud",
							body: "When work should stay on hardware you control, and when a cloud model is the right tool."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							title: "Connecting existing software",
							body: "APIs, webhooks, and what to do when a vendor has no usable interface."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							title: "Security and permissions",
							body: "Least privilege, approval, logs, and who owns the credentials."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							title: "Hardware options",
							body: "Cloud, dedicated local, or hybrid — designed around the workload, not a vendor story."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							title: "A real deployment",
							body: "What this looks like inside a multi-business automotive operation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							title: "What should stay human",
							body: "Judgment, money, and customer promises. The work you would not hand a new hire on day one."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/case-studies/$slug",
						params: { slug: "detail-driven" },
						className: "text-sm font-medium text-gold hover:text-gold-light",
						children: "View the Detail Driven deployment"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "Who this is for",
				body: "Leadership rooms that run service businesses. We speak to the operators, not an IT conference."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-3xl flex-wrap justify-center gap-2 px-6",
				children: [
					"Trade associations",
					"Franchise groups",
					"PE portfolios",
					"Chambers",
					"Peer groups",
					"Software user groups",
					"Owner organizations"
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-fg/10 bg-surface px-4 py-2 text-sm text-fg/70",
					children: item
				}, item))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkshopForm, {})
	] });
}
function WorkshopForm() {
	const [form, setForm] = (0, import_react.useState)({
		first: "",
		last: "",
		email: "",
		phone: "",
		organization: "",
		audience: "",
		notes: ""
	});
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	const field = (k) => ({
		value: form[k],
		onChange: (e) => setForm((f) => ({
			...f,
			[k]: e.target.value
		}))
	});
	const onSubmit = async (e) => {
		e.preventDefault();
		if (busy) return;
		setBusy(true);
		setError("");
		try {
			await submitWorkshop({ data: form });
			setSent(true);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Could not send. Try again.");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		id: "request",
		className: "border-t border-fg/5 pt-24 pb-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			title: "Request a free workshop",
			body: "Tell us who the room is. We will follow up with format, timing, and whether we are the right fit."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-xl px-6",
			children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-fg/10 bg-surface p-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-medium text-fg",
					children: "Request received."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm font-light text-fg/60",
					children: "We will follow up with next steps."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "space-y-3 rounded-2xl border border-fg/10 bg-surface p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
								children: "First name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								...field("first"),
								className: inputCls,
								autoComplete: "given-name"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
								children: "Last name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								...field("last"),
								className: inputCls,
								autoComplete: "family-name"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "email",
							...field("email"),
							className: inputCls,
							autoComplete: "email"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
							children: "Phone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "tel",
							...field("phone"),
							className: inputCls,
							autoComplete: "tel"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
							children: "Organization"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							...field("organization"),
							className: inputCls,
							autoComplete: "organization"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
							children: "Who is the room"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							required: true,
							...field("audience"),
							className: inputCls,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Select"
							}), WORKSHOP_AUDIENCES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: a.value,
								children: a.label
							}, a.value))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
							children: "Notes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							...field("notes"),
							rows: 4,
							className: inputCls,
							placeholder: "Group size, city, timing…"
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-red-400",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeamButton, {
							type: "submit",
							className: "w-full",
							disabled: busy,
							children: busy ? "Sending…" : "Request a Free Workshop"
						})
					})
				]
			})
		})]
	});
}
//#endregion
export { Page as component };
