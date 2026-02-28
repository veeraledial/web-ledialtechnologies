import type { Product, ProductCategory } from "@/types/product";
import { PRODUCT_CATEGORIES } from "@/types/product";

export const ALL_PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "indoor-led-displays-service",
    category: "indoor-led-displays",
    name: "Indoor LED Displays Service",
    tagline: "Fine‑pitch indoor displays with complete installation & support",
    overview:
      "End‑to‑end indoor LED display service for showrooms, retail, offices, and control rooms—covering design, supply, installation, commissioning, and after‑sales support. Built for high clarity, color accuracy, and reliable 24/7 operation.",
    features: [
      "Fine‑pitch options for close‑viewing environments",
      "Seamless video wall installation & alignment",
      "High refresh rates for smooth camera‑friendly visuals",
      "Front‑serviceable designs for easy maintenance",
      "Content playback & controller configuration support",
      "Annual maintenance & onsite support available",
    ],
    specifications: [
      { label: "Pixel Pitch Range", value: "P1.8 – P3.9 (typical)" },
      { label: "Brightness", value: "600 – 1,200 nits (typical)" },
      { label: "Refresh Rate", value: "≥ 3,840Hz (recommended)" },
      { label: "Service Type", value: "Supply + Installation + Support" },
      { label: "Mounting", value: "Wall / Structure / Custom frames" },
      { label: "Warranty & AMC", value: "As per project scope" },
    ],
    applications: ["Retail", "Corporate Offices", "Showrooms", "Control Rooms", "Hospitality"],
    images: ["/images/hero/Led_display.png"],
    metaTitle: "Indoor LED Displays Service | Ledial Technologies",
    metaDescription: "Indoor LED display supply, installation, commissioning, and support for retail, corporate, and control room environments.",
    featured: true,
  },
  {
    id: "2",
    slug: "outdoor-led-display-service",
    category: "outdoor-led-displays",
    name: "Outdoor LED Display Service",
    tagline: "High‑brightness, weatherproof outdoor screens for 24/7 visibility",
    overview:
      "Outdoor LED display service for signboards, storefront facades, and large-format advertising—engineered for daylight visibility and harsh weather. Includes site survey, structure planning, installation, commissioning, and maintenance support.",
    features: [
      "High brightness for clear daylight readability",
      "Weatherproof build with protected cabling & power",
      "Anti‑glare options and wide viewing angles",
      "Auto brightness scheduling & sensor support",
      "Content management / player integration support",
      "Preventive maintenance & troubleshooting",
    ],
    specifications: [
      { label: "Pixel Pitch Range", value: "P4 – P10 (typical)" },
      { label: "Brightness", value: "4,000 – 7,000 nits (typical)" },
      { label: "Ingress Protection", value: "IP65 (recommended)" },
      { label: "Operating Conditions", value: "Outdoor, all‑weather" },
      { label: "Service Type", value: "Supply + Installation + Support" },
    ],
    applications: ["Outdoor Advertising", "Retail Facades", "Malls", "Stadiums", "Transportation Hubs"],
    images: ["/images/hero/led_outdoor_screen.png"],
    metaTitle: "Outdoor LED Display Service | Ledial Technologies",
    metaDescription: "Outdoor LED display supply, installation, and maintenance with high brightness and weatherproof design.",
    featured: true,
  },
  {
    id: "3",
    slug: "standee-a-type-display-service",
    category: "standee-a-type-displays",
    name: "Standee A‑Type Display Service",
    tagline: "Premium A‑type digital standees for high‑impact promotions",
    overview:
      "Digital standee A‑type display service designed for malls, showrooms, retail stores, and corporate spaces. We provide supply, setup, content configuration guidance, and ongoing service support—so your promotions look sharp and run reliably.",
    features: [
      "Sleek A‑type form factor for premium presence",
      "High‑resolution display for crisp text & visuals",
      "Plug‑and‑play setup with content guidance",
      "Stable operation for long hours",
      "Onsite installation & basic training",
      "Service support and maintenance options",
    ],
    specifications: [
      { label: "Use Case", value: "Retail / Mall / Showroom promotions" },
      { label: "Display Type", value: "Digital standee (A‑type)" },
      { label: "Installation", value: "Onsite setup available" },
      { label: "Content", value: "USB / Player / CMS (as per model)" },
    ],
    applications: ["Malls", "Retail Stores", "Showrooms", "Corporate Lobbies", "Events"],
    images: ["/images/hero/standee_a_display.png"],
    metaTitle: "Standee A‑Type Display Service | Ledial Technologies",
    metaDescription: "A‑type digital standee supply, setup, and service support for retail and corporate promotions.",
    featured: true,
  },
  {
    id: "4",
    slug: "standee-i-type-display-service",
    category: "standee-i-type-displays",
    name: "Standee I‑Type Display Service",
    tagline: "Slim I‑type digital standees for focused messaging",
    overview:
      "I‑type digital standee service for indoor promotions and brand communication. Ideal for entrances, product aisles, reception areas, and event zones—installed and supported by our team for dependable everyday use.",
    features: [
      "Space‑saving I‑type footprint",
      "High clarity for product messaging & offers",
      "Quick deployment with content setup guidance",
      "Durable build for continuous operation",
      "Onsite installation and support",
    ],
    specifications: [
      { label: "Use Case", value: "Indoor promotions & messaging" },
      { label: "Display Type", value: "Digital standee (I‑type)" },
      { label: "Installation", value: "Onsite setup available" },
      { label: "Content", value: "USB / Player / CMS (as per model)" },
    ],
    applications: ["Retail Stores", "Showrooms", "Corporate Offices", "Hospitals", "Events"],
    images: ["/images/hero/standee_display.png"],
    metaTitle: "Standee I‑Type Display Service | Ledial Technologies",
    metaDescription: "I‑type digital standee supply, setup, and maintenance support for indoor promotions and communication.",
    featured: true,
  },
  {
    id: "5",
    slug: "cctv-camera-security-services",
    category: "cctv-camera-security",
    name: "CCTV Camera Security Services",
    tagline: "Complete CCTV supply, installation, and support for safer premises",
    overview:
      "CCTV camera security services for offices, warehouses, retail spaces, and residential sites. We provide camera selection, layout planning, installation, recording setup (DVR/NVR), and ongoing maintenance—so you get reliable surveillance and peace of mind.",
    features: [
      "Site survey and camera placement planning",
      "HD/Full‑HD/4K camera options (as per requirement)",
      "DVR/NVR installation & configuration",
      "Remote viewing setup support",
      "Professional cabling and clean finishing",
      "Maintenance & troubleshooting support",
    ],
    specifications: [
      { label: "Camera Types", value: "Dome / Bullet / PTZ (as per site)" },
      { label: "Recording", value: "DVR / NVR with storage options" },
      { label: "Remote Access", value: "Mobile / Web viewing support" },
      { label: "Service Type", value: "Supply + Installation + Support" },
    ],
    applications: ["Corporate Offices", "Warehouses", "Retail Stores", "Malls", "Residential"],
    images: ["/images/hero/cc_camera.png"],
    metaTitle: "CCTV Camera Security Services | Ledial Technologies",
    metaDescription: "End‑to‑end CCTV camera security services: survey, supply, installation, recording setup, and maintenance support.",
    featured: true,
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
