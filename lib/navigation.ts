import type { ProductCategory } from "@/types/product";
import type { SolutionIndustry } from "@/types/solution";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Company Overview", href: "/about/company-overview" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Manufacturing Facilities", href: "/about/facilities" },
      { label: "Leadership Team", href: "/about/leadership" },
      { label: "Global Presence", href: "/about/global-presence" },
      { label: "Certifications", href: "/about/certifications" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Indoor LED Displays", href: "/products/indoor-led-displays" },
      { label: "Outdoor LED Displays", href: "/products/outdoor-led-displays" },
      { label: "Rental LED Displays", href: "/products/rental-led-displays" },
      { label: "Transparent LED", href: "/products/transparent-led" },
      { label: "All-in-One LED Displays", href: "/products/all-in-one-led-displays" },
      { label: "LED Controllers", href: "/products/led-controllers" },
    ],
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
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blog",
    href: "/blog",
  },
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

export const FOOTER_LINKS = {
  products: MAIN_NAV.find((n) => n.href === "/products")?.children ?? [],
  solutions: MAIN_NAV.find((n) => n.href === "/solutions")?.children ?? [],
  about: MAIN_NAV.find((n) => n.href === "/about")?.children ?? [],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

export function getProductCategoryPath(category: ProductCategory): string {
  return `/products/${category}`;
}

export function getSolutionPath(industry: SolutionIndustry): string {
  return `/solutions/${industry}`;
}
