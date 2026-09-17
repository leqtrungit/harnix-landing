import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

/**
 * The landing page is the only route that exists today. `/blog` and
 * `/blog/<slug>` are linked from the page but not built yet, so they are
 * deliberately left out — submitting URLs that 404 costs crawl budget and
 * earns coverage errors. Add them here the moment those routes ship:
 *
 *   ...posts.map((post) => ({
 *     url: `${siteConfig.url}${post.url}`,
 *     lastModified: new Date(post.date),
 *     changeFrequency: "yearly" as const,
 *     priority: 0.6,
 *   })),
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
