import { DistributorForm } from "@/components/forms/DistributorForm";

export const metadata = {
  title: "Become a Distributor",
  description:
    "Join the LaDial Technologies distributor network. Partner with us to bring professional LED displays to your market.",
};

export default function DistributorsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--brand-navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Become a Distributor
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Join our global network of authorized distributors. Partner with LaDial Technologies to bring professional LED displays to your market.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-[var(--charcoal)]">
                Why Partner With Us
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Premium product range",
                  "Competitive margins",
                  "Technical training & support",
                  "Marketing materials",
                  "Regional exclusivity options",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[var(--muted)]"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-[var(--charcoal)]">
                Partnership Enquiry
              </h2>
              <p className="mt-2 text-[var(--muted)]">
                Complete the form below and our partnerships team will contact you.
              </p>
              <div className="mt-6">
                <DistributorForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="section-padding bg-[var(--neutral)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--charcoal)]">
            Global Presence
          </h2>
          <p className="mt-2 text-[var(--muted)]">
            We serve 40+ countries through our distributor network.
          </p>
          <div className="mt-6 aspect-video overflow-hidden rounded-[8px] border border-[var(--border)] bg-[var(--neutral-dark)]">
            {/* Google Maps embed placeholder - add your embed URL */}
            <div className="flex h-full w-full items-center justify-center text-[var(--muted)]">
              <p>Map placeholder – Add Google Maps embed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
