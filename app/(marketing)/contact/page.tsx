import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { getLocalBusinessJsonLd, getBreadcrumbJsonLd, getAbsoluteUrl } from "@/lib/utils/seo";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with LaDial Technologies. Request a quote, ask about our LED display solutions, or reach our sales team.",
};

export default function ContactPage() {
  const contactJsonLd = getLocalBusinessJsonLd();
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: getAbsoluteUrl("/") },
    { name: "Contact", url: getAbsoluteUrl("/contact") },
  ]);

  return (
    <div>
      <JsonLd data={[contactJsonLd, breadcrumbJsonLd]} />
      {/* Hero */}
      <section className="bg-[var(--brand-navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Have a question or want to discuss your LED display project? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-[var(--charcoal)]">
                Get in Touch
              </h2>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-sm font-medium text-[var(--brand-red)]">
                    General Enquiries
                  </p>
                  <a
                    href="mailto:info@ladial.com"
                    className="text-[var(--muted)] hover:text-[var(--brand-red)]"
                  >
                    info@ladial.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--brand-red)]">
                    Sales
                  </p>
                  <a
                    href="mailto:sales@ladial.com"
                    className="text-[var(--muted)] hover:text-[var(--brand-red)]"
                  >
                    sales@ladial.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--brand-red)]">
                    Support
                  </p>
                  <a
                    href="/support"
                    className="text-[var(--muted)] hover:text-[var(--brand-red)]"
                  >
                    Technical Support →
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-[var(--charcoal)]">
                Send a Message
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
