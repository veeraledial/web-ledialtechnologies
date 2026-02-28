import type { Project } from "@/types/project";

export const ALL_PROJECTS: Project[] = [
  {
    id: "1",
    slug: "sarath-city-capital-mall",
    clientName: "Sarath City Capital Mall",
    location: "Kondapur, Hyderabad",
    productInstalled: "Indoor P2.5 LED Video Wall",
    screenSize: "120m²",
    specs: "48 panels, 2.5mm pixel pitch",
    challenge:
      "Mall management needed a seamless digital wall for atrium campaigns, festival promotions, and daily announcements with high visibility in strong ambient light.",
    result:
      "Delivered a 48-panel P2.5 video wall with centralized scheduling and remote monitoring. The display now runs campaigns, offers, and event content throughout the day with reliable output.",
    images: ["/images/projects/dubai-mall.jpg"],
    date: "2024",
    industry: "retail",
    metaTitle: "Sarath City Capital Mall LED Installation | Ledial Technologies",
    metaDescription: "Case study: Indoor P2.5 LED video wall for Sarath City Capital Mall, Hyderabad.",
    featured: true,
  },
  {
    id: "2",
    slug: "nexus-hyderabad-control-room",
    clientName: "Nexus Hyderabad Mall Operations Center",
    location: "Kukatpally, Hyderabad",
    productInstalled: "Control Room P1.8 LED + CCTV Command Center",
    screenSize: "85m² wall + 140 camera feeds",
    specs: "Fine pitch 1.8mm wall, VMS integration, redundant NVR setup",
    challenge:
      "The operations team required a 24/7 setup combining CCTV surveillance, parking dashboards, and facility alerts in a single control environment with zero downtime.",
    result:
      "Implemented a redundant P1.8 wall with centralized CCTV monitoring, recording failover, and calibrated multi-source visuals for stable real-time operations.",
    images: ["/images/projects/broadcast.jpg"],
    date: "2024",
    industry: "control-rooms",
    metaTitle: "Hyderabad Control Room LED & CCTV | Ledial Technologies",
    metaDescription: "Case study: Integrated LED wall and CCTV command center for Nexus Hyderabad mall operations.",
    featured: true,
  },
  {
    id: "3",
    slug: "rgia-departure-hall",
    clientName: "Rajiv Gandhi International Airport",
    location: "Shamshabad, Hyderabad",
    productInstalled: "Outdoor P4 LED + Indoor P2.5 + CCTV Surveillance",
    screenSize: "200m² displays + 96 CCTV cameras",
    specs: "Mixed indoor/outdoor LED, IP65 modules, VMS integration",
    challenge:
      "The airport needed both high-visibility passenger displays and security surveillance coverage across critical movement zones with centralized monitoring.",
    result:
      "Deployed integrated LED and CCTV systems with centralized control room access. Passenger information visibility and real-time security monitoring improved across key zones.",
    images: ["/images/projects/airport.jpg"],
    date: "2024",
    industry: "airports-transportation",
    metaTitle: "RGIA Hyderabad LED & CCTV Deployment | Ledial Technologies",
    metaDescription: "Case study: Integrated airport LED display and CCTV surveillance setup at Rajiv Gandhi International Airport.",
    featured: true,
  },
  {
    id: "4",
    slug: "hitec-city-corporate-lobby",
    clientName: "HITEC City Corporate Campus",
    location: "HITEC City, Hyderabad",
    productInstalled: "Indoor P2 LED Wall + Corporate CCTV Security",
    screenSize: "45m² wall + 64 IP cameras",
    challenge:
      "The corporate campus required a premium lobby display and a modern CCTV security layer for reception, corridors, and entry points.",
    result:
      "Delivered a curved P2 lobby wall with scheduled content plus CCTV coverage integrated to the security desk for daily monitoring and incident review.",
    images: ["/images/projects/corporate.jpg"],
    date: "2024",
    industry: "corporate",
    metaTitle: "HITEC City Corporate LED & CCTV | Ledial Technologies",
    metaDescription: "Case study: Corporate campus lobby LED wall and CCTV security deployment in Hyderabad.",
  },
  {
    id: "5",
    slug: "inorbit-mall-event-arena",
    clientName: "Inorbit Mall Event Arena",
    location: "HITEC City, Hyderabad",
    productInstalled: "Outdoor P6 LED Display",
    screenSize: "180m²",
    challenge:
      "The event arena needed a large outdoor display for live programs, sponsor loops, and seasonal event promotions in varying weather conditions.",
    result:
      "Installed a 180m² P6 outdoor display with high-brightness output and weatherproof modules. The setup now supports live visuals and event advertising reliably.",
    images: ["/images/projects/stadium.jpg"],
    date: "2024",
    industry: "events-entertainment",
    metaTitle: "Inorbit Mall Event LED Display | Ledial Technologies",
    metaDescription: "Case study: Outdoor LED display setup for events at Inorbit Mall, Hyderabad.",
  },
  {
    id: "6",
    slug: "university-of-hyderabad-auditorium",
    clientName: "University of Hyderabad Auditorium",
    location: "Gachibowli, Hyderabad",
    productInstalled: "Indoor LED Display + Auditorium CCTV System",
    screenSize: "32m² display + 28 IP cameras",
    challenge:
      "The auditorium required a dependable display setup for lectures and events, along with CCTV monitoring for entrances, backstage areas, and crowd movement.",
    result:
      "Delivered an indoor LED system with operator training and integrated CCTV monitoring. The team now runs daily sessions and event-day security more efficiently.",
    images: ["/images/projects/education.jpg"],
    date: "2024",
    industry: "education",
    metaTitle: "University of Hyderabad LED & CCTV | Ledial Technologies",
    metaDescription: "Case study: Auditorium LED display and CCTV monitoring deployment for University of Hyderabad.",
  },
];

export const FEATURED_PROJECTS = ALL_PROJECTS.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.slug === slug);
}

export function getProjectsByIndustry(industry?: string): Project[] {
  if (!industry) return ALL_PROJECTS;
  return ALL_PROJECTS.filter((p) => p.industry === industry);
}
