import { b as require_jsx_runtime, v as Link, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as ArrowLeft } from "../_libs/lucide-react.mjs";
import { c as CASE_STUDIES, g as BeamButton, r as Route$1 } from "./router-D5iiC1sJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/case-studies._slug-YdzZPQ13.js
var import_jsx_runtime = require_jsx_runtime();
function CaseStudy() {
	const { slug } = Route$1.useParams();
	const study = CASE_STUDIES.find((c) => c.slug === slug);
	if (!study) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-6 pt-16 pb-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/case-studies",
				className: "inline-flex items-center gap-2 text-sm text-fg/50 hover:text-gold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " All case studies"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-[10px] font-bold tracking-widest text-gold uppercase",
				children: study.industry
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-4xl font-medium tracking-tight text-fg md:text-6xl",
				children: study.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-xl font-light text-fg/60",
				children: study.result
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 overflow-hidden rounded-2xl border border-fg/10 bg-surface p-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: study.logo,
					alt: study.name,
					className: "mx-auto h-20 object-contain"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "mt-12 border-l-2 border-gold pl-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-2xl leading-snug font-medium tracking-tight text-fg",
					children: [
						"“",
						study.quote,
						"”"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "mt-4 text-sm text-fg/50",
					children: [
						study.person,
						" · ",
						study.role
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 space-y-6 text-lg leading-relaxed font-light text-fg/70",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [study.name, " came to OpsKings the way most $5M–$100M companies do: the product or service was working. The operation was not. Work lived in inboxes, spreadsheets, and a few people’s heads."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We ran a System Design Sprint — 3–5 calls over two weeks — and built a Company Brain of how the business actually ran. Then we designed a custom portal around that map. One login. One source of truth. Automations layered on once the foundation held." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The result: ",
						study.result,
						" The team stopped coordinating across six tools. Leadership could trust the numbers. And the operation no longer needed a founder standing in the middle of every decision."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeamButton, {
					to: "/book-a-call",
					children: "Book a Call"
				})
			})
		]
	});
}
//#endregion
export { CaseStudy as component };
