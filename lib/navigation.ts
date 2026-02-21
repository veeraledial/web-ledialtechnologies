import "server-only";

import type { ProductCategory } from "@/types/product";
import type { SolutionIndustry } from "@/types/solution";
import type { NavItem } from "@/types/nav";
import { getServiceCategoryLinks } from "@/lib/data/services";

export function getMainNav(): NavItem[] {
  const productLinks = getServiceCategoryLinks();

  return [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Products",
      href: "/products",
      children: productLinks,
    },
    {
      label: "Solutions",
      href: "/solutions",
      children: [
        { label: "Retail", href: "/solutions/retail" },
        { label: "Control Rooms", href: "/solutions/control-rooms" },
        { label: "Broadcast Studios", href: "/solutions/broadcast-studios" },
        { label: "Airports & Transportation", href: "/solutions/airports-transportation" },
        { label: "Corporate", href: "/solutions/corporate" },
        { label: "Events & Entertainment", href: "/solutions/events-entertainment" },
        { label: "Education", href: "/solutions/education" },
        { label: "Healthcare", href: "/solutions/healthcare" },
      ],
    },
    { label: "Projects", href: "/projects" },
    {
      label: "Contact",
      href: "/contact",
      children: [
        { label: "Contact Us", href: "/contact" },
        { label: "Technical Support", href: "/support" },
        { label: "Become a Distributor", href: "/distributors" },
      ],
    },
  ];
}

export const LEGAL_LINKS: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

export function getFooterLinks() {
  const nav = getMainNav();
  return {
    products: nav.find((n) => n.href === "/products")?.children ?? [],
    solutions: nav.find((n) => n.href === "/solutions")?.children ?? [],
    about: nav.find((n) => n.href === "/about")?.children ?? [],
    legal: LEGAL_LINKS,
  };
}

export function getProductCategoryPath(category: ProductCategory): string {
  return `/products/${category}`;
}

export function getSolutionPath(industry: SolutionIndustry): string {
  return `/solutions/${industry}`;
}
