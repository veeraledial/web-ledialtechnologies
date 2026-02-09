"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { trackConversion } from "@/lib/utils/analytics";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
          type: "contact",
          ...formData,
          sourceUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        trackConversion("contact");
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
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[var(--charcoal)]">
          Subject *
        </label>
        <input
          id="subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData((d) => ({ ...d, subject: e.target.value }))}
          placeholder="How can we help?"
          className="mt-1 w-full rounded-[6px] border border-[var(--border)] px-4 py-2 focus:border-[var(--brand-red)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-red)]"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--charcoal)]">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
          className="mt-1 w-full rounded-[6px] border border-[var(--border)] px-4 py-2 focus:border-[var(--brand-red)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-red)]"
          placeholder="Tell us about your project or enquiry..."
        />
      </div>
      {status === "success" && (
        <div className="rounded-[6px] border border-green-200 bg-green-50 p-4 text-green-800">
          Thank you for your message. We&apos;ll be in touch shortly.
        </div>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
