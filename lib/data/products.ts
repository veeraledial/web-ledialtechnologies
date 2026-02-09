import type { Product, ProductCategory } from "@/types/product";
import { PRODUCT_CATEGORIES } from "@/types/product";

export const ALL_PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "indoor-p2",
    category: "indoor-led-displays",
    name: "Indoor P2 Fine Pitch",
    tagline: "Crystal-clear imagery for indoor environments",
    overview:
      "Our finest indoor LED display with 2mm pixel pitch, delivering stunning clarity for corporate lobbies, retail, and control rooms. Engineered for 24/7 operation with minimal maintenance.",
    features: [
      "2mm pixel pitch for ultra-sharp imagery",
      "800 nits brightness",
      "160° viewing angle",
      "Seamless cabinet design",
      "Low power consumption",
      "Front serviceable",
    ],
    specifications: [
      { label: "Pixel Pitch", value: "2.0mm" },
      { label: "Brightness", value: "800 nits" },
      { label: "Viewing Angle", value: "160° H / 160° V" },
      { label: "Cabinet Size", value: "500×500mm" },
      { label: "Refresh Rate", value: "3840Hz" },
      { label: "Gray Scale", value: "16bit" },
    ],
    applications: ["Corporate", "Retail", "Control Rooms", "Broadcast"],
    images: ["/images/products/indoor-p2.jpg"],
    brochureUrl: "/documents/brochures/indoor-p2.pdf",
    metaTitle: "Indoor P2 Fine Pitch LED Display | LaDial Technologies",
    metaDescription: "Premium indoor LED display with 2mm pixel pitch.",
    featured: true,
  },
  {
    id: "2",
    slug: "indoor-p2-5",
    category: "indoor-led-displays",
    name: "Indoor P2.5",
    tagline: "Balance of clarity and cost-effectiveness",
    overview: "The P2.5 offers excellent image quality at a competitive price point. Ideal for medium-viewing-distance applications in retail and corporate settings.",
    features: ["2.5mm pixel pitch", "700 nits brightness", "Seamless design", "Easy installation"],
    specifications: [
      { label: "Pixel Pitch", value: "2.5mm" },
      { label: "Brightness", value: "700 nits" },
      { label: "Cabinet Size", value: "500×500mm" },
    ],
    applications: ["Retail", "Corporate", "Lobbies"],
    images: ["/images/products/indoor-p2-5.jpg"],
    metaTitle: "Indoor P2.5 LED Display | LaDial Technologies",
    metaDescription: "Cost-effective indoor LED display with 2.5mm pixel pitch.",
  },
  {
    id: "3",
    slug: "outdoor-p4",
    category: "outdoor-led-displays",
    name: "Outdoor P4 Weatherproof",
    tagline: "Built for harsh outdoor conditions",
    overview:
      "Rugged outdoor LED display with IP65 rating, 4000 nits brightness, and full weather protection for billboards and signage. Certified for extreme temperatures and humidity.",
    features: [
      "IP65 weatherproof",
      "4000 nits brightness",
      "P4 pixel pitch",
      "10-year warranty",
      "Anti-glare coating",
      "Automatic brightness adjustment",
    ],
    specifications: [
      { label: "Pixel Pitch", value: "4.0mm" },
      { label: "Brightness", value: "4000 nits" },
      { label: "IP Rating", value: "IP65" },
      { label: "Operating Temp", value: "-30°C to 50°C" },
      { label: "Cabinet Size", value: "500×1000mm" },
    ],
    applications: ["Billboards", "Stadiums", "Transportation", "Retail Facades"],
    images: ["/images/products/outdoor-p4.jpg"],
    brochureUrl: "/documents/brochures/outdoor-p4.pdf",
    metaTitle: "Outdoor P4 LED Display | LaDial Technologies",
    metaDescription: "Weatherproof outdoor LED display for demanding environments.",
    featured: true,
  },
  {
    id: "4",
    slug: "rental-cabinet",
    category: "rental-led-displays",
    name: "Rental LED Cabinet",
    tagline: "Fast setup for events and staging",
    overview:
      "Lightweight, modular rental LED with quick lock system. Perfect for concerts, conferences, and live events. Set up in minutes, not hours.",
    features: [
      "Quick lock system",
      "14kg per cabinet",
      "P3.9 pixel pitch",
      "Curved options",
      "Tool-free assembly",
      "Flight case compatible",
    ],
    specifications: [
      { label: "Pixel Pitch", value: "3.9mm" },
      { label: "Weight", value: "14kg/cabinet" },
      { label: "Cabinet Size", value: "500×500mm" },
      { label: "Setup Time", value: "< 5 min/㎡" },
    ],
    applications: ["Events", "Concerts", "Conferences", "Exhibitions"],
    images: ["/images/products/rental.jpg"],
    metaTitle: "Rental LED Display | LaDial Technologies",
    metaDescription: "Modular rental LED for events and staging.",
    featured: true,
  },
  {
    id: "5",
    slug: "transparent-glass",
    category: "transparent-led",
    name: "Transparent Glass LED",
    tagline: "See-through display for retail and façades",
    overview:
      "Transparent LED technology that preserves visibility while delivering dynamic content. Ideal for storefronts and architectural integration.",
    features: [
      "70% transparency",
      "Slim profile",
      "Indoor/outdoor options",
      "Custom sizes",
      "Easy maintenance",
    ],
    specifications: [
      { label: "Transparency", value: "70%" },
      { label: "Pixel Pitch", value: "6mm / 8mm" },
      { label: "Brightness", value: "5000 nits (outdoor)" },
    ],
    applications: ["Retail", "Luxury Brands", "Architecture", "Museums"],
    images: ["/images/products/transparent.jpg"],
    metaTitle: "Transparent LED Display | LaDial Technologies",
    metaDescription: "See-through LED for retail and architecture.",
    featured: true,
  },
  {
    id: "6",
    slug: "all-in-one-p3",
    category: "all-in-one-led-displays",
    name: "All-in-One P3 Display",
    tagline: "Plug-and-play LED solution",
    overview:
      "Complete LED display system with integrated controller, power supply, and media player. Ideal for meeting rooms, lobbies, and quick-deploy installations.",
    features: [
      "Integrated system",
      "Single cable connection",
      "Built-in media player",
      "3.9mm pixel pitch",
      "Wall-mount or stand",
    ],
    specifications: [
      { label: "Pixel Pitch", value: "3.9mm" },
      { label: "Sizes", value: "55\" - 165\" diagonal" },
      { label: "Input", value: "HDMI, USB, LAN" },
    ],
    applications: ["Meeting Rooms", "Lobbies", "Showrooms", "Education"],
    images: ["/images/products/all-in-one.jpg"],
    metaTitle: "All-in-One LED Display | LaDial Technologies",
    metaDescription: "Plug-and-play LED display solution.",
  },
  {
    id: "7",
    slug: "led-controller-pro",
    category: "led-controllers",
    name: "LED Controller Pro",
    tagline: "Professional control for complex installations",
    overview:
      "High-performance LED controller supporting 4K input, multi-screen sync, and flexible content management. Perfect for video walls and large installations.",
    features: [
      "4K@60Hz input",
      "Multi-screen synchronization",
      "LED Studio compatible",
      "Redundant backup",
      "Remote management",
    ],
    specifications: [
      { label: "Input", value: "HDMI 2.0, DP 1.4" },
      { label: "Output", value: "DVI / HDMI" },
      { label: "Max Resolution", value: "4K@60Hz" },
    ],
    applications: ["Video Walls", "Control Rooms", "Broadcast", "Digital Signage"],
    images: ["/images/products/controller.jpg"],
    metaTitle: "LED Controller | LaDial Technologies",
    metaDescription: "Professional LED display controller.",
  },
];

export const FEATURED_PRODUCTS = ALL_PRODUCTS.filter((p) => p.featured);

export function getProductsByCategory(category: ProductCategory): Product[] {
  return ALL_PRODUCTS.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string, category: ProductCategory): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug && p.category === category);
}

export function getCategoryBySlug(category: ProductCategory) {
  return PRODUCT_CATEGORIES.find((c) => c.slug === category);
}
