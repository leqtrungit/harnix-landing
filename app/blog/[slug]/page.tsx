import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SkipLink } from "@/components/skip-link";
import { mdxComponents } from "@/components/mdx-components";
import { PostHeader } from "@/components/sections/post-header";
import { siteConfig } from "@/lib/config";
import { getAllSlugs, getPostSource } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const source = getPostSource(slug);
  if (!source) return {};

  const { post } = source;
  const title = post.en?.title ?? post.title;
  const description = post.en?.excerpt ?? post.excerpt;

  return {
    title,
    description,
    alternates: { canonical: post.url },
    openGraph: {
      type: "article",
      url: `${siteConfig.url}${post.url}`,
      title: `${title} — ${siteConfig.name}`,
      description,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${siteConfig.name}`,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const source = getPostSource(slug);
  if (!source) notFound();

  const { post, content } = source;

  return (
    <>
      <SkipLink />
      <Header />
      <main id="top" className="mx-auto max-w-[1160px] px-6">
        <div className="mx-auto max-w-[680px] pb-24 pt-6">
          <PostHeader post={post} />
          <article className="mt-8">
            <MDXRemote source={content} components={mdxComponents} />
          </article>
        </div>

        <Footer />
      </main>
    </>
  );
}
