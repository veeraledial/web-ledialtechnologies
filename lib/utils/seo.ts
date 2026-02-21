const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ladialtechnologies.com";

export function getBaseUrl() {
  return BASE_URL;
}

export function getAbsoluteUrl(path: string) {
  return `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LaDial Technologies",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo/logo.png`,
  description:
    "Leading manufacturer of professional LED displays for retail, broadcast, control rooms, and more.",
  foundingDate: "2012",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@ladial.com",
    contactType: "customer service",
    url: `${BASE_URL}/contact`,
  },
  sameAs: [],
};

export function getProductJsonLd(product: {
  name: string;
  description: string;
  category: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    url: product.url,
    brand: {
      "@type": "Brand",
      name: "LaDial Technologies",
    },
  };
}

export function getArticleJsonLd(article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    datePublished: article.datePublished,
    url: article.url,
    publisher: {
      "@type": "Organization",
      name: "LaDial Technologies",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo/logo.png`,
      },
    },
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/contact`,
    name: "LaDial Technologies",
    url: BASE_URL,
    description: "Professional LED display manufacturer and solutions provider.",
    email: "info@ladial.com",
    contactPoint: {
      "@type": "ContactPoint",
      email: "sales@ladial.com",
      contactType: "sales",
      url: `${BASE_URL}/contact`,
    },
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
