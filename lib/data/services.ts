import "server-only";

import type { ServiceCategory, ServicesData } from "@/types/service";
import servicesJson from "./services.json";

const DATA = servicesJson as ServicesData;

export function getServiceCategories(): ServiceCategory[] {
  return DATA.services.categories ?? [];
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

