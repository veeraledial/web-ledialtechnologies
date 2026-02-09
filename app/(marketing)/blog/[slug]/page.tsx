import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug } from "@/lib/data/blog";
import { BlogContent } from "@/components/blog/BlogContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { getArticleJsonLd, getBreadcrumbJsonLd, getAbsoluteUrl } from "@/lib/utils/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const articleUrl = getAbsoluteUrl(`/blog/${post.slug}`);
  const articleJsonLd = getArticleJsonLd({
    title: post.title,
    description: post.metaDescription || post.excerpt,
    author: post.author,
    datePublished: post.date,
    url: articleUrl,
  });
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: getAbsoluteUrl("/") },
    { name: "Blog", url: getAbsoluteUrl("/blog") },
    { name: post.title, url: articleUrl },
  ]);

  return (
    <div>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <section className="bg-[var(--brand-navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="text-sm text-white/70 hover:text-white"
          >
            ← Back to Blog
          </Link>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
            {post.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-white/80">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
        </div>
      </section>

      <article className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
          <BlogContent content={post.content} />
        </div>
      </article>
    </div>
  );
}
