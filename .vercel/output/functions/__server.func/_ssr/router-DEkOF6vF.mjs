import { i as __toESM } from "../_runtime.mjs";
import { _ as industryParam, f as SERVICES, g as industryByPath, l as INDUSTRIES, n as BLOG_POSTS, r as CASE_STUDIES } from "./site-BWEzcE1b.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { U as require_react, _ as createRootRoute, b as useRouter, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, x as require_jsx_runtime, y as useNavigate, z as redirect } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ChevronDown, i as Phone, l as ArrowRight, n as TriangleAlert, o as Mail, t as X } from "../_libs/lucide-react.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brand-Da22Oo8f.js
var BRAND = {
	name: "Cortex",
	legal: "Custom AI Systems for Service Businesses",
	tagline: "Put your software to work.",
	description: "Cortex builds custom AI systems for established service businesses. We connect AI agents to the software your company already uses so they can monitor workflows, handle repetitive operational work, prepare follow-up, build reports, coordinate across systems, and escalate exceptions to your team.",
	founder: "McGuire Flanigan",
	founderRole: "Founder",
	domain: "buildcortex.dev",
	email: "hello@buildcortex.dev",
	phone: "(614) 406-8227",
	phoneHref: "tel:+16144068227",
	city: "Ohio",
	region: "Midwest",
	url: "https://buildcortex.dev",
	ogImage: "https://buildcortex.dev/og.jpg",
	vslSrc: "/videos/vsl.mp4",
	vslPoster: "/images/cortex/vsl-poster.jpg",
	founderPhoto: "/images/cortex/mcguire.jpg"
};
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/beam-button-C4iGN1JT.js
var import_jsx_runtime = require_jsx_runtime();
function BeamButton({ to, href, children, size = "md", className, onClick, type = "button", disabled }) {
	const cls = cn("group inline-flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgb(var(--gold-rgb)/0.35)] font-semibold text-fg tracking-widest rounded-full relative items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 disabled:pointer-events-none disabled:opacity-50", size === "sm" ? "px-5 py-2.5 text-[11px]" : "px-10 py-4 text-sm", className);
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 -z-20 overflow-hidden rounded-full p-px",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,var(--color-gold)_360deg)]",
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
		type,
		className: cls,
		onClick,
		disabled,
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
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/submit-audit-fLNsoR74.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var REVENUE_OPTIONS = [
	{
		value: "under-2",
		label: "Under $2M"
	},
	{
		value: "2-5",
		label: "$2M to $5M"
	},
	{
		value: "5-10",
		label: "$5M to $10M"
	},
	{
		value: "10-25",
		label: "$10M to $25M"
	},
	{
		value: "25-50",
		label: "$25M to $50M"
	},
	{
		value: "50+",
		label: "$50M+"
	}
];
function str(v) {
	return typeof v === "string" ? v.trim() : "";
}
var submitAudit = createServerFn({ method: "POST" }).validator((raw) => {
	if (!raw || typeof raw !== "object") throw new Error("Invalid form");
	const d = raw;
	const first = str(d.first);
	const last = str(d.last);
	const email = str(d.email);
	const phone = str(d.phone);
	const company = str(d.company);
	const industry = str(d.industry) || "other";
	const revenue = str(d.revenue);
	if (!first || !last) throw new Error("Name is required");
	if (!company) throw new Error("Company is required");
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Valid email is required");
	if (phone.replace(/\D/g, "").length < 10) throw new Error("Valid phone is required");
	if (!REVENUE_OPTIONS.some((r) => r.value === revenue)) throw new Error("Select annual revenue");
	return {
		first,
		last,
		email,
		phone,
		company,
		industry,
		industryLabel: INDUSTRIES.find((i) => i.slug === industry)?.name || "Other",
		revenue,
		revenueLabel: REVENUE_OPTIONS.find((r) => r.value === revenue)?.label || revenue,
		website: str(d.website),
		utmSource: str(d.utmSource),
		utmMedium: str(d.utmMedium),
		utmCampaign: str(d.utmCampaign)
	};
}).handler(createSsrRpc("13422380776f371a61a0e54cb4c18c2d6bafbfadf9debaffe84ee51cd6c9b752"));
var qualifyAudit = createServerFn({ method: "POST" }).validator((raw) => {
	if (!raw || typeof raw !== "object") throw new Error("Invalid form");
	const d = raw;
	const email = str(d.email);
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Valid email is required");
	return {
		email,
		website: str(d.website),
		employees: str(d.employees),
		locations: str(d.locations),
		software: str(d.software),
		pain: str(d.pain),
		help: str(d.help)
	};
}).handler(createSsrRpc("43ac094156d8d5b04d182baf24589862a219a9ca92accf85c6d75e51859b1f7b"));
var WORKSHOP_AUDIENCES = [
	{
		value: "trade-association",
		label: "Trade association"
	},
	{
		value: "franchise",
		label: "Franchise group"
	},
	{
		value: "pe-portfolio",
		label: "PE portfolio"
	},
	{
		value: "chamber",
		label: "Chamber of commerce"
	},
	{
		value: "peer-group",
		label: "Peer group"
	},
	{
		value: "software-user-group",
		label: "Software user group"
	},
	{
		value: "owner-org",
		label: "Business-owner organization"
	},
	{
		value: "other",
		label: "Other"
	}
];
var submitWorkshop = createServerFn({ method: "POST" }).validator((raw) => {
	if (!raw || typeof raw !== "object") throw new Error("Invalid form");
	const d = raw;
	const first = str(d.first);
	const last = str(d.last);
	const email = str(d.email);
	const organization = str(d.organization);
	const audience = str(d.audience);
	if (!first || !last) throw new Error("Name is required");
	if (!organization) throw new Error("Organization is required");
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Valid email is required");
	const audienceLabel = WORKSHOP_AUDIENCES.find((a) => a.value === audience)?.label || "Other";
	return {
		first,
		last,
		email,
		phone: str(d.phone),
		organization,
		audience: audience || "other",
		audienceLabel,
		notes: str(d.notes)
	};
}).handler(createSsrRpc("4c33c5be5d9ca3fc96550a0722a86a95aca5837abfcd14fca95206844db116fe"));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/seo-CNKdubke.js
function pageHead({ title, description, path, ogTitle, noindex = false }) {
	const url = path.startsWith("http") ? path : `${BRAND.url}${path}`;
	const fullTitle = title.includes(BRAND.name) ? title : `${title} | ${BRAND.name}`;
	const socialTitle = ogTitle || fullTitle;
	return {
		meta: [
			{ title: fullTitle },
			{
				name: "description",
				content: description
			},
			...noindex ? [{
				name: "robots",
				content: "noindex, nofollow"
			}] : [],
			{
				property: "og:title",
				content: socialTitle
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:image",
				content: BRAND.ogImage
			},
			{
				property: "og:url",
				content: url
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: BRAND.name
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: socialTitle
			},
			{
				name: "twitter:description",
				content: description
			},
			{
				name: "twitter:image",
				content: BRAND.ogImage
			}
		],
		links: [{
			rel: "canonical",
			href: url
		}]
	};
}
function orgJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		name: BRAND.name,
		legalName: `${BRAND.name} ${BRAND.legal}`,
		url: BRAND.url,
		email: BRAND.email,
		telephone: BRAND.phoneHref.replace("tel:", ""),
		image: BRAND.ogImage,
		logo: `${BRAND.url}/favicon.png`,
		description: BRAND.description,
		areaServed: "US",
		founder: {
			"@type": "Person",
			name: BRAND.founder
		},
		address: {
			"@type": "PostalAddress",
			addressRegion: "OH",
			addressCountry: "US"
		}
	};
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DEkOF6vF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
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
function NetBackground() {
	const svgRef = (0, import_react.useRef)(null);
	const linesRef = (0, import_react.useRef)(null);
	const dotsRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const svg = svgRef.current;
		const linesG = linesRef.current;
		const dotsG = dotsRef.current;
		if (!svg || !linesG || !dotsG) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const colorOf = () => getComputedStyle(document.documentElement).getPropertyValue("--color-gold").trim() || "#ff571f";
		let ORANGE = colorOf();
		const MAX_LINES = 140;
		let raf = 0;
		let w = 0;
		let h = 0;
		let nodes = [];
		let lineEls = [];
		let dotEls = [];
		let maxDist = 140;
		const seed = () => {
			w = window.innerWidth;
			h = window.innerHeight;
			svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
			const count = Math.max(32, Math.min(58, Math.floor(w * h / 28e3)));
			maxDist = Math.min(170, Math.max(100, Math.min(w, h) * .22));
			nodes = Array.from({ length: count }, () => ({
				x: Math.random() * w,
				y: Math.random() * h,
				vx: (Math.random() - .5) * .55,
				vy: (Math.random() - .5) * .55
			}));
			linesG.replaceChildren();
			dotsG.replaceChildren();
			lineEls = Array.from({ length: MAX_LINES }, () => {
				const el = document.createElementNS("http://www.w3.org/2000/svg", "line");
				el.setAttribute("stroke", ORANGE);
				el.setAttribute("stroke-width", "0.85");
				el.setAttribute("stroke-linecap", "round");
				el.setAttribute("stroke-opacity", "0");
				linesG.appendChild(el);
				return el;
			});
			dotEls = nodes.map(() => {
				const el = document.createElementNS("http://www.w3.org/2000/svg", "circle");
				el.setAttribute("r", "1.7");
				el.setAttribute("fill", ORANGE);
				dotsG.appendChild(el);
				return el;
			});
		};
		const tick = () => {
			if (!reduce) for (const n of nodes) {
				n.x += n.vx;
				n.y += n.vy;
				if (n.x < -8) n.x = w + 8;
				if (n.x > w + 8) n.x = -8;
				if (n.y < -8) n.y = h + 8;
				if (n.y > h + 8) n.y = -8;
			}
			let used = 0;
			for (let i = 0; i < nodes.length && used < MAX_LINES; i++) {
				const a = nodes[i];
				for (let j = i + 1; j < nodes.length && used < MAX_LINES; j++) {
					const b = nodes[j];
					const dx = a.x - b.x;
					const dy = a.y - b.y;
					const d2 = dx * dx + dy * dy;
					if (d2 > maxDist * maxDist) continue;
					const d = Math.sqrt(d2);
					const el = lineEls[used++];
					el.setAttribute("x1", String(a.x));
					el.setAttribute("y1", String(a.y));
					el.setAttribute("x2", String(b.x));
					el.setAttribute("y2", String(b.y));
					el.setAttribute("stroke-opacity", String((1 - d / maxDist) * .6));
				}
			}
			for (let k = used; k < lineEls.length; k++) lineEls[k].setAttribute("stroke-opacity", "0");
			for (let i = 0; i < nodes.length; i++) {
				dotEls[i].setAttribute("cx", String(nodes[i].x));
				dotEls[i].setAttribute("cy", String(nodes[i].y));
			}
			if (!reduce) raf = requestAnimationFrame(tick);
		};
		seed();
		tick();
		const onResize = () => {
			cancelAnimationFrame(raf);
			seed();
			tick();
		};
		window.addEventListener("resize", onResize);
		const mo = new MutationObserver(() => {
			ORANGE = colorOf();
			lineEls.forEach((el) => el.setAttribute("stroke", ORANGE));
			dotEls.forEach((el) => el.setAttribute("fill", ORANGE));
		});
		mo.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["data-theme"]
		});
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", onResize);
			mo.disconnect();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		ref: svgRef,
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 z-0 h-full w-full opacity-30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { ref: linesRef }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { ref: dotsRef })]
	});
}
var KEY$1 = "ok-cookie-consent";
function CookieBanner() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			if (!localStorage.getItem(KEY$1)) setOpen(true);
		} catch {
			setOpen(true);
		}
	}, []);
	const choose = (v) => {
		try {
			localStorage.setItem(KEY$1, v);
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
					"We use cookies needed to run the site. We do not currently load analytics.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "text-gold hover:text-gold-light",
						children: "Privacy"
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
var Ctx = (0, import_react.createContext)(null);
function useAudit() {
	const ctx = (0, import_react.useContext)(Ctx);
	if (!ctx) throw new Error("useAudit must be inside AuditProvider");
	return ctx;
}
function AuditProvider({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ctx.Provider, {
		value: {
			open,
			openAudit: () => setOpen(true),
			closeAudit: () => setOpen(false)
		},
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditModal, {})]
	});
}
var KEY = "cortex-audits";
var empty = {
	first: "",
	last: "",
	email: "",
	phone: "",
	company: "",
	industry: "automotive",
	revenue: "",
	website: "",
	employees: "",
	locations: "",
	software: "",
	pain: "",
	help: ""
};
var inputCls = "w-full rounded-lg border border-fg/10 bg-bg px-3 py-2.5 text-sm text-fg outline-none placeholder:text-fg/30 focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/60";
function utms() {
	if (typeof window === "undefined") return {
		utmSource: "",
		utmMedium: "",
		utmCampaign: ""
	};
	const p = new URLSearchParams(window.location.search);
	return {
		utmSource: p.get("utm_source") || "",
		utmMedium: p.get("utm_medium") || "",
		utmCampaign: p.get("utm_campaign") || ""
	};
}
function AuditModal() {
	const { open, closeAudit } = useAudit();
	const navigate = useNavigate();
	const titleId = (0, import_react.useId)();
	const dialogRef = (0, import_react.useRef)(null);
	const lastFocus = (0, import_react.useRef)(null);
	const [step, setStep] = (0, import_react.useState)(1);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [form, setForm] = (0, import_react.useState)(empty);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		lastFocus.current = document.activeElement;
		const onKey = (e) => {
			if (e.key === "Escape") closeAudit();
			if (e.key !== "Tab" || !dialogRef.current) return;
			const nodes = dialogRef.current.querySelectorAll("a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex=\"-1\"])");
			if (!nodes.length) return;
			const first = nodes[0];
			const last = nodes[nodes.length - 1];
			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		const t = window.setTimeout(() => {
			dialogRef.current?.querySelector("input, select, button")?.focus();
		}, 20);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
			window.clearTimeout(t);
			lastFocus.current?.focus();
		};
	}, [open, closeAudit]);
	(0, import_react.useEffect)(() => {
		if (!open) {
			setStep(1);
			setBusy(false);
			setError("");
		}
	}, [open]);
	const field = (k) => ({
		value: form[k],
		onChange: (e) => setForm((f) => ({
			...f,
			[k]: e.target.value
		}))
	});
	const done = () => {
		closeAudit();
		navigate({ to: "/thanks" });
	};
	const sendStep1 = async (e) => {
		e.preventDefault();
		if (busy) return;
		setBusy(true);
		setError("");
		try {
			const prev = JSON.parse(localStorage.getItem(KEY) || "[]");
			prev.push({
				...form,
				at: (/* @__PURE__ */ new Date()).toISOString()
			});
			localStorage.setItem(KEY, JSON.stringify(prev));
		} catch {}
		try {
			await submitAudit({ data: {
				...form,
				...utms()
			} });
			setStep(2);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Could not send. Try again.");
		} finally {
			setBusy(false);
		}
	};
	const sendStep2 = async (e) => {
		e.preventDefault();
		if (busy) return;
		setBusy(true);
		setError("");
		try {
			await qualifyAudit({ data: form });
			done();
		} catch {
			done();
		} finally {
			setBusy(false);
		}
	};
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Close",
			className: "absolute inset-0 bg-bg/80 backdrop-blur-sm",
			onClick: closeAudit
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: dialogRef,
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": titleId,
			className: "relative z-10 w-full max-w-lg rounded-t-2xl border border-fg/10 bg-surface shadow-2xl sm:rounded-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: closeAudit,
				className: "absolute top-4 right-4 rounded-full p-2 text-fg/50 hover:bg-fg/5 hover:text-fg focus-visible:ring-2 focus-visible:ring-gold/60",
				"aria-label": "Close form",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-6 sm:p-8",
				children: step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-bold tracking-widest text-gold uppercase",
						children: "Step 2 of 2 · optional"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: titleId,
						className: "mt-2 text-2xl font-medium tracking-tight text-fg md:text-3xl",
						children: "Help us prepare."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-light text-fg/50",
						children: "Skip any of this. We already have your request."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: sendStep2,
						className: "mt-6 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
										children: "Employees"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										...field("employees"),
										className: inputCls,
										placeholder: "e.g. 28"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
										children: "Locations"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										...field("locations"),
										className: inputCls,
										placeholder: "e.g. 3"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
									children: "What software do you use?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									...field("software"),
									className: inputCls,
									placeholder: "Tekmetric, GHL, QuickBooks…"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
									children: "Biggest repetitive processes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									...field("pain"),
									rows: 3,
									className: inputCls,
									placeholder: "Follow-up, reporting, stalled jobs, unbilled work…"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
									children: "What would you most like AI to help with?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									...field("help"),
									rows: 3,
									className: inputCls,
									placeholder: "The one queue that still depends on someone remembering."
								})]
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-red-400",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 pt-2 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeamButton, {
									type: "submit",
									className: "w-full",
									disabled: busy,
									children: busy ? "Saving…" : "Send details"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: done,
									className: "text-sm text-fg/50 hover:text-fg",
									children: "Skip for now"
								})]
							})
						]
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-bold tracking-widest text-gold uppercase",
						children: "Free AI Operations Audit · Step 1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: titleId,
						className: "mt-2 text-2xl font-medium tracking-tight text-fg md:text-3xl",
						children: "See where AI could actually help."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-light text-fg/50",
						children: "Apply in a minute. Then a 30-minute walkthrough. You leave with an AI Opportunity Map."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: sendStep1,
						className: "mt-6 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
										children: "First name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										...field("first"),
										className: inputCls,
										placeholder: "McGuire",
										autoComplete: "given-name"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
										children: "Last name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										...field("last"),
										className: inputCls,
										placeholder: "Flanigan",
										autoComplete: "family-name"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
									children: "Work email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "email",
									...field("email"),
									className: inputCls,
									placeholder: "you@company.com",
									autoComplete: "email"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "tel",
									...field("phone"),
									className: inputCls,
									placeholder: "(614) 000-0000",
									autoComplete: "tel"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
									children: "Company"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									...field("company"),
									className: inputCls,
									placeholder: "Company name",
									autoComplete: "organization"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
									children: "Website"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									...field("website"),
									className: inputCls,
									placeholder: "https://",
									autoComplete: "url"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
										children: "Industry"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										...field("industry"),
										className: inputCls,
										children: [INDUSTRIES.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: i.slug,
											children: i.name
										}, i.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "other",
											children: "Other"
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1.5 block text-[10px] font-bold tracking-widest text-fg/50 uppercase",
										children: "Annual revenue"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										required: true,
										...field("revenue"),
										className: inputCls,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select"
										}), REVENUE_OPTIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: r.value,
											children: r.label
										}, r.value))]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-2",
								children: [error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-3 text-sm text-red-400",
									children: error
								}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeamButton, {
									type: "submit",
									className: "w-full",
									disabled: busy,
									children: busy ? "Sending…" : "Get my free audit"
								})]
							})
						]
					})
				] })
			})]
		})]
	});
}
function AuditButton({ children, className, size }) {
	const { openAudit } = useAudit();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeamButton, {
		onClick: openAudit,
		className,
		size,
		children
	});
}
function CortexMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("text-gold", className),
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "7.5",
				r: "3.1",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "7.2",
				cy: "22.5",
				r: "3.1",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24.8",
				cy: "22.5",
				r: "3.1",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16.5",
				r: "2.1",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 10.6v3.6M13.9 15.4 9.6 20.3M18.1 15.4l4.3 4.9M8.8 20.1l5.4-2.6M23.2 20.1l-5.4-2.6",
				stroke: "currentColor",
				strokeWidth: "1.35",
				strokeLinecap: "round",
				fill: "none",
				opacity: "0.85"
			})
		]
	});
}
function CortexLogo({ to = "/", size = "md", withTagline = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CortexMark, { className: size === "sm" ? "h-8 w-8" : "h-10 w-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex min-w-0 flex-col items-start leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-semibold tracking-[0.18em] text-fg uppercase", size === "sm" ? "text-sm" : "text-base"),
				children: BRAND.name
			}), withTagline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 hidden max-w-[220px] text-[9px] leading-snug font-medium tracking-[0.04em] text-fg/45 sm:block",
				children: BRAND.tagline
			})]
		})]
	});
}
function FounderPhoto({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: BRAND.founderPhoto,
		alt: BRAND.founder,
		className: cn("size-12 rounded-full object-cover object-[center_18%] ring-1 ring-gold/30", className)
	});
}
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
	const closeTimer = (0, import_react.useRef)(null);
	const headerRef = (0, import_react.useRef)(null);
	const openMenuRef = (0, import_react.useRef)(openMenu);
	openMenuRef.current = openMenu;
	const cancelClose = () => {
		if (closeTimer.current) {
			clearTimeout(closeTimer.current);
			closeTimer.current = null;
		}
	};
	const openNav = (menu) => {
		cancelClose();
		setHidden(false);
		setOpenMenu(menu);
	};
	const closeNav = () => {
		cancelClose();
		closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
	};
	const toggleNav = (menu) => {
		cancelClose();
		setOpenMenu((cur) => cur === menu ? null : menu);
	};
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
		const onPointerDown = (e) => {
			if (!openMenuRef.current) return;
			if (headerRef.current?.contains(e.target)) return;
			setOpenMenu(null);
		};
		const onKey = (e) => {
			if (e.key === "Escape") setOpenMenu(null);
		};
		document.addEventListener("pointerdown", onPointerDown);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("pointerdown", onPointerDown);
			document.removeEventListener("keydown", onKey);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		let lastY = window.scrollY;
		const onScroll = () => {
			const y = window.scrollY;
			setHidden(y > 80 && y > lastY && !openMenuRef.current && !mobile);
			lastY = y;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [mobile]);
	const navLink = (href, label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: href,
		className: cn("whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-fg/70 transition-colors hover:bg-fg/5 hover:text-fg focus-visible:ring-2 focus-visible:ring-gold/60", isActivePath(pathname, href) && "nav-active"),
		children: label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-[81px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			ref: headerRef,
			className: "fixed top-0 right-0 left-0 z-50 w-full border-b border-fg/5 bg-bg/50 font-sans backdrop-blur-xl",
			style: {
				transform: hidden ? "translateY(-100%)" : "translateY(0)",
				transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "relative z-50 mx-auto flex h-20 max-w-7xl items-center justify-between px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CortexLogo, { size: "sm" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "m-0 hidden list-none items-center gap-2 p-0 lg:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: navLink("/how-we-work", "How It Works") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "relative",
									onMouseEnter: () => openNav("industries"),
									onMouseLeave: closeNav,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										"aria-expanded": openMenu === "industries",
										"aria-haspopup": "true",
										onClick: () => toggleNav("industries"),
										className: cn("flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-fg/70 outline-none hover:bg-fg/5 hover:text-fg focus-visible:ring-2 focus-visible:ring-gold/60", (openMenu === "industries" || pathname.startsWith("/industr")) && "nav-active"),
										children: ["Industries", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3.5", openMenu === "industries" && "rotate-180") })]
									}), openMenu === "industries" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute top-full left-0 z-70 min-w-56 rounded-xl border border-fg/10 bg-surface p-2 shadow-2xl",
										children: [INDUSTRIES.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/industries/$slug",
											params: { slug: industryParam(ind) },
											className: "block rounded-lg px-3 py-2 text-sm text-fg/70 hover:bg-fg/5 hover:text-fg",
											children: ind.name
										}, ind.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/industries",
											className: "mt-1 block rounded-lg px-3 py-2 text-sm font-medium text-gold",
											children: "All industries"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "relative",
									onMouseEnter: () => openNav("services"),
									onMouseLeave: closeNav,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										"aria-expanded": openMenu === "services",
										"aria-haspopup": "true",
										onClick: () => toggleNav("services"),
										className: cn("flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-fg/70 outline-none hover:bg-fg/5 hover:text-fg focus-visible:ring-2 focus-visible:ring-gold/60", (openMenu === "services" || [
											"/ai-implementation",
											"/ai-agents",
											"/private-ai",
											"/managed-ai",
											"/ai-workshops"
										].some((p) => pathname.startsWith(p))) && "nav-active"),
										children: ["Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3.5", openMenu === "services" && "rotate-180") })]
									}), openMenu === "services" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-full left-0 z-70 min-w-56 rounded-xl border border-fg/10 bg-surface p-2 shadow-2xl",
										children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: s.href,
											className: "block rounded-lg px-3 py-2 text-sm text-fg/70 hover:bg-fg/5 hover:text-fg",
											children: s.name
										}, s.slug))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: navLink("/case-studies", "Case Study") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: navLink("/resources", "Resources") })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditButton, {
							size: "sm",
							className: "hidden lg:inline-flex",
							children: "Free AI Audit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-label": "Open menu",
							className: cn("block p-2 lg:hidden", mobile && "hamburger-active"),
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
					className: cn("fixed inset-y-0 right-0 z-60 flex h-dvh w-[85%] max-w-[400px] transform flex-col border-l border-fg/10 bg-bg shadow-2xl transition-transform duration-500", mobile ? "translate-x-0" : "translate-x-full"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-fg/5 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-semibold tracking-tight text-fg",
							children: "Menu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Close menu",
							onClick: () => setMobile(false),
							className: "rounded-full bg-fg/5 p-2 text-fg/60 hover:text-fg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 overflow-y-auto p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "m-0 flex list-none flex-col gap-2 p-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/how-we-work",
									className: "block rounded-lg px-4 py-3 text-lg font-medium text-fg/80 hover:text-gold",
									children: "How It Works"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setMobileAcc(mobileAcc === "ind" ? null : "ind"),
									className: "flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-lg font-medium text-fg/80",
									children: ["Industries", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-5 text-fg/40", mobileAcc === "ind" && "rotate-180") })]
								}), mobileAcc === "ind" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "ml-1 flex flex-col border-l border-fg/10 pl-4",
									children: INDUSTRIES.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/industries/$slug",
										params: { slug: industryParam(i) },
										className: "block py-2 text-base text-fg/60 hover:text-fg",
										children: i.name
									}) }, i.slug))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setMobileAcc(mobileAcc === "svc" ? null : "svc"),
									className: "flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-lg font-medium text-fg/80",
									children: ["Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-5 text-fg/40", mobileAcc === "svc" && "rotate-180") })]
								}), mobileAcc === "svc" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "ml-1 flex flex-col border-l border-fg/10 pl-4",
									children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: s.href,
										className: "block py-2 text-base text-fg/60 hover:text-fg",
										children: s.name
									}) }, s.slug))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/case-studies",
									className: "block rounded-lg px-4 py-3 text-lg font-medium text-fg/80 hover:text-gold",
									children: "Case Study"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/resources",
									className: "block rounded-lg px-4 py-3 text-lg font-medium text-fg/80 hover:text-gold",
									children: "Resources"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "mt-4 border-t border-fg/5 pt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditButton, {
										size: "sm",
										children: "Free AI Audit"
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CortexLogo, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-[10px] font-bold tracking-[0.18em] text-gold uppercase",
								children: BRAND.legal
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-6 max-w-md text-lg leading-relaxed font-light text-fg/70",
								children: "Custom AI systems that work across the software your business already runs. Agents monitor, follow up, report, and escalate. The same build includes a secure dashboard for the numbers."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 text-sm text-fg/70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										BRAND.name,
										" · ",
										BRAND.city
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: BRAND.phoneHref,
										className: "flex items-center gap-2 hover:text-gold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5" }), BRAND.phone]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `mailto:${BRAND.email}`,
										className: "flex items-center gap-2 hover:text-gold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5" }), BRAND.email]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7 lg:flex lg:items-end lg:justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-medium tracking-tight text-fg",
									children: "See where AI could actually help."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 mb-6 font-light text-fg/60",
									children: "A Free AI Operations Audit. Practical, specific, no obligation to build."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeamButton, {
									to: "/audit",
									children: "Get Your Free AI Operations Audit"
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-10 py-16 md:grid-cols-4 lg:gap-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-5 text-[10px] font-bold tracking-widest text-gold uppercase",
							children: "Services"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm font-light text-fg/60",
							children: [
								SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: s.href,
									className: "hover:text-fg",
									children: s.name
								}) }, s.slug)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/how-we-work",
									className: "hover:text-fg",
									children: "How We Work"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/ai-workshops",
									className: "hover:text-fg",
									children: "AI Workshops"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-5 text-[10px] font-bold tracking-widest text-gold uppercase",
							children: "Industries"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm font-light text-fg/60",
							children: [INDUSTRIES.slice(0, 6).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/industries/$slug",
								params: { slug: industryParam(i) },
								className: "hover:text-fg",
								children: i.name
							}) }, i.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/industries",
								className: "hover:text-fg",
								children: "All industries"
							}) })]
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
									children: "About"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hover:text-fg",
									children: "Contact"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/trust",
									className: "hover:text-fg",
									children: "Trust and security"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/integrations",
									className: "hover:text-fg",
									children: "Integrations"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/case-studies",
									className: "hover:text-fg",
									children: "Case Study"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/resources",
									className: "hover:text-fg",
									children: "Field notes"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-5 text-[10px] font-bold tracking-widest text-gold uppercase",
							children: "Legal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm font-light text-fg/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacy",
									className: "hover:text-fg",
									children: "Privacy"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/terms",
									className: "hover:text-fg",
									children: "Terms"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: openCookieManager,
									className: "hover:text-fg",
									children: "Cookies"
								}) })
							]
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 border-t border-fg/5 pt-8 md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-light text-fg/50",
						children: [
							"© 2026 ",
							BRAND.name,
							". ",
							BRAND.legal,
							". ",
							BRAND.city,
							"."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/audit",
								className: "text-xs text-fg/50 hover:text-fg",
								children: "Free audit"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "text-xs text-fg/50 hover:text-fg",
								children: "Privacy Policy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "text-xs text-fg/50 hover:text-fg",
								children: "Terms of Service"
							})
						]
					})]
				})
			]
		})
	});
}
function reduced() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function revealIfVisible(el) {
	if (el.classList.contains("is-on")) return;
	const r = el.getBoundingClientRect();
	if (r.height < 16) return;
	if (r.top < window.innerHeight * .8) el.classList.add("is-on");
}
function RevealSection({ className, children, ...props }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (reduced()) {
			el.classList.add("is-on");
			return;
		}
		el.classList.add("js-reveal");
	}, []);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (reduced()) return;
		const check = () => revealIfVisible(el);
		const a = requestAnimationFrame(() => requestAnimationFrame(check));
		window.addEventListener("scroll", check, { passive: true });
		window.addEventListener("resize", check);
		return () => {
			cancelAnimationFrame(a);
			window.removeEventListener("scroll", check);
			window.removeEventListener("resize", check);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: cn(className),
		...props,
		children
	});
}
function RevealRoot({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		if (reduced()) return;
		const arm = (el) => {
			if (!el.classList.contains("js-reveal")) el.classList.add("js-reveal");
		};
		const checkAll = () => {
			document.querySelectorAll("section").forEach((el) => {
				arm(el);
				revealIfVisible(el);
			});
		};
		const a = requestAnimationFrame(() => requestAnimationFrame(checkAll));
		window.addEventListener("scroll", checkAll, { passive: true });
		window.addEventListener("resize", checkAll);
		const mo = new MutationObserver(checkAll);
		mo.observe(document.body, {
			childList: true,
			subtree: true
		});
		return () => {
			cancelAnimationFrame(a);
			window.removeEventListener("scroll", checkAll);
			window.removeEventListener("resize", checkAll);
			mo.disconnect();
		};
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function SiteShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const landing = pathname === "/audit" || pathname === "/schedule" || pathname === "/confirmed" || pathname === "/thanks";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex min-h-screen flex-col",
				children: [
					landing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandingHeader, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealRoot, { children })
					}),
					landing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandingFooter, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieBanner, {})
		]
	}) });
}
function LandingHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-fg/5 bg-bg/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CortexLogo, {
				size: "sm",
				withTagline: false
			}), pathname === "/schedule" || pathname === "/confirmed" || pathname === "/thanks" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${BRAND.email}`,
				className: "text-xs tracking-widest text-fg/60 uppercase hover:text-fg",
				children: BRAND.email
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditButton, {
				size: "sm",
				children: "Free audit"
			})]
		})
	});
}
function LandingFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-fg/10 px-6 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-4 text-xs text-fg/40 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© 2026 ",
				BRAND.name,
				". ",
				BRAND.domain
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "hover:text-fg",
						children: "Privacy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "hover:text-fg",
						children: "Terms"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: openCookieManager,
						className: "hover:text-fg",
						children: "Cookies"
					})
				]
			})]
		})
	});
}
var styles_default = "/assets/styles-DfzVmdGS.css";
var home = pageHead({
	title: `${BRAND.name}: ${BRAND.tagline.replace(/\.$/, "")}`,
	description: BRAND.description,
	path: "/"
});
var Route$36 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "theme-color",
				content: "#050505"
			},
			...home.meta
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
				href: "/favicon.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
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
			},
			...home.links
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(orgJsonLd())
		}]
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
var $$splitComponentImporter$25 = () => import("./routes-DGrp_e_k.mjs");
var Route$35 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$25, "component") });
var $$splitComponentImporter$24 = () => import("./about-us-BTLpaGL-.mjs");
var Route$34 = createFileRoute("/about-us")({
	head: () => pageHead({
		title: `About ${BRAND.name}`,
		description: BRAND.description,
		path: "/about-us"
	}),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./ai-agents-CwQ1FCEG.mjs");
var Route$33 = createFileRoute("/ai-agents")({
	head: () => pageHead({
		title: "AI Agents for Follow-up, Monitoring, and Reporting",
		description: "AI agents with actual jobs inside your business. Each one monitors information, follows up, prepares reports, coordinates across systems, or escalates exceptions to your team.",
		path: "/ai-agents"
	}),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./ai-implementation-DDNhlv1h.mjs");
var Route$32 = createFileRoute("/ai-implementation")({
	head: () => pageHead({
		title: "AI Implementation for Service Businesses",
		description: "Custom AI implementation, built around your existing operation. From workflow discovery and systems integration to agent development, permissions, testing, and deployment.",
		path: "/ai-implementation"
	}),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./ai-workshops-BYzFkE7j.mjs");
var Route$31 = createFileRoute("/ai-workshops")({
	head: () => pageHead({
		title: "AI Workshops for Service Businesses",
		description: "A practical AI workshop for service-business owners and leadership teams. Trade associations, franchise groups, PE portfolios, chambers, and peer groups.",
		path: "/ai-workshops"
	}),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./audit-DpRCIpT2.mjs");
var Route$30 = createFileRoute("/audit")({
	head: () => pageHead({
		title: "Free AI Operations Audit",
		description: "Find out what AI could actually take off your team. We'll review how work moves through your business, the software you already use, and where people are still doing repetitive work manually.",
		path: "/audit"
	}),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./brand-kit-BcGxfGKl.mjs");
var Route$29 = createFileRoute("/brand-kit")({
	head: () => pageHead({
		title: "Brand kit",
		description: "Cortex logos, icons, and social images.",
		path: "/brand-kit",
		noindex: true
	}),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./case-studies-DPyBbRgr.mjs");
var Route$28 = createFileRoute("/case-studies")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./confirmed-fQWrko6j.mjs");
var Route$27 = createFileRoute("/confirmed")({
	head: () => pageHead({
		title: "You're booked",
		description: "Your AI Operations Audit walkthrough is on the calendar.",
		path: "/confirmed",
		noindex: true
	}),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./contact-DubZFLjN.mjs");
var Route$26 = createFileRoute("/contact")({
	head: () => pageHead({
		title: "Contact",
		description: `Talk to ${BRAND.founder} at Cortex. ${BRAND.phone}. ${BRAND.email}. Based in Ohio. Work with service businesses nationally.`,
		path: "/contact"
	}),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./how-we-work-B7DUcZb8.mjs");
var Route$25 = createFileRoute("/how-we-work")({
	head: () => pageHead({
		title: "How We Work",
		description: "Understand the operation first. Then automate it. Audit, design, build, deploy, and manage custom AI systems on the software you already use.",
		path: "/how-we-work"
	}),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./industries-KO5IEbMo.mjs");
var Route$24 = createFileRoute("/industries")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var Route$23 = createFileRoute("/industry-automotive")({ beforeLoad: () => {
	throw redirect({
		to: "/industries/$slug",
		params: { slug: "automotive-service" }
	});
} });
var Route$22 = createFileRoute("/industry-contracting")({ beforeLoad: () => {
	throw redirect({
		to: "/industries/$slug",
		params: { slug: "contracting" }
	});
} });
var Route$21 = createFileRoute("/industry-electrical")({ beforeLoad: () => {
	throw redirect({
		to: "/industries/$slug",
		params: { slug: "electrical" }
	});
} });
var Route$20 = createFileRoute("/industry-home-services")({ beforeLoad: () => {
	throw redirect({
		to: "/industries/$slug",
		params: { slug: "home-services" }
	});
} });
var Route$19 = createFileRoute("/industry-hvac")({ beforeLoad: () => {
	throw redirect({
		to: "/industries/$slug",
		params: { slug: "hvac" }
	});
} });
var Route$18 = createFileRoute("/industry-pest-control")({ beforeLoad: () => {
	throw redirect({
		to: "/industries/$slug",
		params: { slug: "pest-control" }
	});
} });
var Route$17 = createFileRoute("/industry-plumbing")({ beforeLoad: () => {
	throw redirect({
		to: "/industries/$slug",
		params: { slug: "plumbing" }
	});
} });
var Route$16 = createFileRoute("/industry-roofing")({ beforeLoad: () => {
	throw redirect({
		to: "/industries/$slug",
		params: { slug: "roofing" }
	});
} });
var Route$15 = createFileRoute("/industry-smart-home")({ beforeLoad: () => {
	throw redirect({
		to: "/industries/$slug",
		params: { slug: "smart-home" }
	});
} });
var Route$14 = createFileRoute("/industry-windows")({ beforeLoad: () => {
	throw redirect({
		to: "/industries/$slug",
		params: { slug: "windows" }
	});
} });
var $$splitComponentImporter$13 = () => import("./integrations-BSNdBp61.mjs");
var Route$13 = createFileRoute("/integrations")({
	head: () => pageHead({
		title: "Integrations",
		description: "Connect AI to the software your business already runs. Official APIs, approved integrations, webhooks, and controlled browser automation where needed. Evaluated per deployment.",
		path: "/integrations"
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./managed-ai-CPW-CpmT.mjs");
var Route$12 = createFileRoute("/managed-ai")({
	head: () => pageHead({
		title: "Managed AI Operations",
		description: "AI systems are operational infrastructure. Managed AI Operations keeps your agents, integrations, permissions, evaluations, and workflows working as intended after deployment.",
		path: "/managed-ai"
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./privacy-CchzKsdT.mjs");
var Route$11 = createFileRoute("/privacy")({
	head: () => pageHead({
		title: "Privacy Policy",
		description: `How ${BRAND.name} handles form submissions, contact information, and cookies. We do not sell personal information.`,
		path: "/privacy"
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./private-ai-D0kEcHIG.mjs");
var Route$10 = createFileRoute("/private-ai")({
	head: () => pageHead({
		title: "Private AI Infrastructure | Cloud, Local, or Hybrid",
		description: "Cloud, private, or hybrid AI — designed around the workload. Cortex routes routine work to private local models, uses traditional automation where AI isn't necessary, and calls cloud models when a task requires them.",
		path: "/private-ai"
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./resources-l8etSVU1.mjs");
var Route$9 = createFileRoute("/resources")({
	head: () => pageHead({
		title: "Field Notes",
		description: "How we installed a private AI workforce, local vs cloud, what agents can do in a shop, agents vs automations, and how the audit works.",
		path: "/resources"
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./schedule-Da-OA-lf.mjs");
var Route$8 = createFileRoute("/schedule")({
	head: () => pageHead({
		title: "Schedule your walkthrough",
		description: "Pick a time for the 30-minute AI Operations Audit walkthrough.",
		path: "/schedule",
		noindex: true
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./terms-BVQy0iGc.mjs");
var Route$7 = createFileRoute("/terms")({
	head: () => pageHead({
		title: "Terms of Service",
		description: `Terms for using ${BRAND.domain} and working with Cortex.`,
		path: "/terms"
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./thanks-CxgNrJrA.mjs");
var Route$6 = createFileRoute("/thanks")({
	head: () => pageHead({
		title: "We got your audit request",
		description: "Cortex will review your information and send a scheduling link if it looks like a fit.",
		path: "/thanks",
		noindex: true
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./trust-DlE-HYv5.mjs");
var Route$5 = createFileRoute("/trust")({
	head: () => pageHead({
		title: "Trust and Security",
		description: "Where company data goes, who can see it, how agent permissions work, how credentials are stored, what is logged, and what you own. Cortex trust and security.",
		path: "/trust"
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var ARTICLE_BODIES = {
	"private-ai-workforce-automotive": [
		"Detail Driven Enterprises runs repair, collision, detailing, and glass in Jackson Hole. Each line already had software. We did not replace Tekmetric. We did not replace CCC ONE. We installed an operator OS and a workforce on top of what they already ran.",
		"The stack on the ground: Tekmetric for repair, CCC ONE for collision, Omega EDI, GoHighLevel, QuickBooks, Stripe, Google Ads, Meta, Google Business Profile, GA4, Search Console, Slack. Four shop types. A person was still the integration.",
		"The architecture is boring on purpose. Private Linux hardware at the bottom. Collectors and a local CCC EMS bridge. An operator OS in the middle: command, inbox, quotes, bookings, shop views, money, demand. A manager, the orchestrator, assigns work. Specialized agents watch follow-up, monitoring, and reporting. None of them get a master login to the company.",
		"Collision is the honest hard part. CCC will export EMS estimates and a Final Bill. It will not export the schedule. The bridge reads the folder CCC already writes. It does not scrape DATA.DAT.",
		"Inference is hybrid. Routine work stays local. When a job needs a stronger model, it goes to the cloud. That is a routing decision, not a brand position. Operators care about the morning report landing, not about where the tokens ran.",
		"What we will not put on this page yet: hours saved, dollars recovered, owner quotes. Those go here when they are measured and the operator is willing to stand behind them. Until then, the facts are the story.",
		"If you want the same shape inside your shops, start with the audit. We will tell you if the stack and the volume of leftover work actually justify a build."
	],
	"local-vs-cloud-ai-service-businesses": [
		"Local versus cloud is a bad argument if you treat it like a religion. Some work should never leave the building. Some work needs a frontier model. Most service businesses need both, routed on purpose.",
		"Local wins when the job is repetitive, high-volume, and sits next to records you do not want to ship off-site. Owner reports. Ticket watches. Drafting a follow-up from a job file you already store. Dedicated hardware you control also makes the cost of a run more predictable than renting tokens every time a bay opens.",
		"Cloud wins when the job is messy, rare, or needs a model that is still moving fast. A weird customer email. A long estimate that does not match a template. A one-off summary of a messy file. Paying for that occasionally is cheaper than pretending a small local model can do everything.",
		"Rules still beat models for a surprising amount of operations work. If a repair order has no approval and no customer update after X hours, you do not need a language model to notice. You need a watcher, a permission, and a person who still owns the customer.",
		"The practical answer for most shops and trades is hybrid. Local for the overnight watch and the daily briefing. Cloud when the agent has to write something that would embarrass you if it were dumb. The audit is where we decide which jobs belong where, not a slide about GPUs."
	],
	"ai-agents-inside-an-auto-repair-shop": [
		"An auto shop already has a system of record. Tekmetric, Shopmonkey, Mitchell 1, whatever you bought. The leftover work is not a missing login. It is people still operating that software by hand.",
		"Open repair orders go quiet. The customer is waiting. The advisor is on the drive. Nobody is watching aging tickets unless someone thinks to look. An agent can watch the board and flag stalls, missing approvals, and updates that never went out.",
		"Declined work dies in the ticket. The recommendation was logged. The follow-up was not. That revenue leaves with the car. An agent can keep a declined-line queue and draft the next message. A person still sends it until you trust the path.",
		"The owner report is a Sunday job. Hours, comebacks, A/R, ads versus cars that actually booked. Someone builds it from three logins. An agent can assemble the exceptions overnight so the owner starts from the problems, not from the exports.",
		"Comebacks are a feeling until they show up as a pattern. Ads spend without an operator. None of this requires ripping out the shop system. It requires permission to read it, a watcher on the queues you care about, and a person who still owns the customer conversation.",
		"Named tools on this page are examples, not a certified list. We confirm access in the audit. If a vendor will not let us in, we say so before anyone pays for a build."
	],
	"ai-agents-vs-automations": [
		"Zapier moves a field. An agent watches a queue. Mixing them up is how operators buy the wrong thing and then decide AI is theater.",
		"An automation is a trigger and an action. Lead arrives, create a contact. Invoice paid, send a receipt. Fine. Necessary, even. It does not notice that an estimate aged past the window, or that the same customer called twice and nobody called back.",
		"An agent has a job. Watch stalled repair orders. Watch unsold estimates. Assemble the morning briefing. It reads more than one system. It decides whether something is an exception. It drafts, flags, or, where you approve it, takes a small action. Then it logs what it did.",
		"You still want automations. They are cheaper and more reliable for the dumb paths. The mistake is asking ChatGPT plus a zap to run the shop. Glue cannot respect permissions, keep a history, or get better as the operation changes. That takes architecture, testing, and someone watching the watchers.",
		"In the audit we mark which stalls are automations, which are agents, and which should stay with a person. If a path needs taste or a hard conversation, it is not an agent job. If it is a field moving from A to B, it is not an agent job either."
	],
	"how-an-ai-operations-audit-works": [
		"The audit is how we keep you from buying a build you do not need. It is also the only honest way to price the work. We will not quote a number from a website form.",
		"Step one: apply. Name, email, phone, company, industry, revenue. That is enough to get you on the list. If you have website, headcount, locations, software, and the stall that bothers you most, send those too. Skip them if you are in a hurry. We already have the lead.",
		"Step two: a 30-minute walkthrough of how work actually moves. Not a slide deck about AI. Show us the software. Show us where a job stalls. Show us who still copies between systems. If you cannot spare thirty minutes, you are not ready to install a workforce.",
		"Step three: an AI Opportunity Map. Highest-value agent paths. Whether we can actually reach the software. Complexity. What should remain human. A recommended first deployment, usually one or two paths, not forty. If we think we can materially help, we will also show you what a build would look like.",
		"You can walk away with the map and never hire us. That is still useful. If we tell you the stack is too early, or the leftover work is not there, that is the audit doing its job."
	]
};
function articleBySlug(slug) {
	const meta = BLOG_POSTS.find((p) => p.slug === slug);
	if (!meta) return null;
	return {
		...meta,
		paragraphs: ARTICLE_BODIES[slug] || [meta.excerpt]
	};
}
var $$splitComponentImporter$4 = () => import("./blog._slug-CPM08-KU.mjs");
var Route$4 = createFileRoute("/blog/$slug")({
	head: ({ params }) => {
		const post = articleBySlug(params.slug);
		return pageHead({
			title: post?.title || "Field note",
			description: post?.excerpt || "Notes from Cortex.",
			path: `/blog/${params.slug}`
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./case-studies.index-CSkU_AAD.mjs");
var Route$3 = createFileRoute("/case-studies/")({
	head: () => pageHead({
		title: "Case Study: Detail Driven Automotive AI Workforce",
		description: "Detail Driven Enterprises in Jackson Hole. Repair, collision, detailing, and glass. Agents on the leftover work. The build included a secure dashboard for operations, marketing, finance, and the shops.",
		path: "/case-studies"
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./case-studies._slug-Bx-1-_lh.mjs");
var Route$2 = createFileRoute("/case-studies/$slug")({
	head: ({ params }) => {
		const study = CASE_STUDIES.find((c) => c.slug === params.slug);
		return pageHead({
			title: study ? `${study.name}: Private AI Across Four Automotive Businesses` : "Case Study",
			description: study?.slug === "detail-driven" ? "Detail Driven in Jackson Hole. Four shop types, different platforms, one Cortex environment. Agents on leftover work. A secure dashboard included in the same build." : study?.result || "Cortex case study.",
			path: `/case-studies/${params.slug}`
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./industries.index-p7j8RBnm.mjs");
var Route$1 = createFileRoute("/industries/")({
	head: () => pageHead({
		title: "AI for Auto Repair, HVAC, Roofing & Home Services",
		description: "AI agents for service businesses. Automotive, HVAC, plumbing, electrical, roofing, pest, contracting, smart home, and windows. Built for the software and workflows your industry actually uses.",
		path: "/industries"
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./industries._slug-0O66BJmI.mjs");
var TITLES = {
	automotive: "AI for Auto Repair Shops | AI Agents for Tekmetric and Shop Operations",
	hvac: "AI Agents for HVAC Companies | ServiceTitan and Field Service AI",
	plumbing: "AI Agents for Plumbing Companies | Jobber, ServiceTitan, Field Service",
	electrical: "AI Agents for Electrical Contractors | Accubid, ServiceTitan, Field Service",
	roofing: "AI Agents for Roofing Companies | AccuLynx, JobNimbus, Leap",
	"home-services": "AI Agents for Home Service Companies | Field Service Operations",
	"pest-control": "AI Agents for Pest Control Companies | PestPac, FieldRoutes",
	contracting: "AI Agents for General Contractors | Buildertrend, Procore",
	"smart-home": "AI Agents for Smart Home Integrators | D-Tools, Jetbuilt",
	windows: "AI Agents for Window and Door Companies | JobNimbus, Hover"
};
var Route = createFileRoute("/industries/$slug")({
	head: ({ params }) => {
		const industry = industryByPath(params.slug);
		if (!industry) return pageHead({
			title: "Industry",
			description: "Cortex industries.",
			path: `/industries/${params.slug}`
		});
		return pageHead({
			title: TITLES[industry.slug] || `AI Agents for ${industry.name}`,
			description: industry.intro,
			path: industry.href
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$35.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$36
});
var AboutUsRoute = Route$34.update({
	id: "/about-us",
	path: "/about-us",
	getParentRoute: () => Route$36
});
var AiAgentsRoute = Route$33.update({
	id: "/ai-agents",
	path: "/ai-agents",
	getParentRoute: () => Route$36
});
var AiImplementationRoute = Route$32.update({
	id: "/ai-implementation",
	path: "/ai-implementation",
	getParentRoute: () => Route$36
});
var AiWorkshopsRoute = Route$31.update({
	id: "/ai-workshops",
	path: "/ai-workshops",
	getParentRoute: () => Route$36
});
var AuditRoute = Route$30.update({
	id: "/audit",
	path: "/audit",
	getParentRoute: () => Route$36
});
var BrandKitRoute = Route$29.update({
	id: "/brand-kit",
	path: "/brand-kit",
	getParentRoute: () => Route$36
});
var CaseStudiesRoute = Route$28.update({
	id: "/case-studies",
	path: "/case-studies",
	getParentRoute: () => Route$36
});
var ConfirmedRoute = Route$27.update({
	id: "/confirmed",
	path: "/confirmed",
	getParentRoute: () => Route$36
});
var ContactRoute = Route$26.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$36
});
var HowWeWorkRoute = Route$25.update({
	id: "/how-we-work",
	path: "/how-we-work",
	getParentRoute: () => Route$36
});
var IndustriesRoute = Route$24.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$36
});
var IndustryAutomotiveRoute = Route$23.update({
	id: "/industry-automotive",
	path: "/industry-automotive",
	getParentRoute: () => Route$36
});
var IndustryContractingRoute = Route$22.update({
	id: "/industry-contracting",
	path: "/industry-contracting",
	getParentRoute: () => Route$36
});
var IndustryElectricalRoute = Route$21.update({
	id: "/industry-electrical",
	path: "/industry-electrical",
	getParentRoute: () => Route$36
});
var IndustryHomeServicesRoute = Route$20.update({
	id: "/industry-home-services",
	path: "/industry-home-services",
	getParentRoute: () => Route$36
});
var IndustryHvacRoute = Route$19.update({
	id: "/industry-hvac",
	path: "/industry-hvac",
	getParentRoute: () => Route$36
});
var IndustryPestControlRoute = Route$18.update({
	id: "/industry-pest-control",
	path: "/industry-pest-control",
	getParentRoute: () => Route$36
});
var IndustryPlumbingRoute = Route$17.update({
	id: "/industry-plumbing",
	path: "/industry-plumbing",
	getParentRoute: () => Route$36
});
var IndustryRoofingRoute = Route$16.update({
	id: "/industry-roofing",
	path: "/industry-roofing",
	getParentRoute: () => Route$36
});
var IndustrySmartHomeRoute = Route$15.update({
	id: "/industry-smart-home",
	path: "/industry-smart-home",
	getParentRoute: () => Route$36
});
var IndustryWindowsRoute = Route$14.update({
	id: "/industry-windows",
	path: "/industry-windows",
	getParentRoute: () => Route$36
});
var IntegrationsRoute = Route$13.update({
	id: "/integrations",
	path: "/integrations",
	getParentRoute: () => Route$36
});
var ManagedAiRoute = Route$12.update({
	id: "/managed-ai",
	path: "/managed-ai",
	getParentRoute: () => Route$36
});
var PrivacyRoute = Route$11.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$36
});
var PrivateAiRoute = Route$10.update({
	id: "/private-ai",
	path: "/private-ai",
	getParentRoute: () => Route$36
});
var ResourcesRoute = Route$9.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$36
});
var ScheduleRoute = Route$8.update({
	id: "/schedule",
	path: "/schedule",
	getParentRoute: () => Route$36
});
var TermsRoute = Route$7.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$36
});
var ThanksRoute = Route$6.update({
	id: "/thanks",
	path: "/thanks",
	getParentRoute: () => Route$36
});
var TrustRoute = Route$5.update({
	id: "/trust",
	path: "/trust",
	getParentRoute: () => Route$36
});
var BlogSlugRoute = Route$4.update({
	id: "/blog/$slug",
	path: "/blog/$slug",
	getParentRoute: () => Route$36
});
var CaseStudiesIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => CaseStudiesRoute
});
var CaseStudiesSlugRoute = Route$2.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => CaseStudiesRoute
});
var IndustriesIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => IndustriesRoute
});
var IndustriesSlugRoute = Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => IndustriesRoute
});
var CaseStudiesRouteChildren = {
	CaseStudiesSlugRoute,
	CaseStudiesIndexRoute
};
var CaseStudiesRouteWithChildren = CaseStudiesRoute._addFileChildren(CaseStudiesRouteChildren);
var IndustriesRouteChildren = {
	IndustriesSlugRoute,
	IndustriesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutUsRoute,
	AiAgentsRoute,
	AiImplementationRoute,
	AiWorkshopsRoute,
	AuditRoute,
	BrandKitRoute,
	CaseStudiesRoute: CaseStudiesRouteWithChildren,
	ConfirmedRoute,
	ContactRoute,
	HowWeWorkRoute,
	IndustriesRoute: IndustriesRoute._addFileChildren(IndustriesRouteChildren),
	IndustryAutomotiveRoute,
	IndustryContractingRoute,
	IndustryElectricalRoute,
	IndustryHomeServicesRoute,
	IndustryHvacRoute,
	IndustryPestControlRoute,
	IndustryPlumbingRoute,
	IndustryRoofingRoute,
	IndustrySmartHomeRoute,
	IndustryWindowsRoute,
	IntegrationsRoute,
	ManagedAiRoute,
	PrivacyRoute,
	PrivateAiRoute,
	ResourcesRoute,
	ScheduleRoute,
	TermsRoute,
	ThanksRoute,
	TrustRoute,
	BlogSlugRoute
};
var routeTree = Route$36._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { articleBySlug as a, AuditButton as c, BeamButton as d, GhostButton as f, Route$4 as i, WORKSHOP_AUDIENCES as l, BRAND as m, Route as n, RevealSection as o, cn as p, Route$2 as r, FounderPhoto as s, router_exports as t, submitWorkshop as u };
