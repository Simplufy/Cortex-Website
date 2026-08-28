import { createFileRoute, notFound } from "@tanstack/react-router";
import { IndustryPage } from "@/components/pages/inner";
import { industryByPath } from "@/data/site";
import { pageHead } from "@/lib/seo";

const TITLES: Record<string, string> = {
  automotive: "AI for Auto Repair Shops | AI Agents for Tekmetric and Shop Operations",
  hvac: "AI Agents for HVAC Companies | ServiceTitan and Field Service AI",
  plumbing: "AI Agents for Plumbing Companies | Jobber, ServiceTitan, Field Service",
  electrical: "AI Agents for Electrical Contractors | Accubid, ServiceTitan, Field Service",
  roofing: "AI Agents for Roofing Companies | AccuLynx, JobNimbus, Leap",
  "home-services": "AI Agents for Home Service Companies | Field Service Operations",
  "pest-control": "AI Agents for Pest Control Companies | PestPac, FieldRoutes",
  contracting: "AI Agents for General Contractors | Buildertrend, Procore",
  "smart-home": "AI Agents for Smart Home Integrators | D-Tools, Jetbuilt",
  windows: "AI Agents for Window and Door Companies | JobNimbus, Hover",
};

export const Route = createFileRoute("/industries/$slug")({
  head: ({ params }) => {
    const industry = industryByPath(params.slug);
    if (!industry) return pageHead({ title: "Industry", description: "Cortex industries.", path: `/industries/${params.slug}` });
    return pageHead({
      title: TITLES[industry.slug] || `AI Agents for ${industry.name}`,
      description: industry.intro,
      path: industry.href,
    });
  },
  component: Page,
});

function Page() {
  const { slug } = Route.useParams();
  const industry = industryByPath(slug);
  if (!industry) throw notFound();
  return <IndustryPage industry={industry} />;
}
