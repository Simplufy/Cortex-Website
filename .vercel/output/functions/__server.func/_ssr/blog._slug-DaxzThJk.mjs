import { b as require_jsx_runtime, v as Link, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as ArrowLeft } from "../_libs/lucide-react.mjs";
import { g as BeamButton, i as Route$3, o as BLOG_POSTS } from "./router-D5iiC1sJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-DaxzThJk.js
var import_jsx_runtime = require_jsx_runtime();
function Post() {
	const { slug } = Route$3.useParams();
	const post = BLOG_POSTS.find((p) => p.slug === slug);
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
				className: "mt-4 text-sm text-fg/40",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 space-y-6 text-lg leading-relaxed font-light text-fg/70",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This is the version we actually use with clients — not a thought-leadership take. The problem shows up the same way in almost every $5M–$100M company: the work is real, the system around the work is not." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We start by mapping. Not because mapping is fashionable, but because you cannot fix (or automate) a process you cannot see. The Company Brain is that map: every handoff, every tool, every place something falls through." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Then we unify. One login, one source of truth, role-based views so each person sees what they need. Only after that foundation holds do we layer automation and AI. Skip the order and you automate the mess." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [post.excerpt, " If you want the template, the sprint, or a second set of eyes on your operation, book a call. No pitch. We’ll tell you if we’re the right fit."] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeamButton, {
					to: "/book-a-call",
					children: "Book a Call"
				})
			})
		]
	});
}
//#endregion
export { Post as component };
