import { BRAND } from "@/data/brand";

export function pageHead({
  title,
  description,
  path,
  ogTitle,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  noindex?: boolean;
}) {
  const url = path.startsWith("http") ? path : `${BRAND.url}${path}`;
  const fullTitle = title.includes(BRAND.name) ? title : `${title} | ${BRAND.name}`;
  const socialTitle = ogTitle || fullTitle;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      ...(noindex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
      { property: "og:title", content: socialTitle },
      { property: "og:description", content: description },
      { property: "og:image", content: BRAND.ogImage },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: BRAND.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: socialTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: BRAND.ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function orgJsonLd() {
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
    founder: { "@type": "Person", name: BRAND.founder },
    address: {
      "@type": "PostalAddress",
      addressRegion: "OH",
      addressCountry: "US",
    },
  };
}
