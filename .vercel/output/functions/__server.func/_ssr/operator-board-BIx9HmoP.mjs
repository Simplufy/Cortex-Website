import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/operator-board-BIx9HmoP.js
var import_jsx_runtime = require_jsx_runtime();
var VARIANTS = {
	"detail-driven": {
		operation: "Detail Driven",
		nav: [
			"Command",
			"Repair",
			"Collision",
			"Detailing",
			"Glass",
			"Money",
			"Demand"
		],
		exceptions: [
			{
				shop: "Repair",
				source: "Tekmetric",
				label: "Aging repair orders"
			},
			{
				shop: "Collision",
				source: "CCC ONE",
				label: "Quiet files"
			},
			{
				shop: "Detailing",
				source: "Bookings",
				label: "Unconfirmed appointments"
			},
			{
				shop: "Finance",
				source: "QuickBooks",
				label: "Unbilled completed work"
			}
		],
		feeds: "Feeds from Tekmetric, CCC ONE, GoHighLevel, QuickBooks, Stripe, Google Ads, Meta, GA4, and Google Business Profile. Least privilege. Not a master login."
	},
	operator: {
		operation: "Operator",
		nav: [
			"Command",
			"Operations",
			"Money",
			"Demand",
			"Shops"
		],
		exceptions: [
			{
				shop: "Operations",
				source: "Field software",
				label: "Aging jobs"
			},
			{
				shop: "Sales",
				source: "CRM",
				label: "Unsold estimates"
			},
			{
				shop: "Finance",
				source: "QuickBooks",
				label: "Unbilled completed work"
			},
			{
				shop: "Marketing",
				source: "Ads",
				label: "Spend vs booked"
			}
		],
		feeds: "Feeds from CRM, field software, books, ads, and reviews. Least privilege. Not a master login."
	}
};
var PANES = [
	{
		kicker: "Operations",
		rows: [
			"Board load",
			"Stalled work",
			"Capacity exceptions"
		]
	},
	{
		kicker: "Finance",
		rows: [
			"Unbilled work",
			"A/R aging",
			"Memberships"
		]
	},
	{
		kicker: "Marketing",
		rows: [
			"Spend vs booked",
			"Reviews",
			"Lead sources"
		]
	}
];
var POINTS = [
	{
		title: "One board",
		body: "Operations, marketing, finance, and the shops. Exceptions and numbers from the stack you already pay for."
	},
	{
		title: "Least privilege",
		body: "Each view and each agent gets the systems it needs. Not a master login to the company."
	},
	{
		title: "Systems stay",
		body: "Shop software, CRM, books, ads remain the system of record. The dashboard reads them. It does not replace them."
	}
];
function OperatorBoard({ variant = "detail-driven" }) {
	const v = VARIANTS[variant];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-2xl border border-fg/10 bg-elevated",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 border-b border-fg/10 px-4 py-3 sm:px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 shrink-0 rounded-full bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate text-xs font-medium tracking-wide text-fg",
						children: [
							"Cortex ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg/35",
								children: "/"
							}),
							" ",
							v.operation
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "shrink-0 text-[10px] font-bold tracking-widest text-gold uppercase",
					children: "Private"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-nowrap gap-1 overflow-x-auto border-b border-fg/10 px-3 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
				children: v.nav.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: i === 0 ? "shrink-0 rounded-md bg-gold/15 px-2.5 py-1 text-xs font-medium text-gold" : "shrink-0 rounded-md px-2.5 py-1 text-xs text-fg/45",
					children: item
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 p-4 sm:p-5 md:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-fg/10 bg-surface p-4 md:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-bold tracking-widest text-gold uppercase",
						children: "Exceptions today"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-2 sm:grid-cols-2",
						children: v.exceptions.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-baseline justify-between gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg/85",
								children: row.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "shrink-0 text-xs text-fg/35",
								children: [
									row.shop,
									" · ",
									row.source
								]
							})]
						}, row.label))
					})]
				}), PANES.map((pane) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-fg/10 bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-bold tracking-widest text-gold uppercase",
						children: pane.kicker
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: pane.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 text-sm text-fg/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1 shrink-0 rounded-full bg-fg/25" }), row]
						}, row))
					})]
				}, pane.kicker))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border-t border-fg/10 px-4 py-3 text-xs leading-relaxed text-fg/40 sm:px-5",
				children: v.feeds
			})
		]
	});
}
function DashboardShowcase() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OperatorBoard, { variant: "operator" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 grid gap-3 sm:grid-cols-3",
			children: POINTS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border border-fg/10 bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-medium text-fg",
					children: row.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed font-light text-fg/60",
					children: row.body
				})]
			}, row.title))
		})]
	});
}
//#endregion
export { OperatorBoard as n, DashboardShowcase as t };
