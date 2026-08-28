import { i as __toESM } from "../_runtime.mjs";
import { U as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as BRAND } from "./router-DEkOF6vF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schedule-Da-OA-lf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BOOKING_ID = "VU6HcuUgEdk40iMtwxIt";
var IFRAME_ID = "VU6HcuUgEdk40iMtwxIt_1787845452469";
function Page() {
	(0, import_react.useEffect)(() => {
		if (document.querySelector("script[src=\"https://link.msgsndr.com/js/form_embed.js\"]")) return;
		const script = document.createElement("script");
		script.src = "https://link.msgsndr.com/js/form_embed.js";
		script.async = true;
		document.body.appendChild(script);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-4xl px-6 pt-14 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-[10px] font-bold tracking-[0.22em] text-gold uppercase",
				children: BRAND.legal
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-center text-4xl font-medium tracking-tight text-fg md:text-5xl",
				children: "Pick a time for the walkthrough"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-4 max-w-xl text-center text-lg font-light text-fg/60",
				children: "Thirty minutes on how work moves through your software. You leave with an AI Opportunity Map."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 overflow-hidden rounded-2xl border border-fg/10 bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					src: `https://api.leadconnectorhq.com/widget/booking/${BOOKING_ID}`,
					id: IFRAME_ID,
					title: "Schedule the AI Operations Audit walkthrough",
					allow: "payment",
					scrolling: "no",
					className: "w-full border-0",
					style: {
						minHeight: 1100,
						overflow: "hidden"
					}
				})
			})
		]
	});
}
//#endregion
export { Page as component };
