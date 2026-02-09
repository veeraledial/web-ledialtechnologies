import type { Product } from "@/types/product";

interface BrochureDownloadProps {
  product: Product;
}

export function BrochureDownload({ product }: BrochureDownloadProps) {
  if (!product.brochureUrl) return null;

  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-[8px] border border-[var(--border)] bg-[var(--neutral)] p-8 sm:flex-row">
          <div>
            <h2 className="text-xl font-bold text-[var(--charcoal)]">
              Download Product Brochure
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Get full technical details and specifications for {product.name}.
            </p>
          </div>
          <a
            href={product.brochureUrl}
            download
            className="inline-flex items-center gap-2 rounded-[6px] bg-[var(--brand-red)] px-6 py-3 font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[var(--brand-red-hover)]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
