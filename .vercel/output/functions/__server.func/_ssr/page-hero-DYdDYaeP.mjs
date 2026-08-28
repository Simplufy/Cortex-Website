import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as BeamButton, f as GhostButton } from "./router-DEkOF6vF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-DYdDYaeP.js
var import_jsx_runtime = require_jsx_runtime();
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-5 text-[10px] font-bold tracking-[0.18em] text-gold uppercase",
		children
	});
}
function PageHero({ eyebrow, title, titleNode, body, primary = {
	to: "/audit",
	label: "Get Your Free AI Operations Audit"
}, secondary }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "relative mx-auto max-w-7xl pt-24 pb-16 lg:pt-24 lg:pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }),
				titleNode ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "animate-fade-up delay-100 text-balance text-4xl leading-[1.1] font-medium tracking-tighter text-fg sm:text-5xl md:text-6xl lg:text-7xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "animate-fade-up delay-200 mt-8 max-w-2xl text-balance text-lg leading-relaxed font-light text-fg/60 md:text-xl",
					children: body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-up delay-300 mt-10 flex w-full flex-col items-center gap-6 sm:w-auto sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeamButton, {
						to: primary.to,
						href: primary.href,
						children: primary.label
					}), secondary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
						to: secondary.to,
						children: secondary.label
					})]
				})
			]
		})
	});
}
function SectionHead({ kicker, title, body, center = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: center ? "mx-auto mb-14 max-w-3xl px-6 text-center" : "mb-14 max-w-3xl px-6",
		children: [
			kicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: kicker }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-balance text-3xl font-medium tracking-tight text-fg md:text-4xl lg:text-5xl",
				children: title
			}),
			body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-lg leading-relaxed font-light text-fg/60",
				children: body
			})
		]
	});
}
//#endregion
export { PageHero as n, SectionHead as r, Eyebrow as t };
