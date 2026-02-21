import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/utils/seo";
import { PRODUCT_CATEGORIES } from "@/types/product";
import { SOLUTION_INDUSTRIES } from "@/types/solution";
import { ALL_PROJECTS } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/solutions`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/support`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/distributors`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  const aboutPages = [
    "company-overview",
    "vision-mission",
    "facilities",
    "leadership",
    "global-presence",
    "certifications",
    "careers",
  ].map((slug) => ({
    url: `${baseUrl}/about/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productPages = PRODUCT_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/products/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const solutionPages = SOLUTION_INDUSTRIES.map((ind) => ({
    url: `${baseUrl}/solutions/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const projectPages = ALL_PROJECTS.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...aboutPages,
    ...productPages,
    ...solutionPages,
    ...projectPages,
  ];
}
