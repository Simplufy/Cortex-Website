import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as BRAND, s as FounderPhoto } from "./router-DEkOF6vF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/confirmed-fQWrko6j.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-2xl px-6 pt-16 pb-28 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] font-bold tracking-[0.22em] text-gold uppercase",
				children: "Confirmed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-4xl font-medium tracking-tight text-fg md:text-5xl",
				children: "You're on the calendar."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 text-lg font-light text-fg/60",
				children: [
					"Check your email for the invite. Thirty minutes with ",
					BRAND.founder,
					". We look at how work actually moves through your software."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-2xl border border-fg/10 bg-surface p-8 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-bold tracking-widest text-gold uppercase",
					children: "Have this ready"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm leading-relaxed font-light text-fg/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The logins you already use. CRM, shop or field software, ads, accounting. We do not need passwords on the call." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "One or two places the week stalls. Follow-up, reporting, jobs that sit too long." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Whoever actually runs the board, if that is not you." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-2xl border border-fg/10 bg-surface p-8 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-bold tracking-widest text-gold uppercase",
					children: "What you leave with"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed font-light text-fg/70",
					children: "An AI Opportunity Map: highest-value agent paths, what we can actually connect, what should stay human, and a recommended first deployment. No generic presentation. No obligation to build."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-12 flex flex-col items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FounderPhoto, { className: "size-14" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium text-fg",
						children: BRAND.founder
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-fg/50",
						children: [
							BRAND.founderRole,
							", ",
							BRAND.name
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-fg/55",
						children: [
							"Need to move it?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${BRAND.email}`,
								className: "text-gold hover:text-gold-light",
								children: BRAND.email
							}),
							" · ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: BRAND.phoneHref,
								className: "text-gold hover:text-gold-light",
								children: BRAND.phone
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Page as component };
