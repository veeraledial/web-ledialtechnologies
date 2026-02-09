"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { trackConversion } from "@/lib/utils/analytics";
import type { Product } from "@/types/product";

interface ProductEnquiryFormProps {
  product: Product;
}

export function ProductEnquiryForm({ product }: ProductEnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "product",
          ...formData,
          product: product.name,
          sourceUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", phone: "", message: "" });
        trackConversion("product_enquiry");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section-padding bg-[var(--neutral)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--charcoal)]">
          Request a Quote for {product.name}
        </h2>
        <p className="mt-2 text-[var(--muted)]">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>

        {status === "success" ? (
          <div className="mt-8 rounded-[8px] border border-green-200 bg-green-50 p-6 text-green-800">
            <p className="font-medium">Thank you for your enquiry.</p>
            <p className="mt-1 text-sm">We&apos;ll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-2xl space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--charcoal)]">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                  className="mt-1 w-full rounded-[6px] border border-[var(--border)] px-4 py-2 focus:border-[var(--brand-red)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-red)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--charcoal)]">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                  className="mt-1 w-full rounded-[6px] border border-[var(--border)] px-4 py-2 focus:border-[var(--brand-red)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-red)]"
                />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[var(--charcoal)]">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData((d) => ({ ...d, company: e.target.value }))}
                  className="mt-1 w-full rounded-[6px] border border-[var(--border)] px-4 py-2 focus:border-[var(--brand-red)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-red)]"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--charcoal)]">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData((d) => ({ ...d, phone: e.target.value }))}
                  className="mt-1 w-full rounded-[6px] border border-[var(--border)] px-4 py-2 focus:border-[var(--brand-red)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-red)]"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--charcoal)]">
                Message *
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                className="mt-1 w-full rounded-[6px] border border-[var(--border)] px-4 py-2 focus:border-[var(--brand-red)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-red)]"
                placeholder="Tell us about your project requirements..."
              />
            </div>
            {status === "error" && (
              <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
            )}
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Submit Enquiry"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
