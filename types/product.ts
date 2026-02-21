export type ProductCategory =
  | "indoor-led-displays"
  | "outdoor-led-displays"
  | "standee-a-type-displays"
  | "standee-i-type-displays"
  | "cctv-camera-security";

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
  { slug: "indoor-led-displays", label: "Indoor LED Displays Service" },
  { slug: "outdoor-led-displays", label: "Outdoor LED Display Service" },
  { slug: "standee-a-type-displays", label: "Standee A-Type Display Service" },
  { slug: "standee-i-type-displays", label: "Standee I-Type Display Service" },
  { slug: "cctv-camera-security", label: "CCTV Camera Security Services" },
];
