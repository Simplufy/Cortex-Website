import { b as require_jsx_runtime, v as Link, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as ArrowLeft } from "../_libs/lucide-react.mjs";
import { g as BeamButton, n as Route, p as PODCASTS } from "./router-D5iiC1sJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/podcast._slug-c44AMnZ7.js
var import_jsx_runtime = require_jsx_runtime();
function Episode() {
	const { slug } = Route.useParams();
	const ep = PODCASTS.find((p) => p.slug === slug);
	if (!ep) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-2xl px-6 pt-16 pb-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/resources",
				className: "inline-flex items-center gap-2 text-sm text-fg/50 hover:text-gold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " All podcasts"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-[10px] font-bold tracking-widest text-gold uppercase",
				children: ep.tag
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-4xl font-medium tracking-tight text-fg md:text-5xl",
				children: ep.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-fg/40",
				children: ep.minutes
			}),
			"img" in ep && ep.img && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: ep.img,
				alt: ep.name,
				className: "mt-10 w-full rounded-2xl border border-fg/10 object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-xl leading-relaxed font-light text-fg/70",
				children: ep.excerpt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-lg leading-relaxed font-light text-fg/70",
				children: "Unfiltered conversation with a mid-market operator. What actually changed once the operation ran on systems instead of memory — the messy middle, not the highlight reel."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://open.spotify.com/show/1qLQGRwcUaXLpx3uPk8Ry6?si=c420274ee1a94aed",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "rounded-full border border-fg/10 px-5 py-2 text-sm text-fg/70 hover:text-fg",
					children: "Listen on Spotify"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://www.youtube.com/playlist?list=PLk7OsZA4rAwafw9kHewAmnZYaRJjXLHrJ",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "rounded-full border border-fg/10 px-5 py-2 text-sm text-fg/70 hover:text-fg",
					children: "Watch on YouTube"
				})]
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
export { Episode as component };
