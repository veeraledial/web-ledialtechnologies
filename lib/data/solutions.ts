import type { Solution, SolutionIndustry } from "@/types/solution";
import { SOLUTION_INDUSTRIES } from "@/types/solution";

export const SOLUTIONS: Solution[] = [
  {
    id: "1",
    slug: "retail",
    industry: "Retail",
    title: "Retail LED Solutions",
    problem:
      "Retailers need to capture attention in competitive environments, showcase products dynamically, and create immersive brand experiences that drive foot traffic and sales.",
    solution:
      "Our indoor fine-pitch LED displays deliver stunning visuals for storefronts, in-store video walls, and digital signage. High brightness, seamless bezels, and 24/7 reliability make them ideal for retail environments. Transform window displays and create immersive product showcases.",
    caseStudyIds: ["1"],
    images: ["/images/solutions/retail.jpg"],
    metaTitle: "Retail LED Display Solutions | LaDial Technologies",
    metaDescription: "LED displays for retail stores, malls, and brand experiences.",
  },
  {
    id: "2",
    slug: "control-rooms",
    industry: "Control Rooms",
    title: "Control Room LED Solutions",
    problem:
      "Control rooms require zero downtime, consistent color accuracy, minimal bezel visibility, and the ability to display multiple data sources simultaneously for 24/7 operations.",
    solution:
      "Our fine-pitch LED video walls are engineered for mission-critical environments. Seamless cabinets, redundant systems, and professional calibration ensure reliable operation. Ideal for security centers, energy grids, and traffic management.",
    caseStudyIds: ["2"],
    images: ["/images/solutions/control-rooms.jpg"],
    metaTitle: "Control Room LED Video Walls | LaDial Technologies",
    metaDescription: "Professional LED displays for control rooms and command centers.",
  },
  {
    id: "3",
    slug: "broadcast-studios",
    industry: "Broadcast",
    title: "Broadcast Studio LED Solutions",
    problem:
      "Broadcast studios need studio-quality displays with perfect color reproduction, no flicker under camera, and the flexibility to create dynamic backdrops and virtual sets.",
    solution:
      "Our broadcast-grade LED displays offer camera-friendly refresh rates, accurate color calibration, and seamless integration with production workflows. Create stunning backgrounds and virtual environments for TV and streaming.",
    caseStudyIds: ["2"],
    images: ["/images/solutions/broadcast.jpg"],
    metaTitle: "Broadcast Studio LED Displays | LaDial Technologies",
    metaDescription: "Studio LED displays for TV, streaming, and production.",
  },
  {
    id: "4",
    slug: "airports-transportation",
    industry: "Transport",
    title: "Airports & Transportation LED Solutions",
    problem:
      "Transport hubs face high ambient light, mixed indoor/outdoor environments, strict safety requirements, and the need to guide millions of passengers with clear, dynamic information.",
    solution:
      "Our outdoor and indoor LED solutions are built for transportation. High brightness for daylight visibility, IP65 for outdoor gates, and reliable 24/7 operation. Perfect for FIDS, wayfinding, and advertising.",
    caseStudyIds: ["3"],
    images: ["/images/solutions/transport.jpg"],
    metaTitle: "Airport & Transport LED Displays | LaDial Technologies",
    metaDescription: "LED displays for airports, stations, and transport hubs.",
  },
  {
    id: "5",
    slug: "corporate",
    industry: "Corporate",
    title: "Corporate LED Solutions",
    problem:
      "Corporate headquarters and offices need impressive lobbies, engaging meeting rooms, and dynamic communication displays that reflect brand excellence.",
    solution:
      "Fine-pitch indoor LED displays for lobbies, boardrooms, and atriums. Create impactful first impressions, display real-time data, and enhance collaboration with stunning visual technology.",
    caseStudyIds: [],
    images: ["/images/solutions/corporate.jpg"],
    metaTitle: "Corporate LED Displays | LaDial Technologies",
    metaDescription: "LED displays for corporate lobbies and meeting rooms.",
  },
  {
    id: "6",
    slug: "events-entertainment",
    industry: "Events",
    title: "Events & Entertainment LED Solutions",
    problem:
      "Events demand flexible, high-impact displays that can be deployed quickly, shaped to fit unique spaces, and deliver immersive visuals for audiences.",
    solution:
      "Our indoor and outdoor LED display services support concerts, conferences, exhibitions, and live events. From planning to installation and commissioning, we deliver high-impact visuals that captivate audiences.",
    caseStudyIds: [],
    images: ["/images/solutions/events.jpg"],
    metaTitle: "Events & Entertainment LED | LaDial Technologies",
    metaDescription: "LED display services for events and entertainment.",
  },
  {
    id: "7",
    slug: "education",
    industry: "Education",
    title: "Education LED Solutions",
    problem:
      "Schools and universities need large-format displays for auditoriums, lecture halls, and campus signage that are reliable, easy to use, and engaging for students.",
    solution:
      "Fine‑pitch indoor LED displays and digital standee solutions for educational environments. Enhance learning with large-format visuals, campus wayfinding, and event communication—delivered with installation and support.",
    caseStudyIds: [],
    images: ["/images/solutions/education.jpg"],
    metaTitle: "Education LED Displays | LaDial Technologies",
    metaDescription: "LED displays for schools, universities, and campuses.",
  },
  {
    id: "8",
    slug: "healthcare",
    industry: "Healthcare",
    title: "Healthcare LED Solutions",
    problem:
      "Healthcare facilities need clear, reliable displays for waiting rooms, wayfinding, patient information, and staff communication—often in demanding 24/7 environments.",
    solution:
      "Our LED displays offer crisp readability, reliable operation, and hygienic surfaces. Ideal for hospital lobbies, waiting areas, and wayfinding. Support patient experience and operational efficiency.",
    caseStudyIds: [],
    images: ["/images/solutions/healthcare.jpg"],
    metaTitle: "Healthcare LED Displays | LaDial Technologies",
    metaDescription: "LED displays for hospitals and healthcare facilities.",
  },
];

export function getSolutionByIndustry(industry: SolutionIndustry): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === industry);
}

export function getIndustryBySlug(industry: SolutionIndustry) {
  return SOLUTION_INDUSTRIES.find((i) => i.slug === industry);
}
