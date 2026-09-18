const LANDER_SLUGS = new Set([
  "automotive",
  "hvac",
  "plumbing",
  "electrical",
  "roofing",
  "home-services",
  "pest-control",
  "contracting",
  "smart-home",
  "windows",
]);

const ALIASES: Record<string, string> = {
  "automotive-service": "automotive",
};

export function auditPath(industry?: string | null) {
  const raw = (industry || "").toLowerCase();
  if (!raw || raw === "general" || raw === "other") return "/audit";
  const slug = ALIASES[raw] ?? raw;
  if (!LANDER_SLUGS.has(slug)) return "/audit";
  return `/audit/${slug}`;
}
