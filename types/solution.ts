export type SolutionIndustry =
  | "retail"
  | "control-rooms"
  | "broadcast-studios"
  | "automotive"
  | "airports-transportation"
  | "corporate"
  | "events-entertainment"
  | "education"
  | "healthcare";

export interface Solution {
  id: string;
  slug: SolutionIndustry;
  industry: string;
  title: string;
  problem: string;
  solution: string;
  keyBenefits?: string[];
  useCases?: string[];
  caseStudyIds: string[];
  images: string[];
  metaTitle: string;
  metaDescription: string;
}

export const SOLUTION_INDUSTRIES: { slug: SolutionIndustry; label: string }[] = [
  { slug: "retail", label: "Retail" },
  { slug: "control-rooms", label: "Control Rooms" },
  { slug: "automotive", label: "Automotive" },
  { slug: "airports-transportation", label: "Transportation" },
  { slug: "corporate", label: "Corporate" },
  { slug: "events-entertainment", label: "Events & Entertainment" },
  { slug: "education", label: "Education" },
  { slug: "healthcare", label: "Healthcare" },
];
