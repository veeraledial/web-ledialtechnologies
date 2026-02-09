import type { ProductSpecification } from "@/types/product";

interface ProductSpecsProps {
  specifications: ProductSpecification[];
}

export function ProductSpecs({ specifications }: ProductSpecsProps) {
  if (specifications.length === 0) return null;

  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--charcoal)]">
          Technical Specifications
        </h2>
        <div className="mt-6 overflow-hidden rounded-[8px] border border-[var(--border)]">
          <table className="min-w-full divide-y divide-[var(--border)]">
            <thead>
              <tr className="bg-[var(--neutral)]">
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-semibold text-[var(--charcoal)]"
                >
                  Specification
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-semibold text-[var(--charcoal)]"
                >
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)] bg-[var(--surface)]">
              {specifications.map((spec) => (
                <tr key={spec.label}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-[var(--muted)]">
                    {spec.label}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-[var(--charcoal)]">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
