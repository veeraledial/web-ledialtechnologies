export type ProductCategory =
  | "indoor-led-displays"
  | "outdoor-led-displays"
  | "rental-led-displays"
  | "transparent-led"
  | "all-in-one-led-displays"
  | "led-controllers";

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  category: ProductCategory;
  name: string;
  tagline: string;
  overview: string;
  features: string[];
  specifications: ProductSpecification[];
  applications: string[];
  images: string[];
  videoUrl?: string;
  brochureUrl?: string;
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;
  featured?: boolean;
}

export const PRODUCT_CATEGORIES: { slug: ProductCategory; label: string }[] = [
  { slug: "indoor-led-displays", label: "Indoor LED Displays" },
  { slug: "outdoor-led-displays", label: "Outdoor LED Displays" },
  { slug: "rental-led-displays", label: "Rental LED Displays" },
  { slug: "transparent-led", label: "Transparent LED" },
  { slug: "all-in-one-led-displays", label: "All-in-One LED Displays" },
  { slug: "led-controllers", label: "LED Controllers" },
];
