"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { trackConversion } from "@/lib/utils/analytics";

const REGIONS = [
  "Asia Pacific",
  "Europe",
  "North America",
  "Latin America",
  "Middle East",
  "Africa",
];

export function DistributorForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    region: "",
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
          type: "distributor",
          company: formData.company,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `${formData.region ? `Region: ${formData.region}\n\n` : ""}${formData.message}`,
          sourceUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({
          company: "",
          name: "",
          email: "",
          phone: "",
          region: "",
          message: "",
        });
        trackConversion("distributor");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-[var(--charcoal)]">
          Company Name *
        </label>
        <input
          id="company"
          type="text"
          required
          value={formData.company}
          onChange={(e) => setFormData((d) => ({ ...d, company: e.target.value }))}
          className="mt-1 w-full rounded-[6px] border border-[var(--border)] px-4 py-2 focus:border-[var(--brand-red)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-red)]"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--charcoal)]">
            Contact Name *
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
        <div>
          <label htmlFor="region" className="block text-sm font-medium text-[var(--charcoal)]">
            Region of Interest *
          </label>
          <select
            id="region"
            required
            value={formData.region}
            onChange={(e) => setFormData((d) => ({ ...d, region: e.target.value }))}
            className="mt-1 w-full rounded-[6px] border border-[var(--border)] px-4 py-2 focus:border-[var(--brand-red)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-red)]"
          >
            <option value="">Select region...</option>
            {REGIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--charcoal)]">
          Tell us about your business *
        </label>
        <textarea
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
          placeholder="Describe your company, market focus, and distribution experience..."
          className="mt-1 w-full rounded-[6px] border border-[var(--border)] px-4 py-2 focus:border-[var(--brand-red)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-red)]"
        />
      </div>
      {status === "success" && (
        <div className="rounded-[6px] border border-green-200 bg-green-50 p-4 text-green-800">
          Thank you for your interest. Our partnerships team will be in touch.
        </div>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Enquiry"}
      </Button>
    </form>
  );
}
