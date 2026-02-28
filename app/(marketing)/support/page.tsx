import Link from "next/link";
import { SupportForm } from "@/components/forms/SupportForm";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";

export const metadata = {
  title: "Technical Support",
  description:
    "Ledial Technologies technical support. Get help with your LED display installation, troubleshooting, or warranty.",
};

export default function SupportPage() {
  return (
    <div>
      <PageHero
        label="Support"
        title="Technical Support"
        subtitle="Need help with your Ledial LED display? Submit a support request and our team will respond within 24 hours."
        actions={
          <Link href="/contact">
            <Button variant="outline-white" size="sm">
              ← Back to Contact
            </Button>
          </Link>
        }
      />

      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
          <SupportForm />
        </div>
      </section>
    </div>
  );
}
