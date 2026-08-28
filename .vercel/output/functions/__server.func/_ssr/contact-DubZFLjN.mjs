import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, i as Phone, o as Mail } from "../_libs/lucide-react.mjs";
import { c as AuditButton, m as BRAND, o as RevealSection } from "./router-DEkOF6vF.mjs";
import { n as PageHero } from "./page-hero-DYdDYaeP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DubZFLjN.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Talk to the person who does the work.",
		body: "The Free AI Operations Audit is the front door. If you just need an email or a phone number, here they are."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
		className: "pb-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-4xl gap-4 px-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-fg/10 bg-surface p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-lg font-medium text-fg",
							children: "Phone"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: BRAND.phoneHref,
							className: "mt-2 block text-sm text-fg/70 hover:text-gold",
							children: BRAND.phone
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-fg/10 bg-surface p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-lg font-medium text-fg",
							children: "Email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${BRAND.email}`,
							className: "mt-2 block text-sm text-fg/70 hover:text-gold",
							children: BRAND.email
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-fg/10 bg-surface p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-lg font-medium text-fg",
							children: "Where"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-fg/70",
							children: [
								BRAND.city,
								", United States",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Work with operators nationally."
							]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditButton, { children: "Get Your Free AI Operations Audit" })
		})]
	})] });
}
//#endregion
export { Page as component };
