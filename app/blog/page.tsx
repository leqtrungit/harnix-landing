import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SkipLink } from "@/components/skip-link";
import { BlogIndex } from "@/components/sections/blog-index";
import { BlogIndexHeader } from "@/components/sections/blog-index-header";
import { siteConfig } from "@/lib/config";
import { getAllPosts } from "@/lib/posts";

const title = "Blog";
const description = "Nhật ký xây dựng Harnix, từng milestone một.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/blog`,
    title: `${title} — ${siteConfig.name}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} — ${siteConfig.name}`,
    description,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <SkipLink />
      <Header />
      <main id="top" className="mx-auto max-w-[1160px] px-6">
        <BlogIndexHeader />

        <div className="mt-6 pb-20">
          <BlogIndex posts={posts} />
        </div>

        <Footer />
      </main>
    </>
  );
}
