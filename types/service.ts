export interface ServiceSubcategory {
  name: string;
  slug: string;
  image?: string;
  description?: string;
  keyCharacteristics?: string[];
  applications?: string[];
}

export interface ServiceCategory {
  name: string;
  slug: string;
  hero?: {
    order: number;
    titleLines: string[];
    subtitle: string;
    description?: string;
    ctaLabel?: string;
    backgroundImage: string;
    image: string;
  };
  subcategories: ServiceSubcategory[];
}

export interface ServicesData {
  services: {
    categories: ServiceCategory[];
  };
}

