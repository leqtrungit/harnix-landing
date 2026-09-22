import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Post } from "@/content/posts";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

type PostFrontmatter = {
  date: string;
  readingMinutes: number;
  title: string;
  excerpt: string;
  en?: { title: string; excerpt: string };
};

function filenames(): string[] {
  return fs.readdirSync(POSTS_DIR).filter((name) => name.endsWith(".mdx"));
}

function readFile(filename: string) {
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
  return matter(raw);
}

function toPost(slug: string, data: PostFrontmatter): Post {
  return {
    slug,
    date: data.date,
    readingMinutes: data.readingMinutes,
    title: data.title,
    excerpt: data.excerpt,
    url: `/blog/${slug}`,
    en: data.en,
  };
}

/** Every post, newest first. Used by the landing page's card grid, `/api/posts` and `/blog`. */
export function getAllPosts(): Post[] {
  return filenames()
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const { data } = readFile(filename);
      return toPost(slug, data as PostFrontmatter);
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getAllSlugs(): string[] {
  return filenames().map((filename) => filename.replace(/\.mdx$/, ""));
}

/**
 * A single post's front matter plus its raw MDX body, or `null` if the slug
 * does not match a file on disk. The membership check against the real
 * directory listing (rather than reading straight from the request's `slug`)
 * is what keeps this safe against a path-traversal-shaped param.
 */
export function getPostSource(slug: string): { post: Post; content: string } | null {
  const filename = `${slug}.mdx`;
  if (!filenames().includes(filename)) return null;

  const { data, content } = readFile(filename);
  return { post: toPost(slug, data as PostFrontmatter), content };
}
