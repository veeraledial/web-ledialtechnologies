import Link from "next/link";
import { getAllPosts } from "@/lib/data/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Blog & News",
  description:
    "Industry insights, technology updates, and product news from LaDial Technologies. LED display technology, applications, and best practices.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--brand-navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Blog & News
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Industry insights, technology updates, and product news from LaDial Technologies.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-[var(--neutral)]">
        <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--charcoal)]">
            Stay Updated
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
            Subscribe to our newsletter for the latest industry news and product updates.
          </p>
          <Link href="/contact" className="mt-8 inline-block">
            <Button variant="primary" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
