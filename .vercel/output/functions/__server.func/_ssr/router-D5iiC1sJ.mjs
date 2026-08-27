import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as LayoutDashboard, d as ChevronDown, f as ArrowRight, i as TriangleAlert, n as X, o as Mail, r as Workflow, s as Linkedin, t as Youtube } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D5iiC1sJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
/** Decorative gold network — SVG, not canvas (this is a marketing site, not a game). */
function NetBackground() {
	const nodes = [
		[8, 12],
		[18, 8],
		[28, 18],
		[40, 10],
		[52, 16],
		[64, 8],
		[76, 14],
		[88, 10],
		[94, 22],
		[12, 32],
		[22, 28],
		[34, 36],
		[48, 30],
		[60, 38],
		[72, 28],
		[84, 34],
		[6, 48],
		[16, 54],
		[30, 50],
		[42, 58],
		[56, 52],
		[70, 60],
		[82, 48],
		[92, 56],
		[10, 72],
		[24, 68],
		[38, 76],
		[50, 70],
		[64, 78],
		[78, 70],
		[90, 80],
		[14, 90],
		[32, 88],
		[46, 94],
		[62, 90],
		[80, 92]
	];
	const links = [];
	for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
		const dx = nodes[i][0] - nodes[j][0];
		const dy = nodes[i][1] - nodes[j][1];
		if (Math.hypot(dx, dy) < 16) links.push([i, j]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 z-0 h-full w-full opacity-20",
		viewBox: "0 0 100 100",
		preserveAspectRatio: "xMidYMid slice",
		children: [links.map(([a, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: nodes[a][0],
			y1: nodes[a][1],
			x2: nodes[b][0],
			y2: nodes[b][1],
			stroke: "#a68358",
			strokeWidth: "0.12"
		}, i)), nodes.map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: x,
			cy: y,
			r: "0.35",
			fill: "#a68358"
		}, i))]
	});
}
var KEY = "ok-cookie-consent";
function CookieBanner() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			if (!localStorage.getItem(KEY)) setOpen(true);
		} catch {
			setOpen(true);
		}
	}, []);
	const choose = (v) => {
		try {
			localStorage.setItem(KEY, v);
		} catch {}
		setOpen(false);
	};
	(0, import_react.useEffect)(() => {
		const onManage = () => setOpen(true);
		window.addEventListener("ok-manage-cookies", onManage);
		return () => window.removeEventListener("ok-manage-cookies", onManage);
	}, []);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-[80] p-4 sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-fg/10 bg-surface/95 p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:flex-row sm:items-center sm:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex-1 text-sm font-light leading-relaxed text-fg/70",
				children: [
					"We use cookies to run the site and, if you accept, to measure how it's used.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "text-gold hover:text-gold-light",
						children: "Learn more"
					}),
					"."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => choose("declined"),
					className: "rounded-full border border-fg/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-fg/60 hover:text-fg",
					children: "Decline"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => choose("accepted"),
					className: "rounded-full bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-widest text-bg hover:bg-gold-light",
					children: "Accept"
				})]
			})]
		})
	});
}
function openCookieManager() {
	window.dispatchEvent(new Event("ok-manage-cookies"));
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function BeamButton({ to, href, children, size = "md", className, onClick }) {
	const cls = cn("group inline-flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(166,131,88,0.2)] focus:outline-none font-semibold text-fg tracking-widest rounded-full relative items-center justify-center", size === "sm" ? "px-5 py-2.5 text-[11px]" : "px-10 py-4 text-sm", className);
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 -z-20 overflow-hidden rounded-full p-px",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#a68358_360deg)]",
				style: { animation: "beam-spin 3s linear infinite" }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-px rounded-full bg-bg" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0.5 -z-10 overflow-hidden rounded-full bg-zinc-950",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-b from-zinc-800/60 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 mix-blend-overlay opacity-30",
					style: {
						backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
						backgroundSize: "12px 12px",
						animation: "dots-move 8s linear infinite"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute bottom-0 left-1/2 h-1/2 w-2/3 -translate-x-1/2 rounded-full bg-gold/10 blur-2xl transition-colors duration-500 group-hover:bg-gold/30" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative z-10 text-fg/90 transition-colors group-hover:text-fg",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
			className: cn("relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1", size === "sm" ? "size-3" : "size-4"),
			strokeWidth: 2
		})
	] });
	if (to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: cls,
		onClick,
		children: inner
	});
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: cls,
		onClick,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: cls,
		onClick,
		children: inner
	});
}
function GhostButton({ to, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: cn("inline-flex w-full items-center justify-center rounded-full border border-fg/5 px-8 py-4 text-sm font-medium text-fg/60 transition-all hover:bg-fg/5 hover:text-fg sm:w-auto", className),
		children
	});
}
var CLIENT_LOGOS = [
	{
		src: "/images/clients/sales-automation-systems.webp",
		alt: "Sales Automation Systems"
	},
	{
		src: "/images/clients/national-commerce.webp",
		alt: "National Commerce"
	},
	{
		src: "/images/clients/million-dollar-author.webp",
		alt: "Million Dollar Author"
	},
	{
		src: "/images/clients/growth-engine-x.webp",
		alt: "Growth Engine X"
	},
	{
		src: "/images/clients/leadbird.webp",
		alt: "Leadbird"
	},
	{
		src: "/images/clients/factum-financial.webp",
		alt: "Factum Financial"
	},
	{
		src: "/images/clients/staxx.webp",
		alt: "Staxx"
	},
	{
		src: "/images/clients/full-circle.webp",
		alt: "Full Circle"
	},
	{
		src: "/images/clients/g1-construction.webp",
		alt: "G1 Construction"
	},
	{
		src: "/images/clients/autoup.webp",
		alt: "AutoUp"
	},
	{
		src: "/images/clients/goldenweb.webp",
		alt: "GoldenWeb SEO"
	},
	{
		src: "/images/clients/perkprop.webp",
		alt: "PerkProp Real Estate"
	},
	{
		src: "/images/clients/letmetalk.webp",
		alt: "LetMeTalk"
	},
	{
		src: "/images/clients/newseas.webp",
		alt: "NewSeas"
	},
	{
		src: "/images/clients/client-ascension.webp",
		alt: "Client Ascension"
	},
	{
		src: "/images/clients/contara.webp",
		alt: "Contara"
	},
	{
		src: "/images/clients/daydreamers-design.webp",
		alt: "Daydreamers Design"
	},
	{
		src: "/images/clients/dripos.webp",
		alt: "Dripos"
	},
	{
		src: "/images/clients/greenhouse-emporium.webp",
		alt: "Greenhouse Emporium"
	},
	{
		src: "/images/clients/lever-growth.webp",
		alt: "Lever Growth"
	},
	{
		src: "/images/clients/lynn-lead-generation.webp",
		alt: "Lynn Lead Generation"
	},
	{
		src: "/images/clients/pleiades-consultancy.webp",
		alt: "Pleiades Consultancy"
	},
	{
		src: "/images/clients/procreativ-solutions.webp",
		alt: "ProCreativ Solutions"
	},
	{
		src: "/images/clients/regenaskin.webp",
		alt: "Regenaskin"
	}
];
var TEAM = [
	{
		slug: "toni-debelic",
		name: "Toni Debelić",
		role: "Co-Founder & Managing Partner",
		img: "/images/team/toni-debelic.webp",
		x: 22,
		y: 28
	},
	{
		slug: "ryan-hildebrandt",
		name: "Ryan Hildebrandt",
		role: "Co-Founder & Managing Partner",
		img: "/images/team/ryan-hildebrandt.webp",
		x: 48,
		y: 18
	},
	{
		slug: "luka-franulovic",
		name: "Luka Franulović",
		role: "Marketing",
		img: "/images/team/luka-franulovic.webp",
		x: 72,
		y: 26
	},
	{
		slug: "david-cavar-lacic",
		name: "David Čavar Lacić",
		role: "Engineering Lead",
		img: "/images/team/david-cavar-lacic.webp",
		x: 18,
		y: 52
	},
	{
		slug: "steven-da-silva",
		name: "Steven Da Silva",
		role: "Business Analyst",
		img: "/images/team/steven-da-silva.webp",
		x: 38,
		y: 58
	},
	{
		slug: "murad-sadigov",
		name: "Murad Sadigov",
		role: "Developer",
		img: "/images/team/murad-sadigov.webp",
		x: 58,
		y: 48
	},
	{
		slug: "filip-andric",
		name: "Filip Andrić",
		role: "Automations Specialist",
		img: "/images/team/filip-andric.webp",
		x: 78,
		y: 56
	},
	{
		slug: "fran-portak",
		name: "Fran Portak",
		role: "Security Architect",
		img: "/images/team/fran-portak.webp",
		x: 28,
		y: 78
	},
	{
		slug: "naveed-asakzai",
		name: "Naveed Asakzai",
		role: "Business Analyst",
		img: "/images/team/naveed-asakzai.webp",
		x: 50,
		y: 80
	},
	{
		slug: "marko-laca",
		name: "Marko Laca",
		role: "QA",
		img: "/images/team/marko-laca.webp",
		x: 68,
		y: 74
	},
	{
		slug: "vugar-nasraddinli",
		name: "Vugar Nasraddinli",
		role: "Developer",
		img: "/images/team/vugar-nasraddinli.webp",
		x: 86,
		y: 40
	}
];
var INDUSTRIES = [
	{
		slug: "marketing",
		href: "/industry-marketing",
		name: "Marketing & Advertising",
		blurb: "Campaigns perform, back-end is a mess.",
		hero: ["Your campaigns perform.", "Your back-end doesn’t."],
		intro: "You’re great at getting results for clients. But behind the scenes, it’s a mess, client onboarding takes forever, reporting is a manual grind, and account managers spend more time in spreadsheets than building relationships. We build the operational backbone so you can scale accounts without scaling headcount.",
		quote: "Every new client adds two more spreadsheets, three more Slack threads, and zero more margin.",
		symptoms: [
			{
				title: "Client Onboarding Drags On",
				body: "Onboarding a new account takes 2–4 weeks when it should take 2–4 days. Contracts get signed, then the client sits in limbo while your team scrambles to set up access, gather assets, and schedule kickoffs."
			},
			{
				title: "Reporting Eats Your Margins",
				body: "Every Monday morning, three account managers spend a combined 15 hours pulling screenshots from Meta Ads, Google Ads, GA4, and your CRM into a “custom dashboard” for clients. That’s billable time you’re giving away for free."
			},
			{
				title: "Account Profitability Is a Guess",
				body: "You know some clients are bleeding you dry and others are goldmines, but you can’t prove it. Time tracking is sporadic, scope creep goes unmeasured, and you’re flying blind on which accounts to double down on."
			},
			{
				title: "Coordination Lives in Slack",
				body: "Creative requests come in via DMs. Strategy decisions happen in threads. Approvals get lost. Nothing is tracked. New hires take months to figure out how work actually flows through the agency."
			},
			{
				title: "Scaling Feels Like Punishment",
				body: "Every new account triggers the same groan from your team. More clients should mean more revenue, not more chaos. But your operations weren’t built to scale, they were built to survive."
			}
		],
		systems: [
			{
				title: "Client Operating System",
				body: "A centralized portal where every client, every campaign, every asset, and every deliverable lives in one place.",
				items: [
					"Client health dashboards",
					"Unified project + campaign view",
					"Asset library with version control"
				]
			},
			{
				title: "Automated Reporting Engine",
				body: "Pull data from every ad platform, analytics tool, and CRM into branded client reports that generate themselves.",
				items: [
					"Multi-platform data pipeline",
					"Automated client-facing reports",
					"Custom KPI dashboards"
				]
			},
			{
				title: "Agency Onboarding Workflow",
				body: "Every new client follows a structured, automated onboarding path from signed contract to first deliverable.",
				items: [
					"Automated task assignment",
					"Client-facing onboarding portal",
					"Kickoff sequence automation"
				]
			},
			{
				title: "Account Profitability Tracker",
				body: "Real-time visibility into which accounts are making money and which are bleeding you dry.",
				items: [
					"Real-time utilization tracking",
					"Scope creep alerts",
					"Per-account P&L visibility"
				]
			}
		]
	},
	{
		slug: "professional-services",
		href: "/industry-professional-services",
		name: "Professional Services",
		blurb: "Senior people doing coordinator work.",
		hero: ["Your seniors are doing coordinator work.", "That’s not a people problem."],
		intro: "Your senior people are doing coordinator-level work because there’s no system to handle it. Project delivery varies by who’s running it. Utilization is a guess. We systematize your delivery so quality stays consistent, without the heroics.",
		quote: "The person who can sell the work is also the person chasing invoices and updating the tracker.",
		symptoms: [
			{
				title: "Delivery Depends on Heroes",
				body: "Quality varies by who’s running the engagement. When a principal is out, the work stalls. There’s no system carrying the process — just people."
			},
			{
				title: "Utilization Is a Guess",
				body: "You can’t see who’s at capacity until they’re already drowning. Staffing is done in spreadsheets that are two weeks out of date."
			},
			{
				title: "Billing Lags Reality",
				body: "Work is done. Invoices go out three weeks later because nobody closed the engagement in the system."
			},
			{
				title: "Knowledge Walks Out",
				body: "The way you deliver lives in a few people’s heads. A departure costs you months of reconstructed process."
			},
			{
				title: "Scope Creep Is Invisible",
				body: "Extra work gets absorbed as goodwill until the margin is gone. Nobody sees it in time to have the conversation."
			}
		],
		systems: [
			{
				title: "Delivery Operating System",
				body: "Every engagement follows a documented path from kickoff to close, with owners, checkpoints, and artifacts.",
				items: [
					"Engagement templates",
					"Milestone tracking",
					"Handoff checklists"
				]
			},
			{
				title: "Utilization & Capacity",
				body: "Live view of who’s available, who’s booked, and where the next bottleneck will hit.",
				items: [
					"Role-based capacity",
					"Forecast vs. actual",
					"Staffing alerts"
				]
			},
			{
				title: "Billing Fabric",
				body: "Time, milestones, and invoices in one place so cash follows work instead of chasing it.",
				items: [
					"Milestone billing",
					"WIP aging",
					"Auto-invoice triggers"
				]
			},
			{
				title: "Knowledge Base",
				body: "Playbooks, templates, and past work searchable by the whole firm — not buried in someone’s Drive.",
				items: [
					"Playbook library",
					"Engagement archive",
					"Onboarding paths"
				]
			}
		]
	},
	{
		slug: "manufacturing",
		href: "/industry-manufacturing",
		name: "Manufacturing",
		blurb: "Great products, zero visibility.",
		hero: ["You make great products.", "Your visibility doesn’t match."],
		intro: "Production tracking, inventory management, order processing, and shipping live in separate systems. We build a unified system that tracks every order from purchase to shipment and flags exceptions before they become expensive problems.",
		quote: "We know the margins are tighter than they should be. We just can’t see where the waste is.",
		symptoms: [
			{
				title: "Orders Live in Five Places",
				body: "Sales, production, inventory, and shipping don’t share a picture. Status is a phone call."
			},
			{
				title: "Inventory Is a Weekly Ritual",
				body: "Counts happen after the fact. Stockouts surprise you. Overstock ties up cash."
			},
			{
				title: "Quality Shows Up Late",
				body: "Defects get found downstream, not at the station that caused them."
			},
			{
				title: "The Floor and the Office Don’t Talk",
				body: "Shop-floor reality never makes it into the spreadsheet the office runs on."
			},
			{
				title: "Exceptions Become Emergencies",
				body: "By the time leadership hears about a delay, the customer already knows."
			}
		],
		systems: [
			{
				title: "Production Tracker",
				body: "Every order visible from purchase to shipment, with live station status.",
				items: [
					"Work-order tracking",
					"Station dashboards",
					"Exception flags"
				]
			},
			{
				title: "Inventory System",
				body: "Stock levels that match the floor, not last month’s count.",
				items: [
					"Live inventory",
					"Reorder alerts",
					"Lot / serial tracking"
				]
			},
			{
				title: "Order Pipeline",
				body: "One view of every order from quote to delivery.",
				items: [
					"Quote-to-cash",
					"Promise dates",
					"Customer portal"
				]
			},
			{
				title: "Quality Loops",
				body: "Checks at the station, not at the dock.",
				items: [
					"In-process checks",
					"NCR workflow",
					"Supplier scorecards"
				]
			}
		]
	},
	{
		slug: "recruiting",
		href: "/industry-recruiting",
		name: "Recruiting & Staffing",
		blurb: "Candidates falling through the cracks.",
		hero: ["Candidates, clients, open reqs.", "And a process in people’s heads."],
		intro: "Handoffs between recruiters and account managers are messy. Candidates fall out of the funnel because nobody followed up. We build a system where every candidate, every requisition, and every placement is tracked from first touch to successful hire.",
		quote: "We lost a candidate because two recruiters each thought the other was following up.",
		symptoms: [
			{
				title: "Dropped Candidates",
				body: "Follow-ups live in inboxes. People fall out of the funnel silently."
			},
			{
				title: "Messy Handoffs",
				body: "Sourcing, recruiting, and account management don’t share a single picture of the req."
			},
			{
				title: "No Pipeline View",
				body: "Candidates, clients, and reqs live in different tools. Forecasting is a gut feel."
			},
			{
				title: "Slow Ramp for New Recruiters",
				body: "The process isn’t documented, so every hire takes months to get productive."
			},
			{
				title: "Reporting Is Manual",
				body: "Monday mornings are export-and-pray. Leadership sees last week’s numbers, late."
			}
		],
		systems: [
			{
				title: "Candidate Operating System",
				body: "Every candidate tracked from first touch to placement.",
				items: [
					"Stage pipeline",
					"Auto follow-ups",
					"Activity log"
				]
			},
			{
				title: "Req Command Center",
				body: "Every open role, owner, SLA, and candidate in one view.",
				items: [
					"Req health",
					"SLA timers",
					"Client updates"
				]
			},
			{
				title: "Handoff Engine",
				body: "Sourcing to recruiting to AM without dropped context.",
				items: [
					"Structured handoffs",
					"Shared notes",
					"Ownership rules"
				]
			},
			{
				title: "Placement Analytics",
				body: "Time-to-fill, drop-off, and recruiter performance you can trust.",
				items: [
					"Funnel conversion",
					"Source ROI",
					"Ramp metrics"
				]
			}
		]
	},
	{
		slug: "financial-services",
		href: "/industry-financial-services",
		name: "Financial Services",
		blurb: "Client data scattered, compliance eating time.",
		hero: ["Client data is scattered.", "Compliance makes everything harder."],
		intro: "Opportunities are being missed because nobody has a clean picture of the full client lifecycle. We centralize everything and automate the compliance workflows eating your team’s time.",
		quote: "We’re always one audit away from a headache because nothing lives in one place.",
		symptoms: [
			{
				title: "Fragmented Client Data",
				body: "CRM, SharePoint, email, and spreadsheets each hold a piece of the truth."
			},
			{
				title: "Compliance Is Manual",
				body: "KYC, AML, and reviews are checklists in someone’s head."
			},
			{
				title: "Onboarding Drags",
				body: "New clients wait weeks while documents bounce between systems."
			},
			{
				title: "Missed Opportunities",
				body: "Nobody sees the full lifecycle, so expansion conversations happen too late."
			},
			{
				title: "Audit Anxiety",
				body: "Evidence is assembled after the fact instead of being generated as work happens."
			}
		],
		systems: [
			{
				title: "Client Lifecycle OS",
				body: "Leads, onboarding, accounts, and reviews in one map.",
				items: [
					"Pipeline + accounts",
					"KYC/AML flows",
					"Document vault"
				]
			},
			{
				title: "Compliance Fabric",
				body: "Checks built into every handoff, not bolted on at the end.",
				items: [
					"Policy gates",
					"Audit trail",
					"Review calendars"
				]
			},
			{
				title: "Onboarding Portal",
				body: "Clients submit once. The system routes, chases, and files.",
				items: [
					"Client portal",
					"E-sign",
					"Status visibility"
				]
			},
			{
				title: "Revenue Visibility",
				body: "A clean picture of every relationship and every opportunity.",
				items: [
					"Account health",
					"Expansion flags",
					"Trusted reporting"
				]
			}
		]
	},
	{
		slug: "home-services",
		href: "/industry-home-services",
		name: "Home Services & Construction",
		blurb: "Whiteboard dispatch, owner’s memory.",
		hero: ["Jobs by phone. Dispatch by text.", "Tracking on a whiteboard."],
		intro: "Your operation runs on phone calls, texts, and the owner’s memory. We replace the whiteboard with a real system — one portal where every job, crew, client, and invoice is visible in real time.",
		quote: "If the owner’s phone dies, the whole day dies with it.",
		symptoms: [
			{
				title: "Dispatch Is a Group Chat",
				body: "Jobs come in by phone and get assigned by text. Nothing is the system of record."
			},
			{
				title: "Owner Is the Bottleneck",
				body: "The only person who knows what’s going on is also the person who shouldn’t have to."
			},
			{
				title: "Invoicing Lags Completion",
				body: "Work is done. Cash waits because completion isn’t tracked live."
			},
			{
				title: "Crew Utilization Is Opaque",
				body: "You can’t see who’s idle, who’s overloaded, or which jobs make money."
			},
			{
				title: "No Job History",
				body: "Client conversations, photos, and change orders live on phones."
			}
		],
		systems: [
			{
				title: "Job Operating System",
				body: "Every job, crew, and invoice in one portal.",
				items: [
					"Live job board",
					"Crew dispatch",
					"Photo + note log"
				]
			},
			{
				title: "Scheduling Engine",
				body: "Capacity-aware scheduling instead of a whiteboard.",
				items: [
					"Drag-and-drop calendar",
					"Conflict alerts",
					"Client notifications"
				]
			},
			{
				title: "Invoice Triggers",
				body: "Completion flips the invoice. Cash follows the work.",
				items: [
					"Completion checklist",
					"Auto-invoice",
					"Collections view"
				]
			},
			{
				title: "Owner Dashboard",
				body: "Pipeline, crew, and cash without being the dispatcher.",
				items: [
					"Job profitability",
					"Utilization",
					"Today’s exceptions"
				]
			}
		]
	},
	{
		slug: "logistics",
		href: "/industry-logistics",
		name: "Logistics & Supply Chain",
		blurb: "Moving products, can’t see where.",
		hero: ["You’re moving product.", "You can’t see where anything is."],
		intro: "Order tracking, inventory, fulfillment, and billing are spread across disconnected tools. We build an end-to-end system that tracks every order from placement to delivery, with automations that flag problems before they become expensive.",
		quote: "Customers know the shipment is late before we do.",
		symptoms: [
			{
				title: "No End-to-End Visibility",
				body: "Order, warehouse, carrier, and invoice don’t share a timeline."
			},
			{
				title: "Exceptions Surface Late",
				body: "Missed SLAs are discovered in a weekly report, not at the moment they break."
			},
			{
				title: "Inventory Drift",
				body: "What’s on the shelf and what’s in the system diverge every afternoon."
			},
			{
				title: "Customer Updates Are Manual",
				body: "CS spends the day copy-pasting tracking numbers into emails."
			},
			{
				title: "Billing Follows Chaos",
				body: "Accessorials, extra stops, and failed deliveries get invoiced late or not at all."
			}
		],
		systems: [
			{
				title: "Order-to-Delivery OS",
				body: "One timeline from placement to POD.",
				items: [
					"Live order tracking",
					"Milestone SLAs",
					"Exception board"
				]
			},
			{
				title: "Fulfillment Control",
				body: "Warehouse and carrier status in the same view.",
				items: [
					"Pick/pack status",
					"Carrier events",
					"Inventory sync"
				]
			},
			{
				title: "Customer Portal",
				body: "Clients see status without calling you.",
				items: [
					"Self-serve tracking",
					"Document access",
					"Issue reporting"
				]
			},
			{
				title: "Billing Fabric",
				body: "Every extra gets captured as it happens.",
				items: [
					"Accessorial capture",
					"Invoice accuracy",
					"Margin by lane"
				]
			}
		]
	}
];
var SERVICES = [
	{
		slug: "ops-consulting",
		href: "/ops-consulting",
		name: "Operations Consulting",
		blurb: "Audit and map how your business runs."
	},
	{
		slug: "business-systems",
		href: "/business-systems-development",
		name: "Business Systems Development",
		blurb: "Custom portals built around your team."
	},
	{
		slug: "ai-enablement",
		href: "/ai-enablement",
		name: "AI Enablement",
		blurb: "AI that works inside your operation."
	},
	{
		slug: "cyber-security",
		href: "/cyber-security",
		name: "Cybersecurity",
		blurb: "Identity, email, compliance, actually implemented."
	}
];
var CASE_STUDIES = [
	{
		slug: "sales-automation-systems",
		name: "Sales Automation Systems",
		industry: "Sales Systems",
		logo: "/images/clients/sales-automation-systems.webp",
		result: "Doubled in 30 days without adding stress.",
		quote: "We basically doubled last month — and the craziest thing is I wasn’t freaking out. We have systems now.",
		person: "Taylor Haren",
		role: "Founder"
	},
	{
		slug: "factum-financial",
		name: "Factum Financial",
		industry: "Financial Services",
		logo: "/images/clients/factum-financial.webp",
		result: "Company Brain audit. 10/10 from the client.",
		quote: "The map of our operation was the first time the whole leadership team saw the same picture.",
		person: "Leadership team",
		role: "Factum Financial"
	},
	{
		slug: "staxx-fractional-cfo",
		name: "Staxx Fractional CFO",
		industry: "Finance",
		logo: "/images/clients/staxx.webp",
		result: "One system for every client engagement.",
		quote: "We stopped running the firm from inboxes and started running it from a portal.",
		person: "Founder",
		role: "Staxx"
	},
	{
		slug: "million-dollar-author",
		name: "Million Dollar Author",
		industry: "Publishing",
		logo: "/images/clients/million-dollar-author.webp",
		result: "Author onboarding, systematized.",
		quote: "The back-office finally matches the brand we sell on stage.",
		person: "Founder",
		role: "Million Dollar Author"
	},
	{
		slug: "perkprop-real-estate",
		name: "PerkProp Real Estate",
		industry: "Real Estate",
		logo: "/images/clients/perkprop.webp",
		result: "Deal flow and operations in one login.",
		quote: "Agents stopped asking ‘where’s that file?’ because the system already knew.",
		person: "Operator",
		role: "PerkProp"
	},
	{
		slug: "g1-construction",
		name: "G1 Construction",
		industry: "Construction",
		logo: "/images/clients/g1-construction.webp",
		result: "Jobs, crews, and invoices visible live.",
		quote: "We replaced the whiteboard. The owner stopped being the dispatcher.",
		person: "Owner",
		role: "G1 Construction"
	},
	{
		slug: "national-commerce",
		name: "National Commerce",
		industry: "Commerce",
		logo: "/images/clients/national-commerce.webp",
		result: "Unified operations across the book of business.",
		quote: "Reporting finally matches what the floor already knew.",
		person: "Leadership",
		role: "National Commerce"
	},
	{
		slug: "leadbird",
		name: "Leadbird",
		industry: "Lead Generation",
		logo: "/images/clients/leadbird.webp",
		result: "Client lifecycle mapped end to end.",
		quote: "Handoffs that used to leak now happen automatically.",
		person: "Founder",
		role: "Leadbird"
	},
	{
		slug: "growth-engine-x",
		name: "Growth Engine X",
		industry: "Growth",
		logo: "/images/clients/growth-engine-x.webp",
		result: "Analytics the team can actually trust.",
		quote: "The biggest thing is we trust our numbers today. The power of being able to trust your analytics is the most powerful thing.",
		person: "Eric Nowoslawski",
		role: "Founder"
	},
	{
		slug: "full-circle-amazon",
		name: "Full Circle",
		industry: "Amazon / E-com",
		logo: "/images/clients/full-circle.webp",
		result: "Fulfillment and client ops in one view.",
		quote: "We stopped stitching five exports together at the end of the month.",
		person: "Operator",
		role: "Full Circle"
	},
	{
		slug: "goldenweb-seo",
		name: "GoldenWeb SEO",
		industry: "SEO Agency",
		logo: "/images/clients/goldenweb.webp",
		result: "Reporting and delivery, automated.",
		quote: "Account managers got their Mondays back.",
		person: "Founder",
		role: "GoldenWeb"
	},
	{
		slug: "autoup",
		name: "AutoUp",
		industry: "Automotive",
		logo: "/images/clients/autoup.webp",
		result: "Ops that scale with dealership volume.",
		quote: "The system now handles the follow-ups people used to drop.",
		person: "Founder",
		role: "AutoUp"
	},
	{
		slug: "newseas-seo",
		name: "NewSeas",
		industry: "SEO",
		logo: "/images/clients/newseas.webp",
		result: "Client delivery without spreadsheet chaos.",
		quote: "We can take on more accounts without hiring coordinators.",
		person: "Founder",
		role: "NewSeas"
	},
	{
		slug: "archon-research-group",
		name: "Archon Research Group",
		industry: "Research",
		logo: "/images/clients/sales-automation-systems.webp",
		result: "4x the size they were when they started.",
		quote: "I was ready to shut the business down. Now we’re 4x the size we were when we started. You don’t know what you don’t know — automation can streamline your business in ways you can’t imagine.",
		person: "Tom Hircik",
		role: "Owner"
	},
	{
		slug: "clientascension",
		name: "Client Ascension",
		industry: "Info Products",
		logo: "/images/clients/client-ascension.webp",
		result: "Fulfillment that doesn’t depend on heroes.",
		quote: "The operation finally scaled with the audience.",
		person: "Team",
		role: "Client Ascension"
	},
	{
		slug: "lynn-lead-gen",
		name: "Lynn Lead Generation",
		industry: "Lead Gen",
		logo: "/images/clients/lynn-lead-generation.webp",
		result: "Pipeline visibility from first touch.",
		quote: "Leads stopped dying in inboxes.",
		person: "Founder",
		role: "Lynn Lead Generation"
	},
	{
		slug: "contara",
		name: "Contara",
		industry: "Services",
		logo: "/images/clients/contara.webp",
		result: "One source of truth for delivery.",
		quote: "Everyone logs in and sees the same operation.",
		person: "Operator",
		role: "Contara"
	},
	{
		slug: "letmetalk",
		name: "LetMeTalk",
		industry: "Communications",
		logo: "/images/clients/letmetalk.webp",
		result: "Client work, tracked and automated.",
		quote: "Status stopped being a meeting. It became a screen.",
		person: "Founder",
		role: "LetMeTalk"
	},
	{
		slug: "lever-growth",
		name: "Lever Growth",
		industry: "Growth Agency",
		logo: "/images/clients/lever-growth.webp",
		result: "Delivery ops rebuilt around the team.",
		quote: "We stopped coordinating across six tools.",
		person: "Founder",
		role: "Lever Growth"
	},
	{
		slug: "greenhouse-emporium",
		name: "Greenhouse Emporium",
		industry: "Retail",
		logo: "/images/clients/greenhouse-emporium.webp",
		result: "Inventory and orders in one system.",
		quote: "The shop and the office finally share a picture.",
		person: "Owner",
		role: "Greenhouse Emporium"
	},
	{
		slug: "daydreamers-design",
		name: "Daydreamers Design Studio",
		industry: "Design",
		logo: "/images/clients/daydreamers-design.webp",
		result: "Project delivery, systematized.",
		quote: "Creative work stopped waiting on admin work.",
		person: "Founder",
		role: "Daydreamers"
	},
	{
		slug: "dripos",
		name: "Dripos",
		industry: "POS / Cafe",
		logo: "/images/clients/dripos.webp",
		result: "Internal ops matching product ambition.",
		quote: "The way we run the company caught up to the product.",
		person: "Team",
		role: "Dripos"
	},
	{
		slug: "procreativ-solutions",
		name: "ProCreativ Solutions",
		industry: "Creative",
		logo: "/images/clients/procreativ-solutions.webp",
		result: "Client work with a real operating system.",
		quote: "Handoffs between sales and delivery stopped leaking.",
		person: "Founder",
		role: "ProCreativ"
	},
	{
		slug: "pleiades-consultancy",
		name: "Pleiades Consultancy",
		industry: "Consulting",
		logo: "/images/clients/pleiades-consultancy.webp",
		result: "Engagements with a single source of truth.",
		quote: "Utilization stopped being a guess.",
		person: "Partner",
		role: "Pleiades"
	},
	{
		slug: "regenaskin",
		name: "Regenaskin Solutions",
		industry: "Healthcare",
		logo: "/images/clients/regenaskin.webp",
		result: "Patient and ops flows mapped end to end.",
		quote: "Intake, scheduling, and billing finally talk to each other.",
		person: "Operator",
		role: "Regenaskin"
	},
	{
		slug: "buzzlead",
		name: "Buzzlead",
		industry: "Lead Gen",
		logo: "/images/clients/leadbird.webp",
		result: "Client lifecycle, rebuilt.",
		quote: "We could see every account without opening five tabs.",
		person: "Founder",
		role: "Buzzlead"
	},
	{
		slug: "saascamp",
		name: "SaaSCamp",
		industry: "SaaS",
		logo: "/images/clients/growth-engine-x.webp",
		result: "Program delivery in one portal.",
		quote: "Cohorts, mentors, and ops in a single login.",
		person: "Operator",
		role: "SaaSCamp"
	},
	{
		slug: "grammar-ghost",
		name: "Grammar Ghost",
		industry: "Education",
		logo: "/images/clients/million-dollar-author.webp",
		result: "Delivery ops for a growing education brand.",
		quote: "The team stopped running the school from DMs.",
		person: "Founder",
		role: "Grammar Ghost"
	},
	{
		slug: "calvert-and-sons",
		name: "Calvert & Sons",
		industry: "Services",
		logo: "/images/clients/g1-construction.webp",
		result: "Jobs and clients in one system.",
		quote: "The family business got an operating system.",
		person: "Owner",
		role: "Calvert & Sons"
	},
	{
		slug: "saturn-media",
		name: "Saturn Media",
		industry: "Media",
		logo: "/images/clients/goldenweb.webp",
		result: "Campaign ops without the spreadsheet tax.",
		quote: "Reporting stopped eating the week.",
		person: "Founder",
		role: "Saturn Media"
	},
	{
		slug: "lift-media",
		name: "Lift Media",
		industry: "Media",
		logo: "/images/clients/lever-growth.webp",
		result: "Account operations, rebuilt.",
		quote: "We scale accounts now without scaling chaos.",
		person: "Founder",
		role: "Lift Media"
	},
	{
		slug: "tikscale",
		name: "TikScale",
		industry: "Social",
		logo: "/images/clients/leadbird.webp",
		result: "Creator and client ops in one view.",
		quote: "The content machine finally has a back office.",
		person: "Founder",
		role: "TikScale"
	},
	{
		slug: "zabota",
		name: "Zabota",
		industry: "Services",
		logo: "/images/clients/letmetalk.webp",
		result: "Service delivery with live visibility.",
		quote: "Status stopped being a meeting.",
		person: "Operator",
		role: "Zabota"
	},
	{
		slug: "lakes-region",
		name: "Lakes Region Environmental",
		industry: "Environmental",
		logo: "/images/clients/g1-construction.webp",
		result: "Field work and office ops connected.",
		quote: "Jobs, compliance, and invoicing in one portal.",
		person: "Owner",
		role: "Lakes Region"
	},
	{
		slug: "arcon-research",
		name: "Arcon Research Group",
		industry: "Research",
		logo: "/images/clients/factum-financial.webp",
		result: "Research ops mapped and unified.",
		quote: "The process survived the people who built it.",
		person: "Director",
		role: "Arcon Research"
	}
];
var BLOG_POSTS = [
	{
		slug: "ten-minute-cash-flow-tracker",
		category: "Operations",
		title: "The 10-minute-a-week cash flow tracker.",
		author: "Toni",
		minutes: 5,
		date: "April 22, 2026",
		excerpt: "Most founders don’t know their real cash position. 10 minutes a week in a simple tracker changes that."
	},
	{
		slug: "why-your-team-wont-use-the-thing-you-built",
		category: "Delegation",
		title: "Why your team won’t use the thing you built.",
		author: "Ryan",
		minutes: 7,
		date: "April 22, 2026",
		excerpt: "1,900 features shipped. Building is easy. Getting people to use it is the job. The five reasons they don’t."
	},
	{
		slug: "we-dont-build-software-we-offload-cognition",
		category: "Essay",
		title: "We don’t build software. We offload cognition.",
		author: "Ryan",
		minutes: 8,
		date: "April 22, 2026",
		excerpt: "Two years in, I finally figured out what we actually do. It isn’t building tech, it’s offloading thought."
	},
	{
		slug: "project-tool-to-process-tool",
		category: "Operations",
		title: "Your project tool is why you can’t scale.",
		author: "Ryan",
		minutes: 6,
		date: "April 22, 2026",
		excerpt: "Asana, ClickUp, Monday — they track tasks. They don’t run the process. That’s the gap."
	},
	{
		slug: "implement-ai-in-your-business",
		category: "AI",
		title: "AI won’t fix a broken process.",
		author: "Ryan",
		minutes: 6,
		date: "April 22, 2026",
		excerpt: "If the work isn’t mapped, the model just automates the mess. Sequence matters."
	},
	{
		slug: "client-onboarding-four-blockers",
		category: "Onboarding",
		title: "Onboard your first 20 clients manually.",
		author: "Toni",
		minutes: 5,
		date: "April 22, 2026",
		excerpt: "Four blockers that stretch onboarding from days into weeks — and how we remove them."
	},
	{
		slug: "build-a-business-process-map",
		category: "Mapping",
		title: "Start your process map on a napkin.",
		author: "Toni",
		minutes: 5,
		date: "April 22, 2026",
		excerpt: "The Company Brain starts ugly. That’s the point. Here’s how we run the first pass."
	},
	{
		slug: "operations-formula-double-agency",
		category: "Agencies",
		title: "The operations formula that doubles an agency.",
		author: "Toni",
		minutes: 7,
		date: "April 22, 2026",
		excerpt: "Map, unify, automate — in that order. Skip a step and the next one breaks."
	},
	{
		slug: "team-meeting-five-stage-agenda",
		category: "Leadership",
		title: "Never run another team meeting without an agenda.",
		author: "Toni",
		minutes: 4,
		date: "April 22, 2026",
		excerpt: "A five-stage weekly agenda we install in almost every engagement."
	},
	{
		slug: "digital-transformation-not-software",
		category: "Essay",
		title: "Digital transformation is not a software purchase.",
		author: "Ryan",
		minutes: 8,
		date: "April 22, 2026",
		excerpt: "Four phases in order. Software is the last. Most companies start there and stall."
	}
];
var PODCASTS = [
	{
		slug: "luka-knezic",
		name: "Luka Knezic",
		minutes: "44 min",
		tag: "OpsKings Podcast",
		excerpt: "Unfiltered conversation with an operator in the messy middle of growth."
	},
	{
		slug: "internal-delegation",
		name: "The OpsKings Team",
		minutes: "47 min",
		tag: "Inside OpsKings",
		excerpt: "How we actually delegate internally — the messy version, not the deck."
	},
	{
		slug: "andre-haykal-jr",
		name: "Andre Haykal Jr",
		minutes: "52 min",
		tag: "OpsKings Podcast",
		excerpt: "Building systems that survive the founder."
	},
	{
		slug: "noah-kent",
		name: "Noah Kent",
		minutes: "56 min",
		tag: "OpsKings Podcast",
		excerpt: "What changes when the operation no longer needs you in every decision."
	},
	{
		slug: "nick-abraham",
		name: "Nick Abraham",
		minutes: "1 hr 10 min",
		tag: "OpsKings Podcast",
		excerpt: "Long-form on scaling delivery without scaling headcount."
	},
	{
		slug: "ken-volk",
		name: "Ken Volk",
		minutes: "49 min",
		tag: "OpsKings Podcast",
		excerpt: "Cold email, process, and the operational ceiling most agencies hit."
	},
	{
		slug: "kyle-mau",
		name: "Kyle Mau",
		minutes: "51 min",
		tag: "OpsKings Podcast",
		excerpt: "On running a tight operation while the market keeps moving."
	},
	{
		slug: "christian-bonnier",
		name: "Christian Bonnier",
		minutes: "43 min",
		tag: "OpsKings Podcast",
		excerpt: "The awkward middle of growth — why $20K MRR was the threshold where everything changed."
	},
	{
		slug: "sam-allsopp",
		name: "Sam Allsopp",
		minutes: "44 min",
		tag: "$30M/year roofing",
		excerpt: "Running a $30M/year roofing company, why most contractors never scale past $5M, and the operational decisions that broke the ceiling.",
		img: "/images/podcasts/sam-allsopp.webp"
	}
];
var GUIDES = [
	{
		href: "https://opskings.gumroad.com/l/playbooks",
		title: "The Automation Playbooks",
		body: "The complete guide to automating your business. Dashboards & automations across Sales, Finance, Marketing, QA, and Project Management."
	},
	{
		href: "https://opskings.gumroad.com/l/crm",
		title: "The Open-Source, No-Code CRM",
		body: "We got frustrated with off-the-shelf CRMs, so we built our own. 100% no-code, fully open-source."
	},
	{
		href: "https://opskings.gumroad.com/l/spintax",
		title: "The Spintax Machine for Cold Email",
		body: "A Ken-from-AutoUp x OpsKings collab. Templates, a client-approval Doc, and the exact ChatGPT prompt."
	},
	{
		href: "https://opskings.gumroad.com/l/processmap",
		title: "Business Process Map Template",
		body: "The exact client-onboarding process map we use. Visualize every step from first contact to integration."
	},
	{
		href: "https://opskings.gumroad.com/l/cashflowtracker",
		title: "Cashflow Tracking Sheet",
		body: "Used by dozens of 7-figure businesses to manage cashflow in 10 minutes a week."
	},
	{
		href: "https://opskings.gumroad.com/l/teammeeting",
		title: "Weekly Team Meeting Agenda",
		body: "A battle-tested weekly agenda that covers decisions, blockers, metrics, follow-ups."
	},
	{
		href: "https://opskings.gumroad.com/l/automation_course",
		title: "Automate Your Business (5-day Free Email Course)",
		body: "From Ryan Hildebrandt — map processes so they’re automation-ready, then decide what to automate first."
	}
];
var BRAINS = [
	{
		img: "/images/company-brains/cb-1-web.webp",
		title: "Financial Services Firm",
		body: "Leads pipeline, sales pipeline, onboarding, and account management, all mapped end to end. KYC/AML compliance flows built into every handoff via SumSub, DocuSign, HubSpot, and Google Sheets."
	},
	{
		img: "/images/company-brains/cb-2-web.webp",
		title: "Healthcare & Wellness Practice",
		body: "End-to-end map of a multi-location practice, patient intake, scheduling, billing, and clinical handoffs. Stack included Google Workspace, PracticeQ, Vercel, and Supabase."
	},
	{
		img: "/images/company-brains/cb-3-web.webp",
		title: "SaaS Lead Generation Agency",
		body: "Mapped the full client lifecycle across three departments, from cold outreach through onboarding to ongoing delivery. Identified 22 handoff gaps and built a custom portal spec across Vercel and Supabase."
	},
	{
		img: "/images/company-brains/cb-4-web.webp",
		title: "Marketing Agency",
		body: "Full operations audit of a 30-person agency running on HubSpot, Zapier, Asana, and Instantly. Mapped sales, fulfillment, and hiring pipelines. Replaced 40+ disconnected Zaps with a unified portal."
	},
	{
		img: "/images/company-brains/cb-5-web.webp",
		title: "Construction & Government Contractor",
		body: "Mapped project management, procurement, and compliance workflows across a government contracting firm. Dozens of approval chains and handoffs documented, from bid submission to final delivery and invoicing."
	}
];
var WHAT_WE_DO = [
	{
		num: "01",
		title: "Operations Consulting",
		body: "We audit and map your entire operation, spot the bottlenecks, and hand you a roadmap, so leadership has visibility and the team has structure."
	},
	{
		num: "02",
		title: "System Development",
		body: "Custom-built client operating systems, ERPs, and portals, a single source of truth built around how your business actually runs. You own the IP."
	},
	{
		num: "03",
		title: "Digital Transformation",
		body: "AI-powered workflows and automations layered on top of your system. The work that shouldn’t need a human, handled."
	},
	{
		num: "04",
		title: "Team Training",
		body: "Structured training across every level, leadership, managers, and frontline team members, so adoption sticks and the system actually gets used."
	}
];
var PILLARS = [
	{
		num: "01",
		kicker: "Map",
		title: "Understand how your business actually runs.",
		body: "We go in, analyze everything end-to-end, from the moment a lead comes in to the moment a client refers you more business. Every step, every handoff, every place where things fall through the cracks. That becomes the Company Brain: a digital map of your entire operation."
	},
	{
		num: "02",
		kicker: "Unify",
		title: "One system. One login. One source of truth.",
		body: "We build a custom portal designed around how your team actually works, not how some off-the-shelf software thinks you should work. Everyone logs in, sees what they need to see, does their job. No more coordinating across six different tools."
	},
	{
		num: "03",
		kicker: "Automate",
		title: "Let AI and automation do the repetitive work.",
		body: "Once the foundation is solid, we layer in automation and AI. Missed a deadline? The system handles it. Need a status update across 30 clients? It’s already there. Your team focuses on work that actually moves the needle."
	}
];
function isActivePath(pathname, href) {
	if (href === "/") return pathname === "/";
	return pathname === href || pathname.startsWith(`${href}/`);
}
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [openMenu, setOpenMenu] = (0, import_react.useState)(null);
	const [mobile, setMobile] = (0, import_react.useState)(false);
	const [mobileAcc, setMobileAcc] = (0, import_react.useState)(null);
	const [hidden, setHidden] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMobile(false);
		setOpenMenu(null);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = mobile ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobile]);
	(0, import_react.useEffect)(() => {
		let lastY = window.scrollY;
		const onScroll = () => {
			const y = window.scrollY;
			const delta = y - lastY;
			if (y < 80) {
				setHidden(false);
				lastY = y;
				return;
			}
			if (Math.abs(delta) < 8) return;
			if (delta > 0) setHidden(true);
			else setHidden(false);
			lastY = y;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const industryActive = pathname.startsWith("/industry") || pathname === "/industries";
	const serviceActive = [
		"/ops-consulting",
		"/business-systems-development",
		"/ai-enablement",
		"/cyber-security"
	].includes(pathname);
	const navLink = (href, label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: href,
		className: cn("whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-fg/70 transition-colors hover:bg-fg/5 hover:text-fg", isActivePath(pathname, href) && "nav-active"),
		children: label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-[81px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "fixed top-0 right-0 left-0 z-50 w-full border-b border-fg/5 bg-bg/50 font-sans backdrop-blur-xl",
			style: {
				transform: hidden ? "translateY(-100%)" : "translateY(0)",
				transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "relative z-50 mx-auto flex h-20 max-w-7xl items-center justify-between px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "flex items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/logo.png",
								alt: "OpsKings",
								className: "h-8 w-auto object-contain md:h-10"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "m-0 hidden list-none items-center gap-5 p-0 lg:flex xl:gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: navLink("/how-we-work", "How We Work") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: navLink("/about-us", "About Us") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "static",
									onMouseEnter: () => setOpenMenu("industries"),
									onMouseLeave: () => setOpenMenu(null),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: cn("flex cursor-default items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-fg/70 outline-none transition-colors hover:bg-fg/5 hover:text-fg", (openMenu === "industries" || industryActive) && "nav-active"),
										children: ["Industries", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3.5 transition-transform duration-200", openMenu === "industries" && "rotate-180") })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mega, {
										open: openMenu === "industries",
										leftLabel: "Industries We Serve",
										left: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [INDUSTRIES.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: ind.href,
											className: "group/item block rounded-lg px-3 py-2 transition-colors hover:bg-fg/5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm font-semibold text-fg",
												children: ind.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-0.5 text-xs leading-snug text-fg/40",
												children: ind.blurb
											})]
										}, ind.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/industries",
											className: "group/all mt-5 inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gold transition-colors hover:text-gold-light",
											children: ["View all industries", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 transition-transform duration-300 group-hover/all:translate-x-0.5" })]
										})] }),
										rightLabel: "From Our Resources",
										right: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceCard, {
												to: "/case-studies/factum-financial",
												kicker: "Case Study",
												title: "Factum Financial",
												body: "Company Brain audit. 10/10 from the client.",
												img: "/images/testimonial-thumbnails/factum-financial.jpg"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceCard, {
												to: "/blog/digital-transformation-not-software",
												kicker: "Blog",
												title: "Digital transformation",
												body: "Four phases in order. Software is the last.",
												img: "/images/blog/digital-transformation-hero.jpg"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceCard, {
												to: "/podcast/sam-allsopp",
												kicker: "Podcast",
												title: "Sam Allsopp",
												body: "$30M/year roofing, breaking the $5M ceiling.",
												img: "/images/podcasts/sam-allsopp.webp"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/resources",
												className: "col-span-3 mt-2 inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gold hover:text-gold-light",
												children: ["See all insights", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
											})
										] })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "static",
									onMouseEnter: () => setOpenMenu("services"),
									onMouseLeave: () => setOpenMenu(null),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: cn("flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-fg/70 outline-none transition-colors hover:bg-fg/5 hover:text-fg", (openMenu === "services" || serviceActive) && "nav-active"),
										children: ["Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3.5 transition-transform duration-200", openMenu === "services" && "rotate-180") })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mega, {
										open: openMenu === "services",
										leftLabel: "Services",
										left: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: s.href,
												className: "block rounded-lg px-3 py-2 transition-colors hover:bg-fg/5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-sm font-semibold text-fg",
													children: s.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-0.5 text-xs leading-snug text-fg/40",
													children: s.blurb
												})]
											}, s.slug)),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 mb-3 px-3 text-[10px] font-bold tracking-widest text-gold uppercase",
												children: "More"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/how-we-work",
												className: "block rounded-lg px-3 py-2 hover:bg-fg/5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-sm font-semibold text-fg",
													children: "How We Work"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-0.5 text-xs text-fg/40",
													children: "Map, unify, automate, our process."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/case-studies",
												className: "block rounded-lg px-3 py-2 hover:bg-fg/5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-sm font-semibold text-fg",
													children: "Case Studies"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-0.5 text-xs text-fg/40",
													children: "33 builds across 12 industries."
												})]
											})
										] }),
										rightLabel: "What We Build",
										right: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceCard, {
												to: "/how-we-work",
												kicker: "Foundation",
												title: "Company Brain",
												body: "A full map of how your business runs.",
												img: "/images/company-brains/cb-1-web.webp"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCard, {
												to: "/business-systems-development",
												kicker: "System",
												title: "Custom Portal",
												body: "One login. One source of truth.",
												icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "size-10 text-gold" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCard, {
												to: "/ops-consulting",
												kicker: "Scale",
												title: "Automation & AI",
												body: "Boring work, handled without you.",
												icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, { className: "size-10 text-gold" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/book-a-call",
												className: "col-span-3 mt-2 inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gold hover:text-gold-light",
												children: ["Book a 30-min call", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
											})
										] })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: navLink("/case-studies", "Case Studies") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: navLink("/resources", "Resources") })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeamButton, {
							to: "/book-a-call",
							size: "sm",
							className: "hidden lg:inline-flex",
							children: "Book a Call"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-label": "Open menu",
							className: cn("block cursor-pointer p-2 select-none lg:hidden", mobile && "hamburger-active"),
							onClick: () => setMobile(true),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "line my-[5px] block h-0.5 w-[25px] bg-fg transition-all duration-300" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "line my-[5px] block h-0.5 w-[25px] bg-fg transition-all duration-300" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "line my-[5px] block h-0.5 w-[25px] bg-fg transition-all duration-300" })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("fixed inset-y-0 right-0 z-60 flex h-dvh w-[85%] max-w-[400px] transform flex-col border-l border-fg/10 bg-bg shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]", mobile ? "translate-x-0" : "translate-x-full"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-fg/5 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-semibold tracking-tight text-fg",
							children: "Menu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Close menu",
							onClick: () => setMobile(false),
							className: "rounded-full bg-fg/5 p-2 text-fg/60 hover:bg-fg/10 hover:text-fg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 overflow-y-auto p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "m-0 flex list-none flex-col gap-2 p-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLink, {
									to: "/how-we-work",
									children: "How We Work"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLink, {
									to: "/about-us",
									children: "About Us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccBtn, {
									open: mobileAcc === "ind",
									onClick: () => setMobileAcc(mobileAcc === "ind" ? null : "ind"),
									children: "Industries"
								}), mobileAcc === "ind" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "ml-1 flex flex-col gap-1 border-l border-fg/10 pb-2 pl-4",
									children: [INDUSTRIES.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: i.href,
										className: "block py-2 text-base text-fg/60 hover:text-fg",
										children: i.name
									}) }, i.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/industries",
										className: "block py-2 text-base font-medium text-gold",
										children: "View All Industries →"
									}) })]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccBtn, {
									open: mobileAcc === "svc",
									onClick: () => setMobileAcc(mobileAcc === "svc" ? null : "svc"),
									children: "Services"
								}), mobileAcc === "svc" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "ml-1 flex flex-col gap-1 border-l border-fg/10 pb-2 pl-4",
									children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: s.href,
										className: "block py-2 text-base text-fg/60 hover:text-fg",
										children: s.name
									}) }, s.slug))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLink, {
									to: "/case-studies",
									children: "Case Studies"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLink, {
									to: "/resources",
									children: "Resources"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "mt-4 border-t border-fg/5 pt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeamButton, {
										to: "/book-a-call",
										size: "sm",
										children: "Book a Call"
									})
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Close menu overlay",
					onClick: () => setMobile(false),
					className: cn("fixed inset-0 z-50 bg-bg/60 backdrop-blur-sm transition-opacity duration-500", mobile ? "opacity-100" : "pointer-events-none opacity-0")
				})
			]
		})
	});
}
function Mega({ open, leftLabel, left, rightLabel, right }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("absolute top-full left-1/2 z-50 w-screen origin-top -translate-x-1/2 transition-all duration-200", open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-y border-fg/10 bg-surface shadow-2xl shadow-bg/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-5 border-r border-fg/5 p-6 lg:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 text-[10px] font-bold tracking-widest text-gold uppercase",
						children: leftLabel
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-1",
						children: left
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-7 p-6 lg:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 text-[10px] font-bold tracking-widest text-gold uppercase",
						children: rightLabel
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-3",
						children: right
					})]
				})]
			})
		})
	});
}
function ResourceCard({ to, kicker, title, body, img }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group/card flex flex-col overflow-hidden rounded-lg border border-fg/10 bg-surface transition-all hover:-translate-y-0.5 hover:border-gold/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-video overflow-hidden bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img,
				alt: "",
				className: "h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 text-[9px] font-bold tracking-widest text-gold uppercase",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 text-xs leading-snug font-semibold text-fg",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] leading-snug text-fg/40",
					children: body
				})
			]
		})]
	});
}
function IconCard({ to, kicker, title, body, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group/card flex flex-col overflow-hidden rounded-lg border border-fg/10 bg-surface transition-all hover:-translate-y-0.5 hover:border-gold/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex aspect-video items-center justify-center overflow-hidden bg-linear-to-br from-gold/15 via-gold/5 to-transparent",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,131,88,0.15),transparent_70%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative z-10",
				children: icon
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 text-[9px] font-bold tracking-widest text-gold uppercase",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 text-xs leading-snug font-semibold text-fg",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] leading-snug text-fg/40",
					children: body
				})
			]
		})]
	});
}
function MobileLink({ to, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: "block rounded-lg px-4 py-3 text-lg font-medium text-fg/80 hover:bg-fg/5 hover:text-gold",
		children
	}) });
}
function AccBtn({ open, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "group flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-lg font-medium text-fg/80 outline-none hover:bg-fg/5 hover:text-gold",
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-5 text-fg/40 transition-transform duration-300 group-hover:text-gold", open && "rotate-180") })]
	});
}
function Stars({ className = "text-gold" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `flex items-center gap-0.5 ${className}`,
		"aria-hidden": true,
		children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "11",
			height: "11",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 .587l3.668 7.568L24 9.423l-6 5.878L19.335 24 12 19.897 4.665 24 6 15.301 0 9.423l8.332-1.268z" })
		}, i))
	});
}
function ClutchBadge({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "https://clutch.co/profile/opskings",
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "OpsKings on Clutch, 5.0 stars, 8 reviews",
		className: "group inline-flex items-center gap-2 rounded-full border border-fg/10 bg-fg/5 py-1.5 pl-3 pr-3.5 shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)] backdrop-blur-sm transition-colors hover:border-gold/40 hover:bg-fg/[0.07]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: compact ? "text-[10px] font-medium uppercase tracking-wide text-fg/60 transition-colors group-hover:text-fg" : "text-xs font-medium text-fg/60 transition-colors group-hover:text-fg",
			children: ["5.0 on Clutch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-fg/40",
				children: "· 8 reviews"
			})]
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative z-20 mt-24 border-t border-fg/10 bg-bg pt-20 pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 border-b border-fg/5 pb-16 lg:grid-cols-12 lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "mb-6 inline-flex items-center gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/logo.png",
									alt: "OpsKings",
									className: "h-9 w-auto rounded-lg border border-fg/5 object-contain shadow-[0_0_15px_-3px_rgba(166,131,88,0.2)]"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-6 max-w-md text-lg leading-relaxed font-light text-fg/70",
								children: "Operations consulting and custom business systems for $5M to $100M companies. We map the operation, build the systems that run it, and automate the rest."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-x-4 gap-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs font-medium tracking-widest text-fg/60 uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-gold" }), "130+ engagements · 12 industries"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClutchBadge, {})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7 lg:flex lg:items-end lg:justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-medium tracking-tight text-fg",
									children: "Want to see what we’d build?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 mb-6 font-light text-fg/60",
									children: "No pitch. No pressure. Just a conversation."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeamButton, {
									to: "/book-a-call",
									children: "Book a Call"
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-10 py-16 md:grid-cols-3 lg:gap-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-5 text-[10px] font-bold tracking-widest text-gold uppercase",
							children: "Services"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm font-light text-fg/60",
							children: [SERVICES.slice(0, 3).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: s.href,
								className: "hover:text-fg",
								children: s.name.replace(" Development", "").replace("Operations Consulting", "Operations Consulting")
							}) }, s.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/how-we-work",
								className: "hover:text-fg",
								children: "How We Work"
							}) })]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-5 text-[10px] font-bold tracking-widest text-gold uppercase",
							children: "Industries"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3 text-sm font-light text-fg/60",
							children: INDUSTRIES.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: i.href,
								className: "hover:text-fg",
								children: i.name.replace(" & Construction", "")
							}) }, i.slug))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-5 text-[10px] font-bold tracking-widest text-gold uppercase",
							children: "Company"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm font-light text-fg/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about-us",
									className: "hover:text-fg",
									children: "About Us"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/case-studies",
									className: "hover:text-fg",
									children: "Case Studies"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/how-we-work",
									className: "hover:text-fg",
									children: "Our Process"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/industries",
									className: "hover:text-fg",
									children: "Industries"
								}) })
							]
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 border-t border-fg/5 pt-8 md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-light text-fg/40",
						children: "© 2026 OpsKings. All rights reserved. · Built by operators, for operators."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.linkedin.com/company/opskings/",
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "LinkedIn",
								className: "text-fg/40 hover:text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.youtube.com/@Ops-Kings",
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "YouTube",
								className: "text-fg/40 hover:text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://opskings.gumroad.com/",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-xs text-fg/40 hover:text-gold",
								children: "Gumroad"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:toni@opskings.com",
								"aria-label": "Email",
								className: "text-fg/40 hover:text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "text-xs text-fg/40 hover:text-fg",
								children: "Privacy Policy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "text-xs text-fg/40 hover:text-fg",
								children: "Terms of Service"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: openCookieManager,
								className: "text-xs text-fg/40 hover:text-fg",
								children: "Manage cookies"
							})
						]
					})]
				})
			]
		})
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex min-h-screen flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1",
						children
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieBanner, {})
		]
	});
}
var styles_default = "/assets/styles-DWFzSsTT.css";
var APP_NAME = "OpsKings: Operations Consulting & Custom Business Systems";
var Route$24 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "We map your operations, build custom systems, and automate workflows for companies doing $5M–$100M. 130+ engagements. Strategy + execution in one team."
			},
			{
				name: "theme-color",
				content: "#050505"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/images/favicon.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/images/favicon.png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg antialiased",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$23 = () => import("./routes-BDbJ-AvX.mjs");
var Route$23 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$23, "component") });
var $$splitComponentImporter$22 = () => import("./about-us--b9TxXvw.mjs");
var Route$22 = createFileRoute("/about-us")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
var $$splitComponentImporter$21 = () => import("./ai-enablement-BUmweVO0.mjs");
var Route$21 = createFileRoute("/ai-enablement")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("./book-a-call-CnvnJAeo.mjs");
var Route$20 = createFileRoute("/book-a-call")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./business-systems-development-B32dgjq7.mjs");
var Route$19 = createFileRoute("/business-systems-development")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./case-studies-DPyBbRgr.mjs");
var Route$18 = createFileRoute("/case-studies")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./cyber-security-Dqlo5zDf.mjs");
var Route$17 = createFileRoute("/cyber-security")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./how-we-work-D-_MEvV4.mjs");
var Route$16 = createFileRoute("/how-we-work")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./industries-DcIbhFO3.mjs");
var Route$15 = createFileRoute("/industries")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./industry-financial-services-BopWnt6O.mjs");
var Route$14 = createFileRoute("/industry-financial-services")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./industry-home-services-DIRn_-72.mjs");
var Route$13 = createFileRoute("/industry-home-services")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./industry-logistics-plKeE8bo.mjs");
var Route$12 = createFileRoute("/industry-logistics")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./industry-manufacturing-DRbNwgPk.mjs");
var Route$11 = createFileRoute("/industry-manufacturing")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./industry-marketing-CEodBnSW.mjs");
var Route$10 = createFileRoute("/industry-marketing")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./industry-professional-services-D8mPxXRT.mjs");
var Route$9 = createFileRoute("/industry-professional-services")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./industry-recruiting-BJiWb8KC.mjs");
var Route$8 = createFileRoute("/industry-recruiting")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./ops-consulting-Bk0n90Jq.mjs");
var Route$7 = createFileRoute("/ops-consulting")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./privacy-BfBXuHpa.mjs");
var Route$6 = createFileRoute("/privacy")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./resources-DaiAwzxb.mjs");
var Route$5 = createFileRoute("/resources")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./terms-CkBer5q4.mjs");
var Route$4 = createFileRoute("/terms")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./blog._slug-DaxzThJk.mjs");
var Route$3 = createFileRoute("/blog/$slug")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./case-studies.index-i3qt2DsU.mjs");
var Route$2 = createFileRoute("/case-studies/")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./case-studies._slug-YdzZPQ13.mjs");
var Route$1 = createFileRoute("/case-studies/$slug")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./podcast._slug-c44AMnZ7.mjs");
var Route = createFileRoute("/podcast/$slug")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$23.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$24
});
var AboutUsRoute = Route$22.update({
	id: "/about-us",
	path: "/about-us",
	getParentRoute: () => Route$24
});
var AiEnablementRoute = Route$21.update({
	id: "/ai-enablement",
	path: "/ai-enablement",
	getParentRoute: () => Route$24
});
var BookACallRoute = Route$20.update({
	id: "/book-a-call",
	path: "/book-a-call",
	getParentRoute: () => Route$24
});
var BusinessSystemsDevelopmentRoute = Route$19.update({
	id: "/business-systems-development",
	path: "/business-systems-development",
	getParentRoute: () => Route$24
});
var CaseStudiesRoute = Route$18.update({
	id: "/case-studies",
	path: "/case-studies",
	getParentRoute: () => Route$24
});
var CyberSecurityRoute = Route$17.update({
	id: "/cyber-security",
	path: "/cyber-security",
	getParentRoute: () => Route$24
});
var HowWeWorkRoute = Route$16.update({
	id: "/how-we-work",
	path: "/how-we-work",
	getParentRoute: () => Route$24
});
var IndustriesRoute = Route$15.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$24
});
var IndustryFinancialServicesRoute = Route$14.update({
	id: "/industry-financial-services",
	path: "/industry-financial-services",
	getParentRoute: () => Route$24
});
var IndustryHomeServicesRoute = Route$13.update({
	id: "/industry-home-services",
	path: "/industry-home-services",
	getParentRoute: () => Route$24
});
var IndustryLogisticsRoute = Route$12.update({
	id: "/industry-logistics",
	path: "/industry-logistics",
	getParentRoute: () => Route$24
});
var IndustryManufacturingRoute = Route$11.update({
	id: "/industry-manufacturing",
	path: "/industry-manufacturing",
	getParentRoute: () => Route$24
});
var IndustryMarketingRoute = Route$10.update({
	id: "/industry-marketing",
	path: "/industry-marketing",
	getParentRoute: () => Route$24
});
var IndustryProfessionalServicesRoute = Route$9.update({
	id: "/industry-professional-services",
	path: "/industry-professional-services",
	getParentRoute: () => Route$24
});
var IndustryRecruitingRoute = Route$8.update({
	id: "/industry-recruiting",
	path: "/industry-recruiting",
	getParentRoute: () => Route$24
});
var OpsConsultingRoute = Route$7.update({
	id: "/ops-consulting",
	path: "/ops-consulting",
	getParentRoute: () => Route$24
});
var PrivacyRoute = Route$6.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$24
});
var ResourcesRoute = Route$5.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$24
});
var TermsRoute = Route$4.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$24
});
var BlogSlugRoute = Route$3.update({
	id: "/blog/$slug",
	path: "/blog/$slug",
	getParentRoute: () => Route$24
});
var CaseStudiesIndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => CaseStudiesRoute
});
var CaseStudiesSlugRoute = Route$1.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => CaseStudiesRoute
});
var PodcastSlugRoute = Route.update({
	id: "/podcast/$slug",
	path: "/podcast/$slug",
	getParentRoute: () => Route$24
});
var CaseStudiesRouteChildren = {
	CaseStudiesSlugRoute,
	CaseStudiesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutUsRoute,
	AiEnablementRoute,
	BookACallRoute,
	BusinessSystemsDevelopmentRoute,
	CaseStudiesRoute: CaseStudiesRoute._addFileChildren(CaseStudiesRouteChildren),
	CyberSecurityRoute,
	HowWeWorkRoute,
	IndustriesRoute,
	IndustryFinancialServicesRoute,
	IndustryHomeServicesRoute,
	IndustryLogisticsRoute,
	IndustryManufacturingRoute,
	IndustryMarketingRoute,
	IndustryProfessionalServicesRoute,
	IndustryRecruitingRoute,
	OpsConsultingRoute,
	PrivacyRoute,
	ResourcesRoute,
	TermsRoute,
	BlogSlugRoute,
	PodcastSlugRoute
};
var routeTree = Route$24._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { GhostButton as _, ClutchBadge as a, CASE_STUDIES as c, INDUSTRIES as d, PILLARS as f, BeamButton as g, WHAT_WE_DO as h, Route$3 as i, CLIENT_LOGOS as l, TEAM as m, Route as n, BLOG_POSTS as o, PODCASTS as p, Route$1 as r, BRAINS as s, router_exports as t, GUIDES as u, cn as v };
