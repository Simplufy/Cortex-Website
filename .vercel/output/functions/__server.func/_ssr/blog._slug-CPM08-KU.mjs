import { H as notFound, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as ArrowLeft } from "../_libs/lucide-react.mjs";
import { a as articleBySlug, d as BeamButton, i as Route$4 } from "./router-DEkOF6vF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-CPM08-KU.js
var import_jsx_runtime = require_jsx_runtime();
function Post() {
	const { slug } = Route$4.useParams();
	const post = articleBySlug(slug);
	if (!post) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-2xl px-6 pt-16 pb-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/resources",
				className: "inline-flex items-center gap-2 text-sm text-fg/50 hover:text-gold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " All articles"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-[10px] font-bold tracking-widest text-gold uppercase",
				children: post.category
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-4xl font-medium tracking-tight text-fg md:text-5xl",
				children: post.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-fg/50",
				children: [
					post.author,
					" · ",
					post.date,
					" · ",
					post.minutes,
					" min read"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-xl leading-relaxed font-light text-fg/70",
				children: post.excerpt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-6 text-lg leading-relaxed font-light text-fg/70",
				children: post.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 40)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeamButton, {
					to: "/audit",
					children: "Get Your Free AI Operations Audit"
				})
			})
		]
	});
}
//#endregion
export { Post as component };
