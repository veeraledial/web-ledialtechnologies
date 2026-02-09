import Link from "next/link";
import type { BlogPost } from "@/lib/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-[8px] border border-[var(--border)] bg-[var(--surface)] transition-all hover:border-[var(--brand-red)]/30 hover:shadow-md"
    >
      <div className="aspect-video bg-gradient-to-br from-[var(--neutral-dark)] to-[var(--border)] transition group-hover:from-[var(--brand-navy)]/5 group-hover:to-[var(--brand-red)]/5" />
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{post.category}</span>
        </div>
        <h3 className="mt-2 font-semibold text-[var(--charcoal)] group-hover:text-[var(--brand-red)] transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-[var(--muted)]">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
