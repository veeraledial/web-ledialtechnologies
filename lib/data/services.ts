import "server-only";

import type { ServiceCategory, ServicesData } from "@/types/service";
import servicesJson from "./services.json";

const DATA = servicesJson as ServicesData;

// Hide selected service categories from the site (kept in data for future use).
const HIDDEN_CATEGORY_SLUGS = new Set<string>([
  "hanging-standees-services",
  "touch-screen-standees-interactive-services",
]);

function isHiddenCategory(category: ServiceCategory) {
  return HIDDEN_CATEGORY_SLUGS.has(category.slug);
}

export function getServiceCategories(): ServiceCategory[] {
  return (DATA.services.categories ?? []).filter((c) => !isHiddenCategory(c));
}

export function getServiceCategoryBySlug(slug: string): ServiceCategory | undefined {
  return getServiceCategories().find((c) => c.slug === slug);
}

export function getServiceCategoryLinks(): Array<{ label: string; href: string }> {
  return getServiceCategories().map((c) => ({
    label: c.name,
    href: `/products/${c.slug}`,
  }));
}

