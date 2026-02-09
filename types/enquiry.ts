export type EnquiryType =
  | "product"
  | "quote"
  | "contact"
  | "support"
  | "distributor";

export interface Enquiry {
  type: EnquiryType;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  product?: string;
  subject?: string;
  message: string;
  sourceUrl?: string;
  createdAt: string;
}

export interface EnquiryFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  product?: string;
  subject?: string;
  message: string;
}
