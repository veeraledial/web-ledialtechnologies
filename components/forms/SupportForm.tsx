"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { trackConversion } from "@/lib/utils/analytics";

const ISSUE_TYPES = [
  "Technical support",
  "Product inquiry",
  "Warranty",
  "Installation help",
  "Other",
];

export function SupportForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    issueType: "",
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
          type: "support",
          ...formData,
          sourceUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", product: "", issueType: "", message: "" });
        trackConversion("support");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
          <label htmlFor="product" className="block text-sm font-medium text-[var(--charcoal)]">
            Product / Order Reference
          </label>
          <input
            id="product"
            type="text"
            value={formData.product}
            onChange={(e) => setFormData((d) => ({ ...d, product: e.target.value }))}
            placeholder="e.g. Indoor P2, Order #12345"
            className="mt-1 w-full rounded-[6px] border border-[var(--border)] px-4 py-2 focus:border-[var(--brand-red)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-red)]"
          />
        </div>
        <div>
          <label htmlFor="issueType" className="block text-sm font-medium text-[var(--charcoal)]">
            Issue Type *
          </label>
          <select
            id="issueType"
            required
            value={formData.issueType}
            onChange={(e) => setFormData((d) => ({ ...d, issueType: e.target.value }))}
            className="mt-1 w-full rounded-[6px] border border-[var(--border)] px-4 py-2 focus:border-[var(--brand-red)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-red)]"
          >
            <option value="">Select...</option>
            {ISSUE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--charcoal)]">
          Describe your issue *
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
          className="mt-1 w-full rounded-[6px] border border-[var(--border)] px-4 py-2 focus:border-[var(--brand-red)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-red)]"
          placeholder="Please provide as much detail as possible..."
        />
      </div>
      {status === "success" && (
        <div className="rounded-[6px] border border-green-200 bg-green-50 p-4 text-green-800">
          Thank you. Our support team will respond within 24 hours.
        </div>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Support Request"}
      </Button>
    </form>
  );
}
