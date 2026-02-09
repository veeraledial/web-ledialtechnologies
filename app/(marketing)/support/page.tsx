import Link from "next/link";
import { SupportForm } from "@/components/forms/SupportForm";

export const metadata = {
  title: "Technical Support",
  description:
    "LaDial Technologies technical support. Get help with your LED display installation, troubleshooting, or warranty.",
};

export default function SupportPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--brand-navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Link
            href="/contact"
            className="text-sm text-white/70 hover:text-white"
          >
            ← Back to Contact
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technical Support
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Need help with your LaDial LED display? Submit a support request and our team will respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
          <SupportForm />
        </div>
      </section>
    </div>
  );
}
