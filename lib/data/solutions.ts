import type { Solution, SolutionIndustry } from "@/types/solution";
import { SOLUTION_INDUSTRIES } from "@/types/solution";

/**
 * Image naming (public folder):
 * - /public/images/solutions/retail.jpg
 * - /public/images/solutions/control-rooms.jpg
 * - /public/images/solutions/automotive.jpg
 * - /public/images/solutions/transportation.jpg
 * - /public/images/solutions/corporate.jpg
 * - /public/images/solutions/events-entertainment.jpg
 * - /public/images/solutions/education.jpg
 * - /public/images/solutions/healthcare.jpg
 * Optional:
 * - /public/images/solutions/broadcast-studios.jpg
 */
export const SOLUTIONS: Solution[] = [
  {
    id: "1",
    slug: "retail",
    industry: "Retail",
    title: "Retail LED & CCTV Solutions",
    problem:
      "Retail spaces need to attract customers with high-impact visuals while also protecting staff, inventory, and entrances with reliable surveillance.",
    solution:
      "We design and install LED displays for storefronts and in-store zones, plus CCTV camera systems for entry points, billing counters, and stock areas. From sizing and mounting to recording setup and remote viewing, we deliver a complete retail deployment with installation and support.",
    keyBenefits: [
      "High-impact visuals for promotions and product storytelling",
      "Fine‑pitch options for close viewing distances",
      "Easy updates for campaigns, pricing, and offers",
      "24/7 CCTV monitoring for theft prevention and safety",
    ],
    useCases: ["Storefront video walls", "In‑store product zones", "Offer/menu boards", "Billing-counter CCTV", "Entry & stock-area surveillance"],
    caseStudyIds: ["1"],
    images: ["/images/solutions/retail.png"],
    metaTitle: "Retail LED Display Solutions | Ledial Technologies",
    metaDescription: "LED displays and CCTV surveillance for retail stores, malls, and brand experiences.",
  },
  {
    id: "2",
    slug: "control-rooms",
    industry: "Control Rooms",
    title: "Control Room LED & CCTV Solutions",
    problem:
      "Control rooms operate 24/7 and must view critical dashboards and CCTV feeds clearly—without downtime, color drift, or visibility issues.",
    solution:
      "We deploy fine‑pitch LED video walls that unify dashboards and live surveillance views. With stable calibration, multi-source layouts, and reliable CCTV camera integrations (NVR/VMS), teams get a single command display backed by commissioning and support.",
    keyBenefits: [
      "Designed for 24/7 operations and consistent performance",
      "Seamless walls for dashboards and CCTV multi‑view layouts",
      "Rapid switching and multi‑source input support",
      "Professional calibration + reliable CCTV/VMS integration",
    ],
    useCases: ["Security operation centers", "Network operation centers", "Traffic management", "Utilities & energy monitoring", "Command & control rooms"],
    caseStudyIds: ["2"],
    images: ["/images/solutions/control-rooms.png"],
    metaTitle: "Control Room LED Video Walls | Ledial Technologies",
    metaDescription: "LED video walls and CCTV integrations for control rooms and command centers.",
  },
  {
    id: "3",
    slug: "broadcast-studios",
    industry: "Broadcast",
    title: "Broadcast Studio LED & CCTV Solutions",
    problem:
      "Broadcast studios need studio-quality LED backdrops that look perfect on camera—plus reliable CCTV coverage for studios, entry points, and equipment areas.",
    solution:
      "We deliver broadcast-grade LED displays with camera-friendly refresh rates and accurate calibration, and we deploy CCTV surveillance systems to help secure studio floors, green rooms, corridors, and assets—installed and supported end-to-end.",
    keyBenefits: [
      "Camera‑friendly refresh and flicker‑free output",
      "Accurate color calibration for production workflows",
      "Seamless panels for virtual sets and backdrops",
      "CCTV coverage for studio security and asset protection",
    ],
    useCases: ["Virtual production stages", "Studio backdrops", "News sets", "Streaming studios", "Studio perimeter CCTV"],
    caseStudyIds: ["2"],
    images: ["/images/solutions/broadcast-studios.jpg"],
    metaTitle: "Broadcast Studio LED Displays | Ledial Technologies",
    metaDescription: "Broadcast-grade LED displays and CCTV surveillance for studios and production spaces.",
  },
  {
    id: "3a",
    slug: "automotive",
    industry: "Automotive",
    title: "Automotive LED & CCTV Solutions",
    problem:
      "Automotive spaces need premium visuals for vehicles and offers, plus reliable CCTV coverage for showrooms, service bays, and customer areas.",
    solution:
      "We deploy LED feature walls and signage for showrooms and launches, and CCTV camera systems for reception, showroom floors, workshops, and parking zones. We handle installation, recording setup, and ongoing support for consistent performance.",
    keyBenefits: [
      "Premium visuals for brand‑consistent vehicle presentation",
      "Clear visibility under bright showroom lighting",
      "Fast content updates for models, pricing, and promotions",
      "CCTV monitoring for customer safety and workshop security",
    ],
    useCases: ["Showroom feature walls", "Vehicle launch events", "Service reception counters", "Accessory/parts promotions", "Digital signage across branches"],
    caseStudyIds: [],
    images: ["/images/solutions/automotive.png"],
    metaTitle: "Automotive LED Display Solutions | Ledial Technologies",
    metaDescription: "LED displays and CCTV surveillance for car showrooms, launches, service centers, and automotive facilities.",
  },
  {
    id: "4",
    slug: "airports-transportation",
    industry: "Transportation",
    title: "Transportation LED & CCTV Solutions",
    problem:
      "Transportation hubs need bright, readable displays for real-time information—and dependable CCTV surveillance for crowd safety and incident monitoring.",
    solution:
      "We design LED information and advertising displays plus CCTV camera systems for entrances, platforms, halls, and corridors. With reliable hardware, proper mounting, recording configuration, and support, you get clear communication and stronger security.",
    keyBenefits: [
      "Daylight readability with high brightness options",
      "Reliable 24/7 operation for continuous messaging",
      "CCTV monitoring for crowd safety and incident review",
      "Fast updates for announcements, alerts, and scheduling",
    ],
    useCases: ["Wayfinding & entrances", "Arrivals/departures boards", "Public announcements", "Advertising displays", "Crowd guidance messaging"],
    caseStudyIds: ["3"],
    images: ["/images/solutions/transportation.png"],
    metaTitle: "Transportation LED Displays | Ledial Technologies",
    metaDescription: "LED displays and CCTV surveillance for transportation hubs and public spaces.",
  },
  {
    id: "5",
    slug: "corporate",
    industry: "Corporate",
    title: "Corporate LED & CCTV Solutions",
    problem:
      "Corporate spaces need polished communication for employees and visitors—plus CCTV coverage for entry points, corridors, and critical areas.",
    solution:
      "We deploy fine‑pitch LED displays for lobbies, boardrooms, and auditoriums, and install CCTV systems for reception, entrances, parking, and office perimeters. We integrate recording and remote viewing so operations stay secure and informed.",
    keyBenefits: [
      "Premium visuals for lobbies and executive spaces",
      "Clear readability for presentations and dashboards",
      "Scalable setups from meeting rooms to auditoriums",
      "CCTV monitoring for safety, access control support, and compliance",
    ],
    useCases: ["Lobby welcome walls", "Boardrooms", "Auditoriums", "Experience/demo centers", "KPI & data dashboards"],
    caseStudyIds: [],
    images: ["/images/solutions/corporate.png"],
    metaTitle: "Corporate LED Displays | Ledial Technologies",
    metaDescription: "LED displays and CCTV security solutions for corporate offices, lobbies, and facilities.",
  },
  {
    id: "6",
    slug: "events-entertainment",
    industry: "Events",
    title: "Events & Entertainment LED & CCTV Solutions",
    problem:
      "Events demand big impact, quick setup, and reliable performance—plus CCTV monitoring for crowd safety and venue security.",
    solution:
      "We provide LED display services for concerts, conferences, and exhibitions, and deploy CCTV camera setups for entrances, queues, and high-traffic zones when required. With safe rigging, clear timelines, and on-site support, the event stays smooth and secure.",
    keyBenefits: [
      "High impact visuals for large audiences",
      "Modular setups for stages, backdrops, and booths",
      "Fast deployment with safe mounting/rigging",
      "Optional CCTV monitoring for crowd and venue management",
    ],
    useCases: ["Stage backdrops", "Concert screens", "Conference main screens", "Expo booths", "Outdoor events"],
    caseStudyIds: [],
    images: ["/images/solutions/eventsentertainment.png"],
    metaTitle: "Events & Entertainment LED | Ledial Technologies",
    metaDescription: "LED display services and CCTV monitoring solutions for events and entertainment venues.",
  },
  {
    id: "7",
    slug: "education",
    industry: "Education",
    title: "Education LED & CCTV Solutions",
    problem:
      "Education environments need clear displays for learning and announcements—plus CCTV surveillance to improve campus safety and monitoring.",
    solution:
      "We install LED displays for auditoriums, lecture halls, and campus signage, and deploy CCTV systems for entry points, corridors, and key campus zones. Simple control, reliable uptime, and supported installations keep daily operations smooth.",
    keyBenefits: [
      "Large-format visuals for lectures and events",
      "Easy operation for staff and IT teams",
      "Reliable performance for daily campus use",
      "CCTV coverage for safer campuses and incident review",
    ],
    useCases: ["Auditoriums", "Lecture halls", "Campus signage", "Event halls", "Information boards"],
    caseStudyIds: [],
    images: ["/images/solutions/education.png"],
    metaTitle: "Education LED Displays | Ledial Technologies",
    metaDescription: "LED displays and CCTV surveillance solutions for schools, universities, and campuses.",
  },
  {
    id: "8",
    slug: "healthcare",
    industry: "Healthcare",
    title: "Healthcare LED & CCTV Solutions",
    problem:
      "Healthcare facilities need calm, clear communication for visitors and staff—plus CCTV monitoring for entrances, corridors, and critical areas across 24/7 operations.",
    solution:
      "We deploy LED displays for lobbies, waiting areas, wayfinding, and patient education, and install CCTV systems for entry points, reception, corridors, and parking zones. Reliable uptime, clear messaging, and secure recording help improve operations and safety.",
    keyBenefits: [
      "Clear readability for notices and education content",
      "Reliable 24/7 performance for critical environments",
      "Supports wayfinding and queue/announcement messaging",
      "CCTV monitoring for safety and incident review",
    ],
    useCases: ["Hospital lobbies", "Waiting rooms", "Wayfinding", "Pharmacy counters", "Patient education displays"],
    caseStudyIds: [],
    images: ["/images/solutions/healthcare.png"],
    metaTitle: "Healthcare LED Displays | Ledial Technologies",
    metaDescription: "LED displays and CCTV surveillance for hospitals and healthcare facilities.",
  },
];

export function getSolutionByIndustry(industry: SolutionIndustry): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === industry);
}

export function getIndustryBySlug(industry: SolutionIndustry) {
  return SOLUTION_INDUSTRIES.find((i) => i.slug === industry);
}
