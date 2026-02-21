import type { Project } from "@/types/project";

export const ALL_PROJECTS: Project[] = [
  {
    id: "1",
    slug: "dubai-mall-retail",
    clientName: "Dubai Mall Retail Zone",
    location: "Dubai, UAE",
    productInstalled: "Indoor P2.5 LED Display",
    screenSize: "120m²",
    specs: "48 panels, 2.5mm pixel pitch",
    challenge:
      "Client needed a seamless video wall for high-end retail brand activation with zero bezel visibility. The space had high ambient light and required 24/7 operation with minimal downtime.",
    result:
      "Delivered a 48-panel video wall with perfect uniformity and 24/7 operation since 2023. The installation has become a signature visual element for the retail zone, driving increased foot traffic and brand engagement.",
    images: ["/images/projects/dubai-mall.jpg"],
    date: "2023",
    industry: "retail",
    metaTitle: "Dubai Mall LED Installation | LaDial Technologies",
    metaDescription: "Case study: Indoor LED video wall for Dubai Mall retail.",
    featured: true,
  },
  {
    id: "2",
    slug: "broadcast-control-room",
    clientName: "National TV Network",
    location: "Confidential",
    productInstalled: "Control Room P1.8 LED",
    screenSize: "85m²",
    specs: "Fine pitch 1.8mm, redundant system",
    challenge:
      "24/7 broadcast control room required zero downtime and consistent color accuracy across multiple feeds. The display needed to support complex layouts with real-time switching.",
    result:
      "Deployed redundant system with automatic failover. Zero downtime in 18 months of operation. Color calibration ensured broadcast-accurate visuals across all content sources.",
    images: ["/images/projects/broadcast.jpg"],
    date: "2024",
    industry: "broadcast-studios",
    metaTitle: "Broadcast Control Room LED | LaDial Technologies",
    metaDescription: "Case study: LED video wall for broadcast control room.",
    featured: true,
  },
  {
    id: "3",
    slug: "airport-departure-hall",
    clientName: "International Airport",
    location: "Southeast Asia",
    productInstalled: "Outdoor P4 LED + Indoor P2.5",
    screenSize: "200m² combined",
    specs: "Mixed indoor/outdoor, IP65 outdoor modules",
    challenge:
      "Mixed indoor/outdoor environment with high ambient light and strict safety requirements. Needed to integrate with existing FIDS and meet aviation standards.",
    result:
      "Custom solution with IP65 outdoor modules and high-brightness indoor displays. Passenger flow improved 15%. Seamless integration with airport systems.",
    images: ["/images/projects/airport.jpg"],
    date: "2024",
    industry: "airports-transportation",
    metaTitle: "Airport LED Installation | LaDial Technologies",
    metaDescription: "Case study: Airport LED display installation.",
    featured: true,
  },
  {
    id: "4",
    slug: "corporate-hq-lobby",
    clientName: "Fortune 500 Technology Company",
    location: "Silicon Valley, USA",
    productInstalled: "Indoor P2 LED Video Wall",
    screenSize: "45m²",
    challenge:
      "Corporate headquarters lobby needed an impressive, dynamic display for visitor welcome and company messaging without overwhelming the space.",
    result:
      "Curved P2 video wall that wraps the reception area. Displays real-time company metrics, event schedules, and brand content. Became a focal point for the lobby redesign.",
    images: ["/images/projects/corporate.jpg"],
    date: "2024",
    industry: "corporate",
    metaTitle: "Corporate Lobby LED | LaDial Technologies",
    metaDescription: "Case study: LED video wall for corporate headquarters.",
  },
  {
    id: "5",
    slug: "sports-stadium-outdoor",
    clientName: "Regional Sports Stadium",
    location: "Europe",
    productInstalled: "Outdoor P6 LED Display",
    screenSize: "180m²",
    challenge:
      "Stadium needed a large outdoor display for scoreboards, replays, and advertising that could withstand harsh weather and deliver clear visibility from all seats.",
    result:
      "Installed 180m² outdoor P6 display with 6000 nits brightness. IP65 rated for all weather. Integrated with stadium AV systems for live feeds and advertising content.",
    images: ["/images/projects/stadium.jpg"],
    date: "2023",
    industry: "events-entertainment",
    metaTitle: "Stadium LED Display | LaDial Technologies",
    metaDescription: "Case study: Outdoor LED for sports stadium.",
  },
  {
    id: "6",
    slug: "university-auditorium",
    clientName: "Leading University",
    location: "Australia",
    productInstalled: "Indoor LED Display Service",
    screenSize: "32m²",
    challenge:
      "University auditorium required a large-format display for lectures, events, and virtual conferences with easy operation by non-technical staff.",
    result:
      "Indoor LED display installation with a simplified content workflow and basic staff training. Supports HDMI input and scheduled playback for daily lectures and special events.",
    images: ["/images/projects/education.jpg"],
    date: "2024",
    industry: "education",
    metaTitle: "University Auditorium LED | LaDial Technologies",
    metaDescription: "Case study: LED display for university auditorium.",
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
