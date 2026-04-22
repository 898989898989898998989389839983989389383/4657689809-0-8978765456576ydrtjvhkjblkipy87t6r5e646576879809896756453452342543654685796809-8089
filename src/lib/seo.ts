type SeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
};

const defaultKeywords = [
  "electrical shop Kathmandu",
  "electrical products Nepal",
  "electrical services Kathmandu",
  "wholesale electrical supplies",
  "Shuva Electric And Electronic",
  "Old Baneshwor electrical store",
];

export const siteName = "Shuva Electric And Electronic";
export const siteTitle = "Shuva Electric And Electronic | Electrical Products & Services in Kathmandu";
export const siteDescription =
  "Trusted electrical products, showroom guidance, wholesale supply, and electrical services in Old Baneshwor, Kathmandu.";
export const siteLocale = "en_NP";
export const defaultOgImage = "/logo.png";

export const businessInfo = {
  name: siteName,
  description: siteDescription,
  phone: ["+977-9843766006", "+977-9806814962"],
  email: "shuvaelectric12@gmail.com",
  addressLocality: "Kathmandu",
  streetAddress: "Old Baneshwor",
  addressCountry: "NP",
  openingHours: ["Su-Fr 09:00-19:00", "Sa 10:00-17:00"],
  priceRange: "$$",
};

export function buildSeoMeta(input: SeoInput) {
  const keywords = [...defaultKeywords, ...(input.keywords ?? [])];

  return {
    meta: [
      { title: input.title },
      { name: "description", content: input.description },
      { name: "keywords", content: keywords.join(", ") },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:site_name", content: siteName },
      { property: "og:locale", content: siteLocale },
      { property: "og:title", content: input.title },
      { property: "og:description", content: input.description },
      { property: "og:type", content: input.type ?? "website" },
      { property: "og:url", content: input.path },
      { property: "og:image", content: defaultOgImage },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: input.title },
      { name: "twitter:description", content: input.description },
      { name: "twitter:image", content: defaultOgImage },
    ],
    links: [{ rel: "canonical", href: input.path }],
  };
}

export function buildLocalBusinessJsonLd(pathname: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${pathname}#localbusiness`,
        name: businessInfo.name,
        description: businessInfo.description,
        image: defaultOgImage,
        telephone: businessInfo.phone,
        email: businessInfo.email,
        priceRange: businessInfo.priceRange,
        address: {
          "@type": "PostalAddress",
          streetAddress: businessInfo.streetAddress,
          addressLocality: businessInfo.addressLocality,
          addressCountry: businessInfo.addressCountry,
        },
        openingHours: businessInfo.openingHours,
        areaServed: ["Kathmandu", "Lalitpur", "Bhaktapur"],
      },
      {
        "@type": "WebSite",
        "@id": `${pathname}#website`,
        name: businessInfo.name,
        url: pathname,
      },
    ],
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; item: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function buildFaqJsonLd(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
