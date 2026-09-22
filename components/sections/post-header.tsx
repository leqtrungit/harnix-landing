"use client";

import { useSite } from "@/components/providers";
import { postCopy, type Post } from "@/content/posts";
import { formatDate } from "@/lib/copy";

export function PostHeader({ post }: { post: Post }) {
  const { t, lang } = useSite();
  const { title } = postCopy(post, lang);
  const reading = t("readingTime").replace("{N}", String(post.readingMinutes));
  const viOnly = lang === "en" && !post.en;

  return (
    <header>
      <a href="/blog" className="link text-[14.5px]">
        {t("backToBlog")}
      </a>
      <div className="mt-4 font-mono text-[11px] text-text3">
        {formatDate(post.date, lang)} · {reading}
      </div>
      <h1 className="mt-2 font-display text-[clamp(28px,4vw,44px)] font-semibold leading-[1.1] tracking-[-0.03em] text-pretty">
        {title}
      </h1>
      {viOnly && (
        <p className="mt-3 text-[13.5px] text-text3">{t("blogViOnlyNote")}</p>
      )}
    </header>
  );
}
