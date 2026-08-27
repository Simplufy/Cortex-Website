import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHero, r as SectionHead } from "./page-hero-CWkbZTkk.mjs";
import { i as InfoCard, n as FinalCtaBlock, t as CardGrid } from "./inner-CMG97LAd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-enablement-BUmweVO0.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "AI Enablement",
			title: "AI that works inside your operation",
			body: "Running in production, not pitch decks. We don’t bolt a chatbot onto a broken process. We map the work, unify it in a system, then layer AI on a foundation that actually holds.",
			primary: {
				to: "/book-a-call",
				label: "Book an Audit"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "How it ships",
				body: "AI we actually put in production. Qualitative markers. No fake percentages."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardGrid, {
				cols: "md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: "On a mapped process",
						body: "If the work isn’t documented, the model just automates the mess. Sequence matters: map, unify, then automate."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: "Inside your system of record",
						body: "The model reads and writes the same portal your team uses. No sidecar tool nobody opens."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: "With a human in the loop",
						body: "Exceptions surface to a person. The boring path runs itself."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-fg/5 pt-24 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, { title: "What we actually deploy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardGrid, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "Deadline and SLA watchers",
					body: "Three days go by, someone missed a deadline, the system fires on its own."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "Status without the meeting",
					body: "Need an update across 30 clients? It’s already there."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "Voice-to-action",
					body: "You send a voice note. The system queries your data, takes the action, and confirms it’s done."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					title: "Admin that shouldn’t need a human",
					body: "Data entry, routing, follow-ups, document chase — handled."
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaBlock, {
			title: "Don’t automate a mess.",
			body: "Book a call. We’ll tell you honestly whether AI is the next step, or whether the process still needs to be mapped first."
		})
	] });
}
//#endregion
export { Page as component };
