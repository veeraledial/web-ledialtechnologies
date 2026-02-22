"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { trackConversion } from "@/lib/utils/analytics";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 500));
      setStatus("success");
      setEmail("");
      trackConversion("newsletter");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
          className="min-w-0 flex-1 rounded-xl border border-[var(--color-light)]/30 bg-[var(--color-light)]/10 px-4 py-2.5 text-sm text-[var(--color-light)] placeholder:text-[var(--color-light)]/50 transition focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 disabled:opacity-50"
        />
        <Button type="submit" size="sm" disabled={status === "loading"}>
          {status === "loading" ? "..." : "Join"}
        </Button>
      </div>
      {status === "success" && (
        <p className="mt-2 text-xs text-green-400">Thanks for subscribing!</p>
      )}
      {status === "error" && (
        <p className="mt-2 text-xs text-red-400">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
