interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  const paragraphs = content
    .trim()
    .split("\n\n")
    .filter((p) => p.trim());

  return (
    <article className="prose prose-lg max-w-none">
      {paragraphs.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mt-8 text-xl font-bold text-[var(--charcoal)] first:mt-0"
            >
              {block.replace("## ", "")}
            </h2>
          );
        }
        if (block.startsWith("### ")) {
          return (
            <h3
              key={i}
              className="mt-6 text-lg font-semibold text-[var(--charcoal)]"
            >
              {block.replace("### ", "")}
            </h3>
          );
        }
        if (block.startsWith("|")) {
          const rows = block.split("\n").filter((r) => r.trim());
          const header = rows[0].split("|").filter((c) => c.trim());
          const dataRows = rows.slice(2); // Skip header and separator
          return (
            <div key={i} className="my-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-[var(--border)] rounded-[8px] border border-[var(--border)]">
                <thead>
                  <tr className="bg-[var(--surface)]">
                    {header.map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-sm font-semibold text-[var(--charcoal)]"
                      >
                        {h.trim()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {dataRows.map((row, ri) => (
                    <tr key={ri}>
                      {row
                        .split("|")
                        .filter((c) => c.trim())
                        .map((cell) => (
                          <td
                            key={cell}
                            className="px-4 py-3 text-sm text-[var(--muted)]"
                          >
                            {cell.trim()}
                          </td>
                        ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        if (block.startsWith("- ")) {
          const items = block.split("\n").filter((l) => l.trim());
          return (
            <ul key={i} className="my-4 list-disc space-y-2 pl-6 text-[var(--muted)]">
              {items.map((item, j) => (
                <li key={j}>{item.replace(/^-\s*/, "")}</li>
              ))}
            </ul>
          );
        }
        if (block.startsWith("1. ")) {
          const items = block.split("\n").filter((l) => l.trim());
          return (
            <ol key={i} className="my-4 list-decimal space-y-2 pl-6 text-[var(--muted)]">
              {items.map((item, j) => (
                <li key={j}>{item.replace(/^\d+\.\s*/, "")}</li>
              ))}
            </ol>
          );
        }
        return (
          <p key={i} className="my-4 text-[var(--muted)] leading-relaxed">
            {block}
          </p>
        );
      })}
    </article>
  );
}
