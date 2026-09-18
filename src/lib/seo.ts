import { BRAND } from "@/data/brand";

export function pageHead({
  title,
  description,
  path,
  ogTitle,
  noindex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
}: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
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
      { property: "og:type", content: type },
      { property: "og:site_name", content: BRAND.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: socialTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: BRAND.ogImage },
      ...(publishedTime ? [{ property: "article:published_time", content: publishedTime }] : []),
      ...(modifiedTime ? [{ property: "article:modified_time", content: modifiedTime }] : []),
      ...(author ? [{ property: "article:author", content: author }] : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function jsonLdScript(data: unknown) {
  return { type: "application/ld+json" as const, children: JSON.stringify(data) };
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

export function articleJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  date: string;
  modified?: string;
  author: string;
  section?: string;
  wordCount?: number;
}) {
  const url = `${BRAND.url}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    dateModified: opts.modified || opts.date,
    inLanguage: "en-US",
    ...(opts.section ? { articleSection: opts.section } : {}),
    ...(opts.wordCount ? { wordCount: String(opts.wordCount) } : {}),
    author: { "@type": "Person", name: opts.author === "McGuire" ? BRAND.founder : opts.author },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: { "@type": "ImageObject", url: `${BRAND.url}/favicon.png` },
    },
    image: BRAND.ogImage,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${BRAND.url}${it.path}`,
    })),
  };
}

export function collectionJsonLd(posts: { title: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Field notes on AI for auto shops and service businesses",
    description:
      "Notes from Cortex deployments: how work moves inside auto repair, collision, HVAC, and other service businesses, and what custom AI agents can watch without replacing the software already in the building.",
    url: `${BRAND.url}/resources`,
    isPartOf: { "@type": "WebSite", name: BRAND.name, url: BRAND.url },
    hasPart: posts.map((p) => ({
      "@type": "Article",
      headline: p.title,
      url: `${BRAND.url}${p.path}`,
    })),
  };
}
