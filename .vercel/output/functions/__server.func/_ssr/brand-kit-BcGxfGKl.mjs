import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Download } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brand-kit-BcGxfGKl.js
var import_jsx_runtime = require_jsx_runtime();
var IMAGES = [
	{
		name: "App icon",
		file: "app-icon-1024.png"
	},
	{
		name: "Dark profile photo",
		file: "profile-dark-800.png"
	},
	{
		name: "Orange profile photo",
		file: "profile-orange-800.png"
	},
	{
		name: "LinkedIn banner",
		file: "linkedin-banner-1584x396.jpg"
	},
	{
		name: "X header",
		file: "x-header-1500x500.jpg"
	},
	{
		name: "Facebook cover",
		file: "facebook-cover-1640x624.jpg"
	},
	{
		name: "Link preview / OG",
		file: "og-1200x630.jpg"
	},
	{
		name: "Instagram square",
		file: "instagram-1080.jpg"
	},
	{
		name: "Calendar cover",
		file: "calendar-cover-1920x1080.jpg"
	},
	{
		name: "Meeting thumbnail",
		file: "meeting-thumbnail-1280x720.jpg"
	},
	{
		name: "Email header",
		file: "email-header-1200x360.png"
	},
	{
		name: "Email signature",
		file: "lockup-email-signature.png"
	},
	{
		name: "Horizontal lockup",
		file: "lockup-horizontal-dark.png"
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-5xl px-6 pt-16 pb-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] font-bold tracking-widest text-gold uppercase",
				children: "Internal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-4xl font-medium tracking-tight text-fg md:text-5xl",
				children: "Brand kit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl font-light text-fg/60",
				children: "Use the orange button for the full zip. Or right-click any image below and choose Save image as."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "/brand/cortex-brand-kit.zip",
				target: "_blank",
				rel: "noreferrer",
				className: "mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold tracking-widest text-bg uppercase hover:bg-gold-light",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Download full kit (zip)"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 sm:grid-cols-2",
				children: IMAGES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `/brand/${item.file}`,
					target: "_blank",
					rel: "noreferrer",
					className: "group overflow-hidden rounded-2xl border border-fg/10 bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-h-40 items-center justify-center bg-bg p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: `/brand/${item.file}`,
							alt: item.name,
							className: "max-h-52 w-full object-contain"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-4 py-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg/80 group-hover:text-fg",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-gold",
							children: "Open / save"
						})]
					})]
				}, item.file))
			})
		]
	});
}
//#endregion
export { Page as component };
