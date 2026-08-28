import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as BRAND, s as FounderPhoto } from "./router-DEkOF6vF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/thanks-CxgNrJrA.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-2xl px-6 pt-16 pb-28 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] font-bold tracking-[0.22em] text-gold uppercase",
				children: "Request received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-4xl font-medium tracking-tight text-fg md:text-5xl",
				children: "We got it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 text-lg font-light text-fg/60",
				children: [BRAND.founder, " will review what you sent. If it looks like a fit, you will get an email with a link to schedule the 30-minute walkthrough. Nothing else for you to do right now."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-2xl border border-fg/10 bg-surface p-8 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-bold tracking-widest text-gold uppercase",
					children: "What happens next"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-4 space-y-4 text-sm leading-relaxed font-light text-fg/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-fg",
							children: "1. We read the request."
						}), " Company, stack, revenue, and where the week stalls. That is how we decide if the audit is worth both of our time."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-fg",
							children: "2. You get a scheduling link."
						}), " If we can help, the email has a calendar. Pick a time. If we cannot, we will say so instead of wasting a call."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-fg",
							children: "3. The walkthrough."
						}), " Thirty minutes on how work moves through your software. You leave with an AI Opportunity Map."] })
					]
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
							"Questions in the meantime?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${BRAND.email}`,
								className: "text-gold hover:text-gold-light",
								children: BRAND.email
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
