/**
 * The knobs the design exposed as editable props. They are configuration, not
 * state — flip them with env vars at build time rather than in the UI.
 */

export type DemoStatus = "coming-soon" | "ready";

const demoStatus: DemoStatus =
  process.env.NEXT_PUBLIC_DEMO_STATUS === "ready" ? "ready" : "coming-soon";

export const siteConfig = {
  name: "Harnix",
  domain: "harnix.vn",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://harnix.vn",
  email: "hello@harnix.vn",

  /** Shown in the hero status pill: "Đang xây dựng · M1". */
  milestone: process.env.NEXT_PUBLIC_MILESTONE ?? "M1",

  /** Availability tags on the three "how it works" steps. */
  stepTags: ["Available", "Available", "M2"] as const,

  demo: {
    status: demoStatus,
    /** Runtime claim in the demo heading — "Xem cả quy trình trong {N} phút". */
    minutes: Number(process.env.NEXT_PUBLIC_DEMO_MINUTES ?? 3),
    /** Only used once `status` is "ready". */
    videoUrl: process.env.NEXT_PUBLIC_DEMO_VIDEO_URL ?? "",
    transcriptUrl: process.env.NEXT_PUBLIC_DEMO_TRANSCRIPT_URL ?? "",
  },

  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
    github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
  },

  /** Integration docs are not written yet — the link stays inert until they are. */
  docsUrl: process.env.NEXT_PUBLIC_DOCS_URL ?? "",
} as const;
