export interface Project {
  id: string;
  slug: string;
  clientName: string;
  location: string;
  productInstalled: string;
  screenSize?: string;
  specs?: string;
  challenge: string;
  result: string;
  images: string[];
  date: string;
  industry?: string; // Links to solutions
  metaTitle: string;
  metaDescription: string;
  featured?: boolean;
}
