import type { Lang } from "@/lib/copy";

export type Post = {
  slug: string;
  /** ISO date — formatted for display at render time. */
  date: string;
  readingMinutes: number;
  /** Vietnamese, the language the posts are written in. */
  title: string;
  excerpt: string;
  url: string;
  /**
   * English rendering of the card. A post without it keeps its Vietnamese
   * title and excerpt in English mode rather than showing nothing — the post
   * itself is still Vietnamese, so that is the honest fallback.
   */
  en?: { title: string; excerpt: string };
};

export function postCopy(post: Post, lang: Lang) {
  if (lang === "en" && post.en) return post.en;
  return { title: post.title, excerpt: post.excerpt };
}

/**
 * Build-in-public posts. Swap this module for a CMS/MDX reader; the API route
 * and the section below it do not care where the rows come from.
 */
export const posts: Post[] = [
  {
    slug: "moi-cau-tra-loi-la-mot-run",
    date: "2026-09-15",
    readingMinutes: 6,
    title: "Vì sao mỗi câu trả lời phải là một Run",
    excerpt:
      "Durable execution nghe như chuyện hạ tầng, nhưng nó quyết định việc bạn có trả lời được khách hay không.",
    url: "/blog/moi-cau-tra-loi-la-mot-run",
    en: {
      title: "Why every answer has to be a Run",
      excerpt:
        "Durable execution sounds like an infrastructure concern, but it decides whether your customer gets an answer at all.",
    },
  },
  {
    slug: "tach-du-lieu-tu-ngay-dau",
    date: "2026-09-02",
    readingMinutes: 4,
    title: "Tách dữ liệu từ ngày đầu",
    excerpt:
      "Multi-tenant không phải tính năng thêm sau. Ghi chú thiết kế tầng tenancy của Harnix.",
    url: "/blog/tach-du-lieu-tu-ngay-dau",
    en: {
      title: "Separating data from day one",
      excerpt:
        "Multi-tenancy is not a feature you bolt on later. Design notes on the Harnix tenancy layer.",
    },
  },
  {
    slug: "console-khong-co-top-bar",
    date: "2026-08-21",
    readingMinutes: 5,
    title: "Console không có top bar",
    excerpt:
      "Một quyết định nhỏ về điều hướng, và lý do nó tiết kiệm thời gian cho operator.",
    url: "/blog/console-khong-co-top-bar",
    en: {
      title: "A console with no top bar",
      excerpt:
        "A small navigation decision, and why it saves operators time.",
    },
  },
];
